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
    "2xQbPN7WpyKBBURY8hBoYfLoe5rCkx85ygnTrvWKmcyjXbWPaiJu46Z7kHfWZBApaFdaUori7y3UxRra9gw1zD6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "URbSUAJspiL7TLwuxEyKbe2C6VxGmj1eNwWTHXAmNj8KXCV4o7juZa99VCJU1J7FFU9XRNmPj7aL7HW4hHNkQEP",
  "key1": "5kFvxRfWZF5DZa2EgbttTsPkgTzfz6vUJhLeHgTHCaoigL1hno4SwSGUf2GfskWpD8VR5SdbEjs2j6tG8zGgJk2L",
  "key2": "5pQx6pQx8WkJPcs42GiDM2JhdGdS53svwUo2CJuQmb16LpnrQZABBaWkPjgwoWwVmFWrCPnexEsAJi9oES4d2J6w",
  "key3": "2vFrnvnRhNJJfxnTVQoSqYqNPTPMi3YJY5RgsigBqUqFsEqfFgnhnQtKhdAhTu8PHbkUkzxCT9zSReqwbbHAEfaK",
  "key4": "5JsHU7xvZt5RR9USMgiGRpxcbFAcVB1wNdJu5JDLrN1bbv1XQLCYap1oxFTCaHGzzwvAbUw2ag6dy5Mn26cdNrFq",
  "key5": "5fSG46w5d6jc1HVNeYGQr6DLazn2WTQ3xSQpYdLPwz7zoEh5xCwfJz4MzUibAT7LQFr62FH1exkaQ1aLHgQBxzAM",
  "key6": "5AsZfgkkxHU4pPyDurQSoWsQZSDnfSYfN98CdtUsFMUjap7SSWiFmFgau2d6fq7qFrsYALsbJAyLccbr53FCPd2a",
  "key7": "4pwS59Dcfn1XnHSqPgKGuAye4GHLLJuLkfyvdNppV1uXEnWX6rDY5RG7ybbcvwyxUjoynb3ERLZbSnWGHpLeThha",
  "key8": "4BYnVxr8TiD8jBfsiKNMCQjnEmjGfv6t8oPvaAAUwZRvEd5MQJi9cgHs1vaggpK9Vn2yVmfbp89yiCX6uASYPA6e",
  "key9": "3WrCC7uToSx9u4VXJnmmXCVgCfnuFYDYDiasZhK1vM8Zv9EwXNVjFzSLVB1yaSbVRWAncQzCPmvn5BRCZpob3ZtS",
  "key10": "wsEqbnZxVNpHco16yJdEwZcRAY9KH3eQW9UNVbQW32tXhnAPvxyugaf8rNyRVQzckfkuRDAdir648Qgi5teqg65",
  "key11": "57Ysd7BGBw177EEwkLJtzWCHTkFBLpcbX4R84SvdVasjdX7JNKtTZN1U43dSgZBkWHX4dXr45Xz2T4bNBrrbc8iM",
  "key12": "Xg5b9rLkQcFPcQkn8XkAWP4aAPiRyJNbS9WLP1DKsr6JdYg9uPAX2omZFS66pfQKj8wX6eMbx2e8kS8dqMD9Hwa",
  "key13": "52FaLGwmVN8YdTEZXv8BjPqTGhxMCgur46TB48oXMvaQ9uMMaRxzHtdsuwse9w68dbQU7KWth1wgLGxakeZeJxpU",
  "key14": "4B835bUShFw7wdSdVBJJ8qPW2V2EBMkM7WWg5XH6zAtGXhAt5tyUHohz3CGiDNQEtMH7G7Vw4tyDgMdY5oKTAJ1f",
  "key15": "3By29EnxWm8RodSCayZHbHARaj9S5ysVrPfppJMRFAM5c3MCsj2eizmfQWvoQuL2VDYLF9ZQAnDhjP2HnzK1LV4q",
  "key16": "3pt3PxamNWCcEyozsNUeHwnc28dadL3A26TQ2KvMVBbVT8pXZdJKy1HBwegmK7gtcDvgYebWJEm1gD937GcM5wv4",
  "key17": "4225x7CYouzXEBPGfKCwS6L2532xHztxcohTvy8z2UEjpNhqBm2F42NkcaPTK8cDB1YtuaBCUeXo6mEYEuLMQfZM",
  "key18": "5MgB6UbcpyD66C7WmZS3nufDAZas7dFYRj2FQYdvgj1A7RU8ZnQaiCzy6Q9kxaNozP4J64BPzBXgbtoyvARnHiiB",
  "key19": "dysaWhnapuQZpzB79aQ1AmXDuTBCn3AdfYRtYvUKa8cjy4qkJErKHkKxtXUdTZC7P7HwjShQuh2bAU8XZbeE7JZ",
  "key20": "4bWvm46q46b49vLxxgCkjYdjqU4c1M5C2XdDB3JjMCh42MspiAJvuqxpkFumE3ze9T5ThyZzQNHZs1sAB4r1ipUS",
  "key21": "3Bu1bDKiVjoadZgDgkMXdxogPZ5m2XGhEfFLGBQeCkkS4Yg6eoJLjjs9sfcGn7UoPRq3bksLtMz19WdRPNfuedet",
  "key22": "5NKkp3s3RKb2nhRUqNRw9fe95LRfj8JTw54LdQ8VkcYH9ARo1rMHJLhavKanNb6oaXZ3mYbVAVXzSrUN6PgL9wXE",
  "key23": "2pNEMq5FMewvpKEp7yJEmJPBT7YgKdMSF4r7JH8TCR57ESMcqaaZ8kkUvJYkejDMUF3nNwNJMWaBQCYejrFQD1Ad",
  "key24": "537yvW49eH6wrS9CtdeJ2jPUW6hXtLhVLRbJwytZJsxSCPf83Zrpf3q2V8BrNveq8CT9dDvZXU9wB3hN5de9481c",
  "key25": "uc8We7xRf7P24myPA8UjR2zP6XqUJPuAmDZZDtj3YTJCQxwsNUXsGwSZ6yp1UFeyMnzi6XvWTq22hFDg7s4GUU9",
  "key26": "4QoX7pLxtXs5bw8AiHQwo6keC7MJpnqTXPFXk2NHSBANMUWWfENQN7Rc2RpNaZU8GdXpgXNsGHAzMFxWq3e8brev",
  "key27": "5HW5AsURbgg6T2FQEwPhRCfqgMoprNrUk6mBTZsyhRsZnFq5338425duyYPHFgLfEHZGTVBhtvsLrh6heLMUCC9F",
  "key28": "38koKRtsDrJep3J2x9hQ69b5kxbo2RpoeMYTYJUwBj8AUhd9VDTCbKSXf2CsEApqAStWy6ucy4bFPjw9htgvNnnS",
  "key29": "VL2aNbRqtmuzyrGnAQkzzSWKSUkFNoz35xp5rmh8XXUM2Bv5hrifZiXbPHP1ZtfKKw6AorfdzZvhp7CwBj6E62S",
  "key30": "5kZisnXxvKv4QByz5gjSeFzPi3meHii8RQvqkQez4w1SuUVE1ddW8RAvh4RW7goNfkyJP24oHrToGzcyDtoceQwS",
  "key31": "3HmF1L8NwdwH8UZFMUPNnX1ivxiA6zKjXEHXvtjCvCArrbcEEtKGHtHsywztXkxXQb97yCya9ZXhgBRowCBSeHPg",
  "key32": "2UYv9g2xXitgY5xzQn322LBj37t4gb11A3Ftm8Wz6FimrJ8wQTZ7X9qrqo99SRcbXG2iTivAFefUVmfk6Bo5zeYd",
  "key33": "4cYF8FQyTif2BLFc6WewF5eqe29R92728fugUosKwVmdM4Ybs3cBuSqXeVELPMCo7QtmghujxS31269DiBhUZg1d",
  "key34": "2ZWBqKwN7Dykpwp9jABWj2taNQdXHk1qvdEiJnTsRxsafGBvcq3z69wsEagr3vCF5NDUtYxydnVCh3LadfXYxWib",
  "key35": "2DFyqxtt4jMYhopYTQH9quCn1wR8sc5doyaisqqV8WTTytr5S8aZBNTYesYjF1jtVfne39YzEcJqZZLnBVXd9KDr",
  "key36": "4T3wgnArSqRgxXpwCSqkScbQPTMXcj8of73QoPL9dxNR83iVtmW6fBiY8F8x6RLuA9oxHBKc7gABUD64qVgFzx2m",
  "key37": "4wwHefvdaJDQnaCgJdjdqzVHzWotDdEYDKyQHsCZiWv3Znz8mwBWPf5o2e2fP1qjrTPzs35GjPREwcUX22RHsYXJ",
  "key38": "3htAof2MDZqZPxQ8d9Pp7nxfcboLawi51S4CzsCox2aWFUVrUdgdy3bJLiERin2THmxcyoNY5y8ueWBpFWMcdVyC",
  "key39": "g3G9cL8oYgAKF5Gyd3cZ4NUBxyWoiQ1CNEbaaduqoZMPBC619nXURxo6HFWrkE4Ui5HgoRoBaEkXA1kbStkiXi6",
  "key40": "2xyR9xkF8a9W2JZbA3aMmR5MobqpeFQYDF1PXtZedrmTaCGYDiHwGtSCqsVxjzZYjHGdo2PbHgFpoTxAntHfbM6p",
  "key41": "2ReWfeKpG4awkCWPHzUWRmBT9Xajr8nDfBy8Cts4a48WqiCbTKjpek29ZZpLSQ8XNNmDuhZU4LdQ2SZfPZLcSrYj",
  "key42": "2kvStGV8s9vemQXd2WeMEHJiKq8jRQPHf8pGYtCYXUk5Uo7ApKc73o9iuXz6gJwyJ5tiov8cKzfo7Fu8GrN2zdHf",
  "key43": "C6Ta4tUzoP5ub2znX5hzmDk2VsKVqXvB8xJfbdFa8ogG7HarJU1rq5FENiiGW7zEqAaFkN6nTJtojtY653NgT5C",
  "key44": "5a7zdpMeYhsZ3voHXVSQgPQzPc158Fk8YaP6HTXwer43DF2sqfBHY3zvxUVhLvtARM2hPjqYKaebZ9qZjoLbD7Fo",
  "key45": "2uw6V7cH82UCYiZmQeZSk1ehaYxMgPdf36nj8QAYKjrFxKvKJoYb6g2SikFEQnwCQ5RUtrLzLh3ntiQsPxhNw15r",
  "key46": "5CypLBrvYQXxhLbVrSW6Gz2vG3Q3L6BvB1sFpVJ4UrR2HG5peDznMEY8AbJh6g5Q3WVmKyD7WtNTuE3Y71t2hB8Z",
  "key47": "KZ9BT5ArZkuLvfEfWxJSnDApZKhdEdSHLrLSharog7Td9KVF8Qf148qMN7LHpSbNr8DD17Atamd7WJp1g4r7Hvv",
  "key48": "4pw1JdeRxES9Urbu9dJ9SyvoRjeAv29tQhhsFueWDe9WVFyrUn4QQZyKAJpLZrtVUXSyzL8unr43v7uu8tsimPg9",
  "key49": "4id3v4LGM35iRGNFY1TeExbHLPSyCVZQ9xHRUo4KvXvQRsoPntLSTqCifCmKVvjjeArHhWr3zeuApQfuBN1ANcg1"
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
