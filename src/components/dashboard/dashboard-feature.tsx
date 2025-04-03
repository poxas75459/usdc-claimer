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
    "3EZxgKiDwzk7BqS98pp27isHhEmy3MRTKeqmRZa5w1VbeXEaRkfprbsmWdRp7cP77ubbUwUp5f8G2fjgvJQGCepG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Jhn1hdSo36LvAnQesQbWbx8aupJyPYndVoRBhFhGN8aoLSBscAa13a2VnN9YBSeZLGFa6yR5Po9eYQtsJTxPgs",
  "key1": "4uZkLiTXKx2usXMFoxzx9aY6ePETgjv8Rczr3xhn36mgMBio4i3ebHauRPQ7qoZnTh9Si8hUHJpRrJX1EbuxJvgU",
  "key2": "2J1s1iuK6ZuRUM7Q5XHFbXxWj9rMYCqawvKJ4GwG7duJ9Z7eL9jMTPoHjdT11v2jvywgE4MR6oLAVwSzyHdfAttb",
  "key3": "31Bwm3XnqjmTPocjc8tUEwUwsuTGKFUhUSmtYqEi6sJVU1ibLa89HQeSc63uEBEbHpYuMRSUAiK34K1NC2Chxxuf",
  "key4": "3tkWfGfJopb2QaMnWtvszQkeoS4yUd1wj9jw4MBJeZzkMLcooexQsH98C8o8uoEwfDLrvegF1qLXXiQNMsatwYMH",
  "key5": "4fsEZ1mr2H2fpR3XZAXAA4peWNqSK9TkZovPFyp98faBa1FfiZYJJzzNuA79LXbJNotKmVQ2ASmrK2VNNXFo3ayH",
  "key6": "2yEgQjTTFvWaitLpiyEwcnPpRBcZGvozi3hzLb9LQjSzw7y3MacJ7AS4xjiCrPWZAz9JAtkPe8a79SD1a3D7Ypg9",
  "key7": "KaaZGRTSr5xRpiVPYvU84Ao3JVVQbZW1fbhV5xk1z3yHoDnpGaBUvvMEdiLC2nX9FRe8WQCApqaUmWqLFS5SY1S",
  "key8": "64Cd2YXej9sqmsh1Vn92JKB2zYZLKN9GwqfsXPzbAMMf9Lc3CEVMsWKAvPdfc4NgMP3UFkBWoVMUW26dMw48twRz",
  "key9": "4UwE8jtGkj1pPniTuzbtjdfD8BExhBBTaFxfR5bjGtXSUhdLXFB3aozCMeF7CqW9yUZVedRLz9EgfRDHxKLpP7Aq",
  "key10": "2Kh3dR4sSr11ekcm33dEXmQkhyWGoBG27g3kC2TFtxyjauMkJycyj5gJBDmh2naby2taNvpXctn713ifFeycMmaa",
  "key11": "4PvLMYseBZdcJE1bFRg8cFDGxbxTdft6NV5NWYrjHFJgkJxDMasB3dP7gm4h6gky2GS1KkZuxL8uTevBqB9aSSwP",
  "key12": "46ZxyY4Yz7U6V2PU6P4uwvNkE4RzgkSMDtu8ZfajYfESUCQuRGgHqRuaECRvVYDGnwZYQw5eBbGyRwzpaQrM2kex",
  "key13": "7qiXWmyQboeoceLQsMn5y3XtMbuDiBXXejuAWYSS31KHCShCoTwzVM7GEKkYVvXQKBaoQ9QCCHXziqFkMP4a6iB",
  "key14": "kCXJnhZLyGBJu8YxvuvgRyEc5xhsneMJz5ehS1VWgKHq7XBrTupp5qTeQkMQh1LgeYceMhuLzhHxGuxGywfqyFS",
  "key15": "4UCzexi5HifXC6cb8roGFjwgkMH3RERWSvVyDM9tNhZ7M8MwhuH6S9BBNLvTYBu6MFSFY2GyQMmjKKC5YvpKVB3q",
  "key16": "MKggSdh63GumZa1QRryzyFV52AnPMMyDGEw67qt6v31dV6j5TQc7py3FM1DWXVWhZeQpHmo5Xueh8xMc8NYBUXs",
  "key17": "iUUNWn4GrtmvZipGp8ka9BpiPp8QNiryccWFXGytBUbRZg1oo4cSKgSJTZM6YqA53Dyoy4XxJKubMxf2uVwdoT2",
  "key18": "42WtfjxPJaSdL49sHudHp5aDxVQuzZ7i1eQxX466FviMjqKJo7K2YFGVrKwBdnXrhPkLwgQePDKUTtdbhfaZUQRW",
  "key19": "5BKaftereAYM78EXUKu3ws1nPTyQaVVhZ6SAGBMZkJGXMvX9Dxe89irYxmqDCrzFcgPSKcRWQMNpv3R8Ciygv4Ux",
  "key20": "5EpzD8Frcj37iJeSW4ZNgpWRUs4XWjU56iHAPFKFsBuM6ujaanWQm3MyMaofpsyJHahjEKsH51pE1pzhA7VJ11xo",
  "key21": "4KVDWJKBHXfvq44LKX42Ka2PVJ8T8m8y9X68QAb1pMq4NregEigPNBX7wzKP2hfPeteNwGgiPMRQqpfpnA78WwVc",
  "key22": "38Ln5Mj6vVicttssZTiuVJd71TeokHHwBEUE6xuTz41D5cY2nrfAme5QK7o9SeS9XqaVfHQA7DvRVVgxouBVQp7s",
  "key23": "3MT3c4MwosrBbdFsuqLpMiXFyx3EP3bPgd1e89xh1NaKwJwYBYmPr2urVcrjNEwN47PYaXq9a5VecWRBwbAdU428",
  "key24": "3Rnkz1urGyBtnZGHrs8DpFdBDbsrbVvCFjzRpisrJvxyLCrLM27UxyR11EV7gUja4F8Q1KhHLTLtJ8ireBuNGtTP",
  "key25": "4rfk7sJwEThrYczGESkNNxA6w8UVN5oqUNPb7W7RevNmcPjKh5nhtnfRcbkqrTTnWLACx1RbSqNxmUNYjFEXaHjw",
  "key26": "aKvVnNSGwtByQDuF9PYnMQRdPxW2RGe6VB1ni4tWV4aNvcD4LcNFMES2uuwQDJYGpAmPpPdPeoDA61HsnS9zbz4",
  "key27": "QhSnvtsznPPo2TM3Tz4nnLJ2i7QBwqYT4VeBfcZBGG8N6WGqtuC58aBzC268piXeBzzuBNnczvT4BUCMFsb6F9b",
  "key28": "woXTHrAp11EZoVAVGw8A74GFMsWRUxoFVopCkVHWMdmDp8CAKx1ptS5SXXfGu7aryVhPi774nfBjUraxjv7Xj8k",
  "key29": "3g8Jii6df7BFtEZY3NcULbWmcSLCAsZ44BPeoK67TCNXu4A7ePUneWtmX4CgT9wJRtMvrpmPoJBkz4kF5yCN6PPF",
  "key30": "3RWgFpdtowHK4XjF2Lij5pdH5ckadofTBamu6yEPvf5ythfzAPpwM394sjrt1YyUxzD1i8XuQCV6RL2YDoV5UgGS",
  "key31": "3rKBPAmWZGbwteEvNDiqr8PG5U1TZZ7H6qWWQxNNSQCy99M4gUNGpnko6fHrzwqTe3rNWPLB11kgFVHx8gZdQLyw",
  "key32": "4oo19kFjJq99YvRak9z7FNGejYVseRSkmzf5YfNjeGrNLzUS5EY7yx9L6zzXx1BzWHPjFbHt5eanrpAbfvgiGNad",
  "key33": "3bhFwEdcvZK6hPzofK2yiaoYEEa37f8dmxnyA62GiXNv1raU9EGADeJ6hdT9kYXm8Et8ePNZEP1Gf3Rud6APmCu6",
  "key34": "wkpHbeoAbJZ5m3m8i99MQti8SzHyJENCAsQN3C2ghmh8h2xKhH3FKMAf8uYqV892TgNxW37B3bdjeUvBUL3Gb73",
  "key35": "5CC3yvSt39twsQGNoQkNgy4241cwfy1Jo5NK2BejB6WDPgw97cesd3P89WJFXjdZvsqkk9ypSRetHphYetPwZTyr",
  "key36": "tpRxfmD8yWrV9Sreju4MN29biwJYFSPwTMX7XnHHTWaDiu6mJKqrbcW8aYysgnAV5cbDupqWiDpKYJMhAzwjRcS",
  "key37": "4GjcyjAEfhFEBW84xwc7gcHgXN3BYjZ8TusjyfDjou5HwJX7PYaT2thjVTmr9M7HXpePMpdfkYRjGvFV6XqRt2eF",
  "key38": "2z6AFQf4FeYoJ64s3nqT4Gt2tPLxMi2LSu1iMu7Lwu8efrY1pEFtYDsp15BfzZFnWd1KhxMj36i3bogEkGQM4PaH",
  "key39": "3UJcCpFih6vsd9c22hye93RdhCW3bGvBztDQwPuQdFA3pSsi56TrE5PSoJmwbr4tZsBWTnqGrxAtExL6njTravwB",
  "key40": "39Y7HHxJXpBnzVDKuhk7urHawpH7LinYLfpF2ipVLTwjboe1JcXZuMtWZJiXGQ4qKZeHA5Bca4oCJUZjZkVt8d9b",
  "key41": "29kTS3PoWbW4wGUySUqdke16r19FDTGiSxvTx6FoPdWJRLaFkT9RVFxWc2qnK6e4DmGCKL9jK1RpAmzV17sE83zB",
  "key42": "3H7XoJDAwVSvrwXvMzSsEB36agg9SDKf7xccCZHDwELdTRCRq5ULUMxDDpQt7ougAdRHbybQEeneifVYppPaYU3g"
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
