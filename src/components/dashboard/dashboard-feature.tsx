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
    "4JDyMBNeWAENxPYQGLRnNhk5Ppwhrp9pEevWwWyxPNvX46AgmnmwkEJ31RgyjZGadwNjNxzca7JMPVFHgxKALfFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48FDVHm5PHTkkMfRmb4tnjhABKe6b3QE4n52wCzSZtGoqHbVGk4dPUFn5fVdK4Yarx9NXzJPrnL5tYup3WdaPEr3",
  "key1": "3c3QTSjhw6FfQ28NA2rM33g7MwSJAVMkYtvvbtYkrUGXUpqWH38Axour4LKFfsQeB33JMM1fwTEgG7FALs564FPX",
  "key2": "3A7KtpYn5GbWeW3dCpVv8yBmCALd6d5YsJcgbseY9DdnF7JK5QSFhJyZPKyiCti5zRxFhH1rNHAKJgNuVzrX9BN2",
  "key3": "yTZTmvdPAUtZcQqwhHeX6EVJLA56Jzs4uzXSz8X5xx7rgncNGPxpVWmJ8CVz1yYBEbfDfnWRMmnxSmBJv1SF8Z3",
  "key4": "2opnsM8C4baXxNvDj1sF2svKUVFJaQg4EMEAJjN4EcbCDRTRvKyEzFMUEJFu1TWyRnDCgH77578hdM3wEJBBRHrm",
  "key5": "528iUY7UqJGAQXwqdnM2C2AX7c1zh9Ri11nkuGZ2iNeSbjGLt3phXmubvnsdNss19Hv5HeR3F1VBGqTKU35FgrB2",
  "key6": "4y43DAHsDijzzMs3AyDNszwVKozXy1MTrWqRF133eAyUCXQRLyjhz944PFLK5ZzRtctMhq5poGX7gAgkMZ1NwCY9",
  "key7": "Q5uyz9R4RQyqdtgXLzJX661BdYGRRGvi7rXqepEywBdfWuLwsJN2cQvSjf8k8Y6DC2fZYnJh8Krs8a6TYcSxYxa",
  "key8": "3oYmxihiMVJ8WowU1Jb7PQzaq5QNVZsPybzzzoUw1hjaGFzaNVV6dm3cmKCMdmu3DhQd54dafgg1WCim1shqC3Za",
  "key9": "4KRshkDpAPHtRCpe5TSbiTPZiMzWosqf6Dj3996wA6f4LYy1QfAczPfFJnjmUFcSBx7f4G1sLFPFKRf4nLarFwMj",
  "key10": "Mk33yePG3EAX5z6ZKhGuikRFapyRkbuqX4ENPcxBKsmGmzgd15yhFLWKoBLhh5ByCMys5BS24uNAPTKUEo8z7GC",
  "key11": "56cE5SxbQhspjDVJemdnASvhH2Q2yGYodWFWfLZPnTuWQs7QwCzjo6cJumyEKNnyfh8y2m1YroHhPesRtZxDMBHQ",
  "key12": "497v8UUgyZCWAG1dxEM6m8aZqGmzHU3R1wekUHZgrTY9ni5Kt4Zp6ALs8bAHScUr1WKrNxDUsmYEKoUJg56xCF4s",
  "key13": "4ofmmun93aypKsYzrwPDexXhfPYqxJYFKkrRHVq57xCV8MdtUVU95vxB5WQ6dZ3FMW9MoDwSggy8DBffAmF39XCq",
  "key14": "2KEci6hhMcHG27DtfqTXs3cy9GYFTduJ4LHBAJJo4v9peWxStJebtnhYbF2kZVVuuPZ8p3iDrymzb4L2bnh5urwm",
  "key15": "4MLLxhXVvEY2M72vXPCNFjHkJ1cwPVT1QGzp1nY4kzD8bTmwcQfiBuUZuGxc1K9RXZgDTeor2F7wnBCC9oKXRwi7",
  "key16": "2hk1W8dwLjDtHEu8CDJWqEyfVmEjGonBnPc1aHso8HbnPCW85baj8f7mHeq3fFKMLfDmKwLySeMD44SCbKGN1ZeF",
  "key17": "3tZPEt2JQjwJPuTpDw8AKNcQkEudkGcUdvxyRPfubhoQdBZ93xVP7sfxfbKE1ped4xLzgUPMyjTGE161qxUF6aHZ",
  "key18": "4GgmGKsKjfp7QBAaryiFjgZ1sMsWXdPg4ZRvDzavH9cJH8VvRfvmjNrbT668HkfVCjnDESq2zubJS14yTZ5Zybpi",
  "key19": "4zwM9r8wNthjU8Xs3DzgjvWX9A5nsfzeAs3wna9J3ZUTPHD641jjRw6vBiGUnn5U1Rgk5y66VeBaZLFfHzPSHqbK",
  "key20": "2W7nXaUsbRbF5kZjaYLMe4MCdJXSfQGdVjk4Zdt75EKnT5FUvWSvwpBSXvN7y6WmTCnW7XKZxZpUb349ULZgFXvb",
  "key21": "5BVpWnfHnJcdN9F45XBGKwcoJTmCjREEHty5SqnaLcoN9gBT2qsPtuavG9J2cpkjmdcPdStcWxU9HGknAFgzAgbs",
  "key22": "XYNrTEBYjM5ZnW45tbMFsNtZvemeRh9ftjMmwpNSdACibXZxb7wvQidp3YjERhnPch2Xc8npVxMjHgAuni8EUty",
  "key23": "5vWrEJhfFYBs2wQ5Qa3j6ECy7KcCyrcyv3Jy6AE58hLHv1E44iWgLBYo23LDXUcJwYkUJVDo5WAFvCx93nwbkCHu",
  "key24": "ojziBvkdmg5cUTWCdiRxH1Qk73gjStdN45gvGtEGFnNoeH5jghAi8boEnvxXGEvscnpLB3r8MF6exApgookqRaF",
  "key25": "ni2iLiQAL5nL7vxYDPiUNd4S3Gs7yrdrNnPqxZpSxnETQgkto6RLQtKe5KXkuE9f1XBkcpQKutyefhacUdRUqwy",
  "key26": "4Z5yQ9FfA2zn8DbDNBPv3GjpDrxtAe1YyzUGzZpr5kzUqpn5RvsvD7zfWp3RS4scYhwiMM93jLUH8rbF371kHb84",
  "key27": "36nr6efacUmm6TxHrbz2zrGk2zWZ6undBZ9JMi2Wgq15eNEEc3PH91FmsJjR3heo4jd1DQtkEmQbKiVLfCeJQ273",
  "key28": "42Dkzq1bf6hTFHZPh1K5aJvd8Y1bPvpE7w9XqUPob1uRip5BQreyQcBAk55UUJ9Njg5eyBy9YguMsA7H1cuTTH1c",
  "key29": "hdR94iGqcJwHCFZ2HXpTRLbmRvGvKxDJuXNZeD3pP89XSYN1prR2b6vE5KNuWF81MzxjWuJbwrnxk7dJaRntEa8",
  "key30": "5pToR8dwuDBwDe4RPT3bsECX9K63XHeeuXorzZYnCePRTNk5CAqFPda7xn5h56uGEsfa2n6K91efQW5TUKCUD9wM",
  "key31": "5YqXmSGDXV6TRbRG1L4P5To7u65FSzueAhtXWMxu5K3F2fECAZE1r4YAAz16mcs1ytp6oLNphd35JcR2GbMYuDJ6"
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
