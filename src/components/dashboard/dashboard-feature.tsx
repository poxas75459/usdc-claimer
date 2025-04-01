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
    "w7M11K9NjPwWqH95rFdxp3MirZQTDRRt7uMJVMTB62q7JD779LBR7Rwp2xzo2eoTcpdmf1bToasuXxybKHQVTNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44zDaKJ6keLg8F68ko5TZzhQBz8PNG9e3xGYQQu5QmqVtFbGiU19iRRtS8KgPTfNPqcL1jEvMF5iuDJRgD4AGfP9",
  "key1": "zDQgCQjYRsmccvAZBp78ATeb3njYCYFGq7QbBXDbZBwgzNevepPoYZHjY73jj4chCnVkCCgCTR7hZAhJqipESfo",
  "key2": "R5WK77UHz3TzVsb4aC3PuNmsrcpK5dmqvXNYVU76cPXue6uPPphfxGBNoDExahgYKoasgtBVJUYahKQnPWSGGVw",
  "key3": "5oryuXpCPfmYBys4qe1vCZnMAGb1NzCvv72k71czo7VEQNHqsfeksUvR337rvww9HA9ZdS8GEisbvyrNiRBoeRqb",
  "key4": "2E95fhGmqo8RbHzKekAL1dNnWt9zPHG3uRNETeEksivS738mMbCKZtErCXBRbM5ZFAnxzJMJZSQ695ka4iC3zAux",
  "key5": "22p5dJitBk4vp9146bKae1dfCxs2yhtmSpJmrdT9PPcgqAfNpq6aqgNb3ezaayjpNuWpTBrJ1DdcrdKb5MP7rBco",
  "key6": "5kTeHowap9ET9Yo1fQ3UhjU1bSJK2K4c7Rw8oFxEVS7TCvxrZ1FnkDqpS3uZen6yRv9YufvHC4aLPEi46AJNkPe1",
  "key7": "zvT74n9rvoxMnWxRtJBfBMarbpvv5NtZiWQ43suT9RvLYF9sCSijNYKvWjUQujHSKigDu76ok8asnkqn6fVxnyd",
  "key8": "3Hx44KwpkV7mG2U22pVGr8ANEuc6zH43rHiLzk6FMXRBSn1KC64pagpFwRZL76DJyvEfrQNTpoPPSrpiqwcSxesm",
  "key9": "2vHUExfQ3cbKzV9vqgd75R2HBTXZPb5da8vbUXvP4mYm9ZECh3CWaB1C2CC91mug7PfieMwK8VZf6FDEUWjgkM3C",
  "key10": "4fL1V2nxpofHcyqm4h3Nt9EcD9A6F4dp2V71mpmhtF9FWEWEDkJY1x5HTbmp2MSeNhLEnS7Ms2EacuXUsRYAnNHN",
  "key11": "3tU9UQeF7D6DgtZcRWk3NAudzNfV2gpxbu18PWcLAR6UzhzE43UBgPX6W3ehjMxKQUtyL4GKwq5RRxfCfR2xg77E",
  "key12": "4PuJPvBm2pMumY8XiRNkH7zXfVNQAVWP229e1bYWAJxv2ycj1jF9EEtrJjo8NWDHXfoBqK8fiNVXX9xnWh1DvAn1",
  "key13": "UW55M3hoLNM7PdNZqzeg1DCHrvGkj35TcXhzKhUbxg8ecALuoKStUtutVyMowUTBNhZeYqRiJYQ5U67P9XLaC2P",
  "key14": "5kvCWJZoB2e3rzeKMwQ5HZHFSPekrEeUPjALoz8aQXUpYtvdbk8weACvqwTQ9qAfGEhbQMngHWvGWie9b6dcoeHG",
  "key15": "27HbejAScaQcw2FWPvSwmuw8Kob8XLEs62CSo6HEWwypyzhiCGzF8eD1f84MhKkkTAVkGdqFVvZJ7UzkRYB7jFAd",
  "key16": "5SV3ymcp58brxJaNAr3rbQCgYUoTfZrEqSzwTxXL7R3JNehynXE8LpbeagEg93dx88FmyQH3LfR2N9mRXV7Usp1v",
  "key17": "3KwADP3EQWkhSVd3awQZeHD1QrxemsSrD6ZbABobYVoTr9ZdQnbH2kvVVrkGopitKbXjrdJPhurD9TQibWq93E3Z",
  "key18": "5ZyQ1Ee8EmLZddT5jLXAVGwtvahrE2E1tWCYcEaXUEGzfXCXCo69PY3wcPDPbLyiKbAk8rS13e6eYFJg2u87zjVo",
  "key19": "3dfUZ7m8LmDi152UejFfcTvDbd6E4xr4hT7HQ9oX61N1tiggPCcG65nm7PANTbjf62obDahNXLoK4g7kwbHrs9BL",
  "key20": "3bRh54wgESDzRq7QwpoYJ1or4Ep7Z9KFc3xYwYSTVjjVaLvB4RnsKuqYWS4TRFEtmrDSiEZXAzgPgqc8LQEHkmrK",
  "key21": "7pz3rxSwXV8KmEqgxwxGsNzQRwp9pWf4jdGHuhdEAB5W7qoJAQnp6KdorwARKyEtHkXrSSQxmdPvPsEpeLh99yb",
  "key22": "52QBGk1zAeMvmsKTqjT66BJY6mX1SFeujfWSeqxJV7EWnx1sexc7MVXhnWSKyJHZcqWgZJLfKNkfE3MddH9cyWbT",
  "key23": "32BZ8DnAqfR9uXWt9biXh921xmmu9FXxoJe2ZDkcQjeGydKysFnwLxmnULkQAuibnBC6m7Ri4sitmK93ZjPE3S5g",
  "key24": "ErEJ2CdWuNYrJ4tcHJqYh4DTDvp6AWSJeCCT453atY25UneCrVAhE3pyP4A9gR7RHYcbarJX6EfzVko9q6SBsuG",
  "key25": "5HXBZE1V3VPktcEMEjUb6dmtLYBpBnFprgoLdxA4kfZiYKh6tKT4qjwdjPd9T8SbrBmj1fZnFZALYcGRMdCFrFmo"
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
