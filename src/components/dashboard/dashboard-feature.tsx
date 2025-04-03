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
    "67FLagfqYmqdUeEzK1B1hNJbLVdSXDNdLgTZbQcsKFfULfBosFJsFWXw5aRtER5gsAjQ2DqygTsvKsNd7EW92V1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TWvnT8UQ2gYT9n51VnySsRDmznpEMB3965SBjtNpb7y8D9EAzzZP7fu4umFQ2qQSUsKSTv9fokq62CRuda9CrqN",
  "key1": "347GJqpcoTpErfPWqAER1jwVxnyc2uhXmVHtp4nzZ9WvrTMVzxhbaZgJSLoNPc3SA45CXD5K94saNWbPvpk3JnTg",
  "key2": "4Hx35rz7HfBqLEshwBdF6GEV4Rk87CkSbPHyFFmsoZ4YweoyB1UYL1VmoeG43qXUxcanW1mvi4Lx2LdovGRJuasY",
  "key3": "wxCiX4BvL7swc5TdoZ4yyaodoPGejXSodrrRsN8Kn7B9ZqcWZGArwDs2reoMpa7cc6UpBTS33TZN7D1xw4i9iTW",
  "key4": "yQJURpwc6cc8Nzv3nQintCrYsPDpSyYBQNRNH1nQaDjNBCe4b9GbGDDH3ufPqGF39pUJAw5xN49YU75zYRN5zQT",
  "key5": "3V2Tnr4cmKQBMWSJSaVFwbSXLZNK655UXqXRtuq9hv4SWbQh2ouhfukp7KW3BeGofydjrQb1ogmcCNHjJzmSvsEo",
  "key6": "3vYUMgS2FYhGYhK4GRj38QbNPHxEXDUnjMQ5XKVrSJtHzcwUHLg1Mg79yCeRiN72QJ3svqWRcFybEt2LkdLiMVJH",
  "key7": "4vazUADzoei9aK4TMC8oz9c5pKLgap4nnV7GDdsarknwXiewhckE5FNWMLbHvDVCubtMkfo7GSALwRCu2GFL8dW8",
  "key8": "oy7TsQr3uk9CAoWu3tBZFrpw36ArvLfjJ6Vzzpb8rCxMnbMUQMvLoq8d3xkYwFHF1ki1URpZd8q16dWKvFwUgab",
  "key9": "YDTRznNFkPDrdABJK9sfXVULDC59LzpoHeLJ5ovHWEmx45Vd5dvXiFM6xaJrhtgiBdtLCL2rKDaC7K2sc7s3Y6v",
  "key10": "2ZdU8QuAG4j1Sfcxx2KhtT5FvihoJkbUHkV8KEu6JpQ78yBqy6t6Py16XZ9Zxj64cZdyJ24fk7tajirRKp1FFKsc",
  "key11": "KPc2wh9VDQG8xUR7offDZsXeevV1bgE7A2qzxRsPbzcWAL1dJVyXArMMLH6bEoUL8MyAwJYNtQrzn2GoMVeKyKL",
  "key12": "6QxHzZ6nriNZQ2owymVDxbNS6qshRVuFpMgunrUjZMdPVuKbHHQSo9R5FaBqi46YnCviX2s6EMUiAY5BLxeUXCp",
  "key13": "vpAB5omBmsDkY53f6je27u5PbkKNioH5Qs36RFGkjmC2ERQb97hRt6jNtKAtAV8JZJHHQyr1HPFKrxmyw3WUWow",
  "key14": "5Kze3T1zqwgcMnEhTey6VwpgPc3RmYdHx9QyPXXgaiupQDCS5ymFA7Y4SSb2FdApvsfCiNSvsE6zD5PXWgd8anNS",
  "key15": "3CLbtGNyTDcfTCJcVatqCkypCR7g9NuskSRuaiR4cTZKTWYJE99sBrX4JE5nMyRi33FR5qDhwWQ2xdzC9Lv895FR",
  "key16": "5FCgDRn8cCW1wPWZQijtV5Ukt8aGMfYycZugxYVW663vuynU6DaFM7wxvRUhwK1fykWbCeJEu2KsqJHsJqpzndcq",
  "key17": "54UYX6CRVeQeGaZ6HAJbuAy5knCuWUVfXbX6fE62BNvdy2fszxHteM8LX5PAdtMPhQwYQgFpZuqKbLhziBXnnvuk",
  "key18": "3BzY2TugAWvod3Td64FV5xQHZ8puuFzfmebCMpUe6yBS4oz4T4cxGctyp8fzFrH3hti5pf4gXxJGms8kJctFiKH1",
  "key19": "5n7PgoPFwe33dMqQ7AGek1boGpvw16THV6x2A1nLSFordxFiPWCKNbJDXkuSRD9jmUvn98F11wN69QePggJ2Dw27",
  "key20": "4VrkdyLsKdg3EuZq4TruzThpS84JbuVJhLrX1Wi94ionfduUN9eos8kh5dNiwZ7nzUWq8z35dBL1hXx3mFQYyT4w",
  "key21": "2eAftKkeuHNSRHgzw3om5VYyHqWPr3jYpCosYQfTz9oA6aPaSmUvMAKgibftRwYk4TYWBFkLsKVWkwVVLtkU2xV9",
  "key22": "3zKCkUFojn4dt354EnMThX7yu1FNMV7po3buwDrei1Usoeyb1jndacDGq36gciDZ6Qzi2BMVrjnTfn3fKWUsgMNV",
  "key23": "4UQsRYmYqRsZ4KZiL3K9qrDaVaubdgsgiihqiSMCcmiJN46SQ5MfYXAQ53bpVtyJ4PCt1cDDtWTUV8St54CMFDDX",
  "key24": "4EwntYDTuw7PjorDWY5dvSKVpVwwLJcDVtJtTJwPuRrF2VkzHdV4ybVQagBs8qdTDs6Pe31LWxvPh5r9DDw8rnrN",
  "key25": "4ZH6fkShQf2mYHHSaULUZg6841fo24rRhsxuMEiWYGnh9Jn9sZK6ctU9Mppv3QVcgyWkUSn5rWtCGsejQAuMcD16",
  "key26": "3otWAgzA7JK6TPChTZjvF1LjPgAf7ZpffyqPZxk3yrwxf7Ysi7QvpPidCNzvMtSoz8aGewucVsbQ6RdpkPqj5Pem",
  "key27": "2YvQ6wddh8bjnhfSsmEJXH4RDU5S1XBdkyisMd7Ub7WifnAnai8ehVhFDxMqWQciv24g4S8cNCwoDCj3FZmXyXk",
  "key28": "rt7jkF5281uYB65j5kdL9ZtJYAihvfSRKDEXrJUKKyULPGVVS4kdWHKymdFAsoCLRoxT5uFS5UggdsBsvYNv9Sy",
  "key29": "YQ9nuBxCDfMTmZVafqaYBYzh6CRCmvMoms3D2AkRMBkYJFRifpZcWbZohzns9zSF7GKCuX4MkFzHTss2sAGaCyv",
  "key30": "44TuGsUwkXJkouTmcY9cqTZn5Enc3Qci89ezWqWwGGm1NcG474A9N59FJS7d4NfjPXhx3jEKYpLGgdfdvfjwEkwB",
  "key31": "2VVa86HnxiQaHCWbr7ur4SYSy3Q2XqRrYHtkvXGRjuAcTtdCRZtBF8MY3bJwbZrgYYsnyb3z1EQx9CgQKFtSRsMb",
  "key32": "2LeTKdZHYcWQ8i17nAwk2bJbr6vKgB36SAMcKghKmDXJzRFdbEnt6bjwJKSXuCCkK84ynYwNFDkp6zRY5Bm4yY19",
  "key33": "4xh9EA7uB5VRpwiDXYCrU1ZtLj1edjJpCKJdRsLKBEFjHAkYYMamDZuXhhKFKo6cfsayP8HvSyYjJHn6C8zqiPPe",
  "key34": "5e2xjCjdAqKUHUKmK7YZPCZLxnJHUaNkStf7yEGbGWjvmauvAP4Qt5BAjQVkcYg1h98RGiJ9A3iXCQ9ScRWD9kcp",
  "key35": "27XHXqBGLa1r3gZsJFBEWsY5AfHJzJW4oBT2WGH6mcowP29N5AQTpr5XVYRdCGxQvkWvHoDGSLABz6H3jqGHpWzK",
  "key36": "HF7kPKYw4HpueHvf3cDHCGp5d7T2Vy711TNZuHXgwXNq5vmkHqauncJQQUQSxQqciDh4mqdWfLJA3P1FYsk7KTy"
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
