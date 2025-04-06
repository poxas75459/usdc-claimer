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
    "2BrWHNzn1fW5njHcmDXtkgppMMEknB16dBScHkbvMV7ij3egRAAM3sT2GRqrrBCPNJCmJEo1RbqL2HNMi9AdyyMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i4K4ZXtxJuvBMGk6vNh2QLocEacuDLmBwvFY63BSZLaGtgLivrf59wLc9ZjHPhdvRmUwWeY78J2LpXMkRrbexqH",
  "key1": "5in4vbpTYiQNefMTMAYmYMsz7DTuzp5SNtrbKsSM6CqAAB8yemPKzCWauarK97Y7BUdvWUBfyhvhfZ4Z5xxKdtKX",
  "key2": "1pk6dn9d4UE5wLWVke41dbYvpYGtXTt5BTkG9wY2EuqC12XkzNrFsZaxUcRZadxYx8tNhscTZSsiXrMNQMpiyHe",
  "key3": "5Gr2cXjMjPpsGLr2HSbZHdoAQeXy4RwASjitmgXsndnoJAS89hX7xF5sUf4GANeL9CbxWEMF6xWUmxuNLTNdL3Zv",
  "key4": "3ZKKBPVUiNsstx2FCHUB7u6xju7YFrHH9mMQWB6JbmGxn5U2AovbRJYUmS6yxP4j1SMX3QvrPgKkKG5SrrcGMLB",
  "key5": "3ANc1xHmpwDFSicRynFw7hyZBxSe2tfPgZEwfmeVGZpomv89Y9tdzaEFmXnVtk9hbStVgUfuPXgJtZcTdc7Fxudp",
  "key6": "3ZKqzmU9Np1JHr3UNjhS1cuuNiCKsgqTLWQZCWNsJ9WRdjhbT2pUM3ZqoBNLmiM6JP26LoVTDgFXybjEMkydS4YR",
  "key7": "4tvnNF7xMi7zTshTqEPmB6kgyCfaSa13FZy7ZFgShekwtE2xBTrWgzonPpQdQdi9XiUwWUND2hVh8vRsMZ78epzn",
  "key8": "2UF6MhQWs3FmqChftSzYZnTesPmyqKzZsnAVZXNrjFS6rjmJp8UL3RSPd2Hd9tfnPLH2qrhg6dEQ46vjqtRPj47N",
  "key9": "3MQrJLrMcxcmJAQdsNMkF9sx6PbrJ7QdGe5BoQwBK9v4WYCeisbAW8rDjzuqZAjBCSUd6rGgwHH6wgpPGsGqFHig",
  "key10": "3Gcu4aa2tFRr6QmP77KCTNHp7JzyBkhSFMuXGsJMwNqZCTYb2GCisGwtL7abSHhzm3tbYSfa7V7pKhWLLXb282ae",
  "key11": "2x3njzWgsJTowz41CBTbsZWVVpopBTgZTwNGJXcy57W4e2XE4uBxRmQdPT6JSZq1khEvNdMPxDg1xwx7y3uEJ3xh",
  "key12": "5sCjVQfeFLX13H6RXh6om8M6vK3N6rVcV1C4fzoq5QdJM7WFkETqjJH7LhF5dpdFPdc3h8T97GrtsZath2WvabeH",
  "key13": "5YKXtRF351PyoJxnh9Msi6WvwzktzhvewGgf9CpgzdquT27LHD9u7pNK143Yu4c7dbwMLYRobJKTZsrXrGsFKJgd",
  "key14": "5ztiKLHZmrJg3ERbd7L6GcQqoA3192EoHQQ5f53BYj4T9Fwtr8cQDWv93c1hkpawmTrqXRfAU9eeWrTuigPBL5Py",
  "key15": "5WZ9kaU5RXqpquGN2zsedvUe3VMkdb4JjBXgdqvDcwf4uDfzzaq5XD5VL9v5Z65T3jKCyy2QfTTSQvXmvMRZHBmZ",
  "key16": "61ZL3TniyM8udwtwBhHGw7eJLscqPtYDMykBw6Tcfw4zBzd8PAZEbpGeZARWaX7gwdoRh2HUjKrspctEgQzui9gc",
  "key17": "2DyqFxiS2fMxk2gkHgX2L6GJL9U81sVNdkDqeBSAKvy2myTTzpdSTgXHBQpqYQCaN7MX9ZQhWiuvaw2jAhkbbpR4",
  "key18": "kM8F1LTiuXidkfhKTTzFV3RGUF65Cdq7DdXgHzk2pjKHyK2KjwDhyePWNpAUc5VnfSWhxT8z3XhqAESqAjx34MZ",
  "key19": "NobFyHnoiV35stGUs8VcDTLBVNguFezyXKUCQfjpVM8ov3b9WPJbDEdjSjLTrZALBvxodQvHnaHWrwuaH3eyKiW",
  "key20": "3r9fpkhddLT51LTfG99mBtftR72ZLVCixQnV43bc2c1f34yfrteMV316bumq6moW2n6tnZQWwWMawx2vs5oCUrv3",
  "key21": "3Ai29osB2MDLhbsMPxH5aaeMYGDNWTmdj6TNcb6mpG6nn9RRv5SiePJTt9DNPJfuGvVwKdJdA6UqaAw9qWSwpJsj",
  "key22": "4MQXp3nGN2PtrGn7QkKPg6iiCmPKiUpf3dk1wC2Pof6GZsWAT7hYHPZ9pmpHsKyJDTKPLZF71Af37gkPW8g1ypuD",
  "key23": "45sJ23GMxxrZXWu8LPCwnCdFbNENoBb5Es8C6i9zpmhsc5hd2HBcFktN8j6qSX7swV6zNe1pq1eVxE4bTGZbfcYh",
  "key24": "2NYUqpjRpjsvcevab1bf8qKiunnJpbKdKzxcnS5Mck6eZHQNnSu9zjE4kRevGj2VdEthGorC9dz94TYHBuH81Xr4",
  "key25": "27w9piAAHYUgMuP2hdHCYtBJpW4uwh7PSs8L88Du53PxVxanPWog7KoNrescrvmEUfM7ak38bR9CGCANQaT94LEF",
  "key26": "5dCGS7Qay7TDddPt4ADknTTzNMBf6BPQKp6YYj3aThttoqYnsYgBrGw8YokfRW89X7Pgz3htmszsncA9RzwX59QR",
  "key27": "3gQUDyqFvQ5w2GAvJU36GkhFc1NRodGeux9rV6me2dUgBZVffzYuHCSEKqa14PYjng9yWdhGAniPCvKEggfrMiif",
  "key28": "3zna3DbB5UWQou2cpojA1kcdxc3DwoenwsQtRYFWwwqrV2TWyw76bzAijDGNTWKgZdMs6gD5KEBMUqMbfkBqY7fu"
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
