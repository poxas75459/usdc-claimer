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
    "6R9TrrPVUDf8wh1WXjGMMjWX7NebDuE86aMdnK7DWEQW1W7EmiBGxi6p9emKGoMP6wR3w98aTYjxN4cobuNwtKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k1q7WrtkFiixeT6DHHkrH7Zfov6rXJ76W9CcXfRa3jpKtc7MMzz8HjGQ9wmKDA8SwTHX8WsbDwFiWP1ViQhyVsW",
  "key1": "4eErr6oiZmskhjpziR21YNEgj1zN4bVoDYarDPCmFpPDX9wEqJxWZFfHdGadHZxpAL1pGv4awkBgJDJqZuBd4ZZX",
  "key2": "5GsJwWWrxRJUHcf3dUPWFhxRUhysrKFjMeHf4jBetAJL2quPwQAokXV37R6d9UUi9rgeeiMrmMXkiUc39q5hDRpZ",
  "key3": "5SYKQTGhTZnXMbev3qwefVU99PMFq79zivypkjD6K4va8ZPNA5cf2q7TUDbbwa67HqzJhQCospxaEocQ5962a7Un",
  "key4": "57FweaGAiwZM7HbYqXMpdYPxN2z9GJxsM3bJLKVYb8tijEMHrpQy8YL3ponUWjPg1PNwuzipvCdoWwQyQXmzxZSQ",
  "key5": "4B8hPKxQ5pfyJzDfeyQR6LW5jpE7s2HJ33d9PvCEBL1kgbk3E4JupDDgFTtuv4fo9PGtKqJVAVVhfz2Lsmdzdt4S",
  "key6": "54snbFdqvVtiArhVtmnD9W1CYb53Fmuq45tLWf6xEpPpnZ5TthHtEb6F4WrEeu7u5N45xxWAX7y8SX63Cb9sVScx",
  "key7": "5jjh7UgKGhU5tTgSyRW9jJbBzeY6pG2mcgC15svm8SehMFQReaHKEp2wzNFo8h3RWwaRBnFQfNDG2pM7ENQnNei2",
  "key8": "jdG46oh4WtRZYprJkjdqZKGQEr6vydS8GUFo3TweDrmmSX1LQLXMXSqSu8sGcdt7zu8mgTqREV58gNn4Kmz6YAk",
  "key9": "2gYKC3Nf5eqV9Wb4F3NTFYFoGXQpkiFMgAk7KTaSvpo2gyGi5hTBY4WGByy2xf5d1isUHHNKNEe2fEkziGkDKbJM",
  "key10": "5QmfX2yViLt7FsBqWSMj6DL4ZGUJtQUzdw1F9Ez9vKNi4c6D54kDKissjuqzbWmpu1L5fbnjXkyLN8g7YHPs5q7B",
  "key11": "37YEQjv8PBtn6Uj8oThb566qws1HRN2zGnCKJKZWLWpV5CKuVPuU7Vsw7WPY8FbNMeW5MrJAnddDbRCUrjC7aTxC",
  "key12": "4ryn2RanRBdoe3jcgxDPB52KQknCdUwkFVBkuZ2qWuGMstEvtvtjJ3LY1CjME6y7q3JmshJHmHjhDqDdmzkyh8qh",
  "key13": "3QRMxZsoZTbURja8jMg5HSSF86emBETkmDCjRrCaGudjvn51kjBJSeb6BfUfKY5PuhrzoRgTQ2QQWw9gLSHJ9HyT",
  "key14": "3HiDjHR3e9ehGLUtCfNyCosXW2edURY2S3bP4vd2zy9NNZWwarSTmQ43ULA4DxNED9f7uLksC4ihFG8ftCVQcQaP",
  "key15": "61Zjsh2gvCazF3rBuS6gshcTG9QqCsrX18DepcN2xNBLZPFYyY1cVmN4UxUQDy4bHWvRGgTFnGZn5HhXg7eQ4ea9",
  "key16": "4WvMJxWXBC3AewNQMuiMDcNWgTDX7Qa3BbH1wBpaFsXdAWF7sGghJrKAwFfZ6gSMrYmHckgHSEYXPjQMJuYh6zjR",
  "key17": "4cMVFdBDLtcbkYsdoqc5wKsjpxgEBWQoqT93xpMbL3ACj8CtrooFmiE5TYr1gshrPoSQB1arXeEYuActgJKPfDHW",
  "key18": "2pqkfzNfRVZ93PTA3Vdr1RnuujQSHQ3USiuVid1wtbedqXTKM6v7gDLkYzGCkRDWM37SQjAiimMdazxJFywoAWu9",
  "key19": "3h39fyhNDKxEFxP8rocePAeefoG71aq7jVAYKtzF2AgdxuWV93fGxzYnXFeSVWsgxuSGE2UDDStw83jbEC6iQm1B",
  "key20": "jgphdihZtGHuVf13VSo7STZjFMKBC2NvQ57NJGVDm77FKf2wkQ5pophy4n21wAJws1g1vS4WYTqs7ASyGtUUfCU",
  "key21": "2kuZVYnCP2msAgZUZbA3ZaLx3DsemDFKNBBHt46cJBhF1sCrgsnmUizYJ4xc7CmgNG5SQ87wUHRwL5jK2KZNi3UB",
  "key22": "4284vVz9nftaeBm9Uycmv2dX426HNcYYfYUVSmfy5SYPesTxMCjiedC5Goqij3fEhCZMbjj39iNu6K9FtoRVYqDM",
  "key23": "658DaHfyA2xvPLkgsQgauG3WaXUg1QgWmn5rSMAjdDWTxW76xdAcRBB6newyzrBfN72jnWznSYKTkSaowc4stw2A",
  "key24": "67c33uQssiS1kZh1pGbVQz7ZCxjimzMr9D32fc4SynuGMCPXFxZz2ud6iKEnpmdubgLTqqpkdjswTinz8BMymXVT"
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
