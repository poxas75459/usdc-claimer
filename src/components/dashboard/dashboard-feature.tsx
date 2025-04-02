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
    "vxNG9DNEbHvh4Jpi87CGPkhaL6KpReHj4nNSmMYADkpQxftbCq8CvKFmpLYv9ZSxtF43eb4sUiKiVLjCTCnt2kq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CLc7NvZe5QBEbquP9W8KQ7doUDrBwGT5GmoeeRpXpFYmMjj8z5nPYf9bk7emErBVG8UACnbqdwgGzkXSGxnkGmN",
  "key1": "26eFnaCEJtweya195q2r5cVwTNVcVujwnRGYuioRQ4hjVDL2XJmAmf92qKruMbR3tCrkbc6uTi9natMHySye1gjc",
  "key2": "Mq3n9RBv9mhgk3Sr914NzDfeR1CSMstAvozcXZpt8argWje6Exg6k4FsYTxTajVUBZBQhtvMKZci8KAvDP54Ajb",
  "key3": "3VGvVDWwvSEVMNfyX8qRcn5mkzCnt5jj9pjpYWwoASjx2AW3a5wAgJzBVUBNomK1kC8MAwFhL12eZhgUGpR6khHU",
  "key4": "3jRWKpurRw1rz1uoEhcUcxHxKwDwUXxYsmjXCgorexB8Ky8VGCZtjtQyPtGCWV5npaZ2xMEYCyGVVNFS4hGY1QJR",
  "key5": "2U3QCVekbtkWTnjAUemn9pEiqiS5DrfERNhhYeEybaDVXtQjmmFZ7vUJGLMksdQdED5iKB2LWbP5daYrBFK16ogS",
  "key6": "5KHmr9uvGSwewfY8dFX5617ZXhc8JYgBwh4Q3mRoPAre59jH67NrGcGm7GwCa4NtRhTLgc4oujnTp1DAoCJF6vMf",
  "key7": "5e9oMHYDvX7aLrH6KHPBmjQqt4QhzfJ8LbQYFUoaU9moTzRCyWg9nqo5UJC1J7FYZnsZanQ36QKbFzWXvBNdFVMK",
  "key8": "48YNhQeSCJUqp36zcYBqgQdMgMjV5Nd7nX93jKRtQnGP5TUM8wPctVVkuDZHJFiQkHgtm445DsTkjLSam7aMtq1Y",
  "key9": "5MKwSTvhVw98b5JjKuCse5ymAHaPEWf1kLqVBRS1mYjnyjBeSR8eXSAXLrRYZbnsZLDV34r7Lr9bSnySPirMxeF9",
  "key10": "DZzj9NAQCY45QLCqY96bywC2ThoyHXvmj5vXCUZv5EZhZkwE9c65Y4wCJomPifC9q3hogFpbjbLq8YT5JQVCVet",
  "key11": "3mEWe2uzgRfcZKRQ8NzGGzQLQuomr3ybPHLkv34P7STrpg7hxKm496vyGQKsXTzs5gfwQd8XJvmWZG41ozCdjxyq",
  "key12": "4k4c7GNx5SLc9xh8G97XeGpcJiWjXCVLNjgAzdMtdnpkBCTFrsQkUUduFtMLEjC8MfT6ioqiS4ZEQ1yU3zAaNqSu",
  "key13": "5QqnDwn1ZqJxvWigZZ5garq97wHvp6UFqPfAHMW78HkFy6kHUwfrTC3Y4f744yMruCRAda5LhgymujduMjEKZsfJ",
  "key14": "363nhjYqmitdJbVq3o3t8UPR3N5jMMUd5S5WHSQtfRBeHxWQANZekd4LJsjEFnTNNPtUM5jGWtrdA3Y1wiPQVkXP",
  "key15": "3taaJdfTZg8KB2Mbwxyq3bTKCrpBBRUq5nursGCGaAZpPUF4SsxmkbBpopDAENKfqAA1Uq7heRMUEdZHnAzuLASc",
  "key16": "45xXWATEs6dUka46NZ21Ln5XYpTnXpp513baWotJjyEnEojCVQe6DRFFZhLWop1Z15ZdbAz29mdTbqpcLcuLn4c7",
  "key17": "38A12RGDHjU882ioJY5LDLCL1vg67YMnWt1ENMzfuLio9JtXZpYC42SuMMyn4ocKk1pgJ4bGVeSqZSJ6W1BRHmqR",
  "key18": "2wgSgGAnaLKD9ZWD7AerQTFtBcWQQTGLtYWYmu7CkmfVS78P3gxFdRjL2SLWoGKATaEmEy7MiaPVMZh2ZCp2bfS8",
  "key19": "512dAfx4DcDstmoijnesrSt98jhEwHEUdiKRbBgRGHaC67wJiVyTFprggYdxvnWZ5nCUcBUByEVFcmHqEmqrTA3A",
  "key20": "qEw1zyYA8tHJyqXF2XiDhec4gELQgRbA9aWdDa3NkKPDAuwzbmEL1HH6LjAq69JrKJuwyPZsfEhkuJynEjHrq5H",
  "key21": "4irLMfjVCFWEShwrhfsztZx5kbo2jhKp8Vb8YF2Zv4M5MDwh6XtQBSCVNNHb3MSa1igG5yVqJSGAgv2iMLrEWmnV",
  "key22": "2AW8yTjp2edMF9cWSiN6m3AxN5Uc9dhjxgLEz45fZHtVV3PscRqFixASyJp5pXKsyoVYDPaFSy9fGh7wFQ61mTqN",
  "key23": "2gX2zFaqop34eyEHBRQoMGntJVvr9hkLu4kTh2ExANkrqoz2K5TCeSJMareRzhyJeaR4f9ztDseNFzh3DjiGC8fz",
  "key24": "MCkfpaA3gTzL8NWBv6SNEdytCJ958k44XNXtjkt3HJC4mWAC8hmQ81vnpCKecegnwkivAsW6zHxP8LEwDoQGSqf",
  "key25": "2fwcA5WeawtJduF2rZ5hsiPjPXQ5qWRpyikzCpjMrdduCiDaa42nfCAprBSVaQQkxjRoUei3hjW6TftK8W68xPeP",
  "key26": "3mKnR72cU866T7ELRCduWVrAHgwjNyb78r6CKknJZHJq2WANSHZ8GU3uy7dTVH5seBzbY7LJ6fi6dcjv15BrgfFu",
  "key27": "34xzMncVPZQVMGMUMkqwiv6fQZZzHjerqu4trarUijyAFnUV5xh33DYKpYqXS3ajrmT6aruZUhSuHYKMLMvVSfkS",
  "key28": "4q5fgonKrbBnW2nXG9tjmJKV819ZYX3RhChouP1ovZ2RK4ym5b6W9cAXzcApZGjfE5uRkkfDTGVdAq82byciZhfn"
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
