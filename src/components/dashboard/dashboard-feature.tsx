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
    "2V4EAhZPU4oPnxRDZyTkAfitu7aVFYMzBq8G4L7czRwZDvAB7cCmpDfN3eB4K6BV8z4Zw1L49uj5mSbrBoWdAq1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "246f8JmiEZr4sFz4DCgouR1uTePTd3uCnNy6kjr4gAU6q513paorXgy5Y7jVgCDDntRemB3gQ2JZjrn7rVFn7gtT",
  "key1": "h9d3B8Bn9YVWbmWdBhMrycjuf6YZKM42eVji8pqqVH6KNJHfxyeNoE25u4myRT1Hk3qc3hzyMgGd9zfGALsmyoT",
  "key2": "5F6SSsKvJeL626TvSwZhHnSPi68W7kzws9Rjjr2axqeKFasYvP4LkHuJwRNVDtbH4xEQMxHzotszYFER4Ln4CzME",
  "key3": "2Tyh6veKXBEb6ugeeRVExKjC4vxC5sEDKVyvnPMcVUMkw9Qv2TADsb79QFQAVUmhHcUApN9tiXsd17wkLu325Nnw",
  "key4": "2zr4Zvz6rcedgDU5n2KFKKHHPmiCyNfWyad8JSYmqF9GW9tKEmS8s4QECfmhyuzQBKh5dFSwApzeZDijseUdt85Y",
  "key5": "4rMaaLhoW5G7rkC7s8DiiP6ZE8bDPpNDZeLpDjkrVj1sWUySqRxjRaxywRC9YkNHZy47r2GjNK8fFcnJkEZ5ADTT",
  "key6": "4jEyWkj25eeQWgFkh7Z2qWuWg8dkhH7LTPn6VyeD6KHjwLRdMx2Qq1wDLJeodKSE19QkfTfnGZn5qUdBk1fqgnrj",
  "key7": "2X27N51M3KD2R8nZ1zwjUDAwQa2f7Lgc1XsbmDqYNcHdpC4Vb4bZpw6fjTSLo5zZAq4bguJY8DBSD4teLHabaLEq",
  "key8": "4DvhibYirBK8BZqqkhWBUQhwCwqutoX4Wn5eRRNXH2a9kWpYxthg4KSizsqxR6APzUFLgBRfcJuxgATkWJi8qsm8",
  "key9": "3AEG2Xb9VxZi8uHThRyvBGwG5WfbszpR2kujPfvN7KwbpB7BDGQYqEBS5hZCp8gCMV7eNpgUQdtidSeKvn2sd666",
  "key10": "2sK11wy7YkoPiC1FGGxwThqgAQjRLMvtkynTPVFKkVYE1VyW1oaKGb8ir3CA78t92NggBZNzjDBw5Pi2UBCqgJba",
  "key11": "27E4jBvZctUjMyM466dPrBEYvMGonQ1esJAnd5Siz1cdASpocZH9AVRL8iHvEu4XU3iEUw3oNn43mzX7jQpDv2i5",
  "key12": "31LrfKHk1swPPnyF12LzxpkBDP5zsLiFj4MgXR5UmZuFB3HqanX5xtdQMzDKwBSePh5gJY4UifYCQCSkDK4mTqR5",
  "key13": "5CVnwW4TLzwL4mA5A6rWAXo9gJUtoXcE6T9jnRnmeMKrKWrUGcC6KA2dxNo67DAUZ3teg73zsBpmRdb2a7bp4iF5",
  "key14": "2qrZ2EbzPfhZzqxoD4P9jgw6PDnUMHYHKmVAJvvqbgunTFCUWFPBw5cpuUt44fJvj53UN4gzKrHaMkaMB71Gvf5P",
  "key15": "2vtbAMKnvP6S7PM5fFFuuk9ahgLFd8FgheEnjLMdWGx21M5UcRsTgNFPqVr1hoDXmGCW9mBkNk1wbYsiz5DFEQZQ",
  "key16": "4HaaqPh92fpT19w83FhUUk963bnxmxhaxxkHB7urxnfKtzLEqPerF3nmKBJNekqBWWfEzLU5vYYmE4bmgQVniSed",
  "key17": "v8iukon8ymoZiMtbA4FDWbkDbQxNnknxxdrzcoutAAfN7vmhbAnLfK9JivfCzsVRzgW8vmC1H3xKyk8XCSfpXdg",
  "key18": "2yTdUKj1rFjRGmsGRHhzTyRD8c3rKUE1snDYtcCneky34z8hc35S1yukzN5iQV2RGZSVcBne2kVGn8j1k1D5rxfC",
  "key19": "2Csp1GLb6nVgrr4rxfFAASRJm7F1x27uVXrw4ckPw3nVJSsMfBG64WomxpG7bm7e5vTh1qdQCfqge1gvkkgFzk8w",
  "key20": "55bp5sHAML7zhzAB8Mkaxssr5yUgs4SvcVx2t7t8P2nmaxDx5kf8JH8DcBnsfsWdSsoXmRk7ZF7KXoyvFvZb9E6e",
  "key21": "2jNrJnTRX9sGyv4BnCNW7GjTBZMq39VyNaSx7QDJbaPsntRNoMuTwEk3RDeZPPZWEnZVvMLN3tRFroM5CSe4KVYL",
  "key22": "3eLUUy2e69CZ1pSHnJt8ma41ANMrnRKG7FKAdHH9nUtVmsJxWsu9wCxtzT2seHMucAnhLep1KzkgE4awrLhvHKWF",
  "key23": "26kRbkXZwiFFfnQTngnH9e5dPZEavFt7BHzzZqfDQqtLFxFdssT5Lymm9WaAQK8K8vwjCknkvnXEfvTWe5kXaPuf",
  "key24": "5PJ85ueuFnaiVQjGtfw2ANCjmEd6V6FTPGnv53N7ecCESPNpsoPeyNaXi1HGi5hAH1tCLM22brPfxxXTG3ynLVzz",
  "key25": "2ra9aDGJThSbJwj1uG6ymNpCqXVCprVSCcA3Q3d2HTuRxzLGnksffwDVwD2BNedvE2hayT4gF3MGFJ6hqD3w5X5F",
  "key26": "Gwy9Y3YCVc2C2x48tkDeebSpT73vRbg7Y8HZJgW8Zs9UQfS61JYNwLH3XLsUXk5xk6bS98aP3cSXDbP19m7Qj4U"
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
