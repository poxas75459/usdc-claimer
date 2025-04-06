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
    "3gEei6x5PUuFStJx7zk1X9wu4VFuxqbedFxWieDuo6QSCNKP2UQiNLZi718aQVb3fJLmxZEJ8yzCMT3gg4cScVdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dwc7RMFwmhz8dpqEb7n5HANQMN3tYcfbUVg8KP8LNUeNHwcRrQxhDVkjDkNyyMbFS1j4ugmqU83YaDEeZ4iFS9P",
  "key1": "5FPEYShiMpPmSbriXVFPq69rxcvbdr3Bcvvx3UWdN1QfrHtaTFNMur8LmpVaxnhPg7kzsJ4GY4vKGdNjZL736F43",
  "key2": "5VHnWS3fffKnbgWYrSKCkKqJqa1GrjEaNKuXcryHX1oiXHkcaVB653oALNn1Ev4ErgkVL887hmMSMoADafouqTV9",
  "key3": "2VSGmhj4Bv3MRXdYWAh6FtB3Le3t7NR6Jn3sQmR6DBDBLYUPDhCdRnNcNKDNHjcPH3qHLFks2YdPxyMGUSmEGQeA",
  "key4": "hhX689En4jaH6xFVQVmvaqaDKANvqCGQnxieiwcZudDpnF9FRQ9uAjYrjCS1xx88Z6hKvkdADFZidbqwffJ8Jff",
  "key5": "5DosWT6ugH9rjLFjic5bDo8ah8ywiGTuEJ45Yt9xTgEh7Lhtk4UZCY1maWCQy3USGK5hNuJupfVLJqtMqF3S8eNR",
  "key6": "3AYXQZRxHnsj5toWQNZzvbEMsLKvyJ3nDdfwLCTMbNxXU9vqtVLfqEcJGCX2yWkUYttsK64ahiqUy5vRdwBpkZ8U",
  "key7": "2TBL1bbNmLP123zS9eg6aHffTrCHnCJMW5jz47FyJ9Q5zuqbinQvaMz7aRd6HBpNZSXa3c6HsDS9a2aD62GDrBLG",
  "key8": "5biKpRSwhrPQotCcqRZE1KphLWGgTCHnbbs5tVBpegXPHKdL9FQFCyidgeXftMDkpvMH6dttGPqHMLfpeAqvRDw8",
  "key9": "pah39Y9SUNhH9fS1KEcv7DFLKwu4U7bJT11fpXSmiSu3kkqQpsngQUwxedZAGu79QBcnbug3JTnxVEy2odxgiLW",
  "key10": "4LQ26HwST7cCAUVVWMuM8w7Qt1uU4oMqsuNV12i7of27ZzB1iAaDVXFHg1q6L98JV7XzsD1A8KyeFUZKkSmXwLTK",
  "key11": "WZTaWpNpfndfNjXPxoKYhQU454LRiqZikWufkhL1W2bhXKdp4kLRGzFGdc29iYZ8bpY79ihxBidEnXbHHuXpkBQ",
  "key12": "2qeNcgRiYq1KcLc7CY5A4qVkLDTGf73ZV51yNcsp8WEa7edeaAE4yoMtECbVeVo9jWr7c1T4gGwt5hQbsRXYdajq",
  "key13": "5VSR1Y4SDF1o8iJpQVmLJiF3fCEfVL1x5epYskWDgrnxALZxaBd7iEcP3crsQPXbiiZxXeD5Y1XcxTG7QqFfxGKC",
  "key14": "2nPMrpePYEhCtS6fJ3wLPKX55yhUhUPLpJ3nSuNngLm8zWcTyDAuJEDCdq1NczFQVuK2WURuL1LURo9EitwLo4wE",
  "key15": "nEK94iqZjh4jVq9LNCG8RK1piBs1KjbZQ3DCx7Ddvm3Nnd98BG45HoskHjbUrD8u2sH7nNcUb55kvrkT7BYKVsk",
  "key16": "PB54x615SKtUNn2qEpn7MhCZ3DPfN8YWQCbhJQxhAjqwsLucAxC8XCpxDwthvwAm8SQg55uNEjD9Bfgx87K2pWi",
  "key17": "ehqhJhB693rYHs4nkyvZHMqdheBbHybpv9kjVeroaj6Qd3bwiNt5WzcpvyUfGLRJwdQh8uqSKBGzNTioxUVMPiz",
  "key18": "3ATK65bBYPvtwRjcZC6w7tZ8qd4rGN6CpKJQYWTCVWVQDVcC9zEPK8jNi2GR3e8xhFTesRWSbmYZb7JWGXMPYR9t",
  "key19": "teksG82RBgdUr35zq2ARccMrL4GqDeQr5uuHfFci6M54GzweHjHyp2GUaDPsYnh54wJMPWhwWDxVoXN4A6tZyYv",
  "key20": "2maajtYfEHuT9FCHxTqu5ikCRzRe8yxhJDcnaZRuWJnspyfFCoGZmqfmzLCfU42as2NLpT2PGHHnbBS2EddtScYB",
  "key21": "2Grbh1twsvUAgKcZvYDC84APryh693mH6YS75HaCgkrShjqra1EpdJvD4Scu3rLZywKwGiB2BpSHZWQTftLDYuQs",
  "key22": "2A52JKnHqBKrAex6KUk7yruQ8USTpZDGZHkwzij7DeHD4s6ULH8BfAhq7s4zQvd6ZqVGmQyNxgo8k1dVhMHVStZb",
  "key23": "3VisX65cqPMaRX7e7wtVQwr2vjLe9PgxeJrJuc38EW6yCq5JsmrjuSNyd1ocZrMJgn3joUNUTozCeZgmyNEFAJez",
  "key24": "55P8BLt4kfaGMvQBSK5GGL6U5D9vGKJj5BQMKdMji7bSiCaUdhxS6oUNMmephaM7kiYiySwW1X6kTwd1rzUmNJ85",
  "key25": "5VFPC9VnCup2G6cxLZzGThU9T37uabk8gzRmxeFrhGNpeeRx6mVzjd7PR5Qzja1BKNRwyubePkDm36sFQUdRgtBa",
  "key26": "67QA7GrzGpR6wtPoNkyuXtD4G5tBxcYBdT4a7aMT3mLE38hxNQMpytzTyas6EiAM4RtFXWhJTWPfxqiqX3r6e3BP",
  "key27": "82ghifZ5uQc1efW1UekQi2f1RL8Sr2qHvLy7Y34XaFweLYXk38yGQ7XqSCBZWjGHiwKzHWEFX9zcSZ7PbYSKor1",
  "key28": "nz9kKkGvCmEbUQReFmeN4jfnr46w89uXxQccuCU5iYMLFDdJW2q9iw74zCc4V7g71beEpaE6CvceXP2HC4GC6WJ",
  "key29": "2yTEBThUBsezbjWJjCz4RxphzxuYdCDZxPPzrpmEjM6Luu67vGNfQmkmF4UMKrygcR7EN2xzzFm7FcyxkgGLwDZj",
  "key30": "4bkTxC8WdF689SBCnKp4YCB8Cr15mCAq1U27Y5Qb4GL17FejJrdC1wYpLJYwd4fsueZL1cRdUtgqZe7BCCVHMFc2",
  "key31": "4pXFK4m71vRicaGaqeYMSHT7dsFvzb28HbwQKgt3jfsodUxPs4WTJjmMCBWj81GdUJoAm7Zbe7FKnHGxreMJuDJV",
  "key32": "5V4PVmsYEo9Pno6bXjbsiSeXEvRb8ZtopupBmizUgb33cCPsmQ5GHg5Pb4htqFA2SCaR4WvV55XppauWzStoXdiV",
  "key33": "35KPNHTuapJjsWU4vvjYsrx1H6hQ4toyKRc33zeCTLvTAN8vAQSAg7nQUe4EQpuCi7NXQhpBZycrjgE9aLqvWrE",
  "key34": "2T2pYLgRezeM1MXmqBCojEB9rQtaZyG8dedRLm5nkmcLVTTPLFAADw2MHcRNdgJUrWBtkDnmnFvPNkGWEdXomXu4",
  "key35": "4NiprEccfMDcw6qyVdsTSoW4oCqpnkD2NEx8RncmMitvGgqdPnPXuRAVkuodezqfoA7PUGvy3kJ2xtB7nSAwmFcC",
  "key36": "7WTLgRUC6h71wo51c6ax2CdCtvVJSEFRteztgi5sffkdaNFFhmJQVQLymGH4NzQSADdYbMNyLJfd3e6M5Xh96BM",
  "key37": "37iVm1zG1iNMmPrCo9p6J194Ea6pNVNQMd6ijYntnzS4UGbJvWuWymhCNnqcrJQMuJNV6cTCVk4B9F8TpqgRzZdq",
  "key38": "3aRfLv3nd6ExPJBhGBw7UshTY88asXe6UQSmC1m9yH7NeSUDNavGFzqmxr5bosg8rS97PyrRhaRssDwmmvFPbbNJ",
  "key39": "5UnNAjeWAEbwjDkRLjSHfzwhqi1HN4sffcu3U9yUkpYGiudMpCCU92K9w8FZvrLLj6mEy1ZhB4ZRPgrjXwQBmYjg",
  "key40": "3R1AJhSitw2vrgogPK95uJdCLGmvpKNU3VZJWzKVrMxwwapGB4q2MQeXrQ8pzYPcyUcunVFKU9fWL1QeP52mRyQh",
  "key41": "5ga361RFxz2fRw4nJWMLE3veDeZJAX14JrTLekwRnUDQsEdWhdZ1qdEgNGmoRd5ZN8fygoCEn1yxsDYMMHHeMVPM",
  "key42": "3qf7eQafptUuawpoPwchmQDXrsfcCVt6ostdmkGLirWDr4pDA64oGMeH3tPN3AjhwhgCuNuapra4hUdGbt6w3yie",
  "key43": "3uZP6jKho5jP2pgZM1PpcrhwAmVx69dMb8GJCdygL9Ety8gUWEwF9KepG3tskFeAVzwhGkvuWET83dna84sPdvvV",
  "key44": "5ZyXvEte9o38jfUiYJunVWUT1gLGShLzNZoTpaKXVgAbAT3PEoaRQcZwRM2mLkYwo2JsLYAsue4VdrU665z9bh6N",
  "key45": "3tQjrNhwqYLHJTZ5B5tsyj6422YJnstD9aMbjxA87zdaLkCrC5utSsyKh6psunUitjHRHqaKtRnQ7t6ECTpEzJEd",
  "key46": "2zhVrvVxQri9unyd3nHsNeRMz9EqLUkauKVJcqgqPyH855TDSPmAyegs8yH8XNEEsuFWPNbeTcq4UJeFnUTEHjxk"
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
