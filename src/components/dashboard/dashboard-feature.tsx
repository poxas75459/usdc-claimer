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
    "3ooyKoerPq6WuyF39DPNdUUnNR1dqTb6Zj4U6ypzVWPDsEfvF4NfQ16Yn1AWG16N5aZUQ7rVcyvNUizNXRgovTG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WcCrNiXpi4PMVbgcHDRcLDDPigcZNLvt8crLqJZh8dhjqcAQx73Ks5oqoyoUeEciwnJtnZCGyu9yBiQvsd3weNS",
  "key1": "2mZxQ4PNGUQPdRA8KpWxRmeLgrNtdFDcQXcoKx98vGmahoLEzMQVkhYQZrnEhaCNmrERt5yFtqFJuYn6vS8ETuju",
  "key2": "2LQ726LT68V5AntGQMLY9HZ28adUgbcGyT1k78TbJmn3SFZ5RePiztZ2gtn7VsnTymN7EK1f1B5ApP5S9h2voMeU",
  "key3": "5RrbzDuhpur6DmkMSS1xyC7ZQrni2r68bM4e8USgKy8fY8nxkp3iwtxU18QAQ2m7Mk25RWCfVvsAAPJ3gsANrcJw",
  "key4": "2PhzsH59EmkMyP4zmWauNyCzkfJnXJ6adtGV5H3fnkJu8ofc7YktTbQxXhetMynGQvrsQXwenzKFwu3ioktwRbJo",
  "key5": "waaFVtAADqLyjSzuoKgCnN5HVNcLnFKxSwBGqKboWouZMoAdF6BmEsKDwnzNsdCZZFE1SKS7b3Uxa8NE7mw3w3U",
  "key6": "2Zcr3NWNyWi85hEiiKUauUsrBeRn3drxg5oVTQDFcdqwfG8VXL1Z82fUhPqnzw4vGKwcqSzwp148smKYP61ZP5Wu",
  "key7": "1Kbm8sGYArjFjiLepk5USQYbXeLxbC16WCztZhWXkE3RMr11BzsNYPow9kEiAJpK4WG6kvjoQ5yTiaL5RuzsdoH",
  "key8": "2422unQ2medASpjKGvguvQ18BQjHtddK3DrrdYpRs3VKjtaGVAp5L7T3uZv7mLHHH7BCQCNVYRpDh2vjsrYKGZZS",
  "key9": "22mHdBa9V4QCdHDuUGxbWYa88kJykwmwWB13iwpGgr3yUXo6FsLDg3Lb9b53K5SZWF4BLdymgrWcnWLqGYQF8kqG",
  "key10": "5D9DdTT1SG9fGUMFGXR129ueVbsm7HXZ8MQZdofxMpGjSXrUy3Yt7zc2yXfFDRiqu224Y5ciAxdAixmXc6xmaw46",
  "key11": "3EYBpjftc6VmaWVy4hEg2hG1swxHzHu2DTvhK2CHkqyrZJkzB5sRuoZP28ye8EypcyidgEGY9xWE5q8UtLZmFP6f",
  "key12": "3rrapcBpjLS7SbVpratALHoooWhxdfobJAVBaXqMiyeBrCan6VijrU2AjPybG6uhFSrQ5RQezouTFLWjcKco99LU",
  "key13": "2AAUshRmmtASsG2SUyLai54xgoeQnqDDMS1GfSGDtFQP6Xd7tdBy1RP8sXrCpqZMRSwxxtDvHcNDeosNb1oZoW6h",
  "key14": "29s4XZaE1nR9N7e4PegNMU2eVbAEquhXBCdMrP8omKbuMo7xjagqdpk39EKTkZjEWn7GPEwmNATTzgBjeVRczHyZ",
  "key15": "3bfLJh5ua4JAJx5eDrvTiZZDE1nTWW8Lx5W4s6ge7cfkT4VZCPrwmaLz8UGmuYigZHy3ZnSthxvgqVAzfVEsEK5P",
  "key16": "GDxuSrGV7it7csABqQ2waDhYoJdn3o3uegTY8jbnVrRrPLXCqr6xjL3HBcJbv9HWfQgRHGgSg3k1uTsBYnWufhC",
  "key17": "2PJr1chm2AgHGUATzad8RtfpBYXP2GvLcHanopdzJsKiHCeQm4zfDabs7agHiX5rbzzoTsYMBzkxqH3LvELmwUD4",
  "key18": "5fbTKe1vcE5YB9VXETHp8syDbR6jRuHfLgurPrjt2kVR3sekvmXnR2BxjMW3XT2WnmsuZ7zuh5gQuLJPkakDkmPG",
  "key19": "2F898VcsaHpYtdHmMT3FzY6CG3jf8mw8K1LFte8P8RoqgRb7SpDEzSF3JwxRC1EKJdMJHJNwT42CVd28kBvHA8jy",
  "key20": "2BVvbwF8yCFWejqZPomS2EjS1SrKwE1yDeb5VnfpqfY2vzdYeC4fqocfp8RV6hwowyi4zU2nqFVSnrqy4o8UPxLh",
  "key21": "3Ke7o128TGe4JWh7TfRP9mk8UaoKdy5D45E99YPDfW8EgE2UBqUpWDoD7CmpioGCZyMec9LumytXEmwLaBCbh1hA",
  "key22": "5cw5XRkJAJqc1xfshgPVwhqFozZYCmmrY56GeXtEvWR78PScNqfcrRvCkKdgH1G8hgnfGFdNHWBhanAhBCKD8nAm",
  "key23": "58Z4TmAMeFMyM3hrHH4V7jSdZaD6z2ejjTsFioV6kriM94kTspXdZUn2r5uJo9xvWwHP8dRDgMgpi4dW7kbAhZQ",
  "key24": "tZQ4iFswrfs5R7tECTqrZqDG2NFB6pyGx28mUxA7awKWR1owoo1evrR7zpEtmjigfRWKdZDvYSvkuGyHWXvDAMj",
  "key25": "5LiPVqDVyLF11pg3RJ7ULpHCCRMmy9QFbRzipWRGRiUsCxF15RaL5nWH7NR9nemsAUaXXrMbnN4VbZoFEaWryKpv",
  "key26": "22yKyy5MvA1oKHrdCap5pAFHHUibnhHHFCdFK8aE1sK2FrnzWmLoYuQTXjtEWdt3qUvEyyDmYPieKXQvrJr6NXGX",
  "key27": "4QZfDwq58GkoKtP4KymGto6mCsXYw6S6HaQuTc2qFwsDbWgHDd6MUaiU8sBUTkSfBiTX5rVRQEgYEeSsNJGbXHyY",
  "key28": "2x2qhdxsVhPSrwsrVAS2aRYz5mmMoDshGm6dHYRm4GQzM6Kyf8drkdLqysvSXqTdDTQybcmM34LzCrxxVTHLAkjB",
  "key29": "3f2NPAA1eTfVHJFyCYpv7A1c8WDBUHQxczoVQF1gnZaYgh41we9su4ASdRMrHVW2kvfPY2r7hVtRwnf6Qw3P6Q4Z",
  "key30": "Krs6UKfRVmDyzHhdUo578XNGPqAneHsZKDEpeuz4nwe9D5UDcxasjg8zwsHrAfnHN5vJjiDLZBnHV37b82w83v4",
  "key31": "cE6fiVkJvinNamewrET5nw4uioYxmtnwBKX53wf9pw3r7YwPPSijbjDdrdSZWi9ATBbSTGt3NZtL2iyjxCzwFUg",
  "key32": "2yGXGWRmTYKQZwFQ59gzHrgDc4ZNKys38Hj32Z12DvR24DqADfUtyo1WBDpbgE4UiCG5MKkRkKZREWxnZieaaLNE"
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
