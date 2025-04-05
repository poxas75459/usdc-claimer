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
    "5hCVUzf1nJH7jp4wN7ivGJECPeWxnYc9BEdy94ntXSErFX2RXUdxftV9ETj4D1yV8EJ4rcFGdvMi4cT6ZyeLumaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xmCMaStp2FvXGxtpsrFTLfNL5NJLK15AYiPtbuRFE8JquADuPNkSmu2NZrwsRCSNWyVFP9drw5mX8n6etxVfsKH",
  "key1": "3TMDamzEDXVNmDf7f8mVCUjfLnKpeEUPJE9QyLnAfwG3HoqPhvpF2jbxBfojJ35hj5V7wfcmAZKvaJndyGAqw66k",
  "key2": "eQ68LCoRzYztAD5t6f5AwCi4b3SvtE1NGVREAzyntKai9HCrt46Aki1AmqrvAQECZeWiNrKKP6XUGtbeEVRUNjh",
  "key3": "4vdi4ooPBR9iUMHsL8xNG7pNXCoSPUDpX1Sy598VfvdRVDBAbFJjeMDw6wDiNDjSZW1Y5aVw9VF9QT9mNJt6aPGQ",
  "key4": "sSxQE7mW35PftKVa5NrGvfdSoRUU5JDA28M5ogvMYBQGZdfrioNn1cDQQCh1Mfn4KqsxdekvSFpM3z2fP2my57E",
  "key5": "26UTWhmULZcs83K1sh9HAVukBPE3S5VMiJcth8a9HRXYqKaVLVxNmo9Zov2Ls5haYAgWFKhqRcRNDnvv7C1iBFk8",
  "key6": "5MSxNuTpjmobesrhE7heLVB5sGHtoJJseCPWNyFsTTFLmxHPpvPzCsvJBUiMHFuSkdhQZ6A5MsEZxqPrwYrV3eDP",
  "key7": "reWsReReprVso6MBZokgBFPC53LojXSBUahNpsrhF9DBAaz9ZQC7tXYHuhskpoxK4kxY6YdA4k2vqzEiXjo2wwf",
  "key8": "5x4jYWyUQZt62R2LehRnDJZDRWkyYjUinfA8aXg5nzWHhjtGraoz3Sp7PDgYeAeLRhcj7yoVHKPbBE3U34fw1Cw3",
  "key9": "5ZStxRbNKrBKVWSACygjwA1njX836pcvDhm1kBPbqtCXgAGsKAg5N5zLLk6Hj9qBmzTLTteh7agHWi3DEy4MyUPp",
  "key10": "KRTZkMtzjAosAiEa31t8U2tjiXyZqz8e3RCwaChPM1bFsrHbQd4fZZmN1QTHupzibzHU2eTbUyozTWwqwd1hiEW",
  "key11": "3fTscQKSqCqUwd6uiVZBHzLSszJyG8PkXLDpDE91QrrCtxcSvjkYBSSJkrGLJrQ954ce23VTq94XMbz5MEfXZ39u",
  "key12": "Ec6U81rJt4aubmNPV5bChiBS8b214emrUwkdVPdqJ6z9oiFHdEoJ95muP3xt3y1FpDYEb87fVbhvRZc3rWSGB8H",
  "key13": "4fCQS1cDrbuBtki5RECLKn1NABPqnhsn7zhWcDnK7ENMNqUSbdnDk4N1Ym29yv5E6xA6f5Y1di6Pf1SZCk5d5mEo",
  "key14": "5ae3JKX4kp2FsZTYonAQokAdL5iXGmCiRRzLey8gVPT9SNFfrMTKPW7UWC5qhVUftG52MQnBGaYQsTdVK5VbR7o",
  "key15": "2ASV547jdv89AdF4XCGBVTTvM2pjBXdsaNQegg9gu19g1XniX3vaNwMfiMUGaenkgW6dLRLFuUWcG9jGmkWqbAL2",
  "key16": "42u96jf3zdQUt9xPjXdtdPFMK5aB2Z2YdpHqG22u8GcZVTiRNK5Uq2LH6b3a5vEGqN3LE2qn2wtkNEESGCbRszsF",
  "key17": "4kFrmnt3B8YLHSb6ptZm3w6pwTsov8XPhuNEhffpu2Xf9R9Z9fk5PmNSXoioHumbDaU8Cn3ESQ119XH4J6pgCjcp",
  "key18": "s8p3zBaiydjx65qD8zK7Teb7hemteVzWFsqAvn81tNds6rtjWQgqoBh1odgjqeU35k3wjbGP4aTq9gkVhwYsUmr",
  "key19": "4obPY5Smiwgckq9xumLmo8qQmJr8N4CfJy2kZG7RPbBWAeYESRvvXbigTTZzz4QpzqSJWmdEC5bZeKWSrQGZFasw",
  "key20": "vE2S666My4j6V6GwW22VjLJeVxdUJPGzQ458Kfz788JUSjfST95Rd3TFjJ3weJE6NsiJhehYLgHsMvaGGyzsSxv",
  "key21": "3R5qBcAWi3xheYnhMCPM9tPxeLcufMZaYF5dpCo8dubwhoEsMozFabsdpZ7mGbZsS121e7BWvcYFgrkptdKrNnkz",
  "key22": "3hijb4SrwjiqMiU52qtutGZS1dqndsEGKbyiV7MN35ieCJMzs9DJ85mKrqVTpixjUVxg4F3hvJ1rCXz782dh1ofe",
  "key23": "49ZucwYzjKF9e5Sh6PBTzAVCYFtyr8rSBSTsFEkEScrzvkxTJNYPQLGF2KXBc1D3AKsYD5czd4wj544LK1X9xVxm",
  "key24": "2JRHtyp6dZFDft1gnc22LdsnUUg74UwfHkBfj41eJAdTN3gC5xMhkKiDt88V9HKev7sE8jhCn3U4tzncs4fcjssT",
  "key25": "3WboRq8auDx6hYbSUAbf9Xhp1y3REsx7zBJFPhaKePmru9ToxuXV2khQHwMdejyQMJi2K5eaLwCD9UZf92duMths",
  "key26": "3fPVw4SUxoZhUQtSxnDEiG2sgqCsRvcnqgJjp3XitY4vFjz5SB5wzX2tmnoBJWkPgf4PSmdnYd16zsGQsBiuHg8D"
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
