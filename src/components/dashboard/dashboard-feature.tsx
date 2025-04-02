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
    "5c9o1kea9dSPo7WikftqBRb9Vj78CYN2f9VRwU4vWcAkzCwh3jwc1Yuc1aVNvN3QFqhCJxdtqD9ZeCanuajwohHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z8bRxqbDCLP1jTN92pRZPsq8jXo9Aw5vmXDTWhhueUtREPkoLFJ5emFc4C8Pr79A1RkH8de4H1xbKbtu2ZKgMyB",
  "key1": "3FCphAtdBZXdhjsXZ3APgLEtiozKTi838oDEgxitgFmsFbWuGt6dekLRCUGntcdMabbfth5ciPP41SzREnSUuwdR",
  "key2": "47o9vEzv6jcsHDNafwqvEvVwotHfZ7cLxADhyRb4Pj6MXgnTcG6hjHkPZ7bBN8ndraU64kAG1SGbhhR7sEbvbMqv",
  "key3": "4jRe91GRP6eCyiaf54W2fqTskgNY7XCPVybQoEhCijWfoVCD34zfo9Us9npm2BCCgue52drdWTPrB2X2jtJMLWax",
  "key4": "5AxDzm5qnTWeye6kny5C3UwkEkzo7EKKpSo2GDztjd7h8hhA64iHwmF8ahB5aMfH3cFjxXpKokuhqWGMnR8FVqYp",
  "key5": "29GHHC6qmXJKqh1vbxTBxwWNecYyz7wn9WDCEb5X4sBkNXrh8GF1LwqvsrCrd4io26DgRckZJLAPq1bEbrM1z4mf",
  "key6": "2L5iofxzMxuGBWThQWcfg3whe9RNdGe8RXmmEUwUV6eGMdXbgoKEVwmdxs78t7nJYBUQjsvSEZsD25t3bLntBQYo",
  "key7": "3hSsYBg9wAz3nE9Bg7rHCZweLy6zURtmcU8Gc41qQvHUSETneqVAA8KxG4UHVSbgTqTgcpBSH1nuR59ZKVyPgXJB",
  "key8": "5Uke2YyDmdspz6SsdknZjLwNoYhdXnn1Z9gJunZM7qXKCSFKTAAWoihf8L1JooDcE9VuejiSyX9sWgiRJr7V8xu7",
  "key9": "3gJKKvdHNBmwPNc2yD3QBDdW5FZLsKXuPxb192Z8y1vVMNzHtPMaAaGQQepa39cAj2GpuoeaGndUkV5h9xK9ipUU",
  "key10": "p5AWX87B4FM6g9CFcZNfrNSYx7VhDVtVNVFUniGgVQY3og8PAyqbXSJdc5xJeSrSV247v3Xdov8jjSkUz94ohgq",
  "key11": "6QMm2hev9xWkm3cNaHQTkBwaukkwH2jC57Cvc1TCh4dCTNmVLgHGDuqCacS5PAVLeaYn8AgyB7YaDrQHP4DQnBb",
  "key12": "3zZF6N861kWrCqDay5DUqTadwneoyyZfx1cETroCut9H2oJd3kymikpp41mCADCidVcRbin8aaT1148XwxfTHNUw",
  "key13": "pR51DxE7CnxVVEth3uhSsgk6J3fTKwnW7Z955Eox9jXaXy7sBe1XidmPvTf1otKTSYLexnQn3rVBfSwtuQZCnTq",
  "key14": "rpab4d7kAqaRSWVDSy5jGCEWiNbN9G1Ye3i2vq59oppmS6Gcxt3RR5S5ovMcrUtBaBd5Ntq6rbB3S2qTJZS3Tz8",
  "key15": "3ik7WmDgMzRxiHADy8vzYSpG83p4uxqR4AJPSqdGJcoXRz4EcUvsXFfueusc187zaxdBCHwnBJqx9ehvTfV3oAJN",
  "key16": "4hsSccU53me19mbE8yq7FZNNg7VgiRL37mU13coCEX4Pra4Z8DJvbhuNZHBSG5tDM7ZWXo4bfiLEYByq5kStqgju",
  "key17": "3oNzN3PDfN1gXFU5XYVJjcoKnqpCS3EnsbMj88FyN6TbVnP5DXCRdXi1WDKcjza4uFzNhe91NPrnuVk5tA2f5mTR",
  "key18": "2dyAp6n6Au2iybsCsL75atiApbHpyXtASwSWKWRdjNR8hVk62Y73jL67JN5As1NjSGky3DFAEXQeyry2LdUXDbzk",
  "key19": "3fhUVobtq2DGJ32DMGedB8CAhEbnDfEYx49TqbVMrWiKQPgphVTNizEkBVPF33RvDCwrWs6Rf1f7ppj4J2uXkwRH",
  "key20": "5bdMtFE1846mEuShJm83zADD3i5qsom1sVgA8BTCW35ZUM8dgsMxT8Ky2WVyiK64DjJsiV3mEqLJtcQjr8zKodvJ",
  "key21": "8wP5xeufXdwFxrjPxzw9nDgLgnUNqmRDuRvTkAVB8bzhsaR7rcMur1TK6gS3MSbp7VPAsRnwpfHESqbWQoW9ETS",
  "key22": "5RhjyujVZScmqGBj5Rs4WQYHHJZ5tFoS9bPgu8dpkEfr5c43u12VGavQYJCJrUGhaT5BCaoZtx1wN71mva1cL9qx",
  "key23": "2BqrXtqNfEWqsArD6FF4d3tKgX4rw8pJxpj32VHxH2zYKj7Cy6acHN8F7rS2yS1kR9rKAJVTgtMS71BdVxAeiHAs",
  "key24": "3uhdnWfAFoYivzoiGT7kVb3K56Vg5mov8NLkaYJgczzt9uNiVUyEhYP4vfgvqoGVfypne8SaE6ogagt4rppd1Ckg",
  "key25": "3BCfGqyPRa9Zu39rDF2xyCsmhyFkg7mmMHYS3j2t6pzdZSk8SwE5c8hNFREzsbYb7sAy71TATymtsAjK4fEJNdV6",
  "key26": "4kVNajaiexbBfkUgdQhKgFqtW6AXGEkXifLUJNyoXKJY1PHaGF4CxyDrUy6Ff5tAyZX9hLaonzNSiBSYVbJXgbus",
  "key27": "4oVP1tmdwtBaMHD5oPWDbPYBvAJQUwFR3smzRWYTzfrMDbjjK5cEEAFyF6eAhECqDKe7CwFkTXM6GQN7UmRaMybB",
  "key28": "2tZVSA6uVrVCDemDga7fKa2V9wUAx2VraGsXk8nnSHYrMesj2LSypEueEpkLAwivYu2eXeFqT17MsQ9x7kKqDmyi",
  "key29": "38YKckJL2S9Qq6nwJqqkpX2QTo35ZFZeb2sxnwLPaVaNek8tc5i7tonSdJ2RVd1CBkhkxm6SgYYGaEsGqUUFWvH1",
  "key30": "5mbwLAsxdxWTH9zBfrB2qN33TtnxXmHpNHnmUzuXnhFffsyGKYg9kDS8omvRZUqbVSqofAA59xvA8FXjcxcwM17J",
  "key31": "2Ss2kvNkymDkhdinfwRjtTu6XBFLJP6xNX4W7cKwMi6fNgCNTPDw7GMJrsEs2AWLAW3w7exwBTedT5ZWGWQLps4X",
  "key32": "2d4ce2WAaxZJ582cumzeLU4d2duagymH4a2F4pqsPgDXw9nKazP47ycZym8oMyADrUQewVj1xMBD6Bcpjtx3N6SZ",
  "key33": "548rDaYeoTNuYYZ5AfP4fD2cbRakPcNUF6RHq8KpeQZfEiB5KGiMhCjfcs3cat8RWnd6XkzSfvuPUVYyCVwyvm7j",
  "key34": "3daSge1XUjz6bJdgYFxu97EuwJWopajKrsUzAmmbDzkzh1JcJvVjfvA6sXxcPbGvCRvpfrfyJjBLazWXLW6gvPpM",
  "key35": "4dpESGuCBWoyXKoaXVKedq19vYCZCfs8XPRC3ntCUChAtFw1n9fr26s1SziN5a6mvMAQS49zmsGKmmnVzi45zqf4",
  "key36": "rbyt1p2Emd9KFNBnQMajzd5mXSh2VaZ9epUzTCXBsbLWYbctJyjBGwXicfDvtBVriArBvhCKuHEVfX1YAHCUUgS",
  "key37": "RXgJiHwNU8AxKobmKmyxrPrLVjGP2e47BqPeyGzcBM3KuUzjxXspPE4dWE4qkVjs8kZGs6mFfsjx4Cv9NaJycWu",
  "key38": "3yUt8ko4ECacfjY1GpwP41f6f1otAjJRp4DZJ2iygBMHGVc4aoYpT1FX9A3xxYkZgpun2nDp31egeLCwctJFMeSe",
  "key39": "5Rk9F2G2TGiCnbZLUAot18BcCBN4aWGjYNvCYYZYdfebDTXDp3sMPW3HzMb81hj1tJiMonVP7Q8vy7rZhQqApivF"
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
