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
    "4W14dcLxPp7DkYrKhwwwr8dmojCPYHFYRd9PUV1Jk1HJ1MLUzNXhRReK8Kr5VPFUq6vSkobTz6R9fwE1FXXTxC9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GKJ7Tsc3i1jeamA7oRVNLULgUqGMLCdQemc3tiNQqiKTUTtmib5auvKj9wMXXrxqEUR59gWM1FUxY9xvmcVcWLi",
  "key1": "4zR2dGPmXpBqBtG9vT2QzfRSVsJXg7fkcwMcKMpSy4DkH1A5SaE1Pd27XrmhuaXbksVU1GouE4Cese3XGTNHj6Nu",
  "key2": "5fqDxjHFLZenxyHbBjvUNAzUSgWcG272vRLRhf5QTneJjiHScp2VPiJUdzFnvtHLkKCnJKwBkW5EfEzQN4ZteZFs",
  "key3": "54CmrFRRuv545oHzZtbEwAm2Noak7ChzivGc8wLCDCF8tYWDAFqaCSXyrTAjmT4F2yb9LScdQrwDoSJGUedjguPn",
  "key4": "4JoT9KMCGgZsG2yxhpv3WSiSALpVNmPFyLZ4b3SWrYkbfPLWiF67iPDFY9qZAX3owGASWUK8edDhgVBYo35Disif",
  "key5": "ZQYcjfxDEnGfdiW1os6YsrCaV27qJCnvPnCKaV36ut3nB9fM1Eur1ecoVrbZ5VMd26S9gdQpL8mnhBtw88Pd7RL",
  "key6": "26MSh2yJvPa4yvvRWi7nMspqz2zmhbCMpKZ991J9wFtEGFreMYTqMK8uq29yN3DSvrZTGXzeEzMEg8CK5s7okgTx",
  "key7": "3pXte24EaM1qLhRPfPuMRdEA9d8Rcegc6k9KACbgbHoudvFh6GYZAdiFxNvba3CK74waeXJjvjGtjcZ3oSrZQxm8",
  "key8": "4Lj9aRL4ViWdPnop6E6i9MLRyakUs1Tyi1fUyMs3wTY4Mt97ciT3jPqCrwkcJxqv5pBU8mHNo3Xwj1N74AS7aiV4",
  "key9": "4ZZH6FVCVDucryVkCdJUJAm8Gzq89us4a9s64v5Jecd2kPBygrjtZqBziYcSqsVAXLRC45wX2fVRn4YrGn4oRLxU",
  "key10": "4xUvUeSdMArXStkoSoAQh38M4BzyvwQSu8NEq1JynHs7gMPw8Udkqc9B1Adkiqm2WTqUNJW3XbdGbugJ8FbUuSKX",
  "key11": "6SYLawTuyCCfjBRJJiVds2H9UEvwZMX2ox7fMKEY4A7mC8x3XQkJaM9Qsm1KFLmfzxHnr2YUShan5vBYLuuSomg",
  "key12": "53eCGC6W8GViEmSJer9mVDkdRpBodZB5LgFfkxDbfEwvSGDgbaFDfnEyRNzpQEKVprVziD43pxp2RPveL9rwY92o",
  "key13": "3ivuEkLz6q67cBAbyEqzudBKugewaDJTDh8G7BtDFauJpx2775xH11m82Kgwn4eJ3cQyCZSSh5oSzVru1ZRnLhEs",
  "key14": "2NDhREqUmVciRMFSEw7dHNyGwvxfhKWoDwfAJomw12PgwbugDHQ2XmbxkARZPtd5aXV4D2MwTNzpVxSZfEjpEFmj",
  "key15": "3qXL2KuPWESCp1deoph9hyhKijUhx5EDJdq7eqaMCXznNhi7Xoz3KY9YiU2UVi5FZXkuSaYfWagKCPDes8qWstwD",
  "key16": "PxctQ91sxjSropUNEv7vdrWqrccqifzKABkQK2B1VTYKs65bvt51Gg2ofPj7UtzX7PtHvK9Qa7C2pJk43dQVqUf",
  "key17": "3nUwh9q63UtdD3M32MrwNbHPaF1GALF5FnaPJvYwj4juvU7MDw8zTdkRPTjGKNQFjDXdx1rUBYYJMBUiK9B4cuEV",
  "key18": "2BRL7BaCbN3sd8RV2cg25hSD3ozZ9R3YMBs3juXKukQcUgHWZLrHS2zPzPp6kdsRVzzChMdLSjs3EGw7NccTzSsX",
  "key19": "3Ycgc38WGWyS87kesHbHXkAQtGXnWeaqFCsuwMRuHK21gRU1jbjhoh7RXzchTPQnhNeXdgPQ2f1wpCz93fvCsQit",
  "key20": "5NLopHhwcbkFcgHTJDkzPwcPL1dAndUpFrGGtaC7nhwc4EUdq34LHYmBjhfv7kpyBn3qejis61JboRwxMS2Y6j6f",
  "key21": "3Qt8gWFmPkin1xqvYzNaMMfDrukAMMcrFtiiE8JGrK8kcEknYXpGyLWZ3eUYJen6UxLFGquwsUL7zwWfyniT8G4G",
  "key22": "31kJgt9CtRNQtBDkfsWwKiaWt5ycykwCAroiwsW8MHAgJJ6fpQXb598SeLLHJUeDiQCUk3isbSoqLarrJsp5EWoo",
  "key23": "47fw6FavdGViDoHf5ouDoUf8qs7JzLBWSMbGSRDSuSj5gXW2g4nQLArzemAbP2HQ6tnHsk9nR1Q1coVb2SXZVB8m",
  "key24": "PXhfR259BHafxky2pPpqW3sb1qdV6EWXbDgyvpJYim7cFrNmqKkaSc3AoPvMNGbP3Rk73AGTGHgzEUdovJVvQSy",
  "key25": "2rA6mXDdGXgZ588fpuQTiTHwyBuUHgukATffVwrJKanpZQHumVQWCaRMXnm3u4dWPbop5tuNqHnUZViYkeASfDj2",
  "key26": "51N3LoEUpCtbQvjNHRVtwszKgvF4T9tZhnmJoARPRaDVf7G7DopsdRh8SmGofbWD5zMXfPhCAGQ5b4xiD9bRa3uQ",
  "key27": "2GuADMsCmS7Fp2Mdx4oW46dhsrEZ1rFuH3Yb9DWmQpAr1wULihixyzk3iLiuJjME94Fs1jNtZ7K78TtSyo2H8uSX",
  "key28": "3xkYgA19gTy7ekYScqAPpBNcmf7cei6ji69KrQKKEXyeG9uUtdAKHhtGKD9p7ogyp15mXZ2oM2wyZF19mXq1gb9H",
  "key29": "2jaB7TZyrE1sS8r3HBZkRdEq7pSkUivMLLkeKGKAssToTTQdz8gxTxhKrYATEmWyXivb1TANsr3zZ4oAZ6z3mvNh",
  "key30": "UeHUx4qnGvgADoH3nC3PMnK6WKjLdDvAhqmuKNYCnt1ohbkQor1Tv1NgyBPMLzRvD166pvHtkTvT9HocLqoE5Y4",
  "key31": "4omAUgVyFrP1z37H9hNPBqekL5eB7iZX6EtJkLg8pDJ49wefN16KTPWvEnFfC7i4Axkg4yBGQNED39NTdExsMMxw",
  "key32": "598kRmnPkfjfXJYcMLjXgFnDSVRXGMQeLQM3Saqy5Bvw2ZrUp7BeztBqi6kSZvV4ZzTxjLsJzo6yn2xQBXqTqA2Z",
  "key33": "3YqJ6uknEHfy6DNqmTgiigdMm4Kcp6wpfiVKuEDKxT26kgkprk8An7Rhy7HAYYeP17D4HZNfodkkKCFg4jjdjwYu",
  "key34": "4gcHcNQhP9YsKCadZAVPJUhyRcePLFBGtzhW9o62gCKRcGLmX9VpoJhP4wUGZsWjYD4CvpoM4oVKjohk5yqhp2am",
  "key35": "59PHk99oKxhFFz87k1qmGLaqEK9GHc3h13CqqHmaXLhY5ArKkzYxVDAY7r8CcRaAKJZRBBxDdS27vktWZbYfDkwM"
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
