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
    "nVWwRUK1jU1TVo6iSnX9PmgeMbuJkJDqWh58SVYHrZ4deP6qCECciwco4gW5eGScRnNevTBabaQSYzdibD4iagE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rPXVohNte2grnBKkqUhUeC2LGyaVsKB8XeCDBavm7BgRDYUhynp65nGkGCsK2XdsvGRrFQfqcVy8G341ewbzmbs",
  "key1": "5ap7cscJvxgYqSwcBU1f22eTBuKtfXJrCG4EkuSnSNMiWbAJLYJ6AJv7rc63ZCXSyjqVW15yHoMz4N4vRqc13yLw",
  "key2": "2dN7ttHtAsc4ki3pHNT6hJpUftn5MzGGFEwqCJV4L72qVtRNbeQAHxe3E3Vk3nM5DSoBhtKeHQmmwoAYZexRYF8c",
  "key3": "4kCtqPtiwQEA6MEN6V24LWha9i1DuDcokFbhy3mGmpG5phMcuPcaGDvqahwvxc3c8uyRiQMraPs5k6kgiVZZpKrN",
  "key4": "3dH6J2jrid1owjJBv4VBTb2YsuU5WFhenKf7h1ZRyPyD3utR3vQicF93SBkMEbmeQgzAFkwVCT7bR8Cu7MuwmST8",
  "key5": "k4VvHXiiwjw1fr1PJrSKsYCw7RH6QYX1LSwnM19WWSsyYxkK3FkZopKTiyGpnLNsTGQxUAqzyxLQQurxydmyWW2",
  "key6": "vxV7iB7LZoh2ZwPqQaQcJQGg6QRLyEkDuV2DNayZrYcRJrEgziP2Zm2Wb7KsTS6PJBSy25rJque3fke4gh7Sxia",
  "key7": "5ZLX3n3Ts96JRJixFLjRe6ZbKn554BFiaHwCMRdmxswbfjtfmdDnKc4rgVCzR5Qa8YZKkg5GKttWU8tQe1CFLsvi",
  "key8": "3CPn9oce6j8akJhMPdPp9EhXKCZbSBruUh8ADAQdbn56BybTYzwqLRzQYASCz1fwzA3XuVYUFCZ122mARCtntqfx",
  "key9": "3TUaDLtxeuDGokiuYtuE3wTzVyNQioXa2XzXL5byi8y6zAWM4JKpMDaoRrmGtZRavtt8rckVGBA52DmdJwqX5HdE",
  "key10": "2Lq7Hmu6bZmfjZyLXQagj3xhUqn7P4Tkx197GtEGhX6Kza9Kb7ZLREnatGrt3f6F4yW9fuaz2yDsgPkR3NR4s138",
  "key11": "4yBqftDW1xsSYw6EtwwXmdU4oJTPehFFFpucRECqoVTsa9yMN6aP2x5h4SBMmf6x67QAZEmMfBDv7rHc7mBMzggT",
  "key12": "5rFVmBA8LaVj4gMFZSjN14U9Epd5KmGhtHwuRgxEk2nNE3NTSyfpbnvvPiPk51F3UwEdA1i6cxD5gJ2Unh3AUYMP",
  "key13": "3XcoNosSfGKXeXLZxshP1EvjA3kCkMMJnr1W4WpPzumCkfai9SZ9RasnPdR87V7tYHJtJseZuE1xgEdh24sz7KGW",
  "key14": "47SXnekhPWQGjkzwX8Tnjyqmb1edQNZMbX7mpgQw848bLQLRrA7JNYxcrUAVncYPHLLMD7FUTLufQSosNBrtxnBg",
  "key15": "3RpdwWJtyKE9K837EiCKsWARaHZj9qCRADdfMfq32iDC94QCCW7eYH2rMSzXVPmDQ8i75ToVXZKsPqWdiFQvoQkK",
  "key16": "4hLKcffmZCTUGnCdZGceBk4nxVNLh6RenyTF1y55MUDuCVJZqdJVpXmvF8JyCrWw1ccJrHgj6Ug2FntphMgpxtWS",
  "key17": "wtLchfi8161Lk5RdtqkETwCBLFxefcxXkBmHgn1BRU9HBBKsiE9jCkk9eq83PzVJNagEzeLqZvzma5dqJpyAkrS",
  "key18": "357j5kfy1e1Cv8CfYhNMaXpmZ1Nn6vzXnTRw3z6vzAJCaNsKWdoM9Xw56uAhveCWcj68fp2zFoBB5quMhWBgdL7b",
  "key19": "4n5WK2QPh3tZ5e75GuXi7RetwanQSWiFKuJSwB2BNjXPje4h8xmdgb3XetSA7f15y9wwF1weKeo7HH7ufEeuEqVC",
  "key20": "4iEKBi6QnVEX1L9QdtnQyfX7Q8VWr4t7JjJNxDnw8PiwkXMk3SrcEbSgkPF9vXCfDZBPWj6EJUy7LRMNNxdm5HT2",
  "key21": "31L45ztEAsM2pUrh5EUdZQgc8Z3Csk3bettc43eCKxfXa9dk618HWbgvNR1C7aFNbR6eRdkM5LcqW5cEaMARvgyC",
  "key22": "TDzWCq8RrcowBByk5D44XNPPF6ByGtTiwAippN52as7od1ktSuF3pPcqQFLNw7mPzXSHCCCMsrw62YVvkbZ2fGD",
  "key23": "4F51XtkzCCBxppXZSzKTHajrjx3RU6yXUPndDMsHw6ozLuw2Et1p3PiSYbPGwdYiA7xHyNzYFeXWJXBrSZgYSYKF",
  "key24": "hSUbFb75D84XAmyikfs8MSUGHDNLkeJGDyepHv3b4hfhHDz33Smmfm13986NtHXLVyvpYNfP497wb51BJZEeJbb"
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
