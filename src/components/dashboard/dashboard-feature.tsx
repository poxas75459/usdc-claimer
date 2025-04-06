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
    "M8LdCUV42b2ScUTQJFWMQEEyMvmoqiDQVCUzcBW5ms7xxxzwzkoG2JRrL2nsAoVvXRr7dZpqdcVDTwTT77ZD1rV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PC6GnvTjU5JCtZi5iJaKKug3xTCiw7nAt3ak7gbhCk9KeuUutAufCcnLvAuchFjPzWoy7DDiWZTwnenJabpPHo5",
  "key1": "4ibo5S8PDdF6RCiYdCCqFGGAYUQDBQbN7wXL6s3RwtfWEuTJtgQNC1Whjm3EuhdjN8dhGmvhGFEDdX12R98U3jAk",
  "key2": "4VSsJFWwfyMF9MMcLNxxttUARguz4MCnH3fa8j85qeDeyqpDrEx37VCtMkxccwGc3bzw1h4L3LpWmDGL1uRwg2Lq",
  "key3": "4gL3MRENZB9muW8iqLN3dNDD8TFB5nhiTRKit17XETjqb5cciFeJ6dY8v349DcdgykW1NbURs9jhqu6K8Rv1qNML",
  "key4": "4gEX6UBJ5TcXNzGUxTjzGcP6dvCJkJracxJv2Bgavf44zUqfXPusDEWaXESvZ8epfCj6L3Wrrtc6aio8mT6cTi9H",
  "key5": "2CJRbPXvE81X1QiFRnQGpha4CuyXSUtnMT1Gnhbrc348wVH6cHFHdQ6MZGem1qQPNMehD8VCJcWXqhi1du6jt4da",
  "key6": "ug7MzRMGo89MGYCmaf7GLHghZvDYn1MwoJ1X8QC3PtyuiZC1gTyLG8YghybKJDunj8LsNVcjaUXiJRsjs4BvF2f",
  "key7": "5vhk8dR7mZo21Psm8nUUijAQWTKvUVt147pMG1B9LCcZYrb17kPsuus23BM5zzkmnB3vaL7neKXpJ1Vn4QABNwmp",
  "key8": "2fdWFX9cBiV5Zsf3nCKL5FbZttcLP4SyMXVC7eps1C2G1W13iS8q2iuN4W9U5a2zEs1CCsMsuxzB1KUqUASwgCSJ",
  "key9": "5ojPW268obY2HsFHF3UbUCjp6kfv5KTA8zFErNvfJskPiXX7dFbWsLpXK3S9gnX7FAwKWsZAQSfsLpzoQewQrpTp",
  "key10": "53NXMKXzA9ZBx1GLQ8Ba8BdZfaZ5tkPArDHvTNgrwBdB29HFyv7vnumxs6bBXT5P157EWjq8vqHoBsG7ZMZjvARd",
  "key11": "3U34iSpTshZGDspFosKuzvqXawZjPntKJAATHWzoHQQNrHe6E5T5RbrXexFstGT2Y1qujE8dvruqa3TEdVPwcmDJ",
  "key12": "2CkQQJg9t6Lw4kuXFUYouQpkb1agd2CxCi5f6bVdSvP2WYnYf16X2RT6mm8d6RZzmwkJhefsWFjhzJPUVM8iYg4P",
  "key13": "61bDXCxTG2Q9MJ9Msj7vaH2XR3koDCNzzqVP5k3pckKa5jNaFwEUQuy3W43wiUD88kgxJvXCp6WmgYRYc58hcEkD",
  "key14": "3dFwbzwvpHpeLTGqKwmzUMuSLAgoAVyec65dn4BXM3cWRQ17wf1Ymm6H7tVawtxoEAbZLvFrCEM8Eta9jTY5jBTW",
  "key15": "4eb2CnzNk3sAC86WWdcHQpBBCDW11EidYvfZKhg7tD5zkfeduhvLQZuQHTejLJaJvni4DUXoQLtkvucKkuia7te3",
  "key16": "3HotgyddBJ3s72g5rKbCYpHXniJouVTd4RPA2JmTsjdp4Yueo2LTXdjLPQncvmAD7vXvCjV2E83k6GsJaFeCsBLA",
  "key17": "36knJYP8G4ssq6LFuENYYn7BxhGFEkisBguEgRNFbupxxxALynjuzXvRiubAPbPs25qTcMNuPN28E49SPGokofDf",
  "key18": "3WLeKnWheg5Af7PUxjSUhmGfNwGwMWpA9NVYUHktfu8gtcVC4RuU73TVrsThLViMxuduA471GD7WauJCtPPtaTg2",
  "key19": "2Y8A8BSPKoEsiM8mYMnKNUJwxi2keb1PkbR2t8jsznU5STnF6giwNCVrvqL2T1ecjH56z8J6j31aQQsy4FhwS6vf",
  "key20": "g2CA7aBjt5d1ouN89GjE6bqjLbhHgTDs36hknHDhL5QmjQ7bGE5qLDFzUUZVY31LbAcUsSUWUFiw3L8CGGmwmm7",
  "key21": "2zyyYD6mePBu7G2FFBjkYxHhTCHj1oAjsuPtmz8U3jQqMmELGQ2XHgBpUtMFhc9hBAnsrNvm2U8ZZjEd8K55fcWD",
  "key22": "br8ANKJ95ELNk2rw7Ur6LSjDHtkMXejmMEYoYGBbgDHQXixxL4pYXbgMUWhysV2b4Bv5iF5So8fyzm1b9L1phuE",
  "key23": "qErxr9TxPq134ezwhc6zufeW5UghRfbfaNbteanFjnTQd7tFgnbG6B1EAMu1ubw9HpFowMH5E7RPGKQSi26dYXY",
  "key24": "QU8JUYqo1fihfVdPCASEWhWcWXVypuJhRtekBoJ3itqf2Kueh6DsVU4KQGnardVyxPkaDuReonCc1pbyi1tiSzp",
  "key25": "2aQgMooWUn3vAHabFEothEAVFHdEEdJ8WFVbZimxqxcnRrZNgF8ZqGcJbPoXDFbhHEumikYoL2jShqQ1T7iuoBaK",
  "key26": "5yLSyC4KXRQEfy4g9AhvuxBU3D1LJLVFJbgqrAWixYRiZfpE7snYjYBynBk3VX87jeeUoQp8DtftmpBfLQoFupkE",
  "key27": "21j6ZAT2uYsXGdo816P3n4jYd84xzj6Vy2YhMuprPC8a7zY312Dpw5w5wysxE8wAaeLwyaK5xDKvU4qW4sjGdGNk",
  "key28": "5DUr5LhtmokctcwMBAUvdzR2pfV927rSmsW8TZVg1wp4CTgXPrtyUMLQe9UPSTMXSRMtbfeAmhDr1a3rEykdyrqH",
  "key29": "3P33Y41adnZgCQvTsxzpAhcm73whY6EMi6kbAPiUfR5zNJme3Q6EFo8TUcvKDKGAP7hpawpeYBDnGcCR1qNHe6b7",
  "key30": "3ZCAMhu2qjQoP7kjnKBu8CWTrRtZNiw3HMXkEw6cL4vXH4qy7s9YGW8GdkARHAHLA1fpwLER8L4b6cpkH7u6t331",
  "key31": "26h6QRHisHe5QW2tKy8FaxobzBJP1GzvTPnEmvUzgq8CD5fYqBMY2fkH86qWYmFFKjVYzLznQPuj8TAqppeuBmVk",
  "key32": "4dbmctUWVVeMdaAEm5dXcEX2k6GezyAjWPSHx8J5dJTLdnsVbYg1VLymsWcH7FWYGc5RL5EGjGuiz93iiP7uCANP",
  "key33": "4mwnPwehLFN1Uf8sRWg4HXPfLZe7c2Fn8DcBUh7M75fZg7xCJ9kDqcnizKgkTRwKGUa9h6xeNNBtJxpNmYDvLb7Y",
  "key34": "4RgoxjamJLwQkCcM5oNwnPYevW8rV4zxJL1WRSSwT83Hspg2z683Lmq52b1jyYZNeCeMLYqMGSmrvqskd9iUhQpW",
  "key35": "4NVcpuzFQFJfLdFVBusWTX9nGnWfmY2uGhfo1sL6UPENvRegjr8k1C4mTMGi5mJdgeQRpdydfbTdqk7CECE6DZrm",
  "key36": "cc5ZqRaCm43zUQDfYWoDPfHpL3kqMqroeEekVCSwHKMvnXcg5J1ToeHs2zcpEuEhrC2exKpn39f3QnBaLCkDUtE",
  "key37": "4YkBqGicJLaTWvW3Ao6bC2fnpztvUWcBgKnhsz6CqEe4DcTEHXKrsYich9gY7fRVh7yk1g7kq1A6spno1t1LXDUc",
  "key38": "4ya1BqcvwY3aPZncM58qqn94zSjTCMQCew2UcWW2xXsLX3Yk5QTkou8SQuR1wuppAE63pw8bQhpyjKPyYqHDyEEk"
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
