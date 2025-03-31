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
    "3Fyhc1ANsxTRaVb42EsvGaUcombFvCQk5tBbPiNLhu2MJKyr68S2BRjAF39Nn94LPkMnkzWgFHDiwKo7S8AcJoft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RSCBW1UBeAbSkRyRYjYiGNEkM4hj5seYkEpEBfEeiJtu63M7w1DAW59fMUgpfQC6Y7SsesuTUKCnFdqjY4bWQrL",
  "key1": "3Szg6egnHR8XKSWgcqp467QAm4eJbXPTNtBdThcNsX6uZ9NPV6gu337PKA75bdUdRjUcfrMz43AxWXiaXQqYDiZY",
  "key2": "3oxUoRNHyZzCdrfZpSkSEkskQWr11AaqNyeR1JE8ndR95TTH1zUSW1vuL6jfa1ZyMHuTET3imzB8VkGEvAE9xN6r",
  "key3": "4tGgcuCUFNhxrXr5TXenBgajZLouyCTX5ookbaVT5YEAdyoUUhEgEWp5ffWxBJtSsW7wY6VXZKVDD83wFrU2X7P",
  "key4": "4z5WrRBD6XHY1fqg3SKRYSV9aHBXpJ4FZ1kRCZrjiMPxcrdWhc7Q74YtZ6hmnzbFHtPSQoCL7g1BYSKJE7zzg6Nj",
  "key5": "eghQTepcqUPkJEbKPg6UFZhu8BF7ryoPkRk7xjycHbgPgj8hhojnG8WfifQboSXcz5z7X4V4WpDHJ5AtZs3faPX",
  "key6": "4qFLydS8pjtNJYENHdeFiaornhQTEo18LWFoMEM5zA52YHR6J2iv5P4NfFNGbc7Q8x9H6zBjfKhUn7T3AhbtD4XX",
  "key7": "5uBy9ww31Wj2pSNkTg9VDQ5tY2F3KCCFH1GyYzByT1kN45nwX6H8ytyhaFAQ7Xn2DiA1s46Zf91eVbTs7CydUuKe",
  "key8": "Zr1k45F5nPpC2vUGVSAWE981fSSCvqGQsESt3FMh4kiQyrZX4a5zfvErJfChhRzghrgEgTf4RWJfQuJaiHg3ze2",
  "key9": "5dMzGdxCPzoTvFCUCg7FG5rPk2rFNqXj4rz97XwxANNREsm7QxTUK1UogCwwVjWs9a3W3WcbwDoq6zSZ6Q3HWp6b",
  "key10": "2yJyXfwUtKyxrt9SGZUpMwrj1NMdfrbJiwEnQZzjW9cZtL5pWzPJxkS6b2uXZCYVUrJ2nqZ1WyYjnQgh3VCoCweX",
  "key11": "55GZV6drKRPnCnkVPQM3gKP6Q9oaGoGSQGbLm9ntXaewCFQVesC7y7xSCryPitEYF9BYGZTQpYu2w9UQWToy3QfK",
  "key12": "2R2z8tLKQi6YFCicW6tzGFmcNfdNbAUnHDzKCxDSkr9LJ4mRMrR5gs7fg5ELeTiyWF8T8UjfNGzjy9aCAyVhbi3v",
  "key13": "5QkmPZZzB35AgGt9LoPK1YthcUDzRDLTC3NNxbMKUHiaeEtMqHt2Bt4mjHaMd1m5cUh7xJKJqB3weAWmTqQ3RZa8",
  "key14": "2yQxFHQad5Dd7tu7dU2DBGdGGRRDw5dJ8RVG8V2isqaRa7z4UhgwyBjBp2dUDxAz2ShnGGkUcW5oom51XQFxUVN4",
  "key15": "4vvRHUQFVVHyqV6b3Sxp4LssAaVnomKuUbhYkzWGCFHWJyafUwrC53vq4HcEEX5LZPCHSrT6CEJPb929JVRb6XGq",
  "key16": "2kQ4KaLxu36pc8ZGfEGGziGWteLdj6sLoAQRWgTLhftsuMdhm4snkaFv2AmCQLned9wgXG9coD9VeJ7e1ydR8ZVG",
  "key17": "2ZLroRpL1A8MpQ4grEXGzE6CkgpYJg2wbz6jYgbBppeaZ8w4SCE9EVQnZjHYVsfcfLYCEsSmLBx98NpDdzmFV9Gg",
  "key18": "3dmNm7sSmzFhAQsn7EUTpgKkiYQqim7jeonYJG4WnvbP7LzDgZjSWXbLdxkqA4meYu7bFSd4EMsuCpFa1R1z113f",
  "key19": "2tiUxSzqfQQ5c4pYU73dd8nPiWHqgDi9Gsgq8RvcD5FutVk99jciY3Xz1A3SavpeSW21YSeWGJtXGawRp7zWTQzZ",
  "key20": "2jTuxKrUcXxuCH2FkJKJw9ALuaxqs7tmnchFyFnPR3dseqbadRpPrXtTu7jwfaFb2xArCoamtBCPTpxA8B88KxU4",
  "key21": "5FCBUFDdQC8jSULGkuG6d1e2QQSDodYwMWvXEyJip7K1Nbur99eZBB5im5acmAfaCBYmhrZcYK8d1TRMpWL1G1UH",
  "key22": "52FoTkaJRi5neB29bLvE3K6BfHiJmYMVXNB5upmpAt4AVJ5Pur5Kpj8xXYkaBTMcQ4vP7LeLgmt5gTRK7Gr7yqNb",
  "key23": "33K53UU3qT1x1XU3QawArpWrHBx9aMw6EMpou3m2d8xw3ptLaFFG1iAXVCvDM1HCdzYsXfR3oja54viz5qwZzBTW",
  "key24": "33B7Z3eaWPgtXAJzP1XnyXMGAQuG97Q2gn1YNzMvhTzwh8CP7pVzzcXhkAJ2wWFVK2tKxCyTav6cR9bfVgLCFRxZ",
  "key25": "4FQF6KaaTEqPnuS4jEfcywz7e2BnQPn71c85tLfK6YbGEfjNASownrwJP5uv1S91YssqtuqiKai91uoMfzFmC26R",
  "key26": "5GHEsyeT176iwM1TK6BNFvXs88eP5FZJetgPLK1cyDRFLH3ouYoqoE1priWDYKykE7fdCYTrh3hrsg2gJRhrymQc",
  "key27": "3UUugJd1MCfeDEW8WjT8kHFzaM6aZxBxBga7QNziW4cGAuhyJCq2t1mxkybnrcqZg1LBCz2SeB5S4APFgsFT2eNt",
  "key28": "2NopvyC3AgabRaVvboH1Lt2jGh2TBs31vzcRpN5eEWWB49SrKQSSezzqQ2yMNSxwVR1dxXJQm1Z5SF7MFiXWY1mM",
  "key29": "5asuonetpihMn1fb6zD5JQwtNceWRJV2F7xXdLNkv3LZi8uzwMfrqSwJkg47i3xoNgBH7Gi4Rd149vdDeVy5J5TB",
  "key30": "29m1jTBsY8V79ZcBrHXZdSUDubfkYNLrGev6VksS1KsFuZdhuJUrrWMex3hhmkorLihdirm5XqsUkfNsf5Np12Bp",
  "key31": "58wP1SVN4CRggCTjvjDqHTK9ZBMpcPwmeSwdFx7oX2nG4a6CHBAZkBTLgnRbzWZBr1dbunAPrkx37KL3PwvQFsTS",
  "key32": "3KEVR6tbRRnxbvKmdvW1yVLFYFmmidicgoPBxw58KKm8yRbo4vGc4syFPkcdhA6BmVzzaY5EWf8LJ7zizzv7KZb1",
  "key33": "PmZoz55PmXKkgEEAMBNLe3ooK7MTMpKknymYwx2mJ2nsZRMxVkjxrt8dAaeqUjAez2sJ6yLQPG9QU5W9kqNvXMP",
  "key34": "3ijWNtrTPZdUsAWhcKm9i6NLH7hxQRwS6K9npJ8kKHHY41jzyyRHXUPQPUBzVLGBaiWPQU1aL3GorsjAeVQXnZWi",
  "key35": "5dWXSqawFxHUenL1xZKpZXzGJfuSerAjkKHpRcoDNQhew9vtamnEPGQnjWoxCiGvjqmaaQ1gwznqUQZmjw6EkQC2",
  "key36": "4vLWPuWvRsWsCATLfpxGsyfR8exvxpPPYcwPem7C3jrSN2etfqtpzooZM9zzkaXymKYZ4U4nSA6Yq7JFmFAck4nR",
  "key37": "WAvD8WtqPe6MSsMaoc7CJRsRdfSRPYL9XG7GdPjVCMeczpVHxvfBPP7kcW1CEugh3Ux6Sjgtp8wmBhxsafjrX93",
  "key38": "2eagVtg5S4DHTAgHkWArMFre1xtRfjRyoKSvDXHWBu1EpBueoHpBdGC8hc8uBHqPdpMGLj4jHx5HEwuBRPuPsKVb",
  "key39": "RmJQoP3cGfB9FX24D7f9HYFr1UDK3JCpAbTFJGz88YAP4jURZgCmdyM3AAsAtZPpexfC57TRTBfMLwxAW9ju1AU",
  "key40": "yTiodmp64teQ88dezbsSQPxbpnewkFXCqAcK7idgBumxY3ao9gEw61pJCArwmnpxCLMvKj4YyXyV6LsstW3V1Vn",
  "key41": "2N55KsARuuG3P8cF9XPuo5YcbCKv9Pt8HXF7XqE9LtXJKAwJ4AabJfFPLg7LgDZZFFqp1DhS5wNzGeRNyhnsBAbM",
  "key42": "3WSjtF32cYNRRdVptFk7gctZH1kUux2o5tyWTDemN5PWBe77n6nRijirom3YKkLVJg2gp1AjYqjqEC29euPzzkMG",
  "key43": "3yhewo4k8pmoFPkbMxTtCqUd4EzMMKYsRm6QjD6Hudg9akksPo1EC3beaFLQbiGfYiZaesrSC5Ss4RwNktMns6Ce",
  "key44": "4rREN3UuK5SPitx6nds1RTGuuiTTRNCjfdeXkf2Sb9UAgwmhw7KqWXS4Ji9btjRCgmpocbYvLRepVVzmDhz2EoDM",
  "key45": "4G24xuz6QBK9rGZdLYUyKw62Bd2pknpfhoPBRjXJDYoa3RecEoVFLU1Qk3yD1eSYozW1jZJYhd1nQc2riHhsusZj"
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
