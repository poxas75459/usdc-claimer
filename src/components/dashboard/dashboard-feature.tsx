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
    "2EeQWVNS1pfM9zg6aW6uCpJut7utqLKVYTGVKQUzC31LMnWSkfvfsfFaBkDmDGbNshqKBYhUsUktVQnKd6oLkK8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RmhCHciH5nd7byf1y722aMxvzPG3aShC2CNr8EU95UWsqKVmRDG1zZSrG5V4amZinGzWbKhwZ5nX3X5ALYFgEpo",
  "key1": "3Ws3wgXteBcFZbd7anc82eSiygKMAjXqtUzPfKvaHq4YJaC7eLhKLvLiZ7pRBQ6h6BKLyJJVH1LPiKgX5sbjv5vu",
  "key2": "4kJgYfKHzWYBardqu9AcTrL6n27gpFZxiF8xvPMVduK5ehXHQFM4eKB7y1M1fsBhwQ1yHYAQPj86NsYyCpHRtGME",
  "key3": "4WxuFJesy3KpLJEt91ikCeXRMnMTRNRKb5A8q4HcsG4Uxy6K3bZWbUQ9yNECDs5ZAH44dpckgknxZPvDCEJwECzi",
  "key4": "2tojmH5AqDU8NYVB9Z4D2v71EYJ5KBR6tdvofnKJk6NiqtJ7XtE7DktjeFn36eaNN2UEMAxzbG887GztjSJ9YnVT",
  "key5": "yNkZT5ZW5RiFaFen6YkdyG3VAGnbuWhdjW5YpixtHCNkfpVRpeAV7CzLV6bDJCHUAGtgxw6Vc3RoNoR6fFv2qai",
  "key6": "5Gefi2kujCCBv53zmHaCxmCKoUYPzKoYEH36JgkUc6Juig7Pg26DBZiSfQB9uiazyntx1eL4QKQwNxBk1i9gP5x7",
  "key7": "4YxDM9HakGsR7MHMarfMoNASaiZfscndmn6wMDucSAEa39tPFaPtb33k2BTu66JxWB8YWnUMTdpG7wU54CWY8Tyc",
  "key8": "2GHx9rrMQuwv9XR4quDHiTafaxCg9oSp1iJV9Pf3FLqof5yPAJcT6KjQhJ7Zx4qzY8J9rmmHLMhxAceQYShRFy3h",
  "key9": "5jP7AikU8QN6shXw1YAnV7aM37nf7XJCriPym7pfGpBEP1LDpcNYmtoGmkEv336R6sW7frHz9ugcKtvihhuu4CFB",
  "key10": "5MvZjnPfbxiAgnsUQFjqqp8N9g9hxK4wkLyFm1jbZ9fRDcGGjx61FToyHtrbuUjCEvq9mu9X2AeH9YNKvKp1352t",
  "key11": "2PQZUUWSu32wZ3TRRx4w7rAVA2bhrUsw6FuPRQjM1AMoZtjasvd83xVYiGyXVcPrdX5PziKBwyf3KRpg7mJvt2m9",
  "key12": "2tcd7u3qRWi2o55zEUZ2gctPTvxjWrJegRb8QqcezfpaNKBcEXjrSsy2tGdy8hMeUnBCh5FPeZqoeXo2L6t1nKw3",
  "key13": "3ae7SXFJ8z8TfVPrC5byuZP8e3jZcu8RsqwPj7QxcGCkpKKgxnmbqNtvnZtWNPxEgUk1wQiDiEy8NEm2qNR6iAEa",
  "key14": "47U5pzaWQrjrbjxH93uoSWBc5SsgG16jawny45jVTpRXuKBcGC7XfhzQcdWMDK82sWjss8qCYgrbVFQtA4mPi9u1",
  "key15": "7viLzxsx2FLmAZv2pMmTyGJgSJeEnfGbhobrQQq72WvwLedMhPs4gxtRcus3nuKMtwftLHkd9Td6e4j5BA6CbYR",
  "key16": "3FVauqpeuouLngW2K369NUtnypzy5g1rLWvsB4KZXA9iKmfXM9yuecPVcTvS1xZr9yGYkpWPyFo47eVyQgrbPzRj",
  "key17": "fNG6GVvCjsEjDFfFzb4hz9z4hBsM4UZYmijrJBcPovnt5p6x6tUNczePAkxHg7cADwS3ipV9YJ271M91dDEy9CA",
  "key18": "4XckpvoGFHNDMU4WHboCHb8pi5WFvc7hxgkQ2tBBwvowvz8AfgbgtpDBH7L74nmNdTWQu3MYqRLwHe3RsUUmmXjj",
  "key19": "5oYJwwGTZMTSMBToKtcxjKsE6iEMswveSLYwswYdHxSv7zNV9CpdgFc5EWS7ZjkuDgw6aRuahu8N3ZZkcftZHoez",
  "key20": "2HmgyPLZu7Pbtby4EQPrG4ynsR2GkQdHGds1CvyiLcnvmFbjCRE9Vj3JUNRGzwcxnDqnSUPTGWaTLzi5PHHTevw3",
  "key21": "4bZXURofrRyaVLYX2Wn3kr2jkjD35mAeZWJVWggs28J9uvuxseP7sM32qPhUqcGCTRAbWwkuLxHTExaLFLt2KuV8",
  "key22": "52PGBmquKNfNwFdwCYCXCuWYpCrN7NbvYqs1nGNKbDoh7Pg3wqFnRBVWuPvAo2aqrBdESjoQswfu2oMxAzRs67Va",
  "key23": "2KEmvt5yPaCeYYch5WGBSUacoDSzXYoW3pd7nCPeEp3Qu58h5WeyE2urq7NmXHeVgUizcBaur9CfmqDXjUJarWGp",
  "key24": "koevR9XQR1vdwAGpAuYhmnSjjKQFptdyPZMW9EiJM5sLRV6Z5jrGNWKEtvPUA9DEZK7TevAnKZtqkBeev6J99an",
  "key25": "rBAWCY3oNLWCEjZdFzySapkvGY7oJbx8M6h2wSLCsvzgk8n2NpTrH7C98Bd4CiiFUWw62HsguFX6Gbk6igkjN4Q",
  "key26": "3iMP2XXu9QxPQg9mHKEku8SdgaH33V17wKqKN8XjKuQwYCJujQznABHsFJwCtgaAriEfWMX3gF15dUh2xhwoFpDR",
  "key27": "9vfXcjTi9EckxK981amygoLCj74A62SbMRdudjPY9QmzUM6FCJ4yzCJZCAEUV96bW6p5D8FeCjjnMkvFffa3LgU",
  "key28": "4YsgeuG7eNnLnZ9Zwi1iudZBZHbYe7VL3HTn3zAQGrPynvgmiUEG3vUz8MvxG6pXfN1YdiGi7jaJtwJPFPr1AGVk",
  "key29": "5n9yALfQXDbmL6ZGcTyeF9EExsBKPZtUxQbo9fpPRNRFHDUVwiLqFPJAf94bM6zGxyPjqw6Wez5dx8U4L121feyt",
  "key30": "5Xu9vrM7mvxJsCcJrPyhAB6CJjQZa55nEMx3SXrMk17xEigSGrULzkwq22dTgxKUGZXEqssZcqdtnKXuNyyeJQVs",
  "key31": "2uPo8qq5mRzMGdXwdT6btgMtd1e4rASbqJPnumjJkxM4thtiDe79qxwJzPWaEvXt8tZKuFuxXVByToHqXSDhfizR",
  "key32": "5jvpviV49e8DBkDi5g7CRUNef4XVRHjpcFbrJdDBLU8Tu1Cgg5EVaC3EeEgv1ocCyzQDqoQzFZzBsM53AhSUwn2E",
  "key33": "7vWvzXoF8C9v1EBnkxpKTyZLYAAkjJ6WCcyZECENah7ApcA1KhbvPvNUB4238doe97hV8arrjDFyFhQCvkT26wd",
  "key34": "2epn36Ai4aUjchdjQVvRdqshf5v4rewBpwhzGZshnbt7DWbpePaByZjySbQko22pwg229mvaSkVqef9uPnUcV1e",
  "key35": "2Kaa6FLMme45PXjajdqe2Aim8cPfTtG33iMYD8UFXFvZ9p6pi3uwaE1k4YyG1a4hffbcKvxAvD85VoSVeQ5t1RhX",
  "key36": "4AALWa3xYNB7RZUWPWrLUsuFdoW347zxLN7JzCVn4QjkHdBHM4GcSb5WsNdmJ98zEaJ4SsUmQNL2drqLMYeZ9e39",
  "key37": "4M7hpmh2TkLBrCrnT5ob5mqhyVj2QedjvGTZQnDM9TtyKPaeDYtR4DhAr7zcF7Bwc9rBU2YuX3gjG8TwfR4gLcr9",
  "key38": "3aTV4YG892xPkBLyM5deDGM1NwTw4PwzVXBSLfn16jQ3PfsEKGPV7FeRGFPXdUcAQCtvpM4PkCE8tSHQW2zxgnHB",
  "key39": "5Bnxm3XQEFerCAvpH5SjVJn9wyysevFihpCCYCJSww2VmYyQxQQvn9X56X7ej6urfbpUcfSGGBarRsrs6qqnxTJh",
  "key40": "28RRPyG4NQNKQBLrNFenFQAJ6qX354iudmXKoPDfXCYqCW52o49aXary3sVoiMtCepqh27K2UD6ociY14a6fKiVL",
  "key41": "3QkrQyqM3pnJSvBjz6uqapyGcQsSbVZg4ZpjPDrTE3kKZwYioWxHgGBmdKSgPAEGcZv1P9Zzjma4HWTXM8rzBN6Q",
  "key42": "3rXjP6csRKkFWVWxhqvvu4BqmnXEuNbF7Y7AteonnFjaXfhp4pez6kNxPR9nT5WKVQmcTcX1qygguQprMcF2viyD",
  "key43": "5ofkM6rpbji9RiA262iadchcAMTkhGsz4C7FPXbrfvw4LjCMMMu4fUNHb6X3tfoTfikFFA3ZG9CtStfzi2i9TsYp",
  "key44": "2irDzXwD9YyZ3H4AQq3x4SmQcGSqxbChw7JBZZZEvZY2TZEpNUACqBbSwGvmPtVz1v3Wq239MaRRiNt2azmitHz6",
  "key45": "3KwyTqvwGFkSLnZuXasKMvby9wQ9ffmEja8YnSenQ3JF2QCohC4CXBD7cfJ2JiRJAMmGejuCPuoLApjDwrFNzmfk",
  "key46": "wvs7nf4vLUHxCzPkNaKGroKbsRphDq8nwkvtnPyrhTNytdYGM9UXLq3pt4Ybx4xsNvftZfvVf1DUW97EphrRMyd",
  "key47": "4VNHeXDeWYLzHVYzF6HE5151DmN6DavPXggjSQ1BmYLuLNHpiCxKArj4NnaYF6BzWjd3Kfik4KJpr6b6nUqtWNFt",
  "key48": "61FduH1ZtQkfRa5keYQsRSro7PHoY7oHV5ed4c5g8XdQMFZY8MANaH3B4uj4hH58TB4AMfnHnQrjnih1DrsevUSZ"
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
