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
    "4DpvGQacvG9bNTMmaBrp7S6VcQTn5TQNiFFAJAYeZ3F735tt6knpXvrV4Dt9Tzs52sp5FJE2vvWuNds82e2sUV8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eeqb4niDPxdPQ65RYSXipzwmaypxZikoKuEFoH7AqnkGChdNnhGQ1ZVnTjNnRxf7uu77nULtg5FhpX7fJXLzL6P",
  "key1": "4h1ksjGo2Hj6Z3J3tEnNbsK6c8rUwcEtDinpvHJUpsqUeWALoCgAorNiYqxZXFSxwnoyHBueuHGxawtPKnrfyZny",
  "key2": "3D56cyHvS2Lu3fZRqa7YKcsARrTrfJQLDB9byTXzzerawQhcdX3Mw4jo8Ez9WNYP64PqCRkw6pFaU75yFrBfHk4J",
  "key3": "3LpoqPBc6BpACqaZZ6fhtjieBCPbj3s7z6pkNxXLnVcNz7y7osButfhSmCg35HFtP8nLaxVd738bWCzicoPouKyW",
  "key4": "3meBjDpSuS5xWaL1eRAbWvSQJPBibjYHi1WZQXGsZuB51Ftmqg1kphm38neAWzuBXnqsXcPSFkGkcXjfpwUKP4EY",
  "key5": "5hS3gbje6fdiLk2ty8aBCHUvdKE6XMLj3i9Zqpc2Nuw4TZkoqsCaDBWm7VFf2MVigwuRvZneJ2bfbmej1E6at6nZ",
  "key6": "3WeoZL3wsaSNkEBVVoMj8LiyNPxZzPyL3NPod1jf3XfKmcmcgU4keez2diUgRXL6rGe7uHyzFgUwi1EdT5BhxbFi",
  "key7": "5H8kQbykSerbiwuyvDguShZeRYitUg5k9hZKDazZ7Dy3mNw9BK4DRhrvy1ExoAYwtAv6g8fE76AbzkEZ31SX4Gou",
  "key8": "53NVHBtLyDHPVkQUE2JjcPcJg3v2vxbx68y7XSsBrnQFRMMZyLgxrWPwmJhBTYs6FYuLMTTqggrDfaP9D2C7WhCG",
  "key9": "3g9dkTvYi1Bv1QFi5AQg1QRCbjevrmSPRQ5yjaNe2TTiozwtWfhsgtVKnmmkc9nyUYqKVaWEEBxCcZW57BjUzAAk",
  "key10": "4NkwnWxRSJS5hJ4vG1qtvLCbPE455oPLdL4krHqQtNTRVuYUWBGYWtJ96R7H1zW9mjfKZZNUCUMW5WmcdJ2Afph3",
  "key11": "2oz58BDM1fA3Q3r7jrkupFkTfCWhUgyUyQY6T6oVRqWtBhebS4JxZCTHUpdPGPJMVGgJUDoteE69t8ufTJTuLNGx",
  "key12": "438BodSofs84ikPkXNur1kGXBYD7TBSk5WjKmfb1REE9DREYevKm5YNDEMwM3TFHjwC84Z2oF9waCKdeWGT3yYF6",
  "key13": "2FbZpMRuk3WwyWo7b3UgP1kfmp6ihy1b8h7eb426kX5cdNdmrZLWUzd3vhSY9iJERuRc33UHqLmJWxXYXovK6R2f",
  "key14": "3GYQNRtg8TiayiYS3kHzmdxA2GSS9djA6DH4wUqUuiAMy9RF7QoYjteSKmBdUtqzP5XFJ8eyc8pmv6qcXhxL1bRN",
  "key15": "4tRQugpcpnR8QPVmwLaj6E6rTqLfCmnofjw31fyeZjnZ1cXmHYY9D5A7iVycxJijstDDGTaHkZCUqtDnxE5Zzzqe",
  "key16": "66Stt3nnkrWNbQBo4SeLnYd9u13yj5WRUxpupf6teCnVwDwWE4dwsCZzMCMK9UHnyVfitAe5NxmfKQZx3TyzEEGW",
  "key17": "5mJEELSKA7ZkHSrSwFWzeScm61g7gvYyfvdJuGTubSMJQpcBFrXdA6vZsAnLNcAbPMdijHHH4NxCbgo4eHrn7mBT",
  "key18": "2h9jCQNk1qzhPTqdSFrAM1yr31tejZqHMCTHmU7HbMQK7SQBBWUs53Vy6oWdYRZXvniRh5ECjGVN7zfjAf35vKDV",
  "key19": "3tBTYPKk5fBRGAp8EukRGbM8e8YThjSTNVL87YsdGF8SdFKkJtNcfgXUivTgzVAknCZbJMjJcZw4YB7eDQtD6CLH",
  "key20": "46YHpZenzpFFfXemJH4vXks6UAaVTACrLDSBoTnx3Ajxdx17f6oKStNJuwaxF6NbnNsasBkWsRnB7CHZ6YBL1QiW",
  "key21": "5NJWqULZXb6nx87Y7WxVEDuVkQQS9UfJh7PxPBQsrXPDGgAwwYSCBH1ARrP6s4MZwNMKT3qA4S1E39iyKxxy7uaQ",
  "key22": "3pSrDnxtg4KgLa9FX2nLvfBWv2WU3jdiej34mQ3N8rTebSiv4kWLkzTqcDcmv1uXmUJmnnHr13R8HmFKgAaby5iK",
  "key23": "2AoNNZ73Rv3MVAcNyKAdyAPdM9sBUJbwZrBiPQDzp7QNoJC9k8RCVbyuRGggNxZTPNhsXzkneV13xGYNoazvGAcP",
  "key24": "2QScn8q8Z4TUfkwaMkfcERxLCK2scHGh6y8pxkgdVcDr4qQWpQiXfNvroP2eQSxZqs9M9LkF5zFNbtQM7F3i2dEP",
  "key25": "4DP3khFk5nmBz3G6zYbJmzXVEMDezzJqzYpykfLP2CLSLruXFZ5u8N9rgfMHkpTpC9BSD3Ff6yEteG5jxRTvikGs",
  "key26": "5Z92MbetJNKgLZta2M2QyWJjmC1a3UMFcwkGm15dhatVeDkjGZPgKfjabWPPS3rXdwh7myZcW5yVgsx9Q6j8dqyG",
  "key27": "52uu1SchTfdRReBh8Ftgf1FnpvGzsFRLMXXXsaSQc5b28g2ajRoLUVnU5DzST3wQau6sHfWvj1vnPai6HpZmarxm",
  "key28": "3a2uEggpZsE9SLT4aFJBKcoFRWKJkQfkN93YhJXAXXTvN3LtE1XZwx6dhQoPoQmqXBHEfy6wm7zZwYm74U27KMcr",
  "key29": "2tomf8awxmgXGyKbBBV5LCk3Zp6KRL1Nn2qvojrii9CDdjn5cR2hG4Nudqpv8fAkdg85EbZbTcdbWYrbRTZoHCoH",
  "key30": "4dmX1dhHynpEfavfzJoViuE2KpnR58xzoPChjvyAE6fCExYWuyqGuV5UxpE1mjANrsyyBQwK8NbJMBmAHFko5FJZ",
  "key31": "5ZxXoB56vifjGwnYVhG6ZaQdNsAUaFusgXBeSDRjD7ooGPWrAXaf6oWDqjBSMZpqzKFcCtKDWZeqSEa1Xx4Q7xXg",
  "key32": "3riDWR1jZsJLgFJjj9R1gxGdF2hZD7rARtnjdHgPuSMuc9TewgT2i1hDah9bc5pN5QFXyrr7pJEH2iLJfiC2Yw5s",
  "key33": "4QaC4Y3zrR9tAAGToqfv9jiyPpdjnojFEU5LR9bNzFWifxJHmpCABAoM4BqZdjdYnSkpzbfWjUYRCoD2yZwqJm6a",
  "key34": "WoYAjBsaodZm8GNzHyuHiAtKpgAwXvqMEFUTtC7DajGvbynVSXXvoAadczWhYemC2hJ2Mw4p4pToxLiAZxa3rrg",
  "key35": "59xBQ9ucNiDfnJpT8LyrLrBgnKNf6NJExpkryYKD7RtCyD4o81ik3uznoSYDmDDEsguSNGqaDWsJpJwHLmmmh8J8",
  "key36": "4bmJmPyjCfe5LkYnG2HpE7oc4VuYCY98Lj1cYZRs1h4YRSJUZG4DVWW8NMsixpnjjq3HMDxcipaDpiNCjw4NspAj",
  "key37": "4Tm1Tqcny8dPhoSZ5ZVrtJbo7G2B5trWzATCgxyKcSsg2kFvwarXs2iXZckqA1Va7itmcmWUUtypkZpMTtPhbLTg",
  "key38": "4NygvirSxsBiGhJGYNDgzUoScvetnzC2mKd93jrbwEMXpZjXUev5huv9pN91sTMMVMoKeuTy3qBCpZTRs7A1qyrP",
  "key39": "jPfuNa3g7qfdfrvsxtLioXUUTA1eVYxvUjRQNmDL3Gx6pDNTGf3RE83D4DnKwYsJHPZFu9vTqyE5Nu9ArrdvjGc",
  "key40": "r6LMTQ3SyPKHL1eRHVid4fhUpnXuzJNr2D7KtWeaFdvZt6UpkaTfXsXCh14uMbppTQrugVWhi3LZcgSVs4766Mk",
  "key41": "3i4LNJyJ69GV3CHeJYnoRkWW9j5wVzc1qm9t6nrghgTRhwJ2gGn97DBunQUhozxjHUNZTUyudUFyXgphpwp6yPK7"
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
