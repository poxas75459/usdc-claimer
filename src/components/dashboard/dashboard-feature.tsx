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
    "34MEpqFFz9JBbxtNW3D5kSvYxXLwaoeSfjSFGhsL1JgZ9HSCuJQZjJGTVRrVpjM9JYYC3F6KBaBmarFL19rnDUmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dny5GYD8kGCtaoyaRtkKxmsntF7N45HNTeEwUWiA3om3MYDLNwzmVPFSGtge1qtMoQybAqNdDNp2STFmEAjivvA",
  "key1": "4sbxWFn2gW3816e6ztfvJv1kLvbePyKeccpxbaPATGdsa3y36tu6beCVjTSrhSefNsm2s9nVMkcqNzkNMrD9hmoP",
  "key2": "TDpTvQFqbUfrP97GuLG7b1BPWoym7qDLqfpkgSbLXvGJqVsbiqKL6Af6eGWnGPEeVMkxCF6HnafELX2NTkvSrZf",
  "key3": "2jV5Hx92LskdHjnL5XUmcahib8WCxCbAFFniiQ24mr2YZaZLMracMswSaGPjeWEWWoQwrTHqjZib4XBG6aVPYZzt",
  "key4": "46T6jY5oBA3QZZnVNrFyeka8iyFMZp2bDTCQR3YBD1CiWVWJTgiQn2toEXkmsu9QidAEknkA5NWgjgefLWsTbiPP",
  "key5": "2pyTeimD1CTM5156jy7RqGcAZ6pTVsipDC66h96mQn4CqzHUjBLbZt4HxrvFZvTQXsJp1pvcE3ECoQa2Fd8kq5Q6",
  "key6": "21Z2zSYVrjUzVPNwJfsVh9x4qLLxanGMLRtcKQwRjbqaN2sfpvbfjq2YDdAyp9gJjN51hDJ6aPs5tFpqgGxiEubY",
  "key7": "5k5HFCfkZ7fScnrsw39Ub6jAuEKmdv2xYYYmNkujHZEosXzuAwqQVBYhShCwmfgzCVTRP79AbYWwXFgGonXbUBhG",
  "key8": "y37Cb1PLw3Wn4JzXCxib9GCnJL6GratuQcXXKta5cimWgCeEmyFALeBDFS9bicvkH9zmPqMLXc1fbZyNZfRGuEq",
  "key9": "Ce87QjgkLW54qayZfcqNshng3vrQyEveEW5F31NbAckhwZbsEmJERg4NPJ2UQSdXJuaHNG2SCjiTCfNnEejG1MG",
  "key10": "4TWimuYvwKTzFsdDw58ufVvHBkEfqfRJmHQ3aR3p8uL9Gu4DAZQnkvDosWsdzFFt4G7WYdQUxnX2X1J46BwaSzj7",
  "key11": "2kuCq6gVDHAxrBrHQMyNGehsxVhcRK2tiUsZQ1pPnu1vdqgEVNADuZaLgwc1B7fbKh3rLBhYjncbgFAA23DwEjCV",
  "key12": "24YrCi5vY84DJRYiwmd9VNzv3S2GKc8wdQMMqREJJiQYjLX7f3Dbi86wXjXwPFSgU52tAK8gH6fAjQZt6e4LzM8E",
  "key13": "57T6p26fikktUqqS8tKQ7erUVnfFDeTBFiobNysbGN9DT4hMe8iqLLbNWgYbxnBqi6EbEEfTjkAxb3XVRDTiLUeg",
  "key14": "5NZFZJLbax3PCRGQ8ncViZmFqFrBwR9WzSprCoy6FC31ciEhAHTJBc5i29rwNfKJ8VXXc34uGZBzVpCWBxhErW45",
  "key15": "pBhUKq9HggF5bb9G57DT2CiSmWAaep4SSEAukhpTypC9Q47a49JVN8hWSqiajrmFCWejeBNSwzKaCtefWeFGPf3",
  "key16": "4MpWtzNjU5hwDjdtZzznPd8kHzG8hp5EhiEevdAkB3opKKz4V2BNfKEt4u5kv5fPFCiSgkupnTeQCF1LU97Xj91k",
  "key17": "3po9ExzY3wR5WLtGs6xA858RCUz1gHyqr6ym1xB1vPER9yuF2MNzhmso2iUWFTPRSqCYDENQzR4FjcwgJGFjKQ9P",
  "key18": "4MS3chYpeWMHd7j666h48MGCFxVnMBHjpuf4aAFNtckxiVbRECQjAAYQfuMDRzZf79aQXHSFVyMDdPgzSQK8Hupw",
  "key19": "26KMgk7XWVPwXY3UR2TBWcwTHbhn9XRpYyZqSk5CE7xvhc4eiGUg7eMmSMbLqNgnimNSy8Nx9p3BjTAeJCdS97mK",
  "key20": "2Udsbh6f8ehCYHQt2A8avHNuGRDD8HYVfNhQAH88gBmjgCQo4FfEGzhi5i9mRhEVfTBWHNU7KS7XFvVByDBTZFJf",
  "key21": "5yb7gjng2YGMcWwtWhKaAaQFYuyYydZ9EXgzfxYKE7pvzmxz3Z6Jb9uDhF6ouE13XLz4aMv4Ukw5JUNyMaAUBDVC",
  "key22": "t4KM9wFTP82Zdk4RJrjMUTtQNuP4ZggzAV3L3JSVZ7CfZphiSzhqkmbR5qoavAJdmcUqGxuqfEoE6hKrdFKyfGx",
  "key23": "3CzuaJTr9mzKuKens3B1YfA5WH1B2fEDxcjFux9XadLVPFArqJygXvBUoFYiTbp6VSRyCBnDa6od6XbW9iNRvy6u",
  "key24": "5f7GTy6h22FCt6zRNKUg4NpCCeWQVqqsbTx9hZuSzbYYfJQ8hY9R3zkHyjMfgu8MreSLD6UTXRqF4mzZ2th3CDxL",
  "key25": "4f9BCzyYNxaLxobm6okMKoK4qLLYVmRG7SiqBXrYQAM3Tbvyd8BhEQxQEZbhYmwd8K9giENTmzNcbWixV3wH5TtS",
  "key26": "u9t3S2akWD1RL3FaWXEVimzmGp3WQmtfeT7ZEE4FfkRqFdrREhnbactvDYW4pi6MHwkzy87jsR87kpUczYZis6B",
  "key27": "za8q33pwNAqM4ogkTYQqqVTLLnd6sFY5GwdcHgQ9mAanRJR8hWr5bPVHdRpA4dRxVXG6YFtAyz1wwePMmZAuqKS",
  "key28": "4vFWRg4bK9YsmvWJHAjMgogN6wGPMWNC6WC7RyW6Y2FBifYyVjqxsPer7Xq9LhDE6vwqVs7NozvpWvotdyYuMYmq",
  "key29": "2vzzhbJW2PLQzfGVNtr3iS3MeGypvSbDCU27EYdc6cUjuC3JKcwiSu2bePRGjivQtGSh3PRXfo2nonCJUao8GKy5",
  "key30": "3jF3auPdLiCw3B2oabBxG7BwMbezKy3DSjJMXcrKPb4tz9jkfvi7gfsQDTh57cZQ2W6ffLUQEGF1zzNMyj1pUkp4",
  "key31": "48acwWD7Y7CHepHCoNsCFFSeHsHTqdxWNCXk4xUDkgZfPche9skTkFYHfxaKeEKtbpkr1dXMvQBuofGg1KGGw7Q7",
  "key32": "oSSQMTxNo7RNjCgcnvao2mLRLbSP6y8n5hs86q1SwxXK6evq3CqPg6PDeiaZ4Q1SyYGa9pM7C53Bv6EFopZtWHt",
  "key33": "5M3EAWXVkZ87MGt4cgXsaQ9Jo2cLGJhasMmzEXK7YKaPrijuCH9QUi2MqBtU27843jo4ygzuuVHE65eP6ZEnT5ik",
  "key34": "281QZxrPavBPWrSRAYad4naustuprtAWsitWtAyQrAxb4MExLPQYLtJhGwkiYqPWop2c5nNXk4rZTcfcmdUeVtYz",
  "key35": "4QWNvqKSDo8QbyMmNULHxTDABNwYJnHBGGh7VoVdP5RVS6n6pHxh7KJ8vAptrPWU6ysVBj9UQRykA6V2rRL66Vpy",
  "key36": "377kfzEHEd8mJkFmmaLGpaXWJiCxfZHszW1p7BQFVkg2n5KTfBh487fRVa32S8Lm87c7oVPpRMnXqPfwB4PdD7C",
  "key37": "3Dzi82gxxcBFesRZiuCFVygvRvXNo5L6t1Y3Z7ftzSMTVEvqAxFf9Zdm78G11DJNtc9rQnEXeCm9PupwkDphCDBZ",
  "key38": "VhbCjmqBPLFYYQpm1T5mNFiYzrMXsK8dEhYvfgnY98VYnnsYUB4Qhtgt6aYZWo23tWWwwQy72BDebv3L8x5vdiU"
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
