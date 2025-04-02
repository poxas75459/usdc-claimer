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
    "4zh4ZNXEhUvc132zrAUj72ZNr74DqGLcoHqxAGg9cAjfTY9knTqnmCKGU7s6DNWivyZhSZrWvcDYtyu2kZuQDY2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mPE6gMm545gLsrnU5XQ8UmLzBZfqJjsmvpjFKz72zSo78wvUJarp6rqEpSoxfEUStaZHEZMeMZ8BgQruzvSE9oD",
  "key1": "htdvxdwowkCuVV43WxB65KTLMLiUYkA2RgJFP9bUEiQ1VnjEKkvcyZY4M931kS6wiUimL9faBMDRuBwnB9vbzRE",
  "key2": "3uqDHNa9dDKUQwrK4goLQYxmq5cURnvng6SNYjonptifTHp6BXBY6tSjFLUdsam3tDqwF6TEgRTzvGpcaUPFT4Uy",
  "key3": "5STa3gjsJfguiKk8emA32zi6JURbZUQj5vKLfoQK3eeccJyXRLzCxgSrgjT5YkCT6tBRrzJCewmQcCQhj3Xnokgk",
  "key4": "4hUVg3zWjhWX5xewcjVS4CP7PoNuqkHeBGWemKg4bkWxhgNZh49b4zZbQ8ReJruSyb2cntwwA3eqCCj2nGwerA6B",
  "key5": "3k8emHKMsiWVirNBtHB2PLyswMY8cEme2gysKy88ppAPFTm6XVqeEtxscx1wq8GdBs1Affm28wQqcHGiTqznuC3M",
  "key6": "3kNXFn1fCBAxpVQrv5YJvHr6fgWvcP3L7P4weUP5zD84Dh3UmNP2DwAFLfD7Ais4fRkKaRAtYWA8jfJCwgLokFGV",
  "key7": "4cENY9fta61UC3xqHVQEDAAU674JtUaLoH7rNK5Y82kjfShs3QupYKQZt8haEbB43sMMBk8EKFXamxuT2Ust9px4",
  "key8": "397JeNSzABcUb2cHwm8WfARfVwPJoBW3tp55nBKqUyG3xPdNdSEAtgHDeswuqDGPg3BdfKbuCTodpRUyxUk98Fmj",
  "key9": "31W4FPvzSGAyXV9Cex6v1k8hGSFLHsYJpviTMdhVCwAXgWbzE3LiHXDHTF7NY6rbTeJVtiM3zKR3KpJM8S86svvc",
  "key10": "4dc2PEfFsnZPKtbC7VJfmZ8vwvuL2fyc5RDS72NRARPkipJGVx9Y6zXb3NCvXy19Tj6QE4PhTq8WPLSSaZhjj3AQ",
  "key11": "5yUusJMfTUWKiz4UUajVLhPP4ht6eVqrckiqyXMGx9iDW6mAd7kZrbG3ntCCgCVAZ6WN4QAj4AhtXATbHjfe7EpU",
  "key12": "CHBGH1kqq8Ly5L766WHpYpipiqmXFqAMPhks2wab7vd6469rPdiZizjhAyG8NLRgGoY5TNgzn9kjNXGZZXhjcK9",
  "key13": "2JMKXxGUH5et8FJkH3boTck8xvNkTZHBVQUygG6K6Sk9eaML83VUXy2aR1F7LE4bmFja9HG1xGjLrkbAU5Es7sxd",
  "key14": "49DcJ59UGLpro1q2ZE4eKLg5Vr7mJqzFgK5RKc8dGAPBWYSuRv7q3ZP9YRb9sY4n966tfziPcyrgPGYmpYjSfFk3",
  "key15": "4AygFhrcZAHv9SDs7Q2ZvDxgfvUGJGkf8Tyb6DXFyD4Jgawtgo4DQok8f6NjMRHMZ34PR9zYGdEkFKbWcw5Z4sGd",
  "key16": "4oG5zKwNo6Ndc6XVicNcYtwVuB1TNDxugWB3CZFosRRtXrhjZAMFK2qVoAjtKfmcs4PyiR1ddQbZQxdTvXkShTjy",
  "key17": "21NqSdtBLELSx72LWvCWT9JAAE9nL5qEYWL8HYnp1aSjFGzv5ZjKLT6DeowXighWtBZzPiC4qdq2PzRm2GJXu8fm",
  "key18": "5zk34JPHJCXn88B7cDcHfRgVPrKjY3ATCv3qK9onrxy115J2UMwCDE1YBrUaREaSfzwYFMA4ekvUj3XGCfQb7TAM",
  "key19": "2ECHz6STZJmpMVj5STvdoEVJXgwxw6N33A71ZUH6B5GgbHgAZ1uMJoyzPhpDt7igNWc38mNqd86fg9AbpLCawRGe",
  "key20": "539zr1pj4Rh2sMaAg5tF29132Qs3fkZ7tby4P9cP87sQ7t9AG4p1hhADfnD1oadu65xtU4oWcbc3FoLGqFPeLCWm",
  "key21": "4y56CL6w76r2JfhhCHCkuBdQ6cxa7N1U5gGtCYH2MJtftkXtuA6yynW4o9EyxCafz9nQsLGhtvDRXYiyh5syHvh4",
  "key22": "4WmT53ASVGUBeZEtUvNMWx9eiiCXYkrHLXcs2FETMXSyQj8JkZPpwSxGojPBovUyHfct9iLF6en5zhqTmRYHByms",
  "key23": "TD1GA2HtWfb8wvw4jGE8vcsRN9DtvBqTEGJKiwHfGdQBfvHzp4yYfSkk1VhCdvfFVYXC9RLnrQ7NK4H5iG9BQoW",
  "key24": "pRWvaSsTFUrvRHMtursQDkrtQ61pb8GLdQ5Ykyt9naattrdABeA36uKuYZXiPYGTXms8qxb8AEbXjxYBQ4UbcA9",
  "key25": "4rHpz6EBNz7qypv4wAfQ7mS3tN4QkkT7SYsqRK8mhzvbeszwTUXNYikBvhXA9fubemtnsomVfMeFXMjjLzzBRmQR",
  "key26": "27WvM3zBameMvbhh4ekYZcxSpyeFN8GYXhbjrMRPc5ywmAM1PCud1dLab9BgNGC9HUHucVBRWi9E81xVYp66bYoi",
  "key27": "3LSkHpWG4gU3pizpsHcWHaSkfV6MQEvS9yQZcbbQrdXeYhW47T1Hc7gbGqUm3KWgZEsAq8rjzcZwGwwxhVNZdwYr"
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
