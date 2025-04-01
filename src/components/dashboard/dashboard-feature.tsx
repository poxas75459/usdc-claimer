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
    "5cr8F23oFu32c248NLB5VnGVceG7d4UZV4Tb79S7V6pF11TLYpsChfxGZZCnF2WD3evANWScueSTyMtqowCZQEK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s9sDiS8kQXr4dV7vmJ5uixToDVBkroAKJEXvGWEG5hWBRVVFgtnxdXDHtqSg4f7TyVboX8bMVym7dQPc4Qxn9dg",
  "key1": "2PpU63GypxSVUoUebm2Y33TYYac33CkJojaJpcvTKNBRitmcUFzw88xgpCtM1dGgEettGHvZkZ8gz4mnvKr8iH1T",
  "key2": "3yhii3Yw4BHrdTmAsASP5YbHWTZZJxQZckStPQn7yGg7cqdVBHcJEdMDh52GakTW1QzZWRTAstuS2PdTJJniiaCe",
  "key3": "4fnzSENobM3x2KDpvR2mpHaJno9eBzxbmwGj2ZUGxnd5HgVj7o7wLnpgZBnroNZrghBKggCzQpjdk3vhCkAw7pyx",
  "key4": "3yriQFyKtA3cBQMa32G1FWa1my4ivAsv83t5EXHxaxUJw6Q184jWKTxyaXxoNaeDTmyXW5F7QqcQ3vw5nHykkPTm",
  "key5": "3Hp8G9yVH6XqQ72eCocgqLn5ucxinXPNA1VEvbcrhcp3mMxj4N2foz9MVszhNr84BhCuPKcj16J47AGCAbCMptws",
  "key6": "3LRspPiNY2Cv8jVPQNDYgNrthwLKB3G3T2mQZDKC3eSEtHPERfQrb7smewZ296iTvwVLdtyzGh41s4d3v8nqwWwV",
  "key7": "k4rNS87vUSiWZc4z7DT1pTVEPuWnijazFcaTcBMpiKbKFHZTsK7bECyYUbbBj2nCsGFM79gfPPPDyibVds6B4tL",
  "key8": "LM2n8H2YHP1i24bMMfucsT3Y5dqGKAoQPby6aSJ7empu5KYxg9ewbCeuuHAVi9rMTWqwoFQo8m6V2bHPyryjaPD",
  "key9": "aePQeYyftBX6RpVSx6j3LUQL6d2EySLXdvm9bFKVTSDnDkLyRDVHkWSc4HAuHEjQDW5pQSm4YQTCDDWt9N3BzNc",
  "key10": "2WoiCR6pBfbT4CLtsQrsRMnrK25iH8FosNqQfTXFj7vtRx7JHXdRUsjbYtSiLsViZKefWyJXhtyfCuUz6nheM523",
  "key11": "2HLWHzii2zGZ5YrYkYvSFSGw934udhkbyTDVzbok3dy5iettjiqJCNFFJYT9V6qQCM4N34v3JNnBeodJSG6kHCV4",
  "key12": "2b99F5MYF3e2YRbnHpCrjWKeDEEP2WtY5cC7kv1sYyUiyoiKnMGkPqfRANnSrrWj7545jbGfD75mBxdGb5XeUG78",
  "key13": "coo9LxwmWWzaBviymz1KpXhK5tyiS1ogLxCr7aK8STs8rNeHYSt9Q21tz24yzsNDi5YxkqMayRzC342Kg5VpFJC",
  "key14": "3zDAJtRUYQuFzWEf1UJX1Qf4D4Kr2yFhYGhAHUSQMdbvmcC8aYZFTDZh3BuZQXqoJDMhiiQ3xK7p5mNzBLZQNkoc",
  "key15": "3Q21dHMQ442YSk85xjS8kyMXLH3nWmQs5foEbkJCdS77kBgqQZATTf9qUoD6QYAAkfuWF7dKrbLHo918JYvPTtMs",
  "key16": "5BBSojymQ7NzzKqDhhYe22YC3aaes8ibqPJCw9MUtoxEnmwNDupyxAqnKrkpzJ5tUM4UWrWJTVJAzcWa4hxCiCy5",
  "key17": "5yRXowVybUn83xT7MkdWokuBkb1qjk6KF3zr7CwH8FoUavb6sUxxeZzSAUXo5AxUg24mDhmdqh3JGsENV1yRMUWA",
  "key18": "5vtEJtEyT4oXUsih7r7ZehEsFx123ZmpXMQUPSQ6UacW33L1ACxFVrmfQgRL3tg9ieo2AuRs8S45XXVF35UgKRT",
  "key19": "38Gs4jLBb4JTdsQ18XGnxDNbmEgwnbdb7wcgoy3yAsD53dmegTzq8cTg8zHP2YMpRYgSRFjN6GHirTV7vd12Zam",
  "key20": "25mrttV63Z3ZvryGxipF62wCWctEKTsSLGKUg3pLTzt5VxCsYAxH2g3XxWYk5eo6rhobSJWXHp9XWFso5gBcudyP",
  "key21": "4SSh5LhNzT9TzHNw2xn5wVNo8w4LipxEmXmQAi233kpajTAjsFa9bVhQ57LByN9UDViLNcmSBcEDB7JZ52howkWB",
  "key22": "5S7qv9qhcv4WS8StgT4jrix7ttGTDweBzuVjB1wKXzLmKpJhYHkUaTRRgCz33bSucx1XCnRSFefync72mt6Rkohk",
  "key23": "25B5ZGy2UB1wieWM8fyKrXKNdso5xe518MzWLWn4i9EiVyhwtbrxk8Vrfsh3sfzCGKBkhEhdEQHCZQ63bBJ7E7ZR",
  "key24": "2XKvKEj2wzNNZcjmUkc2rjAzjm8PBv7HkmtYs3owkkC38heJ6MhvpPJzNwsJB4FTTyUrfYrP79GLwFGa4AFPT6cz",
  "key25": "3YCCkkyc5qEX2Ur4c8i5XYzmZS1j9twdDajfzhYkGfDUzFh1BZgV26nvScShQwd9g8ncDJPXmjFLct4eQz5KxcAE",
  "key26": "3fma4k7hLi63GEuM9R6tTkSNABnbG9STVNK9LAFjKrnpeyHSovBBvYWefAy3ef3gzRPEBX688JEQEzbmUNCnbXcr",
  "key27": "9VHNkJtiFazfGyKAis8oTQMXjpGkmzcq55Drnt9ZkvnwAJsx6LVMkgA7dGKnvT6h7DYuhZXeNNYLACxdajstCAr",
  "key28": "5xPericZ3E2gdwbdo64jH4cjgeN8m2NchsfyLBgHR14hv9UMc8zLZFCW6TZFTBcYiCv4LxXGsjHAhAiPyQP2xxVR",
  "key29": "45TqsvJfPwYBA82kgaAr87anr4rQh11VbRhCoSs6dUJrjSXne8qWBAqwMbMjQaamQ3TCEXkF1EXfV36am6GQHycx",
  "key30": "51F6FuEf1AkT3jBYwR2Hqq1zr3szZ1NS3wLB6TARS7BUV82pGfJhg6WWmqdbzUsYEJgNbqbL8Fd6LPN3JrvwUWNq",
  "key31": "PHnV3c3boaKitHMa9GDgbBuXBWyxfJ9SwsbYR1rqYtA9BKFwQzCH44eQTjUN5dkTUT1zRF3iYgEvjjvr6zNoM35",
  "key32": "3G5VuKA7nCtNs6gPkahx85fHqSqupfHx4UN6qp3FTqNqAdPxHhyZo2vDMKoj5qoKxF4m5gAdSkhsQfPVPuDWrjMq",
  "key33": "2q7PmwJPc87r2hpS4SXRMag6rkrTcoM6KFRtQkjHCHECAme8puePc9Y9wsL36dhn4bG9bZQ1nneHtdUU5hRUbKXY",
  "key34": "JXhAhRcXenfWho22B3wCwJezdTYzBuP5GRkNsbvh5fitLz76hRLGEDGMJfuEh9ctbKaxi4TG6eKgKic84yYo3of",
  "key35": "3dXMKdA26vwHrNTQvUcNd7rNiooi2ZzNhfxH3qLxCtmapQhg1a9LM3VYFiKJegsNiVqHXhaKoyVYtVD3MGYyUiBy",
  "key36": "4dtkc3NvqQw1F7DCSskhLYYGqBWp4pitmXKUL8fg3ZfcFdZhSUSLZvHnDranTGSYTB6TgxYKzW811KWzqdHWsSqE",
  "key37": "4Jkxr2yrqYDBrHaQCM8FzPPARybucBCnarj5QRF6ENwatgjbbBfodN78GB6nzYubziP9WS2DncmGwrpFuKNpXxeG",
  "key38": "25XUjJY4FJJqDNJF8HcV6zHrvjgDQnfBwsCF8RVtA5o1VRYxbJtAUKYWGR1mFBAbJw7ikpq23fLYm1FBcUmdwHXp",
  "key39": "5qA4qc5SZgmfwBUTrbCiUNMkq6LcMwtL55SD3AKvDiytwWFssRqC9tC2BfPBnEnxKSWSaJ59wwxdTRUi6dkZ9Ust",
  "key40": "48ia3QydX4So1yJ9Jv1Wg5UeFD2F8yt7GgNezN4WxFTpe7jzyWBYSLv64GNtnzKq7r3kAyzZkexu1QdNGm8DHrtx",
  "key41": "4Ci9oajinfV5FbX8Lfr3PXUkju73ytoCRPbbcekFmvqssZm4eFn4KWXJZAVtMjCTSggQKGoHtGfyx8bc8yXSXxDM",
  "key42": "4pYUoSB2pP9nRRcgMnJpQaqDSbWr2sj5pJ96oFhGhFU4zV66kFxNiTSox2yUfQkNdL27mkjhXmk1HFBHVezpggHe",
  "key43": "5ma76JxEqGACH7LPf91z3gz8VsvoDBaiPWW39hR3puh6jhERkf6Azd4eue5Xg436uNAWboYZkRfPyZyLvxN7gPbw",
  "key44": "R5ryppFFGvFZPPs3sMBpqMSjkmyHAAZAm1Zt7DZaBGFvydfLiDkBPMuBqD7k3Pc451GC5WnoyFrzsfnkWeiGPW7",
  "key45": "BxABfD7bgRFbnu1inKzAQponzvzx8dDtjuCQqQW2X3rTtT75EXEPyeHVNwr6ogbkVG1LzREVJkGoiwMNcqCaMZb",
  "key46": "2cqB6b4nbRgZz4GFDp8oUpDF3Ms4hF4vBh6qNa2ChCjEfhmAHQ9LhMbomjCCcLLNWqvi5zEwfmCHb7GgnxBPLmjh",
  "key47": "25XoTkzd1xNSwrknaHgQNY1NwA1hDEUmAWANS5t7ssAcmPMRcCmyjU6KMKNEQmsKpwvWiMFYJGf7ktZsjpUDoSVv"
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
