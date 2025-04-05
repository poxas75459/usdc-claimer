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
    "Dbpzfo9NPbjWmNRa9bMBu9LvDvUEZLB3D5BAeYUKMxXLFzWfCrbwzQDp8zm7TKJGPJZdUk7VW62J337Q3EV8Ge1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zBeBthrCzi2ccm1TuNhpTpJYBea1oiZyYxpv12MeoQnLspndccKtP7MaePvdwAMLpNX34T3WGmygrwWPB3yEKt1",
  "key1": "5Shrfz1v71GvLohZnxTeBgwxryBF83cvbWbPAqShyCkDBR4JqR3fo2DnMJrF7ZPSC3BYzbpu5aLKACjwwjgNGV2k",
  "key2": "DPJukoCCcSkaDKgDhynEVRUDzwg7HfVTSCKftDefN1mbfXod5FkGbMvMU6Fz39CMg7UNywL3fPjfnAdmqvj6o2S",
  "key3": "4Dz78s6PPkr4sWRMUszLmS67X3PMnZUhK8RwEWbc5rgfVF6PHYwu5EhSxsz1whnq1yaSBXqbGTqB8EzdZkGw6Ne9",
  "key4": "4jS2QcTE7LuU9PcKjx7yifJeA7aNyDx3Zfpegxj32TpzMyHgmHgBaQShwCRvibpi6URKCWXiVUVprqBJ59Apkfvx",
  "key5": "2oWFPE23dEzX4mmTNhVTXCyjGFvjP5mKaijqdsL5fyB9tD4q7uwd39BUzhqpkHRAbx6cXtPQrgECDgu5Aq9b6A6c",
  "key6": "5Xf6XcHPGmTg8fRBMEmUN7BBJPtXnSXjyoh6gLJK7gmahMNr6iu3DyRN8VNsBk6YfsU9QLA7oMWoMj9T7EXoVJR6",
  "key7": "2sXmKftqXREb8D7r2rz4JT2HwQK7zwfT1ksAxyNN3HgLEQfrF4ACtHTDENpsbXB4YNaESY56GB22aLppbRvrTvG1",
  "key8": "4y4RZhXeP6woK7jWCeFETh44A219o8MPRUJbZeVnE8BtVShejsmHHCKesfXM3RfGsv8GzVm1o6946wDoyeaHr2N2",
  "key9": "47epuDyex7ocQgheSVk3eW2o8bZwNDhy2N9jPTydgjWiB4FkjLqqLb6WwcmQwfj9ccZZMNFz7UKUrvB4ZVB7iczE",
  "key10": "4BzuTugAu2mxTDcw7KqYkUzxjcyunWXGc7qfhZRhfRgrDN5JK2KNfCDwSXnNUUCWU7YJkV9oNGdeYNoCL531TqsE",
  "key11": "2dazeX2KxRZr71cEmixnQKYhrHQmWAF7WqK9DHQsWDW91adMdfir3bPPbtWZnS3nA4mNw3z1XwnNUofAwh9A9VCX",
  "key12": "dP1VvY64yZURQDNsLHZFA23FiosFG49yVQSzXprjwezsVe6vpdY1V29NQsNMdjiqiqjWL4DFt7sA6Tv6xuZBLKe",
  "key13": "2rcSmxGVHYtciS7CnjkZDhgQmwpxHVpo4mtStsg9VPoapjEnTpDJiy75uD1EEJLbL88B14HvUgzbzr7j88mck2yu",
  "key14": "3rjJ4rEFzVhR64ZTeLUGSvBccqpPfKVx9Magx8vHMD8sWSHDjCoawjUwizXqspR2rJqFCvZCea4HyJJ37gPKnszj",
  "key15": "61G6gUfMEh62wwkgyv13VpTfKWSQ7bPFa3jqtFVrzCYrH4HQhjN2LhHUGfKWqfGAGTnFD88V2nMz4f6gdBqQKT5J",
  "key16": "3cx54RXtAL4AASt8zmCyNXdK1dCU6SjLQC4qV1vhBrYxFYpYxCzKHn5HkL7VqUtvQtskmtSdW47ZoUz3FM18jPkz",
  "key17": "2KBPiAZpyqxg18jndZ7imM3qufy6cvekavZSWEbRGSQAc6dCL7ou5sBpaL2rpFxPbkMvvGc7F3QZw91P35wPx7NW",
  "key18": "4dNKtFCc3Mynym3v9iY1AgVcasBSKiamEDGtQrPpEx88qN67NMMyRAmAFchxaLNMZpyMuC9wteMMPhLajW5HcuyW",
  "key19": "MLcCpfN8Q2KKCytBj7BKjFiFQrzq6DUvpiAkw25fgp4oV33VF5ii6UfsRNdT3Wib4qyhBH8p1KjJPo1H9hUtYTY",
  "key20": "3zdtcEhnctj4tVFETQdW7YYh8V5pxDGpEFNnDzeWf3yWSAQazt6riuExYcgQ7kYGQ9QVFCkP7Ad1bq3B4TYXEDzK",
  "key21": "2z1iKPeac7rkadtMdGNZcGNBdbdhVdFbMhi7ZwsWEAkCRaz4r9T72xZZqcTvnA6Kv1Z3xy7Xd3LbxRXz8nfMxYuu",
  "key22": "3wbtA5qfuJQ957Fk9sst9DgxRuQuD48TzF5BCgXUr6hqLdzXGEYcitu2jsWvSENax2MKPNfeXUcNLuXxqa86JCCW",
  "key23": "MTXYCk1WMdfixcPv7zUrF9JpXzUE47yNjhCQzh44r3q9Ndi66CKkCmQ273EPcJXFRm5k2wyzLKFBSgoCZ5pxCmL",
  "key24": "2EGih9YUEqkM6fdZd4MB4P2QDHmVVkDyQPtKWpUyWQb3QzvD8bNTpD7YdwUJhnpMgoHgR7PgNPoHvBfDKPyLwoEH",
  "key25": "hdwPjnusPNFMgwNocrZSpsEyatAiucZF2qmmKcG9gJMGefYxVUBWYDEHHFvYKQpJ5tKmYxK2W4fTNYLxt2mZbAV",
  "key26": "3m6rnV42Hsa32R84FHcfD1q82RtdZwPYcy3zEH79udJmpo9R8i3Dew4to5UrJb3nd4ACDww8aCzzisoVokLutDDd",
  "key27": "4gr86G3bbxU57YMy2TCeNckUCZncmbioPgMqyG5gQARUqnKpTrytq48dGJevvkDricB6Chc753SCLcDriSzpSA7W"
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
