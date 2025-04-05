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
    "4p41NQj95icabdZ3UnAaUgdHm7gLBa6NjLqw42JsFuThi1wH1eWoVQF3fR7EonKhr5WDFVPJCkqQnx8AjpbsCHne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sMmHyn3ibo5YrwFM7ktyi1LFfFyrojwEMJfHyhtK7fNN8VeJCxYXjs2aydEG17c5i7FDtPZY2rTwEffZnioUu3i",
  "key1": "4PPcY5e8NHPo6aQuqMqperTchiZVCAqPE6jqQezCnyRJwLFWF1B3tuUSQNLx3BeABbQ8CwypF8yqYJVDYG2XYYUV",
  "key2": "4uoywNCm5zedkvgp5vmWpgKXn9K5Tnnd49zZcQjrwnxrtZ47xLYcKiH3Kh5iqszu7vUf5iyo7S3FQRLm8jtKsVoz",
  "key3": "2FaSruAKeDgYTGb1Xqcs3BobXp3mna8p5PSvqCfw7WYcbV27w28WtP6AptL2vYABHt6pZcC7zbiE4CPnwWAu79xN",
  "key4": "2kpEx6AHFKfhBHENKX7kY2Z5yNhpSgau4RgsugwSCZnMNrVbk8cYd34DCPdRN36Mk3pBSGxcQCLtGshaC3xTTxMy",
  "key5": "2d8rxH9cR1UdMgxsjGDWFdDKkmoc1a87yw66WnAss651sbSDytxgscrAPNzf7CFfkKBwFdJAJcQYnHHC2nXSa9Nm",
  "key6": "3AYa3XpaKREyHXpztbCeJokUtSDvmsnbSuaxW6h1CEVrQwZLNAA5wMxhkL5R8PZ9mJPaAWcxYkc1aJwumUnQGz6m",
  "key7": "2eA3wnAZWM3CCSjekvQ27RGLoDSrXyQJqdBYg9SAPt5v51xXxbSHBeac4uVutNSpRZeiUvoH9BLj7Xm15d2wKq8y",
  "key8": "BDCNAwkugMKuJjbFV9A4gRkWgwf3MQH5dDis3eHjeePLqEL3LfYAbQJ82Rf2Z6fdy5CH6gU1Zf9ce2TW8HAx38y",
  "key9": "2LqbqyQd4PX2CXjVXuBP63ygLQhCm2JtVnUMEo4cgJF9ZHdukumDyJJqxcoXLnCN6MGRLr388Q5wGP4tEx7Zo77r",
  "key10": "53JrDQ1HobeJm2vHBoiVUhRFAddqtTzkxrpKqzLbwXSAjdxdTinsTtwp6G4ms42YzarE26xN9Ne3Tnjat3ypUHkd",
  "key11": "2podXrj1kDWp5wFLA6enhYxYWEYjnyNTUEW3nD9CpQbLgAC4Nvk1vAUsSpL2bb5g7uUQF2HDp3CccjEe5MZm1zp6",
  "key12": "54wzt4NgF3ibEpruW1aaCqhtrHN2w5MtMqftSWv2PQQn8FvnTSZqdfUiBFsmo9FpRwFj2RwFNZVZEi9vB9is8HGJ",
  "key13": "2Ztn9PeBimzdaJgo1ZEJtzomm64V4yoFzKuDyiEbsTNiKgydSVBq7gTr6xG7GQS8GfNVAMF4tzYB2MG84o7bCK2C",
  "key14": "2AqStdWgbKVhGs3uPku2bpGJdJbe93fxnz8kEjWfSgNW9SLCyMzVJWPyyFF8RHgpAijVG1UiFXRWxsD8rjHNB8y3",
  "key15": "kEANr2t5iVP3fMuXQ5awDofL82M2c9EQ22pBPRhXnm5qFN5rVtpF8Vk1MVvHyALxbxwuUhyKuiHTB4717xKpC7h",
  "key16": "2korN2EdwMq6jgUrq61D98s1RuddNYLLrfw89puUE2WJUJqsm4MnwrFnSwRUt7YVe1PPFPwBsDt4QJRLCC5eZJmU",
  "key17": "2tLw5xFiJSrdtiBXVtwgxQbB5x6NiyQfmEgg23tZm1DPFsynHkNakh3aNCpcLouefzfVhRjUPBh9gZ9Wkhmvsu8T",
  "key18": "59FU49EAmp4oRLkvB6HTzwmYxNQSZZtEDkwa1oFFwzNPpPijHKpQBd695d9nrsLyjiTSBgH4bFU3nyyMexFBBzRb",
  "key19": "3sepQK1rspiPWtKmTULJyxPy7WwfVZ39UMyXVzbiKSXsfS4eS2oxHCEZ8s95od9tP498vAXTWUCtZgZA6pfDke5",
  "key20": "5xVQrg8mPcp5C9kAynMgcGMtJWXTMuL7UGQaiuGBoAf7zgYRwntbMMcmLsptFm5rUw6qWFNPUr7h7cvExxXLBN1V",
  "key21": "2KAWxfgDuc6HTRYzoywWNtGXHYxtTRa3TXDwB5BV2aTyXsAA24HV2phtSeXmj6tr3uFyo8WhX1HYSniJiXAWiwSE",
  "key22": "5K3TA2UnDKywCgYsEdrYLySY7qf4eg4qKEe1kpKZu5X8p1hc23k43ri3tPaD3yDSiB2kuYNtzBdrfu4rxsGHSX12",
  "key23": "WRAEGqHr1XDqZoYb7PPatiYxJb16bDTBTPu14zyDNTfs4i9MKcSrLAc5itguGER977gmhkYQ4qRgT9whzw7FBE4",
  "key24": "S4VP7SQqdTsDzHWhf6WukLGy4uRdnT2QYbVjNG6tmitw3jhzHSy5TM4hyThAvdmhHnDMv2HVCHtyb8NRxQmWQMT",
  "key25": "4jfF7eLRQrgjGMnmQeCyFSsiTqKZiUGGzUfdPhx9cpUfnXS29w59YrAo5fHq2iRwugzrYLjvwYrHjywNUufjrYNq",
  "key26": "45obYCaYToqfGA5fvtG2fMPei7TSYm9LmtxvFdGChyGfJSgywW7CmBNyBqqpJv1JJyjeNrnCU57Eh2D767QYj4dD",
  "key27": "4AxNccausFhaxzRnZ6Vdp35Ca7fTFNxZ1azMpwknBUEK5iNSBEPYvnGkCr4R3gjvxT3D1bh3FH3xvcAxghUQzNsz",
  "key28": "5sfytmBDyB1X5sbY59Qw12RgshRvXc9zQ12JhgVATDQyJCoZaCvrUR84jW43GKu7m14mknJTL3WdshF8X6qRsadX"
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
