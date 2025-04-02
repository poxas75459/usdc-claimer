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
    "4aVznpoJnFowPVKwTcMCYjRZ4NN8AjEugodRjcWVrnSLcHjKvCU7b1n2BPmCpzS7Tx4fkfy3QLLe4Bs7NkLGw7co"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26AHXes5ZwyBAJkkUP9JyZ35kPoJchkK6JRYpgF5eEeaVr4c5K85aKi1mkaQ5mUvukjDoHeT7MUXgiWFdpexTQWc",
  "key1": "53VYc9cv9JrJgUhwAfSqJKNpR7MSvs7toihBkpoFB4bVH4ezzsnuvtXjTHHC6Dgad6xgpkg9Y7nu5KgNZR6kjjNo",
  "key2": "5cyb4uHDVnkth7nchHH8VUeJ5zdcJ5g4ypSAz2CpC9WfSUyJRM8X7rMZbroA4ngj7vsBMfgnq3JttyHwzKWLULSJ",
  "key3": "3aMqf8jMai2P8x11Y5Vxfikx1cWWqDQMYgfeBM98AtHFJWxU7FMbeQw5qSoc8sL6ppgskuszHii6U5FCkmYz613m",
  "key4": "4pJ3bxkUvsHvhe5AzKw6QeuMawzFrt78wQLgcPi9VZMz4QiXazfdwWHHcwJyuW6M5pRFyMstQ3xmNWiWSxSg7Lf6",
  "key5": "2Q2D6cYqxsX3nwFV2KNafkqS3uoKcVmAMjKAU9jnbYhckeXg423BEcipWz9CN9qXpvaydhq91coMcN43PCAJWSC9",
  "key6": "gzfszQ3XMBTXvbRTZTchyBwuLib7ofHszT9AzHXei5ttjda8BENEx5pNKVa8WknX4ADL8ejcU19ygZeom7FsoET",
  "key7": "C2T76V68dUbQY8hozYTKL5svHS3rMQEJAptvQLfNprxSfi9FuAWarZFy2NaYet7YsYRFHVUX7qQNU3ggL6dUHEF",
  "key8": "52td3iPCin9Q3CAKvrUHeCFQtZ18qNuLnhxvyA92p5jvKAhufw2hWdWe8tqaiGc2VcMUNXyM9ccFCYwHbbpvFbxK",
  "key9": "Huh7ELP6YYxaY5gZ7pgh7v1xC9ubAg6qYeunBfh8Gp5QWPMgB7Bjn7WfHvyqY7QYbohv5CtVivp3BTF2Eq7xWaP",
  "key10": "JAEMGWyASaZmWiduv31L8LXxqNUieyfqN5wy8y8gJJecNrW2CUSUvQAJWvXB26bsqQkWVzSuL9GrnZJE4zufHVs",
  "key11": "vbV6R3fb3BZxSTGR8qvsHkuuq5oGoZ4gccjRZPd4h5YnwH69vV3towBqGxc4VwbenWfCoFJYPyB6TH2GuSvHySo",
  "key12": "4wXG7Z77wtVomhmJqotKwQ7Rjm4atquJ76b2Sxzgcd9Kdeu1miiCNsY4v2qZ5rTiYManhKQ7KD5vQDuGygSm7MBU",
  "key13": "2Na3mr4umJdDkaBbXsFZSYFwwyCBohQrJCr1VNm5qXmjHMRkrDWpJhFgpCSRaMiridE9KeSt3eRYjtVHNkS2Qi6H",
  "key14": "611t3LKrmNaEA3auaYsV3C6SxfwLxyJ43fWk2PsXGv3p1a3KshQPAMg5LtHTtVXHiRS1s9K8HzN1KxT1MdRvNFFn",
  "key15": "5DXexvRUGzaSw8eqWGPTJrNHziN6gJFBjvnUFgorj9MEroHDaT5NCsVHXJuTjwWPFue1PkMnEtLexGqx1mDgJD6P",
  "key16": "2Aqk53Bcq21ENhgMuA8ztUcc3rDdfvQ592htKGyYVkiTw1FZAssHPzzDfdDttoBgMYPTqygJGD9CRms9uPcFfvpC",
  "key17": "4G2gZE6bgFZs16WEUKiLJR9Qqh7fJJ8g5FZiudSRpzeRimexSCUoY6vaVqxk5ob4YMP3zQA7jiKZj6m5Nmbobp6k",
  "key18": "5n72vB7pvZcQ4Y4qnpJeKD2PokESsveTVVNosMvwssFQsYLPu9RBcimMxAcwVaCoDFHdavK9SUzRE9onRqDHmouL",
  "key19": "3NCSazjknc7qr1JPQVydd8gfCivjvkxGKgmZt7B4zBAPS3k3X9qDLGZZPxdZn22gJwF7Ao7NxLKBPd9rbco8T6uX",
  "key20": "4jufxQH4kFYooU9UDT98Ra5ej6jkFwAeRxnUBphBNJDyJ8EZ8e7WzbxJZxdudPSW9m3sfBBGHmtvgSZZvNhYkQ8x",
  "key21": "31z6izrJSKtfakbsXH3fJmWPVcH2oNNJkAQ8ccbExKq4UzhsJeF6rtQbD69f9QQwcWC1uNHkA4LecPaemiDBFSEz",
  "key22": "4zRSCYKzoQoAkPJ8khjcoXuQnimCzBRT51GKLqXaAV6LUFLvehQzAy7vmdczPe1oVQHUbuRS5z7d87kyiUhdHjkQ",
  "key23": "AfDxpcqpuSYGHPyEwJZGNxPb1AkCkmcyYgLUEgnXh7XDd7kky1KySeCGMxxHgbC4VnvLVMkZ6RsPy7Qhd3L1WQe",
  "key24": "fTjLCFkWSvBnJpJYGdygz1mDX4kc8yKKDCnbjZSS1xejAc8Q8YL1KGtdMRcrWw4T2usCgQshFj53uh5Vgk5BfmV",
  "key25": "2fZven4Ga2Ha4sSD8S83NzgCg1qJW8SsH9WAQVpNCDc5tmftFnUrHDAyijpPBUhg6kzhNtWPqzpZp1MxzVk5NkAx",
  "key26": "5yuAg6ZwboJ9iXUediMmGTjFCj9RJC7GCsEMRbLSraJa99NuAomgAnDwN4HiSMHtffLDzA2AvmuNc3WqucRbGaPE",
  "key27": "4xbVqH5EN9tNfxtuDNCajY422AhatGdLaoa4b6guCeibTgawvarBoZYNUf927HVyHf575RKPuvQ9PNphsKvdrhpF",
  "key28": "jLGtXLPfiMiZNTccJtdt2hkLfesVoPamoSnUDDvNmyVxRCY6ERtkBenasSZTxBuDF3RJn6E3vJJbu11dJs5n91N",
  "key29": "5J3DwXCmFiydxco3DJfs1ZW36pUb4c1yuQrn8PM2XoUnnH6Q2kYAtYxY24Wo1PDkGRB2maNe5xuiqA4UMMAnPDMC",
  "key30": "36peeNGFV8mDibzcH86BqjFpYJC54w6gp2NkEmSs2H6VGg4j7GEqu8r783VmNb5jQMS7q7HZ2U7Qw1Qe75a6JrRR",
  "key31": "4A5gqgEQKtJ3q6yFH1mQa5FwFXUM7te8oYiATbrqpKpz8RVUFfRrkG4u6cbwRRzrtJ9rBif9TC6cRsMaF3mNKtNS",
  "key32": "3mU3NrWywhepLuQZc6yh6evr9ReiHTAMUVLu6pcTcht49qWwxdLPTFhtzhKFMbUBUuBTzFaeBc2coPenGu1KCqnV",
  "key33": "3Ep8uQqSxpjuzwoSAiC6WdV9F35AUpECCyRJQqrg9GZUWetnQ8rfWs8v6gAiwfzC3PawHAXQXqEq32Y9Dn57427V",
  "key34": "3S3fqbhS2XehMFNRBJzr4VoJSxyUNxPmNZHBp2LPr5YtVeGDom4Yu7X7HjsQmQgtyhcipJWkXPReJ7YUpct32SvM",
  "key35": "5KtFDUUAXxxEbzF3QgSc5BocUKdKGhokqYibpQZotaCcLxs1zKvV4hfF39tDHVYNRSByBofnRjBNZRbphgnAixYT",
  "key36": "2mNYUAeAthRdyMNg1RnSCRJcuwcX4zWJwNpqsydipbqShs5j27BqRnBc3ucq3LineMA9FfokTchxi7kx3SbMP9vA",
  "key37": "48E9ZHsywgUEzkLdg9gcMUaMDT9ZQ1X1gRNo1jsqKc2WAyy8bBhyfeZPo2rGkv1a5qqTSr2XQ2o59nBdMa1kMHNq",
  "key38": "4YUqE8rdqJpNLQij5UGiUqStJN6HVuu41BBtsT9aLRB3K2rtCYdp63rgbQnLnDxqbctYxP6tqRPZTGpD1ZaundvJ",
  "key39": "52S1Y4iGAKu7vj8jA9SQBLQ692CniKjxDBjmPNV2ELLEX1hJhMySmTFrUvDJcH7fa3oiAsQcMope9mVFUhyTGyfu",
  "key40": "5iw8siXWk6CfbEGsGpKNAbbDge64wwRfMLgtyL2MF3jKGfrBoVbfc7NcbF4FChNr8E6N7io8td8DLW7YxK75kkXW"
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
