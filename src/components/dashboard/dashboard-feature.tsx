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
    "2pt9SrcZnkJddsX9hRCafqp75kgBeFxW4kNgPyAVRX8VupSovhhxrGQv3suQRZWGZ9i9vg5iYtZM7PiGv4soFFSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WCQPmE24yyJwRS2SQYcUeTh9oaVnYBoLQrGfooda4diUbfNLk3D3rBcnHsxKVdbxVaMN814TaHCwNiY3prYiDrQ",
  "key1": "MU4sTrmwsPLf4Pbb6gMg7fBxKcu8ktGE2n6iTfE4jMbCmTmbJzZniJNQyCuazBLTwbt1hXLDmoo75owZewA2L1Z",
  "key2": "3d9TfD96vCwrEZqf81s47EDFJ5VC9C88H1QWNhwJC2w6aXKfB5cug39k8cz5GsZkrop6qjLfvnrCqEYeZGkDiEqy",
  "key3": "4NaJ5f7nu8hoHu3yeqRhoyiwcM6trH91Fo57UUhBy78bxtXhD4b2zmhH5PX556bfnmCAQV8HhnAvoy1aZdyjTAjD",
  "key4": "32VXKeWZjnp2i7C8QfP9T3MuMPTRwFsAtPLH8V1HEyCecZiwJA1witDrZMB5oLZ3PFxA5SuXBvCw1ixh1rdoMYgU",
  "key5": "2PNx94AaacKFXeikNz7AgBQUxuN4uHykadoPF5QhBni8Y7ptMEJKkg7Hy23cnwu5ZUeUaTpk6nLLb1yCW2prAax4",
  "key6": "a2oCKnR3btT3Z6uDet5b1jdFYoXSZKY3uQRBkqXPySCXsPv6NTMxA826c8MBdbKgAHwsH1UT8MKKbfWBH5yw9Zg",
  "key7": "3YKhxqrE9YwFeXHK1HsSAYZcBw8Q12t1fdwXBDyDARzqfeCqFV9kobiMBJkX1172NBEFhQjcACpGCDK8gEvMdtVu",
  "key8": "K9omPLBVMCHX9iZTE8uYCM6ARSjkCQHB3wSFQv6vpSiEiNuEsmxRFDNoJiJE7pHf7L5FBsZbrLFBvpsC5NtQSZG",
  "key9": "3GHAtUgvnVqhsx7VwJcs6LAQaw2T4Bi8SDPop2fWinHokL33ctVBuAN1msqonQZjAUX2TwAXHGtq2zR3wAhcDYX3",
  "key10": "5rPyZvKmyxwyM2skMXXTUGPsjeAueHVQsEuqX9P3FNBuZNVLBegitoQaq1HAzSXmMhrPzickc1K3ZyFBkMXswCSv",
  "key11": "3rzSBpjTeixr8JBVgFBf3X84YVg5wXkX3eiiTLa6bKXqrWTnmhXfd6LexcYFLpmQY5z3EUFS56pmwXzH4xR7uQxj",
  "key12": "qSjJwPWKHfKJTavZF9qZrRh8FUAFB8CPgF86Y34io1ZzyhCqwwrnGmsLmq5jFry35JJ17tnNQ3sqRVCuJb29erz",
  "key13": "2XYDVoRALerFThZounFgxmuMty88cJbY2z9LZwiTEmzK9bxti9juTDWsUZ1eiSMPv5ZvkNL5UVJ51un9zxLPQ4mu",
  "key14": "4krQS7D67h9zwHxcG13x2Lv5PSR18QE4B7kiGPoBCtjPRySqMpCQ4ZNiBEGxCpkCYjwu8ewPbTHtT7hYA1FhWSES",
  "key15": "481Wvkn7LAaT6zeB6iAyJ21hjqL85fvmpzkQgxJX4Zi2mSs6Q8SdN8vd22KbkmTxkXw7SkDgQZwDFtiJX9CjZ4rq",
  "key16": "4282VUgbXeV3FZmn9DqhVkxeP1R5ZmRMfGxjz72XYVPDpcqyECrtqwmBzDXtxfXJXm8kjzve6eGFqNAca4wFcU7T",
  "key17": "41sYm3ePZMjKriJzL1vbvx9GPRCdZJj8ubQ8jQQFqNnmY49NcNj9UQPfTVZi11ujqMgX4dLPcrYuornF2m3P6t7o",
  "key18": "37AQAtykkXXUz9p6GHYDU1aG9QvhbRQkf2qMntNUr9BeqT6ggWy97zemAT2GBZvbKjmmfiyZi2SEjT6uKkMwHCAR",
  "key19": "XGybEphMvUFpbTxnGafhcCxN5jsi1gsxKSd8aY7Cf2MAnMLKE8aWuThLTy3dN6ERK957QWUng5nH2Y1eTvEBDUP",
  "key20": "5qhUxqeq13sDyFk6cqSCp7eiiVyjn3qpaWWf8jPVvcrx483JA2uoz6Kxn4S36zurEERzRzkGP6iVCFGbKqnFt2x6",
  "key21": "3vadQeBoh3yWcsWd2oD34TLbQzf5EGyAGgCXEXew6g2hxkss8DXt5exTFngNXPqYPxshQeYdJXegJGpve8LVAuwp",
  "key22": "2jZ8qeSfRXaZf3kobFJYMRCwgbXj6rJTDh8hx5kvVsKA8Ki1rnyY8rSbcDr4Acd1UNvC6sHG2q9UBu35LmrLedC4",
  "key23": "LiD9NXAV6vAJjL1mLMPTuxDHgbrLzSzm2iUWAxWLURey9cvfrjNUUC3REArrZHPordWyqvaJ3eVw75gM6UQdtdA",
  "key24": "2qxSyvxiQwMy22YRNLayTHTrG6Uwn5UZG9xHBADfeYFpf4BwkUqpeewRqx3DMuNVC7ioQFk7ZXnhkiDgZx1EjGJs",
  "key25": "3NJou4Tu1Zadu8Sa73zSmC8nuxEtPSkKhvbxod9bPCbChkHzhi94Ai75zsQvMakNTwFL1ENPjsHZqASPpYnXhqWh",
  "key26": "4LLCwHBm9sMZxgAWBCxkszMu77upudx79MSvUnUb8VsX4tLtDyE53sgRaH73otKLMcWZMSMSJw2dz39KipZNs5cp",
  "key27": "3LHiF1fE3dFbyFEBqjRTxYa1YT5GHVrXUoMo4Gy1HqBrHJdqDbxBABy5tjvR76PZTG6jKHzUjQsWyKR5ZEvkEN7S",
  "key28": "99aG9T1g9gQCArUZDwzVD2Ev6sJjc4Tunrzs7uhob52NJFVrD8m2gdH3JeDnuor8JUBxMMsDqwT3vJJ3LUC7RaY",
  "key29": "3pztUyfmqS4Uf7TgW69HnwYpjThAhSRmXewG4sZSAFgcJjQNuhRjZCwSaFXGBssfVnVrXnaZV8m3z47JghMZoQnv",
  "key30": "88biyms4bDu2ZVKRuugSKWN5KNQWP6AGfYhnQpteCHK3pcqYcRd5ncHBhDUHjZ9UNUEnDtY5Qvan5RgdRMy34bN",
  "key31": "5hYh8QpQ3eLs7Ju4BEgyRry2Hk39tCARKzQ5JLkMeCAmxyCVSTRjRWjqRCYSw7CyD52e9LiEfmz6a73nLWmfc2rD",
  "key32": "BuGe2npW4nsfucytXCPHo3xbUoytZKsSBZYShJRo3qykr3CAchFFKcRyZiS4oFGz9i5q3yBcwbhimRD9ase88x3",
  "key33": "4gnsqAWiv7dRpYUvcZa1WgtE9SdShVvg9tVTjzjR815Ar5xxMXxabrwpZjgqSTagjrModXdBvMS1MVGF86U98D7Y",
  "key34": "5EkDgaBAcThHBM5WYnKdLYhELsY64EKX3D8sEPooDSoxi1edT9rhiLdWNzPLCVfjfKth1AQTgXfyKiCP2ENrvBUo",
  "key35": "7NyMJrNhVUipZYweMPXc8TjA5bbajRXxPMhyxNQoGnKd4Bs9enZe8MdKnSkh66Vjh3coah3kiSHWfjFaKhnx6FP",
  "key36": "28chWm1JTxwYG8Ka6E3XF1EYW4JBsvFSJ59ToCJ35aeEJYjyZzAjXroidk4vnoysAhWsEeYkXc3a8ztMCkhsZQAX",
  "key37": "4FyAU4yQyHhmHssS1RoGMNgMNDyUzqk8qN36EUiE1jzdasnM6hWeBc4YwuRiRFR4tz92Yz1yuyimGy7UrBgF1gf3"
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
