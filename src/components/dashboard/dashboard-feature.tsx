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
    "5Sci5wMmiuA7wowoXhMpPk4LHc5Y91Te4q5YF8CBXYiW11ZAwWd7ZgENgkfLX3QGo1h4fYYzsAo4k1iVEiEtNWAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XtKfBK36pucduXLfo5MgYRamtF2UvfEwBqx77wYgWtCpZxDXrzURwZNFymuApoTNGXrB3pJUqiRPtuRZEunyKyc",
  "key1": "5bbyJczDmoiYujCtnfm9KL53sFWqHbB6WAQ6BsjopVHcnxj7YgkGExLaQFsSrTbpG8xA3FT7DCS17Jx2T61aeVqU",
  "key2": "4ragyS5nxQCgnZ135ZNurgzrDGeh6g2ypG6o4GzKxXZck6vw1tcr7dzX4bNZErXwrDffHLXxRHCChD2DB31MTfsD",
  "key3": "5CtoPBcCy5JdQfvMwzbpVfow1JYH95GSpz6L9vmvEx9WSgqmztuXBtDGSnmnLf31L9yYRfzqN7KW7MWLRYyBct5B",
  "key4": "2N5VosqQDcRb5tUqmvLPwzZ11U1TjmRpgoeot5uiLyNNmHkHAvLMXASMf9SVoEPGvRgfY7Q8NqVQGRnhGh3z4cwG",
  "key5": "4Jh2N7rQdrZ34u4mCizAao8MZWyNH3cEJuxPGN1vkX1bn1qQ5BBxfsARDJodiaEqqveioTZ5cxQeAnH3eUHtfcv8",
  "key6": "4pRBYWh9xDyJaBsiFwyXsed4seuycPThy3NWij5vU5c5xypFcncuSu5jx1h2CQwuQUmK7VQDaVuec3sKv1wMeQaL",
  "key7": "33i2kWEseo9pha2TVCmAQb4sfQSfXTcuJvt3HJuVkP1yesSskN5D8seHP49W7N7yCczbrU3GRf4RubJKyfJFAXGv",
  "key8": "3nDehq1sinnKGaTQWBnrrwhqbr22QMNhnDX8kS6NsWw5BbN86m5ck5EgXYnaG5GmvncA7pQrfin5HPGP36FGEjQe",
  "key9": "LXKrexHcNyTnNozn5nxGmUKAtm6qyNFWde2gajEXMZfmvjAEVv2WVaAjG7iTsmrLVsWEXs6djvGyuW3VgPMfk1v",
  "key10": "2SjDtxtWymC8DqBjEZ168u6QCctdCoTNsok3p1rRXgnSAitNhD1vTcqUe6peYYTpTP1dJKgix5qTDdWGgrwF3HkE",
  "key11": "M9gYGmAHr7z7z43hPKyXzTz1vTqrf1xRVFNirTqsLXrq5MBgbfbF6Go5fKAGWwNdxFLDtxdNc3YvTBUMhcdbvrp",
  "key12": "2mt5Cheibo8bc9ZfYDR81rbH5GfMAd5KpvYfqoASVVh2pnHRWJRycTr9YXxMFrNfkuerXGNqXEjbyzpcubXMDFFJ",
  "key13": "4r9HTF1iCZowFDzQFGL5PBmu9eSdJVtDNb7vJsovtBtN276C4nW5qiPhVcE35oNsqWktydHRbNWYXM53wKiVuQB2",
  "key14": "611KAvCExpgthPidmL5BnQm2JAd21BWExdXZ2XH7WtL72sX61gkyr2P3E4CedgJMErKJ51Xiu5uJuYnh4m5C7M2Z",
  "key15": "5jkaKVsxVNvCNXoUhJW4yVKk8k3BxtbMDbcmbfGh8ruQDe6M1L4vNeXktbV1jqASNq5hHgDAfmpRgPGQtVhhu64Y",
  "key16": "5XJmoXr1XD5aBCnF1njQBwxDcKEqcTtXSF82Tit2P964fSdMAPyuCAKNRLMnMhdF8baJRzJCWqX6qtSkZdEoZ4iM",
  "key17": "52Js5qUwZkUXMDbh7qjLPfMay38EWCv8uj5e2rWvkcKUVU2HYUiMLnpgQqzh5BiYwYFpXfk7hfHAktf6qHJeap6e",
  "key18": "29VtfnoTAXfghYTmUD4cn6S3VaZ8vQGcb1dTnivmaBtUAf1MiJyds8dZHZyqyYtBwBWmcctYoqNF9UD9fvmyXiS1",
  "key19": "5V7PAFAnfYhEFziEXKmwYntV9UFrwVkb7DWWGSzt6tUkYNGbMGnSnJhnkgx3vgiyiWRUti53oD9ExeGgMAWdJbYJ",
  "key20": "4fVyUPi3XZFawS9iLsqifqk9ytoMxPSn34rZjCdbDxeXLM3Uxg4EucKqfmDYMeFaH1B3fBuSLmMLDivu1dt86BZ8",
  "key21": "3zDwwjzCPvuEiSGtUaaVKHQkLw5cHPtw28yvRzvwd4v33fFQDjqfTNjSUXFqWsuKPAVM8JCKSz7DfLamUrRccK5E",
  "key22": "3tuMdmVFiG7VdNtDiuUvveAHMKqVKSLJrDrXARqCKF9c6q4zmeqiAneYsPFjMc4RLS8YPqEXKQfxwitbVksAAXfw",
  "key23": "59hvGfz4VHDGJALCZGLRAWQbHTQJrVruByYJX7Cojqh15UDaNKsnZHwuXzqeZYoFC6MBsh84dkc9BiuGTzHVT9q3",
  "key24": "236af4oZsiEnYJpTHU3BCDQtQXeJdoqp6geALCLMCuaZgcyujEZrGATzg2eHZSrEAxALsXGoYKfUTh635tV87iKE",
  "key25": "3Bt2mmwaCZSnHtRBiJZ9Gfvm3MeVuk6JXzUnK8jdmcTvDiwiTTmes8VrB5A4by48NyXkZF6ubeg2fDAwLMXBGJej",
  "key26": "5Zc3dLrANhcACWVeCkcjaopuWkhnLcSLFdnQXkC8yB9QxirXx4gjkFbgegsduFJ1KGY7JPRvDJDQcDNCmcaN7TSb",
  "key27": "5iDwnpbduEiPiWPNCbE1tQBr6Upji7U4m6ZPXohfH4fUow5vkCGnBiFX2pexQSmZFbCfpPPUkNDDtNocad8HJRkH",
  "key28": "3SfWoicgaJgmDNHq678YZdanBwkFBp42gGxHFqKS88RQ1fCKmXTcbbNPw8jKN6fuyXRL4Cpt6gaAqRPATgVTXpVK",
  "key29": "4ZoPjcP8T1BX6C8jz5wA6LyxXPXV6vmFpnRpFJTMVpdkpGaJEbxMSApQUorvqDJ2Zb9DJutG67z3WxLes17vPyRU",
  "key30": "HqAofNSfzk9epWCiFLzYFzXxrDZfqFP6AYEusfdiQJqzGjTiPFtkRVhvYCpufWXLgaz1oaBJBzm8r1WT1dsKmDa",
  "key31": "3EeUZ9HWezyyTuLq8kP97DwV3tvnxLAksQvRSqyHVzhn2GFtpBnxno9QH6kHUbQebQi6vSY34c1hhDnWzTf8wcis",
  "key32": "JdAbFqMWCtYV1EGDKTNNQbJKwehS3Q2EGk8wFQYbR9CfNZ9za9zsrSM22PFpxqpqaLmsqqk1GZNiTXawLiVm3oo",
  "key33": "qunqk97sfbeumtjQxGPYrVXenePfTLqa5sY94iZQPkgKWpMrsvd5UeomcCuytL4sKWM2U6P6LDXUQpoqh4EKrf8",
  "key34": "Goba8URkVxMFyFhjxDnFYRyoBwiQNRf35EPPMB3Jn71T4ugQAPDm7jRSiqMHeMRCJQGfgREYhB4YYoUrzVa3MGu",
  "key35": "gsh6cwEprUPpkCNfPckhvWoVVJ6LsNBQpQnWFsx2QY4b8may4NxYEUpHhbnP5yBbdUAXc8yWHvGoH8jDXYgd7Wd",
  "key36": "3myDVKEBiugw46vBHrPJZuDhkUd2V94xMh3Zjza3TEhReYeQG2fPve9ygnL4hbbVrGTVQTWfi1CZww4gQ42ubS9m",
  "key37": "2rmU3xNq2rrNqDtGDaWj9i3Ai1oVotu4HhegU5eCdZVYDikjRSwpUFWV6FVNWWHy2mf3FryyPErGZ46ttFReeCTc",
  "key38": "4VYaVbcz3MLMcHBaJh61BkJMdmRrh3NDSJYTfJUkvptia5euBnAkQYnM3UJ1pEkwXQBfzo3uEt6msRJVdKs3q4jX",
  "key39": "4YV9K5UqnDK1N6WoAu3ZibtLsYtbCTdVe45Zp3sqn54W5wroE2bxE4SXd1VAndGpY7RZQsAQv6DBMuFK2emzQ3x9",
  "key40": "3CXsKnq4JBSQM2tBkM2zRzHqkwkeHejXCuujuv5A1m7ZH3pfFbPb3wJNnFtLWgor7DvLcRjw2kZLSB5xyiXxVWLx",
  "key41": "cSjL8GaaFhtvEmf5fE9UJ6kBjGy3kNAcZDDupg5LyRo6qDq84EZDErEVThSeGTJrAnGPkUYmAKDxcyuHoMV35Zr",
  "key42": "Ndj4qcj1oj5bYjPyg9rsNYwZcj4SFWEvrwvWZ6YVViQWFeTPpyMXxXPkRCPs9Wh9va14omip6RTHQvz64LMxTSX"
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
