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
    "37yi491ocwjvwzA6B6EwGtVGHXMo9brivPCtsp5cDJ5XNo69eSixLZmmeNQiVEQhZ3vNVuPCE2QYF1Z7y2973PCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hFF8eSM4YDS7SfJeh2WeD8M57ZWwaJ2N5s48ZHvHzFn8qmdJAetXZuY1ExQtb7ebx2gancgpVHmicLnzGFupdvX",
  "key1": "45CZUoeZgbEG5vK7ySuy1VJVEKy9JEUKXMDwX5EmTguKbP8Rd9wwRDt9zYnhWwBLtttpKrLtCD7B3auPHiTj4DiM",
  "key2": "2Kn2uX2Zu9FcPjCjewMWN1sDqpyj8pwhqXEM4xPrZTPw5dzi9XzBjzDQdMwx2sFtbWcRGVx71bejbEteMXAJxRSP",
  "key3": "4GGnJoyeuvE2Xwe4yMAhDKufoS1NTWUVGMzRk9sYfaF9J2kk4NMQiaJHUMRguiE69Ji8r2qTxwn7n8j8WCz7YncL",
  "key4": "mG7GfbyLH7645PthE1NbJyZ34VTJqspwbNzYk8qXNoPp2NF1Yadc1awaS4ETok3CS75NEviAQZbpLZs5FPUyZ13",
  "key5": "4kz7KGXbdj5nRu8jHtiFKshrVDin1b5C93Mk8u8LMX37Vco7hM1mkqfh7aSDnMbRyonr2ofXUr1yEmwpadiDeJiC",
  "key6": "2VWuPsJypdBS7bEnyD6icxkz65DDQusr1hfSrheQFTK2CPvyaD2Yd4M1pPBAnGza7YVivGqFrxHgiGYshwPYxyhs",
  "key7": "4ssiHMvGTcYofxwZkBRJ6YghnRWbpiDT5NxxZWWbtT6Hakk15Kh6cXBws7gSb4x1WGNQHNPb1G9EBHczroYDwhsw",
  "key8": "3aT6nkgUkGQEDfBRLzQwBGPJz2GyrQQRjWNNuZbyVniYBEcdNBszYxQ6SCHbiRMu7bHniY1HMUATax1jrnCEZs6x",
  "key9": "4tQjtutWZdHkM4AFhjbFzBG3sgQsu65zQYGcCPnAXK8rFH3MJXHJA5dRLmPU73y4uidi69dMcJ9gePSfcH7pjcu7",
  "key10": "51Cie2Y2wLK8QcrV7wcGsHN8uqNTKqDnPp4gurytntwaQmjByjXRr6a1V7fZpgxmAVZqUH5VyvHNZE6YFqR7962b",
  "key11": "229k7TCndYynh9n8jSXmGWA4Uu4phrB8mW2w6x2wLkP1XPUss2Uqy5ELqRTDC62QMFR4fXBLpQr7KZK553qyLrNf",
  "key12": "2YjVGjrgnTUKNrJHRsTEh47sYjPohBto76JLj4yYNxYECJetqvaKirLDnbecfckbKvWLavo7nQ1KJXB817HFRb6y",
  "key13": "3aZjgpRZbpMeEZcn3sdZyKW6Xv2mHqMDF2GjPnZVfbgBGiifWmQASFYggxSZKrcnDsqcVtSU8SbKa1HdbFtTNH6q",
  "key14": "KseN4u255qqbejEKW4DGBQQrE2mvEKCQg9i1bBKfmvQJtkk2MwCpivU8X3n1qLtoZVcXxPcDcViqzgTR2JHSoxv",
  "key15": "226s1kEDPgZD2s3MAbxdikeoZLgeLryqKQ7UyCGaznz5so8sdPSbAcq2EJBLi14md9bkKbXokEJr3xAJbX17qc9W",
  "key16": "2nNsmsEFfxvcMR6JJFacjH4G7AWLREih4hKdmKW1sKRm7WsUuKsUH1oHYVeW1vXHnMysvznD9JFJoyHVarrZ3d3Z",
  "key17": "3K1yTxP8zQfoXMXwS6fSdMCfH6m6V9Jzm4SjNbuoz9X4UjKiRotEmuVzLfr6GiFF9gWyR45qAAdeG3wf1YXVGCrF",
  "key18": "2wwTSdBuyo1SbimXCL8kanUbScYZWrjwJBo7YrdKc9YiJVFKd8aVQEkyh59j3S9Yz18UUJsFqgDgLq4Rv5uU1Lsf",
  "key19": "2bHaRerDJptn9VSw1SPEgYwgKcjaNeA4FpoyUA9JWVjM9BYqu46BKptUQd5uygvWdrjKmjFnuR92CSAsqJiNzoV6",
  "key20": "48hmEfxcWPjNeL3G4MzUt6zyhKiaQzo4pybf91sx3jaya6JS3LZGt1G9gQHssYjNyc3zmhpgSDaDGeGs4acAAs5B",
  "key21": "5csFGJ7r18uteKendwDPJgjNBTYX9nVoU78JHWX5ErDeyANWbTfqh7MUadtoRxPzr7uhwPRBvXY5VyD8SmcQConh",
  "key22": "2feDZvwr8DGkjwE6Z2M6XWxvwdZb3pgeFEsXWG2cevHJCQnxUQtHdcHeCZ2zYwZkkH1SVKzTzCwJiZ2nHscnABDL",
  "key23": "3KaxJ2qENSf4eidK1685H3c1JCDQrv2mLSJUf5nLKdx2uTLPRs6ESWd7qXQXWcLHQPxWokkkEsqq2VZjsgmfqXBn",
  "key24": "5Gpc81kWbA53ooMmP7DvNv97bv6fz6WtSP2Ac8VWYxgi46uZdHPzw7xjdw8MQy6oFc9iDCpet24L9fF5Vmnms8Cr",
  "key25": "63Vy1588UfaLCPHuU9UWpvo5tjLknCid27fnBjUqauwR8ALjzfBzBrjSGfVeLZd8XWGEH8veqfZdsMUpcz9zSBYD",
  "key26": "A6UoavfCduY4cNXxM1msApkS41RoHt7hHzTwL1Me45pHNv7p59qYjwmKccjT5gP8idWPdqzTmqL2nwCoPhRfytW",
  "key27": "3EZJqsgyS8jBy8zUfqBAiSc9gmdXXGcMSgtKm32AHHYQELfCnwEjMTWSzdePJMkoM4EtcdbR8dqJkyPeuky9Vvn6",
  "key28": "5dcJ115ecitF9qHZqL6WGvJ9qQkxNVRhc4h3xCrM5kcW5hLvw2oFJLy5kXWbqCAvQkMru2to345L9m3Nyqh3BjVV",
  "key29": "5d4Xvo4FUfzaPm8pknf2Fr5XM6cQh9wYADpspiTC1ZfMCSH1wdb2XEoymxbXr5znstN54NS6151EDusP9n5Uf5U4",
  "key30": "9APmWuH4kNVJgQkELVaUnPycCTioCecvFHP14n65xQubXHmWYGt5cv2xb3em7aHGTjK49RAfbUx9XL1qfTS2Rof",
  "key31": "65Y1ioxzjFdurxyKVQyguhFoTHRpAxjGmBnTx5Q4gWskwra8R7czv2KiXAVTv37HyWymtL4eTsavY7o1xppN1q3G",
  "key32": "5M9uVzgf81UfBpJ4jwgsm1z9Z5YQXN2QRAZGg8LHZftcpmGbLRht8BzvRgEQApGSYKSwWWm9tbKsYzeDnfRdNoEH",
  "key33": "3r7cpNEuCy7Uc4SXJej5msdGrzZFpjv73AMcyYtWfGeCoSS1bivKTQ2SiBuAPoMpynumLPbvmKcBVawcbgQKbX1P",
  "key34": "4KiFxKRL1RCL5LVugzRMXvbGXBtvy9bMyNDw7uMnik6e7WbSzPGuvJsadGaKy5KLE3Jkh6L41fiKoUVd2qok2YcF",
  "key35": "3aumLtP57pSxe6MFWnQ9ANNsRKrpeTcuSqrgFCVd61cMppFT9bxDJoX4wEJzp7bPiJbsNcTrH3awQz7d6PXKmchC",
  "key36": "s3KaWgz5881incw3qm15QYpZxrYn5y8H3jf11syANPjWyedefiwucBFUES6mysib9TYca6N7UevHR2wYuFFJA3Y",
  "key37": "2QSyjbbkLEcyTEEBoAtfwgzHbUJDr5PWLB7VXSCDBVUi8fSdVNjYwibzm2eXcXSyL9GrXUtrZ13cVfsJZ4Ru71pr",
  "key38": "5aahQUZspHHi4QM1HttabN2ocMFjR9uTZ8vZ3B3R3FNoUTbSi95pnjbMNsbtV7nxqCGASC2V2LnMFkzRML2VAoAk"
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
