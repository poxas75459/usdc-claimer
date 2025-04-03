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
    "5m1GjSYHKXY6fP2o3q69J61D8ze4ACPr6eYcT2g8WYtcad3K3XMLwuapxFoTKRA934qeyw9C3jCyGJfXmtsGpYwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bVW1pggBugfqE2xJvRE3hXMpERd1p84VwGjSYCJFq4BvfqKpQYK7G1qWmMDkZC5jhCVP746djHbSoT1Uy9NDCBL",
  "key1": "4QTxKYzSXhJ5ntstY5nmFPM8nkVq7A3M7tdEDEuCixsnSxqzWQn21o4VqpiSkJ5htVzu4FVHH3N7nruT9b23Wr94",
  "key2": "4Fmh3VgWMa4FZVq3MfT3DTmDXk2jtdJWV5Vg82Ce8TnoyGHB3r48M8N7bQU2fpDXNtE6Qi5T5noHhyUUgivqmePH",
  "key3": "3NWX7VwnZcB8qKwFh8vqKwot7xig5C9PfH3fMuqNoyJndSZgkUhVfPQwH88cGjcDCaxtPE4jJHGkRwH7vB5vUHXq",
  "key4": "3TA7ttfGwSsLkz3sMcWDg9hKKDPJT6uZUcKUUC5mbQ4HmstvaSq2aNV5hUCpa1B1wydV99YaS57zE6NxeRGuKyoL",
  "key5": "2PAEykGn4W3RRCRg9v1nEJN8jqa3vJaV1H61FeUMHerkxRR6V8gfKG88joaZWMjF3jHms9frQdNA3xB14hCzaggn",
  "key6": "66YaE2uEXkvv6AKxrNn7qKdDBea4J8N78mUxG6r7WUSrybPc9Xa5e34Yp3rNWEeyPxNm3hiZngqKFAUsH6Kw3JUi",
  "key7": "EjgME9kAnaE2PzHS4g9Y4MSy7nAyZekPi8RYEYwJuLsLwBQ6xnio5aFnmJ1GfEaXrVSFePPb4NvjHZUn9K3ojUj",
  "key8": "F4wyKqDGnrZChBy6vWXSH8kqpSWJGTcBAmr1VfLJwaB9qeEtuquGqvYnP9c4D14B2J5hDmN6SCWnhLEwHrP5L2r",
  "key9": "2pJonTD9Vr1t3hGYSgHz1FmpnT1MaDSQA6ir3cko7V7LArV25vVMohS6kHhRPh2jZt9coAHWUDsQPaf7oDLX6Haf",
  "key10": "4knk7qhZBrssNDZsXFdLnnANt7krH4uFkAXYbK5DnwQRgGVBub9mUvwF7nAaqC9zRbLen2D24b3M1rzG51KmZTkM",
  "key11": "2jknkRqQXTchh7AfVFMcnk3nbP9VExDGhXsq5rGV9YL7AxCoCiqoJRVDmbpvCvoMyBE41mm5EdPLE83DfwRjWpmB",
  "key12": "3cdW9ZW38ZD2N8BwTjZd9bUkSmGEbceBvqgaAsygggPUepNje33srSMGcGoMNY2kmvREivpc4zczLNmHApo11dNF",
  "key13": "5wu5eSLXZwzNoYnjXd4b4VDRY89cB2byk7q52Kt5ZJ8LoES3YoYZFwX33MTmnjr1oY8sfNhHMew5yThMwfuupMHF",
  "key14": "2xLBwhqqcQJzdTgePapaWMd4J4uKw1HC3WGTJYoBBt8faxNNBvaeYFGeuGQDbUeP4zULuw6vgnfPnLYamrK7JaRu",
  "key15": "AB6sspKYsv8aWqQf5b6uGCGmyEkFrkUJJF6RBHy4rj6Sye1FCyXsKHAzxfe99h1cMdMpzdsHZgr2YUNYEH4JSUr",
  "key16": "5V7wCUwGxDhxDkKQoSiZZj42w98f3N9hQprPhFtSZsHTQnKuwMVwNquZxvKXFFCsTgaCpAUmyZs7FNqXxTz2zVVG",
  "key17": "64NGqoJzQNcNMohijhCdWtSN5k7yMkXSeyEsV4d2bE2e6tKjcfruqzRF5eiva4cZPaqwDtHM9YUkWhS5cw7GhRfx",
  "key18": "4fybShB8UAZ3jTVfLjiopNzCsg2PtLot8aQ3sfHtcP8wuvoNa5brBrZwYcaTSKwEG1pDVic1BWpZ97uKASH4eDPr",
  "key19": "64mHfaPrfmAfBX1uELHTYDFxK4w1ksNsbZb4Ng9cDCmiZyDp3eVp5mo5HpiU7XgrhSVoC1LKRBZWwo4MhGEWo8cq",
  "key20": "4fpWpbk6KDBA6vSd7LY6i6Wj4eMEstrr65oqepmrwHQqmn9pDX2k6Bznx5car7L7d1VW7NwCZs4kv7o8bqgqqrJ5",
  "key21": "2twQpYXZSbyLrFcTTYJV4g7kMRLeThqHw7iVj19dcWVkUrmycnBDpjpmsxbUnGZ9qffRAUsMHna5SHJKQNYuTNmE",
  "key22": "R4M2mcdt8kH4FnAQ6p7b1oW54yLvH8Z1WKsyXnEFgaxMJLBzZHME4TpfweX5u9u7ns8Q3PjSogB76YBv4PyW8UR",
  "key23": "3j8yLhjTc371VZJBFNTrMDGwdEmY2Hr9Q4Ti5ne3psaFMcwXyDGPUtDpH3Sx2uHfdHuGMbCJaAP6taTwmTcKpxun",
  "key24": "43fsrXbg5Yf56BwdauqahZjU1G24THCufLK2P4iVRYgthPU9dkJgPAf9M8iVDk3TmUZGYKsF47K8xRw2jWWRihuY",
  "key25": "4jd8PXWSLMSsK1sJyBYLmEWaRrTAsPciEgzWd7LzZ5ziqDRaVkqv29zTJuF7ny79rstWQ9CqBbB7RgzwYec1ickg",
  "key26": "3T832XypDDKdVBdPA2nET4QWqiU86T7Leks4tTQ88hMWcTn3di4fHfYNYcbkHBPJP8H4no2xsCpni7dj2fY4tDkf",
  "key27": "2ADss9YyJpdmDuJXYqkJi9jKXyLsc78BXzkQSwRs3RYHmko6avici4zjT5zLbdA6KeQPhkbyruS2t843DTYr6hp3",
  "key28": "3sZe5sWKzRn1k1FokRyt95VZbJBPLHU73vXrZ4vU1q4Cmio4E4f9qNefvNHVVKunM3TuTxt7s6hjuGhjb5PWDPFt",
  "key29": "wSuUMBjSCGg3AZdRvGW5Tajr9duqFhUEKb3q4wvgX7HyKgkbMeZv3AS39VdpqMPUnLTakiuBLrHWhvrkJHQtvhS",
  "key30": "2ph4mYx71n5xnVFLUWQiQHEbMFjbn8oC37NqoVb85vRH1pLsgrzhPGtnMknBp7B47AZqVhn4WuXjEnddSfKhHiBz",
  "key31": "2XNGBGLRZVT56RZphkYQYcKdCMXqVhhSUoUXK5A7Lx25YEujJvwV1wvNCdsC1sZnSe3ECxmqgr56eGr1GhAaSoU8",
  "key32": "2oMEfHBRgawUYMXP9mKzGzyZ4rMT4uwWhe1oS7fve3CnZ7NncbDQcnhbqHbkBuSLbPCdbXrb1fKLBPby7iPvTxJ5",
  "key33": "38rwMUP4FqKESddUXnSni3V7iThLCA5oo3qESVrPm7UtCPmudXzd4jx5nwLsmHdnJVDsuaeWgGLiABVrcHkhA4y5"
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
