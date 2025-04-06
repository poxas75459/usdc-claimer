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
    "2wEiNzhguvrkRYvMRTJYWrrsLndL2HscB5fgoN2oaSkdbeJYLbZhsgJNMLwGAd43jUZFgV9eRk3uNfYZz6MNHzC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nwNTzdU5RuQBsZwoAf9Ec35zmHPZy4fDnZ7yccDrdR4c1aUGro2BDEU6vK2ZAe6MBDVTW2J5k2PHtezJbdtng4K",
  "key1": "4KRSQJpBsWadvqCwLBmaYDcRiGaYQcVCeR28wwZwQEyzRFTarkEm8bm76o39Vwh4vhcynC76zq4nz9qiA6uPdPLY",
  "key2": "5XkVJm1cehjNLqazQRWGDoNnY24s99QFQC8kscDiBDqUYXQNmoY9bFUwc7kxgwhG8oczUhBFFacML6VFH1XJyTFy",
  "key3": "2NzGg4c5NcUEL1xgJiSe1RQEddy4VPessXZzzrCc7SPJ2heyeo9Hmmh32Kuwb9k3eQ9gPkB2VLUxtBXwNTcMyo4D",
  "key4": "uRoE4HPJb1ZagDT9ngWsxMDKCcG9kJQBoGsgPGVGc3qK3itSE9iG9qyx5yL1PpT2JEo5zMupWTaXv8dhSmEehkD",
  "key5": "2saZ7yVUyYmpQVFsMVyhnsWj4oJ35KU6RazAkMrcaSc67NKmrn2yvxrC3Rau9cXcpfipLzF3Va62hEScwrspfufw",
  "key6": "2Moo9RYXEJ7YhMbYuKZrDcHoBuhv5zeLjceTK8EBGSSYRkjHyAVC2rSR7bvdUADyuckGjcEtMhrJmHVMmRZmp3hk",
  "key7": "2CqY7h3ERQ8fZ2HvyhNTf8wyk95GmUEw7fePd2KHtmNgDWdnNXzowbDycTBtfc9oxe3vzkdb7MHhFks5Xaz9y5L9",
  "key8": "BxXheJtKmZXBLqFuM6ahYwZYJvtfCoriCvDRBsAK66Cbq8m4QNmSESB4nLbUWkKLBFSayGiJ3ccQUv1DwwGsdXF",
  "key9": "aPZBSS14xL13GSpoN28kMQPeUZATdskSE8AnsKyTdEFFtMNJy7uxWTz3hkAjx5humuQnABpjPM31LJ39P3yfTRj",
  "key10": "33cwdVeym4AhDHRFDHD1zyrvAN9ky8DZ1tg7xHQ8fnvfKPCgUxoKpbMZsQHFPrwdWKNU5uVLDqoY3a4kLWYtJWhE",
  "key11": "5BhnztptYSJrxW4JBjNmrw5A5tMu6SJztrJkjyWGAFC7gzfbdj68gDwNfhtWH2eTFC6AR6Hu9vzAcryh3CjKHtTD",
  "key12": "4ydaaqbXDBDMptMm33frf1UjuithtTdjKWzzn8qqvGszjbhqhRdeRief4nNx7DRunFASvbss3HMYsuFYqwhbXcEQ",
  "key13": "5jRNeb5jqyhuuSQCRbBrJrRpCUZgm6tfB2L21enWAS1C3U7PBiNuyTzQZz2aVfXhRJwyu4MPNaMP5WJVeLeXjd8v",
  "key14": "53XDPBT3MHEM9EASsWMfdAb3VS8ciW7Dzqaxw3ffbafJE9gi2mzzbqx4mjmGWCacECQTM1ir5j8SYTVT8peVndnK",
  "key15": "4ny7e5BrVZ36XRKTWQGnV5TvRycw2WM2B94DwwkfcCoDbx6XNrBb4rpE8Gv9TV39acBfEo9pEUkbEBUE3RjbEEBh",
  "key16": "2ECovVBKTJN6RW2pjt13497LGKLY4WWxhZizxNH6yvf8krZr1qGRQLBHioSM8PoLWK93VWNam4J1LdtXun3gQ7hN",
  "key17": "3VebVSVLhk3cE4qzY6EqLTyCdkdNceFSrmpy8gLo94BCSxXjbQVBUaRJqBr2jZc2HmbjQSLnGWmULZQsRjZTFTyp",
  "key18": "2wsqyvHUd4DCfkjSHPGoxqeFMgvssENo9sf9jcu1pjqnJbV4MWgp3capK7NxLuFkhHAQwiTi9DCi8JAZjZKmodDT",
  "key19": "5tWhDndt3HK4fHPrZdJsgBKXzmHEpqEQ74JMGVViopgFDSswACktgDE6MLmqmZYVzYFsV3x5fxf5S6suo5TvNUHn",
  "key20": "44nskidSJXyPmpgF9TCWChn7bcjUAQxssUdswBpEPrkjChdF3X2ctqyL4hBZisSPAQ45zKbot6kadAjRFEb65ihr",
  "key21": "2maJMeGv8oxb9FDVHcnzZ6yA6WsRAnRW85XMDYSyf3B1Mucivz7up8VBLCjkss7Xo2VC6kNgLvYUPywvMeWQJ8UJ",
  "key22": "3sodndXSx8ZbmHrq2jGuEgqAkGBfEvH9aH1nxCDBrAhkCfYTnU4jMUwQTzX5CpkHUoz1Hf8j4pPyhTRagcvQZWSC",
  "key23": "2GaqFaC5Lf2S9E8oWJkonYVUoMQsRJZWuhvW93BpPxQH62HckPF5EeoRmHp2yLKXmDwFsWeewpfz8G3bge9FFWkd",
  "key24": "2DptswMEtUBd6B5TaB3NziFDvsTV6c3JKxWGMs6vHzW6eSJ4kE63PAbF6GV6Th3dFrAPgwzLNQoFvCpdePhzGHwn",
  "key25": "3BLV9i79yuAEQc7hFqqnaRKsGPy9TXarCxGha1zT6xES4RYSuEipAzg5VXHUo5UrQTsbtKDkzc1sNQbQgDJE7FDG",
  "key26": "3FePwxN4a7DmByXMJxbSauGr8J2CYfn2mt51rB8qSxQ9hK1iNkVFzQQHvCybMY58Tc4i8y3TUPKyzxV6SjBixwAD",
  "key27": "4rWY2eJMZvrr9QFB9nc1UjGYCV5K21uSEQK1TJCLrPxjcJMjp7ziKrzDqZ761JGqH9NgaUbxQ2qftnrXR2jF3tx8",
  "key28": "2DYeaZUSrrdazCBo9zrTJ86qiaRbaCa8maUtkip6qNJf2HyZsmL3FQUv42p9HzyZPfEM1aF9Dcaj3ghG8GTAxfP6",
  "key29": "555WP5MHEq1Hbwr4HFeE2Ufz9Cgmz8GtK74Ypk4RBBVrVK6YJthDud5TqzkVMX5ZAjmjLtNDkbHonkxSiQVoZH1h",
  "key30": "N7xh6Ai2GZaT5MiRG5J7nDojHnLBSTQwpGs3syvt28p7StqyF8XfX2uXv2nap8faTKSTT1PSMyDP44MxBTqs2Wg",
  "key31": "3RNvbceviyu9ugkDJNv7VqEBwvGFkzK4YZwazBLzd8JaKWMA4iRXUD5b3XhwWYMX7ZcPhoPd5FaajuR2tFNLcfVc",
  "key32": "2zb24JyghXgQ1xRiqoZSi6R7BpULcWAGnDng3B7iZ9PsBrMAkPN3WeFyDcpemrRztcTRtwfX9Ybqn2r7YVKWNTsh",
  "key33": "333AnTePuKC12zLEeBhJRVKRAQHVGLxbUSwjcsRwiG9vtwPaawcPnURjhW3gHQrEskT5NTND3qFXAb3XwDHMFBgD"
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
