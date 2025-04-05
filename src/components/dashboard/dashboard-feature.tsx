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
    "4BxUKWnKbdfNefpUXtW2vm14cPEPbPfdaLNoR8MuPat36xz7eTYirqcMwLxiMdHxGVuXZBmXStZ6EQBDTxhg33pL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8mBc6cCf5R9bF2sVkaqSo1RAKPV5e69sGRjXHnin9b97XUGVbqx7DpJCgfjVzkCdoe5ehkZvVx8xvLGU86oYoS2",
  "key1": "4aY431vuqA5g4uoT9xf3EK5vSK4HEVkEB1vSpeBEDm3gwcH89EYHgwvbjabrgSjvE5dt4aauRyjrq4FscEzZr5e9",
  "key2": "38gkhTDjqyG4WgBfAg5zRN2oV4ewsR6czsN2C4cQ2UqC3XKNCbcsFpVjJdE7LgxnHxaUybpm9dEXN4BS9ZQ9rDtA",
  "key3": "6ihGBJF6VNrRj6CTSk4kSiwKiAdZzrk2DkCVNrCpN4HxGZYush8StcoGRmrnUJvhYPcuYbWH2RcyyRoz1fz4obH",
  "key4": "3wcUXWNgVWjzaXGhHibvm1zCzn7CsHyX9hsoGJzG5AzYnNrbcyWLF3ZrmLLwqvnGqzDgrNwDqTzpMdP6WeufxzUe",
  "key5": "4Nyy4f2LG2bENt2EEGdC9pMgzTHKPKWmDCXs1PCtEVyLr1pkEjP2UjgCnMMub3kS2NnBXnF3D2WCLVddzPe6nvH3",
  "key6": "2CuC4FoDDy8k8pBAMdcfDiUPkuzHhATvb6JLua5dTYdjLCsi4YXD8kvvSGJkagsRKgcTymg8BvZY5rFTMh4nBQo3",
  "key7": "4oNUfsSk1A6PnUV65FJuptjdhz97EAZKatL8iVhfzH9j898ad24pCZyEGDX8dtZ7TCQTT3TwEyCWaGdcbrW5KXz3",
  "key8": "SLaZJaWCmP8pAc298PHokV6HxRizFTZmNzkd1yoiuEGfLKNi8DKhBH8rex8UboRUSyvuH4xa5xa7c9AgjFpiW1B",
  "key9": "jmvdofo2aJdyXLMcshbYmPig5E7B5ZQd3KYJJL6MiiXFqPhkMGZmp5yP5o69LmuuEfYf2nJ4jX5NeM43nnJNrAc",
  "key10": "uqXBwfWD7n1gCZNcijQ8saGGLT4YE7i3s1PDLz6U6GkiCRWz4QiwCViqs8Sa3ZiVZmAaSikN8atYeytMwVtZbbk",
  "key11": "CN68sLShqafuTbWi5LgyfSKsJtgaNBnD1u7nFEA25WAsLTzAxNXUXwCMyFiLX4cGxYR4y7fANCEMCbvAd4r3J2i",
  "key12": "493gZz6rDjc33WmyDmKEp52ETiGNjRLstKszVWFVKVBiciT8T6SrArxcedBnW3d5UFHyuWFXtFKEFCwghStoJcCH",
  "key13": "2NySK79aiJCAFG7MLrsvg1EXQXKPc8TBvanzvhovso9h77Z8dak8nxgx237DpJM5kst8HxES2NQ76hHduUBNU8tp",
  "key14": "D7jwP9PWiGGNjK9vWWLSzF9EpNGCbnfz565SD9PCv156pRtg3USwVXFEfANkZSSm4F5iy7D8aBWHnNUqC7v4kdP",
  "key15": "dNhEYrEpfHre6Q8WdtzyBvSojpwcAMfWQPvxUEae76yeCEt8Pi7tBWZRvWnJvJfSVT66M8WVCtEo9E6UejxyFzn",
  "key16": "3CgLCDjW3nqNXexmv6ctT3xy6mKjq6sexUrDMRmsMpec5jLaWk41h1H5HuwbsvXM9H9MyMjVPnxZyCWg5s1XWLCz",
  "key17": "258DBHKMe8DNcZbVdnhMXv8NxdLFzmohZCc3hTPHE4fRaQaibxQvYQisirxMeFBjUkNtKyophJ6h81Xkbond465C",
  "key18": "TgS5ce1vgRUwezBZhmgxyeKKDJHeeFiysAzRr448d1Uutp3tN1DVKF4keid78pBoWWZEPh5gR7jMHSDvFHRzNyR",
  "key19": "63tdyEnej2dpCgfHjHo2hSHikFA4xb8ovZ7K6ffVTrui7EBNN5M6ZQrshJdrsLZG6JA1reSM8JE2KamQMS9oKyow",
  "key20": "2zrSskTeyRh4eWRAtYKo5onGCa5yS76uy9eL62bCKPjRAf9nmjjTsDAHCvUnPtXsrdjUz7d9SBsojZfekaxS7MLY",
  "key21": "3uTewKUjjTiRfrH2fv2gPeJgkXpVKnSpYFkP3pj3bYtmkN7iB7XnmDsL2Ukk9T42ZGK5AiEt1hiP7PePcLoJi1NQ",
  "key22": "4vDDxH8zRFtS6ybCYhJtzJPHEhSrXQv5DAcTUoPJZH3YNwJuEtkqzftGKn2WEEz6GvHpr9C1Pj8pz4rQzqgJaVWR",
  "key23": "43szHqRx6ybTqZssmvqhJoNwQPiuGnnbCBzbd9mM1hjgq6QYA5Vj2Whtr4yrzxpt8e9kADLKGbGhyiMGWyEYim8T",
  "key24": "29qgSPaxUbnNrHKh7ayXxGG6yy7WEKauRmFkvBgjd6EReWyvHsPkQ6hycxeiEs6PYterJ1KxFNkD4AmNWAuob1N3",
  "key25": "4CysH9G8GeJt3iHyQoVaZTwmSqUMbC8uWZzr4czhF5U5PGVphi8mLHcsJ5pi9iENvAwgyXbB9d6pguwqAXwDs9Ei",
  "key26": "5njCEKRm9XohCAFZbwhCQszpFv4kykNgPunL9H9p1kmk99JKRWa7A8XeZgQHNtU4An47Ux4GYGStarmRAVzRGGAo",
  "key27": "31j5MN8CoY8mTSQJpCCzknBKmL2aASdvBk1b25jH9G84xNUEAoRNtDAdRThUMHTXUiJoutayP3zQBN5aQZyneLWu",
  "key28": "4x726bcm6cCfozNTgPy9j9nt2J5L4bkpmVbTz4qW4yCPWP9tmASugydERXqCx65jx2B9Qj9BC7fJRSAhyzHpZXwr",
  "key29": "39RsRm67zAidK3wRBvwMQ3bn9HykqrZkfGm7p1XAumWg8wmQmfU3ZSvBPzEAjySMWQaur2eSh44mhJTYyaS4SpGv",
  "key30": "22i8E1pd7YD6CZ5LHgZNT78rpNHa7Z3KVKrXy41gKqDpqF9DauCQVighj2phvnRZ6s9yXHETwtAG9UkMEPFM15yY",
  "key31": "4RwWGTXXh5DSXgpWW9FYz5ibWzRzMef76juG9vdY44xHcNorSkRMRHCUDiHM2XgjVCjCZxVW8RkyTnjxXryNiyH1",
  "key32": "LwwRBaz22HHuAuTkR4STcryjM2tXQhVMmpNmvcTNJRuhRHw53oVCbEqBehxoMQmPx1ohegY5QcbRtpYEzXTuQDS",
  "key33": "5FAw3GZcLGn8ixhyQbfF7eeeHNHMgPZgLA96fhnpcy7w56qYSp72zDecSVhHpFewnegbahDMC7Y8UDE2qsXpo9R2"
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
