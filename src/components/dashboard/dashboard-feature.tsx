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
    "4CWZiKNErWmWoQns5RbZg1qrySuhygAmkc5NdbEdm3ApqzeJpMiLMbRgQEFTgd9EWGcFcd12Xi7hoU5KfQRCiz8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ahYuEXxvoM3gvdeNowEdPwMg1fEein41tjpncprsibgrR7q193EtkTbZUEQX7r7uu7DdUeWPGXnKKbY6NYUhhC6",
  "key1": "3UoR7CitsUEt5hQdd5hRbc4GmcekHrKuQtL3WboipK9AzRc23eDGKTkVgbGxVRQuPLxhaQGwmcd8cPnLASRQn284",
  "key2": "3DT8mXuvKCZeNRf1EwM1myUpAXgFKQzJbkB2fS8VCFuGDcaGEeaGmh1a7LXjv2mcSFLmvWA5DhsxWZ75Q7xpje21",
  "key3": "ZVqGHSwtTzdYHyDbfAjbsD5XPnEyr4PxvuiG6Aaaty929T7zfbg3i46TQXPEuLwNCj9zARfrddujU4wJRt6tdyF",
  "key4": "3ETw2vNhUkVH2EFUFupx3weZXCQH8FM7bMVVsvVwZTkjfjPJfRAzbPM3XTcMwd7XNAS9AMrF2Xsiwi3LkvNsZaLr",
  "key5": "332wp7fhqxSjaMGYPwEp4T5x9xAH4aAyoPptaPXwcwKHbsC2BC27CdZsj7sd9nufWxKGoyCyQenMo3w6R42YATnx",
  "key6": "4DcyWddYdCL9mw1bkzSm8LPZUSwXk2AYeNxNXR9hEmmwQ6AqWC1isK1VWoufdwZDBy7Gssam86ci1Sfospi9vNAB",
  "key7": "4HgRYrgcJScTRuXYyuw3Nfk6Vcrx88vigNo5aZ7wUmmrhugsHF56HHuhj5AsGRxsyPs7eEQCJAWJZwJzDrYCcW8H",
  "key8": "5o25HBq6PiVCoSytAgFwvk4PW3Uqiys17tmjQaudFcf7MCAF76mdBCMQoba6mkRAdMaXeW3VSxN4y1RT8kVeTzE9",
  "key9": "25xc1PtgHQ83mh92fkQ31EJYCyemFu9YFF5sYiuPgYqQFY2EWJ1DEFRpFg3a7yTJCtse7KAiJum1XjGvBorx41mB",
  "key10": "8cBhSPGqRzfsBk2MKocgLz4ViFofaswh2ADvrekJxJ6K6RmHaQhiJfgqi7KYX6hhEdtJf8Wo7h3bZtpZqFLrC3K",
  "key11": "nszHWNjcCZppZLebr28bqKgy5paRtwEmkA78MPu5Wo1RVe2PazZ1Si8pSrAXGdxsSjegctDvZDm1gce2tCgwiee",
  "key12": "4kipyQMFU8zctbYKsJexANrDTitAHfvePGQus9DZV2vPHJ85GLZ2TVy2GuzVrZyqVua6Uh7T5dxC6rwppeytmZk8",
  "key13": "5LLc6jPzp3Sfa1vcsMnir9jntnBzMW6tQ9wZb47yV6H7sNtLgubk7ofnRmG9vXegQe54h4ZBnabMVJksMzWKtX8h",
  "key14": "A3y5D9pFA8Di56Lj9NJkNBCQ1hcSvFroi39xPY6tZxpQ7Nz1XP7GJ5Mf2krNm7azdLeXLtqccZhRBYHqU5UysEU",
  "key15": "4zdMrZGgwannksTVnUo8gGy4KvkXFTNu2YB9DLBxAaajuCU3fCJuc5aJA25ba9PFnu9CM3DAdFQJJSTuPAvaoJpc",
  "key16": "2PgWebM3hx97Y99mvuVNSWjpBiQ82nmGSeGGmbeT1ecVjCbt9r7bv2hYGnwjKeXHPyvmPj5fyPEim4TqRRXUsYgA",
  "key17": "wJ155f6k89qyQTYFrDxZN8D2DZLcX7HqRpFtsS6yB2nPb9x6T1q2ugPs4tMFLJhWuqyAYpTwaGv4FpSgiVjTWiM",
  "key18": "2sH6JGYJ7ycs9g2UJ2WdG3n9vLzX1TBGyFQ2HtFEUywmcLU4QpXrfVVV7GbhiXHwWbcNatvPWcSrQBc41Fjhhvv4",
  "key19": "5iLcxaiDrp9XrtR7tjhCQ4PHFvmb1evCWgCRA2wqpfD5xejpxSKurDvTLFswcTK1dgc8aQRpoSozYHn5svojbZs7",
  "key20": "3U16YWVCqoALQ5bHAZS31Jf8jjAumT6Hw54N9pfyPC8B9KeNFLDUhRFGq638Cimp4Bw1tRytDxwXr7wKq7Kgj2Qb",
  "key21": "4YUYTgsa7dxPkdAFXisbPmFhbfAsSnY92gdfFms3wEcKMQN97K1n8mJ2sGUnv7tzJUzvJQUdcvA9nk4MR9x3EfAv",
  "key22": "32UYx99Tt6yo3iYuVssseEFfM21wgPniATk34ZPZXAd6hMAWTus6871JareNgL3qPzfagenYjPHcunEiS8CAecnj",
  "key23": "3iHzS3DhhaJia1AT5eSmNHCgyAixwezcRPSTAhFSMV9b4N9V1ALMjjHfQnBADfbZ19JdtLJeHpkejBwzcnr1bFpZ",
  "key24": "5rmoHRWpwSCF8KV2Chbege1BWJxBVBkgRs87LeHr8yp5TGe5tpogF6ufLDmXTRi8ycKL5WwvcG5BEsrJRFF1XGBL",
  "key25": "3dqofPh3g46yXQh3iFcgjjKwZxMpGuVx9WLd5vpfyFcwbqYWHUWFKJLRDpMyTGFgMqMp2wCeKxAMymkxbwzUWssk",
  "key26": "XJzuRgnyEaoHHA3Z67WZyNRXb9oxez2BpmRuZCt2pJWURqkAcEuhXJvA4cJ3nZJ24W4ysBb65StKM3bSwk8MiQR",
  "key27": "LwYskQiNMYLWmuooMERSqMReUnwuFARP6JgQTzjFLsay2qJ5VYCM76bCsk426dQ9bc3mXtEtVF2w4EWdsjsGR5v",
  "key28": "2SqJ8pTt2yJAkC52c6g9cmkp9zdHqBQwGnVZT4bst6dhr9hX8aYP5gBPBineiWev5xH8AUvid7gu3M2LMnXE1krB",
  "key29": "sTTJMyqg5tFnV3dSqzdf7fTJk6agDdtKSU9Wfr1V4q2XLKmnDQXcp4AKydM79TGq8CwYDRpRZpBhi9ftwbcYpAM",
  "key30": "5c6McEuQJCN3maFrMBtoYmPzYND6iKYsG3WU2fLoCvofd45xnnrZrNzuQTrTCSTgTM2xD7KxMQyS4nWKseG3ZbfG",
  "key31": "1ojkAdEfS28aSbDSJBzCbdwF6pfMXkLz3aPDwii5CBQTCHQA8S6GYAvas2E5cKnrNjPvtyDr8s5jYHq2SisTdiW",
  "key32": "5uo83Qs2NesZ6hHP63vbVZThqyVeZaV1vWsndL2steHvVqcPEn3xiVjngwrS3CQvZGCbmooUKF5Z2Y2XKqb9u8zN",
  "key33": "41WjzR6yd1X5q67KjShyHvrAqFGuovaDjGcYGNYuAu6MRVzwE8tcUBQQaThUwVdJCw9fHQJf4r7DdZxvoVPdBWGJ",
  "key34": "5duLektrUQJgzJHLPMsxfUvMbsXrx1zJqq2fqRYdF7e7br4ueLw3USSunG8p12UKeys39FmQMVTJL1xnzxwk39s4",
  "key35": "3JUUiSw22juEFQWcVEuUkX1wwiFRhmqnJgrZU37PvL1UG11XXBRMHnTSsDqAuoJGkVLWQc9WxUgK8i7PpFnMQ32n",
  "key36": "5puMN7CVJnbBS1sAYryig55VjuLcjDC2eT4R2Tvkvfn34UFCNDJa79j1oBRhLiBnWK5Bbe5eJRfjcBpVqNRTKgnJ"
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
