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
    "25J1nCdWYR229Sqtumr2oVtugfyCLXhj1sJYKXo8HDr9CCyakLMGhQMovkk5ML2vYbAbBA8VzT4bvs6jzZNn6f18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UjUiW8M18Pme1XEcjWhxqKamrRkxXoChMvQioUCiNTLKaFNHxWSysWfReDVWm7Jdtv7HQaH9GBjMwz89KMoxAqx",
  "key1": "4aemgQbJ6HLawnYTbKzfzBy5xRtkxqF4Y4P9UrLHeaNs4v8v48ehwb8EM7Mjg3NZ1qJYAYhNTxrFvjTyq4qmBdrS",
  "key2": "3bor2UNsCoCACbtkBzeW717ZSQm9gnAhozdp9RHP1aZXa9jws1kqvYbjVgRLxMxRNq3H47CkafzXHiy7BycgeCWr",
  "key3": "5H5NgFeERxdaGKRtJv6aXC8L1zEuM4c3qTcAYfPk6EsWyhixin6tdgk2irKX5vU1RaH1rcA6B2qWpPJbL2K5QGzr",
  "key4": "4cuuB89Bt5svdjXEKkXZ1okjKYq2MiRWZPeSzLhUiy119LpFhfnm7njcJ6Ze2ZuTA72vnfLuWoJjWHqzRbQmDE3G",
  "key5": "3wyM3fCatSj2bSoMWA2EBmD2pGQQs5QqgwnfqnbMGME135c9Rat79mcGQ6B6kBN4UZrHwb2Sgdwy51QQPPepZend",
  "key6": "2KwmVaLaxCSKrFuoCvDPqcX8gw5nTE9Z8P6CtaNe4ZJdGQxWrxECVRFiJRTo4Zjw9NUyVuVatkL1hz7yBeJtkq7D",
  "key7": "5zFBHqXYvbtVBQ3RTfVJfBFZGa9KLSeTCNsqj9Vf6xki5CPddCMgfZzRf6JkRzSASAnaqEoiw3kqMaCkkyRaUWKQ",
  "key8": "4YhsEnT7rjirFtnbtPxv5wmBPeFruaRHSTWxv92BT6DD9Uj6XUcoYEywK6qsamCnbhGCdswbSg8ZePSNdgsxeF3f",
  "key9": "2awf8eJyG3uzQWcFPHPagvqu6sqWf1fzsZLFs8mYSSg1V5vdhK1wU3xrJugrwJ42hivDbbqh1TCjyWNf7Xx7Ed8c",
  "key10": "TJLi3YDZWyMXR3ogSNrUrv9CCbH3KLJ5qX4cZpWCRXw6ZPjudYbzS2jSes5gtrqW8A5XuhPqcNZRGtQGRrkuvP3",
  "key11": "3xSLSwnsaUU48VbQg729KCur293FjX61x5fCgcBL4AfotgJUq2XQaM58NDWi65Z2aWzwAViMtAyRibmYKznh2XtT",
  "key12": "5eN52MJk8ZTDLnVYz5uraKDBaEatNVoDUf72oZobN7gijVgpG6yXpUcoNSqSGiQTkmeXYqZmfinmBfZGAQWyebtw",
  "key13": "2SNGEsGDDNGN9fcLLVsTd3he1CtGQEfoMR7aC2EWG8f99P2nawyZNDL5Z4vnV1S8pk1a4QJBdrWJtSovzGpUvrvE",
  "key14": "5767QaGqL2gdZ4pBcfNdoAxpuWMi73GTPw19MqyuXXesY7JJCbB38wD4GxyLwsNWgbEPnQ6pJm5aCEvTRKR5Hg2e",
  "key15": "GJ55DhNH9CBeUyDdNStW2RrJJ8FoLgaT4hnvrmWNJyAhJcfeqGgSCphCgoRQGySQxgBgy9UucqnsDVkvRYwiGBf",
  "key16": "QqRDjLx1Qau3V5rv87qpxNKdeVXr4eAXZcxdWhxwYqf99E8Xhks4NrxcrQVigsk9RmQ3wMBiUphHaGy59MtKq7S",
  "key17": "5YVwEct64oTanV959i4jXwowo33UVtmugZfUexbhisRHtDLz337TqYMfxeAZcSnrw693mdAp8sqQwBY29TnBmt74",
  "key18": "KJDGuuRDMeZJqsZV3b34KijzLZntVbm43XUY52WBpMT2DSpVK6Jj7AJ9kUazWBqiWPBXguEehaK1LHHfAYWtSbb",
  "key19": "61LFE3fJHmoYz2AecwSKfDRvt98ni5c34FUptemR4VdYqvBdgQNsBB4yMkD7fziXt9AemRBVe3ruBjHMV8MbnGNu",
  "key20": "4DHfTdawdDW9B9sQ9NFPfjoD3KRaJGdPzYVZx2ebjLQZ2tvfR83tbd9dWp9UkXXR2XVbVCD5VWg3EACvxLtcutej",
  "key21": "38eGb51WPtT2thihsjmnnL7uZoa4WrN3utNtG2qjYBMHJrt34qbDhCmA4r3ZtJTqNDQpjPoToV1Ha5i8qbWhs7xG",
  "key22": "4P8teSDQ3Xm5juk7XcQREsiKJUQKHN7GRYfA5VfbYXN22vdS7TnU9q8bniDkt4Y5s79EvKJazRtP6NrHH8aRHbAV",
  "key23": "t4M9agTvkHiXZtXarZ8GHALjY3bnPFyq623dHPf6GpvZrr9s3kGDGy1UAtU8ZVf2uZo3ATjHHTje85YLMUHwRNw",
  "key24": "4EEbDQ39SUB9uHGwHKbeK4YmNvWLpvgXdy6YZf1sNKSraxZuKEjy2koDX2rKihJ3GXmRNqorV9ewmUy7avT5zNSE",
  "key25": "4xUuk7NJ9UdfSNLheASC6ks14SUnvuusW93DgGjXNUh4ZZjDzhUcJMUWTzm4bZtVgfJqaZebavykSFeshTVT6bcC",
  "key26": "2j9bYqskvbMkrFXGAJ9cJQ37MkqNJcnA6h96YPMV6BBLxdJw3EJo3H2ZuiciZNbcQ6fhaqh834xUXkfkgMkKx2UX",
  "key27": "2bRCWDnW7sKkPA3LUsV9s1mhXoCqX9gWjNuCcMLqmXCr31tXWVqN5CUQcVNKGewD28wQkirsH6sC8tL5zsDcFez4",
  "key28": "625EdZDKCmc6t6Wtm4R5M3PJJ7Bsk9B9CrvsUbUmQdU7pPybr4gieehNWqww7s1xHJRbYvceTTqZmtggHytN6Ev6",
  "key29": "2aZMW4mBQ28dBtc5g356GrAwsK59nCWdLw6vPheuxGVEUfDYfK3K2uR28uCayjts4KckKb68pKwEW9Bdhd9rpZ1p",
  "key30": "4FBu2UzRfnkzxqcavvFUfBwynMAXvp1g1kmEf2FzdavJB7Y1JfXyNcAMEAykMHVVk3Tkes6FDLoabfW5Rxvwg2L2",
  "key31": "3TUSfiToBwgXpi5AbsV1spsy5jV7VdPRpAomDwLBJ9xQioEHVr6bHHhe45L2q6HbSu4DiQSLZTx51PfvaxiHwvY7",
  "key32": "33pEUeh5HMYg3qG2CrEKYXVRByQuZjvBbj3rEoyfyLkA1uk6dpWn646dJHkZRVQQPFcMzTxx9LH38DnudGNg3Git",
  "key33": "4Tz1yYgvC2hWJ7e1wSNQXgUfuFmWUXHpch52YGQJ3WDR1SHF7aqQp5ZkY6qJuAjjjgQmW9SuafBXtv6QtD7AaNkb",
  "key34": "mKSdiRDgrCf8XDw4KtToKPtAXgm4EnSHiu1TpnBswhzb41PYZsM62SThVA89wNHQvqJa1Sd9aKQsbVRbNcU4XaJ",
  "key35": "4ZuBTGb8Wwei5TDge5Fzef7jufk9RAb1G5Nxrx4RvGxEq1hTPKj9n561u23Bruj8Rnga6GtHMsX114W9zT9iK7in",
  "key36": "5cZ8j3bcmSz1DcQRGEaCgS3UedNZrg9N2TZyjSWwRPZXK6GvWR8JbkS66T5Z7SBwFGsEwmrqyPkDWDD3ciK7L2w4",
  "key37": "25A97wDYVim6KkhZLnpXShZzFQdeHpfvfF9AhYFU4EUvFze2rLv2XGG2XivTJbFGP46XdAXE44CyLKsMau5hbYj8",
  "key38": "5b868vtr6sCdmGrGfSWuXwZgzAQkwbnw77Q7UzF74CJfBvtdLqYjnFAnZZijt6Tsq7wmPpt2qN2SMiZJs8jwCmgW",
  "key39": "3tdbYAbxe5oXq6jyFvsgBwGwJ39Bec2XKDyuCcLBFTiZpxMtgWK3VqS4devX9N2FzDhrYVjnpewLUf5RHvVm3yXk",
  "key40": "fzDzPebMi4YeZp98Srko7EMAkVqvnDDZdRRkbPZmprQf1rZsp8g6ABFoib95CXwZkoA7M5uCqLCAU6XUBpBR88q",
  "key41": "3XB9tizL3m1AZjuw2Hx3cbCa9NV5MEXxke1z9e2qa4xB1QSLZS92b1bFQxsgz5V8s1eUYwu7fJa3Sju8ZuW4qRxe",
  "key42": "4D3eP6ccNg7RqwTSfU2tonVmZPwUkoTLQPDVrfeAeZcgLv4VXQ9z295u1w87jRMgVRn7N5tVv1TToYvx4WzY9cL8",
  "key43": "5j7EpqqRNik6zrK5K8gQ58ue6vgf5VBEx5oWo19RnMe2aXG5oezuTzLHAK6ZHrH7LqBya4wHCn2kKzkE4jGdoxjq",
  "key44": "4Bv4J6Cft6C1GCJEs7uUm313KDbQtR8DkFFWeVbyj4zoGPEv9W6wwVfw6qEZa6EmngA1PFPn1tazaUFf3xdLKvcR",
  "key45": "22SNA1gAtBDQToa5UotsCwWN8Z9uE3vg3f9yCcb9KhK6Xz8dkcjhuX9aqZuny63251mkCXFopRF285Kq9fN1PRzo"
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
