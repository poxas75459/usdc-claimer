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
    "2NYts7miezg465Jevh8QuDN9tkmq27WmHagVCFBuT7JdjLHA4c89dnUYZhuxAHuRKf9cw1SkPq1bNDi6CJyRvniR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SB1egNz2ixHkVJ37cosT6BYsaGF1LehnWxVXfyzjsGgpagjZAFKZ8ceqBo7MhAZQA3UG3MtCfF7129ufafHUyiA",
  "key1": "5QEnauHZt7S5iG1Aybg97Pad6NuDQF42pRjceei3hz7c7qBFZJj6vNG4wDdgT1PRmrGEwqkPLavJms8LPBE6zGFd",
  "key2": "4UAbAnxbHuX7RAP9WdxZPSQz5ibCkdPmoPkYzTj2BJYPvXcnE2SbZBC8Hpa3V8GaaVAeoWBta79XobRrmm5v9Q37",
  "key3": "4LDofXecn8R63tzWnX2oEZARpWocnUSxTLjaJQEcJaWo7rewGfJ21fF2vW4xwjQPFkW65Cv5x6ub5QcwF3twqnmY",
  "key4": "2vizrBL46H3WdVy9UDJ87dSAPD6ictZdjN9gFYxdtkgkA25UkzzdqT2yTU8CVwXgrRYyf1r2f9fncY8EqjVxtYNL",
  "key5": "4W1ekgoUkELFLyxGv5dVUcLk51WpMc7JYJJVhWSx3AK89zt4uX9DDeVny7k848x5kmiGHNGEteueD4HZgNyLtkmc",
  "key6": "4VJkphxsPGQVwrgKZAxHAvrCaD1f1GnmXX2Zy1R5JUwRhrKymESrH7A18oxWGXNco33Mcj7nevHWD3A7cPittLv8",
  "key7": "3TmzFNAYQFmMBvYKnB59CUtMXG293ZjWwYcDdykZebvXvPTwZj8scGekQj7pqsBMtEjsS4KqwSX9TX5UGa4RtfTZ",
  "key8": "3XCC8BNo3waCFAyEnZWVfgkdxtNBwtKWUkRQT4nrN4HidpFVitJ1CTZzUc2nykhuev7Zby53pUoqCyyygjczh2i9",
  "key9": "5a4sBmpHBeN3M5beaNg1vPrYkzM5tfEpz9xsBcyqqcNTbiwPAVJD9ckiN1RW1J39FKQXm9DLgWnYCfSYmr5XKrrG",
  "key10": "8LxbfbMDvLNpqNrDnXHVrCFouv5RffD6abPcDrzQQhZmadb6uCpRkxbfzAeYBkkHymgfT2Pq1UhPiRNX5RFE3fU",
  "key11": "3pXXyywGnwVVaMz16wZ2nULRPWYGLQdBBmmsCsZTYMvKKhSmisjqrsy8reFf919caszFdRW7WirNpq54FvrLZ6a3",
  "key12": "4EVDRUDEoQZi1bqgAL6ySQk3dniTgfbQvQ48xZ84HAPVEyh1En6sq8UpQgw6poVCL1ThEaE2h4s6rTj2kyAfSfeY",
  "key13": "5XvmiReMazpzrQufNod9Ft6uRLtZtGcoFuMX6RXoDuH8GTGkzefdkKY9e4geXy2pNQwurr1qvcu6UV2BRjo2jHMH",
  "key14": "2erDtP2uFrrGXReWQyfdXyK55w8TzzJeVqkRChraehDSzGqK9DHptmgtwDy588rR6dkgRt8zb4TNEZLgnevK5mb",
  "key15": "rXAne8AY1jF8fkttgjPsxKuxLuB75KpLTspACMXuj85ZfKikqZn8kbT7acaq1zAXFc7h3zNmCUEeFL9Ux7WXT6a",
  "key16": "4jFvaZGddJ3TL9mH2XWsisqseJgcSUuQ8wjRWFNCHQkkgVU4D5YVVbP4uQvmwm6kQn8PLvKGNj3nw8GbC5YmAc9n",
  "key17": "4zK8Bbs8PjzSfRcSaBfSP8cZCwB1gQqhnCzpL1nc4m2D4R9tDpgK1z4V2Uh79HLzxoiphNSp6xsxvBkPwDnYK3dg",
  "key18": "2KUy9aCs8bgGZfN9g9t4zSEGhV3j6w9USxZbPrxVAqW2vwUBhYJ9BUk2VV7Gu3fsd999FZEJVUeUSTEZ7AUoDZbL",
  "key19": "21yEVpwd3hZsjMvue1scGS6JrYhBQyhXFWUjfkaVcMxr7FVUbyef8sJWFixyD8zyipFmzirDr5C71bdVUbtKWtga",
  "key20": "4YitBThKC5vycpbH7oXC75QchLpdwLeFvvhDKSF5wPcy4VbDFruCWSxZ5i4gTyKkonzd8fVSpeJbbJYv24eiPtMM",
  "key21": "2cfmz1fL4f7emXE4znfy82SsVP8sg2fHnGkPVV5RAvrFwm1Tc8du3nKPPnChfwu1f6DjNaCnW2ThMGSecjSLJU44",
  "key22": "41x2pyexekp6761YssZMEoRPjLSodM4eTi7mQQWnWEM1yzTtBy3CjRJo9c266U2WNT5J9cihAjF7YJ4LMDUWdWJe",
  "key23": "623KN4rVePhNbuuHQhPyek8Ya7xksWiXR1cLGEkh2GVBg9EJXeQ2a8CXqHeZS8HVYM6dt8fx6A6WJgfMsoo5qajZ",
  "key24": "4c4dLodwKu7S3AvabmRKXGaMkL1cs3hH2Vjawc22npnvHsoS2NUUpqbGaobZ263C27cGzwDy9UM7XmZVRSxQFRa2",
  "key25": "2WNsSnZ4wM3M7xfHp1F97HBcrM8WVQSxsvK24nS4a4L68gGN8JTCbq7nW6xGJfk1qgjHyQfxzRroFnb8mYKgnryY",
  "key26": "4sBQx9ZhpxcFZkmdHLrQev3h7iFgSw6J9oWuwt5eHCFfmbjuJdTdkTVcBAU3sw8nXh34Y4CeDXpE6KAoPw6GkExk",
  "key27": "4JnGtXALUpbLJrmCMGTw6KQ7NggAJKXDVtBnroLjhsh7j56VrB7rxX2ZVv6GWizqgvDZZMqxQvFXR5yUxMaGJdBC",
  "key28": "2EMt9GHWugWvSiFW7iESTTheGv42RTbq3rLqG9di2Pb3mkftcYipEAGqhj8T2K2YA2CDEf2gqEgTutghQ1TPQDB8",
  "key29": "zmn4zCYseztRv8EVY5m9SPodU69NSnQqhzvmVpkibw3q1PpVZ1aAqzQhxYMZge3Sdbtb7kQ1YfMwQ13FF1mFThq"
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
