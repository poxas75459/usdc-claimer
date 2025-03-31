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
    "2bHY7xnNUKoSqyXHJzAkjqgeXjwQtGsYRjKcreJk2qXSTBBAxgaBm4BLGcmXHBMMfyQ395EzCYbmxxRYricL1ALr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XJNhnej8RJunPbfZqoxXS79E2BvDjPEiLEEJeMEaLvDhWn1uvAqpVVM9RtYMt4vngrx8jVGXkLW2XrY9zMtvE5u",
  "key1": "w7tWE5TZwiP5Myf2yyxi1x7vHWroJqN2DNiFRdB31az2EmpWrYAqhDDqV3GBbFVZxBNezPrkvQ4UJccGfFABvhp",
  "key2": "5YX9a3DoTJPYQDCCEF25abW9NAhZ9sx7kmZJosYvHRj4twq8d7GskUu19b1ZYBJuyB1F9jkWcD6XcdZQff9MG3PB",
  "key3": "SGZgypNkLaV1RxBz59j1U5zFNDXYzs3y5Syc167wti8csZjhTYjfE3oviyi3BJbgBJyqpDa8PQB5YVAKKdcWij6",
  "key4": "5DCi41kuANuXaUBojYGgTRUz6YbrJqNJm8mCypbRwHqUDx2UiYfFJhJejk5c1dcWCuAwKLhi9wNwEapm9qBezAK1",
  "key5": "4hrJK6TENizWcUKAm4EcsCBQiDJjCe7nWrmUJSBRGAYnG6WfoKwL6Z5BxyKsa6B26VwNrrjR6JRrGVtjhN2YYSVz",
  "key6": "2tpmavC3c1oR6BXFFF3HgEEbBR5fPcmHHgThNtdwBnFZaXAea4XdGj6ShzkzaFZoJ7c7v2U8iyn2Hbn3otcm4EQH",
  "key7": "3TmyHzq7J8qDUnoHo3ZaBBarkUuUexw5644uxD4bdVvyLXQQoacRtzveyzHtEdrxXqtC4ADR9qoDi4ZvpiZc16ck",
  "key8": "2dYHEFUiXteSPCmaU3HvcH1aosptGXrRM5sKE9TjMqXQo7FFGppysWYGLxcm5acVR1B3Gfnhjvs1qGytwGNjS7wz",
  "key9": "59VMUfqREHQCWukgngJgoBwBoyrV1Ro4CS8KDMPem5uqG9sn1FGtHVrKVoJxNbsyQYcZrg4eAFimr1dN2AGcQitX",
  "key10": "5T1AdRYvodLteE5oTU3oafNHHc8HDoXbxbFStVojbEwK53NnBZiVYCPcR3s8z13bbicyxs7NyC9F8qwVPAKhXU3r",
  "key11": "2Fn8MKRKkvxEyN9NqYdkUSbRfWL6TGuZ9mL8w7QeXRHZj3NcLs15sMNv5AGddbN8wxAQQo3TeeNADcBcNeXeTKtH",
  "key12": "5qHaov9SRVabmtUbt3X5YrkZ9NHu46VR59Xszph8vnt2rxsaZBwDZomfdRBNjqseDrmkVaaYNLswmdrh4r6jSGmP",
  "key13": "2bTyYmQysnTGN6sEaJgALoG4FgyHFDKvrHTjGhT7xM2YGaXMzsbsNAWzHB7iRHZvPHVTukk7ESCuQey7FEpoFJTd",
  "key14": "3eLSmR5H8mYMrVV295mgsfgknbAUYYbf7QzKeHi7HcBgqTAbkmJSCwHXJJk2wCAtxU71oEuaRmD1SKyXyHeUxMQ7",
  "key15": "5dDTwuhArPGbDo7yhb7crP93TANXJZCmcEt1gmtzTvX7Cz4phvCfExETzrZZgqMy3GK9X3tFLJ8B7PzqMZaaD6Uc",
  "key16": "65Zz7MotAEuyx9LKfD8x7zxrbpCoAmeEsNPADuMVwXXPBAXEGkbvNhcm92TGvZV54ErptCZYiQ89CSL1FyzarTEV",
  "key17": "5Wz13NEfWVzMcfkeKQWRHNGNoWeEBSHanhDWbGgxFf2ZkHQFZLTMq1YHGFcYJmqDGvfmpKNrJEZKGhFPbTbBg7bb",
  "key18": "2WBVtTBX79jniqtQHWJpqfZLg6N4QW8ZBH8gctFvqcF5YVRfrMpcMaQGmXisL38YHQRM4geEBvPtJf1cmcRCXR6m",
  "key19": "47E2Y5HdnZdWd1SaFV1Sf2p6pM6X5ekTYkuRzGs4PoGgvBPLYDaj9VFXTAd8L6owjno3x4qKnbzGCmC47m1UG1Ra",
  "key20": "4CZ3jMKu7wHMzoUVPfgyvJdxJAHKNoMpaWqSpYQxFSWwk2n8C4rhuevPULymt1HVEGQ8oK82UfNLhGaaKHZeep91",
  "key21": "yVQuPXqrDzDLpAd5t6NK1FwL6GHZ4CfgwhsPYoZDssnUTUiVwVePLYGuK5eJbhe7rU5jyqWEE7R4EiS6TZfGWnU",
  "key22": "3TUgYgG1rnKqYroDWtEytx6g7E581nEVKGqBWLfpHUg7mPekL2Bey22hNqAbwrynRHE2aT1zfSvpxktjtwKTYJnq",
  "key23": "4Xb6hJEENJLWByEGX2gFjHv7crbgw5yoWqVF3rQg6udHhiDdeS6MjwuythtPYhY5iJosD33aLsB4mrkdb6uTCjh4",
  "key24": "5Bq4seAA7Qag6hyXv6x3hG8xWxwnWA6aELEcPc4LovyrvahktJBzwR1XQAMzr1LMn75wBsjCpuKrdPNBjFdKZRkw",
  "key25": "5haP516SLmHPD3xmAszGkb6Ye3wwCkckHq83GCL1DzCzKhXbBHYCAPJYYuuemy6CwbcJFNQ32JUejLuWv5ADEq9J",
  "key26": "4yYUp2tpiYFjz7tWo5yvYUoQzZ787RyKH1FQbGrvun95N7xX2DgDSh1RhpXwEbmMMUyh9gLk81uqjKdUBSXEzCJc",
  "key27": "4vc8PuY3hnu2k9aNMq9gynSLkM5cVbVSbAwYNpbCmkQ2yV9YbMCtkcpWi89VyDs3CfZpeyja29wj5SHWMbENZwDK",
  "key28": "5vBBS64UQRto6X2W5vVac2QMgroHrzVDVVvSb1KCR2Ga8NvmC1BcxiJdKtEw9ouoqnWB2PFdAam6UmNqBB2VycHv",
  "key29": "43TTyfr4ZTvKjyqjzoumtXdT9osRTfsxhRr7JNapLfZ2fBYk1x7xpiLFokiyfTKXxsrdMBetGBqLgBKFajhkQSWr",
  "key30": "4YavGmRmNdp7dsVgsYNma9p1Fbf8STDGdTCqpaZPWLVj5ZJcZ6u8fieJhEzqTeMYNKhznXJKEWTjxRMoyTTVwBw3",
  "key31": "4hj3g2N9XEzL3so6bmrkCPrrkVUuYw36hswPpLhyCrL5QTT47Rv8EHEiFLW8jjxyCAJKdP36xPe3Lt98XpZ6Wrqu",
  "key32": "2N4zjAjg4XfCXEYZFgnrLNL9k2w1c3ZHo3AaMNW2vUYPoFgh8GU8dY4Xn3RGfUKX2vjEBw3ZA633mMgKeESoKhnZ",
  "key33": "4Kv63QK61s98ut8MP67ZmmBWe5cnspGotc8dZFxnhxj8BjL8trjn6LJiHRpxsU7hxTwgETwtNi9qLQ6No5eXEntz",
  "key34": "3aHtgCv1GpxsVfCsLjS6a8HXPdskbMrM6fNREVcmHss6n8Gb9QinLkJgVSZWbDyYvhkvJxtmCD7Tq3sRUVi1Kp5F",
  "key35": "36mnwbHXtem1MSXDyhyQ6uQALAk8hsmwxvcUh685pGgzQqaMGLARauYQycpE5mwYhfjCL89yuh6x8NX75L82qJTZ"
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
