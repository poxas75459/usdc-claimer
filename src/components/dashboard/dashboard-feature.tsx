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
    "5yvr4LSW8iXbBCkDHe3yg2MREngHWv367d4XNVum6n589JeEgH1kaCxdvp1kftvTDTHzoxPAt74Yo979kgAWn3iY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZxHCiEEFJjGBrGKWUaMSiYrfKTKLomrzpnH1nPrPCz51THf2GQ4ewH93E6WHzvE2TKLYuSJTJjxDaW5pWFoendK",
  "key1": "5sefGZRcMHmjbPmEaSQEasnJ7EB6oS44znBhCnXytjuyKFHkRe5DUKdueVnsgxVhA3sZQ9pvSM3TovzJeEghnwbP",
  "key2": "5ML8tvYmraMNKBV8mDXpALWbFPf5y5CGotX3ZF71MvepStVWapuVjXRcYdVhcJENPEG6wGNNYkC47ZtaeThVjPpi",
  "key3": "331TQVhUXf9pm7NCbHmZDiDh3ekYhnnQvKYf85iMK7qf53GbqKjuzAQeMXxys8LDd7VKd4g2Zm6jWRa4HxDM9w78",
  "key4": "4iEndiFHkKKJC4JLH79FEzZ8pmqytSTWiPafEbFwWU6Z53sAUx5M8tN1BniZZxJycbfFMsvvonVhsTQVhgqufq1a",
  "key5": "21NfKYBVM8GxhBks5Vis557BjQAiu2S1FB1pRaPpgG1PTaF3JDP5nhyMo4PGJe3BdfmWYcocnSkw1dsb72LfqDLB",
  "key6": "3skqhDc5ZV2JF3Fx6uZDM3r78pbEBnT3ZAQHdRtw8nmnoQGH8j1RzEmGLqJJX71KNKfCu1wJvSjSji7C3jRMqRN9",
  "key7": "hdcjj1BSroR2MTinLH7et7ihfyaKsQdSQiB7TG3a1wHhmZZ6Z22Fobn9YVotPYRLSbAYeLquLgNJTAbxEUfkfwE",
  "key8": "5M5nXjHXawhWec3FgZk8ZtNw8QVwBcNmZFeDS9uRZwaLAKg4trucjmygj4SNPNy7JBExwT3S6XGaYhLNpERfv1Pz",
  "key9": "3P3SHZcN15wDUBALRaJLWNi4zAhjHpg9GPhQFzrZHN3VxhPcenkSWL6RJGswGzZQ5LBW5R4tt26Laym8Pmvg5Bt1",
  "key10": "4cL6b4M7mpKh82sMfX5HoRNrhVKVWmm1ScqC4aqWxu24PQLrRvwyGfiVYYiE5nDNfeJ6aD6oRKBNtiNriJgSt2zD",
  "key11": "4RsvkV2jMBhngtPjDm2sV8KjhcKusTcAj9Vfi6B34XSuShwvxhP34eK4tYXMge4TMgbjZ8SUX88Ad439sRmFcK92",
  "key12": "2rAo2S7an85hbCVcfvJmLE7acjMT4GAvbWebQq98EzoN6aN4kwBsR7ine6YUvh5p3zhjFuvtZroGFJ8T6TKFAH9H",
  "key13": "3waBgEHsJwSaug8C4ErPUwQkA5Mmspuv8Ns8Hi1t3MQqE5Ywe5c4WK36PoG9r2H4tTGqTJxJxi5JFzXezS5xcM2a",
  "key14": "55ijAcNhAuhkVHTMnXZrDA3AtSH2njZztLdR2eu9QWwihgipjNK2EpU4nSHmitUusx8XbY7fCB3UU4ykorGR1uPg",
  "key15": "QfKrBs37hkRNqz9J4F9oDzHJtvVrfcDNrRW5WZspTdsworc1Lfg31rrkfXPcyXXGkPSvfzcGi6EtZ2cHJ8oUv4Z",
  "key16": "5WydoRDermjerATFxSUXbHh8uwcvDD4PXARCXC9eL8LmxPmmNuPxNSuAC4nXjcjcLAVvKUNQjmaC2ctCQ7WjDTVh",
  "key17": "4JK6DRxaFL9MLhXKtiJqCZaqV8Z1EnczgdPHs5UEmps1ZivT5h6x2cYo81u5nVNUDVVVw4kEu8NZ5AYBxxNgoxtJ",
  "key18": "4QfZFxARRKQMZp5mhPTikNAmBjQZbodkDwUxB95MY1qRzUGzrBhsCBafkSawH5jrmWm39cDWuZ5isyiZ1XsqhknF",
  "key19": "5FUTpDNtEe5LFKWDWAK6me1zDxTUQs4CREGQ3yYzw2XuwnLK432xsT7S6gfJGLQ5gxre53xb7JuwYB85zX1j2EHx",
  "key20": "3HrE8LhDyAiW49MeLZgxncVqiGgq6ccUZzTGvxetUBJDK9v87vj38XJMCdLPVdn6UJV2hzVxQxWSJoizGQK15w54",
  "key21": "3YwxjrHFBawkc9AS6QmLteefbVxpcjNwnF1XtVwhqT34QsALGNDGgbsUHxT2nFxRQFZ4jAkMwvG9KpZUHVDq6cj5",
  "key22": "3kvBvqcF3xYGEofJ472hoE828bWLuP1wjb3rjz9PNMZB2Gnod1mt4doe13TCWFqx1ujvRNceD1ij7fWiUvnpu3sL",
  "key23": "5M1JmKu7VfnVVyM7DLMKe2ZYUW91EMJKRTWQqSvG6dGPEs3kgs91vnWL3poM4qeZZSJYbSkFPD5VYSw5QR3rh4M",
  "key24": "9BBetRD1kxg72PvnrXcGUpf2BUZScic5B74NYHgpUCyx5oUykh2MPJpVdUqGvCCVAZZYvFda8VDdfgtSNte7anb",
  "key25": "3zdTZaajqZ6gkTJeM5EXKpxyub3fUTsCVirxmbJK2b3ANpUhPoYhzfp2NK698wpamFfNeNGt3ysQ97EM28skkPyk",
  "key26": "25dzkgXC5gPEsFMrBxp4m9syf4MxrVLnNascw2ZnJovZn5nZRhfY4RTiuBDvyNcMPXK8GWHkyWSPHJfwd7J3GDTN",
  "key27": "5A1pTMZmPKcpwUYuvUyBbpEDn8wrGddGSPDT2T95x6wKi4TxFz9LhNLULEPBw9tkLSZV5bRSYGsVy59Y3qKugCVk",
  "key28": "dAgbBtNDRY7U9wnbhRWsErp8sXbtLHfTwoEeJH75gueLrRihLgURMWghzrEp181YMM2Qhufdw4qA5ZvC77CBYKJ",
  "key29": "4BkEaUNBUtFk2zK3ab1PzVrPnBq8EeH9FL5C5cVhHUB6PPtN8MrcL2abErCQSEzyeo5CDsxE17AT98qVWs4fRQd2",
  "key30": "5TVhHNzQCS7pqfmbhEyocDJETm5GsQGT2i6hE5T5XK79Eb7kLYMLDQwDe66XJ2UDjM6xdHg3WvcPQdi2eo3m47gH",
  "key31": "4jRNyH7ZNAwZqmJBjr3juBY56hgqMHqsXskbuXJAZQfgf7Dox2HgHbbTEc5TgRsvrUJQvkDRn8UtD7He1dMgw9Ff",
  "key32": "43ff1JqKSBjxt1zjcA2Wz24m6bbcGe6Hpu1hQj8PUmECpNEZWbGuHDhXVihKphkgW9viDeguFtzN4b3CELkP6D3f",
  "key33": "3awwHAfw3ZgGy74eQW5JeDEdReo9kbyJtLWdkaeVh9PdrYh7JZBqNUoAs2BnV6wABEuT8Ftxwb7UuLnS9amdNWsw",
  "key34": "c9kKFH9T1kGsgFnxPLredpXKr642ea5CSmh1q5dWukT91FciqyKxqpDkP4JpX3HuG6HhAuzXbMNsXqMPb9CWfkg",
  "key35": "2UJRPvkXECjMgwX5KuAecEKWvuVrXM43VooFKYaZsWacCV9RqK3zjr41ArYQ2qWKasU8hK8DZnW1CEz9apFeEiYc",
  "key36": "2h2wyYQ289xWtawP5WrbNgEWkNV5RbrHYZnsP8rtMrruEyscHN7d1uc3AnkuXHVXMXxmLhuD1UXuqnQVJZ5AA3jR",
  "key37": "2DT6d7Kfd9nDPQy1pgHbVpVG8hJ818BZYHWAevdTM6Dwa9AgFuZjKVYugoqNkS713athLGjeN4fsCcx5uyF65fRR",
  "key38": "2qGdobZ1kXBEvzCUquLqBdYeDuckYdvHBmqdnnhXUcGa5YZRdjaMuR282kbU6J6wixLGAYUqQd1VLiRdWAh4VNEc",
  "key39": "DeTgmcXbt1ea8ZyuPfso5B9skxePkWD5ibvKPeav9TdXAfVLnzuDDA5F4PPzWxfQF8mNPiEWTJbrMQ9fsEGTmHA",
  "key40": "4SMFHRKekwKiUJuwxiBY5chSvrdudDgyBMotTypFMyxpwrCCYuYUB1H9rukoLACK14AmvwxmP6NuTX5Fh7JLbrQg"
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
