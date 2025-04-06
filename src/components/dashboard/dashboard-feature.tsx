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
    "ZpGJvJi1GQ2YMnqMJC3Gsp4Gpn67xQbs8B6VrJ3ztfJf9WFw5B6u8M9xj6ATfj9dU99QhRv6MXfNiYrPLPWXgbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ARxhGeywmbJbTj2u7RyBACWmp579aM88MdkpaDaEpVyK3LL5BkKieTRFCMMNFk86k4t7owhKftFaNYZHwe9MhdE",
  "key1": "2C9SjJf9sJBvoDUrpWSUostmNgXhzvG6p8aPk8TsXmb8VGEdgcb9Kiu24iNKszuWqwfimJvvwiGt93dZgwVXqTLj",
  "key2": "2azwwRr1UAbWQYwq9RbCaayRCbvjKipiUzWYsiwDSoh2JaKp3xyTJnbGGzN8sQuzsosYuivGRyVE7advHkN3FKUw",
  "key3": "3xVbSLapVtWG7bQ9avA6HeLircMopKSuCAAB1mhxWz6oGqpER82Kia6xRFHWQtHTwAWqP8KqKTWSLjUe3xMCJTK1",
  "key4": "5BeF5YCEDZvrrrTjcFeDTFaECxBdzM6iRFUqwqgX9z7EuZFtuCczCYy4T3EXhsSvEJz7yqLtwEuLSS6gYbJmXxFc",
  "key5": "3VDddBCLAmDAt4F3BegrELB3E3fwBDTnvdmDXhbJNk6vHnndfNMQ2KchHuWAR7HQUAbk7kQzNCvB8Pfxp1fTGv8p",
  "key6": "7n9ZYqVbxcsQ2WrhgYPbgY7dRxkU3kyjCsJxxs1s7ZzTh3wZJGkTW7FdCa74QZaf88ixwMJJgA5RvuHQtQqq7j7",
  "key7": "2RGrYjFG9JgTbXAsmkmcEscf8w3Mq4fwwTDp8dtk3ULg21Me7aYT3fFGr7iZa98Jf2DtGBFnvMmbadvsfe7XWxYT",
  "key8": "3Jv8pYnEc7mLVaDPFqYaNJ6Zwwo98MJWUqMBMLKu1kL54aSjtwoWVsijq8bkhWEfLefrPii4vmJ3Web2AeAnyN39",
  "key9": "LT7S3pCiTkZ2dJxwekANJBjUw8hcJagfEWfDSQ7UaLK8e3z81GEGsX5C42JuDRdsbBkboyAMYQTSmLG46Zb4oDC",
  "key10": "4GWBnWdUYFggLfNd84VZ9jk3VJqGjq7ZZWaG51rto1feshfFF9hfjK13wXjLsrhJMdZve5EF8vYc2fSVJUdM9mfL",
  "key11": "8NMFUGVP3wfowTpFtEjEtJAUTHf8BmrMpQ1q9dSXe3tjwD9AnGzHcmSE5dQ11mGoZ37ExKWExaw3oAQGis1GeE3",
  "key12": "4MLQRpKDbu3GEjYWDP9u1eKLmCgL8SrQKDEj9RF88jCVjrQaEnTTRiWmCxL4GpjbqNQhoG2DgwFVWSr9WagvsPA9",
  "key13": "4fgnX73VhTsr5AfdeQrz72PDNweYvDTb7BNiKudYFrRgqZLcCwFw49m9QXgiABEfs6ynW8djKbFef8yz4dTmStiS",
  "key14": "4GFR8iPn8e5rgspkGxdwDsSzi9fVqckwYzrtF94VpuJL9HCjyLS2LRCHcrtjBzkHzVEFzEXyiDeBKb27derV3UFB",
  "key15": "gW5fCySE8J9jJi5d9BXZU4vDpHGeL9E7NueJgQnCoLNhds7uLuZVYNxndBeSYZRXFrhJQf4WpAmg6T8yLJnt95f",
  "key16": "5hsqzCttQd5Y4M49iUHB4pJCu6xSkbBFNeZPsHQ61734PdoygaKe6FeUXeM9tRb8Qd3geKBnunywXpxyXKrwX2Dg",
  "key17": "3nWpcPAwLB5td5Euh7v3mzPGP5HncAcWknqs5v7ztrq5U1YyUDf5mhbFxzJJaXzPQCyn7YFPBbaoeEydL7yBgGY1",
  "key18": "exBRxj7bsfVg4LCR6ZqknsnjoUXRcRBky8eeF88QqWGVpFokLAdQfypXX2jZRcTZkEZ1SLkXaxY4GhiMhwBNBdw",
  "key19": "56kVqGoQXvxpx7nnZtcQPyjArvZAdV5j1a5QD4qL7MJdLnLcoCFjSymCP1aqjkAoqxpbyMzqiyAcvqFWa8VuQc2r",
  "key20": "5q7MnJ2sQD6oVNcHHQwXn8B7oPp8zUzvu16sG7UWsXbGjEBnK2r4HxY8LUv4Vp537BVUzQCLgVjFs4KFmKpJaqfQ",
  "key21": "37Ntf8rtj7fj6w5hggveCxuUNcE74CiPkgqsVibwutgS5Vu4s9HSvrZBUeHan43y8AGamYrwNSQ5PQnxRM3BBHzg",
  "key22": "3QV1uPoNVbT2MqwpTK8wYaNEpPmd8swNSsj7KGPLjKUMqQEQpmEYWJS9ce3wGWvHM17ar17KqdF8xmQjewNnqpF",
  "key23": "2AJjVPehUuMWBhqu2WpwLaFfndG53wXSRYeFxngR9oybDDACHonS4ynxJjMeFLaqFkiLAZjWELSZ6ngmq1kTpsTA",
  "key24": "2QZuTkCRQS1vjpdqLNoZKn6ozokGUpTiZvKyHZ1pvHAeqv4K6M3t1QmcywX9FkysCV4KMA7xyfZohWKL3mBrKiGZ",
  "key25": "2XM2fpZ7Jz9PxWGs95YA7JMfasczjHZzz7gZzkxyd4YCRznrnuCPCAXtGYSr4zuo7Lbcbidf9hsYW1JXnypLFTqH",
  "key26": "4udSbSoaLjDz2ewdPZw8jMdYLgaGfMgddDnMxAhh8gkd2JN37eHR4DRW19qRBPoGNqo8vBmCJGbi6WekBe1mx4V6",
  "key27": "D4XK7tPFNa3Vjg5qfE3txKiNQqJGTEiFy7aRry1ZARt8K5x8Lb5un9dL9Ead3TB8qENgxyy8wbd9hDivVXE5xfr",
  "key28": "rdp7PLkcWwFh1VokHWoN9YAswYKaS8GG15rP6KQhmUGs9bHLy7xVgTASbGLMDkfxuzf2g7uMnCSSn7wJ574TyNi",
  "key29": "2uUdaxevjggwDFBctJs8VprrSs5i3a3rJT2YcEP4wGr1ifJ2UkNhYauzBuBFpukhUvBVbmagUGG557y5atWSZ5dP",
  "key30": "kg2ZzM9YU1fHF5fJsyjmKbdKwcWqcQv3sJBQwLEgPvXVPv38t2wiaWZztTsF5553JPcBVrr5sSQeRY4Hy94K82K",
  "key31": "3RsCk1oG3mUU3XnxvepwcrENxvpBgJcwFgnrdX7rgPXaRpTWgtM4eoEcptuhjaymnBZ3Lka9L8W63yx6vtvFvEHb",
  "key32": "4ee7z5ZeCAZi3pa4ALDmZiRB26Jthn5813WfhGDBXKGNTMEsoWxyDQEYfS2enCwm9QwrTBbaFhBiKgA3dmdv72xa",
  "key33": "3uvAPbhcXdmCS7FWgT7vDcWLLfVYnV7JmENCZtr77WWAaFM43j7KjtxWTSAbbZ17vYeA8qBKziUiBEDrSG5AUdpK",
  "key34": "2b1AJVqXQThpcEdoENHCnS4QH7Dz85oPnFKqEc1q3wtmSK3LjcQQb952UvSQVLgZqxze9yvqc4QTb5fwBaqWze23",
  "key35": "3QBrNa8eHjoEADtiobqJkbZP4QvRHG44gwNiAJbMnkqhbEaaw4Bu9rvaystybfZBdAs7BthLQYPbZgpS6WDf5jpm",
  "key36": "7iVZ2iCitQDZCAtym2iqRecbPZjFUbBsM1D61z8H7SHxWaDGPNZhzPUKQbtnHXT6tKwoJD3ZSWcpGHH8C3fo7MZ",
  "key37": "5tv7kH4Uhg8dmf1uVhF6J4XhMiXhfLP2fkhddNRwkUmodjhxxyG9zUrqpY94FQRFK3eT89Fx5dSra9sXD27utmcD",
  "key38": "4y2JkngU6Lebsju7KoNNhGYxo7EsDVKtAodcyKnGcMyRPhuvqDt8bj7Yvp894NT6JZGDzLoyw64PKAKrnesfG78J"
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
