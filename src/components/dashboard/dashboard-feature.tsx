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
    "5N3MUqYQkCVnERnYA21cZxY2RNbuzkpG8hGor4Sz4G9PXfi1LDj5Lq8sCGcphSC3Uc4hegwdBT3AwMtrtZMbfopk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ktpqqBcGn9Ayada8GmhSQHotG8i2WPdGa6LUQFDdcj2n2csHETHmEuDPd89mCKYmi5GzXvnkaipJ1QaVAsbK6KJ",
  "key1": "2vL8nwmBVmuVd6dzU3qg8cXYtZ6rNXRr4NB9cNyXeWG9KaNdKa4nXEShSiH8Wmvqd2DY5cCT4s1sFF5Z38ViFfXx",
  "key2": "mn7NiZ9VNUSkBH82ykYSMUq1TwoRCAvxm19QxfkzLKjeJAJc6GbhAgv8qnK535Cw295UAdeg5zq5BuFMM5JKLvq",
  "key3": "4tXe2zoLjRB9pBa9dKm78YwRaharzHaFrFgpC386N8f4NctJYMhqJEob18R75yaxo49VaNBJpbfweLE1kd1rRT9J",
  "key4": "5cR9cQDnXdh81YwNeqzi7FfFNyEhG5N9ouuJP9iT1koPGca76ECyh2E1QPgZCh4hqp9rsnHi7vr16WMNdrQJTmJE",
  "key5": "61UM2Ef9qqB4Md8ufDoGhbkqHsGafrneakmsakokCc8kh7RxBnxEFonJuvfoGu5y1FEqADqnYXJTk5NB5uWbfneh",
  "key6": "5mbzpg5SwP3zAWteu1TSWPuJeTTTwtZ4Wgb1WYnqrH4sKoYQeArHFEDDgqcejcUxFZxgkyhBeJix24VEK1UMGK9q",
  "key7": "5AXVDUPpbMG1p9NpBrmMNhS73uzu63rMawMma1JAmT7jBbxFwajE872LWtAYRKmXbA4SVw1JjBqhtLW6RtdmvmXh",
  "key8": "285vhfEuVzPt87NnmjWdWunQ8gmBCU8wyhqU3fTPiXXYGZxsukUGcNJweYiVmvj2xgocxdd6E3CTWZRrL1scwPBV",
  "key9": "Bw1KhqHoYm4BiEhmtgjQhXxYR6FBvtXaFFgqNftR8fY9rjSzL422CYRbmnEhnFwZRcdWPHf6ZwEBPzz2Xe2eAZF",
  "key10": "26fkmkMfR4Kci4CJt14uYEmD9mHDtDc5APTWc6uKwogVfpKamQMBMSSKAk1naou5GqtLmCkbsnZr1kdiWXfepHqd",
  "key11": "4eG93idbNNdkhYMyDXz6PrH1gmTBuidmakt4wVsdmgX2PLBcV2fq6Bo8f1DRQWpCJrdKouetmcbALrWZx3YgPLte",
  "key12": "HCr1H36UkSRsCZqsMw4BWyhtNGGtCmTu35dQAEZ85QBJiHcPqd6XpEnrLfBQTXpkaeGXVBZAtmdG8TVHuBzS1BY",
  "key13": "2EYttxxh2uqFrJPDWQKZFeW73VniaFLthtBKnfKg2dsQ5kM5uSwmQHBj319wfjer7sqWaSZSaGv9DhewUUMgSRm2",
  "key14": "5YLCdDjSF9jX5UViS5wthq1cBs3ECVcbCEZiAAW4zska3VE5NH9TdMzpLNntBuxc4GMTPzhanhUbS9L7MqHmzGwV",
  "key15": "M85jNirS7xwASsjXDdzmB1AKx6Ha55dujH2Uiw8cRLMu4kVxBboG91YHeVsVnHrJAv7tYqD7yXZVjV4JwB911DG",
  "key16": "5qcxfwGf5Uu85wD7Hp2xVSWk2pEWVm6Fk359WLghdpnkThhRGyhFdueW5ED5RAn6gwPzCYctLFSF1X3ZomwCZBDd",
  "key17": "2rW68R3ZTGU9Trtsa9FiJ96WchUd8co64eJszLGDr4vHK6UATMSP4Z3s41u9Wb713iW265Air9FvVvFZH57jYwCB",
  "key18": "5rAt19Be3AA9KzE82qAJHf6BU3rYvnpfBfwPbYxB5bAgMEEMMrbmsF6SmYDrhi81yZHEwQ8zCQNJ52Jk3a88K5C6",
  "key19": "5Z22KvpZ8CoKf2XE3hKRnhaXSDEvsA6npQFmJtDxUjDqf4Zt2ySkXhpXeCnk5kwL815rvoZmX5pmiZuJUNkam587",
  "key20": "K6MpxSnkLJyEwmVoJkz5sf4xucEV6iisD2iZXTQdjrshMxU7NsG9kc4o5r824tvcNYYURpSDVDRJcAM5jqMFHZm",
  "key21": "5fVHEhWX69HogzVyZLHcp67goVLijHiWfL8XuRdZbQKom9sjwXbJ6pCjX78xBH2zESeLfTQeDg25cyhg4Nz2oXST",
  "key22": "4WqipuRhRm2GpspTcQNKgVSUBhU6LEn4CxTmSw5dpzmYq4ETn7HfwfumiQpd13pAkAqvUcDa67HMsxqfjrjaD4az",
  "key23": "5XxcJxVVue3kR6dB8YU9cLLnGyShx4VSWCj3eNJ5K7wu976qPcHyfrBLX4oXSfXh1t3muhrjrGScN1iiPQ8jbq64",
  "key24": "UjnQuNN42aPAHfCDrYmw2UvrRPzrsEF7E3Tdyrfrn6To8ydGWBH7E5THWyNUrGKBXq6o9Y4mvpT1tuSigN2ZdgK",
  "key25": "3Q68EaJbDK1ZDCt3S8kpkwEvCT79BAJgtUpaN9NU19Bn1B5xYMYyKrtGqpFGaRhyJVnfGL5o1jjBhaZRkoGXMV3s",
  "key26": "5AGFLineN3rg57FDD5LdmagjTdBnuxX9Rx78THa8CskvU1FvLgsGTrmEWbTmavr28kh12bhVuyibQ8xLZUeoGmiy",
  "key27": "puCK88xwSFSrszYbC6hWG9W5kCoxXZdjw7dHCojyZCPskXJLAvM77zaHZ9LBhtHTtwWSNy8LuKHs9soZf5tpyZG",
  "key28": "27gnUgxS1hT6VBqZtApmpW5DgMLdmJzXbaNUKNWjj2qZi4YqAXgumQSNJEqGupN5bqbmCh5HCpyfxHBA69G9wSKo",
  "key29": "2N1DzASvU4HmcABXz7bKH1TKENPRqZuXNWe5cpgidbi5bGHw7Y9NtQHDJNP44TpsTZPnGZhxzKRoeumZ13q9KKyM",
  "key30": "oZc5ADLc4jtBkLUHqUeAqcbXrWNokYxwxYbaRmUPSwHzFw14sT9wGniS2hBTDNoNK7gZEHup8psGEnVRyoBV9qa",
  "key31": "2GZ4u7DuH9fHMb1xTiek92GCQHVwEGeMBu5KgKcpo43riGKxWRHTJ8TKiv8CMzCy8HbUPiQeEnWYQQ67V1tsgpoM",
  "key32": "3MqRnt1WxPEgznG9qKJFgEKSSErLuKH9CbPHRH89MtM9daSAm3NzV99sYRP7KQjqAqoVVXqNVuf3tVz4X6ygb2XW",
  "key33": "59afV7ouHYsDwD797zoXu1A974MHVvieYAxZ2PS1CqxRi5QjX6LD9b86NhZWKXH59JoZY2YcbWvqHvJeGvFY91WL",
  "key34": "2P1HiNXbbMUi9qvGfNq8ASS74sk5jkA9ZBoXXZYGDRDQ4BUwrhuUZFziVjkz9zWxftGLSKMntsXLEDrPbmqix3Y3",
  "key35": "4hjg9RskBmPpFCyPjACYSFedzJibpaS6a8Pr6V2hLVn9bvvwge8C2ZMRuHJq7gTUpEu1nFarnTZz5gXFcVJkAvnN",
  "key36": "4enHwNVoLnSLyt1KebBG4ndhVjiqJ8NektJmweqzq2ASoS5jPjdMga6xGkkVRpJT5ToZ3KLGX3931o5CrGwJxiV9",
  "key37": "4t38QfHJ96n3b3nHhkLPxarJVHUKydodcQGbbffwSh5t4ogq2bSR7DYXVUDotjTh9ALQUpbaSHCGNAsumAGccG6M",
  "key38": "3wLp7HK81LN5w3D9vQEqN7U4fpE2evXANyz8YYmc3HiZhg5JibYfQrQSfvX9aeSqqA5SPYzKtaHFTzjmrTSTWX8A",
  "key39": "oam1HzJhPQzBopQUVRqpAyDhxw94thsegthYtjr72LTkRtMk21uGakYc74heQP72Xrvj6hw6RC7t8V6ZtiZ7Diy",
  "key40": "8czqjPYk1iKVhveeWotYg6d89ei4xkYfUeBUsFYuvruCja249BscqvofjCcUDUxZspMBF6o9vLz8KT5ShzV7Khw",
  "key41": "hbmjD4KRehy8JtALFP8EJ6QndSwdt631NBUrdX6bR4pQRJmoBZ5hXFezYi1DEMdpWjsgtfZtpeSoTjd4FMwxMjT",
  "key42": "4AytN61oRPc9SArwqGTv1PHh6amiLhG2FUhpqANaR9ncQgELvaXneHf4YoJvdjaQjknPziVBfTMHeCjm6BrM3rVg",
  "key43": "4HspiPoMdW4QYxUSkfPN6mxoKTY55NcLqSDP46KKeziDNYE3Fi8NPaqk8WX1BFoCbmjpmVJNjkxcxHYHk1fmg6go",
  "key44": "4nRJ8DB4iAY3YgmESeku7w6uD1QBk7Qi8G32Tnq8Hw3oLDTjXQwYvAEeHa1JGWLcgM4SAfbuausebSDpo9GwVg89",
  "key45": "cvv1rsC8FRqPpsvn2ac7uWefNq8QE18xQsgWz2mjC2LUg1UHoMAiWBdk83EYzTUHy3FSZjYveHLXZ5hXLjCQUWt",
  "key46": "4xUEQtuheZrAZQgStkFedvYEcg7WVN9KpMyZEFKcRkg1ah2uLq2zFjLzoVrWa8SXD9cukWzhitDgQEocFnuha6RN",
  "key47": "4MgNQc4NcrzGFewCFjvHsNmZHd5nQmaz8DSekrgTE7dwV6zJJrse4CH9CxY6d8hbqQU8Vdub59TQnPhXv72vowKY",
  "key48": "5bVVMx8xrgoCcPaEHJ6Sj9xYyqi3h6poDwT5dpi8FsNLkrXK8UiMNk72YBPixgY1zJcbSmYfpNVq3qPETx8jqNPd",
  "key49": "2rTP26LvuY682deaHNJ1NeRHW4kExSok7Ha3y4g4wNRdHRySDE2PxzLneUNUYgNsubVJKnZKzVtHZXc42XsEfoR2"
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
