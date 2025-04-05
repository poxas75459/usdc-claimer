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
    "5xZh7y6Sw45UdUAyo2zoUUXHVEeUbFvK67zXHeXH4xkyoAi3aS5aNHxJY6mvFpWFZwEAW9E82CZWZ8wsdTeFpeQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vr9rvpgPmya7wKrCjB2ftFhPyeXTcj3wB751ysYskkcktzYrixgL7qnznLNCdmEtrRUEXrZTzTGw6sZhxoxhU7r",
  "key1": "4zmYFpnNjyJgNQgKiC4Mwsp1zv9LUa6KZqJ1jPKig8HTnCBnfbusyhA1Tf8wSUeBfYoiPCAn1zmULUXxCPkqNFvB",
  "key2": "4K9mXrGDg5FdbXf5oiWGRLAo75SKQkHFMSqh2BZj8bSaTWTAY66Edgc5LiDzKduLZMRpY5mjdWTf4oCLn3LRTZbN",
  "key3": "39SyiapAZYhYyAkXuBa6pv7cm4Bi6UTsREMZNuuXS7ZREfcBbuyNzZjKAKv4ZVYz1VQ2n38KrYVxPSYBEoPPSYiC",
  "key4": "SYJFyoaDfB1zs8zSQPWBm6HZorNgZ7pfGdaPWBD9s6cuQ48KDVCv1u5kqJahrKXsmMBAanmjWe2u4tMi52jfnm8",
  "key5": "4e9qKqjJv2KS2FozHcn81AcxDRs5rQAycazht7xTQUSEaTbvoM2R9ADMjhdWHAesj7AmN4UfiDwTXPqtQKaGf5d5",
  "key6": "NjjWXurU2mv15xYHa78qLwQ8ECJbcrWYisnuCpV4ZMjze2FPgLN7dbESfU2EYt3P2V9RfBbLmAc6XwXfSYSPTQP",
  "key7": "3jADcnWL93rbATprCgrwNw2wW6Bfj9Dyd3XSErNvRLtYhMHR5NjpbPemUftY9JG4VYWqkBhduiSZYvV1cKW9XdAe",
  "key8": "B4tUajNHjhqrSUe8Z3URYAAxvB19E7dgS6jTuvavqAEPN8cf2c8r8DDH6p2r8TZU955XmFBYBEMjJrLUuM8DF2u",
  "key9": "5XDALgiJn6ArL2XJCNh1ZR4KGXN9SzZPNPbpvKDkTZkh7Hn14t2hk2yQLDJp5iQrQGkirEoL7aYcTR4kBwLwbQSB",
  "key10": "2ZyrVDEXTeBCRtJADgm3mnJzBsskW8zkdLGnenAdvL3uCqscDkoK9MM6BAR555c9QZXdWvJHp1WD54xJjmnjGbDf",
  "key11": "3RM4YYEKQkp8d5JUD8UDiPSZzqnJ6asVUYNP5kvixHtFA2TDwFkgA6Udopq3YTrX1ybHNpAWXUtRK9G2ZAYV8JQw",
  "key12": "DEjijFBB5wdEVNuoSBKt6rX4kDXmBduWS4CqPhtktmVxfYAFBzgDoQuxAbwUpTo6sYM27pX1g2Bh9KPWgWrmVAM",
  "key13": "qHauAoXbPtiM8ksGqEiEYEusrNYUQKzCPNqD1cj8TyebdEJrz5DmrXhX9Xt6ZvZFdS5XbwGmKcbDUesB7pDp1wS",
  "key14": "xA2F5nMAdyymBNE1tgoU79M6ocFtic96PtuvANcZ3oyt7AEZekT3R8v8WkbgAoP7uqqegXveYSZLJHBpT7jdHp5",
  "key15": "41EJHBnDgLA5vemKksM4fVRbTxxA69PLmrYhBNUYH7EL9ksaDRBhrjyS4Ajet6fPEFoxDkeeU6rq9ufRAi4YtLuu",
  "key16": "2gL4kGJbBDNLxV8BEJ3zdeXvupYEW3rXn1WAjkCqFdV3vxpH1EsMfZk53jf4oUChnCujoHwbtVHJ4uXm4UqrVdCJ",
  "key17": "aGi3ypgXTEcMpQxM2oGmzZwqxKhHArPm5WcSZoNbXsKw7M661RXXNp89EEHHV7VN7zYaBmm7SfXHyF7ANwh3xhw",
  "key18": "4u8jqtbifuGLqaCDvaJYAATLQ262Lo2U44XwP2WDLduL9qwh55AWDP2aafcSKQsLe6oT4YjFgLdCPVHLutaPFiPF",
  "key19": "5q1tDU6XtFDFj8GTKMXjjdayKtbN9JGnugxY9fB26NLpgDgvXr4dcyKqkxRDy1YUhdrGwys3HH7ZYTzV5ZjtDFdp",
  "key20": "KoGWMD4C2yEVSQc6THng7WY1ToSNnE8Q9vYgV4pTKy1bNzGhbRRzgZ2oiFJjzCba2Lp27NkdjJi9NZAhZUkqCYs",
  "key21": "37pNtr8eVCTnvriwK4yoJTK2ZShUjqusyVEFNoxH6gsMUde8jWEyTLWcdjiQQVwtdAhVdvW2K1GUwgaSM3QaTnYu",
  "key22": "66WHD7EC4BU856Mf7btEutBj8TimKNmZhk39Byr62gVUvuU7MmxxbVR7s3JM6BnHPayic8SsVSDnTDELEYddUtuz",
  "key23": "2jTuvaqHixbDnSMC1KyP8AKt95RJ77iwAe5nrMqg8amdfpqsP6vcLvMJnaFoxM8MjVni2GMWNYhVvhqKhveZuFo6",
  "key24": "TCJ1iRS7ZzD76ZzRRQ5TLh8wRwXX7DEe7HTYKjMhNDRxtNzip6pA4Ha7pgGWcwuykqVXvDYafTXaggN1NgnNZaN",
  "key25": "5eWnaoMsqnPi4VGGXvTpipozMDUmPf4UPGEQsbhJ6usz3GgGyr5GNHvKGVwtvsSiLZyd8YBhAAR9ds4YL1xkLNWe",
  "key26": "2nB1AtyzmPKx3aHNgQhQrYTA5kbZ6nXhqG9YTFoRNBERcffyA9AsRDQN71LZMDtUgQFbnxSKt3Yx3EGR2CyZ2xAM",
  "key27": "2ktDmN5nLWUcRAz6aY2gWGHCsFce5BgkWpzhVReuMvfakan4Cif8UQvuH8eawVikF6yFSKbMyz516y13jS4JyRWa"
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
