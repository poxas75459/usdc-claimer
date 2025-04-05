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
    "BMAZg9QbDdWTtZJzJSpHs9aUqSbreGN42LK1uV4EuMUKWTiizFF7r1RVWziL4w1oq7qMYmteSZhi5QBSnxRDriC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SJvEkRYPVgEYcG6hKfc7DeBgJcZchrZ9kqfSvGbJfdFQPhdi23bVMd1DWzQZZKb2LsH9sQKo7pdtKweq3uTzgJh",
  "key1": "5NCQ8tCxsou7BSewiacdRgMeM3sAnH8Ft7pZdKeNEd4UrS88kWLy8kDYMUhJ4zx4rUp8m6Xr26aE4nbkqkTnspa6",
  "key2": "4fHvF7BTLJ9Zb5862bU5eMYk9P4tLfBZq6HYAX2eEYwtEZJfD1xrwTYCQpR5kj2i1924bwbirycewegX3D46u8CL",
  "key3": "4TFn6QjBdvamgwnf52HNTy1PJ1dP4UiigrQa1Z3EG1v4B9efYJL2b3QcndiEdK5dCdUcRmD2k3VQmT52gbvZh8d1",
  "key4": "4b3boEuLAXg8mG5CYvYRnDshiRjTZhNJcyZabBPVRPsp6uhsDxuXssFpdE4BQBgs2An6yYXY9vuwrAi8wRga5Q7y",
  "key5": "ca9Y5AJ9DquT89Qyt2ouSpUxWZANGHjLbciKtJYP5c1gHpu36fHJDqfyhHFW5JpnZ1q2LGVJKZZyPCNp3qU4t3U",
  "key6": "2pSobqPQ18jswAZwRShJNf4UzNJMvBafuyKtZPghj36Maa49wNxqemg2Uq3utZ14YrJBeYc1zac3zawAbeVZ3H3t",
  "key7": "4HTks1iH3miFDQ9uGctpGZ1NFqA8f28m5nDujGKeKqTe4qxs6VL455aYMTEtHSLTW4ix3zW93VriaZHfJmGaoehh",
  "key8": "4bFtZsRVZvWThCK5MjBtEojBBVUKZxf1iPm9uWDyV2kPvNwkdyCUiZfVREzzmm9Ce19YUH3Si1YYKLtwCjHG27h5",
  "key9": "zVxgsPzZkms9Hmd77gsBsij5d5EzdYnYnFb78kGom93Lq9LVH7cXP4XcC5PwiFFuX9DASvPB91bc46vgMebzrHh",
  "key10": "zh5EcND4LTBNwGRjpmBt4Pja4hC8zTPDguGr6ikHiQkjyAY4qhSUSpSDtij62DYdzuravLYUgtvPaZfVV8XJ2wa",
  "key11": "235g4Jgq85RwfnZQaiSgVCK4gDRkAEp1PvGTg5ikNfv42NYLsy3nFWY9JbroUP3y6qVkAzFggutedudYiVPM1sqQ",
  "key12": "zGH99GJrYPMmDoFiRHNNXjpk4995xGJh18Vb1Zn6PpqPr7FxPUZX15uhVLSWFiBkbmARJ2Wa1rDsgJ6niZYNAmo",
  "key13": "c4s9uKMjW6rNqxNiAmzV2McS9dWA32FAPCrYLP7AYXnCs1km5xuxpbAxZ5ivztdG1PrWeyx4VXETSdyVN15jVyG",
  "key14": "5BEM763AkrkrRAc4QxLgK8ugC8m9Bh9BiW4DnZizPy5khuTMVWzrAHWPawcTVJNrfvybc6RZKqhFzRDyrKrkhGhC",
  "key15": "5n5qhJLHT5rsdxVgV3atyk59Nd69S1dB7wcm5eidvXjkncfZFWQhQ3P7PRT2nVqMvLpdv16gYg1X3sdGhJABPLWx",
  "key16": "2d5jaGhcR6gKpoLdCUx9MF4TjLYxDQieMQzdrteWvgTevEBuXpSUrmwASZxmdZC2hL9zZ3CGz6RvgfZLSXB6opme",
  "key17": "47vhqWfiHSwjAJi9nwmBFVLNGSxaJF9YQKDSFCUv8mpDyW3EkTVjk6pqhJybZWyshxERujhdunJM5XQFeptEdFnj",
  "key18": "3L3b4PPxKdqvettLRyLCXYwjnLFoudjCfP6UM1SuU7eQZ1745j6BsNuqD6z9BfsGpTZJ51VZZv4K8PrPY1qLbBLt",
  "key19": "5gaQhhCAkJh6EvhJJCxM38K2viiEgrEFJZkZW2ZATnb3ShUVJGt9dvm4zV2JNsVjJ1qJdsVNgKApAvVjy8AaZUUU",
  "key20": "5UZGL4K6eDUV27eBAa91wkKSQ7eCzbGiLKXa93at65JHqodLoiaJJbr723jeomnSgnBX9s2fYkrVA5Y8UZaSJCxT",
  "key21": "4doN5y6Z31zHYAbr9AAZdkXArjbduHBCxqtdHu825bEuxKJ6LLTv2RBvZaEKbDLSrJRd6BdrrxfKh9ymDbDNVkN5",
  "key22": "2rfQEGZnTAeNnWe5uHRG1G5m7wAzn11rhPqBqjhR3T4Csbga9FWL1WaWPTcFq3VDokR9PXhCYWuE3AuBheJtojpM",
  "key23": "ktmm15rSK34ucT78Z28ZVqsoKsc7yTDhu9h1AU2fhYaV9ugRXKRwhfaqKtUHXncA2MD3kpVxeyB3ZdvCEuo7Cvn",
  "key24": "4DoZEA2L6Um5saFn88nQy7u79CVCwDNubLG4zq7mu8Dg2eTrKwFy7RpwEPAghE72PsXJuerMJ9yreRGyF76Yrcii",
  "key25": "5vbbuKZwr55ana75ph9fotbojLSk48cFiERrsUUNfTJ34yWoA366UoSS4ehK1nbeCJ8ZJvtHdrDVcX5ewpkaFERg",
  "key26": "JxGf2vBaMQZGH88N8EdnoTVL1jMLdCRdxphM3AiynHtpFR16nAmayWiqHTdWr8eqgesQNXY1Q6voaRPvDSWmj8w",
  "key27": "2AtHcPAUpK6tbCKVYcNzw3HPZd8jij99pNRZ9dXrbWdWNreSahtqebrWgu7dM4pMtyQYHc8NL2Y9RVPvzYaMztup",
  "key28": "WEHRRWiBq8TK4Rbzg7umdg5VTyKsqBGLHkfLVG4xh9vU1ufhUs4u517kCkaq11brSNocFpYB5oEzVBo1MNuTA4A",
  "key29": "3AmdrbUoFdiFmomKGsZLdWXTu1ANFGRh1QXFtiCuh9QzHVAR1DghNg16E8ywHHxPgbGup14eh7r3hHmpZR5c1pdu"
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
