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
    "2kXLADbqj3a7iZstkvsd6FQoTihKhkUCtYaUrFcQmw53azmeVZheQ37PaEm3Egjd69BqPzhMixpMPQyXj9MsdbSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DFRzJPC7oRLhjKLiWaSnqi8YxRhcC7XSuUDm4pjQ1tkoR1ckKubPcZ3uQMLEdveRTh4hZDvFUPZ4Hq4Ktbq6XyF",
  "key1": "5v4A94QBuaYfEuV9Zu9nBnf77qFSb9vEJZVxEm8sF44Tx38NaWLMBS8VTKXb82DK66kvR9TEnzZQmVdujvEX3KJm",
  "key2": "5Dypay51axysvMNAiZoYsZ2D9fHmaCU4chcKQYud2utTPpcUV1JUrEAy4yZDApokdWuJvdXJz1gz4PcQ5aAJhxJ1",
  "key3": "2rBCkq45z84nTmMADdJRP89dvh4MDY3qVu3XsLbjLJzhpTTfn8XSK8qfw1JRBZvfMU7SBMWEXykjbJhbe12jv6Sb",
  "key4": "4xFzyrrrHi8yRE5k1hYi74VpiekwkZBHwj3571QXyeYFsBXRY5YqVR13tYH3k1rkNXWnprsfLug5dSCgA98VKEfG",
  "key5": "3QNssXLMDeFXMEyzcUY8bFUpBCU7AeFKLj8AUa7NjvfLdvUEzeySrksVwLNxK6P1bME9xGYtfsaCU3iNufytEKQe",
  "key6": "UeDhPSk1wiGDaWSiHYWoNdYM6knebkdCcu1YpxmYiutKx4WPHV9CuXMQRjAhcEgtXbUBpxihqtzrgsGFwNmAZ3a",
  "key7": "5uVBzaFix9A5kgT7ndQKqHRtj8v8cFWwW4n9LHVG98iQ4ZBKp9vx1Tv6m9CJq8LSmLRjxV64np4cEdDT23P2pfEq",
  "key8": "33kRB6rXXVqb3XPUdkSUy3nrA7B78pTLuRAX7pspLi4oRqhN1Rnm5AR6gAAzRrtv7HrA1xFTSjs5cvLtn4CuFYpo",
  "key9": "2F9JR7EUn2Snf7kqKasLAxoJUtrMGjVaBTF8Qkaynbuh9DSEqJT5Z9Bt5dowmjX6B6jQWm6xaJmq4F4SHqNj2HcF",
  "key10": "5NbKVLSPehJemCRLof2fKWojXw72nURsQTVwKgL8i4ZKC1VQYhWdTEXorBrrAT3Lh5S9qgMT2bkYjDo2pmcTj9jy",
  "key11": "5yd87toAgdUm92zv39gFbi8S1PKr64x95unP1mrMPBgBg9itMAuuN5BbVfPhZaHBThBVjUSP7hiMvB9J9HmTifP6",
  "key12": "5WqqeERLrQ2FMVaVgKNaqPiumKAptPZ2DYNZqprH6rPb5BoPjDfG3HbWJZ6qjbwN8WauePhgX3r3UnCci8uFRaU8",
  "key13": "2mqqF7k8VKRu3sbG6Rn7SV6qdCTUMUMAjaCyQN8U1PxwCWs8JyHki7Eti7iu44GxMULLmdwXMQMgjncczkxG3CBU",
  "key14": "5NxZrRdb3WbcwRY1P8kd8xQstcem4nfFqq5P4veW4rxbJCA6XAsk7VWZMJmg4Es9Y3xYmgjoMtxC8zm2TGqBYpHX",
  "key15": "3vJS3j7nRXsyrF9fwXWC8e66qUQSxsV61HbferE3H62Qfkzgh9wwf1GtFZM8VkgkenAuUURmpvaJW5ThJ5nkSfmh",
  "key16": "vKzeHV8Q1HFCwN2Cv9WUZEFe73XVjBf2zysibXT61XCrFtwYZPgDXR1zHrnj6ypB5WDYw5uZ4z8es774qDHhF1N",
  "key17": "abXjVNQavrkLnWWeYbxKi6kmPNCprSzDmXWAQWUD4wuTGvR2czEw2ZC9uX5yo65tbzaXp53rkaLr7wfE4AdjXHG",
  "key18": "5cDehjddS2TmZ8WcQiL59oE23Pmz4zfz1EG8sYoEqpJiRSSeb4qz4SkZqiA273U8ThZ4kLSDSnRtwWRu9Vw7kNPi",
  "key19": "4nnR5JRTrBbHR8pMmAQ75mqiUGDdsQdPcMxpPBGCHzDHvcVgXTJcVcwu2emXhWmX1Qz65TL2mC9AuYMv2RxP17ZT",
  "key20": "WjVzrwRS3HK34uq3rcY2PXT7q3egmGkhzPprEKz1AV6KLQBKHruCoNHbhJy1Mrmwv4wupkQJsEiM8cxbnkr38Sy",
  "key21": "5WZTw7aa7svCNqwFpR6tG1ZcnSinusTu329oMuq8BBnMtZxErfTByZnhRoCBVxd3FwNGnoRhzL87KX9quAKEkEG3",
  "key22": "3vrtqwRnCF8wckW7YB8f9EFSbdrfP8EYdvpArkzPob1DfjTZB5h8AEcsPmvSkZaPuVhLxCPTuHetAh9fWUR7zVLv",
  "key23": "2NanLYpmp6rF2d1K89KGaF32Zsa5PR36KsuCBVuyoUKUnrShgtmJxnAwKoL7vyH22GxXh7k7eyjqgyX9R69BXES3",
  "key24": "aQR7AfEgLcvWrGbH9y58VUYj7uCMb3mV7Yq17PxrfaCK7L2uZUN8PRm3kkkkpR55UxZcqtkSUFLK3wGVL9fkEXu",
  "key25": "2pfMMrCdh4f4B2THjuvL1F9KUw1gWhAU2FxQeZyQ1mfsw7ZGBbeb6b3ZVdMdaPPKhso7TMiUbpeZQR4SmiA4oSD9",
  "key26": "4WKTAkikYk7qorX65x8nhgqzuaWF75ZeQ5AeDxbLHpPbGttf9RdBBc6CszCygHHweWh1QQHcRSv6w6uXbH6PhyHg",
  "key27": "2CJ6CfWxs7vSDvTwFoHNT2FCS4Nh2kRW2sj2YzqDRk8VNa8iS1LmhYFVLp4uBsxPkmUccSj5RnTrqRQhXJJ6G9Gu",
  "key28": "41NZLnYY36Z2RjoB6yJ67T2q6eixg8NNreaKAveKaUhBw8PzU3q7U5kYcDPAorUV8GaLepFgFYPx7LkdkQqaCihv",
  "key29": "2cAfuP2AciB14fwfcdgJpykrmVu63w8TqpoiRYmqrF3fLTU679yX71DDfG9GQaw5kxPefcZ16httGcNQDGpRxQmn",
  "key30": "3b3MNJ8MTvbWmaHCcahL6tgzSAoa4nUYvFaT4cEiu84BRArtGGYgVkkPYfdHyb2kdonh5uhiaTNUCUhBXrHqjZLR",
  "key31": "Hpob7KSbp9bbvFhTJVLZ9GZ2kGGwWBoFVKM6B1NMyiQD9CzYtFhXK1BoY9seawggBGfazSk4jzkpagWPo19RTK1",
  "key32": "4Z5EiqdFi8iUdMo9iDc1EWcH5wpGjofxoffKpwTagXUcVeFuKLUYijUcoAANoyneNjLH8PgskBrnmdQLK8X3Ep72",
  "key33": "2LowgfxeaPm284M8YWfg97uXuvQJwEuEUJvzJkaYCZMUzF2Eu8YT5FvwxTruBznvabsGvua6iFv4QnDVzHym1AsS",
  "key34": "4kJMPAjjHL4FVmX53NAtZLxXAU24nQNMRy6L1t8raLC6SoWPhSYzajnzgEYUY2bEiMjunwoqs5KPNmXK9qK6ZUkG",
  "key35": "5bPSCybJpvWGi5aj5TkNmukSSvvEyJqNXpSwf8sPcn3ahW86eKV7TaAqe33CwNsgGGvN6zPk5MRUGQp3oaKr3kMX",
  "key36": "3Mgvm5Nfa2JginEfKpS21dj2vk3LXg4PNNbyuuUe28B8fsVB72kSdPHJWxtBa5TFUftxia4BA6r2PzGMBnh1L6rc",
  "key37": "5ApiEPT6WLaJvVeJqaL3VD7Srwhx8CaMHudJARwmAAB6xGWzooRoVEtjUTCF9wa1DUVaibFRVvQxXuEGaXvB1eVr",
  "key38": "BgJEvFu4gDGKd6uEw8zLyt9ynzAq6noByQyanMdz3rngXWhecsasr6rrtmk8yXcr2SJ7Tv14x5JtDqWrhYXSMAh",
  "key39": "upZJkXzo8P7dnAfY4ArgYV7MC4vFeFQYKux4tT1jUZ2NKmmqHmhtwBko8gKfukkL8UncXHcf7fDnH5h9zCFboVF",
  "key40": "5gyC49hyDCS9wQWNf5a9bnYcZrBAtijoJkrnKnzkn6UXiBog4AccFtW1XrT6pyssBgWnewDXi2nkxfuHUSZ93EfR",
  "key41": "66eq3GQthZWszfz88xB8bAmgTg7J2kc8cn48pKxm66jtpJGSnk4UpK8B6zaCzKyKtvGyxN5iaqCTEv1hYJ69yJst",
  "key42": "3x2Aj1qfqss3Qpo8qz3q6qCmgCAKDG3p4ng2aQpK4wbhQGUaKH1uiFcapY3j8PUnk9hfWMwosudeRFLNrRa62Pkd",
  "key43": "2mUMQDtur7ZPKajH1JLs6BQSpekywbPPbUN6tEBZaA7zC3q4LKshiW3CbdHtwDcNcR6pmSfQJdSUr2LxEQgd69Ez",
  "key44": "5tLgYsxBmP2y26xACsfq64Sk2oqagZR26ytvphJBjVZFWLamh628giR41LZb1A2VUUofrhbiZTC4DV4iugszP2pW"
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
