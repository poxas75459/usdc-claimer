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
    "5VGUAbaSE4NNuw3noGFLkHPxzGMK452TcWQZv9cseGLefNjyL4vrwnWoedCoAjpXLQjnoJe9hQXdEYx9N6tyvYLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yQkjtV4QDq5pgfXAWxuVhTRMUzx3EXJ3mf2PdPbz47hn88RgtrsVPSjcC818rBdgQFo8xd1ozZGoM4uk3Fk2L5y",
  "key1": "zVjrvn6s8z9UZ5kHRWVDMSwm9U57NsB2vj2WGRKzoEA5NaYNgpq8boZmPrRSArvUNSG1WvfUxS9SbTJiSTwuUxw",
  "key2": "5BgPLBZt4FbxSFLNHkEWLNaccGZpFX9FqUSGB88WjXYbBmFgJygUNHcAkD2E7yf4pQVhPcjyheQHgLeS88kWa4Q6",
  "key3": "3xerM5E5ry6udkWVWRFUyYfpjBYkRm6gEZ8U3LDqxnZE5yPHDTs97qKnTQLwnHqntobbxEHoZLNcpAX841ynXggQ",
  "key4": "Zo7p9ffJJ9AQdSFjQLobfZZMyUVFSujCWJY8DPF5xdxUB4uowtXfpkeEaDTBC4PiN1duEbdGz6mYb1fhmyHWpAu",
  "key5": "3bs3aXN3aZJGivTsoV9ytd5vzdojLDDNbVnck9q6YbTSXTjqk2uQL9QM8ZNWKitbhMFBHaDXc321TXBo96vTqMrP",
  "key6": "4mGMj54vroov9FQsbrtE5x1V5yumAhXibgb2rMAWSSeXBn4eLBRQAcHgyWYEgBYjt12kJz931esPmyioRdYbJbiu",
  "key7": "4aVw8USxf72MCvEErF5VqXSKwEDAQXaG1kpZz6vHFUMP7e6oSuQAGhQmfGzY7SJ76BxCLVgBQQQL1XjdRU6UmoAE",
  "key8": "CctDtqa36nALRhdxhmShsNqJ4mfaePDqKeLYTkbYajgvKAbmZjEWi9vexcEj73Po6YjQFPXbnM4Syj58DSucg5t",
  "key9": "3F9w7UVJurRGsRYfbwcCmkMVyo4d5vbZ41fSLf35tBRDenCcEMZufCY41aAcxKLbDADESCGXFvGZTir7NzsRiH2K",
  "key10": "5LAw6WvHcHjVyc6VaekbjzwyyErYyY8DqWN1qPZgiiQbiQqVMGeXjcFGQd4GR3yPQNY6fFFvyXCkEjxBmMCsadzW",
  "key11": "2b43cwJkigfkPjHFtMCaT4C9ax5eyx5XE9P8kSo3Jd7nAF8kcb3fJT9Q2nD61mUvvqijA4vt1vHT5taMfZKxU7tH",
  "key12": "4wYhoycJ22S9poYhKiHmHcrVYGBzhd2AzYbVht9jR8Pk4nxxPFUhsAPFSExL3471xZEqw7NAfb1aF8JCRooQgNLE",
  "key13": "483dSY7hYNrvkAc7ZQumG8kM5H55vt4G2RkdoEZbQAZf9YDLpi7mBeB4ntrxuk2ALkTmDgsfSjfcsuEoiozm5Cak",
  "key14": "57PxbhMv2aPxoeaXJo2DALNaQSGZiWnHdNJ6LYfmsNF7EpZirqVqo8LjWURe7UiJSVPV2tCy6AcjAYtJ8tJAJR8Y",
  "key15": "39pYUhvtwHTdkYEvHua2Kxq1q7PABi6jRh3FQLFQvBHC2Zd68VFpDZDqwPf3M76f2jXAckAs28FaTiWh8NHmLEqa",
  "key16": "424tDfochS3jMUVim6H7YSWDsYkqXzoTqBN8wTG11c5CjcH1DKwaP75dniDNdD6mHaVJP1meoJ8Uhu3aNPeDHQ4w",
  "key17": "56uv6G242kNS855Z5cDGZpoGQQU4RwZbKKurkVhKHoWGXv3PH5i3wjLBnUNVZUYfUVfPjetP8r3qwus1LkjaKdKQ",
  "key18": "MMQYgUaSAX4W2BSdHQ7EHC4Z5emfXb9jAKXmY1y4nrvmkW5437DSzxxfbyMaCbFjhq14dcgEXDhNqUvyHXY1FkC",
  "key19": "2EQ4mQRMqCrDTNAsfhACbZ5KJsXxTvKWQxDGS8ZwwTuSzV36PM94Rj141UBzJyeAD3bTinJKkS1rsiT7WCDPWh7o",
  "key20": "65U24aVPRnUKFDBuLqmmRq9N4mXtkcgiKXrjQYXXTaikNbH1XhvLeyrGGBh7xgnAn9y4k1RugFfgvUPsrX7DZ9rk",
  "key21": "5FceAQs2C9wqBpZxifKovoPvr2Q2AyqCCXRvkhqAdUY6fyTpPhjv612wMuTb64wVpoWoW4kT3Dnr9zVeetQLnWgg",
  "key22": "657W9gAfpaaDNvckhdZBTAozgZ79hGo8GqV1KMCxoukT4eVgW3aVDwjBJtmpuP2acQKnYDqckymbRGWCkZAvq532",
  "key23": "kq3nzmTsLhQazBQ93vPYdfUEQBAspB7qDzict6JeRkZCqZD9bTf7tMo8zVg9akRin5EdDkaMScx8HczbA5GN7Ri",
  "key24": "3E8Z5MhP8ZLM54CFvrqmW7ZBEeWoZSsLkRepY6jURKums3FQZs58wp41FnXHUARYYpyHFiccmTztnWzCSfFF1Qrd",
  "key25": "5AnK11w9GAVvxsL9XaDWdH8STiavQgGmSMZVpATa6xTd8RS3fJZ2tcwiknPVRY4ruRcAjF3sJc9G9AfqdVkKUFke"
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
