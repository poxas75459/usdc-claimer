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
    "5wJgK6tJmjbxzYDVFUeJe2ZwZZxPgWbeCppqEZ7BLbfzvp2zJQZB67J7ttzdkbXW4h8v584wUJR6jDqjFxziiWd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MEojYhVGDvtMaYJ5xMPj48ghCXFpsEdHWpWGyVhsis51yVFbXBGRL7Ku4vX8miPUdjBm4T7JnJQKjBJMb7VaRvQ",
  "key1": "4bwW8ftgyiUBLBhF5DifBDryHtpuhqqSCY6UbW9WYL4t7PMjGCnJoNebdsVMFhNm1WxaTBRjMWu9VgFgw6WQbAwz",
  "key2": "4dctmCxYWUdRJsFkNvNGDUP61p9xzKsDS844RpeC8fM51aPjHT49wCVfyTknhghorHCKai3hjHvBFM59hFe2nC1M",
  "key3": "5XZUYGRgL22nfo2RxwPjBfFHKVeyM23LzQixMQjat9BdA6HKZhnRMG2F2VpkLEQURkgjJHbdDFbjy1ZFgF8YMqhv",
  "key4": "5GUc33na6uJtPSskFKgQLcbb2umbgjg9Mbe4UDkSqZDvmZJa5qbsiFzYLwuifgsJG8a7HEFUQG5e2jLnNAmq9wBc",
  "key5": "4YEvxprgQA6EREzdS4mPADFD7gtW7AgN1TT7T8YMGbueUKavjhqVwhsgUiv8PBFnbJgMT2d6E67nEUkitsWdFiJL",
  "key6": "4mjmrkP5qxEYKumMGAefPJV2u9WzJdSP5Gq66Zg6PZMroRh1Atu2smWsYjCMbERZaPGzvyaedem1GFxiUwTHsqEy",
  "key7": "5KaXuPZxZW8mjSYZF6AvEfx4XSK9wPAL2REZ9yPJp9FgkPoRSCNYkBEFQph3MoAn8uPuiAm36emFeqYVASWPQBCh",
  "key8": "eBg3cR7QonS2HARWSBdBfGbEvkoFkPeejh6dBDLdT6tRdiomiX8dB865zwNVj2Aasrg8X8voo9TSfk2Njckz6dN",
  "key9": "3ZwCYVEEpkruLiJhLrQJVCGoXK2oTqdWFiveyGzTWS2ZY4YJAwdZqbkoS3zw8wUNeRYyFSJHvrgX4nmoLJYw5ixk",
  "key10": "2oXSTHvFqgzhCVKgpUvNz96KAAoK3XnY1U9mXzCCH2MBEzR4HoitRTjTaXpJifmov4mRKhjTEZc7AKnJVhD68RKr",
  "key11": "j4vTt6zvDmoUY5CenqnLXuuuZ8kMrELtodquPa4EQvjD1g6bWVBKpbfaBHd5QWfJJs8v9RQwtLhsoxV6s42qG7T",
  "key12": "259ys7d8vgAnqoe8x1wefNDXEBCvfamxbAK8kEWMiV6kdHosDt8UCUo88CTLjbrRX9S9cq17DB2BxFmSMgLYAXJ7",
  "key13": "4dMVxY5jBgHBT5ZtZVFvi7CRGewTTZRGTBEjBGT4SXprQn9W7Kpt2uMoGmNTbFdJMGAjVvufZZhYZXbbFaNrhEjd",
  "key14": "4KbLaWAMSbZvnmoaNqMTdh6ECdb6FdWSWXpvbwv9tUJJY2KhEnvL73coxMGnJLCow2mXcJ8WF2VMqHecTodahQQM",
  "key15": "4rtA2H4YQFERG2SGRyEKxX7CBSeXrMdRVbafYkujZ4w4gpr1VsdfG6RbXMwN4yEaGGeJ1f8LFcwU7LU2crxuc68P",
  "key16": "3zrWqwvaQbqZsFWn7eQUnknSAoKTS2WvNfzZ7uYKZwwFSotgVnbeBiQv1oxxg4rzes43Svga2dDXsGYGuxRZM4Ew",
  "key17": "31Do1aarKMYgseMsZMYA3MsHj6KtipL4ftHPN6Pv7xvE571rBg7YTvfWpRtQETJzWrtqJjRijp36QVNBcuVdqPCm",
  "key18": "3VDpnoouYrukMLZ4Zrn1XkcRka6SV4BG4tCPBG38zGzmPXUZ9yhRoqVj4Ct7rRPBDNCzv3v4xn2dbPAH6ssryBoK",
  "key19": "KzntzmH1dM3dNCyAPtyMmt8S2STCrnqb3WJaj5k7AnwWMeU7wDiuoPN88KwGJ5mSfzWDZvZYpUgqKNBx8FkmLY5",
  "key20": "4xJkBWHPWM5McgbuT2PRJRvFtXt2e38Yhe8mx4jsE8F32v7rGQyAEM6E5B3GVXGpoTxGZV6RZEwqZYXAnvT6RDvh",
  "key21": "xh6dkaU5ZvLBV8xK8fGUA1iJYB4MV1hPNpJQSqJ9CT1xWsBrwcaBBDV7sCy4mTXY7Zm7HN39DrVhHYrZSF436bE",
  "key22": "53UFHnfBiMvzi5ahESywRjGX1fVreFg22AwbDyGKXYBmZdewzxVRwKqskTKbaiqnUbSypXS2ESWBwLQjzdGRtq23",
  "key23": "4yFs9YgdrkX5Hpk1exarvESdHkqpzp9gsYqhcpi8Pcv2FJwzsNvQjcY5dnrgDuRV8yANuSwVzM6eGjoMW5Po1vMy",
  "key24": "3RjQ5ezoWyyT6GuDMtfgWXJ2vzb7tzV4rUxWszX3x6nt8QZzTKU1vznfXbm5AwaH57nA1uQZNmYfPqfdYkHS4BRK",
  "key25": "3bpMMWdbs6zZLMVL5ubeSREaNUcr5ZoiqPLTEZpVXaVACxzR64M7or3bi2ypk49LfBeqFazpDwx26Wo1dcisYVfd",
  "key26": "4Ph78sNzvGcgRkdaztEeLRiVKW5yWdA25REDYFhi4icgvFM8agcBQkVge5MbaBvtmEVdkcBWdgsUhjZRqKkCQAz2",
  "key27": "4EN3wkZyS8oW6QU8HTCCR6BBtGQgWavo8yYS1ujnrTGK675V2yFtHRNuW799GPBNiBRCNXogqz7TmMmJxZ3Bkbq7",
  "key28": "3sMDAzVbhf8F5ksLb7P3FLMprsevEfLUcJZbwwCMjhkndr2DZoCPVCiH4Z9TtSwgUJ1mAbgSLy5hwL5oxP4p1ETn",
  "key29": "36wsZJLRpYbiiCpAdyCAV9eDgG5Nq3gaV66LF7KYSDd39oxbvYFRYDjTaxYFe5T7rohizVjt3wEPcxFe2YViNWLB",
  "key30": "5ZBcj2XrtrcsdaXQLF8Ny8EFRd1mwgEVFvsA9gK5cgenMwQgrjK6P8HoSSQZKbW2tiGBQeQY3KPBWqECrVPoV1kt",
  "key31": "3CT5oigVsY6qTu6A4xkrHRLmnyowNRv7ddnUYdXciBGFzUrMD5sg4YsWJqTNEEh7Fib5zdLPX7ksAyGnn4haPjvJ",
  "key32": "3m1PLVVdap17U9eP5Pc1NmEr7iy6YDsvCAQ3h82d7ep69rn9pa23VRksFAzx1ugpL4SQLuamsN1Eg122nKMpRTG7",
  "key33": "AEUo8YwCapf1xeQsz46SUoX4ta8vJdUHHjHwwCD34yvE89CqvpqJ3dSdoNDWumJsHpXeNoUvd9w2QxyJB3Miu1P",
  "key34": "35spUyh6bF2vnwR1jmABPscHURjbCxFFHw7AuCfDeK7QtFW4fGPuUnzk81GwdQ2hP2QegspwQ5gNDGdKQ9V48dsW",
  "key35": "2HqxSuCNU54eAHjxvrMk87RdNUgsYwwt56FeLh98SMEbsqw6YYGB878odLCBkDgehNuytWPvjnLa5hmAosa25jxo",
  "key36": "311SVArqYkwvYxUZfkXsrXYVBXTDi7we6TDjGJwgiAzosyuya6Y1pjzFkrvsCyxhce7BGNHYsWG4eNHAAffEovDK",
  "key37": "4HbiCfSm4g2YZm25nWbHtwrsFyKvtF5J9r6UenRfGqPKbQRCgLsxaPev5praANLWjYEWFqsKajwogFVieMNiHz2",
  "key38": "9FB8nTNAg6AQDyE8g6zzQcxbucnzo1PutV9WpKvFzwx3i2DbdsABi97xX47FRzxDaQdtG5Ny7HSkHQjf41LqJVR",
  "key39": "2rcTCCaR3BXEnBecEHnkbPvn11VvMxYfYczrt1wdnk91qKs3fmxtK1kbq4gs95Ct1Sqo7Jc7Sb85Cf8a8jrLhbKW",
  "key40": "5FE2LFedYiNAama2WuFid88iME9HFFb9GHFMWTuj22MysptkaNUx854GE9GvfQAh8jCk4eRc1zTGC9PwS4BENYyb",
  "key41": "3TAFWs1xLvuD2iCKyK7GQBWLhEo6xxJnZ49Uf29uhgZpxNMtXJZH3v3ZEMR7uDpvUn7T6ojWVtJd5qnSvxxgEsa9",
  "key42": "2av1e93W2uXEiZ3kHkTaEsA4j1DiJDanmy3ZqWUWJ8MsPe3dYBrtTiTUbarTHxCUAPTfRmy1yxFPe5p4fpd84Y7F"
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
