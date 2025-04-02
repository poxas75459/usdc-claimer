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
    "5NJRdnkpNSNY5NoXEjq9Fz2DNQsSZpDXL26ahXudCcdC269ovvyPQHCkQyNZDwoJzsQJ5mH7HvC8XRUtNniXs8hH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dpRrAZDcNRg93FFHptX1b4oFw9eNqot4tDAD3SgZtuJeUirqpirBGwe5PsBkTPUh3CBuUZQDSN6ubqhBaN8xFKq",
  "key1": "5GuqsP5SbQ9WAxCF9BP2LWoTXMbHHAfJQptgZQmESKvvz2E1RZUC735wzMt6UacLvyA194vKyriifo2ucnodERwK",
  "key2": "3TXjMxG7wSBQwFQrqJUXNo5vu6MkUsgfkiiZHHUhyx81ATqR7CLvr8pZueQWJwwRiaRPAqEEmCADvYTzbE65JvHG",
  "key3": "4rXPMKnVc1uwbCYkRujWd3PE3XzaZq175nUpLAL9UXJkTpdj4yeh6unKnHwrFWkqYpsrzkM3JbEUVeBdL3TnY7Wp",
  "key4": "AsUzmzH4d5ruGCi39WjpjhVJbX3a7gVVJEwJWygDyRbcKHXJeP2FBAjg3XvWMg5KQJGeRs55BZioEHXmawd7Zmi",
  "key5": "2kpm5eTpw8sZkDqMhbMEMGaFFcSZMjZ22AcUA6vAswN7po1xDxWtadGoezzmRiEPDUG5PoSKtA5jVSxppfAyVBmD",
  "key6": "4ft6QaUB5dbCfqjtn25NFAfuRwWjxesW4Sg2bJ1JxBpZW3XzL1tE5t32xSd5PceoiAZE978oZyC8PeFVp7vvSELb",
  "key7": "5fhZLuvdYA82YZ9xQZwsAuShGcWqSbdj6RgU1mGqHmWdHQbNGkAp2eZzSiKhoB3218bondxGxPFd1L4GoWFJhVQD",
  "key8": "5hC4bXi3rBbMYzC33MPgHqZAjZR3A7qfcxNWnU17vVHDJrfKoASTCjG2uo9g4qSC3emrzry5wQQeHUv1obw1i88z",
  "key9": "525Z7K6xnnowo89HuqVtAJUmN7ywMA2GoV7RubZXJBwRE8LS4mTTNytFPHqYhdkBUxsHsBt76cJf15Y2XKxdRHsd",
  "key10": "4AevqJwPYhmJpSW3oAs72N5VHohCJENXvFHD3q4jAyrELEYszoRUFoZwUiP5cvWz2LdHzYE7igj1LUtZMdfwcL3T",
  "key11": "3CN3iQE5o2987dKCCAScLyCeymjeVm4VQ2Qx37VoQmVdVcwZC1v65X6VtuPLZfCCtDq9xu6n88aHAL4ZhGLfXBft",
  "key12": "5KDiygKyx8LkjzkxYCrP5e8v7YRHbLWLbfXQD8jRZa3rFXodEyu5Tzp6vyBqu5Wevdag5uqDdNJt9g5gogacjVLf",
  "key13": "4gPBcmXHvU9AHHdjKsjX5NS75PPcabDNEC7f3URAWsMC3MQdsLevZDJJkpnnyb4qyQC7LCFFVZtd3iXZiRjioq7H",
  "key14": "4re4Uw1VTsVt3SK7VfHwxd4d9abfm9Xbw2zY4YprrWKnsYuaavz49WncYikcMvP2aZRUbPYneCvMtnwKKZeHzmDc",
  "key15": "5mAdwNoNvYgQ2ej54iUu8KbuhVPCjMBq1NW6h7TnaVMkCWWrY4m63a4t7tKV8JXWrMbEfHVycSp1CfiuuiZCrZSa",
  "key16": "57QA3ecwyz9ozGHUAT9LXdpQ99hmNTV4wyM7P33y5JwwgrEKMrjebWrrHw7QNrYYAprbKd24rJVWVvKwbHf3onEr",
  "key17": "xLJkxtd5wVAcakjeuPmcp1z65j958jAarseLsseXXoKV2Xk8AQKR6FP9z3Edh9RG6spCT2PKQwM9nmPZqHmbu8G",
  "key18": "4d1JGiFf818UCigKX9i7YJeHN5sqXfxQMB27TCux6q2MUT2tCRxVNLaE6TFc9Nkqrf6vSxotgmy6zLepVTuwoV3s",
  "key19": "3XeyJNsB3EBVQguvZRYtTndanfF9e8SCP5YnDn5jypHZmGJg5Fg6YpMMu7xwbWASo8nyYy42x9DAKC8vhEb4e7pX",
  "key20": "2b1CDR69z5GSvnTVnK8YdGPu2nWQxthoMSymeCAxZA1G9Zrh7cwbo6DvTu9LiDHA1KDq3R2Ci1F159DWZeoZc22R",
  "key21": "cENxJ7tnqow1d2nWFtNtfx8eochsjU8iyAYZwXWZD82t2SZnBD2NMRUNVrhPTwVmjfLCr6A5QNNLfA5fJnFG2pS",
  "key22": "29QuTMLGRph4DFkzMRMFAXKmhx7GjJD1DZSBVRXt6kkmB4WK3AReMHKpaTWRN48PidaWkFDo6W9JmzMvogYdyaSr",
  "key23": "2bq8vQG9orNguSznzJMBAMHGU9do8C7PGz52AW7WMP6QV4u2yDQJgdE2WyadsMtm1gQPVSPXJx13uPe8BqUWc7Vb",
  "key24": "3xQkrncMuvF5uHdK4SVJA1sy3AAafMjkkb9ovkZ4KK1mM3swcQggsHLM1aGWTbSGcUY5cviR9UrKsxgRfVB5zSmY",
  "key25": "4JLYhkd7Bo772wPQUh6QJukyaawHa9wpPj9Ye9ETeFjHdu8PcAXniCbDywT3rpUQYkwnJn16i3ozDwQtHtGWgNGy",
  "key26": "2s2WRLCeymm4BpQ9fUPBiEERepdmAdN7KNFGcCMN5hvJ7o7MZysc8hNJYPGuRDkm3azy58F1XeZiCUyMk6z4r6LB",
  "key27": "3ykAAbca9yQjXjkF4zqPY5n4ZpNtoMfenu7kPyJbSggkeDJUyBQzXn11UuXuE37G2eoju52vUtRTmEao9nZk9D49",
  "key28": "kZViMiPB7AFw8kZtMtc3t2jbh2B3fGdwMS2Lj3oe2xYfYLiCFbF73FFmH7ZSNE1vDQH1jnhtj3MjCg53aqLMayx",
  "key29": "N728ZrEvBnysrvmXNC1NSWYxEdojKKbAmG38L9ukRF93NCe8JTyr44uaFKdds5bYBzYSMqowQmVYQ6PouKt3Zos",
  "key30": "5zbYmDuggc9iBgfDY3xNmTa4xurJDLgnRFrPRmr9PRVBpMfLjwzKWsm5J4HwMWM2z6ASdjKCbVtiGd9VBUky1P5h",
  "key31": "3x2gkrvJ9zzar4ovrfxXxose4ShrvBzrVwEX8fMRNYWQBfWnv3iBrthywU6Fvi4QFtEVVMfy6mUUwcmRqZXg6tDh",
  "key32": "3E7nBj5uwQvYMe6pMsHRC3HAGYVs7ZUxn8GFkJU6zj2GowRjPftSTDWHfSCfxoW239zLn6EM9wTXHCsAqTznLCZu",
  "key33": "2959WHCaCsN3a61GCQUDD3ADj3a1fexaDTDSCuvVp6hnyN2QGbbakWcZz8CGfE9Nt9Gptq7bq5K2V6VYCSyEGeAf",
  "key34": "2huGznichFQLzk7JHt1d3UsvwFHCFb2fCFzKYtb7XTGqcEMcKixEBMcdWuw12m3sD36xg6hjzrS2sC9pj6GCFbXF",
  "key35": "53XvhQ9bgvQswyCk8mKbKKkoFtFncGcUCCKf5an5LLg8j2kGsxm27XtFUyiK4n1zvww3ctRBhHigRTUUyK9UCtgx",
  "key36": "2fkqph5TbjCLY44Jn8nXPekcU2YiMZwLr345ywzbrto2N7aRy6YjmZAdFhjkyNT7xrrRwzmZdmtiaEuNprXMh4MV",
  "key37": "288p27TbM8gtsi3wagC2zY6ocFNGUJ8RuDpzQnuAhh2cdZFUWttBeYFBjQ1vcPhuBMzK2GjgqxYA1Z5akYmvgWyn",
  "key38": "3Eyo4tismpkDCULnCV2BFdans1YegcK82e9pgXZv5bkxi531aMumw6ZnhE46CfMVbG3tsQSjxUebSRm3s6R5jhX6",
  "key39": "4Dksapo2msRPMgkqPGCWdRkPX7YiMfQnHwEapZEhm6S5uuioYEetgvajbF9zZjvLQ83czyD4dGnFN5pzHZzZ3Vc6",
  "key40": "5gQgGYrukUJPwiBR5aART5U8STd31CaQUFMeCmGNfu8SsMktieap9Ep9jnzGqzJQBEyax2XcUQDnGP9DQxjJoM7k",
  "key41": "2SYSY26enT2KdHRUJxCNwGQ11XwKBTECB73Td5Tj41dFCUVtYXh8XV6EdUhdZ3Nuck1TK8fCptZeQmRDbRMWQMVc",
  "key42": "5oQ5r5WkftewkVwGAvu6mNY72G3cY7pjAZjrPVdGZa8sn6ov2oomVrpdQg3jjeF81PBzmsSPbyGXPhnX1AYkbjbK",
  "key43": "5vXHdcMB3xYvFsSy1ap9jDobx5FnjHiknC842Td7ir3otNpeQZADk3ooC8y8p8sZLscJiZxHokAQ22iYtd9M5KKp",
  "key44": "5jNnnFPapb5xqsQQDk7gRkmhStHwnA32nTUfm5gQNBe5BXoyHM3AnDW8jN7C8utyourP59i2zwXn6aPb8ffQyRLF",
  "key45": "4ho9WgXSeJJYzwpP84YNeKGZu1qwSDQTNTmrtEFGJUwZSWRbKi28BBCqnyaYsrxHQzeoCPfkgeYohT6iogqvGgwJ",
  "key46": "4QGjKRvosRYDFJP1T6nyRfyBY9PbcE4wKgGAgzFQYmSoeNhq12bZix93mmpQgAdN651HAK1xSebZeGJS37WukAF"
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
