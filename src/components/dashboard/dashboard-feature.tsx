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
    "5s6R4WaCZjXoC3UbBqUbSeoWSMwrpKjNhG7YmWREvD9E1Et2TMrVN75ojzFoKqHNNGaNFMpDJkQ4dPFHFAvmknfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aJW2gSirEMapCisVkpdimqDedWrGW25zLPd9yBaSvaYNYAmDSVLBNpve84hWgs48bSHHGd8jqGoa5iG5LiHMDyB",
  "key1": "YzKDaTPa17931JqZveZjX8tb2pCsiDHF9qXQU1HPBajm8XpRZL8Eyq2s9UdJLzjE7dMYk9AcAzHnUcycqgmpPAw",
  "key2": "2tmFYyHuwUqtp3n65t1xksz2BVHzkcUC7wpdXTzYw4ZztBSGFDPHpKQdxXz1ES763joSJXZkY2dNDUwAeRNSFGZo",
  "key3": "5REWK6AefbihvTCNU2qvH2xuetCozhdy6zZGoNDkacLjb682pNYZCbjUWBba6mg5io5Gw5pFcnDAUjLPxiVHSry2",
  "key4": "3AfPSBs41mebsFzMgovsUmj1vJJN2tEdTdRYaCzdcY8E2NpGQjN8fxL8xXsvLPXECU52LveUz2rrxWAAh3M4Yh7q",
  "key5": "4RwXVjc5XN4JNgCC8bp5nMHGynBsV54DVZ7Lcc8mPVgeHAdaBKYta3sfwzqjxqtD6NjdebVwesbNVXXqge1yLGb5",
  "key6": "2CuQDzbvESmWakjV4zi9ixTosB89uf7tas6XkdwVBumH3ienYx1Z9cKEkgPuDLCdLtK2okYR9ZV4K7UQrJmyCHCp",
  "key7": "JjQofhREJPCKt6TeyDYCUkx9sPLsQi5Lacco67qApGZQdu68CFnhv7ZBrZNg45tWfLF6KZqDzPiKpyRKtS6dz3Q",
  "key8": "HtMzwvVRk4UBfWTWi7HFLaJWT9x58D122nD9qtvmunbJPTLjjL4Fv7UZVXmgKJJoHEcCmXLSQE3UKm3UgpH4nJn",
  "key9": "3nUvqntihc6t5Xzj2t42emXaWTfCgistztnuReB82s1DDJnRTWsd8SF6a7NN16V36eWkbo3vRR5oAGD9LZpbbMKg",
  "key10": "48ZzZBiezkp1bPWYmDVq8iB1DAqBQmP7n3fADwwYjWgbFBNct1C6vfEkWVyV5MLtMsfh1XUvgaBwWfSDpWsZMxG7",
  "key11": "4Ai3xTbcQfE3rffrc5D4F3nwo4y4hA63hYGD9niDVrFtrTjjs3hFMEbFvoUomKLAqdcKTGthMKUfYQQJiUb8rKmE",
  "key12": "64MiTpZYfLW7FTJWfDk8dP4Wzae3htKtL7SFWr1oScjJEaB4XBZkiKosU3HK78ZRtmuH4bzAK2HC9k789qiqH8VA",
  "key13": "4511yyipijVhqGpuhYaDaXnRDJsWuH6p4CkA1cpCnVvmSjgrwFzLkrhb36HHjeiSMUYzS5gymRUDzhrAWcJfHm1k",
  "key14": "2fa4cS6AiCqU7DEPnyN4ZBnp9UWjx1QH1idWr6S3mLGLqNinFt35B8Ns3PyVB4FTQ83ECqzqTiwR86BTjMHDv159",
  "key15": "3qLc9PdpW49UFaXJbv1Msn5p1AjpTwBVqwdfDmdkKmTMtpqmWGuR9FJpEUYoEys63ZW1MS6JLR8SCrFZ9p2mpC48",
  "key16": "5P5qTgABAciZb8Wt5HSFVnK7PGL3MboQQVM9P2afSdxS6L5ZVBsQC36mCEBxK1Dufkub94skDRQ9e69mpM5hgCfT",
  "key17": "4c4o4iTFGmy6fqKzWd9KwJ92hQKyLs5X1bxfZ5AXNaRrKBdHcT7165rjNGqfB74EtmiG4ccB81KjGgmWUjDrckiU",
  "key18": "63goWdYJZVpzd4MaYgZTphUiBa1LxkNzADVUsirMhpXYvAXP4tyEH3mBboKdbPtVvnZHam9A8Q9V1f54zxS2VtMh",
  "key19": "4EFpRUf26JABLnkuzBncKbEzXkHfLH3CnuEFTxLQ4whfAABUVay4HSBLmANKh8coamGp3x4m1zedGxB2GTbNqoyF",
  "key20": "25j2xsgSktMg5Uq5TEDXgVabpAvsehb3rt8GxR2Khnvk8r1ciRqrN8J6grFu8xzQjE9FxGCgFvEVnm3hbJav9D99",
  "key21": "dBxWvgXV85Efh6DHLu7J4BcVToPn1FHgkwd2A1BnQzdtSUZyFhdq6ibxpv6NCHqc7oHitBSuZxffsCcc1mKX5Bh",
  "key22": "54x7JHNRdidzS2Ywv7G8izMJQKNvDvnT242H3xyFxUAGuwHNaiP8fJ89CS5v5jJ9UHcsiAzbDjjz9zz24aXZitA9",
  "key23": "cScyk3pxYCUpHSv7Sc46UMhzmJ1ApyMF2mN4GSXufVVTQg9fEAwi6piKFQBaAkrYF32kyxo5d72xCMKVk5HFGie",
  "key24": "23rzshHTWYt9ehsbNq7vVVBe2DQjGyv3SDVaD8jGLNsZbCuAKYQXguH4oQeLDc34mFfsjf32BG1aFgbUAuLgGKNK",
  "key25": "5TRXQjBXX3pryd2L6MC7ebJtybwF4ngHGf27wgjLveP7W4QVA6FPor2XEVWPyXuFA88rqWBVvkSmdEWWGyosENMu",
  "key26": "2VpPG73ebEDds4M2z5uMbpUW3Bt5gDt7v21g5aFyUM3UvtQEdHZ1s29V1SShRWVPvxtqtKEAwWTwkfYBGMxeSEoy",
  "key27": "2UCBPV8JEfoe9RkYQKQacrdp6Aik6SFFi17zqust1ZMa5ChJXQwKzEQgMByDatuqbdSx3Svaxq3q27Ji728UdE23",
  "key28": "3Hrafuoevt6it3RSecNxJzhW6RFbDoNBh8ojtmYgdDnvxQPxSFM9nn9jMgLEe8H2pXhBfdQZbmfN93oS1qbXroik",
  "key29": "4cBMVjzEko2pirK7k5ZUPLFMTbnZZGmSe9d9r71ykqkQuiZrGE47YhQUU74CcQswugUykCYMCywwv11LFy89nqd6",
  "key30": "32P9a9TB2JVJCpF4U2JtB3mxDFBeUJ3mP11ZkzSrgrrW25vnr6t6J9tnahu2ijbczA1EAjttZfVSNQoXuMjGN82C",
  "key31": "668wmsHGhgTihsYFARPBAQjk1J7puPvGQj7aHcmrdSeHBpKNhyuAscjHKsqeovRz88AAMZEM4ebtbj73avfeqD79",
  "key32": "4FtrzM7X5QPMaPtDSYCEpUeh9xLr9BdUzwQx9uH1PgfeXqQsFFT9S7ddKAhoLTeVTq7fdqDFaVJeUZV21Doqguuv",
  "key33": "61gUEwreD88R5xjHMSrCHEUzWShZWZdfGCKjV3SgXDcXPiPYvfaHdqwYyxGXhJ8MXi3EWkuDDGGD6or5cfNAgzcz",
  "key34": "3LhzNyiwRvxCXjy2XB4A5vPLJza9E5SqqABTZp125zYjSbVg3XhQ61iYNKeNPomsG9HbHjqwH4i1jKtTJtmXDDX4",
  "key35": "5ifg53XaVvBunCaKviNweudJ12HJYsHR8w5QVKgMDrTeTTumcwpPEbb6hm9xXzzZUcLj7WvZbQjL6b2G47PCj1Dj",
  "key36": "4gbes7fo5fR3E1SgoWHBKRErEtJamntGyMT35RFRskbnfGwjg212QNXjDE118f12FfzUbNPTfSpV1jNTXm3fNMhu",
  "key37": "4QP61NnT2p8cbRHxGj72qYm8BrpbZqZ8RhzdEEGzfbwoX7ycYDgDo5G1HHxDb5K7wQ2UyjW6BcZBP9kZG1uEbcUv",
  "key38": "66vf53AukEcZAcBdzsFcQSTKJHbVMNwUnwY9qgteVcWo9b86zTDCyjaY6j7cHvDs8xUqXSNxjW8fbmdeCpqnjwQ5",
  "key39": "5VPTBSXcUV7DFH4xRKoCqT2Wi2JDrLtiEXXRmBxTyUm5J1R14E6HaVw62NnWUxnpyv7bVU7jSUMQYkRmuWyMtFz4",
  "key40": "5cfmtNJ8AjV4WnpjjXd9KyfWX2sNNj5Y94c5bWLbTcKnGNz2DqawQytTKGFiKxBFMfSmvb7FyWqPzDASLP5L2xsc",
  "key41": "5osTeRQqCRPjrGBab3SgL2zgicEmyc4PixCiCxNWm6bwix6JyJUBRB63bs2jfTQt7ztcVWUiXz7CxW43vPcLFAyT"
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
