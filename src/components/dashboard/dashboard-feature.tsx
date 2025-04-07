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
    "3VSufBan4R1wGq4NvVvTPdkj8YJmVV2BcXbxtXkbEPqsKqfe5dTwNWafpf9F1N3uV2q21aWq2n3QMTnM2W8kkH1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rg63TKDXQJUctHuSWV1hRrMWoC1D7EmNMibKEmMFn135ngd2dfh1u2xGi1h3AJnXczJde4Givv8qvQWLCzH5LXG",
  "key1": "4jaTqisSZqjVobgp5NfXc39EntMk7Nbe4b9TRxw6xE8KAmEG7QrSVfxUy5KAcnoSoBJfvxahXZqVqoD2MWu7UA5E",
  "key2": "58UUwTo1HdDJSbbA3aZ2PAUt2a7M2DVD9JnjLyX4TXVBVvrXkAdVRs3wjDvrUPh7WhhMnXa7QxCukvadR3EBxJ8c",
  "key3": "PE8A9TqbcJXpEwZ24i2Js1aFwG8jKrqz1Byffy43ZrBaqqDkGQe1bxb4XUCDJfqDmvkYw9ia6ymB1B4JZyKTgkN",
  "key4": "3JMz32NHg2XemdYmZLr6kRWrduWKA2nsw51HxnRHkxH4QyFpyo7ubqVwJ2qHC8fVmZYMNpFp6PFGLx9nUFaEZ8P",
  "key5": "4cwWjMNvk5dL98UKRBjdtQ2CotPNsKxyBaG7BxEgVkz7u8R9xRyTSX3ZYDsgQsubYSgEe2fNyfFCH9nPb6cevBws",
  "key6": "3nhsoAEUp76cuse7drSV3ME4G54q7mj8FuDRm6d1yn7jqoMmiKJDTbN8yLuPdRbBTVoDCbGkDeDDZmsAQCNkeNLo",
  "key7": "3w4FbSQmduozaWQ6GF1gV8o82ykg9ttKgy59hkQbP9wFjCFkS7xLC8NJo4cce1qKHPJXFLJdCaNdhN5r7UkzNfsc",
  "key8": "3vNYPvzVmTwFRqAC9A8bM36KX9rDsLU6huBWF6UetrJ4MT8DR6qx3NS5fek2DinpN9J9ERqsaDjDiPzjPD5CJwdM",
  "key9": "5zt5gfc9QDCoub3sB898mC6iRFCssJpYkbrS2YJ9Wf1TFk64RnuswFvJXquXoxH4JmKARakYzDn17gRAR9Ryb4QV",
  "key10": "5gLtasfVSS4PRRteSwvohewvpZjDGtB3CYdRvbeWRxZmjMhv1HfvoqEk4u4xopqh5WyAmToeTcP5zyKBEV1HNy1Y",
  "key11": "5ecpgwZtj7gyjHZnUGb1ZL6EMYGnyvJQkZyCSHTpkzJneyXqNQHcxAtP9uXunQGLCP4toM8x8NivQCeG3v9LWaWk",
  "key12": "G1CE9brFtCEBKtfgKQEq1EZTaCRX3vfySBFnNQnx8DB2v76SD92iSrn1zCLcqyKqXpMc8GpC6RScux87p2YA2Zc",
  "key13": "4HWue9grsn7w6wmESdWHQ7NVgRddSeGbvGgGafWnq8mjfUB94Y8ZoiAMkTeNYvNmso9igCUXzbLcXLnFYXMd95Bf",
  "key14": "4QgguzLcvNcNzpoZo1Ni6V91F6kKe7wdsXJXZjib6PCvais7joFMfQrRodumMe451CFMybD81TcKDsxmB8LpmsxZ",
  "key15": "RM7HHRb6SfpJkB1MSsU1PCvWZcAhmmVc6hxn2kcWciHYyzDc4TPVzpqHWDcUHJPhEprfqSCyjxaoS6SyXeJJknX",
  "key16": "336ActFxWEr2SmKKD5rRFxvsxfHYPXvUXoi8hZfnFVmEDJG93nNnzPNRC8TdVPXZ6Mr9asWAL5RNhF8oJrBCnPF5",
  "key17": "4ce872baQ1somnbAmCW1wSnSRJvMkRhhj1bNMgcU7AfsfoMas42sJAkhfTLVRBKz4ERJsuzRgyFQFZbHgd8YboT3",
  "key18": "5vQi91oTcFiJJE95CJSDmXZJDpAfWkeVBquTbj8rRBX89Skza5N9gEGcxdbDiQ5wJ6pvVUGnqjdgroybRhutzrQw",
  "key19": "5aNP5C6e7cotz5Ea1uBSEFQ2Wbbrug23eMj8hkrGNxD1pWdtr5q4ifwVWZf9EzcMJF3zyoQQUdKe3Ecrz6msuqw2",
  "key20": "588H7hRyRNWi4ZKKL1Db3mRtN5NaC3gK1zgsUxAAH1pfZUdHybfybpPyfNhaxGU46nbaedvn6yZ655FcJvQ1xZWr",
  "key21": "4pgLaTN8P7dd8Jxw4YEBgYtKYcWwz5wYA3tp6Na5AE6mktdX4mVHURx2Lkhzv5WJZuzFj2QigVWT85Sa1n1vSQp",
  "key22": "4LBXFv1qnjyd46WqVEUj5YnEyoMjrQfkrMjB7YTZWkc8vuw21Q9Z3n4rMCyJV5Ts8f28NpExpJVu2qYv8kVYUZRn",
  "key23": "4QozQSCBRMZVkxBnBnPSxRLSfo5yT7z2Hqcw1Zgu7cM8JRnMHmXpWde7kztSfwMswmbaD6wnVRLrQ6tt5Dm6cuyq",
  "key24": "Fh8j98FYpyW8maaBRk3XYTf4RfhQcNZvVicWGkrRziC2JPxFbfsnp6WKF2WwKFTskQcKfjvB5ts9uHHDNC1Dgiz",
  "key25": "GWenaNK1eAFbSwCGqABucd3hW4obx4rBUPYzCsHH4LwwLeS31ezTpfFF4SCLHAsPwonkJjbNtNXBYy7byrAyXTX",
  "key26": "TihQp2qKQz2d9eaNZHC2nyJ7VRNKvUAcMfX38y5Ph1zggD2sHiGoPvi76CHQxeY2Bn38ML7KcEXLyNzrmRZNTHj",
  "key27": "4v84jYps5DiKJJxAQbWcTTgftFiVFDQTEVLNA2byjVYFhu153EFffVoRpCWsyCcgdy4gnYXdMtM6DKwwWsejRgtc",
  "key28": "3rH6BrHnBn8qKWnUfbfjyw7AZv2uQ8nUi2JcAbmFuXyd7LiMeZpV4W6UE37B79a3z4dKmqVKrBrs3s7iqzg9QxjY",
  "key29": "2Kw4n5NexiDHe4iynSxwc9TjJ2KGHJ1XboHfrXhrz572aHnNu44VADVPr3jLvE1heeeCcCpCEendMurAQRSdbDL2",
  "key30": "4FLwKfbGqMBNT5haoUh7oPtKwUF8SgqLE3GQ3JoAgVRpjQgMX3rVXJEJfmAVZxw36z6dZ1oLNYwDmxcXhpQGCgtR",
  "key31": "45gwA5fLYjtCktPHui3hhY4BH3JERoPsirLj33Uec4AXjykHJYPFVJS3LZtZafKxMcL28TWPkrt9gpLg8byFoqRU",
  "key32": "NCj5EQvGkDbdTXDYi9QiFvDBRN8T6ewLDJxyGaWoMAnMRJDesCARF6KddSPLHQMidPh6Y8z52bj1rQGkx3qR5si",
  "key33": "25wTm79uuBw7K8CsAydfAS8uxW7o44aTjQwB8r4bT9ipFnLxf1GqbPNeZmWawGEVqVgA2b6b6bcK8zRyFhUsh1VH",
  "key34": "5zgcJqsnDEmnbAubWZwDSWEqHC1k7AQ1sUdv45XBxzRJh3NGpsMzbrEEaZ8D5snMnxRALJ8eSn1jU61dS9eVMEZC",
  "key35": "4cyfMEkmwLqHpW7wwSkTYgifyapmA5Ts1SKC5idJptVBSm8bxTo7Pjr18m2WiJJcteBzL3pa8sKBZPhPkA2XsSDF",
  "key36": "5r6hPvY6mkFdwfT6qjaxF8Sg9Nqhy6KFmwwigXzWSFBk8NvyXSEQ1wdoi6YtenKF8iSkLrktDH88p87S3ZCUt9QQ",
  "key37": "4URGHRBoJ3jEvN2kNxBjSVSniEdZt2yxDEXefGjok84xhp7YUcENQGZmmMZaVodWiSmihcJUjeC7N2THBHWx3cNj",
  "key38": "4KV8AjVbN9cissva38sEUkv9tcaSiJGx5Kban7GrQdAr3PEbS8oT6M261XZUBL6HqtVjtP8F3FHvaMaw2TAPV5SZ",
  "key39": "DBnbfxeARaiZor4ewp7ZCPMZzq3k9zHWYKUjf9higpMScxwmaDE1rKyZt8iqejPyqmrSTsAnAReWgWt9WDoKrdP",
  "key40": "4gR5tv9FZvLDaytLz6paWGnkSgQzS5PdsiNfjBZeCvciSpVMKMzbHe6cmZNAKUL6wcRPPS4Bqr72pFDMJukWcN19",
  "key41": "4sDJfcM652Q4aZrosK8MSVzhdpuPyEUgqUKyzkY2LeYTGEXYyjsYuJRQphVyqPEtrW6c4fUUJ7XF26UqFeHUaLHZ",
  "key42": "5Uk11xNZedkvsynnxjvDCQxB74HsEH78rbo7PBr9bfDv3sSkxnWm3Fsa36UMraDEcUft5pvPf3RLys1qUbvcgyja",
  "key43": "5STYxfcuCKGtbGsmVgcTkB766wdfAsPrXqujWB11ukq85T4YEAaWLNmDb7xjL4Tu1L5J4VQntQGjCKpDMnKHKuEK",
  "key44": "qJzVUQRLgUXydBBHLYByx3vkmzg3QSh9W5DCtMWyEU7j6ULTHA1JvwdKTEqNbfHCthR2E8bjta6NxC7M7xXsG5B",
  "key45": "Qv9FVs8tofMyMrJHqfe1F1yscKsktw9DmdZSRMJ1Bv7uA2HKE3Cu5v4W1LCmRj3RFmTAh2VMGYvkwL88Y9XfW3z"
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
