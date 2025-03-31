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
    "5z9m9pTAocUt15RXtNotarNGzcUq9hpnEiATd7P2rPxJiZAijHWeCmF7pN2snerZDJHd8UdXWwcVgA6rydP4BRRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ayZg1uK6JZ2Zto1ooN52D5KoZjbHpH3hDFpyPCNrFh9KE6MPjBe23fQmRFw5BZ2XCshWVD5XpjeX9MjaRtfgUc1",
  "key1": "3zgaFjbVzPp3xLwranLUTaTgEC4Q2mzYsfkifeDXhDHD7FsjhV9jmafPkisYhTP7X5VRWiamj8pJSmMVCcymsScw",
  "key2": "4kUnciZ4A3h71rzZokMVQLgrf5tRFnKLQADLCXoixhqa1dH9fvMt6LbFpkh6gyE3WgDoVyQ4cHWQzsFAq4SaGbjx",
  "key3": "4FfqfjFtyN8q2CT8qWhbxgNWxf4TQnhoYiohegLjRDBdPi7oEyZvWQRByUH57XNUnSRuS4AJZcwHVWWHFinKZHS5",
  "key4": "3wEZcQqX3B2kedDKxYCA2difdMfgs8rUuAd32zTNVmBxfkJ9xqJ2Un8CRSaa4QxDpapP8bfhZVEyaAwJRij6xrt9",
  "key5": "4Cvrzq6hWrPStV9z2ea3NtGBZpZswhReZPnKcPcZgZ9JsAsxctbmZVjWKkXaiHyinsvmm8FgDnufwerms5QtUefx",
  "key6": "2vKojg3gfzxDxqp8Si5DvSaNKPdcsxWRgY8pQAZw2pBjCq2LyPzpUUJRNZm6fqRzRDPocM5bH4vwUvTw2MwMoZRW",
  "key7": "289EkjVGohgCjGNe6hdPTv5UVhGKmprEGofBiVTW1Lkh7kpVEQ5LygDWhz5ii3eqL382bnWtuGnNUJTXvCQXKzzr",
  "key8": "3GKTfjq8XfuLzrLSgPZmZDfzq7fgGSjBPDG2m8uMBDEKyLaxrc6hg9iW7LL5eUJNN6VBZGJ4vkn7QsWCZpCwqcsc",
  "key9": "64G8HrtayrxaNpC1a2btev8w4FVv6CX5wJcNfrfZ8entJhrhj5d8qD8jH15hagB2sjLGaexCojFW8yjwjpHqrvRE",
  "key10": "4QKtoFt88h5BDnJvDfSCg4gHyNWUtyA8EnVp76HtR1Jgd7F7wgdh1dGqrjVpNKniPdk7PhrmHiLxgpKDyz9dWxLA",
  "key11": "4QAjR7Ja6pLmq3Fd7vBHt5vcfYRHnMQnFUsCJzkDwq7oHsJiWELaFCwbJGBznfgySpY9m7imb4SDFL9dC78U2pZU",
  "key12": "2ZzfhPvhaaZdY4VeqRGSnC2gF23CxkhRJPnxrHBSWC724wTbeDKigEojWSjDLpx9D8C7V8nyMUuTp2gvPBGCGZqA",
  "key13": "D5G95Pmi8UibZifvxMRbN3mRYD2agx5ZZUCLKzgnPSgyMcRk8VQWht2poWKt1pmLGVNEWviZaHpSt4KQnrS7eDg",
  "key14": "Kp3sWUgP5NY7eUvaWfLPotNdRFMXQJn8bNnYzDnDzcmYstp5mdHQfs2Fj3tH92ygixD96BrZhZT9BECrojESCk8",
  "key15": "33UMZ17qg3sKn68p2nNYoXM6C1MXsLGm122CtDnqATF6XFiLuDYtZWLLWazsoBnqFLyXadpxYgTDc6kZmzMbLrox",
  "key16": "3v47mYWYq84b2e1Ja3oLbQdXdDNDujAwLSGJ8y1A1uLUPUrpBaGJqGF8ved69wWQotDwydQfij1pi5RfLzCXJcZy",
  "key17": "5XUoUSvJbtdxKxQ7DCyBzXZJ3pv6aXCqDtZhiRoZgKw5r785DfQKU54ESE4A9NQWnH3JfD7PUR8t3jhTdcSk1nu1",
  "key18": "2mXRWSZHkCMKNm2P2LTDLm5UJ6e6eRDhGaiM9QfhaLBeLWVJatZRfn1NLHznENWUQYy9e2CFP6WvUdzoh9VuKep9",
  "key19": "5Yprzkzh9D5QrqMPqnB1ikpGbs2vTef2DdbySAQgVGDsSHXL59iQUsbPEb9zE7nJGzCMJ5anegXihoXwiPo57Fbd",
  "key20": "YhPMVq9ftpWQH9WYgVhfvzZUYxYXfXJnnYrE44xrdaEydwmHeJzvYzdPrZiGEqfh3WiakNhrc5waNqXaykWzfWv",
  "key21": "nkPAg4G8fhgzZrbHai8tPGZV77sWZE175oPL2nCfDYMZLAyGpKvn4bmanXTc9W2sooPUfJ9Y9XbxwhELotqMZ7N",
  "key22": "2M8DUDwgcpeY4e14gK1GmbU8quRQ4TLKgfY1mZEjuKSGTUkbfhsbN17ATbuRD6oRusj4TqmA2ZUnpUMWwNi2SCvp",
  "key23": "MNjZcZW2pXPzEa8Bsa3qdMgrXz84qYUwdX3GR9UhodnAU49yRF6fRja1eEhzKxeXWay147SpS1S7X9anrPEPRnc",
  "key24": "3UoVq4zz67JpXgG2FvDet6apuCU3q4q6qKExQviPrM5MmXHBn4dCHN4jiNxfmSE7vf1w72S5cimjLPXihxw8nfBk",
  "key25": "67CH7HiebT2MRTnR9wf3tD6YcysSL1s5D7t1sWP1aW4K3tS8CffkNPQ7i8fUr4XjrvJ1z5Adh2D8KsFwtUExwDrt",
  "key26": "jBRhy4Bk46CPXms67zVM3sPywN3bdMDaNXBYiBZhoWRKCEoP5heqJHWkzMSnfRtvCrApsKTzUQ1tNHEpqXrYPYz",
  "key27": "5iMzHULfyQkCMmYsEW6joEkyNguW7wzULJZQzxQsFFY6MEED67tFb2hd25iCs7mknnyhZj5m5JZFLwwJ6HjvrBDK",
  "key28": "5ESm8D6S8A2FC2fStA2o3L35wPM9Q85yrkvtxdWoaPvKk7xZo1C5DcTmbS51kuxuQqCVLSqh78mNHXhu1v44A5VE",
  "key29": "3MUicTy1i7ntfY357abji7kf8wzJYitoz28zJr8LMKQZih5PqFDqdP8EozGgbRMdSiH3g2nEPyGdqZREnsY3vB76",
  "key30": "26JSo3DrCUjS4fo4NbXXFXbBSY9fHBHG1SCPtWSiRan8GLQ7M1SXE8tNTkPxbAt4LTWETkHH1FVzb1hrWBYuQrxg",
  "key31": "5CfVrUyXARGjd9RPMDy2NX533Xxhhr9YHTjjz9ysHby33Jpvzo4W8WAtFm6draKnFoTok7G71mb5BeAtfzUyvYu4",
  "key32": "4wMcjBKBUwsVndjhrKq2eQSNnE3f6MHKm5UaEuAHxASadWq5QnHXxutzo5e6m8FxEdPeCGobc28h8cC5Fues53Rm",
  "key33": "wZi6xM7AQAzxcjgjg9xaiBu8WU5cc8uDGaZ71Nnc8XaK4Nxg7CwWWUZnVUbA1aNSbXRfgX6YHzQGpRRzGUrspPD",
  "key34": "2cAibRmJ1KoH3w6vnA7GpTsMygeLeNFv7JuKp5rCrTB4BiDtsaXdukTsiztANeQ89jHwVYUm5WexB35ecJeXj4bf"
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
