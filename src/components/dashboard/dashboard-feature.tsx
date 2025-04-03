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
    "3d41ECZRJNxWhMTa6JFGg6k2PcnmUGrLPsTa7Bqfyj7vPBUcNFQi1JQFL8EtTAU9gERkpQHXtwT5uS1UTDqhrzMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42VWPUau8pAe5vSsRSHAK4FwLRBxEXupD5qQSBWGmSH9pbkVD1KeVUG9FmEKFLKe5QS7HqrYL5ahJcFsHf3G2Rji",
  "key1": "4nRYqneLYijoaWdEq5ZkUxaNXPZZdrR1pMhLLteSYYCWutE3CwzaG5DEvYTBeLhLfPvgaptWPQogithUNPRfn73a",
  "key2": "2NvYnT31UyNbwkxf96XzFWDBuR74kZt3xqnGGmcADWuLRSdzGxdHxAWdZRvnCHVue3eJxctsAQRHgBakPjVQBvrq",
  "key3": "5375MW1QgLJ6YomKEx5yGnNhqqtfxWau47EJVuvG875bGhdnZxs6rkzNPjNoV6Jmr3UF6TA1ESUEHtCkzob9gHrg",
  "key4": "3U6LcE1mJY4MvdrCkrBkTrxoE9bcVDbDWfB7ZghgTB6KjsjEKTVTtmWzT1Rw2XevVBXamzpYV4JEeXAL3qHbm9dr",
  "key5": "3SY1n5iqgN1ojvnbNPzyucW447iPPYzi3H3DCVxRK3iGgBu566vcedLyPTqGQe1U8jYPqG3PdigoXqbE7p3AMypJ",
  "key6": "4TDUcqh27g6RQuie9iAgj6RfMRzJ2C5kXyX3DbSjT2pRhimoU6QzUpcNh6kmxZoVGFphyBwCeiiR8gRrQNGrui4c",
  "key7": "3i4YQLBjMjro1q5fCx1JiENUUZkPawkp5KHSu8K5VUothdckK7q3os3jWQTSMCRQgzjNfoEiA47JrHr3rpVqwAcu",
  "key8": "3fa85uLvGoHGAXpu8KYMFnN7UE8Cw5oG29UNVkNiPPogcKmNo2SM47LMbPbvR2gwUfp3nHHYZdDH9wjdEK6jaLXA",
  "key9": "656iNKGJhLmA28AANQRpr775jsNsvKJppBdgx3RRSSsuYpovBUCvmKdDRZGYQgATxa5gvg8uN65GEbQsxXETqfAq",
  "key10": "4ZHa8uDJzrf9H384MB7sjF1QYTtobZxvMHCphdqs581dWqDxALFcEqp73JkVJtRgYsXkWAtySEaJFxiZRCNjG8LQ",
  "key11": "59xWshHazCa48ms2evwd4MTgNXemUbxBtbPC2NjURiKsErFs5Soyob6pkd9ao4Zc2RM1DQECaANo2HmaBLNNhNDD",
  "key12": "2nY33RbSoqtBCJ9bggg39xUvKpDKeZMN5hMTif8AGxjh81C1v8LfKUTn2DRp9V4MrSEAVe8DKHtWsA4MdFzagHP8",
  "key13": "SSMpjRB2rTJCgH4mc1LYk7HexY9mqqmEPJTobytjBE9PUnG4FTaQmrJzBmmRZkq3sdD4hS9bPnLsMkEMvP7Saf3",
  "key14": "3s18CgsoCYMgPpxDC65NYy3waYaCyE7ruaEAqALD2mXFvQJyn198X6tZU852t1vyEwWPBeYGuWUKzDERraVtGV1T",
  "key15": "2x1Rehgbk3Qy9qmYr5RY6bHMc9EFi6UnRkuzaM6RUR9N9bUQ2YBC7UtRBHwBcdr2Duwu1knAsG4ehhUezKSkPGxu",
  "key16": "2SqxhH8YwW6NCdB2eNU38Vc9x9dUSqUSPmuVG2zmy5yWbMiDCU7fEiZWbUFCJibrMRCYJpWmmAD6bbf7iiCkeJqD",
  "key17": "2JaBTJ8Tc9xEyU35Z9xMFq7upzuc6HT8GrfHQ4qd8LPR7L7XRoNAGhsZd9U14dpQgiHeZvLJqCsouTh2tJCK9VEH",
  "key18": "29j8ee6Z9h1Pe1QRVVD3JR58WUuRaMYYZBRcyLQJL24jweieXmS24JjsTNj7z7VcJgFoQaxUuHwkjZTeGWofaWka",
  "key19": "2Hoi4NNhBEyZkDKYpzw5498EP2Thh3TZXMhQtiMMN8qFMgNyJue3UnmyqoDUBKRPxs2uqsnhpq8rAoXCcWpj9Lrv",
  "key20": "5bM6Q85Q2XJHUk9duivRnQwysZiE3g89xyVf4oEzdLGqeo6xpdnE7ccUE7RPo9uGjNCqebt7sHrMtL4bKSVMJb9V",
  "key21": "2UjueH1XLjeH81SSs6Fw2KhMXHno8jREcV6oqVq9vSaa5YYd9xFZpoEu2d8DEBYn33S47WHxaFxRvc8KqWTnLhFE",
  "key22": "2io2uWxx6QYb1qZmFUiSxzCTb4NQgTuQjtjvfD3Ne5er7J2eYW7aWM4aRyXJbNbbHJhtqK1aqDvYmJrfiqzvTkzW",
  "key23": "4QzRth5v6ih2mWWRfXZgRntnpfNEiEQ5A1eJBHVhVx8rRw7Rs7PHYoD857JCS8ZVwZbSWkQaV2gL1qjYE9swLoJZ",
  "key24": "66VZsqFbJJy9tGDA3Zh8UJdw2Av7YSZ1Xiwtu95mSKqfLGFnY69yG86ZxbQoc9rW2LcUHNaQgv8ob8HDnD7w3qQn",
  "key25": "4sHK5LFSeSQfJXK14dnfCB9DjXdDnBPwsGzdXbJGPrxzuFZvHTQiJ2fzN2SCGHHTqQxgf5uPUuLgTAwdXM1y3Ngj",
  "key26": "2xEA6coNoh7uhLstThTxQUGtVJGPQarHd4nWQQ3d5B8EaKW4KkucvCfGHvy1rDwoLs2DheeuZPGACgaPwdWNBGJ7",
  "key27": "2Rrn1BuE4aWMppouLGPy4Auyv3pr14EBmFPsyd7Mkt7GbKeTZRqyHYYYEKENwHgQ6NiLyGdVr59U1R92qSPxoFc6",
  "key28": "SJ2B73hakctKJkAQwU6N2pFdx1wuLZ2iv9sw2d498LkNss6ver6nxmHRDmMd1xTK3f3vjkpTXEhQPMC3G3RkyBA",
  "key29": "3rxtaw37r44cd5ADPEqDoqRJXXAuDpnnnBEHeVK3WyBH194rkTFVBMMG6rAjqWeZxqchKqBD6ZG46UJEkBYrquF3",
  "key30": "5giXHWAaFEuM8onAQEA4jApZUEAPvNm1EKXqfm8QgBTSh6ghtUhLqiKYmeJSvwb6CbwKSC7WMtVP1m2zNQ6MzsBm",
  "key31": "3NDZ6LE9JdSMkEa973htTcz61pswsuSNVRnNKEL2hugcj6EFUwM3ufY2aHbhu2duKQnjK8ygHJYEGPsTXPmpWzKf",
  "key32": "kU1kEqyxBzDiqvFgWpaCgoMoDkawTM1r4rHiEQkHpnff8irdnSAF2hMNAhjr6AsFj6AH6soGLXgTyUnhTXWwXSj",
  "key33": "4Yy9PPbYUmERjs4LmDR35GTa7ou8Buk7aMje7uDoB8noXNYosuWJVhMPexr9Dgvv5eUbNgrZbLgMmooRd1SoNNBN",
  "key34": "4vkoQdEViJFpWtee3Eq6sUoKmdQcsemKH3k5eSivrMRTe7umebgQsTupmDQevq6veS177PGhxNdH5ySLr7NB1N11",
  "key35": "3PAqKkJLz5LiEV9Rmum2ngVZiNJER8Ny4rSXWGEbpkVCLtMfXDRuyJjDFc2Jk5uSmKkzQtyfxkDd6ZResQvxdwPu"
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
