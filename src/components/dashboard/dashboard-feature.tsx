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
    "5EjjJvfSsP8xvRqoTwKeZKTXQrQmzGhywQM5BcF5use5BGzozH3YzwLhcu54tcSCs3uL5mvRghW4Q3SoKehXTxxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jzWFUiWSDNFjbRjQoy5wAN4hhiU3hSrHEgC34j97XVhqSaeCnDQM7dfmnSwhsvRbYt7SBYCDqFWKVHzrte7vRSD",
  "key1": "tXeoMP2nXKb55G56FzTk5L1pdPLnjWByPqUEatBmVgyDdGBtokj8wdJeTEsMdUzZAprAK67LP3yZS7q2tpZdC1g",
  "key2": "27RfgFe9iKDnHbtDGupsm6g2vSK4MP9F6E8hnVZRWpHkw4UiSsioKWE2Bdnp9xQA5bNXiCNTfNGgFnW9d4yqySTn",
  "key3": "2SNeQBvBS1Verm1hRjWSsLFMpnVk6izAxB1PFrXiY9pCa9jt6eH3kpZGe3PvFrxUqHSZsp8eREjnAppsm8tjcU66",
  "key4": "WiPR6WkWtktdeLgZEamKd41SrF45arxdzpnABqVUo3QGtJJDrCQyrVMgXWP9kbh8SDEH7TPBw2e8X2iVxTTVbjH",
  "key5": "2G8jvp8sDByFuT7uT19NSftKMzpZz7rF9twctsCSwaHFdsMFcj5Z3EPAFbBXjGzbEuTKR2Mq7tr2tC68jDBeLFJ6",
  "key6": "dP35EBkVQ6wuQM4Rj87PQSm38dZgCoBCK2PxHU8D3FSVHpk21DLjp11LCNKzyWEb5mnjQQiqD1WJtmtebsNyEoS",
  "key7": "5PEadR9r7vR4LxeJgJgj9fgPyPELvpXAwhcLAS9jxXB5SQnuZpuWBamNTnphxZhioP51V9tR9utBqkroBozNUmDR",
  "key8": "3K5Uj2FJ7Qh5iTTjzd93LQmd8WKtog7WZRzPf3nhREhXaBRF5hVRbPHidTN1BJXSHDCwjhuE2sT3wq9Qxo9N7JGB",
  "key9": "5bkG7X5LaC6gvaSjv1DJxuNpH84gn66hwsBhrQdwDTrdyCTWsPELigr1zcyoiRVgiaX9jbgH5yhVxjEmPKR3TzEF",
  "key10": "2TRoNw1VHfrRSmE7MCtDnVijSZRk1rtg5mn11scxAcXHkT6xQazshsjXjLqCW6zQntKwoRJcFQuVZZw6azFY2eM",
  "key11": "3NxtyY4MMDbsCmEMv6ubk27f6KRMXx6Ux2ArsyEWyf6Geor71UKazFD4FCubXR62bSQ9etf2EhodurLAaK5Wk1hU",
  "key12": "KGEMGK7As6XmFSAsrGJ9RHFUtZSn7B9auggDrjeTNVTjFt6Ly5Y5wynk6BERd9Neso6BqSoDDPocCAAroc9E2XG",
  "key13": "4CYpf8EJyFG8vFXUmYzRUGXtobxxURjfr9atku72ooEAeU84k8nP8BpXTdY8gKXfWZ25xSV88CWvcGWBzSyVr6ak",
  "key14": "2fnxrwXjUtK9f525ZqQjxumAmQPWDHzyxf8sYQMT5SbFYzJmVywC3z6cbnk7ZougbfG6fCtPgvYRzAxMEoLTnyzc",
  "key15": "5xifjxKTEvt1qMUapDYYyj5mxJV2ZRieffAk6weCcngVJpGVRY4yiKwTf43ub6qC837pCzVDzd8UKMvtAuyT4iFf",
  "key16": "3fTCx4YdGsNpXubBm9oadSAkKA11qKH2gGySDdDABaqSY6HXUPUWCCfUmCsU2AoDTdd6PSywmXSM8vvRCMLLH8Wj",
  "key17": "58VnMwYEkaaGYzVAqJek3nVoERWyrEVTCwY5m7DZ84hiHWrtUu6fCpjdSA1fqi1iuMHiJ6oxpV2fhkpSo4PmdB3N",
  "key18": "5NECNxXK6BdHQhGcudgwg3cAP9nKz8Gi4H3KMDdKSXTx2f7az3ZpUjcKiD7wBQEVbQuUjFnuYL1diAo3i5F8jnPH",
  "key19": "2BRYSJKwvtoKDEBknM6BdjWN7L4grfvB8h4g4hLsqimntZ8NmKgy8m8cWizpKMwgLohgqrUXxDdhsAvC6mSvoMUE",
  "key20": "2N5Xh7mWpvL8ayutn18p9ZUbBdo6ae1z2AsGnBrwRcnCS2RFppJ1Tw6y4cdjnDmA9LCSYSJ3F1BbGgS2Kt4qayLo",
  "key21": "9Yz4PxVWFBtdWJ2WDQkDWofdhE3Kqa1QJsxEUmcWqV2LF3nyWft2BzkLwZdbxzmuvQt7GujjkiSSCUcLXZRTMGH",
  "key22": "5A1xbvnUWLVVVhNah5x5JweDJW4Hh59Mnq4GpKDsaoME3UwkEELMrmXc86BXTZu1S3bsoMgpanb4ccDS5kkhqbcp",
  "key23": "Ttc2FJRCm4v1yAaFE9hDjJmo8x3PxVq7iKABX5FZZEpJRCibAWWKJpPTNX97erXjYahRiKrgXMHEKnzTQxZB64S",
  "key24": "4xjkZCZ4shUVR67zD1yZ563jJaGrAPeuFL2WpjKq12Lpk813C9dLGyH6bAgCuao4u4fRmnN8wCLJT758YgppuznH",
  "key25": "5RxqZ19LhUcwKwckmxkRaXyfJZfC697RK3psWr3QbyjUKvDqrdvczhhFQuo2ZGHvC7FTAvE5wpqL8chZ7YvvK6Mp",
  "key26": "5JLgGuZzNxAv4DJ4vx4fY2mNDWxavLJTZ5JuBnDgPosMTBqUXTfqHiBUZfatfup5cN3FH3BcVtwULvtc9CS1pf8y",
  "key27": "4C5wnaDsvk3g6iPNaHK78DpjXR7ze3YGXDDeTzNLavu7XVcShMAfnUzwS5uwakMYcvRfJHxi28UfyNRiVatwmiEp",
  "key28": "2E2An9jqZqhJCCc8uGYhi7iPtzzvGdKNUcbUQtGGp3aEAKCGvPPFQxvoSvana7xZ6y2oREsjKbgBe7J9FNkVFLU8",
  "key29": "3k1KFNV2oHAGU6iaqnAghKSaxTTMVA8DaDURRpBAaHPCiHWnZnbfQEpEiLpT89LgJYNe4o8tsKnBoHQqjiYVvKam",
  "key30": "4rU3SHVPjpUjmoEZU2VXTmzbLUb6RdNyMF5RgLj7j5H2hqBkNrEbrb8paGkpVQ3NH7HLHd5sS1bNYRWk6WG76amJ",
  "key31": "3yECXbtChHqw7LPvP8TnAzp8hD5ywFVi2mxGrJa8pSCAoDWPTkbJtfbfwRQpc3NXtScuoKgcYBtXy7pMRrkoMUr8",
  "key32": "34WdirDABHgTwZx1cRQpBMqNNhN7faxAHoK4cvgaeGKkKf5btwZbnNSc14qNBxHmcT812XzMu7do6nyWKYduda78",
  "key33": "Y5henpQoWk4DiabT9g2xtDsrne7tFEz1PY2vjEtsfBs5mMY8BSyxz5VPiVJMMKt46BUCmfGf8FcqxtM6DdBSYRL",
  "key34": "2ETJXJ4YpkDs4JwMvuqEmDzztTbFb66NKBNFRZnDMhTNLfoe4XEKVFiAZRQDHAgpYc4kimQPASPTGBnNmhUMPjvf",
  "key35": "3eM62oZyQ9wna5RDo7HpgcxyToabW3pQebgfbLgB1r1oifpc2UHrkHGVDawvJjuS3CJrCxjhgM4uqdiphifHxfND",
  "key36": "2AtEmuGYPDxTtyz8V8nwFV51V9kSmXCdyzkquurwmfHJKSQdHcM7os56gUp8mPwxWnK3DhLrRrsqdSAv5djZC63P",
  "key37": "dbnjBz7EC5eJZsc9HKcsDkxNYszf5QggY21nDaGd8V6hTVYAocmH3taAmKKFLu3DehtCcRozp8bNPVo2iQvRmV2",
  "key38": "39cBCcqcBy5uLd3FF6HNznHZdRn2LkEQd5Bd9enxqjr6erst1rEFFzC3mYoBQJBy8sgP5rmtgggLp2qqTWXDSBDt",
  "key39": "3dSMXV8CTtRYW2JxwxacrUE7WxxPXooog9QJEZgasj1S6AFiuGasBxef8TBfSRwXjU21rcQpNoC8M2SDjUkdMYHs",
  "key40": "XbmJZ2UEqdVoiNnUmVRk6rpaQX8p184ay2RDjQ8KJQXCJhrGv4Y3FDm7fDpA9GXq9xUPvfPn54wQTahWbWTzqwZ",
  "key41": "5QiwbgMYoCwTCGiNyimMJ2SGvByr6TnBsgfvtbaZESpxD1qRh1dui3Yxb3eDn8nnxpQo1ms21kSGFqL6hE8SYUCA",
  "key42": "5wvSc7q6HGK7m3Wt2a2Jn3yTayjxpQUT2aeUEzP6cP7Sdrfh4jJvo199Ei3eH6LoyuC6rjhzKstnJGsJA4tqmyBw"
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
