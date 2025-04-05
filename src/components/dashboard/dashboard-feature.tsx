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
    "3KyycGoJRhToXYQuUD2pJHRDP8Xn2kQdUFcwfamBpkczVMvdyTRYxbzCUYzejoeyw9kep4GerxR7rtaekqFW4cjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ReXfFVScrsCKWTAqddGkTL6Pho5zHcQi8oLux523kKD8UVyhZq3GmcG3YGeSP6ymFdv3Dj36FV6FKKuXsQGjeNU",
  "key1": "654WLifJDaFuMQbYAfMAnUvqvKme9YCfsTxf9ma7E2F3EB7xdz59B249yChbTkhvoeJ8EdPDgrwNmseDUY5PZeAM",
  "key2": "2cg8ARrbyKrf6iiUfnH3WPxmJGujfZxNHTTAu5VpFhbGrzeobypcsdGku31Q8QfbLdFnnrU89MRWkbaAN6SGMGCs",
  "key3": "eeZDono7JgAxQR31mor4WkmfsmkwYk8t89yGB3JWbAS4HbcMLr5c3HqgHsqMzE8FvNLE4aytmUSfro3y62yJTbe",
  "key4": "2kpVKKMkMqbMFipySJUasXNG9HWBJC2MwxHj9VQunoVZNE7WmsiM1VhXngcF4pSx8jeP2nJyrNd7qyC9FtDPSuLR",
  "key5": "zrfiJFV3qg9jYxTp4nXrmzpZQ2r6rxq9qdHBYCy6hs5WiNG9YF7vq1hdRQ93kGqRnyQrzysKJoaLreVWhDzWUMq",
  "key6": "XtuF2vFEMD1fKK4d46sAf5LaAnL7QCKJYsaQmFJnxDpkropoQvUBACcS8wKCR1GuKW8cMCffoe9JfDEXte1NdRh",
  "key7": "2Hve81Kp6rjim7XQQiDMxhTQSXyAzj9fokXSraT15Nmddt6s8K4aNkmvwkYXeEvV1eYpqtEgr8hvaDFMSsse9Zey",
  "key8": "5XcAZ6f5oYK5S4zGaJwjjkPMbUkmU7rn7Fnhcxpd5sF2mpipgQd9e5AfCHbTxmiigYiaMc51YCCVydX1gRJC9BXN",
  "key9": "3EGNk3S5GaGxmqor9eyKoZc1fAY28Sfd5gp7Jn6PFjVL9pPkepDYZZEpmphAtn6XpJE6C6HCd4wdwruodvWkuKBJ",
  "key10": "4co9o14KyhhZpHei6mRTj7kYDLVpp8MBEFRc7wKQZCCURgN7UEAAnUQ78CgUqgi6ZaeXpoeN6uJKQftCyaWLGQnU",
  "key11": "5WEcHZ1ddzzzg8qAYkJp8Xe7T7zEHCT1pS1ckvNKhD6AMsdRrMThGMdNtSK4smm5T7vRULsVFpcaKjMbVgAn7JUo",
  "key12": "4Hj413mAUbx3Bfoa9SNBcMryzsCMxSbJEjPh66hfc9D6g4WrPhUKhFMnYHSE6wFTqnEKgjPLCCRumGVr8WhuFYVi",
  "key13": "4hL1N5efww3vaeWJz7mk8gT3JaZdwTeH4DBsiWRSpgd24ecw37mWqKvAXyPsWj5M9DqdJDRAnUy6arR1CsjS9Kvg",
  "key14": "2iEPEZvqjiAdMqLbCSnYwuSW9M6q5Du2n72Czxvnth3Fdsax8bDPK1f2J2hp9UEbHAEC4yrQGnAGm7ZzmmgdH9me",
  "key15": "4YFUs9EX3qbL8thSg6XXkwQKes4Jh9Hx2L1NPpQV8u6v55o63zhR3giYDCAsZk3FS4qESFvnbdin3oa8a87uYtZA",
  "key16": "5onvXn9JLJzUDj6XmspDmKxPTT81Xaj1E8Bzb88VF1GXRx7Kjmzww9HdrZSaURZBQ2A1vRkiJfo2yPY4zgaTWWrM",
  "key17": "2LidPoabMiCZh2o7Kb28gx3ihLkXCgdZs3TgfjWJ6FQj8vUCu8BU9CuA2rxngKCfotQmM9ZMMX42H8CqG3rMYPZf",
  "key18": "3sZQkRPH1H9a6wZ1gBuxPkmBPz249CW7wP1MxTnWchnxEebtjXHrK7SjQggmfKsWnHjjE1anR7N4iy4pDSQcP4iG",
  "key19": "5HePMBAaLMhxYWRpn3rVuqaDa4MyMA3DeaRGmQ4y97mStTkai49qDi3AkaV2Ggf8FMER2mJBinz2kHEZwSevRtQa",
  "key20": "5erXkQq9w88ZCWEE8ivXqXyYr1CTDuXq9hGKjufJVDmYNt4AF1rKMhvVqGqAvPDhRwyMrsBdcnVKxVV8fHmNiL55",
  "key21": "34E8TksZmGhn286NJa4xnpccJEnYqBsXq6CYNh4e8MbKQMt2AJ1ZTXJwNxbYcJMrSxNun5y9Bck5JpgMHpvDz6R4",
  "key22": "wHoUbUjXpEJHohkdcNVZgEufDwkYScKPYTehYuphLZdHvnmTFiokoKLsGMioPy7178FesXxAc6qdPoV6FEqZszr",
  "key23": "2pVb2MgFnQrPoSL6YEuqfDxs4kPiCYP2dMDy9cNZwaky9WhuEmtANoho9hzypRRBXuWYZo1QAp5LB6MWRZH9xHof",
  "key24": "48qyhPv6iFf8VboR8rR5VzFodRZBJmYS3uSL9VXck1hmGSot8NMxqzeNrqqm7ubgMGwrv9m6u3aC9uFMvWT3zTn7",
  "key25": "4G8dnGXMJXtKmZXJVUW6HZxZTqgWwRt4qbBtQZah3tK3nbBKc9EtxC2wwDRqLHxSNqTcWAbF766SNsFo5TNCfwq6",
  "key26": "3kE8xbD3jBCTx4dru4Hr55D9TVsU8MESTxZR4HVTvPFpj22fo8wkb44jSQXaMFZuG9ssmHk3W4Bhtzz4AyZH9yi1",
  "key27": "3EdQHV7bLi6dpxKjJtdsRaatwbhW6zT8bWwiZ7bi55QFtcvBgv3SsZkPPK9X5yhSQnBK9zn2qr8U9HAT9rpW3d9k",
  "key28": "2VcvjN56ML6gtp2MPisf2XJCxEte2kLtU512ZLkctjR4ppddhMuCQsv7TURYiSvkCJo1mDzqU2bKK6r5NMLzsKtL",
  "key29": "2y9SyrKYa3icbdNmb2mB1PyK1gm8uPbwEQXjGxwP51gy9AestmuBq44Vn2GjsQE2NzXDFuJfnQnXyuSbYMEY15xx"
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
