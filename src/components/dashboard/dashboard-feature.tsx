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
    "46JW582PVcZWu9hFVtjHom5yXuRZsdG4QsdZCbievvcc5uyMdp1qDxh9GZPvuMAiaz3u5UN2fuUdPivhqCqCbHFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bjv3LYeticr16BdN2pLW1qUgxTeMCdWPLyuvugMTuUhNodtT6M1PHRs3NVCSHJCafmy52mnuKkPP4WPAQRD6EDt",
  "key1": "3W76ynQciCCmiJw3ciGhqxi4yQuJMatZHZyg3H4cJBdnRNMU8yEsvN79BQSbBSd3ZLS22THg2vizc6Yqa74EyVCb",
  "key2": "4a35o2WyFdE9ogrFMva26xdGkkrrGg92NyA3Vb3rEb1oEzv8VkaW9z6Dh5vZYXtc6svqpGDGTzCbwMzgFdtcgmES",
  "key3": "3g38hpmEBRy4WfnXJXmVjhj5invU8HTVTwRz9ogRBnm389qVo6KFQPabbFoxFR5uybBWFRnqn3YmpjM1M7tm7dDG",
  "key4": "2WhqMqMyhkuY55Rs4eF6G6rcYZM9XwzrstHNMDE7xQ73mjzTKCftZZUadodeMKe1CnkLcy1dYmy4oN83vfqsr6vd",
  "key5": "4G9WQdRu9PJSQS9SF9W2ByQoV7GfkbLZwMUz27NHFc6zcReuyyrqzGYksX8rBr3FRpyP8diN66ZGUJDK9mzMgRBp",
  "key6": "2Y1t8xDJNyfJrJkySmWSTMWWNTyvGwb6Jg3HwWu2FseKzcFuad2ZsG2bJVncVf39sxTCvjPqGxRn9XcozoHKPCmD",
  "key7": "2bQB9WhBgrnhBq5KRqJ126cNPg8wHpnLbrueEE6LMgxM6WpeL9zVgWEJ7SxhqYa3Vk4EXzZNZgL682t8kb85LSTK",
  "key8": "cYUd8ABz8KFitnq9Chh2tHSzqv3TuNc56Jve2j1io2kBtNoDcCdtcdMDKkCeqZ9npxL9NptG1BtW4WnYf2jRiaT",
  "key9": "2FJ2B6jT1u2FznRL7fbnRZQA6R5wZnCZegMdRFz9KMmbP1bKu24q6tAxVQDyR4vYaMdTGgbN6FLuzGYHrJzoisBN",
  "key10": "5egVPqFST5g1kRxkdpDLeL9uf5i9JPuLzxi7NAg1q8eR2sEBt1SrQMUtVkogHQLCDanT1q3EuZixcRwwdUaZ3zZq",
  "key11": "5vzQBhmMd2XX1HqP8BWHvrUV6vJe7A5DTyWRjdo2D1Tb9bHjnFdTLeGzugDNBNipT3eqw7X8yaF6t9xAYMu1M3XB",
  "key12": "4iovZbP3vfaWwbCirHPTUBMWvCv6df4HCpjT9q8RzYxuPjECkoh4hotUrk72LcgHSPbt7dyJidjeCBVsXzrfLYSE",
  "key13": "5xtcLYJmAEmEeNEyDhAD8XqoD5ZE69P5iCxFeG7CZn71cY36coNsEtdpGEWZsQqfkv2ux5TcwcjqUK9UPrVqWPVY",
  "key14": "dPaJySgpd28v7ALGaBVQhs6jFBWjCCbaZWoXJj3C3wsohFQ3dGpGAQyYCQ5U82QQfetPycp3UrhU5EUNF5kNbLu",
  "key15": "5wDvzx3A9X65LMuPP7p56xvEfBnc8mgnayhxZ7poLG4M8nqGYbq7WoTu5LstkKUTfvqfbkmkSHmqneNthGTUhu4r",
  "key16": "3BaUXQr32TFVopp8w2rUa9qUm3yxtN1NTPgr4p3RcCMVsFmrCAQbHQ5HfZdHHHmrxXhM2ZM1RskjcTAqfdwUfk9k",
  "key17": "3LPtWvPVLmtTtD4K6rVXY7BzfS5z5z8CftE7yhb4HBEqJJoMKWsJaPR4XbEZK3Q39NT1JrmDiSVFMhq3ac14KPdo",
  "key18": "3xCc5pjb5Lm3QG8fMKVtPG5FXvJpyQ4MAYCnb3CzfpV9B4S4m1vHNsHNNzc2BhaaPSnxj4a5qaMvwq9WBeUEsbPQ",
  "key19": "2MyQMQurXo2c66mHztcrkRtmg5BETZZJzb5N61L7fdxXrybpsHF6d4mbkErzVCitLi6H2WQM8awxRubsNer92w4y",
  "key20": "3xwEg5VHuvFPy9iXsXWf6W3QGLFgNnSfofL3N1fKNxLg9gF9nmmhbhYK9WxxVsSGFLWWgWd67SREvUG7Cd5t6vPp",
  "key21": "3Y9feZsXoFQLZ6wSSL94x3T4MNbUt6h5kPUGu6cpenS1pJAzYQnyitQ37T8Fd39RB3P7sQ3RoBH47H2wWngVQe5y",
  "key22": "437pethN4LSo95gggXUJNuo2N4hHpcMPUPMq1in2DQyrHTKiphrznRufVkqnmHDHvGGQbGMnJpUnun3ppyjZU8N3",
  "key23": "3MMhPp1FSZyp3n1PCk6WzkChvWzPXu2Ti5ESHRiEHsFZFQuhzCeUgCWp6CQnxkAeuTQUBtRn3kAgZhUeimHw2zLg",
  "key24": "2QhoGZ5kJcJjhr9S7KvmFtcFKx8fGrxWdBtnWFeynsZvxxPRDuz1eeHzL978QMz5LnWJtCeqyGbJ56gftUfujrjw",
  "key25": "5EuGfzf1Cja4gh4wzSm7VFHRcYX46RdkCAWhq5t4SkkjuFVvpAwUKCFTkJg3SKzmRzkzZFWETWGc67VtVEkhA7XC",
  "key26": "46aEbtGD9ZEsFjagLymebpUJL355mKrwVnT9iMSvh39nXu5ng3a8VPLB4dtiUwSSUFZedwYh2kfDxr2s4hkeBgGe",
  "key27": "3bbv1Bfu44Cbz6weKgYXYcXrz2Euc31vuZ4hTrWRyUevKBnYT3mdHfxd5a8HCMppG8EoiyK21Wr2d3gSU1mMt6nC",
  "key28": "3SamNnAX2tHGZPUifDJKoPBAD89dXMhC6txHiHHz3BeAckEDSKmLj65kWTe9hByB5TrttiprFTnuaPvau7Hgyspq",
  "key29": "NT27BwoKorHaXmsh31LLN2V5tm8w16fsJZrjN2oGKi7ms1e7JdUnNjKrRPS63GcUe7fnn8ar3SKxc8HMy1yqWY7",
  "key30": "426DevoqdVvsdnmYNrrVBMwMqn15JDXRBW5UNrGVEEWzffAvTgv3u49KSEheUj6LX5hdbkQ5s3ffCjDmLzmoGn7c",
  "key31": "4WnJ8DBs1S7Jn5zXgFfvBkdADDtHEMEKjxJpmiv5Wco1B7ceFcPSPd1ynPav55R5xhXctwRPV4vHMGCxGuYF9a4z",
  "key32": "4upNedfEWnC9dhhCHpapC7PGbwJmRZ56LJbH3MounJHhcRcexFFYbuXa5tZvwPZoNNxSFcMJ5C7WUmGDWsaEpyR5",
  "key33": "3xkZcLtJ9iGd6zBfVzCtPtC2ws3Yb1XqrGAVQYKBJiTqujrCHPes8Bn6SQjARjmRAJcWLGzFpUGTixnCsnSTRUn4",
  "key34": "gFsqCvtNxT52JWrH85g1Xhj5h7n5otGL4u6JV6sntForA6iGRJkev4FquvEBtUKZMsYCquS4Yvwkfbshj2jhigL",
  "key35": "2RHbHWUSxqiicFf16g7vdW3uayya4NTY59tTsuRV9V6FWiAG8k6kCQ3MNAYDnx8jM9BkHCGvQSqbEM3udz1ZeWgf",
  "key36": "5Pm6kN8qgyLvW6DEv6XtZaKgJ9kd9n3TfX3i71qTosdL7G8zo69pnuALJ3Qo6XueeyvVjXpW2ara5PsT8ZLyL4c2",
  "key37": "5WMpawxFJ8eay78PfG4aPzwT1BcnwDbQ7euQFahKWiEaBwVHtWF4vsiPoVGiux5gcr2NQyvNCv8pdcgdivEteDwC",
  "key38": "4UVjrxpGVF48TNe5RZbc1V76cye7zXCCY2WzGHRjBf1ZctvM2RDsxU1tnaStubv5TmJRFq85WzFUPoja5ZUsATxo",
  "key39": "5caST5KxuZjuRmzfS4qPvBDMVbjhSCPZ9mVKNkwPdk9nYsJCqKbw5Stiz5NKheQ31v8HEA2sHuyECPPyc3Zr1UuP",
  "key40": "65SHvNcLp3Kgm6WRAeDBx5EHoBdzXL1D7F5CGD7jtAb9Rz8sXXwWbwF9E5S25X86ihpbf4MRQDSgiL36A3VqJcwc",
  "key41": "4Syt7eJYjJnvvBKSCxe5WD8e4nKqPkjLUfzY5iCVUVfk1aEyybRUWVo91zAyArKF4GxqNpRviHWY4AZ2TVBSC15Y",
  "key42": "TR6E8WyuaWDdvTbgNvBqW4Y68XFpoXYFEsTEJAkdNS1GHB7WW39ymRogr4xFghsXoQQ6z3ZMuBctq2QRr3VyKU2",
  "key43": "4iz44qNEbGFhzREfMh2PQHwnbxD1zU4TRprocwtF3kX1e3eq4FsRw7fSyqTfaz7xTSHZLdCoajAwsrhuZpKxojdv"
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
