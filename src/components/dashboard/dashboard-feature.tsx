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
    "2UrF2jKGh7jfmyuoN9oGJM9D2RYSx6RTNEGuYUHRZbkN2t4vVghRWSADSXXj3G2RfvAsGREMVwmaKDwXyvsdWc8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W2V5FnGCdFKxn13eLykFEZN9jtZsn8aayB7b7vPXfbhSr44gHRPd19GyyvnLcSw5eXfeum1BQkrJc1DYDWhovtf",
  "key1": "3EnSsuzzYxXeEkj96ZJT7WTHhqqtHasAjNye58CmGH7aJdXKQjNWPFQLsQ2MBQqdP7LgAA63wvdb3WHecMfJ46yp",
  "key2": "4ANbXG1W9DKF74gbYg9Tft5HciMcrUeEaPemTL6V7mNTj6S5xF53sFJntQnsSa1j55RMt6ncLio45urvHkgUrtwG",
  "key3": "DbG455ShfRDuHnEKBpHVC1EBPkPwMnqRubs4PH3XJKzvcTvsZ1Qa5A7pFZfqt3xZnQHTsHMxcFbRgrTjr3ePy8n",
  "key4": "4US1eD4w1qTDZvwNjQY7MLT8GDdaWNjeSmKuuTFfVGMKnpVvw8xUDDjwNoLDruAWEFj38aZbma62wxgnGZGuhe6K",
  "key5": "4u3wK4RTkSrwPPUs2voUdaPEoC1MaBLXaSPtuhBpSEBQmhjLCL3GbCbJdZnxYdw5nuYVNoKpjCUspSps3Zvt3tCD",
  "key6": "pStmvWVskrZpmPXJyV8VGvowtoYeFS9QCQuz5V6HbBfwfh5xpBBWdoqe3kW8s1qjUrMSdHaE9F7WPH9T2p831Zm",
  "key7": "4ob3o4WkdaSLpJKNMJzu3rfKyivGXAwCDExSVVMAPuJB1aLpoMBFuJRoJoEYoFdTf2stT1VyrSQVnWr4ZXptARFU",
  "key8": "4RMJHa6ZJHj69y2FJGLNYuXmtesFXnmwZL8mpHm8DJMWAMXhw5XtahjdEpzhb45xbbe47yEKNs7aEerepwmKutdZ",
  "key9": "5Qe2XNFLGiX7ix2wgfDyfmiTqdE5Zq2rEJUchhtvWaXUYcJxqTxFYVtDNZKJpStMrdE4qPs7d2kiTGep53oNsXY6",
  "key10": "4n9TrxPYEzfJs1ojubDFGwhEWr8d79ySsHFpNiKwyY1VB21CVu9uc73myd5MPFGbTCq7BNKSvVxs8FfoAEFVMQUS",
  "key11": "4HEu35xu6jg6JeZiYePB7x3v7Sa77vPPycefTq5QL5TExuoLiM6wuvn2g67H8o5NaHDZ9MD3dtNmSCTaxSN771kJ",
  "key12": "2PvKDQNTqBA9LcFJBoe2sNJ9PNimatSmLKWZuyqVM6TvKjvszoeSotU7BbBw3rRqC7rw8Jf735cHs5y3854m9kuo",
  "key13": "5X2NzfeszNPe6hbAvgd653GVHhSemGwooXRXY2t9y66GYAhJ5qNje6KNxN5ioKcABxwXSWDmDc5xeaqC4qYFNie3",
  "key14": "4HVMCdgu4tUQx7odow9ou6VKTvdnE1BEQEq8865pG5WhaoYySnKnSupWZmW2XRWiNr3Q3aXDcbHUotjLdj5m88oy",
  "key15": "4k9EhjL5nGKDQHEoLmz4ea1xTiyLiwYQPeZSoPKscCxmQkbdivL9euQs2pQwnkUr9XtEZfhKQFHVZHBgf6sz2RRm",
  "key16": "wpUA4kohA8MTfxJBonGnHHrHfMr4rTvPx86ssCFHSx7sXjUxawAka7p5KNcdseyN5oMQVCJWv9iEVPDFyT5zEyV",
  "key17": "2BDqwxM5m5XRJyucmgnVDyBj56UTbX6keGwj1v7Bkk7oCuZwJeRPfowutCGcskfEVZMsVkBPFDxviK4hAJSS7Jhr",
  "key18": "5VukwdsxGF2opFQtsDkf3cafiBoAXa2vzApBVAc78E6QRcq7r8UtmX9jiZUex6LwZCadjgazshqCtFFFjviKt9np",
  "key19": "5BvQSWrmTde8jwdRKdU2dHT1i4XwMUNoMvHMdrWnwwUVCHChFrMYxVNLSXTf8Km23SiibkuRkm4BfYFUeymqccA8",
  "key20": "4r4fFy5GV1JYBuNwQSa2VLnzKPAkuKuuSpLx8kVxdvN1QBScjpwDG7puULGbyX9A1M1u6n6aJNTE9Gbwt4fnQL3Z",
  "key21": "2RXZuXfsgLAEWvSEgCb76MqbWLXnE1KG2q42SftRNZYhc1syqRjPvyvzcogtmPJWX88yrhJ3dR3Yt77fMhim3PJh",
  "key22": "62UxFYMkQZz2AWtGAn96N3EgcF3r47NhasqDJxDQ2M3F7DQPcc5FEeFBRYCohMftGqc4L4vYr8BhzJhMLXJczakk",
  "key23": "Cra8BvDLXcbmR9ZCMBVU3tZCFGtzPPcFzJ916atnvchwr3SCRgJRtwBhizr7sGTZe9sfZMwoszJtKM5YkqeuVVc",
  "key24": "2F27zeVGd4xJyQ2bRUhwj6PsZJ5rjvgjs1ZCPEr7Ph2XRB84zGjmLiW6YkbHYcUg7pDgKKqyD4tLiws1qLrXh3uY",
  "key25": "4UyakF1WJH3wcyHgvTpEKxagg52ZiVeGgandVG71PHA3BuqSipSuRU4QLyUmM6mGuo8HuP9XLaQQf3GYv6d34Q5V",
  "key26": "53yQcNzQzUuqztGJgZkmN4L5cSZPhyS9JJPYAEi1ymsDsknwRCRrtc1PazNZVhxh8uS8fuRTmsqNtUjVJZkBpPwB",
  "key27": "25WiwU7awq3adB9BV1Y463c531j8hqiTAQX2VUKkicUepvowfQuvUxz1TiTHeEHmGQe9eSwVvkmqdtspsLQQmhnq",
  "key28": "BtMyjhCc7JjzfpXc1DKnnSfDzeuwUN7VCNbxYrb1jF3kv9FdBNq6GmWUhSvWsct89NqVEkGX5BqtzTVzKn2vR6i",
  "key29": "55TXifBj9g7x4LGikkeuf57schtjMX5y1ZaDpBVxFvsdC25kFEWryHkDwE3r2T5AR16Y3fZvki1x9aBrRpvKT1yG",
  "key30": "5iVXNa2pU6NB2NfAfoDLqwvhjmNJFxk4JhCn5raks2beuamimg6RpAW5NbUKHD2aNJDYRvZnS3jmpanpMAJZq376",
  "key31": "4nBFCpJXy8vtbxaAP2zLufoX7t9qHHo5wY7Q5oSBBryYTogQVmV63TDFgZ2nKAniyChVfPBmVyggkAwYbePA6tfK",
  "key32": "4uRtA2cwqwhSkdnSDYyrVV7wdj6xHkRhNQjsy1kdp8Cz2LBA3orMjptyiY9tcSntmtUyL5zt4vwaQnuoA4q4Mwhb",
  "key33": "5ZZKR8NMjYa7MNoj729AJN6M7gkxcyuGQzvnwG5GSeCF43czecbGuUEgpQEbsVczNiKdCka454xwsGNbKVkeaPLf",
  "key34": "2wxnLCFYDRQ4vfrcjQ7dxepFw8DRnv7LeGKZjBXnKPz4qpgu7FAguEFr8QMohCFZoMDpWAz2H8xJJV6vFZvUiceS",
  "key35": "45cVxMe8HxYYJM65G7skt4as1BzdrFS7NgSGcBJ2cfAWEnyHSWqEXD2WjiK3NBbg3pc7fbFuwWLuVjYJTpcikdvo",
  "key36": "2N8m7zTtU2NWm5D1otsu1EWf18FNWkw82hkohLiTA6AGcjWtCygKVav89sn97RfpnRYV1SUmkVtbV7xTJ6Daabjh",
  "key37": "3XVrqMcvPkUjg4xyQnWvJrixcGq2TDMYSjpBsQcJhBvsuvfHFkHcTtqrJxREqx9eSNjTUwwkB1HSiaDcQqTMRCiQ",
  "key38": "2BC3unhriPHGkdeAX9brqTkLKbiD92D1a5R3Shy2ZNoqbbm84U4EWSBYWntkUwdSXwxfFvd4MzYesJxt3sBT64hD",
  "key39": "2BmHGi6NgN88t8pSqkmnQHCfnGgUGQnKk4auCDTaG87WeYPSCjrLSaxaUNq43hiKBPBUtVTBHk1sp7iX7SNUsyVH",
  "key40": "5j3EeSFpJrrN7Mrm7JQUkbFuzEvm5hiad5oxQvFTPJQ2zhNCLjPYyw1yx6V1BtmFS2pUTdT9e3etWDWPBxvCnTba",
  "key41": "4uYhTg4RatjjprAswzeS5AY7tYzq49JFgEehqqkKcKXefcj9v3htpRmC4kvzd9Ayq3kYzjaZtrdnKQnzUJyxEbY6",
  "key42": "3ZgXD1aoyjy7YCLYNhrDtKiYSq8uQxhmKi9TarZe2LWq9euGcusMVoFpgYWz58Mk6VMs3Ak3yy3x1DyNgHnKHs9o",
  "key43": "3RvVV6ETD7hXgCeLDuLzK4s6eU7sMTVdGbVaSiz8hs2dvhaTmcgeqGXWDBUHuSDuNnFJB2swN636egcLGp28Atny",
  "key44": "24jd9EP7FrYXzpfe7V8hzrgyfWF5FPGDjeDcABeL3sEK3GDEzf1mJLd1GDSA6FBFTq37V5KptbNYjnwhn7qrb1t3",
  "key45": "mdDiRAiU6eCM1WUHqWNBJzRsR8m766bW98DSLsPiSmA8xQqBoU1pEAas22kYKidVeLmdTsBWd71ZGCf4S5qisRR"
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
