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
    "5heepuUHHWQvTDxvN1mFxjsKD4d6NPivR9FUQMQ3FBA3Vaohq2xhSzuKB5vCD2y2Sn9Hrwfu9vxFqNgMbZCNgYcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JyzZ4JFKNDsnYHbixE2hFA5zfDsB4SaNMJCqHDFuG6cJfq3CAw1cq73rZTwgTumab8EoebuXpHxaRgUsxTBnZF1",
  "key1": "5pbaFtNsVEVqB2QTLtSn62mMfY6LzYECav2FLs8migBhFEsPKSxu9ATBjd2dWVEfXrAAsTGuNV6UBrmMGsmdzBi9",
  "key2": "39zxMNFzAFhnuND34AzPKqQzCQdcZrifSfKd1e3VHPfd7MHKWheJJDJqbd1DiRoBnYwABsMdH4MZMSh6s9TCANRS",
  "key3": "3CEjuoQRKRM1J2JjGM8wvz2WRCsXrtUTN4Vd4K4tRMLPcDpA8q9kEqMyXrZjciYk7pyCkEw9d8bZpjo4w1b26scR",
  "key4": "2JaSgvQrtJciURi7saSPwmwdFNnkfTKr6i2zyoeNPtgC3feSrFvDT3LCtZpzQchXVwydB5kKWfqsjoUcmwAXmJMK",
  "key5": "2j8GFfNYS3q5jUKXJqhg4t2hWowp9MPa5WehThUDiHpZZ4eSKG6aGozNCDGr52ufPdNTDqnzrC3nFvadhwmERwCD",
  "key6": "49xhYxaB3MsG7pugUG6mLrVTNVKjk5YFZYeNLYjjDTEmiSboH8spAgpYbkptaKvVy1vMagicaDuAi44Xrmnmz1NK",
  "key7": "Bx1nTm9siyBBXspKJvNf1aJNF6F35oJw1X2eq58Hneccc31kN6iG82fTR8UFKpqBewSqppvGPZA34t9du7cifFN",
  "key8": "57rE6yET28XxgqFATPMstfGmRohiKSFP6iNt8mk9gRrQVx66SaWcYxme1Vv7NE2Hofu8BvU4x5qpa5BGcXWYTd7x",
  "key9": "2iEJ8hm47qm5JKP5BXPzkPAjJbsgFciop3Vksr14caFkw6XND4T2u2vGpHp9rZDXtRB2h9ndT9s4UEqkcT5AjShf",
  "key10": "2Jx4ifJaieBXZgh2sHMEC4VTLevF6X2Uf2moKLH7ajHXJaF1oGfKLW7LjUyLNr6RYARhSwDFnH9jpFv5XuyMrPp5",
  "key11": "126NUJkBYWSB4ApagyGGF7fGrHcUyHM22EMPURzUmdQaGimYQNahpHbDinPEnFHVjtKcWJ6dQM64mLwSh3Bffy9Y",
  "key12": "34teVgtr5zVcBgdafRJZxSjdCEAvFi4Gceyu23bMhv4pFydbyq2HAYAsp5vShFpEVqzdT1ce4fVrYvpTa8AbMtGA",
  "key13": "3V9PJHK8qFYRBRYWyj8CHsnXotkT8UZWFYRw3XXuWrC25dbSfVFqm5E3HHqFzZ4KQoSt7Qo8wRFMLWhEnEj2JiBP",
  "key14": "5f54YRQzQpn3Li1oWD3yQqxFXDy5HVTg1Ws8jVru54ro5tMgoTg4AjhbdxRvpb8aED2KvhgbLvnFBFrR3PHmsAH7",
  "key15": "4sQGpqdc1JKaRTgRU3Gn6HeLdSHBceyc5gDHZ5fGzq5qK3EKYwd14dkRdq1wGepccJDmzZD34QRtdxYx6r7ppyBc",
  "key16": "iKz1MVMQF3XPev7AGmrnbNwf2LZxjGnuCtAzhZ4CsKECsdsQDtVxtwAERaZFJw4wjNyuw1XjYGbAdZpqJM95GTF",
  "key17": "3e8oqgkeNkAM5FGiDppgpbN6ZijJhAWeJQPy4yLQhAYsaFvEwvVr9m54YEw7y8bqxAGcTEzSwWGaqYvRhXunN6Pd",
  "key18": "3R5yY47yT44aChKZd5MWNo4faYNM66yDxma8ofzcQjxiqi3a5G9FnsUKJ12ZEZ28vMYTebWwyjVvbZpeTjXFS3pt",
  "key19": "43pQ5HzYCHf7SWgoe1RMPRVaoQbxEugkSzxfG3t7fb7VRfL6zidPHYteUgKwTjcz63VkfmDNKQqAyCxihc1njFMV",
  "key20": "5FaZpFxmEMQnb23tD3k2ukktxrZL9NrwDpgrdFHvoHWi7f8EbJ1FVym55eCRdSZ3T84oNaPpJ98D7sbawh7fzcex",
  "key21": "3VR1mpG8RaqSgT1cvGncWJ4NsyU43N46bC1DpVsokjL52tmdn57PmitdeiQizbkUuXzRhosrJKEMjhXKpQ9UmhWX",
  "key22": "MJBswsTA7w2yjRHHf49dSVLnSc4rrWGq5tSH3KbeDdDZhf9MppA9pNie4z1JDQCqBnnFZ56YdRzYbsvj2ZnU5Ae",
  "key23": "4HvvUd5vre1xnsQ9h3F61EVVp4y6HVusLwr2hbjmMVStXe9GgQahih6zB9sgG7x3Vc2Wv31HuTum7anagNosidtL",
  "key24": "3PFKEeb63mDzockmh7AofrZMBsozzmpDWgK4BLEGpvghH2Bc3gt4Zc3vRUx3Q9K1GEU3oMesHj81dYEW5wcRGSpv",
  "key25": "3PZX9bnsr2To5xFiNjMUiPUGdDyziyp8K7eXLeRozk1eZRXs2UuLMRh3wNoVTnFh4mRiGqJKWeHByWYNjoNewTpa",
  "key26": "3SMhJWU6d7vYwUfH5QqPPGcbVCVFYwaNHTPvVzq2tNGehwrsXbjbBMcxf5YVouRayNWGYmjPtSxwkCJ9S5UT8qyn",
  "key27": "5mHx1DQiZMs4G1d6UrFDRmjTbqZh9hpbFDsvNeKUV8wPHVJ4cT1jUbrBUxMNKkpUWM2iFAGTj9UKRJLxM3kNe6gi",
  "key28": "4vzjfFKhgPSKEFvZHcRwBszWyMUiwG85mxoZRbh9g2p1x7GwinLMXBK9gR7Vg5yLFX1b4ko2t1uQxmGy6gKHWwS5",
  "key29": "349Z7GpFwgkxexHWaJaZ5a2PV7rQhHLwzEXtRgypuHjvzERQqb4c6cP5oRhPQFmmnztMZ46m2EhLNbGiKx1R7Vsy",
  "key30": "51y8WnZ91AQErA6vNavzB1nop7XWgpJQdNhcwgve1ZxLdcK3u9doLNGcbhr1zWXi9Fse1DhZY4FTx9c2VgGbS7Tb",
  "key31": "4w6YDDSWfZJDZq1DnJuKt4Vw54MQBFtnWVPpeS8SbWxZ3jmAHmBfibP8acGmiG8WvwGwVStE5QC2HQsQK4zkthGV",
  "key32": "5zNBfpv6YJMASighWzaUQCYUr8aKdBGGfSTBHrw5eTSGnczaRRxq8a9LhSLp2f8Zm4VAarZXVaXK6hihCoHwdRPE",
  "key33": "3ryWP2UtKXkaheuRHNm3jKEy8BV92suvgRuLSPxuxaiUpYEjYHnCzcBw3jGBByqrKo8CPAC2ETKPnpv3QbHHkmv7",
  "key34": "2gRcq2aZERZXrJeo6As1tTHxx53PRkFE2nuHjvjvf1uwdBXpGsr2KesgVybXHV2iz4aDKMEftKYcRm49vZgoNas",
  "key35": "H4KET2wg7eMBa4Da4iVQWaZXC2eDubSH3j1rqysRbNxdfs9o41PCNdLE87z1gQCYV1adNr5Rye4SLq63qZY9McH",
  "key36": "2azemenwfTYYSU8JWphLhy7d2eQyiYzcWeVZG9pX3M9pWMeJj8wwGmvakaDfFwAzWvaqUVrArLpP5m5tpMWMJFui",
  "key37": "4Nx8sc61JVR6bGDFz6U1giW2hSJqrdqkNPUER3UMGawixmbA5qKQYWjGdWXzs3osFxVLV5YiqqL4kYXmxQu1r7wm",
  "key38": "6H57zjnW4unaq38NRk43Sa8ubLtq9e48ocsR6SNnHeM3v81NGpabKMWid9QLzcTUE5GL56ybWzdmz4MTXubMtfb"
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
