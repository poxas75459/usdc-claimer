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
    "37aVrXFm1yjFNLXhBRJaKBRxWD1rHG8cgCpEBGCivv4hcMuv7KVzrs7rRofEY8rVxFXxToo5bFbNmfuvnkyPretz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yJKHTe8YD8kr7AuuUMAKnmw2K2mawd9d7e7RcQEicqfcPjuT8CJwLsrd6mkwnpZ6B5dFvEhmePun3SJRLnM7yVW",
  "key1": "5hPBb443BuKMdjt23GDYRt7upAEJ8X6fdwizWCrhzGieJMtTnyk61zju29AZhjf511iifqDNkyRAfn9VpYdM19xL",
  "key2": "5ywBu3XF9QD7yvZPXpHcLz4GnkuV5fD25X6w89kFoZMqsXJQnj35Jt78jAYmSq6UGuUtqQUfyn5G6wjXE44jNfj4",
  "key3": "3XvZKRT21SLxcAQNDWUC1aJxPgGkaFAP3XCtnia6eMQkFSL9ZH9G4iVK4CSccGVwANMX7gHZc3n9RqJEVsbzuob2",
  "key4": "TCbgRTtxXR1gDGu7NNPkjXjhs374s9FpSps44GWWB8G2YqF1GNJ7N8MmMnnx6muJrDxKCNaueaSVZa1zEHtuqT1",
  "key5": "5FeraJoDtHfyyzERPNMBqv8oqhtFD6jHW5aHMWZdDLFHzhSgJujWENxMDF8fezP1UhzuSzg69sr892pD23pns9mB",
  "key6": "3m2cxkCQnk47Hr8G5nXqeBf8PsVQ7yH8xgcHwofxehLJVhwTrJeYoREDY54vHqaZYErDWANfWoGBtG9kwdaKQ3r9",
  "key7": "5Es9RRf7CpbhBcM4V1K1KXK3fGQsTUy9RXBpJ1YvL7PDPXjnih6pkBfF3AJuuBRTzFexvwhtUJtekNazw2dJ1q8b",
  "key8": "pGL4buGJxnmYjsv42xRur1CkoCxHayao2JLkH22cFqDkN3hxEfzo3KiLc52boKBLmVHBYcxbYKSVMtvPqYMW7A7",
  "key9": "3FmgEvRC2VSuhhEA9biG7rVECmyXj2aYQqq4eHjJQAtd3LshqJMWwYc8JjiNTetfHf8jW4SAd938kL6KLkHCiSh5",
  "key10": "2KfsJX8XqfhPp1nkNuJyG4mZ1874uRgqn1dR5UBae2aBrtFqKDo4jukEvWviyxoyy8qEC4Bw5jn5HyTAVRqQ5Z5v",
  "key11": "g5MLVCDHobyHNwLiZ9HbYHZHJyzeiMeUVb3oJwLYDeFGeeT1NkXDRL2igaihqYJS2Z3y1txAYJppR8jpD8wYc6r",
  "key12": "4oxvjPJmfEWQy9bE9oJFfW2Vg6dzjU3VWjuXgBoX1nr7nDdReLypHC92pSw7vVqHqY2zhpCvgBAWjDmU817Hfrne",
  "key13": "2NQv73yamALus7Z5EPUrw6yTcbk8kZR2HmU7GbjtRjsC2cq8Mr7hG7SD5vi47UZ3xagJ91qYPUjWRiu6c4HGHzX9",
  "key14": "3B7TxZYCbmHNuKRixVzSDmG5L8K9rybXB4diJDPm4S1jqKcJ6NFPtFpXxQFixRHd3p33X2Vd14sMPEmdNALnTec7",
  "key15": "2uMLGGc14nrDHyuYd16BuZSN1MMQQd7T9ctta9PQMsxDgLqghKrWf4AiEEvjZUECLKMsRvXZF7QaaXT7Mbe1hqzc",
  "key16": "Ykinpk4xofGACzxL112ZvHUSZamr3nkmSTYjV8kw9nERhyLvb87ytvDsohgRe7xvBPuTkmZ18dBLxR8mUD7szGP",
  "key17": "4zAG6m1PRY3suuVWG18pWMuaRvVDyzsKh6cYVaTRpVw9XkFFChtHFs8cRUbn7etejCigUaV6ukR3KBZyJkEZgrUm",
  "key18": "3EYgczpzKXt6nmbGFsvsPEjeyLDdtNb4UFvBnjfevRYHrSgoSh7XSEsjymHg2jyfcrTw62r6csicdevyT8pE3i9K",
  "key19": "489LpGqDdy2ZdRqpceXNoxmZqYsHeNxV3RXjCQuLphqkFyEv33BbAzVYZ9NnVz9GacdTKW1FDsqqqsNF75yiZVpz",
  "key20": "he2LYaWvCecQNbBQx2V4XufMdtayRjU4ZjjywMtbvwzi88UzY3vtCDfFk7NrYH9fvBHUYZcQCLjwPVFL3S5HuP4",
  "key21": "VxNMX2cBgXRecygQoEJZV2tTJ2SVASxXaMD6whVJHdZYPLJ84kz2wdDsk4G3LGDewzkNDJVrSaaGuq7Ap2V21ua",
  "key22": "4RSMjCRRRMRWJ5Wjxg88tXh3vvk4T5J8CxKPJ58maN3qvDvbrjHsMQD9w2gZ7BYHu3FA3ow8hp7LD5jinM2uXhu4",
  "key23": "2rFviugtVQVvvpKfLF3TerXbFPAUEnKcZvayekSeCDeuxbTCt7Jb1HhXQUqBtykHLfuK3EFGpSap7JcBTLH8P1hs",
  "key24": "4APYqREVBJKeLtKWtEvYqXy3tHQ6zgAccF8yYMw2CUuDRxqGoNDR7Qgwi5vwsRYbaDu4qEjRHBVJWKSXgFXbszUB",
  "key25": "5tgwNYp4zWBJoE8nfAPD6yCtdb7aCdCcjSu6m1uv1tXrPs9U347ZxeSpzjdDcTSd1M1nwqAFDVf7oKou13gNcjhD",
  "key26": "2hP2XMdpaAFsLaHhokRWZVXVQ8PqoxA27CZ1Vqh8LvzfTk2hh8wXD1psPzmNojahWtM7mhQYbtUubHtQuZ74id7y",
  "key27": "2h5crVFd89YReNKnwu5CErHKNk4QZjB9kBooSsMH8oTwakcke2XiJqwAHDbfCPKqo4HZDH8TER18GvejQwoaXUU4",
  "key28": "5LrKzuyVVB5jpjyQSdyYWQaTaptQyGRf3n5zUJr9xu8bvTRs5jDZVinFrtT7MAWgYqHGouuCgfDue6YhDtjCu6jY"
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
