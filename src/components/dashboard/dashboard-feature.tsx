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
    "2RYKSJwqujqGaFMbp5SfrYKrcLeQfgcuiychQvxbQt8h1o5kQy8h6cKcqY2wC79zGnXmZeZPojkL1889Av5TN4z7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KR8jmR2jcSHHjU3GqTN7xewVydgp4wWs1HcwxV5ab6a6F8sFvgeRy9aV1AwkVsmKknRBEzEev4BmuTAZHb2oTz",
  "key1": "2kbDNPU4auBxfA7fyCX3ZPm7JD8FKzQBqVnwvpX5JwkK85xcPcVwLTjaoPBHtpNXNCEbnekqiEkn4AzWd8vshGXB",
  "key2": "3qiwyZb7EmAQJKyvByZyDnmZboHkexoueoFbUm2LtcCTpE2rfUYhYx75LoZcWVztuL3n2NnBbw893KYYdC9FFB2t",
  "key3": "mSg3GVhak8CWK9PK5iPKP4ipXrCqivChzCqjeGWyJ9pUE8SpBy7axHZJK8oTT3WZDULXr6LLeB8ynvKFjS5ZoqR",
  "key4": "5x2Ru9dSQGcara4ojBbnPDCGGufcMS9aenHdukLSJc2Tt8Ltj4nXWTZwQpdiuuuc2xT77aTGhm8DbbNZLVi63h2J",
  "key5": "3mdbE7RyAsLMwgba9Nh73oUo3AHCkY8Du6jyDPq7hGeaSeiBZNMk6Bj2vQsrHFD8Yh4KNZHUupkNsTA1XtbFuXfb",
  "key6": "j37ZWirLeSDcPEUVyy42aG7psAZnyXcy2nvMkp3qs6FNvLpS4ptfR7xfaNK8LCHSC5cy4B45pYX9ZtchFdRiJJR",
  "key7": "2gPJqdhFbUJ3yTZxvZMMtNZiWRfCCYjkActGurz1JWp1JZJT4PZdo4t7jauqskSEYGNWewJenx3Ve1QpCxYoTQMW",
  "key8": "41yzFHhTsv4MQzgHVKiXAdEfD1e244G7yes9xq2YQSm9KYyxixAJeGAi3jA4QWQLN9WviMWYFnRPNwV5dVjfjkec",
  "key9": "3htdY91x5uaoCa5itm6MNE2tTGBi621SnWJEBFvDjJFQsHKUhMfshXcJDdXvWUPKs3CSP5Rm424NbkBfMNjtKJHV",
  "key10": "4zn4Q9FhSKExqAX8V1NY9bRPHhw9mBn6vwabiTrdjLpw3A9t1JuacJ6QuKSJKwUwRJ2rkn6AaYinEuxoWNyy6DfX",
  "key11": "5GfoUYRHkxnRBUe5ymbK4QrHmvFdAmgzwoGjavvjZfuFnVzNu3ukXMGqy41kMcc56n2KrJBZbx5KAoFjQvqS1WHj",
  "key12": "4BVbDLvZYzGqPXu16backi2oKdYarCGPckrDKBDoa8Kb3kuJHwXN8422gzca5KgCsYqHMJ5yCtxqNi2sNTMMiwcD",
  "key13": "LPZxB9wGywsQkJrLm7z76kZDfLFxNGXe6XVEwJw2r4qke4RYBa9Kvti7pXbR54LcyNWxr6pT8ZkS32M6uadn55J",
  "key14": "2sDSMDAWVxc8xbPvRyQyY5ySbPqTLEGwKLo7XCc9BgLRehwEuWuNksR3YU4utGeW4Y5tTMtNtSm5X9T9n2f1af7p",
  "key15": "2rYTMUzVWay4xnkE3Rd4Mo8sntwFmKh6A6i2S4Jpjjpop8xvqdXvsB6jE52DL5keTWWQu85A3Z5t7g2a4Ym7zcTu",
  "key16": "3yDz2rn1LKDsRprPfG4pHnkz7DsJegNr4d6tSWGbiJx4ykoKGXTvy2kWB2zjB4BW9nznLaBjQNFycmtm83zDDo6k",
  "key17": "4ycjsXY4mht4FbLvfymVLsE61kfxJHDHz2H5xK5JYc19YqA2QMdh1HpiydpNpYn4iyby6YYsc7W5MT7NpdgKpjfu",
  "key18": "67k2JrMvxPdN3YrWjXdk5gEqnTsUcHyHaRmjewtttycYK8camA84aBu9McVoWVyr1kc2Vfrw8DJ88bTybXRVDfeH",
  "key19": "5euT96D7vtPsFQSJA9cni48JzhAvrRQWwJ7rjjNds3bYKdvW2FP89jx4DtvVFf8MojBMTAYG4jNxzLM2eqnNWDBt",
  "key20": "4vtFPRHdDdQXxz6CYKRoJxBrD4NjVgecYcTMvsCEeKVbJNtFfg2naCQPbGSFPuoyJBCALVSSMhmLboyyGbau15AH",
  "key21": "3A3Cavw3tagFr3zUQWbSx8kzJYoeQUR16Zv8CZFf9vV1WND8mJGuxMe6p66W9szVPQu5AMBR4QtKxpN3Fg31UzGP",
  "key22": "3GpbNBV6gMRHtPShMsuaACMSEDQcqgHig1nK4AuJZLE5v6F4qRareGWaGWoSe5A4erdv2xh87UUWbwoJTEFMfAXX",
  "key23": "4U9zXDC5LYNu2RkBph1qvrWT4xdArSNZMGKshTTqMdTHBgwLim5CgZDUJqyC3q5V3trfD9bWaXhm1MaaTL4NfMhw",
  "key24": "4WSHk3o8f49eopBx4FxPyHN2ZW8LyGekHjG1yBn7ojXxdegGoxg4iEfehjhP4Vb7s1kL4TKmvzkA9qUQpKEZaY2Y",
  "key25": "5v1xJ2985UenkTHXjSchNd9iQsJkhDB3nkVEgjyU2fMBpMFFFKmTqQjGWnvpn9dmeNUJBANboNE21eAyZrMwUYFQ",
  "key26": "4nKWiPczn4UmucSeWCJwwZFrzV6dtQ4oWiGZAYf13ZEtT7ScArL64aFvhJzrx4xAnj8uNWtAwj2dJCxGPksLzPpw",
  "key27": "4H2DwjpZwiBhuz1TVq7JDxVcA3KHv2MeibY7LUtpHn2as6i45apyEVDX7PnqQYbGHbAxmCv6VaPjXcb2oBzZta1a",
  "key28": "5SziBttkpLXyGdbbX3HxUZb7mt1qV5iSHVHRWcipZZhxEdez7obncZuk9TCykNkAe8rB9keAoB8AKjBtwyYHHY6Z",
  "key29": "3kjVG6qckmfhQR5BZc4fA9omnCForU32cCDPr3yWdz6v2zmvw4aHHpSNDh7B7odgcgWUASjDGBSSeQP7VDP7dsVS",
  "key30": "46rkV3ABawM1dRX3PsegVQjDhAz6DfxvrFDQEN25bpFAJWy8FshsrwuqM9hjGopShPfqoewf4V8xoHWX7QySXL3S",
  "key31": "4hQQPfQSQMNtCvx3quDvHtdjgt8d6PwNEpay4pLjiGxiFBsUqV3DfJHrPyPzTgsXLxL5iEZfoTAXysDKJA8CtSS3",
  "key32": "2a8vRXnT1A77Pcg6UFoC8sCxB8p771WUS5CRKXoCL12uSCJD1RcFQdXRgHRcJsCuiXQ5SSSK7xQVTJ23vW6bzaJi",
  "key33": "5Xtnhc1REp9kw9ycw1hWecZ1a1MeQiNWHLxUcksZVZtcNrRaepwdHppoAjRtu7ocQaGbAhQirDPH6gpUH2QsThU7",
  "key34": "5DPwDZU8ZaK1cYqxnbtY49cfAjpBajKvgvmufqFPit3mF4AYR2dd7SbxpTatC4eqBb71GRdbaBKvDS3WqYqx78tG",
  "key35": "bTC28x1B2AutPweQ6Goea3FqrXiNBGaGABq4tjB7SPZkzajgJvopEiYWfzsaaTRAaqYxw3yyXrNnxDo7uJUwcHH"
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
