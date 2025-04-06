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
    "ZZE9Q7Xm1Nj9jeGWxaVv8WBdwq8zSNGDYXn4mS4xSexmowYmm5SdpzYRtcUpk9UKuZDYUAfaTPEUkxKq7chMnir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vtXiVPCmb7UyVV8ChgADPx952giHKXEE5TC8LwFDzwjwDKcS2N5cb8pN1ZmeUgzz95G72cWbjJZpfFuJbAHSi8T",
  "key1": "5db7yrmt3tQQAXyZHoMkpq39qnAzNZVjkWnnWzughgYfebtLW7n11AvUkgacqzuu7Vt7YjX7mMRzgZpT7yCUQtcm",
  "key2": "2bhmc7ZBp1zrcynrt6vRTci8uW7p2q27WZrfresTaufwatgELc1xebBMKMA7kutBEnohqpt21uJPMTc59XSqE1k5",
  "key3": "3WwEUkEmPahwqYHWy459JA6yQNgua8oTXojnYVk54EFLef86R7MSou6LEZJB2KVoMzayhnqVCfk6TXx5AyTYKR6h",
  "key4": "Vt49JkpQgUQRHK6eGgyjyjvJp5fQjkWmBFpsiZnMx4t85PqXJQXhe86LgLe4NCcitVhHghDrpirKWkCbsbH9s5F",
  "key5": "4XTRtqZxPoGXUZKHCq5qKhbQznMPd7VMjCpX6oFKYUAPjuWRjiUbCBfED9F91BsQXAP7uppb6mLXUqqJzPrZUcJn",
  "key6": "5WGmtHiPxUVJnMqVEYxZT5rdbTriwvnFUTJmEZJC3k3EQ8LuDCrQ7UU2m1J2MiB4erdyvpFtFnggKd5y84C358te",
  "key7": "5vagvhRhtusZ6bbQz6Dqx3WGPrbtA7iuYbDxZeNTQdTx6gySZJyaMtpfAuzsUYdhPypVYRq4DuQg9C8MnWgcXZfD",
  "key8": "4WpRZKJFrCKWSGKgj4ak42kPRgxHc2kKL5dj4ELpQMHDsf48xeQFxUcM4jFhLsvsdmQHVgVEbfagNZ3jx8zUv8gS",
  "key9": "38tj87FFzRnaVTq9dYr4UGKDoK15pHai5zi1AkAZqLEzkzxg3xQmc13rSJcV7kXGqCtsWL8uz4NDUudnWxUL43Gm",
  "key10": "2kRCYdGoK6WpY4CkkKhs1EyA5CRKE8pUuf5QbSd1fV4iFsVKhbum8mSdw9FmunDitHmkm6DCGerRbTrqSMZhjVJd",
  "key11": "2mQLj5EyHSEcmxqyy55y3477REXuyix8sKqbExjyFhf3WJacmUavDBYxLWZ7n462asJpxbNrGpqe2xqPbGrzupu7",
  "key12": "3bEZLiaBEiTJtLAJKbFs6ZDy4igpfVXPz5xGmCy5aom5xNAvxUV95Ms4mCdktJUKAmQy9Hfaw5AidGp9izHQawrw",
  "key13": "3CJADu8sWJ3zjZH53yWsLxeqvJRBSqLwLzquTvyi6fkffa3QLNk6veNnvZ9hxgB11QY23kA1uSueq6923GVdfPcG",
  "key14": "2G42CijTXSZgpe4JX38eP11AjDdVWUbbUzqAbKkQMv8UZKGHr1r4AgZUz4gH8WpsMFpXzCw6unCNtq8nyoApTMhx",
  "key15": "3dPnCegQb6HQtAFH4ogAyC4FLmqpDkYzwj5sjEUPdsMXsrrnode3qR3WdmpRsFTbVseifMDS3XfEL9eQZ7Taogtw",
  "key16": "QKGmCHKk1TQyuzqkPgizfmS8rDcd13c1H93yynxfRiXbbfyc52CxZMYCj8sR9cB5gwcp1SVw8iPB8BxEjmUYq4E",
  "key17": "41Dq6rLi9AEJsajbHGyJD4Qa3AgDy3Y4TYTdtYYwQRzSXALafmEHk6a5x5MKp3GWTnrxFXC3rbgc31t4fcBPgRvh",
  "key18": "3zjjpvfjmeCmaKGQUAqcqbXsKJ4jrvZ7bhBSHPCYDZpaJCBCxEPbVUvBY8fjfxJ9kcadCRDsfe32XNDhjodX2eYh",
  "key19": "4Dbk87qwCGFhzDunA4ckoCPBfBb79v2xN3StpGyvzz1ZpPcUozYVX4qivjKpCcFkU5fGmqihChFMiytoBhXknFjU",
  "key20": "4SiMTHJ4TzZo75e71mmQeJSoueMRjgbRBriH4RYHVSFuA3SQq9fdzGmjzjCpxhTaZQsSDM6xNU5HxWzERUCbVL6E",
  "key21": "3sRo8xXUM73tD7hbqU221R1z92HdhSz21ucqxt7MW1EipbgiSpuhLMoB1vHtKzpmbaH2ZVi322FieHihFrzcrWhH",
  "key22": "9LjRryBJYRs2wgJ4LVyBhPPCqxZLGA4mmjQZvdXwRbD1XoSWnvphVAHvJvniJNPF36TPx5uCvnmD2LvakP4CBuD",
  "key23": "5ifoskMRCQ2Ln1uusqSff3T47SurMbBkrrWretBsjzcKKa8tEQrsQd5ruRRj66rqNPRXVCGeJBj9XK8ncFwdhnFL",
  "key24": "3DTxyhazSJbZxKHjFgQFcVgV6nP4NtuRMY4bRJUbNhsow8yJqUUnmJ3NZLKEbAKY7EhNGcP3dypgFr349BpQFkCv",
  "key25": "4UPdjYh6krKvnd91NeUt2wfpiXjtGoCPBf8XxJFEdqT5NHxqttVqbp9i8yaeM2d2T6V2ZYj3VswoUJphVTjvym9y",
  "key26": "39NL3HDdb5zEjhcKMYhWdMWEqzL72VtBMhG6pkSubuuynbDeUpYhUqZB1sJZJk1W9WN3EHvnmU1jTrDtL4aGrzAj",
  "key27": "537tVsEDGbuL5C4bHtD9AHuSfWmWYzzzgq94iwZhtYtiQHUrZrgmcx7TTaEDdhsPnqjzhEiriz2gWGH3KQDDXhgG",
  "key28": "2hzzxvZSHwN3qykY3zgrTBK49f2bVzAUjGf4z7qTYS8qVFR26AZQK4E8QjLW1QptCwCqh82ARTCgqWJMd7z7WVUD",
  "key29": "3cjVgZ4PaSEV4rmoXjcC41Ho7KJybbp2VNbnRwN5sZQP7jtjdYL78LHDZoijZW6MGZNaaZE1VBaCpoR5icSRJcDk",
  "key30": "2yYaK3Ly7LwTjBxvX8MifZVMveEm8neV8SpcQEYyRA1C2vkGNpL2tJa9TqB4gUAwTkhpF5PGbzCEaPEhdy3ahyZm",
  "key31": "4LbqAkRLSP1EhbA1sEtfih2iz3NMMvivk43cPtQUhrWXgDk1FscGjYBNdETyvQz95Z13sSJo8RpMJUiDBH2hRdEC",
  "key32": "4e8USGZDg5yUqfXLtBx9mHA7FAjUTjUxHq8DWvVAqyqbrzCRqpoKwiEBfTnoX7kba9hk1CsD339riMxuUFwMQKV5",
  "key33": "2X91sfY4uHhyw37AUXSg7DUCaXgNbhCBuNgBpKo3PxHzLPP7t9Q2qyjWb6SGMUNAQgzbAAz8Sz6sJdyEAp9oq6uu",
  "key34": "kFt2mfhfC9NJWKinQtVdLYUZqaWrsszgQ7qUrEBn9dgPLuCVrvsEUuS6y4NVwvbQD5cwqgHaDFUU6ggTefZgwrJ",
  "key35": "2rzcnRBzroeVJr7HWtQ5bVAanSEet7PupdGBf1TCE55K6hbucTzcrwTTtqm6yMxtPuWvF4eVRZne4zdDN1SbRGAn",
  "key36": "4Td8yXpXk5GunjBek4s8QaNDij5igcAHKx8BTVndgzg9NKFPcA9XJp1iehars6Jb7GwdoCvKCox6nqzqa2BZDUVo",
  "key37": "3EtYVG62MbjbRp8WvdhKCgJ7yJbmY7d99LMhF58xbicZpkEgsj2CKPwyb3XWXEm9csevEedgZepKJwZkf8z45S4F",
  "key38": "234RSDZznFmngDwwykd6uvPF3FyNXumh9fCJnzDAPyPQRnt7sKkt4Z5SzLMBHXbPwReHHLNp99DAGdF8MwUZKYG1",
  "key39": "4RUYfLcUbrHKFsU8dgbmx5qHA7PGQf2a2NwzqQTW8N9Acae4psz5QANf6Gv35a5ZCvn7RcuCTYYKx7uBPaBcypha",
  "key40": "5r5yFNrmqYdncJKGibmyXsLFUhTbx66DfgJVT1QUoFA4Lmt6MGuTzgu93YLFdUCiYBDf4Lpne66PfZ3PHuKTJoSm",
  "key41": "hPEZJkGXBsVGbUjTqSxvgeTUQRG3AaMHXGSbkA1rRH1SEYsZMy3hwDeAvZcvmzvWxdB28ZPo4iRNtAXiRqJ8skV",
  "key42": "4Y3Ypefmt6vSpuSwwXdc69ZPhihAotBrM1qqCuC2HUU4YRGmjQD76thjuiPVGJzQuYNFUuEijdADzi5WQM3wnLdY",
  "key43": "4oy5XftBkUuThAHQR3nytKJLki6LbwLgYHpLSjudhcD7B1xGtLFNBKtCaDUzu3a7bToVP56WTK4sWDYKtj6crf3J",
  "key44": "4qLD3bH9L8EFTgtdT24hk9YARkbHdaBBmc3X2wzK1QbjcBX5d6YBe9dBz9tDrDEoTKUxLy7R7sS7GTQ8Vj7PFbPE",
  "key45": "3ChGUMdfUoiyHPCfCJuFqCdHpmB91XkCjxhUR6j4726NYx5eoLLmqknsvoCtgd9ZZQCLRRmG5njyw2NXgs9HQxMf",
  "key46": "3J7dsx871eVhxyhw2R6n8b54SJTmY582UsQ4uiCqwfbbg4abC3RBUtZDgzgFU9cevSfaVXbaXsjEgEHmRqxyJ3Rt",
  "key47": "4vexs1A22jGto617jwRVSRXpAFMN8thudLQZHr7i7YesYK4sFctKqpdNEUXJEhS8aBW87fb1vhUmyfZbtQxWGUAh",
  "key48": "3FbbitBbfTB25twmmtiPgzQYrRNLMUiCRWAGwCc2DBJU53TkLnd8ML5aSerYaLWLfxJb4bcFJFgxZGVGmMrwCu41",
  "key49": "4RTXhmVM7MXPDwdzXMpFQ7vYPT1AajGNqBWPuGum65t71TgJpcT4fKoCXVioHLPkvB3EuDfhHDSc1eQ4Xn2fa7gN"
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
