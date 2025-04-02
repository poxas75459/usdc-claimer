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
    "2FxUMyLayvYEa9vQwHDMGVAN25QNA9YfQVcnSKFv7LfYfmxJP3MSWz4pN6bYgb1eZ6nioVJZydzR8nzSsPPt626t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uu5P6G9QQWZxJeF7VsmNs2ztZw8iLbWTdtg9EfEbNZMEkFxAebudQgcEtxUDQcMmiu9Wu22jTk4x6y5j7VfVZW4",
  "key1": "2wuxjnRwvA1e6KQ4GPxU8aWMGYPCQryGagxqtMPeBYWAMBwWcKnu9GsisKbQ4LcFUnL8MYg96ck4sQxtbUUHDKnw",
  "key2": "2V9oZAEGsHdvzCFnM8ddAB9rNRTew5SfCEG8R5BbrxgfF1JYZGjFMeFpom6jJrt2awSgCufQA9CPhqZ1rhp3NpBY",
  "key3": "48ZnDbXu8mVbhFHWrDsHCESkJfc23NrQHWFbUZLWRPFaBEND1pFaW3cx3iPqnYskaWp7kL7K7gnkTrULubXTNyCb",
  "key4": "4uLVXGukeaZBEiMPDVwzLqzgUkoA9PvLtWv9t66WrmcAzws252zKzv24SiMoG9ZWvJvZ3YQf423HGjD5ZbeAN2tz",
  "key5": "4XGioum6UjSKDrJBZK81ji3pGZ5F468uGeydyZMgTBefQjYWC53siEcGG4MtPEkjL1sQe1vvZVtYKKNkCJRnMH6S",
  "key6": "2bGoGRh5sqSWrJ2NPdmrX6sZmbkFccQYqATuZuHkDUVJV1jN5CfV8G33jsSYVdXut42MDP27TGnMfuwrCzhzVJEd",
  "key7": "4kzPS5o54TqSakAYxCyy3QZtuY5XFwLB6vYjRB6iQvTgpJRriDSWpRUEjWbxEMJg9R3NUtFXsdiVuroTu8zCYaUJ",
  "key8": "55eytefzvUxGAVBwjuZy7TSo1Vxum7ssvNe2DCbYqr7BkLQpCW9eXL6AvpaeURb6ehSNMJrJVcDQe6935Rctmc5r",
  "key9": "3x34yQstV2sFuAgzSmKwjqZp4kEbQgr8hwhCuFAXxzwuyo94Hvov4st24JJQNKLbEuFEezvNcSL1UQntkkiGyn9q",
  "key10": "GZ8jFsMpN9hoyA2xQLwPjxCGQiZhCYCdmYNP3E5fCFvCvkScoCptPVfwdMoY9x3VUFPu3W7kyf9oNBEiFpoRkjk",
  "key11": "4JzeGb8y4MT9WW1MLtwZbjDY9HGDybuQtiwyPm9HMXGvzRvPbxU7qZDB8hK2fvgtpLheYtthb4EKN2GHZzeGeHci",
  "key12": "DorqhBjvJd3ZdHzjVyFEXBBG9v78kgpnyqoAMn389CmSiguPyw3bMG4pVCUK5kS62nKwMUhjLZfi5qYtWxcUgZN",
  "key13": "21fTPhZB2ggDKy38bDW1hWZn1Ytbou2TADbetU36jLccAcLcRa8kK5ToKH7Ym5oe2HysAg5mgjTKu5qPDjBT7Q8w",
  "key14": "4Rb65damQEU8JCNQjV8WhYckhoPAiLi1w1chPVHFEKwqPo5yZkRq3x5mt8Kk1uK83vaPbWnSTEPcYGbNZRmm85wv",
  "key15": "2XWHH5ztb8FF1hjTNVS1wYz9MKwqRDUuvm94DHMaPhF3FcgYXRThjnQ2TPte7y3mBRoRVbeJ1uMG9ETfmznHdbFx",
  "key16": "551Fy1JsFfgRHuPHJf3bF7yfC6JbAqLdQDQFqWjXVo57Z2ASe21MWvyzHZFboYoey9DV4YLEqXzYMwCNgM7jF8o9",
  "key17": "46mxHm5V36YEFoaoJcHaZttHFGM8FzqmSkq32pPo5H5HbCNnDLuQemRXtvR4TgKiWTwemqb4MUsoFiFUBe1B2He8",
  "key18": "TxznKoUbhsL7tvA7DTzLFRxDWzLRNFBASwj12okkMJqwKZpTD8mpSfgBM8d66h7HmuZRkhZ4aB3nXBxz3bRUN4h",
  "key19": "fCFSXUtvUm4QZU5q9NMASSXohzZmScxMDhsNSNeh1bRdDFcpbqaycAgfpSitc7g4MtMxgbG5UxcaMZw6rNnJ7eq",
  "key20": "3iZxtTa2KGzexh7V3wSLipWU7AYMDcAPyqbz8fKXhL1tzsLR25bTR1aNZYdgwG9CtRuVV2xeiRTJdRqCAyxeXhcH",
  "key21": "3UzKESAHhQG9t7583NhbsbBhqDzdtSXHoyY2rmizBkVmv59i8XFTetpFydNuwUeXBzYzooR3h6vppQrwAn6P3gvj",
  "key22": "3wHTZ2Sd44VRM5tSSayzfBNfr8KXS95WwxtmFbJSGH1Yvv7im2wP51MtBD19yCF6CwQ1omu5jy26hzpZX8WDqeNk",
  "key23": "94oLMbC2DDMWEXDFTFwXPTeoY1zMH7Tj6E5qyif7Lr95dey19jcvrSDoFJMWnyLa3QWnTZrTkdmaQmE8Gh52Lwj",
  "key24": "38jkGb5nHRvPKE2dZmS3aiErtn6mtQhzzCJwTv9PAQQHuzEXUeWtwd7VAgBy6erstCEYPbe7dj24Jcoi2pqDZSVc",
  "key25": "3nnMydtkYuNSyaQbGYWrfThBHNJqBcbCk6qudytvugeU6yHadmecv6ntqfqjZh9SUuxFkyp9ZcwYmTgScNPJb4yW",
  "key26": "exDQwucpeDMiD2bMPu9rMoytNztfVcCs2zbh5PcmKLyGw3P3gyx2HtArntL5T6cabqX2NvNqYU5zoLwhWvsAnWY",
  "key27": "53XwyBqiMt3jUwXt8Cr9tMYBDz3TWoa8LyjMXWcxyMChnNLw4pH8ccBamZU296SuAUL6kdGUZDqp8Ngh19Jf5Bag",
  "key28": "nkPmnBkp7jvkNzooLziHdFBsqP2XRvCmyMUefKC1a76XyH81CGQQuPjmCnLxuGE1ybfrV4nBHapwjrgAqZLZ1xn",
  "key29": "2Ph8LUUHHzBqqzRSbKw7VX5yptLdx2WgDTuLB7d96J8AYQ1f4arzEsEmRGnkyp3j4cnCVTpqRZhuucdQfdRVeDDP",
  "key30": "673Ff3t17fKsc4TL7DuEiF1v2c1AkqHdu6QFXe3ASwmtrTswUuMy1Dqn4NZ1HGgm2QLNBtr7rpJm6eMMS3jqHz4Q",
  "key31": "2XMqJXEZ7taiwiiS6svZ5HH7smwPC218avKzzjh8JqA6h93zrSe8KbZ4xmGECGuwHbDk2jpVLqiUfAKh2kqDEXR2",
  "key32": "9gUF9NEAGLpNT6VjxPVnVqkiuGDhmz9Ddc4kPB3dTtwThkLBSyB6QbKNpbiBinoWptWDFYrD7JDDmbS1s3AEais",
  "key33": "3wgdfGJGqfyu4W7V4KUk3BLHUtvLBe8VCKA8RC4UPxQBV7xxXeu2E3BtEzMQVySMC3JpVXqvPgrvE1mJPEmTPaMA",
  "key34": "Y1BFDEYrcfRwYAXeRtyUN6KRjVB1AeFqx5d55YLzDquBjoqSrThAUHf8pkcUqp58uyZ2kbzBSHiqSUC6J5jva26",
  "key35": "dEoKpCkaS5aFcgYF39EnA2budkwLePBTr2uSTfhz9TFBVLecDhMUGttUzY8rUtS4y5RWgWz4mRCt3jPpeT3dm1T",
  "key36": "21Sj8dgR8oMJqxRjDYRgZRq6cPtSHu4EUeXBQmYbwE6Q7iNT9yDCVumZJMFebX3FxH73ZFr6xwq4JcohSDtwqpYs",
  "key37": "2mM3d8m2VebWk9rXq7DZxbn8r8ATLxCiVCUJxniKVKjAE3rpC3N6nKWsVnSE1e64f1Xj6orLuWbpC3UmG7gGpYQK",
  "key38": "5RNzvTp6dazvLp96xxmVce8y98opkz3pZt1vebJE6yy1fjRqdYpTnDzkdN72fsQr5YXCMMonQ15Xosbq1ekfywrP",
  "key39": "2nPKDU57guL338wHTcDrTQNMx6DVon15BKjLuWq6khTcdbHqH9peHRTPTRK5q8m3tsZVrwY8nNiGy3uadN41wcQb",
  "key40": "orRacgceb8RkhPS9ae39EUshi98DwMatBaBt9AsV1drcjDKbmDXEfRqM2GUu7spFoJBbua8X4whDdQafm44CJ6u",
  "key41": "41MxmkWGxMrZwv456G6pYNu6N1akFjq2wgZnK6z2yGTwmt7ETvkemd19AnngyWGTjXM6UKLib5NwfYmzgNymquSQ",
  "key42": "43rDS4ivNijvyrxSgXUd8ot6DpzfjycSoXZUsV729W1Ps3a1bvPmxpDHAzugBcJQD4NDww56L6roPSj6SNgTEQpY",
  "key43": "52d1F2MAXrMewpUykHsoFXfHMDX278RMKDMw7Nus9tumsohVtCrAeSguZWPXPgCoWq3Y927WyLA23BZU3Z129JFK",
  "key44": "66DHuhAsuVThaCLkMWNfXMer7cr3cyiFzktjQrvLtomFQJHdHgBgA5uXGKxhTnVGRBNJgwJpPXSuTdGfuEJYyD6J",
  "key45": "5u6v6PpKL3XbXMbj4VMVNm5i61sNFCM4rKHHTbHM6VwEjyUY5tJGZPxWKaEXpqjQRsJ4KpY2bhyfJK3G3vn9UH1Z"
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
