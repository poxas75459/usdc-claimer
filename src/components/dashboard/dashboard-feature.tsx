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
    "3U5ecx1e4vCJnUn8o23wohfosTN4En9o8SMGSHEbJiTjSiYxG6y2yVzd8yZEHbL5u4dMcH5gos5T9Kx9yZvzaGBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VTQtTHWVGEyhH8u3zn56FWd2AK5NxK6RxgRwnA4G27Z9ZUz7ir2SKqaCscDJpSGmmZhdMj8HJnSKyof1DmV8amD",
  "key1": "5gpqt9d65uZj9uQWARE2bnRNstjRoe6npSKjmq7PR8WbR36Lhhx3SqnAZXGVffB2SrWvnYu4rKMZ6br34PL3Cthi",
  "key2": "3gpthnnCmq9tJJVvGb2nHah2rqq3MRewCPaMnSHGLfXtqcyv1YNbvQZShkjZf1rqigUPKLW7VEygspgU52cEYzrq",
  "key3": "3YmHv8k3k91mfjimxcCckfq23ZhtRoGy5jqBVPq2QjaUBXNMXCwCmuUWpr2ub591A6Pwrbadpevdj3iXohL2ifiT",
  "key4": "51GkzzbK5hg9wWp6B6tNWc8499gDHW8FWXcXUcJXUG4k3ajXWafDakQh47ughd1krDe73eSJ3SPskPs7JCmkX2Sh",
  "key5": "3xA4sfTnNxa4XDpUp8qCtCCa6mCiEPHxUYDGoSxnJjwd5ifgk1LUjMqzoq185a4z21McRobEHwAQo7Ta1D7uSfhk",
  "key6": "44TNmmfZ2mxaCvHkK2aLteGMNYdo7TTwPCzqcMKs4gZ1BJgvPm6HAz7fPxYbSEkH7vfKug9BS1tfFhth4TYtVkni",
  "key7": "3zkCjNiRNDatxwWFSvJ8iif5YHFZEWLCRWSxLynL7EcQh569GepRypEq6CcTybAqbo3vwSjwxTtMNXYb2wQcpCU4",
  "key8": "3sQMxjYz7ftJWDK8FL6nD1smvAbbQycU5cM2DbSrGmP1kzXr79p8FD9mGmqwi37E5y9AJ9tQuxRMaqNLgmtFTLL1",
  "key9": "DWvT8zRt1VkWVy4ouGF1S6zpndRdVErhqyafDWPUpHERTmwPeArR9hvEZEr1JaqwRgfieku3YFtJPYuMmKAPjDE",
  "key10": "3shAbBZes7v9T9PeNcG9a2pfiz9xjNjVg26gfJiR6ada8iAjKhEkTJ8fmP5mgRdYnnUjajYrH95UbTRiPj2AK6GX",
  "key11": "44gE95FTWLtYGiRmAivme24nFYMUkr5vLwuh3DNB5MdBoNUopZyrtA2GbZ7cdP1x7cz12JmwJv4Um5nrzTjxpNfS",
  "key12": "2zLyCcaAzB9TgyYVD2umrRELyBYRa2JCjLGmE1mmpv2sUcFk45714GJwkcn9TrgYoJPDK8PUUDF73SaQkVJBP8Kr",
  "key13": "RZiKFWidUChA2SoDgs7uV5izryqVQWoTeUW3FE6XvxSFJVq5nwFrwj26P1xhNAViW4HDJ5RjAPi4p5YEGvPmGts",
  "key14": "39AVLxtvAJZ4bzKLCS4RjdDfd856wssWCgYgCVZD1J6hxYexsSYsqxHLSUGuBNAgWxY14XaDdzst63CkuSS4vbR2",
  "key15": "2wJqmp64BHiJGrXej97qLgSunqPkT118qpkKtu3FenRTJAtAuMLcrGs76we9sG1ttSYt3FsBLiyujaZCG7psYDB1",
  "key16": "26pSAaHpkybrETf3qkMRycKe9oorBnax1ynBFbdMLDWSV1adixbvxVaR3QSj52Qg3cuMhBn2vMB7gWu34kHoRW2p",
  "key17": "8gWPrvJve122KqsNMN68rLeRPgbspb5VSYqreBmqJMZFy1Dxrgh7RxhY8zzu4eUzCYB31x8ahhoZRCBF9KqmQ8j",
  "key18": "5RqpyQRJ3SE4J5gameioNNU5H4CXJJS1iguzARiCLwkyoWur8Z2Q5d68PBtkBgSjnohPwECn9RXa76nTcbPpqaGZ",
  "key19": "21nRGGSMwZ2B644nvJu81UTtjSreBjLXwbW9wK7HNDWnYRA42whyWj2f4wkZmDkZJQjUsZf4X4sbjMse5xuXXg18",
  "key20": "436ByuUxSwz5gzbvxurMTpPxBmwM4mVVN4z3QMsiNioLc7hVNwSWoQGyEJFrB4DqZyi4vsEiz7SGZ5cxdinBrMkP",
  "key21": "3kBcVgPxASpCiSX85JkCkdFStbJnnSJopgVL4KmxoMsTwrdZ54ac7x3wzjWdDyM1JZoLkrexkdUcixWeHaeWMuTZ",
  "key22": "2pTcKwraTFgFwgj4SyTRyRN8NZKKsyjZmP6AFuaGikV7Nd11VnEXYC12gc3JvaecvXxVoPtUXJo6nqnF9Sm8y9aD",
  "key23": "Vk9p82CS9m4QQY6P65y4pBeePyVSJKrSyHBpiRtyY9pDpZxp3caEUrS9dgpaAgGqBc1tgwxJYSSAgVFmA1ijkxN",
  "key24": "54V8Q7UL711Dvf6UibyToMTkm968Tt6XQYyXwAKNNC87TegPZh5GfeNVjAFGN5B5QQnT5KfGkrEsLUND5h6NQoXZ",
  "key25": "45Mti2Y6gB5AkmTErMWLMbRC2ds6L3G5pfLft7j6XkwmX2CpeakBwwXpJV5MeU9LU6yPPcuwB4WZYvbsBdxxAAS9",
  "key26": "4kLHgK1UmdDVgQKTnC5e8DjCWUnJRCy4JUsmbfGSdNxiqamtXQL9Wrt4WEpbupEQr8NjgsgjjbVy9VB2EeK4V31m",
  "key27": "3ifnYphQAFzkTA2HEL5PqPKG7KL7PTfCJyeGDDS5PeDtAHGPx62yugcLk5QqdgiibLT2UBmXH4LD5SbWfZsPuXKb",
  "key28": "4vh1CtKeA3EreqPi1GtZgKqRo8kNcnzcDpi5Ra3BeVii4uN3EYEhmu9ZEVMdCUsfWHoM8KSoXvgbLgF4ZkYcL6so",
  "key29": "3S8VfNXWBtBoHLk9CeDDhYZp68uk5oscVhNCMQPNFnf9rdee282bRfiRQSp5gwQmQYNGX7hWx2D68PQkvaAJNzpW",
  "key30": "3Xwa64G52TffjcZM2PzwQ9Nsi6gZTeXkHmiMJjvcaVKP8uPMtcePJ2z9RFpkhxe9od7MzrjeCuUcQ4Sfysp2CvTm",
  "key31": "5RtuaFjT3YaTgxjPf42jJQcJYVgrx89rc25v2LhdY55sYW2hW146HQ6XkGCs96aar832jawWGUTRq6pWWuL7jGoN",
  "key32": "3a1QbMPej2ENxEgB6o4dBx6EM6SVGQWeDm2fBhmrF7pV9tRdVMqubx4kJjfKv2VfWsEEQ7pw2rqqSrrT65bvbhuE",
  "key33": "4eSUihq3R5LY43wUeUHZe4H2y15DAx2KMWz1jhqRy6RU5yLGr2UrDjkmzSzfngqTpTR7vyzE1k9ptNKbkSKhLLog",
  "key34": "5bcZg4ZAbq4ahXGKFtM9PSPMgQmCHB74WYs3LRQnUmm4RgUFiz7JNGWYzMb5EfrD4EjrLfTtxfYM9CzEmULp3L9q",
  "key35": "2pTJox5NBYdtbKpRsAeWr3ZCgjjmUfmG6JJtK8xmfyx8psR4YUJmMu2f8PQ1MW9YkZxcx434VFahcjNza6fp6ND5",
  "key36": "5RaiVszAZVZvmSryExxJDvM7WLX3QcUhhwexJFQnsSpfPijjdrpYStV9TBh1ZzmeWnVRq8ajJuckoftpgnZ7rBL8",
  "key37": "3inBGHoerTQq2bH5qAUF46cNHV71jRHKhvcNvSVsQafddRc4Yzn3PGukbnWRV7XCCHYePdfLKKv47qVVk14XRE9F",
  "key38": "4KVAsVwg7LSS8FZPPXaMSpRaewJqiTPmkdsLZKvszykZutfxheFfmYSjRuxNuN9zLzzB7LWXBm3LrBVpupds5gq",
  "key39": "59zLvyUrLsdKFvjLsnUCHXAsLPnM1Dd8aEfjTtyG9uPcZoLULdiukkAsLcQTsbTUGEPNHhiwXWBK8TDxgAikR22J",
  "key40": "K75HndSaugJpd5c5ubjykPyCTbHbqxwSsaZdVdySY7qw7sguMvVHC5FqLHKRuxSxawXmPCDrU8yHGXnkVtwsdYC",
  "key41": "4UKvdUtPQyaXGKxg43J2bkUJ7hH1AzHWus41prERCJ36ZkodCpP2mviSWNzbhfWvaKuRMrnyTYFXCE3tQxwhXiHb",
  "key42": "3BFNpWNmEBUf2tHPSRukf8KcAEB4rCqUbyEF2Ats3MFudw4xP54n7BWWZxwLe2JCeVGMFmD8rbvYU8QCDDvdUW6z",
  "key43": "4oqqU2Ajk6q1pwZjfVrB9P3BoRCwCVfmu3pXJLXtu1w46pCjcnvugC7onxg3RsymRak5HBbh4u9cjNRPopXz7Bvu"
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
