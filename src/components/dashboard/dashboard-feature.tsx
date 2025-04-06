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
    "4ng5pVg8Mm5trNSiKrPJQyCGP87wRnocXS1L4ehddmWZT4qtjg6EEioK3H9w7fnBo8XMAdEQM5w5t4YXthkU945T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NCe6tLtXL74dkapZnyDiKgB5b3buxJSeJKCFrruTVCE3VUmLQr5UDbYnUqa7KG5RrybhbNfqxY6rYVqturf4k8Y",
  "key1": "aVppprKarksFWqi88j3fqPVw3YwcaKR1k6MGk9dt78j1eWCFgQ46ssBfmA8ATTau3MRdsgZm5fUVLfqvusb23uf",
  "key2": "cGXSgSkrWN45wMYtmvkRdnjtJfhfwZD6ojpY6f8Qvzez8XWFbJ8bD9zVDGBxqWhWUquuN4a5bgzJqBfXq1EmZcx",
  "key3": "5pyv6apeoh2DqD7DVYaJDr7hVcRuXT9jUBXBouW9pnxjmR8e14q7XmG9kDQcyjBgnHzgaU7wFXWK8S9yNJopxBA2",
  "key4": "5VHMBYbQWwAJyo62c3ZmG27KYndfmkjjaTxtvSXJ4VdBdN1zw3dadj4Jf7JuEQEmdV9vh6kuM49xJH152T9xCKz3",
  "key5": "38uZKVqaBJCMryfzbmGKqHeErgH3ysyqar5QwyZ4bV1YsRoXq4gh11qLRnqKD2uBYTyU5A3HUqsCgtqVxa66vMs5",
  "key6": "pThnYp5aum9sQwtVjTVYwrLxiu5YyDYbGeaKXg4BTVDnX7mb42g3BjBoVXvgWjJFkKxUBhVMbCAEZ5ijgrWTwMj",
  "key7": "3yJVT3fqC6BRpGBY7eY4fvsCsdjceia3RjqCwQkmLvPVE4jiq3F8jjDqRjAKcGsru37q6oEPxYGVRFnjseXfDjo3",
  "key8": "2kYoAQXT55G5KN3Vf6jwfGW1Nw4J3UwECPCYKBjUYhvm82BQRgaQtHiDkjHT89Q4sQvZmhVZ7B6wBT5Qvq6S2qwd",
  "key9": "54NpoWJDmqAS9rEJmCaWzmv8UR64mKdxuYcmqxUKW4GZHQmebpXZBn1yyxSeuBwzy8THEfNWN1khenaMH8QrVkK8",
  "key10": "63CmPihDhfSqP4G9x4fQX3vsSjtaYkqW56AACuhGXhdznfzHmMyntzoRSPADGjUvuB2vmXzrFavnnZBrP4pb5NPm",
  "key11": "4iZsHy9ZZikYE5YEVX6RmSZPHjnFAnAv9g24LRNHZHdbiwpxV4mCsPVZWXFZb96hVPb9SeYRHcRwgqb3av9bpyij",
  "key12": "RRt4VtkgFvsZoapbbhCdJ2Vm5zkujtihMq3LKf8zfNiHyEyUZxtkWgramDH5LvSRLdWzn4KmSYV3ThqTXrGQ1Gb",
  "key13": "QBwdzPVT1MN3DzyDS91j97yi8TtdoMzxdNLgZET8EfMhY9BAAwKiA8Fwp9zjnMPd8dFAAnxjNj4yG1WaYe6ftPc",
  "key14": "3DNPtkUPxtYW5YyZX1HwXjRm7j5atH2K7qwyJ5PAkfSipBvfnaCQYK2oS9WhTLY9T2c9ttTsFKBQPruwbFgESm45",
  "key15": "3x766sC33Fzo7wh3fDvEPdiEaTEnhrsPz59Mw81NFzxTmHs3LXVHaTLrNuVibeLmxGPsvBtJADBMGSY6FwiSvda7",
  "key16": "5dY732NeZ859rY3NMV36DYmSaRwoF1Rr36so9zRZHvAy9TCsUDPNguJU69sadMB36MDUTsabFhfvyHnTkrw2tw2Q",
  "key17": "3X8yd2pcjZKWpTyQcQCEScAsmvsaKvqV3rptgGai9Dnw9YnqPiPH9WbF5SJZE7GYcuRDVhgFYKNQFnvqXHftJz2X",
  "key18": "4QjzCYoV1wMtceZexHR2GMoJC8cnFx7tDiSPjAFnAJfKBQu7GBvdEDadGWGKwPY7Vs2uGgRoZ4dL9Dx22rQcUZ4G",
  "key19": "2gfUdiQ8u17gwnnMvStRrAZGwFVpN4pC4ewiZnzCH1SSNFKe5tYYeaEgUPYvgjcjtq2yN1J7TEdcnMtxcWZJMPm1",
  "key20": "NFm8YH4F3XrQLwjSg4sbyuanH3sgktHV7WoTqo7uUyJXcDoyEC5kh7Vmtk4JM6JxDxVuNCiL1CqJiQEoBdBXduu",
  "key21": "2fTfZRbkC9RLWFiBGViRQ88CrLKTZ2FpwT359262i8fzuovWHpM7Z2N67Dnt8pH1C8h4CYsuZU4ZFL9xa8L9XSZr",
  "key22": "2uhPbYkph87EQZNrMZMzHqZMGeiH8kd1YMKPq1bytRP5sdLN4vG1snpodHYxPLQFT2xjNTbspZvfqPxx2DMVsVt6",
  "key23": "5oSBGw2i537ygEPifyTsBrAjwWicWUige1JujES7MoRomGdridUdtnKWUbRpChB3wcChdW1RN2vobCEoBzh8QQZS",
  "key24": "3ybiQs41C16FATurjvKkLzdWCcdm6eBJbekn65MQkdotb9wxKMUmGDABw1t23hcCmN2cEJ49AWtcqKkRbzor9G6N",
  "key25": "3zveGbVP8BknhW6Kw4V6ziMYhuKqa35uqc4sE2GSFYKRmWxdqBYMCvd4brHomyVB5N2Hx7BbgoCGYFEKfqBC9pPs",
  "key26": "5tHT5YFLgP49xY3pBPK1G14YB7cUDx4yeiVtsVce8NxWyyJ5NcdnXPcC9RS2U4bWEUDqd1gAwG9LZb8zxUgUDp4u",
  "key27": "4AYtvwJv1DKkR5QAUr6Wkp32Poz2vq5kvDkvCUZpwioo2tKSqKKSw3gtrYChj5pvBaPy16jounuxTqEnKMtvXnRp",
  "key28": "5P3s7GgpH5SPCdmmx17hCzfsznbq57x9fzc1cCYL9A2pNPHFdWAX9dGHKpbZ8suN6CJgktMp3Q7t6xLseGQ1vyKv",
  "key29": "32sg4zMSLARVmTq9ybyrNMZJCZdgwRo4pQKykBbxy4cKRtCmkNEwJpDdS43x6iA1ib3izUtNAarjzPJbfypKyPxR",
  "key30": "2q7VYEvpJMjxsE7dvruMN8raT3hPSgMVtTRteHUvniqFrqXGq7LFGv5t1cXL5j8XzfjUgMtmANLJ27YhuKYVntfG",
  "key31": "9nmrAvnfJMQRpr8oeRY6KbGdN27WufXmTGvEMyS5xczwyQDAxU63XCan4uZLorQYdhtiNTJtVr1KesaXbKpahJ3"
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
