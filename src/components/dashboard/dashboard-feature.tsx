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
    "wgJbCRgkgv9qf1r62mpUAbM4RRiX9oFGmd5Wif8TyYsh75GzBVZYuqoTCv5pwQBqSDQXMMmLtG3pjb7MCmA7nHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GFydnyuDDksYQkw7B3PcFWxYPocywtFCRajeJnKtAURezkXh7wt7vW2dembLpHDZDvx5m1A5RkC6KWBfqrFzc2Y",
  "key1": "2spJPb2QiKSyZo4RNcHJXjg4ick3marUdcfrz4tENybs1H9ui8qg6n8rLpU9wpUVAVUBoUznSBuV8j2EYfexJFsk",
  "key2": "4Q5CSbfqbiGYfoVxrQZ2WH2da9R5G6Y5RRNLC9wWDRQjUid3ag4seH7GBTa9yz27mqhBbTwgWdPgwSYQtMCRwok",
  "key3": "3T4Hqj5JtmWSZYbq8nZ9op24bvD7xK2A3Tuz91i6aHzrnTs6nswa1aiHnseQNVzhw1YYp3mutSdUUS9bQWJeeRj6",
  "key4": "4gKfN8mqgsZzJNwU8wzsWdByCJekKdLVy5Etvgrj4yMnXJBsZ6jZpfa4WvDq6kzgqGu3br8oDGuSpZQkK7tM2BZ3",
  "key5": "SfqFSMxMiaRQcA6bT6StMd4GdeWA7cEtbzayAkAzMTmdJJ81BoNURBnu7bdPVp4CW4CJmj22mUwQSTuESw1C13d",
  "key6": "Qf2ds63Yat5uNQ2KckwSxGEagCJfUMZRM6Cn718yhGUU91cCXvomcPimcy5C1mKs3BWMzGodA14h9uUQxHwBvHN",
  "key7": "2Wshu8zms6rLeF59r9zxGStEKd55UaR22gfHBXXhJDcJAGrTLSbEah3jh1hWBWWxpMaV2SkkWz418wgtn3Y5ekNY",
  "key8": "48UdJf3SKgZuMQ5Zxxi7PnZcbEwFGXEJUAiNJUQFA8ZfErAponZKZMbgm7s9YxhUcYu73EsKPuwBKu8QVE6Dmbdk",
  "key9": "VVbhF62MNzxpVfLSB1ywEwFrMzuFooWUNS7hPDtWpcARX6E97yP1C63U96UZToLrnLxJZHpdAhRmCyvvvnwFhxj",
  "key10": "exopotJbwMC5hG14avPgKn5LZnKtbN6hnkNLGyYewAihFvDiDm1fHVn9VxmAZ51dz4M73oy77xpdHrjfGALw2ZZ",
  "key11": "LM2tEzbqFHPgSgRqrsZKct1w4wE9w1Z3Tnud5iGz8M3KyARq2sWbmK3pq2UrYUzA2AcSjKGMD5JmP8j3obDBAf5",
  "key12": "4ZpMJQf6wHWcf5WNUP4T4u26kK6ez1FgiLJ43ap756jYWU2vuHkD4nerFaxexWCJ2e1oHr9bNagNKchZGtjKmEYk",
  "key13": "5yT6FTaDHZtV8jcSfwocgVPVLY1vtYkTaVFepTrPWgxyghjKbFSzYpQzLwYYDVMC7LZKbVvsAEbE24MednDD1gNH",
  "key14": "4TGX1zMvozju7s8HBj5mZTWBJKaHH6z5NuN33g2MGFL24y6yK8ZnFGckN8tDMGxMzUUHJgJV635SGV2EKQ4qemkx",
  "key15": "3LYwaMjDoPoRmtvyRgniZqhb8mGbuJWoEtJso1SfGqeUZJ1YFcSN275oAZq9dSUVM9eovqJpy7v4xrvScj4Ak5Zo",
  "key16": "49zLoo3sa36Z5APa4VnUrcNVnA2UeLpkLcHjBM4Tciy5nDdwros6qdFek1cnKuuyDRf3KUYvGS5XRUc4uUikkLyn",
  "key17": "5DPXm9PWiZebS3ukTtmKPB3Z1UAz99wn6QA7RdXZQ1gPmv1r7mR1KQNQxtrABJx4UvWc42yvMmHkD5GHWj5KKbwG",
  "key18": "2TKdowVhPq2FqFi4khwQGM2vjPJeWhTKSKPDxoMAZx3fheMkZp464y2xxW1CPYPFfEeQsw8nQ9dwhVxwpqoEpPyL",
  "key19": "2N1vJUysT9eSSDVW8ZaXMHeDiVJtwr3TjcV5MPnkSCpTfrHQ23C1ccHaMyY81SGiXtoWzBrdfaCXGBAkR4DSCS5w",
  "key20": "5XUk7Gvz1c9u1gUVios4pNB8DxBw3qp6XYaUAh8scCKfHLLDJv2Kby5ZcrnCe3ZDs9yiAnYUGXvbdqmuZq7cDjWw",
  "key21": "59ifhnZZoyYjdXbgYCZgFCYe3eqV8MmqvDpvsBdUwhcyovW1wKMz4EGikZfEE4bfJAkqQVvKMdXPotMdPY3XAf5u",
  "key22": "2a9dhhi383AzBHSuqfUVrRh9wYqZA4yJf6BFyk3j1SSX5ceXg64EbYjCkBX3WnrKntFv67S8cSYnjxPuqa6iGBT",
  "key23": "4yWBhYdUH8Qk5qXY8sJGJ7CQV1m1hdN5Pzzcnuv9fQcNmqiduEAp7FBhCPwCcpRE2xET4wwaJDjEVyuUqESgx98N",
  "key24": "2q8eJVARqnJ7nh1KoJLU1m7w6DEHqS7vsTgdfDQgnSZhEqh2YPNbS5jPsNfxxNkYtriJSvdJ8KkGVvDw1t4rAhTn",
  "key25": "yi8uZnWd4QL5dp4GwhiiSGG7LLwbyWf5evv3JP2Tc8YW7W849XHti8UhuiRF2x2kHvGtoMZ5WsojNVBySPjp7pu",
  "key26": "2ehr8vtFu4Szu6mrR51EqDSfyUUMJJqe2NAmNp8RYgQam2F9NGZgk6pJFjF8XaDFxfqehgEgxDPnmXeD6MU4VQZy",
  "key27": "4iQwVAJNemRfdzuLABBH9fLuRUMK5BpfAbBwKXxQsGPuVrjF5v7NSQW3eg7mmKwpjAvXwpExm5bHvLRTCpHFaVgm",
  "key28": "2e6mqGejDu16DkEMeoiituTAqreqBqFZfFi22iydhoBMtyHG19JrbZf4RduR1yz7SfMgtE7zFQErnY4LAWMJSB5y",
  "key29": "4ixvKZVWFF1bzuwqocBhmDPLeggPnzABprGHqkNqn7tV29eCGHLF5Y69cp6ySiikTYWTgNZFvVvXmn1ZqemUJezw",
  "key30": "567WvMFmtLKZeKPKbQeseW8vszFJV6cvNy3nAY2tcGc5RiJcd48toy2d3KcBTZTaQJDKJM36wvoLh88g2JVGqyuq",
  "key31": "3QVWLcGkinDa2ERTV8qLBxfZKs1QcX6AQhFe81n6xmXSei6nAxpSVUmjZU2TNTnNjgCV5862Y3oMpEGBVc8zTDAE",
  "key32": "32EuLaNK4RWiwbAaBUdYPpGPkYqH26n3shezzsueEv8j5udLFVAkqtfEEaqWWbkAzNZmzYf8SkddhSkSe8gfqUPJ"
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
