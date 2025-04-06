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
    "5bf9JdQ34aLqx9etvZgv7sPvzJjP8BLoTEzSZA61td9MiTX8wVihMCTQVisS4582wYTi5SFBuUtzyfktm8fubn58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LaLon4PRy8NjEN7XHSDTmct1GXskRzMbqbX9eKAgAkshQtBLmGMVU2pMgdnGrLBVobPaPe6wtvTH6AAYyH5rKg3",
  "key1": "gUJVmuQcwvhx5dMz4WdYyozYL9QotYmyzJFkx6RRfHsoy6iD7KPzkebVVmogEKkbezX1BXp4jXEHa5z8CzZRZUh",
  "key2": "bFKs1M1f8XAWTU5dc8CXERerbteWvkYPcCYZnA2mvLx8W1yRBX3hsXX1cqUe5Sgqni9hhBRr2mEBRunQZfYZSTt",
  "key3": "3UDdKPnKnpVWYHXdwTYPxcgndcpiG3XS7b2XvYtcPA72gcU1kq8YhC6bFjB7NsRbA3ZDafoAfEQjY2eYRRpPkz7x",
  "key4": "3PdLaiGo2vqMpugzG4UpFMc6762YpWjR35a9VFgYRWmuecHqd5CTXk435i1sbbFvjj33yS6fZzUZ1yMmBb2CHeqj",
  "key5": "5Gvbs61Xz9mkcmYKFPoYtzKNGuN5dEnpNpBiY4UNWeEnCLEAMxfADBt2AUZMvwU792dCt9MBdxqkNa7HzL2hpx1p",
  "key6": "5GQd2VyRPbHTTW1fHchdE6vcy1wkc23HEtWT1HiALC6aajpBSZWv2DH7g83kMwDimkDnAwsLtRUuxibb2WPkboxB",
  "key7": "3tmY2mUciwN8dHLmM1HZPLKaW7FHKWxHtE5PTBraS41uuRx5LPr92YdovDS62GDei5ExvYShVXaqgvZDno4dg7TK",
  "key8": "5JfAbwCh8KiN8x8r7s1GXty5J2By6JYkhiqaxn1fgrQfv6d2MuwCMVYW7g7DRMsroXpWuGYeiEu3wBgReiZ7Yb31",
  "key9": "43vk5pWwrKu6apE3EAdGWtpYtf9YXGfP8o9gdiYEc5AGTwDp46y5imrwKiazNAxTgzu2aDQykLU6jnCKdSg1geb",
  "key10": "zaK3htcoGVc4QZxwdaAFv51yv7Ks7X53B9fymq1GWwNHMFt26vZrPGeX9zHGaHXmNm7CkjobKhyrXzJ3WnoXT39",
  "key11": "4GCMgpHc97mWRmaeaJDHjAxMpz5wRcgPKzAKtbqJhhBM5yn3fhnVBLWQKxarDKNvYCAt4BtDSPzeZZBpJYzHjwyd",
  "key12": "3epHx3DGgJm51N6jTGrCaYic4hd7PtYfMYtdXaGWWPphYfbXLFRD5fjfrxWPk21gyh7srwYbdC6hS7YkUbUuC6Nk",
  "key13": "FmwHPsTozsBNm8gn5hddLhe1GJnrfWGqSJ4jFZZqXYuH3bZDZ9ui9QG4hvZxdyEtmeNK2UPGTCgkPSB7r7E5Yxy",
  "key14": "5sgS7kc3V4n5AtimnCUfDarosT638V7EKWq1WjhUvi1YWsvFwuQ2PotAnvA66ziL1djtCVJNuQuvzkYyC8t2M89V",
  "key15": "2NqLghRGUAzS4vtYWX2eFYN2R8gdDNzowg1NpusAYdF7a9CVKWmNfQ2eLe1Qo4UzL9R4TCm9xkHu63fW3c5SgmoQ",
  "key16": "58ZKXvagLaiKnJqrjgmev9k3s6h6Bx4dsX9TvZEzA22ZVAsjha7nMfSfdSv1QgD5F4QTV1awfcnXaZ6xWg2HvdFp",
  "key17": "gUrBB2Dcj3ZwSdfche1tt9xipukwfQk5NE17CwZ8Ngr1fPgfLpSH83Tf1Y1TBz48a2SUZ6RaQu3t7VDdAD8EcDo",
  "key18": "4taTromY3G9rRu1eGmMaWAYpvf9TY1NUFUPdK7AjG89iehhS4SBkbrMAwDP2t9fKBeiSgRSm9ahwfVbTm1agwsdd",
  "key19": "4wPEXD9XDq7AUdMKSAsRzh9rLkPL5TwFpbRo17E1yYnCr88kfmBGNxFfJrCP1BqM3yJAvbptgQpY8hCpxu68HYZo",
  "key20": "3BWf3Dq5SZ8w56WzwUjMaLT3PCjsE8e1fV1pk4k3daEtaX54LFJxLbv3PZRWomr9VYAPhmwe1MgXiJMSjtNv5o1a",
  "key21": "2xQTP71fD8yGzjJvfvLiFDfZLS7HXxnXiB4hhM4m4uSEm5TyFQpYDBxvoCPmb7hZEoPHpANQZJJrdeQ361JT1JHt",
  "key22": "29x3vyXELQ2Ep6UZajwL5eKBJoBsJiiiyQZSEadwEphoxF8BxySJpmtRAb6kmGcmXvuuJZ5xxkQYjVpUJanqi1WN",
  "key23": "hcX54E8TiJCcJ95mATUCgDGv2uJbKvZEc1XCXvFj67g849ti8eDgeKSw8fQ43Whu8HapRU3ZTi5JRpSTNvYHsy9",
  "key24": "3pLVc1W8xoNYmVctcRSR7r8FwAaKyAutrtT4sVLweJbAjUzsW2Migu5fN2PCXJyn4P9SVTgWh9tCAUxW5Ka6DRvZ",
  "key25": "2ttPfdKScFVtVHHFwiuiQCv4zvqaLaDNR9xbTWX3PyxQsRzCd7FGTKZjH4BRYCdTe8fKYqx5bE5PmQdqTtpc5f7X",
  "key26": "3UrhmBR1cJ9RX6K7MUv721YMW23u3yQN338Po6wPmYH4JQy9r3vayjopwZaYjqpjPHy3h2MUZznibvNjdYR1nhAg",
  "key27": "81UGpiGLaVu4eGZRwaaS7R7L4UPgx2pmN5KVBgv2UwDwfvDqCevh5wBZ4wyR9zGD6dYL8EoGiZF682ft4KYwxUb",
  "key28": "3pvBrkZtKRUaScYKKSFRZCWEgSZApqp3GTKb1JCzgJEhypZjSqporEVxN798wvka7ErVfcDDmQHzc5yFEji2fAML",
  "key29": "Mw8Di2FwLMRPSdiRdXRnxX6uACNQEzk9YbnWodt2W7BrhYdYnPEZTnwA5Ynxa66NNm1zuKXW1iEKgNh85BCN1Z4",
  "key30": "4WeytYsgGJBByJ7R92ENZ8jghn53R1eAQT2CezEe56reGjuZN5p7joZz7Eo9T2MX6rdJ8Yn15AbLVqzXoMhredbC",
  "key31": "5fwtPeJLqiBAafmg482Mk6nqLbtfdhS1jFy6bn5qoW85dxCvd6srcwqWmJEo1xZ6bkVAmH77yvoaP9PDmZahmCYq",
  "key32": "3cYMNKetK7E79Vnt3mUWnZz44KH9StLSMxFvK4ukb387RPbXErmoQAcmoMdgVuTZsmcrYeWUdU6PmF9By4iWacxA",
  "key33": "25fYJZHqCdAQbpa7sBNJe4T5moFEhvD89ps18RqWHpepSvLNqvNkXrtEoTg1oTLgS1ZCF1K9CgqJJ8etjHTQFpDp",
  "key34": "67YcqrpR6BxAg2TGsUVhftx6kkUtZGBEGuZiBLUM7GouW2Mjs6AZ9YpTdu3TrdRvmPo2fgUzDBXate4EiHzDNcBG"
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
