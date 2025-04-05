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
    "4aqC2nSMsBXwddSPuSbGCRq3t8c3yfackrzDRhW1AuTUhdxCtniwJ8eA4PGUouDDJ5NJapaqbvTkhuMjtX4mfyhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p8fmQt3tgNZxrnLbi9teM1Rbw2P9QSRZGnf8zinGRFtRpJyqXc7rN6pWZjezM7UATGSYz4ZDNSFv15M38ZeJHUs",
  "key1": "3WFxa3HjuHGngo1QabM83QPgZBt6SV7fMoJZaUHPHTUC1LJ41vuJdeRNB7Qx7SS4BnCJ7ym7xr44QNSAy1bJLPbo",
  "key2": "3ZTJSn7UeUeP947keXFPwxECgEGF63XrUHVgGLpd4otY7zrcnC7XciYCzbRXUeiB7fVS6LE8A9eAAw5rD1c4421z",
  "key3": "5azoTkN7XP146DH6PRFL3fz2MaVTjqCyUk6d4DV3qCGFCQpUT3a2MrutTy8EEMugfx5hU29NLyBoeyFGwFSywthc",
  "key4": "2STGEtrnJZAo4Ym8buLdoSFzoQuZjuqizL2XXpuxbYGSjXKUThy8peJGAG2QVYRNotymGuguzPp85UFzerCS7pB9",
  "key5": "28y8cjvz8rXhPbymj9VBzGWANG4GXpnxEE7pKxqou2FRjAz4pDisjndy2t26NWNT5prPUVDW1BW4kWPmy2sxNC8Y",
  "key6": "2D8qhJHbn5XHEH6MRi7BHvJCJwbMqrHZyvLX7eLbiuqp3EbB4VBedx873ewSqc7TphqExtkNwMzjJPYYMY6C4caB",
  "key7": "5xJbvp1jxB5nDs9JU3STAWSP8xbFGmpPJGHZkoeNur9QGpSg9gxnCQoVz7t3SfxVcaaWRh1XtLgMQcG1UeuNKXDL",
  "key8": "41M3Rosk6mEizA5j7gPRrtf7VBBPbqx2oJqdTAQiC5ek3gycbtYQ3qmDpiLAw542vZPGUY3vbemHhaS9K81XWSgc",
  "key9": "5W5LT7gNF2JkcjkJsRwhSddq7y3K6QGZgMM6mUastroaPBoTzS6eDkXT27qikT59B8K7zcjjP3GWxJTYrX7rjGZT",
  "key10": "3YyGePxjwL8YmRuFZR3f69v7p2cjKk8a5pFVVWW615Uh1P61NR3HEarD8MEUQ1tQdTdiKCjLCBCEHEBwobD4bvpL",
  "key11": "v3UYt4uZaYzrXpu2ufPnioAQFe8LpJAaDEEVQ5chdUvZjqGhpvXJeLjZfgByWgV1b36JDy9V2yApJH92HJ4fLDR",
  "key12": "3scfmzpBfwF1noP6EdqdYByioqMQqmgFHy46U8VqzTwqD5LYeDhFdjBvioZNkSBK7A7LBQbsDQwdx6XRZLwJNaBs",
  "key13": "2PwziWXK6yGzUvqPXkxSub6dCZohayBm3XiiXN6UbEjrDhHDdrvXwXF88okqj3QFAc7m2ZZGvmrqB8NJPkoqFvRj",
  "key14": "pu5iDb4US9iTBRbkRP4tiURsrtHXmBg7sEa3TkALgoRzDY9qjGDVLGap2vMBS1UpNgyfhAUz7E1ShooZGgAvzE9",
  "key15": "5LNKSeVKZ5aUknX4DLmt24ppriPTtW4b7o7TXNvufJH9vW7goFBNcqd7TU9pKJz7vDDF6iXXXtVmYT2R3wZCQXyh",
  "key16": "5fgWSxeinvivU7XjcYASvebtRnHqaNhNzgdKs9fPEf4fJaXrSUFNdaxQg4nWA84X6SmAGXhoxvpM15xqqVSLj71i",
  "key17": "3ynrgKPPicjw6NT4FKk4K5EdDtheiXndFeopzRqfD6JGYnGzxyjF6i1Z5wkLt65ZRoTa6ViSDjjRTJJadhZSfPLJ",
  "key18": "4DzHnw8sHUPQpqSc9fxDBfQ63VqB7oZES7rpqFypbAtgNcWojjKPnESuXD6K75udhmCvpJq2PbtnNC2GSeoaabzh",
  "key19": "xdSJxgqKSaTcjbYg2KARV2BDpDY3oJq4MytxtYqMSA8HkrmWWizvLERBrDV3FStUmDMXF6cJXPJ8YDvMxyZ4f7M",
  "key20": "5Sn4fZgkPpnTugmr379pe82z6jNHb1aLwW3XEi5ArRVJHRCd1tUoVBEpEUsjtuDErBoUBkeqkKJAQdSkqZbpuFST",
  "key21": "1V8rMC2xF14xLCfkgo6EFG5UwV7P2NhzLUo4Esy5vBnGbC8aemYCiunisbMN5qMAgt7hsCzZTYTxmY2YHZLRyuZ",
  "key22": "4W9bVxaJgaQ1GJShj7cAsv3962mEQhbP7uAQXuB488QDFGrg1byd549kfceUEN91hLCR2smF9ituA4qZkrHmrcN",
  "key23": "hTKBqj458NpN7YmsVJKjPw6QSy1gWYWVJNKA4XYiD4e7MiF2dZLFT35LaKghXP5Cx1WYTLuhC8WGr8GN5Lbd4me",
  "key24": "4n5VDm9CkjmESoFogGJBJGDjMMLbQMaGL56yjd6MjnDsehJei8YaSvzWDpXti3y4sMikNvD5Ckp8F4e6Vp6mHkTP"
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
