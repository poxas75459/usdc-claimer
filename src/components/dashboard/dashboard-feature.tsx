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
    "58BJmBmNVbKo9LX4tJ4HeHkrXR3Sccpcynt4cVJ3yzSE2Q6fyC5bekNEDRptUzfubkH49V875iNQKKvAgtx79VtE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SXXgUPELSxX6Mk8wV682hSheCTZrts7APZD5FT7rSxSjEG6EopEwu3emo9oJz4GVZDp4WvpkaeuZu3cexWMsJeC",
  "key1": "98MRHN1dyw3bvu9BhcsA1rYEHffBWCkJEoZRQd4pBAfSTZdXRcdmJ7t7y1jjEM76Pc7RMibPA1ModiuSevnafV3",
  "key2": "5wKmg3bSAgGKNaQceUwX4UzKcynCqRdqqNpTsRuRXebjDd54nYp967TTSEp4J5ntmNczabCET17QFuEpbwMu5HZx",
  "key3": "3hcxDAzypfBYhx9kEFMaGdzzRu4ke4K2iPSk5SAS1eoGTcjWCgcX5Wo16UBrXLYTYb6MfouV9sYeTPY54CNKM9bX",
  "key4": "32X1XDBpPZiHz3SLuzNvbQCU9ZcUpCcEwbJjfCjEsKN5byuFwC8gjspPVgvzACSHTFZcsVs1KUG73kgPpcZEWSKH",
  "key5": "28UvNbn4ByM8JtyQs5VvfnwUgz5BWCT2YKBwcd7W1JoRCkLQpdU1nG2UyKKpD9P7sRQVtsK92eHkm21VduFQ8TWn",
  "key6": "35s8WMCum61QqLNCKe6wAaUtSLtdhvxpiFrjkhSwfp7mBtSsf6bNfy5G7TVwcViMZDccmq3du2jYNhw3knbCk5RM",
  "key7": "3CQ8dfrS7QYc6bXwDTJkTwoAL9jmj6ZmPu8Z4Mp47PCkW2VNkS4UpBj1RqNFWipVA5vdFra11pPxAqHZQmyK7Mah",
  "key8": "5UkXyRwMu7tJ8Hi98q8cfn5qiA6oafKPahV6iH2Q23CXVHqdR55923qU3gewb7814JsWWuWL8zi4m7AE8UvHmSGq",
  "key9": "25Q2ncBdEtpbtwPWobeT3t3UpjaGbTkEtR9MdXbNLvG4A9L7x1No2E42eb4CFhwkTTeJQvGpWcw8azsVpairmXhL",
  "key10": "53NoqETt2hLxtEdHxL4ANTSEVd8GKsn3potGShSBA7ypYpK8fnRxTzcu6fHvphMzjPJcaTjqeRG2yce1dmCQSokH",
  "key11": "3UBofejCHTUzuABGSyhAmS2rMNaABG76bskUY5xbEHZUvbu62KrRaPpAV8G6s76xytjsxXGJRSiCrrjcCQm9KXyK",
  "key12": "2Q75ngSL42sQLyBBmD5ATHqzZumEuySUi5bSSZoQ2ALyFNN9iTvRuRyYLkG5ouJFsHmgPD7NTRoH9SxGnE3AteDb",
  "key13": "2DwQREp1RbtWpBoZ5YugiaDnRGDk9cqksknSA4hjrz2MwksjecXX7N5GEy687TwXenGHmeeEKo7EZn2jzYLf57j5",
  "key14": "597bVZhyGnZziedi2uQsDKaGueJWEpjTcg4tTVtaQxjgh87f8jbFRoKuucx1eJN3g4TyC528sjwezqLXZGbDpkLX",
  "key15": "3Y2o7JZ5whgJjXK6MfJEtuv8EYrsV8pC6yFd8AiEVd1z8GA45j4qyJDsXsXiLKNT329uoX2aHHCwkb4b9bzyiHip",
  "key16": "4M1YZDVqBV4KYoeEqEcwQKPGu9unVQeSgMJewViCv3S4EG3YL8uhzyXFGqVR6wuVqBuvgcQuFpNtVPVrzeWtCxz9",
  "key17": "2VwTVZVt7Cmo9mZW6fwZvJmt4xiepLoFezZzg4xjPNbry4Z8iPQnNfBXmSnRipqgUJUpDGESPvUPXMTpZMGF4EhY",
  "key18": "3gd6erySfbm48JpEL93EPddsPAVgg1ZF1ifw7adzgayxNwYA6zU5iEx8AbxsSbV62CNrELERNDrskFKC67aeCrCH",
  "key19": "2rx2UHqVoqkcPNvxpx66M8sv14LRSJiqiK4Q7St9Y8JRK4rRTae4Ufdw6i2zARMHGY3ZW8HkBAgsvfYQvxa2NSUm",
  "key20": "42nU8r2QFN6b7g99pD8zkiCQEbyo7HSSZhBPN5M297qNYc95kNouj3cN2s9hdMkBYfvMi3AdF47URCHGuAuWSj9P",
  "key21": "V7hVoMj7KvtGeNBLfb5zjixXyj5CG3jTkkw5t4JyJtjjwPTtScZDGDGWpkAA8LHSCAkwP2ERPs9kxYoPmynnVmx",
  "key22": "2ziyR9NsS5EFtZq82exvpKNLUyi4cA2mbwTqJyPD56kLj1GEuWZHkMQ9rY6tGqj7q5ELPnG4Y4XBeeu9P1s2Cxoe",
  "key23": "ZHiAEp3pvfTDMJmw5SvHYskoLmxFqW8ojPc9kv1o9gR3JAbaukzGzEU2G7iSYPJr8Za3ACYs71ZD77KcvbDFEXo",
  "key24": "4ZczwZY3va1Ai4QyQyLCCDB8BPuPmBu6rdvQnEzsGNhzC2cJkDksicfvv7mqb51qCTGkAGqjEnPRyvhwgXVT8e7L",
  "key25": "3Nvsb986ypYtFH7QoQfPXK5mYYfSVFEHgzAmLYTRd1CEFJR8MGUqHasoXijGzh5im5A9Sb45oz4NZE2Fa84fR93Q",
  "key26": "5TJbrCwGCQuysDN5sF2rLeAxy1GHmKmULwgNXYHD1nLGDyqV3EU6GrBr55VzdnLdecyX8UqW9XfAD6hbC86p1e35",
  "key27": "3319ZdnPtMzN6YQwSMc4fbjApiDoENyecXsF3uWK9HPJk1Jskb6VqgFcgnHLJjXVQ5AvYmPNf66GEtBipTQ27aPC",
  "key28": "3r2TEDfckeCnRRAdsgCLo2amMG94Pnp1b8fQYt4rRGM1gWnCoMGNwc6VHHvWzgBEbFy8bd3gjk8zQvMBh5UZyniU",
  "key29": "3WYV8TTuqC2nD5VwW11rJwYpc2JCo97aG6nQ8KUngDWRZRkK9XUERvrfgDoC9gWxajWUYJrns3Ms5rYzdNLFCzyS",
  "key30": "3TLz6zqtU6ofe2J7Hyw7beELRFDrPZUUxt9ssKq8vmyiyfQQGvBPaL5cux9uUKXixSLQyzkH6sZ1AZwNDFqrt6DN",
  "key31": "226r9BvhyyzyF3ch5gmxqFHUWr1Z1zenkNhniJbwbSNLgmKsQtVg6fZHvAxUs1DuNwQZkzL6yMKypL8eN7MUw14e",
  "key32": "1tMJetaRqDFPK3hxcVPeuZQCgMJQ573AAeHP8dHosP9zY3PRBpwtPwpdEuTTttcdKPdpPicLQ8zNLPxoryuvdbv",
  "key33": "4oFse2jjSRLcVC3n84ovYKJT7S4d5vrhmRdtP2A3k2UByctNQYaBwXLzwCvLQmEhbjDq4dy8PF5XBk9XHzaVcfNG",
  "key34": "3gBvRjjeARc7y95GF6ypJQyTdD1RpakCiMR7JBZEvS1892SWiJ9LrMNZz7aEULQewc8wEJ9Lv1GEntxV4cRqtRdZ",
  "key35": "2kRF4GfDLPGLqzSyAYuAEy1yJ5XX9TXK8T36oHRH7ZMbGmmjKkttNn481p6Vbiy8FjPLzEScMvGL7wJisKLFTE55",
  "key36": "5sVEWift4d9NurAYwTgpotfmKVtfAfLYwCgDMPbiZhnB9J7S2aLD7bbkvmbixELeqZTxKv2wQSUkArbaMHSydKMz",
  "key37": "3LrJt5PWbg2oL5D1TkcEvrhGwpgin4AYrs931625MruXgvNNahRdnpTfaSA9mCZL4WjpvQ58agBUqJnBHY4yqzrc",
  "key38": "4cKCyke2fNTuh2KbuGGAvMU92ncNFeFRbXeAxMYr26HzmauYhbNf8KmWPcMwwQ388mh4CLcT7eZaK5Gz9tx3oR2R",
  "key39": "47CWKBVyt16EdetDPuT4A8FYo5KmjbektaSaziynVynoXjguCnbbm2NH7eiaiPrjN5sVQRzHXB5PHQVrKtQrtMRD",
  "key40": "YfuHvAasi2Gs4mFwR3SDah93EPADbSzLJ3qTmXtXzkfc1J1yauQpCrkuh6vFTnTGtjMpHfaj97nm1nXMzGB466W",
  "key41": "icDTeHoFw6AMZp2su8JCBpbbVSzWpFm9WCm9VZtgi5BfdCr8U8zn7Vf9u6eGdPvA72o9TJPpmLuL5YtPwkWz8Vr",
  "key42": "5oLX4WhjvDS9oxTphnWeFAFDjKa6ZoFaY5HrFiowA1QdQtzLidwhDMfcSuWHmNVdNaU7nc3NfBJuKMQQLaDbAYE9",
  "key43": "5T4aCLWZuaC3tUyr5iCogZM1vKK8grdyWzxdqjHjBQ2Ptt5hQairH6jevxiwHd67GQSPCazUvYC6rkzZ8raxq9JS",
  "key44": "4U72NpFiZKPR9J3agTeiAQpDcKsFAhFSKyTths3C4624A2RgSL92Upguna74tuB9oHrbfuK1R6bV7ZYQahkkTt4Z",
  "key45": "3oGArQi7rZAgXvVVKxCDNEzLUBetSbjmUzYukQ9LziLZae4ZRrcrY7p9RZZ3xNAetPtihtBeQRGqTSJTruvpmpoc"
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
