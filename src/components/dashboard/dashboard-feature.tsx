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
    "5yEK2RStM2ydBA8FTdobmmgc5AE5LF7M84mRD6A4vj5oQxGMxQMC8CUiawm9i4MqQNQiduNftAGEW3CYrvLamCBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fuKtKN567ckdz5MnCTZnznhY8CMEkxoaSjrx4HQ9Xbh86xdaoJaFc2ePtPZjLJqwudCUCbtW7x2kMPmdS28aWyB",
  "key1": "4MJirsA9D3UpcD4giX3tGXpFe3GpdGYpVgL7ZdAtZfUJjRzZfkiYbRfC1DM1KmoUHacsBm3zX2PLKLSb7tcijDX4",
  "key2": "F7BTcr543rTCbhUgobDx1qQfoRWUvtupQzw5ef43rCcYKkhfysY4Ce3y2JBUhY4tFwQHq57XHFjonUtv3yjbWyz",
  "key3": "YMtf3ix4yNKNZCMswVuQjJocRJu6hD7WxfTQuw1cyRwbqGTNstVJnQrspzERumhrnyc58GGGPoxxYmCNW7F5reY",
  "key4": "5pLQ1Yza4kdTp9edPg7CzU5uwg4KFKDHCvj94dBgo6KyoMpejCVBGVWceUCRcSSNVfzcGfVXHVo8mRjss6TrJKup",
  "key5": "4pgqYzjTaNGPSZZTE1nzpydz9M3F1DYvv9yBWeGjwcihpVwAcdei27ojYDWB4NF98Yw6RqwEBV45qE1ujmjg3FhB",
  "key6": "gHpsuNXN9t7D8ZdcCU14d55y761zCpCKYTYBPdTV6HZSZuFD3DHRRMBUq1BbTBGhWp2YoGTTqwXbkEWVcQ6HXPw",
  "key7": "4K8yz5WnYma2kMAmdkiynUaEuhjiiy4ZQ9jsncESAhAv8V4P2ZsabYTFDGwoGJkAFUQWpFiqoC9Gx2KngGFWxbxZ",
  "key8": "4mvmG5pC14HCiweP8sZrKx3ZbBA75oy84E3qipRF97t4fHox5ydu1CA9J2qVoUwb9wKYyhNpLkGNLxnCgxtUE15C",
  "key9": "51L4ziBzc125ACR3HxqixS6MdgXZkV2VBsu8jFtT4hWgZ6X4kVuckSTnD7qMtQVX1kZuJ2mcfFhjYkFX13huDiZk",
  "key10": "4pdqAaBohBWGLno7xrU8VHCL8H7fWLDorfabXUhwoa2MrqpD6ev3U5hyGCW9aEjjBiTatZvvGFtTbWJMtPrDrNy4",
  "key11": "4rrYPJY1p2Dm3tWo2xVN4qJuM9ZaWD3PTNHfTNUgaXrdwd7gNQFsRh9gxfeeuwc1NtkZXHMa3Jzqnzr7Mba4fmaG",
  "key12": "sbTQDGJed3ZsQZtmQbgUjxazf4S3QTa59Kjre7YichpUxk8QxcwZRKS9KWNmceggTYJMCpA8e4LWe3sfAKxsMNW",
  "key13": "3PrR5vhjZooVt7SU7pYYEH6h3PaQkQy7hc8jgYyzdt9XXBQeDywe28w9asJoX6uQCGDNk9G1ktkWC5ZH4w5W3f6v",
  "key14": "Y2nj32rdLYW7hpds9vWL2FcPMGpDFYGBuSJJyAajThaUPi5opsGC624abf6Gojs6CRodbaqdN4cMtWfGRZu8ge6",
  "key15": "2WUwe853qxDv9UVvunS9KvpWaRY3iwqPbcbquoS2Br78qmyi26rJ9HQ87SiuRUKDhn18rYrH6eZfjop6vVMGQYBN",
  "key16": "52vJybZpSKdZd4gX4AffDs7zXJkZTb1FNS6hEsZLKDM4eGikKZt892RwpdNEb12SVf8qnMmZjM5DTu1sLDQHJxbz",
  "key17": "6hvZfa4gvKfxfEwf6ZgcTbNfkHYpaXMCtRXxCSJu4Nn9UVkdexHFLbisM9mM9XaV5zuddYJhdYQ4tpMPKCnWBQc",
  "key18": "QDyECSMWh144tZDChRJesBBp9BMxbMQNLUM7ciRBXcMHrsR4UvkP1hmdxtk7u4XZcxVbJeU2UwYyxirSMHYFpdk",
  "key19": "SQ9P2HgZpSNncw2CvsgakVWQE6RtK1uW8dCvPxxAcJUQQzm9nJjTTUeEhZiQrDRocUjHYHYdYLDm5tzeLkN1fmk",
  "key20": "44vrkbHEJxWCdLgQWcrquYwFrcDBuqg6AAjzKSuUw91XMvPEM1htepqbvWaSLGFyw4vzkP5hYz8vwApKj2GVVy3e",
  "key21": "2KkjwDkDoKQFf5UqcKDwgzgCyLMS7SFYB2TDARMk5BMpVifEZvckeFFeFg1GFK6R9tX1LHpgFyG66eZKcnkQHgLw",
  "key22": "UzxQw7YpHxX3zrcQY6XL6gaWwr7hNaSqXtneSbfZCKJCuY66hQWwJSweyjaKFW7QUCZbFvaNY4iwiSHEGRxYqis",
  "key23": "QEN3gsDn2oFwFqf3Lh53FnYWJKFDvrovqN49dVgiYzVb5B35kiHznbvqS8qGTVsw4vfHJbJUHXrz8ypa8tZRRfN",
  "key24": "4dNhDHuoWkUvbHmN3HxUJXkmSPRyn1ZMzjM8vok1oEYxmCRZhroso84vN99ZDbnBc3rmYuqb7KejR34vWcpWLrSa",
  "key25": "PAdupwas5e1ZkgrJcvPqtB1a1k3atuEhLjX76R1aTmGaSWLbD1AYuMvdZdgdhQfRfquj7tFYYRPeSe5TG5W9Qaq",
  "key26": "3e7eUWDvffqafvNASs8XTmni2UW97DrUXxtZ3CCTSVBbrGmR7PM3777irqg3jqC6EkSpm4aXHUmzXg2DAEApHCyK",
  "key27": "3XExwEmAcqVxrCYBw3UMdxzN3cMSK4aPxJJ2M1wRHe2w9SeQGo9ZvrijKX4WNSHcDfubwjFqRpLnLU2kGspy1fb4",
  "key28": "635rkL39DhaLHYWByqzQMkv7Aiyp6JBJi4hYHcQ6Ca45vZAqFdHwhvSf1mwBXVxYttZLyFdShrza19G2xdrqJiob",
  "key29": "4ZnvYWWWRJ9u9ai8me54PT9Bhs3xxCKufJ8CCdYZJCA5XXLR7cWwRGZ44FfWESi6y93emF7ENAsSphCUxCAsjgCF"
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
