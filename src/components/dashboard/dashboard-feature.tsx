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
    "29sktpjVWucc2Qt5CEZN5QVnPHGyx8XCYd65cQiHM3jpKFGPH9iXvMrJoKpMt3N7iNnURP8wyUGFCdo9QGFtTQ1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a6FeVTKTi6qc1MUjAMwGVBPE4rnNykwTGa6RUJe684wkS4o6WXLjYndLbupSQyeQeyq8wxhs9BtFbsdHhHS335U",
  "key1": "omcs6TUvmgd2efNMWSoKGNonTJVFnE9LLSsABFVCK4RTEYA4pwegEF1kf45JdVFxvaDrit1yybk6nDu3oeKXQW2",
  "key2": "2RtCjssNifpwZEXXarwdmDv1socANjAB844nF5c5ysqaf6tHgx1DwdHqYxG55tLk1hNY5XuNscUbsUtKEsK8Ydat",
  "key3": "3tKZyhXYyQx7S8nDsNSZjJVfn9sBwDVG3nAcghXoVmihab8D9DyJ9eEHCwH8NFJR2RNDgwKUsJsmDEEkMkMrydUv",
  "key4": "5CpUGHFy3mFzst8SinLzGdRCv7Ppp41TGhxyJmzbVktSBzeBbacnPhsdKCtKdvKCziHTpbraaiVGZmvVszqgWuix",
  "key5": "dwAkvBV2tdETiWs16RRD5reKMPW75hLrxH6UZi7KwUiwE5ppdWqo6XLF5dkUKZ6hFZ6MP5VQUCVccuHqtD1qynP",
  "key6": "2fa9mNSi5ZJMEJWHB66sbBJuSKWmFDf7cWCC6kDuWor25YxWbwSpSt25qncvUUtuokucXp2WN2TtQtssn2Bbf9d1",
  "key7": "2md9nq2K25RqktWyoKjnCGY25rxgXR5cRyETANdkVHCNMqmBootrbNkhkgzEA1gxgQACSA4ubrmEGMkjbqAN8jKn",
  "key8": "VPe92WXYGuif4CH5ob5BhJyamo3phtirATiGJoDjpAbHeiQf8ppkgo3MPbogYc9KwY7jQ5rH6nUsrvwZyoaGesz",
  "key9": "w58h879X8Jye1okLXkRuTC6dkUEJLbdVjFNJJM87dRbRjB7268XJ5uWC7q1Uf8P24kQGFrMXfQUHX42Dqi5Wsyf",
  "key10": "5LaSTdCHPW6BHUCytB51KVNdnWyksHKZ9iYLmwtaL3SRLfmq6cCiJDb9dVbfhm51S2QvJdT1GenJaPPigPLZmUBu",
  "key11": "5jTbM1MXkDfW7Po4eZk8oprMR5bE8VN18ijCLVGms79F3qVjWQ95B2W5Vg6ZtoQGuEbAWzykMGEu5kVXoB6Ni66U",
  "key12": "274FA8PMt819ez6798XGzMor9RFbZAJPxCCMWEZwqw2YfaU3kN4YVcRSGpqnoyYSJzpmaYyaX1QwKZGLDv2JeZtw",
  "key13": "2wjFqyrPGPGGSXMyMHAt7p7eWPpQYJrhE79iKBaEn9Vp1cvog6567fzZcJhhj687nr7KcS6oY3HWY5PeWnc6YBuB",
  "key14": "HyS1Dq38GcW96QGGge1CaRf8gxVpXHiKJoSJ2nPMYZyoytu5p9RjDzm25h1GJ5ixErXsHq7SrRRUBwieH6f88UH",
  "key15": "3Z82Ujkm7HRRAuQXgkxfJQ7sdQTSAfVFBcQp4XEWBaZN1GznVpXdnuSKaDQr6uyJS2NB2oWTu9LWXVudi68krTiE",
  "key16": "4juqAsfBMUAd5SB9yXVRdyDfffK43nAsALJdPtniiRKH3V4XBJTGWToAcpvwXYN4SiBLFYyuhmprZYS27wn1fbos",
  "key17": "4CLmr4fc4oG3XfX2aLgByrDwXKPDDFgtDCqSs3yS7bULWbadHV9KDPR3Eo16e7LwKh1sGvrY1x6EbAT4NZ26Gx4H",
  "key18": "MTeyvC6Wy7ysYfCsi2eVe1CHZBiZ17xWpJmLWuzkikTDyVz4iSqdpbGP7EoaF7UpRCQY8spjDq7i7un5wtvQgQ3",
  "key19": "3mJEX68r8q6avgn939svcj9EhYUGwHMCNCnUyXvB9Kfx7EnFUnZVShetpXobR4U13CYzheDptPfBK7C6tmCfvYkZ",
  "key20": "2qUHqvTquFKx2kyaXGxw9jDVqe9N3qKn5QEwuHHieieUCJg6uiUoHzgh5q73F4teNoSkMzyRbWukoj63pgbdpvZa",
  "key21": "fF3hAG9ZPrhEguXwR3d1out2mDWhJ7XGtMag48FEymvt9KV9BAy72b8cFyCo4WqUzD87xVd14yPKi3XZED3oVG2",
  "key22": "AUR6whqGHPjvQNCLehfivr9VaNnTvM3robw8EsszWJowb28AvjaHwz6Nay5QMmSwaDf41QqqzBu668NAawiNn63",
  "key23": "4cUeEzV4PLLmV8UkJf3Y7RRq4sLDqoHyTktrxJAfGbWdc7cPNwq3oejYRLGpUpn5tXqpTbyo8Jik3ZBeRp9w3Bi1",
  "key24": "5wKs54w2PuEnFwdaadMr4g1Vs7nCjEztnDQK6qBko3siX3jTNwBZSkJJ6emt44TmyX5gkg7NnVAVA41GmYKTDD46",
  "key25": "5WE9AS95x7U5Q86aB2XriTPh1E5CJh5KpUrAzRdd8A2ayeqc6a88EMUc6NkSPhMLmYfptfooCPNV3E1qH6KCu9aP",
  "key26": "3nGBvhDwNPSEyTo3Tb7BbmmdnV5ztE8k8Jinn59WcWon4xeRtg3ppZ6C5AmH7aygqj9gBMJMxBmEYe3Q9P5QbpBX",
  "key27": "3Hbsq7rW5MNGEWoWfJgAwkbNNj7HFwqCuH7fA4qhEmo6eV6teGZY3j9UCmbRfqhfaJ4KBb5yuvtrZ6fhrynv4x6Q",
  "key28": "4wJMbbjmxRvSAvXzR6KstngYAPXFKpaKBrJQiZZDEcyVHy9bgXDUdVbi4VXmdw88N6rygZQvoMufdNT1q2TCPRNH",
  "key29": "2fh5ZFsHZTDAEjxBtRudy47hRVXEQoEWg1x8HuJBTy33S4UmhFZMYMWjSoX2fEBvk96UwRf9MEp5yrsA94x6k5ud",
  "key30": "ExJWqUUPPrNfNTF3eAzHFcmkLy2kvADFPcidGHr4TQpDpHnLU5v95C2wDaihrHMWq1oLSFrygbV8ofq5dP5zdNr",
  "key31": "4sAeQXCs347KWAGe2qr7jLHH4t1AKojSFpp7FRynB3vL98HvHTgzCFdBVKNAXg6tVw5JXaKZ9hr7qLahriQ4a5DP",
  "key32": "3pvPH4nXFT6QZc1tRpyCwWAh8N5x8PpXLhTtJCfSXnhwV8wzVj2ruzVU5SwyUhMiZj5VcpzhS7Uy21BnFikYCxv3",
  "key33": "33uLWLfKvMkiuKuzm2zpfRQ7q2kjponGYCjxen9bkzzD4aqTbZdyPMMadtRwnZ3UGTqbwWvitRHRjNgEuBo6MqZo",
  "key34": "317VTgBAsaHQK5g9dkAomL8gg7p3jnUy7PF7AUQP2X8TjowRUiCWzENLsAjsP5KxWUsAR6KrMEi9YvTKFuyP15n1",
  "key35": "39zgG4f4bLSDu7jo4mn3AYaYcVKojTGqTXAepa7CnYuMAuuAgqYunVDXNmadKYv1wrT7eNTJD1Zz3rcSJ9NaRBhv",
  "key36": "4U7ciFq7oxr1LUZ2QPsTvrxmrCBw5Fn9nwbSURaRbjtdAVuiKhjG53UVFkb8qvhsaqoBU5vmwkzqpMDC8wRKaQnH",
  "key37": "58qwWEzJQAmQVGsJCyDHLczGYGkmSMR7cuGKFfrHftsccTbmfDP6rJXxrNHqiFYXLpdZXqDwtEBbtEB5zc6a3bxL",
  "key38": "523iken4FEiq9sokAUAPEdE6YWcimaJH9xZ8EA58UVbfr5EVkUnvUTPRB5PrieNkdTtrr5jqi3DST3ttEVidvXN5",
  "key39": "5JfcK7h2St3ADftntNyPWpDayuax7xmk1PcfsWUfLS4m8L4PHF1JunMYpdkkenUChnDzK256mgoniFxEZMNSrtSe",
  "key40": "4nRwuK8oyX89ZM54NVrJ4EJt46xeDRvuiz1wGeS8r4iAVnvETYA8fWqJKyPoBxpUZQxXdgpzLbJsrNVid3QYssbD",
  "key41": "2CiWSKCKFcmrhYowm5z1ZC2zLhYZQghti4ssrY6sd3eapKLsSCB78hqs7u9eD1hbzaRQpWmqnJ9SYEnPufxwTTmX",
  "key42": "23LZj8PFgniQURkQCrN4NQnPj8c3iX53t6pkRoa6L3ezvsEu5CurUbt7pqok8vRVp1ZXodNxq3vHvGSLZBJmzxdQ",
  "key43": "5oZcyJM7SMvhWFkGjJDwtexKKpKXhsFL13sdwmARWhd3EVFRadm3gwF8pzeAEGu6fXkunwcZ9LH3V6uDcHYHFDo",
  "key44": "RRJWhz2x5NY4yNwxKy3gvYDZqqno1DDUMezNN4z367skFwNJLZc9ZpGnUW2FAbEMUDwdzBXqEkKSb5irUfqNRy6",
  "key45": "zivnVuXQsSvymcQS2gmhyso9pkNXcSvwLh4X6HaFKiv3QgYEw1FQWJeXESmf2N7YhiPhjWf4TQf3YrGPXviX9C2",
  "key46": "3QY7bYfU77MHWbkm4kx3NDkcYytNYgZgEyMPVU1Wg5uY1LV2GxWut8oGXRbABumhqSM9WufMpKGhWQTyA56F4QHu"
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
