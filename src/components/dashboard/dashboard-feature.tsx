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
    "2LftdaxJhmtujTde65pbDwvcVLKQcJZTfvft5da33AjTXUK764V9C4hyaRmok7nFLYHjPeEQ1bPYkJXg53e4Kp8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3swXGyCpRTYwSR5rAdhHCwcr1bqyhKqSBCjTngk5EdJEPmdaQ94CjkSW1CkqtycKgBCRdUqFk1q6nBsADTstMA2d",
  "key1": "3CmP2bpFwzAT8HYh4JbthdcVP7qhNHX98gXJZYXL7Nwg2PKBFSNdmTqBV67omCKcHrqW19NXmYtgv7VH5Cd1U6cc",
  "key2": "3F82Kz6bq8d8zMzkce27yFgfmWedfEKY6S2yXnJXCV3RHsaUhwRXGPLcoyhc8r2PoXc6g4FXGfsPvwXd1Tm5zv9p",
  "key3": "3yLqfyxBwmpPy8ENCXK1mvdLiif3Sr6jQgzJBXPFg6w1jfjhzbZBhJtmiSG9aFhLw2js8sZ2j1c8dJehmatxL43k",
  "key4": "3ETv2fa9zM6wg1aCN4fHeY2EVF4yBfjfmu5i6b4jCT1XKY12HFPUhy8Lp3sXYjHyP3VmEMkjWufv32Peu1TXGMi",
  "key5": "2vvpb1c7sVTUorDVS3QAyi1q4W1LRKSGndAa3ye9qmjdwvEEe1VbC4VwGbRqwcbSACt1BSqbR3dEEkm2284JrknU",
  "key6": "4oczejEo3oiPvrYMPCRWX45ibn7A14Xzvt4gahn6qFTZq8GQT4QMmJvAipW7KCw1tzyqZbAFUtPz3B1HEhJUc1LR",
  "key7": "mPUmSpCLo48m7zaa3fQUKzqLR6S2aRwBmgSJuX4wyQHyzwFpow2J5gX1GSpaBU6aVnrHS5DZsPWsQFbFGvrx5RA",
  "key8": "59HhQhUCuceysNCTwnz34dSarisDyqLwFLp91V4LjwQ6NaXaebV2KQFxEBXTcDHNNF8ePAej7eihxa1JwY6Fn1om",
  "key9": "63sUBfXwoip2JjuxjzPLtnnGoHwwBD5xfmYbG1KXddKrs87toWDV47a3a87R6Piu13yTdVjDt3HrufMGRcWPfoBN",
  "key10": "unhoSWKKds1kSPpjkQxj9iiRrRCUGrosAthS3L55JCKqDfMZFZ2DwKYVZrRAKjVBrTwg8n4MPnNY8qSPkGjm6tL",
  "key11": "3pBSr95VypRuYhDpDN8H1GCsCKoTo3ZKqm8fXnqgmWe3RicpCeK6ZANW7VZarnRC8XyCtEVJopDvLbqZDEQpCmq8",
  "key12": "4YGjvR379gzmTQ5Gzz5P3vjKnXe4iADi8MEne48NfMFNCjFagHrU2Pw29x5Ysn5P7ukGM9uyqmehYBHHhjXLwvps",
  "key13": "3bAHNpjKpQHGss1jvXFt6DiAMqE4GXYZCvuN4YWpnJQumngnJFh8hKc8Yk345s3miuGTeCBiUe54fmuxkK3DxFXW",
  "key14": "2ErCJwQPwZvk1qbWmn7CgpNpo2DQpeo6osYomRVYfiyyV1tmHAb5NXffhXBjeqPJdZDyxEqgGTo55UnVnkke3mLw",
  "key15": "5NxBRwbhkjREokaty3GQ8v4faE8aQt9WxNFtr7s43p6utbXVkANqSZGpy1nPeFaVg2xHXtFkCjcxNHGs8psrMxEE",
  "key16": "3fB1EnceuVzq6iq7ztdjC63sbjAdtA1ydWBoggAvCXTd5TPSexKwco2M1DLPStzwSKrh6HLyefNAbRL7xGpNkLAa",
  "key17": "84T8giKv2YHZyeXmhf4nm52S3SQTKULgV2bQtGXjbRFpWNp9bBde2BZbfiLYWyF3qemXXEja79kpaC3oJCJciVZ",
  "key18": "4A7kV6RdQwNaJRxmJgx54cRs8mNhqvfrcbWZYXgeERyqR1gWAeJLXNMTzSxizYVyV8G6dNbfkJcKNMBVU7NW65b9",
  "key19": "CjmFdxLuVQgHc8HDHGDAzys7EB7qwLpoop8yeWajgpmfVpyk4Fu3vPc4mUMkYEc2EHDZYqoTupEsjUJsCcmSxYK",
  "key20": "2pjKQBf4U8QA1enNgwTMPGkxyi9ZMuzMiBTy6Zhs5gvK6QvVZwVayh5Eabx9D8cXXVsq5vWeW9EtXdHiEQBsp9f9",
  "key21": "3oPT4skreTki55BeRJ2SGgqaUr3vo6GjFkfJT74nkakp2S8WPipb9RdmymHTbQSg63n5HahMjoJhRogp2HdB5GmG",
  "key22": "5iDkHtK3z1SWmRN6rnioBqJfHRQ1SQ4HYAdP2DMKZQrKAXPiGknPtRAxbgjNuvt2Fu8qMMiz6SfSa8iCWtue5XW",
  "key23": "62KwXRZBYApCoGvLNZw1Zp9eyHHjh9352Bm1JYaypunzr9YSm3HBSNxChkUxqzr3RMbRKHuQcp7HZYEC3KDGUczd",
  "key24": "3UyWGRAgdFHZRft1zZuyKRzjUsSfJ192sqSVUDZkadLhTuiFyFWaJGTquiN96L85zm8xpetYijBdNbaYeYmHjQp2",
  "key25": "9HEU42acXo3r6zwyUhy5Z6BjFGmMNHdgwbYM6JjgxNgMGPZwAPMEHSRX9DUiJSaqDTVbDxT8CxP1ZNiy3N9YfEw",
  "key26": "3s1PTszZVkz23jnYvyXsk3JVxtTvb6rTX7oyyeTeQhNjrX6urNv5Sx9zhUynfYyrLPJmDsKoF5s9wdf2wuNJRsiL",
  "key27": "4HbD3hgzDPF42MDiJp5ixVL83bLpQkLSq9KcWVC4y47zACVtURb1ydtBdqbARUHPVPLz2cTwezRTR6o9FtiDfmQ5",
  "key28": "2YbVaCfjugV6CLyhZm9z6oM3Q6sYFw7FYrF8m1Un15XoEmoLpZjqXiYkU3H65Eq948LpVTsSQ8mbFCckNutjd29E",
  "key29": "4DxaSeChxA8wgGupEexwCpFJznmiyuzk5UJabkYcKEdkVnTkwzz1c9VDaqjxxF3yA7qYbiE5L3CxNGvAWKcNZTkq",
  "key30": "2znDdP3VRumKBm461Qk1McrpxQmYTMGFCXRZcde2eTJiKLCV2bk9YNNxN1cyH6Nj3e9qvS79vhUrdJupYkCuJtYZ",
  "key31": "5xT9Y613eTg7YkKJDhwH7pcF9RtVu1spLbsFFZJLkjkmWAPpDLUzuFn9wwYht4batfk4uKZA9etSj1xJ3LTf5y1h",
  "key32": "2kahWJBoTYdn7B2h5K1wisKeN2bzGXts9CoD9NQ3ABRd2e83W5VXJfWKq4sTfkvrzRfrLb1oD2qVzscBszGnipsm",
  "key33": "2P2ipPK4AZBzUEQeaK5KnYbGF5sjiwtUqzB57JaUj7V8XiYRZdHeZKjWyLQ8eD1cKbUwuHQW7WCZsg6EmDBXFZUp",
  "key34": "2mxStaLpuRgUcn4siqAUf46mdf1FCzVSmtXe1VH3pk39d27fMJ2KG3ko7Gf5H1ZXSf4ekGv9EdkTBQxxEXGA4FDB",
  "key35": "62qcjrFPHVBDhWr8JnbFhNYUeJQQ3TWpmedEctws3xThSitkaPJbc8aVcDaghSP9eSaZY5KGVvxkVZVtQ3MEvRLi",
  "key36": "5EoTAoBY86UXNNf3MZg2zwGc8B2YCisiWS62UfcvfoNiztTwwtiwvMmWyszm2oHKCGb8APF9vMsEWkbk63iSKGaF",
  "key37": "QLYGd9KUKadhJPnjcdF9NjwdzAG9Fi2myFTNEQbaQnLeV5Fk9qBgDHdAw3vb5fHU1H8675JU2nRyFEsD5BLDtBp",
  "key38": "5bjFetJwzjCcZkVXmBNbHAtSbk4wvkahhUmfohLifmDAJw1dk41ShTP8mkr3x2gq9q3DtArYkCqgvF84VbxuhSBY",
  "key39": "wmuBneYNS7eUYNh1R62GCgamuTAV17tQcjZby58dgXa14DaaCZrLnNtxe5T6KC9b5ynaJtRod7dn8FBoV5TxJpp",
  "key40": "3YyFpdjbHeW6yx9fs5T7XnGhYHp2dQqskUVxyVKdK5CixEiBMNPea4zjeVxXFKRh7ykQ63bnNQgRL71rRsk6x5VH",
  "key41": "4t14jtKNnfLrZL5UjBYdYmg3g3iLNXyT69xJUNc7Nzd53eRXtHsgfc4U5FxNgM3P1kqTPemjDqMG2xQbSooqi5Hn",
  "key42": "61nNNUBByeT4qxrrcjuqxQ2cbzHGtiPEXfqb6wZZsaf7vyMfLCbwV5zz9M44L4BZ5qgK6PFUcsBC4HtEmc1nBMEX",
  "key43": "2xrMyn8GsuMVprxyJ5bC4w33z5yPmfmvN8rvFX97tFT8sAf7WcmfTSiXhuCaFUcy3dufEKTrooZJe5ViL8SUR4gQ",
  "key44": "pSqPLYcRQAHLhawkSUCpVxpvjcmFsCGBK6WXEsjNufhVoqTQbX9niNdD9NA4TqNYBRhGNaHVjHuYczeSKCYm7Bi",
  "key45": "4RNf4ibnBXhCgUhhMpunZCMay8zejzPPmTCpLoJYQk7tvUv8GgP5xZfFNvDEE7YRsoFsJrdU4oCARPQrBtSKQX9g",
  "key46": "57a1xnA37TJzVj1ueESpjn5tAH58rvJeDCpdPmniu3HSfkpiVSxWdNBkYFGhzHGzP1GcMFaEUqKj46L4Q6rozrbA",
  "key47": "4kE1hTvuThTwrrFxPP4XzPMXmRyN4sReoJbq8fZLbQqAZw7B5VnS36rs2aGqPrE5CoWXxyTDL9Gmu7Y7CxR71wpJ"
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
