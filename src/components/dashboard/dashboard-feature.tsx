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
    "49pi6YaMQ8jVKFJnj3paP2eMHP73JhH6Qx9zcJ2JXsmjs3pARsdX1eVwYrWUhwnbGvxn3tNoh4er7BuyfXnhVeC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Pp82rRiSjpnKytXQgb6o1PPThftrijCUigQVCayMytvZXQAF1MmGBEdNKLw5kjj5mSYpnNoVeDBLLF564GYorL",
  "key1": "4nQfk19kHVLMx1ny7cGchzYbeD41CsZP97b6Gn4AMuoXGdnVQhYMAA3E3DJCKaZwJ7uEe6P3H8ZM1fFt53NiTuEo",
  "key2": "WxweweuGGh2EthyyTXcYQVsrqGPqnRQNmo57nRZSWRpZnn76fn7dqhJUVZLBLDe4hdkdtP5dDVo13dFmzACpNn3",
  "key3": "34XFRhzYD481grhV2sC33tuMXBpcP9S6GH2SdFAaQKh5zQrsem4uqCWMwSZuMEp3LJMYQPxoHaE86JyERF5pydC",
  "key4": "23GjXpLi7LQj47khB1tTaNyL1cd1JA7CV1exVvDHfSsQDZ5CJ2nLR8GeHjezTvSYm97Q6W7ZxoSbG7aDaTCUE19U",
  "key5": "uRPvs48rY3xdNJMjW8kNdSA3J4DsHQbYCqiZnuXwcs4Qp3SGd7FRq45ZNrZdKhDvtnU5zaS5tkCwLJA17UvVs1g",
  "key6": "3J3uqmEtdwiKT57SCKnMpyeb7Epg2te8m6biTLwGsf1Uw4N7bYjffK8Pg6ZZ97TSUBEmy1eZDxUNaYxNifGxApf7",
  "key7": "5DSdBFcGWA7bfKtvKU5bs3WnGSzyDE9Fc3T9t7FKvkg38QiHbP9MtYyN9oza3c5fHWyk7KkX4e2AUYgr6gZs663G",
  "key8": "4gxvriPoSvn5VeETbfMKnHhSrnvwpytyfFLqMeJTGyUyyyerQ1RUdF83Du6faCYB6TeF8b18szDMtxyq8rk2vA2E",
  "key9": "3p6Pv446XJTkvNUTXiWkNQcqk4KBN1SWv3sXgG1bBi4ioap5i9dM6Q4Mxq8BfWnBkHzRBLWXri2jRUtjgwB52id2",
  "key10": "2gdop2t6SCC44dCt2a2A9fxfJB8x1PKC1Ukk5ZBig5YufdCsg4axJxybVCCzCKKP1gBp5nEzTKuCtq9Dmi7Xo6YU",
  "key11": "3xSuXk83ngn97v36MQ8CQnxg1rL1qhGmdyVFt8pui23AUjPUPymXwR1JCzLgcysia8vhArJJj3vuK8BENH79fhjK",
  "key12": "4oKSTqcr98Mayhex8TJsuCCxisodesj9VLYTXkgWEf393MadfAi6qfaHMjNMKAnE38LXTo27fbr8G1WwED8Vkg3o",
  "key13": "4VGhn3PM4QKFzYZMBXUbtMsGFZrWRuQ1KeLcD8brqPPEuKd32VCX67wWWKFS1DeCvgF3dHv3RwmXTnAdv9nX7LQD",
  "key14": "2UeKKxzF1njaRsEmEZnzAkmEu4muQWYRjh6vcmoGpARBPhpuNyCFySuJVA3jTVifxQgdNSKU1UFrXsiY6VD9nnyj",
  "key15": "3vSCfqAf85LxrvePinXkMjZrBm5paYTjAer9UtnSnf2D8e3BiuSFKsMjoGCPWPKsBvGf37VDHXt53TLrjHmMrtsu",
  "key16": "2kED9XoWNX6JTyRzdd1JHtu7hgxhsq7tH3trsW2o66hARxXChqfqM4ETQ8aZAU3u9THPpPvWoxpLSR9VxKewf3bX",
  "key17": "3BHREMZsaqjHi3WqEfunCwrMpcvLQjJyc8sYrhc5ZtQvJMZNLLiULAp5zDPLkQxn3yLhj3NTGd1qUmc6GT5wDysy",
  "key18": "2FBYuXXe3WRJJrwgN69dbgJZUGtFLfpBpen8NigEA3RpiU7mu2gZ1fHEqezEnF1BkE5HrG5Shu8HNXxBezPocvbm",
  "key19": "2rHBtDDv6HrnKoGSHhrHqiM6y9bxgybEHBtHmRA6GqrmR67ZGDdNgbmUcksRTbeRhJKMeS9ztMZHidiK7TjrnSLJ",
  "key20": "54sMef7S9Ypo2iMXZarYDJZn4uJULJeMuFHGBuqUiS9Cyh5MrLJZa1JG5oHTMLdCudMEPTCLQ2JnhNr1Uvh7yK6K",
  "key21": "iPezpKydYd5248Vtg9ByzhjHndYkFWFa3Dr9Kkgk2UPuHbAygiDSXk5TjckKfCVsrAE2L9rwqF8mbAiSiBX1tKd",
  "key22": "4qXjAtricdStyWTEddZXkcWML4xi1gsKMRoYHKtc8t1Xu4vmZH78aSxGdTYSr2eCjBNrKPaDDMBkASRii4idyhgb",
  "key23": "2HYyKqJJVyFBRX9XKhysUfZKU34uZuKwM1KKAnEZ5h2u1JNnZxEyeaRzAjJ2mTxpzd5kjhUUzMfKiX9FT6JHbSNm",
  "key24": "3rCbxsdxBZ9U1Dzkw1tAzVGEjk8tHMQYPGqq7nGgJoxCSWRagdHHDiVLEnx5aTS713MjuCeytzcA8fW1tyZyDAQZ",
  "key25": "EgdYij7gUspCM7nnSWUkzuFAdUnSz8uGmQeg4tZ2MpZzobimn2YuHz5MnvK3YwpUP5mn6YrcRyVHUzfvuQrxFRv",
  "key26": "4sCbEyGFJnMEzARNTa3jvnoF6iM3VfJ1fun2HyMaPhRZAtaoMEv8jAJsBfxGAFF5qm43xvEGbtNT2nFHoT1A2ZWD",
  "key27": "5wG2TeTbFTQW8sCH9pi5zeseq63Z5vhqSHGjjovDSU9EzmxvuGT9oYwCwXA5W9QgTv3nRkmmsDMxvft5YLfZfwwe",
  "key28": "4dd2PvhMnY5PWYHUPwEFemtEu78vcGiZi6yNLbPUHEnA2iKiiY2sG14zfZ9mYFGoX3nY6EKqD8XHBPhoSq6YGvg1",
  "key29": "34VSegnR7y6p8SPPFi26TuymRDGV2QLydPvVUHgdNwie9JBmr3opxPM2xsXSK5Hk5V68DTzS42bFiSUwygSDHxSq",
  "key30": "jSXbMnFYMQqNT75VZrFgwrt3F3of8ZyPmaumfgYMLCqm31j267SXyaX5DfRtquuCoMNH5DabRfsiScuVpVDznVa"
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
