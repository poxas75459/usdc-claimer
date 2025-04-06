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
    "JaEQNGTHebYytzNwo6WxRw6L1XNJuWRCQTvBDruvU46iquUxrwf2CdTUqCiA4Yqm9BnpPCtpFLiM3FhYBrcBfD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YKD9zgmsZdFtHX3owgHQxQE99Epoaw9sSyt5JSLavLk5F5TwuGLVRQ3fsoqjnf4V4JFt2ywGe4ZLxt6gWouHSd7",
  "key1": "Quuj4885ZobfTaGbm7MvZvBc5fLGn333LhmHCXcDXjKfe5KyNzWMvCYyUd53wpUKxfD5anXh5JbYiQHHpbCBYfg",
  "key2": "4sCYWMrWnvDPkvHmfo1HgAsXJcgvzaXmF81KeMdc59W4Cucb6wWpBXLeTbLVYP1Fg9NSV7ibFSaHWew5xrarUqt8",
  "key3": "2JecJFvj8fbCDJgDkgBD5xVTExHSACMph2CeDmq1ZCYTBPepJgTKU7kdG44Ez13cCVQunnxJhJu8QkwriSs9ukmX",
  "key4": "35FHbE8mE55PLcJC6pRPYNb57y3T4H6xZang9t2vqh37WHM7o6vRy3PZ2gxSWEt4g1pX9howRocRJM9isUcBuXbD",
  "key5": "4R11Cb93kaQ8xUt8sGo7mYYreaDFSc18iUBm8MVduEvh2CWiRRsrv47JzBsVzQk1515JmBZjh8zQ6VDgTZoDRwRp",
  "key6": "4uupTgNKhK5tt2N7iy9FSHHm8cYVnx9UWZcsfKcYKsMQ88Cv4rdU7FVka1TBXeqzR2VLNis8vStVMdkkFzrNKjpy",
  "key7": "2LWfXTTieTaUFGAYUHnTVMnJwFshoe1rUiaHqDcPvGuA9HtWaWsqMyTjqgeyvJjhjrRPB4RF99GxwZDC1Bb1Ss3s",
  "key8": "3QGDd2tBYpr8x9vQ2zcQX8LJt9SHYBzzQb1aWQbLte2bKtn1fiC5WaipCd5ntBhnEwP2h4mgbHoi6vcBit9FGQuv",
  "key9": "1AhzNFMJvgeMsNtfkww3zVsYhp3p6KH5kXCEKm52tmVc24ix3PW29CVrAeb6uqzdrQk7tkTSBtjDGY4pQCmjEp9",
  "key10": "R3BQ9no2kFjHWePZFVvW4PexgpJUmCxq5kUGMgUPT6ZRmxuwYPks7QCFWn8MXD2uScvfQKh8Q3N3Y3PLS2Y7uYu",
  "key11": "4r5j5YQZjCsbqHvQ5V8vNboBat7DHYYHeHFtCLDh75XyREZgvNz253Y1SZN9fqysyNQoY4LRY11tJh5ox3bnXt9A",
  "key12": "2ZbmhzFWiB6CFpNGrJu7wtE7sKCWZ4cCfweWEiDZPLmYFbS91jrvLd4ZZ4joWk4aCQdX3cGiJ3wd43NoFw1LxgiZ",
  "key13": "PE3HFekeZftQvr8NytsdaNpJkrs6wmGLsTmmGqnGGR1Q1Jo22SedEHm1DWkuKMvgNtGq2Eu3YoZUTsAMBq1drAy",
  "key14": "337PtFPJ7hY51FT97B5yFcT64SqkFtW51XsFzFa4Th83vqsNWLYJfA9H9GyipfJfgboiJNDZ89aX8z1JQtQjTS7m",
  "key15": "4dgQ9ZxNTJ7Fi8pue9rQUsqvEfjDcTFyjHHFxNRnESgBv6nJkv6zW7C6nw5wkZm2afZsxiFqHwpECy9eNKDAaeA1",
  "key16": "53WtWe4EdpcyttEGmmybMoc2Qp4YXrqfjTvdtSiPNEucsbN6VVEucgLzuKy9on2ZkRzZmu2jZssBaPdyyH5JB793",
  "key17": "5ZE665tbMs7FVXR6foirqsCyv5Ervy666S3EajoPeFMKKgdrgQdPjzo2QgbJ2vKyaxwQQrwyzFusSsqNWjjMdef6",
  "key18": "PxMyRVWcsZ7aJNZTdWiKTfC9xomdAejgvoSSf2Xe2qrLu4niU3PAk999yJ93AYox7Wdnob9GeKv1GFNF8cCBo5S",
  "key19": "56hYEUNHq5m74sr5DisCiNJA7FJczgiG5UfpJVG1NLcNoS12L6zXnCcpoDagfZQa68rTw1kTbKh5o6PBfiBjbeF1",
  "key20": "4DF8qfK1pxvVHPoHHx7X3YGs6Yi1No9XULpeUufz6H7Bb1EbvHUYxyn6NxyE5Sd8YK8MwcFWkD8WF6cbcYNkaKve",
  "key21": "4Uf11VXVNAtfaYsnmBrua8xkQ2dg4fZwSKUGRN88LQSypKybCw3H5fD2ivbkcmVvC53QTH2uMBYAUNc72Nw2uV1Y",
  "key22": "3htmethQrdWmDx3M2HZEqqDNUdsXkhPDeastSR43S2cmYfgsPu6WFxqmZFEHAvvdzsPu3KNnzwE8Yg79R62UahuH",
  "key23": "39NmJsfvMTobpDWXNTURrQg36pDimUvKHdCWvGii6NXE5xehsiB7DSxu5zLqkuNsPcb9eHU8qHCaT6Vd28ZcHKiD",
  "key24": "658ksrvbQJLq2t7wPjowyRvufMRGSFiW9puww2m384Ddh3vK2kKBkJEW5enB3axsJaQ57LG5XzuHMZcySo2uvQm1",
  "key25": "4tzAZ8iHsofYbafKd4YFnJnBwQh2UGb8aw2HKrEJt87PSJ3UNPZkQ7FWRqWqukJ86toLb9TZnRConLpFo21hvCH3",
  "key26": "Boq1D9RR75ngaUNjSJfD7D4FkKyrRxEJg5HHyXNuEBhPfXSQnhAbBvP1ZKgHdBpZ7uzHUNb1gwfE9fS9RsFSuBL",
  "key27": "DpEkG6TgztBLthvTXaxSCnV4r5HWZ4XaPPwcjiaoBGD3TdvYyRhd7XASXV3LgVRPuLywEYALG2NbQ2ggZWinjEh",
  "key28": "333miYGpUZdVt4aapJ9zrg7vPWau36QBzHERjhyv46aBzdG8RWaZ7NdGsWK2TbEwnxUSEPb1GeCsDZPqaPQgfnSq",
  "key29": "38ykbbyHiM1Cjb6HS2MXqwbhxWXmt4Ck6SMZzn1awBS5DUuc5e7K99ErSm76Uxi7MqRnXK8E9aTMEKPfkdR7m7Q",
  "key30": "26KnGvVbEqMEs57KKG6vGMzRF17GERUPjY5RpU7t3NGJM51bTvLeVwGxvULE8mPbR4KJWwb5JAH3yyCeh4uQdZYX",
  "key31": "3jSMTggx1t5XfV2xuuSuo8ds3KU3PKRFJf5ietrLjbyo6eYmXQMAkr7Vwhx33ocUmeuMubazK9DQJkWc97a9nyQn",
  "key32": "26qpkwFh24B4FmRPkbb5ovXFEAkKLBeshff6brES6qXVn5R9wjqMmFaNAwFMFbNG3koiCATxTHfa1BPxEbeDhFn2",
  "key33": "yuTaogSix5aQ8wqLdv9skaAfkS5N1yveMxEGkZ4qrLrw3FjEnRQQYrZymwAzYJNnZQb5MY3fscbLAW1QiJ2TG81",
  "key34": "3FhVPYHJ3G1XhJjKjaNotReDZbrUy1o6Rg1LDRhefrQ3GorzedMNyakBRN9r6MixhwWP7xQpRjfwd9xXc6RaJ6mR",
  "key35": "4jsaFCo2YKojB1oBENb1YTtVrjKo2N5maMZWAk5B24sVzF9irjoNvJaomFHmNEFE2gZ6RTW6YPxAKYejW1GNQXVD",
  "key36": "4TvML1PJqcboeRqKyCBfipr39PqmRTLffoCjBZuL5tA1Y7tnmLWyb18Fy7LqdodoHcLHN6n5kE6dVqTJNpJWEfzJ"
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
