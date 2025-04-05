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
    "9ePE8Ja5QwaQntE4HnUoHdatwRpd8PCKAVHxj7dYpPAuLWVDt647qgxvuofEhJAyZa7gwtAoXunxmNqwAqFT7BQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VzBgrdhmmFgWjUQqhvM3jwZB1HWJNtrGtpouvFFPCBEUfcrM5ery18FxiwMSBb2Nu7fWTS7WSVKEfJBwpc7GdNj",
  "key1": "2fixX8QQyuLLStjVqMb3UMgc1jiDLHLL5rFZEdySzbirry4W8Gu7dPL3qLau2LnQu1QMcCoBH1fzckRhj6H7Q6wV",
  "key2": "2XtTXpht8qiTkYfQDQcWNLRBNiAdkuRpogVNkuBqbHyf2uWSGNBnXf119y7mYGCtJyAGJGNr1Njt6hEhPbjiCBVJ",
  "key3": "5G4SNvF4nJRhQj7wcmfBbhKS2zh4rA5n6U32L1zn2sDrkjFMq5hYKf3x241Fbb8bKEoXukAC97s2NfTXLiba2yHL",
  "key4": "3FkTaEpop7uRZd8iY2r9bpNY7hALvWGZRimLegMBqhR9GbyJyD5hCp2jpKx2eVGcV6uNzaD23GaM7ZE8rMCkysuz",
  "key5": "4fadhDQs9SnTaxKdyrWvH59DwbBmB9CeD3a8p2tPdd6S2dgn68aNjDr3sMRoNP937pCgVnPLKYe7BrBZ14gDJiXc",
  "key6": "Pwb1DUkwsUY4Q29uRtmfpFAzjDsn9A6tP2fTi4KMsqbhG9u7WMpRKgV9AkHKFhns9MBWpjJ7BmRfaKz3pCTv4Et",
  "key7": "3SYzuuLJ33jp9eKDhhphiCkYP9XPor7tjMSHvtD5hwKZXRdNb5JbQfq5Ec6ZqRJCTC7QrEDjrzsepchFfFZtkSfb",
  "key8": "5ovWBdJSLTGoNbjhMeNyMH1dq5tqmYaQFQBWg4b27h4K1dogBXmn2h4TG7YmEHvjLtPxb5KGYoeNkmi46PH8os7L",
  "key9": "32CRR8XJ5V5W8YzkPExPUdte7UYJzQwAMtDqLFYNhTPAi3SkqfBmnSQ5c4FyoCs57rD4VftDwk1HLfT9Ep5Y4ya",
  "key10": "43Pc941gjT5f1JgRs44Dz9tPB9wnshrXYEMNHh8DFvQ8xfDAwpxed9f9LGLsenpJkFBJ4ZV2CpvvSM8usU242UaE",
  "key11": "4Qx69GDFz8cfNb3rYVcS9jT2RdSvU2X8qiqhFYMDWCB7fe79eEuogvhh8K2AAc71qoCyh5JdRGwcBHnHdH5V3VWd",
  "key12": "5AGJcpQAno3Fzk2psgvn3mwG4VRUMSbwcM7UvGz4wvwqGbfb3VTE2dyDweSH52xN4JQCwrFDckUcEf4TNu4VFCUQ",
  "key13": "5d971j37JLNEzHnnpTkMwnycCoQHppNjkPJM9Y6kArBANGBT4BVHAJdhACAAUzd2P3TVaLYamS8jFRKNFCZDkmCv",
  "key14": "2EVav4LxnwEoEySnqzWmR3nnG1NznLS2g3conME55ymb3uv6bPJMhbdPDCmAEX2WfhY6yUAGVd7wD683RsDcuMjo",
  "key15": "4UNn2stTdBtqQaF9Km1aMgLyJQvp9VU3Zpw3rXhqXXXi1ZHdcDWPFub3t94Y7TejEnaDh7ncSNpSY9mxDMgASf97",
  "key16": "5Rv5omcJ37Mv5oGdMop9c4N4bKpncqGkPRZf8TkwRCUk64HfZH1iQ5B4AyJVtvthGj1zvn5MKTLWR3RG7pXroF6D",
  "key17": "3mMmWZ3RhBDCz254VKGAQ8U1knPwLgo3VRDTr39F6K6JJLgQecrLGCTtXQA9Y3Pza4Tgb4QYuLgBUEasBVBq6Kpo",
  "key18": "3JrACtomQ86jWzB5KkqfgRuXuoeCRvfkUQQJSVDQHDjPtMH3kho1yTQeQJFzwnKB9mBks66FnWNrswYiL2461Jdr",
  "key19": "2wDVvAu8FPbaWsPnuB8DyCctv9P8y64ruuw6aWS628p5AZ9nG4wWNH86rpsBVTw9138v7xuUL2EKFgmsX2sZno5q",
  "key20": "5Q45a7BeQ5cfdns2ud7MRk9NnRstER4TTDCPJjAGvKEhW34MpZH1JsV2kjbLt16sr5rDtdD1sQE3H31JLAhZx9Hv",
  "key21": "iY8kLykm2Ee5qMEetkAeuy5hZJsHMmDRinYoqLEbypfyAqA3VVgcC31bDdyXYVcjZFTBTm8YitULP8zGn4zQz19",
  "key22": "PDqz1rkyUGpZmyykGau9rwRMkeFsggQrd5nxKJ4U8Njc9Xoq61CVs3LDLAQeczkL5gGyUEoGRyE6R2H1traTHcv",
  "key23": "65Aimts1ZA1AKuNhcBvfxaNe3Z44EQ7d7ij39XK2rLc6CajtAS76xESf1JGsidB75ML58DyoDmWStKuBJgnXT9HN",
  "key24": "2B6ScgXJrwnakBT6rUiRj4eMUXQW7MFzHvKC4fZZEbW7sSCH3GuZhUWE958oKKtNjJ6YAzrTH1VMxQhrGJMJszAM",
  "key25": "5Ae45pbYDH7fyYqx7yJbjixDugL5rc6cAKtwbmZxMKxyVq4XMcKKCNFBMD5GvboKfJzyU6Kd5ghnVDc8VKBBcT3h",
  "key26": "2xyBRM3FpMPxU5FN84DAZh2YGybV7xQFDrohDZeHmq2P9nFg5JZSg9TKfRQAThy2CohuugZLuHiCKev3dFanZd2A",
  "key27": "EpgpDwR4HMzFrt9PmT5i5duGftNxFGDqWNp4ikAAB7dKvbqS3fZ9LcJbn4PkzbNGRh9Z2SczHhuqLsCgTKBbkLD",
  "key28": "2c9PRcfSCt2mxtm9b9CxhJdknA9ygmZQ2BZFpmYMxby9aJkvZsebCb3FJMX8mPdtk9jSf3Lr8gvvpH5bA6tZLwm4",
  "key29": "23K4NrNdaDWp9BPCLcCXdCybo9YbhZLq9qzdYMdzabyERkh5Jyi4SJh71H2L9nsVAfDJpG2Yt1HNC4uNJdRw91uH",
  "key30": "32T2PVib4UZy62mWWtXpo6Rdh9bCgs1e2frThtv7Gb549gD1Ugc4uKZXjc1VbikesWBoBqcvu2Hra32LMDwc2NDQ",
  "key31": "4GznSTMeuKC1z4oy6cxBRW88ebBKr4Lux8XUKvmWNb7Vr9GahxPK1Sj47xcp8me8QqWJLnmxTcZE6NNA7DBPHdfp",
  "key32": "4AtZA8Z6ubkCX4n52sy9spoS46gH97Sqyk38RuM3mE56nHHR7G27s58MYcf8m1NjM1BejHgnybAttxWkvubuwrH6",
  "key33": "dacHBCxE453Jmf4WngqnoedkZMMQ9Wc92PRSdsHGcmbqLEmhxHWnT2segCVfpf5uQjcJMykefFUiToH3vrHKTFK",
  "key34": "3ePHSFZA1CqobBsWqjfqmpgv3QfrMXLTp8eknAVpFZ7Vgg62Kggo26D7JN4icGNxv9FXmXgRvKmsuF8eoAP9A5D8",
  "key35": "5BNxag4PrB8zmt5JwakwuXMFC92kuiQtrygqB5kruns4a4RLr6Lx5msUtrvsxTBkpDX7TtaMH3PqtJGEE21HkA5p",
  "key36": "4xXnBemqwWHwKjktNzUdc2Sq2KXt1KvNjzhCFQ3eYcuYS9aQWeJb6Z7ohECkTKxBaESYAEJ6qv1jSZbu8B34yg91",
  "key37": "2RADZWxXcaHWU5BoaBvvEKybWwfu63gUuu6qftURsQeaJsz5xb9ZoSAyRM9eGz5gWC59i1NwWcjmisArPDsA2dHu",
  "key38": "5MdLXAzwVFZCrnwG6qKAYZnBDT9GbH1zjqxn1h3AHjbK5EKJ4UPPmMvBZSrkX8WXAJbpofcAnzEbR8oPUCB2JxMc",
  "key39": "2npSzGPLNBhcSHeYwC8oa5socE6ATn2qrXEkLcTgryDxT1HjoZkLazseyoWyQZDh6C6MbVbmEPjWrKC6BqAaHSBG",
  "key40": "3Gvb99bLxSHneUf2TDXvBe3Rk3PoXYPHhjW1uH515hUpZk4FokYhJF83dVAp3QNrnx1gXcTvGkPs78QFehWZRzHP",
  "key41": "13FNGzh1v9GcxSu2fQbsvS1fWAvTTKcmEhf4BDMXswmQVWBV3AkvTfhvoot7zKx3RPYt3V8A83yMZULeUbYM6MW",
  "key42": "2ptg5G2fWNmZwQRNxnKGBu5zV9J4JRgo38zSDodLYWALt4eFsosfr9BCoHcGjGQqk5cmvDwSW67KuzLzCR2xWMrv",
  "key43": "2Q2LZSwSAT3TDtb6Hn8fYZrQD42Kf23T8EHSjRv5DmAPJVLNf9ou4off3xAANyMDk4rrJRhX6UBDSjswWeE1V7Xo",
  "key44": "2xroxJxJBFZHi3Yu1GcePHJJEpERTWdC8ro85qEJYvfeyxQ7GaXiUwCYWj3DES6uiT6Xycb5ryE7fQVz7TQayEoC",
  "key45": "5DAx7dMshwzQT4eU6DDgiSVdinr7cguG9y61QDg2r2JvD9UXDfWQkRoQGE7cTpRsimLgbhzha5iyfKcgVEdEsTnH",
  "key46": "2Fo8u9U74ZFny8SNw5Z6b9pxdJrmtHRsBXKJTgYUz8JNmoDuFqS6hUeMyG5XNBGFz8vKwnTikyjEkPPQpk3mKpp4",
  "key47": "5eTXXUzeL4DQjPsW5tHtzbiW26VXohVmgbba95ffsMeTBJUnNec4Tgn9a3oLnNZFgJcAjfLnAgkYVcaUdKnr25qz",
  "key48": "1oJVD7n17GtXfoH7SGQTWSnXJLsuDqAiZZnTVbYyeFbQAPTyPpCyCz1ZsNPpy7mqcMPRAc8UkuqTDCW5rbkKTys"
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
