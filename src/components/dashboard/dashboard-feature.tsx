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
    "qmJp1wYE1cp1xJ1zXVbLRymqjVAqVQyq6vKXhm4inqTsroMMhjDRmXseumgWAsLGKCXgFye2sg92s31GWh74sZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yPXEcdw5LoTeJERUGbK5WQNuXtMa8C9hbkmi9h6NLTYTxkj9s4aysj1MTggu5PQ1Hud3AkXGcHNiT4Hk9RBgx2Q",
  "key1": "2AYWMFy6jtccJoSA2Meckr7U46KWUT1zFQJnbRkvXMTWdfZZWDsNHRk4uXU3nSnJWGhVoxMnqweFUDpp2h7dQP19",
  "key2": "2wNz71fPotNPw7RGQgRMRKAcGZaAxw4RgjGk3g1tPS5ifEHaSNzWWWNnYBQCUFB9ee59hbj3Qb8aGkEcqKjnKwNV",
  "key3": "288CLPFdxeKwBVw1MpKASuoSNUqBZbawEdcJDnP47jfgY8HpXVFs1pLCBfNGWYoXDuaD11FKDedQTZYoQ3Zfcra8",
  "key4": "4KNPFy1BSL5vBQc9DVmcg93vpCuj65haA2uagg5nHKCE7HURWhSzbe6yceUhspWyMcZUERyf8CXo5NNcjydVK2mg",
  "key5": "5xKjuEK1zQ4sskrsSp14THTMWjhk63bB6SU6UevMtkEMLCWjPmB1rXvSKpbRtcopWQyXBJX1P8bNmx4BWuzCzmbS",
  "key6": "GNo4tLjzJfaXUxaNF58S3mrysh5SbkVgp3Hkecw5P9e6WFGtsZek5kDs6sj6tBiLn5xt2nCqkt4ZQbpZqjbzSua",
  "key7": "2vr1impK32paZ2cqtUhBMiigvhiepcr8HzpiAjfYLUSRcg7cLMmjic7QWdVDfXXMCti6gSnNKt47Gd6jtjkQnCqi",
  "key8": "3yt2DuU2WsV1pFEwyuyyPkHmA36taw2TxpXnvBR5eaLEhPR26xuE1uk5gCfiCLJxZDAb3qA2Axg1X8XubCUhGYJt",
  "key9": "46uWYuFQ4fsSKqRb3F6ASwhbZe34x8Ex6VkPMRRHUof8iKwdZZrjRnnXAbNDb1ADNhTw4NCQ49WGusn8usL3DWiL",
  "key10": "3Fwcavu9kTQUgaWRddWAwhxEakSqK38x1Cqqvnt7CFernhJb7aEXqAQyg4zRGghyk77FsBLZLPyU17RrZHzF3Knj",
  "key11": "JiyPE9epdeG4857vS8pW9y8cSE2TGE1ys6eKYGzubZu7VgyGUvvBxqMdebGYFk59foYY6TyC2a9TYWAxBKHNvkf",
  "key12": "5fgnB6mFEzQrD5R6EGbU4K9XFZiLx719NqnpzoyzgaHhzVmFMnAVJKpdLs5Yf6KbcXVbcXvqtZEa3N2bAu4CYPrw",
  "key13": "isuj9Q4eyKQFHqRKJnLzPTjaG2mE8ssfHk7PAoeGJ2rV9MThLiJagaerZaLPDs24VQc7tDmKmhE15om7VQn45E3",
  "key14": "2t7QCwq9zJV2i1x2ZBkPA2VdWipg62xrEYaX7tELfsjRhaJ8QrcY177DrW1hKx4grWCbThkqdUesBANnVDHrBaMP",
  "key15": "2DEd2WS5jKs5FT4o4wpef8D2TXuYpGUBgPyY4WfQeZZL5i5YKtakozVJzTVDxdpZVebLtDaCEfMQ5c9NZfeeU2ib",
  "key16": "2qmpBMuMf4Qby2w2FuzvRwPJYV1LeGuhDBpKe4UYKiHKaCMbWcsGFji6xjDj92QQ55yPeM6mrmNj7iyaAado66EZ",
  "key17": "2UmNZPPMSw1PbvUKBc6NcN89T9pcTAhMrvcH5wSoU6GVSRR9dnxjwU1UeC5ZstbwLfFVbP6NriUp9z2zuc52RMPs",
  "key18": "5pxYHJD2w1FraQimXB7aGeyQKP1QFx8wLSxbjsRYMapy8FySaiVxbpuFnJe9vUWirSyU7sVPCNk1qJAjb1gwbFuQ",
  "key19": "5Nsnr48QRwhHMmX84t9sSA6TfHuWQtrJ19S3SDuZoU9tp9ndMxvNepesi7jQuWtMoUER8fYELNAQu8kwRPaKFste",
  "key20": "oWqVwytbmDhnd15625EdRsYgmcMAgGn9SJXceEcZvrgqnthhEDZoWfjjVsT4hgp7GmwDXCjny1kR9BkfA5QkFwg",
  "key21": "5C3uN927QCkygTUS3EBDW61ZBzZ8ERjF2LzxDnNCfDcvYtBoQyELo8f3QqtSByeBhTPf8GGH4ZvKh8GKWrxENDPj",
  "key22": "3x1ZYy8zRHAUa5VSyWYDvwS3QJFEXwz1hQRvdFtw3CUTjViTgD8yipgDmuZ9qQVVYknRSMRGKm4xiNTNFY2nYFF6",
  "key23": "3ZFerowxfq5E9uqPUJs1FpU2VERHENEXrZY3Boike4uFvP9V5Rnb29sw811FPeopMWmUM9ojgcnaxCX1NQTH2JzT",
  "key24": "4MZqHNRhhL25PdTPe3pDJRHs716CmxH4WYqiTZbJUhABjRMV1K7o2UzEd7MAngmfGWUGTzKj4CQg7mvjH5UsffTM",
  "key25": "ky5j2XtCd2AhCkWo9CS1TeJQ8pSFNpJEsHmCwKYautt85hijxb4PEaf9rWQoqFaxGrgD5TxxF3ibbhLhrKaxj5q",
  "key26": "owPwMCqPYz8UVf7GuCqaAjbWWt8LaLfzrnAFKEyDtxwgnmgs27YCQ7SkDprbmSR2aMYS5QZnBBjM6kksDzbpT9L",
  "key27": "5GosvSyo155QmjUYXLH1d5VErvcoLgDhPuPcPNEX2H3bqm6w1g7ZfBQVPjFBvXoZadVipEFduzq85et3hrP1SbCa",
  "key28": "2Qi7n7mhSTNq9dxCLgrrneMxkgUjfJjJHZ4DEkdbJDkD8DJMBynAXHc5nDVY8uEbLVBxf8jbuRZWEP3b2DwdBQTw"
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
