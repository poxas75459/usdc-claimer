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
    "5Jm32vmz52ReC8NZ8QbD7c7a2KMFWKCyRDjJCyUs8oA32bAwqYgMJBYMVQSTGqbPvPCdWaeo2g1fXA1pyd5TC6Uq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L9v1Rs8GVk2Ex9e2j9G2PmYhy6dExFNC5gtp2NfYSGhfRKafKiYY8GVZoccEEEzSnzPuK2zzTuvP1ipvtfYPJwB",
  "key1": "2RH7KwChZS4vsnmiTNnUnBU3fEF86AZ3W9SyjvxBCxB7T8tirqSBJyuv1GtEFXMiaGj14wTWHuyD1SxpvXVCxGyu",
  "key2": "4E99sZJQavvrus9qKWrjzYi998d8rg5s2RCPZ2GU7Shud7jdr6yb6P8m6MwmeyNyAA2pqPGBEGLS7ymPKY7Ski63",
  "key3": "3rKyLKyJfCzrQmCh42bHvAEnfvWhRLvFy6i16vn2pkRegeQqAwUB4GHvcZPWpoVPTHdJxS1tu8R2f47tH6r2RDp2",
  "key4": "3CAcBEeyQVnEYLQmDGC4dsuKGwm8bhTW8SZKtkxnXKnCjMunLBZurranNvMit46pm6SfGnjVyK3yxmgMRALsmCQ",
  "key5": "3fmJWd1326QYa2AG8wJPCtkW6bkUFWGXwVDRi2BiQZdCaAStSmbcuo2TCgHf4W8BXWkgg13Twuesh3bRhU1ubT97",
  "key6": "3CgfACmz5Tf35VJufC7zUY8KvWvrkytimE1cyy3e2x1KsSnMJ9su2JPmYbXJQxJkp1zH82EFM4NTyLLpd3JPXYYP",
  "key7": "7oQ6LCKHeNYf5UpRsrEQTNzsGtqfEg9zQ5TGoDDEQBr6vWmkPweywQnUttZvicby8jsLihag5NqxTRa39pUtDRj",
  "key8": "5tf4cjkNgR86rweTVdwFJdGCJMSPJ89KAc5otuVyjoHpPfurLN8esYiJH7D2phq7amw3np1uXWPbwh2btktjTjVJ",
  "key9": "3nc9C2m9eS4Q6M6fk5zHwKxmA9Y5pApmMjJn4xaN7RGfXrb9u1N2vRrKRmvUfrU2TQpBesGJ4yc4c4SXjVdEd8DQ",
  "key10": "5xppTKBG7bLToYGwNAnHyqyEKLnNAyDxTxvMrqM9uucuWXnFRYzu6n35A56jqjbG7xvmQF4FdCrLUUTgsZ3Njhe1",
  "key11": "sPHtEfgf3dxqgqyHPb1YMsGp5hDhpZ5NjpF3NyKSKm3k7mmXaLwzu6zMmZyEm8DpsgoqrY1FdEPvPkgsMKGmcBC",
  "key12": "3Zmu7nVXTMEp9Ho9t3nBjx8F25rD7iYmWzR6ZSKXpZJzF7sEKcWgrdW3ep6Nu1dwXEWLcKXg56cRQtUS7N3Tw4Tq",
  "key13": "3cL3mXvRonZLXwJHfDnQbRFZRieVEEQAUp3QGGwvJLwJCFU6UvgMMctPaj4UqWA5Tx4v8DBZ1SKB51YZdh2CFdZw",
  "key14": "5LsTCABCbErxsvZ98p6ABu566mgmQYVei7T4i6FYwMc5hzNYf5EJTzWi6ahqEn9KTApSebmyfisuVMoyRdD9NWC1",
  "key15": "d9RAcPniFn378pEFmvDjNkYLimkRnx3RjvrA6q5S6bQNwsDPMTvFaKnU7dUNocGPaCyJqdeszYFnH9idhyAtxar",
  "key16": "2SN3NUam5Za2bEqPVamytfvFrYEbtSh7Dn2KgxtX6PCBMqgC7rfaQxzXwKhc9yyW2iPXWvUraZtvjPnTc44RHRCY",
  "key17": "4dFXEB7KSqWHahycPcEerDjt5NizxBd9ZuCXER5e8iRVejEq3seqwJ4F3r6ZQnyirQgGhp3WcYcmn6BH2A7VEXte",
  "key18": "3qbezDpEMLNX3XrL3WugWEQ47srhnJc3FMEeZNE88ASB1mks4SsUU3SP5jv79VNbChtiaHvcDr38kxBoCQHdS8Vb",
  "key19": "3xu37jR8hbSnzx68nKQUyExdGA6ry1EPR1rg92RNci8J24RRhneZgoABexiksH6CRgg8RQsocpvnqUKUGDCNtvcM",
  "key20": "29qmUAf2xGhJx8yqUbgEJd4uV9RsJNCKnTzGja1QSwWc7cfvQv29Tg9NeRnNoaitENmCrq4X219DaPVztrboZXhs",
  "key21": "EsmSy317KvKfBPRQczsgVMnb9a3d2cDL74RogED2HDeSQjNyD5gC79Wp61Hn1ji6n67Q8RyMjiNujbJcfTVpq9g",
  "key22": "2q1ttdeBUx19PNvQVDkTyr9zwfi4L58qqBx1wNCt8DQatNp7de9CNus7uk4qGJ4G2bKoTXfMUwgQgPCmmBX2ufYW",
  "key23": "5BGQv4dRH4SiK7cj7rWfz8uQ2QtXfRwsYfvqj8HyrA8nWvixKdhaTFghd1BLJ7kVk5T3joEcyYcHXirqtYd6Siur",
  "key24": "3gQMuEeyQvW8gQgF8azALfg1DGiu9SA68kLLeJQ1XSHnxWfdwLg5tnfNS3ZtrJnYKHn83vDWeEZsoH4ZbmcFQwkm",
  "key25": "3wtcRVLkdYPbjpaNY8Us5yZLkbd5YyPiNe4PpzLjQ9NXNpJDswNNEfpBX9zh5bWvVkmW5eDkqv5KZC12VrCCBLxr",
  "key26": "2nMKwdveZe6yq1GannEGYdhgZZrAvStNXtbPqWWauBixhZqZyKh7m5fX9qxxCSZVvp7dDnm6SQtCRp7qeJ9v4858",
  "key27": "Qg2UB8zNJ16LfKJVDS1C6hZenBXXbFztEK1o1iDUh7P7kxyTRQyRXTMP8HNYTCXa1FNtdrDrUH87Hw653Xuw5wu",
  "key28": "27MmdvJM54Ue8J1fytjgagpf6xkepSwGbMHvGi9BBbuWvHe8mEmJiusf55Lbo4LLjF7srh3A5cTutT5s9PndCdA3",
  "key29": "2D3vV1mbGGgKYeRpxTyvoqhGCLBauAv1trLSyUmch7A1w1kgQdV5VAxUi1av5wCjc9ARM1QYot11iJKgHEFJzDwY",
  "key30": "5bnQLLqeyXHWzQxAhhSSpejq74Yi8ExUqK3knpGqj8FYs6UUTyxFWhkjvaXqnPj5FEFkgvQLtfmmLrkY5gp7uBxR",
  "key31": "5aBbXp4ECswJBudztMBWKy8QKAdNUdSjuMJ2h7p8JmRoEWuEJuchj1YgXQAhE1ckeUzMv1QXXv1vjjCd79qNNm7B",
  "key32": "4XXyaTFC2MvT3xgpUimGPjVV2NtLyzq35C3jQx4Rs1bSeeYFgY36bWAZc7NRbceKH5tdT75XTDToGddJMhrUH9Ch",
  "key33": "4oHRX4aqoKf4828HQg9nyEvPf9zq5QzCUB3KbtTnxpsJdXW6bNG6gcZ4YPUqDXLhKerMMBccafKDjAcGCiHSLedA",
  "key34": "VH8cU7B1icUaMCMPGYSzUZGLhJSu9MAXMt4aXcwLfWYu7J83s1iFs1quaAbnRvr8vx1k8tEHnorWJS8Qk11uCUB",
  "key35": "1s4qnh9oCnviuDSbTLAoDn7CPZKKXRggtDj2bJX23jU8kzfhPmVK7uYv5WLCfBms6hABMuZfhUaimJRhp3vfk6J",
  "key36": "3TfqpyqDwHL6KqZcK2ds3acGmvWzmcqCCsYC3E1BsENQRPfbJePCuERWYqbcdtcA3FwpziwAFwZ8VgWvpWnjZhtf",
  "key37": "4AxRpDQp24ndTEBYAYsmnFPPujtR4ZhamQWa9VDU29FJoq1CxFiDCBRcyuux15xsf1PxqBkmEcaKenPuMRgyS6AY",
  "key38": "2gTE8PVo8RgpC4sBG4AWSH4JXS7hhRGzWbBBCkm9eVhsk8iZNwdgR5rTsFZYRiipVStD7PKqKLe5PVPai8e2tbtF",
  "key39": "3qsPq76LFeY6y8aiu8oC8RHrVMcqJptR8thVBQJsgfd7sD7HxPu7hNiiLuTHSLWMmcqZCDSTAgQgR1VR2x99uC1m",
  "key40": "62z8bBoytBc2icHWMUCnsCWXN97rtRnQtxMTCwrdq2pjJjoB5KR6uW5te8DbibAd4nL47XNQMurcXeXzcbxqGvv4",
  "key41": "2rPtaSjMmEcnFXzuFWiKsXYir71cX3ZADDinaRCypr7re4edKYP57AcqnsRDaTDf8W3dcYqhiZ7EXkhoqjdN91oU",
  "key42": "5LqPn1gP3y6tqwjcpC7DB2CmVEa5tWRfxZuxTrNgAiuCYnnrVoTqS5XWzqmZxNpyZswj6u4ebJj7NDAkVQuQ6Kw2",
  "key43": "44LPgzpsSNeQ4JNv4sJML1vGcuLdj129EkPMwH6eRNC12yJEQ3ptYSq2LFETUZcphvdL8jdv5sMFEiASPx5uCVTm",
  "key44": "4zZrdMxySgMsaM9ZRY9TpMLbXtd6dXZvmUoqQfVSnF9EHsx5vGm2FdHZZopk8quuRRj1V4d5ybmtEfJqi8maQXkq",
  "key45": "5ZjBC9v7siYaHEQKtZiw1JL62no5HriugQ7eSi6s2Yh2tSDAi73XUZaDgD1yYK6LjX2c5XPK7vtVvMXcLT4YtZhJ",
  "key46": "4RpkBWP5JeDoBKcWsQ56AM5f7R7BzY18CcBnrVqgihyHuJQgryAtqaphiSwfao6xJaAKjTEm9Cbrw6zA9MG5bGTJ",
  "key47": "7m8XNPNSfanXqmHNnpAbze6cV2PxD4Hj6aEYh4CjmVwUggwftRZvSFwWSU1HdLHf7bccmfpMFocyS3aXjPtP6o5",
  "key48": "53gxT2uJbSxsiEBiyd9UmrikFpAD9UTukekbNFEGeGu5XoPJ51owh1kgMEPjiLdJyEanCjmMCiEUAmmarFhXXvJi",
  "key49": "2AjpWzCWpXyN6jvjsSMb5NuphZ6SYX9YeZhcKuwNvUsX4ZYcU5pJeTQXCTTis4Rov1tFSXg7YomG3Wu4rCaK3zXr"
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
