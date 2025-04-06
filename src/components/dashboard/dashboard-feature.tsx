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
    "4AEgUrvH8ur5v6H7ioqKrGWcvaMh5DiTZoW8WgkX5zTYjGkfsE21EEo4Dx8j9fEvSbBT7RryPcTN2Zyu8HjRz1ge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PYWjPjz9H4bhaydXHRa4LH3XJ2PWPsHGsjinqgdcKQFF8gbQiesRn1VmHTaVxTJjDNHcN59C84HnCVe9iaVv2hj",
  "key1": "2RP1xojXjwURHRV1srV5QUuxaG8fAVmFhiKdhHnhv3zsa1K7CVv726d1ejrpsXsviEPpAFn2Hq9fb6kzg79NSVxC",
  "key2": "4nzYg75YwmZ3FvisWJiSDuFFkQnDFJ28QDDVx2PXbDuMA7AS9EjPJ8XCjAENG2GaYcd2yMD2HRksFCZbe94SnMyF",
  "key3": "4UBXEUtKQ8tU4swBajPs3coTF7hQJiESSBteFsM1c2cVnKtqCau7pt8Ec6BLbaH3w6pS73KfeAYLUPNi8cD6gMsD",
  "key4": "2AMfVn9uUTUVNJjUJRYo7qBUHSkWqbqheZucTTSza3B3d4eu7wGB2bU9MTBLKJpYzUDJaAQWtjqG2mn1JNw8eYjD",
  "key5": "4oeRY3gXNkn5K45nbEkqwFnBYniVfkgGRpkvf6QLb3v9QxG9zLiNmm9MDqHkCpRLpJmw8BBTRJGGqbJV2RFrafkB",
  "key6": "2xAPna7i8iy7xwvzytiTcHF9s6VqhvoigLwwuds1daEYNJdx2uAkiP1PovLBozqFyKFFiCxcjcPLNrUGz9EUDLU9",
  "key7": "R7rHVyQZR47oMXZs9PCE6yJRFCLgEnhTbB1mVmHb6MsGNJZ4kFZXrUEbr7KuvXp2K9Ys54JZokHZcRs1NQrkxzr",
  "key8": "kLatw466YKZEY3GGJe73BRmC3EULJwSHAzhD9UFhYR3wBy8nPABMgzpqqnqYkxRiqENtvdcisHt9ZhNTr3CFf3W",
  "key9": "3XLBbshrxC335GPC8BatsZ1zjTgHPze1jX82ig859DJPjJtd9vWKt9m8GBcnBrMeWpUQJsL5yVRMNHczTjmcuxqk",
  "key10": "45FmaEcn8ipNJfg4s2sWuPAJv4wy1ya9YZyo3SLCJhDb1mBaJET7BrtobqXmdagZ95KeHY6ddtNFwhjGbRVaJqQ9",
  "key11": "44ypGg9gb6ojvSbuXHSqUqJQWioZKvJMuoFgQU8f8mECVFshjmaDtsQtMWLM18AFdWEYqYpkphktrDnpqk8YCPS1",
  "key12": "665x2GGfBFfF12ZNKXvzX3mpTR1GYLyu4oDHgVuDALAp7aRmGuQJZHnZwyzz4J1svrEfeR8nwbY9AxK3FJj7E5wv",
  "key13": "4hmw6gJaBFM6Z7dNXYgRJc5Z6TBqSzQ2z1QbNFttDbn3JxfgsywN6C8uC272XpdtzJehABKUWutj5ghyJsyNfe8",
  "key14": "9bjsx8dmbVCjH4oLRyFunyK6tG3bpHDSAhdrYjMJAf47G5vmaAqjc8PueMCcWzk2o6F3Ct3vwRGH6Y57uNXRFkn",
  "key15": "5NTDuwuGTQZpsy41Q2qS6jodD6VC4Eboig1j3ESNfmz8MCcSivBmSVRggSmTivgFeWEzL2ehBBs2auF9F1WGCpF3",
  "key16": "2kRmEHppFoevJpTkna123QTD2UQ5bkdqvtHWYbKQM9iZ3c31ENCAtaYzxrXroTsLKKphikkcPUGvQYWMWyjGKj6u",
  "key17": "7JCW3d5oqFacf52pkYpWxrtQyEeQbUTXtZiJ9QbKcJx27mqTaPsLPnd3QRR2wTs5bVADGazJL8tDDCHyXZT9ySt",
  "key18": "55B4qAVArPCnqebdP4cToD6jwzAzENkpfhH3WbQJd2XkN9b3t3xUxwWdadD51VGqSp8QyBAjrXcRh1ix1ZaKpHGu",
  "key19": "4uPKkW4ETrY8z2Lz6zmxXkrSsu6KGoi5jirodDDDJbAC7H8fDkbdS4fZwqmRKf4Si31Fzd6m4w4nKMSVyjZev9UC",
  "key20": "3mpkrNbGSWfjsC6SwASQMEtzH6UQpt9KwEU9xVc7yCwUGE8ENmPXf5WnXtJzVqC4SMtLBnK9rcT9PQCsHVNysLUm",
  "key21": "3wztZ9fqtuPFYh7XNG5Uay6JCqs4MFLonUhuV9uJp8Eop2iwvdnWncRLvD48hW9AeMtnY7MZVr9fi9qcGFFujsrg",
  "key22": "4U8CYHF5c3Z3XmojzX3gms6ewooQqZJ5F4ztmMoevDTsy4sMFiMyc2eE6KetRf6LJzSbLdxbdhr2gfjAKCXhxNmn",
  "key23": "2TZsw7yUGtwTHLf63mybwTJENYyYNXnWnEAid6ZWmTDELZbGyoL6PEavBP1bZRJVKUX9BHphEgupsH84FhWFHqL8",
  "key24": "3pStNtNZqQ3Y2CCixa4yeQDNCeNNU4BZmsVdpK2kxErayfzdbwDeHtdUPGGjJs2bVLS1mqXBKUB72jwF8NU3PbE",
  "key25": "3MGaaifweEsMFYe8MTpHPxehzQy5v9LKsfBRMJB2RuqjR6NMm2B9uPLNx5yUbXZjwYBXhabZd7Nejh3waujzwYSN",
  "key26": "P4YojwRz7cqz1GjkWrq6vRENu6qommm3L2TRRCNqyPb7NkfjKnk5eJSC9NLGCtGTUw9Fx1WqRdPy167H7M13mdB",
  "key27": "2GfosqvhbmPDK39Bi1nG3gd9ecsn6NLGMHDeyxxJJancR9MJG7jWah3BbguTCDc2Zo4TgsnZRjxMuWiFpdSYXKW3",
  "key28": "2XtnFFGyXdhsbB35fdGUtPfb2BaVQnLreNqyXKLy4XxZBWnZUxVKLys8kTpiogVPh2eWzSdAaj8KqSXP6nDyXmmX",
  "key29": "3nQtd6bYokUXVNHjc99USpoMWmp4DNguhF7EeKKKSCdZXsS57YtscnnxGzQ5nHwEbU5EaDvhZwn9Kr9XQafiz3xz",
  "key30": "54bSu9sVoQPgtw29Fv569qjiWzSFZ9TEJ5g9pNEu9XczwDmW3JmURiK5rgKpR32yjHxcNVVv9YkwxvM5WtwJT7Je",
  "key31": "6YCPC5SoJaW4QS4HUpG4LEBCdJbMDaQUvqWz9rRVfnKA1fK1MncXqboBZY9D4hY6qXaYzxvGZ1XixJG7mvaGSDD",
  "key32": "3ocuCJDJ9WULq4suZ7yd5DxvaSSvBUQVzW1pmVJD6QQd7jUQNqEmwMt2Gh2Z9ABdgZghWNnuAtTZJqLLx6W5s6Qu",
  "key33": "4BNFsuejPkf3D1rRKAd6z2VpTVX5Sy2osCWhST8uM7sUGkeuiYdJNqFyjcooEgSy9fj2vL8zKGyPVd891UzmhJ1G",
  "key34": "5ybJNi1rm7Rqx1XWTuZNfsVeFhHaxqBNUza1sAmaxXMCavLz4FoHmv74hNF6cvsdWubtoWjdKXVfQ82JdsATuvMP",
  "key35": "3dxubL8NfZGfK7JvcehrP1BEigw6yuzYkZkR2W9FChbsgKnrma4qDovo7ygfQr859E7161epEeKgVMukngYtd58C",
  "key36": "45yCcmbU7S8etvUezU1x7XhNWjG1AaMEsyK4r9NqaooadDpXGWrzZVL6ZNtscCHnQXsUcE79T4myBSCZx1LAkWUW",
  "key37": "ApXQktxbMCMMLv6VCaieGB51wNwvyVy32nod1CdhjQbG5MCFiW4hywxLCorcCpLfNJikrqkC7K9kWK7n4ziReAz",
  "key38": "5CvvVraJgH7cHQckaNgiajcMfWRAoTaYR3wBCJ8MPxxAFpmnJggLZSYS3F2Hjg3f5ChxpEgydY9QzpNz9ku1pqGF",
  "key39": "2zVH8XHHcAgrc1rAgubKLe6ZYGR1cBhV7pkum1zTfWF5CopLjfQFarivp4VqidRpmME7wm4YNmApXrMTvFH2VkmU",
  "key40": "21qUPmPLevV517TizXSDsqWgNUiWRCFHxgA4xE3Bwv5tyNv2sXt8JTgjgSHZck8s5PXKnkp1vtSbpzqHRHR7j4yz",
  "key41": "48Pr7p88Vtk1FCA4ceMSrjrjADUdPZPxd8nD8mvLKadzfkHBAhfna24Vs44veNDF4xBvQPj46jpYhyZ7TB88LUZS"
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
