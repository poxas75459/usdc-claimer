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
    "4GAPSTBNa1SjajNb8PGGjxmyaYnxujSFAbw4DndQG1twC7P2o7jcGfm1epguChozioHGEkJWKjVZeBtDfwjrCXyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WTrtkHaYQ6WVciaJ3jjGiFMQBiocr7i1PDd9nhmSHBw6qxg951e9Rnjtbxdqx3jad2ubeMmF4r5SU1mbpXJZCA2",
  "key1": "4bBXJJqdNUxd5MDJQ74zHBXFz5GDw2WJgTo11WtrLMGaigbn1XnTGKbV6BAQtRhBWrYQLENZCAYxW1LgtMTL8MuE",
  "key2": "thz5GvhnLJrB6B5wR92NyWc9LbsoYYu1r67AQwaBGa4X8RxMAMiGXf6Z44KtLKfWe7dUES2RLYpfR1RgZcxYDq3",
  "key3": "5NoiTdwnTtJ4ENpp559Jw2hMZRGugV9Afp8V96xFH6Wg64eZSpHmQ5cU7MRU8Q8PVY8tv8PRfFciW5rx2rx7u6J",
  "key4": "XBHXbepnTWPw6BJHK3xvDx26RJFTt6uyz7Wt7sKvzuBoCEY4S9DESBSEwZvVfeWg9iVRZU3qg79f3WwWUx68Rs9",
  "key5": "2X2EYMgL5CD5mVgJRk2meWD9tGjhexFFMkXebdsYyHZg8jPS8nh7TJiUoeJabvRjtfcArD4ExJkxnDuryZXZj6Hd",
  "key6": "59KvwDeeKq1RobsNRRs2XqhkWnxG31JmZaPVQf6t8K5EWVbuNgZ1AK79MvCvazSEaJberpbGZwamt8fiNBeJP1yn",
  "key7": "3SpS1nra8RMfrGiyYHP6p2QZVjEiD8Ab3bEhg3LayFfBW9TwdwWMxA3LVzYroGP3mYcWxyhbVJdTQoWbJN7tx8Cb",
  "key8": "4Nwvd1oyXXeCT57QeANcjehJTLYLr1yswh4Xh8aHeceb5iPso6vrheyUKBLeccYEip6sDTUWJJVmroVUPbjojBWn",
  "key9": "3v47oscyZZRhHjCVkuacop1MhjNUFEzMBT39S1rGs6VP5mEM9Z6MH3sUqACH1N7i3j56ytvA1r6osnvjgsbc8rQs",
  "key10": "ToQGj3177jxbvyS8uGNNpyi4Le2YzFfZbcw47NLDJTteBFkxNAYhijiQnh4k4h7eFVbFcivpTz7a9BaZdJMtNpV",
  "key11": "2N6SHTbXWiM9TrG2urYECAauyaBAE1xt7xFyq5DQQGY9a9zVxbjdiPNS6afkctyK2pktAWBMnxSHt9ydunN4XZ4R",
  "key12": "3V9xoNZcm61SgsaVQxr1N5iNyzp8GkEeHNywz9H6yqtjT8o8DqPFjRicKQ6TWBsHkQ3n91JxDutJLqaihpmxEhqb",
  "key13": "3unT1NwSe1HC82JUqHE3WU7Cmm7nMrcpSZd26KfTJd1birzn4eC1pAmAGTtpucvSgnTfir16y252uPwKrsW5tFa8",
  "key14": "tqJTUNeyshBWJX5hgCiLuTLaFvWukESqBHd63TQQBLjNvxFj8UwubY8bYKWdFyd3Z7cDL5VaLJtrY9DsUNbKVC8",
  "key15": "611BAZPXPUsZnaNQeTbpsejboP1s7XbMBuL4jRJEwdD6VGhkoTLcXScTa43gFoCSP7VB2ZtPq9oKDoDhEwFcvmgj",
  "key16": "2Qc65KoG3X7rqeqfErzEe226fmLRjCHhQCn6SGgg7ykibi5x5E7sMzubb6Hp4qjdkq5g1twCYEkHFD7AxCyhh7fC",
  "key17": "2NJ6aLtkrzi9VBnPuwtbYwXpUSQ9tvsyabgsFg3i2X4uV8aaJCr1sNiZd57EZQiYUgMH3Cb5sEy2fgZGWGrywrx1",
  "key18": "GqxKjxubSTeh5oXADmGPXGkTxjw1ntHPHAdw3enyQ9KPQw8dsq9PMMMvygfgBmmM2BCSRJV7qk2uuZb6ryfSVtv",
  "key19": "M6pzSKyBwt6kUqAhpLTx2Wr4m2PzEUo8HeK1cgkzXcK4jJe3zRAUaCwc4A57a5rshino7pW8YtgnCU5KF3MsKjf",
  "key20": "5avGqmKhhYPVNRo654SLr9vs9rtrRZCqcMUXMbUSm9RJzcqGD7cQL5Bdu44M4AbmLhwSxjt6TBfR5rJGjB59UwwZ",
  "key21": "3q6ZKqDzigi1zWSyrKdgDBmeNyUr9zHqeT9V9L84F3VEuQnDwGJ3oR2BQGxF7jQbDTXsYmngXfJXV1tA3NgaGecu",
  "key22": "5P8ueYV5pFabBPZ6NwUjtcmHG41yGDEb6V8wmWyWt8pvQ7qJ72LBn8fY7nVCEtKyW5EfyCURsxo2pkvw5MMEG5mQ",
  "key23": "E7ZRJFJL7Epim2ba8tukDTZTCx7kWKoL9d9PZ7vXR5xwBRsdPGDiqQLJP3Y7THPFmzw7o76bwm1c9qGC3nJmj6B",
  "key24": "22heLAYPjUUg7A73Ap6MEDckgUyKuS4ZqyPp3STzHVfinaSSUJGUx4YCJdk5ximgin3LHo37s6KZFfH5jctUEmM7",
  "key25": "hDXgjRpG1LayccGJqNPWDxraW8ry3AbUmbNmeJwndbUv5xycFUzWi1q5hYwV4UCW81oCJrn6CmiXpPWMnxf5Hnh",
  "key26": "aYZiFJ3PNyLKUKBW3Vk3Fh2Ca2hKm2ngPNUT6Kr4i4amdeD5uDmaLb2urrBeZNAQC7o12QMMZrF515DGcZRcYkV",
  "key27": "5yDkFgBniUVNnBPofKEiCwqHS2BQpzK9GP2eK2LR4ciGt2jnKFFx2GdEX1dEhCQrFsNXYFxdwMgHPA8XRXmBd532",
  "key28": "EDfVd4PYfL1A6qtTXuVykBnVJjErjzayiHMHiDG8i5Tivdd6vVJoD16qeZPKk24MFxCdZ1ryLEScRkd94ViwvxR",
  "key29": "2K3aEQh7bfD21DWQUHsPb1TYLrkQo9rneyXoFe3cYgNpSYuXNgshrB2AfFoXQCHwFwhAzVn4fAk9R4sVHfrw6kiz",
  "key30": "GDVFEaUr4AK5bJCEQZU44u4964QKECjunQJayaSydwE1W1kbpf3buZ2chxUjXbEDRdAkpSRk8T4zivXAK9QW9KX",
  "key31": "2e3DU3NEYKkFbLigt9yCr8iHZ4pEL3qyaUtzRnVPC9MQYs13fgXsRF1zpAKNqxE8WyCdfghbnsCmevQFwimt7Q3T",
  "key32": "3zLYgSSS3L268Awndk74nQPshios1xijxCNvH1eFnAB89PVL2TDm2stgfjZXhVXNE8W9dvTNprm1PyHi9DUvcTH6",
  "key33": "5jiMXsj8yFxQoQnmT3NUJCyHYaCuGXmDjyGEJadUCWCZePf853hQF8MGVqzBcHP2VRMGEipWSty1tcSPZ8tybhjA",
  "key34": "Y5HodJyske5pVydgEi63mV73nQcsFAs4n1k4R1pujipoRzNZCGuHi1MHtuKKLzo3TJgdgPRnx5hkeMDQTyJZnK8",
  "key35": "5rj6PwQkAzBt6hs8y7sQg8N4K8QjyrCApqehLKcEcqC439MnjS14cNFeuv9m9P5sGNEhNe81N27sZMmJS6UK63hT",
  "key36": "67Y16crDB7HD7uwH4qXPaj4AgximX7Zb4foVPdFczZB1F9Z6pQdq5CZRFLYKB9U5734Ab8zWu8JRadXZwFo3oWwD",
  "key37": "2zUNkYhFzmGEnGXQQX4rH5WMPSBPLLBtbmgpguZAwxS8hPS8Q62HDvp9wCEaoa6tG96nGwmJyeYKQAT66T7596aL",
  "key38": "3Yk27aYVfW7DA3JiFTmbdmi4atFgy58PhXLdLkdfafHCsX9LmDc36EEQCwqHE1Sosp6eS6aYaCmZAFd97DVWrVnP",
  "key39": "3PZ1HTN7B43B9vQ9crc1CQLL3yYVnxpehzCL4z5tiwCNr9W2HkwafV62Qmtq424WDDjugA33nTL8cqSbYx6L59AW",
  "key40": "3aCoWSF3pKJksGB1Xw5XSrSdJ5BNpN4mGyN3NvdYB1hE7m32aKYp193LxFjg5qGQDuYYb5PDpV7v6jGZnh4uau9r",
  "key41": "5sJqkNUrZ6FDtBFCh6KXVfjezcVFgFCtSEZWz9naDoeG1eUr3GAWNhWHjCt6yg9DT3G9FdqPt4XjES6PNJHpfpXV",
  "key42": "49GjWYqTkdFHYTUmzXKed8sFyo5PvPf9a2MzVb53evzi8Ky8JTYTAyoyG8Ag1uhtKLgSoh6Ac9bRJQDuGnaVioKH",
  "key43": "3ExBTf99b2jXRTEjc1CnXHCYAb4naBNLGsTvnzcMTXohP5Rkene6g45PwPaf4JGHjxepAcX1KYiVYJk1Jh2qATVm",
  "key44": "4VtUgj6R1vArqTNUug6QhCx1VB5VLhbyZotNLsZykrMHCpBTu46Qdgc8jhuf43hugRwtWNdERj6kan1WmeVjJXHc",
  "key45": "3juFpSH5FHDvxhCovj8WMAiTHpEnbWWpRhQxdztpzUyUsvGrF4CTmTeXavuyxnUMC2SkCYWf5d3F2sEMyB4cngwJ",
  "key46": "4Vhq2iDvtQ5CDC3tPGdy2G2admavfv1jSSWAvf9eqkk6E7irnVwnKx6WbQmHzD9ZVyeaWrydwsZ1oNfiedEdkFD3",
  "key47": "5QMFZ9qqAjNH8m4m86kwWgse2EZEkvboiExdsezpGnVbyYcwZd7KqhRWagfJNufApZDfT7c7Xob8S7GNWKsmju2D",
  "key48": "49qQYvYE74DWV8nVX5fzLJZB1YwtgyhGkRnGjmG2c8Wsx3BFVb6XetJeFwMoPd36vvB4Wwo6fpnSXJdrrD2G9wLg"
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
