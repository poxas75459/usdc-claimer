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
    "5mF1J6KFSma86K2hxUYYra5F72pLBod8wdNC7SycAF7FGcYTesAe79RNjeiaN6Bq9DHhPZAPi4x34AET9xPNDhsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EGBvqy9HvnVxUP9YkvRLqfpn3ueQNZSHC8zDpXH7iW4ouPgT4PukW7heFTXpt3hHdsSQAoJfpTKtVtE3n8FczEA",
  "key1": "uD6UVGG3W2gjkX24hxLfKgbNSc5E3mEFsTDPgDZkLVEedMreg7YhZhUS2wRFM2dSah2yqUNd3QLCRj7oHvMaRhh",
  "key2": "28sXcvAd3gzecLcFRFSyPEPA1fn2VNHeMq55So1KRfqF7AVD1RapdH8MoMZ9XaQ462K9axwFDNivMB92NPGtQXmM",
  "key3": "cNJ7FFT422gZtswMc9qE8KWaVZcyPQabWJwW3YMhCV5fRtd61voozXUB6WcmTgDp6jAm7DCPe6JCiaHdeJcvfTJ",
  "key4": "5a3oRC9G7jyGLYHgoRnbzMF4amBdbaQhbLRHrPcyMEjkWcF5VAvmB9nsyoBwy61Lp19iWcqX8LXcnjCZ5LEJgh4j",
  "key5": "2Vb1US5iArR7LCwYHKp7QKH7Zs7cZNtmeY6Shs8EtSoExBG6Gj2nghFkPtCuHP8aY5EEFTRP5jrfUDg73RbKDHAE",
  "key6": "1d9G3bdc8RPFQV2zEv8BtMmz5Ms3DqrFC21XbHigAXPPPTjjpwpZTKoCwxbK32WkvrgKD1bpgiziVzz7LuFYTMu",
  "key7": "5vK82RBtNVkdhXe6hpXRSCQeopVWLJLGiCDntPkzRR3FtG5YYKD58uGR14c9AhjXhBiqxnfAYrq35cBYqRWtUUYE",
  "key8": "35gKymG18wHQNtDCL1YXeC5TUZ93gAiWMpTtS29PdERtGQU98b3MFMwSeC31EpQ4t98R3hYCZeafmhgY8PMCiVpM",
  "key9": "3pXcerCEx8sSdXVVnqHsJyLo5PepKqfdzKXwHv1wSu8zGxEsPMDkrCMA5JYWCA9YCPmjakXpFCRpRUSbXnZMPyYX",
  "key10": "3hZtZLJEdzLVSW5yTqv483oyrFpanNojAegu3gefN43rLry6deTiE3TUvPCmPDc5XKZo8xpLfuKe5v1pkpJXjMDt",
  "key11": "m3QtWwwzby4noxeVhKY1HYuhaYtcNZbgvWKWv5E8C9SppuQEFmU1kVWzUjqREnoeZYoBmb777aRTS7LZU4hxd9j",
  "key12": "3Vzn8sQy4u7gwzdjVVqrZgsrJ2T35a7Y7eph2gvWQuPTwA8wnzugeyT4Fh1LDPBe6mFp2uSsTFzvgzpqrX7sHbi5",
  "key13": "5YDUbxvASvkayhCZsdxJsJFviE7c1mnW2ED9mvYKo4GujEhz3k9By1VxTvW8aC2ZKtcHkfRsSa3pADn3W5P27ZYV",
  "key14": "YXQThorWauJyv6TG7iv8bEBvLbRfYPss6z3CzkfQcC9P7FEi66RjX1jceTAUQdrCydYb5DnB3SRqfippNZoSgM3",
  "key15": "36rTfXq5V2sbQ5timuSBoT9xYz4SHgWQDRUKAYwShtby7ifM9DSyPECBQtyKk6Zhc9FhdBJJKMthCrdoJwzoJpyg",
  "key16": "22bP6Zntn6WKA3paE9TYUVCXpe6Aj9zSDUxqgGWK5RygPmQVsT5ueDpCmzaPP3Jtmbwp4vyh8NjMHeRyD9AeWjVj",
  "key17": "2zu9RRZvVL7LR5TcevmLikJd436XKLGpJHve5n9vtzipSJNtMdoMZ6imzNB6rbNyxBuj8KknawgUqFjQVc1nzr2X",
  "key18": "4Zn7UfUgz43o4W4d9GZx2TMzFGdX4jNwxMzGjrJy81nPcqdU6xGLhcQixS89jLa7cKMhQ9NupSbe2MmuavMaux4d",
  "key19": "2Amc3r6vqGTvPhWutmevNozQuYeMJ8526HN4Q96VXygN7EBKoe2iahD9H2sC1V6gKiDvvupKGc5Fv9MwwVSoepGA",
  "key20": "4BbsBGSSupj8wQoRkgGmidAbB8FawUK8WZWvzU9kRoNC39JjUVSiqM9FTXMzaMfEMtSsUTgHLscHDHwgunmeugkn",
  "key21": "3pqzZ7tAdGipj3F9zfF9jbb9Sm53NfsBa8WCeWwxYk74sdadq568EuQKjHuBwRpgJcJbUbj3R7QKhKT1TAUScfbZ",
  "key22": "2npJ8fKEcngoxhFXgc5RyDXMKpdobFNKaymivZVZA1m7QpBxUqDJq2yusaDHiGCMAVbt6QnHtieerD5xmCv4aSic",
  "key23": "3fyGUqpe6cd7FHcxNLt8CfHT62qionhwFFEGZjRtyMvuzVR1byc8dDLvV12sSj78VU6GLNtYeuKhhWKMfP7qJ5bV",
  "key24": "2FSkT8LTqk18nRr9B7kr88C5XSmXKAQ3tEh9npY2SAQXYdNpiufGhpHutNsmtrctMqofwYE1woG4zL3CafLeWoww",
  "key25": "F1fHxh95gXbzaXTVxcdnzSGUftV6f9uurV5cwgLyQE8AvK73EEgSUAHSzWjmFTziuopr6yhV7xSTGq7zTpQKvrc",
  "key26": "2c2GUCqim8MPW9GA38pdyFh5HCern8imhujjYw7RdmFpZebPyYhaKR2wXgwoA7oafhH7BGrytg74Uo4w3dZgeyVF",
  "key27": "4PdW2rM3nQgEQxXMASFsdUZ7dSW2TsWeHBCSgoHyExM8Vx2sFyt1G8Eopm9ts3sziJ8XqZghPXv8gQX9a7JTgvbL",
  "key28": "2QrPXudZvvwv9W45WgkLxLuSF7SYC9jUw2WpLcVeaQKtDZtQnidHFSygF32rcvhH7inTdGvG5NxykDW4K2qfeHGu",
  "key29": "3gkujKf49wcQr5rVooPkpDsqVUvGYmETZ7zEk4a3h9ka75BpZ5jj5cMMWyjeDAnWdC83p9Su53ytb8kKKbrnaoPX",
  "key30": "ND39w4Dh8WoQmprXkmAxTXwU5CsbMU3319AvnAxvQPwFZ2SLjiJ7VrVr5XMueXvajMLiyzQC3FWJGGzPT6CY7xu",
  "key31": "4aJWXiCJ1GeQwPbPjkCvfSTiZeUFMWq6X7DsNymJHB6CxNb6pXqPgA1YzbrtzMengrHGdjmjU5aEKszuWmXinudw",
  "key32": "YfWRas4A4Ubm7GTXWaNgxWzToEbRzAzzSjnDQJZwc8HTnx6D9N2t4rGbGcZVFF1pvijS8vMdd4YiHyHngG6vkrg",
  "key33": "5jKDKpGkzp3a8JbNZTW6fpA2iHmcqhnRqi1heRgrTyA4pfuppNcavD5FDS9nG3QeChk1jw5WtU6DbRKrXgEKjcQV",
  "key34": "2ouFYm81pPBCN5chYmmm8oJ4JUR5VmtQv111XJsFuvTLHqLoQijHMuXCf7Tw9DJjKFdwLqvCc7adh324cDh5KQqs",
  "key35": "2GvJEB56jcvCG4tSpHmzDcdiLE1v6fZTxynVDq5s81WgeN1qVsx9VGn63f5iRUd15cNxYovwVXMLE23NWThtPhzr",
  "key36": "5ijtMqBSRCEKxcf6sSnGAsBHmrYSzdQJ95YBGzqJ4yipcZzVkYFygyB5YRdJ5Xw1eUoVaSGkuYuhdVm4jE9VH3QB",
  "key37": "2E6mU2AEPYQJyTp7AnkcwLVFw3kXwk41Xdn8X8mszVbfuECqMbCi9CGPYXeVJywFzqnpDUBbwVDQi6tmJASgUy9C"
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
