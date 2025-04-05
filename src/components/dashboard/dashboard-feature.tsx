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
    "2AFZqxDBZSwEfWM4XYruqr1bZVbg7CmKzvfCkxiKksRKy3Dm6r9kATunkdGmircZU8Ba5s4P9RwfuK7GLsKYDZA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2udnvuoZBzjqVsERDfzhfYJ9PSWH4v4n2LKQJ5RDWgTYQCeEkcosq2D3c9o8nsdKCvFYSJFs1dnnuF59C22UJsaS",
  "key1": "p968bgdCrmEHPd1Ftj5TRYJac64ZWY2tLmZ4PjrDTZdiKyV5J8rqgfb8ea6SbF6ubE8F4unCWGRB2xYnnRCQ3UP",
  "key2": "9WPYWMo27sJznRJDayBgu2uEC3Hwo8SN1rhRdigvhrh52oXAk3eTXTnVFkfP2o4DEEVi3yAyzs6GYjozPPuw8ad",
  "key3": "FzjSx1qNeHV5pZNUjXQo9fghqDREhf6WrT7A1aPWsfPUEysALCSYqJ8D8sb1wth5YNnC22cAJEFdXsWJJ5Y6fqf",
  "key4": "2Ukimp1bGbVtTq2xZ6Ys7mm6HRU5yXGxuFEEe62zz9gPRezNmdYMbmCyL51oMX8bi8pbC78AEyWxHYtJG6N2XHCQ",
  "key5": "4XhjUsNapqx5DLLxVNxufoQ4GtML7Qn5gqnEXKJ5hvQqRG1kCrAjUD6KAU8frd9p5LL63ZCDiXFxJafyjgmPKirs",
  "key6": "5vuWeo4tQ3oUzPjuMn64X8HPLdRHe8RUyqFZaAo1uUxJYzhU9qoRNiNqrjTFmhNqu3UqRkkDYTG3EcVaW8JRq8bS",
  "key7": "4notw2JtPfeQwfQX5S51hC7wckKEjAqddh35veeTBMpisS5AomFhYnaEu5nyJSF7iT1J2dDNZbJheVRCCUbGBFoM",
  "key8": "5JkCCevC5MnFEJSQ8Q7dtcbkqEAXzzSL9KZGYTUqb6Lw1iDsoAt9gQUMJh2Jm6WAbqWXLeTwqMaGhgpttR2dMpyb",
  "key9": "2X5r6FZ6p5sCaLX2zHNpNqq1Kfnb42mZkqRpbRuKy7LEnDkR6e8a543MDpjV7RBYqNHYt7L7SumpyGo29Y8v7GWS",
  "key10": "3FVUMYjG4pnC1ikdH3AhxoKoxuxHfu7poPqZzuFeZR55RRLG3ipgAPtnAYv8Msx6xtoEzny5KfCRyqCK6FLewA8g",
  "key11": "5pisCLrDJMFZ8VWx3fH2o77p9rVReaMvMr5aaHhT2JyX5dpsWRq8j5ef1oK4EmYDpAmLEJaCg22crFaX6jWhU5PX",
  "key12": "3i1As7zqUZWkyNANSq5YPGNYyoiWWgXBBPMmhApSxBTGDkCHmJt23XnrJ8EN9zpQUZpqP2E2b2PNySTzYRp8BGTU",
  "key13": "39t9GznMiDMyBNn1fiTSoJBPKaguotSj8DJk23eDeqBs8sTMMVHCKEznivv5tzjrcwsxgPMMV9rHbQgjujsYJB4s",
  "key14": "2EZrj2SVz4snFxediXGs3BV1aW3RJpLhMqcLxd3aa8isnXUA3s2XF4pyCP5GuDZjn4RHzaQKUQ1RGFddHRePdUrt",
  "key15": "4PSRsFvQPnkEyBBvcG3STfas7wMbWb6EtKc9WedTadxQyrJVojPGqQoWN4GkA36ybNtvz5r555zodrovc9YCfbTs",
  "key16": "YLVFiGgCshSs9UzGvBUs5mCdMcDwGqK5FTDciXtQShXxw3hYgsdL1j4yERGHdxkb1TnnAE5yCDQ8bbbKHXae5ZH",
  "key17": "3UMeJBstoh899JcvvAt3uxRGNxKmrXzYCNxr9rzs7yeoZ6oeb5ZKKk1vp9nQxh8THt7zQZKnTipcAwgdeqBigbF6",
  "key18": "4CipXwW7gj3ARAhvUtFxtfmfZvqRGuJwhwqTHVtLNvnwxusjmwtFzW8WMm12VLPFRiwMC3nx8HQVzjc1juXvWdgD",
  "key19": "48aNoZHwccEBae3B8AedNN9TByWgpLXYQEAkpsvq7G93shV9xAwLePWFsrQJKkrygUJd7Bv5NZzkAUC8tmCoTjsK",
  "key20": "2MM4E9GAUPiy3WN57Lv3ibpAgAPMRvFK78eVEiTKifK9Va78g5z9EH2B1m4sbMfqb6JB9D4KRyzQgGiqT7d8q1sX",
  "key21": "CLvHZjYEh9ZdRuMzQH5F21AEhQmgtKkm5M6QHMdG8on84aECB6BmJRNbLj1bzgLytVGPAMwSDjcJJYdMs2KifMb",
  "key22": "GQs8d3FTBeFqcGLZoJJuZy6bB8KirTs6jToRcjxJuPX7VoCfeEmjUoZoU6zKE2vMtmdtB9GvGmPSPuvEFtzxLPn",
  "key23": "2jTeuXQVMNLThaPYoAjVNb5RjT6QMKkNHb5mgmA6qyzw8reJthyBzEfTcP3wmHeq7nebbMNSopmDHDY1R9mZZkPG",
  "key24": "28EBYwPcijrw8uyDj2nfwuncsyLYTE8G5deAshQpoyr1Nfc4M4iXGzFw3dSAWoeEr4WHwvqQbhbckNBtrQwFqVkV",
  "key25": "2r1bTpcy2dBbrv4wR2gfkMsmBRAoyh8Ck3Wk7uVWXwyj1THXfaQiWdaDqJvNhuENt83Kz9s49rQLYSorkkxGMXnF",
  "key26": "62LNBs7C2Wm5swCXtL3VbejbKx2gSfqKZNeuYU2DGpKGJGEu6iokXp8GuRKYCDfbAWxsdXgryoRHGp3Fu6iQU8zM",
  "key27": "YFNSxcXWcDS5GoZMpF1kd8QATBsNVh3gWqwoY6TdGGnNznyYGdkGb1LdaTodTUSsPpUmE5UdpmpFcykG9wTbKsE",
  "key28": "3TAcWd1vsDRKPJL9oMT5NZT37BNpz6CmZsGBrxNwvQTY1fLDXbi3Qs8wbfu1GoszWq4ZG6kQtmtWoUXqPJPpyzse",
  "key29": "Y2PtHQGeB5XGR2DEFRzV62pjKEqc3sbkmksrcihZ9JooWBUcoE9LErDca7xoy7pj4SH3tgvXBWmn33eG2ZWEwGX",
  "key30": "S9mvxWvzgLje2MNj2tnqd419HfebJEsE4xRp6wKvX9818WNXn7RzTJQXuLKqnUw1vzHPudarrm5VYFbP4AKhGjT",
  "key31": "H72XVsm3BvMCYv6VjJjyAVZ6X5z43nzmsomxay2ceTP5MBhHWMXZi4sCBB66K6zC59AuQdsqoDuNQaYyTh4B25q",
  "key32": "2jq9nErG6y7H4nL4aUgeJ5WNyxzAYU7vY9kPDvcQjM8sxfoJELco36sBQt5fHnrVUe9vc3qyaiZJ3uimCSHQk5qu",
  "key33": "w4kDd67KE73obYFDVuvhpry44x7HQog5ujxeKXNgft1oASGCNYUQrHvaSmbo3BDPpgcSWGD7cpK257Qp4jwwKJK",
  "key34": "2tnvF1odoNtfguqsxhXy3n2vrr4G1NRgxKgc4ZT1yg4sScwuxRrnJRNDiwzHGSYDAgVNMWDq7wJdfQiXdX9PubWS",
  "key35": "32E3cy7JZvBxzKjDEptAfRkCkDju9vALGTNTDXEfDPTbTwCa5gX4SBM4noZGMV4WEH5D6abG7roGpHvUo5nqeLaz",
  "key36": "5LzJLtMRUfj5cj8p91CP5K7raZAE2D7RxWCn1HB1QQ9qNobsRowF4ctZoa27TjcDKasaDug4SfnMi2uAEcAiN1ZD",
  "key37": "5jENQJh37KEkEgBji2a5UZo3qTjeCPovk5NvtJAmUGNThKtaKkM3ChuYNZ5kwmB6vx1nSXG2FdV7H7zx1tKSDPEE",
  "key38": "3D4ZNkfB9svqHBTqZSf7QKPHYfYXRfnsi7zgP4so153vXHZASAqQPkmyMD296QYdPNBNnyWTE8BFjA9vNAaQ9GKA",
  "key39": "iDfHLooKbqbdMrwrtQtfSpgA2BkiyRToboFcexK4dWYJr74wwJhig7bDi6hrCHSKFvmRQLhezmfW8mCjF3zUSfB",
  "key40": "55ZSoL4yUERbNsC2z4tMPz8Xpa1YmPzxPsLa7GuH9VV46QxTwhZd9P9wz96Y9c8hQeyQiBeckRjGpbdDgH7frSK3",
  "key41": "5juddDKUGadRX9FNGW1ibYeudasPbgicEULNfmy3MTpvBpYpgV6yoMMFk8NQdKRB8avopTnieej1HdhFSSfBLswH",
  "key42": "qUxHr2WdtReu29dYfMNa7E2QP5eBxtB2AqH7csnChBVAFjyzoRdXtovBJR3171rYbhu94r7DBUdbG8LHjnYUyXH",
  "key43": "2G818zimJk5HUZTCU8EQMMqzpCSn24i3tchbcjE1zrK1HwRHpxmEuYysoTd7rkJ1LSPHLV6EDCJEPi2bFrLAUAe1",
  "key44": "rQjvgjPksPUvMA6UZaCkvPzdKkmVWunHx9E2FvaRzcWj8ksuduFJi5wCpid9ypR5X1MGV5RzTidFpAvCiPpkwqR",
  "key45": "4gLTivWU2giEze1KS8uvpWQTmAPnxTWEt3eaTiG2eVyHm15CPTVSCZVBGtaF2pYR9LJCmRU8YRDWvwBSUS9qzvrY"
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
