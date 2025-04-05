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
    "2tFtGYS7ndmznQcK84cCWueX8DRiPHcJFRQiwccqwAr1MpribF5kt757mnDJSQ9sGHA8YfP152jJMhiiv1TLqPwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L7qkzXpdGjJvFA9riAKnCU8aktoBzorMoFehZr43H2HiaEH5CGZ1JQhsDgm4NUzcrs3EYXMd2u5Sefg9pf7xGwB",
  "key1": "2KzGxUX8Ec6ZdgWqsaLtzckc2im5y9w43XmFBSeg1Pn4RHgFh1WLzeCxNZTZuyGWL2u7MXSc7ynBNNkfBxgFWHw2",
  "key2": "53xAXmhF1KpugwSfUPR8axAGeV7XYwMbdwkAWHBWUMF99Ka1axSk7L75eSYVaimS8MtbMDnWmXPAzpi6zgb6yeuB",
  "key3": "5zp2CiTYpXBnLxLriaSAEuQpZYjEuqYVhRbb1MASxY2ZxEzmm9Y8HWFCp1s3pv7zb5zBY5F5RPLz2seLKgA9t6VU",
  "key4": "4jy8Zoopf36nmK2w4TzDNRjMnFxwTEKZru7CJhu7J4VunbVHSS8chVpK4FtEAfT67mua6KyEaLqBUYK7TnEGQ5fU",
  "key5": "4e4t6xq2Bjgm93a9iCN1zkshacaGTRVvAiRzjcqLCu3W2wDPfrftfF2kEDa7KYevNcJbEaY1QSnuAhEnPLwXJjrL",
  "key6": "5g4rZT3oP3LYwcMuTPmgdjbA5ZDLyZ48oL7yViXzUzH9yZ7hh6Hw1LQv8yK7RqVbVizLQHs8nbnb51cVjyXuKKGo",
  "key7": "5HwpFEWq1VoqKbVJuJ5RdVHtpbatoGf9q41R3t5ZGbbSYuuX7xbUL56DQEbtcd3a22CvF2buE9SV8hrLbvQSJ6T5",
  "key8": "2AgEHp3z1igJQSCVMc6j8oFBjHCeF9rYMDf7sSECNSUCZAkm2G7Jg7qUXMTZg3un2vhtKsiQRBcjm3dSe8NqG2vy",
  "key9": "2ypaQkvUVUyyxd9QL9CgL5DAFhpjUD1sR6cX138wRaLNTZZn75Ydw7geehw52xJH2TDbH9W3vfRuJhS2323bM6xC",
  "key10": "35h2no5ttBzGWK2pVyYSnvFsopHfreGzHZAsbcS3SeDtNcKR14hkCnLMNShw2kCeNDUTGJNjFiTfrDQgLbY5ogMm",
  "key11": "aHic68wsn5mT4cDQfwTHym9gLaEAVm9Cpr6t7kMzvfq3UeoQyB4e2s6j6QT85hx5LbJc8pfeJFksV6xdLN3KFUe",
  "key12": "xfrg4S8T7L9hGtFgivnBVp3vsYX3grvnh2L85iYcbqE62wRJaBNnqWppnW3ki9AKFLgb8cNr8882eYxW4WqJwzD",
  "key13": "2m9624geG5VJopgiEPKnNAh1uHPEJfNzzPkQMbrYsNag3zLosYdWmjEZRK7Nur6KbgaMKHmGY38z4dNBdAswi8P",
  "key14": "2GDsp7uvpqKzKDVDyRcqMqRdnTckBdZMAnJNV6Z8V6xdg1Tr4dwcKmUrmBHmMqpgjASem2jUyYtcq6bBqu1uGiqJ",
  "key15": "5WKg3s77PaNL7gHRrWH6h8gbFosL8zk9vu2owEwEGDWZDvDG2cyRM4TBWtitqQdwmHiVagTyNWRN15pC9VLRKmzK",
  "key16": "63o8HNC75dhMZHLVSVMoU7D252rzuL3YrAQCpqy24j5MMLubwaGyhHDa8UfhDDhWravjiZpziMsJvZJ1R7PWC14F",
  "key17": "4epCz3RnP49v8XymVV7RH3N5sx1KM2N7BKHxncspRWopUeoSB5eZapv8LGiTnhsR2JCuCaaVNgCXe2y37x75nn9u",
  "key18": "2P23BYea9egir3adUPzLW8En1KnX8WF7zM3H5CQ2wCUjhVhRRZ7in1D4gKCxVQHPLbhduBYdfxNonyMJuJ6kvnx9",
  "key19": "37vQ8YUT8ftfme7VoNVeQeLJF5oHkjccQwEcPsRrVnr16n6mD2iMjRh73ZuyetvSZqpWGYnzmGXZzZTtrbKsKmJ9",
  "key20": "5PYrTJ4v655uAmUS4pZv2Q3jGnxvWLmZg2BhMSrsSkQoHt6v3EuzUDQMirE6JHMJnDU9Df73ciKmV7gvJq9tXsMF",
  "key21": "5Y9aN7En6ieDe6rQhE5UkzQrgXSzSCLUE5irTLW1KQnNa4cgmP9Z3WSmyXkGxgSSi93ZySzQrvko1vkdG6KjGahj",
  "key22": "k5BjqynAugCRbLn5BXK6G5TWZ9oymLNmZGU9d4JHxZtjVsWAtieJFPaHNMi4hpcEGTTsFdYdJPeAdpQ79V6GFog",
  "key23": "5pSU69pMA8QEYsj9mGA3CwACjza4aZUfmNdAiyt4QeYMxeH14cGGiVjE3NCVdoraKWKujRTjktMo97qSaJRv4e51",
  "key24": "3M6uvZmNki8QgHYygx9qdEMufEhswKVrtmn687YxedZKSc4EJBDExuXwYXBwoy5nUZTjqUeN24W8ZCbVdq6eWdZA",
  "key25": "64o4qM1wyYUBmcjvDZdYU5oaPzMTxD12nXJ8h2GEhmmzEJjXxjgSLJiM7eWVB8scVyJitbDRqPCYGRaU9S9LjjUG"
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
