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
    "4QsgsC85iqo1Uo5txDmEfzm9h9EsTDyRnN3rXYBiXLAjUkky95gtQU1YGpXr8NT1yHLYvrrQWDm56nMW4odo1fW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eeHP5ahkncx1yiH7K1BoyKadMQFQtpbZiV8n5rcP7P2sMATJoLW6xNsKzexgdoRvfBnE35frGY7YSPBQGPXarAG",
  "key1": "5rbssLybsUqjEbuiraGF8ZQ4EQ3MLuw6bbkAdYZaAf5t2ZNaftaidJETAZfnt7gGppPhS2C7fEFeH85CvjBB9Zqj",
  "key2": "51DQq7zGGkSdpfhs9AWRGHJf8g33YAGtuGTKwx46hfzJS8zKTbg3awyCbu4r4SbFQcwHvTxP8nAGjAWG7g1La6BM",
  "key3": "cvPFrVgNvLvuKZnn62RKARZ9qzWB48SbXRd2WgmbywFvLFa3DLg2qN1owMmm7VQqYZkR1zzYndBBi2JzknnhWKV",
  "key4": "45gC7fbomeTV58f9gc1GG5L7L1mHG8BivYyY2FRgejqSn19f8CVgUNSwp2Gb1nbFTDXRYyB1znMXFpRFpvsNdbui",
  "key5": "5hL4fu2US5yZQLjqBtQ1tq1Ew7gzVP9A2J1Yr3tjUm5N3no5Aexfvug7dSVPR2NHXFveVTckiEsqanRSfdQinWQv",
  "key6": "2LRv1KX4Q4iyguCZC2FWy9b1CqQ4kRMaCzXrZF365eQXBEy8p2ZTSbLcqponhhtxjsJzeMVrgZN95UBYTALxtoSC",
  "key7": "5fJGeHU2s2CDiSqXmdRHP1CkGNUiKo9XTPtD6CrbhVr9vDzvSkqC9VU8mDFTBtJEZtVxDuCWZxHjvKrgaXpRv51n",
  "key8": "4UDJwVbm2KoZ6dRvaNj6PwL9k6sZykTf92647Gp8s3G73bVCt5i7CHgbcWCcWjWt9LwgH8wz1UAebeYazYsuVs9s",
  "key9": "4KNd8PjDTFGQZ3SbDKtuLawUCtxYiBgQmZs533iccsbhKBeuFc8NDvRfALuCYkcdCa1EdSMxFkLmrbQnqtB4Ta85",
  "key10": "2nL1VqgKAuizCQzfTQLsqksfcBDf2GuRQDJ76HB4bw2oBs5bwp6YV2kk1oaPm2jd792st3zFpTDUf89wLPMXffgq",
  "key11": "2MiGmoEh3UF5kjBT9Rb8d47pFYGS8Jkc5xgTLKqji82xp739rdLVDWyJoVe6W9mj1bsEnVa4MSP9ggQFDvnFeoV2",
  "key12": "3MqvW9akkAbBnATa3cfKatmzLz6Y2ePkJCBV88u2FxP9nPdSGRDu4RKLb8vaSic1N9j63foFdUeqpZTYmFCNpnLT",
  "key13": "cpUjiovc2yfSfDQ8ufGoh8ySAJZWp24Yb8PLqBCgSQooMYfHqeqFCEbxLyw7K9R83RVytzXNAcpc3FDtx6Yyexi",
  "key14": "58SisHTk62DvUuoM6epT8CWrWvMH18uSzi7s8Ko8vmuqF4DMTQwjYPKQcUcDGCe4GEtrJdvqzg9bzYt5jFmdkgxx",
  "key15": "2Njbri3UaSXrx4npaWwNzsXthJbAXPPNoyWmdY89qzXc8J3AcCp6gGUe74AwsSjtZEFYnh6d9FXCULXMh9g4ggRX",
  "key16": "2RZiV8ij6PXd4pAzwXqASsbpfu7ien3CApmX5hpWbrZf1ayX2m3Xrfqw1EiBMsaS6kJyxonubXxe2BVvy1qpnp5o",
  "key17": "3aGFHQA8AXXKRXUcnnrJ9EWCJDP3U1DnjME1rW4qAMj4aAsJEHwZcbvLdETUx4GsgW1Xve3BD9pQ5zocxSSz16uA",
  "key18": "3eJfJwMEPbrb3RHc9AhcPSvYcrsJZpeWD2r6AqRmxL7rBi8BoBb5ADJgx1FeJBFcoJytNkrK2MhcdA8ut9YGq1u5",
  "key19": "4dEHHCJq9RH3zFs26eCkdmoELHYPCbdTbAXG5njDNjt4kJx8QUKrkJHsdEQDppNLVkHxgTEqdzdKdvkNgggRfvNg",
  "key20": "2jwtKjVRZ1w4peDPv1yCUik8XP5Evzxotqka7KnMTpZMRuREMsex3Zr44tauL5bvY3Hv7RtzDsHSSwUGKj58udd1",
  "key21": "2d9P1FraURCYwVSCmccWeZdM5DnJkxSohPW9tyzNAYNooCHByud2vh91SzdxSr25KVbcP7GHAkMAKH7vmtRtPkUr",
  "key22": "tc5bCFNpew7Nj3evvbfdHdLk67B7QAy9Gk1QZcq8qmEdrM8JUbyD3G8Z4e3gAuyJZzdtoxuhUBVv8ubYFgAkZMu",
  "key23": "2TYqxHj2hePUXA6ynxSeTSwCjhdAz5pQ5UfaL8fm25LN75JtDRVs1acDKeM1nPXo8AFQ1eHyqAHvjF2fNoDpFcyJ",
  "key24": "47LPaDMs5wqanqGEKSMnysbGm9KrkHW2ePrZ6WVGFeHZTRhJ7SwqBGt7dVrQNJWuJDuxU4GW184EMAgYs2mrHwYc",
  "key25": "3a5WUUAG7fBwNk3fCEPeMVxAPXYmCnsFHcPAMWAFF74Pea47ftE97wGYcju9qAswuDiqNN2P7vKnzjJyg8T3HrE6",
  "key26": "33WFUtcP6SYiUWFdvvk1ZpGRrHycuhpASEHmfMm6YKFW3dJLQ5PUmRTRfRPPj81gCxnDtU7m6zAaxjt8ucd57cyD",
  "key27": "4fPvwjDRdtc1eMWVnzq4PaTKdPcP3XWiUwuM9DLu2ECTX51iPzZN7mBc4kMxuRBs3sQPfkgWuR4ziQ3yXUpysczr",
  "key28": "Q9RvebUM2rn6bco263mKmjBB8tS9NGsC5m5FfEZL97w5tGXS1yb5gWtN6QKyqY3rKLuYZJuDM98iyevxU69472d",
  "key29": "5SWUrshdv6jNJnq3JZotxs2LgiSNC4zRrEU3QykuAepMFTErMTteVcmLaWeczvufzybdKEED3bHpFAvLtRjSYxbj",
  "key30": "2kPDyp4nV8BGZyPYizqaf5TyhbPWJ5dXBcXZ6iwksdABPNhSMZsghg5AoESBgNMNyhb1xxQ6NrexFM8CXHC1ZQeH",
  "key31": "2VCYgWBA54aR2yZF94uMYXf84WmAAFJATna6EGc2ioegbDfBz4U6Cw9fEeZokXL3L35jSengNns9KRBWfNFbu5Mx",
  "key32": "2X6rFG7MCRxcf2uBsjjP4S1SnfUvuLRZZxEsdmk14PjjafUYhN1pTcquf7pusxDeNFAhMYtvQHrQ3W8VJFtDnbw5",
  "key33": "3VFMj4LKTuqvx7oHXJ5wW5pwNorwFMSK7jVbd6nm2PzwyK3Ys31DKB53f3kZUtj1foPicpDHj3AUvSbH3WDaV48A",
  "key34": "492yRiZfKe7MGFpmhAZDvspLNP8ohmuPeAa2VafinstjSmA2HfhiVNkQKLie4rz1FSLAqmdaXqJqvUQ1adAvGYco",
  "key35": "5oci6d8jUx5ozeT1UUgsABW6hZewHDh4XfVUbrhadi2REfy13THdYPjoVzJi9YpqNLUi4kQPamwVbthQChgJy3EH",
  "key36": "3veHuBo7hHS6YHsmvPzUaF7E1Wtv9mAA4nXjpoAzEgEHpxn73rHKeixg91zMPFEaNzP9ZmsTRWjBqNArEKuJyABt",
  "key37": "4fNK3oN9X52r8MfSzr5aZ3YFaL9NLNP7KAM7Lb9sXpERAkUzNVqZTs8PoPfuSwK3RxgHd9npnPf8CRe7wYqnZnCw",
  "key38": "2uBLrbvH4uY6Zi6gjTEdwqBMKZeZoNYnqQgV78LGChJ6ikrsHRkPRUMycYfnxKq7iU7dJ4v2XJWWGfBAYDphZKGN",
  "key39": "3TNkXyx8z1phqoRcBTHukunr6zSueAUfcaxhbXpfdvhay9FS8NhVurArbxhw24cGpKd7yEKXwV2WrESrmwXWHSYN",
  "key40": "2sCGC4MC3LvRob6mC5cTtMqKa2uGShLy9ctn5qKSR4NF3j8XTMfTyDUJ8dAq3Ro53KozQhS9EuFZ75HjUZnJZeQK",
  "key41": "3r29sDUSWe5MfW9rvha7jM3mJf4F3tVF4NQvtGdSfnJu8BXsarR6xEPJyUBvozSxTa8S8pCZKkv4unJARF3zSBfG",
  "key42": "4ycCuv8nJdkndpbwXMNqKCoA4LmoRtYEq94gyvAU4eTg9PGCtYr6uy7cumi6iLy6AHDLpnpSB962GmpygfaX7Hq1",
  "key43": "2HJA4Hydg1eUSdCTGS916Qve3cPvmnfc1HxLcyRniGBnVPwE475RL5K2cemTccQ9a9GXqScPDMrxLYrzVLWVUr2w",
  "key44": "mhwRbvJ1G6dgTHLkhSgGmtJXwrCuEJiBXpKyitiawnMPmDc18gRf16X7FUbXHqEEcdfPT1PxKAvfbinZzfeXTDr",
  "key45": "54gEwDLMFXU3gfuYWtM2QDnVPrUNLuy4XnQWDuqe1tDhG3UjqeHFfyUBxKwoiqBGd4KApBWoG2VBq7oKAFC4pBiW"
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
