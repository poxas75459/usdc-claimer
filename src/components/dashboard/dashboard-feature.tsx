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
    "2JVv7bS8EkTs8xunnBUdSYeTd6cZhMxPHf2qCR97Quwx9pxELpxvLaHTNwv5TooS7tTXXpJK3NAnddxPNXCXNJt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K94S3tFczfhtLRGpRpaEnG5SrsxEtutszRm5T5zRmEdeWp1HXQdkaLHgxyAgzGgpKZV3wXYqrbqdtqw8FjkcA7X",
  "key1": "3bxN2DKg1CwZWEcNkPfNLKwK6DHRoiGpgU5jZ4rpfZMJPBjHkgUHcFVeG8j6M7mVZnGB21mxqVrnkFGaikjTJZXG",
  "key2": "KYyxxUZPqMru6NGSorzJxX37TLDZjg2Q78VcWsArrvcGR235q4M1NxfnHPfCQ2pWyLEpJD5MtnPEz9DzBeK96XJ",
  "key3": "5qT8Gaf6vukjkCzjt3Ss9Qn6U25UgiDX74D363Q6oj6NgyPZWsujFQTe3m26SK3a9k9Ycy895YxSz3WxHAzZdEgH",
  "key4": "2mntn9df7DWxb5yYCKbPcFKzUMsPMDmzjJFMYBH9CdbSo8wP6peqsZDqGkMdURjp6vxQc2GQdpX4yV1gWyMCfKHm",
  "key5": "4paWu7jeSS7sWgf4X1k5MqH8Sd4FXChavB8usHQ3MvJBWn3LowUSWEjci2ikBW2cwaMRY3ZRud3Y33xJcWBLL2ov",
  "key6": "2ZUYCsL7fT7RxjVwvv2wKkmsMXo2djaERajpsFUpXwjJyqvQ8trx2ErUuWkcTpmbWyTarHwDLiciwWTTFv5bB8q2",
  "key7": "54nQEj8X8QVgxv2PRfGyrtNkFtDhbDPz1geo9YpeGBgijHHJ3iEgoX6u6nuACijr783pwMjMAcZxrkX6jNFTeVwq",
  "key8": "2ZTnafJRen4iJLaif9rhuqXdFGq1Tu8T8V6Jefw1KyC5QkKz8vaCaxfg8p5VT59fMuGDkSPMGr2xf9t8tVoVKuk7",
  "key9": "4FZ8cug37Y7Vkiqsj3uksPAsmsqdyTHwgTNw7Q6WeLEwP9CtwD3Cpgz5WygytQhCe9Cg6GgX1RyFQrzsAFK6jufg",
  "key10": "4XbqdpuKfLECbdAMnaq4B83iFUdpEHojUhFvGW3XaqBD6A6RyHT64yd275q7sQb7J5x69cQ6k5QG2m9eQUfWUf8A",
  "key11": "5R915gAdZST2tfYa3PDGAK5YMLDcY7exxnCoEf9hn9AefZPgtSYN33iZB2EAwWb4a8Vdg8byrViJ4S7LWN7MDtvx",
  "key12": "5Adrg9m7MY1fkRuJ1o8cKd3shAasAgnK8SA2S9fEuyE7DKNfbZGqJCpc82jzSG8VJx5iC6aAwjgreAVJQBSMkyZL",
  "key13": "5xcXxv9Ycz2JzE48aSmYg7QpEkBxihhcYoFXAw2B2uaEhZydJ43fdXEvnVCF2kYoCumzLRwYpyNXB6U5eGT72H7g",
  "key14": "37Z1txPbPcrwMMa9iuZesR7RRnYA1Nkg5vcjEbUGzqDK2D6SvwouGi8ay65jq9EEZd3oRPpZupj3WwLbFZ8JPtKK",
  "key15": "5GHybw4d1NXhp2ncwnzaxnARRwFjQii1SPLvtDCFZnyBXzFiPDyA8jRFPRmNzGmzB6KSafnuJGHiLXLxt7C5GniX",
  "key16": "54J1KjLcDth8SniNq8DYAZZP2xUJz18JRtfEv3q2mtvWLrw6BMgsrurVjpfGbbBVQQmuCRbQpJj9LmqpeNVV7xjM",
  "key17": "4SoaMWFzhyN72TuN7oARiM5rnK7ixSKS5yzW8tEx8bGiwo8XmnnkLDBMKJ7QftnnWKgPiz6WKhFH5rQyugnkWwMS",
  "key18": "4pCNEwxX7z5CDdq6MPrivTLQHuMXo1SRuDRVyYufb7BZnqtNUFYmvRi1HRZCLUSyX7xfaNUAbUUGW6YVeoq2aKcY",
  "key19": "49FDZtQcHin49viyfE2W1NgBGjK43cLtGxiyeTHPtq4aJ6o9cRJNx2mdti7TCMJrjbqtGPCajNSQQ2Axwp726ok8",
  "key20": "3rpdiC4JtyAJvXGksqVyCzDTY5rqFDvfn2Z1zHunuVvz8zmWTNypUok8MS6Lnzk4a7aceiEUa2v19NWUwNyQVgm8",
  "key21": "4DX4wEeKYFyTTogNHdVyXf7Js4tZyqY9xg72saLL2kLNuzT8HFg8byNfcGbzW2D5ckci9nv3euxXgAr8BYdJXo66",
  "key22": "4XNYPCBFeWLTZs8fSAins4K3B8v5sYLecr2G8UbUYZmkveKdACLDs5gTqmKEoTsjHsktps5j9LV4M2AYQNS3prWp",
  "key23": "3yWSD6Z2E2ghyfZ8FnyUGamEEcCSSBfYeMNw8Ja328e8N9bT1TEt8bzqTqPnjVtFBCVJecL3K9Yw1iHTZoNWdjSw",
  "key24": "3Bf1Qu9eX4Eg6AngPg7Zg5JvjaGtKhpWAQ1VFC5tPgWTyTW8oZZaEh2ijJxG8yZz1gAr1dWvGv3gBq8tJdiNqkJg",
  "key25": "48W27SwRGwnzBAJuMp5ZTHwPEAWgrFHeJqna9tfn553wdXTYUov7ZYrWSevKTooX1jTUQ6qkVa4FH4J1UWv4ULcp",
  "key26": "4699MuPJ8d76mdZeHmrHUF96z5NbuuWZKnn5dkMZWFvGvSXexAC2hn5kFmgNFqsnQXyXSSmEPBFLgGB99fZWTwRM",
  "key27": "2urFuQRtBmwVkCfkUYmCxzSvimMqek2i86YxC28cEVu57PX8T1xWQWMrGiSmFU6X6KrxfC3nbppoECLYcATrza2r",
  "key28": "3ZnLmdRpb3u2VrJ5TxZFvbjoXCqXy3zzuPQULqA4kpLZ4zYYEVPKoE9JMYX6TEqvvDx9mWa9GAKhQB9GcRrKEJPD",
  "key29": "3SbTMH3LtuCFwf8aFf7GjF9vDv3dZoRbKn36ZbpbnmRhe46FxeBj6GM53iTB6gVyGvJCo7u6g2ADdUfnxjQ7J6yT",
  "key30": "2gp1WfVcUpv5vv12pnZkGaeSs78xGork6XbAHtuG7ThUiqJJPWcQpX75oTWLQuaefV2aunLbRf74DfUqU8D8vMnt",
  "key31": "3BgPnTsg5zSRQ6MovijHKD3G2DN4pmBPRmjJ8HVnHhfkwuJh6AiTEwRDBQshqPAcdHaUmHiZ22n167VnvYjVmRLx",
  "key32": "5oRqqZCJo4QzEzHEnb5U9xsuX4LZVsyGtf3HJJdfzs5kAjZDUtZSHxzzQY1sqvMYRTx1YaDjBx8gTtrAXdBWgi94"
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
