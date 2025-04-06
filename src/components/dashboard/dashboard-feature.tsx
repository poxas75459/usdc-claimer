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
    "56kqugSdwfGzYVdoEa4f9DZoLvLHS4HihKeX1n9919o47fEi7cBDWnqq9zhatbCNgTmCdusdpRo1HCutYaWVKndC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mZGWRNGbWa6ajGqn8eq5inVGx8tyhMJDHcyaxVUx26TREz6UsGN7Btx5qb94i8LtG1chB9rLL4FhUV7wQnsK6RL",
  "key1": "456848fqLrjgKc5Muk6FTD3yuhcTJJoooNtXybp87GMJBn4Hc3kC9qZmqUhXYWRSpvxTX1s8f1BGQUEaPNaYMfP7",
  "key2": "4uhXxUQr8KA5SyFyuWpTZdR7R1yXYxUPpB61gZpLhCxe1d4mjTdyeFpcpShV5dnYB9MwcxnXKv5KpmQKbZHvxTmR",
  "key3": "3v1vK7veR8SaATC9oCpnWDE7A7w6EiN83pqDT1f85duAxKyfHPMkHgcVgo4xKVmDrAwfC1ebApx5Er43ATCW9hMg",
  "key4": "5MATcCUpADuazJ6DF8DUudZD6ejrC8K5z2qswqNjVW7YDFHPDSq2eRYSFsvnuWHmjXTuJ6xTzfpgBzVx6q6ks7nx",
  "key5": "28BYjBBZ6KfJN4rnuiWyu9KCwr6kgCPUfqTUNaAefkFFqrD6tvpbCv8JMxD5Jpmot2yEj6C4dXMXbYUDFKP5amjC",
  "key6": "5qR1QrwFaqgfiaou1DAD1vqW1BEbS8gR1uyYXArePqHHNynGbLE8pLnQ3TaidAYwcQtScUgkpdFj6u1MT9pBafMv",
  "key7": "5wmR97YnVWcmNmYZYE6cyZSJ9yPkia2RfhZzhi2hc1gdj19mxSZ5KUgJZHkj7UNjbetLk9nom6sZzdSHrHeFG44P",
  "key8": "4B54xMvqfDpXXgu7G5sYgTXQnyzCJTnYUn8hhvN1PFWh8MEmcUTohWNMYD9j2VS63zKAgPw5iacWYEcE5F2iuu6Q",
  "key9": "3oRyhYgFcTzQg8ycYKgYemKFUvSt1GxB2DNhysn698wLHNuqVfFpXXRaTFsj45ELUmbV91xzhdAopaMZXDTSZ8zR",
  "key10": "2kf8tLHUu8xbqVoXijNg6eroqqwYhtzg9Kiq5t6sPjZrADG6KuSEE1ihC9JbGsNAaBXMw8VaZKrJBEYad4BszBjN",
  "key11": "LjddgpYjpLNxDUpY6FMi6CEjYL4kGf9B4kz3rRNuL5FgAUHMaue8iPwgrinyqqQ3gGo71sjdZizqR3MFh7yMJAJ",
  "key12": "5fLFPyp6hc9Uu8j5gUSBdfRW2ajfL8HscArXRudeLejSwsPPZaDFzWyDMgVpXGoWGAEq7p5ybJuMGKZ7Fansw9wA",
  "key13": "3QBMFSPDB5sc85cAvsko552psEpp56tkw4AmR9vP8AUwATBpD9jLb4wCaDopofxtRFcK4EEaHUi7Xuao3gJnUgjc",
  "key14": "5wSNGHg3QiRa6HEcU1d2gNzpyGF2vLpgazBRCa8zELhu95PKMkeyswsf5s6XHU1HtCfXqKRV5XRwdkr9BsxUjb71",
  "key15": "49xyfWcofTdX7VMZgGGwH14twdUTrgAvDKU5LQFsQiWypA5jNDLgkoZDHQjCu7UPWdMmHzHojjyc1JDmfvMpeF4e",
  "key16": "67Z2tN2Pn57Fi7msa1kuRVTXnDKshyY8dHrMBZgDJ7vgWCPN4NEYaHZU9vfrGK28GtH3to7hSBgMaKHGeYGyaFVe",
  "key17": "5BuzxFGTfJLQpETSZfM8eGM3teSszHTithZz3U4JUV8gtZUFqYCoWGYdtakumW5GL6vZWu6YSdkjjcdf26cPmRd2",
  "key18": "grKss23NqQaPNi1r95k6DrmpBCdXinqEdNDYAyCuwydDyt5DhvJNqyEaucCcARuRhRQuUej891vdFP3LMkD9LuH",
  "key19": "5CcPhA9t2hjyEgMqhP7fUt2rB31erkKMNjeoYP38rrgQF4A33AHqc2UjE6rA3TkSYJyJxPAsoPkY4VxWBfheYWJb",
  "key20": "ayRD8XYsb9cPgs2GnMc6UsSa5uG6nuQN8MAagJ2PmFiH9gTYejtzPsKfsqUhZh2DzFCsS4Ffvcis7i8mX3CBkg3",
  "key21": "4ExAzbt7MqPWk5AhvSMtvdP3zLwss8zY8FZ6HK61AU74Q2kmhBSz6RXcp7cGVrSrYZHobNVt2c7oHfq4GeeLLULc",
  "key22": "625C3xY4sUMz7XuwvRi7JSV6oLWmAq2vBN4m26Rk4Wc9iiwf8evECFfKuoaxUesP1kVhexqBwZ3veP4yUYY9johi",
  "key23": "3BXtaXPeLkcqAjxP5wJVUXo1QthEvjxnFXDwSYpGG8BanujMMcS5MoH8MnERJ4u8Z6Qb8j5ttMpuUV1jsmqYvt75",
  "key24": "23xoBXJ28aScNfPh3V2VEPkHivm1yPYBKgEqoocTwPH8tmNKDVnUvYfk7iwbKoZuRfJWw74zknvbCm52H187Fieu",
  "key25": "HoGwSgTvHwtBQxRW3dGk3FC1jcMVSMSXyGPmY8LShQ51HMHUiPFJJhj2uhuZkSdpVAHzHNgU7JL6RFroUcjMWSS",
  "key26": "2Z8NjryggjcoMQEZbQeMmQvE8ehGDm7rHstYiGBhfwwFvWN4SsgUadFWHtzQ17YLcFBPKSY2Wt8xX19zFSzfQ12S",
  "key27": "4coathqcDkP9qbTcrjdyJ6ssFhWx3JQ31MpTUbB36NSTura8d8jAJwvSyBHNz3B21vrtyVTNbbgF8YvjzqwTw2cT",
  "key28": "3nN3ynb8UaznuH6H5k5nRX6cAGkMVDkQ8mYc34GbCC8o8VckfhvA3XQpjbnYerSZi3d8dYLeN7MMDxAn7Pno4RLW",
  "key29": "4oqoJ1neJkeeRNfZacEvpfdqVScT3tY1fbEL2QiFSpNMGYYnLJQ7akB1ky6ujeU2QaDrq9kWchHvgjnmcQbU9fyd",
  "key30": "5d6G8i5jvXKcWto8pEzjFVmubhSjFTNCzuYQ3mxzHj37f3pkSQX23Lq6CBxqUTwQaRjciEzWj4drjVZQ8ATbrVwN",
  "key31": "4tHBniKGzvkx2zoiLeWsBiUJttc5a8XVDJWwbn7Jw2EcZRAwqPdVQEuoVseRR6VYk8TebaKFNVZTrU9PuvRcZKde",
  "key32": "4r9ELitKFry1kYAcLxCkrtytZHS5QV8h3wqo5774usmj5DAN1uZ5z9guNBhX84Advrj1FPr1oCWvBLDKutt5EsFP",
  "key33": "2mcAHshAku6AHAAau7pCAWvvvZzk94Qb9QFdFhLf3B9VsVmXQyWMENd4H6rUwWU8rBMHEuzERLHkxi77L5T7xzMv",
  "key34": "54AwEefhpYp31fnFATaTSLb34ptMjjuyh4n2kBpFz73pKLVSpk1kCY9mRypLZ3wWuUThtkA7uNfYpW5sBYFziUAH",
  "key35": "4uK6ZM6hTxEnUTfHcDZaCF1L7hgnMGtaacpHKekqSwFezhPUx81YTs5hV3qV4J3KfoGbzPoM8HTTF98DhcEEGGRV",
  "key36": "4ikxPptodjdfGzd7QkyJomp3uTGgNRyqUEwVkNgVJ5saZjKmSry5jKj5QmeQ3tfBwbEGMFCqbdXrr7H7xdAzb38K",
  "key37": "216nYqpqNBDgNNMv9Ai2JMktJXQGH1QPUN1XgGr1TP5QTuSRH7kBSdPyiqJ42UfeXgeMxEq1cXjZgdJsS4vPzGEi",
  "key38": "HeiFaLkTtBsmH4b5YQua9vbxZuuxe62ZJD3s9mZo2hkwD2gPrSfKYabHZ9bobmw63ppb63oYsEYUod51Bfe8TCY",
  "key39": "44v66vQxVUkAEkSLT8ucuWsFmfYKHBc6juRx8Ao7BF467p1zuxN49KT8PPGKvCixUMH51BCQbbWTufogzQtWsFd4",
  "key40": "SPVG64voeM1fCxxUSMirWgGgFYU2YzNvJyLG22zNWtYR8CNdA9NtMmJ3okxu7uPqpCmdCmw9SZjLoQ5jsG6JFi2",
  "key41": "4bSovTDW58HC8iwzRaPVYrFrbrEHCmFCuhc1QVwDZoddcWkUjcntcEBqCX9XadyGwjYDWaAqUPxaB18sAZYyFZR7",
  "key42": "3NLXVdWFp5155DWqKirKn49ra9FUco49a1yVeBU4Y11UkvvX2VeMAbvfHhvxEcnDy32ZwrcrFfXQqd3tXoFbMnjy",
  "key43": "63o6232nQA8jbVRVKxKyfqcAvEUcZgui6Ug6w1bd9CpJTP1gUjWTrCnaesJYKfEp6FrCaEm72niArhbuJ8aKXPJi",
  "key44": "vqBdZR2NKcwQDrM7Qfe1MWWWYdWXC8tapitUp5u1wnGWeCpLTrau9mcvKLNSA9kq3447gQiAu39Lv2ATX9C3aaq",
  "key45": "3V49KFKLDEbXENmHnXoZZbptUkwKvTJokfUSNMebJVNVQ6dhZHyNemNWEBkwQnXy5wp3uomDytL1xvmj9HpbnjHp",
  "key46": "3b2wQGrM3L56BjDdB8e8ewvWUiRvFg8Lqp454yoPJZu7FDSbVeqraHiPcDvh8dWEWKjY7LRD3YGQJusAAqvZwKh"
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
