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
    "BWbq8hDaG6Db2V1HaMxuHPVGwySbwJRUfmHSZocV9eJQrref3qiLZ7C7j4TR73eyUzwsPU9kN9vPURmhe9ebLwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hWEqZ3E97oveuakW83VJfApHYLz1TDQRG81Rw3a1BrYgsDmeYvNAcR7ziy65Hyncs5EmE5FY3c9NmWsp3o6AKXa",
  "key1": "4CDHfczshJEhTQ2s1wu55DR2BAeW2Tuo4UP3AJXtUmKo4swJzKhvK5K2wuZgQq5EXxcFr7ZZVNGb7h8pbtHP3q1D",
  "key2": "5DsBxonmwtAqjyXo78ADzbRKHSuHDgFRySjrEnAnJ4AwXk3BDUJVmq2YmeiiearBJGZ82qiodRV6ZWEMG3NzPfUm",
  "key3": "c3WcL7Hw1Emy89VBj3LFLQQ2CrGaFUJPXAtYHRxuKxu1FKXGergD81haATcfjwBoeLwkN7HgXJhfTu9DEyh59VD",
  "key4": "2PiYoKmGr1shJzABdUcG6nM2BacqRCDGpmy3ekYjjju3CXi57pjLQvhMqNPSNhfCKr4Rdja3d4VVBFP5iAoaUjBz",
  "key5": "gaZfgCczkhCau13gTby7diBzHpjfZcQoSizUDwRpCHb2koPencw7BTBn2GBKufnGatNUJArKKXj8ewNCSN84ijq",
  "key6": "DWyFf76NNdmqP8ZnSfYTF5XX3mwN4X8VeM1f6W5aY8LJNhZAtK1wkjFUWpFegEjSB3GeZMSQPLtdHDLcCBgPUk6",
  "key7": "65X5sBUFJs591kafHkJ9N8YePon1bgHpyBkFuRuD5TcWRPWiHMzsCCtybkWygrn4gqz7aVafgH4g8my1eKgVxYi2",
  "key8": "hzATE1WwqnvFJKC2L3J8KXcuN9VwcgxJedmpGafeD6inbciRWKtshJuD6VB3WqfMUUhrkbmBXuvuTUC2rjh6BCo",
  "key9": "4c6Aw9Hnd9vT3vnoWcUiR6DKPdQNPAELjkyQshD5vaiBRJzpax17ASqErJ1csfVp7iz3PreJYcSq4ZEf39Z8M2qQ",
  "key10": "4piKTLMKR7La6trD2XDihuEuSrEkAK73d44HnNDYNTqUinjzJid58Suxf6ZmC1y8CcZ98VH1nzXqGe1B8weczrC6",
  "key11": "2J62oydHv8DGxX3QfxRfLAHVoKqocyWmhKiFuj3826krNpj3i3RoTBwBjvY22nbRgfTUiY2DeZcTMfo5Lce8wU6g",
  "key12": "2H8crsVaPDwjWFAt9nBaZUfYhPKcDoA9yxu2RjJorCEVN7iyFQ2nbFp6QEkJBCprgQmcV95rCZnx9iuuX5auvWsu",
  "key13": "4dkR245EZ2tN4sxWB2xGuKtqWqTcWL8Fy3qwCnRtp3rgMJuoPzNHmW2JGiYDf3J9X6yxjLGaoHaQY3zoFGCPGYF6",
  "key14": "2KuiWBK31bTBADg7EzEc5z1kqqAUft99iRztMwME6sv3UeYLiQkNwrqVm29NvKntojbKUjwECouWdV2aEEHFSQ5B",
  "key15": "5nMVxVRQ9K8nQWKLoR4nc8rb5k9zdgTVbtmpn3BuZ6TE3MmVWhxEQJM5ZfAZD2rBX6miHxpPonhdDbdu45xzKEcY",
  "key16": "4i1mTY7rg4Cz14XoSpHQQkpjmLCDf9QwoYRygXe7UDYz51VDCbUG996JBSaf6i99rgRrxzNqiJvBC9ZRaV92H6eR",
  "key17": "yj5mZkoJuBUpdx3oxZLJns1JZQKKcWF2SVBBmPBFdFsByvXv2KDRNbzgwbC2BT9Y2K9qmP9ycBYjKcaJe8fbfCg",
  "key18": "3ZYHzEgW14NeJSLzMVdtz2KV5mG7bXypLg5v64wetcrvokLybt3h3ixS97C7m98CrFqQS9FtXkn6MWFN2WQWXA59",
  "key19": "2paYxNG2YuSBw87ujyyM93299ooCr8ARAZZRFboWwNYBTgkWGMusGXhwBb2WNVuzRAFMmKS876pLptCJo5WoQ9do",
  "key20": "3qbUKUKdrzHwNrxe3zFr3LEFDm3fArE6Q2zocd6hB1a4twknb7DXxaV9FCXuko42mgkLz7hCtKKoUsN1zBa2ze2b",
  "key21": "5q4caJehpT1d5B1FBKK4dyUfRhNNRpJHveJvXfD7o7jtJY45K9fS2Hzo7ASuzjmitMSpbGdAx8dZqMXdFq9uCFk6",
  "key22": "61KFiAANUJ5rGabnTodF2x5KJ4dV7mHLJ24oZP2xqcWPAgTfXEw1VCcpMBP92hYyA9gk3B3o6YhW1nCvRNo7XprN",
  "key23": "kmkAPDERNfw5scQLizpoEi2qrJM68iAP3vheq9ctuTLhmJdorbQA1SBNTjoP9x9F4LPqQ3dpHt6SqDXzAFAWBK5",
  "key24": "3sgZuhJnPXffnLtK6pd3zBAh6pRxXFSPfACeVxYN2yoA7mQbS834UQ6x8isRXmBXhv1UAebgMZzuEmVHDrndDPb",
  "key25": "4b47wavtV2uJvHLw1m3FJKx43pV7eQYgaiYpiaG9AUPJXPyfSAgTmd9eMPCdL9mXCGe3b3yK9ouS3ty8KA76TzYy",
  "key26": "3YJpMd62MJUjojpq8RxdUsEUZQc9vtZ8E5WS4fhfuMiHRs5NzwGPniQEFkGmA3qBXhxsj9SBx8RgKRrFoVH1UFyr",
  "key27": "57xafVkmGkmMbGt4Wdte3jgQ1eZN3WSXP11jewDnqUvJWAL7qj5894qbHBeBQ8gLNTV8gYVdrJ35Si93yjkCaNxi",
  "key28": "3TDrHv6ivexARBY19aMVntucytxdMY2B7JCB9ghHsPGb3o22dc1ufUbiJ2GQcinVwwwLvChHv3xo7DRTZjWZpip1",
  "key29": "4bo9MV2rfT5mpG88NSsYAuxgo7WquSJP3jhro1hNRfeKEo9hcxHUzYP8m1ECPRM9cdrKZMcT4eARtCrVXwjLv5od",
  "key30": "2DNXaQECvmBDqdX7kdCYikt2oSwc6FPMcNqz3DnNVBCCJXt9PvEd59aPperpe5wxw3AKGSzin58eeNGJ6kYczK8p",
  "key31": "aqjNtcX8gdJ9c68cg3cYc98SqeJcffJWNepgZmbao5BYUaYziKK2jGfDQcMZuAxny9HKUHo4eNL8M3rt7dN6Skq"
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
