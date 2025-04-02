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
    "3XnqQFVJPCsWBz6f9zsSYAYmqfHuUvYjUpAAKcDhZpsGUi3G5HzWDS6SSc8sfKAFtmBWX5cpYyE7NqQDThuuxTxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "413a49bN4k9RQzetaJfwD2NDJyBHgpoU3hpr3cPYYJhm9Ffisii4bciXSHqWe5xQNnmZ4f215iohQvrU4nXqwJqw",
  "key1": "3LenUd66KLwFXvT2srWz86kHwfgZ1YxnkzuZf9kDngr4DpAZE761DvrMLgWVukwahcHSmz58Fcxg7SHf792aDmmC",
  "key2": "62mPC2fUkyUDJNQ7urgoZtLy3ufMYvAq23H8k3k2ZNDeHhb1S7wU5sHZ2y9eFTanHHyBbdJk3dCzTDMt9gF616ew",
  "key3": "3kj6yXAuCujDf91bXcGpZX1v3e22qE1DeiKTJ7nw2j1PoQwDm22DmY8rfcs9ZMQY4KZZCsDoReWcoobcehSS1Rr7",
  "key4": "pTr4Lg5BczC5UqcASviri3DENkeohhemGCW3h9EGVGorkkvsJweyeXefNLAJza8j3tDsyCh5ajuhwmDhEPoLeez",
  "key5": "4Vc5CSiAMZLJFpfd7kepjjmaJtck54mjQWhnnGYLTyJtjS8SVftSLDrMLmcs3vrH5mX6CFQjoqVYhdH5F6KD3uS",
  "key6": "3pGcn1GDWGtGePKFRo3VrETKtVkjuWeBKYVwi1frSeGmhDy14BzQW1VpQb4cbbmpacS7uk1F6JvA9KM5ucq827dc",
  "key7": "4JaRTa5mFS67ip7RvWAhLQgXtMd9dAGcwU5uLgNrP91dkhkuv3MhFqPS7K8toWs7r3nc3rKnqSx3bmx4gEJz5hBk",
  "key8": "52WJrGbUdvJGfyNjw9GsHuLWmMxt7yNFu1AnZZRzHoCYWM1M1mFtJQNC8sFPf3VVoug429aCdbLj3tzpENzprRZR",
  "key9": "3PyN4PvfKYf9ZaaL17NustAQ8XRRs76ZqfVJHGotLvHvVvsp3Ta1s4gMaMCxcc9JZm7xaKLa2CPzticuKdEi5rtS",
  "key10": "czdW5dWwxEYfQtBmkawxHDgyCttLgDYtXccAos4VsmkY9Y2RoHsqscoNE3s8TWEnMkgCSvgmTNdukSjeo9wJZkD",
  "key11": "3DZSj7qWXM87epcPDGxTzw8SvSu4x6gCWmTzttigc1Vbdx8z2TVpt8P2cVhzqaoAU5VsAt8RC9snTkzbpc8euUNi",
  "key12": "3Py8ABzbm38GrkJzDKDg1sAis43THbGMNEo2Y8vHcvH5fvLXqpcZXSjatwaAu7tcYgYoeoLc7VCoabShLLqbUJkz",
  "key13": "24PUpygB82TQTmyQ1ipSu2LxveDavM5M9aR1cTTZRdbeGX9tP614THSu2tH6JDQVjA2pyyZMQqZsykrcYhy8PGWa",
  "key14": "4ak8gkH2FuEr87s8qsKjzYykyUQ9NohZuxahuEfARRrETTVXtMcYjbenzALiTmpEF9ReqpLNizpoWZ8tBEDN3Zfi",
  "key15": "iYi1ZM35x2V4A3vyKRLkqU5VPa1ZScSFS9vV6gduJVRZLu73ZVUj2jEVXCM4xCZejFaGwKu9R6uThpvsFwJLbjK",
  "key16": "34ttcRq6nPiZhXjEF2TUzgTv9jRHC5EqLMhoKmYz8FEjstqNwtDPpKsM42imipnf8xj3hxBgJV6BwEzcn8pH7RhZ",
  "key17": "urzkPV5x2KXaaeaMXULt6xjKvKrSNrVWQVLYkfqQ4hm4SAXZjVHvAquNYU2nNDB4qvnEPcQGPssvUHRmPF6uisw",
  "key18": "2mXbKZNj2BjcDShCpGbJwm6owMvz7nqtxYAcAhxSkp5wqM6VXN2mbtQzg3gBQTCoYmJCvuxJHzUUwegwfo9gb6zZ",
  "key19": "2L6veqsTv5MxnFmGqEr2gNuQ6kuGJDvN4eFJXa1ptuuxYuynSvfYnYKdvrTWPzkf3eRmqHSupCRm3kM4hmPnY1FK",
  "key20": "4W74UeSYZTF7tJdZyNdS7anBjaeT4UEe8K6G9iYaJqeaXApJYKB2k3unbyb8KCyx78BZsAGnuk1Cw5wBYfqh76jR",
  "key21": "qfL4SzfnJgGxEAXconJhtuBeGYV1ZemMAxyyKBjmsqhE9zBoKrTLwKU5MkPs4qRE9KVFPWsjakemujL5ba59rH8",
  "key22": "3CQhwKRTS5qTdPa2V7CJDc5QJtLQ6P1Hh9pRhYgQs3NVdP1W2DMiDqaK8qkTSGyaeU5h8XKUF1yK7GvFkQGcL3sp",
  "key23": "49RW9QXKw6F7ia1N9AD3J1XDK4yBf9iJ1LtAK63rtM8gHVjcSR4SgpYfwrXqBTVy7aSA4ZjaPK8Fqvnqqa359XcB",
  "key24": "3ECSgFEYpZzrvF5NGcYmC4NkwpJX5xKYqAagzNbUNC7y1G5TNMYcr6zRLy6hiZbvWKjzqZ7utde9EPKGMyHY4fyv",
  "key25": "4qDZ7mPynQ8oFovf1tiz9Zvy868aNJFz3H51DxRkf7ockVrgciLzCgWDFLGNkzsY6PJGB7FRZ6xrtsTEFDqVGzin",
  "key26": "4UFvAL7RYkT2Hi4pBaW6VxZxyTsqxL9HJQbd2pVqzjXHWwgBA7vawcMZKw2JmTZzmTCzjaLSuVpoix9MpcFPckCc",
  "key27": "EvqNkqbMjGFrprKPSsESmGSNRHMVQSSTyWy3RhVmCinCfJVnektGG4yzdEdLhgeA4HRqfHsGBq1JNWMkhXEV6Wp"
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
