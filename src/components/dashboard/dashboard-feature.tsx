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
    "3cQ4eekoJjQMng5D692Kf8PzZhzVUX5DPgREta62QXhssFFFayHaZ2BmVruU3NYoMgX36CWFteZUe8LLkRgwPsBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y7mf2LkqvaZmEHCb2J56F2ktsX8ceJjWnAYq8PsdX3MLCmsqrQEordpzoR2A8hr8cAPxmnCzBaJHkmf7SeAvwpM",
  "key1": "5X4DFPUU1S1XXBg5Pce4kx5TgTftAddK2gw8TFXvN5Mk7UPjTey8pKT92JKrjYu5fSStPdMFgfhoPzTBU83qzEHS",
  "key2": "2HmTNMYWXGLELxM7pRyFHppibXcvNj2bxrrRiWKeZzbcW5uNfMasPtSoUjVSLncCZthFMabE2B3HuuEP8JPR9cip",
  "key3": "4e22EcgUPxb3uzmfCw2EAAfxn41yRF6Sdua9uYccBF4UBpQaAwHX2nN7Ln7mhu427dUW2qa1Bz9AnCVdpqAtKfVh",
  "key4": "2bT42m6ykCA5fuyDPjHx13EvwJg8yDMcQCqJXAJ5ezBk3k8n4UEQeU8JgTqVRjhLsRV7VkpuPcXsYNLikXvD9sFz",
  "key5": "tgQbgv5PaaLmxdkFai8wbUHFeyChBm46dDn367i69ghyPJ6qu2Pa79tL2o7umVcyXwqc6Kt8zr31aBFLG78yfgw",
  "key6": "4bxELr8hm2h1YYurG3PGEGSLjZFpKcvqEHds5sYAhu2DfmB1T1oho8uaJXWmvUm5FJyM1Eu8kWGeRNkNqioNp6dw",
  "key7": "2hMC6CEHtaA95TPGkJZirWB8E8k4uKR5qbQg4y8zzxXb1JxuFydfgZZfMb6PBQzqfoAuh3Y6oYQtqM6nbtndPyXb",
  "key8": "mRmA8BLguRs9sgQBWgCh3Nr3cKHcCuP8HQfVnLnUnRZyDfkt9tiqye76HcAftGwSskDEErFZMFdZsxr5jbHGFVx",
  "key9": "3FKExNZdXS7cUViM4w1JTTvt2vj3xAxkMYgKhjRj1FcGGEw6XNegkN3ADTcPnxVSaBgmHKgoBetDVCWCUQEvGKuh",
  "key10": "52Zg3PALn4gVVXgoxu6mS4RSe3hBqmmnw72oqhBAsz8cDUH7RLsH7VJtjwRRBtG1RL33tkQ8rJaiiuH4o4W1ct1S",
  "key11": "Zui7tzRmETysfRY2G1K9ZQryDWUXeENDAqhXJsjoW4cBk81dbPeup7ApGepoEjdmeW5Bc2F7iEQvhCTaev1mjY6",
  "key12": "5eKQVFFD4Xp9z265uhVVZP6gPD65Dt5W5hUPfjU2K8Ku7hP9A24uJ68HTGss1uFVTLH3tSpQA8VMoS1K2eErSMzB",
  "key13": "3MpwAE9jmBj7J3dbxJaUfj9Dgf5Ff2GCSTt7CdLDD1jjzV2RnjQ1PwEjRshQneMuRAmuqb1vxeswKTuWSWV7TCWH",
  "key14": "2RqRcUZ7cPiUC21XNZxmFEgFzSv5z1ns5fK5kngWpZG6LP1jCU4982dhU4u8JuYqF8AnrceAL2d66UzZAD54H9hr",
  "key15": "3bKPraLuRzcwCjFZguSw3BhPm57GErU5T7sib9CTvty3UTGY4KeGa1LHyQQn2X7Y5nLJLodbeJNi3XzJyb5Dm4yE",
  "key16": "5kCyEqtamXSW6koDvxiGkpA7QngPqcBmLbei5xbBrFbcUCKFvLLemCoPn3HCCtVPBJempvhW9nqcZ4GGt8m8EYVe",
  "key17": "ZVQJmppwWYyjqJr5z6H1SoZSXrJHCESXkR4jcaETQFgstck1hnSENCwpdSFxa3GUj7zNoej726GVcdz8cig8QMn",
  "key18": "2ThZCtRmsR6TMYeUXPzfKyXq52BcjaRVFtEBoqtYrpG81FBXTSssWSSsPDKzs8ejEVRB8ZDqERU2abAK9Wy3YL1y",
  "key19": "2iTEErec5o68fgSU8codNEF1R54vXArcBZkG1DBoJXXfCwaDkrQUj3CbqNQpxzrkWFt4D9KiGszTG2qQhQz3XMzP",
  "key20": "4K9z5VMSH8AxManuKFc4BSACVqvjCuubrJVQUbn4HBzFQhGXDCD3partiFe6sZ31GYqeFAgHSjmENQbm1s9o2Q1k",
  "key21": "3518jGmmxGzcmkWtYExFXHVqNBu1wKJC315vnbYjq4bWcq8AamNPGRjSsG1xVVQhjVUFhwQTW6y1kuQbCzud7bRa",
  "key22": "43itVrEn3gRsZhZ7ai7iZpE5DQ1GPMgAPXcDfeXpfuDWQM75ofEeLJUCUbZPPcurJitUXuEVrLpDgGPWavJkidPd",
  "key23": "3dy2R5HPHagqfjKHuSBWVGTrmZgNaSJDx4LUQL3fhJZ2ucUhLDchpKLG9tSvNZy952kSmf8LEDd4h4n6o3SEdErL",
  "key24": "4ti3EGfiRiobkT2Da2i2K8ifkWRmMTd4eSFWvo216hFXFm1owiYVyurSQ5yjjTqzd8SxvX6vR3zDZNnEcE8Pxe5J",
  "key25": "3gEodCzijSkSgkkPCiA49P8ZRmQp6egB8XrgZJxz1SSHcRtpRwwA4fSE8HDpyHYPxrbq2KSBFN9ZNH4h5AXhCpwG",
  "key26": "N11ie33NjPHFXAyyL9eda2eAmpyZ1cwcuSVfa9DCce2wrUtffKkMzorEZirR7dsmkq21vsKXW2uRd7ri4E33Xty",
  "key27": "5xUtXNPErWqGASmYzbFd8ZghLv77bGbwHCzLRFWaPeHfRX8fSgfDReEiLwuecfQG1Ptws86XN86ETmAcp189xC8m",
  "key28": "2PZmhV8q2sV7XgofMnVMB319C5hv2ZrHcnSoFRxcQMkPQfCohgraghDiJhCA9U1eGmbZbaqcnQwxCYVDePhZnWcd",
  "key29": "nQrPZg9VBpSz5LChcyGGvhATLdzPqBYu7PZE6NGUz2mMa6cYKByzTnR2161Z9U2Xp4G5tMfYAk2LFcMu1oXZqLq",
  "key30": "fxKgztxNKMho4pYzsLjN8ukkc5g5uLrrxuCYMf4nL81BiiCeNj6ph6CvGXTH7tdWVD9suCjBct85zoVpWfE1ys7",
  "key31": "4BzUTby8iJpRtwpxxZeXq3fp2uFtYyEUVn5Rt3RxvtQjtU9fTPVTfnJ7JHP14JavohMYkXEuQb84UwGinZ8ytxnH",
  "key32": "5gazNk8gJx8bZeDLSJyCmnZFw27XtahAjx5UwZdSPv9XF6wQPTiWiH8vfw33ke6gUn5bFYyKYbHBJTbsK3DfH9jo",
  "key33": "RfLJs8QDesHm4W8brwN7HsHg19qaQ7y2aRK5ndmgKTughU6jQRJitWTifgKfrzTzvdcU7SdmkS4zF1JNgSFkn49"
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
