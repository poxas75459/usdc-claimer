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
    "uNuBPKpbwqEg5pdDuW8GCmoGcQBsoJL1VG47GkiqLDyG3n7k1D2iKHe64arGY1Dx5ZEmRypemymsGnAPw6SF4XU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s8UGirYimJTixTZvkieaUJ5Xdb5Fn5qaPhXcXZKiBYQbW1oPPKoezbV3wPP31oUaJrAUtzzb5YDtyxoyfiH3Qo7",
  "key1": "37Gj2ts8Xf5o7q8Ji9kuvShJCtR1TeAFBQDXUawBqpoqS9nQhdmnTzPpdKEsd2vYvtsPJyYGNQaB5xJfZTNu64xn",
  "key2": "4CT7cRgrmyZ6SSeJapsFXMBSdbBj8joPZqYjc8pKFVvAqdWVD5iJBxg1MqfuiYQabirzRQjXwNJW1tDQ8Kjn1VxU",
  "key3": "DmEApX9D9CL2HbpGDweU2JWwF2BGypAzvjnFJpRx5gVGoT5e31cpHDRZCc57kChaZLBi2jnBnKDEtihEXH42Fpy",
  "key4": "2Y3feYSq3Cot1RrSQdscMmyy33cQLbfdwd5hkGQMf2hCBWSzBwbfc7mdz3vcyUMBYGn7jMLw4MwbXmTf329XwG71",
  "key5": "XQXMWXghftSjLXaRn3Faggt7trWTqLVK5QSAqfcieCxcoMa2ZjqzwZf6ujwUfsU69oFHuB14uci6gG6gTiGNxRd",
  "key6": "2g2VegNWvbdd3oEyNJ1rz9aiv3m718YrdyMuCCSEFihfopm9SEfhr9f5iBLCnHYgaVhpTsvFiDFK8eooVM4YSgQu",
  "key7": "f7QdKwA4XmZPSrvRyi9YXHmRtE8jHM47zHbMyqULpAgh9rrViYth1sVNN1VtL8TEVhu8BjopZ9MCZAQFX2Y8dom",
  "key8": "4tNy1q8WsdZqcGyqUd4kdzPi9yKfpTqe5SKUmLF6sNR4Rjbosi5VYHJRTUBvfh6bhdvQFJ5ohHiHhxxwLdirjfX2",
  "key9": "4CGsysWKFJYFmZTwpLPupZ6vLWPiViM4jitVeXfr2jxX9zh7xk8HeotoW5GnicxsLHzdY2n8W7qtp17NVNBuSZW7",
  "key10": "kpgKxoDsmHSdUKWLxe5UvsrF376fwptysFBqBWqYZ2cDjHKd2hdQq5Ndvf7D5AjA59wsZsyq8sv4B7nmPwcYGk7",
  "key11": "kzscrgvbvGVAmKjMCZEVnF7hFh2ecs9dbrtqkADs5T4LGCZWmAYzfaZ3UH4DCfkctb1RjbixoiNYd86Dads95qF",
  "key12": "2spGkfR9MWTtL3eFgqEjrCaYG7jGQvEP8gJhhKzBvRLZEockLKFW6Gsd5PK7eDShC9NNDXZEYUB7emFy88propQb",
  "key13": "55AZgDtJF7AJV6PYEVfDXQcMbRfpsA1nd7nyeNxF3WYogPuFsTjudv2QAdaNmpghAWgNDXbCFvCQAxkZvEhq9GSM",
  "key14": "5dsqJPiPPpEJSTMUxvYeJA9EZrZ5CGdKVBY3npHRC93ikoSsw6WyhpSazarzWLYnPMVCEvpRHB9cdNKrZqos2RLM",
  "key15": "3ddZNbhQipYnvbZ7f44PQ3Y9CXBpPxZQHMb7dADJktXFX7QbrrVECSihRQqshj1en63jmjF8aTRucFbT7SkUfa5S",
  "key16": "66P6MiqLr9kzJaHnrr85ReoKY1xbt8ihqwZKZrnNSoerEWCs4TQHGXCUdRJgxJr6Jwz768LXvEt5gD8qyV6jbB1i",
  "key17": "mmtTVHGTHEPvnPAWPFUV8RZQPWcGDNQ28ERJxHcEjfeRJfwQj8Rc1FdgRpNtnM8bbtT1otfcLzYaVqcu3yU2tyk",
  "key18": "2WRcpBqxSJiAhUzqith5go5gdmvq3GcF71eHPsMRRq6HvEdwkjFjmfhcDgAokUCQvkWPBBsbn2c9gXL6eVtWa9Kp",
  "key19": "2PHDYzXfNEecH6kgFq4DXxepeEL53ZChA8d9QZmjGLnTsVsTZkxTuHSeVw9JMCBgitfrvQiCDohPwzHizHBspVBH",
  "key20": "21ntKk1DTnjeLrdzBJs6wqDELtDhDgJe584sDGuZcv94X66dTfuPMdCdrWPQHWoPagAypEepxJsuQgcuyxW3HMVU",
  "key21": "3EwX83rJn7q2B1wghuSdy2LXuVcqxSoexSt932GNmSErTaihbsgabXQpYZ6zF8q3VhQpynfbr6Nww9MuTLWQzHGs",
  "key22": "5Eaoi4qnGHLC4nigqFy44HUC4JAyWLs8SFptLHPPjvyydjndtDitswmMw87mhcQgj8JRrYKNFaYDDG5p1r4JRQUU",
  "key23": "ZAgQXqew7rwnj4kiMuV347HkfUkjLGF1kAFYnbEW51ycBsDFFJKVbMpF6owum8xMGhKQejYF8d6cynnWpfDdpTW",
  "key24": "2sLJAfFLVcfuek4DR2X18ATmJGxWL41G8tB6XoR9N8DobNZEHxaeeoVNVLXtb8KjPAgAaUsKwz45AgV8twMsQvR5",
  "key25": "4E8UHpDdnR9VwMZg5SS7wB9i9VhSKiEQ3Kbek8NvUQpzvwnHse8gFc7nEcdv5C4rkqc1YVkaHxCTtS4Hee3TGG8e",
  "key26": "9jdRQYytkNALUdAqDnbvFUXMLg3c3iWHAszXqGZ8oEVS4bDcudA34F4Zk9FUQyL43mAAj3T6zTx5WjTxS2aDX2p",
  "key27": "AzSj5saWg4xY741N3XNNGVTru7Y6o52ncH9gex2MQHiae64CDX7ZBhviXhkb6P55QQBs6dhh4aNEzCmNpuuG9NB",
  "key28": "59395LwcogUz4j55YdcjJrhg9pdPGMtXULswmBy6WFA9pce4o9f3UZJbWGVcrE8kRxeAhz1ip71WogD1hJcc52gG",
  "key29": "qjMiKsuR3LzSL6neDckUkQ6K2ctbmXySeYzTTMgUa6rGh9SMR15WhZ81BaESKrTeEtdHwaq3MJr7UeqbZMCrVEb",
  "key30": "5zNL5mq2Uvu6avJnd8Y9SHoECzHevowEChKmRys6zqxpkw71LG6Rn9iCAytfYYgApLypZohH7TutW7T1MZRXQ3aN",
  "key31": "5cCvTet68HdkVXpsNheUxzRruRHL9m5qtJGm2iL7VcaSdfRjRXMp2dJu638z3ZuZ11H2cvvJ1n9Fc2W3CiEQP7VK",
  "key32": "DkVUy9imW34daZjep31xjJ2Js7nTKq1XX22c9qHgMhX1kCQko6vUwEiQpZx7HcEr3TrdFS6vCameqLm3c3yXAys",
  "key33": "2zPaUG7fGMuvSgeBNFwTKQky1kStkUx4gvNnteF9uVnV9XqsjoHwe7VYJ5TmkP9Ut1fJEiMfxQfMZJJ28KTJKRWt",
  "key34": "26gze7pEMefS8wAWGGx7g82fR2rTUNRyhhsfDAeUE7XeHisSLu1k8V52c6jTbAaYQ9KQRt3ioM7cKan4Zvy1281P",
  "key35": "3iD5AC4PHF2Nbfy9jNLnXvgEZimKnGWaZHdC3ofius8exz317JTqBoyDnKDEzgpXZNmERCKS4UwDKy1ZjzNevQV6",
  "key36": "62NqipE2oQfWh99NKyJehza343s6E2FhZSxH6zGm3vffP8TSLvy1RDzEXsfM2PJWok5hYBFZ4YqJutxU8sBZ9saY",
  "key37": "2uaE9agZc64xHttyfmKecqi61RiSbUeJN2ZQGBWWWjeDSvKR33EUKwkDvMkcM6gDrKWurkSj4tqRqKeEYmGYL6Y7",
  "key38": "3aYDZJkAx9i1PZ4ReiajVE2eFQt5Pscsvv5DLU8EezWHLoQLhtw6KMhpKZy2T3G15TrcghznRCacXfNKXW7MxqF6",
  "key39": "4e4J6twmqd9yRzZtx1FpTexLzA8ofbvmvuDa6qKqVmXethYaBkYNZUKQVGBbHjQTroHEcHQ5GEuGe5o1gDKvrgST",
  "key40": "otxxMKMf7c2UXGqn7SXgRG2eBqDFUsEBiRx1wrEMQxUY1zQQCc3ukjQePYeTwFNsodVat4kbUcStUgCSwzeSzaV",
  "key41": "5x9uJi8GXhK7MtTX45JAhoNNZxRSKgWxcy9ihKzyq4E2tWeY6u6x3gjpUHSDHUbJSaPr7tw9tLMPV2gY7fN1sYaG",
  "key42": "5FLe7Sgh7ekeTs53nh23grUmRq3nnDGSkk2bCxBrrL5jxyF7VZG9rf7kKvSYEMz3reJWY5Gbe8aYdmy3852fSD8V",
  "key43": "3rF8sG97FsxSjKjddCA65dEMt9rMVJQyn4Q2jP51oWuuZ7YFQKG5YqoG3h6qj2CD2hJ4sSPdozDNoJWJytASFCoj"
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
