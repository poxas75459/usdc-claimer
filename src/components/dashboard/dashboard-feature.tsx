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
    "5W8avrWTwi5L86zg9KBA6bTfwDRAAfBS8i3VCM15AJFZxHJpCyr3nQ2bEAgsv1YgfowpnSLtiXXgYzNo6fYtr7RZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hA8mNUBWboagnMGT77XQ9uGewXyptyeMECPLTNZCJawgtMi3vmkvYk15wY8xkazW7EP87fRGgA5VGGYjmwDWb77",
  "key1": "2ANXjtt9HZA9e4VcFgujkeJhsT6ka2mg4vNMtrJWhxqZhWmnjakHQrCoxfJcEZ6t33zdRhpvAnpusWsTPQ2YCm4U",
  "key2": "2Wj1275AA4nquA5ziS4imTttEApieQFfDnJvj2nuWWycxoeSy7XUfSkzGiXYR3BMkHc7V5j7aUydb5Cx4aBKUwTE",
  "key3": "oHaRkk79YBkfo9JJq4xGXxY37fohfVuFakDvTXjSLauHNug2k5pzSUDNPoYL4kmLAbPd7KKioBkeY7KGkNqPc6N",
  "key4": "3tKgDCe6Jd3UbALFC4k4ULWvD8sGQNDW9zfiXcjfcbR3LGE7B8xfoajKL5thNNrjXtqNkY5WAwnGGYwzfNoTPvmb",
  "key5": "47oVhyDmmjdqVRpBdweUZLvqFZ68vuzdRwTmu4zjeDsYdpH6MKRKPiVfZ3MGsYpbEyz38w6gjebpYNWP5hbwcCbJ",
  "key6": "4UsZW1U32F7ZVo2PmyzNe6R9HENLS6b1uo2hNVjAZNdoBwXWVwKKS6VsSC8RVFM9ruZRdvFbvEDuMX2JEpxcAee5",
  "key7": "3GA9SDhzWsBn2sYJQk74fj46Fo7bMy9iPoF2SsU7c7kqCg8BaTwKbc1HoqSjTDjF3Ry6fLR85xN6tz7FF1WZ9gfB",
  "key8": "2VcsUmbFG85S6zzq41QKPU6xGjDzLrgcZ6AUu825UdbEmYTLQeDHV2dRwXW7KTzvJ5Ns7CZ1KdiUJUeueZitrCvn",
  "key9": "5XZh62T4WveTLoAGnjghYJyj6Pfbhv2ZsWxA4vMoRZggYHaicBhoyi2GKTDGMgYF7kEU85Uk3tpzCxvVLWZWYQVD",
  "key10": "4bC3qJo4y8xMmWwBsQ6f6bcwXw146nEMSLHo4h9sKUuZoYvY8eux8qn9EqKvE1UPrLpRGGUZauFEXy7JyH8564yK",
  "key11": "2S6bLiJjVmduByxMgS83Een3qL9iRJ4pnwWGhSVC6HsrbyFph6SRTiU8PNbGLsAKQBSxEn9boY33Li7WipGvJrf",
  "key12": "2iu6u93hLyFVK1s7GBZ37wuVoY55EiWhh2ThMYjHbYeLR3TzmvAGxLg9xEV2WW2JUkLpPdsGiTbNZTQa3Wdhc8RC",
  "key13": "5HuccdPVvN6rUQksYGS9HHaxN4jVR73Lj4Xw5Hpc3aV1yGbwiEKPjmxkhr47QQmdbsvmXCPM2wqS8KscVfHBu1qz",
  "key14": "NgcEqL8gdndznG98f7UjferqSuTE6sLr2ndKQL7cm18x8PVf1tCostCxzKEexXgFBb9wwabozjBEpQJ9wPwTGzS",
  "key15": "3AK3v5YrvynfpPV3mbqoUPwVVzzamJ4XTKas6dyuCJhgMzrBX2Uvw6BV5PXdQ1naeoaT3uxtgELafTMjN6Zxanvx",
  "key16": "2739JLyFDztoAE6CLRGvhPQ6XoHCzkjd1MVWXcnp4qsjnoaesMjZTuWtetMWvwe3U8cJjRRGRMDNcBegYARyh3xe",
  "key17": "TYj7JhHB9oxDBvfoShke3seEUt43mUg5hJy7wdTpmDXXq21b2AdNMPvtRLBztKVFiXceCF7ubqdYuogDFRrEJME",
  "key18": "fCf5Ku6dq8doVeWX8o7N7X5p33idFzytCAHoCB9GAEaV9PdwsS7zQf2Gc2LaD6pxAqtBFnBV8D5sn4R4NFrdLYY",
  "key19": "3gSzhqkZZL7VQKBMaDCasKeTrHRH2ok75ZueUbcc1uQoKAFXhEELw4RrXc8k1HD5Np5uZzB1wVTCgtFncmVuo5tR",
  "key20": "4Ld1U6iT2vf8wQ3oVPsov9ZNWDCi6BkqKAmCfh82MNpWqVqVDnoQDFF9JDJpgcodgrGEiqndiRqWDgKg3ogNC2Qo",
  "key21": "2cZ94XAEioVWciNdQeaig4cWRfe6ySdLY7CsB6vgU9uABJoxLpzqBZ6AGnvXv29T8ShUoHzknnjN9hJohhiiC6bv",
  "key22": "67g3xFzsWoroJa83m1FiwyLjZDdC1pNFUZFNZUALtFLeBgWMihRG9beCVX1fxaMoh8xZFRsZhdXvZJ9E36s7GBJS",
  "key23": "4XYA4ftHWo7Q6m96JF1K3owR3Xbk862evLbfnN7546KbjijFjdBBo8DFGLs5FGLgbmFanSePH33yaLRYZDsqNo2B",
  "key24": "3BsD5oV3RaAgXMbMF6gNHj9Y4hqACCZsTwtL8gQCyZXCoZBzUsdafSMRHFAtvw9ghDDXpWZF3LGZhvW8oTqTzzvM",
  "key25": "2aJrLnRUhADRAm2Bfa7aSMY29tWukrGAE3hNV3H8tXiYozYEZUfuR9Pv9T7Vy4Gb1yf1x26h3PSQYq2Ph5tBYiRk",
  "key26": "5fD5rsGi12CaNnwdFZL9yDbeTWo1sSGoxQ7M63mGTA42QSu8ceYA9tfuD36e6KU17axt4fztAxe4Py5p2iyVFFA6",
  "key27": "5zZCToiDQLwYCjtT4u3G1eKtn8nt7dmkAupP4VP1X9uaao6z6KZnsh9PtoxrcQhnDM5tp228pA9aoPZeysKQSC7w",
  "key28": "4MEcNxFip5D2hpv5dqBYXaxyvixFVEtm2Ps74mLeURw3U6JMSwaHzWoG19z9YAb7QFdX8Cub6PrwzrXeLi36U8RW",
  "key29": "2J83KwBqXvZbXVEHZogMa8FYTLX2sN1ymKp8HhqpnSEpcd658sgrmowvfj9MpHyd1oTEpx26zdyFVoBbs49Ud9JF",
  "key30": "bznNFrCptF7DSV8tJcLoYwidj7JqET2reehMYiBWfCza8iuazzcZPimBN2tg2zztLTpY1CdB6wd87W96MZwCHm7",
  "key31": "5WQGM2UUnZN7TCeEVBK4AP9Q5mfxVv1nDmwZtizQT2hKDkdwgkDdKVbc1GQGYB3XLTA3eodPb4C2TDrijovJf4k3",
  "key32": "4GZukMqE9bE72hMZeKwb5s7JSmYc9hSUiTyfTkcEQhQjvUxGaf1Yxf5KZ5SsZMnmy7qkrwzCC1ihmhyeFnac6v1j",
  "key33": "3zCiSdTLxcaRur2wi317R7q87nFt3Z6BHYWh6KujeM6NErHceRMgYbjXb1iKqQ6iwDJU8VZmw9jXPMf5RFzUiMiT",
  "key34": "38hr3i7SLFcK9PH2jNBRmiTU64UVrr5E1sovHcfdARWPkGi2zZdqjSZHGq8YgU7s2j5FGD7kkd6JfJnkxNNWc5FU",
  "key35": "2u4Zj8qfkQzrGLf1xbC7cdLpM1tfyXkoq7nMuNXkrHaoXrJc1RndUaNzvQvDWYZzkzdpLdJVRidSkujSidKbX4Tq",
  "key36": "3KaQhfpgYNsvKPvspmLAN2R6MPSftNAUSripT8ee8npwNBrA5kDciX92MQE2EoUZgp77wjnz2X1xbpiE7u8G7Fs7",
  "key37": "3YQo4E33CqVK8eEWoGhogLsdetygE2EgeBWvcwALJnyBLJH8FK98mfXf54RvhUKgyjpMBiXDjcdEfWYYFhFTA9wz",
  "key38": "2U8w25LSYMXu77KTHdc2zZLGpMuT493xS8cLa78MdfqJBfpVSsP68jbuFynQyHipUNg7i37gJAhuC1T66E66bFH7",
  "key39": "53JqmEFdMuE8JSRJHwgxTieXMMepRproUWyedwjifHS2kExeyJNKQLLj92okuT4Q23omxqqr2mVJmxqbbxSXpMPp",
  "key40": "3qTam8W15wb38qTufc2zagcJv8ndpEnpb8PphQ2umaL3aMQBstJ2wzDPm4DECD4CTTYNZYS7TrmjQgW9gb6K17Qt",
  "key41": "2ojXauhzyy9G7WjR1ymV3JyQsNe7DzyDWLNtbqY1mn2XcKGqp2Cgh1ry6xi5sdqCWY5pD5UZFmZp2ckybHg1e8YE",
  "key42": "3mmDsLXEfqexVKpwEZgBT2VTdarEkAMbxWxsQtpvZiV8ZDGc726aSmrHzMLajJoFskqJoXbKS6WVH5RjEpwWqvzc",
  "key43": "5qZ5LZXQgvcu2nezesVxoECDFo1EFLjF4XmiyDgqH9Kbn1FEJYy8jkFyKKJETTs5st2ZCQXyo6S5YhZn66FMsRrz",
  "key44": "4pjD8RdPFjp7YmrPPE7vJhn27i5Xp9vWTVaDQx2AH5GaLkgoSmtBFb16Qwo7ykFRa7253Y1Dg5XE4gVCojHtDfA2",
  "key45": "w3FaNy6ViSp12tvyH3JJgiqVUUQQFg2zgwK8VuryqZRhiPWKvZFd1fuXdUESRqZm9Xhz1ghP8Kp4KayTTYKtDwK",
  "key46": "5qQ2U8runNt47zvs6cfqHE4Sk1QzB7HrJmrXcZL7CK2riuMdANVZmpY5Q1fGrbfCnzud9UGRcwTP1a7RkjJqWJU4",
  "key47": "3VEGtd3Lm5TaLbo2tX7UQLV2xyjHAemef4c2iKwQ26xkyqqJCtdf9Y8DTp1S1SKbb6auQPtWogpWf2owq1a5GfgT",
  "key48": "ZhJ9VMobdfvVvQkkBrwWNxLXnYw2V8Va9zjwrLJDSCH4w6Rp3jadGLjhz4E1ve62WpAGWzr7LiVgS8ZsBbzHv1Y",
  "key49": "45QY7f63ARkkMM97Y7QYxofEAVQeqLp29hhPKR2opZt2BjTcYPXjQsb1rK4EvFQ4XX14NfJcJUWD71SSmP8cTGVS"
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
