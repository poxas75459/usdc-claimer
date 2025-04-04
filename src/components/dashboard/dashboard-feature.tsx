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
    "4bVz9H6VeDfs1BWBE1sx86SS9nc3BbyMYKyoKMu273DTnnKmAmX1qnygZHj2w61ZHmpgrqgKYk8HcFh6EbLxRUK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p6WR6d2GBVAvvRrTBSNPUVcUi4j7P9TPGJtKygDvFAJkCukGTYs5ZbPr8kyxZN9VHRzR4eo7fR7hyS8sFyghjdJ",
  "key1": "4BUAtb15oattyzFTzgHuRBP93UTJV72JNA2Drua2ghSemKK8H8KRNT3fw2njfD6tbBC3cGy6Vw1xMJ63CvgNjjWF",
  "key2": "SzqwtKU1ZQVfcrh9pJ49FsXLsNk5RFGnXqnbpC4PNhGGGbyVxqSjLAGjX7rAkTJW9A18brhnwLKUkCLkt7kcRu7",
  "key3": "3L1Ryy3E1HfmBrZMTtPX3cDhu36ohWeSsj1H7kLtwVy6AXZCp4fCC5Fkfv65UHvmPgWqXN6WGsso592XVSBeJcFq",
  "key4": "43LYPwni6Vh2phi8PH9zZVR4CErUhcNQ2fs1Z33qpa8GaVeaaQYrtwrbKKZoVu4V3MkHVoC1X2kGfMVmQeBXNSge",
  "key5": "4bZVnQFHgdQtwwj4g7N7gm9qU2g1b8cZvjCcHcVL5TggTpLHLa7wCH4fWb1YjRkj2wrA4x3fY3yDCyqXdSkixiT2",
  "key6": "5SAYYPCEyYgvSNh17q2vJNqXqyv2vVUDAE6rMWsivGd6CJYTTeFJ665TgPVaxFAusKRuSTE1BDrdNzrXXEqphy65",
  "key7": "2NJYrfjzu8sRv22gJPCbArnJNAWcQhWhMSNLg9tpWg9cXfEhzWWxVBewuJBqxGQJusuqHSHcouH2s4fBiJmBtFeN",
  "key8": "wdjokjR9oAnc5METoMB9icFzNTGyFjrmaZVyZ6ee3g1TLZsngRZYhZ3VSHehQypJn8hcTi6drJoZnAC3feYDoPd",
  "key9": "hX4YgdiTHzwrEtpSsxDscm2wh279dhpyXdZnKHVxNrecDV6XRBy7LhJduEtbJwz3qJBbxm6PfSowHsoU7a12n2Z",
  "key10": "4xgGo1DwedGhcJJVU8726SUGXZPoPDGA6w5pwPfqW7C8MXf4JwMcqEVe7dhYK5iVbzXekHq355zhBzfVZc46U71B",
  "key11": "4nneuFq4gpxhmQg5shVzjfXDv33yYMZms3MbqyCxjzbwRqCuFbagfLeQ45DQUFyu4pS5JYcCcW8Knu1iZBpAzxjF",
  "key12": "7rBWfxGnqsAmm8usArbNARbjwVQmSJ514mRv3X4ZN4cdmaGjeAy9ymmT1kEFNEy2s7rwVv3gxDRa1vFvRpE3KRN",
  "key13": "4SRNDV5WL5mgypQ5XZeBRPb6cecAUCYEEEQK1zuXRENfvJd2TieG3GzHSL653wgLiUuStX5d9GKjV43RMMDqxpRs",
  "key14": "5ecvhYkaDYDibSH8bQee1KGhsGk6n4UjbJRrfzUFfUZVhsGP4wc6ywdHy174TF2RX3fe7zq6LwrPEYcR3p4mKCdo",
  "key15": "2ZRkfYiRBuadhVoMtfQGDhUCt4nYz1WnXgWTtVpMWAGiyPgptoCoBbmgHxQm3hZosuehz4hxuxFcCDzyBahaCM1G",
  "key16": "3H5nXAnNH4dbJYJMGLbRBwbdnHKrgQQjzPMJupTDiQnKamsFkRAR8FA5rB7Tz38nSzoLrMLjYJ1cDaHT6K9aP2xh",
  "key17": "5iTHM9YsAdJSH48NsATnax865Q41Mj9VS13c8zuTRLNkfzuXpiwgEydDY5uosfYfWNbwuh4JkNUgLD7abtxoZpzn",
  "key18": "UyGgZgLn3FsmycbJoe737Kfv6uogQrdAcG3jasPWQTqVjaA8zz68q9rTv7po1wxQ7ys3TQUPPCjPZPmPzuFceFm",
  "key19": "2hRerLFLqT7Kwy1yvM8PF9o7TwTBHFpB7MT48QKToanUVq7Fx9iJHKU6friBkgTb2F9Lt9HxUB1Z4h7dv9detYqH",
  "key20": "3MWDDrvdHFoA9McdBojXTe3wisRcXqRtBYgyMmjiByBqvG7yF1TPxPmvvAQeNgHdT3FmHHQxrYQm4pvv1mv4p3St",
  "key21": "4ZMf7Ve2wZCJznyQgUUfUgvyJibDiqb4BQNyzVFTAN8cz1FeSPcCE29YBR7az5QY6jgFRmACfLUxbUPoEEmCQT8N",
  "key22": "2r8SyxaoS6XQGvcmCLbU3p9uKh6cktb2q8pAnL8dKeAdau8n9LmJZvMWJreTD5tUp2EMF5T9X2XtNJTbk1nMGqfZ",
  "key23": "53tFp9Tv3wLhunDdXd1H1TguMFcvRjW1HSVYJbCZkziTnZ1x8ccNuw9UxAjsY6xgeHsupB2BhnPUSMH429hdpjJ1",
  "key24": "5Ad37KKzppubAu1BVDtd4DrEuCVGMQczPjKem2fbBmbkW4b64SpX5btCrnPtnfYH7sP46qTm4CV7GPCKJWF8XMNn",
  "key25": "3syRf82BfT8w3DiykXh4ASfbivnMHu5iEhN9FKJaiPd7hQzn17FvYH86v5oKGvgiiNSSv6K9K6ktmMY7pr19QGGm",
  "key26": "2sBffqUEM3ZZE9w97MW98N9Hy4dsynK9ZrzuHZXTkM3uGQw1pGRGmfXESQ6Hbznt1CpEpXYPvMcJdXrEkDu7arhf",
  "key27": "5AHnTq59xhtGS28yfmAh1PcEc3tQxnZCGMfQ37L1rSCW3w5ppKJ1S9rePGLVyNM6MHWqpmPnnEskAdofYHUHhdiS",
  "key28": "4JsDZEYddFD8j6UNnH4pWWDVDeWdimuEgUjmQyXVm78yvLdhKx5Z6F4ZtWYHK3CqkoeqgSsXn1rm2MAxE8vDUXqy",
  "key29": "3WtjcA25Q571MrJq21dHKTZt4GavUfqErzq9Ea9XpZftLgj9b4NYrwx9JV3aqEDwkGHgA4p1WrBq9EQmZgu6v1VG",
  "key30": "5rKAH8cPTLaWEyFWHA4CRFCY5RA4xbXe1ZB1dwTW5t1Z2q1yzn4YfZxs8ZFqN8ksFQCMuofF7RLZwKjp6a4WVnpo",
  "key31": "2kfMyrHCYpjQoeKRGkYEfp1h3SZH6qqQhmM3eUSzD7DnnXXpJzgmiB482sYH4LECAdsi5EEAwznQDH1uoGMagu6C",
  "key32": "57vJ97CooYUEXw5TG9fuAYEN6GrpGuWhDvzPeSPTsBqQCXGjvN8Pts4vHmbVoQBuVk3q75kUkHwmWRqGQDRBc2tn",
  "key33": "3uhvMUEBMvDXzMAY1wW8hH8H7RnU8PLhu5eTnQqcsRZJ4ya7LAfXffmAXQZ1hmgkY7HRn4P1ikZHrMGdsFBjnRKm",
  "key34": "JVsqjXte8bPinr8Vuj1v1mwiZqvXHorNBeyKxYHB3HJf6g6hTFJAA4kVGmSipEoUh6EPyD3YPwoPibSKoVHTLzA",
  "key35": "4cPGU57b8c1eUxUyMrqyvN8ppFB2yH6V6UsQ5HrL3iUR69s2yyxn99iuKbT5FLo72nRPu1q4PZCUCpBcVdRVWw1j",
  "key36": "23SFUeS7qmQ7BVizjypVxo3qoE4g9qxy6Neggxnid8WWQqvpqiBZCHKupFKSzkTDe2QXoCYkZRdnffpq5dTGYJaX",
  "key37": "42XqHvdkxZViFEACq3P9X4bURaHkJhU3Hq9DKUi2MgN8hr1N8ENwAENwWWFmSnhLAiUiawhxpkcQd9qSmP98u1ST",
  "key38": "51hyka44QN5NQpgkkZ4MsqiJTitySN4qRfkh9FB3JnonbTERo92wViYj2pXxzz1kUKymRJqC5TY1tn18M3aPtJbt"
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
