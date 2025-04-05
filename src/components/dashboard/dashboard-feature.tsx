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
    "2TUgQpdA8tSG1nnaejEM7Y1hPv5Y6xAEGZ6cC1buzBrTUjp6fYYgxRdeiH9mwXbCTWkKxenfRcbPAohSiLHXsoJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24vhGmskYy8ey94YLvyZj8eEorguTZ1cB2ijzAHxsUrXaxDEue3ywQ1jHR64aDBBqJRCvUFpGunRNezWAD5utzU7",
  "key1": "5dZpzBnBpVNuTbh7BhSEuNtENt1fESrYaMh6YL7Gyr12zMBYhU6jrH1G36SvtwVzUz2e2Pz5iFEUc3GGmfef8fA7",
  "key2": "2UBWqEFdiffaDhwyrTFbsviGXwhnBVDfMvgao1nMCEygs9VgUREMFnMxeT49cP3q16mePUkDqfLuLuwjHtVi64V2",
  "key3": "4HPWn23b5x1t8Eo9ewbSP2BJbCbckGsbPQ8w9YkJENTSvG3UhQAVMXJq29K8uBYBh8m8HW1nXtuXiUDLCg2ZfgQf",
  "key4": "4dW62hQ6nUYobJUNNNSgBVJgDSy7iSkUG92br3EtXUxZ2Mb2C5Tn3VyrYK2io4gKfqZHitbrEReH3Wh4UQrCZbMW",
  "key5": "5GsgKtBVoy1ZpZiFFzjjU6L5W1FxYp2GFmUuw4NfQ1vTeBn9DtRQVFuUwgxaxL6zidE7US9Syx7F8yCKMtVYZXXT",
  "key6": "DE7F5J4cC4K9gWztvhJN9fbeFzu2JB5teif12WwKmCZst26tUutZ1XcXZtU1z82S56c9Vg6HnKT1BP4J8GfDfve",
  "key7": "14qw1dS4a1ujZ68fDouuWuHGb3h81pwQo159Mj76FtB5zXMvaL3ypcfS6ErCesC8ckdyNmcsHxbzKCYqf5DySBx",
  "key8": "3hiH7aQRjSFjTZrKrJNiL2sTVqS6bH91D7VFNZrnAUnb8RbkTZ2GDUHNevsxz8cbZAF757BqcqsCWeekCFRBiiYJ",
  "key9": "2tHcsWRzUHoGcaxtc7zsCYuSLNCHFbUK8brGcZKhK9MmbLYs8yLTn7sBbfWCUz8MTu2jCpJACYQXwSu8axumusDR",
  "key10": "382RrmcdBU4Vz3A1nTCQBu4c8Tat4nvE5BbgSab7NKpZ5XSV7iLrz4DbfJgwcuB2mrd851D2xwSLRDRycUGMGX9Z",
  "key11": "2yc8UXDe7iLpbAR8q6FDWMNCQ8XJwYHuAh5kCeR2d71y6PnRWYuCXeN27JznCGx89PxnDrvUjZ9ABBKRqELyhfP4",
  "key12": "5HLssNP61hUbWjQQQr9TiHiurBF5PiCjBrab4sPJ5CFih3kkAwoAW5EvbaJodMJqmGKxDAURvhXYcadbVbQVrJRk",
  "key13": "5U8hQW8TQqp8Cvsg4s6ySAVUwbKJGLvHc4W65sLJef8pr5ppNTrK6PNmQtTZ7BCm4G6wCtK2Zg6u6wunWciwMZro",
  "key14": "3QNfCUzrdUUyFwF4CH26fqRpTFzNVbESgrpJnDJJPHTZSv5vyZzNnPbwfG4NxFpZLTstqxHRBDNjThRawfTbJAKG",
  "key15": "4HJx4mxDY2UXRXmLmb7kMwtGFwZRkcDvEdzYybtcoDLiCJ4MWSRbkFPTU3dTXYK1Vv4gYr9XTzJ8KJNgEmUkb2VD",
  "key16": "4Xuz33wDMe2Q9nNvefkGqH2TRsoJe3XPm2SiS7vKWWfLH6aUQWCn1D7Ji3L2kfGgVUtuvmYNTjZXnYVQ6H8dQ9U5",
  "key17": "5rXe1XZQ5Mhir4b5PDFM17psTwobE1XnqDd6WuL8WX2zyYHRLNaXHYKcDGZCbfSZWX8upKL1MRo9y3YBiynpSD4j",
  "key18": "65qEGjqzPSCciCVhPCLRYbzXGhxW5fXvaEP7ibCmRhDRXzBUcfdUm3UtaG1KhMAaKr9AcvtawbSJ7h3KTUkMX7x7",
  "key19": "2uKTdE1q6r61mWJgwjdbQEGA8GaYeg3AToUrfXTcV4sMFKtB486fWPXmz1bzyLAoa1J4kUCpWwYvY62W81p4vgX3",
  "key20": "511jEnjfhAa4W1JCNcuXsTR8hCVWrKbUXwiJk94FdeCpAKQbmRkG5bhYhsAtLWq8inwra7D6P9p7i9y4AkNZtzH5",
  "key21": "4GwqVEL4JjqFuC7jxcxW14twwjscgRnSgTAJb7igu8BGtE38o79Vg6GPt5HL8FbAa3MBsvuWtrFRJQmj5QYZteSS",
  "key22": "4HpiLe8vu7PpTGB7BNr1vUCkhYqpudb1mDkEk4p68qfz2raFUPnsPZLFzEZ5ZUHdWfohHQbJE1DWZqi1hwbRNkpK",
  "key23": "iC9Da53r2RBcnUPJiYdpBTPQjiU7sHSZAT3kPyfw3oRVWtxzAJXHTwQKvryjKbZNnekpHMP5q516KoQCDMj8Tjk",
  "key24": "5buhvrck12jV2sf6HJcdDjnPfZZWLQZRm1sgNgB9r55Nojk2E13LFKmq9Kz5aoCJbN3y3STrq3Mxs63ZoGGfchRs",
  "key25": "37kwZLa8jXzH8mbM983uKRmZsfAyrJSTF514yqwEKYJgdND4Ez6aQahDetPbXSYvoPnKizsSiQY45XQbfXrsa6Ta",
  "key26": "4bRFpUNSeT2LXWBT44ufBQKq4DTFtLiN5GMnFb7mtxaCo9gyxxzLEijhZX7AE1PxHjoJNv6qEJvMWmhaR8myTQz9",
  "key27": "rxh4T2JDNtvxwjviDraMuekhLSuijTcsHAmJfXnqdR49cFWMho1SwJwUvZk63tvVcivwcoap2zaLPu2AJeAh2mJ",
  "key28": "5bjqp5H35x7PNgGs5cTpg5UBM58sMKSoCUZGUyZwRraUgoS3PEehAfnJDkfcG5YbvVa6jiEHa6bhumcCL5U4Ko2h",
  "key29": "61ZyiB12kesMxZD4inB5HgfUCYkLFFvPkRFoYzvSZbhGGvRCXSEmoWc1hcssESEvdKfrjvnooBSG3pjPaM75VvSq"
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
