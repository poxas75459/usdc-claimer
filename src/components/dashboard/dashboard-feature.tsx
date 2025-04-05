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
    "4ARjPpS6oT3Rw3y2aMUGq3vGju9ZHB1kyPG3eCCSjVxtaaNm5pqghsmnxHNtP7JSnuAqMU1T4Nmc2fFGwW3BVy9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cJPonmAeRG9Xx4KsWYKEydbyGW6jda9EkYzRanawR6RQtkkbX7tG39xJvDxLtsofvmqNNUkbPzHtBKjXKadYm5p",
  "key1": "46eozvL5cJ2YpdtDzGwfahYKg2RCNhBzwnVHMhoEMYpSajG1PjmRi5oe4cSdxBJSmMjAnkkLF1QX9AECCjdMKLjL",
  "key2": "2KwqqFouBk7cATeXDxnF7p9dmfAZTiHmkR1n8DasGzBiVWWZ5An77PE5YYKCBMto6xV39tXu2Ys5pbVUyVZ2GCTE",
  "key3": "299ksjtbJw9fYBTB5wp83Log8YVtDT4Di9ZMTq1vqWJe14Lvs7rvR3foFejTNuM16SXdiCiSJhFeJKPvm95oUJXo",
  "key4": "31FcNFkGxx7WC2xCGQ5niihVe7D97gVJCVmq3hdyBtYSoG4JvW9RXnRpq5tWxy3zs5TPLNLAnpDMzzdVXsqDYcCB",
  "key5": "WEaEA7CmMv6ZfahmeYCHzudc6kcCN2MQ15RBuMoZAbzHvtXnuidMWxWJTjTJMvJWagaLNGKrx1n1rsFT8oqBRzR",
  "key6": "2Dx5K4U6WYgABw6poCm3QJ6iU1HkvDfZkN89BuCJwbwAxRPYQ4ysEGCKSHVQf34hxy76X29zaUdUHzYfP9uhAvwV",
  "key7": "YSSthG2bJDGAFDatuFjitjtbKFfrtyju9GDzhKuGwknQ4NDPXNiaaN41H2ARWkc8HZRKF2KSHFmrKKVaYp3QxVc",
  "key8": "g2LZQFpxHLpdpW5CY2Ezi9g8rHpuxDbRL7Mt7vByjwxCREW96Au5rq3GJX1bgC4gqVDPY8C3pjDEeUTSyBUrXi4",
  "key9": "47oJi18ES5nmEjQMpjmrKHe25GQNh6FGrvbPnUsyPNCwvv2oD2Q8hwMuJ965j44xJZWnXZ8qoVHHDjXeKRK9JXhW",
  "key10": "dJwujrJ3mug8Z2jJEo1cSHymB3nnGDhsXxnohTmU46Nx1DRdcBcGjD8Q67fTzuWz6nVPzyF43nosnbmn1qCvWdV",
  "key11": "2E8pU9VPP2iFCrfMeifyvDpZ99ZqQMyZi6q9dt9muVom84F2racK2V9Wst8e2X6w9Jh3VV4wGToiozSgAFbrG86r",
  "key12": "3zACJXm2KuZ5hGccGpzNveNq3UXt5iSK16ywUqdJbqEU16fAdn7nwRt818W8iAFquxgrUPGLkXN9P97mVCMRr6GV",
  "key13": "3YJe353hMkdbPL2nvCRDqFBB3J1Vguy9QE5v4kCfeGiaSaWkXrVvJ5N6HSQugstg2fNkUqfdszZVBzSV6UxJPaWC",
  "key14": "54UPvSSxGpF3aeJyYxHnyGhNEwnLwMqd5KshQQBJgodzV1Xxese2aqrfJFLTqvbZzuzJAHacsmshVUyPdGytaFB3",
  "key15": "2kJmJVdRiH9xpaMvTSrmcZ5mDK8pVuRSvzkTWkmGXVAaofRfW2LxmdmLjcuTVzpxC3qp7UNN7QD3rPanvTQWh8CL",
  "key16": "4UczvzahHyRLviC9x6yDZiiSTfJucChQQqQmF2eT2juAyFvCE8pfKDb5GdypVjQKkE1NvxjEqhL67PJQyiauaorm",
  "key17": "5hzcFoyfLxBUeXZg35bs4qwUFsmKbdduYx4cy4dZqG7yEe4Z86LA17jPtChBHXDq8ZYisSETbEXGYHFzgJyyMVBp",
  "key18": "4DpagwX5WPW1WhhDdcftLQjxUGWgoEU6kCDSW6hB3yTbs6SEgjWrkTSBTeA61GLt8n8KBcyvc92aiViiD5KjVLr5",
  "key19": "2Fm5gDYXxQZHAx4pGvHFdNy7mimZKaYn3h5MAtF2qsitdHNDf1Bz39JjD9DE7AWyQiRDBv8gZQ5ekGTwQupgNHrQ",
  "key20": "aeTyoTqifKgGhTEA3hCexPQajJgyau1ossbajXPFi1Q2vdh5sXPMkghxDSVfEbv31ybJUtEAj8u7jZjAPKMVjev",
  "key21": "3z8zpEF1ejG3WEQkSyK6EsM81znTH2m34rvrVw89RHxisG3nR7pdAQCQfwy9JSzp91FUqqr8Mmtz1CzaxXo1oLzm",
  "key22": "HKdZDFQU9PzGa2TWxZdD91dD1d4YHonmes6SwUcJuzTX7mJiT1hbCrB51tt47wnGaG6tRNNNquUKoVrkAPRBe6Y",
  "key23": "5wQvbCf1PE9VhD4cWnWn9eWa84FqLTYCKm4e6w4rE8LrxkpsFgB4YuWGJaEnmtm8wXU8MAckH1wcYjQWrp6KJ2jU",
  "key24": "3HQ71kmVoHxRGGy5rVWU5vN1zyzZdJjqDH2vF8y6Gny8rzudQKVHF6K7WA4ugidqqMzTAuz2r7JJdzSdavJA5L5J",
  "key25": "jsbW8pDtJH7tadyNtGskfphZYVCUwLfU6x7FjRPbSHUtfej4GaRk8KvF2WXMxCAN7Z4kzdKhvKsWbj1S5hyWhRW",
  "key26": "2D1gmX8Purh7BYvBtGswfd4SuTneuwxbXWPiVLBeiLD8mDNMKQQxCFhSRBhV3H5DvCjLUvbyMPQop9PNuyvVdGbz",
  "key27": "UrJRH2rszqGe1nhrRTdWyPt1hvjyqmURzdyQi8HBexonoAFrMJxGc13upbyx4YHaBAfkATXYMgxjpyC3im34ypU",
  "key28": "3FgWzd4WvipE4UucTnYKJwrzB1L6CoW1z6k2eikoajz4h6gfy6q1tWz3tFNiLvkp9WyxAQ4eKLsyVY7e7GFGswb1",
  "key29": "YbkVxLMKHwn9db6msScmvz1fgCBnqLMkyub9d9DXzknvg7fFShgwetbnHBzALJnGuAEUW8m7TmtM76JyZjcwuRr",
  "key30": "CaQde87cBAwTbjEb1Bm7cAS5JvPJMxmgcFkD63rrrfF6sAHx8b6yfQq8y9sJHxP7ppwqe8Zmpj2JKaBfv4rZVwX",
  "key31": "4hWVFm4SR2agg1VXxiJVRWRzejzC4P77JJqrztEtcYMm6GAGASfiQbKvQVb4xPBhTbnmcb3t3ZBzPaSUohxGizPg",
  "key32": "1vPsXiDJSWfQxuaWe4jcZE7gtc3ZZBKc48BK7d89y5CvC4rMjaa4AxKQwBLzbuXuat2XcnTWLk3mgzCvD3rtcru",
  "key33": "2BD8rmmGXzGcStAPBfPBmfun3SRLMqngKcbtwmpWAn6SQpwBr8MV9u351U9ttc8nUkpZF9jPcfvfkgcqxVtshrS2",
  "key34": "4Qgr9iyCYuTcAvHxRwi7yQdXPmuvNSzkQmSVUKq7aRBoSvcBu1dAzmYZVQP9FnUaRQf51PsvG9gFJgR2HrS2H93e",
  "key35": "52s7V9nymUx7WFYipna2zfggayFVLnbhnymvKzouVompx7zcRD1LYmgXSek47NmdmjhNeerpHzwDB55LafZE96wF",
  "key36": "4Ak5pr3suPico2QgZrXzwjkajBPN2Z9gX8aTfgjEKdCYB9fkv65B3YsoXbuk6MmjgdW9zfjX7F7yYbHJAvW4EQgJ",
  "key37": "5FUqvWpQaxL4nS8iRQSf6GP3Ada7uJsqiEdpgViAxUrDpxog5RpuYfwnhYPv31jjK7sD4Rfd4s7Ma7kLM5xvptKF",
  "key38": "58CYwenES39ZSjEx37RvevD4Wb6UR1egTiC8DZuZYS6hhB3rNyxb1XcnUTVZwJaroaZDxHNp7nU14wqowvgMxod8",
  "key39": "2rY6HtoDUAS57bQqD6ix3ZbDCjbToaQZFm55iJV2vKyVxF2B5XDpxZQxFV7QLbDHSGsyBkV9vvssuRxYeW5vdUQ2",
  "key40": "4FYjXZ5cLFkfDbEKpLQvqyE8fNb1NoPgPp3LHXDwHj4reopVE2bSzGxqhrki76ZfBzXt3KwKFKTBT2v4LZwUuq8m"
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
