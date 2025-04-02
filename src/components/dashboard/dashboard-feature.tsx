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
    "4RZo3vQ5eemX4cKKs9geP6ThAeMZ2hGWEBsWcNRtnsDHQfY2orDoz2uwGTZTz8nHuFaSjsztUs5FSWkw3XaCyr6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mHBkCjPTEBEnkJaSX7S1hYYAo4y3eornMQ9a1EKqMxYJhpskUjix6BUmaQq6ksZioBuwgmEeQvqiMb56offx6FT",
  "key1": "3gjx9wrciEVsFqvhmdBb9q4sY3ZkY1TJ9aNNQ5TG6m7UTcqQVhZHyKjJLcWRjekjgbY94zWhb5MeAKgoFtUYnrg",
  "key2": "2dLHKihiUWkJFzTZpgyi1QBzJcuMEWqAoAggsnhY1mpPA6RmRLE654GfRYLGiw2GZppcEeGYh2wKvmhEq19HjXLQ",
  "key3": "2pEWFFMyeVc8zrowqNYq8Tw2qDacA85dnpRAVUKdBUGXXaLGbqM2yJpmwHksoATmjRvs3F94KUEmMjoj5pDVF9TX",
  "key4": "2VKaqrVtPaPsZ7MywH57d9T4HZNEf89ndorGVzSFypK8VE66mkh67jHMKL7owd2P3ZoWaLQ69yeUUVqY7AiPDZMT",
  "key5": "5Nx2tqQ9KbDKnHYuectChi2KL7NkPkP75ZNtt1U25vkfrjw22CMGhRnTkrSmt3kyGoCxWtuzfz7PH9R5Hrfij5bs",
  "key6": "2uGNG3y7xcM3R777rKxc8Px3Cvn2QBviKM6bQiLZ8ruFDBXnC73qL2uxHD5ayN5G1RxfqbrLsYdsFAD4dB2JuGty",
  "key7": "3xUFRqoAHwYF8wuUni6fs8zT4kFfX8kdV4c45uYXsvUe6FuWQhUjrXb8NrLV1hXeALgpx9hdpPxeZFEZvLQpAPUn",
  "key8": "nXgVgU6cLUPhiBrR6p1Aazf8hMDWs2ATpDCCjQwV5phJZVKZfHchx31cKa1CE6JBjzhcE3CJhnM4qVHwgrHC2kv",
  "key9": "3xrGYgHVH2XjoqTQTPuaK9BzCui9aCWfja44asybvf1Zj1RFcdihbgHQqEjSyEQ9CQ1q4JHXu551Fd6r4zfuW2G8",
  "key10": "2iUJezGTJLzmekVnEqUr6bYswJz5tg9HXdRboQyLb393U9TZxB8VxhShSb2Cpq9dLEJWk3Ji7seZdViqhU6AKmwQ",
  "key11": "KEv1o2HWp3y349AqHUNAEFyVUqYWS6E5LjsPk2qcbKgJ7v6M4rmmiTqmTZYbEnRSPoQoNRnwFvGuvmMQkpe2AY5",
  "key12": "5M2kXpzQXZ7jEvBWJwLhgoUHMdmVfDXJrdjHzapeUk9sqyEJ9mmU7cVZu8bC7xEw6WmyKcNPNtgNus1y5ztXgzkd",
  "key13": "4NcXQHGLzSW5ZsqnGE4zaLCczgA53jQUywBKRSwA7ccwo9Ho5rJLYavyis5khn8fPoiBayizmuYky2tFqV4t8hpE",
  "key14": "39rLoaGMFfmfxsW3U83EHekRFUHtoGn2BwnX8ywfqho2Ut4w7rqpnsLX2tf5RZJ2uNrwL1cEYkvZwnw8aQZFrCJK",
  "key15": "5KsPEqH3dcnfgQ2yGvviyTdnKQfVHbkyHEdkmh3QEoJcsr9eZrkYVJz1cQXkKPvGUQWYRU5mqvwPYdCGbcgSmHk3",
  "key16": "3kfgee8L6EnSeMGtyUdnfbaCTokDozoyGk3wZDmX7BZJ6J6k3eorjRe2Jkh14mzqwhxVY5H6KPvQKMhznmUPjDAV",
  "key17": "CuRLCkhyNTMjRtGhJFhn1nXyR3VyD7fGorbXnDCLxni1egSNfZRHTkqgbbZsY6Q86k7NqCHRM8AZ2XeYhUxkB9K",
  "key18": "2JmRy21h8qbY37KrrQcmLmHzRcSkGxUy2Pd7kjH3phj23jEAswLPbJYCieQDjcvgjJG8Y2rBZ8EoJfEzGCgVg2ZU",
  "key19": "33MyNDxsbVbeLmpbBTZP57GChcqZhatv4FGucbM5WeatTHZx4dsEgAdLHPCxdnWweR7EFnhBTJSVc2SEiU9GGhJE",
  "key20": "Spb8GrkKg2374hLM1YcWLRexxy7TVS1TraoRfkwKWqT2VRsp62ddM4nSrpq8WFMAkrWiLT7JwZ9P9KkHF4EjozK",
  "key21": "2ag9UZZMJnua8wny5Bkw9EWk7hepoDZ8rKVoj7Va5QKL3CLth2v5j5RJm4Q7qJUYzsskaXXq1dbShA82FMrpf8GV",
  "key22": "5UMWDq3SBsVMXjEix78or7XgN4D3kFd86dZ9pnxPLBXS6B4oMUFSKWmEJ8Bv1a4Tv4WirYdNJZciyatqe9uF1bgW",
  "key23": "5UeXpgAhmAYuZ1B8nUPiQRmfefbvsvW1nuN5nM5sUUQcFueVwhqY3BBKGztKSDWHtR8HzUtpJzdYSPApq5TXwGiv",
  "key24": "ZDQGks4xVV8X9xyjEaPw8fVqVvXWxqnytUt2pw99w6sgUefcv9oaiv3QNxM3kyuAs4zBP63pBnFNHkjm4VBCbeP",
  "key25": "3Fbvj9q2JBwcgYLJVJwDeDmv5aGiVVt44WUDkLNHGRRrSCA7QVRLAwgxmFqvMaNtCxSStUz3hW6UhkHQHGJEWswT",
  "key26": "4tqKfqD2yYZbHzYWBqpnFxA5TqPKK4XcaHw3A6RhQhjJwymC5X9rRce7bK8qn3F8wLsJbxmKwX5eKHWayyFYk59H",
  "key27": "3LC3jF2BwRenYmyVboy7JAqG59NrbydBsCkSVgq8j81XrR3mvXKK7xCxb4ghvWjSLRCnqkuRHf5gbUC6XrqYs1Fc",
  "key28": "4XTRPoHdfoXZBAHKsPRmZb6Sjs6estvLWHHTC3TFfSdCEcndVLdc9k14Czi9wVXvnup3rEFfhAtML1MzbkRjXksD",
  "key29": "javBcVtygnT5iYM7zPTHWQ3GF2iYDu3Z7rE4sg6J7Sm3UyBEp15PfG1eVH4QQzUVZjsUAv8KPEEnUDmMP2AZGhn",
  "key30": "2hdVbEtPRbxyndGFv1giSpKdC945G8btLvvAp4Nkz9mJQnvM4gGa68PU7Mxd3gMyjusbVGRK1o4sMvpQhxUPk7JZ",
  "key31": "3GJkBn4Fmo5py7eB4mouGNb4QAijW2mW1bLjXhxQRwvQjPVo97nuRNDGjChSxXwg1ChsiD9aP8tTvLGPPQL9exy3",
  "key32": "A33uhkicWjcqCU8fdg3SJs75bNa5qSBWnJcZjWRsBkS1FzuJ276sZJhFcob7sYmEvjm4xBXXdBY4PuyShGEXRtU",
  "key33": "3iEd6ETyh6kdSefhUwdsK5an8HL6ZaHguGXf14fJZwQNibQM5LfcaabynJoqXfQuDymssqSNM3KjHwQkTjbNiv2A",
  "key34": "5H2JSLcZonkvwMuhc78kxMEntSJuq4hSGLPiS632oP6867nVPVrxa1FvdGQ9ajc83hqjrAocvrSkJzxPpiL5DWNj",
  "key35": "3YBaaoSLxNe3E8Gr38Frz7hCAuMx3q3iCtGf7ZCZDhxXS3ndoLXS5um61uiGswbUCtq8gLR8UJYkfip63FRu9qMT",
  "key36": "2rF2X8zstj8bZH4zg58wYJECu17xnB91sHLv45BR35b7kH4wRrqMbg8MwaFuemuF2FRyBM4xxig4ftWsSxdKHu3k",
  "key37": "h7hTyp7mfDZJy1xYVxmXUvktZb2SLQxt1yw4zAUHfYwNJ2cUNNACQ4FVRPYeeGxFNGsc9nYnjE8hiuvLeGw4uH9",
  "key38": "5b67GxF6S1H6CFdPjhdcaxNhZVy2TiTkDNkR8iZyoZkYeeHV369Sio75RovzRSgB7DpqmwEwiQpZ1CC4jaQi28BX",
  "key39": "4ZgsVP2kdVVZpswUHHExRBriHkdmScqM9LCDEtLGRUiodBXbm32vfd6Un139VKMTvVpyToT6Tw2LkHzkFkC9dQ5x",
  "key40": "5qSTMMLTVAuCVG3TByK8QSoYvjQzDEPyLQyfAUZTr7PgPZC7SFakcaVBMySoQqR5TRxDFRfaAxVoK7jMmaUREoB6",
  "key41": "4EpiFWMDQ4NwB8oDbNNFg6LK5Qe2b2YQPwjKerqv6KwHuS4TLCUaFUXgN58T3eqUK2cji8dahSWdQPSZ5xzwCTz",
  "key42": "5eNNiQCBJWGdbGXJUA67qbQL7DBNnSzLoMB2zHMShprHcfzAXBFvVLuTKiN5vmGDC2zhx7dK7HcvnuS8cFB2sZdv",
  "key43": "2yoJ9TqscdjtjsCMC14tTxUh5qhpWgHJdkB4dVGrkqyxcMPBPT8PDw78vy91W4YqtEKYk5MQ4miEpXndYovvxAEV",
  "key44": "9jxZBf1D1SeJKwhZxV8fgBD2HWEayvDif3fyXMRazb2Q8tLHrSUatz4e86behqK9zH7USwrLbFj1vje52YunKs2",
  "key45": "3LZEQjJZSUgTH2CjdsotrmWWw38hAwNn3Aw5hCTcqXpyQH2rCNGteuqo1zZ2YCbwwFGg2SJrzQp9iLpqHYHdWE8P"
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
