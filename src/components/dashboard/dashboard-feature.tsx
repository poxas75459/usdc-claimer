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
    "oRAAaa5bVagxKboYbCVbywmSXTxx6aQR8qzdTuY5x5F9trmdfdPPuawkCWYDKGcDQczMmo2f6Xbs79kSGmyARG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d8EwkaQK8MKyjan4Jr8dSjuaJj43ZpCCnQVJzL7jd1sxyZcGhUDdxymL75bDdJ2FebMpwaYAdwQ3BaZ7hmHbBsg",
  "key1": "4MDChecjLLNSdeDKdKbcHNfNEAL7xdTvFvcJjAQAdjajT1UK1txTS6S3bsYJUaaHbSwVf3Ryu3QikikkE5ZhYoE6",
  "key2": "5kzbc4gTdnhNqV3KhV248KhqgswXyjHEE6H3pNf86YRa4EYEBzdctuvvPCVvYuMXAB4ru68w5JBkVtsb1vJ1PXDc",
  "key3": "pwXaKUbZFXWx3KQLdTDBCehPAUUpWwqh8HEGi74bqS79MuQQXT3QTLSEbUDq31hn4LsuxoArz24L2S3KWZTto7Z",
  "key4": "567mSwePFqEKHwpCF4ecWVjCAD1iZniK338bGsVD5yJD6UcCmpj2dda4WnTTiwgZ3BtNmSgV1fSEcT5VwjwavtKZ",
  "key5": "51UhSUktRDmK6hWHDm89JxdidaceyCtFeKcHE3ujsJubDGyAPqg22bBYsrcHZUDm1cxEWkuan6X5S17jKedyCx4m",
  "key6": "5yft8Kg6XKR5U6BAochKnB6D3uH7ktCASorkuu9ra1CHLu1AaMZGbiBFmuDytgzdPQuyrEq6ZNqoENPjXqLdonn7",
  "key7": "5rbHSBn998T9LTezKvSQwgsgFRDuXbRD9C9299eCS5i8ZoZtkBoBkE8Gvct24vprYSRBiFyQpQdbqiE9NKAGscb6",
  "key8": "2k46eULs5bpCe5Yo75m1f2iJwkfaJnCgAHHhwJFWv6HE7ad5Xurr1AW8r7xFXrLbEhPc64AwUTybEUxpNT7gvNW",
  "key9": "TxRYHKr8GSYe6HVeiwaoUuQMN2Ysp3EWgjqTpVXJN54ixaqFceb7VDgLKwH9H4ty3rbsqXrBeyuYWGDse6WDJHb",
  "key10": "4Zh7PA6m1mKP5YWCqCJGw26bEdm2NnzQUGQuSpW9uxEqkgAdMXx43bG52EjYQ4rnKSGyVv5WLT7LrTFvb77BCgGi",
  "key11": "2U2zeBJ9DoBdHivvY2w1QTp1RC8jPDdYmStvkvx1LMEgLqajyWFY5jYhSWAoSi9oV7gRdYnHUjnfWpzoaYNTrNtp",
  "key12": "G6wqrbJ1QVJSuB5YLK7jyjjvwvWC7ciBWhuGTZFDbqLAWqkVHBZzqqdaCuq3LhcrSWWMrkV82Bnxcx49QdLcDjN",
  "key13": "2GQSMpZs86yVeye5EJwVvv8CZvC74NkaaWfkJdWYZzbC5NBzeu8m7R1oLh5CHrp49g9cYFvnNVwuTvP3V4u4ngN4",
  "key14": "5h71LSgJ2UYqRqqfybGhG6oRJdaUQbrFwSLFfxxBFZCfQPjq3EUUV7meLEvqwKZ77LmWf62Bn6twr65SjHcUdWqT",
  "key15": "65nxYBJRBWH1oPDgEHcnHtd9sxLaUNo5FwKFmtjsBiBHHZydJB6HVWwtueib19QpALm26XEqAJd61WwczpXWsVNo",
  "key16": "3du7GpmKjY8zzQMP8NKUbA6jgi9pqxge3b61mLrdDyYtcA4nZi4AovBP4wQuP8457CYow2ERUQhBdJVjzq3314YF",
  "key17": "2FhguY6D9GeUPU52DzfdLqabaVpTZHmcyugdxBCJf94e91uFJppHpA5bVuN9RNxm8AoCeBx4QK8kXgdrjf7VaiyJ",
  "key18": "2xZHVtK9xj7H7J9XTxHmGBwBR4gBjoLWjRQH7kARgjPs9U4QCrN27tQXYJw2meiUnRdGzVBvT8HgVrMdzEbJHWTE",
  "key19": "5Dp4aRxx56Tn95ZPwRacTnWv1DNcgaceHFVDTrYKuhZtyvd2iPsQmoe8Z4eawVPh6JmweQDTqLai9zoxD3V7MrKq",
  "key20": "3ChTLnZaYjxeeSZRRFLRWrmyikrsv1YRhqmCeBhsrcnjziPdAGw8Wuk18VKTbMdBHdknKYwc7qPtEryyxyNroHA4",
  "key21": "gomrqDNu2jrJ7QTbHfXnTzxnVVtrH9PMMNBy7tAdognsf2sYCZ6hsgc37Xg8gf8d2bdKrZZ2hWyPCBq3owWj4WG",
  "key22": "4KcSmcZYQ1wdoNw62MLYsXjCGfc6d5DCfNBRt2FdU9GU7D7qyeD5hQzreY7hG6TkBBpMAyiYeLotN2NSQJ2aCjTZ",
  "key23": "5bMBSP5euXmFDEKYKSQiA8Skhhrf2fZPU3U5NEsGSeMquZJ13WfXpZ873i9yL1aEHb8DK3H8D9mvWxEMaZ1GVmm3",
  "key24": "5tqL5qxoHDPkkYMVTR8aXH46C8b75QdsnNMfKhBxFm6Wsb5trytjSPmjVAwubzZEm1nkS4ymyvVPKHDYXfsurwof",
  "key25": "4UqDRBUVVkbFAskntn7n5fsGnnvV7UhYMZfbtK9e91fPkdzGBoGnSzkeMh8oZbRJtB333yrKjJBr5tkUB183WQ12",
  "key26": "5U8vLNh1EMnoJGaxqhJKHsZyHaBWNqk9gKMyYqfNBBjgNWMEgYM8c9mQBmQdmQRputZDzU2ZJmkutnYQuLCdxvFK",
  "key27": "22gqXR3g7B8sKZ6AFRrTgftZDFHEvCuqF6eMn6Uyrb2xLZzUb2a34Dmbfc8DcJ5RwaYuSLuypUQSN4dAkAmUUFcH",
  "key28": "2YteTUro5AEbhA5tu1KS3Tviu3g5PHAeFQLjXvwkfaND8XmxBTE4grAY3SBtahvmhJBa56JGXjThZcRir3cBdp5N",
  "key29": "4JemP3Nswp24MhC6QnWkxK6yjiz4eMkEPuPesaW8ka1xZW69KL58q6FBH5q1wstiPxNUzMJzFWpMjuPHBJaNpqaA",
  "key30": "3ofbW2qjZzmaEGGsYyxvqWZ3JYdZBLmPjPLBnNGQ5hew7pnpBT3deGzzaCe1YvxuaCtY8k53pkCPgGrLvMGNY3kY"
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
