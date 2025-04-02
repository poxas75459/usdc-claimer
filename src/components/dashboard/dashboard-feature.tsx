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
    "3dwF7oUFYiE4nBCZPnQrDpRcVZ5aXoqtzbHMYcsX8BPyqwu7FKtLKb1JNRTiXA9deQPvzJCspSts8Z4ytm7hYWQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wo7Z3ya34Ddg9dCyut2EMPt1CU6jU5QYZHxhqdzKj4rHwbGGicAZFfbgSJyRnsykyie9e7S1A93XemQSkynS1Uy",
  "key1": "UEvX6EGWqWdhSfx95Vt9fLLHuxo2kcgcXYryjfUKZ8pxC4EgYgcET5FRogSnjAk3ECV3r342TqZiQ7TC75eLD39",
  "key2": "3U6khx7KRmrp2Tut53aaroyqViRKkMfJDkwMb1Xf1YDwTMSpY7EbfVbsgidNyYFdAX4d92aSFY5wzWovPKq3M7WY",
  "key3": "2KZb3HkbTRRiZWqznUsDcLf1H6SJpR6DrKrht7EFChdzZSkyaNx7WoRZJo2SGpdmyJFnN4DkwUTHfpRcUG4AtP9k",
  "key4": "5ApcDYZSftBAUoqUgJmB8kU5mfx2bwWPCAjxETzibZiRAxaShZb2jgjDxk1MHgxepR6Y3wC3tW2BL26XNL3AKjFP",
  "key5": "4vsc761UfkS1pErYjLanda2yG6EJapQbTecEVo4mtUGsPjLKJreAz4iKhsnbMv6i3E8YGoEDSM5MpSvdETAk8eYs",
  "key6": "7zmKmGQNu1ocHQDz2hmv7ds4K17nSRqjh467mHdPd3URqJo5Rx9w2fBL8eZzefVfF9EgpytFJtK5rLCpy62DkJy",
  "key7": "3TjYhLaiZk31SmdWLhdw8rGaRicW4hmscSzC3UYbFWw6w5k1wAqXs71Yxo3rEm5iWypvoj6o3qu4sb1VQQ3BJMf2",
  "key8": "heyKKygUuVjMP9sBWPpvmSZ2xoGRgAT9neJ1mRhH7Temgr9C17deqvVsWngAw6Drtc25Xoe3a2eDXC97111b2M4",
  "key9": "42E9aQZyCf96N2AF8uPitMtnQL6NWGhkewhfBwvL95c2mvEdyTxGSyjKbLGxb2z5hMkmsfUXJnEGErHWVXcNo4Bc",
  "key10": "2eVUpf8FKaGBFsddLUQDnNdH3DZ3fDLc8jFq8d78KwuqCuUMKQ3vHSJ8D9KyvFPkCX9rvhzyiaVyxNxnEKY3egtr",
  "key11": "3ZJQwXJpyyUiYtwjUDRYuL7PUPCw8JEnykTegThtrpG58k59UfJtGxDGaYe8Qi6rGoS3du1sJc1SK3KwRcsjubAg",
  "key12": "4hbNkGSKYph7SA3fzyDucMvhu6eNpuniSiSrLJDeBrm1BSdtknrZZDbs41SP6weX26R83LWhMPG9YG2NtQZWA2kf",
  "key13": "4sRTouJ3f49RNEuAkZDxKdGE9dDFQRD9S5E3tfb7C6cxgigej2JT5BSwXHF1g2zxkNEsDtAQ21yoXea1hHA1n2Hf",
  "key14": "3MqTLt2ZTR8VPbrgUBefH2H9wTJr9YMHk2LbyAa8PHwrBNuTpZczzhoQSjaBPbaHZCRpM6PJXGuwYqVLBPDtoaAJ",
  "key15": "3bh74Thw2rE4AH9KcCS9rVgfeAyNX4wbYPg9N3tdmGQKsScjL5ykhcec9su4SbyG26h6MemmK58B4qSoDdpe7njC",
  "key16": "4HTEBt1bxFbYUYe57TRDexGFP2LBsyt5hNkzzhK14zgthNkssbVnzdujgncVsPaFEGZx9Wvv76Fdv7sQy7j4jmFA",
  "key17": "5AFJWeJx6EBekWPhZLs5GSrEw38X5PfVd3Uzexf6nzyJ4Mf67ywXTdKrMdSKc4kSCiKhiuqGef5Z1VgJeTkfJoAD",
  "key18": "4VPv44hdNUy9sRmGUGRUdsh4v3mjHuoaip7Fh1Q4PgKr3EMsNe9P3M2PSVE71eth18QMMHeBEbfw4ruRLSqcKH1Y",
  "key19": "3o7xShiVW7WPdWcRSGMsnqzRHqddd69qFtAy1gKBpmityeVtGCGvSPhJzbo1JYdcJLonFQhP2CSsFpvvx1r1ZceU",
  "key20": "3HMHZDUJmsqj4m7X5Atx1GFJr3aKe2qKP7P8hBgZUZs5g29iPDFFhLAPa2pHsJtmMqENou4oVewSz5P55zE1iUYD",
  "key21": "1z1pnVoVk8kpWLxejz2PQuvSdngUCUoJDEdHY4r7t37SvzZYJTTMp7ja6QRXzAhTGdGvJEDb9R2ZjzmJSufVYzf",
  "key22": "52sWNKyYWHMyDzoEeriVwfPLSusTuZGSf3wm1ZsNVDMhfa7LP28hutC6x6LqVTJVonu9hrwo3pGxNisdFbJhfgTR",
  "key23": "3Zk2jsfU5KBbQxTQ1zJdiAv3zK3RptcZUKmwLvNiZd5HCdSiscXyadjU4XVJNCQAxvw3qagJHuAavBfoSNugxwkH",
  "key24": "2TeDf2MdiW3oGkGbsWuetjdUMx9SFMXUzFkw9bnVUtCbwU8x6vt5H6xnV9U9irUJRs4Y4c2Ak3pM3rof7abMVNwk",
  "key25": "3i5NKARRKZSGHT3BeY3qBZdSJNWwMfSP4dFZr7T8GKNXvjJfX4P25fHEraLifN8TjiWeuuaoYhD1RejxVov3DnvE",
  "key26": "21YLnKD4WbFjjzruLz9awBkheZyFh9B24JsWpSVrRJpD1rCNMd6jBwiDCYiscy9gUCTMpTwbthk3Et13yBXUdFGp",
  "key27": "2JXM3XrdVoeWNh3yoEEUpJz2iJ6j2VLU4SBRDV1CmXTyuzZjARNuf9f5cjBDcbEzJ3tZWvX7DehKYSu5QwDoj3qP",
  "key28": "3S228Lz9fwGZFDm1qfc9Ufn87cjkmLUBf1E28J3CHGP6x4Q7qHf6dGRhmzZNvtrsmwgdhuhWXiQcwdn46Z3PNYxG",
  "key29": "59Pti3E1ekEf6MXjCEDhzp1Y1p2HYRjtH6BfQfJ9ycK5B1k6Rv5xXntVHSD991PocbxY4bmCBw8vhcrSCzDyAqR6",
  "key30": "4tjXPqBBBpNxctfJYxJekLMwQNdy8ZFG9XU3zvk2G4epQSxKzpACM1CykVSvdiAhuzdCF8AdCQCxakK8fHTUBVbX",
  "key31": "sWRe9xaGHd6TzpFPWtnQ3aUJhj7W5iYU7hy1Y2WMqvVh9t7p2zYxfLkMkaPtwj9cMBxSEb7HeuX93yJJdwiFPRu",
  "key32": "D7BAHHTSNRWpjFRSGvv2SMt1dSESgLeAUjkFwCc4tRa97M6nge4ChbKP4ubSdaXVLGeogpQUmfCVmT65PD7TV1Q"
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
