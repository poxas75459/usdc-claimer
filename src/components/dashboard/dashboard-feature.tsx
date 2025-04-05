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
    "5RHZhLNBXBPuKpo2jRay1Y5Sdwpc6CjHifuDqNEcD7ok1dJsVJsFERpz9ozSDbPfbSBVnvxRRJvN69CgWLrmNXxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d5Te4x9hmNmuMit3tbKdo5CVtqxa3kiisAbCjd2mU4AsjbN8zQ6pLxCS7yHGPDGv9yqqy7daseantHE2pxKoC8W",
  "key1": "2NGNpRKhQYzukbZRypF8qQeABPvZJRBjoADVLeELpZxXvj1Ra2UBPUyY12LqCeAmeTRAk4dmvdJiVYnETqNdRFv",
  "key2": "3HUvg3nCUbAaM1XKLjdpHKpDgER8MJQsLPc8jeBtT2D26hKrt3uavf7r3cUZShEu8wWt119iVd3UQDdicFXgZmLK",
  "key3": "39SUBFVGkP2TariTnxShzzXi8okadyCpWYj1cYBaiY7baqbtRwDxAjZouCHkPDrXEH4yCf3LMTAEne9Jy22trkfj",
  "key4": "5upZkdWvxSCniTSiuPqWCfgCxhfxyP4RkdsZn4CdEccDQUPfQZvNmdd7Ta44AAwsBUV8AgjXJ4W7FT4S63AFihbv",
  "key5": "4gmnXLMsmZ6LspPzZo4Gmo2yVyzyQYU95uCwC5VWSUUz9HJ68JRDtwJn6TpuP3afFdjSou498Z1qMiJn1aGPNKWb",
  "key6": "2rhHZkLHj2H2paf8n9L8CkmNMcxkoGHUnriLJ4ruAXHArwwEFGBa7UHfoyiQCd3gKgQ9K1EE5ChcwgzUNMDkP8zb",
  "key7": "8ajX7FwywzwWgNGXR45rbqgAigoJsQRYfpACEXyyMrtnC28XTLkqB8uLP7hUMJCQ3VmENe6yNeJbrnrjGeSdBWn",
  "key8": "5HCxj4oGbC3sTUkKAv6CdiyhwKW8HYE2HGa2DV2kSxCGaKkwpcEJTo95JdoP9wMd5V3UsE4z3BYu6ci6edHbtAgw",
  "key9": "4XYECRfiM5Uw5zyoZnekcbsvdhDkSGbLKMHCd4hM59mXpCCMnnNu8p61xG2HJALX1P2AzVsUFHqAVdA7mPxWaJCg",
  "key10": "Zzu9P1h4EvQJqWz3cb8v6Q5GnfpNyNB3xYVkYBBnFyBMH83LURbuzqpuYjCk3RynKxQWW3c6wJ6A3sUprRHEW4Z",
  "key11": "rPMJnRbrZZQ6CM9C433Fi7BBuRo2fvHvE1UDs1PiiZLkSX4ak54P1GuhEZozc4dxPYo9B427PFdnWXXs6FwAZtC",
  "key12": "M53E3X3KxKsSirRB8DTfCYmwYvCTasvoP6etug9TSsGPUHhYvy7ekRK3bxLgrmv1ML2srkCsx6EzXu28wms9JxJ",
  "key13": "3q2GmD13HNWQNdub2sG58n7U9jNsZzwAD58Gq8SjuY2rrrtU8HLGuF3zA6awomba7m55DNQEfjfGsenrTjqz6Ang",
  "key14": "3aDWCuD2a1nd5gyZ4Udj3hvEC4KeNCnPUJXUErnGzoNd1CuebtrBRj69jyYnkPrfmfkPd3yNEVJZb1MU7WRXiHdP",
  "key15": "61su7b9jvgcap4E5tFPfxLLJmtmLwKygLEFHF9A3UBubKgetyDZpTbKyScbof1Ti1DL1rPznRPX4QGF81UCJmGkx",
  "key16": "5DY81wCct3gartG9uYBCcgHavzSsVqoWvGgnQg7t8CLFT4nP8Y9sCYDNX2u6YqjtVu6HfATkVySgCcYyXw7ZsvRt",
  "key17": "ZVuwEPW3oCBF4Bzpxz7FHJgRCw6xCTDQ8mczTia51tNa9pYJV3gb9AWxANGsgk5CbVhGMayhnvvYwVBpXzc7Bga",
  "key18": "4X2rg6FbmPEJK5M2put8jzRnzPUMXHAGT2CZR1vPXxFqgvE8DmnFtxzVkPGiZPs4UUvM7VujhjMwyPUwrbmbFP7m",
  "key19": "U9pRDWoQECVGpQJCbneYrna7fu7p8AT8taGxamQqo4KCay9M3H3L91mi7uxMT439PLMwEHCawhcQnFdxFXRMQX2",
  "key20": "4rNtthYwvrAbSBrxaUf4w6CJnepzwBi8E5w1ouWBTrJzGsEAe6noPTdjJaHJ2f7DpWtkDq6Tv5HYVX8zWhTi5WaV",
  "key21": "59dE3HKcUHcz4Xu9foBaUEkDzwYCfqLgPhfxf3RXTs1jdeLVhpcjsKh4eN1YK2G2Wz8fE95LwanVBWQz9ST28gpx",
  "key22": "5ncSEqRnycubYkWowqezeMBeRzVLNmJcik7imsp1yMByDw2LXEQgC9X4M82EHbfKdZvaKNP2ksP3Ro8gYwqtQCii",
  "key23": "5wyR1WXP8br6RhMLaJSxbmGBZ6s95g49F2uujkgcD78WyoRTPivYqbcMgJ4iAueTGo9uyB7BDMo2hhaUrx7GvTDo",
  "key24": "3Cw4d2LyMvey51enc2WGG3uzHazMcE8tYAdS9zsB9uFMBN6ZV7HCDv3fX6QmWEFmVDaa91LPS4KECHN1txyzuFZJ",
  "key25": "21hTCuz4cPtXstDE9YuBESobwV4sYWD7GwC59jhKBN778UkdwHAMBcXdhbFZw8Yhv934wPE26J9Uz21Ww12y5DAS",
  "key26": "47o4cQqeM5LeSMHS7iRFpjCkvHiw62x4h6P9hRe2EvA5wfY38A4Pjoqz3A9bj4obpvNoCv52TbumRAxLWe3V1vxy",
  "key27": "57v2ojPZQzqyabQKp88RZ8wuf6PBBJB5fM7EFYsmHmDYFrxEvmJ2yoW3H51jDTxVeVENKL7usDjLMq91WiWXFp3k",
  "key28": "2ibLSE52B6DEBpiLhZq5b9AXcfCfmxLWTpEestCrQb6prnGXdbM2MYhgrGb8rKMSZDxRz6AXUWDnAoQgNDUuPK8o",
  "key29": "2ynz8WTw7Q8bexhVCGrV451BgrPE3fdqmRDWKYrCqPBbd2Pn2t8JJfTgcrH6YUUoHyZfzQNpwob4hE36E3QVKtSv",
  "key30": "5Y9HDEBJTnS6mYcwV5TSqtuaGuL8vMYJZB3fqozQX3ZbNtVQVVxHJDN6X5PL85G6sNM9V1Xseqq78dZNVzdzmRpu",
  "key31": "4xVbThqotwkCi5jEzrkUH111F56MjAE9muwiAQLLkPhgzHLDzHagt9jJqax2J3wUE8VuTqwxXwSiUPUR1Zd53Vma",
  "key32": "5uUiJeCnR32Z7mBgNeQENJYPhq8L2FViyVfXKmx3oorDvmh3c8SZw9NMP9D1d87K8HfWfvxbWZLYheBBPydxwXJ9",
  "key33": "2Lswdf3mCVbB65K8GZM29gf3Km9pn7KfkgHPnges7SZhS3pEKcUnHmtQB61J77tgEQitiaoyUy8xbLPkcUe2ad3H",
  "key34": "2a9JeZVRGoZo9dHEdyoBUB9d8aV1yD5UYGj4AXyhwTu5TgdUL9aUPCCpQhWxfAQkDd7nSkq7KLZPGxggor3w2ev7",
  "key35": "36ZXNaMxkjWm4Yoq5ctnU4w423ot1uHA7tqskZueHcUq5vER8VTQrJGB1uDkDUAcg2uDkmPNntkAv1MKCdR6jVBd",
  "key36": "5mYfHETaPBC3LCK7X28S1ZZuCPvURbpvqnGcNcQoeqbZj3pUyG24W8pJzFLgJkxpW5Dt5hhN7XHtNdGRbayqYakZ",
  "key37": "4sFAByh7M3hTEv6WPqmDTPy7mW56SE2eNa8BseW5uNrpz1EG3q8eRfbwoK8APyz9fk5zAL4mdqFFY373Fkm4cQET",
  "key38": "4ckJ2Lvg6GsiHTBxD7zYbFqa5DGYW1yg4CGL5sAeZisZtkrwuakNVwiPQdAXNnJg9fHvBLDG7RLn8XVQ7BXiFD5J",
  "key39": "4zsaiCwDK1v7X3Y77mzzKrCp5mLCS7TE5tksHpNTB1pPkuDLW9ZjdkdkPeFtkStowyzqfScM2Ao3q7GSaQLdEyci"
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
