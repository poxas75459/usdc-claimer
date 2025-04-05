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
    "Arx2HSthrAxoVMPX49pX6sasWcMrFMrCqPWW3jFZE8y91aP7uTo9rAYUn1TBnJNae7KaUxHJbj8x5DBSnLkewQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hyhAumaE1FTAZiEQTcTjXT2vg4k1frpprg9jRQbazTRNLeEgdoesuUT13q8p9pSa5PBEQchw3reiixYucv2PZiU",
  "key1": "5p8zhhMEebSVFAgYq1FTnftcrKApq74jm3JqT9npyU6vdnzys8PNTrbV1xcTCJjpc2RPfu2JQJHQTDZPzL4pUr5V",
  "key2": "2nDzT5BXT5NqXsbDNmb5Xivo2yvmZarEGR5WxzPquQvhVK8ZnJ5wSB6dFcqnrgSemE5yeS1NAH62YUvhzd9dAf5L",
  "key3": "472bdAGNCb4YzdAnTpRGLpfrR93ziEacdhg7MZPfWhJGr5GN4zkXnoFgpCZ27ujJf7N2nYdFgpvUqbvehwxYDsGG",
  "key4": "62mpWGH2yNLoqf6wAC136R6kUSTPbQVrcvjVAq9EWbL941Xr9oFrdVGfM9NTTvL6mLZrHK3W4ycBU4iBoq48jFZh",
  "key5": "5QAcXnBqT6drLgqEynmcHPHKsCCJr21YnrFSemJyJgYPqbVboSezYs1c5BFmWcveRhxAasXqFw3XvhbymgDyFmiB",
  "key6": "WG6XcT2A5588QQr5icEZ5GekFm47YKzk8d6KV2pZLP5MV8UuKMGMUBmhBW9RjhmvGankG7iNGVd93Z78PCNEQat",
  "key7": "5MMypHzwcAGfaWLKQrCiivzMQqFP1jTXqBHWZLP4YdJiuyYS9tFUpyTW5cx7kKh2zoNYjAEX31s9iSngtLFWjSwY",
  "key8": "3U415XCSP83fXM63Gfd4bEeBRE57vnricrAXY6wEAoYRkvdT7ev69pbZCWoZmdaGYrtbCJABG4uR5CiWsHSRcnoU",
  "key9": "2UsGhcJAvjuvLyJRWFjkWGNt6q1V8diiugbAkiGEBcxNXDUi6TfBXCuWuReEwJMbQiiQVYGXLN11sqJDs12jU5op",
  "key10": "51U1Rb94Kgt9SkRXSDtcVnm1CUMMVzupteXovrhG16maB7VTKRsxiaKn29Lq4ZQWenSwuhQSth6PyqHMy7MgH61Z",
  "key11": "2yZ3gSmU3EKSvjp1ymLXazg4tuxR2whr5jwhZaqfrFwJKqgbuKmTs83aVYhVh4UV2Wny7ffQT5EH4Ye1KCGig1kY",
  "key12": "55AQ6nJVT8GT5mefMNAcFQj5HguqxtUHFcA9XCMAFsyz1eoTwyYchrZJo97D12pd76gSbwCHhBxpBkBhrQzcgLgo",
  "key13": "4DkRSpTyFjz9oiWuBYLM2QzHjn5sn9NeX8uGEvnsch4MHpx1fLpsxpN9foCrVsREnsMFqa9dQqujTvWzAHngR947",
  "key14": "5tQwgKP3qbVGjjCWo1UhVpJdJA5zW8e98rQuFLJKXSmySpfVogy2NdbyWLnR8rFvLEoDfK4PdZ9FkVVeneo9wVpB",
  "key15": "4hCSawyDbAdvphXZSa2ypQ2KcPxDRKG17zRMesY4xGMAJuB993dHtgHHrhbSYnuVeFmfWv2pY6HvtbAYBBmF6Wfo",
  "key16": "CDFbNhMvbQyFtjHkT2crLYRsmNojj2ugu8rhcVWcF1eLv9Xn71q8s1NDCNPAQvkMhTEJnQpCUXsuKKZxo1pTTz9",
  "key17": "4fLxdnazWVyv565vBcF85g44aXgcfno2ZefgRsLEyc6shfQ4gs6NSSvhDpbhAnr5SCNdLrXQqmR8qzLXYgQKqW6v",
  "key18": "3BdWCuoRXDpybkK2C4o1cq7QDo8Vf7J59NqjwW8KP2MS2Spu9jW8cDczYRiJuaps5qeafmsHuzkGTdxRpJ3wKpib",
  "key19": "2nJaqriHWSqcKQ49tdfMskSwFNMGT4D5feiM2cbixvWDSi21L25Aja51nTNq5dNDTyBWySKguWD5e8jcmi5KCaHt",
  "key20": "2c4NeJSf75V3vkxtroJM3FxhPYsV5wWN78KXUg3D7At7PN5x1aVMZKStQanC7GLMLrwjaXquFcvKTxDPqxdVi3JT",
  "key21": "5eyajfucw2px73k2u7FKtetNv1i5qvUMe2bWiNR6GSAUhwFZPtyskDR6EH9LUZqXqCiaAq4NxPEGScHqvYvpMCLV",
  "key22": "57NhYZMvqsnsMrNe29d5yzs5UmfJoxbJgSnoQQx6zknGkA5yWmtmceff8BntGLfCJ24Xwcs8cw4BAVjv9KMGxu7h",
  "key23": "tBAdnE6YCrKP1Emnh3ShooDiZonZtRTRpvYfh3oYGwsgJX82tzqtPKF69jUuiEMgBXyZXdwMwaaZokjj559Z52H",
  "key24": "5xQDGVwUHyd5xRbY5tRWcQQyJnWz47FCccQ7QnfxAVQMeEUqEMTVRS9A7qenHJKNoEkGXkEsT3gfHxjpo322DwSb",
  "key25": "5eb7QhoScPPAAsg3eAKmtAv9iUbwv5BcpUyLgMdUJJ2SwXj6vCprGhJRgziGmssNJUHWZegoKnwSpcpyu6qkmzkQ",
  "key26": "2XcnbFeECrRumkxZtxzdWUgtMV8RNm1cgNRhhCkxiRuAG7GyPQRMH2zqWw6BZrYFNH1sL9xguxyMCoTgaCjgeFwV",
  "key27": "4Bw9xeMcRnqGK5nu6z1Uxi2Pnvg3opKy5kZwsu8FSUgVmv2ntLwH21DVDcczxcMdycq5t4FotUGX4UHJj4of1wnt",
  "key28": "3JkbDDMwNVddzhTTJcmKdE4CkoVuTgZgbw84EY4GJ7qSJievnTq7cdFoJuip6HAz3zm1GuDxhLvJ9iTWb6Pz2Ffh",
  "key29": "4CdPf4txYD5CD6NB5FrmeN4qLPaP4fEXG6FXDwCHQq3mB6jMGY79jPa2HXxg1NQbhzMsi94cJPCY3nPiBMwZGxyG",
  "key30": "5ZsVspReWTW55eH4sHhoWm5TZyB8msyp6so7q9cRioYUsbzAuZwFNKVfMyWrfw3PtGr5dvxSb7EMTFeJbSDJ76Pn",
  "key31": "52FGyS8vejT72DC2ngCRkLmWYvRkteUSBtWgtnTj1vPjUyFayaEYpi6Qpw5fLfBEfkCxj95QwGDd8hAs1R2SWXqw",
  "key32": "5F4eZZz65KdmU9vo5sw5ar5ASY6RDuqBrzUKBxzW2sDsZEysFQcjw8W6rb6qKEKYGBrJRADxN7fVJrEcBdHMVg4Q",
  "key33": "G8Nd2hUoLwyqyud6sc1Ro3XXkSG9WLY3yEx1Rpyw7CARn7VFDBbHX2vpRZjKabtqdA8yUk6DLE9fioFLb7Kg9qa",
  "key34": "3HEKgBTUZeMjvZ6hG7YzrBQH3SvoTqgZoyRZoveESdRytmiqFar2fWdCivC89eWtnC78sdDywGdaqqW5TBzvHncm",
  "key35": "5m8ChF9VzYcXCRu1GWbESf3ExriBrZvB7eLvYrVnpXgs7u1aaHMMkzid3CXYRBBV9hdUq1DMARbQ6epERngJUWJU",
  "key36": "4MQtdmTtiSPQ4gA5Zto1TMZmF4i9wktpXy8M9WUmcDDP7eWDKrqTGoFJP7pgnE39JyxjnchbF3gGogAGa27Gd6mj",
  "key37": "55K1g6qawcY8CgFqCe5V4TE3qZZ7mJDKMpjEDQb8xadzP5tnCkbfJmwseAJyU7vni6B9Pq1x3QqwJChXJ4YSEh6i",
  "key38": "7XBT3KEvsBstBUAJkxXnNSjyJ6njf6xavN4vPkCbwLbJPr4gjWdc2ahszH4jxZDqx23zXCYnskJP9gRswnzA7Pf",
  "key39": "5ja8aMfneJ29Q8c65Ws8RFGjhsykJX1y6XUKvPemhx1pExtKFqVyaH6AzQCkZbCv7anr7ogbfPq8CfxDC7WRQKwM"
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
