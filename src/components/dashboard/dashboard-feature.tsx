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
    "22q62mUe1eJsHYghoQq4X3yjSnTwrA7qCFpMrMJmVQDZbUZSZHv2PRZ4AhfEEGwuEKo57wQKKUy1ypmBSQLH68sC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VaP6X2d3EAXuJXYWzwTt97Xoie8HDtYXYm1f4Hw6jb1ScMvP5h8VL7ZekBWtnef71fyP8Ptr1niDYxhAWP7QBzA",
  "key1": "3x1ass7PgZYk487VJsvRKNokK28i4BEtuQwA4Ftk4Qm4ibvMPS9iiGLD1pw8nKq31zhzp4LmVwHKANEq8eh7BnEa",
  "key2": "4cd9MrR12RNitX3vNzeYV4rFiyq5jhdi2H1QegjNxBbhzSuyywodLm16s1nTU5UZLD2b5YxATBnc8DK28h4ocpQQ",
  "key3": "67W5YszceBF87J18Jswxa8mdbhSGNN5Qxa3Xk9BgB2xC4LEpFtpsFJrDGdTNwdE4pveBiC5DPKQrnVtko6WciDFL",
  "key4": "2A7BoUWSZyn1cUeRxKRBZuwfHXVTNG1buHAWwMYLMZkTY5rc7RNqPmVTXwKEa8ecUQ2zhdMTS9DuYKVz8oedQqQB",
  "key5": "2Dgv8ceVAMyExmPiGpbxkL81PYu6dKfz24igz19BVwrfecZqm6iYVmo7mThFt3L1dQfxKp8m9NbUohMHYUWSKZxk",
  "key6": "57zwG5xFjTUQWAXuV6TsvXT1mQxkcUQ4PV7krbG7ojBcu2erA9YYUmX7tFTyF51ekEExL95UgwqTvYpAmnfg47zS",
  "key7": "3f7NgAvx59T5iDsbayhvBLkYoRxhk3QHbmwD35F2Q7EZsLdJLYe75YH7mUcQShNcwiuUnJcXDacWyfbNAiAzQxGr",
  "key8": "5QwtnMLuVyY3hth12YgGWNEStEBZdajMnNtFDVwgX6dN2ZT8j58wgcnZ4bhviDp4uWmudiDdNjoNeiMDDguBSbDc",
  "key9": "Pn6pBSNh3YsW6U9fF9S34z5qasdQyyDk4PqSnLUa9EPgBLxk6cbZUaB8wHnHcrkVGE4zT5mAJajk2wCE972keUs",
  "key10": "3oiZTgTBjxpLpMchdfoyxNdX8FMnJMwN73QBXJ37EchWKvWprBF3ygKptFC3FhdkygprxpdkQtd2bfSFvBzqeEre",
  "key11": "3kQfwFK8sMGkyFmixzRMQQyY6ouMZNATJ9EhhSUieYckcmgPoFhVneJ5TMEC1uvXTqHxxFcsQxdqpemdbvf7Qj2K",
  "key12": "8VE9a9tHFkC39wvejdPjKJkhgnuQL9SkXuXx6anv32Vjr2VPYeXVqBU1NqjfzPMrYTUwEZtVb3gxTQdFzqZVPyP",
  "key13": "4xbVoTRkBGppkHR2AGc6qydmyrbu6ixMLBraEZVoxVWDc71YYknS3KUMzJAvhgHADgN98ZLqBfyQ94km55n97cfK",
  "key14": "Px3P4c5rDADGYg7g1UfNPjjR3pwxJfTq7qYH3SxBRrByfUNhpR7va2PmfT5dHBT7TMNf9itwtPVCtmkizTB8jN6",
  "key15": "3HEUGe5LRXgxzvc2cJZeCYBXZDWpekb2sdEVLrf5HzveDKnBrDPDJYG6NpR7REyb7ZZ5p1cmi2jiG1wZ1oP3RBcR",
  "key16": "2i7jmizPYGF7rxxLVXtqGthEnSsKf5e7XzNSRNhLenYGJpVtXp2XzmnHrWHhxhEk2tx93LRRQyzAnHGMiPZ1p1EP",
  "key17": "38ZnyD9cEfxvwHSMoi2TE27tFb1cupgoJdzQxxyaci37mApmJheTUJBLvXKiR3Ro1iHbwgMUGqs27PqoGK2wfNVz",
  "key18": "4xnGDxVdguFCJqErZo2mr8aVnxHAUBrDDQ2jedFJJsqUXpo5zcB3RuqU91CMhTDDYUrgggMuWwCDUYi58NnPRM8p",
  "key19": "5KuQBGKfasqQoR5GowB57LpeCvUDcxq57pPnxqzAXbXLeNq1zPRVtcS9x6omf3p9PQghMA6N4gC5gVuTLDvaPqTs",
  "key20": "pKaDVZmvhQ2gPcxnEtX8kZPC3Z3kpQDLyv2sU2pHmzzbEwpFXHYzT2GRy8ToHEeCr7RLodJUtHUndjrZLQFanao",
  "key21": "3V6BE8yd5CAgTafsSKoQYjaVWNJksUGiH7LGmcuNubnNbVsPAY6MtAhzh4xVr5mSUqYYdAPSygDLBQehQmZzgEUi",
  "key22": "4wVK1FxuiypLP4xfB7xTCyV3LXr1khmTjpxmJvdybZfnqP4Vn66ysfiBnokk3EpXtVtKLTr8g5E5DZRyeJpPZAC7",
  "key23": "4TNKow4KvcVF2yM6BQPmEFcszDct5KbVDePc1LPAFtstKTAW1U4KFaYxKQx2zpqTQvccqARHgwHHxAiXNXVQ7CAe",
  "key24": "2ksQbJiBTQ6pNRQgwhV1EdnXkyGZYDqiAKpfWTBJ7mTQgWaXFjregGe6p5iBLjxBZ4NJ6qEg5ibfZbWBcstA5g9F",
  "key25": "4DSwM29AUchwZqrnUitwjJD46E4piKLouRXbXVS2jw5eg4RuJAbQVibaVEw8xHG7Pa94PfUxsc28sVALvGeHBGf3",
  "key26": "7FgoMzozpUbywL55ioqTuhLSKz4BKUeXR4xnCW2VcB8CKcTwif8qHiBanoGGvahwNGjUViuERasj6vQnnmGks4G",
  "key27": "GiYoNtiii9CCrwdQJW4Qja6yffpcJjtR6et9wgy9FwJJdvhMSokK6nddJwKjSkRK5gC72V874M6SJLnTgaFumaB",
  "key28": "55n8M48r7dsR2BcFmb8hqP2Y8e2ohWAFVvY8bZTWddFdqmn1UkQ3chhiTZxMFj1VWr1QAvNyRJoxxEhhyantfidS",
  "key29": "3FaZzGcKWJ6BgUYpEusFuwUAYctPRyTpUb5y5v1JrqBzQy6WFCwrobUWSeDCanN8vUsxS9F6XMvQKbFdvtZPsfru",
  "key30": "3MbnkWLYADWctsFK32SQQsrd6xxep2qx8CeYr7QaAqL6Lb2EZ5rSPjHPFifYGU2e4ouaxe8b2ZPvRZQJHGAqUGeu",
  "key31": "4wYAHvXxs2CwTAgn83Q6tDVq2RPs6mGFD77kcBotG1ncJ11aP9rPwuRkXgs7M59za1hHW3iU2A2G4x1iKtBCzgDc",
  "key32": "4XenYXD8bmty4CcFV2N8tL9Dx3gLAYhqHVWSYfUEpoZ3rsJYGcaanasyEfzNGvgR7ZeyPLNy41vNgmYgmVcM8415",
  "key33": "4henzTEuun9aQHxDvgLujLE9eNGLLJsCEgr9hESvFYxyKAMndnwNHCVjvYbKfqJd4gA1MviWyXCxZCP14PMYYYgF",
  "key34": "5AfsJpbDhT53mUAfAn6vfnWdquQszqW6C2V7TjRJa8FP3THeHskmSU51ppEqPN9owp68akD2nyXbMewJ8a8DrMBm",
  "key35": "57UKYoggbvAtQxbPGEPuBsTnwtoyeNjBG5c2aXG9HQbkJvH8hsr5nL9oA7qWgtdfnbupMXRXZuZK99ECL3YMaLJ",
  "key36": "mYS3PQRqK198mn4mL5S4Xehd7XwWCwvQeQEmgy4RMgwrTJ9puyfaWkGv5ocJoGiFrHqF9PTrxYHnAbAfwRY9U1v",
  "key37": "379pAM1saUeumfkRbowLSTrToSoGsrWsxxsLKB6hBur15SiSk3QdQRHvf6hVbQaheSYR7hjCLWBdzLeD3e9zDXVV",
  "key38": "P2JWAe1rkxAr4r2YouAb91a2TA53UBfRPzMAYkwDjdSEbYfanRMpfufkV7gTWn1Q5g79whPXv1NSBdPkRAbzUmn",
  "key39": "3fPfRBj9aMrHYsnKALpPkRDniq3pQyA6Sa5uurzyYn7qDUdkBzrNHXgPMZpj8AfAZrDZqBdpQxiFAk7jDbko97JT",
  "key40": "4EZa5PqnS1B4cH88cRdKC92KJ7gmYongCbNaKgHZYsikbRfRhHfpUUq4ugdtDbQqCrHBvSqYZuteThoK7bQX2PKG",
  "key41": "3jCGgDGbpD3PZ7j7n2azFmSYQeCdExmHcq4ry4Kq8btbbA2dFkhktn2w2bHQApsoaPFrrnftQXGMDAFBZyK9o1Pk",
  "key42": "2ZvUTraLjtu6kGAsN3buWCmm1ZV42nQpufX2SwCeoMWh6CWDGRHWimsB7AspD9Ti9wdGYFZ7MLm3RGjMQ88kAXkx",
  "key43": "2dR9bWDBnwpc4rFDH3AX49yPKnYXKAZ88ypb33UydjmhicytbHw5EKFscqwtJHvrG6ZUCcYCnaxz5EQkRJFCXMhz",
  "key44": "5BhK6yoNS1gSbVgyd3m6UCZ66xxDT6H5yy8Nw8U9AaARyK7c6VJkYFYmybdbP1bUnQcBQfYAHes7QrTBLgd6DY4P",
  "key45": "5zFRACMufewEwwUmGzEZDUCteoQEGRLyZ8BBTde5G2ariVHeZdKKe18UuypYA9ZDLw94h418TnVGikqV4cJ3caSQ"
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
