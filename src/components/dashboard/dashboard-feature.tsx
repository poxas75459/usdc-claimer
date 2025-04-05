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
    "51abzbrqeVBWreN3MvDLhbffP2tDoQrfLvVjn99vRhbZHZmb2rM4kH6qH34gRAgbd7y7mr58fcFQS8wxhNFNzJtC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s4xMD97Fi9zhcxpN5wU7pwTeY1NRL1BGg7DLTKxut8fufFYVhj9hffDE4g5tUkt1LUp4g4qNNQdfxiKTEZzEXiW",
  "key1": "5CAcu4WByz99z9zqgYmir3voUmHysG9h3h2gMGJ8jG34n2PkkYgLqeCCuUX2HbwXvNBpnNgCZondUf8PPHSsXhko",
  "key2": "4gycAgiqM21xVCGK74TtQ1uCxsZzCJ2w4LYfzfu3D3AzEx2ho6iDrfo4qUCnc4tzcui838agz1aLJQ1JruYtsgrw",
  "key3": "3QqzTFwtTsW8zgEkWPdPgT6bUGPkSoBNjRXW51PKJggoNCioFQs3gqDy9NqtAMFXKvVdVLvGprXmRvYF7aLtymBi",
  "key4": "4hEAjW7aF7Na31FpLZmMLfTJ33Wi2Cpch5UYkE1kVVo1FYMJGXDpMoGvfkHj4Ph9VVE7vkdi4Pb9PFRz2V6VWgxS",
  "key5": "52KqU2PJZM91kZRjXWTfMMFvp4H5C4WJgdNWiBTSkXG7gXvaR1YkmJowTvRzSVNWKs2TYZirJ97QaViUqGDWmYA9",
  "key6": "5hftdPkiFV6RS2AUKFEEyeSYNXo5n6ieUay8hgSQM5n6uJKJsLuVkZQZTuWrM3uGkTWw7CtihikftfusKY8p1o4H",
  "key7": "PHsvu2a5LT1CqhvVZ2aa77z7kRcpc82UeBV5sKnAiKX2suSD2xASDnngZmhQK29gQsexQqUBp5x5eLmXDBoDTEt",
  "key8": "3aDnce9SYvNXkLWNxZc5VyCBYfnrLi5xamV6foau6sBgYoYF1RhgqX4FNEBtPJ64VWDrh3MT1gMN9P2VxErA3owg",
  "key9": "5Qp1S12okZgnfDcFnkJ1uYZDHBxypbYALwfLq2mR1kk6znr7GYA5dnJyBTWQz7SpadjtSUAhAXJHHh8qZV3NbCxL",
  "key10": "61MWf6irNLzWnqHrRZxANa6jEY4t1mESjsStMPoDbQkiavf1aTUR6A9mqS79YKHjoTaT7ExGE71LvK7EYHpHDdd1",
  "key11": "4m2UEC58nnMLrqNFjF3BNUZrkYHfrbF6m1Njs4YZb211yoDKoXC67SxCUJUzQBX75ej5a4pZYsPc54y64m28kPor",
  "key12": "3Y2fcduGYUMisBDKDxKh8eXx8jkmbwcNfbVMmWbBSkKfJRBkXXXYtc4hBsYSvCZwQCcPFunWTEu51GFfbZr88Yj5",
  "key13": "5Xv1MAwmWhHa2KhUAqpHn2xfvsDkVfM4KGZ4LGUQ8yepTHsGSvDXNRQWBWyRucRQPoiZEutceebBfT24FKsxMmea",
  "key14": "jMUnNo3Vsxdfv6MQ1fLp9G1BYD1GE2Y4jyW27qFT6RN5pimxdbHZCZ73axwJX5NRZ2cfhfW2yD8eJQWFh8k7oSy",
  "key15": "2qyysweQqZsdu6EYmLJaws7WWn5s1FLYkTX1i5dhrSvhGNPiKcbNLYe8qk4GwDYHEtfSCWLWhPNhAjBU1pqS4UtV",
  "key16": "56fpHpNhwHk8W5sQLHhF7m7RxULkNQzwBqEA8mV7fNjHqk7h2prk9mJUioH45b1hVj7d6sjoBV6vBDQ2rdMe2KFU",
  "key17": "sTZZAnE5YoNJFaGomEpMgfpqoT9YZWkja4q5mkNuCm87vQiCQGtPyv8CJqCM4C6MA175yPyixTLsUtCMqkFZqDU",
  "key18": "5iZxw2Z7fM1j4tJPjxJFuUgaph2gXaZu7mTpR4CdNZdLZFtsCdtS3t9p6cKQoeSas9LLNyNPT64n7szXiEadH72z",
  "key19": "58YayNcYhAWs114gwEPByMJMzqxKcWdoYgLcizXvg9GEU8Du8PsPL235HMAof5bY5qKZgRDRTjNAMTGSnwwytk3q",
  "key20": "3o7oxqfbhePHPzQtf33BhH2znVSRrCM2XotdHw5tzif5sH5GvVWYwjwrcSYiV8q7mtpr6wJP23wdukNXyzydoo4V",
  "key21": "3o9WHHurWtcuvjpoEP2A6P1vBpzD1GD4C1awoRoL7G1Me76ZcgY5PgWjsiitLsny251xwKngxcyQuyWsL3nrkQ7D",
  "key22": "3ZQ62dYpn97gprXz5AgjJff98YcLxFz6yeepZGuHyYcyJqksYko6XKem3DxbChwAaYYixhcPvT3FZFz5vkaSc9JK",
  "key23": "61GyNmgKUTujHoCjHKXQaq1QdCjcd5hg3HptmeP191nxZpxvcgX398n9B1zUZaNqekFLTq6VAahKKq5uZFevKGhY",
  "key24": "29tAvJYM7n3iDD13QQB1qx1aS53y1st2ds2sybZ7vpBUmiDdnAeTtjYB9Uw5u8zXVyz3nRpXziFQRE85K3f78G8S",
  "key25": "3a8RPLzoLo6TaJUnHUvt1VZ5a6kgxibfL7s5gJbMm13rxKcCBf8MQWyvASUiAbMiY2RPE4xrgLS4Tj3gj3EAhxuq",
  "key26": "5z6n9pzYDpRsisi2p5Q1oFLUN58SUZekTk5B6fAHDCqvjf1n93x4PnioHoqCs1893D7aAtiMcuWKbCjW1wZmzdsd"
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
