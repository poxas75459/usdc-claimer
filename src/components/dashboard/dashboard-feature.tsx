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
    "a4RygLorZhEuH4XPesW6GeEPKiUhnrmYVAdE7KMr6DwxUj8dXQbFXfBCsRdsG9NudctKMEKFiWHgtCvVT7TyZvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BnffVDwejwj1NbPhD6SiJw9osjjrhuqty1p5T4APRgWycoCFcxwhCXvzp3f7sG2AJ3wQjWuDVL9KNFKhsFwkom7",
  "key1": "3Y64FSBZie7NWjQi1mT24yvA1e3eizC3RNUdwcNRcQ6KdgiUd4qS9fqH1ZU7TWk8uBQPKfmmRHxSB7RdaKxwAett",
  "key2": "4iBy7WbcKyv1pXLtJ6WcLLKRruTK45Vja2mq6JfN51X1moy2MbE6tzoAvAa8vZygM7utrgZdP6aBgPzjqGjK48Xw",
  "key3": "4GMDjvVwU1D2ia5zzRy9UC5rCjpKyJJ4XJamBhbV3qVae69FQUvbFUkDMuU2XUoXZ99QtnjA4u2eE1mjWLpqXGQr",
  "key4": "PAozk5oQ4cNseFKJakntbNYHTSPnCh3zLVnJyy59fjsN5zUrVn51ZfLpXdDqTeeLgmmxhwZgczVwgVq4db73sk3",
  "key5": "2qugxffPBznG1ofqnDRAeS52mAreVjULC176HN2g5otfdjJguCwHpyahk9owBiCujK9CX26wJECfYj88PMXFoU2b",
  "key6": "3PYFcPypng4uvgNy9zyGfYZFsVM4fwK5h1rNgsLZucYrkqBr1fWiBhorcHJwiHFDp6gKmGT89LMXjcQAgMPYatFE",
  "key7": "4w6GGu3KNsMJ8j3Hn4QfrVDjYiLZSCzw7Ldhcf8DSkeV2BDE6aQomWyGyzXf1HoMWEA89NvKJwZDvdg92rnyhNSP",
  "key8": "pKxWh2vzKGq3zPDRePQdpuTrVqnHawS721sSSmuYezuCVHZZkcPvJ293H6LRX8jqbCg1M5fML6ADtfJLKaAAGix",
  "key9": "LADEVH6vaDXjkL2zFXfhSmVRBnhidaK5qjgAWrdkGsD3dqfUUx6qLhuzzF8sfuQrL7n5v2qaznBf4bwCcC2ij3y",
  "key10": "wQo6riV54fLFDwygSxD5qPt4sg3sZFUHz4TDiwbNGsJpNCHY5JUQR9ocjiEhti5d2GeUifu7nLqJrRLGShqsL3r",
  "key11": "4ByKXsLxQwEKSJhLXkTthqSboW9Pg8ApEX5oyeFRuxFwhJpvfE5S4mXB9xdJntGxsmRJV56v1siejbyq1LK4XaCe",
  "key12": "3KQnHUeWvCEWCkrr6gF2Jm6RPgj9kseV2crrAoKReQdqe2KN9Bc8EoX51mXkpc9hsMaP55TRzm7SJ8qqGZTt2q5C",
  "key13": "57UYpJfgMTUFxzqEkKBCezztK3NsJj8LmwTXJjXi58cpqMJ6nvVwgPYWZ1uhW1JYy518iN2aCfF3NTbpYfP4yNND",
  "key14": "5fqEKtyh1XDe9xRWT7fJ57r7dqYcjU76bFJxerJ9YJ9wjHw3GvTJJ8TYHmeXgN2CgaRsUMyQpxYi1KUGgsB54eRY",
  "key15": "5ZhXN44ckPkiuW1nEsJDH3HTgT1sQGFeo5dJNNEfvzKGy1VQbGgs7diE1VWMQk8j65gK6b7xYz5dQ9FGvTYbFx34",
  "key16": "27sNt4a4iVe77JjN8vnAnfS2dhyr9WGDzst1ELwWvb9V8NMUNan7QB8PsRPTKvZHFuJR37vGcnStw7ZsVdzhPd9R",
  "key17": "4656SVkNccdmRjjya75LGgFyUogTygsxkKgma9BVcrgGygx8a2uddvMMPCCvwSPkgbaYd7dYpQ7H59XdeFGutNhu",
  "key18": "4c3wtQ6ckorXCRo91cC8geziCjgg4Wdyngot7sg2mzRRbraEWdcxtrpqY4Asfxx4HAi4DvGdeEKwASdUAPpnjEJe",
  "key19": "4fFjY4yeaQerfDJgoPXCSBcZQrJ9mwgAS1ctDfsQ9qFL7Wfzg8pqVf2itXKtAP9GjetVsrthADXQx9Rv9BcfnfN6",
  "key20": "2iPe6ZKHqekn3oSz2EfFwEce2aWJPsP4zBhBaeUtW3GL4kKVq98k25dNwSRi84sPoaUQkqsb8WS81wHAAaBHj1Fu",
  "key21": "42p5TejawrrHNHND7QD2cLQywbB7eTUEEzEMHwhezbYUvELzAqiuLXEDRVnMvfSE2jmRd5M86uZFVEdvobnZiVVP",
  "key22": "35fJy8GTrwwXyAcScQQFFfMwWGMoua34mE9MoNP8xaBUSVz6HMp9yrffs45eoKK8nMfb7jaX4yay9gjLsxzdShKZ",
  "key23": "3bRDWu7R9B6sKWL1ASsJxY3wsydswCvFk8JVWAvy2WZNLjHRB1LzdZoqqkhJxEsDUCUqpP1czoPucKdRJ6pwZteb",
  "key24": "csKbCUC2MmSJnJ7A8UKpTPPiesTbF6RYw5X5TAjrsq6VLMKJXr8iYFpYtd2eNgxCGhhKB1eBU2TCcefZgpLWKmp",
  "key25": "3RTJEUu4ePX5smf2Ed2b3jZnfMnkF8YTESeg7TL4T7mymMgCLTgVNugiLBtqfAz7aRpAXiCfH4w7U91Tnpa4wi7h",
  "key26": "2uFChboB5K8Hkm4V4MY4qaozhaAWWztM3iyQk1VpCyGts4QsxohR5oyquYu4H2nm5vDrV2xv7AnPieG5L36nsRvT",
  "key27": "62mSUxoJDyXNcC1AvEdbSx1amPtGXViJEULxKNL19v7bRDdpkjCTKxf5QTVnFPNnVQRt5e2WsbX4XFpE8NC3uYad",
  "key28": "5aqmU1eWndfUEVkdcT3w1gWo6w2rr3pKHKDxSfpKphGakszxNmnWC4SAYxsQgV2Ns5qcy6HXykB7TZQ2d48gzfCJ",
  "key29": "2FfPE2wnSLznVy4suiPHtPznFr47ZFmfiKurQPQbVsP39HApxjzHFC3X5ur3qW6koB87a1cquiMiHBagB7f6jeJr",
  "key30": "2xn8f5SnNYa7S7GqH6vLqKMWeCQQUfdxnqKWq8DkbeBuEeC4EBqfZoN8kmm5hZBTC7NrXHuUspU8JMZ36RmDfUPA",
  "key31": "5DDVdhefdsg7xxKyLEExSczZdmAFVmeG1oHh9oxeYB5WYxYfECPEi2j2tHDf5qGKwk5pdYwkebRWuRhuGcsP3s1u",
  "key32": "sqCSJ9i5cb2XBB6v5pJ1HRQupd4hBxY9fmeYccThG8U8fRJ3AYYVfprMALnqRqoWRD1HHhtMu9XMvSKwK5Fwx5x",
  "key33": "4DVUe9jqzTMoghfXfdqDpfnsGgzn4bbPohTNmWsYdJ7jCYw2QvuxTpL2Dp3TT5JhzoBUVt7Ag6E9xLKnPc88TTyU",
  "key34": "5HH3obSV3ntpLz2xWE2keVFyzBjV6CZR6ck6BG62jgpjaGi81NHgefB3NVPD9KF1CwD2YawJ656EeEviDPJyZfzU",
  "key35": "4MUcA2AW31CFEaSt3MBjo1bMfb7QjkZXxEH7KjJHyGbkfvo51L4anDpwzxF4TtcsvDHaoWRM7BWg1CgVX6EAmMUs",
  "key36": "2dFWMUXCXQe6DW1MqbNcKQoQDJAKAiwvcoHdsC6TAWc3iZyE7C5Lf29zCgDXoCuY5iRaeFYaPsu7tu2ozgC8j9Cu",
  "key37": "3FMx6AR48gVSeERemLMPQJM78QnxVf26xBE1p256Lq7sYkZoWzgiZnt97WjR4sucDJ85Xhbyckn3biqE54nnBHe1",
  "key38": "4QoMQna7qRSVkn3fC6stzUeojdUAoawDYCigmmGDPNXPkABqkDsPJnJ3PdKTbKaZQjdshvqe46fQ2Bo7cm2P3mXg"
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
