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
    "55SYrqhx7Jss3ALZspXUbunj7VbGhoxGvi4R53BcF4RkSCDPuikNP4H9gXweHQMPDKWRJYTDrFrv1PVW6gZ5hscv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Qjuo92oNPwZiLaqsoDL8A5z5Shsid5kRoM1MsSnU9kHZX8sUrNL48guWoQRWNLA6uigNA3CTmi4XDZn6LZP5zd",
  "key1": "2shmUwtwpELVgDyxN9x1kbH6gTfxJTmAqRF4QDk18c7hwdgwbWZMWqKcGnAt77dEcfYZ9m4j72kbxJ4uxv1yz2eh",
  "key2": "3h8GxhS4qFB3n1LprD5b7dfJFu7ovrq3HSD9QrXH1XCfGRsYDhZg1JLbfAEvWKiEUuDgdQj55meP1QjSfjAGoobe",
  "key3": "34hrDGUQtEpuMzFCN66WvQkCwY4NUPEiSoVmWf4LbJRZjvrtQ9Wt9zHDeSAFvQoQVNszgYAvqZh5TwfieuKG1sdw",
  "key4": "62d74eg5kEaX2EUBXN1W1AvNEasNoKo8KXAqYka1NKJMkNrFmesLbaBtCMmzNvbgVG1nF6HaUhf5GiFrEKcFnZd4",
  "key5": "5rm2UFRDPFN6otyP3p2FjH1JAbd4jKRcWny2QudPjy2tg54WnDJc1ghZsF88dVq6KGByWwCRsurZsTSNkzfkqRnt",
  "key6": "5WL6BMfLprjGyPfiY8wmv7CNPemKfjhoMccmtLXdmLdfxpuCV6zNZLJGva14Y3dyQAirwk7ozw78piQVy5oFHcoc",
  "key7": "5aN3itor7iFMgyhmykMwt1ztfnwP4T6hMLrEuwFrbHDrgNQ8UgEtjK24CtG7ANSzYkdN56X9Tgv56vhdSSo7D3FU",
  "key8": "3NThDacUMA56LWPRTUjJsPF7NQrB7QPioBvbsG3TP4Sby8FQzb7pSMXMDPS7C4KhDC9rciv2Hpa8VKdgYHVNKAE6",
  "key9": "2L33ZkZRHkALPLULrgN7CFsMQ3Ga89irCTJH65JSHb2PT328s1UdyTciF9rQYh79hsDdCfGb8HB9kL7SWp9MvN5a",
  "key10": "3ShaZtAyMNf46rF54rj3aU6H21UuZcdRwzJvgE7detfzBeGEtjtqA75vTHCYLZ7pLeEJD3PPy6Yo17WgoxyQPEAm",
  "key11": "3RG59FVnRTYixwFF3Foco5ft3ihV2gpG7h4M4Ncx2WY7K135h64z9ayNQBJR2c7T5qPJuYwqeVBy9LzkACmkPb6G",
  "key12": "3ysJFv1exABQPttskr9UJEYZXREGWRCPaKNhe322ftxrs4tiexpGsgVUf6K1Anh4zjNyDja8fTTEcdLijedcSv1j",
  "key13": "3615NABD6yQfAgUbFPQ8dQAWw236E6mpyYZaG6RTaJqEmE3MLqqrRPesJz6nnhEFCcM5ExEPtpLpuu4F7tjN56Kg",
  "key14": "3fEnMT2kaotHAr7RLCSP74DoLM35jZH1bYwamuwbvqX9z1k5esNxNt6y3sTsVxacLy6acg9zhCQ1n2YuTmL2q8wf",
  "key15": "612iSne2EzTSZsy98gynyyretsJhdUb9WE8cvu7RYv6ua8ufPmSKaKLYTgvwqsMfj2Wk6MDJ6ygq9iqcczVPWmQG",
  "key16": "63Zk7ydXXp76dhfVfe9d33Mks6HmADuGY7q9pJ98r94hEaFVfoESmBturWF88wstpWMsK1V4jAaN2YCtYYhPSLxH",
  "key17": "4JJTTjxZuGBU1jHsjU93HR7LPg4yXen3WMT5VWCYHd4Y8Wg9Jqb7SRiGFjkQJ4Gat1Ra9hfLJakLxEtAMx6Hq5AG",
  "key18": "3ZCJqSvenNcLhNkfr227ZfswwTAzyZ3FYxvYX4FZHBLNbVcd493YEKzprbdnhaZSgvahKXFADD8Khchuffa2JsDu",
  "key19": "2fzamNSpcm7cufqxKJN5AL44b66Phw9spJdygj6XBxGsMSN78yUhG2xiHFYdiBYBi6hMAFpdMVrrvrfTbL4JgFLo",
  "key20": "5YVnURFt66RxWPLzpvLzMp6bchnXBxiz2LJ2kdHMKoprAhGU6eBzJr6sQN3v2C2o3zHXp19qRjAgkCNYGxpCPxW7",
  "key21": "4sLmcbQxgirueoSeLRMbuimdVbUY1QKgxUrXA7gDbBfKGWj8jrC5SeChNCAseouDKhNEk7wRCKuMwuw4bKUk7gKN",
  "key22": "2KS9zBm8fCzJ5AUq626XEsP81ow7bZSxtCwVAphqNqbkkKCJvTNG4Gn9FyBRerPHbQRY8pGj6NYsbuAKAZStEd98",
  "key23": "2TKSb97GTBdQE9TMh4WjjvukcxeYL386gmDvGnj9rRkVR366FQiXbpCiDKW1T5TDg8RTktMi3XMANzrbx4Y17eK5",
  "key24": "TJApVYxrB9H9caJAnY67t2Shc7jhCvEMGeCVKpmRSgMZT9aX8h2Fa56w8tHRAGfUyC4tJiFiuHjB1scNbpwaxmw",
  "key25": "3RRAUuwWRVGPspsyRWumwEBNKGSHdzSyua1awHs8nWkpB2ELxJbrnABXazJLSo2HRsJvEGqaKxTbQmVA53hXnH6E",
  "key26": "2nkDcwEv75z1fs8LbA5c7rQBFTKh3W89Y27yVfZtD6uNjAG8Poamt6PqrukVw6pq3GGw9HDmfNqBbNAuGUXX6GX5",
  "key27": "2Ui5kvbKvXs1ctCdeNVizf7syUS9oncMTV7fvfZ4CDyJbbwkFjVTUi43NfZQpn4bgEiL69SE7v4SZjrf6go8FK1T",
  "key28": "5B3z6kSXdwr7AyXuWZxk7JBeGxJba6yhCzTS2GKHWxK5BTa1hrvFsziarvRkz3gva1sNBBQa91ZdVrMsqNLNs9WU",
  "key29": "5iR4sXRb7Hn77qtePa6W9tUVek6MLGZmQMX1LctyBeEF1Hdkv3kXWNvKbSEjo5dtMoBTtBxo8BSCiwtfPdjEPBz3",
  "key30": "2WTipJbgmrtPyWgekYafM6ovDWCA6xurFJNHUwxUV88ffY4n2LCbnnvUQVtexCc9GkoWmyQeosLn2MYMQCyzDJeg",
  "key31": "sJxuMjdoGQJEcrhrkktwmVtkZkDJVTDYBJQBP36YcyaxXZCRn2yj4e7uXATNa7QWrvbDWGPByn1b43KqmakF5Xg",
  "key32": "4uEM3ygQrEz2KEEwGe5td3ziy54VSQodaiKqKkvJBa3qDwzSzyVNTU6F91FhKE7ry7SunEbd5TdQSETQm5r9Mjkf",
  "key33": "4HuL6RfoaCLrKpd1xRwS6QRsnk1AbZouxAYnGHk9wJrq8bzsFb1qnNrknjVvrTpKSUytCeLLR22L2JLzXGsQwr4M",
  "key34": "54GczPycdm5DRcEoeL7SLq6av3o2aZYBHNHpejB47W2DVtyr1s8Sjd2eKUxDdZQ1W4WUU9jFRtNWTTgciAAnb98Y",
  "key35": "4N4Ue1jSbZkz5pfGpsXQDHjiDhNb8WAGtMLA6zPr9YDtLP8EC2QnikYMvMcCNrtR6s7nQ4mFdYBCHm2uP3FyicdV",
  "key36": "3oU66E26Ty4tnuB7xe6YeXB4rsQnrYsVNcjtYocwgeS9yTeNyMq9PLirpxjSDSPx6X8qPuNfuq6Tb4jW2CUVXw7E",
  "key37": "2aXciJ7q4GWYasqrkca8E2BaTzHAKx2ohnKksDPyxPx19f6rEhh1ksWjDah4z6TbRFxzLw3AdrCxUAmvNfQzUiNY",
  "key38": "XtiYQTz1oVyFCzESp8NW4D2aBkJXuVi6vYY5vu3CcmLCsgQZdM6hN61V3FxVd55Ybb4dsXfe2irJJ4BrV1jLd1t",
  "key39": "2eMXudkcE1ncZC8ZNjr2QCPA8LHX76Hkw67Qr6mhduf73Q1K5NZNcf1hAxdQn2cPViu7YNBKL9jhyqHXsSEphsGT"
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
