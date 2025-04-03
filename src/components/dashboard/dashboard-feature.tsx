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
    "4MJfA18fsSrbRwUTUoUMfN6NemRXMnEbEiVRUKXFpLR1xnyG1JJxg5D4JnptyXX4PvuBdN2WgNx9or29JG1ZRGjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3owTgE1mbhmivcJTSmhAX8VmZXNMGobUD3ANYrKKouHj44VoqKTFAGgJrvGXh8aVh3JKMQ4ocUfU2saN19gP1wQS",
  "key1": "53pXzu3S3bJsL2iqymkHw3JA8FzvUi332KJTwkis9hRDsa4d8HQ71xXQdm4Jjc5hRXmwWNYG8gv7XHcu8nrggzZJ",
  "key2": "2Vd3djrfLkS6XbV4BJzsLcSE8UDD4QeELkh6SpmP47WDs8RcbfUnYQvsrXdBekB4xJRUp1ddbwicBZMsBxojZDvF",
  "key3": "5N7FTL72xHaWV2hMJLJ8h4UXsG4nQqhE7J2WWokS1FnhgnzGqQghxJmc2GTKSMgc2QGawrBaKiimzN5ZhaBbpgv6",
  "key4": "2aRyYKYNJ9CupYr5CnbSWLkAuh3chUHmWroAbF9YMbDeUL7qdjVzrRc1MfVuRgMBtF99pSjDcFuY9xw7A7fYRAQu",
  "key5": "6EqWj1o4BEnmcWQbp3aT7FsQ44QBFhwRgheUb73gayNdKGfvGT7W4sSCSuRaDit34sZAahSTPRUmwv6ZhM1fukR",
  "key6": "5hHwN7FZbtv7wF1xjTZVFdVpfQcHuDJzWyztd7bw7ZtHxUAjtQ5As47yMRDoNwQ3VusrxB1TsESmtyLMs7e7pDBj",
  "key7": "67dP4ykvPSWgNbnoecLzGjX8ttcL8PuiP6fXy2PjoSvm6QSBeMeYSCuf33AGKWu3c63FHeuoDFvM4bJv6dW2gj7e",
  "key8": "4ujmwvfhK7bTX1yAF78cMNrkRiu2FFa1oi6j8Mdhv4mAe9ofH9suqgatwwz2TEYWDFdQZBpVQH7MtE4m4RAdF5mr",
  "key9": "2WpLBUaV6qfa1FjKaqyht4RL6jQ4gEpq1nTm6sx91Cb2YJxt8FThAZJZstLA2UAj9fxzjQchzKfW79Uwbcfvq3Kb",
  "key10": "5MaQpb9nrRhvsoQbUFfgUbNgRuf7PCmLpT5hwxaR2vwwHA7g6B5LQq5b1dLHupkwN1RbJ6VUovRqotiHeHjM5y2m",
  "key11": "s4MnnvZ97U78ETKzqNcV38BePtaA33unBAV868Vmpty3fQD8qzmF1836vvbY2Vd6NpScnyj8vPrE9Z4iXkNLmYt",
  "key12": "4pB33doCmmKfsXGz3SEuGnuVb47wwgSTgdLEuPZH9V9RgdtfqyLHoXYS4dimGA8jEEreNi23SJZ4MuNiuvxLH639",
  "key13": "2qb8esFqoNk3cu5N3bYVW98wnWccp3jwpd8aoAGWa7CzEKFGQr4vB2EJkpJytWy8HzBNyfvvfSUsSaynsa2fDQpR",
  "key14": "57Rumw8Qzx4FDCVX6v6Ayx6uNn55VPnLXwbyi96A7jiHhkHRue9TeJbWk58QbxT1ggZYbwrc8GobFQuNevvw9G3Y",
  "key15": "2C6Wwm1AFJ8e4xHRwjbSRZybJPbgtAD2kfrpG7S8ZCfUSkisD549pR3DzoMfkqBrA9iegCUfJUteFom8rm7CPytz",
  "key16": "56gS8bUQYKADeU6MwxR36VEaq9B5CZJnf3WSNG5A5KtXG1sQ2XgZeyLdRYWyVbZQxZHdCtvCJrbwUy88rJvWRMHq",
  "key17": "3FaRFC8QHwB3pjAKmD46xwVG8jTXM8V9mzzvhQAxQ6mhYZH848ziujqZQpGWhDqjYF32zWtdfVpMsV59S6UPVCDZ",
  "key18": "2bJ8FYjTYWUBX56fGevWhYE42tJuQ4mBxoCdm1GGqwfB3ufPMDWb81ucy2Kwhf7tQe4Z8PgsWbVSRWEPcjiPd3g3",
  "key19": "63y1uTyPZyfWwtnkHk8fpSASvm6d8t4QBkg7Cjjq7ST2xAeW9PgwBjrT45UrnBZnsusWCdQ5nK5Gd4aHiGRZ9BFh",
  "key20": "53ACcFZQEgLo9JrQhrwEaAegnRLkHR5socL4n7npkpJaJbmXsxdwBDJGgpo32nnWJ1NRxcMKnkmxtFiHzZxhg7qj",
  "key21": "2ViPmtcy4EKEnNBDfSDjQv2jhzciSH7g2cmWZoNmSAFxc3mpah3FW1kZc3Ft6BgqkNhxLKW3DWpGiKpQtKZWauGq",
  "key22": "5Q4Bsmoryj712Dk1uxnHt7kc4GPNLZkvFaEazVJpbeaZts4NzVcoDXJfAMJpEkorUcuVr2E5YjBSLhQ7TG6moUno",
  "key23": "zXiHjiM97DesGUY7MnjhRy8DfVM4q2MPuxixVtm7kf3VDsuBYWCBYdYy2BiqCSDinGE1QXWCr4ESnjzMyeudz3s",
  "key24": "5HwYVrK4nU9KvDw4qCj2aESzVzAp3teXz41wtBgUZxaEtAbeUavA6qonLJnuEBzwz1zhpiwVS4KGq8bUVckCgjRZ",
  "key25": "5gFVjWixrKpcnb4n8TyVHHkCLwFJiPCWCMZh7nQ8KawddG3Epmxzgh8MCgnmH61GTrTPuoArH9g1PManvefEvtN",
  "key26": "3eaySNoojpsJWtbd4U4BtorafKCbtSDnJmGVF5tYBurmFrxBUeTQFZtThN1BXtBfX3Dr8nyXkNL7kgXqgtF6fBz9",
  "key27": "5wie8xuVhv7Dy78yeMWc2vuRZwfZhoZdUsMEQ7MRc26ZGvuouGxZC2Ri9vsyUwF2G66rUZoQar3Tk9sdjbZaDN2e",
  "key28": "5D7PeVeL4NX3P1gwfxfSfQVsUVppmjUn5W1CtvD9L7YGQm8Aj4UYpYVrxDPnhQ7aZjuYiM2v3P9Kyi5FGecVW2KP",
  "key29": "4e8i2LNqbCBL1a6w6prXo5y2cApsCcgh7XmQw8oQRur7ta8PY5jBaaG4ny1ao3oX77ahQyjoYvMfWNVneTTvv7JM",
  "key30": "51k6FGSwY6w9F2mxbMzcrVqEYFHJaesLXE4z5E7mLkjoovtbvn5371Gxe8DhFeuCJat4YP7wPDEiKMAe994uVXCc",
  "key31": "2EMrP9fCiCZhBXNPxsBuGGYfbz66qppNwxzTWXcHvRhoZxKVerwnpZNH5kFbRgNnoxVP6cQNGeoMMvS78aRvTBVU",
  "key32": "2XoUvjVzw1ftfFmCfUKcpM3Ws4Jwq8tNErkSBnTeUvUAiXmaxKX7jHEeoS18zeJ6jwyJkMoabVjNev5rKJN1yZLb",
  "key33": "61GHH4Lkb119sfuKmfo3c9A3T3stDEghHQS9qqb623qkscQUutnfe82zRM68G7UAieGy3aX993wt4SfgGLEQ7N2V",
  "key34": "3PLw1dPtnUWUdEmyDp7Ev8TmGHeE2TZ1biu5kD9T5yuJMMvRUdeZSKBqZhQSruiewZj5r83kvMW1SnoeTpEVDbCW",
  "key35": "2sBFkE3779S4qw63HrtGqNCgUjoRGwXfzAQDT7sW9Qozfrwm7QC1huVNFmXLKGr3GVKdpcczGVsTkH6pc4uVqta6",
  "key36": "rYiaqz6L1dMH52fjubY1V5Npk61osLGMSRr63qi8AHjE85bQGFDZEDgrzVaqkmhDHV8K8rgRrXcN9hKQys9KAJ2",
  "key37": "3twsVS9FMBCWqoUD9xWuQpp9sJgy35GEr9rLxkdshxbjLCptiM9PgRewVxRT4NBzxhPJ4xLV2rH2LR58Ys4FRUTb",
  "key38": "2wod1qYMrcwzm4SJKw7nfZ3YetDkABpgQ7v8PoKPup4nxWRkbLkQ7pBe3ppNd74inUR57rtP9oAwq3SdqAYpExZy",
  "key39": "5i4fZSdNpzR5t24zRkUZiLc6S2qC7fVkyHLMUW33rpSwA8CBXRo1RfFpaaFzUv6oF1HE1G5ZWmZ9hk7DsgEvXSNW",
  "key40": "2AhJsAcicei34kXb72ttxbm9ctnYB6jn2PVGWJNHjJBvJZRyi5zZPdLCENFqAiTq8LquMsGzEa1ZmSvuuCraC1CK",
  "key41": "5mvicN7DcE4bq286EDPKHTFui6oxyMJim79JGtVjkDzborpNBkprtYBe6r9AxUBfUqh7x4x3bgbpKcXMtVG3tvDv",
  "key42": "3wwQQiSvC4SUwx7QRbmvpA3j8mQE9QCCSzEKyCu2inxUmh3riMAyEEPUSK17gER3L736m8rRBXTTR7KdbmD9DmKj",
  "key43": "2ED7UEhMQEnymkGDVP4rKP9hH2cjPsPXJhiV1wWT8PBWfKqNKKFqgfzuUqc1Xr9KSk8s5T3aBYiTUhdhVdRwpFhj",
  "key44": "36cKojKVnCtfUmn2M2KXeFaB4XQxvAHBi8M82zNH8AFua8DMatX9SxKetdJeWrFABuKeUTBfszNz9faP9bcnknRa",
  "key45": "5raqRHbA9SvwMo72zpxQ1eKuyYhzHU5PAvgYErjghf37AxPN1qmEacsPqciRbtRRzgaQvZhCer42Cv1nruSQuqym"
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
