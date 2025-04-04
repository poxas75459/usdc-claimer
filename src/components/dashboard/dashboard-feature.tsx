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
    "3EK53ChBVBi61Qed29puro1e5qoH6UzqsFxKyFVkbFS8DuFGTQeD8NEQhA5LdK88tF45vDWC9HMsB828GJNzrReF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eKutaSptr1wNNeVDKS3jofjQC9KYCJNeZigkcsxHLuR9PPTQ2vbg1CLw9vnNzYUSKun38SqMZJTRHPF4qw1s1mk",
  "key1": "3dMaEcvxRtZQqe5ba1VCHbWUB7QWRQjei1m6F37UqgZLKRZnfCr1pZkXZ1zPowHQnVuwuom8yaquBBAouMFxk9wR",
  "key2": "3NScLXiTdSxBMXanKYCEZieRLpLH6GHfd6aP4SBPNKsqFztRsQpBJmG8NiLCuxxnCbSzzc9BZRY7y7UDzLskFvLn",
  "key3": "64rUScxsB4uDT3BnN7pUK1LGD8hKGxXkFh7yUzwzDo6BqozyDrh5AkJQfXsUc1WBnNSWv9wdKneLGFuUkiwik2VZ",
  "key4": "4goXx3PtVn6ZS8ktuekue4DtmpDyk62soeMRxv5BMvdDknUpaS3CS5R79Bh2zJE4z3FTPJDk4ZyGj4NL4RfiNxCt",
  "key5": "4hLzjjBWdVxP4uKoANDzPdbd4z7d5VCbA3EDW3jikh3dHjjLp9GWi8EoNKEVKhGXyaNCSKq4c4G6bYfBYTfVpSVR",
  "key6": "47mdm66mXpj5TsGMfgoW9KzHPhXzdnGoSdwxTQx9FKdZWqu9ZUU6ZVQQb7uJCJt3TiYaRtMHrMVCrhSQh1cKeqaJ",
  "key7": "5kqX62gsn12bCqdRbN4jVa59MtwmLCf6jf15FKb6PYnV8odtkBoGQt8JM6ih3XQGf9YK2DXMBCzyU8F3XvkjFhpK",
  "key8": "3QZjQm7GBotJhoCc5NChFZ68WEvoEM24S4pdW6bR6C4wXN5LcL6NDnpwZH7o7vx8wGWw44bfVF41w2QwKrwfP25z",
  "key9": "48eCLmbZpUTJmdjUqrmQrwUYd94f32EADsVZ9tJWrQK7b9xRp8oPcAMkpcwmFFnaRcXQihXtmS13j8E54Q2YybVt",
  "key10": "4uEe7JprC4xpSA3HbCU1Qfsq6WSK7Pam9jWgdRc1FyoJiByahH9JHR3VBSs3roDumDBot8xYmxNyRkwp6XfYzCes",
  "key11": "4Da8tKaUC4RyvKXP3yYz94WYy9zU1uov1jLsC2NoWH2SBBxZdtg4ptdVJJQHiDmtLnWUHBKvDqyPukFk1fWGcGmh",
  "key12": "dBbWriQqBog3pgV41vbSS7aDLNCoych9XeuywbTE3fW5zcbwNowafZAxkSZceRKSPD22Bym9d1WAQBXQLFCA2Z6",
  "key13": "5XHvCnatXhNoHrS5acHV1EvDtsMRntiAGAMUtHJGNG4PWkNaDqRiXEP1J1DJ4rXy9S1e1pL8v2zjkm6CMvqZ1zpz",
  "key14": "4f7rQoTsjRTK12GrREUtCBdGyjaXrv9xtoevBEXKd6RQZh2zVegqHQN8EcVfUgaqt7KZRxP59NCkhHBkmdhLUnLp",
  "key15": "TGi1RjB9uaZVpdMNTjJCqTaV1SM1JbB3U5jnj5TwHiSRZLUmJrutFcHKEe4ys6Ayhqim2fBZuauz5GAhPTzx3nt",
  "key16": "4fTftt2mwqAWnGzVYAymxB9u3SspdzffUhmyFda9mhrM8MPGi3E45j8fJ1DYUPUEQU2eqpqJpUFQm7JtCddvxtfw",
  "key17": "DPJYJqqTCjHhcg3TCrFCk2PnCHSL6be3UPBJF8sYAyYeJVkWyzzBTADCLd1xb1bQNh7QG235PQ5FYfQC9LyoHS4",
  "key18": "2o1hhbPBBF3wxwDXnGGmRHE48iYXTh5Xoqd3qyiNEox8yptHRb1uHLj9EU7bwS1i8bDEZRjMn55s1br9vDLXLaQM",
  "key19": "5UKuWrysCVwLdY7D9bjMsdwSRjmDBUYqBRM5ZNUBhosRkrWP79bKot3q9F4GxCrbfHhkNoZ6i79UpTKC1uYTTu3h",
  "key20": "2i6UgTsFZ5TSinJDSWG2LuPFfugAcZ11uvfKypjhLBVYAdjRBSkjcnuZ615V1fjXp5GDexXTGogWHPvSEeJG5vWe",
  "key21": "4Hj2rADxY3EwjG71mfZoMo31wpQK4FBWND5AHpJuDXA1YY9PqfoXvNwiCVza3DfaXLaJDpTt6rdRiU4K824AnMYm",
  "key22": "2WhfMtLopEmvGzBBs7kwAdhtXFHiTcCqXCCzERivwYEuTYG6dNsDkx7E2R2QLDMfX687eN9B1E2x8AbKcjVFyqsp",
  "key23": "4pv9fBa8dRTevS32CJvqoHVLNiqhFgm7aaTAYc1SDVpevB6Tg4Dqa5TnR91Mqw6YjtBk828oU3K5WtsBpG7JKV1w",
  "key24": "djnpUnNAf6Wz3XozVfPgpLFsssYaFuz6cvW6ZM2784xQfuZZ4hNrSt5LsCSYiJsyWWe9bWswNjisSjg8borFzPX",
  "key25": "38QYN3RcHsq4XJcARUQQwCudxhdoWm5tjyPJdg1G2prZtsuhu7iaZLCx92d93AyGtFt8QveaiTTv1tbTfAJfJ9bz",
  "key26": "SmPs4XZySHPm63pwgBHuu4Y4FDmgKEDSEcwFzqYGQCV9hPYrTSotDL2ZupB1MGdLUtHTkZVc2gnDLDjAVAYqy1C",
  "key27": "217cVHAQmezc3MXsRayw7FWJM1dJH4vb18tm7CyvEt5m94UUv9uBQsztrjwUiQykBheTE3tNQ7GBMBA1Fyu5Ns26",
  "key28": "2YY6y1ghESDjj7pzXHePmRwYZ8LhSmRvzsibnfVpCM5VDLcqhWBTdyz2HxLdpM4aey22adMFHN5fUvxh6mxfUBgD",
  "key29": "4muhXtCidYgSJUhQBDtmXMMEusHpMCgp9m45yhUKXLZPwyqr8RGhZpz9AEQepnRVUPgrixtUSKYCUSB5qadkabL2",
  "key30": "4SBP1AnVxdbTHdxU8xfSJEjmgrziyEzgdwEUD7gCuwtzw8jyFxkacaJ8yZXfpqegxwEWLkL8k1U2LZ7yfARRHkf7",
  "key31": "4V6V1s1Hrv5hQvt23kVcwR6AZ8UfDahAV6vpTumFm61JKTuS6aUpf4srSxHC1cbKA94BRd9bonirevufh4mAP52x",
  "key32": "3ZBPniNNeSHu1qgCCX9zX1W6QUeRYyoPpDrV9otMAzdRjpVgKig5SUWDdwTbrMTzczNtCTGgQo9TeaBrz4xPgn3B",
  "key33": "4vmiJxthSN8nFaQWaL8Hfc6F3H4qxwpXuXRKDDcKW9dCPfKjTFs9dQeAAP9EEVWaGcRJ6XFsQo9uzJQH75NZmdHz",
  "key34": "2wMu99LUkgg7SghpaLrMrYVcBMsYcdZFJxBVAzT93eAbAHDEUVbMDM1d28DVqF2AzpAJCMfFHr5mFmfWg2XRjeBT",
  "key35": "3MLYpC4eQcJw1NSsgwDEC8gicvJcgDmkPRDkDkougq9KVFWByazPNPMjLySbmxRVwCcupjoSF7EmHB1Fh35z4JJ6",
  "key36": "5atMq94ZwqUEic63nEUjdW91wsKBpKbnNznaVxJLhoYpXQiogyecVad3cjbKQAh6m9NEtga8p54ik3ru8pofRQwb",
  "key37": "3upf91pZy7YEiAi6za4jEuecDnV4gV9bjKf2kyGectJkcCZ3vuEgj9uuqN1yu9qdj7cLexvCrP2SM4tFTcYXHxZx",
  "key38": "27J6NUqfxp3DYA5SGMvaoGY5Dx9V1k3jAQYCaTAfuLc5GBnaza5gmjU6BFBdbRLfrFH5Lw84hNbLAbnNqapPHxS9",
  "key39": "2zBQvpCQCnpPjkxB7Eiti53hz6wD2ciCwiu3J97ocWXQ1K5L3461hQ1VHyiFcLJVDdPLqgok32YkUCD7MykTgVHM"
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
