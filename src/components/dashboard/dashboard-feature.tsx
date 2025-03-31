/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4cjiXy9XULYxkd6UJYWMV9sxGmAxiYW92qt92YDShu97pw7VZWjqNd8oGWG47TJCitbXR38VHQdx1VMqb1BbbAH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oCF5giCibqAeLborNMcBjuNPXdS3VUZf7Pd4yiCyamKfCD4ja6AMKzhGpEEVdX4EGE4KU3D5kAtfqbSH1rt87RP",
  "key1": "3DBbdaz4AYTwcejZviJgAhn8VLRY7vxyamPDS9byaPwaTocpWjBu6RfTc2yZNPCHifQCrkg1zVtASURQBsBePwx7",
  "key2": "v8rHCdGUe2zP67gsWgNiQJ9AiyyXN4qy8KmuTdbop33ZBLpJKzw4XGbjhBiSnW4KPJnMekgwwMozNd9EajvXrp4",
  "key3": "5yx3NLnTSYZzH7F8j1ZrSLkt9sgXikr3VoRuL678uT7ML7JDL95Kwtbry9kd5uabgH9AaZpgD5Mn4gju7FJ5s3WT",
  "key4": "WxYL3e8nqQWgNVNMJvCgYr9dmbKcQGoUX6SSf8KkczvyBQ2A7fLMH5TjNJgsBa2NFUZPPX2fHBXCckKZcu2Vomd",
  "key5": "toyKZD9BbBkLbSVqucKPtnQR25TYJvNk4HNfCmugtRS52RfM5tsFzhKaJ42BuZ5GzpZsGVkCWt3f86M4SgkuWNH",
  "key6": "2wt3rqdXsmdJwWdN2tUSSWCkZXGTBcu7J1jakwK527oSYfFSUsgqzKDQd18Efv2Bfezn4rC6EzMeFifBep8iV2SG",
  "key7": "3KT3HReNvsYXPnJf1yygnNMyhZuFaLGJop5pCyGZzT4uFAMzDWPhgLtZPAhGpnUEpDD4y87v7JaSaxv4cDSRiEAF",
  "key8": "36QBB736m88sfd6QUZix2hUKXfpk9KSyBW1L6chjREvSxe42sWNXFoCZbRvMv3yGpUkFqmMi4VExmWM13P358vxM",
  "key9": "3nHDZGNAohk48WZzGMGS7YFNXjvXZPmATJ174XKZnZzkhK9a3ujJpTvqekEkbFWLc891gzg1m1T9YCPdhkDqDAdu",
  "key10": "22nUderj7jepFbVzLqGSH21P21SeGkP2mm8iHfnXyXEHATy9BRZZtup3nNhumXG7uLX3Rq86faTAHaLBZnLRxLWR",
  "key11": "2w41LjuSYHJWgZwkH7ycqGwXNPkFJQDvj4em4s1B2sxUmoU9ko3c8yicWRxiLxMkctL7BgbX1RhFvprZ3v7VsWJt",
  "key12": "55HQ3ruMeem7411zQEH2ybEFCH2fRRwBdq3KcnLKwpcsi5kwGUpHXNP29KGMSfoHGTJR2Qz8k394byNnfiQPSXXQ",
  "key13": "3nLoh976W3LPCacxwemAbQ1TST5qCad1KWBYzj9AbMKyvSkmZKhLFKSTrFkq2sKNVFMdVo84FWnoMUZweNjCAvBk",
  "key14": "4cSoxMafuoA1v7CcYm4AfKDyMMYqzwfNi33qb9QDZbbS4miWoRbu8U55pwmQuKrfkfXr4GmKVgasS9D4B4auFybF",
  "key15": "4EdrqVwKUxt3kkhwRbfqE4bAFcfL5MRp4yXYkJHCMeyW7XLUbeFxYFMz3SXZdpoFfwJqpXXsWaYm9fGiJ9dt9HyH",
  "key16": "RiLLGbqEwKNkDjL49Fx8jueYQ8c6P3b1HkbaADWEvCSrLxijRCHfJiPq54urNDTr1N4Sumd41TTJZX4eg19KgnG",
  "key17": "5QYnQuVYsx6PANMabJDdD6SWgASm5p9LGp4ctvujcjwtNrexswQj1ckQzZhtmD8x23TAsH9XnKcjpej9oAf2CpNb",
  "key18": "4jQkvvhApvwTCR8XdrbV1zZR8CxAceXY8PVr7A69iSyG3Gg6F2erVYABwjqRzHZh2t31GjQCuMwMc4aBjEp27ksX",
  "key19": "2sZhgRuBYcqewLa6s8ZFT6U3t4LYtBiE6k3vh2qd8N7hJzXtdNnBhHwoqUX6NGo3s3SGiPaDtqSkK7pBLMjhhBRg",
  "key20": "2Aojqp2S3iHBNkppqRtQhBqXNgcKUzh9xGqJwhxeYMsV4qc7N4D2YhYDUPHdEPK2HDnzKUiG67qUA7mXxXW1tGsn",
  "key21": "4wA3UKdMBTBUbyaDPyc6HgU5kLDE7yoFMKQzdwNmfoeAk8ZztUQAxLTPQEswzhKNWnUd2T2wyBLiSuodqZrV2TzV",
  "key22": "2vsSQCT5DWEYRJrP9rxLaHT6PdfB4oY9UkMP1NSVisXzHdNr3n282Aq8vL5gufGH4eN7wHrskjnxfB7FDLfGU77w",
  "key23": "77q5tBWwrUGyyGYVj7tCTXGSJQRvJdz5KFR5J1U1NTQqgzEqWED7cmB3hoLaEPcY2KGU8NmXjR1uzLbQKuW9Rfy",
  "key24": "3a5VqEL8E9vqKUkH8xXm8k66MZAcKiAhamtXW4nfw95Sy8Ne8GtDiDpSmDHucBK5hnX74pUqt8aDvRyWArZaasFn",
  "key25": "2PaDu5TPHBQ6Gpy1HRzkeLDdRPZqfwTnbrBaAcitkgfH2w9JDBpyBcPcUBQKUSPw5uwfaMcCYhs37WGdgecHLPA3",
  "key26": "DdZyTm1w9KUf3xeYjbnrXNLD4yMK4cJDpGXuX2Nf83HCKpPUCRH18vg14YQGxLvAx5n4S1cnCwGMFyTwk19SytQ",
  "key27": "4yhoF7HJBtLTDgTTqNs4hVfzcVLjcWjJLESRb5tD8rVJYiByoZhByRPmSCTD1VdkgLsWaiNp6Dm2wsh4sNazByFE",
  "key28": "7Bmd5yjZRBiitxcBXAU1ZWjYbtPn5bKuk22saScmC2yR8Cn4ELp9YQyBhgKWgn4YwgHb9RHWahG62vwHtdKitnw",
  "key29": "4beKzq31RiZxC6v91yJCjJTkPwN35PggFrH85SteiPreF4mQF3bGzZz3rA7y8nDCwQx1MHSThUhh79591SvQ7tVL",
  "key30": "2KCraLpDw8eJSxCJougfrJzu1WLavxXUjVrNRnNpo3Jt7LDas6vE68Cs3egQgSsjFAEJuXaAiw4asULhoyGAyrKx",
  "key31": "4NvGdLMyG8dHwnGBRVZdgnoosb4L1rVNRMEXPT14bPeBsiN2rGSybbhm3uvoPyJ5qwY5qWgwe11zdpRUUZxikt1z",
  "key32": "42gmJfVZ9eizc1wACwFMoh4KaYjkQT6J6ci3dzdWF3s1F4sakpvWgBfquVjs6RxtxLGqBdYzDDZ9XiDdJ9MGdXbo",
  "key33": "54BuqL61ZM9TMBWH3bgVfqKAiW7BD9FskLkitiPDYYnitw5EWJo9fxnkYz3xwZDK4NtKdMhBqTjiC3gHB61YnqUA",
  "key34": "4hdQCfo1N1pPuMm9heWWA9e56vHAqxwz88qQMHYvFjCzQcniVttA7sQ8U8e4qD5UHLGraYCFDi7kjDUaVHELhuCs",
  "key35": "A5MqtwQDQ3BQ98gJ7cgjwdVhqHqJWKLQBAQvKRtdYvF9swrwUAiJXjRtwvAeSvcrdKR9RWrJeoibFxcAtjJ2dzj",
  "key36": "51zfEvCnvxKNviUSYshwPVZJ5wueA2CpAKZwDCAmzsZR5weoBQaDA26rHdRekPndXXk191giXKhpjcS67cM9pHMR",
  "key37": "53N2FLfLYzJpsUCnshKVe4wh5Kci4sp877RchnjJjpiAgtT1wX4cBspbfS1KUvn2r8JZKMkx6xiv35fc3i94bNCC",
  "key38": "3Hsh3aWWKasr9r13XWgwN23whSHERT8fb63VgUfBjCb2r9bDdJZ5bfKoQ3LmENosMPwrsSDXuWF9SZrnxdg1ngDP",
  "key39": "5AFgzfsR2CtaAxHrHwTayN24cPCs7pgorjH5YrVWmweZ8zUSksyKhrirAFXecjcNK9Kr8ZJ4gbJdcsc18GNTw1YT",
  "key40": "5azj58QUXMQj2TpcXCzzd6iDDsh98J3crwowGTJkaw4aR7gvXVzPLEZ6KCe8gsHbtDCnZyKXjzcV6ryrQ3ghksHD",
  "key41": "3KUzN3hD8suMDQnZtai9gFNz8ncYja1cdR7Fdc9PzoGCzvkQMVUzwDuaxxip9U7Csk54kT1gN6ezgJ3jNjUhfdur",
  "key42": "5ZnxGXdSSFdyc5MAN47Bmriu44RN5Ns2xTKDNT8z6S3qb5anQnVKpgAYyoiedH3BZPBKfggDHxUs9xGpmX4JFJks",
  "key43": "5coeodmHj5WkYEt5yijhx67cU5N2672DMQG1QEkLnSnYNrDT3dyuyzh5jRMXEUMZtzDgZjtiW2EAgmDV8DD3ZdpP",
  "key44": "huHqH7BwSxhnEXDPPzDrqxN8WGQPES3u5tgHstav3dhg3q6U3yfa1bWSg7ytY4KgXB621EAP5k48RpuLheYnS6Y",
  "key45": "4r9jEP9m6VvwVNasGhGCqpepL6PzSKUbwho4zmCzTa6pRwaqLeQmoppZgPS2sNHfnSqww5cKKQbtT8aRFzDxDxuR",
  "key46": "4bPDQzRGhyjW6NBYdXjgCtng3esoKgCxyf4Fsny6dnWPXrrbXERt3G42dBEhYGzQWTAEAxtNupd5AMVQ2z93zGGR"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
