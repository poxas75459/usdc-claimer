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
    "4f5FjnVom2L9F1vmFAvjf8RWMimrZsjm3MK68Z5wEPrbszW3pvmWRLtiXrXStHiBjJiVWMDLgekSd1gEyaBYKzvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XNeLTwo3kzFJyJ4oZDqFMMwgEKPHUcL1ZhFVG4ZgqLe5etd26dqhPNY93YbxghMFUuxQkfCZYAWaPoxyd6qkdMB",
  "key1": "4dSTm1oKeypnJbxJksnrSTieLHRCKrFWSYoqFAoej7YhdLA4VSpfU1zgrMAyVJxHfQgLwUeFQ5VKBCFS7bvcseL",
  "key2": "5ZXh8usvF7Cy9BHdnoSfCaX2HGVmgpLMoKzpPGG4mXeCfNTKGiPqPp8N55U7bAx3Ry6L7ASduh3bJsSG7twdBRKJ",
  "key3": "kvcFq81cXe27hVKjuKViQnrPwsxzM4LcKmSYLmuUm6kHcuUf1mFkUo9jUURJt5Ms9TW4fSCkQaHJvCuD5DWnAFJ",
  "key4": "22RACkJE4DJsnnJUz2AknNs7LQMvgFLzAiBLsYjsmCgjL8uDRgu3KqH7FBVU4hpxWmvRS35EsrNtp9LVpzNwszU2",
  "key5": "3yRVBv7Sn911BTyrtPLfJC5WeF3w57rUgzX7mPZyoyLwgSF5HCvdi1XK6ceKRKP7fFq73WXd7bME9VYk82WjPHvK",
  "key6": "2oV7etyHcUK6YJLgUadVsbxCAkLrrHtHM14piGVnkL4WNnnBaDNKPDppUWFtFgzomyoapXVxnUnY2qBHsHbn5qaS",
  "key7": "Nn7AmWif4RefSAGZ1PzGv2okkVAdEW2TmFRtTkBrRVtUiNfmN9gqmswRv7swS7f3ePEWx47qjMVuwjTGdp2LKoy",
  "key8": "5vPufSnRRVRALeWNqFNaa7Y9FsmSRjvBNRJb1EzYprS5mkBYawWeto3fMmHReqDigGitXpVvmh8V6UskxtA8aT3v",
  "key9": "2LbwZ64PzkaMjGsreF9rg5GeNapWDUYot8hn8wF7fd5j3tUsSaTzxBRG2hZ1JDyi73Qhh6gngCFaBAcdVC4DzddP",
  "key10": "634Ra6bCqiUPvAHpwKuVSu2pgXRCLNkz1S1pvisdiASJubwV7irKJQruagsoNGLfVsyK3D4n7kn842RjgeDouw6i",
  "key11": "3dHHoVmpi3aGoRQKc1xwKq71stGRjvXjYECcAHFzh6zLpLdfRPXXhjXw3AuDi3t6LBK9FpDUoe9Dd18oB1bgUsTs",
  "key12": "5utLZGbjwcProoX9BxVKqZx8Q7yevhmkQcJ3PsDyvSKCUdvZr4b9BkpQo6tDVy8h73JsHxWtNKGYij33T4CRUeXt",
  "key13": "RH8WtSBBR24keK7JfoQRoKTxSJu1ATViWuZ6tdsn47Jr1rXUtvtyuHVGPkysZdrtR1zxi4p1XfMu7QWUbNWAhFU",
  "key14": "4PMgy6jQa9WUuPN3ki6795wQPMktpqA5m9GQymK9u2QRRfaRL7PyLZWZVW6XkVRELzVrg5ELYruwizto5L77ebaZ",
  "key15": "65pDCCv63mnPHnskuTRkokaVjNXqyqPAnEKaJTmbHYPtmz4Gkt7hQUxQL8TuUN49BtPh65UAQtrtJQuFy71qkPdr",
  "key16": "2hCTctzgZ9d7aR6p7Gei1TgLaEFxnugBWg4PcDPXkN4gEdanqXV5TocYvJZ5BGy6h5249XGyH8He44axMWrzbowT",
  "key17": "cWkZp9VnmZV6h9dpFaMVZXVdiCKs55exB3ReFKQvMZUnj3rFWWErtWxwN9nqfafzUpc52TnhnT8GaNGWHUSVV3m",
  "key18": "4CSDiqRmjfngMLFweMMJZCipzvKzGUH6881Cfi5nwWAcNC4doGy7kwu7J237YoqqRBQcPRvbdwokQtQLNQ6d3gWh",
  "key19": "3gVnmHBjLV8y1MhNRHxJDSsgPFGnDHhaBcqtZke8T9MLr5CWQTGpXhPnkecA5zuyUwhUEdWeYCpyK6Jp9xnky8Wg",
  "key20": "ek539SNgCNjMC3zcVSZAU4t7mNqjyPDvWh3WyxboVZk9JEYYX37q4s1Nmn4sDCUBsndSvfNfjyryY6mYkSGJpRw",
  "key21": "5ivo52BQ59VebpwyZyu6kPwG6mcJT5hq4hpfipaksR3fay4fAYFXfRLez9v2KYw9QaujkW6rUC7c8he6ZEFnVDqt",
  "key22": "Jm4WeotFUR5UeEtnrpH2mihnJpDsyePyQFMn7yseZfDEVdTCuvVGXFcL79iwkwKqQ7UmNW1cdzyx2nTnY2K29Ls",
  "key23": "pKkxoCcSKNAuJ9xrhHfqAWVog4tRjxCPEaeAdwLctuzaDhvTuPFwwLzRUHEi4QaLzi2KDGFMvL6rfWHjAeVouJv",
  "key24": "5PLGvFf6yxzGRrjM8yDkDVfRFtssLLUn1B6M7YpCr9oLw2nXky14qzeHfKgvmQR6mXhWcEJvU3fXZLxPFDKzpRvU",
  "key25": "2p7u2Gug9kEAnJDGf8ncdnp759LrRyRVcGmP3R2YLE9AU8CWqcPN8Hq9D8szZcQiEp3HhsGJgZtbL1SK7j2xgopU",
  "key26": "55d5hQC64k4AcSsuLk1kknRdQxb4dCtUcF3TErMfBqx2Fofj1SXiNU5jboK3Jtoh81Cjb4A4iUDsoJrZEpp68CoD",
  "key27": "E8c971KLmyqanjvPjBKNhdZD2KJ67wtousTypQft8ee9gX4yzLkdUWrxK3ougR2HJapmKyZmerW6BD6XXBtGPtw",
  "key28": "5EDkME77CsfzJmqgJzCx4aHod2TU9rWCR56qRN7fQvCbbwPkubz5m1y9AMC1AeZubgZF5RFL8ed5GH5gSg8ygM5K",
  "key29": "42ekXiY8NtfqBoEz99qidbSusjXvbKMx1gG52jPPxj5znmU6JsqnrSg3qq7QYnfatSuZrZMWmhj72M6grskDux9B"
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
