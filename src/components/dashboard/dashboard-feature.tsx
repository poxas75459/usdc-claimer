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
    "5FBSk75PfMLrn4hCjaKUUyopejC9uqf1TfTC3BzfGWy2DsjUyniN2ebPzvFtPTdpsN8bcjfNRaNqzbb7oHxZHf6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jnx1KJu68KqAKcT3Kam4mMTkTNEGAtAzSkxtwGTiA4D9hoyKsqJnbEoUnqxCRrSeY4H9xKVvQoG6XSyGq9nrEcy",
  "key1": "59DrXeGZ4NokdKgjjk6Y8tNgLS8KeMq1AzY3HhLvExN5TfKGDtcfcybQS97qaPBZQy8MsBVLA285XDq3Kt8Maqvq",
  "key2": "37VEYFEQe24tDZFop79KiXxv5GmYxT3zGG8qbywrGuGr9zW7ZnZaEjfpbCMXbnSokDW7jLPCTss5hELoizvadUSJ",
  "key3": "2pShvrgJ1QaRUj1Ls5aQTYopN1cVMRakw3cRrHyqL25SA8gCBqWiBAzA8rjFrdJeLKWHeU6Ty6TmFkRqtKr9sy22",
  "key4": "5z2TanJtrRrG3BheomXgsmLxb7jZpUxQG21w2FDu8S1W9G7gZEfogw8EsR8SwcGeCoxzwsLMBc1SqtR6TPDpE3H1",
  "key5": "5LLAhmsSLVbuRk6Eu78W7hSxiEZJ8ykg3xQxXZpwrv9XkVqNBo2gLCsQ1NWJTG33H1LVvLg8cQLmhW35DLxBGnqp",
  "key6": "63Rx5bmX9JMyjVUhtCQKyT9C2RUpzbbYdgAFz9viHvbBpxkWZygPQtY2FxP1jHwffWGL6z638918ebHQYESFMZC7",
  "key7": "3kavesEAYcU5JR5cohaWJ16b6T3bzpYLMsfFCCUcdEDzTwwjaLMq3tP3CEcgW75d8nvS78A7zvRc8W45Q7NNKV1s",
  "key8": "57JJ8H5XpPHEmjAhWgH1E4rmz3r99kEFkogeV94vGpPEXQWL4XZjPoGayBaqiPkb2RkmvMrikgRHSsG3ir65tHGZ",
  "key9": "3iNz1vBhKF84ykdQ4DQadoDmUJHXL6MsfJWt5kTEH5sv7Vzx8zVwSQtq9ZHc9EXGguvyHgyBtvCQRygFyxKd3gJX",
  "key10": "5ok812tFur5LJHcESu5kqJBs8qqJvusem4esZ1i3E2wB4U8KuMxkN9UGC6TKtzoVpZNXfJPeTgDkh2XcGVBoMVYi",
  "key11": "2ddjMmVC1aXjgG5EtpCPp4ro98wZ3BVxRuTYztTJBLNoQJwsbN7ZkAafgoRokbsvqyx4ssSGq4QrKvH18b6nUu8j",
  "key12": "2LSVWbWHemPpVV85J2ziFcGRfa2vT2zxCE7waxyMF6bG4CFygwRcSg92HdkGF5PMiJrAS1GpAgLzhfXTpEfeeEVu",
  "key13": "qum4PWMicAWWdS3TLaqB8QL9gjGyQtuVVBFNzm6oW9nZcE9zQ46w24DZ6yv5ei1NT8BHpWfy9XnexrFKiws3SyD",
  "key14": "3LsQRyCvMM32GkwwPcVRAM9zdWY3Z6cvs7UPAQpwJjgw6QgYo3hNkk8mKdKPKJEkFS5LGLSVZdWD8kgvgMPX6GfV",
  "key15": "5K5TecXaaYa9Yyace7XLY4DFSDmPk7rQZUqj8RFN5H1t2VDtt1NT4C3xQsUULeTuLMFU5w98gAa1ej5vf2XwPD26",
  "key16": "2G4S7SWLS4PdZZFDghNVEfEgyhqLKvDjihQjJQw6aed2WK9tXJEG6qC9b85tAUisrg1JokxQSU7XuyTZjrNAwUE8",
  "key17": "4jEFokRMScsE3Z3pTjGcN6q3sXMZUuGy76sayuwfoRZsoonp1rpGrSjyjz45yYeFv9jp9sfasstxzFpPTNcfkUWG",
  "key18": "5wT2HykDMLZNLjpM1dXEiH6s1AwgsBZa1hwrAN6BwQGmZXrQQBFgHdaZk9qyPoTXanKodLNusWF9ZdW8TsQmUekV",
  "key19": "5oorpTWvRk3kZ9zYvg2iwKGzHRTAz9yyEx1qSbHLKRknHQdgNJvmcujWv8TxbEDukJgvn9WiRzJQDLcUvS7WFmHy",
  "key20": "b9md2jPeot2EV5m84PQEj1Ht7XwDyaVkQ5h1rkuvKwvBPaeRHMoHXBH9uszY8xpXrVaGHWywePtbiiGMoAQGr1R",
  "key21": "4diK4KMCCV14Amu4HiYVVKTuoN3B2nZXn8p9VUon2So56oBJy5ugix7zhS8W5X2Tern5suNXLE4i2fuugKDXAC4F",
  "key22": "2RP3N57NyMntP9L6StbeRaHpBJBqfGCU7sarSEU3wJyXSf7RgYms5aqcmDVauGLJJnJ1Vxou2eRCEJVJBFDiTmHw",
  "key23": "55jd9m78q3iesKpewNGs6k1WUZ6sMVScBLSZF3JfX3AFiADAU3queiBppUiBcX2kKnU2ZWFVzuniWWrUUGF4wZCf",
  "key24": "2yZKC7HDF9TDmdRp3NYCUo3qENnnarE7yrtK2jZeU8CAZUhQuS1Yt5NJaZzvtJsaUn17Rwbg1TeoXuXSozHNXBn1",
  "key25": "3xGfo68XVrf7w2j2xApCsvWw9Z9fYiLU2K4dmhVESwjdS79jTFiujyY9hrVLuz24Ldt5n7dsnzKYZZMGzaeumT31",
  "key26": "478DrxtvHa2vfE3WVobJAGVvyqPMn3dPrwgnyU67sEzfwYtCQwRTvZAoyFodY4fbR6Z9Pk3jo6R2bJYzQrn4zMcG",
  "key27": "44MViotvfAaa6yDrcjycM29ScwBkYnyDPoxRkCEQeQUKJ1AU6iE23DCT7oPv73d99cExP8crZMnPWVweEmxEVPB7",
  "key28": "5Her3MKmj4tCvHSWCQ2TJd8z4FY3NmdNYSLHHnQz4ZcubptBs7b8gx96PhvD2TAUby3QfbsHjc47ZMZzvWgL6rcT",
  "key29": "3Xz4dq1ggdWB9mVU2vVt7FKCT75erUNb99XJ6v3ajkvcTrbk7Cxp8MM8ohsERLEZWkEzuk6uG6QyXmy5NEbFRAyX",
  "key30": "4a5JYKaTn9QFW8fbe5ipjw1LkKjTcq8w3aPSPxGsYQxkiMhP3tmrmQVFBWoQYHkEf2cKj2gNJfo3KcZ8QifAtQJF",
  "key31": "4sPDZoEuA7EoYV6g6rFmdoiRHchJEnojJENHfTntqMRUC4ZxMJhAMU8JckQBxTHRnbXx6AqnmhT3xvhRcMno8LjG",
  "key32": "3V1351yEFudCaqZi7joenRtbYkMvGjd4V9zECpvDLWVbaNSHxngxBaJZUVeFgehgGnNLz43MZ4Hot9cr3ejzMy2f",
  "key33": "2PtR6ziE7sZQ7hAX4SuVLRyQn9xywZb1oAbBF5N6b5eNRnR6qrNPSF7Cve5yMJWCgQ7YAvzcShCSfqA3RdCiZ1RR",
  "key34": "5BdtUbpLYyLv8u6JHnuM8YMZiFjoRuq2849Ku4aus32Rt4txsGHsHT9PLhYHrAJ4cq4J8EM9E3etiY85Ho6CMwHc",
  "key35": "3ZSESpCLskWeeYYtgyh6rRS4rkKAJ4WZWSPcSwcnMTBsXjctxsRV2VWc9XtAKW3yz5QW9e2f6CnkZnB3at4q1zj7",
  "key36": "3fh3HpEhWNiM6KbMJEzFHw75AWiozaz8Q81HLiQ41yGgWfQmCxyAyrMybLNp9ff2G93a6FpGY56uqyob7WTKJkgC",
  "key37": "3BoDynAamuxaN5u3eT3q7sA1rYSbvnuEb98dGmvq9m17Dt24nv7pRRaqGE9Mo5qLApujXqL1LegFwEaT4XLh2RxW",
  "key38": "kdNhmcEQLu2FWj87E5qbTZmdXR6UtXw4q6XRvtm2JFDWZHW5b4rsXY629AWEHT5MRKgZ3Pb7irY68HM8fkjUBcu",
  "key39": "2ks2VpJHYX3qcxeorLrF1p31Dur4oFT1SgqmzmZ15vbs9rDwmH33sDKQb9Cdoew9QtBbiVvSA1EbD1GRNjVpaYHH",
  "key40": "3163KNjK5KnYnx55Jk4W386xfyy4h58VLxssfkmRcsEc8ja3DF5foWmSWpjJuegeDZjckopMZKaCmHaPZsKgzcHf",
  "key41": "9iYZAVBAg3tq9tFeekmjDvXyznpSeE9WF2ZRiT6ace3nw6V696AG3PW1EDXhb8DnSTKN8QNLPzrxWBZKmmm5Vtn",
  "key42": "47SjQKB22dtMzxtjyoTsJwKw2kxstPbc6WcwkXSxU9oQsb1EfPGWNLUnYXcQzFxSwWAHbMr64ReZAPbkeSNaxsMj",
  "key43": "5MV7JeFZ4LxYpZJXqE8pghMMjViN4hBqx9FafgLcABswivAdHkJD4LTCmSEBiGYcM13Pdn5Fmws8FqeofnWXvVWP",
  "key44": "sPj2zxDzWbtTBuKzbEzPZZWDmPkreTNqyyV9kLPd8PVTTtz3DkFCNe5aG7nXJSYXpXETqURVTEzZHBGLnCkyGRn",
  "key45": "4DCNf3wJahJmoHxqrH9yyhN1wSAnCzmZfmTms2SDvKdcGc2CPmAkaBacKuJp4gXz1bw9rin2Xczy78oi3qP7bnTn",
  "key46": "jp6KGNb5LBYf4JJ3xwSfs8nT7iBZmyGt76rcGSSmgrFC7wiQQmKhj9xHiBVaBmuW7885wUKKf6Y1LRTprAYytMP",
  "key47": "9uZSskWeahiXksfPPoWNwXcSLD3QKGVNov3bmkxphHhCyTyfi2Ddy8WG57inCAD9rBG5hXoBaaSdfjRqbfQay5c",
  "key48": "3RCdUxML6dRZ2qc1e7acGDREaqtYp6VuSUs99dVUvJawaUEFcPWZsrTf4Y7DAkLTPMwKVZjnma99D8ct1ujJtRee"
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
