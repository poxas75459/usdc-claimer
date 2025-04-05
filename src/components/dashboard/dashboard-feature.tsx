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
    "4Rg97gcAZVHRohLjc44g1nrNuMjadgihi54PtAXcGaUykhHTi9Eysr2Vho4cfLVEPs7V7irnLMNPkpuhkWgDiPAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uen2iyXMcw3Fqa9SkREK9GeHFLZLxZVRKfgMSEkNbYwBtoCV63YQoaN5FDrRTsD6A9KBzirp5LCFhWpeAKYSgpi",
  "key1": "5cH4qDtCGXTx9Bqhowvawt2NERShzdAuen3QxU9gX1PZm9gDabKxboDtoMesFLLuenSQ7SQeGFH5RayapNs94eWM",
  "key2": "d8EUdq5TYnzFYWwbtwqioymmuy2zupt9KgeKT3xkV9K2uGcE7LnTCbZuPrv6s599rL1P6G38djFF58UtnbDzMfJ",
  "key3": "4f51HW1wbD1jeKCsKiC9RnXDJGVUcV2VSsV1uB81GvPJZ3twJKWiBb9eJaRgctGrbQT3fpcf6pm6uZWvu3kDH8eN",
  "key4": "4hGuEuJED8h5HyQo6U4DJdjhLduyjY7GYXoDA8sx6hnFF6rnekJgdgngfZpKyRJx51FqSC2SMRTLCrtvpCA2a6BW",
  "key5": "3gnZUMyMF7VxCCStrwzMYXg2kHT5mXNyxHLuCzKCwZnfkYeWUAWejNE1PNH6aAv9cRAsvRqaZC7JcRdnjaJhvAoi",
  "key6": "4KF31nMueBPTPswhmbqXfcs1cntP7Z7aL7hHLBP1FyfhTLvfcghjybpmMAjoRBYbzvRnHxnbte1nGDtyN1BJ5nEa",
  "key7": "3QjBc5meR4gQ9VP49cNA3WNjV7Dn8KeSFUHgBptpxmdUoKYbkFF3d3pp19AdgAqhia23MG11nycMVuBHm3iMTxGg",
  "key8": "Uxy4ByD3UjXLPJRahYQXDfHPw5Wuks5Ep4ZQTkm6Vn9UbPHaZf14ykWSEaHagTTBWhcsTQ3WSYrTTSjERmi9tGU",
  "key9": "2F5Zct6SKp5EoXZrot2boqGSFeGebHgrVxmGXHPKFMfjwnitG2VZx4GkuW9DJbtL6Qgq97pMajWS68cAcP6xDzN9",
  "key10": "4dm3zYS2Gj7SU99AEBq1uYtCEcXcHGLqNDj7XPXLLT2vmSnoecjC4bLUjsSCtiSxsvamTZdDLnx9hnn3NyhGkoz2",
  "key11": "5cztYMkb9weDo18YepZV2yh9vcYFhfy3qk5eg7swGdCgsPBnGv3mNBmZydNFxaCkKLA9HDT1ndQaen6KxGYJfeWK",
  "key12": "5FaZ91EiibJNjttuXkXy1UjdBfmrVkD3fpB6QTVeMoH4KWZDD2hRWAa1tUFB16Ri3SE6Zm3PN6hqAnuTHyqqkdvz",
  "key13": "RHxtv32BQFhURTk77jA5Gc61ujoDNR93ytmB8KcWeGFmUZ2SvAEehGBYvEK1zB6S8F6rxF5xtK7R8zMmBbipeg6",
  "key14": "5gxMGKKHACNuM4LXFstXr9NWik6Jx6HxcvEARHGpfi5AByuS3BWyb52tbfkYx6Y7ZHSjtq1PSLaisKCLmeJsyCnc",
  "key15": "5CdqbooszJQqE6iLkmakaHVoscHNgaPWU2J1AMhdcMibcHU2BShVnwaytG9qWcaF9i8x4ss5qLt9JXw2hyJa6AsP",
  "key16": "oCUn5j551BpmS6DLhVHCAyTedKTyWchJPreWEJJ2JwbeFNcqo7YpNNfxuA4VmiXWCwEhnuevnChP4cofx9fpUoc",
  "key17": "Hnf8VuWxB2CjR5sH3eaQ5Z1GsDX6EKxHs15WER7aRYRkYxUu1dkmnj36Bo1RY6iBextgo4PRiLzh9rvxKWNQcVy",
  "key18": "4wArpDAE5ZHer1x9e7H9HxdpxUcuRQibLpuRcnHXRPCneTMQrNNoQTP8o1VmhBEeLMmzbB65mL32PHrzRXpuV4ZN",
  "key19": "4yZpTb13Fkc4zQ3f3ytQpLJnMNndKA1iBovsixrDksygHgVJm2naeA1dKczp4wfMEVDk7hPMiPzcmEyMNFpQvpiH",
  "key20": "3GubekwkcLQZ3dvSdCA1665ctvFmYrazphGchqf8DpcPg8LV7E5hLrqBWkGPk2jcM2SpbktNaxWwvWDbzeiXxDq6",
  "key21": "L3Ft4kHk79iz5rE4WECN6cr8Vd3sqNX2nqCyWZTvecXLZtxwwSq3RMzp287958KQsLCUcMwHEX1EjpmjGSMvgVf",
  "key22": "3GymFfAJdqVmakCg7amNsA2Lvc6BHYDcniewDmYVkJdg3AZZNNY1oRhN1kmBJjVKcoVYGYgq9quCb1Y5EoA6qxT5",
  "key23": "4jdQomvLYo9qKv8RbhLvQEgLueFR2oAn6YNQKbzTSoVpy9DKizokeWTQ3oBEyAnQjxzmzJLktkmQ2kQFLQ2sD3ip",
  "key24": "4SbfKy5GxEVMGk4mSc4dYfrYHEBmocxvgPm1qYzUme4SoRG4bkbdaKhzBStzFdXQ4DDMtq4diKZZhm6bbqTJMRJn",
  "key25": "3nUB12dTLUvRvL9o3A2CmhrBLk2UMkbX9as5GrgrbRYZyHn7yDCVoWW74xStbp1GLFQwuWtNjrBrP53X2AekzeQq",
  "key26": "5nDuxmahecrCYfoJCyJWjyv7qQ1AXNj6qaGt1t4Xm5trqMC2Pyzmy6pjZX4CB16shJpfs7R7Q5YyqUpTzMNqLm27",
  "key27": "3FvTHz99rnneTpm8B5EyXFcMZGyZwGaQmaKufpw8oCWNF4CMaTiL6sTtGU1zefcQ9WJoXSH4dizRpyc7phJHuq4y",
  "key28": "2a5omo69cqeo2bTyJ1GTkGJZ3MxwGvC2StTtaBaHvrgbs7WQyqLgNNg655PZbs95UyrYMUK51wubtrBiaRzfiWzv",
  "key29": "4FMBTCuHw5vLLMYwxDACAXJMAtsGwRmWPYLK9wgS8rUAZWC3DkrokVXk3n3z3GZH5UQp9LRxoThjBBWAGUParm4T",
  "key30": "2qV461Trz5kAqFdBonqhCG1VRbTzYufPpFPLhUnqM2jExPYVt7nXSM1DtAgikEyrc4c4MptgXuqNEEvJVTQEL4hG",
  "key31": "2VSVH8dKRbRCaxfoVffnBjxVZjQz5crWAx7rSeqaek2aLQQpxLk7BFjvbLuKGJpYtrSpkuoRyB64GvHamM5rFBod",
  "key32": "5jZumQXkbzJhspe988YEq3vqwQtDjjAMUbbTSGZCWkQ2uFuQpWMszZLzBRvDZ2mkPWXkzp4XiByphihrinX1S16y",
  "key33": "3PnqdXZoBtpHs1bMvbd5UemTiAhDt42tASmkom24VJqntwxdJsMm1GNw3FcNyZWSxYvfdJpdd76vvsWCn3XSsPTn",
  "key34": "3kidVpT9YafqXFnAoFSs4rYusT6NTkNtLqNffD8EHXkQk881mVcg1vfxAPhucyfGsDhnntEsiYkQ2FxewXSxjgYn",
  "key35": "3fA4KoDZGfKdX48QccoShpsnsrxa5URkUeN6pPTCyC3manaTzQvy827yoXfVymXXUnKqRUu6ZxEZyDwqsLrXrEtV",
  "key36": "5tnoyiftj6UPC9TEVkZAoBd6VayTeWuyPZ9zePvxfFqfrbXmokp8YAnDgauR7FQeJXoh3vaLbP4pzSM6zobkYecV",
  "key37": "57FGffyzXapBJxo7w9fRBZPpMQaE2zL6mcf1RBfRQ2N88jp3bfoXEkgtdoJtSb9P2nptUE1P3xJTRvwU52Q9hRyq",
  "key38": "5EJRRHibDbXXBy8gAHJ1jJJSTg2xVq4b6UZjSxtMne8H43ruN9V7cEt6h2nRvKJjov2HYg8jDYHM1pj3rSsybbb9",
  "key39": "5uKYyU5jJ6g2fCVLrw1DEj5iScerF4Ny1gQozi7jGJ3xjGJDGXh6eyNRoFzT8ED5iV4558PsdK5Rhfb4AhrDwGfH"
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
