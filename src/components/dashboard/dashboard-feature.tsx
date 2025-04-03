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
    "5xVDhnFpLjiWJDf36EHtPbUhjSJeYCmqhD6AV7G9vNoshtkujpRauwJH4SmKssSXPvziCt8mdd7TNuk2aLtk1bvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a7nFF6Nme9d5kT3i61jMwHHg1Bi3ipJ6bUuFxSc1h3muyhDF6aiRsp5sTSmBbtTVbCoyw8do2vF3E3GNieJCotF",
  "key1": "3z9xhu8tCqArdQLC13PwQpWSb81CdggRKe4pvmXf95NQDpCdNRN5aoobedmgMUS2uoxCmuhvb9vGutyWRp3ySinz",
  "key2": "3KkoZNkQb4zsCYYCvrBDzp8LEX4chnruMLwKjNQ8DdNvLNUEywvqUSyphQz9A6dxwW8qZbpBrvJhUW2vC6dwHokX",
  "key3": "5CFEaspt1SWPT9VB8JUxfr6a133aHXrorenqUXdB3HW6CWUZFPV3DAsUeKtD1TF3BkRjZuVpShv6nG7R6xUDtcq7",
  "key4": "cmRHwpQUq8rvBEtUyx9vGBAo2RV43wv4FbrcHdE4h9ZGt3fbZ38kX7gLvfi9jewZwg1MkRYnJ3mwQWjzURjZjdf",
  "key5": "L8fKc515k3ZZdZNEjfyWkAvriYWy5HmmQGAV8CqtgUFjFKs9MTsFxtcNPJG57omuWd1hcWwuXp7YLjVLYrbfPZJ",
  "key6": "4JpkgFBQe9ATMUPtftFcLQy2aVGmpXpfUW4AtVENVKGZ9DudmN18YxbyxrGLGzHaPETFoQgWQcDyiPnrZ3JqWkrP",
  "key7": "2un3W9d5Zrd1HovSbd6UuQ48p3mDjXTw8FZe2AAPLgtadPPpMvuGxfxF7NGa4fcQveEXNWQRB2XaDJ8X6JKByacJ",
  "key8": "2PWfWNwC1DzRVzFcBzB8Lv6HeoATUbfzYi9T18zxRDwZyMXa2JxkT64xCbEHRgioTz6gwnuFMBVkzm7y4dWcAeMo",
  "key9": "4vZdVD6rszekR5LkUL28JQTyy3bEqij59mAqydVhSvs1ciRkBsb2dMVPNJJZPBeMWdmm6CiuV9g5sbF4jQcGR49e",
  "key10": "3CVXHenrsDm1XLfVWqUjPfpnKNzcPRtEkfaBuiyarc38edgsTLYxiRX8QMNHuL9cgGeXBBosCo52hBZYVbGDt3yU",
  "key11": "4ea83v8hyQLvPU4b3AXY8jVbTDkbMruKWr9Xv2xiF67evy1CdtwcVAgQignZoYCzq2ocjQiB83v9E8gXYxDqnymN",
  "key12": "yGTrGMt5kxqJZEao3QU3gVRQY11UaEnN3QTvGHsXwBCkwWjT9Gzft7KbzHPRamjeBxdb2MP8kreTEUX4g7EyyGF",
  "key13": "5EjbJgBBWhpyWW9EaGFmx7fwozRz4LX2f6H1WvERhe96X5BUk7PSZBh8QLkMsU3Gi1SzLA5qPTrKimC7bGLtiXRW",
  "key14": "2QmpGJoBibbRQjvCZNKd35Cd4uyQhQxhUENnfHjM9oXuZXt1ZvYhGTJ15jAfMA9KHYvYFpuak8fVeu1mQqFJh2t8",
  "key15": "2kwWu1YFhUNsrLRHKJrfZz4bJ3sbix9XbFMUfuEhtCMerQnzNj9hgrqRmGqoTgyQoWqBNF6gPvJfjSCrBUMLWuNy",
  "key16": "BKuSbZhk75st7ABNdn81CcMSKLPULh4eRCQ7BnScfFEdWXgP9dYE3X8nPFnAtdQL4uTZ6SoxrhxD2REdxs6rJyV",
  "key17": "Yzn9KMgMxAnnhpMHeFUPi3YkPbs4haK8GBBAWhwETXKvHPNpQpFwBoDcUXmhtCicLbXHn2ZAR3PX6qJ38zpFuE9",
  "key18": "29eqFHrb8z1yVpt3F7cMyrQBEq7MeA1nwnq68Gon2RiwNw2XDyeJCjfC2wtg3vJ6BrzZkfSmQXXH8LHE2XgdW7tK",
  "key19": "fJh2PAxEDS68Xm6kY9gppFTUesdUAvujDYBJRiwaiJXHRqWsLG3p3sRk6LU88Ly1Cqa8MuTNWd2SRofAqiaKrj1",
  "key20": "2YQsPwbaJWm8WaS8ZQBBuiUGF5tMRHuEfcCoDmF8GmdCR9vyF2FCEvfhhDJsgcxxqW1MnErURNUPrRoMVre3r7UB",
  "key21": "tZNDCtK15Pcb4j1xpnWsmiU1D1fQF5MZvR955EbsUC2MEgacmftrHxULB94x39DVYeyNubBgzXf6s5UG5vTMkDC",
  "key22": "t4PP4DdgtiTS9wer252fuATByLZf4RajgFWD1yVUegCgEd9cGzpxoCSobjbMcV6rXf39Ai2BA5hb2ZquGSr9Dph",
  "key23": "2aFw72mmZtgARHLEpRYYkHJQFRswzkjGj1hYzq7kMMXNKXSYQ5SrwipVCqwA9cn9EiRqQQpAvoAk16srQSquWqgB",
  "key24": "3zLy3oJmdYfBBfFL7vwwUChVrXuCfzyqKPddgso1pd1qPmzwZnoV1ZXuxwcteXjiSN6yAmVUGrW2B2t66mkRD4ic",
  "key25": "2jkZKVhMVhZVRL88jnHDNdeh9jif6173ZGAaPW9hr3JLDUqBzzuDXreM2RniLHz51E7QUGT8QhrRs1S9oXVMraDY",
  "key26": "51xda9Z5Y4WHsYqy7tSMnZEaPkdUa1fmg1op2Rb31bPsaBQeRRD44dTQio1BNPMfr2XJUpRHijNNnkn34SVrQt5s",
  "key27": "3Nad9ATagJTE6M35cnMJ5AThnqUum8CqscW4C4h29n6RxY9zxcU6qZ8XNYRrhkh9Ah3vLiPnRYQ6mYWMzt7JJNDu",
  "key28": "WUdDVeCpLHBAwS6pUh5R6yumgT7JzuHiyzo7LDso8KoHN8VamLgrHaDUdjgXYDCsMsLkj7ch9si6MbtKwdAm2Bu",
  "key29": "Tx4agRcaimsuZcVKzFxh1B7zVYgdWu3vD37EEiJm4vDrcwgB6VKU1GascV3FVX22bW6duSQj6KD4PXrpwaEEXDX",
  "key30": "hspQHWV2hnSxxwP55jrKGtKTmvuuM3nhR5dCY2pRNzhqVAVu29uPFBwZDT8ezVcGRRuyr89tDhvjozg66mUvhAc",
  "key31": "BKh3ctKpAgguq7YJtCZw5sTEcujk4xcaPKDzo9iVKTzEExKLuknfzrUAUm1MHJ5eUBqGBWQhomdGbydDbZjLwYd",
  "key32": "3QyhpmiVqwdb1or6NyfRnKSw3FwEe4Qei6B63j72LDyfDonDWkRxqDQq3KVsCQqwoKMpfbstfWo8xXbfALQkGc7E",
  "key33": "2pPHDq1CJAFwxqPcxwi2TpCb6RKHVgtNYLc57V6CHfoCHrNtZkQ21VHk4pWHghB4ruyCCmouCWZpw3ufHsSWHY5A",
  "key34": "66yGLGzB9xEVJLiTVKEBHpRhawHjWpsogR7byNeLw8Fs8AstMyzZFLpM4rXg8J2G5xdycPq4zRhj7xQyxJ3cGq5g",
  "key35": "618niZjHwB6d9AAr4d8FNo5WZBi49zYuAtodMiMtaAtqCACriowahnti7163bKc61Q8KF9wAmJwdtuLbTkXr3za8",
  "key36": "5vyy9MZbggMMwQGoCtdyEjnpr5K9UuG58ahYJZ2jgtTQpfmiPWx6TJLiaxDrqoVKxZbHbJqUTBhEVyWtz8QPQDU7",
  "key37": "4aztN5BMAcwPXC9q27J6Ny8G2BhfN6CuUHw3y5owStzMqk9D9YCLYz5HXcSsP2YTYEByASU9rK11nU1WvWJjr2x3",
  "key38": "5Q4dqHxHAByTEqMonMx2aaZdw4ZUpaVzzaTL7Q84YMg4y1MtVAC78bnQx7fjtPVUEPhLKDS4PwcGDQWjJwr3hT56",
  "key39": "3rbuZh5fy3PjhzZMmrqMSquj7hHGaUenaC7mzXKRHn7scxverikPbFLzdqa84uj4ZtVsREtuLBo3wSJFtnCv2g1A"
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
