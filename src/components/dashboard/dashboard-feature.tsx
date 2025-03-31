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
    "3XGDTN8u5tKR6Tv39qF9PZzgotuqRB6gaJCiMzfUqPCTxfpoptbnegP7cz4eu1iWyp4Q9tYjuMEQ2A8XiB6RrfPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RQ8hUMrtqEpqT3saN6pQ98mc4CPdtdg68SZzdiVh6qyDHkkxYBrrbrgdPzRkKMhCRrXV1DAVro7UqvATpaAmnQS",
  "key1": "3ZbQtSLJWVD9B42NJp78HTUcidP4X2yhGans7rgY2KeMBZk91KhtDSjnR8HUsANLGXvzUi5MYfiFbBf7G2FYy137",
  "key2": "5MXXeKxtizUaGMt94H3H4YoMvhhJrxwqujiEBjhSkVKK23f29oAdi2ZSsiLQdD6AB8UTGfcJF2qCFR2WPUWur7Yc",
  "key3": "62zf9LbckjE4MKq6Q4x2SfBfiYbyC8rKMS5GA8rXCn32xkgjCCrj1yxbTfdVE1dKWNgooBmVYEZZY5TkkRm6aGf2",
  "key4": "5bC4SQ5GKRwETJNRcrqE9RBm7Wgq9EtJhQ4L6DfWLoSx1pSpnc78G3tsrQzPM66foGNgEEoj2bv7Zg2AFk4tAJ2x",
  "key5": "52ar6DuwKggu9Up6oMs7VLuagoogRJTB4TnSAbc1v6Xm44VMvEr5jV78jGevkE4JTEjspiQRW27H61Qtu4uK3KsC",
  "key6": "2M4ooC5xW8nddm7BagszStMaaBRqFgRDCbfvE9Yxixwbnskhr6iFt5CAf1XKzqFJKYJzbv2nL1bB1iDft8vVFPe6",
  "key7": "3GjFEzJyBtYSxhKXao6gZjrru8rZ58TUjJr6Fak5B61YntDArq7AdfW1TJqCys9HVGyBKor3Kw5vdXacWcMUwsk1",
  "key8": "2bQKQ3PpirzTSkAyw6a33LD7uPus6jL74a3t8Qak3oXTPYHeyMhy9Zpy6a57qCpHKS1HCcYzbhNNbqDDA8nNCMp2",
  "key9": "3oHF9spiPTfFcjkmaPco8bgUMAPPcewVd323P5hBuP1duMnLQkQbeAM6awf2LBjC9AAXcmXvFwWbEeF2FhTNuunt",
  "key10": "37WtJpKBbzre5EwRnHybe7NFmE7dmL3vJ3cS4JwyaMewgHuL9ZQQLgQwQF5QMHFzf3dPsVZv62jt9RKknBexoYvC",
  "key11": "5zrGCyxdzQoHG5akGM7dReJj82EjSw4uZBfqJbxPQkCu2sw92wWv2v2HBb38Erju6kGyzS5c9fuRpHZEWYRyhFQ5",
  "key12": "3j2K8XhWDJCrTDKxeAcXn9wZTmSehzfS3twWPCSYC5tvvTjbWNjBGnaUu6qzfoeRcjP9sPVUFuxDpRVYKG1xz3iL",
  "key13": "5sLXSkhyDjUHQG94j7m3QhubfqeJSnvQEUbmKncR1hTivGRBw7Xv9HrZaDs1vBTjHvWnM9WcV1RYsu6V8VZu7NdS",
  "key14": "4MmB9bLcU1xybS57UUYPMHT3LA6vzx8BYcsAcmzKyaor78AMoGGE4aTJgk4XcAWsdVgCref7tNjph5tHhk7hSRW3",
  "key15": "58J7TBfj4HsL3JRcKnkbwRLTvoYGWEwP3ajzjGSqC4wgavpa2JjqjRDTcBBXPPdZwhWVrMf3RbjQh53chU47PZni",
  "key16": "Kp4kkS4VqK9Tz3njZ84bVChtwviB8cpEWhwWpECBHoG6UX8KehEpHh2HUkxeAxsxphjeoQHn2CuazxqiNTZHJfc",
  "key17": "2mh3Ydvooh7d6kkubwbLf44zBEEfUkMyNRNhwjGmgJd6eR7gBPyZAym5WSunCUtdkRBJuwRHuxmhkv2ymfMTXAD3",
  "key18": "5MCc8a9CDDSiWe3s4x6zGRHKPtv4qP1mkkafvPpT5Gfh9WrezH1CbtPXd4fhNZmrQnPbpCz5C3GGAgGp1UBtgi5g",
  "key19": "5F6Eh9vCc2eiFwQPcFZMhvgpCXGwbHr6L7AFa7eHjcTVPtc4sGTfUFASJFniKoe2Rie66rw18ZbH8x772BL3v6ZX",
  "key20": "3VtvZzfUZb1DJRDd7eKQDfxcyWXq8HxzuKd9UyGwSqkGxPuZKqcK9mPD3HNzG6BQwB1vEHoxo75jsYVsAiVxYghS",
  "key21": "24Fx148TYR5hjPFRVAAP7b8s4NVm5wVqCm8xpbH9SwEGoy2Xibx5aWpMd5riLLjJUHZC1XRFakhCEu2y254sN1k7",
  "key22": "4FZ2H9pF2ixdibd7KqMzL3JGqpcHottntGr3JW9NXMj9G7H6iC23oX3LYoouQ8cZ5NTznhZBNyijL91Aa8mwas4E",
  "key23": "4DDTtXKxH2VQpiQxTgxnuB8Nz1fZ4VVnu31h7FsFtM8rBqpBM72Bxv7Q3ShvEmxiFvG9aFWqBKvzBwM11ixByBPK",
  "key24": "2vH5TBXeoq9t8VempQzcSm5pVXGkm6wtcwMKwYzNpPZ1t7foEunoaugx4kDYiKsu6T7hyhP52Bkm85E8dx7FfbCh",
  "key25": "5iGQwDU3iZTzsESKuVCnwMtbGAB3mDbPsW9pujMCcVQfDEKZNwvt8YgpGqJdP6fTrxCcVakoWgQQ6YxbUNSqWG9y",
  "key26": "37uKaPXeCdKXD5VkBjnwn6gC2UtpkS61pzC5yQ1Te2bWjB99uwKn5xwScyjbGNRJH36pfdMibGAUSbcfQom76gHb",
  "key27": "ePBouVXmYaBs1EyetaVdVVNpmMw5jNxr2PrcwJfaW2pyhs8dXBpgczrJdad7P9eyYUnjSdNymgsomEVh1EMrwp3",
  "key28": "4vGTXUtXScV7ckYFJT7Wg7nQHAdbr66cBkEXZVGeXqe8RgXHPaoBB5htBfHeqUBGAhzQy4KuJD87i4oEUiTwFjvx",
  "key29": "Gfgf5dXMX9XKMcLvAghbaMhC98B9HeEhbiWq72Zwsnz7mYcT89MD14fRn75bKabBkkLzY8hhZsdXNJ4SCGGVtJU",
  "key30": "3KdGfs6kFYDwzGhAE6pm7A2mY5utv5duRECwfnP6Gcpnjvg2szxjtt9F2pddxR6goFRSdMBHEemGYhNrESJQuLch",
  "key31": "4ERkhMYBZZFwf8CPPz6hKNnQMQJHtFjVH7DAtWMJft3gEFCXZfwTSZJPx4oySuhM7XVEdpTThWZZ45xh1asMFYLE",
  "key32": "5DeVJFyjgzHf9Wqb1GC94Nzc7abb4om2apsUfr96ahuFQLL4gamhmvtE79p5HmEH45KVaiCh2x5EMgWBEe1B1FkB",
  "key33": "5JGHuCTPuuFhPNhCWYec8QKLRAAqTi2NXA1iPsQVYT6eJp23D574ririMqqP6ZtEAsG2W5HS4gMMKB9mgRNzFZGJ",
  "key34": "4mWzFyakvmYQiRSfvQASZ9jiVzRD2E2fTtsyG7oa395iJWXVZJNayrfH5HoxhDMQWv9P5WtCNK4DCFXhpxZmJLYR",
  "key35": "4CYT1oJGDAGsFEKMzZExqQUh2ayGPppeCRGByYnZixqvK5Mk7LKV6yobnbxY2GcX6WdBdkZwpwTEPLNyo2mmHL8x",
  "key36": "3QUPo6gNhp7BFDpoXEyvYhgUMu3qXTNmUPinyAXABdB6qjjVnBGALzGuKdQw8wmxf751Mug4gxfZMTWGNyP99zLh"
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
