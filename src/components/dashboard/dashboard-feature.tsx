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
    "4zn74ixPLhcYNXAcGZywXD9BJxUTZLoGME8xGabB4x4LAV49psC1pU5omXFXvky7MdvKioGiAep6HgdQCp5F8vKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jJMZGz2ZBS5nFqzdjdT413Gc9aqKy75ko3prZbfookYqvBsxrUW9E6tjfgUgf7JMnKV1U8HLYJX97mGFezPDhAJ",
  "key1": "2idbNQqGzxuwpcKRbERkMk6TBuiRxUY8ekakxCGrh6y2gzmyqjK4YR3cmBhdhWfBU7TLC7yQeb9Bkhw16HVsVCEG",
  "key2": "3UfgT9mAmpnSF4jXkB7CWyKZo6zJAsQpXNUCbkoSpaFX9YPf9p8UGqBQqbuPQWFxgGL9yKsE6S2QwPqBpxV3hxFZ",
  "key3": "2NodET4s4GEymyXXa32yRqAJQqxF1MMv1F37CTtVe18KzmwqKV39mpTSkjqaQvVcWyGesQ7Ziwg58BDrumjdaUPT",
  "key4": "24n8LX53hovpXo4ws2W7FFmxTRk9bSuww8avp498FwTKhUjifHuVyGVAGfdZd4QExz2a8DDk7jhYapxmFo4GorL1",
  "key5": "3DSmaBq7jJMoUfWxT5BMcz86XVkdGvSMJfZmTHPLHGzzYAPmePxPsB739bkWH2M1kbVZfPMty8qif1o1w9zr4ECH",
  "key6": "4CdYLLGk2XcnDK5Vr1pS9Uy8fu8F8ayBFoXb3XvLXQ9bJgab13H6z7e9eii9hZyBgRc2pKm9JRi2uuQfje5FL7xh",
  "key7": "ZRw4Q4NSUgKTMTuzLSeePwPFaUw1dac9KurUgxfQfsn132k5wbHUWMhUXMdAcfM99QPNtryE6oajiU2YAHaaB3j",
  "key8": "31H1yjVw7goHA64m9FrHsQfxKkwzgSbgCYJEhTaRkcvBxCibNeT3WrmG9aNugPiW7hGXn6QTEP5bBGKLgwFD4QML",
  "key9": "4VrngjrUy93sZHyXs18LSMHQegAisdKJULafTL7fuUPbe2QYz1oq7zWeSgEpKy369s3JPbkZffQZfzBfPnC7K8Ki",
  "key10": "3Tmk1FXnoNVyWXEpQHUq8tN5oyzEvBsyz3m6dHye3m7kLv6VYknpkwYc3etutUssYBrDR6JPjh3cAur3xmndbMKU",
  "key11": "4nsNkNCG6vNB1qnb8zwo1nGfxGHN6t5WbywMRry2uDAmWXM3eRTJK3o8Wr576BNmDwnYJfGA1GRei2kW7HU7ran3",
  "key12": "27vXDKiZBvBa1w1fyqZGvbY6P1yXJ8GMDLxkCbenuHWS1ukkZ7MuXJF2gcPPda6n8BK4juKz3uphmq3GwuMoHw1i",
  "key13": "4raZbgzTQ4aJsi2zhk97fWun9jqWYhL2XupNm2q7Gms2nfgiELie7nyrwj5BBZdwNwiQZXX1NYgwMHwtkjWQSRfT",
  "key14": "wYzAG5uvKEsL1jydp7f2Eb5Hmtycaod5k9SGAUXy1hSxjBwybvTgqzhqNbv2dPFjsxAxUki8sP2U2GyaSEyuGtK",
  "key15": "5piye5eL4hXwT3NpoJSzNYbv28nWoB6BtuZoLVZJ7rs27UiU7NsFKkuFtMHupUNX1XGGshAqFmpXDqFRvbA2GuqL",
  "key16": "4nn7uADrrrtJ1XxxtF9UNK7w52BD5AySP4tTbypc43LwWjquKz9RUA84cZJKzMQr62cP5Jz3bY4C2GK1TqqrGKBB",
  "key17": "3VzUTsZxcVLpbd8gMYSnxkshhkQXg1XJPhY5nNqoLhsFmkzwDz81Gdgq5XMFJqsA9oLtfSeHzmUSgvqbBw9Jg9kX",
  "key18": "TrDhnGHNtc8Yq5GKJskvFDjdsX54etnxtTAECzmthhPPezfUU4XWTBwhLZPwmzFyFJaJVpX1wVAm7jMJ3AY3fct",
  "key19": "3kL6wpX7BUuGtC7ba2c1BqYR8ii5P3MDR4tj4VUQcPRMKmEtNJp99mSnY7s4ok8c1E4rPQfo2HzKmncqXxdN6od4",
  "key20": "2u2C6WYCQ5zh2EKgUVr4n1C59qMD23zMMem2J3vCkicxpZPiHoYhjieBrvKYKpF52u541z8rVaNudi2DuT4rkwBf",
  "key21": "57ovRxNuAuacpTdoLNM3qvQPcyU1VVNd19duvYigzuKWHdFNfS2wSqSgcDG5gw783a74mKoUeLCSAuEGdnvVtDrk",
  "key22": "3dwBDP6b5yAV3TkQJ7ckf1QWpyiXiAT4Nzk1QgtLz9NGeE2W8iA6DsYj6igKtKGfudbMW38E5WWvMcmJiqNAiGSc",
  "key23": "44pVGoUj9iK87XGvBVjtTD245j2ANBDCgQ9Jitof9BNWZArFEx3dDKyr6fTVUYD3D2RKXQVXfejAPCB9sCpGK38a",
  "key24": "GLfkDqzWAMNV5xLsh6fEhFjX2LujLXAQySYSHNUjAWRcEf1U7ufyru1GjWsM1rMUN7r28XLL7uW1uDk27nFsq14",
  "key25": "5ytkuLHBnDBKy2h4QZMJQcCZh5iWQD8c5wR2MUcYy79E2A2A45zbAgXK5SpnfLbAq8UzvXgf84uxv1Lbj4URTLcg",
  "key26": "3vyHD6WGPzNBLEfcdD1iWnvBreFSWFVS6UsJF9ueYwr7pQLesotA5RfVWdNZPcnWcYFNCgEXR8oe79zqTEywij2F",
  "key27": "5XRkpz9c7qDCF1kdvcV6k3NnVHU9SfaKpmprSLN55SiGQZP3ad2j8PXJzWjB7eyeJp9Fv18ccfFFC7CFCXetWqE9",
  "key28": "5FJjQBXBBBxqnCBkLZzJyS5Ga7EbhQMgbkyf8CNLpaCcYP7nksk7hxGBCz73RC8nCg9Wdz4ZoacaVYMbWzMni6TL",
  "key29": "4rfNn9KLA8NuZnZjaTb8prXmGKQP7LVZKkgCNDLtZWZBFtXjSB5m6oZR73KCmbhzGB6SAG5Y7BpYMaDrRCsXJmCq",
  "key30": "23sYotCUEBeLQftELrMpNEcirZwDpFP6hNaEAGMRzb9ynpNGYv7u5d3k4oCkekz6nxvED8bHQdETk6PPqEJVjxRj",
  "key31": "cSzC2khW5Xy93NGGHKF5ArHZdqhhi67SF8SmacLQZPzKBsiXBtLJRgvwmts9DK4ZCupY6rMWUtZzs7DJQpt1cSA",
  "key32": "4dH7sHJJkR2c7pxhZfmUkRFCf6ehM5UmdWSjthWKFschN5V2nr2MHH1P4vAZJkbT4AtRez1jEmp2rmztJF4Eimtn",
  "key33": "nPAL4H5MtuGJ7Y2L6BdfSqpUhn6JSufV8zp7E2P3BPqVVHciY64RsHh1b9ZgPZ6DuT5j2ALUJ1SPEyStqr8gjDj"
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
