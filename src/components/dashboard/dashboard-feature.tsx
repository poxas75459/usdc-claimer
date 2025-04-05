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
    "4sB1a7EEibUNr8ghyUb2JBtwQ7qVo4r2ZVwjdNBCA9eZtn4MW6Ft8V9yrmZNy559JJDPGooBtWBjqK8BW37hty9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y6TQArCThvLkXwW9BytjuL3A3jRjptXGupt6NEWxaTdtxYNcQK5qYZkdjoCvd661xNTayjjz3wULwxhznvYFbUK",
  "key1": "3LFLzz7FCKdmVFCeEQkVqKh6ix9hh5vUjqAzvhzxAw4yM9cQeNtVfGYdo3cGYu9Rg7d7mViApXp4gP9PPtfr5xHr",
  "key2": "fJ6ztQmnHjJCeBt11bB8526YNiH4egevBzFRkbgxNYSiJPthr87WF4Kvm4VkDyVhRCwiZqFpg2Hhy8nygztDeMj",
  "key3": "2rKFz8GpRDzRnjW7g7KobsKCVKWdwRubDb9Wa6BnNFnXxZVvsd7JdFmU3iYr82LGL8fA1yVGDaKxzFrFvQtxcsMf",
  "key4": "2AkTfcFXppCEpjV3MCcVSk3AVrDTpkWYMB6m9GQeex42Q1uUYgRVxfGHhQSBKHvdSmjN81hyj5mEBqUywSEuNXM",
  "key5": "5d4LKdrSz4rEaFQy38adxHpm9ykPrJgV5AbZhTUUzrzm37mLvUYemDKda1rGu4vdksGfjSt4EAeXkNdBFLe9wB47",
  "key6": "VhvcD7bmVQ1FnrVoMUQ6FaPHzL9DEDi8SKYaT7fS5p4MvpqKbLxzZapzuhVESYFZM6tqSxbjfPVrS6T6CdpDoGy",
  "key7": "4qBjVUHNWdmCY4DqhrfEvnoX4ZCr4Z66GT8xCQdCizqGxXwJUcpTSjYZJMiitdeHTTfHCzjZvqqhNKFZypLtXerB",
  "key8": "3fHpmF8viP9Ljbj6LXfM5pFD7u4uSece6vkNJcmwoS5eD9XYPvQDgTtBHvkbb3oU3GFxR77dDjDSqKcu36T94uy9",
  "key9": "4ez5PbB9HuHHEpRFJhGGELqkkJhCYWGkxBCjHTPsFpMTMzDKHP88NnkyQEAnz6AXRqeDxyGJG9ZhYJdbETxLm3H1",
  "key10": "5eEmpA7fU5YXdcRwmKTgsdZtxuFyqRvhbbU45bJ5xtuscn8V5eQmCL7HyAvvWtRCTGDLfbttaNeac69DQbwEiBfc",
  "key11": "3a5y1gH2eDfx51Z5rCNDNwu9o7cqp2MR4VTmFCcRro8CmhCsm48AKjbT7mXJ8YcmSj3NWZoQb3brbHHfbrGjdrVo",
  "key12": "5hZFhWUQqDyMTTq85heahNNPiiJPHysAVsVLev9VGhV7Jcfkii2BSRawYsGhjKT4PHX6Ra4GtwWRui3MJa1JrnZd",
  "key13": "rjeCKKUdLoJ56CzG64Bx2wR9yPJ5rUyWEc2Wd9aK2Ti2tumfCmbFuvCt7EdzYm5RoShrDPwjPKUJ3ucxyrNZDLS",
  "key14": "4DVn5xDiFaGWLuMnd2iAD53TPUquamQzPyCj4SS4VXf6kNbKMX7csT9KsMhGfHxzxTpYyLY29dpLY5PT8KpS4Ykd",
  "key15": "Mku9k6MYGhktXdPLTWFX9CApVxsxzsXCgNBk5qXhfG9Pse5K7Yg8E8CykXzTfNVtqZNFQc1sNYxdRhtWNixp68L",
  "key16": "45997UWfsMaai39c9smniaagkb7RgMKvr3Q6XGqxtsCSYxVqAVNHiP6hLbyUUUHpwypBGmsmTUnxtdVYAV5zYtFF",
  "key17": "48mJ9BEPSbnBQDyqAQedwTP7UR3sbEj3RuGPZ7SivbNvz9M3vvF72KxFqfpNSc4oBNrQtmiZXgRVAvmhfQSMnoyu",
  "key18": "Hrx3P1a3Z5ZRd4SGNFoSb4XN1sLELEzMe9PZUt1YVS4zCZFtpYf51kfKGfSaHw9Rzd7jNQvoGTumQLsLQmjup4p",
  "key19": "24TrkHtx8nVVZ8wf7m7Sas8pHCknBYFBPAg3r7MDEuX1QHXGvTwj81kubPxukf6MAEBVtNNax63Z1S2Fvvh1FEsM",
  "key20": "22TEcbEMzBFDd3FctRyD5PHgspwgT3HcT3WzQi3rYPrYtVXUNe8e9fTyjwBrMDHGnbX1iVELAUnXuTKsisurip3j",
  "key21": "3y33wH6qxM7VCrWAUKRz3H5eeJYBaqXfvosf2EC5QvQ5EqzTSA5b6yuU9mCJAYhkTmEznYq1itTafxKz5DXV78q9",
  "key22": "47yY3nobdryGD5n3rfnhMwBFAvngSHQb3mhZcYasW45kqtdJo2QEXnkthRJZXqqTggrdi3j3rm7681KVQ5NsgWEV",
  "key23": "3qvoDDn3Kr5XkimGSMR9JgCUxGbj4TyrMaU8hTFQgKZ96pi9VEkWQgXgXiajJKvThWfFcox6J2kdH2LeqYJ7rLta",
  "key24": "4z6SkmcRzc4zmgUYtmjYpMmxKQzLfvDrVo8DaZNBF4JjsWNkW9XyoCaLU1FXEBKbGak2FuhZfvng6j82fSFsgzRy",
  "key25": "3QhWsHW3dQskuosiKYbjhqaQaZTA6UEkzQvCDyeYa9WcQUcfrCAZZ7KgiFrU8wievkQUoYo5FygexUeafTBFRGdV",
  "key26": "3tYP5JTh5SkdLtPLmvWxPPzqZzt4vMkPCoDoi9kBuuPvMdMvxupMazH9daymJyzYkjk1WMX4514XDf3o7M22CKgy",
  "key27": "2P2QhBytG34R94b8iFiELo8jeK9Md4YUVCGBHfHm6CFHRFvxN8eoEBz2z1q17ryHWrBN6hFymnc2dwAgJRK317Uj",
  "key28": "YYMFCLb5aMVqewgBUp719JToRmv7XG2hogZk91u4AEyndPSy9pjJNaeR65nnd4Byu491xPXhZwr5m1PmNCW77tu",
  "key29": "3xsHi7L1CbhKJMeRizXMHooY2c2oxU4y1YckxqJ2ZRVg3eg5KjzSwxo3rDcqUhgHeJxUxJMSZynFGkB41hBk1vPQ",
  "key30": "2gXzHs5EXz3FB7gNBRsTucQshom7oUFza2n5635METmQHc58U9au8ximipPfkfbyZPJeGsFYbuZNR4x9hjxwXpup",
  "key31": "5PKCnztVGGvQsuoScDjn1QaTwrjxYYDezo8LcXvCPWTHzMnHmBarGnLwhyt7ZjJDirSX5t3u9RLycDhyGg5eC4sM",
  "key32": "mVZpKYp3DaBrsN6GaHHTsp5nRNUaVAmxr8uadHSaX4sbjEJZC2acM4q1rYyZHDqtZRWBzPjBoDmdFaNQ1PmcPR3",
  "key33": "3AgRcwHmtpRo7TSnBbxcVhMhgw9CqZnni8wPd8oySKWUi7zCpHdXb7qdK4xk2BczPdZEBSwNe1y7EMaXHkLWK3b1",
  "key34": "129D2Mghz8sPAVkzgEYn43iUk7DXbYBcvwawonXfPxTQdNyJ7o9BpSHFhLYMWFcfzP8ePB44KUmBkwjXv71raRtG",
  "key35": "233Hdoo7VJ2ra7XmocMZK8Qeb4mch1HJ6cXSjtL5T9gygS8C4ywVVNZNQouSKAtRL84gjNAz1QC4EGamHv64BrPD",
  "key36": "26VK63hYmVUyiaNbutGy2NLmqsFWckETum611AwaNELJC4fx1rvRdngYasy955bA8LvnvTXVqFxRYTw1Z2pwNAch",
  "key37": "2SEXpbpqAraXjpVfkQDFH7Mx7PMF2LsVmzfhWc33UJ8dn4YkHX4sfad27jpeRZA1iKCcqdvKgfTm8VDrpdTM2gr"
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
