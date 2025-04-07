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
    "5SHHtpknctXxhxdEaSHiA1YAnPpRckWGz71cLXCX99XzLr8LoMe2U3eKXrxqD8uBPM3jN3Yn4N77hS2YEZLvV8j1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HFDok25Nb7tjiPnVZ9dMthhgTR6rwyx5aFrp1D5uBGN9CuPriuUKq17XZTnS5ZNkbfgbacvrRdtDVG9Giu5eT8X",
  "key1": "3jBMsUbARKhLwgjNpx4sPf41LKUEESkGiC7aTfKv6XidkVrkTtgUebc1rjLWBVhN8spEQgY2nUz17KYX7goATUi8",
  "key2": "47brxScv2JkdCct8nTv9ZYhFvMo9Pby8kzMRQx6RnW3T9b8EKA6qny66a7k713R7kfw3CxLWH2ynKdiWbcUZZMfD",
  "key3": "242MyQdb4275VdxHjCFVNAdQn2JfntWaRXp33mvWGeCbfb3CVybuGjHwPvzprERA96fNyzuU8JZQf6J7GLhwM5Ro",
  "key4": "3dNWYR1cGxvzjbWDCnYyrmP2e66RHwkc4aFyhXnhVJYxk2Vmsyq3LkKEkCoc7dZKfgpTPNWgVQ5VCVyik2YhH33k",
  "key5": "5uDnyhHecAdVQNTYCWrWm2291vcRUdHXDB1NKww1MfaqgpYvFcgUvuxRns56bVqiDkCS4v4KdEXX2NFCqP42p6tp",
  "key6": "5Wgw1gfvv648mKcH7ykTY9QGjF3Wyoy9MarDM7afyXrmk7hrQFsLNNCrfQeRKQmsugsrfkbwGTvZxjERZZDrB2XG",
  "key7": "5hXEp53u54u8kazfCnZuXXZQ3zDHSxMUCuEijVf3ZNgSfHw8DU7msWkjwxDeVTVJi35EEJBTyXFdh8EpvXDR9KNX",
  "key8": "5dtgGjJvm1FiHheH3e9zz3VAUbX4yoySHUcE1xHkdTDkaHx7RvDuPpTRQEmiGLayPbvssNBWJu4BdA9YQLsKQBkR",
  "key9": "4TWD7QCZguvzw6KkNvvyek6wSPdWS6o8FVgd9RqTAoA2U4fuiDoFtkWasFVj6e2YoV5ikEJKCiTqU934JcAgscg9",
  "key10": "8NhbaBiwRHHdM8HAsjuQMATHcucoTSk8KfzgDRYeVCRgQnUM6JWYWoZwhPZuoxWf2FuSrgEFyPXzhHMmG38zC8c",
  "key11": "3fGrkXHobZjnWmbdThWLojMknhHwbnuxyLgrA1exruuAoYemgcAcH4wmMKroDf2dXuDPTHpaLrXxBpVkQU297b2Q",
  "key12": "4kPdkCygAMC21uAMnn885CDTEeitkd62KfacX8L6XgkbzHDWyZaRSNHeDcFRjFoRwmMdCSBt2eazG8jgycd9bKoJ",
  "key13": "5rJ1AVCp5b4M7JgEikTx5RzM7J98CWvYyEPbNp8x1XwuKQGZ2wTaDD8wm2wd8k4HYdDWJCvPE8uaj2oP6JDUzt6z",
  "key14": "22dTpCYDTiZoSKACwsiqAKpfwYCNY4ZEZX8qwCmCf2VoWvCkPXF2MYN4qTABJkMU1gUgMko8yvgBWmYswuHTAdwQ",
  "key15": "hWXy7BVsv9rekLSotCaeADferJAUkLPUAzCWFgMHnQ4PHRiWq4Jfm2tN5amD66gd3enmR1MjFMuErjtKPKhf5Qw",
  "key16": "2AB7YuSULzpnFAxaZ7pPVTrVbCxurx4PbNKx2BYWUggzszqZ7tnfMdfaxBsSFzSozmHGURBa5DUTBa3Kt8CFLBZX",
  "key17": "3wCYhJa5FL78TZSuY8P1sGVL8taAv79PYNum38p75bf6Ukn2FLwHbvh7EhH1UtbcUrntWiArT5WPkXk8bMn6AJiq",
  "key18": "4SE5fxvW4ZziykywrzUZGAVwAxiSH1LhVpLfv3vdGY6G5g1MD2nKAZ6z671eYyBSYkFCWi1nxaDwJVzgbNPG6noV",
  "key19": "3USVLWcJiEbaN5cBKKa8YuhBbGSRdobPuhUEEDTFBRNPVaMw7bBxkn4uYyUGsYjZ274xuznZYB916UJ5QEFCyFCx",
  "key20": "DvamkBq4y8uaGc613EtmgAy64zLaAsRdEbzKcy7KzTSxvQBARiQqgLMYkG14iUqcUA1zfYCzBTgNVhKrLUgMQJ3",
  "key21": "XmS56vQsdfaQ8FH5kCciikmk1sTuwffNdTbdLe2XzrcyM8giSPtgDgYR59a12EhxiPPi8e7k5q8aq2wYSnCz195",
  "key22": "45JjrzgMoQXH2Gb1KdtPBfx3p8huvSkKFU3wRJ8q1TdKn9i6R44wSeE3tEpGScbbAZdpBTzfA4jy5dQ2Nzfvv4Z",
  "key23": "5SKy1kzCSKGLZkEQD2b3KgDQkmmsoyHobJCb9n6wEaVwsv1eZwiXA8rrtPaGYaeFYdJgHC1pdjdDSu8SRnJoMvt6",
  "key24": "3qKTuFzwc6E5HExRNFDzFwHxQGa8rhjKmjz4Y1miHoTVxAURtMFoD8MazDvR1V21LedNgZY3Du4zncDKz17xgocp",
  "key25": "5yJ6hdBdyY72yPY7KbvTQ6gb8Ne6GfQJWyCR2MGGijcDdq6YtXjrHb8CjLvVgZNJo3AiJKQYfdMFkTNd6mcNtDuu",
  "key26": "34pqcbzHH7NYQQg5frjK3UMxm1HG8xKhqBKPyhE7DwRbaCYJXsSKwwHJKXJLno4SxWWS9WBSpsSwoQhzyVRmSZ8K",
  "key27": "2FZUzyqqqBy1nQqXLUAqd1tRtU38uqAs7FJSSeTNSYN6WGu56KpywAGKErEPfYRc12by3SXBNgMETi4RNC79zH6F"
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
