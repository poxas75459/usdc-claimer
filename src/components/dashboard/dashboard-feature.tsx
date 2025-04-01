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
    "2krRtxXPWuDnEbSF5VdokJiJoA3ibaXLYiKBkxqTsti6xbDcBW1E2JBKSuUtDJLXzJNtLXJEpN16eEXtFyGq64zR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TVrhr7Enj6JpkAhj9njEjTQTxVYdkPcJzvr3eMTAMToWBknhEGCjDqLoTtUdnA3gSjNAja1vkEYPstPCPU1Ktvp",
  "key1": "4RZRyXswgpkDsR8L9hWMbLe3A7c9wzHux1GUKmvRDqouN8FJhqDZQ7v2HPLjvu1E5UaioqWfG83MrgBEy1gzimn2",
  "key2": "47L38Gfahe1K9bVLbxsGdkMUDgvgp6W6aBcdoLRRktXJmJ4XiE9oAxrYddGwvbfvkmaqqreoBn1bGoszbGmHJAvZ",
  "key3": "nRUDQiCLQEkMSavGCzxwPnqCWVcUuBJZTKgsiqDM8NX4P7zgSdWJ7shSEoJZMwdLSa1Jdn8gvntw8SHKi5tkwyd",
  "key4": "4gRz383Zx6dLAm5pbg2zV6y6G1h4Z7hhxwTCpZRTdzkpwn5JBP9prJMEVwbQdnnrduXLtmYQvnum94xMiwRs7x7N",
  "key5": "2tobJzPHhgP3UDUxkexyRXq9f29cQsNotHWjhaJgE13MzPncH6D7XtCECSy7jfHU7Abx9oCRvEeusPnF6TQbsoLs",
  "key6": "4UJ5A7jRr1CmYXdzw44BD9JhqkVS26eYz3gQ62Q2uNNgXKZC5QvjuitUUxhwYaHwEPFTE1BYnaU1FT749dpEYErT",
  "key7": "QydvJL9eqaZntFjFnLuqCpN5V8auCfuBR9wAxnUxe3Q4PxxLqeURtbM4nnShTtHjrjE9H9SfnawsQbZaLVd1CgF",
  "key8": "4M8WuNTiWE2wYU7KuJv1BoiMuHvxV1Hom153CGX1niU8ZyvzQQoJWqo9Eu13dfk6Srzrnzgpd1e3Wdz5WrpEsWds",
  "key9": "2kX6q6YJXWqBVWZjhopULpdyWHxMgtPRLdanNguFWZ7sMSsQvTjvZb33Cci3fi78VyTp9uZUfaeXoCCPHrtaW4a8",
  "key10": "4ZcQ7CC2TAWxKqoRA4mzgeeYq9qbh5vwDByY2tA4HaPERXck72cAxcmJWavG465KPjX88csg5LUKp1Aac7VnWcz9",
  "key11": "4JvrRj52sRFdRdJFxgfuxnqcXwjf3PsgDPx1wtymdxdUPEdbvribrZjNUxHXWAt1SLZQtj2mR3Wjz2NjPf95HDi4",
  "key12": "2aWYdF96TeUXYUDpMnH28G7fGyMm5Fsq5ZX5PLNbCc3qGKa7Hw9XDiSJxQandSospXofLJ3XrZbz36UzdYJdCPKH",
  "key13": "5pXLFqHXgNSUWpp5cP8mzwpnmfSPWCn4cKKZHWxV8Jm2MzqRPrahNLupG5PRndeoKbxqmWsWefLoyH8ea4YyLv44",
  "key14": "XTWavANtDX3acbiBXctbN45zpYqCRGbxMLoMjGV3Ask7cQkCK7HCej3fCEGc97H56Jvuj2e9ErkLA3PKBUYhPbr",
  "key15": "3f8p7nrmVGFr4yDLJmtKaxLBKCxVRBUSc9pUMuRdWuqVhztDzwdneRFgWXt5cBeU5vZoJZeMNV2fWKbbx5EpZjv5",
  "key16": "3v4KZg2HkEqnRnCrDxm1hLCiCRQAQuLJEFbnN2k1tB8M86QCPkPg4Xy6pJESH63YW62BBxrChVXEWrfCr5e2fYQg",
  "key17": "5zXKrRmHRmqrjBbzqD3BAVhAU1TaCuqFESesnyfymqYTiD7Dm6Mzw48jaxcQSEN9zTbs561n5BvMfQwfQA25hp76",
  "key18": "3521Ybc9PtJ63qQZZcoXpg4JvW3rSk69jfTqu1w7cndCgoEjZh5qetSgMoe9PKK8JCM6pmsiUsWhML3nVFTbv9eU",
  "key19": "5ayJzUCk1dtSvq8vMBP9AY4wb2NJCdKS7nkrUojHmjuUDRGe7GLqQSj3iqj62Dyg7514qXpkupGQDM8CMrG5Yjm6",
  "key20": "34T4N7azn8bMxiaMwSp7wDRPR6vzFH2d4h2wbL8dJbBzVGF8eP44jbrdied3ZwGGgZFTzvVeqEN6SVuyijufANUU",
  "key21": "4k6sMAkrwSdrGixX55m6q95JJfRbimnJkF3yNGDCqPeHiMzZXEV8JHorgFiBm87VXH9XwXUExmPvovRQ6umuqoew",
  "key22": "5KNxX1fPm9JLgPrUsLXoxVCrfr54oKQV7yYLHfLGs9vjxT4AvGbKoBzCvj1hn8bLtP8tNd3DAijmQmmYg5GiRUaK",
  "key23": "42p4pXsY5KHvxpy3xUX172DHm2TvpLq7wJwz3V6u2urPTcrkn1PoRVU72ZvmNj7csDzS1QAB66mHMbW6m6kDPJqW",
  "key24": "6tVLCEhMaesEcnsPYM1WBSjBgL3zypbdhcRRUmksyXxjmLvdQYsdWt1vpRLUnVrYjzn8LzQzC7xtroGydpgPJ29",
  "key25": "YVzJAWi5DV6HAipR5ztnMUFraunbAsDjnX6hFyFedaoLNf29BXTsbvmR27GfKT9B8DxxyfMy35ZW6s9xsQavSHV",
  "key26": "5HAoqB23KBGg4D3L3igdUngKordPt7hGV679oypYkegy1btsV2ewU5tDGC6be7qq552J1FGBJnjr3RYeRHNHP9MH",
  "key27": "3nUHvMQptBzi89cDNPiF2MM3mMSa5NvAPVd6axRKJBW3jH2vQExYjk222gnBJZ9yYutFCcjFx3VtH39cyup2M2W2"
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
