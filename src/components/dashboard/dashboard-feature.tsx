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
    "4ZzzayyTXgCH7aXJQJ34MdHEfUM7PrtTMrrZuFNx9BDX9cgK876NyL8idfcWN6Z4DkDqjocTV4wQLuaxTBRmu4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QRmVFuW5duVCYrWfzqqhuH6NThVykymCkwH5je58yHXQgrsCaS7s7sqxkMzoviY76Rjjmwe3XAVBvrLYrnp3uuM",
  "key1": "31zWVrSyjUujaaWxADqjMD58e6nwohyYX6eHjVCSJUBaiFtdKCA2mhDLV8R5dkymMw2rwz4Ge8zvwcyGMyQ8HYVg",
  "key2": "34jFR4Fk17oDFAtgySWL8jegPNUypT7HfmSjGyqm92FyvnkZiqQcTssKQXP2y81CPaa86ciovCciDcYdc77uXoCi",
  "key3": "23c5WTNEJDhYM3jfKpwfa3ewQX7iq5iuyskC95jvEdUamwbn1XH5mZsYk5gdY5KHVCMza7PRFoi5miiKMTQswby7",
  "key4": "3Y2U76gt3ty9vWkfn1J4MKTzzQbEviWmgo7bmsRAUvJjrviLTTpr8XLNAg7JRqbrJ3VphVuycFRFBH16SDVeV3PM",
  "key5": "5Syn89NbkyU1oatgMvzTuWMDqK167vjWbCoR4KaG7Vsb1cXEEeuRhswjVaapSpTyUSLfh9MuTfkHsJPCtTAir9eB",
  "key6": "4de1Eyhg8Za82r5YqTQFTRjyPWbatLnXpMojiLtNj56UnmC9fDNej4fmxvUaVcm1TVzVEtQR4ErAss5oZT5XXBic",
  "key7": "3uRXCUyM4UbErfa5BJBjeqMUDFsYjdq9hRANpfoAxgsGB5PQ9hjwgQaRU6xRW1n7fRuY6Ku5HsTwosPo9hAHxdP6",
  "key8": "FoRyyGMZyxqr3ZMC5mXZjiQJQYV5FNTBtoAqFRUhYb1x94eKUzrFRYRbVcvRD6gVLJ3maCGvDD4EvXCzWmwYAXi",
  "key9": "4VnM5mFaFAPaZ5G7qDJ4LmTdzokPd25kqm6PFJoNbM3hM3XF7CSqEPKCvQ7k65J9FgUTpWJnHvLKb7GRtmyS8inv",
  "key10": "5vdkhMioRJ34jt3VNHUEkLh76AzYmAoMALvbPEivydSZSqQSCWwgitUxYoMk7oZaSSNP9ebMq4dQFqfso5yny2wC",
  "key11": "58gqutTuKPYGbHY1bmHzz9brBWVtrG345hTnxuV4fWrd35GBLrVHmYRo2fus7dc5ArJd6JL9FzdfggnBsVDMcPuL",
  "key12": "3XgKjfLy6uGhXLQhpmJdsUy3CFxJ9Cvkpc4UYoP17yPSXDCvAJNDgzE3LUdcse1wtJiZ2pWTczFecFNDiaMxVzoQ",
  "key13": "2oSUAWki9XiTrCgDePXBoQhg5sgmMNAiB9JiMbZ1L7uaBQ8hRn11UFGEnS6wMLkBmN9QKfsvCahWXBXJYGECJGEo",
  "key14": "4WW1EMjhMHSGTgVxj5m7oBRMjSi7ih2r2DCzxqfPd293phUYgbRPfdekRPyJa5FgM4ZmtKb23ujpKUvkeNCjJVZG",
  "key15": "5kwLCzLFXQDN1tGGGw85JLottMRxcC4Xz4sCBAqRJFRUwWKTzjfw8hJwhZNiDC74e2TdSPmXSyrwGg6YebasV5EA",
  "key16": "4Bu1ZmfS124ZoifBFJJb7mCTjkEeZ5b8nHq5X5mMPvYLcxhiFvvV3ZSSoXYNtqMQEcDuQq5sWDA1f2gjqAQqW1bS",
  "key17": "262MtWaSrwcr5DXBfA624TpmT3x76LVMVwrNPAoLvH6ugkzavZTgh1cnnb8SgcuW52x1TwoRgKNpekXcdZT6QaFf",
  "key18": "2af8jvnW3AfwUBpxA4GhZ3zQFv8NMB27X4W4ZB3ccjeRpNnLsj77nAASGDHXBbMwVgcqCJD8RgA2Wd88bSYTJvMY",
  "key19": "44YoQ8468Wk9rsMoncwJTirJTfxqwHqQzajHo8apH7MgLhPwm6q6v3rNj6gQnJcPDma7UN4ViDRY6HW3NE3RLtY",
  "key20": "59xmJtGbh43wZTZUDvA96wyEbun6M8UGc7tjDWCd7wEDuQMveXkq6Vv4A8MzaBvnduTpTYdbPHT1gU6StfNAFBrn",
  "key21": "51eSqsbEYpTXYLV6QQFbrZ9RiPRGDJfQpAiJ2Xxm9HLRVbSw8B7RgeiqBwdyK1KPAu4ijoaC9UPH5ziVSpFVbPfQ",
  "key22": "2fqs1opaZFyACYVdrhRrveWJLACCCDsvhuYb5qLYUihtAmMRtsJy71MnfsgYRzFsYezPzXzEDuZxnzw5yDCqK8nw",
  "key23": "4YkfubLP827gDztZNtvDKATEQC6pZBR9TarqcQdoaQRmdz4L3zbX2p1qeAdnQuTjGxSsPEvi1kwVTsK5LxS5YvWA",
  "key24": "4pj3jMFLFtanZxSxypZkUzyyTAowHA8AptV2VoGtmKeZHwAMDP6ShRExZxSzjZ9iTz8zCwjLZhFo8fzssBPzbZyZ",
  "key25": "2U6dn74jseiWnV6qmoqx2Cj6R5SWSRRzx6wRR6tCk1motPkXji3hwVft6F4KUZ5ttN2qMQsGNsF47DdKR8KNZEQE",
  "key26": "5w5KE2V1h7qTD2FRhcLtkXRkro8qLAfbcVvVYJfaQRJyVg5NFxxEGCymJzRBbkCWo21m9iF7FbnnH7bFWRJt9pah",
  "key27": "4SrrVuCbQNmMyqdtLQhxTd47aZKUQNeiCPBEDhDDdqx53jk6v8C9FvQi4izoGJN2tUgp4gsPcohAmAaTitRHqG67",
  "key28": "gScaZkVrvK9eD8TriDj2qwamqfQZAF76hvStsxs9X6wUtXTCFpJjD3j9kVPpuxDGGQ69F89DDTaKCHrHUouRaxd",
  "key29": "4bXmiWDQHiYCCnpKYFsJoNY2VLfxNWPsP8rUE7bqgJnofoyAYCSFsbFYZB88n8yyy6mffn2nxZVeXF2mdJtUsgS6",
  "key30": "4hZd5qwvNP5sMf5MxE7gUCvrahCRhNCqtEWJTQvKcKnXPo1Mzf16nqr2aBbf4BEXgNEk41P4ANWBJRtPheUkETiP",
  "key31": "2jLB9j1e23m7pGkF7nhbz7h9S3EmWniF5nyXSLUFjPAmsh3Z3hDiG4SLnsA6QrXnPo6b11shnaMKgnuw9ZMbG5eH",
  "key32": "9A5ocoNk9AX3TsmqP8gJHmDwqPNBBK2Myrw9V3NyrEsLMMDWoDB6xtLr7A8Zpk2nMPwgqW16AAKXTgH2c6ZKW8L",
  "key33": "2hZRQ78zCbBJXcg1yEHoCrcw4JXrAp3uLeHRATnHKYVYDG2nnitEm6RQtTL7dzVRuBZEjBwzdzDAZep22FCFW6cj",
  "key34": "NfprzLkHnG4xmtqJqSrMEKcxZocybsCH3un8wcJp2cUrH7Bx3D44C38uX8oX9MS9mbuW3heSXfVEtfG7GWfmb6i",
  "key35": "33aw1sP3gMvFvvQrw84qwsKRgM5QUf2ucV4RDsC4H9pA5pe4tcgFjLh5MHiEpRfxk5rzJsqCeanNpmnXJF2p1JBW",
  "key36": "3MiALQMHN3jnfDejhLpkQ9pcJpgAPUW1HHymX3z8i9sVsKqD9jBMfPRU2grD5o1UH4cVVikcKaPMHXnUSLvYSoh1",
  "key37": "2BwpDfnDrEARdjjpxTNJxMQS8kFyRGHcbzge4Z2RcE2ydriA6zhiE32tfQoxBoGNMPqaK8YKxxbFNWABCSW8weNw",
  "key38": "2huCDc52vmgZcNJy5ybxCfvDGJwGpxVtaduvdfAwdUjaQ58in7oRsrmiH649AcZJdTuzvSyxibN6pryio2iAWQFw",
  "key39": "5p1B43NCrhArERfpPh9cEJkEi2uYaSF1PZ4bkWB68pBbhJ49Yka1HTGEKJ7oxYh6eXN7wyzCUhgHh3pGgmU6pjdf",
  "key40": "4R2HfpAiT1ePTFH86yxBG2cmr4Ank9m7M3s241QyktfUA4Vkj4cTScQ24DGf4pNPTjTxxNT7oVVS7nVJ1asFktAb",
  "key41": "4vWyomqTcZCDxuTdoa7GDmbpBYgQNfRHwRPCFSepsqjnP9Lni5YMBFZEihmzw3WXSinG8LRTYrXUgwnrmTSmqMeS",
  "key42": "25USZ8SsSWRrDzwKqh5xY4jm55w61N54atr18zUAUYEqUuz3Q5HGniLb5jzRWscoB5hrq9Gzx7e3g7FSrv8mrYvD",
  "key43": "2CMTfHxUcvJZQbjhQC6P4ZzTSQnDgPZ59xeJbDKBkbQ94gswS5rBemHL81dJNmgfmCiybJ5TeZcGeW5siE2hQXrg"
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
