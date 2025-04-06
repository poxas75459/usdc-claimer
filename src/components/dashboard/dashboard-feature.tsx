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
    "5fvUT7deJWBe2ZZCt68UhtHiBW7efpBowvB2X2MXkjyQpmXLiXdaGb4RJCYGoPgU5vmFoLawY4cvBTRKqhrupYy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66bkxQhg5V8exbTqpnknxCepzvNPqXLyDHNRE8n1euSCsgdSnLWaJ1VtFmfmNgPrvcs1XooqWTNLjrPrzekMwfEe",
  "key1": "3L2C53srRtsquc8DoPaHHVWyhzrZTPr55SXPwH6MBBeyAbGjWwBAraF1bAmx91qWtj4TrPHdHPpptCH5oiGGokMU",
  "key2": "4AV1Ucj2Zwtpd6oWzSEH6tjgqb9GQdcsw1Rtne6Xk5dGnFWRfhzwdFaQucCSi7DnYq8cv4QA4WBnWHz83JZqstTX",
  "key3": "4EFDvQ6BaJm5iLRmoUEAwfvV5Z3B8kd6BVmXfWWd85zrDs1mkSXARSppTGqh3d2edTqEDzkweA13Vt1vofuXL7Zx",
  "key4": "52pBFUphAZxkq6jJmTMXffWoXjkwBzVXZMbcBvGsWhEAggNF95jttJNJLovCPWGd8C2p8sZxrUpvCXbrywCLju6E",
  "key5": "37DHXUtSoNR4X69ejKnNGKzMzBrhWDkZDFzrxexPt1D3dPiLuHMERPizhq1bmyqn1YKjxbdksH5wuuYJecQ6uECb",
  "key6": "3EghXLCDJumLqeaygainm6GhUaa38GVNaTBt8t4tNkTDy48ae1p9FuXDPydf1J89HWX2m3NxQJXv8obfMGmavZN8",
  "key7": "3ZymsvkZFFgffrPspxcD2gyVkwB1TKh39mzwddp2ag4QQ6RXKQz1o6M7ffi4bkKUZBDwfeofYhBQgf2QM4DC544j",
  "key8": "2ZNa4kPReco1DekZKbu6bzKh6mha6eZmBJfBdB9j8rbQ5fiaAT7oJ9SdZ1PGkMa2RZwWjWPPivFvYepXNfvKEoYj",
  "key9": "eWp9q6rJ7mZUNjK7y37p45R9aMrxiurKAG3WfCKNN5QEgKo2VHfbLwJ6wN3JWsBCGBr9wQrrGHvYMCBWyH2ayBW",
  "key10": "3uN8to9gmY8agLveMK1XmNrg38xQEYn1AQwyzXJm3T6PgdY43FGBDFv52ybh2bs6zcJuwQvaxXaw4J9GEWCzTmtt",
  "key11": "2vK5ZsVJZZ3UVq6M1PuEvF6QptkW7tcppcEU5cv38hfiQ15rbYxgkLL2UVMWGn5Ey4WXuGm3ZqXsW1Ykoe6bAN8",
  "key12": "qQ6QuNiN4eRjW75ksL97qUGMLDLYRY6v3BYSzcLA7j2NLEnMhgtWvmaxT75ktFaogymLQo9g7MEqaw6BoiDuUMs",
  "key13": "5niNpjfrvZu7UYJzBGQhrzuMAE4Q9XarVXP8CjBQHm18XUdsXCPx1avLYnKf6UtBGgP7P28wnJBMMm56LDf1w37Z",
  "key14": "3aT3jcAhukvaNU4rjDSFAnHhTCTXtn5uTEyThT2rBEe2nn8WzeziUtZqiYadDcNeS1CuNqxAwCotveLmfxNp7Vgj",
  "key15": "B2rFCnz7V2AhvQ1aQ1W2feT7YeapbcJ4pLGH4uawq6UbkcJnxFWybmdNnAHHDr9WRfuS42aQX8rWmx6r5LBC5T8",
  "key16": "5QA7mBhrSz8KSfeTA6zgxnyMmwM4d2sT37FQUMjL4KZkNvtxXSfB4tQpsNCaWq7s1D9cxPmqYPKjV1BC8q35UGQv",
  "key17": "66p8PD1dmYCTcSg2JFoMAzTwaxTvh2UmaxNjGM6GqdVz2kfpomtbC3ZQ4Mck9wHxfFYWczrVbHJ97SQksU4ZSEPd",
  "key18": "5UY331bZb5d7NbehejxAeATtTrDA1aRn8FUQFQSJ92xMTQuy3tpMwNpzZvu4s5BspjCD45PvFbaHeAnFW5ZyRCw7",
  "key19": "38DMpJsgnTTrga6hwk1T7DyRZ5KeWa8SM4Q3VgUqQAGkmG5KgmhRQGngd5orysPBcfcZXHMmxJiyTo5p4gP7kpZn",
  "key20": "42ZqoMAEqyckUC6SVEH2iyVjkdVrGRNYx32CgMSVwKwUZDX2RTiGtorR5SuStyVyfnegE4S4hUBzafQd6DzyZp6e",
  "key21": "3H8yZTNTFi5GQ89ovK1GTUG3zT27XKraA3HD5ERSuwQUEUxQNGkvETfkK921sASV92B5VmMXQNbQg1bbMctRg3He",
  "key22": "c5GVUpKXBtC3V5m3FJVhGmXJKzYe9kfmnCgF7sLczvUZViGrChtYQA3sUKaBeqGqAp4Sz8UVh5zTBHk9L8tT9pT",
  "key23": "2P7gNPESPbxLgpb63X8rJgppFmgYnygvnv3D7SxKQVsfsFyLLpewiCE6xH4XzErHDtnHBqYJyS11DFYFH1kFTvZy",
  "key24": "mBqYCkQbar9kbZQ6n25Ju8SdWaREmgfGkfB3yomZywJPywifvE2Ln8TFXU1Qn9EcSdjtXj4pdRrXyi61Y4hLNoL",
  "key25": "2fJnb6MprZYsy7gE4ZC1DQMGgmh3fhKQvDeCePaQcfFrnoHZ9EtJYwnkvxkcoBgLGrjpDsbyvMTFf7a3Qt7X2KTU",
  "key26": "VTcHw6amCLcR9nnkMiYXSMZGLh1UeBZL1VBA1zU7DaXf9rZuqEphmC9Z4geKVuJY6e4oXZYSjM81T7wKVUqq7oh",
  "key27": "5yvQptoSzycbdWLE3wsC7474PvaArWi6bNrYoBp8LQC83brKBsxjZTdwQus8Lx5zfVd4Qoz2zpA9tQ75dj6h3cEw",
  "key28": "45PK2569M1qmtqNnZyij1W9ikPZzXDa7jRUA7G64kWbN1MbMQjzwwPaUUoS15Q5CD3UfpxSMUaZ5WdA8gMfVb9Km",
  "key29": "2pFfCxmu7v7aq23Ejw3xTVvb1kMbj3SAUVUAvi43jNdCU9pXXz4gQB4j9nfwKies86ZaY7xtw1hmSvrSkJfpf3yB",
  "key30": "33wfbrpvNhNc7beG5A2GCnsamQVduMKcde7ETrph2b1rdGEnZM8ZMCDkGbvrcHVkoVHZtye4vuXRRkiPjHfXm7TW",
  "key31": "25ABJJbiRZHWLMyWKMWbg3SDivZwSfTUryC26bhdgoNu6wQhDQ1s5zT2Qu6uj1f369YYSc8mA7yRZpwXCWFCAX1J",
  "key32": "vRjbqxBgDBr2E5bZKa8FEidFVC6LTWg2NYXnJhS3zV1V9L6SozPtbg1XqKpgzg2o5b2R4idLDKp7RVrLXTQjBb9",
  "key33": "2DoyUHQh2RJLpUeerNo1rZPKR99q6iUrnouNTj8K2aUfMMz5MQdNVqf6AXpYDNc5UdMoBeeUgwa4AgSC6jp3hA3u",
  "key34": "3F1MXop1Vbfjcism1EoBL5S9Ko88EAYWPpNCMDKRxYJck5Qzmh8gCpaJ2vtnbmB6NUB78NeN6tcfN9RS4u3Tsa9p",
  "key35": "5jMD4yzekDX1Zdc3oarGy6NScxx7nYKXNXJmHseZXv3Cav69bzHJya9kFkNrpsQjCPy9EmLzStzy4X581dZekD9"
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
