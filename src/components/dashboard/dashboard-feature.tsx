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
    "5W8vi5KdMUmV75t9DXWqz8CKTvfBwbtmRY27tHLfpYVPwM51M4DLD4K869xhuCXqijbxdWamuPCw9s57HgY4bXmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DFGmopVuc7QzNN6KvfED81DfYXA5nK79g6S3ewpqDkHbvRdxfmu2VwU6kaKc5wRec6HGXA4TBpK4JdsGMiEPRbt",
  "key1": "3cAfJVYwTBvhPFasjcg4sm5cNKeHw3uV53fngHChZo7GEXPRwLGtUutU8eKhY9ZFaKDbaukNNFNNGJ5Ls2z19uz2",
  "key2": "bRbEVGvxQTmJvCTYMHRCKfyzNtakJaZCuuHzEdsCkd4PtpXmu3EXcLaVwWWBWb7uEPud2PF8WBAUuefEhvVkFPH",
  "key3": "5MkKA1VxbDfcat98Fn1vNnmV7dCVawuhKuc9CwK6MQK4eNbjwXudzk82eWX9KNc3in9FNv8qZ1GkZUdeu15Q4bzY",
  "key4": "5CwKy6GaVJ8Yx57fjPiXN9cP4E4heK9WAZrg59Af7Y3NdWUA1vVRqS3HHUps3GxgzZFQqr81FqmZsRjqQn8eWx9s",
  "key5": "61XzNiMmrppohbdf2Vsofnbfzm24ja2TSqZwSY5ty5H8Ka1rAwDcgBahod3i2k8GSeTkUxCu3VQmtbhYnk4Q3PyN",
  "key6": "DHo8ysmAG1edWvr9ViPpPCrMyPBHHxVMtfqrKHwA3vvqVBJcz8c6qHmJasdpoj7HYGwYsjj42eBqACznxZSsbRw",
  "key7": "2zyT2MLMRxdTVXrdS8VvRgWQETnyiX7X63cC5ich45dnQm9NGEw3Ljegf9McpqZL14FfBdks8G6ZjG8yU7fAxcsB",
  "key8": "3Ehag8m3ocqd1GKCTgHi8fHCQcWhLfQxDbacMPNrvs8BnZywLvTU2xHtfY7dNd951pBLQ1Bgz4KiHLddNGaheTu8",
  "key9": "2SLRxASE3tYaoExnwbAyNFUsuvpieUcF6nPVYNfp86HmqVAWzYJpryKGbY4vrgN29WZydt5JwTAYRrzozQzcfQRR",
  "key10": "4PwvRupRwfHpGDA9bFDXmTYTJmgqT5RV3dMs3AG6kQDMimmaobnPUn2GxoZ8qbguRAscbizqUMNw9YMR3BQkeDEd",
  "key11": "3L5tmopS26kjokgMPvi6dMc7NfxnawbSwcb9CUY1je9RtDsA3ZuTyQuaTUwSkknzmqoUGfPZpa8RFjagVqQFbCvy",
  "key12": "4QFoHME2cMDFK7ex4vsTA8JVAPF4pxX42xbhwE2pcCSpiDD48m9XPafcvKnDWJhBKbv2vonwYWKTMszSJ7wHVaSG",
  "key13": "63E5PAiMshSdoPWNicD8gJ22GyNYJSonsUY8B9i4L66kuYVboia3sDpAsnxFwdH1W2KKERFy3DcuzDArbCFEpyFd",
  "key14": "4shLURifdunzVZjwY9oCQ9RgJv5u5syh91eEpwbsQpvU22uFkvsdbijjCJ9JVNVVgwnhm74Z6dzXmRpcGLYeVfNd",
  "key15": "4aioU5k4t1GsXY5aGboG31ddNpn1pioBWXZCzNhXRCQx18wSTbqszLNT8bXa7hLwcjST5PAa9QKgzUu15iKK3UH6",
  "key16": "2gDNURi3DPE6dSiwn6uUDC7E3XHSKGcYNLKpGri9CQW8GYhgaqv8zGvH6DncwLeYsYQgRnD7dZ6izVvt3uXUGdnV",
  "key17": "2dGaSv6XWKjy8dEbC7nRRgSYxQnHdanGYUSL5WV1dUTkticQFMbHdPSJgKyVi1E8hahghAB8oZiWVggGpxVAUqe7",
  "key18": "32vELyyVitmTve7TDDrweyBcj9ssg7CByByvV9FEhHk5B9fzNk21vgkKAzFcyBxgmXUMETZ43CNK4W9CGmd9ngyG",
  "key19": "4oYyce7wohqz69HwU5DAMDEHExPKZyseFiYBXfXWkH26xvjAcd9vo5BBiX9FtdM2M57kARe82CEVzVyUbTmT6QPy",
  "key20": "4fzkH6Bdm6KYYN9mqY1PRb1B3mxPMS31mMrpEsG9De8rcyW9HMghzEVTx3dPRUHjzyNUcX5QEwUiKNL1TkaCKWgu",
  "key21": "3Gn8S6jj5zA2jLPyVvmzRxNtyESfR7ismyYDC4yfj2gZBd6bgnLbbTdwamvqJwrrQg7TNbSYsFrpGrcwZ5ugAash",
  "key22": "3bqnuJUCUp48Ume4ZutUcnk4y3RfDbJSoENou5ZXWzDPuR35b5BHPd5812uNfHaddE7sd7UFeZBzYwEAbjrMyViY",
  "key23": "4vXARvhaSm9bA5rbDiGEoDEmUKjBYShC2krFEiiCYpZy5LgTXrvjgyDUj6KQVbxpeDqq1tXUt9gZxiJHahXh5AkT",
  "key24": "1Df2HYwK2dkJthG6CVVe4Tr7PfSZYFwpwYWvcqDZqNLw18TLjosfmhRf5oK3LiTptPiJchkwxAKDhKfPGuNCq8D",
  "key25": "21jSF3rUYxuTgJ5PRP8Lrcwba3TSRmnLGZSCpmcaHJ9WCZ7DpqwNdbwjv7BzuRu7sDaSY88dn93cfP32eJthQMJj",
  "key26": "5tJRDzUPVU5DxfaYkmA4Xb4DXx6DLMywZ4eEHmr9MfTuNY6LJmvKX6aVX79M9PAMmVPswFgqKgpdjD4scWkoSTpM",
  "key27": "e7eYJ73gd4ZRaUwnkTZLvMgddun5mhaknwCEc9A2K28o5vShVjnVMgxihHVwDfMiSiQV3PMTbAN5s53ucBfWkbo"
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
