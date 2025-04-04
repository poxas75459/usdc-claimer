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
    "2q54DjSnunYu9KYHmvbx63TaUqK4Eg17F9Xsp9VGR5MEZeyrH9ZdEapc7aiXRRi9r4Z7WqtAhP2kzT6J9qStWUB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iij3J3sKQNW9S1neCcapXznsLB2ESrMB5i2YfsevkgPUrqkcCDApDwAsr9mpt73Jwau1PYB5ZrCSwDmc5GhC9H9",
  "key1": "2hzDcUggGgniLxqWc7gSNU7JPoEFsMt92usqGRvZbL8GYCE3iD7qRZpPm2AGNFahhvKxgMfTBBETckwSDGbSM8Sb",
  "key2": "3ZkMqvYSNis8x2cCw8SxAxDPNd4EC3WUUbqqrBczhmaKzsFh1sTexTDzYTHpKTHojDtqYtMRdnDxCm8oGQ7BHkcW",
  "key3": "56jdMzY4UhPo3DhnvufNbpmCeYMR3XXCYMQp6SBvNMsuC5GvfeNJwiZMDBhAVnmTRKz9WCepCkAeWfQ7VYg6JJJd",
  "key4": "2qU5NTjVYnFbdqdc6UnyUUJtMLg2B52Lhmc5BHev5DcSJ41CqUnmo4MHWFtXRjtRvZiMhJmpBG1JwX35K5z8zNPx",
  "key5": "wbZojjQ7b1wLiQNThVnAQAc1Awmp5y4yWqMkFDt5YzB5bqdcPFmh3TxGxTyYXCXLzfqYsgPXcPC4qqdRVTUFbRe",
  "key6": "2SZRqFWNgNuH47YbUmqQpNV1WK3tJ6MvzQFDLGtYrvt2iVXFpx1GG6o8KWCJMpYc9jY8jrHCg7yxXqvvwjsdWxSK",
  "key7": "4enZyZb1dJ4RTs4v2BkGHdKniA9nKqYWnpA2xgtoQHnCdJoVmyB5cG8RRKY1ngts3UYWdoYftB5CZjGogQqVHd8z",
  "key8": "66aVGsFmmp3LZaTu5w1eyYkFXwFLBubswNn1E7xFeWigLHoVDdkoxxDDc8xxVy1uv3anXRHYe7VFthN3ZYP8gFTE",
  "key9": "4jvYLf2sDsKcSXknooBrN98cQ1uxSAPdTsMemsmU55b3VDJKZkk784tq1RKFFKRwZeNuorFhsqzrY3CUeA9Cqyz9",
  "key10": "vexqgbxxDtYYgMQMu6Ln58GpeAVN4RdPqAFXdrgkMrJLDopCSuBdi5fLpFCvYxvxnC4CAhfPBCv5nBsoYEPmwL8",
  "key11": "5JVrdnrpnvF8K6fo8SpumZBA3u3x1KdtfvgTFKSZz6RWbdQ52hFjcfbDwCcLqX4QyJSAr6u5XQRPGPh6qYB6Ua9D",
  "key12": "2ZZYPtGT6rdGZEWKWrXGjaeJmzSrpWF71EFKCTN4jnHB5tSSutpPKpTP8vztReEABPJnro4KuVuS7zDYXnJ5yq3e",
  "key13": "59xNiSk7zZ1fU7nV2U8QFnry1zuBHYeSTs27K4wwPcgRH75WvBHbtsQ6U7Z7XCbfMpyVNPtWqvdo9HWZqPQsGybY",
  "key14": "3k1JrvYBhyJ1kmWzWLpoQCN2ABsHAr22YSmGGTb47SQHjBb6TySx6U5hywNgKvZg8cX6TTwxpHwHWT6Y5KfMxAfT",
  "key15": "5JZaf1YMjMufDiY1jSEecdTaSYRWX4mgfejTUpXbjs8fxtAcD3ZFSqVHoNettD5zzWN1rx3HnBU3kmYy7J6wAMMA",
  "key16": "3aRimfRVHeGCG23Kk64tktuciqTeVxY5fCK7V4WDFJJLYUj5JRv73BrDqWmdWzob5aTZm9hsNKxih38KLyERFz6F",
  "key17": "46LP9vB516ZWUcYHF1f2kXmRaPH5zCPaTmGFyzJtLX6UqcdZHCzdtQc9SbxrEB3fWYFrFxpjyQ2U3LW7FWzCectP",
  "key18": "5MDA46YJVu6EBfkY8dGei9Qu3geGufJ7n73N1PucaMuZVY7miL5axgsti11kqDRQGLDyz9oMSYT3Rcf9GhQ9F6nA",
  "key19": "4tPLjRTfncu1CVVSFRqqSZMe9LSgnMm9f7p11wqNFmfcNApktp4rtb9edonjntq3QCpNjQ2gootEDcMiu6NZP2ho",
  "key20": "4eiuF6U2CdoRBZK32SuPSpEeYy9oujs9LMHGjobzpSz1M9tebZmc7QKKeB7KGBEswsaGVdwesJ517WDgf34N3YWB",
  "key21": "2EL7V2PHLVVLsoXgtGLAf2yuEvUpdeFSiRgq5zFK7zfpD4EiF5UC8fCeoji1ea5p86jQc9TZwMd6oQ1wQiCHGSxX",
  "key22": "25oAUQEwUworoyhnfRssrdv2G9ToHf8qVJ1R2kcZ6Gh7po1UPRNLe73cK7Za7kprm2UFxNDTGzxTXpW423TC4NeW",
  "key23": "5NdkK3zGEwVvxtVGZDK6hHnqEfPdnBtnntJcxNcMPrzSgexvouUVkJo1eBnHaQq8WPB7QLMwTsJWKct2g5L9fz84",
  "key24": "5jcKh6tE24HD6i9daxLt4D1Q34mf8ZtMzm25Rko8tQCkJWaVaHhz6dcMKSSpUaDqwsEJx3WEcMS5cqEpWrdX3BKA",
  "key25": "3Hkv1hypxHsBBLcLJYB8XwipLocCxZowRg3JT7avronWqhv8XWkGLW9yB4bAizjoiZSfEAjdsLxuGVMHZfNAnDAC",
  "key26": "2yBy7y7SEw9EP4gkUaRRTNTuMpQSZNDDEjDvS81XCYcYE3HpypNd4N9Ed1EnMKxAtye7eKZ4x3dNhHw9H5FyxtYp",
  "key27": "3Qd6krTL23L79MApZc1adoqUdUavh93RBh6ox7i1kXY61X1BRZj73hGRkrxaLxkexdRR7fmWrgAjMYq2Ld8Pi1cM",
  "key28": "4owkRi5pwWfYnwBRej7EtRKZWFNgw17W8aZJeahLSib6MnwLLmzhwFYoxPiTTU6dxoEPRi59x12SRs9TzwtQ2FaG",
  "key29": "5c9x1ZJp9BMMYmSSsBo4ipjBV1AHRQ4SJAXH76EGK4Y8FnsfrHbTX1jreokfgfcHdDWfdm3vKCunq9o4vdqzcPWL",
  "key30": "2ZCA6pNYeTBYgvThhgtDCTJHtVVryVVSJSFa5bvsunKVYWSwW6zpUL6byD6mnm2pukaMGpjdSpPh7dSZdzJniZpz",
  "key31": "4JPfENmcUovAcDkk7MYVPPJtEqfwpdGxPf98G5UQeJLUCWjoKcYgEWk8fooFWQEBHxRjEeNSVnMhfSCAekY8fdcj",
  "key32": "2K3Cxe6z7pHgy8AmoWymQCGRqtmjSdmBcgr6qmUEVHheEC5Z6f6JVsgRDKEgCqWAzq1ckQK4etgYcziLndFXC77t",
  "key33": "3hHYdhsqerJEU4yFcCi8WULcigkZC1Q9t2F5VD4TZuEXQKoeyGbCak3qmjN29Qnm8aHBjZjUKK8yZ4SsDof3223U",
  "key34": "4VGSDeYgS2dBXryTxJ5zmZrB92yU6qsPnwpreDi1G397izYvCAwobpeLyCMjh1e6CYZ2ANLbZM8ZFyGcdK4qUgkM",
  "key35": "3Q3Rs6XZVSda8UAjUoTrPay9B3n8x5gymY5GMoiFkrNZZwDYnZHF8VpP8qXKxt8qFVs8HHEyjDgZHSUTL4zhcq84",
  "key36": "bQXLtqioJUuwMXJ7KhgaDx7LbEAFGgwSf4DemLWcGSoDfS2v2Px6riLpyGrLaAvVTo1ovLFmSx1qLSGR8QmQPPU",
  "key37": "4RUyN6zg8TEPTwmVJofP2HJpFfk1PDtM4F2QE94wywpj955HF8Cy5Jw1MgAKYseTvgK5pGFGn9nN39YuG1q2yfeE",
  "key38": "5QymkUodvNNp71UETf5UHYRbu25dPPCGkqWG9g7cDhJ1LYWQVU1b6Tfi5Ls8q2Pdjuiw96saXT6UutQNGDivcxjg",
  "key39": "3vgVKmhxgPemFZVuUhuEgrAFAuvm3jKrcg9CuTvBKxRd3dooPBBXDDEgKJBCGUArQoFgGWiq5WDzZMXHgHv8Ezmr",
  "key40": "6D5nEsoYXFvtQoP41WxtEjGkPrQdQHLJWtdvTdfHacASrGAo6fB73Ma48EPmbfA6VrAWNcVM1QSC35q1RneXWxN",
  "key41": "2cN1igfLwhf6c5w77Mi71136r8cbvRFaGMGVXYAHiWx74SnPbruT8eKMqE5ZadgkDPpjcHHWwZMyTY6sJP9i6Uni"
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
