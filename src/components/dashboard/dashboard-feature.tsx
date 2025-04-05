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
    "3RQYEaDAP3pXMrZK3NG9Q4PJHuzzYcEMmusQSHEJdTJW1GHaUobqbrjQL2Kf1EaEJshDkUjuoaxoDGJBzYAAKDZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5he3iKxLYUJNG2HYgyChZNDf6eMjdboCnMGXsUMHjHCvTzBk6oY4ktKU9EWaoPR76Rrmywhhmo1FFN27tPxATB89",
  "key1": "3PXRe1oknzFmxmyfZAxQJuKHdogX4rcguFtbxx96wcWYyK6aKuXtvS3U41wAWE4tWuaFJwNM9mLaunhKepwirtFA",
  "key2": "4EmJwZRvLTpTVjXT9ZWjJSeNJyjJb9pK5dQYbKz7LGopAviRZ4kkg4VXaep9Ud3eGMCaeCGEDj4ojAkBxbMGEcDr",
  "key3": "23g1iWW6y9d4tTxKEo42U42TyQmq9t7VwRjMEVjMFaTW7B7QtMaTpoXVMnUrTYDW37S4oWKow1BiZsHWitFJAHX3",
  "key4": "4poz92GQ1ekwbfBwxWE9vjXCZLjXSuuEhZnhdJ33sAAdhT9wPirncSBYSdg6hkoVyvCkukBodzFyG8zs1b5bj3tN",
  "key5": "5ixptYELPvVNY214MjFEsnNgJ3nmdcGfBHnxcscCMMrsVbVNiF8pEmzvn6hKdE616UAEyFK83eaaZ51d5TBASFbe",
  "key6": "HvXw5jT9R3VsSGSQRc5mXbWbAzJvU45gTiBzRdJY7X4iVAn2t1F3jsvhGb3ExqXFAJL19dZ4DoyGWMBxYmGFRBw",
  "key7": "Yc5PynK5LPrsN56mRbkZnzwsepkrQnZteSRedssgMMGAi7vjCFByD1pQNaPzTY3dVpzHPAsfz5EgiwAffLgZRz5",
  "key8": "2LAzN6xcYRqwbWVRWk4LtuT4cHH7b4kJMY7wz8crVKKo4gYnspTC2FrHGV1KBCgNuX81KaeXwDNRxuhF5RauXZkw",
  "key9": "2YT1cTkySmfH6NNwCUBqHW4Js8rj2Ca7carWtc9SDWtjkJ24WZBJL8pxgjTy8rwkCjTSmAeUHNa73XgQtYcGbPA7",
  "key10": "2pUP6rL2HUvsYxYBs9xDdyqjCTzkofXGa3VkD2iHJyBnagy9qGQruCr4t7J6nwu1AYSWmBrzdYsGc6PkjvqW6pSb",
  "key11": "U5EhsK6SRQxUjEJ1eF6Yss3qoX5FcVRzFtW23wSLZxfWNbTFuhXcFyLmck7SzXdh79xnR4nqcE1QhoBiqHEnTae",
  "key12": "4kpVxkg36fsaH2hrmXbWKm9bHqnoahChE7WCGFRQpqAT9HkJMfKwFZPegiXp8WhbJQymacLKF5ri3qgiC5nVL4oF",
  "key13": "3wHbwmpRCJR58zPK1QiMd3bM92enzgvcAkyHahJeN1zXKSQAc4k2m3JybR9H91ajghdrBCJUf3GXC6oh4vFJPktZ",
  "key14": "5WURKxuKnRbHBaAXSxYcNJ9VTAp2eqH2PBreLprRj4mMcbobg9i4BTs6pGutxPhEqET31UzqR1RY1BTg83MVT6bu",
  "key15": "5jCbvhzHsJa3XKnqzHnpLUGumDUYFwwUowp8cVAeyjFiR13HTd4bBpu6Nij2c8P6PXPPc1s7bnNMw1EEt7tvL8gJ",
  "key16": "4CfPKjoHHguqGpCFypZpowz4WoTSiB8VGQDTM2G2GfnB5wJ2o8M4EPeZRDLsPdUt11tAfj7bWkoWZktgE4JxRShf",
  "key17": "SYVSS7hVcUyCDwEWaGyL9M9DWgxWdNPRsT4Wudw8VEqNdobUezXMxLUfSifEdTmTtF4YE6XJmTCqf9LHJfGabJh",
  "key18": "5xTwLypqhMg4enk3Lw5hWkL1vYYSMyUw5NhQTZsLyXrHpqyFLGXUBWfA5SLWciiF9AZbQmuzjMQDFZYDcSj7QTGT",
  "key19": "4UsSJrDNjxEvvR7MQU6WciWR4Dk2RfLZdRAK7Qk38AUVZZDme6bEmqiUUmYnBKmLA96tK1CYtWc6QAkKsYLf1wfJ",
  "key20": "2Lg6G64Unyg7i89t89iDA9Ab7JdQCLJt5ioYEyr6zQTMbmJBGJGTxCcSaM1UcyUyV6TFsAYxmCCaEdBB7Jd5grfT",
  "key21": "3e9k15CTPApcv15wqwLgL4dXNbBkURB1JAmi8DvYfYEfmLJQdWN1GfvGr1sLgaTKhTChJJGZQn3RnMckZDsTPQP",
  "key22": "4PxxcS7SoLxHbwDgZq4rjqaFHxMACxs4hbLJsZXhgm6BRgpcuzPuhpz873syGQkixsuFEU5uJrucmL3g4FX7fd67",
  "key23": "3u5KbEaZBVkcRP8tbXN4NVD2d2eT2WgxjC6cvY2BfqmkeyFdCXcPEzuD7XXSCy9WtubKBccXdJQqyCpyH2qN33wK",
  "key24": "2HT24y4wdBJaSH5ngVHLJy5ie3wkXtrCxjKxyYKMSrxUwdM9qcruhY25DB3ZPhKtjRBXsUTVaiU9eJdq186ZYbsJ",
  "key25": "457r1v3xMUkkt6HGgkpDarGcHx3XxCtz4QsfgdBRDSJVkfkN95HeFhEeMMjjueYgTNZAxD7T2pCdW78SXrKB48HZ",
  "key26": "2ojCxCPwJx1zaHWuV53XYeKqCsdzp3Fa6R2hhrQwhzSvge6yWJ5Bu6CNedRniiAjg4oeVW8uT3ATHE9H3Lkspcgu",
  "key27": "4FQYU5Pz1KU7bvxby9K7ntQjRNMMKVPU6nbfKTXgvbczrydKiQhX7Z6TobDjsnQenWzDFTk9GF9pCZzUogkwZCtf",
  "key28": "2AXWnP9E3d7Y8FLxayKYsQZCk2UZDcVDWkSZck2yN2C63XybPWWsDaK2r5RCAAJuk1a7A7c6thu8XAf11XwShyqh",
  "key29": "3bodB87zwa2PFCXkHY2FLQNJeZrbA8P7LzFy3GMcQmQwducZezYRLL2N4aMWirMmJYtpwmExwwQQv3fWmUzWfGa6",
  "key30": "2hBUGazSVwGxbYTrt8xrZ7USxRytLG2azezHua2Txs8T9NG7nMW5Lgdj2zS9JQHACjWdsRwMoeputMudWqRTJ1Q6",
  "key31": "5pgQSugkJ2ruHNw4XsxhuM3c1PkAPmVugnBj8F3VwVGcmeEsMqyrnMT2o21Ld76eQWMV6L8WFi1BWzpLHLUo8AFq",
  "key32": "3yMNpkLm5moS9DjJbK9weeLgVD4rnPvK3Go22Fg2Bik8XE7hvt1VZv9Z9JkqLSg4BFfm6nLYiwyx7msNbSDiB8mj",
  "key33": "2q74s7dCESfzJCuv9kieQKkY6BkeLWF8quzVpu1QsaDuBY5BHnvoLosoD39Zv25q9YJQJKgohktxeYHTWdH11nKJ",
  "key34": "hLLKGkC2jD3f675pTY23sTQwpsjX9Ai2UHsSptd2UwPGSXBPTADWfMNT2Wb5GmDup3cEvfR4q5QBQvYXwkNK8c4",
  "key35": "55839VGbbS5VxnN1JXpfPYtU1pL1bACAAQJBiUyLjkuas6GFWWAu8CqFEn14mqMAbZjc2ysenbpF2cvKJPVCzoi8",
  "key36": "oE2QWJcWtaVaehYxKhkNt6NPdhyETMwfzasqT1omJFgr4uDXFj8ay65nMWryMugSotGXpGNBiJ1ZdrjKEsnuh5z",
  "key37": "4MuqMb1Wo4WFhcYV3QayCVrdoZkLfEgqpyvo81GHsf96j4A5mxEWYuAjqPzm52gsyKW44P4VFV5cCrsPTpxcdpHR",
  "key38": "5a3mCSzBe7SptcCcteDcPWMxf76pBiQKTYgpvDMqBUop2dARpaGXQeQfGUGGg6fEa2UHyvZMnKWZudYXph57r6jg",
  "key39": "2NgaKtD3qpekegvVpPtMnxqTqrjs3WgSULwNEjBut439Qm3yrzS3ndEgDtG3ocseb7E5P1VZuSZZuCg5ASwdynfS"
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
