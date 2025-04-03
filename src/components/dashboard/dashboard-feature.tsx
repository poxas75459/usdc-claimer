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
    "44SJvexCPUPAXv7amMDf7eikaWp2N52pS6gfvUBipvSdBJ2uP4PfJ6gNUCMkWzEB5NzCj4zkqNdTrxBt3aMiMBND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7T1S4YyWurWZWdVxtRdddDuSaLcmVxmRsubbCgZenGhX4XgSunqSGrCqMrNPw5G63cMyNmWXKkKpHPiFyruaXsg",
  "key1": "128jRie4qdfsujHDptMAwqp7FAzxbr52broeJG7YNBcA2Rk4ujgbC13V64B8Gcy7bNaigCZk4M9emaVLwx9eSEo1",
  "key2": "2AbefKwyPVk2m2UfVuUL4F8VnHatuUdmLphz78onpJ5o2oU57bToZr7nKLP8hPGnHwkZw1NEgyL3wDNedb75Ngj2",
  "key3": "5oPuK2ScLCYmVDZ3HFHC8M5wCKwoSe9NoFhYTqTD3kqVp1nX4yTiW5rMmKsh7K78GRUTdzJfg75CMC1umbDePNKF",
  "key4": "2dSnTa4ZL1cvTukR5XH5eEF2SQn6o4rHqnZbugbHFcRDwMCq2Q6ykthdrMZGmtHxEBPgbH55n5AQqyq5GpWjaog2",
  "key5": "3bhLVQW9f9Vy89ef7vMcHiiXfckCwaDzL5PNm4cTWU41ao3y4dqgwZQXpKkv1CXpHHQYc1636Z5EzEUbNJwYFfW",
  "key6": "59DhgqCAxPaVk51aganze5tSJaN9iaxTqqDum7ceVf5Jhjwzf9r1NsEtcu5Uf3Z43e3cHgfTVMG1TSiekgrKuQLH",
  "key7": "4YRni2eLG2nQeZMqnw9SygSxp3u8ZwPuVAp4mfgjGRsii2A6VzZaBT7XAtseU521aT25a9Kqy72TbPj6s3fBN4Gk",
  "key8": "3ugfLWJxK95ZYg2SbckBAw1QPBpBF8bo2Vgpg43rv8ZrG7wNSvk21CofroxgqDSErjoui4yeKhofnVFJow7hXETm",
  "key9": "3X37N3cUhEKnMDa7Fs3xusXRg4EF51K38wKXFVMHi7L1SPaMjg9VrF3cL2p83U9nh9n1Ym23SvuVq9eHLUHgg7L7",
  "key10": "TwUTXtmSmCiTox6JiVbJV3dMXUc1pLuXZWSzLMD4PdWdssA5RjaVztAEaLqi3zye1awv4tibkpSsprGUrofUbmS",
  "key11": "4F7Pdrc2ABxhyNDUbWRGivRYseNeh1buTgeU1tKnJyxGBHEYxamYujiTnmof6k8CyHBcLfBWvkrh1EUC9RdSTh45",
  "key12": "4nbisoeVQEdB3tmWHmTs66BYB9fU3Vb45NPAmYt8XpA6duNJjcf5hdxXAVxawAff2ZA2aH6jsM67zY83VRdJuynB",
  "key13": "4fUE8cNPAa3oY1t5zDyT6EMb11oE2QZ5VW5d493V8mNuiWJdWpPXb1SUbFvJqWXoEtikySF1XAqtdmxhm3hYvVTh",
  "key14": "4U2zKApgd2EPGhQEGFHNsnwLEt4oTDiPqgyzXSMuXJnrx9UE28bydn7nQi3q56fGbGDxeGQntRTqAHmKkLvXApio",
  "key15": "66Q1RxbjtTpVkpdFiEp4SUk2S3DdeWzvqJsUboWTa9t3gTPgY1oNbvdhVXsioDwtXsuSNzTBVBpnEi1DF51hnNhU",
  "key16": "3SC2sLvGjWND3BaDYrZgVkLAKZkiuJcbRZv8v971W2JoU7NaQrdAqDNfkhLrH55jM68gUazqnHAT5JMojqfFB1vw",
  "key17": "4HRja8soQKBzXpLxmEJNTw3ryw9qDC5zZfZVbPLs4tHrARY4947c7ymUPbAzKbFqgLf5jo3RMdEfccy6K61Hu5vU",
  "key18": "4CRUwzJP7GrtmyjHQa9GPRCtMtkELVc7EmKQCsPnrqRgz9sJ4xLkmCcX9EgUxuUWJkZ8faA26mgN7naDxjUXjKA7",
  "key19": "2sjAg3sxRa6NJoJf5vM9y2vwgs4TxBiFrUPoKZbeaNkrY3JYCuGZW3rKNtCRVaimW4KqxTMsgkhXXimdRJaBam4T",
  "key20": "5mQRGM5FakTTZMjsT11AmdgV8RTL8V5N3f4Gs6ZuHhosGa9KxiLPD4HmFcp9fncS2kpDceA6UpvM2bdJwoQdLDpk",
  "key21": "5obqccV71mjUmqe11gSS45CSm1ptEtuXa5Hd7sYhTdBpgEMr17NA3QBxdocUEvYW8Csk6yNpoY3qPDV3RobKJ1yW",
  "key22": "2hXUGeNvmiysPjefs5RAvqMAs6hdVmwdwWg9PcokcvKkrBtqbCY1fdy4iDffo1bj5JS4HYXgTGY97JGyWB1GU1YN",
  "key23": "DoS4xNTKmWRqCXGz4jkJV9skeAg5eAzGJSoUMX5H5NT4y4dW8kuHUwUESa1S2y8LFqpxhe8WNGDL9fmTGmEjJro",
  "key24": "2Pjxucrs2TmjVjo7TULagxX4ydB4gbLvxKQJfrArTFmcNCqedpbkxhuQbhU6VpXDkGVy1YrdjVJDm1vr5DDg8xuH",
  "key25": "57qHN4Vw1NY4mAQDYN4XTanTeVmzASCJcQ6eVXGoGZhxWiLR6MxRU2SvyJK8prgJZ3KXaN2Ye9tZSQmmzYcnhcvi"
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
