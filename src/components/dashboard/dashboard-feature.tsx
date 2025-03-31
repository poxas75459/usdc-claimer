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
    "5vARkpj6fkXVzuTUTi1YTW4PvihbxjqsmKFmWvtY59MyY7PWXBDoEbAmkiH7y9CzzQjQdEnRmpQ9qxo3d9QhnL71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WfYCzgMyHmTn97C7axkFYKcctmFnC8RDMxm7UqdmAGgy8BUwDonR29ifio3xYqG26MiNd8vNyvYBDBT9jPgRJFR",
  "key1": "5eC4a6LX4hawHpy1xL3BbyCYMk3ghL1GeqkP2LyHYjdfzqFx2JGanKJXhXJmftZeEQ4U7doCZ5HnShpVCHDx52iZ",
  "key2": "41XW23wT4hS3nYSwhmPDTpwjgaSBDbLQY6mmjEdUzfE9GXXdHQA66SSCAuYD8eFAYSRx2UPQZ1VgZ4FKGoV34Cgk",
  "key3": "4Ae2fbLXrS4kV6yCktcUnsgkw71e1WxcGrpKfqhh1oYgftNgSjutcpfhNhTK47Gzwv8cWFq8j4r9uQRohefov3ZD",
  "key4": "42h8REtkxzx82zX6Gm2E2RBdipXaw3L7tnFuSppityGXdQUgn18ZzYQwpHBDzoTRU2BPxJpcViKZA3Lv3SMvkZdp",
  "key5": "4n9j6Cdbu3xtFXKfw1xZKs1mAw8RkSbCB3Kd3wTsSCFdNWrrwfqsLHwJhgLXxFi9ouEhQx5jDknmBc8uCGpZfWAB",
  "key6": "3VfKkZqos8QLbWcp2x1vCT6x23Y5WSZ3Cdug3HyL6kpedfYQ7GLwHSErFAiTQLppPH4iwsx5QhXJzoCXTbLyeN76",
  "key7": "2U5CbP2qmgQeN6GuiHWSsK3na5UE6XABfhu31FLCAiZwwLuKMfmHYxGzmrVvBAuV2RWtvWiYcLEXeGMZMhe358CQ",
  "key8": "2nysZ5cK6ZySmbcErSNW4tjSUVZEohz41a62yRXu1RcC2Xk7tQtmJwwLn7sTo4Zr933SErGsHSpHqsJ82SvtV2cR",
  "key9": "2MSEUo7CF9q5hwxaN54xyhZg2azjVSSDNacdFdMeFNE1sAUrCeWY6yHvLmSnKXkuciy4VxUgcWdZMz5BSf6uSHyn",
  "key10": "TRaChg6Sih1mSqyMRT5dcgo2sDMQe7EbjPdpEdERJZnV3LJRjYSpzU1Kh1Lxx6eTt5ncCX8TwCDkxeunA3SsYA5",
  "key11": "5CJU84ogpKCndi4WDimwFEXMgqHVpja4Xd9XTXmDmzciGmPtV6aTw9HHfE4ixv9rCsynXXUXYyZGigCXB5nt9zkr",
  "key12": "4dzAh9fajbREhsQLrBXoxPwoimww8TcVBSJovuVTXwhCADyiHKx2Bp4ptSqyqyeCtTRdgeXPC9ygKH8LgfEFcpwx",
  "key13": "2dwweNDBLqEUsFJN1oGPGs8jTsfoS6Fm3uSEJGAPPYhTbcv66ms36KptzAcgXtMnHB5UoJynXtZidYPyREPhuZvy",
  "key14": "4HvYdmgvFK3DFMVKjynwFxYHLzqqTwpXjzMHvPA9rLPxQ5VsSxgwNChCSfEGX3RNiuCdYfawy7tPTUpfrMo6J5jZ",
  "key15": "5bT8m5WUuhxVCC6rtEC5UXsCvCq8Mtygwy8qCsfmjz7zwoQPWfXmW99FfjHcSTVhm4fkwvLVPvvf4h1TTkqFNJS9",
  "key16": "2hrMBLouu7jq5qPtqZP689emgf5i9ab42cXuVkuWsomfu7wk8Ye1bwN98dXvWDgsHNzxAHQqeeXxp2BLwzCv4NR8",
  "key17": "588KMdwQYoXTw5ozAPQERVavKS86qtJpoLgXCRZzz32PFsh4GJNCAk6ZGPSMgEafjYA7uSw7m7a7jBXku4mQckaw",
  "key18": "5jdxVKEhzb6TT84qSoqKh4aJKwZAvLQbhbt3sS1ZmrVVJuEiaG7iGfLPoEoNGfBycm3Fufrgx1gX84sFgRpSFBSq",
  "key19": "7Y2wgg4sufMUARk5zcqHc68nuSLWGC6L6GqhoT8hmjXcGmcvbhmNgmKtymydjE47zecsx98ALACrP2aKo3N1yag",
  "key20": "JPXziCeSDiPY5pxz4UwCWK7VVukteebM2hLsjdmf67gxE6nJ7TNE562nRw154DVYUJs38cjxdBzKRMTtCmjDQfe",
  "key21": "sM2s2iraucygCdTvh6ZXLmaVVSzpjQ4GN4DWHZfxDZU42sjgZKeiErKarPHoxZpmqwVJL9MzDJY5d2Q85emDK5s",
  "key22": "2wEbtcYHqbVTr3GVfNGvKZBUbXKKPvZN7GbF5jXg7kfX44LcUFsynjzTtviX8aZPyqtsbPWSSdTgwobARdsgbQuU",
  "key23": "v5G8WrmHsW283t35fHVFV6vczpHJnMHRjB84mraEuN9xcAVSyXyi6dXTT1dQbqwPVZELeTWBHoYk5ZiJAxu5sbE",
  "key24": "3WBgqTXXeynx5TuAGmwekV1cAi3zgXUw9j9Vh64t5uMrYZfYhGWMQhw2ixgrgSH6PVXWkLqbK2C9CePugr8bcLdJ",
  "key25": "286si9T5QM7JKH9vFee913iCqLyp8fSvWcchdHm94pYYDkg79ZDnNPFf6DvHKExk9zv4KHBdhBw5HA5A6auhTbKW",
  "key26": "SFL1xyYsCKhJqBNE9Q1u9PftNpsxyWGEjLwCrPVsZZicP9mGWHiu3pA598ujEaqyFAD4nkt7pNHvSoUC1ThqWGr",
  "key27": "66WLRoNUm459CfPD2xjNJ4dPxwvEnLryy5DeTYT2pAbJTuSYXbmzQ435aqRhjYqh1BckvXZVY58h9WkrWZd7AVc5",
  "key28": "tj5VK5aCWvitLb7JYDnh1qgsLsTtVhyuJW1f3dhamgt6CQjmfuMCQ8NiLv9CmosMNBmUKkdQnSx78ZGCko2juoT",
  "key29": "5ycKksTMLaWr2Mf9BqnAmp2fdpHwGckjJ7UUoiZbRT1VmeYcywzeVtmHeoa8bFmmR8cu7gAjgHN6HfosYwbvb67u",
  "key30": "3aBJx66LU75GW2vwM8DndhGjgST7FXX1R9Srb1he2u4fHmtGKxkysspGguG15tQZswTff46AxqTxapJZJA6VnHDf",
  "key31": "4zwpFXctYwaqALGUXJHx3rQM7NVGx2ApPtsJFMgQ4LixVUZFuSeq7B3RCJqjcGL6eQx1dv1WcYLqHXybDrmqkoN1",
  "key32": "3wbiE8ZAT3d9CXPNSdC9RSBreVDzKEPtBBjrVXmMGf7qq5wobxmhgBVhWftYNzhL8sT5c31Sf7hjj4QHUTNX1mZD",
  "key33": "4RNVcHaJHfQ2uucPrifqGsiUgTuRX3DsZ6ijynE2Q1n38QhAnjja2CYApWgJ7BTzzeF2tFCRXwhdy5w181Xc3ZDB",
  "key34": "5QSMFzzHxLFVzUcJEZpCN56ExQijpoucX1aH578diM9RWvG5Fc3TxdNhtqh6GJkXqxUmi82CHbTn2wWAaecgu8rh",
  "key35": "4Kwq6rqd2vTCDas1prhx6n6Rq3sJEkaSBqo33rG3rA5whv6b88z9YzEAndRJZFB9do9hwhgegCP6YMMMeErRaSq",
  "key36": "5VC8qDKThjjsUL9TU9UsCjphA3wkyi8CD7uyn5rc4SfxDYnMeK6jeJDXua7skdpYa77R9yxTJ38JSPjvRkkuVxSK",
  "key37": "d7tPrNaCVd8VzePMBkzNuJPr1VJDY23QVwicpjo5rrB5HMu9tQEncV74RqTAfqYooAtGYMf7YGGjEQXNyn83ePm",
  "key38": "2cmoB6UAg1qPt1WSqmZ1gHwwq2eSLDch2fsFPgQxKfJ697LAKAEQkiVkjjymSj5NgbWqy6vkyPQZ9kYcz2YE95mi",
  "key39": "5wXRfpq39XAztFBRVuR8fUuPsXjWLV9mji5hoQeLReabgWrEj8KXmVdi8XYzkGCTwvMQo4PZp5ckNmbDJi2NqscZ",
  "key40": "XLjY79yDeuWX8YZZnYqQnSGTti7ZgChbozZW4jRSSkxjHKA1dBgY5oTg7RbFUKbk68B94tdvSKHv32cC6bc1MvR",
  "key41": "4qYRvhF7BoQAScyKq3sncSAvuTT5hraMNGJEZa1XZmS2kMnaT8NUiWeNcewsB3jKvdTYk9Wqo23Fw9RFvXU4F15B",
  "key42": "3dbso2bFp5z8ESXkDLvnd7u3AP15Pe5bSGFcgs5ffyzV9jTXkTHinZwQEUixCuw2PB3aKBFU4CHoNw9cDgLQVuFX",
  "key43": "4L2gaPg6B7VV8r4UGBcZpXBGPs6huyxEkfqZ9qoi3TNvyzS5g4drEjq9cDKFGx5tEihLBtX87vGuhJbw4gJ5GcUz",
  "key44": "4D73yGwxLCr4x7guFdmbWVcvat7Kj4wBCjtoTyQuqCChzeCi5qfD7Q6hyxhe8fPoq25RNKGTb7KpURqiJoMXLJ4p",
  "key45": "rXuP1TJyjbe7Diz8YdLj3gG4rtZCApP5tkf32QjzKhJcQFPeVaHswxd427Xfz45LxTr9VWd7zFd7TyvNoXXYHMm",
  "key46": "K7XznSUfZ3Ey5Q6KWbtZ6QRuuRYWMSPQQLsMf1Wur91zks4pjCfEiSsk4afWVFzWpxT15ptPY5QP1M1jasgUhjm",
  "key47": "2cyq3fa1PzQafinpQA7Cob4enQAV6rZkpSYLKoZUeAWzA2BjcyLytFFZtsRhzk65475NfhdPemSPzBMuje7JW9Z7",
  "key48": "2px1KavArHd4VPTsB2vdqaJPdzu6zPQzwsexB8C7NWAbkniycSW8z4YKW6xFPx541WuUtWq9VvdxxbTjkDoVAFdS",
  "key49": "GUG3dvfTtrMQVFhMjP1b3uwHsdeNpk1c6mDbssKTaGjmifU3s8FvZG6vYaqZbxahKDSLFQ23oaHYTgtXCUeodCF"
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
