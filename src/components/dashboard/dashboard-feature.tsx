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
    "5XFc3a8B7jmSBto4AmqyAsKP53hDzD9fZDsXBiuUN5mof5bsD8z4LrLBYKS9LDkpiDFVdV8tQNAmSkH7PD9NyWyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e3Rqn7Kcngjf64vmkCcnU9mu6GVTVqsJoiYxAcsQ6igAbpRP3sVW23ZJyrGArznRgv1UNPUK9qjk9aUL9D1fvCz",
  "key1": "4uT8Xi669sAdHvsaedmTdeKRMGVudjfJRMVXX34DreN1f7zf2ofeUdJcDPy9vCF27WyzEFxKiucJw7LRTWQnvB9P",
  "key2": "5BBc61oegGkTGfYNjCVRDscjir23u3SKyR71BjzLBEfFR9q2m6gkuS9MwMgX8kVTRqdacHUhkYQpMRoVXdUaWswx",
  "key3": "4bHUivGX6if5gHpKKf7EfUNNgF6w8Vw4VPXr393qwoRuWarBSm8wJ4YqCRoTXGqLkKxKuZCQkFe5iKxdr5bMneUD",
  "key4": "28KNWWW1ADgggGwP4H7batsi5wn4BLdHW13fC4NsVkALyRscxgVdenND6xAGxRwC6M1ALRBWG3Wu1NCBDijgZGDL",
  "key5": "2umLUFWG4qtTuCqDJ3Dk6XGKCf49UTQqM9MMpKUsiafktn4fbj4zY3TJxYe9tprZ6AJmFtGo7u3ZEePuu54Dd46m",
  "key6": "2F8WJiM6tYgaZR8sTUoNTM9yt4KYswB3wnM2bVKLhsQ13S1BhUrKeVZCu1JVagVD8CZ34fVLmbEWcGdrdyZdZVAC",
  "key7": "4axrWDoU25NmjSBhgVodz6QTP4QhzVTQJ6jeBPsjSnZ7v8mwF1VXVMs8VEbPWpUqCrrQHakuHS6hambgaFmT1cbC",
  "key8": "4QEFv1CaX131M1AEi15Fj2269AR9NJsuPSDgsiKa6Ytp7ybtKv5qcH6SAgUK9XqMUZKLjFvqrVjffwtCDjTvwWYj",
  "key9": "3MqHh8GZcRznXW6FWkVCaWceg5howf2iYunNzqvymHHbNDtSFrvesioFW4Nk6bozw3acacvLqUA3vLn9ZMEaJ1CK",
  "key10": "3pnpfCzd6yxy2XpJX4JtESMSDUYdV774QJGMCWNwLzoWpZExgMKycEhu17kZQEgV6Fi3N3v4GsyuB783pVECSc3B",
  "key11": "2n5n7E7FwRRC4FrfZpkR6j1pMPSBW37TAUP3fQJyavQc3Zh6skdMpdK2vtVKAVHXwM3Gqz9DePampTEUMfoG2RZo",
  "key12": "4ideP79oAukpyfqNwgtzdHSX92sfLafeUABhC2kkC3ybL6niE36LBYaKunBdmin5YnPNBpxuRoK1fasnxwB7s1rd",
  "key13": "3CpdiXpkiftoDGMWFfaHYPzMD5b4GNPePKZyNbaFcksSKRLwfmmWZZFrC9H5LWhoAmQK8Aewu595oiwi8dL5BQt",
  "key14": "2QTLPVXnQcQYQhG6rxKe3hihzMgtuEHBPyQwpJ2aJYzJSJVonbgbKmgToRWxnyoeoau12oyThXG5QVcPHhmrvJvR",
  "key15": "Wei4A8sg5YcPwD5rsxcyQazsVeCnVTgkUohXMZQrqgvyT5WW7EnXKoT7vBigN8EgXaHj2UBKc6DSG58rfN5EuJP",
  "key16": "5RMYX1phKpiUWocypV7sp2v18GU7RToof5UkowULJnZBetD8NyN6SSZPBRjA29vsPwfPL5GrkFh4WjpiC3n6aaQD",
  "key17": "3jXm5Pp2To21ZBDidmJTB4ZhpUicVGN7afNa9TeH45QTbB5Xqki6iLZnaKya2n6vjdipMpTWy3mUSPnw4yUYfdF6",
  "key18": "4ZZAPq7MErUmqrmUGuduZ1t4611fgBAogbDN6HwKHNeH69uBBFQJtUn5tv6RSaiPFgfoG64G7N9T3CM6j4D1V5r7",
  "key19": "2KdSW3bq6bjxHRA6bcgpWwB1VwYgy8EXtZq6MW4EXb4xmmLHXM2RCX2Mhu1GhU54DWY4EtiFBFmzTFYNTdnZc3it",
  "key20": "DU1t8ppD5Wnqn3c7u9g5mqSkbzj3e2Hrkrn2NoLVzAzqLLX7HyKDkbCwUsaTBxvjRY951AiUZeTqksmL8KpLmkU",
  "key21": "2evDtaUWb6EaP2rZ3jn4WYxguAirbwXQVRCZXqgfEYCsF8F6UHjjPaSYiQFQJeGCBs5rSqSZcN6QYJSV9SX4h591",
  "key22": "Q3fCPrFdrTWpoPTbkzsnXD7aJnS7aCeqq7gvUT1hUFn35RWi3TW1pGXoZA8tkVpp25LakLKvhxu7vuwLGdVwhnj",
  "key23": "3e6ycLC9HkqdDiNZ9n7KiZJj82TcLpE6AtRFgkhv9yucQr5H3oQLg3XpCWcj3C4Zjq2FbLhsfDHfbQ2u8ir9AGDk",
  "key24": "GQLX1k2AAdjkYkxDGcwaXxfCqyuZztsTWL7zJuzgxaLYC3KyxkfvDNsLW5F8Eb3r9B1FLeHDyD3E2ZpCd3EhuNk",
  "key25": "4RkCnNQFY7oP8PktTtJho87ysmdpGCoBuumLss7zDMPEo5quvYHfC5hpBdTCcSL1ygSRRb1nFvmzETkAoDvqfq1y",
  "key26": "4fpCxNvbV9b4UGJPB8hiZFbM6rVQLxT2YAvUzsSmgED9mBLJXnGBWBzZArRYPp1qcHasbZXZQTULUrgZ4czy8whY",
  "key27": "55opoAGDMuzcpDfACaNjFuxGS5wimTATZokhHULnyqBaR9qZd5reXSVffoW3UFF9dELBkUG8ZMnfEsRGBb7u1W62",
  "key28": "4QG8BaGbtBb2X7Au75PzSiXwvdoFaBRW4AkdvDiCgJZQtxa6Z9dbsC1tMDdfZjFHnetKmoVgX74tTxZQNhS2ndQW",
  "key29": "2aeFKEVgsxU3KYnV5Ro3o1UrHdWoBvbqaE4acGD78ZSoNmr3sFAmT8E7CQqdmhAnaHWGNz5G8hfQqMT514YMSEjb",
  "key30": "4ThGvnxwXRzWHC74JC6T3vAvnxRFYeY28RT4mn5CrY1tcWsxJiZbzauXyW9NKy6XUzEHfkrwAPhwPn213YqVS1B5",
  "key31": "5sxDTTNa8tb5jhZEYoMYUpCiPDDeuAjbtRkNMQqd6MFp5hNJTx6rUY626a7dvkncJYvAW7XA8Go7SVug1P9N3bP6"
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
