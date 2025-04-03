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
    "5GWtzm1LWBechEemNPtKt5LctdwwLBDyMjfrdW8F6EvtcWrBcoAaHtgrKynnjjWz6FoCfaG6ka5yY2bdLy5eBfRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bYXFSd9ch7L4tN6wcfVbZN4RS9WuZTZZZBkHYxDXervVMCqDU4pEVSB1Wo8YVNd2G1MK6asrRT4eXc5fQKAf9r2",
  "key1": "4GdWN5xWzhdFBPS1tjQ7BbYfDgKGfPA68N3Kz4hQ5uMjf5uFY8ucoAT9RKXFCYvFQgp2aFYTsED5EwPp7ozESGiG",
  "key2": "47nkGr5vYzA2z4NyinabzNDzJZiD7tuTN8mWqxuHFjRiZ6uhc56qj7dpeZEnWoHw7ygzSS8sdaBEPsjVMhDM3UVo",
  "key3": "3kFv62vQ76CsFb67wACjsAgkgwaTxGc9XG1t1x1CVbX49H3DPc8ewVdS18ULD4c91haSSH8yvF7xwJhfsYq2RsaT",
  "key4": "3r8peETumac2wxkDnGsES5HmHyeAYQxRkR8Ebu7tjEYRnR3s1hDqn2MuksjaPVQCVe2HEjNR8v8XDTba4sKfGBJR",
  "key5": "4aVpkdZuEJHVM6oJycD2EtuCp4yGcc43BoW8rQHbBXT1sAYTcDZVnREnLTX3JLveb3ZyKTugoAWQnUogwd5czoPA",
  "key6": "3cRt9BocFDXaEYdqfh3iPY7hJxfsHSnvux28oV9g9CC2FipVUpamCbbdRCyWCGcb4Re9Dz9W4EDWTeedHzBLxTDP",
  "key7": "45TTc7mJ1dRnTwkpHcsJ18znvt5zfRsJB5fRneS95zFD2LEqQj4ZP5rctvbQepgFytsaBG67g4s8yoNHo6cPSTUx",
  "key8": "5DFLypnZAQ7NnDrCRg9QdgxExhc6ZfdZkFe5BpWC9JPqh5MtL9MY2H6fjs9ysbYbysAJtjFjRQ8GqhX3MUyqhcfg",
  "key9": "SuD9cLZBpsSASvHZBjap1Q1vJoPDrU1xPSLqPbEVD8oC6NvY7BsMvpvmA8g4i7kTqHeJNT6V52VQNtaMxojna5i",
  "key10": "4sDD3MewWnhmr8jAHDKnZ1bG1NzVspcbGGHbMz8w6kGrvRVoaqgRxneg5ZGJc4ymiXtEXbWeZ7d1R1HqCF2ZiT7R",
  "key11": "5oNsQL8kgLUuSxx9eWdY5srM2p4c7rFuGrGDUT7wK3e1oyDXR3rxJ9GDG2JYaZUFwnwTdSRfQxdy4nz6FwyRPnEF",
  "key12": "z9sT6gBFFj6HH8xMn64tnTf4ykt4AmaoCgUwdvFmJKYvXSZxRwRdR7vosEUNgHC8VAgJxx6aBC28gBVx5tVSCMd",
  "key13": "amUyQDgRKr9CZDntupVZjyrjyZo6uqnMN39sBnzcbpQWNGopSuUHLDJpM62AvAq6tSjZu8gqT4iuP1qwWeGL2wb",
  "key14": "32PX5MqFTvNK9oHSKvL1FiufhxzrranTKgGtkWzHEacsGGCgq7ZHWi4jk8en9DafCQx98DZ8QkLLCguTeGtwsyrD",
  "key15": "45fEZPpppKdWuUBR2UdK2T7ZfCpjm8yPGwbrHB1XzgHyyQcZDt8tCEEZ3y9TnHGbWqtxrbEHmZAN1v55NDkdZi4D",
  "key16": "4qqR2Kr5uspiMT2Jqr2XB6uALrLfpab8kedytYkzd2MMkRuY7z5izFKzUqUVjjNejSeE7sSXVGupvQ4YLLP3rKUe",
  "key17": "2xXLSAhExDhpFGadir1gWpNfTnjmw85jg8YmS3S3c7S9bS2wJFKJP4nBAaXqXzutAqe6YSmH2a7MKK7vEaiA7vPm",
  "key18": "2vWhgQBSPZyMRB2GRK9K7ZfPZg4iaqetBfQtMQiBtnUmrcnYxaRyJ21kFq47S4AJq315d3Zb2CUxo7Nji98qs8VS",
  "key19": "R91pvHCEm3UaBSrvo9XDRSTsvgKfP6fLY4eacpeRcipA4wLsVckfMrNbAnNnTzANWDZCqELmsFFaDPJzW7MdceB",
  "key20": "234PJpj69gFjQXmHk5JW8Nmrt8Zppq4Yy5BCUcC1bdSM1zQXZwtuGw9HZb3HQAHT1wed3aE23ex1dm6GU9oWPzos",
  "key21": "5vVUzcGaGDXiCau4BRX8EcBD8wiuMfACjKHBpW1UWmSBiv7KTkexjQspNhPqfPpBDTvriR8v1p3MEWehFiMS4ERf",
  "key22": "LVPLjfVhBtgJSqiLJTrx4ge8nJZhXpyHC5ZWqAq4YdnRPbQbJydatN2cZTG24DayUCDHegUsMCaizVQ3PyyWsHZ",
  "key23": "58FbrpxQ2GQsiRyznjJjEr3fMpCc4qV9dNN5df9HK3CqshS44aPuDcMCSTCnUcRyYFh7UpoXKXi57wy4zyq5YJiA",
  "key24": "2V8ksTyUd9WZLw7AjchfrcReJhXpyneCT7RE6QVEz7VAj2MTXHnJKbcvwQYCjS9S4pCMPmqEGeYjeTjMyvaaRoQi",
  "key25": "2qYseUtQRcbiisqdN6peiTgMaoautGwizfPWF96s2tKUVSG9mBv7PAoUEmmKZAkC4vZdcayNvJhy9W4KVcrFewiY",
  "key26": "3NtAQE4NoYUtzDfuumP1MJqLLVCaUprQfahZmnoYtLueDJ1uaKucRgoiSKCKK4umJB7ymGPJD4eLF4TVcL5BKFTs",
  "key27": "dPsEgpzcg4vtwoHJtR2CzKFFtDVcj4TgDP9PBgAbYVnpnjarMENdYjedYrcSq29EZA9ReWcPQVwXHWwuCtriEgo",
  "key28": "2xybtHMx86axvHcAa5R8EFjrSSG2Z3QDUfHSNymnvuBRhgWug6bQCsq2hXKQbavV13NMoNPXQMhWPYH37vB4czg7",
  "key29": "UpDeX1wFFWDXkhZDU84NitXMXv1S8fjSYQnf3tX7dhvpY8bto1ggnVrrAYBobrJjQVizLS7y8BecmdnYtYaA55G",
  "key30": "2rCbAhf9iQmmiFrjSjdKwZneSJsYhxLGBGMbqh1ozqPCoP6c1BM3XffpBYUGSHFsyxbtWDU4C8jwCNrLExYq13YA"
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
