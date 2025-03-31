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
    "2kZ8uxCc3yQN5ZrFU5uRhJpkbZhmA2rHJ36Q2YEXFvrg99DNz4fgX6sJK1QvCqQwVKjUrBcRJgcWTvLDum3vVosh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iypaSeJvHdiap6sgL6DW6E3S4vq6mGsncMJqEeFavQ5jAi5Pjv8kch2Vb47i8co1V1jqwET6BpSM94DnkTjNJfJ",
  "key1": "3cXoNHELEv92PWWzD2G9ZC8spcQfbErDm2ksVBCEQbL9VfcYaMwHfDbBKUgQZnyfRARdiyiGicug2zCsrC5dzG3C",
  "key2": "3iYrEqHhMb6zdyLiEia5qb9gpgrURwi3swWqt8oJeEa8n5SGuGbeUQ2HGgpq2YoxtLDqyXBtuQ7hcmCghjGm4jqS",
  "key3": "3UwtQEQ3ikD2i4iaJcYMv4eBQAixcxFFU5AUGSmer2Hgn6pDrDcAUYJapaJf2QtGJqHxxqn1ccoug4jgrYCHxzEu",
  "key4": "5gT8aM26bS7CMkPDWy35cQVwHqVe8J5WdTGJPGNNqt2ZoDNAEZSZArvw4MTTr7BCvNSeqDLqToSNf7vuvSnqbDRf",
  "key5": "3a7rrySNyrJ3u2mE9aJ3s2J5VNYFMjgTT5K8C2zC9FZwKgWWaBo4Qag63cj2S56113HvLWg2KbhS4ZjVYiHMUxwX",
  "key6": "47Eu6GfdqGxfPHK8de9UY8ZQ9FNmNeASLSiUEgSuuZT6nTgrppZpXUyPY4mhJqRKkkMPCxZuuSYUNfjVqC28aNze",
  "key7": "2HGzTQ3ikrbSCrrqZRY3gurZTp56WcHLgmKmKKfWLYYXRe8aigTXEHwA6smpuYSNSM1UtMWKmM2dBMYsiE1XCBEJ",
  "key8": "4A62JxErYqCySnVHRQtCZtysWTMyWi8YNiDJWpGDFUB1W2G7Qh5QHZuD5Sozdbs95PyxjCPz8Cp9TYGuvWULYkPv",
  "key9": "66UxNfkrzZwygz5mVBuuiaYjTArcuiuH2kwUZYx4kttwkA7BVH6wKJ1J7YvwubXkXsodmWaFjLxqR9JT5xVvMeCS",
  "key10": "9K2yi9kjpVuWdVjfeEDcgCjEZd3YgL4e8M2nQ4njrViEC5H4PdwyJfY76WCa3q9BC2NBps7BFNFK3goqcYw6AV2",
  "key11": "3pSMSLuog639L2opsRK9skCpYr4XB4uhJDhAnvyh5RWChywE9GFqp6b7WEJBf7F8YKErFL3e14hr5gNZa9Dnt2Mt",
  "key12": "3NLAJDt3iStLQQrdEn8RJJLkCvvcdRNgwbEiQWfSjwwJ4R6PG7LgamMe9uXEEpf1V3vjPYTbMozzHtTcyT6M3x5z",
  "key13": "9uQs2FzAQc7DD96aLTKaxPyNsYHZaLqtjbdAdYDggmUnjSNPQSMFx2Tm9R8F9pwoqCTqCSnmuPuWoGzwFtfWoCd",
  "key14": "4XEtLYeCH7k2x2FgCGxCMhgHFzEAYyhaZmHAMHhACxSboGaxPArnnTyZVrkhktkPPqzGxEgNicDMW8DexMZ51jLP",
  "key15": "5siRvZbtKU77QnJVmjbu1DBtD6QSLNmKFG4HTAF88SdQUHnjV5ye6abQpNEyMYmj9LsMxQ5t69Me9MK3jMwTnXjj",
  "key16": "5YEsx6oY4VGHRhwLsHtejdmVNdcndQZvea2RrCZSULHSg8gNg38jRK4arnNZS8f8kCAnFoQKMiZCr2dNoSNF2rsC",
  "key17": "3mrfBcQvERg8Hoc14FnzzSiMmg8D4NA8PvMB7xXm1tWdEkUhWd9RiVwKJ31HEPJaf5793QgKBCx9WGb7USScoE4i",
  "key18": "21jF34ADm3DPLxCUDh4WU76YKMnfd3Vhhk5k1kRkAgf698BZhD9DvD36mce2WXfRis9zhXjtfexCsMEEk9fQZNE9",
  "key19": "7RAjorJ4zkWeweD8qiwA6CUfueVaS9DjoygW47W4HmdMgroWAdZybtobLSmRWwun9gM5tBfEJvAKr15rB4Asrvj",
  "key20": "4KXea7AbimeSimzEuH9ib8x2JN9tqrYB12dLvhDhmQKf6aqNVa8yjxnzZftP1aWA3E1Pj8f9VhLvWXzQiV8z1jb2",
  "key21": "EcjEmq2ZuVqGoz3ei3FE6Wgmff6gdKukNfKp1gTwrwoYmkQK5B4FmNda9UzsSyEj34saQv7jtoYAVa29XCN1qFY",
  "key22": "4cMNkhaWMsHAYR32Sss7p842B44RuocMskdxrTGvmeJoMUKy74WG1bEon1kpBcdC2YUADAaSxMNN3AtjGBF3oHae",
  "key23": "3iHhd2S7nS1wGesHh7zWyiYoEWe159vB4oxXoj5pWUzFWhdQ9eH1w9DEaoub9gr3tTFiybja4jTKgzMY1uVENf9P",
  "key24": "2wXCm29i7Fadi3EWR7fsCAmyRofPbHvaQNXRMmKM6EhU6Acw1RmnRawrt1jmzrX51vSSq5MKbpLyfgt5BG3DpV7c",
  "key25": "82qL3LKP2oGs15QmVdMDBQfmoNBpxfr98J9aUWkorPA6eM1duRXsKnLRmEz56EaK15i4x7hhsZVdZjQxg9gkXR7",
  "key26": "57taLjGNyXK4cQ9oNNYgxmimsQ4iV9NHy4FksxXZKBJct9ViCVfUD4jNUYHHvjT2DVW4uNRH6ucrwBgqzgVBmi4v",
  "key27": "37wsxVAp5vpSRUtJZUPuZ5jM9KXVVELdJtiYcoAH7cXzBgkLgG553xFQrR1r4Z3e7oh9VAqF3q5GAPgqNLqWueSx",
  "key28": "be7aWMePktWhtaCmDBpaTLbkp4PcT9ZhRjJyKhjr1rEmaU5xgYAGSVghj8ezGbtCdeJYPVY6SMhiyndrPjswQ3N",
  "key29": "4bGF3A7LCRR5T2dEiNyb6L9WMC4ofxV1dmfDAtW6ckGNhuVmRf5n2CTuihp9etbEZPPDc62KjrVT461qat62czV6",
  "key30": "63nJLUbWEUJFysbPTFX34e5ijodbtvi3Eq6ZbdhA9PqEUpWYW6s15vzVHJtf56kSFBqjNdJueDgqmAJCRcvKYaY3",
  "key31": "3sxiZZvepQZ6uvd1KN5Qz2GBtY3A2nRxsdPVqvVk5aRjnPm2DHTy1qiFizNPqfsPAYiistwkBU7QRUtAyHecvfUG",
  "key32": "2k7qHn2tzcZKfddh3y4E5JKKoPBqPtxyohA5Auyj1LTZ8diFe7YBagAQtH916oQazA9fsKBhg2HYXyDfK7uJLTZ7"
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
