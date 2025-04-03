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
    "4fqnVB2gkbD95X3mTf9P14qvt9U24TzFENFgwTAabEmERt1pxs2T9aptjoJ8H8EDWdmcCdBzdvEPxDFPki1CbfNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cThoyZcf6y1aXbbxFvfxz92t55kT1278D24N6YYQpGM9ZzTLPjCXix7u2JF4EcBjBMQboSd3uFsdT9DwA1zGhmD",
  "key1": "5ScGdSwxrch1xY6yCc4orjnjK9S8aAFYrXx8DJ3aHYLn2sfcUGrG49PbP8avzVi5m6aUypR39p8HgkqPNXacSHhg",
  "key2": "5nDYXwG7QN7tiQySBafyQwowHAMLHZGHaP8Ag2yRvXeY9xFh3jmrtarEia5qW6669NqXHFdZ8n6rvf9kbptdvUcd",
  "key3": "3QXGkzd8DNXZwo8ud4P8ownoonLMAeHmtoiQuU8pHB2z9TgRcH6au6mxwPQFELhZoPb9RCvx8CjEAVFHDKJr7qGq",
  "key4": "3KWEpNKZAdysktzXUthL4sSLAhncbpp1HbPvBVWP3r5iTxB8am8wH9cHekbCJGwaorukMeXmdBg3pcHrg56tQRkf",
  "key5": "4dDYWHJjZMEaggMqiXtSYw3LGwwYcXFMcvDvNRm8A7mm4QJGF5n9mKDwyF8qZ4B1P2mrZxaTSVLEMi5AiqarnncG",
  "key6": "3e4yeo64wZBoJZb1kDuyik3s4DnezbaewmokgLuHHP8A5Wp3CpsmqVuAqPKbdQCECZvYe6LTYkYiqfJGYbHhpaLC",
  "key7": "3noeimKrjkf22Hff91yLDZCmogLUaNhCyZHWcrrDuqywpjHR3wBpsRnEHsBi1AmEu36EzCMdhWFsp1f6msnjbdD1",
  "key8": "2LFNJztjCzkQMS3bbSW5w9ZhtdfhFWQ1PUmQE3DJUGS8dAZutN5tadYwbPXFwUuXmSjP1WBPVYJ8o6oVE7QZ2Vbd",
  "key9": "3F1gnseTasTQBJ7foG7nDKHpAkrKXt4muEAR7HTijF8EfLnKfSnyMLoXiofA6XGTv8U1MCAoN99d6WBmHT9rJQGo",
  "key10": "5YJkC3fxLAZZgKxJR9vfohZmrqGXBDjQGkvKfZUnztErPjCCZUGsZ32ZvYkkbbiM8i7jibHCxrxsG2dfYPj5u7dY",
  "key11": "EpSUoa8qcLknBB38HXsjjzGY1CShTzg8RRmHbYfyyeceQ3jrRZYhpJdFYEy8RhgffaW14kLviCFtmHyyggDbiwp",
  "key12": "5nG5mX82eC3krh43ptsRZrVYycZufCDYW7x7X4MN8z9rvamJjif9UysHUu4BWn1bMo7mrztpiznZjBQCUyi2tvEN",
  "key13": "5fohhWeyZPGXK7QVjnw4ufbdoBhwEdzmA4GJAwntzv8N4ng1sG12c84aWkLxgC3scukhG4AKXvpSb4JVPpJ7fi1z",
  "key14": "4De7JMSdGNYWv97YzW3D6iRiSSeMLPH1GhR26aKFmMeumxoS8xP7aT3dUAimZF5tKmhd2wYuAaah1zvgYUtDhALh",
  "key15": "4ygdCgvUKFoVxnRoWZYTPZ2BYNtVtcYcspeJjjwB8BBaNzV37vzuUJviE6TUt4YUXsEquqdG95MkiDrydcFsTwQi",
  "key16": "5SEFFkkrawaUqD8fvmLcNGjLcvQYyfkx3VN85gzHzt35pJ9ge3Qq9SCrWGjBFvtJXujMHE4wXLC4EDFy9tY6WTy2",
  "key17": "5jyPQYVV1vVEjTLoScr4RsZaG8K2wxAYDRYyArPCRcxAEQ8JYojgLxHLMXJoqq44u41NRjeBbikT4GgDQK4ruk5D",
  "key18": "3tu8nks264TDZypExg7y6iTEwCcKLwz4EX6jUCaU4kJKR1RSoaoQRUtkq544ZzsNXen7Q5t3JPQrGHSkzZQBpaba",
  "key19": "3ob4nhESAQA7hy6yHgf9Psk4saD6FGSjn56CC2V63QabUAPRYZvaMrKyAdtQppd8Hf4hBDzHb9eM7nNtBSCUBYYP",
  "key20": "3KfNicP4e2G44vGz9VGj3P2WWqvk7CACkot9Vz9QVBFHN1jMa8jLNEdL2S3narWUPV4ht8xCwmT9w97fn5CFw7GN",
  "key21": "47t4CGfaRRXrSj9xyXKZ5MT1EbHDhCMcf6dEF6iXS2pQcCZ6T6cCnQCoQqdh3hN8SGb3msiPZ8knaCNjfHAMGZ8t",
  "key22": "3uiQSWZht5fvy27YT1SgJwX82kH8KpNToebF5T9mhkRzB1tPu5WNAPeSkcku3WjAuuVsYAZst6ANHkLNQM6HpYhR",
  "key23": "ZY9Tih6BE54acNsP1oHeQfkt4yzzfcSMZb1BAUv1h59VVZdvR1eUJimFxhcCBzXh9NHkRvquC3ztjZhcDCpQPVL",
  "key24": "4PqiDJ9cBWkkvaCWUmZ4B5ZAuCGNemiGNqhBw9hrcHASeuAbHLJg4b6CHK422kn5bBhu2Vp4YBaJkTX4M6wCeYba",
  "key25": "2pK4EEfp2iJxXBJVMFB8hbU6e21fhtDh9GBRvGt7jdjaJojxc9mFHPaYWD3B99tDc9j2wa7QD3ULg5ZhynS71LzF",
  "key26": "3NM97xHu7erwUcK893Z5GmaUPfT3kxxGv8Kk3mH7CKDYU14Zi2ZENZATDmHAEwdzmo9DJQVjhfMdHoT79subs6Fq",
  "key27": "5u8r8yZwd3rjukoeSHWh499NGwTb64U1nq69UXQ4X1RBSqDDszHPM7v32AgNB23PPuGuvGQGeyaJYRiKQQsPEffm",
  "key28": "2eToH2mjSbVWQk91TiZtv1K6dupjobVunimu6hHjcPyuqS2K67EW3qJ3PFiNsRR5bax9FyC6wY6zfcDYXschaJz6",
  "key29": "2hkXJ1MgTfzY6EkLmMoEMikQQ2sufwjVp52ysnGrTBPAagf8AZyxwWurYdFo2mAiajMMttrCjy9QpCqDoyvejba5",
  "key30": "5XjrWb8EFXxAtEW5W9Usrxvb7ZiTPZaXy2Hcrd7xQHJ4hFM5kgBcs6LUHb5niG8UgDS1MZsZC6ifdHnEka6TJXfs",
  "key31": "2QPuZKXG1sEZPY6qmP7rfukpyh4pzE6bzMeUt9WM52cZKnCBpRV3Pqch8tP71MjmRjPPcvwJKJ7nMD2LY4Fstox7",
  "key32": "53H7Uy2tyMEEKfvMYTc7mtaRgG6N5MWHrRUKLLxyC7NSEZ6evpZRaW26DPsdymHL7vAmRB92BVEDKfrs2KC9xZev",
  "key33": "4yJ44svKz8fLxLj1NFs5aM7eSuDmsU5twnuzxDDr1kSYpEX8BnQjwADgxfGJvQX7MzvrrJLYn3nzo69s1eXXSMi1",
  "key34": "4BAvs5juyf94Jz4X5ohm2orES4G8qfPNkz9GMmqRoYaDLt7qLNptoUzJwX7C9xJBBdKicM2kqDyQyCqC4vW3DZha",
  "key35": "2rxjw3K2YJJBMmHa7RP3Py5YRPJPnhsS7nqwU6sqSP6xiyPXYWueapqGQztUcbVydoNQfWjiutMek9u7eQZg3PDm",
  "key36": "5zYsKiqr4QQLHjXSqZ4w9ciGeEgmSQwEEdQsRobKZ2dniMcpEtcu8oAeNahMM5deW9QPmNsEFoaR3QVzEof7Xs2A",
  "key37": "U7gee8ZEicZVzNXEGjxtSNu9CKhkHTRXS8e2jcr9uNzBQ8hMK3rLoPayTjwEKCFnXWdc2WHmKaDaTWgbWa68khs",
  "key38": "59wTMvSbmEpQt8cp9XCKt45grUFuXBSeupEwq7M4pMGQiyoKWdsmXEG9X9CAJ6CQwHB2Uzf7tFsVFgjgqRoaRzgt",
  "key39": "2HpB57TE81vgmMicRi6J66r4ZKeRqSDy6C1ARZwx5Ru2Vd3VdYUBNjDNkAvKA9FhnXiqqNVcPr4pPPAzMTdbp25X",
  "key40": "2VurgwinoL8yy5Yb7spmsqxD2kEQDo2LYUSFrTHf6KVviQrgcqxmavdv9DZmmdThiM8pUQ5mFhcAzAsVqLUQKehx"
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
