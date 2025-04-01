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
    "29M9xVoxAGaheUWYAY8DPPj5bx5o43Kab77LyoWq1V7fjGRCxANFvpBvJHauUwGNt7NgKLNezPwW99EpwGrRMF94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49BGJicoLkeaJiNt3d8JhPUSKLk12zYvUWcKQotmqVgJ7hoGwEGo2qygE62EZw1p9fwqP2zZ85LDZA1KVMoLecBi",
  "key1": "StRqSgi9Ns8rWuswSKh9tiiqwpiwWa77nvXspp9w38ZPzJYMqnj6aP9RhwUzcznPqpSF4Wso8KQtRSkdnjS2Fio",
  "key2": "DMN3wgRvieH2T5v1SeiWL1rNVajjn9EWfLhWHMnQmeNbtKKiFMPjk9Z1nkhZig3USRPbxZkMqX5QpvK3rAh2m34",
  "key3": "2KGRwQg77pGPhWc41BrBf3HncGz2nYgRZz1sfFeps1MDgBJiCHff9eBw6iMGGfL3HEbzrAbUZtaDFZJD378uKSJV",
  "key4": "5td4z8qgr192vc1LSYGvC55yaaz6vPGJL3y3woYnpgziGu3vE7mgZeizYSnLsCiPhFXn6Yjmqku9fzdNHGkpkLan",
  "key5": "64UWpFciNP1yD8vwitdeuvYVdpN9uL2jSy97eGSMTe4UYxTGB7kbvwevJWVxZ9Z1BUKNzAp19HYuW2oVR3RhN7Nv",
  "key6": "2D73Lk8dvxiBqVcYp7K2C7Sictfi2WGiyxxdBGFAUo1Wg9WopQQExMm4t5aQ6bdPfhm388QeVkKLCyzQjrFLXkFu",
  "key7": "2WtWzx9t9LyBMsB1Erv3FPvDP1tH5znQj9JGJRnVzZiaAzbo6LBgeT5S5Qf9FFKw1DXNxmmGFPoWwsohTyRzqpsT",
  "key8": "64ob3d7ptnx2y1uZPzs3AkC8NUtGSjAENmHUw7NMSE5WiJ7VmZo2rFNPqsfeEq9CeQA94MvoAprr1x6c9ex5HD4Q",
  "key9": "5aeFUJSdU21RM7LCPc8wxMTAH74q9EVLPXYgqS17etKd958QeAFkA9ebSBtXJCXHkp6nsMScbGkUnyfamEWrPkMx",
  "key10": "2avpxi3LA5rCHDTrCuizAvdDhVWPLayhYeBZxevUr1p7Fh525nSeh3Z5HCpS9hXucZ4CnJDpTUxZwhFCvt6JsCQy",
  "key11": "FdXAk49fdo58JWzgaywMc4p6izQwLKSSjpRNpzr8AFJ426Jt7LtuFeA9UgJdusrf7uULyi3WvtSERruwtgZxMRW",
  "key12": "4ahLrDkZRuZArptn9VHpFcTsnQmcYQeyvvuMryax6DvUhZTPeTnqHaE4vYB3jSxh4ZfXkhdWNrJWGwfBLc8ws5h1",
  "key13": "3tq4j2pn6xgeAM6you9gm5qdJ8ZKAANx8rSk11mmH4f1oENcFGd2mDNaf79tK5kgJvu8EQQzFsyyMKr5gtQjKpej",
  "key14": "3R9srk8wKHk9xMNexE95rA4ZnNBRBJeU8GWH8GF2VbJgoqX4Duy41RS5EDnCxZs2pU44XznF8Kjubpbai3U4cQPs",
  "key15": "2tzhDzwvn7jnC5debeZXAGTnQCTD75TM7djjVmhsQCoNAPd985Xx75zyMaft3kEYzXAdqYjLxBaDn9ury4qs5XAc",
  "key16": "5AEqoEXCrNmJezrJpHk4gTmYbxbkrZSHFzPWGoSkBWRPRWUxa76D2yeyAtCtE2m5hCQHmiCmq29fjq3KrvAcdxeN",
  "key17": "ymFSdqaBbah5TA7frcUvNT6JrbHfzKMhQ4qAcfuuuQMuA7qf3XnLZ3MztjPmjbthita1yV8pwm8kPv3uHEkAarM",
  "key18": "5fARuCs7KXL6RuTbHEycKCAxwDrSQrZUYv73ede2wBVYRU5Dp117hJdEty8Gtd5XX2hR2yq7E33jNhhTrsqHLj3i",
  "key19": "64dTpGgHDet9nJqy1ExNa663TcgGsKk7w6g4NvWAq7w7Mg5joXpsGSvxUGnA7ziVwrX3JNDZby6pcmtm8yHgUXwG",
  "key20": "4KtcCHcYknJzFyA8hvAXWsRxHomgNsRz93rhkRsPGAKxp5qvpzeCav1JxLnnRJ8vnUjSwhgramqUXZYmYDmjVEDi",
  "key21": "2Qdzo5wELFRnVibixwBU3kAAo822tP6Fj76fRDs9kP2uV3vkJCFkL57RPUK6VRpnYyrTLp6FphALKEGP752epzoA",
  "key22": "s1dMEdjRHbKM9Wpx4tpc8MB3cxXUz6LYPsqGNpU3QyCp4mCBYADktLPtpXUgxkRrSUFpW6wPf87jo7VDnCfF9TZ",
  "key23": "54zwv3ryp46EK4CgNJKCcwap4SRBw1JJDo1Jbc6ZJJ5RLuTmvfR4MM3v5UnehV3t9ChGSe9zXQuxbd66qmn4RXoN",
  "key24": "3aYm6dWGDpUd8wxsf4pNbYX4eoqrfX5Sxp4Sn3rJdFKAVn2E4JMXHAbyQ2doZHgYVfUT4kmfBmJwUfnMzD2tATP9",
  "key25": "595ygQnWatDUt2rXZDtH7U459pZ9jSs5gy2pYiLzetBLxjH9FYzQ4zVguciK8FxxCRAW3tqa1EbfKyc46GyeRkb",
  "key26": "2jw853VC5NRn8gygDt6UxNUL6nFWMDmyr9KZD7uooxjf6zUxzm4RPQtaY7k4DJACoFoWujVYTPkmuHFPsrmqM6hE",
  "key27": "4Pop8TojmnVQ34C53mEL21wVAWj7Zk2HJc3GYbg2xEuDwnXnAAGg4Yk5oaYm1fQNQPoKa59bthy4J2YvhtJkVY9c",
  "key28": "5dmzYKNrB2PYERhtMiRdfQEmAdz6EaaMgX8kSfsGvSfzBKHrUDJS585gReQp6VmB5R37sNtUmcbCk2WbBeFfJpzm",
  "key29": "4vZgSWsgHAs9ynXYvsaQJnbE6QX43ydeRCvdpsTZL2QQ2ZnKVUiqZeUK5fJ7whyaBiPmQRSTtnWjgtoQuhMCQoTa",
  "key30": "3MMMXBH8ALP24pJiykow2jjLQfP1NoYMSg3zkB4XMVdnrrFSuYC13t7YzCQ1daufHJsMvY38NFwJG4WewJsbouaq",
  "key31": "2rJkCuGySFnJRtn2CQvoBvkGmd5qNsDtVn9M6FGq73dKggVNpRsqYzthFh2DHgQzAHoqBjzk3Hn4R8SzsytVKtzf",
  "key32": "4xTygbHUkdCcG3vPVYPEPTPuRHYgtHWvSqC82ron5F6U2LfbpwhAeWGiSDnj2CcYYwWorwQskCa5kFMBnkrJNsub",
  "key33": "5ZhJUfNNeSzA8JkYMdoC5PtP5jXYT45i3rh3Ac8eMTmFk7vBtyfEUKdZxssCtStXad745oouuYEshWsBsWX5ypaG",
  "key34": "4hDnh2YtPmrzrHXSfkkw9pYD2c6NimxwTTNgxEaeswBDeLHxXfcJ2dCtrsx9axZ4M3apgAzNiqqNVWK49cLFrCyG",
  "key35": "3N1qbZhS1ob4SqraGeqZ55ud6psGg7AhPc6sMavVJsigoidh5hWGjn5sQT9qU3gZ8Lvy93f5tEoWm43PJShJPVrT",
  "key36": "5dxNRMRacdAHE9T2f3wWcF1x3aangztebdSGX8MeZjYDHpEbpZr4Tuo4scGj3XrsgXbyM2e67hv1Aj11SxbvUnDF",
  "key37": "2jnT8uUzSbyg9FdZrrT6zbuRkpdLy9p1eouQEPZ4iqQ9UNh2spJj3dtHx9jwEHPsc853T2n7EQQeohXN1vkN5iW5",
  "key38": "33Pt442kzi423jEGB6R944ZvGLjTQMNssfyExyNHpnteHvU6os2ZNH2Ce8suifnCxk9AWaBEeSQjfG7GtKmdSNXv",
  "key39": "58RhvVZivyASfGRgodKk7o2Myp2Puem3WSb4yCiPBNyNywoET6hDyezEewAfsjJSsDVASmJ35JE4voLQZuF8Nbue",
  "key40": "xErtQkt3i6tMNazo8aeszt4Pj2diAAoAJsFuyDT4vNPSQPQJgnAvMPMRWC7t7edqYwcdp3syimRdEgu2kf4RZRM",
  "key41": "5EUiTR8e45Cnm3vdLYFURLponmLnZyiYa6EKpYMffKgvmg3bsKM5FwsePeyGDp4LRJm4tAzWtt7JZCSQShEgJPG3",
  "key42": "5uhFywgJSxsP6J6i3rgu1Tmf1AGgy5fQyQBuAVXCsdZGpMmhRbCn6pNwB4hqQwQww1Z71R1ayFgU4CpZz1iDSZVG",
  "key43": "2jMQoUYkq4b5Cba1VDxa9C6WE4Q4CGQpkZCcqbR4cA5wQbZPbYauaPzHmyXpdk6W6hqcNWYJvFDFDHiYQNRprxm5",
  "key44": "3LTt3GHhNZncBUbyFTmV6YzBY9y8z2DGwX5UW1dV6KLBam6KaAsULyzciL98qVzwHrQmXpdvDwdZywzKTeuCbqeH",
  "key45": "3CscFxrkhjh3USSt76ZoL21GyYqKcuneh3JAaigCwhcNsMJ7D6AzAMfi2ikWXW3ikEUiq7y5CgW12zSat72AMqkT",
  "key46": "5x2r8M9Pt4utQxWYyssxK44pb8uHbzAL46rGDwhKiA8iApRt3G81wR8czSZLNAHcmuX1kobvWHzs3wSTeS1PAb32",
  "key47": "49pbwpQAQssxvuDqdYiZFu1G7S61ar3Q6RTRMzDReGBeJEGAjyAhbTqUupGCBjRXJQn68urTLXzriquWCowAjkPM",
  "key48": "32mhnjMiJa5gxVbDu3iUmuBgTVP3pDeec1ejfVv5b6sYkqw1kjz8DqnqAZD2BW84PsXfRhRLudpx4fN69fwJrV6E",
  "key49": "5J8BFcfDmWsC1698dozLS6n2L5PCLSQF9utY4BApY7pVtqk2YVMVwXszDWUD6HGaUFK4xt92F3syBRGToffaV5za"
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
