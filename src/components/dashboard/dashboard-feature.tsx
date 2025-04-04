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
    "5Pnrv4khF4TRN5D46GPHXuA8kHwbc6ca8q2VuhYPz7VVnsmpdukY5m5b4xodivLNDQJhWMgpLrHm7enNDGiv4PeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JYFvph64U2AMqiShcgNJVRUypZrAfRuGzYajkK4UYWoRxGstc6dLPvuQb3xs3rhCpcAMKqhMHHHv3ntfrkxDfyu",
  "key1": "2f5USZcQYTJhRkjdGtQKLah7X2dRUNxHkLJC5Y8AFAJUcVzfycGnrVDRAo15fBavx5GVh9ZGXEndg3dmRnhd4f7R",
  "key2": "2iLvDMY6p6npm5AFawp6adHUDQEEgTRtT6D4TsXv9fT7EHERCn88wi3319Nmmt7gTtMn7dRrPdgfruEseYbuc9Ys",
  "key3": "3Hk5Rigfi2CDmWdiPLntxcVkGWEuuB4TkiwKzBYPGse8aquKm5bSnr1NL7n89mxUAG2c1UpDKsmKN26xDSxiufGV",
  "key4": "4dQsDf7m753LjJQXzUJebk1CVzAFeaPRNa9M36PaEAxbJt1iTupmDj61RvLUjnL7KthiXFgC7GfKhy5GqiF43U8x",
  "key5": "x5PZQPcXBtj3JHLoLUn3gwj25yv3DHxSCLNyw5i95fpiQHA1LAHArcyz4i2RcYcy8oKfeE1qhBjJB9yrH65tRaT",
  "key6": "97cyqp8ZwoEJfFqUP6MdEB8ARgKC4QAwepirBybfmXjyzQAhLEFb6Bu8sK93uifBsZkN9kFrBfDRCcnMivN5Gi1",
  "key7": "3zCXVFTp6QS78m97vdgMjUBMF6SYDcMYwYYrGSBNFpnJKk6mHJawKDnBZ7PavCQk6bSz5VqEBrw769goD5Dbe9MX",
  "key8": "w6cheWwDrwuN47f9A72g2zMkVeLdYQgMssEqWuTx2kofrJUx9TXnyn3gVaRhvRoXu5mxdbNLCEEzEruQhocHj9Z",
  "key9": "rvvr51FcP6AYRUpxMfjLyMziTzkU6Qn4hAZX2ABDfZhACXm31w4Hn41aGZvB4RwEbBf4BcBFnFmPK4J1LpnDdeo",
  "key10": "5ePiTxgSucgLkWbKY7MHk3nMYY2w6taXDH37at7iXgpdvrATAEFqwyMYBFRyPqwZM5UJDhB2YYRBWq4sL8WiY3fa",
  "key11": "2VoLDXddbzsvUDFSDhCTxCAVewV4D7z4845thHCP1h4tre8JH1TW1pD2x9wcGqaHDcbBPQvyGYXC5dGDfFs7pRT1",
  "key12": "3RVM89XhTSXMCwx4jM5C3vAVeqGWCYNwGNqBUxbHwPFu3WEN5wwkMNHSAiSoPyadL3SGhaYvecExWYTrzM9kh2Xq",
  "key13": "5AEr5uhCkjvtSKk6qMjddEZmD88LPMxEdpdsbv11Dk5zWEKnTDsi9b4MC97NYxhDwXoJfw1ZoZvr7MSJNpEzEuXW",
  "key14": "iaydQDxSK9vquRu82tGHATvB5bbjbYz8QfGWHGcAPkk4JjcbrVNpdsuaxC7Anow6HLh1qr9WvSyo9g1j5FfRdWh",
  "key15": "27s9f4mFg27ckSVHtFdPWY5EZSEqTYRpNZxRZNuZPQAvSRhAYYkuwkMPiy3cm4ga8wjGUiZMfnZ3qAWx888tWdJB",
  "key16": "M7sQoPjDUSheWPhzTpbxz74gAJ4gGBdLhN26Ytuchgq5JGHMNAzZvh4KquNe4V8sPCifmSCoFSMrKApWyR4XZum",
  "key17": "P5ADYkgnhFBgNSTr1XbkXy2hwMphWY72Pjzo83f7rtgcEeCPJorLQQ6GRKfd22ea9fzmwFoBjpRjz6StzaAwHFS",
  "key18": "VLFNoDi3jm24ogCWuu9nJJwQooGHueCPCaGsmbfmPtv94YsiHYx7PZ19wf5MbhgNsgwqruzQfNQvSghWsVdQj3r",
  "key19": "58ofQ4vg2mdjJjUGGK8AUbqjWFZVfG6eMZ9BmytY4weEvHB7jBDcbqZRMZ3QXQLq75eKGtoWWWrRM54sdwm37iZz",
  "key20": "wVDFvf3DUS9EueDQtdhsV8XXJma2e8XmTsbwFb1i67SKktw1Wd1RwL637Gb31CQ4YWcTicpgmtfUaLFKLm5GGP8",
  "key21": "3PunSpcHtGiTY7RxHFo6V71Kggcpwb1B4ZsizXnjBQKpU9YVjMisMBBFJGypxcxhR68qtKyFAjC79gfSVwVhTxGo",
  "key22": "5HREfRmoy8nhxZPmKFM9dxy6ndJPnRD9oQXS1Y28QCJaik1t2zpVuPS6Bs9vMCVneWWTbUCKAp2qAdd8HVz3dnWz",
  "key23": "SkxxwYTzrtKpx6n2jqsRhXvD7SCpzko17CCaDubPwkVvNcenVbKUST4bZk2avXPQWAjmq1foj6uNkJLbCWdMgcY",
  "key24": "33H7HmFcvhLhgHYA7UuNCHMxxgxdjJkSiWphia2gWznpkQQvCQmFjeRxd78wdAShJWhAyevW9V7Mh4br11dsXV4W",
  "key25": "3jbBPu3a6k9sfr6HfzbxXTd7qTYm6Etjbi7oP7665kkrNCc8zifiPcWYscg4HVu6apAxXizZcHLCGCpPfzdMafTJ",
  "key26": "4zi5m3eFAVqqnUuSj9Cetyak7cNUJNDxrFgM8sj7MQbuF6h9mXLN3ojo8NX9vmC1jvPtY8PEBsVp9R87QV8XZfr4",
  "key27": "itZdWZKnszDdAJ8kJyVYud51ySWtQXbEDBtAoVC54vNa4Tn34Kr5dmN1nBLBSqcgwxh5A7ZSjj3zqDWLUjHXf3r",
  "key28": "58EDRVmDDjmffwmYQBRK7G4kKdXdyA97f5Ke8hxarVGCiyQCehH4weXNYVmHBYHtUZQYR8ZigoLTqiDAg3RiZNYK",
  "key29": "5Zun8XYRpKr9wUTibGE4qYCFojvpMijYttBYrdnG9qAq1TUAeeUqGP3NRdKm3r8W7aE2TXEGquA6Sjad3qtMuyAZ",
  "key30": "tKVPYYhqR6P61WopfSx2HE5mcYEmhm4y6b7stuHHWFZ1XBTp4RgiqfohTftCkKHdxQ1u4kLMa7HJTxAY7m4cVTw",
  "key31": "4hudiAmuMgZk6yh34zNrzaaiPJguCYEh5bPSRzfDaVbENAuos6difmthHh5HEeHmWQjiRGW66BW94KSnvVNqNDuE",
  "key32": "5EwhcFV1FUqcrgNWAJ4rZfnncu4TgteiNi8VK2m6tQcmMcM1k2C616WmPnfKGNECGavZGLbd7BaKLn1hMyCKzWAX",
  "key33": "58ex6BduvNku8BphYomuFLxKtjkDy1xU6H3Bz37NozncbuZwVV2eQYjN7fheVzK2bqNmU1UfapQf5EdHR6xfLowx",
  "key34": "q3yRGNCMFtShcU7Gsi9GmhSfnHVeCggSBK17smChSJUe6czGPT5ityXzJpd2kCZkcu8dGSuUyr81JcgRnBnVkct",
  "key35": "57BmJ82EnBZGj9SkX8FYsPRGifXtQR2k9LK9QymmMgHDyPgfk4mr3rBhRHXotTRT6MvKL4q2ogR6gcRUUkHLxwex",
  "key36": "2qXfMfuFLFQ6RzKQCrbqQuLeykQCTXybcPUZhG7macqn52QvFeAfAXT6a55p1goZJQgLT6fFqqhWeSmryAJWGt7D",
  "key37": "5MUBKS8u6XHzf4FUhChy7ctJHCgcgi5JHNzosnfDqj6T232SLP7bAm7Uq9WJVm7Lud9yR5MKBqFN4bYVdKnTGEcy",
  "key38": "28GxeMjana6k4d87YdwCnCJz8q7XeQeAghSBE2RAmJX1X1HKU2S9Lbn6vA3fXu4fBxMY1GjqyW94g9j5RGQTMdwa",
  "key39": "3z7aw9c1Mh3A599pUAQYZrEgM4bUiUz2pfUSSmfWRiiTcaaWEB5potfnhkgbkZ1WVm57viSwXRq867VgzENCieSa",
  "key40": "46YK5TVxBQ9v8JYFQd3ftq1Z7QkuS38DBERRPNiV2B7VoeqGWDTxwZXnPaqvAuwRCqVqk77n5MTxjRzAw3MicCH1",
  "key41": "5UoyDg1gSrgf1orznHEQypt7JRV2ScjbYmepvnBKR9YQnSRpEoamGVA2KGsvuEAudvvH5L3XjtUfXATJ3xhYzLX",
  "key42": "SRzTGG7rXBoV9NBnFfabbVYnnfiRSNs7FcpK51wWXXp8ku13z4sxk3L8fL1U3N3SKN3qkb6aihpwz2ascb3gYaE",
  "key43": "2nWDUQS3u2Vv12K84MjFEdAKvNZ472GUAVAtfGeAHCnNuUThWSTcFtXHdGG2RdYLtTg4Qf2TuzDEc6zVvccr4vYt",
  "key44": "Ngwk8KC3LNTXWiLNFfPNMHijA3a2Wr5qbEgauuzmdpzM48Dj5cDPeFSrpXf6U8qCgRBnN5zjo4omPahPqH1Mems",
  "key45": "454hxHPVxCFME9E1DsPHaM4y5HG1cAVu5m1TiH21R5XRtTwEvKz73Ws6Z364mNQkgunc2K2nVCzGe8jfT239tZet",
  "key46": "4bfSkgcDM76RKKurJkVUjYUKCCBryEJsAKbd1D5ZqihT5Y8WM1Sis1WpJjZhcVRA5H5LwBE1tRK7isiXAA4q47to",
  "key47": "2xNGDhPpSscEMdcPK8CiKApfTdEQD6gvH2BtPN6sMVmoV73whWH9Lt22cpvGSjoLfDhFqgkpcqiXiswquj7WteC"
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
