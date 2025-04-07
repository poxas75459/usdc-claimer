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
    "443TZNvZHQpHV1oMiMatXhLbFRtS2Wu2FDyJbhsP9822KM1NE3ZDPErZccu9EabtfdhpH3SdzKRqfvPEpeB2woAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RaVe3K2N6byZB6P6XtcpVJi9LmhVoftZxJQjzkhRdSE6e7Qysvq36rc4XKhXR1k4KcfM3ABZPcxNTMFJymnWKFr",
  "key1": "4mqzwV15QzC677NswWRnvRu6PUMjp26i2g2gDqAdYREvjwW7VScz9Am2h2ZWfrw77gwqPFAYJgWMTHc6pPd5K6K8",
  "key2": "5fYrHDnUqrVKVU7MDVhDwYnjphEaYTvCRW2T8m3GeqrzBZjA4wRjdosRx9caUoFLuAXmAAFjVF8BNvGRpDgDGJ33",
  "key3": "4BELdqKHL2kPtQTDrN3x5Cpxg7TGf9TJhRyXasLZKYBrtZaaK2MSrqDk6eg1JXn8tmacHQwjVBnBpQDxFsbSCaWc",
  "key4": "4Xw2mTGpnsMEXntZyNtjosqR8mFiqc6vCxPT5cQc5nPf7n33NmL9tK1T9KLsUAXJvVgZyBMUEFnWhCX7voBEQUNe",
  "key5": "4jQDXJMH2QmWGfQmccWD4w8qmbD9UzEYKzxCz97n89Z2KPdLZko3Y9nB133yDH9PATJHrUmGfZ9pPYpMV4p2BebF",
  "key6": "32J8f2UBvS6cgdXwTrLSyXvfogrfknWKZPzqZkkxWsK1Z7L3CWQp1egiqp7XrxmLnnPBGYPifjA4zKcwDwXgYnSy",
  "key7": "Ch3AvhNgS3rUPQoSDtnxQ81ca5PT7abDUwJ43nPo6Gq5CCxLoq6m6Ec2xG88bScYS891a66nxMqzAXHnfmFgUdx",
  "key8": "KDLWz9zoGZKLCHb8YZmceHi4ve5diJNTZmor5bTK2ctA2tXPB651tbgnDUtchnGoPfPeaUB2FiZtxcRsJ4PssJ3",
  "key9": "D7DQN6zyGGMr9g6LsRigzW1po6o914f9qpd8zfcNLh8bPKFpVL7duTe9PXLxqEPPMnzEaxgUXUJkhrmStmsCgye",
  "key10": "56exuYAyo3imUeJFMeexL2yS3CsjEjHJfwqw16BMHXXgKNS1hA1S8hmt9cTrffkFkRUs2Q52TL8NUtJvB2cZHDYg",
  "key11": "5rFNWDQRGToMsrUCmYFf93nNgetMUPkcc3HN1Jt1J6GHNZ4MnznfdLBCeYtAngKDmMA8nNNFfNWSECtoSzpnQtxF",
  "key12": "26jX5qefTZZ3wu9cSkQnPB61LaXq8QC35VE1Hw33yJDxp39jSbnGet3Ax3iUZshi4EDoorxhVhPBsy16k6Lr5Mn9",
  "key13": "saCyZkuGTV3RofEbkWJssvGHmw5XdDwnicnkUHgrw6oDLEhqA2qZmLwRZJt9bP6WaKwqU8nyhjDjCpgCpvvsWLR",
  "key14": "2UEBXxeuoQhtYMzJhb325EMrwtrToWR8sK1dapEa48y21j797vT1inBuLSD5kV4N3MQujdSvdgrQp1JmMksoS1Vh",
  "key15": "5965yzANezX9v9BrSTtGaqDt8M7QKZB934qNDH7dwMqGucFgukFDJcrncUaMLZLaa3Xh4baxcGCAvPKYptxo8fwM",
  "key16": "5samnDku8StwexnKY5AYwuRM8SjqEW3KY4opkgvaHEhGADWpjgdyEKGr7fi1tS5Tu1xyYUEvwdkiP5StwH9pnAkx",
  "key17": "3JGqu3pkM8VoE9Hpdm89Hj4XZRdogUGa4TKGSkqt7EnEv7YrBuHyFCUvaxJko7dXYWrscPFG5E5xGtd835b1vane",
  "key18": "4e8sKdNLXEuj4jNN8JpvaE4HdFr8JsvQzpBtcr2LkwumqN6teNwzqpnnJyTrk6NEgjiygMQpPfdFuzuBbKZuMarm",
  "key19": "2fxMAzt7hqP4SPLcFzENZkqGLLyVMpyy1unzrnVHsTc1TXGW6D9ddpRpb1i6yHVD123jfskXCfDXmWY2cwGNuCyq",
  "key20": "3myS9Vh1v7JpjQ9oMnZQqDKz2hRqBcZZGeeUkxdUjCmTVUAkMrNq2kra8gozDLPVVQQLoRVTm4uMkfVfJSY54h8R",
  "key21": "4SRdkbpkMrvomqBXX5pzCv79uAgsXynF4ahoJsSZ2D7yQNpfkkPc6Hft1KJr2CVzhhwEQ9Fe5VwkwQpQPynkxn9c",
  "key22": "4EPKVDsLZU7s9L4owsZckHyTHQa4EJrq2ThtzmkgfH3n5S5Y96ULFfSsVXqp4PzfppUrVrdgc63VBk1ChqvQqkJe",
  "key23": "UmoejB89F6RYKRVFTpErszx3ir5FNAcZetzMSWiTYqbjaPyUzxmNXMzHWJxNzMtFVqLT3bSqVs5hdLio5Qgj7s4",
  "key24": "34wzJDwzX6fa2hrUTTZr6DiKpdQvMWREJ56FofaYXjHKMPeLfY5RwRikRbU72bx8zGUqNjNXvUHUmrfnvTtWXtis",
  "key25": "5iKXsyszcLniDEBWtdyMF7bBTisjtUFuhzTD983rzRF7vmVDtt5CGAeQHjCAM1MtWShpjgC2QEd1585LVVwApQhu",
  "key26": "k8DTZanNni5QSvDN3UfuHhrftQcDWeq82uEJFzp8YXjeGbvHYT2FiWiNh3mykWyNmdPSNcJyXcj2yW9dJHku3YD",
  "key27": "Cjfe1KkgWWpAxtxd7DrFpbhbK5E6J2LGTDowjGEYvszRnLXX317YoPAw9CQN1ErvMmCH6hmVZwXPYjVL4uFnz4e",
  "key28": "4Sv8LXYBGADfzBnrReKtyoUMo4eNumTAXusbQnhLmHG4XvWMQv9Hz9ArfQpQgQt7uNQJpknURzuXBR5x9asaVWH5",
  "key29": "4AcK7NTqXFvkSTzGLmbgC1wQEBqhNRA5b3vH7msA4VjRU7yGJZxWJyoh9DPabr1zNLSNPPUL3d3jnFFrQBegExe8"
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
