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
    "3Y7cWrCJttkNUygbP9V8e8jWWsNEYsFgdQXUkJ9LLG1pV7kLq76pD6H2yAZYyrXXXJUP6ghrmuJEfwAhPjE7c4M5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9CjyFYu2XbRDQgnGDqkqVwa6ZFJU4yx31q349r6488AK5GBq9JYY72ptV9RocqH1U1FYLmZjR63w41yKyoVr2GA",
  "key1": "3iCeCMdSST6ge7PuYprdBZGZfho1tk3PKV5U9sQhwE3JuxEf2tQp3jHbay3U3pxmP9VrWDPsnFjyiiggQTbDfMsm",
  "key2": "5xMcUtMN1tme8nk75cYaiQaThmPHS1gh23CsMb7enGmqCVxvJh25bDyGLEAB8S7K3rvsdSgpuK7khgX2BiVP5bfd",
  "key3": "56iRejZpVjPH2Dbmxkk96DdqY5qnnkghacyiLTdeV4FXcgb1CJ51wAG8epV3Mu7vkKJqLyBDfZ8HH4qzEhfBN7Yn",
  "key4": "5Qa98b9j9TUjWpHvkW4bDZPZpAyEuVjHgm3hRTi9k6Mcg2FKdhj7pvR3GuBbV7eP9KBWZMZUZ2GCcVPLDTdS7nqs",
  "key5": "41azPvQhQrQZa6yc2x7uBMLcYnRYZczACGBixguVcJU7iGgQLgmam7RBb7LcjswjWmYrFnuS1d7uuij399UyTKMV",
  "key6": "2wwWuu5n3FB9WqxTBPpP1w4RNaYihhzfBqNNWaVY97CXNs6jFTTrRWQxRk3KSzMJeNvi5LLgL4PiczWnxRpWKBcH",
  "key7": "LSHtxRfg5b8eE7F7As9TtCPtKrcz4wBjrX9YmTTPgQgzGw2ZVaMzo9LuYJqJhWDFaakJApu74auDb6Nz1r9rY8a",
  "key8": "52VUBCf6HJVnvF1ACsW5CCG485Dpr8HdgUY865ZoxriEyBeW6NgKCSHRDGqMuvFPCXRE7dcr9Xs214KfC2jJeEaX",
  "key9": "56UeQSE2EyJn3ZP6wjs77DLezCikmtmoHU1gKGyg4UBjDQJ3TeZ5Fi4r4bKFPJgsGATCqwe4adKSQwxY8hZudQj6",
  "key10": "3mym8rqbbHRynS58icPhhbK3jUcN2MJgj35quLmwahcm9tyGXn9DWZ9h3d7hMroX2hjKNYXuzuFkfgfsWbehvu2R",
  "key11": "5bcGosCHyeen1wumFvzbBxo1i3pkSTZSNq3c2oB4rj7NnG2QvVoNhFHzFqMruhELMNgBwSeUhDc9dZD3PQZ1SFNK",
  "key12": "36GYBUeiECwRM3awu6e1JtQZpDLHBqqbnaGNp8Rug6QVh4xjTng915uN6drcApGPezduAF8MmG4gZbpMppKUjp7S",
  "key13": "4nFszf7r5pZ9j7etMyPP7ymFbqDotfy8AvDKcQZ85iE62HG5ZWkifhhL1VrVXyMvEYEeqGVDT5vo9xY5Y4RbFUZv",
  "key14": "3d9rmrA6GhW1Y5MNPFe2FnnVSFornPBaZf1uMXRzZ4QMeaGTyYDvTrVgfkPds51TdnoLFJciV2cb25DScUZDucGX",
  "key15": "Zp4euz3pauW7oygqBkeSR5t4Zmw4MbLscxGsbu6s2JzjSSDGVgKovX6KsPmxkjt4Qawodaj8eHaNr3puSBfUGK9",
  "key16": "2rPmtPvX639inVjkNQt9Qd1PAPch6MqC3dCfvYJzqAG9Z7kR2DR26LC7s2nQjLmoUXB42F7G87DsbX17xKYzcXq3",
  "key17": "38ftRr7PFdMnC4Uga6cV5d97BeKCga9aUGxLd1LYfM55Us71vP1G8SzZyvP72LgqqAXSK9a3jyK7EzUE5vzWWTLd",
  "key18": "5gokjiPtwf6dtoiyiGtjBEvPbxHc65C9xTcW2DJ1frejyBbu9ZbwhjRjszp1Vww8EZXcbBjqJaHZrSwUVQFXZWyQ",
  "key19": "4uJVW4ohzFdtLFm4yJLZG2FzryQL8H6PJhxocGSm4zCnSo8FMuvfLUnP6gb3kzDZDmq3r43GsGxPT9ajAtT4iyef",
  "key20": "54jdE2GJ6NBeRjkfM4yHLsrkLLQnHmTCqEyKn6LEqfvr3ZPU4L3QqvcuCmKFmpuxLh7fWDKpaStn3hjEk6t3dtPz",
  "key21": "51cvn6YKyBnwot4aYwk3DjMRiqhoQK7chachuDPtVDHzAtpTcVCtn83Ej1U3g1oH2VbxU78rNGykuccJ9dyXJBtv",
  "key22": "2Qcb1damfdCpBQQpX8grKqiNe87xR6u4kAvmgHH8JVdvE9Kp1nkP7ZBVDG7MVxmBXZ6NdinhnMjdZuUavKq2KQGK",
  "key23": "4TdhPAE4Z24r3R1WJZeqoerjSkiUP8hxAR9XZ2LDcoD1JqHGSa5pZFjGzEUkjjtQekkRVqJ8Cx7Qn4AufjdTq131",
  "key24": "YNUkjufgBVTsELTE9XPfjPwJJYveajowrjD1tWcmvmoJY8ZnHfTpy2DNfz49i8DhfUZBgYUTtaYkP25MedJfbVz",
  "key25": "3m1Q75cWTtXC44Dzq1eBqboQFYXEfv2wgDzZnnHFoiNu53M6SmkQsyUJioKTqD6kw1Nteyk5Vr5zoMW1M7ZxQqDa",
  "key26": "3X3tyKzxWiGKzkR5og3TajYQX7BYDSPgc2dZcu4FNyWjWLygPh9MTdzsfJ3RYb5DaDW3bCLZAoWwZ2EhSpMfpat6",
  "key27": "2jSronn2giPMfcSASBnpT9kqHZzgbHUd9xtWBhd6CZL5NkurHtojnG6vj2LQKFxF49MM1q4V1MMziuYT5ieTVPxa",
  "key28": "5v8ys4YBVTtTvCZzBC9KC5vWZGgnV8DGxoDcyF4agqYu6mc71KJWj2rqAyYrdGjUxJkbiduJMo11wKdLVJfWede7",
  "key29": "3RyzPNqPBSuuUxz1bKnvukPscXBPXBrPWyQEukJ3QYh7qEitkaMyLtPNnp2eer45amNKm7L1GVUmzCJ36pfo2BVH",
  "key30": "39P2nDypWeLqVCuBBpXx52TUqzXKuUS3sKZBpWi4ADSgmW4Z4HiEmy7EbuVS7eEwENsxASMUr1pLRLFuMXv7pCtx",
  "key31": "3adtMhmDdYEzPUCc3e1G7AuAqA8PibFDPU9YhzKav86vG9dVGLUhdyrqBxov2bw8UYzBtKQfrbw4dMvdUTNap8cd"
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
