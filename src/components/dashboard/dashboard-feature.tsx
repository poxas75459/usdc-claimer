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
    "4p998NxKWeqF4ipS2kBckg9X4nqQg22gUBF1LdLp65q3cH8HbrxD6Jjv7ZrkU8RTtu8vVBpxFgeWPES99uSXjhb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TyScaqfsCDeUqi6No7RB4Tp8Z6xG2BsnV3AXye5NYRK6umXKxqR4envKRxZ19yobbtPwnFg6JHsWeteMAcnn2oA",
  "key1": "3SjgLRabar3uCUZiGWr9CM31k8S47ugmyKM4oF7S1wcaPPXa6NA65YowaKsyNBxar7ypC7KNLmtVif2WBnioTCAK",
  "key2": "K83rUDriytMpv5E4bVhmsrtYh4XuneQsEJFVuU9gCpn1nDDTWCn7cabh7gyus7hQe7MSapkiimRYBFw4kPMtecn",
  "key3": "4pVWTNrC9crFPAnG6aKM2T9QVr3pkMzxaYWEAcukJqXCA38UKRfJKbwPuRCUHomHakpF8YtZmZjtG5ciXpEHG4vh",
  "key4": "YiHzUUUaiyFAVzNvBmhhS9qkvbXtHPpy72t6FRBmqs2wSD1zyBPao5LdgtdFSoQFEMX7utiuKSNJq1tgn7WqFu2",
  "key5": "2uKhTG1Zda6G2K5QssP79w8BsS7rdY6qYupyNQX5NkeewCJ2qao6tpmtPfeysHCp6sGZtGW1rgXJD6YUzRy4op5Q",
  "key6": "48YSKK7nokpEese8sfKSx1LZKqA3wsy6dUgAd7MLuBHuA31xxL1RFV9QPaEftwBirTjh7NMSqHFt5RogXJSVRh7u",
  "key7": "4n8hD7CkBntfe8anXBqixPYQvkq9bqxD2E17WkS2CHS4Fg815PReVJyi5ahZCmvfPWkYZABM4u5ZZqfV2Nf198Gh",
  "key8": "2vnFbLXVDrkUM6htjahY5rJzZBcmSucnQ2rDniiJ69JFQN7vLxSjEkkqfjdpM8B2DEhnDGwrajWKkEpbkZZ6vG2K",
  "key9": "5iogeLUNkXrbfjQaqrUC6kvNv2KPwE6dkmiu5vUYpcEzgdHJtKyQdorZzU4MyvjveLEjH8aMZZPmCvNzYvCDPaPm",
  "key10": "XAvgjq8ZQ5qGCVn4kEyg5kNEixqt1TSbcEMR3jjVz3Xx246sywoKfnP2LBfwqGgwcPULUCHqzPzMbYX7Ec2ubZ4",
  "key11": "WD5mYvPusDzFej7DBPNqmVaH97D1DvaXh7FrRWXVspjJFNV83kbZEyWX8GNNGXexuUaXGuzrPVrhPPrqcwzDvVE",
  "key12": "249Jr7wczk6zM5TED6vCEM4SKQGnXJRucUANc6dSLgSgHH9hNuxXshDUFda1Vq4mETyPBJdFtFk8Rh78aJn5kvW2",
  "key13": "kMtbN5yt8oRq6iSomYFJrbK7Qf7HqAfCuDpzCmjiMBMptpEb2RwxPNdnrAUTmDCZTw4aFdjmvw3wgM1ziHWmzpC",
  "key14": "5gxqruQ9reADKTTFZ1rXyB6Ftu8pxdVDcR3vX4Yv7Z6RatFShusZuQgyLgNn9QJBXrq9r2JDiyfBQW6Et2QXHXoY",
  "key15": "2Qt8iVzTn5ENH5RBHB5vDY2pivaqfBvBpB7yj6mF8aaFTFxMUbmm6W8S2BFHbZf7UvCEn8BEPvpjsKmwvBQPJK2x",
  "key16": "SD16krtY3xXNeAcizYpAcmXHRAhPWGPYpUb7riTzEGjEDg8rAP167RRQufC3RpZ6uZPvDtVWQxvZJ1pvxu9Ufj6",
  "key17": "fjoXk91LmTWE7upPEDH8nyrpBVJHDTaLLVhRgXJeDk3WdJS9fKBGetyf7nCxugwqo1RePsH8q6p9355NkLbVLtk",
  "key18": "27mQtdonV6vx8wPghReYPfg5RL4irbz7BdQ1mmaraqZdDsR4ubgWyd1rGYFGYCpWMnEQsVn6pMLQUzw6KxgPJGKN",
  "key19": "5f1eQNd5fkJHrJKcZWSdFcGER6hdFjRS17QBKjm1UJFqo1EaUZzkwr31XwH1qqxyur9UeCKtXuhSDy2CrSLxP1m",
  "key20": "gZn1efgXpjo5BjYNCuCvT5XzkwTyn5Gso1hkJdWpMumWTxrERHrrDJ9JUhB97o4ah1rdzRbukBpznafxR9MSU1c",
  "key21": "3dNgP5Bn7DfQg5Misyqo4L87uFvvhx8C3r3V23mmLakih3tyVQ9nTqQ8X9ijTKQYYRjDj1omx9dxYG9f7XyqWLWS",
  "key22": "5s6pXWWS8jYv5tH4j1awGV9hEHNxLxdocc7QR3ifZwy51qgr8dcswgK88a5ZJmkAz9KFfTPdPnZKgbdnfCVjpNXY",
  "key23": "2ZwLDzPVgXDj3fW4X8J78Li6BcygHTHZK6Zrke8mdq2zSnJQStowfQMmfGtBn8FgUkKVsesDdoEPGJ9FTWDRL6Ht",
  "key24": "2MC2bbr9gpsLw7srw8fvFtk31hRnG8WFS8zXTG45GLtx8LabjbqgNpVvwXJ7q62hGBeSWU3S8s6esMriRrPVc2v4",
  "key25": "2GFXt3DJRXVPyJMytLV7Ln36voJoW9RosG2b3ggz9c5WC32podvvnLSYYqFET7coH7Cp9DbHpDXRn92ma4T2qaqQ",
  "key26": "5UUtUZJzDJ57P5iTTjka1fm4uLTqb9z1bCzsvpvwETwNqhgDq611FJnDnUBr4G436NJBFuqkKTzXnTHytc2su3Re",
  "key27": "2ji8zFc5WK83gvq793P98yUutsUBuyjw6nQ4giCacCm1j2F4dWnKKEorH7FQ9PVRpAVPFWxjawNkDUy7wJgctWB",
  "key28": "58jefXUVK19C7Edidj5vmvaGeJvUoSraXLX2ruiFwiaCtHv6VTnEZttaBLcGfXc9njEVSG5PPLePWG19SMbRJUeH",
  "key29": "3yxyyTa2j7D7sZH2zB8mVUGcNCJxJRqCiA1ugxp75sS5PLk4ruKdu5pf26FXKXEBVzLk7irLw62PsqJw7KtXDLTD",
  "key30": "2Wh7822HDaFkUDT4opSmpJR9QinhCHTfMagh7VVjzd4KHgMNm7KqVYJmvkv7tNZ5JbiHkesdmhgxVb8DNcTVCjBm"
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
