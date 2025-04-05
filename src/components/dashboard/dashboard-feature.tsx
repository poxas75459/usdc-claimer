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
    "NXeFoVjjzRndBVeDGGgaLAJcKHSMTQ4oJ7k8HqRZGDHhv1nCG3KbonrTNUhQ9s4c4ErymqQXjEuRFdjh98qGAzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Swbz2MEFzfM6a8gftRS8YqjHcxfW2gPsx4JRWmMVFbL1Zsf1xFPAv7DXoTfzvPhkzqvhPy9YNsUZkPHaVvdLeM",
  "key1": "3YppY89GarSBv8Ma66WgscSSFRkCvFZNSnXDH1wD4xdrHc3gN7QycmvDmnvnq1NAeCVDNwFeCfADVC7EtTosqkcu",
  "key2": "49VpnJNa37QyRPRgDuQdwxpNNxtsjBy5f7nMCYxLsJFsYjDmp5Uq87NTS6UPZTnsJyVc9ozvz4N9yjYMYXbULsYJ",
  "key3": "459MqNwYdBqQchgb3V3fTmvZWRWvg1d7TPpJwx2W3uoq9dax8LVhNBMy5R4aPmnfDyvK7sdxg6uWFYUpVd9ctdv2",
  "key4": "tTEzLhcQRh6Z3m6VsqRxChDJTtodq4UQCL7E5iWgXWWBuebp3g39maoHbhS4Wj8bGst8Xa4FYHLC2sJXeUnYYea",
  "key5": "3F3ZiR7bHkRmkgGySuraVurpKeuPf2Dp2DLrtoyu3ifhJVePc1WBMfei5CbFs1Wr58ThjLRZoRytLkstFXi14SCK",
  "key6": "4rbLoa9tYqjDyGofV9aTMnQ4yZabNyaZfoUgk62zozm2A1bAYTrfv2o5RavrwcrQYPBMUJsG4GEMqGWKv2kXnG7c",
  "key7": "4s61fFLnuzQojzBAZU2c35samAbtrxrsJbPNpCa2nYgXAxtpaTr2nNkHX9ACw7pPPcbEV82BCVj55YpVZYm8TN3u",
  "key8": "vD43gkfif4Z44FMjam8CJiwCzKC8x14XGrDToC3Z9CdhRcPiguDa14yMYFxF2W38uEwa1LVxX9cUsM8Z3RQ1sFp",
  "key9": "22fucxNvnFN7mCpHra9aeNAPuYVkVvjHocgz7R8h3wmLjZjmd7nnukKQ3mYbzVKrsov132LB5VKYHTLho5aDc35V",
  "key10": "5CuQStR59eyqiTJ3pCiv8jC2z5cosW65kQEwsDzY5oAHDX1yNSJo5am9USVzrSW2YWNPEAP1Dn8GgMPUog8sT6SM",
  "key11": "5C6xW8HtJSi9zkPUFEYyaJcv7y89o4yEhLjceKakqcafibjGB6r1EjzGEaH68abjufUQFiNjY1rN5q6zRzdeuh3m",
  "key12": "3axnKqCBrCJH1xUU9jHVGFpLhuY9njhrwBH3u2gNGvb9P5xGtWjKQt5aqneKsU4LudXjfN37mqREgZRrBDTx1tes",
  "key13": "2XmJW56eLQ6dNctCzfiiovQWDKjXxc8bHQeo1vp3yPt2dMiNcx5VsdsWA8HSCxcAzhS4JfMQd5fwh5icDCWDbNsA",
  "key14": "1gJFDzeW2dZpZ69iYX4T6qqVPPbVJCkX6qKynGo92X8e7AqXnWwLc121rTDAUwxcEQBBeKqDiqv7bTovDy7HUQ1",
  "key15": "Uard9TcFHEbpcCV8QUQxbkuzSe14N9r7VYK13YGHT3j9mkm4PFAHqYGveLJvRNDU8SC2wNFSdDEL3YmPxdkD8Af",
  "key16": "f6HJm7V1A565iyCtpzLyA7pASCi2ZDTsaYXftzzU2REAtFwNR7foa5Qo5PyqGKJrTDDu494gXqkfMwrkX5oqupW",
  "key17": "5EzGYL34CzAG1t91X6MSiw3wUS2qPofr9fNKyD5SkcJA9nufY4HAfTomg4SiETCVKwFs3yfN14yEHt2MPz72LTKR",
  "key18": "4VZErmQoUCUJsesfNTDNWJSRSffKQm8CpKfTismaVh6FQvqmAPZEfUomd3rURzGd7Ypu63Ep4TxwEWiY51uC4GYu",
  "key19": "58hQQFZzwVfbix3rr9LQBEXrUpdYjYnv5cbsMgF14TNpEMzMD4k6hSNpaSfYHgVbyGknqF6C3hUZ1wUtWAYKn7nD",
  "key20": "5QhU4odDEn14MZ7vZMG9S5oUB4aeTLyxE24P5HtKKNFe1bpm6qvzCwAUALErk1XjL9Qe6W3UGo5hJvZCHnjjLPc3",
  "key21": "foQYMYHsSyte2ijGqxJsqQeQ1NxiNer3XNFiexYiHhPTLhQEzSmWw2K8NVxYUgsD4GqdprdDPkwgmke4obHDhsp",
  "key22": "4wS1rP6vG57DyrW9pFLWqrzWAbzEMRutYd9RQySvTfQd1wxBGLnqgBPhWHdNwKWWLPHLg9zvGFU6W9J9wNp6wxUk",
  "key23": "1uKvmu32t6yRgKvjyxKTck2wJ5rJxAZDYiPbWsKgDDAKgaGxdC31tJJwXwbRLrrzMF9TjTuXKdkVKNhCBwRMtwF",
  "key24": "444Ubc4KYrUHtrfti4JoJedXZzcbj6Mcyj5B7NGf8dezxYvaqbmJTVn7sbHav6hTQkoSgXrHBk4kq7FrCFd1D87u",
  "key25": "24bi4dZdebDfCHPec8XQdu5PRDakse1kqd5uuBbZhxJXCSF3H2X6LWyBXf6HNBDAao67v7wv1yU7U3h6njd4M4Xi",
  "key26": "VHSPgUB1EHuhG179aPkQo6bbLo6GXfAGm78DjjUAvLmfx1k1MRf6oWAeMraromT5vLmisX7Prp3nfcUgb3bEm48",
  "key27": "3JHM5M3peBSf3oFhZ1gJjMw75eBoqHjPzHV4sapRoihvqHioZBXyDTYWbFYhvccEMiqJ5QNmyszQXw2QVU2u4axw",
  "key28": "xAUYRKjx2chNEeJquiFvwagkXdUTzrHcxTo3xtPs5BT5MtH99CHzixzqJxkzQ3QQnuYLH62PuK4C8wd4PNLs5P6",
  "key29": "3YJfj62bdEc8AQFzBbpdAbbYS7fizsmLFTgewtaws3QsmZPT4CBBTK6LS71j994vXjjthU8vQsrcovATnX1ivtnW",
  "key30": "37XhvdEx7R34E1hgveCyA5LNBujn1q3WkvcXBREttNLCCsDxf7FdrXp5f1F2192vDzHraViyvh7aAA8WP979LzYk",
  "key31": "2cHMAB5QzyrM4Yg9CHCxJMNa7hutLsAJ6Fk5SM3F3aiyPVaJpWKorQVwNkhsfmx4PqnzTsvKot3CHTHb8BgK5zUA",
  "key32": "4SKWELFKHUhdSsgsywsmvAjSZQJjyzVVrfFjFAAWqmpkRZY5faAL23XXrE1duXwdctEUyMN7Dx3sQDQwpGEZx3qb",
  "key33": "2Kw2n6cJmFSouLT9pPkUt5Gt3bg2ysMJua1sgF5nYRrTUmX2S5tD44CnHmC9pTcSf8pryZNKj2StgFimnCDopcFX",
  "key34": "dYiin5kTixJUqvS3nThtvKta7DGGS4PmeM6PvtfFTgqYpU63vq6kXBo9tqeqPj6hiWBnkVD1sasTUeGaJF8XVgW",
  "key35": "5G8fnxcUxnPiurJ2E7oLynBgoCfkdgZT3bNSkEtj6vSptRZYafyen5k5Epq86Krne2iS29UpbhutrDHXJMe4ytuW",
  "key36": "4dnmi4mJ2cE77C62RUg3ZtfYRkKTfCWhk5sWEQ1oEVeE9G1mEdGHtLoSNqAUbQZ8p1VW4ENDQFNBENMP3GizAPWP",
  "key37": "5D3JLGhPFQpTnKFvjU7ytEfPba2ruPc4aE1Y4ueZCaB5TsqG9zW6Q3ykzttz7X2a6zVKPayheVfon7ZtaM1gBy6G",
  "key38": "34nVD1r1QwNT1kWoWULp5zs8EcMyr5omjURH8PZfuXdpmS2s3zJzucS84Xa55BMHdygKtdGQQToPDM8Jv53HH9Un",
  "key39": "4UCGTMAnxja7fzawQHE5xjMo9aPocXi14vNCULA28BdVUNmC58Z59F3gdgNggkYn6x6EcwzGiKwy2p6RE1uKwEiN",
  "key40": "3XYCs4NhPuJtFFe3WDWAQ55Ur6WDCYYSQeWjbXPYs5GNyDBQbUeRFoYGwG3hBcn6sZHJYJv3ohFEHiohHEBfppFj"
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
