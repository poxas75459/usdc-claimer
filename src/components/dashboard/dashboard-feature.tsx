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
    "4j34sf54nvCrycqzT7CxN5LzbUvoHEESvNrtqWz835YLbHH2xrdh616eXpRfNGodLbKrPe7VTHJxSMCcP91CEpmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gy5dGgJz2Wg6sZjeGQjQn38B6Xz26d7bE475sAsLeqqYteKNJeNkgxshKq1GPG5LvoUSMut5e6u6JQebUaZWxzK",
  "key1": "67NAagFix9SJ4MyYccGfwQPyvcSMXgwNhPyvG5pgJx4FTcvHC3Mc6STnHNxtbaYswTStV3omGoz4VLdQc7qAbcRN",
  "key2": "2twgw7QG62q6NqhRoFo22KyRsV1evxu93iLcDKDQ6FZ6im43SpJkTBbonjc8tFUejqvezcbtZBxpsnwNuJRmKs52",
  "key3": "4ESZPkDG7nXzEVFNnFpQWxokcD9cQZGP8vpiHHusxKnq8cmG6KPG3wvKDBECo4FHE3ScroiYaAtg7f4VSFXUuCGv",
  "key4": "5gHz4AQ3DRJcXsVGQRZAF5LrPsb9qeBiGfbnga5yqboWDnobwKnoSnuGzgu5TReMQbBZg3ZKAu8VPHU6ZJK5rDtL",
  "key5": "3c1TjtFuFdUdtRkoQkuuSnYRjNyhrqQKX5sS8iwoRihEZeLJBzNcNDJmDr6y1CWTvHYfW4rua9Rte9cZzuZSCDiv",
  "key6": "2zSucTptEMrKHBKXL8QZjpAWMwjkJje34EGSgMX17eBDAbNs28ABFECjjK1y9H2xiLNc1cbxdUHRexhvBqGsomq7",
  "key7": "4ujLzxoAcHTfhnREanVHXCUBQn22vqsY5oqXQEhyjVgmqoVMj8m78WXun3dETkun2wHPFNf2JMJQFpT15xZo3GQM",
  "key8": "QUAMm7KcGDSd2CwtKuZtgGnUZj2KHF2JTwXWFUVza4PDN8hHZBmATeTe1iGYX1m6CYkoee5DxRoX8M6sj1oiujG",
  "key9": "4MnA6kpmEceGPYxgE1VvC343ZdAF2DRQNYRnXX6qTY3bdTHtxL4yGs4bVGx6d1bcUBszT7mrn1QzYLbxBCLHQdxW",
  "key10": "32TriiiXz2Xwu6NaVNRyeYEaZ7nShxKDzpQJgEk7hUZJQ8neWWhFUHMy2oFyLe68ZwJaCWDaTSjdXPzMQbCiaWS",
  "key11": "5jjVpJxdntbHmLioKrPYZXLo3ng6sT3DQYMd7Ggp6wtKHBTQcFeT3GuTthYAKAzibiesoHnGWdfFKdSKM3Ma22BR",
  "key12": "pNvRtuMgJHR4ti66iZNfveQzh47AKAWVbYYHP3iMzAgeq7C213tkzQdpAd6EZs3rjs6P7Ao1acmtJx77RA8JkhV",
  "key13": "5c6MVbYbMVuw1AL9NS4P7KN98xp6ccWQDnQpEdtdvFFfArXimJuzs1N2JddX2M8C5k8L5YdSKRAgreGAKo8Pksiv",
  "key14": "63Cbdoysn1WKJqmSB6kWCFduBuxHj1DWqAP2n7f8RjxmL1AFsWHr5tSnHaZ7VmvdBgs1jq6tbvnQj6Py4M6hNqza",
  "key15": "LJkvkjkB43V3pdBNkW3SMyX1nyTpFz2u8G5eDodXksg3n1KFi8QEyuQG3tBLkF219Etj4H1Yr1R2JpwNnk7b2Yf",
  "key16": "3saBUgm3HBZAv12hZ7mJoymA7UNCC3yPXfwYRQ4L2xjvUZvgapccrNx96gxpCkn7n25GPymD9rBT9a7Zp692uJ1F",
  "key17": "5TPrDYjUjF854KQxTFaMezCfCPwzJHMqaZC8yv2o9ypMcERgpaUw2Ka9hYzQJhH8Mvsnfv6KHTL2x39uMrmSr6or",
  "key18": "5FSfzvM7w3TVUhAaX1DM9H7jR9pRLT33jk1nBoUqFiVuJnJ4VdAcHfWKxeBDuEuXtwhYYrHNV2faZdW9kqbFcCXZ",
  "key19": "62fGAFsHWdJpincdCHDx2P6ZoGheN15QqVvQ5Bcf4nh89S6oqwdVcSKHAvricu7TgTsrLNFqd9UZ3cNiLHTX3Geo",
  "key20": "YBq6iTZLSzKAbirYSoVABxyjhjFMMtUvr6mNgrxExHQNfuvkCckX8WNyPocRysZDQxV7seymcrczzbEB6nDGmYc",
  "key21": "64qMSTGUCBjkpwQ146Mcd5uJote9vJtp2X1SxfhYUNRHrXPi8NYysTKEc5yqQ98xuFMqFe2mAr8q3yk44DpdDrSR",
  "key22": "4Ak5p4fMnq3BjUGT9BNcNuvyrUdGbcs3XMe4VVKWB2VTu74KvyYjX8ZUijQroLkmWykiF7f55pPBeLX2cTVT1Qrd",
  "key23": "2cFbJkvSHTqTQTarTSwadXT8KFHTxbubmoaPR1b5dzvwsyb5eNiekgudwpPeDe7DbVyJVGqsJjAgPLHVmVX7PPqj",
  "key24": "3yQjx65MRq1eh3RqfhDYZNNydr4zuC9CuxHZMPdb7RNdcPDmeHfEH8vAWxgYGHZn3UstcuApRggVKDSEFX1jkpP3",
  "key25": "3pAYTBgT6vuZHrpbpTX8R3deEJvk6jjAybnn3eksqFKZ56Zd1nS345phnCXLGkmigLErNFDj8khLkvGiYuczc27U",
  "key26": "4hs3xhFEEiGux3mfLFAvPAVMFz6JKBYz8esXCsVR6iVGWaZwpZ1YLPqJs5Awk8tThYGCA6b62PyCkyZ713s3zkdi",
  "key27": "3aRvs32YX5oiwBriZAn9AbhWzp76UVdoYrVcawP2BM6wAWeHVtMSVHgqHo8H9TTRdFXETH6UmjBpMUKwbyNWp1YX",
  "key28": "4P9suixrqya3XNWw7NvQVTZ88ALmPoN8ETsmgTRpAAmhbyJvVPeMdDZJDkL3GU7kwtKN6jbXAdP46d6WRT8syNtU",
  "key29": "33ixmXfDaNk986vAkRJofQzABTK2Wh4cqQt1FhU9trH6xd9eoPvsE9LtERhDz9rHCo6fF9Z2kJ6tujThHxwNuYwh",
  "key30": "4beLLrWGicb3EBjVAYrWEfTfJDVNJYaUTT1RnVQjrk2XLYjQZNrJE2wBrAftwqWbihwtnqnNVfoepH3U3VNowsuS",
  "key31": "FBKv9T8Ju3e12fmMRdL8azmMKXZNXE9BmaZW1ueU6mY1twSXKq1E1fEuMdiKS7WCVYMb6JTKtq9FZxBrWDbzfF1"
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
