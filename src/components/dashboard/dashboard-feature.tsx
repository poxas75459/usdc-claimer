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
    "4h1cMEwes7AoZBJd1KjBs225BLYpFEkJGh44mtohLoDTzVa8pKrioVQ7ytZAJ35NKrJhPvrkCq6Po3gebrtbps3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61DQxthFLbSMWyBQJiMiUdf9RDkZMcnjwCN6UmJvUa1k9ZGCMA73f2w17sP3c4oZ56ubxKF1wpVbVVZyYicxfA2q",
  "key1": "5dbVWXZWNCoipdoFLowQsUpXii3k9LztebKpGqcDEf6Y6enV7NLE6D73tMeP42MYERoX4B53Yqi1PHv86ngP5boi",
  "key2": "57YRfderGQwx2YVYfwsQH6SwEcXK8HgLdbfLN5Z2YqMooVcjH3McvmR7a2uo3yoJbFKZAZE1M4L6YRfBafDf6wgo",
  "key3": "MtPo9u28CC28gVGK8ZsNhGkHSXeVDtQiunLAWEP1XoWhULVBSrToSYbj4uHG54xtZUCGw7L5dMAntBEn8mUAvv5",
  "key4": "4okus133YLARzzRMz6LVFfRArFz96d948mY1PzJyLvAYApmWQ2gzwcmJNJ5kpNuro7UiqxPfNWzVnZwh9ADH1mXj",
  "key5": "3tCefrz6cKDK89pTjaCehAxBjj1LE8hsVzzDxRcRBJbscwRv7fKLsYtYAwJmbmaZBiDaLPUcBNG3DJmMdET9X8zr",
  "key6": "dM842VuGZeZhRQSWdwCsMBsAAAYDVE2b7QoDLGaHqB37jEwssyX44DpgT9ci5AMnLgG11wX437Sg9g32vYNMsRm",
  "key7": "4YxxdUWKRAgJqDAz1fRM4fE69D2ZSCNnksd6YzE1rkK7ENnmd8KocLPJZx4fj1krhMgUESx1Fx2UCtL5sgFmub3X",
  "key8": "3geUAw2kj4szKguxx5UT65EcB4vUnxH5Lw5mqQUNKKW2XzuhzjivxyDfLdqEScPEoWbje9x6dgYeHwQQNPSpzHLm",
  "key9": "5SgkNAn5acTFjpZZymJUPKQXcQgkm6LBBhmNDbMYBwD7LL81YWG9TcijsBA4xuEj6adshdVrfB1pC6VN6aCRBW5Z",
  "key10": "5nW1YE8uoPuxtuqRxWMqz9C1S86uLSgeTwDDKpwV6CJhQkdddfN8tyBiREzBLMc3RAHxTqZLprgZ5LPFQmGzsTG9",
  "key11": "iswSu2cQ5d2arwyAVcmvANu9ftdzXWiKiKCGi1a2DMtNTMUuZ69QuvjJr4NAsHZe5gvJgt3iqLKehnZfHHr99d6",
  "key12": "4V43LAsUBD5VyQnnHbRDjmL9dNNCc7vaHiXpXMUx2v1hauXmg6rfUAtvYeWxw7zzNamaozciuBJrH9ACwjSxN8Rz",
  "key13": "3tax5KsqiPZ8Tpb22FecYW8RRmaDWUrzoqZgxML4w8M8NbXStRkGZKJ2baNZ2gTaR33jLYDySdM33KCKN7gn2xpS",
  "key14": "Fqksve45Fu1mnD5fcqAJU6N5BDmRbHuirgixCNSsvFxhKJoS9TJJcdyAnBLPAxh98SqHPtyW6TdaNQKQA7wU6VP",
  "key15": "2C9EHNRENt3PNLE519G7pSUyuhVSXe2mgFSmNo8ePcVj7dkJRQCNBF3fGs4myqxdMTG2ci9fTqQ1cwEePEA2AYoQ",
  "key16": "4sfP38o23SKiyMLh78qCwihakRe9U4i2VoHvZjDxCLNLmPtVd62ibdoeiihkaawj8Vcb4ThymaGQTYw9EGA4PkgN",
  "key17": "2DsN2EGofv3unyvvxx98kAGVSRkok5eDYHsUeHzfABv4SuVppWh3tpJUqd1eff6LJrd3nWeTaazUx4gjcz6CSFei",
  "key18": "2Pe5YvXcuzFRc5MtmfampSAckFx6ynaJNSTxGpy9xb89yjf8QxYp1reXgxnjWiZUfWe3EKAYG7qtKo3fZVRmgVHQ",
  "key19": "2qPGnDTWuAnSzNPuerw1NEXMJuNvPrQXmcgAFFGwS76sk6XDk7GSaBk1XTibn2EFWs2p3zaZ9SksTdXhxCEWk9JF",
  "key20": "5yEwP3d4qgr8ftyc2nXjeZg11ZQk9ijPEWXVDyNYEQugsoxKM1qGugmKvH92s5XvbqFnF3WxJ7Soag48UzqLWKFT",
  "key21": "2DQFgGqi2bz9Bx4bWpCeodKuU76xZVcyTV7z8GVw5oEjc3jQpt16gmg1u9gLAGwc4thbfadJ39qcaZAT6ZZpMyUG",
  "key22": "ZHp5j3SAy48SG73GmZbbW4tN3p1VSMqcPaS6v3FPeinE6XQJr6RtPWsXiz5MrGeNTmc8kNx4nfToGE3RCFAesF9",
  "key23": "5CCqqgTerb4qpkTKwJgbE5JS2Deo821CiNsCsam7qM4rEFNvtf9hxp9E1aGukhyBmhij7vC3ZTpQeAQHLqdA59aQ",
  "key24": "36tsxaLPcnWUjpdmcCJGNkNMFXMrVYpGXkupmwuTCvcsMVMY9Y2TcJUbuwSwqhLNKvzsSouoFukxx33EW7kDicJh",
  "key25": "5sHchxE97qZbqE624b2xFFUhd1wFbN8Z8EUZNN8UWkq7KXNVQXhFXj4X2dYbN3hHRoG3ZTe8Nee2xNzvJ1wZmE1j",
  "key26": "2kLbuTp7Fabr6medXsoj7tHzd7FywbvmjLCHUvRxVuzjCsr1wkAnFDoYmLzLjYaVKHJgjrtJgjU7CiKFpc17TCmo",
  "key27": "3yYM9hNuXw1utHjVRFzH5Qb5BUH3w3ZtxtiTaoTgtc2Uvxdh6Ma5btWeaj8P9ayJfGXJ5k8GPqiyuuKi36c8osBX",
  "key28": "5eqbow4AV28LvHfRhwkQtJ4QYE6AqDSiwjpNTKz8BjH4KJBoowrPVAhHas1qLv66WbHRoVrKMPvi9RMEvkyCThMH",
  "key29": "3fEsfsrrGWFKaGwCrgzN2dm88Ju5oKCVu5Gq1buE2bdWwCdNUxVnHYQs4YVfxuopSyTqkJVS6tyxfDxSaz5vdsqV",
  "key30": "5KLsUZjFEfcYeu1b3Uepx423dDjV6NRBzbow69aRyBD5mnNAuZJgaMGyFHDqaE4JbxYzpAs6DfgFW8PUbUDQb6vj",
  "key31": "58FwhsxK5QKyBvPjmjR7FZ2aSAzmoK1bGMDHRzzDq48YXca2NW1iLJafsnovyzBzYmRuUSZCREE1fKRafxHy7BSQ",
  "key32": "5dWviQPYf4EeDXPXbCjj5YmBSgSZr1rmaH83oLKDVSobAztVFhWzvryuLsgwVWJNC6qoYPGqMKbFySZUNzmHt4o",
  "key33": "4P8UFfoESDJJKoM4ecNpuW1Zkhge6ehzkwbigur7qhMDAVSWSLCqGgwoHb9vkCUhnuVnwB1sm4vCKyurKMiNdsxF",
  "key34": "2c1JoEGWjVAwcPxcJs4g1AKPfeHvvsv8woiSPuw9WnVtFdN5v1nxyjdamyMGYQrYChSJzFRLDnKZbgxR4TqVbVB2"
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
