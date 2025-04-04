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
    "67YpauVps3zw4ZT4jW7rPFnMM3mwH7y1jHQUxqmVSnJRB3URRYkuUPuuqvFmXRAUZx47jKMMP7mw3aqW3JcUig95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NaYqMxUnnPtG296EYJNqhwWYfizLxZBzHRN5t7VEqnVcqfDAuqZEo5Uqf6r4LcsqZAHvgbeoCgVfctwZnHWBmwT",
  "key1": "2p1DqX2yeVDeG1sCGF23hUvaHyjizzU5Jfysu2nZmnBCitEJUcMWomqzQ5WYCSDgJ4miLhYU7d6q6tme7kmUfXb",
  "key2": "5UG8RcaJry9LbXWYpRkW17HzL639jqGoPKoBWDKbfg7c1VtJMyHzzWMLxwKGK6ifX91XCYgTzpjAdunyc2aj297m",
  "key3": "4vP9rLXzZLgxtVsQvGb6ec4munmCXJQs63Tqo83dfZEsfszn9NAk8KbjcFWYu8454GHKtPgGH75V8SwsHQzKhJiS",
  "key4": "2WXBz9EJSxQnNhBXw3QTS1BzDRstF8GpnkBWw3QQK51tMt2PEQnBijRMJajQ9DrgtEsBBejWZpbSG44thuVJQnwh",
  "key5": "5eaYJ3tufjf7PfMwSHZoZwAnL4hw7smJW1Cvhb1v55x4AeZ4EqPqzqf4y2LFyPRMdXhddv3AKpqXZR2kufgQm3GP",
  "key6": "28LbeTgrhBBLyFcVNqXbKsZqcFcmuGWBENmoxEpbTtAFuEXXwV1Sif2UcPwiCRvXvx7F3dDewiK58i8bbUanjtPh",
  "key7": "nHqnqKwEKNgF3EC7nw4mZKiVZvgviV7PDQF2jK4BrjPKapMv1QYjpQM6eaTnTuUR2PssZp3ofatxJYrnFkDMyrh",
  "key8": "5DWJhV7m8gnyu4b4SuvMZKw9N3v4AUhpGrvMxp22aukrGjAQ1xwsqJUUM4LiVpXA1Qrx6wuc5toyRzE6gwCXwVfu",
  "key9": "5ofQiQGBH4qdbZRw5vs5YkrsQa5ei1ibL6BpAeyA9XS4F5XeFvGHFSzUaRCVoFGqB67H8TwogS3h6snrdx7dYkyA",
  "key10": "4ZYVm7V4HDMMXQGtGie56Nbuj2VURuyTCxiqdgxsnP3RrrfGgdXJDmp72MryiqrQJUyLEUY92wfZr7mTxKyu4ueS",
  "key11": "3rWvFZ1ikTEJNgssXpjWkeDctfpWWvRFrf94XmypjUJ6JYrGrU6XbYFmHMeabpyTF5qV5hP5YjtcYs6PLwRQWknd",
  "key12": "9BdhDEdgbMmgHN5vd32hJf8NurzBQ29UmQ1phVfjbLMeTyBUt1y2cvwU7Myc29hz4rPmiu4E7DqNPvFMHDouimq",
  "key13": "oYDffoHyMr7G5c96PLMEDot1GvgiKpfKcWtfExrCqrkdLw3nc9xa7x25SGpDWXjnaJYUaVbeEqRzjDsYhNvBbgg",
  "key14": "26rQG7jrkiYZ8myCGCJ41nrPoy26iBCzLBbubwkuurYkSYGijevfXwRZu661K42vXDLifSrrWaqMU5YshDboakaA",
  "key15": "2Lk5icBuLJG46Ljuk5HuTFTauiWPGdNc83zXGHwn584TDUVjr39u9ZwdrfEVqv3cRYDsp3CgB7navun68M1Qscjh",
  "key16": "D21ZZnhmiWjnuUHdbo8kbqiZGrh4R3R1id8prBCxkaLADULsZPwX3Qhtwu6CXJi7xayiH8YZMUXt3GjPp1h2EnZ",
  "key17": "4Rn7si1S17RhnnNPS3XY9pCL6nTPJK1F6n1SXRwcXHYffShJy8SxfUyN2EFWBCjQ2CSqSWcdBsqdYbvgUBCLNqoD",
  "key18": "5kJkVoN36HbkQ5qH2f9FZYqVYyk8toEas7SaXVvjHBjkukdZ6PL5VDbn9tafWkkivHS4D9tcZEWhW8xzS4gEwJMo",
  "key19": "376AVZ1cXxWEG8aYFoS9er7JU3QNKz9uenxbkSAYU5qHQ75N5HfpBQzAkcDQKWydxW2nnLJaufa5GbPMw5Kssidy",
  "key20": "2HtkKpGVQvVZuXsTiLCqBz4cjkvMgbDax1NbovhyKtezgsGRqjk2h82eGZ86EDV3GU5w1LMVWW8Y5d7SnybNFygT",
  "key21": "5TvrEVDveeHLBp1aNVfmihjUYcDe8iuMsND1Qpi7phEpXnk5YDhezcKCRXBAN4ZHneYJhEYtU49gYrZHsjRskv3Q",
  "key22": "4L5SUgPz1ngUNjUGiMtgMMFXtXb4iD3zR1QEW1ui6ct7dhQAmtFo5mcQeSxJiQ4z5Yinog6saCprGU8apqRbLNqG",
  "key23": "4zSu6UpNpuGETbSfU7dgcS4zex4XF7HNjWDFJ86p8KjHNH8bXgQBfgKMr385BB2ZWtBzbuRZwSE6n7JFfSUv5be8",
  "key24": "2KVrmCq92kcYPy9Yto8CZ28Nys2dcY6ekUCJ1Hc2ehJkk6dy8nXhbyEUBSj1GcFjqY2q4wpwnRxjMQAB8dS5ixVA",
  "key25": "hQp4ma8bQiDv1xPHBkKhDsVfJUuerfSjngTLhZRGQw8x3BgwzJkyYxskiJJZcSHfTgnoeFBLY5Xeu9EcMff5R8K",
  "key26": "2C7PRgkku1XqA8utabDHseJweCn5pWBM4DZujAgoPzSd5FbgS9dt3Fg8F4hGdvtiDWsP9w4zCrxMwKNaiuVTQBxu",
  "key27": "4SphLqxmKxcEVEM3LY3YYDkVbiKRHzwo5GUSvHE7J4b6C7dBBLvcaBDzaJXkrzeWD8FirEKGLFjiqkwn3fwHy7t1",
  "key28": "3VEHK8rRi79ejPisCDQMQvijqwMNXCbb3rPmnx5TvR3XH6NFD6zjdms6qkt5MfEG4c4PL9XRBVVZxjnxMjFdNH9w"
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
