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
    "5iC2WVdTSF2F9Bendc7MtXb6mDMSPNnP6TrM5e45ZaqoUJvcUEiJf5MUkhqMdNqdAzpoP8NazwFBgcLrinpcCqqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tDCzxqsSvCU2guwgNLknV1wfy4ssvvzRTEApdyLMMNDvkM6Qsn1DMZoVgb3bggXxDZ3QFNQL9RoU4RBTohhsQym",
  "key1": "4x54MRLm6eQqW4LVSqJXPN97c1jFGoXZ6AbWnSQpCUrE1HhYqjf1kPNjgpnHJdgSBWRUPHSWXkYy9VzU9iCStNnQ",
  "key2": "673K59sZXoWpJNKqBH9o2wVbw66GVmnGjxvX19iaYkyg78nybQxxidvrq3EbskYaLoovUcxAcWaZmv3V21tTx5HJ",
  "key3": "3ebDtX6UBSRBtvNaKZJGWaRAibeSYV2T43FixVzF5p897vy1jTFfMRe7QgwMGVFRCUr7WSUPnB5iwATcyp7y6NRB",
  "key4": "2zrGtrM6Xy2LTbK9TF74iTztr7aSRM8aPqJJaoJu1Jopaq9vNRTQ6rva5MT7C55jsitvdq9Zt2jXbmJxtAv5q9Ki",
  "key5": "25Qc7KBb633bAQp4o47kr8551vitwsmVez9VATK38usjYzMzy64H1M1q4ZimbP5F1qQZgY77o5FdhBz25KH2hHAs",
  "key6": "4iUWkMAyb8zKzTcDw8wdtwh2jcp6A6sWKzLgytFhkcY3sbXudbatsPN8cqHxo4dTBPorQZRATkcBzVdNE4c6CSdc",
  "key7": "4dTSm842GVNzzXh4Dee3ZZ463YVkk7RtF7ePsw8fFqVJNTwkPkP8GAiVXhKAxmkcHnJGL1PRjdp5wPndtEUWdpZj",
  "key8": "2CWZpFczw3DKDoBHK7D5u8Am6qFmndc32GwhkDcDFWJJTgaTMd5qy4MU5TFUKwK6p58NcmhwZcsa9127AEQWjTk9",
  "key9": "2LS6XxKz3v1F7xaYD7aa3sFEQGUUkU4f1sEABQGddPEoyf6eC9mK8JHfdXGVPZzKtrC6ofGnpKE1Lc5R1CuWJsjo",
  "key10": "2gZdUSVnNkbe6jw17fmk9RJXhtJpbT87uVbTnsEYsGcp8UY1pjW17nqcW4U6t78yaojphJ9r3DDaLJ7hy7MnmQ7j",
  "key11": "5dym5AHbo7zbiMEjB76Q8RizttyzepkZ5FLYJKo8WGSkQLj4EDzv5sD7Q4B9NxXwg8jmeyyQFty1tr4fV6hTQfwH",
  "key12": "7mQcJ7FAAAsADZRe88sX7mtDS8xiXwH39RVx1cpjwS4mYD7vGmux3iurSubVB5BaCBytD7hrwE19XNrM1SgxrWH",
  "key13": "4hyJ4kG51kR2vGEUStZX5m5cky9LjRgZ2TBpySBpuomzFacQxzAXNNMUAux8HpUZDeiRGb49kAgyjNENcsamZiRd",
  "key14": "3r3F74gf4RGVaqCSqNUmhxXn1C6imqqkS3dRx5Q3YVWqu9sLFuNde11XEG8eJKckEdStjdA5amD6ZWTgf4d1WPEh",
  "key15": "SYNoAKacfYgW2cPYxz9zhqgiF8Joqnkz6q7B6dYHn5ewohikfBudSm4e6fUrrcbbPyRM3qL7NrGigXz4H6VheDC",
  "key16": "2HNoHyGLhKR7P7TcE7mgSbLGhermJfdrZasmWXVVGEfoTEpaJkEkeN3uS4LyosAH2qGQTgDot5x42NRqBYNJ79zn",
  "key17": "3Wvkvdh4CDY9ErUuxoNszVWjf8fsmwvYGbJxVmvfkMMX34mkJJZuasbJnbHyiD5o3GVTa85UWREViZbaqrS3knyY",
  "key18": "2qMXcwkHuRpCWf1TtWjTCBo7HMYiE85saLB59REAJi9FMKDBsHKiGbKcdBhpvquemwT4oYhCF35BCrsrN2iJqQm6",
  "key19": "5s6mNxnVE7jifBPjwmzW2cSBCfwJwvL1f7SnzZfWuhx5udUW8hYEg8uAkivpJNEMg2YZY93vUfVA8zSDSNLkb9LB",
  "key20": "2Tb6oXdNgsvQP16Dk9sHmJHWsVG6AETeTKoex7nR6aadATiYewdavEnRbfudCgcW7sRF9qqcwZHrzoBK88togeTR",
  "key21": "28pNph2vw5ze9JHxE4dbV6pHo3asp9ZgQ4Qvqz4YMb5F2ZVofPt15UKyYkc1CurjhKJXpsUF7uDKiLnj3k7BgJHM",
  "key22": "5rYdhP6aFhbbNRhb17mmDrQM5R6TVWPkrcCQHgaPvV3sEzjWrWDuExr5fkaxb9RRwvVVoa5fofYuKt5fQbuNDAng",
  "key23": "4Zgrkwfen9Nb7wTwQ7B695ZHAvsdoDd4WmUf5FhXmV3nXVsgJTEewun2DJytckMZEXKe6n3eHggtuwR5BNPosPjp",
  "key24": "2vbMf8PcCv4DhEWSQ8jpn3XzsekSkLGFGYtwC49qGUftqwgmZ6ZXnh88hRwGpTpd24gMaYHwNoW7F2dA1STtAxfa",
  "key25": "MTeprYfNvqYUpV2751scw2y31zAcHjD3v8ifQhw1avyDy2YN33DbSXrhKMJ7TLGVYG1zdkiF3EkLtomtwG33nMn",
  "key26": "2aBXvWpMJnFxhpB9vTNmqzvDHNFYVAg5B89mXcNrDfXyfDN4GSNvnCLhAB3Rvhgo1hYuHwj8z81dbvonNKqkfkKx",
  "key27": "3BGVTXKsYqDG1rUWcbrX6SZPQy47oHUaEXtAcpy6Ja9Zb8DW9WrgL8heacd8CRQ6uMqcUqijrca4vVux2QyCha6s",
  "key28": "2ag39stotkzpWYQtU8ZGBfnjuxEg3QjRCXuVXekShpNo8xt31aXWRhNFXf3XhdeMRzUCVpfT98bM5CbE6BZP9RTJ",
  "key29": "5ZHVKKpZ46D4wyFQEyDwTcKzqk7PZSia4KLcQVgS19SKE85hLUmZMzDJYc8BepXKaBSAy9qaTpiEJXtusaqxQSbV",
  "key30": "2dQmpBnaqpXbskm8vtY7XtPH3SgQ4b9rNpSN6zqnPZrWPA2xgewEJHs7u41RFNTkNSKyLU62xUkfrgABSnPVdzDP"
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
