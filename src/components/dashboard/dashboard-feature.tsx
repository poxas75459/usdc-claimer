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
    "4Ho2YVjB1NxgKBucq2rJ9bb1i1crdXa8jepgJGGUo48FMeMRXCz39TgxF4wVZMYWtC1vmkn8epprnfhKbHri3R5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56AUA3J1nFYwFSMaHvrbG3xvGZdDvSG29rQp8wxHso8Goq7bGP5JHt7T5vtJHGJsWdNkLe2qZ25kE7ohyXKWpxJF",
  "key1": "2Z7do1fbJ77u2ANGyQj4RsjFZx2y8FSbGxN7jdjBNfpzHZSqY9bBsU1a7bmBAzhaisxTJtp5R7AFt3evK7vLNGew",
  "key2": "3iTYAGMisj882CSy9UeWaocwpe6A4GFEAASVk2pjeZQ5GXp9LQi5a4F5ux22TdbL7gCpt4j8Z3BTPCeWsMJYHDG3",
  "key3": "64XWULoAtufLj7Z5h1mtReSpbtY5Zc91tXK6UVdY8aKhJk9qfBNJf3SRr1J4RtBYaoz91cY9n6SsrnG8Ui7xjaSf",
  "key4": "5Bo2vREQ4w2utHxjkpSQiiJ1y6kzfkBW2mBciSD5LHRRdqgXDG9JVu2aZvPkhZ7FJgpsYFKHWaCoaKZp8tvETU4n",
  "key5": "KgCb91jVoAPjdR3F78nULaScW2z2nWs8i4XZQ9SFSLhBLxep6zzDcA1kgRzpME2SSkVMttLWFasD2kMT7AokMmb",
  "key6": "K87dqhVWWUkkfkK7TifUBLQZyELTubhFvTiR44Hamgtnq9kxF1kAFFeVw7RDnvHGvpQLZ5AMW9XFJn6yDKCwBbc",
  "key7": "a2wC4hVLQry68FhHXphFrVCFtoi6TYVU84CCg9WDVA5c2j1m3UxSMYJJng6NpbVFukTv48ruUgydmUuicFPk6mj",
  "key8": "2CoPJMkVLv4qnqdJSKhzUx4fkD24BrwTAZ9evovKCfsjq9hRDZ27q9a2AtSzCPzvoLJzT68JWgoeGUvPXfhGQ7bh",
  "key9": "2E7zZSNuBx7ctgFu9qzPkuSZHjq2YMkcUxq4QWzc23EPUyRUtuGgLoXCMrrgwtfVqezRK1jbNhsSTbwhWc4BmsJ7",
  "key10": "51ngFyxNCGn3s5D5jhxPBGVExsUHcZbcxqakgJLhDcJVavhVNkAbhXESiVbwa3DAwRawfUurdn1pgEqmKikWF4gj",
  "key11": "467f7rANZnukQrjoCn999F2ZM5cBAjAGzq1mUSFmhUBApJutPWQCdwLRvTjtyzQg5nETnafCu6baP2N4cenbdiMF",
  "key12": "n1DvBwzBV8scZjuJLc6C3mkdHoRxCVoLfjW1FoiBo9WcvgQnVnBS1pecswAXcLAnYRxoQUKkaKzUoJuqiiu7mjM",
  "key13": "2Rgw1huFdacNjd12aGh3zcHAqJAmH5u4UJMTeKgt7QnBxhgZU9iVT1wozTCeQ6oZXRttrRZJpz4cXPB36trPtV19",
  "key14": "2TXLo7c1mcrXVtXiWzLKZEPQoLi3MUDJs1i7kNqbJrLqV8AJ2F9PDErjY4rg14NCWMy6584hr3L6J1mE67ApcLXi",
  "key15": "5of5U2vi3ftHksbE95226XL6whQAhXKpi3NifLNPMK3qKxBdC7uUFFCHPYS9Xf6Cabi5D6HwkDeEdVZbh6jp7WaB",
  "key16": "2qz2mH47KtDnX6Y4ELGt5bWjRiF7AWMCF6FMxVMy18CMnq5QR8RXJb3P1CMbjxjzvYDyFnZ3b3RSWp5Shtc6W661",
  "key17": "3NWGPULttUUu6EXYWngnGJj41SweSk4Lc4LjM7gtta2iXz4q7k3S3fxoPm2C6M15uDsthaGMd8XL6vY4b8tv2LiN",
  "key18": "57CuB97ArcQzibsncHdW9fgxjaEkU7tR8qvKb8kTB7sutpp5mdzLrMB9TG8uqkbqaPuSx9kWkHRBwjW5BPzp3ERK",
  "key19": "FFkyRoqTeZr4pKMEyQxvrbZqqozL2p4C6eiWucBp8bZcjesJiPNzk5HmfLwuvwnoTsK2eGzoaLSyBEbAxuyFEhy",
  "key20": "26C4w73NoJZYvWus9BW5h9aEeM1GDgMmufK8zFnoCx2KpQ7n823f3UfRNQEpZvnfzkaCzJotj5dUDSaQqbtUiY1F",
  "key21": "65MNCGeZbe8i6puaHVsQFNtt1rHmjT4ArmfFACrpqQvFTegqfCz2mtNg7ZYqTbX5Sz2xwmWwfY5Testc5gCE7fti",
  "key22": "46XihfHGNfJ4i4WUBhPXj1XRhUQytZBmvu5BCpxivwhueKHKPrduHR7AC4DYF6v22gkwvbDccAABMYsEPkyQzPMP",
  "key23": "4gJjrjkZ5x6RaFJazNLVU6M1vjULzqnTr52LmAznXDEsbZTiMLoscqhC1VkZYA4B4AyG8HxDAp3PvCV9ahnasGxf",
  "key24": "5haepi1qDKaH16NhSYZWQiriRs8RwpDkir2WjYSwESNhEN2U9Bp8UA3qTUvzyji2r8Jy9yigPPEiSHSKXiKsZqPW",
  "key25": "3Q9M2aKWxvgS38WcuT3kAFvj8XWwyFMzVGJ2DMi7dfwwK6z8VE7tLyZahohvCQvLFjryjbcnE8kysGTkfF7GTksu",
  "key26": "5PYFwzrgNCpWxqzoFRLKQiJM96pSnZwwjgQu4Pb1eAARR9rr2AMSeBvxkppP5MKHQtJsGfX8YGq6ci2acJLpVWMf",
  "key27": "2cAMCPF6KSZ9m4x48NnjHEcKf6iqJ4kXj6xJQ4dtSdRGKjvDkenCvsujMYyiE5yLnabphrUosis9Q3udzxCLkAr4",
  "key28": "2jox1tPGmNY5cVx2b6SKPNRuQJMPoryBXBm6ZoKzmVZvSz7DdkXgDWJ7wm5wZj7NhjXnvjddMYuq8aieXM5w3LCu",
  "key29": "3KGiqjGxADABbYFKcdzqFELN38FaHHFgsVD7jbcpzLsjtsDZWkRGDumi334nfFZ8KExgzyYKJe9j3X7bZGz3B2BM",
  "key30": "11NAwPdNh85Qqb8xdLxbayqwtVZnHjHwRyCmZeTeBdk4jjExnaSYg9m5rHTnKqqh4qdUvdBEMAmZahfUofXCqv",
  "key31": "4j2Fi8g8okn2TKQHBXi9rKUVj3HvCciuGksYJ3VMt1Yr4MWN1SLj36SagVt4NpG57g1bL7H456yd1RVGS7kBasnE",
  "key32": "3NHjEFtWjzyzEgxrtWRGkbVYbLWTz2AjCQvx8JXy23Lsv9x1DttkjJQgBfVctjmrBcB44mM7CdeStK1D8XUbGdtq"
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
