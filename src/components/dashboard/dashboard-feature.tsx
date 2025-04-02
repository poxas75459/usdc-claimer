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
    "2JYmXfU7Nm92bafbpyxNsd4daMkT3FqBNQdU4nfhxo99LQ3FwoEEfpW1gFWqnd9y8M5ALHfQkVuk362uaP3dNSBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67aJxbV7f76kPyoTeWjFdZ9zM1Dn3kxsoSFugU1m6ngvycvh8ePmgKBaDGBr5DPctAcCgG5VSekTtnCCbw6gLmk2",
  "key1": "5uYR9fdtvAMbxj5r6LSMDcb4YkkvqMiP5hRDJzrjUDtuCkKobQY94PrjrCqsh4e8toShwqgjJWAd7scgv85Fhtqs",
  "key2": "4bAyCK8VE1JoLc9CMU5UVBEzCKhtckgvTP5LNyiUEUUucLo3PeokohyYkoT71Cg5zUULWfJKT6PAqZWyiRqMmxyz",
  "key3": "2vrXN8Tarxe17ZXDbzo139LyRaJBpLazQDsAtCKwftp3o9AY8VPnuN3sACmPYA9CbVhjC5jBQozpPom2dLw5Xjbz",
  "key4": "6oB6SfvEprjJqa4V8whoSUudHBhF88TYSh7YjJxo1toVewozJCiuo4UFuMc2YdLJWtfS5k3vNN472izPDmiWoMz",
  "key5": "2R1Zxt3iZQvtqeSRedZdq3ctXH3x8FRX9XwriaVtBjACqupMNmCqgoQtkhx77jUkN7jNcKDYMFSMGVFbEQVzifmH",
  "key6": "4y5QH3zu9sDMarj7YAcnMf5Smm2PFeU8xwFPKkPmUvCvhvgzLX9Fw6hZUvUVxZLBJ63XGMsZvU9Z8wgB9eczeHW8",
  "key7": "4gwFQsfyGG7qW9gAWJvN5XkJvTErSigutJ8Rg5Qma2raTqjqXG4YjoCuQybVqNf6t5kxeRmzXq4WredxFJnjTwJM",
  "key8": "572WJjSP5PzQzQKUQWwsaLeiAzsRPyExTbDNixtqULbWJjawN2GNrUFJETNbUKrBLs93sfrxLNLWKJNHakFXFWB9",
  "key9": "dYnqFSyW8Sk3GKUhv91ZqabTzuL3DRjVWrdmQBAZ2fADo7jQ7ApYhzyVq4kctaMQsrKHcbRsxXFiLmAWQEQtp7G",
  "key10": "67TYgHTyFRcNp7CXSPmka4DVEjqi8QyRZQf6mAbAVB1oiFT8HY1uvPdyuR4q5KDK1n9hddqc7D8UNG5bvygksQjJ",
  "key11": "5uhXSBH3iNccEQPufoQR4PupAPNd6YSpkmn1sVRCZfZhVTkqJq6G1ufU9yZhofE7GNLQ1ck3KNNvmvj5QiLYwzmv",
  "key12": "5WPkES2oKuXtQCY91CxvDJMtf4A3bVzD8bwDKc3tAjw63aDvcw3zM2RhYiMbgedNt6B6fxmE46mi3qa8TDZGqmUw",
  "key13": "2BLQtKQP2kxiQFjHdNh3NLC7v6EwFqRjyDsccuCAVZdRgy4GYTGptTMgXbRMihmH1WHFVUcJYts1gpGkyvZLJU6w",
  "key14": "Xxo9MV8fM7qZdUsneUx2CaKkzD5FCSVvit5KLwvGhu8HyxBDQmGLDC9WB6bJmKUECHv4P2QW68eLTBhBhcNRubv",
  "key15": "4h5JRRY1VhhpkDfMHuZ44p33K8adU6vBJ1pKCXtBudajsqKtSzDsyFK3YchggFNfNyfP6RiPK1nA8odNbr4Pzv5Y",
  "key16": "5VwZdy73E4G3kUEtV725dxhjmMtonS1BjnuhN9ucqTfty5wnxAhDohPj91pmtEhn9BGk8BYrVKUPvduWT8kHbahL",
  "key17": "8zxjpzr2R7z1yW4F5PVvLKgS2nRmaYBPVFc91hxRrB1TZTu9Y5wjFKxAJfPGdLThEFz7w5JuN2JJZsVWF2P11VM",
  "key18": "4srWr7p3rwZK6cviGFP7zMNHFxXmMG92p26rztsjTApiMKzVmtj2V3ujcVHeizutRhMCJr1fkHvQnfctL4W1uJ4F",
  "key19": "EfsNGRhxYdw9dhKBG38kgD7hY2C6Q59u1zLEH1vU9WAH5DZRhTAXJ7ZGXT5QbaT7p3kcPvAqqX3ThndRoy5UmAZ",
  "key20": "ckHFzxSXyJDfwYS814AAfnEC8Ekcg9ZMaqMhGPBcQiRtNAxekaR5rTV17buKfFFbWHf7AQX4JYSXW4ZWwP6sRiG",
  "key21": "5HcBnRidUgxACjCZJynvFuQZmaKyKbfEj1CBrpxjzS3faAoqLTYTg7hc3oAG6FHCsBdjGXwZTju22dyhT1zr8NyV",
  "key22": "i4TzKkyKWNEHPtXQy3yfa4Tt83fxwwZ3M6VUzWXZAWuWzpzDi9A1n2fCH12yPHjPEH4tnJnK6iaU4jRHaLNgmr2",
  "key23": "4jXpu8tWkh7F6Z559GtP1g6GeUyatfWmH7vPwdBerdvbMNJDMGzJZwSrpb9SDYvZpZJuT2bjK4NhMy3dJEKm1uRw",
  "key24": "3ZNQLjzoVym1H2pckzsAKVu33RMjQmvuTzKpKNeBogFoB4aBJr3AZnMtuTBdkeTJHxdfe1U3Qveb2c6gTPffGywQ",
  "key25": "499ASbzhFjmFmwbeojwvtGYy6hyJV3E9avivur27bBcqTkSrS4wobs8qQqVb3pgDbwJoThTTXZpDfErE75wsumnS",
  "key26": "p9SXxyNKpsEEG6nEYGYThXLdwnG83bhJnxWfnpH3YhHweAtui4KD15eJP1QsP7zPXoLwyME5FocEhgLX4FBRJMh",
  "key27": "5vSXzRLvdKsBDT5XTk9txejfUaetYRYSrLbxU3fyY9XkkiW44RhuRQPFTYZ7kctdFhYWwqMhHxWg3Q1yLd27vMEG",
  "key28": "4jDQkYFcmiK78AkKsaBCmQs8gDnqPu5YHwyBFR2tjZ2c1GnCmuvmCvCfj8AUzYKJGUbVUJpAQ16eJpzawfpYxXgc",
  "key29": "4E6Lk3LLuxfWKfKMYyJCuJY18VkCNEx2e1yDdmd94zi5QwbQ6dbQ4SG48i8VuaCnbcGq16AQHLGgfFFjrvAhViAv",
  "key30": "4nhTrSarYKASqpUjuoYLq64zm7FevcWZ3MfsJwyrgtnNDyJXrJDDdcZQSPHG3TuvzxZzJtZcfni5h3MUZEc2JXw5",
  "key31": "WVsm1dCXByHzWpJEVzDVR8bFxk4ZGvw73w56b89rP4JgcdGnqrWPu4khPg6emm9QmUe44KB284bdQEf7NUe3kNP",
  "key32": "2d6XkPTs1kuNppv7CV2pqXxV6Jbcp7Stub9rqyN1nB1PFqBa962BEBcMa6Qau9crcJguvgfRgbLA428x66zCzDLQ",
  "key33": "54ncGmYk8owL1bqxsoum5bUiD3ZynhsZt1bLAQ19oV3XzNZ4FiiYLAUcNhHqE8vS1TvcxwRxjBfRyLS4KvWs8oPi",
  "key34": "3k5gn8buV79BYLYmUGzFkUQbhtgMtaVWToVQb5hcnVSsy6symQJ4JaXW7Qoug3dCKeYGikBkzBZvJbZCtSiEDyA6",
  "key35": "4WmEPa32wAPt1gE1nHocDCTYyLjRNHoaBDxSqJa7fj6MXvf3dUQR3pN1KN9RtSTzDauCP5bWtgdAE2qC5GScjMGi",
  "key36": "5SLs5xU9wNxMvHPkgAMU5ak8twYusstTqtnuMFSkXyJ2gQqDxBYsQwppV2Qa64yocPaF6jb9fUQpeiGKB8eNBkFo",
  "key37": "5uJN7opSifdqvFKmJnpg1oWmjuPYeRWQwuoDFyW5iSTZmSAogLNLKpgsF1rbVKzynEwWww8EpmhYM4QFyNJ3dkRL",
  "key38": "3BB1EXvwsciDV8CYSAzF78HRN9hmtgM1NWuTSmMsPpbxuWe18qAZZ5kDqxQtvbX8mqgvZhY59kUZF7Xo6vThkDcq",
  "key39": "4ZXqks1j9mQtUMpd7xjwUH9bwVCfQkzpcdzQKZJHTyui1TBWJLCrPYaCtrkUoxmG4brtMXgNacii5XppSrBu72Lb",
  "key40": "5tZYvXZUSEoJuX7HecTmDFgMjAgkixvAaMULhcawf3KuvgagvjZd2RushBDyVH7asbhBr5Y7m51pQsBqZTdomX6L",
  "key41": "SsmQVaTimQJzSn92fPPCse2c2aumx3hkSea5e2vsojf8RgmLGLchH62pSoRjdfCta5RknoQ5HBsgWWRRUmfF6oS",
  "key42": "qSgSojQ36mvSmmyMLPM9r637tzwo1EZ2dFwwbgE8JNESGm1GEau43DfeCXXwsyZEUayF1vNsVrwi8xoaLzpSwk4",
  "key43": "5Y3cWCZGUpjbrVHwatETdrap3TZd5kVdYPcp3XfaViZV1rN6kiPv2rUqrvCGNSJUazriLgMhtBituvhwPRpfdzuF",
  "key44": "4bdXTjVTGpNWSLu5H5akQRqeiRoWL2QBtuPYcD25KRuTgB5ZoKEzYhnuKyTyvcdcuEbR1kw9kTHKqqoBjZBpdjcn",
  "key45": "66PZghyenig9BZWkRGMwpoi8czwYn9qsee7wxUoLceqSwCfu8R1QJwWaxgFTSRgTvHaAJnXpvarMeqHnkycdVMBJ"
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
