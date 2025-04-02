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
    "ZpzAdZtNgdHEQbrLFWMi2ddve7k3ivKvzUuhsQXZgyU82ZWumaL25JZo2pXHW9zTjnEf56hmMJrqvNZUK8czNHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VXRhhtFLuPZygXg5sj9zkP68g8npffx2njQoGKNTEab7CBSUrsMYcoLPsx1A8cfmvncz5Rzexe9xtEYhjSsKM4w",
  "key1": "37Q2Znu7H9BLgGHB4sSJav5pWi35BhT1RabGRu8BGHya27YNDvxmBMjoxMLjSLmV6tbPfyw1ncX7whYNX1yVYFGe",
  "key2": "4NJHPU9qBaxDwPFsnryay4GJCne5qZkx9zTStGASfK7A9FxYEWQ79ucsKVKHTk1WnGE1Y252Eq6vvwJLm8e8MTrH",
  "key3": "2RoZnhcg3UAH4sgzkjed6B7nUcUdnKFZvwyf3vjuL7A9ZEWdLXSaQ1rj5MMQev1p8Q3bkkMoRuYY8yqtfA9Fxh8d",
  "key4": "663ypsBJtXY5U6E8cEJvqV5Zuhx5Qft7VMZpo77WZQxDgYEEn132kMyW1K8J6ra135NrKNtBEq31XK4BJvMv83w5",
  "key5": "22R73AzPKyhFLeD8tFoHUtAdtS3HfYF8G8y5Wtt5K6jqieAp5wtTGveFmL3K7ioE3WoQ4qjLkjLctLYfb4oYpRM1",
  "key6": "35uPfYwUCUMg2JbAxeYGAP7Sac6nsithz12rb5xGSwpui4bNYk1bHekrfoUmuysAai5swa9yhTFwZCWoyGcdf3vw",
  "key7": "5KfAzC6qSte1HFsLgZmL35z6KMExAbjQ1MiswPDsqkiHxoHFgRefcvyQ7arB29ERD3CsGA8gkwkst2w47pRiPagE",
  "key8": "5U4FFwVJuPciNs23KUod9HH4po5m2Utcm3D1UBLDB9Nhh9aPFFpzj8z8EZvhUsjhFsvBCyZKX45WVMccqpHLijce",
  "key9": "4x1ZXtQ3fbj5VNB27n3kA5DTAXumEcjWiWWghpQ41yLQyuCxEgo5dRGom1sUSDKeKeUbyqJWYGtnoTCfYkwvYUvi",
  "key10": "5r4rMNFPSxNzSBFAV1AyY8R6NsPS1GZeEnuaHno8PBLMWY98bygr9JjazD6fc9qrGtFLDfXUMJEuycN48MugwNdN",
  "key11": "4nmzyHjwjvij1DXbgxe5pEa1irxPEhKhvwS1P7w9WfrkbQ3aZ3FKNodjnbtHcc7DgeEEpXbPY4e6cY5PYvdRh9Mp",
  "key12": "4zFrU4Gp6Lns3g5dCTBPityG4yN6CW5k4AKfWDHey6GqsTZfwmiwSjjXpAwcoa7UQCMeyzdGuCx1G3UsB2YDofTY",
  "key13": "276QFmQZG3kYdHdJkoGqB16RAnvE5UHAH6VuLGTtwPimzWKwUs5wQktMBy9FbAgj1x1ipoyb8vNrnJsVLDWTduJA",
  "key14": "5mfc5pmomqqNbUhKnxQukxvYtPcXAEeTRYDbNbkcA4U4cryGUc55yRn9eCwroyWBjPG6cBCqj1knRPkYHWVUSydu",
  "key15": "2oD8kD9z5Fhiv1emoYdReF7A75PCDFP3mNpTx2D8bzrfnJUuks2LYG6vkn7Xaw3DJiKRaBaCb4mvePkdBDWL43Ji",
  "key16": "2iKmSehzuXfaJFs7FijqhfWWGHXhz89quZPJbwYzzvJzaV8kYMXV86mFLuvNx3rwFMAb3sQ99i5BR89jfQPzCipL",
  "key17": "3YWuHxHEynG6J2Q3iDa37FXmBMhNsuWqP2wApkHEhqTVYDTXTWBGXc5zoTP8NmwyM6UP51LtGxHC476cSKcWq3Ei",
  "key18": "2mv2NKDx9eNmTx45JFri9EQ4dvyM2rnBoUP9ZiZ8iWeJ7n1YhwrCdjsYvXS8a2Wg3VWbLefaucdMGpDiftVh99Jg",
  "key19": "278doNSXw6yHfKzz1E6965xRkwbGSnPcYkjxKu58XYBSdiFPzqmnTv7VeUyvYPrTV6dDs2eCZqUodFvnRB9hex1Q",
  "key20": "63FuB5y6UuF2JejDepqLoRjbpb6Jc4VVFPzwZDdWwBJyzvX9zAAnkwkUTx9nBu5XG4MEe8HCyKX86DhLYTpMacBu",
  "key21": "5VmMnnGdEqD6GLn1VfVxE4spxN7egV2A498kKRUDoEMvf6yvRss4xpc5n8ue2eMeUA4Y9Gbtm6kS8Dt2HA65mMMR",
  "key22": "5Th61z1S2QyYG3ybZbnCfPDGXpTq1oixpGXr9NRCzhCHbxHnqNwf1BYamEQdtjziEbQJPks7bfyVKo2RA86vthXd",
  "key23": "5YT7YfmKvq8929AcXFyPB6qyRT5tciDAaAP1wnVcaN2TFYgvxmBqC6GCia5qVR77QWiEcrXNDmdhoZmZccUiAu7r",
  "key24": "2Y6PET99sb9HxdkTZkEH6ysFsoLZ3upmkE9C7MV5ZuPzbSwxhd8EG5JUNTn21f4KWXNhrGyDjHF7P2kDepQxQgz6",
  "key25": "foX7UFUwLHHPUEkkcWoS9jpeU7RP9Tjt6uUc1Kt4dZieT3rhjEy47AqWCCQdMxSjWRnSVfV9gKCSwaPxT2ZmRMQ",
  "key26": "EJADwHc56bDhJAQBazg2fFDi4tDGL2iVdc615x5Erhka5GPiWknRTYiQSZKwpbFrAGywCSXymw4t4MfcK2SSPUd",
  "key27": "5ZBAvkLYBCYnZXL4FN8ZjJY568FJygkLL1BCb1JsJCmJmFr7TGZCB33qHEH9QQV7VqygyaQh2CUuaujyWvJDqLEU",
  "key28": "35qMSKTCMMwPDSH9CYYnaS7Ry8okDRNWJREabR84G9AFCqvXTY4NuNd7numFrkrgmtqzyM2Npmwpjeu1SWEPWNDD",
  "key29": "eR2jGK3axakFtYUEgB6ZtPzysBUaL6DUR6mXkKwBr3JbZGQS5aDoFFG5H2JrwkKAJMK4wzpQvELzTSvYX39VsoL",
  "key30": "dcvF1gex7CL38VXPKFAuDkoSAHhmHbroKh72yHwRiWctm1EWEL1S726bykKfEcykebiKM9F6jqm8vGfPQSE69Ns",
  "key31": "4aGKVDATzLMnKoy218ZJhHkNpysnKUbEyKTEAsP2iAdSFqTQj2PcqkBgESgPxiezwH9EbYhAdrGLx6FR5YcJRZC6"
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
