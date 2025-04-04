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
    "3WyLkTktTHoeZ2LdBg9k7z3XMWMLka7WaDsQbGC4DSTquZ18dZaWqTsAQUuqygdCsMfERk5f5sTwp9mCX3DBbrU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c9rZQVxU1UsZ6rxDbJW3acuN87HZGbqRAEEjq4pyt4MDPmG5i6BYZsDD2U9pRGJP3ngT8YBDbhMPoDQjLc4tquH",
  "key1": "rcDfTdNt4TxrVp1hfhhEGLYu3v4KSB35CztsUwqTtsWXAd85QPwFwDnNiYYUz7xXVkHYP3aygbBpZFxbGSf4GrG",
  "key2": "446KNGBcqZyXhx6i5BQpgzhDpt8KTEauahD5qdCshgng7BupxuSvkSNUKW5jY3eLW9jCtvUgpGDrnT86sfsenE95",
  "key3": "64V7TfexaH9UjDwceTnopZN2AaEuuejwCM86E62pi7jjX299ff6kEo4wQ9PQRwnjC7wNNNkMmzAHDK2XUu2V1F2Z",
  "key4": "4mKtH9zJFkrSu7KeGBigs35Ejtoab6yxVZubxTynaCtJCJVGcUD2eT73wtJyZX6jWTbtzBEfh1C6vpNdt6S878R4",
  "key5": "61FRDCRcEY6cMWWcLqJjoBTi8x2X46wHqowDkGJws5snSzGcnPyi2UDwLWjgoPrEAnit4xnHfG6ZbivUMVZTnzrE",
  "key6": "Wh1jAUSb2iUxyAUvKkyqmXJ4figtbs5PecTmvFQpb5AGZR3CrUoj2E9aNGruoLjPFfvNkGweKPAdukXc7Ew6uHh",
  "key7": "2evwPqXPRB1ChwMNYp5cz7Npa3KvgZ6qb4ZcD4YSiUfXEkZHWfsALpqruZivPJAvEPwrMm6DLCg9xNzuDEtYcEiE",
  "key8": "46J8btBbkyK43X769N112stfaLvE7nW1FqxtpPZM19K9Va2ixASPWeWX1U7DyheEJuPktTTWbheWHXVqkNhYufov",
  "key9": "3MX9zTc94V76KdQgyqfmHrMXt3gwzJpgpUaMtbuZX72r9AC3RkFuppMaDyZY12cph21M8wdwkuT93Q5kdiwtjw3w",
  "key10": "3j4uZza5NXcx4GyYJ3JByAfWaTe2WRpvvKaSujcPCVvqNN9HTCgLzuoa7Rp9iSkhJH5VAoo3fQVFgcw2EatTYY8H",
  "key11": "HuYPrUaGh6MUY96woAc4PrtaddaccJqdpf6FFwFQX8UVZLPEzGhXsUohovr2WsiZmfL5JgUiZTdJUJc9bMF49eZ",
  "key12": "5kN7gD5TJ2WTX9x4Dn5KGUHRV9YCTgTQYMAPYoemvhZR741AKwdi9DpgmLSYZrFQTio1nuNTPBEX9MZN81Li9sHd",
  "key13": "2mFdtXt8LKQDvYsSG4Y4eTDP34z24F47AVMNNe219HRuFeY3bytXZoPmXCyjAGHwJNkg7xddArt5X7DCwKgUUtj",
  "key14": "2uccZTB6FpNbD8w9bPJdH35FCP1QKp2c8TUQkKtjtrHfWDMxzp38gomfYayNHefSdnvm74QCS91C31hXWLAsgLHh",
  "key15": "3W848dXUU11TXxFavgm78BhCpGUnXfKiYNB1VrLkvDwtHdvR52sE16uNvz8rLtkX1FXLLEwjv6u7t5VjY2osAePx",
  "key16": "4HwrGVNkv4PtWRqki9jb1rRkbGPSH1YmnzaDbY1eS3dLvqkv4DVEvGszmuzUgJNckLHKpxkJSVP6qBfuXW2C8VA6",
  "key17": "5EY65BYJ6kmTWkr9Nrgz3YwR538NKPKD2LcWZ6b2V8mBiNRUE6ToR7AM5dKEFVyDVh7EnDADqxKKcuaz7WAgJSe8",
  "key18": "37HATPdLtgfaiYuEbxfvrWsSYQxrUMpCUqwhDcD3L8eoXVHLwJUqzQ7EivP3YoqDh4fs5LsbqrZYMav5VfHBHASX",
  "key19": "n5iMA87grtLWg3mfVsXq6GzMmZAa6RMHGWR2Xjrv4QSuM5swkmBTCbgxSfa9GqRLQmckA9DU7kcmEGjv9Fv6bSx",
  "key20": "2Qph12ii2D6CmkMTbTptzdZmrG4kzFsps7nc7HYSzofT16SkkiQgXijGAPT16ZuKupzFFAd8LMZ4Cvf4nc8yKman",
  "key21": "47pD4x421MUzkCnADiy9dvnFp9PqapdWgxTyaSdrSDnduz8YioX1cpe2WWUpwqEuc63vAxagGV2ed1eewPzrv46y",
  "key22": "39s5ccFqXXNfvAuQoVWg3sfbVKc1afk6BJoHgx8KLw2HGJwyQZhDR7in3wZMdM5tFfikgWe4ZFgJM8bFK2YUy2Yj",
  "key23": "2goQZMrm6mNzF1VLJYPWmAp75eLGqWVbncSDidf8bqiHqHCwpp8VSuYFuZNozXYLf6CKiCjFRRCTTELa5JQJuFbE",
  "key24": "3yxjAgKBXamLBzqgtD9izatDAiyAncZwhFAgHadWyugBfatHmB92dqMDV5p9hhMUb9T1mMbZJVJLJkHTjNovjU4z",
  "key25": "2kKdB5nW96sdDQEpgsAjdjYs5JVXvMDBsevfJCNCNVaQAfUgk9dNbXQtGfiHTE5hL6rqJW9XEtmRKenGvZb1cVoy",
  "key26": "3TVyWEeJNBib5aaa16MWFXCHvwBzXo1JZznLQ4aGX9k78ca1akT3BTjdVqjykjuF8xJoAS3Gnaqk16pbKwxBWrrx",
  "key27": "4VNbhsFE6uNeKc76jCMtqu59UF9mi7QygQxSSoQ4VZwp2zaPkz38hm22XKaYRDjQ8XpqXBZwAzoZLtbvA5kAdzvP",
  "key28": "4CYgpYLApzd6Qb1cHq9aDikZzfgPDh5ZWRovYR5D3HJtoKuDySRixB5NBQaz64cTHyTj9py5iVrodEG35ep1duR4",
  "key29": "2xgUHGSMb1dD34U9VyuaBxRJSxcDUzibfzGy3YtRmoBHfo1cDC1dvSVFKiMJM33QTMtDzSKS4H7d2G2PPPi1MhdC",
  "key30": "4CfYgLyB7w3dx7LGutCRVcRhaBhDTJCsT7f2tEigg7vxY9Xx3tXuTzLzgYbjpzDDbNZhEbkEaBxhBQYnVGU2i5tq",
  "key31": "HfQzmhQt2FG11SBpBSsiV2aArbhQpGCr3nWh3H2xi3Gy5tN5cPdWWFiUykwx5a5zjLvLGvowbxQJ8BS1nckaNTY",
  "key32": "YwbMWXrryTLW1fMpHr4TNebM99dc8Azwy89Csyp1BywU2S55Lf6A9DaMn2F38FfGbKfJwaLEyeptJZe7aavEajr",
  "key33": "3dukrasmVcAF9qn7rPLz9hDmG2kbDsV3ASJUvAEBA68fjiukSoQnyzbP8eVHRMe4Q5u6ijvTSfBignpN2qBiuxyc",
  "key34": "5aWKrt17x3cgGrwawR1mEATHhiY2pPG1n6Q7QDFKF1pgkDPhDArkFgT88szXzqoncgfVzEBUzDx6XRoz67GZjAEE",
  "key35": "KprQjGSxgG7zMU1NPFb4p52DjxXPWjctcsCXPhnfqzoeiuFu5v56aVCKPvRqvuSKxZJgeK35xzys3bGWyECnrrx",
  "key36": "2oaEBFE8ogtSgawN3LmEBewiuUXG9wmWKX5g9DC7qj5xggHZjPSvLzts1vAveaAidfPAPqAxGaP8oHP9VrMqnBA8",
  "key37": "4BoHFt8nueT9WMwWyi52aAtK3ApQ6cqiT6px9XBzQLooFyqfYedxQeSKLew6PJRnn99RmTGuRq2f699rmKMt6E6v",
  "key38": "QcmXpLkzQJVj4c4yHiyAyrEQiff4pKBxX88Fnegojj7KxSL4FzySx3uWadWNYZELEMdPgaGHDuHLq8KYcdDdPac",
  "key39": "46fyCNZQwtY6x2ZdEmsgpu5WoZ2CEJpiSNN3LamgVTDWUvePkzE5KVsJAXyWUrwXbo6toBRg3YCvL2B6BooUaTkK",
  "key40": "22DFiFiMzEVqfgMXR2j86LuCAcMbXX2JSEGJBmt1wNi2WfUJrWoX4WJeP1xdYRT6FvXx5PsF5q47waLrmxqGQe77",
  "key41": "2oYnyvUrUgiXweCNFiX3T3MWrDZDGNgeaMaDF5tgsfgVRmyqnZLQj6bxUBsBsaLYiK9YvfWNxGKP4pt88bsuoG8n",
  "key42": "5ZrErp8HH3BF41PXkytNvLEVadpF4YeCM9XXPTTjf5V11Nawg29bMSwkrSo9Pm8cwWM4DqDez2zokVkqkiLUJnMQ",
  "key43": "3hZ6gc7snz51s76XUhVMmo4R3TL3akb6QcxHZzpm613S6Jb1qVF8bSiezYAJ7MqRU9GXPfrT4AzMNLXMPGButAVR",
  "key44": "4vYHDcYsrHsKajByH8KLZmxXF7K9RFwahU7a6hfBrGddw8mB6RUExoKXk7EVPq9prKH6Z5PG9MZspDqRqDeK4Lne",
  "key45": "jgnF8WT9EEPgv7AzLAA3FeUMgesEPZo9N7N3L9iLDENr8Jt3VB7Az8BTEekTLQVQnFj3F7PzbffabHp9rU6tBxV",
  "key46": "3iAm38LU7Kppwfd2AjPhQ2dGGi4xCZ3Jt67ycx1wpxUPgyxveec4rkHKeewMhXNfzWswNqrE9AXN3sEY5waH8bAo",
  "key47": "ev12DYorwE7rN6tqQ1S1JSUfyGyWYyrKVBFRdvmP5YgPwuLsATJ9ZQcq8886GGnbyYiWWjmXQcSZ4pkFP2Qgtng",
  "key48": "2jL9nHBfcjB5cyM7AF8r8Jb5SDbkPfqXRkWHsHhGVm9tGndU3jwVwfxDiJT8szeDvQyTerbwVWv6iUtvyvdhQfik"
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
