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
    "CN7Tqkv1LpKbGdf8khq7BnmQ4Cb9opFARcQRWJttQ1nsoJpjQQG4yhmyWR4niX8rYnvcpMk132CiF7Bi6k7PVbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wkQYd3CYPyCnv2Ju56JfsvTJbYJqpgVg4ntXKz3ex7N7D2MwfJZeEptZRmLqLZz2zLCc3VByRYbodkUbV38dqhi",
  "key1": "2zHWoegHQPKUffsGxeC9oZUYnScyADkgpWj166j3MK8dM8Y3d1DfhERPVHQWVHcc86PTLPr5vcNTPMBQnECDN4Um",
  "key2": "2jnx4754PasLLkzdakTcG78HanbNWR2uyxeXBvk59yvpdBAHo4dKUFam4WHQESd5dCm3o7oD3nvJBGKZNsJq9p5u",
  "key3": "51ztiog7peoxKtD4Z9CRwXqe3rrHrUo1bd9P1t73YboPzDDKmH7ioFiGTpHjzVeSqr7H88LtZuEbPd3zvEuSV8mU",
  "key4": "4RcXNTBG23gFYYx7nQ4zfmn7rLfXge6uDwjVGgj8SFEqJJfDviAKYHHvbR4dZi2H6dcgFFyxMjapBhmPrsfzYRpx",
  "key5": "3CJfBSmVQv34qdNWezaKwBdiAQy6nuWJx9Gohm5uYt14vdAUcjty79o4hX99duq6Lfb7iEmGpJEEargWFTXo1YRn",
  "key6": "4sFDYK4rvxhYzU8dWA6VLbj4hwQY3Ac4tukzJir1biCryydphQsHeibdR6SRJhXyGhxkGA47cUkERqp3ih7PJTwV",
  "key7": "57r1YnmbgC9QR8d2qV39ZMjmQtGyfaSuPzwzDRNAoWfqhJY8MAwzU8sNaY896TyX9HPFdjAkSscM4mGBsfoGaRYs",
  "key8": "5xyn4EMV8iqcmdbtxtnvz5hPPtGWCFoQ6KobbUQjxMTSfpbwqgYxvdehJpwXLgxpy4z1osCRobKdPM2ixiR941q",
  "key9": "5g2L4Re89sF2nUbJ3MqWkFJQ1fACgEe62Luz2TEdcFZUCU9KnWxZWoXH27x86mZFv2dPuBuCnKsLth5W5YRutTEV",
  "key10": "2YyUw3HQxd8KwFtUK1A3GoVtgtP3XxbvNcLF36MfefzMdUdAQbZPBGyq1kd6RsdVsF27kEWyd9Z7xxCbsayxkHzC",
  "key11": "2PkXkpqLp8cgJV6FQnLYJdsSYifaoxEau2jVUYGZPRUng7YyQw8xY7tXx6tDUaiVS1npnxG1M1jbSX1eniDbqKDr",
  "key12": "7Xudynx88EddHq77EcKa9Vrvhr4bHNKppyWJWaq9XW6zERsNNK68LE6x8QZbdGkkzkcVW9U6Amas2niVu16onLo",
  "key13": "2hP2Q8UnbPU7kaUoEakbcaYBf75r1MfmWsFTaqEVMLLu8pCrdSGjeR1THu1VxarbaHL4w8v7itXzf5bjiEFWTHAj",
  "key14": "3WxtTeHMtw83jYF86WJQpeAiAK7Kd3VFvGtg2GYde8fMcr3Cxdtzb4scFDkfUQZu2FWQUq6PhoqRNdLBexgdu6ch",
  "key15": "dfyd9FHivGVNbAJuKzSMgczDMA3TynvZGiEcKVrkh9CpFazQfJ9kzoXUumEmTgQfjR4CXjGHSKjAzu3WeRUbG4t",
  "key16": "GmSCifSEKCKmy5aXoKG26an1KEbPGqdac8oWBt7ZNxtA3DEKdjrPdAv8fNWdoZLAkXFSTNKHCgT2ESzqmEWHmrK",
  "key17": "3eQmPGd9AJR9kiBV3CFHkz378vEQ3xPSzTVs4HShjvMSvToumzJoce5bY4k5W7e8G5yT11CuHynm6Ai4hwLioKP9",
  "key18": "3uujMpSrFvGmU6LBBnKvv78nrrgg5hDov3o3XuYHZsuyVCAivjtsLV9Ms6ykvVuMyBfqAbtCwJouWaBkEoEZuJtB",
  "key19": "3aYk2spr6ioG6um8juYpimDcueyngsFDPqTVxFyFW9hEsksVrrbWqPs2HfKEZtS7Jp9iY5xNPDT2eR8fSrkM39D",
  "key20": "3Q6dAp2jkYPmwZYSxTSVyhE3ENxWmoa1G2g6AmqnPh4N5e9an2jeSUctTkC1LmfsqNAfqqzhivHA2rdtQLPrUj5y",
  "key21": "12mAZGNUGU3Bju5wx1Q2fRutpooEKP6LAFutaYucS23BKkgLKxdo86h6wrF1bNG7S9yCXi5kVaM7ZUjSssmLVNB",
  "key22": "5pq4NfMWv7MGEjnAbHRVkKvha5vewMZkWhjztbDtFpyADNCizDPgsgWjvHx5EP53kMfSRTL2Q6LsdqnEenFNTvN1",
  "key23": "5TrJR55Mio2hhZR8ePiMRFahB15qvX4dViqTAtooTPmcR8xWzPRxmhxVauTQcE7puf4HzCgszrGcWbmcU3TBjNAo",
  "key24": "5yzpjPqmKamm6HxAD9Z9Rvi18o9BAsk2dXmJNTE8AJGg32VxWmK79ZJrto8DucLLK7fmGW9G9n4VcK4pixRkDdDf",
  "key25": "4i6WYZRFUosS4T86g6TjzJS6zdFyZx8KuesFY6xv8XKH1eUKmWrkfhNuprE4cFP2puhtcT931SGHcEvgZEXv6Kiu"
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
