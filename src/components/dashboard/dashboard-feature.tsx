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
    "2tZE99facLQKQcAQe7CCxWgWTcLsZEYdE65unZgyTZrk6Cs4PXDxhLHpAL3JC4EUMjd14qeB9eUQDXgJBb7ApEfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "439ahPwEK9iU5Bawjk42MisCdsHferyJ5hDsdw12L9UkEQ7CyzNMEfZST63ynntrbYYWgcEYYFfe4Q7JUM7XLu7b",
  "key1": "3NErRsprgDsE4SenALw1xqtM9GJ6oG45oJSkMQjK23dbVA82BeRKpdQhX7zKCei2rhHWJSwsh2DRED6Xk7P7yze4",
  "key2": "5VnT9ivn1GewE4PmzrHgdKS86WXv2X871WsJS8qkwfb6uA3XG3HAq3RGLjqS9dSuUqKzj1pTB4xnf2CBaHxG4KDV",
  "key3": "46MJqbMyCWp8hcrTyKvvxFwqNoU5caHUAUDuJ493JSEhNHoUXfpFkSFnijCzKZkfQCBuszHixBKGD8Ehj87SGmzH",
  "key4": "4sYCkGSq4wiENdLBP9DcfDoViqWuRisXbMd4pymihQ5czhEa6pUAKyywpSfXyxf9eQ1XdKj71gGoCUWGHSbZgnEQ",
  "key5": "4H7TzGEacKFaxeeHqGhiQHr9dr5wdddnydRA3R9ZT5GKkiHjAgqwE4XThb7845Yg6cnr9FzShSA4XWJ4TqoDwCXs",
  "key6": "4txLPDNPCAWw2wZxQ7xRDatFoL463ZU6AdvLuveuoccqNYWhMZyK9fzKCbxzK9C9WVmpyAUwMisHMZWYfHqrfprD",
  "key7": "5f23JtWxSaVMtegdRRtNmd6XgArrMDypQt2Yz7uyY3phhxHpuXLBWauRRn5dU5bacUooZCC7HFLHoZP4LcZr3DEt",
  "key8": "3uYM9sndDYeL4A6gVrMiNmjzgFNikcf6w4UJ4kfQiiusaa6xhmA2bfYwP8gEgJS3pwonwM8FAxmZpK1zXP9U778U",
  "key9": "3yRGA94qy66j7C78tfBiZUWTbLdqF6xJg4UEsaoo1ut7bfasSEMkRKksCqKoMqzvwZu6QD3DPpG7cn4UDVh2Mb7P",
  "key10": "nhrrBnhUVT72U4Ufs8Vksisaq2yEP9acnndVGu8xynNHJUNbz4qop5UrXoiPfFDn4gwmNrHtQsCS9k1xcFy5rrJ",
  "key11": "EMPVdiMGWJ2CztxTCHFWwDX8GxkMt6QgvD6fk78u1G5RDk8zr8FdGDtKWvArdHny6Wwf7AWRxpfexYu6YafnqYt",
  "key12": "4rVag5PzvpHcDP6GyEpUirH46xfqn1bRgc1g9rXdo4cjppRyiwcpmPzHkznWuiajMYJc1W1ix3WxKoQDZ99y34hc",
  "key13": "KF4QK299Wrw6R9sBeC7o9s4Mv7R3RB9CtHkSrLcbVyASyG1qNHbGJ4PqVnDVQCsn3whwrit9xviRErdKhBh6dMe",
  "key14": "kpJjrr1XtySnZYTiP16RZkeK8djQpxLdjMUVazUP7VigJWuUUjRPUFxTTCVnKmrjSLA77kwyozmZ4zkWgT9Cxtc",
  "key15": "4rsjyQxivBLg6a2JcVURNJxQ37g3vxdhM7aEoGTiNAKLCmxm34pK5FWj2FNrVpJ5YUHVjbunYzJRP9HBSBLSReRi",
  "key16": "57q27iHSMnJvwuZK2p3pRi169SAR7nKG2rx7tQRjEYaX3DoJwYLzTXAwFYCVrbFv1AsY9Esc2JkoqR7DgvzNqRaT",
  "key17": "5TmD86YLMx7JPaVnUbZBgTnGVH9rrD7mYG8Kzvuihgs5tvoge45BDBQAJ1BzVzauicRdfPcbF8EnAHMxkKwLqCvc",
  "key18": "LVGNwMLrw8joc3kYD98FkWYPqwNzhgaPJBxdgDQ2a9Sz7Cst4NcW8isgmZmjyX2tVADyeotXpozz2qAMF3gDgc5",
  "key19": "3VpKghbxD9VeB7G8z2fAd6MYzZytG32cVLTxfPh7E4fmmfgo3UE86VmQh7VvVRBMZZeNPERAPmSBbSDDQuvZNRQc",
  "key20": "34FHKoHSnYsUuLdUgKa5E1XbAuhxrRLjz36fhqmJtAzBq2kE8BTqakqnJB6xsJyJms1ApL1c2Y1w9iSXu8wXBc6J",
  "key21": "3zfhuLx9eFp6ZRTpfP1mrthsEZ43qG5Cbto1yaUXFYwkoQ4Z1LmMHpnMSPNQNgnNa3DtKAcHgHKYAqsjgsJt7UAt",
  "key22": "4DqWMwsKN5qv8xB3GAa5KYxtKVB2LAwv1MBFmeYkhFeQi1Cg8GujjvzpfSKejKW9qLRxacuyx7BHQ1CDr1RJkKex",
  "key23": "4ZBQUth6RJZyPZesFnHSYLN81xNFm6GkEhEzsxQJvepRo8TH3PYWXSshzSBjnpG88nK6kmWaQvh7Ex8xLN4Yjnt2",
  "key24": "2EgTa6B4gyJtzsNowxjArQfEXv6ekfHxaiwp4DQwacktk1WWLWtuCBzLLJAw7cQ8mU3jNfz6wyf21FkKkf9gUMLs",
  "key25": "4p2kSMBrJ7WjfQuEJYu56aYPmieyWMhmbRzYgLuYYDymWxkWZjcmoeMMmDoeji2vfPHpzsbQE6xwyV3UkxBPutUE",
  "key26": "5kKhkjVq5qhSioMG2yt5tbdFe5SY1FVr5YwTLEyzqPKQPRVZd4cfCcqgqhs79tU3LXCXZdXpxKGefDx1vJdmWRoU",
  "key27": "ez6yK6HtmR4bWigwxqLgFQczWBDV83myVLdQTMEgr6ADSQiDiFvJpqZG57Tzk7WQQfRiQDWo39pC35YAkBcR9MB",
  "key28": "5WHwwPqmb54p6Dpuxnx1XzCXKyvdxztFA7UXr2w95N21gdPExgNDp81pBXqTrFH28NxWmGdYLvkHRHJRCriw7x1b",
  "key29": "bHJDHYP8fctTEH7WnTzh2sAaJKmWFMhcZJ4qbCBRjTjW59awJb3AqH4hfLuzrzWPzcRnfK4DcFSEouyxCrjhQNe",
  "key30": "5fQA3LMoqNKDgMibeTYkw5owUE92Kgaxa4HqGKqba2nmj6ssW6p4jaTJoADdo7QFLye11xrVUqqSPodD7tforNVA",
  "key31": "2CjuWm28pLap22SVgxcsok1pWCRQrw8kNNLMvt7enKoYgGFVBjh8DMyPNd9gPTjxwLx9ApKn22C1pf5hDHbVEJ5C",
  "key32": "2JicauDcAzLpyuHXZcBbXuoqmBeicj2BGh6twQdXamCkjV3zn6riwfyhkZgVbQLe9ZQLiP7aDZSbMVgFNce3Zk2w",
  "key33": "3njG4vAhpj6okqZXyDJSFAN8v971y1ZF6MvRsvobq8fox3n2GUoMm68cQccmxgavsqd96B6K8UwGn91X53L7cuon",
  "key34": "3gqgMwgz5CAhPtjGmyPeueRQmMr97J5wndr9RXpVqSsiafF2RxzPF2BJnV4dzW5X9YBUEzN7pJsyBVBcF2D1tMEQ",
  "key35": "4QQSYdar3DgdUjM7G1jcR5rZfycvku6nxUefMMJi5TrURSbRKHnPhr6qENkZGwpy52BcgBW1iHKNq9YEfPa3JmTY",
  "key36": "5rWBGcABcgn8Nmtby53zA2hEmDjPuTa1Rtp9z8TNZENcuTXXTP1U2tPrDzUtM6TARAzn1qjNU1jEuwRfQJZgojKS"
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
