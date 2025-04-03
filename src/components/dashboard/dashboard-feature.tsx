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
    "3DrcvyZTjbupzpV2FTM2eZoYMzYmx8BgWBRnGkqS1cfocmCj9SthVs8qGZi4XeZk28a4EPnPFeMow1UMnTm1TkRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gDDFrQy2u9Qnnvwh97BCHLMJtAAmkQZTRsCPGuFVvWB4vumjMeBEHbJuKMJ1oau75hfGfULRx9NFs83pLatrLFu",
  "key1": "2iVLotBUhXmbmKsfg7DTd5fRQVPdXxW2QVLGgQt5oXUPc75XT9vmWnDayCgaoyqHqF4wNgBiqXY5gXbTZaXpLHpD",
  "key2": "3XkiBbJpSunBW9xhP4bFH2EKa3mfS4BwmYxU33R4zDJ1sPAoATxNzkQiDKeBbnqsSygUvNNuVbpWHGoRXeUSRzzj",
  "key3": "53ELniQruca9A2G5AWwuwro3bKnmfUvWGpRgAW8UAnG2zM9YyNwUviGL1cwSmLqc7hXnNSMKZC77USjxMDmvM3QY",
  "key4": "21CpM16WL97Z3YW5Kk4yPyshxtHzEdbw6gEZb8yJbR4XNRvBWJUpfysbNt9HpgmiwtT2ermcd7qzKWcAuM2aoCXe",
  "key5": "oCEzojWey6SCcFUVRBuerB2g7xgdMFFzyodE7u9YJ4E8ESwiukEPdpFCjQmmTYehC7zJDyuy7pjntXSX1EK3Knx",
  "key6": "5FnH1F43Ms9KvH265NmUwm81y4STcJxRWm8c9eMWgL6ZLdjbugNhxkP5fYJ4cuYwE6Wd1Z1xicpLsobkz2vMPLL4",
  "key7": "298syeQie7peVv4Wzrdfk42syFeczytDQL4FefJjBMJFTTRcVMPCFo6PxYCDwCLwNjkQBxPA28qQ6zwfdLwuKBX5",
  "key8": "2eYFC3ucoV1FWXYbtYmjunkNjFhyrvbxjmMyk2Rh4mtWry6L5uodFxv42J5ZfobeC8qJeWJkn7EoFripBm5jd9aQ",
  "key9": "4oLe6uWiyWpMqMfHi4sge8KiKEN1PfbeHMhbLwp36bBipFKUFJ2riWMrQBvUsQyToExmVMGL2y2p5eyVwx8m8iqT",
  "key10": "5gyjdUhfggGVVsC7TgnqrgxoaNzSL57hK9y8CkMUMjrNdc7ak1wiw4TVwnYXk9oyKGEjzdudBV5FfdwE81L6fAub",
  "key11": "2Mm2mFfLG6CDsQRjS6KZoWCr6ydvJDaHwZWcMkbcawPLEZUqpT6jFwzbJ3mUac1vuuH66RUct3qMNbbaKaMeLntR",
  "key12": "3KSBf3WeBsyfpyeseZXybVk5Knb7W582pkB83iEiZJaygg1MFn8uqLLMPiJJKGkwAEztCC1oGV41yEWTixuvWjPg",
  "key13": "4DuFxDe8HSBLEgUaHVqyk2FrMZBQrxTTTs2EmGbrEbRBVLdvy5b33ydwiXDLez2Ljv7WuYA5PTz4zJiXLafkApGu",
  "key14": "3Bsy7XXngSuUMyUnGL4QXcHUCPyQzq7UgQQa6f7tQL7aZk1Kbte5dLn4kaFCwicdpNXjpVWkLRGdtWU6DqEVATC2",
  "key15": "3KsgoyxWr8oL2S7ULAjazWpjMD48duh6bUWbXGmoarqkEPHvDi5nUL617CKLev39XziGy1UXuWuPQYgDepoGxddj",
  "key16": "8ziso9dz61pLdzx3Xe3aDHMFpKZcqyizwkSr9s81jCVuzZBs9gfzsvSrcj13131HH6SKXTVt6P4HxpoTD4nqerc",
  "key17": "4WNnqQx7RYG9CmBxxmLfvEyb38jtVWjTCYR8Szvff7jqjyxK1ncTcTUhCzVUeaMSpnPf3hqYTieBzW8NL24YjAd5",
  "key18": "3ZPg7e1ywwMwpgrCENtrCVADLrz4nbq52xg2fBLCKCZBdwffUA5TB1UBujpU913yzgWkcPWApCPuYQR48qy7ZHch",
  "key19": "3wKP7Uh4bfq1C52BGxJkTC3U8g4nAkY7tq2Td3jbLRaUUoxPUAcRVPiz39PdHGevjvhoTbR9czS5xsqpu8PEpcwh",
  "key20": "3gRiyQiURkLRqtR1BW56aU1rN4SZYC5TgnCQnDSq8YAU5RFRee8ngt1VHNhEuxkmDXwYnAQhsHGWzFXyo2rQwnvg",
  "key21": "2VRNXaFBjmA6gbNj9ty7r3mh1BPk3j3AkzLPmLvb2YqNC143kCuaAJdxYoVtH7wtkDJThWkCLkejhWYERcXyUoqm",
  "key22": "66Dp8xjnggoeaYCqePme84bYT1UaFKx5c81bTJyvLDbbBUfEQP6o57aCRB7JiRmELY2aVuLN5cDpJ5atMeYrrbVo",
  "key23": "5Nr3dJJRiisniQ7yLAyAKrkN3gwfhV29i2DKMusMsfCeKR8oEfKxsCjqBGWFgo3ndhaEzk2SooHMgNbC8LGBaEfw",
  "key24": "2HBi9u2bRZEk3CNNHLCPQvTdLLk8pGyhtzTeqh6yGJaQdmYgBjocnujPuYRUURvMXGeb2zkACq1bhMfDTDFYATsu",
  "key25": "22CJDBLmhhQjBK2VHbY6nHTWeN6m4FrnLGprhDN7jv2MWXziV1euNSnJQSLWQygLfWGia5VTvqDjFMorxa5KiFkp",
  "key26": "JhTFed1Ls6UaFUzWrmg6EYPtwTsHgs6Z9Zymtw2pyQLEQdTcfbKYrFKUNqYuESzaFhj9NEwr5W2mFPkTF3JRKfw",
  "key27": "5p441yBsrRA9KeC3P3vc4Khd3dqu3ea4SHugF3U26W6UZuDywwXiH8iuph5VRpbqVYtEYb9XvhfM2PodESBH4P5F",
  "key28": "29bvnVRbhBvkbz9zTwjBegXZLJZ34b9cCveQiMqKBBPJTdFmcBtKDNiDJLYBAtXui4pkWou5eqaMvsU6PeKJ8LLW",
  "key29": "JJHezodBZ1gPt5xWMcS6qbPRjzQykkuTdsSE7i3utK73NwdeFevCYHdciLDnzxAQRzYVzWD5J99eJdD7Eo5KJkq",
  "key30": "4zFgxHcuCmwasckWBwQBbE4m6SkQzWft2gzjTpSNnQFjqHsvzxvt2GjrKuGAUfEyDKju84eQZHHtN58Xeo11WiEs",
  "key31": "2FKHZc4Ty3m8keN4XhAC1wfCGVrZYCoC11GdaXpsg1da8y6HkSq56wREghj1im8jPdcm24YjMncbuYxBEYhz3XB1",
  "key32": "5tmKaVDcJ4139sDNn8vVHxr13fDwv2dTD2jMTRKnv5goBnHQpqndhwoQYdjj5ZJoA6agsJmrTF1qQTW7YWBtchvj",
  "key33": "2C2f26bSJ6s1dap8817BDiMST4VoYpKJyuq1VD87TFssnD1tuB2tTdtcihvs7ThNkSjwnJMBvj1TMkCagJpfB65D",
  "key34": "mtjfBpgwDsK3LayVTfWajRsYtqcEHiNa4QLvQhczuq3hrrQ59an5TWzRESzXhc8STAzPKhr6yScLzMyC3Dp92yh",
  "key35": "2L6e1PcB8o7LL8kqnS87QdrGQpsVZHNi34zU6BHMbkHrj9eWM9q1wSbZDp266bvRD3PtdLPJ6eWoeUUrwrVnFkiT",
  "key36": "4EtoRdc7MgrYa9QbEpWwKNy3LVfaNAD1zr8Dx8HqcezrqiCYYrRua4AgHsXzna75AQea2MSRvFdMVL1BpZQz2zA2",
  "key37": "w1kwAgak9qWpJZrDuGJmqR4QGKCmqAMYk3NboQGLnWcmfi9RPEPcc5vpvPeVaJcNBEeLusgpKUZknzBmdPFjq1h",
  "key38": "4BgtmtWuvXjvKiP3zxhicXxgyhRJBbPQq4EXQg6qDnDkgJR8qaFDmbk2CvraiHzRkDW6HF2tiw6zAQEQhJNexvYc",
  "key39": "5fVY9XAVRUnwk2cK4bA7jSSLqTp119b1uQQ691GEfmrhjXD2MdQTB4pcT9sMXgk2HjxJZYVbiiBr6czyLyT9hWsN",
  "key40": "5Peb6c4MJ7wH7uHhndFSD5vRsHqgExVRPS8e2EqbdsWxTqJUnLE3TpCjZwMJFdmYfeEomGhHP4RNWYAMcTsuhHbU",
  "key41": "2mhaeF6FWTVFR5byRb5fqnafcvYtAZby5RAeu8gqHedtAHHAQvc7UarmqWgqWyDs19njFkpdj76nrMdea2yCvpZt",
  "key42": "3yswFh737z9TxeEdjLbFsZVpZsHwxmzcVdU48WhdPG1hAyqVVWgPjTJBYPGxUpGEDzgJH8jT5zwmwP5xf73kNN6n",
  "key43": "fuQ8t8DPhKVTtBsPRKCeToXLv2wCCN6VfXLoH6Ay4ssUnuSYxSSja3FburRZmi913JvUZJ9njgbeLRwzXzLMdnY",
  "key44": "929dcey9wP3xvF1eKoYvmcmWbuEkeojwy2MYUeYqNTR1rnEbgd53YqRYMrYhBHCixQxthbe9ACot3LD5bRfHBMx",
  "key45": "2sXt73aWg5M1JTXdaCgEUWnL584njvzmPTdahiSpJYHmEmYDrdR6vFybrAr8vZJfkFSQrcpv7nPde1Z7vhmSzFmV",
  "key46": "51bEgy9NeRtfRUjhnptcpdmGUm9y9qYy29ndiYLP53dgin8JdaYvb6eB2dAefjddzZ1G4W7bABg1gHnXrLzieVsY",
  "key47": "51Phbkx5jzPkNdVJaikx7zmDC7qbK9pCDQ22NTkzcrCSu3XNtP88qxkskp5vYUtN1XHbMZBNCe7jCgAXyV9f78JP",
  "key48": "3mPytk6tk9m5VNm8nmagBJPtVaihmqQKqDJ6iUrD481eugQLefLoZ7Cs6amttmrtEtFE2eJkBEAYWkNpA7VA2keA"
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
