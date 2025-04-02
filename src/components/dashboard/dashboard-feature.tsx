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
    "4dVFdg4j8Ntr6ah72hHhXVmqCBNDm1xkanP7gtpJwJZ86UYDK5bkUU8BTGa4fnfzowaprCJ2SpoLtEdaPgd88Wxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NBhEhV5uCybjRTRpXfZHY8q6Cmvt2K4kGbD5BPchMhYdEWKhuyQuMDYrWAwmaDigwfhCCwGu2oEaFU2JtnoUemf",
  "key1": "2iWZWsUusfzkm4Bwz8VRyx7rj2jRuJj2JvEzLM3LjXeYdzQhpBbP6e89X7bhL7p1mXegWTVTWZBwNFz7eoVrmR9a",
  "key2": "5MvKR6pswPpNLYqzvn6NXyvAsonZxrwYiHcnd649kJBnMxwKsTWJefKV8AesKd6jAX8JXDSwagU7MJE3ww68deEV",
  "key3": "2r7nj43cc5usyyHHMgCbpBaTDwBC3KApvEtBoVP96zeKsZR1rtt7hm4DrvAbere18bGK1cetPLDoBC75j8L6bRis",
  "key4": "5v5R2ch9Kv7ZtVicjykEUG8PycUUmM7JFRq5AbiajD1Zf7MCG6fwM3ib2ecnSPosc8PVdcv7AwtLc8Ywa7ATxfA4",
  "key5": "3BdgZU5BW5NzcxcDnmKibe97eoSLAmfsCxRa22FTkUCSZgBqJCYmqYaBsqwwvTUVUFZTvvtWD3ayx52Fshgf8ryS",
  "key6": "E7NifNfsajYYA1iNXNsn3n4QcQciPQoezu3oj3XjfYwWqyaNBA3bDuDpX4XHcDJp3sqiufei5q88Fvv3XbXXuZc",
  "key7": "3GKamRSQtAEqSCd73GyDCgbvuv69WhyKdKttj8ZX6WMU9ADbYdYikTWFeGvfzW37oxQfeTVHxWpFFfUa2aqcwePM",
  "key8": "5S6us8zfhG8hRt8uVwF9912fXw6Qrtmy45Pc69nh7o94uRhQucKFMQKZgvmchz7DEk41NVYrao1KRwoiunZsJW5q",
  "key9": "3TrK5RvGwFxwfUqW8FuwVVF9JGNaLwo4aKoYexospAQFy1GknDSg3H1cxDFaUAqcWSh1hw8WrptVZ7iKrtfwcx4q",
  "key10": "4R4qXcrZzW1HK8bz8eyZYW7PdWNLcJVKoDK6xeisqhuiyKjeDqDDSuRLua3twsrXG6bB5FCFXQ6PJQfMj195FAcS",
  "key11": "4AKmm2vfMKALMJwjxGCqBF87kznvVJx9mm27MVZyGUDV2yA7WcnSTnvorKA32SXz4WrByaunHN7uUt9vsYTKXFLB",
  "key12": "5PzuLi1dCKYy8QNWkA6Yc2MfN4C7ipC95EKdpy9KQT2jye8ynUYvjnjTcWNu17QYUB1n6FvJmpp4oRHQ1f2XuFFi",
  "key13": "34wGv62U1AUTt9VS1DsmNzJ5nVjbmrEYxtTarHVQfA7s9ErfA9f8xDj7fFaKVNmT7H4THtZBPEKwzpJ1Ya15MpyF",
  "key14": "2AWkwZuhAZqVnPHWNmLdxuwv2Dsie8MrGcsGP1ZXHKNZb8FZsbMg2BskQq4qxVJpkH7g4KXcn25u8GgApxResebe",
  "key15": "2NQic2aNAYSMkq8uMDHxkkSzcg98xZokn9bwe16D4TPfRG4t3XsRyq36r25jKD4f8YEXsRrH9BR7ip5Cs86MKwyq",
  "key16": "2fm4KTMp2SALQiR3WZp4qngrmDzhodX9fNddPTormCkJKUmZbXNcVvmA5Qt6FvafvQ6aMEa1VmrC8cqWjSFzHaWV",
  "key17": "4xVMwXeABmuWp92ctx59mRFbgeBAe1Q6Ez8Cvoi6sGAowV4UVoS99BRxXynuExiAHsu5YmNsBVUzRRA7tfhBpKyu",
  "key18": "4JGTaDPJHU7L6BwN6JcpAwFs9ohM5kdUNvVQaBnov4Gs69yzScMkBMCfg559zbXqHb5HrCnVJX9SHctg817xQ3rj",
  "key19": "5u7CkFpmztaWe8Kya5t7UZcpHyLiDmGQVFsja4brBe2hcUEwUyva1ireZkjg846uaM5UVeEMgz8f1AtQbuX2tPrY",
  "key20": "2TN8apcNQodaUYHCAcFjDcuWgjFVMvPVpUmzbJmucohURfj99FGTLYTipAatZia5zi9Ue7r4EeeGP2NogFTniSXF",
  "key21": "58vy4raS6rRfraCVKDZf44gq3EPGcL3xuZ3D7RTXfjsUQr4Pod9ZAjuZcEaMKSaTw7oG2J9U1xpqEU5sXUssk2XR",
  "key22": "2PNYcSPvSeCCZEDnLbY3Ptsu7HeYLE9zxzCxq7YJyxw7eseRAh469fAEzWMs5BCGPadKuoGFuWRYtA9T8n19eW9F",
  "key23": "2QZy3uu1pjMtKB9zLUaLBEaxLQUnccHuXkGsd5Zji5GVYrfwhyPhvzGEX9UNu4KiCezNB4NYAAhnaUVu3kN6NJSP",
  "key24": "2Cyce45g91R5t8ZeUiz78vGBMbseY3AcH4jcQ8hm9nnrn1MgaJWVbbc7t11dKjWn55EZ4YMXtgAGf3iUBjM7v1Zo",
  "key25": "4y1fzThHV93eBEHUyyWMiNTRccn3BLJ3GYz9tCJeQC5NhUh6K3zyZYm36wu2PQcRwGr19jayJTqi2FQGhfrbNq9P",
  "key26": "3n4cdpxz2S9cEVGhQm2TNyGGJ6Ku8yZXdE7TajqyFKcjB6hUbjZDnC6UVHLHbCfZTQ86fSKwyeYnpgKzNgyh3WWD",
  "key27": "55JgebBEdj3UgYfcZea6oZUWuh3J5TBFm56r7SWntHcP5TWU1vCheftJDHwAyESjwfeyebNvLbPtfCvYmq78U6Kb",
  "key28": "42zroxCzXL5u8n95cFAqrhrF5Bjng8Sn1FeiaMrqsZUokqTeT8Rmsr7M4CfPcMmdo81Thu6U2gifdeUUaDTrJYBo",
  "key29": "TWPdHfndGysYKHxGLKpLvCdu5SdhbsywHWgnQwMc9J4szTKMqbTVF2f2MqhkdvsP3VSxQfXVsG55t7krDx3J95e",
  "key30": "4cG2tDYaT41KyjQApEksgLJCTx1mgrBhWh7bwEmhqRv2HpqReWFEX4X18uoLK9Di5CS5PvkG1vPcuokYuMVo85vL",
  "key31": "2ao5nVpTcqDkaKMXam6fueC2WSTrBF1tbFciZ4S6zBhfc8MGAUHxBs9jntLx6Pbj8YwxvxYpsGCVSMbSPRY3wg5B",
  "key32": "67dfsbGCoNnkhE9JSDCcJsCXR9jag1UrgPoTvg14GmuvguUPwzBchv7FoxDmYFfDGtSzzh2B9gYBpekdXt51H5La"
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
