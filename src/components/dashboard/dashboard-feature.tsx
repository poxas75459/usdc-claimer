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
    "3r3QXbdkdwbh96ZrFynta1zoC1ErXzu2i6nM8wTKCfCcZyS7vXGfzW3Zt2HbKHBY7njdFmJgybagiUSPNtf6yjYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JWZSc5DifAmZtmTTt3bmWXaYAwS7Yfx9N5jJzmm6i29LQXirQwp7mApdXzQqUaK9R7SVNuu9R283EW2Uq8174tk",
  "key1": "5TfQFyv4AT5AhqWGdbqmsmNw8vtz2V1Z51N76f6wdjjZLFQtrKmW3ojpr51eLBvEqdUfUUt8PjPeiYetC7iig1Aw",
  "key2": "58pndquUnzd92RT69SkaJBVGeFTnBiszGbJ4c9pgye97xsJHiREejptwp8beVhFzLpCoE9k1qugiJBqfeEQdFc7X",
  "key3": "38J9KeFHZ4F1FbopM4v4RWZ91KFHkPrtw4BnJ6VCHS67yFSTA3TFMbQLTAPGmDCkEGdHZ9iXTZ67NN6AGzuW45XX",
  "key4": "K8beKMxrRVT12MSjQGN1xG71hSHmRRJa16NEsufad7bTMneRCssTY2btdwWjmT5V2Q91L3ZEeACeecfFQYse49T",
  "key5": "5KJ2jS8uoTmStH9DnrUiXu17K4q6mZPpLCGWoLr4pnr2zNcqCsnxydRPGS7yo9dYJAz98SBpyjvGW8o9uSw1MEFR",
  "key6": "4gJnRTHYBKLU1hBxrPcwLbWtfn1VLbZZBuF1FyBNKHemd6DCKcFyK6KGSBV8pXbi2KJRRg1rcUDqRceyCnpveDtE",
  "key7": "37xgZqwrP5RxyzbXiQfqhyg9Jd4FVZcZjB8swoSvqgQNxrdpu3WxJN9fpAZ6j4db7NUvjNEAYhwcwKXiu27GrVT8",
  "key8": "3483QPdJamffYzJXoda9oSDtExxhrhZTyjdiXMZbfuvrzrdaPE7cj4Lkiq5mMdA2dN8hNRTNX3T4YcgwS5MB7uV1",
  "key9": "3bW4eSizZMeLcFNux3vPgLRXBgg8SQm4JureWD8wcRi8zSqyzWASfTttZVVj8HUxxamV7dqGHCGFjbCRG3VT1XNu",
  "key10": "4DZfZZBZKzN4qKXaMrNuxuotZG1WMW6jj4LGvudzghQW18NDaWFdxxRz4hJe7hLP672TY467JQBmiX5P7xbSWok7",
  "key11": "4E4ufyEVBCdHATbxVukWKAqtUfuScbqTYWzXS13swPGaxEaXChBQMfVMYUFYoutMxtXNe7ErRzAYkq95oBQyp4Jw",
  "key12": "53HouLuw1AAWJ8Ep9oWWJSXjCYq93UjS74bzD3zYdz4auev5uK9q22Ui2otRGoPQKVe265TDp3ZURubeKeVxuGyv",
  "key13": "37ipRizXAs81W3FMvvgH2PRYFQsDUGyz8AyxwrE7Tax831QVZ53dBHKD7LssENYs8nYGpD5Y7ijm1v2YkRUZj4oA",
  "key14": "4s7hZPMLNjqsUYJqYth1tXBex7SeP6BwmD6yh53wZ7E23Dc4P33tuhkLAAdNMS4B4XmJT8bjBW1ynJgDopqG5jQ4",
  "key15": "2A2Pc8f1pwgqVBUgQtdXRZggyARhTVgFM9b3gJ2nMm4aqXD4VSRMU8Ea8d6PAAKqbVRVjEYT2JxrTfhwqJdcBCvp",
  "key16": "3RQAd8U8X4HoEwGKqf2mm8XLwskiSaSME2MqtNsSFaH1sVWBfr1WReaq7cEsyWSbC9r3agmvhyuHepqrPWiHaRY9",
  "key17": "4MnShU2w81C2cz3zGnVFbLC3R97c25GsNnd9uQir7Bt7nxnjZ4QRSjpVwwQZJGs6WqYPGD5xSrnqpW7VUk7SVJyc",
  "key18": "5yQD6w95VjB5UPdrcKiRGaDojgwxduJdrEZ7DHa7Pgi47tS8c3nPNckMxM14xZZQ5tLRqorQZydfQYG9TCKfdC8z",
  "key19": "3BF4LrGu1T13Fwd6BW24xXBG1UH5SzuXxZUL8uNCJNL4rypXyDZnSkJDKcRB2zYpc3VUmcfdCSR9VynUtZptLJXo",
  "key20": "3TfgRJxJy89PJptL1myghBKKrNx8eZR8dXWnrTxkXrUBramwsexXz47jx1r8G45o94LDuSf3AwRUy2GJL2wr1oWB",
  "key21": "3xSrPXVmDdPYhxAGnbCLKXD4p4nZRxx5sWr8uepXzcdBxxZQcjY6YifiJBRcbo85WLTtcnurygKHWTU5ZTWB5Avo",
  "key22": "3tzBNkT2oUAMmnvqgBxpZeWSzczyXmZHuAGF1Do51LyJwrXVXeJFcVW8q85Y2NE9JAxzkfDv2EWFELe7JaiVAz8n",
  "key23": "2m3hq9qAHMJmArna7sU5ABeWeRcmUj1aytZ4FPB5eDwv4kWo7ByfjkJ7KPynngX2SSuEFEaLg95RUDpF5AF4FPbP",
  "key24": "4nCTQxakrUfBg71bm9PADZ8pBaw2tWKtYYq8Yg19pjYs1gZ8umXEmRwC4nuhgTaeLXNVSYDWZ917XUaEfxiYM9Uk",
  "key25": "3gHk4pbVAFTj5LFDaYfwEkNJXLcqGHBeZ3JwGzoeu9nMoRv4pMgXFjGk4FynSuaSq6XgukR5oVNM9bAyjinNxRNx",
  "key26": "34m2oqvza3kReVBgnvSgDh8AXoUbcTMmvjokmjesssaMbS5AQEE1J6GFhJ4PCBdgx2m3jZKS2yYn5ZDe3NtMfunh",
  "key27": "UaxQcdk2ndJGfAdYQ67JXJJmb3BwdzE7qhUVFqQyiuiQ4Zz4p5fyGiuBg6LdPTGWDGyA5CZFb2bmkCRx2AywmNo",
  "key28": "49vH3e7zrAKUW1m9FNXYyWtLRv2gqTq4sxfUqHCs9Nfcpd6RVTjQNivxtyX7b8STpAuWVBCQsiXXVp7JvKd7twqZ",
  "key29": "4QcMBMXdoyS2VUpxmNL3SwAikZxKhCNGwGk6pyeMMeV8Vk1hKmJip4P19zcEqVontNUZV9WUHHu7jS9x7PmWKfrL",
  "key30": "5DgtrDFE5yTDBuKHjf1GDow4WDhXf2yvdqhxDjyaRMb2NZTrLWW4bmLWY9X7jjvxLYsQaT5HAZPyW5DaxxsLtdTU",
  "key31": "3bNppNWpzpMHJ4KpW3eb7uJxyMskPMSaXqDWQFVKcReSaLKPqeFeGKmWufUU1x4DQTvuQopGjnPXadkCXwubsxcF",
  "key32": "4hYBYb3qA8Rf8ekJpMgTdzMRZBKWSMcKNXVnxEq19gQD8b9dTDUsTygDmwZ6hXKyaZg2DSzZKYUPTKAafmEEJ4vN",
  "key33": "3myGtqhi2pQFMgEjtzH9gi89Nu7XNcditk1jL47iGPWqzkV3b1GK78T231gVUyo9WDKkdH6RYLSGMtT5yFV3azx2",
  "key34": "5FRQnG1WBBnEi6tF8kEyZX6jKF8zDbt74mfCbshjdhyxARaufpBLLuGbRyYzcUeGDqJL646J7bpd5yEW43QtLNX4"
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
