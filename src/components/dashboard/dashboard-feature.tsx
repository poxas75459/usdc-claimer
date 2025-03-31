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
    "32XrtjVYY18ZcM8CvPPG2KQTWZBgfEeV2DiHXsNHuvD1qHAwaxkYNm4vYdkG19xMxeu1Gk4yWeG8ApUsBekSYpsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jbjtXJzKmtmBCKR7PhrxBrwundPNtv1y7GBypLgxRRfMFjAE4dTQTJMdPhD4myeWccF5dKwsREMP38EryWmy54a",
  "key1": "jMBZRaVdyanKe7dFzZKbTjxuBoP3VKJQ43t5KHofFZGEf25241mNEZGVeUKErpgUUf7E151Acrf8EUQpSQd58aC",
  "key2": "ACjCh3uAyMSccKE6qFrbNmwGjx7F6YN6oiFum9PxEgvmoP79TCTY4b21MBPbM4BdcRPR2E3JtRx5JosREMasxNG",
  "key3": "62Wv1TKg5L5ocScoLdYJiZiEBxRqpUTEN5ZuFGLBGcrEyXtyouU11TqWedUw5QukEVbVVjfGT7eqgbCK6FanaRTo",
  "key4": "xHa65N8dgpktjL7use6qYwyiV7vz5sgBp6ZXc6iZgzmqNpPbqmn9yt7WGnPf3rhMtNUud8Gd2mi5gxWgCXEFQRy",
  "key5": "Gsanxjdwq7i974kkCm7WZrZmbyPgNYUF4bUwHDTjPQ8dCGuRQ7PjAoF9YwgtPvw86BGAKAhPdF5vnhcPqeUjE1q",
  "key6": "3Ne3afCL2dLcss4ojZoBKANHCNAf6KMumiuPcccsghTkeq39jn95gEk92PsEjCQxG6WtGoY8JnRBTDie33BaqNV5",
  "key7": "4Ds1UqaGnQHruVBU14J7y81wPN4VMoF1pF6D1te7ZvDmMbDrzodApCD991LjzJdVc9vXs6HWw9Ct67R3azXJ2drB",
  "key8": "5jZ5eUaeZsoXfTiPFLJkhRBrscYh5tSToXhcW8AjdPy2CnTyAg2SBhcsGp4S6bbY5Qjqk3Xdp7nwNvvG1KdzjWZA",
  "key9": "2iapPrkX5aCRbzMz1QYqdxWq2b5KVW6j5M8yBtswNiArhdSk2PuBEPA8eDRe1op6ANsCVWg74bgDwVTwTuz7UNo2",
  "key10": "4NzxFLDFQhGmKQN8RAzHnjqTXQ2doUC4qoY1aqF2XEtJFwTpo8aH3kWCYHHwU15m9KAwNshE4957mLVnMgegqzwk",
  "key11": "4wnUDuCG88zcq6mSWRDgEPaZXaqx2Z39eKr76MavNmKiYfd7KhPoJMiHbjwAN58MYGPzsq8AY7vRP6n5u555MJJR",
  "key12": "49Uh8SCh331BohHjnoPJGzoTiuxqwY6BSY5iBq9mAeajX4jcLDQ2m7Vs3uFX6iADexLFbqwkaEfjRrcTZUKPatt2",
  "key13": "2YTn47wzdtfF2ECVXByADgj8f1ptf8P5CVCjisJZMyjjVKXYgqrwh4vdyNd7egeyPmwSMz6AXMeXkzzs4gZAR2Z",
  "key14": "363rQnzENdw5c1pkX7kJDqJcUHoJD2GzMCPfAKfjVmZaQ5GKPi8irLcSb4MFJSWcp7usbwnm8ARriKLijegk1ynj",
  "key15": "5QK8xHp2tBSfBRENK7jmZkcDf4YkSLzxiWJdQLw3bMXYywAhXhv8636bZAvcdqNt2PprnJgeQgxbBjA1trXMQG72",
  "key16": "2vpdVrAwYGYtAkzLxh9FJ47btREKawMnFyUvBQ1x2DCASADAKCBSpXVb9JEk1jmLawWBNtVdLhvJzMiUhD8BmzDZ",
  "key17": "3Qkh7SRgpvmU3MZJYAMNPYooP8PBT8mNj4heVKiKw9Q1HU25AzRTarvhFY4MQBEtSAQcCBd6mCK5HMMsaAA4MJUb",
  "key18": "676eoX1hJv9mWX2kF6Hz6EehJBRgDNMJPKGWwPZgJ6jz4FsogyeMfYULbW5UQ6UfMLCWDr8iR2fRDPCD66kYZw8S",
  "key19": "67HT6Hoxi7qbdPbwdtuTiphQoxCKiF4vK1xt8sPWRYKtHnhyqY6DQqirPq7PQLyP4SUuapfeaWmH3g8MSTetW6jb",
  "key20": "2HxAXBCXyKVThbaHkVdN2qs8g3C3iVTZ2c3PKAAz38fD8GtL5rM2jiphhm9BLnPBFgvBb5DDC3Zpod6hTGEGV8yi",
  "key21": "5acmBFoGpej3bNGVCgH94x9Y6jMWhjz5sHNcuo12RMxGtaE75NPaJmanNA6ESuDK9jCXjQhZUVpVJge7M73Ladm3",
  "key22": "67eVZoHRp9LeCDyg6qC7MbVvucgMEDewBm4z9XHYjFU93JM3PZjcdJrddXr7ymWhwwPQKpSByBEAgqrmgcGrjWeY",
  "key23": "4RZeJsNAGnDhSYqG1rGoVbHJnHoDXrEmVo5D5GSgypNLi2P9usUpPXyv5Cfm8yQVX8kTdUQCMMzgVC8ztGgKg7vb",
  "key24": "2M6P5LUs8TRrfYxFif5L6CzEcNPUkThZ6REVpZ2j5x4w78uh72RWcgNfFgXnoHUQLJeSxMBG4yny3YTS2P2mvgLi",
  "key25": "3S6Js9ivfrfyBv6GXPi5Pqg8JLASXX4LLd5CYGwnjTGQnFrNCqd8dxicu4ZaaGjtB9oKTDWw1s9gmhCQ99Gjz2RX",
  "key26": "24nR3Lm1G8TzMzjm4GCEQw6ybhot5Gwa1oXNFsHGrHUzzYBuU7SXGWrbpuYgtfScKq2GbSe8snS9EGFnN2aXrXov",
  "key27": "2muWFr1cE3FKA4DB5Fp1jdRCD4taKgzVrWv5kwEpuyiU89FdDMZ6VK3gv5N7PwFugWWzwkmcH8JgAR8CHgkUaH6C",
  "key28": "2kG9zmjd9ciwgdv9AWdDXF4cvGMJeLuwkXF4zS9WmdBXr8P9wKQz9JZqmhTfEsZr31kR4CZYZtkJqL989igYfSkk",
  "key29": "5Lzgi5ybTN4257NRjy3DSMaEHjVgAbwGFkFeXY5qc2PzkfEVHKyLAZT4gLmucGhgNp5Bs4Ck546JPiHToDf8B1Qn",
  "key30": "62ZtrfmrGKzG93LYuhZRdjHF9zRJwfBatCzLXKTrkBTCL5jb7KB8Zqed4EpAQQYfYNsuxG76ZaL8xZd4BYibmi4v",
  "key31": "5RmVJobqTePxwoTZnBG738oc3T1ZVaRhHwao3Np3Q6PDrezpYQJuZtdEPQfWzcaWTiDtQS9DNNwPqXzhTRdbnzXo",
  "key32": "VqkJQ1qMKtbCak5kKbsMpuzJ6rpomRwf3DheHA7gmCtZ9b1355vSV71RSR44YSM2xAUvz9TAE4drWAfsAd5JCRz",
  "key33": "PEX43AxN269emkAVyDxq2BvVZ5egakeRTDfmEXp24FZm2LJdhVUGAYQQp3XRAeYLxJiT7uMCoTnwbk9sNoH2FBq",
  "key34": "2inEjjLwafwerwCbzBLTgTDqYwn444uU8tAU156tX3KiF9izavz5o7VXipAE73q8NX2efGMy3nYnbJFYkJc8utUR",
  "key35": "2Z7f6cefc7hd2QERTiChYVsQg8euy2AVh1CLMhFxXEQYysoPytXFYpVwDBe9xRsdpcjx4S6hSpVcaKnFjPiFA3LW",
  "key36": "49mK2Rfje1HCevbebchd1SREDkyWcz4oDsSwM4aXZe8tFER29JBmzwHYEhQJbCPVGybiSezSQdLbLaBFxo6Cxw9K",
  "key37": "2S2erRmtBpkvAyNXEJzbVFJ574545cqetqMKYeAFyiR2eUGCbMRLb3XiL5eojtY2XPzPn5Ro2LUvra9pfUpgaKEe",
  "key38": "4Nm3WtbsSAjZsUxUa4JFFLRZFC6kJgdczFWeo5yH7qsexw8Vrv7DKge1i8ky1GWcmVhJFbaKA3nBPkR3SmaZhFL7",
  "key39": "z4y5b2YsXQfTG69t2utNDCLaSYh7PoWA2NQDPmhyzeM94Hjfcxs2EBkpDtvxqY9e8mzmvGCAsVAsqUNsZiRYPqd",
  "key40": "U4g6fvGjBtoa7aJzqCHW7RdpEboAPsu29jYRU1nHzXawxSabVRNQqqkecrrh5Pv85rZd5bqVfs9TVSUt8o19umm",
  "key41": "3ASFs2QTeeDiWx6wabpX9EwGfRBURMcxNr3qFoPSJ1dHmw7UmiFFJqFerKZv691Qn212rgJ67CoLEnfG9hpXT1Ck",
  "key42": "2MZFAXZ9dxP9YEKwFoCDLXjRiXJDBa3kMuAecGVWbeGeH5iNNAvLd6X7TcaXeRKuzanDqtz7RXY6bf3Q5VD9ynNk",
  "key43": "Hx8iRsYGSDrwjj4v4ummBB5CH2TGnSXH6fms17Kc2Xiy9LCCnyFgoPMxUgnxapoMKDBJwoVG1bGgvkKoZt5BsZZ"
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
