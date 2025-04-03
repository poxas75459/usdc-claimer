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
    "3ZvkwBWoFY7ZWy3j7LCeYgunURbF6LdRGZaV9WtDczWqXvavMwBTXwnSu3WRi5LCr33No6adkGx9fqdVrHoNrT4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YTFpxsGtMNZcKAvLsjwFJeMSjCvgvj4Y51sZS4MjMKkRkZdxRD2a8tRbeduDv4WLAK9UnH17GgvhJPEgGQRXd6f",
  "key1": "58TdBSnJbFrnfL71W5JAWW2p7fvAJ4hpmDNWUWiboGxPft6sGTWXxKpmPjJfnzCuhMkb1SjXBNsU7fLfBxhGZj8T",
  "key2": "29tB25L6wGpxH424C6h6wTwhT2bEm8aFxJ5eJ6xQZhgqfimuHBZ9pDUCaqcGrKK2WR6q4YCKEmnD2VZWiXUtSoB2",
  "key3": "a2bP4eEeSLdaiTLZTLL6tNBB3xPgHgHWF7ziZSHuPCH51Hn4yt8EKy5SWg3n5J3T37teiTZGz2EhrftZ72838m1",
  "key4": "gqTCG2BgygeQbVFDq4u1axs2aHiFZiLkkeWMTv8uKv54oThUXYdWW9Jvz68uW3BSLvLgtJXh2ZC5qwLyhyGxmXg",
  "key5": "5pdS2wFyNt2Q1qAAkqoLiwmTLLAtUwDupRUKET8hX2iFngJYyFH3ekoGEoSxMqftSHyS8kerbSuEg9iYVikwB2P8",
  "key6": "5TQ8AELEtFAy4XjfFtZwLPprKjV8veZfojoAuTAmyBcYoKjs3arui56sFXeLZcr8AETz3enWp9hz6aeSaFHnTD74",
  "key7": "32eaqkTMZ5vzAyxmpakTWCf71W1J22PLGnJKBrM5fdoPbwGYhuzLxGTRQ93KBpXhU22RxPR6gyKcKHmCfwRDd1Fu",
  "key8": "vvPXngSSQcdj3nwLeovRG3SnkfZWGi5LYCBZ2CYa9Z9AaeDiTKrwSu1g1S9vNzQdw5LkzynkvaFE68Y136ynWAq",
  "key9": "cLE8qQXb3cNHVHXuvcCuqR99D3Fwnt33hzt6ytr2py8RYoDoUwU54y4egZuE8BsxDwEAQmUXL55DZAckwMUeZq3",
  "key10": "2nGTv2o15oqiZXxh9AqYNtedHruvWZrn4GuV71cSaPSHMsycmxQU1EviPAHDedZan85ZERfQghbLj3ymtojFxw1M",
  "key11": "67eaY1vtxo5qSS699h52Dthqfg6V1KD7xVNm8w2XVTek1or5mdahxnnTGZBmRZ4T3X5fSXqHrGC5ah7g82iADYFW",
  "key12": "48HM77AR6B953V49YtJ9iXYYei6FdNYrHLe33Tr9rnwvF9EFFGX2QdFTnMF58i9RZd9xNoob2vDYwMnqicP1MfeN",
  "key13": "2SzznCPHYaN8LrFcSzEs1WtgW657EgKn8DnKvvz2ZKmWBPZhXao4TVq7TGmhu2AzPBoFzeGiayxfoHRcEBLvMdoA",
  "key14": "3mui3dXJYyH6ddTiXcxriNCHtEyksSrJ9bxSRw5cpZ1rQDYfCvTrqXYMFkQck8iygyHYzte1MXoPdvFvikk5yM3L",
  "key15": "dTuMcCvb8bzfpdcXxiTPiRQbbXmPnhjcmZr3Kzk2tCNeJTH6fqBteCpggijgbUCwkigoaVx8BYqyq36jvMhv4ro",
  "key16": "2aaZKbatrnLGuFDrDXqumaWwxvHCoEB98Jx33naGhEZA17Cpuiyjs34GhN7usnXza7qYPsc6avxwWPu4ix9Twz8Y",
  "key17": "5fne4AcSTfcMY5MMqGs3wLDagdwtr7pS9iZaiGxvWj5yKtGDUJSJmn2RHFd8qBTMjEHa8bZ1KehXTj1aEqiECPtG",
  "key18": "62pbUJXgRLM3nzKSp117UH4kAmseFswQ34b3Kj6grQ4PvNfGMCLqSug2VpRAHpMctB7Knnk6ZBMjwn2gxrqYvX1q",
  "key19": "5FKyocqPDDyTGFRNqiD36yYFXsdg4St7mYnVHN9DPpeazNWbc71hEn2MjJjXABBWytEyTnxVQdQ6hCSsA2yUWpKB",
  "key20": "5jr5gxCsutugJJqgmuDdVgDymvvkkbdnmtwDHkeMhpct1azNWK47tcNtDrvrYzPsHxYBFmZzLxwgfYzHvKVTS7cR",
  "key21": "4rjmLW2xNCyyTo58sh2Cxo2CKvXzTCu7cy2nZFVR9myW5ewNeQVHptyFpxZEgesXjCsxPXeUrnoubTpAmkLCFKyV",
  "key22": "3P8gDziwdwXpQAP4Sf867ZMSnf2uGRbg19PM28x5P7JVEmnY8bGH4KRr1X7dG2dP4jvHqezUAPiF8AKij8hKVe9A",
  "key23": "2VWcn6P2X7EPShadK8vMXYTmw7WbEYbaFrjzhQxrCJn6C4Jy3yFcJ97F16JfFkEN2foQTmDk7kXp8EjscFryT48D",
  "key24": "5nhNEFELwH5yCNJWaCL77VLacHPriE3G7X3onvdUc6EwkGt3Xtv6Puoqh6KHAu75h8kzr8vRxrbvjNSYiMiHpB25",
  "key25": "62rLCZGL2oVEV7YDRZMyXph5b5ZThBos8CGUy6n5yd8DQxPtt1rAHDD2dgoFVfzhtwrYNERbPNn2bwcvj3tSsCfQ",
  "key26": "2A3QuX5WFEPMaXPyDTriLxktn9ohLHGBaXREcJmASBywvXrU2emhJHJpHCYfQKRtSJjMRQ2KXywznH6LaSkGZqLt",
  "key27": "2zdhEeT9SQSovz9EEPKajdaKR97FoDyfHiQotyKRUnWjuQ43VLnFWLa3w42N4TLZ9ir4jknjHTw6VM2TJJXRSirm",
  "key28": "2TyKEypAjDQC7upc3FtCLEjDrsoM1BstfKmVjLzJ7EnymjAZT3pc3X6sAwTFLrkYMYaAmHLL376hwHQM84kJrNcA",
  "key29": "25eMg58ep5XLwmRPf5T9CKwifcQrncZPE6YjwMi5PmhPoXQCk4JGp1R9pdzdxqDJmvbFxYNiSWpCTa2kNqdmw3Fh"
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
