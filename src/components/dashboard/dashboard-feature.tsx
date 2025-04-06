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
    "NAUzpRCeGHTUFdYH4esX4X1ha4VZeqWkYNWvbNFxKsEMCWwpLvTGpi5eyfhjW13vmHbjYba2EZgE76xN1xeRYiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bd16wmTJVFuEF37TFL4oU6WvUU6AJdxa3BmEkSfYKQ4yhpSgitT4HBwyLMj4dws6PEQjhYBvjqegXTyuMMx3Jj7",
  "key1": "5vuacrTbsqQrZGbhbbdTEVZuSgdtRKV1Tt5wJYfRrpkkkpQHree571GMUvogHdnsS3r12FeNPfi3ESCkn4Eg5zCV",
  "key2": "2CfHtU2ZJhbACpdZCYHqr54rSCsGcG5L5SpYRfDyJnzs6GSGr4wvsBtgRdLQFssNKYCHEYXXYdZkvhESttB6utPe",
  "key3": "3o1BnFHAvrDRhARyNMxac8iigmjEZQq5JzjTDMqyb8fahMViakA8eZ5PaTgKMAtmPvUHqxKX6K1HtVPsU2UuZymb",
  "key4": "2vtyLsbjA7CYpFcFTM9P7KcBwVtbFxcXKJf74vZfBkyeVgqRtSdNGuGmxPtrczu7owh6vb3DTQp97QnVsj8Hvhd",
  "key5": "2PjLoMGy7qAMDD1wtjitCcygChpmHURMJUCyCdpL9bhfNgb9e96S9a5B6ef18mbuzzHvBXLXvvodaNVdBN4RYnCw",
  "key6": "qjEm3gK1WCTRYvAeG3EFJdrTx6wBT4CpJqiyHKWF4oBFyPQScwgLaSTwBZHPMdDoS9X2ije9RSegSMfScQ1GD7q",
  "key7": "5McsEPaZwn9LEMSM3p6AZqagAdLWEATj5MPrZfBFdWRkcPCd27H55419ohLLHn7VB6y17GGD4vjdDAwojasaH5Hc",
  "key8": "3xvNqWXtu91aLW85jxyjeQeRTegvqCCBUF4H8zTovsR21QhFVeuex58TDWfCiq2rnVx4LFzq6hSfXoDRsuemEmTn",
  "key9": "4YZqKsFxSEJBMXQJHSDLsi9pi9xX2x2m1NVrsaxZaXw9s4piN4hbkzSoq94KSKwGgDL4USYbxi5ut8ekz3VHDw8B",
  "key10": "5s8bSEnEXBwYjquYExDRoaw2PpA8jJMtvA29GfZQHmqEqZ1N9WhFcbZxqRwW6yLGK9nkx9dzLBQWAcxHadreRy3F",
  "key11": "22u4oKijH8tizht9VZH6yLgkJiTMmrV63sC8VVP85k3eRx69ucJtJUd3qqvbBpQabVYYXiDGXhkBSM3jXtBgPVWJ",
  "key12": "3Svgn676ceetEfJw29cieP11eLASoP7AMGrSAY9xfatB3ZuMHWLNuu4D5A9XuJYUmr5p3GX2HGy5UxQJ1MRyDHu6",
  "key13": "62HfqAsGHP6bhLcqhZtzDufSFT9PD5qM8i1imNjLQ4JP41BwjEd45sEtBsAjkLMduWgFGriwkmHDhV342jQNhMN3",
  "key14": "4BysfCZWADhaFNEMGxq7nV6pzLp4eu9JvYhP1HKcPNL5sFc8zQ7ogXZ5oQyZSRWJuyJnoeWBNNq5pCosn4HwHA6P",
  "key15": "4osFuRnjzDKiJQoDc6SCpZv7tnxdRKuYEHu6xzRt8hwyX2sieybkErKtSTrATg8ZMJtwmemJEVEZgzn23TNMsBuH",
  "key16": "5iy2VccozX1FRo7sjf2sHE5Rt6qhqS9p176iEzYGrDFU29r2i8cei6sunCxoWcia2ck5rPEoNYTdHw3hzsdFurhp",
  "key17": "5vdcfMNfwLxnqNEAQRwhirA2gUBpt6AsNxXtWJQL8Ro6vBF1LJfE1LMRPe1UL8VP4vzt7FNETRwM9HsNQCdnLDsK",
  "key18": "2o615wucuoaEecMrCKn5GBzWNNovLfrpEJhtZBUs7wn95KuaUULz1SeYy51e9b1JEezstEDesStKkB2uyo3gBT6h",
  "key19": "6XufFXLhaCcqfAcneDA2xo3SzVrrwBY8gz9VggKQSM4SsY5C2EVAwnrCxdx6v3E4H4b3dkUp1EY6aGsujBa2MKs",
  "key20": "SD6graD5EsjzYzjKt1AEuqkP7e9srPNJCNFMPaWBNq3HEBbUT2oSLiEZKXBspURd1cWQijvFe5DWDebPRWceJ8R",
  "key21": "5XyPuhBWTMyw4v2hQHqQKNTb9jRgbMWwYFnzKrodP3R9XzUwU9yk4r248HVkSjDn4ubckZ2Ch9TV6Cj1NnUexJkD",
  "key22": "X6i3vQoka5WgJJnZ555XPZZBTxJVdLrdRdZZ5SCYBr5nXAGPMnUsQkT1rUXASkJVW6mj5ne9mduRbSHeAhQGd8c",
  "key23": "4hnLRjPwbfPoTx9FmVjSmi5aWUcvH84eSh1HYCNtsyh9V1rJYzbvTCYA7D7ebcBts9ztPwLGqEYnMsUsyeY3BtNn",
  "key24": "5S4vGW3oK2obBMTkuvzdqtxTgNJmcPt4bSVJNxws8sLEYccr5YJQDBiADkDvmNg81zLutQhRcNjpTskpyMvhvnZe",
  "key25": "26uP2op8N46VLdrRwqtTFSr1RXNJAgPhKHS3hoZeq6VzuXLRFzRJVNiCaFovaYqTSSV6cFZ64sx1f2NQq7NcVT14",
  "key26": "4kPhcTLjHwq67Szn8T6CiMm3cNQWJGnLtzY6bsi4KdvjaqKAGgRxDMLRa2jcLTAA5RQF2uR6C4wYQcPw5JruphLT",
  "key27": "5RgFEyhmb2x54ba9hdMydAfpa1FHd51CKb4J1g7MTM1ppH8KkkRAcbeef32rw4ZPSTgmFZmhXvNamjcxcto3voFf"
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
