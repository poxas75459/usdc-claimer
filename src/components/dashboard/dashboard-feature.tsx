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
    "T4dLgjVFP2D3aox3kFXSSGXZVR96GZrjNNJu4Kd3iuidTtbtQLmCYoB57GUnYCQPuAekeWrzRwLJFvjnDHqApL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cGz4DefwEgfAZGj3HBgK5oDPiMcrgvgGAmP9hfwfjBTCnia5hYnbbwa23eBWxxgGW4KEYehzcWEGZZKf7Djj3zm",
  "key1": "DpvrSzSZMES4rVdFz6gAK7LcyHoKPZ5b7tC4PVadMe84ujZny593ikFxewXo3Bv4G5VqQ28YFxnJhGQpRVXwkP6",
  "key2": "3bvanf2dJZLSVix3xFjTEsypUE3Fy6ULcuTVSomakPFqe6BJQZStdfX61YMpVJme7ayJWsnE6w5XaafgLknx9A1j",
  "key3": "3rhan8v9oBBxvH99ZRvzzMXutjL9mnV1FZegitSEgBiSFMv8fKctxqkaoTP83cLsSzZpGHcMcx5tJGdXqfDVeq2r",
  "key4": "2ChjQetLSXUui4uricVjXYXkfgodkxprg8pB4j2ZbmEXTCTBf7Nnq7CtEhtvJwV6VfvSjGiB3U4oEqPENfksaYsr",
  "key5": "4q9ERWSnLTQpgNu52vYeHVHTA9dMQEBZJHg2tzRdqnQoXsSkpwQAEtUAKsuzmB67BmqgH36NJiSuBKf9QLYyv7Zu",
  "key6": "5AXh4aSeguFQeMc78xfFmPv2zmhh2tBoXUkB67SHNhd1d85XdR6FUv8GuS6hN9oJxTsRJwJyXNzLbK8fro9PuwTB",
  "key7": "MVsQpgxWYfH4TkJQS5AQLqEY3Vw2QGiVa939fCe7BicZ4VhmTRNL5x3SbtQBga4sBrw2wua46F7CPxpsu9jcjVW",
  "key8": "3nBPtxakE1F2GVRqnSqPFrpVJPCMQ8ZxmFFrC9TcPprS2DJTbW3GKvQPzpow74XpgySWf3adEedD5iRbpjAuDntU",
  "key9": "5BvjmJsAGNxBxKWyEH1KMeEaPF5fBQ4G9psy6qZL8Gt1dTr1A6jdPoqySg8GRS8u95C3No53PLatGAqrG6X7sDsH",
  "key10": "4ZuiKiSNWaV6nEJeRF4EgPTiBDZD8CnZXjmJt48AcCS5S8oterG1MZxcMGT7TU98RhD13o4T2zfDvxY8M3SprG9R",
  "key11": "LsHoWPvYho4tqQbFnCQcfRxbNTKEdq1aqZt1rnuzPgd2tfT7BPuJCpTQyywAjwcb3gSGXGcV1yXB6VGMtHE6LJy",
  "key12": "42bpDkJcWaJcUwguV7nPVkW4qmJHPxWgx6WpJ6NHyogat3ynYmZy5oTG1sTLt56vqV9XtsuNMY3iBRPu2cfsc9ut",
  "key13": "LyLJsvJUF4wWvgZWi86Q13Dcbryev47u78aEcDFXWuwoWCEDt9NmHi5TY9WBHWwyyDA6pmxTTfDzwssihgi9kth",
  "key14": "3cyMcVbK6w7XsVo1E41WaoHZyW7iXLzoRwoKiMiTN8LBuRb3aErFctxAwpVPCgULPpMYDCLMXzWge6YH8y3btA5o",
  "key15": "4PgCMT2nTgjAMBk626jLasP6wBWAtNkK8CEMFx7yH5jpeQgnQyuiJPmPya2pYHpzkkn5pqP77rWUajD2GqDbumhN",
  "key16": "4xpdHD13eHHofoBZa9P37EYuGpuDtXdMydKevGDtNv9rhFDPzrwN8Fn9homdevy8S5q8ymHixU2AxYjH4Y7BxXkP",
  "key17": "XzCm7jophpCciQfyVyrtcZUFtfNFhzbHdZBiS3PaxHz86YyMcEdbr4enKAg8Xabpan38RdKhUBXzhCDDSHtuQhK",
  "key18": "34UWPyLod4jU4kDgfLQZneCrco54Vrwn13Kom1JcF2YjXDbYnPsZC4WF4CrucD63f36AjvgdxtmoRDMNsBsc79UZ",
  "key19": "62eHWD84kspzf7UQ1yqPveY72JLRPGWAvkjjma7ZEu6bjwZFE4qdX8fH9sbTNnCjfp7X5ASwuCXwMMw1Q4wz6yAz",
  "key20": "2N37DcS3wWNPNbdrViZNsc4DsnWfnjojnCKCQTEc6tq3gdnZdNg251UR5HBkSdsvhUjkXu5eMj6788NBiucjYNW1",
  "key21": "2geEVEfoETBp2DNWkep181NKBCpktA8LiNxXyGhRWd93AvroSv7wLC72eUbYWkfqwWVzqB6p8UMGdke7rXUbi3oz",
  "key22": "4zu5WzNiYRXLHm8mm6d2HJnFvTRCwDFXtUc4MSJSzgRVCGEPA7rrvDWLf4xRzjamCe4VadUNaKJxRXKVU9cmzR2L",
  "key23": "2X52WmtL36f7m3TSWMULNGzeanhA36qV5deM14h9xaLax9Rr4t7xfWDbbpWekRYF2jXVMcpkS1i9aZyqLKnbMB5K",
  "key24": "28JD2gbVLEeYABtkDZoHer2DyRAe9moLWFSLJbQRZbwPTrde1et8motMYebBRW8q71Wz14AuCP33yE2jaZQYzZDm",
  "key25": "UjT8ZzqwtEruw5B3B4qDnH5BqvnLUFpRNuNXNSjd7GnVea3gRDTbcbj3tauBjRCV5E5VHRVqTbsfHtuyKZwq8AH"
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
