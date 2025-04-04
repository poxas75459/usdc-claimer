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
    "27v8Dmmwt5SRagjWnxGhY9zHfDXWofGumodsXGdJDcWxPaaneZhUef1PAX73kMnJck9DcvTRFfjBkurfuR8HaLFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5izm4sY3tcBSjQ2ReRrDY9xZmLF2m4EWgAdnr5caCiWfWtHEs1fE9gVwNZ4xHzLnVEr4fo3i7pRUGrtpVkU16b1f",
  "key1": "461gCmqfGkTfESYawm3R2Qn1kbJJ8XhoksHTwmTTwyfYoDjotYv47Vu9uBQxNta3bqEpqXUT27koGXW1K2jmiXVd",
  "key2": "2iundKQGdwSMsJJXXGyG4U37dyXoiDxUdPdHWk7wjUVTYxsh9AUFjgYVqefHNMEkgub4YhXNbEGCYxaHwHPB1z7e",
  "key3": "5BGMvC6PczZSCgMHyXGNkEmG1iJsSaxDLH1tJBW3ZefH9yiMKPZWyQ1qdphmKUbvYbs3w4k652V2iTpte3qQUU7g",
  "key4": "4Q2g496ExUU1gyvHiq15fpvo9bXDcDTdmYsfuR8Js14JR5MM9d4BCxjoX15P7Tn3uHkC19rGbbRgsRrCjh1YxYD5",
  "key5": "5Vb6P2WZRoW3siG8uX9rEwkX3fLnrRAZkCijMWHwQDChg47hNEpdNbG7tW1jHpryMK6iDjfNuSvvWTniZrguSea5",
  "key6": "2dZQBnidXWqSxJmowJaf964rGcv92Ezu9SKVQxCUuBwFQKB8MXTX87pZVMTEoKw63YfH6mexS6SrQGPoJibcJB1Z",
  "key7": "u3b1rEUM9QTKbsW3LPKbhTHmdtoc5dshqn2fBUsYAsZvQSwz92qrqsWBHBeMaF4zJXdMCUqTogY42Li2LHHFbve",
  "key8": "2F4KECH9RYUCqaPdRdsSuTL4CTd35Vmjjq7iGH7WxRzQfek4bPN8sgyGJ4gFhZaMQqAAKwY8DbR3pVyJoN3fy84E",
  "key9": "5h9pSUxPxLhzsWnT4A6sm2QXEaLG8RfddbZK8UcUgwAVnKqw5bfEvUgYBHt4ho8zo58doJwahp9MfhyPJCgFSE6L",
  "key10": "3CAEzPC4Ti2FxhLk3YZZcxxPobeWpmXMWyLkDanPuNvtBhnVgpKbhwcfDMbG59ojEF27skMUgKbV41LuhDxnvhi3",
  "key11": "4vo5aQbYAdyYXxW4FC4BG75bAoUzgJxjX2p5mCsAHt1ryXWQaB1gom1VqBqJVHMCRqetqLZKdrbY1jTUaHrriG6U",
  "key12": "3ZWKRgZVG2x6GxZSVkyxeV5rNnE9QeitXxNNXRMUZxPvFgcJh3WuncsYngTW6TvDtkDjMQd78umuLgPHeJ4Stxkb",
  "key13": "3TZn39BDFYjxiYnkpToBu64Lk5qCQzsCuFxfVCgYtyN1tNQu65T8WdNfLfnHec3tpkQ7H6FYZkTNzDG1RAKRbNdW",
  "key14": "5AQbYQyJetUsbUrQJgX1b2M3tLCe2CJ3Z2ghXP1mdwXyBVrYG44J3hSHUZ3Uyn63jAjGuiot1rbhpms1BLtEgL6G",
  "key15": "hzX9oiH8UeDuZ7x6FaMVb8nE1h3GqLY9yy2dhdnZmPjCuQGxmxPmnSqhB6QE3F31pmMnujDfdJDigmU5wAKPcdT",
  "key16": "4QzQzGPweW3PcgXmagiLwu2AKbD9ZofaQHpderkwJuhv7ReufzuPFKxBCeTmRP7K2pYHPGRgE7YB2AFgWA6Qkf3A",
  "key17": "4Txfsgsrd6kKkYmNNA6YrRkC4RcUsJciBvdoCMvpiauoaygjFkrrjaWEhpw842ZSSAq4eUQ3KrCB1b6x3vE9UWRw",
  "key18": "rB1FWzwKFNgHYcvbvNa2as4T5Nh7dWziEnGFXXoGLtXa6mGfpwRHD8EdPLhewnLrbghrjgKeGTyYKRFkcDgDoLM",
  "key19": "2khnhdqMM9v7j2D3MRFLmCazXH8vd1tcBfrDvTGRiD3kuwNyQg38HX1TFZ8ycz15v8uUkJHEFdKcXW4TumKsq4cN",
  "key20": "mLUpXAb2xfDLZjT5G88b26ectRYXFjHpmch5grNAncRF7uKsT76K224R8ukVJcA5ydjr8JeNvNWLhGESyXPGzAg",
  "key21": "PwTTXbhgaSbHrFXknbmKhMPQMbFBWWY9mrJnCMEFJLwvhYgdUuqcFSqTMdR4vKoWJh3VELGokiwxg8uKWaZKENi",
  "key22": "5eTTa9zpddwbNaBTjMn7tJprZ5Zzds9DTfcn4jz6p9J4NJagntTc3ZwYgFN45uZKckyShhFiiu4yBLHgKbdS9ouc",
  "key23": "38rDbt8E2VdCQhGdN8CPoi4vD954RLxSUaap9hyAcNa2MEQe5HF9TN8vJ9BWf8CdqGSRPZCK9qukp1PfJc9NJGYh",
  "key24": "38kaNbmDN6RH5w7M9SY3M8MG7C6ERVn95r4aCYfqK7u6ZSVgUWNQXApmq59ErPxkF75hFQEzfD8eyavWTjyLeebq",
  "key25": "4ruG6y5qtyRUAxKsjEx8RFvrtmG4zWkESzH94hzXyiZuoszGR6Mcpw2Uvc7x98MeEvHFzoEehQqs1cN2wmMMs2SD"
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
