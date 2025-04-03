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
    "4F6KCBC8vVfh6HdirAbvJfcsQmg3epjQ1HwnKRQprDZiHgdRdJDUPLEq1soZCa4eRuCVws7SHkdvHXSo2ssJUhDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Vzg4w83xcwTdcWho6TrvqsvBfiAvAqJRsZkW4WFgbzcmkP4qDTWbvgrJ2PQPzzZXGSfyBvq1C6AKbyw9MaiZ1v",
  "key1": "27KX9bE5CVpyaXijQb4rDovbQ2YCeUV49ELjLCf5q23Nh6tzV6FHb72ijJgrzWPkMcEbZaitn5sgWbSBkAc7kZDk",
  "key2": "55CPUrGJHS9PSnu2Tp7Bh7et9vC8XPY3DdKGZFxGHFjMVuef2FAi6HiWeHaFcJzRsgsFP1Bk3d1f2x7EAxF6tXpP",
  "key3": "4dVuQb5o1hukCxFLAC1xVffceQDj8fLNAq2unfaqLm61VeiHFTQVDddnAkvWWawPE7s9thb5fpYK4Jth2x854TuH",
  "key4": "59C8sQ2WcbmCya9pyw8QnPGuRqEcZTNLrF9MYezSgRXZ3bVHTjyJc1R84ybtPCFaRG7Vd6Nv1yLFSyUvYbk1f74y",
  "key5": "2S4LttzVBh5SjqKcDUSupk5P5gz8K2RBqjgZK1EarXEVALuYVRwzhxRrM8Qyj89J5MejbfJEUniJNfZUnrpUM9Cr",
  "key6": "38ERnM3Fd3ypDTABnnfGzwFt1G7BTucKikyy1YRVQkgQFd8PSsd3nU4PXwT8paRVNQoni96Udr7tGPG96NZufpF7",
  "key7": "wbqdPBT4wcCJKG9rLimuyezWt8h3HEgzEbvKuf5N2KRNZcZn86eDw6bgofgmyV9PVCuyjsdpoQxaHC7PjuMLpwm",
  "key8": "GtyYjj2NtmS4MEBHp54gvcW1DGKgFU6fcqQu4P1xbcMwHzs2XFkf2zN6CXHyJqZNAdKTb7ueTQFAJAYjhhamHQt",
  "key9": "2HW8aLhu95o3pqgbheij7DLb8PebabtdGBa2YynbE7DP5BNqqFebovpB17Ufx2gxy2z7ip6uMCSHEe4K62zxAqrp",
  "key10": "47NaDxVLWctqe1khkBpyQU7ZFV8NrGsGyBnSjtkZe4s1Xr3E6En5J38Z4XX1zBQgcYQLVfTmNpAUhbXdgDEc2amq",
  "key11": "2H6uypgwi5CxKmte5U2e8yrCgHRWsMU4yFsra2JahTK7KtkMutxR5xe6dEXnbUhAj2cXwWeXkfPr39cc87AZa1AE",
  "key12": "5RSPMsyzZEKkTYF93ujYEsQVCZG7yLUTegS5ysxmHvRqteCgZeZmHxNzbc3Nk9UxcknX7ErT857PLq3PjgB8cB96",
  "key13": "5Dpnv4uabojynMPpp9h3xJqm93M2LrgQqWDDDJENL8iV7VjXRcFVXMUjA5XNBUXpSpXGH6rjdsmkaV2Yk58Mh4A1",
  "key14": "4P2fsC49xoAegeLjLmFx9CFkSKg4AR7G83dm9GEW5mUb1ETiPEeborYxxaoonYA4xzDw1WsAVpvMoUD56YMhwW4N",
  "key15": "53eRhvXvRdYpAMz3QTmTnas5Z9PDoZhSGzpDGKNhD2S4mr3q4bBmknAqk2XbHGfypcDn6UfqspUXnKxntzcgsyh5",
  "key16": "2zXhmUXg91ikxd2evwVxwHUBHcWkXgoDiSp8UUwtuCzYnTuh94tBZPNczsr1WHmhMiW1f4A2Dp6z5ZeeGpbmETB3",
  "key17": "QV5EHLMxTYgJYsgqw4hBTonV2rs713pwCDF1WLxRVYj8fo7bBUyTc81dpzK9dBuaKew7jFAWoZSaizpoqEy2cjv",
  "key18": "3yjNshFDxC6Yy3hzkTfEdozqqFeVYMiRdF6xw5gD8USCvFZSNWTbj1KE4xv1CQ6gcrzFwKZo4x4T94icQgm53CmB",
  "key19": "5fvpLfEQggzdba1eeENxqr3wiMsRWjWTcLzWsagHkmVFVUL8D6Zd2yJscq7XK1dKbzbAdF3bcN59kvDUeiMb7ast",
  "key20": "2tHFTQUaJ378hUNkhzLyynZeN9iJF6gw2NUJhiYT3MJ4bdXrR6aKonqqFHJ7ybmbJdNYLquKV1AiiMytAqTbv2Mk",
  "key21": "5mKMyuurvYW6BmFGuTqsZ72ENTUXuQUYGNHCPJ8ipCMY2hsozv1hG9DAmdRfv3M9VzdyveMTXaCGLsXhVpZNx9fA",
  "key22": "qHQt9h9Qzbs5Q84epTsfswgzzm9tyT4HBKxZYbZZcTq1JMp4ChXxdT2FxEVCDqjRgVDvaG41yg2mZ9kHqrSEvAz",
  "key23": "5htdqyZLXJaKsJsshQKHzk6is6jQB6iqSfA7c19RNc3NGrCHoc2WfoCp34YJRqSxDnZbhPVeQSXzpbp7yAV9ms5W",
  "key24": "5zamFfEBAPzXD2VrBm2f5YR8JECPvPqDzaxncWChKzyP848vuWCzRKexfMau5ZQLsC2TdMx1W7dppH9PRnswkZBg",
  "key25": "rAydJRjVQPPBW9vzL5XJtxqFNwLzDgPyaqjwuSwf6q9DjP5oFu3SMuyRiBqDz1VoM3NYC2PTKNfKn62cHrp5w7P",
  "key26": "8kiqs4CkQ84URkxPngoHKWwxx4AjgokUbZwKEffcR9mLQwc1vPR11MTxpUYruHxZA3nUdXTYAATkQqvzip5xaBH",
  "key27": "wWNnKCNKdD8P2FX5mgDdFFJQ3C2nfNHfUNUBdCmCpKmkW7ZmEHst8JqAJBJYPa7578ckYrNtSedE2sqaGk9HoKK",
  "key28": "3v7pkd8XLQLqKxSZHy9kvYtHf6CW3GYzKkQLA2HeUKw3FhZdUneGt5hyr8UZ9aYey14VUsPU2yRY39e95fVLWHzv",
  "key29": "5fdTLBLYQbwHxmUrrQBdXuFGag1EY6MeerACX2dvFyYwGEsbUx7JBGcS3aBcn1ftZEUQha9xmfZ7bvGd3votVw8k"
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
