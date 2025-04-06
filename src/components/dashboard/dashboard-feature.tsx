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
    "4KLojs7KeGvT86EXTVdFiJxfFoih9BqLUCLcWAUbG3sc68dLHXqj5nmS4QmWTbJ2tXMgXXdC22WCaAm7ZLQzB8GC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XFqWZkBztu93eots1TFeYQDLYzwf3LTRGvY1ffPrm588uwWUUmyU4AQexHGjcjA7TyA7JrkRcCzMXp1gAJ2CUXH",
  "key1": "27t61nQTtMhLfcsd9FhYUXt4uZXQMYhFw8ckmcDcx9STYHy5LvMW97RM1Y4YBsdheHRy58Fkxe3gqv6FbHF8CduK",
  "key2": "djryML6wYhS6Mf2Rm31ycLsWkk6MMBJd7cc6dr1PXtZveYVDMHV8fcpDP1RBcgbPtHii8XRFL21aUMUQ7MWSGHV",
  "key3": "5b2v85c6QzRMMVvgkVw7ah83hMQsrXRsA8C64CGmHbpc9MEhF1wr8uooQYwHUroyEEQFne7eePdzXjz55LZ8ddjU",
  "key4": "4kS1DMopzaGw63RkSkQKmD1aJRcZTFh83k8WLCLHBuTsdtFPe4Q7DBteCa89p36vxNZAQVyWwz8jZPpiHkkkYaXf",
  "key5": "545hdUhmDLtGe1qquH5QvoRAGH2cN2Hbi6MivrHdCtW4DsZamdoG6urHHfxZjNHmfVf872zb4fnbGSpeAbMMjRPr",
  "key6": "2iM9CxSxBhqeWnQVyd3zRVW7AheRvd2eeu4mHDbFvi2bHBhQBNrdp2b1jw18VAe4MopyNAQtghpW4ttkSLKJU9ch",
  "key7": "3cvhewEZrKsqrstWVxcYUT3CE9Y1B3Jfk4xmVZCMuWcQHmZhZHgxTNjg5MD3QEiRc89qaNWEvDdw9dzQnApCVmnX",
  "key8": "5iPDuJgFzVombpwVxrHYu3jJakHdVeoqn42iz8HsGJUXJzxj2qae4Hxre2isKbtKmQE87TUGKhDzAevSeJUGSwoT",
  "key9": "5LeNjX44P88wDQwjURe4xeNF6JDs7KCYeaa8VpdA3uwp8V6ekWG76SV3ymH8uVqc9c3aJvMq1tsZ13rwRYGRQtr6",
  "key10": "6SQjgrsSiLVib61nzG8niuUNvZ4aZNkpDEZxTCNYoA6kZGeWU7mCovosPBGVwaZXMRVpyXqWhAQj6dFvjNAPZxf",
  "key11": "514t236HcpU8UWa8G52b7uNQeLMcYH7tM6QgZATFGQAZJ4EX4XXduV9Db6TEV2JM2zGJHAK7j7PBu9STd4fMm6xH",
  "key12": "4ptzCFkVavP4svegpjaE5pwrCLWP51kq5jBTe4QsdaYNx3Pu9VjoMdXywpyUQi4M5zJ2jsRb3kEt5RyA8WqdKwtL",
  "key13": "3Jj6ik7tACLPKB65bgbJnGBeisjveWiLTbfK8MHKj9vXAsnczreFRjWcPC2RB1E7VKsUwZuhn8jxsKfQWxjXTaAz",
  "key14": "36YucKRphqcXzgQGFL9v3NTUFd3FiXZQRPEbUbxUtiqhru41pjFEGuLshCT7qjokSFjMN3wyvbWfLRJK4HZNf9by",
  "key15": "cre2XFM97tGJD74FZXzNxP17v5dY3zDFaNA9fbQeXCLrcQw7FiJYAniCwcbAd2z3jqjVp5G1zkQ8thbfx262EY7",
  "key16": "4NMLMU3EAXEbQ798A3zqpAE7qfwFrQkLvCqswFqW8tHMu1RKYLbnqnhBhfBrUSv9PXnywUpAowdq6scjVU6zDaAe",
  "key17": "5siqXNNr4os3mkdh6HVsDeTmypDUWjFZqwVYnuQj3RpARNyhBvxcX3wf4gbnci6qBUythtT59hnEjMjYyoX6F57F",
  "key18": "3BSRZRgR4A6mD1gWX71imRHNcQysbPBbJFqwPmhMS6LQquz9ZZHrmyeX69TULCyfyypJikNJgDdF8fc2ibf5DycH",
  "key19": "3RfXKhrx2e7miKxqRLh7RjXUq2Q3sQYZQCTMvdfJwRAdwrRvA3M7K8nWCLcR319ciGZqvP8EGTGTDSqZoYtcygwM",
  "key20": "5hh94RZd57ArWLtLLW7HbY7WySh4c2tZs3mgS1sJocryfq2xqi74MDEK6RXz6TGCPeS7vmSsw15UVcoH5Cm9Ukgx",
  "key21": "3gAkuRHWQni19w79iAdp7VMGZN8ym35due9ytC92fbWYtbV8e5DoJTNAek2NunDde6MFr9hokPHpeBxNjjvEutm6",
  "key22": "2Vm8P16KdbUaAQPgJFCQ3GcZ9RAWC8bftEbGPr1akFE1G4WHeapN7b1Bid5NLV85PhVe3ViMwAg9tse3sHREsGwe",
  "key23": "5CmxAppf4K781Dh3au1SjGWiKGqKPBDC7yGAWQAzAwknGGhKFaBJ6LrQkmd7pKiYpkCT8FjsNUzANhjBhQZvaK34",
  "key24": "Mg8RhqbLqKv5KuwFFhWYN9mvuT6MFBY73Y75XmSegh2wWdEP9kx8JCJWhC5YU6KKzsnpoJFmAriYxbrbU4HnTsG",
  "key25": "5Q5qSKHcYR9ZS7nwbDBWemVdkYdPrTzChBxHvN8MPKzvWY9HHwa9qnkqJp1rjuWXUKVtjuu1kCmq7kzmvgDeHvLx",
  "key26": "2pcPAafy1qjYtDrMkXmFCiitquVSWbP3zPQoH8eJrvaTdNjCxHURLNxooxRcfG9hotG2wB71W4eCbGtjb4nmJ9C",
  "key27": "5z4afa6D7TY5xXv8AahFfr7BkxspHku9CwyjKTHgTycGUxigEpRj6KAhK3LzpsnUc7LzmUh6ryqZuK2VSxWrK2nH",
  "key28": "2GEkQ2eHrQE1PDmTzsYhfSabvoQbAJNcnWXpSwXQVPoHexXCjJYMfqz6FDG9Zko6vJL8VTd1TvhneL2yBFF1KfRK",
  "key29": "2ysi6QoBSKMQrfNR9JeJ5q4HN7Ngjj4djdL477WPMatadhZrRWh48ToK7rxKZgTcrz25noYLTg1EDyKishWekek",
  "key30": "3YvLXP3rsRbiYnrnjFAe1zR53PJgheK4n5KHZrKXJsNbgVkrn3HoUiLxXCtBzLcYpBPXGxm4BwkqshXt3GhGojdy",
  "key31": "5FUvQsW5BY92erjQkmi62SyNfEUwF7b8qs4yKWMv4A1xhdhechG28vDKeMJghr7Wei267N1rpJACAXe3mAXR5PEj",
  "key32": "3eB8h2K6j8VnTkStyec6AykbQkwGBYeYxpBjZ2Z5qrgP7sAVo8V8sezZ8WRrQiNcntfUxnNjBtriX41drUAph9QJ",
  "key33": "31YAgzxYaAe5wSB8oaW7Uc48TuwabHbJjv3iXgiXhooutTVdnNHQZSyJEEZYaFfrCSCv9bL8rqDLLo7TzgEtzUAY",
  "key34": "FhnVYKtvJwVdJ1gwAhNjPJxp5kuFANa22bP3jUafHp3zbzsXZYRqLv7nGQTYfCwEVzMXFE9HGU6c8rBNSArMBs9",
  "key35": "53MuszxsBcPNbgR3GyKdHgSHLN6n1LyCFnF9usTyEttid4Qm8uyLFLWFepTKv53DhBF6LSZZ3nLtY1XHzdUzpcmo",
  "key36": "2ChQDRK859gnVje8XGZPHTmoRwbD19GDBScacV9HD5kT76E8jX4AJQRYTdeA328jy27iS7WEW4hw2Bnz9iG7ERK5",
  "key37": "4BwGNkXXLAhtv3MvCHbmpobF7oF6VoKL3YmPS7yMxdH4xk6C51dvtpXVkKJrKkvMn3vAEVcuTLHwYmVBRGJgmJ3P",
  "key38": "45M9L6YA6dpA3ED87Vz3yQRcKXiHp5nnEAp64zBTTmnvuyDT3GnXo7zF1F9K17ARVfCaHSAVp7z9goKToxKE7BRe"
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
