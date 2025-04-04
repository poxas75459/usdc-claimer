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
    "2iocb3KquAeGcQrWoHrFsJGuEo9kCmrQHRZBKLtzyVCz3tDUW9AwVgHdAo1FnztRgdETCiCYCJ89Wz1ZGkHFEj7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i5iSVbtNNbE4StdcCkmjJTaA3mjoVUQ4ZMQ4nbC7Qr2kdhnvd36eUTwDi2GQY33qJW5DggKLj37bPL62UiPKz4Q",
  "key1": "4g8CVMnCeAjxP8SZXpssny9ZqZ9bcF5wB8cyAQKsSGY91q2YQyh4jGyurwwQoze692YphgLHCxnYCpas7zjxnXr9",
  "key2": "5Xyzp3EX9kyeYAVzq2fZEDnXJF5J2W8UoeDTFBQh5J3UzB6u3ZksQJAoXEt5SnviwsK4dnA7hYK9cAAZUToQDL1e",
  "key3": "WStLCzdRpGWZvrGanirHY1yE7Loy5KzHXZo7kE2didbpGiiw7TX6xFytKQRLyQfaKpUe29MkWqJQGWdkTToPP1P",
  "key4": "4v5zr1TTmyf7gUoyGdSZc64W67DwQvc8a2W4Ak7NSHZ1TQB69dVVkyiGy762Y4R1SnUKgKKSfR7CxDPUB8PJvNqc",
  "key5": "2xhhv5GV92WZzgy2ywJx1F6QHvouP2sQZJhbhhB4iDB18idmb7poaxqMyL8jfmrbLxTdQiwCECXondRFRWwjZPuM",
  "key6": "2V2kAfTPeDB2Hn7X1yAkW1Tg6wFtrZXqeDMY52gttNNZUXF2zAzL7vuMqC7u4xjWxsddPsagaoTUTBzZ3EMjicuz",
  "key7": "yqZdL61q817JQaHk8jrkwGUZGoBuppvq3J36ZivudW5SBahfQev98vEbxC1LsNxtnr12Cz9ZyPd3GPFKXjQAL7f",
  "key8": "3pZ7qowVHbJSsT8DPEXZ88byPXqq3DTXaR24jfznP2pgPTb26K12ga9U9Zu9MHKQJjC9SKHDuNaJYp9fgNQXUAW8",
  "key9": "4ten7Fw8kRCnr8B9B7j1a4R44Ssy87is2Q5bxXQbFK6RgbWWxyVLYU7Q8JjyddsU4knJBwuTUR1bCCq6vL7SjzJg",
  "key10": "4HcWsvvHDqjXL1tvAJthJLFiBTjow3Edx537taSqEqRebnQvK4dcvDY4bmqkKEM4rzWC1mAXEiDYeAtdYcDKXUpC",
  "key11": "2DdqBex23ZzVmaVKXALq16St1uVG5CeitTqwV4LR2ZeBH536VW6EK6X2bZVs655H55UsAbABgVJeXaVV6MQZJ8Js",
  "key12": "UG5fEYDzS8h2nzVsvefHj9Q4HJPs1WCeHGCRYR2ufW7sgmGZrLQBxqARMHt21sphcRgm4ceDNokpehKL6dkrvJz",
  "key13": "Aq2X7GJUhuHv3weckPJsD47kDgvCYxG14vvqFEjrhRZ1cLK3AKk2eWzy8HVyGgeRpubppt458wTUvqWCncZ4Lsw",
  "key14": "2PceEUMLqSkwvR3JspKRi6riTTJEr6AbJ7sDF232yAFHpBt1FGkrHvFEZcdBrnnMHtaXcbw8WRwdpgsMJYdpsfRi",
  "key15": "5Ukuut7SQQa5jEnMi8fogmrwDVRNWrEBLnG4ijH6P5qymoqAH8qgtpCtvSLW5qSth8WRHhxkpd3vWVEBRbMs5JFa",
  "key16": "4Bdy6JWMD1iqgcjdXfPV8n6FDuQ8GjFYLiandbHkUzL2tGeJG56yX3gjuLeU1hzoW1wyTGx8p2wvTvQGRS4PfG47",
  "key17": "48c7TFuruf7GcEVXiDJesZkKnjS6TbkxEdA1FtryTLLG4vLcsV8fDZhxmfamXJhj3xcxrcXtthUt66kinLcxPagk",
  "key18": "3QvsSxkUjGE7CHacshjTXzhgpKRhDCC5Qn8WG8BSYsLn5LhjLCpnpVmWsMH2VENLfxHeGs2GaC6Y6vUZMyqKvurN",
  "key19": "BG4nVyt2MhVtnGtRr7NzExRxBLVeywxXBxm54JLm2dMDms1rgkYYN2iMxcu6S3uXmfKcNhXFC9z81aR246jKb8N",
  "key20": "52AqAEVvZjvM6fan4gnssNdT655uyhenEtDNxwBubvpRYgufWBev7oSKiCqP7xkjPyuhLoMszMExknN5Hd7mQoH1",
  "key21": "5mS3fxzavXrTMwSEdcqCpu9rmxFoq7rfdHpnBPEvgrcVeJfiCbscPHETmjbrN7opokdrdHk1jLgLB1daAweyXAjK",
  "key22": "5QJvvwW6XU7KJd3xVfYdddJJp53dJjCYk1N7tfRpPmyuKHCwpE1xT6jf9KNjqwhNxtHsUvYx6KeVm5SmY5tZS3Q4",
  "key23": "SiAGdCXz55QS3ZDzeHWNvgMC4HJfwAobKBgd572FSU9DCUPfYpoEvgwvSmTmY9AR3bgTxTtkgVkTmyrBysziyqM",
  "key24": "5rrvv9icUpAYVn9mqfGGeWDbL4CMn5wBvUpBRGR43tJDRcyqcL4mYMECeQutTCMcpzcooXPAwWcL87UxAi9qENSB",
  "key25": "ftZSEJMGs1Z9NBUmY213meQGRGvwtrXY3vUNoMdhTEAoxZfec3SNu9k2MnQosAkkZk6AS5HZQv4kgRzfiaHQBHc",
  "key26": "36fVRKUovAG5QjjjoCfPYjAPZQgDJYRSdcGPdpGKrToNEHXdTBEYFUBxDLeiszffZzMrBxAzei6jxHSKiy6uLrxo",
  "key27": "5QGkeeswfSZtUGZTgWnuhsug2obshFsdaZC1jW5V62e1WZrWYSXhyshnjZrnSc9kJFiQRtga48c9dsXzAistBRnk",
  "key28": "5v5rYFz9q5PqpSy5f3dToKrhZrovtUmorQjjdvCMzJDsb79jMGzB7STDVfdJmvvJrcEjG6L6ZBGQ83wXfHCqthKr",
  "key29": "4m2jWxah3qw1EvxeUCTLHq5E3jSKYVwJBZM5jHrf3b6TJKmyhUEb1FaYEarUpd4u8AZ1gRtUqXQjCQu5mt6JtxcC",
  "key30": "4WT4fjSyFg1kQSBDByBAxj3ReUfuJZFVFCNEaKuRapF5j4bUoqgfFRstaZhF2ZXGsqeVcVtMagXt4RAP9isrvhqu"
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
