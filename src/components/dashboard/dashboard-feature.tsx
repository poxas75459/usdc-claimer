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
    "pSNPWsmfk9AG2bpftihUeELmoaSrQvpJ1XWxmLsP3vmV6KksfutJiNZ5pAB6NbZVDtFso1LbptE9KKf3vMbnPek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46RxTxmo6obsDk2AiYcXHx8D5cnVre35JWYkzpZDSeJgpvvk9FK9FMx5Y5MBjRrBmCqEgFsCVLWRiUYjV5h3oqqr",
  "key1": "5fozkw17WVtoUGGTyjnLh1WP3f4RBZgKrmuEU7D2YX1tbdmPjWcGFErXUGgt7ip3gFLPbE6vEHnAW1D6UqDPY7nv",
  "key2": "4fccbvmZYFGumhcZSSYAeqGnvtgiSKvJD4YtrPiHLFLxptSB8KVJvY755ZAdf3zLskqLhqWoDiQTQmtMnQgyvsy1",
  "key3": "4bhf8VtqKwpXEy9hd8f95bsGRRReBDtqJFPFvwGbnzatf7wjQA757PuKpfhWXryGeyEgEHRxBMgX8LkdE8j6nsJq",
  "key4": "2gM7KguSAL3rAXnkr29XDpqK79wNWq7BCiJaWCHMYbQ4FXX4wwyoFmqxphjgdvrvsHX9hSzjDwpou4D2wnfBvioe",
  "key5": "2NvmVw69W8YovPZyBkKE3kqBJvfXwixVyjcwR8csud1zQcTNHxtXB2eYB71u7ZkyvRDzu9C2sdKgsMB7MkfKwJo5",
  "key6": "4WkNoT5GfUFM5cXNzatAtRDJhS2T1TKfA3dgaNsL9eWTr8xWMin87WWg4tfQTxb4s3rUbVK3NveH5DbhFvTJuqox",
  "key7": "66ADyaCvEgoSg9QfFw9o2N3Jy46QJwFPXVzQgX65myQBcDdcP7xEuhYptFWsxbKddf8JLA45iBuvJwYTJuRciyUt",
  "key8": "43qqJtjXeJ4ikiDG9REvsdZEceNBbD1AskxxcN8TPMtN76ghN6Fkq5F53nR2SDhPLY2RJpkM3p2CAsEJuHgP69J1",
  "key9": "4yvbfuFJpyhfrS62Ld72Z9pwprsdk4KerBEqBX1YrX3JLwoF1P9RVTfn7omjtu5E6Sh9kmNYjbhkVUYJS9FRrRnR",
  "key10": "1JZ2EdxPLAi9qtzNFRzLSH5fJqiLpAFBKUp9nXtEesQwyFFAGBoQ27z4AY6SzXK5Y741oyEtd3e2dUNgvP1CQ4j",
  "key11": "66n3DDMXmn4XMzmcm87aXKfMy52vr7dqVkVR9RHd3TrTAEWN7xoY3P5iGnZJFQyzLS8LSQAYLSXu3VmhPHgmDPA9",
  "key12": "4VCV3M44a725hpTntgLXwxCzjuKKiJYdnYhbWx1A7ZFejKrXifTcGxJ8UafaWW8QKsXyqH1faeGHJCjJW7bEfhjh",
  "key13": "2JSEp8zu1usyVhJHkdWuvpQZvPST94KNkTDBsLQTkNmzgt47oujAWJdZTNgcWTbx67vrLsYDfqsZfFD87ddw88pD",
  "key14": "3rrNSK9DEEG6Swf4XYwr1vtRYhujfdWCdqDKfQuYSALaX9tMcLfJLqy2BUtSK5MCqCNxr76gjeS75eNMYv8xdkbf",
  "key15": "5utLG2Bozww1Rra5CjmqrUQvHw9victDHRfYrDWv2s6kq3imt6pqb6apKMAfL2jVTBLmoHsyin6SRqx64LiwvSTa",
  "key16": "65ryoNhukZwrFSZsYQ1tpGD2UgTaQc1HeiSgjRTnDQYj9Xuq41PEuCWdcUQvWKhyVTFqqX93TPw9sk7XAcpvgGDy",
  "key17": "5awuM7eCbYQpjguANqSx5989GY7ufRRnaFbNqaoSGTJkV71E3zD55kQWZY7yZ4GeZnBgFBAzC4yKB7Cfufpu7UAW",
  "key18": "5ENx4oGBhoM9ExKPteHx6WqD5GvSCvJ6fn59r8UNmBZVvZRn41dhq8j9ayRGggpBR7EL8qtnxSuWJ8s5dJhi41wA",
  "key19": "2nejK9vSrny99TkU2XjacGVNXEeiyXgjKiS4Fdk4TGMjV5Hb898XwxEZ87ib6NwDckCndL2qW7x7at71iNunnRCE",
  "key20": "4Jy85AU7HCPuAw9VpCjiGdEstdVPVZxkqvd1dPRwdUUX64yth6UGchWSiBmHPaZ4Aykn2M7x4oAzj84KAGqLBpHY",
  "key21": "5FB5CG9uDmjpyeEcwRcpMVoiVWtnKuyFuXDG7K9NUjSrstGjUmmHxBCopb41iZBRVSf4vy9bch8ZCgx2j81y7C7b",
  "key22": "4g2UW3hre7RYHm9geFejhcCtFhyPQwcdmaD8U8k1riQfQkr2NKhpPybaAyMTBCxfSL2zJoAirCr48VtBwXsuU8TF",
  "key23": "5t9zkF6LuV8Wttny4bG2Ek9TrxMA3WJdJTpXBG7s6FrncUX7iDhs1E5J8e8cyjwyTY1T39nagNWBV4dsskUrTLPW",
  "key24": "5kyHKpuZEp65G6SJZTA4eXBiJ4pxvuPJJoX4eGdWfWmqRNTa6ZssW7HpjaEqpCYPYz79ZzVc1K1opcwLjCsQdJLq",
  "key25": "3sEZMmTvDAcZuny6Zfra1SfA4pxPWXsTqf2ohctMwuGpu7ZGagPnTFKhJ8f2zYekRwQwhQQw13eAkmQKEAQHJQ1y",
  "key26": "5ZZSwL5UJFeoJKZZDvVFE11q7s6N48Kj3XtU1mrBqif7QvxMyhrmcNcsE1491ojU8VnD7A2LiynskZP2qaG8M7ap",
  "key27": "3dWPRJxSQvs4pYTxQNHBdPP9yTyAceMZ926iaStP7n67cWYC2kcJ3xqz8qQ56tM7hnWfH4FvHcbdXb9ZTpwhmjiV",
  "key28": "5q52ekcKD6NinYcF5qjAviDUPvAb8kYGA72cN1TtTNiS5t11EF2Tffq59eAtvYZwtkBYrc1Mu1Wose2LrWrMyUqE",
  "key29": "2YCf8CBgnZ6ygpMKvSDYAignoo7XuFkSjLpiHQn5gbAqpDREFF8h5Q83Nhpb4To6pje6Lvf3BWzxj3f4aos9gqAM",
  "key30": "48yoPtGMc5G23uYNvNowa6uiZP4daUgtxsmUnrudR5o3kMswYuv5myeKAmNMFhUvsPHEtFeecehPAwxz66AC9TK3",
  "key31": "4p73zEx6buaKzgGkGqeCdEsJddvrYvaHLbT3k29LMCNiNKmtGNHR7aGwDij3Qn3Q2wZ839fViy4aaGR17Lf9jLQG",
  "key32": "4JYGX39idbtNs1zizK3cUe2qLi8MwKrZq8ke9aLztX5TG7FBAYDwmoTmif5SPNCsCsBSBk6BCpEYP7eo3hqTK1nj",
  "key33": "5yM8jQRdm3hMdv4Y2oErmwWgQDb1MsidRK3X4JMu7BP625rn682X99sTJnwmGywyUTKCiHS5mbrHuz5QBZcxGq9k",
  "key34": "4Bc2Kk5PRgxJ4z22KD57XQt7tdzuTr6imN3KM8jc8fzRryKxmjNCPD8bxtryvtcMtvv76VQyawBoRmxX1wYV7AJ6",
  "key35": "FVgR9eQrVsMe7KtTxcfqLf4MybzhTi16FnUKmzVb2MyVyRdQWypCHcYdiAebku1cvrLKsc5f9SvNTpnKst3Vdke",
  "key36": "kFeWiZBMvjD8tCnGzb95xtaEKSKStqfGYNbu4hdUQRCDckgoLGPYs6knkhpSsH4xJ7Uedu4GYBgSg7JaD5WdqrF"
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
