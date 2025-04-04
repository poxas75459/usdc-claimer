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
    "sca1STqSxnznsD4mgGwSdgPdgnCnXUtasd92NZG2sEU7uDjCT57EVL2WdQxnaYMRzmRwbzPtJPi7DW4cFP3h9Rx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zgD5ULLVmUSCPkbxHVwcuDJ5cD3oKTeqC6mGUD3DnDmm3HNPARiEnKkwqc23xwQyzR4enHczkzEtZ4Tw5RzNmAS",
  "key1": "3KTUNfbRwmzbB27qtweg2k6twnMw54wSx1AJqpabWeGDPiRNmbC1mp6WzXmaY1KeNoL6vTVWvrXtDsr8ctb3iiWC",
  "key2": "2itPHVNqGXFKyJbTvPx2f1akPvfkFp4hN5TFLpGK8UziE88rRZCNhMXGUcnhcPvsYXAds1dUePmBifXJcFDge7Pz",
  "key3": "42ZQSdzSzbV8xiUd2RsM1om7tZ5RLFbBkTPmYfjrqUPhBjWJkC1Aqy4FxM6RejU3KVW7dmaE159NqUBiynxUiguN",
  "key4": "gpd43uwjA1i9kuPXm4KYJ7FMGY5UBQ9qybArptFec1SVR6is8eXfFb4MacAnZLtUGUXs9k8tu7VSfANp9XWbXSK",
  "key5": "2SEGgEDVmjs5Hg2b1vHL1vKMYxWteYLf77MMhgycMq5SVAmhZBjg98rAg6hKRJTGozDFTryoHhuXnrJRyfDZdrfi",
  "key6": "hfiKDUAyjkPmzA4ovHBnQ3PsBiR5arBbspiyRexxEEuQvuyJRqEWrRY24BmU4o9K4uCp2pYrPof4z9A2Tg2mb6f",
  "key7": "GRdbRwspyAQ7y96zDjYH19KQRAEKPTSUo9YSaLSwdCJ4a5zNw8XHy5ih9bhEygwU67928U5r2FhDFvNEnop2xAE",
  "key8": "shPpNisFQsts8LGqX61GgJJDPvmH3ngD3KAVQq2cq23dn1YVPerz7Kju8iFErtVzq5g2YXdpkeXiZQv89tYHk9T",
  "key9": "3FEfS9oALsJKdHxeWomKYAyTv5a3hPHiCJYNCydkznCAWfx4ZymTsW8xsguYvRoiGzaWtPPqEfzpBYQJ6qHNHf6f",
  "key10": "5PSjXzjWkpw5gvAWGYvGhKeUsW9VPpFAwAFw5C2pDj6mrY3CEBjwfd1PAfz7HwAoQcHLeA5GU5mhZHZ6FuZcdjub",
  "key11": "4oRsTwdBPibpzJwBbsixjC8Kns6xjYUQmBDERr6u83xCVW9kPBxUYePfhYevs2KrZqoiURqBhBb5xA2Jo3WTEMDe",
  "key12": "27cS6DkQekdX4u6J7CkukdKXdW1JiLPcazQWoMaAKhhKP5HD8o7C627kYCcruzJTmCkg2J4QSX9TqFw6DX5s6sfM",
  "key13": "466fLfQrjPf4paPifZVkeoLAvRtijF4hvdX8ohyLoLST2jM1uWHmjLt36fianPopTETBpZnqZVip7fXXRu6xfLQ5",
  "key14": "2L4Z5t6naF1XJEaBTu6HeCbuW4qT6RCUs5RJqtWirjajZTVYqepTq9LKhnSWvgxgSBdBnpwDcZt8UPbjLMDbFoU1",
  "key15": "3zH3Yj2viq9GTmrjfLFQynf7iK8EYsjurmZ86bZDRcLKr9kdHVmDbb1L7wPvsMs322XyuFfmo3eE3m35eVKGhEbZ",
  "key16": "5ENRSnUF8JKnMKZ19o9v3hpGqeugmbBaW4prZtS3rv2ms6GvEbdUfLyR38A3CaE3Dw3gom4NnyBSmKVjR6UNXc79",
  "key17": "4WG7sBN26AqkUUu35qZECaVhRTtr5qebdHBw23tqAWqCrvXkhFvGQY9xj6pKDEZVXELkWiv4veLkwGvxSSMpUdNk",
  "key18": "4FG4imcWPCg9o4RuXJm3K5bXazSKysWZudxTBrpFM2t88aFLJ3zbXJVSfJaFGQB8u3yoaaHqtZCpNxhRmtEXS7ja",
  "key19": "4sGkCJMY6iobs7szXUTYkqYVzQwbcMr11GZ5otZjQntT3e9ZzFqmDHwfGrn7BUsKvKsVU6TmYAq78V2o9KR8ebhN",
  "key20": "3P2o46dyq33xVzCZdeSe3n4xfh1ZjYDcYEBa1zmjKMJPBQfSWwMVtDk67LPGfMY2vS2yhQdobmQx312Jy4rySraa",
  "key21": "2njVr9kbs3F5fhj7xeubxFde5sqMZTq7AB8FYeaWQ3FjU1Eup6kGugoSrrMrBAJTi3ajPMbwdMfGjWnAYwhENEE",
  "key22": "2CNVPFNnpak3oAgiYqHSzVnZL7fS1ncWHh2J5iAypujXpPa3ZZb1b3EPh9cUxwkHu24D8c9qCWH9JtoUxxJm55YU",
  "key23": "pJaJs3EXTkWndT1S75pZHzZTBADN1nrG5ZFSBQ3h3Ac136Kryh6BgKvJhkwMws2LLkLZoA7p31VyDBoyDofgMt9",
  "key24": "3xBYXkhQv3afzHtLnW2DjWEMGP5egYoXBHmXHYZDhk7HNvVwHm2oA9sEocZYtfA6MKTWusiiTxzhfnqjf31tVArd",
  "key25": "3VHC3kSqgHz1hrKc4sE926xmiEzxthMCnSeS3A2jwJP6Brxo51fhS7wGnwDSu4eqJtxCptx5a9XQpG2g77CuXFuJ",
  "key26": "KKciZs5Ts3oFfKtMq8tiWZzCHwmRtWbgvTFYP97AkcxRRd8SYEHWQdPAig3YvzZ8NTLAbaix7pYtwAt2PWHXsP6",
  "key27": "65FTRxPSSyamEYQ8KviQzpYutsCBUBdPQTDKGqqQPiwDqhdjaEHy1VX8TcsnMUPzHWnf5Y6dphJq5Lt5sqRq4fPA",
  "key28": "2k52nS7ms5H5j6H2UKLMq7MjsJQRfuyhUaoFWASgZssYZhN3MPxB72JMbmxhsMggaDSc4eeKZr6dFcPVdqKENei5",
  "key29": "5S6zuhhye7tC7eBtMA6xtVwza7E8YiP21kdfrZkQ2o5cfchmCq8g4PWY36d5Qg31vawUzjyyEZgxu5d8xREd4Rux",
  "key30": "2eoZ99evorsUBWPgDA7BkwQLujiaeKPwVWGsU3pn6xJ2wF13DuBcCdNyr7Bd4PCHde66FnXR1AuiNj2yhgsdNVM4",
  "key31": "2iiUVDX7vr3eopwMeAh2HZ86qaseKnZcWduZyLPenPyXX31h2L8qv5v6UDRxnSV1XJ7FCJKX6AZEeLJqxFt4VhD4",
  "key32": "5Seu3fSFbasK9dHna19sxfxto46kqY9zjJQfHeixBAhn2hzSxcD6ZeSqRnx5sgHRcv2GKBj5UH2uStChhCPq9ps8",
  "key33": "s88CSgg8wP9z4LeoveBUQAErr4niPczUg4KFo4e4BVjpCuBL6cyS9yXjxqPGF71wq2xDDMvXJ9snB5YZhbaEG2Z",
  "key34": "1JeWbyKYRzwxRzrA2AmpF2K12GSiBv6DtcyVZfHnAznmHogpMozvanApi4389mtZKKYxG5H1gkXwzxQBVccfZG2",
  "key35": "5ytLN46eaaSJjbTXHYEjkwXJSJ1xqWoGRt8TC9prro2ArYNf1sfXyu5HPF17GNDExHamNXv1ZjZ1RHWi1qdrXBMc",
  "key36": "E5tenvPzvYhREFLkYyQNUVa8X5GXpGM2oy8ZFFmBrjwig4Umgac5shxTUJVWciZePgAnPF86chGf5PNDVgDaPW1",
  "key37": "2D2jfy8jDxh5nMaSht1iX2LzgDTERaZqHgLZnkPimbFM3xJ761oUGxMAc7o9P9g9hEMMXDm1dHp8Dor4ccKiKHfZ",
  "key38": "2iMttRz7ViZfs5jyXpyMgQzb2qrZvW5DLBBbvEdjf1TdKxF4nSC64hihnmg1PbviKqKgobSGgF5fvcmrj7Fs6yoq"
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
