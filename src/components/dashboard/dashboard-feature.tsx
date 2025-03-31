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
    "En9LLjZeFxviWeLpTzB8VCjfBT1Yw8yaWsAQfaBFEp7gnkmzuxPTS1K3oUCW8vDWitijmc8x2bnrvRVLVar1WoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PNEpY4kwUfycyHuWKRWZ1ti4EtWPfoSVV69KLVg44UtQqPgcMKVfr61RQw4rsxVJVZfHRVT7gQQWXKe3SknmLXC",
  "key1": "5cA9QWG1azA2yh8KanfTdNAAL7UwtzSaJXqwZfVkhN371U8PfbQg8K29JXJB74d6pzGiKEGMFmVDjHVU8iWEn8oc",
  "key2": "w7rZVAAJNFUiMF1DCLVoEvW3brdzoMCd6kDM46w8uXBjBVZCmjSjz4E7HQoWeNzfCE7rPMub18GyR4UCfSZJJ9r",
  "key3": "3Snfvr977XXMSE8n6d6B5a3N2PHy2GQZCKfaFZJtvWggkAdJv6AdL2YzsGPvps7ZYPnet2avbi4RYVegqEDh62aC",
  "key4": "2b5isjT77EM2yMt8FVjbLyZ5LMcTxPBLbSftnzibDX9MW9LCjLrtNujcURt59Kuk9Lw19bPsfnWggvuVZ6K22iHx",
  "key5": "4bDwPyvGEHAH6FiGMLKKCuWZ42vcgqmdsGiKRZhGP7HvcPRcW3AGSUVgfFrgtx98CkZkmNP27VVcT6mBccM2qpmi",
  "key6": "4tekXJqkKKY1UgBpYmz1gyQU96AB3GMU7jN52DtyrAA8mBDzDi9U4DyMNDhNt9cNmdfpDH8WBkBhgfPeRD8USbME",
  "key7": "CQ2yQFXX6MBaXL5mXWEE1M13kuhi64cmpRA7BhWNZ8CRVWeEaKipPufp1bGirUa277XnZjeMFk3fE7Kp3HxJmNB",
  "key8": "5WKTZmg4fayjNL7s7rAq6SsA96WqxFCMhGg3RW2muHDX5wYbUfAbtVkCqu9BQfHZPu3c1Bh6rcn49qV6E3kXthiE",
  "key9": "5t3UrYcktZha4UKDbju5JfyACLR8VStpYrwHrkR8afv4adG7LSbYuvmwPtURZFp7aZEugc4W3xtzYdZddmzarMLv",
  "key10": "5dK3HSfsJXeseD7fmDfwFdiy5V7Ph89mn5fn91iiWU9stKU8w3T1acEbSvrVWEwMHpAi64m1fTowzJ4RtCzZjZWv",
  "key11": "3mHuVx6awWFWet2rRVGnzC6ZWRhrPtsGv9zoaMx8GqzevRftSYxbTNVrhrXnBCUnboicGFQ7M5W2isSLqo61Vnh3",
  "key12": "2Asz6T8tih5bHhAJuzMkHVsvzH3khU8XRietQpLzAGqnq8q9baxdq6mySAXi6rshKZwuQbKoyT1fh34F8cj9gyjC",
  "key13": "5Lm54xm7Fkms4aaA5jjiAqXhuD1oULJ3ARkgeWz8dKY6vB3Uvx4pUMpRnFR1vG51tw6EVfDY58ZK1FzZUF6ZUjRj",
  "key14": "2CHapJFagKGr3oCGei6bXHv2zuhEZnppFLXPfBsEwZ66ZVfitbU9F59DgwMqjYYgCwyKLasUPxuF9wY2rT1eb3db",
  "key15": "tCpsBQUUK8YmsCP2BR6HKKY967zPJPByKQGGyviW5uZUYVjhWMQYVcgPq4UneFKw4BjXPL2qjf9JSn8TVb4DdUp",
  "key16": "5mXXhGnCGatmimy4z4LaAXwTrtCA6ZaxVtXF5tyQw1bzuWh1dKFEMPvBS3XfHgNK9GMzunT7pcHkMCgjGoFpkRiN",
  "key17": "4SkL9HxGUUPoRsyDNnMdKoeoeFfiScRjd8Y6daKnRwnmDVv75LguMgV5Rj76yNi83STS8dmqeetuYGXgXtQpyXsW",
  "key18": "2cZ13qAY3sm3z8ZGNrfGmzh22dSQ5TGYh3A84GFy4Fycz3B2rsTx2qKAmdmPLjgEHhqkuFgUSQKaf2qHsYNPKSZg",
  "key19": "4DyuJHdUYtshzsJ8XsPgs2QvHCG23C7Asmi5are4EdRfw2b6PHLwvTyNTL7Z1jRR1B9gGvpwy2CjGdhb1h82SBtJ",
  "key20": "5qGpGGc3SWvZ1JJy2fXxj9nZj6TPRWr39qsXMWZ9UPcoAF8aZ6SpMxXBi3MfMWhYBX3hQi1SzKaN4qhd5BSawQjM",
  "key21": "5i23C9zhLQfoTUjwMVLUcSdh5eGXxRMwFowcu88MyezF8xQZhrxYtmzuRaBPRyUzxUTXMBoYpo7EsvD58xdZzVQg",
  "key22": "2YRPWMoQGtwDMCYrHSTAFpBorzgWjBFtbgSoRSZA2M73otCCQNqWfizDjwEcbgonVxU1ZzyyzgpRevHqdzPoLeYf",
  "key23": "2X4AdPLCHH6B4dAGNDZAH6Sri3YFHAyk4DN4QDJcPN455Kx5zeykK7JJ2C3h6LRpL6UdEC4PKx96GdVhh9ymhuhm",
  "key24": "2H1KE8BTxo7yyJyv2AJXigHKwB8QDZXtzam22nqVPVSwyNf1cBftAkwfN1BWdttnyvm9GfKNdJmveWBkpyLe8vEb",
  "key25": "2JsCtsiRqgX2xRvp4rQFmwRzPxxmmrD24WzdCbZfu9gE4wyFi2U87rhdXi5kvb4m1wMwGaRzZguzyXu8zYHZSyrq",
  "key26": "4fnENsBVtyT7VB3uitJriY5thCG8zxpxfibmvoVyTqFwN3feDWnvEn2yNfUUoksiNFhFodzWNxTkFvDWnQ82PPgk",
  "key27": "5FvcjCAVEjrbJERBUGKVrMMZXgVubNZcNTkfpDGjWxMnX5ZwmSjVkm9VCxaBC6GMQQH3GuhbBszhQNZfkzqC3yDS",
  "key28": "4xjo7j47KykHf7vb13SR4StKi1ZZq6JDg8zRKXL9LgZqh95hnVCnC1prZg1o7QBQsXV7hq9DN7Gq8xR5aqAp3NRK",
  "key29": "5bD5QUL6iKz1Nvk91i8FuGE2C1o1TheNM7XjuzKmhU6KwiyuiqbCMvnjSrNGuwJJ1g4fy16DunYRnPKNE23SoN5z",
  "key30": "W8E7Auy6SNFbuawnWECB2JKCduxZf1MoPd5WAxFpTGVag2Hoy4zSEohVuyd4Z73rYWwHCB32htQQm4NHBiKg68u",
  "key31": "4P5SuWKnYgv7ZmxHguEYjkEQR2TRbT5CBetgQvuVUWHjDWXtYeFDedYJagC6CKQChmpDjsgN6EhKaNpZy2U9Rrwv",
  "key32": "39aw31rmhoFTNbxvi6v5prX9EsXd2kkV8pKrELffDRth5TxCgQjATQe5oMwwZFxnGp5wQNxU8k9J6xBbEjTpeQry",
  "key33": "njbRNftUxKCfKQKitD3uMYfG7DoQYAYPFzJv7tf5tsGafTxUrRYBX5Pdisp3nXRge1fm1cd4gnAVvCLFxRNtwrz",
  "key34": "3REExvB92bK5i9BYwAHAgSXS4cE9caHsNG42c4P1Vhz4Z3ZufDQP4qe6R4isEYixFunXnrMPPumcxahDVjVcWJ4Y",
  "key35": "YJ1PuKSueDMUmLvYuciiakRgEfQQ6tEuVyjE2eT7Jzb9QnX3b5QSLpi15kGN9ZLRrJRAPoW8cC3UjMZkv5sP4jh",
  "key36": "4Cu5CNMbYJGB7RWTEyMcgmcHH8edxuoBYXAkk8GLBAnmofrubQLktGyNqdXvcTyQrgdz8KnBkFhkbPJ7boNrt3wF",
  "key37": "5HYqDgjerprbGCkFeYCFwH3iecDekBbsTm6gPqciiWQbccJoHWFkK14SQKNVKGTv7m9t4jtii2hVZnci62XNWYTo",
  "key38": "3pCAEavgRZRycbVb7s1mp86o8umyLEFFhcDtp2KDY8pucotL7hb7gcrwiBvrEReh9T9AxDHXbsDdabc7m66Koih4",
  "key39": "2CeeLrVLfkUwdra1XRqryfsKomsaVBgjnKy1gQD8qNEhdhXjiBQXMsawJ7Q7akMgxUVyeAKGEc7BMMQo2aKu8bQS",
  "key40": "yYBx5wrmfnNLYrW4R6pyJAdocZdeTYvH15yLXtoRTeD8q5vg88rBWk6iAPAjgsfbwpzp1QdJX1igv5EuSsSh5cd",
  "key41": "4cJKK4jcMExyWY5fz4ED58biK5DEhMCA317JF8yqGbtWP2vfJhcGmc5zdekbmf1RKqKdx3Yr2hMzpqpLLiwTdo3a",
  "key42": "43onFrZMurNNpxcxynaWjJiLZ9YUJ3RwGCrV5nqn9wbuiLL8t7FWKZq43g7MfwyT4GGnirgRxXa5vMmhLwrkPEwA"
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
