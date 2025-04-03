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
    "5HYgtqgcaGbVsV7fwdpkrcV6133TePWQH716dG2zzE5H9LtdkC2ZJsptuqJwXxHtnpGyenog8Eq9EZEQnHkNHtbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xt6axKV2tJoXEmZTFRrK1jEFaz3zgjuDmDwVCdcUhuPNJoC5KM2A4o5muUhJhjEGuoTaaK7rqzXAAqTWag9irMZ",
  "key1": "5n6rEz2pjiswP6v62DQEaavvQWwwwQiTh2rJszN7yzJd1cg8gZ5AbAP6TUKYnjaQfk9wGoaDAzNXMkXQzdG84wmJ",
  "key2": "5ruAurrzSkc1YoxgEPBdsRCZtTEaxSmTEERwmv5mkSNoh5fgwQF6QyNKC45vGC85RcY9r9uWcyRxWcyP1jDmccJx",
  "key3": "4CRNfFY1CncQdz9KsoNpZUVYzNaTTGDFsSy6GpXv9hSjhyYQbntcnc2s6ydXqdrYBZwyTudAqCw5jxSQT9u6LhsK",
  "key4": "5iLQxeeF4qH21Q7AiGfZGmwcc3E3LXBLva3Lf1WxcZWCFrGnFAjr9razb4uF8rxkWeo6SfeQZtzDGrbnJ7B1wANt",
  "key5": "5n83DxQq2dC1sJ9ZdG8BEKmuzebuHxkQHBchoXBdb5HXBufDCemW65mfaknr7bFY4oB87LcuojVcdv9qv2k1qUNC",
  "key6": "2XSAgP2nABXJX7MReMxUHEYntdkR9BVfdvn3obT9YoM2mvtR3VDr7ZBenEEiXXsQkh7EkdiyFXVJNTXuWHuCSeea",
  "key7": "26mER98HXTdMvpAmjZa1aowsvn2TzucLe6e8V9EKRBAPpFrDWNFYqw8VzwDTbhc2jWaqjyofvk7TfJr8hsw4C4Cz",
  "key8": "3N4J6SwZDhpZnYy2aehLUh51N8aUkDP5vVMimQ9Z4AxiAHf6dhnmeKxe8h2xqQ68MELLw5ZRrSD7cdRYnFBqAS8v",
  "key9": "2zhqhuwgDtK61QS2aYKimdMJBrhEd85tLFgUD1urYadab3AeFN332a7nYVdMj29ZSoikgeLPw6z8n5Yj88uoHMwR",
  "key10": "4SeUJnTXAYxrczSW9Ge9CgkkexF7BDKNZCA9kupFtWQ24NwAPDoTisZehidtctMXVDYaa6MLg1LX8YwdwUeFzRzH",
  "key11": "e5MwbBRpUJ9eJrrnimSYm7N3is6FMUpyZvAuiQepUENgPKepWDAt198bj1qDBoqdazgNQeZTNCddp9iM8UQSw74",
  "key12": "FTw5jscoDuSqGi3GK7nuswY1faWHtN19xDJ4ruthZ2KUGAthro7mzrJ86JU8MGrzUGAkzygdWEhCrKMnRyFuq53",
  "key13": "6MbXrwbTqoxsFey2JqsVpDrQUqy7t29MaSmm9TPUhRgkXAE6nn5NvgmAfLVj7xsyRZimFX7F1KPj5N9fpXHxfBu",
  "key14": "4pf7HXY3i9XzHBib6eFYmKvdNHJggQ4YQ2Vdbf9Disi1h7maD7auQrfw6xZc7R2n66nNNR6Lqxak5XfWcU4ouCCM",
  "key15": "2yNnr6H8Wr4qoPfHfdktvckRqE4xyp9sshTUVJ4BRQ2AnAUMw71TXRrCjgh4YCj1xUJTQkzLqEW2sX75mK3rkT3X",
  "key16": "2pa1nj4dBTV2AcVEPTCU7vD9sBRGavb7yX35HVTwCZ9VjwSfMGBzX9y62wrhfVQeyiDpQ9jZH3ec5bTs7UXyqG6G",
  "key17": "4t3Xy72kyTcoX62ft9wKYSeRFdjYdwQAKdVKD9DBBKjG4NbTYAxYjkna24poLTtoTERRLhXr9wye1sDi8KC98rUQ",
  "key18": "2bYocLdotcwdQJpiYkhfHZshoBL7Uti6oRsEPQ31QNhG47wdiNWfC7bYsg5ujMLtBmCtXvZ2CpxZjVoqDtv3WCSR",
  "key19": "2zPmGgTSFdXYRWPJCe31EVMVMJa2JABQ7nswm1fuqTcdbMPNPJEaHLNXcG31TfcdNW7JdVZCLP7Ws2yG9FAY7iwg",
  "key20": "3g4tWma6Ejy5fU3FDeqmtfNjHyiMUUsgJD3piUzErzxLA8yvDuSV4efzPh9iJ9iP2A2w1W7jaqeXssrqiW5Qih22",
  "key21": "4PJpyhfG86VdDhiCZS8qPsssKSb2kRWzSKNdScjmSFWmhnKxam2EfqkScFBZH5xiUdEhWVYKoNBtvuKdpmfThniE",
  "key22": "2P1XjaSLGD7h33n6u9yy5SbAuV9T4FVb1WtrzT4MKCxmJdnz4DdbcjLYA1GSXJBKQ51iyxUxDVF57ny5oDEVN6WG",
  "key23": "52WpSRWVDMMERt6cmBsEUsHzLYUUMvDhC9JPkBWmrhuttUwjwNJwfNxRLJyJ5BytQhmyRd5HrgfqbRQndq1jr53T",
  "key24": "541fkrpxbRHNoBzE9TwRBA9MGYjPzpyDKtHVGiYcEhkj3gb2RXrP5eCRcM1UU5qGct8iRdMzr6btyPtNgCox8ma4",
  "key25": "5chsqGaDTQZVyWdPvUf3j51MmvCWE5z7ckNDjuj4h2UcDv78Fxc5dVQmUCgk2bRu6DCQBHHymJFvYPWKr3yiXQa4",
  "key26": "j1cqBFyTho93uBJgSaQvpeAb3RgsY6PiwNDeceerUostobmkHFanErDb4C49uvjGcbzKwHujpAPoSg8Ab8qUaoz",
  "key27": "tyX2MyGQ85BoWEG6DNDD4qnSi6XdFmatCYGx5gEE3Zz5w1MDyWUztWLBAuH61Ev9rDL3YCakCC5k3iP82HAqS8F",
  "key28": "3P3uJxcpQ7qukNsA3bQsSepjT2ZGYnnYmWGGbuYF4ga5xpbhnrxJeqKNuZFJDKGsWey3ryyXnJGnD5cxUQDtF25R",
  "key29": "4PAJ9g5qavt41fWAaochdkfbtfcs2Ufqw9aeW15SwnFSHuKJGaq1JW3UCFxG2iN75jAgNbaPE2dfxwhoizVXzfMC",
  "key30": "3mGPgghuFwx2KYUS4UZZQNXtNGRHmAX1UXGY8BjVJ95YrTit3KFidaVVC55tWYxruCBUVfsNsThpRchLZ64Z7gzS",
  "key31": "5DvAMruvWSFrJU623rMPuEqmmknAPQduSp54rUGQvxkyDeqcXsHRRoWeYrJiLT2Nwzeb4zbsD3jRayhznpCaMSsy",
  "key32": "63X9bwyStKXqimXbzPssHLGdGZqg8BKR7CdUWBBpBVcx8Q5EZStapU5HAaMkodtBCnsME3Xxk7VZZUhKq6pkgWT",
  "key33": "5mmvQwCArKMGWbBKtAckCmsiMevLNA9XxmGKKAbjqdK13GCJWdXU3ih11tRX3L9iC3ZiSJwFStrvn3rZi2QNvyD8",
  "key34": "2HEEDRnzaepMeWGDYrm3Z1SpMiarrFENtbjkiswKRqh5T4ythrQeeWtFhZEkuqxD7jmRPUQt2nvynQYSkT1JxrjH",
  "key35": "4VZsunhDNYhhe4mcKQt8nkGiSfyrDLWcfEqK6x6TLcDKL4uoiCnqcNsJ2RrnHRMKV5fWZNqe2ajbX2UAvQqXUXfP",
  "key36": "4SEN4A5yais7Y5i3iLqNhEkBRpA8HmiVBdBza821hdRU2G6xA7Dzp4jatAh91Y3NVUyw7SuqtsLqSZeMfFqh8phz",
  "key37": "P2NF97htZhSAW8rbLKqfYxNfQ8Lqfb1Y3y52Gnxw1zgkkP9ywEXftzxwxrrUdDGgbxFWGuetMWT9giHMygZoGkL",
  "key38": "59ZQmhmr72LVY8P6ZVUFKcPWAbFEacwvH71iZSahZCSH3ziP3PNvyMn24yNPmohjqC9eB2PztLUnHMqKiiEnByMQ",
  "key39": "4nyPjqwDzKCiFEzFAW4AU6zoKB4R9qaXH7gwm5xyYhyo99nzpzwceFGbSFySSxJ56FmjwryZnfjxRd68qaXR8mV3",
  "key40": "Kk55wLrcgxRqbUuhdEYg9jCmEena9izdrBq2cMoydKRQr1adG57niY9pp6fH7qG1dNLwZ9DWQE43DFzqUDiVGYW",
  "key41": "5XdDuaLeZcH74LnswajKP3qkcNAiBqZ8aBEjU72U9XVMyAUeU8wL1jUCY3CBpirYdXkGQ2ynvcagDyW6GjLKcv9A",
  "key42": "2W992yurM66xnRv4mCPrGbonf8gA63g8s8Fx9TtgfeNCZGRwKBK3DCnQoJE5GUn21xWfTFa5RmxaT7kyNkqUy9DR",
  "key43": "21RzDPuujoB37Cycsh1B8d54M77En1k4adxeAp3U4YmCCANTLgKZyKKwuprRyqpDynav6VR2bHzoDNy9rUxW28Sq"
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
