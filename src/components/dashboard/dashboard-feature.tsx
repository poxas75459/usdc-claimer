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
    "3a7x56GAFAq8URyU5h9Ns5nLD2VJ9qUvwYwrn1Voj715YnMCAo3dPBsLdcWukRoTxCk25VFfkG742sQnpQaRFmUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gk6sKCyNd5E6B7EJZJYF9BzZqmLNpRZsmZxZ3rRbM9J3LH6gPBFPWoAZQGfJyCjmwDNc6soKyFHdVYLPbb5zfK7",
  "key1": "7MB7v81e4A6DpPiiDAkVasSz6bkG7Pys6NY5QzCYZnFbiGqaj2G6EZuZtTdgYYYGFgwyq2i8hUzvLymzpFAiuHw",
  "key2": "3M6vjjG3zdyrMX4QbrT1tWf4wBDTDNuTgRgPV9yivtJzUiY4M8u3eeiNWNcJBiA153xwAFRjG1ME9uUyw6i5sHeA",
  "key3": "4eLY46ZV9DnQjHgKzEDxeLHFBkye9FKVRcXbAig3wWevSjHdQHynKUwgtx7GdopYq7dnsqgnHKq7bo58uCz6bdrQ",
  "key4": "yVuECV3kcbzHVUsmVrN5DWDk5kz9kcCD1LcvsvMxo35gbYfrnC2sj5q3zMjqxf5Squat5t8XczaD5yXHqfw19AE",
  "key5": "4ha62tdfpHv9aEgju4UWbLZbBPWe3Qm5NPvjo59ZPkkFvfPYz6CksPmxQswaA1BY3fMiRYJHBUGjoJRaSyYQ7Ypn",
  "key6": "3euW2FJNdQg9Nm8u1fQ1GMRDGCvXwudZ8DpCfKGmZhvJi81cbAsSpvMqtMJRDZx8HfaU83v3yiM9TW4RwQ4Cb9CW",
  "key7": "WoHRUnKD4aP5fmuFRSEWFPfdHcGWDkQfTuMh1xi7fcRMYfA6BXoCpu2TBFJnoRFZs1PjSnhZMTBS9hdinbDuMG6",
  "key8": "QCaGBxU91nya7AY3dyx1z527SSqj8MNrWTrntpNfqM2XKY9zLeMtcHdMb8KaJePHZSpvjCRsSv2EyhFiVa21ota",
  "key9": "27qysBLQuPn4TNbngTQMc3n2b1DLHhjggiPvZ3jSwddJGqxRh1u5LLA3dCyEsN7Tp7AN5DKDHZQHEJbqAFg4TE8Z",
  "key10": "3jf5DDknEm4sD9gQpdUdmxGkPBgky2zetzdRpmxgYQ4omS2WCFCXGimZak4T8c764WQV1XXRMX4MCGYid69EgNVo",
  "key11": "2CprBbXQWXtCGfpN3L2VR4jD1kY9V3t5QP9E6HwBbNvbPfyTPAhhka11stieUXFjdwVEvdYpzbkbX16wcYtB9zAo",
  "key12": "2ap27Gab63XPYBptbpPtJHQE1gDx5mATK7dkeMmKgXtuUUjunRw6111AqFPWxgkKbdFGD1tMp9aWWusEJGcjNCd5",
  "key13": "4hVbsWGMSd8bLk4ZiC5M73cHztaYwByPzU3KAYz5HH3XhN7RdPMWLv974jzTevDy7fhXRw4dmAkFjtJm33xFJrV4",
  "key14": "3oYYT9WoFjrWg4zPhEZTC9gU8eB3rXps1ryNYmBhjNNcUykKeMANaqwT3Ak7Uw1kcSKKEhNWXQfj7njNqTf5mwbd",
  "key15": "5TqJXfvmqvnyee3H7xQi7BXGCTavUko83SPsogVnuKq4v3afSPihfsLJbPJwmg4pnNqAsaXXoP3b56mvkhCsHEp3",
  "key16": "2rbFoBivwReJLk8vbXrA1sLkzp72swaGAW8hxLWb3bqxMWk77kdxmFE9Vxhh9vFRkUV7uFEMSSDf3u3Tv5muNUhV",
  "key17": "xF8xbvTM6GmYc2LRdcxYotPFct9wKRmFga28sFTDeLJZfYUmtznYXo7hxhttaV59rvZypcXXJ3Zdyj6wt564eUA",
  "key18": "WkB1SWPwPihSEDHCCriXXf51mSSvDaB5TzxUgWgDLoxc6D443jUWc3DDusBj9zj9cUKAnxcLy15yxSTvWmbdeUm",
  "key19": "4eJ3gqTKpPSpXKxvVQ4h9wi1YmQRF6FC73xRLXrL21TNQu948bWkRiP95dT88H1pCrdStXRz1YYCHVEbTrrVLNJf",
  "key20": "nRECNStYZnZ9oimZ1QmC3DwZxxunQyF9TVoAuhjd6fi7etXFfK8zt9nFqrwUf7YZCyiZm1R25RCmVXk3nPL273n",
  "key21": "5s9kJnvBCUrTXJQqu5kQHiFAxKaGanUcW46fmz2oJcaf97UhSRWv9WbDbUBf7Qia69pjnkuiaamB5RXqwSm6VgeN",
  "key22": "K2AVce8ybkbhANoZswRBfhozynBio27eajzEtP4dzoXfzvepY5KR2MvheBQq39UZPnfpDHctT7ddsawjiedg3K2",
  "key23": "2MjHq8TJ3eaCTGv9uNNSfN9rdVjVjnwvsiK1fNDcYrDwBpBzc5jc9sjBzSjMbUcUN5dBz42WWgbMw9dQVfKvcFvk",
  "key24": "65GJG6m2mVWz5g55Q6HcsDvue4b5YUS3VJWcsa1MRxiUkLTuW2eiYomhJEo4GM2nLyzuvAXwc7sTqPgUVF5T6SX8",
  "key25": "4XnqCma1iibvo1TGKubiapRJRcUphePvfkoY4X2qHsGBtm2xmrbVJUCc5o12G3PmYvSccNE1nZiCaQ8nAjnJ3ao",
  "key26": "53i3qaMyxSghFfvNT2ZVd6iMoorRUzvwr6nmYAMpumdZHzh5SHDQeJ8LXjPsYycg8tjcvSov5H2HFtjjkmtm8sqG",
  "key27": "54s89sREybFjAFKetCgbvv2eYTb9y5Yh2tHwMWcu8myVr7HqNyukadJggSr9Dzw8cvLpzc5pTgczPxrMA94wZkWj",
  "key28": "4zJxv4ZvRR9szKxX6n78sBaeCLEBbBXHqZEMBSTNRGg7EXp41H2pk8R9ZRmReQ5VT2vqjUKfYRVrKRhYTG1V7tRN",
  "key29": "YgjPyXHrdyUYG6764UzmpqTqsLGxvmLLsRcYnLGyaYh93Ayor2swVLDcxbqT99ySkdCwAjBqeYvCt9QZVtTVGvM",
  "key30": "366B4FjsW6v4xbrAQJcDfCUcj7B7AL2WuKDcYDYpbdzzEUh4iJT7tbR57mHPWrPb358axyKHGsaZAE6Q6Vk64jNu",
  "key31": "3C3JrBN9wNGY1kvP55Vc6PyGTC65qacePo29ogZb18AvUss4suSEAN7TuWznEbFpeujVbsDn5qwzDFEX8mAE5R4Y",
  "key32": "44Z1TfY1bSaTXRAuPtp4LHwmGcEax13aVUwhPVAbpffWyrieNjBiwTiD6q441Ttw5HYynpGPPPKLRz2vDnYyouRh",
  "key33": "3krxjxtjrmxD3BZ5BjRMWb6wrc4U78Qrdt4mskfQH2NTn3KbbFBrFjYEKRGFzdEwd8GnmfMxscbdTfTrmVAVS5xb",
  "key34": "4aSKZCLqpzQY3m8Srq7tjoyPn25W6zJ3H8fcMcwki7o2Ztw89ki1PjZBMwunMHEnYxJgVrgYNnr9PURLVJG11CTW",
  "key35": "2jZZB5UyHJdTq7nrYoLsgRx6PQz3EasQHm4gSDKXJWVPhEBPAvZdZoopE2C4WojdkuQGp8RwWBri4Y18Xh5yDknu",
  "key36": "5256Y6bvrKUA1hnhnazHiJfcAZCDrwAYtTqivnJLkQqhNTRnaZCs1bZrb2mZ5XDidZ5cfAPQn4jSUqiQCaqwictU",
  "key37": "4EAiaFCpbJE925JWx8DRYT8dBw3BzKDUMhtS7CEk7nGeDPozXDe2dF92hLx8ynNrc4Dxwqf5xcURNRXWUkc9jWAK",
  "key38": "e12u86ZiSTRha8BYL5JRxFz1bnxUonmQVrACS8wegxuWbvoSwbefB31nYYEeeo5zBipQ1Lc2AhfrgAbLUoSHTdi",
  "key39": "5S3G34PNwaEZRdTc9sGHQ988taSzCGn8Q9Yba8c3NFAhEE6sAeuRL1YrsmKRApsigZ7ua9TPAFbXGdfERqLdFsh5",
  "key40": "2Lu7Ap5Hun575YoLN2cW5M81fx8VFK9yMyveEJV6i2462dSwDL5oATnWn4Rn4MHcELqzPffm5zXyAHm1iY8HH5S8",
  "key41": "4ycP6RG3JQC7fpZzFK3sjxsDEqZAwnWScRVS8neazDzpphBtRGFsiSzQ1bMnZnfYaX4fGQVpqvZ6mzizzDjTUyve",
  "key42": "5zR8ogP3k6dp24iiYT9mqedaism1PuWUxZ3HWmSnGEmDC31Kh9x3sCfC83fSH794BXyW98c5TsGHTLUMCS9PGS3C",
  "key43": "2GDdZhpi4wdAzyGHxpMavv9PFR7sHeh38kq9sLQAEtwc1Ctj6pF6RWrWnQNinvpg2aBgFqwmsTrSVm5ZtCFA5F8q"
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
