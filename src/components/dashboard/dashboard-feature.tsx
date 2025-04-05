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
    "3Jw2Ygr8djEP3JL8kKUiMwUhMX2YDgrYw6gLBaVN4fHr7wxndyP3NYZ37HWTsuYyR3v5nj6DdhdnoJf1zMg3ZdQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mAAc5q5MkZyDLocDEUfkbUiBBmHPcHxPSPCUy9mEnJNNpLzwF4KBzza7gHj5nSYpoND9DaLjf35YrXDcNr8ydGh",
  "key1": "2EUn1RPCr7dtWyK2je3nTNCiKvwQaM4PbqvuBzLjQeNLRwuSd8ZnKQb2d4Mgza3xqoKgqznyDpiJYTzeM4HgY2bB",
  "key2": "4smP4L2kSM7iHJoMQD3cb3bb7vyECFcmo65YQVRapc9bxxz6VGUPAvRURZsAoFB7LGBLgXiaxbMYNFraaKVXxqP6",
  "key3": "2gXceHbNPcuWoQqR1nR3a2SFtXEKrFfmGsqMSRs9vjexAbnrNEKVWHGmA8qpEUGoA2fn6UQcWb5wnJGW8cjwZTV",
  "key4": "zNuifPkVZst5zJMNQxndQqMuN9Ysbquy6Tk6tPLXiTnduD55uBuYYb4QwTN3cSFLxkpReNFqPkYT9GyyGcPD7nT",
  "key5": "4F9atdDptMLK3eqZxdkrQE34rquHMiE6TDyCr7bqrZqb2Fpo2DB9nD7tKNCLbhe3jFMyibewqqqsuudaYXfKmioj",
  "key6": "4mwUZp7g8sFD6n83R4qpF4hiX183pZvT5ZTcdpVoGwK8sfubn5CoH6pKXyQaW5YWuWLs5XgSvHQv5TagZZ4R692j",
  "key7": "HTN1ijLt17fJzouT9UupUsDGvYge4V7C7HrHjFuDctMpzSd97SNXvPrSXTrrgXFdGAvSrTvMxHiHnbcyFewK3m3",
  "key8": "4WVzvHDWXBAhUF9Nw6taBNrK8451jKQ7hFeAFAzUmU7KuW7CDQqXd3grFL1dkwiwwFyzFVQi51BqE7mCMzGd9czP",
  "key9": "5w4DWqjHqWpmJ7TED3z2KGUWpjsC8bjpXMBMmKY2VtaeH1oggSBficJFqMmA5MQ4KS4KesZ46W2WMbwPLf1adgSX",
  "key10": "3PPWLZJ1L4Et8TrSmQ8NMr5o14A8FyB6hu9Fd5L7Z3iipPZVtknwDKti79QxYEDLcYDnrH3XAYFnH2LucCR4Cy7i",
  "key11": "2YBj9uMfoZ8Sqd4mpJxRCPZBqtKCHGYkZXS7vjYgg2iReym9pWdydYN5FpwLMcK7m2dyezyG5VWtCZShdmjwCw9w",
  "key12": "4QJsUpAbrnuz2wrw9q6mGayHHKxvvUxjNS9WfDUCqk3pXBRVrfSBK5iMKu3YJHKD8WYUNkziinY96AUJv3cCRQs",
  "key13": "4EiXGzqW1TFxBotXmMwh4aFUXRjAiHJnTyQMQvAXg2ghuc1wVGLoDB9heE9KzB7jpC64YL4bMhq9GNpMGchP4mei",
  "key14": "2GmVDrzhp6CX3UGcNTvUXX16rnDtjJKNroFpoConbC1JT2QxQwywoieJBoVYzqrSJ379DqmSytYmuznZDuRnuCwD",
  "key15": "5DhocSSTbrYo1WbxgyHvhecSiy3P3k8Sh6T2ASZxk4Sp1U7m37J7D1iyC6QGVm4W7kerCTxEL6SNnjJ9w9bFuXvX",
  "key16": "3Xmk595iGoK3MGZgeqbXDBGF2rALSsgWrp2AiDULucj3MdK4ji4JF5wDnQdNfHBNy9KNj5S97DytzGkQ3y2wugnM",
  "key17": "3tXRhUbFH6G3yd6evxyqn7jkpAsqC4jGbFA2dt5xaqPiHkmS3fpjj28TP9HHXAdFUkoEAiyQJ9Ts1xncP8EqZqTv",
  "key18": "4Mji1qLURazpwvPgQX1qzkg5irn3ggPpezBdohnu9m1EJEhwsgxEqGyL5MgPYTYpK4qvktaY9HoqDQqYpDD9kMfJ",
  "key19": "2QrZrS2HUkXz4M2MvVKtqyHdzUkuBgd4FfmhtDHo6xoqQUqwaK9gX2gYBH9GdbbsCwp9oWZpxNEuywdGMDfT1FCq",
  "key20": "3gTbgFAiaFHwZx5kwCyXmjcJbx8i7LJBDYoThxAUj1xS3qUSzFkZWeBvopU5x6NrvKHC8jQRXwUdT2Q7xsfgcgi5",
  "key21": "4rX1kXvugRVoeCsgEr9WWBUm3SsDykxYgCd8RBri8CR8MhnmBxGbkwSvqW9oAXKhr71bPKPBHAzVkwGRnDwchta7",
  "key22": "4FqDMqgkQKVGCdmFd94cxNfoPn1L6sx6caKoZmsAATWcQoMwo8Cd7wmAbp5eTnLE13558T2vfwRKij941qDF1Gaq",
  "key23": "5T963cDDdccUyasef2JAPkB9gfHJHJF3noG5PiCaFUcXTANCLKVavWYi58fiX3MewX7oAhVsCkQcYiGkErDheV7",
  "key24": "2KtfKNV5iFzXQB1GTpVwBJNiWZjfx2XREhkAzfiPJfEQMHcSNfsDnBDfHZhDcj2BwHnqZER8hBjcanJzgmTb8jvY",
  "key25": "2DYam1FGoWdVPc2JFpRN85yku4bUJftFZEo4R8vHCwNX3QSmr6ZAGziBfqMNUSNs2VQomiwYXsQqUsSiMXGTta8D",
  "key26": "4cPDHMD6epLyoJeNQCTSWPLRBEEE3Jun4VYPRw93Hwj2maoVGF6aWZ9ZpUQaXVy8aJLXhZ5gUYdYmdG45dEHBGaY",
  "key27": "27Y8QwS31YFtGArQo9oYqnCoLjExb7JoBF2kQfgwBXjNKAhWzrMyGgq5PQ3z7NhWc4vLd6tLsY1iLwERyrFXm8Sw",
  "key28": "4VyyAJ4p8jRzXNNRWaMNKf4PsoMYSgQ2oBh6NDF8Hb5TniyDSMAMngpE5MEuLSmYvqKbj9ZoBkpxpRZRPtgMBucg",
  "key29": "MAUB1NCbbtFmwHvb2CerjPjVZupeJRCSy2JHvioAV4nBJeAnBTSuCdDQQnQ7RbqX9vy9qxg6fCiYMimt8Ad2Znu",
  "key30": "2hJz4SKtN7hEW9EqCoEL13j1UsnzxaNu6dFZMKuR1xc58PrcZHaHrMvPoRSDBfWZmjrwDEru1pXXjQMkiMnbt9xc",
  "key31": "5KPrqWhGdN8b95tMPpKhv6Tb9kK6fVU8EPMBeZVSVJCWxatdPjcAuQRecLutZCAke187eJunHFdNGKwADJPuUwnH",
  "key32": "2Qnjo1bGWVyzFSmuPuYhwYHMz5BvVaxDPwTUW4GLni9rymKu5is9k2AkJA3GEJSssEkAkjtwnU7S3QiVEkfp5RKK",
  "key33": "2Diqw9Q5jqxXGX5ivQphcBaYWfkUVAdbyWA4JYretXGYFJdbqRLAzNSk5U4T8cPLhvxQH7SvP2AECEffd9tpUH86",
  "key34": "644ZZhdVSD7bnFGRjtzmPARheuV7SZmGbNzv5YrhjnfcbsnDGa9R81yW3jRZiCwA1iu78PT6ZAf8zQKZsZzwvWN",
  "key35": "5jQKrsrz3m4VE2AQ4ncZyA4dZfhe1Nfj35VSx532PUv83NYwG2p4U6n6U9UHRAPbbXSZ2zdkHYDxX1PEPVasNzcp"
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
