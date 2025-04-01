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
    "46PxnrVzjiWD2XN3fKHdh97rNJ67f2146ofUAENQWkwMqrbYkwxhWyTVRyMByXo79dCQKgqZ6iFYJVFzgoefrg84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zJmS7gd4TFh3vFEqRjNXLyUjPhvdZpCjQi8wLkxrc5tkM8keBvXdKWZQDokg8NgKK6jgouwfnjToncEgYzvtahn",
  "key1": "2TGu1N6kB3EehtUFdgQE99B9exae39UHPSMg9wHGfvh3E5qepVxiJGpowboKMYKuFUrwYHXqocpxhTDFcLtNmjty",
  "key2": "puFKtG2F5R8iy3nQApgPqACf79sjMAAqgAxgj8AmZQuWDmQrUfrgZYA29rc3Ht4xxb8YhUXwve13Xu5Cx2SDhyR",
  "key3": "4caVGwdNUZP1NC8giyZDXBjcFX2iC1zPuNxyCjgdUUVq3acebpW5GwLwyLmpaPTGEvAaNX5sjXSTKPeEFTrjy24L",
  "key4": "63t1qfi8pEi7C6gd1kk4hkPhaDvj4rFVtTzxeFe1cz9F4eBUGqtGq6bkkdi25wMf1jtwvu6yhKPZtfce7ZGfMR5f",
  "key5": "3hzYxUyJ3BxLa4dX8Edb284negSskLfXjff9UUA11LJi6g7sR9b6iaokztHUZs167DvHhdkQUReRKJFaShAtnnxW",
  "key6": "2mzuGNTojtdWhAQXddRGsCyaXM7sa6Eh2Ekkm9e1M6aBxEK79AHDoHwxWj96Tzb73oE2q9XMjs936KcjZd1WSayP",
  "key7": "4DN7uoG86BzUnmU3H43rcJ9NVLZhDM5h8hXkUCvJgAztzMGVAC775X5siKUZADaQr2nEQPZqCJFxP95c6Fh1tCAQ",
  "key8": "22K9PPykAwTAcWkFU6KBRWYU8vbE2n8KhYqSgkVToug7Lxbsg3fo53fxTY3VZCGR7KJEqjoovXzNpCpySMPCudjo",
  "key9": "2ULpktptzFmx1SKhMUpXXFRnXskYhWpEWTegKTt1cGkQQihN1RccH2cBRj5MdfzVQp62hu2GEBLZusHqgAus1md2",
  "key10": "3F4v3c54DVRpvi8etoKZBmr1bHtpje4UfA1Pax5PKUDz5D2GYiqnTK5EtqehEVh82oX8v8Lq4Dv7w65AaajFKMNN",
  "key11": "3UXF6bBbZZjiP7YzGr7UvP7oLtj913tPvj5uBG4si95P6bBrzyAoDuDFBFR7yxRXmSMQ8ZAaJwvW7QrwQFjxqHu4",
  "key12": "xdUCMr1wJM8RQyvPuP5h58bwoA2tq93CgMZREhxMmgJCbCmXkwhg2KqSY6mx2qyWiiGjEeTvJMf24BP6cP19wLM",
  "key13": "2xRXvrBSgJeme8UmtyQMsmehremoPJQ1nFchFKX3NjpdpST3EhvS7nxeyqx3C8apKU4Qk8jWXsS9zDMHnjcaGiS5",
  "key14": "2953Ninr4irFWKBuY7rvSLhwid8a4LtKc6BTvykjMLc2EhUoP75jnRo1Hd5PWaqNBQ3cASUvKLFeqJ6viBPGaH41",
  "key15": "613Jr5h3TyrCau1tgbVzzbeDKACN3QDHtgpTntF1xpC3ufKeYWadKwFQ32WQkA9Unfk6kA8DgCGdebza2dQNehRx",
  "key16": "2onktNGx9aEZ7fYXj9kW5fPWhfT1BCcjw9Zxe8vKk5mkUoQiWywpjkjddk3rcahBhXCbVcy2TM3s8HT4MSh5CuTG",
  "key17": "4y1pS3vixRKK1ZfSyqmvdXaxwz9QvMgVox7tLLLUmYjzFDxvkZB8wLrJ5zY3EBcvsGRmS7HRUaickH4JsLkX1Nz9",
  "key18": "591kesneUJ9huymbAzxwKhbQV1uRP3mKSD8SQwwbmxmrqB5xp8mRsEbxh1Bb3NkkgM5DiwXGYRVohBbK6qpAtEVU",
  "key19": "REdBt2DQg96eQPpfWz45n1gdoKgkmzggs48E33BE8DGFvy4FvbBLrKH4PDqD8vGN7g8J83HoZQQsTrLtsDsdyLs",
  "key20": "7V8YgKRPThXqJw1PX6exT6sQH3AqBNrVavvogK3NCPYxg8a53cnELtJauY4gdZKMWSimwdd8xB7sgBqM8RB38es",
  "key21": "5KcAbQpaB9TDq67vn6gW38ncukqBJcA6akUyjegj37Qu87BPFUAyn3Rhh2tjp4zum4PMzbYCfWc1otg5UGfEFcVK",
  "key22": "39MRUJzFbqnbQkSoC9CQU6zhi3ivgHiKG73Y37cdncpcxS7hQB5Gph1wi3wesVVfrxP43cQTG3vv1boedRkWsYZZ",
  "key23": "4XpjhJsqnHjiYK3D41kLydwqYC8kCLC7i44unXZz3iULpResei4ctSRRRH2qGY7GiPqRBdJutR3PvcRCMduWMr9H",
  "key24": "2FYN8LHEdZZpxhdD3L3PpE8fEzWGwyhkJQo4Meb5eKgXyG3wPTdLqJZZmBQ25yHwaPpN8wwp1K3wr3KYfF6DG7Rz",
  "key25": "3Kq9t7ciWRiZCuDhmE9zCpjzVsyDxYc3DJ3PKWoLgnwZ1Q5nG48kZ7JrRsTZEZbEoJkbUBB6NyQJCNAAq2X4XUxW"
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
