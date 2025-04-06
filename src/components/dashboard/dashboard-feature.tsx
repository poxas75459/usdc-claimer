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
    "5EL6nA5hg4cp4T1XE4NUX8mdyVxpqTQNAAqaroUwSA7MqFTZ1S7zgZqoCSL1YEVXYRsFmJVJsSWJ1bcDRWcCbij4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yuKEjMoUYtWBdTS47aNLvm3ZLZhcQQMY3dUJZ232cooUoKMdfxw3ZoY1edh9FY28eE7twibjc3WBGZk4GNujV4J",
  "key1": "5RWjgKz7AfEGndnEC4eGbeF8F8CeLEZWAHpNoDCGm1QjFdN5ZrH515nbpqBuNTi5JorYQPwZfpTXVR7f3QS5geFH",
  "key2": "3WmaEY3AQ1XnhHEn7XENtFXYMK1QetHwGLdNBj12PWdS1o7w6haHe2N9r4epXyzTkAg49VAnYHjm19Bwkck3rp4g",
  "key3": "t5ybnPmKvVq1wecpfriQ13tbiY59jfKJYBMKQNLdyGwAADPZ9n6ddDitnE9E8SQvr37mEnKpGNx9BBWmtcDkzi8",
  "key4": "2BrnAJexPShZUY5KGb4bvHtu1Y23ysR8Nvq8xKdoVaQXyPydfx1f7TzHJG1akvuFdj6Bn1GrwQn52rQEcEkELAkV",
  "key5": "2ZRkAMoFC4BaxkAAX9FLsNE74KwFCBiwzKAGmFA5H1EcuEmZb2icAL9JZJ4mfXZCc3mjMk9YXYWkzeWv5mgaUKxq",
  "key6": "2qqJi1H6LpbH841NF8NWBMeMn6UYNc2EnPkYTcgJnF5aYrLfB6J6fWyjNRWKysbZQ3qxTos5wKyVVmH2tJR95sMD",
  "key7": "3Px7M72snJweH6q11GKL4GKojnbvfsGCokVApdyTgBSpbHdSjqvqpe5i1TWLrENqvj1RjkzQq9BV4ENAnYfwE3x3",
  "key8": "5czF5vGY8Qpex32mgVNmYSyCHhU77xDV7PqqMq5yGDS6uHwqaKXjU5mypzBiUPDLAYuzyERucKw1Ty81XPrm2cdP",
  "key9": "5vwF6gjs2YzXZhGHgGqcm5R9rBH9nNzwRsopPeZgopR3AQ7UusF8A44hGj2Ug4LbSkqibAWsEfmqjzxAHeM3J1nF",
  "key10": "3ZgVBA1riFpEfY4Xjn5uJCDxjXaQdxxZxkfzXnw34a3LZpWo3U4winMTtxTSW2yjACnCX3Hf87z89LgwkxPXU7uh",
  "key11": "5DL7SD3GGNdaAbuxp6J4eP5KAj5dmMn2AFJpFM74uSapyDYpMaMNd9vUYqezPxQpyfyB546EUfmJEzEPRfv1HCZ3",
  "key12": "Tt1ZvKo6LWsikTj2vegpcPm7mHxAnzBhXR3gUE7ehappMGKeJtZymEtPGnQ38DPiMm9pzd5fm1B5A6qsEtxy8hR",
  "key13": "27rGM7iokLuYvmXxVz6XuFDYDLGKgUVrrrvmWPjF3zVJYe4c9biptivrVQ5u5CFF3x2Fu1dvUpkVbX7Gsx8NfGjw",
  "key14": "kAFmxiUe3nYSYwRUpY1czxhwV19pnN6Qvp2JzGSvjuDjasgo962DgzeP1iRiLEUmBCERkwM64q4trXRCcxjRN5Q",
  "key15": "5G67AqYSxkHcRoGDaNiuTWYEbNpiTGb9U6mhaSBe8cnhQB4BhzfNThm9i7azL865vE866ZVo3nR9vDRScUhBzsyq",
  "key16": "qdFoCNSMf1sxYPXjiKQitsJCHUER4MgNi6jycU89Bz49V9guPq7u2zwxDcq9sePwLZmW2gbt84aQ6NCBK3qBAsC",
  "key17": "2ZNA5fKjM8CEPFYRvnA1HCzaBzimdce6FmmH1vzv6Z5WJ5Sv1RnVYKBBfk9dsaAJ9ToKNoJo1jrJmXL3ShZKS4ZS",
  "key18": "3JCF88rhAtuFKdGUzwLx9XWyEeeS3hCYALCXaXFzxuLVhrsEuq5qayMTwJWwuXE5EQSwBH3FfJ7jsuUHN7gXFuu6",
  "key19": "677Ku1FijdgEDnqMCdaCqEC9gU5VJSxE9KRAm7wP2pV9qmZsy5WMJrNj1jhnEimrCnqkufhy1e8wpQcCTq9AHcCW",
  "key20": "664caSyAzyC74dwMJsktSvaghDVS2dupTJSj11AjMwBqBsgZEwn8GwpLdjj1rKpYCjRrW4cefCGMzkC7QmHPcX7u",
  "key21": "4ZAZYusZtVs2RmcMTF667KZxfw75oQJ5kHYB418jmB3krsM2qYHYzoyiGPDghiUC13xAG6rnw3RqHYBuAtLKo9dP",
  "key22": "4DCBgn86Y9TRBPS3Q7CXo6TsmhzJLA27mLL7x1S3YW6PgL1YUFrcefHDSTMdFbGGuxLsnUTJo1aQWkkVpY1Lp2TJ",
  "key23": "4qPKHpTowCzyFmabreJSYFqybAFqyNDqK77snJQDq1QJdnLmiajSqdoQGimDfVzNXp9ZE9npThHHsZJLjd4eFNMR",
  "key24": "3vbXd16PFGjrfTTzaFCs7rtEZ8ADs6hNFV516KTT6jzKK23nuUkjGCLT8QCF194JrSjzU2f5v5a8R7hNGHe4J31w",
  "key25": "Jh9FRzCtXKvSykQGzL51gy1VG9v5ThaLgT4k2cY9g6Pw8HH1fTZgxpurRbUwZ5XJ8ws4sxhtpDyCKRKe8JsP8yh"
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
