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
    "LPEykCKapTVTWWNmfL8ZRmRyEisEZReM6fRxwZzmS5TZ2i77xZhW1GVZTzS1bov3XxRzxXzsYnUYahdLBRekU5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ostW7ygaoAUAGoyepHdnqbc1gefpHvgXGA7PLhCCGL3UFZthmMSyb3MQJCkrNLPTQLE47YV5byiUggh5B9bzCFL",
  "key1": "55KZqJ4jnzTfczr2ZUq8FEv9cF5DeMAeaKw9KCxzbRixBAcq1pts4xv3tpfZBU827weLDmjB2Z9aaavzVK7gWtP7",
  "key2": "669s9o9J9PZEJfA2dyy4bru2dPKzA31fmmHn4RcFcuvod94VcFtvLPg2EHL5AEKAuvTVgCGWUYTa45Hm37QcjFhz",
  "key3": "cdcfmpwXxMvvWbZDmMtfkXPKbZKbv7XGBUZE9PCs99RGVtsYGZ17EsSn8zGx67vm1v9j1Y758oPHsjxHznmDXJy",
  "key4": "h57WhqT2raWpAbFurUjcziRyAQgJDpUkbRMT6ZR426ENvWBFts67kj8mgkgL4eFkvZocuCMVWRSTidj4MFuwJzE",
  "key5": "4Mqm7LH63Qi63X8DuKccC7xXaC8pebAkg4LQqFJnKebXaCreFm4NjZAhvbkjvaGPxqXq4RXUesjA2HfcLvjNgaCQ",
  "key6": "63tz3fHyQXr8vJWnfMEoCEFhWgxw1vKSZZ32BDdaxVW5HTmXufeC3vxaF2UbgwXSmYFeETme2ZcCEeX8ChqFpahj",
  "key7": "Hb83PP5a9xWPbmSGGRu3Gtn9xfV7zeGgJmxse8rPpxcpUB8CxnkZTXQCEjt2kBjyMhbHtQtNyALSZWHrzHKq4Xo",
  "key8": "4fk7KA8un48deJTdN9mpwjTfBNX1kGGvC5gzjPUvvXCxdR8S69JXzf5ECrUV8XL7thpvRNsMiYgxkNGXU7SqQMT6",
  "key9": "3UgNiuuiXMML9R4j6obQ8ZPAhGvfmRW7B3X4s9A9Lymucv23T42Kgzd3SfvgR9VmT6ibKs1e2u6tDbGqrSdefrYX",
  "key10": "3cgrj8vrxhgY572vbZR8RMARxcUkULqLSWVWgxjYXvKbTceZojdm44f79qKYxS2PtnqBs1rvbYnXrPTAps2C3NUM",
  "key11": "2dbHVfVjBnxc5rxTdRm6dNVaGXyXrUpktWrfMz3Brde9QBiWHSoL4VY1Dk5267MEkGnkseVa4ioA97GSsCDZ9vYh",
  "key12": "5kC9oH18yJUSSMn4aXKvz6fFobZe84MQczDa2QkFJX4ou6kZrMkGFSi5MNQduDyp9gZQqvzwaLEMhXHkzK8kqPsz",
  "key13": "2mRiKTeaoGpG4Zk9YY4iTdpCNMT7nMVm1yvUCoKsSWzuyB3AaoWxdMmbFUgoUQu8yVhQH39pTm1XNH1qBae9wgF7",
  "key14": "5foERsXKEg2L9CWt3knhiHHSpXrWeUiLopSHNqABX797haQUN5ZTQJSN8fRw9AmLao41w46PFqvSB552DiQYJD7a",
  "key15": "45z3vG5xjYtc14rx4cJ1s5vPdKX2tpQ1tkAenTBp9QTeoeorB2wMaN9XWQzbgrzGQXCdyMaVMQJ1FrhXu71CMCTN",
  "key16": "3TATJJNeZanhAE7bYDyDZRug2hZcq7xyzbnuGrztUy5kRw3DXDhYzZu9CfYwCN2y6Fpruv85Dxrdub9QbbPqxUAG",
  "key17": "54EeaKvtuU4ozfkhbNujLyuQsLHzMUruFGGV2BkvguSnnjzCj83Wx9Ni9aga7UuE62QZBazwxxw5ZXcV9dN9xyWv",
  "key18": "48nyTkUUPiR4QKvdDuNXX1HP2wYAfFaDJxJgHgEWz8Crh27kJR4ihmJe1x81hPxF1k2SJC3qb2qYPWZRpD8wDJhB",
  "key19": "58f7yJv2MJuV9YKBUn9JZL81Xjd5JgUpisFRSUsCES5J1SAJpjDrBGxAwDZAhaRBELJSHHnLT5YLVVAK79Hmnsnr",
  "key20": "2PJnxauh4SwT9WrLRofNGnyeeRRM4bAidMKVRoESRn4R7FZHUsscdZVrbotxzig7j9Sksd6yWMoaB1iv5XQuVL6m",
  "key21": "4eZyA5BZd8JAgwHfsQhaz9Q9A6yvbyccRoSZkxdXTsuaz4AjhAZzJNqPmzhFACVDuj4nrcwqmtDeUxWaMUZwk7qn",
  "key22": "59yEVozi15gP81BFrRxtp3Pc6ZjkjbZbbmgo8WnXohUqhj2AG73RezMRde8cRVRKLxQaqXA9JYWPXu4i3BfaDW1",
  "key23": "5Q9ens4vkbqBBLsQHCpwic3VVKkPQqckkSuphLUpTZC3tTfU4gArJkwxMwekFhD4bRB4Pude7rsBYeBq7xXJPfBE",
  "key24": "5HKXzDHzqproNwvqUqGK9zCSLvBwzQAy7xFj8shPq5ged84uw5FYMXtPBbQoJfUjVEEeEkb3GaJ5okykxxDdVezw",
  "key25": "V3Fu7agXQMcP8pebKNfLsMwX4TkQSsXBXTetgdfT42EqMjajVXNtgsXAywkJ81QhX5wdg7CjLk3sFzHEhwwSZuX",
  "key26": "4hNKRvARPKsgYkrJbnUamRu23WrUS3baxN6RWFTYAPPgrbjW7eTceK7BvzR9i1tjmFiddKywcuMsGi4B9AP9npbr",
  "key27": "62jy7rZAtrxm7BXReMsC2WrRzoBNHYZdhd2TLRTauziaHZoz5TghtKLaFM6pr5ytYHz2mJs92zknSi7ZBrtK2hv4",
  "key28": "55B3mYGpW6sBNjVKNrTmKp5LLzNBCuLfBYS9ipBZ7psFQrn8c5o2ogpKR1pihUtNNZM2YQqoKNs24g5do61xWZVU",
  "key29": "21AKEHGdw9c719zoYxBbnsSiiauSXiXLaaLbhYyFKPTbCFQkUu5DBeQQSFNN7rgZSTAZrgczmk7QB9k3tC7aokrz",
  "key30": "35SkH8uubba3oXtXHFMFMLiRxiLuBhiiUwvqpZpgarSPEbJw2jys3UUjX1fJS37hSMDTTWfXHWQgksNvTLM6SFzV",
  "key31": "2mZKg3GfNE2QMQA3X6tQENL5aXD29XVZ2rnSs6hMrhcL8mqFpAtK7RbNZJmC7ter7siEcWuF4PKDtDZbDzWEJ9vE",
  "key32": "62yzbRBhYEjGzY5fqVMJEvcmaYfdBmbPaghkNBzXyf9JPeqPDjgGtqyoohdNPzyYYhNRMm7uf8WzmuHGNx1NsUpJ",
  "key33": "4ULNN9PxmaYakPBM8LJSoJxTp8NF9Xrz1na7ZjxUxPNqaQgqQi6beKedbnkA6iUVFjbYEGmx4QRgjehrZZSHvr6",
  "key34": "3bu3gTzVvnEhuDn9ZkaYfnNzhNRmHHL1fjKcfTN8GTSPuep1xeiWSFap5aQ3AY1KpVkq97aYhBkDtftv38hpuyxV"
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
