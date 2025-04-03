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
    "B2wUPBLhGGdLtdvcGaFrkyqBzdpcsYWyu4fmytcyuVcD8huenAxmxWL4VWR15W9k6pRQgRWKoL6sgdEEggzHmKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cdQvpNiabiotoZK3Wsf8N3X1X9hsMkjrGYvyhTp12t6nFrB6K4PdeHyASkVkqSHSRL3CTJbr7XxUn1jWdjQooiS",
  "key1": "3drWWuhKCfXKeZeTiWdJPRRvEF5P5ZXr5Y2rEWkKgehUUcbRNPPkqU24hQXnhtuXHyrpRSXvNWH4st7xzd6sPFY6",
  "key2": "59E93bqu5P4eNCk3qE2iYHcJVDKCtEpbbk7ZjqMVfBhB2pmUyfkCGm54SkZgVTitz8B6wQdNDeYWbje3C4m19XGK",
  "key3": "Jc5QcfthR3Xst89nk2Gzza4deWsNCpxTKCXXxTRY2CtuLJjhQMagLAAAQQ72hCCkuEArsXy7VQZJowXhgidN7d5",
  "key4": "5aLsmrY5VhNwfipx1SpMjdYihgKz4HpZy3RxkkPhgccM6dztztvWpLJM1Q4wddcVpqJEkoJ2Mb8pZMYTKz8yFH6h",
  "key5": "5S4ksuoxPoFUAgXjo3ZbmdkLo8eUexCkA1q9B5VHM1reoPXEUK7FH71BAomGHHYvHbTjwz5h1F4uFxq4ffk2EZcu",
  "key6": "4KDYYjQB2B61nyqWsMxoTztrASphXfuxUHtSfBBfUdDHYGvvi4MBDexCY5EHDfJfyRSM6tof1wj4SAHSJmFVZhGX",
  "key7": "4Lwyeombx4HbC3nMSaLrRgmjW2t2yh6SPiTj7B4vyHhNtcUvARo34PsCusbZQjkTXTgKN4N3Sat5y6aJimgoH7Z6",
  "key8": "5TCXi4ahL4kEJSdbZ6LARnoaWFntdWkagoEuAHhBUxAnCVY4VaKVEYB3PRVZLPyvcs1XPQKHWvsjTtPyoc6Xp6TR",
  "key9": "6581CgfvqD1c5ArJ8H2Dsb65UV7H3ULUAwwoh5SWQnJnqXpYBDE27UU5T2Xn1yTYec9w9Q9BdA34beYzpsAKCqcB",
  "key10": "4hBoRwwuRxpGYChxG1bpQ3fDzVSphgFcP2onaQ5NTfuHSFMxc7kmHiKKmEfocNad2s5RNExsVrkP1xYVi1uvU1f8",
  "key11": "5KPMEAexNk3vu4mWtuWZEYWmqcMDMk3PNQ5UdQ2LCnWzH1PxCnCkzjk7epM11eL9GNPZbvwsaWwrEJqjpjwddxr9",
  "key12": "WfVXk9pq11LoHYfSB8DdNrJeDUyNwqS6k831EsecE3FGLU9kUHqrsnXXSs9fDXGuL2YF39QcAsLzQqr1j9DiLNN",
  "key13": "2nduHP37iDBbpFWeAiCRM97JnfoZL28RBoemZTeYGPt8qnHcfuGXNNGt7xEseG25w7axYikEF6c3RGpyfg45FXjz",
  "key14": "611gCDfjLBJYPuL4rJxJ7XvuQNySvJtu3qXVeLd1s3Ssjr1erbpz8HyzGFVHzGyhyrrndQsY764mHNxxb59htUhE",
  "key15": "2L3ziLWn4AGPcEcf61N3rqJ7HELcjqc8jR1vtu12MfDwJr4KsLZNUPQGtmc1jZoNqrq6469PuHTe2D9CTmnrbHqz",
  "key16": "4fJMuK9KCvpXpaZijTbBrADwX92L4AFabAeirRNQqKt2vXHbHZN5aiFSfRePM4mKyfvPmvRmprxLjrQtsoYHJRAE",
  "key17": "3cmPxVvKgeLxmdgneND66KyYeKfyM2q4H186WVtdXJWJs1MZC8KwML6EfUNMdQwCYJAj6F87qwS6FyqwCZ84T2yV",
  "key18": "5cHQDwrgEhqyBQuUfuRs7uZx86rgfnzWitLrPeLgaqkJfP1zogjFWzLpnPX1WJ6RGfD9JS6ZJEVu1KQpG4gmZHDU",
  "key19": "5GJMNzhNfm9rACc43KdQFCLVMpFGMemRs35FNqsU4pQ2dVpNxmDW3NwX2KhvhFAe9eR4gSXFKAC3EboYNFuVs6x",
  "key20": "iijwSRzHWo6Yt5XYeC3YqZeE1iuYFcvbHBZX1GazSDt1VXbRN8BWT9ciRXQ2C82CY37HnuB2CVRNtjcocfNF3YQ",
  "key21": "4Y9wT4DXu8HTZZyibRpKR1L5pdu7N52chGW3wzDKKkwS7wV9vC6DTVqfbgQDm43wp9gWFPrw8vF6gq4Z61c26e6F",
  "key22": "3wZKz8Nk6TV5Kyko6c3py3yxbABV8b1uHjjGG7vLPpdfwBa9TpxcE61Sm12WY5sBYty5Zy6xxq6J2ehJNJuY3wws",
  "key23": "3iKPnQdE4g73D3cqx6t4uUcBLRQRamKfQ5K35WVV653LC1qZL3eJ8uCDuE2PrhithaDp3GBPjdx1kQk3rLKAUa3",
  "key24": "65Wbx89sPSkeKc4GLm3KY3ijN6uYeHde9pkohvPyZN9sDe5cVPktV42HVYsmCFjLctJjbZ5tmMYaCU3Zt6MfE8uQ",
  "key25": "55gwLtUVrUqqCVwHNjBV2y9r6TZo7jmtfJiMkxpkJmdhNXFrsAXzFLkTGHLn5ZGYpiScJ5oPBBdE3TepauF9MtxY",
  "key26": "4ACZGPHR1vN24y9YWpRypzGzaPHi63LW2XyVmbhpAqfafyFaqFxG9zbG4pFV5JLKzZ3wWf7T9pYXDs4whDBSpEjZ",
  "key27": "ogRiMRc5UDgoiJYXbo9EPXCAMTeQY3Mqu7uaVbPp3xwdwD8t8QYDjrsvUL4fMmqmHJZY4KvXfSE3uh3sjFkVwBr",
  "key28": "43FMfv9VBJ3LSdVVD1hyzYr9yJkduRftaQBuMraC2WXRP23piQsuCbeiMUpzda32XQhe81fxAzDsRioykAruipP9",
  "key29": "59vP89JU3znP1W1ohYCmVN9bFSXL1SLt2jAjFSnrZaaKicgqJEUoUzLPgp8mhAPAPMDxB8zWvMSU5gx6cj9i8gLu",
  "key30": "56NFS4YMxaonRHisCn7oKHZ7WScodwqHEtoKEcDfcj6RaZShWktmM4mNaTbc8GpSh2W2CJZ93WD1TwSy1NF92zAT",
  "key31": "5t1D7589AKDgA6RceuDg1nzKQrAhkWGo6733GDgjUssCyov2sGZyebdyD3Qovo1uhyShjS9Pk2hXQjjCHwZcHp2A",
  "key32": "2zuq3TiVgAzmGSgp72ak8gtsSBcnx36psMsQjoRSjchrv4VRye9HVqDxAFiadwgz5euqyAK66whTsv6hgqSnvWzc",
  "key33": "39SZRC7XZ9i6fU9Z3DQ4s81zViaLngmyXATAtRfRbUkxJH7B1EtC6oXg8oAQMHULJvVQwMyhWpFRQNcCHpYCpwh7",
  "key34": "5CeFFKSQTfRvgWpdetawb8anpKmNfjT4nVQt7V3V9pGMtZ8LUtApppev9HNHgZwdoR8ADNxzvN3DeuXPrtpRmsHk",
  "key35": "TrMYg2DqYv7X9U35qciu2VUKG9zWmJ3yR3B5dpn33HnSk7MwUMmPK5iyZtoppWjZr4p4ijqoVVMrmjG5eZ2AErB",
  "key36": "58eByupXbftpGmbdfsjRNvRxx1zaFRTaGqCbn8zpJciMHenp5UwAJHVMYd2G3FqaBnVMaBeJspmPzYg8rnnf5hMt",
  "key37": "4pSPZG2XuRBgBZ9eqbghJ8NoqX6uPJuzjGGMrBL4qkGDTDvaAkFNiGe24KDYbjSSdGVJX8nDk2fkhQpDZXc4T6t7",
  "key38": "45gQPwVYwSgN8FJyu7SkruZP1P2ZJWtL8P66Kcw3LZSzZbqQyGAHMcfrMbdstDBG7fTybUSyVXwvzpLujqTKGMyr"
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
