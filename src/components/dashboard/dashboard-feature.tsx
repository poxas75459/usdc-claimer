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
    "LT5jkZiV1DwzChe5Ktb2Esx19H4eFKsaNn51cdeC2VziLbkWVUqpuZFU3oopMANMS81N5fdiH4rijGoo8ZQWAj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aZCRZDhbJKNUNhUBRoDrJN2yU7MtNdSfDh8uH7K3grp9VMBHKxdgRPHdpEEUnq3V6YA9WD6buHTZdmF8H2JKwbm",
  "key1": "5hWPMFMA4EtUZXq1PttPDWUQo4kWbb6qxZVxGbxuesq6sgvHooXk49UyQB8hMxhYqArUD45uS8SqEF2oH9hjtjr2",
  "key2": "3D1eZk1gQKnk6tyvou6wg4drx9mggMeJGq1SSYpYt9gsSWi59kHkcSZjMq2ujS6ZuauvHSQrzHhswCHM2rtcJ59y",
  "key3": "4TFDXeXRh7XmFDtoVtszL2NN9vZKCMzhhJBDMbWJx8sdDGuiZ54Ko3Bgs8xgTL83r1EnDkT5jfckXTFhVmnkTReR",
  "key4": "3k5Zvx21vBawzzGZYxUXaQwXHwPYpZNSiyVWK3kRH2aXCiJoMk6bQeLUTYdW1weBiSvfchnu2KL4DWkVMPN2KzRT",
  "key5": "2YaFusfygr6aTPnTWgcbB4d6SDLptMkwLDs8KT19hoz3wDYuEtb8Mh2Zg5i35VL1QR9sdjZY7AweoiGCFezcUxkv",
  "key6": "5NcqYryHa4ZE3gzdFGX46uCYwjSEJyTu82bY4py8752VSgTSgNb6a5yZtFYnzc6ghQ7ViaDPDVYA6PBh2GH5uWet",
  "key7": "5W94GeYHE93Cd6GvC65V3fj6BqxixUorvQdR1n7ZhYCLZZjWCDCbzFhM7peV7QdRdSHwSM2nhfpvu4fFrytMJNzv",
  "key8": "E7K32BhWsUBJn45atgzhjwevzCQySvvBSVQbZx1UqC4PCErmWBcNCLhJJwn2egyVmCKfNcmn9n5waj6Nd2HA2zv",
  "key9": "3AtfNydHtKU6JkVvw2MA2iyuyBxNu9zvixAz8GGAyoFhewPW9aAYLzQovftTuYG6d2RMk5XS1aXh5aeSAKmLwqV7",
  "key10": "47gBcJzVShggdTJU9NSomrujW5kCWyEzz7pbDw5L3LVACEmyM562FAiUV1dDtJvPdTranc6Ti2bKKANSp4PauGWX",
  "key11": "33tvFpSEzF8LMoD6bsFfDChcx2z8MX2jwL63buJEhFnBN6rtmE9BJ82oHf8irZk5zPUFgkqJaDCNXdaLTxbduZVW",
  "key12": "665y9oULioTWUKY3tQyQKjQbrar8LbZPBguir87suGyzBhrAT772McHBNYd8kjwzfWK1tUdSYSrozzXRu9SEt7PN",
  "key13": "6d2Lm6qhrcHdF7zZAfPuRREBkYCUVXCH9boozeKi4kz4K81trFRhReC9FgmfVFe3iX6w69xyUa5ntWXbUkq8Eam",
  "key14": "2dN3oZsZpzD2XCicV3qUZ7uXMAex3Z6giNKJ9JAhTQj6eiHVLsT4455BRaSYQ5qcVWMYaDYpH3AmkbZ6XoD2k1TY",
  "key15": "7KMBobVNb8fQaiKhQcLG8cYTrfWkmbTYb6hQg4dbHtoFy4DjDWb7qsSiNmw6LCuKcD6CKM8jeeE3poCLQWm8zGz",
  "key16": "4S4GoD84Asw1o8gGRXK2G816Yt7qhoSWX2Rc4QxdqR7s4sBjnhCXSRyGWbKvrpEtvPP17QVGBzEmniDnnCq4Ynia",
  "key17": "3Vryozb3bKjaT6sdsyhgisMykQKZqvNxVV4ixMUiYXqgBkjVNzrKPkYAF6SYQwnk3RYtVMb4uRiCZxuu6v8UztFk",
  "key18": "2KXmTk4Y2co19eCsuskLzcgD4qJ98C6WZCQBh6hufHLWzNFc7rjVwuNXfqNJK2xdQAmgGq7rxhaNH7XZqz4nJHFi",
  "key19": "4Pua8reeccWsquaR5YWLadL66UiKNySLH3bHZ6TgjEfSu3yW3gmkpB2eDHbNt9Nx4NAonMb1Nq4F7x6fxdYSPWnP",
  "key20": "4XKGEwn6jNmQi8fcrnW2TutFiX3S34LwKVkDiTTUanzs33PXxMtpTfyE6q95BY3dmxCdRenEBLxkkq1W4md6aVLh",
  "key21": "VqGV5GK1JY41rYjAXmDTbu9o5acDKrEhKxPdFwzyVomXAVXtDRbB66erKz5uAZnNWHNWRhZe3WFADjLmKVEgz24",
  "key22": "5ReLeMMhhgtpzdpzGuL4PeDmvfq235ynUaX6Fv69TPpaKEE2NMPHMJjTDUBn5rreZUV1rhhWpWoHnwTyhKFoZLya",
  "key23": "2DdRbJ5si6AfVMXiF59C77QsC26L1WDgXkBHbYBweF8fcqpzBv5UrHSGhK1W2xN9ovQeeqALWUw5zetRcrG3BhhV",
  "key24": "4g7hAf1B9m5WTfa3prjtai171ua3CD6KLSFod97XJPq4vninbFzgHnxjitQep1o8aM7dUDKKRRWgickd72eN8MoH",
  "key25": "4vY32jG94rGgJqZqquAdsUiG4JF4oriqREnhagxYTRkzQcw7GJiWGFDQZ3vZPUseuFggkZADDhbCDKjcy3JGqKmo"
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
