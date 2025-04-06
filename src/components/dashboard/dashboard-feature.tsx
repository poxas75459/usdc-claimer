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
    "4WXinPLcq5M5HzXEcJ6nfWfpSadpgfTMvS9D5nZwyAbMZEHqFnefHTWMdtVZx6PCVjFQNBQPrExinWhy6hAzAhuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uAcxrxc7xfj1s8LUqZpsGjgYVdKfbL8XoqSmEeu4ThoXD68VWjFxcaCtHmJCEdrnK6DTtu5AKK9pDzFrhd7mqDc",
  "key1": "4LkUfGwB33Sho2Ugxc17cxYtyYQPiK8w3P6k14s1BuNjwVwEKC6tQN5YKSDieo1Tn2TBornztK1qNHhNvRGTQQ3z",
  "key2": "22y8UCddnKzp5jrewzNUaesB97rHiwjTsUYAyBkzHWmzyThvWvKLReaQnW7Nfb15yXk4BFDdDmeekCYs2E4YSmcR",
  "key3": "NFrxA9jbGa2ot1pm8MrTC7w9oRqsxuYCtsSA41WYVr9PYGPCoWeTLYRjrfmQY8snYNXadMrMU1kAw2wa1RrAAoF",
  "key4": "5XvPVm3eMh4mQZ6ugYdBcaXs3Pi6YFhrL2aqgc8CrR2jqFbozidif6UGVVU14RRdvdEmn3WwdxQhZ8vNZp4U2wdW",
  "key5": "5BGLnwStqDZgCJJ8KNf5yvVHNSy5Za7CR1xAXrk1pude6iZLojbJKQ7WAdoLp1Zy4ZtPauhZH1J1fzNdy54pPYPD",
  "key6": "2RwRKe8exPiAfHqHh1gwxQFf9bXXQqVx5LVGgUvJ5QZomWgPD4yCrZHqFefD3ARdBXRhjJrvPMFfgnhxzfAgv2ZP",
  "key7": "4hUtjk2pUbEbP4yqn6SvTxUjsXY5GooJE35XyVxRkPM2RHrD9yxo6EuATJqA9zDXzxVfdjZx4snfgj6VgcqRnEf7",
  "key8": "3hRYypG25g2h1zP8NjUcQKEzKvfsquvumVPUCRxcPzGWJfZSVhP2SvPQVkpySRtvaRUpwFu6BfiRtRJzEtkPBkym",
  "key9": "5ZZU27ApDkTHSXy26Avj8RczaPSU4zPUsWiS8MEqik6tbGofE7x5zwNSkDHFCgc1zuAepWoQT4mV5PPR9pmeNs7o",
  "key10": "3riLcrj7H237vHjXnzJpWkBrdBKmMMpSCh3bjenQdeU7rH3etGGnhdzPkewntmJhJuNyRAZHFa1MkwtuA2YoB9kn",
  "key11": "47YwCjnW8Lp7KTXWci4grmgDbioevJGtaK94jxGjz7j9tAgU4yoxFPfNBnpVvQjvwYiqTYBRJeYc5dap7Rks9hn8",
  "key12": "5jzGg5hiFTEX9numhyP6L3jZmNnawsb85WAgsqFgq7fVDGBqB7EQWQTN3nUCzzMiBftemc7DvMka3bdWTYpFC826",
  "key13": "2GyQZAAemE6xk1DLrtmjWKyJ9B1oLgdJV9evmisViRGYmUwr89igFnHeCbYcGPXVzta9kMh8Ea1GirPr5owKLyJs",
  "key14": "5Dvh2rbySTcWz1PkRGR6UekSQ29YvKQtiop4XTNByR8fiyTo6NgLf8SraBc6wTyVrrainUCEoFdEtbBaDvdryEK3",
  "key15": "45FB7boN76q3WwuAm4fQCYitBLrRT9a1ozcJi9gToyToxHW6Xx2dqkZcZTbu4hzzm6bzyjP7rf3pqdnFf514QDXz",
  "key16": "2kRFMLxc8jmPkvQ9c2g13XqVxL9ZKK6DPhmy93bkeAQgT7P3PiDw77jycTGvRdwTByMEE8Y8FnzjfT6A835QDaf1",
  "key17": "3dyrYDKXz6pMm9MyBjKt3fe816RUzhyEsAd7Gk5Kzz5axbAWwB9o1UDUDV9bgw9tk668P9ThW7G9GT73HgsA7aUp",
  "key18": "u33CUtK459tJZKT8aUA9ayvxvEq4Evb4fVGT89Qz7xysrhnJ7ZVEeknFsV8gFn7tmkxp3vdXf5b6TtPtx44niwz",
  "key19": "5PfHUweG3kibvtX7DiPMQB4t3kJGtjSogLNRheV8GHvxbB9Gapxq9ByjtB4Cj9CCZZw2DFU3ihwnLERsh9kcokb7",
  "key20": "56qxJVi4iAbVL45aW6b7iKmS17BPP84WE8dWiuWY1tmsi5KY7Jfaa7BijGbo2tVxHRRshmbXvUJkmmHncJPojpLb",
  "key21": "3tJSmYvsczU9HpTk44XpGvJTkryiNgAPrHAw7ZU2B5Rc6Wr36aTNsitJaEvm3irm9BwUjcEfxgFaoP5tgDVbNHxa",
  "key22": "5rjc78LE69LG2dSy8GFh9YtWq4BRQsy8hstCLCVK9dLuwSk43mbNW93VrvbaEcoFP85hhstuzRMdsRFzrABXsZxP",
  "key23": "5XZzsZqmAFSgwCMowfJSE9gLM45XLW5Wmcp8Rnt6v4dr31JGUu4nKUX8C7Z7iRLxTeoNYREAuQunnv2oCQyXreXW",
  "key24": "58YgzHgWAjctCb9LNMEoBbCdA11sjmqZbkZVTGVrZYGJSYJ2jWDVPxeuZio2HM5hevpFmvJmvHXKTDjXcgTGenTu",
  "key25": "5kXNc7kTqGD6f3nn44LPgLNko8Lri2qifHbQn6vaByQNhn9egqmmLSe8DhYkWi8C1oTayaF1DXFvcARumRiVAtUd",
  "key26": "2f3Ji3HiQnrssfkzrDah6Ji6HYn3tM2HFUq75anyMMvc4W16gKfAdgH3Xtom7QNS774bEYQhbbTPGCdWm1Co11G9",
  "key27": "WtB4KB5VGN1nS8qGvthYbPtKQAGSiEdoPuByiEyAQhYxZH46qNKKB99PsvCqiB9w4rVkzKU4zRq71zx6LFTk9Nm",
  "key28": "4hcPGpyYb4jVs38WVnySnTFTDNHf159Cy5owswxM3e9WH11KsCpFB96NkAQL2H1JwsFMZdSFN5jeNV6CVpPtbEMF",
  "key29": "5TmuUTM61AZpooDh9TDZ2itmniCX29ECSzkum8fZteuh7EajA4CHphYPUM1KnZjAC9f8tfL8zqkjE6i1Mv97SMgd",
  "key30": "4qkmVMMQ24QnMRtq2XRQeX27dLaKRbtUqLvApnenYERHJZ6gNiyBBkiBBXa3YeQhq64VJkPDHDxVKvzT4siurv2u",
  "key31": "GpVhSh7FGgMViJBgtkiBNKAHHDNfFZYCQG3FfmZx3HdVygrxSbTBygmzZHMZ5QRFtf5bmw74EAhAssxfRQhzsYT",
  "key32": "33A9aZKi1VXn3mHo6nLLPws96sUiLCCA1xeNfoVqjq7gjCxTA7dUMztEZrHD45f7XmxHDaTctkSqkNMbz8nX7mXc",
  "key33": "5pGPTMgr6kpX97cWL3kvu5L6EuVqwuZw3SaAyv4MMwaKCE37fHU35Nj2gyKbzTWRriKQNHfm4YjC1ZtiQvba9jXT",
  "key34": "KGHMbBXjxo6A4Lr8DJE873syN5FFZBRP55LCc9UoEG5ENksvJYe7uBidhTJWF8DvzQLFHAxahQd6ZFaBB2RWzkf",
  "key35": "41BRVcUdzJTtX3azxLSscjWbWw5zbFvtxf5RhBeTdMr8wjmsceWhc6wyhN7dWsKFcWrCuAzcdEmTZ6e2jv689yp4",
  "key36": "3UC7xr8Dzh3JCRD1jSiQ9VKjxvfKLB6mC7zJonjhZgaibrLJjQQnUjncDRzd69WynHyuSyZGVmqNUV494RAZbmGY",
  "key37": "4RRLDuTfBjwnNx67yR6z9bYKtyiwcQDEyWjEBKs7ezehfj8E2PrNoihb7ybEzrXkJMtCxfQKUGVJ26HEufZNcRtx",
  "key38": "4tPRPSbphBccYjWYUBxcertSznNqjDdaNtR2WKTtWp44U5z1sFgPeLFNpaQ6L52F9QePMaeiYb5TT8u3xWXkH8mr",
  "key39": "4C3hvgt38cU4SnUx5rmanzhqRhru7ikTYFxZTbgnoq3QLjDmkPKskt268ymZEGN3vwRhAd8dK2FFSXHwWw7CTeL8",
  "key40": "4qix4FdV5u9pPurGRgfr4ABL3HimkAjm4f5fnGp6Lmt4oK8UThjAmY8hW4H7CppvKZr3tboqep6iL4ifhP571NXX",
  "key41": "5eTGVtCq12AS2GMsgR9iRyrdTAnPc56i8jqqU3RG6eXaCJSktdK7N1mvMqTd9eJoKNC5e73N3ccaYBLzLRmZQR9v",
  "key42": "4ygLy1inocu6ukTAGRJR5PbQk28cF2gwYLCmUZYVVrdjzbz6apF7oacY8VW3ouLbtCe1fCytqJRGyuyBRuadWHBB",
  "key43": "xxdmcfN55RV8kdVZp9EaNCChZ7rXZARdxPRxmBYZSM4Dw83LWbQ1EMGvRsPySCP7WXYBGcMgN18LSQDkivZggjv",
  "key44": "5D2zYtS31aFqd1CYVGuoPLUK2qx4aRbr1GKAf5qH5WWpArZkkWF7W9axiuvPWQWnqJsEebknz8J2kE36JmhSTWWh",
  "key45": "33fazgpTKeUF2NSSPdjPsHrMyoTpxXJe1b1d7HkAnTSHTrEonXD8rkswc3JYXrH8aLLPY4eTcur41BZLpR8onpax",
  "key46": "3kZwRKVHSoXJ5pFkuBL82zxou8i2HjRzNkcJAEWq19PtvDFwF6ap62DziSd2EJ3xtaEQxBd9Gtk3RvP1Zqo2HRhE",
  "key47": "3STHpGtSWgwJZLyQrAfiYQu3xnyjKB5FUGHXG5KccCZtBjVMgUBskCzw7dmAvn7iMfhhgdMzJuUoY1kc911VN5y7",
  "key48": "5XrvPdvbefCASz8h5CkQwBgLCqk4gB1b9BgZWarknFCrdF9rBnjBgZGdA2Ff1WnKpA5R34EJyHoNPHD64eoqDZi4"
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
