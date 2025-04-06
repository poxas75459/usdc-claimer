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
    "4F1gw2ERWw1seRYQcp6FxgXWxSn2y4LXYQgoKiM3p7KXoBUndpc12CpuCsCzN4Jojktir94mAvZAHvABdDXixVEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4edW6gukJdCtF3F8ohZiUY2yzA91hKfjf9W5Kd1uHExRsezXkQQYpWKcCgSt2KHgPJFmUUUW88TNZCrMaas3jm1Z",
  "key1": "4mcZyy3qhfUBhPneg7QeyKWDsMv48o2ksAd8TcaMsL8DATReEv9iJnxd3m1VvLvkPpSuNYUsp6WSVnnhNu3q4Dks",
  "key2": "r77E2YThC4d1RGW3PsLmCzEcKXf352rTZbnaXvbarzsxLBkbGabKCH8QkigmvaGkfUeMwChZbuGmaaW8D77yV9C",
  "key3": "3Ec7jyKnFFFBcSWY8v2YocJ6Djs3bYuA4UsP6DFK22eZ5mzZxxBk3xf6qAuWTw4D3SuuW612V5u2hm723LEZWgAE",
  "key4": "4do76KGDJ3Ha7XbvQKNQiwEAdq926yLjx6SEVh4FttA3obMWGZyXs32ZaJydj18xQVdudR5TsiYWjssbo1g6Ve8z",
  "key5": "PKK2SRmi8vf8jj16TKruWmWTN5Cku38qmjVXQauYWmRRWGb4r43TUXf4RqChbUrKQtYo4L6tPpw3SgpSFrTaTAR",
  "key6": "5fTNkbsNDQ5cje1aL2rxxf9dgY7SKbpHpHGtVpFyrZYUkRkahUfcR5chCXwegyaBUscXM3ZsgYcW1z8zSPabFMdM",
  "key7": "4zcvysPXoXYUSkRDujYZpiCkRexEkF7Pq6jj1TpfB15QVUdZDGsUyhB4B8gbRqtvkzjAjraeVozFtj5ajgUavS1G",
  "key8": "33YTHjWQwj6TY16jGF7nr9jBsTKxWgEecFZFkqZ63u3Sp4xC839hXGqTqukKz8rXPi2DJnLB6VrLCnXPPEgKysNA",
  "key9": "5wdqaSWpbjFYokegQ4J2bwXpvKpyaYZjJqFDUjia36gmfGBXi9pExW5FVFSYxP53AqV83FukvsQEJqYpLcAUShtZ",
  "key10": "cZEvLzocD28UqJSiZ7zAKjGeu8sxkbU3umYGSBZWdJiFETsCCxjA5o3XTPUpDzbCPSEafwTsGQcKYwM2hrC5yWn",
  "key11": "Fj3YBbqZ3iFxHV5xz5mYP2isWWfJXTX6YZhwr1tp37ch6PhcNdvg3SvGLUwXsTkSKmPdmXFoKZcwxTootT21nez",
  "key12": "51XfjtocBoGh424bFzqrZ24CsNYVtYmMSzw6BJM5cHBsKQthqsT5RCbCRbqSBm9SUh3X7XeHvzN445H34o2scLfh",
  "key13": "2rqPLjTJGY4kx6Mq245DnnZbhe28nBzQp66zsx4rt9zrTyrpQaD6R1NdTKVGgTTUyYNwDQH5KpkGkNVGPmEfuQWV",
  "key14": "WRJxVMZpGmRF2W1JCZ358RkwGthUEhaCT2AXvYr3czSWGhvQ1JjoWt1yaFDx1jRbdxoVxixdQU9xarDH3Go8Zat",
  "key15": "5BRqzYWS9pEupiSDMDQWjZaqM6DztJ9CamR495Gr3f2hRaSi2Bo7PgFN2ayVTvg95eVAJg1RL2TaRuMcoUJ6zE2C",
  "key16": "3HJEKUupzLF8k65kuRuBM3tuywbbreXtGFhkAtC8NYAPxSAnuFABV9ai9Z7cEdcnKr1vstwg879vrwReTnrHH51m",
  "key17": "5BxCS1M3J3UhwxrttqazRbe5m5wvJ5evGGuVeBu3HrCcCf63HreVtam5gix95FS5XNP1N6ip2B7N86eS1QkFggmp",
  "key18": "4z77zQ55ERtvb7VXva6uM5F6C9Eb7eSddqv8vWBv74A2i42JhSP14gLoNKkEU4QbaeVU9Bx19PkfRjxsad5sB1M8",
  "key19": "2bSSFjsCaUVvyst7H6WLV6zC5Wwgck4WcjFWusR1KMpK6gzzwGci34b1tdrtZAjm6YckbrsZ7u7iy7pgLZz3YyDM",
  "key20": "3HCnyTKkCPRK1z6dFwxk3jcpfYXEfsKo5KuvJUjaaJq6wfr9pnuhr2tQme6F9JFkMoVioJ9FDHjQZDMT5MjSQsNj",
  "key21": "23rmVTuQjzF7zMPBnsAywMqHnbSWFYYnogPS7kBHiuwHLPjLGqaajnSvp9TzXh8UZY4CyKdF7bG5xW5YpZbFkmzY",
  "key22": "4VxxL2iRaNqQXeduteLuHzGGt2AaxifuBN4fikATdog3jBLejL3XU69YSVVLeF7LLYcszQ5RPU3Haj1n7o5PQjKp",
  "key23": "3r7F4wBDSrmgMx2pkYrkZiTEzdk1aXYHvzsukxgrenF8pRGCayRtqoXBtXwjTPhG1PM2s7sEDY3sUsAcuoLFtwjg",
  "key24": "4waFLzxqMiU8FqtA7egoTAK4xBngpCdbG3mHnhgzxfhqouo245CG6w5J1nTdmZwduZww3dof1tC1W9e7cWNVpjJU",
  "key25": "4voFnqEhXaHUDVGCp7a2yeTiKPnRLBVF1pkTZS5HgyQXBSMtKvYpQvXmsGRixiZxjZLUG8k2rinsh6UG3QczX4hB",
  "key26": "3mBjqGET4fcTApG3gNL2Eau4eRPfbqD3iCFfESFceukkagwQoe2mRnrZnf5C7SDvXKa9qi2o8w1ALAK2jsymhpQA",
  "key27": "4y8red1DT42uWNJBbbCLwJEsJ8oru1Uj8aFK1H6GNcKuo7UYNeEErPpZgeuNTQwrG3YYKvtKK17XpyhRwpcV7Ny5",
  "key28": "jEFovfhi9wLNweSr1Z6KTd9i4C9JNxWn8FQNjYnuZjQaXF9ihTCG6onFktKwmqZXwmxjKo28Wm85DTmH5s6u4pS",
  "key29": "3MassQsjrKVVaK9SL1AXEu4tQC8vSdBe97Cmz8cBXLwf77h7KqqyCoxTYgjDuXsWWjQmbbnPyiAgtYsWG2W3VLUR",
  "key30": "2jcE62qSRtmN9GxSn1YZvwoHxFvoGpF4b57PGbeE4bTLgk7zYgTj9hXzdED5BSCZkWmKhttZeieLteBmH81AAQfh",
  "key31": "47BtjgiDJVghK81DK7qwZsVxaYuG6eATkGWgHKdywgaEwYGcribcjWBahNe4jTwbXCo1CJMVu1zZgraVQizBdzmH",
  "key32": "u25XAxTcyy2S7z3QQWRXJ4n6dfXChZ76irhjqCZiJPhugC7tUuXniA39Q9zsdEpcTZo6PKC41gYboRsWVXCA2Wm",
  "key33": "3JGuw48EkbRfUZu52dBLUENDLxNdL5Vt3BPFAFaN7LmTRcgaNRLGqox3r1zahhAVCUnq7j4Ck3DiMpRu7XbUobZS",
  "key34": "4NGL5ADC7irMRndi9X1UfwzBwpeoBk6wMmp6da2ueuMoye4wA4Zxav7s5j8g8YpHagSspnDD5BKd3G23fcwBEFcu",
  "key35": "32ckbCQB6KeVPcmtAJgmRuwGBptTPjz4C4Rt1VjtyTv6Bav6AWEAejzwKQsmDtunTVMKoK7xzcB5HCq8hf1gkGWm",
  "key36": "2mNVH8RW6Ym9XTtyd7r6R8qfkuTNxrr9PG3Qm3yBJHd9KSbiGNz6TCrNXPfCadswqeyy1FzafBKLj9sB8dNT7uV5",
  "key37": "4oREh3WQxm6rksV4iXpXeHLXhfqXZZmHcYqX8NF9d9gdozEpBwoZqZPc9BdMhs9hqf3RJZ498h185PV8jn1j1AVr",
  "key38": "2paJprk595JSMgebfincGKCn4vc2sNUdjPMfLKmEuMLYeRyHNxabBASYsq4b38K3cb6bpsvU3sfcnuNVsHYPU8BS",
  "key39": "2ACuYwZRg26ftdxDfFz8nUwubeWrdki6hsPCGwiXqsdk3429ahLNLn4mrZkiVB7z9drdYCBcMHgrEqrsf4sampgU"
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
