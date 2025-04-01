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
    "4SWu2D5iKekzpcspYfZ2DxnXEZ2Nw86ocigbXABCJJbEXVWJhg4fiA5mMBfg5H8em5ymvEbW2gHKnDoFenhTa6J4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mDCp4kXYkd65K7CC3oEcLC5dBTorM87SDrf3orrNqGwZRhrMJ1zf7qZJx4W943B9Tj19fqcBPyXDieLpoKVKjLJ",
  "key1": "5jajmQzHd4jem7oqkPKTAtrAcqoobLYT1Grf7SMbZ3Zq9qX8Djp9hZggrSGtCixJ6R8AD5ehhq9CCLir8zaVHvqL",
  "key2": "3U56ZZNCWpBmc8FB39gg7d7ccw7B7TsSePfouPk39Sogjihrwhmw5trUqPoeLvcDi2txz1gwbiHtEWnU9EinfrRz",
  "key3": "5uJLnxcxrMSaP4x1FNrHQH2LsxkRJhdCV8LQzfb1y2CZUrKAuzZ28nzYT4uMyiWEXTixsQKMSTKEh78xeoQWj8aw",
  "key4": "4GLH1MH1HK5ww2khXqn8sRqwmvr4ufC2bxf1cjdLTCUCiCCe72u99ZThKygeEG4MkwikWk7f1Bi9A67oAH3ySywJ",
  "key5": "4rayQnQGJD7wynuo6mBAc4vgd7g8n2LvMFwgvPzAbKZaPppQw4rJ6dwjy1LzHpbe2gxsZxP7wWkQc9QagWyYapip",
  "key6": "2EEHJYuvdHrRcrex2CckBhBKDPMRbARAgztshSqgx6Wov7BDztpYPBjfRdrQ7doa95bt6N4PpB2fZyCr9iA4VqGH",
  "key7": "4K4bMgCtVKRTZMJYGmGgLFpYTxqkaFGrDBVKSqRCCmTJUPFKcYVfejaWAEH9ASogS5gnueagDzNLfhYyjvCw8PXv",
  "key8": "KZ8scrJhB43M6tBAXXcjJQxKg6W2Zk9rwzcBiSqn6bQj7d9NsZshgmT4ko3UjjAdgckG1Rx36iBs7DvQjQXiPiA",
  "key9": "3tQnzKYkNhEZ5YbEVMnjSeizZd7ahjdPxqhdKeETMyGCPYNBWtTypLjgXAyi7pLFFGkqeXkmQBQEnFjEndkYNARt",
  "key10": "4YwRuzbwrXgTxGWAfqYEiMmrQ9Z1XXrptTM7MvMy24zirrw9Mi4UY9yLAhegJtE41LLCT65jvmYVzYUtWWCjSTr2",
  "key11": "4Fk7xsvF2FXEmq67bkiEA15hi7UWWZchagVSex82nNdL4ijz77Pjf7kW9jB6cimjjwym487EveJsL5SrQ9ixV5Ni",
  "key12": "5NS43mb9Ydy6ac3zzb2WAdzUrnqVYKyVNSfeDM1TBGjKUgYDmKvL49nMHwAF4QpgJEetaxkjEM3pfJeu9sajeqjR",
  "key13": "4zE4CHEC2Dm9rbn8yVy8LgAeiwSk3FeDoJAN7R3AszARd2AFRi9eAd73ecKCrWHQJzdke3zFQCQAc3WG7JMDw7ta",
  "key14": "24kiBtf1GafaYRGtCuFiE7btYK4RNPt3SADe8R95g9xdTTKGDfdXUJ6CrMfjgnsicq2c5zL6MHhCwi82X7xnd2jg",
  "key15": "mk5YZpRN9cJqnQVXauXjkrDcZJHum3kjX2QY9wmJvtQ3kpvCJ9hosA93f3U8JAv3XCcbXawuhYcnYhfnaLaFWZN",
  "key16": "3iZRL2jyKpfV8aGh9A51PoSXqUX52xHCmp9EeJyQbmRVTZAPaC4vMMuKJXibrjyH1VDLHxLXxob8TaQY7sBatt8a",
  "key17": "4FwxQUnpppeLxzjk7FFJMjXPb2U4nR3y18c1dtC2tqA8x2rSsmeVYzvmEufYZjHiJqEL49NyHFGNpy751MgnSBcP",
  "key18": "2WPhVvWJMpMSH4DUKxuqrrgKQzpJg1XdpZhgo2z466wYGcSJxFkQuVraDWHKVJg449ae7f3nC1apJxnnCcHob6Qi",
  "key19": "5XCvanXiJF8RMkUvj665TsvycmMsisfcUY2DtmyjfoTuwo5qYBU1SGfUapjF8UdMBGZ1wb2tdhnGhxSFZ71GkPYk",
  "key20": "2k1Y4TbTP7vWX88mHdb22Js94jiHzDdH4CibYefXWD8EKaDuzXynMF8CiDfQCA6AjsiAa6TTYh9wqDVnF82EL36t",
  "key21": "36xo6VKdVdSPPB26spgNsX1JM7JukLBFegt12MVjfYoeiAU1wTARx5a9nV7Ecv9DYE2N81ECv9ouM578UVL7KB4X",
  "key22": "4tPpKz82pivYBukQ7Z1R2R6tTzEeRkE6Lj7shaNEkNShSiiTRqZK5BMupTpJ9Pv5Jbv77SdJ6vrasxLRKBdHcNT3",
  "key23": "AQhjcHKiJm7guCL6rv4SQZTCcuLZ1MXcAYpxzJuyxjPQhET2abySBGD2LVDiC5mJSWVprDAwcJe5FXgzD28E3m5",
  "key24": "3uzUBWA7X3aitp88681FBsfLuioXUZR7gMLyf1uEFVBxgNgAaYjKj6wQbToJuHqBX1QRtp5nzCUYRukWJZU66ntZ",
  "key25": "3nCbeFsgi6L48CeuVWsTf47abF2Y7vu5nZahCjDFvbKk9ppLiV5WKywh5qFyxBd9w8QJPB5ZozAL4AvATY1gcdrQ",
  "key26": "4n7DQ8YvRUEPJeFCExWvxZRB8UTnepcUUcGAEdaYtMmD88joMzg3RjY7EnSH3HGu6KPwcVeueo1apFnzxR6Jwii9",
  "key27": "rcYosqzr9vAk5PnAzeVHi9rX8UDqHuRxQei1oKB9EjV3AwoNMKBSQ68tdYfJyQCsnGKX3u1bVX4Xtdt9tMf1L8k",
  "key28": "5CKtJGJdQYuqyjEGZPaRE1atDuc2Kn1fTuQj7t6znk5DCiUMpJ2zsgNP476yVCcKqKiLtD7aWVGibQHnDBwCnPJq",
  "key29": "5YJv2bxwuYLRwAvETcXLwHTjqgCUNcP5exebzJn5otPuQDMyMqeAD1PQLCxiQxkRb2yT9k6bgsPiGmkiysorFgoq",
  "key30": "oq63ujVXn3WmooJ5BZ1s6uMxfMQErk4ueQWbLn9tgaX4qmPgFvCHrZq8cNnjy5AY5SabEW7NPxu8xULm8LKhnVh",
  "key31": "57qT81jxahw9z4wNzQE86XqevSsBC6qpcugdq84nav2GTC6cG25P1vDiHMhj94BGgVETDNjvSh31QdMbDwEqihVG"
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
