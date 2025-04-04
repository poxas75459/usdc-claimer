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
    "4uGQ15rtUdtXYsnKuocVx3yrZs7MjjRmtAiXanheD8WRtyGcUT4aDd8S9uEdaNJUTBcniTDwwYpuJ1DFbU8nJhY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n6ss1BhAKFqB35rn1GsP7DBG3QvMS2MA84Pmq474St9kfhxP9dz22U5LqToVkWE2djTW9jVe23N4uaqLtC4uyPs",
  "key1": "4j71BaqoNUvdzqKtuZjfBE5EBpEzKHtdnrHwJDcWiQesTm7gVg6mGtWaSDG7eiuvPw6RdbnP5UUFjzzFv2bB2bzw",
  "key2": "61mjVMd6CdscYgHTues3na5SF1FaFDDuKeJWeAYrYqXuRMmezCMrKnwx5UW7WGrkBB9RYGiX7mnv83n8dJQjnayD",
  "key3": "63kvRU8qRk7qXYpfpC1aXSr3VF2NChLG7fEZi9o831XBGKXmmXesXxm94kS95nHn2SF2o5XvtE7szvbcLmgn6rUs",
  "key4": "4pac1ANGwRRs15qMDELusEj9TQ31BfTdzNAdG6q1nJEDEFPJDD4bpS8d4omPcYExh4maWcWGd33XnhKUxTEGFKA9",
  "key5": "5g34bPBkF5syeyi2kKG48QpWWhEpBhaC358Gy2ub4huJbSDiL3t3eEFKcTVdND8K2zcY5hzPsvRwVisLNUUUP35C",
  "key6": "5vJRK1VvRk78b9DMQWqY98u4UCbdERTBBDxoEak6LmE2wqp8MHJYJBVXFnqggUBtfTMDLi7TaVzXooVAQrkaQGTS",
  "key7": "3Jwfe6sAKUwPhiRShLeLAxf7ssfzJqbzQaUBjKNujigdWX7VDZkwTHVVyrpnZTV9ebwzRaPChrR3RjCsw8Wc4VPw",
  "key8": "4Jb1GT5ZvL7JY7ibshGc2tR35brr5kcjyYpLqGtwFKoqyeguo1ZacjyKtUFptDjMeXqqs1wYTTPcY3xaq6toE1Kk",
  "key9": "4rtFY1ZGGA5EPAcFxR78BTXDarHXfm1avKq8hrtjc8ErqWKcx7X4NY46rnxVdBJg8eoEXcFBfPTaoxeXmTM1y6qy",
  "key10": "WJKfmDANArok8TXmK7GQ86v7UoJBmtvD86rc9BmTWxopqV3nCjF2PmmtRPropCRtSKjwaeCMtdY9yYR8GtpYV3D",
  "key11": "4vJLHoTUVwdocgCDFLnrFikRb7vMYuaM2C8qcQRnMAZZcUnuF6T6yR5PWeigyy3DZYxP5ymZSRGeHUpaLVyD6JQ3",
  "key12": "2Cvrpsz2u75GEBJgBgDGnXqB9WX5NB8rRt2iy3h2yoL6Ctpm4U5Fu9mkyXkMu7fBr6ePUc51APxGfUnAvKiLF5bs",
  "key13": "5Aa7tJW4b8PGiusZvPpwufxB8jtu8HcZ3Zzf5hpdQbK1varRWHgyg45jK4gsE9TAYLhqjdQykWBK8gK59QWU8gRd",
  "key14": "5N3X5GXGMShEkvdCZGyMM8sfFCRWqw2eNFd1wXhVxD8tZYqEmE4Dj1kWCwrEwkthZ2d4JMzqQNs5VWKkVU4KNsrp",
  "key15": "DkzaxJi6eALUXtd1X1WAN3TFDhzqjCEejozHL9dbQDnvN6SdXeGfmHsSv83fVd6x79Doc16NngXbs9uKwcxu4Xc",
  "key16": "Zfoa7LyGuDhR1613rbYCLstow2Ywn8LPtcrpRdzaZVoRENDWUNwV87jAxeNx4DAmg1qRUWKzYBAekd45yMDsHmL",
  "key17": "4Pyc9EB1SR2Lfqvf8vGy5D6YaAjkYc6YpSJYwjURiFQmsAuGx2BECWEuy1H5mLyErJoU8uc63LM4aSoRMKrkNEhA",
  "key18": "3viw4ibVsV8D1iyw5RcgF1ic5Y3uij5TtQSZSgNp4U8odKTgxkh6EuFQNeGdWroFWgHnd7muQPJhSo5srB5j1v1r",
  "key19": "2YP1uVHnpyhgXNNmYmh6UC4wVpqxT92CdJ45kBvAA2sjVP19PA9qNjEoDN2KPu4C1iNPmASkii7tV6nFL9jPwGvQ",
  "key20": "4xnthKoji3apqhxYQuroehSsNsoC2EjgLTVb8itpFHKaqfAXQg7NoKwKFjNf9eQ3DspEceB3aP2D7QPqJkSiByFi",
  "key21": "5wMHx8jEKjtpxLhkzVzUzqcCUF17CtoW11RUy3mcXoWxA9yvURocPJbEdYiCrnx6MxHzgDLnZo7MrzbmExXHSVhP",
  "key22": "2nu9qRoR9RsjKUpXjMe7WiuNDWR8uFEe8ZymzRP9JmLVq2aBmohLM8yzjR26bH4YTwp787G2TrQLg4FGUhKtYHiY",
  "key23": "FnxpJx6KicpUBycAdmiin5qYRJs1JajrFGoeqE5r1NcrJxQFRZ3xxJaQsLvY6NGAmbEuqt4Hr6QZqafaujP4GLB",
  "key24": "4nf3Hy1acEqkiGXTrZd3J4xgPcFZmNQaKj4eTD6jx22YdvTzK378GQCP9vvqaGLTbPF8CZhHn1M1Lbnot7eHdLEb",
  "key25": "3yN2XKcsWPE4iF9USSMBPjaLugVTQDoS7W8kR6btqdixUzZM6FgzJrcspvt7Q2LmYSVxm4GW5H79Wy74QzTqZ4xA",
  "key26": "35sPNBaYN4ADgMVgPZNdwCbY2qhNR3oWFcatYxUt1Rmsd9kvSpic5vzaHiEiYhYHXuhESsvq5zkk2PEhECiHkGwK",
  "key27": "4rHHVTadpV6TEzHQ7Sid2PDP1ZcXELUo7BuhGGEuWcB8umLmjMe8c9MC8omKmQLMjxPA7VbiKKDsDMwnzrAG8TFU",
  "key28": "4T21ydN2pDNrPEHqtuDcSZ2dgwmML1ADHe26kAeNCPdV2joz5ZDxaEK5k4M99Jb39egjdLvbEQGefkuqW7eFWQXn",
  "key29": "3qT6AiSUA61xxDfY2UUH3ho4rzntMkKPiRaamkDxN2UHGW8mbjkmbCx89trxWm5SNo6u8mMYG2Eqb7JHSK2wxLik",
  "key30": "5DCGKxRuwDsa8t7GAGNR6kDqp4mrGkbkk6yXwy6o5Pdbyhu36H9SWeVJ7ntmoCArCW8SHZzWiMLpL5TkoyykAhmk",
  "key31": "2KdUhyDUFSqY1e9ModEP1z6ycsj2QKxBmSxQw1jxCrf2qK21owHMRijpZzUwhp8sNSD9JRq1Kut7x1xhWMSkvDN",
  "key32": "41GvAMSDgbS6Sbo3sDx9GEu5E8mvsoT6EsT57iqawxREzjv76ekxwqPSyPhDU9Z8jvRnafY5prae7d9fhGqJLKFR",
  "key33": "3FADUXfht5b3Zw8UTt1GskQVcbhVk5sS9rMBzfLuTcd88XKTZVZSwcJcKVSrJduDMATf2H4jDG5CrvW5AEebk7qr",
  "key34": "3bk4onobfscFn2d9t3sp9ZkNePa7kur3qGh4i14gvvwK2PmDffsjfEYTfB4GmEDcokMZ34LEe9sh7MpvxaZbhC5F",
  "key35": "2Q6cm5ASfFCSDvNaDQcJsDTfbkBgGiiBA3hYX2e3U4FFvCoFPBWUPA9fGxuvyyHALqzh3nWWpPHeWVH4HoQb8GQx",
  "key36": "3YNXrsrcsgU2XMKzmXD9sxSSXh9rfHSKLVTD1mLs8zStfHvkwM7pwwHUR9b9KFuhqXQhnd5AsV25R6TG1zUkMbft",
  "key37": "5i9dUbvXMzF9Hu6tJ4caCVTos66tA5bmJK5AYpXW76RGATyHsLiETT46rW9RtUFDfKNW82yo4EsAtYsHatXyCmYQ",
  "key38": "5U3E2zpdmpBSxt7UWVptrnaq38X6uZ6U8jnfhtPnT1Kzy8DjNS3BHNBvcBzkbrocc8YfSnYoT4RCQxwDHNTFPjvq",
  "key39": "2GFHU5nw9215EzzPV2Lfu7Xu5bRz2DKkeauA3dobiTpuDXE9RYXGHLb8nwM12cMs9FHsofkcpmrGEEMSpH9enibg",
  "key40": "5x24DYUrr6rbuStE28aMM2FofAKtqqap7aQCvzK6chT8NDUJKJATGaVsBtPqaQn6BvB3F5MGpv64xNcCvZwqWmVH",
  "key41": "4cajAEo6tQj9HuitBMqEN2erbWcSZ7cfoQ26ujfdUchuBSd4mLrieB13gUmjBbnFr4f2W8RrNVT9dpjXLdtf1gKt",
  "key42": "4HJwYFpc3RiYBnh6BavTdKmMtRHTqQoYamXzcwFa2hP8CEazPsaMc9B4WQ9ia3LP7N1YnRPiiuEbRwie7n1i3sB3",
  "key43": "3RpmuaBwnMhawjg6UHa7QTYsvExS5STwMDudn1kq3ZQ4JqWLksZaT9HnVKHeKSgpKidHnzuDY6pKNU1aavzHvQDf",
  "key44": "5Kpr4d1TnJNViLC8xC831GHTHbSnomB4vCksYF17QGntHJW4dbt8bmocu1KV3d6kN2N35uT4fERJpyZa4pywtcGj",
  "key45": "2JAEHhGGnKXknQzUndGJsxJyFTxu7axA4g3SL53vejMCQtFhSeBVjK66EceSvTA98wEL16VC6gvwKtnXTF3AvK6J",
  "key46": "5kMxvtZW2D9Wr9sobddZ1WNeXU86LVdWqJZHA1LbBVWQFAfC52DMRPkyCAk5ZgBzBhEKFf5Pct8R96zMJ1RNF4vX"
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
