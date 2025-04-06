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
    "3EBXvQwN6C1jzSRo4rBKjCMj4UtCUX5DdhXPBPzP3tYZYGQBekW53AqmFKkThNbKdoff6UP9TUNYXpAHWBQdpsMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zmQ8kLA7axU1TaXK1XbyBZW24tgf6BMfUj7r1Mx8AKbouyM8aDZeeH33AfchCp1gzrQchHTKwrMo3TdTVViJxtA",
  "key1": "s9tEuavwYgLhuwxGLG4LGKaZweTbczEBXYiUjV2mUHthZAtZJu6JGXoB6SycA4uJghSJJra6t7tBTNfEGmb8Cxg",
  "key2": "kGZVhYbEmy8TS7vmt6LCcSA2rXoQ3twKeA3sC4gA2QNUnwEi4HwwDTcFcNKVJDK9F1w9T3xa3eBrZSnCXVE5JPB",
  "key3": "4JRtbmH9oVnvNZ7JWBW71G6X9HgWDQUBxkEyXj2Zzr4SuEsM9ATRgkCXnjPoRi2HDNDAFzh7u45vWGnpJdPifPw1",
  "key4": "4hVwLZ6TPtf2RnsMwHf6PHvFi4LX1NkhcBdr4csVBUumwyvssMt3bJXARAogwXwadoz3AmNWg4iTow1R57hBc2rJ",
  "key5": "HPKiA1HZ9SsRQD8M6DVNd2X4JcVDYgCM8nTRrhXutrNtLeB1j8F8Zg35QfQgTS5zGXaVH5HEny2uWkQMeK4x6V7",
  "key6": "5G8F3GNb6ejEnDycmAQaoCEKrbxeXTkb7PFz6wVZgX8JsjrtpmKApEWzgF7RWjd7EzS3XbrNQhB7GuvCdaKeuuC9",
  "key7": "3B5qWAosXYXuRPFiMsX8EADkNTYrffyhGiM5uFXwcDW2hxLcpDBjGCu3q4GCCsvf7J3o6LVL5wg8HQmihzdCaiQX",
  "key8": "oqwE7DhUXSY8AM4A1bSMc8TK5yUAzHZrA2cVVPXL9TjCeFw2kiex3sk6cPemsq71ieQtoqKUMuBwCUe7QYd7aN5",
  "key9": "4AeTrQvevb29UeGJKRgATHSxDiF7pmTdqUS5pxLkTn2ShoAWi8RrfPJwWHobn8tjgHRgyDwAj7EHhY2x28gdZKRM",
  "key10": "gEkFwUL5LGFAFBcCgZAQ44AWstGCikhWeUUqaFu38Pm4VzV8huvUZBVok9x5nsNkFTZmfkjDFFqHDPDwz5kBDNf",
  "key11": "2DNNxsdJQJnKRdU1AqSQ6orwM5p9fbRh1FEqPAPAj9J3jhcUPbZfeCrptA4w9APFwU7mns1wn8YpFBs7YG28Ho3f",
  "key12": "2PFFp3AZveaxgJ3vcUua14KjG8HDtRRKpv2knkLdvnbMjRKQmXPX9XiRNP8ePmz6aEQ9ZH3k5LNoDbGQmfSSwiVA",
  "key13": "2hpH9LoUBnT1sZBmzuvv3kkdJMmcQHBpmcNKSRAs2xyUkaVwVBwJ6TH6eiCgKgzYTSEzYeA7Ycxacw4NaKXQb7cx",
  "key14": "4AKayWNx81piMW9seqrpUKxKrAY8ouy3Q2diUegqGuZEa6xSVXxXadvE2z6Ye3iXnuFnMYMqR41tstrERUBwGh3K",
  "key15": "56bawJSCMPF1KvPkoNZydUiCkKjSzPw4knr9Byy8MSzGP1hVY2JVktQokRAu88Z41cDFum9q1vGQjuRWbDqyGsa6",
  "key16": "RB5H9bxRgVwCMPjP44rd6LHfaWMrsGQZ5dzFGRykHbEsa7Nb9MJXRpUdzHs4npQPDEUyHjn6CgFv4BiFATYtj7e",
  "key17": "2sejXDaPHoT72WbQe9RM8U11DgtZrRNzNrZAS1AAzC1wUzHNgaB8JgTsTmBHzwhwZqtsaKDin1rVzA4NnDY1wiBT",
  "key18": "5FRHt7Fb3WUug2rrYensXQk1zZVdpBGfPB9hcmS5wfwxkH7vknev4pXPxCn28GceRTNymKfdz7XEd8aNGq5Czwsp",
  "key19": "2sDqiPSbyWUFBaJDiTZh9BakWvepQBtntRG8zoKhQavmjajH1yaja7fB1Ka6qdeebA9JUp2ESXzYeE6U5ofFbQrE",
  "key20": "3Tr2bj1AW3hvxGHHdGhZgFsPeCBf1jAxgEpMtkNfjV14Tzg5sagedHf13Nnr838c9RtWZZQtb4futamTeWntJfh8",
  "key21": "5JdnFMz9DwT6bCoL6pfJkZNLCX5KGMBRZZTMfhCjXWPDRVRx7LC5tFguDXZvdUCeiLEffhZ3hfRtfyhe3ximTo2N",
  "key22": "2ii6W7v8hm21fpTqsV3NkHw5vqJhU82pmHSbeWqVort43SMMkzjiUguwtP71AwiMxHjvTeQsr6jwGojNRLTvXCWi",
  "key23": "5phvmxLJSzfBZDWHa3ufwqWPRrsxhJJWuNqqyKzFCUze17qTU4sDW3MxCbaKyFcrS53dP8NFgB1cCYxNZ9TF4ZJo",
  "key24": "3X6A2xwqGWQFEUb5TXSxUsCGAwGBj8vC7UuSTP5mbZ6sfRmhqLohMJakZubkMQMNcrPo9svAWk1c1ZggSZyyWgNL",
  "key25": "5dFnobZz872EqcjbQtJommwzWDDaWYS8bttzTzwTSgd3WhYxCLFjyxhh2z6zUszeJo6iX8G4KSuLXQ9ds6ydUyZo",
  "key26": "5GEZo775kvG7PM5fN1LMmgfDkgwvHnkKZunSRQ1oGY8J6iBMoVx3QfDqkmoH9HHZ5DpgdopDPuxkQCCRXs9r81Cn",
  "key27": "4bmegq6heo5bPVpo9P8gA9b8eibyhTskeftMVPnyq6P4yvS9MB5oCP8as6By2RHP3bEdyxcm86T2fHz8F28VkJMe",
  "key28": "4JmYNyZ1L1tHAqu1tYYWBVJEdKC4HtwDBrz9v73QZY4L1J52MXdgib5NTDuGYMw5rSYEddDFUxbmG3NyW6TypARV",
  "key29": "2DEJ8EhwaqoWvHJXnzALMxvx5ArSyz1exN6P8fnqrcsNaQ3bKVsCWEGTaA5C7Z5PNVjPkUpKeKPStJN3xWXG7AMg",
  "key30": "Nt63Ma6uUvj8c5hCYP6arj2RYoswWJA91yfowoV7iKTCnZv4EyJCGoHF8qd2DzvJUDbjdwmZdCZcCXnHQr1xLwQ",
  "key31": "5THNK8kGbgmpvBfMj9ZWdhgrZx3y6dRpSNPwB92PRVbFeXjdx4AZK8FgzzpyZYTE4MbxhoYPM2CacmDmLqbe5qRi",
  "key32": "5fuXEXJjxe3KYbtv8TbCmbujEHSUZoy9CsfAFuJC5Gj4uHKG92XA3huLf1x4fD3xVePfxkJejnTTrb1oyXDhpv4M",
  "key33": "dva7tAKwMWdgRFYBcb6qACkHPjyQUGqz6pCFQS21heyxmak47yuVx43mXdofRDMkPQnKjwZuuiFpHvcWtPtdQYW",
  "key34": "BmXmQnyXLgNhMfuSwcvwy2AduygUrMy9oArC23TzXwiuHGZyNjv9KgXKSBddoCdMYbeEnXWxiSnmiBGkC6KTVQN",
  "key35": "2tgtM4z7szmkAK2gasFk3wkz8jXW5FcktMCy1ZGPP6UXjKaVG2f3Rcm1Gz6tuQpU4NnCXdDtRssoUUevxoUWHWCz",
  "key36": "2bSH8xMi5fbhC6e7gE7CPQRX4nNCB5HoUQjxywm7hVmFFCH5V9c66ApYWunj4Tg8RPbC2vEqj28dDAmHrTQLwgjP",
  "key37": "3DzjRhwDtaS2i8WtZ4cHz48QNi8Ary5RfWTuYpc84bNVumCnwUwfxetpbe3ht3WUriatoT83h56hZroXt6obZKAS",
  "key38": "5fE86ATxonjf4rFUzsQp7gA5A8NLhN2uxyPre6qKRBBwGQ3ograU3QXMJo8QEons8iPxiXM9TeNe8yCf7KLDzz7",
  "key39": "4mSkayn55yTatmx7WiuxN7AdUduswSQ5oTFu1uPNCXFmmDPDrBSZ5LWYLSNPyELyKFAJtMWFL5joPWezJ6QS32xC",
  "key40": "4qmoJyyVbtuHBFJ9EoQAuRu881TpXzA8Kni5fZvcGvJpotsUtYmXUwScQC4SS9A6kqwkizmKbirCg13Gku2uRXJx",
  "key41": "2svJLGrqQG3bd5hCJpQVX4xquDAuRSdvPPfwPLKZMF1aD53v6xX44iAVVuW8k6Q7wFsY3HpY3TNNW8G4r5111VWi",
  "key42": "4XsBG13BAZXoZ5khMq67CMmTJ92CqEHGdEB4xRitxaxZbAE8cgF4t9d5uSzWsK35sYkbtFLcUmqMHiBv2jnQNBBB",
  "key43": "2LqksQtbUmXRzKV9g4AeEpAgM2W36hL1G278CTnAycQEB5auRYy5CVU1ygF141Vg9u9pW2La8mTRaxcGLNtSBANK",
  "key44": "2Wzs7YydyQTEGN1NBnA5SnP25wmoCFhgU3LP4B9kPzdYxkYTCbvgNyeeLLF1p3aMU42SzE7uxsmQW7tY4L3Y6eBZ",
  "key45": "2U1ADocNbNcpGt5MJE8TeoAuwBL4B4x1D2bEGS5VwMHdCQeYj1ntYLLPL6yExC85AX49XRbHsXPLFAkLJPckE3J",
  "key46": "oxXrU5sJKuvFPStsEqwZmwjk99BmrfABHYB9pJHTKrLx5NUU45UBs9UjtkWQoGm7pj7DqAk6vVCcZxZ1Zb9BZDP",
  "key47": "2ZUpHgfEMqMskZGDRN4PrsVih82Hn75jJH5pzz1BduFniFrJfwc5eJESAxd3aENSuXTHzPNbW45249i8ugtNXeEG",
  "key48": "ytJ6DQaYxSSB4eoSgere1Skkd1mcr26pmDi1ih3njo7RkEtep6bnDzEo3rSS96BFakrBJKory3fFnBwerJsP7Vb"
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
