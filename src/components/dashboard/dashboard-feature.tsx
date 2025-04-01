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
    "21pYX7gNiuzcG2HVnD2bNLEJqose5nsuoXaivJKbvDodDnfRvbjKKD1Ka153Wx8CF2aW1oAtDWeCEem52t4ek3Rs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45fjWUQoEbBQKuix3ikS7hPEHH2Xi7qjsT2Bw4uAbs1ZBbBQgZwuAFksrEvuMUsa8ygfMBbFRzfPDd48uTRU2uwi",
  "key1": "3MNvCcFNzm7Ha1TeT6oNqHTRHhx6jCefPBog7z9ai9rPq2jj6x6nnfa3pRiwfZhptWfEieBbteirhKkupiWUdgmr",
  "key2": "5KWgGrzMv9X3t2zMc2vBTeGV7WG3ApBR5ev2ajpETtkUaKJZd97tBknVAnhebQP81jxuLXvRhhaF9sWuT4iDDM9n",
  "key3": "2WJDG7wVVTeu3zQEAyGXVftbpswGNdHaVYyzhx7arR89AZWdJcgLTJPteYpoZ24ghfM4tp2ND1obG4DbitAgaVf8",
  "key4": "8TLDHziWKYZDAFJT6GPKWnDTxTNVuiTUaY9rL4bmXnWx2iKFV8UnMnt8Nsi12T8wjc8aSt6bkS2xXzH1awRRdML",
  "key5": "kPyBGi9KYaGRVbJhWdVpwusLU9g6aKfYj2JVX7Wb3ywmeATTL8s8VYyAA1qJJMNF3KQS8rdGNsbsB32Sw2UCmMM",
  "key6": "5b4snrf76amETep2f3AyHqUXTh8ohSnmaw6yZZG968Xb281U1wSmX5MUAtZohV8TtQjmEHhDoaBoXWoKvwWyUzgN",
  "key7": "kCwKiPeWHpb3nFoKCxjxXrfZkF4VPcTdqa3ji2ZA8niWfhZzVmJ89GW49JvTCaGJ3pDUuzbMQmscTePsidxD2BJ",
  "key8": "P7e87K9xQszSzn1d92N76RdwfUdDti4ERNvSUvB2SXWoGFyxpbVYK9Y2dUmqPKUpXPmq8SYCUURjjrfAZ7sZnha",
  "key9": "Pvpuweo9oSj5BVw1fuq9wK2Kxu9rwaoqfcF3mWJxqDqfkYF18QSGECzcgJCUmNpT9A3p9AvQwZD6wVkBPMHxjye",
  "key10": "2e4nGngfuoxuVENS69XWg99WQSR1kAZNpRUPdoRXCoKTvVmowDMvm49aqpCwShGkvXdbxv5NpeJKkZ4ooNRvazcV",
  "key11": "4FajTC1dHcYfNKUqfUH4qqsbzm1ZJDuBRMi4UHqKogLvbetrzyzoxSN3h7t5giYP2yoxgxdmP12gqmQiKh6F5sTH",
  "key12": "4Y7Fz7gY7VSzxixSS2kuvj6tS3SNdnJBP2Ryzz2MCVtRJ5wEyzW11LhBJHidCgThPwoUofWUNXPSsPG8shLnyTRe",
  "key13": "64S4yMoy6pvaYHh7f8FKUv1FHMbzdtbfuoVXAGLeRNP4ZXv8fU36Pmkv5EpJn5T4biBi5rZUPzx7UwNnGoHtnV18",
  "key14": "55KAeUAfKSwFTsdppz43GfwVaHfH9o9YENLtbDcB6sp5DJkWF5sAXjxe1zw4M5SnoWmti585rEKhej7MZ5LhJ2p9",
  "key15": "4aZwxCjV3C4y6XdMSvVNxyREVciGwc87tJJETasBx3fgSpKz6WFiLoab8ojTvzmg6dRHMSP8emrbHsmqEJMcXVnq",
  "key16": "5DDmi6SiJ1ft3jiU7MZYVCGNhwt2zXAmm1GvtsTrfu4TrrnYySpYKY4mjBqmM2j4jNPZ5Ph3XU2nqRD4sALG1pfr",
  "key17": "6126s9viwyRuRWiEvoWccxK6wJdgLFwsYax7bwM72nDYiWVqRXaDpkn8Rd7ap9uTNKXAHWifpYzZ6JYy4FMvNLyz",
  "key18": "5eRZDjyB651yerxweygLFVHBCMBX4r3dCoCgMCFRqHYuDs399YYhJ4kWCeXaxW26CsBoxMcGyzTsm46Q9AX8LEYa",
  "key19": "2FhVQYXNeW264td5ciqXbz84RxVqoxKxCzYsLCxTfGSHEZBU8Qs51gASy5oDtinJzN1B5btYSDtKtBqbHGL32PCv",
  "key20": "5dEXrHSiagiyjVDKgRDAUWPEv7KFLCo1r6tYeCDJa36U4JWypZUnoA6ZWQ7h9YWHVJwDj8tXgCaUPfWePnUqq8E2",
  "key21": "26qoQtbP6g6znNnZu9pUmK9rum1SEMXhxxCnBrnrg7tjMb5W3Ay1WR4gBzqtKJQ42TRnhcDvSyb9r3eVTX57L6YH",
  "key22": "4P2rSokQGvXj7Dq5Bzu8v7Gp7kmm4rwKQPrSVSbYxMTnyaWSb5uG1fZ13UZECYDMCk535wLHv88NUtvxgs3hzyyB",
  "key23": "4L2mEh6ao3sUBAtDpCx9hJdK22YM65gTupdGAnR6HnSV1TdwRQseuhmofyoGQBan9FBCCmBf9rycMybfvXrbPN6x",
  "key24": "34dcgs1JEELr9cFtjvyKPTxqg5E77HMHmduBRdnLMQnPkS9i8SP3QaYiXrwwNZFn12HKBqPD5C4WVwugguwC6bCv",
  "key25": "5KptQJbJ1nyeq4R4LJNV8pmcAZ2Hu7t3t4Dkotwfr3fbSARCNwH5SrwFTHE8TUmnmuPV8maJ9xgMCDv8QbzMTBse",
  "key26": "5KMWAHt2BF5cuvvcgHwQTZi4pQugWn1wVLZgPVE9kt8jqbwpKc9PFVGTEiq1S4DkLxcGYfAHVWRycmmdHeMZrgZo",
  "key27": "8rTxwYK4NkBgxN6EjErUr7Z6VP8kauxeiMfidmwKjkUsKDGJzwTAoG2NLdTfkSt6Uoe7i7WUHtenV8eeXj8JVz2",
  "key28": "dvRdVYnMcyUNzhTBkoqUhPmLQFpBoqTgLbXVbQVSMJ57wpHf89bwEY4uQWMaEvf8mfu4oUn5934LWrF68aiWibC",
  "key29": "5GVpwxd4LgvGqTxc6qSY5xW9RH1tu3PTb7CHGn3ipFVJz6M6HjBMYstkLsFkL8MbWAWoqfzayoSzWJ4r5WaJBgt9",
  "key30": "3GnkX7CdifgqP9UwgkBNpVizESv6SoadbJXmjfanrfnoQrtpQBGiRkcbzTVhvb3HaTRRDiJqzTMW2sCpJx8W8kao",
  "key31": "KQYDMCqc1deJRwcogFK9cR1jVL2zsHUKCaS3rekMStcbqGPxtwS6ox5P3Q6jg2e6hDaP6EbYLqhezodaJHWJuYL",
  "key32": "2Fk93c8H9Vcz71nAvEtMmzEcuG1x8K1vWTxDSsXq1FBLTpQb1rtqzCDYFEesJfgxNQqkwQ3bZKPj8QqsWMJpxz2s",
  "key33": "263NycFSnRZ8jFkQmyDcYHytkZ7VkagTsavTYkxVs4kA8vaedtAcBCZoV8jYEdfZYz7jDS6reP6LFfVATsD7GGR3",
  "key34": "4dBZfiXUv6648cmsWj6mKrTHcknxcx4eNF7F9vqmgRit4AnWQbZpQidegiD7SNba89ZKL7QvvF7QEVTmtHFgbeoq",
  "key35": "5ikiwYPAmBFvaFvjBRFind4KaW9M3yhGCVz1rS1Xbnqrc7cAa2Rj7NtPyfdoHwgQnSAqErQL1XtGCVcxULk3uWoz",
  "key36": "a9iGf7WDbzVPikG8tDsUkT6XeQsQxmWncWu9dnmdG2TLAVC97hnxXjDCNm1Y7eNYjH3CB4CU6BxECsghsF1m3dQ",
  "key37": "5VtH17M6Yp1FyCE7ojjL5wdUQRP4td7WYLynQNCsaHb52eQv7NnMMwawbiqiLY7fkqMDpd8EkXNMEfn3h9tesE8T",
  "key38": "2GYzFvWTQFxvtaSsa9snnY5jmbZiqywDK2Qo3ggcHGL9779HsuxQ9QqGW81YRzUsgWoUFz1GjMf1spzgTXYNpRsH"
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
