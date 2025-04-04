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
    "pHh3Vf1rU1qzGaJEJXfg3sK6AyzaRfzQj2iGuY6UvuBt8ktC8R3QNV3GuhkJj5n3S8EwHTrbgmE1SCuVaTpb1tq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YRDPH94JRdQXLwUebcDbMoQxoqPYTBoFdN3Rm1XiYbheCRfPadMzLYtkhUrFJR8YJsULzXfP5z6Ths132ajDvKd",
  "key1": "2U6aooZQauhvdHHhZ9LH5rSmh8AonhUD68jabAFbKcmmj2g5J1UJAQW2g724cd96jL83ayynB1HAMKFWwAXp3BNM",
  "key2": "2z5GAQoifFhyDQBLsx7q9Hj2Tz93XjV8HcsuTnatrWwPM2aBJBcuE969xanx4XtTM9o7e9VLuUMai6Zx2jqRWaer",
  "key3": "35VHNLyFZcaAYd2z3HK9AjB3s6ff3ZvhUt9N5tezQPewcvVgqaGqvukhwHYapYTjmAfATxLjDp7scTht54rFUdFk",
  "key4": "HzFgHprXwRV6HJX7FeMRvczv5nRoNXJFYtyPYrTLNKUy52cgmiA7YXeAM7kTZQCxyppuuHr8DxVL6Kp9bYLqw63",
  "key5": "35mgoGzPtaSakc5NfzKR9veRzfHRUUQVAMm6fhk8HyL3KZV2vRdUpy13XrzUyTwhf7jA4RcrLgPqLpYxV3k8f9gj",
  "key6": "UsnXEFMF4gNmKKz5xCRiwrbYUXJBmmHdFvSC5x4WEkfqMndwsi3eQN4PXnUYTZz8gyHtSKc8iLdS6LWZwpNXhCY",
  "key7": "49XDEBMuWzz9y44y9VccG9N2D8CktLVFUfAFKzFBhsAgAvuAnVsrqcpGsJ6Ga6SJRFCtW7A5DsHqNeehzciw2EBF",
  "key8": "5E2Xrz5w2132TiES3KjpM8DnAFYSKoV56CnkMhoZNRXo2dewJyUXt76QmszRTY9g3gmEBT9vhfXz3P88dTai8iuS",
  "key9": "4PZvFBoMcf6wBmW194eqhEYr2zwYmhGExJyWyTt1p8gshr3TgLfWvWb1arQ6naR1xUMgpwrrrSHBq7eZGpKjpiTg",
  "key10": "bybr8HhMT2ymbHEcJiMv4n992G7K4w2NX8BjqNzysQPvyTupEVjLsJB6umyKz8JCAvyMjawVMiSWUCiyrkBK3rP",
  "key11": "5hCBkvZx88mEwSjSjhQMtdfMEhsskw4jzL9RspcnW49FhhwDxAv82PfcYw2bgk7VjwfYUQeCKcoHQGZQCvE49fWV",
  "key12": "3Pq6SxPpK2RypShtokzCQ3H2cXhvVvCPzLq59vJkk8ytZnDSnzZBk6CzAwxSG2qFK8Tc9EjmVSqVKh6rwNaZGFra",
  "key13": "4iSPH9BjcPvaEeopHMw2AvuEkPTayD8iwZsy6dDc1jsBgwq69JWZpBFX2LaoJJQpe3NpKjUS3WqB97w7jaYDpjDe",
  "key14": "8JMVH5hcQtKapb376bV6gzzi8iV1iu4MsqMYjfqms1wCtawQ6wj1iebJHgz8Pp8gfZNk4tykThX8mRHJDDhkdUc",
  "key15": "2tEPup85sJ1hMwXPKWrL19fjcDYBuLGyzg2Zts9X78iYpVCZyCk8BnCLDnvt2cU6FgPDHBk9ZFw5iAKNB796xYnk",
  "key16": "5Fxz77zmLgRCLv7MsbeCSnMN6w2xKi3krbZowq1vcMCSNvUSH5upESuVmEvuaSz3dsxYftzQnn1nWd2y8htpRDh",
  "key17": "2F5vpaEAYDHkdYX7NaAPEGwc9m89RzBgxepqfMyr8tfdXcEGyFw86maDgJ8Rb33hujEJrk1E3esW2hpbBPULeSay",
  "key18": "3QzmShEVhy58HCjKHYpiU92L922zRn6ypStLXRzEVWaUdrAAmLMc5KzNrPesfXcHVLKJtJ2xBomdSv69n9nEpMiq",
  "key19": "5gSqMJa8T6VM9pedaqV9QSD9oJfp43xrmDYYkBmiPvCEdhY8VgUqWuwswXpQdoJbQb2snbeNz2R3jJ7gAgb9TmZo",
  "key20": "DLfyGpYkQsEfEYkmR23m4HYN6wy48dc83HyRsScyEn9PWsaK1KCB8dgoSWNCfTbowi3EADSbWnebZdiGZ4JX2x7",
  "key21": "571CTfHhLvSogM1yBriER296jWjL8ZGSinWzqanYEZGisiaRxsHEjqZi2wTCPaG6X5eJ6zEEkgvRvT2nAaFBNJyW",
  "key22": "65vxKPUe5irix1mqcXnZubphMgXLMFvzDrZpFY84Q8Fb5hgewM32heaJ24LE1c1Sz5EG83c3RNTQJqWu5Uywkyq7",
  "key23": "5LoZFsu6o3Nd52RZ15BnP22wS8qXHiSLidUBq4yHRnf8NQJRxnPE2bXvB8WhyxwHv5fDwiB5YqBAKuKDs9WmLqWx",
  "key24": "4C3tnqdDK4Hjs7dHCCuyAacJReaEqbwvmbE7uu6n2YnPtq8YQBDAgtjLDzSytGtpwXiqcCHFkEpKNCbmtN34zy2u",
  "key25": "78JcqeSeFGdv7fHeAjLDBDWJStozWDSD1YEoh4hUP7hkGWamePTcLQLeqTSosCwPThpNpqi1Q5RvdYDpWBWK37v",
  "key26": "3h8qL6QjsK5ed7SP4aYWMc7Uh5u7E93bgMzX9f1zn2TasHr6TUjAqdnew2iMY6oXA6o6uxHfGnX6AcR7p4qHnZrS",
  "key27": "5ooKYbouqTsHiRtDP4DLjnWBU1UQiiVeZZ371fUmckPfgFqEHHkbhwb2KD7gQXQ8mwSL9aBau1wLwdtBEW6PXJSE",
  "key28": "5NpXZYt43QPJfbuXssMGzSotb1unCKMt8QUDjMV9JC27gSwDZoE6TtSNuofWbKZUqGHhxHmLeLyMpmcxmzGNqgoh",
  "key29": "Bsr7NGYiBwH4pZ6FZnyHRquUD61aWxkyW77kkYWVb936eVRTzLuU22Y38trp3eVjEEdaTaXj1KtiqGXgGgu6aFb",
  "key30": "51svcredKvyx7723wTHE6mwEuYdv2hE7rQpfQgwQR7Eh8tuwUGY7XPKRb8vhmmWSuCBTuJPmPWEskFoNEq5Pmoss",
  "key31": "2GYPigHdSpB1bXtNF5634kiZLeyKGeYkwAmbEL6p4K1YaGmr31zq7goxiV37xiaXLByBYLfPCmTDf4YZn4ec7Z7p",
  "key32": "3TcHMzJJt6Wyzoh4hNMy1cSort1GP96ZpuravkSFUfuqHeHG1X6myHzuMLxJ97Ehf8i15d6SVdYYro5VrWSMBja6",
  "key33": "41uRHp3yfnJfMKNvxHMPFX1LnP9JPugHEmDhwQdeL6EcT8yMnMPkywdHCsCztUUxGS3HYBSnKnQieNUxZQeifcLH",
  "key34": "3MKH4Ab9g1jLgp4YbZ1P6Nk76eqnBgEVooXdnjn4EG66kEtrsurZ2joqAhTUb8WDUhtjByVStvTtKCFCqC9n466z",
  "key35": "CL1hkGhxo1RTmpRMZSmNJcSKVEgpR6acZUDTyNjPgXv7VDh6nRLmRaQRDQzro5uqh3C31iB7f3h36CWkPmoWxVf",
  "key36": "46hzHMabX1oYmbk1ZEPAq1bjBUPQ1DWUrgfXTjYAMTmzdUQFWGqbUodngty6mEiGVadNHWoE8ytv7otT79t1ouBZ"
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
