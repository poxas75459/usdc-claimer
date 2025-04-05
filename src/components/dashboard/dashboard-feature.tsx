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
    "2sFEV5iVRJ57GPRAZpEA9H37sHDmrgVB1JES2TjeUHLLm6vTHKzE647Y3dudckN1dVJeHnY8APH7heREF8Wiayp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fuNyvtGJsrYTgvjXroUbQSvWTyVRdqNB398dVQmJhzqb7Nhp7jy342Kvh4RE6wpiFE6oQzadAiz3MBDjD3GDkmZ",
  "key1": "sLXYs6c9BcDyASdV5YSLhx2k2V41LyX2YB7gZm3y5jDJy9QiYH84byEcVVufUokkY8QF3wcovCp21ymvxEhKamw",
  "key2": "5wbX6fYVcL9MCmsZHfFAzvod2oZyWu1a6yLuVrptBSJQHS62C8ytQGK8Rg3Zrd4bjbfNEGpPSSZE2r9hMLfPxKpM",
  "key3": "31uxaUug2z6Gd7CLGqeCfoj3AQjP5Z4Zie93osQzm437uxvdti7yQTsdWZiDR3gFAEsFdKHDe8MPxwthABeBqrY4",
  "key4": "9hcgJBFHAPCx7v5CoieTzoXuy3kyeUPQgoMN3VM4C4NGmwtzLomjVfAakoNvfTNUt5WAQHK4itQiWs49XgoR6Fu",
  "key5": "CjbFHAYzRghWRVCXK5Sno2d3puDsKWR3kPmRVM1PUmhRuQWuLvDWprtShesczn3ayef5i3oxMaEiiUySm84aE4W",
  "key6": "5vDhHbNoR8DzNvUPirzjq8dCQkSgEGAJjghms7eZWwysaWJFb2NEypZ8i1chwnviAW5jucHv36ggKjZYkxdYqwN7",
  "key7": "23VMqCU5U9mcoGZ9JZyquXy9jXD76zZYoAwRm82BbkBZGrAaCFAM6EuMGJHm2SwbeyvwwPPGX7gz2svwTkjkcKFt",
  "key8": "64GDFURHvZJxdgVurNHmuQKdMpc23yf1Cexr5HNLaSr5KJdUWZGizLPwPnZMtg76q6buN96BGEuZuvmUpZSFaMnr",
  "key9": "5XxZNSDW22FcywuwHxUvoc8qjKdBWVT6A7HqvwRz3utMgzT4rDtGn6xxxe9f2JFEPTUAUXE35jYWVn2hKFqfvW1E",
  "key10": "35VEMa2N4RN9qcfKFZgCEAmgprowrfL5DhQHM45BS5MP5Jpp7tqjzPwQ8MKiTvRNDZSBBXcvVSq3q3QgbQ5uxKSt",
  "key11": "3m533vReqUxorEHNraoQs84m1zxbZonkcnH1tV8AtCWgKNxQNL6WMX7xxZsFEutMCmFDoYPqTsmcdYzu4tvat6Pi",
  "key12": "5Cn4Bu5idV3WVXxJUi6goJ3qy9TcoPNp4Zuerm4xq8ZSdUocAXZrmBbfzx6x4ByAv3az1ED2ineBc1rsicnrmTa3",
  "key13": "5NjqgMXvCQFeXi2FDLZ7MrLikvRCqDadS5YUTJ6WYbitvckuJGx5sdw5Y9RJYvQp2yHf2Dbjru2WJx7KekCJc1ep",
  "key14": "5JDc7HM6hgpCmBYqHSYuvy1woeBinYFURmMjUUMYFoy7WY57g86Nfhxz4GW5zmirqPnABt6cwuJEXvnmNk5NFVrb",
  "key15": "5bWnpVh8cTZxcyy9PzaQAi3kCCYHsKVgSSXKhKsQTqaeXFZEwBrLUKMYRFGAhYGWXZehWsgxBKgT6WpjTbRo5zMw",
  "key16": "2xjT9PsYZUamoyBYTLhM2kpiWavCiopEmiaCPUNaVHknjhk2vmCgVBN8rupQEy7PEY2Nfhtx8h5YSuF33cVrqmFQ",
  "key17": "6mKUnPSGfMv7VEPM98eTn9stQioBjcmKrdErRJrJQ11owMYY813Kax6uTJcLFV7XR2VjyCbhLoJegvHt5GZVDwr",
  "key18": "S1Yf4xD6oxA4N8kjf4Ku6ZfX92oX8HSdoUyrCmLjRqpP5n2dwNWinz1iJwiSAVicFZu9x2WdgWfhExaS4M4S6Si",
  "key19": "44ZxTPHnGzFV7rNty1bWSBhXMH3ji1Nbw6tPjVuuJNRrob4Wuh52i49YSjuxwyMchr4Rv7yLiFBSAogxQhU2oGZx",
  "key20": "2dBfiPzPMGkFyMsehyubFCQWjJSaCWQ2ptURBSmH8XoKwTkVAFKFBEbXsPGdXB9Qmpa7P1g7YKGbv3Gn1RWQH3pB",
  "key21": "4tHiHJTNpkD6g5Dz88DBPXW1xbFGBw989b3xkwDzJX7UzMbc2TBcGCkJUkkWvUX5wXBFinuUYDQUsZH5VYq62Rfs",
  "key22": "u36Zj1NvywUjCsEUY7Dwv8vuJGMp8tFE5fPNGAFGufp9puLsYXFd3hyZm7MjQRAG3848MjJbk8ZXDVeBTwqSMfa",
  "key23": "35VYJz6pzpv9ZH4j6nyebpQYFfapwdpjkztYgzPdQJjEL94vDuk4AAeaYLtomD2wei5Xu5bbuNoAq7oVW69EggHm",
  "key24": "hdyQjzb6tJ9TLwHKwkRnVzZKXpCL8nGuBDU2GHfPbDcMyzfzV3ZgpdGbn6t36hehbxiFJ87GGTWWU8D4e4pSWC9",
  "key25": "24cjRT8VDC3W3WLAx3ATr1gWsrPSuzhAZaqCZLVzKsDWyruGrKQgUxWRVMrnsRxggcCrHGHFA3mfruPFADVrFS42",
  "key26": "pwPez4QNZmmSn1RiVMuqhVtDVKdkPKEYbBomEiFNrvyYNJKH4LonJ7neEm9y6vcEC3zmqtnnXnSWSYRjNtFidC6",
  "key27": "3M2sP1V8hqxukeEc3AFfC5R2jKqVks8yCZBZVbnnJgBCAzWGyi3qJD68PLpZa1vFezA53PvdWiv2NuFbKCjhwhnz",
  "key28": "UPbTLoQAwTkyygBhMpimJGKbAX529UFrb5dBD42QxgNrKwxT2FDBKjcSxrrTx2uuhViPTDLN2rdw8kYCeFzoEFW",
  "key29": "3wVxAD6SYwAKPg3GKCW9Vgttyxvknatu7YWg6pDb34hGCKHJboSnQTMfGZe5p4ysK3HY8hJcgU7JkYzjLbTsCj2v",
  "key30": "6KLEkX2yHgedDbEkbkTHjy9Hrdo1Eu9jCniueh5D4TAvya77d99uBd8h2jCdEUtUBR3MwLwJii2iJsHSEWh5tLh"
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
