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
    "5LxKQ3gKT3hTpytDQqjSbAh5HYNRD1AhwBZ76gQ8RekSMPY2dv7sPKtZWzFoFzD19yyo6mF2c77dtncydkrMPK63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HDvnC6aXxR3eRigWtk9XQnYU5QDx5UQsJEE6R6BTSomBEisZ8NAxfzzyKaDb3qyRB7sjhqLZXW2CGwtrzVntUuV",
  "key1": "2fvoeo3jzFJKUZNRjtkuEW8aXQFvDu6vLE1YDMYuTn5pq3ijsSXpQVzaxmtz3Pfv1brfHNSf69AgM5wD3NUUqv1N",
  "key2": "3kSxSi67GHJy7PTTLBffTWQrz2GN52FWBdEuvvWG7m11VAp9FSQyNQVRiHxC1ECPzhZBky2YHLHbSd1N4UPeHJR4",
  "key3": "5WLUWiZRmUPqfntdc3GdXLfTxayHsjXidDLWBKFPqmW3jwrrrwKutpbVRsxCp3R9R8z3c1Y63jQgGhw23m2tXEvm",
  "key4": "3yUHBH8TeY9n4QyfAvArwJSXEbS8FG73onsqxm9nZgEsGgvJMnkgMHKgxBsEJMYSnb7JsNe6QT4yqBkw8uQgmUA3",
  "key5": "2vkRNxqDsUx76czDsWF6JsqFUFc9fLmQtZHEKg2Thb8twzJPDHi1mt5bHmzgcnHARKwJGwNj64ZtZnWkJKctzbFd",
  "key6": "nr7peSq4WyFjmom2gn4LBNNQrpJAVBYRqp61B2Jk9Hhp2Gqo56XGgqgPZ8Ry9Wo1r8CoFusj265bj5BGduVxX1e",
  "key7": "5cJ1YJJzoyrNaCUVNWxnQzknDu9eqtyRzKY5w9o9SM3HsZmas1B9jtqKnSgikkiL9K78jNw7dhVBwwP6mDyU9HwQ",
  "key8": "34kMK5qosk5XF7YCRHYSGKEu31wwCaw9cjDJwrUiGypatvg43GrJG2nj8iXFfUkdDQHxSM2kgevJ2tzssSXgoNyo",
  "key9": "3HYZp5VKmgX5fRv3K2T1rYL3m8UdXrth6F3o9SMGyr5QGxaGq79CtkiytiqCyDVyijEs1kabnhuHAN9eHABjqC5r",
  "key10": "5L8qosR66owXnqpv2MKNunDXYHvDNUXFvCs2Mva7rTwcG6WgwoG3L9F7LJFcF3snX75W1TZ7b5TyPBPivxY4Bes7",
  "key11": "5hY91v5E6PaRJpy692hcKpcForP2PuV3GnhDLeFXL5BNedZJUovTjzY2rWQKvMv6CW7TjWdNXoWQsQiaxc4W75XP",
  "key12": "4oDCGFtwmhFE4gGVqh5vhXTRSNQp1nybHM8dvJkdC6mbKqAFoJ6doiK1drWGDxMzWGWJ6MdBUrK1wbR9mbUdgpRX",
  "key13": "4uNqVXzo7ffP7ktyhcq8FqGTDMGXBu7xU7RNU6zK1TrRgiZjNbTiQzqK3LaxqjYCUNBtu2CrT2VMQ8CRMJEzZDvh",
  "key14": "2XAGo82vHGGc3kWysRcYUeKfgJpDtmNw9VHKWnwmSZtLhEMGeHG5ceXDojxUGNRSeZTnGjD37E58ywkhfGDtRgnj",
  "key15": "5e8X6LumRbDt959ZwrPvEggLHVkdXuct39Mq4eyDYB1Q2DQCYsQVbnULBYh543mk3T8UidsNwFfPKwZv55Dv75qm",
  "key16": "5fMmBZptvXPvW4dg3fAjVcFJhetAwEAqKExiKEPKff77bkHcHvPLY8DFfURK6R4ZJRKEkv5BJ2yF2uzH9cwTQzD2",
  "key17": "5MPDZmyDRJ7jwndPKJhGr9CKd8Jd3FgA8xahJiq17aQWQaSS4P8kGRSEPKDsBefwENsVvRXxVDesvaxQrbZXHtvh",
  "key18": "47eHY7FUfTDpPmtxXbiXt6TSQGuSv45WHkrw21acoqBkzPjMM1JfKjTLiKFP7phQeQHM2LJhL34ZefByuQy55qCz",
  "key19": "54VnJZYHYdCzCUFoAbQgHf3nKN4zk91PQHwnJxkT89aP1N7oUoE7V3RL3BedYZdNRsRCFj5zQiYStHX2A3qLqcxf",
  "key20": "rjg7L2rp8msQNWpr8yzjen285JsWz9wnLhKVAWpfGNgULfNSK6thiweBh5xhm8ntHrSu8DEjaRJKX1dDPjYaSF5",
  "key21": "3ECZanRozRcgmqHyN3t8v5T58FLsj1qpeZQomZeYsVtHSmBkBBBiwLigiZXA3L1jhPpcwoMMPMeximocMe7G2XYN",
  "key22": "2ybDQQaM2ANXpdAejZLW56HhDuPsBx4DKkdUeKDxUT91Zi9ieT2M5YfAPkDpjCEwBncbKjiwAHX2v8i2eZySaC6Q",
  "key23": "dcYHUkM2wL4siexq5YZxJcYQch44xKxYWcA2KyaTj3BGeJxDe5RooyXBwwiLidZbKAdnksiV61CyV4ncyogtKKs",
  "key24": "2duaGGSmvMghGrdKmK1AcXCDb1C6Enqf6kAjwyJaZBfNaVAxA8NjfhgqCe2AjNf3yJA5jfqwpa8vsyCGvfu6SFKM",
  "key25": "3R5e5BBpihdQTtWUQNAymBGKJi4s4ZhS1E1G1x6nQUeHDdjQwZvRbmAvyxbGGEQCYdPJ5skzHurdQxNmiegLX6wJ",
  "key26": "hLJDERaWYDnhqpDfY85h672Y25p2au4VWycHj9DbTPm5rNh6q9NBJ65iQ6W3SyN8VqXCzwkvz3RMzwvi1RGkx9H"
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
