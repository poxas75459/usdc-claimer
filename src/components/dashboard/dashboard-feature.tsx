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
    "3SUKGDwaLCWbc9bNE9Jp7xGP4dvDrzxnevAxuFVrzUQt35AY78NaQZPLE1Yj3FWKMLzLR8bpvXPQ3KGBS854kp7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KtvHr6AMRwzNfvQoxD6yd7WHSYqUmehSPt5EjCaBxuRhF1yKtaovqmnNRvuZcChJeTaRczP5fxZ9RTvVYqtezEa",
  "key1": "48ym9QedRCwAecHe35gfCsewdUWz3kMUbX29TG1zJYDL92L5DDJ8gnw7oDRncjKKv7C1NEZ4biAVgzUMjWmqfhjE",
  "key2": "2d8S3vso7X3VVg2MNJjQ1Ers9njpvxQfmpouERGNKFuASd7Qc4FbR1DMfq5jSakyaQ8BKhDQqWW8zQWYeTf3zAWm",
  "key3": "5UY1ZpggpCMBAZsY8R2fC3Qk9fVKoAZY52zS1qMs1h2A7vDxBF2T9ZhM7fJpH8ahCRR6ajfMhahNyni3Z7pWi9Ka",
  "key4": "eFgm6CLnx2Vppudo17pxmKD8nHL7YrUxd44u2XFMneh1XzwBkjhkhvBAtN1vKxg5ekdc6pvYEVSG4KvNQfn8LKN",
  "key5": "5L7emy4Qb3z2wjvuPS6U8rRyQg1SoVWfRCCAwPhAecQXLVmPsrgmQ7DmaqinWvFSDDdz3K7i6y1fXrSrMJWWqb6h",
  "key6": "49TFi3F25ULrkJ3GCP81KsF1g6nETkEwd6eaz6UABMV1ZSkzm5VK9ZdGFTmZeD16RqSm4AvyQpydmK3tdqkZWbJx",
  "key7": "5VwwxSxtVm4cHStQpN7m7DeeYXQycDXWeo6bjMaSvJ46weSprcYz29K98aAriPrZtZHhvJHJQh5kjSKCvRaqFw4H",
  "key8": "43sx3LK1CpU9NuTVrxaYB3iRNti4gNxQNuQMHDJYYjUj5gnp7EHqfmJeanCUdfUPvGjT5VE4JsC31Rzv68gtCt9Q",
  "key9": "41Jq85crNNQpjmKUUCtWukSPusoMgsfrVm1y7KUhTxyw6P7ccEWEXjnyjZZ1QbAkyL4sqCAN8o4f4raBX7WridKV",
  "key10": "4NcteHjCZCqdV9abp5PFkurMZhWmQVhL7vbY2Jm5weSFrps1uQ9LLBrS3FyzgkXSZav4Qb3SDjiuPnScfR427cmW",
  "key11": "3Pua1eG3F6XqBViimtcrLzCQqP1o7S2GTnPuoR4hDF3M6axTdt9g6rGuaHgRWPcschoSnxGs2TYZcby1EyHGpBiP",
  "key12": "2fJncAuP5SpBDY8EidGsx8PSsTC44opYdJVoz7ZFo5847Dx4pdUBApQH8CwoHuDYm5NXKXnKx18uLMzXnkmzS2Yk",
  "key13": "2abbwoaG6WKTKw9nC6auh4pyuioGtLg7uwSEWCr7S9uCsRN49rt2XPZXNToTJFVEHTEqw7k2KJEPBiBULXccFKT7",
  "key14": "3hM9kUz38QgLt2uffpvVyHC3odMEhppN8eCg8xoWciyc6pPVZJ4fN4YhGb4qjGDdRpBWwXKtThJey75ubUeBCHtd",
  "key15": "48DoNMENyGkywwtff8AfnSV1T5WS3s7aoGkt82JLNMEjfKZcCt6NLWNJfao7mqEqr2VymLwsBp247Kj9X3efoRxp",
  "key16": "2N6d5TDnssa3NUuY4dv4iDPMaBRqDJyifEECkwUBF5UpGBcVQudbKveBnneqEZjWRf8uxDw4BYpdTiGnmBVkgtjP",
  "key17": "2NEgJXHqgpBNmHizLT3goh8LRyAap5pEpYTMNAcq1g5dUwRMDtittBbSESAGJreFySsLaqSaW4zaXELuRWm8dPh1",
  "key18": "31ZQwnA33fATr42pc78w1r31sDwHHUF7m1M2LUSc6ydx6h8oLwHous9SPvuTa2dEvnBtaxuudyD8kf2CNrtrHNDd",
  "key19": "2x27dHHC8Kp5sU8rPHScacz6zsejjuzmdTcs9f6P4yFBfFo8HRwp1uaYLTBvD8BU6kCgBgRhkaCipvUMwSZYWbho",
  "key20": "AFTzQjFexSLx7KYor5Y2zBRpzEzpLvUiWaZBErsQBjnYfniqAfyShFwYR6uhP36yjzzquMhhnnxk957Em2ud7Ke",
  "key21": "215kYQqWKZcv8DfghRTKNtQeuHGZPg5TDccPsPPe3ZAUFsFmbLwVkqoVkRtJas2r9DUFxmHik8Nfb36D6wK6KVaD",
  "key22": "uMTxPSNZKcCzCmzqdnKRBZQ9TpNsP4ppyeG42gPiEtpGh4NjSSGwybWaoHWy13vrEXRmw5FW85eEdBJXMYwQt7t",
  "key23": "2xauABscH9dkW3qFJqk4pFabs9VcDvzHxHR2bF2VfL6gGGTfeDuNZ5okbR8QV7Pem9UAsRNxXBcdgYbPw4eXHYmD",
  "key24": "5gupCQVZS4kFFXCZU8kGTq6wdjUAohaz8WCTA3hx8U5uKvLWa9NVbckxjoURd1dv9gmUPFzFsAPP98y1vk5S1LBs",
  "key25": "2EMw6mNpWekeykkJEykVtnbnwjrcMsBDJeqGZpaZiti6do3JW1EQMqEgbimBQcJ4LXuRVvY6tQbac8UyMLQTNoN8",
  "key26": "2rZMSmiDpMtBTs1Kj3gHJ6zEoZpzex8KujdSwcbd31vtMNSv9DBjh7bMJtH7nfaokVRi38NMPkA6L8eBcNhKMPWD",
  "key27": "jQj9jgawLLa7qi57d4TcQFUbSbEtPnF4VKK2uTXZwoo7bVw8jqFABKmVYBdhyYAjSLG82k8BmCYkksZTRoymkXC",
  "key28": "3PRTHEwszGGf3noFSTWALEWK9eYpiA2WfQCn7rjVSghq7iT7wEGnV4VrkvELWC3NatcJ49DznFqYhQgYHqk8qCY1",
  "key29": "4J1px2RvLeNEVJ35a4Pq6LpQASEvjVT6KDrsFCJTy7YEoqzF6LKE6NUnn3hjwawE4GrywAFREezaivRrHaDXkyAr",
  "key30": "5AvvXeFsCEDagkSW2fFnRzQTTAT2RMrVRXsias7uRScUjJwWFMF9cfC87EaMyh9DstSB3aN6MjrbEXnUxYxTJi9y",
  "key31": "3Aca4juvCaeVWE9Z82eiBqbZePsaEq8RDqJD6Q4DqQu9u1zVX3UzqDgUYaFEeG3A8KCqy7GmqbLZGrrJEShD4JUU",
  "key32": "2Pa6mgVA1v7fkJLgPjD7wSVyutJRGQ2PpUSXiedSJWz5fhvh1fJJ9ZdCPmGvt1htCu2kdw2nusaddV6USEsQbUzA",
  "key33": "2w27oZrvNRUTgp9ZjBsd9kdvQu9msUKKvYcVJwVLQ14uTRY6jFuVmWiipfLGTjwv2hov8Ykzt8CJ1MLTyzCfW7mQ",
  "key34": "3K7vn28CZwKFTF6cqW9LBkHWY3DWf6ak2hunKzee7E52XXvHzv3Jg1nUdaHnqxjWesk5pFZvZjgXqThRcs54fXRJ",
  "key35": "wr7KPW6oCNbHd1oXUcKyJeBFnJxNH9WFyvBYaF9DKD84kUAEdVYmiWEYjFPKwJgedCJ3jVHhmE7KMg8HTbWHg3b",
  "key36": "3U48cSYAhscEb7NQ7anJzJhRC2AP1htpyHN5Uo6gZMi3reNYQR9aPqaCib9T4zpLKMt9whu5GDdpVn16NZXsxVqW",
  "key37": "263LhVuz4L2xiTDH42RMY6dA6RUJ9Tuse8e5PgnwXfwrishK71kXNgg6EzSA1q7dZ4ogtGo1QELraWruF8evuHHe"
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
