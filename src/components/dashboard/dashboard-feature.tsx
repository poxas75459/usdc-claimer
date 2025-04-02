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
    "5hQk5L189wysZjibsFApfTp5xPnckjtGtMMhL8pJcPePFPj4bCRtodVPihTpcHdsRf4tjWd3VKRNc5RwE12sUpXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HtxDqqWi6GmKxn2HR6ibuw5ZwWWXuCYPsuCJ1oZfoP9Foy3dvCrM1sbYXsSGG4Cb41dfrhaq2HMxUuxdqtPAY6j",
  "key1": "5zLoNead4ovJ8wbtAPkreYgoyXpPSwqvJ9ctZgHRZUTrqMWeXvq2h3YeZbR4Z5eZRi1gsC59qrcXoz3pjTSgTa9m",
  "key2": "57WyxkTpBtvPXpSdAgWBgiZWo5gZk4vKxAZYRjQsbK5RRHZuqoxXs5gpZ5MkiLgcCzghN7qckrzbo5pwz65u5FHn",
  "key3": "3NE7XfmRUHPwdsUhJsHLWjddKYS2RtEe3TVZPWz8w9EGxaXeJvpW3LG529Fv2NVNmxiBoctHzNPXsiumHtk4f8tB",
  "key4": "3bxFE8M8iMpUaqXn2kwhVhRXRxc3Rmmj9vhU1yVWsMnEq6uLGYwsyx8nzZdwv627uqHKQFYyMQHTZ4bsmUckbiUY",
  "key5": "55PJhqWspJoDcSBt1ewaoC7gNBncNKyTKFXbRzXhDYpKsbMbCUF76Q1Chev1rqWg6FtDJxgNdqgQPqcWsvodqbgE",
  "key6": "5hJkTLKNsTd5hjF94aUHgw3AutDk6jPK1HQBL5rGLpNLnmNK59vavWxM9SDoHtbomz2Cb74MuBthsYs5DpPyr8q7",
  "key7": "4UapiUBajrNtYGZgTtTAUdi72Wb4Cmz6us9WiBiiZJqfB1o2firib4cA8HeXsXP4RtJ88ymrAx9PNFcUm8pRWZri",
  "key8": "p71iGQtUFoxyp8b9oncNJwLVs9t8U2otQSzN8xhKP1r3fjwuzDQ1BtxkBSdV5ASQ5g11KY5dmGPWiSKcoDm4c2T",
  "key9": "3RfkgrT3CCo2Eh2CSEUEXW52yULE2Mtm2Zx2Wn1hNAFdLysc2nQpvtzoAA3rWaX3Q8dYpghHz58kQ9x7VvKhjQxf",
  "key10": "4ES6AWSk8ygV5XJzKJNyuA1VWJCtTqUsyPj7Q6JypamFyQBG65gbjNdsnKpTB1tg1cqbgR1UgCpZM14Ni7uBKMLD",
  "key11": "2d9v2U1sg1PEnoGnoXYcPGxBnGudaam464sMut9rGQUaC6PtyiGWf6N7qTBg7tjFsG7MJTcZ5NnRTDfaRshg9Ghs",
  "key12": "3cLKwtvankYic94359wRDKpJyZjNZAPE96NGn3t8VFcCcBEKDcXzYhrV1tZUTbHmVVYUbNR74fz9iJ7ksEBhwTSz",
  "key13": "4BrT93458xbwBFnC96TYvKLxkJvSc8CJMCJELH2UbtLv1S7Z2XsLX6PNe5WxmxWAURDeow5PhBtFDXs4r63Zu2SV",
  "key14": "32XqVFAFkmaoVtwnE5YfgPzGjQtzrdNJNWC3hWpevHzEc7B4MbxBndV74vaUzCMZZroieALQFf3YfM3VMZSEejkc",
  "key15": "8Z6UxizndLSmuZKKv4B1gUtH1FJpVU6BF2Y9g2KZpqgrV5mZhjeRf5jz1tF7LKYqqUtZp3ZbUNeCdahbmbp7h9L",
  "key16": "3L8EQg3wo6ZfELe8HcABneksyXEPzNz8JXkSntwXeQmV6RG84LGi538ev7ed1wyc1ESE8Tr1TkbXHkF1SM55T3Zc",
  "key17": "4TUCa1Ae8Uac611M5CNsmck7QKfhKewePJQKmS76xuQznNeEXwEoWVXCfqfQokvcuawtGUf7GGVJe6XJJNcfsdC5",
  "key18": "3DNE7tSJ9qtangU4uDPc6uMZS2eyXnGEncc3AbEtc7iz9XPZH9YBgbDo2dtZThdoQFqqsGsFRrGjU2nSrB2DvzFu",
  "key19": "E1u4vAYgqnJbhk795f6LzzXTaN2Kvprdd6P37muT6EN3M9A46gGe8cNoWTf3h1X82jYdmPupYsg4WvCKZRB1VZX",
  "key20": "455KKKYuYBAGgC3KrCBCANsLke6Wjj16u894BbgHDbPhSypPYjVdHGXCcR5tzdnhsSUPUtBRweZ3sqL1PUVi6RAV",
  "key21": "D16Qajqz787AtZMNav2G5pvXRcCmCuB2ddkeZgJytP7HJK8QdEJqW8NhK71Nv9WB9bvU5RHVsRGcvHkWE8yjAqu",
  "key22": "35qD5b3uTdB8Ad6h7Y9Ck8sonkbrkuyDxbjgnNumWLmbwqSgTNFFojaqp1v8kqifbJozWoJ3RS9PdoXQVtTMpwxv",
  "key23": "3xjwdvn99NgHgDLmwKPi5K22ARyyMJbYvsKgx11V82GG6qFRd9bxDpNT9K9tSVKm2Cs1H1Px25d4zkqMGwpUv9v9",
  "key24": "499oX16b6xq42UWvRJHqtTHx2wsLPb5iNutPoubm6g3KiYBVmSCTdV6bkEfdTtXddnxaqqzSAzZNudmn6XQn46d5",
  "key25": "4DghXsXeUzC9E17LBKmSu4aoHfKj3bc2RkNjcajmv72jZvgMGbYPZa59Yv1MPbquEcMaArNggoyVQbqv1tKiT96m",
  "key26": "4MrU6gmbfNLz33a1vuCZS4zYsJeddyMRPuiFfHMbuo8zXx3t3PHqhtBK4Mc1gGxJS6b3PevbQbnN4ck9Vm9e3m16",
  "key27": "3XiteEZrQHERiZhUiZBWpr1JLoezcMM7Zb5VVdbM4j95nNwXgxa6qLz4pJG4oRG7wYPvQPCGtsjhayjSSmBgPJu7",
  "key28": "5GJ35peUijxzzKW6UCf2J6gWCiuqB4FYJPwzjy4vKtu3dvSbwtKbH5Ge4wYN77D8u2QVMCSpNsb9pWE8LQ31amS5",
  "key29": "2tMPj6AjJpcGFQmQuCnGTH3yNihz4b4MYcC2Je4QrtKwF2QGmvWKjW4k9NunSTkFx5mCtnzz5UUZsXqZxEmwYEwu",
  "key30": "dc1P4TFi8BjTjbp9pZUqvvefrrWxoLxN267fojLU1HC7UGMYP4j7VsC5beMBYRdqFrWVDck1En3JXufNzHUD4sr",
  "key31": "3EydcLp7EMjXzqd1tLGsGUznsb5ob6D7C4YBqPQRNGkKHNEbGZrfsQodxh7BovTvXdqUyfCorvmT5RBkP1kRLpPV",
  "key32": "2S2utRTE1K3UDSx1YrPabL7b6MNqVoHicMzPGnFEpQ7EJw8QgKRu9wvzrqT3WnMrAf2Xbw47JNE1SyshJ1urKYyZ",
  "key33": "4VUtXJUrjL4uMsehRLZHmkZzNaZsGLMdGjniVwdpSVEshYrYy42EWZRBjqgk92hAZiD9ufxsfnWToNLdc4Xjc9M5",
  "key34": "41yTRcsfkt1mKswYJU52x4Smicy4bmTz2pEfve47ryy3tU53BDG6x5Aomq5C9PAjKQAMHFGZQQryp4BiVRrvU2d2",
  "key35": "5Bm8ugfaMbiF8S9dr2nZ8GGbDSqDGKGgeETLb2m8W9cJzxTwNJDTTWNc1JcTtNmZfYgM8m9JKQeZexTyjhP7WoZ1",
  "key36": "ipfnQLQfoAy93C8vxy9PBrq6gYvf7RAtXjn4PUgyPBaxN86RPdJrW7qxWqaTA3iJszrx7x7mxG6PGg5WihYR3S2",
  "key37": "32iKutH1yKABZKSAM2FmM8LVocq327Fp5PC4tivDXDGzp5biN6uVRzyc5zexgZ5FHy5QjbTZuh6HbYKjkSEQQi4n",
  "key38": "3YAqVv1GWk7NAbjUPbKYM4HK6NVQJzuo1B4a1U7NGy2ZDfSPCnMDASNA2JoKYxNBPfTdH6FroMQ9uddD6qPHkAvJ",
  "key39": "4ub5d9CcYjJ8d4gzGmNYbD5PT2GjtCijzCZiadan81tkcZjiDWbxStzZRpbFSyWYNSuEDG8CvR7J3PydzutarDBW",
  "key40": "3o8gmPD2q3rFuueu7QMiEwrMHLCGdguvq2FyVYJuTJYmN6Gs8m2mmX9vwBDoBCc8xRRHXqxhiMjAVwawaAePvT73",
  "key41": "FyywEbZ4sSQqttXcHvwMu4nHj44EpjPQa1NrLdwj3tEkYPrXWRmhAcZNPCke1PTWk6JHsC3aV5BSD3wrpAaZT6q",
  "key42": "VeQLb5xqDahw7zaFWifjtZ5bgmxc8VdgqUCAy1Fsak3w1AAH3CK5hequfxxkS7rREo5EV6rtaE6CVwxhtZXnFfe",
  "key43": "4fLxA6Cd1dmyyCgd72hUWrD87p9hXFC1ju2RhpeGpEat5g9g8kC2uZ9Mp7v2d77U8gZdwymJLE27XuXYgMiTUnoF",
  "key44": "5pdVSTNYEDzYLX3FEuYACiu6YfTeEWgRzmGwyhnzHcK5RtWv2CgJqRTc4HVnw1t2aR9vFSL4LwR2mhJXnnn3NyrV",
  "key45": "621Kv3VwfheJZsSabJRZ4MgVNy97oBeUca6ob2ropfYzwMa6tt6ee5BoaugyzvzHUNi8w3umzWBhBV4dqoryfUrt",
  "key46": "5nk2eQckMgvp12hnE4xNyLycL8winf2xucQhvy3YGh4U2Q2xQSw1gtmKjAmCpCtg2zGtRcwFGxdiF5AJFkUcHkBn",
  "key47": "3H9rZ5wjTvopsM4w1MDR91jPen4T9J9xtEfrfUHEuXtCu34PybRZ1eksorn2dkC7JhP6HDqmumTK89owvRDMp4DM",
  "key48": "idYqbzhh6zkgrjyTLyax9EQRAw2WQXebnZWBvomhWt9RRF5RK9YXwawV5reFUCKYYEv5EBo24wmJRfJdm7mPHgU"
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
