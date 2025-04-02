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
    "4jZ9i95vAH66a12hvPRGubPA38SRwhbTPnrVF6UV2o8sLktaAk9jHSNm7pNxXTSC6oxM461yR3Yn39zgEpyEuk86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oST8xM3giBt8jy3Uu9iKrKgbp8UocoSuVksvkcPPc5vn2Mhs9KnLRCcBKCVeSAmDDsd9RLXg9kPa52uSYBocfoH",
  "key1": "3apbunPAYybu2VJe9H2PK3cVg7Spntqf2z9QbD192NjAUbMd2i6MQBDbPr8yJNbqpp7PrLvfXVkA82Cb9MrHzB9f",
  "key2": "3FJXigCfWKqoKDMvWtfRy83tWnw2nhPH3VbfNdkKKUMejoUvoVX75Xw6vjT2fhynEmmPp2Dr77HpmzKHkTMe8UV8",
  "key3": "VWsLBcAoztu2BBv1UjWJgkUibeKdaJo9pzfu6BPXbgbXw232fdk5MFjMpT2xLJ7z3Tvhq5N78MiE5rktV2X4GNj",
  "key4": "WPKFMyJCUTSZ2VU2QYZt8riAKWmB2NoyCzg769hRmeaLusMJjFy82GXZBEE7JQ7sgDffA6C1hFjLpKVNxgRxJt5",
  "key5": "4r8g1M249FBM9fFdr5RHkZKxJtmgkCPFpHFVDKY12cje71ZyNSHa1E1RQbJhgT9HUR4Kvhp3EDg2bE8rHkKHEYs1",
  "key6": "3od365kNmeWaix6JRDEkdgLYDS2zwYLghYzjxtzJFfRkvj9PxKnUXo2an9qw5Z19jW9v9aJQaorUR7K5efnaakxk",
  "key7": "4wTyftG4uwfvpVgjmXiwvbAAjY2XWZyVdn4HgstkM6oUpLyhddtFPfQv99YgxKpnAb4x4hE2KNcSAWQD8EBYyoT6",
  "key8": "4BsCJVxHYhb4FW14VYdsoVG1nVf3Q6oDMr4mRiqr32BB6f4wgNr89ZEES1s6Y2rAvNiFXUrju6AfuytFiA3GKMyA",
  "key9": "5bEPVG5PErMKeobNP9hYV6JbRpzzgr1u8Cap6R28h2ifvNwEFUGieo6HV8f3XeGWNeg6sPk34iiYjHSAXMSbW2Vy",
  "key10": "tXBLc6QKEkR8weCayGCA5mFrygUA8dCvtH6sRuQAhwRoNKYE7Qhxi4ivZzT8NhTWLh7gXXSZwQ27oMSvHjuR5kt",
  "key11": "3TggFsVpJR94Ze9GwwR1PH83ShwPgYKbW4aUA4zK67MQUfh9mn65LetmUQSyER5NLLbPU33T6zFgkECzPr1Ms86v",
  "key12": "3wP2emvpPaxWZPNnn7R4hsMdeSqM9h4tYQeLjKTATsegUPKAKSKaEfKEYfy1M7NoQ9ADK6Eph1y4hgnCQK4m8E64",
  "key13": "QnRwXAJc7WPeFdLwKRjdV5GEVvDUY6c3tpJwTXfFcyQefdNdCyUkq44rKcWswuZUvjGxnV5nErz8MK3kws4Gp5q",
  "key14": "2ttPnp5nFUTPeFrLKpj4qvBTjW9vC7KHUVZv163B7CXReqxVG22emiY7atnuSpD4RX9EydZQJ9e6GFxd5Zfz1xwS",
  "key15": "5WvKqVgrv84h5ipAoydXk6oyFWgzQULhEKYLCBTVhEb14APAwxy1Hx8DPYi744FtXCC4i1uXi7YT5P1hhnguJDZw",
  "key16": "5X5wJkbv2Lt8VjVxTXLgcAN2nAbzSvmQTL2dV8cjzVgmGYRBkoQCDV2MCvJdmEwK6TZ2QLSXdqXY4fEAirxFJQxB",
  "key17": "5CeatbT6b7ThLVZmjTdHJJM3zkGxxxvZoHryMyaCWJtuEqfMpq4eL83gndeRsxhNkSXz6rFVJneUpvBfaWPcuMyT",
  "key18": "3g37Fv2qJpmHaNxCAjQ8qv5QFu7GreknMmuhp62coTgzVgzQDxBuSx14PWYTwuGB8618BmugoFt6mFNLwh1gzwBk",
  "key19": "64QMsX1ZJ1ydCtKTjDLJeubypVSD4XS2HescS6zagzXYadq6nRtFNsujgy4ozfcwvexU1bmjz6cdMr5sbGgA2863",
  "key20": "3WVZYhRauYkq7jBo1zyyoQDYTnFWZXyPQjhgUgPYmgEfb3MFRVW9pzkKQAzv4GKXXKeLXk1YsZzT83HxhMTEZxaE",
  "key21": "2gAZrby6YcGQyTDiCqat4kCyQmcwa1QrVURypYmTCDi62RRB2w14aDLTsFPvZdAzXqSn8XMF48A9AAo6NsmukRQC",
  "key22": "5aX3ZrusJVQY9sPH2v3MUUU8dqTrmXtfiU2Fxm7e4mZCGWNQEbX8C32njbgaYnGENXgr6JB2gm8GSKqPmpuY82hk",
  "key23": "KLctgJyQGBtxwEvNB3qhyVKYyqkut3JuZ6XrzjAuKCbo7V25xm6iEVHKfgms2tPGWPWehogDLrwKqftrKwWF8eT",
  "key24": "26B2NFcqSimyd8mTwmKB2J77P79Aq2vDJNShy2hnASNRe8NpECkQsJx6YVT8iB1ScsUBMPLqzxP7s949axZEz4Qo",
  "key25": "2UhGT9A4skFBSpSV1xEsr4L3WX8QBmctY27SkGz3xz5ju2dkUrzt92GKRh5NxhT3KsAM6oJDHoqcp2b7rWdSfidm",
  "key26": "54kxiaWTJZA3tejzTuPYt1V3i7b3WJiqcwdNCBKseaU7rNKHFhTVtV2Zc2RfWHR8N5oDc67PbrgDC3dJyvdjwncP",
  "key27": "4ZmNctEKfo3G59khL1GJRavCr5mpL9joeCzWqZet22q6MiYPdp6Z1v7CfDZh39BirVys6uhBtLZ8dRa6AWymG3Ti",
  "key28": "4pnjPfpGKthp27yJSMYMgRVKvofhMaAnbwRuZuD2PMGdsWPg4osk1tismZFyWErpTaRv6rGpjonEj37p85VDMnBo",
  "key29": "34U234zT95R5QhDBmQ1jH4Nt5HtcU6nJ4ztsnFF3yi9HcmzWe1UX1VoPP9BrpH68UNN13gFpzJRn2sKHF3Fea3Le",
  "key30": "UyKyMQy6Gf5WYGExjKktd8PefawXnyJCYQoc2hBRtosse7dCvxbtjqytbbyWVXQ1r7varZaxrd23aTqDt2AvDd8",
  "key31": "64TGGa2DWjtuG62swY4MHbHPN4evs2y2S8nYKjnQFJ2DK7f8GD32p8GwNcfFBrpSwWM1MK8Ky5nFMrMFyA1NWb9R",
  "key32": "AboFdZi3AzSU4JMigxRRn5WutUndMqw3zTPNDZdPh1JLkoARdTJZ9nVMRXo6kt2cgwrbLftA21SRceVZYUShmif",
  "key33": "2d1vFdxSzXXdXN6m427p3wKyfpYcQDfqhsEWdVEBHgZWiFwoxZ1Tiju7kiFwe12MMLcUzbTpFrT166mZXNbXAUBV",
  "key34": "3ZFgd8iy1FzxhRpVTubGxVzpKhH1ZTTG9wfTfeA1FU2rWTsEvhx5FzcAuxw1xP9miFis3tg9zYzsFY4hrnbSByPd",
  "key35": "4Z6XF5UdUoDCyUaujN35EWni1KVqa4cqk4REByiMBaThc1FJAGMx927QQZz7p3pA424bQZ59g4xMiXaR9icptNyx",
  "key36": "4W7BksnuPKM6GiLaxib9YhELBRYQnhwJfUGyCnh5VkyMSybiv9FTWV3hmEJuxBRMuTmWuYKcXL3rRTQEq2fGKbeR",
  "key37": "54vxoMNoahJ1eAETnUMeFT7GSdjf6dBC9x7L6S2MT81xhMvPd8nFWsG4Y3vbJ19WxdsZCWunAtP6JPHiJ5P4QfMX",
  "key38": "2gviiqf9CZEh3AoFRemfNKFE7EMCNyjZeYuNN1RH3o82ofghRjv7tQ9ydygP4k1eUDzyroXp6kDGUiNTvyJ96kc2",
  "key39": "65Q9AQnPgBRvn5eoDArgdfiR85D7PAvZp9mLpxbRU2Hofq46tL3dwpPC16uYxHD3Lv91eEoqBhNuFNVSHcHChqf6",
  "key40": "4qB3Y2arqGkSV8nGL6giMHcBK4woGY2gLw6V2Z7W2ijxEggi3hpqAHWqzymgJCxEBxygqLc2WdkVWkWa92HrHdkp",
  "key41": "5FZJ7MEHjmKkBwVzzY9UePFjkLp9bAmur1GKiYQ6tjDdnpoqou6vLZsNCnU9HevuHSxZaFKY2qajoUmxmiUocraB",
  "key42": "3GkqtJd2yk47GCEb5arvKMvS7WdDmQW7vBr31ChaeKxnQMMdYrHgKK6wwkxUpDRfp8Jf88Y2K4E4JC1XnMa2WHiQ"
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
