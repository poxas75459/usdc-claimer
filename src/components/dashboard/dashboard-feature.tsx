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
    "2dYgd44ihadZqy8xznDgWdVSJnJuaLqpT2hWvohi4WQuz3XALchEQ6vwu1pkXqU5R8gLw4EwGYzNMv6urbdpK1Mg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hkq7WU5E1ZD3hN8JBtPsVTqftnf44ApjLngy6bcwyGkvu5z21EghzMs9amN8AgRtz8Mw4awMVfJxEmBkpvsLXVT",
  "key1": "5aAKVDvU1Eq7EGqS1kZasYdoSECGsvEJC84e1U3GDKK9V3eniV5fWZgVQUUBhf1pVU14TcVP27Xqur6pSbWmg6us",
  "key2": "4uRhjtZg3ZXx7FZXiXGxUzUs8hYNhUjUoVcwx4TvdXYk9PRqwCDvJuoS73ptFfuJab1MCMGw5dW71i3CbDoEyhqn",
  "key3": "553FvZy9Ns3vey1aDyVrpRN1rLYuTfBCiMGg1WEYkP7dpxUz9tehZqrZnugFbTNPkWyGNK1fYRStJQYB9x9knidE",
  "key4": "5fAm86As45YSfER921sQQHA2FArVnuwDL13JNVdYUjoYha7Vdry6XELCm6tNvf7f9LmbqCvKmmsydZUZ545eo5mL",
  "key5": "5UrXFGkVySiGxbHx1rd477ALfJDDwHuGssGwv7KFQzTLXgmkrSZLo7cUupWbgn91PRnZW1JHEwjJK9z6Dzqj9CCk",
  "key6": "d6jsruRTT2rEQhPS8NXidriz7g5pbu8pFAGHdmcLcaAsXjcX97TFpY9AdEZvW4Kab233PWJTnKG44nq9SVrBg1c",
  "key7": "3P9qsfwC6uVgGg2dZnAiRanasSVXuoXDazZQvvKgvrSML2qDZgdjuhCBt8UYQBMU8PVt4ju9EZ8XfUqaDKWQ5r6T",
  "key8": "vnhzmrzz1pgF6M17fQTkFDqx5hrmwUjGyp5unecFEdpqXBNZydTSSJFAGfMGH35YPFtEyFH72WdTZhmbcC5MK3a",
  "key9": "2kRUjzf8gtUZ8cm4P1uVpQ62rhLHuyKrj3NupFoSUorgWsduUQjXyEnFFEJ1SsWW3JawRDoEDFYTuxQxdfrNHRbU",
  "key10": "3cZzzumxco5bzsSTmr5WB1rNF7kaXpHdmHmpuhcN8kxpziM3DpghZNU1Q8PNkzqbjLkJhFRthCk4tKrrsZVoMSyN",
  "key11": "FbSb3YqkHb7m4uvfbcthNskeD2BC6WAMLeAHYkwLyZ3hNXF8pNZxzaQZn5dXXEKfvCGZr7pVPQCVeiqqAiNPjRN",
  "key12": "4RAcMPt1ESmc3rtGfAuTgDcmiBkBh2oEyMeHAgXwXdsCRfkn9nSmofz5v59EDWHRBixtajD7ieJ5GYcb5dHfK9gb",
  "key13": "4vnUumpi9Zbnkx6qCvNxkYMgQdVKgSUUdPyjv8c98eDEdjg8AK9bGeV1BaF76L9bEifi1yADC9hXaSfNZ4bsUqLS",
  "key14": "3hoffyrKc1kFSBdr76GxpQMUnG9DjpLYhx19SX5rSegPkRLtMgowGGXHxerjGMK5wRc9gwn9hrfBm4hXraaXJV1m",
  "key15": "4soKCiS5GP5xwAEYEgFiqR4sYhAPFBZ8YRTwxRJCwt8pjAMNeb3U1wKYZY87tnkxD2q6gTWJTPcBeV63TTdgS5Kb",
  "key16": "KRWTMJ5qmKCxbEaNxbuq7NeEH4sZtpU4f7cWWnVXUqVFUDkUVdH7qFBJCBVyN6WD8mFim5X4ffeq27rr7CovLea",
  "key17": "gD2ytecgDiYQSRs7ZFhLu4YXGkCVJ6kKpkZdahRuHS9sGBtC2FHdz7dDuAFAMW3khFG32CQJ1L4Znug7jF1qYMo",
  "key18": "336SjSQpacZs1sbmYkG5jCdXGSPcD7Tu6fiFn72jtpa3Ecsa7rKRJFZqz3yEaENqKHMwbJusLFHGVPcFPAjPdxKf",
  "key19": "67fCM6dzTgm1DDyJSZRHc4FiBofNLkLqJsnbmgpQTgdyEoA5gwBt3714tc2HrqAuPLofWMbZR1gEdtey4rmNpSts",
  "key20": "nwG5pgwH6zwY7G2R1Wu6XD8EeKJge9gzfAJp6uWC7zmXLLtXJw8TVvfybAZ5NKZXTyz3ycGDeCrP2RiteHSqfFo",
  "key21": "499gv4NitAH8QzXS7hxfddeLynn4M4sMGUxWvmTV7BvfJwXuYaaDpZ29FxHqkNct2MAk45rwe6YKtpTeUzjq3qS6",
  "key22": "2xULzBWKEGwYQDZsdP5q3qxiWvEJkxKMqyzKCduHCbUTYSgXpPg9KPUq9efCjTr1df3sDoX7ab8aD7mxEYG8yyhS",
  "key23": "3tyDZSZbkivMRkQ59CxF5AJjovXicxd9UeLSCYXE9Fy5yjZ19JGYak9HYEh53c5WRGkyV5hKwzZVHsny8Kwftqni",
  "key24": "28Ny24oGULypPgHjfSmauRTRAFPzrTQUK5MaXVc6EJRpZoYgqE98UkNsGgzQtJizWZbfep9M73s5KdCUGkoHSrvs",
  "key25": "4VC7AduamuGYzMBKhiAKxrr6MMqCKSwP7FZmwKt5gkT3pj45MrGK3auTTL6jWfYyrRWPnG3XGi3sjzDS2wS3PY6N",
  "key26": "dFQ4Rx55AveAekKNPYY5fRQgeCq499hG6qnVE3SRTL8KQumDWbCBTdrzEkcSTZoUWbyrRL4KXoQ67Av9pCgrSvR",
  "key27": "2cDH5dL3UqYsnMXVWcpkKww6Jwj8y6G8pMrbFCXz4HTVsVmDj5DrsX5mFDx8LJJC691aiRPyDu2GLE66hrtN2DwX",
  "key28": "5WP96wEQzBGMeG8GbVggEZvWaVVya5B5ZkPYbEmgo5htowtYge2GJC4yLQsccrqZWzo6MuMB3ZPiKfPMLg53CbJK",
  "key29": "4DNXgqbso95QwKDd39uNTL1Po1xJjyjRb2c6otveRyNWKA6b69TXpYPfHEiQe3iBZEXZLpTfBtPe5hMqF8eVUR8H",
  "key30": "2KgCwH8KXGEZjufNnb5G2vDMLqUB5gd3TCSchn8FLvYQFaaZF5XZqVbytVaMBDFJxcZaSEgFvUFgmMLbSz5dXeaF",
  "key31": "5v7r8PrrpPro4CLRv5AigbcUZGYiuSv4JarHVhXKtVBVjXtuAfyJWNnU3kF1fjPEivm3Qj2m6johLK4L6WfgpK5Q",
  "key32": "2nJjZggyG7mBUZc8bVDTG3mTqKQktuSryU3VtnXnfgiqZV9kP221CDUa86GcJJZzfJ3HNi5X9iGTVte1oQxnBqqx",
  "key33": "5SFH1SsTrv8J3MdKowPEJCqnhbMzTqgzHLkx4ZfTknwUdh358KsfaWCoYpaXsFzshM2GLdsQn233nakRTGEe2o3Y",
  "key34": "4DHpuChnaPgBdjJZjStvxN4Pu8gAjTPMMRVLjS3XXfxb2sceyd6h5VXy2btAJsCwNZTVszbTySZVHFhyi1zjE2dg",
  "key35": "23167PcQrffhiY5aJZ1LLjuUhB93S4bXFWVmtxaWqunequrzaH87zMb2Yt8t8oBZgDkKJepmF8uak7G2mGgXzyyZ",
  "key36": "3tRmfrJ2YyRS2CwzVBiBWcNeLtzudToqWH5BYrgEvtyrcbLCFBCu4LqW1dqmYrSxeeAuAKS5mdBiomCtwBhHQdsg",
  "key37": "e2Tu48e6SWm3knL5JvoVrHpw1EzXSwynUz5YDgXfh2SEmWoNnoABQ6DmqJCZEveoFAnv1afydCExBC37WwRpzn6",
  "key38": "4G6FbqH5EacWszghUrMbP8Q6c2MzZS6yEZD2yygV23ehkWJGCFcDbCtNgwySwnKK8GgtjZY3T6axxeHwsmFateow",
  "key39": "3yu2KiW99VeFttf3kLDZMQm7zMpmzQuzQnuWyCUQvFJrkuH74pmvuaiQ6PUTFrXZEcVnvZoB4DdvA1TcJS9NNR3Z",
  "key40": "5KFR5e3h1t6icQtxFsuNhMGPNQiqtojC5gYanumgdq1aiUKYTF1ibGs6WyQyqLwbLJej4bM5DwQ1am8mwxKnyJPF",
  "key41": "3So9me4AAyyCnJFT7qijoJ53was1C83WuNsZTSqn6GLHic1S9snxfq8TK8aqLEg7Hs4wHFrAtuifF3W9Xo8o7Scv",
  "key42": "231djBv44J7tX6DKatA9UyHYKwciAa26SvnZYAfoe8SFN5AbRwUSTff71v7mZ1VDWuqoRkrtfirAmJRXUjjvdLvE",
  "key43": "5PpujEDNAfmbXFywzE16nbTTSMPL3YVAW122U6SMWxhbjtsMy9pjLBnJDGAtVDZAHpZbnPnVLcptyQ5KPZ82isvE",
  "key44": "3DTcnLWp1aVg5qEDyGcAC5ZeiyXA2ENA6Xf1HgKzhQdQQZZj8Rk2PnPQgjE3capZDW7x4aLfFaM9pzZE5UYwtD6R",
  "key45": "nHjf3SRPobbgYRRYZRzE58FeFJbK8MSYbuopWgt5GvQ7VyFfTjh7TtbmsTQf9WjnW75MrjV618BAzy1g7FJwbUN",
  "key46": "31xwjS7dVqZpRBipsKZWq7vpKMra5HWUF1cwfrwFqdbDKFZosH4MZc9SuH1Z5HodDhzfLJLcoTDDeBxxjyM39LMH",
  "key47": "4MDCyKJKDsBXfg7fRvRm88aaHGNwEu5n8AMFxdRMDLeExVjisX1WC3nMTLzQr2rme2V1kKNXeD68FXHpcWakxwqk",
  "key48": "2Low3fM6vZ8yLmQcrW8n17zGtQSAbFY6GxgiAaNuWtqr5CrA8MWhMmHwq7MFPYub2m8YhPXvRm5zCfNTmNcF4btn",
  "key49": "rzWQEXsYEwiAdcnfScnyznqt4DGeqBSkuu8CAZMstAhHNpKp1JksKumysMinSmsfuYZ66dZGQTEWPj3WHvm2oie"
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
