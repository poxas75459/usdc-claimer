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
    "3bk1yU6ECJ2aj5jx5wh3eRFGewizm3m2qsNhXsEwA7kAVBAa9mC6kLM7G5zyQDU6XA6vYKN3AaAJShgy2rn64CrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S4MBUmtrRtLdRUKx2yc7JHHhpzj6oV94GD9MMtPL3FysN5WLoe3HGxK9H6dsnesWVYF33yK2d39Xwvs8GiRw6Gd",
  "key1": "5nCqUp4gzeip1anCSEmuMBvrsWnqi25AYnH9WKuctMZpCXbpuWkEwa49grSE8nqfQNtZwWcHpSehjD8pmsVzr1KS",
  "key2": "4E2VyKM9Jio2QfJM3L3r1mgQZJWjyw6o8rh1HZ2DF9rcfeqs95cjeduZkH65fa84v4qBojdjNdKQBEHNMtNoHjZQ",
  "key3": "M5oSmGA4SnPVfJ5KqnPun4EepbhPaS5iSAKcB4ozKv4YKGHDrFfqbf2s4oETfZLZ35NwyKxcbVxV8gZewWfXqGd",
  "key4": "QA7esT8mm7ycwphqaZuUq8RaNqzZtZEavmVSt3gfP7csHs6kD4zHyNtX8VHLnAzSwZNqtKqKMdNJkTyA5w1kwfr",
  "key5": "57jndBMfRT3bsekP3pPnhaEXWPvv9crPx2uSAmRHoeaU6PB1RP3UGD9kXMRraL8mYMQdRauP8vFsymxaJkcxrcGp",
  "key6": "3AQ9aJ8EBpcKqzB4e7mxdJDP3PoHM7P1KT7DiWRy7eN51MaExrqK4LsMvnGbdA596S1XNx6uzsad2vpZgMFq77Eb",
  "key7": "2rsGNQgDHAYYNrz2Bxq85zDhboFzWym6cMaLKT544cq835gFJWxrTZ8Wix9JyJ3HjVkwWsSHioJsu5mYcSnWXWsT",
  "key8": "3HDCpxHu9fqPN4At9JCZaEsSyyU3yey4YHYoYPPLXoszoWMJArHFyzfedfNRzfJHHs4V5AybCghSuskw9a7dqCcC",
  "key9": "27J69VpcGPY6Aq3ErJSLnq7EPa4QZQnENmcTisghPwWmq5X5ji5TFMrXDXGidhPp6NXwMYUVxDY4oRq2mNW8oCnA",
  "key10": "3inmd6EbvNvug7zk2UJ5t3TvZbgZd3S4RqDXeeGbux9kwmVbJ3VW7dMJ4GSxXYnwg4nKqKhusjYmLvtPGuFNQL3Y",
  "key11": "4NmsAw9xTTrRVewZb1ZyMHKRhohDZHZdYTy2vAKYypQ7MbA9SjcsqSM1WLKfvrTKUyydeCG6KWpBUgwTDZNvDcWF",
  "key12": "TAyFhgE5Rvm6Hw6AgYWxEjLFPVdBrDmTxMuZpbs3ZGN6jbWvZdHHvV1ewXWB2gDzVAe52eV3CReqCghBs87Ghj9",
  "key13": "5MVEpwJUspWjADj9raHdGGw9txsKXouPdBCF7Wnf8AbCsg7FpZNvpNEuq5Eo83kchDWv2dV8w48Ta7zqRerz5EhF",
  "key14": "3xt8Jc8ZiDCUS8tcdaWPxcuzky1XBvpfDqgckZBR71HCnwkt5MvwRgEXJcJpQusKEiUGmw3ZMqG7zFysWaCggS6G",
  "key15": "22JdMbUj8unbws59KKAMvdXW5bcBQ434hw5UVFtknjPE95Erfb4iogAtUFUGkm1gqfeNxCUt84foBqcTQQeuaNZt",
  "key16": "4L3raVcKunEv8xVZphzD9sbf7Xt5oY2neTyJVgKsSLXq4JoAxhqymdXH1938bm93GLZLg8Fnh6iKE2T7ttXzVzg8",
  "key17": "A61G3tv9QevA4PJ4G3SF7DezvByZW7DMjqXuCaqKzNebjtmcJpaHX8RgmMTGuWcoThaJ3427v11UdT3rye3vkdD",
  "key18": "3y8fSRcHUPutCLrX8RAXuN5CXuD9ApK61RhPDUFpJTNFYgLFS2cdh4LBCEBn5HMLpqmLPHLbE2dEmd3i5oQR3xsc",
  "key19": "3xw84eeKQ6dqbHruYxBPCwsMom9WmGYCZS3dxnHNSY6hKfZ732ohRPEA86BnPg9Kvho9R4MPVSBynkv2gQuFmKyZ",
  "key20": "9sWDKQBefJkSKtnji74tqfbVHTWMz7ffAKCpXSffbo8cB2Q8VK7CYNm75r5vuHTxcxWMXwv1t5iNw1UZ3qJ12S3",
  "key21": "37SykNAG6prRV9EWJsDG9EGattcndw5nWbaPs5Jf97rrERC29cChDvDy8c7n2dBGPMwZ4dLER7xyXZphh8Q5D9vJ",
  "key22": "28ULV54jFisthySTEJEXE1kC4N3oEWNmy7tjBFf3b4bs7ti8wSNnh2HDeKGb7jnHU1Hu5ciwJaCDFHHiE9pbYy9f",
  "key23": "bzArWM6vjRp9Avadshm9Fjxzg4PeK9u9AUof3F1tkjzj6EQXAsfHk5UzqcuNmgYofJrtU7N8sMKWy1xwRyiDADj",
  "key24": "32Y6xGVf4QDHCwtwEd6qUqfKicDpa3fwtH3xDFBSFiLNBDBXcwKsmeZAMZTpuLXePCV5AUK7Vt3SjDAoJGkAPcvD",
  "key25": "54gmvjKyaTB6DaUwq7LitpZxahSzxpHoKYWPQgD9b1fXYdV2RcGDWveQ7g4Rk5Va1eF2cjKhzHbrH95frcbzPH7N",
  "key26": "4YAU26ChUFLcaS4Co3XXafugU7VWWvU1MpWm26ssAqX9BEff98Gc9ZfaDA6EXmWfFfCcxtwAQQo1dJL4aTGv2hnZ",
  "key27": "5aG4aoBEKCeDUMc6LHzx57wsrVPb261wwn6NuRT9BocTJoCpuWDzxZEFBhsFtcQLqxokvHjB5PpPFFnzdCmXBM21",
  "key28": "49LoP2fAJ3k91qgQhy1rT6idxpVZJsLBQ8vVWjpwzuadTY4xEkrJcJvTJHNA4sWwWfkRjkz4QZgJfsFSJUH8bQjx",
  "key29": "3NHrD9oEpLdQURpRkcciKDfk3VVLQvUojYGzvx3rdSzyTQq1Uzawir7FCr5GM5vM58kA5YY3omjWBZEBc6KZMQGa",
  "key30": "65RBcKJjwZq3qGWDvcYqE2dkwh3FD94U5FPQx93628XhXmDRyScX52z1kfBVdXJJxajmMZF97cZaMFFDvzmQqUin",
  "key31": "5xv1MiwfnURGj5Czts5EbsN7imKqkLum9rHfrSbgdN8hN2AUXhN7PNbKfQNZN8V9tBZnSYXYbGeGu2nb1F7hCwTk",
  "key32": "2R99RDvFrc5YXwCaWxY8z6u4X9oftusKJD4KE7FLUfW9dfA1n7uUdEyYgk29PgwzUB9eBPoxCN5Dk3pyZpJkBCCg",
  "key33": "4BcnapSzHMCF6zQKfz8zBvEVgCHNjQBwYPJLj3sr1FADMU3dQsUdoe2KT4CerskYiH3bGHPg8fRD3as5Xxdhu8fR",
  "key34": "31ance6CDMyxAtyEaPEFrCxYPyRmSJonCyFHsx8JYHaTQCdHeqg53PZiSLYoRfNs3zaYPLy7PRDsm6UPQRvufhMD",
  "key35": "3HBfSWrxUxVYC11oFjnoeDZFVWmrTz2CNwLCXbEU2jZALCHT7CmAmJNPUPd9i4y37gkk3VkrsxDp8oGgGKXLCpPE",
  "key36": "3o6gTu4Cx4b2dm5g8TBdQztmVPvn5ryix8DUvnr2DNZ67q4twjipVdEDo25Ay73qqV4Hm8kcCJ97mCQKMCU44Tky",
  "key37": "3k51cXubnuMx6L2FNsWdpovW6j8es1xNuVMT5Agra97rRNuvrm4raBPp4xjXhEQ6aVXPEnHdvdAGPFCdssWjWLaY",
  "key38": "2Pjiim1JfJwvm22sLpZyKQVK2t8Wu52yp3L96kZoRaovahe7v2bU6JKVPSv6rnkxhhHVPKcR4mr4vyr89CgH8bk5",
  "key39": "fr5mcCggQb4YYT22TYJgGi24RHpmXQ4g1XWpDiNxP1nKcosk4Ar8p9wceQm1La8VPETTxSEL7VmKfzawCGrepGy",
  "key40": "2VFpbhKQY6ndwAuESZPwhZhM6cPrtmTKcL5hFSUQmu8omAb3BMRuYbG7MyxogXP5BWYRepinfFMGZYuLg7SnVNKh",
  "key41": "2jmvqwvJDsxJt5YATw5uGb7pwWVUyJpQud3zd4vWNdDjLVk7gjQNMoL9mEwGV23EhqaYUtRu36E3c7SVPPpZ1khJ",
  "key42": "2DnYGNHv5JS6Mn47UN3XAVkDhSjKR9gjTCMBPsUEUPFM1JpfyufYU97LYo4vKAaQwZRJ5JC33z8qvD6C4Qbo8cXf",
  "key43": "nq8urjnqjPaMAVzgbmVeL4z4Zyoa1nUJYEFQZtiHFg6whMTrCHUwRZ4MeNAxDnpqyPtDCF5DKzNzvNRj5SoxMZj",
  "key44": "5UqTgr9zCAQHiAegKeW4u1rMYkSJ5bkf1X3Nq86KLz35BYmPDssBGkDNgxg6VVya9GG4P6jJPpm4KXPWufdNjeJ6"
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
