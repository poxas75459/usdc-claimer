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
    "5QDHjjrvwfxGHSj2LB8NYtLgzjMc4yFeq8ENni3RZNC7etnhKHRVFJ3RuangwmaqN3qbV9bbnQX8CyCWhyfoXwLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F44FJHH5YYQafkxj32Jv7CCYJ8Bq3h4BCNqo4kLkKdDHXjdMUwgAqgmwQnJMMcCBCv3eBdk8cBGsU1amrmW4JEk",
  "key1": "64Hf6DDwDYLSxWugoukZapZNZ9Dcg3Y4DwEBTf7xCf3kXGsfxH3wvu2NYkSqAbnvkNhgow2znWcJf2fXnvfUdeh5",
  "key2": "66qPY6VQtddAY1jKDspg7ttDhUKY7kz93WWP2Wvux27ghjub3ZKi6PmppV9anUwmQNDXEQTAerMFnqRZdaoPnz4n",
  "key3": "3mrGzMG8Q3Amzjyk4XHkj1muFHYjBSn3tD3JjTk9V4gMgVZTWAetHHf8x4pd4P5eHdJ3jaKSSMPgVfno9YWUHJQe",
  "key4": "T4ueuLhckVofER2Mphie3VqcSdk1ch65DdBmY63e7SzQKakZC7WTZsxVTy9HMrKXa1Em2QWEXUFNHjywJtXm5T3",
  "key5": "2ppBZGufAyDnJAHGN47WVPk1hKHKTnonoiEH31vj81ixevNMtSoaRRuzrpmYrQ71bWQryXps96x7RfFsaMYTrxiE",
  "key6": "2Vw7TwjpcCPaZmvtUh8YYza11cQEP5F7E7Ayy2f4JtUQWKxm7emizeKBKtbyUPKh4yooAToGL7d96RH5NE1sPX5Y",
  "key7": "54AoQycb7ATaHF1HSQJqi97EQYfouj5LstBmiHKVDESD7EzVVrWRVtY1Ea4VYHzqALW68v153Wg1cX3DFvsiXyWf",
  "key8": "n7p4wUyQSsvbAqsnNM63nopUJgbkPfzvgox94hHMwJ1z4D7Kf5J3BAGcd8EeMFN2bipsCMLiew3Mbo2qrXmmpX9",
  "key9": "2xHF26Uj55dCvCth9Nq92qRNV66eMJxRTE51eBDyybfLwDfnvmSgDQiebtBDZDnd2ZDdzEtebSr2fuVHuSo1Ereb",
  "key10": "5YFRWmciZ4jzGKsKCBeeW8UgTXtyeX6NqchPNnYMjRYi5kCB65ktTSJTUMfR9RHhnsRoFbfcj5gHPYdjK7xy2q9F",
  "key11": "aJhVMWsTaaPgriyu1YN6jvrFt4jqkijUg8226QSFoWPEpe8JksEYjoxea6gs64hDQfJjYz4ozNWFi7tBGWpew7s",
  "key12": "2JpP5MpSGNmNLwiTRFceHZbze37ZQh3ubnd3wLipaorhFhrHDxv9FLGfxL4kwdBWNcKCcsuzJhze1xiPu2YjbCLY",
  "key13": "4JuQW5bt4GNFFLtqm3VrrrFFUrfzyZNbuqmhneMb8EGMfgsBSauC2MXxiheZBGq2LVFdH11TbDxaFNGAJEG2wYTR",
  "key14": "3SmWNUb7GFUqQ65Q5zHF3PgAsiCvXbbKJttEVtHVVaURPxSr2mNEdAs6Dgz5RWEAUwW9Srn7jTKtRKXBHGQZQzG6",
  "key15": "3n2W3VLMJHHYRtxADMSKQSycEXueNmEzcL2m1d1xECE9B4wAZEbxkF2VwJgBakbLhMrtNmTXvZYNY7X9UpUX4f7n",
  "key16": "5nLPhqA7xfGabvTtCGsAbWck3A9we2Z2hFCL4LQmb6NTsmAto2EhtPmwUKW19UEitFv6fA85TQJTG8XNPhhWRTSC",
  "key17": "Z5pC19QdrLBr1vU66R9wiDKdpsLCsoVswHGaYX7JRW3L871YwEtvMNnAFkpxcYt6bjAwRW2iPnMwvqzEztXaxPA",
  "key18": "2SiLaDVWTKVdM21AWziWjqXaSUu4zS51kSFQXnJp6iBz8JoeS3zDYMVmc8bUNYRiJCwFYAGkCeH4RAP6yfWhAFps",
  "key19": "4GHzDkKAYfHvQ74XrE5qUHFyprQ2eRR8MAATqJVPhwd2BNswq7zqajhxhZXGShkr26boY3Cf3Cdh71p8L7QtfrE9",
  "key20": "3pugxhxPKtQS9ToW5tkSY6b5329y67uSCJ5FBDDUyRN7r87bWQ1v1gXDe4pqsUkhMYaYhrrdFKmnGWAqYw56G28G",
  "key21": "2YxGWjUN1yGAzqXX4cVEMQqEhuwiXzYEC7noWXT5utvko4A8xY1rfdN4wt3jYdG7JRTXGvkimfkCv9WdrfGwWzhR",
  "key22": "5VHhQHn9vEKXwcxQGeY6HTSa2FAmApCscVqSZWp8x8zu6rYvskNNz66eXsAzMeienEsHybANBpKxqNUWVtr43j8F",
  "key23": "MheoutJJ1BuWBYS1rcmxdEgKE2ZdciwDumZenXfwSec9wvosBhncCvHFYEgWavavrr4DgMPWBsiPwfpJk86id6K",
  "key24": "gorv8k6yHbqYLf8QE5pqXgyN3KmykCwYCM6ofTg5ghEcKmf6tn88YUksSWnRiGc3ihGp17sSpF5jRhb2pxW74US",
  "key25": "4BBBAWphyzp9rxhJ7Yct767DUR2YXnNSP3UdNVCBepp2dzz5zhELG5UwtnxBjuJbnDMhN3816LYtzNZ18WDxDsja",
  "key26": "yzD8hHW9B18461xga6aHZNC1VVCBd4ysCZZCTfkhzxGwGWmSvvGurs7vVFsrbErob9dMZiE8eddzVxRDGvXea7m",
  "key27": "2ErMfA9wJtLVk6HBiFmPXQwWhSLpLNfgJ6H5dBbbvuexuDXNvqV7iXq9YusfmWW3hy92UvXZE3XaGWD1bkLV6ChH",
  "key28": "2x2R8Ge5oQmLYgyganfFeS9iPbfMGnDTsWsYb92HtF5W1hXJmcNbbRg4s4xYcNbwt5Z4uko1ggqPzyMNP48PkH72",
  "key29": "4wMnMdJknaPZRbmn2HvwQymerbkSQvswsQyJXgucYVKy2Lyvj8ivxGdabZstNBdHZ91UKMARUFSNPMrPnQJU54db",
  "key30": "bivQVjhCSXBjKjeBACBUtdmSJhb4BsEx53JX65V2jbSbPBD6SWvp2wWxT2F3m364J7r4gNpeXTdJVRYFgnDsr1x",
  "key31": "5SxsqLYm6F4mnokNAX5pZicreKcvsLugFgYtN4y724dxWYcHtXbmyCMmnBenaF3xoV8bsGqMHiX1UTTaY7Ki3MyH",
  "key32": "3cnGeUyFAQg1veHWStZEBFE7tCSzuJ4QuwBZTNe8GHpi4yiDuDSLDJ6bvXJWZWHgex3WGoUqJ3tv2mb62xHuE4oP",
  "key33": "4se567z999LWXt4AcjfoyGVzHaBGeboRyRSFeV9tMXJYwrMzAHDcmQivAkGhsTKHWG1c47BYYmiHv7wj6g753E63",
  "key34": "4aasFEXpxpbTX31YUGXuFC1ARofMUzwtat6b2nauAvbvqkrEscqpTJeMuPN7dP6MCnhMkyL1rf8MfTTURy3NZWzt",
  "key35": "2ZakL9FodjLrVxRUySbzR5WacmsS33SDDadxwRx52hC6Pi1GV2DyBSJE23NhGWkKjmUJ69k6pLfm8HJzm8xkczS2",
  "key36": "5VzAW3ja4Uu1sLWEA7gg3qGWfbJZjrVZafjraNAFm8V5kcBwgT189eSqXt2RTjvvAiU7sdN3bp4mmJhTDre2rbyR",
  "key37": "vrAFR5uskzR5LWy1dgZwsXgcU2HoTKoD59AYgkjBbTiF33J5kRMVAWigK2QsqUMKSP1fSErAs7qBBErLnABAzZU",
  "key38": "5UqvsUTE2ujHTduJKRchC9ZXm6sgr5FdrhKk5rR9qhDkFdYpGEhmqNxfWUKXa1CZMFGDJU831UFemfcCZDR4rZho",
  "key39": "4SBQEMRd449CdcScVxGu2ybaRk8vAPubkx2ocqDLWtDyPQdqRYoQVBfTdifkQ8ZQJuZCu1gvnrd39541Agad8CRx"
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
