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
    "9w1dfDnAc8ATsvwyhJqaqQg3Ag7MXiXX4riKkVr8cufvVTLA2B4avpWwz78kGJXTFBCMvXNwsjyfymoMUY2vEWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hv7Vi17iECQeVpZ5BigWz6CbvZvhdS9FmeKCJmFQtt7b6i3yW7QCrzBBLuRhV2975aJgAtG9gE4Tr4g6Y1Gi59d",
  "key1": "3GyiwMP1XLVvL9pJ4Ew2Ym7QtmGN3KynN4h31QUR87EvWqf6etAd1sBrC64V5h7PQJhhWFT9uYaudiEHBZB7bNZ1",
  "key2": "4sAgWJLhuCCsJDEuN2rXM1R19g63BmYUDecnHsFfXjAMc3SeM66meTVKLZyQYn8genqAfkf9frJmhjTFL7sZBreS",
  "key3": "XnuQ3EJ3faUAvGqK8iK9x5aWpR8uSLCzK9prkAFkhMR8oesUtWAYKBkyhczN5aLW7qKGApeRRe8uzhB8JWbVA89",
  "key4": "2hkCvf9vQ1uS7xo9DFb8F3EW7H6vwAT8s9ZqPF6pb5pKKg6KExuxZGnVwpwFCXPRFhWUV1MMJLs3XMbyiZz9jkb1",
  "key5": "2Z2AtF1zzcv8eoa76VQbeTa35gCkNoSL8zYpSRN8RvnY2frWiSHx3s8V1R2jzu2FYkXUtC3hYuo5c6kSb8vN9rCT",
  "key6": "CtsLsPDX1G8p1kaX7kb1Zgme43xrsM5kM7w1R9UUPm7emwc2yhzm13Po7p7NaEbiQssBZ3y8gjH6vy1qq4WyRc8",
  "key7": "4ZbYtURyczpZQascqjynSxzhirywGnmkuKTmaYgsAvWvL938CGPLKLBAY3KTnbUsF7xZndee8M4JPU8FdHvximmd",
  "key8": "jT2QzsbUL3BcPdqqoobPW1dzVTRrB5qcRvhGkKDZPAmV6NcCufsX9rU4pgGx8tm28VtmEvcx45FvhDozfV5soZo",
  "key9": "4LAFtLMkaxVxPLBaNFzSHB2CE2g7hRJYnYnjiNkM5FBZm9eFwSJ7MkBBuXiWSiWfKHMT9WYCBsZCvVtcVzKNi4ZL",
  "key10": "571CYwTHv15EDnfSxGcvkwwVUG7RGhkYcnS5LaUKb2E2bA3EpUJ5oZDAJEd8VwRQiYaKZPTwhf7YBXpGim7osyhC",
  "key11": "5xuTDZqKRs44K28RVnhgh3uDMNDEEdf2hiTLgdH7xQcYq5v7AXYewG8Ry6FUzrHX8zJgiNq6nQAzbKzP6PGKUSnY",
  "key12": "4pDPWMN5sSH66a8c5UrQCsvEao3Y4qDZmBSxHpWuBGJvfN4MGPyXyoqjv5wcH3jyw6zJBzL5yJgzTj6VQqnDPQ4f",
  "key13": "5Z82g19WYzMHd4B3s6KYa2oPcqUVhv2t2wPf7aU6hWhu9e29h1qorsDGM88F3dUhbBYKGYeefTNq9M8ijDRVGM1w",
  "key14": "2iqi19NW4dDg4imnhPJRgyEGNDTVp3nEWTNf5bHL3WnVWRsJjbvinF3qndawobggawDNBM26ypb7hPBGNQAFs31U",
  "key15": "xi33DaegqmaEGnBjRGytpa1EtjBcVHtnmEDShpGsSMDPeppLKmQjMwij41N6tDXKuzJiAjt4qQSHyTWB1vaeshr",
  "key16": "2cPB4giBwVN7NBctMqNdasZHckeYisc5H9qZ2F1qHY3c8XCGQSJvsSV3cbSsfoh8Q7Fnkq8ESNRBeUPewKaN7zpM",
  "key17": "43bCZaDMhwsJX6EN5bbCUbPEMZhGP7AGLMR3J6S5JZ7Fj7t9t4BfTa7g1XHEKMEeeAv3oY11NvY14dPWzb6LPD7g",
  "key18": "3YXnvmpNjFJNPogLkW2YrN9whwxWxgc6Z4UM2r7P2g7Juuvs5dSBDRfPxoePtNAsGPoSJSErmqpKXvNVqMmpKtfk",
  "key19": "4BsKSm1mzVk8WnivLEhaZLdLv4Ka8d4N4kW5bzKwbijzoA78KDZWGYatZ3urd5RnqUcw49ujL8AUD7LtJN7pVjWn",
  "key20": "N2Ds863EvAwR6H9UAWqfBJzzfAoieRjbuVM8y3rcEYVFghFeXFvexaqmTDg2D76YhQhmtnjFKHBsaFzanygfDQL",
  "key21": "2vZKUUkeiLVr7jWFZw23dEZ5KgKg93npjciYQpjY6JmVysWz85qbTcPm7KFpy1UPyrtWufhX4HV8gHdF3tLLTaLG",
  "key22": "5AoFdwkVnXNCDQqbZBWiAYkahQ2CDZ1wLUcmzJQcEBM2WeJHzXhEZg94aULkzHhxNvUsxRbG3hbjpRcUR1msSG3J",
  "key23": "4txU8vNawnbhhQG7xGyPPqTBx1pUUbPtveBDCuafHRNhJWwFXoqKppuuaNH83e1sqnZy6SGB8jmovmKAQMTXdeqx",
  "key24": "5kWkNQNKx3iVqi2jEu1TgSnT5yHQ3KCdwUktYEsk7gHuLL6Q6piZ2q1avYLmE3j4Vsi6EHicz8bjhvMHqZ69cUkN",
  "key25": "3t5tNjr5fvXsLRzNTW2kZmVrF2ZviwfHXQErThXGzoecQQ4JtuJjjqAXytejkpV58LJ4v5aicEsTFUiykVXqFJ4m",
  "key26": "3aA8inkyAjtz88TYS1qnXSX9atjX1vWLU3BDcCR2oJoq5oPHM7DdYZvEpZDTTjDbAJRspjDgydJQdFiTSE5xFofo",
  "key27": "ZjAYfPhtHk74vCo57atST9tJeqpJBRxogxQTcQgaUhfSmW5RnYfLMiPAtbNVPwAZRNruGnsH9UPYPYwE98jgPev",
  "key28": "5NRDQN2hEX2gPk2BBvE8sac7ymbAw3srhCA2PgbLibgJm4ofum5UZtmBN6aaNkKXQFDYhcbivUxSj9UBxRBmmsoE",
  "key29": "63V8pfgzCiH1oXJ17RpENurjhByJ2dYsZHg2PzeN4hnsbaywPEsJji98goVuxRctbABASySFmCV9CaCgr1S7kyAY",
  "key30": "4MARdEwaK92k59eVDf72h598XLpoNSZooZJv4Pp1JDsem4zdKevrrmg58fi6HxRkEF9UR7TC6QN2EZj8Jb5VLoTQ",
  "key31": "WaHoXPi58QgwTqpd4wHgVtVaUtzEid759bcNocvKBhXMBAKUpdyet1VtVi5Y8kjuRcncpkqcXaS5UAdRtJYpbVg",
  "key32": "RZejKaQ3vEttoYvTjtoMWNoF7ccZrTGK3Th9Q7Xxni56gggYCUkB7Y4JZ3s4r4GygRE7K6Nd14wKEfRHcqPQVb2",
  "key33": "gELfyoPKYA2nYLyzPeh7R65oLViP8ZvPBZN1YbCuZvF3BywVZ5qq3MF9ZxHyDDygijD2e8oP5rjKi2dybF49YR7",
  "key34": "5qizrL9hC6VNHcMW49ndvtJ9cXw1CPs7upDzHNKdNy5wFyhqoSqPeBypg16yqLFrT9ai1rdcUgpDmfyGCC7ymnc1",
  "key35": "3WcqybdsvJKTc9HRXx5xF2NJtDhASspuGTFtQ9d2eEY9rKTsPwmandb1M21HS92rCSBiShtmKvGpTPPwo7FAdsE6",
  "key36": "4CHtHJDK76KTV7sgBbKh7Lh1vMcYke8x6S1hCHkBeThbdzugTdUKPSgA6JM3fPuUwPbgedJHi7MaZDupSwatRb5F",
  "key37": "4aSiTHwi5GewUMk1txZEDA9qMTAaHvgfUuLqjJSwBa7iNi6sH8CqwTfZkFnpaYvNESs8SZ2DtnQGENMQBq4Emkz7",
  "key38": "36ApggFgqGPXDt6f5YTrv4FXEXjfyGk1ZbVCWEnKQwJxwTLFzprfQTKv9kxezUaC7BUYbaHv6qbzn4GhsNGpZ4dF",
  "key39": "5fxkohzvTM6sBZpcrU5J1Q1DDHBduRb2ys5yxJQsiKapXexTScDvUAjfSKG6sXNavYS2BRMN2rgu3kre2UJFKZKd",
  "key40": "rzYeWQSbFX9hHJ6fwhrf8C4got92cttEUG7xbYuQqbF11yXGHdMJyMZV2AVLXANdkTyN3QodtbyXgm9ta3dTmYt",
  "key41": "5WxLfbQvNNvebGycmTxaik8qmyhiE2fEs2DMFoo9bCLyvUAWkLk7US8Ub2FwEmnUCRvZFnXMXguAorW9bYTu66R7",
  "key42": "2u8nGpQpbw5QjmHPd6BxfkQYdpPg583dTdxGL1243zQkbBaM7rNhogLrXVmtRh9BdqrtzPeoABRA6sJwrjM89jGP",
  "key43": "3sFN2QDS4pMQ95LLQund7m3fjzuQZumGMJU7w4Ca2DCZXYFmVYkELzhaGrZD4XQcwwrGBttLm4WHWPCFJvSCUPP4",
  "key44": "eyFRvrpCST4F9EYgmvmtdSjm9oQ8VYqkA5m7jgzd1Wi7vtZtuPS4NrW4RDVqnqynUZdMUvuLdfYND1dxsWfnLZx",
  "key45": "2afWuLbyoFi13kZJoCx52btHiV3nrQeHGXLULJzwhLnveC4kJwfSNJBSfYNQMM9upygM8J3QAkzaPaF8mUQbbwhx"
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
