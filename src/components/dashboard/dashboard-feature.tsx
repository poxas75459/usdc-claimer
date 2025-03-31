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
    "5Rr2D3KByyRThAQgiEd37Dwi1bFnbWMbgAg819V9X1YNmvTi4bB2cMMYUSNac49Jxir5yssddwfbj94jT3qM1d9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rVXYz23uSfj7KN3L6bCyCmLcimJYxfiBkGS5p2oQmGB2qizScC3WzgKUWreyHL2TtoWzs2rZYJJPUyuNwhygnP1",
  "key1": "3hwokyGjmry2sQT1c1hAUFBZDU1NbAVSRvHwFtseEMSEy9it5z8bKA5KFtTtoWN46mVVtemG8jYzLNoZH4DeQjws",
  "key2": "3hGqJ6fui24XsR8StM4mEaFdd2bTULJwwPzkizqHrQUVwtsKtTNZxDYouhgsDXbzftuwfsRHry21M7jcWdceZHdg",
  "key3": "2dCNqfTLbwEJ9eHXDwVtDEZGgrvVnDf9gYzJfsZ7XeSq9P6xTFiN7tKaaH4e2RvSeqwvgNtAyKWXWTdg1EfrdsEK",
  "key4": "x5JbmbigwYzY6da6Nu8DUEVtpS5w4UahNRvrDeCqruogtxjEDURYAQo5ZVyqanTzwk9io9c1Ae8LgqPaNsEJhy3",
  "key5": "2K9V3qjpKu5pLtGFgSpWrk4YpLuszFCtynTDLwhEsEzupTx5f4RZSpgM644is3tDJmZGAw1TdUojc3Ag12dF7Dqu",
  "key6": "5nMKtH3syH6XAtPQtbPgbG4nBLzjMRPUXXX1UpuyZ5JLXGHV3WK34Z1rLHNf43AQ6xb4fJfMmgWm4pNyPWXHXpQB",
  "key7": "3AXecdhhNTpwvQ5nvpwaT39ycJNu66AY3j1hGaWFTt6jh9dH4qPcPSnBULoarw7rHUZFXawoUYPjjFYXjAA6bUDm",
  "key8": "5psicZnvM5Ff4ANMNa6cn9nmB5RPTJUr3TUdAxCwQbXgYiiASreWDkN3P8ZTtxxYf1gQfyZgWBygsKA2XNah5k1x",
  "key9": "bAakHHKZxMV6rpBmgjn37Ewmmo7F9eZkJbQbJK1odAkJWvZHABbbUYJw91Bb2jxrB3v5DKCZRcdwZ1AcgsmEfKA",
  "key10": "4s7HMeVsNKZRksPL8XnFemU6fdjQ9ffA2qPx1BwpXXLWpfwHkan2Xm48GhC7ptn5pxGoojQrv31v6Jmj2iRPKXhx",
  "key11": "3P9xRdCDW1QxnPZLTnX3xHCZRghd3ERfuj8ijrVoDnZW5cFZKGJDviNbAEDNqWfBfR43gAfBAsYiABzg6qDoXHDG",
  "key12": "2SjroNSncSzWysN3bErYSCU4xucJXb9r4F6PKoJQKAPbMX3ALHsz1tNo6FYbL6xJKXSbBoJXFQ9NrWwXdryZtbiZ",
  "key13": "3rTpaiTgR6wnRhU2J8kzokYeHYr6tYoWt8esFpMphCkCHyEGWniVfrduxzRZqzaxTFdQqT9We7CmVp8hjjqBpK5j",
  "key14": "42DhdLobSH7LJGc7QFSr3XRLhHrHaoZaAKcQo48adjNrTEktwfFwdPiMKKPxWRsx9UpCNDXWHq36tVSRzzUNDW1z",
  "key15": "2iThxwoRVtDhh66cP8TTvngKqAWSSAATNZMjEdbvgQ6VKtpwPt1xDJ87SB1XW58miBtXwUaGf4DSGhLcUQZwqjeB",
  "key16": "5RtjUHW1S6JwYEp4KzXENjsBRE4rGciwHfRPQRNzjFJex3LfQKLGYxmwC75p5scCyog4BcbY3vQFzoJRfrKuUYVw",
  "key17": "2ruk2uvu9kMptWDc4qgWiZroCreyLxW2ASJksQnpqe5Rj49FJB5emoEzBmDoQDmkeFrHMsimNaa5d1QkBNUHrbaZ",
  "key18": "3cYRME8mBCfKFJsE5RUgMFvsqzjmYBw9QzZXbJwswpT5HVxy8RQSXBuEt9zZBEtrNmjVeCgzRzkfTDdBC2QsQEW4",
  "key19": "2RV5maSE1rh4hZC9bNpoEi4rfDw5sA7HJwaGzCN33EtzDBTK2Rm2PYbS2x7Cm6ZEqmKqVzRhNwDUGAS3T1Nu5s3i",
  "key20": "5DB4cXuVjfh4ca21wStgXJEdPuddGom6NgDcxA6w39qvnLxMRtrE7PdqGRwirYhJnhMm8gQjpFTFCjDqF1NBkDXX",
  "key21": "4GH1qjxPiAwfa4iFc3fwiiuHcXBrrCS6HvmiWhiVLrsRvyMAM74Wu5tSFq8HHPomh8T49dFp38vCQXyE9L58914v",
  "key22": "4u2FwUDVdZMmTbWtZ8JCpjn598G5xSrvPcsWznDKD6SzZUz9DUqa6boMo6n3wWieCoKHQe6PXncCovcjCw3amvFD",
  "key23": "Lm3mrK4sUGWws2cpft7TW4ZwiFdkeNcnoS765qe6VW2nznwisFpoFVGYaSkDCYYUV77KXPnxR1umksTVFzJQTKq",
  "key24": "2V4w4aN2BTi8rbS8v3JSXG1MAGZCrrzZjZDDDwiL9ZNY7umo98FQnhBNHiebiCJFg3EFs41272cxvsfbTqb6jbTX",
  "key25": "iZJDe5YcTAydfGC1vFHQKZfHCYp1trxe9q2uJNFhGfFWZX4v9KtFUMRMZPzEQZbbzBBnp9AvCAp2z7mdgWVwcqp",
  "key26": "xWJN7Tnyb5eazm9snjhXXJfGfwRxawyitsU6uWYN16FeiLf6hVTa1JG1b5MYfnDTALnFu4Fe4ppJuHJCoMwNvMc",
  "key27": "29s7U9mb3nAj1NyRVv69ZWsjFRJNvv1xiuiZbzZLPQbrBXsH6meQCJSkBmheabGUgmhUHPqZixSC7KwUay5fAmrc",
  "key28": "2WJNmp1EqtnVYeiPibKD4X7hok5aKb8twgCWgVyzwDAVjYDUc4nW2UWLCz4od5b58FjMHFiCdp8JwMHApfKJDP8m",
  "key29": "5ApPp1baN5vQ25vuDYZfq5rHP8w5pbhvjNtX59K3RzVvLta7K4Pdot8hSNn38ebefygmXCT64wheY946b26kNcjy"
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
