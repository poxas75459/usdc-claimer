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
    "5kmXsr1aWUPGcYH8UhmBmZZosVBTJNBUCh4epPN11XAddDRogR5LEPSP3JkjnArPtWmjvvALcCrgmQRh4NcRdS6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CemCRGHcR4raMrRUNushapYZ7VqnqfWM8Ln7LzQJ5pr2SbZJwthcPs6ZW1hFwyB1jHYAsfuduGN43CGK8kFiv3B",
  "key1": "5DrS1VWXN6iMeKtrxHgyzbvDQt8zU38HEaFNeLHxgBjt3Z6YnFu8LhSTi56LZLJ3DmdQEeMAb8xmKkgcLWDWkfZD",
  "key2": "2XdMFWH5sVDgQoSLAMHgmoqMU25Wtfg9qrthJbUu1yHp1mHKnbt7JJG38aHPPSnzKxq9Ti3CPQzMm4wABViZiHXq",
  "key3": "2hQNJVoZXgKmXDGZDrkseLbpoT6g1EaiPFsyWesayvmeFLMmxwKbYsEYBB659zCQrAL7eRdebwxw54SsDsDRQ819",
  "key4": "5qaashbQftsWLweWyfkeMbGTQoJ4fxwqFfj6iSepcPXsCSciPCJdQvTEBBqsvQKtBwDrmMVD7Qgpnzt1e7QrMybi",
  "key5": "5WULXESH6BzsBLVjcMQMvrUmHbrNNQ4JMqdKGaDAeUpoVxgh2LPqUEFA63LfT8dwU4Mpgv48X6KS7TWxo6Yyq6Z4",
  "key6": "3qs2qUotjomtKMpyKasVQif71zvRbNTzhA71vQPAvMgXPjXJgSqVVXBjywgdSXP7QucM7ixrf7RaAE8jkwxnJLRJ",
  "key7": "ocE9eZpDCY5kcZ7FspbEzTnSpJSemTQN4a6ww9q5bHX8dErNWjmDXP9gZBaVaNNwyzsC3TFvYHBS5sCKwj9ojxK",
  "key8": "28jLiwYruDfoY9NMWPo9Z5KtrpjDK7rPqYBWstnKiPhQ7x8bnrriFHBsMoyoeSrPrErLGurFfmUR5vB6QpJgk5xY",
  "key9": "ntJRoLaiccPyVksdcyykUG6YtLncrRHjo4qyNG2LyC437xD3LqTyuQLP4dCA74kwgLCt83WafrADtYYJqEyvZBh",
  "key10": "3c76SwqyGf4ASzU5Cz5SNJaSCy7ufexiUMUPQcFUbbd1MJUq9CSwxKaYLgAxLaNEusEPVgZN7CRrc3QPZh8xkcRm",
  "key11": "51BxtUSh3SCrVtcWKPWkbZuTArHGAYAgHpxeetHGBPdB22jBQQryR2u6TKczb9wDCHk9vptKHiQJq5rhyNWYbFar",
  "key12": "D3oKAL2GNqiMR8Crm9UHNR9vsRieFGgYKhRCiWRinQ4U9jpTBiHascimYRYAATV33uTnmQB4qB7yZhrC7SYbVE2",
  "key13": "29UqsA1GppTiWEk24dMLNEPJrYqr39gNQwrWnJR8wvLMiRugvczA36dF9JJcxVzgE71xRTuNwUMpCqCoYuW6FFAH",
  "key14": "5qMKwwnMBXKjowNDCdoSia2frTXpqpC5dpVLCG9YU3dCQjKAvmDnfCC9DgGnGEvfVviP2LSFNbpAGc8gzmtNk5Xi",
  "key15": "2McopFvigwDTR8fj56hu8vGp4QD9RC6UvYLrKwfsxxdbYnL5eXPAwXPKu1KvZn71aKeZYve2JSEUzhuvkCL3c8NM",
  "key16": "5atKSjowEdrLF5bV6ysvfghcXuf5Boghgz4KhGzGjVCi8h4Am9BWEpT4pMQvfUrNFxPTPQi2zAZv8yGXJtGNPcRU",
  "key17": "4qquor6uFxgSdaVXFyjBJqRHrUTmdSLd5sNTu1ib1P7AqdsdH9AMuj6NP1xtFwMWMtGt11RRAMMNHD416JaykLTx",
  "key18": "2NrsvPgJQqKdRWM1439dkC1EGCLBM8vQfJyyEyLeg4QpzrfD4Y4eGawGs8dQxxQFt2E9gs3guKpzJ27ys5icpMBc",
  "key19": "4aEN4NASCPULC3ZmtGguG5L1z9jn5BXDQjKRjrsJDJy8KxnjYf1gBQnwMGyWHSskaoSbw5GyD2HSywumGvWmYc9w",
  "key20": "2C69uoKfF4VfbvtMLReUMxz8mKCf9R2Uqe6RAPNRMNEWxcj74EcfhAQyrMgg7ExbWkASUmcVUrq7gXMECQsdhFBB",
  "key21": "2a6S71VqEx7N4wHNv1RRLtAaAbnhvfJdcA3kwWcM4L79GeidhhhJ5fgb2CMqjEjz8LcD1BeQVo1vEd6YVWRnf57M",
  "key22": "46Nxqqm8bvCdaApyGgXFRm8XPaWjv25hi7e6KwHCbNmhqQaq42mCdZ6jCF5kKMZTpU2LMgDNTgEmgmzgF7eFuLg5",
  "key23": "5SaCDmdXmaF5RxRTQ4h1ij9E6LYcrMjnbDc2bKQDSVBTHHkh3KLP71b8zhnzTPXQdjteBTKTfGoJP95ng9qCSKcH",
  "key24": "4Z3yWj74ZuuPkenn27x3MCQ3VY7n87i6jcCwUZoTihFJVzZftAjLtWD8na6vwigs4XL8hDfVchNywF3YugSTt2mK",
  "key25": "4AzvgHfYY5Kj3xvcAieSjAxTj9iZWYqY1YQPQyw3VuW9MGjq9vCzTYuTpPK1yigumxLstdqimJCGuQ5xj5eVY8aV",
  "key26": "4ZxrgpbMdD189ek8rcbNQ51nj5t71rbPNP1DRtGTRQEAoS7mYB7rygcVx1AmnQmpK4QwB51Rahw3JRecBu3mNzp7",
  "key27": "5uDGfgzgc9kRcmuLMP6JToGQC2oefWE3aRPHnp3Zf6seRpiy4BKLqk1b4S3q5ysDYe1HKnDkwFJiNkW3ak4PEpUW",
  "key28": "4kivBkcwke2Vw7etp9HTJyhGriogtEWKynYPyriD4YMM4nYferxLAcMCLUoSumNUUCgAkkB3Gj2ub4FCbRR7Pk7G",
  "key29": "46SKCzvpEsBJE2SAxHTYe3zvSwVG9jwzQYKuSYfhxREsN8BqS1YUk6hfh63wYQWecMr9Jyna1BmdvyDZkBM2Hwoq",
  "key30": "5UjmnjAexhUPEHHES177u5E9gqSuY14XTayusbYAqHfsS6uXGLvHeRuZjaqV4fa4dKrjCK8uZQL4fRJ85buXn1ra",
  "key31": "4Exn4G8x2G1wtwn2rqfT9ygkwcNsQD6iCGHPE1XzboPKQeBtEZVA55qtbAEwuGLZHS9qSk24PAYM9vFBnY3UXHM4",
  "key32": "UTATPQh9mtLqysyXeo9scYNjU4x1vPbAa2euJjZVXYP3Emu9Dv2StZWmvLWUCTjom8hK2E1SAW1unM3TfCd47Sg",
  "key33": "28CjQ7YBXvcQJnH2t9z9ZKpVjuYXVr7SnRJNf9u2keTaeUZayRPNnLkxz4eFbzwWqc3WcjjgczCMz8KAYQxZgpKt"
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
