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
    "ADTJwLdfdR74F9K8PgqyCC6j2jc9uc5q7xtotTiUUQbWEYmYrnaKFtWyqsEF4ZgQCDaGXVYykaN4edRFoFcZUDN"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5NVxtiHryAC3nKWeCUEoNK5Lni2w1nAd6NbZumNBJNmg2MxBGXjHxauL2xNV2QASyPmL6Q9aMpSjjdHBTboTGfft",
  "decoyKey1": "mvrcFQKWdzjPg8MwqCi95wr4MPZBVBUKwfVhdYUjNcmPp6PMvaULJx5T6DAGzCckmhXvdzrBffFwkhgGQiMQKh1",
  "decoyKey2": "svhTejhE7rqLxiv4iwaPA6Jr3y3rtzkWtC4W5iYUhtLd1GR6Fo1hrx2f5gr8NbRG3nXJAzNdizn8GJRsApVQv5q",
  "decoyKey3": "36zDPpwBx65MYEtqDhUcL6Qo5FAYa6J5eXvnzedfRhUy4LBo4zKP7a5eMqvZYSapz8iFfmLRMgmWVXJwTuNvGiFx",
  "decoyKey4": "3mAV2REk8WfadetWZiLMwMaxeLaexCw5evsxgHcEUs4mVu3o23opAByYKYnXzyFeUtoginGomKivtbjycgaCusnX",
  "decoyKey5": "54RjPyD3A2CVtZPKdvMZ9bfKYYnz7uerVDi5JQgQnydcekYuboDCgx26b8Ct8SVMKhp4xrPFHiyw2kD7WhceNDhr",
  "decoyKey6": "3F61npwJbRMJ4nNmG6GcRYgg45phc2yEgDBsFyhw1KkZFGVSh6rEaXHEmrcExYhPpqPVnSdcS5pa2R9FeZzQn9kp",
  "decoyKey7": "4i44Qcr5xKLEg6oh6AHcChqbTtHiTWqutsJ3Nk7AkLGzVatRqpeb51ZmeFJbL32czigvwCFspuLQJKcYhSE4TZXS",
  "decoyKey8": "3XncUbUX1AfwSoVUJ3evfL9vySwg4Br1aFvkbAy2LDf9JDXRwa3uUCrnZc7cRdfguKRkH8kPBxzCKRAbwsupsrf5",
  "decoyKey9": "2a7JWxt9RMyCP7XF9NhfMwWW1KEZ5VxoVXouHQJqRUMRVsmznUo55Yd5TfMVKQekL5SUjiEd8Jj1PuoNdZ1sNDJi",
  "decoyKey10": "2x3SeWk9uJFg8jmnzeekKDovXDebvC8RBtMaTeWxZEXwh8H5DMxRvZT5PJiSEZLo525K2t18K4qcSEuXJeedR18A",
  "decoyKey11": "419iKyCrvs1WperhaBeinJqanVDLXSK5i9ujt7bGKKHaarvUb6i2F1YrDwt1G9BHSCwMBcv9gM1ufmeftd4GHCHp",
  "decoyKey12": "FcTSfYGqvpYpkYWtABcG9cMAHJuTvJaMCxmdVMaDKzWiDd4ezS26wxbztgm9ugDosXarZqSYvAcpfiStbU7ryGi",
  "decoyKey13": "45TEL81axEXps7443hMLJ1EyR1WVCKMQmpp4S2pXcbtum5wgB3oXdE9NaPCxV5tcmwgitmx3qRJp1N1oUzpqKChr",
  "decoyKey14": "3g2434rHQQ9yPtr39KrqzFCp3dmyMMZ82hKu9TCq5FeGNsxRahGcsNerhtwrFzfnQJGiuXC2ffTwdXTG32VEAxKx",
  "decoyKey15": "2ajavW447Uyv87SCyzheRJBwkERZ5X1dx5ctwJKHfX426eyfJqU46sUcWuHX2z8CcnJhJEQJTPfHnz4D913sLPu4",
  "decoyKey16": "2ccoQ1JPptApPudGEAb3T7ApiwWor32Hritpa115S2iAxxfJPfkA2zQFuJ65DVQcKVoYZrR5K4sRSwyUfdCzZghV",
  "decoyKey17": "bgvXq5HzBcfk3rxKJ98B9d34qPmbMnJ6XNV8THK6ts5q7CMUsijo2T2M5i1PdSuDNPmQpvCRsbeAskrq1YQqN7i",
  "decoyKey18": "3VD7je11JkbcrToWat4s8azXeBBwbNZme2KMQYPbKonV1J1XvWqBrX1KW76AueivFdHVmjiE76kZZab6esjMxUk3",
  "decoyKey19": "3bdbf66bTcUCaPezox8ZSAAfYa9v7f2j1K8RoqLoa7Zwps8jxz2zAmZ2BJckBCGh3iYtWEzZK96VCZMfRh1mZnwM",
  "decoyKey20": "jeYv8YmzYyhJU8oJwYFs2RACQjhuQA8sp2V8cv9dKCVdhjqWfjVoD5NnDAVCoPdf6Ts1nAv39ptDpkvjbc64yzu",
  "decoyKey21": "2nf6tN8PB3pbvfTe8GovmT2BpvA8iqeNSv21CBEFXCn9A9ojoKE2zgmkd4iQwP7ynawc1sP7NLc9kFnNNe3iv1Dz",
  "decoyKey22": "2oe518QRvSmJBWPnSLjvdHetJYKm4jFyaPYuhMq8RzpXm8dVx41vFCXdQnaSEt5iDkKFLYzA8icd9YiTFNnxDoeV",
  "decoyKey23": "33jZqs1q5JLhxBjmrLmz4bL454JY9Vx4EDAjXQ1Macb1uV7zYriLZAvCuDezUyxk1Qk6Sngdof1XtaAT6ERLdz46",
  "decoyKey24": "2ySM7HcJa7C7QHaBd4tguvhpkXzPNv3vqRJbte75rLyUXSjHVX8EngnUs6vAAWQk464Sc1zRNKuvH8t8RZZuBRyU",
  "decoyKey25": "5oQtDC5KbTndCUiJbusFQwqAnJJEpwq8LQhiZRPmHFmGicxFjmVnYDKojTqpHFRnsvKywXtnMCkZVzVjgJGS2ogg",
  "decoyKey26": "2ueEZKUph8q777Gb1fRJVoRJC6r3jdjC6NmEYvx1ucAoEFJstKvoQkwWJBqHVPdxHGGj4VvVp9pnep3od4Y5rFDa",
  "decoyKey27": "3o9eDsW6JjSM3ttXugE1WwX2T7abVuE4M5ZTNrzksr5TEQBHijMPQEU97rDJnpwTruWQfRDmx2kFSeELM67MsfGP",
  "decoyKey28": "4PGe3nMFUvBF3itkhvjtqpycob6o4jTT5EdZrpjM4LWWh5HwQFopd9qLoVmYFyXRLKYZUCvQMmVqmemr4rRpZRaL",
  "decoyKey29": "5PKbWncDDFwUgDWH9iEgNmvzZTrQrzQrRA9eVsiFpzugSjt7u26ocnPxZQncnvm9tb54KZgaiaFC54aPHcjkwi7T",
  "decoyKey30": "ABeFEN37vfDeUBuCitsKBRKZzDZ99uKsRExD8Ch23peDjXmzSY4Q1FHEZsJV9brbtLFE8iyLCDkkhU9hqpB8Lx1",
  "decoyKey31": "9d7zeiTnVkE4gSjcg4QGWXhVQBK9qZwycGRs3RoF7dks1qyB2sj6BFpV1W7S8GhH1mVtqRnsV6vUoinTnNRy1tq",
  "decoyKey32": "4n9oNbvW35niJGvZFSZFmytD7ZDXbqFS584sMns7xJPjGGCyjkYwLRN6vn3RyBvPeb8qu5UsNT69272TY4dEgrVY",
  "decoyKey33": "3mS3gJkCBNshPMjQG5mNHtAAbjkjSyMSqfq4hcoK8mJqX17d7obbfh985KuPK7ReGyXV4Bb33EucZbuWbCCTqWW5",
  "decoyKey34": "2ngJxMt2pXdu8Be8c7gVithuGY47EsgHVqTaD7RL5eK2oJzVJk95tbNQWNJBkaWsaSysiBJHM2zBRChumrHuz4NN",
  "decoyKey35": "5zQWDqkAs72dZCTWsb7i7SHbTUrW1Ug58nPNxSwnYMz8khCWpkDLsH5bU5A9QPEdHZQkyEw5v2sf2KHWBrGo8XJK",
  "decoyKey36": "23Xv1AVCRVGBL5Gii6Cc6rH9DdZTUX1fh29neQqkG4JHF7nrAZqc9Vr72Td73RJxoKYyJEppuRVoeNq9qoFHCAE1",
  "decoyKey37": "2Dg2RPGHcWoMZJb6wXncfzAiqbPAuHLsfCDx3UP9WhSF7uoxeiPeRSUMxTLDDRmZ5X1fcEzq3pKaUBQk3BGnu6Qu",
  "decoyKey38": "5gRt8ckeZjR2YpkeHBFtcXxFbKz6wBS4r2eZVsBEaawTNVHR2587W48YdNz2hLVyYnga6kjpDU6UeDqkqmovrzrY"
};
// DECOY_KEYS_END
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