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
    "2XjZzxBvvZinRL3ATEtKQKt6xLHrm17T68oqhHa5MZvaYf9TSNn5As8YJwf9ZLUD3ewvkybxYejCmmCt7pMXPBUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5544Dcv5c2fAB74i4s36jqNBnCPnXdpGGfFJxZvtiBJK7XvsSCBbBMvKKwDLzYLhgafLfqy57mCFy5EvG6LqzLQH",
  "key1": "3AjDvoGDhfYN2dtdiv8yHh9AiEJkSPg73MiwdAjMaSnfm4v9qXnzuT4EzmJSWJkakcN9pLMv92gnKsHoEwbc5YUQ",
  "key2": "29mvZSzDrE6hzRmr3kV5ajJWLB8bgL6uTh1bnf7mg3Jqnj7f3hvDx69NpS97oefab6ghtMqHYF6z2Yi7kufD4wZk",
  "key3": "42DZkHoniG6YWMdzwWGUo7zRMCYJAFyhdt7MfWtZoF4jtvR7mzzKVyxG2WXHsgeeQj2egoLqKbcuRybwvF95AuKs",
  "key4": "3snoYvBSb4JEAvSDqBUzzcV5Bee4w8228KchHU7bd5aUN6nErtNDh5Dpa8xwppNtPb3RmT3dnTK2rvsYnRUJYb9P",
  "key5": "5v5wibibFJxZGas8hTg9USmKSJF428V5W6yTEwxAHUoWgQSNFXqp8NoGkTqNpPKpds2FUpexcAsSKfUERLn4b1zf",
  "key6": "4dboPrWgUM9cCmzrU5VCRwmkEBUz2TjLiFHV9GdNXSDd37cz1PTPdtSDDR2NZjhbGMLn9AUFoEPfdNVVDBpHGYaS",
  "key7": "nNnzTyNjjd6hrqYCyNtRxkQACCGGW4EXGPhQroTpH46NRxUf3euE7TfJJS2wHxUiMUtAfRMKomXc8iKDMcD3Kfp",
  "key8": "2hNu92i5EMqXUqUFKSXmAbpGaGdyd1iLU2MEJZghvyvyhnt5U5AhMxuVMTzx6jPcRy7x51KDmvhbaDnU4DMn42gu",
  "key9": "3S4jMRV9ddv4tWPhYYSK73p1hGg65YYdARZoRzC8Qsbc6Rfm7Npk43tp4a1r1JKAnixAef5LjnqnS6nggPx4QBPH",
  "key10": "5JrD6zgSXGZ4NzgegHBNkTqFXaSi2TMvsPmCufdaEinNFrUQr4TZNAUX67SFTdmTf3A7ZmzUXMEPcfQd3qdq4SkD",
  "key11": "2TLKZM3cUhEzWrEWcm4QMtuAgzZ1rKbg3brYLZFZtM23HyMzkUYmebaZpimp7giHNkjLt2qUyFtvA2B1z8cgv8Xt",
  "key12": "52dopPpt6TEtEeBnuy1z8yde6nvNMDgnbVxv8wW82C6PVbH2eM39UMMKugteMLC8Y2Tas4D3NhY8RNTzJKAcdxz5",
  "key13": "3JBpYTxKLP1skwjPRXRFVRneTugJJMqchwZmw3iyoJmuBt8UwPYp6KLqRcj7SQKkiTYHMHrkHJ4Edu7EJM9Qpmta",
  "key14": "3Qp6spLhHbSFZG92EbLYYoFpGaV554hMDB1JUoraJCcz5sNrYpg5ihAo5BxwNAjpGfGvQxyx6AhPsLMYf6qjNUsx",
  "key15": "3FBHWideUeKDD6ZnbAQAZPUHJfsa2iQnXNDc6dMN6zQMuNNGMWtK23x1F9zWX8gbKVkahS9FuQqSBRBssv5aZHX9",
  "key16": "3sJfzgWyiT5ZrHwRSiQsf6kLAB1SJhScbDmTzrqJMFUk3aFiBUWJuXr3YnjCnaaxabmxac1EC8BxdGThm6ozAMEp",
  "key17": "3nNg7vBcgwDrLhNSjvExpDJ9dYoAxA1JbW2hCzsgVsGRYnYHMgP8Wwkz196DEhtH32CXjbqVFfU8r12LDgM7Jgxk",
  "key18": "6RyeJe6JijH8hUCqkoWEnXQseEmMRevSSLdm7cTiSiF4Tmmh3xPD4DsDsNHBT6QioEPKWs8fSUn2nojBMYoLjNb",
  "key19": "4n6Cy6PAubzsxcLKt2khBC44nr3SvpMTj8h9pBiZ8MhmJuwvCfAA5hWWQyAPZHBF9hSbC364nBG1gSRDaXeszwsM",
  "key20": "nHa9aGhj8cJTomWyJNYxtG5znZWEY36i8YVqdH1czMBWEqzbAmRKdPYjYLmp745ZXLfgH63h2CDC8bgF89B7Poc",
  "key21": "5qC8sRmAENQDyc2uiMzjQuGg2ns8ERRA3kcpaBQvZb1pA6mz2NvdtZC1EQViWMCw6iu6g4EhHiAdTHWQ2bxgx4Bw",
  "key22": "2Bdccb7xWzBrsHW39bT2mbDuXtgME5wR2ggmKFNVPNhKqrivaqK7vY2eNQj11Wi45LSYvHU1zhjQyWjWPxDtuYGv",
  "key23": "3QMHRELHJLBoZNM5BqxbF8uMcFwBGEVWG1TnSkk8hX6mNXkUQzvQSiCQ4QuQ5tp3u9cwiYET2goycZofrHUqoZq4",
  "key24": "4LEdZqGUKTExHK6UCVuRqSyWjyeAXZZ42E4tVUythgpLCVJ3duydkXmfTteXmumC64kAqgABPR1a1j3xhfQDPq9x",
  "key25": "5CEKzQtHUhbyUyEHESaEcQieChaaXu73viTLffmRN8VcyKjYyRBG8Huzk4ZEyyDwPcf3UdcpzU6KHhrqQr7sPAsQ",
  "key26": "2x23oUXALQdUMCN5Z8WP4BFsGmoP9cucyuGg7mNMPByhYX47qBcBYmyX6Vfp482shxotdjVsA67AkhnQQ46rjRhs"
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
