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
    "3rBSaNcK8HTFhXoeoGy6yyfFoZxtu8tBXdNrBWsrDHBC4wpm82FbSWS2tofEN3dAecpwx1YPg4s2oZLExrcY3v2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yUALVhyQZCEfAbFc8QgmneZRT19jQTsMtnFLi1C9ZiwafXkrPSBefirc2cY7wdRxoaSw1zxVUVvCJJtj55S8pL1",
  "key1": "5H63foZ4XA9ZjWfWXXyPfUvis5rQfBtwxTZceMjjtRMuRQWBckaY7yVMjg5pu2wsQWAhj9uCtb5Y4rsXyePZNqNo",
  "key2": "4tDhYrKRK2DSn5fPF4okpysaDkxTjdzGXJQmsnAVjCRxLiZGM4T3K3EQ4FhTjfxVcsYycnKjsMGPhsFWcCEe6epN",
  "key3": "2Q5kuo2m23VQoYum92LYEcvjvXeXvUS98GeAPhFcPVMMpCr3bojSHhPDZSeygfxVhPP52VWte26i4KbTph3dZKeE",
  "key4": "jQdH98fCzCeF8CWPYSenPf8Kd7dEBWpiBF5oLSHnZPh9F5rtbRAY3icmFKvkFh6Wj6CquFfHp2yokeAHFUY3y5k",
  "key5": "4SbA4pjtHr3gazvf36KhptYum9DXJZifYm3R7s3ATWqH9q6p4nWfNfCYtX99beTtiKa393NvoMVymggygKgUrtD6",
  "key6": "2qredFp8bJSybkhPRRSCS5UKHX9Ec3jie3HdUVgUo3oU8kfNXL882aNKfVLGFdpsi9r2dc1ouTyHcLseLDFjpTEC",
  "key7": "3z4i4t4XBqwojrNhknghoM39Kka87TY2bbzint9ALeXPLSZoX8iTRyoXnyWUaHEa72RMYh7jX6b6EJ1gWCbsE5Mx",
  "key8": "TK48Mc9iiEC2FFifwYGL58b4J5pryrJBs8jeXDgwP7eQP6TEKifspQhWMVTmbM7WYA24BccEH99WMw6pmj9gEse",
  "key9": "23gMC54L83d2MaYG7eoR4JWKFroL6UThyZMuTc46sGyFDTEo93ZyJvR7CYgL3M9MoHDGhdJvm1zSqSZ6xWyP43tr",
  "key10": "67efaCBi7nUFZGhETKCQViuje4w7aZCyDBCYXfPbVtdJnwdYbZPqe9oMoinV1kvSSSAcqsGQAkV7X9LZ7SQUgYUN",
  "key11": "3SxMEyXZDsuE68Ti4PKjsT5e3avYnguZexijHFbm915FiUwP1ENB5aB2Q7JRVRbWmJYUd8bemevMSu2yQq4D4qMD",
  "key12": "42czxq5LT96CbqujEaQLYrQ8CRVjX9seoZayn5bJqYakxfd13VyMB3a5omj5gtmUPQpmvwHqLzRUk4WKbr512cJA",
  "key13": "gkKKUwzSfyMzuHyPSecrD9GxZ7QoqB2AciKGWFpSU1JJAhbEeyHZdyHBmHkbsdrkhvfjTCyE6QMcyA5P6HtuEc5",
  "key14": "3u8S7Yx5WX6Nrpek5PitQmXWdW6VSi1LWVpNZ2AM8H4fYvosvgADAUjtYHUi4EaYeiWyZGGr5KcJNxxD81oZhx9V",
  "key15": "5J76Bjy1fQ1hp7GbW9PJgQcXjJdELeCz3ZwfjPawzsLtranCFSyqThisrZFq1pyDbnHh3Qvjcp6dVsTH2TRyNZLP",
  "key16": "5ssKbwiJ47HDWCXrGb96AUSPFU3jUDHJkLqyhKNnwgmrjE9tchtFYKqmufA8MRJHddfmpLTLTygUdtpaYCe9QULN",
  "key17": "2aXeWY3mAmZNCAuYwudWP75PzMfLe63wgA386gR9z12q4T6t3uhk6nkGrTP8WB9pjo2UxE4CntNiBFcYzbhB9ynm",
  "key18": "4hz6DhhAmwWu9WpSpYwwvSEJQFmwzx9ong9KGJ3HtCpw7ZqtMcZb62ddBiCJYak21cXim897WwksJMon5jzDX1Vw",
  "key19": "5EiD5PGbsQdq9UW4etcmdiGom44dPaZ12tQfTMeSpo7v6bH6XCtPzwECDji8QuRXyf3CwY2pKZgczpuUCzjLvbJb",
  "key20": "4wN7kmyc8LWGhU41r3rEKXGaA71tATGGGbiEaAAqjiHuBupPjzGn4srdFJGQXswswXHpwQVCiLnEkVY6wKm3UUgL",
  "key21": "4rxwvng9hb1woDgj5frqeXDGSj3j6k3wEtbFiFtmypWgvkdZQ2e5hjyKMbiEbjWSiNGAswnmufNYB78E7QYFxAkH",
  "key22": "4pioQNCdXhQFaei8WQTjkDNmWL6NjdtZ4UC3ZqFbgCJee2ZhxuzYWzPzvjZorAPCZ5AVrvNxoU8CBLnLKTLR5Xjb",
  "key23": "2f4sBajmQeTEDA7PfVndrpdvoPEN7RzQBbJb88m9DjQ4jLsdoWWwYUfthWcZ1RR8vqf7HU3gSWxWPHvje4ZdrurL",
  "key24": "3nnpEj8FHmLKhXMHTiY7K1bbTnyL4k4frsUhMgbxMLPe9zKRyMc2c27B5qrt8bbMfrcbecSUgVoTweCrN1ydacBb",
  "key25": "5GRNhkEfise1YEhhTpawSVoQpmNVgi4tGnKwJjW1NP6Ny3z37CDHFo6cP5bMQo2Kz8XEH9dtZYAzFqyWB8B5rYpT",
  "key26": "2XAr6RV2WCZrjPA5ndLAUYXYL51UqBUoUdZct9zJLLNLWZV9Rd1iUyeuYnBrj1cuAG4aHZVPCqxtZkjfBV7kTx2c",
  "key27": "2KDkXwDUmYRJn7dEYVNkC18VJ5wzErbU7Fv3S5RY5PpncKxPPtkSRF2GpP6uLKj1TgNETfwa5w4RHWbcpKjEgZGk",
  "key28": "SAoHyyWNJWvo1AZFXRZ5sHwsJ8XyHbt6CJ8t7rosTvLSu3r88vpVBrRqZdJURen5DZERYuVGNvGtCdQ4U3Fybxq",
  "key29": "2tXMZwrtkh4UDTp7eUaJVY3uSZq7XV1ykd36uk4rZrKwwTAJJsz55gLBHHuhsD9N7PQdTC3NFaNnHpxmREtQfobr",
  "key30": "4scXTFL8QRNTTpxkegGjozUoGmVQZkbLcdQqVVd2nffufy8PzvRHt1HdkTnQnNB88kDD8JyAtBWAUKccpkonePTq",
  "key31": "X4Bx2udCAZtHhh5VoK4RiPPYyvFCtzcnvZKSH3xuG41MW2ZNGjMGrV7rMMoVR2gYP2vuGSZ8B4LUCedvRjxSggN",
  "key32": "4MHfAE8pEz7S7hUpBmfV7UGSnbQD5zRYyVMZhS9TE4jR5p1hMqYf4Y3Eohhh2eQbyE53CW7NrzTWt6iZMj5BHA5g",
  "key33": "4ihgtP2kpwcoTfVpHwmpVTm7gw54PEBB669CasmLuPwmL4zFeTTAfKoXcV5KAuyDT3Ey28AbXM5UG8KhfF36bC5W",
  "key34": "2Fo26Tkk5Rz6jaJsDthNEkVD33anBHWjivqR7sJtprkVuqgdaSD7LkTUDJMGvh8c4h9LdFg3erzgP6yfky2NWtq6",
  "key35": "3p7GmTAMwS7A2KCpEXmSduZvEcaG3RRvAc8w4iPWBG9sthqyPR1r12JiaPEv5ejgtrxGp8ytrFV2TqnH8cPu7CwL",
  "key36": "MokSvSJFSCEsKHd5ifyaacsvR7HubLjfBZ8DcRi12f1oKsxgK3WKkkTiHGjeCU3ojdkWrwXKbevp8ptziq84TPU",
  "key37": "3S58AAuhXVYHX9nV9jQSS3vUn5xdCkWiyDTZ49VkJK1fpFQXUAB9sizBUPZYHEMx84jDfeidwCh6zLpo2Zp6xBmS"
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
