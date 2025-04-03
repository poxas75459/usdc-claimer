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
    "3BhnBGtxtZP3TKdiGVZBHkKWXVuVcQqBeMmwXKArX1Dcam57xfVvHT3fhu99GiBUUvk4u8vnKDxGHDQ3bdpV44DK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ftefTrgoDEYEiU3ymXnRUyBqyLBHhPtCZqWjc7JMuEYyQE7o9U3gg5aLmPWhYEMFK3TRachMzL5jH64atfQT414",
  "key1": "4KEmHEpdgZUDNCMzx2ahF2gReziZTD58tXjNusiwmu7bPaTaN6B28JGYAaaxsnnF8q3GYk1DAFJjNKs8LwsAB9EX",
  "key2": "2FsUakv1wJZ3Lk9gCsRAsdUf6wQyDaxodsoL6W5BdGZXYqfaLWBYumNejzNtFJGWjN9QuezHJ1UsGGYcFBFP8NbH",
  "key3": "5VApj4VgQkG2VUcgaPeYLgrmPA82WdNmFqYxh4aqSeC22VEBgRbXrUBgpsqrPyahiqi3RX1gv3MMPHZGin6JnTtB",
  "key4": "5iX5q5f7NYadySyV9YRhTMEZzGfzwHJN4mN21q88Z5YKmsNuWxv6Kst6aQKMxniomEk8qbYceEr5pbx1TJawt2Kj",
  "key5": "4CVQoyjNsp9qZdDJmYmfq63vfThaWUwATrHhiqu9S4fjwcMS3zxbubc1mNA7VGWxM18aP9yjE4TZNpSUfcZesyYC",
  "key6": "3z1gYPwf4jg5BTP2e9wgsLeuGDfbhUU3EkXfwq8Dgv35P4GvK86Bh6376k7Mh6BsR72kF8d8vJVSAGySxb4oGcq9",
  "key7": "CaFJkxYDkYbv2gCZ1Q8aY6ioqKWhHCeNbLoB2E32cLzCPkYitfZqttMDihTD3uiQ85tXEhVLMXL9KFi6apuC23c",
  "key8": "3Wxkfkrg4QrVqDNmdCiKgJGSyjyy4VGaARU2REjycc8icGMC2AijE7vY7ZJRRKa4Z3mCGjS4jN8AayG8xFULvE98",
  "key9": "u7hPbZVU1GrTLCw2z2PbwzFzV3QzrzrUfVgxBD5CBURpCimrNcVwQbyNzFhy2mCY6VFN2NvnkrF7uRJVrg5D4MZ",
  "key10": "4zV4qMw9eVx4AHob4h13YnuA7WqRyFnFnTXrSYpcHQBg5P5RLBsHoYoz3aBXYX9aXL1gFHmthA8vvyi8kpS773aC",
  "key11": "2tvtqHP4A8uD6ZUQW8h79vvmZzz1pUTQmdCbRQrxJeGeHzbmoQAFB37W98Ba6nqqzmhqkw1afy1XexAy9vqW92hq",
  "key12": "41UKDonnS21u559tZ52sg2daK7yh4UZD3ZfUrZkgMFfK1QDag3R2Yp5Dgbvbnm9ypCLAgFwDMrgHhr7AQTETc31Z",
  "key13": "2V1UFnMdz2KKD7bn6Yb22iNBiaKghx6tMkvKL1GdPhpL1HdWEx1y86tQoHxyaPDEyT64rKt4qYkZLetwdStsttDK",
  "key14": "2EKudkLTMGMshAabjbnw3Jn91ePrgFQBqzFvKvLHdQ4qxWb2VVgyYLcEJ3q1B6Spc1sNdN6q5B5Gy18ujhvaH8ER",
  "key15": "5wtJ889x3ez9gb2nu3fwaWCZh9zAjshdi57uoFYENDnFrLg9ZHeQ488at9qMxiDR7aD9sTaKH9yBUqhYhzr7YyCc",
  "key16": "62Jh93u5hYmWsz1Moq5Q6wni3wFiw45fRmBXAAZya8jFJQ9Yx99Y81fMVm3fUqUFeXWHgsMsAJzVby5UQXffm2pX",
  "key17": "2gBndEHg3S9t5kmYFAorYYY8p4PQwfEBdkVeXLjxU6AVpXn3k2n9k8pc7ZXyPD88S13NbWxU84wrTVWFDrxgxycH",
  "key18": "5PDCF5CupuGhTGKkAujfhu2nH71Zs5pK7tRDFgipxUqcB1UUWAPdV6AT4fp9id1DciWFibEwWFwNueLRRE1jKJoB",
  "key19": "3NZpVvKEzcpmwpzTpC79dNVTNxUsGpLJMCt99E5ytXXXDhN47tRtFTgWsgwkcbXRU79n2n9W7bbTMrLCjMWU68v4",
  "key20": "kSaXchondXNpqQw3k65H52MRSeyqv51iqhsG8FjGwMiHPx2pCyJsbDPRyy8uMi1ifr9LtoQs28FzuTdWuAUCdma",
  "key21": "3yeqm9LfULjYUXn2aqAzdmjmeKCzeeuyxmHFD6iN6ykk8n2eQKu1rNEswTaYa5NMAjEaTGmzg3zQsAU8iGGRWPQr",
  "key22": "4Kf34tJVqzu5mrvcxhRs64CmHj2xSVfFbZVCfKwTki4iX5jW7HC3WDM9m2hjUB63hgS4ZfiCRrH6ArnojLYWhzV5",
  "key23": "ABbwunyfi8kkbgW3xhLk2Pe3KfPwo66rkMtzt63n2dhRJbxktKGMURqjG8g9VP7MmAbcMo4Kgq5y4JeAbaK8r3Q",
  "key24": "mFTd5CgVRKkM3AZvVx6GbHbZmMEyroWTbQWjWGJujCQ5pgLRcHW2qKYGs6vezk9oYF2KmjqtPtBtXnxoMZoJspX",
  "key25": "5mKYYWsHzy4AadSbiZuwi6pTFjpUVoYD6c3h3YM6yymXyEftoHiXEEsQCaEfLtRoyHRphUZwBGvbwZCkLscwvdL8",
  "key26": "5Sg4TwoKwLNgrLJrt6m6q2ZgQJFFpi1ujZEzmgEbGSz6oYYApBdkQv41teTL5R5mUfL8JBzaXNxXYEhRVRLZooxW",
  "key27": "g8JnFCnTgC7W6ApS14Yg2zPAe2KTnChVdeUPYwBRMWmcBteoM99mJvsedf96pAdA1j6a1YVN8CU1kX3N9nLpMo8",
  "key28": "4mwWKmsUVfER9A2AkHkLqqCmz7fb1q1okQKJokT2k2bfvy1ao2tzBtZUfjFEYG1PAdZ6GsMDc6ZNUL9QwTk61PgK",
  "key29": "2DiDnZPYgwZgmfdLTP5k8LP4nyKaiPwr4RmgZJTR7TinKqhPoaiuBdJtjgaL4eMgioHA1LhXF5bKpV4bELn4TzQh",
  "key30": "5US7tYVGS1xipdWAT5PKM4g98E5KnUSdRoiSLrcF5s4nLeRVFaxDPszSpPm1mC5B2F8BBRqKKATzWifzvAshfimm",
  "key31": "4zurwvnLaR6ZgkVaNkBimznhhva9ENJv4gAkE9dwKDezvyWtZJT3y4SH92a3nTvqZ5E5CqJV9jb9PYMZkQQZyyGv",
  "key32": "3wBxkepJUysRVvPRB3YmYdH4Z5Kwo3XTC6ysojkxXkg6vGBu94frbbdSm8huqh3feQTe6PRuGGN1T76LPCah2iGs",
  "key33": "7TksVxmconMTdrBN5d7rKXn9rCm8bLEq76wUmgecwW6rbb5Nf2nviPoEeJd8V8wxsdEjvHxY8ETcXnhCZRA1y37",
  "key34": "57WmeUhAcnh6qiSBydiXiVDHj22mviXWTt1YH7g898uVUc7eR2Ec1bHvpkjZu29vAvxZtVEiHpFfvmHLVLXBfWTx",
  "key35": "RNDBUCntK1s9aPPShWHkTmudd51YkjP3Ah4xvvFXgdH7Vva77kgv7kHxqUyC9F5iRKymwc548hcUTRXHLTEUE5L",
  "key36": "3WRmWEkoujw88b7XxHX8ExVPxQYqFZ7DHHLPGgyfP4PwkNxJDZNtmH2V3ed3zHdAZRUQJyNKX92gwPfWYpmubSZB"
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
