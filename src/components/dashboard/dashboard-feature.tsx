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
    "4krEBdZkLkgtNQTfW3fhQwk7dhQtcBRG7cpz5Q1adsVP3LXwmanX5yVYRsokH73cVgvW2mhpzdBBJc2uzQjGJHDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "689xV37bEiU8dvzTCs6LowPyQWYKgPVHLYJeAxaZbyL3JU821aMbZjeJ8gvGweKtqTfA6QzBjr4FpjjoodttxFb",
  "key1": "4c1YH4Ut7qZKqZfHvLDyxRjzRDNYfQnuYWP2pyvH4tpqAz39UGZcSeBXwhw7Zh6NH2eH59KKzTGmQLMpKNDF71Je",
  "key2": "uYNsBBicBNZ7qzhJRGwrgTyyd21tqEa1YvFu7zuef6x9Bw7PjbxC8WvBcsEkDFzwHKEd6doTNzmH3hVs1r8MuYp",
  "key3": "2RA1UcAcUzJonX4aC161XJBSzZYN56MstFbdhSjGd21VnLmnqNC74Hbi66duD9cDvKEd8ajDcPW8wRgVdHUUZ4gR",
  "key4": "PkPfjAX7eFQipZrKTqe9Nr1dH6Unk1X3AFa4koXnUQenNqcNxs2kjcLywbiHAxAvHCm77aspjH1ATYxKxNwZmRb",
  "key5": "NEnkStnBV69oRXum4EmmV1JSSDujXRUVJRqDfFd3d4ewfBp7DYpup7MUGDWCjckeWMvo56LXhMgHCAUCJnRNsjJ",
  "key6": "2iS2C1UKhQJG1wLREoRXGYzNuok3Jr651uUqdsfVsSeHUNp55kZR8XwYuoAoAFRomfT4EkAf5Ktveb8MPvMm181c",
  "key7": "fJnV5RXTuZRTVx1cMwZtVcqnVBdPpujVCwYmYUpm1GcmFtWgqYSrZECh2EXRCfhrpjZ5VauQT9LmiMnhDYKW6SF",
  "key8": "5H4mxqiAmu1VEmzcg1hymKzGFA3VjP2pJry4dosh3mhnEa7bT2YGUd9YrL3cRMW9WdtW4RMRCStxFFqRdjgRGgDp",
  "key9": "59e2FJ9zm9fiUeiahz4ZcgBv9GKezofsnKSerpkgw4j55hjCsEPuUgEFDnBDnhU7fTqv8B9VWnCcvnrPSLzNuPw",
  "key10": "48M6wXmZjjRr8FheSmSRBP2WQTkNuLLXm5Se7Y7oWLubReyCgEBG9Y7iAWXnoGEK1eR17b8qsb4mQoAcDy62yTCy",
  "key11": "2jFtBQCt9fP9afmTg4hbm2ssvbUWR3Yc7ZDZPcfz9vkbvNHHPimdw3KNgMHiBbJ7ePXAGT9uVxaYHGwK4Y9N4r9k",
  "key12": "57vBxNuPnLitoLoKU58FKmNAvnDrqx3XFM66KMdJjEsmavjJoC6SpWAoCpKQYN7pAFYkjFJcRDmjCJd5PrUi671K",
  "key13": "3MaiBQyqvo9nr3FLzADobztvSXLtXbWutT4fPVP9Mw6xLSdwT8bePKmK3H8Fkz58nZVmHLyynqhkrfAadk2oeB42",
  "key14": "54zVGXXhVttHjX1EQKRHLjdhgH66DNtYoLNekRn2J6AtgP9hU7cvKKgwYW3KDWo35mto9qPpWLnFHqS2dhF5p2qN",
  "key15": "5Jnkyg11GD1fnaP5qgqp8ki7xKtd3pWCj2DPrcHJnZtRv5vTxJpr137SuRdyD2WjeTm4oMXkL3uKpKu9bkKYmtsn",
  "key16": "35k3J3pCbTz6BbVUz3PpcsNcwGJP8VTJAfwiM5nHMwJ57DSoNXfuxBm4NDeRskUJTqeeDZYteY33pSQCTDQAa1Dk",
  "key17": "MTooq8oqphRAkioSgscVQANhBma5aD4rejJKZSbntYFye31deGv7tDeoigWyWAFFahe7PuMWprYRnyMHzctBgNa",
  "key18": "3JDL2bTzkPYZajTkAgxZgvLpUN3PMfszTfj3DhGduqPN4J7T6CoPthvKvPADi7jGwtCVW5Ny3BgzYkaE8ccd4nnr",
  "key19": "2ttAsDJ1STNWUtyfu2xxQsWpdW7YadyDXvFkp99gpxcrJDiWgiUBs4XeKvxvKG1Zb6cCy1f6CMxPcohJmNPSYCrv",
  "key20": "2E7nRXLWNvvfAsVKYfs8pxx1BRXkJ98xesPSyAh1NVvDbrEJ1N678TAYsrHgiWG1KpkZpy6U8QMSSAm6KugrxnmM",
  "key21": "3iouNHxpb73bqtBPZJSSGVfcNpfAY3TTb6jyG9eSUS992f8BpUJp9B2b1DW7nBqfedBrFSMe2rrsvBnYKaMBZCTK",
  "key22": "2Nd5SdbHZPNaJeUvcnwgLwA4KnJVKAaEzQ4LAiEctgHCuNJfrWpebvkiCABFUbEsidzAzGga3AX8hmW7tBGE3kGV",
  "key23": "61HWz1mgqz37wTa83JVC8g2dycLHj8CFiusVJRpAHx1oCqrPGMVxYTBvjVJSKetTjo5Z8ZmFRtH4G6XTiCTTGVo7",
  "key24": "2qDABQdEoVumruEJakJBZpsqDr7oqaZYMPr4VR2X6fTxHEfjkYLaBmNpaoByyMb7Y5Vb3GZKjUxwKyjTF51HUu7K",
  "key25": "tjFotZCnvaHQQ55TScy1vBe5phtdrvztRgpXj3U6CzXi8eugKmBKZ7ZagKeo3EdS59S3FmNVLjm5HP4GAd5nFtP",
  "key26": "3nCCAGnXNrUcgDU57Ywp79TUfX3fYUvaXFeyWDBGWEcmzFppSbcSHPDWQ5AYuYPeEC4oGk6PsQcm2VpDq8SRjKTj",
  "key27": "4RehMg6eE71y1deB15mBknKFdy1LVuZnBcyp4mXWSgFek2Xo3S53zRTEDhvivpqF4SUCkqVqRhoYUMpfubUJsxSu",
  "key28": "4A6RaEep4z4nrfFcEdc4jCknNpygDCSwKfXYVYrtHsbXMHr7EoCuA4Nib9RkDe2wjWcM6D9gfChW4vYJigyzBx4S",
  "key29": "4mLLetaoH78VzX5cS3Xxi1YHzVCcRKrT4ioLBd8jxEaumY6VV6poEMkF7ZfrKiBwJu6bpfYt1dgteuXKcv3xUSNz",
  "key30": "95ax8mpvHapeFRr3wY995jyEvWXh8ycPVBUsyUrFNHJgBSojQcqjbYsDnE3UiTzEP17nUm3Kg1wFfHcyS5EvjX6",
  "key31": "5PMNkLDPEdzxc8Lcicgb7W6bR2aHra4qrn4CUKYkrbeZCmi58L79YA6BRd5nZsxvZTkyesVPoRmtBAxYcjNAPvmC",
  "key32": "4fQQM4FKtQzKBCvsNTC719dDfvnDXuhvWTpP5Mya24uU5WVn6ZQJ3hknVuxUFqnRSMQUvVH1HKdKo7QcYJBCh1iF",
  "key33": "3kYiKY7pLrr3QJg44gUm1QibUjf3n3xXiy1WA857WD6bAPDx9PkywBZjizbKEzWhckR9VTWqDxiyUcjjA9DzNb2e",
  "key34": "4nRtXWnmQkts3MMbipM2tGToKCRavEVXdakGPxQz4eoZrsvmWWdzxJc5DRsbXwRftxuWtDERcmLfspnmfYfJZqG5",
  "key35": "65q3zCxdW3v3G1Fft9rumaHzXTLdahx5mTBoEZLprGnQAFgScRZGEMw6pjhgLeiWqxR8z79n853faSwxfXQ6mrSL",
  "key36": "FzATFjPcXhGb7dsbgZhfxXqnh649FvDacZYZWG4M1Mtfjoo7wfUKeLpMxaS8J7MuTtTiWmzBFX58RGBmvpWcYiC",
  "key37": "3zwS9pCfty8JNpsoMKAb45No6wqwoZXTU86v1uP9DYvr36y3qvBUJsPtXKAEE27DXaENVwfmSKCwY7eENs1DhcyX",
  "key38": "5pXNZAHJg8whbu8GRFKJe8vRBuE2egpXRVT3Dk2jTQkk1qubCVzSrfF2qMXjP4puufy7q5hUL9ZWYAWCvGbEYEYS",
  "key39": "4Q51nLyvDa1k4xAjbB7eV2Y7vyvh73CwHsLnZgPA519DNAxfzDnT8fw3peHSqwqBGneTVyMK5oSSxwGkKkWmY6Qs",
  "key40": "4em7zmuZHLfuhYWxYeh4U2VfiokLjWEoB172Qc6X6wAB4GoJoyQquWNTYAzV6PXbz6nr59GLxD23Xq7MzbnSEUVP",
  "key41": "5PR7fK8QNf6exDzCmzB8nFDP2p2jUNk4FK4kQEdyfe7df6fzNsqRKuZ2ynZ3KDs7ynZapzJjqRyMRqEquUPh1YU1",
  "key42": "ETtdAFVy9WP3rnraGUfucDjn3Tvm47UjBDdV57xZk3ecVggo3VCaaU6QXnKuwdzKstLj7KmrfWSZjuqqhJp6kRP",
  "key43": "5JaybinBy1AHzGom4tt6WJ2gpaVRCpeCPRomei7UafNq68qpJVmgZaE1dVpjXW6M2435qWj3b3V3MJRY9CPxjGN4",
  "key44": "5uyk2smuP5kkLwg2cpcQF9HgsFhebhfWZVfFiofWL1mCMVKFGUYbPxcuaU2iUVq6DzfhnRDD3WZvUfb2NkRsQgZ6",
  "key45": "3kbQApz8hFxG9HsKAqT19JNhPKdf4yBHhUk34ZgnyZhttH8hN8NJrG9ZwcFNFDgQrKYLnMa7tbzuR9QEeDb5mGBL"
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
