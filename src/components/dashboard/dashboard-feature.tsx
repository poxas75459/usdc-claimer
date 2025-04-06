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
    "4ynErsS6wwmtdMN1jf7Vy3wEdSQWps3WYyG7R5CxDTsvVC6Ffps2d8HNYNAGwaq5t7vvbSkUPiH2cZkqwhRDcWGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41788m4xgvd8EYzLeE4FBMrHNuZ6wLD6kZqsbi6UsdN6wA45yNi5YceGYk187GBDK4WkcC47jdwxzspFK687aNyM",
  "key1": "AyDWx9x9L6Knvg4VgNPZqjzgVMP3PtyxbRPf8bcXeckrdN6atGqGYDT5iKTVyDQoeMw4rhDXmi4NnvJr2XuSREt",
  "key2": "2PqHuWaviVvt34Ah5ModfDQvDGvkB1jhjttFLto2ziFf9XUijs6hz3Z5VfS2hjHwNK8UC3jXC7QZn1MkKDuncPmd",
  "key3": "4Mv5mMaCMmeBsUNnicLqKKFvxCHFSAzDHQy2gyEKYfRXWn94vv2QuBhgiDCSWu9zQ6sK2tYeyWwcVkYrsoy3TG75",
  "key4": "YY5A5xmzxv24Jt2Ey9BcCwEnEWqcJnPiWY8mQLwkguScgLXGLg8UGuyzC74Dtww7JWD7xagBDv1dfQhDyNoxmFf",
  "key5": "5XeMm2Pcr55xTyfwSCT5VLFJsytCi61nZ75Yp8fEVWzzAgz2N4saZqWu6C56UEYzw9Mbt7niGRo37iSATMnUUNpr",
  "key6": "5WH8uyYfWukwQXWahbGBBcbbR2MXkLFrA9TTQYZArURjaxqiL9pkkqUEGkQPaqQHdKwxa4NPcANm6kqXa4Eia1G8",
  "key7": "7hfH374froqAaHRnL5ZYtkvAmD9zDEEK2cXpSSyFKZvFLPMxGVm258Tv1mQDot5bwgzVJgWvG5cv86Rkt4c6vXV",
  "key8": "3hHnAMqcULpdtqV6oiifLDnb4G6P1ntyVKekMj6udxL45G3qht9tEJEWwYDFsYGnr9MnTBpsncyau68bsjE5BD7X",
  "key9": "39Zwjosdh7VRtyc6h8NqJnKoYUszgzFkES5Qv7WWCN3pj7ofZPGopqVBKgZA92YZQvaPLQ65ttvFJQ7zPWhMm9mC",
  "key10": "5Lr9GFjgvbLS6t2x3DBx6Wq2eL1ZUUjs7bBmivdCry7o3AtRPKGr2KdJyMtL1yjg6trgPj54WP9fbHFHMwxDzR7r",
  "key11": "3BaDGuwrc2KhEKZVLY8vs2RnJVh68SVSZ4Q4WzP1C5jrKQKasLPZtLBZMGqQTW7ZsweGf2y2Zju6dwfMmGLBnvmL",
  "key12": "5XUYvEBtsn88YLXwRwVjuDyGWbDgLw3jBHZhK18gaZiA6BcZ9Ro69ZzUYnnoWqHLkQGW6bsRRWWsvvePtEXUYVAv",
  "key13": "KxSRrfUxoVJCL3fY83GZtKfnkVhQCxFv9uDAh9qBJN5sf4kC27QdHWqGiHMZqbbnUxqqcNj9K1yRfYo6TohJF5k",
  "key14": "3Kj8MDZAnruqVhwWzJ2HCS3qKV5d9QssZt15ogCSsJQb32rqaeDt9US11WPYWKX7QrnmHPcqQnHxHNiUueGbSx4C",
  "key15": "5JqboRA81TNf8XTiiCEvGPHHyYYQnyq83kuEajvXvChPjwx7WM7uaNSbttQ5tetq6rt5szbNseNHXQZpgGifCfWz",
  "key16": "5Hthgc4GTwq4abhKx4Ftn3T5Wb4DoqkqpXRy3Mfn5zmMcMvfZBT6a29TecshUUDJCjQYEKhnPsqVb8Uq8yP8Q3Sw",
  "key17": "3eik4ovJRg3vgdgpkD1x9DuvX8wqoNVUWednYNwgiVJemGVAfosPBWxsj6QvN1U1DohwJrQLFQ7EqQjWnsydQ71C",
  "key18": "4xdL1QbTTsUBc4QBuWsCLWYK5UBfk4UqmEv7wJPQi9py99XVoRigTPPjaLSBnsLzU6qJT7XtWbngMg3ew23zUNXZ",
  "key19": "JZ63FrNfFSe7HuRPYjqEktj4AFktLbhMyzsJmSprHnvyVHQKa81m9F95qPVNjfNJyacZJLAAnXWSBpLgZRvFCiK",
  "key20": "2VfTjSL28zDcBZkAUHAdxFRjj47VSVxBaj41kXUt5EGxURG89PU9Gv1MvjoCvYLLuUrKU2RuSfWYcG3u7qB6jpgS",
  "key21": "5VQGeBoTQLTjFB1xmZQGAQF55JJ9zTZpH847PbdgjneJx4TKiin2nuL4nQQXG2qj4dWvNLXCuHKEWfFqcqGWD374",
  "key22": "63UJkuuJyX8G12687hpqjuppgnRSho5q9SSRAhA4CtyVX9vcRxjeuzevmXjXjuSAe5YyaQdd8g7pzhnrHw3heTki",
  "key23": "CBB5MVewFy7imfJHfdXw7WTa7s6cTP8kYRftRum9iDNBjNvDwaT4K14yD85t8fUJg4a8BS6zLZNy8Qz1hUXQxAH",
  "key24": "3YwZNYwMUorUuufk1HrvrvvsZECYpD3AuY4kCZCgyg9fPqjS5BmgEUdAeWej8kzHgdoiLZajkiLjLW1fkQ1W8L5f",
  "key25": "Qb7ShiL5GPaXZHWJboxtvVVNceVTsCPJXQ33a11Td1mk51PVmWKR3tYqShn9ZGh9CpELeNdpAPNpfeq2hMhkTWJ",
  "key26": "4m8UNzXk5ayNzUcYDXPDmFvAprvkivK5U7tHCpQhdTYTsvicxLRj93W8LxhBdhgaLj81T2rh3QXUx676bwgdjaUD",
  "key27": "44uxJhzj8wnZhBXsL1s8dyPfDFEhnSGvXpKHpHSU85V39cN7pmL43ehDGZ7B6ahWrzPqpMHGZDneKVz15KsuXfUu",
  "key28": "4RNaDHgguZPMn7BXLE1R2TE5fseGdSjy45dqYHwM4rB9knc6ijkuWXNWAboJhvGwt2tu3nQhUZHWwPTjieGT9pYp",
  "key29": "2bFYNoWnCDQjWnmABatv8vkhqvDreyTaRwhrVrx33NBnb6NCV7ijfep1KEJz6EV2zeMHHP2f5gbmkrqohQkvySTv",
  "key30": "54UFiaYfz7hqEdTjfFD2mw4T1nbx42fwL3DVrQXeNqFnryHHkcGEgYetJAhq2qkKndDHWqEwgyoVdrt2ZaMJjk1g",
  "key31": "3gMo5JKaGvx94ewxNdZjbxrEo6w2Jiu8twAgPQD9Vr75sSCq37ERwrdvYyRV1oU9XKhMfqUPXMaVF3LoE5zju2hj",
  "key32": "4zYdiVf3Ke8BDEJwS6niAh5cTxsWCc5ePquoD2V6CEMdJqpL5yduAbDAAx2Nu2WppdRdcyJUKGypmrikNLjBG1gv",
  "key33": "56PxwwDpzFkVXbGBxmMDNs6mDVNUmF11ZXeypT6NEyBa49wuTg8RhGusWrjYtNzgG4QsDGxzmtPhVCKS2UiZQ4Hz",
  "key34": "2DTbcrR8Jtgyt2TyeRmcA1pAhxizv59BJqU84FTVgLjvJf7xFad5NV3SDMytCEt2WP6awTxEwCTNFzmcPDARGezV",
  "key35": "3CX1JWydPbDxrW3ARtsLeW9S7YsQEgJVGqLv481uWqkt8EuBeQBZUDhyb86oKCKYvTB1Q9sjnWi37NC6NnUua4nt",
  "key36": "5oDt4o7caZBm3r4UYAHHA4RMD8JpSHSBNbDw7KN31tvhQwpRAVmidG4GFqEUyT1mm3HeuFcEdbGjStScrTigBPhq",
  "key37": "2c6HkbtU6Ym9K5exu6zX3xWYdVCSVdJwTdUhjCjKzXiagAbsRbn3uC1tdYYDbzRpvyndHeym6L3cop1C8KtGg2W",
  "key38": "5tBFQF9sjjXYYzQFcjTiQwo8n7MrTanFgKMLvVpmaZgBdtg1A4K3HnG5xDUgJQPE9aE9mTo3ajPU5M3D9E2S5gxp",
  "key39": "5AcrHRW3tkNHdwzokuqv2yABx5vhRDf7T7TwF82H9wKMTrKEx6BgyrXD6HUzGiHb99QCezynZ4HiJTPAKm7Hprbw",
  "key40": "pLY8LuBZyJA5jVBPgKf17AGAZCgGdBMys15Ei83aK1nPwJXwLFQ6725UsMEdPf5KMMKxrfiXkveGWbRCpBUZjQA",
  "key41": "4rQq2ZZUqwk4w8tzksC4qcsL2qwxLfhd44C3r6AFmnXBaZdrXbvPHXnmtrjTdWCAWFQT91dbRXLxPWHQYUsQV9zo",
  "key42": "5qsEodDUAvgCxn674sCQWCDkkYpF76zGMufpfFPw94MbwjtvmkMPsAjDCA9qxc6ua8RepukqCCTto7sfqrq5hHJQ",
  "key43": "3HxCmjkJsme7cZ1i2Aco7AQLgmRDqhGgBrekYzxJF2wm1ptV3d1wBy4TxMPKauiemk2bpNTcPymf53LxvHEb5qTh",
  "key44": "28hcMcRF8zxnPn3WYcKYCmo5TUzr3fjNF2RfC3vALRHGcpRobBpSgoSHBmH8oB7QmtnHgganVZRrt2GFxFTiZ88i",
  "key45": "2H8ggLT4QcoHxriymSNcrwcm9sk1NNTVPtT89AKGZTDGSQQ9wGPZvETAH4YDazvAuV6WeTLnapqLbvCuYggYUJRX"
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
