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
    "28QtdRu7vH7H289SbPMdz4H7wbFQw5ezfYthrLe8oY3UfbNeWd9R1cd4xPh4pNJxhU7RpaaLEFWVnvqW5FGvwHm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63cayjpR6qrbR4WdAzbHT18XGvoRdKxWbAhS2dZ782ymKTWXqNCZuZqrqnFCxvnQcUHTCFi8hpDcz9r5KUPd7MxC",
  "key1": "KxWKBktoMNF1ySqaW1mxAauCMEaqtuA6U6oKnjq61BtdDtq5GTyNeuuqLZctYi6ki3FHsmH9SBRYNmmLmfVVwKe",
  "key2": "5f7NHw5ZQjcwSmJJ8vqhSDhPb2Nhg8Rmr1HXLyXRTUVumL7oKyXbmxRJ285MPFCedJLy3fPjbT8bvG1H19wLU5mA",
  "key3": "2iNR82ktzzKBRiDJ7wZvCd1W49ir4WMnG1xmSGmAqdKuopFSKiGp238vritN5YVtfJBnoDRCAwn41dbCt9xF4Vdt",
  "key4": "qpxs2LUYwTbfzFFY2MMea1uX2FZqQxFHt9mKTGfKDZVoS1NqRdGWaQX365ApohzirUHGVd7xp6M4hFbX7ayQPyj",
  "key5": "3nnhpze4KS4xYR4PQqoCjHY3Tyh3rpCP993yTj3qRB6FB5GGV7xRrK7TSMyzB829W7uXJdXsqfEQCFZXR9BxovVw",
  "key6": "4MLNBWSZK5Fyh5K8iFfpmzsz87PvNHkpWkdJvFGNcVq7cuGapubYrwGyD72R6Ctgi4hcRUbHtygft65RnHyRRy2E",
  "key7": "47hbkUZnHymmHJeUe4CwLbJJQQfkHFKZ6VrP5XWuQA8mjcbZuxtSuSEoPRQeXy5KJ99HsaErNNfVgLFGGeRaGTqT",
  "key8": "46b8obkTSJ2p9GSpHnwKfSEnxWie1VkRdKYok6XZkiSpeejbaERrWcFnscWK63Z8LE97BsnGSJN28s7mK1mZVBoR",
  "key9": "anKenUPkz1SYuhs2FS6mX6nWEcjDYdk33XyqzPgd45jvjZ4tyP8iMDQmg2EXpXiLkjXb8eergM8rmFSuXgBRZdN",
  "key10": "SCrmsnAVXnjQvU8kNTryHAu1BcxAP5RtsAmRxdS8KUVUdeg4zQmfxL7MqDDHRZpLgNaSCYHSRPLbyhmjEBgoVmF",
  "key11": "4PaHUViN5ktkEjCe6C2mR6eU9ZVNhejTPbbfnrw6tckiPkBKqJWHfWpMbxDBUckLKab6RCEU2xMsaBtkutrAM2e1",
  "key12": "2rVvVJPo871CV5LNHRXigPvPPn7d3aVW8f3Z3j6hkCbc4ZQQkeoFaDAsHLKnV5Mq1MBcBwY34D1zSkTJy1LW2vCa",
  "key13": "4t5jHx1cjkuwQ3e4PYgsiR5DFBsq3KGpqmCoTKLmUu3PnnnCnFENzVccoSenr3GbABGNgwC5ZsrihNLfQw61qocH",
  "key14": "3yvHVou8SEWh3UNdhxH5g3ewseofsyvzkpGq73v8Tia552uxsz1BPaQDUgiRPJhnihiCq3WwzXnxjsiZivpYq2gw",
  "key15": "3Bx39gG8D8eCUQR6Eg2uiyo9Pj9s7nMyWmV4w8FRp8CbHfxvakb3yCZ4K9SpGgSqMdmJ8iwYmLUT2yRD3s97orVq",
  "key16": "3F6zcqaPBBtATPVNmv1jqyr966cgRaQF1bwCvwhqDx6mpyviZoTfMbidR4pR48Ygsyj6p7udj4zyJLZ8NaTmMBts",
  "key17": "EuceiR91v4SsiaQWkxnkHY635BHA777eiQr665MwUadmxUEwMkHqo43ccV8FErvoX7z4b8rzKf7Jn833Sq7Q957",
  "key18": "4ex6rKyFeD9s6VT4hkNMg4UWnYMy2UL517EtBcKfQb6ECeS2CDYn1CYhbC4NgFM6o9TrCNR9nbiZGX42sgqG8mPN",
  "key19": "4DhnqMgMgtsGx6VnrEVjVFULogpYFDKrZmPwFK2SZPjUgsFMcYfZWJKdUx1moP8MDo6RKZXJ53y4NfNt8t48R1TD",
  "key20": "2Kcq9RHiSt9ACwLFBLwKNveRGy2247VdqEL1BQdt2ciJHydwypqUQc7swTfFSDU7S4Z5rx6ftLBuzUX6Zw7DneZB",
  "key21": "UTEd5H7VYwkE8BA4DAFNBWQLZxpYzsVUDk1Ju3RUxWBRtM1Mvnse3xz2fgsEaLa6o4M2isN9e6fF8QQbuzeYZw3",
  "key22": "3qhxJLx24Jnbj1z8Lkf27Ka1HgfjokminozByHynsS6bVwQLN5b1SXpbom6hFoipeCz66tVgNn6ewAwP7ELKD5Ko",
  "key23": "4E4aGcKMYggybBPbwdjM8Htgs7aEqq4f9CgyXLqZaszVpiHKraLQbgxCJBhXWR3XjNrHyXkpBTewHQB6fQXMvZkS",
  "key24": "22anNVm8brtE1uw9nsPNq77N4REaxaCWSwdAMPnsTR8DNvURny7KLtLZZ9uhLLHPxrGMUt7xjQpWdJyo5L4GMG13",
  "key25": "4sYamFnYzpBf99Gy6PzXJovzy11yy4u6K8Yqqhp6QrnAk7FZAmM8w4ju3eNWENZcGUhKV8ZycchMWcpwgvZHA9Ez",
  "key26": "AF7SEGLP1Ktij1f8mnnKbcv7U86xGifmxKtsPMmPSTsrhsUFQjPbK9ntTCvi93aF5x7agbPiX5p1duWhAkmd8is",
  "key27": "brQ7fDKNqinyV9iaesxknWr2f8bcEzGFLAJhS6EwGPjXkdxSMTdgNbW4B9TrNbDBc2i1xQYQBGX5EySqbKXPFqX",
  "key28": "2HA5Pfpn6QQT7PRbg2KUwyFuNpqVQXqbFoFDASRqch1R85eEgjJ6bfTkeww2kMQZwBc2XJNYaLjtbis4fjrSa65J",
  "key29": "29Lpu68cZYcUumdNvF6awXM7cGHjwXib5QEMetwoqodD1QuB1PqMT7TzCnPVvBEzY1mgtMbbhz9tpmRKwmBcsm7e",
  "key30": "3zKVqWjVTfuuHZF4UwN4B3h7mRXDXMb9AQomxj5t6DajJBtaEFdoFghEydTMNTXdUGXd9GDb8unmvxKkDAPYEkaP",
  "key31": "3JKo24xvXzFe4C1mUrakw9EyomUtF7njeccLWbo9NVZKTDSpzTFBzgT5GrXDzBvFpGCAPMMrhXbAup5Pwyas24ba",
  "key32": "4eRGkMvN14wCrSsTdJR87kfX3ZNJCzSA2tjFtH4PMet2cE4pGMoFcqHDpuNnmkyLMimMMj9kUJv1YpX84DLo2hTw",
  "key33": "3DzReKpRWYPwbJuEZjxajJ5DCEfWM6Ki7PkYfEW3qVRgk9wqiqy3NaLCNFSduAcXcWQ6z8GnarCjbuAXTwABiMJQ",
  "key34": "4SAbeoC14y58FuTkn95zsbHX3K5GZWxcKEpuT8vtb3gr4PM3QubaPYGqeJCVMTrYkYNFHSX4EgBR3dyTzkky7DSY",
  "key35": "2s3eg64Zgzyzqw76P7bFks8jKWX2qNSZTM4bS1WqrTLRM8YNCyoh3ozVGHMeret4zwsFb5aoLukjJuJSVgSBKAn6",
  "key36": "KeVwsaPgAn8kPuNqTV5H6RKecfP7mmt4GmeabPGgM2P84hMxrTjvq7yvo3qMQ9whinThHUCJVdsMcCV84x1qKAh"
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
