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
    "2tPJUQS56Tc1dSAboar49TjDaH4AtbH6ymUfMPsC2q7tWFcAggV8nfBCojCTDBWM2CXoxKsaRcLVWDhmmhTky51x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z6riqRHFbXEjv92Spj7Cq9tr84GAs28tvdxbKHLdeuSRN9xoqdxBBMEFhRN273rA5oaZ68ZcNRErPxZujjdqZYP",
  "key1": "2XyJGxAmEtmccXxwQkk6xovEYsKZR55Q49qfqDXJoG5o4qFWmxQt48p91RZzj1EnHy2Uw71tJPaiNNKjv7pXvdrx",
  "key2": "5Xxe5GwituXWLYSb6WtfzS1Cy3bATHby2nmXhXX1LXn6nEnVLRwjQsJYuBYF1qvcHKjC6y5LsHkHnT27vaG3uobn",
  "key3": "2TGT6YZTiyRiqAa811Rw6KjHycsSPsjDH4HnNek73sBx7g6QjXuK9KHzqzeqi5QkpjEkH6xYTzGftTEP2y1nkMu8",
  "key4": "4NDJc2hGTNbq4NnRgaYn6yvosNkS7WaytR3HQyNfLurVGe4efnTTYYnevgatVzRPtQYDZdkpSAmPHRV4d7fhvRZs",
  "key5": "4Yv1JmwnjFtPfDoRHxZArHe24V8ML2bFC7EXXDSjTVXaymidQF56zV1jth6cBf4pn8z72qBGnB8uhL8E1BuPmTas",
  "key6": "4rqzGr87AH1fAnYfGdtGfDLaRs4rbbJbQv9iG7gVuRMvcUG4esyzfYQiAyr2wvL8JWwArwjsfUJKHGSFHXGuQAxL",
  "key7": "4NhY9j7jvKsvWnAg581fGLaQzZmsETG33WJfF7BDT8LeyRiocPRGGDrdzhpQ6uMPa8GFJM5kDPb7yvKUTTFdA5eA",
  "key8": "5cxLuj53ErBcd2A337GoPGwXLb74f9zncA9qvktZCZ3vKcqmTJrJADabhUFQhKUnaLLko9phS48EV4S7aNAtapGt",
  "key9": "3KTQCpwixuxvxXvL9t8XvUo3rtw5kpXo5hF7dWZhuNPgiFQ4kvgiNH5aTMBNhUAHwZPrhbxPoWmzvfbKkWt6q28N",
  "key10": "5LiPhYPxXtn5FGwcjsWpAhqhqKJGkNAKeY8nxzoZvNn9PmKT5pRRTBMjX3sVgFzmGdT9rRxNzUAguiWGipqHXjm2",
  "key11": "4dUhBnJtmny8FFufLLaPWFT4YnxGCggJwgBVsvmPknjUjYqegab28XL1v9rW6cZgqpjEAw2NXsQ27vAZfYEGc2vB",
  "key12": "2fyJdTfYi1VMj7e4k9y2iWassS2br8w6rRzj6KbkTWNjkS8wCXxqEsZFxm8z2EHXbGnfL7fwvMF3KjdiXQuuqfrm",
  "key13": "37eGWkCbk5vBAgFYkFSAH2e9J8XmoJ2V1QdfHbMiedZwqxo3X2k2jChQCKunCvQYvJAao3BQEgQzUCAoL9iUt9xi",
  "key14": "5SFGSHhiHTQYndR5FHmabnHSoNDmWRsKL3hXK5jKYnT5n1YS5Ba64GvhCxAjgy41qXoKYYC8fSVMoWtG95Eaad4k",
  "key15": "CrxGi7AfNLudBZGtqKJcM6yi6RzfTovrTGUZHgb5AQow5k5v8BtX22aj9v7P769miV5w1iwohux8xGxyZnCVp7C",
  "key16": "4BrYDxfn61svXd5g7rE1ERDC3x1rEU61A5dkenHDJ6FRCUmoZWA6qFyJ5xTNt6HLwPwXRSfxkjfrooFFQwyitpjt",
  "key17": "4gi7ZYGqT9TU3JWxF4igUeQiv3AZ3XRqLsN4wEQbkz9dfFWNbCScNCsbWqgT2MufKkRpUURYFPzFpzmVcenh9vm6",
  "key18": "2pEUMaSsHPwhMeP5pJgod8avxuRC4h6oiLwHBYZj1jSucJoyxSW1ncsk6A8NUBM4vKXas61nGEVYJYgKzp7MUeaS",
  "key19": "njLDuAueN7hQvBNRiyWL6fpHyaifmZBXBeN5otrotKwuD5txESgmeJKpTgfSJYzLvcriEE4Nm241faPwbEEB1C8",
  "key20": "5c1fzWA7b59AAaoBxZckYE9nBUP1ZKsb2Dhve249J11CstUvqRdq6xUuMiADfDr6LJoaDXyj31urx53EVhivCBKu",
  "key21": "5PFdqov7wbUFrePsj84HW9iURp8Xq1fYNYoYSsDBfv7PPw98FA629PAVdHcxHjeVZitbdbpCiyUVS7NKtoxjnCmg",
  "key22": "wTiFagzKMvAX4goyNsBe9hDKM3TQMiMUJHreYMVT8jujUTbkjFHrfdDjhJzvXw7ZBVZZXXpe8G7BqXBYQs4Ct8Q",
  "key23": "EqLmx1CTQsfEBCGnUze4J5PnV8spVrQCXyfC9XoEUe7zk11LEddb9p5qiKjrktZcPUMP3JAEpUDPXSBCUq5pqZn",
  "key24": "3NhaoPN3FXSG9YtuRTggkLe9PLU6hQvjB33J5rs2X3tFSie545iyGsfeVYHwH74M48NzXuW4NckX7xjYNoqRaTWW",
  "key25": "5tR6sPjeAz1CvyDfGDCa72XESSATQjUJxgNRU6BHCZsn6AshT11mFU1jj84VkNdWnffzSWbtsFwcpVDFNYeYaY3S",
  "key26": "5845NK1mezSvofunqimRDFJAxm2nY7Z6i1or6pk6C2nZeW2aUE61iKs6QE258N6QLt5mRn1a3pvTwqRRi4gf8KP3",
  "key27": "5HBRdNnSaLrtGvw5m3yQrykToK3nhT5etB7DXGY1mgvMKSxMzXhLvvdoPZ4N1HZnaotPwM8hWukarWX5xhRYNcxn",
  "key28": "2uu12ZVw6aANkvxWcae5HBUpFGoFafTr38Lg4ubF3VTmkXiZCv7EV5WkD53UT59AT7FbYmp5b6XuKENv4MaYDNg2",
  "key29": "37ruGc93ikxpordrKZT7v96ZpWzPWkWxPfA4iPxSENoA1VT8YPAyQWXpUUsVFaFzXQoNnbkWQmCzxJYR87pqtyca",
  "key30": "5k7cLqjcZv21i4hhkoAMEQcBeSnMaYDmM2pr6HPhDEQyhYCfDmqCqfPmPzUKE7Fe2Diai7ipUJdF1CmF6qp1h2Zn",
  "key31": "57fTJN2Tjd3hmpgE6pKLz8WDFwf6RUz8htxGgLaAV5QFYyHzixPWKn3Tc576xgeZSPUvrnRM1xb94gWTpyKcQGNe",
  "key32": "2ccp3HThQL7yXfwCPewXLxcEH6WLzBhKe8F1gxkipM31mvJL4CmR5LJvVmFtnmFCyqQPdVnM9MjUMc2QSog2t4Lr",
  "key33": "2aCW2rpWTBHNu5y7N8q7A6fw4H5vbqgmAfMgXNH2s7nHL9Mkqq775FeU3SmNBg4f6oA86Vqtpt4kifDawcwVFuym",
  "key34": "47YEVNCg7me5ALMdXuKPrFTKHAA8m5f8zA7MXD5dWNuurJyLaZoe785GrFajaQwSbaU2f8GCj7m2ibZej1Eg6V4v",
  "key35": "adhGMNM7TQpwmr7Qbq9N2bZLffhMReru7b4TscDku4rb98ANrH9YsPk9Rcx15HnvCT8rw6u1qVJRXURtZZpbd1y",
  "key36": "2aJmikGnQe1unMqawQvCFawttBLxaZyBSeTUjEKQHm2t1qSuKg8Y8UzQCWNSNZPxBj7VTuUzAZmQdcAFwKg98qPk",
  "key37": "2AA4bU5Jvk9xtqavoZDWSSApAfQori4SP6ru3WwD9Dr1mr3go2ABDGZ8fe92QaHph7xYq1mPoeTh4mAfBXNfqnqN",
  "key38": "4T3SX4q2VPGVCg6kdz1e1YJBaCkTBwJn2Xpdrc87wJGVG6eeRjnYpCtmQkKvHfU383Cvg7TCEEaFE6w2hPAiua3f",
  "key39": "5RDXVgYp6t6Axw9zqL1ApsE9qHAmnsQt6NtZHHZAhQ7aFoZZ6kKeTLc3r49tqbCmnUyMwoCck845aRWWX7wtVozu",
  "key40": "4JH38VRZJ5PhKNbbppZrBa8DLaueVqPmKfmPd3X772sMCQpHZXVZKhLGQa4wc7j1knxFYgA4dP6hu8Y12zdjcVaE",
  "key41": "3rUoMzWo41eqMLchmF5aotD1DaWcU7m8ET1MX4B77xgYJNU2eEKarnHftuUnPpx4pfokVQc4T7Wff2WA921aoKGF",
  "key42": "26nGKPmQQbGxDsWVbaK1GdLN5PAEsQv1gkZcdXKxaBRwbE7XNerNT2iJgevsYNiPaUeXqoa7E3oZeFHBttAqU8W9",
  "key43": "5X8y9v5n5Q3dQ3X8N3TJ13pBm6M27Kr1GRK25J7Jb3yPML5QRRQe95bgK4Lp3gmBQR2F5QL31GjG2hbAojF4KwtX"
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
