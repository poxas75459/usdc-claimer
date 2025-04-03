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
    "4QMjTMYHLgDe6WYqZkVrjpYgnsBN59jjvB4U32sy4hxZiJA5a7zoUXHojXPLVS6wM2NXJSeQyai8C4RJhQi4R8kQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aaKj9SUFAkvgkXvrsq2hief1b9UxVtYDChobcqsvLzEMcBM3Z5mto3JyZsii8cyBuepi43Qcpksj5rKcoMhtj9S",
  "key1": "4FuXZr6GrdsKqCFfQCSriNphnapL7dg5sUrW3kRZbMoRRZcCS5xHs4oeNeiJ1uRUEwAQSecUtymwyrbXN885P6US",
  "key2": "2VkewXtadXaAZnq8PNiKmw8pJ1dPDcvJFcRsQwhjvHAvLMsWDRgQcN5Qe2vk7QyGyWYCn2K91MBRQSaTQ2dyreM1",
  "key3": "2ENt7AiTzo4T3mrBbGYrXhc2EQxwv48ma6Yj9Ftqwu1iqXnQY8YoeX2vjsFyFAvF39WoPVn8wyuxmLWqtSpPTqPZ",
  "key4": "UBakgDhV2XddZSX3eB3mtnX9pyarWyhxasyDRqwzgie5VEhjRoqcBwooN8rPk3P7w2tzZNbAAXx1UQSQz9YyNUD",
  "key5": "4vNhFJGmor7qgP4VKqDmxodnb9ysE4Bqvq5M42RP46Z6by5HKNfhwWxt4yFjmgzyqTN4N1p6856F9UyxAtV4D9EF",
  "key6": "23ybm3qzdm1YaVsxeYq51hevCvW4iTfmgwDVL7gBe9PJJaiac2yVPAfFJbPC25LAjeVdHWxER8jBzoE5CPiwYuFc",
  "key7": "45pdWoyBYSWvsw4dzE9dzeV4U9exxCw5EK37RhgqUSK3Pe7ab7g7mMnEaE78Xsjp6uDZAat7mfK2FhA8A2yvJxmT",
  "key8": "4J9c1vmX5HQVV1Ad5csMNAgUXcTsRDuYuQspoS3voAUCN7DWp2EZGkiWcjsKDUwbXWCfEAwdYL5Decte9Bu9bdRk",
  "key9": "4f9Jq68zACAzFpc1Ar1fXwpuXKTebjAAyMtVHSTXR582u817EuQuSyd7UfYZHQFsLothK2zZhxUHJsxEJLrxjCpE",
  "key10": "3WxnmkJPfSpxBs421xDkPWQwRAmHXn8HiTrHKmSPvtNJdMgiShpncuKDZJQAzj7Vb3SaZivsj1vx1XBhSMiQDNE8",
  "key11": "56ubA5Gj21zPMMCJ1V89Hyk9H3DG347otbkZMYrM15QhTpuK7VM1tXkqKxKfooBEE4VrhpJT2KviKawt5dLVrzf1",
  "key12": "4iZ4WPJMWUxA69HpN8xtzCHnE76yg1zuDkNEtWZrCuxiwCCv44gM7eXH2D6ZFV3BR18LGERBAujPAxHT9vTSBFfR",
  "key13": "Nc79PkE5uoR1SK6N9UosKUizkVX5ZWyhxkpzrMxEvzsxgriX4F16r4NVg8avR8NvBC3Vb31aQNwgSRpEexycYPy",
  "key14": "476wUGZD86QVVdr1MtdSncF19pATH6Q5BnepL3ypf5h9cmD6qNxURpHfAheMzy9qE47KToiUMaMHkMjwN8WnY9f",
  "key15": "UuZBPDgATPJJ6pxetA2UpdBvM347HDNY3JK8UrWBp1nwRipGzZtxicJerFs21ZkxEpD1baRj7DYFCr19A2Kj85m",
  "key16": "5eVQ7dRSvaE9jf3Mwrv5ScLNeVwSbjAUzjKD7sBGv1g8A8B55tTFg9vvEJvqPY5eW5TS7wrHrTnYfNbN4K8cVoQu",
  "key17": "2yQGdVoEDdUjfS5SAtQtTR9fQ5sL777WKKN4YXAkapf1skcTLzGVNuBJspuqRnkT1MTk8REtTKAc16omszCNjtUz",
  "key18": "5Uc9UQmWmVTdJ9VBu3UJf89TnR9YUC3w3pKHugTnQ7BpVyAUbyTfmBkpQaE4UpPfHd8bddkP83RcgaYX8DY91jM9",
  "key19": "4R4kNzjQY69X6yzxJh4PBR7do2VQk4d59z97JqvaoAwojyUJcJorXZuYVMz8bxYdGwMkNHQZK7Q7Xzyw3HpXDW5B",
  "key20": "2JfDjnZWwTvaPVyAZQiaY1Q7fXth95C1AHJyiXmbhGtmZuEoJWhD25ubmyrCyxVfgSUC1wuHxtvCjwqSYhsvEei4",
  "key21": "4PYnNTBfgt5pR4XHA5dvRsHwm8jRSAvqtKwmqE8By3od2fUeW8C53s4WVhdCXDxzWAZUxd3wfok7tUuqS6o51jMu",
  "key22": "w96mfyqSpsCzXnViDcmHgQho17PW7ryqwr4iFZU87b9VbsFibFcjTxNLmfRAcX5HQsCU8ytWvy5rsaCWQ5b9og7",
  "key23": "2bftEm76kGEEf6jJnaVuS5tLnADf31Fr4XVMoKqHDUnKAnvWSTwkbmmMPeqRRsicUnK35DQh3SaTyFyF7c6Ttdsu",
  "key24": "3Mbwb3aSgJXdRtsu7jjdk1cpbsgTvcNzXGvroFK6woA6BWRxCAJutc84TcHFqER7rnvz1phgDPFxm9XaYARfoxgn",
  "key25": "5nPeqqAG3jkJEWhRiuHw6MvhpqxSWTTxGZysXN9kYgGBZNboHxUtkptwFRkM9bVHwmjyogPCUnVcVcbbFTj8nNF5",
  "key26": "3huYGT9QrNRaDcc1QmssBUbFECWntpUqLGLYVvjVkcfDZP7tfakyABujbELwZwph4F15up38Y5JqvzFuX4F4AHjE",
  "key27": "4npJtZN9nn6A3N9jfFFGAoWmTtsdoo7jeQF261DM1qEwihr3x2qXHfXjgKX5rUHWHtSJQR3Mk6P4Eup4VJhFsHcU",
  "key28": "3s44MWgUHGDDamgFw37RKkzEQMp7Y1VD4cAzWAeW1iexhiC7DfiEV7c4CYYr1SvofGE4x9ekBwcbKuXACPLpNuhN",
  "key29": "Zc2PaDHq2QwhvuAbHHnuAgZLxDHq8AUyyB5wXPs57UHkpe4Zfk1g8SVjYUUiwbhM233jxVhDsvpLh7vofioojGn",
  "key30": "ejwCPhLHS7CPCQFHTg2Ag7nQ9qvSgXzwdHvoou9vzW4ubfEC2vsLxyHQ9Y4Zhz7q5DzfqLK2PJ6igcDhk3azChZ",
  "key31": "4BfFRrz1cPKoBiQQu4oHFTHN7ZWjYbFaQjwsmnkzsN1mWeTLKKW1S5HYMS5MLgvWgnq19nQBfZxia6VxPWKi3YBB",
  "key32": "Qv2ZEVeSpqCoMnDJKgMQQiQgoj1M4S6GVrpGui468d5nshgqcdaPt1nk1gukjXKbCm3AXj2s7b2DpyMm7UK7JSF",
  "key33": "5TfeiWDfgL9tJUPbrinocE4QzpAwKH16v23gRj7UeCeS2E6ayxA2KEjvKbvTdDV3dD2Dp7Py9CEUWnt423aWUTon",
  "key34": "4FoHC2Fo6kZwgxEGBaeGyr5XNZSLhZBNC71XhVdeKNcoW6173oWrVheu3Gi56VeY3Qt8qr6HaZjdqcmzBsS1C4Wn",
  "key35": "2K2EvxhBWNfYhTee3hLTTMMpM7s8wcS6QMLrzaiw9wdZFM8EqeKRJQiLYUEGX1tMDdmFeGMFY9Fuuv6GGGP2yfkU",
  "key36": "2m8Tbu8iuczMxAPa2QYCwBHZP31YpQBwGhDsfkypNXB6YJUMuBXGo4A3cz4xDJYdyPZiSNg1eSdUTHLPFQH1P1xZ",
  "key37": "2PHc1f5KmHj9BkXZXvj5Ei57XXhmrMZCvuSekB9jFuoJ5WA47JnH9JvZudJP7F3LjZmLE4oAFUtbzX7kbjT3EiSy",
  "key38": "59qbGtZsz7JvcvXt4avt6HegVgaVRCDbNXZHb3AQTCs1FrCzHVBMz1wroewJFsPb4vUpPZQK1LtE43FP4FCX61ND",
  "key39": "2Nv6oJotmDvdFHXJx4eCErgKtqhqgKCx5JyG4N6hZeXyYfBsysGocGNskCPVoGY3r8aLWq7HBLh2ykBQ7aXE1vcK",
  "key40": "5iN9M4fQGenEwvjC2o5ySgSWhkQsq6JRJdijue6EEJEfNgBGGLVWjWRWyhchhfL8Ei69S7kherMLmVviVeNQ7Rmb",
  "key41": "zepnKUmYLqWV6uUjeNJtW3vLUYqfcLdQi9HpxWbR8AnD4EE4jryJPD9FDRnvb16i7s68XSii1N6dG7eMTMXGM67"
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
