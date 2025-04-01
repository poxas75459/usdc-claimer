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
    "3RMhtqKj7VDGYtHdbpRSjpMZNjfAPEav3t4fJAuK2PRRgS9Jqg32H7NeQUak9ZJgxd24mA8tpGgtztVoGsVhwy9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GZqJ5DW5idhHqwD7E15pzbwQVhskzxN3sV9e2QoPpNYiY2fDQ6LSTrd8qvncYyMDWuPDPazATy9Em5PuFXuF49s",
  "key1": "2J9HPFiQee6chy1yje9NUJanBz6HAokjUEHdaySMRycZBnzmhNm8Q3jV487C3bw8eg2pXAMQV6h9sMq4x5R5RsW3",
  "key2": "5CMQP6bembhUefrxn93gMj7Q1itoVNhV9S52Kqs2rxr6ni6u3pKsSFkKs7uqnwTBbuPJWkZbrgiv6vXDxgHMDJmi",
  "key3": "5s3drKvwv3q8cjzYZCrnK74PXBXgG8XJ5q7GQkGrw8iBsctejTqbdJpeT2nDscgxHxPnWEfMywFU9ankLgtkqGpw",
  "key4": "VFq53vHMrEDymEx1vAxRq4kgqMfRo8xFC8kWJJzXc7ryjedfDAAAtzRWiGHY2QPRVDfRC2F5WmdU9sfR4YWngLt",
  "key5": "5rxie4XCc2Sz2WrXACmUfmwwFwdVH8cYQHcExqFkRC7k3hAuxPTUTecsvnE8oedjSW8z1siz1uY87J2Dp26HZg4o",
  "key6": "5sr98BaN3vry5QHJjiK3U6ZLMsErGBvK5QavTbusxf2BphfQeTT2SyYjdKY8KJK45ceHmvqYKSLGGVdT6EYS3gre",
  "key7": "2BppH1cz2stK8PYMqSW6hiTok29a2th3uo5KedyByw2sNrLgRuwj3kEp2PNKRzz9xwNPn2irBNLcuR6QYv82np7X",
  "key8": "54FwvCnQjuCe2YB7uJ63k2xsQop48TCxTbNxRK1MPRofm2uhx9RufsA7Vq3SjokNB1ZtDi8hcy9KmHQT8p3cdpc8",
  "key9": "4zsu6GMcZzBnv74BCZMSup3ehdg71rtgJVxPLobxPXjegVFAn7u7ARUiYvXMyWN8uhW2wjzWevUZ7XJXKcPR1ft6",
  "key10": "4W9uqHsdVFWRBcfW6F213Qb66q6n7VJ4rLL8Sug3rUA8bbjsLSBCdJjoDJAatysbgMHvVzupjF4Y2y9pXCMV3MNP",
  "key11": "4Zz8s993mmLA9hLEBg6tUm8icpnw1fsQkvmHNuNuohZxkPNYoZsgpDU9w7dSGm64G7MVTkCAtkdcThG1QhwDZpGY",
  "key12": "3dMHU3eTDGv6v2d1oBfEDTi1xasQwZB33XUCCdGYB6kwggebhsCDLBqG12eBJh7TzgoM9esQZrhWFERr3ffWDWLL",
  "key13": "h9e18kkqoHvMHtz36BN7c8ZDEHKoQY2Md7feh1nrdDBhs7vXNCHRNngchjJviVbHQtFgjkikaw1ZcC8uBQRFFpJ",
  "key14": "5PEFWxVyjQ19HNHdXyrKe3gXeMckEwqDMg7bbt7kp8J8V4q3B2GNqNbqcXe2kF4BVvdq7WRT3ZfMLzcuoNnXFV23",
  "key15": "5pcMYDg593XTRmY8TShCaPxqXzCMxkDPpFCk4csF2icAK2ACvBop83qa6mZ2hwQPw8rczTT6hFtdUv2dxPjRG56e",
  "key16": "2Qgir9uLBRx4Jk6hxZYq5CuTjjrTWqaKub45UhvfwsixfSaFgCdcFpozKSM467dEK9NnGVxmFR9z7nkmVZuve8Re",
  "key17": "6WeBKjiqP7vJLxkcKLjsTUkqahXW7ZN6nhdnhpZg689hssFRadJbijFCQ1zf4NCzsWXevEcjY5kJpnocM4H3uZU",
  "key18": "5m9RerWxW5jgrb28KukaRmW5QGXQpSyMj9RirQ4aMyMGChVJQPM8FFVJgBEbGog2duWGxVVAmSQLYDDT3rydMYYe",
  "key19": "2RFzZ9DyEzTFfAm84A7DujVnqyCogWC3CkqGXhGjwngv6bR8d7z5HAJep3bQJ3Lg5UVHfPGTvgpC1cdp1JKaAufj",
  "key20": "4JHun2QCogUSkcHT44UPRAj1Xur4756L7UWcEohFHHrU7k9nEYkvYwyJGRGXRxoTaTk3WVHX3Xu2BHD5GhHWZM1s",
  "key21": "3ePXKWBmbzhGd1Xr8rFAj1hhxk1vhj41LH6jYJiy7xHLyEtrTQnk5VgBQ8GZVoNvF8SFTvkBBFdCop9R2EtGiANe",
  "key22": "3RwmVKtEBEuQ4vfw3SgPStuZDZ66jUju7aJAVQaBwbwJ2q81rrQTYoEvVABPuxx5z4S7jxhVYeqCLWCcfRTjGuA1",
  "key23": "3HsPZgavtKWMER1xUMjjtNfJYnKzbP4e613BDRENwYNjKibBB9Kgo9C5Fap4gP3bpi85jHnGraQgoNEUKTbyZ2ck",
  "key24": "2wsBEdbcaw3yiLS8EwspWnc1Ee8K6fwk38Pwzit5dRtUvvyk38ajjR5NrH9Jj3gToXLyF6s6TKqRMrrCeCruPJbf",
  "key25": "29Rs21qMfdTVuRzxo91b6Fosp1J3MYC4qv69J35w8aGEBmZL84EBisBpEdFG16uh6Tvbnrd9ijyeGY8FvJ3j2xGL",
  "key26": "3Dj1nmMp17Tt5Ss2gfhQwP1jPgbKHqdQzeRSyBRJSvvmGoaGJ62bdXNWu8vtDPYbRqSEXsZJCu8K59xPQZX85C4",
  "key27": "4CeXyJG1kBGkk7TDTCBaaat5VztAb44MbrwNJH4VoximT3yNX3nELR7MsPsaXr9234TRKj5UP8WU4q1t97dta34n",
  "key28": "2NhPG2TCoNwUCBzAtBketcC6niyGGC3WPyM11fRHJgmHxZywuQrFbCL5KSFDfeVZuzVxeMfvL3sjSUaRoUgzpmwh",
  "key29": "Jj4JxfBGFLqpTu6wDC4My5kh4xaC8doBSL3BhwrPpoW99G5vLEshP8bojgXZwNDueopL5TynTSFSNaJcvhGvzHQ",
  "key30": "3vfVVMWUpq6goCF9LFNu2529qJs2ujbFb851BDyNEEoenJiGNUvrPjp69VMZLCbffBj8TWjk2mTpBdUwgLNXeHyG",
  "key31": "4XSwuh4SDqZuxSJS5nQKSynpogZJR352g31XFLcui8A2CYYZjDu75u94z4YCWSxBV52wNHsAFtqiJmzKH1pJstCR",
  "key32": "3sqJkiu7mM1fL2mxvft6i53GtMt8yEiks97SUmvsg2zB1QVk6QUB3pS9eb9TuQMxXZXmdXS3Mnty3CpkFLxSRUE9",
  "key33": "3gSPAbNQFSrxCjkTBWwQb7hi1woHQ41HWXMqvKKQkDZr7GMvZga1YZriV5wqq2ggg5kF4h3iCCE7yyLSpNkbseCf",
  "key34": "5R4rRZR5e7btuELdmeX1EF6FWaB3bK4q2Eh6g9LRP76feC6SG9LjirbRBiq3MrVmZ5M1QpkSLcinwZHRgw3ihJvh",
  "key35": "5nFHLo7Bcu3jtJ6k1ZLYoYx7oJfSKcbS7u1ceCRpt4jFFfm2CTB3nZBW1A9zqhXgGuSaMXusgYztTnPdLyi4PEne",
  "key36": "2auAtTiYSqPMNYzRkfHaMmED24Pdfjfh42M8xgYKmwmQXxdesHirZt7tZwHu9rkz5PTi6miBm1wWhLct1iujp7XX",
  "key37": "5ty43K9TnwxZ3EaqriRocevq4iizcdPahCJhgVi2oF93eTp4GnumJvu5P4sn9QmjSz7MhJJo6fsxLm8PgY5cTAXZ",
  "key38": "CZuFE5de2Paafrh1ETUPGTWrs9r6jCWJWUPiTnu3aC3DpXXttCtB3iQSxaXQroyzMigiz9zn8kKYCGyZ2shazMx",
  "key39": "5U9mb2aeZ4JTjQfD7Rg1UaUbcebkiPFVZ7gpBFxMy8FinEan3gJT4cY3NjxutyzSpNMJVCsGQmY1DDtwZmR1qiaL",
  "key40": "5wzabFgb4BShGpuuu1syf3qeMm5atuqdzGj8GcSct9kahiN8ytdq9a6BCRaEsPyRAX2BBgc6wWsd9bBDRKNyPM7b"
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
