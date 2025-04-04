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
    "2cn7enjN5oV96ePhLhRULiKpTvkE9KyNjgBvfJj1hzWCwaXDFJsjECqAk8A5T9XEyAmwcQq2zea41eyqBdAWwYE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2McWAbCtWHS1MM7Ayi7eTK6CSighTXcXpPbyv9z4mP6QFNB8yjeujGg4YXMd3BRbw1WH8teXJ3ZePHresyyVBy8Z",
  "key1": "4QvWnBm8yZECPw7suis4kFp6TxBP8yG5fWXKnXr4bE3pj5yMXBT1kzCuNjUh8p1i1i5XcutTeqkCWmDenrkyYGvP",
  "key2": "W7nGsDQmvV8EL5wQjY2jw398826k6m3QNndDEGw1xfWeVUjDe7Fquowmtos7wcDRQobZkkxpmmJBYbDjD2BAgXM",
  "key3": "R3r3zNetK6yf5KUjxPC1NGudMQB3AkYn4SsjRSVd9qpCpWU6MmtovbnY85xXeh4bV5YHxrVsRfFY2zifnwecVmb",
  "key4": "4CG3Z9oUMCjJYrVPiWqntdWZ1LCFtvKbSrqZnuZM1NWJck6VER97bNvRRcFfYspAJe6pLnQnAMHmJgbxZi6GEtki",
  "key5": "m5UsXbYnPa7Y8srPpYmoMYrSjDmxHrfibEmvEcSXtpxVeWdWdy5iTAYJyQdEKByFviAQ1W3e2aR4oYHkrcpofns",
  "key6": "4otSxJ7fHtenpMXtT22iTqH6R432hTpqMecirpFRErLTEDJCgiYZKfi3HsTgvktykWDVWKaZudan2khRC8ZsDhAQ",
  "key7": "d1X1KuTyWVGSG9xvLuL1HGQfXRU8unLWgK6qrjd1rrF7AXZQwHXs7vPCtp7jXA1kfQdXKhJTuyKU4ACD441ryVE",
  "key8": "5tYFSuewPR6JCpBC8D5gEYTUaTXkF6kEY9us1aGiHjzh3UYwAfFW51LrmYYzstXhC3SvNj1JwD1Qg3foAfCEpFQM",
  "key9": "3CBSVii2yAZoQhtRf7Urknvu1kHxrryPmgKpU7ykSud9ZhVzB6hFYhExXuoDws9bb8jATnzGbowjQNmkTBYVY8fY",
  "key10": "2t6t5jW7pNxDPK5GKfExXL6byHhUPF3S9bMAPhcL3SdF6rJ2UyMB83fAXxCRTwXVgmVL2dHsb7ZS4w8JwWTYjomM",
  "key11": "2CSovbicNoaPymUp3rZY9SpVW1DVxUP3nm7Udx5cG33r2YD5UVYdXwnJ8F8Rb85VLW13vvA5EJd8cj8ijbDrau8J",
  "key12": "59zjciAPTjjW52nrcdzpGyCjiuBR2GvHsVo4eVGDYcrLQyQ3xWsHR8AkRx2pf269UiJvXzNCHojv2kX7BNzQc6KA",
  "key13": "41VNwDkDtb72LNtTQjuu7tBE5cJXgdiHAsTxzduY2jLuctfgBgKnxLUBJoFJLdh6YQKdFwLuseGCvvH5itiMLP7n",
  "key14": "d8CYrwEF5KJFJ13Vw2Q9fX8w3oPYVdD7ik9T3K9f1B62fTWdtci3EMViYa1RXYWcT53czQB5Swzm9QwojirMbN4",
  "key15": "2UhRTLhhpaoDjxAQgJhuZUmk2iNaqRmTSHT1FZ6BLiEYgbwsD2qLDypibTdcmf6kBACQkhA3KScfVjqA2EDJTyPK",
  "key16": "8geNxtMXKgLGAnhZkGRt57AaADLxtRxbcPjeAcL7GZN7EUeA46THNpEFGSwiUU7Z3i4FBweBr1ifnhBjcDBNyPw",
  "key17": "3HkgLBEV3Pw6RviU22vMQtjwMwRKgty1pr16LJnaeJKyhwJbABkpY9dxZifyeEkoKbnFaemKzm85kUsKfUeRdDJy",
  "key18": "3GvJR9JsgPHsG96RcN3aPidUyTwhqL2hX4TdWfxUNQpim8XfV42MnwQyyLG2amVmT2MWH1k5vhatCto19LqR661U",
  "key19": "5n9mnt9GyYB1sF9BAsZDTTgSnB1VzZ9JMu5AdKv4WjzHW2nY8vxqDsQKGQtc9mqBRMAyEbcDZVffSzkHiFphexhz",
  "key20": "5a6YvpAjBFLo6kbfraXkGrVXBzoAb9ptpqrfT6NU4pZfkHJwRwfPnVHvfwq7yagsSFGBdViwcWQwg2jnW7KheR1G",
  "key21": "3uiuduW4vaCYU3m8Me8jBFU4CnAdXMiNKcxKfhPy8FT7F85i3tfyqFEfiXKojn5Vb3WLzDYBz5GDqVcduCCHgZDu",
  "key22": "261UqdzEyi2cMUMiNVHqT7gWTAqQjaydAj874jSiCKAwLavbY4DTEE8CKvpNu2RASSupUTGmQDcohun7HjQzL6k2",
  "key23": "3vdNjmVr3sxwxnb2SC7pfzjgk26xuTz1wNSD2xMknJkYRrXFLuhpcittH6AcRS529fbubsP7vYeLEWiSgJGU6HzP",
  "key24": "2qjjq1MQYKXQ7Z5b5uT2GpZEWFvvy3TSwfVUVBPyi3UwXoMhiCh86pDi6toJVEnzNWzBVnaWyLeBiphV8B4pP9cF",
  "key25": "5bugXfxKbqMu83Wv3i8yN83bFK4zN3Q95zRieJWd14hEqjdoNvgGsLF6GUXJVkt8vJUKC9W8vxy5Z7NxPPTNhVYj",
  "key26": "2yy7XHS7Q5n7uymHCRPzYMVqJfZJM9qw8djUq26JHVgktdXvmDrRvToL2jjSnxG4h5JTv9WQxadeNrccs2uMr6ns",
  "key27": "5Yx5ytqWrFarj87qiV9TCwuCbLoN1XrFC3JCn9Jsb62jhkjHqHeDzSLXbAUXr23jYignEYiPfs6kLAjBWqgPbYLR",
  "key28": "48Mzk85sGPmdoRjAA9PWN1aTkXCJUPccc6w4gYdfyaXLBkYPqj8Sec54Y229dbCirXgbZRvyzhX3b4mRGE4PVA7N",
  "key29": "4ohoHZeLwkUs9RraGSv7vqEBJtyLG5pUJ1uPAmFBETZtpy3na8Qkxs8NjuhGR6mnWMjAcHuUrFaMQdKujfZn5kd3",
  "key30": "3j9AHXfWrWf4M4Cpiitw2YegSXKGjYmkQVxn3sSUkbkca7Cep9C5GGzmayuaU1DKcWR11yknyRjuDppZKSoWKGDi",
  "key31": "5mtu3LidFVwZHwRPN9BiENN9CqoFXkVVgP6egQuUs73WMX6QXaoEJoVEbeme3GfwjPaZhQxosaJUgcKJRkKLXqvr",
  "key32": "cRaNxjVVDa2MzefXuFdazhvRoVPuHGsA1w1gLb5EXuP3KRh1sBiVBpseTM5mKQeZ76gCVP5sSYgu66Kq9JHseRe",
  "key33": "KqWc3cPueAbBZDWxR3uWGwXeDVQRJ2zEoUwSk6utZ9R3gbh8Vn292HrTrWzZUah9T8HZwVwxxJ2TbmpRY1mo4Xc",
  "key34": "2qCZdQxFQSxvn1eMmsh81oS5VN53sauUZa6erPvWEA8nj8MVXLVLLKGLoLFyJEnzpxGmLARusHnBNc6CtbYPpym6",
  "key35": "2NS3FrimNQyMtFT23siZXMYypyCxZhiP8pedJiXWU2NzY23KTrqj9tAVMcdXDdZnp1diPjHsNu6UUiqkDty5yVif",
  "key36": "2Vjrzjzw326UnJsRhvJUZUR2jSMacrwbComU1aTTY5Pnj49ssgfNhW3GvEomaF18TWiMXZ4fQWhuZFtjwuTCSXjj",
  "key37": "4R55XUiXz2xzvnFpEGJedjNCWxA1g76u5qz4AY7LuacqBVCFmiwLmAqHi7C6NuUeS8YxyrKiQhTQ84NutiaBSKGW",
  "key38": "2HfFaAZRihg7SwTCg5UHe4WkmRjyK4yD2A4UQ7jNg9veWcnZJM65uuWULBQY4KjdiwB2r9bMfTcM45BPh54rco1R",
  "key39": "twnQqaDmj1o4PDx4NoACi8UR6rPW5tj6njbhszHqdwv6ebCNMxMQ911A59nAeWF9f4vn4KwooswQA2Rairom8XH",
  "key40": "37nTZctEbnfdkC4itKUNqWzurpVugx4hR9yPDgUveGzDHwiEFgU168UKFxmiSE7LUMWDvbzK2LrFYKjap8F9vbgg",
  "key41": "RJyQH9RZp5qrQMn6dfEEvsY7WXnCqNBznx1HCqWpE9zXgLhZURGWfj38Xeyypr2GB9tcemo1bd44F8xDAAdY3jM",
  "key42": "2adNWHFZL67K7swXxq6hsEpL9pLR1NGpcN7EBX3Rmg1xu8Q72b2zybDcf1hZaB8gSaSKxCyuc9F5pENGPfLuNm3J",
  "key43": "3K3iNovymrS9d8NNcj39TkDuTFePdX5ybzhpH2gx1HR842EyHg7H8fTrhvXhFwdM2zbjePBBhzGnCZx2LETsFK9S",
  "key44": "4T4BpdrAx8KJEWATN3es3KddXJcMoDuvVchRjY5QD6kDJauhYqZpCZzuUzB4ygtrchZKY88RZPs9E9SLyXKQG2ax",
  "key45": "5JaeStbe8xufFA7vJ3GsoWx2orcQpSNZkM2LoMC7jKECayDJZBhinLKdSB9zjiPW25BMzH1RAKSHfcwihu1kMaSF",
  "key46": "4ASaNbsdV72oWCc1etEAXV7qbwM5wcm5DyBY7yfjaYqx66w46eRP8fdLL5xiuVMDsreNoPZzKxY7hpmLR1YGwnYW",
  "key47": "2kQDaPiEHfUEZ4EuQbGAoyygGsjsaxz9LBiAHGBpdD5UrhtBLMJYDG4fbMv8xs5fjLAi6GK7gqtcPjqqgfKk7f9a",
  "key48": "5tfkpsZnxDNV4dyD6gKVoExRKXaoK7kdoa81LjixzjHUnRDx9s62WeDWc1QpzzWBxr7D67ntpfK3VeFqjHp2Ud9a"
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
