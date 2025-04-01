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
    "2Dq11r2Shiyi2BZFYNhhKJdUpKbiYagT9SujuTB9FeCcttfAYn6MU95D3bzeQuK5SD5u651KzgU5hVGiAo1smRkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yCcMnhfoDkkXwBQ5eaVRPkhQNpEfyLwQNWvpy98CDGTFLH4ajJakDYj5hJDYdwW4CNw4C6iU62RKNHyz2wkes2C",
  "key1": "3U1trz8j2MTgxuked1ew9BdEEp75VU4ngpZVrCuTyAbMiXsiys75pzgTAvJgGqo4nQXtF6kEYwPRRD3bYmTq2iSF",
  "key2": "F6JhVHregKwUKjgV1sEkzvYJyn9qMLgZWCK43bEfjTUV3F3H4wSSYN8gfVo4QzqxZY8treyqr4RqWkYyGdAPSF8",
  "key3": "4ZXghbJKPkS88M5exkz2StF99FFXNpDGVi1SQnLBniVBRU1dKb5aLA7Y6KnwUotTonTSfr9CrDjzBQMbFAEdz1uc",
  "key4": "9GdunuszhGiRxLPrQFgc88w66ppbD9uGCvzdsdQhZXT4ESvMePuJU6ZpYV4gPpJMSf8Pvgw6oFGrysydUstSuvz",
  "key5": "3wKrvFMUbXrwEFx4G8rcGeBXbDaAgkN2bMBDVdtZ44pmbfsmdveMSWRQrbzcm51L6GL9Ba46xuHDcseDXdsvChSy",
  "key6": "3Tjmc2BaV4QRRCmsDiMNxt9nM46nLRDvbkRwSJJtcXAQp1ixY8f4NLAXdaWGPQKpZxAZXJNW6wskauD5xmXnn9jp",
  "key7": "2qgb667gbqH8XqTMiE9zznj4E93vvc7dFVciw3XmEqmbmGdHA584jSiEyyHsaA1m97srXmoV9aX9QRmUFojMtZ1F",
  "key8": "PmFGGp3B7GNr4K1ywqhRdo8Xwbfc7Y2tWZ9RXrpS7LGSCoN8dgzoMtnaD3cSBmpQwB5zNbHf4VQFg9KWzjWTbj5",
  "key9": "3ZGvVQ6drBDQMDSCSjUwdj8sfDvdCLhDS5QoBGLBxGr9XqYpZ9BErfLbpUViREZ9PgztV6sXq43pAZq8XDyxw6zc",
  "key10": "2MnN1qArvonjVzednZ9fWME255K5vkMZxaUAEKZ9DQP9STS34nVNc3wmenRHAvaAz1jNc1mP4eqguy4NoUtv8rBX",
  "key11": "3xsMyhWyZpWxiZtqeLHu9mtBsBdehoeMoicuy7LzWyLyXe8tbaPNPRs9Zc8NZaw1nQTj4Dt5X9FuebpSp896PvzW",
  "key12": "4PvVA4DsyAswPACGwyEsRXuAnGUbyPvad4uJ2wV4FhtfGu87NtkjHnm9Bo9ufvswt6x2C99dEu6qxYm9FvJwuZPo",
  "key13": "2jnPbjiuLFWgtzEubK1YHEj7qd8RBhSeTuydLgwym4R2M3skVwhHf5hAfqWtfdqVzfnguC7kTGnXpmXaFnGRMsoW",
  "key14": "5uHkutrMiDCA6xTmmVqkTN8Dp92VHX8wGUr2QvPXiBwtmbZysJgUAYUMxJBbb9q1iRgkcMLANaSC316mxpyVf21X",
  "key15": "5kEbfyUxsapvkX2bR8MCybSy5tAaJreD9E2Lg6S8GX17uHdUuTUcqAUMPeFZ6LpwFcDg7uhExqHcEHkPUYnmufhp",
  "key16": "2qjyTKAtgP5HLms6iTZBaeC1j8bgFkw5FENRXdk3v3sEfq39SbJ3s6jfwS2U1h5QaCaGPuBqRjTT2PHA2k4tQ57p",
  "key17": "2vX5HioTPTwy9997wqWVrjZgMKgBSbuCbT2SXYc8UHLcmPHX2zANvFPzDBcgTusMJnCcuoj9dh3nMr6CN7J2AjZ2",
  "key18": "3uKwHJnwfd1R7jmCZFULEdG5gqaMvSYegxGWXX2ajmksv9roes3cpvE1AVZY6PreLQrMv5sHxczNrGYQfR8khHQL",
  "key19": "4AxtU4bHypsLCBgigqocYvmNs5xi629Hz4tzdCpQgjzH7N96ofbaH324FG41bq9juj5jnqfjEscsFWWfrumsGQo4",
  "key20": "5sWxq9hgU156hPH8PEacZmdQa5ZKgoLuYP3XjEgGUuCdF8mw4oXJ7DNdpyMiaMVwQSeUC18XYYeebmV6jYF6UWW6",
  "key21": "3RVNnkVU5sCXXkgHGAPKy8b2mQL3Wqizmn8EU4FcKdqLZAuHzYmkKgB9PuvT4gjoFhs2As9VH9Rq9RKpmkm8mQdJ",
  "key22": "QzbaAxcqCKGJ99iTmyyHHCcJNbad4CezNQQ9BhWMjsBbc1a3MoRAZEay6hCJG1Jdc9wrS3F7LYMzy99axejAjW9",
  "key23": "27NFZNdudz3n1QGN46CW8PCQkSeqbGZTLeHDq3StamazttDvBERTCNVWSHbCv5yN91sGxBfuJLtyeu7sFu966KFu",
  "key24": "2YVpmAm17NwJv4sPnE8kXrswCPzrXMDKvxU4HBRtVrpBguNE8jN8TnrsLye18MFZ9CaBgAETiP9a6Fy1QcPGDPav",
  "key25": "57e4KqtrL3ebWVK5nwZ9VDsCkQ6pqkJA7KnXEc7VyReCgzqdRiHumHStZbWzoZDzVZo9Py6WhZztEtwLfxNPHBhG",
  "key26": "5ETfpeYPonvMrqNEQWqjQWF8xpCuj2xSLypKdTvHLb59aRo7e2ENWVYiUqDTFEp3bAVWGwt2PkKLhiFnKUYJ33RD",
  "key27": "5trwUNNNWQ6AUuGK1o1kkPoMapHuHz86vyfGqCmjUyQfbfUJuJoLsNF4oEgAtBGVeYxM6iPMdGBs6cqM1k4rmm8W",
  "key28": "3TmtgfUMSU8QfAUZVMZ9df1taHibfQyCK87JWGCY7orfcPJMK76tEpuTsq641wmF1b4oxMmXYUQ9SLe3rPHS2Dkm",
  "key29": "2MYXRpXjzwBfGRSgMSL3Se1dmnEPw35awoPfvLnFAWF8GGXbUzCiv86GXEX3uFae31w4BA2qfDuwG1RZhiqokwPb",
  "key30": "5K24NaW5b655kfphdGsVKbu9BeTQubzVrrHvKibCVyd2raiRvojGPwD6aJVRTGDwhFf2FhJJdQPfR4ZC3siXnbT5",
  "key31": "5dqRLr6V8o89PeAErm1ka7NoTfcZxn1mDAiv54JRXm5jaydExAtfjtK4ZHSu8RPh5pwFdGhPVCVosFk18WzeRqqg",
  "key32": "sh3qq1mQFLHmv2tqqhdVu33Nrrv4yM86Sme9AJ9FnUT3QCHNkHU9L67ieqhZ75LMAWM9egRYF8sABp7YqdcHQVo",
  "key33": "2hyxgsDGkeHRcLkHZnriR4ETLcZDGHVvFhXEP6StcgyhSkaGZ2FDshA8gvKTe3WbBBxsvNEdPBXZMsqFaMr1GHRH",
  "key34": "6MEmti3kZQc8DZNC7hRd8ez5gZZKnAteeqS5LtK7SP9w2ZrNUTh8zAjg8h2MV89maQo3v2m1UtTANxjd9ZUb4mS",
  "key35": "3fEXUL6DjAFy9TKGRkzu2X2TpquPD79tYX9qvfNfgPi7NJatcaGHCb7oNehkiVvSJMoKYBpHwtzHq9tti4vuqQPE",
  "key36": "5oL3ssVe7KQAviw6z1aKWBWqmH5EungN4KeJLZJBsTqWGTvysJ9jztD8m7zxPpUvtaKe82GQeDeBEKkhHNyf456n",
  "key37": "42VRKdmzjF9C2zWbvavZtuGWAaDaHgfCXRGsvpJqdRVti3xeiYTVTzyuSADUM8q3mzzjCsdufw6Nceb54JEiGwsv",
  "key38": "3VhVMtUjntNtZ1y1dFD2g77rubnVandDZkfXkJePkxVnYdDD6BCJwJW9D82c9JsEpeWUVxn4T4ZLKtZrJRMAa4ZE",
  "key39": "49iZ82HtyVTGqutixbBs8FefHgCypr54bnJ2iw6hRMnCr7mRrRQtBFuZsgQh4Ac1C3cew5tcTkQ4LWeZv1icvuXb",
  "key40": "bN7Rc8ibY9Dk5ePFT1v6Q1QebN8trxFRE34dany2B8z872G2U5uFtXRpm2HYZSQdZDJ84uaajhDywWJVmr84g4L",
  "key41": "61LQpJyQMMkBdqe2M9LFb91r81tDvagZQRCNZ6PGCZH5mqEweLQU7eBHPAA9h3cGaMRdeVJdzYUy4MyTrW8G5HTy",
  "key42": "2SS92EwbY1cFpR1gSWqKsqVGv2nEsnYYuHDeQD3CQPBoDkdi1mACFAREejN28QVLMF9UmnMavWqYcKRjn29yd83z",
  "key43": "546Rmnk6ZwDViT5mjnaNK4C95rgr4mGVPW2hELdqcwmAuu3p2nREx42HfyRdYDTAm5fqYiUQRb4ANj1fukHD25mD"
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
