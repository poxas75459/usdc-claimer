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
    "5dfp7dp3hFQR9FVKQ1yCR2RPQdmPi5FKVRgCzzADKLQUyFm6iYgpR9D4LUJPcTpfXnxiKGC8HJWjRFYebqZsQgug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wboXBKEXJUFemUN8ufA2h1irPfpTtxKbsZ28nFYuyYpaRQJ9Bx2e7yQG9B7nzkF8iWuJaiBHbzWsurQRztavtVP",
  "key1": "3DdTmfcht8ZBqYWDmkFGhVRUBpkddyBycQVnTpzABF7iUGYDyLCx8SJeUcHDuxzkUr7jpv4bnUarWb1J5yxpuGkf",
  "key2": "3YpxcvJmkEQ4Sb2Tniaon1uo9bDYNF46hJYYtTW4xUtGmdZKirxuKQ9kBfwawnXMf5keSA9UVBHG1Ai9hQ7CuTpY",
  "key3": "4K38p8xqVFXaHwBQJN4h7cJbeNW3h3J3KNTWNxQrdLSYDzx7tbXwNVsvE42mkcQsL4Ao1aJr3g1TBMBbVSiJNiAo",
  "key4": "2iKGraboDhoZs5rpUcWk9MPnuLT7rQ6wsmk7HCLonFih8Gkry8ew4beMFr5HeWTm4qBsgWz7QgAzDYpxmGE5ZoF3",
  "key5": "2jiQmuEzRkLWLwaCYb9zkZRVyPGFNRyF28FCBCShXj7CeD2vS3ixM6ER4913LByW6SwJtCK9FUu5tD4DbbgmfrFM",
  "key6": "4UZjn5wXexhEBT5rCAxcroE82RGvEkLyV69W9fDwdw7nSEW2NYzbSrRiyVhzYCfMm6wPSx3hksiQeVS5z5oJYjQv",
  "key7": "5uWErTwENXyBEjKZB4CQMCA8nQ5ud4xespKKzRA5Rtuw1TgkHJwSeVAEp7RAzeJKRUKJXR29H5b3SS2zLLFBmCWK",
  "key8": "33CgbSpyZg17mSjnG5q5CdAk1fa3mhv24pfL5HWNvCt5G6aXCX5F2vpPksQWeskWs7DU1TDqAYchWsYgGeJyqtDH",
  "key9": "4gSQqkXiDABt1gGUgBtnhimAQdcxDz33Eab7WKTvjsCa6DABLRchzxm8UtL95W2W398sTnmid91rSpDL1Lj5FZ4U",
  "key10": "3M2t6Rq2DMdWZzMSTu8mRZjeLS1Ser9c46bZV1rtdVEGAbCxJUFHBmYWj1myujdVCa5MzsFS9rLWEA6xiY8oV7Fu",
  "key11": "4TJj6tYdqifaxxZvVHrCtLuGhnvXCXhJdP6JRYUj7pm13Rk35uo6gW4UoKYrgtxLAkEVAUFiQBVth1ZxGxPosRp6",
  "key12": "PEmyVBCUsSdL8twkKcoFFm1iVucYHPrh6HX2AaCCLoiA7aQKdFj2hMvGifWpF3J1nKgH3w9bxpxNzZ6amyNuzJp",
  "key13": "4JQLQANhFocib5vAmpXZK21PGzjUAggYrqeTyrss6eX9o2a84LmKTTn9DnpJ2rJzcoecxcU8Rtgnc3jYaoZbjjxW",
  "key14": "4UaEvVjb8UKB2bnJRTpFTFDxxuCZg2yEXGM2JkECYvJ4JTqnY4KnRNre5eswJrWfZ53WEhNXRn2FkeZdvvMKY6Up",
  "key15": "2LpPCeifkHB8duirHNerShkRSJ8x2zVDN89dghi6C19GZ11qSV7tRRjatXoks7Dc1btrqQGGpgLjNCbzeAeWHJEq",
  "key16": "5e2ZfRYmPPacbFSBxgH2dCyeDmhz7tvhSC2fDzLB2GWfBvViaYHg2sVMRLmgNw1zpberrPJUxR1zCanJEMehv5TH",
  "key17": "5eUiguVq85m13A3SpNmg66KewgEoBTT78C8KK94qcdvYb9onmh6JcDjU8SRBQnQqfJEFE7TwxHWe7F4mta31caQW",
  "key18": "3BaTFZrtyfG7do4MdmnBE8NmWist8erVPtjyVRTteBr7ArteNi5XkT9nDJNaqsn8LRzRdJiXnPTQDga9hi1r3aBL",
  "key19": "5GnQDmEdHADNTYfwvShXVQoWk7NGooTZK4Y7piDSQw9D8u2bD75gpndD9cB7JXsyWiDLyWoFuvbqd1qgoKYDJ7bZ",
  "key20": "ZqbpQYtX9VojGTbMD5xkdZNb9AvQTsWUt4tpMnR7La7g7YApuUgkJFtJBTFJCHiXdPnGqDL27UM1bPhekfxfPw9",
  "key21": "kuX3f3Lcjd72W6u7fHhBRuoQBPjc5ojpfQVgEQk6dnuFgeEoVXFwva8E8cS61wupULg7UxkUy9kfVWw4VRZZsYu",
  "key22": "5fMwfiiHTDp39EJidGCnEnUEmjcGMrKXu8DVWuaZCwisdjvSX2FMcGUY7eHosAc4nQYVM5HnVgDkuz9vvCDvNJGw",
  "key23": "5957bZk83j91yLUujQ1bxDBo6RAR7UFL3ySHy9DCJGMu8Ud9ijMMXNzPcqwaXFm5J47Btg8z4HvupSfa4bnwto6q",
  "key24": "4zGMjGMk5QTXLr64HKRpYBMCDBCwVK59fojNL3jWeQRB7viwVR4DeyBdpgH1qQNf7PVc8bwMpwtM6Qgz1Qc5iqF3",
  "key25": "464oJFSLiHhPnnj43jDfLRLFJkHkfZ8vkuVvbgtWbcNYTmxDrCTfX6kFoWvNu6kWsHpq8m9cFaLZdKfyyTgWMHah",
  "key26": "22ZdzCrLMf4zr6S9HtDnjHMyaheoEE9C4vav8PVCUr3m2TLx8rYEyM9Z7srQ4pdzn2T57qdeK9vbFM9DNqNeisE6",
  "key27": "2HTXiN9Zkou11mmca7pDNvvxbLYiRGT2SqiGKmKudANLKVyMMpTWNiwbqcqfvMBKk3q7P3yuzgaF8ZzBZJRAiiNy",
  "key28": "4x6GVpnzeSb6cfz1CnqrKQ1nP9xyBTaxMMctMAPtBjuiZzGsAa4t1GK3djufddhzFsszEmKhF7iuTbGFQSzsa822",
  "key29": "2YWvFEhq3t3DZGuPexvfByiT2uXTNwgHnGbUG9pLSE5Xg39yi6WDzarou4tHPtfBHSUNy9P466n7BzU5TPtdbSQK",
  "key30": "5wsQzCbYwJ8JpEmYJGX5ucTKUHWQAWvQEnh4R9PCoELZjyGbzUeo7nciHg9PoHn77LLcXN7P5ecp5z3dgPVqCfVF"
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
