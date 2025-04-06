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
    "4fDMB1i3pxc9wjRknJ9Xoa3rZcEEYote23okp7QBoo3XjV4n4ZfvNmnX36YLWX7cWKdZ4vM2JzdqJe281M5Une2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sPmGQs3c7DQQVnjv7XukU1mznwZH8Z2XUGMBYFm1VztwcsKzq9cwveWmviU4MJZt1pJuPmF1JjRbf34bCnhqip7",
  "key1": "2qr8rVYGWEtbs7MagHEiWChK7kNuUKbHgP7UHBVhTBEH1QwMovwUgWJC7AcRvhos2hwnz118UVbVUwVD97R93PNU",
  "key2": "5XUHJw6rnRMK7HVbDWWnfagXyg48DbTLKG4E4k2cqT3stZVf2TcZEtFw24Gz6in9Notmf2An5StLQYBNLMHCamaq",
  "key3": "4QjAzpG8uxuFpFC3ndW9iZxf13RgMU6pNGmQmq2ngRpajExjL555BpqNPbm2A4yeBydU87ULvNDtGGqzMFb6b3yU",
  "key4": "3rJNKdSuDu9PwAAo5sWzxo1BqfD244Pmj1aHLfXqriW8Wj39wDmJ2QwyfzCfP73AD71NXAeLzZuVD8qkC23Hoi5F",
  "key5": "QEhDKhE6ttfrtMEPwFzzhWpDxuHdaMHXUTBT7dVgfMRFYm4GmW4tpRG7Zdid3JQtVZg8WkqmBk5wSJYGYTt7KXJ",
  "key6": "UZRa1RSdJmf6jgT2WyyZggS27QqDfv9GSgco7MeMwVK1Ev85r5MjnV5tpKkogxu8ArY41n4pYwNvNyAcLVmH6t4",
  "key7": "4bYGkjsTh9JqfGrYBW9Stq9zoiC5FA64u7FtH44GFUTF8aP5YE4gSGgPvFaTFr5Z2vQvHAghUEuyQXtt6wxauDAf",
  "key8": "4FszbwUvphb9v2ocoUUP94LkPCa11Pu7wXVmqG8LzKKcKS5roQZkP92mfsEpGcNB9vVcfCdbBxMtkbzeUKveRRi9",
  "key9": "48RApWeeLMxcL9LvkfQyBz9eqGvrGoK27dLQXV2pxUKNqLnqE9tDuujxVz5phe11HabYWLDzR7rDcsdhep4kojrM",
  "key10": "2ejtV2TKvGGzQQ6aR941J1nxbCnr9SJi1mobWrRVGgMsFZkoisAMCPApdqyDq17H5TyW45yQy7gDcE5UYVLkgvQ5",
  "key11": "5PKtM2u1Ha4XUxdYz57yx6aoPfpTiixYENdwPGhBuDPUbHtS2vS1KzsDSsGupupeVi1qd62JxuLg65qLe3S6dhDX",
  "key12": "2MAjPCGSwmuYb4henTsA3kxs8AQU6xc9MRUWk5ZgaYsEEu7f6vrjYALU3nNtaDkRiaa5CvRtZsYnTLoQNzAmnsii",
  "key13": "2zDK1CP9vmD5pG1xVE82zNWw91APUpNAWoQkZLV9mquBxYycAVFWp13o4VTmin1EbEybYBX2gBXNvbo1SMCcJKtg",
  "key14": "4NxZsX3M5BisWtEzQEVHwZPCHxxYFgBvFXSoE9vt71A237LVVhAPkAs8UhNS7cnTiTpthMTM6wYHga5aPTtgbwxw",
  "key15": "4dgoFn3gRmQLTTtBrjkSCUA7o5PpNPm3GZpo5Nue34dgSnfRT7uFuToNuSacJ64LBNEPKNGfjEpDWF1jGjjs6GUK",
  "key16": "gbqsipcvqfzxjjFEVrzWkvoqViDDMsu9uc8bonujGMMECuXNFALZcCoUsjgzVkDhXq9odLBvZmdoNRggHVNrFRV",
  "key17": "4ji2gZPKwJHD1v8SAGDEg5j72nEBjSKW69fjcZ5UKfK9pTUKMRFQ24BjqfpEmiy3KUxT5VJ8BBAJ6PqMsrecHut2",
  "key18": "3hsjByoWMRACKQNcRgmS25J5oqHQG5pZSZhAoBvp5JEA5tBftjbKVG1mgxmVR98AAbixzmtzeZmKbQPnJLy5z1dF",
  "key19": "3y4HrgFbYpXiVWKBfZp2iWbgrbmshqEkRY14ZBMWr9AEdxpCEss1r2RJB5mYzixyNw72CJbK6VgDkEwkJTzGhzzQ",
  "key20": "2ZVJCUBykokEJKhHfhM7uYMmCgAWmRZnAN5W8BiPUK1LL3Zbh7fWajjiS2SRRvoyMqED4kwbBotyKtCjsLh3JVNq",
  "key21": "5JqZRcfcuNBUTadCyxtsWHrU4aYhVKe9tDFmZw6QQkRPWiwUmpz8tTSonSGcrKemvY3UQuegvUg3c1cGqpbLdsxB",
  "key22": "5eYojPCXEK4WQNSmCzjokeom3cgVMU14Z4atXiMgn1vfSNeuGYpQemt94zseTQrNAMh7M5LeD6LU6mzijYYNZGTk",
  "key23": "3twhs58kku8omb4neEdu33TC79KdbRzuUH8pBuVvY97U84ojHAX2KzvSKGru4mKYxnMymF3neJRPS8yR77TLPGty",
  "key24": "2oi2nCFML4tupRvpuqNnQzLq4rphHbMQii13mcXGTcJsLP61mhXijSLVALsWn4u2sbk4kg1rwGqVj5TjgrdiSUcD"
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
