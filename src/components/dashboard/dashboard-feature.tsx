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
    "zuVXbiLQDwEeyrXMUMarqaERkzZD1BXpSUzG3CeSKo6MbV8ABGBF5ewZEoSRSkxSpquveqjodQC6XTgWu1sBjiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "283fkpTUaNBscz2dQnr5zUCfue3JpX6Zw9YE4Y8Zuy9JzKq1iaR2xcMZUhpYiCLgN3vKqptmSrX2zC8uj3UGRTgv",
  "key1": "kQWP2UN4wGQDs6kTU76B2ZxBWCsrE2SERAKY3J9k4xBej7SevWKGEiM4JePvjSnRsj5d6nSEiVr8hLBootoiAFt",
  "key2": "5cQhCQfHy9V87FwXWF9zgjTwc8MSo7k5fr3V8AEV2c2zBPoX6L3MTAVQc3qnTyFuF1aaz6qpPpdiEFX2dtjJNbid",
  "key3": "eSKG7eBXAWuNoHHhpUgYXteBSCC1QKw6DLADzdUqwx4HVFUqtuc1DUCpu3u3Msg2b6En18TCsQmqYiYRb4zmJUF",
  "key4": "3fetyDknisbbZa1Qj2ncRwCw27FTYXkHZYqVT7w4oDKpiaX6HXWNTiBJkCeooeSnTJjwiCyYTjti69pcbyKrqheL",
  "key5": "3uBmN5P9xzDmJPc2XsmQdDaUU9p8UqFzPgeh64b1pzbanGzGZ8kz2i1MMqK8cbXZef9oxLDgkpud9fUEe2P2LsDp",
  "key6": "41ziXJGjZc44W5cbuLWEuBNUmvgS6KE4HQXwfxv7VhS4m9znhrH5VewLo7cD81Tbv7zJq8eMQK6eYAkDVs3tucya",
  "key7": "fZy7qWPtFb7brAz6KwsQaA9QDjXQ85sNrNUiNhMVsd7z6pSPrrQVqpeBLwFK99rSfZxneXSuSmYUTf6TyBJizhg",
  "key8": "4kV8hxZGCv9FHmKcuNpzwcCidZH6qJzGehWS83UwprsMpGBP6uWHipyjA66rX5s1Xv1iawx2ybF37jdsUEchAsKV",
  "key9": "cWvsmzFLnKcwycgfUmKHe8x1DmNCuFbFL1YnPbTwZpcNJdt3hSWzMPP9YpTe4T6nXoa6y85mSvR3xizJokqcGxW",
  "key10": "31BkSouMNhMhXE6wQ9pQ2DPXkbbLoZNHuHjZW5WDNu1G4Vi1UV7vyrdgH9hcmR7kY4y8mwafaCjby9CxbsQ6ds21",
  "key11": "5NDAUw4XC83umg8cUzdoZD16oT6TjgiUGn56nJ2oPeXDdQVxJj4o5GXfsgxgdnaMsEu9Bw3UtBVt79ed5SNvzQo7",
  "key12": "4iysJE52DaZePN9TFcFUU63iYyRVmNkAzi7xq1dGPeLkLJAoRQaoNVV7kwjgRE4WMMRZ3ht4bf9HoA1YwCh8qpgD",
  "key13": "28ckm3Wa3oLouKxd4uHd6RNzq1VDXTgUjNQZHtr89W1RPtc4HK4CBGCgdp23fhXjShzBS5psYNUp6RzC3jaSZebW",
  "key14": "egBrLHhJsKQa4HdWg6bYmvq5HBr59AF75p9PRehCc9pZ7XVPxcABjfkSo4iP9C22A7Gzu5Y5zsSYu9Tc8L4ZWSU",
  "key15": "3PfgE5d4q5cYD4sFjoDmGfCWFT9q6E965NpWgacB6Wscsihc1g9X1RrBQ4WDPykfj9TEofoQSy3QTWSuMR4Zm5Gx",
  "key16": "59cGrM6BKe8JNDWr4EPuoaWMe3DvBnZUrK2cfSBoXQEZa5Cg8RUz2XVMjcNqikbXMZ6nYkyCTWEVW6EtqDNbcUCN",
  "key17": "5D6uVVcwPNxmJx2i2kdigHZHA6HDAiSP8DizAbAPionkoC2tZh6iAre2aKr3GqQqgBsiokJZHD5HFYGLVWr4Htx5",
  "key18": "N7x8rtW3ZRZ8Rpwb4QEyDYH2REpuefyUQtQQvgqqiuaHgvZqxkZbpUUYx1y74F1YbRLRinaDBt9E1ioZVP26t3y",
  "key19": "2zhJ95A85kYj7Jb4jJHN11MTNArT8uzAjHAoB85osfbzricQvkmJ32MfECXCkY8sC53CwJyFocP4JutUEmGgGaM7",
  "key20": "2w262FiR52ahB3yVuLMEzFQhGUWChefqdJfb2QdgrQJYsUUTb3MW5eBiBNk4YQfLjVE45AagWgDW5xujsRqPyuhs",
  "key21": "5LeJbGsv1wWJbZahqYeN7LiUbuHiKyqRvJLqVBq2E2PEGXUYHq5ZtVzUdYgQg4KK6eandMW9LvF7neZu27qZQx4a",
  "key22": "34JTqKMoQmzXpcncpxPXmaSwYDPeTkSLN2y8SCJJ4imqVpGajJaRkDVqskmGH1XDvNVYSRzBcUsp26ApSZnuPV1q",
  "key23": "2o6ZF1rf2CnhkoirkNSkVoqGF4uUhVnJjk6NxYhsTmwE3A5Ra3i6abBV32XuFpPy5WgfnvCTbAazrtN6GbiXXcic",
  "key24": "yFae7z5SMf2EFYLuCuVdYEwAK3d6addDLQF1KDThDLpNZrLnr7G4zQ1BFM9Deh6eRaeKZAFxuiSsUvMRmVMdHpy",
  "key25": "4L9rNKShsEjAfKKEody9XuMKZjC2zLZz8gBDjutWuXUAL57CP767KAYanSXy5Y8aCMaVSatuCSCyZKGq1CSQoU3y",
  "key26": "2SE1QQn5pxpQ9QVz6L76gCAo58KbbS16FiTwYbuEFkV1hiCC6Gw76S2vMZYVS6N4tgzgumrQfYvmeSkMfZb5jKY",
  "key27": "3pgFWr99znbx8iPrTtYEbzbPU5kAkfot4ge7jQmKjRgXqAVSNgdcPoin2zVpagVj1RK4Tz9LnV1aEuj6wftJZQPz",
  "key28": "4e8ZKdMcnC1PcQXLSM9yxpHAtDUzRsbjUjmQd8Y9rF6YyFk6U4hLxwExw9tRcNQHcU1dUAZQt1ksvS5nFNrfpRM1",
  "key29": "XDmM652R8kmQHG75TzELUFC72uDJRzDogsczJH5Gsc6HnALs38SMQG6SxnyeGUGPB1LbvNCnM9CANou2GKCsJzS",
  "key30": "4cgqqrSosh7JSfTB4tJdN1wHCWLJVkqMkY4nHMjCmavFS8SkjgEeu5qFBddZZabhjEHTKQpFhV2ZT7iCeUVudHRX",
  "key31": "4NVpEEV1c39r4tYV9wv9dHnNqgUWMDtGrYzNHvCw77H9v8uEfN9pgXX2MAa4y2Lb6pBpwgZeDrhizqX7UXnk6wqp",
  "key32": "5YyvC9A8wqCP9bR5VVyq5o7zQaaLok7TEjv9KLj2VuwG7ymT5EScJgoGG4vt8Se3bXbbFXZK6QgmDEvoH6f4y8k3"
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
