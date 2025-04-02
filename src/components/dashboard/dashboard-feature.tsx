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
    "WMYuX7GfnWrq8uWn34nE5Ctgcfz62L6sHmVBV1iBgsSZ5fkToA8BfJC3gPeWjaR8CHTseoVuELfTkiX7ruimaRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EvhyAEbCL7wkjfSJ2658QDHFS27qJduTgno6MyJzsKTJfFWX8mh8XFKCvwubsHTbokGVSkXt9cF3fUQNRD5PPhN",
  "key1": "tmGEfHYW4GFZYxPCLjM8uF5J5BGDyM63AxSR1dYM7ozxQR61GKZw6tiv6ihscNhX6F3PURizkF2JGDh4pSEUfXb",
  "key2": "49nFauxXnxB1fNKpwffY3Yi1wenU2kjsXoarhJMNbW1PX2AMTKwiTTaEQPM1f4nA95Kr3ApQqzjF7bSgrDkD1zfT",
  "key3": "EKgKP66rWBw6qZdZHr6n4BESGDbVmgne7idRwpCt9WzWmmdRBH2qTjYmdn8YNN8TYe3rSJ5JKSKvjufnNt89j3s",
  "key4": "3VZGG3Mp47wbrrNWMhUwLRv5ViS1Zff6tvU3eUeKxtYBbXdF8cGyJ269tLKAXc3XfScgTPfE9mjNjGY8p3Whk8W7",
  "key5": "Njn8Jbnp8eBr4Y4cWp72m99aMVFkiMB81HirxHid3GN7hB8T7kUanzbuRdJ98a3ngDiaiCAAfb5YQENy5JfmjbE",
  "key6": "xpnWYPaPk4XtQWMAgJj17btPsLJB2ikaTBUom7KkWopuqVWcRQv1spuBR7wo2GvBw5eA6fGMcEEKwWhuC3YjmMq",
  "key7": "3kZTbv7tjaCxbfXqxsPC6ULbHf5VrbjFnXheg9rsqtt7XepDJqBR2jJZgdvUXuzCTYRayhU3AoxC68KNPxor42mC",
  "key8": "4ALYVPWrnk6P56Px7avBGZQRiwFWrc8TAWvEvSdLZ4hmJN6L63JcU34xKH8QYJstiMxMDQqxzNjaKnwnQGjkMZj6",
  "key9": "4c2ijrmF97YUT2vUMp2xQd3vYnjThEAaqXrM8scMYPr3kKSfA8rXAgf6fPzBdhLPTMksoH4oAyV4WVEw32UdY2FE",
  "key10": "Q39VDcG21TsBFRz9qAoRen4cWv5ySjMp39c7ECW9hcVSPqY9P8A8tg8kKL3UqMnuGibGykmEtwzGhqbKXnA52Ls",
  "key11": "P4eJEJiLrV7RRWDS9UbzQ9ncVoT8Hs72gh8Swg64sWNjR58aXRpR2suwK5F75x7jbbZf2H2XyonCUDwkSYdWnDq",
  "key12": "5BKey39kawqwAB5dW5qLLyZgU2aeX1hrLyTwa3igRgeD7u1Bc6Rn5EXanFeFHeHs1hbCG61UuwS8KQSkcoCqAdSQ",
  "key13": "5Y8d2XP2jqGo2GchGLEgBwhSo7JyynU12Y3avZSfUwQrugNBJoke21DQVnGCSvp1CUWN4VXtsdC3dCA8LZvpCD8h",
  "key14": "V2if5HGiYVjZVjkXXKaw5TFiix3uSrwRRFGQuSCivmaveeyuMbfRwPCg41JZ2jG4gBv5maM7eBq32oAvA9Xjj5K",
  "key15": "5Kmpw9uiT3rhn7uU72iZWKXsUbgioB4JQvwuZr5JZxgmunsoa4bTcDC2tX6cW3XtY6QBsQZmTA79dgU1DfQiYKSj",
  "key16": "QdP7QvFNWgDXXqRsXiVDJqzksKYzhQaUbu1BgYvDKCvhVgdAiX1DXF4Lrj8ZQYwt2ZtoRfSfAo45JjgsfomUNCZ",
  "key17": "Ghw7fQi3fhiNiWjwbqGFhV6qdBWu72B7utfuARqh6Ts3mw7hPdsVY1W5gjxewRobFXi7bX6uSQnu8W9W1hX2VyK",
  "key18": "2NETb6EGFvnZSXDTPxa24YZujUuFzWY4mrwJuh51APazS4BjJX5da6Qvu3ssTXnoYtjDRqwSurCgUxXL7RXjRH1N",
  "key19": "D16Ub5keRbfjeAAFzXthrFjhnd7SeBZhPJZqktbMHkLQfJibhVE8dKa5NibMHKQbyBCaRuTfrvTkhYSz6ME6hp2",
  "key20": "5STYrpw1vUwaFZHJtv4oLDKT4WtEmkoSDLWAPTACHgx1J5tq9AmUJJGMDkF2zpirbzP1vx4nyAb7jh9pWmC3N3is",
  "key21": "4p5vWvWf7epCEGsVLfPaxnpJUB5AHjTMurmfAF7bhTXDzYoEbPQ2yXjLKV1tZQLLcd3PSb44sVfMoMTve8hHF8qU",
  "key22": "2wNYY7a3ZUVFZtr64i9DZy82LWmuFk8QncjHuoZnVLXmhZHt5Zcd4cQbDeLf8bdTEjovjT3eZczudmgW4Tcs5nLd",
  "key23": "3b2mtejuK2GeMoE1ZxMKYam6YPuPS9D2kW2eRT3CN6f23fhrn9Q9LeTQBZun8c3tEdpTpTbWAvW3sTAf5KhNEMiH",
  "key24": "3GiGv36Zx4VA4N8EvmWht5ueWRyL8k5UcSueCpkZMtV1x8CpDw8qPFXUjtr61XP2emjLtXn7x47TeAqYNbxE4YSo",
  "key25": "4YCzZ6W5G2vnGQUuRPfnHMPFucLeBhn7S3NYpz2tTr3qaqv7d7CrJhHUpPgcCEjHzYBBKpf8iqFkN9McFmT3HJpt",
  "key26": "3qs13K6vijAZpxjQTEwdtWRvBzKSWD5LYUHGJPNnpqVQNEMrdsNQFT1sjvQEAfRy1cBdPnBY5LZvrBM9xbbmeSAH",
  "key27": "28wpvFU3PRFPG6fKKWDWbsg7DJUAVtsR3kdwR77hLTvQ5chAazH1cF3ZYRCi378nCjBEq2XNtwjHxBny8UvxXQHt",
  "key28": "2AFWZvendfTkwHtgfHWVuVAnB96hu5zvPCbUiCeqRnqN5hgGEmYFrqjc1rkyC8N9nuVXJ9efxPw5UKTLXaVgnV4H",
  "key29": "42Z8byDbALtFZmmdyNfCyhTLoDWZAonJsmSBFTu2qVKAz87EH3aenmYREXKEUsLB4F286H1yRQvPA8Lv3PhRNtRF",
  "key30": "51YQGFZgBMtMfV2xZydFs2pUr3z6fKmdp2fXdwyaKwPY2LUq4UgSZvejjC63hEy5nkftL3K7ri79qgvr3V7HEJ5n",
  "key31": "4MiJd5xRFoYUEUb9pN2yiNsphNKvC4RbWgQ32UywnZsirV5hbo6n9zdDWi8iYkJHNEGRXVGHef57Y4rdhnaV2M1m",
  "key32": "4ss1EF6krZsTnri17Mvpig9rDqD6PpbFC98XtmaXeEXvuhMKmzfBcFdwqF9x4L4YbRwg4hAnz3JMeSbPVeTBMRiF",
  "key33": "4GG9kLR3JSHo4rCbUqGbm6qqP9pECQTnSw1JYmLdWSxd1MVS9YeeZncLpzmLUpAYv4aEBLwrz7XgCqjfb3xdR4VL",
  "key34": "62Y1HWquw1nBQCrVh4nrKoBiE5TbjgEUY51whWE2xZdJdCw35PzcqywB2H3kL1NqsdiTxHsFHP9ZqRYn8XMhL65U",
  "key35": "5h9cPj9anEhDo9ZaEarv87TFNLQVyt5twBQyYJaVwxL25qJZYHwBeuLsE5zgUtDNFodeqNKjPhgNt31ANqiuL75S",
  "key36": "2gQYdMXMbGnkAdoX1zoowq1wBQgbC9CjJ2vPLEnxdZJuJWPCruiS7QLYUMokJMhMywJpa9GdhzUHtNQRTqQJYM5d",
  "key37": "5ZwiXEnXqMEMMyiaXHjsfeWt3pxwYktDTnMVoD5hbYjdjt6GTuYCBYaYbqnxUfW4CdJHaq3hg4dFV6vzaFoKr57N",
  "key38": "2J3UwmZQsX91rJiGeiPBH2wJLx1pc9cAYviVjKH3DDUF11rYjpZMRu6qjEQT1TTTGhCi3HMh6JD7QxxnCY4qEQT9",
  "key39": "5r9YyVSdsQXPRGeNLo213zNmsKYeDry8xesyC5J8hxa5F1DZUdcFyVd8ayA8Qu9PgcjdetxeeVuVGy9J9BeqUdRb",
  "key40": "2RjbLYPjgxErviFBQibysy27qGVW6YBG6ZLrjJJAAx5beS1SBq1bVNHb6ah1g9CZAtcxBP9zr94imQB4WHtTzCgk"
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
