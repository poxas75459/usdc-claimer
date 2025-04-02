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
    "5zGk8rQWX9VZ29YhSAoneM2XhEvvQDWR5sqtPgVRTWQvuCbFcDPDt9gaE39sFkfMPr9tb4ub9hjiqZNaKghC6AcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "677HrqX1BxEwsfajp4Txbxox8qFhmMKcHfaaDCo9goyGokhXxj4m3FBGZ2zczgNTgXXtMevJdaJqcSppfwQ9UMhX",
  "key1": "3UMhCorgqqVTyhM2Scnjh68iPLzfzNJUmauScbXYhwNuM1qnysQYGtQg7bCWFE6dncgULavfAzSJCSsFE9K5GUa5",
  "key2": "4EGbw4Z92JKzvJqSZwgzGxv55CMa1fFNctBzoBsTSJSoev5LqAp6aQCRuymLaHonsJiD6ZEBTqQvZdtcgYtFJK4k",
  "key3": "2pvt6nyhAhvu3QKRctLCoXPnr45W5FiQfdE7CTHrYTWSgHtbBHz3kYhLtmL2Y5rYW9HfJKvJ6StR7iEi9tLw4PSc",
  "key4": "3rtgSjRcgrCV2AxPVLySZzmUtw7sQW6hHvEimnwpymuWwcxJ3AaPEmqeFYNJnNjrCsKnE7Ufb2bcCrRSoAgkNgrh",
  "key5": "562nFewjjF2uCLU2jVarGu731BLLqKjvUaetXyFiV1yoDdj8CvzKdonZk656kyiGvG4owkVCCqgPznHMnAAvSZE",
  "key6": "5Se8nwJ3ssZybDSnKtBRryBYSGFM4fRvb8wLRGcDvTc2UVfXLK1n3vNckuTHD7WVaVJyThRDQj6R7R53nZPL9ww2",
  "key7": "5soEV5bnGV6w1sZbsskNx4CvwuzDKCGy7mSRC9hJavzZ5Lq9viMLP1aANQgikKykAWPbYh8Pn4Qtf1uFDALCcV8w",
  "key8": "52XA2z1XcnasegkW11DiBUUdGRqFcR6iwF7T1G3Hsy35ZdRKfPjVzRFDx8nuXCsG84hAoGXVBFHL2iABaSzyphf4",
  "key9": "5j134ZxvZYnQxfAnhaJf6hrcPDMLzmjaR49Gse1sxsj1WEn6WUAP34nK8BGwWTRNe65ZBfoArd1mSRATHGenA2GL",
  "key10": "5C3aUzQfnxz7T5Py2PiEn6z8CWZUewvMRKEbD6RqrtHh5nUea7APHv6SMDxtMdiKEso8JRS8kZx9xRbFexYWVi7i",
  "key11": "2iihhZ3kx9zLoBsX6tDaBhGK3XyBEodB4Cm6kkGkJKE5PvP45y6VEdcbYmeof58npWgGszLQwyewaddFw92Nuuer",
  "key12": "4MuaGtY7PFfgWFBEBC6rqPAseK16KhiDfZCmANWFqT9YLM6GBjuy9x4Q9oCEX9czUwGz4eLZjubevUXyCa4NnCU6",
  "key13": "5PFH9kJ6o7eKjxaxntxemhB9ynAv4i8dJXUt1supoJC6PmT43TY7gWYLYd6yvSEx1ym3ticsvngYmxwcpmt2Gs72",
  "key14": "4cbS2BgXGJsvqK9KWxzwkpEz9G3xrVAuvZPWrRoPiobMsfMtDQ8gf8DLKRgHVJH5pJaYjXMwV9bBVFitbre4eG8j",
  "key15": "5r9yFcUjhhn5GXYrZH9SBcdaUPCZcfAYgjjET8hj7QBTgPgUVBy2UmT945AkcKWxS6CLNbmMcDh3gXihTanBDUqg",
  "key16": "5dEoxMtpLoHiE5mbjjYgvtg9tYXCjXyrqQ7MmFjGWYvbYvA1AofgcB1iuuwZg6fqb8yU4AsaRywZGevs36tbxLfG",
  "key17": "47BoT8DffcbZ2Uc8dK6yBj6JS3oAF3kBwDARJC1FzvrQxrRkvcEuBXqXn9DQrh22BtzjwB5A51x8qYi68ShgDt9m",
  "key18": "5uteq2TVuicjXDVjYdthpY2oQeGU2Q1P8bEd98xFSCfvtUWPMuuUK5qEoifmGTi1Cbvq1yj4GY5Vir1AF5FKvZpg",
  "key19": "2sPTinfT8iyYxC2XE8ThFaVnvkWSwK7SnY8cN1b3QP8sGNwEnq3VdztMyATjZV9RHAxxYn48gjHFHWY5YRVHHSUR",
  "key20": "2AYqprnnv1PGf5uaNQvWxVUqyHHYU5ydMU1EBmfPPHkzJVzMswGi9jT7nPfpk1SmqauF1iUXfgmFUnkoWAPypEZ1",
  "key21": "S6gBvYjWgQTduLQwrtiYSPyTM6nGFuWrtLx9sbH19p9HpbC2zs47XCDfZCThv385Gap2p2MUzwphHyDhNy7Hf4S",
  "key22": "61mKjJePXpV8y9FZGBKz6KQvT75UAy2RgVdHFydmNJWiL3astcUcqxpU4LsVMUvLu7RGAYKnf2VWUb5DTc6XyT1h",
  "key23": "HbDUc3YJRnC158mNMa2YtUinQY2pUvwfumwcdTFeFxkD9a233JAPcmYwxR3xJUuG5HJfcGmSDkeZyMBsd32XTnf",
  "key24": "5fXoYC4UdGcsvqarEuvTr6T43HQJiiFVH8hEJPtt8LoFKaDWLGfBQyxpXmmGoLbGEMHxV5YS6LzdDwtWbRw86gyw",
  "key25": "3DWQKP3SzoKeXhZznjTf2d34RkgyKy7ufSCqWBZMeWi88LdqvV3V5jdHr53NiG7h9wZTyeZecYMH7syGhCf3DRDj",
  "key26": "iQ38LAv8AU4LWR8aVJKyy9qGGsYAYrZS8Nwr73EPgNgEjeMzERZZ9YXCgBCLpDdirPkp4CzWsE44z9TDfiLCyXT",
  "key27": "5TSakeQ2EWHULDHhyVYhgzUfJ3cKo36dyygskYjE14j5n1CiLYSuZ8CbWuBXiCkGwwDf39S8qw7fAtc6zUuUqmCA",
  "key28": "3opcJCkZBb3e7C4RMrWj3iopPU4Vnj1ksZFqiLntneWdwMqwneEpP6N9nUiU7RHZ55vnbT7pEuawCprySBcGAjUV",
  "key29": "ABsmzwFFVAV6roUscc1yzLDWxUtL8Vb8B3sqNdHu3v799fVVE8yB7bBtqYNci8xXojw7XBiaRFysPxHVKuer8t9",
  "key30": "3rgFGwjBX7a5g3D21QifwnuXdvsTyP7h5SjqHVJpDFQtLgt8hKBAQkpQfwp7vrpwkr7jEN6cw9LqiAYNerjLkZjK",
  "key31": "tjpXA45qwd4Qq2cyGPAFYrQpRmon64zd4sxA7LLBA3gSSAthJn34DLuLTSzuwYsUFW4p5BjGEkdJXn1mBJA6r4H",
  "key32": "2N4nezeDtcPwDyR27ibijX8WWeJ8qAbKKVMXZNmwxS2oRMWk5cAiVQRjVXg6yDinwRgvov51oWJjnXVxgq1UMBN4",
  "key33": "4EQtEc6uJ5iVK1K8QEewz95xnwoqsvKxRJBo7m72P9mmbZujVZprSkffqY2CGDFzf1ZpyfXDi6Xt2ntpwmwrckw7",
  "key34": "NXoLQbAbYUTyAJqjEpHqkWGDGF3GtPJedXQzjgk1qpUucD6wS9jMvsMrKnA3D6z46udoMEieG4rhYVmh47rAQ5Z",
  "key35": "23RJg3sjzbN2SgGQwe4PviXXTKPkYWDCVyEJs2YtF5nqWsVhdGAGgq8gVySwsUkwXdMnUiHT4QMkPfZ1STKU2CTA",
  "key36": "2L3nfoD96rHe6qTp31ByCjEogjMmyBkUtbd112CKUSsLiygPyGbpSe7Y9WB48FA69Kjk4rPpUnXmXYNgsJ7NrDUM"
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
