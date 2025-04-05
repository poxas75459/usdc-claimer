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
    "5LUZkVGjcoUb8AumPgTDdVhj49WxrB2fm3rUCmsLF2fcJV8J8EaCtXM6XkLFtbYZaD1nJXFu7M5wRq8j2udX2nzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K4B3HKg4xTopt3sxbN2oSQo7peQz1871Qt7bNQ7FgMqdEQ5Ay1aHYS1K6H2RX3nH2EkKdLTpZfyGgypc8YURbw5",
  "key1": "MswDEtXWfh2WchVrQ7TLKqRyvU5LonPgB6r8XrY2amMxiBV93HHYPgzBtYv57Ewc6RFq3DHnoSagwkmph54ydtm",
  "key2": "mtEWnZJt6GMkctTRh2HugQzSMsySsNYBaGb27ctZe5yjXbid8VPXy4MmMZCr2sBpLbHpGsgDCb9Sjav7amP2zmx",
  "key3": "28JN7a1H7vXbC9ZBx3FMC3rKmcweFVvivnNJ9Remoe3NzXwk8SbZpXD3RQt9VvURoZk8agCMvfdLknVTJFEoX74Z",
  "key4": "5vRnX4aQtykmVQB34QMFEWg9JNBe2oWRWaQP6TNTWgvzdNWYDejTjmFTEgv51PPSWnwur2jihARcTHywz8futZzK",
  "key5": "YZNrUvfpqosGpHn7PqGrM3bapXqSgTHKR3mcZVJ99MJnYA7gbQqSeiiH2ecg5i14iAnzZE1yrsGbPpkYKfP6Wch",
  "key6": "5R2e85ETTDHHVfgQg54g7mckenYcMNGkpwKxa9gAieagzTBe7JR7tDS5upyE4udu8QuCPnuDJx2w3YhXhKd4sHKA",
  "key7": "TqgxRkCzy7M7gLQwSaupRHKRdRAqynbGqgijPPPv4w59FTfTtdamuK8wCeS7LdQwJGsExzh6WvmfR7W9M3KPCjA",
  "key8": "3Dk9DPvpvHcFRzVJVGSKGSTQ8J1SGoguzitRMy9Twk8jK7GLznr7wqrGb6xwUdiFxJEzLEevqtea9Z28Spnq5v7v",
  "key9": "4T5aMC31CmocqViV1b48GFPPgV8HtcHtyPHJxVubNReRMH59bq8quoUH19ojTQfYytBRLi2AE5TEpEMaHbEs7Fsp",
  "key10": "5cxLzc4xPcGEN9TGMpWpV9FgJWhygphaHskypV9JPL2Ak1kasQk48DTYgA79U9mKvUrZRcsK8RxwK8w2hcZrjqM",
  "key11": "zkfGVdjs8REMqsVKy5d1jeLhYQHNhqAtn5wsRE4PmsPWzqMh8Pw2pi1AkLYPJFtmBpk83pakhtDniDuuZMXeYh7",
  "key12": "2XTWz8vMs3FaCzfJvU3DhkUGcjcumimaxF8k3fFjkVDCxntBGBxEQBaF1mPuHoqbwF6SrcvoB2QNoNWDz3LCxgbG",
  "key13": "adkgj7mrCAgXuuV4YiEZ5SVaGBD3Di3FsNBWPvQfPcAW7Te8K7StecJyUoKJpei43UavzCmaQfctzqVkUoriEUi",
  "key14": "2G3KDKHMHeVu4Qcqyvn4BeWQYQZ3ApzP8wmtbus5igTQMPvHGAddfQfbs4xNHgkiDNBfUMWtMRUNeXdnjvJXUuRY",
  "key15": "Ac1L9MGh9iyDnn1uw9yph8pQDPgFwN45NtE726XvLwWffZLguMepai1b8mYsC8nXQMQgFV5Kb1FT1gAfWA2Aodg",
  "key16": "3oTqEiMvYA2ehycCv1LEkFbDeSiqeaC9mmLt1h47MPMgHGMBVCyhMne5uqyh6zTMpbcViH6nAUhoz6p5We8aYMP2",
  "key17": "4xCLJEZ3AYwzC7mMDXGFJmA8WRAmYPRHQz8VtaRpN3Y9tx8HgXCdv9Cedt2KbuLVSMhGfFDqHzqyuErWQHY55CVk",
  "key18": "4Yw431dTKSAUfbLCUJSvRCpAfVs1fguy6AeDyvScBu5L7LrLD7W8qbXjMy5dagPEzuSHWHruWKqzVdRbtUqtUYnu",
  "key19": "2UzXMVmntT367DDtpPZYP8NKiDWEQLeoAfDfBfZF9SE6QcEbFhJf6TcW7gXmZui5eDh7NhP4CZU58t11xH19Nze",
  "key20": "3QaKgp8U1m5dxRm4nq5abgPWRxgvcy86aojymwsjwtkXSZKqmmE5jNAVVbwn4LDbaUVv3dgB6wNj8cQWJ6bhguz4",
  "key21": "Mq7yFQbq7xL4Wu6XhaFK6USVRxWGhvP4iE4QLmXyPBKMZAP8Rfqb9Z8FwNTZcaHhYPE6SS1WH5o6t82VCppvez7",
  "key22": "sGDi5hKkTny7928SmgV2b5t8Y5ggQbuedsALsDq2CcGbKFTrCQw5CrEcfw1kcirM5HxLJwo1c1uKkfNsVGTz78s",
  "key23": "2aZ5BFR7zxLDmXMAVDw7yBjRACTLiP2XZTghWsGQ4ASQKJBYzarLELwFAjqQUPqTx5dkAWBtLiWcoqW37ZcLca5A",
  "key24": "4QZ2gwbLHE2wKXf4d89Krvm2BVkRTMep7EHA9KenTEAEy7qUMnYrN5wQwDBAVJUGNaTWMgN33GQCFxgN7wYmghPi",
  "key25": "CzaMqhWDxXcj9XtvPx32NqYSqD2tCroZfSWUWomyrusDAFYxvQyQGWjyGCeR3ZcaTE11a76BiJnEi5YyXuHorMG",
  "key26": "4KqYU454WNAVc5nYqT5m59daFv2MrKVBYzgSUz4mjNbtAyEzq5a3Y8ynwrU843hKimEYjy71ZGPAQKqiyR6pXpMo",
  "key27": "4qguSpr1kh4Xtku4MBRmCreLeGdNAxUaGyvt6jLvEJ2537z5DtADyP8d4qZ5bHehQevpCrAmTGy4dXVZu9TEdxPV"
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
