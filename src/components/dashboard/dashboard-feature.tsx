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
    "354xKpJiF3kA3dJWsAHjJTBUMGi4fjs22Z8Ceuzy5UpX6cFMxALzPDMMr9woPALewe1md821HY4rHBu2iCCAh8WU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46eGDT9RsM7ND7WTBPEHK2KnKb6zZq1dDVapYe1q6Jqo1yvAg4yJEJJTGxzRPWSb8nTrRGzarpwntVy1bhzYKqpR",
  "key1": "4Nr15EbgD2At7ciEV4VuDGMaLVo4bFj42P9LU5TFx9po9oFNgWP5QaTVkKD7TreHeqLMdzYFsBLahXkXyMPzKtcw",
  "key2": "5geb9Mg8X6hwV3dMESEWTJmZw63fXrNfMkufAL93LGreixWH6Wo1Wdp58X4i3opUhY6ut2qV22dd1ykUZxHaRQV8",
  "key3": "VZwswqscXVNn4QSz2F4aphqUHGQi5W6s2bW8UgqkMMFUXoEKWPp9KysCDcjDZ1zwaxqHUtXfyWup3KR1MN7hCTH",
  "key4": "xLpjJpp3wUxzt3TQo6VZ95Fh3hbQ17yQwmC8ypfXH8gRVWPno953hUrWfwG2s7kA214vutgmLgipghH5cux34oU",
  "key5": "4Xb1e379MgQXZyTZ8xofkVZDaXCufRNwh93qELBrLaJsuQ5MHvtRrcE2jVUYL9LVxgasYvBavxHEx7qpKx28nnAY",
  "key6": "2km1sYkDgp5iYcyE93qE9hHZdbdN7JzzMM1spy5rTvPux6UrsFJiuNCTitW8UZ62TuNadiRcH6CBgxkgzbuBBytd",
  "key7": "5TFuBjRFQc4Muudx1DJbYYXnmnSe8cyXr3dgoRABsDvQdRADWjHd1jeumdeRHr9LFNVZmYHebVskca8mFbpZ7dDU",
  "key8": "5riiaCXmbAVE5Q2ehv3FcaJ4YhQRVH13PnPXqMXduBoUWnDQdX3vvBFcFnGqLQRPtdQziW2Lce7XN6LTbvHHCCdg",
  "key9": "SZdBHAahdNUKHvskFSt1WerDz3pvbjZ3pHfHpqPuWLQ9MANJ6vKr5rmsdaH4p3kMXCWJLvaLDu6LwvWVRGdWk1o",
  "key10": "2p7iLpXV6gxzS6TjHJgJgiDkFUooBp5See7UZLyXmNc3EHTCrDexZ5fQPLAUNHY4cmcUNJs1DkR3Dj6QFstWfjUn",
  "key11": "3KgMgBT9zY3LBumFNs4i9ca9k3tAiX3HF3svp11t386c3QQv3asETsxap5PyRrbqQptJ9XYzNTXDHkixkSCFQMVg",
  "key12": "4miL7LuMvLZ1raE2YzeftBhRBGw7EpDQy9gs82qchJVqfy4o2okn6iWDBUpTEyEC2fpquexFeaRtam9UX8Appq3m",
  "key13": "2mEQkZoCMF3iNEgekUrgqSrRRsoiPUi6jFKXTTd4N3bwLP653ee44HRWVyUAfRTTpN2CVGLwGphZjAw5dXR5ok7X",
  "key14": "3uE5Q9Perd8PZeLcnwMTTfNJ1auZtFpXabHQyZ9cfEEEyQB8VAzajhjtL8QNnuBCQsjBwjfymj9XnqqSqo1wuGQU",
  "key15": "txMwCNg2dYHebPvKRDCTFT98cic1v6D7M8M68MQAq7YedAqRVRLsdxj912gAKN1VmNkkMTXmdfmKZ7EtyqwJkNo",
  "key16": "2KvpBw61G53RQe4cTQfC3jLA6JRXWR7GCQCEsKVk59eSNtb54BNkBvfuaWQvVa3dsitMVVW6qMAsiSUcv2DwroL2",
  "key17": "2hCocCtJvy7zkkRVu5E85kbFDBvB9SPbC5ZQnKq2P6ErwjVFWPcaLgPY7dBKKdmyfW3CMZRjSrDQg6H9ia3SE96A",
  "key18": "5nSYjwF9F7xxry7GQ14VVv14kF5so7EJRMfDECh49ini3JmqGdBbh8o2AKrfCKBRtemGo5N6P1CtZWn2HTdA1g3G",
  "key19": "5GydggzxwDYG2X1JBQrT23VQngRKmgAgj6UAEEZJZ61BdYVwMfzHYJHikk2K4L3Rq8RH4AUvVAhxnqnyBbvQ3hCN",
  "key20": "4T6ky2R7cRkqjaCAc9dSibSiuzfPj4px144DzKj37H4XCP5HXvSzUHQaTT888wwkSpJiT2aWQMZPZ3ejeQigw7U1",
  "key21": "2EonVymeaNkKV3Pc1YQE9EUPEzRa9EXKAgJK6eSo7XygkTva2afvp7YAjqMT3ykKT48YhaPDkfKdN3hPooz4Wkuk",
  "key22": "2zgDL7mhzqg7mQyJfuPuW6yKV6vMbMFox5zLN7iRAg2T4dwqrQEw4wCaM5EomR215SqMLxnL2URdeTMkVWFGE4st",
  "key23": "59uZY5WQT3RWeCAjQ8kmyMhdXV1dFVXTPFnJxijinLs9FWfncphtVZucioKRvT1E2fforfNQDAK3CXdD2rm7idt3",
  "key24": "3DmqNLdvFUyws2R7vxCsqdKCC7D7W25un4m4vgK8vVTgxwasikLYejVKg6KmCL757XMX99j6UVcZd5qxuJH2dUyh",
  "key25": "5cS9UEWHznGUmo949N5kfcPmFBqJU8DWijt4kL855iBrDt6XggnhtmA1q9RexVYhw34EuR7R7dXijFwbNa5XWFyM",
  "key26": "3hWwNoUbZHkuuDm7sU2VGAixfmzgkqSvLJQdFMk6Mg1yVda2p2rYLLjau9RKGMh47ccbVf43CtLbzqQsgvTQcyQW",
  "key27": "4RWzwnUuiSPVYPqrvggNrwJnGhop4TquyCsdss8AyFHEmpyMBMCQ9M14zMzmHMdKdrJnHfxdBu7MbCJYKkaLxnz6",
  "key28": "2hp3Xwp9FFXNFUAAbua48EqM8daGRiV3qHju9LacU9RxqbUax6uZfAkk5W7jHzbJVBkUyZDqgvCpBni9pNW5aMKa",
  "key29": "kLoFC7Hc45Xma4HZbeaqw1wKAQyPjqkUiGkNqp5zoWtNop7Q6pgJRzRhemRd17x81t4SPAEjuGk1qAjkpTXptio",
  "key30": "2sHVe8m9uDbFCAYiez5Q3Rv5Yf4xwsi47AmwLTC5DBcPP6CPYwZH8vw8oBq2DvAySmqLhbKwZQPTAbroYqgAEHc6",
  "key31": "3Ke9nMXMdYa87oG9NkGPTNsFfGaMuebUbkAJgRooibHCC7fUsWpdvjtVTXpzTSaSGqF9mVvzeQ7XrSuoU4gc6hCp",
  "key32": "3iibamTMrU1WsvzD3nitNrJ4pFGSt7bTEoN3k88hJAqLELbJz4uKKyH43Ssu677PViGRfL6ovyuDPcko9aJ5t9dF",
  "key33": "4Lv36tWcHvV7aKpWmtTGsMMwG3R5TfbTR6XAebNWESaWeGgCqFcQMpaibK2YTPjQhtiKS79rhQauo3FfMAUUXUmh",
  "key34": "28yvTLrJ9QK5ctKiezVPSVn8As2HC6fyKGjF3ZPrzwamCC9qxvL5xs95EGyP4sQDiVZ2gtmW348qjXYbhzDE75fS",
  "key35": "4hTQmM5VCzfntJ5FxufKrfcCy11KmA7RpkyoDNA5fiBGR65AK7TEaAcsWcEEWFv11T8LVK8hYhCwbewr67P9k1oh",
  "key36": "3xkCEGGtHctPdoNEJUYZhBAYxWZpPHeAaB51TYBYuXsEMtcMRRaNu5NK9A7nGk6EqLKmv7NYpee1VcEjutNS6jdW",
  "key37": "XsjthT8i9wfDN1f7mKUixeDZehSvKe4ZD9Fift6nwZixSu7Akxt3mDVDrYWZbriBgoG9qp7rFd83d4yumMTuzh8",
  "key38": "2rEK6XDQzEUgVusVKZ3Be9q7ceJ75KtFGSYA3Wrevpk2SSfTZrbwQZeMkvtRzUPqbb6voMGYAvb8uTiBsQLzcnKs",
  "key39": "3TedWCSV5zuWVRqsf67tqWskYN14ycbUGzzHanSfxEzyoRyuCZhLwsJf3iYqJmpjCiSLVGr5AWsK31kzpWtYwLNN",
  "key40": "fzJCikYyrk2djqYnPutQpSJFHsojD4URcak97mc1LaqzhNZJhYyPKGsfcAmrr2RhKiozLLtVBziUhrsRn5kBkvM",
  "key41": "GRgd4g668RV4gQCn1Yo5po51KcvUXvycHE3Cbr9mW3GdTfi2dySM4A58yBwxKcmRS7Tfu6guhGWJgMgVXMBaHvP",
  "key42": "4JWRH8DPXXBdHXmaPHwZGQMqQLmKNB5HrRPbrBgdcrmxtZzpzQYLEigjbaE2YqgUmfFMZrBCMop3MYcAZ7pGv5bZ",
  "key43": "3kMSMjj8eJR1VjUxnDuqErVdWYfCzUsdZnQFgMxxaKYPesmqxvL3wkx7phKtA8apHJDq1fS1aTZRkmdyEz5eeNTV",
  "key44": "2ji3VsVvpjK2k9ztKDnL1J6kvkpzMjYiqZHW222pbkFTQYPiB2om3XLkJpBxpBH77QUJ3NKnmBDfMknipoRCrCAY"
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
