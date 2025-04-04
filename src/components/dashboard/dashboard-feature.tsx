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
    "2oLXLieRzwvDcYvUQ4aDLquhFzSDoE8EdoyLVACaYCn71Ykt4AZ2dWausgRQymsSpr12TMohGfYx8XvvtC1QCUkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cZDudcpQr89x3zcWK3M9fWzq88e9evq3tQEZCvnCRXGzNc4gWT8rumStBkf7ZS9Zvbxtgio9Pv71x3QC8A9cn5U",
  "key1": "2r9thmt9L8uQAu2UBHS17EXUXYEpm8VvzzJRmBn5VYnfWn6G8ebRRe15XC4Nv1kSNqHDN9CvtNCKFaRnYFkXYmZZ",
  "key2": "8d7hSgR3e18vdbgbE2n2Uq1TEMXZfUoMzjLU6mGmRzKH7SaPMv1Kp4fQxf9TKCzLfmYE26hREVroc1xF3mK17Z8",
  "key3": "2TRps4AqpLFLioADq9yPt5Lt23QjkCh2CqDRHAAAkFegvoMVFvLEMq1JmEktVxbog78LBwjXFsPxATBEUhUeye89",
  "key4": "4o6UwPXrzTrXRFpQbxNVAnidmaPtJ6UR7LLwyGa1PyLKUWZg29jWAuU8LGdP8R3shfGVnLpLdMwRfNoyCpuN6eyr",
  "key5": "PN21yBYfjvU8Z7zdT98ZwMk1EMzSd56bgbDJJE8dJxrm3XffaqyPXYKpG22NXio7vibyrvYYUGMfU9TnUSNE7t2",
  "key6": "4x3WChnxmg4xXYqAesMzTMY8CAmse2JnWBLApPzAhFkHxHZBQB8PbYqo1kHY3beRYcfusMLN1zWN33Qjz56ZSW7G",
  "key7": "5QRa3ySLHt7E2JgkSuvS7EcithASE1LeSmNQ7gk47QoxbRuWWatowgyHgHdGDnfwmqAtvYU5ETWTXAeVY81D52nm",
  "key8": "PbaRPxrVScvAbn9uGTDsn5tr5cjPZB4h49fDJEm2X4N2MHz5n9v8QQLWbE34oEkMaAgiwVqpLbp2QDNGLiGLMv5",
  "key9": "4g8VVxi3U566VTevvM3YatBkGLscANbaVTS5pNWd329K1omCXZTqWXPN7SKXa9mfPuttJceko5CWY3UTxWVmquj9",
  "key10": "2Xc8Udcb99LDeuuUmErHkMxRCp7sHJbzNqLtGDdacAu9AJCnRefrQ7Hf1wsbNDKCBCuJHQjapLrAAPH1zY5JNezZ",
  "key11": "213GPVUiyRc4AMqiF45ZzKKcEi6FcpzJUNYhLpadcZ7JHmpYYYfq89jztvHwYjF4hek9N5YVK82tqEe9YbiEorzD",
  "key12": "3ZGNFxvG3mANwZvHzsZLTdo8WCjEyuPXPC6m2UTEiScXSRo7pxvC9FFTEeTXrDzyMvkF267HRuZVB8ZiZ5CvnmPL",
  "key13": "7u62E2VCiTW9k9J6HpYF7sNhHf8NTEa6rJqhUXVCnTTkV1bhB79naP92CVDnBz3a6yAqPQMgiLm7y6aoPbxhBwG",
  "key14": "e4tt5Nr4ynZd2eqJW7beAr7JiXor1CERMfF528m3ZcxNJwxp9Bn4xiVWxs7fgP86FVeYgVAD21KZ8hooX6GEbsG",
  "key15": "2TwV7HPbt2LigquQWttvHTA5xYbcD9rEe81MiBDhowZBHq936HY4NqzHU332q6ohXr9GSo6Pim9kJHFja8TKf15K",
  "key16": "3JwSCbgwuTcVq17ouWEARKYJGVcsmAZqMCdt57EySfyW2wkC6tpgHyidiRZLAckWoqYHMpv3ZUrDNEHxTdpbefCv",
  "key17": "5MhBqRbkF7Wg7LpnWYHNZZgsEUqD9gEZBVe4ysadjSbkipBikcQNGsJ2qb9YekQo1zgnn8ZYrFJutpk22v5MPdRM",
  "key18": "2MxgmiYXjLELEGjHfJb4RzP5tGehdUHMyAiP6wWSdMjWoVHjxp9UR4Rpi1Kd2YyRGWkKABMTbLsBt5u5Xqzr2iuo",
  "key19": "JQ4bSzxbQcEYD349Z1tUfkBfSzd4xQsaLXcN3dCH6B2k1WGWAc8312BBKWAWeFY36yFfiiDNFiFVsUVE6hFzKK5",
  "key20": "3CufXo9TKbNpn82rjdz2UwhiPPE5NVxiL9EDY7ZX2pvkCy4bpmQ1NxBWDUqBzpyQS5ZNZvobot3AMo61fVcMcSNH",
  "key21": "51KfeaX4NpUXM25UQZgnDVhyp5P12YN8SYautXpa5Z8Reh1nn4boEEXb1Fiy29fS8nKf7WfoNdRwb4Q7vLXunoLi",
  "key22": "2bP56MHeT91WZnuCdZ3euyzBvxbUt7MZtnbjLuX1fHPv9owXqr4kyRS3gwauDuWKJaE1aP5hqKHgia4bAthZbQy9",
  "key23": "3Mh4TattZxhfXdwbZct5ggKkSMPRLAWe5UYMoBrP9uspjNbMabYmD14VTJBUkwFFSo3L59WyJiQevuZQjzHzitfz",
  "key24": "3dt8QP8k5t7ssKC9JXeDqhhS7CgXXigGdxKBPWc61aFfcvG3q2idNzsgojWYYDwwYhaMUY2x67m4btC684AgsajB",
  "key25": "4EfKVGDk4EmNRQYxFLS4rer9oF3SfDgNUweyLBLKfafFXLFJkt6wvJfnYvNLLDavasNfGSQf72g9ytMBsQGwSJMx",
  "key26": "52s5xPRnQc8CswWWB5HGCYprCgX3HvPJgTwsKQsZJdJhKoSmAcZzsbJd41CNfYbZ5Y5N3YDqKegGrJap2ZvN8w9",
  "key27": "xPNiLi1AXuK9Rv8yAbmjExDo8DQ5ckEyxMg1twE9mPXQAU4Fg2KLXvcTWMQmmXb7xETzv8VkYzz34XSoAPums1V"
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
