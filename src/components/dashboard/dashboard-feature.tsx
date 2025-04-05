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
    "2D3T4BBZ3ty4gLaxoHotCa7ZuszxqCCYwR3Z22sWoGRYgouWKpBxCEC5xy8ahEG7Xd6PqpXjRmuaBv4tmVE9frv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C5rXF8Ef5pvomf25xoagCJXBYvpAwfrdnLUDx94YmVcLQcN6YPKZtqpmtpoQVYSTf9vQGpcy7U8KVCYF9RU42Kf",
  "key1": "4X8Hg1ucghyjsUJoASmntC6poYng7oDYYEpftZTWk3QLvzkRJEyzN9wTZG1UCSNcJTTK9GqWzZjCmWBGkQ6o6vGx",
  "key2": "2KrAYAyEFEXjV9B4VyPvzMbNcQZXQNZMWV2rbeciLSUPfbyKmfZXB89EyrSSnLz6e98pTnpiDZGTLCh7hipgoT4P",
  "key3": "4nzv6M4QJaPqZDqfwanLiY6mhXNxeuHP9fSrBQpFTwgV7DYr21E7bDgu3C5MUV9xdrWMFyXY2guESheDmVLXnE7r",
  "key4": "5WHxJhnCzX7sgT2iMzi1pTWXGhdUkHaaREBzSkrKHt1uQCd6fKHkmwsiMmHLa1q9BuWoxSCz2bcsx5R47czxMvcG",
  "key5": "g7KBGAmchgyBPaYBq79FXpXiQco7wVhKFBAdnsH9yd4J7RiDH5yW9P8NRuqohtbUABqay1xrhG8gKFxQk5L1sjH",
  "key6": "gHzBnAm59rVNijNmNBVZcxqG17bYanhfVH2v2GDbGfuQRp95DEZseZNpd71YiSQgGHTz6dCErcPP8ymp7MEF52L",
  "key7": "6ax9dr89EZ6Y3iwqz54u4ATfMaHGmJBGKsXvyqyDjZAkKfb5L3sxbmUyRyNdZ2fZg7ggueevekHyDzBmmMMxCcW",
  "key8": "39pHwSXukSRBtUBE99wMmEP6xvFNXiasutBzXjQbStAzp9yBmkuD8TDci8go3JbbjGhKUkhWkYptU1nJjZNbnwbh",
  "key9": "4A4X4EsRkbAK2P9fuK3eWCADdP6DjGZTEWTqd3YBxZk2u3HdZUBS6zHiKorBVSQzetps7N824ohSWpYkdeB9J2sr",
  "key10": "5F3ppc1cxjWYr1swRt3m8MFgvcrdtruhF2wxW2ajmjAC7rAULHKDRJkRtKVT1niSUjor9J7Kq3wuiN9YNsxTHgam",
  "key11": "5iadD2FphZ75AT4NXenL2B4dW69XdzzKF8hakbcssF8WQ5WMB46UmXtizNvaqp1fsohoTuZx1TwMHNcWvPrfaCew",
  "key12": "3kAeXxr4gbQfEWjD4jCCrcuAvYRJr9v7io2FrrU5VRAxnSXKqYHv9fZ9emo6jNVuLjPh6rEM37P6GnGcvGfqqtDD",
  "key13": "Xcxi5LjhwTgFUNNd8fG7XbWnYGeoqZdHvYA5HQdF99pfuXwW6jLf6m356cFHXH7uCqTT23JFAiSMS39FMhwRkXj",
  "key14": "49WkKcYPDChiTy6QK5TUDk2wqp2VYJcXog4YvTCjGaxzTC6HmZcrUEYojz84ZwCMR2WCQQpd5c9YHZAHHwedGfek",
  "key15": "2gxpyRUoSBdPHvHqibds9hRFxEFv4ezjAFXqG8DotozbQpCGABEqmVyabQ3j1p2VK1ZBATcHnCntkfQB4iBhhVzg",
  "key16": "5CBFowYhiwkXkxAKaivxbv5tBgVmR42JNq84m4nCgCZ23JgBovVQTzsU6aoFauNwW6qhWL4Ze6eGpL37aMCbrd5N",
  "key17": "57sCbiqS7v3WtFUNxz9J4bcJ755myoSMv3s6qy7vQL7KjwU5Mfw6YDQAqp7QWPY4Fq3fHubrzygv7wLN5SxaWBih",
  "key18": "iNJcWBHUPFLw5uN16wV52FUEQp76r6Xu2FBBgiWzRHD5QSwRm5hCyM8ZE8s6XVWauMASTrWLX7TFk3dfSFLyTXk",
  "key19": "53U657Aeo51szFTn7NsFAq2oxzuJR4AdSA5ANuFLZBVNDiJyVcLV6EBLVjRtyBiyXU5gXuWBKWe6D6MzPa76QfBP",
  "key20": "5kN4GGx2Cvx3oqUynSumAd42roRir3df62DxYKozc2cJwhxkYzAVPNVwnWbsGg38rsz9a1LFjQvZizsiadujD79i",
  "key21": "5VpZDLkYah3ZrGnfmtrLmVk3MFNryWRTZfVDu7te4UEVLeRbXGHwJwZ9NEd6bYND5M51E9RTb22m73h4gUEXaGjr",
  "key22": "d8YKuVLTgeaiMqXGZbHzLBREWm7ZZjgZoPhcVNRsz5MYRQYqKex15A6yFAqy1RLuH5STW7inwncPnKqdUkGRGZB",
  "key23": "55xu7THndSwBCbDekm2Y57xn2rXVEhsB4oikzbuBxwbnb2aSzrLXrP8gLqYyGmy32bcyrKSDB3VJESmpq4tGSqqK",
  "key24": "5DEEoBnBjZTaJyTXBqKGpP76ojZ1kD39827ebsN9ZuMXcQYfkQthN3qKmQdg3C5MF5sVHDJa6TBkVnKSQGpjgFn1",
  "key25": "233rmCt34bNKKRVsJjQKvHBQyyrs7jorPjRjCv2t9twzy3pA7XzMXAcreTFbrbmLk2MSyVJDf8GPR1UVwc4KCHxA",
  "key26": "4XoeUbMmZYStDTLbbd52JSzwYs7qyianBUsSFoQN7nEXx6TiGa4qHj4boFQQA9oWtuxN6RrXQkLfMDcRCPfqi4f4",
  "key27": "66FP2rbCvXTYtm3LQgiZ4aDcJCoraitCygEfMnbQNo5ZxuYvaZn7m7djUYNQFr12pTkzz3ZLmaN1RajfBqGbHkpM",
  "key28": "4vRz8GLFJ7YNrUj2H3kGEyxmMxFgYFWA7FaZmZ3xbrrzMAFXKHbvWNuYpyeX9CN3ACBsNsN1cnjnJg6RUJvNhGNu"
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
