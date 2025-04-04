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
    "4c6evc4v5pKQn5A2mafcNg8jQWDbUMn9BJMehfYH5ZvWZSZD2Xk3xa9hrDSP4WGL3yb6kiXpYhVs7dhjb4eYnfJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hELixSncmhXEsc8JTNnemxTN9MXyya3UsgY38BpTxwMWbht5nABL8oVoV4iDJd5dAdKPa5WrEoGEuJ6nLnEZo8L",
  "key1": "mwXEU9P2Vs9wgN1VQ1RceYAMUsBfzseHjDxUCcqDEJ1GCZtHXtTvikqMYLuu4js7bBiXEaxc71zX7d1Z7Su36KY",
  "key2": "pcJXzgaRMzryyS3TRWAtueKF4gbN6zj76v9diLS4NDsEFuDgJREqeCyrmq9mY3wTnAczQ5aCpaazdKdDjFBDt1u",
  "key3": "5G6fJ2XyRGxqHAw7JcYUx59wZ55VZjQKtJCzzPApAyQg1bFWkPyjCcd68QpTdWoXzAecxo87hbJVmTmUPdkPwp9u",
  "key4": "5C92FoG7dadNfK3Bpka8TS9K1Z1XPW9zrPhdymmAtmY2YXF6WxxXabfzjvNJtaHGKQmDn9eo2dpXDtovca4aqfdj",
  "key5": "fVpD8KoipLd9PB92HsJsoPVYNHb1RpqDP6Z3kTKBUJs1sk5Bcc7NhXg5G9wU5QXBq6A6cUDEDkz3eREchkpFvKD",
  "key6": "R5ccwf3rHSeDuPiAuwLxmJtzXbBKetjpnTt1SurZw4g9CPmgCFW2oYYZQf1FQZB3v1aBNUZZY4e7B1gym8CHonM",
  "key7": "4pHa7k1wHHgHz3hW5pV9dyjDDvK1fsM3PoJazjsD75TZJUeEY5ejg2GjGJmzrntzJM1e1ff9uY4fjiBYtjuQbexQ",
  "key8": "51ooebVUv8DCscz3E3pQ5askBosjqZKxzEWfqLFdnSJTLeCfmLCtoV8JgFo331K1LUUdDCKbJtuhUj2C9ehSkqAe",
  "key9": "3SiwcqTAB7eZLfMTQYvf1YYX72VdoUEcCNMWaHRwscZamm82pNtpz36gf2LjKh93pRWU3nhcEhg9vf2Qr5uuzZ8u",
  "key10": "3cjqGnu54MuVyoqK2kA4zmbowehFWA37ntWDehrjhv5Rkfthyt5vsPr9ogVpXqA9DUoFmm3TxfgDqAfZx1VSVThC",
  "key11": "4gwaTRzKtN4Zxj8ZmVcbr72Pxk5igFp4HGQ1F6fdKBboKfEoSLaZkG1rY64LXMtpB39Snn6VdfuNhajuJspbt5V9",
  "key12": "2hmedqesgxLWoVRWYJA3n7ki7erVnqyYahTHyPLwExdJRFmJsA7kZJoxQhGX2eT4uZL8dRiBTiENspGY2THE62NJ",
  "key13": "2bCXNsyu6SZjSLujdq7s9k1RsBxuYocrzqsa8qzquHSGrpVmWiYFZas6NZmLBJnMNyJHRinX6tb6hzeAqK3LJrX9",
  "key14": "5qJbZmAwX9kbP48bn6Hbx35TiEbr4kJDYsa291ctT46M9kqgDZiLgoGiq3mpknYaTTPXoyqzA3PQcWvQs8CRUz2R",
  "key15": "2cdAR1gveGxdcEyU5d2MB7SvgGy4k3zPfLLin6rNmnZsmE5sGRxMrLUJVqdxWtjvJMWJ7JPoj5fHzRRjLnAumSi3",
  "key16": "5XqbDySYPnfEBk32AXts7ZkeoHfufcdVuQ6TiUHuwTDUEwjKkbZrWfYShQFDFgyGUJG8F7W8JZuvusMLyvfQiexF",
  "key17": "5NVeMqrDVu3R9bHAGuQp5pufKQ3gs6XN8brn4VHVA5jjpm138qq6mVPmsj6doZusn1Ua1NuNHuEj93KEfQZpYrqC",
  "key18": "2qa7rzMe4hrZiDFGsFFoehNPTnzKfVo1G3qzYNUWuCNXqwYJB5sdpk5ZABbFp8PycvGZGaYfajYdDnZYnf1FHXpE",
  "key19": "3RQkuuooWZ95991MVUEQSKcUE4w5q42KokJmFcaJGbyNkWpLXrdjmVLQvkiR2nbidBq2i4fQnyxUZCC7PAxpBqMJ",
  "key20": "nQfTQvuHPtnXJbyPoJdMqEJ8o998WdqtDee1PWyVnr94HqdXbdMgS5VJ5aL8GUXSKHYpd5heu22QybjfeoycgFf",
  "key21": "5ZJxPoD79q43s6qTeMayfduSfubDfcjcJ8UGgS33cEWFhCSEpMKLAvGEHuXzqJeXhF1yMKPeVyEfGiyEKoy6MRkM",
  "key22": "52pbj3KdJ4DRkU9k9ui7YT9n9MwPDFEGcUg7iGyFZN7R7aqc4udg7sEiuGUWMf4vVvRZx9QYk6ZcwmZWBG9EHwXD",
  "key23": "4rCvbCsCSBGhDuV8rX9rM6ksnhUmLN7C89Ma8X5j8Ejr4XtPaLT37NAsqCzCHE2BnixzvaSFNwzEeKE2X5wbPT3J",
  "key24": "5oep2dTZrqwD21ofA4vpQr3sqmT5rfgJ3Z8NNksnjuxuWsCAhEvQFBuU7ak93L4Dcyrs6h7GBjsiAiBpYcKSEE1",
  "key25": "62YoNsapL22Y9gqZ9LUWTJ9BFUXfbd594qoSXibp5Nv86V2vcSK3qsMj2DY5VguBjFLfjcpvueBzAbUvUCw4wVkA",
  "key26": "64VJZmERrF6X1jKKpXhb1oSeh2KrqszQ4JX4HLqDkD9PQZANk9JvSwhwsoJtvHED25KQ6wtoXTW1ViP9PzuC53B7",
  "key27": "4t1MQSpdGQCzd8VRx7RLGqWFpkNCwZiHx6ns62eLRGzTnNHTPmoyP8EjgixVNAp9BJ9sCzi2wRyxK5PbFLm2hUBW",
  "key28": "4RT9nEdamaG8eEw8Q7HUUvRFJgRJE78PimX7u7Y4R5TcUkSwd2h3rhCwcujw7SENAA5tzSJstrGcRvR5hUxBm8k",
  "key29": "2S4GzrJR8QzrSnauKGthfSPw4SKwDKxbFBbEBzTNk7D8mAo52w7X8MCT73pXfhrhy8FaPjdxwwtmrbAXADvTdCVT",
  "key30": "5sZ47hb2e7vVRqx1GgMFiUKwSVdUh1NzK95baQhV7wzxxrUEhP6cEaW7BpfGnzHy6aCRsDgWBYDaEXujtZCqEgrA",
  "key31": "F39siGcuhN9C5cQLm3KwHxYMCyjPRRNTML4fZVRiJb8G7xas4u3fqaEmtX9TrBnbSWjs4PDcvFSYGDhEiEzFtdz",
  "key32": "5CkaWqJm9hH4B3nrJ7dPWMLaWUz7aYZo2s7csTMTn4hkaX4BPqxQvfNtvnghEUuY1eXc4kCrhBnufQRJwnVyoFf8",
  "key33": "4JZN3xy2uiZ3eRzmE6axBJa8Zn4A173oaP6U8E2YwNcDF8ra9R2QsACySb39JZPvT27TyA8eiZKC9AU2mj9i5nqC",
  "key34": "5hDFgvrE8X4hbgfjc3JcNEGYgWneQKn6Q8DS8PJWthbVwYqXrs3H8wWgVFJbYeGDTnARNYrvRMHdpjDJfzxNeC5g"
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
