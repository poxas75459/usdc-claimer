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
    "4mTXAmpyHn2LooURHf3FLeCF5fNhKhWUTZQsBaVHUw8Ygdh2ibaSh63cFuKUDx4PuLHeEtqqYiUFPLPxiG3NY5Ws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2it1tsonXyvkbJMbjp7W9rT8eXWYWXYpt7RSezSf1qYsodtxNPszcoYYcn8CDCWhg7rBhv8ssFrJKMyN9gsewj2m",
  "key1": "29ypbVLudzz2pMKyi8g3yvfjAWKmcpYCZ2UxGGJChtNv8Pir13eWpnjNDu5R86eFkzA55dHtMgWuUH44TV5g8xzT",
  "key2": "5ME8tMW9Utk3hnYeY3X4QPQnJfSAGkfti6B6eNrpgL8XvGWt7thrdYVmumwPcRQw94ZyB41q73w7AVSsEMXbFDb7",
  "key3": "2mp6ogjWdimqYUM8smpkEo3WX11R4hSnTmv1zGXVCY3BvvgBMKk73mq66kN2mngmjyPXhegFGr5Scff3kGBZXNjV",
  "key4": "5uDHBUq7MRnauTM8f916Hus9FCgh5iYo6wtmCJTBn3TSNNKGX3CBXFELmZSZLRZzJXpdZAAB2AgU5oiGftT63nDY",
  "key5": "3eVdRGRrHMTzyZi4o5PVrJ2pBNVPWTA8eeDHdwtLXDLVxNBj9bYLtJjzfTGXPAxfiZSNLTUhKGSZSN6gMMdW8EgQ",
  "key6": "35xUo3yk1Dm2UqNFQYU6gkRAB7ZFALKPTGj5eg63cDMkwJpGCigksVAUphL4SkvpZWaX8mpmiLr8Lre3kS9VkChn",
  "key7": "2F83bb78Aj387eYLYEzRHPrEJppiRZSzB87pLbop8TvLRCKEUcreCHH6DuztvyjGUqnTAL2zmgWbN14scbHe9qoC",
  "key8": "4srd4zNZDpft5Xd5i2gWrbP5CaRNgPg7yauaSxbbVqMLuxWFzqjXG36LFegoyVGJrs8ZMcwy6beW9zDrkyGfNZj6",
  "key9": "5cPv4F5krLNUF71bvv6ZySPpTaXS7HXp2uRrf7cMfVbP45YHScdSTGJej8Mg3Zg8iWcemR2WwG781Xq6ek3sQVnD",
  "key10": "43RnfxH1kQSh6Km7GSaKcLmwuk21ebWwAWndZ6pj5bxrvUVDhZTfPze2GFa9aLn81xVyUQSkuXKtUgrRxURNU9Qf",
  "key11": "43fYLpggSi7uVzN6wQim7BjWheSZvqgsr2rcaDvgUky8ghcr8HSNX5pf9G6Kk5XiDwNvGLQiTtRQbLCmoL44d29b",
  "key12": "4h4rGqTBu6NTFBJpbwAr9Kacbkc2ELuwBV4MmvT8dmW74N1153VSGy1BPhMKKRWS5ShJpW9bKZtuoPWBKUeqSQgM",
  "key13": "PQ3zkgvrRMkS8zFjXGZn3UTerL5M5Dz1khWiUfAALfiWXYNY1QYGvktkkuUr2CxGpseJLFjmAQTcf5x6woA4RvT",
  "key14": "5wa9QKC8dNBW36ywchW2rdJ5MCSA9nxswAzfHbhxtc2uGnCeQ3SkpTrta7uFWYv3bvf4aqhqf1CXu8D6pQvPbeY2",
  "key15": "3z2SXK6FaGNqt7qo23whWMisjNDWckhiyvYPp6VTuWZuUBLrg1HsZAhgx5d9vm5RonfJm2qV5mHhAcKpMTHBJ7a9",
  "key16": "RTi7x3LmjTsf5zJedgNTP1JSZQh1uZfosLgqW7hWsuwL87HG7h9bsVvALE1oC8n62EJUr4hKaepd4uMTXaqo8rw",
  "key17": "2zRrTepQmdmRwknULNrsb2iF7uyJixD3iikyxRX3826Khq9xZDzSioZZa4YqhKDLwLp9DsB4nyrwHihTtEatN686",
  "key18": "5TJCYU59pBg9QbEYjZwfpT1MFvicXVDY9q11jGheY4BqFwugewjZHdPpQpTn3QPhnKd6WKn7kZLefDpLZ2z9o1MZ",
  "key19": "5dh4uwq8ZxVPYtKogXfo8Aymkt49mvmsGyvbTjkRuohUteM2SPCMzWtAB4WNQNkyPd1EZnMvyDvV93x6tyQiCKXH",
  "key20": "4cJmXwB7J2r4kmiRt1tZwbPht6cJ5i2rGrpcKJUjP5g1jabrhiLxnB1K9rxB8qmFbbknFmZMrbSHbvwooAge6Vz7",
  "key21": "mHXgeC4EViVZD7Tn4iJWQMa9JNFgFF72EmDdChKespXFCRqJb8uFc3fpuAxpWUW7LQppKzS2SM7bp58FTrdQR6s",
  "key22": "4RXEef4ebbpH5CgX8omyKtXmKQJBmTbk8vJC2zLhM9Da6RRSqbtZdCWA5mRF7zf7Y3eLvgz6rpmReetMq7Lfgdqi",
  "key23": "6UfLgf1jcBgCvx9MR3M4KvpGwjPUXP1i8gqgKGvRPDDaAFEvJSRdxShGEmxT7JPSETsud2q7sN4FSzi7S4Vqw5E",
  "key24": "ZkejCYnQHoTbdXA3XDGycctTnbsrJPdrUSGw3WZLd2mmgzewaHE4A2ftm555YpibTNNLPgrKkqERRZ1vx6bwHLx",
  "key25": "34uZHTEqGEpaXVRxK7RD653jVfi2D9TCc4Dk9cQfQCH1CzT86PchzTsYttLbLDEG9uQ5VFAzPS1V27Z26yKr5qof"
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
