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
    "nujNT1oLMva3rvpwDnYyX61Rsycb4DvgPBZhf6aH7oU8a5vPp5E3d9CukeuBDAseSHNv7B8JZd29DWcqgFPKp2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nYLhKCT14zcQ8JBLx8GYYt46xefwjGy7S44RYkDWCfMaaSekQQtScMXQJqAK8AaQZannuAnHSds785UDedfo25T",
  "key1": "2hihczJGjpQLAbs6BE8ZuGs6TDxbicUgjgK8vpk85o2ZANvifbRiwu7tL8TxXLvrYXYz2jN5rJUKfVx8Xci1EzbV",
  "key2": "ShVijyBv87YRXBcxFkRqCEzHCh8uMCfrzr1jr4cYKeNiLYPJrqFGRUZrzgUngJhjoJqiWRiu7HSwXokWrQkAx8b",
  "key3": "4s66gAxqHwQn9BnAFeo2H1rnrUBncBLwJrChQdcRcHZA14gh4tPtxfGbS9vcJbwx8kFUXodq3UzRfcvzGLDf4MDa",
  "key4": "4qiKSWcqFpzjGSxmWifRrg8qsqfkejuHtcSAaVZ4dPxbaYsMSN9hD89wPaAtHuJvbDmWBC8P1bp3Htn8c3L42UZ4",
  "key5": "5tJxWextyHboFaV8DgF2RsLRsT2GD69VnBCbZXu5RhJ4y3FJadnxVDcateH5XD8BvJDCVNxgPePBgbXnH1xsfueG",
  "key6": "3NHTtmLn3AkKGbvsDqoxq1Tt6S7m72RyGSqH8hS5nsqUZcZwd75zwUEmvuK6nC9dW4Ln2ZKFGwVUQDbode55ShHg",
  "key7": "56q4ZXTGTzFmR6Soz2eEV6AsSWg3VQrcyZK3og9GvB8KkmpPLhDwjckEaPLkY1sE9ATbTyJEntFrzNFmy8RN751d",
  "key8": "3CfqCjnDuewwPnkuRjxSREnQU2NgkV93Cgh9aRayXTY3derV4ocZzGFQEGywR1MWYXrs7XLpW1Go1DAUoWDpxHmm",
  "key9": "4eP2E47mZQBHzGZSxmisFAfM9hDpKVjQd8rywuHd7Cmei5WVC3NqMY2FYv6Lze4YbuKjksyRwR6ZVCvVa2cCaLib",
  "key10": "3EpcgjHYKUC9MDuap84z55fR2Mq3JKY4r8rEQGSmoey4wbN3BLgwDNCVmwEorS82ZXpSDGiEwDDcNeVzn58q78UJ",
  "key11": "ZyNiefb8qETCzA6dKRnARSfNCxZUzw5qFswQZQssTVmtcvCuNU52o5kEEzqeP87GW6h1MstNpvzMvfzwiUhuEUm",
  "key12": "4nNyjcuW4rCceX3kNi2est96Umi3VkvVpodCTS5zDkitYWEciWDvusZnuhRLPcfYa5JR5Tc4x2NMsWm5br26Zg1N",
  "key13": "3S4QMjqPyfcvqDisZDkt8JQFn3Z4rXpbqMcsUV79yedUAZTtdY2KaPMT6g6d9ThE8zffcsqJaNhgWD8QoYTrcDcC",
  "key14": "2Jj32vAMsQeKRnk66pNpR4PyZrFPGaDLCKZA6eeYrd5vrGHRkcsVm8isna4C8sx6cAmxHWVnv5PaW3LadJXrDCfR",
  "key15": "3SVU5EbaDZDGULyzpPwmvp8qRu5v66eoSG5DRt1dd3YW5kQVTAQCBE4Ro3JCWEk1TfVmGSEc131wNiSujxBhMFiZ",
  "key16": "5onAiYhM2CW7xpJ4UzFhiPuy5zcN7Wh2UxDtQQeEBGqGhNhdaS6JD82tAmbCqyAQxFH7Zgw7Xbi4tmAPhxVZ8Gzi",
  "key17": "2gcufL8g4JdxE6mES6cdqLNsSH8oFzcgZnZoyWVL2kNFnxU1xYr9A8ztCT8K66JCoc5br6ehtU4oXjWbqQ8Nb7ws",
  "key18": "53A3WZsZ4wyTdpcodbsHbcKJmBjih9WQLMnFPqx5GrmMRsAsgeE4njw7oLGg2TQ8FFCVgSKA7yKkq4RZvtAMuma8",
  "key19": "xiRX6HzewJnBrSdquZyRLFEELu2FG6gmY4Z2gCFa6XRsXiSbauBt6pBWgPkoEQt6o4BwejCLCNDmbEccq9izdiy",
  "key20": "3iBY1akjvYUEM64QHU7JX6hFqdvoZYeBQbZiDjyLpr6cFUF6XyjBdiLX3vgSKwz4f4zAdmoAEvQ9REqqNTKF8UaD",
  "key21": "664cTv7PiEXiSDd4FZSxikhCLTJNiPraVE93cvZVAVxWnN2TV8pBev3CbkWNXyvPUvgYUUvexBig3B2tVfcEdspS",
  "key22": "5VCXY3MgnoXCzE4KW86XL8ZnrZzXzRLaRjLCdz98Bkbwn86xxN77C8BCQVNdeAeXiYs9MPGKhKA1WkirQT5XqXGY",
  "key23": "5Vr2h9RFBwZasv85tLSBPNz16yhnn9pB73HTDdQ73vH3mjYg9FmdZLfhmr8fqXBo3B7Kye999imXLSAPrbQHkTBb",
  "key24": "4hY8z5aYrPXvpqzy8wzL69DB9xEhSanAxEoAn1KbGDisiiWx5JTnvCV1S2xFdzLgFsD3kRvbgai7X4UreRBv6snY",
  "key25": "rCyqPShq9seKsm8RDM1gEskaeajooEWKaVQBbrQWC8hFvG8NPwcB6fwComMjQYqbicuuq6zrVFNLk4TNpUFKAJV",
  "key26": "3Dsu1Ev1uAo94zBGxEacHPa9pdYi2D3aJSM6QRBEwnv26ayGYbPtuBayUXaCsL4PH4z1ZJXxm2SVczZFsqiUVi9D",
  "key27": "2Q1CezcsTAmkVw4AixcTCpRaYjk3y2faC3s8NypDegTGUpKiCfbJCccb8u2Nna1DkABKoak3VdN1j9z74cJUmFpW",
  "key28": "3sm9HXNcv5xk3kQYQiBbCScXmeheXUXecEAT79TZ1bC3JEu5MvLiHmHytN9TfcJdW5e7A5nc4mngxwrNakQzcKxG",
  "key29": "4YmSZFoUFq65ibJuFopTv8J8mik675i2aUzaTUGfkebDPBYXwj9XTLxUXwfrY2jFYmDm24ebuyMhmZDHocXt7ctt",
  "key30": "59BmimMCtaPhxmaTehTmtmCxVLp9hFC2Au6Te5U7ssJmYcB3GcTqZzFiDbLgyqUcv3W5YUXFHGy6cUe2NfMaTvWs",
  "key31": "7BYZL7zeqmcDNTwnPpP3bxopTVmRRsQqRhcCHozzvHkuqELmJmkbdAToyxbhGyYnpsxxbBKVKieb4KHdwB72VB4",
  "key32": "3caRcLXo6CVRZzbR2iQ3DGWwJhFCv7ws5jvYTihWH8w9dMRLFrNqy6K7QxFsx5MgJ27uWd7x1SMq4UQeh51oXfj6",
  "key33": "2xiTfSmNHFX7icsAEpxYXasjhFfePSTxLs1vJNwKaR4Nkicp3xoRqiz6QuXCpV9DtEjkL2NMc8oaTn2qTDT26fKF",
  "key34": "4ZGLAxjKKUfjTSyQ7skxdA1W8yMygA6tMavbBTfTJdsdV4jyz58jLFx2VeT4Cm89wPGyttNGCbLTJxsyuZE89HGN",
  "key35": "4okBYYevHKkTCGGJdWNF1afbvtqtCymcD5FtGz9sT79zf6R7pvn9rPMEYREC4z4bXtDPMs5kqURBjAFc4nfwoDvY",
  "key36": "3TayaC9oRFwgosKGEf7D7b86ZcX7F4j7YxTJtrc3j4KvK5hxinkb4kRh2ZgL3pLtunUKci7rAku1W1d5ntxo5cHR",
  "key37": "uyf5fBKT5tPsMF4xqy3Sd8ybuYXMd7vgz5P6xsQCbf1Wcmmth8W7VER5SLcpo1y3hvpRoHp3voSxLJLnE7GAFY8",
  "key38": "5xyqvkSjH8rqgj2HiNGZNAxBh23vxMN8VrEjT83Pt7vzHx9P1K6P8QrNooSD9mvTTy9XhUDjeVEoTUdKAwTxKZUU",
  "key39": "3eur2EXadL92eoqPiDK7Lsp1AtyQYycDHDd3h9DANh1YeD6onAnNRwWrBWCrn8QK443FLLcW73iTFnDjhgzmZomE",
  "key40": "4RnQDpgE7ntj7AqQ1qkF3kEUYGddx4UbdEF42AhYd1ZLjgWEsW4ADWghQKCahE2y51A5UTW15LipABqJSefXdthE",
  "key41": "4kHydWtcPG2HZmpSPfvEYusXsFiVgfgNh9un9nfnDPeEtLnZWzGr8EP46yN88FdkhQajkT7wReS8q4J8gPapeFxZ",
  "key42": "4XwMrbiCZrhnJsSHcBpjGFFdaXQauhFWPbJ2MPW8QGZqzSN3H3RnTZjT2ertNRGExqVaa6LNiu4Uhz1Ksknc2C6K",
  "key43": "4GcggWVo3pirPmCquM9qDUmoEnEaG1CpZfmkxe7adK6ZyhFJzLUu335jJ2LrZXvjrR4vMWMt3u537mqHzVEYYTSC",
  "key44": "523BspJan3kG4xauxhNFSSPti9jPHqfGFHQyHjeE6VDCnz1CLWq3uF1oPJxkf5Zid6irtMgDi7n46LtCEUH3tJVQ",
  "key45": "2JNuoJmVb8fuC6HvqNR6YuejB7E4oJebQxmv7rtkT1w8i983fjEyaD6dNEoj8U6zViY17SwSb3DJY87hCPy9ohfn"
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
