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
    "2cuf7C8UpvmvgC2qPwbXAvRYbFpoVw3f62FBwfEGLjwzrUSnwH4cWomAFdWbW5oCSYCcTGb6EYtBMGuYED3LrdzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UQNB7BCoHSw1HUqPNa1Dey1cyKhT4HHWoUFWDoXiSCEZjTbwQzuJWQffGkoTZ2mw6BcSLvXXYfoFEDyiuwP4jrP",
  "key1": "2vLn9V7mPtezZ9JEBnXZmPaFZokCArCdiVgxjPn6EAUe6AUuGmwpCo76A6RKrFPHcMY7pDKiCx5W7V6FUWxmpjdB",
  "key2": "KneFeYYvk7Txyj7DSfGoNJ28sKUo9J1HXkaeiNiJMw48BTk6MGRtq4NjXiiwyc88h15d2NRknH4Hky6kMZZNbbx",
  "key3": "5ManYku4TcDMN1QLKmg21nD2FAwYdQNtRW2iRevyBhqGpjpAkHk4eSyWnDcZwGXKzM9QuebwZ6tsKyXH2BqKjaZ4",
  "key4": "4SQms74H3SuS71UEQ8ddXkDGNbnUX78dhKQjkFdcmm5PhYLfvma4KaRYNbs7E7uWFityMsWmiLzATgCfAid8HEGk",
  "key5": "5mgBbCgyRJVhTPpwBw6MGVUuXQgUh84rSM7owwdkTpwyEenn4okKbYMesdHzahMW2t1CibVjoGLfU38wScAUBAGi",
  "key6": "3Y9tBpo2pKTtxYzoiJGSgZ8rQXnQ4XmnrpTgwHkCVUiVKg52KPRVyC1GF6W1p3hsna4Q9Nob4ZCoVyuJuYRPdXH3",
  "key7": "2bjKBTHLHguRT6a5hcZ4nvCDv1ps5PLefiiCSvzjNnwsuB2whHmGJGv6hkKmsXnqekvL38JJ3M3EaeBZP7eTjGPw",
  "key8": "4Bn21cqgQXGF9iFDkrbhhHtzxmSyTDJhxpat3BNr3HRTmupAXgGpkj8sjdqAW98JSN6v7q312tLNZwKPQ8wP7RpU",
  "key9": "2avcLtNkhkrmoVnzDDdzLufDWophPcuFT3cEQW2JnEaRCT1H9Mejkm1hQfWoMXDMFC5WCZhVarPNy6yH9cqH86FJ",
  "key10": "2aZh2jg2mXgHthxMZdm495fG1Jz7D4sV6qZFtPj7ZFKkhnLvLC9VVnrYC3TwBwuBWeuz6oWjruVwYEXTVYmvRyo",
  "key11": "2ajHLRq9XiMo9t6gW6s9KEr2eFSwRhvD3qFoW8ibvjPJCGsFsp5nzHg7ayuE9svw75wsxfWha2JCZvmEXBAskegL",
  "key12": "YsogArrsoyD93r5nrpynRTD6haveBsar2fzz8tiCtPTnrPovUcdhU6rXnR96HXUwYqSZ3K9GokZeUo9T3g9jJcB",
  "key13": "4JedxWjQxdFZQfcEnmo2PtnmCGf1tk7JpqT2ZZk44ctaDridy4p3dRUrMFXy9TuyaKMhFAa5Pu49SpSGgHMRcyBj",
  "key14": "4QhNjvyH5DCRgNZ8LroA61mH8HdJ6pzAbvnCDeoUQy1a4MxwgDhQdXfQtDJnC76huYWQpjPRE4iNWZWViXGDBzhT",
  "key15": "3ryAwgQJd5ifb5iy89hfxhaxevogvqNnKXTb9RnUDJDppewyWNE8nqUSKK1PWzUYH8zuyHjGxc2JnWTr4bPXYhQ7",
  "key16": "3rJyAr4BE7LP5R7xbmK9ABz75VwogKrU7qH8JRw9f3TV6QKK8Z3kVfnqqX2iw6LbvAZANP3ptMM6HhToeS1ykpEZ",
  "key17": "4i4nCeZ9syuBicaGB4Ac6TLpUZFwMRoQesafdhMYjKk6UM5CBxpse6uALYiLEjiVes7jSxFhxieF9Y6BJ2HgGFmC",
  "key18": "enSo3QKsFFwJzuZZNd6M7iVJK4ohUN6yZrrchyn5WLbnr8skf8EusmB1sLguw1VvzECtxaRS64amDsFLiHYzr9j",
  "key19": "3htFausvL8WtwEhYYn7HLaG6q87PF4CUr9GyrK4Cq4Hp4ReiPJbeqMecdm79QDqSFLQqiRpqNUM83n6jepKjGrPm",
  "key20": "oohKyqWVBJYDFZVYxMCmK9yPZgQB89vsmJN2Ksk4qJHzMAG9EhHgNcgamQFnfPVosRfT5mTb5wsAL9a7ALdsX5J",
  "key21": "4K4dbFamQu1XESe51kTJTUFiyHfYjnmVwzHEzfQZ4eVJHbbqi6TnyUHnXD3Xn2jLcBzjfPK1J7XL2v8saQ1usCGg",
  "key22": "4r4boLJCM36oX6omaibk5cnceFzdmLo4nRLtgEw6UQPVPYBNcevWVWFKPsN5t2QWcqJxUv7TBEcCDt4YKq41ub4v",
  "key23": "676ypYgpGx9pecK41XvSyJxsE9HUs2ZwTcBBTMR36XyFpYVixhZtHnwBMzJZUkAtdWp8PwA2VjUK5jSa1w1qBtoT",
  "key24": "3Bgt2iHBZtRhDPDZWCraqJbGncZkqRtw8PYrhcHKBeLokmmrjvkSLRZVNvjJ9LFrisyNLGhqG2AXjMYQENrLH6Mw",
  "key25": "V3TZWgaQzY7hwtLk45ZPaYT3rt57RAAQ9T9LMRk29vUzuz7efyfSyzphy5y7Z8aDdvNsDc46MT889LrPiikN4uM",
  "key26": "55Zqe2PzfiTBT4HpxHTWnBBA21drJTWMSCv5TNdKAUvnnzBujemMQNTgSvaSduemX2kzjmNX84LCPghMV1uFz2VE",
  "key27": "2Am8PzHDWj5LxV2xnKxUWFDegfHyDctopZEHkWtrcacL7jrPjVzqewoGboWRrYeS9MGvoouNKb9R7n9csibMmfQm",
  "key28": "2fU4AWx6Xx8k8Yojyv1sKdxr9ZvTeEt2Qg6Ecv4GKk64Db1xLaEFyCkx3ZeGCYU49BrAsJTJ5DfSCcCLiJWPmkrA"
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
