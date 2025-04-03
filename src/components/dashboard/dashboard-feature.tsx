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
    "3QkNmoZMGZhpsusN2ADmEJAE2Tyc75sNAVy6rhCPr5nb6N3VbyJTNDvpAyzxnSJiddKUeDKm1jM5dJy4AoeAHqgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jFitUc5GeGaBkHZFy6ViYPZzK2cnULQZ2SuJM8QK8B2dN3CgAwJhaT8HCD9ZexMs2PAFvqMnkkESPfN3LsL1VXw",
  "key1": "3NFkZM8fzjrDpbyofTTQ186Yq8HDdi8Gsdr5fX3DB7tTEjE2unmQipXzmfdg4mZgUgtFRBKb89gEydSrrQCMQHUH",
  "key2": "MZnuiUUq51DTMzrpqKDfibz1mvUEwfD578rkiACAFYghexE1Z6gmr9ewcyMhuxHxaAswZ6sBFd3phbWkmggKLM7",
  "key3": "3rcCHjbijMvHcwoNH4K3q52EVWxNsfZACiMSmnfGfJ7myYaAcHzTvH6FdiRDysrcsK2TnGhFPEEozVfqarBrsK8M",
  "key4": "3qzADFcjZYNSbdNjEjP2hMg7qkQNCA9Lry4bXNQAKYyL8kSMLM4cWUmR3ZzW6msZu7QQEn5KSBkxCdnBrTyzNdTP",
  "key5": "5BXaU9RQKv2dMDevkkQxbD59PFaimS6Ecvsnv1npD2dedPdQjmmwQXQs1JwEsKyoRQi83eu1xjEhfVGZX6yfbDY2",
  "key6": "51Vtf5znojf4MnB3fRmF1btqionVCJM37KYcFyBU7JVDYVnD4gLnvDEivRtndcmBkzLsRmzzH6NZc9Hy6cCjpUq2",
  "key7": "5yTE9M44zSmRw1DRnmNTd6vT9DmKQb9wN4r5VnyBFuqFMda1vMBrbGd3JUENZzxYdHLVJdUZJRpKDc7T2Asajbbs",
  "key8": "yYmABbpRsAJw15WekLnvRPrcvzKr4FMuVEdfTfS5GeE8FDEx4YaHTBwumC9U948VGnQZeFL6HT85GKB5avgTLMw",
  "key9": "3t4dTEQ2oeoFT7t2adGThy8T7cYzPtqoKBWc6v2VGvM2mdWMDhvevkWdLNsn5UCkRsUBr1a2wze1ELz1dQYjegH8",
  "key10": "67EcGjoen35WBDMupidjvRbECZT1U8LqgEnzXJujVajn8VRxiZ9tVfhoJRZVBjBYvizUkWL3zTbpemzn2XKfuNCx",
  "key11": "5g9gprbqVFRRqHH4ajRz53qSSXXtzyCN4MaEgJDAQetQBt4ZxVRh5cSWfUuExTa3o2gt1fi6wFLdy3ng88DA1XAE",
  "key12": "2wv2BJoBDk72J57dG2gn3grejhshJYhw9vfrNN8cFKos2Mm1VgWmt5cbC8BoqifTrC5Pwj6Nyi69iYf96MEsGnwv",
  "key13": "x8cgEfEGZjhr74fwSaVAtgSaaMVapHhu8KmDUTgs8YoPJpk8Ax6vvGrTKQyE14andQABotXLmahUtDNgN6b2xto",
  "key14": "eLoPzWLevaqx5dCJpQfLHbDsavcwYE79KugMPXqYY2ZDWMW3vrNmmSvGrTDucsUH2r6kFzEqcsE9sJJofUBpr5o",
  "key15": "2BUW32pFkayS8uvLTw7QeYTny4pTmbS3aEpuTKDTE2kzncuUhJSUEiv8buKHxN8mACH97DvTfvjiDH7xwbNkppt2",
  "key16": "3WpiFbwgMRvkMM93JrjwLdyTLYeZHvKbZbJp7GrQzmLvFHZxieewvCR7oP5uhUtBNtadLBJUkPmnRPwQZmgZJ6nY",
  "key17": "2E39My2xSrq9qYS1Yh2b3deyy6a3XhD4atVHGcqy23WdEHVf1P5fhgmWxugbde35JnAWx6c1YuT2MoGfC9qhCbgh",
  "key18": "3dfLfU61TqCoPCeYamTmtMHzRMrGxL6yMHikhAmA3zJ5JDSfKwH3y11Tq65HBMy7DF2SZtyeGskZnGB7rUGaeVJL",
  "key19": "3XQSijLTWX9H82xTUSzzfkwjaY45JUFptF42wsKjqwZpZvHePcD62yAj5cgMpiJYD5Sm2itAZ4G9YMcqUBrQK2Mx",
  "key20": "2tH5vcqwuj8akoXqcwACZakbW4bTNZsdY2Sm8jjkYbH3R8DNuognYn7zacJtN8LuG48c5zXBgN8qhpg4pqqV13ZJ",
  "key21": "5Dr1bvkMhDdGkERJfrypMZbMdgm6gbnK3UwAJh5ajcJAKhUQafXrwAV3mTdxxXY38kpMDozZXriZcVr5gvY4w2PQ",
  "key22": "2g7uYqneYyTcN8xaJr3xJJsgsxw8KciG2Lz12kbaRfjxeF1w2vvaSLfaBPe5gdLwAweTnH7ikV1uevwe64F2W5qV",
  "key23": "35o3Do9oUNSPrray8Ynzjf4H2k5Z53rqiVfCvqjfAwWkv6gJcMKGrVsWqCBVisFimZpJEETXLpkfiCcj8wLkbMMw",
  "key24": "4jaMuCHho631My2c7DG3BKg6bG6wCh9SF72CDPrQHX411tNgMHN28nE2SRyp8SEGpZhvEzve2Yft68CXQnioXR28",
  "key25": "4ESPfkqteq5nxkHp2zxMXwRowVq7r2Hv4czGdW77xDTapJDwmPnVyZx3Y8uGSVtS9WjNqZzwfWZvuXRXZgQ168x9",
  "key26": "58UXDUXCEBbSpUDBXJLbFWaip8zU7CyEPQxFZBG1naM2vPksV36QB7nd8kBf9VDAF6NHpJfbrjPWeB4Wvvwm4sj5",
  "key27": "3WEcHWgBNp1GsouepHZ4nt7Gt6oikvP5vuwzzHXQQsWFXwWgDyN7zXaTejo8Zg9tec8rfnmU6GjPB6gKpUhBy4Ai",
  "key28": "31AKx2XGE3aKWUb3z6NbtDQdmYYQroWmPdx7AUYndBrfxRMbrLsNS2ZjrEDCsA9Q4aQ3N3HjCkPssUfYM33UWDvK",
  "key29": "5nDXK69vKw4nXFkWBq8LomkxTPNNbM6tgoA6jgqpBkJVR22HuVujaU8pjgMdXENtS6qXCZsrd9H22SLEX38QpUH9",
  "key30": "3Fz2fnyk27xdG5Tz6Jmx7vhHjQWprpW3qjhK9KV8qRgh16W9WnfGADSfjNaLY6Vz26VwGs7wvK3nZprxMrw33eLM",
  "key31": "5WKTDHvHJmeAoupkJ7nJvXAG1JWzF3zdck9sRdKcqkEdsHsZDsvbvnjWmcmPf72wLx9zzzH2xsSKPyZgySMbr3Qg",
  "key32": "4fJq2XUinjJcMxfzwrBoyhTabs6aBGyCAZRm2mkEeQVspikZ6ZwEJswx4UeqTTQLn7Yn2BdmS6U6a8AuJThDFZGT",
  "key33": "2f2gvAo6GhWWQFgEuh3QZgYpKMd7aydjBMsLU62hVv8kpM2YXc9g4XRdieyw7Q9cjCdT5JS9mPUZcNAJUvtvCmif",
  "key34": "34rVhEHcQ9bs1QSmpgvNHhSGN689HbvJHTwNr6sbTq8o7CkexcbqAr7UabVKFZh4xJKEDw8EBn9owbAd7hdm73gm",
  "key35": "58WHtdY4QhkWa7HvyLPkAuaC8FN1yyqifp2VccNGhjaAMfCuv2E5JrRxqUpaVcTnp8h7vKnBTfcTJ39bUvDzc4mQ",
  "key36": "okGq2Z7jWEaRsCyfuJdRTjoDjvABMXLsyETDoAZ4jXxH3BBRjWi86p7QqNzQQgjvR1mXeaJtGVmpgVRNAA7Bcac",
  "key37": "2Dg71CEcMtUBvA6PegykvQz3pvqT5sv3QQabYLEjT5LE1jRPyVsPzWQS3ukKwH9u1WUrVgSMPcW7SVcUorzf5H3M",
  "key38": "2g3BKYjWbNGwmRoYs25YprNzcVGrocf2YfYXSEEihgfeG9HjqcqyJE3fKfiA6ALndCqK7hXjDhEEko731JYQzf9c",
  "key39": "5mmT7t8ZawFothxFsRzju5Y8rV1tymNPXUUpGgehf7ShPxUyQKMSFBijbbok6rjz9PpyFJ5sPoHvGgz7uJ193Dup",
  "key40": "3okRLYdQpMxhsnoHh5bj5oCkNDoJotSahmX1CJXJfV829GtyaJbMnbEeASrBdfLebQCyg4q8C5tfU1rPV31Mrpbb",
  "key41": "3xjFQ6ErDi63gVsKhZ9E6AYH4Ba1QDxhYVQgGgQqPMJA1mhRijL82bhRmViHwRRscrTk8uJ7vzb3YwYzkMhch8QK",
  "key42": "kJihLrMDAW6n8yot6agj2vSoQT2BCB8cfs6uqCL6hENBx1Mk8xTwXECvcYsVHsQx52Qa1jUT8wb3vgUGeXQE6Tq",
  "key43": "3FJox1rKTuzbYoqSd3NuNEwTCy6eZWoYLKux3K4VmYKWRe1bs6SmdAEm3qPfhfAukc1ipWmL9G2CR5M4JnKGBu23",
  "key44": "2YERrBpM6Yja26YznRkMeYsEm1Ngv62e6LXDaD95ENsV5c9VtDaWyVAdEnM22R2DxTazhTdMseQ49DwCVaBT17EJ",
  "key45": "2yAsKwd9amiEMmRkTzbXbvEEmyNZnJBvWFYTix7G7SG6o9svWXPErhvMAd9cYmqk3bUfisLNMbEYSQU8Ww5kPZvk",
  "key46": "b4tBzZ8RH79uGtZgR3bsnMeCD3CRmqBGKFy7yDUQBhx67Sakvi6XJJGr7YWEh3zZakiibWUg7ASDtYYGPU8sFZf",
  "key47": "2TNmo5a3oao8zu7zbaCLQjnhSnwv9ethgvUNUf2fQTifCuXH26xG4pFNeyFWYd41J3Apoyisekfc5VEoMky5cz1M",
  "key48": "UaoVPw6Cap4RLvS959pVomhqXfnJpMiZFfP83ed7y9WQkJbRAdeUBsJJme7vMuE2Bu6z4tuQcZgVZVtmnMUuc4q",
  "key49": "5vf4pKvoKv9WytojhnRPRX8zEs7jZ7ojnyK9uQN8HFR9oWTuo2sKmihgMFjxoS6yHDGsMAwPD2Za8FNC6LRrCLkp"
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
