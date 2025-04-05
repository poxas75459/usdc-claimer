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
    "5kpAAC8jjnGKdTUG7poEHx1jEbp46K41Avapd7SzH3dqagqtgVcf3hEgxAxxB1VVMkZgSB6Z7436Q1G59Hzz7smC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MMXWjwpqoPdbYRqdfYyQ3QPuRUF7MZ89dQCiN52qEFu4q6GXa86oXuR2iEKb7PZvYnKyAg2BHFcirBPmqYVNTUi",
  "key1": "ypd9iX16rDDGybperVBNi6VqR4MwGtW47vwQtRFKnL91q6dwG9BmnEaDVg3iRFQRU7itMu1yHnxnTsyJiaVNvrh",
  "key2": "5phaztYZr7hwQ8fYGEixio1ddoBmX4uCQouih81VMyyyRB8a7V6GMWwd9R6WYyWUEfC2gMiuf9d83HVgDA8cRx15",
  "key3": "CFF2QN6XRKaP1esQpYMweGT61TWPYSFHrirh3kXrqDJvYt7vhZ7xvafk3Ft1gXwQEDX5vuAN4yDKBnMxtkACHKZ",
  "key4": "3kkz2hik9acAHzcExQ89v68eFwL5zxDQxTAQ9hcqz6TYHbYgJr3rTMYvGLbx51trnmSfoo3RcxEdj7nhy1WaeP34",
  "key5": "5qfutDLzvDUmGwGX8TzYCbvQKGvoFJjurHkg8Kgqje7UTYfKfVSUsXWnhAK8v9vRS1sQsrZLv13dGJedP881j16S",
  "key6": "5cNMyUfreVqgE284oztm6xvazursA4ZrMYmYTkJL19pfb55wMEQTC6v4Yobu6CcW77HeYCJmMSV1jwMwLufHMwPy",
  "key7": "2kiBnqyRMH5BKVuTv7EN68aPoX7Pdzyteraw2jiHaxAP3UeCVzYLMFtTHnAsdvaa5oUg9FqEpmK83zY58buguvTh",
  "key8": "3VQ4iwDrQmRVVoDZyWERkTqMksypviVt8oxvgpaGCjofAdWAEDA1uP7BoveD9zk7LgZN86SSK88AjbwRMfuqWJQS",
  "key9": "5KLpiNeqt8bjpdqD1QNqMMqhwmE1asK7XDEA3bwcXEL6oNbYys8tudi9ZrNNjYymSLS9wLxPiQ6bncvLoTxVDhRQ",
  "key10": "5Y5oSUbSTUGQcpvUx1KAaNZ5rKSPdxf8VDFVGY68VbRoxQ9usHPtn8x1nre7dHZHMTocsNz1CXynNDLLwSANjWiP",
  "key11": "4KQU4k8HyAVUW4CgNuHamAUZRe3TSDdtC63WRvfeXaFakC88kYawdVDt3FBzGTrzBTMym4Ld9yhXJkUYXqjndMKy",
  "key12": "4wbN1PaZ52Ko8mmQV4sMD6eNCFp3y1STagPctZ8TkS1me8LVQB86ihUhffrwjcD1NxzQycC1sHodbEctZqn7hf2p",
  "key13": "35fPySCQ76xsmZ4dWtczDBW7gYCz5HUND3fbuYuA7wgXqWFDVidxqV2NhAMyeuinAXn5PTXacfGVMZFix5PkT6oC",
  "key14": "5R5AH8anyHLZ9oHtvyG1eP5nYkvc9FhT5dtn7XjYmWgVzfFP2QQimFhnzsSJR3nM6Eh3wym18t1Gj4jmUNpjr4SQ",
  "key15": "6DvvZMnqpQGCh1dnvgbcCfC3Mh4zdfYAPTncg2utr4E9e89HCzMeBwvyoyXE5wBHPkMmM2X5jusy2oi55Es9hKo",
  "key16": "obYsirMDkRAy8uPToZx3UHfJYUQ1pHSa85rWdZpfgPJ3WsShoSaH8ZdNoHvhZhUqPqE1mrPz1ZfXbUMftzHwvVa",
  "key17": "4Ysd5RhKPpFM4yjmNjsYXk31YuNBuT3sH4yDMVKiVnQvQ71ownr3rYQKYDNZhdkoaP6ZgjzmecXBtsXnUM1QrPDP",
  "key18": "5VcxzLJhxmFS9uTJEDXUcWwvQ6qzfW6jmezZnwE4rs1Q1f1VrpcuoUKzFzfmNQ5jQTX2ugBhiAP37AdyQ38tiHZp",
  "key19": "4BGPeTEhYPddqMD4T3yVWQYES6k62PnABTTx6oDrtW5PiH2Ds6fwNpVCycB11TETCqcs3xhnLv5qPEJPXvnKy4Zs",
  "key20": "V9QBRdgSnGDmvGoFTFqypA1bjuU84BRZ3L9pJ7E4Tjbx9ssiNjftXS2hdTb62u4nqE69gjoT464pyjLj7fg66oP",
  "key21": "497EXuyu7jRTUZsDNrxFBqhknmmbz4RBt1WFRoUS4tr9HpYNBXqbtaPMBCrmzbnKZose5xC5THcUVwDnZThShYpz",
  "key22": "cffgY6yX7qWfQRqVbCn2ySYqX8R5X7G5gWD1RQbHQZpoZmaB1oW3mmXe4hdtB6zzwdTBm7SarzNvFPSXGx8PzW7",
  "key23": "5egYea1z6oUaAsxYUwyMoqmxae9xnN7NRZSKCHdNd6NfPAaA9zvxz8JSwyBom8t6QkP8CLi4fYV96pU6YvBhCKVv",
  "key24": "3rAwRNpouhixyyeSHdnr24cv2tYG72aT41tMbgWZtfZD8cVAj8rM7RmpH76myDx1razCQFHxtWvDV7yHGtYnPQxF",
  "key25": "x7gCwWpxboRP9XyUdWEjvMEu63EaTwQWN41cdfbgSKzS22UAXggcvppGB5mzKbA1DTVRst5ydw3xUC8W5MxRoAh"
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
