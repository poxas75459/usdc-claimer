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
    "ZJLMHLPLa5yUHneq9CgnPtJyrGtRfv29xt3cxseXgxrpKAzfjyJU81Y6gFPuesKNEux8FDbUatj89BQhoc3LW6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Skb6B811DV1HmJ5L1ew3pERd2vGkoZTaYnKFvYFLcoQahswKDz77vuQZH36svgAMaZ8jsNTtXEMVLPwxDNJyee",
  "key1": "3ZSQHPiGEgVmUkGo7cNmRPNzdU66T9pBX6tzhkPMdKotvdAdXPwUjtnvyH2roP72UyzdRDrF9xztqsZdCebonAUb",
  "key2": "2xMo2sEcZkQb6GfBT6QWKpTYYVkPyV7uZpNvTJAYXcpSEU5zJNpUuj1ZDisRq5ieSKTpSAxaeRM3ZAaHc12HMKs3",
  "key3": "reCeGiSAvGawNzwbCTKp7wz1gjcAvT9FZyQSZAC7XaKE2g2wZRURuuRfmpVjmrBWHKkgon9E5A5cTqzBQ4mDxqA",
  "key4": "4yVhGNKv7xbvZDyXdQ7Q7bnbba715u5DicZoTzXqFhdFP77hQ4CYPpJmApwrD7WsjKvXfkbQREv91eF7Xix4XMXj",
  "key5": "Mvy4s98zsfWNUkmBnvY7qoY3CAo6X231EjjnsEaikk2YKzJv5tugxNUtQhbuLmbZNxVwNKSLCutrWQUdFBRuiUd",
  "key6": "22z6QUnXHvYatepWtLYFXGjnCfZ1GhxDTz4g9v1dWHZACJRRJ8dqW7CJsj8f3mGmbyjrZKLeP5GexwTvbY82zQAV",
  "key7": "2KkvFwx1dGm9ArmpMhAszuHhBc8tbrgpNdrteWRBsmq81qgWYJw1CBq7xoXg3ULtmdj5jyvSnu1r7pKWaLXYas92",
  "key8": "2ZQ4sz46zPAi4HQhabr4C2AyhetyhDQuPBDWFVHtfwQH8Kn4sPJ4R4ojfBZoApxJKYN9ADtFi6yyPTzPuWgu8iqT",
  "key9": "3tN4fpvFJXXZBL6akD3QNHPw93SEo3KSnXnoEFdWuiAyu7GvRRjxxkZxUrmmqgkniVaubKUDueFY2BJiNrSdijwB",
  "key10": "bhN9PmNnUAsX7uPPb9RspCSzz16j6iVLB9sH1jjth1vM6QeXDEQw7DgdCShaNu2VuuwrjMA6GSAA3WxDkBbqDhq",
  "key11": "PGne4VQYaLyuJzqEYmJjVN33ge863foq5fUN3SWapdrdLUQNTwAQqk2qZdeNTEGdX9cekXTTMZCvKFJhgUeb5DD",
  "key12": "vZN3wkyY3b8zZrNtxVAxjPemhqw4qcc5XfSrwnnshrrWNBMNoQCXBkUx2E1fBrsnwoP7C9KTUdAUddhFpbc3qrL",
  "key13": "3VCUTVN2eAgb9uWthm2AuSUm8RH1RR725g5Yah71zHNDaGBk7pj9ZTZuHeR9Cy4uAXt44mSn8hpTRyyPiD7vqSya",
  "key14": "cdprStVnVxfRqhWyb1tD2yydPgyMMgCArwipiUFTToemLsReBx2sCQtFAYQuc9uM2NBqfke4aZ8TWXAaxSNv6h2",
  "key15": "5nQCGmFL9ap2aFbpmdx1X653dxjHDq5bTPoBTedsbpHax9pcmC1AVMCQzwsXnTyKPdxW6xN3YjyZfh83kikca6VU",
  "key16": "4qGYqN4Y7mUxUTkVLpg27gRuMu2ePDVVSs6Sc9XfBNiyLPKcFf5Pc8n8Ubmp92RXpH6VrfFkk4D23dYsKP99GrBc",
  "key17": "513tV267yaDKnUbUypBiyES2B4iP99nwJVxCgnGEsjMZ6dMivVKhN8kfRheLq2E9H3hQ1Ns6F3btfAsgk1EJyRGn",
  "key18": "2qfQUmP6sSpoQF57vcP6ukHhFLGpcxy2sqppegrE7auqnkkMLDa25rqUg32MEsvpbGdRnynkJYnRvAu6ynxJ1tNH",
  "key19": "5b7U3AqYQR2kLLzEU8B7eDmRrRbSEwFrFcKtS2oSnMtMRygwxnMEWdyF4zoWDPGqKUcTQbv2sYkuA75HfVF1P1mF",
  "key20": "2eLre2SjjEo5iSmkVHPjRc6q9ue4Tho4YhLTpEPBG4FtS645KaG9SrhYTX5GfSZpM772SkUPuTQ5QG2GgStS9TVc",
  "key21": "5ZvEBEFpAzYvXiV1mE5tdhx2BL8bx6wLDP616mnV1zRkyxSFtAM7HmFcM3mQ1DUzTzxa9v6WJfzwZ1BAX1sMdpr2",
  "key22": "3Yhx2hnW1MjFSFjtNwXG5zmi3DLusrKEohUXCT951iMQ56L5U2kvCUfZrBoH8vVT8HB17C7aohZmv7fKMFVLLp5g",
  "key23": "27bWQCBLP9jQEs9JerbAyD54AksF2HQXSEUsoVuEdtzjM6v9qfR6dVfZgDzS5dCfXW1snVrQUXAzjd56Pci2h2s3",
  "key24": "4bmb3zFfuJLyyeFUwk5y24Lg6aVcugmHsWkXXAQLziTBV7qkX6Kv3Ru7ozmFpGmJEtadWvE6JRXkryKRRo5MRTsy",
  "key25": "3LNET2T2ii2pPthbxU9RRxsgXbLpLJYFKvijTQx7JpqtzCZo6acfLQ1a6gxNZJ696MHvRngDATTuXxz96hCtgtxS",
  "key26": "5gTm2bKBJr75kEPA4qjVFUx7eTHApiqvt2RYLhuAM2pCACPdPhLpHfvL1CRjkkwuFvhcZXFipNP4NTW6cPTVZqQU",
  "key27": "3URGyoea1s7AThuDYFt7Hx7KiTaY1MnCgF7UxerDWvfeNwtMJzRFgyMhEDqx9TWBTwzND15ftXhzSYLVquLyeurm",
  "key28": "67efjeGEBFW1JQVBxbuGy7kYTQ2mRF8e1pEnhW7J6DPqGadqPvkfGEDTRjuMQAADKCUbQNNLw3Nnws4mX4de66Qu",
  "key29": "4sJ3fSAw5oByG3GCCBkF5VaVg6qZzSN8KMLzzDp4CkTEk8mNCLW3dzcqR51vvm5yGvZmBXL2qS8RU9BKCQxyiggk",
  "key30": "32kPZDpaWiaaWmDkWEyWYJN8CVSrheu6AbaM9tR7i6BLxgsSiqBBDTY5GUECgrMEVuVDiKxNSmy44hw51L5vsdXu",
  "key31": "2nYbDZwpWw8ygUeeLTJngTwyYUNNHUW4XnpodT8rtEXBQgUu774Y1hw9EVkrciyP8YLsgc5SDJvNZchC9kjpEinR",
  "key32": "64rE6kg3ZWq2KCCRhDGCbx2dey4iuCjg222tmBv8qN3j4Z2rU1bnoqRgGvZurYdcWY62d9G6ULwj6swsk2oAqW46",
  "key33": "3Vz4t53D6UFeCG5asYgGm8R9bM86ba8D2ZvfsFnXgSfxepnNf7BM7AosnqpAujvXoMgUoC6j35aFhfqqwPRi3irG",
  "key34": "5FvtLRSYkCDFkcdxyqd8fbAFEpbqdPfhCh8kBNAuqnBsJC7fifD97jiWhKZ6ugMmkCDdbQD6ArRPFoEEU6QsUxFC",
  "key35": "wqQ2Z5g86n7NkkpEyniX4v7PuUgaCvBov5CMW1Do6cszUUpLASNJAQEVXmossi7jSFpJbYogWn33jprTD16bDEN",
  "key36": "4Zva8kzHJtHetKvgsBRwRmkBuS5usj6aoFYvv9BvotDP8xrbQgDWfhkC77dWGXTXUaSqkZLdE8hNFHGHY9BqyXXa",
  "key37": "38wvb1wHju3tXnCrSUghvEy5ZvP2Pi3soXPmahRJERYcqcLtdnof2oT2YJChNfHr9zAHmp8UZQAogqajj982VPnd",
  "key38": "vYSWw9RZkFgzrsKaFYU7WRb7GoZdymTqswqoiMigaf8RAt9PBgH5mjbUDT3BsEbaoTi5kb6VRTpMW6zS4TDNRV1",
  "key39": "3auL132h3yLNXRdfLQw1q7QNDh9zC2YcTitMaRbTM5sFStVfDJBVTLkWf7v6nGGB7sV7uvPCAJL2DbybAQQrt4hq",
  "key40": "281SDZimSJaPcRxLrAza6m7gYjQwVofCYDJjSSMkrV4uT2orjtp9ABQNCX58KxieePTH37CZvHxBkVUrP4d8iMjB",
  "key41": "2EZQZwDkrLwns2UpebjXg3KQS3j7pXQvRxo56Fc95ReA7XbXM3WzoiE7S4bn7eA3FaS3twEGhY4qeZSMrSF9cENd",
  "key42": "2WL46FikgzvACnVo3D7y2UNVNzqFfSGqm5dde35FqSgDm2PtvZNz8StpzvumKsTiDsL6ESsfkk4KBTd18KZAZfqh"
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
