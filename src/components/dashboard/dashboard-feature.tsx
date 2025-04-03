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
    "4LXWA9cPGRP6q4f3SqX6kRgLY3xYvMAXApE51psj219PZoc5yp8LQjESmDL3cGu3J3bzhab2ixCcdJfeXxA5DD3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27vPmhwxLDyMWiybrJXFVzwrsWaEdvwgRNjXnLr6iFrmPsEkmsgmnj72ana82rRwyvcSmPpQ6cu5uGLr33ukdtod",
  "key1": "FP28R48xjfPfFZV2T6No3w1g6hMijnpE93ibDUZz3mfBHighbKzV4rAgxHmZZhTro4SY73iyDCFxBxF1cQ2z8Wi",
  "key2": "5qF49NJqb1HXaRM8GNbYVexooQvptHLBQHiNE9sxuvFdw9iAS2PLRC9NHDYAngCbeKH1EcansnMCKRxcbNDadnFT",
  "key3": "5D4svgvhf1gKbyj75qShLrhAQXUPhLK4LUas575iZd9gxXjXosNQAyno6Jgbq9vtozi8tdChAwK1rHSs4cCG1sHp",
  "key4": "5fVfGwFi3bb7h626mwVApk7WqWUTraa3ThUoMViLcgVymYLD1XuFfvjVovREuHS936pq62ehF7vrhMUeQ76fEUbb",
  "key5": "PCADC1g5UtFurSwTRmvobmw3EyQAciYn5cFbkHDRNWs9Pg4GkfYEHEsQz7wNsbyY9eMrMybYF4yV4JLSwPDJW3J",
  "key6": "4Zk32zJWn3pqNizkJE4o4fK7TwSfP9dccCpN1L5Hc5RqmNuRDJpuyMhmpGD9eVBi9U8je8s7g8qrfyiSqN3j6jCD",
  "key7": "4LLuBVKr8BnQoK9RRn5nWGTQC3eZcSHJRc7nesWqu9LeF9tZMrgCeyVHZd1f4njVciuR4xePAfFBN9SNwFMpG4Hr",
  "key8": "YAwxYreUXWzwTcP3W4wjHxrzQchYkhwLaVwH5PtYE7TH237BpM7uZJFH6vmPYf89phvgupyEHzGVGJp4BWMi2F9",
  "key9": "44CccVnk8AuDn7RhMzNWyNPxBcajTyQAwumZS3U5XPAsYK1rkkTwTAHMdAp4vkGTgMPa4nVZ6ZR7TXrGRz5BbDS1",
  "key10": "2DvxeaCN3NgA8vtVgBrKXbq3Qaf9eeDmW2QbBphytJ3EFFKbjSwWJ2d7Co9qjoGBe7pR3CRAZpzqp7wdZV553Kdm",
  "key11": "BbdXUxAvTTHPe7SrMeH4YizDno5LUVFoULsoutBFs1pfYjdtQEM2eYUb9q9mB9YN8hxGeaABF9mNLavCBSnMhqg",
  "key12": "44y6tojDciPx69fEoWvKQ2BkpTxRPpuoBaCNkCPeNaBE8C5jNbnFpi2391h5J9BPWXUgmwkVsKQLZNDwDwZ95vbf",
  "key13": "2oLiKaKtDP6Rg69ydVXsi49ZsYJXsgyiKM9JPSxYxYUKAoWuuSZcMzq3STRNWHd9ahVVN9FJTWjQRocZnq23ZShB",
  "key14": "5oFPDaGG6nm941UwXDKQTWgDsAUtFm6SV3DBFiDdpbTQgNkpzNqxFGbpSuKuQAfyZ3eHdLwDCzbBHRc9ceyKV2n4",
  "key15": "5f4XeUHFdrQ9Q5AkcfoxhNRUStGuyzy6w6Yho9kScCWxkZLZv685R2TVngdxYfK5D1N2am2dWvBjH1DiKqsxJf8d",
  "key16": "2RdjWr46bxLQNR8Hw8mtGr2rwxD52Fy1www7GDMsXpvmTp4kFL5azvp9i2zqy3DLcMDv2G5mJu1yVPmdFTa4ZGkj",
  "key17": "yaYuP37bXhpJT9uNStYa1eK5uJ9k1chE1oNP1dxWF6SE6nVQLkH2VdQFbHLzANTyUy2bA4KHmGkwdq5TifhbHMB",
  "key18": "2SCszE84maipjXESb83QgEfyyVfvocHeab3bW1VDTE1ETAknWc22F6e5voY64Kiszf3H14V1CDbvksB1nStZ3LYa",
  "key19": "5hCZHQDifakgSPENVtGJHRP6fkCRwTYS8Tufm3k81uWMtaToD75R18bWeanRZjn6rj7LCFbaAEQni4WuXtUPzRXc",
  "key20": "2wFvZEAKRGhzsEsi2WuGhUEcSXntgP7Jqd9Z5jTkJHcULvKNFxqDokzusD9PeGUoKPPCp2X45aKA8Z86kXZ94GHD",
  "key21": "EmpG8WQUZ5xEwwsycsLjVLh3kex1sJFY5aUU4s3ZCCA4dB6hMPy3pSskZPPdYsQymNpTFqpxrWfnjTYp5vhbVS5",
  "key22": "3kMky7zFstLGArpdohkpJaR2XSdLM1TVKAgsdbYR2kXuCvdErUPyL9oR4AXqPqrDAvEVid5vLH6ogQfDwPxzXGah",
  "key23": "5TPVeh184p7fTR7BaapJxXf5553mH21h82ZPGTuyjLjja42QtmckzEfeAau9c8VDhGXnQTtH9AVLTy5Ct7osjkK5",
  "key24": "5hRXPM1CAHi1xS94cuEbD6nXd3cxAadDqi1KadeBFzchAMqWUc7zByQz3m1DGcDe7APR5pzkG46xkjhiGJwnE2WX",
  "key25": "3D2iGsuLEYjAFFBmah7hrNsrXSLRpeiLHHCTK3Van8zFBYYw4Aos7Dgj1yQgtu4CyfqhA67JEXQpax4B6xdaJxb8",
  "key26": "2nt3fnxdkzbwEE8onatvv4BQujHhpv1pmFQfCSP9KAeKd1M6QRA5VmUx5tqCQHNrfdumt5Lq9T9D5ni6wQveEiQ2",
  "key27": "9FcXX8FmT7UWne6yZRhKDHBhtiDfLi9pAZEQ73TUkoi6yG4XwfTupdwuWGBU5PFmsuRXHPFaph8KTtSKY3YqWEn",
  "key28": "315KuLUVLEszrH8rxDsFxrRPncVr3Jp2aJbnJvmRPB4MbYz45NYM5STVfo1gbSLHVBPt7abxXBAvyvdebJ63LMpa",
  "key29": "4g6TEZ8n2C8tKMx9ZNjeMjfdpUiBRB4LKv7j37V1x7D214NF558Nibk8SZx33TFFRrdUgFbfH4e4hhX8i9Rti9V2",
  "key30": "2aKUmstgvBePjBZSwdp5L4NFEKFEQbfHpZiUkpSGjQyJc9Skc3zs1ptBDJy9hHku18sKX7fivioLqGPzAhYuMSFF",
  "key31": "M7GPTUmYgJVjWjycShn4ANkrNbpLDVpFMAgHUHNsUDRxYeoiHF4jjKpdQBwP3b4WkrTDnRK1BAANKBCX85hn6Bf",
  "key32": "5Q7tdXwLDwmt9iT2H7UBB57SnoiBo7jUtgsfkEW8GxRM6mtFLaNV517B1pGSdGTo3gB1uTU3MnbxFujdmRXP1K8Y",
  "key33": "4NEv8aybaW4Cji1pTDumJfLNEPJiBNb6uygpF1YABRrdtQ7kYneEgsKj2Furz7B7g4CkkuYg5CX9wE94oAb6eWGu",
  "key34": "4ZyoxesaeU2TU7YsquA4qV1wZPgMTCGC5oNyLQWyU1Vr6CF9rtPgJmJSWKYCHfGRtCgL19LLMAWQddtc9JoYihUh",
  "key35": "2jRCs9YDbHeSmjVsJSepoWvGVEPGoTJh3VAhdcT8uRxreqDwW5FtnacaTDPaZHnMzHjiibGzWLStmsAL9WQsw6Ub",
  "key36": "4iYmJiATQsBNadXjakm65Ld4nq1ZHE1wRtspHbBeT9vrbG3sYqX36xZ1xGzaCAFfVRqdJDYWE9wNYKEofF2zLHDU",
  "key37": "4qY9KNwsdxYSiQDqaFAYkvCWSEDaXnDwU9yQQqfbQJd1oiuA1CMq4FuSrkXQwcP1FpA816dSG7pcvi9Jp8KcXsau"
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
