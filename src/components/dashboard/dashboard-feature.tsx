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
    "3kMhPyVubKme3aPHvPpUD1q9xBsgoFh8GcN8Q8Xyjhyw5VYrwQV6D51Krh8fkXdbqatkqVorErtTWuucrE8Y5ra4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yXmEYfEeT3sHMLtCh8618FFzqT4GRfQY79vq5LUyQyqSzTCwwqUNDhcEQu3e73bPooszn2QEFH17gwJeLnR6ebe",
  "key1": "2P1e8M9oucjeN5ZQQ8uSynPorxA1GdBKRGuNDBD2B775fjMwh47bWPVXCv9CvTiiv6QQS1gJ3dapJi7T7dGSWeY9",
  "key2": "4DL2FikzdFNWSP3wHbv7oGv6Xs9hB64nLej12QkxZ1PTLSPP1r9rFZKvQ3LDLkbLRrFhQu6FZmN4Abu71cuv6jtW",
  "key3": "46aYupta5UB3sbvj4FvsbchctV8kYMrzh1TBgJCeAk6xy45zrS84DC8JHy63ak5XgqsKMUVxKAQ2oD9Mxm1WPWfS",
  "key4": "2o1VCVoqe353gB5wkUin4HTqSitmuFYd1zAv3AgvDW1MDVYW1Jv1FAVoW8UPXXEMLzsFx2ngQtmkyLcsYKLFRytj",
  "key5": "2wvPxugyHSVM8gNxvPANcgoLWkLT7G2fo1PB5XSNeQwhxMZqi6gfwz2H3LPif2TEJ5hkE6TBTRRz9AfiecjnMVQ6",
  "key6": "31zqNQ7uDLpjSES8qBSUXaycVq4Jd4BEiaNqJeEBRAVU7DPXVBbG3RiLeGwcFJgW4aiQ9GBFsqHjHdd76uQ2paHT",
  "key7": "2FaVRzx9GPUHsuYymo13vRBqstXKnfzE327UgTZh9VPR4FoAxhQYJTVqnHSWKa85uu7H3Tq8HpG2Rep8VHHhGyjv",
  "key8": "5VqV5gcm5j8RTAuEZWNLscpgQQyf91KKCUWPCV3AtQ9tax66G9w9YbgkCNKd8t4xofQQV2EBcvYr3J9P6ovqf2no",
  "key9": "4npTRZVanTqoUH1Vf96i6yJnLVRfcYbQtVQG4NLBKNLFKABPKuqRTakjzsaVaZP4xfEmQQJKjohnUWadESnebpVx",
  "key10": "67ZXYREfreQYf4Pogn2e83NKVbn5ajT4EMpGVsL5s2obu5Fg2kUntVA2fTB6ed4rpqnZYjoFijrMiARaBGD8aJqk",
  "key11": "4Y7ZaBjYKegV74RiZSF5gNbQnaL1awmJXCzk7NcRiYiV1MkDfakPxp9QreX567esMYJhkDJhVUXwN4FSzbcpzFmH",
  "key12": "3wocd32Ftit1W52BadEuMWPAufVo4q56LcZNEdp6g4itATkRF9vWUeV6WbDFXSVxF4R8szfjS4AF9UfMfya4n3TG",
  "key13": "4mg6Q8HR8yfDLvnLwgaerQpWJPVbEAjtEZw8HJbrFcLhyqGH7nugbxaBpJ9EaBvekd8nTZLRdiBTWVotcrVE6dfw",
  "key14": "3c93XN7Va7SiHpXcLcsn9F6zm6aEDTruvECEwi6z2uvs1zNWf2W21uUydCvuhSS7UYQ9CrAikafBVzMLKCKoagea",
  "key15": "RoDqDrt76JsrbULcVC97db6WJ24fuqm15YAukgazKNLAB5riWpKRFCyd7ufBHSiweh6b3DYYQaoPwMfRPXi7PkA",
  "key16": "32ABcxLWLQij8mp5mCPDy3dGJNh9XiRArQ79dBAUPHSpDgfoZZ2ezGYUy4qTRMZ9ut194vNixeRdxaTvSDCB5gcE",
  "key17": "3ZoQnDX4L9Jum9Ec9tDmgQpC7LcTQBDoHFqVqtZXHpfrovdaEEGAQKN56JtUk6WrKSon1iSrEJcZbN6eP64vK2BW",
  "key18": "22pXe3qeeEGGhxB4P4rG2cjfLgFht4n4s2UYd9bdqScxGs13TFsKW2Ec1oU1iDXVHVayQeg1nTaCCPZMsKunWJuZ",
  "key19": "2Ux9zb2vJnpZKrHFLWzMP8oH5qJNmVde5DYuNvGJ91kqGKgyH6wGEfEpnT6cZ9n4K8CHMo17jgStmTJ79VmJifvq",
  "key20": "3SmMVVvERqDzua6MwSGiz4RbHXEcxxESiM8pQVZGdGyhvH3xNRSA1KKuPmzvd7waedYw76gng7ZQuZHrH2TXMiHr",
  "key21": "3T1zV3THitPaWZu1mu8o2kiiYA8VD2pqgNHP1gCcdrTxcHT8GDYoxMaSVbsjWUAzAMihJrZnXuBGC7KaMR3PkXFm",
  "key22": "5YHi8QnR2ncZYVZTAPJwvtyGH7YoUHXyQzKGGryf391gFajQCX44Bzbo1t9Eyhtd4JgSkPE557AfkwRh1jAFZk54",
  "key23": "h5cgGdYdMeeM7qiMCkQSrLVgaVyJnoY1867LWtdtm325rMXQU1RXLQeGdReFzW84YcMmHEhQfJXumN7VUketaQm",
  "key24": "48g3JA9dTAeGwJQztBxwNQHncNhy9xD2t7eNbbofqYmXo5Jpn1pCYWAvNnLzwJvy9suuei2kCHqqSUyg1UPE3eLw",
  "key25": "6JAcBFoDrvCkUveDqzruUkDUwuC5moCVvpyz61EvmjL4q2tVxchKqhMd2XEuPRdbpytSbh1x5cN7zpuq9qvMvT7",
  "key26": "4G9BwUkeGLUDEURmNf5aFtTLqYUmzXYMjU3X4dW8u4LG9G8NHiGxM7zeErw2sWhQviNw711FAMuMzk7EEigV8jsf",
  "key27": "64kbxrmboueFmF2enerTkaK5YPYaiv5Npq6pyGvFUnFrb5ETFYGAzL6EUEjwrcpFjRRuHWh3cVR2cFQeyXzkAzm2",
  "key28": "2qTqdvCzttuxPaBMifh5uyyj6TnXucTZsNFBSAkSJJPzhVq2DzQkuNEkFJHpjwa661nQpqsLdnmfNXcfVAaa4Uws",
  "key29": "oAvfnnimGAXJSyAh6mXgQXzUwJjNo3qbze6QbtqDEyCtsXtMTJewG49HbJcPM17usnxVhmMsRWgX2FftBpf6xL1",
  "key30": "429JqF3MqDg8p9rgeTPduZpJ6hQQ67SzcxVso9wqvHzwYwpbLwGAViwKmiSiEFrMwenLxi7PWg4jv7WAntAUwVH5",
  "key31": "5xHbBRedRuHWYDF12NTG9BBCNkEa6WC9RguSE9oZja3fLAEzwS6i73TpHNPZjNfT5KhrbdqiDZycgdGUJm9MNgJ9",
  "key32": "4Lc6xhTp4nTjqabVsYQr4mknomLZxtmQKoXmPtEcrCXPQt1ZxBdukL76WwpZogf87sMmYkRGzGqTsY5YG9amhgco",
  "key33": "7WgvpUhKvmGYs2BkSvBnVRbVqPNm3osP2hMuYGgH96XGmHDEkx7YDYKiSagsh2gLSZTXkr3HWhjc2ooM1whppkD",
  "key34": "3A78hx85i4SG7Wrbdyt9Ek9sH4SJe9eFDYNonKqU3A91CgPcRhvZbZnkz2T9CGXFBwaYn2aDMo3Hbw69bimpzua3",
  "key35": "pgtNZNNwR2Z5REa6qezxSFvnJihavGvtNBdjsAz23YonnegB1YmSjHJzZkSTEuvfRc89DjkabmRCKg8ZPruN5XC",
  "key36": "4U7DU1qUE4xdgDcDdJGm27L8yBKQBYSC8pcg9k4A9i1EnTvv6gwGFeEJJXS26KqL2Mg2K29cXV4MdYfMnWwREzju",
  "key37": "4VkdazNsurB5TjxDKjLfUCH1wiBm2gNqLkucuDSmTUqe8AqqsLsdX9QxpRsgitp4tnS3f3uR3SWmZaUioY79sNpk",
  "key38": "3FEVXMEX9YRgNtHGy99ZsYbkGg6vCjDq2gRQp6UYZrGguud1dMaKGaSMgEqvqmQ1H1w4KzRaDnuSEKLgaGy7M52m",
  "key39": "44UW6aWAnoxzUneGueXWgMctufBvXf9EE8GTUYoBkHWMrehzUWh3SYHevSb94Yd4kdYyF3q85q1VZyyf5CMg8nHU",
  "key40": "2qm3mdeVE8rHj13S4RrsnjKpHsY9mmPipWE5UEwKjWJZWskzuKkaxGtiSo3YY9VdFvMH9G3QqkzEq38qS7zHBfxc",
  "key41": "Mi3ffaNFrT4mXoAC1kBqzU9Lhovde6QpVf4D33VmVCYizEgtYg3W6poRRdcGEqmtZX3V629rfHrdUwhtXdzY9QC",
  "key42": "zi8Xr9BgUVqL7XCTiTTdPFTPv5xNmUccRyLoRcb4ZAbERP6ivxyfgpy7zZHcQEg2zcytfNiCVD3Mx8KCVi3wHSe",
  "key43": "53eBJS8mvHZj4CgM2sQzMnkh3vyrZZSkTuG5XxZKJTov9PPDk9XwEA9tgemmB9iF7eM3x6MQw6uuh912aKouoxwQ",
  "key44": "5kY9v7feR6Hzw8afz3eNnQ1nVt6G9miigGELbSGSxJNhHJfnFxKRmpwpS2Vjp1yGF21tySrJRrCH2jcVsZUQJb3z",
  "key45": "4dQfa1gzY83PFZ1khEdygLLUFQBeXHmNj2SQA71wFR4eSDzW1e9dfatmLyehJvfmaVkTgu3U2c6BEakiSNBnEoZG",
  "key46": "566wZhFSmWrq8rMXwWV8nj1PFMDy7Yv6s9AfEycsHMKjKNzptJnh1VGkeQ6pX7hSaVbbjM3FQ9hnD18hZqcCoS1s",
  "key47": "43mQaUbJVrDD7yyKTkfkC7m2RFPFBB8YdybG6STh8mHx4cyTEUEUTaZJpRbSFK7hWTmqqWDfVVK6jsxcxnT4oox5"
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
