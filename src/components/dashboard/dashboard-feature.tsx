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
    "5hnrNZBMYYDnrqv4RLCSrreKD3Cbfm3kv2NLREEg9aH5nwpSu3kYH24c1dzw9RLJQPbSjVseu82xgS1W6dz2sNXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Gu4VFdGgBAq3QiFZX6UxKAeqJDQRFoWoMAA43cSgfEL6XWcynW3xqNR84ZMbJhJrNQfAirtsNCtvtjdwfwJpCi",
  "key1": "32K2nFDNod7DqyPnbPo83hD3ut41QNr31wA2oxcGJUL7HdyoBjM5WVqpbJhapHpcdJeyr7zweht3g4odWAzUhrwm",
  "key2": "5e84SqhgDkTeZoSoCuwvi5QuFVMREtbeakN9tyvr3Tuej4XVXTutUXe85qcbR2QQskNKbmbQRhUBT5nVue6ZU7nT",
  "key3": "5QFrwKj1mz7D5TEHnegr1NqQiXD3VdsyYJtRA6SAApR4G2nkqNofQp2FAHUjb1G5bWVHJKwWRHN8SL8DLeBa5hoU",
  "key4": "3xicwqi3T8y6asxSCGk1Mqi8tHfNrTubvyY47SZSG4853MXNZkYp3u7Xf75kVzmcxLGkRsVJ8TKxyXzY8W5ZiFdN",
  "key5": "fqbHNcoFVm3YpspKeug4AQzsAQc61LuoB6uGgFJg28AnxxfX6tyMKWumrY1Dy61by9YmZCua3HDbMJoAzj5eiSe",
  "key6": "51LSRZUhB4b7kto4FFs5FmbwBSAoPKYg5ZSsrLppZxKMQiUJbPvFnYXLbLxWaLA4Dg4e2bWWERKDAqPygBmAosXA",
  "key7": "VQtVGTHdfn1daUWUTPzhJr8ot5vT3rKPAULd6yy6UqFFu4TF9midUTGK61T9j7Kx9CvMPsQENEvfpuKWsuQJfFf",
  "key8": "51gEkNhvi5onn2m9Dd7fgmWtqchQMWFg6BEeMuhbLWEqr9ZDzeqbohN3HMRKUwj48R4X4dboeaS9jVftkZVfbpR6",
  "key9": "2JaqAcFoP8iFLLMFEwzJMeWLqamtxdiMS5vwz2Tzoi4vrzKwUoNJjHCvmWSEY5PoLThgUuL2SuLCV4F1yroaKSrG",
  "key10": "hFsrhpL7Tv5P1TKxnzQwzXUmVkYsCTiR4Dk3QGpqrb7Ufr1WoCCBtrKTd6hu8Ewm6WFeM1uK8imkVcx8PDcBRc7",
  "key11": "Rc1zepUGbGiM67XbmfUnyMhxSuqTjfVEfPgpKQo76t8YhoYLme5qME4mrHhdgkAGyPHfzY3qmumL4mSQZ4rrTNy",
  "key12": "P3q6XhhxmQHNvntfKVFPSKzJLewNdAc8vfv8CypotTvfLZVrt3KF32XiefR4gEASSFZoZuiPqK1BWtt5TnmYtQV",
  "key13": "5zSM6oJqPUQzg5tJbDv6A8rWnCZD7zinZ6cH5aDA2Je4q7RbT79ZYfJGKrP58gEcexUhPcxx1m6nUVRqvsm3dJU5",
  "key14": "jLs9evPZSxLfuUvWoVVjVNEjeaEnnvFZSqzNK9RhjnUy4hXKry4mWHT63twtvuFwUeojUrbuUV4afdsQh6MeVLX",
  "key15": "5g15KTnnhPJSccLgbrP4J5sgRjDRMhgbSEdHvH2sez1Gs22AbFGpomue47nsGDpYFpYZDR7VyrXP3nLuM5mcTVeM",
  "key16": "3GUSha5snoDTqVDXNHe3y1bsB7yTUeQQdAbsHXjGCArAFnvahiw4qwsuZaaSA2YPGtjBZwVjscitomYiZHVhXwSW",
  "key17": "4pcsbVRiMqLhkCWt3U5EDPsdFQj86YpTjBssSggcG46brdGD4EcESUCnkceRaBdHDV7LcaEbvfE4DvjTm5vhBv9Y",
  "key18": "3eD3aU75sJtGRjNKDWBHCmMvaEKjU5kgLbTo649JcMyiXb8FwYprD8VshTdyHpCykqvcWHExJPns4MyfF7svgAwT",
  "key19": "2yxBNCfEM5FAcs2NRQVJswbLyMbYSayna9ExL1Bm4q4E3AFC9Jn15txKRcC1Ds9HdkTuPG96sokQUZ5NwvX1zCmT",
  "key20": "5S6PE29cV1mPBf2bQJbdr6tvzuEJGKqB2zSu7V2sraTzi97vna4nULaePeh9US8A6hKkD9o6q5rWUhouzfGV2x3N",
  "key21": "3pZwEYVyBjYCxGXM8eMA5zcztjzm1BmZsGsMXBMPHz9UDVfkpG1iV12orFQ2kg8n11TkMTmXywctcM7XdXAVKMkG",
  "key22": "4zLTQcfRdUetQHzL7zW38VjwLnTEjhnoX6wGcKjHq6tkQE5dPryjMjC8orJowWkLuLGFJJeW5rVfaudwMX8otMgH",
  "key23": "2EB56eHFjWdqfPpWzZfTZcRwAmHYMnNihVJ4vQ9LeM1zeg81Ef932YMxo4FcYjvvZowJfvYJMMnxBzvyMZ3jGvUU",
  "key24": "4EMc2kNGfo7tYEFZMPQ33WRf4UhLKdTDHcjMNMGv5wDefmS4Tfsjbbd9yJ9nBW5e4wfGy5NBfgMbGxoP1xyt8AMu",
  "key25": "5DYb1sbQKZ144jKnUZx8jc1uGfiFByxSqaarrr8VsG87j5vL9zaShTFdiPA36Y8xfnKQS5cQbUGHZpf4D7akG9q7",
  "key26": "2b48HUMhdsMggpWPfRtcMKnNTooYzGcaXBpKQhhtAwUxr1znQ53GyxAfMYCRq6vwyAcWW3HE7EzRZThPaDTPwa6X",
  "key27": "3ZPwkp3T1qovdTNKmrqVrKVJBoaZKEiR8Uj5piAbLy9chKBqKwZwZjy2P6QunUSuMqmom9QLTrLXTaoQgknqDnzp",
  "key28": "5JRxrv9amouGRTRK3w8WhXxF3JCw3xbxLxP4P3pfzB37d8dvSueUhjUkdNiXyK1ku4cgeKBydAdRjjFdeZAy6yni",
  "key29": "XbBYL2uC5VXii7g4gB8k1ezqRqy1F1P6f37QcF68u6a6GyFqxwYYbCy4PUJfpQCEGdxDpbKTadctZuG3VrsGT9b",
  "key30": "2EMF1K2CsFid7zMmxD85DGPMusSZHN4Tief45cDbXqehsVUqeZgUJXmf7meiybFpYWoLKZhmnn7sZyxTwLTbqQud",
  "key31": "3w1nxHJPwc2VrcWHeubfidKe8277kjTFJPoXmaNXYm7nrdVfd15QgGMBV62kVHu8E5jnVxmh1PwAFuWyryGc5XsE",
  "key32": "5YnMUnS1uHk9sAKxod2A3ytAvmneBfrdrqBiZoqjGYLvf2adtKGRJU2Tm3aSJMRgx6d1emfL1CX4U9roqyhoi8xf",
  "key33": "3PiYq9Ye1TavzxhXGQuA7jh35Fg4jbpDzVkqmTPtC34PSbf78BkY5yAN3c2eUjhYn94AKUVVosNY8L9X9GX5sR5q",
  "key34": "2f4MyQ2VmZeCyRq9PbkXEXvfN8U7gupjDraPfQNx39aT3wP35z6hLWshfFS1p1Fk145mbprffUtLAYKB1tSyBhTw",
  "key35": "5zebZMNKmbVw1P4imYa5qZL7jeEtz2Fj1FBs71cTZ557UNJAhwSZBUd1rLcEWoQNHZRj5N9ErS9zoKHLETaKPT9M",
  "key36": "39d9LBcNiVdYoLHemuHeV1BwFqtbJpNkdxrD7EeRvsCdLQoDwScpXwk2NeiTU3codJHBqMoayFBxZ43BF5Z8y5Ve",
  "key37": "4ZwCD14XKDbF58Q8Yzb92KPZr5dFSLsNaYLr2nwasnkdhcS274aBKcrSxWcxCbxTaZmrpjWq5FqiM67GaJsZ5wR1",
  "key38": "VdwhCmHz5ysQPEkFrcTt4oXvWGR23jnoRAfd8YkDV2MWd7CH1SvftkzzqD93rVwW7eurbuJuhCQtFpgmbaao2Qn",
  "key39": "3isXDVDYPckwwxuxSaWZxf6LtrRhBFT3ZDvER5my6u1k1QqdXrcRSDEeMkioGGPpHv5TAs713Fc1kFApfyfP6jXS",
  "key40": "2Z9pAFQECc5TFc7EiYaRVsE2PUegnwfNr1ZcQWyjPtdDYiKBZiSY39X9LMYHMs1pdacQwuNhicZ4Y3TQUVcEGJht",
  "key41": "4igKx18eWVHeJW1VzhvtzLWfT9rAirT5nP3Xr7wZf8MPLBQmxahxuRLB97PoWTdYhpuEdDnr5cLMqzEreGgxP6vg",
  "key42": "tfV4HogSbHsbneCVmUQ5g9ZcVBNpN4H5y6D9MFfTPZU733TSACyqTfRZzA4MhkQw2K1bg5aqtx91ModK2x4Tv8C",
  "key43": "4265qc12JshDGSy62twPmJ1KcPubGQDR8jSSzPqKCkifCs3bpNS6oTRoY7DmgNxQ2HFco3hBfu8i1LTUoVGg2RoN"
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
