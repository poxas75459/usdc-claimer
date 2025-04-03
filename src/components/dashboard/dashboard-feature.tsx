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
    "2QNb84YqW3PTUYWQWKchzCMPU6GGftsit4czLHzYqBRnQTPQPCpi2Arpnn1vvXpREZXLHoRrDLFpvJU1oPNhGNYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WDEctyxAY8EbikazBdzunLPir2YAZMpaAc29uDv8qJbrxWxZbbcTECdN4iv8HcJaLdQwAveq1z7udGLRZMGWEwF",
  "key1": "5tkkNXG16ZcmX5YWE2LT7DTuCK4vKQPGZDMzva5qVWaEis6ejdSXZwopzyjtn6EQnttuyhioMz2eBqPQCzWqJghP",
  "key2": "7D4e2eUQ3YfVSCuT5kwewsJUgzRNjAAdXxe1itYoJ4urWXp52KgJzCCjHT98vbGk4c8zjQVWYyjDhid6VegAyEn",
  "key3": "4GAhJ49LhEmiCVwdBz5KHVZGLTYoFcGhU3Sn3EngTVsMGfweBM8jp3UBwFBGKSogXQJo8aUgZFyhSCY6MSp5934e",
  "key4": "3fqQV9U3csbSqZy4WtMefRnjeLGGXTM5zReFsSUDDDTfpRyN4vvPNQLiB7bsPdXMX6Rme2PuY2XZwuywdM4uSwD5",
  "key5": "ToGjdn6tggSReWFz6DavAH3oSEs21FpKBZTu2793uxFdh629aBYuerc7MDmWehjpqWuaVYvF5vhBWJ6stEmtRv9",
  "key6": "3dQTuqM9VxEZnedpQfqQUuNGsVpEvPes7WzLV3zuMaipk6TcDij5xTnTbZfW27j2BdNmzKbKs8RJSKqyCYoeD3Tp",
  "key7": "2uzKHzSMUNBFXx3dxhaRgC4i8nRdUgUmmvtkJyvR6GxB4n1XLvDurCs1qPSeME1pihz9X8HE6HFGRQCgC5xSK1pP",
  "key8": "4ZhhHs8vqRezZvuWnUXNp3uCvkftzJyWL1jMwmGEYZowqzutEmf4GCwFt3jPCs8bVFvi451Y8H2gwVMXymyiSW2Q",
  "key9": "4PhjjWcsmqmEj3CSHAeehY5cPeKjbUwe9MZePitwAwhGzyo2pVnu6TfvRXKYKHWHQnS9nJqMk5tjjbAw5395FK5J",
  "key10": "oHTN5ZbqggQZYTFqXv8gsQ8FpqxbosxVKNSghW7oRNj19XqoBoRaeGUS1Rdy121wvo26qwFqcZjHp1xagjxMwmo",
  "key11": "TumrqNKHA9hbJ6PwHmpwxpQWcz2kWE8FsoYj9gxhMKFf5WAF8UCZ3oy33nNYuLjYtgSfFJT5XDbRMt2XsMxdnYf",
  "key12": "SmLZ79izEusZg4w57pUfidBL9KiQZWF9Btygy6ZK5U82sUxjgpXWLVdk5EhGWeSTpfBt388xkbnLUwhcqjNuFae",
  "key13": "4UNs6S5643cCwxkWyj4QpLikhFG8NLrCZrBiA3HEczGSKk3hP3DMmXqiito7YB6ThRL6iPUYcTNjJjhEwybCkcqQ",
  "key14": "5M9N3at7Aj7W23ptc22Nr6PAqeKjGe3zucudRa9DWksrrj6uTfBo24o1VYA3Du85YyF1LzViycbHTxR6s7BLdnV4",
  "key15": "u3PWA4uYd7ez66h7UDNkGd7XrGideHMTQzHE7keAdopbA82NRjGiySRXCZGAmgx7tcafkEGgvDHaGozUC9G2phF",
  "key16": "56ny6NztrvXHEMMmeaNCcC7Y2NYAEt9zV7WqX5GMLWnzbbCtKsUxUJj5cXyqapZab9LbKxB6n74jWwBdwjtvJWcd",
  "key17": "3q1uU3oE5xJkRaY2TJZRmBeSEiKXtSAtiHZhrs7iWvFZxDj4TR646QtRKs8LLefU8evoqGtrqkzoirxRhFZEaajG",
  "key18": "3mekbEedubxfvrhdt7obUKgJ4MPrHcMCPiWQih2x3dtnBKAVA1puRcjkSgsB8nv77aiqWWXFP3uKdrnuWAEiaDuF",
  "key19": "QP6wzbnAgbmQsHBEFSqoWgiFFeGYMykxwdoNnrUXgEzJ1EdtcfdKJTtaXPZzKWpexF3CzjD18Z11mtaZGAxvNDw",
  "key20": "5GWBD51pLzWWTWuytaDujtcpqk8thN6wYr8uZ62YboRkBzrzC4SLmn8oJWsCkjmtgsa6xBb8U2TqnWzZr7wemFpY",
  "key21": "3eU9GupZyLjTv6LGeHUEPjW9GR5Z4uUsCaveNSn9msNkVUkVZWSg5oHFSW8e4bQn1dUeuFKh1x4U9NrnjRZDkCGz",
  "key22": "5KmRbmsN4ChB2baYDyGW5gtsBdBeVE6mCius8xKqDCXG8X9NLv3VrSbbtjKhBTcpq8TFZcvohfGSHbgu6HcViARf",
  "key23": "kDRWN73sfbFQHPnS8m5PAD3Ec3axRNQmRWfXaAsBrs1o91LekHT8mnAXDXmKG7QQESoVdVFwNnRQ9G26KhgmhsP",
  "key24": "2SanEYKHprTckZrVT5Pu25WM789fqGow5Vg3xZU2P65u3YCs6rv9PjkYuX2WB8UPzQ4qgR8HHj5WfhZTn2tftAde",
  "key25": "2mn1fYSmnzMkPeN7aLnZYt1X6qDvax519koBoDkVx3aHzDAGzWFsKj95aBUoiXS2GSE5ywJuTGeoG8N25abBtQq6",
  "key26": "5E4uShC2XtQqiWeVxiXY6LdRDQipuGjX1exuqNnGcxeFiGUZMQnJNtGQ7mBuPEWMeukJymy1kx4X7gDgmbEZriqr",
  "key27": "M9h6Vf7EceMahKVZSeFnuBAPCYtZAiYktVNF3DZKLiY4mXfUevysLBZsmxjFrjup4N6a7RJ9xTFzjk2QnzurwkL",
  "key28": "vkVmnAFrxFJCHkDFXFAxuCmVsfWPGh52dSGbSMeM8JiJZS2J6TrM8sVvbr9Ervd1qTeU9Qf3w7z5SfHfiUqiwrx",
  "key29": "25BPKNH7HKXigVjMypCx3iHZ9XecKG8FwXcb4bH7m1dgjKHUfgZ7ZnitgUwaG292PT6Yz9sWP1DCMicSndKLKLtS"
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
