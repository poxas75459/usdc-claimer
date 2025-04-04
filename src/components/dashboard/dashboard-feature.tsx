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
    "3AQDiqC8B4wRivpHNH3zVVrndbRd6vb8jJwznLhsnrD57ztdvDbV8zs9rwJWyFDP7A1T1sonmwrBEu6c19k14C1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kogXZW5j2yV8CaXZ5HTHHfvNVhT2MBeEEUXYUB2iQUBnucLxgWoXrp3RwErGtWf7UyMuE8xfbRNkWPJPivPGpKv",
  "key1": "58j4z5cdDQZKEKMru8FCQ1jFsj7CFSWoSLUVM7E73dJoBzijApL8QrQboB638Mvp7ZnDHv7CiSBFv9KYP75BtFqo",
  "key2": "67jzYDdocvQvfTnsdkgDfxwurwUoxmUaQcp3rsNUyi8jCTzRJXWMPoy7XzpfRpVJag5ZUNCkP6ARs36nAmJn5RBH",
  "key3": "gtSVuY4xHPn8ifFStT8hsf2ikxYdjCQJsFLzDDEkCaJiSSmfBKsoXzdFde2SH7Kci5rkBJcvj7KBoD1wbSfhajV",
  "key4": "2RLsn818g3r69VDcB1FWtZcWceFoR44v8ekRUVEbz23eN51Q2yVWEigSEQ2vRxR7knb98uReqXG2ePFH2yNnXM9f",
  "key5": "jsFs782SN2GXVF7pXxV5gELP1BPv943JsifaTvWXbMR35QdYmHbrYKAVd5sJYsRTUySYVwXgCfkcYGTfEqDbGBs",
  "key6": "5jzztYmG3ndFstHeaya9n71zkgMrMXvVi4uTDMaMfH9rcZyzsg27xaoNCEm7TZ13UhtSE6R3jm3uuDaEjKTPYibr",
  "key7": "41C7xcwRQpAEZk25yfGCy9PyemLRs8gdGGEkSwaYEDYxFekKgrvRp1T5n66GELX9RWckEMwYRfwDdh3kSifxoXY7",
  "key8": "4kAuGJGWKABWJvo7esHB9f87mFqhPzJxHCSF1wQ44uZsDZcHeQ5HX9snZHXvNrQ5VSywrL8spm4j1vToxu1T38gA",
  "key9": "46s73bYh3dimrkpEyqPc4cnvoN5hvR48BSuvwQmTfzV5EFKVsNKeCuNnBzN7FhMFpFDKnUReyGo6ehm9bhazPFiD",
  "key10": "boMYEbtoe9T92PvhB4JyaNhAjH9ZRnU2QPYzaYqQu3MFQDhJKvnGe8Sqs2DC1yvDnodzfaoaThboS4pPUGAFSKC",
  "key11": "5Dk7CWQYyHchAKiCmCECHJS2ixLB4SjLeHpjUrt8iN2c41drTLaHtRpTnVniYfRwWc9ZfE7UXKJq5kWKDeusMsXX",
  "key12": "5VX1sRxsJWp6qgErJ9jdXqxbAAunxpFf2RDZZMJE7VjhDSH1PyPrR3Bo1oHpCGBzTNJscqcw2CrEc5418RLjbVRL",
  "key13": "Ht4C2HDDGbNX5qBjD2fKRmNZjfZPsYHjCqViPnDtu3GefDFdrH4HY2bNkxJoPkRNVVrK65pWYNZUaPerKFMhiKV",
  "key14": "44h6qsZGXy8UJuAHiJ9DA63z2iAtXfBKqKxxU7rexRUNXej5Qrkb1SbAUmHbdgQkoVfjdLBqqLdNTfne3SVLDg6Z",
  "key15": "5e3mNJ6Q4ibHnKQXJQV9m5GugH6LmC7967rRF4rP9pTUg3ZW1GrLoZm4r2p3PdQgH7o6UQXWV7QkhWYCi22fs48H",
  "key16": "5ADdJPAk1ZiRQai3uSLsnFXjRYMHhQYB4T957ijvfFseyU6RoYjSppsTzCu1zm5uygAmZMXhYFMHnKnW7L8gBhR4",
  "key17": "3K6E92bQyEpb3ZGxy6t71VBaCqojexua35R7WhYUSGVuG1ZnYU2pS6Qr34CbZpejUmhDmvox8tYBrYQCTsnJQ142",
  "key18": "4juxfccNuJigL9S9FGesJJunDGF633djjSsRfuPSsyfX8Tii1KzvwyEQTpkX55q89oqG6qtYLAieDBHiLbf2ctNC",
  "key19": "62m63DRLFK98SiQv8Wd6kaUYcFvR2kyrECrzCLVatxxgXwZ9yAipexRGjA7ntid4RK71c9c4foHh9WqHChWADdHT",
  "key20": "4KoFre6AWhQaGfGejj4vMc3DaiNnoSC2pKTxSd2ZBz64yo95jvTEvsVDKD4zxMGT63BoYScRQbaBn39UsnDCFu8z",
  "key21": "25ExjDCxEbaAxftgytwf3Bxga7BXSjHt8EsT7hjaRhyL6mawXmS2VtWJhzpPHWzcv933CtRyRFTcuohXK6Av1Thq",
  "key22": "615W8sSh1mZssxGtAeQ3ikuv2zbPr1hXAD29ent37xiRm4Ac5mXxz7xdg52ZRTR9Dt669nbG96ucyzcMNo7vyKQp",
  "key23": "4miGaQmSrxpeYPHxqsCE5XB5LzLCTLqtyHPZ5AQodfRh6c1T1SoBtEq3GWW75ZEa178GerKB5SEJJqzz63PjAHfk",
  "key24": "5m4VGPAhag9kXMhTws4qVZtwnpRezcqyFywycbWM4Zv2FfXCMraYKJb6uGzbXA3GNBJwJ2tonA1r6FtiC4PMD1DB",
  "key25": "4U862y4BuC5Nm92WTkB1jry2C71qNcyLSyQJ2UwUthZT5caT2MnHexdbsAWhQ532xa426UGLRqjPvNJiwzfQRXHL",
  "key26": "5AQYk1zuaW3ePn23aTHH2pSJh9HcCj6pyeqtyhXc3bzDtwjpmHSTFuZCqbC6gWTFwNrbZDfEnVwciyufLCYzAhtV",
  "key27": "4LCEeU7UUd3WVtkkVLsPAPZrKvYsHknbGCNmK57Zjq9fBFLv5xw8Zqs7WAak8XrAf23cxNefDuJfgiP7Xzi9woj5",
  "key28": "3Q8ptJdWKfCJ3B3a74fKBztHoDZvManuS259JVuxSNvc5oN5yBKhRPq9bdVDLkb2sNedFFTLLi2Ev4DQyCWYRPwi",
  "key29": "3h4RLwNrh549c6PYi5XB71Kx1Ri6RjpSWjsXg7vYwMgzQwsqNKusFscbpt9uzq4FJJsaKsc2GQaniJtJ4Lvo7V6V",
  "key30": "3zoHW6pSXTGcKYfE3AN3U9NNz3myZu4tF9y3P5GgoWrttnwz2UnXmqDfwRU6gxAMtoEVuqmRmi4QwbMww5maLAJE",
  "key31": "tCQHEM2N7kAKzn5GQu7MTmDuA5gsxca9pSoy1WfJkdGgdYQa88a9rGn987otwmDNYTXUkw1ECkYf8VPYXzbigLy",
  "key32": "35RjW4YzmyLN7qoV3aSxGGUD5mLfNiVuN8N4S73wgUZfq6QupANEgesZvy5WGxqpTzrycMLyvDJVnFcSZVaWUke3",
  "key33": "56uDEjNJrN7yainRZLEp1gYGvfUZpeJb1nBg2yhV4q2UrFw47ge7kXLLVKWJAgpkEpTYnjVjDQ3L4QhhPLhaueHD",
  "key34": "2ng2wC9vhDaCXyrVcpkXohGJYQC469kzL9qxPKh6GJPhjwFXCDCUb1Y6QNYqTZTmEmPabR3F5VnmnzWoEcoziKCb",
  "key35": "44BkBbACVt7sdEjgHYCAsoB158mfus8FB3gMnURZAcH6f95VbKuC7hMMo2QAb1hX3p6ZsbgynEekPnBF6f1kE3m9",
  "key36": "542fcmc3vrJwqh3kaQoL4E9vrAVCfzc3tHHdngcaPXrfdbzUc9GRUEGmjf1bPfTgLyJTLTx3bRRaoXxzJCLADYwr",
  "key37": "3J8GG6brMvPow2ZAbaL4P3ww7gTREJKGL3G773r32fy6d1igBDZc9aRDaQDMyq2faecHcoTnNZPAQpFRM2vZEAmV",
  "key38": "5LhLAX8KUx5f3Q5XDqogVSYV1o78wDhssj1WDicv5xkQ37BVfRtAuJuVfPSfzZDMBMqSrWGnmthYEvxC6RNjHxgE",
  "key39": "3DQWagayywPHVExAMe4n3mQzH7htdoRhFVXT4X16XLq6p3gLsFpaMEvFsokPVUDLfzV8HNs9f17PA89yULffyw8X",
  "key40": "MrUDejpAozw18PFajiEdoRHSEWDkNtKULtfER9GgzMWrtqdWWhWsf9PwhAypurnhNDCqXrUxCrEc3udXyFUzWP7",
  "key41": "3itvviruYGbZXFuWevdVFEhQ4kzhKVBzKRkAHvBjVUdbUD7gcoVsSzdyaagnrPhQi714qX3Eurf3ru5uH5JURaJg",
  "key42": "3dWKhphVYe7Zi2MB1d1YFy3cAvxVgck8PT5pYfGRrsLkXSNDgPBXQErmMgBfV46TcG8qb4gBAAaYFKuyyBBYc5zf"
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
