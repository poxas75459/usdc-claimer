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
    "2nMpxijXt3iR4u2swmWvd1nekvndXRPqsNVbhC4aV3xAPZDPxRdw7vqxyUazugWYKYcNsi6j69ZkSCgCqSBxur9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oxM7f9WjThJ3idcK1Z5LnhH1pvbFNrv6riYmVPYf8muMWroJR78sBFVhCE31ekZ6TjFJoZtoHefXuPGj4AXsaYo",
  "key1": "3dHkxhv3M9ufonCP71NfHwx2igeY8z7EB7RAPHuKU5RM5WQam7oFKHhq7LuNBUvhBpgnovqGzmVViqAegVS5mnih",
  "key2": "4XSGfAWJBYn1HDBf5dXdyaXSrXnkie5FWqXj782fXwyfnHNccSDMjj5Tyz8MchK4HiiDGZgD1VkkMzvh2b7yTTtN",
  "key3": "2mMexXN6sk8m2EWQcW3VxEJmtAoXnhaoe9Juo8AJwSoCjXbvWaPn3Cy2tWX6WAQZC9WVwSdkkpQoHmeMsBUiCZ5W",
  "key4": "4LxvsjbCxxUTQ19ap7eXxyq7XqsLNMyrcnWiR8nU4iZaEMNxfypVAEpkqSjecsCYczP2afU7HWvvcqStX8yBziHq",
  "key5": "5JfAMdLJowQNxouFsr5GKiuvqiiK2ordwgDGMtBFYGEahAcZE2fmNzxMwTjN2RPRYSeWP8pKEZHL3ABHhBc9Syj1",
  "key6": "5EtiJCCFiA16zyjBhnXE5ycCUMt7tAtovCj4L8j35Bsh7cCgudMxq3GoXvbkY4xTbRxPwbQBHWoeXRfbtJ5Z6m9H",
  "key7": "5dYy6mJxvmzWYiNqvzf7tE2rixdrKLrtuR1ogzHzMgGMSEG6cg7ok6g9Dkeqx6X6sYxSDAE32XFR18BWgAfjGu38",
  "key8": "42Wdsu4ztumAzP8vvXDwpxG6FkxuCT2dwd3DJybxiCrNPiXGmXUqF24yQVNb4wHT2zG3KHGqnhsz4HWwKtJnvrQK",
  "key9": "27rEp6hNeR4L9oRGvLv7zCBXgfUVjQxVJ8uTJtNtvJ1d5jKzFf6jPwpdYmkQuTnXxojvT6CwbTEt7R42LC1QuEi9",
  "key10": "32if8f7qC32VSUe5CbudjR91ao1dgcjvSkjGU4G5ZTnN2oLMXYsBThqoYwnh74fbmAzz1KUp65SKTg4afHcRJZKy",
  "key11": "5nN1jMZsYyaMHnpPdh3gKW1gRZGMwAt3XFeRFd5hyxdqrQ7Zw4DH2yuEnBCQp73ttv9r621azZagKNCdEqdnppT4",
  "key12": "3PwFW9arghZjkFSXHJMPbaWmAecqpVmmK3YvQudmj9Fn3c7kPC4BU4a3VDK5UXuhpuQE6PBEU2m6KAHUTCu3EE6e",
  "key13": "m6Xs3fWpwzepZ35YYgH6E2t3enzKKzu1WgCE4Hw4MbSNTxyT9K8jbw3F13UNyGuEqDrbw9RgRQxGiSqZABawr1p",
  "key14": "3ytGf9fHH1VyfaFVayK7wwFJeNKKE299YAuDxjVeFzpf3S8tsgr66uxfz5nrGjLFQxFALA2DscbUXMdx1XUSkms",
  "key15": "4CvBgG3U9ACMeUTbHWyqVHNJQsgkuzadJh7QVsjVocHNUZuWnwgwVbzY4yWHxC3UEuhJvELPHGHVWjHY9GjUBWDP",
  "key16": "3pj6G642Z3TLV7Gt4L8if5iPKoaMWFWT5dM5FokGzpQWaysbCjFc1AnouQdpqLaPzQuPvykjoBip78VL6yU2RoS3",
  "key17": "1dF7QSjmhkg37XubVreHQCU4Dh4djiuTy9BnJV43ggz3BG64fRq33BjR1N6boj8bsJK5XnQvE2UigbnqTfywoCr",
  "key18": "53yVNLJLaphASRDGboQZwmJzw4mKPZPf4FH2wtbHeJm9f5X5jEPgT2BwEoKHZc85rreVDHPN7T1K3XhR5vx2Pe83",
  "key19": "4QEcbj5NJjtge8G8zejeu4iZX5K1fLqb3Yrp6Jy5yg2QZWUcG6fLhcDhTUongL6Z1ALZ5tLKeSi3bX1AHCSxwEvR",
  "key20": "Gv9gcR213zFstk1vXmmTKuD7iH11K5kAcvMJv38u6Ap3WuuwDkKUGJX7azVDrtDZPwps1LRKshLzA7oBp9UQAkH",
  "key21": "3SjYGsBAVqsFT3xhWw6YpENGuxAKfsZ5UuTeQDcahdEQAF6Q5hAcmejF68XvjhxfS3Fz5nTq8EcryQrrYtJPZwUq",
  "key22": "38dbv6wjBsieFWVLb3kyx3YhXDtsME9rtCAjaZiP3dqL7kgeCwyGP2gnDg3JcpKmsMYoFyCW4brbQpR9VkVCjF8g",
  "key23": "42RV8wfWUptEBkXhCTKPnD4DuydGhSCq4px8nPTmpVo5SXA6ttwLfeq9m2i7tRj5YD2D87fnmLukJeVipQfhax7q",
  "key24": "2AMEg1ca2F6CbTCNq7dRKz8RYUCc19G3LVu5egBDcXMoFZAJYwvbQ3LFeW6ZQdkagHFUePhGKvkZkQQMZrkRmChz",
  "key25": "g9AnWGoUn6qDdNqYyeiudy4964XHAz22B1zSNx87VoSkehkSeFVyirogjrz8mMN3zeQ5XHviggAWb9B6hUokb3F",
  "key26": "2UHWoN9spajVBwDETpaRxTHqonAMg7rUm2iQVxt9CsevepWgRYFdRHX1nfRiyaBvqaUe2ZkfH7t6eBUKE4hon53Y",
  "key27": "2oWGTARWYX6YjsbiuX77oQh11fawYjnCbPxnKY6pgKbin49YFDx9dY66HjYN8DF1um5wytZWuvMQ98kcJJrdUED1",
  "key28": "31xR5DKQsKhBfwMGLX66JxRut1KGJBxFsN5SFUEGUVsiG69GUPGrmfi5Mf6Dv1czFjQYMgyPw2VCNTw1tdUZkKj4",
  "key29": "KggzYWtWCz8mCNb1KcyLP3eHS2gt9tZ1fH3PZtN3TxdY9aPMDD6M89RKpqpg13E8pZDDAhwqj5gt2Mk2nD9uaRJ",
  "key30": "pa4m7xVmtMsRpuKUVwWqe6hQWPbD1KKeAvXGhX6wx9srNCUbZhVh7Ts7XZGPYHP4FaYNz2k3M5FLT67KZA1hjhJ",
  "key31": "5bjJWyZENiVzmGz8mEs4UpAfshceMEb6cyAWCgoaANryVuauouJQ4fGSvXYCxdWv3JCnfcfCD9WucqbBmj8MuZv5",
  "key32": "oHrmuuSbXavc79PtyUFpPb8ezZ3siiBGs6LoCZ47mtq8qsQxDPsoXrNDJWA3KuxduLy7NwcsSE2m9Mk81wdqt96",
  "key33": "4kULaz5kzzkpnjiKvKMp6up25KDheytW1DTGhgujkvBEbvdyvg4He3yShKNKfntryKJxZnVu7BhB1jYzNsZrKofo",
  "key34": "4bxNWFMhzAZfgLH7JQuarpVs5Cs9Qe7xrjRTnkiF5uSZgbXCUEtUzu2HxKMG1fam1nfTT3MBWog2kSc6tEdTpQmq",
  "key35": "jgnTcBek3BmoM2VNya8Y9bSfdqrrtSTw3jgyZ1JBM21knHeD6s78S4rLCJNjX5iRzhdHN14oJJPR3pJhMTpmWiz",
  "key36": "W9DCrmgwb2MXmJGEe9uRztZGzMw4GktrughG4mZURiqXr213StiA6Ka5eGxtDVuLGLD6w14LumFaK7mN6c1fwqi",
  "key37": "3mnHG6TQxGJZ127eYY7A7hu7xpVTRVWRZ4Z6Bb8AEQqA2oUwsnpbh8mddruz8mV5DnRsNMytq2WHzJZsThghpevq",
  "key38": "2ase69U5e6B5n9rwPGF1ZXH8CH3gw4mRKEAnnvNxMxd327fNNLq6tUZ1qsJVG9hMbFh1bSCyPtwGq7d1wYAWsJnW",
  "key39": "4BbxJ7jNGP1TXtJ83V5Ss6bcAjPxfkwLksZ5uYRedULpgMy2KFDU91Dhu7AwgnUJmJoVKAvxuFQmTvaSvCHEPGXE",
  "key40": "4nURVvVrAuNmWGkHXvYkM4h2bdDdzjZHc7HRdxpPnrJxNYsSEhiDduN9zCTRm9KYLqnPUkPjhG1BRveFjkbNTeux",
  "key41": "GkEFuxLmMVT7rhQpjg2PW6hLe7zrHbzNnM3DEEbbMHu7TWtnJW9gWCarSTmMJL1GzubX2srhHYMfM3YUUhtN36e",
  "key42": "4tuy5DswfU1prWe4JrA6Jg7KmFTSzxgHXcMzSqaV5mPou1Vn6ckH5dU31PTCRE2f6BDNEcfEXi5hgDvdCdoPgqfW",
  "key43": "DEMHM46csvRuxdN6mstJqeAK7hYVZYcY5dtNBZaGY9RgroB4cvcPTTKaEWdEYBXFEpbMBqyZi2wmfYxkkRMkrgo",
  "key44": "3ijS5bXP6fLnRmKBzpGyveyH6mvMQwPBkG11xA8yNKNjtmvngpTBGVe3EoJ59v8CAQq6y5RDVtPPkUbPKWBzabxc",
  "key45": "JRHAmKv5aR8gkdUBcyNrVWuywCGoE2mp54xrXcQM5zmbosLzABnzevLTMDU7tFx2aF23wr5moxj5ikzKpBYKRwk",
  "key46": "5NuAMS3BPoyCdSRfYHgaNRMtYLGbMCoEL33q9jN4cC2ApqiNvX3oK9fpri6Ki3MjEfJgEbSSvBx1eGMufr2VvMbB",
  "key47": "3NRpwvVeYw5Cbej4FHLHWiopM9uqg3yNMqgyFeY2o11d9PwLv8gcPWe8nbS1BrMEzEjv8eKdNGHeVA4nkULG2NDE",
  "key48": "67o7t4uwfXbhLUmUmkSkPKuF7MCFNjrN71uLY5icbfSBq8mXEB2rREtAwetZZZ6CkQuSebm3qmm8iV2J6stgewmV"
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
