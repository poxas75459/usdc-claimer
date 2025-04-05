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
    "dD8CCJCmrE4WE9twmj1Udm3SHitbNkYtVAaWrXXouTson9THL7i73bemUYCP3k4NRJ2JQ6jss5um8mXHA4XAuiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PR8GyQmofzYgXY7vvkDzstCois8dGwu9tbeo9TgzozLByPaV48yWbNEYEkK8k26jH149wEeu5KGKbaypNS54YPf",
  "key1": "5DV9A261YXXNNNdwD2MGjtUCcpZMNJAdsw126nqsX26JbAibGE5PrBfke44bT7isBfktQd14snLbyzJnyFda4xYz",
  "key2": "2VkrqiQTZEiSr2Q2q7FFHtdKocU3ZLGzrM7V7nwN7uD872pEgaigQX19Rbfjw8kaLKVJHuG8APvkPhaHXsaSeXHv",
  "key3": "3P6nwje59PPETGoLZC9i41ssvrGBTFNoWRq1g7qoaGgUexQj7a8PLE9eUi9reLzqJwxYLCWqVP9jauYLkJmyseBH",
  "key4": "2gkuTtYj9evn6uxw7Y6Hxjz45DBT8KjCKWfiHxXiPWTL36ykEH7L3gsaVDzBYfFn5t2KDz9L3DoeFymZu5VE9sQb",
  "key5": "ye7NaprvpcdrRqtz8K2m22ckTVxC7hD7sPJBa1UEXSHvx2gF9ScjgwLqdrm1k6tjoka1KCqQ4bKgnF7CHBfhcWH",
  "key6": "5wsc1Q9239BfydbGdSpZxR7PH3KRSgpaDty1EwtetqFiW4LXbcaUBWHpsWxoCzhfTXaDG9G4j3meP6q27pNnSvs5",
  "key7": "67jRUT6WaY5ksaumsgywAqsR471MR7VQrLTeXkirmy6Nx3PXUrA4Z35ZTUGKbPyEqJvRRL8HuUD7GoH8U7xTbfnQ",
  "key8": "5qeF4kcRhn6bBLaY7U9DDKGEoHLvEsjWvhSaR4rU4w2rqAgZ2f2PvDfTD45XxfjWQBRCvxTgjQGakjh4cn2cYx5b",
  "key9": "2wAsgud9jVNUn67aFgsFk743b1dcD6vyHAc36gYm8q49gZFU4HqzswxoLEZkzv2CZMHjEo4pnCoYp3nkDebXBrje",
  "key10": "5wvqM6SCaNvB6vDsrDdGyxJhu4R36rSDJ7erU6MkGjhnsMo7cTdMSZLiRBo7xV6VWx1E4kvMrBpqLLn8sNp77cQT",
  "key11": "4E4mM1JVQxoM8v1ZSSf6Yns6ei7vhMS3ogkkWf9R47QLfTwKdG5mVA2Sod5bbvPNafabxECnJHJPyM2QhhoReTQ7",
  "key12": "58WdMrpZQjNT8Au86UBCAWtMnd5Ndz7yHujmY2KaTpD6vbU2aBGanEdTXGYNNvwhNhuAN9V8RXU4VLL2e64oXkzF",
  "key13": "2MqfFeyjkcwvsiHdAzhBFSofseiCECWpuYjbxN1R3nSADrMdjeBcQgSzheB5LkAHaLzWipJo9HfdYzi1XUdpRkFp",
  "key14": "4VxqKQMFyhH11aEpWXwbbnxaWNVceuwib7cNG63LMcqimRWXoTBUwrbd3eqv7Dwxwz2UcwEsP9DGiHeGRvupNMxf",
  "key15": "29XYGbayK6VLFoscJTFxsdCkZ4YVi2JUD5ESYrurXKJrRiJh2mHW4P6PnA1WNSYHZvCsTHzckmQDyts7Y1A7hhue",
  "key16": "2u6SXAsnsaPgBdUuE8QF6YY2rpG9KR82moG1K6JC2zaco6znBk2YeRW3FvEJ7gBzaWy7vXtJX5VHVAD2PcKvFany",
  "key17": "5shoYwzG4MdufTepDnQoUBhLdq3uAiBAkJKrYFgVHyVWg8bsDtHUBsyXGuAbetjZ64HEsMRwGNZJfVLkBg2jucwv",
  "key18": "4UBAD6akJZybSNQYnprgicJgTr1FNMcCjE164DVvY7q189yd742iVzfQNoxFokiya8LJ3r6Zee8cCzMZGNtmSY4i",
  "key19": "mpryHk7BLvLhxhfRq7Z5fFJ13QnW4dQH1TM6H6655P18sXEPoZdniJzUzPvjxEP6duu87iEetHPTimmKgzVSVhg",
  "key20": "5r53pPMfzQNxCmREWeGXDHgBBS9ZxXBmrU6uTPxj54Pknm2ewk3QyavJy5KS8GCQQhndbUCQkmYMhFy2Afz9kDVF",
  "key21": "rYddu23CBw6zPf2fBrY9puzG97gGpJU56aXrFkZUwDLWzRxdeENMWZtfV1D2FV7PcJgD1NcDeBruaFqkZf9jMVc",
  "key22": "427V13DNXeAEmtkmXbM4bAg5B5dHbg6Bdj68XTEwwzGDBDuBKAyTdGp316jKusHzEKH3NssTBPMRWBuybaegfKx2",
  "key23": "3G2Jg9Z9zP8tCodegcUu9mfSzwvxtbU3BJzS3FP4TV9RWsNhSsfQ4xX8KFi3UcLXmeCdH3SswXX39Pfdjti6RSF3",
  "key24": "4GoZFNXtbdv23u2h9XQht6VBNDfDSxLGcC3afMt3Wco6S4xzXZrtQufp8iEQesjnmcbTJH62VW9o7ZUpXVmKpSF8",
  "key25": "oycsspHmVyw8p7ZbAdyQJ3QkvJERrEeFD8nLDRhtiS1fXG5suxnGRwu6RTbboF7AaZ19dGyu31uSo4oXukhyZdD",
  "key26": "59an6s8qrW8PxSFwJ269ayhDBw65SyKqtnEeSqJ3yDCn7uTafNKQ3nfBEnr9VgVshxNm38fUbP8Rh9B9tB8Dg3RX",
  "key27": "4DEKNaKvj2sqWhHsrMvWnRjDULcNCBuAZCweasP4F8nnGs35rCov4JbePdTy8tjRTdyefEvcNXyrcpm8Rt2pz2VL",
  "key28": "22nYgKzSLE8mvH9BEU1MJTJdAQdcrqt7K5UBuYiW7AqNNNN7D8TwY6paZuxGhJdevyMH7vyLZkjxjMwPvyxJWNxB",
  "key29": "3NhzMAsQDfDcpMMuGrQNihY5aiCQQZxHbyayb3MCh4hWRhmWMvrn6nwvEfUVxK8kYpi3J4vvjL3ZDHt8pT9fm5pX"
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
