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
    "3ZcApFqKdLZGwxfTedeNfDpzwU5deRSXtkjukireUvxiPz4XLNiaFHovT9EmFCebLuVcA3FiDn1f6YXE9Y8FgkJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m3q2uyf2CiX7t33ax2sn5ssr7J3db4S2PAWzSqTR4zN762dFy2f247WMiS1orfN978Hr91zizW145m93YDVfsMn",
  "key1": "4d4QYBb1tm8Ux1DuchKik6ysk96BLEuFmxwn3iYLMi3pVGfihnvLUHFa3iQsfCSk9CACDYLhyyprYNLNhXPSLBYg",
  "key2": "67pJVtoEaw3rjZuMXPSBavqET1ea2Sq7xpLN8ZVAgbysjsjFrCyaWSpgoVUc2U5rKhYA6SfsaTb23dCuJxLDDF1B",
  "key3": "3siBBsw9Gw2MCa6Y6xX19go4igKwnnGKHr8KLKnjenaHCwmNhuNbdhfE59uHYwpVSuYTw7nnx9umDvnZx1AuPBTP",
  "key4": "3gKoy9RhaHhuTiqifZuNk3eCECarj8KmagdVmTTDFzxjsKpe55vCBoqd4EM6sGegk3XFyTrQSo8fQDAWMtRAVX2X",
  "key5": "2DRFewNWPuoMiZ7GooTooGDq5dY5P2zTpUfFHFa9iUVEhctqtsrm3WiVQc4h68kTwp26JTKrPNwSPfgdwsjFzXkf",
  "key6": "2NjqcFsqSxU9HiNh9yFZQbk4QV71db12W6sCeLB3KPXdidcv668xZQzjkbUrjjGwUwycN44pqE5z8gtENgADMM5R",
  "key7": "3QYn3So2dTpsBEzvDPF6TtuNYgw8SJLuYzxzFqPC7VPbYhFZMejJrFZwdQomSeNV937zVcb46EHdrDKrnmBScW3o",
  "key8": "pz2FPYEPUJkgUfwnzUz3uczVmZNgzjBFA95uC9KsFd3JrJmnACRSWsD4tBT74PmpiYadUFuqRVjRoqoRsAWkS7o",
  "key9": "kGapp4MiVKSxRagkYT8k2B6Sr5w22wa2oWC61CCr1eQbVn9DrxqVg4DDhdVAAY9Jxz1f1qgZXs5UJKL1fc1hm1H",
  "key10": "tvcfCA9pKB4YSKJH7EKbd3ipqLaPnsiZc4VKwVnCSnqsfcv6EL6pspuGGjWGJeMcFkdmmHpGUMZRoohei3zYUCc",
  "key11": "54smt32ZjfnrNcEMYnFpHXdG53XerDuPBE1dMDQLkKwRRCSDYKSZLbpRYb48xsLEvmR3FCyMmkBXrEqeECP4KLKT",
  "key12": "QT3DDXqy6ssESfqqRMJfN2SHWLLfzDJa64pBCZ8mS2y3Uyatak6jchEUP3pWSnxcio8JuKCVT4uJjoFBfFmEvNJ",
  "key13": "5v7FTWiY9qEnpYDUDHAmQv7VyAPCNpP7xD1HQrrmV5a7151sQ2JFKP91seMWUh6awELrbADT8H2U6gWaMPk4m2wd",
  "key14": "AdWN6BcNhjQcyybbszPdxA3MNPFjpc2NvuoTraw5RBiinJ8jLTqWX2eRhXYnAgjepadL7FPyySky51X2t33sjiK",
  "key15": "2Yvfq4m8A1Ly6Pwc2nDThJR8LJc6qfNkLvfsVT9wjfdGCE2GeddUzcwm937RSHR8AURRNjFH3fBQbjQnc1mePRZQ",
  "key16": "51Z2vX6AC82QdVWo38h7hYWMVUWbrZGFeCyvPp3rqzxWSBr8rogyEhr9XMB4tZ5NGAoisodCHtGvQ2BT9KhwuT7u",
  "key17": "4SPg6hmzgeivR2pKZgJYpyLfwdGBLoLBLMBmeo1UNShv6bzLhqZLH5RDeK9K4TdZsYCpiLxvaREG9ku2RA2RY7Vs",
  "key18": "4JcKKZVRqbmMWYzhfNEyS1Z5zNQmYD8zvaapEyBFihisu9yHunP12KHTThZB3WGCJosdzvv8AHqwCh2mjgvvJgJ2",
  "key19": "3yLQYP4SKo4FgAE9winpQSqgcyU7kwjkMrG7qhY4kRYwZrFS4weca49x1eWeein4LLtyXxPQhSU5ssH9QtLdJgVL",
  "key20": "3To2Gz5XLgo2y4iCPiwfTotWNrk2WSaXgJawi8cwcmGA56pvELemsnNgHRJJEvk6TAM3Kb7LQwwFA1ELpEZzSwhz",
  "key21": "4C6Uth93K9MJkNojsWkxnoCZmJZsPKK762UESsEW8u6YNtXcFBt3i4JghaKycTSyvR2QQph37YkzjynequGLp9gd",
  "key22": "aEgtz7VcYDiDLwbHoKkpzNmnfqYT4CQEDkDLxGAvT8UUMA2GfuDrJcm4xkmpN67SgmjhxpAMcdcTBCmkru6yYTY",
  "key23": "2pNH53gzHgr9fq6bqPQunb7HdSwmmDPeyAuW3m6YQqNAELcSvdAYj8cQJUejL7jBHjKS8AbNwWXqEdg1hciko6JD",
  "key24": "4rHumNLrLqEQEHjsNq9zPfv6LX2iohV1Cq2vq147QHH95BCSvAcQQmeCSPNFy6N8hLaD5eKyoN9LPKVuBPwwSCxM",
  "key25": "3cmpmhjczyMVq4i8CmfGf2pquzCG8fGoZ6sy5KnzyoAsSV2AM3ULDCBHZdiKfCpBiRwvR5Me8hCok6ZHBN4Dmc6m",
  "key26": "29MkxhLgBuuDJkUBnGWfQrqPjAiC1G2zfH7zdqU1Q1vVg5qAcjaRTQuYzjDow9WM2E61qCAntuFmrSyftNx9g3hr",
  "key27": "5E694m2d5cPmuczxfNWgmrGFLwjT5bLS2pXpJfYVbXEiYifMpifZHR6gzFQUaH4DUj5xCBn2zqV4wz37go72R1xK",
  "key28": "3zMcaKgDnRux2os1ySEXj3kHTHJZFSBkqw4X3hta3U5SSzKtZvfKLHFdyJLvui6MXSgYZ5HumPZu5WDw7oc4CWe",
  "key29": "JBRKLrsYKpwipXF1sYa9kAR4RbFtRrqm9MNyEo97QzdNdZvVnqnmQ12xhrFWtTSLKaQkqzaDJg8QwYXAfvZNuCz",
  "key30": "2MabezZKspr3qg9y2seqoNzZzyPDo9CUJrqhDN7SCuzuVGnRgHxGGirVgdrXJ9DupYFiACcjjpr7nd82T7m6Wn41",
  "key31": "5KGevxGfuXzG8xaaXKCeVuAdNAeJK7w1fKsDgo4L1uDEWZ2dymT619vUDpMGy92rtANVDVbusXcsBMYBwADYXKiH",
  "key32": "3LAbqdXjqUd41sdyVpTkvE8Sezz4juZxYCvgZ6zzNjZBMFXeW2Qe5RrvbuoL8f796jZEfRMt1DJiM82qPYCauZbN",
  "key33": "33N8MLz6RGjDaHSsDaKcyurfLVxw5u83Cdf5JSau7tjetYmm1kuwfkXqczYCxUkYbUvE2Y6cospdeh9NKXyJqnm3",
  "key34": "Kthhi47YyxGApsR8mRriHFAqjBvRvnjFcH2TU4eecUyhKHshxViqhWzsk2aEdDy1c7RQqjvCUA4CAhPWcWSTcz6",
  "key35": "27bWVsKUDxXgpNG3kn1fmEn3ZRPzuJesbbGKYpQ7bS8CphERBGXJUtJHdvhTeEUxhMNuDRRGBXkjDJBAEH9BrqoR",
  "key36": "4K3i6BgkjyZtZucCgmBeTTpkZVGz4kpPMUizXxsbYqUeFxF5hKBLeBW1PCqNX1MGHB7NxmjwN6HdZU5yrZkRoTkg",
  "key37": "2vuCB9WUd2KTvkuTkGCuxK95He4HxuvxRHrySZZbD3kiiRKgdEQk3Nd8RDufCitMdJ8NQU3BM9Neff3gV1v1QeG8",
  "key38": "37k1i1tgcJL5f3UgiK74M8aba9SE2cBu9fJoAfeEeb6gN26oNCi68B2u1faBymPgEzzBNXDwPwG9h4iJp9BHmY8d",
  "key39": "XdJnD2CkpAmDkm9NSUToi8VnAeX1M3KeQRF39saeVERtnEwUBzXVG1pkR1Bq7hWci2cu93XrWzL1SKSpG7H6mbC",
  "key40": "3XTeQ6oUr7zbj7qAxBaK9SHKm5t6KbK9KU1Frutx5w3Rfy49xjN9FzRJPAgc6NA9UQdp9Wueyb3PrGq8gMf8cd17",
  "key41": "Yi1hZ7iU6k36QXDfJZ5UrxsK8RNYv75BucxGuGo88WM845m6XQLGJ2ZNm3kc2wndXxwyq734BgBbX23kGHEb7rT",
  "key42": "566Pxt51xkWoMVg4yfMqpjSeNEy2wckyGBL4qbdKe7yvvSK6QmYe9ygc5LMcZvGPrSs3iTGDL3y7o527azmzNXsQ",
  "key43": "62VeGFEsem9k9jAiYx2tpktC8h9uNEu8YfK5XwA9pdxHtEnLwwReSYrAbs1jjYgE3RU9ZAkgmknST3144mtHgdWn",
  "key44": "54ysYLcuKv1SxwjqWsqwzxuDY2zA3g7G3m65skEYn1viSvTcoUbCEwTan6gZS4ZHfnCLdm9XhULbZWEaPgXVkmq",
  "key45": "8c55ebF8dcbg2yb9Lqm1at6rKaqVVi3AKieiiXF4fRyeGwTEuLsMmPXv9WF2zyuVaUK54XfkkUuTBp6H6H1GunT",
  "key46": "62HhnGrfxqs2zkb4tE3ze3FAGrxbVv2wftLkZbXPPwxpUTRZm3MZqfXrFzJhuXQtzG8NDsAz98TwBgZrinDGMCfg"
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
