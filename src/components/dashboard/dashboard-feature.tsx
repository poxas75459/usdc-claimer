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
    "3g5jPzvL2JNEivZWP61B1ZxAuvzyFASNhYnXKMjS52EoXKEePaTMNqrebBNnD6H4bm1XSabJPpGffwZFUGaXnfyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pqeTibiGobzha43BYjbG4wzM4tKurZvib31YYh6MMW1T98YRZJVPEPLutQYkuvfizHFCJ9xKi2TnMiceCxTBSMk",
  "key1": "5Mwf6MD2wEunmnLzo8SKLZdjoLQHjS5kcZ8smM8XJmfgo1NvFw3LtftVp2PowzXMyhy7xQpySoynbBKUGdsp6TzS",
  "key2": "4iJYtu1bp3dU3TGQ1KyTzhycKEPHa2Dk1Tn7tWp1a7xGLZ3We49iKTXnGdphtqCo7rsL9hA6boARJLQBGBJMxvRB",
  "key3": "5AE6GTrwcUGmf1GEmERXtZhEEixN5u7ZnDDuT2fnitKVeTtv1app9vagkaD413G4uJV71UHFRqxZMYi74kFVWpLt",
  "key4": "2SqCE2TjkjyZvyvcSShnS2HDiowQYJUciHM2QiREMrPHx3JQE3AccaDFsqULF4GZPu8zX3WSrbYQUspg5q9UmdLf",
  "key5": "v7rcx1VyeGcRt5sbbz6et1QifKRVPcLWb8tGyjGKpSxU3AUSsZuvupue9ZjNyJSFDEPXNkEmfntyWy6kgcowQTa",
  "key6": "2KnMxdcsRcVeATmo77NMK7PmMUjYX49YsAD44mww8wckmHZgzgFhraa5YrcTvu3AE1yz7EV5PqXuzfBQArGbkCzb",
  "key7": "2NYAimHYTZxLGCpkie9aiN6qH6sSKXjsTDyhqaj4BW8eU7As4XSss6PmkZeBkkpoyAGTL4QKRRHBtE3HZYP6RD3E",
  "key8": "2CuMnPJwdSjpvwZusFnGRFhWP2uVNQWVdtyvusYM5MmdBepajNth6oyvrJKoyYDnA6mxJC6Y4Ab42ydLGY15VFk1",
  "key9": "5EYh8oPD8z6D6FBwewVUchoMVMPbf6rY4ypaZyUco9iJ4mtx2jF5wrEb6nQw6v6Z8UJXytfHgwkcsgCu3YNWW23v",
  "key10": "5D584VSggFeDAqBY4BTuCeiPKRedPgrmWyHCr4AHcpdS1UUeQ6GZURVL3FCcEFGY2ZP8rmF9sci9KFH6k8FNQ35n",
  "key11": "5EtgnY1XVmKwBUM9Cqi5E7uT7T1Fdkg57ovcAmkfCqSj7H3gFYp2UJAFnaJNUgUe364N4PaXktFQu4q4JczYUdq4",
  "key12": "5KkVbn7m6M6cpAxBckF2Ttq7Er2CiJCNwLDQ5EDanSfp7t1sf5DtF3eZSeQQMxnpnk3JxqfjHNiK1gJ6VCBEdFvZ",
  "key13": "5jEdstT2yM72nUG5oEANVazVx8CoqhLcVB2Biio6kbs5gHpNuKptR76Td2iEtg9dMpy9tk9LjwgZfBLYQE8vgY5f",
  "key14": "2iJKCyxkGAJ9zpqhoEkiMQaK1EuznhmxFvLy3XPXW6zXHkS55W35nbkJr91MxZ4g4NjtdWzgKScVtfj29MuyWrYA",
  "key15": "5z8V19Zb8iKM3p69WLdsckqNictnLq7qqMDtF5G89rPxYqnady1Avr5ystfJnrsUNyu4q98FarzU7P4Mz7MipmFo",
  "key16": "4fExQe85Wt4AkJ17PsS7qB2LLSjrTck59qFipZAbWzqfVncBrGwqMboXNMgQdtYVzR4EBgQtKsyGbz2cBJ3LNZc1",
  "key17": "4TaWqUzZPCTSzhBP4mq3xQBeWHHvs58ZUKxks3jeuADtGpx7CJhU8pumMTjDNdjKxbzsW8BZyYaeqVy7aVxie5rS",
  "key18": "5vvCusm55tFDhiBzgRBTnvYZrWkRtSReXgvWwHCj3qs8Jqs7hE77YSy1y7TH6ojaYezj2ZbEtHUvj7T9vriSTVg3",
  "key19": "3mYeP4JrjzyxnWiVDAfjz4kpy719nMkPb8hfsvAE5ZYC9e9Wy15rNZAxmT4xYDivVVU5M59rn76gFFexkVyxsxhM",
  "key20": "2CYpnFEKmTPa5kZ46zbE63Rf3cWVaz1nBCviBkizTjpVgKLZ2XPuMefo1x1GbfGEV1RL3LT9qw2YsRBnKWfKJeNR",
  "key21": "3NnA2mTL9ZPmr229aXDurYmkJdrxUiHvtpuheXvPeUrtrBR2FQBSp7J4bTL661ZsmU8WhJiCNULaeA8hxW6YAXVP",
  "key22": "53kCT9hQ9FD7vc9eWArcY95CoyXRiz6Xg8SCm9yaDpKd9wKcf72KrMKPzopuVix6kuM4tBN5SDNSkscVbbtU7d77",
  "key23": "4bfbCr51YX4G1PPbYyHMFX33DqnDrT2PHyYeoUzRWUUs5hTNoYBs5uCsvVdQaRy8BsCCjKwWDEV5uBA5v9SJFgZ5",
  "key24": "3tEDrqKd9XmYAkPLsahFLyF4jSatxfaqLSuZnwgnoHQbLASsMunp7mvzN2BgVr59afFKVBmqamEWahRY2gpZUsGT",
  "key25": "2e7NyAY3EAoG3pdcaMPiTt1ZSPYwvwqdV7f9uetwX6Xb4xr4LaqjCDyqNp95shF3wB36RLGbbg5FAFbHoCc7MrHb",
  "key26": "2YD6wZ8AqLh4PayKX7ct13YYsfef337mckpG3sXEyvs4LDCzRb3wKANvPzf9Saaez1enNft2k1ovbsz1WaChLLFU",
  "key27": "5PjAaqbF7DfYEoRLnTmmb5Jg3NvVAnKo5d4AtLnQ4HSxYjHYff4FTev2joJRrnqXtDp39w8nkJrNzrkTihkHMtq3",
  "key28": "5Et7xrK9HsoRG2sK9DpDJej7oJNATv958ccGzuZgZM5hrMsGn7NPVdNqKgLSvgfh32w6qqkCihYs8Zf79WWK8Npf",
  "key29": "5yseNCPCkVEA25FJWtE5R9eRN21JQN4FQM4sVWbAwUuEc1gajCjmaVMzSXcBviZt8PfVUaCzX7YkBeNdKA4DkLD5",
  "key30": "4aUioSSpEVUkF3adaPisQZ6eC92dXP9fib392PxFHfV7yHa5cN38amYz3gv3K2yfdLvCvAo9q961pCiV9SvstaVC",
  "key31": "4YyWsofvn6nfQoXxSd3EPWrqpCWBfrfdK1o1hHgs6cUhGCPTpwW2YbZaBVBksXwPb9FimcB2KWxmtMpwFDKWeMX5",
  "key32": "5DXoDUwiaMVZF2CFogiDSDThjp19iGPGTFi7QgDNz3vqCCfBKascscot2Tb8yBDUNRg5D1EaJPnjWtz4aKgsXRUA",
  "key33": "5JHHvfnkpqqSDZHffTkr6Kyzo6qW439BPCC8uPC6SRkYBPE1bAyPsUbo4dMps87AngiF7AGXvdCw9Nyg8ufs3Xrm"
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
