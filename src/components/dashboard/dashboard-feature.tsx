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
    "BV7H9ZZtGbsqTuen3MF2qQmzLZyJXHJ9ek15VM83pCJWj1ckhGdCtke9LBuPiKeK4FeJGTCmocSh9g35XWVeeNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UsStmKSimaWSefi9tShPoE5exfbdqSjVRXjjpTJZ7Kz4HBRgo9mGTu6TW8uXiinckLquRRSaG89Mx5DWHNT4uXB",
  "key1": "pDSZFDFEYEuTCZxZEUpvXiKXkEEEaa864iXqb8ZiKSGQhqR7Kdz6YvqmWpAVEEpzvsyqrz71bASj6nrgXhVanQA",
  "key2": "4nJjR9mwRqvkjdVoaZMuou76WDb5N5iqMvMP4CMY8YDecp9MASRPW8zEonM1S3BXsTPz1zQ4MS7aaaQx8Yxretdm",
  "key3": "2BkDzr9493LLwrvx1et8mTSgJdNjSbKbqYfHH4rxKLRHD8wpUJfuPhVRYGNUQiegqqK7vze3Lt7Xcd3TQu8rpQPW",
  "key4": "26vdSMvS61gRuF1617fe6XkeehmpwEn1mqKjTGbZCkjoXUFfxEpqn8Kbva5WvY4tQk5yeazoHFHuhykzGaGdrXbE",
  "key5": "2a1kWSmuzSLS8fF4wGvHwUqeF7izxzQfvpmjjkBbj7WmwkYcVUSs3ecsWhABrANmCCZropexqrthGYQcFxWeaT9T",
  "key6": "2hkj7r8mwZKHEt8acGTozph1TQETm7EN41d1JRYQHTxxTkDKMNf459dSLqLfsnabyveLc7hY5sKF74HfwpeYabne",
  "key7": "3DoQpXH4N5iKcN9ouxb9SqnH8AF7R8vjkcZtEtNyRpCCCL5wSu3YPmmWRkgPemrNtoF2QFUy9zZvDqkRXFh3Q4sr",
  "key8": "5DGGzGEGPVDnBGhontW6Y39rR5ugtDsu6FVijRMoLzpQUL1DoxFomqK7bXrGyoWLzSDYuor89Hga6xcPMgdkk4eh",
  "key9": "3ftkUNWG7D7vfdtutjKW36Mqp9FKN8ZBXBqaRyDxyA9QegnhNTr1kWmLViSNgXPdGo3xRbjXV4mXvVqf2pmcpM6n",
  "key10": "5S7BZjZA97i82rqT5JY5VD4HZqPDxahkP7VpLXj7xp8iyTqhRJ4Pi3R6W4nsufWpfwgcQ7REfJyui6787bwDw4n5",
  "key11": "24strjqH3KoENVeYHj7XdgvFjH8LJvZmCpgoqUiTxewRiTzN3JBHDVZGNG6zgJBeWwJzdd6AkowHppAfqfa93WMC",
  "key12": "k1vExhPFXUqEMvY9Cwn9AS394C44gWMr5gH1hZYmDu4oqB67gSpVUfeRhXU5v11JA9pKFKnPMgCpUZ8u8roprag",
  "key13": "39rxxEzxwWaiMjdiQfHEkiXYNVPWpYyqp33wosWNjniTwR7f218Qtd6DDCV4A5PZ7BD2FZjeosSAJsRVj79G7JUb",
  "key14": "4CQWtrRmmbHVLEwFtpMA3wDGTY8vTPbKgp7b8m2rPfXEmAnXvzM363XCtX9vKp86DRW9Xv4k59irYTmhTW94Lb6j",
  "key15": "5uJDJwRLwpbLX3y85c51si1kmWd5jkHtZntAWcb9apJFfxUpRS1snEcooYdbwcvFSYHRouBpcGMXn1wgApAkxmbR",
  "key16": "3jy6Kt2nqwFDFoQVSXWa7wQMQv3gLY8khjJhGfsPPpJhF9hNWmqpbXAZ4PDK4qbvpfEDtYkUJDkq9V96LhEMJzrQ",
  "key17": "3acKckRsLArK9bi9x6GKYz44pSGKsXLk8CaT4LqJVU9pQFtoeHrAddha5RGp1Z31rUfhXReA7zmXMueXV7dUf3Hd",
  "key18": "3aSsXfodc4Hrh3sKj4Q8YXWdTH422eeCuq51js7JGAs3LEHrTy1n6KoxtUmbx5U6BAahJDuHJvT1khsqW3mC5vkg",
  "key19": "3om1zTkiFXreJnpRUU9JYEgcaK1f84nZ9JFtHnRsUy3pHJK8Yu7mBcYna9rM8pefdFfjkb1wTZiXUZQBb4bC92gk",
  "key20": "4WPNRzbTRE3mF8psp5JEZwukUJ9CEpXte6KVjrsA5SWuKsoqd473V7P1Y38trUsgAyBZVAZjfEY6rS4U4qBgb3Ae",
  "key21": "3EyR8bm5mJKJyQCTr7cJaauXWYmAcLw5r7VM7bpnd8YvMkwYe99gPEwgxXryMNZmBtwUZZs1CUtfYhwNd9EaeTBu",
  "key22": "H97szFJrGtUtL8iv3KNsjm3YnhHLhFWwTw3VM9AXGKq4KeaB3yiYF2a4YK9Cj2KoqMitAxtTDvNKQWZEr6687JL",
  "key23": "3RNRup2WMPVSkt9fXVUhFgLPZaqFHL2szVTYj8NnK5GtxgZqhhE7kKWTxzS2P8m9HPdKaws5nELPmjwAgThVbCAz",
  "key24": "3Mjs7PcKDeKz6QDKUK59NEiTrmRkywYt3eYW7tiP9aXh8LAWWTxBoZuFXtrFPbsVzjb49ZgTipzkdn3okbgvXp1j",
  "key25": "4aNVvwQcoXdYpgs3sVp7qbhimJNXQ3ghZEQzfT6vGHHyAbSdQgGqf9umngQxZ5X8RzNjEB8qxuVQhc19CqAkfg3X",
  "key26": "2P7PGaSKLX365mE9CqMUJzmKd4LNw3RUB2XhEZfGd9Tphjf9sJQPRjbFb3LhT3y35HMiUhxCMKp36ibdWG7QDZhZ",
  "key27": "67G5Tvfa7Qvky6MzuFnD6h66nCF8bPxTGmBsW44Nok1kvZ1Cjy8DYCXVy1beyv63vQB7TFnUfpNxAS6RN76cYmmh",
  "key28": "5R3skCUSGQRhgjndGzRn35VyqH6cEnefRmnwEKwHXARwW8eZrFeQFiAVZ5bpScxZ8RfSMV2jJagAEvq8kk8YSou",
  "key29": "35J74C8gSoL668DVJZXvHYVT1RnDykBRw1vLWTfe4KUo1NcVo2R84rZfDfGjgBeutk3M5VHCAYt3kcrAgRZXaMTc"
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
