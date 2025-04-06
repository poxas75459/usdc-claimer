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
    "49YBCt8m8gTUthURwdfRbbGSutUBUdcH8aBt7WLjKAQS72XABzyfvdGDjZSLhz6BFLYAdCH9EUEDnD6b44N2kzQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "391dMVuNoQh2BJLh4zx3geJsTwy7Y2bgBoXnqPzz3r38nMvPnZxipeAqVDbqExr8YmTYM4vR35cPrAvygH9mudBV",
  "key1": "5NHvBcAap7gutZpXFrRCZqPVEqiYtH2ikrvy3HGzRsTA47KaMyMYiiEkKi6i5KN45RH894xwKyYZN4TztVafo1NU",
  "key2": "4M8xzXyBjZtFuyAY4KmomJEMi1q41RmR8pDjmvtZ8sePNLPscSxswCqSTuQ5Nt1M3KaZL4ttxFb9U1HFbKTBZZ8z",
  "key3": "4DiNZcDnqFWiLpPvr1YxSDFoL5fZkMd3Lu4HTiJZEPU2EShmsR7YzUobRxfvRfYLvEzpQFSkskDpFQ8mhaKD2eik",
  "key4": "pKguZ65C4dAjG6H7iNHwaLgUkirLTjt673RfdfYrUHeyXwqHUm9oq54cR3uFgiv1wd6J4eyGGbBxunkB8iQ1Hds",
  "key5": "41qt9Nk5HbqXF7pPTGeXFgMvJhY5PJP6c6BEcfmGyZ114ST8yfdyCqCU8JWZLNVKyS9TbCXBM6zVGtYFW6MGxdCC",
  "key6": "3jwMX6t1vwEUsQeRN6WT6U3Vguje5nSTjqQPyvYTxoGjvXS1RXcKzDbLTjBHpuUWCFZr3PVNYpkG3vnwcxHi8qb6",
  "key7": "5agwoHr2wdNXMzSWDACwfsx5VKa6CdQK6Zz5gN1hJUpBE7rZztTtwJYCRjTVVbi6H7qvcPF3xz3W2dhUko6SKQix",
  "key8": "27w3Fk794WmpN1yGbP26pdc5kLQqfX3LVAfYghThEiM8Ttb1a9XvTBUnzaSqhGwDbccc8QWrN6XTZQT4SuCfzhtS",
  "key9": "38HeZPhY1ieozfbAfKQb443fEgaWhGLsg2bJdrSJcsu1dZiniXUYVSMq7yFwmhDgmnZBUhB88CXS3xMeQfFwtF1r",
  "key10": "xaLbzwvwgUJDeivh9uJWoN4WHnrXuuecJTNdrnNEoRBC8tV6siDdhk9vxUpFnogQxbfjp5FcVHEhPXbVMLjkt3N",
  "key11": "4jachmXX9TE28EDh44pviBCSoVpBdtgfDmw1osuiwXFAgancMt4B8sLbpYFm4it6fvbKHsniTAd9Cc9s9mBac6Kz",
  "key12": "2sW2Bn9dif7NsPeFPtXX9LrKDPCeLE8Gf548MKAjkz6dpHVLqaNa9PhEoPBEZCqNstQSfzTj3M8toJUUaCxpqFSi",
  "key13": "3x4U9xCha1FzWJmP9Szmd4GvpQNMi3oBG9mtwm9vDz7TdeXCrWoPNmT6YqMLV8d5pnvLjsWkwtMkBLidqPzNaJR2",
  "key14": "4y6B8G8kjEEYqjvfQz3Rx8tYdtoRJEhqsp8a7ZFWsfyB1yspBxSsBqx7PHMSQf8bVEM96peH2cPkSVXnoe9DgBZW",
  "key15": "2YpVjHoCqiKzoAcRXugZVgi7VzVedkst2pSDh4kPYzodJ8kZ4r4QuDNVkmHLo2RH1ctU95L6Nf5XHLr1Bf549Vm2",
  "key16": "5fSxYC6MoTYjhpswjpC2rP5YsEsRhfnmAZXFsVS1zS5A1EJs4Nq7QZQ4tCT9xk3j87cRZNk6NdVKF4FZXTBFP8Ho",
  "key17": "23GUYe4b5yFgXSLC4joCFqFGJxYyWUCjDrUThpxjDcgGd1FpDucerfmJcP5Dfrcscowhgf7asxAgtFMNLmxwH3ti",
  "key18": "4a3ibEnyLyv6egNTkUFTx5z2UcrzvM4BAhFjuZdg72AZtqpBA5EfjFmsHS969HrmwvYHZhaztKbXL6hnwhh4bxhy",
  "key19": "jBSMKTd4p3cfc7xKN1DAmjikUFZsrFeENp6G3conzB85kMtQTYQAVxtpLhNp7sqZXfxqVnTRL1SbwTtJXZgPwAG",
  "key20": "4oYKiTbCXKCrSQu9fahENvXY2aN16EHts1UZgazTxsi2Z4t8EE2ognrrBRX9N1rbJ4mMqDEGX7vg56EpwYyQ9HBK",
  "key21": "2HsnDhpGDhJZij81j8h63efMsAe43XJ4gTBTHcLqmsbfkmF8LwrLfzHdveyFTiisQWw2AuHw4vL7MTAQ41svr6Ua",
  "key22": "3rLsMhH3hoQEhmQadDnZTqDtGVxEj2KfgDqner73iC1x6vdMZHptMk2hbJkCPco6dTnRNm5tJsSNvNLvKgFHZBQH",
  "key23": "2Y28jPpkBNwWmErykdNPkP2basVy6bQgsRzvUagBArcXGmELJwamRCZDXYDMar3mnJ7E9MBUVsCytR8aCnjp76ZH",
  "key24": "3WbCX1wujdofnaf8kRjdaSQcBfMtdu4EYjWqL5pHgWV24su3sYszNiDMrZosgy7FDb6G5JvvijsNMpKXJBwdGffN",
  "key25": "Y1EsxUftqcfcdFNeJncdogrn9MxbxoC3CYkSt7Fb6jhnTTrh5krM6DPBMDFmVECQTtWfkPSBQKTVeAYbvveX7yw",
  "key26": "5rceybuzG6gD6cucbXXhinmFFHUbFLKA5BDabkvSPDGhDw6ZukVmsmad9rdrWCeRJML9F1BvcS8WiRCt1gMTWULF",
  "key27": "SBXrJFrdDP3Ec19kaEn9TY149bGnpnc9XUrgTzjAbLJP9GmeS6nM7wY9YWFWVsAMutGi2nA1S4my8geKK6dh5rT",
  "key28": "3CxhzpAKsG6AgHBR8RXeb5ryxgrwkz7be2HdPisUAHp6NwZwZZ8ps186Y4LiBhyLa7uCT86DtHdW9hmJ9euuqegg",
  "key29": "kqgSh5fyX6GzjT3tGQ8MTw6RN6zvsA7ZUVpmYJh6e58uMtL12bbw68e9y1fxa66dQzZPjk6XP58BzxYKAnciGu8",
  "key30": "59ksrQCfFybXEarri19KjpYEx7XXffyMtbn75AsTcsigTU9CJMbBymSoDJsLNTKSVFPJcmdBNybh58jkaJ8th3DT",
  "key31": "m7W6qqyGmov1UkoPH6AewwngFU8JG3vYrr4jeACYXTcpYFKnAF3HrHmZdC22R8LQiXz25qBEdH4PV9dssb3tDbB",
  "key32": "2qCULPVMhfofrz21RNJWbpYyJ3cWfYnwR2Hcvp4di3DNZRmuUPWMyVDYgtqQ7EL4RidTDsAn8LaUxgKrwJ9G8EtC",
  "key33": "5mVpkzaba8A9Kv97PLAmRMCziwwD2SbeZJrh42ThVaCid38E7np87JjxaDqiUQVsiLR9uxuzpwyUH4J1WoDcxpNw",
  "key34": "2a6qqpcZSnk4pGGZygcGJMLAJPFhGSFtYbSa6EJk9DtpCBW24fJxkHUPSu74hN7tV9ZuzEp264heVBXejFZcBRtM",
  "key35": "3Q1NiJFFqHU5GGauyP3WgZmqUZfpvJeLDYeX17m8idiXd3cbXkrbq2AP7tiPiZW6LD9bquPPJ2Dt8GV9qVTGu5Tz",
  "key36": "yUhtccHwbnznY4JYFLqdC1djGafgsjPFiEV7JxYedoyE6tZZLY1DHLRyEbf5Y6TSLVc48CQqLBjQ6YzGY6pVHuB",
  "key37": "GaLpKYpYXGoHNo9pkVjincBCTd19cuEN6exdJ9yUdB2qxm78hbTqhLZGy8QQ2seoVaSsnbwVr6cNtA2v6HMquzh",
  "key38": "5iiQCKRsVZXwuqypPf1tkVbhFMunhwAhao2oZBw6XAgC87xxkgD2DUcBFhYKUW37d8HtrHVreZhK2jEs5hGrsiXp",
  "key39": "Y2p4d4MHmNXeNzUBZxJ1wDgZfX48tzuhpvW9Hwye4kc9XA2uJsN2qzr6UKMiKF7nvTrDRMKXy4NGNb7mGybGqrm",
  "key40": "2TihiCxVcqDTSDnutdHq59jtmxM4uGL18p6cwE9ymR2hueMy6cyduKE4HowywbYWNFo6MiDpG8Co6S3pgYLMGQ8V",
  "key41": "yRph6tiDqPYQmvCnNRweVGJ7dH2fiZNFnYxQKZkt8Zj2Hiyrhf1MmSn4MCPJmvGci4FqMd5Bgv1dJNRArNY33bV",
  "key42": "hfCLuFgHSJEmk7aw1boV8np99cUCcre6ms6nVzb6HGGQSZsdpknDmkZi7pXU6BJZe2pNShWEsRtqZq7YZ5zeZno",
  "key43": "rs2jZNkXn93ofyZSV3yWz8WDtsp5LAKfSLhBhBeaYPd1DxgiA9qZdVGty2grXEJxUzMXDzdETAELFT6ApSxwqW4"
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
