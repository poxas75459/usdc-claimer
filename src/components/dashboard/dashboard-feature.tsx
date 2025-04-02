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
    "MSq5TNrjyt4eZu1aB3EcEiK6LwMY1J3SbmK6sU9qMX4rTFwDRKcZqHaFDKUoDEhuBq6gft1sQSWQyA4WGP9zZLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PaECPsNsdZvAPqwzpqnTCvMxeDgEXnkncP7h199YoUvXTt1zpwRs7MViNVuJFSUq9X4mcd6qG8FTWUSjnszY5o6",
  "key1": "2hxoPGXTNQpj4PkoKqJEbdcgngQ5aVv4BCh39A4iTHjzdU9XQXbEuqPFEyyY1HHkn7TobCoL5RhRYWvGhN6LRywa",
  "key2": "3z2ayYDEYmr9yAv9GaowMcpMywngmiobQWujzKMohDV5bUhSu1qt5Kk7D24SVsUm17qxdjbRALjzRPn8BeW9zMRD",
  "key3": "44wRB8tCkqLpsqF8W8tWGJ2FbTtooCe1t4XoeQD6Q61jKFmkfiwB5DHEauvXunDPUqEaTchfqr9o954EerqjbTX5",
  "key4": "KsjegLxiUyeB2tm8Z4cWEoQE6bxpvZUBvFNyAKRgafSN1yf5xuzLGwMgJfD7tDangLSRf6DNJz4QiRH3ghpygBa",
  "key5": "23AP6ta4AjbMkneZX9ErhGTzd1Y9T3UdjWWkJewMrHfZPCN1KAPLiwF8rpWRunRMvXKTcpx4peg1qi2NCgtNbybB",
  "key6": "3XtngPsULrgz95ypmnKXUfVgyM4CBCxDmrBBzyKaKMpHyAsxvadx6jm7iyM69yMiqs52RYB94izqKwJDd3G7zb2X",
  "key7": "5YDo8Mzrg91raW7dhhPteT73FLEZqr8ikXYJWvAK6dVM73XpYqnfu9QGnoHaa9EzAZ5EytkShyC1aPxwSp1YoUJr",
  "key8": "5bJaU8BMHYbXZTVnStGe5P3vZ1QkK5nhUXnKBvu8CDX1yvFX8yphefaaNY9gF1XNcJsgME9EJbFfzLNwhUvDG9CJ",
  "key9": "5Da5u68sewsboewQB6qPeyJd5irRZHeZJCZzZkVak3XZm1H41SA32A6svDZgqKSf9BykbmrSPpFMZPxTz166LWbQ",
  "key10": "3Jfe1Fj3NGsTyJEBjhUv3v3hZkvHHQPZghYJ54iFwBnc7QxG9qNLAfkVKT9eTTNQCQ6k8ZpjnkKrYTcLCVCxeUeV",
  "key11": "4c2PSsuSxDVP3hjvSMJdAo5apRZ5LTR5zRyP6pur3Be8k1PVtVVmnazat6Lmjj3aFzDoFujPVweEAziDDFjuXb5E",
  "key12": "3wEBrK2oiKQkvkAY25uD7avjxGk2m1zybK5D7qnrZnd55cunVyq6nVKdqECQpZqzXRku2oqFKgks29UEwmvVHCA2",
  "key13": "4cjMprTqTXguKuF3c3WN9KtN5aLykvhtFgCiuoSuR4KEbqQnAKpzg1As5FwwWNDdhDmQ3eDZXzjXRzXiWbdehyEf",
  "key14": "2UfA43SddjQt7AqCae44dszM6FBDbYh7q7A7fjVbQUkiPSy6B7qVUWUc4F7TndiKnj78bhnpoG1xt3DGyXA9HXmX",
  "key15": "2FfRjtt993eJb5Y78rPf3mFZeXAz4qMNvssLsBgr3HFbKg3awcqoYu7V34ng7vgqFKt5zRqConV8VeQ3UMcwawh1",
  "key16": "4pouMQPvgg3nL8qQGN36tJyyHg1nN9ZJ3ULSCxui55jLjRzXRSaGWMjXS3sAv9Lrcjv31CXVQfwUf2Jm47KQp8PJ",
  "key17": "2aHW4yLRcihw9ptn263Wn7BotW3qBK8hAWykgCUMYEoyiSpLSzWy8mVhBL4kHnohJemyUtGqSkKRHddBFBGFNzxe",
  "key18": "4PPwzLVRY6YQatypkBVJDyaEu8RSaNDnX3QwJoHGjit2LRsLPvDpHuCdHbKzYt2YHKZRt3PyjfLdhaw6FgCb4XXy",
  "key19": "2i7NxjkK38JvAwoQr3qDiGpSH1Mvb5xycktAbWKK4LN2xjjXAD1Us61ZqNNUGJUs1MxrscjTTJNqzcUicYGswnnN",
  "key20": "56zFjgG7s2Vwg3q1MKezkptnPe21kNwqk1n5Dd9SaTH5i8WwHt7Hv9HFgrmeVehao2ffH7k1pj4CZdUM31H8X2jk",
  "key21": "4sFf3Bg8CVhQ6CfmRuqdaxQfPuUzXVCkTUU4cXWq3RfaxMBNGa9m38qkgQnx91rNfJbWtTwjdqtWRJZ1NxLb3V1e",
  "key22": "3AEUMAYmDnC2ipWHqhi11hXV2b5jaAYXoBqsbCLbUjxhSihNN4Jet8C6Rh7w1gUwXu2H96qfRx6uEj7YHsWjuwCA",
  "key23": "5qF6AThAgL8j2igaZRa8a3JZspbinxnBYK7DDedD6jka1qJCA9GMndFtakXAy5YsrL1PxbtUkybNqoZFw42QaEHF",
  "key24": "45epUU7oTEqa56nciu7Ud4jkoHtuCEj29jQ53r172E59g7ZUbzD29z7mT8eEN5Pe3GzLGsDGCiXegLDzjvCp25Et",
  "key25": "3LCPHXsHpzggwLciN1TY4bQYzuwLEW6BJxXf8x2fkud1cXZZ9DXAUnDaWRBXSG4erf2SwG761etucUVP4kiNZHfe",
  "key26": "4SBtdWNXHhLztAdo6hLvui4RxS8fUXBnSUC9UpLW2ddrqpX81FPKKVsrMt6ZhwBmxSSeBAYJq3hvKMqEpN1DowSY",
  "key27": "EnBesuZL7NZVh16Yk9dYqqdQoPNuxXXWwhAhDNeN9i6hecxxYbsCM6udWdtdTvaw8WTE6VxivR6yMkivY5HphjH",
  "key28": "4QUq8mB8GFY11fHSThmBPc5CtWRJCNqYWBbx41YF8xyfjjNTz3uNRoUsb4UDM2RbN2NaKu5Fj5wfcEtjQ4oj5oao",
  "key29": "u34GpHEgUrN8TtkASM8xvJQqnaC93RfdzFPmBe4LMM2vwuWGrM4LxnMxXJoKMqqojypFSqY9uGzXqUNqbFhAYjq",
  "key30": "4ADJg2N6Vx9XHPQhKbJ9z83zNyEd4hG2BCnEhFbo1W3FukK9oeC1wogbD8fGDWZV6ZS5QdzcAKwxLdxx2NjrdCR",
  "key31": "3BQBihwqvShAbd3msgAPKACjGhZdxjMD7za88U5XFDAHVeWgzoGS72k7PENBzXkfcUZnKWQWttFGqkq6gvQQzJ7J",
  "key32": "4fumwrJjQVcGScXaKAVPksxaUkvB1sYW4DtkqRhPtJqTiWCwP6Ru9eNy2PVSJ8YcptLSn1mmuGhKPkKMivWV1KQD",
  "key33": "3PhtZa8y32rMdoQ4FPzgU6u19VHVgWMgUzo4NGW9iAFeJZW64iNBhLNSVE2doovuhTu1s9T2RakKa7s9dBt95dnY",
  "key34": "2yzDY4Ta12FkGpSmr2RaASbdauD4A51ikWePnaUnot6XKAquFdtW1xEoVQB48kUEdkXTYKowhNH2jYo17ipQu2YC",
  "key35": "5JbwHCLoTry965HCpidDeLZM1JSbH68rDGxFmyVpkqwVJMNXrmGj6PZski3ugUKPQPTNNbSoWxa9h6SutuHDhqdk",
  "key36": "qXYL566F9ramDtzZtFbiTriN5h6uhjzfNb6gsbwH9ZVJzA2iFaxWKjeEwhAa4GNgaX1cSJFM1zNVSB3sod8Tnst",
  "key37": "66PrZjcxBBtKtv7tr9UJGWkkAuGN9vtAcFGrMTm62Vo2YugKLErQ6X5UM6k9ozo5HapWuuxzRNAH35FtK4sDHum2",
  "key38": "57b8j4ye3v3jvVZxM4k9x5Wk7Tyz91Dgrogoe7AGVsCF38xhV2rKPGs7BTUthWYqQyZFRCHmiTowgLbKRJtuNU66",
  "key39": "5ZFyZgVKSzQJ4hhpRHwejA2xGuQpj7ttYficfF7bHhL2WV7BKy6Q2Ez7fsvZ8HfRcfbNXYG4TP31jpkC8QY6W4Vn",
  "key40": "46awj83Nt67HpE29RHv4xFkpAYSBeVuRg95LjpkdmgVdg8vzd4ir6eJhePgi5sBz5qXAUnFwh6xCeqtfkPfUNvDY",
  "key41": "5Dz3n1VwfAb54kjyuVxPK66yUoCjrmSVsct7aHS6KoP5rfHBo1pqgapCXQMh5oZLJEUxdMSvpLdudnHrQEWbzPYZ",
  "key42": "4vY49zwSyi45AVMpn2ni9uKW4sLEwTSS1NFj1WPUpdQcPxtXsLW3McDtyRLR1sVjjoezpRxD28nm4sjZpzehJnVp",
  "key43": "4MojRobHph2U6fqiVgW5AHhNGndPQ13KfaHCih9bmWxXNV57LsqicZmd1ELMKcbQgcCLh2BPmVLH2oFLJRrijhrW",
  "key44": "6744XBGkWZhn9xxh4kwkzjyUZVoyV5bgigqf7kYoSUWxwpNFC6kZmVmP7BSoRWw6f8BaT8iKpUmW8yQGGJrkB79A",
  "key45": "52xZQAmHH2M6kdwU97h18RUuo7PgpU21F3tPE35XbupDoGKFMwi2AaqV2AbPhj8o2rGkNXgXTTxnc4doq8vgNTTE"
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
