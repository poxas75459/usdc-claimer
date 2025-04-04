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
    "3ZMEyfanVYoQkorbJvFYwjAUBMuGr2LHVEXzXrY6qPyznzxCofhSUkJFXcNd2U8s74GMiHhfEafAfxsM6ECyo2kP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z5FHHVPhuvW2gKgwhhWjxevLHidfZzwfRtEz96oqnXjXkNM2PeAmffu4r6ERshn7eXQAv9LqrNWSrCucDZdgWuo",
  "key1": "4U1AkCQ3vuFVnEaz7znwbWSdL8Fd2kvMMoQczFFqa5DrZM2Zy63ta5ihfNpRFCN7rir4CDLSdBRznu2RTKdqxGpa",
  "key2": "466eBoRQLngg4vsdyiqLVP8Jpw2wiHP5h5yQkDK8yFZ5813B9rBz7mh5pieg5KEaU19EAWCX3TWjBDYRgEud2L6D",
  "key3": "2g5GmR6hUobYr2MtZkaEnUkabxLGSFTCuT481MywGVUvfLTbmgJJQuZC7h9qiSuBpLL5bHq9jQ8NydPvFi93yuzV",
  "key4": "KaHbwFgbZhcVESTwzHNvwCvEZ69Gqn8AmZyHHdfYtuP9tkN3GRUtpayuF2FUj2ixTsaGKzQ9LUfbxendtxjbFYf",
  "key5": "2H3s4BB4aPneuwU8a4x6YfNtCchEmTM3ZFyDnBddHHYxAaAGz72M4YoQX2chv6EEfdtQ1dQf3jW5RULFTBLZrkor",
  "key6": "5mGuEugxVxYgxufRePfpsn7uuJHBT4YAKACoyhSkQcMeErvhesdVLrdj5ohaAxLbVHN8aJ1ZdK51jcaGAWiSoMdr",
  "key7": "4Kn4EK8NUyMaZQBUDndxT68rGmEXhYtt1VXdFJ7BFwxP2h783Gk8gjk8ULYyxPQd4ULMARvaJ8NzHfrrGE8SdX2t",
  "key8": "zhzCvEaDsv9kkC6gWxyofPeEyqRDBYBXyKygRiSYuezSDzsq9zd6vxzh91XT5tDSS3kQh73pk6HMmodTHe4i3zP",
  "key9": "2rhP63MFk5V2hNMGuBLm9Fp643sf9MoKjVQbrsc5ZggqTL2UEq9WXbhXums2PxCL4RnLiHrrtEZbB37cMTDKPnWi",
  "key10": "3fx1ysFMrXbVBAQmAcFfpc6pWUXnS25VMGfRPh41ZBXdhLaqLa55LS2PhXLYtJjxPD3EqE5Bi5mGzQmM1aCDvCKW",
  "key11": "4CUHSp3QybeykmrcspudGMGDsqTJ2Tgx46DEpURo26qd4bDSoTJZsMgM8qq5WmYhgpZpv8U6n4QU7bcM8EgaSxx9",
  "key12": "39oJY2YcH2JddwGdWTDEidWK2GQrDscZDVkELdw5KpQmccdFvxjkNutSJVp2rF58pYvmfABbuBAzi3pZyJD3RTzH",
  "key13": "3Z6sDkrT4RzX7mmTcx2gnM2mapQgEYtK25LyyqevE2Knt3eCdBoxiMkyDYnqtQz9qKK6XiBDQhXBVaWbMwmktgaf",
  "key14": "5zeLL4pqUSttVNx8YvEGiCHaxx5yvBHFoRbMyvUSTUGbLt6u7q6qnKE752E7xhpjT6SN1gE7Si4fP8DtR4w1eJY2",
  "key15": "2nthEwgAV3ujzvUpqToXCPiBUwa2pd7TexNsGjJM3yBosPw1ZC5oobxpyEd3xgKRrCqBzRJKYG8YRmUYkknrvVvH",
  "key16": "2U2nn3mfZZddJFKPycCXELfmAAZEQo21c1hMbTqDST39dTEL12wc3JDKDfVctm6hFgzYk5MH1mV86pLMvLT1SGZy",
  "key17": "3ykmuK458mcJKHahyUERw9EAnvW4Dz8NzVTvLjuSTg5mKtUiV5agxcnhHXEFoniY7Ua99BqBe8Xg1wbGJvG8GC8a",
  "key18": "gSFfUY6V6NRXPA6c4GjzP6YpMwAdonRQE1BfgpNKgbsUgvK4XAem2UQ1q17q6jFaQN8QfMh3YPBkjEoeUKgmMmc",
  "key19": "u2buM7zCPcYYTE4AUmt7DZhy7A7UBfCTsgoKqxyKq9CH8NwSU1rd2XR3UZY8H2syzucqb6i32smF3YubeSFN6We",
  "key20": "5dxb5WQWCw6RJmrd8kwD5tTxCvF6fSAWMoVuQk8xTeJcKcS3HXWNPWEEsqBqg1hozBzzrGg2z829nLsouEcUc2Ej",
  "key21": "4CuvPSnfxZscUf65t33ZqBwgn4Qa2YyUP2UyA7DsxsdUPSjZeBtn3Xx1616HzokuFVxdspZcz9hb3sDXGeVH1fTx",
  "key22": "4bmpZswXqM38JFnTJyr6RQ39XiEmnBXvz7xSAsyBcb5BM5DBj6yPuxZeB9HVoFJibuoEYkpsYw4Qfb8v1fZYzTVK",
  "key23": "3942rYz3my7bHduRKkKAePmE3A1yGWFEfBQD2QU3QWLw4cBj92ekSvSHUFPecYjBvhgcFZWxExtXbpoTiACofgiu",
  "key24": "4UfL3qrfQBYtEEFLBkgUEeX6zUWJCfmWJTri2625QwEmVm41J9MoX95uqswYfEekQQhLPze4cpWU3LJ8aBUzBDz4",
  "key25": "5yBsrqg2AHDBUFq1vHnfHfscUKrPoALV7fJbTmLmaB2rmaXY33m1f7esAro7SxSBDdmZNxjF4ikHwq3tSke5rbt2",
  "key26": "2GKt53wxSbSbnUh88wQBV3mwXhfUfD3hzo6DcTfXStWa65TnAGyE4P1hbVE4GfLJUEQhnBb7UmDXWworvTp6G9GB",
  "key27": "4TaBU6AwFcgGooTj932LWxnfqvvK8P2UMuqUDZHU4jmcmihNC8jXvAgnEjEdU53A91fjJjcBe8yYgu97qZ2P5323",
  "key28": "45ztJNSny2PWZqhN4iEgypraENcH4TxeKZPpHDyuarFevzZwQ4grQumHGgPUBuwsqpqbW7ttwhfFb4tDwrkDTUg5",
  "key29": "2s9XacTNEPEHqkoptsma5kHdzNyvvJLkqQGYTc2fPs6yVh9C6CwitRPGS3zphnjaCT2Vj92FfWzgFb7352wH1gsW",
  "key30": "2vMtYFbCP8AbKutahQKS6theQJVio8EUYkUtbamtcd6ZK13tkWHT7T7Ec7VKkcGE6s7eTN8FxJei4xUMWNYuUdaL",
  "key31": "QG6dkqXNZZXAMD4V3h1jboXFFGzKjkt3YooqQKJHW2aJcNFU6u9c73V4v6az8SXPyofSouwYkAtGCbVj4YkU1EZ",
  "key32": "4uUagEdvpv2VYhijyuQXGeNdJsThvZ82m7vY2qadV91bx2DQQ8fZGZSiNrLLKHH4v34DGYY7vWcGPfRiVeLzi9rS"
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
