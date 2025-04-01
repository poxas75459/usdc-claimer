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
    "3H8zC3va9BEaYJfynxvX57yHZ1LNMyPrtRVKAzMMtpR4oNNb1wtxT8HU46coU5wrTTHnb2EW4NFgTurMfNbFUbL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dtq1zkKrxe1Gr8KSDd77Sa2uYiwozjs95UFUA5Lo7pBEzrr8cmTtoYPXXswMWSt5QGqMBpJt8bvNjL7wosP2Vk3",
  "key1": "2v23uPCPVgJDKxpa6WdDhH6ap9vDfa86F3jc1QJRdqpcnayrNktWrZ1yqo1tEf5WeGpJWXH6tvgd35kVux12rtba",
  "key2": "5dCvsXJcP46bY4Zjc7TUU57ph5NauEjpcmtJJBAE7isSqRkFmkiVnZoKmUtHy2b2qMwdXYMntRcHRMzeE9kJjnMS",
  "key3": "3oRX5FzTeVa8R3nk5SV24JGSRdoaSzGDh23mX6FD8FeEpgHgTnas3HPVPzm1ZQFzUdr3c8tVmSu11Ca6KNXygUiR",
  "key4": "3GtmUSVaU7XS8yJHSuYsfHWwHxog9UezNWAEGxp7ZxqAdL1WGPiqJZwmr2g3aMqyFKDpCToyR2koqLbBAezSspci",
  "key5": "2VFPQbR44wTUdfnSapJMMZAcjRrYojGfgF4Ai6RLSbW6a2JzF9Ta7kURL84kSeTUqD8Sa5LfFjKmpd6rJRj6beU7",
  "key6": "2AY6Ya9szxm4xBswpYosQH2pStrt5rjctnMYBpfAALAvC4PxBRpqdsoNBpRmRBRfxR9sJqVisw8uiVitoPceod1a",
  "key7": "5rZGTYhn8TcCifQXK3w1HjMGPJzWChrSSjaDggoVV2xTqWWaiVo6f57cTsez9rXYcKGN2p3PoWseBC1N8hDMjgTk",
  "key8": "3g55xLhFuHpHC2EovgEgp7vuePNpr8bKgZsxy6VX7zy8r5EYT7EY3fL6mCoSSjSnJodRc9WZyZxGu2Gyt1tpTQbh",
  "key9": "3sSftDbeZzuQjg3yePauRNmmdRSfT8eyfAP2xKg2XvQ8MxD8qMPcqEsqLkEMBkcC8EWZ12A4UBuaULvhUHKB6CqH",
  "key10": "3fdTAjVBreTRsAfaV3ZVCtoAsTyzCmonvwGJxvZDPadL5o3hC9WHdRf5bMgTUviBCEyUVZESwVSeYTh5bXSN7HBV",
  "key11": "4pGs8nqM2626GfvcXDNBaEkjpFxzjZvFAGLznVWwmgjXF6gLpkx4q7et718Uar8unGjHsaPF9uqrgeCESdcPwTuF",
  "key12": "2XcbArRzcdmx77KHzyKg8fYpZN8TEZszD1XsWLMCoHASmPLMRvzC65Xg7FzhPfwE2gsTVtFctrYH3Sri1iSHrtji",
  "key13": "5QhFyTGcXGJ6TFbBRUJNKM9BiuHJVSUsgcX8KUqKFjoeheD3kEUhskhJNzF7EV9dzmQohTWftKE2GfGMV5D3Z9cx",
  "key14": "5d9tm2iwgNS27Rz1GEihDphPbwWckeqxKf9n2cDTTGaZJgZ3qzDdMa7HCyunVMJgtdYcGgbvG6MdbPAQVA935QQd",
  "key15": "5zxEHXnZiAgHQahmnA4cnBh8SMSLXrurXqw9GLKUSgrbQyQNcDd9XzDvPgxERWpLDcf3Eb7WahAFHRP5KNxtB9cQ",
  "key16": "y32248ZVmQNb1tbYJQZUCFcnQHfiDVinQ1tMVdfHGksURDfaKDPouwWawuCGxfKMzPBYnRLYTcwcZHNMg5jXroo",
  "key17": "pgas6W6j1NLH8cSH3376rUd4qSA6HbHbxNXScD4jPff2Xb8FHjoCewTa6L31PTde4QpsUwJnu3fmJf6i5EdQN4j",
  "key18": "5rSQs97ZJT7s1bHtdDHyhfq3KrVvg8wZ8hxh2nh8rb9S5SbTFrC8wzzM9j5cjUzR6gV9zkW9MLxWPGK2RU94aqex",
  "key19": "2HpxfTkP6GZmAub9yAa4twbRZ1fq55wpR5i8T9S5gpQS9jPDJPKj6pNKxVwar6iX7YWxc1XT7WhsUu44jmJfEiok",
  "key20": "2zCHTDpkTa49BKGnrbFfZpkjD5SkcoUufs7rkwVMN4rmSQ3d7mfPfqr9Swf7HGNeHKJnGeiVvksJSriGLmz7jD2n",
  "key21": "4GMagMpsF48DNn6nZqeygMytmRGYUS6VcPMwZJ3oFLtf4bf4kbScrXv9G3e1M2t9GPNBJDNNwNfKTXNTbP6PnoXd",
  "key22": "2JcYJNWeYefmkeo1AYYMhx1JJq1juyy5v1yM7XAbaSB9jyjSSKSpvek9zKusaMxBLRqAH8SktHo2xBN64876ZvTv",
  "key23": "4G9sMoxykg9ejpEegMbyr2KtDuByub3YjJhMzHnQxrnJ5kveMtaDjYzAK2fyFu3J9QyJLAChrA64fKztiErGdkSx",
  "key24": "5abZLcwigzf4usP5FPjKc8DAWkmoG9R12uE9PruBLhxRMZQQxuT4TENEbdxHTzXCWnAL9BDUzNqXksTAxxr1Wg1P",
  "key25": "7ecHqLP2o767b25Cj9W3X2TRwtf6rh54EQurjoRxFPMBpJgUGVnB2PAVGD8cBAQ5DatTYRUATupDtgc5paKxtjm",
  "key26": "vaaeAHtruUcEcvAeqZF2tinnrn9Gne8dS2dtwmdSEK4SjCFd5mXjcbrF9DFxpxfx2YXHLtANMuPEBRmkCDyoK8d",
  "key27": "33qB39UBzrPDNPHQGD5Kr15DNw5FWKY9AESmjdkySxvE2czKtHr1X1JfVfvcnYgTb38cw4i3VnTBeVDifnomZvru",
  "key28": "3ebyxv6PhdZxQLfLmHuYvQTiZGmrwxrd83c7hV4w4TVtY2QLdsxZoDuLRRaSa1fwJH1WPLs1fyPCzNxpbkrAESa9",
  "key29": "3fUS417EzzuesiANZuR9e3QiFnCBeNxyPFKCzqaFVC56eH4hx3Q1tb3ZDTN19ecjdc493j6631WCw4kHKgm6f3Sw",
  "key30": "3Mqir7d5a6wnNR8kPfHURnx3J3CuABdGZseC7YYouUGtjCPY9zdoPYUYg8X99AJhraBRr597tHVCV81fqxxNQaMY",
  "key31": "5YVb76BVdaoxtw695rxzT3rKGKwpfr6yVVnmKwYRGowfUh4BeAjprHXGWmcXgmnoPcDW9KgDrUVPuAjUcPZVxhan",
  "key32": "3EoXaGoDYeQzwfyL6XABQSiNudaydg6xGkeoJqsCmuiKaDHsKt7JdHkuYxbopuUAVtkBT6Hnmi2TKyWteBUoCygB",
  "key33": "27hEYNPVvsHyKyre7gPhWTcs9STY7Yhun2ifoydsNfusA4Kxo8Wu1CKzF75fXNFhw9r5hV3PQyr9FJzto5gFZP9t"
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
