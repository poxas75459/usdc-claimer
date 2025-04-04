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
    "3GNMNfBE7CfysKZSULCPYGNT1saf7ycqQJbwMGacxpy21b4iCyqCsGUkPMEuo5s1brRaabYvbXnr1f7xCTSkC6CE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59QM5x6UcDbiwyXYrTSeERwwUuCQ1UokEr8ThorZHB2qrN9U9sRCBHDYNqEzXnuRpLNFSuwNdhs9oSsJgKiHXr8F",
  "key1": "3AvbviY9uZsNR867tLgtt9p3TV1iyofWALN5cL4E1o2Q16C167Z8q3Rs6yjv25LcVdUutYn8S8WTGHQLAL6RtPVi",
  "key2": "4PuWEoivD6CmTih6ZbT73koyaoNR5mobB4Yz2uVXWHFhmE99mGQWYndbeUGGiv5cxgTHjo63mMGdTJCu42ZC2o41",
  "key3": "4yfyaTEGwWLtSs7DGRLmxMQVcEfW3Kv6BUMGT5bd7hqVnbCUPxL77uWAKMuFVu7XoXJcLNtbE7zU3QHKfjrSqLZR",
  "key4": "5oULJ6kovo8mfqWmfmhvE5DD47o6Y9E8TWzSGjPVwh1zoEu5KbCATnZQzYiHzEAB9CQshaZdAZrXMrKZyyenohdo",
  "key5": "4bwn2e7yantTTT5BjmfS6EPgGzoXrBWK3LtiP7td9agVTbdLEiG4z5zX3BHZk36VzBiPxZx2wdTbt8zohCwRQjx2",
  "key6": "1CCDaw56HWa6cyKxsCHTAKLPkNu58ahPCRePmS3ousxzCLXybvyufzfJZJiBKJXoPi4fyYBtZnuGBeNxVtjZh2A",
  "key7": "2km9JXH2W8btN9gPqbvAb3vKbrxzTDer3i2WAU1N8gNzMm92PghBue95re3iRzYeDzu3JG78mYv8XFM4gnze1TU9",
  "key8": "t1Ag775htUZvd64JKCCwiPJBQpAAsL1vvKdVvsbyUExJbn5pqf3F9VfNBJ134nuE1MbUotSF6yRmVHEPBrgTxVS",
  "key9": "3GzvtLDJ492A597w7r1McCapXSQ8Rr2h4Fiuhb3a8byqPESRmwQFoYCKY82X1aBqxiU73rxNMWuixmyiRB5sKpo5",
  "key10": "4awAz1iLzD8sGvHLUcqJHq8XR5MAJxGa3mTocJhhxe9vXcEqeGkz5Z9KLeGV24DiHxshxiRfVPA3vdLMc4NKigwp",
  "key11": "4zLvosJoDVS5weZxzvdPc9srJqcBZWqSyfhbi1JiudYuGB5YUr3yj7QYky9RJY92BBmQg9vLxDPxcAaCRtSwTgjz",
  "key12": "24TVHMPV6fmAYfPezTdBSHLSbLujUKCBjotFt8BZtCTkcZX3qDiqCwJNMWGqMTPQ9LFhk4vWsvKTceP6HUNwmMBT",
  "key13": "36uwHP3Ud5ReDpe5DRm28ymdBGxbc1LPF1PeL7FaJfP6ADsB4bz2KbFR1s8eHNg6fSxBk8rkYaZijj29mL4Uv9Bf",
  "key14": "2ERySanUBE1EGws6UYm5GNYYKdQr13e1mMDFt7NzMSPWAnasFLFH9W4FRhj19nUdHx7MrRkXSGLg96yYqoAeGmhg",
  "key15": "5F8A1WXsHvLdnoRHN4HbYiHMvxtytM8eYUfBdnYSYEiPeBDuHcL3xzECaERDEwdFbGwK8DzbyeqmhgXsjAK3ot6R",
  "key16": "5rCiSCXDeP4rkYVqJpxgmdXNd2Md18GDW8nWb9aq2g8NPYxreFPsevS8rhqhFksTs5zSqSBniYJXtRp8d5xdatjZ",
  "key17": "zM7zMqrXg84d5TPemPQxdjFb1urvGhHogRnWt9irSEfhGK65JHADkMcYNNQCwyGtDWW55bXZ1xTYW3urpghJfDw",
  "key18": "3KacsPgd9Lu6AkRXcMbfhf8dKnk3AyChXgdeiQL5oWKAYZLSQCTPNcjCmPbYUjEcUb73jCpZ9e3SG1kuhKT9yhB5",
  "key19": "2tqfjWhxe6FfigZxNVpcpkmn7fgZKuVkTSc5EWGaa246T8pFWUNVBcPdnrkcpXN6QpXn9pFtWvZ5i7rZuZiUcaEw",
  "key20": "DXKsKVZP2tM3zFfpS3f1wJTX1Eu7RFyatNqGEsa7m5xdr42vNpqHPfSG4qz5oxxYw9kHKFWpcPKQHVuVn8cgHFw",
  "key21": "4X6nnXCkpLCA4i41tw1vEG5F3cP1izmb7jK99XV1MHStdgssJFbqDAYuQgXsNrKbk8tXptgQbzFLdchP1sXPCfZ4",
  "key22": "2vBYGa7e3euRq98vou8C5PDewtD8dEH7bHEb5yo6RVg3gx1q4SwHfBai6YdceX8iHPWjtba7oG4T7DUdVWKPrmy",
  "key23": "66yVo6VSyZ9thyt6ZXYGdiUYMW5xtzjxfogGuSWozkZhuTgXZoMHvWzYjPMyy9TrAMxAnUYt62EQQj3Ti4zCWUxo",
  "key24": "3r6Xf8u5WDFR2pfe2NYQ8TKbbKxbdWQTJT4RKYYTYZncJYMQkHDg1183KMqxL1fo2smRjCkKhMqxWdQo1xgfB2ku",
  "key25": "4oCLDsQ3GerLD2DceYAmcnWeZ29fUxGVeAyqkVyD3HHdZRWgQkNuJKQo2dKeLno7HzqpfGeQ8p4TwVRCCkytJjZ5",
  "key26": "32YJVuQftDGNRa7fXJHi6r8Q1VHiLjnJGUkxfNqCfKjZ6bPEu1abd9y8kzVSfmST7J1mwqAyMNJE6AZvpPb68xPX",
  "key27": "5fsDpLGPYJLEDW48oJFnb8SmmJNAdUvNdnpeekcqwie5AvaQ8CJhoTPw1wa7zYYrMNTqMQy1J2v2GqBhaADMkzPJ",
  "key28": "5ZokoTXkxFSchF5raikGjyaestYHmk74wwrAfoKCAgSs7BUwo36GBFceHAmkhgLL73tViwdFhyf27Wot8F3qwByG",
  "key29": "3U3xPtqa7Dg534pBducqHF4mjEEw6m3PdFep7kW3vJTgjETmZzw6N33NiPHJhFbKjxvJpfQ2UVqnL6dYU6EpgYMt"
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
