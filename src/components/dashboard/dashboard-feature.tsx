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
    "3KaLeJP58mNxMEyqFVi8QXwDzeEarHaA814m49k2Z7KD6c1Qr7W1ud5PrnN5mEzCHCcBWL2iL3ZPcQeBQyhtgrUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yy2aTJMMoat7qmr224iXpMCGR8G3FUajQnvmWB24x5jRec7pmGakuFrs9GkEo5enbqPVhnBP3UaHkLk72cFuyeT",
  "key1": "3ZHDuVGfJKoymc7VUzi4mcFioozijEootZoVw12zMha7Ss1XdEwR6KvnefKYdukLEqQUCwxqwy5Ge1w3QTVbomEe",
  "key2": "4JnqkB2ATqmy66prCYJSw4XrGCszi4vzAMRP7T7aQmbr9JVwfemG6pYvr5JT5MbRLBwn8DBkzEc9XTkkxDK7V2sQ",
  "key3": "4TUk3DSVAM8gK1jjwjSzQjJsx8wncSfpJhiY4vtJE7GiTANJ9AFRYduAXVhHeQLF4svZ6iGfVRXKQfQLJv6QZGS",
  "key4": "5TmSfCLC5LTZV7jDpq83xevEUtUBgraEwwujNzm8J6vzeDK9i9R7fhHMonk5Xh9a8fxVT1GD2novFg884X1tuSdK",
  "key5": "4Vn1ny6NpuB3VT3BhQiMC4BdzyRf6HgXnfnthekzzGrjn2xrq2QNKgdrcxTEmC5KKYA8EzDvYTDnqieXiSmvucdC",
  "key6": "3NrEGo6GZHfULWzVVsSVMrPjL1kzxz7hLaomtPgsb8YCc39GtNRyK8qSXgwMZT4aNEHaKqh68FzfFrbchjqyKebF",
  "key7": "4AnPtgvT5cmGnhqpQmX4QCw7sgAREFmruP5fuGZEj86h7dn6gm8uZreDanrzYyFYyfu5g7U7XhDPpEWcVHKt6RJm",
  "key8": "34C9oziRm7aMyduJcvDh16byezRG91TjxKqx17uYDFZdhXKx7LAsiZUmMetL8LWUpRhBLj41gM1sKCtEkzKA3U4M",
  "key9": "4fJPy9JUtuEeTxJximJLQwk7bCqVQf35BhxrpK5EtxdL25Ta7dbGGsQwuTgZ5qW8j1xN7N5VTQpkhU7qhjox1gaH",
  "key10": "5RqXmJGM4hDJpwkPSdg7bwnpTuhZ7A8LfNYB8CfxbSLovPFmpFEjECVm8TUwT4KJHz1YmUC21APDhw14CqV1Bc7t",
  "key11": "qw6oX6WBpjxVuHakLwvugBzNGJ7pz6tu51nNeEazJjNu5zREdxsQxwsejcbzEr3i2q6NgG2VUjihvsqH4xFarRN",
  "key12": "2AeSr3PcJngX39mZVtVmdXzNmm975hUUpnx4CBADVzjHkGbL6QLaFwkxNbJraA8W55MtZeQFJWwAF8nzngV2FwHM",
  "key13": "4jNDdArYJFk45GJwTRtF4SazgYvPVVN924UzyvxyTzkM57bKctHLR849iqVanAdph4oTPxvdgS6Jopo7UbSckApu",
  "key14": "uV8SSKNmdW1pKoyXH38EDpGqcVRSuAH72ParHv36zVvbEApwuPX8fzesTFjenFFaHboCNXai2cmj5N3hLFFqV5P",
  "key15": "5f3UvJrWi9B6qnTpcG695Ea4wS8b1jqYGL4jRD8Za3uJxnKkWU4JJ2Z2gbhoHefWuNpjVSchqRZ4esS5bg1shbHm",
  "key16": "4rSrnMJmbh1SQbUrCz3Vj8toJ3CWf3ETsC7c7ntzZpitZb6BYB7G3w3h4DeLvrRR2kB6Lej7HoQz53Ei63nekcJp",
  "key17": "5QHACzGvpKHSvNfq9Xt9w8UXtXiXWQijC6FyLMgMeuMTx2Da8PW9WPVuxfWb9QKyA3aFBtNbgG9yT8k5AAKXLBjs",
  "key18": "5UqZMp7BKi4DTUGD1xuBA92y9gCxpBPFZqywvSZdc3NW5wnjnFfPsLidQabcgmrZ9cktJJkmRrNTtrghhJauwauz",
  "key19": "3yvR5scoayU1hFZ6iTJzKRGLpmicx2PHTcyynEdyfALy7CjVgNw34LHr2q3kTitNpPYtN7k2gvsuTP56tcmjqAJW",
  "key20": "3inaJ3FdzC89haatJRN929jHfuiyAPZ2CKbeKF1XhSe7tLq7zhFART6eA5KVbBaw1JkFaaoRxdJh8aSC2xT4QBJx",
  "key21": "4AUbXbnHGqCfvr5pvsiLcVU6i2XJ5PcLtBEo4qYCos9f8L9TJJ9tNuoKRJABPU9RfUTdYRoHiyAbP3osdJG6gvRw",
  "key22": "2frEjQRTUfucpUKowE2jzvgtavQavxJ8rGyLVJD9VsRMbgtQEfRag68qQU42yZFJUQZMhZUwBheXpd2EvxMRHZG3",
  "key23": "5QAeJgFVBt5RBNeGxsCojQTBi1Lno55W8kenVtAdiiNFqgYGVyQQSvi7UKS7SZu8Vm1YokeAmwKKS2Y7jGpVUVYu",
  "key24": "3jRD8BMpsKSGf5LB5aRp7Rgy2U1VKxwtUKADStEVDroGnRHZcjMDE4GhWV1K57veV2T7APmPPe7YQWM2SQdQkHuB",
  "key25": "5ZD5GwNi3RMTTedFt9Xi21NHEtarwWV1bo8JbdHZiHcYWzGXz8oXPETasvxRWYpSRG5yeMLmdCNv9SEPmVNoHaDR",
  "key26": "3Y9ntYfs5Phfb7jxUayeofdL5GAGtUQLMsLtT942rpmiprVC3DCwXCcpvkrs1RbuibWW3rHyncCsN4tNcbRnV3Vs",
  "key27": "26U6dtcCqyQqZBzeVornbZvePGNMMKsPoefVvyz6w5BDV2x713eJv8mkfjb1dhF2xrSKDN5WutXn5gbxophvyuXp",
  "key28": "2y2kZTEfUdTHaaqQbwnVnANaApKnrEPu8NMUR4R4yKRnYJexBE18KPCnVu8mEQFXZtR8FpwumDDZmRAKxLLUvWSc",
  "key29": "5vCNoEmH6AgJZd6W5LHTPTkEnXLXqNHuHt8bkAzYA25kGMBp6VxuAm2HRj9ggXrNTxi94EGtxTCKxqygc6KDFiS6",
  "key30": "2iqtPLkzwwuvdScszPukS8EGV4KmL5tdRp1ovWthLMxURGTYeWCVEsjs48DNQRaDXvqH4Ggb7URUUwQfVZnY1T7x",
  "key31": "2saiq8WgTacj6m4fb9ynjR45b5saa5Ey5gZLzMkc3oFudfLZiiaLZioCaxPLUEW5D6ht2rvpnLBq6p5VxD1z57jt",
  "key32": "2zJPF7SaqpaZnQBbjtzzfjYY2XJ6EwWaqWn2zXcLPW2acsMK5xpzkZCETQ9jvWqmoYs8xkxKjvfgknGUNNNy5wU7",
  "key33": "2UJehDW1BU1YQ3e4PBdPrcgjJCUHW88tzcA4ASddM6ooaJ89hKEMDsmqnowAAWRQtjYLUbE2SGssgQhn9RjNQQYH",
  "key34": "3Bwyvwc2gCGEST3tofL7M494wqYKMDQBq4zxqq9WWBm6CcvDY11jVyKL5KyY4mKiXqynN5dpbqqrK9ALM2ymrEkk",
  "key35": "3qUXBXr5vQTnEDyLWaPsiNYAEBwPsfzNkgdnBdt1UpuJV7VeZGBFEegXDpdYSDvJ2kcL2HZtfmmf426kbx77Y2c5",
  "key36": "3thLQHkzGhCLftgn8ntpnLkQSgrP9VdtsnoVtbEv8Aoezsmg5EZr5LwvFkF2jtCWbFZFF7paZCgELYqxsXvSAyvH",
  "key37": "3beYkvv7ZtBg4dqcF1EtsahSbmLpNdByw1PQPWGkfWUPfRPgoLxCCvrmyaz3WZQPz8fF6gxSnwsPKprCC54exoCM",
  "key38": "3Ld3QnCQgMujUYMmeTpet3J3dsH5D8X7fL4uzp7m39dHZNMRT5EkSn9a74fEyWRe4RVi9EfeA1wPTHqtSemawDgi",
  "key39": "64WFeZUwxZcx5t6RWc9uQSr7PycRPkbdhWeJtFkFGkKfYDNjVLvnEhMgHHXuUK8Xst4CMUg9YEiRuXMVhZcE1Vt8",
  "key40": "sEWPKKBEyVx5W7CF8LnzUTmSp67fZ2Q5tJL16Su82R7v6A3de8NZqcT6GhV3eLCSFqerce61Lb3hNffvYQxwgft",
  "key41": "2KzQFZyLgLUDCcSYr5rp1xwp9K3Z4FPPnZzQ9Vvuf27nApJy9ENbaw8o85sYKnWKxUfprgTaiL1wRbRx6K2QdQus",
  "key42": "4od2M9yPTgC5GsF1xWJ7pkHvdLGzf9gvsoiSCM4t692bxFwnrmKGgfVtWjf2gpfBR6EP1PCUPxihzkPip5HSKmmg",
  "key43": "5K2nuWKHQ84ctuwL3tqWv9ZMNCsUWiUKFrrJYw7tUvVXN8MadH3KYPSNGgky1z6VmSkhydy25LRmY84ikJYBXFxu",
  "key44": "2ce1eoF9smeXmV4aBPiYNUZvNUdRP7q5hR9QiureqzVowPtWpWXNMCJ1fGsZ3nRPCgnhvGmBWu2WRPfFZqJs6k5V",
  "key45": "5Ha3cY8W3goQv9AefQ91zC1aLXjxnnUik8cCLhZ65zEXtqp5TR3V5cywXaqxrTvB6hE5JuUnquHr99QNp8UhRHia",
  "key46": "3eoKrCmuQVovtb4iQz5SoLwn1k5fQysgoYJX4CjXD4w9Z9bmnNJkNGDHzPjaPTYj8F9Rimcv1pwVxGSEqP3JkeMw",
  "key47": "5Hns1qtpFm4rB9Fb7fZZGyEUKJbtXYUCFCdYhZCtuE6XZv6fYpebdLMJs8jTKmRoz5G4m1unci3wVPVca6Cjy9gr",
  "key48": "4BqdAgVovohnsqfGhN37Mc5sEe68fRge4e5qbYjy8fhprobDxRqgKGe5v9E3her2BQBkfsvfgCprHyGq1uG6eCzF",
  "key49": "4dcRuKTRaSyUU55g8fSLSgopcBcdLL7mUpQ4eBVcyQa9y6b9UfHgpU9iaVioPYyGV8WLRs4JKuNjJ9zoYCYvUqmT"
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
