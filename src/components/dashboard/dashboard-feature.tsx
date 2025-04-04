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
    "5QUueTyyEqy384KHCFNahvNVbdD4h2CRvhKKchtc7cB8ADggyYm6qZtRAqm5DYYYvv1kaTHyyGR6f8YFw8M4yxhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RH8oaofQg8yyNS537Q3GWCP9dZ5H497jTMre8b2v6fRpPGSRWT59L719QdHbqAdYYprRiKh3DKj4yP3Kw8Nyc8p",
  "key1": "3MPnXJ8S5h33SqxCWVAEbSJtwLkXQdntuzKBYy1xW3vh2caxeUnEXbmD7wqmnPghkcoJcvBxGdctxCtLU1V1yfzz",
  "key2": "4SC17fhtvTeNkcVW71EGvm7zZx4RPAzy6P7FMUFgSwKxLfEYibztxdJ2FRfJCvxh62bTQTB1tZBKA9aZPbsRMnfh",
  "key3": "v3TtJDpB6nfJb2h1NREarb9crLCWHv3WY8dVBLPhysejCYBgnRiLZumWouLqaYui7HyBDqRzYTFbP6XVeEJAEoZ",
  "key4": "2kZRkm5DYnnX8uT6yTWSN9fmEWxcmDozi3XhiH5gBjDFdg1iTgjySJo75bsrM1pvU6973NnvM6zoWQ6fgjzWUQwX",
  "key5": "5zuz4MxuESszbqGFafpcNkwBvHY7WJrb9ULD2ruucVGq4iYv8WEmys7q1zkbVeYxfmsmxbH89RvFEscMfrAqUQce",
  "key6": "fRAyckUmNXCqyaP51YA3XfmXj51bLip8cfbE6a7X8dqehqsoRFrTKKCxGfMrgeRLjji5fRpVQpzs3MAVWbpwkoy",
  "key7": "JUayrUtgoeF3qcavndfHtbLKiRAwvD9MFEKEs3mCb9XcnJQXGhQSBqoVMygJCGE8BN3qpkdQHNTdqoFi7s2XMvG",
  "key8": "2CnGu9iUAPvKoZVGQpoUuomFKAKrZWPVpKxwS7anS68tY33c2TxMELuh2CDC5Dy9i8F9J8brZVDJZ52WQ4jrh7qx",
  "key9": "JLPpqyTpscgxLmYJWnmsv4Wt5tAxnR7JVUffudKCZxBoUdyCy8SQD1fjU2UY7V71u3LDVH6SEdyZo9izYJRCQRm",
  "key10": "5aMm5Bjs354A21B7zuepoSKKN8rTw6YjBg1S6qnqWLpU2n1pnrFtfsgSusYFwJqVs5SJ8hXo83d8r8QJ6xwZQqbK",
  "key11": "3Z9jkN8NyvT3pkU1UCmj8MHcUyhfRnQDPmMop9VkkjsAF9kzPBLYaq2L2s4uAoNdb2EgMYzVAwkHUbRVSBLEiH2v",
  "key12": "4VE8E79KqhnuzCH88A4syxMmQu4KJffBf4uJcSKWQjG4XRMztnVGsZR5nmdks6BoohqUmXLUrPGxeTzGof3TVLrK",
  "key13": "2NbRXkK7u3yHiMeaTAsgbVsEHcQSALSRChtKYgYVaym37fSzNhwSs2WqoTsVhRrabuc1mGcuL1DmtXBmG1rUXAyN",
  "key14": "3uRNyuj56LJw3RrGqdxnj9jYJVngumPffabhDgeVC1NhrUMbqoFCcRZNMuQYpou6kJto2GN7SWPeGKjW7YkLZYr4",
  "key15": "326cXymF2fKPBzcie2XseSMFqJRhKHSj1yvjtXfcFC2VE7vsVwuc4zSBYUSiqzFBfxqgbKsY5Skz7Vzg27cEJVsP",
  "key16": "4Dtektp4XoZ752ptpSsp6jSR3f1ZWpJK5EPQM7vguf5dVPtmAfW38RvcaTa1wdfSxyyA1XPZjYL4hfFBhxRSJgkN",
  "key17": "23j49PSoP9J4Z2ZUUgQgi833RKwfKyPY7SXoahE2f9Coz3yL3dW1VRwG25jFh6eUtWUgLBzmDgUFMgBYWPeVbgzx",
  "key18": "5yoZcC6UCGoZUNhfXtWS9hg6UDbMb4S2oe1ofSZTLkzMDgKpouTxXgVKGWB82HiCREHjtdEj7SYUoFgmEiQ7fWTK",
  "key19": "5Js8nhPn5o3uyWUEDsHvdoZi2Hg3xJwX9zhMBnasEiGt5VsnVXdStPYKoDEMvin5njzCf2vshYhS1hKBYLSFRsJG",
  "key20": "3midNLgVyzsCoujMTcMfZxhg26RouEHSYnVUc3mFebYjX7nhZQvRhyKtzFbLuFPPRXJdn23HV7Jr6oGEwJ6aEdUK",
  "key21": "3vJVPMYtqZMGprto3ZmqkVYtkeR4D9Eit71Ysbg1YuGhhdP9Qo2BTbk4KWwZwNnAsUYpmxzj4Y2WhgmcquWavXGd",
  "key22": "4KFSrjcLzKj45YUoYQzyoJ58MdA8ayMTGVby3HnCsC3vLvcFYLhv2Fec5MzCjKh7UWK1539qwHzP9mQTKmQk6ZiT",
  "key23": "3zn8MEREbrhkfjQtAD1PB8yM3ZdVFQZxRbB9sSmXBeYD3eoLjMrrzqyHbXsM85xCF2o2vm6baPpwwJJTuFuCzmzH",
  "key24": "3ijzCSZ2uvNe121zthhbMBZCeubCUD9YDR4a63bqGf9YGXAYrw6BQn4axm7GREPZVwEEw1PMshi7ZtGCqrYPziRC",
  "key25": "vbpu6QjZcQc7JVDXMPNosHwLif42dZB8GywomskEapypk67SPxRfVxv3D4Wc9y8FQc8t8YgZC3t4x7Y5yAGy3fY",
  "key26": "45HSakTUzYsLSQNsE28Ye7Z3gxNY4EG1iYEG5hdGxk5sGy8kH8FH5X8XNrYzA6XLVvS6HPNyuBtWX9HeyTMJ3VQw",
  "key27": "2UavonfwnAFS13bEL6mHRXwmrSVWiXCSyiek4t3PyLErQSynczjR1mejZrVouFWWLcnNptvQEKNYCQT1BnbzGrPP",
  "key28": "fBPJQ1NBzRWJzqvATUnAcwwfoLDBQ9DEFLw6Wtxsjf9q7zYxYnwtwuC86VFcB6HfUnHFffUV2HJzDfp9T2fa3ym",
  "key29": "5LyfFWcWvu5BuiFSTFoXfLrHsSMZAkyV5EuDXhAWqE4vtAxycHjk2Q419RJ9TvAVr5PT2RkK4ysrKFFSHrJTefeY",
  "key30": "5iT6VcaDutNbjmawptbaUpdA1XHuZZ5mridnFBirmvEKyCoKMHyruF2JCm2gm62UgFT1xuuGSyzDWqNm5TMMfyyA",
  "key31": "maoze1WLyDCfGXEzEA6dZgyeBY87q3bE3H6KPwK58DfPVi6xyHXyS9Teru9R42Ah6GrchzRJtt3WWvGcdT9DA4k",
  "key32": "JqpHjVkYm2eY1wpnJXAmNiwUViz7jgRurL4iTJfnvSYLvVa5gwqrerYf5C1j1sRBFdFbJRAbCkAB1wKRuJv5DWj"
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
