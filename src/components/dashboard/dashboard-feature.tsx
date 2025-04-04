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
    "2iacjczcVaeRE8zQpabiq4nXqRoc47aFwBZUy7HqJfMp3saXRVuU9yFpA3VTPDjv66hU4EhnxYF6fQR9VveNsPAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w9zLSchniAYmn1GJ1PfeAHHU4LPtJXjxV4wH5yrVAZs33fZ8T1fNWwaRwTz9vCnunM3VcpDQ2dSciYNjX5NQQuV",
  "key1": "3KniABkXFQP3TYJtDnFMpyjkCXJgW59kgcZSfTihLV5HAcfBRv5NCmjUDrviKKMeofSbv9aXQZN1TirsBJAUqV7n",
  "key2": "2PiUhttLmj26hWa8jHLLyF5QHzTP6Ht5vrW3G7Xcy5id71bCGcUXAaYYVU5DQ6jXnyKrfmZsHVHPJzT2x4SEW46P",
  "key3": "92qrrXL836AirtTQDginSDcKaR71hhiNosGymCogyvb2MbF4qVG5T37q86rtjtua347NTCDjeDN3nDKgpDt9Mp6",
  "key4": "5KjqLNUYFWS5NDSrsH9fGoDkWGAwvFQbDvSitUwLAngoCEHLKQ7YuaksHkRMos21Wrj7V2cPkUU74tX7ECyUMARy",
  "key5": "37Vk69yPvrWDywVPXdKxRYkVJ6CFbvLFvuoZdPXU7gGrVgtkonMWFhbD2V2Fo42L5FJwEPDVBPzGp5DyscNC1qxC",
  "key6": "8p8Y3jgGwxdaambLEB7o8JCqVuKfpMBS5yAVdak8d7KTJVFZ5FkzWqbW3Shd9h751qQqPQ2xTfjvYHMMqMJ3Gnb",
  "key7": "wCYDUNUt11k1K9ANcx2DMCmGw69BShiXPakaReThcwGMSF9seQhVrHVQaTUF5E3zmHNjWyowmbNordKNnshs56A",
  "key8": "5Z3qqpNWMyeBxQk7FRtxrsub7VcNYeEoohbHUXxhtVJCDRD5gyUaWsvXAcXF9Q3zasEvQ8ydpATtQ2CNR2YyfCry",
  "key9": "m3ZDu84NxQcqoC3ifK3T9u1PNFhzkQQK2E193BoeoWFeCAg6mb2AYWv6P8e4LB7ioUetojDLLQzoCyAvGjqv8Du",
  "key10": "5Jc1j1oPSckfPjQQFnZjB3Nt4BsG9qttkFGqMhodedXqFA9dsuyPYnAQJGnqKKtTEwZeG9QsihbJ95UAt2VtW7rp",
  "key11": "4L6BeM7aSY3hxwbyYVF5mMgiHkJKYrbUxeqtNHnoDfqrYJ37NbMvyDBrJU8FCpVSrKbXi3UakqtMxkjP9Ru4igQ6",
  "key12": "4pzwQo7uhsPSg4YD3394LjTWfGW1PhvZcjDK6eavv5Cf1mSPFv9QwKryF2xfcWGVgjWwsFG6PJLPMTmZzhspXmUN",
  "key13": "4Z4dJtYyyuEEd1TW2iWgmiqF5Uk77H7haS4maWBJRuAjWhRanrFdKiV6bgNbZUGZpR8Nc8YrftTDxemtZYWdfS85",
  "key14": "ZRuRugsr31J4aouTeRMWqi9RwNpxJepWxL5MkAnhSGqU3y4F5NndVTBiFue4aSe8LxTEsfruqHtD8LEFZuLhy2P",
  "key15": "2nfBc9prgUbRFLdLLLfiArhfTQcX3FXzdtBSQzSgD2HivBnorKzDVB42maM7pKDSWQJUvkN5qidqxPFRVhtnUmjA",
  "key16": "4D53Wn1nJocKEyKLYwzB4vdvwTd6JmWScyiZBJ44wqw4YhkzP4FbAmu5PtgBxEVKsPEuQoqHu883D79jLf2wWvG9",
  "key17": "4CYiLpvSQxpesG62QUivhYqG8FNqKcuZ4QtqJUD7ST1XwFh1ugmYxd7iXADeCW9aUj4abqDJA4vuiDk36xcKegZj",
  "key18": "4UZvkDCPheuo8DRuTnE6ackUCvh5Kwt1yHVvpMkQRWVdhbzUC3vFbtdiTD8dCiifbr8LWWCLai647VMkLsdkFmQk",
  "key19": "376wXZ2AWcxKCdnZALZXStBKXQFefbwmXfg9bN8So7cPvzcV5BXVLdP5rL6sGzLQYGJaqAtukemMgTmRx8raSqGy",
  "key20": "28T1dhnJApTh3V7PsxYjuzWoo6FJEXyn6fZsP3Q7E1qE3PSoEvECPCSghWKAD7puz4zcgDGJEYaV7pVkudC9uyyV",
  "key21": "4DAFjk5UyqUsEUVnk34mDucaVwi1CZorpEU2uwRSv9kLnLDUEWyhRPHAYfNwfPEhAhCEHq5tFrAMzeZmUkVAQtzm",
  "key22": "4SAJjdoSBmgbu6qpmKFxnKp1s4vnMbnpNPJ6kTHUMqjeKRizWLgFp6N5pgrHiHSxWs9LsZnNNNm7qDn4azZXDF3u",
  "key23": "22CTGzFEELT5At9kBNTFAbrXD3miaCgmWdGpmZCTY9TGV8EU9m18T9UGCHGjjichXuYQnb2sjkSY96j64EfpvwNa",
  "key24": "3SezxihQzzTnr9Sxkwu3y5ZzR2ZYZGEoVukGUXtGfpexSprwzsH88RNe77Yd4Ak7U8KrutnGbZ4QciriYuJJniX5",
  "key25": "KSY3KSrKo7JTjMX5ikm7XoG6z75X8HYxQEpmQmwmUnRPJFjAS8yfsE3Sd1YEfb1PyFfE4MKuxuwFGrL6vSGxxgT",
  "key26": "4QPX4vN3DzreoDHbBnWdMrygYENU4gzCogbQuPPZxYhGVtAVCuHAnmZYMS7tQfomE5fenygrqt6bES2mVqAhknpA",
  "key27": "5gyp2K2aFJRiUvVdT611CzpXggocERaeQpnhRaC8ek3LvaSDLCHqeu8brmGTEqUBrGAHyntNcXdbb5VZdDFE98PW",
  "key28": "5PqcDCCQ7H8fnYkkxnHr18hmQzxQnKzgx1dP1Dg2nXzpnxvMGwfG8GYsU8bHUY91df7tEaFi7RRJZPCAMSfuK3hS",
  "key29": "5Lkat7sN1VzmZFGq1Zp5osDT4myQAhA5ZAkSFZJd5o39FiW2QZJgQ5W54NyZa36JKu4jYLg9Qh1xt8xQhFTFM6KA",
  "key30": "U5JCWQ1JMDsKLTgjkES6Exf9uWzUbkjZRkL4QgoemTfDwFBMtpBLwPUJ3E7vjjaZn5WyTaJG1bjWBeFs8wEzo1i",
  "key31": "3msytq1m5HmuiGLiugmibRfQZ9UjpboQXamnVskQ6Br78Vg9pG7RNvnDtTwcoAAvb82b1r8z9RrXSDwmxsgbbTnu",
  "key32": "3HQdsiWFMR16RSBH5rL5cwxKUqpA1ptuPuH1SqySyBgch2UV2RzAjdJ3RvRxUBmHM5MriQZuKtUJSJn6k8hCDD8F",
  "key33": "4Xy9P3cvfvgVeaVbUfNFndfKaj2TFWyBNfjUb19FXBwZ7iJMnbBgz5sRCzsr4QTykMFuv3R1haZrV9xVpQ4cNGG8",
  "key34": "66Jn8oYqoprKtHQs7UH8pV1tBkKWKzazRFpEijo8vTTZBX4oiSVRNLkNSJ4WTsRsWDBDgvBr82DCdNgkGSpf4G5z",
  "key35": "3v25NtNyM2m7RMwuAPB6zc9k4vLmXeDBtTnj7S3eEpp6hT87ZEvUJhAA1diNCiZHHcNmZBamNbtWhaFxogHYS6cW",
  "key36": "4jtWWfCe2wLQ7F995zMfXmWeFW6U1Ck5UHnSHjb5qrc9bRMRSJxha4Pu7zD2boCxTF6UcZS8gb5Mr7PsDEGcgYn6",
  "key37": "4hKqeZtkRjmUa6yDVjH2oP9vj8q5QBGqtkSYkuf3qFoW8sX18MGG6hu84giahtRrFJjFCbp3XkGTZDysawDmko8C",
  "key38": "57YcdRh8EqmcAP1JZx47jNiYECawGTWd6G5iLWGvEFHcFV9xnEPBionF1FiH54qdTBEr5NkpFE1xP9nVh6zJxQpu",
  "key39": "3GAyTLPGCiYqMGPoXpEYimp6tBup63kninYfvJJigWnmTiTA28Q17HVRmvTxxJ1pMH6YiBAxKE5o4WWQ2yN9QNLe"
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
