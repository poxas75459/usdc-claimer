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
    "xuRS3f2vo7Wpy7g6xg8XyaBwkyh4bURLxbSsRXSMsKuhUococHf7hyhcTs5KAepZGYPc92tr7kyj1CUohrAnJBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CAYZnw7YV1N3ch3hU65LW1wJdhgGGq7VVa6frUM52dcGX6L7qMGxrXSmQidRBwTSZohTgPc4mY1V4s8Y7oviDNp",
  "key1": "24BR5eXYTqfcnNSZYRStwkLNbVLsF1mN6ufgvUwRkd7FrJ3zyhYVpsDo6bKDXFiGhYXvzrXQL8bEMex5yQNV8szZ",
  "key2": "3cHC7kw1w4z5VZKwFmrpTn5rh2xPZE25BEDvqa43mpaVhQTfmmaNXsc9xoR4UCrEmbfUoPjQt2XX8FzSGKM39Z3V",
  "key3": "2JynBecfeyWnKJ1KHiR8CcHm9vS7th5LHNZxrMvXxX4riert9RJTt6rarybrjg6ruxMksPUuH7NU1Dp9DSf8szmQ",
  "key4": "5AvcTwzMRtdcQDnDaypE4GYVGLfH82ZWCwZ5yi2iwZ99P6etdJa9NffDeZskcSyunJfHJXRYfpwuHhrGXPnuV8MT",
  "key5": "4GAc5FAqhg23RqiVepV7VHXbTnVw79bSUkuRrg4tnKfbBD9RmL5b1N5JAhAXncCybmQQfRCTvCRYr4mHbseXAzgp",
  "key6": "3GAJMZEWSvNCdmoiNPtdrp55VgHw9y6d8UoCUTGDVXQpUmaefEFC86FEv3tHJ7jEGqyyA7dNpxLh5civWheq7Rx4",
  "key7": "2FJ4VGCjnTh7KE9Q5v1GwXR3KbijYu5UuBjLNaKcKxHfU9wJvjyURdcccGaGz3TUtsYsNgJudXQ5nQCA6QRysdUJ",
  "key8": "4rwkWQuBXNp35AdWMcC5RMKHnQcuBCwBLZM6dmd8epsJiBTXmotK1iHaKNKs9mggvZ7GEMKLwKwNoUJ1YWXxPieF",
  "key9": "3zkghmbV3794goK12qAWK3SqnJHVwv5aEAzV27Fe8e8GpYRGwjq8hfow5rjcsBcXW2xnkufDxj5t6GzNeF2Xq3Zy",
  "key10": "2wHs2CdLZ2xrZDqGn7PsNQ1JN5SwhydNGhrQcHpsMvVvsyinJuGejYA3zJTZfmFeyaZCuTAiuc44zbQegkdEpY8q",
  "key11": "3CuF4AAqEnvXvkSB1Rd3YWfY1hLcuGGPgPW33X2fNeC72MiNpb2vtfC824RFtWosmAig23R9GU7MaGYGrUXiByRt",
  "key12": "4dMQRrDzD5eMWYpDJusXcNtBK35GxHpygf1rr11t6SMuC67Dezq6185REaDLdEo6YqWQ3TCvbewP4Fzup1qyzAjs",
  "key13": "brGkTpWGG8XpFSycZbM8f85NAQKZDvAyLVRcnQJVGRR9EtD2Q1QH8NvBnSVSPAv7PFCNs1EzeRAt3avve3B5J5a",
  "key14": "5Br5c63nsBXnJyszWcQjYJ9okyMApjWQAEdqAjcdWs3TH7uGVupQLc1n4puBEMdeGE78nhsdaCjxPHbSFvGZfQag",
  "key15": "4ouciSPuwMN2MQNrnniTtRjgThJibvkKHtsKBp3o4bQRTmqk1i8qBdbybKC2hUjx5di2xcnCi6HxBSRaLaqZw2rK",
  "key16": "562ZVQ77bsLjbU5rNNjpKBjm7MKSJAchTeBN8gB6E2EjyHpBxrjh5uy8uTsSuuTn5qHxgPsAibJ4hFbsxPH7aayF",
  "key17": "VH2ArGBkJLenVkVmFUoaQ1vHUvs8mCgz9jP8EZ3LARtWGFeYy7FBrZvkYrtogohKBESYA9VKPgKs4AWxMYUSsbv",
  "key18": "b4jSgzFKZivTfd4fiTGJLm3tV81ZzkaYzL8JjbaixE5n76QyCB5e5asjb1Yhjq63tS629igZesc5RbGPLmsD68g",
  "key19": "3EPSANZKhBLV6kzEdqWyuit17kThHDCy3L27qXuNwLwzsjowsEWGAwzRBZkJ9mWRyw8XFcTi7QCFZjxqauGEeRdU",
  "key20": "27CH9NuEGQYpsCSi3NRCyERpjUUPBdiQRL7kbUuHQ946x3R6zH78Mq7XeocghEPiwpzGSQ2Cjxiy4sBbeovRo9RC",
  "key21": "57cv11Z9M4v2wc94fyKAexgNr3ASsfdJ9UBmozaLBZX6Shyq1ydTLozy2SLZyiFbB1KkpcUuMc81AvsvweVbiaW5",
  "key22": "35ra5JwgxfTVoXLvv6ddpAygcFWAXFCkUvBwsX9UJhNYRtVrEHqkVuzShS4yUaWAJap4mG7PoQxu7cZuP7sRyVj5",
  "key23": "5NTud9JQgK4Nx8ucJSdJNu9AXcj1jD1c44fD2h369eujCe2Kufc2pWUHNC4pHk92ms5PUygPpk485kFrqnSk9U12",
  "key24": "2ts9Zy38pAo5Pj2Kp5oZytsDSRc7W4jP5kqaiEVPoRVAeofyKCtBrXhwp5eVApvERifEygsvY4YGypMGsHNFFXTs",
  "key25": "3RRRmdUsgu6tsa61opEcgmV9fGwghduMtX3Vmr3wNqEDrGLhBoY6rgDKtm9Jc4aG9MyVzi8HNS6uFt3nMcuNGg8m",
  "key26": "2ssKmQBNpHAQtFFTXfttsJEa4je8ZZJqjHCLStn76EDWmQmp6gRnhgYySqrUu6wokcZz1LrXtpN8Jo1uBJq4RmYu",
  "key27": "2rLJfUN9vDozYDFqxxgvbzo6xPXVbdncmQvV7FsohXrR3bs9M7TExdbt8n243UrLUrRhDjuSZyg2onxFbpE83yPr",
  "key28": "4QQTVAK1oF4vDHf1AQzNJHN9TKKq2XKJC3738YunNfYkzCW5cACg269YpKD1GSVbsGSRqM2sf5RpcSruruCsQQzB",
  "key29": "z6QpmsqtxjayLk9tjwryXgRwuTTc5pTRZMg1Nauq5YMQq2xVC2JsumYXRcraXmUbbsgQhWriporuG2ewdCsChsd",
  "key30": "Uz2LXndrH4BHCNDxbrjcWw9yrw9qQaKSkLivjEBJLU7rt3j6CbkHKFiwv4GVrf6FTCnpuVWsA3Tk2Rx6j7zJEwe",
  "key31": "4F2QCEspavfqhz5YM1QxCdkckxiB4ZJeKejU7vBHUuhzjf4EyFFjB8tQZu8rPgKmeJpRvjgbztGPKBZGAdAVWiHk",
  "key32": "4Tgr3K7sWqUvnRyhuKQb628mfDFeeRWkKnGK2jrxP8iYVwSQVcYD91aChicymna9HDb4Uhs8x1jjPCAS8hRmYcBh",
  "key33": "AoNLHs9aGCqjqJChiTKqKsSFMsepVsMACzCcwszzCoESD7ymMa5yrn1w2eL4Xhw66zKxQShAC1KEsxHPRoRnsFz",
  "key34": "4BXGs1GK7V546HsxAJJzYx5gqzpR9Ey9dWHQhvfUSpkDjtznk7PHCUT4wViMoM4qqHFkrTtkELryKxSqxyarhAZs",
  "key35": "45sMnv1trj8wpkMrpdhjEbbXot36Bwk47TGK3QbQyZd79R7sZFrAxh25hy1wd8QhKnjeoEFcJAmcLLvBzT9iqZqP",
  "key36": "2M8NJf9kqAQigSuXXwsy96xnH65oJJh43xNks1MYcnY3u4bSEZnf8UA6yiGmkFFrvkAj28buoUWGgadVEdjXnknM"
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
