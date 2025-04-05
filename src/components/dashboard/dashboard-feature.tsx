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
    "ERVX1dWRF95K94MmwK8nG5DbBkfTfVivzhnbPmWFNyGXDyQAn1RyyQNfsdANJM7qP1uzf5cd1GUh3qxeme4UtTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QKCPuPuTn2qg7sBe63h94P2KuQRJq4JEyAQs277v63QBcYUxbr5TuzMFLBYBvjfk7aWodnipc6dLsqFwLDEreVK",
  "key1": "26qZjUqUJT5HPYuBoQN84yfvMSuJqmk3GyH44NGwhgzUX5icJHx1N6aRWSKTJHFxXnsbMdohWY7sH9Q3RgCdmSBi",
  "key2": "4h3h8R8f8JMJC36Z9D8pQtA2aGGimzGdF9QTVMfe8coNzUQVts1memvDXwpeXzfWCbLdXS4xijX3ZyJPkRz6ZR3n",
  "key3": "tn9knw57x7eFyMq7Ra61sFt2Z15uzbE2gd32zSf2jzabJX5iD79uh3xB1zJQJQuAtYpyCwzJJekMx1Bj2X42gQF",
  "key4": "3bgc2gpxm4goh4ywv1XAsnFni4gTUbxyRMBVnuZPqp8dQoFUw4nowzEFgRoBxFF4fJJGRyghFXM6geoviWPEZ9Fj",
  "key5": "4u8MPGNQXQsQ7aHbSbeJHKiR3fFL5UfCMvDJehnqgngesRS8sF7ui7UQzaRzyxMTj5pBUoJbnS1R1oEyX6Ni7KtV",
  "key6": "2AxwgLVq3g6vi2df9w4cBYB4MHBZ9CZarj8CcaL3NFxGR9bqJpWAVV9673GS4hCZPQJCe1HQnFtrZte293TjomxY",
  "key7": "4442RVUo32AK1SzvcjdJpw5iJU2541khRxEEivjc8r9ST6ZowQkJukKooTgJ1BCNM3XET6RVUts8NLU2pbr5e1Ee",
  "key8": "3ufANAW25Kfi54x5zA4a3u6iPaLnGTguU9FK53u3DG7UTVM6XqTQLQtEjTUAnNvfGb2x2r61iBBdBQycdSM1Kz5b",
  "key9": "2GqjqLJn4yspe1go9qFbYRgnZZWgViAvK7ZBng68ptH7tAQeFQ8ufRYjnW65pbxyA1i5GiwAe85VceofNGyWxJQF",
  "key10": "46fb7qTyLj7WUguhUJJy6npyCzpASmSR1hNEf8CcZatG2FW1agc9cWYL6KABLCBwCNEru6fQm1HcCepNWm9Sj7Vf",
  "key11": "2u9LDyoeSwjibDTtJqGUZF2GoHXiZGfj3N9Vbw7tcyX4DoZvBY3UV9GgskUG7HoARVZRCcwz1dSHg6X4pX1WkqYB",
  "key12": "4ZkrDhBs31MxJwiaYDi75eYaYL1Fi6vSJHHCaym1WbxKvuyvoNQ1yh4o4xjRy2KDD8V5FzTwMuA8TdeY2wmiRKxY",
  "key13": "24aZhuaYoaT4Apn8YsFsVHSFB8P5tyjjmaULhmsEBf9xmYK8i3PsHdC3FyErGoHKNNV7woDQt2fmf4E38bWacNyM",
  "key14": "QrThmyt6dAZ6sxYsPrE5FYwXXz4JUqAv28zZsrDbEtUm26yu4hzvXdazCDT9FfGE2CRQFTLhSCfmbUq9AuMgyWS",
  "key15": "4X1NZA1twR6KfRx4JwwphuWQLGJXUjn8C5HNaaKSTCgFwgvxmPq4DjcqvdaJEQkGxzSLFTF6F4fiSPhfAn4Rii3s",
  "key16": "4zF5UxfE1wc999ppcuMHxGPzpM5Ebuj3QPXtrGwrVuZFLgGE5TwjnAAuWfgpBTAp8P7X3fB3jRoZdGxK5xKCMsdQ",
  "key17": "3AixEijREZ4hcW9h1Nkmaz57jvNuwmGUTQnL7jiDzgS3du5tiVHkQHAyzwoHBEwvf8fwNT18QreyGF1QhRxr5tqt",
  "key18": "4jNQsaxGkgtv3MKHEPxTmqCK2uu6QwV1T1RhMxTun9STZJwT5PyaiWCuanWv2s3fvsuxyWa3L6uaJ2TSYufvuLwm",
  "key19": "4191ASgFNuoEfG9xYVJyomXAVwu1zSh3dB1EPBDNS8a3kPH6G6C7b4QWDpHyMQcQHsF6KXFe3coCQByPedfPew95",
  "key20": "2aeRVcuhSJKsBSR2qVzfsi5qtFDXtAwmfYxrk9jZ8Vq575tN8RAqxJGBE8tgHuSBJNjzQBN6e8FFdvmFmN217phd",
  "key21": "66EWBScXH8MLxY9wqXuHazceBj3P6vN8sDpdnbJDD4qbLAbZjauosVMeUas6WfmgT22dme6L8bPjWkRtpEu2Ew2U",
  "key22": "4axCnbRGvviu9GKmPGENBJt9g29yj4Ts6hEnXC4nd33QZWrKJYN95W4DbDMzhr1UoHgAweTqeZfBdA7wb3bjfKdS",
  "key23": "2qGrXzSzrkUJM5xRXANEHpek1ic6FNtqp1pUAQfNPU8GybfhtovaJsP1ZRd6LByvvxeiDDALKCPUW2JxgW67K4w",
  "key24": "SnbtB1f14eB5EquvmNGaBAa9BhtUmDy8j8HRaifsP864xNtCq2ZToByzxxC5AHu4F9An6Vg26JnAAyFiudJWSpY",
  "key25": "2HLN3Ryfz8mNDjjuky1JFsmd7qQMCPWCiDhCXkU5PXWf6kYqTKw636URAmDJrdeDEL6VSrxCCrHY2pgpM77BWTet",
  "key26": "47w6mqcY7VCzKpMEJsyfHmUgtAtfDbvXkn6gDsCv9wa57MrJC9ec4ESdUxKNaSFeP9uq4VbawSQ9dzHJ9GH2TxtB",
  "key27": "4E3VQMTphGALRZ9inpJxXGW3cGcNn9JcDfgm1rDprjSBjjAdqYRAbzbL9oa51sekyWiSy1SQXX4gGFS2hAtfmUTK",
  "key28": "4ePRhpU3pdGVnKycxT8FX2TTAiwRvwHktHRoUa9GxFtHTxedeJ2AUAiL3ySvsdr76zrdVXHQoeQFiNALV5Ttcmay",
  "key29": "5t8z88DTdEYXoBUnh6xgZiNJLHSnbw51NREq3UXBroWkwsv8JKDfra14tGCuZyGqnzjVnPqQxDZB1iUc8jR36KdR",
  "key30": "nfynVTEaFgHF6G3ujt6TnfEtArvtbh2xjStjkJZV43qrCAcye7eKk7eLdnAna3Bxkg7SBGApb6SysqeZMZ3XaoC",
  "key31": "2qmVARk2wuWGasuhv36rWBjupe5n7FT59H8ApmLMhnAYatAYJVpnzoi7M7PUL6U3b3QseZwb7VDMoU3hBKdrEaoX",
  "key32": "35qGV8HPk92bitW2CMVbdEqhBbtTvsNxJpzKyQAbdBsiXM8eLRmHa97c6JxyazgDa23YKfp8ZtHUTUCk65kLQwEa",
  "key33": "YpCkCYsKnNs6ok9TADA51Zku1vw5jcBadBx3FVF7zd7WvCadxvoWpMTqVDiZJb9dFDMZeczHH8qKNyVT9BoZdGm",
  "key34": "XJwuiwmnmrEXYV76yAigNujbM5ngevjuUnoWpyuidja24bUdVHutAtibRifzBCJPfD4WeuXUi7rXTpkB9nDiiTn",
  "key35": "2chDH4TeqzCZMi6exY4z56NLY4Z9jns66tUygufPMwGKgGF71gHF1DhfPBBJrxHerB7y2X8wBJJSmUshBDWRvrqZ",
  "key36": "5S7ankawHwmC7JedxeVQPmufu9RkNK8r7yJv76qStKP8A6v5g85cfi9Fu2RVx6wKwc9Ss84BNNchV1hMQY3c7Wp2",
  "key37": "xtakvbymHo1G3u5jojJWYcvXb2ybiAt1N5f4JofsS4cJvw4T8FmnJodhPGCeJwkcmmhP3ViaSZMV7mDdSyrupdE",
  "key38": "2MBRJCQ7yMH5HobbrX2CHzpuaAodVnDPsTHhEUk95vnJfot5aJ8weCandTDrb9CH5s36fFBQ6HfKvn5mRtkrDtqC",
  "key39": "ADeB64t6pzPjXiSPHGJzmk5H1Ytus3Rhxjb2nRtkwtku72Qvm8E8jrECkEtio6YP6NYgowr8dhksrd1irAJTsJA",
  "key40": "2nP8QrqsLdt6wUyqSer81BnnpakVhqXkzrGeuYJbBFfZKVQMe2sF55tmMeHvqowM3vT2KP7nhA2XvnyzozpuLnoe",
  "key41": "5sjnRUj3znRsQK9ksZzWydgTtmXFDJGReCerHU8tyyv833ifetEkCWBRARWZNfiTfyc2LE11YTcjaeTh6dFUmKhZ",
  "key42": "3ftNyKZ55s4gM86gpnVR9kVLKCWAojVakckByMzYMKsaQhJtzaMaSBqMk4B3Xg2jZP85K3KnoUGbiwAUuaiv9B9Q",
  "key43": "7Kx7wFXK1DqMLsbTSL3bE3Mn4vzB5tLgDTS8GjrZtuHrh2iW7jJ7JWcrqMdxf5dBqaQXsocxqE5kcb4Yd9D3Foa",
  "key44": "KfFkhsEoWmy47ie5frBsvedaj9xijJXQxGeY1fmms1dtNSPM3ija3sXzVcg588h8MPZoDdETzsVPPJb9ZQbmdt7",
  "key45": "bFYvhhxHuXo4bCAN3P6UCnmH8o8xZhtnytX6MpYNmHaWtfZ5nHJa56fEQg2aQMHztiADEoXheqqYPeA6969L5Jn"
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
