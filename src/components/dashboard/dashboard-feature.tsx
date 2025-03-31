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
    "3eXv8RFsMbLExAiNDyQcMoA9VX9ygtP41nmpAL5FNKvWGXbfYp9GrCJr4quUYPZL3oWax8t8HCD9a3e2dXtQTAYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HC62J7ZWgZLfj5ihDTzAcM9Xp3nJ62PVj18tmXcChiQPVRzXd3Jp7Hu5BAcdd5iuv51QfmpDCBBTKaeJgcdQHaP",
  "key1": "37jWqEMevk7Y9DJZTRdMc1DaqcB8cK7AkUfSEfVXJXAkUZBJyM2jBc3Zyc8vkHRBdLMG7i6wz73MbEzwetijqY83",
  "key2": "2BPiLnhUd2j6KGpNnHQd3zGjWpWsGPdCtDoFu6GjWQJDtpzFTxDeTgGXU92GFStGRndm2marBoMZaqDXDsC88NKJ",
  "key3": "d6A6va3gPDHpMpNo3uqPzbeLd8sB1m5XXwWw9anAsJ6ZA7HmzQdFLHfN9wgFir67TnhzbxiLCgdvBqWhG2wkcmJ",
  "key4": "3hJRVRFmq2UG49ndnBMCkbGcd5NfHf1r43RDV2rVURetZmKSgv4vELPtCHoXjaS5kWwD6SRxJp4Guv2Xh8ki9puF",
  "key5": "4efAjN2j3myATQAeymwRwytDSxA8GuNRFx7qafnb2e8hGkXTmif3mBfQV94Bg9mKBMBV42sdTXk98uWVZMUd7zus",
  "key6": "4BCqDiChBnGC9UYh9PPR4iUunjxxHoM6p17QomR8zaDsv79uC5e8z4pZHsaZqJzKkyW1hiaSERxkMpqvb9avCnTF",
  "key7": "2c5nMsMXqA4Ex8iG4t134pXQ8GvxKxqnDK4SYqSKQVkgy7SdpAUeNSGv8JPX3M4HcReZeayohSchAarSzLnaPwzn",
  "key8": "3hxBJNAUWmyqTN3jAFzwNFLHu8vRR3LSXmwUbq9UDqLj4ot53z5xjoUJesFeEC7zwP1wFfVrB3p3ehGormmjgTgE",
  "key9": "2L1LnZyFjBKZoVNXv7dpmBwvHys5DCd9NrGTAPJXsTFGiHDxNSUbWd5sQ72rfgqy7JYnVSNUaRXHzDhGfovt7JAY",
  "key10": "Fn56BT7JKFq3c4d785Qv5qPN7wMZvjTdiLWA9BmwrmUdEatceJDo6rybAUzVp66hVzm2EoGwd9aLHpMhgovaXcC",
  "key11": "5zMnukKWmFFwsqasPb8ixEgJ4VyyHMxTMvRJjXs24QGvGSvvLTuXP91gFUogc6e2ThVfuuVjgqbhSoLxhQ22Nk3f",
  "key12": "671Yy7AuhUenhRWYnXUgZqRx2EpdNWAFrvkvNMJSepJjhFrjP9Bap4CnjKgd8FZtD9tXo3okYqqiFDFeGXZ339ps",
  "key13": "4cM1KBEDLhbnTVNwNPBubp8saKAeKZyJbXgfwESFmhQYtHcjtg1G5pK3LZgGqJExJxLG5ALfHB1V6aszW5AVG3rZ",
  "key14": "4CStkWShvSktury9SqXMZvZuZ4ovLeu3VVu4LDowpyF91Th1jbmfkX2NQ2sxPQRzcNgRQRxjV46d6p648RXoiQBN",
  "key15": "ZUsJmKuajLBu7mHhp1Vs8ZRHZHJFfPBVFavxbt64RXo1eDHGugG7pgwiGc4ohR2dGDdAUquPjib7teUtCmy3cvd",
  "key16": "kJ6hce7Ec9EvEBtA9NQuh1J7f4LMQKUqZxhq3eZrqaQtTGKu7BuC2UTRSuGSFDoL79DRbWAp8UH4hUCqkNrAQkW",
  "key17": "3dombKBmkkfJ9GLS1FpEGTqao2dBgyKMX65oHgm4EFVMbzYRgKkzCH9SiUSj95tvB33nAbKuxxtVgR73HwZica3H",
  "key18": "4ARAmk4ZGmrpnobyifX3utgEdiXTpz1Kc3SyUB3aWNnhJVqebKbdMG6hbHuEKfRe88yqMi9BFagaPMRCKuApPSrB",
  "key19": "2GDU2pfF3Zy1FXdRLgDRhxZr93ZTdFvmiXF8SrnxKabcH4b4V9U4TzjzRiyf1JVi1rhBQn3W2EJMpTUpiJ6D6AyV",
  "key20": "3MWbEJF7G1fjPNnNBaLj4xCMAaE7rW5MrjXJMcBLohbHkv3n84zaq8m3LW864gA6a91Day3jF5AcP1FeMm2TWbMN",
  "key21": "29uf3JAvwmu1GGukGAXYKeWJkwNEzwpcCQjgbiFQymhqnjje8YhGsKmidqrLCse3m9YhyYmm5QZUxKbA3QbrSRWE",
  "key22": "RRVGPq8MSQ3eA3XojNQ2jwZjG7iW97fe8c1GZiBFstDGvoJNFVgmQsD1d7q3dQwcvkv6Kp4nDZMmwaUNmN4CMAT",
  "key23": "2CiLGXA8fYtXtKAFmyrJte6D1gyKWuycUynvdfqt4joZEMxUUC1Jor4k49KZNaqxgbiLVx8eB4bmW1uqLMrmJqMU",
  "key24": "EkUMSq3x5LX2paKtQUZuyiJe5cPWbLKRx1y6W3LtsX3kUKDhqXxPyZ8ehoHZw1Ac8hMWmMWhyzAchUrJ4Wi3Cjo",
  "key25": "4rJpB7ysEmoKnzLahCQkfJafBgtSXsN7wsgFMDWTHyELtjM9NZR2jLcMSfPbP7ENJtaETMedcFrLZP5KAiXu5vBY",
  "key26": "YG6rsyFVwuGs2to1GtLFH16zmaXYtZqMJSqQeGmFu8UzrBwhLwhMeoFp77BmDZB9CNsBtpGeuYsqwdE5M9xoF3Y",
  "key27": "62X2wi6e3dYjUekYUgnMamYyPZMnBoe6GQCHEu4ccqhQVbXehNJbXxK77viUBh7UkmiEZxgPp9RPNM29uAzNErBc",
  "key28": "3GZ4EZr3bN8vQkwnkeqzNYkzGvA7YvVwT245Ys9GkyELxRK6mruva3NPuWqm8Cv6xqUdHKAPPNJFKKS2nRigU7JH",
  "key29": "3DBLei4GKne5ep426vM8ut9gMSttzenxjyNGpieqN7Jh5nJhWF3qefLxx8XuBkn3AVpoRQ9JR8XJbUz1MdFdvuz7",
  "key30": "3KeTRSEvcKYnj1ZBYtFNUnBmEDqtMLsBA3Q4tRHnk9j3sJYBm6M5H8wdRUYZ4mHfKEEwCRUmdN46sPVuedZaaYdN",
  "key31": "39JusED2zYWks7kmHRJnThhWqudiffo2mbGDdA3pUVpv9GVE66Yuc8uen4TFnbhbvG5xB92qCdE6QsjnSBFVxjqu",
  "key32": "4NLpQkectmfVNpS2HizzReZW1Un64VLu2h4N2WWeakYU8kBmJitDS1w3sp7GfEb3jAK7EnGy9TsYyyCMn9y3LPJw"
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
