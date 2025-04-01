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
    "2btPb8EbkY3UqxppbpjBm4yq2vSHXGtEmGXRk9tzuVkyKiaP2Cb9ssyH2oGz32ujU79CBh5oJpMJf93BGaonk1Wj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gu5811PYty1hiR3psw3rETawzkfN1nPQ1WARVm4d736Vo5NdrqpEEBeqmWa5zTMNfFVTbpzbf3t7TzuFGwzuHsM",
  "key1": "5ojVLWdW1Wfw1g9iwabutLf8QrW2fJHSzxUXDQ2J8JreZaNyyVkBwDbHrqtaoQLgv746Q9AV7BsncFoygBFZE5LR",
  "key2": "37rhqUzjSWprjwd8tvWqeSh5mFS1maDyHtWzvxd2awPdAWvkU1kvcNJK2gN9En622hDhpYbm4KBaiGUtjzRXZYhL",
  "key3": "5eFrB9QmAkgUcNoHaprmo3jKxpKTHp5YJhUEc1vvYVPJQ2DgjN1mzd5RRGAdDzrtyFAjKegN8sDUwy86ybXT311X",
  "key4": "4gWkzN8R3zMdxWSCoBAEBVEYxwDFt46NUUQEK2uiBUv5gXJJ9a6mJtiixpHHfgYn7mL37VJQv5Czug9RB26UZ2Ka",
  "key5": "3acth2JvSuhM4F9fB8EJrKKQ3G2GVTyXmAeLcEZW4cePvzbSejTNCgVcxKWcitxw4HHTw4WXHY5znbvRLiU9cTWf",
  "key6": "3RUeuwB63B8T5qGicQTHSH2N4TFYSt2tQLgwYQmGTW1m6LFwEfT6qvkJwczFb6Sga2NcYUikpyZCFtHKHzraDGFL",
  "key7": "3GgZD13zUjXdfZDLGLZNBMpFNpcTyfEZqaXU2TPii38KqHeuMaSET9ucGYSTWE2JKKAx6ew8nT7sJYLUaPuDmqkX",
  "key8": "4b5FSoFyP8yq8kNFWzr1VH8Zc9esupK6pdYMv9v2Svs1VK4EeeTybEAAokbgDtbayw6XQCPWTDcVopeVYrpANc7i",
  "key9": "27SQjdXtR3SQhre5iDLpHC3v8zXzrMBVsutjgLWNwxZcdoSiKkMKxSbx5Uva1TMpAtpNanTKKQoUFF9cgiyTGSeW",
  "key10": "4H6G96TdfVyfvRWXR53MK6LHiSi3ibVeQcEAuY1bUhiQNhT1uhUkTZqnXJo21D1HJNxMEUjmNX7YWUhYRTAcSAZv",
  "key11": "3FeMBXQ4c5AWacmtRbU6AEV8aug8gZgxqqx2qmhqWiCGBwiFdQg9FwKmBiAJdZdDyDJa7EmqJQ4rcSLyMFKA3YUT",
  "key12": "4f95BLdiT6upKzmPSKDzEvdD8eQYPj3X6iEPt92wtN64Kax2244koFddDvNEmMVUW9H7CAuA2iE9B9CsRhGHmf93",
  "key13": "21ndVuc3QpBNAguJjZdmbCv4azKq7Q8s3tVojfAsDkUBmbygbLJRQ6hFvnSqveE6A6zTkKX7613qpMvqxxKddigc",
  "key14": "3atKoepAxx56guSwp8mhgevE6uU4NYWzbdGSWy6GmqAcLxMFmYGiyE3x2fzU87jPhso5yfssqpt4pF7W2Zxvp471",
  "key15": "5xCxjUcxyju1YhoPF9w6rehtnFVNSi5LmGLp9PtGFwwqR8FDty6td2gVvJwB1RDHRWp7fSNQwdcWHd9p7Qwzy9gS",
  "key16": "4Tc9igWmxayPjd49xVhqikadWLEKGqEZDBgf8iyNjhfGR6sV6cweBiW6muUi5UYvj9Eq2cNjwAW8QgMeDTtXwcVC",
  "key17": "4w7ZzCij2hrQUVjci7PW8Fmko69xBD6DDaZfgQ4Y5T5GhtJvSqVBAjkW24EfpkuazrysQzSgdBSxGmXaL6jaZ7AM",
  "key18": "5UkrpepjncEuq1Vhbxfd4Z5oknSnTotKhKmXRJH4XEoSR1iKAmoYXy5WxRhqsjFU92x9h8AXJTUbq9TL4rSYjf8J",
  "key19": "42XrHwvYgXd7FsqdzC4j49rY65VTAQFBoPYwyvehU4gjmFUoCcMbpGaS94cYLM1uVQixsqYnBk54XDuDtzehA9vh",
  "key20": "5HET81p7SUiUVH2kpNH6VqJUVKfJ3XeRYCMsqg8rrj1ToJhKeCYWRCStGNyDQpJw9RSCAXsxQU6GyEXak7m6ruaE",
  "key21": "5WhzXyoh9fNVCGGccfApP6z8ib48FPK97wUGdUWeqD87Q4k2rg2MPhRBzmFP3sruMgUM2k7a3q9ABdUGJh8UuUTX",
  "key22": "oGyFH6c37D89XHR7nqnWdQsmkFCJJkKicYeteZF8ApYSQPbam9xU7RqCA9GZM4inPiCA7QQDgKZBVPeYMBzVorA",
  "key23": "vXVkQBWUGC9u9vjZnTiPc1aJZhGNE49WuP46NE897zMvRc7woR56zW9VYsFeP1YNng2byVqGs9bAHwH8XdGULLF",
  "key24": "3LvYttwc47hCGSXq6AFnqsYKPCFyxS4mMhhu1BWh59vFU5RUdi8QmKmiDWYVA8DupThwfZ1uprHzu91Zcnfx6Dwp",
  "key25": "54F2fQEVFDFtyM2XeKRMUNfaLGwZmGdxE9NDisK38t6JHMwqMeibzERtTorST34UmBwgRvKbeipLuFSXLCuygKAY",
  "key26": "4zwasfYyMc7zZ8de1Ca3QmnwXDAy9ts5qa42fAAa4hJLBKAArZcPSHDrQQaWgSNxQXK34wkxPee34fpYFxRMZWPX",
  "key27": "4Tr8Tu2FsjgGdacbcGmas8r7zjkZEKsuwp2YrEUmmjffqHjS6ELLCa9QxeKGmU5wxSaFVfKYYhYP2um8yuznc88F",
  "key28": "4U8pqXuQexiHayUEHEAafprwpBuRYNy89XaoXQ28T3rgxyxQ7TuNNQiNUgtPQQmTpbwqvAtBdC36XfmLMXPwHL5Z"
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
