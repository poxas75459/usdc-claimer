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
    "4GsCFF51QFJjmxVhFW9irz3hKT44F4wCFHghPTFJfxZhnMbEe7dSPvE1BsWyGHJxnd4rgHgU4RL9fAqDgyRzXoV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34fw5V5L5hgnovJGNAM73VFS8yi4NC8SBTpLtVgonxAmkMe3hwyWVACBm5yrv46SqXs3duHv4auFv4PCxTuWoNiP",
  "key1": "akXkMynfQDdcxhb4VAJtYez5kL4SEBkbJYuETYrHBN4JNE7qshYio8hziDDTfaGd58iJFWJpByCnSA2jgs3djS5",
  "key2": "GDZdeq6Dh5PAamRc7YCbCw5cj9p3dDPhea4AkgfGufsm7nZh11zLRkufUmqQxCMKPxV2vbc85qBpyPHWrLTEeg7",
  "key3": "2x4L5ENauA6Va5KZ6ZAV1dGma7hMmcK5mRcHUAipN8B9C5tNBCnw5qrkDygYnUf56kTyWCQVJCc3vnehRWDVKHiw",
  "key4": "2jUGatzTeaBJ7Dqe5PM4HQxNGNaiHM5y1uAWNPvXhikpnfgXu5HR3MPKTcpnTz5Y4erYvunTKbRradr6hrrCidv3",
  "key5": "4nmdBN2tdhDPCz1pe3rDC4xQR6GsxFQia8tC69SVXASEePHrb9NMRDP1HBtazHuacqTxQHdgWhQufPdQoPNEgHKJ",
  "key6": "v5kcj9X4ioszTARXYiNucGjWJt3fztRCrv3YL6hAy1McHJpNhkMNX2c7DioSCd69pEYSVS4mkr5hTJHLPezCQJD",
  "key7": "5pNJFzYmELrDnabBfUZUTvT6qz5aVTsTqjbt3NK3i5ToonZhVApF4j5teYe6RXhnmaBU52hggzqcJCi6gbY6aytg",
  "key8": "4pyCmuBnB4q1EwTGBMniAfi1UpRxUoMQHhKDQTdeDpCu1njKBQbuxp4xmUxCn7TE2BwYbBfSXamnSpQvfekPgX2m",
  "key9": "3Hi8Qhnzp9rb7aaKqujSFBnmob9o8k99PaEVMcmaUthiFhNUJAtaoSXL14ZzFBDSeR1WHpJCe664wBPie1yYs15o",
  "key10": "3oJfYwK8hNu1EiHFF6geSJgDnSuPQ3FNWfgajGz719rJqphKj61NEUio8W1pxYLJD6vfmUBBsU4NADsBGgicLnjV",
  "key11": "Ay8xLEgc7LC1ae5H9cMTJTzYGY6MZh8Em8xU7GY7Grcb8p1ZdQKvZXXW2rMUSpi6XbjjWUfAN5sahRmRU6D9vBh",
  "key12": "2ea7CqXNvTU1vNxv1sfTQmVzJjMHT4YnqE5oEoCt7LNp7ZjYvQaonBkBxg5oHgVFfauP8WAhmcDZYnFtsaypNyZg",
  "key13": "4YwcJjvypjdbq1n6pbqHbg81FoTCK3oKSPF5owJjut7mKPbSPGNQqFQjgBwSZpu84ZfvVPg26YrJrRGoWY9dgXE2",
  "key14": "3oD67X2FCxPVxe2ShqTurdpRKxHJ4HDz2Q7GBMKtayu8bdtppf82G1Fvc7QvX5qxypuqAd3n8ick9zrzTxq8TBz3",
  "key15": "2WZQb8yZTgh2S9ubvFxwuzSGqr3yi1BrR9rKW4ouQzSZ3HRzBCsTsQ4eLFZysbj3hsUoWmZqbKXre49VifgLp6AH",
  "key16": "46FqAGBZyDsmpqKxk6Paoz9aHbDKfm3gJT2sC8DzPAHPkuYEiFdiN7aLEPjjEfdiavc7XRMjS7evBiKgWtdqa24H",
  "key17": "4xLXx6KLFoYKQbyvtCFHPoSJ6kCjqVYTrdd1L6HJowKpKAfD63CTykmrAPoibmUdPSxdoMRuUJPuFKdBMoNmqSNp",
  "key18": "3tzwaHEKi4eav9prkhwNfqfW1KEmyRwjuZQJjiZq8Rb8Vo2tTPzDJgumdBXD8D7Levsq929QRJaEARbHCW4NQiUj",
  "key19": "4w1ZDYLQKsNPjzcvLQKXkYsPgBs5QgSRATNS3hhoX4sxguS7tertmeiqnAAtjB6FDxLQVxux8pvpJxnjjVdo9kVy",
  "key20": "62o19FTj6ztaV3y1zh8vN7ECtGCeF5NQ8PfAW4YdUhLTtXaseH25E6ADcFvuRawhkVAsNCvhhGFz6npSZkai7d7Q",
  "key21": "dzKSpauVgcYypEJG8rYPsbn1LhP5DVDJxM1iyQbz6xGD8cJU11HrG5NRctpvmX6fhMV37JQW2jE6kQSRpTu2mup",
  "key22": "5gyHmuBFAcFakjTwn3WcVMUHC6H7XrWooRppiJBStCQDwpe2LSEhMHX1H26naimf6rZxxkecJ1vQNhVJ9RKsZiXA",
  "key23": "2xsui1eAARmqdSZFUpLdQMc7DhG8nTuTaJ1vqmW7B2EUZ8szvYVQNgfjFx7TAFPoZp58T1docZ5X2A8RaWqpt8zp",
  "key24": "2eAgCW61nkkH39bQYkCAss87p8DUfN4B3HwFLm4CAy6t1rf9LT8iGpgK4JWBHLUPYtpxRMCf1dKGPrKsusoTD3ez",
  "key25": "UdEh1vrHaomHYo6pRjRubesbU3jFF3wE7aKDdnHQNR3oALHL7PHLNBQhbBSDjgpfbm3dvFaRNa74TS4XMhTXF39",
  "key26": "2PpzdRtY7ZtsERyH8ZqLcjiYXo4j1vK8pQiUo75s6hoGpvNJuexWjNhjkUQuU9AvihfwzGgbMWRBmQWEGaRZHGrD"
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
