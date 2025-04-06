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
    "62M4zgFbE4Vdw9ouAoYJhDowYVmtosvBVdy1d2DoNyt2Vzi25PztuLENpBpWwtbRfBEzhGZzrNWH6jJHi8FZTW8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HoEvuiLa8JCR7sKecCjuJHkdPnkMvQtEQMXYxnWjgikMrqhSbzUvW9NkePWHGkaxkJcQi1B4eZtDnKXPJAdU5RF",
  "key1": "43XhLELmHwBWXg36JZ6ctW3QiFziqMt8mhEwTkoD4vNmnK6cmMZVQuzfTG2gKiYwBaGN8nESqnERuCRRKHBr4XHC",
  "key2": "dw9u6dP82xDTaH3rQ44NnEgcRjVpjAgqn6nJ1JQLtCmRRgh3dbwuAQnfYAMqefief17K77umM5Jtx3AH7VuNiJt",
  "key3": "2rmhG5kvF72CsXLwMzo15NbAV7yXT33qXAcD4W3XuFF73fkxxikXvC7r2fAdEhgwYZN7ksWSHC9RfioMcJW3KjoS",
  "key4": "TM3T7WfJffjRPzbZJ4KKRisuXJGCDB4EnT22iQa4RHToiP38TkZbEKnqJgV7EmAGDsjUrXfNaoKWXRbwBQYPYBJ",
  "key5": "2TZcCA4BCzyTLWKobiFxejdJUG7ia3qN6P5PmoemANc6c57Eys79EzxTQZR2hBduq6oVj5DQqMGZwiHjHhtSiVvT",
  "key6": "4UGMRkovGYipxiJHWtewgkcC19HCMk2AUZKm3q128ecb8kz87NQHWf5BrLRRFVCKHQvg6QDRZZBmbzde1snEPHNM",
  "key7": "2RnQhg6gty5V3bEmENKgCuBLG4ZszoF41Hh2RkMAGR13x5xiUQox9yiuRQhWmWCr6AEKAgorFFWGYQtGCbW3ikk",
  "key8": "3oH2ZAaSqt2L2msKYcpArAbeEvc25m23F27tKTuhx9F68w7s4woxif9NsBATLZmbqrvBfLgDR85R1Wa3hDnzjLGt",
  "key9": "3MvfsiekLy6i1jeP2srT4WUY3Mg6JgJxhJDAfGjkop2X2XnnycNPVx7vf4jHqob1kqqtKngZRFLftQuwpjWf4vB5",
  "key10": "5tWHfYQxwSK6sCRjTWqa1S71y8Rdv6W16j95WwW84NbNf1x7o8jLxxejxKT9ettPpwuLbdxH1YcZLdJSLnFoNeQu",
  "key11": "33zaASpyquHzWftj7pYQXrChQjcT1cPAzYWp7v9A7cC8AUqmSweDb1LgCQh9gjZnieSX7ApHHKqbdzJi4JfsfTkr",
  "key12": "fEZx1H94bxvMSFZZgXLjgWgNgZrPZt6WGwV8YPoe1Ld7rTfUzi6eFmjFkUfSQz2a8rwrq229D89girsZnfdJWnj",
  "key13": "243z56FrsQRx5EJuG7GPV8QCmuhQ4Jza7UetiEZndCJC8YSsrp27qTThUvg8X8nzP6kwET3bypngdzkEzuL73cBj",
  "key14": "d4FoMjASpGQsyHCimaUTbd8HkmbZvbrLsHFe3dgYYpE3uDJDm6eT2VXUsY3BmR1tvD5qzR7LW6bFh2nauKRspC3",
  "key15": "2DG7LAHX7AUAMXUnzRNiyfuAwhicGDypQUq83pj5V73z5pkj4LsuvkPPXZYy3uAkq4Pt77YCbadAYEhBPeRDMTk5",
  "key16": "dXW6cdK2ypNUiYZ1EiZPw2PNZrR3EMysGuZy8YGYAbwwSukmnZ37q8nd4n4RcJvAcSmJcijv9FdZTiPwXhzTAFB",
  "key17": "2zKFJm9T8mqQPmYnBtDMzeT5gAETed3yg78AejhcAGNe822oStuFommxwUtruhTwyXrX7koXih57VqCwX8j4ktrz",
  "key18": "hm4CtWcAbMNpri2wVcLkK7addD2FAJjCjcJiWAdbvpfdcWh9L74TeEJ5JZiQouKwiBH6Y14jUxgzwz8bpQohrDK",
  "key19": "22dosoNKJpWEpj3vspsBcWydwHiWd6hn5EuaA5VfdUaK4iedJFLnGtyeTvHRS2iqbYakPku4mDMVmSK9P3HwYaXH",
  "key20": "tTz87qYKaPVWf69PHvNH5dmmoYPgCqn8a3GesY6oTVqDrzY3DzadEndhoY6E8T2whkrTsfCHU3Kh6yHXHjZbkyf",
  "key21": "Qfr6ZfQT3d6G9ndWdJEJMhYyLR8hVd2eUcWZT9dMFtUbuAmYU6miTSKrt3pzDqzKxHs2PwWUFLAD5hZ2nTsBxex",
  "key22": "2t8qjCHA7Hxy8cmN1SNWrqqSVnGSY8rDpWCzXs6uP5tUqyfpzKpV7XgbL1HuwSDActk19ADAr1MsmqWcdqqmRNmC",
  "key23": "22fnjGMnhWQjQHDmsVENSCoNgCDGYDxNJZdhb9YqVWXVdG8PGiVJfH6pBeW9nNiMZPCNFrz4viCUrHKcvbpqmq1s",
  "key24": "2XiAsZXeStaLUV96F1ThUeiH8bcnij4uhDGiZbSVssptdq7jxa6JFaqAVE3prW8jZpAZnFM3pnh3zjeLYD9NnLZ6",
  "key25": "5rw8vKoPCsJuN1asawr6CZFStjuyPhmBMeRBh9w9iFPJ5MStc78yFFmTgUbqY3K5LTJwrpRRpfiJQANwi2SJMYPi",
  "key26": "337reqKq5NRTa79SZ85m9tViTaQv9Xia9VbLsCrEpRVZHUH1NjWvW3AwfBy8ZoGzxLS3QwzZq1CYsbTS1smnPDC",
  "key27": "3tNZSGtS1EjxSDvmh9oPnFQLTPt4CxA2fsP3RSLi3hougkDapaP894YutxFa5Z2HELK53Xz22kqtLPudfUKTQEDh",
  "key28": "4Nw17nnon3ZQUdx7axuHzMcmh2m4hQVyqfJDZvVAAZEwuek28J2QnkZAACdgwBmTaSYo8wT5eM6dZU5NYKK7p1wE"
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
