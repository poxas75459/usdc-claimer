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
    "4gJnxPVkUa2Uxab3mvbPcPuvYemkAyLGMvMsqhjyf1SsoWUVwd7xWa9U5Vje2FpumKS8a7Fgkr7yTEhikuFP4u7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TS44GpAfMARGVt7HZddANpREFHzEnNKmeQPCWkA35AamsMVJpkNUsgSxmZMMeijGYHspV6bZi5kQckjak9k7AwV",
  "key1": "37L2fuF1S1XB7GanvFZH6i2FyPBXzFh5reBySNXA3bk35hA5oWEJzKzVQmNo5eu2Ld58QZe5CmFfQcPn1w6k4UnF",
  "key2": "sx3kFWxpDeWDyJyEdERHnXUWStgSMGANHdRd2VN9LNtWp824CWZvnJecW2hbZLX3gNhqYBZUgBF5XGGccu6K5Rb",
  "key3": "2yneZWkppecgyC4zqf21i5ZpjXtA62awqEamzu6gjENAcysfRhHHXagp4kbmsaK73ETykjEf1pqCgD54ehx9iXbo",
  "key4": "4k74Z16RJiWeWTyDcrU1SjtBSo2vzNomCwp3w1Z54KoVc9drMYqQnuRcckWuqbc9dYmY8QJ1UYtSf4vipfA7s2Rz",
  "key5": "2tSxf4JUrpKn8poUB9EW9yd8iMUdkccqyw3omWS7d8hD2Y1dFvNVKGdVxyE136Ae6ymws4jWWfCnSq1aZ6ftaHuq",
  "key6": "qNbpSacPb7gQprdYGJ5LgARp83y3AWoTnBG9dqRcyiz1B5W1Yepgw8Z2r3Kur8TRLysXPXS2DVsMVDpz3G97Wg7",
  "key7": "67Ue3EvH7pxbZR1vd3Qd8S6f2DKPPo9A5FAVP4bT5iYxwe6yccS7zWyug9d5RkcHQDmPt5zUMdpvYwMNmn6vRcnj",
  "key8": "4fBAAXxHrH6TFiRi2E1tpnGMLjCaJt4ExyjvjG3vrkjX5rFiwb1qbD5Ltdo1qgRMPCL1oktX4B2hf1hwta7U3SBv",
  "key9": "4CGvFC7LocFhfx8Z5csiBypEWY4xGgg8Mb114hFBMPUHS47FzAEAZzbioYgRHZHHGTutzK2Hro6LBtL1p7HUQBFF",
  "key10": "46XMZBWJ8sGf7SiTVu1cjPA36HQXFpVo57DexAUfSNK32Dv19ZeQjFKjkWEQ3hJqtvEeTJZLncToJcNqj5ABByGw",
  "key11": "3PsquD6vyC7fCTcq8CHgLDf6XAQaX6EuxKQQi1P4XVH9kxzaJbq4sLEDcK13j9xH8Z5PQnHgN68tRqadqFYcPLea",
  "key12": "2g2UdRFxKCBoqBPKUMgauWv44xphZXy83eAe8LxVrmkQeGtPVS7usN29Bjzb1ZV9FusN84EDi5c3pg62DE8sYkvu",
  "key13": "2y5c8MuSE1y6VnVEisSVi4UT556zSZw1X4tg1repMfWNJ71qK3RzmsbQ6X2imo8xHcwawx4pHp52qdf2TEWtPgDa",
  "key14": "XyNTQkrSzWpHXoTWNVmNHpRBYV423tLF5JzCKfcyJXhGW4c8x36nRJiZE8WWuophQp7dsK5zTsG2pc72g5Mz4R2",
  "key15": "xZyqjdUcwqpStCXD7r651sZ7rzyDC39qa7S8ggJyFknvZzYrkQzbNqmjiyQyQ9iVEHc3LjLcvT24KU45yGR4dja",
  "key16": "56mg5DCAPeQNUzadQ3bRifZcQ3JfJMvtLweyLtPeKaFikLAZXQW34AbYQ2sr68pHeqt5QC8KUwGaqiNzrS3mMHYY",
  "key17": "4Cc6YngfvnbEmG4hVx93HGzwBszpDLEmpXVdoNeXxRfG9644GYUDCJSZNGsmKdXnQHY8RmyL7QVr5f5UkHpRV3UE",
  "key18": "41tyFAhe8LfCTPtHVwAHuYQwTTY2csLf2d7LVKGs7iZ1U15jW9hnbntzNvdZPw3McM1DcXG43mVc2xBJrETwCBgX",
  "key19": "2Row6BgLKXGyTNrRav6TD5ZzHHnqFsBAbjnJGrqLboqkCsy6QwsjKattn7es4N3K6VsZvPRCCtvMvBCV3dJTJvUj",
  "key20": "5epP8n25zMJxpdDh7Ww1q9tnQgzFisxgs57ZfqwxkJN26y1xuxSEtPNWM3RLkcZTYwtGiRadbkzJhAQKxJKqCeqn",
  "key21": "3KXMP92xo7SeGx6rZt2FeXrjSYHAk59Y7kaJu6iqABGa1Fu3Nk3M5tLy92xA4NMLZA9Ki5fivuQ42SsWkFg49HPt",
  "key22": "4YXdo4fYRjF1mq3YKYsKatpuQ8dfvbXyUD3JwkjUUcVnsuNW2Ym8uwQpSbGh5cdqeyTs7UkoyCyGW1JekPChhMMv",
  "key23": "2wiNUaW1zvWgrAphqWYzfJWobnajxamHjxL2PL5JsBVCdAtbSPz9aHga2gGFCaiPKQKKrJfWg4w1HMSx7pWUMmxy",
  "key24": "5w98yZuqLLiBnwsp7tpuoH98cAtnmQEAWUTTnTs5xbhw7JAgEnPeN7JUgmyMPvzwb3spQjLMzoRHXL1PyqpFeskf",
  "key25": "2EPKC9wqcPmmEjCvzPUuD1wk8nfXir1QZU8KUmjBjyy9qxf3pj5UM1r1f7yrmAgkqnYwX4zNWiHrKMEXJNhbiEx4",
  "key26": "4G2quo4kuW5MwBEq8QMAxHxvdS3GqA7X1BqzR3eQaqj3YpbmiAj8Ton4HJ1icCS9tj2iycNjgCtHZ2t2wGGcEbhM",
  "key27": "4hFWiToncJjewV5mYYw1UhDdysPZVZcWtLRnxjraS27nswLmLCLPYKnScRdkZjQzQnDT9H64d6SdSu3EbZYzZSRs",
  "key28": "5gZbCTPLVp3TEupBMVyACJhoUNELpzpbd5UDFSJ7UgBXqgLYywC9fTbh4ca9oxLqNyG8pe3g7sFqCU16E98FagST",
  "key29": "5P1pRFnkWAUgwMVy64LPi9kvXdArdRJPg5nhpqwMEB12qTPwYB7KeRCQivzTXazETxg8dEwzhS6TZhkdYeLhDX6o",
  "key30": "5ESXbVJyWJ3cu2t5wzRRKeN42Dt5XZcUjwbvyywSa65SDMuwCRU1PwLtFcXLo7XUGStPeEBh4ursV4nvdkZfD7Qq",
  "key31": "wrzHBxkvkhRiwCWrMvpLsPeWPs6k85T9wFfjARqbnxg2hcgqByWdLj7CF97tQbm5L96z3dtSXHBfgVH4Tiq3uLC",
  "key32": "5biVCo72iVAkmGjfb8Ru8JqvUxBkZzacUXh2iETQdB3QMUmFYV36DCWcor2iLzGCGDK1SaS3NFdo1iXRquji3YsN",
  "key33": "3efxb4EYPqRWUfdbP99c2nugwfpwoa6gid1YtsdQ6bh55PpywZm2tGRpVEdxhhApwPYfThvUQaVJD6KKwv5voJwM",
  "key34": "uzRUabzCpgKodPh2WjJUmP2byP4Swq59MDWbVmmYYykRKR7XpevMnfPxxv66tvCkUMgVjzv31jpZUnz9LoCxB8t",
  "key35": "462BxoBeVghjwBvVb3oSHfvdEZnaUw7NJ93rq5EvTFoTjG5rJxiBwE7naEH9FRLmy8tP652yWQyUYPRhL4vdbENX",
  "key36": "2nH6M2vmvnWM1pWoaJWd2oMCedyc7r2ax9uur9yrNjNXyApVNZjkxSqLgDdNZi9gNXwYtCjynXnVUJAekicma3UC",
  "key37": "2566YFawAn43S31Sr2je8d4nptF3TQJh41MrbeRpu54xzp3uZQrVQU7NEcrtmT78JGm8j4zQTzEzCPVyBAYhjFvd",
  "key38": "5YVSNGZuKg8jHtbDv5KjGZcgovRvQEEhc7q7dGzcDpnZrYYAGcmh4PNy1GL6u81ou9DbN6LtoguuMifn5iJoQmde",
  "key39": "4EhcZSxd6puPSxG5KQoFXDrHUa6AMgN7PGvS3MDSDt5rugHwWNzYmzZHaw2WsvEd1dtKB9BoAB6ZE6rAEHb8fCyy",
  "key40": "2M4fQBCWgNDEX7AzTjDpzoyo8ejN2BeUDFJAceCSwbNWZzBy9X8dPsX6pCBhJYV6in1ybGYsjZvxBWmXaFxpk4Wc",
  "key41": "2sDeFh1ehS7nL1SSpZiTGy4W5szAef99JxWiRKg4D2oe9tEAWtocgBswo2nWG5KTSJdHCcwGtFRL3oYjhRiunt1S",
  "key42": "5oHviiAktfNtc2idNZ8YdzXFAUA17hw1QUFbkBjaBrB2axkQzoYr6Biw3tCRr1PtSvZ3zBKiUaKrNLe9kyChDRPf",
  "key43": "2bYhRYEPCcG6zo3QdsUPhw3pp61GLktjySVD9E4iXL7Tv6ybNSosMhJobkhMFqNeNjjdrWHqZJS7JBV7vSfvWd2K",
  "key44": "64Jy43cCvj5Cb3ZLys31WyhyEegFNdVimdDmik6YwBmex8BedVH5aHSeLcLb1Zz2VnUhYJSN4SsRTNDmf9RBgfwn",
  "key45": "5oxYzCN2mgdkyyciJ8F2sxpxuexkvNsq5DMhSrTXvy98gueFUFLkw94HNjskUHgqJzkRMk9Qy8GoXtiP3bB9MhJb",
  "key46": "41vbgZ1PjQaekwziWShdM1j392uCdic7Q7aPRx4mTTxBXDWRgoYUYH9RUgYskGgA3vZVzEettf7F1xnL82K2bgz7"
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
