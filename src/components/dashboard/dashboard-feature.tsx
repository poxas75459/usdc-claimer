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
    "4i5oRcixopUzetnzYDrUyifPdiFDFvdq9tG1E81xLMtAdMTpAyzVF4rpUeJ5e8JCcFuhf6d2UwpJijFgQWUBmuE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v5bgeEXQugkK6CVXKCgo7af6ZNqAYaWd4Bt11Nm1vQoDW4XjrZ2hqi5syJgG83mfFFFLskDmWAJ3LEYhrXqYk9L",
  "key1": "t6w1GRTNQU96fBDRKf21xkqXGJE9q3fFQF5XMAe6hTXR4EDzafKKfpMs1W96cdMzB8GzV8uipDnaKpmZxgq6ZUR",
  "key2": "5QqrjxhrfKiSHqUozQvJb6vGvWSQMnVY7WHwhpMXNQmx31HVcLFAm1xu3ADAvJjYy1QKiAJaRd9NwV7kvEXtnoFE",
  "key3": "4TKwprbeMxXqrVydjhMnzrd31ceNig1iWpkccgHDuNxL4uCCKUpKR6YouarB872uNA2nWqt7zdfd21iPdcYx4eqU",
  "key4": "4timtFMVUr8BTo1TzDsd7xR1Zet7hfVwicKSmFGDfCEikfXUHjQbhpKUWYUqppqcBXd5nCRGEyb5yZriJJbY4xns",
  "key5": "4dQds6vfdNV7q4XGFeGoqTs2WikUBEDFn87ta7gzhvYEXprxnFxnr41KpkrJ3X2FPKJ1gPHtfcFMAhX6UJFVQn1K",
  "key6": "2zNKPqVTVW3nxwZ2UNKYwd9x8TbAtRCp9tNT28W9fevztNUm41CGHwKzYS5uVZsBL11mgwSQdrkG9U3ji2NPKsV5",
  "key7": "3TD69pJ1g8uhAT7HjwUUsiJBRaTyq5RUnGNfDuR749mjSMr975zqeuBTDvUGbraDDF8sYBTAwrbD2bA26EoGX3gn",
  "key8": "2kTyXxPEB1eGkGaNoENrpz2QtZU2kVe8NnPBTcMJpqGjracSNAmQbH5iKrDPhPZsnjJ3K4JuVBMqA4VyCaacnTFo",
  "key9": "2CN6w4R1PafiGb2j81CrFPf3GA8vXbYMtucyLRdQ4Z8zkmtXQZLpAK1aTwMuCJcBuabAWpx5Cetamxqjr9qHiVjZ",
  "key10": "3BUSUuKeLaXTaheiKjAivmgaCjR8dkm7BdJ19PwPSSe7yaMYsRJEz6n1KAwsnmigkuhAa5yUvyZVHvs4ZAoxPRs4",
  "key11": "2o4DmPBLsUxfnge2mW1HmYeASJ29SDEoj48F2jVqANDtQ8d3ypowucJbdud9nrYHg4X56uDCatoyi28r4mFoFgjQ",
  "key12": "4VzBG4HREV9fh3qPSSjoLcjV9U4CggR1MVjqWoPyd6ZLpheEWXndcpzuBeQgdKef8vp4HfiDEoqBWU6JAaUc8cPK",
  "key13": "57s86MqwZNZhscSyRZzytU7HV2JFLXRs1ykt2wcEwq2jR3cv6rg5xCVhBbwobE6w7Qdt3CS654T6Wbz7tton3DwZ",
  "key14": "3SNDnF8eTxmQCQGV2rRPW16ob8RM4xYzGPXnG1186QNd6mroqkZAxajqsg4LqWrnGqmJVtQ8dC3dGCsfDuycc5FK",
  "key15": "4thqYWQp5C3YHKWes8GDZUUFov3Ty2cqEBv3LQsf4MUo9qKYjEBkHrhYqbnqz9zF29S3YzF3pgZTF8kL6eSGVh4H",
  "key16": "2rL7MJqHotDq2umCkY2kGSNSj4R4R6AKTPvR2d5rZjqYNEicwHF1xgfNcjdFB5pQJ47D7R2ib9Hp8PmTZa2NiW6n",
  "key17": "2ypymWcghFgTTg6aH9F4G8DuPnz849ZU9Pq6k3BKwm4Mde2S673gbZjdV1kGyb4kw2Y6yWJnYnopNVttJ8C2wrCv",
  "key18": "2Ztoz5AJyfMEbF3GtetzMuc9KtN73GSrb39jbKZS7WBPsm27crvWRFmBRJxa4wxGFNcuSSZujuzsb6twm1oW6C9Y",
  "key19": "3ziKvnQx8os73Cb837oDgiPtMGhMj4zKKQWDFPV8nqCfGvkULe2zaVtNkDrhsKtfSy1PihW2uNyEq9GTLWhp8ifx",
  "key20": "JJbJTcqQw5ET6Hsi6m4nqc7hpFZknWVbrrHsUWED87sStAuE9XyNRa7F8GAKnK7Zt4cp6vZQwFqqhRJfCJYNqBE",
  "key21": "3JzbxxTsZqJVJBeYL9Rp6ucR53xsGRLfDTsubp7jrkw8bLpozkUPJAbHgsf6oVngND4bwbLzaKwJbtTBqcfRmTrn",
  "key22": "45ftNzNmesaRWeWosBiq7u65DC2XjkhXkzF6MMeJfmTNxmSTUbk3HQRQnofaXHGZtcDCwcbNnrZhZhB1ooCW3txC",
  "key23": "fbASCupFh8yb5ALGs9dbgRsBT1FPiGTTaKFCZcHMc3TNUc9S2hSMUdWEtp6cPv5f1GbwvS7zSo7cpY71UmrcCHE",
  "key24": "NNFiErbX92tupaFkZU5EE2zguURVY3FtN389DDXxsdLyDovTzW45MzhCQnbE7pXBLLQgRg8HASBSVFcRPBvgKQL"
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
