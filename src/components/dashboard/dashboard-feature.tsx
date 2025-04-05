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
    "5QaaKRE1QcQbRw8UPrfFvqx6jkkUvzKMGsUV7yodGLZ8eFffMMPJQDFAMZpcGdo1xRxA6mN47LnNvscGfYsaHiGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wNG9ax2M7X8TqfEkhUwoAHqPHpSpf6wAnR5XhQzbRDdjfFhdUx5Bg74BEz6EXvsbeDYHPkwuPchSAwqsTxCcMPy",
  "key1": "2zJu1avQd5nab5Y8c7aq5y6ZsAmb9RoQwpQvpBTAaa6uqchaAVKXQFAnKDcLdAhmzWHfsc9DhudJZeG4PPdgyigc",
  "key2": "4czL1myBjtDFRgz9sudFg1LzqZcAhfecBR8At2Ex4pn1U6CJLv5fgBa3z6iJiM6K4SAqNhyz2uS22r9ZBGaG3KZv",
  "key3": "2FTAFVCbY1LB8janAbGYaxib1aK9ikNs7wRABeSBiqAmQ8yktDQJPajiiXZ5iYMG1SY4YtLgZRYMHna5jTm3xZTg",
  "key4": "7UrAV6GEWPTddvCPckmnjxL3zQEXtZBWKpcRskmmhMYUx2sczWP2rALgKtQkDrdeJSsoxVjiRLcdbzeTNpaQTJw",
  "key5": "5r4LFY3efbaFwrWRaSkwLYB5FSaGDYEMhoXoF8cH28ZFGewMdaf6HbiHJn4WZ11beX7d5uFjv86A4VK6tywvBaVY",
  "key6": "3t6Nim9BUveME8rpLrLRjtJCuKBHF7S2uZigm6F54wTzChs9vrMwVXc656ot7BPK59b9vkSJYSvwa37ySdZ5L1uL",
  "key7": "3dcZqPF9kX2HvrUKf6eeYxYTPLiVvVeKSNA6N7jakpFaN3KB5a4MmmTYrnHGog4Rz7YpLbr6ouGhGhbK4CawXd5W",
  "key8": "4SkhphX5JVMrropYFy4ngw2EGu714S7GEkCKa8kfn9LtpbgoXmDDvAt3CdsXkpmfhCjnq497Kw6XNQLyDkCkZU7c",
  "key9": "LctdoQZCpXkkpGtCzkpQqqdPFTcMZDD9FybJ1nKHc6z1VYi4wBkXJNWa6YpcTkS3LzvUbosPTvhKUPwQGAQZ8c5",
  "key10": "5pSe6657ZYbd8n2sP7gM8z4WHEUtCMDHnCuXzXMdCcBH9nQArDThLi3B9uriFZVCSJ9b7bmHFPTrfDZe6v1mVn8d",
  "key11": "3GJw9Yoavq3n8zRjy1RCrSdG7RPPRSeCzsDmoFNpch2H7QSc3kLwdjKM2WsKuYLgoHXvydVaUkhxBu7WVbCM34pu",
  "key12": "4QGRhAYcYowcM9Zo2XAUPhPYiFgjC4nZk1TbF7sGTMEeWdXAQKmL1Z39Sgv8LKf9foK8ZgXpm51vSsmotCp9K6Pz",
  "key13": "4UHEX6hRnYttu5PsPMe7CGoiwueZTuEJYjXR2hsyYMkEWh5mKecVD1J8hyMG8ihNU8WCG6zS9y4HRcfHVzYn8s79",
  "key14": "5LAbfpq73gPhA1Ukr1BjZVeGiQcwDzgdLNnVtjZdM8h2TSbumtx25qarCydbZsYCwKei6CJZLjffoSjbkTwNho9W",
  "key15": "4brZDSunHVR69eS5z2WCteWrX6JQL1jHsL8eDdXPWdYxEuNAievQk5YDMVEnCTCFd7MtRgB45AbhCoa7ehwzuwyX",
  "key16": "5HTJGuW5KC7Q8wLbkjcg4S3UCcNLvVpXZ5bnrLo9srLNvwKL67Dcrk1Fxc1WmySFoPXiNbGJ8aZMu14o4hHRib7Q",
  "key17": "53ZKb4iMsD4KSipNxPffZnUPDAEkCrsJivrsQtmSEAxJgM3GELjwsyJTHUWqMXfLgGeEJvjHkChT8h6oGqVeQ22p",
  "key18": "56qNitVd6Gw3ScUfP2qtLUpHvAxsLj9oVy51oBzJgnfh7At7QMLNc2ozWnj68VXx844NSGyZCovSbmNmNUqCEZK1",
  "key19": "6XGi4ao6wAhKwLgVd59fMHtt46vk242rmMhm7aY4uD94k6CBF52db7zKKzep4xEjz65BCh7E6f8KGQVhsBufZQc",
  "key20": "2HVo2DydpDz8YgsMKFKPDe4CWNbd7ycymZqTePQBgz4WWyVhaVUf52rkPDSRtBARURnoC5ZQp2F6nuuJjy6wPcPp",
  "key21": "63hPrQp9Ay2bJxFoAphh8JUrGgZ8zFaBRczj8VpqpmdDyhr3xtWRh4th163357cZB1op8FXLAkzn9keyAM6BG7se",
  "key22": "3yKPzYfJYy1PEYuBhrY8Q7C8nGHFH2bnNzNe4AeGg8y21PH94aSvj4FYet4TcPzsmAjSND5nGUx6NPpVKLJSXmh6",
  "key23": "611rH5Sfg3fVsudLkq6SyJbucsueTHMnVjadPLj9jNB3m9Cg6dyUDjuDfGiJWjpdjYdYNMdU2WM5fryCq7ZmjYf9",
  "key24": "43n6v3aEpjSNmoaMPfGfnj3Xz65zFRKk4MAdR9Uby34SNAczhoy5R5pmHTPqvDmLvXHJfJsQY56vZjpH6szcE6eQ"
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
