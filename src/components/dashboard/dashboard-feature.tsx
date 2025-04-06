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
    "3WWjXb8P36BrKsgaTa799QmcshmR36n4GFLvWymHSeFkN7xahxsv5xXrRt2D69v6Zpom1TSrVhjvA95GHgLwXVQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KAdLDCDHkX8Qxek7K8jYzXwru4vifiKX24SAcgu7Ln8Wb5oYzvzjexWfu1a67AZ25PgwV2HHC7RCWuDrDTqAnhM",
  "key1": "2YsmWEdxF4ypVHwX86BVT3499rVfkMJGPEKmhcpmc5TRenipcTweY68xevMS6fdj7ZA19uZ5EjVJpEav9G5BJQ5F",
  "key2": "3LoeQgynwAHK1LWUkJDuMGGfkDCHrnAmT9KidZC1XzGZKyfg4QvYEFDBUMGDRkk24Z6ABmnb2hk81S3LPrMpggmN",
  "key3": "3DUSkoZqvSguGPzwcyqHFeYZfnN9wuittvxFqAzh3cxf19d9345BMLP3csk3R64hAe7h2RABCGaLx3sQorbbpmgh",
  "key4": "x7pkgG7KRxDXyTTTEjzonq1zh6x6bf9Gr7a8TvjhUdDD72mNt7hDs4BonKAJwUP2LATknGj5ZmCDVpeM6GnhnKF",
  "key5": "5uJTrX4x6poQzdQ9HPYGQ6WfA7wC5zHzYpTuBP2GTL36zSzoBuDy8waPijVsrdSTFqHFBcbUEtwQqY5oLwZ3wqdf",
  "key6": "2CY3ntbdSxTtpq3p6JchqpnQyJ9YmSAi5MGp251aukXUwy9eh3R3a6kC3XcvBgvT4gGmNTPCcM3pbMQJSpLUV9WV",
  "key7": "2gco2DnJFoECMyza2M6dA4XjBgLrWaqVJNqJdX6mrK71Cgbsea1FgMWZjd1Gkri6veGCaPNXw2qi4FeoZJrPcC3c",
  "key8": "4QrtYPrPxCthex6yKXn9Y1qxT5xyBbUfXBdn5F21gwFLMhPYjyfum7NNbMSzoasRfv2mn1JoCAjp25rUTXjyLsAJ",
  "key9": "ADbHrVSbMF6XJs6eVouvyeG3k5JktYvscMfrNu5zb34aGfW2MPrg29stFf62GiK2zFENnEQDQBQ99CP3PdQCafj",
  "key10": "4i3xstPdcLfxS3tvuLB1WA8QrBZ38drSKgHboq4bXb54NwgMm1BYbAxcyWBdg4v8kffPcmShPJLQufi8sAKJrPuF",
  "key11": "2aeYDPqUsNdxvZX8K6pn1tA5a5wi8QXpjWbPiBmNA8FSpMBs7CCSUnbXa9HYhqfGiPwjHwPcX8VuEnS8fuezemQx",
  "key12": "3V7ZXuctvPQJMb6yMCPyNnkyaJzxZzBuQX9UP6TTQufiLnt5UqQLQGpG8iCpzokGzsx1F1fMh8Jfqk87pnrNscQB",
  "key13": "24AwPfrA6RNbbxRXixUzfNCjKG3CgL7yGdrDmqr96U9Dpsg8mdbm9nSkHjWNRnddxrV1F7sgwGBSC5xErC27oraL",
  "key14": "5i6gBbWWmtr9BawUonvcLyx9sN2PFzECihdX3Lw9zpjqvfVWCmmFnhidb96hMQuiR7LFXGQ44zHjqRApUjvxfDzz",
  "key15": "3is3fN1PLZMTFktmVS2H7U6Ya9D6jj49Rv7gZMKgyBPCnbNCp9zXJbfEQvV7HK9wUe9xL6p4LMTqYguj646SLZ1M",
  "key16": "5Vy7ymB7gu5bUwgfRwaA9eFWNJYghmUswDYJQiMXuyKvfo1mLjPVNoz9HFV51kzV4yooBKXVPSUAiiTa39dbpPbP",
  "key17": "52NhrmS6ENM9TQJDkLmRAAshFDMkaNtksRajMXb7QKEGS3YemrPVMsaffA9eL4MECkNANk8DDQbWjUWra2QrwPsp",
  "key18": "5YsBq3hGwR6oVXui9bJCQ29vb7cu9dA2me7TR7Wnv58gUvoqFxJEmACuC4JNtjaJeNUwkDgBPtusm3vy6wYBib4j",
  "key19": "411bEEtWLcTKSPHktpeFmtPckfqpPQ353yhHEYTChDw4vLnjUjMYzd51jHt8gJ5dgVj9iueAifcDXToqNHtaJRvF",
  "key20": "PGqGssUoChawDeWTNqnafz3EgRaGTrMSSSpmGqNZQoqhkdVNKpWxkH2HWnoS2nvJy8RH3j1TBfdZfxTTmynFbZT",
  "key21": "5GFWEqxnFCVRopN1XVFBhNXEQ7NV2XENNg3Y6yxjS5girB7oYMSBdNaoQPugWwWgNu9rM7o3cXi3qKvdsupecC5b",
  "key22": "4FJYFpf9oyHoM2QD1DBbG3TBW7U9Ndq3csxQQPRwbgHGHVGkZcDMwhrsTB77zJQmY4fK1RYP7DdUH5sYToGbaZ8y",
  "key23": "5PuACThJFEyXv9xHbsVAk2sk8st9e5P6zNu1CnU1LK15TDwfxxXkDc4WhQBhDvQ7hz2MzEhDWSx2cMF5ikFjfHyL",
  "key24": "31M6roP2yvfZYYZ99yNUp4c36qviVLScPcPYbZqu1BCCugyXPPBX8XXA7Ay9Vse44xHcjQzRbLsBncTBDYBPRSbX",
  "key25": "67Sk2mUWwTipK8TjQtBEFBFwAQUx7383aj85uN58M3t2J6Wofwk3CwwA7dCHMdYVnUinwV9FTVSF721gwyW4U5Za",
  "key26": "5jJXPH7gyQ6JiojGyKB8n1ZpYfHg8ifrTDQwCEP5ZBvAUfFdbFukoyDcwNTWmXKv1xgNbSBFvH9f8D311ciecB9u",
  "key27": "3uY7M68nGYR2pR5LYzfU49KMsTqCjTDMEn4KrcWmMbbQjcTXhiLTusrSm1nyGEV1wnrm8uKFATEfHSBWVhwDifgr",
  "key28": "4RYqRj7th9ih3HUdTarLT4VE98HYbT7cqhNhGBfMX7J5rxX3bq1yuSirCVfQYyDzesmMNEJJ6d1EGNUqJyN4Y8pk",
  "key29": "Qs72iT2whzeazBkPeTrhHUvTrBGubBX7igEGASj2hGM4ZpjGeh2wPW1QdLu8gq6LCFsreBqtGw4PbPo1egBxyvF",
  "key30": "5Ni1dgEZuLipYXkoMDBQCfSaHXCu8M4rxvZ5meTrYJwHay28uVMmpn2WDRVZZJdnfzxk9BPtP3VDjU8iX8KE21pX",
  "key31": "41zDNdBYdRVoen3txZzvcqprCKTaM5B4NjAbZptYpLy7HtxboZ22TRtcUHnYXQ4jea535vQgcDYh8jchQjV5mVBz",
  "key32": "3HnMNfQo2Z3arqbxZVmUjS3tcCMUevzR99fHQitv7F3uy2tQumXnNdh76uZ5ca62UZMncwFUka1TT9fvCTWyxJ7R",
  "key33": "3zUqFyHroP18ZiqPzsnLJHxNGaZzr8MLJxEhH92NJe484Z6T4XJeqwncqud4TpZT1P67A3JLHXMiMyMMu86HTjVV",
  "key34": "62X5UJjvPgF3gBzFDtDWZpJt54ncwwXnzbotoUioMWKjXpG8ByRbpXqgKqkvdMrZTTpj2WVYCWAv4vvvHETfDau8",
  "key35": "2WfpdZMYpvkU9m5uVXXSqVZetnrvSaSXaFfm2daU3cxydYrhYggpACcXS4b9D8kfwQcvh63if6MmL6bhVfcUGnZN",
  "key36": "3kdopMMudUxZ9jeuAoH7RyFuJPWtB6QSnnqL6CDBH7NkubRomLc4uxDiaTb7CQM1Rb57DMUsuvMd3Vsgrn8tWs6W",
  "key37": "RcQrsmG9u5KzrP1MMZ7Fkxcdtu51DeZ9BhuVdfC9u8ZpZPg5FkbM7GLbqjq6SkbduhzrbBpZscRW3roZ4yhBV14",
  "key38": "3uX7vieezFyhvh52d2crMmpvPeRXuD7DQcveFuHP3KPcq34T6g4VDyEAhChBuemc5SYGvsRYvDJTc8mqoB7uMGLM",
  "key39": "cZwPzjcb92N9nRFcmYXkZdWDBdMKzssyLYVtuCynGGfCW4TutFTjbonrVKkYZYkuZeEtx4CZNLXumVax95TPYrC"
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
