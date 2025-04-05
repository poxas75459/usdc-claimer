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
    "37TYpP7QP2wbXLxMf4AEavDFP8F7WDx3Luw5cbf7gw1DbwhZBnxgXnTkmr4LjgUnpKvX24C4VHZfwveR1Ci4a4MU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yye4mUjMSAZqTU6LX6W26h9MDsFCzq7FQkrXLmFhZR7k7v9y7n8E3BVxTiArzRjR5TGBrbjqHDjxtQkNJuUrP8Y",
  "key1": "31tnBFErgKGqJbCCQ1jmf5NFMu1je26yrSKRb5hULZfx88pRJbZkFXS6e63EVwuzoCRgZEFGg911wnPHA9wsAHpX",
  "key2": "2uV4pDj9o98n2sBwioV1S1kZuqvgvXKRV2wVePmWAPKpi99jARTJHWPthZHJ82PyPvyCoH6e2qENhpQwF185UoyE",
  "key3": "5n1XxTasggHqMqfP7GsMd8hxcdWUHS3Wecc23SCNL3yBiGMDzt9Aamc1PjobPgbMKoSE8fnbXqXr5PbPS6XHn4Ur",
  "key4": "sPrEqbrUVWtQ5vKK4KjVq4wssmuLXKbv8n7a797sAVb8bYd1UErks6ZN7eGX2HHRJWHbKBEJg3XXPDXu7r9AEEJ",
  "key5": "3kYeiGLGhmJqzkpNtge2nHjcA2nM6QHQg4jedfbxvxYo16DEQodwYLKjjB9VKwxhmkWJYUocitUYmY9H2KLvQ4uJ",
  "key6": "5pMZgVFacJRERFqtLxiPzUDv5QN3beLzDAEirK3tW5eZ1Lby52aUwUqBhbzhR1seXi5sVaCWBA83hG5Ui2rcRMK2",
  "key7": "2fjcfpsxJ8xb9QauWMuda8L96A24XEvoETV2jPthNQADApnxQjvLBYeseh9Kpuu3aSQ8GLT5NSbHPfoFYsnyJaNr",
  "key8": "2zt8SBXsx8pzQx8y1qUqrH324F71k9EgesyTaCB16K2Hf4BWcDcUNrynryTyCFF9G9fZB87LLSDpRhWtF16RGcg4",
  "key9": "Fw6FkBCK8gHY6CcMw7puJjZUu3pGQmBwbegRuhj8wuJCCoiw5CgZVjPscFGKPzU5mGMjZwKr9obthHgid3KWDyS",
  "key10": "5cRr57Y7eyACogiZCsMU9npbjLT32ikut5Jgv62F1Tq3yrMDSV6i7JvEzJGDydmfwScerLVHQVyELD1MaDoCyR1x",
  "key11": "2H2cuR935N9tT5NWQamnKtJCPNih4eWJy7aj9AuaxSQaAA4eixSKbk2jxwmqAPLdNwX4d3Pb3LA9F98u8qFAB1ea",
  "key12": "5muupitDgo6hCsLSuEaYMtK3TTq3XfTsYDBusuxXofbqDwpGBh8BKRvQmNVbL7PcJYPBKWYPf1nHZNfuFU17vpxx",
  "key13": "67KVDYG7fdptnQjzNQUfrgm92NUwMFZHgDsbfYFx6wUKiyUNpL3yuxdTfhCcfRQ911cbfiuq4GTAf2K5VBHfd63J",
  "key14": "4HfcErmKeHDX9fKRpFWotLtnD9xm9HhdUJL2c9t5Bhizwr2WXKdBDCB7TzFtGDFLysbGsE2R5ScAtCYxtQU895SX",
  "key15": "2NYQRVJsVcq5ATNqqcXjfhkhZvkYpbE6oKSRB7fNw4JZKnR16mw2VNmBNHB9P44FRUGN1Rh7kkbypdyE3YHrDw4K",
  "key16": "SnrmMK2koqQPG7F9UGaypTrmH8TSHjm69bCjPvFWvknALq6FM7cLNahqrBkYLojAHY5h9xRsYaBwRDdMweYM88d",
  "key17": "27f3G6KMJpGcjT16Nd1RmPEpeAazt9UuemxN4h5ntpT4FD1Y7h2XA9hE81UbNjsRDDsftAhPgvTAix3CrFM6zkNf",
  "key18": "3ySPTyJvPqB5vEadCLurAfzDPKVS2GYBXstCersxYhdVWZEwcP4fXMoyZ1LRP84tdWuMALhSyWSGY4YvxEAJ77Gq",
  "key19": "3V8fbu6tN9YmTC4VbyVf36qmWYx8pUSzXh18qSeZhVTtRzp1wYGBX6CKBr4CiwCLYUfMW63692cGFbZFkzMP5Pu8",
  "key20": "5yn9PctbC1ojgdUALrPnuA2cn3AXqZy1p2JzqJ5HLHzvoiy4cdxVhaqv1kEArf7ajSxwf6Prmmksr28hcdDVDboQ",
  "key21": "3SLRps2s7PY6yAiefm7neWf89rN9rvVZfZSkGVewEmmHNLgLCr8rgX23mpdm7NXDenKtkRCxSWCd1Unk7pYp8iF1",
  "key22": "NQVepL8av1V1vnMssvG3RKV3ABQgEDt8kTTS8bhH7xovaK6nvSijqbhpavGRBvSiGZjRS41MnALaPrL8dzPxe8N",
  "key23": "2Zh374GXHn5mjSjVJSwiQCGn7wYAUrYfDs99Fvq3W9wfYwpJaC5nj9MHbA9tfxNrB1ZXxt1et3hAdQ2zDo8bysKJ",
  "key24": "4g7jyvxmMrr8dPyvMb4GettH7fGe4mAonDz99PwFNwkqucDFfPX8cxBJeVVjTrH92s1f13uNKKBjWdpzGkSRjj4a",
  "key25": "3hUXppbGdjc2cveFYxjdbTneYcCoBSWfLey5DsY8C9onfhkoRkGRTo2ANksi2ZDQaMHQH8UA1kVk54nDt2fZ5VaW",
  "key26": "j3HsRfv2924V5Zx1uTyjcDLWXsvS94Y6WpVULnZr44Q5yoRbk8U63L4qL1tCuFGYZa1ynBB8r3vQtejhhoiFV9q",
  "key27": "3bkqZrX93VfCNZdF5P6UK9pWxgsVpbSGj8iZaiT7c4UfhNDii3sXCnk8bNEjQi3fPCs2UUv5aGB9NSSPoMiJCTBn",
  "key28": "5xAyjzUubVjvncN1jnHA1pKgB3DshqVgnwCRHymw5Zm2zuNfd78eAJRhrTtBk1MQEVm497oMLxVodUSwafcLeqxk",
  "key29": "5Dq1CFoYNBKeAG7W2bHNuk3J2Fv8hh7wQpQkMyQrEKz5QhyqzjxTRaThRLqpRdzBdHLyAhG2mRq5TGeRMJXJUpQw",
  "key30": "2p6qUDG7FbaXEMp75n3ayY6PsWJ7hi7NNwFaTXt5RR8wds2mhcZ8wCs6DWESyFzwToEMZwZxAKhJ8THmmwmwXk5y",
  "key31": "2ZbdoYcJYNhY77qi7utjfm5Kyrc7MuJ1fszhHiZTmBGoo64w44gxRaACzrrvJox2W4dZcbjkHeqoy6adjih58Sn2",
  "key32": "3HTM3KeZTTTBXfN5qJdUqHLQp4TsX5Gsavvi2JhqWikQZMF43zDvCg8NCiHvot7CaEFvHA4TxJJwoiPqPKNHuS4r",
  "key33": "5LryQd3xGcSgBKMZLyViNPpGErFNvXVAedxt6ibx9JPSCKgG2bb5hVwYbv9RuukfjqUfkMcxTuRwHb2LRCWjM9DB",
  "key34": "2fkUfQ1kWWKxTJMhLqmZkafY2HW8fYLr6aYaoFtBC4TBNaQMXPGaLZMvGzTDq9MjaEBN5SPee13s4iMtjRdj2mBE",
  "key35": "3JiDJBiQwMssF5GJprNnddwdR8HYWGoESvsjE3cQgze4UdiJBnUTPbgP1SPkfrUpXC2Wgtt9eecbcZqP5M9oxFDk",
  "key36": "4HNYHp7nkRaqTH85FyjuCxLC5zb7aSZ3yRUqjX4x2dxKNwLnpyfEQbBpKAipYFXCm2XJEMdmW8LPR6zE6gMLjb9X",
  "key37": "4AGF5G2irRMH4HFtNLmYpCmFDnY3NYksE9WHzoaYfJ6cd8Veg532dxuZKG7o6S4Joy4YxSGiKJTLiJXYaegAu9fh"
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
