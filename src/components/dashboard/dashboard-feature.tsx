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
    "52FzEQEN8BCZQ7D7HUgjikmr43sb3voTgPX78AsSYTrAWEBfdKzLLoMGuF8HNyj4reNh47Ug4uXBD1rtnFq9rWax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zvr3aMAFbLn8vRb3CiK2YGXexh7s2UL85wQ84hB8gHbMdcXdAtPyg5ShuC7P1HWKEuZDcKGfjj85Z155FiDDVMG",
  "key1": "4htpKX23DeSpP9rxaeWzZuwpqAxApz6NY4chQ8nxzAR8RDiPJ9XSRevdg9jpKsWG7c3bXbC26mZVPegFu54tCezB",
  "key2": "61NV3YZ4kdgAexr8uWNs3W41LKwEFndQDdxQLWtovdsgdaktRHwLEYJKmoJocmW397qGXJJtMa9wpB5nL5uHAZbg",
  "key3": "5e1SVtqBdiELqjvDie4MuKDzg213nnaaRYrSvx44uvDpTbb7QoqU13LrBo8q3WJbmQ3RXdGJpLzbmGJuxTJp6qKb",
  "key4": "37jUmatknjKqBjiNsZN3Xqg8mZD5RcxVi2rE4dLmt19713473P8jVsT44xBBoJ6P7HanmpvkGrMy1BfGqq3fqqmN",
  "key5": "4CzXoxKaMXb2fvc5mbFSTnFNXj2vcMvXRPmLVBjqnDAUqfKSBwYrbdtCkQm7x3qD5sBfckU4qzobYCej96URxWU2",
  "key6": "3hh7KX9FnJ8TH1F1pRZf4EaU71m7byGi4RwPxsMGgK1XCQJm7khaiZypbc1u1761HsqPWLes5mKESBBjrw2qRqZT",
  "key7": "5SMGcHmEhFLXPVE6MvadEZJqHn6kHJvq1SVUJyfurRmjAsRLnmghh76pTRpomqZwigGoHTEFhykJCZgB3QQKU1TQ",
  "key8": "2Bj1NXMJ1f141BrfPFgNA6czK9qFCDb1jeQr1cV97AnGQmyxEnKY7XfhYGttG6gWGZPm6eP6pTqLWAdMptoWHjRB",
  "key9": "3mmL3PTwsYUWDNZyedw5SyfTQgCU58uY8FmzA8BrtiGxU2V1rdeihTkPvnS3A66NjJbbDgBZoStxvAAsM61BzrdQ",
  "key10": "3WqUx8JT1NBYHRHPie9AVQS1t8GpcHqMjxusdXJQfLLYafkFAU9e5rXLw5QitrBSnTnPUEbuwrbm812irqeSV7dz",
  "key11": "5gyxgfLzj5tmJ9yW3ZLyYVvYPTBxYqxbrhC2A8yFD7HbCzPkL6XUwGsoxZ4NKxihCyuKf9JKnxK7MZpCM7jcbhPy",
  "key12": "5coHaeyaU7ExSTAUVs9AzMi3pUVnr9EuzYmuXsQdTwAhXhRDimkKSn4uBHxDnHTCJyCoqsndeuyKQfThjFEHkNud",
  "key13": "4uLanJPEemVJLENnzeWcFPgUdcZb6E3XF8cK2WG3c46r2Jkse28timQTcNjgEwyWJszEgXTTycJiEjCpRkjFHXAm",
  "key14": "5fJjpBYh4ZrWx8wxR77zxoQHHgzb7A2rNJP6phAHTYT7AqTCqr8jTvUjEuUF37cTgerirDmybjdxcPT4C4GoK8tn",
  "key15": "5YjUiAxQak7feCVTqhmeGdiPY5vxfyrAuCvjv39DBHZxEivt4aNFtmQJCSkjg2SXCJc9mVVSe3fV9sdL3QFgwQkU",
  "key16": "zVE9za7ap25TAt8Bmi5Dai1ZHVnxa7AmoHhsLvtAKcoYqNHZTWP64JgHpCQcim3xn7brHi28rKMEFq74UCznzYT",
  "key17": "31mc5okHs5kZ1eqMJQcQddcmYQ9r7ChXFadMxV5n6NRnjY1Tev2Gf6SKuvryHz5xrRfrf8HxWsUts2iLPjiQwuQj",
  "key18": "3ZzyXMNe4f4Qqhoayh9tQ2QLtdLeHPHCUjtm8qTyS1ptaTuk2cawZuSPFYbs96qw2dNVgmMF3AWHQgmdb39VnYY7",
  "key19": "5nGcMe3kr1EZH62PTZ3L9XeCSbn5aZni4Sih4fS64gqqZRczg6nBK9t9Dq9guZPXh63KJ1rA6Fen7faTf9rhma3r",
  "key20": "4hjwgQP4hQwv6Vn6psRhn998b1LWZHb7tKdGSyhx1hEnzTk9DfjpVxZQ4NAZkNsKqafdqsFkugnv7JNZ1kRHwBQi",
  "key21": "5KSvLXY67MYfSDXc8ogvC77RcgoD3kfuhgUetr6QHX73gjxfdjgJZT27KQ2pP83DkPzVdbsa876doZraQbXACNyg",
  "key22": "qkzm7tCxVgYcwFDGUDfvn6VpTPokLsZB9FZNf5WrEXR1G5xa6tjm2FYHR2QCWr1gcYgqTedZNxo2c2MWxkmcC6Y",
  "key23": "aZtx46dNLNH5STEpKMcir5dnzqE3crbFPRLxP3Wz4YXiufbe8SscKPuVQ26xvyNYUdJ43ads5veUhzi7bwc6n46",
  "key24": "4q5UxbTCNx4AHh5CrZXTodSdXkgDn5Ws1GyJhnfP8rV11cRTjqbbgPU3vZUtTHeieywrDGkuoyXEy1gMiDmKN9gp",
  "key25": "wL2tEDv3j1jT6dMjBv3tQXcrEJoRrTuGXv2z3aaCiTLA9rr3Y9mZpsnT7e9qvE3S5BW7jSjEip5kPwZzNGp6oJT"
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
