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
    "4qW6JWHWbr6roF6x6CHoRjzHmrsRXwGdjxRMAH9fsPS173QW8zCjkDJAMeeqCiKUykZE5iMVSZQdFMwkfWxJENJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CPBfwdt9K1Gp1UHefTGoTx8A9tqfUnAHbjyrNrxKVmoWromqZeoym1GkiGJ3ZJDh95E18mqWHm81XRoUgKr8WNq",
  "key1": "4iEBDTSDyWtHWJw39nMH2HRnugRqK62NpgT1HEbbEL9hodzDEnG7zNEvq8N1xrrd43aJfkSquBqCyhM8UEZXUAvo",
  "key2": "3aEEgm9YnoiiUiUvoj9qcq7rynh4Ka8X6fMRUEuQ5ow71VkyfGnmWZcV1oGmrMjA4hb8FCcRUqJUCYBnFBNhXxmg",
  "key3": "3yk38EF69Usr4nahqJ3qZd384tyrcq2vXned2FtqBekzksrhq6XXAF6LinFpQjFC69iKUXZ6XYk329J1GQ3aFFJb",
  "key4": "5MJquiY4RrrWJUNRu3nM2BhzrKeocBoLtEgUkxXN55FJFYgohNXuiGS2gnPvZ1A6oGMophnXmAJ9UgbQdpsBunu9",
  "key5": "4URmvPqWMCChx5ATGcAMYqzADyu9Y6mDykou1BxSXZCMqtGVgJ1Zmy1w1s3ApygsoHcf1RxH81b4hNqnmnFjPZoZ",
  "key6": "2yJrJhqpJiiSbBMsSCRDHhJygDghvaRNn3JpuMbaXS5doSVWnzVgDcDrDJqZupzVQZCvkzCgHPbMjKBXwxUwZqh5",
  "key7": "64yHwUrz7Eo8Ag9L8TaQFHXQwT9z6qqgxaGgfZNA8fDhYhKa3ESEQD7MpUF2U3NNne3nxWcGNiDpFrgAZjZvxNhU",
  "key8": "3wqYrrC8KvhAQrEFv8fNS4n2XJkxmCCTFanCf3ZcBBBRmSZnNyZso8yPuURcqsz3j2f5ZwxuaboX6eVUiiLhf1Jb",
  "key9": "uxwMYNKmu3GARvKoebyPVBXqcoLZMJzFd8GtYaTJfrDYAnrKjB4BbpWnFvqjxjL2yeNXZp4zLj5S3DTGxHLvVGW",
  "key10": "2avr6poCy4Sb29tfNV41JsNt2PzUmmPCK8SG1W1JwEPTJB8F1HGKKWpR5mMS8BgPn7NRputPWz7KRF8uTrAWhyd3",
  "key11": "EzUevH1fSMoRZ2ixRMy9WsEE9ENeKBdvvVip33bL9RDXhrTR7JD2MdtmXVPzYAEtNgmRMovMWy4m4Y6TyQQa9Si",
  "key12": "2vYSpbqV63tGWBvsoyJL6497oyQqE1xzpTF6Q6XyPT9pSy2SexH1af37HJ6eUfCGNNvgnchLVPp4ZhCaqedjcrVi",
  "key13": "3Mz1KnEYgCbwuQ1GKqx3tFvrHassdPWwbxTV98UQsgrT4QvacgQTBeWq4egExvnb7WGJtPtcCDu3vQkUKsNoN7Gc",
  "key14": "4gcCXNaAhqVuLZjnzP5MHxaiZKEEaoKPEZf8Vq8dqPC7G8Ah8R3crMv3L3ZbmaxYpTbGrBbXu7NuddCpaLQPGjdg",
  "key15": "5dJkLeF4u3YWbq8UjnugDpt4YV9jcCm79bkJhaARewKStD7gjomED52yryuY2XPNwD4QHABbW5YcxtfQG9S8y3dv",
  "key16": "4HYBZaSug5zsdSoq5Knoug34BSw8H6qmuPUkEUwiDvoaa64fvkVuiPtLzTBu7udpS6wHRpWz9kSAninyQKYLG3Mq",
  "key17": "2GRcyWUmrD7ZR9DrjDuVGN8hUNTkWebbwtV9dxDSvaT1GqjU1mYodFMTxmxvUzqkEpmaoHgg4knVgghQjqDoD1F7",
  "key18": "3vhuxSFgwNqd1vGX3k3f7Yb88D52XkcaucPGN2nzC7RK7L9q2qvVdnW4oDDiN9rWLhGB3Hony9KsboekfM68roY5",
  "key19": "48TkdEBEq1bSeiyckcYKBCF95JJEHqt98PBh3k1oG6aJuLRzGj4Lwkq5qkSdARFgvuKW18dNhNDYk1GCiVa6ntVz",
  "key20": "4Qkc1FsivUz3weKUp4zW8j2U5qZDCt4HBJYZu8egtoJaWundcudrBdDAUM5yPvJCvPQcsPGQk8pWtVQmng4NBBJT",
  "key21": "647QeP5m6ottCHRH2ZGC3t9Gws7vos8ksVX4ZrWErzp71zotk2iPU9YvAtCYgHyzaLNinGj6T74pBJa6tCqwSL17",
  "key22": "2yyy8n86SFUmjoqiPCq6W2YNV6kmYQGyvc2C2ihJHxVTbo1EnosYXvUXxSKgek7NC9ZzCwa9f5Ye2hw6edefJBX9",
  "key23": "3MQYrCnDWWn4MkkZwkufQw5JpRf7h4UfA4NmKi7xyGd1zZ2oJ3Kb95Bd4je2ytkuGhjes6dwoirrm4RcDVHkcXo4",
  "key24": "2yJynxoo9cF55UamLenGzg9Q1cpWbMv1AtVPBWdcCdjNeML5KGews1JWpZLKQpZzomLTSwB3aVG8GudxCk1F4qBm",
  "key25": "61QvZ3QyRr6K9StUoBfA3txJqG7exmSnc9zx9D6cRrZWje9gnvCFh2VT5bcKFVoZjqA26taGReJ821YRyPzBPjpC"
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
