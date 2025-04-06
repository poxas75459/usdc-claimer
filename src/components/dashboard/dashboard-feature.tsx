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
    "bYmkku8VoFmVMRRpNB74fhs5vXUs3Fs2fSXyandSR5qQvNJTY6UN6QfNw1SxsA7xPvPLoZFN7wUMGYYyVdYarpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mkiomBiLeEQ6GpvrWytdXBkKwAXuqqYyyZWgSw76KueFPowwngUKtUTQfjbihaDuyf6AmMvqC7MCxNerhh94Mh3",
  "key1": "2acbVMXLq3S25EWCUWApUrYKE11xxqtNcp18aLjswQBGJdZox4cejGdiFPKyR1qVTY2LkY1UUdFV9BxWRVRjL8jS",
  "key2": "2Dd8h8j4ATxYrxEHi5kzBaHbVa1Pnpc4hDvfqo8uvQa8pWbmQrKyXuxnex4agDYFoZVDTXYfLYf34pTrNTzrmf9w",
  "key3": "56koRW28HkVgJndUkf79Ad8DwrmGHCqVx8kydP5bYYM2DCeByCiTP7pQD4JkhVvjPVk8CXThyvHcjdHou2Y1NThG",
  "key4": "3r57myBjBako177iGzvQfkYTFgiG4xeVzkXEdf4mp7XkC6eYJuJoaK6dfqRMKG5nP7YzJXkNizeHK5q4dqW6Y7SM",
  "key5": "62xST8YULTfqLhnLbenRqg3CFddc3X64gnJA2UUBph3D9XfQuzF68vWxvHn9uAsFV1hyz9v9fttrUa4tkFw1rNB6",
  "key6": "5CxWdygWPcvGcsKa1e94JAVvzTVN2T9nW6BhCF4Fo3NdiimR7zGLQNF5ZER3YXSyBRvnLcVj4BFnxyzqALj3pk7i",
  "key7": "5YhpYbXzxL8D9nE2Tu7g6HunbWyXVnRGGsqEyLznePsXzomEyapYVKb1zzDUuPoDQLZ55moLgEpLosvGWRhqrMVQ",
  "key8": "46LZyjd26kSVQ3PZZg5qtivW11Cq3FmPgzbXvhwDa4XP9Xbn2yrHdxgyHDj2uDDpC8SJTFBVHQdMHQi4U4Nrsasq",
  "key9": "4rASTuyMFaL23Afeb6zppTUNiYpExgAeSMK2Kq6EwQGgS6bXxUUam4yeWr32ZTkC98pseQzGADqYTtEQfBwDrjfy",
  "key10": "2VUyE4K4TFG4kZYdskazGiiawgJWGib1hzLjcqaHmnfkL9ipXg9jU8dGbqgk4rFndXw3wTyLMk13FV1UNa63czJx",
  "key11": "3YLhPU91nGNX8cqkqLK6dK1bnkqGDBykjMzrqP7gPTNoFEVBwiVkWzEb5WissVwdcHH9qvX5ce7peHLQyp9WBaxf",
  "key12": "5U1EvTMohkKs4qHbnHhkmAHfvCWZURcU3bEV5wVC2aCGTbxqYFV5UiENpLDcUmyypfXhBGBe8nkce2N8VJawWhVU",
  "key13": "5snVrNjgFg2eYvh2noc1e7dy8BzxE2DQEv6yQuGdfz1ZTxMpwpt5XTSQeSsAsy9E1FKg9AUKcLELuDJi5Rts4vhv",
  "key14": "321KBL2TgMr9VCBy8aMhdQiwbYHkVNCET1W4p7mKrG5NViFFtGDxCExN2XkYJVvNqv5bfgDUozddW1hhhGBH2m2B",
  "key15": "5tvkQQ3kPtsbrZRHr8pNNv5wzyeU9JchKdz2XsLxHnQSeggdbRK8Q5qFPsJZ4HYJ8TCYuAdL6kcExRgpy68LqVeg",
  "key16": "2DK1mBZRp1mNzmZD5TY26s6dz37xUSRKitEcatKBrLfki9jCuicTgy2TMNrjbw2kEX889PiTMCu6CNWAan9xxJgR",
  "key17": "xeJfrsc8jXfiYmmcarAvWUp6TdepTgw6LQJv7TinYhW6LSVPWbMHGntxiAYwC2ezzdLnK76TYRc6A5jy66oWeJG",
  "key18": "5xKacavNYdwnKZFFg2ZCy9EGa6DcwaU8eVFUnWpZprisAtHNxzGH4TF7tEkRx1PKnLkcacZRDgwPD4vStA9hLYTL",
  "key19": "3LFzvwqz5B14FmzXePsm2R2Ag8yqvG5fJdjgFhrFD6BeVZTHU1kiCHkW7RTg7Qtgg2NM4v2ambstixnCNMjroJKP",
  "key20": "3uhkrpS3UKLLyVytxwmEThEaAYTP9uRsKk4i8TN5weckQrYAKpYA3zp8KdvdgkBGaeWsBwwxwZaaCpS6wuixEgrz",
  "key21": "2DrCv2K2gLDo992iPpLZF1jHGyreDkoWwkwKvH5WmgVusoh3fgHnLqpxQHtcLvXSBpzQsZmoFxweK8bHUvkk8pLJ",
  "key22": "2GXZAD5N5SjDSpEtqT8PvhDe1Da3kHxy3WFG2euFNFbJE9PPRTGcxzLE1uCBboK3vnKyuLK7YpdvP4LVybo5z4g7",
  "key23": "56WKmVaXT6CtkjKzkYWgoQEDHZu1goQkmkvu3gTQf8g2irGQb6FaKWrLvbm3fg6R1XhBkbAePMFSMCMkAftSeyYU",
  "key24": "5RXtmRq1PG8rmpsc1k8aAo4hahXuPyAt892bGA8izczv3nDx9XnKLpDdhcLF3JGW1uzLPNsZU9AZPkVawn59SuGf",
  "key25": "3LaLnZxo3BmZ8nENabPRQExYYJMTFvGGus69ZGq5yBLP2jPd6GFSpJzLJUrThEswCaUXp4F8EMpf6Yteg2ShYB9Y",
  "key26": "5AFVZXQSubbspiycWzHFn3N2JkRu58poF8jicXx5bzJvx42T9XL2Nvq4DZmHE9N3Y6GWBRPzwsdDxgDpPKUTb8dE",
  "key27": "5dE2e4naS3DwUnyePMnovW4xe3178PRhg41We5UmTYpPqj9ahnRaCW5DztjZxijHd1QbawD3qmYqmmK4mrsqZ51a",
  "key28": "3XTDkKMjH7tw21AdXwjJUzFgKD4MyCBF2j7KjBr9Q2YwikN9riZifyAX8ZzkcUPLyatVbgWshWhUUxrsYaH6MZNT",
  "key29": "2GXJWV2HVmpr2Ei2GmQcDtqgUEG31xagHj6PoHr8jGL75wnYWXGQ24zb9ByRyJketj3KsKZmFNmpCyQDuHSj9eUK",
  "key30": "2K7bmYXtKfuCD111ZvovSMekoepnJD52483mqHm5AXkVsyxYUCDhZBqSxDY775r89RRYkGhFEfKiL59pP2iybDJK",
  "key31": "2PLkyDybUMWqztTLAQuSwMBN4ntxW1qLfgnCKUmPm343BR5YwGe6qRLRsh9BMd6F49Wqd8U3ymwndLr4t19PJ1Y3",
  "key32": "5oAAa9YJuaMpQPTFzGKgFEzzNVLwWwCbzPkyE2cScYzx41UPBAEZJyroDWYdVDVMKUzifdT2QZERRcB5SbygN4Cb",
  "key33": "3CLVg6KaZkqfuhMNF4KxcfAeF1q5vNCWk2dzKfX25fDf9SH43DAuPLREs1yYXQLE9wncZHzydeEcDh73m1fkBJRx",
  "key34": "4Z52r5Q8634kQNAKNs7zkEwyd5tzMzPrbDLpsvC9ZrD6T6th4E1Q4cd6zGrWHK8PuuM7CKH4ztodELdboW7mVAjZ",
  "key35": "3DxXQQKDQm9qGJfvKn3zerZ3PfmqG24swGQsmPEoaTLff3eGNtXnCKmcp4eCSh8EoY2PsN8fwFMSgmFA9bfZ2Awq",
  "key36": "QSezr1wEbkz3SUderTHSn2Js3EMRQdop5VdutsPFXyC2kDdvJYjHxwhiLmgFrzhVkp19bGEmXaKu6YnFPqe6stz",
  "key37": "3FbDT8wi3HPYF2XDVfVwMhRVYLQjxpamZpR62dJ44uGBt9wTap87nLmx2R2KUq7qnuTcVTMyqKH18VARZPPouWUB",
  "key38": "q5HjBLrK7GD3H2BmmEp5xrdBvDLdUFDMj1N6iZrmS347gdhzEQd6ami332RBxZyXAYjkHeAdEL5e2PBPzgGFjfe",
  "key39": "5HiJvdwfjrMedSXHBnisLnGNef5UF5sNMQsrG3d7pdihBvZ9zvmnrtd6NPHfHF7XxgrrWKNkLnpQgxitX2dTxz8d",
  "key40": "813vrZdUgz5puPtJzqEGM7FVy2A5rqq1Xh49QtcSsEn7xCi5Ku5F5PF4LLk2Lr3D48kJ7y6HAbjxW39JRUhuRdb",
  "key41": "3hck3Lnx33PT4hub9x4ssuYUSaFi94YWuTWZ4A4khBSGq3MhRttCFt7L6wXZeke1d57w19mbUET8H51Ph5q7Gk83",
  "key42": "PjnxynddUBeok3hXJtz1EiM44REj6NQCZdGzffh9pnm7AQCyBjYErdiChTW13iYCVJawbzPmNb1F2FPWNEcJ4KP",
  "key43": "48MccXMgPXiPmbyMcRWcYnr1JFzae44xzMYymvt9ac5BUQgaCYVsuFZus4Jz7We1BMUVaZCSzAH85j1pJtckihPT",
  "key44": "t27wpSr3yFQJm4o6tLWJfqD8fckr4vYUBrGzerf2wQcyJRha82bNu7akcYAQ9MCMyx64hUjJrowN6rwmHxHPZLz"
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
