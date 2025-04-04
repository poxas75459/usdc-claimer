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
    "PTBF6ZHWAYHb2RXttPmXki5C9kDoRqNH4LnRjnNVG3t14UsxJkNBEp9F23zqn8AZNi1bwngaBMGG4aoW2NkZfxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cduBKWGsFz7JnEKQaNj97s8ykS7mMi6ExSxBaskTajafWKYojobEwD96ixmd132F8vMTftDsfF2SYTrcmRjaCRc",
  "key1": "2RZCCsk1LghmnZR4WGcqP9AiupfEL7avuEqGtYmTg14dDLctksms6Eg6VA3a2mzXaEoK3WNfk5ETnp3K1iMDpMAq",
  "key2": "4NB1caFgv5Tf16DC3vnkgR2GQRMiFb9aZBZ6Am5ZBCyozE88fvgTbh4qkqmSFbUDnpoK4AUD1zK9ADwuxwfqAV4n",
  "key3": "39Aq4XFYQgAMvLL3WgDHKnNBiXL4rnc5Ecr7Ddf12cav8uRGFqsh3vSmqw15iFvy1UNV3KF4wLed8rekqbuS6veZ",
  "key4": "2gznFuJjMuxiHuCDnVwMWFdC142RtJYCEm3CShgcTw2MXZU9ddPyQKCJB2xHVQ4XiiGJ8Gwr5HdzCqhnxXUN3Qny",
  "key5": "59tziNPyLbVz8ebfURzTs6sgitniHgKs3RtHxbke4gafLZGvHAhMmyLeUe4Z8PLvbqaEZdmpsNQXhBnrPJV2dFuG",
  "key6": "2cYSrkU6hdi5WnKBzCiXu2gwmwus7iuPx21LF1Ngk1xxynfQ2uF4h2KAk8E7e8y3TK9xpSTb1FxUDA124c1M97E",
  "key7": "3fPyAZ62L2D8N3XSVzEMN8XXKtw44kf6z3aS9vkS63Y93yKD3M5UGXGfKrji8Ty9kwj6RuEkquv1MYZLbg2t3shF",
  "key8": "5eDKWACy8xbMnLK5NMWBwtD6buDE38bMcsxbKDDcmtqRuECsC1CVBKZ6qrxH7Fmbz53gqTMyDpTyekur5nmSArvD",
  "key9": "37k5S5PPWRdoGR1FKDKpsGvhrz2ubNgFMhr5yJooRZFgLeuq2Yh6fLRMaLEBMU6pzdLAqfJxjJxK8iRjZ82MoCge",
  "key10": "5vFogc9t8g8ztoE7Y8NwjVaMEU62n4tE3M34VU55DWvYw2TKrB5hErrLDfTfZ76TpDdbpLAANHNKRqr8QR6FYg2c",
  "key11": "4pZ4JxmyVvFEMfBB6ozMzAdqpy6ug6BespUBv4knJ1emGx4mT416kPFXr3k1hTd8F41fJqP5X3bJVyctqRLkMUBe",
  "key12": "4yqCr7J4nXabeCBX662d7VwDGVAZFPLzwE77qaExwtGkSWmYv5TocAjjaJXuwMkmufN6LDR9fvNu2od8quTJmt9j",
  "key13": "2aRaVdunXKaFrKRTxvgY7X1PdHSr2RSv4QEURKGJJ2UEMAHWgN3qtAyHzEFdRxEkN1FjScknaLGHnAa5bZYXLeM3",
  "key14": "4hyVZm3btbrRjQbbYuCTqkHPLKeojd9mfqoAvikSnZzWNQsFaBk9zQLssmaowVNwsnWDde8yQZguGRzbsfA9VNkv",
  "key15": "43BVsYsXg8dkXEDnoc2d7H2c5pG2pqJtqVTaL1hat3dvxFZ8GqvoYQMp8y9jxn7VPhtu7jaYCUt2VBqTSXsoTfe6",
  "key16": "4yvx85fjk7qGjfQi7VD9HBCX5U1vj5gVCS9UAUWZXB85xgEGiEm65U3MFhmYobLqRLR38X7vPA5bMZxW5mDoBB1K",
  "key17": "27WA9GfjZ589XDXJdrkH9JURe6Autf6rc2MuvkTFxgr6Nop7jQJ68cDRxEdAUN2kpqQsBwkE9wqVwmGnL6zFzMhn",
  "key18": "rHb6sdRvmXBHDxtJca83RwvktGC3SBqXjPcbKFTy7vgvbhyFFHjrw7z1rZraeeLpdJmzFf2CyRNv9DRrqweTXe8",
  "key19": "4HxuZ2fEvesfSYDejxZEDTNfGr69bufhJrhAJ6u6ueXeSHhiBtJAjRusrrQGwMx3oQobPtXDeSiususpFC79vToX",
  "key20": "4yjZ16x2fvetp8Hnvt2vha82uZhBdJxDXEngfrHdu1YhRVSGMh4wF95JspMaBPdwX2mtGKrCLAon9Pb8Zga6xePR",
  "key21": "4W7kJXmAsWS1Fjg7bgYfeqntZqHmuTWzdZ7mFMcnrk71yt5zN5uV9wsmcWn1YybebZSb3NU3mN5YiZpnutn1h3pV",
  "key22": "4bnugQbTYXiHCQN6rdDddRgzLagjTgSHLfGsuYUziGKtQXgWahH7efdu2KpfhNR4MmpFBYTYrXchgFwK5qqQmD5q",
  "key23": "564jybLYiJm9wMcuJUBYMyPhq9e2BomSFLLd5HuqXfvDcd7SPNHFKT3Uzz6u6sKJrUCx5ZT2e2TDQxjNLotrQ2qa",
  "key24": "gcPQHhpgqfvreXcC8Kia1ywjDGLuMvtzv8tdEwqDYw3KA4yK8w6WdN7JwAL1WtsA3tQ4TCGFYDFauyiHoYpvpQ7",
  "key25": "CXBxhEynoXvWH8mpnBegWvBwCU2GR6UsnQdVvwzzjHeJzz4WeaeTUCFqDJ1WSysEJd9tLeqqbh54gKX5Ai4jBoF",
  "key26": "3udfD8ZkwfvtpC1GLo6vrg26J6dRzgYrxpP9VLLUUAvQ5DX8HKZDFZHT1aNDgy99ugGjQmJxtuwvhngvJyjeJGPB",
  "key27": "2ZPnfMbmtnzqrPheA5khMyDp7vVTGhgmqZgYnx7YaHKJYN2wYFmhTTyH3i3gHKSqKJ89yTRAFetKSN3Htw64V2ED",
  "key28": "YTVghwg8PujWwpBpYnznfWeorx8P1R8hSrG16V1ToZJyb8LvbWBd7SsH2VZ2dEDf1rr8Kx8STx8F5K7XQbJiSQp",
  "key29": "2jwZMhDspq6CGDCmkbzxzLxzjxrKJ847yJYcUyHauoA8xdvkxdGsCfwPaQfhjb784bHHV9Bg4imJ5sWcYu6CNQJR",
  "key30": "2NDWpincwbjRKxswxsRpjsFPMhhjtXWnvp9VzFzoLFewnFgCtKvMrnNcUQ4U1vVhz4YLSpvxK5Ak8Y8EYzi1D4GJ",
  "key31": "59qrd8qYusrBRk6SXGgkSWAGpTfUzMkEYMLLQaFy4cfJpM5zmxuiJBZvPPE9pZGpiSRBGo6PeRQZH11hue6mzunv",
  "key32": "5kKT5KK37MEXxyAHsoWTVc8G5xRvEwgkfJQkLhhta51BPzTUAB8QaMQnpDC6d7ApQU5jsAvzgLLd35oZNfa2BCu2",
  "key33": "2i6YBSC3HLhyHaJHQWhYvDRADWbJdzgD3w1uPPwMu3mfvoQ1yXNA5TXyPNPkjcyNsT8ZAPFq5maLNjxcrv1jHvGU",
  "key34": "4aAWeS5ck594QUzBwZEtcwfwkXu7umQbpfAsrFy9FcuczxpjP1Tx25m3soeETUSMaQfy3wdoo5Us2Se98B9CVPuN",
  "key35": "5Q4h42L57ZVpL6hwWF9kHC93RQbFSvpTUChKawzhTAd8hs69bZ8CJh3F7aRnJbppQavurB2Z1ZLh4puR5i5wxjEj",
  "key36": "KhSusnxnTP2gGgHT4shYyLj3vhzd99hYbJLBHzJAUMtiabjQPHA7fdHP3MptVwWHGd4RA3n2V2Co6mPoFi3aEeg",
  "key37": "2aPyeyscYLu65cNsvpGuSuombXUyh2NSsk1mqa8EWBnUZsC5zhxyWDKF5bnMAPbpy5D12VPvkpS9cR2D1Rkuv7Zi",
  "key38": "hZJnGWQt7LjQG7phupsHcFj6EkmjkziCU4vLkoe56ztBfReSy1ekMSPfgN6Kp4gPeiyRFxcQEkWh7sfjNdi6t3B",
  "key39": "45gJH5KewVXuEyDXegHv5nkuD56JF9NLKBEexecrHLaZTzsXTcRXXut36rPcYqUrZBeBVFpdBUexMH8GqtCvUskm",
  "key40": "64VxdAwMDBjfX2rZLEoyhPkBuirw7TGbjuXD6jYvqVMREGEbzE2hyQmbDk6jtJJTQgDkSxpjix66S2VwLNujATCZ",
  "key41": "tLimHsEVvJzdSDnvkspVcvVY6fH3W8L5PXrKsDVVLHvPd1sP442LBUeeNNxbnSzvQ9M8iVsSc4e3nukPpDvNFT6",
  "key42": "2HJejQerT5xCkQrxQvZ8HWCcFQNMhNxw9sAkMi78BKbeJpQuf3o9HQAFtfurkPrw33PCrRqShZqmrrVqeJvBepEj",
  "key43": "5TQerNFnrXzpCv6NRCSLKwe5Vw2LWedXhjNAHdRXu8oc2F6WiFm821jqtnSUMdmD5AATZrxg3R5KkQSFaTbEQxU1",
  "key44": "GdiCSfkqexhxAeG5JfJ2iPUD2nZQ2bhuwhBVBTCRagpgCxsik71hG8cjoBFzhhKVEdGJkG5b6xiEoeyeBPXvpro",
  "key45": "3nS9pjh61w91n5AnutAmgESNT3rUYuUtVD6iE32NF6FAQANr36MC8dBdvU4cjH2J2wTMXasmPR29rjBhyRnUYBVG",
  "key46": "3iR9ojrjG4BUNqDfZRvpCexSA2uuizatmwRUjrnKMa99kFPR7pVNstaFPPEUAuKCcNNMr1GSXS1aUxidq9u7rLYa"
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
