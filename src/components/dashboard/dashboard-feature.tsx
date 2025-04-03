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
    "wAJixdLKqu8c3jkWEKUJowgiWqUUEAp6G3Pvb54BibuPkFRhXUQbNaqCojYnyvNiMzPZFNLWuErQJPX4dUiM8tW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aLjYDNCzRucstuXM4ezfuRxXYSSXbBQLvr7qiJKvEXLM4DBEkikxCRDQ8hahF9kUwSP7EVv9g3QEC9aYH6t2k9T",
  "key1": "44Zxub8ZDJZgKaD1e39jurqDRj3c7YCAsGM46oNwWQ7qg63oi2ecuG16rVE9jRr9XxsjCdyuXAnt8pfc9wKfH1Y8",
  "key2": "5fzrAaNwKk5xrLmVJCjaFZUZChgVGd7EcqfsWmQvyu1eSrwRTf4dtpe5cCxBCNPFgkhErEHTzdfMK5xfQQqzuNZS",
  "key3": "3K8svwejuQK8xGNCGqwJnFA86u9RXL8VeBSGqVXyZUm3oCQA2TgXfpphZszpeM38R9sApF1q6J8f3nKuXqSEmTMx",
  "key4": "4YtgoBzRLVmw49Qn1obLi9FfdETGixpE3sTo8ygSCvysre5Vgu2mty13KvtdAN5h1cmc9YYs6PCTL4n5E2niXecN",
  "key5": "4k6PUspdU3FTR8J3G6p7TzgzpdN52ypRTqsLb2eUyMFjTVg6jGn8ZE9WcVEmUcjEtRgASjnCwCdcX1dEghcRkSm4",
  "key6": "4LqSPkTKsb3tBVmzhcg4uEiaDUosfjG21dxBCodasgeqZJirHXx6S8ic4DtJN52k2BeUsa41FtHcfnxoPPvvSQW9",
  "key7": "hVCYWDaSRCmgsWU1dBYpXHK5LEdEciqvYrhbV8XBDaLmhyqetruwLiKFxMHizh2UXNht772S1Q9av9soAoFq5LJ",
  "key8": "YkVmELB1AYKnLjyJFVraMn8LUbfe3ceQms5oENebV1Jqg4dDiXRPL7haRbbofxDzxveBVCzRLrxFbDoSZxjyNMa",
  "key9": "4n6QWzvFqwJ4zmoR5LawVDe9Vrgb3Cfi5QGWMGzenoTyZPvE8CgQPd3oiE8GsEpoBpgBHkCsJ349ebWCiDggz6mR",
  "key10": "2YbxxEuAj3YXHKGpeu9FoNoH1mkGTN3YJC716N3raZB8V8F2WXTqM5GxMHmYpePjY1q3AMuK2Kxcy5Fz6Bn7f7SP",
  "key11": "4gxBQvvvLo89nGj9eSR1DitckYnjkCsoExE31EWuuRKyN2Z2Jfrd5QRKzNrHkSwk2cZNEbh44sNYGSLSuZsRR84E",
  "key12": "SVdpAbpk5WNv2C32HL5CJk48XVsHrotWdf2TDVKwWFEjHB22HgWMz1kna3qf3RMyLcZGuVAnYUun13mzoaBthHQ",
  "key13": "44QGPWwAHrDMiahCZVYffQ3FywBq7ATspNvJBiiuPzb6X8aFYy5pqUqytSJN5qh6ZaCknBJvW2B8hzLAGFA3E69y",
  "key14": "2jmw5khucpCZKJGN2hmEbJea6uxKEd5YNMZRpRfT7tG4XzjBFPoky3fXzoZsvymgszhVaDeppmuXRqkPv4k6jmAK",
  "key15": "2fKEFQJWoRZtw7wsv7PMwrFaqP1MocT3PJax5EFpEYT9an1y4UEaFYhfXhQ6vaCGHbRAawDG38BmuSkwxeLTFK9o",
  "key16": "4pJUko1CWMGrG6LFRRN9shCYUhPJ7GUaxiowwPLY35gdc2GBUQ4bBy5ARXNAp3DoTYhbH1cvPEk9JsAtV9Kvm1aJ",
  "key17": "bMqXxnLyXDqwbVZU94uM962oiHpjBMTMrgUK1CCazHbJk7oSWnPuArKM5qVHmbAgswFhXz5WZSx4bK8yP9KHsQL",
  "key18": "4bEYPBNA4cVpDqPvGgGHonZTT5ZwMGsTMh5qmcPicC9vuxrcbb3YKvMJHPWFteyFbTivqJbVxNF1KY1EN4FBjHVy",
  "key19": "3atJ42Jy4RuNLGgqmTrr7hJUkmW5K1U48tNiTC8Djg14pA8DktJVRx4xn7YyJ9q1GHo6fwPEXcnVoC7nWLJCs6p3",
  "key20": "3qLeVda1LhACJ18TBmKm4S4F8oChnDphZpX7d8r7SBQ4aXub5iq5DrjQSmgvjvhH4CDGbcayU9RSeK3RdzCYvUNE",
  "key21": "9xyexynfEq6ooYqMw67oPECuW5R57eR9q7k84HBeUvRJhnAEYgUTx3j54VmafkX1D6fBQXLJzdiedAAoxfkYage",
  "key22": "2Ebi3rXdURqGdcTu8xykRaEEym3eZ7jmTMjAbqJmwbGghw7rQPSAvUufcqnrZnFSaTKqsM9MNiaXa3WzTWXrjmCC",
  "key23": "hZrvZySDeGoGynYyXVTJV16WpwusZWDHUYwHunYjBEnAXJZUSo7n3v9ri296Up42iGQ1T2ARW1T7QVpbbdykT5h",
  "key24": "3KD84fogHNjuLgXtMaAGqYNSqwyjeo6QPxWeeH4mCF8AnPVj4ProK15rCpb1vdxf8EbBy41jxierGthcB3gQEAnJ",
  "key25": "JwP1MBYYX8Yo8Snw9s8xjqeGZs8ewJL3HspDFtqt2QMiqwNeXHq38DGgfZ1tGgwdP2uTjPsKNja5j9WxEJfThqw",
  "key26": "ebfq44qKb9v3JRvzBcPtzMoHJFRGqStvuQXgNb8jAnUaeBtJfZW2ezw9gPLUmmE4ugoRiDgaHWh2nHQfrGqA4va",
  "key27": "4Wa8UouBNiFfWsuUYdt5rw4jBYEDzGFaHh96Z2Ntmuh1w4zQfeCgCgUFWX9hmWYMAHDrEiPapQeDLTkkQ7t8hQz7",
  "key28": "2JCGsV4k8XF23LCFWUs9HgcxaQZoymeD9BuvYVL1Lv2h9nPVwonVzB44jkzvp9WE4W1g2twA25GPXUWWXgXLLwSt",
  "key29": "3m81jma6viDZQMt5MkzvPbJDtpQn94V1qb4fybJpmQTpTPpDsEdHSo8JXdMnFyiWVFpYEpb55uD5kLnQNKocaCQq",
  "key30": "23SE9ozvHdKYStxYQ4iLUB8BxFqpNDTm8e5rU87NNUKJPCM2tb6LQxUadqwxbSgUYAUVy76refgHvpvirXHuz4sz",
  "key31": "5PUBKSftzjQS9T1ugm2tkVRnmSANrqBKKvqSXQVY5ce9sa4Krwfw5fek2vv3jNNp8scxX8YVUjXUy8AAmLH6LXvR",
  "key32": "5zrfEfez5NRUmsoYnRP4TLnNT6EESbBArq8GUUzVaeyFEaexsE6JUVph4E3avwHZE18U3LdjDQCvANHeNBnp9izx",
  "key33": "4SchwKjHDCw3uSVYDVoWmqPpA92nxYw98zrJ3mdDywTvoosDU8W2rRbMsu5GyQQ8gPs9ubqa4dgBhPdesEzPohw5",
  "key34": "3J4ZxHVb2QBZcxfRRcRhwhKuNtHhVZr2SuQX6s1z4cLcy9NtD5gYT8DL4Jgh4nkKMTkq4b5LNrJ8sw8p5ofeWD5N",
  "key35": "3PfwJnLYP6zAtHeU4QV5HugShAgGKSGPdF3UzjPYxBDZwxyCWMGw6zMEKcCyE9efVjVifETmNUfv7brWnPhY3oJS",
  "key36": "3zwgtB6ophExqqWjbg3i1oLNpsG3beAGA7dbLK1b2vfLXN7GegvqgPwP9vzSwVEg1LzYYsuSKP21V7nXLsxVecgj",
  "key37": "3yXc7Qw6gNt2fBJRfqCJN4VokCiK6cHHXnKLwpNXKBMB9jBwsqqoYbjywgYJiBzTZeZNpLnFj4s1AbQFULQ7o2Lp",
  "key38": "U4uDS3rDtGDDZCSxoxMtp9CVfWpC8Q3QWQnp6sMuKWGeCRwNiNomcHpvfxTmMwX31zvH8zhMne77gf2CFMcfsVC",
  "key39": "67YCJtyzGUr9oqwbMHDbs9WeTvTZhxgZWppCDbUNbt4uwwVyV7uzgGiht8pWbvMrBMoSJvzcH6UkSqq7LPTYP97a",
  "key40": "dh5DQJ43JH9fEBtrHeqhPLTmEha4v3DeyVuRHWc6ujwgAi4bEJ7Z5d6Y2WgYKnRCVeA5nnhtZTJVibCsUhtgdb4"
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
