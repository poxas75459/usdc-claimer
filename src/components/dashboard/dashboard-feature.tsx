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
    "2qBp8uio7iVB3mU72hinHVi5Se6r2MBqzRSVe61rJC55DyYv8uXaiQddQQFiUWog8X427k6inKZA4dk3u96aLRhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zEGSnYnZLmwDGMqe8dn9YNdxRYnsxCJqyUB81WbwcLQ3Z6YNPv4NXDv4gLJ9k1JtRqDZDSLvKuKKxifckHhdoMv",
  "key1": "3TYMoMAHTScSy49tj5iGoJQhh99t7KczJcyvDE25AuiuhfuwvwMc3KcZRUhr9dFEXjv8g9BdVkGSAF5vfQWp2dq2",
  "key2": "5ncT3sZZcXu1rzrweYGfeHdeXnkssHD54g2hKJBqNpGDG6gNfPQ85AnrhaPzmiXZRRgMY1TVPxgxd6qeQgXys2FZ",
  "key3": "2den6asQCRtqkezcR6eNkD9z8Ri5g9YWFGHNqzPoqFf7QvmZN8oZ6oTZv1uXrDMr9L9jZb3pkY6M9PwPN1x21kAL",
  "key4": "3mTssZoYFrowM1rbwNZAiY4nz6GMf48nJGRYs298636XFoGzNikVc7Du1bvZPgiRfNEFiBhhs4BD6dea4rDVZbkR",
  "key5": "5dZzr3aUJXFzUwDon5XGs4xccnsmnd61v9F1QYd26Mc7vLmt6g2BmHV8Pa8Xtuf4UNejT3KHiAnpXz4qVXa4xAia",
  "key6": "5LRkt5nztWttAVs7UWD65PLo5BBB1o1FzMPzgPxg9xdoQm3qgcMg5GLMz9onF9RY1qJaNqqoDNfResaiaoH9qkMT",
  "key7": "ui9U8bBazyn2eyfWDTWVM2YUGxQAbzPc7cAxPuM57Mo4GqUjbjVoUWU6hQWKZh7pRgQECD2bzfMs5F467dxGuW7",
  "key8": "4Xiu6gH22bogbs4KQYjgLgsBh3nHD7m31xTSvJJgKhLdmrVeXgrDxfDeP28bc1Awu6aAAR4zv3WpdRn1VknkSjRE",
  "key9": "4WtwpDdyoqtWZQGhkiAVvLmJ5LEKZBQpknpQ3Log8Zgziuzm6aFDNymKtMeAuwnUvN6h881ZdeCt7NieEkJbXnyE",
  "key10": "5dYGn9vR2VyhWGFiuXUBKVBh5ZqBziJt8DDwzJSydMPWNhAMdqojRCipTG3rTJ1db1tAznGSHMBJEZEXQD3vpcPF",
  "key11": "47oc6SrPySGUkb8rkeGhGMMdA22Snt7agXeAtKAsPeby4KCLvwgtqHRJ9CTqJ8EnKRUbDearrFiA19DvD53ocuYg",
  "key12": "47gaV3Ckr9PWXsfMwPERLnn1ndmBqm5eJ92bdUofc74hLANxzmyBDzwKgZm41RikTyp55wCH5EoNj7Ks6sXVqBJt",
  "key13": "2SeQD68tTEbDpvrtQ9wZ5xtRbsJr8eE33sVV3NwAgYGVKMP6U1CfCmDyyCtbXVagPrUVD5oJm9dMpLCnQJ2So4Rb",
  "key14": "32BV8FAmX1Tji9wMKSqYYMTe3BfqP3VywrkKnAX4AXCr7aSqPn933K4dsMyLj2qbThV3ob91DS8E13cgjYpTEZ8S",
  "key15": "2NDHV5Bt33RwnZSfTgg7vw5b5WXjKZkKC8nAwbtvkdKpKguasRhYLxZn7xiFTHfQQZKMaC5tG5NyXXuVJirxMWdQ",
  "key16": "3Cho7e8Q5r13pJLF4VziySmTkZrD8YQByxaW4g5fLiLSTG98BeRoRGqDjoBSKBxFRdmM1TTRMHcaSdiEFmsH5uT8",
  "key17": "5HQAE2ggMoKBY1eh4kSiU3usz4JEjnXE8EooodBMvyoEyBu4cYbtS31aajkU1ptkqkDG3TNWXrWZY27cRBRmeHbg",
  "key18": "5fke9mzfJ3AwEFpF5feWHV67HmDR7Pu3wT8Q1jL5KuVj8NTqAns5nnWN9Ne3zmgzT54kVt3SiaUzGhY4NKDJoZ2y",
  "key19": "3c9FbyMD91RLZ3t9EK35N4SMnbVNt1S7FPdqWtgeNdrZGV88sEBtF2QxB5Mc1aZCkyhcGmZLicwTMsvD5TCokovh",
  "key20": "2vZsi6veB356WMPRnY4Fv3MLEFKHvj7Y4GL1YrEeSNDCuahiMWey1v6jLfHKMmpB7VWJQnzCw6DbskgYW36MbmZ8",
  "key21": "66ystfoNuTxCpBgcTkbHHkouQgfAhsYwHB1ovpbBwK5aX9gs9ny6HEr6E4Yz3gSGp6tegebjRSaZtJdk6FsEoZKm",
  "key22": "2QV5a7H49be8SSxe8S4bz1ZnnK2iYDQ4aXsZAiatBiixqowytG5M9eRSWn4sWMpYUn1Ciug7YuyxoRoA6qEErZhx",
  "key23": "23azwsRruEGLvA4E85khTtRBcXhq7CppJY2BETNBLbAWMoYr1fYMQnucBQPEzP9DrPR5h5KNy6GzVYLVAoqauKv3",
  "key24": "3TWN22v4fGnmup5brDMranAHcgp5S2w5rjmGxa1nh4eXhjPZRQzMXo1S27t23pK8DUBMR722g8zHp32CSyBcJvtg",
  "key25": "4FhfQZkfUJXGivuKsZvDg8UnFddNWBjfSNaMuwA8w3uReJQGT7d3sxdKXc7Ta4cakJHrx83tVRKixLc32Y4Y378k",
  "key26": "5uyQQosP9Pr7wnM2GYV6UzrBB4fsganG4XNRArPEaytmfRouFTg2G6TQJZ77UWUqnAtBHcjA6dW9Ji2UGZ3NPGY4",
  "key27": "2j37XEQnQZKAQDeUzYrDk5dhRE3XZ9wzNoV7f4UzpMpzUSYe386VGnMMxCY3EHge5UAVrJT7uTjcuMwhbGV34yXK",
  "key28": "64yxHDB55K8w21wJDEKA8MkBjTkpAkNSmkTX6JGgEAqBVsdzKvyQnxyyW8tXwWFtQLTuJELTqdcNTwAjzr5jXhUL",
  "key29": "3Pia97NmS9TWfLBknG5TCb4YfukAC6Gmh7gBRcgeGfGegoQdDNwg8TfDJK8Rrpk9QKFKACyaLsrtM7xRZw2P78ut",
  "key30": "2dFZkYcFMJCvEQCgg8M3CBgChnkL5zF6EKbAtFTfiM4hzbv19ZUvGPGbppShNK77tQt4QWQgEbyHGP4DhsrprBtz",
  "key31": "5McqKtnteNzoruRsgn55Jni9m5ZjMZkk2iWdqjUK2KLQjyYMAGQsGSfeg6RUJ9RwcaJi1FcrRHtB7WSbvH5AeeuS",
  "key32": "3jnSk8Z4u1bYoALZozkHV7mu1torz5gcCe3XXwQ66iRc6Ze9sHj95ek7MFv4cXPQKG8AFYhsX6YVQSRMm3yt3Ryx",
  "key33": "66K1n3hS7nKHRdN3n3mPWksnyG3NFYUiw9FwETorMxPv2yWYUdiSnDQ4FH8cggWgg9vemypLZBLtjHAxprL4m5u6",
  "key34": "uHGx1w4jWccJQsJS6KiGjcHfWmeaq8rjwazBHv16r87uEvUs2NR2C1RndFqr1F91AoqhpZP5fRV2rZYLq3nKC9K"
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
