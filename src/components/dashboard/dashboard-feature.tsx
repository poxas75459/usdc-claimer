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
    "ea9qfEaegy4Nj2F4PAepwUG4EajEJNTtjfyuujEtaJosPMQyBw9KfYpZ85bbDsmzZ8GbHcVFhE8Td7yHv8ACYvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47erEuLHCwayyLprkUsKA6tLWNhY35gE6i1VSmZXqyThUB623Se3WZdQo1BUKwdouF4LY5SPhWX4t3R1LdUbwssS",
  "key1": "4sZAaAzsujcALuTHeuhohVsvoKFTtgwryBsrhzt56AMYns9H4iM9zgaX3NsxRQCdXQ4s5TJ1FsgAP5JP8uqW1Cy2",
  "key2": "48rpoCM6fXv2ZEV7LwmRz97iz5GqwLWh5nKMLtTJivChUuKB6jp8Z8ufR57ryWZ7B1MpWjf1tr1actzsKpgcq4Qa",
  "key3": "2v6FB49pfrtj5MGbvrtV9zKMCokBvghqxA1PpGgD6azkgkhub5DJgvJh7VNaFHQL9g4grVRHcsJM1hgihz3zGzf4",
  "key4": "26CCYME4fXiJN6iHLsQd8QvsDaH7H3R7G1wHJ4YfFsfeYhXUGveYi6pYiqTjgeoXi2L4BaUs4E5m2AaSHZKCvYza",
  "key5": "3J93sZWsrwpUGtx9tuf9GShqAiSL55dqnTbzg6UYTiqXUo2bun2rajG8hKAJtbteNYM9C6aSZkb12Twre5TjxEAR",
  "key6": "4Z45tdA6F7bN6ZfJkBbtigBUmqHUbZQLrzGtck26eBcMnVsVBaCiwzhR7E4oSkFtwRFTZf2MwbfeSFyLBY1C8ZXQ",
  "key7": "3pGe37Qej2gqf5cvm9T3MwUs2Zy9VoUnpWrLjhPJ2XhJB1pdhKZth3uttEVUyVFqNRT7aDnui6j8BKTFCGJzqDui",
  "key8": "3MJGyMxVdrsea5ScMoTHe6up9vAuECfV8EPigPD1MDuzziGJwj3EzmbwR88JqtARwsdWNGMZR5qzDRc1vFpq8Z3c",
  "key9": "5fcLAY7YHoV6cXBabB6TumCnTapL7XkgzAGa2WJoYa5SsGQ63ufUQcoGqWHmNVhSiUabaCJXFLWvWdSvV86PAAfS",
  "key10": "5J2eFHnsMXLEMVdCSSE5aD7Jv5sWpqLNHpzac3VWjC1oofi3KHSWGLo7iTZNK8CQRYveauoy4APaYT4BHXuncwTY",
  "key11": "2tNxgYnw7sCVUe56ef2YV9XaEzEz3NAebefeyfeYYm9rHobL1qJwjnPNgBXRr3k43V9ALEfMfwEnL5xJQCx82jwo",
  "key12": "kPyFe6tiqPvHf2DgEdgWDSyHBiiGUGwuwsCoJeGVDwsrKg6YWtW4Rn3DZ7aSPNFDENWKnaZKDJPJBF89z7hxng9",
  "key13": "3C44i7518eE95SJaPzhPjZHX1offrjT68YdPPTu8tsR1cc6RejaE2KNuX5o7GVfq8eo4NxG2CyQsSEWHLfFVXQV6",
  "key14": "4BRrpC7daiVYB7d8DaMJNQDAcMMaJMb8rjtZUPAfNbmZvHGpzT23DCYBmWbijYH1h9SsQ3mQA2kpVuGzXZ4kGRsG",
  "key15": "4cdP3yLHF9zvMnqYUpLQmYxcNSP1Wm3r1t2r7Jc6aWSCnMvb52Ewr4ocm1nvSNWREoof7W4MEdELDArY5kbc8nQz",
  "key16": "3H7dE1MtUNFJxr6jE3uuAQfYTkuiiMYmavsUApxf3uvzNKcGwwwXoi1H8pZ5N77AKkhWgnf4ugRUzz8UiFtEmjz9",
  "key17": "2ZyFeG9bPjgpEGALKsUkzGRkkgmoeqmMnkdjDWCShHdmoqgeQvAGSDvkNB9Ap9xJPZo7s24RqKDEJgaj9KvVEno8",
  "key18": "4gEgXSnMs5dZaUJimFgWygJ7EfWXSzc24TW6kmBtDrGxjgu1UdhL3NqcMNwfwTjVih4quhcwPGPgiXRV63fmRvbd",
  "key19": "5LWdKypAgvEFp3ouMtK7RZKPfuQzGmCmGzr2YPAc3NMhWxtmJ2ZMdJ86hVMwnvNCH5wyXX1ELQmHNxAuNsvkKSHv",
  "key20": "4wusX5461kcsEbpTZ85gJmeqBq4eHEBq8Y9UuncZTbLbUqM6cu8FGgbTnuMQVtKPBRSZvXuG3wkG9YKv8nUebP4s",
  "key21": "L51Y9js8zrZtmnsuGvLmyMccadSayegg8jP17d5wwy8kpcEdJKTRGBUMxErETmpArnwjgVAsyNHzaaFCzzchUbj",
  "key22": "3NfDgnq1mMBLhJGqmrEtnyV2pNNyDTHfupYf1aTdz6kWgfiX4WSzU1Dbt3CvV73uBm5jReTyQpWWXSp8yi9UnpTQ",
  "key23": "4ex5uni61HH3zfgLapfgj26hwpA5f8NJ3dZS2qiv4eRnKRCuo6j8MStDuJuKxRzDg8GXp4qCgeFk1P5yzKmnxsSY",
  "key24": "5Fq5p6M3cAiWHqqnc3a5B2aCfLwWYiw6yy8jFySgh44DYdHQxtKuf6ZAdFdDWo9PgkFo7AxumpoEmGbFtcvihq7X",
  "key25": "62vTienazA3PdLbzaeSRh7owbDUwHrFWJGraZMiseLqb3Pc64DZxbs43dQzZBZMQYwqX26ChMLpEU6jM2wWwfbD7",
  "key26": "kbTUhoAH9Frnq4if8dF1MX6WG1YL5inZ3C6X8SBADeNS2StkGrZ6Jf7nGjhvo9oDMpUHKtrRnnCAMm64mF2pZXx",
  "key27": "4WCndgtK9Kr5ZGVzDZoxvDswamNQ1ZDu7nCTKHT7jeAVVLFjA8FaRVZvxoMV6pXfr7481kXbiHSQQp7CABBUfMMR",
  "key28": "ghReaXP49MQanJW8kTKXeyMgdG9uBwbk379pioiRcBgovuLM5gMGbEGhgANdXKCs1tbU4Yi5Bv1WRKE7FZVMGVY"
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
