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
    "3VgRKBUyeV5aGj9NDpwhhYGXyKNQDFcQHQgnYXiYfG9gUHNdhY4ScFT1GZ2a9UqoN5B8F5iufACaFLzQ4c6aaNSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oAYKhe8AtW7LFNWnb9zJf1jpFbJnCGgUvS6zmVSN1wepRacPqzkojpnPsUG3hQmCN3zqg4MoBeWUBFn6hLk1Ftf",
  "key1": "tBDPRt6GSR6Bkdt1i6yuy3ovxz5qXhTj2iiLCmHNdBjT784EMfaEZuDBjaojtCFi1XebkFydhdNQNYjBatU6pDV",
  "key2": "3upy1ch2oDEVhZdnd8E69oS2r8up7DtxfKiewdAaDr6hP3TtYztZKgvvEYWurxqE3sjJgxLV9a66vh1Rsif8sETF",
  "key3": "2kx35d4TCfyptSh9z4LneekDoCAMMVsCSHSgmohf6FjRkzPPYngqbBDNcDD339M9Up8exZPn77CL9rESfTbR7S7j",
  "key4": "62FauB9e59PDJBaBZCJdsWwAWS5NracjjdeePFFsaY94w9kSvgVeSFXEkDLjLTdNyHqNkVjjuhn9Dr8VyB8ZgnDA",
  "key5": "2fDhjmQbCH8QSXDhbWVk9PNUhRWpwsSkPoe8yd9qDvxYH2KqFriMtYLYSz6y98YPtuRhs4xykYBm7NsL1FYmuQcC",
  "key6": "23AVjx5YaUKEbAVn49XkjVGBRj3ZRa8TqhWwk9uGoeosorwvhnxC5JjqPQJQS4mZe8x2vbb1iFbZNtBVrFytPtcA",
  "key7": "3ofAdDGgPAEfFcMEr8AuFoqLmPQQ7hMHrBWbDpU6R6F91wbmmCsvMMiqwbQLqpmLmJjnW4Sp1y2RbWZbf4PwUn2U",
  "key8": "4yG1Ep7xk86Qg9vSpfRsUptoPzF6vJyEeFUXeY3PyCgnChXrJSVHJdMsK8ShbiZqHnbW8iFq6aWNWpP7yJ6uA6BY",
  "key9": "5hRVBJ7qQX8zjAwnB6TubD22NhHbL5V5NnzjvwfyfYGesU4CuFAemAp1FR6t4EtUgRyD87BHYamKWbfJobSTJycm",
  "key10": "5CLhPUkbVYvmhHiVtr7uKfsBPAHNguBpq24NzuKYqzhy9RwRaMPDTq48rz55QwxjhM5A86FdaZ5fGm9YjpebCNSV",
  "key11": "2hDB9Mw2476SUhGDT9iLYsJer76mKrZTezmm1z9zbH2Xkq1cMRPbJnTcXQQgyroUQ4CAmcGb8oJoCpfFvNz34gTd",
  "key12": "Yn6tiewhCY4piNrgUrcVHQZkP6JL4uuhw9T4Ryhnt5RX1UcMMt1GjMufdvG6hMAThkCkVxaYSPNbhrSgCbw5JrV",
  "key13": "GsUkD84WvHYT2SiLDXGsPPxPVBRBTruQZfBz4pnX59cMeLxVsfswQ21RjrPyCSidnZJ3FkVxawKAT64zkd2dLSc",
  "key14": "2ant1uesVX9poF988VJLWE3zn5RCjH6ytfht5p4v2Ca13Hp1Qu1uKNZTHpZ8Qjuzpfbgb2LCL1GjBHneBx2XMgAQ",
  "key15": "4cH75pjRatojtoNZVyXTnB5xAu34yRCSNQeKaNNtdMX2EryXCSdkBqaeVoUCGTD6TSh2WKcGp798UQJ94LHTkjcd",
  "key16": "5ZDXBVGv2cN2p535inYEuJJkGSDveuga8e1NmCPZBPdZmaqkyXp7ytdAcpmXK6nxRYnxRA3Eb9ZGjLQUim3tQrwh",
  "key17": "4Xfj7SLuT29G8B4xsbrBm1Gzqav9cQRwhJbdRD8BpEL4a7eJmRYP7YR3X8YTHBqBXNACB8hjccq1jyxANx62HcYd",
  "key18": "2fz9GGcm68rXXMCYNE3mPAL8YFv248fVttZwxJUUXRScqgGTGKd4DzyXrm2ba1p2dgsgWuHdXeA3VAi6RUgxuN6Q",
  "key19": "4PcGAhvboaNjYiXurqJWpq5MdY5HbZ9AbHrbbuBa5C4Vn8PguCLonUvrnoahVVo9v9fNMzTsdcxLY7tqX4WiNR6x",
  "key20": "3QSR7hVYMsdmi7qo69kfW7Zqm4R4e23FLw39k7D8qRWpLNug6XCmhky1Y5CjFo6fp13SrTsR6ZtWaUuuZHBfVdhi",
  "key21": "31At7FXbmYBUvhgiXKKxb9L6gfiYFRJxvSysgBgqxcCRgH5DJ4Dfn9fmLCz4ZrdtwNQZPaGqsAqzr4yQSPPfCfJ2",
  "key22": "2T7k1UVjvXJKmHa3zF9gvy7KQ88zZUWPp8y5J96wx5NN1x8MaLBACZBG23TGqUrUNLd2kiLydVCPFpnubxL3unH5",
  "key23": "v4LN12d4XHx61CPDz5q1ZXdiWddzduGy6CCraV7VEAh1vXam8d7eRLoYS5eEAMdqm8ZSNieLP2iTZfEcouCD8KS",
  "key24": "2vmJ5RXysxTPDyeq8VkcbuJzJGnC6tscG7PmdnS157bq46rKDG5TEQoD5Rt8DgdtRuiJbeosU5dgha8C2E8262ZV",
  "key25": "4i65WxoA6dUxqRqnWyiQhRbK7QdxLtMJCW5vXhT4ZMNoNWs16491AG2dCgcoRBWJ3EsA3iQPG47mPnCd4dmme5pj",
  "key26": "49QpJW1oxGkSCAei42VgSkKZTvbQmiYeZ7JftsBr4jVhtTyLTrdcNcURGDvCLseWmzvYoqYJb2tUbHUW7ERi3Vqc"
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
