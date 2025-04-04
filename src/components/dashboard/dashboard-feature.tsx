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
    "2iQa81Se97GYftoXB7Jbxy8gVNjY899DWxYbQhgfcC2aHu8cChx1UsjCcCErkAtKAejc222uSp4KF1c4cerb2vBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y9Ajr1dmFxL5j85BGTtYgFcXYXR4BmhtpmUcETzrKT1EV6thFAzcdG4hinkhkLpLrB4NjGRF4NXCncoRuEzRtiP",
  "key1": "46jDSmUB5chhPLnDeDXd5YHbhLQEA62yurg8ofDgj13q7inGCX7KWDQ3FN46ZtzTgtC5ePoeRoXMux533TuQ1kyJ",
  "key2": "47s975dpcMQvaVNYH6jERJGDovntx63jmaGUzqU1hcmb4c4keXzYDz6M7YDffkzqHNSKg5f97JYL9FnDpNJ41jmy",
  "key3": "4femqtYA797MDnsCYrGkWdr8uy3i6aT1n4QtGYmkYzSPpU2xgovn9CtMsiuStF9aaFsPdngeh6VWNq7rT9PKi6hh",
  "key4": "5k3Cezuuxyzi6nPzPUekKUa9jp6WqRkPypt16o3C5GPh7RfqNRJgXweKmauQjTTeHhguJ2yxCHQHVtALU46a9CJx",
  "key5": "u7Cs7u9ZJaCHuF6UpXdAF5SYjK4V4kDgLY2jMZXpbaLRoso57mnnYVzJcRB4mRc6nRApBTntMfJpXpDHCEPYPhe",
  "key6": "2ZzrT6o36TniFiCEE3iMczh6hqa1gGa5TPVH8Vj3gXb51xL1zmR3Wv7QdwycRXKWHqNf2sCfQhc6VjKWdUT6Ps5t",
  "key7": "2SgHABjTMdS9Ke6ENBH7bBsfSd4DE4r9Dd8dpk9YYS8ZZxAJ3ZJBRGNMPeVRQJgRx68XG4pyMRCRWn32k6EfbsRm",
  "key8": "3FPfmVsdvoXVanXR54sDX4iKKEcwjfhyoUVymHk4QvUTzB9xBSHH4H44zqw6GgRPxWgeubPPBfb3QQr1aZkesacY",
  "key9": "5zKhZDfP8aMgKJRXNYry4mDesSfh8qnwUSNAhFSQ6UWY845Mr2RDfJjrRoYym5JgSNAin8dyuLTnSQxwwJY3jVZJ",
  "key10": "4xSgsGNn8AmWtb4cDrA7snYTXiqicAt5jyeKFogdTAaMKzu3mdSdYvxmLY6NZr6rDrqEMHd7qX11a6bwBkpGzheT",
  "key11": "3RHCqhwjCbsUNxXJdc6yw8zT6sKNNKgrShyESWZemZtagSxZK5NSj1WwYZXVhGE4iax1rFJFXKJVQRRaDRPxbVUC",
  "key12": "xRzYA3rvX2qtqqwSUPgLrt7SMWgop5Sf4KhZcHg7dkLrrcXzwB4cQJqsqyVhKAGrhCam8TrjB7A6XES7gZuRZht",
  "key13": "57FCMr7koNGQXFN2QSiHpo3Z264FM9h6aMb1PqgNV7r4MnHH8EkgCNUuUKvXR4gjFqT3LQc1PLBxGX9tK6mmadyp",
  "key14": "4uNEjbWkModhBwBKiFQSAo12V9PumoNoiYFWv6ErJsJXwFfvBu1WVFrC5rKDJQuKeCwtqunG8SMbFd9BK7g2XcTN",
  "key15": "5NU32DxyUS59puki3CZ1D4J87E3VcYP6a5GFoUJK6MkEfqSovXnd9ZD5jHjqYfxasptRBZBTG8x17mAM8iVXRziD",
  "key16": "3e2bZyYjFeiAbw6d79mn5weU6T2M92CNRWqYrxMKJQ1RcFdZigKwTPnxM2oMq4i3DJdzdfMkNEsynDGNjfY3jKvs",
  "key17": "5iZjChBHMnW4opRfY71UXoLNpg5XsHEmKLfp3whSGRkodEDjgXFJXqqStttTr8zHBuoZ5P9hVqMPfS8LcYvmW8AG",
  "key18": "2UMupGyd9S8eyMKHgTLH5jLYz6pjQ921U4Gyxn8sPTrLehjRFctqaTKTiU51HynPQH5cKHeEenqTGJdtdV9CToEy",
  "key19": "654mhoCzEeYchsi8atQ6Mwi2ydVWExgyx4a8qdDKqZkc1gp5v9q3RYxAMbYaartWxNWzVw5moFbFKho9wz9yeACV",
  "key20": "5MgLKNSzRuXY7XuQKbm7kWvwshnFdtPgQe7zAGeXXn7iVEyFHc1R3X5czaPhjDayfuVMp84TL5A4SmuTcwZ3Kpex",
  "key21": "Cj95ytNFVJtLddRCCM11ePit2dYQUiyqKmiiRLcRTAaC2kwJDyQScpuDtzBUHvhHjRnJ1NX49svPUk1Wq19wv9S",
  "key22": "52QwCyKu8toAm5QsnB8TZjLqk7FNjfarnA2Y2zR39T756wi6SKL2KbNWZfzRjCYLsPzQYLDPm37SPsQVCn5nY4cp",
  "key23": "44TBXdc3SUbFoxzzhmoLNvAEK8LB4QvHxgV3busmjaHt7A1ox6qXUN2Pk3mnFuJUss36B8KqgdKJCf3AjQJnNkjJ",
  "key24": "3xuTPFGVAJJ8LwDnHtWDGKyU9LLeckfLHBf5Dzwm9DZumvP2Fzi9TedkMJm2VnGuJ4SHk4iGPyDcJ63SiTfnQD8q",
  "key25": "3wDiGPkLFJzhWNdhT9cUcgBe42cH5kGsNrKtJ6xRC8A1YdUaRGE4sGDvas8uELgKR2n2c4YJc77MDaH2KJ6j7cBD",
  "key26": "3AY7W7ytGQctj7qdaDTL3yYMwhrgTC7t4k8Kuv3J6VRrMdzKmdNVcMoUWdAfqWm9RKtBx1WivDKCVKi7SHjd5NpV",
  "key27": "3pALEKs1my8ddWvEsgAc86vV7T9JCUoZc6TURqgxyVWn4iXn7X3HgkH5bdDmZkdbKRHftjkp86Wc8sim9xStbKTU",
  "key28": "4sYq71H3rB3jXQgctMXk6RFbGwtuzhknsGrZyzgeGFToVVD9ucrFCo37YmzuPG84i2grV5iF5GsgHT6RQHFmKxcM",
  "key29": "GLBChjRkk2gEhNuoYeEgk9X2ABLcAdZdT3KX6ojnStZ3LLhsMnZLaZLjUaUbXbYbuTmuVAUqFnbfNVpRSPPCjLU",
  "key30": "wm3HqW431cswyosNxukicdkd45RutyFy79MvoZdP9a85GjVGhxNZf3S3Dct2YsU7bzg4D4mniZQcskm8PZkAVDW",
  "key31": "32Gmyp99ja9hsxeJvjJ3BGPZsaxxhek1FYE77Pn5utP98seKPbyk2dqsQmM5RnWmgb23ALnjibaov2yHd9cKDy3T",
  "key32": "36aXTg8yzUkr4Ld1ee4wXQ5aKcogBzj2LU4JkC1TndiLE42ADZLhSLTadgwTCvhUY7C8716JzbYBb7P28NSkqi6s",
  "key33": "3ey6ooQi3t3EXLExAZweciNyHxmBb71VYV8wMVytJhcq2xBrssXsJFCt8mWaBHFvguBJLpANEXLGxUShx2mvWtmz",
  "key34": "59846XA9wJ9bXumvaP6LvhtMMfFSqaqeWrPNDJ7MCjGCwbdkVvbKgMsMRCnu5BCuYLkwddZdrvaZb3f8RHJby23N",
  "key35": "3mSFqT24ov51DizT3NMjq7fzFyQVgNLtYgTdcurru8nonw78uhCEW5e1fR7JmXkARPSLu7YZQ2MDonoWUBXBfCxb",
  "key36": "4XTDNKPDVJVrSN6WhjxL7M6mPGF5XcaSELq69rxB6VepqiWkQi6f2kYxegvEymPfcbjFC56Rs1WHoEgwNAW59jXq",
  "key37": "4jTo5xuC81SVMnoz29Fq9TPVmKhinr51fPdnKcadHRNH3oP2VHfzvQThWTLyZ8XqmFupcxX8CbXLQkNC7qWizbkp",
  "key38": "4i1WWbe3J99j2eEJ8MsKmspFtN6PfBSTqcLvBBXJmt2vGxHfvoLQkiJLBoGgwNJVxz8JfE7qKFFfZuvH8c755Cnz",
  "key39": "5wzmrBxqkuSVShxBDfbxPN3zJjBqMuysFyhgX58Uuoe1a6q76zaKw75fzkTo91mJkrgRxCDiVbUnXUkYFnf6zuVk",
  "key40": "5wbaqmiN88vpm2fBSgUC5hHbsFs9dHPqidKov1YUWJhj4ksVCEoQHDZmF1SC1kxrkVB5U1XEbDkHytk9BkoN3i2y",
  "key41": "4dGPFnNzKocpF8gjhZqjmNmkH23pJHr1QWiFgB2o58GJhtFAKoJwkLf8itC7oEtnDRrHbnfHKzwaAjZTP6VatHKZ",
  "key42": "3R85FcBe8ddZC674vxKY44ysprVgSwU6gJipryKxabyMMEtk58ZuDrP1kFsC6GHbWy7P7z9CFv2ZSkdcj8krq3Un",
  "key43": "L2kAqyZpkoUJWkUaUqqVMgAaai1K9XGt8owWpf8jejGttCWuL8dpoHYSwRJBVvx7TSFaa7fsBGS7QyA7FfJHrE2",
  "key44": "46L58bKJ6YG54A2fUdukY7AZ2Ms3YmsL6vMfeCaEtdGvqtFxWedRofCNS53jEfXnVnFq7a2yhZiXEt93oTv8R1BE",
  "key45": "tmLmTF5zVTTwJ2gq9WT5DMg6ukmLcBdmZVLxkHgWkqLh1ZvnBk8BRPGyWSYkAhE8UCcADVvUcdVUFyjujQHv9aT",
  "key46": "4azGEVFKuPpJ37Vakq7vDENyi5Nw2X2UwosnMbyr8EUL37QBaRwoq29uxko4giHEwarwMWpx8CwdYb8dMoLH88di",
  "key47": "3QLzc4pvs7EsNo1AaYvagVADC9ykgsMvoU1tJdGTs4QkgcBkGYqFNeSivHgJwscJegiFo7J55qrJx6K4cHB7o1Rx"
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
