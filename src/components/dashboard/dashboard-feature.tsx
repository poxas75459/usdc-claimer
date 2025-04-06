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
    "5YXvZD95h6kXrzUpgBwV3TLrnWgErYCUgw4WxKM96EmceoSTSL5i8d3vy7geheTBS9tKFD6eejYeYuqr3S31qU7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55m48Y6UAod4oefZa45VNx58qGRNie1729avge98ndDgdPGZ2wzq37dQoHqDUr5ED1rsPskohLEcMuqW5ocmGdk2",
  "key1": "5kdWZgDVEoxTmVgmdw8FDNX3EnBAAmuX5vXTVJERqGg4wdxoC1NCbMixfNnthrk8akHTg51ZGjztnC8WeM277kyi",
  "key2": "2QBHxpnps9PUBWu4RJUdJS2J8aZm9QHqCCpw59DEuGxDVNgCiZbN4HHDWQm1wSNmYgZYFZyJBPkY15Dw4kW4aPxg",
  "key3": "3KJxNhfLBYBtSUWcc3hNJu6KVV6dVY7vEWXtuTJAGyaQjKVvjTxn1wxyb59cmDwaQvM12sVf8r2Wx8UKv7zdi8S4",
  "key4": "46D8Xv2MMQcGG1717CLnctMU1m3MLPw25ddVdS2Kx2djKqUBXgZk4ki1S31RJ3JueZaNpoTu54gBtdnbLWKxiz7p",
  "key5": "3dzc8eF2jZpG7SW7J6zaw4bGo8bHGRdLcFSHaha4x67hKXZ4GdRFDa3cwSc5KFdYGyfRv1NR4mmL7fKU4fXFjQPu",
  "key6": "2gyqdfU9oGsaibymqgaBv25nXTWitqL75yzLCvwhaFmUNp5gdcYpiyNfyKBPssYWpLuw4jP9UMaJSEK5xjgHzyw4",
  "key7": "3v8cZiQ3a4RhwSrC6TbWL4UJ1eA8kvq4fRXwuYbABYbEUi7bDaxaDWAgie7nbp5firA1mDnwSMkPrfN5pRzKZSmL",
  "key8": "5JwnhhpXfusqsMnnzSNkhdCdcnJwqfXXtLNs3vzucasW91SbRSeS7Np6C7csxXn2G6ktoqXaZuEAxSUqooQEYVHe",
  "key9": "33GRx5t9DNpmQJHVumuaBn63GeyKxbgXsNQpup5rTC1dPr5fCMAv2vo9eS2LF6zib2QRiSr5RhVmkU6khk2mdWgY",
  "key10": "423dWap9SJCvozsDqLY1yq9auCcBBS61CMdmkEgsjfcjCyury4bKugoSAigSSswgC4wLKnhoggL8i5G99cxGaHJt",
  "key11": "2wne6LcU669t6L59VdaEmzw9ekmAfpQWYakBJMFJ7oGB4JuNcxzD467Dr4nTdLLYyPJfN9pGzj5MMYcG3wHonKkz",
  "key12": "4Z8CeUCdkY2tHksENHZQd34HBpq6RBYGCX7birZsgFho6YoFeQ9gUbYc4nPFXn5n2PLjWufPSiNHFXTXnhyZfUqQ",
  "key13": "4gphXoirVrVvJx4ZKvw9EVmeGa4C9ZfaQDpDzB88vsTXNpTo75anudJussbESciL2ehmy92tXn6K5srwNfi9c5a7",
  "key14": "4zgnoQvnAGBokXpHpxjzuVw6arzo4vmNzLLn2Prb3BcZS33mX1H7XWGR68g81eywdb1neyLr8DTzYox3b9jLQTZW",
  "key15": "3C3iftwLZM5bEEiHmyQnSuHbeHH61nnMRLWXWM217pzrSx68S4EteTFRGQZboDhuo8r7mwhD8BLrF2vY4MbjRTiF",
  "key16": "2qzBjBFVX6ZgutEwE1Dbf94xicfxZe8a3tTBMMAzPQJQNyvx2Rer5ASEGF9oSAZqo7xvdXh2u6ASXpcU6jbHgnbC",
  "key17": "MjRojU1aWKNBVFKLttteJmUe2upRsjexm8spMgV6xtEkicfPtDt9uM9p83dbe2hGxcexVRDVYjYC6mbun3NqQsp",
  "key18": "3SK8iVAxUdG5CsEzeMP7iiK17KysYi1uusSien1nDsXBnL5q3ELVM1fqtMoVyK4Bk5n36GFBdVcUU7ZvC99manQX",
  "key19": "2EsRLQohSfuvhW6erwjknEJLCM9PCidAbJeSoQDcgc1iyATtw43FJHD6gcdvE1uVq3tFcExqqPz86TLXZfJ7ag9L",
  "key20": "4ByptxSoAUqz6kEGrKH9nzYtmKPpL5r1vfwr6rBgpykgQwb7kGCLpssx5kYrn1xU8e5ZA2vQcdc2kPMQUwSE9aL9",
  "key21": "3YH1hyhCZx1mB2kejurzMXicdByVeAAbRpCoaesiNFouc9seaGBwnfEnoK4x53TNftPBMvz1dM8RNiA8VuCYsHws",
  "key22": "2PFGntQXK5b56McouEdRPsNhKWFKbMq1uHKtLGuat387kBZ3rdkbW4oZwLfM1j2yPUuKSpkpCEYhy3EN8JJW8YRK",
  "key23": "5LwcececJ87fcYSMw6hQwaPsn3LgzTcSp2pVg6myRWwb7LrnPVekEfLFZ5yATUccGWisGKxNQtxBwH92ThQaRXK4",
  "key24": "NXUBPUuWjX82JLMYpgjhZmnjHkfdgGCgfgja75GyVbKA5QzhUXsagUDcebe1SXkf1Npb6CVsikQnqPj8Bh9nGHm",
  "key25": "23GCuAwtPt7dDrbcbiKZ9Y2ncgNnnUXs63LuJDT3tvtVGbm9LYRhF6uVXTmBxSL8TLCEvymMvAJPhJ1ZkneKopZW",
  "key26": "3LAEnsYSizSErP8gMnF6ErrjQi8eHsjNfLFeq4qjeEawX2oxrhzjk5Hz3pTynZ6FYqxReV7suDGur6YQbmxfscab",
  "key27": "2ijL4NLfufbx9Jm4XjYm39GT9DwjwNeUYPi8rrogjHpjKS253GHBajKgN5ipA8Ry4s5u7B5x2iZhBf7CgQZymnZr",
  "key28": "5tpvMwXVY4h9LuDXLes8zD69x8c2jz1vM1DMFGe7XHiyj5GiBTc9j6NxHR1qG5W2NuD4kb8vxNHeJpwfdyjWkXjK",
  "key29": "5RQ5tvJWvu2dT7nQX7YiEum5R7Z7jFZ6dA1CdYeguRY3yKLoyaiHr4DkAAs7NQPNC2e2JQm4NZ64vTnHZ7t5og8W",
  "key30": "5WmkiLXmqC1YajEL7pnNx9JLf5c9CE1twqoTqT69D5C5LJLVynj7GAtTVx55GpEtdfUQAhDGPd2Z1pzyoZ91ASU5",
  "key31": "4dLfpxVh7ychPbPb4tNW5ktj67bxNgT6fChdbF1HFNGqpb4LfnAsRqhy9qdkpsTs1SmGZbBHDu7Tnz3Ss9gDws7",
  "key32": "jUaJWKqjrzHFSNTsq3JTjmi8g3vkzvb7nhqeqoSs9LXU5SD3fXcVyfsa7XbaLwQMv4xgWtnWG24Z8Cj5yVhJmZU",
  "key33": "4eU3pnsBQpu93f1qgwKqiDeZmRdex9V99Xc9vhZhWHeFA5bqKHKg9Dh6L5L7uGzG2jdB5a59cR26QdmUZyzBDpAT",
  "key34": "VySr9Ls5gZ8WMdG1WjFCKm7c1d5VHswxct3Ce1dkQgMZHv5MaRSo3GZSzAHKEpd1NbrFNsyyMF2tQSacxgmYMwd",
  "key35": "4BYWBF173GiQhJMn1VfQSVDuJHPuftjESicatGjQDpYhnAy7vGcKPvA6iQMzVbsb7Vo3rWvzLafwW7bW2kEFTfir",
  "key36": "35BZdG2sWx3JKB4PEH7Yf4UDc1bDRpRKD34ZUozxJSMv4KMFEfg2oxEfC4hFNWYsA5cPpTUW3P8W4Vg8FduzqrrS",
  "key37": "2uXs7PNu2YpR1zj9HDfPn8vowed5qFAgTPUWR6w4mc2KwcqYQxNSQKinroEsMWpW61VPqvy4AeBhhjuhCQT3BPmi",
  "key38": "4bFppEWRADMD8xQQkC5Q9mqEveeF6Kd5eEZkV74ZroE6qwT7hEk2GMFzXiRMqcqVvc8Q14h2oAYWAiMWmoXCGrqa"
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
