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
    "4QCEWRhctaivo5X3vdRxMsr2DdEgdyr5VKEPsL1uegHYkYJ6FDmqbpK3B7Yv6QovwL4TiMFF64HJSTvVGaWj9dg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29tbYpngzhJYnGkn4Xe94mRVnX96EkSJx9X5EDMKNP5HhvPWbtb8UbQqTLSuXNpP2ywoibtYWnTfUWKoYF23gWeX",
  "key1": "3conLcee6RpSdhvJsU55Z3Eanyei2nVnj3GeLx3xd15ScQ1ManLvFoCixyh7wad3mUZvV91YWFDhsrY5Ei6WRqiu",
  "key2": "hin48BiDtovb9pKMb4D3RxtpxMg7XYM1yVwHNXQLrFqVgQxGpiDbBpZvyAUAA4MfER5TuEbekMxgeu6cTtNsCcD",
  "key3": "3Eansx2KyRe1qsg21NtuWSWKKJ9KNN1qze6jAjsv5mhz7DFjXAfstiTJH5mNZnzeTguSXoS4ndEKUGTcNpAtdbdB",
  "key4": "2X6EcXbhRZ2YxwEv6DMBxmLyjpeUXJSc68Et7r5iY6mvpRGuujttSNdA6rqeQDEFiVprE9vsrGJJTe7vw2yGfJQt",
  "key5": "2r4CKmNprASzwNZhcDtWN3zbKVFEaQVKR9fP9KREZVg6LaDFHbjsjmTs1FJf3h4QG6TW58BssWZVE6tSjNEr6vaR",
  "key6": "59KaJ2FmBKGPMmF8WbJHE1LxTQ8nRLUkmS3A2jLr5J9e2yYuRDgEW33B1wzLCbhw6745L8smUYXt12JGhyi8ruMi",
  "key7": "3kd9GQmskfmEPKpUWyNSifVy2KGPRLLk4Dtb4Hh11vhwYZ9P3zpDTPNtR42s911J3yrtVTipQcPJB7ue47qFVy1",
  "key8": "45FWpcSSk6anU1cBY7nfA6w7BXGM4eM7EuKx95BfXcwZsNoerEGHh6hKqYBKLLwtu9XCDBtnnUUT3mSVH5j4mduJ",
  "key9": "VAWzwJtztZUNRy59JAQMLPYUZrC5Z49ZJdjp2r3piGrGsQQt3GqPqBa8WjzdbZKjNxV3ErCaGpRfCbb6JygxLth",
  "key10": "29So7Zu8g71RQfpZHK5FZAu8F3dcqa9JdvTFGoU8wGzfYEHNSnph5eJU6YxcUyoM7UVLHDwF9PzDJDmW88k5UMwZ",
  "key11": "YyRBVDWv6dHTk2GAWCWb777mQg2FftUBqAU5LinaLRSRWd2zh4owVqRrHW2XuHNxrBQ7cacL2HSDNQ8HnHpdQ34",
  "key12": "5P5L9vwYYsDdh8H1UDkB2CD8ezZsDq1Gg9fTXmJzCJutzTgTp8UCaKK6H6WYQSBUkhyrTJ5UX3A5HWSqFUhEZHvm",
  "key13": "K7X7o1Kbm1qbvaAzjco3Wd85chpV1ACHS7drHNyU3EbLHSh4KBch5UCDdgW6Y2niWf8VYAPWEyFrnYr8vfRt8oD",
  "key14": "2X5kdzyT73mgf4fB3gfFQtWvhdpyjaf2iKkhox6P1ouNq4hXuk3ARPCi3xTJSS43zRegSnR6fvsR4B3FCGf2PjDa",
  "key15": "48KUPLTF2DkddwEuuGpViADvQy6amQDxavWz5skDD3nyWoYU35xX8RPxWzPhFWaBpAH5WgvkBpVfdxWi6aqgVKyY",
  "key16": "3vqwfxYSLyXogpjRnVZAs7ovqAr1pwqPHXkmh9RwpvXz978gjxjY7N4xjR3chVyb5UMpwvZdQpDYojwWSRLv16dW",
  "key17": "4QafMxCTyqNvX8ydL9SYzCoRVPsWQgacrhs2txccBGPYowieeFY4ADVH2Uh9FyUzppxJruTCE35AWweAcZHZ8wD5",
  "key18": "2LBTavrNBDfRXq69UV5JrPmnQ9n5vDn4Tf5NJA8Fzct1Mo8wrcvoqKqvY9zjfgKe4drshq71h9ySAU9nRBo4QNGv",
  "key19": "675FAK3CgQg9kWxxNbGT8z6xxrfuJg4xkVxh17Et5NTLRvoyWTDJ1E82n6AP5PENA7tFKXLVzFq8cNxBrG3yq7YU",
  "key20": "HgbqYU7P7U5VV9GYwPDX9z9ek6qWyNZqKhsZGWpFYBzhmM9WPJLHsuzKCoCKM3KRHKvuztQzyj5MkKYqgcLqJBG",
  "key21": "4vzBYFsMujUy4Eq5dpQZJcWM9dddvaLUUhJMxmrwHxKwSiDTQXo8hAzPVZtJMwGnjQxM5RqRpvmy6u3D3XHYTVGQ",
  "key22": "Y5H8i4D7MNKLxdkjrNnYB2cWjSufWBEa5Qj79EV1VNk5UmnwrEubMBr2f5BXuS94PTNFJxXK5FVKVNe399r7zpn",
  "key23": "Qfaqqtib1MsJcjPzorPCTQ1Zwu4KZiR3qBHFvzXPkCnunao6NL6rDJS9SPS61SUriyCV3KTsmSmXDrKQkCVfq5j",
  "key24": "4N1HTE77egNwjVw1pZbHVokf9vEgojXuBAayDj1SgFTcUs8cm4kweDb1LpLqW6yX5GonD2u5eyCjucmqoxZN5jjN"
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
