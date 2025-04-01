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
    "4dk56DdecnaZVJ8jqfstUqJuq9wRh5hxUgvJxSWuFH8o4JKo8MJJWXcanwsfNsMzw23egAZ71jrd5SRhWiMHeB9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jiMFtuAU6zBFVcFUhacfz2YuyS6aWe5UjajwoV27afey8bpPLLQvYGjoEKVN8SGX6MKRVEmodRc1tf7uwNion6v",
  "key1": "9egpp4gnWbuscksu19qpnRErhyPvaNwCrD2jhr5X3DemfLVMPM8DsG7d4StE9ky2wxDuKgVg1wpzS4T2diyDe88",
  "key2": "5V8REv7JyMzcGCd4GUwsyvLF2b3Qs4ANHKPRPMaQyvNnqoCpPZxfmq4UUJoZMtwSUZYBBNgPSnBWEganDsf4pP1d",
  "key3": "61HuG7NZi3gcZfbQxN7dUQzA8VrxwAKMuv4LPZtXB9sGrUyG7hnq3NNcJ2PinKAe9R57DsxXUoKni8aoTnHVzU3N",
  "key4": "3Ch9z95m3CNCJcqxyzH2969BahBCscdtRVC8rZrSn67s3XY5S2djhzPB3ABC5ooFtUbnE3DUYhiXLCTwfew7QaAp",
  "key5": "3W28eGa2WRBM1vhQ4GmoZMpQYwSWPRxDGdGVgUzaDGCGBk8or82QVjbeHz6CyWAK3hPDXvcUVf8HjhXvMiPdxGgo",
  "key6": "5vAkaCK9othX7DNKvCv83KjjiC2HH8FtRGyfnMyf2ZWUwkgZPXHAUF1zj4ea96VrSf9v4LMDfdSY1rmhs4T7MKi5",
  "key7": "2FzB55MT2aDCmBeRmannjUtUZ5HhnAG1nS4HRZhFHbuoZT3EXwr9S63xMRD6QxUk1PVAePjDtyxzNjc24yjBRXXt",
  "key8": "37SBotxeJZsrqWSrwx5pQcQTQfeqSQv2XGaQ9SeDE6PJAaiu7AGV262T1RNp2SpYe5qAmJFKZ4uDqJbzLGcwZ4to",
  "key9": "2nZUoxxYe9xF7QcywZY6kJ38uh6rMQ7rhu5jF5tsYdCqU3KuK6JiE8w21zf61aWkMe6PqntZFbDuSruLR1Jb63nQ",
  "key10": "4gBrFXytBbe4R6eUABQ4NPD4WCdwBq2dHfAzwvM1rBQi3mhYiLNhrrBpiSAWLdbem2nQojV7JSZtpg2xrgGo9aGg",
  "key11": "4metrRhU2SPjoh7HW4ftrdzqMJyUTuj43P2ghoFagj8iiStQ3eFpXFBr92N7PXxe2WbNvBmRHxFRG6uipzWH5PPB",
  "key12": "324iTAPThFraYHrFR1RUUBSMtkw1ZfLzDEXX4VbfjfGPLokRftE2Bam7HzCmgr6qxKF6JZGMV88YW5amLCxBjbzJ",
  "key13": "3NrudHG5A6j8EoY4h6PPoE1YEi6aRcNtkaPwSq7H4d88eJQ2qAP1DfXGVF6QPQiwXTNjcmdwYFJrdgXWpxnVK1MZ",
  "key14": "LUJJg3dBbGKQYxQ9Wy7bik3E9qmFmHbvZykqACxUgmunNUSc4aEPaaMrqCMyyGLQ6JpR298zHFKHrZcrRKQQkMy",
  "key15": "5U1uyz4Z5aGLhAAH2nn2FhqH41QheQzAJCxuJZ41jzwiVL4vx5ijqrUuUqT5tVdUXWc1hFSLX1f1UybySdesqYaj",
  "key16": "2xxFQ1ZPQG9R5VaU2vhKdnnQ2oF6jcwYprcppN16iXRnec67HtZg7G3Ln3UBmFtizb9LfzW8p8P9FC25bHPbm6rq",
  "key17": "4TRvLpfqp5o6eioTfyXRirvwEACcbZLLd7gn9GtdzkhQtCxBpDTN6c24PPAtnbUtTzm1W52sJZauj59oLsMpLWCV",
  "key18": "4r3pkdk6vwdd1fV2gZ1ZJWSZW9QUeGSiwqdXZ5dcPbnfcxfLfcUqtVxAHTo9SkuNXbKig9DNw7BhTaEAZDHvDFVk",
  "key19": "4cRmfTSLex22uFKr9Ci6ytQUo4Cgj9XynzfrwuJVHbrdVeqdbMep9uzccqfepBHBKSfyFdTCUxJptk6ZGXAYZ3bU",
  "key20": "4a9gNCwZm6mmfD64K87TC4R76y5psN7WFxEnKi5ZMQC79a87nvMNvgTChfmTYWPUrkVS8YZrNgt31hrtisxyPvNj",
  "key21": "2EZyY4FagHYM7doM6SwPegEAmUQhgPKVpM5RWjEcULwR6AwPF235EQGLMdZ4ySn1XLu6QA2MexzcQxjJTmudnvrS",
  "key22": "65j2ydcuVP4R8V7NHGBbNUcJowyFMQtNboWziD3Qz5pCfRhLty3wDhgnDt76hvPXrZrXRJAxAqRfQSmR43qmjQVd",
  "key23": "2TebHz3bKv9YzVvC1gBU64ndV2BahXdyBtg24BEMBCd7nwfVRScFifQwk8eCJNYm2dHXv7bF5mind2Sw9gX7aAc4",
  "key24": "2WGjJ7HREdQzpwKBkbz6JTQLutZ6VBUpFE4kiHW3dYdt8hds4kxJypaYUVusSUSjq3aKLqrVnd6MNse19Gg9gG5L",
  "key25": "4f3yAEe1qLmBem1HtBgRAGRjNQKyEkkxD2r8LqcAUZiUJ6mgKVuv7rQYkJGR7L57KJf7p7PDXqgDRwaiTAjH8tYv",
  "key26": "48g9dCFdg98rbDXzFFMQJqbMWi8agHwQi6F1q9EEQWpLqLZ8W1af1X8dpw8shmQrgANJaWxy7ghSh4J5235QgRcJ",
  "key27": "34qqMu7znKy5EGrxYoE5fkUawwBxLKvAN13NNniUzTScLHsdQRGnZjor2APq8SuwJisxPPdQcGyAQhKnC53TiK6u",
  "key28": "3ibE8yU9iGxskDe8p2fPyJWBo7Kp1dWbbaoW2t3dND3QPf2ctY6p6aATfEvRw5ApCqYV41tujk4AL8bYpTrmWC46",
  "key29": "2QVYAW6oBw7XoLHbnqqGUzTgwYZwTVJbLDdRc56wQ5Dpxve7EUw3R2Rrz9BpmSCautZRLCUbVaYxDsjfeBC8eLs7",
  "key30": "31FqmGjMmZG6oeEFZvvrftMPVvxDEUSQjMTrfES8aukDfobHaAZPfmBZbPCn2FDWkqwEsnY9yiWcPDbLMYuuX4F1",
  "key31": "4kgAuTe3KLgmaWU5acpaW4Ex6puKDx3qzcYa7PopvcHPrErg2CvyPY9njaBPpFjMJYQudq1mEbp7JT7DKGPYaQ7S",
  "key32": "27tiRyE7XRxuKusauLg1ziRVfaM2LAgZfTXoUQxzDf4CCFzPQDaagZYutrVT9W6aqr1DwYzaxGXLdBGZ9bWGf6Nd",
  "key33": "2veu73MAHFqSeMQGYFTuouMWJ88C2p254L7W5zAbZ4WPrdn4wwfTMajVnALvuCVQdtp6w7b3Hs6yrTa1hXjkSpsS",
  "key34": "zPWmgb4ibn4spMdpQ9RnUUR857Lx2UT5NkL46QqHRxYzixxVTjpyT9Zfh6TyFNaXoPsEKqidrPdtvgqPBJ4sztD",
  "key35": "3ZtAX47enYiZhhexyZBAAFtu4AdrTtVB4GmivzotCjjzUZgdfgHYipMJAxTDQCKnS4QNzMCuSPjGYyURjCsAdUFs",
  "key36": "5xph6wrfgMAcbHHAoJcaiyqfPMdWUZHMrTNzuMTqsbjAuC9VFKFSttcJGTaihsEhFivTZmuGXLAfJgCLcg6gUr1w",
  "key37": "2jQaphvw7DrXvMN1naFBABkHuZRRCJy5UXykz7ED3u7dMQK5qpHa5WqC8KM1fK3myYxbH6gmCxBSSGT8VaZnPhW9",
  "key38": "4VYiSeZ31dnoc1u8Rpm5r7F6tSHneZh2tbzYMgwPiTZjR9PYYKtYibjGE6at5QZJBtMM7M4eFhd6JZL7KZ1XZ7Vz",
  "key39": "494gTw2regnwG89jr2AY27rCu2aGZTonZbmQLgA5vdEvK4PT5CAoaqGKgPUE3JDERH1wD8momFo1gnaXb3Sk6jjk",
  "key40": "hzHFJeWYrshncSkN88761gRedJrC7hjSqPCkFkULNWZP7xtFkgySzwxEyC9YNqKotpiBFEimysyMgbCP8PUwqeo",
  "key41": "5TP3VHyfCB4cSu3upDHjZsTYKzep1NESTjL4RxGfJcFehKWxuCTtVtPkXQooiY7hhPSQUtUnEsJcipr6aontmoCZ",
  "key42": "3NUVtDo5Tgz2hQ51uuVsv6yjHmtf65bzvZKJFRbTBWEt8J4DMEv6EvNmU3nXU8a71jboJvF8TEriYjS6wPbQRttn",
  "key43": "5WPmX8CGTJz6j2G2G439WLf2SDoTcCEtZNzyhgRCM72AMnbCo87jWF2FSx6LcxUARCysetZRyVHdWFewcpqfbHy5",
  "key44": "36Q1ZQTKJXBmto16GsJc3aPvm7aoN28YWAuvst9RD7JKFybbAUtQqNUFX7mqVmEiENJ4BoiPRhqmJKXUTgtXumwM",
  "key45": "3DVPDdx6PFMCVmcwpFimniCmfuo8ZGhKmuVWudogrAJewrN4E7pwEoJx6o7wraetMESEFFf65Be7Z21X7JzAFxth",
  "key46": "577FsMA5sGvF5TGSPaN8queNFDr3TiQUYdMY1BmSCCwBCdBv8qCqzyCGiExejaEas1wgngSLMouyvaK62MkPZZHN"
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
