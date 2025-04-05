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
    "3UiKQ1mxzP7gy7ELuNKn8oizJjNa67Gqr2p2brpJW4SC3qEk153HDWLPe1Xb8a9mKNZPXk1xC2CDM1P7BEcL2um8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BVnKHAkcbHTikDfRe5BRdhr3gBdPGUrMjMxsSspRoPGcf5EGkGmunrarM91ZjfZ8ij1FHHPoKSQDCUUN35vyqvg",
  "key1": "29PTpUqPXQ53e9UE2dBQ1cdGdCpsK4JEnLNvg37bsLkHQPdE5ZTceA7RN8tzY7uqSg8xZJQm6kELaUwFjvZKSNik",
  "key2": "28EhF1nEzHMroh5s21dZWdgYbcFwhSvcdr8vBTsmLVL2UX8xbHmSgmKCHYzYLG5q6XxiJ5xY1bTvbhPrw5btsPE4",
  "key3": "5NctrpJzE1CmKssStJBLAa9hCJAhjDFZNaSohzjDLGX9BWXnpEaQv3agS4C8nkzvDqcLmJTrKBVegHSakuubPe3u",
  "key4": "5TehLozj6RjpmPXzYEzVgyYmxnd6YtcLAqy3amcNBgyLiHE4Mj2nWbMTmVw7BSeia3R8wJnp4eCmvpEVqkNEKLuP",
  "key5": "2BBsUnonm5JVdmVxiRkqLRJfmDcUtJi511oVSv9gBXYp2ztie53NCKSddroy3xE61u4Sn9NTjYrkMWnXPo9YeKQR",
  "key6": "QYPRiekC5SEaMmyx6FwrWV73LGVyvykrbfKeJztbzt9C23DKv1YigccRfEdb2FcgnKd6pJosSHudPCDSQGvB4HZ",
  "key7": "5CPdT69ez2ARThmBxtLK9i7cFVstGcVgQSnANKi94ep3nWkXdQ9zbbbiEij9YK8FebJMASDjJS5ombs1o124m6q5",
  "key8": "4iYCG11hpekDKvWadK1as1pcCiuVhVG26uJZjS7SjhtRRgUEPnoxmWPaHUXKTLH3qQYsQ9Tn6Fvr2xriuYLSXqwt",
  "key9": "3hP67WpnV4SuAjs9kJg2agGcEc1CQVgZBRsEDmQnWxLeo2yRuyv1mdkKDoPtsqiNvXZTqKWxJ1af7b7v62eueAFf",
  "key10": "f5AhABzs3V4mreHrz5AX6TS2MdRgYFJoAiBEqMS7BPoJrN7CH8qtdQ7ZsXdjUFxUr6b37b2hyJpG5krLhFNVoB1",
  "key11": "4MFRxsJ9APnnEU4ZeT3pUfVzxMobbBfGBsLDPfLwWjtwGXhmWhkQ56se6FVtwYVYFv9bqwXkJwnDHg78ToycJH2G",
  "key12": "5Vmj6RJ8WFVnmgSBjqzRFyJbLF4HfMEow9c8XXFgDPDucezZHfLpehcWQvgc9YTwQEu7TazEygkpKFMkuNoD8zma",
  "key13": "48XcgoXKS6GezDWMADqQjDCdGtSeNcjMwZVbvjg7Bzd4qqmukic5pouirLb85txcY4PbCDKxsMphohj1yTXDc7iE",
  "key14": "2NZ4XLbwQfWweKga1egARwJzRN8J1pCLPYhHkb6qoSXwsziXidHhxq7GS2sJsboYL7BWujaiZsQzVPFAy4MYLf8L",
  "key15": "AKcfL98YQ8GZNR5KCpNHjnDcVPJEzjCwYz8jAac7QuJtNGJV1xNpV2NRj36TRfSNncNCBAfE68YxydeF1uJ8VJt",
  "key16": "2EuGkeKzVzLudqJ4PkbvpCF6DnSGqb3QQnUmaKCKrn1si8sgDGUNzTCJUtfDQ2XpKpZLiDTe5mMZUaYpiXLN6GNT",
  "key17": "VoRMoU6MMcwuBpAqeSdAdzCag3NzxqwYCojKyfqDqFEc56DbrNhhYgbxdygq6rRQttWHruTZD3nvrtcThZUrvjd",
  "key18": "e2iavkA4P7JJTvMYxzzjhofVC3mMzXAdx4jxbBdSVzjRP6TJUnFL1uZqyqPZ4RPvKxj8VVDBTCmZ8kbdCz1W6c7",
  "key19": "3qkKEYP2SCwwkgNddXWj22JDdha5hoBxCSUj5Qd9EdyAKR1ktmUvCytgizfnT5UmyFDBUVLnYKNHaEQrsVwLXqAM",
  "key20": "326tFRVyBWPGdGJoC9v7j33SHsS83hXXqKR8VAbwKzt61E8AtQHor2avThS1cgmWiD9Jzp4Quzcsuttu2NyEAvUV",
  "key21": "4fbgwbdMzB4PVLfheH7qpzw9JBdNCximRCN4dohdZb8gUxweFrBeHvP5aCMNdZG5h5soAdroUywFQx2nibBqGVVq",
  "key22": "2XALxL8UX5ZBiyFcRBFPfA3NHNbTntLne32sN1cBYyM4Fn1g1n7JxZDeavzmyoxXcGnRQVX3pSJajmwpC3LGTqVX",
  "key23": "2JnbggLE9bg6sEUQmyncgK6u6ndbs9U7mqMew8dE1V5BDEo6TwQG5SEmszvAHnsnR8U4ApgpaKegNLVAwq7C7VR",
  "key24": "4eZk5UhhRQk8UDm9ZCMKZxTDHwakxyRAG7fv99svvbGziJfbUqqFCrn36frBt8an6BPuVGGCbZzwiVMXPduqh1ok",
  "key25": "5mxz2daG8QCuFATqnkmJvpxTPQ9a8WDhQBK7cuQEGGC27eumgeGkDr1FNtYbACPNYUdWdz5he7tsnB71HYd3NErQ",
  "key26": "3p29ZgD4rSfqqyaF1C8snNCWqsKtgZQVFhT5v1VD3GKTgnXqdjS5ZVoZKJTnHxCjejcQQRFFfze79rkWkXKVKuXE",
  "key27": "5GXjXmFQbWGkiKupTsXqNjHJVDhffx2ySsuGt5qFsdsiX3KqmsmWho4MecrJAu3SEnYhPfejCJcKTcjWn6pia457",
  "key28": "4XDRe6jUTpScVr9VGETq1wocmQEEDkZ7LV1UqHUgCyFUh1reTE59xzrTCKaqH5EgC8koV5tkjPqfxjtN3VdS6eVn",
  "key29": "5ZAXrErGEjqTV3dhAhdez6WqWyLVCMXgVnV2MTXHkwfkCnmXuLKV6FFDohZsgCfPaajKQD6Z8pxbLbC82ofpaJo6",
  "key30": "25iePdpf24dyBhzPdLS8RxNUWCcdP432GZ5hWmyCw4vie73jwZdcRv9LiLsbZoqTzzC3aMmmUiTjw61jtyKeog2f",
  "key31": "5GKccqEKdvSzK6GAWGr4Fcj74iTLJTykjhYJobDGgrKXU9RcDNLmfjCkd7yLQ2BEG9QZ4JhytywwBsBiaMFiZrx9",
  "key32": "65XEEipDeqoANefp5eC8ifMmE4BiGRPi1aJG2AjHahw6zLS1jaqE2fP6iLxXDcbhQTTZfjKcEkKC27PBKeXDfPRe"
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
