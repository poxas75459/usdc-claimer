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
    "5PMwBCh7mFXqEEYknNy7AZvnAoD5HmBoWej4K3ygkH6zEoYZhNJ6xL6YS2wqpa1PXX8qrMPoQiWoU3rzzyHJtXYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mvQikcdaovY8HJLmXddjnXy4wXKjxNZCvf6cuoAYS8nSztJGrEbCvNqDCHzL4yumSB21QE8EqmZEQHYRuRPicSi",
  "key1": "KYVRtA4NbX4dnkMAHZbq3rgBB8H8XwefzinpLnn12wx7atViA4VNQh8w69Lv4uMtma4xFZGJKm58gyS8QDjZrKV",
  "key2": "3uswx9nuQXngNksMHdYCZ23xLHDW2Pf1MpewC8Um2UFhsf7oWDAfLnqUzghiW8Mi6cHNK5RMPjQFWMEBun2nFyco",
  "key3": "5HFY2Zpi5syuEcnAUcCofEcsTQrzTSxoAoJysLPQKxgVzTSx9jzXx3kmDHjak1aswDsja6J5PXg1yxeyJ7GmkRMJ",
  "key4": "5bjvdGieBRdMvKdtg3W1Zmjjt8ZviY2G69RLQ9JTMu44AAWW528HttjeCWYUYYbJ9b2qWJn9JtbEmd4fDQLCCCVw",
  "key5": "5r5rh3NK4zgYv2rKuCs2qev1YNadjUAdAfJrJXGMtQkUiqQovvmiYA1bvyx77f7kiKNUo2ucWRSwuNcMgPfPDczc",
  "key6": "5QDQwzoU6x2oLXEswKyCumeAGCq8gnGKA6AnRdYiUG8jR3TwSzp5yFAh5ux3t2cEEuy2WGgMjBDjyCTgSNf2V5kY",
  "key7": "5L19err7XzLWBwmdZPc1gmQkeanKxNenKgdsySHjgV25V6PxzbBfAR5eQ1oxrGkrRH6ZTj89f2n1DufFmZWGXpvY",
  "key8": "3SpeeMNDUrUoHtPFMZneCj97JAENF9fiWENKbvshTaYuLaBHSuVRNyTFVdbTP3WYJ2FEvUEZhKbR8dYi994CzE2H",
  "key9": "5Dit1KD598bBr6VRFciUrn21mJtBbWY3kiHs17NAiCdzsNxqaBacmy5agCeV6gSLQj8Sh9EHHuA5dVVvNBuRCJ7f",
  "key10": "2h1sep7vD6RSkebebmBXvyAQoRgPq2P1aNJoeXYg3RSEj8SsepYMGEg4Sfhq3CYTnz9MUAGt2V152XfUQ7HxvSiv",
  "key11": "2zsMnTK2YKKFw2gJN6rDBw5QzeX4Kf26tw96LX9esK2mEky4oM7a9vHzQTRgJRdw5U24tv9QtKT96EL8LWQnPCJr",
  "key12": "5YjVB58ZtocJ6V3WqApkU6VK7U1mznaBVzuC6WLoQh5YjEmc4fKw6tzuNQySPjf44zU8zu4Tx3jdgtyExoTsP4YA",
  "key13": "2gAYuQYyPQNgPE8yjB2s79emFhcY8Dt6VXJmfYKXjEAw18eVotbJ7jDJyMT9t6vKGhDV27T47P5nsxeEATGTSW9S",
  "key14": "2Fgv8k3CoB3sE7TqVgzGN588pF3iYRQ27rNC2F45H6DVNEhQwRE8y6h1hj479X6pfbgYUUj7F5NHWZrAnhghomRQ",
  "key15": "42AGS849DcHaf4f1Mzykyd9rHh9zYNsf5gQji1H9rbTZDqatxYk78wym67LAcUSbWBRm3Bai14jHop5rCPzbcX9J",
  "key16": "DeWgy2TD1ox4huh1VL2z2rydQ6fQrPVudcoB3d5H6Fckr9fHm4gca7qeiw7asiS1GiDhopwPvH7jv5LGPCwzbYn",
  "key17": "zuDGG2ADezHfZaiKBwwXqvm2Woz7VRJpQBfNKeoReReZZt4AWPZUpToHQqoJA2aQfLrt6qihxfSaKkBHwJ7SoCT",
  "key18": "3hPofXcxY8Xqpp556bnJHKJHRGkMByKNnCQt8ytTE6YqEF8s6cDszcZuLynawez21Ayeo9XDbbNyEMexYpx2w4kV",
  "key19": "5A5pf8iXVZaasYqKghQY7DRzxFqzuG9o6tRbWogv32CNZXrX7u9XrMLne5hmTcpMZsuf32xPi1BJsHn4tbLC1Jgo",
  "key20": "2HjrH1oPHFQToghdCDQTvEP4AsVywYTFpBwpsWQwFifkLfck7ix9xAffGxtjRUHgTyTHgL55rR3pFcJif45bTJ8n",
  "key21": "2kYc2S11grq5w1yuKpfUeAY4CjcbWUQECzk3J6UthTGWe69wiY8zqtJWNqMRk7QGBGpDz4W5iEch7HU8t6cLGbct",
  "key22": "ofkYrSsgMv7aHWC94ABs8VEYQsCvoJ4nvNtywXbuBU62ihDGNdqfoKV8mK3DPXMGZtCSv5cVLfFowP9keDjipMB",
  "key23": "2wj86dqiiyTDWoMz7EeMd6pNbqwPrP7fX2YxnxZ4KDDr8AjFn7pxtCVTRnqdcydjWRKsZZhJEbhXh3YoEE5w3zqZ",
  "key24": "5X3mcNi8Ht31W3HVnwyWjT1izHqpQD28MUtBW8waaJCfuKyhdSGfoL4aSWZ3NNeBT1cXm4UgcnSBmZ4eYpKAu34f",
  "key25": "9LDjEt35qhAZSohZJp9Yw3WxCQW7Exdj4KFmdYX3iNNT4bwkGtojgrY5yAzCQHEJH9uJmp56jprC6FZj8tZwGMW",
  "key26": "5oF4bVUWBvHtkDPstLMiCQPe46sepdbG8UuQibBCBEcrs51rv2iuQS7tZZA7G95MD6cvDLU9KksS2NVh4NnLrrE7"
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
