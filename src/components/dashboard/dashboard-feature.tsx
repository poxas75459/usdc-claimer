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
    "4n3C3SgohWeuAkL4qnQZ2nANYkkfG3MVPMV6gbNV6ZMByZepYaiKmZvaFrywNpsFmnt4Yq22bk23oyL3DvuzeyrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ughpxgxxQuc93kMhWCteYjUtnqTL8gvpUkEm8YEZEj8dq8xE9nFps4NtPFYt3jEwnyDWvC3ihn9rRyt7XN9mtNH",
  "key1": "2LG3Fr7TebBtpb3wCdkzSGtqhw5M5Z3bUUu7MhLyDPTtt4mQVV3MedKuH1tQGDmWpMCiR6ieW8KWSdLJBhvLbTY6",
  "key2": "3jCC5xW3mDL6yjSWEyMpsBxKVzfyyvPhfmPTVAYbWHvN13RNq5Mx67YiwsuhSCy349WpQ5ptbZA3hy6w456iXNbB",
  "key3": "bkybxrqUdsEBFHrjaGJ41vDEiMLnLehpkdGdDiHUTV9xJbweFoEA2iYWwL6hjyNNsBoEywQ9tLSpnDAhSnDEV1z",
  "key4": "2FtWcbnDp6n3r2gy1SfqHpM6rcWtoCfWjjrpQMs7CqT112N5FX6uuXFMAfwLuFnFJL7aDqhyqcxR6ugDAvM6yfiP",
  "key5": "3e7rRZmoHDWXoaVXiceRCMSnP8ezk3RZh6CTb3Y428cUsciqK6h3TsGorxP6ZK5UddFTTJ7xvvHeebr3XZW5WEJs",
  "key6": "4F9cE6xCutovs2CBY2j1wfF3tuEhWt4qGWtbdq9M7tdiYubx7foQAtbxpNnnhKf52WvkbzWJwXUWER57B4T1hujz",
  "key7": "44TFU6JrVtKCCVNqLVKqa92ja4szSXQ7RVPMU4zvVntPv2ophz78tL5ptNTjNXqXX3zEjtHsLKkSP32hZC8trSB1",
  "key8": "2cGUqgr17muGkEFSiGt5KmLjKu6E7vAR3ofFuEQB3JKGPpF4dSMarAbqxgKqha96cp9TETTzak53YWgPkkpnLiUm",
  "key9": "5V5wQunwSR9p6d1BkDZQRU79fPhVJurfKZnRdGb5d82rFxmaxMNBcVUUw83BS9MDYRxYKK9NytdwWtdV9MDAHiPr",
  "key10": "qcxTfnYCxfr7HZDuX8N5eLAEjxtxhKwE1C4bB8Lm8nEKjKBpkVaTYhyn2vvMBfpwBAqH9ZrM9A7ViES41t3BtUv",
  "key11": "4ziUYuR1DFqKWQFfVsDb6v8gKwpm3LrVrm9yF4WJhPnJgPxCwttDvYsncvSFg12oCFkgyeV5pu9ACdq4kP4vsmfS",
  "key12": "2iXA1zzLqUHPUfbAEcFKWHnwHK2X3hphz8bCVKrEwZancHAVRCekTAjtEbDBp8UduN6ayd8BQ416x6un6A67fedi",
  "key13": "2qHVF3ZndADgJ9atfWfouL3wadEZR3AeocgVcQZyE2XUPMFi92PCdFw6NZ6ydpjfqkWaKZ4VTM28fEfbbJ8QUbo4",
  "key14": "42AruE6SLfrRCYzj9y9umiN59fkFhUQWCV3WsQChm2vn2r7yxqNNb8MxWksjwAJQMfKUh5iYRXyDU3gKqmDKbswF",
  "key15": "5uxMenbKTAvDhzGcHAjk6mxSXEjiYmGHuBHZgzA4ViNiGMoehxpcnXpanxUX18XReQusdPmMWsWnUhnhPzaiU6Ee",
  "key16": "bVrrB8kTeuYSg7N2u2Ma8C4cjHL2F5aeS1xzMB2f3jSRR5yGcS61ZgHmSwHZbBk8hkT9u65RwWqbkvGdV9x4Cfj",
  "key17": "3QYSVTxnx4e5fCAwdyttdtANRWiX3GGq7ARz79dDpTPqxVLRpnwUhsfNEMiEeY3kubYaUqHUfpYPH9Zz1LVt6N4a",
  "key18": "2W6BmjGEu8kRqY1akbczUQQC8GzDnwT3KUgXjA97d1gLqhzHZkxM8YkjRNioNQ6nhu3Q9Hjz6ER1nuHsB4K9tWKK",
  "key19": "5F2zSn9PbL4PN2zHd2U2PRoQ6JW2U9ubS3ZeVrgaW9AB7A7MHYGBp6C4VuS6hupSVns6i6Mey9AqK9NmKy2NJJfi",
  "key20": "3evxPJjLSs9NNe3viDbKMnDCMxXEuJuuq1KAkbet8YZBXi97maM19xtMjaMmHYSrpSFZNk4xqEBZDiC4WX2WRM6s",
  "key21": "yALf1wPtCkUX9uwKbAHNyFR4461WeHSfpK8APkXgWoBU7Z2TF3NMsJSZFT7SL3qCjnqbmZyqSboLArShLvyB3id",
  "key22": "38nB8wRoaqSt6fKA3fKrdg24BHwCsBaRcc7YCkoRKzr16NqeoNzgo57MXtye4mmFhAoxcKMPKGEbdcFeBPPxkfM5",
  "key23": "3wedCyKbGeDke8xA2ngprQbyhYD6DAD4EwRAHjV4e58eCzGYhDWV7wn8tEuZ6HD4xCYnnMyZMakF3VHVcUbWE9xL",
  "key24": "3eJE41eWRdGGCLrLsNRjt4hTmS7P8FdtxKgGDbHEAfsqLC9uBSrc2EuWDoBAbekDQjmTWhXDc6D5sRQynp4nUW9c",
  "key25": "3t5hxWB5Q4DzPC7ixA7u1zUsZ8zYVHi4dcWd8PaiYpU8d7NRGAH9dCyVFr59Tb9H1N9bCwEz7vULUT8vHpMFyiEr",
  "key26": "vZ7Y9wQfwTPVDi9YfNRvEu3ogHxMqVXddDU5FVa7sRsVtQHgFzVD2ihZAUqamftW42dmB67QW8Q2c9DEJ5hVwfA",
  "key27": "vUer8tnAWyXXorcMMin8jHmYeyUsc7NeERUvfsmuVTaq2LyEqFzQiHLRDrsTApRZHdzRssUZCdVjq32WJa6obyM",
  "key28": "2jVNyEcqV3U7DR4Ki2MqRoEGNAkALxqWi746hGDS5QS1ZwYFE6mqjg7hx4HUpXn4AxobbsuAX2R2t3mqve2XiopU",
  "key29": "29jVoUUKuJxBHPVzw8bu5PY7ckqyVrW9bfZXq3CNZ1BVpBu2JJ1DgVSbYUwrPNcaayXxseqxvmWgvqHJ2JV8pqSF",
  "key30": "papUiaAjoJ7MHohJbNPuQExG5abXAcA5hZJ9mHNb2ykijDyKEyy7WXnYLLWr7iDQxKiYRZviEuxqTdj86UqRHGF",
  "key31": "5BTmvNNYjL8LELxoDhZWrUbDiw9NMXUDmf6YPR24p9HWxbiG14LuC2ReyWp3egBfnVvtvZyV72J41UyC6nX2kM2m",
  "key32": "5cWoJZscT6vp2LW6MVaSmAVdbRwscfAzSWVnp2awkBPxSuwpnaQssEGWfVmTewQSFV5kCwLxQr4Rhd1PXvm89tRe",
  "key33": "2ygFwrSp7ewNSi74NMcBgZUzqvZmSLYF6VoChbJgUoKq47J7n5YK51kkwCK4UcHP2TaPDyTS1PSrKyszoRMBbRtq",
  "key34": "ZseY1PkW7CMJxa2MdbdFBcA22TXxeearGatdjsFi3GrFJqEmFE6gCXLqUURnaQugDArE6skL9NMAVn5ysaTdURS",
  "key35": "5B6JcV8P7uDMash5BFWTqMWENVuPW3dbMt6whgdHzHLoicY2HfcRe5391eBwdzR8nr4j5Qt7qtUv9fxu4qzZQ5Xa",
  "key36": "YZXGD9bw93M6xyfE8oiCSaZj83kpJ2NiarzYdPsWU7p3RRsQ3EE58bJFR5C18Nx4Nr88zcLS22vueXViSHEVeH4",
  "key37": "RubozjJ7Ffr7R8jjthN6gpHyP45bH49UX3TUJZCD5kfRQdRhPoYCVpVc4sAGdi7AYgosQhqfoqvVuTMhCrTdrqv"
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
