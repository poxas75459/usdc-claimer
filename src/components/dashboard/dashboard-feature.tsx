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
    "31LTFyHrQVYvRGjfmgSrwh72LLFibneSVxWNf8MQtRNDvwD7neuwrhi44Arse72d4Z7LWjbVX2V8AW7v3FzQ2JP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wRFoxTPQEAD8XeQPpibstj2wVSaGsZawnvhmnEicQrN9tcG2w4uEgrtMnoSLRSsGF85TKNoQZUGCt975CYeMPXS",
  "key1": "2NBm1K2JppiaJL3FuN5GrenpwLm1ZRnVhEQ4CJ43ANtDwpLCsm8iyQyu9s91kCjzzYuCL6zFT8XJcicMpJe4SHZK",
  "key2": "28fM2CP7Ep257hzEJkhcs4LRKCpb3wd4GxdMj7G134oh37KKocJJoierXbhfm7z7gVH6KLkJNSfryY6h8Zk2injd",
  "key3": "2NQEXj7WzorDTj9UqiM4FSuJz7EK5VxzsVmusKGJqR29R8PWDVUzkjXM5gGZAT2KZtkQJmHGUoWNR3TK3wvda4V",
  "key4": "3rZDQEJss1t7VdthbyuAVSbWm4T5XZmGohCVeKq2vrwxN6UpccyoY8h7tci8uG3joyAWgQyqYtLdw32AwGFEC5N3",
  "key5": "2f9wE5yVg72c8DZDVTtfTVzLFrEUsE35SmFoGrN7XhQMnfZ7aJ88q3t7ykC1io1ybbzdEbhstwtehaH4Tug5VnAk",
  "key6": "4FLhnYdj3WBiJmUZXHHHnoJeuGYczfL8ZCyZxW4LBpBHoEaVSFgL1i9aKnUWnWGSH3RQuKm3xe8N87a8UojPhweN",
  "key7": "sypkQzU8jGD9CSdMDaBFZwmDwYVxorL2x9NijyeGAqi1ZgLXUBw7jE96CYe6uPpSzZJ8qWN8W8jgpC19pS2WhCJ",
  "key8": "5UeJjwayUKwQqcaweYjP4rbhb8CcmeteBEko3TyqGQDCNgmUp7zbnCew21siaGndmFcz1w3zgepbYiDF52F2MpUR",
  "key9": "C3XxLVVfuEArjJ9V3Ahi74p9KYZ5Eb6zgVhysiWvaraz9ua7qhite7CWe4415sFSAdYWfwZvXXY3rfT53YHKMh1",
  "key10": "3sJbGWMQ4L2Jxd6dGA8b9icjyTF9pcJ74gRnXSzxqEU3opWoCJUHrT99mMLovwWjQpNJxwRBvffaMQYVsNLoEvqs",
  "key11": "2CkzjwjoLGfjJswSd6KMLPB6ezJdNefhitu4VM9yQcVKyYyKhokRP4PJKvqMqTX4Bji8GWzmh9vSJhNWkSktE9FP",
  "key12": "2nsfGXhL3agNAtLTnLgmuCxY7vowi7gu2YuGxKDFXfDG5osXB7KNdVL34iXnygvUV6xdBbqMGxt48ctpgYGuNY1Q",
  "key13": "4whAkupSSh4K6se1j9jsJKGBUeEL1bMPfotwTMEaUQyjQzsmUz4xaf3cNQFLzgu6NgLBkb378p6KhZ1BHs75r9yR",
  "key14": "32bm8HnaKWqyK5tMjaNq97pLiPyTMe4Jw82a94h62zGSN2sKgAjtu2NQksHozM6mDw4dg2HgsMhfeuT2jBFYg3m9",
  "key15": "3Kja5VdxRq7qfv2mTR83zyvHYny77WwEVjfnmYdHzuGhUUA1UMEDPimHCPoYrNJt4o6ewPAKPihY2awHQRUzJs7v",
  "key16": "64bpchh53VQSsYasrqq42zTaCjNgqrcEFAoTSubDhYsi7YdsY4xEFjncUpvviy6gco91i9TJ5ZbWMgJrFqK8Ky1H",
  "key17": "2qi6ThLRX5MTfxLM2fRFdkWhx2omxudkgnhxnB4qYCL5zGitB3cLpUHru4JsRfG4KYq6KUFipKqVa5AC1zNf4h4c",
  "key18": "5c69A64p97ievTjo4SD9iw9aMWpWQ87c2WEvCFSFyx2XSopB45TFoEbfYFwkfCu2tTZy5tSzxPiQEDdycCi3vd9m",
  "key19": "2bJZypPQCwKGbNCQMJqkcyp4rqxRQkLAoWXgPe5qQ1Wh8Pdg34dokjJTWWwzPiDxghdhBVycLbX4Y1dtPDjUiaNJ",
  "key20": "yjjkAQ27sJuqKfs7SycyoTjA6RKHUvAwSjLStmnfwZWQmwDGz8pda3tjw8nE3XVDGN38hq3QxLvxDzCSLLikQ4U",
  "key21": "5mSwv19xAK4Bbsx9tmumE3oqb1dEtAyMqXyeZtvvVym4Nvhat5d8qVT9JCZ4PCsP4QAJTAkuEjxXbD56AQZzvBi2",
  "key22": "59tqo8smkfbwWNnQGpsMHHLJncEvQmB5fxsbsPykYKaipzg3Q85muvpjdyUVHJyAHhAgyWb7PfnfJwCGN6B5GDKo",
  "key23": "5gjrj7wo5jpnwUiEofUJ2qskiiRKqvvV55RxQv8oXb9pfaLTh6HbRkR6LW3h6ar37c9KX6JGBDgTKBTizF9KnXwy",
  "key24": "4tirSYoSaCEQm6fNn4wfVQspiAzqFGGDRNj7v8D2bT9hc4myssc34uuRGgog19Xv39eh9A78jkkniuWdVNjhmZuS",
  "key25": "5pH3YBe3bo5xnvg5FPP8FhzswgTSm1dtG4GUvmfY9RuG7uxyivjjGy9HKD9uYs6F3bKPRGJSGmNATBphgabWLnop",
  "key26": "5mtnrDRZfiAeMAjP294RLFcY2S4YMyw1pr6eRAWFJk27HWbFJk6kyyXqfDUw6WEJeyvL7QnqzUYwTLF3SZtghrdP",
  "key27": "AhzrX9XuZKCFrQaas3MHcVrb1KPAocNxFc6ETuq7n3yc9ZvfQj6JrX3vj2JjqfF93d1m2zUkhumRwZEnCkJvjkt",
  "key28": "2areQYdT5xKHsZHsiv6R8dgkKWkQCb9EKdk6bZUNba8pCfSSnbPiPoDVvr11DtNaHTEXFgHs6SbGXXogxEbzwtUD",
  "key29": "2LS9rdXiEyqSpiJR9osXvXF2TrkHchGBbM3xaL8tza5rvAaEPHSAwk2S5WErxySzgBZBPFVTm5GPdx4FcHy6EV1T"
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
