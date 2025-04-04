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
    "5EAmFKQoYseY8T1xbGgDV8n2CkXnJo7KPLaecWDRbtuEpo7yLs1nuSr54FCLsVPkWctFh1oMmbHswDJAMAipQVRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X2iKQ5FvpCnvvV3gjpzRWZuqhL8QmRRJwfLkzh2F2drHgxkEhpZ2eULBqZEydDcR78A4jxSa8vSwfDrQNLLUCod",
  "key1": "5qgKK92dj7AQB6UrWatqDwmvcFHrYwwB1s6GqxA919Mn7R7HVmLE5yZfT23ypT7mAKDqcVdbuy1z69FVAXGJwKzm",
  "key2": "5unXTZNBULoXNUqsjEoDcwF7tmKWKu4gjnjzwTMyMbkdP36JYVQNbAoxBsRCrt5LkSHSAutKgxDSEsER98bNEFsL",
  "key3": "49DjB6D7WBNDkQwaDHNKEURVvfWboHat34QchVor9E6oc6t5ye93YbMEpxtf19CNrAKcPFkQsHMhDuR3UAgZxLMx",
  "key4": "3EH6cpsunhimjKsu92TWL6yaR8irSpm7tEK86sQpJhX39HoaFd5MbCbLXoG8SCBhoHExdcttzv47yVJcp4mSiMQq",
  "key5": "RioFB4vXCaxtoqKx3Mm6kY2wruELjWVvhkZMCf4VazjHJ11jZu3u5EUyyr2bfhxdsRvdz77AtZCJc1YsM1c25Q7",
  "key6": "2XLW3XnK5dHTMSTtPET8q4gGmtEpS9xjz3dQkdcHsdKY8FM2wZWmSCsN8aUmwWhXPRVFb4kyR6mojYi1a6iiwSS2",
  "key7": "2maEL6nTsorTvanP6NjApjMy6Zr8RTqSwueyUTDE9srXuoAJTb9ena98dhUGePR8WwEazGJqjdkLxGBFMoWhwgh5",
  "key8": "2ABCLcJeE4keYBqiVDrZfqBh66yR1wJ18NW7dQ8M3mvjfrZcvpGNGX6cGDZdKMFyJ2fEmeEADEL9ASQbT55s6wrs",
  "key9": "3icP7yVqJ9jH23KmBni6HwZAizPJhFnoGsNKYqVtDEB36tJib67Jje6dGg3qu4dnwKgXY69XKonsQPzKohtmEDug",
  "key10": "3U5VCYZCUugYhMACpL3ARdHdoa29Dekbc3JjDYTWB1qruUwXMGj1KEdTaWyEJncNtSLFFHR3arEtBkgpoZoTzJ84",
  "key11": "2TZ7qCJU5MuKCXiR4uVgCEB6EfebveyrBKktijjRMRuXfBcocwQFpDJXcAJNkcAhuaVZBK1vUEJkNor3HdSLAi9F",
  "key12": "2QJZopY7RSNiTkcEfPTX9XsVnNSpoSYCFJjZB2fopNo9ogNshrzLMKZ1YKUem6DybzfF3y45r3TMvWVWQwM5Sr1i",
  "key13": "4VBTRYv47iw4L735vipMzeHVRs9cRCLJtVT5a2ivWEPvxB5bobMJYPNWbCRQdeoASm5WmUn2DM6bmvhB1rAYogT",
  "key14": "5ijMxzXu8PWMUJBZ5KaTxXe1ADuRxayeW5LR8p6vr5ZUXFQozL2mUposGgf61us6uYLBbjYhLHXbcq7NubtxSfws",
  "key15": "3RvciwYp2Zr7vnqRFTMPsx1GXEtUeTzyMRcborFSuy5ZSCGJftiZVtTnZ5b3YD6fhkeg6uJcMgfctwy5Y6LqFAgj",
  "key16": "Es5LL8Loh4ePVKdS798wJPy7fRLcmMEUZZZT92AvNPNHcgxC2P19NkFS3dmx5S7czdbbpSfENkosSsebs8k9CnV",
  "key17": "42QYRNpDn7Tt1HyWVSa6byV3Ch3ZsEFJfjKb6NrTYD42YoRb4xxmcB3cGeYuMNzasKniAZCocmDS5baMwxoDzgg",
  "key18": "7FJ2Lc5LUHUdVb97Jf3v9jK6gPZK9U7ee5JYATKvNvS2uwjpem7HmoRJeDUT1pRjDM36pPP6NFAyp6EzqRnMm6z",
  "key19": "3CRYaYhiTsCRN7PstuqpVqNDkcpJCJ9P93GTFXod7VM1f16spCno4ZvZsMijFsbLnW37rfygteVoW8atchKJwRpU",
  "key20": "MsPNHbTh1FZgwHfb5D1g41eMrd4vDvDoQfagp1GUYC3GzXnE7ZUFqS4TAT1B2HL77ipnvUgATwvG8EEJypytA7n",
  "key21": "VztNWhGdAiDCmJd3LRjYPYdpVaj7pxi6MBaxTLRJV1UHaK4QQ8F9afu88bPqA1fkdrLy7zreMYAqNfiDheeEZWw",
  "key22": "65Q4gU1Q25iVGHPVFM1NePpa97fHE7KTc9vETRhZSR6FsYQnFY7y6mMyfMZhajmgP713f76usyvtL5zzPdF59RD9",
  "key23": "28TjuV5i7XqFmJWUVCFYXwTTr73STT79EVMPFvxvV4EmyHTe6JYJFG6dhHdKkN92tPdPEekLjsGHEe9RRLSWCiAE",
  "key24": "42HMnRnAZsNmpqAnpUWCQRVB42kgtUu15Dbdur3TZcewfQz8BQGmzLfgWbdaNRdk2yJeBDhpR5VeQPWtcDwkUX82",
  "key25": "26d1V55BqG5AUExr9K2kqfTnggFFqUJahXe2qWCPLuWnR95qEKR7VojdqD4tDiUjeDVhvBgD7qmjJ7rzkmU2hMf1",
  "key26": "4F2pwDp5nQb4JuB8tNu7dk7NMg2jwiDcD83doGSuZT9QfDKJXpqn4YDfUVfxfL91PKp4sE4eWmSYerRuJb6eaSCc",
  "key27": "59ofrGDRFUMKHyCjL9wbjBEnAM7yR2dRrNnN9Mn5fCRMD4s1K2KcsojGoRa2owrsqFH8C8YdsjL29UodfuR4nY8H",
  "key28": "3RKfm7YBy5axGXzZfZREDBVKxUj563o5JjPf7dCUsMrRqTsdgMfzgFrzgYvPd2jjsuvRXymTkMHJgYQroWhvFMit",
  "key29": "2bEuw7ivot4NtwetH1yJqwjtqyWY5zpFpBrLwUUXynwNXyP74tsZGGkFHouSR2zQPXiGrjDoubur8vr4r4bzbysy",
  "key30": "2UGToeyrVR2mPQiA2nADPs7BC8banTJbk8RbzjoJ57QZhm78RSLVqdxfLg5ESAus9uCrHhpwSutmFUDmn6AQk8CN",
  "key31": "66WvzNZqvKsZjEeCmt8emeg8sR3RyFdjeJg8sFSAn9PTCFbiVu5yBUy1Zn2pDm2LTQJaBGosPzkaoeoajf6sJbuY",
  "key32": "3iDYj8MgJAwHkdmdDPypywU44ASt2bkPxZa3cnYoqAZK8qDtEE5aeJyQsZF1RvVNyZcwV5VZAcdWwDxqTmJwzCRT",
  "key33": "fQxCSkht3vPtTumb6xw4rZWbAqC1vgwm88DgXf5Cf6c9DvhZVxM3RvxWnDXAhpeTjYXy4Q6VZQjMiQ6BiDz7seW",
  "key34": "4B6gdSqjhDzR1uDkED3GKTrvDXAXDWcqLMLTSKSP5y1jQuDsZa6wLw7gVFcGdtu63GJiT2zR552oNan8bcTSMKW1",
  "key35": "3ZK5RznFjb6D9CrcdtAipD4TxisyK8aBwKH9NtBJRWj8r9ED6s6gbqPRCkPbYPM3vRLAwPYmPupk99XHDQoS3Nzn",
  "key36": "5pu7G3UfbkzFSjPFVz39WFSRB99Kn5SSxaiPLzgDjX52HPusCCX7n2ajonU5FiSbzDdHsq5nVebGmwVbtR5hJD7",
  "key37": "62hGyULAPTAdZCJcVMoQHg14puhJxsaTM9KwfwdZa7wJHr9TaY4rKw3Z3By19ofuKfwp4F5wa3gTH5FbBH2drbzf",
  "key38": "5EHRUcGC9Kj1eSKpv5neu5sQsByDCLmk2dW1Pw6CodykreLbKGohnvez7mTfEM7b6tNc8PpuNDECR7M1YZ61hVnh",
  "key39": "3RDgPNhABf6fHDiwwYtz4GRR3JHCfua2Z9DkFyB4G89NiRkaZ3tNGyQ9d51HVdXxPzqjBeVX6Vk3KoBevVTf8sKC",
  "key40": "4kCU6n1tGXu4KdEVX6mLwKFJcyFeDxs6iRYAjr5iVJq45LgubqJmDaLB8SitZWo2n6HUvpzpdF5aUFvtykCaZ2wG",
  "key41": "YnwerkWy1Q3ovfzWUR4n2Vws6Z8bhDzNqH81jhiovsgmf5w9L2zYtxPVxPxSNq9CUkkwFhBzJmdj9ozvqsyk1f3",
  "key42": "4GK32TPtqrgiVVrVyBHxxDpB2vpcBCTownKjaBN3kMwi15VBufVbV9Kg4KeBCnHQYKarkFyCTPJV3urAabEjAT7V",
  "key43": "8dM8b93bMaMD9N1XmZkCvnyFkS8bi3uVs6uUuQfoHtZ1CGrUVwy2y2rziSa8BpSsVV2xtJoqE7JijCyj49rP8LN",
  "key44": "B7v2akiJvjCWzm9oNVxw6MPkfpaRaFMcUaYhkCphZ9X7r25wCTGQkBMgXawRX5KqXq6qL7QebKcqjjMTw3EwdA9",
  "key45": "3H4TnQAJy4Ha8p5qKtHwAPfY5m74L5pjcV425TGDBa9wo4XTB6biLUx8KJH98gwg7ZnEkhicLaza4BLoswWFExD3",
  "key46": "3gjHxCcBdWHhLdJARGbBdTLHUXPwWYhUxC8yy8SrFKCVw8BEpzZm9M6Wa5AiwYdyReuns2j1sVNrphjeTJoz65qg",
  "key47": "cdZmUBKXNihvzSDzzxwV5cwd1N2fNqWqXSa47heKuKMaB1byVkjsz9Jy4iC5UCATWWK2KMtnsL8qeouavSy7brK",
  "key48": "4CwkTNFg6tgfnZYGpYG8R7miiw8jG1MEHzrUrwR7F2vDtK4gyLHKL1Rf19Qk2LphKJsSmAuZZosDfMyhssfHExiR",
  "key49": "5Qnuj79nXSwb3i6pkV3P9QhZGPJ3DwNgQKX2bwLiqbjK7ZLcC9KejGU7bby1eVpGhw2CqHbYNLEBd16xFzUgAsyG"
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
