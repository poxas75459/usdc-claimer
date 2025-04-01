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
    "4c6m8ZsMoxJzTvNfmuzbS3okzKFEDjUFmh4shPzbU4wYiuSEnSYtdJuJR8sCittSmEJXRX8JVHwS2jYmRWFZWuqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SDZfnMNCMZFncFL9Tih2ctjhmL7EnrbamsifrRML1qAd5JmNBAZwUzTS9YcT2BQ3NjN7e5715gqVy81C4outC2L",
  "key1": "22kMzLYt136PrCzjVDcScrbEHvbnLuLrkqDtRQx4oQSMf6CagN2fas1FaQKX7sBNezES2iUk21zc79umvZbq7BdE",
  "key2": "5dmPQL4ZuD6q2SaTtYuvXS9Nyftrx5UEteBWsQwchqsQZ1UKVy8QwEcEXKFwRYfFYcRSu3r37VcUzWksmMSEFevx",
  "key3": "4qzySZ1MhqAgccS7KDNJjS8SgfhSHW5sLzKeszr1inc5ZnwWGgUw5Wcov39rYha12W8ijgcF7FK2JDUTrGxsyJcM",
  "key4": "2spnE4qJcW1CHAChiYENuooBYdCraZMGk6cyF3xAoAsjbeqN9HKMRRKh6HK9nwkfgkxv17QCpqJBcTLUU99WdDZJ",
  "key5": "UnVVZEmsv2LvyFVTpkduf2D5s7sWg2KQZNPvxw9wdE2B6jVz1fuCcZtNcSx1Sa4TZNfu7L3GqoX1XtZyK2fEP9o",
  "key6": "ditWbNTYV9wy8p1TPFbzQQZzePYBWNRQooxFTbnB8aDLmZUmdBZWpYRGgLxPyoL3EQriyoZpWam8pbUEzaBZcED",
  "key7": "63C6QL5cbHJjW4LCroK84TiUQfdukkqUc24UzHeywnu7FGA9uF5Uyr9dQdXiqZNDtTTGMyKwnHKohEyWBokjaaWX",
  "key8": "2mT5kR7vP8GrS2LKymQCLBVwnkLukdzgtTDRhVJEWVw9qVN9Py1PUGkkipSJjveLdzpaH7tMmR9x1jSpRXpsgGiL",
  "key9": "4WaJsGBwDnr8wX8QyaRZ3pTjTYkwyRebNHM9qTsK18GqxXL1Uxe4jxiaHKk1NYWA7TzjZGNeYqxDp6AHurLye5np",
  "key10": "32dfqMxY9HcGwXVvTGHEKxst455GDJLuq4JKwBQZcojXXEdT1UfoqigUHfPKKRySP7bC47CbA97vZYdMNd7jU8sW",
  "key11": "3mozCa6NrxttWUBQ93D3HzHo5jUVWJgVWrm4XZeWNUiu93KAvTQWVhDbUnQ3eNZJw7LpmycSUPz2kmzcBm415uVj",
  "key12": "3WzDfbbEBCvpb1hWh3YbxPgBWWBKofgjNApbMQSAtHmfx9XbndXrGrqMMcL5Jox2vArNyWZ4x2MnM7RmH8LZQey",
  "key13": "2Tb3hA9bzQgACNaw2dLejQMkKF4vncfzRkki9ohggYgzA3RLxv28Mi2JHiv1MD2quTU4e7YXvy5AfRXyi2JjpcL9",
  "key14": "52aANLAjaMK5BYRCACNattF7KbM9jwjtSMJFdRrfQLzhU8kNfSgmQXfCAHkfHbie7Nsf9N1WNaHHDqsYa71MQNSy",
  "key15": "FsebzNTtCvMu452WdTDBbayTXCFjXaKmA12u1Vi7B41hYK57FQN1gJL45qZHt18TLERSjBNeuaC7Ln37QiqprFL",
  "key16": "38rp22t9PM8E6RRwL6H5yBngb2WxfFtZ3SNMNVF84Sr75yMsnfrxaut21wnqv7RwegJFu69XLGUqCPc4RwWVdqsL",
  "key17": "2BrJvLTr7ohZFj3fc8sZknkiaRJm8epvMncK72BHxxGgzKyVrCKfGZTLu4786nVxLKwzZQduabWzoPKuvYdo7E43",
  "key18": "yTFwRmkzRuMsaeiXXcQfZvJWNtRjV6x88D5aCXMF7WQSErxsXREppNcSerZKRFgdy6k2aLw9ohSmWyfDqy2MrZR",
  "key19": "2TDqbNX5GCQjkiFmvFUDVtrJEa1NYZUHjbMkYkZSJcoGWeJ6VT358bKG8VYAgSfXatSLk6oLd3Gkgcc2m3sG8sgj",
  "key20": "3so5xhKBiERM82g3xtQo2bpZLvqGWvM7Wj8zpGmgaHjiS6bZQRbpfALYZ8Zu9bXUZtGa5zNUa5cKBX93B55icALd",
  "key21": "2nT8d7qqpyYUeYfLdmKt2dKQa9qTSTrGZMAiEt2kvYc8Y4q8zkTjpvpm4R2DUJwY3izJFrRrWe94DeyTWkpPtMgN",
  "key22": "4dGrydzs49QyWFVzkHAh82LnN8VBTRGKCNcwb7nxeH8CXS5EvLZ3GL4ccka39ZJ4M4J8gpTHsWCCcQJDiXZup2d4",
  "key23": "4qpAbxzXSpmTwYeZb4EtLpn6ZoySnk5YRWmiTZQN1t21n4QGvBwkdxhE7Jr1RWinvrebLcK6rQ6ApfdT5q1QdDxH",
  "key24": "4n25cpqUTcECwWmwXcpUjH7kP9XmxN7Y5dS3Jm42DQawLkH61f3PfYpzmqJpzTJeA6notHVuQvQLFs46wKHUG1DU",
  "key25": "4xDoiM8jC6tokCXWny8oF6tMfWNFQYyfiQN4ipWMtrCH72irQGWL96Hn5JxmefjKoSvmbFpFhiYiYYYu3Cjr2tPC",
  "key26": "AWoDTgG1VdpMsGQtetKnbazNVT5Z4zrpzxc791DoZ8eqwSEYqprFsekTNpFVLCPqAjhZQSmcfHxi2wrbevirmXw",
  "key27": "2o6ZuJRm4mJqhJLpzXwPjRuoeKLYtGtrNkuBZkUEAmUSHfSinKYKypB9x1irhNKhgLN5GT1Pf2jXEW52Qxycu6e1",
  "key28": "2DGxcozQYj9hAvcjKKTaX26zrWZGef5ZwVVUdroY3SXitnfCm3yuTk8tXHZ1x5zTu6LRoPLVk5NHGD5fiyQQPRJv",
  "key29": "3XhQU7b3nxKnGVS6YReTXkRny6BST7pGD7NPvNmhbsekkRm7uM8FJNyG3oSXpv12GEPXh2fnoiNZbTzS2KvcPu9B",
  "key30": "PKEkdzj2r8P4L811kkeTLaTWNtSZLPDWajuicnSbfb8QTeW1BEFXbi6mfqdtEoLPGihsnhKuNFcS8g2MqzFbxo9",
  "key31": "5vXhwkWmFDnDbX66hTnhgNxNuJE8qiwFbGWcgQqQcuYJVBeZEYdU1bQzTV7DY3p4Lk87mQWfeKjgxB5rBRKSz6Lx",
  "key32": "4D3S2y26N17w7E7G6WTW347rV3nd2FRYy6vtwqgzX7VXBDZLypzJDrp9FFQov34VAkGqgVS31h6FsBwuWYX4x2ab",
  "key33": "uNUUcCVRSiinyomwYdeU3TuDzjqAAHy7L8ncTvzHGo7XFqqms6bXsfuunGZqe7EQ5zbfkMv8n4wQPRQeBFyuyq2",
  "key34": "WJW9LiqsjmC18cQmFcdxVCJfzSqSTMwduiFFssu1L28BVx8mo1Sqa4CErBqtpoEXR4cz5LbfmM2Cv1QrdWQ41Fs",
  "key35": "53ZgJgMypwoQeoDaqqRpLM6UyDdiQRMWJV5qw8pwYu4pFVFmeC5Ecfg8WfE8TQV38iHn1NNJ1UNUgM6iDk3MMdxS",
  "key36": "2BQqjohamScGHG9E5YRYkPDQvhBQrCiihY36gFvEUvueG7VMn22wVLUm8Hd3JFRLJcpQBRdC3eCJZszRk96pyTSL"
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
