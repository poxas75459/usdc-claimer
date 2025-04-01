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
    "5Ku6746LEsyKCKLeBHJJQPTa5s5komjQvF689pR7dyzbCoN1FXUaxRrTHeinFNbmb23mdTAPwkGG2rFHwx5QJ5Lm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rGDsp8vKePd7YuZDFhWsxwYBRirzX91HxHBCyvqb9XdoGcQawwUCSfG6K9DFMDckEKSTw1Vmcfbj2yRW8kxePRt",
  "key1": "3AASAnMdHXPSXbxoj7T76DwMJkYwD6EP93MAAxPKJUuZUzRmDTUbaEMUtdR8CnLB5eyWjAxbqdkbEzMoGSYggaB5",
  "key2": "4V5qwPoSd7Ajt4YbjCQeHp67oh911oCnqa46zGMPUpsm7saRCnbVGxmrPigy6ZgCfL4QikFNeHTtqCfSBCKgG6Jg",
  "key3": "5mW7cTsoYnNDw1NUS1cuBNufQQi1BVRKp4S8DrPQPe1wu8VHpcp8Ccs528ABAuWPnF7wqsbnmRfsQ1y1GGadubtE",
  "key4": "59rMZmPgp98LsMDugmdHX9D5c1Ffrcm6UJWt2DhwL4qx4Tm6kVhif5tPsTxLbB6Z4cf26v5WscLxp5M4GoCoQdZF",
  "key5": "356KZhZjBFGSk7zg74y6Brb9h4SU9oxJ8TwtAAtdjkm4gcrswe3cJoThw9naoH7mGSw4hrtaKXcgdTihDxRnEKx4",
  "key6": "mofuZ9Y5eBq86fhu12PNDjFz7EdP8vrXj6Bk9fFT6jWCNjDLnqkLJDonA3r2PVngWvq4LiYAf1kzDwtZAuHki52",
  "key7": "5tMH88uz9jywZGpTqct5WJabovAAJE5oeuG8aWRvhjxPz4ADC8QwkqDqhZKX52JTiBKFFfhL3ygPYX2tKh7NfXCN",
  "key8": "4ZLALsk9HMLTDz2kWWAvNUuaogFarULjcYYzTbfCVfBz9bNE86y3MVHjLLgSFHXotVGkfB9yAYQXpzT5uLTFDdaj",
  "key9": "4t9JzLNp5HdPwMgyiWqK5anr4ciPoftbVH25BUU9Z3dM8YYXsjKR2kiYw1DBZUxu4NkPkh9aoxGHAomKYn5SET9h",
  "key10": "3SFxdR4omSYWnBaY6t2Qcj1LqjRA5bdbVFgHK2VttgFa94dh1uSx2rJkVxnT1hC4RtE32mQuqi4bmijatDav4Fx6",
  "key11": "4ufBt4FHezcGMxBkPUa9xhXYbe2iAdTNp8iZHr7tbweePiHUcG2YdfTBu2xzq7jqgfnmWV7pKJxfGMcCQEMivtSr",
  "key12": "qdsuAZW8WKcUtAkBk11VsvnqfM3BjLKK5f9mgALfYJ8XoTWCjKdGQzdBnrQ3tjcuN7Xgj8jeAN7nmEVPfWwwd3p",
  "key13": "xhLLxvYUoYVUfuE8PmMFTttknyTUp1aKPKnbYdWRar9hwVHZFtT9ActMGVjSoW85Svuv6Hc8sXJ2wrpizV2miUV",
  "key14": "3xJ9UE9Q4Q9Y7hHfHjZeFHnHwTfA7vpd2xpagC64zRFDsjxm6a2FsmKn6UBY18F2TxHgacHPgxqfLKuWQUzSqFGS",
  "key15": "3Eq3MaSHR3MYUFBXwMnxFxRUKZEYVBmrUxk5sWGeMcGLVox9Ye7Em2DtVdLqfCCsnvSdqkmL2y7yjXJx8BUs71Gx",
  "key16": "4Nn9aRcNdf7gu2NGdr2gS1Douv5tFD9uf357TH2sJyCh1jSZYg6XAagoPVVy9p9Qvf4J9pmEQ4zo47HvzqCFDFjE",
  "key17": "2LVAMt5ETtJA8ioaLjE6FTaUCK1RXvWZjTapETbaeNtNSWMsMFcHKCkhQZWWwSF82Qpz9rybgGwQUd7dsff9mNAh",
  "key18": "3gtKtWPeVYCcJH8QyE11N29eVu3uuUxcBwh6QoCEuvAXKF9Xgs4wLBCcsd9Ceez3jYDCq9qugzMQBgAqi6AcHcVF",
  "key19": "3cyTL4S1mH1xmSeLWtVHzkfMHxm5WB817gF8yQvuwFidFtyCKVuwSL1dQ23ZDZ3mmBiqStw28ZWEsNRTn942dQAH",
  "key20": "2yBfPbpPPBwBycFh9jS3iyPBqsnd8pzMAsxmMxCY1iZt5uFLEuTVEVhzMTpyyAs93PdbufJKdcRistaDtdqkEBdo",
  "key21": "3GkzdrM33kipGka1YQ8U9qNPQMqT16oGSqQY39GKwE6mBt6bjiQoqrNaSBQ9DZZVpGPMtyZQnh3H72bzF25hEEtx",
  "key22": "SiHony7JEj6ZSxjHqqoi1gdPrPnTb2TMXZj2nkZ3sjFtWCUYnahaK2ZpcseE6dcnRERf1sJThxvGAFiY695Hjda",
  "key23": "3MWay7SCFcWYPvJLv1StnJJQoxVPcHdjFy6bv6LdFBDEJEnrAQuzqSk11eZ9hTbtf7LG1fqjAHKx98LutBPBhwuc",
  "key24": "5JFj6YFyCsYg45htKTr4u6BgTBzgrFmsXsTagJz3R1NeiaDmkQfH1nA4uCb1Nkt2SWWdh13fvZh7UQ1Uv9Zx6MvG",
  "key25": "2jd2vu53jEhwHt3BQRGZDCdWg9v9WGXGw9GmpFANxcAWAhi9YWUaQAPN89CfzX4QRp1q4qQRCRZ2K9vUHuavChCz",
  "key26": "61VeW3Uo78BruGwgmR1H6a6gfy8M3Kf9HQMYbebnrfUdHYA1Pk5qi3jpWP7MJKpv5Axqr4uXFnE2LGTXnhGWUuwK",
  "key27": "jf62VYrrgQFez3uCLzVw6Bj71uE51fVJnHJZdb6kSBkWgz4WNzq4jF8pXmozF8aocin5WcB86N6yx7nX15toVtM",
  "key28": "o3ijG9BkM4tzugLVXHeyp9cEBzgqKxwSwJt4yQGpY9MjCTUL29YTJHRuKiFYp5xARsvYwZy3kHhZiBDXPZQmBsB",
  "key29": "p8A8EZmFJnWehqnJNALsmqDyMXXcUDaQFAqNoY8PGBANWWRzcPWhxB7xbSGLc7MhKAqtMmeMXykuHTaX7Bm6zZU",
  "key30": "3GqEeXDof55vfVpQT89WJmTBKzaPhueCPcaZmVCtb4Coj8F2Tmkygjbun4e6xc6jQGpr9DiMUjwuHRuU9ZDpmRNB",
  "key31": "5DQx1TZepRVtnx7LiK3a9nJA45ue8XHa8vNgU1S4cEp7hRny3q1FyhVdEgCTFZA4SqVnhUpmzhf8aPWf9TR8stxL",
  "key32": "hPuK4aYUpdCn9LDSKPkfe6JJPYR743ohu3kCsnbsgzWA99pM47QFh3uQTHpeHGWSEYoEZs41NysGhaUvfHEaui9",
  "key33": "5w4vW9RtC7sLZhCoGytczoFLSNKUVTMy5Qjqp7kr1aHdybWnD1bXCbugg5sd1r5QHptvQruzJGvahLhDhdMEwxi9",
  "key34": "4dMWcLaj2pdgp4aAAC1z8W1x5YDV7HGZgVXs9gKDGVnnGvuoNXuz1JeFdGRGCZ5sihikeu7CWjfNLxi2gudyBCUs",
  "key35": "5Wrq1KgjwmXZLpc2opRHK4zFMJA2y3apQhC9qwucDVh1Pe4vvyDgpzTes8AkamxN9D4dtshsNnHLzoPVaJ7xnJiU",
  "key36": "5MioU5jPR7NdksPSP5xeCfJV38TvFonaHc4wG52gYdpSaJcroWQwrPJzEogMNX9kmcHpXxPWE7f71p59A5t4UKZ4",
  "key37": "2Z3N3yfdRtvfURQjLsk6rgVbnewEUzxnGYK6449GQhXpVGRrqCZrdLw4jLNUCw9W96c6oJi2hNrjpdnpFhEA6S8g",
  "key38": "2Tj51WPyYQ68bouddFuKmzaRzRgqUHP3Z5EFq7BXtxpcHyPu3EakLrnBaHFo5rbwJQbwWaZYGnE7q5XgTjEANgC4",
  "key39": "5GkrMBWDij9q4iW5oskFoS18dznRmdparvkxdmfnneQt9KWHx8wC65WW28NZmYEyp2ncDTuCX56fA8mapzEAYod7",
  "key40": "3EPg1vocX5VFtuFsLLct99qUwKvZPj3UcAWH8ypdtFx9DEELziYyXVJy2wDCduPHzw1hQPfDZkmTtxPcLGoVZXv5",
  "key41": "3CcDsY44npbbPKp1kyBXnDnU7jCeHvtZY56qi3t9zCj2D32ohpX4i7YsEDKDXp1jHoBB1cfWsMBh5Nj1bcVBp9xv",
  "key42": "5r922dUQw2qpNFpjyPnEXU3ERvwpCWMPQ89HvidBhKE2JETo251kpN7rzxZJ4tDruavXpmb81vFfJc4mopHM9M7u",
  "key43": "2KVZxJVEjaF7u6JKJ92CkdSszjigZwWdiUSH6Sz3jgbZAhMPpCRGEC2ESqQTPUFML87UN6rwbrRGNfPM5QnZPsGS",
  "key44": "5E59DteVpVTJfqKksPAsAoi314ARQ5fUcT7GgGC7Arr8uLhuxVGsNzrmqrLhZWEKHxytN9q7MnfzHobcx7iRRJ7j"
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
