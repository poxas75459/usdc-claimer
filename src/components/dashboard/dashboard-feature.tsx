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
    "2eaqRVU64JDHtfTnt6bMMZUJ5VbMrzVZCGsuyspdALYhFqLab5T7MuWaSzmaB5zDRcejG7DgdXK8UpqoqzmZf51v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BQFGvPkKkWsQKDhqsdVNeKa7URVVUVrWmjmWvSw3Mmtt9JqcFw4iPxfbLUYPF5W76hJ9K5jKXpKTWRegLzyyG5y",
  "key1": "2m1ZrmUk2rFiqKaeBR542aHApnQUG3EWNhR2PbjMWJUrPi69XJHrwnBsxrbpFSAfta1JK4zgSRggQ6LTrqhQq7Sq",
  "key2": "2PbJdPbu5vQH71HHAetLSDSuEvMaQogdBmsEac6NVcQsEe53nECZy4sZpHaCfu3F5mfMaos7KQas4BBN4VZEwoGH",
  "key3": "3TbqL38b3JDKRAxcqMfaEMbYATWkuQZ14XA6ZETCXufoS1kHYZUocCF5ausgrLFfxmTJo3LS1Yw41MrVeNb29maF",
  "key4": "VTfWMZ7gJwCgKiGrQfLgnykcrL95j5c4C9FJ3SLrXxPKrvrUduGGFio65rx6PHiujCUufGTSr66KUXWh96Hx7X6",
  "key5": "5SVsbhL2mYpUNtJ2c33XQ43zC3wddXJFH622juJhvmmFC1aBCcirdQkKYnJv57MmJ67phbssdktW24RxAc3xTfmJ",
  "key6": "VD24fTjZKzQ8PSmcB6Te1AUBosjB9qLmRDnX7Lg3zqWocQrNmmtWfP8YrZWJBvXkjGTidDpMKAMEhciQ5JX2Jsq",
  "key7": "3EYUFbrfrDsEh8CkbNbhbqkCjiXkJfynLj85oVp1BGMph9LwMuF1oSypxreCLyUHN2PoVbJNY2MrMQ1ABxat92gv",
  "key8": "4hMg496H77huZpKjwYSBMJ7sAXFDLVc2JXvZGc8QvsULacoXuwme1bfKz8L3R9t3TvoZbABqaMnJzSeTFSSo8fKW",
  "key9": "5QtpQxQMfPbZnBcdxAWNXKrDwdJ8vgWb91aYvGbvvN5zQiB64YRMAyBM4KvjnoVHy2NkYCpCV71RD3bqSKJt9Pni",
  "key10": "4Jp2d6sorK3GP4vYy8NatrWsTZDyXMw7NXeu5FSHCj3WpkrCMxA28bVSJ6jxYyjUNoL7UMHRxbYQLUNkiZLPGYi5",
  "key11": "4zmJoP8kYAhBcZMd6E3WMAxQK3saM78qgqtnuB5xeVFttg9z7eo6o3GLhmJtq3wpYUVeWQDSzZMpsw9ryhF6ZzL1",
  "key12": "26DGyZxrKMNszuL9ywW2LaXM55FcRHJabXCzzwS8ZQxwovKHHzYthQwz1ShqHpufE8Xs58q2WydE4DSAKd3NHyAE",
  "key13": "ZdqzLMPbjDNEtCaM1ekrSjAVeuiNfhMfCYn6Yu9djUS44JWUFkF9qtFDBaiTezMZKDDBSU51LHAZrwujYsZ36Uo",
  "key14": "FCdNbF5nanEaLWToao93m1eUTBbVpg5yaSZnWuJLuNyCLEj1n5bBbQWrgCngWzc7gWQPh9FNkBdz7qdrpXVyov6",
  "key15": "4M3JHJdVJevqB5qbZEbEaPpH91DGxPazodKWxnGLKVQJYhKYXzwstr8W54cEyqAj2MF5SyqkobXcse7VMTWARaBE",
  "key16": "WRCpn9KhWfdum4R5Z8JVDMpEbP4nUV9ktPPZB3pdSfYSsJVTGZTRyURckxFqiuhe2zB5def2Q2Qi95TbCwak7R1",
  "key17": "3i4KfEapyLMMkq8tiJVVjwNVtypdyTX3KAcivt8xGiAfBXmyKPFRZg3UWFYv3N28qJH4jX4n8UeKwuQTratyCLim",
  "key18": "53Tf7mEviz74zNwCdD6iSXDT7zh5ran4L7miXXkiiKPjwXUuwCtzN1bjtxVUDE9NnEiBpMiqNxBZnPxoG13PePTG",
  "key19": "kxuVF4GaG7ydfdLKvBFkybHvdR2YhzTX4sL6VW7EQofduoqTWU32JNkzH5gP9iXVMtVPPPuGh2dYgBFcfFTW6qW",
  "key20": "VUse2zSQ5KzYPhqBHmqpvXAECHttri2KCLMpd7QfEQgWtkEXJ7p9hTGSgozbBiULupoZj2bSN84v9vZQNvyNWBY",
  "key21": "3TdC9TePTEG4j4Rt48VrcuMRgRNdzy5321teQ8oZQQcVxQ16hgP8gvDXGjhzQs1bfi3YamhdwDA7WPjkqqq57Gvf",
  "key22": "2NrWer4HAyaipnLp35t9ocfPmsw3HkFZGk8RvEPsgcUU1znnh9DsfnYY3En3PGdaA1TsmnHhkiPovusRFgcmNoNA",
  "key23": "eTCpLG5jAdoX7m2wGDA6jf4aSRim1xy8aUEib1Wfu6iyThT2PpDB7e6DvT58Nck3A82K5NBLSw5b6RdSbX2CSx9",
  "key24": "3DzdF33pRWdTSVQ6UKR4LSDTRGNvWN9iLV5rMHdqH3Skwus7K9UFLS5US7xVqS9GVDa6r57PtjsroEk4HC4dFdn4",
  "key25": "XHKUo44R8uJpPC8wZsbeQcCPFrQb42WLjzzL4KjAAgcrre11oqGiHteZWiq7FAJpNBwbydaF3tRu68CeGXkvVku",
  "key26": "4eaAUDVLWu8zLux36W6F5WDb8ThcQovthPHz9MuarLhWAigtfeaQ1g4BPU86BTazHHGYLzP9ni7wx78gDTg5Z3Xp",
  "key27": "37xjo66AsZmm3k4fPWbE9YNRmeN4wkJEVCVgrfPNJDxviCe9zv45vLeFZyj8twm35BiPnbxubW8RbDv2atUKyHYi",
  "key28": "3AKc2SuhUSXM5DbtDS6t7GGNBQczhD9LfHmaXzeNeaT1CktF2ha9eMQuJbdYzFmY4JmQHbBhfPQ2hNYyv1E5LGsN",
  "key29": "3YrsK7AKAzUFAwfheNHGAZXgaEws3iEfDJUyiaJfZKrFe7s6iiEdDtpZsGrYEp8aW33poSQhR7TkSxWYS47Nam1u"
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
