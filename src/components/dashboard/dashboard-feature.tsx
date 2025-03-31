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
    "3gb94iJiy9YikVHv1fZA5kif3VTkomBYAQUYNM4LiBtbn6WbmXoe4PiUW8jgRR6Bo58T6feM9Zc1ZeDAWX4XkHSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EwdNCgukcWN3HqGEYztxHh2oXeyD6qdZpY6ohZnZVnHxLPswnP8XedSsorHoQPUbkrdSEZKY7E3MP9y8fAqaMBz",
  "key1": "5zN1YqpSRBiXZJY1NZkMXEpoZjr3tkrJETNXzKwUMdrTEcxKamp2xAt6J5vGzBCdAsRSN3wVSGE8RMNTKsqYNvSs",
  "key2": "5xtGkWBf84jXkbChrn1pJoYKE32cFrZz8mkA6JbbP5wqMwqCwm1T7rgtMF9pdYa6AivEFrTdBpafEZWVMW9DxTRg",
  "key3": "4YYjH7RUtShVA2bfv1Unp4uQvxCW4LU5nM6SUGP1PFBXfW2tX6Yz3TN19xiDVsfCRwj8JyrM868aG1P5CTLwf3FP",
  "key4": "3GrNw483geHTdZ7hJoimMKGo2WghMEgaQndqkPQa67xvkotzv6B8vznE1FAsR8CtfWAChEv8ZZUaYwLiirC7dqNF",
  "key5": "2AB9kQirqXYiUuK65i7GEgSoj99qbTFcLj1B5xqcznJezAYZFAeXDSutkTc8ikcGPnaPu6jPA9wadAxHa4AaK9EA",
  "key6": "5nK5WMVkPNnsgm5GUD2PhySG9Cv84MZvhfhixjJYEUFhJSvsLZBbZRURbHmzDWjTkN5nE1BNL2Ez2zdHf4Hj5An9",
  "key7": "5kmDPs2ashow91PjweVTh4DKjdZZkmnVDgquUQu4LBchz3goAeszMBaeo7kmJfapGTh8tkKpP9hxgvdQN4s7hVUR",
  "key8": "28cbgpj2JnvhguYx6mfx1NuWvyqkm8TZSvpKzzdJnob7H5dnQe12ixW6p2C3844NrTfek97dBw4Gs1iAAspYn4WZ",
  "key9": "3eCRrrVPViLBhLtNF4qGKqpWL5Af28yDU8NNUzMv8Bx1j5cmgqezJQDcSmZkTtCvLVUup2GYqXqTTu5rFuZYXivE",
  "key10": "58EbzB6BBdUFdBDatt3jVAABTcb1uQUV88ZQP2Pnj35WcppwqYSPwmdEcrZEzEZ9oPB7vfE8A3HesAzY8v999iDg",
  "key11": "46ShktndSaPy6cjBAy2BtQ6DCdWarwF3yoES9D1bQaVTC9h9CBzaRd6VpLwB7nLrqjDDPUPksUjnYWuUtyXDMiGf",
  "key12": "3TS8KBJM7R7qeRJDN3Pa3ntj6bnVy4PdwgSt29hcye7mGcs5TDSFXWvkU1mSrRYBrE3zn9xtUaegKLrvPBsV4eTm",
  "key13": "5FzNSCU82VUGdQNya1hhvCKaBTbSNnpvkjZBXQew2fgnwtmXGTKKppAvsCLquAgYCLEyLWqYCPEZCA7zdVAqK2Qk",
  "key14": "LrAYUvnU66dp8GqfWkXzCH6WRj7vh4oKaJm6MrW6hTwZxTaEcg4ra6vXpnoSNmcEnPKtaRfs8QXyHu8xz7kATso",
  "key15": "4uTWa14CGCVVSTPxaF3f4ZFPVLo3y3JG45AaQz1oearNX69Ha8f4PEaV6JpPeks3Le4KKZVf9eMAP7vobUTWZpJp",
  "key16": "4ojqqS9dukCxECrFLhCEjarZhA6tjBeXGPgizTLjLfbTJUGGpyBa1jTaieSrfPdKhMKcQNh4ksTRoXt2Ur6HQM72",
  "key17": "62g9CxuvNtvXa1djTix6Rch1UBHWGBtqgTpo4bDenWbQYduJ7FWJ6gVgWz96mvPvYDf1Ufuowonc15Dwc5c7eA4k",
  "key18": "4R3AmSLHEyERKzDaYSg5Jj15KUurRtkekBLrwyCUx3VfDAKphTokuhqFGqma3CuaBvNYSXxBZVkuQ1YLbU83xNDf",
  "key19": "4cLQCoYrhCy2eqi14uRtTmSepXWkfC5oEQPkGVabfchVm1bZUoQsJnG9mbEwA4bAXABLvJr4CnvFmYYEcYS9wqwX",
  "key20": "S2SDH7ui2XwDCFsMkbtPhWEbwPvLnUCiRxgQvfMNsvJEmcsvxijJ95VbKYNZp3BsUxc6Wp8uXKihiYMDP5fRzfv",
  "key21": "5kd4376UiBNTLub7jeiyGcvpEhcUQdZeicfWSRN6zHnT1BW7NhMxjkAkHvQ2mGKoYXsAseNCdYuMoXbZ7sKWcwvc",
  "key22": "62Q3d5g6wS3mCuFKo5YQ9B85XeLi8HfKhkDqsGp9dzuUzYALhLkLcepz43RTiFuZMpzbFB4sjFwUQyBDkNsL294L",
  "key23": "2Y5GNJQtQUmrDShgbYjVQMoH5TKeXZ2tpkBaidf99bTWgETkFipSczV1Y9qPsqmQQCQAqZTRZCRbdzJmwmZHU3xN",
  "key24": "3u3qeogF3edbMcvZTYiQB3YHz4Z9LHd4ZaSuspyANxqfwUkqgJF4ZN4fd2jBEX3GoD5DdrpAZnbM4vU8muVss8Lo",
  "key25": "2kFcGrUn5bbWqTrdFbJbtovJC1oxN9Pf4dFTNRivCB4qu1jqiQSX7GWrg9XQagMsvvrAB4HBhTAs2oyXMHtCeN8y",
  "key26": "4zqSZsE5eEXHkqtFBuSunLgLQmzfmzxE8tPCHywEa2fwnnYDH6JyXJQQAVfL2Wtj3hjAAiFFMQpAg4vgyDb9cGeh",
  "key27": "4pvpjEQDPnyoJZUyqjCzzoUPwPwqfMZvRfSfeZ9dCg64hLUzbixDp2YKUM9fFMXNPwgJpw6wqD1FvxQKH4QbKqLH",
  "key28": "TMEsWWkobJdTeicdmsZxcNBhHACw39ht65RKj4GipbgorxW6QzVSwDCkQyBSoVtJodbmBdiQti4tCz5PjDmqjCs",
  "key29": "42qYmRnKMUhhmQMQMU91UaRvw3urce8iUf5vnx3cgYv12nqGsaiHeH45MVpNnP26GBeu3Pb3EuATyPmEbMgQjx4B",
  "key30": "5sBKwcc1tPpy8ZvhC1FXGbV7NsGXUe1qZDjSHtS5Gi3X9Q56KKwJbvArixJaFrr9dFA7gQydpZTR32X5RMUiSZn6",
  "key31": "3RkYdtPXtEpsNWdTTCwTD8vuVnwZj1EJrsxb62mdchh95bqnbDkadeNE8SRyp3gxpJJBu5dwivh6A9voaPFXyBMt",
  "key32": "4d66kd7jpzb3CvT9o3Mgj88HGYwMDKD51SiuGQTmogrfS617Q742tvEaQSB2QAFp7rHhHv1oPoaKaD5S54fMDsH3",
  "key33": "4BysQTaEiHecT1a7mSvJT6GiF7kg2A3GUyjxaZFpzUcibm819vnzmLNSpc6SjhxrUF4qQ3Z2FBtMLbhMnyNitC1E",
  "key34": "34yKY13wAhroNQzqjvy5nZ4xzpuvhP96hg4EHYRTwvXMXKgpi47WTGKGjiCjCzxdaLVhDyYpysq8PzjCtJaQn2gM",
  "key35": "cPSfugjwqFrhJuNB7jowjTEvs1tYs3NJx3zNeavw9Nyb5YiBeNhatv7n7TcFi2bQZz7Q5qCW26a2UEU1dptnCbu",
  "key36": "47DN95DrRMHuibAUGq6TY6LcLbYRREpiz2aqjheyBveXZ4h1Lvm1KQaJrkTyuKEpZ6Mz4D73q4WpG3n6JJ2mAsGY",
  "key37": "21kg25bG5B5J3ZBqHhRCkCMvmWmZdHWb2JRxn9ARJTXeaNUJtnUijxJYhJCaNd43TMvQ519gebUesatMpYUk5XoM",
  "key38": "4jmGPmWgtPyQSqrQ2jS1TjHQkmTJvmtbgBDefQrTQUJA31SMEyjaTZSttbJWFt6f3SDjqmvqPnGszz7xy46GpS5a",
  "key39": "CUjD2FX1dRb3omce7hZXYZe6eEyaURYhaLeqaadRjEwV7rnSgZ8dfqSwU9vjwzXvPjLXJW1qMv8W8yaUygHoTbo",
  "key40": "3nM6JESyxKUVHV6MU7roXv4BikeAxwF6sMRXAuZFbWdp8PcGkBTESkvqhKqTpCGwrZYeKc1jE8b7y4GGgFzbkHze"
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
