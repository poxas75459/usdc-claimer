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
    "5ZLNxcetYNC7B6fr9tYuAbGLPjC3piPQayLWQVrx1eLJmBhakQ7MM3aPtCi78QGVtKXPMWjAcMWxqZpMKPCrKRKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KDGU3C9kLJ5r4Yu6gjfLG8kkZA9cZt4T2qjWfLvkhWdHpzm4YYzyshySzwB2MqB7As7cgg6hA5iuuFrjHr8veuR",
  "key1": "5fx1B1tCcBSvZbSZmDFbY5RrfwUBYsHyFVqW7yGHc49NhBVyd2b3LRDpwj6pvLziZZRrZh7Eiy6GxqdDyau3QRkq",
  "key2": "26o2YCMDvibC2xyMRFW1mQUCpwX8aDdjow7Snj1jhTvqKdojVfdxQESTr1P81ycRth9pcKfMfXQjtAGZJKnP3b1K",
  "key3": "csK9D5bqGuw2jokjr8P2mGvtmy1h9RRPxMN6dJ4wSmPEXW5w5s7J7zSMyCHCizT7tineMVxADaC9wTfW1FmGJAS",
  "key4": "7bc3yBju9MTyoepiLjKageseigFwKyyBNTsGGyRBGobMiBdJ5yhcwPhAJZrLYamCGfwo6NUQsBG4iQHgQEnZsyw",
  "key5": "5pyGuWKxiRY5fFTPtkYYRGgeVmiptN1syvoLkMwuwNs9rDdBkZW2qRBR2nqTnv3FLr3XPPdd1YVvkUvG933LVA15",
  "key6": "SfPfmK5B1KkksN9krG5QZBs1smTo7AqCzgkZaGuBWEsCJdbyBXaxmgFAonjZWbrFCVeS5dA4AcAJ7UnVK8eb4cd",
  "key7": "4FYi7yJGM9uw2rUwgcajA8sg7CNWjAoS8d61495gK5w4wARhHp76agzc5jF1HnwcJTwwmeht7W8rfNhrtBncF8eE",
  "key8": "3qHAtuvmVUZfPVrdWUy3HPeQJj8LHS9CiTBaAFNC9QKdbx7bTTQpss4Zhgrr2fnMpduWcHpjiqiFVpaZW9ffZzxZ",
  "key9": "4BrvhUWPwbg6Ecec9n548ajqQLtQ3uySFpWrxPhUA9uPmZR9ry52vvaoA5iMdxnGkZsnGw6A4PQ8iuXx32pPpWN",
  "key10": "5quEheEuSCkRi73JLcLMb3EjGEocFVk2Dhvn9vLR7XruDdgdDqYzKfDNwjnWZpzFTj96FvRkEp4YkgEBiXHqvXip",
  "key11": "5QUYV2ptFCy6Kuh45y9XfP743KncAmkA2fTYAyDG2xuR7YRcn3NbDh7uLHUehFvUWEvjzMwUMkErbXmSBKgWhNLi",
  "key12": "4YqgLw1NZG7u4Ecbe3tJpRYq1h7ksVdkMniaNt8KnBdffCpkL1ZZ4dhVc9fQkiJUB5BHyBvz6tMcydGGhe8FEAEM",
  "key13": "2DKHpyb3v3SKAbSLyfWAydd4FR3K3Qx47eDP39BU2qLsGX5y8oxbCFMdQV1a3FykuSxZH5G1aNnXZdPLqg169HzW",
  "key14": "2Pgixc6jzx43RtpUCwPNbkswWdrDR7Bwt16okjUhAFj3QAr7xwxQF9Px5xgiFiwWbbC4H37MgmbXoEp4QaNZjQig",
  "key15": "Uz6pGb4urVzkmTPEk3UNiirY4cCYnZnScDfmhcq4ixoUBFXGFtCcXmgnTBKGjNZqoRoNAE24NbZhQ6drbY4Jbzs",
  "key16": "3KgPTQ2T8fJaHm56xaS6HiEYetUbkZtc3uFTtr1GpGdmyfac3u548wqaYNdWaVS12wzKoGqv8GFV2S3n4i2geCm4",
  "key17": "4roe6WuZfGcQ4DFHsUt5fp5EopjEhfHjQg94EpJQeEbBxUsQ81ARWbWZEe6A1hB4jgfUZ4afNLnYGpuCTr3a1BQF",
  "key18": "j5a5mg7ipSTu6hWZ8cJS5z51ztZi6VjwoDbRWzMwSfmAMtaw64Zu9HqUryvDa8jQKmY5G4UrrMw4LcENVtsaes5",
  "key19": "2Jj8kbKmhj58xJ1xHEo9EAf9XBHAQqyQM9i2ddjU5szkYj4Q48g63hoBoFhyGmz5B4Ne7AP5T6iXPo3svFhFAcFz",
  "key20": "271TMmAwMYHuU9vjjRxLoAQgsYf3wcKKTmyxjGKdCCnTt9pMwKzus8NZ9SiDoBPza6NYhogd1UWWvu5ydip8gZYz",
  "key21": "733mVv8k7WXXpDgQPmDoCfc23ZVaTMg8Hmd4bGsA7wZRkK4f9dGj1c9EyDoXc3jQwxNy2k1jRQtQT2mBWdaNUri",
  "key22": "EYbFf5wgvJfePVC1nmsccso57HhxnXZpsCEMo8tmtQQiqM2DtP8pXdMaMJSGoLnooVUirse8YgpZg6FuTAuJBmd",
  "key23": "2zSKWrXneDRhWYUBjqXfRUHByXoyhxdoa4CJYusrbMXH6pqA6PoRDKm2emiUPSpxbm8PH4jSh49tyUPTQndcrNbd",
  "key24": "4U8ExnpM5Cj1ffENeVKBCnykriqL7rKH3n2UZ5kQfoS1pLFzz1ouqxqVeg5u9TdMgFcKXbmn97kFGZLzUa8FHMx",
  "key25": "aye96KyugoZcsBLuodXxJKw4PzL28z5izBAKANFggF6QwfEpegbaZvWXTwX8SyHF2Nin5AUXKsfNE3gRvExeg6F",
  "key26": "dU6PWpa8Va6NhK1bqCsL9Cms76CqjYDbGxZvak9P4GF6Xk4hH7QxGNiWxfSE2J2wiJoV23dSt5yycudGsstfh57",
  "key27": "276YfczCUz42Q5q88LrTgCu5YJCSmBZGhvuceQeP4Vd8tkT68NHNpqvp6WosjfjhA4d523edhjNtGxtToibscpjJ",
  "key28": "4F7NBaxjadafKVdZCKQZ28Ffo1wybV5DpEGbEmHDwJ9u7SambN6Lv8UR8UX58sXYHMNFzK1Aim3J3NgzBe83pHk7",
  "key29": "2nVTmxuZjvSfAEWc83ukpN3TnqpobKHBHuJoGY82Yn9ws6ZokPVwBrpnai5jmwReuHgmvNbwtc6UP2GzbtAJodGG",
  "key30": "5Ah46yTzmX7ttqJkvJikLv9nen9ZCsTskKYTjs647WEZRkVf4uHz942v4V16JtFDTfU1amYkrq7WSDEF5BZpyTr4",
  "key31": "3r9T6zi1Pjy2p7mmpcavQy98jyzAHT6xTQNSqLDspGvwKVEeEMJVesWqDWZaKhMuyRXW9vnoSuXVTVAhWNzvnoFc",
  "key32": "5NbFxGTx1umihQxMgoPDBjo73FMAMRAddDw4VVNkoDbFCVF2orbm4MrRjoAnYYbgHdCEbRKXk1NEGFfSSaM7N9wP",
  "key33": "9BqHbKf3KAyMLDSV9FjJuT9oiiFuEoZCXr1EtZ7GTyz58VNBoUM75Wwh8zB7sWLShkNsN14ZDiHwrMaY5mQYMt3",
  "key34": "2MFJsw59QUesmk9PjeinD7GjLNPVhnY1Tcc6tEQWKLMR5JRGrGLGjeA6rkU2WNebovpCn5w7kcWyPwJ8fm3eEgrJ",
  "key35": "3GUqQLEmvsahKkTE5PK571b694zCroxcyNVdhySY3jj1cPbuNJco14QuNFAKVqPppepwPpEfRYvEomsZb1spjuDA",
  "key36": "Q2EVUXntHQyDXSDV81tZU3qb35vczjJJFffr5bBQJuexe7Xkjbh4EyNPxG4xTt9hkeMhq3U1ybGaqxcUbgEnLzd",
  "key37": "5QU9YhGSKjG5qL1wx1mgGLuSTtobhrtQDvDGTgbS2vtig4huXKn5en5AemKRVvtaBFdh6TPExPocpYyLnBMPcMyb",
  "key38": "TuSSTWfKycaTyir6toAvmFg1M7yG7AHKJKV6M4eiEG4qBZ8JLcfWQC1svzJvof3W7nAVYpvobwCX9mRsuS261Vp",
  "key39": "cAhPo8ZUtpt7kFuoMTp9cwULReVEkJf5TQhkSUx5qj1TdR9FgFbFozdCwFPW2xKKTSRifzdPvZJRL1MixQHdy4H",
  "key40": "3nHfhHdFiLFaw9sC4SMh1gStiX1zxULStFtRYjFHzDhuqDe5Wu4Mzw6sNFicjRGDwo6SNtTngVhUgpsniRDJLvzT",
  "key41": "4iPBeLtD7LL2CrXsMk6EJtPUCoxmaBjS9Rg656QfWW8G8v9jm7Q14xresW5oJt9zEdZabo5UDgcjSk6kiKLGM7rA",
  "key42": "66mXgM16zxk6CLreW7saycdYJTxHU3QMMfh9Bxhn3WUG75BtXz1U1jm6gqWRDuGErDZoCJt2GW4DCJNcYjK1SanN"
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
