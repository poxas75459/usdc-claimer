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
    "33idTeNicmkgkeqBEFRSThNetGNmNC9YLy2UxyWSWoXu2tJXkiNxArW4nCoYhkcbpGZmkv6uydbys5hnv1h3iuzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oQaJY7PmHGBkzGYYLgVmG98tSh6BLGLXqT27hxka6as2hqpsaUci2XHmEKWjC7wU8wZMexGsvi69LgUKPjprqyx",
  "key1": "4fekAiAsfjHght86dXK737e5N1RUoRBZ4XEioZfirigaA2cgQhJ4QRAMWpCR8rGPftNNo6eiELnPbS294Bf8zgyp",
  "key2": "5yPRxCPm2fBCk5ZNBje5JGnBQe5dTeM8nNjcbpg1vpWqz5JDZQnFjuhp17Jh6PXoM3KmrwgFxUxttBsFYkrH6KsA",
  "key3": "5G2ss2ygjgYovugQhp6sybZpXQkf3kqnn3c8AXLGeWSRzyvNevY1mD5NSaEwHAB3nBEox7YF4WQPZLiR5EHJ37ZT",
  "key4": "5FUTo1GZe2K7nhKVvfQaBMuGxQDiVW6Pf5kwymU8Dg7vQxfMHsCFN4cZ5NQq5cjhHvs7637NNg6tLzby9Z7VRWHN",
  "key5": "5oz1HJCrhgKukkEb4ZyphZroDKyCjwPJ75da4mobucgJ6iZGFageYMZES2gNjuHSWaELHiQ2isXDk5uEXohWwQro",
  "key6": "2WccuRhH4Beaxr7JozFConyW8F1zVqif5GefTmmGjDapTVgWCRm5EryM2LgdjBUHrnDh1NGNDHBk1wJjkLxrLWWy",
  "key7": "42fFkdJUzx7y5BhFMc3MvmdGN6AmLkqsMwWybcFNgb4yCFQw7j8PdZpYzc8to16K4gSV3rgUEPRA31SBcBUV8MZF",
  "key8": "EuYTPr2M9YkpFa7rhVwnnXeM3z9QBKNAoPP6JsBRycxRs2z1Mhp7edByibnQwr4HWpNJspiStmkHh36VdRxL9Ws",
  "key9": "5eNUtBtwHZ2SmTjK8ooeCZeSwbZqbnTvMETHc7w7KzJaJLFE6f9xW7fkv5Sp2wrMMRMPSR8Cw5EktU7ssXmRDMdZ",
  "key10": "5yTzAhVjfpfQoUn98WTfFy4kE7jaVg93yyM5N5rGf9Z1C2eBzW1zeYMSRevEnQ5QoehGBB2Sdc6h6NwLH3TsPAUv",
  "key11": "67Y9ycwuC8cob8pRPHrnnrtayHHmDFMBv3BRXnv2FjpUNPNpUZ5asgQCGMUrDBnup7wvbv1eKs3Nm3q4Pn5BFvGk",
  "key12": "2vevTvBp4AVpmUjQ7VzCJjfYEmCVfUEPMbzSXG7cZeMcnsS5XwrX1UET2PEfTDpvNkLXvbfP6iZGJQy1xaWaJteY",
  "key13": "4Pgew6wxo3EUiT93T9KRBGznX3vWckDQ1uqb8919W4T2WHKJFF4j3jAUKQVQjWK8AEzk5GCsMWp2APihSB3EHeuZ",
  "key14": "2iRA48A7vCPJrgjzDdLfRxRp2U14yL4xuoH7MMzHTakwwk7eBKz42xFpQbaY8Pb2vv3XrXVKM1dFRa57QKiBihv3",
  "key15": "rjJX2KkVj6TQz2UGx1MYTRqXtwiQYxiAhsb68sTagNQFK6XgitFXVmUW1nEG1neMHnHzEGP9wyBFoLEH4QP9xtB",
  "key16": "5v9tfPKM6vXLsWQyFWLH3aG9eFJMK4uvMAmpgxDwAcxgiPRr2xantwNmq52xqcuzd6yG6w88eZZsdzUTWGMC3Zp6",
  "key17": "4jBscXDtwHhkuv59z8XgmcKTrxSqKDvKCd5g9EL9gJX8qjoXEu81CmWyeKj81TAwKPWhGwmMkoF5eKRh5j87rteN",
  "key18": "2seBi2L3q88MtKVKd4bX9sM4q9kfXcxGNNkryXHBQN6bznXrgnMjJn6RJubdRCqf5bZRnYRskBpFH43E34KhYT5m",
  "key19": "3JaY1W4MYvtqPiLpfSehT4rgK8MTPrX5pziEek1KmXL1u2ZTvYjG5JpLDVv2mADKqjkueKoBtu37GnVvEYbB5gip",
  "key20": "5PrVRCxYrmEWaLMPTjZHPF4a7tuLTUKP5zP9QxhJkx6aGzUaf1D8fqbEej5CbFQdz3cui2DrDiFDtjwpAJB2BZPE",
  "key21": "3jY7V6yAj6GKg5iPoigjStsAaV35G5JeaSroGUJE3em2Jr3srK3QzzPKk1j17mwR9579MTujdbDFcpcEUkuqErcv",
  "key22": "4mSFG8JiQH8U7vbRtmffnt2737qyFjqBpfTGyyUCjo1TfKFWbiC3M2TVXi4QTjx5pCgGYRu8eACfq31Ge59Nge9A",
  "key23": "2eCcc69PF1ij5Jr3R3zmneBMjF3YJXs9wQGcBUsyiJYAZjHLtiva4e2QMnvGKsUjSs3xGzgad4Pq46M8VphCPNkX",
  "key24": "3nk95Efy2LKZ3FJ9TNy3Q3PmxMw4RkW8g73HJyWvxAfMvFpVDRTCnR5pGHrQtso1ZP8DfH749Wvtd6FC1ZC5H3oU",
  "key25": "22eMZTYrsZTDHpVTp3a2wJeBVayY53uA73VcLQGSyvdQd4XytGhR7Egs3qeTE1r8c3wa1rEbQEtKejMaSRTUFw1M",
  "key26": "5MyGq9QD1TN8A9gry1HWgfsEw9Yd8e5xyAvujp6hCEU2hU74VDBjYWM29CQrsinYWZvHi7o7jTGjCBAKCk2AmhA3",
  "key27": "47Ph1nzQJmUqURiBErm8jWeYNvdxqEUpNUAtxuqes3sBJghBitwytTxEx42KSQf1a3xb3SsRsBvDoVSPGjaMYKjH",
  "key28": "49dDayRMShpFBmzf3WFD1h4NxpQQNBd54dUfqiEE2VAzKYME3TArgtFxtrAWPu6BvwexhPPjwJXCcPsmticukDwP",
  "key29": "2micAt65i998Vn3KF4Z1e9PJj4Uf9FXbs2EnoXYConWC6LLyV4wsZT3Jzg4UxXhXpwwMBZWHKFLfDa4VJVPo3TAP",
  "key30": "3fE7K8qEZhYP7WKgEAync3K5kmJ96v1j9aHz58zvzykDn8xGzKzzWUNrZdTM3wxRfYAxZUvCXAPuAXsFBqRWHM6h",
  "key31": "URxxS2w5JogDq4gXVoArYc5HJ26pX7jWx23iMnCUr6wsU8hgumPJEXFxMEynEr84sALKS51HcaATbxWpooxmMHN",
  "key32": "5K4Cg3zpwfkKEf7nGRXeBjgYhfRsT1HYY2PdeH9ZRcGkwKdguqncAXFfSRiC1opoQ2SDnHPpj1qqUSWCCvZ6mrWd",
  "key33": "3mh9GW64rh6PXM7dbE4zUEQkUXfRf7qtCrSZcUrRpKj9LAmR1NXAYTqGJFcB3Dzp6kBe65TC3bAhfUZSogEiaqh1",
  "key34": "5Xe5yD3tkTf4EPrxDhRsp9GWqyLj3kEo3vRaxoTJBsNerHmpxFj7jKVXgoohWEACtdeFYNDAK75kLNhJafPozsmt",
  "key35": "JQdphGufxiCddBqmvFdTDMjFt4coeJMrJiMK2XTgsSmMZJHK7Hm3keiSLSsjnSaLcinhUx6c8iHoTCkprSwnowY",
  "key36": "66Wg3BHpfX1T9fD2cDYdCqUkjs1GUYX4zkeRw3dLvkcEfXx9dDtHzKq1g2sL3cBW5VmYMM8THZqar2B2MsXdCgEL",
  "key37": "53xeoQ2B92qNoRznY8sCgN7WKDB5J2ewgvBLHACHizmvZjH18EzsqrJyBYLpPZZ9iE7UwDT7vy46WdVpJpsPmjqR",
  "key38": "2UVrGLJJmioygi5RSkiMGkGErraP9esjvZvfxeEi3SDAaoS3RvJ9Eh5UZjThyHq5XP8cWwEsEUjV5pQFPxfvVWpW",
  "key39": "dmSXroQckAFKAkCkwMh7UUHaauRaRqCUXEY1cQuiry8N866o34g5Ppd5SN15zFZ4bLGEiN8H1LnCEBXdNPRA4cG",
  "key40": "g4FbQtFVS8c9aooSbqT982kkYnt4BLUFbk9ctmDQsB6GBf6iZ3ACUKtvwUNUgi62YmL4sGtBXSXioML1iireMob"
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
