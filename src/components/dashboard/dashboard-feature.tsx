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
    "5Yg7oDfCA8mZFC4MkMye37J2WFTeyRMjN3AWiB6yL453Uge1tUyqk9FWq7uUGJTJs48PCJdVVsq5WrJyCWwDK1sP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tnsJTWQgFWTboe2kyAcxtjyhQFwJnMUYzzsGTFL56yWYc3rVkzA5m56S48pm6SH3YhzAaVjVMPg2wqVtZScTUUf",
  "key1": "48h4XgfojMvazHhVatSsygXtz2Ved1cNH55WW9svtXHv3UwpDDDfUoG6D5f5Xrp1p1oxDk9JbaDHUdubWqWfm5wV",
  "key2": "64WwZq1RrUhmhgsqR9NNMqenCTSjqAHiRZYfvhZ8jL1JRwLXXThh4H458VKm138DKPkoygFD5bxjr9PFD1uGx4Q5",
  "key3": "3NuBPNnbYdvydAbeKQixCnMS3j3kahYcCKtNGtQuYTAS3G6PbkCTvFD3NSFp8XW92a6umfiRrF8U6hJb8cRQinK4",
  "key4": "T1XuwL7j1HXqu3o5BnCEP53XS52tEisWdDP3n1JWAJ7skinXTdTew7haDPdCvmXSpemS87653EfrvEjVvruZGe5",
  "key5": "46cJTu2UD4RJVtLZqC9Wv1Fd16Yg3tkSxdZYdgXda4Q2xugGgzDdAA4ZagwNtpNsupQihH87uPii8vQ7Yw5iFbq6",
  "key6": "cEgbz77WQiW98fWTMDJCWapDWzCTR23qrQen7rfUgPM2v9QXYSjjydqAcn42zBZgHzpDS1pFCqpvMxJUPH4oQ4E",
  "key7": "3niFtU8NajuiZKwMjYLg9z3SXJfvpEESe4iUTvojFeNj7XgBYX27vCWzJ2bEgapNe5yxFTX8PSAAgRef4Uyujqcm",
  "key8": "625HrUbRBz8tWeQ46bn7a14wh9HgJ3zTMzPm6ekQdjZr7CurMqawUJHfeEq89DuooUyTQaSki9aaEXF4BNeC2Ann",
  "key9": "229Djq7GrStvuZay93Vhem3rDY9G7zHtGVzCmbWZYY66AhMs44WcsqBPcSNHdNBaGDd2uYErkFVkP4MdyD781Sm7",
  "key10": "285d8iz4ofDNTuSZYYxPXnafRgWZNSATu63p5Gtir5A6yrMmvQyatcafABdq33bmcHZekjALQifqoJdGY35sAmgw",
  "key11": "gB1m5d948tqNsfUcupD5hxBG2GhTPLH7agpGwmyDbcjpv5y2gDPiXpKqLGnTuTMeeCNmgBdqEZTE8JtCF59R7PT",
  "key12": "4YWVBCBpMfCTVMH1emx7LUESg1thui9KiUdLsWkVubAs5bhURmxJhuf93xMbedDvUa6V3nDXqLATWM7xq5EoCPJJ",
  "key13": "5EpGt9DSHWuAW5MYxTCSS5EroZ5YMTQ2EpP9C9tAuZstwBiTLtMxczS3TgWSrEoi1ch4AoPzkVGf1XWvHTYiaQxX",
  "key14": "3qLmyEtyTon78m23c7XPTrGcpGCC5ABk3btNh9eSkRRJy7fXCJahw2PBUZLpd4cjmsGLQowoxnpJcsvsvkzRiqo2",
  "key15": "A2w8kgoMZToPkMFhTp8yP2JcjqmrkX81u3PjwWXZhKbr2hVUTCP4nQNgyVgVChZHQEQ9NhAejF8aZYG35F2xdD3",
  "key16": "4CEc37QrKuHJzCicWsx3hUQnKdG2LqSVuybyUBtKMuEuyXXzV6z6MkXVRMKK5Sxc92A8G2G5TUgH7V4FPPJDckzk",
  "key17": "3mxiBbQseGPkafXVdDUE58oefKi5dHEPq4zPmTsBzVcnofYpsHgEuVXgzkPwzzivjaBuk9enfCwvstDQcSmbPQ5e",
  "key18": "3uhL96EzUZ7YtKG8eQf8JseaRZgMtUh4CZWKYgB2ewDc5KpeGnB2YpzGHNzguCVHz9Xkamkvg3Bbk1D2Pki1xvpL",
  "key19": "639cfALEaz4yqPcDZzMYv6x9NQdeERMyNS9GDuGXn6ztocuWZbYS96eoQSTqHCg51oZwJGKSErmF56RanzbXF7wz",
  "key20": "5DbhNAdBXR4KRZcXmiYuwUyVdKfxr5ceprMBeotBhioEMw7kyrxH8B8enGGsgjcycuhuyK81hje9B7frZdh4NeRQ",
  "key21": "5u3PCozB7aMnnn1d3rrA8FBhbbtkZGdJAu5s84gdtN9rcALBMEtNAakS4agx7Pd2naQNNqS2X3ckRfGETgwJ9N9",
  "key22": "5frugYDwsUKH2R9dPSbNd4odUvHLthgsY2wmpvRHvgFvz2G9ghjNUkW15EjfGxGXnREmkvyWxAAg93Li8YukFGod",
  "key23": "5AvZPjVe7AtswAFntnwAwHHvkkLQoxEucSs592ZvZ1MUkqyq3dQaWJDEqHkxgr9qMsch4RzHDgmnt2qZ1xVcRibz",
  "key24": "hMziRZxjVJ4US14AEtm4RfFWNDuMdSM8pvZL43ohjCUFQTxb43xfNCmYSdduhBbzLuemL9EPRBNMdPuquvFBgpV",
  "key25": "3coYUtg7qdo6FszwmiBTycwJxz581XRH6brMM5kAZ7ZnKc2FpHwEdy1LKmaFEhucinvzLbKRbV4giENKdUQmohir",
  "key26": "5h3vik1h1ECwH692p9uReHTGP8yYjC4tzUiH5gwmHr4EwQNhQbjv3dA2CHBtqn9Gb8dKv93JqwpMqDWiz4zQnGv2",
  "key27": "5cAfSjbvqubSeMoAZKxaYFgUgwTReQZx6rGA6TEGwKdtLtLzDnZEheiYWqT7XsD9MX5QTreDZmyXPyKfae4vokSo",
  "key28": "S6B8PBocX8GFktwJYu7T473k5FN6RPsJYrYwx7ELvheo4iFJtYR5rsy7xmvNSvTood96ueNwhzb2kvsFiZnC7QY",
  "key29": "3ayPSVrXNWMSj4CojmKQixoCBra3mEfijY6DHXYDGQQrxQmmETuFZecFBkYTyCb4XpTdw5y7JKhZbbctpvXB8aFz",
  "key30": "hyiAhciRR6kBLp2zReETcuLbiGacsjsF7KLMEmJXpUZf7TjmbYZgxu8WXHNUcwXa3Wgfmp7165D36SLzV9qzT6g",
  "key31": "4BfXfxSUh7g7KAmnjrFbFzu3eypf4mDDew9qmvqgr4HXvC3f8Kk587AJSjvhoWgmXMxerg4LaWdRu2srAYYU5gK6",
  "key32": "1MXZiQLttu9tsazcPeKduC5ibEnA2mYFm7ucG5f4ZvVCeHWK5eRRm5Ays8G6cMC3udbPVR2PZZxtW9S8dMnGS4g",
  "key33": "32nhG7CbjGZkuEnfzrcF8NkSAr3SkK66xnq6XtX7bkv6eyhvdBBUQNN9WC7P2G4d9keAQtgbjN6waphWGR9uNW6f",
  "key34": "4wW4Lu4X5Yo3DQqaLSZHGXNrWQFcPTe8aSrsfibFbBUYHxXHB73qVm1p8ae3mLVUVjSd8oLzQpP6skDdJBpnQwQN",
  "key35": "2hptA7podGy24cGdfeHU5uzrPYVLVvuPv1rr141tfqKNuLJSGWoCNctt2KB5bLz5PgZazmKALxTp9AYFT6ZWv1qc",
  "key36": "4y8uhTidpt8Amn1qRJ37CpeexesNbGgkShfjN3t6ZiXbe9eSUEez8RVwBEjs4QQkdg2bq2xPaffQYvAwb9j9Asko",
  "key37": "5MiJLcriZ7CJTpQm5KFThjegicUovcuyD738iVi2MaSxd4NctePCvujiYzDU8KBqavpxjJYDxHBwkQHmQ6PCxrTc",
  "key38": "43g1d7epzWNqaY7fuWjvAN6Nm2yfupoH4BpYBHZpXMqxuhQLz47VMjrvSkw7MegVBbPnAZPTkm9QLabFDimsKqmt",
  "key39": "3XdcR4YXfwRsJUB1g2eMPVgdsbnW7knj4R1TyenYgXv7NaCem1ZYgDwYYSpmL23fFPqYbhvJ7xSTDANPwMxxT6Pd",
  "key40": "4aa7LKj274Pdc8viZCVEH7GUQFcEcX1PinSVCDokSq3P7zuXUpf14DCr9XeuEXuVCRMeDGTKxNUCUGScKmErGcs4",
  "key41": "5kXKHTNVNMTEc44Qn9kidpgfcVASXvoiED4H2K8tw5knT3tZKtYmxPSj6PbDxWLY6dWkyKNiB6wjXcEWKW2n8uHP",
  "key42": "2swyKWj6wVgixnZLjgLNvFANKvginxrYDBu1Y1QPpEhQ6a3PvTEWuKNsvHqvo3Ae9A2Gq9zVSKpUxTQ3Zii5GeZx",
  "key43": "2MjQcUqrxYuatbdiM8sWraXg6gEbG9txPGq7DXjnyGuTrWjqCZGH851VhpVJsGPx5iJ4krZWoZQEAJzJoZsHuZzv",
  "key44": "2t4FfH2uXS74wQqkUfV3WB8oYGuqHfTfnUD1BVNKnVkZNTmWB7xBXuhQqFajLTGS4CrrhnfxmY4ChMzpRFA93Ef1",
  "key45": "3HidzC2Pv9WVBdXwAkcFkX7vxNzAknrn3e8j7erpsJPm1j5H3s1o5u6S9KS8pYFG3b2LJUExah3AZkQ6Qs7nzFtc",
  "key46": "KRbKMrF6o3Y2RceFfKQJmuJLyKErmppLWdswaHcFodXCjipz8MRTzkKX7dbCSHAyB1w88Qbi35wzmrPDbbaFQ5m"
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
