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
    "25x6D2yNSewjKux6bAnrKwpAaf6ApbFHzdCC1NEtcAKQNpxkJhwQonzCY2wQkBxe67Wp7wKgpkP77yax7gtLKY44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H3NwkVXMo4fjAESMi7ugSsZ3eSsEBjgoARBzCTDKM9K7JDpCbYVYTD8Ba8EzdqdBDqoUHLgEoDM7PNC9bT8bkR1",
  "key1": "rxMWuZZ8JVjaFfATpFViHxcKVB3JXuttMP3bzkrDuJ12snypCNBvVDp7AkQr5B54w1GP29oKP9ZGtgstR9BQ1hZ",
  "key2": "2qG4pBi9f7mDCytiupTU5Sphd3QmysgkhzXkqkQbvUyHx2voA53a3tNThx1N256tPgBb4Bgno3FVibFY5JWNiPbp",
  "key3": "5qCgWL67WzvYqTZN9PwZh8ZBeH9GZTmJ2ztGsFNEJMDLDaaY7gh28XjBiP5SEU1Y1mwY39E21W1hNUZ6AfzpijeT",
  "key4": "jPxRHfxhQZ3b9de3FM1Y7oMBex7QMVCRTjQkhHkNbnnQZXgpopMkom6z9e7LkheNtA4NZYYUPRh6Hsd4cjieRHL",
  "key5": "5i2YRBFwVVPtgdbxyi1CSCcmvKgK5EtqXenr81QPGUaEaLNcfuTu4gHzHU6svr7ZA7sEYGsE8PXWAMtB7inFfD2v",
  "key6": "4mWoGXQ9xxvz9Zx1Hx3k1cTst83DPw7reQAB2U5DWBqPpgjfMJ7x2SmpMMi74mhPVhadE9PfoJy82av96EY1JbQz",
  "key7": "5zo8qVYfALmipdAhHeHRxfsXm63reuQWudshDXREQWpjYnBHnMwH4uovPhHa2f8tJHuUj1cXQKyQ2NSjn7VUVYc9",
  "key8": "3i6H25vvzwh6rK4dDYt2r1o35SBsR6SYfY5QYwHo6xoAisSHfXvw3EaCDsqZYVymw4AR9WwPy7Sur1zM81pdh5n1",
  "key9": "4xhj75dJtkU12cf4uwizmW9Z6zhHzMkKPe9AnXBMEECBK9ni5depLEKLw39fi4J7osGZ3Sea4g3r6wNcm7EBDXqd",
  "key10": "5k6bQgGz4ajWyXcwnmQYFuVxitS1Bqm9NdXdCF4NFxKyNwDtEE3azeMYPmBVYQoyd6tkMasNbQkvz5RPPkSicgmN",
  "key11": "3jPq8F5GL5H4AgUsB4x33susAhaaAFoSxtmsgHrfToSYZhshPCN84zXp7EE55G5dahykPQ4XJRUBUj3H5Ymj3ta4",
  "key12": "5fr4dsMneL4fDVFNZ63i3ZRVdbAPKWmgXGJkZkZzQFbHWwLCX8XrNABRnidnoqbZRnW35tkoYuZye9swCvojsi93",
  "key13": "2SQPSPwsSG6RnaDNXkVo8FAfgE1MgPLbxQMEPv99eAowAVujkHeKMUEW8PLrhu7DakumP6geMYi5KpBarKt1wqdy",
  "key14": "4HKgbK1jqUZZyME6XzvuSSpYSW4rPJza85ACN7rEcJXMCdUbYoX8aR6q7QVrAzzjjR783qNhnVEG5cggwGtpwxo5",
  "key15": "4jH5qs1HtxCHxqUq97Zqz7pB37YiyLD8WL8ijmb3pMcY87V9ydyRawZoR56pk96T4ZL6HL3asGZXngjxjKTAwHWL",
  "key16": "K2P3hAY3qDgPcGZKqbjRa5qScjdC298PtXJ3GeW8L17qhFKGgVhW3jfEMDFHFWsqBwUTSwAiPBtdtkmAcRTvm3e",
  "key17": "2uYbB1ue5EiBarAzhqWX2ASW8WKXc2MLpFMAJ2TWhNZWpMKz4nRPWs654g894TJ2wGDjaN9eHR64d4ouULa4ZDPB",
  "key18": "kTYN9BSBvXibaZxpv3JEjL7hXUZFJKRjwrTpgBYPGtXdXS5L15UNaLbzWFFjiGbEJCuD6VyFygHf7pA7hvv1sgz",
  "key19": "35hRWiCH4GjZ8BraAkrY9TppTmkdZNQEFYZmmMEfbCEuGoE5rYKnUphgTyVcsTuuq3VybQ5ViduhCDmX186YyYNd",
  "key20": "PaPMThmsRqzysYf2whcVZmgjCE8R67aS9BET3WKLaqwM3kY1UoieP6g3CdHFxRonTKdm1etMkgxLFKLnoP88NYD",
  "key21": "2uzCrv7bF1Wx15mu9Zjusu4XLs8356C1W6GAJ3oNPHZsKu9EuChuSe7MksumWYsemqAetPw5skuNC3kJucHuX68y",
  "key22": "2aimAhfgNRnKsi1iVLxr1EndJoKyMe7AzetKpFrnLANoNpfkVqttKGCJs22f1ZX4CombszLd4bfMxddeqWS44sFS",
  "key23": "2NSkioJb49nP63CjCEGh24sL6D8QC2dMqnmXbwzhPQdCY4wAKQGNuUrNuzd4UnhSUUjjdUwTUHM7NhCjEncWkzFg",
  "key24": "5gUTh5mP1z2SkueK9gguXg6TzG6rTcqWMktkFTajHyxoGKESb5P7qhZMJ1yzQHJhPh4qYAZZft32vgSgK3zYxEy",
  "key25": "3KxL87JynJN5P6yUqE3vY4v8yWxfNMnuKXXkLjoYoRQQkkxrQBv3WPwroA69NrxanjB7hRpFvCQ8SALRrCju4USB",
  "key26": "3VF9qWo9bExiPQEKzdVRhYfT9h6fR9QDMAyaHSvM34SpXQDU3GTSeqqKcakVtpyCyhBKLV5qPTR9NoYzYpURb8Hh",
  "key27": "3DzuTDgbiy7nSTnrtwqiMVMdTecYVJoGMoQU8VEAyBvvBck1KE6npQydSHNoksju7PYsZEXwoQAFEqAArMmmyiNb",
  "key28": "2hfE8rBovBzZ992EDhLdvbi3BQHWx4eo6tqXHdcNY14AjARQwDRuogTGW4JQJ5kFEnPb7uxBb3tF518883kRai3k",
  "key29": "57XDvKJy33cGpv6Jhzv9xGheePjoETCzkq4vH3LTSU97gZLMJBEfjAvVP9L3zwxXjkSKe1tzr7bfKTwvcAn9GmFT",
  "key30": "37EBmZPWqbVZ4FgJmjEPHsXzoPWa85FuRFf4B9E3BFVnvyGrKXnM8Jug9Sxy5jH7yNxTeDsL4TmfwZgJEukhz4Qk",
  "key31": "4w7eB996ZgqAXTZ7FeXxVFes3HiQg8SBntzG6UggNPWTfcyHHLi91DBTEGmMNhvUxbsRuLb4Z1Aoos5aFS6sinU3",
  "key32": "4p38ouTRM3ZhbKvRtGXhVKfJsg5ozKTXFuzWTHqwpY1hNzNSzjgZjk4mXohAhp9jY8ab8Sub7W3FN1UrQ162PZJy",
  "key33": "24e596p7xMZiegcrYiQNWRG2MfXZqH5CSEXEaBnLKF6xvKMG8YrXMTgKjMHUmpAu3hV1oVi2HLwvGWSvVQY7rfYR",
  "key34": "zDfrchv2uX8MNMrbTan1Mt1n9pbHzg3kWpGYeVEKpHzrtzF5X3SEHFUpHC8yiatSGX97BNaBX2cWMDgY5pmWhub",
  "key35": "376SXWMhNH8Lm87fuPmdezf9Lmn6KxMButniEwXbjNYzE5W17dHLVmryoRTNNemZqkDuE2thWENCBbpvsQJN8RqW",
  "key36": "29VmS8UbfMfmE2hieVLidnhToMKoajgNcNpEwMMoN8AsUgkLr44XtYtsHmqMxfB72nzv6ANCjSuL3RuMJ3abopBC",
  "key37": "tEEDqxXCvN6CVfLFGvGghdY8KKh8g1gVhUdb8hJWffFxEwLwpFCshzr2sBMwQvBEwxy6ty6FQEaYkBWHA9iVyu7",
  "key38": "4mXbjs9PBd3YvpsAN2VC8bv6ELsooFdsGWLGg5UoXZnCQvRjvFw7moGrTKLdtZwPL7WTtgrtMVVLkQYKVgUc26KY",
  "key39": "G4oyPwZeF9tAxgGNpAs9Utmd7axpXZ8zGxDyNEh6w9AMawqVVHYX5iWSjm891FmwGKk4Hjb7i3iTVSgT71zrvQq",
  "key40": "UH7y4D9RnkHAMXJrMLQcmttQgs212dtjhSDgpUMJYnECwVPmFwVzKQrr8Szg7aJhuPo6tvnLDkABsZPB9WN6r14",
  "key41": "4f5tXQ6KCz33hVW6FL5FnsJg2TiAALVPiZdtKPquGLRDLzQdttPasaY3XTiibkNog2mgNKRvJn29w5JgvCHkowK4",
  "key42": "2bBbNHEWCgPMsTENt7QibDFRB5Lw3e6gDw3wyn3yJRwHvrsvhv27uJR24t5ypnkbfM7KYRyUN1RWGFfSMyXjZEDs"
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
