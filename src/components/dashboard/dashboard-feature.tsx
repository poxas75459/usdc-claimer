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
    "5dEZBRydXSNKjJ6wnSiyduYppDrQThgwpw2ubL5Hnb2hhGPA96hKid4aH9jN7Hke7hKhJxkfxVEJQERGU1eUqrTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K4cKybdpzeQsQL3yPS6rAjwvwdE91a66rgewhLtmvAdRhjBep614QVxJbqD6bx3PGqc7wMJywex98z9Tg98eNph",
  "key1": "3o7ECfoitPMULd6TTi8sL3JiyAs1cJszeHbW4dpL5aPJnHEWx7Bcr93C6Va2hs5pstN1tNwRiGQjdLZFbNQACS65",
  "key2": "2popxvugzrkBy91AamDZnzenNzEieoHpw7JawCsbR4KDec3CMRs32w2pwNGWPVXfiL1n9dJzC8NPyMvHYNNtXFuZ",
  "key3": "3kEr8RjDRTHGNTzunxDGWE3ad7C3y4ZMckPWzRaXLsaWzaq16M8dtjQRBC3FydYomFcKG4VZnKJR15PoqnAo5Viv",
  "key4": "5rfdZj4HSE6rNTTmGSGiC9Fha8sY128PWsKs1p94wxG7UJJwCKuXqzNhxFwkUZef7tQo28bpqC4u9Somd5RWCxNU",
  "key5": "3QRqXQRhsjeYdgFj5oEMp6xJzeANMAuZNk9Fx21P1yy5ZFuo4ZdUCNbHVLFuaKN9CYW1TAYgHBXavQ3AF4BBedpG",
  "key6": "2VLd7dBPwPDRPwxXL3eJEPqY9rjFcGBB37AAYeJ2kYUEGr79HKteEaD6Jg1ugcKvpo8bmx8Zezn6yLGfv7a7XWPa",
  "key7": "3RR1gypVz9QKrYBYHN5romoyp2u4WFnQCogrKdYFnDWfoxznhPF9a3JZHy6y7asMaM7cwZHozfANiDto6UgMRS3Q",
  "key8": "5nRRZZuYPDPLcq1hyard9mH9B8zosr5AVJipbuC15r4v7DEPddBJgwWD7K9x3JYf7HmnVoScPS51YueQ9k195GPE",
  "key9": "1L7cFP6ngmkT5SaCxfJ5n6EdDEw332v1ddYfJwWG2zQApGV5BorLXTy5a3iCkzVHQRcPs5Pu4XVg7FAWmy1Baz3",
  "key10": "5Tcrqd7Yfx9sxX9aZKLBU5KTMdavjiWU7yvbFMuEv782a592pM5GfwHtFGaQABgptnkoh5oirubFKGgRB79qtHfw",
  "key11": "bWzJzgPCYZ8LXojMxFKhgri7kdqAvUe91ih8CrHnZVDUZWfyqGMbfmT6Dqitupqn4FyPf6GtKboAEdC1DbYLprs",
  "key12": "5HKX9w4uknQBzAagnKLRGNCSWY5fsg2fa8nf5aCx3YsLtNYLPScA5uJgK8Jbh7SqzHDKkUSvH3hWPfkzmBvWHkAm",
  "key13": "4ABTcgpnvv5tV99E78QZQpTMNaFDZcrDNeUX3jfbBiJMTvfNspStB3FUGEXjai5N5LsyanjmxLtMi69ufrQcyVw",
  "key14": "582Ah8TbhS1kLAPCKeo938pK2TRYu38FV11MBUdtVrc6LXtxq4HjoSQUbstKvzwL3jTa9TvLYprPeHwRP5EzHURq",
  "key15": "345aRwhKa97ndaQWPjKrnjS73gLNnZkGfTC7u8K6sVMudXzy7SEBFzZT6yFbzws47e1sSy2BxrtWScgTgYj8hj3Y",
  "key16": "4eKt8ZeMK6MnTHrYA2bvgzaiDe5YcGH5cfRCeafZSX8tEGxAU1NFySDCs2qYYoTLLnENVjRhCYToDxPo5DodHx3t",
  "key17": "5NrJpaKLS3mVfTngRmLPvSvtRWENCYyacDHrHNDQcYVBnNBQjuz3QjJAYkbqoVFuFLQYErNGEbEFAqfeoJ4QCxpc",
  "key18": "4HZs1dJbMqB3TzUf8uufeFitTDmtUSntVzsMCkkpAHYczd67pJo3HnbS4kbbL6F8r93aMvQKuzXy2AY1gPaAr8De",
  "key19": "3oPVxdYWE838A3Bifwh8PNb8Uj7qLayaQLqSKN2XgDF2757uPmrKDwgm11wCtqSNZwaRKwoJYVpmHxspVLj1WD8V",
  "key20": "51vVbHnayQDVHXnvKYXHnNaUjt2iKACYC2mfhEDs53H2RyAjtAVBPe4cMvXrDaXCrSMDBX5QZxX51oxCcDUmr4Sp",
  "key21": "DTdxhh9bHLDWDWBg4RyJeenHcA8nU17oU5tSKzfxuYXUYoxN1mzJ5F43dctaMbVkzC8qhde7GTLnT47kn1nwJgi",
  "key22": "58YcnaW2HQKZWmxjGo5zKfwmzH2rPgfQ2Y2WvyWjqwR2BGkGSjvUmTofd9zxyH7LPhHBK7SMv2ihabS6P4ozYQMs",
  "key23": "4zkecTBJRFrnLQSSYPw7fmXYvdaD5oyKbdrMjEgY1s1dGvp7nvqMFATCxAfpFUAk2ASzsEjFNo7VwCe2tENxhwWc",
  "key24": "K1Vbhij4C8BcLECh9mkspVppX34uaMHrpSqPL9JLMnt6Bi7NGjrWD18nMi5kD1pCryXPavYk91mtLbBWmnjCqpD"
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
