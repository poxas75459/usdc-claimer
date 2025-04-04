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
    "EdUTbCsZckx986Jm2XsemkG1Uod7X6tSZCFXqZowKkPyA5YJjJ8L7p5wezY45cL9RpmBou3BdmduFvaHb1jBMRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ppCNzEkRQkRT4ca45WRzX3RfP1M7wcZRCMMgoFQP5uiKfBPgSYN2oosECc2kPWZVx4XQd2NJsq2zZur5mfhxQ3j",
  "key1": "mBFLhu3BfEdUGQw3VbNUggSbRhL74R1b63Tuc2t5t3WnosnNfphjb5VT28VGZ7BuWV9NmLbGZL71ubqk4JnMud4",
  "key2": "2edsJnyPgGJwYcm8fhoC4Ki79d1gCCUqVS4dShC7nM7Z4vMWYFwV1gTB53G6PJ4dgkVPTxNitupcyqguAwWQAAWD",
  "key3": "4PgkMu9s5uCuin9mrmuEY4XcVjHm5mxxPzb3e9MxKuWATT26GVzHb8m6bXfh17aWsXvVAbA4sEiQCR8tTEcSvZkM",
  "key4": "2evroEYqXgfjoRiW5GLcBnpTgBDajjYmUNFscs5HMxws1YthXVnxn5qGTk4XhDb6nMont2SnNpi8bSuGKywN41fW",
  "key5": "2hUEpAZnGsL4bjVshNTFgSCZVcYHs7tw918KWjr29aduusDWigxMd4MdYGWwY8CLqNPwXjQ5QKucX55EWPbQh7Na",
  "key6": "G2x5xMjN2yriXeSiZUvTGS8rLpWG9oGmKdrEKcnq8knaNd5cngQAm1YcQWEd5Qi7Y783i7JNujxKQBiggfg8Jde",
  "key7": "59yucwjJwBLaKTCyx5sXVJfrHKSjQDBhLaB4UrrQeWwYB9EEreJ8qVV6H2HwgoYMTxVb3WTLdo7AUQKQWyU5TaMw",
  "key8": "4vFQLqzNHSzEd9g6ocGonN8mRdfQiJJcfztKA8afiqVrCM4mJ4BNb3yhDvKnNegX8M1w6z6rFXjqbJyH9dzz6SNp",
  "key9": "F86KV1xY219aNaRrTRocjimEMorvpUvpjpdqmEuX7A8rR9nmWL2mUdd3K8zdgPam7nTt3yAfpFr4mGeUpLPJXbb",
  "key10": "2aRrMB3HW5KFiwW3qd7VaD32rTB8EtH73MmhAb6iExHadgsMeYzHjtk3NkDwDXHMm38g77fhMv6pEgzyAan4EccC",
  "key11": "4E1N8Q5HGAYGDHD5VVqVSE8D6VCn8TJ6t576mexm1o8C8WxEEUHLdRYLCRdPYmGJB53joMT3Yj5UsC9d6DJ8umw",
  "key12": "fZT1wjdkVd4ovASTYHo7VsTDJkwXzURHGf1EU3fPnUdGwMvXmJBmQ3JySoFocepHxELyA4L4bKcBtNYXhcQ2YQW",
  "key13": "2q4esvVq7a2v53Yocyo18BHqEswCRWNUWxKzepkkKzsgj6BXhgG2hqcjBBBo2hR78QgTHmZqK5UttuUTbtTu4qHC",
  "key14": "D1e9Htaq8n1hih9nmy2byzTZqYkHELfydKvUk4XXYt4cYqDz96AzoLoL9TsoMfr4LECYRBRiUjM4h3dsvzDp5ga",
  "key15": "3EJvGWN29zGU3ZLVtZPCDveJ6BkjM4kL6auo2DdW3NEh9gmWLGcVjMvdE8azr4qaGYngQZ7AxCuuPMJsWSTQkP1q",
  "key16": "2CAWD8izQRYcuAuAo1UfqUtEXQDJ1P2MMnvMjMdRspj84uyMZy5CAQm5ujaVwgRzu4cnqjbjnCKxKakTZZKXb3t4",
  "key17": "5xN4S1Lz8YqnmaHw1EwA9VTTsxgSG4QkPoJE6vUtKe8xoAcMXe1qkVV3fAY7gCcqu6qJe6PvqfX1iqw6JfEDycpF",
  "key18": "4UuzzkeaRGA9HuSqb5yNcwKpVGSem5qQRSCWs53uNYzC25aAHA19rChEpM1FJwPz53QV18FL96eddUEg8hnjxbUr",
  "key19": "3pNbJadx5Ex8e3dNhmrS2gB6MsVgKU5MbXtc72qL2UHDCwXVio62hWbtHEjuTS2SJ1LTSnbbxsxvAvGCSaTyHA9p",
  "key20": "47q2qXPjimaaF7tcRdDVuKazkfZJgz7ffj6cVhnQjRLqauDB4TkyF2J6RZJqYE88uhq7645oYNM4EWzuosd8LpZT",
  "key21": "39pkM2cySvZmLy8gXFVhsQgDasDb7tQ4oP4AaWGuWE7zHLbqrfHnxyQTzbBje2xs9VK3AnJL78J6s5maS6qQyP8w",
  "key22": "3iRLGLwRMeRzSUJQVdhMAvUpLVRCtzsED6v7Wr44q1duzfqKZQD19yKJTmiNgbjB9JhakT88MDv8GGb9fbpXLd4j",
  "key23": "2CMAdp2fQhTKbVb2gPVGkx7yxpMpNSry9CmVdPLr4USn9pVE5zXZyTC8No1MqVxpGaWZReVRwxj5QUXBB4oBMPHY",
  "key24": "AvtRpuHcdu8SnLc7EF7cigRU17TivxMTqfZqxaZ5FZgGk4ouy55TGD6GUcLFPG4o4CNYDuCqHUCVUCFvxRD2Mbv",
  "key25": "3uZBKd7n6JZokm83u69owENuvLFU3jBGevMswCNt3oV1PN6VGK4a1c9zfk1BBQTot7CnkLtntpA3w9vJcdpoJ32H",
  "key26": "jxhWUppLXWu1ggcdbLtiS4vAgdxaFCR9vrSUzZWew4FacV3W54tbUdp5ag5HqM8vNK7sBQQUJXVHor35R1rNLmh",
  "key27": "66PmyzhwJ9YqXqmcwSFpqhP6BgN6naWusLoLSeFYv1M9tiNon77P6PDsLhJ74Hs45KzkuS7jSSzaZ8bNnkA2FULP",
  "key28": "44cURrnxhMuz5QE17xpTQRLASGnyuNfMhdcvMQmkNrgvxhjxeToj6TH9RtzCXdqxB4KJLdchSs6ENAfrWjXjkBUc",
  "key29": "1rVoZH5eRjtHFdw6C1NvrzAMJuXREMCdNQmKSutxCQ7hq4vMsp1weNeBcxrMz87jNaynYn9H9cq6XjVms6Gdasd",
  "key30": "2ayceuFgMB7eJX4ZaW1Tba7g3nr87LvvKwChQPCNq6PTeDwyN63G8ter1H7n1seYLDUDdkLLvPDMp394QXpnL7sC",
  "key31": "55pWSK7rjf8gW9DpMg9mxqAQNADjV7rZLRUNo9DDyXHzbY8Ks3zoTmhETmGn2NGErLTqZx7x5ZoZUtCo9CfYLaza",
  "key32": "3GmTdaFEhtuEPTT1F2JYtLoMyLaHNxSYuztEgvpcf9NxD2NvCB4iPqgbiXcpDuQsJG7AuZBdiPxGBfB3gXPVsLZT",
  "key33": "qV7kBPuLzZ5jG4F6Go5KzMUK6jECJ5HWTSbzaNjwVLgByMXG3AP7QBjQgRziPoC8J7wRPfTb7gn5h5sUnN9LU8L",
  "key34": "HLJY1ArumdtLMzHB2UR329xFTQh1fuqJjMU18hcpWRXNv7pha12xg4S7utmDSobEDWPoxR5DdEsnpamLAfZwT5c",
  "key35": "4xTF23dC1oPX2wFkEZ7B7m1NrJQrZ2Cdo7uHKDwhafbnUy7D5fjoYFmvV7j9snRRKWUmU1oiuuY3L2KXFJ16CFo4"
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
