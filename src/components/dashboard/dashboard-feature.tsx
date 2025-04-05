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
    "4SM4UJ3ztbMFJk4kwagLHJJC6fhhiA7uMkG6uJQBEKyJSYFVpAxoEYWVfbRSZWCUdvttj4FuXz8wv4iH4EhNKka9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rroHviPXfkGeCQuhMQQ7Fm7uwgsbN6rmruMkEYPSmbnYvDfDC5RocZ3Fp5Q9m6kYc1QdpXQfiNvxkqTwggWSiyJ",
  "key1": "2hpMYbHehzdmADzkDv9y59YTm9dhueBC8hdZixEyYtiDfp7tv69UPH9gUoWc3HeZoGBmgVtyrja3zYCpSp7vsevP",
  "key2": "5HRgBYgfwbvL7h4BPvp1WaoBWnJQr3mytcKu3JTNtkYqpfvenKkJ5UrtVGJ6JDsgNR9jGVhY4xFTqP6oCYivNemH",
  "key3": "5SkYkX9gEGCeTEsS7Zto5TQS2jgeaCSC38vW6n7wB8guUaK6CityFnedKFToqJmt9cVPzbWb988hN5PjPDfdLHMC",
  "key4": "315gVVs8Up53GbJEREguhb78AKthsT8L3ZxRAXzx2BF8kcT6W1oaAST7joWAGh1mAkpJYxrNP9hTyY2LcWw1o3Nb",
  "key5": "4xWJi4gFJqszmtytDFKovz8yfXtVXsp4nGk49NAekrxo4J73ktkQvACPtnRJaUcDsnX2dcHupvmhUMzbPp2VoNWH",
  "key6": "hpiaW53J4ELbF2Y6gYnV7C8cgqTSvR3e8RrYHfFDFKw3sc4WUyV9abkii9EY78KF89KA5x3dZKCakz5Dw5J2TxU",
  "key7": "37oaVBL5g1bZbAzzUZJcW4PsDfyX8erEB6Q3KGEJnVEhM5wDY8sqJByLe4rQTePCgat8KRMdNfAGCX9YJ1NarHnh",
  "key8": "3CBJKeG2LpyJ2XwGkymqdKyewvLP6SRqAT18zWMa1iJLjtcpLWatb7wxwh6sZ16sxjDnvN8oUAjsUgBMjjdSJN5h",
  "key9": "5A1j7UJ53UBmphmEUtaYPCjQeLe5u8sNRCvxmvsCiG78J1CRCrQK61ADPzAebzFK8z1w6hhN6ji7dtTcG7n42b7R",
  "key10": "2yDywNVGfLYPxDbEU9eFGRQFDSQmjAJQSWsMQ6bTmjpkaHWUqhtfQWQqJkhCFsMNyXkkvB9sWpUtH58fjUD9PqJ7",
  "key11": "4GcHQzmin1fNpwYzRims9THCZVeiyWhR1DU3dD8khTDjxJbcJZwxcw9echtq75hJC2zHK9G4ATQsYYeBdryerak3",
  "key12": "2f2omda315VfhVX76Ya7xxPYfqxtk6YiGnBLBzXHvdiDMQHFWMjAUf11NT2bh13tTQspv8m6sC9jW4yu7ejhdhzA",
  "key13": "4ecKtS6DiP6i3tuEwmz3ZKT6hshW6CsWXd7u3iVRTwTZ49yq2S8gbxx66gXLJVkX9arGwoGB7bmWGCTBfct9kek",
  "key14": "5bjsguHaVvmmssn1Mj7LH8KF1in7ShF9SGGJyxyS9x1aUKQSHCH2aBoEdZDJjutduL63ZpybaNPbQjduswVaMYEN",
  "key15": "53y517CTW8ycyrQZsCJLiFKnXuaoWUSn2MrRr9ysvSH6N9K2nynd3XTxj7iTzuWxW5UCna9htGb22FDpSx1ueBHL",
  "key16": "3coqmJPPtYyMBzJx6oJ3BgdXaJCfMj49t4SS4krFJXfoysaiDxgpSZ6fgLvrEfttx4oPw7LvLLCxcEANya8CeFaY",
  "key17": "2n4Gy9QJXZtKrD3BaBUyQrNh6DALogXKMNoFKFzKrotinjPSoJ11THkQLqP1dToejDAS6AHJF5mdzpkfRXm9kQ8g",
  "key18": "4X9ZZAGAbC3Gj32JbDTA96KmFxwoMnpribk2iP1RKufLgN81G46RhyopcXAMgrae9n6pfuTqAoU7xTQXWAxTns1n",
  "key19": "5wVGXsyYfRWXmt5z5J5uwi6rL86VMzCvuVH1jYFDuBtEfMWC7wzJxTGSsTjXXSzxhnQ8HjFdJtXshSyQWUva4iva",
  "key20": "5X1daTjuxWp35jxBuFgCtweFwh69XWb9Cowu2eMCdL6MP517SpQqhyrF6LvwZDKBV4B85h6yGJNRP7qWu8FPDnwq",
  "key21": "2W4S5mVzuov52pv4Gyq11LmNh55oS6fQTW16QQ9jnzQADyYpZ4VQQv6yTyd5mk9jGkBNZcQVEdSP9dWaFSMZmuzn",
  "key22": "5pVKr4AoWoFhhcqQqAintAQYjNGFSdqCBVWiTZSGD1E1ffb5qXj3roAs8T53DvK3yECqo8zdHw9LVGVa9s9Mijct",
  "key23": "2XJq4FzAbdNJpPvv779EdHNzGwCxUZd7b8rWFKYJ5qxtNnB5va2JbHipQkQgEGD5jPUZvoSRpiz3oUrSqDxERzP4",
  "key24": "4dpopT9whUZHcT3MHXMTH6zr9Wve8Rqp6zVPR4mtTzZXUUdKQmtyMGgdKWrtNUqyZ5nJhr1ruMpGLWJ1vwExv9Ld",
  "key25": "4pH4kJnRoNcfT9Zp6rwrU2zVjpx5bhwLtqRyyzRYajteLEs7UZyJkcfLPiYh9yjy3RFzPJuoog5JLVq2yY7rjb39",
  "key26": "4Hec7M9Y5BKvvuqk6xBHqYqPDvHtL1E3qhHvRL7zk7FetbzGgpuT6akPnvXE7Aa8Lf9t25yHJhRNv37uevbaDPLa",
  "key27": "4nWgSHWtoXSX7dHCGukSc9Z47cvANVaDunexNASbi8SbJznRayfKQqvPU6bFEFRRUXL7KHjXb8L5mxgxaQuVvsja",
  "key28": "MruRmVzFXaevtHeizSL5YPvx2exFjE32uSMuUHCfothg8xpkKGMoowGTre2e4fRnagC5SSjCPqQj1XKpKGtpa2k",
  "key29": "3YFuPUZQcbBhuMFKVQDRgRbCRhBT4w2oPCoU4GftmMQuKwB3ruqF5yb42CB1R8GKBkRoGXK6C775Pv4H3FDpuxzE",
  "key30": "2SLhfeU6PFbZc7fyGTciBHBXDN7Cu8hZAujD6rm68mPx6M33TaxUML7F6gRPHXN9DSGe1meVXfuMDCyAzdFPfncd",
  "key31": "5bqTtPpSMPjHE3HnPSwp7gdGsyxmzxYRNhqhcgNd3aSNb5wtyYyJiyxj3M9FjDM3cQ2AYdCtQS8i7pofHsWDZXG1",
  "key32": "2J6PW2SB3an5n8nH4QjPxmYdBeYW8LaVVzbTVBZQjQfLfWr6rQbXF7V94zBg4Lba2Vkzt2dyA1KWRixRtDyXAVy2",
  "key33": "2Ag6WNYgbcnv5njVEAH7gowQxZUZrS3vLU5nt94BTsWWd3F8cprdmZ77fTjngJxzbGXCb2k2sjtkfEbKVyu7BoE8",
  "key34": "27jJiy8qrUs9XRz3633otF9uWnFNGu4CTzAc8TPMmTygBcqaQQHcSefUwb2t1maNvxmyQwhsJc2gTtBifH52oGUy",
  "key35": "2ui5ppTVL6iZXCn91pqi9FpaBC6uBFiwZ5n5odBW8CLyZL9AsFZYAqZUDuMDpJ5DgjsjxUBMVVyBtbiqVrTUPETc",
  "key36": "Fbs1xEMwQyukZdSXWNmH17r8bEZhfG22cDbagPMMQMvwa1mVtQYY8hKgwoZjCWeSmqh9FihEhaqtB7H5kRWD5D5",
  "key37": "2C4DqvSZouKi68A2rw6GMPC7VKq6ToXsJ9E3RQ8cFCZWxEsc92pCXyJafGPPjcn77TceKqrU2i4rzXTBhJYa2hBm",
  "key38": "634o4CmXPtA7YHr67ZNZ327Yjyp5tSNkzJDk8QBGz1s9CYxqN65M91rk5GCVhQTJtXu4iu36fdjnACshX8RoeBxU",
  "key39": "4gVCdKAKexDyS92zVEvuy5FN2xcPmgRHaphshaTKyXJd6oPYHSFQeJExz5VfQYpxBT9kk7WBKYFt2JfLxnVokhz",
  "key40": "4KMcWvGaQFf3e3BZuPyHnzzCybjiTE4uvezQzzAipVzyeMiRV5ZerrqiikYCbpNRYXk7CKYhphfNSvuSKDYBQEGe",
  "key41": "5rsQDAvFTxuA3FAqtsRuwuVJ1FjNAZc3uLA1NF1hmNrjXfXJcsE5wicpvVbCZ48rmeRJ7MHouCCR2NpQJUzhenhf",
  "key42": "7xZYshZ11CaijsHpk8Zi1oYeyhZv8QzMYBpArAsXQjxQ1S5PVB7iNZZBs2iBA2Bam1LimvNxW4s7pjppnYcVF67",
  "key43": "4AEVAMkjbRXy1cJgLRcF2a2VmZGcgkYg74nMYcQmg5yDKF4rgQ9eSwcRHpksDwNcqTSkRGmUEYmDo4SDDfLczL5M"
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
