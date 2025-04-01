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
    "4cjBWgArqH76sxySPaGsqDXsjqWcq8Y22aaKZ5jpvdczoTchGs19R2FLkdL2kN4fGgksMCNLTiWDB5BMwzhN6ELP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gfG9djZLYs4xY4CPuH7XaJKSMqFytottCtfqPXJm1T7DgSBQ7Zz1F5Dj7nG1eHusFkLYVB8pYpMVKNzqwPkqNaz",
  "key1": "53JyVJeuWu9A6ZNfv6BzsmWnG562RTHreXa5JnGVgePdgJt59woaJ4U66fkeqpAf7Cw1ViUNZYKZ5atWf1w6Sozs",
  "key2": "3UX65yftiKSHjeEmnCXZpkTwRtwQHurvQts2WqwbFRn1S2q3XwU6gGYAYFFo4LSauAAkuZjw7nPGdkQAy9xRK7WT",
  "key3": "4SdWB22E2fXNwVrRcuNvHrcZgp322CJWiy1pYTXs3fveGhyc7x7K93FkJdFtspG1JBDHaCFzcTVcMSX9rAcFmNVR",
  "key4": "iwYLWJZuqXQkMza9RP8Dje5oEwGGqVs32xmSsxwxdnR7R4hUe35RrwunTEP5c4SVER63S72oUDjNiP1xThgm75L",
  "key5": "5yK6VZidtkm13qAxSukV4HEUF4vQRE4LcfZjh8KtSNuLDK2Sc1tqzutiCy8xNeAtXh4kCCUpr46WxT5QFWU9ujhG",
  "key6": "4fEBwT9ammkZ4wj9yVXzM94nMTNB2nNcnSTNhQLUhT466AGYLGnWJDwMGG5kSvWCyhEeJpTb93983bu7hZAY9HUW",
  "key7": "4NmZJWuPgkApRfafkEpNJ6hwKyuPJhz9fSaXmneKWnTFMcGaj4VqbgCyrUSUfberTjoL5aXz8RXpuDSp6GSXtBAq",
  "key8": "5VUGy7KuCnHNVWTp335ALZJheFcsnQphBJ1iDCzLnmtyeHyzsagF9VLdXa7ZvwxLsuneE31KgWo71RuoHNrpMpxA",
  "key9": "4yzGWaBukgvaFaLhMdLGVw5fgPJDKH7izakZMdj7aC9j9G2nnhx5irenGFafbdUmRFFHv1H7twm19nCWuZyDWZBL",
  "key10": "4SM9T7ZfrSyfCv5LmyxxXcVvsxS2fp9UAz41rJTDhCuyzL3Hw8Pcwzni3cgAAb3XB4pakz1FBTgbsKEdBbBJLc7n",
  "key11": "31sZ1xLjmWqupJuamyspy2KHbsQHVeSVLDik4vWhtHx6wb7LDWSMQwG2TKTyh7vLyJ44cT1U6Tw1qm2NhrnkudaD",
  "key12": "5tUJG9wvU3H6JEm1q5dGTFoZvhH6pU5E3k7JTyx35nD9QSLjMWZ5gbvL2HtnxpXRZRFXDGFRkacpA8vmPxfkh93S",
  "key13": "62RtCAbdqZt72d6avZkti1ahQMQMbkZ3PMP3x5eK6NBQLeaEp72zKKiv7xcii9mq45LiuQXejMK4sSB6CfKw8EnN",
  "key14": "42619yYuknakjgE6zGnTsbxp2WYJveShRE4jH3TmKzQNsDHDp5ZkfkRKF3s915vkw83JZUUPxk342vSomsULNUp1",
  "key15": "2nLqqm32cs9sTB6hKXBuirUU6bTrZo6tCuu1Co6kskYwYtSTtTsLzmLRuupe4V8LcwWnjd43843nKzVVCiSuBqvP",
  "key16": "4sfTfwcjyH88fJ7N3XMen6zpiQ7yBBhzCTjLcuU9Fs3bnP7KJPwcBp9nQ97fbLfCPqSdXLyQQp9dwGBWD6WxkLTM",
  "key17": "28diQ3Z2nfMxswjjA7vfpxZD6NTQ4aB7hMtHbKtTW86CsrEeebugNZvdnkQCM14P9t66maACCou9gxd3V6mVVg7v",
  "key18": "3kGuiBSUCf7t8gVKP3fXes49ED99hpXPChP2kjGmJNT8nyFZ95wxN3iTEfAsdGafoBy2dsFvF3snx3HniC95Dqpo",
  "key19": "mCZ7y5PhvgUSqmAYpbQeWjA7RYY1iw4eS4h67PoQ5Psq72eZzs3pgJFGY17VH3CNvmY1cGuCLqTbgsPwQ86UkPc",
  "key20": "5qAZmprnvWBwZsPk1dvCya1mhgwoDdWnxgSfCAacXSgnYExMtHasFfyCjZ5jQi2yPvTAQBDTZwWPTw9BM1TBmMjs",
  "key21": "2cZUoqJPBaazQeqHBqoLJjXLRBXL1n5Ev7DkUtcRQBiR5GG7UVowyKjToDiPSVkzirV5m7iWnAwE1kuYw6qhiQJA",
  "key22": "3RgfLbiRMWGUEvgHJMRXNQs3gjo5319onRXn9aDbcoDQ1MYwsx7Eje4U7EJjJ7S3XmLu18Rnvaic6mxagdMuh4uy",
  "key23": "3CjMah93aVMkjvE94RdYTLD8qS2NcsdwHpcVEK5zYHsy6Sad8Y8aUzdcwg6cmbZzA4CpGsYhN3tf13bcGpcsEuF9",
  "key24": "3jWkRa2Wa71RA489XBwRrHBoc7p2E2gJSGcCZFpNUwMttjZCY3eW2k3V5BLwXVqpVwcxCdM1NZssVmSWhgSbvxim",
  "key25": "5n8DbbH3xAwgUUXsJvXJuDoZaUJLLBqZdP9Bs2E6h68FgCRNYfzAqEYbqc5ZBtnVHi2aTiCinPTxFcih7Er7Cr4p",
  "key26": "5MTeVhbXKpRAqe9KSBMBSgz4UQ6PpAxjLvvB1Pknqv3hUxHj2N6CqnUjVhTDuJSaRXJeeJxf69kJBLUF6uvCGn2D",
  "key27": "4UPvZT84FYxRBbxeAtScvbXfCziYizKEA6bwUpr1r8MFERsa82sS7hnBLjx7FPSdZmw5DnT53d1dtmnjKTQSaZFL",
  "key28": "Kwtuad6nnymqJhfKh25gxtNqB8o2yRsQAx15VMjsYDYL9jEPDo44fTp2t2KmpRMGzDPv67HLF8c4RHA1JhnqgN3",
  "key29": "4uqfxtXYDQgYhXi7ThHa8Yk8eJ2RyBTG3RABRq3gkUEKuLsRKBqptN9nHHD5CW8FqBXnad3LKd55BJ55ubj8jZJF",
  "key30": "4dA4c2XGxGzRhhqB4EvGWLBe1wvqMu1VX8VGAWnzB7vRoibs1vR5kRb6ZdjUK66k1eHSQvPW6CNSoM667thbrQkL",
  "key31": "2VGYdRS84Sx9C4pbT911RJXxrZTTYSqKF18s35G4nDjdGnApgMvrgQNet8JqNBs1fFxgLwp2EURHE253yi5RpbtN",
  "key32": "4ijFuBmuNoeN3kCWgQuct1ofVBqAxxnrXkTHUoezNV8RFF5qk35m4Mhi9g6sgGHfXYovEwv3KHRjcx8RB7HaFjyu"
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
