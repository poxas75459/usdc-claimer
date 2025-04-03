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
    "FVgQQdS7s1dVGz65W32WSpErCn9hLV8XcgNCGV1jbMV6nUi2GnQvNCbjseHfeLqv2LBRovGrrAci4yN6rymHC4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47QMcXUjRCTswD7ZmoGqVDoV1BoANaxcxiU73m17ZXE4DHzrxQXh7E7Ls6tdppaxJurpLPo9PjSkZwKia8beQX3z",
  "key1": "5KGWLr2dwhKRWiKyAwKke8egUak4CdmDb7JXe4K8K7pPPo4qnQMiMEu917pUvfX4MbxkG4kTc11XjdJpXcgs8zSY",
  "key2": "31x7nR7siqWHeytrht1Pv6JZNj6QEEVReptmSXFseN2wQTKgxKG8Eh5uZpyNs6SWwHtcdmDLTHtUAtEAyVJGg8hs",
  "key3": "2iafZr3MSLA3teY9Pes3j8fbNyTkhLYsi1SDUEDmHmySEZd5TgGfNK4MPaQWTRaMTVg942ATBGohY2pnvcKfnwZj",
  "key4": "5BPmph1cdQc7NtUpyB31WwxFJrqeF5RpHcFNatjpae9pZKWQuoCqNiespt9gQavKekXTd6m1advqtutU7wRHLCWH",
  "key5": "5EU26f1kzJAMk2LBH2zwzzo9Gyi93yMPauhNzfqmoPb7pVzKdvRigx7UqimjXM7NshJyR7BnUrBdUT6tfCLH7gcX",
  "key6": "qikaxT8CHhP6mzZLn4xHxfxkNhAHeB1TgWqarQC1XNLbeCmA296T89E3JGBTXMC381t5RH8aVv9YB1iJGSgoViD",
  "key7": "4vbqaa2ogMTBwhXW1uaZLe1UuWaAjUXrFUC3BAdqpQeFpGtmAEDbpRactTg9i6uSvQH5xmnpdHbtqYWbgWmaQ34S",
  "key8": "4mmDjVD6eFFDNxsi5v1PCF9gjprzqfhy37z7xg6uwABeJPsf1DEd8X8ycA1ReF3EMnHPDjeVrp484EJ94xcHRQPk",
  "key9": "3BwJQsdGrSzfL4GQk1SvTRnwHGaMorCHkhn2n74ULRSQQiiSknn7Yrx5NmNEEhch16UZBxbdnZjX3o1wQ1VJoFyb",
  "key10": "35CCUk5rDZ6AdGL36xJ2iH5hjDmviP8qsuJ5MKFpiuedxDMiU12U8C9vVoNdX9FF61gDGqX3yiF7T5DeLmsUASPZ",
  "key11": "3eA8qx9T7XqUky6DZY8fPsM8vqHBRKtQZLfYokGnCSkZJNGEAVha5GxNohPAGACnWnX1kBzVmFGZeoeYVUJa4NmY",
  "key12": "4R6JZttB9wZEBAdwZtrA5PZrMMZdHc5QHmwjwpi8WVFp3vSs3D6RN2pmDERNZx2SrxjPM4eLRsmbkUefLd6XWxSR",
  "key13": "4N7n8dyibqAyhoW6c8SNAZ2xbLxzsP4FmqUrsZHgvXoDgMBPTCMXFr8bys4FJvj2CVBJhnWb8BVwgon81eyCiAwQ",
  "key14": "5c52BfgyfE9YPiapm9FA1eMM8FT1E5YPHG9APKC6oYDcEjNpxyqFFAcAahQ4dS5crzmKVFCQWHb7a26GNy5Vv8kq",
  "key15": "617Abp7Bh9GtDeyBiWUWwg78VWaoduHgKBdzqvzpwCAmtgDHxdeUEhZCC4Sry5oLBuiTrfDr5qzJi6XdidX1HsFz",
  "key16": "44S1nJJ6KBBBzgztNYbH8UfyKM3qkawWSUSLtjkKtACUqWqxiB91xM44urc54JL82kXKXwbRXQ5jnnGqAPKJC6WZ",
  "key17": "hbvStTGaJFCpgZBXw6YNpmfwwBbnsr1omY4HZjHvdPJKnkP5BWjtGMGBNvc64Nocs772Nv53dCasKDV4qs84KC9",
  "key18": "3x9wyi8aEEHgsHFdfhvVXxiMDHXaeKkqLexjAMsJ3RG7V5Wkh8HDNQs7Fa9ySW1qs7TjvSsKzEABkjTu1bjn636S",
  "key19": "3qqkCdNYZMQAMCjr6TqcMHUzfZR6FsauzCCVzB7rioDhHue2tMXwg6Vfj7tWPaX5ML1vED73w1EUU8kEndAcukAF",
  "key20": "43uZSrzA6VUD33rw8dos3um461ZEpZEMoZdNHgNkifvmw36PwMkRDR63W7Tusjoo3HMAtkegRGFiYj6pz2e9syAi",
  "key21": "5X4hqZYPVUF7qssgnpx4cfxXAbsLYBvVDooZ3NNntBdtMYwXqUcu359g2Rs9mMSaZjyEtfJ1NnDc6VnUMfNDTeN2",
  "key22": "32fmtX2Cm2kFNo4KWGSer7MSdWXUE3mrEpoEWzqUxJkQKnHASwmd8bEC4tEyfMVsfPYfE2TPbmpctBadwaqV1cTo",
  "key23": "3xHT5RJ2RATcuwftNJSkXC7ZFBiVbwAD1i1yzeXAandHcXdrDtAqnVj3twRYsU4AA6dogQGNQeon624kcAmFpWQB",
  "key24": "4HiB6UeYkXejcF7ES19w9xtkS5bR39uTHzEavNFG4hNSCT1WEohWSMTwkV2Qagc2kyGAR7dnmGLFZtd6PsrZ64UP",
  "key25": "4d7uXRg4WKZbhE5aHEiSWbk8pwRptsT7gBxxBRQ47UsS1BTY1RyGv6hwcYDpH1PDfK2nbUBLngiDsSM4EABAweqT",
  "key26": "29b82hYDW6zhu7i639mRwNfR3KvNtogKXNkbkYbmnrVHbTo8kgC9VGDywLauY1momXwPStChz6Dd75x6NCcSYRsR",
  "key27": "4pwEysG7zKqzyTWyuaPKbcMgb5q2nTJWKWB5h7UHxqMwpNURkwQjtwS5gJTjBxCuNBtzmkAMkNkgJxS3qZVLLrLo",
  "key28": "3AhnADPLwChhfzUiBWq4GEKvwyxnCyPCrNRaSvFUyCFejQNqqixPjncBAuz437guAKqY76Rrcx9hUDCBbrn2bvr6",
  "key29": "MkHA28hrLeRJF3rEzYczbNAW6RavgEQDX2kteFjvvBkW4KsxhQvxhuF8gCpixKjY9fPFRFpA3X4E1gNaCvc8Cy6",
  "key30": "5Uq2SfLANytBjJbJt9T291QacEHfKzmm6cX4JnouERiJHTXmHhkY43qhUgc5tzdLhjDnA7WV6abSEEqLMvrAu6WG",
  "key31": "4qAtBkJc1prYXMbiX7Nirqhj5ntvPon57QJwa3zNSWcMbSDXSs6dHCpkMqBLwRnqzUhPvbSUDfbzBR5hD6RvP6tD",
  "key32": "59axXwLP5vtKZMSfjG6BMyf8PTNGdGkm3HRjTsQkAzw3L7jG9tvPRMBdA52FHkr8evs2kMovvdsbGK4DmDpPBWsF"
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
