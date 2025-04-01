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
    "nqe95skUvjbm8YHQRCntvzQ2QKUSS5eDJ9SbShcU9pNKSDKrU3xWtpnGgTiA2HR5ZFsFbncsGrWz6QWDnGzkbQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hvZf8i8wgyDQBsHeEH82KMFXXRs6opk58dy5m2vgKRkEj4QnybTb5V3PZbHtz1SaHqVDsPdSGqbePRgHN6FqA2w",
  "key1": "BphXNpFiKGz1Y7DWTRCCNshAuMUP2Ru6c4SQH9Qvv7Ui8SQWr5DVkBcu6neAJHDD6mHEXq2wEaqgpR6A1KJ4qT5",
  "key2": "38mhWo7p6CcydWEkegL3vva7a772UKZZNXUPwmStquVePmV3HZPi7fn77ohZTDgLnDo7Fs9yDJJT63mvYNoJT6St",
  "key3": "4othaHXikBk9shN2C3NQFfPuhfLgd8kX92NZ9GpTJTutmKbjDLm5sCgDxdpyyFCbm5FYuQ9JedT7zFXEguG7hRkM",
  "key4": "teyHCcR6jJE63S7aepJeMUdDqv2PUkN5dsijNqHkQbnMF7qw1ayBiSGwvBz6J8HXnzBavYcJskomg8DQTgBXR1i",
  "key5": "3KENDiMb7Rhx8GANJ1Vm1xwYzXP3EK6kuVSeCqEWKJiS6UZAo5GHqkmu27spNhMsL1ruChxsNtR8KcBwFrmk7SRD",
  "key6": "oTkqTqyrvZfXPUH7pk6PpTX9BdoPZQtNit9t7FWVkdrkR83ByoucmdgqB2hYt1ig8Ydks31RjFsE9gu9ViNHkDZ",
  "key7": "4wjbZvaaGCbV8yNGCFtz4SeARpH4T3xx97vbquLSZ4LJocCmQHwo3NDNYHTpsRChJufBiTVMMZya7CbWew1X5V99",
  "key8": "3C81XY45UY4gfS1b7FZWpBuk4epbnGe7WzrqSbFkTtGzNipEvk7ECks9T7GThNXtAQt2i7YHdRbzqAiApRpbMPq8",
  "key9": "3oq5xaPa7Z5Y5i33wxKbGYmCrP1sFoJkGd3HedET1Zd5q1GnwYX4GWdo4B3VxzvdtiywUxN8A21Y2toXnGMUcCoG",
  "key10": "AUeGbPE1CLuXYkUP3UfvBkQMBwMCXFewxRriYPKLrP2DPKwrL64ns8DuT7gXdvpnDe9ZqU7JhhCXP5m6mv47DGV",
  "key11": "52NxaxedPNBDnLB7eAA754CE9fvgrYMArmPeyzuotRHJr5oPNNWFRswffp9wXcEv8HLFmEr6p164FdyfuJVwy7tg",
  "key12": "2nBN1r1HAFfyZmt2UyA83ZamePXsqE761mnBwiFmWJreExwbUAkBLSbxc7YUJu6bu9xne2WFJ8vMJeq4txLik5N1",
  "key13": "39qWt5g86HqPiKiLDDsA9rT8vcYdwCfox3KNr7UUg5d49kfWYmBw9jkM96HfGz9fZCQinBcoBX5P6EQow7BSKpkc",
  "key14": "5u98kAjANuAdLymB8WJm3sKvMSMmjTLrXrDSuz3kUqJGxHL1mPUaPMknCwfrpy41Vv55uSYEbUy28SZfoieQJEmb",
  "key15": "YsH2pfgagQ3mYy76LMgT4K7w53Re6KemF7q5GcAm7HU8VECCGvBS615RKK79mn8fDdd79sLB9FCLKXMsHAZuGqk",
  "key16": "4bBdaU8bTjy64CNwdSijBAfq3ZmnuaN3MezFyMtzUGroi6YyBZnFVmPTib7n5qFrczaxE71cvUAs5ntpZ5vdcKbh",
  "key17": "d69xeRSAsRzVh6VsESdxBH51mz2VWpj28qj9vgpiFyDtvAb2n5DrQZCxnf5zqAoQv57mBmmGGCAuHT9MG1x7kPj",
  "key18": "536gKKux2U7CzPE2i2banee5Lm4ZtWviuotPrjzeU4rXxgzRvRW7LB6YVqmFZJH5fCLuvbG9Mi7Z6HExknsD4zDE",
  "key19": "26SxSVUGWsgBXLJy8TQh58qSPEvt2LbwHV5rmCXWbwcg93nwpg3bsXSKRJapuYKCEEk2UhMywnA2qEGQrRbmCQNc",
  "key20": "5BuztT5BDRxjZ6ZDxQLfJ5Y7LSTyQf5vxbVDxvNvjkWsJgss3H7HCzcnTeGhnHvJESstTavtCtaC9SxxgfZaTWep",
  "key21": "4RCF6tU9hFxnDuhrmbkxU79pCU7QYYfL5W2rbCKvz3ZpJJVYNUaHrk8QCLH7xopQ5g7as1m2LVUHCvF6cMuVhXGR",
  "key22": "4xxFxQpyun2qVrXFffjLEY4N6qm1iwL17DyKrzsZGG3czZKBCLApYNsrVLtrvKuiVYEj944SrXtQvuRAKUEKMFj7",
  "key23": "5DGY6PENEccFdE4PqzRDZjEvTRLYukwGa8bRscY7QcfbxHvJhD2VwXSLWstLYrKvXdcgGfKgATEimxmv6YcvJ69R",
  "key24": "2GCinww86yNzhceBd9pZQG4STRKDC81VCQf8jHBRXWWjgzbUd3xkPifXYjqWtvNYYmKv3rZg7fj2takxav9Vodf",
  "key25": "2PZYCrV3yhKDPoEzGFonPxuSpf5aFdG5osK8j9qAaxgK3StdwfTjKXDy9TfPEYTsvk1f4JSzAJSfWrBe1AbCJhDp",
  "key26": "2ZJhDPVYyzjCQnTrRv3MWibVRQqdYjvcYwe7KprWGzKp7HjmcutLwR69acKGt823BAD1VvxxCtaut5kF1V4QJsJ",
  "key27": "5kuC4TeH9Q6X69ABbxVUcSyT7j9fZqhV3Jn5Qiha8azQNKReSLmcEcCeu38dS9HdZjVeqhnmVaFwQ4TuEuvRfsgL"
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
