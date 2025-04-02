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
    "2tmZcDjP1QFpSnQtQ5xvds91mhpxMVcRRXBBFmA6h5Srqq13zczk1HaJxhYHf5UEw69VvWqrjWUYd5DE7QVB1EPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6fuqg5HZFX52kJG4JWHohsT2jkvj1VVqPj4Qip8Jmh6EAWBb8ktQpc2NXoXWB1JyxhggBoJYcd1cbRL7Y4rrgf5",
  "key1": "3ErMEM5Ya1UzUQGX2FBodmFtTpRSw1x1JLU61tGUqRuyxMTAo1o37jqsZ9VGVAdHf9S5FLeaRhyrv5nhWxTEwqB4",
  "key2": "4bWpZWhWwV61Eqyvb93ZjsFZS2TQdDxNCaERwQPKJxuBcg26yyPGJtKPA3QDU29WY7JRwLacr8tbGtT98s8LQupE",
  "key3": "t93RFEhCrmnAPtm6CZEjvLosE8j7zrMNR6mE1YRdLazN3KzAc29PXfdvX2q7wQzQXWNUScFuYoB1bDBCSXGmqNX",
  "key4": "3EAbwe3LaMzV5TMzZZsyTRaoZYng31jRyuDiKL2UnDz7zr3yJuRmeM1QmE4TMTVLfrrzqUQ1KpDvUhGrssqVXndR",
  "key5": "3cMiCJgQgcRBnBVezqMCuyvvxnzGDqBNzWQsexs4bBmQMGZeAQJ9L8SnQazVfruEgu2c7wDi8czmnxnaXRtRwrah",
  "key6": "bSaVVn832SaZ9i4GwAck8ijvLcys8KoPDw71Yo8mzW2XLjhVr28fQvcZYJSRzA8denZ4UzFYztRScaJCLfvcjgx",
  "key7": "5Z7p1F2AKeM3bDwTdWPWV2QcwcDo1279gVxvpd7CA5xQLuzfLVLJz8wF1MP3fSUCSYntYD8PG53NginD8PQt6sFw",
  "key8": "2jgP3Yvr1ByEEF65h8YucUMzKmBxGDtCP7JdjbDCBYnwkugwXkMN5f6EDXH5A6Yt48Rs16YExuZLXwabASUaT2iD",
  "key9": "2QSLGYSeQLqHtERy4tF7TGp6FkoTX7q8iLKekjTfqQ73FckprV8kKrDMyPCx7b2S2AyYsMDZ6J1o3SNJABAmRpop",
  "key10": "3M9fPpGyVy2q657mzaA7bivvQq9zKB7XADoSEpo1QCoHVcyoGD9myMvn8jLkEbDmXP4aGnhRo7KQ2K4KmmaPE816",
  "key11": "2McUWgehec6UPbrhaaAhV68udzRFrPnkFUYiCpuDAN8RhVpbgARSSm3nQsYkg8Yh9qWqrCCGRHFdJZFpRuP7N3px",
  "key12": "3HRqfWZ9MnJd3g2hdbPZjiEXJ5qnU4uYQUXwvmQFXVPiEDVyWrggpY8g5qf9ARYqw86MmFQrUNxSFowzxFT5G6gA",
  "key13": "33dE3uWZQwHNMhjpE3zxszzS8pC98VUrACzeiywQ1imNMzW3JNbFkQezd1cjpMUyFxduQwDEpCVFdF8yFizW1xKT",
  "key14": "z1v2p33gaPcunAdG1soS5YpGU3QtGGUutyKFJ5vDkYXPGV1SZ9fFTEHPWozV2pXczdmo7vqBRjLNhBLSauRzwg5",
  "key15": "3TQRGRZp6RUg3Kx2rv6KEPxhNc1Bu3x2Dg5WoArRipek3J7VWB58VS3DCcVjF4PWqTcjsTjGsxwyUG4du5Gb1f46",
  "key16": "2BE1ab9ik2Wxk83YovuNjbq1o23gRzToLreAckGv5nAr6nnr9dx5nCYp6dnUqLA3Jz92KiJ8724vwurSiHMdve3n",
  "key17": "ofBX6oEz413iKcNvjpbFEge2mPVv7F6fT8gHTvusfq1eMwzLkR1weXpu5qiXukVCsHQXFgaqtGVcbHHV5YJWbxP",
  "key18": "UWwaWEzSKwWdjpDrGRRToiwgjVZeEK5R7BakPLiq85sdNTXnZPiy7MZ9yuNyhhqo3fLMZHuzC2hYv3j3MTXDYDj",
  "key19": "46NULCjHwj8gV7kJvBonXCF2MxaBL6jpP55JN2NDibQ95FS2LEfx1nW2eZFVk4CSacjg5txStTs5KBaN23mZVwfX",
  "key20": "2hT4Qj3u3d4JYo73omekp5weuA6rzxYKfidUhMXhYudFkfz9UWjfaZdc7amoCiUMiW7xNZfB5YAd4ctq5uN8wKVt",
  "key21": "3c3kdjPM1DG6LjjkHERudaPt1ny5q59MAwqRAGzy42ekJo4qQNjn3ToChgvXDygSkdHA4qDK2HgGvcN4tNpH8G1F",
  "key22": "5MnB62YzpePmc9x6CsJ7BwYzrRDF6WYLQz2qsAFyCqqzen9AHHKUqkvTrDZfsJaoTWNv6CRHegXgqN4LTX1T9oq2",
  "key23": "3zDascam9aXQGHi3BrX5EAJgFGLoEVVsYqgBUX7fz7syXXtLFic3aFpu5Gx5jjfw3GBjtd2WA5pXe8cd2geSCseJ",
  "key24": "5uP38LGt8ufJSE4yzq6uj7DGX1NVzFFTi5yzjPAMZk1em3wXz4ZSkrvbgteHZukGsLkbzzhNwyi1tgKgowyaRMyU",
  "key25": "3AiKxRuxpwSoV892sxiE74rueXkVUAT4BDddDE2bU1YcSDqX64cEwconsxUgX74Zc325iwmSAXLsWckj9H19BsHM",
  "key26": "5R76Zn4uoAXg9q3hAMpFRZcUKKBvfDzJbptMqRYWUgThXTLueCA67kg5yX8Yq5kEXg3b2eM1ZPtcTFpbxhi1jNbi",
  "key27": "5Ky7dU4CkWvqE73RZXrszMxWzixUemev2y2eiZus7utKboqrViemjS1ExhWk4YPNBdFemcL96mNHnaQpYKtd3x1A"
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
