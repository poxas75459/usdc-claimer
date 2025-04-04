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
    "2Cwy8fSuPJcoZHA6CGs8im8kQsZXrJu2b8gTYnusVyKGmb6tzWQgWtw1syG183YKGAGrsLXnVCn7oPmEaiC1HujM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RExM4yEGeqiztLABWMSBiaDB3Lwq6CHXQy2NF1M2v34uzhG916yoFqQe35tjrq2jcdUXJvV9FK7Y4UAXaXWtDAE",
  "key1": "2BWSPMznmM7HdMi96PjzpfX4Lye5dd5PsX1Z99tFbxuspnDLuPjkr6J7CUVz5oqrPsXBwC1yYoZusU6MnZgtaPmZ",
  "key2": "4syYxrTC6WumwgDUCVfY2nP9tfVWYtio4Bp6ywVk3z9YsJ9PHRehuCCqdbkFsP48UzGbAQc88aEcq7NKe5npjVQt",
  "key3": "2Q5aFpJQUonUWRd68mDeGEcWnkgDpiPpw9kzbmeHhZpwdawYEZKoHNBKUUVsYZfty1bBhbcRE6EWzWbAPZQ9jZKz",
  "key4": "9tw1L1K6iBG5MKnRXUzVV8J9sobGVyp8bu9aBDs5AtGbbq8k7cNiWCuQh7YJPHFdC3KVKBsotVngRhjhdLtTTD1",
  "key5": "5wHnpHrXRr1FqUmY2TN8Tf8Fch9QFpakVqvFgcnYPFaSLvPoHAaP9okPLHteZ6zcDpfRFsfbVCtWoM2f7rsdAGyx",
  "key6": "2XREi4dvzJhRojnFryTGbz8SmUV6NnrX5E5Sg8wdDg8KPyLhVc33q1bKM9mvJpyjXnubdXiD5nNrtviUPQdJWKkT",
  "key7": "4Y8six1Ld3nHTxn6VsKPTAU3sAEcNGHMioCXfAd92J1NUG8zcRLNQWdwJ5xhTX3svqdLTPvkcoDCBy7EYBVrB9kt",
  "key8": "4cQJxLYL9ym9QgPitxqPbRM7TKXW4ozh4tyeHzyAc3hJyZiANEy9GtDrMtmb2ck95dfcBiFP6ekdrSncfaYf3Y59",
  "key9": "64kuZfQE2ieitwsVUqiS6tXgAyysMcDrpAwRmDMYGqRTANSJM4mpjS3drojQ9z4hGLTr4FkEwt1FcrbKXu3hiTxd",
  "key10": "3WSntVRKX6YaHwgzBDgdbNbo8kstRAoLGypzSoVa9HfQ4vxMgycKDw9zxR7a3X248MDNEJx1yBVGMUKR1GMT3dDw",
  "key11": "52NkfNWCvbC9NQqFFoNUiWL5MzZfLCXDpVCTLZywjBQm7Bxkzef6Q8YLDRm8QREo1YKS24aA9xcgB5FYBxvJ4nXP",
  "key12": "3vfWA8dXHb7frW2dxyM8iYNvD28AwfZTtQVAxQhkgq2QJ4u32fpf9K9k9ptAPN8RXLx9ZoBYRonneH7LXs8x4obu",
  "key13": "Fmm3NhJ9bQSu5otNBekrPuyPbR9jS87jLvJxMYBcitdSQMLRbN5T8pHgTPsbTBC4ZiZCXXfZGuUcADdCJZwMLaV",
  "key14": "sGtVG1ypTnTDf9eTnn6XMYSTqbToT65LmyozUkmtFCD2rzEu8tzon9dbGT5Y6Ht4zj4NdgWzVqCfSNs6zodFJ25",
  "key15": "3Njthbfd8GDQuW9CXneFmWb8hK2TF44quRkuKrn9K56ETqsET4uVLAH59bZvV64YmrdhYv1eTVSs3aqA8LkpSZfQ",
  "key16": "3qo2UcisRj76q6VAtv4A6AmxyMX9PVPZVYukdBXiLYXteU6SWCaFjLbYeKkPbAruUtMomsch9J2ccpZuDZKpYEwc",
  "key17": "3PXT32bCduPoZHusFTWZetFKerPC1VJR14xdph1NtPuRu249h72Wi22zY3cQZgYL3M3uFbBcNpSdaMKvEzrrVQiS",
  "key18": "pqoNaQrMVseMyRxhRDCiQqyCfA5E8CyTxYcELgmjxADHsWG5aorzx6s3aADJZyPBDsZZJ6vGz8i8GUNrGa48N36",
  "key19": "5DMnDNYgZHf58LFX84GcKkkt3LrdqiQHs362sfzj9D9UGiQctLhXUyvnDU2VnYHbP6cmxVto269MKuhTUFDfCoFj",
  "key20": "4XCmoE6EW9GnXXQtbdhzAo1Mekp4nNhz5wAwGHR1nywXRFhYU1vQR2tb6nJBdy6SyevxfswkLWmDxVjAM4s3ZjEf",
  "key21": "44TdZXfwPqNHZHgZyGny7B8aBUS9FaZaMeuTx4r35nBqMxyKX6SxJB2Mr8K8d2CNWtfvRmHdBwm4Yz5ArhHQtdsM",
  "key22": "UsXuU9TV96jTqoER9Pk6w5MNY7hC2jCFSkYh1zyPruMnC1tkREAi5kba2pMSXvuPBzaCWcbvhX2n5A7Fp5NtTek",
  "key23": "4hqA35FFed4GW34HiRVtAry9XcxLrqqE6ChCyceYFzrQggHKHLVuuNcsaPrN3YCux5BLxGDX9quk1EamBspoMMCD",
  "key24": "23kDikBNrAF1SUgrQfVQDpTtXoP27sNcwbT56XK4gAAa7C4GTbpSEdZgDeRnFd2oLc9uFNVzyDYy8TxS44W9uFG4",
  "key25": "2xhKAKM8m49kqmgu1jLq5EJnnJgmpGR7MC3UhRX4hEyvUUpvNVKmQrFFnu27S8DL8RuQRStg8Ca3W9gmCPjtmp89",
  "key26": "3qpxjrXrZDG57TJ4Y8QNW3bky9oBz6crrG6ihMJabByF43fBYDyMJybCFCeuei9vA72HNEsAxiJpiCiaz7dR6cfc",
  "key27": "4jR56fht6HUFcKSPxcgtsKg4FNbf9e3eK7fM4q9vccWHbsGZJhmXUUiVF5nKiQML5uZCFWgDmB1uwZ3C42smBEDm",
  "key28": "4kF7GThDUajqXrgit4VrjPPybwsoM756a3kQGE5rABM42xRrUgKpBBk7s5vT7K3ooSijBKT3bTY5DDLtUc8n55Nk",
  "key29": "2YWc9dm9JoXB2uy9LEzjDNXSp9hj31Kh2ejDQzomxUcQbBWNjmBvZc7NGh86BesskPCwqYfyjUBXSGFS1Z9sodjE",
  "key30": "3wg7PHCa8S2KhQH7a9iYS5PmNozZXLQEhTxVU8r6ubXcKpj7F8rBWAFyDxNnMS5cZMbgs9mvPosDqipwxTDnJ1sd",
  "key31": "5AacryyBdEHa2fkVHYqn7vdLxg6XeGLZVgompPU95WoGwyqKGefEFeCPyUNhCnvm7bWNHEaR1zNm73iEE16qXBpo",
  "key32": "4M5rt8of6MtwUF8Zds6qAjyFvYxp5cnWw1ienRioz9GQEZaEJ4h5k5mNjxkaGpogaYy4VRpFHTVPoscz4NTH3G8u",
  "key33": "5nrCXx6BY2uoR9DLkdNvZS7WaX79QpKuv9snkA3comR2WqJ5oeZs8PgsPEveZdrKfm7rrnXiRL4d8GjWkZuJvPPZ",
  "key34": "52X7gQN8bPLFfCp3Edp9AN4vxaZAi3JRZYZLEAp4TyiNhARVcFXJEGK3AL1BZTToV8RDR7reKbPRyZBEnYBFaW3U",
  "key35": "4mhgvz5r2o6fw1Th6p1p9Bp5kijhbWM7QMEi42Ja6c1kMbwjS2qjLdGxQCyWbnAMipFvkckp7KfiEM2owRjf6AXt",
  "key36": "4F87TvHNXwggpZZcacRmA1QqFA2a2U6ep7TJpNs5yH6ZypG9PxdC42x2TS5wszSEmGVnue8n1ba1yTLESjfTMb6w",
  "key37": "sv6zQY8txbsX4BgszGVcE4VujXVKicaJ65WW3BKbSAMbWZWH2xK5uTxVQwuwTTBZFDRoR3FXtmi9kTgSBRJ6Tqy",
  "key38": "2KAcjidepLHxEusQS4uSmFzrmRwPuVZtpnBGJVkNWUhogafRkhPq9X51oVZbQNw3FNKccfoYHgpP2Zfhgu9oDi1Z",
  "key39": "2sUpn5ZsYwoabFxjy7fJyMpjaho4jY2khhPfeFF9oqSRnWwMHCAizQcmxAjbi83ohYf3vDPsKB6PagP3CQ6EQwyL",
  "key40": "2DotgzQ1qbMPnif31MfGbiKLooND3jgptFF6tcWDUv8NAi3mVj5f6AMf8W1RCC4HnXjrr3tVFjipTGwRVnpkm3bv"
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
