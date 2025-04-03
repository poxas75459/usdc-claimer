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
    "5dusrn1ivKX67YYqRMrNvhjez4TVZSFS1QaWKXXAxTodLQ6JcfZRPwkhU8efTKrHApDjRTH2UxyZYmcVDSo66aD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WVG4sMcwVNQmZVMqj3GSwzPGCQnPpWsg2dayEPR1tQyJDWmp321EH9yD4apoV3NNDJJ8UoEW9NmJ4dx8bB4gs3K",
  "key1": "319gaBshLCcH4rCM39Z8LPkcpb77iAT1oyXmnZwNK6DP4EeRN8ua8JjLWjJtkPPbyb923UN2GMmRnFb2DZwqi1o4",
  "key2": "4rUitzMmKk4kS5DUSPL11wEhJgF6zh692MNYbwrVtFaY3eUdZg6ULBPq6r2w9ivCW3u56qZwVtvPatHRPALqyahA",
  "key3": "3tG1krqiTcerWRYyiAHmks8Y8gpRgvmRTSuubVCLMJ2PhgPcNYfKSX993hyJE2CfnkTnZhagjYUhatnfTVMCKoL2",
  "key4": "4L6gYujxv1ypZ7rUgT5gV7KU1kkK5jbixEGRy6YDZ8zUCS3ykYHqa36vB5dyGC54hDt5VzWBaAiFjaZxkUhqLuBe",
  "key5": "3S5yc9iw7Rvvi1qCCRcAB6aYVXpPocWH8T67Kf2mjdYpu3NnLw5hQHXxkok4xsB47ngi9zZe9ZFH5TaP4GtHBs3s",
  "key6": "34HaA7Zr2zLbsU4R56K5KwH5n6yLeuwFmHjnRXPr76TGfWGC124qXsLoYctigYgXp6P4SnsGfTXYxMghUX5xb35r",
  "key7": "3P6SRrSN2jkTzVRgEUDYZbpdXUt9UzKgUrxTp5pkNJnhbGS41JBf5kCmeHzYJ4zCxPyiirqyerGcW9qw8k7Wp4nX",
  "key8": "4KaQnHQQyrWQcErWVarUfuvFm8smN4X8QqQur5ojHFPUjLDceqwHTse728fcic1uLaVSyFt8u6dDfjSGVrPA1zJr",
  "key9": "3qsycdaiik7twk45XgfzUBjpQHaASeSbgRDSKNjkdKdRBf9RYj59S6hRPVn6XB9M1uMqFXB7tYVmwHjzUU5tTdZ",
  "key10": "XamxXGZ4YcxLvocUhBwasXyZRyNZ54WSkpNdutwpsAiWoqFW4CLS557wvxTaYUFAqh5nw1rEd5DVXPfn8M82yjt",
  "key11": "347ZNYtT88taQYnfhyHt464RjUx4FZGZ5GmCXQRFCoiP9Bs6S9gLif3RyHtmow9tcJCaWLvHwvT4vdk5ESVH2sF",
  "key12": "ETECmgoruFwQPV7FcQkcMW4F7zcM5FH7RL6TQPmaWjhuu36MPRf3kv7m7T8NRzQeYqFmhffbmKxuRd1oUSvGHHe",
  "key13": "5PbQ2HwmyC6e1LLnxfMPCvFBDTodZTW4NvJzYCfxoQzajjf8cm8UuLbuDCzKEkrfJW51r3fGyR5fkuy6LvTeqZh2",
  "key14": "4vEgaabJFLwW7vmwYpQFf5oKZmFae2dGXmJnRG3MhZEG2dhpKcqzjjCg9V5mTjgXrR73SCuxi9LdLkiKd8ameMku",
  "key15": "5s5dYLLrx8TGVmW5LimjMKVQn6DCCjs9m63MoY2vRZCa7YWFxcmGH11SwNbfxhwBcNtqN37oqvzqyBpSdjMfkxxW",
  "key16": "5QF4aaNPht6cVPVUHNMWAHWS6DLgqGhZHaKjiEehnSkK2zppLm3Gof2mWf6vV7U2LxYjC37QexZ9z8GhVEe26P81",
  "key17": "3hkZEbAh27FZTBsFunLDbKN8LVApBaw6GVn9ruFvnve3YYKdFmMiAn9iC3fogG31hNCdQyRWYHqjeuAbLg6fyLbo",
  "key18": "37nDaCtrjz1WgKyD7Ti6GRm5TAEJhudpq2kpRpwx3WSnXYcKXiRL4q5kehqmfuun3e5JcfqSUnU5LimzzWbSANUu",
  "key19": "3so2tz97YphQnvoQhNnf3G48rAxqoz8wpcsBbwc3qicyLKDJHfZXMtf1qp3fwtr6gWXzaYQLSGgsQFrdESKfZVkF",
  "key20": "2jArxMgGo6wayHVjWqLephykkrK2HPeBbWge7SGaEXh6mwwjA8fyGXpmtVwXY8VvykZ5HJP8KQpBd1cPxFhb8SVg",
  "key21": "4PBCuQBcQYXsZnV6DVqWcvqEBhL47Pc9EKiEta6C1jCzXapJ9NwHGn2LCKGKuhXazXST6vHtmAwaMdNa1pSZhYTV",
  "key22": "3Hscqj9cq1jFynHbQMjrw5VdT3TweoaN8dDrh8Fnqh2H43HE4sUfXuePENnZ8VPPfhSGt1wJhbVybVehmsQ7WLWb",
  "key23": "5YC7N3kojKvRR53aYXh2sXWvtdFu4xM2GR9kH35QyAu7u1nF6bk2wCkuuenBt4eQv5qqoc2ubep7t87njiSteEfc",
  "key24": "3RVGkLpeoZ72TVxZak51dQ8i8WGQky5SbWJMJkNjHAhku9ACSxWRHaAjqNQnonMafUvKbYHSocyumuvWUpT8GC3N",
  "key25": "5pPNfL3XazMgkWsbsLLXAnwbZedzqs11faH8ZZXd48nHZXQcSjTQvLh1HdoDcbktu88FL1wQrsP8WrwSfNWHWYZy",
  "key26": "3sqZBdDWT3gSuXdZ5K9J3aoaToUTJLQN3fPXkD7RQ5S9sGEovP7WgVYSavsQYyVHA3u26QHwUwKiS77baaupoqGy",
  "key27": "3MjEhAwPFJRSDvZ3KPFyjrbT2bd2xX4EP64aWV1CTj88XbjcJCSU85zDbqbfGfVN84g9NHZbk97JhYDik7GgYioE",
  "key28": "5bVEgoadEbPCBzCxX2cDvps4quPgbGieXuddYeXNvXygbrYwUwPEBpzvTpuejLnqFm6tTMTFVJfyNe42XLK3UFz6",
  "key29": "3fTX1cbryxtDzFsD85sy5x7yCjDLuJ1im34fa6MiCPESnQS94TnSdAuMKJemXe1R9kKxUzRQaDFrf7gvxsf7XYxJ",
  "key30": "5wM1mmopfjmH31CrGVQFX1gkqot4jUJT6w49CvuofHopRqE7iHdR4MjFVCyeRbFWUY7JhQ56CYfNRz3athZAu1W3",
  "key31": "4vGmhjtnMH7rYGwCywmKVkpgYQXhhKTvrm5vHeuHUnSXoe1FHKbXTiWRDR7fxiaW7ycoQ7ocjNsPXzZ3hPgJiGr9",
  "key32": "X7JDHAaCK4QbU3v9VDxo6oyYQGYo98jgHaxU2ebVybWX3XMUHbi7aRCR724LF67rRD5rovhRW8QkXUuHWW8vjke",
  "key33": "DSgJv8Nknneg1A4U1Ugs6Y7dYbDJNZRV6GWCDxPFz1fBQfiJQURTxs2J6tasLUj9oSaGPDTt7y4PvrGawf2qNFn",
  "key34": "rfZzqVRFvCqpE7UFijz4MLndwsJVVWWwyhbQnrh1zvKP79aJnT33XqPcAhW8YccQEmAYv5LqakN3z5eVygnWCpG",
  "key35": "4EM93DEabjpXkvXMBuG4rabTC87pY6TEnLcaSwNeJ53fLsRqkebACsTUMgGtHk4TvhqvFSmpYe4fiCWFYTdZ46x9",
  "key36": "2WXVdtxu23dDXz6pqYpr5SEnEW7UPDj6UBWUk7BmUhP72Fk6FU6hTfDG3DDFTfzkpnUVGsRqEGBjMEyTYtD3SXx9",
  "key37": "v4PpN2JNNtU7ANUFBFDwsWmYyKoynvE8ybcYdHZtKspUCawmHMtj24thd4RFPcgzW1WFMthESJvsbS4DL6vRdmN",
  "key38": "2Uo1ADBR6JgxEUQDhQCpomLUHsmgkkoPqmdPK8dddKSgVwSmUgKJX5yG9HsFo5rLS2jZYsBsc9CS6SaPzKXeWHWJ",
  "key39": "4JaMijdc2qzz6Sy3yMnTuw9Kg56Q6Kf4LeyuK4ZNzHJKnvp8DEwHuWBVLpk2fq3mkYsdC19Z8x4ZSuLC9X9votmR",
  "key40": "511timgWZZma3dGBHJhCzjmpd6jbmoDxc1EwaVT1jF2rRQWFkbwH2t8N3KLBzqMPn4fhptUPcRjzrmyj4QgxVP4m",
  "key41": "NoaYpBX4uRnD6pYAWNfpiCEHVWVKny1jQDceKVi87hpwMRivkcQsp63E4DTd1CSdm68ofqjPXR9xLAoN8uPyurh"
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
