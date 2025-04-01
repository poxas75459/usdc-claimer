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
    "3esvez8p1MfqWSoTmtBpKwrqCmVec8rED29nDKcp7ZxFdXgL4JpXrfTvcfHTGcLNYZDYPYDn8R6X8BiLNvcSDep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a9TbN117v6RiKWgHqP9sgCjmzY6ezW6mftmVYdXCNRkAjmFMiAHkx9hzQgJz13sZdVi67UrH2M7TMK15MxvTopU",
  "key1": "62c6YM1L3AtsvwELHnFa6tqetxwLPQNFE16X2Eda1rf4eaB1UyGnV6roc2i1bTkrqEwAK6o5eWqiRaKamcF85dSm",
  "key2": "26QjvsVBJEVvc2S8JHaMi6h2SG5SjzbinPS1amnYJgNPiF5J5vnuGFZ1fsF6jGoz759Q94U9CSDaHZDytHZsFici",
  "key3": "62Kr8TsvKhWts4AoZxjWrixBwRAyrnqWrgMnsN4XaD6TiuHewwfe6MsEP96PJWyH6cz9NFCSGHi5S5zDSQDS87Ut",
  "key4": "5spYLHqfPwe8bj7X5348USmtZQBpPjQWqorfjA2UcuygNc5DWsRWPMxRzuK4Er5qPTPFT7a6q2r3sMjXyQnppaWZ",
  "key5": "4ZwN7fErzvwtiyGkGHCfdcQNdzAZNj79quhueDg9oZ1ZC4Q7B4UJBvgKbXpTjKLT9UkxU7sBskvcfzZSstL4QiUb",
  "key6": "3ofVbjGDgRndbm6qNZed7P7vTxdx8dsdCai4s6cUgonukeCZaQBtQMZExeUHk9L1wfjWe6CpCZ9aX7s9CCYHheeS",
  "key7": "2KfrMDFg4Te7jFJu3DvQZFAYDFwtN6BtuetyscBQtssmPFbYCgXMBH5y5k9i3gvWj86GnC4k4hiEgsv3hUpyW8nN",
  "key8": "4XXbRPEW7rW2J9WeAf5wMAcD1ydHfDBvkA8Wf1e9bUELmGWijcn4VkGKfi9Ly2uDVK1uccN6xQwU1pu3eMEpbsAU",
  "key9": "5LAvNcCYP7rGw9oKrbekvoRb3fvwudvTqb9qqLSKyPYgh35cR5VCvM1tVTSQiqGn3vV51bB7umGNxL3TpXLWCSLt",
  "key10": "5sZcd9CdaxYD5RaU3u6iEpYmYS2pbnvZFvZrQtGLy2hDiHgGe9fXntdfUuQchBmnkE2oGiTFzdzvariGdBuwzJ8n",
  "key11": "aQe3nfpdbw1Yco8WxLtyB1aLYpYFUFcNtxM856yhZLv7BVMYFzhZ9cph27Aasxtmmvfmun42nk7bB64wE4at6LX",
  "key12": "5QVxR9pDKZaq71jwBmCEUAvzayNT1A2tG64LskHX8gjzMrwiBHtGR3PBJAGAUwV7nTTvoFGf5PbcJMJS7Da7ajaC",
  "key13": "54i8LYLjb9iUfm7f7G9z7tLJWXzKUphJTgSWA7JnL79pUzTLBMGpg31iKSSSZxhpEiqAuePoxneppjDbSfFdAoF5",
  "key14": "4CrgejWDuhSoczXuTeWUYUhE7AR9wqPuuEuHQA3jrP53fs6kSiiNb9hRV3KLyGbVC6RRBZQWA27z47CyLZMcVeBM",
  "key15": "5u7qESbXH3fWNA1Uo3bMHmjiNxCs3KXFdgDstk99Hd3HHKuZ8aDv2QTXnZrmCnpHpBCXCj1XcNQmCQJmYajvWaGT",
  "key16": "5qqwVrvHvG7aJnoCZFqdz9k95z6G5fvtr7hrYHuy3HXhJoi7ruZ2j3WjqALC78MQqvFcGZr7khkkbLXoxnGB8ndM",
  "key17": "3EgwAaHgqf2LzK8WYi5xm9Y5AfkfV1rgKZBGVvh8unswEapJsyp33nkfAmHi9FQFzzV6KbwooTm6ksrvZDd5FdZ5",
  "key18": "5sxkjPyMaqTdaDNv3duGavEKwF1jPAGn27c9W6UawA3DGaXSMs8gRWMdwuEd2W4VSJdpGPdEKtLCAgDDNVXMNcww",
  "key19": "2rTgHTjkpVbWJfec6Y7r2PuzN2NwmYdCd5Lx3gfBBcq66WGXyVSTfsRdMs9dPn2pupAyDfbisZbMVigEDEseipT3",
  "key20": "5Kyzb2KcMcNEcBYgtRz5DHLAXbF4spMkkK5NSfY5qBuGUGEMoSZZpd5mwR4ojtUyoimPKGYW2rBFT2zRzUKHKGAH",
  "key21": "2ChdE8CcqAcQaxEc9gqP6EqVMrAkC8c2XCX3fsMPvuocBW1Hh2eDGVW759VBLnfCKKNnZdZF8DbGus41KeYmhSgU",
  "key22": "2poA9mohx1FkxQChhWtzrFV7A3aNx1p4qmYJcjZcCtfbAGPj1D2bA3tuYd26H9sQzhjrtui4jogZEpaJUeKC27i8",
  "key23": "oxpXZj4FeabaDBb3MpKQjktHZSGPQMf2uJxzRct2pcn5o6LkLDyQBwyMi6FVGYDXCJibNsFjoemEJAVMc8VBSgs",
  "key24": "5LPNwQNM1jXhFtf7kfnqWQjELjj8dwXDrGvQtg474bhMtchS6DKYFB5eELX2kGVUzvUUKvKewebv1yirKqe96o86",
  "key25": "61ksG9GELL8oj3MzRzfSEoWqPAHsJKfzBEQdXhLM9p5iKqKXaWgv2hrxuHFyXSPRnHch67k4Kpt82Xg4s9EEaMcR"
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
