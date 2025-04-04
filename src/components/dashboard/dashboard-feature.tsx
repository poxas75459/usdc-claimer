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
    "2rXkZvinGyqFePwAviij9CDqt4atmgBmei36dXKs7d1a92nmLyZxDDTsXEG2AcNFEwMdMH7Wgo7meujS6yczwomr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HSYpXJMomZfCQ1Kv8x4WrX9PyJX2VmTGRMDBCCyBUuxJMrXrDbqoNcM4Czp1FGZvf3U8Bd2NL2hz5EKDToPHyWi",
  "key1": "2MnDizwvmoXUUkRJESoVRxF5fyVC3Tn6Kr9yzjrKXG5cVtdNRHiyqtvrP3PactnMmwWZJkzR4JGeEqbrWXCpAKLD",
  "key2": "38V3Yezmw8qrnQ5pP8APv6zhKRh5V1tPRQX6MUTdhFYLoFe66kSapXKL3ZMHq1kUarKLZeUQG4aweVciCxMXkE1c",
  "key3": "4ZpVweTysWceXew7yNDG8EKk9mMy4ub2fFeM196hiXFwaNjFdr6x92Ph6dnrPJxAq1oNzx2dUwRDo39VJU2u5Swu",
  "key4": "aJ5KR5AB5hjwBCrDxGidq4trVKk24VwHy8LVK396Dme2JMeNzsUwonzyu1ufV8oYCzYR2xAaz4WkWo8t5wSoPrj",
  "key5": "3rgYcPfk3s63Gu9MnDnp7q6camSNibkmJfh1LucG7z4oZ2Pxjas5nk8jJuvYupSRxegNwFzHn3VHadk1zLtHKmEq",
  "key6": "rNujDXtn4gTYQXGpmzqkdwcBESW4va1TtVSi5ghVH4nLvKfX941pj49dnCPXmKEURErsf6mnN2mCpvWqsJHnYEW",
  "key7": "2dtjp9iUoBmWJH5nGWhVmMiUMNuqPupjN88bW112Utkzvj1bkSCfLWRpFXL6UTwBazm6mzX4M7RBNbaV8Q4nmfQy",
  "key8": "434rqsBnUNKNGuT7FTXU34hgo23NAMhSWqG6eKjGhP3JNqg76LFhtat7KvY9BaMTzWW4kNWEHTTvY9apZNzquhgV",
  "key9": "3pnPjCtyaJacAkNcbqwuzVXXJezkNxrcXxYY4Cf6tNjAS8KVe9DKyk1kiYmUJcvyncL5BXDCqQ7nEMk6ueGETVax",
  "key10": "5u1jL1pAcp6tqfwLRfBd7TsctvfkiGnqFHMg2ZV5Uf34WbShMSwSkUvyJMDFM3ErdDyHyuJ1d6gPGUHyvafkkuQp",
  "key11": "35DmYqbUNe5UJLbakarBpHyLPoyDBmAUkBwNJ3eCnRujQvgTzF7GssHVQ7PNm9FV9FA8wEeLYEqZ4WeWzDbMMCrm",
  "key12": "521Pg8FULB7pmi6HxNs5MNBkRNnnyA1MftMLXBJbR5sdSFq7YouHJEbn9e9s4jcf5PyC1DMEGBobReDLXBXysVh8",
  "key13": "5UH6WzgnAyFybGkzwVUqT689AAtGBQtmBpFmkY6yPgTVE6RjqjQSueMbyFpKPpe5mq4eSDYvA6FXEqV6hX5njPQy",
  "key14": "3V1qFNbtx82bW3Lno8ibzVJJTHvBwSSShw8GauMEZXUWvad6L9FdDvmVeD1HiPUgkMY2aTeTKLuPUoHc1QLWcauv",
  "key15": "54aXC4GwopF74TLUjTtSaKFAbyD3aXDmw2f3qnitNbzFysyXkHMVZKxWQP5TrCjCYk2qTzudqWjATtmLu6Jehf2g",
  "key16": "56aqiZFSV8kaCzayF6LhaxZeMLpcjDtY3sbxRizXRnVkpdJMMyidsG3X7Bu88kUvApJEbsDbp1vmXpZW6AAVFcmc",
  "key17": "4qPTBZtD2U6yBYmJJJK5qEK9xE33Z8F9Jfgg2ZfQCcbxRbqKPgsWxLeeg1VZPDN3kM8ZDx3qcLCMSysZai9i3xzs",
  "key18": "4hr5zbYbSM9G8f7HJNSHqMf7ET6ppwD5gBjaAbvti2v9Q9Nyt8MYRnTh85MyvTNTEGkqPVDJXBCGf52nK4Y535Ka",
  "key19": "rhPAihC7we1AYmPHzzbLZYs39EerXmBvDXZ7iefnXfLAWh9rLuhNUp6A49vCF2s3gCM4nUMqn2gNndAigu5XzfK",
  "key20": "nuShTHH5wm7YaxfUpsA9Whx9e7HsEgd5QDu85xTGAzpDdzdMVjGAdvTXoQoAUYiaDBxqefZ3cJrFXR3sXgwYmYA",
  "key21": "3Yfp82db8eH3XVWHxMUZVSXvDdH2tX4ZxiyVR4YRrbZtxWnYKHXf9kDStz5gA5YkGwTZqsKVkHJhC9KNxhw4JZ6i",
  "key22": "aEVvqsQaJsnEEe1Win7T4YnLGGERyFC57runBZvFsmz7rdjusk78d2JozN6QU6zEMDaUMLdN69PBqsHEL3sZ811",
  "key23": "4cG2MJkoaTHXrRg96qeyfF5dx6rPao5jPzZhczP9uPMmdoFiMW6N9byrx92skbS1wxW5X4kzMyPtBPREG4emUbfy",
  "key24": "ngRi8A41DB51h1xwaX1jyo89nvqHjVUPNzGEocpayZdctX5jwP49D3TwzD8qkdryQmJoiFoFyo638jreaDtYVC7",
  "key25": "4RqmVqMCAQYbQ3BT8bPoShnSXFwiwSdusqv2thTMYKiuGUsEtHtuMqDU65obbRvwr4De8fuZsjWuEqN9hEopVCrM",
  "key26": "2Qq6uavr9HfpqaJdcTTdYWfy9o7zcqR7FnkNfegYNJyzP9FJRr4AgDjA69yvriMzRDjBm1oZx6r2rjkE54xUEPxK",
  "key27": "3R3T9et3jsMivyMnNXKUD1zQAgmSBSTzYuegUuDBgTXgtUT54WVcodc9cLbH5J1vihrz35KiKkBaDKJpat9DeZZM",
  "key28": "sB86aV8K8ZTLYeNdGBKTw7Esti3urig6btxnfjCz1emnMzZUpNqzyB8S3CMggnmWABDYgqKQF14WwHbS7TkqGta",
  "key29": "5AyFnjLyeeMqq9h9uuQ3v6W2ahLfFzdKSKCDMtm3AypPSx6KfH5U1hXoXiurf6DB19eQSBA4NUVfAXWHEM5Je1Kf",
  "key30": "3TQVeZp51EouwMXqboqrp4G34orNYWDjcCNNRDVaUdRjepTWeP37we18afq16BzwtL4c8BK29uFw6Atim9czc7mg",
  "key31": "2mmKTxjjStMmRFYVQxS4iyc8mbcnLiRgg6uPf8tJpFGkjtmqE1vewLcB7yyh2AhjYfp98NabA3Tn7K4epbjg2tYE",
  "key32": "5ns9nTVxLC87WdfWjg6RBDrosY4CU5os4KVJXhTbchgZcv44tDivZo5hcZyNPQJtBMp3nKtRvCzucj6VD9ijZgR6",
  "key33": "3GH6RVtGvYRcwpsEoWGq2zfPB84GC5HNEJGSjWFBKaZUrZP9bGXedLVM2Ui5Je6EwQsn2hhvep661a1w5bkng3ha",
  "key34": "5shKS3h6MQu91ejh3LpYzqdkjqmmWhTyCBzwqADyYdSaZx5iwjAVai9dJhyT8vnSaZJyJmBnW839z5Byf3n9y7YL",
  "key35": "5WDcyqbkMofnshAAuU57ta6Jdp6CHhxn1A5i3uhJHD5KosbcNhkq5LFffKKbVbVMjPvcTLoFtzypMaBJN1XKFvVk",
  "key36": "5CoveUUxsHbxmUSSBzYynyoQ2YfmKBm7WpZ6Dtr6ZCVAxoUip8WMnxH5jx99dK1iNu2ckEXRehgoJ1dLX97HGg2v",
  "key37": "3gjN4JXJV1kweM93YL2s4rkhSVr9fCA7tWPGuzbtrR3hUrFtLQChpHvx9qMQedGrsur7tfBepBLBiEW8sHAdvVSD",
  "key38": "2wAKZZeMzSzaXKY7CnKPr6FCzptBMvvzaQiT4jQzKEoKTDoMKGTgpoW3Pd4YE7GJ7rgMMYmrRPwZYgkoy1TcduNw",
  "key39": "44aJW7iMFQo2dLQo8UzXXYAY2ErhQDmWdr37XoF1x3RxKSMCg2yCwVy7vgi3T7symNL1TmVcwjjgFkAZdwSLP9E5",
  "key40": "4rFDNBd922WiNcMjKTQpZihSDPN6qPTVnp8nTKpSHqTmf6MVdwE3kfgzwUX5VmuQieM1JcuWFFNgKWkF8YFyBKi2",
  "key41": "33aKwiSbbPing4TdQdYFYx8T1VkbK849KV5LFxasNFSfcoaw9ZkA56qwEpxuf7x5k2cZi2Z2cPKXPFujUxAwtqbC",
  "key42": "3W1M2bDhWPhwpQekjx3fneovs1W76GWHLAj8rVrEv5ZcnZW8pqZrjy58hW957iJVDnZgHZaVJFVXeHmHcm7zGbRe",
  "key43": "4ZhbTSxDe1bkHwfxtR8siPxdMgq9En5PEX7fcjrdFKdLMS497VEW8qHXNKKgx9Ls4Wh3dnCAVLoZZGRRsYNtoAR8",
  "key44": "Po7J4sxBp4QamC77kUDeguNXdGRS6M34ngnuKf2uGPtVcaDimyJXov6H4L2VpYKjqUt5mQ2FuvMA6THfoxDMKUw",
  "key45": "47zu2PfQhF6CHB3TyqaXBKp7cguwDTBjyUnvo227PqPMJPYJhAL6SYZKd9e2XvPRvdhZ73gWB37NCmyokDFC4vdm",
  "key46": "2jZRSJAVhzyKL58idrjSqguAtN22cwZWQVtJpVeH9QWNTRnaMWtuE2NpYocGsJkED338GGXpSstLc3kyScUeCBcn",
  "key47": "2Kv6qC8Xd1QL3MQm818hY6wKRcESKeZrZfgJsZQ3fd7oWub6R28RrDtcVMayg7oamsgWZLbz5wCV7HciYcGKPMCH"
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
