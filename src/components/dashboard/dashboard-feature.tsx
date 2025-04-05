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
    "4dhsTvS974cG3fiWG9kHFnSCQNN4An5PheqqWwRTKjNtV9K7qSZWWsW55Z1njq3ukzUecStGL8H7Nnzq7ZswyuPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VD66yQrW8K5RTQDcUPNz9bn7FWhn2mCfu7gF3HAY7iuzZbZo8y8uxChqGYWKfUXoskmYouB3cnEjc1EYFi7qkGM",
  "key1": "2zYRJdNMpzWgtPnUEVkL8TGFm7DkKYBXtwr3obcCw3VvWwEfqqukkyyhgCVF6yTRahBYKHQ44VkzJ4yif8iz3zFK",
  "key2": "5c3uLmx5XmW9JhL9ge57ki9ni1eKvUf2V98unvLNxtPvNZBf8viXGzSpW6zep9tB7oXiQjsN85TJ8s1tVNupaFn3",
  "key3": "4QcWaoHfYKkehe7sK8soPRAinGynuDdgH8Fs4f2St6bqEYGWHsad8ixW25Gsux4KUkZqyFs4dSmoSEisABjv4CQS",
  "key4": "2MM7ahcXbQHrPFYA2bQjty7puQmwKQE4vs1nc7pqtkhKWUtzWifPrJ9fRZiM4MVH1eiGuEm2xdhWWasJ973PWXSD",
  "key5": "77nyZgRdBjwffExihAikpkQ6bhaHTJX6f8koK5GwJF7gke1ohdBvJD3SHw1hsjt1CkqUdCiikZKLFpvU65DQq4j",
  "key6": "3FPjxJvENNQUpVdGLwRqJWBC9L3LNDQeQNMJBh2h6xTmovZ3P2p5C6RWpQdWWpUnm9FDX2owTKCvpqXL591FF8tv",
  "key7": "63pFDHsq493fhTgmNGmrEaFpkW81jXEpzF1DTeSXEcNd2qaaTjFzz9zZmsY4E1Rwxfboi5QrKWKyhTp5RPPHZkY7",
  "key8": "2EhiZjpMDgRguSbw7n3Q2Yxy6GdTBX5iTTtk1TKmvL4o3rgL5KvAmmEs2cBPeD7GKkx8Sgug2y937yDii4xgcygd",
  "key9": "5axZK6Q1e3zdD8AKDoQV68CiSsyBNpr5rFmAzk4FWe9kYQ9375cUTtnj6bgfRikFQ64pbtgzN1YHFZsuAfuzKFqd",
  "key10": "5ykChsWZWcCMP3MUoeiSXfHkdWr994fqjMBZiadnhjoBgXeNVcbej6vVVPzi4WbR7HMR6PA2vgkqBWcecE7PyFc",
  "key11": "5jQvtQvjaz4kgWgzub7T5qeXf4zSZGUdYy4zsLnET9VM2Yvm7NpcZPmNFmJ3c8JrAjkXecxcEyfwtLn7tP7dGhFu",
  "key12": "3Nsc6s5arAxnzxjjQQtYNSsNDTsKKmEewtrR55396xfiRUKoHYdrNSsbX4MYNyqDGESLscojeJueNLU8XtB4HPMv",
  "key13": "iWqsDvncmhiYn7bC2bPux6oMg1CePHY3nL9isLQ9pmKBwGhT73i7PXhPKXegaxi7og3kVYYCKHUpezsXeYEmstG",
  "key14": "5hNxY5C7mhh3EVQe9XZDpkhacsd55vdB8ZkSu6gdjg8N48JjaewXC7pww7gW1RR3who6tTQDyE7d6g7f9ehpNZdV",
  "key15": "34B8GQREzC611bwYgEgor5wZ3mkqQxbJhr3vVhqfpqRHyqoGHHHf42mpFVAGYVmgKnE2sSgVuEKDcvM6FLCRYvBJ",
  "key16": "2aBPyFBhWQDGZnWUTzVw43MvxBEbFF76sAQGDP8gCf1ez81WzbpgFXvCCsGhY2perhiLekPYCHpWda3eCexWjfFL",
  "key17": "55ia8wZGXiPVnYwfDmQf9ZemrH89EffoeDAY7qWkpustvQRRszoL5FuLXBS6T8B7qmiNCRDymLmLpdUnKnmnnTee",
  "key18": "LS1TpJkSAaTXcneAyy9XEHW4BPEnd9tfjFdsMJWEatgbsoEM7PKBB27i9xG2dBPu3QYkv4XiKzbTtJbvEsufYBi",
  "key19": "4v1VtEtU6WEfYktzR1cq4cgkezNCd2obpRNqdgerRRjR4LzgqXpnbc5F3pkKyEvmpfjeQavbKYAxnQXUnSWdQndR",
  "key20": "2CmnaoLaU5QyA4Qo6fCwZ85qdPFfWNgg7gkfSMiugRw2zQpigKPvuwH45o6ErYubX1PHyar14Mx8bBgztsP2FAMd",
  "key21": "Dg9X1NuCfMAwmF2pGU8s1jLJFybmRurwdAvQG7qnkNVZB2K4h9Y8V2mZtiZSZjtVPxhZ11RN9iQCo7yfEf2A2PC",
  "key22": "Ht45eiHMiEugGjQwbW1YWRH4YZXTttwSccoaNUJ9EaHKMJ8vsfAJRiEmVVUXhwHj5xakJsGE6W5gd9c1wJCji9U",
  "key23": "4t79WDvU8Znw5ZY8ecyf4kUXrUtrXVKL5R84fcdNuixHypTmfNsStP41BhbAp8L9tFLwsUaNRuk7RwfPkYJx9zm3",
  "key24": "59Le5jXQTPLmp3zU4EMPt65abEiHtwGSPUQYTFc3Wnxfq4KRE6AfFz1tQHAQmWQrm9CLUuDuEmievxXhgwXzvujR",
  "key25": "2vyyUZSDJWp79QKgvWgkF78pRTQxajuuekZZsc9YqYg1fpFhbLGJ4jEHrzXkdJTsJhkRw4VK8M4UNKRXkQn8r4Sx",
  "key26": "hefUXs1mmLMgTmzRPgyMduNcLbHBC5rjZTyq3VoxeGoBuKGnJq3N2SLjkKvHaCWi6C7phJZAA3rfi8GECnsfuun",
  "key27": "3GgXHpiPKHVff3HZKtaJ6UW5Mq9rG9jnka9TFGDS6yS7LCgVrxCcFBBwbYCU9qZTGd9HQG4owXyCrxpoMETenU63",
  "key28": "2mie8yMoBo7Tn4NWercpowULM45s5sxPYAycSpGz5a8AWxtwRt21xrB56Yb9zv94kGVoVMpwowNkuYrGkJiZzZeK",
  "key29": "2zovTuYz47ERNtpcNv6zJu1b9X66q5djMmeVkkcPnd8rDYXvkcgcf1VYyzwk9KcmoMR9v3bHTtnDWn5TNeAkLEur",
  "key30": "2YnC7ihVLxsaceLYFaVUc4pS2D4PHHhDvdX6Ey48NerfwTwUEz7nPSLBhY7Am1hHYoMXPU3ex2Biy99ZzBqbpBsK",
  "key31": "58eBq8hb9FhT9EvqC6tcZ34zauxFmTmDoZv158SmjTNN56GHEcZar58Cgz4ZjnAAwWApFJZ78DDBYiihY7Tmy83U",
  "key32": "3bf4fhmWPxZmizRpmo4U9usfNDSVDkPFbZCYYoXQMn3yFZNnMUjmpg7BmVZjJFcYmHCJihWfmmBsUXvDSkLoiAyX",
  "key33": "HQiCBRvsNVBHDtSbovRY38DF3w8Ut4GwiZzmP8WBZxEeFkXW4tHtyimWLMwUMUHfDdCUCXYpUKVyXJR7yQSCj9F",
  "key34": "3qKmRQSSTZxNZQH52RpTy3kwGPhqZfU65wnjMykmuQF9SEW4Dq6HVk1CZGpKpX92cXepL9hKPMqr7fmo52MrbMa1",
  "key35": "2cZYYvKec1ZC7AWEJzQ8o38QadxkRKCegEUZo6RCP6dmsnvgD9UucgRMa92Es3pS4NvsBNRiqYQkzk4pAJe6m8g4",
  "key36": "33jkjacZBa7s2JHcE1fAFw8ZmrL3VdikG5SnzMW89XVxdaryz5JNjTERk7pC1gXWkchEyKbAVx7XLbye6djaMMx1",
  "key37": "Da32uUJ1eBStq9R5yM96eGXi27YuixcwmeYfzxCEx1EVaxkiUrY1bWyA486ZQM14U1zkmj4ZQHkCnAPotSt2yus",
  "key38": "62nWT14Xux32ny1jzYaCTMmY2rSrjEHaTm9pXdVcUWWUpHaEtpzcF2CgmdALhRdS1CQwvhAqyob1Qm6Tv4LrWyEf",
  "key39": "2A8Ei1FZnTtee1baQsV4Gfi1PeovKn5vN1a14e3z4tkkXA7V7CiW32C3CERbRN4PsqH2Ng9n3GQbWuvKuYBCdmd7",
  "key40": "SmBWYZrvKHFNYnHjwaWck3QnUr4sDtXq4g2YGMKYvobfEdVbxb8cjj5bSzf2fAMPdWg7Eb94yEFykYLSH4QNgbu",
  "key41": "4mF91cryFQs1bjccys6qG4snojnnkh93N9Rs1YhYPQNunvJyw1kdzVaVBJKQAsrARbYDZ24fzYKhwV5m71MeBRTn"
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
