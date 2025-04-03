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
    "4RqnZVPoMRinwQMsZaC3SwEfC383PnGKSfS69td8SWYW1Ai4RR5ZYNAq3B1HES3dMNMQJVADeCDGKnBQ3avPAxKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31w9vKGxmwvGPUdXV7zK99SQvJ9evB4emZMEYbVfVzRFxJVoyHpP33YHYNZQvbswL1JnhSshyKvLGbCJZeeviReZ",
  "key1": "2A3kM7fcXRUnjYdUMFPgjFzjBcKqFr4VTfd62BtAcjMtTkXttrepo5qGBMNhBuMd5kkBEqqYLX7bUZ8RExVbKUgn",
  "key2": "UBSvHCmBsUSuVBpvMT6YWUG6wcjzV8uGV7bxmWTWcyxJJj6yRm8TkrBvvnytpCZ7qT6KUBEz1eYrKgk6SxmxKiu",
  "key3": "3CtmLQSKPSfNzp5SC3EXhCiLJYXmAmaFNUesMMi5eLNyfyotSrDezhykW4itXWi7D5E7AKxuCRRpAnLtGUFMCvKz",
  "key4": "3apnn661AECqPyJYdteRa7fP34JstzdEgJLeCoeVa7uRecXzVcjYr3XQW34RRX4caJKJ9BcSiLW349kj2fFAjpwR",
  "key5": "5A86YiZXaAaUYEWtviWT8uiZogo8behkXPj6FGcG9XCi1hz7w9jSrX4QfWEkxiWDA62vLK9fgtbTKcrNHX6UdtFZ",
  "key6": "4DyoojPaMn5dkJhxYRCewRCbQsbrDehzA4nU6XqRYrZQn6P7xJNU5mpetFQLFsFSSL1NRDibMDwmEsq4KtRKnaEx",
  "key7": "656niLPQMyFkx88jDJ69m3gUQvCKDjLdrSS9S7hfNRMci33U1gbcqAwCAqa6KPmEsfZQSWSmemYvSUP8rFgrYT9R",
  "key8": "4xQyxo64hXswZafJdELd5ygbE6KJP4Hmy4JJLfaoM3aU68WN6bej2W3TevKEjUWx3TTirKEuB8mvjta3b2tiMBzt",
  "key9": "5iBobbcVJt9Nkdb99pSHx1fUyeYMMuU4TBpycxL9fEfNjwNKuz7DimRkV2mciGEqRe4hyZBpanqo8WkLMTVpPSas",
  "key10": "2UqrFtAn4MPwzwBhWwPwM52uHXQ6JFbpiNnyz4cqzRZbMNSSM8k3H336DLmiBiY8aqThng2zeFH7QwjrNm9E2S4o",
  "key11": "261biFbrYBpQXBHj4dxDc3QCUBzEE6yeaQVdYd6wZuE4nXAMng4s68mJEAwZqs5va9XJRF7FBVs9uaDrw8NBukZb",
  "key12": "5Z4UAYN6RgNcCCpmK13Laz8ogKadRZ9P3N8g6zK2NpWmydLpLT5GbbArJxq7nauMwMKSwp6vumy4NfnYuRGjb1of",
  "key13": "4jvubCPiojcuefp2hpokoNaG6KDZeSpXzGhX49UpVg9cGcUh73HfpjSZG7wYW8MwDgEd5Vimpd6QVomCDhQqKCjM",
  "key14": "ySDUjSd88L1r6F94S96dKNyuz6JnKVEp83wmsu6uCNeDU2jztudroj3muWkV7YBzu4uxD9nxTtfSPHDcMbvEkof",
  "key15": "5q7si4MnAzhtatfoiVvWmN9DEKW1hB3VafXew8yHULoJKWs8KqQY4oC7nCPfCk8JEq6UEiTodxUN4oDQr46o5PMn",
  "key16": "3GH9jW6RFfjuV8iGWWfQpsTvjVFKsr2ZMz9u3Hy8HzkdGpEmLCWiHmPewecY6rP5pzr5LzkQhCb3UAZTrCeAjH6k",
  "key17": "3SE8CgAmjmDVdxPPn9Dku7BbBktPi79EuzGXyARWq6SEm9cFuQnizj8TtgnaXxXqq9wpBYJBgPLsfSZkZjj1vdyk",
  "key18": "2e85s5oLRLx7CyBy92ZQBQ7iU4zWTEKrC2xAEHas87SzMWVHUjdaqop1BxaYpryJpEQErc4Lbc4hXcGpsXsWLavX",
  "key19": "4Mg5nEiWsbgRG7jCKVQKzbGN8KM1xdTXkKLbpB3WQmf7tM2Q1u98QLheZjZpoFYynhkjQ33gSyRZ9ZTVpbtYcM7U",
  "key20": "RfpjhFcAQc6UyFW8cTorFYDTHS43aShfwAnWpMTa9eLhLW72k9n4SD8bpUP9JcBWL4gbU5wVTU8ndDV8WsFnEon",
  "key21": "2SEqDTLepZydhLUdbdFPyssvwayJeFz28fiKQgLqtgWwMvgasBQ1Rh5JpXLv5Qw5Yz7kUVy8QHkrYmnLeA4atP8p",
  "key22": "kGVU8Kw17gz2Lzfqzbq2xAAtCEDw3ehKpJQVivTwQLMtJ1g21A645HM9KTh9d5khwX4RW6SCtwLCq9XRBmeV7EN",
  "key23": "4BhLFVbFAhd1zKaCtr4skzt2CBC8ADK5ZvPCVtiseCTTJPL8M1XaaHJHhDHUhpcbHqtJS2SgCtuC44NvAvdJVSQ9",
  "key24": "McF8cGVxCUGBLWWZQ6Zm3rtdMoGdVwbuuhoCXkLV6NkjkVfXdZbVvxm1K2aRGrhXgBt3MBYsxjXuyctDG35Ansx",
  "key25": "44B6cVucWJREBPsuHu6fPpdaehaW8DyNXRcmZQgTxQTPC4HY3T3pv2kyKq7Dsh9sJjoZGCndQqkCfRXrHJhVawNe",
  "key26": "2CUUgBzZwnUL9jknyNbjQt6V5eqXG87Ttj9BwDQeC1dZoU2vsgCNpFPKkW782c28mzgSg3CBLLZeuweEJxQngDGL",
  "key27": "2JYvomMNCHKUkP7RabYp7Ptgc4KufyA8NEpDxPmgvkJnd9f3yX7EjPUZgdhSjdUEPPKF63uFNx5dxoRWSrPQudDU",
  "key28": "oZCQSijfJQsxmKQb8f2222b8sNpkfUDUUcwsb4A3HFPZvKKhd8PLa2NnnQN29MDUzZEaZsydhmmnU4tm7vnGqaX",
  "key29": "ZqKRTZ9qmb83CPnEoEV8Py7tV2mgKcB3JS3YHNKwt1EihoM54SeZ5xMCd3XPxrj2onrtdiC2DTusY8fHYoEqTik",
  "key30": "66hfecLLycShruqKG6iYDVm4r3zJPRMUNC5nY1CHLcrZAbDpMMfXpu5me76v98ndmmN9nUQNaFCznBfY3xjmMYmB",
  "key31": "FWkV3fjduyuBh7QGmbScYrDkQjiwNzi4c7DCurqXZ2Ug8EUGDEbUfEE72bmhML3MG9WJ64dkYJz371TwthZBryM",
  "key32": "52gnequLkoRaqZ7DPNk51T49aMSLgnBgzGc7vm51yspaJgY2fK8jHxxaj1nAvDoZ3xZiSXb7E9x11gbHaAYGSMeg",
  "key33": "BiXs4AQKBMr5yycpxKLsysr1AK2vVzPRRPwmASpqsSX6SBeUPtpFnYQQGY9RgFDfVDrQSdd3J6sK9vioh1As46u",
  "key34": "52ASkjFK74SefZszWN2zZxTYvmzMo6uor5Xj9ZJLsomxG7rAoaWnEpSSA6EYuHKdUHm3arQkKgcHnVbMLA28HhPg",
  "key35": "2HCVisQDU34u2cfTQ6YSZZsDwrmNcJkXVF5i1Ush6WrhB5sDhL43DjYCK3tHv8HiCdRtSBwkfguiEjYMZY3S7Dx6",
  "key36": "5cXNDykyg7BSq9s6PcQSsZ5EiAJxF7rRjyB7MNACFA5tHBsX6MXQszoJYRQM6EMXsFBLaYg8VNtbcf6NoM3bZ737",
  "key37": "5ycMFNxTSsx5EKY9V2wrbrbGNyAwE9hsuSYxbVwFb916hrZeDtAcMTt8BtX8aaPFzD7yUprH7L4vowa8cgEjvp2d"
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
