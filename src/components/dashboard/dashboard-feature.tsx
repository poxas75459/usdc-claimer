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
    "5MbeicQVwiZY9mSGM2ToiEBFhoTZVMi47EBc4kX8zGAxSBAGkymXWqMoSqhhBeiKLk7BtynhJrnB7qX3MnqffhH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22frwqhjrZT5SxtLoYChtKhLazSRDPRMd8xEz8DUuhUxQTzcAqa1SeyBApSwbo2sA1odvyVNj4AxyWuA2va1xdH3",
  "key1": "64sSUThks9XdQvZBsCpr9Q6dPh1oJaRSAAUZu1CJeY6EZ2Z2riuQ8vMY6FxxqPzNbjNbtuBmxsjZQiqJHnEqxedg",
  "key2": "43NsTUoHEDqyfutDC5XTJ3YaJsyv3PQ1s14xF2VHKdstrVupMF5xnLZt9WaLuCkkTzBqGYC62ckRGUbwjZeRoJzD",
  "key3": "3ovinpymMXsaQzhe1JCz5BTzQxjgcweFeL4rvAiRGhYioa3bYTdPWJrPUgPGWmKwd5fn4h7UddBoBW5yWg8SMR3c",
  "key4": "4X7iNuCjxBzqReGVx5LS6aeyhhNg71uYnfj73kKzmFLSqfm1X6nGcHV29bWijgfQi4t6VsoNy2sqYceEnxmHzgbW",
  "key5": "3rw4VUZcM7q2xxx6vPFefHTxJVZgVzCH7pnWQLCgao2AGkTXH6BRFCgfLpLa5ihsF8a5KP1nzxrGNQ4DGsS5q7DU",
  "key6": "4Z8v2xrQoj7CeGyAN5BD44xYCWWeYZmgEDvfg28hE6VCZ8GXV2SqWvQySXqveBckDaJPyEdRe76W4mkD8Rkybvba",
  "key7": "33p2qiqNJcU4hRJgLe5SU2JaBZuwgvWoYjAx6eTMocWnerXqBW6zcXuB7NZFbwg1hzTn3LA6dbKMbH585ToGgbjs",
  "key8": "3ifcsdyEn2bXJ8ebxZWmWdz4Aag1tqPFgYwheZfSTNVfj6dpcAmmfs4m3nXAV89fdD1qoKrqXEVC2HZkwaU5cxGZ",
  "key9": "fpPsHF7cnAsSwPzbHNFeyXwftr5rBhGJ1T68Si5mNXiUwUs9Hy2iGPoXH7qkvPzwAphxGRUSXNs2xViqcnSPEHi",
  "key10": "2xieizRw8oNbBepczBd8voYiUNhPyDdSfjot1NgZ7vX8NqKoZNar6JFG8anTXYQaR8Vih6mckdCYH4zsLy2BY9ub",
  "key11": "28K62eEafYBLHpLts8XRyWohVuEWaRAGmBBfoUjFurrXPLV7Ng6uNb7m3PXKNxdahKhjoDyjsfk6pcNNCnkySU2u",
  "key12": "2UBMRrL5ML2aR3cT9dNs56n8H5ko2cib1fUcDwhKZ3y3t9EhprxGr4JE6ynNT8kH49fCW2c2FWHUzSUemJPBYiaF",
  "key13": "wcCh5SPGXkMvK5hMoUJBLCUUAeo6JmpAyaAUoKUH3rWdA2B6ecNWKnrWdS3RttZ997gdMH3iJkXYbQJUtBT7ksp",
  "key14": "35VWyoUpJLzwPh1EoYgbtWJpAzAz8cpuAjZZmHcEGop2Dbn66DqTkLzwDr8KEvtzD5ant1VV4aLyitFnvckwgU1y",
  "key15": "2a7EDtNxNWJGuaQkhXNPGzLZ3UJJx4k8QbVao1mDLjPwD4cSkjJhqKEmXHUXWn7eEae35dx5otzjEUhV3Dey1EJd",
  "key16": "ujuSvZnCM3zpydEfDJ1WV3pTEjj2fahtcP6UwXnR4hGVnB7fpwEHyKikSAjdheTFKAo46r1ur9RRzw34TmU8CbW",
  "key17": "2JZUCYAXv3rSSfpd1vSKBGPNpmCEnbyAGesDdVDn4uXqpP1fHTTd8XxjWBaRztkGM9tfjGAYWu1Qoz9w8rGcvnop",
  "key18": "4q9eA7oBJvRGMCWX8uXx15TSn9HMNR1bwqQBXFEWXtxVaCPtx3mTDkZy7KRXnjgDbgSkdQzQbSsGwsxjFQZMKykS",
  "key19": "2PXfyb5CKsE6pqxEF9reZA94j6JetSxLPmb8Nr8cfo2sGaLLDKV8ab2V3wbu93DJ1rUPqmXg7oUQuwPssAGDEXSW",
  "key20": "2rdCqkYU5oGTc9wT5yEr47Uo8aWRxHv65u8uHt8dYP2GNTmfs3kLATUrCYVBytVCJtgbQsPPXV1Yvc2Zg3Ki9JDx",
  "key21": "22ihVJTTkf7zBhxhjpQ2YUutXUyKwRQunDr6nwGUCnr1L6tppYuCxNcFw4GaWjQiWqe4Pn39mZVEvtqUpRCBHcwu",
  "key22": "2ZSdAaNvVurcr2gY6QnKnwPdbRrWz21tL83Ddbct2hH31iwbydwg6gsrPuXRQpUdFXSEZiFeK7vPbMvv9AiMz74g",
  "key23": "2LbuCqCnwyPKuNSwVnLDDp7TeuwSJtvjmernzPjBgnYdxSiZRADxMqTFXPFNx8cRRWtahgxwVTGResARF9BJWETX",
  "key24": "X8Qj81xdRKm7XfBEuNTrLNhBejbkYQWPR7BY7Ry43HVXNiRWnkEapxu9aZQPefBzjUvW7jjWtKUC8znxJ4wY2vb",
  "key25": "3PAWRHDfV7dCV52Ui2TJ4ABnYbyymDa7GGbzxVa4csavg9rJtTGeGDY1oZaKuCaTDmNaDUM8SJaaArifvrsg5v6N",
  "key26": "59eZY9XusySmWZZESSbdbo2HJAVzKdULtUBAAhbjK1gdkzjpe442Ax3zy139tbfSdy7NRW7R1A35ESCF3iCqs2HN",
  "key27": "4ZDqrDfju1gJpQsbeeUPvnQQhXZe2uF2jFdMCF2Hj6TKmQjypwwcKscSthEj8p6Q3qhY5erk9zheXYBnwM14psXu",
  "key28": "5SorSY4UpVZs8UR9hat3PMaPzDk7cpoq3kQYnnVtgmUiMs53sQiUvUSr134FppcSk3fLwqBWxMEHbWUE5frgxj3e",
  "key29": "ujLW6DdRM33qKHUaWefZ8ehbVCCfZatoxBQW38sXsYcLV4QeSR2aTJjfbhPFybYsgTXimnWzFYxYSRUtLNfdKUm",
  "key30": "2DQiSc7zKC5UgPyT6A86S8PbXdLbnzx6jiaJSZWkwxvoHAA424trh8qPHNAKg4CG1bx4dKGs3wt3tTv8jLppxsd6",
  "key31": "5MS6LS2WHpuMrubzTknRwqoeNTgZuwq5NaeETtWz4w7G7AbW8pohRXPgb8f1FZz2M973d6aqsQfJodRm9TkJvZPm"
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
