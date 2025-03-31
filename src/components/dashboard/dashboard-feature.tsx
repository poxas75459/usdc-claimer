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
    "2opBDMRCkTaHih4BeHZvkiZDf42sqKJepMvf8EBZbvSZtJFBLzkrkvFcytPSfT8Ci1kja9VxTdbpk91drUUCVpeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wRqtzE8cgiGe2gcku2z4pRrDzuQoTe94RdAtfPQUvHZTTfsUfjiZxBE4SHKPLAqzoFYWCEVpbz4i755zytw3gKo",
  "key1": "4jrHzAzovvsgU1BjFGGQWe2k9Ve6Axvo5njH9BVUeFmiua8SoJ2N79B6pZ5HkH2yjJrNkT3CWssdLXXXAe6CAR8p",
  "key2": "29ih9dQAZEUkSGkz86LHTJbMn2Tm55fdK1zwttS8f1i59ssFPMB2zXYjWdrkeY7rBMNysfKd5MmFjwY18YYH6tyA",
  "key3": "4k63Y8wfitdNkGQxjQUTkfcUfSGudRaHA7ab3hG91vY7GkgtbXQS5GMnkJpowMph7BNbKMbpg9SNn2zhmMR1J7Zt",
  "key4": "67KNeuLifckWVvui4Vee7qAvsbJYsWPvYeoynp26ZZ4eUw4WXRXxFrfkD66uUBkh3fKpWXY3sQzDpUGcmGaCHCjt",
  "key5": "3ZZL1dGbLYwUtJ72wT6Sy8adPHqnF4FSgeVVJ8rhqDqAbBBQYzkwbhvg7yPtRWpoFQU68jLX3HrVQDU5xmBoJY2b",
  "key6": "3PXfkoQKmDBY4zhSK8KxBTZJqnwo7rK5dXxMDo4HYCx3fFHsFPSgMrsmaoWdRa5W6fkhAKyuBviAr4hxJJ98Bu3M",
  "key7": "2YbCnWXzKVKhyoHgY2nZNL5J2hjUVyvctoYbqh1KPcThEffrcLrTMrvAEHQ7EBoRCpVD6N6gyJFpCN8p45zHJJxp",
  "key8": "Gu4NgQCfYntzjTLVMfRq36k5ySBkuCWWPssqr6Knu26K8sqZnt2ANndqBXkhTYBR6HxQwXmUfbDPYTJfWy5Bot6",
  "key9": "4UBxfz4Lp1cMGt3YjWEd9jszgJX2FWs5hmYAAS82sfYyWjUDcW7BejQtpLujUEPZKiNGM6HbtRcEJgSymktSfFCy",
  "key10": "5usemme3j1DDa5kokrCq23v9s6GiEiSQE17QTMqV8Jaj2w2n5oajnrj2jGupkQa7zmxXLRiNfozrvYdt9HnLwRkN",
  "key11": "PQGgpEe2hHg1duVZkXgGpZy3H71aBEz8tZZNV2DcYpBzG7yX6fxFf5XVkektFSq6aQsGu6SYZRsN2HjXZTFJ299",
  "key12": "HAgYYqyGWbMN8tkLscmJLVNEariSDYZTkRozQanrrNHjejBTvSqYXY7WTXjBs1WUrY5grfFL45xtCLqF8THirt3",
  "key13": "58BAtbeKafJnfotrDQTUunBSZb9ypNR9WckSguUjUpC8aXicmUnkxs3SYefZqfCG5naYhZRDd6YKACer9xU3NFVp",
  "key14": "ePEwZyYh3fpM3a2j8fwk11zpdM6vAQWBcfCeEgsmagkp8SRnrKmNpC9ksX3rNdYQCxMagP7ig6AQak81EpP7oK3",
  "key15": "5btEvrwKjZaY6sivKYdC38nGajkj51iuejNg5VAwKKdqvPo2HJjaHE4wfA9sAsnAaK7atrHtPYxN22cJLyi7hkcF",
  "key16": "427Bado8uKHwwFy9SjeFVCKs1TU6wqMvV5sWHzcdrkfvT7K64paati9G7Nz8P99xXGXabZd3URxoP9xwmC9Ux2Au",
  "key17": "5Ur5V9nocwgsRdss28vKqjeCkH6nK2BzGdosUB3GQ4wReerDMnjBXnppJ8JJ6vY6tLDYYh8sJiD9z7ZzE5hq1BTx",
  "key18": "34o9aZwSGSiTNzVyhpuaebNagunSSFiyXfAhjy4UG4ECm2uRMG3qqjqcPhN9HPsAH7E1DGq9ZTA66i4BXhvNJ6JR",
  "key19": "5eqqdb5zp5bMMUmJcwZn6z2HPxJSUAjJq4UFvDdSfcS4eCnoGkYYGKXYG5qf3sxapmtHRZPS69HCDRfiaaaWe3dZ",
  "key20": "5uU3ZEM6xDcrqGr3wAjw8KttStffF2qSMM65yk3GyDEqF8btSNSpDKd1yidy1VLCBHhW2cvfsK3LMfrW5YB66bwh",
  "key21": "65SDxGzCZY3urK9Rehg79qpv9oPQ6NvKgEZzaZL62zPtvZ57qNYjHAskG3GY1sxXrtCyLS9pq6T8oUc5k9piJ2KD",
  "key22": "3v2vwkmRh22WcKusaQ6aBhgYib555GedgrCnUyV2bRShvTRGfrSZKTzgfhwYKSE3voys7bQyyKXMJuvfUJXjXntk",
  "key23": "Y9CymjMYMbbjCeWYJK8mBcpzjdbxP5zsjeTDqerGacnSySNA8feh2n2pAiS8RYWVjAnApAFdDCXSSkTbmJHUc9P",
  "key24": "zKboPZoLeTPm3s4twpVA5aUuUUNShpN2ddBigRYSAr3kyePLTzanZkoSN8GanNdcZhXcFfW8iipDtivvX1FSrKD",
  "key25": "3ANbWghpzDjWvWmkgjWetwybVH5W6FWoNhn3Fz9DbHLvonHAEcRcdPjeHpNhwaSUwz6kNGSJNHitjkxcNiwcVX7c"
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
