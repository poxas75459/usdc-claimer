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
    "5ajPnL1sqotdgggW9JmtWWWvSp6ez6AH3K4ub7T2fUtQzK7aDJKK91JGxEdg4QrfbeoEAEiGwD2c9VtpmcEk9FnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qXvoYwnGtwT7FMqqBESabSZHokmHZdz8H7oxnEqYPjXyU3KBxXjxT69QYnzCGtJVizXPCUbUWgMBUFjiCBz7mNY",
  "key1": "2FsCAoGctdJ2C92GLpZryq4zR9tTtisK5XbBP4ZE2oAAVx39HXFyPBQoBR3roFKLjDbPzFjKun8egcaUj1avWdUH",
  "key2": "chzaHKfigaNuULCTyuWeSoE5aSHBkxcmzCksoxx4ZErXERSsmfPu63bDTRgHZu85dCZzmcdBm6BA7gNc9yfb6Tm",
  "key3": "5cccSTpDoh7AAZqNBz2Woq8xUBuLhHZdjSTPwWXyfxFxSS2Jb9Q6NW9EjDwiFQPW4juHWLS9jpaNxUKn9XLcdbUw",
  "key4": "2ZmBCt8We2enUeckTmRWLnyhfiMkEG5mbhDWKExMnbA1rSv6oL5ugNPbyQf8x18d6LR4J4MGpQoc53NzhaDSroHx",
  "key5": "5zrsK5BHLcGrAkU3GXapmjyrDSidwVGWjbGGHjVxVjtxuGqzJGjYyT5b3HBYo2egf9Sqck5hFXymjWrzRYJDxnNf",
  "key6": "2jbncNo99p5EmPiZqsPA81dJ5b482GBr67b6L2B8o7HqMRjdkdYNoekfb3upxqTZdGAuGST8gFennSY5zDMFr4RM",
  "key7": "PFJ8eDhhcH4kKq9eWncieEsutfkfYncHPy1rF41JXEXfiL4vemY5hEnJqUP36GycLtZ5NNJ2f9bMvbBJuCxztQx",
  "key8": "2zAZkTwtpM6wyB4cw7Uo7n7giWqV7QerHL6RydGvxcbRWRVtdHS7rjDEnQSsXyLojPyKAYzay496SfF8Yv7U4RMy",
  "key9": "1NGeZKXZmA6fuhZn2QA9B1gxA5GQDqHLChkQRmk76pwMqdiq2HrHm9p9Ad2VzCnExEm5mf5oVKk31sUGQRxtgXS",
  "key10": "66bcg8b1MzEzF62VyxtbjHr8KMCYSZXZWkjKHZemcbEhdK2vv23pM9LiMRsMExsMpupBnoNJdkBsHiFkxxjNHtoc",
  "key11": "5QTN9c9pjECnb8BSEZm5AV97oe91CPzzQr1UbBvr3KRjDQ61CWY9YjTcDD8YBarWXWmFEgaKXfTTpuSV55Yioff7",
  "key12": "34SCRkjgytg9puHshbP5H666qCR4eicU2bSHfPCGo6MGKTPFDDtq7vsNrWNuh2mmpHAaEvGXVwD9s6qE6UrMY1Ye",
  "key13": "669fjRzohmGswXVBNwX5H6tmNN5cAXZnYnWD6w55YXbH9cRgEwNJ62hT9XNfoE2qcLMLuEV3gVyf93dU7hyH5v1z",
  "key14": "2XJye6XiedfFXLuNeocHpbST8Md8AUZpCgSRrjvVBo6PAo943e55qxxYhYZjWV5ZjbCjfYaiCCgr9jJwpCigjkQY",
  "key15": "4j3tqMG5EyAfLsL5Fcc1SP9GXBVXLawTiEvXPrpKVbUTuWxFb7YFwSoWrUYdAW1im4xu6pVywMwy62ox8J3neFVq",
  "key16": "4SiwoDqhuJNn32E1KYuTdjBqy5UCo7BBB66bcRFt5Z6a8CP3kmuZZPwejWJ7hJTGhRUywjyxWBcmJhqxoEZe2FYC",
  "key17": "38QXxGJBY3VbgqNvhT3kHwe7Pvdo5r3NEBFGNtzpto9bTW2Ukdu4VfKZa1jAa2VwhT8jWsgpWMaaqu7wUW7YPknB",
  "key18": "51SaFHofunufzPsLGajgRgXbe7MxeBwCGCA8dmCsjfEGSGEpyv8G6dQPzX4ZGF9GnqqFhiVPXP9yY4EDUYTABpxN",
  "key19": "2qFbV5QGZTsqjaxPB73Xsma1oZXafVxFb4SFaf9xzmyzvMFBqjv76MjcjDyDAZ1smEwj8xXVcLVcCKqDAEHMm9Fv",
  "key20": "5r3E6PS96hbNPDkJYw4NhAkVvfupCEdPgsmcsHAjWu9veWP4y1vNzgH21gqLqXpGqV9eeEUAAXsFBNRCi5tQxz9f",
  "key21": "8WgYyMuJPu2igfStKcAMWNHiHWxEyk9YFZz7ta8nsEwthjcAcdMhLeqYCk83gA2H8Xpj1DyjA2FLTS9qiTqaNwo",
  "key22": "22UMbNMt7M4UozKCevUTqjR4MNDLEg1A98TdL96z35T37cP6Bi71cN4xXopPsgSkYiZwi2UEKamQv4APomyKptjj",
  "key23": "2X25PvfkaQzNz56gQK1Npx3WR6QGKJunHWTkM16C4qMjeZU1BvExmdDHHcpR7jyvv1wHkWZkHZrPYQiiEp5bESS3",
  "key24": "4rejyJrDFWnNbLnvPtoQnaSCMnVveh7RbgqgbNqMCoPfDpxRgzkJuTCZXLvKernmPoS6krydt18g7DfYwcNk582t",
  "key25": "58D1Z5PsVHVG1QmFuE68cJdymSUt58UpVRcqNPvinf8RQTykFQFk5tUQx3AQaDfbnkj1chiNipjyZDWdQMFnBYFu",
  "key26": "3qTWHVLNipQi53PCaK7yEgMDFTycsjugAycKKYy7nMT5mh9p3ZhSp6HVMi8whv35WcskzHiNcqhxL7zWS3PBsHV7",
  "key27": "4QLYxL8T7Yeb29WBgBZX2JAPjgiSNGGD3dXkojU2JJmxNpoeZhfGee9V4XraprrHFwiEA3DdNg1XdNJ5HxekMvy3"
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
