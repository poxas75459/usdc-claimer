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
    "5VwbwGMfvtCymnuLjDKiyoWwYkkL5By5u5jY8ZrcH2bjuVnBULTGkQztqd5FmLnPT9id6SbmZEoTsZJbebAUAufN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45ps6wtYsP4P774zg5YPK4YgpyNmjqKtvZRyUFDoNkmGhzXjhNneWp4MLrZQuyT378uZX82FswFua49TbQGUkAZA",
  "key1": "fNjrF3otYmzoZRzPdvZwAX4oZhubSpxbjQX9A6qLQEv7LhkwoAtULc7xLWqPXsfDDMmN1KmwjZNsD8kSpF4d5u6",
  "key2": "HWpZmxdPpzRkbHuRuZJ57XbUsz6Tpyfpm18DkH3AFVLVUZ3wQbZn3gAGhLtHSYdNmJZTDCu977KuC8VJ9wcbLCF",
  "key3": "KCFcrcxA3tusunGz1n1dxcQywDdEeh9kqQ4xSiSNVG629cbSyQeeMyEtPLeXf8W5oGkXFt5d2d7o1soogizYKcQ",
  "key4": "4Rgw5vrLxeKhLEYfaqKmXjFzLPdCVhMWL7Qt765uPyJXVk6y4fhsbeMo25rhwQpq9pZp7HUGGxB9uF4roJynjY5x",
  "key5": "397duGB9q8q7a8wBQDxBTZ6SYLgTTwWzqn11yZJj5WNEpCho117JPu9tK6K53QkTJrAqLYYff2GZi26mqum4FkBa",
  "key6": "JZEZuYWykLMZQpQFMjDQZYHa6hNNd47P4LZHUpa59khJtMUb6D1jMvguSBm5KtGYVVcMJyy2i29FuiRGYG3Zo4H",
  "key7": "3GytQSQegS38n3egk5GZnXdprjv2Cm33yhK62uHXvmbzAsPR4rgwnF8BFYjC2MqXHgrzKbUX9UTK4UTmc6NXC6Rh",
  "key8": "8qrYnC6pcNQi11PoHXMYmZQiUUcbjjhXzJx9qvXWvSjD2aNe8vcgqeZoKbA6VKUcpBoMr55vnSPbmhfZrKCpchx",
  "key9": "3qGn1mYbVuAjY6rjGetsRSHsPWZMc2mR8aTGRhbD29GjduG6BnDUqBKStDG8XMvLCaaRoua2fWGWp3k95exgPovT",
  "key10": "56sw9Cb8gjYsKQ21JvDzT4Nkx4gdJyAjuodw27rfNo5akpwzeRdbv98w6wSy8EBbpsBAa3CLQjEeAygXnqLssk7g",
  "key11": "4riPq2rmeBgWbDt5tjb6BFW5oEL7GCMdBsfK3m7bJpS2qSfCESq1eWBoNLTZr16BAxvVFSFcTLErwatTJdmYJy1J",
  "key12": "5FvjB1Kd9gJABxrd7xrh9czG82zoNVNFVVeLaAqxaVAr54PqCXeMx7khgGtaDF5gStqkKkfwwxRcUwvLtrVPX4rS",
  "key13": "tu9MHuNfcHM5zFmoq1XaWHRSqQwydbF5hUvQJVg1zSyQL3YDBG7BKXx8HwkrHY5vfGRzM8y4Ui2GAwB2vFoa9LB",
  "key14": "4RBQ4AKmw4BS8YUsvyHUdT3im2Kh6SQrVZY9UHqpQvVChXkEFHHjRELkGqJSsvqgK7xzynbKMk87x59kbkPdwjaP",
  "key15": "5Z99bupk9JBrecydMM9Di3H2E5YxtU1ejqZsKk8UmWCkCTiiDW4aXWzVRgSf3AN9KSyk1R6bHqpJv3SAEMcmLaoo",
  "key16": "4qC2H8eP1MGa1KnZZGjnC7uBr5nih2ifdPqAq3c4LKtq9MXSGhV3GNdbvppBfJsWaS8rnHQLNMkBsLwH5jhdGN4W",
  "key17": "58AxzXuMpvmjvASafL6g3ibd1EG9Dz8sAMhp8QabV9qHwT5qgtjbJzta6oAGd39AH95DdNHncEXzNdmpru9iF7HQ",
  "key18": "mPWwv32qj86AQM3rVEUx7YbJhgAqeEBYL3Dy1qnkPBJcYErALgWtXUGDXUkKecbD9uSJGJtG2r631b82qin425i",
  "key19": "4PELaDGH4Z4M6QH8GUWyP4Gg7hWTmeAwrVLoVPcSd54d45x4HfP8iQwQMEZeddGGyCMJtXJoCq19s6VV7wVW8AJz",
  "key20": "2Tfsc9YeqdF8m9oXPwZyovkxeWvMTp5tHxGoEtmdZ3LTG5XiDHYED7Kr3u8qfkKJqpgLnpFYRMyKvoxhBPDvK2Dj",
  "key21": "4TELJ8ubzxDkuDe7ChbhsbyHFpERaB9HRB1v7EB61YaV5Nxo1XLtpCktfVKbhSJKeZo8SCH1r5ip4tqatnPQiDdS",
  "key22": "2WjKmqhdf1vrGpwceL15FryHv3pz6DKxGB8n4oNZVafBtpdkW9f6fH5Br7XJ8UbthMafrRvsrF2usyBimmwDEntD",
  "key23": "5uqk6enH9Jy5791t59YZqUnCuPSwbhMBUoquDc4jqQRUuhWqfUqzwqVQURtxfZyJWLqz6X4ufFDXmxBUb6fhFxwV",
  "key24": "417C4yYXbH3g4UuNgELmcjpZ6pVgEBK7pTYd5p9c1z6sPpiUMbbRaoZib7SqBB2tx4kvjUP3TNFpRBvvuhfuoHuX",
  "key25": "5rcXZFy4Lm6qK9djMUHeyJiaiNQBfnmRg7Rskcfvc9t8X3Ab1ZVQPDime8W3bWy9rbmzuSzfLX7nvitcjoFmUp8",
  "key26": "2GTCbHbjnXKaaLhT2pz8pGLzFrEUTXURBcgkbVesRHyh3HjZw5CvUD6MrQQmA7Cps1oTb6Rx6nMMc6A2sFL4NmD1",
  "key27": "53UorYD4DxjYmJs4gkK6RnoNfMD934yG5jFN5DCeNj6geZRoYV2uZEMRUt221FAtAAtZAzYSBJJppTNvTELdYQe",
  "key28": "2WbxQCKRsshz4FECPAyzPq3rJVSJvq1e19gqeuzNZgwD9mBbbR1aEXUahV6RHd4MYbRJ3H4RsRGdLuq5qQw9EsDd",
  "key29": "2Xq7EHQ5cTWfcevVpHv3r55HXLkuExriD568snSE38wFtyPePT7oeyaLjznRvnmJtn28xnwuiyAd5mrrVb5hMKqF",
  "key30": "459hRh1TfMPJ7Jv4RbXVZUjL7QLAeHDvwuXZFvBfoVFeU1H5FAKQjFJUn4Rq1mm2rvFgNJ9eG8gG7xunEmwVWBzg",
  "key31": "59NEt4QQLMG3RsoFwh8RCMrAHbXAZidsXaTeVCcw9bS36fRCxjtG4FLqbQt58XwuP7BWdgBMnoGQrBrKQXiv9WBW",
  "key32": "2uypyktJNuWbGtTpprVjwicxFARqWCdX3tNyKZNFUfxf9VZUBd74YVPP4U4eGzdgjRpScsgouNSYWExDfyf2sDvz",
  "key33": "5x3kJDNkHzDGUhpdF3Xz9cXba4LbsMCRb5JrZ5PcyLfnEkUyZvxFcHQSJgNaHBfK8GfXzv63Jp6msCSet9rWWQdH"
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
