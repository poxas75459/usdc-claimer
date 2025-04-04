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
    "5YyjD3Rh6ZSQeT8hVXQCXB7GwZT1yw5yDSKyjCh3PYxtoF4CM2KUo4egis1g6DTFqRtE7DBomVr9cqbkQeXJtaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hMyzsekSkJN1HZ2Y9bkm2TogKbwAAU2Z3xX4MzkCenkjwvUTR2DPsMKDARMfYfSx1Cs12ZdfTAndb7jirJDJVzZ",
  "key1": "4u7M3edmRLxcQ8i7gAi2PnfxYHWnjrLCZ9gUMDd8sv1YCW7C9WFcGWwgP5PnGiGxsNkfPdwnXSxieBZNmxbPYuQm",
  "key2": "5sPVfQFDEeTMg2pnVPEX7wHmWi2kR1hwNoL2sYYSaYC3mozxbWVWGUf5eM459ELew8pCqMeg75kzzEAc46vqkeme",
  "key3": "4nqE1myxK4hY6eR5Rv3qmAsumDDn3o4nffHN7p8w2j2oCkarAJcB14DBBtm5jJF4NWCFu9tPSZiChegYr4qaXzP7",
  "key4": "3Dta1UbjMZ9AmPMfqZ4vnzi1wXVyUqWqZkp5t3U8xWkEhPu1abde3PTygcPG8KYzwJHCtH7kpF4FSae9ZGDA1ZvA",
  "key5": "217PABK56op84m33GzjCNVXWgVG7iPcLQkHLE5JUfVj2w52RUski9txooojfSUrHygoqdT63GVT79cZLmhzuzQfb",
  "key6": "s6cw1cH6VrSWhPzD8caRuNn6FVzaiVCM7JXK16jCFpWaMt824rJ2nWvi4Uuk4zP9Hq9Lh4sWgiuL5NutusMJrpA",
  "key7": "5nxsw3CkTXeetkU1vVZ9vkg2kk64mvJ2i5y49359fmJ96S7W2kuVxJua2mJKUEttDdwTU5DxTca6ing3ezk7rq2u",
  "key8": "4fs7wR3yW24zUkUqSLSTEYSn52CCPCyFLTn29epYqDakornSJEUthDpxmszh4adiyDDiqrsbPaZThb3JFoMdDuJ1",
  "key9": "2mT2fu6w4eP3JX8X5SCjhgbyUKmqZJHMpqBMQtLoSyy63pQN8DrKqgL49k84g1Sud3QnxSQhYo9zoPWTn1yQaTav",
  "key10": "3WpJhsy7zCkqhNbSqnT7gtbuqPsewk5gviCzzTH3h2XMremh96RoGCeS2LYAh4cC8dG8gKjqSzyk2m7MWQV2HbWL",
  "key11": "3jCMHop6gsJsEHwtD9L9YArhMCxqCgDQWiMrut2C6t98B4834kmvMWeUVQo83x3wdEZPm8JfK9b5DQ9wSMdF6fbr",
  "key12": "4NCUffoSbr6evToA2xk3JNmvsfzuv72qMnpHQ1PVtCK16UYAk6EVR76D71jiHVfYM794ZUx1RkXuCYEbVq4piECq",
  "key13": "2e8Rq3Bmb4Jurigq9a1yxVhJDaM4w9V2Sq3iB32YpwRqSXiWQHF22ChrcJoqxtu1g2R6qtnJ7GSNK3XUcCZAK3tq",
  "key14": "38TYmLRR3sE4nnbqXfLfCtKs1m7tG6jd1VbLqoY8TLkFheFMVb42HmwwqfQ4hVxNjv15GkevtfDD8NDyjvWaK3Ck",
  "key15": "LrjBdMTbq3bNdVjbSMHzzvMNwU4cqjw1vE2R4hH7mXeAhtak2nyssopYcNa5W1RuCJqJae6nX1b7AULFwzuZt31",
  "key16": "3nhatuGtNAiRWKUv43BXvMxXvYxodDzHd9A6cYBfk1RsL1SsCxH2fzNuaQMrD1RuqHNA7W6UG5UBqw5CYmivMuL5",
  "key17": "6cKRgCE7ct1UVYKHqsrNXUzG2oEC9z4pxgKLLbE9FK3JWbzuHksMJtbPk9PNiCCr5HKcHkcF66svmMozaps24dy",
  "key18": "5ZDfR6hvX58vNAk8XPaBn332FpGq1cq4QGmWe4462DhnwogVQb1WtScQfR6jNioaDuffckszP3KmmcbAPRTEf5YP",
  "key19": "4EVS18t84hyBN1FtaaoePVVWmMf9MdYfvBBhgroGV3xrXg5J9QgLLfQg3X99WRMu9eM62xSvVSWHyKerQCLFdZGX",
  "key20": "61xAJ6CYoDaDpkNeUeDCJb2YFGoAvg3n9uyNMiMqaAaodD86GzHYBYHnaqprmDGG7fCZ3aoQDHzSJDwt5inxbeT1",
  "key21": "4G4gXZKdf6N6KiwEQJqbrZiNDQYZej6ecmA43KtqnAQJ77Hd4qqBVAQd5e6pZ5wXLx6ZLzzxJbh4McixXfmmWZsn",
  "key22": "5HecaDYpVzMbcxbS99r7TfR1RxZWhnUNcuFQJpEzPP5n4X5e8rq7w1yVh6Lf85uc5MevEcmCm6f4e1GzENdQ66m9",
  "key23": "58LVb4fdMqkxA61wFxhtwzwDjszFxgaYbab3d1pTcjTM98k3345rrtMyX5TqpjLjbfoar59zkBRmNN5ajjWHzznx",
  "key24": "2JZ6Q3SwCwPEbqMmo3wEySbpHzTbjQKZov8D3LqHoSmbATbN5ymQdqkpET2ZiuweuX7g76pY53bpZzaEF42tTqVm",
  "key25": "4Xemz9Rxo1MCcX5iV75yoQJUdAoUzHZNHg6jGTdpqg1GE3f3g9duPhwCoMqFoWTsm6PFcU5oYx8V7CgCGL9WXmZt",
  "key26": "3sTL3pB8Jmpc43TJK3sU3AEpG6bTaRBQCgxLvHgJc2mP1jNua4urRwgdBxPLJAw3QDVBGqv7iQEX1JYNpsRAu6nc",
  "key27": "4EME6svmSx1YMkLtxZuQr1qha3nvzWQzLg1xFnXwYtS8Y8RyuV4fYD5R5rqLonYQHFJ2z5gs78b4okL6bRPnvop4",
  "key28": "3EMf5oy6kqBkuwm7bDfDMpobcJk1MwdiKgNAK6ETzSBRZNakwYvfDn3MBp4ERQyKLZ8vivLSwKXCbjKLSLBFE2V5"
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
