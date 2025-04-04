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
    "2s6WSs43ygzthReBnuUoXnVHhWoBzguyyyEo3W3Z1HYPgyhqP14Gx9akc5U53icBWuz7GinLJJDh3J1BUgPA77d9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "459AUmRbFvKzzEVmTEgxoKWnhqkwc1tKKUfLTWe616QJeqf4MpBy9mkWDTM1G6ZcVPyN6GcszpsWFc1b8bHwbVab",
  "key1": "2cCTCBp1iRiWobHp3C3mFkRSNaKWgJkV3FSaZKFfdULhcvPDXnkiBREhHNzGUWnGecXgTZgw3Ni3dddUfE3kB4Vq",
  "key2": "TcAJupKs3q4dLqEin3BjYB4DnoHxJdMcn5knWHYpyzFMJpTroLAxYdWJuPcn1Tz5imjT5R5kbkcoxmG4E3XpaxQ",
  "key3": "5KvxgJ7J3P7zYCNysTKbBN5CFHWfvPUAqcZVGEr2po3ohnuYWZDw7wMVs4zUL8Yh7SU1Wv2QZMQBU4p8RbTJtk9F",
  "key4": "4yNw5ZEb3AR4ZK1ysCjV8jBzxY1royNF65hk51VwZgVd4FkG4vTQ1wxD1mhcMtt89RpRLhesB4QCgbuFXcp96Air",
  "key5": "3YyGA98EE3oMArXQnDCfCYo5BE6JfAvPYcJi8SKngVB6RFm6r9dMWmnxFALGnjjmghAue9dz6mhPrjeMYpfMkMNy",
  "key6": "4Tnf5WWsS7jCFpZXvUgMm4zUs86tKY4EqVhitSseQCEaVHnUWqZW9ggcSHjq4FrsgtWDa6wt6rbepdn3wX8RxET1",
  "key7": "46Kzw7KMbzuZsv7V8ppsi5gey68aexMLpdsRLhJ3D8GM7XCAjUeiXuYW24GhVduGybVqVr2Zgo1QRqYnnxjgf2TK",
  "key8": "5FKePPLYzUpiqSobJ8jFiWdB4B9DVLiQbeV6jpJmeJLa2DE82Eu2r6bbcDbLDegYGP5erwyBhMMszYMrWHUd8DtM",
  "key9": "34UziWfmYrbki19UhQqssuxhELWf9hVvgmJqij1P8k6wAeJoiTt7L6HUDmgqFyX9AY2SZPJw8VqbTvQgaywam2JY",
  "key10": "4rGgNkF7u4WUQEXeUN29QgNBDe1eiPouszPQNbVG8qK1xvxNig8Mt73WroimAyiWhBDZzjJREa2ZPSukq93aA3qy",
  "key11": "3Cs8SaY9oqxynbk3EAU996zjuGM31TNLHRmUU3As5zh5M3rEk8gxA3vdsyNfo5m5gjrquHCezzf5secwDr8qXnTt",
  "key12": "4ez3wuU2orZ1ZfeR33pn4D21dsPfQKbm1ZkYzYXUZrqpgFBLjQXdYbXbFVGxUjW1nD3EZHaZzCk3V2XcLtjFf65o",
  "key13": "5KgpFY6dPWy6xQ8JArMAE383fAWtXkxTVBXDnjvV2xdvppdomi9P7hDbHJwCNEebZKQREyYqU58AkxyYDiKDJxLi",
  "key14": "WL6sh2HVifw4sreqFuEEAgjQpLXfGF3LNb2bwkNxnj3evvXafKhoucvEzfsAjaVtoqEEmSYywovjbsd2XY2GHWH",
  "key15": "3d817eJPmfde3S8b8fLQWTF3qtjuDmC8Coc4Zu433Nv7oYEeW2ZfJi649pN2WkgQ51tG8zPCqkU7ot9yvZjYjDLg",
  "key16": "2hueeXh2QBAiy3U31Ms7pUUwcnFXNXxjZWsDWbJC8JN4VDhDqLNpuupJW8CpPggmA9xCaEoNqGbe8tiEc7bxozkg",
  "key17": "2xrZu6TA2nbPQXJMgHDnoVECzZrB2o5xH7yLTEfF4GvLhMv7a9daAGzU8Qg5K4peTxV9NAYQcTvsXJZfjwcqvYo6",
  "key18": "4ydVkJun1i8brvUAo7Kd2YwBf58D2hEcM9ioyrakE8s4mpJbT8jUPHT6frBfFrk3rV1CRi82s14o6bSPZGDDNRVh",
  "key19": "2oegiy7CvQcUxV5EwXdDpftuwYDm14mNvM3MvNkg35AsU7C5HMXXSYswdZVgzn5E8BJz5nffNRJBQDw8tpA1EE6u",
  "key20": "47VE8kaWEfgBfKx3MmkicqwWhMu53HSGkJE4RbRx9HfwQMj9uPzYMpVR47ycApJqaq8CdSh2AQT23D4foLH7kegU",
  "key21": "3bKkR95CqjdsvU8w8c7agSU2vEZtrLxbJpyNGnUCpsdyXLufPmgCgFjzMTHKJ3ReqWYf8ru8jRfH6Tvzh963Bcxf",
  "key22": "2ms44h67w69FERVxxbHAN6WswqWPjAoERbYUkEQSeSQyXN13ccPbKhzTGD7rVfKzYTtnbmn8QPTgjFAyqy9LgTJz",
  "key23": "3hSJ16xHFwQN3pEWEwVRLNjsUykPpyaEioz4cEmBrmGRQNhBo4myVABT4fNLKqYjRmvNRMBLk2bddqhFntFZoM91",
  "key24": "4AJcmKNYswEmyh3jyNN7L136dfbtC6bV4SzHWykfUKeiRmYj3j6pnvmCJ99QGPwdyUakQAd83Hh3wzpvCZJQzpPD",
  "key25": "JMFMcKxzjGHPBNCqbbDpBZkNjnbKZxyXZDGSK6UVYcPv9itAp51VJEume46BQjP9xgWd8uGMsaG49LPpEBEgoSB",
  "key26": "659s7N52iqqLYsPaP5VJkAD4j8xNegbGhiqSsbEs7N2Fux2rVKj8dBuJr8JSVzSmU8Sgm8Y8ZnMGaV83DfZBtwKn",
  "key27": "q4vakVj7A4eecKvjLh3iSLNjPna8vzVvkoaB3nRroaX5gXNiG467dnfBYZtK9BAHU7BGdZ99qfttxrAZAX5W1jt",
  "key28": "aaZ7K95LMrxjUocFm6nwhvrUaso6ce7Y3C4BNUtZW6V1CKBVzKdbLKcxSiye9jJGo2kMXcMwuu1gjExDxeNhpT3",
  "key29": "3F2jjTrawATES3x4XVhUdXgTGEEFpL84RSjUzQa2i2M4L5D8XCCZRMb78LWNw9qeee1DUdyGx9GNKGp7XN57Mpqq",
  "key30": "2D2d6ScfCMwihC8ixpjNVX2PHLAuMXud6Ui2KKoJjy5uRDHMMSkMr4d1ozBsftjPMXgSckUn5Wbwb26mvxEahjV4",
  "key31": "2P7ebPLUmb4qx44ZDhi4UHEYMYeATL5WgivSvQFi5pEqNodye5aE8MmTy19AnyyvoJ57wdBAYkey85ENZKo1e7vU",
  "key32": "4J4r38bJvtqxEKZYVLuWkzxWajCgea9PMdpZhyhx9pcMLj3H62duP9YjxS3QEWkyXkg7JiSc3rc1hxi9ZsC56Tsr",
  "key33": "641yWt2ht4Ypq55YwFPuQj2i1KQva7ixja9UPi8CfGbhjx2bR84uscKuMos4wqHQ64bRvQRUZZ5x5w69tpSB3bF5",
  "key34": "4CqRyAYWfCuvSmkhpndPb3EBi1AwyqNYD8LdnSXg6c4AHGFUkXgkfbSPC9bEt3WC1XFANstA79HcGAxWjoioMBo2",
  "key35": "4seGD7G2kY3vAtdv9GWYDEb76b1J4gBf3mySBT8hXZUttc7o9duxUVxwzmybLx9VJ4JnWisWWRx6zyJCgC6pAYhW",
  "key36": "2boExzh9XMkrBHLsV5ZaMvw6RYhwoTt5MrHf29RdTZJT37KCeYf4YQ3JahRw2ka8LwvRepqpYV5NdViTBko57Amw",
  "key37": "25qjVvzEwKXC3LPo9WFgENNC84HE4mfwAgv8tkHMX82ESPUwfCeKWVX49SQ5X6d7BXQSGTV1hX9R3KYUQepCsbW8",
  "key38": "2sUtsxyETbYMk6owu9SvHYYQ8zXo8PBSDFYe3whJ8E2EoeeSEkLBqedD1LjwNbjahTSHeUVTqST5eTYZAmfpwzWS"
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
