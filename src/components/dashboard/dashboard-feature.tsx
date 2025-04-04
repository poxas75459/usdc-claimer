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
    "q8WKZd6ZNELFzWvu5cxZdARxHEgtewn6DXMC97xPCFd3S8hpWsCudEYcBMzjjotxetG2to9pew2fV2YwC2CszW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GHmTyG2xLY92wpihoo9d4xY68i7WnHLLzhTPaqNCoiWDWpdrdrQrdvvu4ysoCjgWpi5CK2boBsx6MDJKYuyLanK",
  "key1": "3xzmBanTT7FQT3TcHT13DAhonummyk5u2n66eK8hX1W5booKsr8o6UHAFS6bRfRnxz1rKP8t8Xu6cha5FMD86ma9",
  "key2": "5J63cTWC1iAFFUsMzgdoq96Jw4dUTwTCAFuMqWBL2YbVDTe3qEkGbjtVV12G3YoCjz9uRXepeSiQfNJ9AfssUwpw",
  "key3": "2ALmxFC8VvjS6oKNG42BMF7mTX8CickwU5bfeFQ7R5PxS62AVFT8hauAjYy4cWhXTwPWJLVdku2cmPyMCiFpsC3d",
  "key4": "RHzMj5n4vPLNxGewQ8E1gsvXCQzx5HnrcQgoCBKinwJNfyjFwqvR2SnqCUGLYwwPaM4TvkEWBKovjA1TEVEcDpC",
  "key5": "3SNRqNrFMfNrot5TYhV9u6CZYLVMPLPNPprW5ZNDQmDQAnAmFoBmGqC5XWSKfHW9V3AkjT7n2SJCc5bpf8rKUMSE",
  "key6": "4woz2s5uMXTQk8UBsVCxc2Q49yxzLUSa61scZvxWiHFgRzmWwGu8BhpFxBtMfYtde4iyQp5cMFJkFGA9BDmWqVGQ",
  "key7": "2gatUU8LP4rmHGqLfgmpiPgjQB6mu4boAmt5Gq3Kg2aSZcLUw8dPfAAEh9rczjF9SxBxw6rw2TtP2rRrbMW2vpuX",
  "key8": "Q2bUyY1NGj3AbW6SDLjEwCLi7GU1HmiY8A6hj6Kvb48foN7gddgETY5GudmZPxhg9TSdtRZaGuQkT2dexrMo1gH",
  "key9": "7YvV8AV8wE9DgcD6eaKMsDNuxRvmyzzRgbdythmy1kMtY5tb5c5eyRAahvHapUoAFritNTajQotrt2XQ9HqrHU4",
  "key10": "5A3RXbxP5UkaSnjsL4iXaq5gqTVbKkABDsTnB6nxFcAanCxm2cYM7V9L5j8Q8fVVjrXHCRB6NdSW25U97jkz4ifC",
  "key11": "P8meLivbcLW5WvRxexsJiEh8mf5F1QzhvbrQMhno2pjbVnWv3RdC25pfJhYFobF5nkpNB5NDi6UjdWVQW3GfTUq",
  "key12": "2SiQbW8SxGvhcyyV1hbqVYoDEgTFwBPJBf8yTe6fuBBN7HAiNqDuukx9F1sz4KRQKMKN36XYyvgnEQje3wVLpFgG",
  "key13": "4oRqtdD8SnJQuseuhkynmqMoLJEYE8TVFBg7g46DMd3roaAcqjRwoM3smnEtB8MfmaUSehnHiP4NRnPT447TUPJo",
  "key14": "NMFe4yq96N6Wqbu6vX2NTdD2NHvh9siojoEskvvd9fWA32mArrkit2BWpEeFCyLazRmPLGLpaboPSXMxmSE45V2",
  "key15": "2FcvDgAQhPUZJpcqibKPifioqDiNw2A8CQpdnVZwRcfWrtf6hZruPK9QnHWosC6SFnKSr1nsKnJF7hdimWoNzZ1d",
  "key16": "j13CWyPvnhD9XHkkzAthuzr8Cu5GA1NGpNNDq8MwRz2FrxZwUjboeHUKQx9srWKvT1M8XCtsQu4TuDou8Z5toFX",
  "key17": "2dNa8zfhssG3XjxwiXXGbut1dhaXQ7F5qjxaecirDJE92YJcjr5Pj4TFp1PyaKCQNhKiSuXvh6kf2c44HajDmKPk",
  "key18": "5wbyHF4Uerarqs2PxiQBRgavm3RmXvYPZrhq7VR4siSY2a2YUSL3vy8ovjKj3d8286dab3B3yW1spVPFYqQGeFPE",
  "key19": "61qRh2bP1ixdUgmg4atoTswrGjc56wfaa5c1Se8RHfoTzMZrTQzHWh1K5joRmqu5XbEmBoRpwTicNCgSi5bTUqKn",
  "key20": "5cgg6Som96rNkQRqnH2kZxvfYMpBnf8WnH4FRKt9uA2jd1T3eSQHwxstoYBFYGvPL26cskQ4s4fay1CX9AXGhwV",
  "key21": "4kxKj7AHAVEAQJV8SGX7HMHnfmPUU7XqTKezS6eCTAZMy1hx47ejUncjHvS9UrCzKByfgsBaBKZzT1wfH1J7FMa9",
  "key22": "65S5C4QPSPpRLMY4oxGwTUkULByYJzv84tDkdu8cAYw64fYT16BHp57JGTAwsB7oK86N3Qc7Y36gqrEdj82XbDwp",
  "key23": "5FSaGCpnaLicEXN7J1yCJie38QdPn6pVA9XhUBMjjWPFPC82viAy5DaxxMbhjq8KvLpLikbPJd5GhTbJp1ysPLHA",
  "key24": "YynMunJtGvj5cBTQ4HTKWCiqq8TYSwKGYZcpC9QwStcBztyjEXhmwLHL7dHye82G58hZX3GdKAo1NA9SSo8gUZD",
  "key25": "2FpokzYJLsKYz19kUWcBf9NMzAA7tP9m9bPa1zr2cpPeNrm8AbDjV3rwZk1qaXLdFKHjNHYatSR7y5jpFPTSiMHb",
  "key26": "5ndiCZkE5yLpfmHbwN5NtdBo4A65yvE3XfkF4GKQNghXpbY7fsVzR1Try95MyeqzoT9tkd1UqfTEvdf15N1AxrPz",
  "key27": "e8ES198GiuFskasBgqKAUqB7auMPsG515huanMTEMvJL3SvPoi5sujMzz6NdkF7f1VgxhwHD5N3ckBdbTzXjsXr",
  "key28": "3QzSefSNUrsLK6WEcsT8rX4XajUC8xCwxhFZkYeH3c6pscEozCErrAdpTPR1ykaKKSEUgikWjG5twMQ2BLK5pTT",
  "key29": "5ayiKjK11XKbdmFrR8pYSQpLmsTCc5XmKRjWyHEmcnvkqeNbktwnJroHxaQXcpD2xKLeB1GY8s25F2ephQQEEned",
  "key30": "3wEawcYKoJNudzBUkZqqBiQTFHkPe8sMtAmD9Has1njhE9FCsPkAWwo3ywtHnx1XmyaibxjZ2uMPovZgvtfXMb6W",
  "key31": "3xx1CZZ9xZVc9Psmk19csWs12bQPZEAvgVChqHX28PQeSJnv1VW81khTjZGfTmkUFh3iyZYGkCZZkbKTx13HFQFt",
  "key32": "LxDffuUrbjszwLp2mUx1b1okWGd3Y59N4A4Px2i2jkXXfyVSDC9Z3nuHS24YyoeHFa4zD51U5h17JvBVFCCudxQ",
  "key33": "2byHC2PzecLe1LMkVZZjpe4MCYVKyrpy5fGP9FeQK28tXSdEXQy4tJ79QusrZVQ1wVHQbQRK1hGYL8uG5obuPCqF",
  "key34": "kVEuJkK4DUqra1LzKSS7u8Bu5EsiBzKwh46LNcTJWjmsjmHNnKiryHhuZsKVcpE6gzTioPDWZNvRJEsLaTAftuZ",
  "key35": "3JumBSffA1Jv9k2ifHtgNMXHwfb7Eo18vpASQnDmmsFQmPvHyHtMo2zWAAQ2VPXkFfCZmavZdRPYLYRmxzJfg1Zh",
  "key36": "3k4UHPM3mmf6TsuBzH9tfYY8RMmhqhKH29R8g1YCBajVge4XCoS7cUPN3xvmgDgV9Ry5WYGWnPbC8TRoBmxenKW7",
  "key37": "46H4XK7QYUqcsnKZAinoxJ22UPMRY1XkZKd52UnLFpfGqvcNzf4H3LF5dv2AYYdJN2x7q4rQFg5teDQKvisdMwjS",
  "key38": "4K9gEbf1Ce3G8AaDPRk7agRii9f34MUhtiHBeq5CBT4tpU4iQGMVaBjjGKVH55qto6SzNocBjxmE6uzhGiRbZ6jD",
  "key39": "3xmLoztneFMqqH4FwgcX6jUKgtfuCAhdsif8L7gxzUiYWpaVSugmnEuga2gnqy7DXKmWEcqbq2RkZw1M2stHFfk2",
  "key40": "o3XScGHyNxEGQ7XmbSRXN8g7ZkVVhKLxefVf52uqafWmJw2edokvF5NkEWgBqMypCmJpqFK21WFggeMzdUvcheH",
  "key41": "4kyDembZXVACW7dLveVP9DJ8drp8dYerahTKnoy4yK4kbnbcJRndHXVMExjCjidpMReyw5FMiKqT2gtLDHV7Pw3w",
  "key42": "QeaGJ4gHW66zHwra3pCjyNkSLoE7ooAA1bUqHm7zA9sabM3LFX3NokMJXpAD2dapbBWY73y3WpwJonSRjNoQ9Uj",
  "key43": "t98ACqrUZ2QGdeKLk2ocJvFZFVLe3VSXadLyZgJ6jLkTMmZFLsy1h3F3fMyv76JKPgE22jqwdtHy1tjMkaMFXjh",
  "key44": "2TXm7Q92cA43vx7Saeu7fhu9BK9VJ1ZdxXA8ZgoV2VUXqant7xHaiXeJ7huExovuQQRiRkS58czi5Wo3Wc4fBtHW",
  "key45": "nTGHDgA4anPFwpaBswnNdvnGsJ1CuLxjj2H96EtHeyuCCFx54j5pqXJZT7jX46XHfZdTnqk84zHez9qN1DkRavA"
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
