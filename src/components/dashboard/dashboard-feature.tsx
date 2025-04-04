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
    "2FNozyyDPraWzdLcgFJZByNMMNoBMYppqGord55bSaS9nUQqxLEZLZkGBPdwi77oAVGCRZfBFWar3PngUSvJdL4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RXCPYQkAteWDjASVqU5viuBn4vWRbqmS9CGFBonfPU5GXU5HV6HcHag19ZAwxVQEQE8QrgGB9y39fKQVSiLq1U8",
  "key1": "3fix5315jhDbP31wnAG9FRGEFj4twE68GCFS29dRWVvXYshDBCoDdC4TGoX7DzULXw8RWgGUGHS4PTKevM1Gbcmy",
  "key2": "4ZajpnCB7pnxtWsrBYFAwNuY1QKvnkSDiBUq4sAYGZyZ5c5K5FehYCBVVRTSeJEMEZz66VrCc6LNd3HtAFoZBHNe",
  "key3": "hrDFxsBMYcd233zqKBwjPt9jYaGb7wsRR4KXnp693vPXttMSs5zXFejNgHWEPRnPNFYvU3Aw3ekZFmhPRRb4niA",
  "key4": "ZwssT8f4axrtQihXn3qhVrGHCuNG7xWU7qNzfCSxY5iyJhQVTwyw529tA5zQKmie3SrmMrLX9suuww6gPQF72qo",
  "key5": "5b6SpZjfffojpbGZ52Va3VJKn7kn3rEEAdmzBLA9sNWGDhwCoxMz3VmceUTmdeB1LCT37FZEGz2m1ynUpWDjS5cu",
  "key6": "2MxKupPAgCy5UAL61BvFYcAXvGfPYuGJiKhGd37VD4DLgL1vmkGzDDvktzzRcQ31FYJyvuPFG6qkS4nhYUNJopyz",
  "key7": "24c41CVve9k6PXbmAyTxzhZrfnRBda3fExsLZYpwRWzZtxMUurouDpoaqqmbwh4uRNE1iLYoxci5FycxbQk2o6yo",
  "key8": "22EF34cjZzLGMxrKMsWRG5K1QmvWM4nEqmhNTj5HcWPNE8VNdTnwGVbSLxSF4weevSDkaLf9tW7paDyMRmmrCZAn",
  "key9": "43tXWwvwEbNNXpdGmx8xL3DfDG4ma36s2rLobhKayNdVbkfc8dNnyvjvnpXRm2YeDJYeczp13VavxxATPwLJCXSS",
  "key10": "4YCmNZqGSwVrPAmfGTGdsn1UnXxWv8wY8pNsgRdmznn9RELsBHcKNnTQw9LnVbPh5AgbrugAdgqaZj29ETc9KwvC",
  "key11": "2nE5DRGVZjZScST9BRoX9jjStXR3iWsSSXhQRaMhhqfMa96bipGqNKbs8mGKDXUGZYkjw9vSBCyTi5ZbeCpnGfYA",
  "key12": "4Ne5AWz6GqUxpnZCqzJvQACpTYhWASb4u1YivfpEFwRkjh9VAv9nGEpXZnMdfHRmfBKEpfRpo8X7A8FvTkuUs1TC",
  "key13": "2vGC2yA4HZZTFHQWFsHsgY2o6XL9rFYhGxoXdRwZiXom261o3A6dSaASE7YbEjy48DBcG8R41GrKRWg9BGpZ4h3K",
  "key14": "2kqvYSDvjxUWdsZ3WgYow97eez7sKmnv8n7A4fwuBWiMgANrZmf3pDnKNtxBfS6xj3ANA55hE2Ne4uZ8R3gnoNYC",
  "key15": "4R6zdrPjZetQuq1qYQbewAEtEAsbVt93sm7igsJCtfGDMtgTqoDcTjTF6YLdDfC4VHiXJzjtf5ScVpndRBJkApWn",
  "key16": "4qqzzZ72Eep4s7DoZ9ivNk9op5WkrjX6XuEMUEup9Vo6wNYZzwBvv9C4VKCy8o2HkPGb2gnYByJzKMYzT4u7PrRL",
  "key17": "jEKThaM6sL73cZsM2SydRfkRYEWAmN5QTPJ287QbMgLxXEJxUnjiBaWiod5s31N2Z3Xvrm9Soknm2aWGhoiK9iy",
  "key18": "2Q4vuMHdhcMe8nRW5y3pFXayXxJ1eMXbi6nsXeZCUur3BVSQns9vULbRUgqVFegdYFU1Wx8nfiEWvYhKbFrLXVzg",
  "key19": "2pHbVqEwEwzC9QYmAp6vP9A66id3MrwxLbKqwhCSeGTW8UJ5qcoMFiymYWDSjhcsQhSfVDshd1iS5S2NTV8epCZa",
  "key20": "Z8rNTkxkk1fMuu5nG22eFZa5MLtGXKt2N3vtuYnAZshxEQJ7MEWpJkMcUenL9gvUYPyxQnpMnDx7DEUiLXqkW74",
  "key21": "5cr53GAGGopStEyoG95K1GPTjKFGQVfw7RoooDisD4e1yURGVdK2rc519qqRhqeUXKV7PzAtadfAtsyqsGCnEG4j",
  "key22": "c99giC7KNBdK1QNnvPqzDrdAD9ia2zwYjQvg7hGPj6Jk1y5TxzR1cDjUcW2fMjsjD3AWJEdLpYEGFuiMbNDmoUv",
  "key23": "nFNzGVLT95gWDc28iyjpgsSFra1BBxCUvCtRZjyu2PHd8UHxFazbf5F14wn3JGfSU3HvxHLc7o4AzHsMP3fw4aa",
  "key24": "3XtyE2y4cFVrYgHKn2R8RzZ2HnGnRNrehXD8NjEYYmKJDtDcuo754qUf1A9cZ4VWaxn3QVd4xqBUTcSiiejgE5op"
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
