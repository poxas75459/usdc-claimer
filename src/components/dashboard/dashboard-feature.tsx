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
    "yn6rTD44rTWdfx5joiainJNcVDAraCYQbPxAoYg6YLtccNFV1yPQhSw1kARWNfguymiadmxwzr446BwvVJYas4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f5MrW68MN19e6ea6H3iW8oy4vV1oTGzFYqJup7msYPQvTYfTbeeUtvnZgctutAB9t6aYTZjRezZBqmUeS8a2ivz",
  "key1": "5LQXwdja3YQEcWpa7V8NnrEUsFuduaJkuvD3zQsEavN4wwaMZjsq85f55VZo38ybc1YFU23HyLPXoKmQhKeB1JRr",
  "key2": "5Swd5mXWADp3Lg2braJ3c5VHWY2VYvhoxgTwMgsZ5qxuz7Qn5oZHemic7bxrLzcAyYb4JJYegjD5V7cV99RfUC4W",
  "key3": "iCB53ebMCGAjtETUDwhywH3ewgqH2Dv4EjvuLjKszUBhvAbC9iwJJGLCAyGCzHd3aEEfifeieT9LNDQ9Q9qE17Q",
  "key4": "2Cd6bGMQeBHjjkUJRFgqnPnTPgTTg6uEs5Qt5GNHzLe7FNTuHscF282xar7c5LHPj2M3MXewADdnu2oC6R4QxRpV",
  "key5": "5CWBEVw54bELfwjd7yFKXS7jFio9wuYnN2ciiumeF5xrRoVB1hieE6LBc5GZXEwwQkNqMmrfizzQhvj9pzsrmRFH",
  "key6": "AmjBhnyBPg5JW4zB4mPJgewYDQQs9g99eBrJa6LWx9gK3j14dm9k99RitL9NXDAZTb9piYsf8TnYERBA1hkqoUQ",
  "key7": "5xQ7MkvLifGXYvZqYnu5q8Jm2aqher9JkuNRcwqrLobWLL6Y6bZ1JHFdn5Wkmartt8dBWDphFSyQkYsPn6TWz22K",
  "key8": "3ffjExcuGForuBrddxfm4ojpUeZAc2Mh4q88dBsWe1R9W3MZ9TH4gkjtpz2FtaQPeYQuUSzaRy11Yqo82awjpGdW",
  "key9": "49cor1E1ncGwcZjyDhBNeDEayziE6gjBypgJFBh64tpSoU4ho11zZ1p9U4ATQAPrZH9MsKFfpkmFMH7K5xvfbG4L",
  "key10": "3cP6ns8Vvv7wbeU9z6hDUV68Mb67fmusDjeZrrryiEtzGbgQKXz5Usz1vjEbA3HqD1Lwy8rQechVd4k9CeSDKzJw",
  "key11": "CXLMx9LFVvNmt9ruCm2HWMEyxSDuLai61WEwJSoQnBhdAnchyx1BrALjeEMjeMumHisJ28v9VxBvpJSL8V67EHa",
  "key12": "3uL1kMZ34B1z5Z6qu7vcxNG4xbRkXDNg7fXQ4nZmH7QeNixZN6XUJYkYbRigaXriuabqXKHr6vUFD29Y4JfC69Th",
  "key13": "612meN3pmqYV1JQKmFXkui51Y5VkFh5KjNXLdAk2j52ctkLLb8qUrwAQzzKwWmpnaRkhNDDo1x6ty1DB4o3WqRxP",
  "key14": "3Ag9GVpDQVZjHqmTHXbkgLkThiZx9GXPyZaA2KTLCWExUTFJQ8TP5H3i41j2jn6SyK9RdU6q1Sub3j5q9R3XxNYV",
  "key15": "3m8w3PbqkFNE81WMKZ7BiXQEBtZMTt5st6DU9qyg861rJJaQLJRaH1LQiB1C1npVofaoevexufpLUY3vThYt2V86",
  "key16": "fJqa93s7ktQqNSs9NjDkG6s5La4mxDKNyC5hXiBJVBvS2rBtSRT2wcwm781vZ8Nz62GurNCWS3KaP3RQ7cFcTmS",
  "key17": "4xbC1jE37vbxLHY2obEP9i73vSUBaGSNQmPrPHG7c9p35DwWoga4qEFT6UHrq1TvTAuTiuExtcuMAJVzH8JGjTfi",
  "key18": "4kgX9oAptiSH6WeLCcxm7Q3FxFTa1z9X1cJcgn6YbjNpnTPDdbxJjnZKttFBFFrPgqmkUoQyz79UdwTWYe1hHB22",
  "key19": "4n1jr5VuLHn9EGwDeYDxW9qHxUqoHPZN39ANT7waqYjaovtNPpda6n1grRqyYuPQkHSCV7i3tyyaVLSYhmqy4wHQ",
  "key20": "35Z6iZZGQAjv1sJWxC5DwCrW3yufutMZQjix6aH131JMt3FzCHYT53NykgXjoCirBX5fkUP4RqHRkULdWp1Y4Wnw",
  "key21": "5ah8EgJmYX3XWdBZZsaoFTte9Qpk5AvBNecT2j4BUCyX6XTngF81mg8EJt8ayQxnUp1dNZtH4n2prpwwW5AJRQQb",
  "key22": "NKXQDULgiwtjLeFBnUQzFKbVWgpXEAsLxzRTzq9uEdCmPDDGmzcjJQLdAYT2cEVJYC9eJJq9u5batP7dimQ4TH4",
  "key23": "2ANrFXbzxcVc53s1c3W2fqXGTRUxNAe7HLk8ZWd2XsY5YguVV7p7RXF5hM1Gc13bWE5Nv7RB1gYi6SXUm7AUpCTY",
  "key24": "4WvCBF1LkkAetoCtK17BK44NG4mQ8qgTAmkG1iTJsPTvck4Rnuw3cmEdDX5ahbPvk8VgXmGe1GatxFDrWpAtzXPo",
  "key25": "4KQqxvwXKJ5QMPSYefBhhd7LWtJ9gWZ9LFh4bCn4P3aeMgu8HSKrFH9ktxFa58xe6G7MzYERH52GPRqf7CRiEqpo",
  "key26": "2yzFDejG2Mkk1Hj9SE3u9RRRVDnq4g6jBMQ7gcAmfCQoFqmGScM4vesujDYYVzjMizNoA1nLqkbCUst1uhq12sC9",
  "key27": "Mua4t276xyTkVkHAnPrTevTpgwnqwYypVMCx1ttPmGXVmbqxHFcftkqbgmzJfbS1qrC7iL5GCeiygy5d1voA5xf",
  "key28": "5wJY8N6VH5qXU86ESeRz3yN2bkhXkEW9u1f7764s4fELaN334s8cehjx5dWSLjRrhyX4GdD25JZRgALwuk8NJGcu",
  "key29": "58KeRRh5bKNK1bTahp6VXQK9Bm7yhriNcBU6KJ4ov9WGXKvsKwNWXsc8eJUDHH1qMyab8TQkZNth2WM2Qy1oj4qi",
  "key30": "K66pbyusxgeLRXsrYxpRQgbrpKAMsYDefM9WFdZoayr4p4AXGrD9qs8DkZFyL4NES4RYf12RPHXUZdgvEacH2Ak",
  "key31": "3wiWrWvadhLnheneSR2LTB4Gp46vk2XNa2FeztRZNEV6cBgDtNDdDR4JiwmvNGX26291AdLZv6RuE2pf2caCtVKf",
  "key32": "1S9dFU1ningevdhjGDpz1Q6srnGJMhDdvAyaV7Yy33xSDTeNSWAJpRtZS2XEuXgqVA5ghVkDiVUs2aByWEQcCyD",
  "key33": "5jimkkoEg56zSYRbw5A6Z4F66vvFGNQjwrECsjokJ2o2Ufoee6xQHgv3zLxBacHyHARf92iSkoVB72t1sy5uKANi",
  "key34": "AoQVSG41saZKeqTZ9GizWhvaDXmYA7VP46dJJGh9KM3KJirVFFofrYxqGXpB1aW23Ne29xxRSZDdPKHxRDGpTWn",
  "key35": "5GzLMz4JF6QNNUfhmskDBchiLHWgqyHZ2QbnBK4XDwMu5XXn35HUGSSpAdWmFkFrW62T1Qq2tF3KtxQy3ZAz6mf3",
  "key36": "5dEh5BM8PazSEX5yK9HrzPuh2dSTvyn55kEu33Y64JT2WzWTCTPYiikNERh6vCRvnezSzYisJTg4gcpsYpKAKEbx",
  "key37": "URj9pEj3iARp7A8qsYReWL54jmYiaxiLN73db4MKWKaVgby15VCrRzb6rWxvYthmLPMiUGw4aCsrJpkyq4MtDJ8",
  "key38": "5effYqyQFmucikg9aCGuTHfKrGt75b2nN8WVosGX6vhLdcnaE6fVpzEcyzRNkDnWr5cru1A53Qd8nJDohfBEJv48",
  "key39": "5pDZKGtVEErAJHn9ShkdpPCMEftHXPBZ6rJmp9SGzRtUCs6mEiFK1CDoPVL8XUkXGDi6p1ZizEgi8g7SSeCAdiTy",
  "key40": "5cJ2pwxzvcoRR5NwuyTGJk8kMxDqoJqh42u9mi9VqCYLQCUTEfx8g2BUr4SDRUsXAgMNp6TMj7VM8NCavnHRnZZk",
  "key41": "5EpmxseHC58ieR4drxE5KE5E7VmTeAqUQ5WDcuGCZcoMAkxp64UzMfwFRTsjFubCrdbGX9GWY4vZ1CWVQ5mtRv2t",
  "key42": "55dqhC1RLtBLB9fwj4KKQimdXPgDkecL2jrF8EoGrSKpiWMzPjLENUacov4inxvedgt4cEzHxKze9zfibDwtV2Eo",
  "key43": "3CMxyd13K6oRt9pAh2fcTc32UjPuezvMGsZSTNdEvHzcEJBVS4E4VrwQqF3yomtD7cP7chGJQ79feXTQhh1uiZrB",
  "key44": "2xG4yqfhaEzSg3hq5ig5HhTcnvv9yWMszszGvBwd3CKMsHMb9fGhHYPk7S2NKJfs6yCbDn8YbSh2V3BnkyX8iWtp",
  "key45": "47bWKcyhieVMh3QzAHqCYjUQpiFkc2oMz8awDzExc7prUeND5qKuTkVGvvfDHV6f1e5Gas7tf3WkzAYpxNPSB5Kw"
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
