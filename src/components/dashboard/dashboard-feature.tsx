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
    "4eGm54Lr7nKcFZuCmkr3FFW5nDk46Ygf2MuG3GpPsWxdgnVFR63k6jLDUDRRzWHdWMS66XSaojGkrpUxauPQgdAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iusPGHyvQXfFStbyumUSjJQR3JAczchM8kS7v5X7sAfgGsHgt41BMQ9qS4h6kHmvGCjbt7BuQdNDfp2SUkzff3x",
  "key1": "2tfg8mTh1zsFWGznzAC4Mk6uZ2QCQ9v2aG5hnWvpBwo6DSsMP8gK4RqT8b9wdAMzez8eRFLJjpDRn4jdm5bAssow",
  "key2": "24HgatWpArA7N8oF1ywxjQwZFKoNuJKp5kmwjrJtiusqnzNhzNBcH5biS7AJGZmg1vTRUdo31atrgNg373Adte7J",
  "key3": "9XxEK7S5vJ9QMrrF6K7SJSNwdGMu2BSjPU9BFwDViPCg7JZKLie851KQ4vtHjLgaXxS3pJCHrs95T6Gy62EbXb1",
  "key4": "4UbDeVVRZt7AWsQgQsLPiHonGEeypMycRRXKKbShGBbwAzetxG5NB7fZQLHBvQV2SUik9vTccTKbLCt1Uj85zGGe",
  "key5": "2bvyQBHmkVJkzckj39U8kxgkyoChGtZh3HfD4hE231CjXYqFsuxjt5Ge9qW5tane5sRSiNefYBRqF3vDKgLuBVrn",
  "key6": "2uJLUwskCFfXL8SnaBbCMwsSEJjEmg9oKPJdE7copuFsgZCGiLjjHArDAyQz7FDcUAfH1mLGTzXTxJ84Tj456Gsd",
  "key7": "2VegJM13Ra6tqu1FmLTSqgu7EnUTbXCpPMDwp76kozHHjo6cY4VY2vbuns1CqTA7oabwWYibPtief3gC4kEBmQET",
  "key8": "2hyD5G1mHDZSjz2Dd2WEcex6u85aX3BuhehSLpKrapne3ZN4A1gHRDFsmM3izEKg3EPwLd3paW2eQcRChDai8EDy",
  "key9": "4Bfjcnk5cLPqgot9Tw1ZB5CycpvC9fvtBotSBKf67BXgehPNpDEcfQhfj8NKx1maDxXRmwtBXM2CLQ1Pp6Fad2bG",
  "key10": "TUsUMWoPYhoBve47tR94orVhJCnEkaj7Qay8gFHuRqwS2C1HyjFyxM3tF9KESEHJEi6JEbrh1YjKC88ENzffNRg",
  "key11": "2Zeu9s5yGjVesGJbj6zbZinouUpvkHjBX2sGYf6jeiZLHd84vCScuKDEuyGti64WKFyxStqaMcmhpL4cCaELLXgW",
  "key12": "35o1S3wj4n1wG2x6prbJ9kFukFvuHoQjXASeBHiS774cmQKiHgrDryvD76dXaTCyWYu9CAVDnat17t5gaVrcKQED",
  "key13": "4GevMzXMe6QqqeEes3X1AMv5MjP6kk91b6mfSaKyWaKPkPu9N4PfRrBq94tK3L6NQGsrRioc2ery1DSb2eYnf8sT",
  "key14": "6LhxNBizDpKjMn35arT1iL6cGynKzXMGopnqAhMi76oYHCTJrbVn5qbyAofXteDEj9X1ahcPEPcg9eMb62xv1Eh",
  "key15": "2bVx5VmRjTNCtULu7Wa2n31oT3k9ooYxMLT4942NnaQjcokBBfJSEwJDqwE6gXJ4qV2L2i5Wz628dpARk3Q5HAYo",
  "key16": "5X2VYH4pfAkgbqhAFMeNi36o6vSuZ6q3czMHCHt6P9mde14HMKWQWBAREVHtGPWD75xk18PZKoN3gM1HeqjJBuXF",
  "key17": "2xyGwgmjBpjBw9Pm6SVsY9r3jjPDy9RdGE7LjEHtm9iPFHeBy5ZyBzJU3FieFHUzMBdsJjzP3M2gFrQAqZMso33D",
  "key18": "3qpkrWMzpZCUxUyQRxrmysLLJL7AMJqs79gu6WwNW98TaKF2gYuTjeBhZacyrj5kRAgBcmSSonmqdnCTXx7iVaRp",
  "key19": "QmTHbmsZWuN8rPRiFjWq2rR57BgDTvS2mdBCra2YDB42ZefWPCVBUn7ATF2jedXqsRr7iveMWrjTVokWGQFKddE",
  "key20": "hJKc3zczLqJW7kKafGJkNzHf4MZeD56woNTRwWeSsKQCdozxm3vNLbionLx6kcDL4PEj1qg2qJm5814unHytxjd",
  "key21": "3C47mNCNXoT6FeZWDVcbBuZsCZhk4hDY5WnRQWW6n8cg6GTGDtjRnvNXZ61kEtNG7Bw4ysJtdWVbJz95w2AmN2dh",
  "key22": "4TzCQV8oGzWttH9ckW9zadBs4cxoT3eM6tqKTokSAUVgMvcZZPhpZeHggP1EvLv2USm17aHg3vpRgRKe9NvE6Rtg",
  "key23": "4tw9sRNWPTaZPY9F1MF7baXz9h2KkvhbJhHJC8tqXktkvhg8m6XLG3NTUVc7oh813DUFZaznRYSNn39UwTDDj1UE",
  "key24": "Xjo9rxf14GAmakURYzqiCddroQChs8g3YmUcNuvifGxhZXt6EPpyFyKiyfWY9eUSxqkpxp1bPpQDxh6dCjyPBu8",
  "key25": "TfwkWgty3QpusgtPQR9mm7xxKo8HK9wpd6qe6WNnkMVTifcEnKkDefAYApVvjjYAqcKLiJb5aV9YByJo6WfYYjk",
  "key26": "3N2UkeSeUJHRKTp1RjsxvXY89Q5pZRz75SWGVY7VAS2Vf75bVrNnH8fcy56uGLvJa8S339xpY4yJmdRqgRppxuNH",
  "key27": "2Pmx1Rmds1Md9M58BHttcJDGU56yrNwqi3YAmf91qwRy726GthxaGsLJZ8aus7YmTAS2q2PdqrPEsyXtcqSJyXGm",
  "key28": "uwyGwNuDaSQgQhMm6D5cVq65fSWawrfhU5uN6AXCJb2gpqtABW1DMYRVBAEv8py3iXM89Wpcvkm8iqxA7ZTmCu3",
  "key29": "5T3jdmz6ces1oE9FxE8a8qLmtDCkJ5ZWHRU3w7SBfBeTLDfv7mKjtDP3pQxiWDYnb29AruF7GxWk1SyLvt1abaGV",
  "key30": "pWkxDV7Zi3eNemX1fChB9H9Ba4RGZGN43VKBaXWFsVtP8U3v1AwLVZY8zjVqDafC1CtYgHWdcZyxf9K867w4bGK",
  "key31": "4VakCj89TsDQgER2ewFYSKXf6t7uJDiUAwEz7kzZV8RU5Ah5CitVmCb55dof9Mx1eyZpVAqApFyYEwapeTsENgZh",
  "key32": "5C9kNaGaFBFSH4hxhqaXmQDo1Pd5cNnbQiEu6VigqAKvKe1FMi4sTNbguW3hfPanBRf7zXFCjqjwfYfeBmbNAuW6",
  "key33": "9i8heYMSG8EL13x6VjaE2JPhHZ3cwZtbdcrLhkk27QVMws9pLyDSHrQgNw88J8FoYbaLNw3XrBTc4D3Y7Q8pNgN",
  "key34": "2BtkDFq3Xxwwe3xSv56nJva4E9P9q1caoheCiZGnZAJjWofCLo7kds6DzjrwQ3D2K73HF5SobZHmRrxuKKpHjqcW",
  "key35": "4XcK3xEHNPv8eBhDWCbtLQ234WmBD6Ee7Tc7t47gjZBx9PYRFwaYVG7T9AJ3tz5HfGg7tfN9TAXaxHtqNRHVyT3n",
  "key36": "4nqmyRWLPt1dLEXF9xQxNrp23oCkf8pi7KwxqHey9FNMdJpAt1V1GSMun2HJsJQjmmg189jPREisZVmVg18mZWmZ",
  "key37": "JQLoG3Bun8rRXLf3id247RWfd7cDx45Cwa8JT9eFseUyVn6PK9MSitrCDn6DnzNnL2Ffq7a1RdDxymXadaMUTof",
  "key38": "4iwr5R8x8hzeWkoDgF8oMEWaGANgtVZGdcSNJtxMqHeBeapPt6ByLsnuvw5zFE8KrUEK4u9popJ55TgTVjJpxHNh",
  "key39": "aZdLtUtbvnCTFgCkeUJpYNSTop5KJaPBXyxG9YBXNwY46LxKHpkd1BhDssxw6qiakdpJxRjJjLPiJbM6F9YR9AY",
  "key40": "2AyJuBn8QGoaAkTKHUUiSDE7P2qzUzMLsV9MbwrSqfFf4RUgAiFy327qzh2Qa9oQZkGmkdnVgNXfq3ZbbSebxvdB",
  "key41": "3CXSu5ZKmLUW7YimXVSvMt4TLoyzESnnBz1J21VxhC6yEHyhWaVT1h8GEeC4XGAr46qbrBMbr2WJLDyNZZPJwUPj",
  "key42": "3hfopuD3t2DueFYcs1pTJkRkUwfAsNPZbV8JbA9yHTx2jHaMKdEx5CtfruNLbzYbi8hEzjpz43vPt1KXNPUCzsaf",
  "key43": "5YxScyuKjeKdhYUnZWDMeevGp93q1gE49Q9wRcicbuu3BCj3PnqsA7K4fMDzExMeoWsYu3zRkL2NSx1MLzJ1AbcF",
  "key44": "cAo9ZPHFdoTR9u5ztTZY16p4YFgfQBxstDUuFXPmtgf1yihRMg1ZioeKFP8kxnHGxeyQTWqfdfEMdjgysiWqg2Q",
  "key45": "5dYLjL9oi14omDWzTFGVQEmqhyeMSUKN12GfdS3gv87WuA3EbF799xrooH8F1FNFCfPhyHdvvDKfwZNiWpcd4u4s",
  "key46": "NtsVLcLb9x56DCqmwkStaRzM9sA8TZbhJQ8Maf5nHM73JbNHrWC5Uhp7zY427pXP2KVH9no3vPJKJjGv7Z3VpBh",
  "key47": "pxNLvXrtfswiDD9mC668omM1v3KDdGXV9FZHeF1VaTXhzf1sAiLMu87YQBPK4mtqbEvuzzxKfLTUXF2rs3BspUS"
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
