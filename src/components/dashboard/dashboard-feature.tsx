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
    "4tjgQiKw4K4K3ypP3VB8YiZhT5V5tD32ghTjGZDng6TsTvFRPQHs3o5cUYPUE5nsHSwYxw44FYpn5dmnic2cx3FE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oLcXnsorbo1gg5bEmAD8vdKRV4ctK12mfnveqyZ2AiWW1rp5GTvZyRymt3arcSNYLq8xQEBgTgMx14vnK8LCa7R",
  "key1": "4KvjQZYT2S5YrTvTw18a1Ud6JSQzQV6xHSySQskguhzvfubHmFBM2TCPfvEgE8ELCWBzja2WNd92bGRf8En3AR3r",
  "key2": "4dKJQ1hNVPCXFBsNydLCJYfYcNTomRNnXg539E3SFZLy7EVZ4MTYuYhkw1devktes1GFXAHtCKB29AGopXWvgPAR",
  "key3": "5xh73VbkMcZCsk5mpgDDMWVVtHMvyMXD7SmT2Ey1bMahQ7iLY9vfRbqETXjXPwsSGZ1LDXRzqXuaD6ABKaj7gJt8",
  "key4": "3XK8jpDFxkYCUEBsP622T9KcyT2Tg3vmv6DC2hBVuVfEyP24ynuMLri79GLbW6q1o7XnoVVLmaUPricyaTwBxGjL",
  "key5": "1qcJgy4ZUVNMwu53rbDLC6v278JTfJ55NHe95dneJh72d9pw9tBEQLAgYM7FtixHpFdacd5nXDjXUhoiAndRJfv",
  "key6": "tr7wsA7JE7tp6rJ1QPLihFhRBoqRYP6VEaay86TX6PYXvkj9mP1efz6C5NBQuALpC1sH6iK7cwKzrWxPPNNXDyw",
  "key7": "4BCBntFYZ1nByggmSSe7vCvWQ72txZjGcGPtqzJdtpViRtByvazCLViohDbtZNXCqRdvTje46ii4ttJKZJNdupsk",
  "key8": "5mGn8rWefYPtmoQAgHfcMUPcQpcdDPSGpFGpbFsyjZEhaHDqpUoyT5VLk2obPYNnxAEwBgRTE9j7RqDizhUMTC38",
  "key9": "2GuGKcLH3wY9onLRcUELYGNVRv8hXfhsxxAeLehsTE7aZm72f4t9JRMZfyvKoWkXSd2pSyGFbheVsWgqvYcs7a8E",
  "key10": "4xeNXDRG1Bwd4GNk5jA2rNSmiNjJZNUM2V6tCnecCJrFFCjXTmsdvJRAhUoSGhpR6w6c2hRGNCribgYeaqFPUxCj",
  "key11": "5w48WdnP4jumosrUefYW6NjXDhGfF6rTY7Y9BDwVcUBMpqPLmc9pzwC5rmXUgXAdXcKPjVkaWBngBqhmnVEATQra",
  "key12": "4km5pjY1q4ypikof3oHraKyADVYQ9Srn3cNZikDiSQz1zxot64oyYeWLp6BA13uQMv4ehTcfGm3QV59qH4h3YWVD",
  "key13": "3WTU9Y7hW6vjTauLBg9ZKvpacMtJjSv2kW1hdkxdtM7yftUrcABnXXeXpXJkRSBYfrKFAwJrFWMJgzSsCPh9mnRu",
  "key14": "2yzAdjynVwDmvwQ8xEhyMSi6jJx7XrDkRxDH94ZfvRuQ4gkQDoQNLMY3Szd6N7i8mQdDaYdZpXvbDMmNrbEUFu8r",
  "key15": "3wUGWFT1sPAaACHmzmrUVfpJfQwtRxTZxX19sbJ41zdnaHHqr9mg4V4Cvya6cEDHC7ZuMtSjiUNbJVZEX8xhqa39",
  "key16": "5ZgMgc19TdQuwLHWyBN9jz7DdCDNz3Q2ViPm17sm3UZPJKKuosazzT8ZdM1DiuwTo1gu7HtTnB5AyYkvqxV3KLTs",
  "key17": "oRQNXuCXTHPPcmsqbavF5YG3KMFNg49Zv7enan6kMB9wSXXxfBmX236t6SHTdv98uVvz3cceDLMBgnTqL8G6icq",
  "key18": "3GjCThyXGJdraH27LTMuyaYuGuk6RPApphz1ywjBqCnxdSeGpfnv74HAaMhh86PqLV5GUNshRU7TzZvUQNCJBLNR",
  "key19": "5J1zFnFTCVTGCaw53txvUTosZi2UEpdkgmX51ARgcTcDe8FrYmXfgmNfPFFbuDuzJ575Hre7w3U6rC1QvU5YfmpB",
  "key20": "3zFMPYL1gYjiWQKrDYv5GMcXTuxoN6uX2vpTh52RQQLPse4pV4okpgzrDENqzUpbQNpY8uxQkVzSQ54ub4mmRpjX",
  "key21": "65ZYruK7EiQv9gjPKbShSxHXTqN8dhgZehZqdgaHwo8hGR99wEuQ2JvQdjXRhSLc3Sv7A5AZLaFpP4uyADbrmxEG",
  "key22": "XWa4iXTcL1eFpgvZygLgoyzVfL7RT2RDxkWNnu1uMrxq4gtiqjgJCgitKrrEXC5NcJXCkTepYxgN7caL8HMRcSW",
  "key23": "54SeTw7rWVtshFKAbaTH5WpepYv6C1VBAnvDrVMqHHZHeo4mZcQUx3fxLE11dYSVqXCBGdRYKyzx9kMMXbjpbNo3",
  "key24": "tWbXgWt6qFnAd5MBmpV8UT5mNwSpt6rKvViwqByv6kP4koBXi7aNBjygximVgGbFfZyirMzxFHK1dpRWuzQQwo5",
  "key25": "3F7gdhyiwULpUTcHjD8ZU4hR87HD3vC5HkmfvfZSjPFNRaBoZiGhhoPpZGnPwKfJUYRnfhNpBaP55FpuQtNK4ey1",
  "key26": "2mzurBuoUGmiWhixrLB4puch4UMAgmoDK4e3hbB9pbb82tBCXFA6TS4EMn3phE8SoA3USmTfT1bVeRBZQmBfT8Ua",
  "key27": "2mspuFSqjEc5aWhPJh646mn4H1tMB5bxpamtBJudhSjjNi5nDfeqRH6ukB4nM5xacR2DsMKBKSnPHtkQ6ZPkH5iR",
  "key28": "2FSn1Ko1TdmpAfcSy7RQUmteauRijkixdZjDhyiPArYwNgpQbixU5siSc6bzQEnJq3hnyfCudxWYnWs7NowNgUyA",
  "key29": "59EgAe6gcUtRr9EtimCmPQL4rcx8ypS2j6fQiuddwGsTda8XQAfUJmZNV4Mzvhe4sGevEBJaLyiP8bzoNjMWg8Tm",
  "key30": "3cepSSMFKB54wQwefFhCQFENt9y9u6i9bjPYSXUdKFrnoeyvggYmqaYH8NHMKrnBCRUjZHR2xPDB5JdHjdpwqrzA",
  "key31": "PNfHeZc9N7dJBFebfYr8vPBwqF24yCtyy5ZimwouGkmmxSCQ6tnNHEfkBjrix8Smv5Eva5GJSu9Yxj41vyjWSZ2",
  "key32": "5fYangfFvmxFug8nbqV7bbewnK2i2UMCEZmBHHasX1m2aM8JuyzzSDuo3s7uwGpaLSALmnDbZddeCTygu6JR3cKH",
  "key33": "5rWmkDXFPSPcSxbBDpYyJSffkVWRfD3hvvTDa7XpfPxoTsuyHrKQg4QaVjFCQerbcayu6TW3pnLr6NtCzuZ3wR44",
  "key34": "4ikGc1rQEPakSfHaeYmbgHkxjD5ToWQj58nvajy1DyxceRYfwgpjNoPw8EBehi1svGbnx2HhieYiCYHSvhvRurjZ",
  "key35": "5FiAjSJCtpoNxEYHM5Gk1aPYuXUPWwMkoQGeq6UgMA5UvenPmnbt7X6QEYt2Lke8JiExXij3M9ngUp6zijZ7kMDg",
  "key36": "wgNuv6WZKNzYg9rye42kidAPTgooWy2oP2V3DmWbvWznfnMGRDaGoMp3wrv2VWD7QGtx4vDDswHazmpj4Moxenu",
  "key37": "2LHby4S1okEizJRUznY7N2mboxm1AEvsAqxdMDFeqGSW8qjy2hYVAdWkEPt3DXNwhJjSDQwfYdkiHPgtTdRdSXws",
  "key38": "5fzYsJMrXGgdSuUERo8H6VDp5bkEKQ2jTYdn6zR8N2f8jraayaPk15BqaiLsDdV4y6kYSeq6eRBadcKtF1fxuwwB",
  "key39": "2dq2LPum8h7a69GCB1bQYSeGriJ7bCDeASLAEDxEgkagPuhJER6BAyDwgdvriHxgRzrSfgteJBYUs7rMyNgtKpJe",
  "key40": "4V6vxT4XRdzycaTRGbk57741Vtisi6YHCVmP7fLTYADujB6ay3evNoNcScat1P1ynZDEVHQFVogjDxuugarc4sAQ",
  "key41": "3TpLRYVMHhv67ciAnny5bFzxDUmbZ9qYLjpMskrK9riXS8tesVrfJToyhR6rjBT3X88UrSXN4QgTnZERjcrFodwQ",
  "key42": "4qHcvfBiaDmpHrCHqNifgMq1VSrPV5nNh9oiLnggFuxJzj4dQkE1qe2mJNKXZ5qmxR9aszXsvKYbUx6uvJyRqFii",
  "key43": "3KZVFM3z8zAyJutpYK8mkmnE27Jh4AfRFhaEximuDLoZDUYSgNcQTgSs7TW1RupqqLfZvaJKGGrJwETtsPF7e7P8",
  "key44": "2HHJQ98BAJqAj1ETCpwRYPsxzLjTaif7ADQv1o3UYqnFgSo9D8zCeX2HoqoziKy5qKVe7B8Zauyo6hEhWEFAH35X"
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
