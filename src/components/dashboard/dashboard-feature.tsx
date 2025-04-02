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
    "3L6qyw76VAp7ri3iDaYExoQbu6XAoPbUpMBdzete6G48HzjJ27wJhxpSoFSVTCxEfiRnvSecug8dK21QmaySHWgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BeGu5Uv4cddYxxesGgzWnH5un4kzk3g3B7vDSgHSeMbCo7hd2eBpwnHNdmELLp14aMtHvWZHwvqZAmDHdzmFPQp",
  "key1": "5S2wYAzezphVj7B9oex8bmnjL97P4MbaZhNGt42vaf61wEsNDmbG2bvHxH9sicxuGjb5BSWFnARo6wnPWZmHuano",
  "key2": "3AjMi9uNHqG9J7Pie8ee6y1U9YcyX3EiPf5NuJkJb4uftHGjSwFLinG8WMfgwjXdfvTSAQ5gHZDx9JBDwYkCBtP1",
  "key3": "CrR4sLxMGvB37rnyA2ZFKdDqinPAeN4ofsUizzvCqJ2A8nuiwhw58xYu7TynFJwVSJwLCqo3MWhEXqrQEm2ivoa",
  "key4": "5oHZYcd9TDAC3YpZ9AVLECVbNAaJw9xavs7bfHmWFrRfMFBMFzJ4oykA41hwWT6kYXXK22BYrohV5Pv7gfg5DEAZ",
  "key5": "38pqDCRz6spCHKvRA9VsoQZ5qjBaNqs6Fq6WFU6fqrxkuVncu6bRTHBqqb2dwsgmz34jrEUw6QNbKzau3jmBCTCp",
  "key6": "5RycLX72S7tNyBQsEsbkyZiiwQPTYLXWZBE6xiWfmnw3g78fZkm8GAK3pFpHx2Ub1MhhnHq5FPYWiR6cvRNVfJuR",
  "key7": "3psUxSZUgSjLV81ZTsHo1natsmQsQTpiipeGrT2KiGZhKSzpUi3JWWsnh8Xmy4RdQniw23v8Z1sPNaqe1k3MRK9C",
  "key8": "2QWx9yXdAxw1v7Yh9E6P3A933DwjW14a282KZzftTetSv3qTi36ust7cofQej9Yx7tk9NDNt8diJvZbLr6Mt37vV",
  "key9": "2FNW2SwKjNdD7LcKd2dtUuS5vzcUxoEs5Mngs59niDqxp9WePTxJtzg8ULePtJ8i1mYeNCHNH5CU9fxE3chhp3Cx",
  "key10": "5HV5fvDjB4mo6bb6QQJaQePhjWRrz36e6RcZty44JoWgjaQ6kdzt5emxqUAWP5j5zqDW4Be9QR3fBxZ9rgXdoMQ5",
  "key11": "3RK1rE5CSi1dJEaY6QeZiMEriMBZabRWxepVhwvazrAvNETV68TCW5HuyWUzzuzNAtrrFZpFBFP3VzM54atvfcuy",
  "key12": "qN8zqo3Ton3U5qqwo6Tam5JyvhibpCWSYHWD7FNu6T7L6C6QhSz9HQGRDknPv7DtsCoAHKtA7WyTa1MaJsxU3nj",
  "key13": "2sXRQZg8HLJ9bDC3gonRuij2WXbCLvvFRCcHT1PUQMGXnimU4VkPXisyc7cGMqjHuAZqsSRisz4Xkjm3Ma9nMuXB",
  "key14": "2bu999AAXD4VVFnKuCg4WiWUQrgq5pnPRBHCvrXxaCU8TxjH2jFQGcdWbGTMHWwJvMfbmReg1cvFKDDsLvCvJuT1",
  "key15": "2XwaLMrHFAFZemawxMPJDvsmfjMUif5BVP2aC8vJQkRsSBYemUXxy5XkbFRDGx345UEgKE7qAuv4a8YVyVxEBUmm",
  "key16": "2onebvQTgGvxt65hdAwnVNsjRrWwktR5GngwdXKwbqEhktRs2AkHUu7YKmZ4fx2kvyE4A261D5jurC1oULoHj9RJ",
  "key17": "3qiEyygT9uJ2iFmL9HjDFA8bDkhho5VsHCEwXkd77wLKeXRubC2GehpjP2Cof7KPUiF6AWvqRseBoFhPJFZY6TYH",
  "key18": "M2DmLygjBmR5YvjTqK3hgzwcVpbBPdRZHvpGXgS6KC1Mx3A7YFwozj6dZ4rYtRNtxAM6Qwo3Jwzp2wT24vPQ3mv",
  "key19": "z8xuzPgERuZzt8suoF9HPm8McEmwzXZyM1AcLz5Ku2XwMqBFYfUMyCnFcShzuQCqQD4ogCzspEMbiWi5iDFXvD8",
  "key20": "2YKSgeycsi2nfNHKAQDhzEv8oKhQuKfUTeYauGS7wxrtSzG5mTDdVWyB6qGGY7KpjM2c9Pc2jzGnhkStLbgi1MKG",
  "key21": "2nWqLD2WE4ii4yhh8uzxNEQ6kq9onufXRFELj5p3FG9JQgZfm4zFkhqgUJdQiiTCogQ65FrVaFmztYsPGeu84jr7",
  "key22": "3Zgo9iXfgzjAEXq2RtbUhL3Bg7KK3ZUcazWnSvHNXDUZa2r75PjNMufzDrwQp8i2U9wxQ1qH4YXBeRGgXxoL9roH",
  "key23": "3yh14VKcQJ6kxWifZi6B9DWiwY79anp9YYJt7Tm1Fu5r2tvPpHUAb2AY5L5iXjuCKcFvmJzp44f7HMduedM7Lohv",
  "key24": "5coabrNmesSn2rLq2XjfUTR38V99NusVcM92KPYCHxjzFB1Badehxho5noUgCX2Ptqv9kAs71STftampLUFGtyvt",
  "key25": "4pSUSTKPb9dUsdwNx8DLuQGrkb1bXvfACrLBqvVMwgtdTgpLhFg4uhZgDn23btBrqHCvT17b37xWnJtph26pnBaY",
  "key26": "KkTFqDpfdJm396tGyqdVTJKMJRBaVReo6nPL7wGXfSv88ijrBeiGdHaWc4xoQzFwmmPZTypB8RaX6qibxDLuQbx",
  "key27": "43cjvz6f2Uqpc3UujSvMDhmyvcp5jL6uYkp64FscxqFfjYvWTYiT21abJqr3sfWoQQLgdZbHRnfXHBQjkXsarvLu",
  "key28": "2cMT197kQq8HqUdE7DXaxHncF52HJJdFoA9TBjnRWv3yz9kj9pTsKEwMdpQXQeqfbSYAhpxHsPvmMg1XPrDN9ij7",
  "key29": "ZJTpvJd6i5v8fvHnBT41YuS2BQhd97VEn6CWeq3tX9ZYv3ziAsCa3pSAHMarLiVfDesq5hv4KFireAu7hmmoEVK",
  "key30": "63ZjnuYYMaTVG4qWzAUayzsvpLpbM3xctUUqM2AFUNir4Cy4Q7yhgcfC5CXbFuK4w8wVfCwHTLCGU6QXwYLKuyx1",
  "key31": "q2F5aD1x4pWDsRjMbVRv1nUVyLU4PyRJeebY2wyPL7TCNHh9Fq8JQjKEnLE26bZ6mVQp1oeRL6ukoeWAmqCSJTP",
  "key32": "4xCPjRHWu6mAKiPKBHeMnspWMFWru2PQk7V6wnyjSBLM9U6emuVa5dLE82a3pD7TNU8Rm3zEGscwPVPRVvh2nA8o",
  "key33": "5QS925VpRAZs544TRVzMgcX1nQJ6isJXEdzUYWXrRyDonCmoaUHNZA2UUeKPbRNhpv7tbTEUCGsbdQNWNpVgaddy",
  "key34": "49dShB2ENFSbFmakDXJ8fS1TbAGxqEjJJbBGdaRHcCLRKiJzDF9hSAdFmzbzp46vPLD85ZairT8PnyEEuytJmZfo",
  "key35": "4stzmErHqALPPWA2rzAxg956zy9FTWi8KuahpDG1XapTZQ8xjpaqTNuzYfj48xRRUcB4GZucbvy9dFyfBSZVPnae",
  "key36": "3EoVic3nsT51A3AWwT2JNrY3QaTbYMreJ5qK1hkR2iHWN33cpzYQTbiD78iwxRbrd44gWRoUB9HS71BWTRsHPemr",
  "key37": "r7y8131Pgrva7DAAwWnJtw4E4pbFpE1JcjVc7tWXd8CKx8o2HwnTxQLxZGiDF624DSD1XBUWDSG3FnQgQv4xY3h",
  "key38": "3BUCivf3naKiYgQkkjLSJFP2uJuTFV79jghkRsVdM3EtrtAMeDDSLXU9xFpgGwoQpaBxk6AfiJm44GCWqHx5f28L",
  "key39": "5Ud22KE96oPN3DvGdGL7aE2dF2cD7M5pGk6Lm9ANri1UFft9HbuDbTb9W6mX126yfew3JXs4CT46xEiF9CJrqFRP",
  "key40": "63weccCnNDhX6L9xJBqLCnVVRtjYwRuuqSoxc3BNmRHgZSXccfCNNy5N6Cuin34Rd2LLZ7XeyT57rWwzoj5ejM9K",
  "key41": "3VjJM9g4jcmwofdBZsTsWsjJiWgxdMXJ242zNWbJNnM3sKVe4sfjv2HCqxKMkEF8bW16ziQyW2N7kRaSJ1LQDEU4",
  "key42": "2Zq8VWBHn56uiFMuTwVq38JwDz5XUQ2q9Rac94zNgccKM53HdpFamUwLQAzSsC7x2NLy3w4NzwTfzQGeBbuqiaGu",
  "key43": "357Fridc9wuCQ9xyKgxFbYZq7anUqv34CU1E3kksi7WQTBC1AvC2Q2Lh82wmPPQaDoRAjHRK384n2CnE9BoeFWfC",
  "key44": "4VnjaqTQnMLAYeY7pA5EzZnMgWPt7431vTVd1ifn3piwEf3BJ9E4aXAtXeNdMdQc3XqMKyiwzjCUoj6TU97xbT1q",
  "key45": "4z44SgXmAVvdfSR6DfNbgDYrcCsVrmMeMWpeCReaJYodQoEVkjCrQ9SFnfvGv76yHjppmbA21AesCBWpBwvXsWbc",
  "key46": "wsp9YSHb2KuxPMrETcwsuXvsb9ZCjrmStaW4y7M9pmS9YFxzrQFrQMoc2kXK8v6LTwS9u4YVoVbV2CQ56RV791m"
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
