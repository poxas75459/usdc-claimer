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
    "2LqtaMGmjt8TdzTExTRKwMWSHir9JQ2HRxrhH3AQU1RU8K8Za8ErrY3bQHvhvbXAoLTTZEz1LKSZ19egdrtCKmZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iQUBa8sJGrAvQgUvTY2hftCu2cmwEvYJd9TGaFMozY1GPowUV41gtb5xgoJXxhnE5Q5kbE1FedSEsG3iGib8SqZ",
  "key1": "2MwtwEoqdmzukMoBwcYyt81tgJikdx5mKrFau9ghyCft5w7NzSzH9pnQxNWHsEFUcBDsPbTakndXgiKQ3Vg8jood",
  "key2": "2zTUnkLYogdAueDZ8T9BX5mDfh5jKkaLDhoWGegKiyJkP2Xh9cU361NR6sThBURizizkVH1z2jb6Hms7sM1fUq7S",
  "key3": "4r4WxeDzSTmht7tKrnuzseNc2xM6NZq615RpixY3DpwLxXvzQBLC6hmayftQAXEEEmB4kgeUgqgPFfNmBsTQ9KDx",
  "key4": "5egLAWQG7Fcyn5nopB71SnEZypHQtAkbX2w9bsEhQwd4LW2Ky12m3yNyT7ZPESFPfrttnuSL9H97FUnfmsunMQBd",
  "key5": "4sRWvgxb7tciB5Z9Rm3TJSAV5NSPgQVsg38amHtqmjVVZwKxBA8ZjxiBQXzwmVUPt5MQCKAucZdF3yom9SMheXoC",
  "key6": "5v84o5KmyVf8VaNdRKQj6N5A4zdc8QTTPpxNRSWZzA6gK5coEk3qPdiTFVRgbNLiZvznZGaPd8NJ4AXBWEvsyxwt",
  "key7": "5FHMcTM4vv1BB9XiKxzJXRMf7y55xXQEVjd21bknyRHXu1FdmP7u2jR4yvUcFimmDsFeknmzeJuiZiV5LUTub91z",
  "key8": "3SQwxLoxGq3zo8mjoaUXAshJboLNWE7pT89tfYjWJQ2Xj7ixwg3YGj5ZmEVGdTmD48K59Po6CHJXvpa43JeNjAYy",
  "key9": "3d9aMkrXsmvD7TReAi9sNQNMTxN6wWi9yGP5G5ff1nstjeRyvgnr8BSteMg2wwhPpi64NQiTaBPnoJEAxomeLoME",
  "key10": "2DVSrw1X5Sjp3GwRFbksnpWwT6ySjXc5kgVobcL1hVQXnT4oTrfvi8yjmgW9rgthykGaczQpj7ztgjWr7F5jeDcC",
  "key11": "627qzokGSgdhL5TpVYyrpeBjvmNGiwzq6Xm872saxYRahoMitB6aZqH8C24HwH7qJAa7VM28YF6cNXox5du8FmVh",
  "key12": "WJGvL2ej5puvg1bKnodiuWFsYKNencPXT35YJQf6yEBBUbPMTk668jnVuWZQMAFxwrfstXRPS9YEEBub4maYu3f",
  "key13": "2XwWKQs3YgvrZm1KnJ7Jy8koAsqpSsmENZU3qVY14CuXozYBG1XhkgNYXq5SXsDTwdr1VDf9B9yPZ426D8fxD3HH",
  "key14": "5zTkahDayVPecA2uSKV3EFbTSFZnRSgVEgjMoTHDV6TF15L33mvrU5cjsS2sSYQ29vg6UF9XqQoFJXWvdrm81xJ2",
  "key15": "47NQAr5bEYi94z2A2UkbSZLKDHxEqawjcw4gLAgpDdqmXcM5VrEjfAn11rJaaVG3wTjTuSLVf56kf2TzkMAcwGsr",
  "key16": "3qVwCZYPt9QX2oXYWMko6zfo1Zwssuud9pbdEZtw1fkrgRXibTkMuPXbMgPh5gBrWv8ni7zJD53vGLnVWdMF8rH",
  "key17": "46KGRbNVxU6GuFZzjcSc24v7TqQnth8sXzFEVgVQRZov6yrSYh7AVNiMYENvMtc95JLtSBS6CjLSYLnniXGjjocN",
  "key18": "CQDBYuN42nXn4R1vaZ2m1HsJhjfif2rVHCPyvUQGmoALqojFup6nHoEdmH33CFFob7G7uN4ZqL3jpdRyD4u5fdV",
  "key19": "54xWrb5fA9NgqzsEq91PozbCXRdsxAgLuTj7tXqqRTP1k3DbLWqUNrvdAFMgea35YSKncJFULLEz2YSvM4igzuF9",
  "key20": "3ebuCLxCJDUYRDBgVhPpAUq4sZiStECBGEGotA7Fxig3Y4s9HKdjjYfQcxJoNzmGhJEUrDXRf5HUbqYCkQX94hU4",
  "key21": "5q5jmUtyS7Y3FbnAP4L4ZtRNopGk81PdSNEiCv6zK9GWnb8nyFw8Y1qKu9Rkinbf15dfUYCHGz1vC2f8DN4wNkWK",
  "key22": "5Ms1YHRDciPNxZNNs8XDKTwTfmUNFr1FLLJBuDZsUoyrZuu44316gCvu3dVxoW7jsMgX6QNDp6XnWSMXQnGTE41T",
  "key23": "3GAaUpbjnEtxS1Cy5UYzo2p1MczyJwYfWY8rNtArbdj21xLBuQDdirK3VLJjNfsgzBjQSEgtpEjFSXZSCsdNuS5q",
  "key24": "3GddkzUMZaPVuGycURMV6zHDtS5g229ngLjLBvQnptAAz8NJom8XkH72XaMevEqxkuSBRVo1Yyvb9Gpmfvmiua1T",
  "key25": "5a7YMZDvJyh8HBbHSH5KfgqFSJ4r4EN6occkyYdM4sR9ktuJ5fSeaetS1zV9ZanPADu8sSAkXzwi3JDKrV7AUwRY",
  "key26": "63rubrCxQaufRCyaqEr4kH8DiqLvXKyG2ikPwA8mS6Z57jz5gEHrxpGrFzYRK6tDEXVh5CsadQgNzfDoYZXYgrgu",
  "key27": "4g2dyHG5JYAZ62eopZCizmC8eQ5QSVkjTYC8GM1oi8XqJqZ6LckjPwmqLpELbNepXP43sHxH9RThBxy4iKt7oqYG",
  "key28": "2SypZMdubkgJBabxE2NfXr4HwuaVCDACS7qJMt1bepXmE943MY9ki7Ym215a4Qub8qZnGxh3YCB67aEMuTk2sH3U",
  "key29": "3VjfgWWU2Pvmh5bUdRCMDKzW3cSo5DSHyY7sbKuPqmgFGfJm8jxAaAiPnRo8nhCcjY5DRMDGHVGqFAnMYKaNBS92",
  "key30": "5o92hrJZ36Th6omnVTZo3dvNSg5HP8iFheSSqVfiXD71fBvzvW3FicWbxYp6XxkpLMS9cZwMhZamciuYuaESMgRK",
  "key31": "5rydxYHEw4WuDy8YsWfPtpCsEccMg8NTMoDmsMiLjW8nAq6zi5Z3UmV5JMMDSfKYz3TJZhuxwNLhcJQXS2mF6QVn",
  "key32": "36RGT42WY6SxuBBJo9kxmWc8kcpaahXDR8Sf2PHjQ5Q3yYnvXPKUmsKpLMCuUDdQx4SLdXxb2uiUwC1vbWS2RCp4",
  "key33": "wNLpugfBDjrVSmzQXuyM1N97ELbZFQy53Rhx7FLoou1sddG5V2jXVASgnx7Sj7fbPtPVz2GnBdqXBFnqAqZ3Vo3",
  "key34": "4d3wfX21DJpfjVdpPi18bkkrVvoYGCoFfhJMjKvpLUUmokn1nkDYimTdwo8S8ThVapvEkjRvDNYZqGx2hkgJwRZR",
  "key35": "Jcet6QJ7dUCryBUovhEoE1C4uVVkon9yymYo5CFEQZLnABvivUnHuHW47tdahF3sL9gkMJLxKm2hHd81hSwdjtY",
  "key36": "2LwpSoNa2L63RGhiPV9k2PK1SXimjpzvJnqE59yVNZ1rG6yPi3R98FGGzngqHNKSjQgu4hfPWEbYY5QYHNLyu447",
  "key37": "obr6DEKTeYS5bG34pSzJaSR12dskRnSi7ueBw8Zn3qC3R8nTNDGubkpYfXmjjeY7DKL5xWTvp3EvUcf2XdreGtL",
  "key38": "4ZwdE2yci1vq8EHsEUtHC4ZYzNBecNx1UenBCSxtteBGjAsAhKdWYn7b1NDZnzyjArwAM7BCVzozAocHYBFYHFGG",
  "key39": "5f3dGtQh7wFojpJoCqaoepKBTtY1D4W6sPZV1ybe74ZiAwvHQ4z3mD6cxXFxUpDtkMD6hrYRCcQ2ptAopwbxK8Lc",
  "key40": "4g7Wjg6LpuhmNYgJEQgnex9fXv8s5GP9zfuUXYWvBaWT6iWcgViepj8GmLUYvueZq936111gQYn5BkkB3diVEUwx",
  "key41": "5HBLkHGFpzFfWYB26cgzoKSzzkKyUiHfZiTh4ZTLYm3Rz1tnuR3kevVLQtV1pRBJLcdqf5ujWqTpnNsFqxrNWmrW",
  "key42": "2xXU8ZyADyrZtKA7UjRSGxUF4SrGjGeo1DCqqJJFvA44g8jMQYf4a99E8AvNLMvqRQfyzZD8JvcAtdi8UkjEe7g7",
  "key43": "5cpuTJxew1gswMuqs63aa7aHNeLznvgLe3m7NUY3kdvAoKw6xGsk5N9t93eQh7Nz4PM88XzU8cgsvBMrBpELBaxw"
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
