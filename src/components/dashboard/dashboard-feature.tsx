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
    "3CDMrtWqVAA24FJ7nVSHpzut1ytfboazLh5q1jjtfEpSTuYsnYgqfExXH38Ho5FZKYk8vwHpx1gJCCszKz19YYSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JMjiu2fC9t9WinoQRj3tfeifBCcQYGe1et1t3eQdwcmaAUc2kjoEEB24AD8dQUudcqdXXHgbeRpnwA4bHomdvRm",
  "key1": "UwVtq33GRrVcsBP5LZ7tZ2iqSrShUriUE2WQZugew8AFJnAxapu5g3ZK7fouv6itpKGzd5mqm8WnqGnyCNiKUg9",
  "key2": "4iqEWcsuroQPeoJxXW3AYmovjypYj6vVPncfABoTU72GrHuSF44aEyaNMuVhLfZgxw7Fr1r8WnJijLWk79MSSxMk",
  "key3": "2FJmWpN8AofxC5H3quZkWhHet8LcJDDNwcNLUUWkC9h5hdCk4TxCprXrbefvjXzXaJv8ttEg97urViAqC1J8WuGA",
  "key4": "3A4gHmMC7CvkRwHp3n5tvZYyvKv3D9i7KsT7j8uv9At2FY8czSCPg36gTVBZD8HNJjrGgEZVF7rEvabgfs4yu4zu",
  "key5": "3C3FpbspwN2ULeN4PRwSdyeF41EcjxWnc8p5sHBjaiwB9MvpRUshsXxjzn8TyG9BJwiiUAZWizWg6ZeWjT3kArwo",
  "key6": "fVwUbboZSiH6rsCGrgyqDDaZwjFWtSxp5rVkj89KeZ9nXrZVmFCMxnoCXuEDtKg7WFHY9qvKQ5LN9m8hH3LWXLT",
  "key7": "4ybN3AT3HRPePQRGADnQK7WsiRjvZoVhDiW3rYLRyNQt1NTbBBkQrWHGJNDna9wZsxPe7ATLYMWyNCZpR7PKpxWu",
  "key8": "5W1pGEKJysmmkVo9Q3D3tHgmuwdsaQq1eeq4mYawYnbChZdAg4h5U9fF83k2Nw3j1vJHAgTggrK8qi5X2vb93biu",
  "key9": "4QGGJCJsNxcN4gGE7CBXTDxxfdqTnK6Cd25NR3yWHA3kCsYf9maJEJW429eMkX9B6oo2u1JmcW3LZxN38LaGqasw",
  "key10": "121G42HNjs9LZCpqUkQ1trrovw5K97XUkZFxZie74LYwbKTDw8FuuT2aw7oWk8EP8hRpeoLgAusukqKW58ysZftP",
  "key11": "45wTQMA52h6fc81FnkEmeCaYGRk45nG3mVQ6GP2akMEz7mtDVVNmMsE2LouZuKGbTzJ6FZKZr7JmkD2aFeW2PesS",
  "key12": "4i8J7CsFtW8hgsj9yHo4z7xjDj5EQiHXeaD6FBdPPPgS63keAsf4eHEXPawEGSwyQwFuwGKjWqrMcn1kHQWuvqqz",
  "key13": "2A6i35cjW3AycMJBTUzpWEUWDCx2N4Zg4iUi1qZrntyr9K47yUdyCCF7G3rq6nJFN4E7R3f8xtp2w1EQaQCNu6Qo",
  "key14": "5iiG6Z3w6CUrihabh4RL3zKxwFFhEjZ26Hd3dWPZ99cjs7YtGcVr9oLofADT7pvwqgbSaJpNjTEwDKQJyNuXe9Qv",
  "key15": "253WacVe1psPQBvARzN7gU6BEZPrYyEagMHV5mK5FkvuxGhuqcPBtSZLe3NAoXEkYAHytYfJs1k3AhEmS5yVqLuP",
  "key16": "4rT593V68MHa4DceB1xUTShT8fyfu39HKdEmmSVfkvzfFnwRkYn2HMYvfoneYjHuEaR1Rgz85aTi2YKvAdhNUBYR",
  "key17": "5NyQZGp18dCD45vZQLsdneozchq9XgPFZ7NaVU66ZBWCZLyRzFEkRcKgK8o3xPkMEdDhPp4Yv1VnNxgTSroGuF8C",
  "key18": "4yctGx6ezgGYhBAXWDzAkU7szUEsTX1Rb1Sz4cfcSfeBGvqujrSD9p8cZQSm6HDXLYUE7VqdXFefqaQaPGzoLRDQ",
  "key19": "5ctPnKVXRYCM2Kbis7pwxb3sihrC93yw8igkbHs4jAzAuy1eYS3tysiKQVemuisrPobAvARX6FwEiRZy6JtdZ1pJ",
  "key20": "32zBQMYnSbe4Zkhs3RP7asNxcvTuwHXwJ4MmwZaPpCTZeAJKMvGZiMochZsaP7rJSM6BS8zSXDprGfcome7yskbK",
  "key21": "LDFHRHD3TTiUpug9aSV7LsaXAfkAmaQRejPivQnjAziEdtUrh8cb7KNRqSPhn92pgzpriSLG5WbcFEEPxAUS8Hz",
  "key22": "3FYxRpgTNtAwbPNk84q1gNkDLoRw1o7ZaC5MyRsSRca6XNjAGvxxf9byjkCQfHZMLF9gCKELHm5VR8hfiUTm2XuE",
  "key23": "3gMknpJtKLAcQTfFr8zKMU2DrarRmZFfSnASuuegDhEwCwTQDUWshXZULQSMqovEL6HQAn7pzd4KDpv6Xf9Fyz37",
  "key24": "41Deouus3kPdmUSNXRrFpchPgtskxs4cRHuoKxHAoX4ZviHWZg3E3WzQdNSa6z916G3ALCKQ1ZFpTZuyKRGtwhfp",
  "key25": "57tFy6Pyea8ysBmaP6vLLwYEtpxUEn7rRCEqTgXWYYzCubno1mFKu53YaqLLNFPrbPh9FBVHKtGwxsSKncCcbwcV"
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
