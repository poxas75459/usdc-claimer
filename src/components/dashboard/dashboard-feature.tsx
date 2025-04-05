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
    "3FkdXQrcYpHgh3TzXv3X5hdYn94WwpRLsPPvAhM5j5xKib7Ac4pew5UnKdvWCXCge5f5iwGHiKChtEG5RQQHvPbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GsN9NoFGoo4vYokLRonMKLPFAt5SS7wUZQjw57jFxYZEeEhHkAGdxy6zFS3VTMo1TbHFmxrANFoArbsgEcQqJWJ",
  "key1": "38M7j7pjNfqMNFMy4DTUmtr5FYDbg4S4pZEepHYyq2cnjmXCYo1UMEVfJkDtmJFPiwLdTVThQ8kegAggN3QpEycG",
  "key2": "4NfMiixT1z5V7p7s6sbBKcL5PV5uochMK6yqEMAK6Q9xD5on6R2yYSPyCuAMbwrSMoCrWnm8dxwJzpsYd4kPUdv9",
  "key3": "pLZTuiPxApxePVhFqgPWUsf5uaiWa3RkVJQswH5g7T32CbpSqdxJmi6ZP6LXPUsRNUcYyNgXP1eQgohsR7c9PaA",
  "key4": "3UK4CFarZYYstN5zovxt7fo8JydrrPHnKN6xhffKEyYPMM6HQorGFGqEbh5rqLKw7ZgdBGTMGM66UVPVKvR3uPT8",
  "key5": "4s3BV6wnhbo6wkKxUHqDkvZ6tCYnLUf8s2mnXkvBjoiRpCFo1gtHHrk9eK99audu5xiHrfYzscYV6Usv4QiXNZLN",
  "key6": "2uwdUosds4hJCJwqq5RYen6mTc4QHehBfU8St1GL9CUWUsKMYp82yR1armWAu9ccw6Ws3CBxqF6njBp4pZfoyCs2",
  "key7": "2RhsqJCHEhsUTDeE63ZGdnxm69YpSRL2aqWTAG2rEokxoxBTfxtqpvYcyTLyr5B8qGboCfsGzcohWSC8VZGNDBSo",
  "key8": "4ewa8ZKpgRXpqurb72UUK2CLksbQT5w5qnAS4DWN82EitRNot5AggDd1bBTo1YZHPSVxFG3jCfRtMWw5KNxTPHYo",
  "key9": "HptjmuNZH1kkmDyivn5w9mHAy5aQJv65gHhsnTWg3PY7Heh57mF57a4URYwXvyGMNbPbbC7W1vDg6pr9y23Vrid",
  "key10": "3C15hiPjJXxa5y7gychPs129Rr2J44WGaELtbFRZNkGNnbHjPs28PpRPEF4BjJZaj2qVKLTpZWQstSrokcUfYBrn",
  "key11": "5Ki87pdzcdM9u8RbS2C6cJhb33SmLVc8MF4DZQBZLv2nXRNiaHUnxgpdHwUsepp5dbgcneWgf3xXPdrZscP8hxsP",
  "key12": "21Mn7irnEDegQKs36iMFgH45r897wmGFMYcn5d75ZpqcotHdHm5TqNBMawzAZcAwGzXSYtuBng9fpbUK4vayDWFv",
  "key13": "2D2kZAT7pzxsuU9iRmff8Px8g39poh8JQjbCjWVuZPsTm4kxWHRhnsNBoZJoZBUzroRHK88x1Xzq3T6SBPqEAPmW",
  "key14": "5Ht7NYzATaqYK19Fc5YhkQiACUSBS3M9EwLsYQirgFkWnor5CKTKdKoYxxizgugFAGdxDbWNEVr8HVaRCEN3XoS1",
  "key15": "415hFCeukvhDtKyvY9bUK8tXe7vUFacT7ZYSjiJ5H5kdecyL9EHdKynZTv7p5EyPhrdNys2VwpN9s1JGcMDmuqxW",
  "key16": "5pQ6mdVSRDs3YaWDBtGy96cN6pH4WQaozcJCxWHs2CUgnbMZTV6gJRfdhvAibXgNJx61HjYeNcuCxQ9M4txDJPXF",
  "key17": "5dFRcsbcL8KN9exbvU8acJVqGXyr6dxffLQQzVgDXyYDY6yq3ZGBCHLUQNUoiYqXwzpQQxCixAH3mt9SttffeBY9",
  "key18": "2g6LCbFdTbHKSzL7UXydFZqfqxi1aQamHg7p7KNr6NboqWkLeTcts5DDKtqU2SWdMxNyRjsx57sBCB4vDTXYwFsv",
  "key19": "4n9euoxFZcp5SgwLAyjDNZwXYrJ1PatY2r8uEAE8Ei9dMXvQAokJhEN9paTdWvaogcghHixsirSDPiTcWqsKnpXx",
  "key20": "3K7LWTGi6bUVC9d8VqK1ND3U9HiNCqvpJTKL7mvqBz7JJnp9zMKqJQYV5R4aiDVLy5efHpJMX7uyz6GW3r3Y8zKs",
  "key21": "fi8DkLLgtxX1yjjmavZRWyPjRtqJFYSAuYftBgrKzCyqMMjsUr5ExSv1H1j76jjTXyaW4v7GyopUYNj7i8PW84v",
  "key22": "2KTgrCg6vJ3XoZ75bYTtPSBCH9SXoVa9kymYmt2PNhD3arRVja29fzAy7FPLY2rmzVty95Rm8CJiM1qF9bmYB77L",
  "key23": "2Wd9qLRNhLZrNzQdSXLPn1tYkTPh9mHudhtaj7hVfYzmG68cbq749qCUbMCuAdWJyUHzjjX9EcLPwz6XwUPeeT8n",
  "key24": "5WoxioSpCWSSrCCo27PNQJH5mfzVMtoGc6y6XpyM4uvgDLywRdi7Vmmw3eA2pPsQv7vS9CMrpX45YsiSU3VWGaiN",
  "key25": "H8eFbcX4FXBDjqzKyH59mYuvV1zULnEBcQMcoPJ56dAnccuaH8pGVG9tPpTgx2c2hsabYuJBHCGLz5uKWGwzeAx",
  "key26": "AbP8EL8WffgK95qZwn6odTsdMJquF5dusebZR8KQnzXmuP4mYfiyC8xd6KPrYcdehYQqwGEPSkLddwrBVYiGwyS",
  "key27": "598VRdoYXs7cQskH3dwdrEBjw1WYdythVCQ5oaRc4eXxfyBYGXwosEsk7EffQUhhCihbdEbaVkfsJWhwQ5SpBpzD",
  "key28": "3rDNh3MVwBuHMEn1sUgBUJjNgqtZBQF5tpZAiNpnoWy3e4qo5S1GkRAdzVw2uBfWMFPr88qCmiakykCqTwjKToHL",
  "key29": "5meg726KjAejAx5gzr76Z4RAmY2nzSsUVS9rgWrXEQbhbHtvpLur69uDuwtCsUiAQM2HqQxMiNux7cc5jMRXoe4q",
  "key30": "514BaXdFg9RHaZXXEtLub1ogW61H3Q3adCurkjZuXwkRXoUqd7AKWUoKcZecaPLVtq1QmNUPGaPafH3zJG9zTjZq",
  "key31": "5SXzkjpGSnP5TJWkykMh7RDy7FkG6mQGFjKKxwHZ6WVRX2u8AgqrE6wngjhPp4YSZQkwcYj6XVEK6ZqwWeKfxweu",
  "key32": "2DNrUYsai3MMwKZMJwgKC1JBQrjPFWRahj8jC4FjtwUyQEta8u3mYCiRHJuXNVBN6b9tVf9XxwM7s2o2ajDY7PMo",
  "key33": "5EbTZUhGxBJi8qNnu3tiuob7WJ4WX1Xi2x4UD3UuT6ghRbhxmBbwVqHjCjycj9fXCjjMJn1YszH8xuXrUUniZkAj",
  "key34": "5epnVJHHTP99aLUNHuqnXiiXQHW5DdP2dKGJ2MGmq5ZM7qAybuPQ9dg2HrmXX8VquAmvmXEgPFRwrDECh7hA8PyA",
  "key35": "4cURj4Mej9ZzqxTpMwyG5ExdSW9BNKXKhLoVM7KohoFU1AsDhr7zRLTWThoUCYzTpxF7i6rr2zkT9XdAW5FNjj9Y",
  "key36": "4efd3HGwv1HCF2ainXHaJC22VkSKu9qH5eLWsYrusDxYXZAf6YDAE5aUoJcE8T9FMKcwEYD9JPg1CVw5HsyEVFmR",
  "key37": "4gstiqSM9MTyQSWMzDDFe6tzG99tkNF7RkrCX1qYBmxt6ExuxH58Z3Nf6Y13tz3LUPt6pkQY4qH9UueTqzyqk8ss",
  "key38": "5wMRXyhYMou1r7VusfUmQoQgeGoySsiQcVx5AmY9V5fteS61YN1N1zUrQbnpfbNMBtdB2zbEFezQ9TcoC3rGuMJQ",
  "key39": "5DbG3HwukXHu2txHS8WGkuQpFtEEfSFuQdzgEpmTpx2rjS2eFPMmj1tSxncwtfeRx35k3ST9qjXy5FjkPmk56ENg"
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
