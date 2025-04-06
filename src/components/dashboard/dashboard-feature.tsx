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
    "4BzNHBVe8TQHJtrpBMtAyBYSFqJf3zzdyN6WMgUQ2QVMJByUGEEnEmvzYseLFhBJvHEtErFq9jM7mLgMQtRAyS9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UHUkC4VVjv8dtQbx8FJ3Bxo46Cdrn3KkBb8ZzQ5gX3pqmUoKX86ReuV7Fb3D4F422LXE6QVo9of2dBJq2V2SFVx",
  "key1": "46bu2QJTQRGpPCdc2zcQCbUDyvGKuKMRzsGqC7fRWwZVuY6KLRiNWzEGVcVFcdousspAS4X8CxRiUKLqc8jxsP1j",
  "key2": "5prFLQBH964bGKBELCJZ6omnLjTotwVwR1xUvZLWZqcbstwXZvr2oYmg944xAXw61dEjr6YiWVQY7BzFHaGimFnQ",
  "key3": "JJJqRMFDf4EWkcJbjYeLErkmUZkEETsmeTyDPeXsUj3oC6JHQWGDtPrMFRMWxhsUqSijzi7WjqYvAzipRAJ38n2",
  "key4": "5n4fo2P27mHv4vDBo12uZnBQdj2zQ3ykYVS4idx9bsiEcu34QB1YqmXukHW4zkfEF92KETz4cezT2x7snTURiXNN",
  "key5": "3k3aLHccXnidAsJXJr3pYtdem944Ug6cfSuxvyP8ubywSynBkyQ6xnWcPVqiPpW2mpeiNrgGvhs3SikqJAYq2ePs",
  "key6": "5vbyzTDxoaQ8UCwYAkE6VAkgm84wNXjkFiVvqXRPVzk9GkcEtRXYMhDji6ep7BgMjYdXWirwTe53YuonsUmYvfzn",
  "key7": "5taYdXtWYkbWKKEywgDDxvAnzfQ6uKW39dsLwNRx6xoQPi2y3s5G7YCwo2zWZa978BnwbhdTwVKnN8XL3sv4dH9T",
  "key8": "2qejT24bh84h8DdjvCCVQAYf3P897AwMBtSA5sGUrRSjBfcBtyeAGxyXW71VtffRW8gMW3Ccb9cSWAyBb6oS8QZ5",
  "key9": "5Z2JiiWBSkBwFU5rQcLgQdziUymRwfnmMbNSDEc5AC77RNmjJGDJSt4W1vjhoLVDJ5SyEuxTejxWcUza4NumbQC1",
  "key10": "DMun2Y4HfKpGYM8odaFKmReug5FGAFLJMKBvjEJXiULSRpwAYGhhzXnDf4F9H2DB7qnrf7zK8ef1M92Nk71ADwG",
  "key11": "VLw24G51xo79asTkskCRtMpE8VA88tgXxELCbF9d7gN9Nj3gzcfVW5RALkYaZtRj3i2UBirTyYzSXodSs9LzyXY",
  "key12": "bwrYYC2WD9DkpiJ9pTnz8CgdX3FnAcTrQZCyF5MacHw2SSEGP2uSZPFHnB7aYNcKg1G5gSEPFxytmN6QM1xSCgB",
  "key13": "5UWpb9Au6VDuemEZVDtFBampjfRoeGVGg8X87BsmY7jn71R3fQtqM9WmeyT8EHgrd1rkMtDkcuKhvCGNKV6VA3dr",
  "key14": "5WAhPmG1CMgTXV61AQqnvQz83NgqAsiw1XL1JkxGZdm94K2DHzC2Pct1W4yKvQDG8MKC92Yqjus4RCm8yLNzTsHX",
  "key15": "3jNseEtNPy4TZ78GHtwULcY7hCVxnzLVYo6h9qPjcQ7Arobx2gWp6g3YmhNXA6hHsv9cCEP1ze2B2x3AWReuB9Tv",
  "key16": "5qzpRimCvedWTw4EPuLL3ZZ5vzXk5rgENGdsjMBSRjCfYicSw9dTGn2SgNU1QuD8TDDVAuTLwzBaUGZPHnTonBZa",
  "key17": "5z3vUMC83YmV2sy866bMtdYuvj6FpDmBuNtgi35XPB1PJTKceD7n5n2urWHp2GZxUfWhqLopchkbCsSdZsqffdaM",
  "key18": "i3JDZEXmny8eh17dDa78NG8P3tf8WMhELAW3xBAnBXNVu7V1D12gt794BatbzcLC6Lsjp4iNsQ9dUwBWJBqCRT8",
  "key19": "2JqPAFgf2TsCWCTV3zbF19KrFeuXf9pNyeDfiweATbQZBbc7h6Kh7tWM3KRyks71ysJX6ir7Far8fpMwSLLRAUR1",
  "key20": "4NsZFcz3WV8PPfrAWodx818UVtS6dQr24Y891uvYAN8MeFQXBc3ETz4eBJ1DDLXtbqGuYmi8wdSHGF3vZcQrzrUq",
  "key21": "62Hfv9xdWQYmd9Mj9E37uptd3rBtrWhj3DDwAjzFUDgvdvkDJJUkyEDGhcVqCUDhAUKRCQuU7F8fSdvSbCfDjtVJ",
  "key22": "3GFSNCngAxf4AkuKViBT6Zzb6cUKS1YHZXrG8vieDzTXUSXNBHkGRHkUxTLdWcVv92tFoNw66Sk9jtm53H8kJA8a",
  "key23": "64PNhZAwZX1ZkN2XbXFaPwzja8i9HG7ubJohS9YoTnpaC3oqDn6xwz7whjD46jTp81px1wv9gzoS9tB2bkdNuyDK",
  "key24": "3Pq36QZftdqoHkDj66oSHNLk4MyiwHzc58gDm8zbZDoeX719FxMYUXoiir8MSKyCZT22rE47i9NCSgXu2u8Kr4VW",
  "key25": "26eoDbd1C1LGGCrdc14oqxtS1cVLfQbxMkShbmDD5Fc7KeRu57KpLVv1wEUdZkChxwso6JzVfcwJPBrR35dN18QR",
  "key26": "3BTriYLiGLP4tab7d7rS79HyfEitZRrJy51hXbRCr3b3gp2jZivvctkZtKLajYnTascJ9jVC5kz553LYiDzKjpQq",
  "key27": "63hmrVqSGZkRsgKnxsVewb55xYRwGwDHqS7qz88WQACM7kVYndXCF6iSoPXHNm4XioTKFEFhLnRG7e8PsKh27coC",
  "key28": "9kfYSgXYXgXMfbJ1hq7hcNuqfYsp4MtViPX433U36iaCas8XaEsUeB1kPUuXnmJ8ekd1PvMTDLDjpfRViTg6XGq",
  "key29": "45tQ4NW4nMgUQd1mTve8fQiWHfWtnWnuJt37Uo9MatwUXj5FdKmfpHR9b4r7bbUYQwQ6Cz6fhUMFqeYN5U1kfxtC",
  "key30": "2XBTRWNVtznwjLSYVzwzKebhFJdciBJ3hUKXmfRfpfoquXHvv8L2S15RTXCgiaDQ1LGcC4VwTCEPhFbkoQeXnta8",
  "key31": "2mUN2bUkfpDPY78goTLGTS7EnTXZuPL7hRcxeQi94d23NWfmBRyhvoyrypV7NscTtXSLeYnXeXrVDX1SUQYv9oYM",
  "key32": "CQtgbStwDS1N7ZZFWGXJvnV7pzprEqJGVACrUEMnbtp8WMQc2jn85nC555Ksk9AH81eSLdsimbcNQqEPoLkLhtL",
  "key33": "4Yja7e2awYJrSTF2U4THYxuGVgpTRka5SrFTvwXR1seK6pruec3gPvzHwfCD9Y45hcTvmEb2L5TC8LBrgnx47Dgu",
  "key34": "52d27QUUGyiuksoemo6PEHArgqK6a3dKdWC4xBUXdcRkQNrQr36X7J7RDrCnV2Z3eUiYeNsa9PtE7L3rxNkpURML",
  "key35": "5VxKaEn38Tmp9rRodNKm3q22V8hrxU3tc5dN9NHjCgW7zsKWj45rGUA8rbdvEjY3kT8QfAxAJu1UxDtKvCiNyH8A",
  "key36": "2GJ2DaspWJ8GPHYg7JKfqp4vmbBevCmZ3y5Kc5CQUNNNMm4Ud21AHQ8uj9LQse6jSyYFnb2wAtQvLTqwQHSgLqT6",
  "key37": "4CuXrRSyvMUY2B3U5P7LaU3qCYhyyaE7SF1HEnGjYmB36C86XMeBMNtnThKWdCmRUxXjNJuhX7Z87Vu4q2ZkCepR",
  "key38": "zfX7B2waKqdmFGMRqUvrohNhV6XWFvjFHW74kfk1D6XShpTAer7Cj6zCwh7srpSrPegNN25ouEWyzXpJPmAQFET",
  "key39": "55rtQYFKCPiWV56yXHj2HDHXengRfuHNcQVwGc2uZfErEcPA2viJm1cMCK2DmoabiWHBxwG5TUH56bekzU6a6XQg",
  "key40": "oCDnaPT8VYUKDjjbgrEWRj1BQSPQ14MH5c3isDMDLGcNJzzZi4QPwEhpqygSFQDZWAmXPtaFvKfwSRSarZM1vT9",
  "key41": "5wjfA76Bhddhe3CF7iYMzB891vGjXMx61w79poXXkEFmfsD81rMkdGMNh3kqDYmzAaGB7bSNYkb8vek3cAW4SvDM",
  "key42": "4JBaWE2C8umR1ir5ZMnCwbnjDnW6EAmt9YHH9j2hiYHRFK8dRS9QsGp3Hf2s3fexqpuvKhjVYNRrgdEW7ckvfADF"
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
