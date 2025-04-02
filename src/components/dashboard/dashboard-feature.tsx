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
    "5aniAeXD2Wga77FQW9uAigVQorKfaAhGyL4mhYvJFm7rx2rqvRxePttR4DyzX6htRyzbnF2TG52xPGE6TuKKdr6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zk6wxatEMST4cHNBj871o5Xbt3JZYRVjBtzytBVyqxFpRvAzx74r1n7zqzM4m1uTXWZZs3U1xLYy3RFM1kew4Fa",
  "key1": "47FdYze1DmBp857YfuXq4SuHFWUsNaCry3NKBP7A1HzcrLduyVKaPryWDrnKbgrYChMeCd5uPtn3NkarM2vbHu5A",
  "key2": "2Hi24BmXzH2vnn4Gb8M2AFECPTnghqZecwD3F3eZaCW9T3GJf8zHjgH91dQkWgU8qyrrX8tnR8zqsNUyLRMJboYv",
  "key3": "2NKiWPcQM4hckP4kpiop7jL61aUK4FY7Km7iaVQyNJwEynVHtGnpua8zjGgmARcwiqHZWH3APVz1VCTBPD5CBnhH",
  "key4": "2Q1oqPcHmQLXdQaPLuK54fVBQXdjhZ4ToXVFMEXFFsLLFRVc9qjqquF76Ar3bvCvYBybZD9H4hmNKnUhUkBTR7Bk",
  "key5": "3WopGxhCWtsyTzArGY2HzPsgQFQZvLiu6WRwjxxqzFcPceh2KXoAJm4JoEac8VUEQqTadB7r9MbfHqg4zhcwaU2n",
  "key6": "5uKqGAHUWMxGU4KJmJ4Zzmu9QYSdnThDajiLNXyWvn7YN2hRuaAQ7LuM5kEC7kEq6Kj7jcKGijEUxAWRa25CbEtV",
  "key7": "5TFwxyVHz887Xjei9tnwcnTX8YsgDX3bBS4Uz9Xoj8MsyRKnWqqW821nNsSybH26eNL5CKDXLgcjs1Y7oHjri8kz",
  "key8": "35AdLDiqncKJd9nrVBX3PoYSD3aaFqXrdFTgwnwjqbTSSyPfmWqk76xaFtKjX8ktMWq2cdD1c8KJkpJDB9qCSyBf",
  "key9": "GBkxYz6YfW26WdeVKWNTmxyxFDrUEVQKV9KaQ6eKc4AnnD8ZzKuGYW2T3zbqkVfXCajcg59xKxQ9N4S2wWf9pTi",
  "key10": "Fhcd8yT4awmTdeds4BeyJk4iFpxPJQmvHkHmGPjUYdLbYw3R6gyXoyQEZFKGLPMFrQ5jeXtrhAmfLhBseegg7DA",
  "key11": "2qngtf6KBMSFYSbCYtWpAGVUCoitjAzkDmqUMJ1x4XrN5eNCeYVCoPNXTZYRb7yrK31FiDj644o6tkg2rurg66HE",
  "key12": "5JKE8CGmY2jaGLBScDETCS9zCtPoxJhCGvzSqjsoNrdNUkG9cktUTm8vHpcMCrSoxBhTZwLwonwJn5KcVP2b8xCK",
  "key13": "5oseJPPoAfk14sPrzJkz24JjzsoYMye5n3kDq9sKMTgnzdp3JMb8xh8f3xzmkHJkJTSqx1PrveQ9UrU5H8xj7Aa8",
  "key14": "Wyx7xzNuUX9T3tWwTZoPr2aMvE62rg1FoxuXpr7zGtV5Ved1tTk7VbUPurmofPpp1k7wDuU7R3PX1oX3WbyuaRR",
  "key15": "2aqtUmypvfU5c268NJrgK7QV8EeyoSFLwaQWCQgPCsjJx7AS4BrnVhtJL6BpAmRHSQa2AzE3AtqVm9Q3ZzJSZGk8",
  "key16": "5KvJSbriap8AqNxXjFdMLGs8jaPveDVdH1RmfPpEwcEFqbJGoheffcNwJ8sDuXFRuwrkv4eFZTZdwueSSdjZiA4S",
  "key17": "T8fG4Dt8A1YEhU9w7MBBDxhgbaBFGgoodoYT3pPVubZjR65a6uh2ehYiApfigzPUi31XnFGcMQXvjfw2gyBAZXD",
  "key18": "5YL6hSL95MTpoUhJsZmnndNe4jC1fBXgsVrBoLHjjMbu6A67kDgLKmZdC4jTj2nGJZ942o4w4Rn48CXfr5Lp3tHz",
  "key19": "5hmqpjux5uPj9nJvdnLtxXKTRDF9LHwXokepsg5JahdT3L3iLT47FyVExRyLTbR1uuYTYMrmDUAkz1riqP7TSRbT",
  "key20": "4ftzzWd22CH6PycMNTVJqJVXJ3owvPsBz7YqrchsyT5SaEtUpjmVF8KaRAUNUXm3Hs6heJHtpxvJmqKr5FfYs1KX",
  "key21": "577xZM4tBzBHUMZxHCYTx6iNg5dabFzGEVW2tpuZRbQP5iqGfgVEeJauYNH5D8TZpeQyZf9F2LNgd5h1dWp8rfVo",
  "key22": "3jmmx1RBcynnaQ2cVSpLbxEDxG13oHuLF8iWPKmgGa7HEkMynUHTiUfRomQCK8uwtMzu3Y1cWdxjZLEnvKJufeZ2",
  "key23": "yvPuNgG8kJozRDtvRKs8GVnshtwogLp87nbDs8Vay1RCsfj1J3sFjBYa8TNVBrXTMAtFfxWnhzk6j6UcmCZfske",
  "key24": "fNWPyeEmhJTAQJrjMNYxsb4KAyUM9v79J2bko5wSosx53Ucxn5mQrf9noXdkeVeNAJRfwBUpCdDwM8VAdNAgYAi",
  "key25": "5Shyiwj8ikuVFBsm9ZQRx41YCro1vsqCgrzRjXH5J1Ay7JcD8wER53dtxGUoM6NjMHCY1fPwArZCvnAfSWQhwu9W",
  "key26": "3pVDU9iUKAyhhsr3v5mc176WcwpT6g1QAVfPJGFkmomu2ubci1MpH1nZsrtTKo7stDneQFHJ5KVDFFptNkj2TcXb",
  "key27": "2Vnkj2xsa7xHnfXod6J1mVjB5ctxds1NDBo38UiixsbENKi4QEEFV3jANEcGKDD2sDp2RaQdZx9j73ApUwrzXHiZ",
  "key28": "5wTrR4Mnmixg4Hw1dcFij3FAY97SdLNQWWyP6kBUgfAUM4LEVaLVweEhHnrADxMR17Kyd4a71pcnC6S4KA4pSeYh",
  "key29": "ci1BZZkK87YoqXFCoVoVmyhPnpFKR42VQq4QGnA3XDxb4hAxXfZydZqW3HtXejrhn7pvAowm7phYY55pog5RBrf",
  "key30": "5jnZRyGhUV66wE9sUjq7AULZnPkr49rjXpwsPpEY32JVW61kX1qqcKzVUobbv5obCXemaD61eLCjaBVmNeVBx9Dh",
  "key31": "31RYkoY2nnpzoRc1iYFAFwL7fWrpnCr8q5HytmQnMCfSimx4PtV59anR3Ctjz9updVc5QUAmt4zHrPu8LP6ZjZNf",
  "key32": "pSugqKk6cRPzu99BLAi4ewwDnRVGjayjJt9CWZBziKWZkog1MW1x78SQ3JU7conGdqYxpRbsTXiTjLxAiGgZqNH",
  "key33": "3U1wTxr5AZpXLWjWjzosH8Wrwfmr7FSnsR4aRswPMoRXqpBBaJxfHyzrpznCu59U44mpQS1jQttBpzZZ7G9AW1Zo",
  "key34": "2sao3xrYw8Wg1vJDA8sAK8pVoibxN97keNujgTiR8rZYMCQqYPNmhkmNLzJaSecAqMrGPFhy1sbVMcMpLyNrDRDa",
  "key35": "3vETsGP3TzNWVwFFRuUjsbSS55WCjsVq6UJPu2zE6Ah3Zt1AKmhSJvnaNyEXWe8wsKH4uJxPDS3bW1MZxLmKwg8i",
  "key36": "2Lwj7vGd6XnUW4xn6Z8zEMZpUrQypHzhXyTwcci9V8q2J1CkUsWHMmgrBgH6nj1dT7XVa3yRqaPAs8NgEpNXzgGb",
  "key37": "3Ls4LZq5ec2X9uaVhtCcrXnDParoVPWnp33M3LxTh5thZimAcnDSekSbw7orD6pvXRWcDD29G1XEy9gkLvBVSZqE",
  "key38": "HC3JwCTGXwuZhKznuec3hfANNDQ7uyB4E8EW7yxzsDJTG91wkbYyrNeGommD726P6j5LezAEmM2K9dSgmZ6dqSw",
  "key39": "7MCashf1Rj7wVJy5E1tUo6FgkZ5wshMCSFQQji8Ao7z8h4W9YDZdQjNgFLsEFjTjJspyB3sZAa2ogcS46256oHh",
  "key40": "3bBnHr1HNhqieQF1qnUrcm8RGVweVK7M3gink4DW2LNgvefeiarRusThB2Z9B58aeBZVzoTB9Ur526KzmD1tUXHU",
  "key41": "4HJrv9VwNjU8HPVx2Dk2d2ZYwczZKJU1eyQ6LiMxjiZgW8xYp4bUacBrK7MGZu2Ro2fYDto34Y5Jmcy3QC9VH2Kg",
  "key42": "44ve5fnMJKkhjS2YARoRyubHMZkDCJeKV213vvtrBmxmC1kS1dE6MNPhcM5vWFibA53hoRZFs8yhnpXTETgWBYxZ"
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
