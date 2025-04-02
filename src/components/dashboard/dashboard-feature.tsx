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
    "4LJT7aWkEfKs5er8o84zQjk92KszJzvXHbwf8MsWzsBjCHtDP5TuEBugSMDHxNNjgAgYiKiMNqcRnehfnERBXNP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nZj4QYVy5uGuhWu9HtEQBrEtfjGUkDFigcgEgC9GZnrc1pWTjTuRVQzQzUrgoscncqJYV1tosndh4XQVeduDeuf",
  "key1": "5Z2tMrR1wjSZTLPD1pnng2J9sPYdAmvBW4ENHp4EYfpvankwPWxSWgL1XU5NyQjiyNkGt4iNhELCjAjggFTtfnrc",
  "key2": "49ymzMi1npTiBnad5pJj47quE5tksJCYncc6mC2x1NVXQPkSuHN2kVct9BfXNQyzXH3AxCa9BhiQsUdEtPzGrfcZ",
  "key3": "2QdgTRR89sM29oyiLmpGqxpZ5ARaVpD41FX3qRHZjbWZLYf2R6W1CjCgXq5fgSa8XMpfKgT3tNow8ooTgXAoj8rt",
  "key4": "2HPFtoLXqC4zPmiwcxm6FkjvQMUWhahsgGQUXHY3fFYHYgumSND8Zu9Vr4XeHKpxt2hDaP1eqrUNFVeC2MSAn3QU",
  "key5": "25AMHgV98bpQHCbz7FSqNER2hRhjYn8svcMfQ8E8cBbrNDLNfYesnfb94iyAGb6vHoZKtTJm2BaCZJh4Wdtpmx85",
  "key6": "35XhWMc3DwUJo5SqH7c5w4xZWsuPKDFzARCKU5bdDu8SaH7FeJZMNvPZYVutY4XowQCQcFW5aJnigvaMS9WgTLcE",
  "key7": "nzWQ2yHcHeB3jcX8xZZbeNcubyMrTomzq1n28kn8ej13v2PHRkrfkAXuNuN6teSYe4bmowwC2JD1GYs3yv2fAcM",
  "key8": "988cPLA8P84k4Db8NnFLzZXbjK5twd79k6DxqRxZZUHtU7wmes2ypric56exKBnpXtUn1SqXnNV6TeAGvhcL7PN",
  "key9": "3U3rDQSKLRzti487mc5opUgbTaroGCgTK4ETf6nfMozSZSNKC7Aet1RwSCNScXLhM4ZSqE8cDsViWbcchyajh4nw",
  "key10": "amo75t6USfynQbWUT1nQDWss6i1MveXcRrJHpVJksKYF66wzK7TTLNDSqrV3nGBitevMRTtrfHyJDTUfSWUL9JQ",
  "key11": "4HoGFUFvLYnpiDB6RNVemXb6xhjQdFuGyRPUfyughufAs8DXvYJQTex39gEEcKkSXpakhJ2kVY6agYZa4EpaQmgB",
  "key12": "46JysVGj3gjkozooVx4W4vugUmcxbTsgp5mGQpNdM1m2PxJQogb7tk4aDLcHq3WV5euxTsM5TMgBgZyh1ijtfJh7",
  "key13": "3Q9EW1WFefkq5ZHeDvTSMcZYPeS7RicTYmcj6YsJP6HWXcgDS1bPcsWBUrmhUBD3dRiei5ZoqJqCHjvzLYS5mGXh",
  "key14": "2AbezNQnGxR2LipzZDVbjaZxYyQWbFa2mZMW5Ucqb6NvZ5fgauWd81m39GXn8iu4hNpfza5RsdXctSjstBLduQK",
  "key15": "3UqrL12TDepfWSvKhRq6VRXKdWBabttBPqa12BzFVCHdpYzbueejN4bUXEWAu9HRhh68fQJNFFGFSYfWhQv13SxS",
  "key16": "4mNxP1qtSSM2wGquVLUtyVbhBZbmfV1U5kcYh2f9rBvM1N2qtaY32YnKT4nZDrYWuk6htkyY45DQkK4vUshRrYZB",
  "key17": "4gjJb2sJhz8Kh9PHCyMDuZ19wcGcrbJJpPweTSdk1HxZqH4tmyXYdRMUb1mKmddtRDhye5ALK9552ZSnFjTc4ywZ",
  "key18": "3EbXC2RVHPX7ktDADkCxXJsNowzcvTawQKCvthsuGbj9JzMxQDz39YLGbFgVQheXtNNXVoFPyP2K6vm3W6JtbH2u",
  "key19": "49gRfJ4UtgFXCwvVP43eAVLEfrRvk9ibuEkYh5PDrQ5Y2Rh1i4rrSrnSbxLok6jJ4gojn66uhiFLKEgwmLhoxmab",
  "key20": "oqm75Nd1pjiZhLcuw5BziyZt9K4vfsE2fuFkcwWvr1GjcsS6r73wj6ihDoSB75Qz5YNEUoZ7q1fDLaUAuEjkPgp",
  "key21": "2Eg4XCTG4sdtXTYsvBELy8Xq5nZrNsfwFbbh3PXubdiTN48AyeM8ipJxuZQ3TWZgFvtBEZSdwGoidnXX9DFRDFU6",
  "key22": "2ZJz5mfPc7hzFaJKZMgsm4j78MHur6bzVotc4Y9wA1Xf9uZpZUwyoM7oiDRA3z3dJuy7TzxZ1f8tgSpXSyhsfWFt",
  "key23": "3TxFRHhQpNcYwCA3FWvrWByAyBcy4Aoem7tD4TbBEBT7HnRCjDSQbHgQMdbKF8LwMy6qc3whT3juDKCyNpYefZym",
  "key24": "4SDdwPZAPfzz2cD6Juqn4udbMzQxo8qcUjfGp4Fk9pXAg9t9k8WGYKgKRHfUkCYgrm2ZDW4sgxPwsradgAxRnR3x",
  "key25": "4ZuSPwNvst3kc2L8EoGyeSpJ8CQBxBr59EexnLjrVvpib3MTqVNWaLmerDkuUugSqwSbabxthFwSkDvfphjNh58M",
  "key26": "QtbeLeC9h9PyrwxEbMm2fMaZRAnhNjuwDMSU7CsNoZpQ4SKyd3effkWZmABAtiJEgQ5cujx1cKyX3K4GCW8YFuq",
  "key27": "3j67q1fka4tpXPsCBtHS9K2B9ZXVv6t7QEqijoNGg821ewUjGLyyZTUmqXCbPDfPG9mfJJBz8nQi9jxSubTPGoon",
  "key28": "4eWPqffbZwhmiCYpZTKTpWf6KfTphZpdonso2F4ek4y1y4kx15hcUbDxXyy9TGHfb6EoofV25T5w5DC6gv3nQqJg",
  "key29": "3h57fir65KdfMhqNtj4ayf3JrXHkaVrv5W1rxhoeU1y73PbjPXNm4f2FfGD64cWzfnXW553obvgHennfbdzK9UNh",
  "key30": "q2QFK1VB62cyXacEzF4fNchrkt9jVYP83XkzLEZNYjHdfHtYPyEznKdZhLuB9muxbqPwRdpf4mzqXAQ5FsBxaow",
  "key31": "MxVTNnNk2TDNwQrbo8PvN1fse5MLPK5z9tRNv6AnVY6poHzZqNx9uZ3Rd2EdEMRLag8NgUXBLnvAKB5Qp8PSPP7",
  "key32": "44zeNwiq6kAnEXmmNyCmtfdPAtZfuazRhsn45zpT2WKwDQKdWVxPLYxJRJEKfPkbc2Bkr3KaiYtXSPUtr7TjHHmv",
  "key33": "4pA1msyervwVnhfF5wpm9RNPs835fBSusNBoG9FAM87gLdNHDhQTiUaTe55gNEdLJuEuA4nSPC8oFJUPVvbgURRn",
  "key34": "5NUamMdUiRE2gpqVMizYs2vafjsoM2U8pgesPxx3QfbpSC8joAKu64U6nxgGLNsnsCSYbYASasPymRavG9fKgmm7",
  "key35": "2kcWHBgjqbVarcUKsLyYTtXhCaN67Xf11t2EWVBmmgxSPc9kGuizXUuyquqzCXut83KDPqSNmEoN7Zhmt9WqjWZr",
  "key36": "46ebH9iKrSA4LgVX9GZZ6JuDZo3mus8ofozt4vUcjDeMfpeCNMW31fLWYAgB7k6FaXUNQWjW81ehsGUxYezN7EU4",
  "key37": "5GDvcUuy6R76Hz5suEgECN2yfhukmKRHbmKPWkoUhjTrMraN99Mqk286SS765NmWfEgkVyWhkC729m4WbzMRiZcy",
  "key38": "3amjEjxCThrw4evRHtVQsNKNVCxKwPYy1g3fgpifZqPR8sgbAqBMAUHxmV891Fdd9uRBLmCQFkhKcwudse3U1Vqb",
  "key39": "4tRJdgiFzURUxjScdVu7CmM54hxLCbP9QEzc24i1wcSgZD3KgQxAXoQPmjchtaVBTHVqgL6MnVWvBEoNTwbe6yVX",
  "key40": "3hE9VhSwWWRoquWsRKsy7fFxHFfPALi5t4G29vGtcUWC9oJnUSBUENsRdqWnGu3ZzpRkfWb93EKrbYTuZ8bJmnYz"
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
