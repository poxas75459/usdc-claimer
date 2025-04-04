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
    "2wKBmghQNpys7sMEJ65kkekfQQSzxRiLidTDnLqLAFfVZjTrtctTcAfBFacm8Du5JtDqDbpaWaTvspGQtJQzDn5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43oZhw4oB53QQ89tXHX28VUpzMopXmBWrcRq7yq3XVcF2QbMVWf9Jg4JVdCmncNaKw824VTeuAX6Hq14qM8MUigu",
  "key1": "2aLnJY1Ct1jTagpWuqwMN6phPMefEffckCSLpTDXhRJgKjm9hzqHCboMwWheNuCsGF69yjrBsGV5cQqRdGgUqGGb",
  "key2": "2Kc2sFn5AeNBQF5E9jXWGNr7vSXSNraaUW99D4PN8if9zeE48xwyp3ns1k1G3u7RLijF4SvsbH6CLfTZvR1nQ3m7",
  "key3": "2YUKzNVVeiwL5BKxyWAcdtbcga5wxjk5dKdvzBAFbXF7SZ39ENRhA8A5sBsbvpXWwjepZrbRCPhW1UXvUKLhX1Nz",
  "key4": "2Jt8xY3xzcAVFpS6mVZ1NHPQLmUhTKgbC938ftqiS5ajckEZmopLzfjC8Q7GA639ABh7jQSZpDUekUBW37qfje9o",
  "key5": "4H3BdVURgHGLPkFscQMNCuGfF4FceELdsQuSMbYTYqqJNkS7pys9XLwBAbbB8H2eLNdLLPsUXxdPBZ7AiqSAiCeK",
  "key6": "67qzAUGA6Wk2UNNJYBZAjGMiFdndXAmboBATvq2AFpFvwxaGKhnGcvW3nwvkXVdjFEug3auv7j3NgCW9rwyqrGPZ",
  "key7": "2tXjQdYLMhJBs3ZTwYknNd4XDPTUWFTty4yr92AABNHmpzJnfyS9EvM1Qi1q7iAJTp6TiLsPpajRKaNcCUiuCZyW",
  "key8": "3rHprvchWadENmhKLqYKUGNbMELLjiWUVjQ2wJERax5jNzZVVG1aceUXn2wiMwEdd2W1WC2kNqoyun6LiWCG7HEP",
  "key9": "4qcmVLn2SwQds79EbM1A1oi4FkXVU2vfLedtCtrRk2KBxHAQoGg1z9bbrxyViXEhnjs1TJ4S72yZuGMTrzenmBpJ",
  "key10": "M1qQadMx1dwccwABaXHvemmQpWiy9bJu7xNU4b9Edn3NW1TfULxjmzarBhYMA4bCW2pi37W7yemWStVE71nCi2n",
  "key11": "2Sc3MQLzFTK1LV5L2Eien4ogPo5rFrp7XPExVe6X5xockAKK3YKTajB4Df7xGjQW2xcfWqv84ywSJXeteynKotwJ",
  "key12": "aX1LuxX7tgJe5Vo2F4kfq2QgPn9fTLCAFJetv2oNYf9wtfZ3GmNj3akaUgcj9mj6fEJC3DVmQ2pVwRsoczcU1H8",
  "key13": "va94UfZCf3pC87JCBq3Pde2ES5Rys8BL4h2BPesT49MPHsh93uTWXf4Wz5YDL7CRuqoTz7c54jCVi2dJPRzHW8W",
  "key14": "3mrNZBPKxQgTQYaQGmpwZv4CcCEVMvuM5YVKb44ievPTP6gb8mBZEogdcYcHLgJaU3vwRu2vhF51FNhqfisT1EXs",
  "key15": "gRMTxe3vLyxDCGRjPgzRyM2QMZom83TAEWk5cFG3omCwNMSPcHNmRX7VuWH5LJiVXZHoHsTrbQ6VdVBv2US3NxB",
  "key16": "sWr4VeZjEVUSb7vQRLxwib218kUEheEYh11z416DDXGDu4LYrxfPoBucN9oYxTpwd6MfYcAKm85oAcXgmeDzZSr",
  "key17": "4iefjRAn5YNpQRuGLMGeF3W7PAD9tysLghgkQ7eykZQxZeT8TonyfNRaAgabvUHuVsX2QsRnbJfQtHKAf1bmqhZD",
  "key18": "2QoDBWZt6GTkY6zvtieQD6zDDRQiaQBuBatEMJbobogAQU549zPsjU5CgG3pwDnQ1Cvd3jEjGw9TvhMwhGtKmzU5",
  "key19": "ggVCi6XTcvQpFbBQobr6NhA5ViBGNMu4RVeiKQ2amuQecYtuQXFoWq8wEuPqwRRrLvNUe39tj4XyPRmVUPhC1Tz",
  "key20": "j98KZS42n8YXYWeoAc7rRnXLLYfqqqtHhmk1z9rG825wfUahPhuaufac6odxHaSq9pE9qD15AfYznf5HbyDGDFx",
  "key21": "5uPqf7vqXD2ShYhVe8jJKc1cgH3mUg4cSBwqFoH9M21gEWaLgAJFnzWVJPQu8tvMjBAaZf9xf1ao1FapZkJeWxh5",
  "key22": "2oaQSjaxvQEcUzLvvoTvD9znfHpuQhw9T7vRgbap7mc6f5SQ1tqo1G7TF1V1EzoWaAaeBbef5DLWHQZMfgTAocAB",
  "key23": "2cSf7hGBe5HbsZfrS2rnu7jxs8D9EBZUJueNKiSg6HSHnDVkbXi8rWsTwupxbraQ489ePtgDfkhfKKBBenMtayFe",
  "key24": "628p88KVdQnEL5wPSd3GmpjwyWm9ne5kz64aDAtSQ5XpvXQhUXhFqZewJL43j1sfEKMyB78PQkhBjR9QVzkBKsRY",
  "key25": "5P79ddQB6SeAxY82aXNPLruaJLB59pWpS9YHN8dkQju4qm86TJMTjCWDdphrNP374BZsaKFLZgubbgisjfLx16K3",
  "key26": "5kS1HwXLY1TFxwqjhqS8ZTb3MHF1AUp3HLp7qpy2MMCQAV92XFvQtNnHjH6MqajiBYyoVhVqovbu7YdfUuEnEgB",
  "key27": "5GD1tUv4FMhTreUx4mAM3ecdhzx8aampDHE6vfZCmAye3DdGzGRBcRBVcZemuTUZxRpCTXTojk7aGpEi8URRpRrk",
  "key28": "4DyUWLcvuSTSZ8Lc7at5Wc8CJ5DjZvbF5PX7D983kyFTUSC5wkrUw77aYHrawpx3P5ofhHmxfLs1AqjoRHKXAHBA",
  "key29": "sDBb4Wxb8cd8XyPhg3t9o5pgTDP3BRsrTFHpxvJsjzEgoN9DkoBuszpiZJq41YQNJaQBg49RLgcUm9cXcSWFBKq",
  "key30": "2vrePGF7PdzhnYtgToPGjcPrW1bZDug2rnGTozYVLkPaDAn5TPpHbuHWCViCsME6pRVt8oqffX3WUEnvjYe6Rd5G",
  "key31": "2YNFYn83iLbdypm8ko6JkuA48uxM8Zrkh4RBqcbVTd6i28jKmcPaodSBD4fK6ybtSLaVXLaCH33rZRMDeRbTYr4U",
  "key32": "41xdbotbXxcXVFu3GGnczP8ZG6KosP198LVznCv1KSqRV5LmqpFS6PEMHExZv2ufJjvpRhzKf2JnDqi15rP7sdvN",
  "key33": "2c66L7aAnkdBqqHf6Nwz9N556mP6chb4RCQTaSzFYBzpYvEy3MRGcbAayAZvyVod3gYKGT5Rzh6ESooo7bCyqRjc",
  "key34": "4L3Yic8tQcxPp3gPXfznsxLfsjYkSUq7NyiZfreA1Ur24xTTcXL7aKb1qWnr4CCZw9EkFwWksaDTgL3pFvURBpKE",
  "key35": "53Yo7K4ugR7DSTCuPtgkJDJ9vSM3cKToNfxGHgVL6CXuPFpZAkZiriTGGqd2eqS6fVUnTqdRA86XrkD992C4TkTM",
  "key36": "FdFrvD5gdMknoffjyoNvYC9DeEvU1Kou3mGAqj458sNmAUpXrS5Qm2Es86V7kbeS8cWKK8SkYtUwMeWR2uPwai8",
  "key37": "5qW4dUTvAxoxft3j9sDE9qDvMbcKWsn4m5tpY3QMGv1sHGCozMuF8sy2eXnpN4j4c7L82LeM1wtb6wPoJ6XeRokW",
  "key38": "3abnerWQiCPPDv1Vqe29R6PMhMEC8XagTQmvMW6oFGiJSnSJXxx4RUAQbc6dZeiAgkvM5Byykzkb86pfcooCpLdG",
  "key39": "2nTdXVhfRZ9eSWnp52Ypm2QU3bt2BFeHUhZwzhMeETWLCLC6jfsBXhNfzdicpbHXu3aHQkd6BVxzAvXxDuZBZtL3",
  "key40": "57sTxvjBzUg1oGRwqdz6hDsf7E3n3bGEQg9eNALXPGN62SrAUYZrfypNv29a9dtvZrihQFJq6cgFZuAzVL5avYke"
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
