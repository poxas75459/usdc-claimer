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
    "3zwbEyb1a8WfNJD8BTfrPFQ2qeQF5hhYJFxr2WW935LGj6P7qvZUaAtU4N1GN8R4UBVA7oXBqS4WqBbM1KV4KBhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V17JEDUcFj6RxnVXxFGSXhraxGXTERLhdupcbKseZ7zdP1TCWdg3oq8WhJkoWda64vVx8j6dKGWtknyAkUaTp9d",
  "key1": "jWQDuyJU59D2NAXs2TXpEXQy7nQUUCAEpnNYyE4GZeYUYUXUcYVTCv4MQgYmaEzhpgk3WbWZDGzny7zZ7BNsj7b",
  "key2": "2v6aCXYXQssbWjQTWhpBYT2tmwd2zGLz3oFvKEKswvCgLnVjESsaiM5dqKzA1YD99LBGfvmG458skbrhyojKZBVE",
  "key3": "3MQqq83RAioa2xio8y7Up4ZeeG4Spj6D9zxXqvofFMKwcBKvdwLhW5py1hitihCd1V5wzfwDjnMQkD1aQwmzGncs",
  "key4": "43dSrbumTPgRmDtYqGQ1Z9Wm7cr6HTqRnm4f1Hzpi9puwDUGwLy8c8aq9Enus4pbRczKCqiqgmKQEpNdGczkAEwa",
  "key5": "3ebjG17SxMfyoJTWtw9i3e8Ue9WT11fACtVHCv4TQzaL3FPujxPvSBZ1gA1U5oAsUZk7pZZbkXiF7uYpfNkReQE2",
  "key6": "5UaGMKoFmc3eWLtuL2WdfYwGJ1VababomFRzKSwxyGgKTp1XceMRQN7J7NZ41xrnszj61SxVHwkHysZVzrfmL8m3",
  "key7": "485BArBwdg2KJ1Jtw9SsSoCkD8stFjvw7wLmzLV8uQVk8zLuiCJsj5cSaKiCmE3omFcfSf8YdyjzwYR1wS9ytEd8",
  "key8": "4tZghPqJAbzv9iBsSkNpB4VySJzPHqyyppshnjHb5XAWDK5dmfnNyKgRPd6QVvFG66f9A8gDNiSARTnLgE6QeYXa",
  "key9": "3Xb1napwvzpeZhQjSeec8UR8WUpe8Nm3kcpHC68sdGGaDJgHiX4dm37FqMxXLadP9GnPJ8RfGXstgXv4HebRz1Bd",
  "key10": "4P74ozrqa7k4X8w3Pn2F5ALbYaGkeqQRHkrEY2yTZUSVjHB5HRL5ygYhtG5EXPFBtKf8WNBoBwjm4E7vyYFqYS7U",
  "key11": "2KrU9JmUgEpUH6Jbxe9MfYZvK6Rf1Cv3Nf5k6V62WzNgetZbqHoP7hHcCRzuRQs1eKS256jkxsUibJDk9fSdE4hL",
  "key12": "5bVFmDJUvbLk4jYnMZniqtmRa2864BTT1sCQDtkx55XJp4861E7658HDdtu3Wi719vjPuVwr4U77sHPH2XSbQfrD",
  "key13": "45nyuu1ajWRZGisVAiy2aZ6j5crrYUonHxvL1S2j8QjGWqKAKccGmhJpNRpjFkUEtuMZzrZZigxbhfc7jjpaVc4g",
  "key14": "4WHifT1Cp4mBfmHfE1tbBjAUJxiG8A45uvLxdMvu59vqUyAj3gJLLXLtWAAKZ2r94G6A34uUHqVGSfXcidF4JZx8",
  "key15": "4v4b76pKdQxBSe7mys7ixdCyWWbzp5RorWyWV397m2CronF5kKcPCaVLrRoKksxRob1aLRxn3V4R9ioeuVYuwMFV",
  "key16": "5exCwxSAJtg3TxgTLoe4xVdA7syr1MdH2xCZZuwp4HpTUUw2q67CBGAFaaUyW1sQhjVcDeg1uX8U3guzZMbyHyqS",
  "key17": "4Kx5Bay7gaDa5tsPXX5NmRGb9qy8aoAXYXmdHNtWnmsPwSmz2i62AfPShZTShV9NLkTRxzG7yH7AveTXqrCEtvQj",
  "key18": "zZ6uzuF5jUJDL6yBL5nS95GoQso4wTHWfgq7BCrvK9JL5zZkAyAgEwJRRyyECBMV77zxFun9h8oEXLpoZxYehaN",
  "key19": "d1M6eormkDMoKF4BUrUuRRyABvSYaTuoYRzmu5Fj1MpKZ2TZLM1L7Zv6ZRoBr8ySVUKfVHBVnZgZw9j8ZvxNRZC",
  "key20": "nvyZVLwjthitBCPDRHf85B6Zdt6wgzhR6RGmPZ8ebQ6szuftb9CQCdWXTa31xhXa9GHKbzzNU3wZp6LgSw3e7hG",
  "key21": "4u1s5HUpXpQcxE5upLVqvGJ5bHiWVwnXqXbCBm25i2nPX7xgrVkrap84v4BjkhxQSQYAJeovp3t2ZT63TqRYutEa",
  "key22": "3aAewXytJ1JNrz6kMnz9VMKWTJq8uQN7VXPptjt95Rxm3WXKbNAY57Hr42PK8tY24Rd6SdDFkPtAM5j4ZpKHKuZZ",
  "key23": "2DDsqn67F68cBorP3nDPbr1xiWtUTbmJivKgVZggxgNCVkjn94XtFyUfom2bWmUHK8mm8XFTNYqyVMcvTWCHY35X",
  "key24": "5JuEdRzmwNCoSD2DvU2C21dj5kNFUMQ5QBUyh2rhbTDkYUYBDXXbSd571EPtdziq9rHf2FJy5gtExP7eJtZp6Mhg",
  "key25": "4iEbZ84Q6ZpJSJpJipMG2tPePMUo7wZvrEzBCChVMiWxc5Y8h9XaEQsd4zPuPvxZHYxn8xj1Z9ibw41EPnR2dLLX",
  "key26": "4DugtP7nmydFpobdxBfGbHmXuR7zhhs9rT1BJvPcxtG9RXee7B67zT4j7dwYwjYZgngc67Ao1T7jVaz6mfbCaoGN",
  "key27": "DRFHaauLU4RFqY9aouhrRFwSyAtin6rYXMCgGpzznp95vhEaNwQWqJjj1JHf2RDYxHji2yPgzUmhzZFXEFaA8Ax",
  "key28": "24uYgaMHYgQc8h82BK6pVfsGfCXboNhAw5Sdpa1ggUcQ8u6wHCePM9TQfvC3nEgy4ZpovAv5yEd2iD4HwNdHGZq8",
  "key29": "3JhoNimX9HaY7iAPGGshQ6j3gGtGoVEnDoawdxhrbMvYB1hKk19tP8MBvo5a5Vm97HBgrStDjydnjnF5CHuVs4Ja",
  "key30": "4iHpykzKTsGNEAebEM2ewnnviRdVp71KAadfHdvgebspxn73QfaV2Z4soHxkeTbRaQSHQSDphRufBRamBtafmhRL"
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
