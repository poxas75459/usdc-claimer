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
    "5d2gS6FGtrReS8S27HaBxL9X5gUYH3sXNeEbviR72LwQSPpRTn3QDCQCThMuQt1baTpRKtLVEn6fmV8ePh2EyhVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TPQNesPb4SFA7wTdzuXagNTgiRxfVtmyWsLVjdeftAEpmVeNHKoDUbWsFwKhENoek1RRAxnMGZfA5f7E5q7i2qV",
  "key1": "2qVobVwfsS21ZskURt1t9EZBUZGpSjG9ENA7CjoC3meLfcK4yNXuXRjFsKfovMU5EXjYZJANG8EYm4XqSX1SjhYD",
  "key2": "3iTLis3a3CPvh6rDgWZnPyMG5RM5LD8DYuNBCJHV23LoVjfXRzKXa9uwJB4EfYT79P3x1HGF4Pn74HZPWTMmHAyB",
  "key3": "3CURGhijmwyh1vLK11McSaoGuBSwQrymi22KcUTxprom3cujKx5gy9d3s4mFp34Ak8rudksmzytuMqu18qG8cj1R",
  "key4": "5MbdbhzEzdYR5BFgacyiiUys4SehuzuCuaEy9Z7J8yQxCT5z4JdzQd4EtEbKKmTQBpcBUPFjDMUVeLfYngdY54jT",
  "key5": "2eLZj6kA3cCPHgmXWkJm8sj2Nm1x5FLLTSukogawWgiTxdFZJkauDZhDjL77KVLcCane2T5rZf3aRjtYvQmgd6rp",
  "key6": "45xT3gNn9FiPAmFpXVK7SaFufjNUrp1UfE1xbKPt6c5vYQZHpAGpeeseaX6Vkb4bdK9ce6u2myP526voaWybvNr1",
  "key7": "CXxhbfqiy1XNWGWeKp9GJJ8gVMvFVYgAswpkBUXYtbQSmkTqpTKb8iZwvdikYnNwoMB7S1eQ6dEkfyvbzkKeC55",
  "key8": "54ebNPoQRHbak38hN4LnaJ31gNm1Vz88yqXL9i12QNRJhNPE8aQqr818TMDPcM6cGbwN5LQBrYLB7HwtNFiTFUBu",
  "key9": "5A2Xyn6gNzZ9s8VHZnFPmCnL5spKvuZ9mMdBjyw6b4JqNFsgStYAntXKwpBVu1otwxyexyQ3D1yZJpqMvLB6EawC",
  "key10": "4sBZsCWbsVu4mURmoVvXTCq88ZtRLMK96xSerou5TrABZRXzEzyaQTN78R6ayNoEDT6xGr9wzQqPxWGnJjXgxndH",
  "key11": "65oTaDtDN4eKUh2EkW94tMwTN9UEUKv9TCvESFPDDnSXoJwcjmDZr9RLYUzL2NoqhYNHB1tiSWsoA65otKbgpm28",
  "key12": "525UQPbmDAqAp1W5EsmMUt2mJ5svXQvwKXsFKyycfCy4PxXTqYuU2pFbMu4u8v2sYm81jnCwMqgnB9sFFRq4iZgj",
  "key13": "S2xrXbLPpLukFagLsiaH1T9iRYj6AAM6hEy87hujscS5a9351WmErXmnTxKNmZuj6ZBsXgVcBD4xGFGBgFcwYEf",
  "key14": "34pcgYbK882y191qWb7NkciJwU9hhXs5kKtgUbQMVJeSySJWgMNnVDor7Wzb5nEZb5kPwS2GgLyaDAC7pCho7iE9",
  "key15": "5MVKw8t11QruV1jNEJiJqVSoqAe4gzb7KiaP8ALWh1vBQmMDAMN4TCQh5P5AqEHWAf9rqM4QsMBj2WJ1eJ9Lz4fB",
  "key16": "2rcM42mo3AuhTCaNtNusPLEsxB8ahkuFRR6xqqha2Lb6cnhspZzVjstqBwvwJvWhqjzet9UKQ7h7dXZayfhj3iiN",
  "key17": "3j1w56ZsJZiVC48EUg96j5v8orfqYn2uPevq1bgzMm7XZae7dumbNUPZBjPV2ngDVqd2NuW7FEqEybwdLhCNpNep",
  "key18": "3SyDse8ViZPaTA5xfntqM2U1o28NCUDTDC5FNNnx1rRDpKxu9R5PTNZ7ivTP8DbptoZzJUT4znCXP1bienoDwXkE",
  "key19": "3XN1fvSwnCPmgDXZBkNTqaAAsNYLXyby6gm78PCEqCfnsaZhBq9S3v5ySQ4FwbSMayzokMMyVcbaFtQfhZ6VcZcg",
  "key20": "3sC5SUd1XfKrW33QKiqMe7z4dLBtfc22ZrHU1H19Ve86LR1sXuFNmM8KxTiJ8v9N8UKMnxBe1QNKyLTY2btfgvQC",
  "key21": "66cZt6Mh9p7t8Cv6h2fSxrPvaMjeHWkhLtjQzi4WP63rpLvuR19hXAWjgouHQnKnPyiMG3GuvjxyWRmQqinZ19Y4",
  "key22": "tKE5qW9gCFatRBaU2ZHGhEvQusMrH8B8fcHMW85j1hX6pgkUkTPV9bRP9bzya4szypytmVdMAaaMaBaACrCq1X2",
  "key23": "5GzLBvrqeHecWu7bX7wduqDKjaPqhLZp3Grtc13oxR9RiatKrURHcV5xQhA1XHzA99G4KhdxpSAZhf8VxgVt6pAa",
  "key24": "26vQE7kf5wMAHXmP2AaW56PSwcEFE7x21EmXAk895wQCGsNGgmnoibDJN1EtWC5R7FZTgJ1pTWtpHf5gXHzSBape",
  "key25": "3U38cYH5hrwUXuvcEdycu4fBZppMyWGaWiSq4QMXHHSafLD1PLwXdgcdGb6MCZ5X7pQoLsrWbtj7KYTVB44eVyhE",
  "key26": "3juar3HJ1uNPsfqFRPd1mdgtAMG9mRzFpakDoKEsTuoQZWvY3rjYwNcQk8FmKgukCEzxyMr4jCaqRj8144N8u8UD",
  "key27": "VkSpu25HLBGDTuvJPaxnQUfZE6veDV9mSC2CznWXjaHBKwuXE44yrYaGiveQvPpH9Hw7qLEYtLf8B17EsDkg1jd",
  "key28": "3Ab3Dbf5DXTLm6D7EZUnxuFcrJc8GNeXAVfNZYgT2rokBK7cjfqe8z7Q7Qz52y7aDcxTxpVvPRSz6p2sQn1ctY5c",
  "key29": "gsNvbYS26iSS76C5R17Qa3vFmTDYahZETDXCZV45aFbCAbmnP74b8gNqvNhFUdadda7FdcF1ZqtPy8i8SYEiDKr",
  "key30": "3xQSuyKFGQq2ExQdPpxuZpVSHHucxYa9v4bLM5wPoCCmRCEtHsdmGnyd5VBMfTx94FAR4bkyLKj3wHV3JAULqyjW",
  "key31": "3HsBWuBDB1fDXWSUXUtVussjmvputFFSwej3LEPvxW5PyeBuH3xMEXZvidh1cY5tnFPriuprzqw8U7t9NTyMqCkT",
  "key32": "27HstWLQifFr3KP1va2uY7MJYfBxK3SHZ4oJEckNebcXqdmM1YGZFXe5mpbWw8K7Z5CQKmwT1EZZc2jNv478ZPuS",
  "key33": "3kL8pKESKFG7YQkwRJ8x6Vpu35VPR8KbCLmsEMChH1eyzSa3oxZW6q5oiR6GuY2LbF3ra2846uSWSGigW8Cx6ZpQ",
  "key34": "km1YvHmg5VvQQ9bNmQuM7dTPh3FacqstdXBruu2AJoyvR5JP4kGtMmhuxKxiyoRtWWhCSqgiC5kXAMU8qpdtsBK",
  "key35": "258nCqFhMVXxc7nbevfw8DqC6XGxJn2URxPG8ZNbhrRaCutGgA4LuF3FUpyFYpNSLzoXwtt2gqFKafwZifAW1Qte",
  "key36": "64gLDJZ3WCEguchx6iY9WFRosi8apBdPAjH5bdTnSquXtN8GHXQYxV3BQ9NZP1nhxGbFWYDqDUpVKJS9D5MQNXwE",
  "key37": "3b8jnHsQjgGM6NagBvXZrC3SmLLjQZ152Qp9YoUMUK6K8QoUtp3zHjGGYqNAknXQPLX4mF5ukhivHLes4cqYbYYF",
  "key38": "3Ntz3NkaXE8s3FNbvsdFE3DHrNGnNF48fBWiXFdHEkDrNYFv8USeHLR5psUfKKPnvu6QJtGQYiiCv6732BdCp8zg",
  "key39": "5cVzwfNLq7mB8Jgv2HnfqHG2gjqgQfMGXzeZJUnJuEKqThnWZTa4Lob9pxVcNg4xVCMHdNYh3z7yxecFA9TJRLZQ",
  "key40": "54Sp3Gi9U2DarueoLVWaHNn2nuySF8okwiQtNRi5DfTZjpJshG3cXyQZ59fDmiXbD195DfP3UdXbrQdPJD8HduQe"
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
