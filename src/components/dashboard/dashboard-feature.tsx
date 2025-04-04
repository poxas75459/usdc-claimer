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
    "2hB7zpoo3aUtooCzafd2pMmx9VSzZHPuxa4BkhJB1xoDnAXF7JQAgSjmbYYiie9M3Tzt2XHCwwi7MgYAGdUUpnor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tjgaKggHgJWxGPrneFdtaFfqZiS312hKqCoL7dKNT3bsMHYBY5fCBWUD9vAvHFoMGvgcbbJFyTH8JhRYPvB99zN",
  "key1": "2Ko7bTRt8qWoXG7BHXueg6yDPNDrecayWvWLMabhAyZPv1oZ4ZP9JtM7toZGCQ6eEtPvpdkUkorRW8ufVpPjtMoH",
  "key2": "2F52UxcYnGN7NAzwMdHx6Yj6fY7JtR6rGXXet9ozt2QQdJMw7CNLSerm3beHyXFfpWQ4rk34T8j3iBxnEYPc9FeW",
  "key3": "2ccL7yYkeJmu8sg4CMxwahWzH5kcGr42TCYgG3k5XyaXVNMXvBexemQZjDrh3aA3S9zFMEMTV5erhtaFHu82s8Rf",
  "key4": "5WvsvjoM6mVb7t5yPJfsMK2KD7efnLAfPLFQSn9fUNj6eGr9hFMmMbd7soR2wfGXwKzEDUNApjBxhdrqmtUf8uoJ",
  "key5": "3Lhvi8qaRcpfbmDTXuinknYsMvYFbUfZMEcLCzzPs99QHdCmYpnYicWXTvRcKzArSPQaEm8mtJXNqz7vsc6B2Ghg",
  "key6": "ZhFS2EYgF7fqa5rnxuznCPu1YRsm88xfCzcse1vEfmqayQbCfE2HaT9CKsVbUiPNu9PZmBJ49dpahXrHuyn53mU",
  "key7": "3ZXXu5YQFNJ9fUNdwefVhqfryKvzxnPNbqnioeLadLoq1HLMbPmujej3VJm5cmgjAtk51ShW9MRKSJYvDBPSVZf1",
  "key8": "4Sfm8BQJc8uDACtuNBxbN6H3URsABwUf5gQdgMBLuf8F39Vtr5sZqcBiNah1VNvmGnKgdH3LMbPGFarS7nj6nS3w",
  "key9": "4HE8UQYwZCKttTAf4yamFbjDViGj3i5Ky6oHCrLq4cTruK3hPf7Rgjg4NDsQU8Uy6dRcc9WnyWEntKYgJ9vWFV5h",
  "key10": "a9qwGJTPBM4CkNZtRreX6dY1KKftMX5gYzCNjHajCLkXdVCV6BJdNnZe81XbdYuw9mms5Q9ZUVFZkucoPyPFz4U",
  "key11": "4y5kZbGqm8WZz7nUdXm5J42WqqJrWieTCLiawQ7uWEwwFfKbsLDXYWoJEPt4AidWXH1g5DA5xkZuYRFAjDR6GV5G",
  "key12": "steg71Zo23D4tTTbqH3cyiVJpEuetr4RmgfC3dJ4mTMbHvdsijAsCfSq3B3JYgRw158CPaf62peXteDoqFqAaTA",
  "key13": "2D2vxDRVjgEyy1YmZxE4MLmegUe7TJz2pUnWCrnf4adNHQngixwbViTjKSZnrMPR1RRwrpqcJDaFAuxKmrUk4odh",
  "key14": "3VMXqqpG2bafUYBw1v2gim4DYA37w2Uk9WctPX38SCmZAGK2FWjctu6953TKUggzQutWAkeW3XRFmoAnDtDyfXjJ",
  "key15": "36QXnKXzzxVht6c5RNQboiBrShUhrrnZEvTA3YeebH5XMqgVBqNr45u2dfpV9XQwyw3A6QneniqRPx3xUkM9ra76",
  "key16": "4PUVUY2ULqw4LxL2tvVho8P71GvLFykMLBJ3jDG2Ega6hSWsvVeSra7MK1beK6JspnFCcVhWXjZfqTpRgfRu4xZD",
  "key17": "4WGck5pP9ChsS6gbPV1LXZeet1g36C4tto2RjLwHCJRejKirvyyUHEwHu4pU4nrMS9XGgvBKURTeDQFxNs3jh934",
  "key18": "4cYH8dQGpKrvVdKW6BGiMt4BsHhDNjzMgteJaahWLeQqfko9gYix1r6APGdgaPPHz21TnDvvAkFAJsV7oZVcvHdY",
  "key19": "4ABKjQp2yu8BZfWJf1M7wHWpENatYhmimAnUuXeQESDvuwGqUBQQL5La4rZPgLd1fTjRKGm5SzCWXCv33zyqx98p",
  "key20": "gAiGXfwY48c4Fs166sVEvYjVy1UNE78LASubnMNf3jNh4hDe558BES818PRoKJcdvGv7XbYh9WhRTNJAba7drj9",
  "key21": "2TXjSQnLNjdY93AStkJku5DZSJC7Lg18KbtcRVckaJamAJMoNnPDh22GS9smnu8CDtotQ78sbkHF3Q6W6MWMo3Hz",
  "key22": "2Yaaz3VXjDyKZUJUB9JHx8pneM45PnYJPfqf3tDAmDUW5iSyJJ2MJqHV6QTJkvcZY3tBBaV1PN2DoGB9cXATjbf9",
  "key23": "i71W7QVhKGCfiXKT5oceogycpn5LWmvavp7GCP6xn28gvsqvv5hi2bywEETKr6k6g5z7a4e8SpeqnQoou3j8xC9",
  "key24": "2AtGUUzNPHPs7rVVaDJ4M493LqQzYXJo89p7wLM71fQc3hZ6uERyddj6bimF9AzEPdNRRbyJhr24EhCYzSt3iqTS",
  "key25": "7MXuC3V9na5nGowcNVZTBkbMgBUhjWSfWbAqHPMmNFv8fEg7NLi8qtDddenixquxXj1mPY9ETTxGk9rTcobQt4b",
  "key26": "37sYi8bGS3CFiJKmhTUz6TNpcsaSKPvtuhZbTiCEqaE6wm3gx1BVBBz6cg6hpM3ozFEYAZRCqeN85cybJGtKV7XG",
  "key27": "48v5QwhMyMHgbWrXN58DWqv2Sy27BoepKZgKTD5HEyzGwTjHu6WoSuQzb2VbhtYrK3TYY11xLdVo2FaJDYQAnULs",
  "key28": "4JY9Q5BRfuSvTevjAxfXXhvJWX5PG2cWZWi5Mmh81yWyzvD9u4mNimX9kayfFDyg4AxgJumtBmG3qPCjpQuzU6rm",
  "key29": "43K2uL1m65qfzDEv2bzZgfdcwQebHdyQE91ZxHdd8qFRzdDyMtEAKR62yanPNh1v2AVdsD7dpx7eiKs9i3WJSYRo",
  "key30": "3jaaY1iKvhBbLoFfX7qUQ4tHgikvQv9i4cQw56aM4SnHn8wimLMV38mxXXUnZ5bBkUAkcD8Uu2Ed4k1eQSzPcZLK",
  "key31": "48CJQCppmyjbafNBzMJTVDLhatpUy1BM8vTx5jeFPL4uj5F5dZtUb1CG5PzrXuJDTNVE2CtYCtRWCo9xLLtET65F",
  "key32": "4do5GwUEfT2gWtw2RCcbwdBM5csvv65Jo3SkqCvBdVVpcakqE89uwxW665Y68MJwHftNqEL8waQmFrbq7sibspG4",
  "key33": "4tEWSvQ3GidncY7jBK23Vb7cjZyGuoodQfSWrebwy4QzNqH9SiQFVb6nu1PACHF2p26r45ZSpNfbkCrKLucuoFh9"
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
