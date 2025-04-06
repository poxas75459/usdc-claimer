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
    "5VAGjn8LJkgPC3v4GRmbXsW19cfugPAwgZjDhuNy6x91Pt1qeUQipDamWYaiHbKiYGX8ATqweyUC2XvcyDy8oqXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4urM1Zf1Z3oKekMU1Uw57EtnBtSqkiegopbNgVTSvXFqndecpEMxGGYpArtpX34JUcVdDdcUxfZTEHEGk643a9B",
  "key1": "4x9uZMsQVgk7QzRxhUCVvoC9kFpa7YmPsd3q3Gf7T9rQaiieDJfiQgVVH49iyU2JG4Y2Am5iaJW2AadddLSbSPuP",
  "key2": "3UbWFZ6SxZS2t69cGF1B2CsLEAZn6JXgrj58tVjnm49F1QquArGe7N8wgjP4rkxp2qpEC1PrLQY2eqdFEz53wGEt",
  "key3": "3QyMHBTaQLmQ9tnnHCQf7Le9XS4rzbTG54KCW7LQGzhYiJMztrwdFcgJbu55icmQsoJaaTRRa2PuiR1rw47w44Dj",
  "key4": "2bayhprKGmHKKCreaTMTi7BGekmYd5QWQL4o9JnmN9QT4xY6nqi3g25XnVKSATsHdzJxL32dPSghWV7YNeZjDyVZ",
  "key5": "5AKRbZRFkiHYedjDRbZLG4fKUgQmXoYf7ea3bSMvqozG54qZSjtqZtArM4BZEqGAjKCCy66D4opAsZDVqgfbEoZg",
  "key6": "4bB7kYBSj4Rz4G3t7DU4pJHwzWjK1ts3ViTKmk14HvcdUyB6S8TQvi9Ktu31jwM2rxa2TX1GpFf5Ws5yi9wcuNFn",
  "key7": "udTm8VrkQoC4CAPyHxMCcy9BZoLpVCPbExc8EAUJjBG6r643a5ZooFaRBmBLzGH6tKhfGA8gx4oWwVx9m4B6zid",
  "key8": "2aonePb81EYoYaKu7vPDXL37z41zGx2kZzLrBNVFKhMyhY6a7B9es9kSpNmwm82nrk6NxgXdoevWjf9kCWRSpL2N",
  "key9": "2nfVfdKUs82JCHAhFMFtuRDjChjyiqFznE6YdBV3yP2mRzrPStyYyRKLz7ba4CHT3kR6QGBxTNX2TH4udSj7WE8E",
  "key10": "2ioB6ePd51aKkNCJvPtZS1o7tr4Nc5S8KvujvdQbk3JEr5TCbyTVBNG4Tbf3gvj8K7Ledod4YV5YcsEti8LdTgMK",
  "key11": "46qyG6TUZX4L7K1ZtZL1h93Q8Q1BK5mVd9CXT3UcrPXNdewN3HwieKccd819nAWkeVBAQt8BEyeLGzhi2cuNwqiH",
  "key12": "FTC44U8ZnWFXkFcYaA1aDXHTUJYgPABtEd6vKeJ9s9n9XaCp7VHeKVaRnSw9jTRSrNJRwW8eFnc9qWPQDCMZWaF",
  "key13": "5Biag9Spqkimjt62b4J6zsP2ynzc1ayYb8VFwvETz1sRovZbuFLomsyHdQ2cGCVS4suUMj17uJYNBj65gkXz6DHx",
  "key14": "3rB2udfMQBf2kxvddBBEqD49mTkDJyAqjD9m2qd28MQ9ifcu2nosT9LA77gzRMTb5mAPqUnAf1aiDHosMJp4V1TE",
  "key15": "3oqpDnc3u7bRX4U7kKS5Ye6qnqzYPLHo6j979CsFHc7iteQNRx4vHEd9f4bU7EpzcEKMvAx74VY4BwgXD1a6uy4A",
  "key16": "uN2UZ5rfmkPozephFzzHQBNiDfxouCfFfD8Ueh1firpD6DQrRsbaQypPLBsAE5DHVEQhaNhMK3GnwbgCMgrsjsY",
  "key17": "3Qp1FnuE11RoRAZg9MkEuyrNQb9NFBh2eUxDVAfpUFtAxTgSPPQfzhEuD2JrfaCuVJV4WZQAYazySa7jvsjmc7Ti",
  "key18": "5KpUdvfjPTSp9BKcyaHLfKXtgwf5EwN6d3Ax6vpN7J5dPBtXe6HhiTq5MV1wuRx3NPQfgVViV9viwWui692Y7uVg",
  "key19": "5TG3BUwVXLVrpzhv7nQY36Ada7MTQXu4wg8rN7FT4qugMsqoKq7MkKt51LZaNVs2EiKh228Nu1NeHkoD1wUWWqMy",
  "key20": "2TPZVmg9FkGGdspY2KS6wueuMHfy5hTUb4fApATJYfEAXuTF5npQjQgSe4pKUXPj15rNveGubzc7jjVSCe526BDP",
  "key21": "3wcRVuw7Ej2Kkn6hRmofPEg5xRLCoSgB6Lvp2ei8EKQqaePCBoD4gXYDET7murp21iQoSa2nkLXztkcHhQ2xy63p",
  "key22": "48c4zkCjAes2sdEWRUWmcJpBgF14eGX6eStMLjADwAKKFwaA1oTX3BP4jvrh2BQTZknAT5sZbzzCzvAE1cNhQXKH",
  "key23": "5yXvCfxdrT39ner8hZbT9kgzDY23L9rQWKip8WwTuvDxB1yKUoPMhbeKobutxQ8GmSJhHsSgqwRbs3STxocoeC3g",
  "key24": "4UM1M5zGECroVVfQQA1HgvN77ft2FJ5Z4AEJDwcv2bRrBv5jB2qhP1CCf9GcYMZ2u4j2YGaze9TtBh9de1c2ndV7",
  "key25": "2B7F7N1HbW9wjQEfMbuniQh99YhCErz21WDeEkRqwMQJhyfmvC4BaT37McUahxebQuvgv6JF1LZsWY221N4TjseS",
  "key26": "2xcNW9CtJjcZzxLseLQMiNABAQhNsMzuK9BDbNV8gyTCakfM1j9ftmDjREfkoGc8HL6fuQD2XRvt95w7EyAGcnmg",
  "key27": "3Q3uGtzwPiWhvvmzQB22s85foqa8SGn8j5sdYef489pjmjhcJGB3sqgseaXzUftVeg9drjK3V3fbw7fJEFibZUQA",
  "key28": "uG7Dt3HknjimGEBDwxn1nm8gc4V3p51K9tUxu8Yz3E3Zk867FdfzkjMBaotictySHgSit8aPY2xBEsnkoneosec",
  "key29": "4paRfQqeyKJqcAxco3Q1ZKE7Sk8YaHnoF4568VJdf9DPZpaTmCTq1kW8NKtBHzXscefDr4v9ykfWkJa4Am4gwzUX",
  "key30": "XbchxMkMQpPwN6toqLfCQM7fq72K21oTtnuWbB5hUAyiztrToZ6Km2YStdggZ9DcFjzBE69jrsXzK1BLAJonhF3",
  "key31": "4R95Dz5rwJhyYfFXaR5mqBy9qwvRuL7kusrmyr8dc1YKCynz7uTnxnVejZ2psKu7ygTZuqjdMR7e2VWgmMNdRvTJ",
  "key32": "3gku8NqNptbDNprLqKEE3KAHDe93LurTz2AA4zsEUDd2UDGLKwoZ2M67YknpQRJ9ShuL2nXpWLyaWE3uayoigB5A",
  "key33": "4iyX1Mr8mmvy8JvHRBsEfTT6YtFgSYJWKVyNh19VeAQjfXdBSxgb1eh8ZhqEJwNxsNniY9bd57f9Qe5BBpZFZxY2",
  "key34": "2V7XaQpN6wJCUQ3eo4NjHFT93StH5WF459Lwo5EJq8RAmCP6oyRNWtrfrtMh4zLit7Sjkr583h7K8ywyTPzbPekD",
  "key35": "3LAB2q72avrMh5mY4DbfRTwYvf4QTR7o5djbeuoTi1UZE6gsfdMR4uPaN8jAMXVthg7jfHEMkxWTu4tRScEgGvJU",
  "key36": "5P9mzmtFA31R7gRcbAmmioL1EBe5PXuTJLPfiAdLFxYJQD9rCbaZAWmLZ5fjeHm7AYPkhP92dWdXFc5buka7c2GU",
  "key37": "3gRWZAaWfQZkCPKF8WU3CTfBpv9QReCDpAQatCQbMHW5nzYTPwQkG3xZ9EFZZuHdJoQVsZ2eJRqxgvGzzhNPEF5u",
  "key38": "5yAjAj9HcELBqHAbovfqN1QptbFxiBDWuwn7zX8h2SxRwv9bv1ueDkJqp4M9zycEkETKH9krwzAQyLCwwf7FNb1w",
  "key39": "5KXpbBmnP3g6MHuXaRWYLSJVJobDj6rPvn4ZgKsL4g2qmnHRTwERqy3YJbTV7i3dbr5GwL7WzWxsyjoo4EECWHzH",
  "key40": "5jFFVWqTQTHKCPajft5F5ai8vVV9CpuXC19kt3CQ2r4Xk8SnZuou6jVvqPvw3CYsNdmkgLmkxfGibZvnkD7MQbu6",
  "key41": "3V4AGCCe1Wm2NQQkfUX3d5TeaQa6jHoS4yrT4U5D7p6N8CSTKWp3V5L7VVCQEQMX9ntFhbtyPUPBm6E9xC4puRWc",
  "key42": "3j4U5Sk6geseRE2vD4Y6Nm6EiHUg5heRFdBUvxM7KfMUKYu5a3FLKsx4CgcoJdCd7FJCykWsDCdUTFto25xbFa2v",
  "key43": "21imWP4dtkuMW7LLCdWPx24zrs7jCRaQMqgbr4pGrV2fdhNaMx2PRhN55amGwWcZZamSg6ASv9DVC7KzdcpWxD9N",
  "key44": "4dSJnZfvjDjjfvCpztKuAgi1Qo99ts3yKHDfvWppTfvJTiYW5bZMbDxKHjoUAqkYVB41MMwNrmx8S5NgoYses8T3",
  "key45": "oTdcUHgwwUcxbkBJLDv7qpJw3nh86gagHMpGzn9DqiESvGeGPBB9UM5VT63dL7YjTib113cJV2pY3XpDKpgc7ct",
  "key46": "2mXvnDunTSdGuY7ebbCNncUD2wyRc2CVAQoLfTSyDifwRmGttDzSoPVtunvyjGtG2ZMJ99cUwnuBMtR1BB4hZERE"
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
