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
    "3MdZmDFLq4Rzq7QFW9MX9oAfV1R84U78U7eZTA3fJFn8SyNNonqsU5rQ9x2V4LjxFzJGVS6FhzmmBMmYug9jT9n3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vo4MnE168BAFZEHKNXpSqGR9RCNG7jd442jUXxgfU6ZTLo4E4LWgbgzE3v8XMuXzMDHvCGnWnFNT34gZQc8gFRs",
  "key1": "22kwLhC24x72onZEfLsqqECSMs3ZTrY7gVUEyxKpV8pz2czA7FhhrgJNryUeUfwtL28vCWdvvMGEPY624AJRGKDp",
  "key2": "2NWJEJ36g8omULx2inh1YEYGvZnFZrb4JvmzZs8gs5z5LfQDQBN7Bz4X6GnyrS2h5MwTzQpKC8WsB2GJ8dypvR3a",
  "key3": "5wQjXS4wFDm3cV3ydeXU1JfD1KxdzSWFGavvh9Z9mS1CUkcCCCFzb5VtWXs9m6GnTGQeBz9AHxKMxLFQYHVQ7tZt",
  "key4": "5BQbBWzxCCfEEmThG4DQPp8YxVc2GXthg1HfEuAW6y35aFMc631uRqVeFtnstMzH3AT1k4HaXbHYntMWfSZrtimJ",
  "key5": "GKtvkAZWPNupCbT4qYiDCLQJdnatP3maY2yPR7eXTNRkQyaGGm4SrCzQtYPQZXdU72TbWQhHpsxVNiapWk1PapL",
  "key6": "3HvVaiG2AaDtToNe86e84TfB4rLX6JHzHv6zkEyZ4J2rZo51yUTHDydpnDtcTxg9P3kan8gdqQXWsE3zeXEeZgMy",
  "key7": "46YYER1R3wSxmTyyVGUSjdP9M8wr4Q34djLdwNi5vo3zS7KtEz1VTArCixaDE1PhKMeCDdA31Bys4zM5nEwng56V",
  "key8": "3gucs1QQuPRiaZxktiM3DM2jq5h1uDCL1dvJXQP5PzG2nJWqL6GCCqN4RGL8PdMvfJGZve4UCBApFBmPYF5jB4Sv",
  "key9": "5GUNwM32uky9UKd5ejBK3Yfqx5YBx1KRH1S35CDkWUnCNFhViVUzdRjEubbxDPvRHC2x7phGNJ8vsHGADfRunT2e",
  "key10": "2TRMnuUM9ejEtb7nhMytiEMiLA8PX47PBx7oT9fNhDQdcPs5DyZhFhba9yQC2zSotEkL9XLdYb2YSb8tQpzKtsWG",
  "key11": "3H2neFAjt57LpiBthRgVMcoYPTxT5e8c88FGKWycT5TFyQ3PtErBhjrhVm9T6MEYs9244BFs3hbe22dH5xUSpfaT",
  "key12": "5pBaBk9FPUb1YGGBLEK6VCYZu1w11U3JdARbmZZkhCA9uZQCwM4ynaR7ccA5NivuNQrwTAqyAqKqsefqMVyBD8kT",
  "key13": "5anGHkg5dQ8gCQCZ5skuwavLxUr1QCs5G27vtsGnod9svV9PsdPRVEoJyK3NqaFxbGcxkbMSb71xDDwoEgL5mTSQ",
  "key14": "5QK4Db84kh2pGQhcgshwPBLo7DTB83YrPrYgT6YT1FVDHy4mjwQB7fU8gjYTwDJ6UAeupoK8hDTbyp75PeguSqN4",
  "key15": "2UmzJC8bKRUD2dAUJTpoodrTPgdgy8RgdPP3G3BJW46aJD8iFBKdyZnox4ZscsuJkWjDh7qFV6eKfjYhkfaUQbeX",
  "key16": "T4n6wmmkuTFZFaF6pjBAXun6C7SRxEeP6brDNgN1TGUSjBLe8jY4hMzAaT6QQecR6DsGszs87wZMtP3gkkGxLP5",
  "key17": "2HZDNtJN6Asm8q8wb6HEXfZnsmpZVawCYHLak2vMpjdGeGjChrnpqwRkPC917Wugy5P3BemHj1vxUhBPWUh77hr1",
  "key18": "62cfacz16kKsHgAzEAzEyiv1wJMJJxAn7x2n6S18vxkinGujoQJgH1Qv7sCYBXzWjHmoZCqAFEGQ5L1D34n7PuC7",
  "key19": "5XBPnubkUniJHUwMt9YC3pQnc3z2tn1zVjSTY2b5gDVCLdgWuV8gBkSqrBN5gVKxJcLQpRYcxebczkrS3XK6Ynpw",
  "key20": "4UF4SJHtQDsmuehy8GHnH1whnHQ42eok1dtCxrzYhW5GhxMBLi7WQTzCfM4BLs7BfYURzyYkb5jqbJ9EssCc8ndv",
  "key21": "5n7TGzdUByrET7h8TQyQLX7vGpPtZjGJneF3yKHxAbRrW5LYsLKWTsjXmQV33qi8s4WL2PQEWfrdBdy1dv3ETm2d",
  "key22": "f1DuPr13oun9AcXk3C7eRNgXYU4nqNup5NkTBYxq1Ne7dYQxTz3C1JQesDdtLrDa3ZRo1EiWdoBbpUve2VkfJ5J",
  "key23": "2iSus4xgCoJbe15So2SzBYE3zZtiaUNB72Vk3kLmU6qWrN3SL7BhwqjR6TTMjcMfVLf8M7rug8tQ5FqqfRiofCVk",
  "key24": "jxdP4aHRxZY5NNyyTTcjDr3Y28agAY9qNQmEjVcVDds6i3aCbTt2UoZY5MJdeA1KaTeadzXFGU6HZbFPdeSiip9",
  "key25": "3ePt2ZNRFmpLqBJyHQh3Drmcij8TfsNcwY1RXbdwKecYoNR4W3fqwtdJD5UYnE7TBA4HBLLHZiko62VKi9QLYH1J"
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
