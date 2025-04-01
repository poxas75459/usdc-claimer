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
    "3EuzJdx45YxyM2pTKqubFLYM38QqUwnw66mgw6cFviotvSfzpsWqdx6PtohE9tDBnTJcYicnsSe6f1mPUtT4dhjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yDcFVT2yc8FpNeag2nV9sv9LFFpDM1Dg4v6mkUduGKJwT1bdG3e3okmhq9xHNZjwieVXvJz5eMUFCvWqZwUJtSc",
  "key1": "2V1kAiBBFEvNqQq9C1zVtKfjCJwJnSwE72UK7WNLzPbkKZsoJvBZFmCUXyt7rq1RoXgjPTg4vue5xbkVx4fUtaDQ",
  "key2": "4bViryikpF22FZrPDzG5ME5YFCkz6WdpBsSxEMgytUe8KhSDCroDGzdXZ2DVfXxP43e5SDSeFEYgQari3nQFaNp5",
  "key3": "5DtrBw9Ab8Gcy9JDbQseDgnoafGoQi3p3u6bn8mzCcD57tdY7zVtgWsbbEoBULLedqxie8f3mHJdT1vxHktepoFi",
  "key4": "5JrwaYqAJHobesPJgudAfApVEL8Jbck88s4P1PkMMAFGHGGm55Ge2xfNRyZipAFzVxMNJo63pW947gtPc13VD4FX",
  "key5": "5m3ZkiKPXzb9jA4TmtoDf5niKfkmxtgvK1x5X6z8PXQtj65SVJJFv1XSizWx7UYit9E6uX1u9BxDDhUw1VfSJ7Vm",
  "key6": "5V2HxgLhMTJ6P8in1FX76CTFy6sKKzy4m43MTyXSt95i7rU4C7wNEVSi3Tw2QNoN6ZskP2nV1W5Hu5dZfMy5WWWL",
  "key7": "h3kEBy4DGPCAT5tKa54Pd595Gb6NZYcX9BvUQo9gWqxEuq2bbEpRv91kEMAPt8DvmAiMbvjtMFC37kVoJCTTFda",
  "key8": "5rwcGe4pdYGybtt2GDYavhENKcsgkAWUSkJezVe2tzLmyfz5x75C65xHdEQAk2tTuEnCPPW7rj5FttKGhwfWXfDV",
  "key9": "2xDLfZBMWfsismghE6JxLAZEQoaSYqX2XsvNSqYsWoAQKTnF4DrDnWazJqThrFZtEGipkmffF8Kc4wDxNpoxfAKh",
  "key10": "F3KTews3gQKBWSZFg2PPdszeWX9j5QAbAhN2ECogfRz9DpwbLJEtGtBvy6X5Yh5JzKRR8CorebmTchFZQJiFJNB",
  "key11": "3cpsqiFCtyPXaFRSGZmaKU3AFzst9VxyHa5VHJW9rTufgzaBkteKpncwxFLsXGmp9B4zuTBPU18Rrf5J9ZLu3HcS",
  "key12": "2wuZdZxY5F7UsQPSK1EAHP7EQTR9DWBL1eo8Fujcpgv42doqaAWUwL46FrUVmGs77uAgmqwUQb78jFCxETjn9JzV",
  "key13": "3dxF3dtN9rukxdq8ByAJnjfySnyDoQJxeJXYLtnNonCQGJbNhrcFX3dYiVh7tNjPh12D92cWH3Ny5ad3hFQhuJb6",
  "key14": "37Hq19AvRTgCC6RkLCLiQ8NAGMudzLkZUAgNGdjU1jUHdTbkoEY7wDtw2k66i7hGE4zEvK4gW1UuXh3ndQ7ZuytP",
  "key15": "5xaFWaFqbMFTbBhjMwaGbLGJJRy5owfMNhxhxscQacezSmFXUJofdv2hRBHnNUgjFAqB2cNFEjUsZJooRqsA554v",
  "key16": "3qzfz1Lp4cbGGWyGak2zfMCCv2cAR6vdLcD3vsVy8fMnnFofYgrmd69C1JcnMWGkGbVPxqjbRj6HK1s9rm2SFoVw",
  "key17": "4vVjQQUPHLSNas3ukT2H8DpxYYbCZjYKj8PNfifp8oau14rsvsUSTjcP8CxUNSLmRzp7UNV1sWi8KA9VXtU446KD",
  "key18": "3o76T54dG7QK8rTVLAhFdU8KQAw576ZW3FAs64uEyYpiEm8Gfs1gRTkAcy4z13pyw7tfpLdcpNXemgk4mFNiHzvz",
  "key19": "2BACHCtaDnbmBaA8hE9sKsn1mNhYBX2bbJZRW9LXWrKYaq4GqhY5fWGJ1bHgBeFuc2kHB1LrNaS3N2eXYWQn3uUw",
  "key20": "3HPMmkWQDA2jutZmuvhBVtKaGdQDmV8aXbzWGGNQwBVMnh94m4Y3uVWLimFZpMkiTTgByZ1cYTXnTgReqopMMb5g",
  "key21": "3bkX677GdMBrHesXNWLXCmzf87jHxVkm3NUn1XHUiM28mf4Zy9BSDETqJnQ4j9ULxeCJfDGwjsCRvapGmTdAZikN",
  "key22": "3ggzxhx1GssSumfjBZt8TPcDJcCGCaQSWQVkgP16YB1YvJHkzTxpsWt3PfRdcbvt2AmoWyJF8yaskT9tz6Fk3S5m",
  "key23": "4V7XY9UvfNdsfJmidmiDoCNwC4DiByq17GCWpaCXszpUrCVtVQqm8NM9GopBh1w6D4AZkumjCWypR6jfn4VXFHF5",
  "key24": "4o1RgNbv6fMQpRARe8mApnKQCyN3rU49ydVtpMGAAF1sLa9CAxL4d9bscq8ZTk7TSLLC7fDp6Nr65Kdct3HBrdZ3",
  "key25": "25WuBMTq8vR8KrCrW4sMdznjJKkN1AFjmEDsweZ7ZDJyiu9zZWgkozavaD89bi42Ub91u2w8YaDykGCzSwdm4yYm",
  "key26": "4eSBTjMXjfuR238Z9wbULqFikcyr5cT9V7xFivps6ionDqM3dvZmfXqvbAwynTMtNqUs32ifPFeEzwDAbDDoKybk",
  "key27": "4DqpFKgvsomaKjbPoYceFgff5nDJQCpFtGRjNefDRUQhqBTa6J6swASwBz6NzCuF9CLjhHueds4zBkVtonPBkio1"
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
