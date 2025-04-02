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
    "5vHPiKvf5dZz2Mab6PgjdACh17XVtD2cT6CsUMPWMM47zrGs7zJzgK19Q8zgL9w6SSYzfuRyHER5KfW2t6kpZx9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WGaCq4Rd2wCKy5kK8jtvhL9n1Ui8iY2rxbinC79SmVfXD6frvQf8e5voh3oj56C9fttTmnVztn7Yu1teTZMnCdW",
  "key1": "cv7VHHgUKSRefzQnYK7Z8oa3iGduAUR4QUYpu2Ey5Cayn2oBqf5C8LmExyvMZ4nzd2UY2TL5hh5gAFFowJFrY1J",
  "key2": "4BLZ79YYD3SX3eh8VN33ecgqcEno2YBLuon3RPffxtax5FZaDToF454XW8NWkZEjsmsaTdPJ9EwN78w1vstjEN3r",
  "key3": "2tihuZ4L4j6S4fKpJSWLZU1darZzmFovNUVDP325TG1cC8g6sSRnQ6rdkm9DxGRifQnbWfZhF1NjES7pxJNek3hv",
  "key4": "4MEDvAo8dbje6r3AF3yDXVsQcDmC1Yww1Xw5WYNjbdV633Lmn7xjHmArg8yLux1WSeyBxiYJ9NXPWdnbA3n2oUzy",
  "key5": "5tXzC5QmFFkXuEY6qDCyhBgaf2DUUGR2Dx4CfrpjToffUSrfcPHnJa4VaivorWdk7ypae3hDQH3wADz8ss9BudFg",
  "key6": "2B4HZhqvi23ZHhz7PyNmWZyHiN7KFBxYqh5rf6DNmz6a3vmHq1BxhNAUPTW7hpn8foMxaMxBGarZkQ6KfDJVBLzL",
  "key7": "2it71kWMdefnmAbi5RRSrNr4pxs7nyLQ5RVCVN1qFXFBYCZMxPBvqBRUu6ir4fz2AEG74xWiRb1Xu9VCEWDMPS7e",
  "key8": "394oBxWbYjHiSveEWW7gayzwXVw3sHy8AkbyLpBLjzJLcMY5iMktgzuycXS72KUAQDd9fkKdoQg5ec1EhMdrs4V1",
  "key9": "3Cf9hWqLWtp9vDzvtKHkfLt9kWcVmpc5q8F2fu8VSRJLd58LwofQdkweRY3SLugRALDBz31WvEZgVN1JT9EUPXkm",
  "key10": "5qr6S3NUuMwDdt5PygoC4rkyfafHWdN43ZJWu2FUAkcoEqXZm6LXF7DDKVXkv1o3dP2f9mHtd9yjxY1ZeFxEnvZW",
  "key11": "5BxViEBk52ZmJYpn1wxiJzpFeP1P8kxYFRtov9WPLyHTg7RYDs8FTgwnJuVcmyioPX3srj2UCE8mzRxyT4jnzfKe",
  "key12": "UCAq1mzreyWHvbqsSTmK7Lj8NTWwR1n49N65vqtxsvguSzqYVe5hRT3oq2TdyrkqDPib8pWEi48PJmfF6fuUcU2",
  "key13": "3RrHwcrwsoawahYLbh1rLj1wpfHhj8ximKuutPPf9D7Y9Q3h1E5pq6qpL18XMhTZcL8KCbxQJv46GVFmcYxUTdXu",
  "key14": "2ccL9sCZTaJ6ccVEPLVsw3zC3DmNhYtxBp8gGFD3J4oPygEuu5ixkv9EyRkjj8fvVGuCKiWmWNxQWunYmDQ4urF3",
  "key15": "cVqXiW2zjbArxbEatrL76NyPg63ec9mw6Nf2md31zucW2Mj4ZVnnyfWaw4p3pX3FF6NdbCDb11q6HS36qTVk7wo",
  "key16": "5LJNjGA73DPz9dAeyABHbqrFBxgV9YvAeHSNt8AtzYm5dWtPXHQqxSUDVsWUZohxJTrTLUtWQyCR2zu3z1mALTZK",
  "key17": "55f2PdRfRjRZEALBovvRM2gMUMfpFJ9A88eXuNnedqWcQyp2ZCyePY986KWqmVJcskXL2bgAk7UzMGkGr9N6pUUr",
  "key18": "2xZHyrgzdxaYAkYsRzhgD1yVR9QFLuKww6JwJap2o19wcjG5xDKb2yfgRwwvcH2mLXAfLFpf6U29aNm41ZmNh53Y",
  "key19": "4b4ZTdBXbqHYnh8jmeBLApytVSkxWgNGdCqt1HYb9uSGUUn3pLLSatKeuB8Vb8uouAaLtbpheiTdaJRwEc3dsUop",
  "key20": "5VF3VDKtDHm2PpuNPD3jzN7qcbbEEZVa6mJGizdC2YWX61bMx2tbdsfhznWnxZ8K6HsTtDQAGAkfKMrfm2wCfbwK",
  "key21": "3g9UWcvtnp7KX64Ny5T76gpyM7wbbjom2rrggHekLxCZjRqbnB8864NLP6V3sJCGoxijMWrr5KgXYBWup2LBCmm6",
  "key22": "Ru2DBEXQoaLbmw27bQ9Ah9AkPgCis8vj6fnGio3uvg98b6y3aKtxHsuvhwuAGzNoDiHWJzjMokPdTajzXoQLViu",
  "key23": "m5rUsYj36eSV3T5vcPYRyM2yZHNeRpFxHNdeimqmwxBGF6sxymmFKAuKYgLnZdVA2sSR2DbSfkrAfgnAhHRfn5J",
  "key24": "4eH57D4Rs8KrwnQ9nNHn3Bic9BgMxtYmCsVQWppvgwYZfwKdk68xrZTCh8B6GfHv5wbVzMtvNPQmiw7qU97evLqV",
  "key25": "LngYpxc3Kfq6vnFp5bSH32EJxT3mN2JCtmGXUSCFToQcJuGHLXYYpoKK33ieoYbJWKHpQJcYBbQQMzTeNMNPzDY",
  "key26": "3a8MEp2f6wk9mEwQDeeMxCBvf3uwK6x3En7FkD2hJestfYJZ1b8xTJTc9tnW2gxWXUdscQzsFC9Cbk6DW7WdjFLA",
  "key27": "3hN2RYLMtp2PHh46jHyRWXP5Yj5jB6GEtnVEcC5yFVMsmCqwxRK7oNxgjDgNadGf3T4e7WpCwusQ687GgsYahYom",
  "key28": "4WtbLy1HYZEZKWpjaBtEWSFKvLzgRUVQRyZnQLx7EH1dzRzmzCBQ5kA3nBKZvNzQoZBU8iTrinA1uNRVzvNMZ1pb",
  "key29": "m5e1rNN7Yxi58gDrrsLqY411c1YQGQUG4VcobVECNAiL8rMxWt4UYjBuJR8SGBsbyNknXhhRMTCqQZHoyYjqEVP",
  "key30": "z1nvMTp6ieJu3jpivmAQ9Z9SbsD72ZYy9thmczzKgHTyL35m4z4wqsfbyrFmcJuBF1RxA95wkQbLdjeknsPDv3s",
  "key31": "2DaEzpL6oiVmwXWLnFrnz9cyea8QtqeMZHAzfDZ4UY3KLM9HKE39DPrgAA1N5mNSQh8Pp8MyqKmJx5MoXXPEvcRa",
  "key32": "5jZVvvNCEqj3zWLEAqezv7eyNTvy7Cm5Gttf4toGi7RJYWBie54DcM9XJvizrWNMFFEgd4vtwMcKATSkCHWbVf6e",
  "key33": "22EgWY3WzRA8kdPrkzigcuy1veu5boRMdk8ZLoHs7BG9xRHZsS65e56Gw4h9ZnxPwzHiDkBS4jfHfy9rCUq9p7DD",
  "key34": "2PajhzcyshywCurnDazKPytF3wjKgZPMbtGzpKpSN4Nu1ZKjzcUPjFXx6WcJKwGibCHK7zam3eAbQHRmrND61Q7b",
  "key35": "5X4qoohuRcs3Rj2d4DsB5LP5NAHgTYnXT8WcN1sCjBJkpNexWVo3TYUbFSaTS7xu8KBjiHFTk3Q3roQjdfkQMH59",
  "key36": "5J6RfpoHx7C8oAfUrBGEH1LqDzBoKKm4eq3njiwmdwSobkP65iqf9xQmzrNP4Yhk4XEHcWLarfHenGjuuPFh7uQJ",
  "key37": "4sr6gMPy9fveMjmmhHyaaMTxSqDLL5T67GfAvhrbLS1QU6pu4CvUnpyj3i4G7jaRC3vGZhqtCTMa9Q9bxWEtJm9J",
  "key38": "2MYSYWJHcYyF1fb7THrSS9FWEk4E1mrR5kt95w7qjxUwU9sXbugx8uGL6u1YtxbLxjia4WxSCnNwUEmEVFdAm5QX",
  "key39": "3HmF7jsLDepxGr5LDpNQBiibXva9F1YK9okTyXfdaWUYRfEAnqDonf93utXJ3Ha3MKx8sJnzrS2XtytTZbmphGrv",
  "key40": "eUkzoUfLwikgHEJCyLeTkhksioaFTGPTo5gXCSy4ZFP5m4FQ7t1HxMpzkJmURhb6EMKzcanWKs4Bmv4BfajdJr3",
  "key41": "4oMahaNsABqptAgfRuFLhtfjq5Ug5RmWibBvx9Xybzh8vCmuyf6es6JnEfXqut4onixA77J1WSp2mjkcgaPpNWhi",
  "key42": "4gkNxSN415aQySLiuZGLDw8ZgQghdJkjHfFQPzvBmSUQnsYQvMKocFR9H6P2sZJVwu5j4Fc4CunVFzYXMgNsDBe3",
  "key43": "JMsywBComYCEzMgx7vZJzh1fNx2DNKunnB48sH8s6CjPJmccz915ai268GYMsc8oNBSev9zTvzQHKyVbDGBqVre"
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
