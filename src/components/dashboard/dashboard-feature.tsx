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
    "5ud3RyhSH5fTW4EvktMnYF7pxgxULZUPpDbrMDHne7XcequdRhogmtky956AnBrhJXVf2UHCddZM1yq6QyeJoccb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RPESaxLCDCWGmzc3pprrmQWjQoxRfVZLmLDpH3pm3Pnr1Z4HN1xfH6V81T7r2fFFYFoD6zBSEgxfk4KaokxuD7n",
  "key1": "5XMoNvUjpLMsgvn6udwDDmDVFerj7tLugBb1B1umAQpgHadnt687VBe7ncGtAYzNtn6CF5RAjF1Ci47y8htchqDd",
  "key2": "3eddZANXapRcFK9FqZ9MqGcr485rhuWouDM9Q8wL2c8i6mYDmcT5XFsLPXVaohpSTULqNFs5AmH9DfCJcAmBSizK",
  "key3": "PkMqz8MxkyPgyt8ozQt27boSjCAoExzaojZeTFV5gLTkcjPCsoxuZi42uMGthJoReA5aNe1dw5Xxy4kyUY5xnmd",
  "key4": "29wwtEHBzunQECUGmSZETAqMapXfZCjSuHBeHt2fv7Y8PWGvVnijYzhVMi2SXXMhG6WHtXctZvqSL2Q2Lp3PwCXW",
  "key5": "5a8gi6Z4h1JkxMLsE3ngew6wmfuSo15i6gRM8reNsGXyMyAoRo8NxgNfZhZoptATJR56FB5j9zV3bk77N13zGgqx",
  "key6": "4tHSakpXQghCZMrCUHKiihj3kJ1pkinhf1K9UFuPUFu1VXbAVaWqybLHK4zcuMaFCCJsU9W9bkcbymxGFJf6EHgQ",
  "key7": "35Q19Cyszvucqv1JbBHz8ysKUK3bDN7ctwH5AfDjsXRUENwdJWR45M6TR3E7NH3XkoREQPMphB7SoBycP6xFEXXn",
  "key8": "5CrCFwsVYgCG6KMMHYhpPF83bNSQcPbR9ukWdoLSMo5gZZe8BUPyUXzxdBcq2W3KGppLXWpE94bJ1NHXBFckd7ji",
  "key9": "gDP7aDEha2oqo1jNjDQH6oF1JSqMCBKVSzFK8nGdALYWNHqH8TUMCEcJPa3NAjPGCLvCkRxuhvpkP9qLVgqGnbD",
  "key10": "65amiLmKWF8ESTQBQWfMeT87pkKg9RwM7FSBkS3xswhGe4DM4j9U8DKUiY5z8Zvj4xjqiDKMxX53yoTXyNFng8D2",
  "key11": "5CHDra7NTLhZpcJmbFJVBt6Qna1j1Hi5YvxLoaMzteu4mTJ6dsdhTs4i2NpkAdEAb4JYVswnrUZoBewGByQguiYj",
  "key12": "4zrbPGvHSRZzArm536YNZ7LZFTxtazmys6QdFJb8wddjFbjx6tZnFxWviatuChtzJiZfuvAJNc9Uo5AzqnpkX2r",
  "key13": "aadVh1Dnaejphro44dJBo8zNq4s9nJnk31PPDEarNSCR6Xs46mcwxPSiCLwCapCjUFF8Bf65jTsQX2tL8JeTXDK",
  "key14": "4aES7yki692KgYEKFpe1TaJQdecBitrmDXo1kh8fdz6HPd1rdyc5suei6JmT5eF5J2kNgnRsD3sFCgiSs5rfnFHN",
  "key15": "52JURDAQEZ3AjbAeqHTAYzvctL1hLPf8PFLuZSuajbmidsKit5WSSucZEESiaU3TmZS1LwufrD7DKWp4pj8CTw21",
  "key16": "2jx1NatKYkhEpPNuh7NF7wZi5VHUe3Raont4bH534TPihpreAnskRd9EvGeeKQmhDxKgxDuZuhD5V86SS55U77Az",
  "key17": "2K57ZwxZesRX2rBLxRrTeVLbiy5GibDaAgQPWHDgeT4kUbTFFUZPqsPtEcZ4yDbXQ9qs1B9WD4wLmBZ5Mn5v3GBh",
  "key18": "3BiPy19g2BvEFiu6rE7YT646bgqfh4iVZ7Zwj2WZP5Zi9YushE4MuCZ6exGjcGEtRmUxFioZhzUeVVygpvEm9SLX",
  "key19": "2WG6wMe9kpd57edqMKF5u4gqKCsdJUCTNaHyKvaR5mrKP7kjmRZtxHc3dLpLtPzvkxVhgb2doFmyUSiDsepRA77Y",
  "key20": "4jfyKBrxFA8bLKE6pQrzo3grjqd75XJ6tXkSMUApFMA5payj12px9buwT9FHaBHpa81BHXNCFXD5qZTSRGQFcJJK",
  "key21": "4qSwCeK2284KRt8EMEa2zsetgLEzJ2M7mcpvJ3nibrktVe5ySYg9uGEEVAFAYC8oS6mxCmB9ZZsR3CEnpv37zsVA",
  "key22": "5vcgPK8HA6xCAUiTHQYUTYy4r8kzg3o33tKmYZQYsJ6TP3nG7v3DLG8tW2FUKr8taYZ1p2m9UEymkFxTe2WXLfYA",
  "key23": "2iyqbEYpqvLkkv92JJDhytLJt24p48ShTk1NKh2y6EtGi926MscoW1CLjzWKbH2nHQeo4vTng6KTgQjLxvbWH15U",
  "key24": "393QPRfsE5jtQnSx4PEYN4UfSTVf3YHpj4vjc4oBfKkACtePwaPkrEBuunFMPL2uLb71EvJVP3VdhuUZ4aNQuK4a",
  "key25": "5tvKZ6R31pndGJtqhYGiJnmqk5dP2FRtSNXyusEoJsT8PZuGvvRzi5E4pTn6wDuHtQPhSiKYi2LXUFRH3CBZcb5i",
  "key26": "5cyRxrYPZPznmC7oVaiTG6veVHtawRFNhMvRJM85JohQwQtTo5LwVhiU1dwA41SA9QdJsj7nH5pYyjq7VgFxd16k",
  "key27": "5nwrnarSiXhpqzHXyd7iDvbC9k6Z7BJuLRANFpyKdxj1KuZG8YMWe8TjHBLCeBgeBnosCQjqw9SZumPLZyFDZ3xX",
  "key28": "B5PqLhZMnnk8WbBUzxJRTKatyc2v4umRLbiGNv7z5sqTwLJKNKcVLHusF9XmW83xR2of4iSSzS7a5fmbbjy12eK",
  "key29": "HZgNQcCJcXDk8hVWocDKsa82DuD4qdo7Pm1dcL6BwhqsL4oqwYDm4m4kiKwn4dYKBbWUMQiCQueBMyBo5iEf99w",
  "key30": "5sDLh6HQFxc8soAmQK3V9gXUVFU5WVQmVruT8LaJYmn5rAVHc3uwHNjjRpScjtPbVqvnNhpTjQEM2HqecGEecqY5",
  "key31": "35yFNvosN4YpXfGaGf6QGZWV2yHbNhVEmX2UtowFtpVntQp2fGaAeiCB87qsLFyJe3hP7rYaun3x9BPoHJ2Yzxun",
  "key32": "ZfbnZKKnuZAFV2Eq9Q9NCo1x64qZZU7YTc2XmxwfyVyUEa8ioGRHhAPFQe1wi4AFNnDusxLr54C4vTQZH5jbTk4",
  "key33": "2Sub7dNXXTRufLyysGQbJjrJ9ytWLYgBXGr14Q8JamCrWwsFuwNBTsYdzQLEnNNquPw6JEGgyTMFHocLENsFuSR4",
  "key34": "2B5HcWDiPbUsM32TH7gS1K5jptx1PAJxkCGbTizyVVuCc9yewEER3KrbFm82xDJMCJN7KSB9XaskHBz5m5oVqquW",
  "key35": "4DoxSvHRdtT2qE2t7yUoSpCa4v6oFdLvGu7eMk879XWizquC9BzTpmGJ8z2SE68kp1uYuWXcEyNjeQm8h8oN8HBh",
  "key36": "57YZD8VD9TRU5RCSoRVkxC8FxxWHthnM4rvrp1ikhaJ6hQex65KUbGpadHqvq1cesrkh9zHC8RSUHhyHUc7837f9",
  "key37": "4kRwTWZa1E9fS4f7qhSoEVwioh1orHiGcPQAt5gUzhpd1iSFWjSqQxuMsSqKvcDC1wg2j8ojD4q9AFYecDFcAatM",
  "key38": "5me4VzvfAVja786SkTC73fxxiSuE2BaD4CA4fbbNEjyjsdMbdaBQJEgJQu4f2qhcqzAqnCZoRwRaHEegzMEJuW5u",
  "key39": "4tfX6EgFoYs4zzVUD2EgZFr7pcLVcd6JopcP7bN5jAis56KNMS1CQQrkFtWErrSLmWSR78NUyKPG35jqRou2bQQi",
  "key40": "4boK1D4kDHWA1wnzhdW2eR2aEULkqWyBajapdWMR5Zs6kFQdVqAzA9YoWKN6gg9j879FT2yJLkJGcuvYp14wzurU",
  "key41": "5Zs1yi8pPJG4oPe8sbQyjeMDBTKC5eyEdyxQKCdAdLXycu5wXRK1YdG2XdBb1eK9E6mf19DC121VAJiLwJxPjH7H",
  "key42": "5zpG4ezuipgCLUxggXNaamCosR5x8S2myYuuVvr5t91fnCc9iAMNnpveNRCJMncJT16QZDamVpSVdfcFx9GmhV6N",
  "key43": "ttJthMVTeVbMSUPcYoCCqMYPm8AYs47F5aB61Q3uS8U6e4PkwRrQuiXAzeSfxa8eHDPmiPG3mUUYrBTG7dTSunn",
  "key44": "UoKdm9gYGiGUjzZz2jYEuSD1pGrrcNQuy3gXdRBz98H1dzmRHTVf7BBwx6fTiu2hawmbri2Yx4cUntUjzisQEV1",
  "key45": "3r6Hdbzhe8uLscyuVHUmiQfbeWZF39oKFQ743FQQykxrXxW1fxQygAy7x2CHMyMhmQdVyyUQ9Hq6FBXxFNvvddmK",
  "key46": "41iSPPCascK4ME8PrvgN7jf4PB63uqQew31caMTqiScnmgdT5HaPi6AKjKad8S8D6aMU5erbZacnWRS9dMT7CysN",
  "key47": "66SR7DwrEuESPDrpjNNcbtTZiAPtuZf3rwLt2yX1LegsKTJ2eHgGwDG1jMmU4PFkZMqfVdbcxwFmrx9RZP1xumsb"
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
