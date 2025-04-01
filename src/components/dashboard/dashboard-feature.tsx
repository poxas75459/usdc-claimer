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
    "4RyTd13MK1LDXcqQLy1HZR1MScWEVQMUEspE9mRjPjPKQtvHf91ySnmuo2FtfCvC7eDJantdVUvfn395AKGuPSF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uUopixPWHhbSvziJ7fumSJuVtav4tHXCAgX16PBYLdedpQ2JK4ShkmZtDMwWEnkrowPxyrpM9N28wkWj9dpspJB",
  "key1": "5Xgx2CdcaBLt9rSMzyYmnJoLthrYLhG4tXA2YvZxPe7Etbod8qpFhbVe31mv4svsMsykrPq2wvabani3X4CZsgMQ",
  "key2": "4uUwWMNCGuCuiJoXD1CK4rrLCW1cvk8UFS97ed4Fd7dd5X3avp6REqMgHt5jBpwnLzSrat72Szecjb9E8Q76KD4v",
  "key3": "2obtYwoMocKTUJYxFR2rfKUGim7612RtBSdh7FAy4c6xJmUueARNsERVMxA2aA8CJ9x74KLAUcU8f9GhgMtfTdQu",
  "key4": "5R2avdgvGGZfvwT7FtP34Ke4dcPuUjsrSorPAyCvvQsCn3wGWJepg2NCSi9WqTqDSsdHHMkC9CcgbxhbiNhm8VF7",
  "key5": "2sBh2teLdEYGEmfGnm5XxmnbBqw16SwzYa77PTdKkwV3P9WdpZW1ftxGvHu7nd9r75w2yRdjfuts1k69QZPnEWfh",
  "key6": "2hb8UywQcvNjvnAGRH45LF2Ah1aurEJgxXPR9ux65n324yNJiDXmW4spCYmEhAJooZcv4HujRm8oRUmFynJmD588",
  "key7": "26jkSfk1pTrZpTQQCiBwv9aSxDxdeyiR6pUAnG5BfVUDgdJNSoa61zTVewkRG22e67KYuKwHh8kkkuHMNWx2m5GZ",
  "key8": "5guTk48fU6wttxVLTQkCdk2E9fH9vhWjVWFjroyzYuBNSPP8SXhJaLm1NkXFs31m1qfdiXqQoWp17QpaZoEg7cgj",
  "key9": "3ZXafiiZuzC7cn2GbYnfAMeR33twfyYPTTXyr3zVx6c8yabkPZuNx3HYE5LYWem38hvVpPqECQtbsvgdYSv62hUi",
  "key10": "bUBiFEDqmZ2EYFvo2CvECojbPAUMQ1Sf1i4arzYoRgqhvF2M5UpztUUDqULL9XdjfEhdoX3EJn3KbvHgrNdGnfx",
  "key11": "zFaJXZXsPb9P1KBJt1t1GS5cw7iJK7xL2a2mTusVDu7NTXmnuGrn5bHFwsJe5DgNieJr3oP231HMzqzPfSYvJKe",
  "key12": "3JS1ZFKcPGUisvTXBco6KSvrTQsS9W1Ao1YnXMR9GhNonChqyTghJcSCFECHDHKY6iX7MiqXJTS8wsekG5Q8Jr6m",
  "key13": "35fgxGS7cnV63w4JjqLeQd8GPWk9qgoFqGJ5hcn6HMu5CQqjXDRu6g9PY8Wk1ie94QnPz7UqCjcy5VZZDQ2RmS81",
  "key14": "5R4nHhK2zhLTbdzqQsUFzvmeGLdDkkBjqTJk8J9rWxm4ShJNvMcSWzRrQzzXhWhL1suammLDhS1Mqp56gCDCDjiQ",
  "key15": "3N7Sqs9fPMowP5kCbA7C9DZqXM3AnC54AsRpfkwaMn7umZGZnAQBDPyAjfLhng7H4UtRCCp8Xyhh9fULtW824GZN",
  "key16": "3C9LjPzjsTwxsbcRunTnmURB2omNxLjMjMSWEFdJgPPEKp92UbyqtHSEkVZzgaEaD7z6XbxRfYNZDC8xaVzCBpdY",
  "key17": "545Fn3nrRibYX5H4WDh3V4Tw7KC6ntiH4kUKbUqhAdfsiLyVXJqwSJxsVMVyNd6XAn2Fk6VdcxjLvF1CrLQfFios",
  "key18": "3LDDxadPV721J9LpEa7ukbEV9qJKHh3tZNbMx3wnJGW2hv3KQTSfP6yHwvREcLG4YHLGTGkS9iD6j87PSFU9SRkM",
  "key19": "GKMRJLW9CyqNNsvCVmzTTiQ3EvXpUJ8u7dj8w2bHPuMQy2cCeyxwfterqWH5R4PtK6rK7B33uGjsAHqjr4MM38u",
  "key20": "52MJ8HNJZjAHMH6C5XjPMWWmtkhiQVMdAwcWEnCXus6yzd7EYbzCiQ47RrPfNEUtKTxqXvjUvsLBt7BJpKcXfHKh",
  "key21": "2iHbfV27z1BngUh847sU7QfZQJNyM7Bu1RYPKbgb6JzvzFd7asTHyusQ8o58CXB6Mxeitpvo5Xyxsrhj7xPdGvPt",
  "key22": "4R66fYMdXmJhSBXqtejKvEqYp4R6LTFSQNYYNGSCTRnHmJYXbApmAJv63xcD7UjV1e3zJPTxacycs3AYJqHd3ebP",
  "key23": "42ac68EyLm4BGC9VPq9t2KLynaamU8cp5Gxs2DmcbRAb5oMHp13h1cTVpx9zDkJH3KT4U8i25RnVwwAUF5EBuveY",
  "key24": "445Bormj5pfagUbgwc91hSPBSLAmPuF7RoAXBvweqg3sYUGPZBJNXRufaJsKrr4mRWMbZNbK3bF8nrYGDJGuHyRy",
  "key25": "45SRYgY2X6vh5TVwEpwEqAfuZ2aE8NNFkvrP9GnMtZm2JuFSQXuyHEV3ADggW4HhcvsKDgErsaQsECp6cPvgWxD7",
  "key26": "56NY1y9qF2JN84ryGbFdQCMM1jKDS6HaSB4hHWCktyWRGGPRw89cmgacLKpL4QUJ5Kr66M23pNCvQxvfqKXqP26D",
  "key27": "5RQoUmgetp1KTVcXDjqrPzj1pe1EwGfBLzpDjJRtcY5akgwDnHgXCouvswiacYkoktpecCstbxaxsQVxNMDkg5Ky",
  "key28": "4nvjwMmbZvPn9YTHLNaj8yTYcg6eovjKtP3xX4uwdpBGPeFT78y3wqTMycdrjwhjHpM2dPW5N2vvVFmGL2J7JkfU",
  "key29": "4hXh5DZNR4s8hnsbrJfVb5kcsfExSLwxtJryoUCVWugRPFRRBS4gnRuJZERpxXRsdtr8phbFbZD8S3DwyQzKvNd1",
  "key30": "2GbcNquZfXXP8fFGQ9kMDGbofuE97dejCas6EZ7ABaVoXBt2dCHJGxaET4wznY4cEuqe66wg2q3z9PfHvHHw5Sxn",
  "key31": "4dxoiqFtTXVi1fF39A4SHPazzcSMykLrbiz8XNb83gVFJEnqTZ5yXdbYYcFvihzePnbM8USLHUPJvGdxqRnFU6qu",
  "key32": "4hyo7VHxdcaReFw2sgBnDv9xJ9aBxZZq14aFfBdJ1SYCcFTdB1vGtvSqAc7T15rS66tNkmRy2C8wCfuV5sdKTsAi",
  "key33": "4JchVqqAPqTaYTGiBvuuMzWCv6akGMMGJgU6dY99cXgkbC5NBa6zQbvPKDnMfRddB39CQdYXBxvr1epdTLigPTu6",
  "key34": "3eFKrjJeM2ZcV61LfKRtTFvuFQQ4jy2aDkBRz7skSuynCmybpLqnTkzdFbLN5cin4kX4W4WCjHktHUfMwRe6wYSd",
  "key35": "z3L2wgHJGqppSDVzYdETd7WLaoRXffM4AUzRra7NDncMgiVGHc3j3TGWiwFH73xBTNnJUtUQyh5vt9D7L254dxu",
  "key36": "5i4QPtwjbgN63MUHdwNnYM3yebK8KC8zPwAb5uzoXW11p3gXMnbupAo4cNQAPdyq2aV362QfhHKNyiFqevWBpFHT",
  "key37": "21CWwYW2vnXMmRV52yQ3UNZQGDr9Ssb4qsY1MVt4BoYGyUHbiNLMEHWewyjHj4xsCxDJSNDbBVua5cJjjX8cY4Mr",
  "key38": "5BeHtMRgR5UHYGbqmXCWYG4zPmBE7rJLjk2amtfcpP998SMiKaryzGiHiqoGm9GHFrU3xuN7kdALXipEf91yst9U",
  "key39": "4tRFofJRGaue99BXBbFXjeGgzSLHCRXTitDCBg1yqhx3m2AyktjGfiJWVtRjmghdHcsZor9evycV5T5FQLuCbdsC",
  "key40": "2bGheM2mpgDHf7ReeQTSNW4RPQTnCvGky2txPZgJUDozUUwGVJM9EVwejN44ogXVrd7Lv7JJqrGiwb4RKg3BARf8",
  "key41": "31qnH8h6QVaMz7Kda82aYf7oaWLfUmBtVsVmrdisATZaumMoxmhtQS6GZCdaoyrB2Y3dVqeD5cyKfWywUrq8Trk7",
  "key42": "cUykLGyV2K2EweTxp5zJtcDBz2yZbP6y19bXoVRhVzDkWT1mn6fzGLHCp4TExiKuV21yRigEf6f4dTM6q1vmMeT",
  "key43": "38SQFU3NpiDCadrDxGiVrD5aDjVXzRQdKM6kKheRVPYes47UnWwTymgTdTZ3pm8x1esFyG7bTNgHkUwkqmo9S7Ev",
  "key44": "2kcDTauRxgpMW94nVz5Ko4EkGVycJ3pbXDrQA7EkhE9vAuty1LCWtnz6eRiRDoHbojDHwV6JNtpoD7SDUd7n3GsS",
  "key45": "5j4gSUwLv7h38FzW61kUqGnrQhvscEWeF4YPLMtUYQxvypSJLr45a7njZj2SfmqzW9TUzrpdC6vj4iuEpvrByJTS",
  "key46": "4JgW6e94UpGL29C1MmPEmQL9CyjtZYZQDS1Gvk5VUxRzh2REJMML7xsREKJN44weVMGNsdErHtCXBZ6PggqqoFhJ"
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
