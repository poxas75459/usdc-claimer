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
    "BuySrJs9khNE7ZVw1mWa1LqwC4Dwta98WW75pLbeJoqoXGLiDxk9BKfeoH4QQGcA3cWtYTZMTvYSNJ33SrQFU7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25UhrMwpFGoAFB1j9483DC7VtacjWFyYMVtDkvrrTsy9VaZu23UkgL9VehJfCVaTLnTSMTScwMkQuoAWndMSS8Lb",
  "key1": "43LnmP8Y6EGsg892UQnuM5hm9jPsnkSAgN7iN91Xhhy4tDpSv3uQnFn46rSDcarLKNyt4zsbAEpavphZ6WrPw7AX",
  "key2": "2j4fQp9Zp6eprY9aNUJZ7yvAa5yiUeJ2uexm5STQnf5i8zNprsNhowHitA6Dqhj8tcA24QvkAK8up78osv2fuoms",
  "key3": "5Mjkm9h7MRtQd17neZ5hGXxkrnEiNXQEyzH2xen7dcWdU7MwzKJWjS458B6BWjA77JomGAcEqjmJkGPpe7iAxHXT",
  "key4": "4pffSWnJZV9H1joPCo8K92ZxJDKXn4ToqCW2xpmgtr7zFEzgUxr4gzTCZr6Kix5pR8QZFZ2oTUz7KMn8J4RiW9RH",
  "key5": "29dzhY7auH8qwhrdWyBte7UuTZmS4mGhCqndcQPy5pyrqydr7zgKu9vThkKNaC2dKK9SQVNyu5K1mdcjZN6BfdBm",
  "key6": "4aZWRbGKcCu3hv6nPEf8NUgBgwredrm2yXAhiqQNQM4oB9Wq57z3F2sNKoYpjMxXV7aKPwJ156sCswgVpnUBjswU",
  "key7": "3ScM8SikmCaWUGYy7TdQWG3fsTaK4dsPQQPB37LpH53YXYzK19kEKVPNG8Bu1iqu2Rqo3xAhk67RQgH6rHcGfRNh",
  "key8": "4v4dFFtD8FUe5ewJVrb8niazYHM4j1od6JnZdDT16munF2CoKsqEv4gcx1VTYEbFYJuVg4ohEsoptUJDpUCRFE5g",
  "key9": "4iDuWcaoaZepYcQa43mTpLtqT2y1vmmbjDf4BfFQ5JKogxGY9TBSatmd5uqcWb3VntLrBW8zqsd7tYtqCgRZZovL",
  "key10": "4ow9cZoEmbuBryhUyUDKcYAT4RbZWWcYvjECNH6R9QqfQ5gB9xVpUzjoLAV2diocFRCGjyn75uCELuZXRvHiyjkW",
  "key11": "3XeCSWPqJzrzRHsA7xL9TAhyBnsVwb4qGiT2iC3LM4xMbeHbFyday5a88PFzzCcrkRJuaPe5rvVJUZPVZZfAFfrT",
  "key12": "XXt3UbAJwZH3zW1MwqjbFCfsgJgumCvLr4o8RCGe4681GVgNJtgtk2v694Fr8BHzv6qYLsARgtDseAGysUZ755i",
  "key13": "4tX2ixyZyde4AT11XH6FqhG7BFFGtWVFKhN7Ntbc8hVzNNYEBM6G5NkZdBkib5LURXLCNhPFeQJpGZLPnR7NyM6i",
  "key14": "NEZLAHSDfnZFAd8mnrAr5GxBoCejAHHdNcuqnybD2yVQpTFTDT1685v5rNAEq8xxikLQz6Ydeo4j6yfN2dLkD89",
  "key15": "2ada4H5ntKzx42nhoiPMiqVK65XiPPiRPhFjDQjiFfvSsdRHRKh77BQ16d9nXauSusohpQ8MnUQHace648wS8HNt",
  "key16": "5pcyVbQb6mRHn81yCBZonurwuzkXbHXSS61E7CZbVo5LKfYmwsqwSAujt8RCTS13tTqQ7HgkhWXkPgexa8uiinRX",
  "key17": "4pbUZhPdXuUxwfw2xUpy5GzxN3zCehRWuttXg9MTjApc78ooUBEAzGgcLXgMM6oWNZMZ7NKttSgA9k7VTwWHyATS",
  "key18": "5vcYuKfodH2Js6wpdjUYpZHoDUkFu22zz6phUXb4YKDd6D2rPTV6WN5Lx9JprMNZ2C4cS3bSXM6DqbybNYcoX1Gd",
  "key19": "38kT3qCLXPL9RCTTi94wg6KwcNFm4eTtxZjQK3DSDyCrZ273bQPi6zL8NUK2ij2S4KhUW3whTsJVHLk8KN7CLykM",
  "key20": "4CRbEzNgGkpetvcZY8dixZ6FzsPgx1socC3euUufpc8FDx1tBVS7ank1c5gPd7K64BUrf4yWotcswgg2YzkjLueZ",
  "key21": "29wvrjAVBuzGfdc1VKVbndtofX8hLxuKLSXdqfaHbdvhRXNcLmQCeTxjK8JsP9DfqLXjoT9RdzRkjcooctHjNpXy",
  "key22": "3UH5WrTWPCfAPEjyddkToFmSUgSFksfsH9oWGEe7GD4rLLpT3skSPcWDrPDoZyfXpsmbFjwgcRyGnSFMJwaCozuU",
  "key23": "7QuyrcqiuSeKXBchRuDar6FFVkDLWoWuS2ZchCUFp1CbTSfJNHKTakqae3cGPtuSUaJUCvDeEKtD7n4NSCRra76",
  "key24": "3bmHSNBwCSmwBZwapKnCx9P6J6ou2Xk2tT4gfBfq5PFdt4Lcz4eKwKBA8F9vajxmPw6xs4UFFbnNq1uXvMw4zq88",
  "key25": "4fcrBGEjJZeoiQDRCsn4YyRcx8hWLiyhHEvqj6JrTksJTxEwCGRV1fMdwHZLAbDtsAwokuVb1LDsZFiHChC8CpDB",
  "key26": "2LW4QcPrxcr8qn6bybD7Y3MYre9hzE9AUtoT2JYMknL3xXwkQCqvR9wUx9ExrDUe9es8qVYKnQxS2iSpNVgLHG9Q",
  "key27": "4KH6aWLopubntQ9bFzU1RwdBi2oKZJ9cWuA2VvwVX1xVBLL1Q8PcdKfkex5BxgHDSjwHHsEgFMNxxwo1wMGwAYqZ",
  "key28": "5sTH2UCpH3Mcv543Xh198YnVTgijRS7atxDz9mEqK3nhnD4VJmnRnYmxhYnZ6QNB438Nv1haHdH1FCYk83Cfr4Uc",
  "key29": "v8xzxfx8PYD4MeW1rvyavX9ZSURhE3j9nov562Uknt8HkUsyQtrh1FNG8W96YkgWHBKNz1Y55HFb3Tta7BT44JJ",
  "key30": "4njDUfLChfbkQW9kwRfyMosNafsqxRnG6zA357PvvmeVpUtdi9qebsvXLvuEm1UxjdHz1ggrcvNRUQeNhfkSnJDy",
  "key31": "48iG47jKBBDkiyY1HfyEkJZu2RnjVkgFVgecykDmzwZNskBvTJHf79DTyqFH3eJ45rj9Bf8UppG646pYaGwyRhiD",
  "key32": "2Ag9J1KTxVMZhE7vi7FRNJHbB8P43V5i1BXthjZZHgS1wqeeQg1yYTTxyqeRGWsFAH5sQA5bsSfRiJJ3zuDpRfC4",
  "key33": "2sHkTidxtPNAHgcVojMiaWTSDqnMThPTDe16MTj9Q5YCWLRU9UTT5MWFXLJ1as9qpJE4BA3RnkXkGcyqNtKQZLZz",
  "key34": "3pTSxezySwrdUvZa2TvQhfKf9XVPuCN7HTKZdt4oSEAMs8x9s4TxiEhhYNuC9wjTdqXKNGvk4S7RSCTJFNaToLoY",
  "key35": "5AkXReGeg2LY89HhU22naHTMAoKaTMHTNC6uhEwCbW4KadHqbw7shazSM9waw635mYLyhqwLxnid8nV1kAAXPxL9",
  "key36": "YLHtmTqhgLpCwkNR2b4YxkRyvAejVi2Tvi2Zw4SbNpC8oKTVdTEaZjKiAyMBo2RUXvS8DybFpn7J2oD2DYVxvn8"
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
