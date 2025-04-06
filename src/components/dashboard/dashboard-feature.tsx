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
    "2FL4DwSv35kujVbNhMtwUY5iqa48kb8R9gWg17mG6aiBwPQcooFyFZzy8K2S8DB3zDYq1y563GnkV2jTfFxnp8eP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KvKvwMw2zfwN8vgXZ4jN9C7sxgDqNHHFE2LcntMzU7Kz5whw9KQhkskv4rytR7NfRfYK6g1hDviuRbyuVp8d8ci",
  "key1": "2oKwjYxnyZiufNDYUuEku12HpjWBHw1gehWBYgKkWWkxZH7zzZ9WiiPz4L4mERpunduoFMGtrCofj46j7DuCE1Af",
  "key2": "ALPv6JfSuWfTwTxsu3vvT861ZHXeKwCijzzuFyJwkrhCfLMXwD45rX38JfCYVYFVQMqd5ystaZLehM4EyvuhNrP",
  "key3": "m1x3AXUxv6f9z7dnh37zmuhPZVT2dxPH2ZF4rFwZ5n6L2ncCsP8u7LcosUSLNZAMm8cdNRfWKfZdUGXo1uCXUYS",
  "key4": "4vnF45hz8vbeGDkV5HopyfurdwidnR65KgJhRta3LoPJyMpzy6GwYxW3fzSS8s2bML6UDin8BLhThfMNU46mwEjb",
  "key5": "4b4LGEThcd6fSJosPnoCs7VrPEXkwMW3nAaZJ5Q1Lknk3mPPUNSgeVsrAKTzURDsZAzZBShYcHXNF45b7sYNUiWZ",
  "key6": "4UUdDCu5puS7AGEQb8Sobdo6XWWedWkDsTGqm6qDb4WN8boHPpghQ7dw4Zu4AivmgDGP228cV9bCY8a7n2qeMH4b",
  "key7": "3rNxuzjbEpoMRbLwrPgZXDjt1MJiurqy6LhqDhYPRez3fsR1tYDnxEbQhQXCA5fo7xmW9t6fHTBGXrKj3eYEXVtt",
  "key8": "2navbu1LmZJYovaRxCMPiX2nTHMDZad6sydn2w9wsipRvm7ikQCbTtKShvYRs8YutDGKkE99zbxFU2txXdzHkdmZ",
  "key9": "3VMBSbMELr7dPzbYDxioQt1UvWGWbnTvsUdcY6MFDm7fXHdtFPV4nrWnTGnq2wX5ydD5QeGyomBU5kJBstqJuDKG",
  "key10": "5zjN4cTNNZhMVnKrH7vwx4NhShz4eTjc6qedtPKHZcc61zbcGkcZaB3SCXuZoeAg56BsautzLD2nh8sHk7V4hgxG",
  "key11": "k1QwNCzLrijePUMDMcQPX6ZzPe6WK48VUwBBJg8c3xRtUCk5vZSStfVxtZPiuC9DcXaG8btPwqjxD8JkxToZ5oB",
  "key12": "r4rTiDNmWAepbUnMfMXGxZn2AtqrFXdDjwAsJAQSZ6TJ16hdKUGwjpvSTBGMX8D84yuUEtA8uS45gG8sZ7eMknL",
  "key13": "3tNJruV2eccvQSFUMJZbehruM94gXSGaabTRYAhq19Xyw7BVjBpZUyNQkqQh15xKR4ouhdgfRtbB4QodEQgfS9ud",
  "key14": "2armmVRPgFo84bN4VWQEYkXiKEKMusYqFXJvNsuhmZgAorJJ4oJ9sZXErX8q7wnmiCXgdb1rErKVmCJ4D8MmSRse",
  "key15": "5a1E2XoH1UuhNavjYgRW4MpfHW4ikSpk2LekBLnRPEFnDBPJGUcsKRi1qZNqmjprPmRjhr3VY585BhRTduQymBTc",
  "key16": "xJ5wAKY13xpJLGa9YFbCqJqHYFbV65hRLGHMJJJdbxpbi5iohUSFtvyaz76huFtEzThdtc8gNyLpy69rSFLg5H3",
  "key17": "4piM7mJYsyB1pG4EufM2bm6NmFXSRdFweBF7gnUFqDBkfh1b7xu1N34CKtLzsXcSJx6FqJJTbxZMiDb1YTNL4XV9",
  "key18": "5f22nF8apxdC4g9bMC4XanWQZCoEJWHtoZ8ajUE1Nk5XUnRDSHdtLmqDzpcoFK8aZuq1QXsfU8tJzKVy3XAjtzcW",
  "key19": "26GrJ5h3Z5ZXmC8DTVmJXzKWdzEQJBuzxrj23mnNvg6ctydgZsytFagncRbtVUvfmbVfCUChMfitAZzQBtsDagZs",
  "key20": "ECePfW67eX14cjkJa1CHr1egVdu6xsg1kpF2SxrEmfDrQugwM69U9c9m7c3CjoLfdxs9noEenxY6sMyUpWCAr3r",
  "key21": "VRRzAahMTpz7B32iqJoxAgSmXuGuSfXDQ8qn524WDd7WVNp4Aw5bJ1M77XLNhEUL5NTBFsF9sw6h8Z1w5EosJhw",
  "key22": "44zACc64dmxqpRiNJa6HszmbcRkZsaxEmi6EXk45DqpkkrmrFBqRFGHL5cx6cuKXiEvgqwwEeaq1vTHjsFxQmkGd",
  "key23": "3ojw6VsqUcuw8D8TZbg3HFi1edrmJHvt9jYYc7BbGZZeL5Y8LGEHM11vSSkVEAngSTymamiQM6uRMzFdayvY4PrS",
  "key24": "3DUxFE4owqgb6gGVgzKPuYYRB9FbtowALT9Rfuoe4LzEwon7ZWDMTm91AKf9haYdyXjFnWFZnYPtTvt5y6vafAjW",
  "key25": "dqTskRCnSw7WKmdH2qVocqK6ugk6TzvZWGg1yVPDPVXJDmjiTwEADJc9jWKmyg8if1vQ3ZyJendKEDH4hG6YnYF",
  "key26": "2b7hf6X2871cGMGunpTWdXPPH8WmyhQ9E1txSj7XvAyXapFuKgXC4edwBQHGePRUbz6DKmErnX6Du2ypBb7F5FqL",
  "key27": "555ySp9ydDWe6EDm3KY2vVdV9dcURhPwLX4j8fMc5KhnNE4G7Fv5NgL538ztt4EVnUsMjEQTjhUXWA76tJaNuL1h"
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
