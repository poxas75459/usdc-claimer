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
    "2MbpK3MkJyWJzzbLkKfzRcgBuMqmravKor2eScmdJu49vT1aWzyZRf24LVgghFbRfkR25Sq1WhixQdUAaAf48NaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LfyC5dVqLucWvF9UQC9PmWit9s9HkgjT1qHLK5cjVNiRQ7EDQBKDpbWwifDYxw8udaVATmgUgexpux3Mo9D2iKz",
  "key1": "2sm3HGx1dtHRqZYLi4zsRMQZdFoNh7LSHZe2r7VRJcUqtk899WMGkzRu3g8VthLZEa3YkmccUbwKqx1gJ3ELvU3",
  "key2": "4g4CvSK8waZbhdk7bcZZCHCLJ8jkXzrWChFq1vPtBka7MUqpN9V3tPL7sncBqfdicTbWAQh5yYdX5fftcepY2FMx",
  "key3": "5z74xYA67WmepcvGVxbZtSQQoDNzC2RPwQFPmCcBDtFhJerhMX22kPwCW8UQNTVp5Qu6pQLiVtgA2ZZ7ugddWHY8",
  "key4": "4NUMxvems3nSghy9peMa7DGiNyx9ReeSnBK3nhKeTycw53mzkYZq5zRYycSw74sm7nmvBTZXT2iSsg8qt1NRu8Ag",
  "key5": "3F2XV8D6STLn2Qti95yWe3JAz7zKGkUkQredhn6GhDW6hrY3zZP1LnzTMEFrqgKSVPS2hgP9gZf6C7vSgLeQoMHo",
  "key6": "5eSoh3NW66RqrE5hv46R9PQBzXPbNp5Hnck4z8DkRYufyDcMScwGgrX78JnfzhnaAQq1ESGvpiFkvyb1AtLfLXbx",
  "key7": "5FbMKunTzXtgJa4CysdbmnG5s455pCbuVMs38WsFK8k5tLyMc5KfdYRv5qfgyFmQg3vC2bXPzK7M81brVZhxRUYn",
  "key8": "5BHG2ykge4ZK5vZuZd5cjEYbYXTdVu1D5dpjDdPiznWvHekBHcS5JqAFNNfR4K3Uhia4Yc8BQjNFHVGh7LGD9Nzp",
  "key9": "4dBwbfn9CEnvXrxRp56KYSRc4zVgHWpwEKrTJ27Kuq3mBqozd2TsZmNuUUxqUeqNg6JM2rtwwtgQNQDgwsAaxUsz",
  "key10": "29xHPZTG8cWsmhrMCYwRG6GRVV9MUFPQiTnzdY8sTvNWrNgsiijfyc8pmsB5y4oMC8qqLRmSmRVbRxPXhTgqi8QV",
  "key11": "YGvGkcw5JndAejqaG5f6DV961ScqDm4u9ZupaDkNrdazfGi9aNKZggtugpSTz6bSPN8KDmXutE1jihzBfFMtmox",
  "key12": "5NSxXDafV4Njcn7F5me8RChT7xi967WrscQzUARM1C2Hq1DqGy589JqoJiZL95vT4hdpGQgCsWWutiXTRjGaRGB",
  "key13": "66SL7seoh9Cz6uKv6hQkGjocgPjZW59D4Fiunqo5YEujXGWJU42LynNNGS9xrqMmmJZ8LECXbczGJJTW92AywvwP",
  "key14": "264RYkkZ3hgFzFfDb7RGuRauDPKQ2fkQVCe33JFpqcMZYCvSnC3idps6NgFah4gRtTPZM6Nkkoab15brHGEvktRK",
  "key15": "ZYeY5vYuR5mRo64DSbzUvSndFzyBxe9UR7ADQctbALpf14pn7MqY6TCKvEJFySDUHaA1iuon1rDQRDfXd9q7tQq",
  "key16": "2kyVQpyd7m18bjwEJvNVra2iwDcTtG4DPAsJQz18P5AvJrYNYbt2XMR5qxh2mcMM2RUkoXcpFkvKioccwuGbn3F8",
  "key17": "z2BsVLuXQ2eXtVMfvpTAHyN4CNXRffWrY5qfRuVF9xZKfCCCtfUKQmM3s2VmQcpD7gUkQqxo8uLU2GxTWrqZ5Xk",
  "key18": "4h4CHFbYwA6hZz6H2c9fronfK8eL2oxsi8FhZZcQfdDvFpkTNGCqSvDwbcbkK9fHXFsZCXnELKaEoa2ZdbbBskvi",
  "key19": "4HrVCsJ3EhTyJq6GytX6J5mmbAs7sNR5psxz3ApMR4bQFRE8KUjWSatgG9i5R4p6rxLjKA1YfoGKSmpjbibhAsku",
  "key20": "3jrUwXhGWP9X7SLw2XhGNn1254SWnUdMS3fmGTVttbhnLbBi8kEJF3TuwCmvwRZHpH7ion6A8kK1AqY7oK7cJCgB",
  "key21": "2E88DcrXM67j6zinXQnBPyPf6qYx8yvMUuRT3k8WoXyW28RnEaBQfmjd1X3EwkQ3uptcwZpYZSdbjHaHnrhWMgrU",
  "key22": "39H4QAzk6iK9G2Bc8KACDPwu3VbRd5J5ibCqpUffN2nbb3taXhgbQxrHL2qEDC6yiJTQFmspFJ1Woz329SqGBR2p",
  "key23": "35K5zQZ9d7Kp3k49K7ekdZQhu35mKZ4vTdvAf8hzsR3mzrxDoEkvKaCzttvTJWFHxytCw7EnaPW4MUDReLNDAwL3",
  "key24": "4i1Q34U522vnHD9C3XazVUNRP53a2U76QGMtRnHcUdBGkzarmBdGPmeFmH2k4ytj1s23cR4im88uu2jXRy7nFd39",
  "key25": "MD6Z3mL4SMEauXH9cyGAawdkzEnTYR8CGT6mMjw6UwbFwTV8rSS8BFjezN26TbHvKiyG3YWkkLEuw5q5868pT3E",
  "key26": "4cxDDPDr69oLGg8zKkPVAwWkqyURwJenTKgnqSRjhiJD584BeRoyx1bk4nCZK6U6fDSHP5YiFh44wbfDcACUFXX1",
  "key27": "25Finz3iYZMsoBDYz5thaNspCAPJatVPSBJBTx3PmZibkMvc6EyvLnvdc2ei2DTDoGGqQv4Dtwmh7ticLjFQgRmr",
  "key28": "5kkpRd6oYmZdgUMZiRqbnwXQYXaDD6E7V4Rqjp6oemjNzSdnyYVyaLdcxaDGVELSNPzfAP9U3TPZJPGqr8CXh7UE",
  "key29": "qZAy2FbNxyzQ921eGo4xoydPGqy3KYtcqxpR8bzxagYXieFFJKaWHS77QZMrrw2chMdAdLjavdCfexuBhj1ng9m",
  "key30": "7x6Ei44iwDFwUKpEgN3oFiGYjsxupG1fputSXW5V2nVK9Kq9Wnwegerf942uKLEVWMWZqxv6HwGjGWTBAWUp3V9",
  "key31": "2YKSYjXmFuXnYbSAwqTWuvpft9LLJWWtii6wEYM79qHiXZVtxDBBUQasx7sefcyHHzzTFuhH8mudRqfar5EJ8BeL",
  "key32": "3oHYB3MFass4HoWdmLWozjhFnx4QtekfEDqRnyYifkDyM4cacLp5B88fdrtx3Nrr6GUfcpeDoX1kmhfLKk74qxsb",
  "key33": "3N1PWWWgJjuXpzyUE63FBBtDf6Y5Kb9GnCnNFMdwGM2g5TqXSJ1Fo4GU258V7aDYJEvjN6vLCDN2SXgmHTr8ihsc",
  "key34": "jnfrzYLyrsC8ca4jGpj2ZqL1LSQW9Yn4FE6nzZmAWKeLGqVFPa1jY6sDy3QMDCMnoNBvwdCiRrdvKSRwBrBK8sB",
  "key35": "5MUYD5r2M6XiRfHKqmh8CJDHBzHJhqNLG8FuAbnTq9Yx1jTWimLfQW2CWpjyxicg5mYS3tXuCFBSZQN45bqxPepq",
  "key36": "37q991jieRVMrwkFYzUjmKYhmdPVzFrz3eLX6nkQ6xxgtz3P6LJJqsmXkNi5saci1tRYe4usRrz6HHDLWoScuzun",
  "key37": "86eFef2D3YsXo6cPJiK25459ojf2SwTtnAitRfTTtPnQBeeXf7EqTHMBaVDUmDnaZWaQTXAMC8f6nNBMd7D2YvF",
  "key38": "29yKzawKN16ZVRWrRp7pLHjkqkt8rBuKNRruNBKCrob3418iLG8PPHcZT3cp6PjKxL6Mg7v4XiLU3tv4MSYXVwDp",
  "key39": "2dCV1W3uE8FHH3JRLPZu2CrCgpqNSgmAobQzBU4ZgohsFFA4yVNagEJhWRy1mG1cwV9dUxde2Jdbu3jbZ3eg6a2h"
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
