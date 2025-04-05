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
    "5punbAz87Fsir93646XsGrJdTcrS5rPLjr5Do4B89myHCcU9ToDHo2ccNMNPh8359dU323XB1QArxnmAQicXJs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yR27KdqZWjKSJK22JLTQg4jQuVTjDN3jQfs8yuQjefBjL9Axjp4FuC5DDEUtnTp1e8hPzQue6oaqT6f4W2bn4h9",
  "key1": "4o3WwBcXkMTTegRT1tL95vrkWmfFfBoNDfPf3jG3HWnvxCY64LBX7Qyc1zJxFX1FiWFugTq9y2SmQ5SPe87KREVg",
  "key2": "5Urk9TdTbtxJthzBXks8pSBL7S5SkEjriaihnrFjA94LZsGdowncCeGg6drSp2fvVfmYgkxZstDjhFmq44T8pJ91",
  "key3": "3xwiuBxMu6sGnsbvG6GN8p7SCmdjrTMzY9ahPuKtHxH17iRzi87QYe2sjM1dK43tGaKwrnLo6HXVVrQCG4X23L4Z",
  "key4": "4veQZR2A1mXWKukPk2t6MeModVKMpeQDj4PeD1aXfhZmsktLoKDUtgA7Wk6Fo5iTG1iaSyQivhjyEDNPg2HGNKzD",
  "key5": "3oEmmHC1M4N1GZnC4grvrW9WcxwkCP6PxYwfqq3fPQ7iT3a1Euw8DPrnJjJhVLtfrm8R33Lw1G8waEvdnP8YjZHe",
  "key6": "4Bu7BzcYdRBBSX3tPSb6hy6KEb43W5qPacfwzYiNhsGPsH758JHA5CZ7MYUPGyMgjJxMzHrZfAhEZ14zdYgLrXSa",
  "key7": "5oQqURBEGtdVQKyKXa1NekLv4E2dueodg51a8ULKcmSH6dQBQrTr9iHAq5Gm6AyAeKb8TDaXnd2zRckhScBZBNbH",
  "key8": "5fLeMFiFAhRHENKyc8D4C8KSHmE8V8B5XQjeM9Th7XP76N5RG7Fm9rkEdqwGHAu8i2QZYe97eUUnNSTxNhg43XJV",
  "key9": "4txSd9fYLVqQWMwECioxpc8XKEVHeoaKuejc61bq59ApyyfBo1A53aZmtGFCvvP7CTHCJyha5RwQc3eEeFVvSmTu",
  "key10": "4y7yHfhEDg67EPXSFMHGjddHDqdkkfSgyoUKm5AkgYscs8g2D6grp4ZtFbh6ekBCEAa6ZknXkgdcPmQXfaVkPZAt",
  "key11": "2683X5xkVAXY4ZWsn8rfTzY2CSSrPEdW6dJvEXfPbZab1N3P7QeSVv4gcjRs1yb5tovpd7cPsw4Y4HJX6J8w7pux",
  "key12": "4wcmZurqw4GQiMjFMEndoQy5ZKkFJWVqepUeRXLa84NMpEVqa2Ap1kVQAXQPLqj29eX2NiQ1HngfvW2uHukNAEUn",
  "key13": "5BCHqXiornBvuAXwwvLM6BHtnRrpvAe4TLeiaeQtspXFaic39MSqSR5bwdJQGToHXQZSe6qLqcSdPf76auDiyvK5",
  "key14": "5dKSjCgS925227WEZdyccu1GspfvsH2H5ybkqKzdDbZNSPNoyQXHDjKZV7GBZbhzSqfs5KpuLrwqNnpZKvYqoJ8x",
  "key15": "3HMcd7V3PdGeyJQ9uk1aMPWFpUt1MFhX56iojRdpF3whHftFxLdTwBv4q5VhLpr2syGeS2kRttRem5pJdqKDNHzr",
  "key16": "3A4bo5Pq98kCGA1zsZkwV2ktTajyKpEikAQNbzzYSqc1zEjMiAJxxY8xt3vbnqwXr71gjNCCKUUAFtTtYxZhDJY3",
  "key17": "3LyeXyDGkoJQabQgzyxvsZeoRwWwfyQKSVaVgVLC76BzXaYchT6QCwesgn3WjriVouZDn65TYjL7LsFu1Udq4jUT",
  "key18": "4fEbXHznkMb4AcFJ7CfeHBQ9tDrXHALXkx5y8jTW2iGSy8CV5T7GcdFHFpr6JV4FkJbQFWTWwf5K3WPc8ToYUiFa",
  "key19": "hnHgcE3jzfLHXhccT3dj4LdBBo8S6mSRFhzkxrCopLmUSp8T96U5QDnS73uCsChJkswy2QEGes92y5536qw721N",
  "key20": "2keb6u2YvcyF3G4jVcZLPXyPC6XyRsiFNTXSZPLLYsCMmmXEoCzXsrb5wmcw3KqUtQjiQiBo1SvnUWSqxyaWJU8m",
  "key21": "3QqLEohqgW3gtkHgG8bnLppFv1iR3a8M1eu4RsUjkvCKs8XfVXy5qDFZTkZbm1MhnBwkqVwHLSJ6TNTujVXF7oqp",
  "key22": "5HE9GL5ST2JzktChAURcnhA3YSXjct1yqe6Tw1zRGhFaBkgrXjZseXpUmsvuojZ92zFLMQW3MtetyB7xUoucsbwC",
  "key23": "3KrSo8mortZrZCR3xKNXH1Y88ni1DFQKj8M3YyMYfEgoSevwukiEpLpo9yt3SvUgP3SMJsfi6EDGkeKreaWbG8Uy",
  "key24": "vLWUj2uT1WrQbqbpr2oWVMU24nmg9RaZLHjyf4wdDmyPwFjYeg1mwwDMYjBaff6kZjPFNJitAc8LqeEAgWQE3TP",
  "key25": "3iYJHZA2wViKo77LfyVRn6znT6ExTNYx7mDv8SqPJ3HCTyK24d8o3XSotEGmCdD37SviKmLojxabmgjNB8zftZDb",
  "key26": "5dupCUcZ4fGG7NmNi4GrQ2MGux48zXbN2mJ5j7oMmK8e7Lowf2EZZu8bMLfTLPYvfvwBXpoVER1wifkdW5T95s3n",
  "key27": "2ozT8Y1sPdTKTrfNwq9gJTryLLPcgzTpqty6ydpd4QXHUNta2jrcNdVG1BySBdJNyRkwfHHmQ32htAZVy7LnPkMc",
  "key28": "24FQ1Zf3FdZvQvbwUu7if3ak9mHY15K84uisxRfZmokbaAzL7XMv5QTbrzWUmpVS3zZ1oQ8En8tQstTw2fkL8cT5",
  "key29": "4CFekzmM6mAZo8QJ6c88ErfM6maQJeHfGKRHt8dL5tkwB1WRnb96ykcXUbg6Xohv6he1LEiuxS85Xv47LwpaXy73",
  "key30": "5khHVcv3LS9nkCbU9vXZCsvvcTiCNHrhbswwqVuY45B769bh6zF8gJs8Y7dtQa18JPoNoAfFz5gb25bmVcERJWXx",
  "key31": "4Tby9PyT2LX93Qdpux6yPQkfVUQo1B6AKXNaZ4g5SjD5bJDqDjx78MVnHecHYo1iCU77eeSPQsHUq1bHSnoUPsVk",
  "key32": "2jExnefHXHg75QNYPheBez45Z6JFv6SJVhQwuku6BBJrciXSkGzpuxwGnqy14GPDhZq5CCkSKXJdocTFJZk6v3xZ",
  "key33": "24JwpjzLiuM8ib8Fo1rGC7MrvVMaUbNfoiGfGPiDaZR8G2VEuHxpkQsCzNj8ZVT8wXhqU3G73MyYhCNZhyW6VPT3",
  "key34": "2F54FFSpX61zmnHa7GwXb31fTCTXuGk1R9iUDrrg7t8kL7KeYVTgaqgfxoiq4sN8QkaRc9fGW2nhgzjVWBi6ffoZ",
  "key35": "33RUqMEkibURu7UakmRy4JGoCPdor3hA8HnMZyqQ7KrEVm9xByvcn3i6PpiVz1Md5oHk1fyJW3RbAKyYGpTcLpRX",
  "key36": "2YdWk1e4jiaSnmDPz1XhJT5DDwChZzLuZ43Y7gK5Tb4TngeGiiKFne3QCKN2vzraMkRfiHvM9rterGxi83uUB8wL",
  "key37": "37RjvrsC6fp5qk33v1Jkob11Dit55vBjX6sRRvSMjQMWXWCgyRbMvUZK44DfSGvGuXYNCszv6i3F6MZenvh4rnP1",
  "key38": "W8Hqa7vA42mpW8FQ6rdKGT69zDyH4h4GugR4UQ8tB9dVUXVjGf53F87gFD16mNv23gshpRG8CBjXSgxuoRziLwv"
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
