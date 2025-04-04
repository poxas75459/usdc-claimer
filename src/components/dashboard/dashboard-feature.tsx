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
    "5pUXuC5BKNppmBiocoDWHhQaMLGunWQRGCnfp9EZXpkHgHtyG7adLtc7NHqKGGS25dmDSyJ5mW34rux4W9xYiBPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LcLY9xPU3oXNPCcenFdTu46nSSRgnPjg74Ys7yymwxLZSZGiPCmVwtkynxjMd2uiBuog6Q51LRJHYqFfEXeJjaz",
  "key1": "wWbKp4o8eVbYhYvxjoM4tSxEqQm1Ex8UrfMbko2XYQzZaBe5CrZjaZWnwsSMi4E4VYUNm3xxuQ4uteWaRjLw5Az",
  "key2": "3eZLot3Q8dWD1VS4doNhox99jFfP3gV56dmfBVCAaFVSKgG8etGQZyzbUvbcpXe7uNPmt4tw1owNXZMnPifKcWJp",
  "key3": "34EbGAerBWqVm7t4xFktN1FTfQ5JX73g1i3FNFcZrDDsaEneNXHDiRYh76jdDsKg6RUsNibchrHyg1CQAU5Pja3w",
  "key4": "FdxQvGrjucDjV6TPioWcfWuEGjS69pYzDEowmH5PRGvbjY9EMQBgzb8YCMnbsNCJnyQpyJxc8htYL4Eat4gCpin",
  "key5": "5d91emkN1zoSsPz6xnm8Z32q5VyiFDvQX28RV6WPfLmRLdAQevjcax2sXzH42amMqEm3csaz9tKGQPRVht2uTTTG",
  "key6": "qZhXXi9zUZVw6StarnHiyEEfazUyhBdYo7bNKNSznKm8ZqND7SiNz78Gd67fSEXAGKZ6AbwtBqgMwF4AYH6jtiN",
  "key7": "7bkHtnQ7Vgau6rGZ2HkTb1R3wWtt1p2vXjdzyWia8dPPDKgRX3DvUr63cY4CePecZZLZgt7oT9ASQudWy4odftZ",
  "key8": "29s7uJARw8UE3duAH5pE48anBZq7dppQDBPip3642PP6Qk9NCfoHmYkQE6Pen8SE7kbx5K7BBan7tbbsMJrYqxrm",
  "key9": "5XhhMFSekHw3BHKTfBG3WARPj9ovyQMpDYxFmFEvmanVJJSgMWKu4ZBjuFFY1dpPzoibZ3JkA55BMZispLTJbQvE",
  "key10": "5WWW751LeruzgfTbSWYMwTeVYXMN4vMFcfAZcgQk53Y8ybpdHVJN1dMpaaQhjM6de1MMuWQMpZjP2ySzBgU4R6z",
  "key11": "4Bu7svZRGaisfBG8KqzdZbxh8ey1Me74K7K22weJeBMQi6cg7Ww6AUSXftYZg8DvB5NjNmxM7RbjDUP2RmSDRnvm",
  "key12": "5nKskVLAjGsfghBx1AQrkQSuYuE1Z8RrZ2J4uhpRiLNqoQ5gL7wcvqDxg1w2P1GZ31xXpLT1fuGzUk4FUQZVy6Qq",
  "key13": "2QCsDVwS6hDxvDNpzFcASrA6kyiTWp87n7stwtk5XDsRHTRvzA8Y2kLRb9ze6tpt179Q5ZCV3JPGzGGBb1j9Qbrx",
  "key14": "3wo8DLaXkaGtBkSeijXZLy8VjhGfn42Sws3CFSJRcc1xtkSbtDXi32PzPxp4FrMNtY7qHhcHDcQVXtnwiGvRpcjb",
  "key15": "5R8feAsL3yVYxLGGzh7GLLfb2pCE42AeHVnggG4HgLx2qYVveKJGF1MDvuGjvf7JBWVVtPisqLkkX4nZVTn3oHxt",
  "key16": "cktiMVkwcfBxUjCwmaL6ouMUziKSyp8Xvte3UqmmJkB4xYQPdbk7VK5E6HUhqPewb3PrcH2wKxQit5LtuwQBbzr",
  "key17": "5RqLvDHogsyDqKLFrEyNJiaLDUassimmRjmd7JYg1JCJNJGrQsWr9waikCXkPByHRRq11pzBdQvAmRfkNHQwgtcj",
  "key18": "2rw3FvfM5VtPpsaypimFfhmAPAgDXgkwCWAJPjk8UTUpZfCLyevwqhyzxontQeUmGwpn7HScVLis7EHaFQwH1E9z",
  "key19": "3n3PqLz2EBQ5CbWvEm78iNT3PjqpYE97z1KpKJpsQ3YJZrDztGc95NPfGQBWfYgYBXg2RNf2N9Vq1qMrq158xYY3",
  "key20": "3E7UtKeKEanVw1Fqt9wo32pc2BZg1VkihmSwbLrqSNSgKbcvdJotf9KXPMuEGqBjhcF2W6EYtSLKFbNZYjjDbUNp",
  "key21": "5qPDH62FmKkFqyvhPGop8jnzjrvdDRvFLRWmKaw3M6tUNEjFndPCrKswnCUuuU2x4kQ6N6PcxNGykhZmAmrnCJR",
  "key22": "Q6p3j9mbCiefavJ7xbR9oz9cjSvvN9ZZ2NECDP5dJpUnMxnBqAgv4SEW8uDbRcZGgi58mMea2NatSqPrdZhRCCB",
  "key23": "57Y288SwMTNkVytsX2F4o2Yst5zCkv4uCSHPXw7MWV4jSbstwEAHAgE4eCy7R5ogfyQiVaCiYQdVcNGmWUsp7N7D",
  "key24": "3YVVhoqdJ9U3WvyNNV95mtLucjuoacVQTYtQCTnPczTqCCtYNWT35zX7pgacGqaVv5zfxkv2Vq3s3oNhQXebBxdc"
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
