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
    "63vdRygKZmjj339ckfVbMJ478ngS4dtDtiuZf9vKtjwF8jJzkUq7xL45qxTTyo7RQvGvF3Lg8MAaHgUibhPpR1Fi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KjE5RYTXJZLGqkjkuy8wvBmsE7RfyG12R91J2yYDweaj3B72ixVsGVqPxqdBLBSKreRNiqgwyThVsXKjybHmB1",
  "key1": "hiA4gnUo7N4kTTwxtzyg53MU5XcYdSAoBoJjue9iVWa9a1xnHJg35h9nEu4z9irxxWNYWto2idGRbnAVPf6scqv",
  "key2": "2V9Wt8g4MofNJssxk8mHkwmeBnpkBWu5L8wXq28FaVp1YFJvj8dxVAwAm7C8Mk4mHTZFygy1VaCKRYLNHU6zuVUq",
  "key3": "MJYgER9mqQjYYAqRB6jTjYW9UxJnF3onVQCWeS9EEWdPMd4BZmZWWqFzS6P42ddCkZ837A1yLHGPQF72E51dawP",
  "key4": "5SHNiPdCKdJUa3CPVs5U9UW7fBAYVRzurok2r7p45Mgy3wugM6zdijAeiZcLzB8vt9AHfzUhWkURhyPLaD6o3TBR",
  "key5": "2kRCFFV64vPgHUSze7Xeu4eySDSFcLjsDioW3281QQnqD4c3XPFxu2qiT6HHgVizaodbpVi9bpqtGeL5aV2Ujcva",
  "key6": "3z4uyAEFvWLdCFfnPN1Tf4Qgjb8ivd1J6FE9ratn63JEGRkX64461DTYB7ZneFNkJLF2ddnkR45MyG4K1LZqqvMy",
  "key7": "62ZYun4c369fTtHuXJdqrn1LfdwodE4LXcmMSkjFnKkykW3oNnpqC15FEk9DYTmkQ9CtkhFXtuCrS2DJq8HbdGE2",
  "key8": "3SDyZfowhAu8Z8111a1i4dAgK7vhwCRt7pnsthKdPoXp8AVHzYca9RotfxLxqiHH1h28Aoqbkso6EVgCwzhPC5wq",
  "key9": "3XoPjkXyBubGvK8WWeDKtDoEu6jVp6h7sPNRRGN2LLDA8NAGthdv1QmZAf5iGr3VTk3b9CzziW1VJvnmmXXjp9sW",
  "key10": "5AVc6Nn9357jp5CkbkYzU2YDNKRCSAPyCeeiLZG3rkNNikX5jPMsULGbW84nyqad23zfcyZbsXsj79DfuuBieATK",
  "key11": "2uJVr2u35DGbVDYthdmjESFRgTioRRxqdd3jH6h1KwrMnrao1MSiPaqt7jm5C5StrPUd1C315ADGsES22PFwf62H",
  "key12": "3gpiRhHi3LwrvMXMz2iw4mrUZF7sq1TcwZNnZV61isK7pBqBEE5xxgVa6d9MnZ65YjAE1pdabX5K8LRNLQyysB8a",
  "key13": "5rrrFkMf6F1uSdvLhzsDaQtnDXXB8vowGctm5ppaPVoP5WQSL5te8Q63qFkyS2je9AdBAAucdUQR7Wwk7uPX4Wte",
  "key14": "5CbrqT8JdyEBZTqDE9FiPHia9eEzqUU7RGGpdG6n9EpHVXcknBUo2zTMYuxMz2C8mJKA39c8UqeR2ZeqVcVeWrU1",
  "key15": "2AQdYSB4Ccqk2DdZ8tDtuULgffFj7uvm2VZWJ1AtYNXGwQSTXTXPm7bCUimny8ejMzy8pEujenUJJPZCUvyxvcAg",
  "key16": "4BtVDg3P66td5k946aG7pzHHgCwmq69QwMTXRetVp3AB4WytSpbrJHdRKAPBzmV4GYhfsZkrgWeE1jYrbLBPzH7k",
  "key17": "3pN4XuUgBucmxEBtWR4ns1yhXCwVyg6FP16wbKuy65ErbKAR8TZsoKF7jPXxvpPLtUmEsPNuMao76CaWBQceXVto",
  "key18": "CARGgKg5PVZv5fUv3JYBhc858NY2umj2YgSPMsYfwtac88ufd1qexP7VsnGvBCkH84JfRQY8EB8ZJhAbjABP7Pz",
  "key19": "5z7XprgFAwkTqvkp85yzR74Hw9RPKqagscc2bJNZ9Y7dNuvBm4tWJi4voFXgZmnNMtP42z64cVwYnDBgEEqcgVSr",
  "key20": "5qf7nfaKex5VFebZnUnFEimZ7oRLLza9NmPpntHTLZ8tNq9s9qahnhCGLYj3HzBxctPo911pGTtcoknEVJqQPVbL",
  "key21": "2TrejAMDJhvjrT6kvQEJvzF4rEQgUg8Vv61CKsCV8Qr7ENpC1wnE9AUbBFqPzUdbu3nsuQ25cy889VHekAFBCNB2",
  "key22": "3Zgu1QkjZ9hEAWfTz8oHLMqzg88qTJqScsXY267hDQUmLSLr2StdHhsyjgpyVAHPb6iFXh5GhFS5puoVK15X2Vze",
  "key23": "2osjVPLxSRsMn8YdGuSnqAnFbBCeXStFPGZ2YkaqJqSyAJoC3Yb5nuMbgGEiXVHMC7UDjAqLJawSoaei8muwSTm2",
  "key24": "N8H2ZmqjkUykwGBcW9euwzeXuHtA6YnpjtKsPTEyyzrdrHKEdW5d3btTtpMjje9RENffCZh5jimAZn4Gdh11q3Z",
  "key25": "5zjtE7CUYJDhVJh12ecwbAXGNpTjeNFnhykr71KR1ANEQdjFPHYwcR2wqYQtwtd2uYgwzeh6QbSiruWoXA13JRqU",
  "key26": "5UXp5TCvMpjda9nF1j9d1sAmyGAxDmGuKriB3R7HARmdhGDxYeXxTFiqyqkPjYaphGAwMkxrWUzP1z3xXpxvb7w2",
  "key27": "55CNNFFpCDWSEkr9BRQvqvnHvdd4bgeh5jWViWPR1vmtoCLNzJrSgTM1831n3wAK7JW9aogrmYp27eYPNt6cQZ9Q",
  "key28": "4rTgf7sokkn9CY37eA5PK2CybqDq2o6qSaALLCcQ9MAAbKqkDKt11aYmRgmbLtHCWLj6YfAdMz1ekgPTr5rt2iCJ",
  "key29": "3PEeA3y9ZLzCqC6uMcLBqhqVRfcfbP79jk6Y2b9ViqqTa3kR7BPbzGvbG96dS5PT2ArwWUHNSqVWFEf65S2h5KFb",
  "key30": "iMtwiog4DWGE9uakhm4F8wDkWtD97KrhQqwkXM7jzPvGMZw3a8RJzTG3a7UsADddkHT123dnNtHrdT8fjMExbNc",
  "key31": "4oUrgZFv8GvANzUbi3W8r8KQbzjH5oJyKcdxN6YFPZmNkqMCbHkgLTgsbq7mPiS2CtaWxqTnsWQR7st3CtB6kGE4",
  "key32": "4rLKSfPXASKMHxzzfHhcHCss5czn5kojRZmdQSa5d8f3TgvBwNmZK8B6B4tnvDrAZAJTXz6i5mJzHWATg9EjSCKD",
  "key33": "67B4T1zwtDWiAAjrmUtJMAA5vqHbNc75va7e9b6xYW7cDrcWPFNWb9X9mtPNUAS9VWivqnXW652X5xydaFBeTBHj",
  "key34": "Vx9ZYbbNV2sZDc2VrocvGqZvQEEfQVcvwxvfZf2oRf1jFKCFbm9YE317WHLRg7aULRnnGYEoY3T2t4VDUqyGxWu",
  "key35": "1s3RyGB89UgdtiEHK15S3S6ixaJoBYQJ3XjVBmU4nnkeak7WQpnqn5F1tnSHdGe59DimCJKqRBAYE1mg1C4nGAt",
  "key36": "3EKQaV6PxRQrwyhpjNujPqAACy5zZGSVok4Uaoq5zhBjhXPmMPtG5RBeGGT8WTozPY88h1z93c62FcUcRpfsZsVA",
  "key37": "KbEqd1bvsC23WnB7pZ5d7uaEt819KWPTdPrptyQRjFi3aSXUogozjBTDijApDobGJbuQrV2SM3qwnhSuSKDLf6G",
  "key38": "Eh7Je9LUN3RL8BXv3AotpdmMRx8ChMNa5CZ9XUjmko4ryLmutzpL7D6ysEswxt6xDY7r17RkEp6JP4DMeJKqzCR",
  "key39": "5HVzk444x8jM4tfpn7jfDihxUH1qaabzLBBJEMsqRZfWnBhfrwVDtZu6KXeip2gTtwMoBYM3sm93F8qosJcS8VE9",
  "key40": "542AP3jjry1EodsiirHeti7PTFqDqhRq8asuSvmERxdmFRMsUk9KbbKXD9zzCfXNZLU7Sh1xQvSsm9JWwmd2zgUY",
  "key41": "5fTWBdX5gNVL2QJdJpLzXzFKMntQcD7ANJGByGc8x656ySqeNAYEcmTghzNyjXSr75LMbBjvDwApQnhQ6NZDsm38",
  "key42": "32F3HcuHsjezZ8jDXez9pnU5uF3XpdruRzuPXePjcwftThmbfd9ZYFwfebxswZckvhwP9ydJERRyGwWyxXzAM6hu",
  "key43": "jmA6yfDwKunsESJ6phazdCYD7q6rVWBuK99FtqRJV4kFxtG6pq6WZ8a3fnbTuNA151n5HLuiYcEPCEtJZRdwrba",
  "key44": "5ZX5s8rT25wQXttDL9j96NFRBKeMiE6aihGaEAbuMNc5Y6ZCFEUg7pfXrwgq4buhj2xYrKqRpBziyTTZjnSJjbax"
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
