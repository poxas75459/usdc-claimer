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
    "5G6DcoRd1T6utakVH6uaDH5qt7jFUdKxNUpFtsfQVwpBV2UNyf9MiJsXRt1v1rYdDySE6NyM4N8B6c4K1akobyrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "564CAZ8H5R1w5n8aSED384nyZN7T8W9S4WX1dN3RmcRT3eRn9CxJbv6YwokBvD5bv5Yo9LVApBPyuZFU9nT53qY1",
  "key1": "26hNRmVZ73VJQPhstvg2VXTjJpoEhfDeu32FvStedf5vfysWJgSsC4d2eT2m7eueHTmfaFJn2nZL6ebP7a8MJk6T",
  "key2": "EQkoDFpdC5DvA6DAXUm86yvXSqVFQW4ZBprZFdGapyTTgMzMW5isAJaTiBBwN9Wtyd41S6axQjjt6wqXaVzLtYe",
  "key3": "62KpiZ7wfm7jMsBTKcB5HPpPCiU423TsA45bJD8sWL2ySTxdvewxrRekrfntoJ5nWW7BQW1HPA9AgSSMPcLoy7iu",
  "key4": "4zDYt25DW7y4yZ84wrdFxraWMbNBQVNkkmSBn1y1hQDXVf7XT9ySzeHMCc3cqqrreNdhg71ziC2yShwjNirEVmJd",
  "key5": "5Tmfu3aocWygGDipAjBGcR8zbnMTvnkfnDVYwVibRhNY65Q7KbgDNpBanrEYHuYRyL7nopQ2w3A36iDExWgbfGW6",
  "key6": "22F6cSbmhLesmQkW3UkNDAi55U1RtvapWbJW88nxTPEK6bXFSNw1xepX5aDS6oeukV9UytndaUfEbYGz99AUoVQw",
  "key7": "2nzkk5BmKwmpzaPGSjMMjtGTATteDX4MA78zeeLnxSaMv9hZVDtYEKBni5QcP8xwUkrZNQQS6azxpJkhXZjnVH5Y",
  "key8": "4ciJZbA9JPCEuNLpFVcfQupKHx1gXMmxwYt7zQLQx98qR1k14Exgz8e4dxzxj4RgASsdMPKyZ5xJyTFmrfMbCx1k",
  "key9": "wS2xL2RHUgK2p3VdRDSRSdfgCktCZUDJ4h51bHU9S1DFAeAEWrJbBbMTBEVp7qxuU978pnEBHGYofkKpjiZBsS8",
  "key10": "5PviaTdRpX2TTwJBHm53VDrJQMBET8tqCoDJNvEjjee9yeT1ppfXn6SWoEJpnLz2gwAmEem3Lz2sWBn7tqN1QdKs",
  "key11": "24R1DzVUuuSVXSj2FTok2rfJgkL7YFFsYE89Y3r9SfhtvU8HDdsJiC12RFnuDaKNc8dCJr1Z6bfvuBq4ZJK4UonE",
  "key12": "32hG8nsU3fLbnRUs8F9KXD2Fzv2nJXvQ57yh17f5DKemVDtpipXwouo2Tkp275SEQ1BbwU434Byv1avBe5NiLut9",
  "key13": "4NFsxEsELL6aa4j7uJaGJ3SvDxa6m2dQZTb7X7WthH1wgfWKqggXNEgKSw7YSkg1e4H2w835aXDHDfQVojB2snJV",
  "key14": "eQzvxT3zK3dWVAnX9h25JS6sZZkB8Ga3uCmftFhU27TNWHWrn5fUuunmrAqj2ArD22bcAGTjzgWjxhmGdJwwoq5",
  "key15": "2awS2ECdYF3LrrYcb1o91kVtZjHEjdkdFVJSFnN6vKt3kMCD8RJX1DR7TVxNYx7QfA5gHtaRqyjsB95Bna7rFziS",
  "key16": "5CDjtqyryADME9xSrUpk1NBk7wHYKQ9hHavD49BqiR2jFt2VEcagrBbcQtKTvcJgeQYNyeu7wGMNzLBjBMTe85Va",
  "key17": "5DWPMHtdzGqiKL2Gic2Ekqhsxpe1dkZSJaLUPwJ5YR5sWeiSUbk7WeLF4KasTjmUu4xD48yAL9iMJkGcHL6dmm8R",
  "key18": "3xGCpQ4Thxh8LLuEcbco5UDzy1vgJ6JkMviZvw7TZJTzMJA2ZEonCCSzdJPmD1e5M3fi8wSJDJRnencQjDAUXqob",
  "key19": "4p57UBeuP2uyuQpBsX8ePqKgMDZtTD8FKvzbM7ieT9dfVoioE8Yww5wnPMhxwWk18GZEhZ2cTwmDT4UW8WstgXDc",
  "key20": "4TVqiwVPPuc5vLkogHmN4UEV6uchby9mYxZttMSadxPLnWwNfh8gPJDUd4jeUF1EBEMyHFXvULufLKEvrsBsEMqg",
  "key21": "2ndCukn3oCwnzwrPYLXQadbjfSeqBrY4rx4WdiicucXqiLadJVtjLXyy7peth4UCrjkzu8ztHpHbukpwoKQoPWRR",
  "key22": "4gjLRux7r9kHs68oxfEu3kmK227uaNwxRd4CrZkHrJ4wFpUuvaHQkdYFqdRP6sNhTFBJUQqvpjo75q3NvwP2xeun",
  "key23": "SfFgCR8Ndr8bhewt1XfLnmaijfMQKNd1nr2NksFLDdYi494y5BfdDfedQF5uyMq7nGmp7rHqEiMc6u4oCP6LDcm",
  "key24": "2GeQmmzuAXCvrEnbywDngpcyxfYwdsRu5NZPXzhQAcwmihrvVtT2RthfNbkQoE8asR8syywQK4LzAjgDHh3uuf2R"
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
