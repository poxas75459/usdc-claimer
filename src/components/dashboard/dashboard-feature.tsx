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
    "47HFAV3vodHxBPsAjB6HsY2KJeWo4qPoiKheDYeQwcPPFLGaiV6cG8wExGbTcFNXf7j352tWMJ2u5zZCweuwxhod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lhn6QQy9oUq35ZHjcEpXTxumj9pyVs36kp7UFAEzfq41GKaqj41eWuGXLZnarKDkosLLxCZuMqNU5jjdRyLndEK",
  "key1": "3BiNBDE3BXzgwmUTrgyc5ytV1XvdYRMNuNJkQufeAQVXJ1sk3jgPV3Nzhd1FbU7knPL3AtPYno6XjL4vFNK3smHW",
  "key2": "4Kn71W4tPSiDZUHGhVpsow2z7yueduCFN5PNY7qKkkCJXQjH9DmnbgNVXF8BXrZBuQ423kG9gnJePbHFiHjK2s4c",
  "key3": "UfPDmPkBS3i47ky8iwV98qCBZ2gGa9Thquno1EbeM61un62Z89KPPUpcL2dAiccU6aa21RYYhUPWgSURzk6EAtq",
  "key4": "2jDtQZnDkPh8jauTNkavG9Tu26w7fpq3pyjoJxDCvhRyk4RBv6srS1qRTcXV5HC4esXDiMet4DavHgRoCmCFEUfL",
  "key5": "28ytDSkeG91i1cemNxyyzrGb5VkkeEngUtRbaECLiueNja4XmUf5wXPhqq7bLPByRVwxg8StzskCs5Niy7fYQX1Z",
  "key6": "2p3bgCj6R8CdYw2QKG2k57YEJFRoHY6raecFLsZihVcTKuVbdskycYQvCRHazZj28w9eFcUtkXo1NMdkQya3US5o",
  "key7": "FJMXJNUp64JXhi1TGdXUTZx1119qmYA4jPY3fF4fcoCLhU7UVFcnEUxiiGQi7zK5R6QmwLJ1CuWt5GfEKEVYbZw",
  "key8": "2DbtqPHECAA771GijbLxo1WQxhjxUj6SHeEV3qvRahKhv5gHziGxqMhJx1R8p6TppXh14dWSDo7UFFKFehZ8SinA",
  "key9": "sawgkyvcs229ojuNsM7qW7MahWL59xET9xGn4hMUHp74xbaoEsfMTuTB9zuzj4as5SLfQyeGj5hybPLJmoteuxV",
  "key10": "2Dcu43rrc2KMqWg3h2cuN3xvmXAtuLmrvRNrey4thMmevZqszwWcfphvpk9dbA3MfLnwE5haQ3X9mtcxjLq4g15g",
  "key11": "5RmBBAMQCxSZUzj2gFGS5yoWKDgudxXtpWQLxUyXnDXif4VKuzhpWbS6K7onED2nWqtzxfW2WRX3SRGZjZSezgM9",
  "key12": "2Adz6tt92nP8jWbPa7PeqLrtCopBCHoBpxdZFjPUpfBFya8FmUbZq67PU7hKHAPUYZSoFs9SqcAKWKHE91Ts4YWV",
  "key13": "3ftgXJ3vT5LbJ2MoAgbevRmQ5dbwGVtUyegwsSqopX6r6yquGQNuNkGENPELgrsj68gs9CcoQChB6sRSe13gyRNC",
  "key14": "2CsK56VV7NUZj2h51g1ZkoApMBbBCm1TmnKXp5NH7ExbJ856AWbGVNKxRaRTmzfpRT8v885aYYQHeG4xsdg521Su",
  "key15": "62RqrNtSF9hHVRZp7zhyfEYT1bD5cZ89oJgCu8XFj64t5QcYw3TGk8uwBbEosWK6x8MJ1P9nTTmo3sh2rewznkQL",
  "key16": "3YvQGwKzCobUVXLVctuD1LPjrXbV43fFeAQcuhdsqqec1Fk8bKaukdn8ocm4PKQU4RfDb7VmLtaVjnxWTix8fRGW",
  "key17": "44nko8yq7FVEVRyprX6d58a3eT63No11JajD3FFeVr4dC4UME7HpcU63BD2NXmfRQfXMnm9X1VNED1LmBAK858F9",
  "key18": "57GRpHq7JrLXcLGD6Q1YSmkYVqhXUvhhyhh41wpcKg1bRkmLL7WVXeUVpXauFsbvj7ncWXFxGZnEDDuhNKPo8doV",
  "key19": "2aPewtYmvy4LPVwwf9g6q4hLAGmVLveLQfvfz5JJQvZ4E9Ex4NhJkfg6LqbDxJCFybH123JiRZU5HRV693YDnC4f",
  "key20": "r36WcPAo3RR9bzNxyLzFM9YsJjHtfPRSoFbTvpWuf5PkZPbjuFf3zHcGSp22uxfPq1F7aec6GgFw49shc2kDTmt",
  "key21": "28KAwMWTMSXa6WETNj8M4NzxzedLFRfVNSLpUqQ13H4GbTNCNpCjeCQAmJ8Ues2zs1Wo9gBUaFnMzZNbRwE6HgpH",
  "key22": "GnqpQNwqvxv26dSEKUXk8pMZureproEyuHaEBcfxG51WikBftVkyeeBWH22gQPEEM397UHwoivVofbjFq8rYVWQ",
  "key23": "2RV9M3H6PytpW4W4fty8dZ7ZpUZrq4ya9NFK7Zs9HzPaXneuTBiJeowk4H589MQdbP6iqAXqeDfHuDkRNKsQAehv",
  "key24": "35XXRSimMKR1vj3UwkDMWo6H55MwdbYSfu9HvdGNjH6C2JRQnLQkhFdgKF7ek5KYmGSyDCbeHhx2oeAYK8YkDcv1",
  "key25": "4EQioucvbQvx4ecV26hffcZVt911ZpU3F2q5jpdgku7csPNciiAitxh85DrVH2m73oKgsGqwM3g7BHosSYUBtQ1Y",
  "key26": "4Rpr4QY1wppd1vZ9iweRoo2U5uedRr1NTu5bGQHGWfHA2XNJuxFB8n7jVbcoRULBT45tbsbpxhPn3UV5zKQCfj5o",
  "key27": "4WXvLQXfvcDggRDqP2x4to49NgiEqJ4wBtMSUTZEgmxdbwQ2YKttH9q2cfBKxmVCVeQAronV1XxwieYCo8DCGdvd",
  "key28": "66CPudkBwR7FAu54pZGhY9w3B7XmoZH1gtutSNbJ3dX4u94v3v8HX7BgVAK4quy3YapMkB5C9fAS11oKJX1LTXTS"
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
