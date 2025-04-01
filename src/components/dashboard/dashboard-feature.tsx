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
    "4VR4jqeJvGj1HeWWot9JqAXf6qom4draRfEdzKq4ikvuntXhtui6JmsGwYaVZYr3v4iFgzD4kZWtwBXYea17Dg9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YwhCqEP9hahCuHh1iHtrDHnuxttjDN8gEMrRohK7rf7r4BttjhgGWrAzcFJYy72BWQX97UcuPCNSY6Qr3kURyrD",
  "key1": "D4rqV3a9UCWfbJ7UYsiqiYR7dDdZqPuJ1RAE3Pxg2Uw8pHq9wLrRmCVpMJEtAkcZhXpwPN9msJCkm8UXqChfMqS",
  "key2": "3oQMUm6MtrW7N6MVNAo4TvJtRkFqMnidsd9CK7aEuYfR4qHZeqM41ARH3MLcdFqHSPaHm4aktRJCbL6KiGnqvvTd",
  "key3": "2egR17f2x15nd4Z6rEP3MT419dznYRCeD2iGYvi349vxEmvvfKRmZcVziGRtRtHjYwsq8mbz1ritGSGbNHJC4ouP",
  "key4": "565Pxyga3ukVR9fbfUGeAs9F2Kan9Y4KVK2C3FeZKzoNCwmHkiS8aRRrjCnai6S1NmVeD2nNfccCJ3uokFvUtnas",
  "key5": "2v4uXzL5GiquB2kWRE4VGHAHjmA75iH8wixAyVfSvxYiTJjRmvQwgn8S4k6dRrpG1cXUAGSzfiwQfKLsGsxHfch5",
  "key6": "TTbLcwQUGNXwoC3pn7davSUJDsFJ34REgK7RkXUutrSepDFzSVQmzukUbYqe365ooZnsS13yG8apYV9C4uuNPcG",
  "key7": "5e5HbqnKXFGZ1P68CUKMXHNLoyCbzqbNfvoy3bN72kzGpP9p61kb3ChAyiYu1VSdLHyjXH3KN8jiaJ6MCSZZQifU",
  "key8": "3dL49QbCcNEFzkFnTqFBvZuQ6fe9qpCtbwk7LGGfWZLd1R6UMwerwfy6YyxVTZJHmy4WzQbEue5nn9MbksWCbTHB",
  "key9": "t9cm1UkHBGHegLmoy2mzX85h2ybGtwTFRBTYoknuUscRmE4z79CUVqpzwyhNFCZzQ3gef6F8LgHTpUhLKVP4UNW",
  "key10": "3vuUTM887WU16WxspdrVP4Z76n4Ep7wtUVeo6cEexAvZHiJWzTGYdhqU9UxeU4RZvFQdaN7UHZexpWq39hYaH6TK",
  "key11": "4yUDDxfbDijKL4BaePEW6tRzgeywEp5T4iaWgpdA7fQQjALWaoCyryLrrAqwzUqrPCQ4wNGJNNuHdT8s5rtuBuMi",
  "key12": "vRQBeeWxabUmppNjLVHapbtMa9b5bawk19eh5KuaCMKQwNJQ4wQxxr5UUhVoGQrpUGVYi7freX4kFYfmXTvqt7w",
  "key13": "87BgTBxq5bq2PmH4vnSKdKnPa9GA9jZUT3wqAdafg5uUXfkVKKj5itUaZwmJSY32bfryeYC1G6cBMC4tPXsBjEm",
  "key14": "QsDqQ6oVkh1ik5Wwibf1yVdxTXY5tX6u3V3BdPHCJSnTQfUMvASGhyrTGyia8Ku5saGUR3eV5KhqK9E9QqSPFSz",
  "key15": "36p6GFZqWZECBG7EfQvgY451eDZG9k5RycSzF7JFEnfRC3DQkTfLAydfT5xaMsWFanDPTbBtjgsHEkem254ixe4g",
  "key16": "4RuYoddpq6dyrQtCZEev4BEg5vtxanGYdAktRP2cFH52SKnX5MMtv3M7eUD6i9gQBQq44A2ruHo4jGAynjLkhJ46",
  "key17": "3gUPKaw4hht24eaFvjr19zRh7YwuanB69CQD6B5s5NV4UmZa2c5mh1r8FzAA6AwHMxFSoHSCu4yS2RMcruGkThtp",
  "key18": "4HFWcPP9qwX3P5SFkWSwQVXbV79oEHWNn3cW2dqMP6YBezmiirdyS4xL8MvXCebPctt4L4LwbCRowQJBuHMMgBjk",
  "key19": "NsiEPpkRuYtffd4SD9fqgKwDT1ufaHyH1ViFRMU79sD68vJumgGrZEGq5GW6SVbwrMKLpncSZe9RYuj7UFcbJzr",
  "key20": "61jV8kftEdSCuiZX79Q3ScFCsp3ypB8ouG14LJ4msdY6YaHrBBkt2SR4CQ7cZH2V1FBDbUj8EEMDtB1gYpkJXNpQ",
  "key21": "vvXb3qYkYnJEQguKAnYBSTRpU83W7DiZhbaUw8mPznHyJQjmoo9VGa97oyNoPZsK1nMeckvbVpaf25R2fNxKkNa",
  "key22": "3AkN9G4Ww8X5sVjUzcUSHVR3je49WXhag3AptGGk1vCB38giFgTrE3fypNFJdaD1DVX9DNNXkMihD9zw34PP7tN7",
  "key23": "2urbjKFKwU5UpheZaSfmYrhyBtdAzHYsrH7PRn1cTuGN48Dg3QtUNvySosz5fRySWgzD9ZNQwoed4MDV8n17kFf8",
  "key24": "4YBnA5nrwKaFnopUYZfjF7wKBoGT3NdfMpVs6UGAHhL1FWeFwYBiZ2amkPr9JLYNupExf5AEMzRLpbtKTbbh4pw6",
  "key25": "61aNh4XuqSuZUa9td8YQBK16Ev8kcfPvT4rVJ68RMbD7XGLkAQzmNzuCWuTDSrpMbGd8DcqfXnrepjAvreZeY3B4",
  "key26": "Qke8eAQ2Xh3DjdvxnAmFreT8URS6dFkVVUVWfuK4wJcoZ76cG3Kv53JP4TUnnjVLZSDqvEMSdFb1hCK14MLNBKH",
  "key27": "58cCSHv8FnmSQktx6EjrjdEoEwUSRPsi3NFpUPtFTfXuC7AfwiG83nfH8hp3H8wkbQcRktoUtQBXpGdtbNR2peMA",
  "key28": "5k6BAF86hQYT3bfBvEnFS1bU4ZvfWmfU9pCZGA8M2mRNo9FrgJyLSbb7tQUyQWoPxisynJ9aUE515aAdPZ2WWEMK",
  "key29": "4tVbsQUJRcsP68zgSuegrxsgN6cJjABubdVVySgiXaD7e2VADn8qoXX3KVooKvm5DJZmLKZifZzeMgrQTg6894t",
  "key30": "CrwELLuhRWUCgKwkSwb2gxVRLEd8GunwdpdKbXi8rfQqoDoL1XpsY5Egu15nVGqUmvQBzfuGi3zEttiZCg7dgc2",
  "key31": "4ywC74s3iCDfLXcNebfVakfMz5psWFbdrWT736XHu2jGntB9DMqeZ5MRhCrtPaG48UJdNMGTmLEdaUSEpgsogFC7",
  "key32": "4nem9XaaDmKc2LjPhAREayvidDbjv8PCt27vbmLi7UHwpGAKfPpXnFqKKmnY1EyQdP3NdnATuvRh46Pwd1kfDh2x",
  "key33": "3nTNwwWdd71FydoJDWi85fZL78MTNYtLLQC1R6hJc1AoGL3syCVgrwLXCtj8Upa51QkcKAaC8i7gaBGnSgM3DMdX",
  "key34": "Q6h84fhUz9xYpffAf3rgsVzBujnrUDJ3PRoXHEpBbix2Bc5NkhLE9UC3b3tLTjv9fjpBqmfhMmTqcJ8zPeQ5zag",
  "key35": "4Anf7Dyve2XW1t4wyDqBAQVcSiPGK6LFbjeozAFvfu9gL4MyYPHVUoUPvsKTPBb6jCzgteZBKHuQZq1CNvzHq9b",
  "key36": "4FEcVbyv3rTSvkxehnFz4Youc9tYj6fjbo7MNru2XD7SpcSFf7wr2it1JddAG8qBRAHWf2kmbVzHReCy9tJvX7j5",
  "key37": "3uY5CmBXcw72cgdxCq8mALW6Ghc3y2sB1W38AfU1PprBHETc6bSx6J3wsohVwD1GG1bbNKQkpcxSa2CWpfewRM3Y",
  "key38": "5Ja8fWj5P8c7j4rr1qkgJDSQCRPLfnqLcUhHLMUWJz1yMKkA9rK6cBBQsYXp7AMFLueR2wHwcEfkJhFxDgUjEj2B",
  "key39": "3qZnAhFiN5UVYG6ABx5e3HbpCc852BdM9kRchfizAipyvzW3MDCmmp5o2hncSL9Jz8Kdoq9nAxmSmFJTQJaohmKC",
  "key40": "2CfQ1YVLbrqEbo4cFwejCRqt4SdSQhQ2mk9s2AauSgsuTJhMgqN1L4bX2y13NUfi9vbBr8xyDrgMSd6ATCGYXdqC",
  "key41": "g47i77bRcNnqvWCmpJtNYJbukUXvVMSe8zeof5fWx3r2L4GPzoJPNe2QiGwoWpvC2P5XEuVUwrLkGHHJS3eagCC",
  "key42": "5UgVrcSSQDg6gMoSe56UFFuufed6gW4ukpFbisGLbEjwQ7NXRf4GMiLSRZjMJ49DFK2b48ejYq3ZHZG5NGw197b5",
  "key43": "3ETuUGaYnoa4qZrPa48BqqRtzUC4VFDxJELkiqJTxymEoumZHTQyE12jt1h6gNVmMsBpTkf3XgP31nb7N6DcpkNQ",
  "key44": "5PDBabtgXjSenU7oD8wz2eThHZnZwNurmCREfe6DVKho8Z1KMH1zVi9WTyHnABfZpfJgL1FgAgxF5cac13Q9aYSe"
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
