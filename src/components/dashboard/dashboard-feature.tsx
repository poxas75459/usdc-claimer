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
    "2oe4Cmut2ZmJTP6A7Uobg3Z65kP9MXecuGDZcmynWcTqyAE7ihdv8KzBx4vZRsses3qgXJN5rBcxLcQmxJyTiQQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W65e6mX1r8DY76LJH8NDpheUv4y5cC8EANqkXqniFLTkw23ir4uBi5b7DzdfwP5E9meccRWiPLPJHvvwpxM9kEu",
  "key1": "Z8pjJuiPHxS8d8HtfjEf1NocZvbb3qVDNCWn5g6bTf6NK2azhPn5i4C2SrzgZKDaBomhdQDWUU3bPtehW2Sckcj",
  "key2": "3x7spWozogcqqZxsR2YQFA8ETSoowDgXiGw2hjDamcX2DDxbxrERFqV8vfkRqD7nsTymCwper7g4jwdpoyh7SkiQ",
  "key3": "2xMyKam9qiHy868hZ9h26gQK34o9HT5SzYRD9mrDthLTeqVpj7S8bq7bGpi1h8cYCTj1pCJBULGbv6Tu9EvsySgH",
  "key4": "3NcWH5EtNobFyqK9ZhZ5H4o6vifY58KbENcuJyUUMhqc9dbkYV5D9vmgtg2FNMpc5THCrmGN1ARbLMVikV8Mzzpk",
  "key5": "HU9v7fKfoYqapvwHbQekLeKVMsp3xsJJ4QJ27Gne1DmxxnKK6zFFjB4sfEozdMmxpecGcco8V2pRZkqDeREhSTJ",
  "key6": "4FexoVZsTSRNKGauZdN8LhCj5Q4pnLwa8JviM1JctzKjf1TEw1gpQUdZeD3RSPZ8PjwQMGB8hDgNQ7w44rq2RY6g",
  "key7": "3N6o9dTcSTyTxoXzVDeTocR2sV6z4XC673cF9XB42tQHLK61T7LLPfip9ecFdhQkw6FqZAgcJXttW3eG85HX1wPG",
  "key8": "ipRCLkbxKxHCnWsqeZsM5jhtKezhs3jERiJdATCz9Tk2hFQt1LqqJLSYky1LudbwjmhZtyPQegqm8mUF9z4HCHq",
  "key9": "2uXsetPdUbrhXqhHZ3nvnqMR66B42YK8scnPaxoNE77MmmwbdKJ9Xzr1zh7YaW4vNvZYpWMFHqBbEmKx3kC1ZFn8",
  "key10": "3KJgCp9RAAp5nDs4CXCZ4vNE2GycNMwBsq4pkpoWpw3cqATF3SCuUL1yX2XSohcQEihisCJdR6D4jBz3mUXvJ4oR",
  "key11": "4FAa5VN9uHn1aeaRWUKA54KtQS6SyxhWC7LaEKDqvPRC74HfqfuDWtumxQghbij8Dn2jsHokN44KP4mpEJmsjxiH",
  "key12": "5UfonKbZcLygqck5reRe4zsfXKuKbf6e8SzyRBmwL9gAwexfP3e8LiuA2CDjCaCf4yJveUyM51ryAC19AE1AtcDq",
  "key13": "3iPrAsa3nRF8BjTYAAsoymLaHpH8ZzYWCA7yBsgiV4wZzrYngmM76MGcvM6GExVmUZuVv6B3cwWrFRaxpUTXGDLf",
  "key14": "42A13e96LGQLB942dgeNDgt7djvXrBQuq9QcGbKpWGXRYGvumPdd7TvSvJNvFwphMmMVcNmbMXf8KX4ku3CPGeRE",
  "key15": "4RuXHcN1Xuzhm3fh7PxdpSZUPDX1t5mK7jT3uEKJzV42e5ZNHFf85gDTRQkWBLB4ftcBU727TBfmWvsfLxY2SD5e",
  "key16": "3sABPMfitpebcLj9fP4Fvqw8598sbTr6dcVCU9PYmrYowTQE4ydTqXM5AcBy3wJuDBeadEtQ8B5KB3bnTmzixdaR",
  "key17": "2ugSyHpYSxeupT2oDhV9ZfJi8sbxi1m5UoWQK2KtjVfvpiEpKDkkeT6mbvjcXr7wzGbCd5hQbVu7HFzSXyyZGpmG",
  "key18": "63S2Ck9iQHE5xSCwpC9qeoNTipVP7Hvqgv7a4y8hWqFeSQgVT5MCS7p5YKL8tRCzTGP28UXpWLX4swfB8TeutfAZ",
  "key19": "3dpGeCb6F3F4FEyKbbniV5ZrWd1Ck8BBd4GZd2jbCYK32cR8NXReRnDHfSeiLkUdLtTBHmTPjLoTWHnJ1TenFZtU",
  "key20": "2f7nEPZBMNsDxrjMhSGCFHn7Cq6tEqjZcv5iyg1CwnGpD16uUjPejG8acgaE1hyDHMTHRfKUeVWnEkvknma8Z5SG",
  "key21": "35NmMw4ao3rgE39UqgbvZ3LjpMszBnuzYmfCJWpmafVi5JSy2NDvx3kYRdrCSU1Pr7uEAYUj5wfrdbBqxepZeT2g",
  "key22": "3KaMvFN4PHX1584pdkuNw3vA8oiFSussqwxQpqnnSmRrgSN2fnU887kPbAwYnjjh3j1EG6mLdN2Ccgqk28Wt5qNC",
  "key23": "4Mgnbi5yPbgWaHmGCApz3Hj5Xhy2hYSnAhDHiVnjgfy7oYhREBZbaQaj2WA3xKZB3HK4DwYKSEZ6Au2mAjsDiAjH",
  "key24": "JAGrF72CC1mwfUYkeXRL4fzLaT8sqFafK3DVbDAkxHjAsDqJ643WyfTQE9nH6dPjTaUrbNmBRBQeSD7LoMfvK61",
  "key25": "284jiLJLWsbnzWM2AGrp1ZS9U8Y3TyNEE32A6zZAuZ6Kfrivv2SbNxBVaRN5AnjfR8CcToir7SZnhUhxxYcZ2CWv",
  "key26": "WsgWSy2Gfd4f6R4UmPJg7PXshvkPmJ98qdD1UTsSG1biJVapeaiX7KtFK8jw1VEcbfUEgkPSKbqcW5w84W9PFqn",
  "key27": "2Khq5rhoTc6atCY1RWgPYA1G6CUEVZAFbmhm1XrfNXwkz2JzANESNUMNDvBKEcREQsFxcDCzLNspCRd17e1dN2PQ",
  "key28": "3Q1WFdR2AfUmysWbvimEPi8j7wvozbnFnP1uZvc8X9FAaGz5M97UkuEP7WJvbZ8CoKz7foXPMQr9gaZFRJCmwVzz",
  "key29": "3DX3MPtak78rG3TG3FPVSt518HaieF1GRJBcRczMe6gfgDKnEWYhP1RAnR52akG4MQsMCKk6rVxToEE7nuvQnDEm",
  "key30": "2iP1pAwjghAwZyGSxpxCRidPkt24Y17gFDG4ycJyttZJthj83GujqMeFL9ETnVCTrAXhzouvzRF3WCKHGircmAdn",
  "key31": "4LULAhozmZNe9jES2EbvCPBBtM8iisvCg2BhnPq2nDkPGraTFyGPZ2vqpaPZogBtJZGBAubNrBF9bxf9eZbHNr9Q",
  "key32": "AiEuBbTkhTVLBB4G6wqtmb2cp5pZCi1SipmTaUNQ26EHMSAGiUimmtWKgMzomR5L1yHVU1uyBZ6Yu343vfuUgor"
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
