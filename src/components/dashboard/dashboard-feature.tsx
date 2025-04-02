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
    "6vipApHKMEzzs9xJqhAEkBP1URXLFXc5ikp5sFShAzL4tX9wJbr4htZzjJ4EPUoQRNT2q869SAXP7SZ8ww8y8SQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21RhedHa68YTEYhe1dcFVstAME4KWeGKvtrM7C9QMt47LnHMYhspDmWD4JEr5AvPxTLTfvM3fjLidHsHzH2EFGHq",
  "key1": "3Xx2GxdzRKAoF1fWMD4wmAkGUrbdGJmugcchLZGj5B1jJ6qPeWoeZLoLAasPS4VPEFqk88hg4p5A4phpBn1uVKnJ",
  "key2": "4VUGmf7r1wz7chCMgE3gcZjwWDmMFYhqDWyq5ojYr6iRDSz9ACdsCMtDyBBqDDutqdjitTAxgmsPYXvkLXd26i9b",
  "key3": "51qNbQ6MW4oDmtoviqd3urDj9dp3VcEVkn5z2aDNYmwksbvDQB46ABSZdH6mrh1Uj7wk6oLHTLfEn7ymvZo8GbWG",
  "key4": "5GwP8CqUt2Js45cesZF9hWFp5412cVnEySuLkFvT9BHcA72g9D9ewQJvuHhuAQraXrxr9nrQxwLFBSTnfbbu7ti9",
  "key5": "xcARfUEr7x6ssYsMLbGDqy7Rfz5HRuuDhmuexfgc3QitA46DcMV5RxeNXmRoGsWAfWdZr2CTCFg1fRFordCJsf4",
  "key6": "3ooyzNuzwkhFES15K9xPmLWq7PUNEuWCwkFd1g3gbKbt7qx5oRizzY2UVnXE5Tkqr9ExvopmdVRVyrPxSSEQG2xg",
  "key7": "QKLTBpszqaJyvdp9tedYbAcwr56gNH6URn4xPhz9RwYwGRB4LEhXnUxHWioWTvi3MkVpWNC3YYZLfx7mdaddSep",
  "key8": "nEot7JBpoonkGE2ZHuHmKgqEAfddVEDMUhKetSCDiPQMAoEmzaVXrLS9a6cbemhatnHDsSsT8ATaTJMiRkV3Frx",
  "key9": "1x9Q5cojNWpMMP6NxVR7U8xgu8Nz351ySFqfLQyDoJb4kSPtJM2KvPbRPBVCcSRBjQ8zCEDUqZWmZAQiYEaJ1aH",
  "key10": "3ZrJN8gbuiVus5XDncnpso56Uqv3eya6xiL8HRVfJ8LbfMrfRGMGES6EF4nwkgCRJ5G4qufpm7JiB1FchAvB3wgv",
  "key11": "4j2Ek1ZN2N8MJMezEG7k8YuL769eHGUy8Ax4zQ6nEH86qJkWy87udvTL3Z6Vjpewxbymqt3o7Hr6Z1PC4mrNoYxL",
  "key12": "5moAfLS9QPHTgUZMsAMFxGsjUBwpuk14kju32TM6dL6codgpeZsWbgke2Wd6QxHxU56KhBTACTfCURNWiVy9bcRy",
  "key13": "4X3LF9PWi1ydJo13g4rcStAastc1ZxJ6mSw8tPywTtnSGG9RCDa2214oNBh5WcutK9odbZtxd6HmiFLNgbtzy8Xs",
  "key14": "56BC3VZxKtT6visxw8y37ATuVaT9fZH1YcbJdq9p1vbUhF3uQrJ9Z8UMzURywhavSE721E5Key5txV5rdmFsU4So",
  "key15": "pyBFcNTvTn7SvEzyoxCi9mBpEniLxqf13W1Lwsf1QWjZLLcZJjmMZCHvUeGcPSkvCWdm5kt2nKGTPUS6jZiYxer",
  "key16": "46XNRAnNLqJaw9xY1YzGVFu3bEWSi1KfMCSRKWN8YR7qKGn3YsKFT6jgh5rX9RWVZE3Cxus8jzxruarbfDti4Kib",
  "key17": "5LNtXWTtVPPyCtjrAjBfhEWHhVqgGxUUAHZzS25P9Xvdi2SVxDH4TY9CJQPAtnis2LkQbzh3ihv8RiUp8vsKdykS",
  "key18": "2c1icCpHbJdwygQUKB8w8ur38m3bK91eXXyuprsEf66Yf79YnBfbpGbcRMktwZQA35yucVaokiUNa2cEV31DnDv8",
  "key19": "4kK1FPaVMM7ixJNQwwf3m23JBFNDxC86vroXgdkZGJw9MMUTLd3t6vxoZEToRUgV7KKbgF2DXtaBVzNReV4NYXzc",
  "key20": "5auUmvZenHD3212fUdxGqtzmBMkuWhVyWToR1htH8Zj3niRtFaV8avF7vpWXhUJNFn7dd6PGFqsToQc1i12nWQA7",
  "key21": "5r4uJppBe3FPoFYGjtabb5eBMChEqnBTz86QWVLP4EGx38B9YBmyGDfRN8Ad7uUh9bRPFU4CGDmSL6Sou9npiKtn",
  "key22": "2HQqJUR895BYbRR1J6ncjTEqyPM8ZE6EsjVWc85YmXXZbpRqLg5eowZtJT77hsL7cyuUeiQKRKZbLuQ2Z9A4hLmf",
  "key23": "5NCbXNFbQYD8RGrdEMxZwggVDHUySjHoBMVtCJzLoo7qA5B2PmVB4ZDo5Ar2xwjCaVBdAgcLWwfGS4j7ffXESY7j",
  "key24": "4nFVXSBJEDrZRLv5Vv1gVo2J88UBh2MvheetDwkhJ2TBBrYfRH42kNSAsVq7ernqYd6HDPTftzSPDwhb4fN7DYX7",
  "key25": "8EJhwzfr5aAUeLAAYpUmVhWXQXsm85n4ZVSBpWiGvAMB61rhFwDqWvBWNbqRaEB79sckh7SUxiPWYc5f86eowTN",
  "key26": "2VadiXR6nN7xPpdkTZy63L7nkwxXwhtvioFPFftBU3HcsmxWWo4KtkvH5J8GunPNbBR9L9c2LPgy31quRSEvW1aW",
  "key27": "2gjMTh5LWAXLPnkkFK1Tdc7NnswDzJXp5sh1oUxbeR8gAWGig4nmwMMiKYkEjXev9qhHCjwdKsRsvPEDrG2qmUBJ",
  "key28": "52iaZaZqNzirGJCyb6aWYx6T3WWyx2buqL2nCUSevhL6BmP38FEUEAH8YqcX5vPp3Um6swy7i5E6iUy3YDmpAfei",
  "key29": "5rhNGbdm4quNYJytkRNX7wZXyZw46igqejcv2kkG7FDzTwntmLntDmgUa9ofeQXdsRQWXiXuM4Sk44Dp9NPHGttD",
  "key30": "3WMS8CEUanWtNTFXgBo6BYvFdSDsybCpcDQmsMTUCMtqNwoAf6SjACTd2zzbW6G84sqNCADxugWmNWNVmTxsxb3m"
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
