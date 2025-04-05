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
    "5suuqzJKU4CLsH1bdPXE8bFVdCD2xMVZkkm7jroMcsFCDf2BJqDGYWYgo9SVxrfWTWxCNQQwCfqSitNiq9bgPFAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bQj1BSexqPL5s8aCT3bs9HKdKjwhfX89LBi8eq83nNfMrzrHYPXvYbNLdDy1CY7TBBeSYB8JjCLbQGKJj5C61CT",
  "key1": "5aiD2HrgeemHyGM3mNFsHphj8PoBc8eDhy6kYPkSWjrkUYecp2L3pouBZEwpQvUuccwuNHo41ogMtfZmDbQJEqLd",
  "key2": "Ab8sfRTHuJxSk8AnNtxR8agJvf78EDW5dUbxX2QXd2cEYxSTd4kKDtiwEp7nu1isYTiFGCemjeGPAvzvpxcE77W",
  "key3": "52gRKNiKDZCtrsoySUJ1bp58gWZkdYufNyyXWxb3Kf5RLBPtXM5PCEVLsLNGHwd7TyUgshGM3D5ySLmbpkEL13o",
  "key4": "McJzZXonNZ5XGFQ28Mnee4FKCigqLKgNHVhTsusabrzjudBw4yG5qDyL5NP8x6ipeEJH7FzrS7AJCq3tvCZ5Zha",
  "key5": "2MxMLBNQXpd34vjxtrivkvh92U3LfMpW2dYHsx2Xh55z4mwYfgnLMqxuKyFSjFacbrcLAnkWYv1Ev4smtLLCqha2",
  "key6": "UCxx8tsNpBxZgDXD9n9X5rsQu4FKsZNphwWhNNs3BaRC6fJu3vFQwK6Ri7KTft4YABHCyrs1Ms6JkDG47tTWofj",
  "key7": "tSwnTnj4PVNpx6GWHFcsCcrxra8GVG5ZFpDyRQfdLPzUFVogFhpiD5SgZdrZr1YyF2simqqNPh6S3VYNLKeXXp3",
  "key8": "2YGSEQ75FRwP7MQ1JUVJzqz71YYMYBsDdqhJPeh5rMBiTKi6psnBqcihJPp4Rqn7x4pNkUjxzirztPt6xMso2phU",
  "key9": "eHNQr2YQQFRjYLUHrMrZhXk4FyP843SnaCCyRh9es8uQSSCw9gNLkVMw7pbLb4pKkSsjx8xiDGRUVmMdovv9FEJ",
  "key10": "48sZ7amZCRA858LP25SVrj3jBEKh2Myga8Du68Uab1P5XGSVL7xVrUohKsy2jPsnJEdis9dH1TNG9MME37GdR7Qe",
  "key11": "5hXNxV3ioNA4gECPLK84mZ3BckexoQG7adMWRtxn2GgjH8Dp496iqGzZXrtHAq4YGrsPoyQYx71ubT45SNVu9GPq",
  "key12": "2ZGAopM3T4tvUNvmbwLvmppnruhAdfhs4piG1LyV4oz9B8X2vjUJNtU3My1TG5knh6JEqXLmPR7FnqERetecg52B",
  "key13": "5yf9KjvmHr12gqncviwvoaPcwPTzjznM7uY87L7S4EoTt5wkjD1y2pd9STqURMC22ew9pKUgvKwFiw8g5kYyKuaD",
  "key14": "5xqmrJEGbTmFM9gRZVhpMKnCrRefJhLvKN9ZEsWW3cBqWWa3ZXpSUBZAxs51iCauBN4NGWe3tXXnQYjPqRKAnjsK",
  "key15": "ZMRSrdu7t3ghFrexAGwWzTMH2uCNjCgNEVXqV278MQu3vwzAPQv2SJ88v9xTx9nmAXeZ22wRQs56UVPnJGA9MCX",
  "key16": "54CV6hj62pddNHJeUwjL4Ebdk6PmmhKNuhoA7kpZ3sEEALSZsFNFdj5DjMGodpemwHQ7EEVthUnuFKf67zPRaVR1",
  "key17": "43qHMVXqsQcjtais2RHzEME2retzrtxRSTemkuVptJa2WGTokDTLfE7gWestUowyCVsykdio5YMyBUNFGVXvysdo",
  "key18": "cgdsjf71tAV41DSoRzDvQpN5h2W6jBL3iofxypxPUeqoPj8fd83srPWUJ2WjEmreKJXjUmL9q2xRBgRcLZ4u5Ck",
  "key19": "N1qidBAA8hMM5eVZwomT4ef4kx71SZxdSD64ND6iiizSRnuDvPVAC7ZRRKJASADyohYiBhPgdxcQpQXACjDQDFZ",
  "key20": "3LeXVe8Fmejc9THo36q8HHQ1B17T61E6WpuT1PGXsDgzvLXUCifdS7jKoj8ftHLgAYyc3HMCYuMVSXAq87WTzs14",
  "key21": "4LPLAJhjaRh5qRJPgUnB6ZtYGSE2oVsiMU53VLuXLssKETrDFmsxCwzwrL2uFaESpDrC8WMqXCxHXMzND4vUyXvh",
  "key22": "4voUPAsT94gHHmaYbm7dyda1dXm4Vp3yCsDGbuDLQAxHwHHUUbENntEXJJcZix8R14YZG3wXC6Eyd12Fgkbppytn",
  "key23": "66eqrVeDUksQcPUKB5wGhf1p2PT6n8UyTmQApDkGGrvWxYm5A62CdgX7bRzJstMLrgNBZKrZpi2rSNMxXwsme5oi",
  "key24": "4ABEdyJHGdXBUTeEhvbqefSdP6arCMSrT6pby9dstJaewTEMJSMAoe1GCxYgxYe1jV5ute9yoPc5yK97vgpVraC9",
  "key25": "3saLb9Vy3cLwRA4kdVQJExQNWDxdMcxf1qeap9LjkcEfT4TwFxZR6w1sw2fCZFDgUmWJfihuE2SLBGKaWzWRM3pt",
  "key26": "4CgCnGEA8vmUneCxBcfs3EeNca2uqrRBTLCCxAAT8LJJTHqDbfDhpk1qnKyEEyYbnmhPGbBW5oFCQGSDU6PRy1HS",
  "key27": "3QrrozVZxY6uURHnX2MWs3qifNe2w9xY2iT6nFRhXECU94a8yt325GBaVFjwyKYciAJ5PRV2aWwx5hAArvrVr8eU",
  "key28": "w3DR1gwK9fyc6Mo7L6SLoPvAdTG76g3f24Tyeeg1aRaGFQuhoxVvAtQZaAtZQj64qzy2FWxgqVsD86Uiw9esfAF",
  "key29": "3WejDLtbB9gL5raHiyqbZ89RZoPgHR5UBMU6G5PgLuAVQBjmnrXs2WBb8h7HR7siTFS1ZxmwRMZEUCfRTg7khVXY",
  "key30": "4V8kjyn2NWmaci7BhHS94s4XiTRiYuWEUifbHqKw6e7PisZCMbEyYmVpMSaEfJNu8toKomRReMPt1rHBSdJf2UYe",
  "key31": "8xJThiNEVWbb18Qyx5v5L3uC2WuEoTLyaofqFUM8XZfCvkMbbpfqRYpwPwgZUATgV4XGM9DUJCSaoxs7T4jx8KW",
  "key32": "4kLdx1KQV9g29D583RDmcxgtiWn5ziZ8YwGZcvqdCCGMacCri8VmFA71awBmQueK6V5GFLzy3mp2trpab3HTKD34",
  "key33": "aop4whiJ25EXK8xffP84AW39bCZ1ceyQ2t1DNwbCtcp5QaWhzptsU8wBDLB7SXFAa6rQppssN1gDTDfvXz1UW1S",
  "key34": "2eZmVaPMBje9MY7DkDA4D15qgeRjsTqJ2e1o5Nm7g2kRrjhp8uSpdjEhCVoMGnCVfV4SoeYoLGTv9wNNpvN3vh4H",
  "key35": "4rJVG6bbfVh5BJLcknEEiWjvNe85kGBsK93xRmykf8utocHkJKjefKSkSHEVFxjmsrbSEtCzUvE46w8op2JhLaPT",
  "key36": "3rJjXBWBHwFMtQXPFztqWKSJknfHcKQyRH2nNtSj14XvjRt8ge876hPwwQBsPiTVQq9Zh6p4e1Yu6HRbbz7zQxwN",
  "key37": "5RCK6bneavQbXS22vNJBDfYbvBz4eJdQBiNEX5Z6CYNEM478pg7vPoTNK8WVR5NQParTr2mh3seEZURtsrTEGgVo",
  "key38": "4UtqaTetPyoZ7yi4N63TaEEVogApAfUdFbkanTmjb6rJgmujCQLtoD43RJqaKpfAiNb1peCErZXf4adeKz4Jyg4S",
  "key39": "4TRsfVU5zHo5PPQrMd5xofMFQg99xQEbWqiqNiKW22j9JRqQoKLXR4mZhu8mWrRYhHA7uYUbyPvRmaUhHwN8rpR3",
  "key40": "3bDJzJHoiP6Di4w3jCZFkkDEUdZTXkK16VpJrUa7CPFFzZ5hE6xsxTQEcChkZELGtxFZLaB3A8Y9TNs4Kpmabe4r",
  "key41": "2AsDEBETVgFSBTWZDCVkGxNim3aFfMKXnN7rDQn9ih3Xnv3y5vHU78gN6nRTjm1HqVpSnsWGWngHK6oF7PZxPCnc",
  "key42": "5BPmToUBKd56m7ZLSguwf8BQs2VS6WzwroQP8AjXicYbggHgvMXokPQpzEaJZWDLN9dc4Lh6oQePB8SNsRv54KMC",
  "key43": "298mTMhMtfnGpGAUSWmscdwCQXDgzP4mtBtTFe5dJL3ASAEuEBNghPPUBznqfeRbKUAuUWVXnkfCV81KnT1DoYge",
  "key44": "64ovoAtdBRRtBC7gf6nYGps8JiMGMr1BkCS7NV6N5b6s8HaH6ji4w3d38BDw1sLsFKyAKd4ydMRYjAL5up1JPx1A",
  "key45": "2h2AwNgmsngqa5mRkgFJkAJjKhiXcZaeNFobVYwdX25uuGaHGfP3H5cveGJjJHu57KUw5XGdriW7NWTPEKWh9aqn",
  "key46": "4uZiwxvUnfGvtLRnUqy8G4iXnbV8fNmKdsFk1Xz9Ra7wVJ41nLSypmr3jEzKZbbwEmy9MLyAXyLuwZ93shoZUTGj",
  "key47": "4CnqLahnxq5WXU4hRtE3W1pSRHpPHhredBb4CD6SJMjnt1jwdaZee2Nr1whotmygGxwWSX9jGZAaoQ2Tb6p9THpR"
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
