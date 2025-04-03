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
    "2c14Ze1R3WLT1hDBNMbsaSmz8HSb4PyC8vvKSg8e63LveSDXAfj4dBeZ4jhYHLs3THbUNL42AvZ5rXRiK25C1eDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GNgzkJZa2t4sc8y4Qz1kNyK1vCaaepQu7Yw3bPJFGaiNkQBY9bE7wpcSU9FKSZsbNVQG2cMp1D2m5VUnzef1jRg",
  "key1": "5g9Wd5RrCdsTMLGBZgeDxE5UsXbXnnS8gAgRVyp9PWvzKafp6Sqh2YFzsJFboL12GLiXnx6HR5Mh81x5yNXFHrPr",
  "key2": "45gSbB9E7mkD29f8GruzSe9GRZsdC3LTsvHpHHHwN2icjHFqxCEF8RHUVfNn7UzLLCJSTg5QNtU8TSuTcGmGDGWx",
  "key3": "5u94ZDHQZ9hdAPiVXZo5fk3ysDEdwvuP72Wa6QMjkKyVUnUCWhZniNpwj76gZSJJ5SsbCYRwjsodEEXuRqLZ4qAA",
  "key4": "2MKHRHpCCVBfLBpvMRsiFVyxSKAyru68nCWLrGbWyCGrqKfBGXg1zBpPcAryPEs4pNxQrFLoNXvqybAQ6f9QtFPn",
  "key5": "3eGwWoDXYuxpmxuAUr6UorD3vcmQGCpD9TjZq9dir29gKysLKUZUSX87ow5kHMoGJptHhNBvfeQsudNvHrRvTrkV",
  "key6": "4dvQs3cvSEDDdXWSgxmAnNroK5qK8ujGLAWifDhNVHYgcApt83LGfTAE7FQm7gxaPhm2cnXgvUgiJHfSMdRWaYxo",
  "key7": "3Cz7rRdEqtcExgE1W3EsneaSBDoodNEPeRJBJ2cF6YXwRdgEdCP53hLHzXtSMY1oxkzdLwvqN3n3FhFT3Mfszkmn",
  "key8": "32MKxx1xMcT9tCYK2B4MufaTYCCm2Y72pRf5wBJ72jBzRdB2QGxmZeRG5zGLvTkNdyPpsq68jTJiuvxcEvQL7yUW",
  "key9": "48N19M3ewBT276deSRQTFQ8BuSknqY4fjBGv8v9fuV3Af7LeBFZMUawu8AD9cEvi38mfDTNXRYLR656nJrr9ui26",
  "key10": "46KDk3NpBi2CRewcAB7ibaMQ8tm4uex2C9JiUxCpYzgHU8yBeNF1RefoHprHHbfHp5kPnTt32YRNsvKYEWAUSWhr",
  "key11": "55amAGFjoPARvqWuceyNvEFrsQsNMvLWotCNZi37sThA7Sh8aHAhAqRu3e63AvZvjdyzdyQ4uMGEb1px2ABzswob",
  "key12": "61fzcAxs2zDieYKquXQdyJwXgs7kvTQXfq9kPnKXpJsMYB4pRV2r59iKtfEKBabCnnbdfanHuNNvJwtWJ3nxPioB",
  "key13": "2ykuntA1RmvGft76q8fYsmM3YVzaWvFLQR4W9ss9pfAvDM3vxCJv6oT9VLtKK6bMzv1CfksfYttdzxkcCaVbcVgH",
  "key14": "5JA9pnki3a4dmhbBWJTbbPCozR4DakZeW14ejHKi8pe6sVCn6DfyjkbD9EFqskE2rVZVomnvP1oybuuFXqsQYEWa",
  "key15": "2kYBoBXAoTWJhq2gcT25t1u4g5c6vMV9o27YBV8k5yDAy6VCXq5ppyGViXZ2VoiR3XYu4kexf7V4EfcuFgERPsmR",
  "key16": "2knZQr9kayPSmyNkevR4ZqVZADLNNL8dg8CrFPVKCReuxCDShU434xQWHQP6U2Pt5EDDddXRFxFtisnNxbYjJLQr",
  "key17": "jWq9heDWg7cjq17GxdLGQTBBu8vtaMwMxgnh24uSyjszQFyMV9Qa9JwDDUM4SJ1KQH4AFhnxfXjcM82WiUrVayC",
  "key18": "4dzsy92nFfLY7ogNqowXdT9QVuuiDpThAQ6fF54Ap65bvSzxDaYs6bv1D7ALXaRvx3dcBkdFWghCWJmA1m8xFoPH",
  "key19": "3VR6U2HrwphQfKQwgbaqQiVAfeQmh4Fo8jw2LBZPk9uSmJptw2KVdr9dP6SuthUevdFN1amajQkaLsQs1vqyFDmz",
  "key20": "4JvRoBWqX1mwCF22KRS3BnnayB5y9PDZJbkir77uwnr5QNuy2R5HCXhKDoPgC65kQwRPke4CWEtnFtuWgeCq5ngs",
  "key21": "tWfzWj1m2qSR4k3558VJ2uxai3nZ8kQEfsexPonZcXdu99o1PUnoz87yha8kHuuh3JEGmLquwCgJpKM9JkLwc2r",
  "key22": "3JjRWq2GZZuKExc2NvzEeBJgT1dpzQwdeaF7Zs1qHxTvY8D4oUTX154WRxyy8C8qcLzBZnwwXH2MQLNoPpeHo4Tt",
  "key23": "4HbWcDxLwpJ893DxCbrd6Zu19MHjbzFUjHvc4Fs4nDbtpETR7mVanvnkBjPNWJPRSvy98rf9PawupJujcuaja9cQ",
  "key24": "32vbgJdvFqJ23TysHbxrgVzxGKpLAheFSJvcnv7vdoQCq8dkw6JHEg4XXyBwA2GkonyVD4LDGfHyNjnSSAfjwf9n",
  "key25": "2RJAN7Tyy5XZh5TKMAtYFcPPYyXq7GKJwBJ1NcMjzh4EYogrAncsJrfvUpFNechAbFua1K4YwuTgwHzmbqJcEDka",
  "key26": "jEGkMSc676LwiEpQhh6p6ZFhL8pwiQBJd1QL3q5neYgiyQ2kZcb1mFetpC1kpmuy1z7TDZMLzknvn1nMajHnqRC",
  "key27": "25EUwdLmp8uxyyyfBa3kRruWd558nfNNukGvTeBSKTAdSi1E9GhWveakWqRVPmKzHXTcQoUq5np46XL2da2GTick",
  "key28": "Y9hRS8JxpVvZNaHzy61gzmEk5ykhed3zMsnUZyfMvwz3epzcmUs75ZawjKcu2bRtsQxsr3wNEjf5LRdsz6fguqC",
  "key29": "tJxop1NiUPmgywbiH3MGTjpUtzreuqiDXitGMyxJuwaWakwQNZWcpxUU9ozaNEYzRSk6eSsn9uqtSw4z6hRWnsa",
  "key30": "2vzCiLST13VYobPxhyB6v9zV8fAVEPhp3Grm64aADcKPRvCBod8PryrGqBBcrvGXAudW6ufSGdGqkFuQy1VxXNLd",
  "key31": "2vr2A5xRnBDyL1GNfyiDBoHHRTM7NoEtZ2y6Ldd9BGvEi8gUSVC2ueaWamXqTHb6zQKf3AfDJaGq7QmLrV8VFbbd",
  "key32": "4XQfqgTceEyEtQNAogW1cxDiKHJWK3LDftweNqcZCQxVHNpa25oZiEGVXt85TMNZLaJtSQRt2wjG3nc3YwAavy85",
  "key33": "4xQfDKfa28wn7XuPKLkDZ9EQXV9Ktbx9YXV4ggZbRfguMapGXHJ28NkorGWfFdFBQRqm49qZ3pKiC1oEg3twWYtz",
  "key34": "4WLQnRufu5XzCrkiq3wh1APG92km7qbqjXFNkxFPJqp6GLFsGF79T65UC2ARro29dhgbfeaCepAoNRnuGQhipsQM"
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
