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
    "5ZkTtuGsPduE8DPCcbXbqqSjHEVA7q8mtT3FX2cfGfbfeiEwHtYBqa2n4HaMmBRhAm35qAQhZDERP8Qeuvp96wwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23XytTid4WeC77WP7cHn4cat31ZbUG8WyYLQCpLWeVjATYriLbn4N8H9KgyKqnJGv9riwwUxBrNvSh4A6t8PeDRz",
  "key1": "25DP1C7uMMk952aftNpGRXBPJV5QrhZjrPpkU1NnXo5VLLJsVSGnAqHzEgqtXZHLY48LXVh2rHA3qGZCoPWkK7dw",
  "key2": "2RQ9LruSbQtFssDaRY1cNLbm1JTbNqcGWyyN4fr5sj5UnJChVECWhcauPrjk3n8xjakAWP5nWVCxHHxhbZoNv8p1",
  "key3": "4YZysgvKKVHhQkGyhw2btCpje2nkyRMsaR41CXuseP3tFmwuMQjxCur5hAM9jc5TFBGyx3ztQ8aZ9fMH6ZrDUHqY",
  "key4": "3WReRZdpShWFwmcTMS6YNUL8EzWBYKLEuCSXcW6DDApRJw7LMiYeK3rND5G3a4pUZ6r21JRQpjD6T9xi7FaanA9j",
  "key5": "5ko6uXYa97cc6MvizsF1NySYX62JkU9ikXwes9x6C4TP94ZTuT33y5sKe5EJjGW96q4haL7Cd9q2i3HiA4ZvyHyY",
  "key6": "3TLzTxKfqPSZSJRWT1ENvxi1YJJh5RpetQiGjXFJyTDUKUJHG6eXs2mGdH4YjBy6tqPNVpeyLffGpfLjcxFsg24M",
  "key7": "N4uvfPF12MJ4mpRCXbYCBV6WKpwxSxADmVVx4DMWdzPrNzb6LD8M2LKgGGos9JmDVEox2Fqux8LdcCs3nxBGjoE",
  "key8": "42BkKo2U4RhgS3sdtbPjGEu6f8f8ihQgVhxc2ahuzZ3N21t9uPWP2qav2mM8xQEmGXXJQwdenEaZkq64qr1SF3n5",
  "key9": "4vhoyPWjEzXo2Z2nmH76DREnS3dH8qF2E1zkCPxBXyk2csT4W2CXpzBZrj8VmPTMXRj1mqqjSY5PVqEhp1fg5XDW",
  "key10": "2VvbkJ3jXpZ4CFAReJVp1kK21zZuCxA63Xx43epKqWvd6kn2PEBVne9zjvPPurfjFzJZeMEV5xJo5cMrGBCzpUEc",
  "key11": "tiQDTnGdanXvieWDytvSGcEJMv2WnRSqTgSpxK9igV3sRXLxYZLPYEX1mR6LsEJYrWZKDccWXdxmtvm2qXwgpZw",
  "key12": "4znqMLU7Tj5jKaTike4HMPKHeMnHEeMAG13kd7GXUGhgEcDyvxdNoyEE6hGXmfc7kLaVYt5BCeVjhyZ9UDWdwwns",
  "key13": "5vzrCNe9WbtWH7BimyLuiVcVvYrWr8sarFr2JHG4ELSRQDFnEX35VM5wUhvv4WKYQGwCAPLizs5msJiRmig6vLPr",
  "key14": "3DG1pqT1qyjPg4wc2ukom197myj9oLYBggjEMw9DKceAt4LrPvfMt1TaZQEBccU4LmoDTHrr4JRW9KNXbtxtuiA3",
  "key15": "juk4jAKsb41zckcyNDGGp91f98H8Jd1cYu9rH1dTqWtWohVBRbc1Uk9xkNKvteGrnWT3CR33gxtegxhBA4151VL",
  "key16": "4BZ1UYgoxFEcmXw59HEDFLT8jtakCzZfSQmk4Ud4JxcyFhPNFKBz1onp1iUxxXdRwcgKNRL99758pCQRLEQ5FcoX",
  "key17": "4MtrQbyBToVQN386S3vDUMGrhB1D8oYBecHwABLxbaZZDd9bqUdVKR7m85wTL8tQ9MMNBtBMp7TKNPUfjU7Zqvog",
  "key18": "4ANbZTFivuRGBpvBgbk8XtRM5FeoUzrckV22psGC67qrMskXghQDduD4EMfNbqUXeup8LXSWk9c1JQ92S1nwBMnf",
  "key19": "3uc286ksfzvfNPYqwCDNfQ6JeSFg7DU7HvuwTNg9G3ny9Ydeh7W8XdnyQLisg34J5dwJMkwViiqQ41oRvUM8FJL1",
  "key20": "3a4XaCSGdE4F9HibXpTWAzFcVfbN1i32cuZHvn5uZJ9s5idtTuQCBWRAGHRvd6REY9NMx2JaFYviJCNBLUZyu2gL",
  "key21": "617hUQzi84Gy1QDRwqFojf9wGCRJ5LZLR8TZXS5mUc6bzijvJV3nYCtDTiQZyv5SqzuHQygPHYdYEAF11azLypgt",
  "key22": "SWowcQYbtYK4FChKKwmTkAN4USV2XbCq7WuqKxoKVdapj2DV1ZYqgwTR4aFyybqar9G1oA9Sg7ycAagKv3tsxb2",
  "key23": "3hB86uAPsaEsoYubJuNvRXiWQCW1Amz2ji5MjA12Cqanqxyvwf7oTjkze8Y57BMR3QVeNzemgs5Rg3Ax6QJHVXf4",
  "key24": "554uRyAeWwsxs9ct8HFj7iPrHYhjepL7GeCmJcYssY7X6cewn7hnWcZ8EawRLkicGLCVTZC5dAT7kteP3B8xoKMY",
  "key25": "2APmwUfb1vdLwZEEgm4ThBLQYaw8FqH9NLt8zuvQF42LzCneb9zHki7m7jbKn5DXAQ31bVBD5h2Aa4zkABk2wf6j",
  "key26": "2EBVeWehGCPSfAPTPw7QsECPGbuhEjuC76ZqPgx4VoqrZz7xgD2DM1RkbeqWjMxSHyy2nbteW4FnfHYVwfhsyAGr",
  "key27": "3ANY1hiFPHAYmabwk6GSXpbY6nZN44AvHiksbcmAkXmaz54ybnzWzoomgUtG5dcuJ7EJiPk5h12G5X3jK4TNJq2u",
  "key28": "DHiSzFFFAbhC6QwwyifC3PdZa6brZVYUxXR6Bx9wybY9zqcGp5HTHDprQpixHLJ6qVUL5LiQRbMUY4V31E4b6yr",
  "key29": "4JiNgBcyxXUziCPJVAMPNYR1FhGkxibjDKXndTpFcBDy554U2PXxRwekfe6piTvbJxb67GbGFvbmp6WMoXW4mK52",
  "key30": "2x6GduQPjGNHjnciZEQNDEotKhfHniEtaqp1HqR5tgkrhnmEv8mgz5hiZpSs9HLbmhMxcC8SLJc5BfNnwFRMY41i",
  "key31": "nMkaB3uL8BurN7kWs8VzppoMUXWfVtcANaGcLzBacJuybTEJVTT3RhhB4YPUYFA7HEzmNvjiLB59kWcxSed4Urr",
  "key32": "367WvHxnyFKyudsw5ffjGFXXPRq2QtATiDYHXDovkDQ4i13SXUDM9aTTqSctWB4ue1g9rjcJmXeQgro6BWMEE5K",
  "key33": "411v2csj1vexEh9xKdV5t8sZdNGLirf1i4iPn6Pw5Jg6td1U8v2fRu6qBWB9sXjtb13kkF14WLP6AAgWqLb44SyT",
  "key34": "2TvdaMSbdNwLcvqzv8p6LtEZBECr6J2CbC2raYYP82DhVcd3FNwWB4yLEQAtWtZbijcMVaGLB7wqZC7x2DkMjRfZ",
  "key35": "4zP4zRqmwa5s2KYm9sLp9EQhKfBFE7QBfTiak1xmWBAE2r1id9hL7PAvCGjYVq2UL1JYpwhddkcWN4RaUFyzhzNo"
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
