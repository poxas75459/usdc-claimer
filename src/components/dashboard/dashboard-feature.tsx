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
    "4Um8WZZeuoNACaS11bxN4KaxZKrRLpRDC3KFEkRpUy1PWR56Q7adi7wDsCcq5MeDBiwWagzSCZ8twaGpvix1hzpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xpNTc5D9nkoV4GD63EG3XASMkJ13QF6iJ8mGydabdHNDbYCfsVdFxhVpbMLYGQiptwmPhGPhBRe7Vbov7hZFcZv",
  "key1": "57fSHWNgF4Vu77VwtMsyMvGiDVAXw4B4Uy5BbDc77ATPxNoG65yVEmBLBBLg6UfvXpvJ6aBoKst7C69JrFC1okx4",
  "key2": "2inDtrthbhMq1QEuSHeZruy4ZVCNbpRPFJtrzmG1Pm7mUHAeiqXqit4TRcBHRr81cdxsGCkKTZxd3vQMFurgQy8S",
  "key3": "3iZwM9WRZKd2dnYN34Smpktaob6PbuauTgnAT1hJDGVMgYq3JoWnnjpNtNPPwZP43ubxf9uk32x1aYk3cijGNENZ",
  "key4": "prqkv9AvxnKfNLfeMa47eUXDn1wR7ZZosCa6vBVFMqBhfuWgyqs8X1QGMMCLoK4BRjX5LhbuKg2fGekq5b7tztz",
  "key5": "2UTuRp1vzmVjSPwj5W2zSnJTvoniWhCEiyKPB9FLXLVCH1iVCw2AjAaTWqTTuAJfXEVSgdz1gGWiYc12S17mq99M",
  "key6": "1SSpRcSKSiVp4M536v5KbedLbk8M2dLkvUWCercnDmMM959yAeMCbB3gtwugHn98YJraziAikiUCCa8Lvd1LELX",
  "key7": "wVz6od6LBDbBuPMJWNSaDmjg35fDKSUk82X63vaqR58ShQpfwmkvUcuMRgwCqV9jZC79E7LVmmTVakZvpWzrHwk",
  "key8": "3sy4CXh7fRYfkntnZ5LaMcrzm9XCn7oj2h4D3u1QY2uTPgLCKduM8otTaeBJzBrUZMKC2jgMRDSFLqC6S9ma1ttL",
  "key9": "3YdWLL5YCXFFoU9fR4j3zZ67zovfYgHwVRX9qHjnv7NP56Cs6SVGxtJeSqj3HDzRRpv1pkEepjRAPxyw6YYC5Sug",
  "key10": "CQGSXNFrDx1BJmbx57WHPFJnVq95zbxQJerUat2Rci4RhEBYLWk7t73yT3fXZoQ5Jh5noPGdRKW1Xu8xgARpt8s",
  "key11": "3aL5sGchLamHYynSbxoP5qeSKwuNWKbozJRP2JcEB5rNAXi9hJN8Aq7MiTfRNj2w9HJ2qZTYknvtV4EsXo4Mchhh",
  "key12": "JJa6c5yuEVupW39WDjdRJHLvvfKTWoxQkyFxVD36syPM1ZJ35A9dKjmk2Y416dLVEuyDceZL1uELWzEPLrtgxCg",
  "key13": "534muYwraQ6Ed27CNp7kJXndjTnv3mrRgVtvbYVsSi2ndq8BxbZFVNfr2ajfgZRq7bjc4QkD4g1FeKTUg8PfeTEr",
  "key14": "2tpCweHfWYpjeShAyoGKdGxghiwNNmubqTKHxhD89CBnJPPaHXY6idW4mm1wsCRmPmRYyzeg9P39oZvDdppshhgE",
  "key15": "2wKddkTKVTws518FfAicVUvgDXVZxEK7xa4xuk8MqHGe8ZjvfyUL6p7SLZDVpKc6ZgkMCNLYktj7HLkpob8H1p52",
  "key16": "2y4oPuUkLbecg1L2iSLRMJ8f5aqx14cFg9ySNXB1MZ8UnvFGpZJ45RZh8VECwf4j86rULUdhot2HfVLh2wEFmDDW",
  "key17": "5yDptiAvLKhhNEiifKfbTVHAeB6cLDY5N1gNMdhuPoQyoHtv5KcqaqLRr9QevvCCwMDaCkaDEXh1sLVcZ4VLcg8i",
  "key18": "61cTNeEt5x9KELMSvjjrdGRndAPQ58BahQDrYPZm4S8L3GQEgiq5tUcVbij4GEri1z6gaNyBTWVVpsuTrCesJsET",
  "key19": "36XwcmfbmTi2J8Zy6YsWwqj3F2NQeAX3ZkncLt7ZSfmd6zBWYeqfdnghSiHVsgVHMs24XxtbduSjMpap9t6d4PQP",
  "key20": "7AHaa7htqjY3CLq1kLLNG7Mu2DMazJx2oY8H6TP1vCbYiX4yUdQEbnW6xoyh9spGyAxV5e8npGpXTQcvDLCJjw8",
  "key21": "4xuF9Rnfy1wF3RoH4iDbXLyYyev4JjAjdi4Nr9uWFuh4MPvhkycXbzByZHmBUsQZSFV7mRfpdQ8YNKEcDVv5UGc6",
  "key22": "Ddu4yMT3VXL6MqqgDm23YAYLebHmWB81QmsaTNBKPvqNkHnTJdiJApMANroAsEJfdr6ch6vmajdmspdAA17Rusq",
  "key23": "3ChfwALd3BgTMKy1zm6ox1KV1qVo5VeZyiLvr6tKDjJssNS31HYDcc5tTtecTWDbvJv47rYQTKYLHSJx5RHmeWTF",
  "key24": "W4tTu6CCkBRKxqDy47HwEFnTzepceCdPFi65FDNbdxN7riEurpEf4UDKHmFWTFLHmV1BC2SBq67KvXvpcgC2NTV",
  "key25": "mYb4ReWJab6r2tb78dRuXFmdkeAUGa1adNVMFLpdCB31yT52wPJRX7vrLSVrirpzx4zZquFLfAXcqButZ92QgZo",
  "key26": "2d6NnQ3bndDmXM9ujwe71bEF9rycECWVuKhTNtt4bqatQxBcSm1biHb1xq6fLUpb1cJ6xuncZbgtnkijK1EqLS5g",
  "key27": "313doum8HdDNNU1TENCVMEYYyoxLhYPw1GdM7GKsvZRfy3TWrq8puV4zGssrBJQTpEPf1WKYDbQimFLSSzbh1pcH",
  "key28": "3DncEknLBgfoVj957yLhCTg65fvAdk9pHTdo5mDPcGs5c8k8RnVA96yB1ze2aPhyDCi7TKsLrUR82yDdxsEmknEr",
  "key29": "YyrgfEvW5AfT8My4mKEGE5LhnHcki386qdffGE2o3vdfb2LmURNsz2ZNzoZvXzWKn9emUMVz8C7NnPtj9dsRfqK",
  "key30": "41daW1gWbNRiXN5vfZNnAMhXDXGBxAK4RD6RCD6dNUxVTXe4pvJRu4GPywMTAVEySpn3kF1eiTCjXXuH3CjwrGxn",
  "key31": "44NBpdX8QjJyaGX17MzVSQzaAqBaSNJAsLz5jKwfVtfcEKpKDF48LueFoJEHJvFwYcBKFFQ1852pRaqgtgKNMEtk",
  "key32": "2HkT149ijMyMPa6DSnqUfxsUbjFhuAtPQ9Y5Gejjjd5SPsxT6w72MFiuQJbESYDFgGVpR1ZqX7H3oDNfrEsNuy9j",
  "key33": "5nZNJBBR5MHdjzmTZ9TgA9Mv9yzc1EjwhewkpZmSvEiSUGx8tcoCaDu6yEoL6pKD2noDarWGj3vJkvUgk18fmjC4",
  "key34": "67n7XZxQQ4eXMy6PAXr96coqCi2YoJQyXWACVet3y4LY2yVGfLTTGX58dg2zxU9MLbYopcV5oVGHSg9nmwan6bT1",
  "key35": "2hzYomZvuD6Nnci7sAQPXT6yShgLAuaK6YTKcbtTTeEHtkPquGF727XdFJ73EosZrdsMMAbKf14EYNJT8XEyisP",
  "key36": "5fLYdZYD3QEkucGJG8vctv9gHAz1i6KtrcApQRnRjNYC5XyrEgi5PkBTw98ZEDe3V1osBo7APeVwQu8whK6c2PVk",
  "key37": "123YkXaMte5HfxzFXEQsLzmJrVMzhKRFQxqtPLmSqHxaEehPHf1apaSmP8kU6CofPPMzcvAPFRLGKpD9mdKWn5My",
  "key38": "2YZ9kbWHs2rjyJ1GGSHqWhsQfXT4Tbu3mwnELyHtLXTHRuWDGDhq5tYqWNr7Fq3dF8aY5v716hswaxstxUDTdTqB",
  "key39": "5xxiqpdiE5BRB2CH5aCecdxPapJ3cQZDFbqNCqyiSKipLthEmnAPHHfbMhfwcDK6HyGX4gHG56FxSCNSmqdtCvHo",
  "key40": "3zA6hBsQUA82oGQAgafWsSTZLcVYrPusM1gZbzs1CqTkLDrF3M3euL3i7g3Ls74jVgGjD66QvoKHHKNRc73ZUK6H",
  "key41": "3BLusxrE9aWtggGhPH97kVisi8SiX7h4d1xmEyPQAEueVrk5995t3TpqUEBXK7EwERnvUxchaF5221dQxG7EHueR",
  "key42": "4DDus78skrvCU6CsN2aF8UoEE3cBXvSZFLoWSiUshk3UYhLPWcbUxFu2d4pQgpifcvo1yRwG5C1f3zZcsgszc1bi",
  "key43": "5HYpRYdzqeNP6aZwovLR8CWuzW4rcgqozxRv1ScpVgUqEWJaMNpPMhM94kNopYxcivWZndcNwecHrVghXgLW8zbA",
  "key44": "36Cqd9rKNQeYUHhdVs8SMFdpeX8hateZbjfDutANuXNoTnv5NeKZMoNc9yjzSnVrDqmLdpQDK2X7FEGRchEeGht7",
  "key45": "677XBRynW3oqMKdETFQzL75CkDVerxeQhXPGA1eYRFCYqiz1QcR926GtZs5dtHDKUmxrLQ5xB1tDQsg2B1Bzifth",
  "key46": "5hLSVXj4qA7mEPkqQ7FRFrhvby7b1En9tMLxRqiX2axZtJN1C7igXTzKHQyP29ZMZybHUg2PNcLtxHbH1mEVRjPZ",
  "key47": "2NNRFJHZzCS421gQTUVMrfA676cFN3AHh2NM26W6RP5PbUc6Vt4NgGC6rLijC8EFvH4Jz2jrWFJPLcRiLvbzJAPo",
  "key48": "47r7rRHm4gYTDjafPnsoUTxftKxoMuG9d5CSvL8yAYYkbrn2Xv7j3zMNyz7PUaf5mgS94L15kak5nttECSAZbid1",
  "key49": "3DdVGXejHELopQZsUUiVkBJSSRieU91k9v39C4TEgb56fCgyudX1zQmnyjdHquiZkaj4z4HcuUQnhWeW4nZ3MnQG"
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
