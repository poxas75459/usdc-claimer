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
    "4mQftXwdrQJ5eaZeqbbk2eXD6PUEcLj11YwF9CYbDckz8gtgtoaV6mvhfDvihUAbd8nCFvRTkWY8e1c4Pq7z8iZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FJ73doF54A3YKkiC6bKQCBh58CJHDDeiZrPS4WitXtosYHPAxiiHm6KQpbGfqspKQPg4xB9bqadTeHSFhsb8TJW",
  "key1": "3SFRLxYaUkuXgUaQyC2MRNiyQkh2jHK1D1PntAQCF5iVyVz5CGsnKBPc3Q1XivJfdzEU5J8TQt6ppfr4odKbAsRV",
  "key2": "gjV2VCUWzFcuHa7A6BUp868JxAZZ7NxUdEorwkfUwmhDbiP3Av6AMGXverXqjzjmKkebZt95KjRuptCoFjP5s9h",
  "key3": "2XD6MMv6A3x7dMF1SXfPkSojYEgkGadkVfr5iuJoxtojWkm2asyzYKJhuGYwqzwBfy2fCafd8mgirkbJcqiFnzKu",
  "key4": "HAahKNgs8WaCcehdVWBsc2RS1pWZYWshvM991vX7bcuqf8yaeZR3qSetQS6NdeQ5Vkyt11MvGBtR1GiYbUFjUUC",
  "key5": "35WuyV9xqe8yQ9W1jti4M6qEdWrdWiRJ62FKgB3vnhb6BdZf76bfGjX6hgC46H8jXUCeE9eEy95SrRmjv5rMEJSG",
  "key6": "MKJuev68bKTsz6PvyDLgYWX4N471yMY3NamPa2ws6ZkDqpysbWTem2kMPfjmpAHhi9gUnXoLfxiR2cgbth5e5Gw",
  "key7": "2fjPQBfv3zN9uLj9YEn7S3FByJTb7ZdMPfHdijbNoUZmJXuwHoq3vW4GEGPJ82shhKhZJiy5y1PjJ1RSvSMKYi6p",
  "key8": "t4mVQizQKtUMGihdFzKfbQQNp7stesSgbvdFj9zRAZ1h1GXYDgTnQYX8paMeos3nCUX1a7Lsza5v6ZtC6XoMmLJ",
  "key9": "2G2QB2j2rkX4C1zvWtEr58ZEJH7vdULDyUDf3i71GxPXJxUzVfgA787F1o332dBkQA4NYD9zpNvyad1Av91GTyYF",
  "key10": "4DMr6CFuUSwPQ3QUTUN2VB352pDeL5gcNsugSoMpyxWWYYfWmRd5r9x9x1k72Cy9P3W8k7LvYcyW1fqDfNhJVB7e",
  "key11": "5KkWKhU4784hDTB5EGqvRWHtT9hWEsK2A3oroMASLp12e9Lhrgkz5g85zxiqyEV1YH9N1ghnZsBhYo9MRwquRAsc",
  "key12": "4xPDPhzHuYyaCE2heoxWJ2qQti3vph1WtV3bM9ESuqrMFXk7Uox2picN2n2nGyBFENbXH7T1rFr49oYgnrbVuRfC",
  "key13": "vsoydWicju1zXWfz8GLeQsu5jsHc5CWrWFQ9PPqU3ZBvxxC2D9tBLG5AwyGFua31DyWGmVWhFJprF1dCGZ65fG3",
  "key14": "3kTrA2p8RP7i28pwkVorChAJMTQPJczswz6k4NVrPMhWaD5XtfYxfYGJpYAuyGW4wjVS2f3nvP5JSyvtXR217os6",
  "key15": "2QBjzJAnTD6JQikVmfMb5gL7hHpXDmVsA4xNvnRBG9sr7HqwEHv2vBnz4hVmRAaYMvwJgfW71JVQFgKYNcCJjPeD",
  "key16": "2UVQBjH5eQE7cb3GveGyPavtAXAzckUTJvwbju4zzzyUc3JZ4UYcUm1sRipwzhWZE7J9bQUw8pnnqcmT2xgZkp5q",
  "key17": "5PNgLEejUWiX2PzJyvEmRKXfUQQjrh5nvtp1Fd2oScQnbQDaEeNAYnqe162A5xwP5uMxNetbDRFQraSZD8ssS4RJ",
  "key18": "5A42z3ZCBnm7qqfDRDuebpg7TtD8widVDQJfTHy3PavKycdJ75pLdn4EeshivgErR2hvNK4XN5DJsZHKCFVBYaax",
  "key19": "3JkhK9PNk126mMdCNUvC9UEqoNo6G2pRhoigrdYcPoGMzUkTARcYfoVsWTt19YvtcUXafFA9vBtmrScBGZB1AJJ2",
  "key20": "2UrseCAU7toF8gPp7zQeJ2r7h3vLD5XzpQu3HSB5omMsWk3R6WpfebVWy3WaXU4HT3epUADJEaGHqEDTqbr7GYa7",
  "key21": "2fg5iwBnfp6w3zFQsWfpr7o1YLPXVYH3cLKSfzVCBVdDd1MBXahh392qM4n9q96GhK7bPcjsUxg1DxMstM5fkbbk",
  "key22": "2nnawmeuxqwJkrHUDR5Rp6MuNfddo3WSgYVsiuGBeUF1XhUfbTw9dCgTaEicFki8weYV46LGnMWmFCLew5fPvtz4",
  "key23": "4hEDYfYzHgzyBTB8k1SFwafU2BRPDAFtEHqkaVMzw5yeCzWFWqdj4e3ToPWyDVaNKTgHg1wVHoD64CpyZ6S4iMut",
  "key24": "3ohafdHFKC1dbtUdEq3YXtDwmyW68u2rZQVpNYCxqz4EoyeQphJADWNRiYWnAteN68bX8LL19kNcVKUpUoB3jXoC",
  "key25": "5zJod4jx4j6vyREv47thEJgTHDEbGABxeYB2bXg6vwLhuEZw5TYRG5zTaPRY7TXh4UDcA7LLwx6NLZiXKkjzk3x7",
  "key26": "27FhjvUsiSYEzHSGb2SXTPN7u6bDCqE6e2KJyaLzEQckZoKKTsMdkAuGY6WoXgwgWqPBA1AgYwauFXbUDxUKz6Zb",
  "key27": "4s6BErLRHh6LcgfybHN2uGnk8vNvdPmo8rUrDtsLmjB2MsaWS7cRcguAQdeykThB2dmPkbcXtr3rdSrDgw59eYRw",
  "key28": "2uXxYdwnpMMKvcg4GTz8GsRmzpxF4qUni6d6F7WY3hYc3uUtZbGRxSUn5UM4Btndp7qJdivKB8KXqYKs31z2a7AR",
  "key29": "4Fpw9aLnWTu9s62PpkVatTaXKib7Mp3ASdAfP5zeTUSCm6BekYNwkPgbEEqWe6k4SHMKdDjVQtsemreSBEtUyK12",
  "key30": "2wArrxbuVgRL6Lwq4o429Xb94LWHiBtSku2SX3cz7B5jSdPXd9ZzShGnXDvPuCc5KsoRFBLdKcPc9zsb2e4axTb9",
  "key31": "48pzhJsgcM2k7MMYLYpf2DCLuzcgLAMwxFuCHTqSk1w5nSyP6VexuF5SAW1ZV1HYdzYHpZRXVMkgW2DWwrk62qgd",
  "key32": "yXVhWQxecDnobrQDsms4S4DBymACWHPXpziprkWFFXKVnUyiHqkZtgnjp32jqBW6cj5EkdLryik6rAUQWbJJtmH",
  "key33": "5xKmgWTdWH9Bb3dPed3ugzvjrAcSHwyw8XCW56C9ttwudF8zRDikoGhUgQaqmwm4ay7ZbT4kJ7xq1nubhFtpWFAX",
  "key34": "2xTdbnZ1NqPGMg6Nn9pFXFz6Le9WNXnqu1L1uKbjhUgq7BquLPo5poWaZAy5H9Bm4G2Bq4HwVv2yTXb5QXrfzWRV",
  "key35": "5ZaxWMEQ96xFhoujT2VRtAJmbFXLNBfzqEFBro4tfv9TJvnAcBMU1faagMyqkw6KSDbQyB8opdcMEhxZ4jpbyUHY"
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
