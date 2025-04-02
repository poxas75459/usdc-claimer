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
    "6wK4w5BbQxwcfzytbGaws53m2qThYbsMKdeqi8R3NYzBBHLaKr9rtCGG6k4PFmkNGYHMBxWJ4uyYtikKXHMmbZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mr2CT4sWsBXx2NnxWmDa4os61bjPHhUgjAdWKWEA4PVeRT7paGfPEakDa5SRhNSVdeCkfQR9si1nLcBcocMMAjn",
  "key1": "3UZGsaCrG78xHowVBKAJrTULRVK5pJZ1QGj1FjpoAjjF7B6reTgn9Nju1XtxJcDvXNKtJBHAB5wRCedzjUA1mnMV",
  "key2": "2oEzvBRwEAcirKVFzsg9TDLypf5WaoaDagN6XWgTy4Ay5uAH6hcYsvoJPWcDXnivPKq4Ukjk3EuizrQYyfsRXG9k",
  "key3": "5pBGmh4ZYYBLBRRZof6JExp6eCK21rCpWcQfVfDgtqGxVzdNph3nhN8YX1Q7yWGUT9pLJQNgv13YkJ5wRby9Yeq7",
  "key4": "VDSAC3uhmgxtudmhG3AqDKqiNX9x3cSCCUtF4v1iBEPELLzvpQ6z1vKQpTKEGkMnMHBuXSF7NviV8zHZgwtC2UA",
  "key5": "1XESJeg7YsbuVG5drU1oYLUbRu2jNpgfLaYvuBpWqQ3URp8cKt78utPtHUgeBGtPi1SDwB4JFiVau1oTUPDiAE4",
  "key6": "eD9F4JEtvFec4cavGh8HSe3Qqux97PdaMfLKKLkq2XhdJ9xw2R35DdR7FxBNVKFhEMkubysNXzKvNwpaQbEd7ZW",
  "key7": "sw62kT2f9ac6st5hqtmma1bdGUZXHNYEXMdZTV6Zfqa4xqWjSpofhpyrBr6iMsZyrWon6MNMxonsBEJkwAeWLdc",
  "key8": "5t6G8XfNVqp2HDJY3bMCHkUX9TmRqku3Dy8nsqrEoPhrd448jNTTU6RLAua3PSCt2EwSvYJsnqpvEjMEh2yXE9L6",
  "key9": "4g7ggJNgxbG5s5qPJAtP9uUD6ciYMJomnaxV7sJEXnCEfbTEu4Enp8UBmzN5fRV7vEpPAQjhwxaC6i9daz1nssJU",
  "key10": "5GSg3qYdUJae2AVMxMm9svTHZPYsc494jFG97sc6TSYchndQEypeGBE85HRKgKSVLcUigkM4zaohV9ncAeQ51q2z",
  "key11": "5A5R228i3bWzpWaAvLDRZsxwLcpu7KsAR8oteMqiK1miiNRAk383EGBjpxiW3Q1NARfGfkE9bko2qXbvGxfR9ZdB",
  "key12": "396pR3w5puVjp51py2F2rBZ4EwpWzUSN1wHRw1xpsiFd2zX9hx5bwojPAMwR2Ynypw6pigUtN1LLPcQF8r3fR5tD",
  "key13": "25EM8RQP4JXZEbiNXHufgruMx47areJSFbaEBcEe6GdiQ26Ji8vW7dzSVzbyTqxxbkSneDYsDnLBRezkDuSKFofv",
  "key14": "3Q4Tz4qAceWJgodwTRSCfU7FygnFSU1FqaTJrTC1ZDXeWYWyT3SZpzPCscG8zRnC1GzDmqjQDutRSJVS1cANMoPV",
  "key15": "51jwX4S542thoKEPnovtXdo5d8pJjqSzPDXH8TG6HcUU6ixEvqPEHtRzNMSFTjZbp8bafGbXTREu5vnLM8koGVXr",
  "key16": "4q2bFmkexN9WkmjoQqz5F76cK5wf5Vd8sP2Lp2XKgYtLNgBUTfiJmLFRzVSY86SarM33TDXPykbaHucWCayaLRXv",
  "key17": "5srstDkZQJk71VnydYqpqVRWA8Umuak64Rg5xaTnF8YrrvsuD55799r8p1A2zu52U6icWtHoA89to6pD7nyh3dgR",
  "key18": "44Uiii7EZbqpiBnoxnro3bd7A92UK3eucjf9j5bacEBB3wmzvnEYiizMEG5TKsLYotWgThTVt56brRUPExqhRMqq",
  "key19": "5DXSBBU9XVGoSWVDUMrxv2QrB6eiicuhdM4ys1PmCyF9H3duUoNTJBYDYKYHUzsr4zB45Gpc2xmKTkA75WApXPD7",
  "key20": "2cQx58K3zN6LQUhKBr8TaMUjde4QHMmYsqWJjSzRuVc3jCuXt1hMPReAaJ7ctj4DwEpY7JEH5PDzgXmLydL3k1wv",
  "key21": "64VN37S7r3SPjtDLfGyUo8z3zrZubaong2heTN24y9fMaFXDUBbeTMJ9wPSs48QWcMpNMnzG8JAvnDwFrgAj1eHX",
  "key22": "43nzrjMLt4RC6z8VqWSaYm9hutRmc7pe3bWAg5MVHvsvJGYt1RktgSiyWY7SPQGg2btsEgX7XsjUJSw4zCC2x2CM",
  "key23": "5hZwkvdnfLXq3TYoxWZHmhqrpbeJ1wwSLxzNT2ktwPRRznavUJsJ22qnrF8xMicTVrxBgf2bwkiVtu1Jp9zBNMyt",
  "key24": "3fsGhCTQRXKBX5nLNfu43LoodabkDRyt6fZwpd44e2VjxZYHuNXK7TtyBvgCbECd2i4pWg7eQr6HK4aJpMpXAAqt",
  "key25": "2SAAkCKvxXkxqh7CgA7Qub8nGr69LDhbc5vvC6vbLZRUdsvxXcjBWPriEGPXNBdEG7XEctSyW9cRwBiv1Eiu7EKC",
  "key26": "51ekd3YB3JaottdQjUjJm4iD6v875LwTwkdHMTiEW2owVdTH45QnCPMqgo5pqspYW8ZKq5vGcDB5SH9pSmYm2YiQ",
  "key27": "3akPGTvxH1gbaQZrMNpgWXMUCXsvAZ6u9QVF5rgiHsTipZkkCB2fYvcbD8Z2VKShMV2tNLYDbLDRADRW5QaWRMnU",
  "key28": "5nkT9SvMeEW1eJKWcdPwkwvruGUciWVYA3smxqxossS9CsbVPJBNnqF2VZ7kNaikAqAzA3g6QyVVbFd2gWik5T6e",
  "key29": "BzEeUrc6hVC7BYsp8reKZoQQZru6AMW6bfMQcLSnfCoBc1pJ6RqYQ6hojiKcFGs767GxegmdPxmkujTE1LqfyEi",
  "key30": "3mcXM6UWsqHCpn2ZJex8k4Qjx7pq49gPt5aqVDgJgUs78nn7MgE1guhZqrmtmD8oHw6gKK4sRAfSPRBPCou1CAyy",
  "key31": "3Sa9deU3SEGvuFsPABXoVdbLT5qBSJWMQekYcx7JwNSfqSSerbx8eoC7omLzPzrCjpdQAv3kDdA9vuxwHFNimza9",
  "key32": "5VQWMUZ6y9mRabDM6BvqCLAKaqFrmcXLyDctWnTupiDm85fDrn8XADq6F3XVx3by4nt6Y7XthKpVoddYi23zPzc",
  "key33": "pQKLe9PPMH4YdLpMRNo5H7dxoeJMEXHWBATHtizwqGcZ5fu6pewDADif2NhjxetCzAgMSr3X9wefNpX5e94U5mt",
  "key34": "2Y5LMPiEP8Hn5FxZopRpW99tjCB4t7LpUG8nk94abnWA37LBiXrE2wgcFynXPss5bLu26gCZnQ7mifMNbKYwpkZj",
  "key35": "3oxhvyjwEMLFEP9bkSLJkXSa1AiVFWaGsUaB5NDEMYDK7RUSRRSEArdnq3N3WXgZFvqGnayQuaMVPQxyo9yPM2ba",
  "key36": "4TZk3zudSSUBxv3nCuNGUyMW3jPY26rrBkwo6Qi6FPt1e8f1Zd8cMK6djRoih1feVDcR2kvmb2zKRk8QtdgzRS7d",
  "key37": "4hZoPBTQHsWPKbZrQZBd9XdoxRscJwL33tAPviQQ1KLwpoWwsB2PTQzRXpmtiP5ppXoAZkmqY6jDrNr7iSAUiGQQ",
  "key38": "3v15PX69qes12MNZxiNd5E5My1AmEqGuSiJdfvJgGbHd5Vqa9F8yu85nCiC1a3Yt3QqpcDDJPcNajqN7FXqNeG2S",
  "key39": "P2aFhawQQGb9Q4io6PCcz3zp8JfAgPABYmcFWXpfky1QyTWpTtnxkqymQz5fD6EKnDRbvBYow2yebfyRVtCvNb3",
  "key40": "4a4J4FmrKRmPKY9vps3tkR6tPo8nQhg2bmDqwthbBXvAMKBwmUgr8i3fdyA6qRjwR63rUxv4ZYbuo4eCJMdZ5fC7",
  "key41": "37Er2rjmZnwHJbAQAsS6ey7YFqsZAEBL6nnRjH5hK8JE5VciZ7p8AoUhc8VavEZzXkErsqrKADHvd1cQX8HRP6yn"
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
