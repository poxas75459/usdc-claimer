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
    "8emjnAttvob5y5rHoqQuopX4CmptiQzauB2FCAXsqQv5s82Yc54wMtjgKqLHNjwKsZCxZzhSXwzc6VNw7QfQgcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63hYNyzzPRiWL3eAcKYLm176NPcEkGM4KcgpsUGXTxMJMpiPN2LonAC9VtpyRXTm1SFqJzQgyVU2SbYGqt3DMVSN",
  "key1": "56dGysbUmSyopYbdGU3fcJBCJCDPTv4BMxh9Cd1EuskRvz7GpsQMZi65U82LVRrEtqiEnVtsFMTKCXSfDPvogmXY",
  "key2": "k9no6Nkwt75xfDDwGnGSwrfYbsK1sxRvxfnzvUbZXC9cEZRMFUk2C81LZHBZy2Fum5SMot6hM97G9DDZSpCFy5i",
  "key3": "oh8f2hFxYwJ9d9J5eeLSKPLLDYr7EuMcj9S7hj2Lbn5vknxjfJVNjQaQiS5NjoQQ6Wps5fw9U6q6qAA7oiG3aFY",
  "key4": "4qBMrbxuJAU4gTjv1pnd9mJxiQdyojNFgWFFcsUNMh1BFHg2YrpEMxofykBYMvJJWD9xBbcCHkCbik9MAFWPQCsu",
  "key5": "2jX4eaaoNH6Yo2qmPXFWBMKYvHQskExT7tzhUiuUQhYYuHhGdxpf7X1JcxPnsAdoyk4EvWHFAqr4xFNZsGuujGVi",
  "key6": "3Zt2ugEV4knxNawNfYVNH1G7ePE52kkpGHmvUFspp9oK9QTrAepD6qUbHeuXoUqMBp9NFLMzbKVd3TZEhi747fKx",
  "key7": "3mZYN9sQ5xgrUhQRwiGZtkoRF1oDudoravVmYkZg5TiSdibb9ecBzF7F6R8tZ1uRpPmRCGd4vSnmDRDCw99oEUnD",
  "key8": "5gnp7KfxU3sf1zeZKMPoKXv37r9P7Uf3EPsVNPvbQnSwsTjKkihgSmQUyi3JnhKgn1KJ2izEmUe84TtH5gDcogGh",
  "key9": "7Mc7rXddEfwKw9H4e4XbZ2AjnB3HDdLdAJKQEwQibgXvdZS4PKvb9TB8bdZSBVxNu9DzqP4NtxGjYr8xkjvChKz",
  "key10": "5kjyKtXQwTvMS6ReNnc5Pq9TTPPeHuaZpkNp4nZmaVz3dBcDpmKD6ZLrB7hwAN5fw6K89Q7BfVPNg3wWsGitDgXi",
  "key11": "3gkW2sM7WkvDnW4dWJc7KACFMiz4DAb6uRfH7knTZUZTA7jGSfptfUzaNBK2dcaSvryktzj5qAjVt7FFBAfV9YGZ",
  "key12": "31SQ3rJutQzNhzf8yxMYrReqWbe4fdvEBQhsexPqNL12p3XD6HonD4Mc5S5i66PeeMdP4L3aprGxyV5sqAcyNz56",
  "key13": "wwTgywr8xRAFq7VpUuCW4rtY6SyDdmTKTrbfescxLKCot1UhwAsCCRf3RiHA9AbnDynBC3UQKSsy6fZUP8LmNek",
  "key14": "BGd5jRsmtDG7jyARPR3iYV9EDa2pcpXcnhbRbb4E8DzL9WR7f4PMsHhoJCYnXxFpJHpVu4UQ9jByoCeobffXX4o",
  "key15": "WH3Ew1FiJLWBpnnz4aPrtcHqG2hmypodmNVV8fkcockCrkhdViaiUU6DREx5ZnZxB9a8MHTSQJqWpacKz9d3Ydy",
  "key16": "39vfVU273qibg4crbxj1rvkUEz2vUwoh26Gm33DtqMQLs4QcGVUsTH9bBi4M8TRcKJSiF2nvxQmTyK72FQUrPZqo",
  "key17": "564FTk9ZNXc684KAMK5yxR3HxVXrxXkqJXoZtPyCio39S91K4eFD2sbQw3HTGycV4NQm9E9CQ4Zm3i5fG2e9r8dg",
  "key18": "j6zo3pquKphzDsFJTDAsaw26HAdqG4fKvyNUa1tjmN6aVQgo1ifBWZGA1ReRsuQDH9UcTwsY1fVwJhp6FPgedbq",
  "key19": "2twBpm1HxLZ7NY7P49a6qCQjQcyat7qUPr2Z9fU63s3cK1x3MgcBZQtP8wcs2ZQqrSEofB9vjkPDoxx1jYWUGXRH",
  "key20": "4DWqdgxyCwg9LvKnQYXFqcDstDEypqaSzg2Jrjscf93JPpwSQCpA8DFyMTQ5qDgEz53khb6MphnN7Vi3RFd9xxzr",
  "key21": "46x9L5M4woDEALhDquoYyVUAEnNXmwhcexEuAtfZzmZnEFZ7JJFmbu8f9nZMgFXGYyWmQh47is2A6WEqW8x83pXd",
  "key22": "5Puej3gTwwyJnW4WBVVe7BYtrYufZUeFpKHRoApUzHvUgDrCxaYCG7MJH9qnkL4xr1G2AjNdNrEp3z8uaJtNhmfh",
  "key23": "2kMio6uGYjCUa8UnCSsbiAvB2cZ5AmhxuFY6TuoKUuYpWQJHkD9eyTTFaLAj4LgqpXbh1sqG1GFinpUmoeGMate9",
  "key24": "9BvHdf7UrK4YSk8EJfjocL4VUXCqt4MGQRqKV88EmRFrATkGmHRUkWpzHrbNayhnPxnGnxMMyVBvu2sXAYtYaTY"
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
