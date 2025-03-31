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
    "5FcuXUGqvqN3DmvcviQgxV5n1ExaSqUdDnK1e3YJeLTGjjhXpjwidbD8VQAhVTdR8kjz7Y33H8hr1GxKmj8cNM8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J9CEHBz7LrDTV98BziN4Ttq1qemwEUXw5Pyo5bzMBKnF7johPBNwQgnLrM2BGZTcmbA8PUhb2CMbuiZh4matDfL",
  "key1": "UoLqjq2Xd2vsEHL5N9Trd1iibr8HCCFBC3byBkhrV2x39oEL765JzRPFc163bLbeSJ6SZcmNuYRCxwiq6TVwVL7",
  "key2": "zgEJgVHvZCKDVcwqDmfFXgbTSBBricTCQyPp1vhP1wP7hPbnsUxfW6i24Gwzwwm2sck6jBwVBPxewNbuHtsdwYM",
  "key3": "DKhmypstEsvwiuvdtfqtCVyXX8fY5yLv8DW47vznxz8C5QTGcr3roavsXcJ17tvkNe4voKE799zspYguWy8kMSa",
  "key4": "4MG3JagfUycm1162mw5VYKEJrd8SHSaEUZAi7gWpaJRJpNzXxWMbdD5BzeLZLXaN8RyMXFoCXznL66rafD39NUtU",
  "key5": "5YLpUvTzGz7zDWciNYB4ZsH7cVMSixbuBRoqthjw7ZQtSUmdpgWvyDVFTBmCxV61nn9SDXUMryXUeSMZnujDi7jW",
  "key6": "3Rd63iGbQgmCgUhVv5pXiSEaepx5BSnF2TXVmKG99sRPoNu3mkLNoVgBbuKW1hLdtdxVF3MsTLQ3WDZEH5YqNE9w",
  "key7": "AbCXSfqtDUT5WFpq7UW9zh1bKz7NF4bLEVz3iVUuk4YXCHxLpXDy1DE59uM2wXZx3tQbre1jYs4cjsfkrqFa6BF",
  "key8": "3Af8xuGu4o1Gm7zMzMTPK96a4VdM1KTpBKHMn41xrHvVg5hygX8NuKae1fkMt6puf8z1rB2uFimBt2NQQrbqUsEi",
  "key9": "23xi5ZNJvCpfsEDCnTCHNzn5gsLK2xTvWhR1GW9NuEMApqbkPvg9i1b4DXPJagnXwqSQRtKadqhLhCT4EEcSa4QT",
  "key10": "2gtV8r2UKzFDPFHeDKi3ic3RnXxq3S3q7pTqurmkJoXNZ56fQoAzuDBexFdfaFZiTk8jGHnLg72VsfijyFZUMjLF",
  "key11": "2rfsVbFT87fGTSb88oEsuwRob3i7Zq6itSuY6iiBro4aemu69d17dWFbqRWRxBan6T271uKweb25QvNnQL7tg58C",
  "key12": "5WMu3zJHAB5XSNpcMTJUMCRD116vngyCARDHhgEx4jbMHKjyHWS9RX4bpReTMJvEseGUcC13qqDkaRK7yPRiViDe",
  "key13": "27BRt1FPMwDfedJQh8b76aLfokKqZk6zo3NKajYoNvPdaU13MEa2rhCgKbAfzEM5p8LT7U3niLWGM23guXSze6CN",
  "key14": "GrNUAKNxC4wGz3gL4mdTSs156D1gBxZ2shcXJLTiisiHZrYCsAJ8LJ8uTv5Un7w937r9z6evxef6D4BXDpNHUKY",
  "key15": "2TcpmXHuUXD8PxxHUb4s7FeTJiLErP3BkxmkTBfkB196UB3QSxat3SiRzEL7XoUqPQoC9smNVXhMczhekxi2JePE",
  "key16": "48QA2JCGWRnPmsQssRbLeGrBPGbMP4gZoZWqi6fKaGvapHDyoryY2y9AArh9h1nUKvmQnECq2ctCPPeoH9ZTjbvm",
  "key17": "ZrDxUppuT7T4nBq3j5R2yvVACcTroxWyDVuEVMjoJf1RPi2vXThQSRkRVf1kRNBA21XDpSSX9NxdZzemxwXReoB",
  "key18": "5pEZS38LNvtQzdwbh1gFwxYebjadXzx1gpdA8cFMSB6LkNCzsY7mfSNdCBdN47ZBHfWvFnzU9DJcFwQrBmB47sDe",
  "key19": "2n83sCuuMd2ab4gwaciacuRQX9mdr4n1hCM5jeXhkVJABokZvHHdqovvt82pHV9dUcQChFDKtuGan6J89Jxqkn3t",
  "key20": "43gzQLhFmMnUAi2gD9jC7mKSajD9JAHkC96oVY4bpFT3JLdS35iPXvupPXJ1VzEbMUAoAv2VxQMngrAMQnK4RMpR",
  "key21": "26shDiQxBExVqaujmcPSTA68uE8rGHNqiU6RoDjrBTXsbXVos4WZitrfugqYgfynHkMnDmeLJbbDK6exNMYCLUXz",
  "key22": "2BsyAJpBHZmjPqLQV7Y28tdKue5zcM8HsfDaegUfVsFd6gDD3bp9TfwsNUgiJ1bB9GnhxzmB1MKNNtyacC3XqsM3",
  "key23": "37p3yDLj17D1WRHS49T8pWtX1YJ1vHH5s3kToVmvbthLWjUprmwSAA1qNonMd8nDBA61ratGLrG2u8RhLsk4XrwJ",
  "key24": "39n4vYZoxFY1c58ApthTFYbSuPeZMtmN4owJNyRG5zqmwt8zR3oqx9jQR7K1Dz4EJv7WaH3nxEhz2CiNfCqBLbRS",
  "key25": "3WZNMk49mBGZ2jZhddme8wGBnv7ZQhm6RQ51ojmWZr5f7gvagwcZiDWT3NHYJ9YEQUYdawNcBY7pwU6pRcaMgkLZ",
  "key26": "23WEywiz6egVCafRAbAtZoJZfrM6c4adgK9ywZaDNfdkzR7mRTBpYdv6P25Ko7GX8579HszqxK5tdwSuGNSfnrcU",
  "key27": "4dWbiz3X9JLqe73wJ9TwYofWq7vXK7Nggki2J8B24Zmqt2s7oGiBBkje4oG6Qo2ta5rbLv3Y3gkCck51pduyYP1n",
  "key28": "VVzMRZkQMSBWTpBu2b6eoN2SF2ukMfYD7diZiTa45QnLAEL3mLEscs73LgpUTXgC3TygqHM76uwL4SQS8E9Nj58",
  "key29": "4euu9nVW3fXNqk3DVjSuPWqL7tHBW5mSqQh8rqrsE2BsfUsDAPAEx4v5aumC7JEAkkuvMZXpgmChS4HZZgaAjqJh",
  "key30": "ygqCatsVYzAdoNLmD4qQ9Jq6mAYScghMwnU9Mryzby2wV9njnMqZm96sGHCk3h5nKcLA5cW81dMDdtP8DmdKYsj",
  "key31": "5hCXXYGbzUQvLPJRmVLwmVM5Hb9nCCoqLAJTXN2imUdXiTFDZ3w5XEb6uLi8Pc9y4kjLPKnehnDrC8ryXLxUaHpi",
  "key32": "yyW6BTTTtYy6st8bdPJwCeT7aWMxyw3QAfco5dzMxwEmnyoANfoxvW3S8PjAyTwc6JGDkNnEQypNgUyg24Rpi3r",
  "key33": "6unUpqXGP9SGrQvo7DC7xUyQ7xKgPLXtJomSXJQGEyohHCvZpmkaT1ZUo2oYy78FtdqHv52gkcq3HQiyyNEMwhw",
  "key34": "9vZkC1zaev8KhwLWze5Cuz46j773ZS7YUNavUn3PYJw1ej4ja34GmrHxY6CHj5yv2k4sR8rbMTM4YQBDzjeQF2G",
  "key35": "46q3RJCXNRdsTmxuVQkHiToiJwuT3qceQodASEVHSfF77dQ183YXPzxusfVErCiKdY1hMoos2SypG4azp5jHGwoc"
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
