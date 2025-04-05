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
    "2x8AJiC3NtxYvUYCtjWQ8v17PtqLxWxwkb34TJ2YezLnZ9gFn7WteukjTRyz3WhVWqdkyhpapdF3BeJfWDQBuDMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gQuXsmYfwQor92Gz6X4MwDT7iWSRNfUURxhrAcw8bhPEZxakYdCsUYCoXwPUh5FBTtoTm69pPdpqqDtEVSdCL74",
  "key1": "oiFcWSaodB2ffTZw9AkrNV8d2RfN5E3thjz8fW5svVW5AFRy3WXX6r5TV52kUkA8JacAsaHpANaNwAhmLbXUfKU",
  "key2": "jaH1GUwPt1Ke2YUJGL8pyVXWFUXskanxytFQXFfVQrdY9j4a5nS8bFJGrNY2syGKt4W2LLZrEBRXzpQrrpPgha6",
  "key3": "4vjFjFosaPtP3BUmFDZq3mR1fwUjeEqxE6P14n7G8UdyTdidARndFRoJhbPrf9KhGctfhCdodCQiySWm4ySttmVG",
  "key4": "3JoU2DxUtHd4G2QfNDp4CQkLFQJDX8JVK16tJoWmDZoKiNRG2kdzt8oZDMSJjHb5NBL4gM54tUU8NfgKUoaYTRoC",
  "key5": "4U7Merj3D5mACM1EA6zDj1k3dS7SfdfoXrujDqSy7cRvcmjwUKk9zyM2yu4XQD9BqaUvPufD59cbAUVP1XCNjPfu",
  "key6": "5xuVtDxBdyiqHEHtjhTc96X9smXyo4hLuuXr6EXS2B9UvhNG7yRYE9Dw76FdxU1aNtDDz7P811wBLEfzyL1SRwSj",
  "key7": "4oJkm1UUmagrPqF1Bat7vn3vGCsnUWDPzEFVbaxs5wffTXJ56r7TnLV3MpEz6p9prRijAyeJisoGZn3FZPtc9P7w",
  "key8": "3xPLeJTghmvLwHz39PXckdnQutNSUEesTya8JF2P9LwbquwdjgogGmMVKRkvwthLNHY6Fv5udzu4YYykjLRiMauH",
  "key9": "5zcoFM85uuxFU2AgbXB4LNUPTv7KBXc2o1uksUt7wfwW1AVM93kevH4LzSet79wt5jDRKnnxa9roSNLfKn6E1cD2",
  "key10": "syhVcPzdvHL6uYGXxeppJFUBZ7HNYiRTYJ3wewX6mvxeTTF2U94me3jZQaoTxkTffmvzbGkv73RjMCvwpziwkCq",
  "key11": "2W2cdRecDfh1vt5JR9ubrdcbgQtBy1KKpbUyemRj2q7BxKqTUf2Q8MBHgMf1rUaSRKX6MvbdUpuwEQNsWfV6zeQn",
  "key12": "5ZCprnRcSb9RC2A5KxDvtiMmeUvKWoiiWBkcN76DKVUGbCn5kpyE245rmiYEVT2oFc2S9CfJieWFtrEVfKzvAAUv",
  "key13": "5nUQeWTRKUBL5UBPQmTiPzpnnTxgf2Cp9g9c9qAXkT1m7M9v8G7u1nVThLzsSVCDom53Gq2ZpNR1Wf1PJc4aAVWC",
  "key14": "29M3X3nLtNLhb7SWPtBL5dRv9NbFzzQQMJRFMzTieCKpq7pLXrdjXAZuSa5fVhDSiR2hEvYWYUyBEHk7523Uu1jw",
  "key15": "4nnfmxJbEeeYFaCTqiKex4cUb38jAc22527vX3NaAksz2TATzJ5GsvtdL7fR7ZWWTKZkGCJ6RNe6pmpu3ZsgZRYm",
  "key16": "qGTDt7fwMs81BxWPDUKvCkMhjFDqSvS86i51RvZKExFdWRBaK9pa2SuYoYWtQMd62LJ6m7xPxAHfe253V4JSKT4",
  "key17": "4157cB6ag6WbfmnAbijUjZJ2KjJqJfGBbBPpvEd5WCviPb9hLsn8nHPgz8zkVTZmJ2sSfntHxeBfWMbEyhuBfRHN",
  "key18": "2kMPL2raW4bnCiZLVKFNCV37AydVujC3JtruVs1xLDxohK7LRDGMNddhfoCkcUWsBcYC5QBPet7EWGKcxhwENrap",
  "key19": "5dFb4jqPBihcrSrffUujco9X13X3h9tazEV5KfYnmD3KH9crQsWfJSvBYqXg31kGgd1mr6nuHKRtV3cfpgEwxbGs",
  "key20": "3Xuyas1foh5bwv5GTmkH9jbBptxrbDz8umWAuC24SmU5Bod1NVySg2bEwbtdFe92nNJyQoUfKv3AwvNzoSgGTMmF",
  "key21": "pTf4gqpZENa1762Z2ZSG3Q2HauWaA5iZpF1ZSPzptGot9FTn6Dyk3gGXtbsGdoBQpG8JtyJfTedXpqFp9DpGMar",
  "key22": "3qnGYfzKuGXQAY1pNxMGwnSKw3eZRg3FXWqys2AfBpFHNiFRiaqCoe52Cc86XDtzHCzWC6r1WYWeabCdiRzydoNg",
  "key23": "5SsCqsNqAGXqBdp8bBT896Mq8hfHxB7Z5VKFCYy2MzQXuu3GGePWnakaZKvhG9BiA3nAs2FYJPvEKb42bY7Bfw1B",
  "key24": "4kL9dPQTvARYhvAmd4MGFEtmbryXvjCN2xeDcSeS1dV3EqTJRfiZtcmdcW5umYKqAvZAGy1nKuQdMpwhFQBZJ8m8",
  "key25": "TKUp455wYocpSUnEksKzfEfiVp3WXpDAWxtMEYxGdVzUM8bxvFxVf1A7bqMvwRFnz8aEYyvzy5GNMVenxgAUtoc",
  "key26": "yZSa4ctkyXEiPEB1tgUe4b1ZdakyWdfgCkbRB6rkC28QS55nHaLYd9QL2UNpHGDYafzvhegpu5EKgkxtWFZFbFD",
  "key27": "21cAuhk9rRzvLHuqqHd2mvYPiyo6DaKYodLWzSQRvPVewsYQ9xan9hbbjG65gHs3YNufTN8GxBnPuhnGbnpX9D1V",
  "key28": "5T7vZ9Yn1NkzrHSEaPv9kRDyATgrBW9z96foZfdZmKiY8QVjLrgepoSoF4LMscy4523p2qPvHhzEYZqzo7CZeGGL",
  "key29": "4TMsfjoFzTcGEgPNSXT1C97FaBoZQYK2Jw1oczqQrUXRRn1kyGvmdp4yFeiyQdzvoWKG93ZEkuWTgWb9ALjo8fk",
  "key30": "5vu9K2nDmzHto7DRbBQR8F2UN4kx2ETvmb5YdwuY4HKtTXQVa6Pzm4SCHNiaiL3CmXFqSzwaribfnP8erQZEEreu",
  "key31": "3gCaD4iGkXoDmYNHVC6FTEdvcKrdc3oJ54D1PKmM2MccWrU3LpGqyvKwtqdKYpEEN3i6xL66RivYQbUE4F3wXx38",
  "key32": "4S9vMNp8bRFRgxbw181h8W9mQ8yjcsnExuf6saLkCNg2hHszCBX7SekZ7GH7owoyRTrPkQnQ7eSjzK7xSY8ZvF1h",
  "key33": "ymALA1McimXdozqQ7oBUZAy3c8XWbTvcZL53bPn2Qjkssc36apQKgXinmY5tcBiktN2fJMmRKE8Y7m61q6dS9kV",
  "key34": "2CFMy7r6yJmjKdWWKNHjd9gCKChLrnvL4VZNcdwd28kcCD8vbqWCyyE2xrvGodZWRNZW4MSBuDCnv4G3MjoP3sQR",
  "key35": "4eTCpM2GWJNZwAN2nY9yh1X9x5mNrNHD8B9EvizUzevKFfziKa26Dfsk2yd7fnGgkuaKipwGJC85BAhDW85hZFvi",
  "key36": "5dRvoa2khWMKiuSTSnqLx3JfBcZRBJH43joc2A2bCWHkiPemXb6YMVeAFXoHGsUSEw5VJDt3pjCGn8SMNHM5UP8J",
  "key37": "414BW49WqnPUVA7zk4tT5sUoH2CYpaTHHJm2WtCpNPsjRxJndDhxtGpSrzDjxm735wNwa73SuxDVhz9NSzbGK86X",
  "key38": "5Tad4cdK6g6WbccopDugkrBVdDC4558fBjhaT8Rd12e7fkXb9KWKMomyoRetP5ypjNkAiH66BrnACRneUADhFfWV",
  "key39": "4NaxNDMJNXCv9G5GNEDs2uBfi5nDEXVqNhv18E8YdrvZzJoFx9x355Cov2uiD2Vcg2bjYuZdwkzjGNoNgzmmSQDy",
  "key40": "67SPB7Z4jCVa8TYzdL2uKumEFTcGDpp8kM9tHwXJ5RS3xnMMJZmexSP2xgHVgu8jyJdLWcbc25XtT76TyKTr1Gvh",
  "key41": "2UNVMZkTYUwF6LLQzBM2HropDuEDbqPTZxQ1VhuonqHx67zu4a9msacMh3n5ufdKpbcwhaREkdKn7QBDLyBzdCiu",
  "key42": "37MZX34gASMLP7ZXqH8XB8MqrRop1ZsC1SuYkL3SNbkWc9kYWgWodLcWaQWysrMXirVffeBL8E4jdohxDcUvKLye",
  "key43": "3QEMusBsZAGqWdHkS7XhJAJKofCABvrdZ5eCDunrafzorHjBnDmT6m2CgrAoK1o1ectJwJBERyXvZnyXR7V7K9Rt",
  "key44": "3SaRA4C9yr1Yr87iMeiadwGvZJ2JMadkjTaam8gZknjiXtJtuVU3o4bZr4a4953R28LmEmbxcXxZAcAzzJ9JURpu"
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
