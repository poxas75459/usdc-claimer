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
    "5XVqqfgbUqwRwBHYPEUT3jDgd5goxRPzyq4dm6tAurb7o6o7e8bcjqBsQ8XAKnuJUgnmQqJP4VUQ3Rbbsg4uNzEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35F7KDmxaWPVuiqFg6irQuJJSTMAoYTjgDMqHU4yZxupWAJDsYtLixg6pQfmBotJ4rZXNfiSckLDoUA8YkY96oSH",
  "key1": "5ZmFVWXDUy4DNzXtDcstHdWTF16cS39ifov4ZidFm3C9xx4c3nPAc2bUtfqwL4BCNiaTtaZy9oHgsqp4CGXvC3G7",
  "key2": "5e6Xjt5ZeCv3LKu1vVCkxjKZgAawg4JWhsxHbF4tJQjwepcFyZtpAeZ7fhPtYj2D8TkPcmFGsC8idJ9LYwdTrFS9",
  "key3": "27FWEA9hEHL7noLgLNPgk35FpbTvSKQ6CxqrF57Eez3jgFgaRcSp3LdVXnoKapCw1XXbiHpmz15QpGdqPBqLJiuc",
  "key4": "21694x1XtTrjAtE4irEF72mtPEbTV5GSuxsJEap5RZdMFMEEQExCGR4RNnL93LYVdgKM45DwiBEjw1XLKQSe5913",
  "key5": "3bDKCZmfDgnvmD3rK4pQovbXqTVQQVRLKuuXQbgy67mVyJKSrj4tWfbpB5jnpPzPNmGET58V6yHvGY6DehDkmKTo",
  "key6": "3Lfc2Z5JwVmCDYUuYMfDD2FH3haJntKJH5jLvBTUN8P42Cw2JQyRHbMPTen5Snywx2PyFYXQNwyohJEsBUk4edA",
  "key7": "3QVbveACgQuiLkxaBoHbcUhG1WVd9cRhmowiwKG9r6gkCFgsH2TYqnxEmF5ymQJBdsng1Mf6Xg919ZpthtJxW2dQ",
  "key8": "3GUAywLc8ABYhri7TXR5FAUS3xKN9YofqhGefQmFaZwef7esZFRHPYtQ638t9jt7JeJDmsMEuBFRwhCvtpbDdcgm",
  "key9": "3rdUwvYfsQ188Utfmtm7WVF3oBUXQFVqtkqcmQHSd6kDAkXFov6Qte5NQn7Vypm1zs4kyEHopjymfR1Mpp3TwqWm",
  "key10": "2ss7sKaSfMhuFr8roPfVEz2x9CZ3kvA46ENs5AyfXakGz7SvvhCNz91dDaxDT6UXk5TYrkDmboEKm4Sc9ztgwBQr",
  "key11": "2Z8jamPxNDeb1rvkrvp8tzx9TFMQXvfpCHNodTZJeuNCXTfM2SthCoCG5Lt7nhYxdnZjzWC6v7TcyqjfoRGxYH7V",
  "key12": "5A2VVGHauMvME6zvBpZGff5kS5LThaax4QSfS1FXMxvAq5turxuNbsiHCCpbuL9367uejPaqUb2P7826u2MU9W9o",
  "key13": "4NPEsjZEdDGatbN1rEebDV34x9qtZy8ZVk8m2y61ca1iSuttw2eZWY5GYajRZPqUz5AFLsBFncQSA4Y68uJQdtJA",
  "key14": "3yJ2PP29196oovHkXqEmB2gejuC4cQvRjgfMwy8D4pWwg6Z3AuYRVr1jee5GXqo9Ax4fp4N3ciwWmRkwi3YEuivD",
  "key15": "35GZwon3kijHg46ua9TxRVJknurmeCrEUBnWDM2JNvMTBzt9r4SHpvonZojahH24SQvPXLaf1zF8n3wuKkfwU96Z",
  "key16": "5yZtUtpBtSgvUz4Tw95VQCvcfqq9sb5DyhjhoSQkbhBnHN9RHT9BriM6mP8upRQb3LP2NuXdH7a52g16G2KfA5q2",
  "key17": "2uc8bhXSb2ni7iYBRqRskWhb8kK7zbv5S2swUHFzJMpnMXmo1raesTSYch5widiYqk4MMjFLDH4CikiQCsq4Pce1",
  "key18": "3K4H2u45CxbZXsP1n6UqtQFhMRp9hpM3Xd6EyzPFPAteraMhyYGfRD3Ci88eEk6YtSMAZ4iRMgjhCuHduQxoPppY",
  "key19": "3TzxfK6urEgQgQvLHNbHagBpU4a518WjAWpB1wnX6XrbrPLT1uMZfGx3jVng32V9p26RLjuMRyvkyuvcwQHGWVyE",
  "key20": "3Atgd5jmLsKvziKHJTG11o33SW7AajmzwTny1xJEFMoyWMnntTxhEq7JK4NmxqXdYnKtcXsUDnZjh5oovCN8qHi7",
  "key21": "2pzop8CXPHbEiTWEo9vB86wV1KL2RFPjKfLXQ2VCPtwT84dVvwmEeNMfwnN4178eFNCPkb6Npys8WUpwu6dUS1kv",
  "key22": "2QZxWesAndBWqooRSJeymtXBEkF4sw6pyvXNV8FMaKmCbyuhV1r6s3NbkydtLFqLuVASs6wm81m8sBjDTFPsB6fi",
  "key23": "kgkdLgBiShubouVnBVxEus3ZXcYJVEwHkb9ZcTxBZFB4mtyqeNuHAeasSdjVAKsgVkdw7wo9AV26VxioDhfwUTD",
  "key24": "652NxXbfnH9k87Qycsj1q9MA8bTfD3WF19bs67iSGSacMWT3rdsbWMRBRSCfJW167nsGKGYCW4zCp4mvZAQwbYC3",
  "key25": "66UNh25qVJGwQTCF1PZoRupSynUSHDieQb1bqTYsiWbWZ2YMjRZCsVvghZYqirewfL3cp3q3qQEEWbapN98KPNB7",
  "key26": "5LVX9k64DeVqSY56iYp3VcQuZeBxbovsjFXy7suhYrmVwr15qiZhJEp8uokwYG4Wk16Xgpzb7fW5EYL3UHpfKQyT",
  "key27": "qNR4KG3q6zY3hYfcuAXFTT856ke1wkVqBpTJxPTmj46JtPuxBPCa9X2G7nWuCMYbZdTmy425SpN2NkxbwpKgLF3",
  "key28": "5kZ7tVF4N5SKXEvCjgFZ1KV3zkMfoyvBjKgt1PbF2ADWgZtSBXh8V5rESUc9jSy7GfccWsus7Xwk7zdiZP2nqFUc",
  "key29": "RiJQWPCA4iPz84fwYvcXCSGeaxqAj9BQb6EzEnZQ11Ye8HqhPtVJMwm7ofFUkVMxAzqUACysdQ1EEDV7Tk25jF7",
  "key30": "4kkHwM4LteYmk4Ks6EXSi7RqVKoeUaXhbngiDqaHjnfPasvCiYV9beMHhCESPk8xfXuxgPLq8qgMREnfqBrqC8YM",
  "key31": "5xw2kTheRsshc2EhdTPpALZFV9m1SRvPrSFfEmGokrThmgdXM1uKKhRfMfUFmTFUyifpuSd4rtvDqwbf2bBVAqqF",
  "key32": "5tKhDMMv6BWwVy6N4FWAeEyUc5pKv4f54x7dar6KZ2UPb8i6zYHxjycX917dHnwmF18cTAiu6HCcrG4S79WQgmdm",
  "key33": "5jCWPsQsrbn5gSvpv7JRwkBJukztDvbwzUQi48e5EVUddvsrKFVaZFh1X8DdpCJDChoA4QLq3idSEhb1TcVoFGn9",
  "key34": "2WCEyemHEvAeT5UW1u7heZ5TuRYVPTayQDmDPqMWDLdqKCZRBhkULycYYMvvA5cH8c9ndyq9q93goSLJA2g5iohR",
  "key35": "SKTugSbPJ5SoxBkyGfAGR9ea6qU6JDhVkKDko9gQHEjDAB1Zy88RybNhdCqQF1DuXMFa7FJnZrduDCbwDFHmVmj",
  "key36": "4YJQXjG37xzZyDnbUbmAJwEXjG5eXmpPBsf9XGnyHoAhzoy1TVuWt6dtLAndfzPGZzAfRbAwVehxqqVLBhsKG7Jn",
  "key37": "WcxSc8WSbNHcRo9AZ6hVp2tBakkczePrzFBuhzLeV2eYq9iSDLDWbrJeDxgLctPc4re1iAkEGNy8S5JaxFQynAR",
  "key38": "4YTG1zAYBZq6gpBUeD7T2qyUYkRqfVe2ATW3y1BSKSrmUPBasdFXc5EybC31rHtNom9EPLnSGjJCTQqnPa6Ww4jv",
  "key39": "3gSTDRV9GiDR9URkF5rjv6V4tDn7LN2HA3KKFcrqAUaDsN1dP3Sz3Mftoy94PBhrQJAHE4dg8GU3Aq7DM5z4w1oQ",
  "key40": "Gu6vTNSmMDZ86Z4RqerwVmafFcZxRStKp6evtA6XmoadUaTcp5LYv71ed23dJ52kmjpm58ARhX7L3xqGtCiLV9H",
  "key41": "2H4dQjku8yKMnbNqtHktuzUXNsDzM1e32HKUgfCMrN6Xj57Fwjz9VLcRRzujQzHH7rzMeudWVGpq6ieHSoAkfmL7",
  "key42": "7zdsJxtYDfAr8GezFDTv8u5xs3T8t8aMbdx4vnT5NULxFo6NzkedWqdVs5aXUEPWeY6LvWU7MQZC3iz3snMU7fi",
  "key43": "5hgubTZttPUeN5WQW6LEEF2DmGCUe16sqkminPLuT3i4e8AbCi8DQR7aZHt9bEiXQn6acTAQ6Zy6boxmcP62NP4r",
  "key44": "khPjjRo2pYRy18A7np7jahEBAcm6phVqjxVSaWXNzq6XDVFtMWd78Q2eLiWt62hgqZwrFeMvfAk1tMrAKez1P5i",
  "key45": "24FEFiFH66Hdj6NwQBsE7mvB2JuR2nUCjDq9kPQUnmpoFWVQrXy4zU7feZ8HguLSujnicu37MwCTBLjkm2Mc1uam",
  "key46": "3ayBY2iJrdUJDATmmxzeUryRfa2efiKy3166cmHb6voYNJDAQqxaHzfm2QGpvLM8esJrJSxmtSxWjCGfDufFANqS",
  "key47": "5CVNpekoN2R6zz1hBxPrx7ygpfAMmcFePJSDFi4born22FaGWgUAnhp2PQN7FNVMGh9pdyRVggYpMDUXDruyVba1",
  "key48": "2Asm3R4y8yxv7w1a8LCeJej8n1jdaFGJdc25j7ihXttHkgRymhQ8beDnx8SXRazSGQ64vGj4k8vNUdiVnjFcik5k",
  "key49": "xSBfMMuUwCcHqxzjp9u7phCuzgcULv1a5AFgZZzfXUuoXaUmwyZn6pDUGAA5LmxrFDwtSo85zAwxvS3L7XkTJxt"
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
