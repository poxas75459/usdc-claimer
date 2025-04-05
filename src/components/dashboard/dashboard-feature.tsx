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
    "5iZfCKXfCPrL81oXiipaRmYpWhKNNR9oB4txB2vmNG55QcDYgzfZYHjgftGtkhNZtK8YEo5UarFSV8V2iqSBYZ9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4frHy8i8RQmy4ZjTzJFeUhmU5iNBe6GqHJK3epFtKAA8jEbsmkmKwmZdEPSBNoZ7tdM5jhYy58NzMQmf641L2YQW",
  "key1": "3MWqrF5chvLLCiBHTHRdGZXRpSi4EQCHJDriGK5XC7yHCVC6QcNyUhuJ9LfdmZ4QqQZiUxpNdCfSMxj27iH7MJuz",
  "key2": "2WicT635ZuBcWUPEVZjj9J8fN4ecqYc2gv2KgGa3PP7Qy4hjfFT9pqysxeQdVEg7okRY8wasS7axeK1pFhgyfeb9",
  "key3": "51DeHmnQYPtkLSWGyLJ5npsGYpjgmD9DtNHzBrXNukDjB95b8BY8pQ2cA4u8s59UQ2q5LEE1avVf5y9tD7dzYW79",
  "key4": "5ZhvpwkVoNWyTVLTKcTnHGnoJAamtNrogqKs9Wy7EGBvh1nhCyPXFnzDCz4nHZ7fbZhYNRRAU616TVpE46NNbdkU",
  "key5": "NuZBNGcJXCwU7cE7uD5ntRkvMdbNYUBKPgb2Q8qLcUgDgTFhmSoqmiVU1crgZ2BnFdM5T4nepr39jiNGfXV8xNJ",
  "key6": "4TunkbxZdU2HSrCMZkWFpCVcU3jvkkeSdBrJ2mDCL38Mfa19B1sqLoMHz8WH8pkGyQ5hc9pSGaw5ZHvBjmyNq9b8",
  "key7": "2hMkyMyGWmfBxxgMexXgUa7X7dS1uwKuCRMjPsuKaAJEuvDHPYmjoHAtMGJ8nFEd2Wxg8zwyJwJkZWvp846crPmJ",
  "key8": "9dubPawVQxXhLPuuA2bLd8yXudVJYVzuW9QPYy9GerReDQAmFRtFNZHu8FuaSEShmcJJvheGSUkiKpV4acfg9mA",
  "key9": "47TNCU6kyZq9FeKKM6aaVishrdTjLYjbw387YXnjNSZeycSz5gGdM59aZcXJiev9vJRSWU9LbjAM2SEGKJmYzd9z",
  "key10": "2ufefz9ZR9s1GvaDa45XnTKZ4BbcjY5VVtpn6GJk7ecAcZvdJ3vSmopbGwRDJUYg8Y8k5QR5jS5vZm8Lc4e9EHHA",
  "key11": "5u9iSo2fgTuWikzDXR7WZB5gitB1ngAMxuCR93Gkjs5wweeYEgUQGQ8HSAGyCj4BnhZzvRNzDjtKT3qxpTGjL58d",
  "key12": "2KR1HGShTPb2ELGaEgY19qGJsKxcYTMrsGVTD3oWBFXrwQSKdxrxt6XaFNgdvYviXjCG11e2369UuyvgT7TKeNka",
  "key13": "4HxQcMzTYCR9Mv9H643k7d8AhfDXkJYQbvg6qeX8Pw3cSDVBD63M1SzoGxXgiRxrL7BXJBSKmtiNRaGF4L4zp6bD",
  "key14": "3LEJQauHsxcg1pCuFXZcuWR1SWN2ovwPBEGix31aDjnF6jmZK4ivm2z7GEpAtYe69Afowt7akU6aMQ3MuoRtshR6",
  "key15": "FnRjVZ5edbgZiMzbs7bspyFEwzrxDuUQ4ctus2rAgniRHceCzb8JtGAjAdZeXyu8K8xdLuySpg8krp6jKHKRWN7",
  "key16": "5NCDmfMc4rJjFTPeNdAFK81wnKWEZxRJUmguXDMTxSz7nFhAz9N4gDbJUfMvMQgaw35NmD8Co8QjWbtNF74ZceDQ",
  "key17": "3a1hsG6JpTGEuuQKffaN3HVcpov7zQrcmoZyodvs2GUM3EZsKtU1BJNgCqjQjgHoUVQS3sxnPTQEfxo7PuodG5L4",
  "key18": "3weKb3R6pvtdkxbMXgvSaMGKegsRffMz1HnVz1at133kHzcViPP5gcLBjWU6pUDZBwkareEjv7ZmM4naSWLLemok",
  "key19": "3EdyYF8pxQRjbcUuuGGVbtmbScnm9iu8WfVyFR8KBDd4Gxx5CJeAUK6quUTWL9fHt33QvxJAvbLEjqMh6DqWmRVd",
  "key20": "3JHfgTgezKQJFmujC48rYmU6SBdr6ykxLKbEJgfBxoFPXSSPN9BfXdfqviAWD9EvgaUjf1M4kLesyZNstC8csTpu",
  "key21": "4oLov3EeRynmPDiJvfLFq7syCCaSaAQ6KabD8xVtDkVihndVzm9m2FXJoY1e1tUVoqRtHDvt2chpdsogroqLyywy",
  "key22": "5yC8n5TJfYiXZzPg33RcM8whNe5HFQxQzLh5audv2ic8ZWGP3hvDEaBPpCFXFQuPqmSTSddLzanAEd5UpjMSPVy9",
  "key23": "5eNq7FiNxjfyotajhYoGMTrWqBETiuRYPh2biARE3Z3VHptDQnJHZXtxA7YQau7JSuhCNqJxLnKqaeZ6AMGU3yoV",
  "key24": "W9sXs6tYmH2oQaVEdxqp7FNS42eA2FRuEmExykBpA6ikDgJY38GQT4Yxd2xUnSaEtn6mEyFLtiAXioFuh47xWQp",
  "key25": "4sgcVwJiQbVmC4rwE1RffnXJwEgJAvxK8zcFZa2z4pFV46RV9oMMEw9RDDKspFyzP7LAAk6aCQFHBCpb8tKpoQgq",
  "key26": "61hzXYB9S588ExeYFazps3b49VTX3rDobdt9FGMvzLvm3qSM1JEBa2YubgDqd6QVn5RT8w5Ws1b4qSQyiiUGxXPu",
  "key27": "5qpeZELu7QGYA9Jknystxs1fgy5QJdiJ4EhL97yRZS2viG4bBYjp3Xh7PvvT4pdDfTGunJnQqbwNPDnLPQxWZka",
  "key28": "5X2sJs7RrZK9DQZboavYZb2KftU3Y88egJCnQMq5NfHTJ2Xv1iK5AL48fiZw2idUg3gyMZy6BUzn2AQYGgQF4xv7",
  "key29": "TQpPJbfXZFgVwwHgS4nypV7MrRKxNquaYxzrGLrezBfLZwjBn8w6KBwdtR1sUHU2qiX2Kx5rw7fVzzVhhbBK6G6",
  "key30": "vNTsSRmzLsrbvy8HswJePRGPt7WrMUgWD58jEyyk1wraqVwoCrrj3RZJcALZyjp8u7xYfjVd6wq78Cp3YwdTZ9p",
  "key31": "5u4RVjVmijAevVW7ru4qkthdv1E88cm8ZcrriboyTciVex74WwZadEYso9cPrhzLpJGQM32d1TXuKTaoK7dkyNvT"
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
