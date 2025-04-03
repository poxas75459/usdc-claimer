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
    "4qVXPBvByT9q89hSCETyoPcJ7VndTrb8XcaQAyGd31XkXRjni8ZvE6EWSEUJk7MHzL811U6g4A47z37SWssFkvaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZUodPvcWBuANFYa2HAoXP9rBriP6uCB1r8m4i4Vj7JSRsc6YVxM3EQCopD8UFoM5vTSLgmUxRpUGnx27voSwzNS",
  "key1": "3x2aZzeiQnMRJ6kwG5dTshscTSeE7ZRKdsT7VRNqKTpbFUkitKDbo31e6YRkHFpFBAKjT82MhYtcVz3P8SQeAbCV",
  "key2": "d5FWGx4JDoeAieXH6LMgzXm2g6RSV3GYwLbRwJciLEChHo5NK2pSTkGhHkZ95aCbqSeB5pcnvCn1wW86rEEEtgL",
  "key3": "2CecTdBWqzBS7JyNXkNv4nNdJ3KXTVKjHHyRAM69d55jeNqwacUVhDiHsgXNDJRUBmwCH9MMHq2Rf2xvRgoVzCnw",
  "key4": "3pEaQymeQ2R4fw36FLkL6PjCZxiVDGDHKs4ewmWJjf4CcN1h9BvoRans4i4phpUUMyzxtWbxW6UPia5KS4pLV2wD",
  "key5": "2UPUHvgoDKAyTvY6wfBopDWGMwbKuDWF4d5k3fadZHZwzHfBwMJiuyHZFAPz7JUyiUbBqAy8MHFm2KZKn14bks7m",
  "key6": "3w7pqCeeveJCsEM5iAFyvEjZRgctozb3yWfUUwHCU25Bg2m487tLS7MZmxyfneh9QkVYbqLQRaTWcPQ48abPJhpv",
  "key7": "3MNQDTg6dFEKqPGRNmpuP5ivTxMGLb355TtFEd9pwRkPQwLTEWWuKaWHsNUbACy2AstU4GZnQfcDkAVQMLFVy8k2",
  "key8": "2B2Xmph3MnvQzvHzZRK8oTsgYoBbsS3wqxrqAq69XHEohVJmSfe5TD1PrjHj1hmhe8zo2XhCPk3nWkLw2PR5stL6",
  "key9": "CeSG2pxGbYNAiV2CR2e6eHxB6vkckmAbNJj2VA96o6TnUjZVzoppEqSsmoGe4ZHqUSMr3qKeFHxC7Px4af3MPDV",
  "key10": "1HfyQbpZdTgsEXZbhWDC2Pyvq74fzMwCDkfAzfTdsdrUUrKkQBu76PBfFwFxnsoZ1jg9uD34T25xRFuQJCSDzgW",
  "key11": "33YfkuGgDnS9JDtSFEFki6W2VT1npVmz8uANkGQRXqAAr3Jk4JM1bb5MdCjaRHx7FLcQCh7ML8kmMWDa62zbqDEh",
  "key12": "23L8yjU8NkvimxMnyQ3XKguVnMHouKBi4iKivoA5rVQUZ49ntMrWofSHZCov69q58mBwYCJBBRThMWT9Zzminj9R",
  "key13": "2kPW7xcnHVsssTpBjNGAXdatk1YoGSxWZrrFqzxXwAPd7ghSzkQ4jdMP2JQeaYmQU5tvEzzf1MXFxYKjg3GV49u2",
  "key14": "4JuTx9Sx127DoHyGGE2trqJyHfdmfBXZPmuCDmsyxX9NPkYoYArMV3Ux6MWeZytirEufw4KTrEo673gCnZ8HYYxd",
  "key15": "9Pozz3ZaDRJLb6feKWGprEpDeWhYW5HxRqy74Yo2N8xo8suBDobj5KCrUjqu3hqo9nV6kKAsRwhcUQFnySTqutZ",
  "key16": "2tQB2QrJ9paTT5K5SAWbGv2Uw52L6WBCPQ3Ccc8Pk5bttHbK7dt3pagJj8dVKuLHGwDVn9Ezgv6sL9uzvYjyuN2b",
  "key17": "3JVGyGABxqVYgJPY1jjAQfryR3FmqS8xiD3CKWoEhXnLQAxsAGaiYTcfk1xshoWk7oGiEUKv2kWD8xZF4ySGhepj",
  "key18": "4ZS8FPTzhHShqMig51SW9oLBWjUskBhNNHndrj8xSzTpNahyG6e2yUakhjy6ZmNCLBKEs8SxXricwJKXRN5SJv1M",
  "key19": "2LrtMXxyKNb9q4WMiBERKrUVU56ASzG9EH9x5o696m7Ge9Mw54kW8J81aDXuc4vaauqfs8fzrZvhgqnrtrGn7nz2",
  "key20": "5PoxTrQch83Bhf7ozjYT7ZZW3tcLQp1GRqBpvtrKhYgKdbUpQbTXnGKfSg8UZvu72cgiTfXkm2Dr7FqyGjeU5P7u",
  "key21": "3iM8qomTpCUMrL85o3VJRJevDKsoeS5rtJykkhixAwitax72oY9SsNCHk3BBGdsvNqewKva7GHk9mYjeh6eh6jFT",
  "key22": "4ykw4r24xiqAWxnC6xBwxLFXDp6F7SutJM5aYo9G8ME1Ao6nDPnwhnErisC9JuykLct49ff8CT9HUNTYErJzkUmi",
  "key23": "Fgfse1xYr2v1xEWYpkmJQ7b5HawUGsoUqwtFVv1FLTAo7m756oT2fCD68XPTMo97EKtaEP4kyeSbPvu6UY4vhts",
  "key24": "4h6Cpa3qmqkznY7UB3Key5ein1VqTH1H486wGCVnZs5AXqudJX3uJVWS7Njd7yXYxTw3YqtuRoe4bDgKPx8GxFR5",
  "key25": "Pqni1MjoTMCkBxhUJabdKqaWp1qs8i4WgiAjDa5dLfo1KQem4zMtHymyKwzBj16NmyJfM8MiNcshy3tw3rB8Mn1",
  "key26": "6odNG6yT3PfTGFc5CDFc2vVdLDbbkcjotvTAyrThnxWQJe4zKgUYXuS6QNvsBgQ8qhGKmqZKR5kWvGLYvkWAVFE",
  "key27": "2fSiPFKXWuFJXaKFi8mAeMgrWgn1maYraRyAd43RaU86cAejNnoyq74YXkh9Ufqo1WhhU277fmtBm4MZJQkU5QCh",
  "key28": "3MPG5YesdmiCPTthtr5TkcEs49ZH9YbXzLT8aemBftSC7bWb3wR8BaranEEc93hKGdwsysc42vLQxFhAVH9fm5Jm",
  "key29": "65RfN8huTPtyopQzR5PPCMb4QRgHJ1dK5kN3s85TkSQy7Sk8XvhA1Y6ZRiaVvaXQjvfdAaRZV47GnCRPkBJEMJpf",
  "key30": "24dfRTbBb31gmfCVjExFhSf9GXvTXAUAADvEKpKaZP9JeqxaJTopjGNsvUEGULAK6unbBu1Y6DHc4CJUrQC9rXaQ",
  "key31": "7o6uwH6bewJWPGfnB9np8igMNUihGRBb2mcwrXegGC5zcboMaFaaMefThVY6n1ELC5qDyoLHc2dsLFZkZqEsY3v",
  "key32": "o9W6xXPYAC97iXoJmiHpeTBNci8V8hFJrhmYbEiGiz1Cn3zgwokcZK5Qfnfz6npxJUhdp6ZQ13qpPHPbpEkNM43",
  "key33": "5suHDUAzDZj52uMF54s2kivr49h6bbQa8sjwjsnybWVjzBXjeXQY1FCq6psQBjS8jmL8prpaG3qQX8PkxTtAftZn",
  "key34": "5bXKZUBbij4ePXh8i5tdt3349rRAV4VLBTkTMnvMmGXaBzvm3g9VqopzMfirhZRAsvyBrrex78W3DiUKBFXzGCzS",
  "key35": "5j7Ntwv5nPkC1kdkbXxg4EKy9W79ucxvKd18BSNPr4mWHEjabavjs4yhV9tPHDSuq7PTSa3wTZWjvYwqPz8yhyQr",
  "key36": "2oU3Q2Fhvo2GtXFyeNjnTpvswiV2n1oWRoMEooeihZgnPyto9dHHdR2DfMCDdazuREVNdSjVBjERGHAyoxQscoP6",
  "key37": "pkvZHmy2acZC7ujRNKxfU3yHYKbMAnS7bYNynXiuXJR4rF3A5afbZ1CzyMoa8cPHc56YMDtxhRpwksE5q3vQccg",
  "key38": "3XRmfBqkqy1ytw8qynQ7k6yfm48PzzQ4R2t3rumcz4SekmCzgN2DtNAVb4XAFWhvaUr2EaVRWhgA3zFSiWqwUJtD",
  "key39": "3tAdoEob2s8X4aHMwJX9iGmnFGAVVhJZwyzxZTQsgS7uKG3oWydC8XUpBL1vFknBTDimZsdTWCXycYuRrvHNSm6T",
  "key40": "7BJ9kcKpxi13YcEZNEx4e5pGBWShuESkxZBQkeL1a6ZvA3QCwtUx3DzCk6nRwpxPVUGjg8xwzh1kWK2bZv4Y5NE"
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
