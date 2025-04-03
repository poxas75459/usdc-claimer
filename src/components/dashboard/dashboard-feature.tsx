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
    "YPuFgaGtv8V8rN9wcXg8HYkzLVvSkv9v3RM6jqYGk6zKAusEYzwn1D7uPxdVnEDrS3AmCnvZt118tUYxgVuJj9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DsWs7a6XAwAVU4F6GWhRctGMZU3DD5EjtTcgvpiaL33oS7smDQrMM9MF6UzFpoTyTPFnMjzvcn4afhG44J9ofgw",
  "key1": "4CKd2fFPEPxBzVfwRWcnGzwzCvPdxw6jkjjmBisThkUfeXxsseqGCs9TUTrBf46GpT8jtQfTcXGWRTKWrMdAdes9",
  "key2": "39NUKGsVeNJGRPyATbPCT73EFxFQeu7kUBx8FNw3NnQB9hXqgJjwgJ7jknx3dNgngXhkS7R4ssZL6qW244sZjcB8",
  "key3": "4TtxpsmUA2kpd5PdLprbSSuV12dsPn1F3d6GH8cVrD91SZWhuGzqWzPpiAYqkK6Jgv9Gm9wFt1FSMV6xwdVe3PWT",
  "key4": "5VNN4dEYvMJ2xgMx6kyzkyTvaGSGVAgh3zEjWGG1sAZK2od5KHjr1vRbuujGGMTiEPk2KU2n9M1FKBJtZkhuhV2g",
  "key5": "5q9bebTWRTaNjYfmmQUvgjWpSiDKoQ2YDkvFi4hJfRbGLAx2Szm4ouivrjchnEWeqox5avgDmyKzYszoWVaM8gT8",
  "key6": "43gtoiY6ZJC9qW25CHtgZeB3yz6YtQ2Zj415X7onfpoRXRvVX2t9CpuCmbTBnmJXLRaan6AA7mB55K7WKXJrjuPs",
  "key7": "4pf93GB7Sdm1yKw1U9WunzKSuEvm3cazxBRzrJQYSw1rtxamdpJEWT5QBbmV5rKsS4zsb9xabYTTLDfNq71Gx6Xp",
  "key8": "2gjq7nHuFgHBMFu5D4pJ6jQv5mMypdSPZwdvZnYSfwtE8G1YJkwZs2MbEQdhnzoBEjbVVVoUSmNxxZ9YhgU1y1cb",
  "key9": "r8sL4ev6rEafPW68CZUtfeZw14wAY8PBoeU77QhZWSQFNLVYK6ENPHVL8Ew2wP3VtLXZExtKqDtvA5kw9BGt1Ls",
  "key10": "39apczRkEhdgyxjMFJHyZm85YB4gPstqeQfu3xj3dVQSb7uqdw4mhF58kt8TkjvfMdnmZ8wVXNRaHBT4ob4y84kE",
  "key11": "5t2vdzhY6o3ZdWrtenCA4dy7yFUFQKdX8pxf491hXUN8zKLjxC4qYKDGKFmbW7uxxUfJZGou7bmSVWyUgcRYB3FK",
  "key12": "3XDEmc2JMf3ex4BaU7XCEyhXwefS3bFs9A9tndJgqX5XcU6SKT1zFsL3QFnwgmbunqG61iBsMYwWUV4AY7xJqfnE",
  "key13": "24hHiPjjmTtyPLVUSDJ1qjAip1FjHdFBfZAA7WZpdvmdCgdx9iPMmBRBeTjpeLaFNFwGgPEX8WXLZomwM5jSXcvj",
  "key14": "2zXNZ1ndgGDznk41jFLELEsp9myhqzZuDdSD1cPPjMXQL4YEqh1c556PzzEnRuMgBRXBx71e6zHY6yVBwGQK7PPC",
  "key15": "3mojso3EHZCPNjGX646myPdM9xdLFo7Pj9fhJdQukQfPeYgdymNW8RwPeYHZX7PPZCE3TyCVWQQL43KRc7aaWW9c",
  "key16": "5aCf6ymVBDofrcBLR741SiJJCAcv4dnNtxC31JtZbvvgVRurTbyqm7SQyaeLvUiSWnC3WNNeQbaXkF8NQhzC6f6J",
  "key17": "W1YjdYnVuticCaAFDMTUTBJXhagmhLBuZ8TGv4NjsHRvdsbNPG8zRKmjs5oSvVYZPwU7Bh8nKfAp8926v14CUhq",
  "key18": "5LJsEG5DmrQ5fbcgbYZMTFpaf3c1SVz3AFXfuNHfXyhNpdig9R78ZRTDQzRkif2sCR4ghyBcFT8V4QY8MxdGdPJE",
  "key19": "3P8yMHQWjVGuuzHN4QhA6jNGb835Rhi3LFZNoSHvchAdFXfcvz3aAdnKGwZBfN9ykdWkyg3YSXpDUwqAVteeXaKS",
  "key20": "23vy5oKwTCsh4rqWYmdgZ6jDvkxXShqZZq3zWDtjAcYstUiCKhedG65LRrHZDhi4VhMmBGf73qV41LMEBjAgFzt5",
  "key21": "49UjgJsBkBLQZFdAxpWi2pNuvQwcz57KMN18xVpFchTRkQDvs9PoggajSchuVNXJHdKLx3VkD5KV9tZaBKtCbc99",
  "key22": "2Mxv6a78cyv9HJwkSAnWErCKpv9pnAkihuJhuaJxjeEyzGNEumSeG2Ny1Pksb9bWWrg1snYncnj5A86J39uk9EmB",
  "key23": "A1He9THq4SahZoXxDXCWvSbrr6JpiL4bktuk6VUG5CWNTpYv2Zbqd8kpzz9momGLWSwdBDCF4UXBLU5esHa7oxd",
  "key24": "2iNhnCua2xStCiJhNnRo7AX55rcRP2knN9Bzg7yFQaosysJCTf9LRAw95HwHzZrGJmDtKcghZnoedNNz4oD4WGgA",
  "key25": "47hvjBYVkB3oSws19jxGYDaGVwvpKoVsuGbNm2axqad9ga3NASqxxrdkR4zkx1A8mAdEJ3pnwXKzZGc5NnWkWom",
  "key26": "63EfPZh33fZDBdFUy3YKSsSVBL4kpwCgcEwNCznBizZbPy2YR6KhMwrPBVuNhUdn9HLmmiroh2MDF1R2SBotyfLX",
  "key27": "4TP8yjG6v4rpXyWvnmc9YDC7FwMWBQqRX8cpd3FD8qJHWWbYW2hCyAAX41nzHtGEVthtGV88u7miN7iDx6jSiQTd"
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
