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
    "3kb9mLxAVv6gigkGMFoj87FTpp3xXeMQFdSYwrG39yuuLvAmiUr8Na2cULUrtkYj3UcRBzBw7YcUxXZ8xupqNr9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "feL9VnRGKzEGixbVVrdjxaXp8e7k471sqYzBbjUQ2NLZoq35zKaw2qbcHnvuLwaF4PsrxK2xUbfscifYF8ZKU68",
  "key1": "4Rrjbenb3b2eNsTnczpTL1c6virsMQm1H5tF1CNbrNb5NEvekjYrW5B5pYQgzpGwAGo25HvfMaogyozVVMvmcJ5H",
  "key2": "2pePUP97pCc3rch6Hxqy7PCruuPp8Fb9u16ucSfbCYBwV3xVX6ZwNvzETLfFvRMNxEj1htTqUAgevEjSzyoUuGQR",
  "key3": "UXA383Tzn7nnaNf55GRwzxrfdwJdLxCbhQEBbNFueaHCMTVrsfivuztDKdoywXZuP7mS55LeWoEXZVbAEd6jxnx",
  "key4": "3oTapjjk9VdSoKLtzW441aaPTvkDRJRGe7F3QqxMUwwe3rQ4MuCnJswWLzSMZNt6CbvX3RnmVnLXvgMYCtsQnxW7",
  "key5": "3L8rgXiEe8ZvD6fmLWwv2EeFKPXcvAhSF9RRn3kxggX7bfhLwAA3Xe6mU4mwvu6smed54yVGHLBAGGncKoSeCdCA",
  "key6": "3tfzr59e1vBw1MuzNe6674D6gc5nkPwxr2ynbz4Q1dfewauiNHEz7TpyVFcpqHKbhi3vSftYypF1jBftyuMPzBKy",
  "key7": "uZCDmfaow6nUb7vXJHo6gWfNUsAj7nofzAmSVTWxDiGeatMUk5ishBv1QFTKiES5ULGzC1fM6ytWgcVQjCFXybw",
  "key8": "3ivUbhGzqvPYV4C67Yd6hj6zFyXLX2xyGQGLKDjeinRgiCcssW5QHA4afDj9U4d529VoQ2xG3fmysB39U8cZH2oL",
  "key9": "4WuGa2aNgFQmvzpkZ1kgeidsapjYhnMb8vCW8DzqEjaMcgE7qFrkTJQiKF44Y74rHKuMP3dbj6V153EbTDnx7dZh",
  "key10": "5fCbymjtNgJMuuDV19EVmPRERAusMeFLK8EcpPADdFSVSkeiC2Lryoy32jYyP1k1GicZJwEEKQw6g2JtcjEaWtYT",
  "key11": "2TzXaXevPnsJ3pmTh7wos9SsLjJ3HdgS6eDmgKorXMFLcDt737MkYAKHu9FsjcbrnejV9qHdygG1qay2NAy1QGMp",
  "key12": "3KXQBJUxQJQgeWC52EJ3TTtyFuNRPzwHUkbdkb4fgDBFNi9awhujfdWVHB2UoWqVccC4AeUg1yzx1tbLZLtkFk7v",
  "key13": "Cpf6au8xtUjLsbEpUgtzTSrTpGD3vhtAwhXDU3RfQAKJdX4YoWLHoVMnK78YKrc3vjW7hJYvmebhYz2hYnTp7ht",
  "key14": "4tp7bQxAnatdnxiA3oEhmf7vZaXqGmQ15JifPRL7rzxmKqUbeDRwnsSkx27gisQzY5FKuQbwx5gcHonuB57UteEW",
  "key15": "4wEg4UUEGHqCTqfDf1x3E9sPeRXTBYpyex9yhYTR17QmCba794ezw6c5T5zNL1Awe7JF32BXJG6Mb7H8Yy9AuKfL",
  "key16": "24h216usqGkoo5zPLCjdwd9YyqDfwVzB189NRWxFcSr5vRK7xzSrmZnCZESE2ndZxoaCoVkSHTFVF3ooha6ZFePt",
  "key17": "2i7QS4Vsd2zh8qcmYSBGPBzjn9MbVfBdPGxo1zJ364FujohqBpxq7R3Gu992ZXTAw8JTa7iqFu5XGqJK4uzkHceG",
  "key18": "Mj64TyS8gwBtjsJaLGXvHcyuUULM8yL7ryQ1Kd7Wgrb8ycvEuNUqKeBNkGcfdYCcU2db6ywdJXcwisqgFr3Bgko",
  "key19": "sTewJh8KstCzZpUy326aDnzoCEdJmTP7q9B56TwSbGjJzWnbTkBdhPLJ7Ue1zCRecvH4ds3jr1hhtRdVN4ad6uQ",
  "key20": "3MTLSN9aazAQuDsN3uygJjdjuw3RNnjdcyp3cCkPia9oceyPrJf5xF3n2No8WpmyD7RjYBT9boQiYrRJqMAEbXxJ",
  "key21": "8UVCeP6nXLmn4hPVjg3te9GpkgSQ6jYDmWF2Kyek9X6BF2QU7x5WUCxHpjbXGm7Qr8V5aPvotD9XjShaL9fdEvZ",
  "key22": "3ygdwa5s5iB5wRfNVVbVCeqLuVz5pXG7zVv7VLswXrUgZPm9zkiiqWNCqZjDWoUWqpDT688VWiLxvkgXswsijCHG",
  "key23": "5oGcnEHi7Nrp3SgwqNj2duBeByiaAcfi4gd6yp5ikTVExNbmsP7KhjMDYPkaY2af4tKxon8Zme9NDLY446N3vnTK",
  "key24": "3NxMQN1fBPbd62keQiMztHWdoaSbqtAeGhmxsudq9RxnWazaa35jdFpW5sbNQGAHXknLQkifno9Gs9G2fznPgm6w",
  "key25": "2FjAdJ67nknADKBr4vuqcV9MCzbrYreSmbeUaZzGFVZ8VNQWTMZebgLYtLgFzupr2QWz17hCy39f7wjkQk4Fo3sp",
  "key26": "2iLdZX7snKzGLjdeQfp9p4L5F9RYUys4tykozF63jD9pCz7eK1zoApkTVgMPW4S2kYTsmLsXPgdSjkaXuvqgn8Ek",
  "key27": "2xG3q6yPKxrVkg8TV6Bmrh2M1NbLXwgQ9LMJ18m2wu3gNJK9TxWdVUjCgtE3SSAtPuJee6KTesHBNkuJ7qb6mYiR",
  "key28": "4zqaxCzAGvHySztSJa4hXpuEwud7FsbxwneZoXz8xueJ9ch52PKrLjZjng6CQ3s24YgGdCz7BZTRiBkNqS1TBWuG",
  "key29": "PjCG3oiiwsEDQfpFHNLt5ZcHzPaMqoGsd3mRcvg38jmxUrBYJtegbUcnYmtCvSHyYS6acwL3Pekp4cWbW7AvdPH",
  "key30": "Y5hszzYMxb9Qvc6nNLDvuCghvFz33mPSUaPZRsMGemvwExt5bkwrbSibHFdtcDxxWFonmqEzwWDh2V9ELPXBgBR",
  "key31": "4wwZyYmNqUknMp8YVZwHzhYmQDkD8kZ5MrSiJ8aCsTeoANmrjS2R2b1L6N6DR69g7prMxWgiRh9qk86WMdWiEngw"
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
