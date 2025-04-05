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
    "5xatcej6SEgbPSd1NZPBEiTvcMsr6Foa714BaKuiH7YKCuagJzHz5vJnn8YC8bjpMtog9ahd5oSV2LncoXZkRHWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oqJjrxwAtRiQ2LEt6jscd6QFeZ3Wg3sSoM9KJXbQWvb4tKK3kToFj7CBua7eYP6tvz9Lh3h3vAJt1TuT1Ne1HJQ",
  "key1": "811PR7snvvWFKnn8ZqSguD6mfi72Z4qvyGM5ddYmk9JiTbFyoszqTPCQW5kkZhYQA9aPMYzuyqY3T9vLArJeDWC",
  "key2": "3aXMTHoKUZSrXfThQawWS1ykbgKt7CYnaB2LWWAik42WqdqVHiTkEBwAawYi42KEoejH8wzuewYyaRTKpQXU85ej",
  "key3": "4BAPpTu4zw2feNqFFvp8HAYgKdyLC21q3HZuwN2YcRktq5zbkBFjxEkM72Y61Wxc5ba8f2X6zr5KZMZEAucPh5PT",
  "key4": "1MCfdz6a3mr5FgdFuURSxyy3eRUra4VgoNZsqn1Z7GM9ZuXGS9SzytT89deqBBfNsLN7xt4PVN6qQhdKsjxz3tE",
  "key5": "Av5JHajmXfAhE8e9GBBwiMx1ReyMZ9RWdjCwZcVaVUASAYP2e4v4MRG5jJakbzdKRcCLJQDK7c2TyJJ2Kd4io8U",
  "key6": "4apQwRUQwZqx9Qq82m4Fm9iCraAxtEkmaCNtuiP2Jkq3nU4mQYdkZDDPTjqp7ZLp4fu8xZb72AR4MjNsEqZ8syPS",
  "key7": "2M6mGexx2HLBrfuTjnANEzQKiACd4XrsHbNZHT18iEpnq7DT9PEB6z1Rwjdjoq6wGeCyzneiF6RcXBcUwKF8afyu",
  "key8": "4RaXLg9NuYoA3gukXURtE5E2CMcdK3LkZGLo169tKLJkhVGgnWS5jjFNaYXgasGo3wTcnNLXsecjtUgz9fHqv2fd",
  "key9": "BSbeDVrK2SCxQDP2HB2YuD1NthaCqwBqzVXwRz8UVn84FHsY2sNJRqxHymks1MJwZgYAX4mS9B2AzHQ296SBxHm",
  "key10": "qScTUi3Lmqb8srBrBP8fHf27SXT2Zpjx545omY9Ux5UEucEH1DtVhJEK68W6sXpo8v1aLyMcgS3fJTQmNJTqFpC",
  "key11": "2y1HiGEYijya1hQKSHJW9LkrSAmyXgX6F4yW19opxotK3HkVX16Wkxv11ZtYSUPZEymRkw2k5aZmcJsKm7uH8Mmk",
  "key12": "3Bf4PGGYaitsVVTD8hkgpfa9dwo7gG8gsGyEmGksan1Gxx5m7WkL55gLQAf97Z2tGNpbR7Z8pC16d8dkqUkawQNd",
  "key13": "2886EUDEF9SfDWrHGwBELP7GLPtiYMnCMQqGRbPQSrHvAwaxL5ubSoLiXsahMva2kWrAntWE7LwEm9Waxb5dSi4M",
  "key14": "3DU3de8sKvUoQ92SNywMtgBto91oHqRUtH6cNg9B8Uow6d1EgigepFMFkK68rk1fde748fuGrtCUnTQbbbyPFkXo",
  "key15": "3MiPs45zCB2DRz8ERGa8ge5Y3mwfv2NCrjMpSV4ba5AdWsrLtogR5hZjB3X5QHpMFHAJSKmV47hcEJmYirMHHtic",
  "key16": "2FNmdgg1itYpF5nCD23WBzsvBeJFxu6XBGEQgszBuN2M2WXqtw5dQ1Zfqa2ThrCQgEjMpzpheaTTcfK23oYDNBse",
  "key17": "65qqhMSyp9uFsYmhnLAZxXGpUaMD5Vzog2H2b5hLFvCEgDPhgL5TqSQ4afnpu7GBFzcE1KezSD7xcMxn38vFTqD",
  "key18": "4k2N7V1mhd9SVTiATwkFxNA1VNfr9iddnuZV4ryBi9eS3ZssuebZoB9diRojZsfM2ZpTn8h32RippA71YYVrMDvP",
  "key19": "3SAqq9fthDSni6K4bh2CvQeyVc1xW5ibq1neNCnLd18UQAxiQsdrkjJY2XYv24oB6ZkdoDkSngjEdG2AUBZeC1ui",
  "key20": "4vJ4nbUX8ZVRgvmcD9vFtyizGzoRJufSs9wFur5GHWzkviBK1ZXxKsZw2KQMvCbkcwZib8ZeJcYdRJMMPq4WXjHb",
  "key21": "2MVW1Af3auGAjQr5WK2zdhuPoFzgn158Y3cP3aZPQDMdY6vUwnX8f4HAPfGLJz9UYGWJAq1nFY3L6d2bTByQiEMQ",
  "key22": "2qYQpbVDAZrPNzbns31BDcNb2X7EyvFhv3KMRaAhLNaeRJ1RZQsrNzPZRQDDzswPqYJ5canVutKQKYMA19Yi5C22",
  "key23": "wpHo959RvtPHWfUXvuZEdapXsh15kzY5LWUfiBdD4teQny9s357KDxqxwDVjR4p6NMkkkkr2ApBqnhMLjhWkBTh",
  "key24": "5op5h8Mw86RKugnRqXAy3m4iZ15EZpCvoUnDoyqamhMthLfVpgeqcmfLC9winb8y6yCT3bG5gnpY943snvEXp84s",
  "key25": "3z5KBK2pJF1qkfcDRQKWUJjfRtYpcUhkGDpJKacmzL6o97uuhVh7Ef64qaS3fKddqGZkvDF57LEgRoaTKuEfNCkk",
  "key26": "4FiMNyo7KftG9jKrDqpSn7FGqEFov74rgMrHXbFzTQBdJ94wv7eQuFkgNPNvSvvK9Bb237Y6vvZPWDXRwEUVVq27",
  "key27": "3A9iSuwvfEQHYFVwwuqiK2YuSREmq5qbFmLkbGxqNzveL1z845mdWM13RTGPG9wtVqjHE1xkks3BvteMpKYbXHXq",
  "key28": "2f257fGShBcKAH1EoCKvoGGaNgFYFdbm7ZkaAsxVSkAKLrrp6Yf6Mqy8tfV8Bj6zFApvojA3yorMqsCMNA8JZ6z5",
  "key29": "3dKwqmJdXLxEdgffFJoyZ1uQCNXrFWCRJzpN1TZo88irvZyova9w53jMrpeQ8SinAd6NETg1u4h9hXvcnRPoDV6D",
  "key30": "ByYwVzg6fBmz2ANgTMn3DdL4sq23GRV8AmUHkYTssopuSCXSZtX4s8JKm8BWi4AfUZZJmt1PwxQvpw19BcTw7ZZ"
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
