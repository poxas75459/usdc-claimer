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
    "36eavEL71x5os7EMBUeSJuFeeT6GUNxmENHK5Y6k29JQwQ995pxWx1CG4nQfnA6Yf8hR69LGo7SN8F4ac1zzsZB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oxF2Uzyvd46b4wQXLDBnMTf37BHDv1VE8XD9dp75xvynF6vfiDus5LKQ7VXquprcYnhhjiKwWPwQUHwqohvWA7J",
  "key1": "5JAsaPVEMVosYv74Lgw6vER472jkenZgBFzDUEEySbmN6dxMfJxhB6BK1LwAWiC1EooRCPDAAemTyjdbQr5fpVNh",
  "key2": "4qCNviaikinYEyY8oXBkYHBp9TkdgwyGCeJkHcYTDEUAHkhwLR56aedR5caa874hixNgANPfmb7A9i2mtd8afAPS",
  "key3": "3p9iA3XwiLEnjGFpKLoP5Ni5HAdm3SnAFK6oFG5eGGyYVHD1F6GNi5XAM57mGuoKBj532sbxKW7RHQAWM8pcpTf4",
  "key4": "41gGZ3ST1CCGwZE55VNGWmyumafvVMMMcPqCe1o2YEmkBLNHEuhaLy3Bh4UjSu8ZHd7wxY1QhJWrt5Fh83B22jLE",
  "key5": "4RWDqmcRu7H78pz68iAYgvLX9eJoBtDQaUFkEBZnvJ2NXwGvUCVrferkbiyu8TDqk3oHMK6YbxJzjSxZAYgKEZMW",
  "key6": "678k9jkBc73N9ZHfENGE6K8fP5ZB4VE4Y7H9tSL2MVvNCFPgR4P1XemhxKzkNyVVFfBiSKy6VbnvxhdqRgsKFWL9",
  "key7": "2kvueiHmB1KkJnAcarLvwkUa4kPoaN3tt4fDdyL74pG6Z8GJsLC5GxEvUa58wsp1dBZbqekAkE3xRhztWqWDn2Rb",
  "key8": "5gZDNu1rMuPuWYWTq5svHfUKofvEmcHtSQJngY68uEiYkPeX6yQyDfgoEgWety3DZeDepv8RDsncmZbUFNZ9uEMW",
  "key9": "2KLxTcJbJrgoKnKv6c8HhkLor5JTUiA75FvU1qa8MJo4irENeFEGPJFRqDcvp3mZnHjYi2RVLtmZn1P8Uyrcn98p",
  "key10": "39ZmgGFHgsGT7GGcwUSyr7n9EQzDph68aQ8ZZBDRwKs97FZ4y92Cq8oXUgL4bgxSAJZu33ZXBb1PFm7BiCERsNK4",
  "key11": "4ezS5vGJskzPMFz2uEqUg9AcBdjv3n8TGNfdrXm2eofrjcPNkoqr7nniAc57FSPgQy3qGnrHGs3hxTecRePchvtg",
  "key12": "2gHFGRS6FAqT5q1b9nvnzafYCnSS6JUDTaTaT2tq3y2qh5dnwmJJ9A4fzHpHdkz8E6BKj2gkZLrcNUgL4DU3SKnk",
  "key13": "29fY9oqn5DDZW7ru9ncQ9RfBkjSZUuKvByRRZRn54YctS8gLfwtw1iWs54yMF6ZqbMBraf5CgiLrsNcQxifRNyBs",
  "key14": "57G9wQTvEsFghR3KibxPkn5aVZhDcf7LgBz9vUBr4dUwSBFmh6vZB6mYeqcxtrXSNS1WqryjTxpdk4wnPwLY9rMH",
  "key15": "3UxvB4prasqmQvJfdRrjk76zzdUNzg7HQpUznLFxexvavVPPNABtqRY2CpWKZKVFV5GWnbmEarP9ENjuwqaE8A1t",
  "key16": "4KHweGqjniUaLqTPSU6d9umDHXJn5yWKr3pb1F2zxD9MgeUYu4baBS1XQQ3YoG9hsRZztrWj1eUuzJvmYs33sFWs",
  "key17": "3bZWxuG3xXj4x8jqLPCxnA6L71a8Tq8D9Vzujz4mqzPupp3u19D6Kvy15kjSrnubCQ3YMEKM4mmwpBZ5Ae4XMSeS",
  "key18": "AE7YLRnMwVAH7orpAV8S9NrVGBdebqvy4CPYwudoMWwmtf14HunRnQArLMBhQBZCXwz7u7yCPo2K6fmk8q5LUuP",
  "key19": "4BKr316zMZc2NWfXkp6kRpi7chUY2eq7JZQgRb2peD4yoQ42PsobAJknJt8REk8Z5yopWL5GoAzfFo6sy7vBzFAm",
  "key20": "31J63X4fnqqZPTL3goTs13SJANXQZhbTBES8yX7VFi2JNoEizAi6ETgAGxhRRTgyKRJiAj1D9S7rxPpQQd7zH5AP",
  "key21": "4gpHuV9RoDJvQixsBUYDg9GyypMaiX7YbV9ZXJ7ivdbySXVUG7MkNQZJ7nHvEAGpPBnvuGUMaFmFyVPYjSdFnoMX",
  "key22": "3Gzz6XXVBpgooV5u4VND3jEMh3P7TnLCfJdWZzUVSeM2mmjpzPcsVZkoJxK2ff8AdZYfmrCtnWYEMBpQoiTM1c1o",
  "key23": "4qd6WkNghHnHWfCvoHt7tUNCr9nEKFcugPk3tyfzt19k6DxsM6FkxQhM6nUfVZU5bNEy22U1jMicN79r8XybhztC",
  "key24": "4ABnrY1xwPscSv8EfVfyd2BnoE6RaCMy5jAETK65d3JdJxFoxxvDMcDqkgECmXSinME9S28PQdU1C9Fx7KQuXufj",
  "key25": "4r2k6Gkk6m5pQyvAhgvoxjmzTb7YjQAwwmbQCwf9adMFqgojFTwiN6hXe4pSLwmZAmY7Fe5Cc3VvPJ322YxfNxx7",
  "key26": "YUYZ24S4r5Rzz9rnsUioCHWi19ovhWeEsKcxkPB238PdmJwYraMBvtsxdGnwwg47pt4YLdQGXxVP79VNTzPVsxD",
  "key27": "ydW2h4VuYDL8b9rT8Rvn2ikc6nCJD4EvQretaNGFaC1xLW5CNPdY85UFsruf4UkZnp1VNi5Y58dHK8VF8CMQRqe",
  "key28": "37WzM6qwQbbdbDctpLj58b9brtPgQxs8smFkt8YroCYbySyfuAbZeth4uyQBoYoqNKSDWfgU6B1rQNxjevzvMcEj",
  "key29": "7MLCcbcxzcsbTw44cjq1KqssGVF6AMj1rpgkyUuBHXtT52Jk3QoKmgp4yDvzLECV4EjxAQMUctQBMmhP9U8uL9R",
  "key30": "3GFcbwy5xoqxjpTmL4jNiVmDPgAf8J7ut5rxm1JcBKRMP2tk85Zk1MfZuk3kZF544TEmfLhxkhPgNY4fGRvXnN4q",
  "key31": "5hVbzsJtz7265EgY7KtTRbn2Sb6gRDYFHnJRMwVAnhKo84R2Gnb9VhFPdqpx5FZC1Hf8axGJZzhH4sbvGyM7K8JP",
  "key32": "Uhtu4RYAnX55j8coe4zDqaTnnu3XYpMZygqjpefFvkLCtgXcLcB4RGnagq5h27eyJt4rsotvQPYA6JFbEPMDCnm",
  "key33": "46tVNFgBAbofhepwhbyNkQEU7wspVgTSzGvbNh1N7VB2AHMjUKMwixe94AVth5pa1aZEWF8jYPLDgU8nH4yVNZyD",
  "key34": "62syoA7SadfrRjNZgsfQjraugQrvXxynirL1vqGD5hynnzyXrKaEzTT1qdTZNi274ybyEPUsUwdYmugr6KKcNeNn",
  "key35": "G3WA1FSWHdHMJGXJ8iR95pBRLvsGi2TGJs8gsEXgnsTUGs9nHb3GvSrTsgqG35BBX8UT7iBiV9B5Dt37KdH3mTP",
  "key36": "4GuNA6McbBkQKsHM5nLajv3GVfTnv79HYrjKpdscMZTEJhkk4V87wFziDiNUbFFb5RSqbC8Xi9gW21MtumPu9hp1",
  "key37": "5AvBCjAuWkXLjWH4ggevvHs3pFGLWxKYNdw1vVCnWJTiVjcnD6UKPQxQRnRrx26U2v9t2fUHN9ewr4JERoEVJYKv",
  "key38": "4L5TNnw2bk1VnXTVxCGuj6eQrFEMDQjMoL9fiLB7du4rPnUEZYxDMB7PNhFtxLFfzw21jHdyvAoVaHRiheAxLAFR",
  "key39": "66KiZM5BruFEpfDmNwUJvyKAraDuv932cvfUGKxNfiRWTLstoiZ2GRWVaStjPkmWVcExGfs52t1cMBnfHc2dJNnf",
  "key40": "KWq2dL6rQBeoruAM9GcNxTc8JJD9WQ4WKgDrkMiuYpWBdQ2FFaai2CpYY1zjCsPUxgTQgBcfZecbR4HmRx5CQ9m",
  "key41": "3f7Ff8qv2866SzU3KiZcBt4riWBepozL1jW7EAAD2s9NKA8FDZqe6pUbUXP5NzEABSJqjDbpwvTbkLByxNqGWPPH",
  "key42": "3SqQQVnUkhxy9oAYNLT2NHTHJDvkehoMjtdn5L2ycduEqe8hY6Kiyu1JfDjms7c4TyTDnoYVkYTCVZe1eYuB4Y2e",
  "key43": "3k3W7x1PA5tG17iAzYa9PgrLiwoAXSCY6mpo7PeuALfgeUMo8BPF9nhytQac9Nj6EuRYCHcmb5qhGjTcdQN6eA1t",
  "key44": "2SdrLqY1gHBFjDhn83ErcS6jW9FhUHrjaXArZzRiyBhx6o8r1pCU3RxUxM4sMS51mFVW6o8F8oijSXnk3gtCf9rT",
  "key45": "B4xm3Mh7UXFGRfA3hGJKJnX6tABsAL7kcnL1CdPQmS3SBrvjNCA3HShanxGJSU7hYcYTdUyw5nzSxYv5hPaJxDh",
  "key46": "tx84y7FBmSK3RiahXSdanMTm3Mm6ExZhSkZctDjXuQkjGxR3J8ow5VRk654ksgYPLfKn4DPYt3WeN7QJkzpgmqN",
  "key47": "5iHnTtBZNbv3FkuqBBogkwbN63tp4cw2VjKFyrx9psNSLqiwrveKpD2KZ2oEhwMoPQebGgi1JCa9sdLreNbHUyKv",
  "key48": "2cUrayWzEmNdJaNDWmtDhc7UumoxrUEfSJWcrCDZydXxTWXrM5TvDLq1S3YMySq8gSeLMdDmhXaPWnVeTdYA1b3s"
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
