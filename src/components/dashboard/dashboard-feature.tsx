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
    "LtYcDZugZ8QXnNzeQDfKi21C22PYcW8U5NBcg2ea5NRivCzzC2bhrEZZEUDgs7y7iejvKo9toGzmp3wxnSp3R1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oQWfF9ya393Lz2gBxh47mK7GJ9WDfvpUKRKHvDeKdrKcuno2eAJrN94gwYVVdgu3t42YfanP8Q8W3Mp5qmiSWJf",
  "key1": "2LBbXfy9R9fs3sygbrge73N31Yc7i86fCdzkmsB4wPVRt3GU4wAH2AynAX9NoP7L6xijTTjrgLggeemDrZJs4vdp",
  "key2": "4R1xJC7ExoP9qH2dFS1A8XdNUYo6Ev3Tbse1J4c4NdbyVUzLygg4TS3wfng1nbGhMcEPveQWDWFPUDvw7A3cXze4",
  "key3": "MaUiscfbN9V4xTTHCk7G7ufvinUqditmwq8oDHjBuWH4umksBKcuEFWMRP8WZsEnp8AyHCbuTQZfDw4jrd6ucPn",
  "key4": "2fCdxsi73kCw7LtWBYWhUpqQDjR2XEuFFvwt1b3E6Gxdn8rhoScLUuh1omnanWQYeRqXsM1uPvXMJ4RsAaiU3SDo",
  "key5": "4sQfF4jtyq1tNkcqJ4FsnD7X3PrCRh65SridTzvof1FHQiXFvBei4To1QwMHR8pM69WjgwGtiFFzGE5NGHD6mTae",
  "key6": "4EyhZQK2xyExykYdp7Jm9oERWE7E2Cib7BobPRt125Hn5DF4ecQz51fW3vQdMTLXhtW7wHHimhq4D3SbfxuCZW76",
  "key7": "2HG6AeqzX3qyvZ4k2MTE5XPZdG1bZ33xdgfaAu39XHuv2aaM8eSYY93Zsuwske18yt8RTGZKLzQUMWC5jZ6LMwuE",
  "key8": "583UNdgzDkPnDXyG7B9zfC85m5UDjUCTBv8PhoqXWj5jg8ZkjfcNXK1DeAtjF2zs3kVfJrCQQ6i4CRb1cfxe3AYU",
  "key9": "3bUvDofrqoVEPVNuvQrAXngv2UKMoWMmQpbZ6bP6ojYktSjhDqW3YEidtZwN2KkebStSVkBpRwKXAWJxVFYuWt21",
  "key10": "Y2mVfxhfvJs6FFgeDbpvQCbt6v5xGU93DGaf61FWQe2LK325f5hgK76YncayC8fDZC4nDEdhFuWsXMgZQJjFBz6",
  "key11": "wipumMaLywAR9kvbsfHbXbaFdLx5SLXNcKfCTkRzfK1nAeaQ4Xi8xxe4gWN34hwYEMAQQ9EpkydLquMNathTd1H",
  "key12": "5WP4bHceVjGciXLoWwkgPsrGYYkXQ7yvf2ASU61LuZ33KbZ9mMdfKNFmsk2wWxpsvbysPbw3P5b5bYDerUP2VhHc",
  "key13": "kmHCnYecWbsBTPxSiyJCCYTyRyB6hBG4ehY6oJVtBUmzVqd3WdwHz8qaYoMyVTgpuHT4CVpkBPqxaxNURDqaodk",
  "key14": "2F5DW1HaranjTTHRJnjzCktUJ8Whp2n6U7kXC2WTppa6ByXPxgxPQqCb9b9GA2QofWX1ZX6SQxdrgnZ3mkbtwMkG",
  "key15": "2ofgCxwmszGwsQ5SCfNdnz15MHz5kJxwCDNgQjKfYhoB6C1oDQrv3HBvmEEYm4WefNP5QrFLPAUqHnUYGFt6jVed",
  "key16": "kTrrpN41jFtfaQAGCWVqu7CBWhdKnDRyci2spo5HNNA6oWqzHRJ5dWLQbQ6iRow1H31b2XRMYqJhJw7gtugsgUm",
  "key17": "gcAcw9p6aiGDdRwDpHLubGV4AgpkXv7Cf9qyYK2e4LkMycv597KWVKNcf5F1Mmzrxp55WFGmoTpQ3df9VKoWkj2",
  "key18": "5prRZo1Vjd9pmQvtvxVRtThxaTRtEqL9QWhe2DSA9PQCfLHzFEK21XxGR17sh5M1ZqA9arQ8vchYwjdyGMAM1srP",
  "key19": "59FTWCsjTFLFCRNTPigWiJtKhNfacew8FzybunU8voxVrcehuRCsJqa2VokAjMwfeU8nwNbbiPyXp9GnX8rC8gRk",
  "key20": "5DyMdVzA35i1rTsJHbSiQJjvvDmneeyArBp4kuV15H4Ppi91Wo7hrX9cvQZwnWMJMNGm3kywJNNaAunub6HdZFBn",
  "key21": "4xTK25CvNoFX9MmzoyEGLqJSGWk9BQaey7Z1mvZemAfj2S3ZJQXJdGcd8edYyirKMrRh8Zut5EHrRcGYuy6aUvMe",
  "key22": "QYvzx19kk5ag3Ewr3wkyd7jrHAUwyaKjYvGN9z8h7ksxnoQ6fcGRDQmnsZqmEv5cbgjwyjnwij7ocdzMfLt8aoa",
  "key23": "3DQGdKsWD418v59CnkYuj4hNSc7WhxoBW2pSBUQ1eioMTVdhhBQ6rAC9iow35c7Lqz9mK3DPMJpTCvkP1WMrXjsF",
  "key24": "aBk9ewgDAKTPEq5dvYw2ime81yt6MGKpx1X6qkj3GzjjwDJyce2LEZs1L6vs2GqHNkwxwrsTswbTxVCYP9gJh9q",
  "key25": "2cGF9gH3eHeazkSSswsgwv2cNUKe5JmBgoT6kxdt7GMkAdMx3uJJGC83egBxK3NnMRTU1cDqxhnM3AhksbRNM3US",
  "key26": "5XMKc99UxdjY12my7sDt5W9mC9BDCgodfmPfVs1MCEKAsB6jbp5zNv8V59QsRwoJyLuwLwhjKT9CuttdNUCexsB1",
  "key27": "2beqJm8WPnqZEqm1HsgA7PKsDYG2jwvcytZKeAFiWTiYnnn2ggFPqCnAWB32ugMvDc95ZXKaY9hxps8PyuErKYtQ",
  "key28": "59zjppLWZxSPWpAhxx5ZdmzK1G18pt2S3USLGkzAjELfKm4Rv5RyiNsndEN1qFU8UHYyzobKSNiGNCfKMWqpHUSE",
  "key29": "4f92UWZaA8ocyVNqhcBxJLPVz8gTDX9yj8v9GDLLXp24BCvwb6FEzE423YGnn44ooL1rUM5hV4jDSFGSwp4HcHtx",
  "key30": "2rKGtDUjLHKRQvugYZgBpKHNMjAJfEziQ5JYETrG5daJ873evYzsfD2k2CBea7KyHQnW1zjLTPa6d5JfCV1DjxhB",
  "key31": "3VcBm8bZaE5co9nQwFBcmHon7NDuM74e3hgaV28HRspWzswqGUYBhnJWiodrZf7nikP1miwm9SjMZiKM3vsh1ntA",
  "key32": "5kArMwf4R9tKy1GmskEPJxKGe4cbY1HDzWTBGurKweUCgGKf2os9vh3RrppCGtBQA3VK7DrPNbMSvCVguafzEmJR",
  "key33": "xCLMqdvpK2N1ZHyJdB8DTg4pCdc6oYXGrH6J2hSD7odb2PsxUodwyGVYR6roP9Go5Fs2pJfDXUKbsMvm8bA6CGq",
  "key34": "4eGoVXtjHvcHMLc9dEpKMVyruq6Mm9bvCyWW94hamQSVy5GMMDfZGnTzvSwSpKLfpVc3uMSohhvp2ozgwN2JVSic",
  "key35": "4Y8UGPkb3pFmXYBaCc7qRxX85vPfqNDLwR5wTGrLHB6voyqkV6ipMvRs59RuLpadp7GAHomnJ33CvWLm3y5fAXVv",
  "key36": "5ygZ7ha2gwgbNDR9geUBjWgkA1mo1Jh2bnqMFPMS5xTjRyz3oyVwMikMg6wmQTM8WwF2E2QLA6Y7NWCssFVaFXcn",
  "key37": "3Re5mfCsz7s9TXt9j36XNcMF6cYoLZYGQzRZfSLdP89QqoAXrVUZmJ9nhxmJHkhwtt6i5acmo8a5V1bU6FSAg3DH",
  "key38": "2FqLoFxMU9s2Y6YVpPf32mgmfUHyAi1zY43V8Jukvbnkb7Hf8vJzwnt8HAeRMpsGHtoSg251mH3ucWEeQeP6z11s",
  "key39": "2aZJjpVhnxYuMNeDN24Ype2qxNDkKZipfFsoUvBXqLekQ5kjrfEf6zNPSagFMMQE1TZodUea6rFP7wxx394YTSeW",
  "key40": "5G1BuRzxurbevPKHoCtc7ikLRAWKdG4kJKF2TrhQThSMrGMnRmPwVsHpf4YHpgtz4o4xQPsr6uiVfZw7ZyxiTvMT",
  "key41": "4KGVihRfnpGhQdjKDpRUVtLna5ZRtFTkE188jmucHKJf9jTYdCweQkwVVGx1vbjSDqLX1ogDzQTvUzYpWMkrEDJr",
  "key42": "31N4XB3ijUdkCt6YCF8qmbgcgF7giJX1Y4jFjK99sRnTLKF35ZeDnD3nfXFvB6xz764SHozFNsCyWfor1R5aKtaL",
  "key43": "4FA3Rx9VqqyxGCGL5hMk8RtYib8hrz3repB6edCwafHzu8AJt79L874yjcs5Yg43ccfxWWbTijZ8X7keLXvwoLed",
  "key44": "2AoC9kgzQjc82jR9isKGYgy9VPf7igWSCEPW2gyEAiH6jfAGj3N2F6ioBxNT7cdcf9eGXifV2JLKfU8ckmfUJpim"
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
