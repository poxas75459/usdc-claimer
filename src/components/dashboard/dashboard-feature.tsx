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
    "57GKur7WvqifZR4wW9aHSzLALk1acCsbHzAJLRaQXQmFWmcYpcyL8AsCpFgbuQshnXsN66NetFkZanW5H4uMoEJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27XBp6CmShM5VpYNR7g4mFPZW9886G7X6ECMfwEC1Vr1A9FpyABZKZVfParUpRfLdQGtfcg7bTW669R8qjK9ZsoK",
  "key1": "4UiNNaaksaQbuAg7fkuEqx1DjkCQH1ZzKX6AwtZ7oe4ZiritEEEKoAJx7D5eME6AbKm1zy15oqs4vQicPjKiWiwD",
  "key2": "52kNNGzAJhK2hmhWq7wFVFnQfXvhni6JdfKXCTqY5PRypPq39ghr3UZrV6maYMmoGpTtbWwC2FH34J7Bp8z6jksi",
  "key3": "2np7cPjN7vsWCrV4HZRbrkBnpHqWTCuRcQrpB4CGMzbZtRnJC6hH6khiLMcMWcQgKpVFPQiRB88PR3AfCd8KJNY2",
  "key4": "2WeXynEGgpxrMpQ6PZBUvPnRiU9B4pvGPuF7uKHgqtPPHpEwHcwwospfkfPo6cpYm8VAQzU3wxW6LFgmALiyq61E",
  "key5": "5hNJ3QT4KfG4niQ8HK9ZXyjjntieAb3QH51F6edm2QYqnEwLYovmvvCebqUFNuyHuxv28FM8PKWseALNr88Mz28t",
  "key6": "4KnxJuSSnyMadXSJSxVUWN8X9BVMqkkxMLypAkbMwBnBVSbYJFFPAasJ9i5zFMx2ZK1fDjzRDS1LTpAb69TpSM3h",
  "key7": "4xGeXAXZ9qAQyD2nr5y2i8WQc5pnbQdSfMEvuhBUuntVqgRdi4twPbU4i3mVQHsBPSScUy6PzMpakju2YzHKZQn",
  "key8": "3mgYsEnF279YBokLNca3KyLgjiru6c8AJoTzuf2wMg9UnPsuGhakF3bymf2Rxv8dy5CKUW1Wp85yuLhaHGeT5m89",
  "key9": "5muXRGEMzGNC6m5ZBo7PXzDYTMjfZjGPtxzYkpPnZBVzAP4BSXbik41w8QGWG3uBtR3QuegdhbSob4FsbuTTt1NN",
  "key10": "PdsLpKiiw6ErfM8DBFizSsvsg8r6iBghRo6pxhkAHbsLn4UVt4FxpUQcXsUKsbBK3BKYn4eDbqrFuSksHcQay4z",
  "key11": "5PKeHvEm1KNxXaVsFFShGJAvaCbz27MDUDakADrRfUW6QVZyDC1VjJRXHKH8KNZHKRzCtXxZfg4PyW3YpM3KMUJ8",
  "key12": "4hTJHsKECTCiQpnNQdZ4Z8oz8531tnHWr4fbH84vZQutz2BuJ6UNkZT1p4nbP3WKc9TGzpzFQnWbTaNn8k5P2gmz",
  "key13": "4SFsrBXCBAUbsFJMNTovCYcqTRcSMHyLaWNXL4KiyNSkStizHKRph5VKZqG8vGZhTd7ePEYwGai1hkZdTABLL5nF",
  "key14": "2V3MxUA6pdNAxcdhYDuTWVwGorvUru5Q1ADnoyurzh5rVBRJKNunYKG9EHVWwiaUeYLDaNr1Qs9hufhhR6Qe64Em",
  "key15": "28V9Q3hBVRDgatgkZEgifM9PUARbouqy5GHd8rhCWots4jzfLGJR2BvsPbGvctQ45vE7YbSouqWCd5C1EyNwPb1a",
  "key16": "2SSA7xaxL1yY9wr8usXY4QffcK1iLbedpJnnVuS6AtUP77kUar8X7zbTZL9RbiXWmM7pLGDwAEvduim4ihRHE1Se",
  "key17": "4yPVaUccQS19xYM25gsJnDTUXCbFM78ZDRXx2K8e6EXTs7WQPrYrv624cVJaMHSLXySc1J4Fp3VgXdXSXP61j4HL",
  "key18": "CY1zwJqs8VcX3A5vcytBD3SVQG4Eqa5Khw1B6ZranrgZQAWUAzkzwWCJ5zZonAVYmD5QnEarwSGyhYQJCdQgRuq",
  "key19": "61FGow6NHqJPFuDAYrYGn72fn8HxPdMgvgMcSsitchun87NERMBUEx1LAmRrP8UTBp7gGtZmRfzYLhqwhZ9ZtHVr",
  "key20": "3pGyceoTr1T2sqaf4U2iGD6Hn526BGtuzfFBEPWrFHiHJj7rB2poDLM3sUXvBLNwQ1SkcmGWVC3wZMupdkPyfKBU",
  "key21": "GvHxqcukG1oydSCF1pKUvTiQe2Dp5TRPah3mV93gGsLdi1UG88VP391A1MNJ6BJnbDBAu7WGhWnYVH2tcDhAB6m",
  "key22": "5JPsfh46d6pKQMhHFmWZCtG9PUvv3JHdFuKfGh2fWdex8sZzMzbvSJ81KYHE3uuMoVkpjqCtZPyvz7Ao6vbRyQv5",
  "key23": "3RFASgTzdsnAdWT9QnFkD4HXZWY3HBNXLsC8N7q4kUP9AY4oDcGPo2Qu3JzcuugdYCobhdeYAxFJYCdoGsqvwTqJ",
  "key24": "2aeoJLpgmpEZu7yTpDA1w1yzSyE8aKzeUyT6doDpcXLPPdrZqRpuJfpL9Gk2izPDLfjmoFNBzJKP6v4RKaCboJER",
  "key25": "3ypaAsvPcGvEkGHjgLuEkzdcJF5unbHvK7UE9mou3t6JzJzQkyVmkZFvs3gbcT5rWSxU11ikk53WQm7uFHk8SR3E",
  "key26": "66XYDHSk3s2wAEWPcGXdB1k7MZKBERMMBiwTGwJBn1A7f2FovtPL7s3HMG6y8e8WMih3deD2zY8C7wZyFbG3dZUV",
  "key27": "3YqvKPrAxFESh8f6g5pu9ccdzYY8fYsRfETbYn9ZyAAqn9i36691xyZF8GMYBEC5hJNCTthHwqLu8Wv7bBf53sJA",
  "key28": "xgvfHrLf93fLMseYPBMqYQw4NxA3LpszCmYpXC1rpxwfiz5ib8jFeUNzP6rpNUXFCQHhiE5JFe32rrzpEcVy3fq",
  "key29": "2C7gec5qc1Fq1oUZ5otV66Mwb2gewsF8idsWCcHaR4owV8mi8vbzSwYveSaUeh5tAiJAxVrsLnv9t1Mc8w9SY7UW",
  "key30": "iLm26i6FpqwYdc95AqnEVNjukZ1TFSrXVRP7CzyLSKC8hci3T3hdoNv9injwMQfLSMD1ersFdGYcS8skwT8WALh",
  "key31": "2gW5xsVh4n1apFXBbtFk72aaG3dQJDYgDgwrcRSXLCW3VFbgjrkLNCKm3fydfFCLJDD5w2q85fVGPx4AN7BZaCXq",
  "key32": "3r6CatnqXLW46qhHv4VZJq7rBhTKRGdBCNZswfwkxBoSBHJFaMqJAuNcVjaq8UvpVt1mmAodBfyuEotiCzQYvYbn",
  "key33": "Px2uDRzYdwNZdfr39AVpjjSjqDMAW97qFtuvkGKHirCUNsKwoA8iWrtyxyU1RXRAvqHUF9EVZVHVPCSSWzkJWyc",
  "key34": "3RdurT4M73MVnWVNeB4LX2t2zNkd8b7JJpXx7sK5ijWfnseq1cAyUdyoqhpMgvNxAuXxKBh9J8biA9Wuf1Y3Ccur",
  "key35": "UVUMKNFiHjn7uA1dLiNseE2Tce3L5ZVo7kpHA8MRMaKnBj74MeDkcx4XsAqtSg9HJdGfh3JP9KmVcBF3BfC5maf",
  "key36": "3P9RURgwRv21D92ZHLf22cm1jGbvyPVaMfvNZNASByhKJBFPtJ8pjSm5hswaUzK2x1BUpW6mS7z2UrPe151UtFPK",
  "key37": "3YmM3RP8NqQdRYKrWnajzgejYXQqyuVyPnie9sykTWUj6nTenEZ7gzyamjsyyoXddqcZL8bDkWbHMjTrm356cqqY",
  "key38": "2zZGzMEYHPNHAT7P9UgqpqwNdCagXqS2iQbjoiNi3SJzZXEXdYuMHqgmfuU1Hvsxyf8AjjtsN5Dnikop3ZKZkNTA",
  "key39": "41nVjdv76EzcMhS59eH4dCaJe5Qf6iV42uJVKmb2s61Amck4NhRP1J8RmeSLXYx6wMdsB2VvtbDjty3f74Es49jg",
  "key40": "LVsj1qYSFn6jcwYx34VybB2ddV5B6ttXkSAcMNk7g2JfCNCvcLCZJJaneAm9fErs7JLjJnb3FUryp75ZvYYLFrj",
  "key41": "4H6Z3AvuckJ4mvhjDepRPwP2f3X8tuRvWPo78X29Ktoi4L2tGm4YX7wChhNkgbxUhuLHTBCjgLW6XjMzN2Lz6Fsj",
  "key42": "2v33QimfuY8PXVNUhNhzWaegEtrv1JYP8BeFgq2zudHQX2ZZedvdPoWWnRgJN8eZDHNnBtr87nbDXXeUAan2gdgt",
  "key43": "66krjyBLpheN3NUayNqzUy1ECfMubp6AeZi4RpcngzHjrXpeLsAtqmL52CKmaR8WJ3k9VtF6FxT6ppRiygBZexNP"
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
