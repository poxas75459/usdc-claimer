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
    "3oQoftmnyBUStiWu8iEJhzY2syE2sQsSQHj29qyD6NVCRphRMbYhN435dDvwwR5SPPDMga6sq4cTQcGz9kxzXv2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tVLgWRQWDeRAkTusSE6b4PLdTFv7akrpxDJHZ4DatqG66ASeohqQSnR5HXFWk6N2ETFZn7uEb95QgHzaxLGNDMN",
  "key1": "4sXgqy5rKkaoWa5GDuwR4PqQUZZocaBdSjPp142THHkQhE6XWUJsDAtc4CGZM9hosHDngt9Zdjed2fWh2SbrYhM3",
  "key2": "3VcQJ7uJYMLnB8khisKAzrnLgFRRd6KpY1dssLvdaooe2gtrUnav5Jo6ciBsgR9tpMW9RvtKWKKTDL5TwYvVB6q4",
  "key3": "eGLoPq5VDFaywuDbrCpjiPDaiFeTT2hZmVb75HWFiTTQA6RrKxX1XdeExLJGPhoHAR5JVir6GT4X7MqyPnZ1FNL",
  "key4": "4S9QjmE26ChPeV4ECpthN6cWAgLQPBv8URW3uuqwHAuV6AJFob9Xz9t5Aba8cKqrRJSTHY2SYmyGro95QF65ENid",
  "key5": "cchhdYcE6fNZZ71VLqpLibShgXDZWv1yfNqj8wV9yf5kufcoi1jNTsXr9eAS4eJkFq5iZe2PmFvVovQWxMDoVJb",
  "key6": "59qL6gZxjZ4FwGYWBgtGzAwGrk2heGLaVK4Vhpq5RCBRimefbs2E3ctf79Di9crMhq3N7ZM3ed47urh5nebFcQXG",
  "key7": "528xpzFfRJRp7bHEBV3mbCQ49B6y84rhU6tviXEJZzEhiz2coiJxxKTTVvsXkeVz5nABfc1YMszt7TnV9NcGjRfD",
  "key8": "firNaiT9X5XVdUeayZdSrRHnfMmEFVxTqEDCcdCHdtbxHJQiuu5ub8vrDVAY5QgisJWsnncMtxjtG5A1A5qGrJP",
  "key9": "5hSYuzrWcSRg8KaQFATZ7m66oFTwzN9YtmDeaMfZshyKBMsTfCQEApjabeq6QuiZ724DguxGLwNXwYcwEgD9yMnR",
  "key10": "qopBUSWU8Wsd1umVxa6guEaUP8dqVgw2egAA1SPQGwPPnxpVhW5QNW9HSS1duiHBB6kYFhXzYMXZcNncV5ePXSh",
  "key11": "4YGu4RdtrNMjjAj9oXsdwnD9fVZ1NPaE8nuGb3DZ4RFTXdcgqUs1FWhbhfnRHfE2Gpfe1R4ZVMbYVTNZoXR5eeXn",
  "key12": "3u7CA3JaxAjyBswwd7iGaKAmZQKG6sRZi6HD4HgN7SoFEfsqqrhs9kwEx3SXEiZS23vem7qLyVg6uFPXsK7fHLPp",
  "key13": "5gfCeiAR6pNke3cfgX9ALmqvgn3mVKttPkdJo4kd45TKAahXxj3j5rxQvV3kFgziyc43jdmgguw35MmMf69C4XkG",
  "key14": "4oGNudyFFsvEcxSBoEJ8kdnwRFEXXwS1oNsFhfsDMwEimmndAPSBPdioLRivceeVgswc6fTcSgMkKvyeKEwV1ZRP",
  "key15": "4Sw5XFFAvfKDkbFm2N4yWB3ndgbCW1D7m5zZtzMRVphf1HmaY9qLiKABw5JVZWnikoQoAXvXhgPjVqxsQjvcY51h",
  "key16": "3RHCZMs4Ei8UmxwbmqyKV8YNG4KjjFd9L1kyrpJAKBoXA4LvRY1A8hsnLWrG1VQzHwRfhhyXyh8xKQhPLt2jAUri",
  "key17": "4V4bdjLaMbGzssXqTMobjmCXiSWVbVWCCvPNmrSnjqcWgP3uwoy9VNSD3yGBhN5cWSx8DvURrQybSrdqHo9Hv2RZ",
  "key18": "56WbA4D6MVsZLrs9dnK2oztCryfJUsQacS1c3hH8pqD6hv3mXQDMvx7GKjp4aKVca3yCD6Lpy8eR2gnjiRr8F2bM",
  "key19": "25cLP1EPxQbJcjS9F8EBPJ7uNgJmoGfyBbQre9hiUXJHECmUHJJq6izZVf1AMNJi96p5CUJEWPUEQBbvGV5NB8mK",
  "key20": "4DqBa9EbwQNnzxZYmw64cKYSVggiQvoiqLro5vkow4sP5L364jREvUdB8TpVRDWb97Kx5o88mv84AByHhHJt4Pb1",
  "key21": "27JPybaG9LqE4LoCqD4hMcHNdGQtKALL61RSg4Yo3PXcHeu5i7zHf2Jof64kaHdZFYUy3XpL1da2NpuKnWs78XMA",
  "key22": "3v9pLefTZDapk2MC8gn4Ga7XbmPgDtfMf1oNGEapZjUGBATH8ugZFqFWtXegoauPj18d7fyK5AEKC6EDTx53BsGv",
  "key23": "26nurBUHvsHd1pexMTjZmShGkGwqSKPEWMne6zdF6F61dbUzggPcAJ7K894VjPG6HkhL3tb7sjf7E8WkdxXfGp9G",
  "key24": "5S6c53eXkX2BBKNEmwyYxHD7Z59qvt3cLcJbgB6YLSBFLTKhm6LSPJPaVYgWuk3n2kjLpEo3fNxW2oRsW9jP8kL8",
  "key25": "5UgWzSzQeP7Hssmh3uc3UtsPtwxCKaEtanrLeXkV1fhcuVbe1LJ9z3xvbaYSqvmQa9MSKQsa68Pk3H6Rt87B9Vf8",
  "key26": "3AHQ6EQTdhdHAdnbxkgTcP1dqY8HYLYTwgf9UwymQVQQ9MQS9WLxBep7BXRAS36qCCk7U93iKFfr1vMy8AVw69Et",
  "key27": "67qEQUQQ1ZgGikmCCP2ByjWRUKSydXhC4p7rhcufF5GNVYTNZK1xbZBsMzcyabiDiDo9TtfUZ3m6xmYgaMi8tmhu",
  "key28": "289cDJiYS5g6cN36RudbhAAfKPxufPyKC2CSzFN2M542eXck7453mpvqNLRkLJaCpF33B3K8dCaWY72bB2ubut6o",
  "key29": "ZfjnFAwBvds9hiQFiUxxfeeYnXK1jyc8stKcBufhStPWZ8Nhy6cteLCsJ3G4PGYTYUZJRmQXDBZdxE6oS1FnafS",
  "key30": "2tGjQhW96BUAzFzYm7qttmp1nNWA376VJDNtB1tybknNrsGChRLywaGLvgmgtxEnExXVJcXZPaPGhsv1Gm51Rdj2"
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
