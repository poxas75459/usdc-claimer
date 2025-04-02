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
    "tGZAU21iXQ9p8wWiuj1tfDUJU6hySF5rVv2CT1vSahcq8qJupqYKVZySRF74UZuutX4WVh9PJors2XBFx56oKrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N7XA38fHzZDijfqbcTJeNgyw9M9CQhDh8t7zxwn3rdT9CYFB8t6myFL5SLNfisNV1Khbpzdidj7VWPcXDjFemES",
  "key1": "576Pa2sMQTxrnUDdig4s68dYXD5fE4BxMcoR2GpBAksFXBeo5wPDJGHkFf1dJ7JuRzVLZryhsxMtMr79TCq6n39c",
  "key2": "2RciUEFpYcoovMaLEaNnTBhKz32FLeM64fmsQaL9bP5VQ3BsEJejbsydwDRr1yrD6sNS5smgro52joKb2NWS9p4T",
  "key3": "3MCJu8GxExdkUsv7it6n99h11scT8m8FnE7owUJC94ADZgVnYLXZpzqeZm9K6JNVrMsVvB8uW6BpTwy89P4vYrNp",
  "key4": "31Jqvf1MJQ2SDVTEMdFmDdrggWrqjmk2whKJcaF3YeXNGrMwqBmURTEW9BhDg2e9C71VFWJJGbUK1oPs3rjX8erh",
  "key5": "4E9Px6EtYWcTJnZcbqJ3xtrpu3cp2HfxXjo8D7pD6azWeDhiPk4C2wHJgKQtxqeBaVVCRGp5Zh49DhL4uUL8MDL9",
  "key6": "5MvH6z1WHLzsHvmPDS3jgiiNqmVCZhnJLMhp4S1BtEhDZEqpCQFAW2kJVrp8kH5okAatGxdY6esZ9seCFv5J9od8",
  "key7": "VpRT3uLMEygofHPwfixTE7TMEFAFzNVkd3T1g5zC7FoQnhZHHsLGKfk2PMFG7bUjZkBBnovmsruAJTJcq7CwPvL",
  "key8": "3bV3XGJwWNEFf9WeWeRoZoubaooPzRgZdo27Gk3uSLRKstQyFu5q49T5VWk92uMRYasGC4idKhAKzCmAnLEZrVgP",
  "key9": "2SbtbtaEcxJozZSoe6ZQPyUhZLPdcTAapjRjDvxSsnAWrPCgx76Xo1gCgKg9hMFK7tdNgbfB9t6nbFgdteVk3F7A",
  "key10": "yEK41hVQuoKgsh87Ryh1fwfJpTR69hMUmnFGhiEZJ7E6qXd6QQtCt1ntHUrnnjNKGQoFHSt8jP7BggvDDXagNv5",
  "key11": "4q51v4dvSsy8qHG9gQwcvUvw1BXyBBbGGxgFtfDVZ1JVHoK3JXT51JBuzmBmxZ1Su7ds7HEm1Y7SxihLVK21Q2B6",
  "key12": "5WYd4DrzCkrCXYTJE1r9xsFTKuRd16QYACBEMczN6WeKbZCSYQ7adWSLechMQNNzvXmvAeHwp3jK86Buz7JYhxXM",
  "key13": "3G72uZ81pRYbosoHQRHEuofweRgFdyvRMByMuF1zf4mRBDsbgTgXzk46pQptrsgpEKYLjnbc3oeXQhexrpHexwsD",
  "key14": "3HZBj38RCJCQqEVUWEJs8znMx78At1hvRs9CiEssLY6p5iCtcLsSGD8bwbP4xARvDkUjyv6RCcaNWusXByut15iF",
  "key15": "x3ATqt176iTTw3a6iSMuHShPK5syPoNhRvkqhBh9cCWcntycRpJJ2abEwsPL8a37cmWuK1khuaxrxN6ANtKQrbL",
  "key16": "3DBXBuPCC7HuQZU63LFsy5PZJBy8wapYujqcxyBTpqihLiyt2e6hxUrH9ZN1py4y69Qo9Bgopsv8CiJ6L39LUyxC",
  "key17": "2avBmgxGeY2bwSvX9qoAALC5BDByZQN7op8HRDk8GZNzDHQwnkys4xqT6DnnRThM3L82sWMNt9NNSUYuBND4ao97",
  "key18": "5xyoRRxz8AGX8TXQn9n2tDdyiPB2iWQjagpJUqJhxJZXusZHzFu6ucspCJTJGRnwbCs8kvMYpMLpvxS4M9CqMebJ",
  "key19": "4rs3xkWMNnL38ARo84KN2nfU9SdctBwa94eDxi2cost4GKF6e8bxJsrwp9KgjticzfUdBf7Uj8nVtbTCwFM4T8n6",
  "key20": "gW3otVKosCoP7sET6Q3wWFpuxXpDvwd27zcvVCceAZ4MGE9PMAp3r6NtsMB5x9Ev1T3mnPzwsAYwMpNYEE64LkL",
  "key21": "42rogmfSzeNn9VdRQCYpi9ESLw4wjnTKPa8TqpDyHxccG3QWcaZ1mpam8vK9jmHb5MxovHAK8JWR5RD1jodH1kXs",
  "key22": "JepEhhge2JxBw2SKcRPjDV1DcJj8M2yBHBtu6AmQXgmvjQAyoyM6gsZQEMFPHFGNbHzCLUikLV6noqgLCrQ1rVG",
  "key23": "y4ccxB2in3Yg8Na55DdqxSByRrZurJxZHyzS2Dmv57Hsx8iDghSBmnmBMm36B3J1XQi2qhxCZLnD2E59UJwwyFJ",
  "key24": "3moyS34qhrZEbaLVFnX3afCM6NvasPBqiAbtz4MuexNmxBwgAtCHvwJ8QtXM9kD7GciroL8Qw8AnS46WKrr4C5Ub",
  "key25": "2geeVY3uGG9KWA6NUj5kqjH9LKAtkfTLTYwLX6UYSxpE1yaUyxHwVjCzXRVnGVkh2vQZVv4iacP5LBPR5RhoqSyF",
  "key26": "435e6hpQ2RmTTbtbfNYDrhhSnDzgtjQroPUGLRTGkJMRnipXAWgMD9VfmJaDMrpnmiMrzvz96XBuhkx9FY2xiDuQ",
  "key27": "4BXxhk8vcS2hAiX6Rrvw2dZbdeA9g1kiPqPz6mSrdtChurg2zQHm4mLwXxoAdVkgQdz6zvF3fu1RP2BCpNLTpvWW",
  "key28": "5zbuqDZt1Pfk5b5GvV3c1zDyQFymk6sDBwKJWe3pCpAZe69d9VYojqMjahgidi4ALeve4GQsAj3nM9GRH1KHQuUV",
  "key29": "2XGj7V2DMM3eNdYYhFJDL5KffuUZGjX3HhvrmsuxQb1zYTZ1WtamM9x7yFMGz4ZaciJaRAqACoAr6UPfzHSV16wz",
  "key30": "2dkw5jqygCguqDAqxw7CmpuCGcf6X1QAvKsSSDeqNbideFUMo64RcXcvfrGrPJvWWis8vxktw1SvA5YTcVT1E9Td",
  "key31": "2NRss9BzCHYPPxTpCgPXpeoyBcHZNzwCyNDMPZREAnySj657Y9xEjXZxn1Xpw2c8CF8KJY2LKH6QhjLFwKtzog25",
  "key32": "2RT9exBfqhYM4N4f8iaWgeZn3GPkKZqaE5h9ccwdwYMqBY2tJATR65wAmjc8noGh4gvXPa4RX5nr7BKi1d66ARxt",
  "key33": "5gz2Rm27bAoSCBMKMEEQrVwBgzKznTxBC5Ap13HtcRamSbXXZ59ZmbZQzB8zfGb6AgENiUKPnYsJvbCmftwbxvu7"
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
