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
    "3tNPzfJCGH6dQwHTWTArnFYZYETkBDUjA8eyTjbqFM3gxqSJiK84TNSwkysPBpxs2KAgVao16SHXFVewohPeBRdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47ZK73vNANzKbf3xmFZU832XWxCBCE9mrCzCAEjZ7NCbi5pw9ZY344tLrGJRm66gzkVPkJgP4RVqZQEMyjRvb6B",
  "key1": "5HWXvpEwVjQCPHTn87fHg9cYtwVpsfZ7sMuQZsdU6gkyEMK7W1mfXp3RaLg7U1aRkRiv19ubzg9bA1HAqpVUrK6e",
  "key2": "5H9Q386diYq3w8CZnmBZHAYARiULsVugijtypb8Vo8463UNQjw7Xioqfpww4fwPsdfT9EtyVD146WYwFjUWcEn88",
  "key3": "3c6d5dx6EmqrAGV21zhFYZPdw1VoqtQXyH34gvRLyo9ZubosowL5pqFg7SNmZX1Hrd4bSUdwzq1yfAbg9E7pm4vM",
  "key4": "wCesuEjUiBFZupzhHrKFcC3q3niM3erTyqAffRdPoQYhPoyrdbTdqWj7pCzmi4tNkXWaAt5rerFU52iwaAGaKsu",
  "key5": "49dNKUyEAM9toh693A3fCNNRYucmrBUYHPEgZRNjYNWc91iynuxFze444giuLUFWWh1dZmSwWQRPVRTq49bzmAyi",
  "key6": "5a9jVkpXW98gFDogrtQPgZEMNXZYwiMPVNQvwdzVUyqiACx775PqQexW7uvHZhpCW3AjPXHja5hDn2EyGsZLcvQ1",
  "key7": "4jEhkVDUTLVgMiHZRMwSt73o8eHjZMeHC1wWKUf2rpLFCnBsAH2ME1SaET36t8o75ECfvXfLTu5SKGV4ccnTxWZD",
  "key8": "2PLwWsFqoN23sNQUtmBG3tfyNRaxf7siFoSMdGyhb5Ac4zrW8iR39t6bcs6zU1WpTskEK7yxzv3qb8pVDt8nE3NE",
  "key9": "2Q6esiteN7sknkVqfM1pAc5u6sRuJMZ5zc8BRcqrLQTtQgR44uEHzJLhyjFKQRhgdSEGgfF6ux2u9Ei7qsbKvqJn",
  "key10": "4BZ6gNpSWDzXSWcMymUhU6t3mxyQogstcS7gP55fPKcwzKXZAa1RBiuACeHTQvJsbQ8GDFe4wGSK14f7dwodAS8m",
  "key11": "4EZg7wXsnkD19EFSk6ikrHNJmi2TrEVhqBU9hLvnr4jGPAooGbJnbRqQUc95NKPjnD59xYHHDA4ymZqTNemDYFBg",
  "key12": "3xVGZj7xVLEQgoGBbpETCX82ShbsEukc9tY5kfxqbvQ9kBj9qCMMKXCd8NbMPjJwJLFzPrtrbnzQ3mwuRtXZVsBM",
  "key13": "K72hfuF35ec5AANY3uU7wZUw8ApQkSXsUJaJmaseweKCBjxfwiWPGLfSJHTXYfZCHYRi9bjLn8DUXHsXAnBL3Si",
  "key14": "2AjxheJ7SmWNrzMFNCHyLNQvkNTKFn4LK2TkAafjMikKKxVhPNvJmej7j3E3NocopHzvoUDTwdA7xJsLfyg6zyjT",
  "key15": "57cSrdok5RYsMS2P1NjaB2P4RAZPJ3VkZo9P3bqSdxQfwgmkkLXwoPSustXpdKr8NvS6jPCKcMdr2w2RPq52S3tQ",
  "key16": "2nRVdQCyoQpxQ1ZJAAY5kkQR5g6YVMsdavbwsr5HxRG6qRiYX5s3aHvi8tqYY34exqA8AZbKvPnbgBuys4pbqFAj",
  "key17": "JLa7uTNsw2S2tF6koPER1gpa94qmQzUvjSSZPearKqHQhkUrhCcb64pua7KYyitVWubuxcvWmfgjQaE9Z7G3TXm",
  "key18": "5mEkPMkVK83r9yTWg54wr13BhEx5FztZTdoa7ymA8VQpG6aaXekcjPpzveviVWRgEGmcQ43XaFg2Qt3zXxcidgzV",
  "key19": "3xxeqcqoV773RtJbCjxVbFR83jLqnurDwqE93sQMHCVtZ1z3Z5dtP5WBKHY1kV6yJn6YdK2AfdWNHRdHjsLc9bZM",
  "key20": "4ejG56V3Bk4MGFpF4waAuiVCmTwGdsxAXQmwPod8kzuVWV7kGr4wZ8Gw34nxcYr4DnZtomWDKegkLeNHig2gooAh",
  "key21": "5eHRphiDUo8p8MUM85R9Rt9nPQnuvogrfiwtTaJ4QH4gUoch4AyKdNtL1sZ9W6YdbhWLAyP5UHV6stmxvfKo3cHT",
  "key22": "2yD2rkdJyYrUF6NgWn93pGQHJMvySjspRhUnzRMjXV6Uk7zb6EdmKJrJUCqePStph3i5BngqgRKyt8fG8j6k83rP",
  "key23": "1VcLHHv4f4k7LRUWSDmuasDKq7d93XRx9kZTG7yWkiaLXyphYNtM2nnzLBUsL7NCuz5xfFPeYHB9yGzpV9UTAnF",
  "key24": "3N28JS8yD98thYPFHWjgHyMdkzC8J6c1dVDHkWB5W7d6ABVEGaRdWaqednTV48KAwLuMkSWUfsXEbEdow5Pdu5Nf"
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
