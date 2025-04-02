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
    "3FePFMCRNf4Z6oiTDsXVsBs62z8AR1hBDrQkewh9oi3TSfvyAGAbCzfcp1mmP23rTukCtELSBazXxRhmaCVLzyf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "djL189kRra4oEfoefAMK9V25466ncQw1auRumyH8vBpwchU4km46vV7c39KuudxbttH8fuhbSaasmRm6DAMhjhT",
  "key1": "2BFnY2xFcrMRHAdz5fAU2rG9ngF8WufVvJAC2AMipFcRudFaA6TKETRPabvB451MYQp1779gAZ1FK2EZKKPWwSQe",
  "key2": "66YV3mRnr1H5heH9CvrCXZDQHwDjB7QuB884D8oqRZvEd7ts1iv7BxrsgpMDswZgfRdsAAjFnuU38KCNqNcx9nAQ",
  "key3": "um1qANg6fVTyPq8CaarMhmFdpGVRtmqZwnwZDjFndGQ9i3LJ77rQjtvvG2GSHxMLXEHMd2dTJtKU3gWbkV8RJTp",
  "key4": "3UAirkVerwf5MytnrycxHQXqLD52uiHDqhXRHNufg8PzLL7KTaZtFTc7DBbw6w8mz7ueagSLrB7MEC7er3FqVn4K",
  "key5": "2b5mQzyMmHdYvpj2DJHSEtjvdD5rFftTjD4ppet8yax5nGxZnzNtaCtxBPzyY3Q4aZkivpBec2q8mSG9EEQmUxrY",
  "key6": "4pwrkoXbMC4ooTPycbJSiPU188T1wgTcH2jfoZSgnLSDSG93j9KASt3AuQyJtbtBAFnMqCLU9tCGEzpn88xJBYW5",
  "key7": "1VdmfrAxDRhVxFS4kRQHQinmfFhgUs1CgG8wjzG4gTqnF6bFdeFDZbF7QUJeKLcrbMJSLcFDEderx4Q5t2tV6Zs",
  "key8": "2iYJc142reT2qdh984SjAj3q2NjvttxkYGNGJzkRasEwTRf368uHxmJCPC45eaKpxBR5k1ktDEjTLm2M15dqkKNh",
  "key9": "4NyQYBTD61LmQuGwDkecTY1gvLsfyPJFDAeXrBEh2PB3yD8wavmtMD5MY9gyghd8cXe4xMi7KMt3T2c3nn7r9jut",
  "key10": "2aEqKu86jkkRYxzUjK8Nrwz8JKV75QNuQWigeJDSw7V9VrMCMw3Gadqzir6sawZq9tX7E4DdrHJgSNoNnqvQsoo9",
  "key11": "Yh97uvQergFd8YZAf2pv4r7wwwRxDDKVmTD19UzcpJe4v7a4jeUosoo4aB1ngkrGBitrGKWQN9UVdFUdkMmvgDj",
  "key12": "Yv5YqqLSx5nFxYBEiBKPUEZW5vQRkPiBAWzkshXecYxC7yBR2jy1G3bf7sJYqLCoj9M32cU9y2HP5q7A7AH6hjt",
  "key13": "47yGaUKTGYZfrS25CnY1v96t8EJKrG3gCKrriujV5RWixNGkRNw31JMq2K7qXjZSwWd26HvFLaavXFHmaVQNEMun",
  "key14": "4CARBCjirGCvynFTsqesdiThdzC4e3x4eYSohyGUSb2px6h1DB2FSTtLaWvgwD64Uq4LyDfRMdfqm2miZR6LyuxZ",
  "key15": "5p8TvTuxufFSVuZtTGXrZDZpAqEpGmqrpqPBmk6bAuEXBJwojczJEF7FVCEXSnjH24dnrhRvbSNqwo7dmVgS9kXL",
  "key16": "5AVxkfJGZEaix3gds4JPhcjFs6Jdc2Dq6JdGHxpbfYw81JFuP7Hq47x5Vi1XTRg9vhfTHYi5VD1q7DbknRuUkCoo",
  "key17": "5JirgUwgmS91WmGpyvyUQER5aNQq4G5W1pjPAyppZhKKszfojn8qZcznQyUJP9xCXp5ehNUvTkLmcrVy1oXdSfEC",
  "key18": "3GUAvTZChYycp51GHVnQbJbAvYSWnUkr72RCXi1UQaykkrT2yrJitXSUkAwdsAmFNfJgVgLWrVSmThk7KKGz7kMS",
  "key19": "5MH8hvYWLX7XW571fWKNzCwRMZuKNwAvsgAuRp1muXT1uug61V7nMiwLEkcmY1CVnoo6FUDqFyfxDrfsHcbgm1gv",
  "key20": "PV39NmRt9y4SMpTE61ZSmYoWhXGaKNFmL3HgnECGpodAZLLTmjUEKHaXemFWjk4ecX3jdPPj88KDZazXhCBcVeP",
  "key21": "5hp93y9c3ygoFzKU6A33JjrNPhMUwq5APE6zZz6SMqAeTHsomVYBEicgxBdet9cztBCYEBKgw1mpzG9cKqY6zZqP",
  "key22": "eF1zuSHvVwukASaaVeayp1Cydysxvcy8Yir82FbqmaLYyUi2XsM7k9zode7FVh4y9fjAY7wHMaAPe253pqukWgW",
  "key23": "5eTxnLE5jmf5rfXSbTdzpqnBBFarEQRmwcpyqhuLWRT84XxuTEYY7UsAfLedCLNWRneXZwDoQyjom12SYmNERvnt",
  "key24": "4Bua99SgmHyRHKUGxJ4UKMrkeyqPHPVaBTg18rqCVYAZysq9ijen1jF22iDKbhu6mtPsqnXycUvvsGx3B8rtR3j6",
  "key25": "3fSSEWM2dLt6hd4PrDn5pwj6NwRkdSzbBrAJzp3cFvxihv88y4ydi5p5UCHGP8wjvzqHoebrpbBHVZ7ZsuQCtvh6",
  "key26": "2h5SW1ThkVMkHAULbtNtsC2xPvWGLXFFEmvUWGPZ6bNDMxsB8XSjqV71yTWB2ycLJwbYerfND4o8akQb66Kegn1G",
  "key27": "3gf5c3rtLGp6294HXEjzhVhwb6DvcSEcwek5pnQj1VJFgowBxfax5uEN1As747ccfwWpSReAnstXZeAR3FeSN4is",
  "key28": "23BjoBBwMiU8gSSSZUeapDgJ2mCYayXi5bPmFLA4EndkgnyKQUyiYrxDJyvKPoaqUn8hk2xn6vvWXBFJrsc2ygzm"
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
