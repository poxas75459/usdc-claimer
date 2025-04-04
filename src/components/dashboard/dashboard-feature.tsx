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
    "5xfD1TBBi7tg7RwRHp4amf1dHTrBN12qR6npLNYrsvt185FS5vhWsdcPe676bnyD5Thk668jSGmfP6D7wAbGK6yu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CCBQ3jWLcjnJHh5GyfBzSeMaJ2Sn7oSTAshYVWMMFEBVJ36pp8aphqGGqVoiWYBsYchy6BVziFXD5beEkF7pX2E",
  "key1": "492pNDrTSVNooGQQLTisLBnoVy5SBu8RtPuBUemPSpBrzWjm6DDbwjt4rnJ3YCi9rpZYwbueeU2Mofq3tEhFqtkf",
  "key2": "5jCMn1rp5SMtfCVTFxFuE5rzMRDopBhxkhn6v4eJv4BCK6KWkaFFdUyjPpoPz2dy3xAmckzAUmQB9GCkyyYvJjDY",
  "key3": "38RxRu6b4bbKRA3SaKwsPDvoJedZ7yfF259z97ZYYsTHHMosKjKncEAGp8jSJMXQkf6s3V4NRJCmzKNoK5HgX3Zz",
  "key4": "52QrqSG4Ye8vfVyfKRZRxdywU64b8AV8pshWrEztWvEGmLiZvVEx8KfWMp2njnqAa5oeTzehm6Fcq4w3vVMPogFG",
  "key5": "5QrogAP6M7GGaJ4qdJckvkTaxtDPbL9sx83nTBci2b27ssUZ51bczZEm3GdmGcDoiLcfio4GWhMK8KkmJEgj5XSd",
  "key6": "5Jh3BtWMS3a4PWZXSAzpxs6RCxYXZMoewremptTSqPmL1Ki3VNhkbX7jxSwS2wpfLx4VocSKL7yRZbhYweMcxasQ",
  "key7": "2pLGB7nsiguw3wBArE3a4BwuJDRsdRxPqqxDPQFejdrkWxDdQuMtqc42HYun4DkBxAvEnrZDsf7DgvpenaB8yX7G",
  "key8": "xvFrbyc3oAK9ucwu9FmyHrG5GP6HDCZnrCD7CNzEeB2J3NRzMctemH9hp1ENpUGhnahvWfUxUmh4NCUxpgJfmTf",
  "key9": "uR2seLLPrqyCgQXCysHHRgw8o1v4kixVYRi8cGe5M6J3qUSZypidMe6DbuQMuxz56ukdwP7AGaCZ3nxPPqc7jDV",
  "key10": "3Nxw51sUxhWvDE5Ymjg3e3gCgy9f7pCdDLjHs2iaJiAJ8u7CKBiz2uoZMMJqfQ1Spx88GERDiY7L4mT7ZNQNfNwy",
  "key11": "3wVcxarSL6rRUzyYSZq1wWrWn1dVkfnt6ukz1VxC2DYxu3ZfyHC4SK2mN9C5WxZhdMtpjxTMEMRu4mmBdjnwF4z8",
  "key12": "4yNr9njVEYoUhTsmHFLA3oaPZ1rgGvD8BoKE1os57ZHbZgjU2ioVAha8mUi5jU8svS1QrRudFHhS1xrCH6zAiAuA",
  "key13": "3APU76MMYWZXwA8gBtPYjxCUzqrG4kakjjC4HAUhV7LGkqF2XrpTwbwcHCFtuiMKBvX3EkwVaBArjR6ux4d7aVp5",
  "key14": "5KrqUFaojk4pH4JEoGBGwsDFv4MhKAcmufRxi1Zc4nv8TRiy9MJreUhAU9VqQDUv8nMx8vqecXSxVvpYCXrwgboQ",
  "key15": "4mwZNMHibHWM36H4354besxsyknuEiHMTmoH5kUJnchg4bTP9TKA3f9XKyNZ9AK6bVB1Ny5yeW19H3vbbsxxSgdh",
  "key16": "v7xmt58C6CGWZtpmbjostL9BTPa6w1xdWKua1DZ97EjGZYNndPzbYCZ242BpEXNBCKThEMGHobRojGY9jpffmRN",
  "key17": "2Nh5eDdDrtkpD9SbKiJSiFi3Ph2CBTRxAD6yC4wHQZ4Nuq4JuYkAD5vBRhTUPiPW2ijZQ1DS3jVQd1Bse3r1e2QC",
  "key18": "3crQS3qxxMreK1XL5enHYwox879JVm4QMwvL8oFb4ajf9AeAARoCVXe7y3KTz8bB3bGmdBfUJhgZPKEu9mQFCahv",
  "key19": "2Ln1EZL7ADMvBHe5SwZFyXk3BLQ48SJKZfRnqYUhtgqoF2Brj2Lr8HwmwByq1EEvw3SVpopWssavsTS4T3PFN7NU",
  "key20": "4y1PYixvhAVYBzbKqgmSpSDRxQEnDbLoeNNyHHfPXaMAcMLVnSkfbms3LRbn4ccxoG5aatyjSNeWKgBz8xirb7Np",
  "key21": "214QnD2Lp5g1sZidLf7VEHgSkYpSoKTapHQqZoYwMP4aG2SAgNEmfRCbe9pPEA9YPTPwk6CqxFbLdzZo97YKuQRe",
  "key22": "5H9RE3DBbTH7FBo7gwsBU1KuXqRd7rwYSn8ovnr82bkzQjDCNvvR1Y2aScUvzs314sM2KYcs61F1CoFnwhcyV4uH",
  "key23": "1e8pBuLTkC186kDwKoSYZcmRo9D2tVwWPkWfieLTv9jHbo9UnTBxsWcP4NAct8U95Sx6aBTmJgdy1aPoDmGDrkS",
  "key24": "3fK68yFbnynUUhwWf4mDMnUCteuJZe7aWKSNse2686obor1fjTN46hpm6a8xJgMjjQiSPw6hXLSLTAymk247MLpw",
  "key25": "27YwaxWLWT6iYZusCsWjudyuW3ZyYSDp7ZoBjdVXWBMSsoKjkRxGfJHaE8aQh6A8mRar3Cog3yjZxtcArtmhF7vp",
  "key26": "3fz92WbLMvvk3v2HRef9NBVdABHG9peoZrck31QpaEmPqFkudEa3p4pA8JMxRpCXgz9NdWyxMUT3UhfgB2LnSt5Q",
  "key27": "3ikiu495zLxiQLVGTKEgY9ECUWREAUoFjZDBohzXzXwk8dTZujdyCAuciTvZQoBj2oq4SsD6twDG4miu71RFwqmU",
  "key28": "5LJ3WvEVPoiSybywoiBxJLfTAmUny83nYGzjFCGX6LRjQAs2phMoMe8KMrsdbUyuCsyHx8GTrxMG1VEmug9oz2Pa",
  "key29": "36GhSaMpNV1ZXc3PQsC8dURh4w8bZ2ENu5jcXCnGcBxNyizF9oi2Lfi7Si7Fyxoa7dpbnXfDEVKMdHWDLCX2UKuW",
  "key30": "66ToBhwkyUwNiZT4TC2EHeUNttJz5dL7esoCqJrJyHFjXsQKuUKQX1bLAJnQ2fcvLQmsAwc1BY4ohBNVkjr7pHAe",
  "key31": "AEYsisQtE2SiJVMvsxNnvqSxHnNX43cgvPWQ9CYv7psYFZH5grBgnp7fpp3combJ35hF8nruuX4ZMWHL1Y5crhY",
  "key32": "5PxjojnH7Ekf9hDeUCTGpmbH6JEM4scu5qLofZ9yS3Et4RMmG7eiJ8HGTwAY6pqm9aQHo31Jx2v2vpPMH2m8fBML",
  "key33": "4MAyYuqktnHm4sE5WZ2s4obUWxcvAw8iiC93wabX39y4h6A4fTYzx9q1X5C5a2TUq2wpVnkkPpeUs15ujVr3zR4W",
  "key34": "2x5BmcMvnCLcVNGSZcNWSGPnucLzxCxvxzqFrVrQGkY7WH4iyR8KSu3eXtTFHLmdoTyc1Pu2rTBubEKkP9bqNL2U",
  "key35": "2uHVBKbAuPcnhSpUcKn7LXzaPj65PPSL9VEerLv7bkNDGEFTN5Q9cTTakrDm2BHCZc8yxdHBbUbFH1SUxAApysye",
  "key36": "qwQWWWeRpVyEuNcbpWXJt4YAhm855mkaX8vS9JDLzy3eT8bcfLPXgKELedRR8yyaaEELY1UqbPoqaiKaXmYZT6d",
  "key37": "2rwcUpSURxa4zXhwoc8qsUxQPfrz5i1LVbkCkN96bb5euRgxeBjGgaRKL62SbK6p6JCqkXdVMLQ5VsEewVdYVCeY",
  "key38": "27GbpSESmDcyG6aSeAjThpgY4u3Rvy4NCBx7UJ6wte6MBF8FGwtimnj5WAxr8RFLMddqAWzBBHtFWnrYbzrxkNpz",
  "key39": "3zymCasn9MqfbBdBx5xHuejWxWdhaKE5yMsoucQLdrni3YrfA7PSC4m6ua7GmoqyYPWWBkUm2xmWaNPGDPFsyVUf",
  "key40": "5Wb8yiwS5eUxRKDc7Yhe9a4gRdLjFdQ7sEkuzvnfJyfp4SVx1ae3ChkCkfQQoSVV8eLTFFz1HnUBN6wfPq7y85x4",
  "key41": "5EDEiddjJhHXKSQcBuG7mvFSWjvvMdNLTUKDKLhMRpuEnTenzdkotNQ4mrmVNUt5XDqaACF7eEF95LJKTajjChkw",
  "key42": "5gtWVeSwjpRFThMbtcUfbaJHEUvRmJKJF4GnaXYUMhDgbb7Pghy5E8448feEcoyRAVLGziQX9cL52irSqVB8kzwk",
  "key43": "24KtAeRuJu1Ce5ozoJWUepfPrxznckR1u24wsE2YMz1eDuHRKrJoSgS7rkiQfQEkRSbBJexS3bK17EmkkQTvWC1j",
  "key44": "2yA4SoQmkWMfKsw41LAiPHVNLr9ugLsQSkUJwsRP5YGDJiajy5w62ZYQExRJThX132xc5yR4MXnnKcVhk9pUKsbb",
  "key45": "2E5q1vNXBdepfR8rXCNKmf687i4XPefoXTbjmLZF6nZ6N9uLkJjMdRWSFUxnuGnBYoLDbTvnPaCQkFgAd4Hm3gPj",
  "key46": "56d3PcGL4rguWuSYFWJd3VoY4KexRyRNthDJyHC1Rvgo5ckh3kpnhqKfyD6Et7Rw2wfhvivtGw8SBES3Pa5QMSYJ"
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
