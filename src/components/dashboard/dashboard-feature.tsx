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
    "4jTQEgWueNTJnTyD95ocKWAtX8bxiEp4yF5BGZtPhKNWSGNNDS6gHLKrdfUQjM8ZFhFW5SuXee4sEAju7SPL4jYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MCZJeDMjFvimoNPHVKKoDYjwsNnbatUfKh5GBP4CfiDi91kzhTWF2cJZpLatV2B5uZWb1BeSCyMdeff7xdL1246",
  "key1": "2DBE6UjpBzDRJQrXnFHcqYUPhkBgnrMdHkNkKFMtcD4mWFHbEDdKjvDJdnSaCnVynAEWY2QCbviERHHSf3v1VXKn",
  "key2": "VF9aQBLMmNoXvKoEA4x4x6xHtEqwm3a2j535kJKAzbPLi6Sg6sRXkfREhPG9at43XrtUQpa1vrqapeBYA7QwJdp",
  "key3": "52vcHYRfGRpQc8iCcF41giBV7XFCeLW5fP94mzVxDt5ntLm37de7X7W7cWYJkUjuMdqnXF3nzs854ZgBajnafVZ3",
  "key4": "3gowQJipvVoGvg6HfHhCGvCm66tbJoJhe5S2jFs3kNd5QPDVCmd9gr612ThHjibZwyDKK7ED7X3hYTTEHqZmeM5j",
  "key5": "3ECXq4FKHejxRzTTynJgEfd9w3FxLpYxdjSWx1KVijcG4vhjNUuCJ69VJWcLBr78BgeKtWf1JjUGMVMqPezV4oRU",
  "key6": "2m25kR6S6dgysf7P6To2F3GnRqfCDmhQXpBS8i2mm58tjGFqZ5JL3c3MpaXMUGkeXHMh8VNFskPwsTH5eHdXkhvg",
  "key7": "3YfJz2TMdinMsGbZHuB7K2aGs4YkNsUEbVhVNbVfpPhVpW7N9AY27SyengtDJY4LXf6Y6NeC2iqqrayzsm5mUrvR",
  "key8": "QHqeALrBNALKBtuu3uCi77vVC6Y7Mc1JSQUtsgqjnzc4GecLYgfQsG3BzTWPVC4QV375yLrujpNWVTCzL1DQsVF",
  "key9": "3k8UGZpFA1E6M9ENaj26yQSEws3VsP6vpA5wXHc38VBvCEprbfLKPUZyLNY1UQwrM1kJzwWo3JWTvwuqVphNBXj7",
  "key10": "4iiJF28mkerJCGQNpRRtJ7fegf2DY54UjuT2kE1BoYyJf79tEEVRbqcsnWYJvag1t6bQXjGiPbVFpCjuwKANnp9k",
  "key11": "kizTDNMExQy4vbgVPd8odbMe62Ur8AYBRxpkc2tZvSo46CpZXLCeLxNdk9rSJW37o4ZDRNt8y5brqEH6tBK8gFE",
  "key12": "NnCvMdCC98jfo9HXWdVLj1YJLAeiQXjUvryxabPtcKV6RAxXWX35KsrHunPUijezQY1FKy2jAQkdt1eSudSXjTk",
  "key13": "3jWoZeLRMCn15ydJRtGX2ZCvSc1wsyNpWvoFXnTtzXiaNTfsrDWsZ9mvhRP5jaXY2GcfULrDoXmBTymyWWpo7kNm",
  "key14": "3AkqEBbHCKT8jBzXQJVZ8RNaVZbWXQR2mN8GXpHZmWx9XLN6kB3gUR6wddSa1Y6LukYPAYDKeAN4cbVSyNh2wJi4",
  "key15": "4R44toENkHa7AsnPucgzuQCDUU2kTyiQkAraJBASrXkMbeJYPLiDT5iSxKSc4McN6CW6axTqk3rW5HiBVbXBrddf",
  "key16": "2nA2BNVfzv9mNe6gFkhM8KPzZr8njQGRuctmmdMrgSHdGbfJuSERJBz6QSfkYvHy2n7jc4LMeS36k8te7uh9yD7k",
  "key17": "4gKDWFKd7AWVU4XgjXLDyY4zXhFzGjhcDyn3ATAk4wpbpvsYKXiMumZM7o7FJfhJkhSThQT9SmzQEJTN1y3XEAAq",
  "key18": "DC1sASuehzP8Wc9c1qc3LC6w6gyCtJsgjivHAwqXkeuhjHTG7FV2BsDwgziNiZJe6b6sZwsPQN1wWBhWz9QvewA",
  "key19": "5c2WchGKzczzykt3PftEF72FvMQsFxTopPE9ZmJfJC7ZBKAjnv3bpPgsQUhhgWcBZvwqaLZNSKwsmWAvf7uH1wxW",
  "key20": "5ATbXAuX5oifHJvFeV68ZwWUkCsisHSanqHB7amhkav6gMtt6TLCHbvWjTUxwiqBvnZ9M7mM7EHjkkyLNPZmeahZ",
  "key21": "2upq8MWQkUn7RwmSx29fy8nJWCATwrPAziUYr2nfhWBZ3Ni5rjmTcLAeKtZo2mFkRN48AfghondoJyfNLfPEwQPj",
  "key22": "4UoMRbcMp7cpG6SA65pSctvaFG3gpv9kXz28ecSmyZ1SQwFF6MXbeVXCE3Ky7zyVrDGHwrbq7yuwE7C7SW8huho1",
  "key23": "4TuXGyFZDrhEtxAks3d6rrEHKpoFwwrxpkKuxcaZckst6nYReBosQJKf6AVuHkR6uAA4etNDasY29vU1v8uqmZZA",
  "key24": "7J2LTZjCWXYjTNFiMthHSfM5pfqcAeMqfLG1a5PFBzzeamByK2g2KBCa9MgQFLgWWKNGCRJU3VwRk6e58Psb8ge",
  "key25": "4122ZmsTmJ2zTSns7kYMrk6Usf5M4DjTQh4AFwpMjdKvCkhKXXArdWaKtLv13HSs8i51MfSDHRfwBvckw1QGcA5W",
  "key26": "4nJJnecz9mNKuuzxayKwHprKZhH2Pn4wdPtW631RkeEiMY8H1PXFM72AdyZvui2Qjjjeo3SRn5qigVpQrZ3gCKQN",
  "key27": "3NAqCBEmukwrgCPMecyVGFPnjCAbc5GP87AmpFUn1Y8Dg5iEcdDBhwkYSWzvg4AqC2QuepcxJcdWZuQFFdiXhekh",
  "key28": "2aymEapNrPxuuHYnZ2h8R42Z5jpGE2b72k9Q1Dc5LryTnVPEVS2GGZn75VXds23rCDK2dTDnrzs4iUXZhEkgCrv7",
  "key29": "5Ke1xeJdm994D2rBzEkdKAvgACXu1waGZmbbsqkn2bNfvkpHhuxyeJwBLZCD7nAijc7vxpdYgjsUsXq1XDKFhSrv",
  "key30": "4iCpQgZP874sedcKcY1gicWFDrJt15UeeTGqdFGYUY3gBPbVBJTBWXMZ1U8ikuzvLohdGnrrozjb2RuAeMpLa6EQ",
  "key31": "3iHEtJnEa2QdXNdiVumsvpeCYbkpHk5o5KEAoMz7MtctYSQckEEuj3PjuJL7o9WKuaVTpGWdCYfxMvQUfWXy89GE",
  "key32": "5xgYp72tJSNdQkPtPW15t12ikVM4MXEWX3zVkqzEgsZXyqa54KpVSZj5n2k9SuPAEcqdSeounorbv1W4WNfGHrWR",
  "key33": "64iPZA4SQUd2zNxV68pNU6hFZryqsJuwQ2hz6QkqdNLS7R7Enq3LPeg7RBmR156oCbhLufFRno7LeQ4kwBVgFZsU",
  "key34": "59wAomq5RcwE53xNzYD29kW5L8FVtAoULi6qmcDsfwpGhTdmSSRtFnjSuFQ5TduTqWLrisqeuEfNeCgXzM6xGoY5",
  "key35": "M8Qr2xBdC49AAtQaNUHn75jeFwesZjjCCLy5b4fnB6o2aJCGsPii41ckkh6gd4DBSDiZ1Znr3aZVPpYMm268chz",
  "key36": "41DA7ihMNNQ1PK6JpBheTozqfRMv47Q1TP6quRVi1oTaXYSCis5mXSqRMZJvGSn9CniDCMWCWF61YrQ7zcKMoeeo",
  "key37": "35ZQ74F3cp35pW6QHG3cj2Ro2J1rqw2B5TcwcqYHfmdBHZW8kapARqdgSfAhQqcAhVJ8QcjRRM9jtanvRfwhqdgu",
  "key38": "3KXp9kKocsbkjujXHLTAJkiiFUNtzAwKgEYuAscgscFGhgit8yt9oEjSBpv2cofncqKcZxyrr9sWbTKRuv2b93vC"
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
