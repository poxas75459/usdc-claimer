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
    "4CZ9nEXjrhmDDwzyiDxDA8kgH8KjjMvD51biFPeA74FeMPMffhLsgBwf7hXNizKvzSvPSQYRDCd22diGrfeG4BNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SwSstLy6DfwN6D5qQ62FEWjtiHzX4VQDscvg52rrX6xdnawo2VGTbTFxpSVq6sK1u98nCNhdErLmkSThHr6zP9H",
  "key1": "2GankgjpnfZMNRtyhpb2DsSyHKVcJiM23JgNwCixe33f2AceeHbes8u7XxuN2xLN8aiLxWfbQwmwELaheGEZEr8o",
  "key2": "4EM6UbBKu5a4AemTxyLDzG78nmXbdKZNqWbZRqsxB3PWWZZWWLgf8xjw83bonx4x67s2gx1eZCLy4urpuQun8zaU",
  "key3": "4qqZ8i9tGAqWAJqauSEjMffFigx9wRqzKUBCt3kzGESUFCBBKNryxythKMqoob5C3QAuuW3xGhUj2HZwqeMEeNc1",
  "key4": "2W66x7hMkR7kk4gTpKZzS73WiHDFT6uZ8Kj2SBqEm6fVu51y4Y2EgWkhFU4FXcmM45NAQ34t6xwVaG6o2b8GgPUz",
  "key5": "5HAahD6HYLDqTqAKNmrnrxwWXDk5LYZXWQDYxhKZ4s3B4G9Z6YhDjQjCAyf551rkB4JsB6PrDfSRd3318nT2dhWB",
  "key6": "3ZR48mgPoo1GZANFw2Kjdh8QNt9R395Cf7pos8ECyZ9iKMB5EB6DJ4eyQTnLfYkXP6RrjaD7tE2M598k4dmbBJzM",
  "key7": "3rzajJXms2N3FBrpEE2MBu4DaHqXNNxxwS2u9tTVuJqQrjRN19HbrHbu378ngJnyuvdsZEW8w6yHQZh3i4NXP8Lr",
  "key8": "3Qf1qu74TGCdxtx6UyLNgU8eHdUzdrwjqsUavNZWLfbvhCctTFn2pTFBdYaaxstCEL3wXbVDL2SXhkqjRANyEbGZ",
  "key9": "YYfJjxcRarRLsRwLUVEvWr8RKTKf2XVegV8auW31bep36hRcAHgof7QWGwxoceTMxhKjJe1VPFn6S77TKdTkLbB",
  "key10": "3nnBnG5fkT3JKKAgj77pGWpfERmdt6Rf4Ud5bU2hntthtmmRNUM9UNrGtQdrGtMcpWi4mhMEoo5qqnzH1DSX21FZ",
  "key11": "5rHTUaFDyLoZRfa76sG5oJ1NPWmurybi5zAiEWYwJrBYKJdNR88DZ6H2Hbz2Ea3PGT355HQG7puaJFapjsWoUCQa",
  "key12": "3mGpkipsATE82RvRKQpfHEgdYxHoKL2JqqeUfritRTsYfppYqDvGS3ghtK6ECVr8SasXMsuzACepyxDnWzVzZ6Wi",
  "key13": "5EQgMreQ8LxRNkaR5NWzZyKvRUSbum6U2oFv5mBoByEpWWZBd2AKrqXvhcTqQQ9QudTfLYcraUTWPovn5ZByE3JQ",
  "key14": "2hS3Atq6jvAUm89WH1CLakjkpMoUrK6wzdyp9VWhGCmYDBcGqraA71eqKkLJPSwYxpyHvvQA4cqQ9b7EToSiKQie",
  "key15": "4q9hQkEtQ9An6SnygQrG1ydkjN8ksebRkiQh9jUq3s6p1sgy8N6C3m8LF6aLJ4QWWe4PgBFfL2ncZ1rtCBfb5VPC",
  "key16": "373mza75NsFKyx2aWoyyp1jfjd5HCCxkupjHNAxCjiBwUV6mjXZVa6TDbNeJEpcxzwwhDeaC7rKoK7nCwtKEZ9C2",
  "key17": "5kGGyKkPbLMCDhpUbJZL2ynBJ2e6dmwgEazzo4v957uRWT1RGJpcZSYi6KRh7BC3AaM8zNyfpMktTt24a6sbYiB4",
  "key18": "58wA2KUB1JxiggDEpNPfPDTvagzBQS11m7Wijktu8JmWZsenyDUujx8nT5E9K3f3UrRehQYtTV7cD3f1D6iJqePy",
  "key19": "4dLNTTZc6PBNNkzqTVBdHK6CyQAUp4E5Z6MFrt7ebnCe53AkhbN1t4LWHpSoRrHGzq97dtf7VBuZjVp7vEuVA1f9",
  "key20": "5b46spdC3jZ3idfWWCLoekyyyMWYyXr4j7nDB6owUVojbDWYLqcrinGhzkYfRfgmfHfVGNy1Z3rRae2w7b455YGf",
  "key21": "5tGpVLG5HSZZHdDWa7zy9XTZjvPgtD65WWtuFRYrZ3sWHw86NGoyhN3jYjB2Lmq7VyNxc5NarGPsgFppj61yXk7m",
  "key22": "3FFptpjHVQHkMvxgUjczmsAbDLvwQm3y5ak6jybHuRXjtkHMiChK5LTaWNFsurGqydhKDYUBDPwTS9dSdWhe4VJi",
  "key23": "3mMkPJveku9SAQ63Tdmw5AWM8s3AqEkYo4EmxVCZw9JVVhACjZei81tUBZpXASHg3rxgf61JoQ1Az5iyY3Pjtxwk",
  "key24": "57XC5icS8eKhsrj3uGK6whrqMZu2BNneXhgj58vaAcLgNJ84LkdjKWAqagbiiJwXxfdtRnYFqmj3wKdoEJKkvsba"
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
