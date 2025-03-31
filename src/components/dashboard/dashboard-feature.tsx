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
    "39ucTG7jGevawWU8zhbrGdxsHyCQk3fBqxQH1JgqoxddN12VjLud1xd6rZQs623moiC9ehCzveoucBGJt8JTg3LD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29jpephQwgfmA7exWoJxqSbehNY3U6mmue1mSZMkSRfRqhuJ4wBeWMSgLvaxJy3DraYrZVSySoS9YBfgzNpJs9Kq",
  "key1": "461YpRCkJ9GtJTHpSLkdBNBzPnZvLT3phmLTq6AGKY5Wv1JCa4y6mLUw552bGs1BGRp2yu5fC5LEzoo2uoLmCHVG",
  "key2": "3YsTHNAfQro7fBgY22wP2zXFdj3da4jo2gTYU6YjCqHV1ofjcBQaJiJN5QKc6ZHJT5XtvaJZtdg7MVMKwGYEyWwZ",
  "key3": "2YAbqNXCA4hvgrNqik8e4e3jXhCRM2UVTcdWPSnyZNDCCBQWvT4emvfmvJsbaVjxcZ31HAVynuGtvn8wWwqSTBD6",
  "key4": "5bxVsBddGETeC7znUvxArKeaTEToHuLmcVstEhDDEgwU4oZ2ARS4FVLprFtevtzuzVa4ygptGtSkKxxH9JBGUvF5",
  "key5": "2bua2SNtZX3y8ZYFrhd8fHF8jDXb6g7y7bVyY7H55iwGkRxUC1VCP6CVvdAoidAALtRtH9hPw8JagLkfKDDFvtnc",
  "key6": "62HEsSVAT6pd2yXPC2CvuTrRKkJwJhXYTETj7Wio3PDLRhjGsp1Yj31P4y8e7m217N5WgB4EKGaSUxR35VZzHptn",
  "key7": "5d2MNMvFdq86vBCcpwRCb1VZriAyLsneewv3akvWpDEijxwYXo1zZ1Zpe8mLinYyEZUfvp1XEdL1aHzckSFaemdF",
  "key8": "2vrbHSVkxPW57PckGnaCZFaXYzJqTtiRszn5isZExXLKZWUtqXVxpTCAGSsStozMnamzNZU8pUKGEb91KnkwAufx",
  "key9": "5WmPRqWTo7VNsRxRqZDY23tBSPZ9GHJyHZuMXt2UJ8RCS2CJQ8M6K8XM3RpUDte538SGCBzMdUVgSRyyNyPK9AHr",
  "key10": "4CU6wfNrVCstShDgubuwxbgumP3Nf7rEjV7cLKipHR5dbdTQSAhUqD2yhpx9Afq8QGnWVDj2W3NyhCuh91p9kqpj",
  "key11": "zhMEKD1Qw42UfrhujaNVbyDa3hQEUrawSbtZCHwTjZy16jUeceLcfLk6ecbYK1oHzueA6ULKbSeRruhy3zGBGLH",
  "key12": "53LihX5saH3Pu97BXCR6Puw32XQt6zE5Ec37pHCJmZTxTygViB8qZxkkcWcU5Tuxkv3MGwpV2yU3KaNke8BtyLCc",
  "key13": "447v32JzDevX4QYHWTw8puQPBcuU9Bs3BH3FNEV68wTwTXcf5Js8JvNsfgagFu16DjEB96bqZMkQdPx39K2onzJP",
  "key14": "4fG81CFBFYS2jEtfrsPQuHLXfkjRDLNjy8m5Hm6Yyu952b5woVhmFAjMrn3MUPDsWqqtgsQbJrTQcbL6P24AXMVp",
  "key15": "3ipLVxSAAdHRcw2p22hUdYczf3aDi82rqMnZ2u9SZUWGwBWmZKV4VvdCiUX8xucfmYnaqSA5FkBDvqor7hCyYGc5",
  "key16": "4FNZ3gtcGrbkci7PX8W4VegeXaZ6LUgcXmHamT2W3pPhqvW2wUhiwY23pmB38UMQgavMKPpWC5PxyT1KFHPQBouu",
  "key17": "5YUjiJdfXdpZKJAxMDb9VorcTDnT2bGG7992anThnQqX3Cw8AJP1MrA7ra9A8fq1cNxSG5dezoNEY4BreSBcV22a",
  "key18": "5Kqc4yXKw87gn6yBKFRuEZiY41kKzyPW1ZFSF6coqpTGEkbYxsi2qaFBcXwMtsrqwLnEutfWz6WuXePsHJwbgjdd",
  "key19": "2noPZguUvs7NHA2kqZF6JogRefJiU9NTpebo8wMX7HzSGyaeJdVWCTLqz1mRzMu5MyhAxyCd8aPzhXixH1itJsDW",
  "key20": "Gq9RhsyzgHpXkUYJU4gjhWexheediP7UhoiuUPsUjtxxHrnsx4dSxUQZfb72J8vTWv6gnV5YLt79HAVtqzHbX9T",
  "key21": "59ac68Yh9UQ3dtd6AuyZfxSD4kmNUrekK5JySRyq6pftTbS7Peavc61qpfDjALBajzTro7MSJi6FDooPVaX7dnJH",
  "key22": "KZbxqAkLkx19k4Jbtct4y1nVgkAj4qXZzuRK5c2kb4HamTBY7ohyFgee5zKvmYYMcKdWeghP5taoseiB3JiETGy",
  "key23": "5DMXc9RLRtVEAw2679WVo31frqs9MGCrqMii1QMnUBs5Kj4p4LmtAie5k6r5eHWan3HdmGyYUVVndBKpU1himFAj",
  "key24": "4WkhahQtBqXAnCVqLmcLJoJHgghfiDwDKS2K6jfap9Mug3cCbKi6QN86X1nCM6YXT7CH5xJhzwLh7kj2CKCbmEW3",
  "key25": "D3xY1sSkiCk1qhYzGwcsXBiLuNmEnGmDi4FWLFn6t2gn1MPNDCs9obUePQas6o5d8GesTWSrPZHXJHRVX13akKE",
  "key26": "4iavuDmEMyzfudSG1F5LeDKThvDbi7XXq4qrhpsJPAMZbsp2p6xdMx9yfoN9G1sqXoGiuoJcFmpSP1xzNmXRB5fx",
  "key27": "2NsBohERWS6h5HW5NuuuTjFbhdXW9sEdNyc1o3hMcn1s5KGt8TNAPiRjBrZi1Q1iLSsNZFWGQAAsjuiDTBVgyNxv",
  "key28": "2VB8JXvCSPw4fVftjmtpAq2L4oFfuuXsDZpBkm4LaGtLaeNknkWzZzD7Zedv5rFCAppyFiykdMBVpWEcpj1g8EpR",
  "key29": "2bpwCzrbcSTZerQ4LpDrYy8pWqcFuyUdLeDSZ5aCycGi7ZMrBaiVoPscGEr82NfLxwDzc7zUMhZ5u4gyvxySQ6ps",
  "key30": "oTNkuw6BQoaNb42gj7sTYueLjREMtqrKX2XbLTJrVBbuoGC9p2DCUZNpuDvCR4L89PiYkgGuQRbis45f39goDKz",
  "key31": "46aYbKQQbVzhowcs9YCrYeQw8eJd9kW1s21g22NSrk8HhgjKgNm3sSVqKRQfnejkGP8f6yyiukDZmrFeJAfGbqJn",
  "key32": "3esYuANEzFrdpjp4y83G6eaUnipL6fgyippJ6Uh14pXgMKmKvYCdkT7F99oYt4EZJ69okpAAgkioxXiFdRu6VKBQ",
  "key33": "VyS5eUfR5tRpjeD6m6SmjhAJMe2mGv3HnLzcBjecaWnQNiyVJd8j5Vt1guJdiRictC2ke2JofwSDo2SVf2MAAug",
  "key34": "enYDvZrPDYGy2NpwhQ9UHDs6jMdi3sAWbAA9AsuFREVaQ7LVdMtUYeELQ6s2LtN3rKLTUT3x4bHzhZTWrw5Zaq2"
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
