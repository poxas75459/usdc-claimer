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
    "2hCS1obTq2BtLbA2pvaT416PnQd7iMZfQVwoFRgWaYPtFofBx3vkfsyH4iRPN5kAhuhu14176cUBzrGGtBuqST7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b7gtk3yFy9HpsrPj4cP1JdSxpqhADyeQduqXXSeGrPz8GKLPdfF35Ax7AzarP3tjYoBynmeMTKV1YXRXuUSTrPu",
  "key1": "3y8AqgrDBpBPo8sdXeT6wUyK5bwRekuaWN2wmL9uLUz7HHHn2cFGmMyt58TtFkjstnoz3Qdu6Ru4Zcx2i4X35TwZ",
  "key2": "5VnjT8sLTCoidgKiMhUvjoJfhzmBHFP9KST8TcEm6aBT6fghwfcDuXFRSQA12wxzec8b3m3dA7BHi3sN21BunYz7",
  "key3": "5DgXBDjp2g5ghnbELHz8GMnjFA2RAPGdwA4ns3SzyqCcAX5FY5adDKwPJjEy9yvLxmaZcdAd6rUvArkXswnnkti9",
  "key4": "2Wcymx9ACGWHQSUQnsCEQ3LV8qK3511tpBwQB2yYzUeTLQ7tToFrU7WXpFApb7WTQA8NstdW4WEx9yYtMAgpUw1D",
  "key5": "3Kt3KQDjixmHw8MLwBJsSYSs8nnQpJsFWngv5s6MqNvwYTqVQg3S3Dfr9JkT9Qiy47nqCprtWR9zzb2XPCrWKT5P",
  "key6": "2zHrBduAWv5xwkEiyrhwgfedd5caxv9AwKXnjTM1KHWFAFLAJqyp6cqNgJMJLK34cXLjRNsf5iL3nuH88gXf82bH",
  "key7": "RKEcSqdxcacsHn6mjZ7eFzHuagCUkWKAx64V4YWHv8VATFXavs57YY2mGYQJbJvaL4gNjgkiro9LBriDpCkrsiS",
  "key8": "4F7hjgnRkEKWbHvhAb2S3TGNuGY6rs5GoJ5tit8Xww5A3w961xzbpo6HdjXGYZgbyfc4CjkE75cdMsJWDigyPnp2",
  "key9": "4ra3qLKSLGg82bQze7ZeicRjsqchozbXVdP3VDuhjuTUVtoLFMnptoxmhveFTfJVz4UFhGsAMeeeAMnhquWVWPw9",
  "key10": "5ppQxAfTdwYryi1e4ssth49xUVFdvSatdxFJ8MiUcdydevmaNqDjRYtjPx2UPADJGBYVD4VQRFiUNCwkYKtWTvuq",
  "key11": "5LYV382FEVY1LEMeeZXbAQSBtAw5ND48t99gkxhX7zCUYG3nH59itRcj9P5bF9x7oM8SodEgTkCQioNALy1Z2pnj",
  "key12": "y8iZtiz7nh2QZYJoboaEnE5gawC5tCS157D9irXqPi5xcgMtmuy9n6ead6uLVDDjokdcSfZVa1UsAwVUiWE9BL9",
  "key13": "3dTMDkZ1nTt3VTS7f3ZQgvd5d2i29fcJ2KNuv8rFEKTDorQ943dZVw8Jky3QeDYWTsTu5Bec8TEmdqB8iRXno4iX",
  "key14": "2JbPxwtK3sGE7Fi2nkw4k7mV7DgYnJUXpTrm4XtQ9FP7p4N8Wx2SFk3vYXtcXBBSy9qpzjCDCLrtMC8XjEMyxErF",
  "key15": "825baXLKAHTN7AnUXrpXaEWcJTAsnKegDrwDtMKDorWQvKyJvNUqcDGVfR6vDXJW7P9UH5GH43KDBjVoq91tChi",
  "key16": "67mBks3sTM1rERFPn9EmJzSer16iM3ncN4GD5TeQDNMtaU5y4PEdzERZnSTTT9HTJp3dZbZvW5THBHvUSxi2fpDz",
  "key17": "4Krg6ms18oKcfBqRJk25a6Ru2gpLAoGLfj7ANk4w9cMwv8a1upGv74t5DKdnZWdTSphHEatXi6XuHAJTuSbjYxCz",
  "key18": "4AVKZab72n66B5GaAAgemRD97LuT26KshaGMdvZuEjdsvwbqA6HDQPD4iKdbApZpZwv6TzxHmbPove8bqnr73fU7",
  "key19": "3YNReqZt93CsJPaULa7irco5ginTvc4C3FcWgLzwLnegiN4mFE3bp3KNeyDBoCNMg5Xwh1HgCS5Tv5PDTT1qWA8T",
  "key20": "4exwfpTzS3zC6aKP9weqg65DHEpeEtPXsZdhUyHezJesbPCFnJcYpiSFuXBjdWKAK3gSVcBbvib4izXkSHUDm6cp",
  "key21": "3QY5v1eMZ91nPj5zeuHUm6CoYQSMSFudTMHwgpSvBzGepruJEkoQA6xEeSKywiHqgxTfACSTLkvALoypEsH6C6Ss",
  "key22": "2bW2BPHiwVuT7SyzDodW9x4KKsXZd2WB3UNSUsDLUaaB4RWKqVmBg2jPPTNZqxUsCgjsWqfmhdQRj98rpBXELkRb",
  "key23": "nFQtYufFDD2ue5Qv7rxV4p6eUKe9iC546Yz4zfj43crtgMXgygb7wygFEs3uz9ffLaY62sh14zheyMY8by9hFBL",
  "key24": "5zmYnqxpYRQ1CKZZezWZBmELehHHgjfjQGofiYSxSQa282zK3PA3faQWVqgN5nQTA8sfQXx8fL79Ys33ZsZSCXSc",
  "key25": "2HfM9abnWpiBd8tGXhZfsb3SnzKJPJUayCCTjK3C8yRv9V4RkTCYfpXCU7QeLjwQdB4Cf8PXHnvUZNkEZoV33j1U",
  "key26": "5hBNEeFkk38bxPm4FWgoUNJubJuNFv3d1mRi23NXfvfpuadVQ22WFsut4mUEBMyxznbAe9Uo68MV2WZx6vYyQipE",
  "key27": "3yjJcdxZNMSfE7tJqQdYcrrWawR7ovazwSakPeZDHDvwycL7Tg7yBbYYGysHf8MZwquh8FEEvYri1wjmZeVqUEhm",
  "key28": "5wEwwQ4dJ5E6ZvTdzJyqaZmwfTAg5798M4B7RrQ4fgj4rCrxkM3S4CzMyr1pqJiMpexnQR9jbhfNbZrbmtuePAhc",
  "key29": "3EE2m1HSQUGLtnJD68vZArHn6P7uMiAgRuXgt2LaR8WCkAwfDyWMdmE5tAp9UTMhSJaBhznrhnjxGzsMoDbCH8uA",
  "key30": "3dc1BzxXmX2yVyAuzoedyeTNvAqjjFhpBqPoH896F2HRoom421UKZkVh1nv24oJ2Hn2VrBHXXR2AEgj6KDMSjfrZ",
  "key31": "4Mg5J19TKTtKGF9A7KY6pBnrhJtcpwmXjd3omnKesd6YVvzMRrW7kqR4mKWrSoxUBtya1NfZ8uE6so3xJvqjMYVG",
  "key32": "4dTR5EEhKewRQ61LraJxx61j6Ag6pfapELfW7RWdMHcB76XWvJhtq6RFGacUBTXpM7A3ESwwpSt5c6cXGTKmysWs",
  "key33": "4VaMp9KcTBQZewpFTrSD9aBSqABt43pc9DQXmEy6q2SnnGV1pG2LkktUpcLBwEU1ugKhhwrQkEjU5ZaTEz7fXcGD",
  "key34": "yHLroCt3mqLWcgfYqw9t2yCfyJwMUtpNrF5uEUwVsLGx2uRHaQtmAhvrz9qByWjfxmdM16FvgEheAEbWLVfCpq6",
  "key35": "4UwfPfP6S8xkZcEyKguZp8bzGpJ2fiCVqLjaWPymD1z4cQGcJ6FeBHUSev1DCd9DaGZAki9L4b67X26279bLvJ8Z",
  "key36": "3yy1NVRYSBPaoDXtCGUbTZA8F58VAX6EzA5YnYi4tyt24hgsKHy3sagdLamKuXxsAUTjZRMiMv5HrF3Nppwb4CSr",
  "key37": "62WpX6sMtRyYoVW6b7jxK6DeKbHpBvxc8jU8mtK3d9eUUrowo91jTg3hdJ6Vb369XBbuAD4oKnaeDugjMspH71rf",
  "key38": "7diSsPirPMoSDvvFJEoLnDkw2G1CLfH8egwr6bZADYJUUVeBuiS7C4rajpAYRud1nk2urV2xHtPtCif2FDapmtT",
  "key39": "Jbp2E9iMt3pEy6aL8c1ei63PQ98WSPaTCSb39awTS5ZPjD4AST6K7bUk2qYRsj757nziEHrE9c9vfnNEvtoUuAi",
  "key40": "49CPo1t9zfwXy6Ng44v4DGGRjhKResBh8qYN6sXDrsZLWwpW1tpQyh7FhnyEwZLwKTD6SjiHxScNjppsEvzzD7Py",
  "key41": "bRwBSMwpyXM27dWpAEmyHZRwsiCkNayv1nzFesqRzVJTY6ivRNVfrcYpXRfHRGMuzxpmfh8uTZyJFkxBTqkfPUi",
  "key42": "238AhAsqjVh9ur7nvvxxtCwuGmPaUmRpCyqYkJSkHFW2qpEzygqTYd7sZRLGbtwBrAxt5mrne9koSzM8jpo3d3sZ",
  "key43": "5ENeuTcLJWpCtwyDhxMpdghrMU5SaQdKtzUKxkSr1HhhaX36rVggcxFo64xzjneuvXx253irvPwMRtw2Nd3dGAzE"
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
