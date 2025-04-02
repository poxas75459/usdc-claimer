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
    "5hkwuqnyesGFz4GiTWEpu6n2wvhK96RKDHJsaoQs9dkFgUshuzceJn1JCuVAFq8ZQviRrv8mdog4VYR1qcDCGpjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eRYqZHmsEtKuX32hymUR6pw7go3bMBSjE3cBofkA3nfwfF695HtfuwozGDz4yDYEUe5tX4wK4tACzYjjSZiv8EB",
  "key1": "4TDGybYnjE5nBEZyhfWAPAqCzWCw6dFUGEtvZ8yihnDG9kiYirjhD5oxFKSNXeWg8pjEsW1tJpwQGNLkrNJ9awgJ",
  "key2": "2N6pntUhWUZ6asL1HsaQVsoATyw84minHWQhCqAezG8AkTsGukAnPH3RrXTQx1ydjMcNTspH4gAYguxwLA8S9VM7",
  "key3": "P8h6b3Zc5HCUjmHby1Z4mY4c8Q2YmV23gkyXiKx1G1A23HeYjGeCUD6EaXYVYRWK6ogsiSWoYMHYccGvT9dDjwC",
  "key4": "3HFcjXRkpmuQhC44zE9ydznkEyvndrMfAt5oHdh45pARC1c12qPYjhT2sG9yxXd36UQFXNRRDqvyFEZWB9YwAiBa",
  "key5": "2yqK9mXfP47rQ1zQVTjSbnU4VULKmTFzZafEZAr5U7W9zS53hto2TauZ4z17HDzw8zqPe4EXV5qUbEFqQpErWRjH",
  "key6": "3zBQL8HeRuNR2TxPmSQZFWuDAiprkKKxuDWS2rUiQxAdwTfn99kzEg66cbE5khJKsVHF72sPWwNDt8EWnvPntoi9",
  "key7": "4jVsqeUuL3DLywcvYQdaeLMrivGbLGqcWYv7ygvuzRhVZcqWJi5ZMDMQDsGNjBj2jy1BJQMZ9wenCmbnyXChTqyQ",
  "key8": "5kBE8kSUuMC4ALWTf2TM8jPdChByUyJjrA42pcHvo2ctkWqjGtAVa2QMBCovv4yrU6rGuqFVutas8c9bKq9JBHsX",
  "key9": "rTHUSpAtaMPnAWHi1uyH1YTREMgGxWNjufZ9Jyjt2qTjyohDzFHZZvQ43ZxzeA5sH9iZVUoEUsQnyjkkJCMuAG4",
  "key10": "85VKcgkmDqSx4SL8LALTBXUZmEtKhjEiSD1RJBB3ysA34RDocotVxqZC1uDa2Cynz6YkTYh5JyfYFHGtJQdZAkA",
  "key11": "2hay7WARCgjY2yhTKrR1BBDa8zu4umfpxN6LzeGFxHrKiCcT3yPD5hEyEN3ucZFFidjKZ4URXbcWvN7w2HfFThKZ",
  "key12": "5EpKtXPJnXzMdWJsSTYS6G67sZoH5wTFA5LKfBRBpBtvEfRE8NoEmPhcEqqWQ4kYSAYXy8HV9V8K14qxnPLvFEUg",
  "key13": "MsAYPDmnrjzBLokcfGYPdRmtmXdM9CaUttUXZm8NLjjHsCSi7WbtEpAjHWrn7oMytohufftqS9EGSVGWaki9Lss",
  "key14": "61McvexTe2qHX4tDGfCDo6D4p99NY67oj3Ns7bJTwDZZh8n5eMhymgZrVws89vJkxhpbnJkR9SKXfxcA6bJpEmpm",
  "key15": "2Vziz5CJStNK8PfhBrAaE5rbCvUhLqzVTLQiJd1Yz2hunhTNdWZU6NKHauxWbWqYxEVqNUWvDu8ZimY3bDpkoYne",
  "key16": "39JVgoFQx5RQBpZ5fq437vvTkL9YZSqj22HBMD8ua2wD4Ce1usHQnZCfyzfXY5pEoY1u2JVMzCnU3ki6cmvPj4Ev",
  "key17": "5J9n5UB5WfK6kuXEiFGvFjRV8wNjSBk5bcj9PhYXQjMFzkxdp8XQ2uG9EeSyEjNgE3stW9SGdiebL3shoNXTuDg6",
  "key18": "2oX3jcELWppZDRUKJeWgSA35aAN6D8asjZyQPhMFDFcpM7oPuDjNGHEGkhPy2VEwBF6obqU1rSbRznFm5oR7Lsak",
  "key19": "3zhtU81motK2PYSVDfesKkSyZxh7gVimeUUeUD3gspqtcwFCoPeQs9jqugeBpYGdpGTPeSAnh9DWRErNXe9zWu4L",
  "key20": "2bk4dTqBHG477e4evR4L5A59hYkNmMitGePD4Soesr72eHYu6RdYjGreT1dFF8zbjQGbukxu2Pq4nvcZn2tuTrYy",
  "key21": "82zMoUM13BUHAXT5rD7cekRCKJaecJH4XaEJoahpkacAfFEuzg1m914T7jzn5oVtMtRb7FWhLSbVbD8d5hsVvtX",
  "key22": "iJgbcmk45fXcoLMgS34x8dkHcHbRRhf8mUQm9JwjeSxCLPc8fbG8ks3omg9CXtzqJLnrNm6fwboyy8TzuCL1gmM",
  "key23": "3HeNFGbHYEX3nDRz9HLLYab61nPdyNRNJ2PadKkH13vpVtriDA2FwW9AGZ83skmB8YhPyyZUnWhHDM4euGqxkRPk",
  "key24": "3QpStZ8BoeBtwnAH2kdPALskWyfcnKTyEB83h4292aX4pdwHzVkRgaaQzobrL4THE25q57fQ7G2deJDXJ4d6CkmE",
  "key25": "52SBysJFRBMyGrRzH4FSAJ7WveRaBFLHS2UFeh96wRSzUFik7Shqja4moJHia314uiMGEnDNZLyBJBVVdbU1Daih",
  "key26": "Dcz4UM8Xbajd6U5pxohrtbzoNi6BbSqbyJCXoc6RZYymR6oM3GEHCcndw9LriJorvzf7HioDHLXpDzo1HC72kmj",
  "key27": "3jVFquTWPxeCFzjLTFRuW62QWzTXuKbrzYDJbmp13PP2n3KjSBHkKp29iguJwS61tWXMSjXxaqAeZPhzutDWEane",
  "key28": "ubNZJ38gxCwBrtFUtdCU2RVGfrLNcCTU3qt5ox2azNyMDeymA6WZtNg9MNkPgaUbVGb17DFjGQFYHrYEyAyB7Ge",
  "key29": "6621Y4pYabEhzJvuK8ZvZHf8GGVnAoThVnGuVfu21xER7UZznaaoW9etK5ZJVs1ZPkwtLQkKMj31KB1rusEwMSm",
  "key30": "3P9PJd8JqQzLf5oPsKUP8gfpjbM6XT5CoC2cGxkDHRgC5dd8CCic5DE55m228hVLYEvZMXG86aFaWDx3hUmrUtLt"
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
