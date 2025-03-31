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
    "5RbbX2h5dv8tCbnAmQjFqU6fAJuUppHkLMwHXqWH6uCzhtTgcRBKuS7ZFwJhVHWAfzBSWQw7GpFdvMxcJEFGn6XB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51fjxadnWokwCH3tvpjtSvwdpcG5d2Sb3upP2gP5BfGgNKuBw9JCkXdEfyBa4PoF7cLXUJ3tt7xrAGJKLxmTUx5y",
  "key1": "3KuvhWJKsVkUJUV74gJM8LuBPVvQtPBdq4rj4JnYsiurPv2eYTxzpwo5T9uXgHAgxFLbvRViBzSD6mrcbV9NL3Hn",
  "key2": "4vZKAMoAemDvNnQYE8F9FT4svpWNUhzknfN5oiyLUi3Bw2m1dTp9d4FQvoFsNCoUX2srVwm3uLNtbhRVJTXJ651s",
  "key3": "2zqiAySXafE4KKWM6ScJHwFjHYJ2rYS2yXLt8tWoXKTjSaqdC5npNSBeuaoEAeRCLLbL6WrfQYugfGZCXcKEJ4ME",
  "key4": "46dU67kboexymbpfLfi8qPBYU7uvHF9QKfqkqfVpz7Ug4kbTeqvE9xN9U9mHhkkiD6rFhjBHMYBDmVKZDgbfo312",
  "key5": "2dHHgvVzvJohjwaPGpyQJpwJtLXv57J4hwQ8RBR9Qi4gCetqUaMPtGYcv9K9NMNYZ36GQ5P8vNd5381Vey1JRAyk",
  "key6": "457Ba5QLZWg6SSUMSWb6Zfugyi9SWSnQwx1ey8sNN3sA1DUL6qhVtvQweG32D4X8P7FpFbVsCgbPNF3vfFjMof2H",
  "key7": "JWWP55SyPNWvm7dFZuQyUvFeQPV8D2qPqy8ucM7b5BCpNrojMq4cLkf9Rn1Cxb1fNbaAkRLvUDYMvimMo2MZNji",
  "key8": "3qCRjxsYGAYoz4qRdB1uxa1RK3oT21kwD83fNtNiqvNMagjr9SwWfNBfbnUcBvN5zdR1JMCiQbUazRgsLepD8fmo",
  "key9": "TazVhGa5pXUffZkyKdRanVkoG1Np7LTNoXzpVDo9nHuLFT8NZNFrcpAT7Q7twb8UTdpZqutwmQ86L95hL5ny5Qn",
  "key10": "3CUbjLxGN1pbjxDB5ApthhJwBCwmVEWrVZ3xWrHahsUuo1hHqbFxFhyavDcinV9cuLfzBhFo6g5Ev5AAvrtRQs4B",
  "key11": "2vq2LTNuwX3XW43iCf3LgpxTsD7mefu82hhqb3RMoJ38hvKnj6DxWLQgWZA4xSEtMSKsBcZTMRcsVyFFk4uY5kFW",
  "key12": "3zDMy8jn4YFqGr8uwmbKfkHvaZGSgn7mynosLBpXWnPD8CJS5MFK8Eq1PDtEcmfc48P1JzCBEykoHBx4vzLJhzg4",
  "key13": "62jt4aPGDkRKspKnkw613BftBqsPZzkf4kohqdVZ37Gc3zTiuGdBgTrT7Hb8JtMNCWK8NvBV7gZqnYfV1MF6wzDF",
  "key14": "48niEV8ffb1Gn2tTeKh4yxjUvkk73VvvPc8Cf6bAN1wHB7jm4FnuipqRNRjB2izvEm3qcZb7V71Zw7CAHUweZS6d",
  "key15": "5hj8wHZ1RgPzGUegnWgPsAegyJpNHyiBi984WvipX3UhMjxGj6xeYfsGD6BsHv8u68sSj9cR8JmE1SPquH4YuFF5",
  "key16": "4936PGwmk9fx4t6bMoQ5q1Rrgc3rLCafxjXvApNeF3vaeJw1eK4Rcu5gwMtbHuJXJy8yTY97HxjSK5qRyuf1gLW7",
  "key17": "GpBpbMapDaq1pJzjNVM1SudvRVCRWKkS5W2frA2hQKJQzwDvWVaG1SzrrCSUfXfQ3CMHznJ9ci4G1o3tA9jAPWX",
  "key18": "3bxr5fvxKY9v1emeKeTQQyxYMy149EHFfNShYbqqN1czKtka2fN7odbDMrUQgKNHMHoU3uozPPw8rN9P5ANm553e",
  "key19": "iQG2J9STvhRqUoSxJP7TymH2KGqqzBzNGyRHrX8vqUBrGWpfUwK1h97Qax1EV7ifKiysBNez5YmZngz9SZdUW3p",
  "key20": "4v5ENQmSLvvhX4f2ZtiMYGb5dFccUCgUug23tQp2SikT6bGCa284xDuQrg3hujaE2v3kT8THr5A2P8cdxE7rZL6i",
  "key21": "2jtT1mdRb5xPLnQBHYVp8intmCaMcJNj9Uv7zgfPFbwWofXzCRt87sZ84KLoBSV1PJVWbJmreQbx9H9LCDTNNWLw",
  "key22": "4L2x6gK64uoco8QGspQf36JqqXyNL5sk7G3ev6n134vTrZWog4M9AndYVyF6diZTKLCs3q3XwHVBmPSAD2m7bLev",
  "key23": "3WY4d82sARYE83x5Rri93u4DVnJT66V6SVndbqW7FxyVapyDbLfk23mAJw4AZNGWdKvDb5HzCQ7QUkesNTx25VWU",
  "key24": "3yq91Q63VBxagiDAcxvyEYoGZAVvGLL9NebW2FKKWBS8p12toHQgNC9hns2HeH6fy84rP9GeiNNvdsV3SkdKznkR",
  "key25": "47XeXjeeicoCWsUEq56CYKx6ns27cmii31Gc28YuV2YsLdjP9gBBwyhPKLhMfHK8cxw49wEg1N5rwsKn83DPc2dy",
  "key26": "4xqMBmJCVdEZAFDJZbqyEPwJmqwmTjDMwZ474LNDYHLd7gciSatZnCsSJX3uJie4YAAfdEPvCfx9k3VWqNN6ASbd",
  "key27": "3WpMiYf4zwvxQGWAeZtmFsLcFdwjPkMBMHbShZq8Q4t1m5EzSqLwYdf1YdQu4XzBWqjyxxn5CRDmNFbxwaU1TvMc",
  "key28": "gDYTvBrz51nGkTWdecC8L26s1P1MuhZjUPivMVGPbFaMaYP486bNa73yYwTemcRmzXAbrZjg4AL5LyCkF7S8fFt",
  "key29": "5CriktYKh9L8oJMib8GqrRHF16jBeLX7Atev7nCC9c8a6rRc4CgG58YknBhQvP9HQDpUCfZgfCs5Q2ErdWhS9wmk",
  "key30": "MgFv9ZML4tu8LtwgF2kKkKVb1DcgZbBPz7ihs6XHytxqPuFcEDFbUihtc1B9K533HPjg6JMHMHr171GmVoKBorA",
  "key31": "3G57oL424BEhU8ks8ccGt6FUCuAs9D6GMj7LLCc3xJG7yU1rhvT9RYNwVUjVrHendB8TCYEMCsd1g28iAZUam6Yo",
  "key32": "Pc6yvsDew4A5qWSCCexuTDBLsU6vTr98QznN7zM7ppN7agrPKC4aY4NQXxhyX15jExvnWYf4Djj5WtrbA3ysTaD",
  "key33": "36dbLr5GaG6fvsv8xjiTmWaaod87n5y6xLJyuWG8NfH8tGhptWbZRHU4dNMpk3Bp2ovMGiVgRzuxQCoCEvCLy5Ko",
  "key34": "2r13pgb5yVgPePS6RU9gofjhWe2YogpneL1T3w9AEveCaCZancGGVizTjSMoB8NXKCMmb5sUPC9x3zebhJXYGqX4",
  "key35": "4rnA7qeqF1Bcexz6q4SKuDKxv4ixAUSGGv3e8tapGxmtFFDsCEimyh6NxEDhrfYCUDh5V4HtyhZXvWVgdxxGHzQv",
  "key36": "2b5rGGzfbyMSijfz2pdXnErtARYm9NwmnsW1phh82uZfERQAoHVKthrGeNx4ee345ymJhmrZYqk1zXq6tnCwhZBR",
  "key37": "5nERq1MBasSqpVd4CjUgof4u6LXk84A56dDML5Q3EVMHxpHZraYJUTQPkiYd1QuJLjMSWMTdBXXZCSYtWDq5SdJa",
  "key38": "4Uv3FyLZpQLbmJ1HnvhwGRaKYtVtQh16zYxMdXzQmUVwXJpmqRpNXZYWaiWHiTBE4ehYTgLdzYzY4b5VR3jbAk2w",
  "key39": "5s7FVHTv6VNqTJEFqiRx7URjg3cigiWSvGxNqZY9ueJPd5zQbCm6aWhN3hDD57xpZNTMHJjpTZRtoQXSjcdAHv33",
  "key40": "3VRHUdTw77c9NPn7RK9Xc9cfMbc3UPk9rvfcbnj4iSVfBPxkmy93h4s7gw8nvXdzU9aSuk5fjMpwZmXJkKFCCzxd",
  "key41": "5rqXZJ9PvhGxP9tdxUty54NaMKVdyRBb1mf73bznpYQahKabGLV15cqZG6NPZD47AXcieimxeFHDCWX4vWCX1Btm",
  "key42": "28MiRfhFBFmQ5N8myW7r7E6Syq9FmTbJDzkTHhbRRYR5MAw4bYmPgrZPVcwsN96ZQZAU9Gtgj1yHkgB3pQvjwMpq",
  "key43": "f1sVqoL1W7yKdLA2vGJUY4MryEH6fogbMb7jSTVCBNVcFXwceb1cBUiTff7s5WbBAtqZbkBpjzgb6xaLYWV5keg",
  "key44": "2e93haxYKerVFFTSzURzsaahq2ZwNatKWSES9n4Qe7waCHkvdfajiNTh59Jftpr1WuWx9FzCBb559BkWz1unxauo",
  "key45": "4fPPxr6Q7h2f5y8yv3snDhYsoQPpK5Pt1Zck3fJfFwrvFoNswBWnswME46v4LrnhF5SrcmnX6AqzkjXqCyrjvTre",
  "key46": "3N1Kon5CR3C7juefpmyCgQjJqSeo2bZ6DVfRBxWE2Y3j1a8S9gaBAeRE3QkuCqxn7ns8tNuS5dRY2uEFN4LENg1V"
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
