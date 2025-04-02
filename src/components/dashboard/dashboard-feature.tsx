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
    "zU7Bze2yNjdn2CxbJZGHd2qfvFkpciXrKo8Cgw5o7gnNdgE2v47GbTHULZ6faLyXu3uku5YLoWLn1KtX7CXsfut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LE5rhBKhgnzx4yDoHgkgL1tzV9PJ4UDbjbo7VfTHeycBmoBFfa75ymSDD7PaR9fu5KcWpfAPeYDYxL6JV3GPQMp",
  "key1": "3MN6BdzkaaTtDzkMAmq2QVMnc8qqhGiJa5tyKE57kgZxk2fJGAhBxy7AU537msdNXo5UvFaoAUEsPbfo3AEW5RsR",
  "key2": "5Pi4G3NZ3cyqJ5SSU8F8riNAixHCzrmm2UbPq8jx5CiTjgfu2fkAkwhWqRvEVVVtXcNyDvkt8oLiHG2TcpEaTmV4",
  "key3": "51SQWjUXEkFCXc5ZzcWJtqNFwicisTYXVNFQmc8Gph3RgsFpqc5xJY2RUQYAJDLDK6etsKqBXkrhgg12DryepqZy",
  "key4": "DAvY4ALfro99yMXeVxWZJgcX4qJdFgpTvozt3UAiERwLYH1nLY7fhbSdUeRUL8fwxx3XA9fwnNv88t2crXwfstu",
  "key5": "3X21RpqAx95kvaDnTZAziMQi4jPNeRwVa2LMqTiTLikSbaMZJkmLLxxffUwND5Laxi31EVbV57Jmt9M7e84xnVEe",
  "key6": "4xRbDsJ7gTt3nNGRi37S1jaRqxea7gdBtfji932epw3yVxR9ZXoM3FFhinKhHTczBPqkYJLcPcELJna8Ww5h3u2F",
  "key7": "3SQhD8m2jnfMCo4ZqDqxRfXie3CNW4HtnR64NS1saFTs5GiKgWxE98UJFDVfRQ4wWsvS9qzcgzN23sxDfHGYuC8h",
  "key8": "2P23zWSMQ2hTiTtfVujfVcP81ckVyfLQyjeJc3TgA6mUseq9YdbBou4UFFcH14s394nbEYCF6sGpBzejsgG9ExC4",
  "key9": "2ESonHp6XqAzofHwPDDfW4hvy6f7sFqB68nUfKJzhKPjWvnAt7TxazaMoHgq2FiABKGETcUVyNDtpLXwryy3ZhqR",
  "key10": "2VMYrcGLhVLfqPMmq9HMgAJeRCWHR1akpNuXvhK76Y9eqAHzRqEaXJWqL1qTkFNAGq6YbdEAQwpvEfs44UTRReQU",
  "key11": "5QGCRtjbZy3dmVsYXjjTBLUUaeDvz5LN3LrW6cv2JYcrgRFkM4ua2U75GvBDmV6Yxz7ViXADBVSB9azJZWpQ2i1z",
  "key12": "4CfxhCRfEn57mytouyyMXoc4oYTqDQyQLwkPp5TMzRH3oqxrYVan1s8tpbVKYvNszV2soE4m3q6mMM64v3kdFKL1",
  "key13": "2MbksPPWW2AxKAmoN2ArYHytnx3ND5PsRjHzH14y95yVU2cFncGuGXTFbWcdAPFgUzXExKwA3CGHvK42syjS2hya",
  "key14": "xb3R9up3jRDquNAjyfAE7R2YpuW7vjTBtt7Q6Pd6MUyVr2fkRYxaZnFgHYYNzAJ1pSynmq6t8cW6JuzeGx4AC7B",
  "key15": "4DESiEvAKvLTgf8Wwr6N9yMhy1FxhtgutoM6vtaDD1ind4MCV55U2dYodkKmoHAnkYtshvi8hsdpypzJBy3D9Rp3",
  "key16": "2vE2HUZwbXSdQwTwUtPiEu2eDdksFyKC9HqcfQdKswgLzaFWZvzoW1PUMg1bufg5wkt2ooqEu82T37VNnZhbwYHc",
  "key17": "2i5S57fu9WPf1i6pZzvk8TuWy15vzC27e7qTi36nveSuTyvCgUtqLwiZXbWjmLcp1fSPehmZdLqnoMaNxm7efqjD",
  "key18": "4o4fuzyneDMpKwR7derWr5wXUVWNx7qy4cYYATQUtqvkyUocjEcGqcFquT5W1fZfMEGPuzY9e92DW8yjzDPe9NAp",
  "key19": "XY12PkT73CN69yepNp46DUowo2eQ9PWBMw3Xb5id7Njp2ivUJvGtF83hXW29jQsdVzDRPzpc5WzBApsQjCJcTWH",
  "key20": "5Yrnr1xcLf7RdqCW4nsRkCf2uZtt7S1QLRGpm2t1u6wuohXadobnHYxPiNeVHi9w41idEUpeNt42mAep17c3fkJx",
  "key21": "2LJgieZeotkBcbg3PHPT6wo7hwks9gjuRxqafBptSZBhKwCqqNFTjyauJqnERUBgCUpDquZqCYXmGrv7hXCBYqVN",
  "key22": "2AxuAeKrfBxEwTXzgJL1vxL852QqSfS3NaBnnT1U8gWzatCspBtowbCMrR7WVkQqmfNYA5JFbWM78a8R29sRkX9q",
  "key23": "3hcQ7VhCMPXARjSxeZbd6uguf5PAfQiUYya6wELKyZHGK3sF4bGLCp2ocr6JeFMuiWttTsGPWuyUPs5LVcEbkdyb",
  "key24": "rCsD1WT3q2mnFhTY3NeGdhiDx2a8cxsbwCoBCw329rbiMCK8B3qfR1EyggCaT28csiKoAajGCwmsgfJNj4zj3Ju",
  "key25": "37415TRu6zCyc4UPD5rG7Soc6KXWSpRfPQZp1nmRMSK3fxdwCmBHxkbcgJNgDqoS9wyn7y1u1pucdQsVt7AgTDv3",
  "key26": "58MzjU1xLBZX6vELYYx9zttBYrqqFRjauXQL7tyokptxz6nXykB7ZMBgdEq2RivyXJoasnVMTTWoMRkWwuh9G3rA",
  "key27": "4UaK5MHHsHUqYkeKPvKU21enGzsfgmrtDzEQZf3i2RCvrLjXMGjn5J9D9iFXRNNEqgWTPDo4WWnEaVwe6mHjKQp4",
  "key28": "5jYjwjv4NLnXaYKE1aRiEfqeYEn598q3Qgas2u2TnLDzcuvLBasoAQTYLuaM6xa7cxh2uXADpZEykRruJbbBxTuo",
  "key29": "vB4kBxxLnrgFLPbjp2amaWyTGuegez8CqwxKVTyCygbAxue8hU3YmnQvyyEZ7oUxkmfqAVBM1McqSvnTAURX8AA",
  "key30": "3h4dQNPehZppwknAvb97tkTK7chgYjQj4jiNFeUsx2oFFCz4c9npdgVSREyeyDkVKtxS5WrhuAZHitYpVmSuVut3",
  "key31": "4CEknuRtZZAJmH61NkseNN6cjQsRuCsAGo9h9sJhLRyrqi5TjV3iHfg7qDnry74djdpkRq6UdDCpYWaQ7ocyWnGN",
  "key32": "2XW2B4uDsipb69aLYZUYMC8gC72KnJhLYTSq2BnbTh9Z9HTooMXErUdaFAez3rCbLGZgRrdAUa3fX9UmitwjabFK",
  "key33": "5VxSJ2mw5upUHHfRy9VJuK8XuUHtFdEs8E8f7FaNJZ8v5HjXvCbHKNPJrBcz6rj6PGWTc4DehfGHbPRmknEfioNH",
  "key34": "2a2NrGHRwvX3WfseaWbk5quTHTTM34Tb4SkUgM2eC2ak94V62gB4tEHSfA7Q4PkBcUxqTmgkZUKr6xoN9tiziuD6",
  "key35": "3UdHuAoUQt7TkH4JKRVqz2CRFzZrrXTbURiC3p7sdk3KprBQG16gLUMs4nTweMC1W7CQGxBwKAeMe7D4UwvGJYke"
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
