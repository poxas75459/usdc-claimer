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
    "2kMgJbNaTTAf11S8r75eiMYeZXgheX8oXZSbK9oQCu5E1J6ZQWRLFLAkexrM71rhFhSCwMwGzSCpnZRDAMuNj1bA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mcXAXoLpBsCnYzWYynEJS6ZSCiCJn4Rtp6bnUoanNeX7g9QdXuic2qpvVauveUwGj8b99DAYGs1Zd3Qxm8T2uB8",
  "key1": "3CY1ZDTbyKYPSaq5sRfFKXbS9hULBdfcdbpxhL53TsNTcBZ4x2L8kPcGf528dwEhC3WNALJFtzssf2nZNKadiCpL",
  "key2": "2FPJLMGbbF1bfAUkNKGJV9dYVPG2id78GWTgr8ZKj6d9SWaz7S6DdJhsKqvLj8KZPb7fvowsWBMd1EgRk7waTNRo",
  "key3": "3MxWvo195N2gZu2QKC5HKZKcqnTdthXHtsy8ihmDHG13MSrwgcRxQKRSP2UWb1BdmSRrS5BwoyJNgnZLtVTbiEXa",
  "key4": "62878gP69PriGti5UaLFLsrfFCKKHSamDGSnJeeoee6DhBFCD4sbDu3m9V9sTwBAAJGWmnhfjMZnGxsNxdhhtVT8",
  "key5": "AkxpNRVAdMKgYD4mWvu1WFqEfx7wggQmgcp8t3sMPPFxSi9htvJo8UxrDrGZT6U8wsHYYbzCRnqhza6wq28q8Cz",
  "key6": "5Y1aj4rfGpPAqG2hcdJeqv9yktmuoRcF9FbVvw4QGk9SGuBeuwD1rpLDjzEZhYwv3vyDtxRXb188JMZLDrLeHfPf",
  "key7": "46n9dfQujKtDC5tXnk2hALhqV2mK6wYPRHgciUiYoss7g57FCwf25u2CWvwqnoxxrDsWEXfympa9PA9i2ELnNavr",
  "key8": "5KVEaRg9DUpsxpX6NAKmbFD5xfz7cn29fXrUDjxbjH7B2A9kTv7XUkwjoqdJ9KTmuewTBJygsLZMzmouev5HbvUQ",
  "key9": "pHTwhpnF2SzD2WP29rzwWcPEv9B6Y8tt1C768K8n8gRvGm6ewkMSAQVbdqYVz5VkMPykAe1iqKGfWbcxsHALozY",
  "key10": "3t9f9qzFjiSynMvxDtM6c1nUNo6nFjG5b2PefKsEs8pbHuKesuuiJrgjF4iTmDAugeJzjFUbUntPyBCXWESy3877",
  "key11": "2jtc4h3R8hp3gSg9mvMf1EyAFRJVttcXyJMNSrYDN1N1DDhe8cSoYin3t9SP871Zfk5Mm5V1qkLfSinfwWph4wV1",
  "key12": "4TYCA7snLPYqSss1PUss7kZhWiFGnMiFQmoiC3GsFG4vp16FpWuDQhG2uV8NXtfvTE41mYnD1wY9RXBEGdMDeLzj",
  "key13": "3CbSCoYCmCpe2JNyqFWQsa6AaDZwGJrRhnis4hrZxQLxSj14R1fd2qBeBoVFxiUMtx8tyHzfY6h8bRG4pSpmGVZM",
  "key14": "6sHCw5taQzq44m4TaeUeiWdduTWGo4PXkMoqzSUab5in17YCQEMNGwCr28ykfVqsQZ3Pp5xJwwEA9oSMxzVsShk",
  "key15": "3z9sT8akHU3g1TV8byUztPhzGB8RtkCBag7yjndFD7zf6mnd2VV2E4ycXYbYF3AWmZncAB9fGdjEfVA8J6p4KZPk",
  "key16": "5yzsmtKYMjtZxHeUZCLcFBBXf7kiGMvRhbR8aCyxYqFHbnwkmeiP9bx5CfQANp8S4rK7uzqk7G8qcAaymRcxPoFz",
  "key17": "5mVX7YBindK1x6yEMhR1YNGxdran6uMDbeEeaBMv3pgrPf6jeabpVQRv8fVxMPe29ZhoqwHjw1KWbWaiQebKyudD",
  "key18": "5Z2gJRfUA6bX9kvQWd2VaUXqUJua7i1VnhxoC6pQVTom3y3qvEkSTmKhD4C6bhZnX6ZqkiF4NcaPeFpnVqsu8Cy9",
  "key19": "2AXRHdLDMSxQuoH7XHVVLxC1joymEcg8XNNVBYnVWrcstdUwGb2hcBg5ojTor1ekD1nM2iZirviD8jcxSHvkDU4a",
  "key20": "HJfiecnP2Vy5TWKNz7FJQakTJkBY6SeJ53kGRntSqoTgk5mbgUfd4sfTeQq2ou42eVbS6WVPX9NAUdkW6dT7Hbp",
  "key21": "2SC4ofPuL7ijVhd1mnwCW5igtF7PBZYcxv66NVZH7WeZdoZR3JeNWnWP6tkzeRfunnLz6aua3yjgrv5NQ8ejfAeN",
  "key22": "2Ax2VEobTNh8m9SRuGYpNro6VHtdoBaKTcDCZasm86tXW7siW7UA2zRRiSg2kx4yWLGzZQGwDFgfnWNHfnskF2oY",
  "key23": "ZGhGhdynm86zWktb9YCJ3FpUoqZxYeYGYEv1tfNLTiEdkRkgRQM1hZ5bGVcAFYG7fEocnv58Vmriqmxd3bDHJD6",
  "key24": "s8d9rk4m6NZTkZEztQhkCUAaxZMxjviXNacxrhifWpQry4t2pbzfpMYVjAK1tX4Q1t7WhGsniNwRYiEderGQmJL",
  "key25": "2tzMziuCgoBGDReVyipAYB7Bxf6aGbRM7cD8WKdi4sJU2fHFqXbXfAE4CqC3rk2kBCg6CLntBKeVGr7hbk24n6nQ",
  "key26": "tw3HXFZ1KTHhEo1dDDf1jurDoGFctPcWSd927fxAxpkew8fwjAhSzvNeJKH4vzrdAushyyg2vrjzxJdYTiezgkR",
  "key27": "3jEadcET3ZkCHGD7RDJczF5g6of9C7CyzAK2xvMfMZEDKvwvkXWnQDLXzp5vt8NGckGrLLinA9EK3XxrnLueoPVR",
  "key28": "3FuPQj86GmoC7gb2DexN2zXBiNFh6btphFG1SPvyDeY6E2k1PNcfpah8FYmt4Afi8yvHYmpDi2aQTRLuo6KeFaZV",
  "key29": "ShGkZ7LuzayjfWpAkTvDskiwbnzR4oLjwwQUHLbvbwxcqf3Wt5EQpwbpHxweuQ1isX9Bcps8H35mtRJXufEwEJJ",
  "key30": "41RvumrAKJVAbux1jvoE8pWjqJ6q2JnZcm53PhgBAgMMtCdXwZyaJsfLCfmcriqwCGXqRHhMNhg5zfwem5zv1WoJ",
  "key31": "36bZuZ6a7FF5np3mubEciB6JbDwqMiqsFGqe2mpGTKSZ1GTfGM3oXbqmxhMrz89KBUQsbSj5UHyw37XCCjBHoG7a",
  "key32": "4EETqfog8Wm7R3fDw7VsHBV3ZE8CwcY3RZz16eXkin1ZhZYFSE1i99oFnwDSoPSKZBJVt68Qaf9rzTaXGMnYycHW",
  "key33": "5xgm8ePyZmkTyHThe3VjwUeMNc5YnmupfhvPKi1gF8NX5gGcCyqejFf91UhgrTBAXghQfxHFj5aJF3MUeDJk7iaP",
  "key34": "4qx7HuFgHiAUDXdtDBJkxiDWoKijHx5Ex8qT7QptiSin1cHRnCHsyrAFwoaThBmbAiSrREPJAAQd29hfWdXZyYbe",
  "key35": "4reYfRHGqxQGCxQkh6fufxVqJTBRkyhKovqFmnPA7oDtBfUHPami5uz2MAcgoJGxSxZ8fahrYio5CK2VQbjdwpLE",
  "key36": "4w7wY7QYAdQ8gaJqRK13GxKAENXLwzvVUkcQQPcaUNCnCNJXjmBiYanwadayvWsAW3rQTXCs68VuGr2jUjjy5hms",
  "key37": "3HLnDtNpQHPnU6MtmPghYg8siUxjEvxw8uDAbB2qLTSdvnwY5BhAXfxBbiwyfSdbLZSKDtVpb8v1uFer6hLee7vy",
  "key38": "4NjgKwEpFLnaFrDM4WM4UeBGCWr1bHsNfP7Gguh4YwP6Rd4JYfLxSrB4hoXjhjopV6P5WyWXQLobUnWLDxy5Rn45",
  "key39": "5EBCiHJeo91NFXZCJpXzstAEufhmVbeT8vt2HctfraZbPhB54J8L2C5xL9NgsWnRCsbjmQPLpU57MJBboH5Wsxn3",
  "key40": "2JwHiZPMwqx2yHnhm6HqLYV9bjuYucHXon64RMw4xvDHpzhBduuNU4Aa9Bu2HS4nF4rdT4JkRs2bZ11rMbQteZAp",
  "key41": "5LgDdJtZfS4GDy7she11tbBNUs1GpVejykFFd3dhKiGHnPRHsbqtyZvLXVtX7Enu93qZRM4KPL8DHHeeTywgZSWZ",
  "key42": "4gNwJ83eTmxibiWiQMJATJpYDXsRPjPn2uzveqmNLHiwPHEyu6bWbyCbKvZ9qP5uDoFe8hq932PJKCG2jvuSeti8"
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
