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
    "2PNqvr6kjgpdRxRJ8962PWb7dsxvH3xwzCtd88JZs68pMTHpRjCTaPCEbWZqxAsYPzQMqKDysXezNKUn6aKGn5Ki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GCMA2UvjG1FuRLdUbZsu1DAf8bgqWEcj7y8kpqJL2RmxaTPNetThHSSf562Fi6JZrrbdrrZUeKxr7LVZBHJm5AB",
  "key1": "32maHazo4Lfsz25MLthdcSh8oeE4PSyuzbisM2GwMgyk6Dp93J62Lbmm3dpB3jJtKm6v2DiqLQFygTbwiuxzycd4",
  "key2": "5oTGUsaugnxdb3pmqpCwuEpA2KmTHhGJP79DTPcr9sUBBY2dxbJaNPPyfZUiig3QbsiVZPUZhNdoVNJQhghNa8oU",
  "key3": "MmJAiSC28KznmXyqc8kmuidhimJrDthBHP68SvmNio1wNDz6PKDLHwTQd6oscBtFmWbttLjb1NmWWvo3b6seaXc",
  "key4": "26FtAF1miRtA38uBrh9x1dym7oBnsaTSjoy5HMKvMowtnZ2Z2it6B1ewUnmnLRA8fwc4LBpirwYWD9ozUk9b1Cjr",
  "key5": "3Le9FVUrXSdT7AM29UDdf9rfJH8aJE34qTy4DmZeb6AoU6UUXEHiD6NWXusA5MbrjebmUx7RP79LjzG18ciNoQ5x",
  "key6": "4aYUbQUFYH9d8aBZ8RpcKyxpntZ1xipbCfwhoMQiZjQY2uApkN66JYMJipoaZi8ZD2pzp9yWbLRHpkcqX4GxM1cD",
  "key7": "533BeFXkgWSbgt5XS2FtNqv7CbKJ1EJiMQUWaCqbRnu1ApEdYxhrwu4aBmmNp9niD8sPDKLQzBUP9Q2U6pgLEeqd",
  "key8": "PTnEkwzK3WJcakHezZLdRt9Qnnyc2gxdn5yy5JWwtkagrPVtuwEDpc5foJhWRn6KFDCJnN1TzKn9VkDcYXkzJMU",
  "key9": "3jgZvktZoFUQLuF6wMgaaCXyBpkum6WTCnG4RuzQm2fz1TuNsqyzehAw6xsZSedf6GN1cmwNqT6eDKoAYuja7MKK",
  "key10": "3GEwrcqktqN8J5N5mWeLFUtrWhf85NA17qDTAvcUNBG6Tvy7tzcC4Cr3hxmnDnNWFANxcdFAjt1RsMSBSph3vgRe",
  "key11": "2WatPkBaWCtMbawFXYbev7hbxhA42m1EtkCU7fShDMvRwadgQwvv2reY9MyLXg85qMZNgAhVtrSmaVPAH4g6vULe",
  "key12": "GjknQDsa9ysGV2U6atKijL14KswYrCgm8jCsGz6U7YsMFnZ6TWNSDAKQmZ43LWX5BK2mrYKNw2nLLm372Sr4KSC",
  "key13": "56qwPRjkWfhvgRzuPmjngPvazLFFdmc9NQYFFhQNyJhoRXovk2u2j9qD4orAdFFbtNr3NzkTW5Pku891NMQWkksf",
  "key14": "2XMYpeDFciC1FEMCFGa25EdW7iBMdeCVkSZaLnncKi6ANjxciad5QiYGpmqEMtMjaaUDHTeeW3DKbRscjMTHwaVb",
  "key15": "5zzNwx8smDHfV5tZ172CGcEH5f95eFgdrMjHz1HMzwcy3VwFWC3xKC8oTK3RBiDWs9yy5QqKQ8qJU8kzeNncRNQ5",
  "key16": "56H4F6fKJEVG1hBF4vnwvQbU9t3kAxySoDf3WjA4uo4UU7wfRRCCLhoSFjVGtKd8wxKH9UXUdq3r21rsxeMfB95j",
  "key17": "5xgsvxv9dPTLGTHCHonQS6TisaBzwj6cRbuUSH47tRv3APtri96PjmCBhVr33xhyH2bV3D4WZoyjvGL8uzpZCpbH",
  "key18": "4K7CTaLxKptiRaTF7KoDDVDrc9wr76JpWr6voshDQAWawdX6ELwZmCHcggZiUZjyokG2bAuhZ4ASY9U2H4AfFbEd",
  "key19": "i41fRRcp3asvNKWDyhTe2qKyBx5rWz7EzCjZMC65JqBVx14Wifjz7vfMjLaWJUrxD47idNzJNcDbRspf8N7THoN",
  "key20": "41LHrPFrt1CPhVUNn1dhYaEPYXSHmVMRzvvR2Hg66p6DyX5mCCUv2rXSRgVJ4kqqram5Q7bYAsbmjJsjqZgvindv",
  "key21": "3P8faodoYN2Bn16Fs7K3cokxddBiU2Xq9pjAZ2UAF9S94J21obbWdwgrp7X7R62p3D6He9erhbgBKQRVuQTNCBMH",
  "key22": "2XYtpcZpkWAMxo1Dxu5zbqyN66nZMmeCoJbpzHgHNJT6pdrUbWBvETFpJK8T1cdNR8TFjoYAwQoG5t3C1kk5Hsi5",
  "key23": "573F1wehJ416QAv2L9gpuzGaLpXE5aMbUBHrnS8pVJEjC4EE7J8HbZXy6EGzH8F4kLsbWChegYTTXPjQ9xRFj11q",
  "key24": "3ae5vtVH3ziYFT9rEQjGJ6C1QanWgu5kXiJmcYShEbNU6sH17AS7dFZ11shpD9g69HZB9Zs8BunQRhdyT1Ep5LyJ",
  "key25": "2fsuYh74xKppw4mB8xVDK2hMcqWGcSy4fhb5ePoEw1htAbJxo3UouT9YkqY7RRvBdHgLUFuSAzZGAx9io9xutoNY",
  "key26": "2qFD1RoQTHgrMKvF5B2pCsXmeoA7XtHwfSeuyS6at4DFtuZbLAjQ4ZaM39HWJnrEW2cUxgjs6rMWErJDHWhBNmxE",
  "key27": "22XCqQiBzdyYcVPH4GERNssR8AoW4cAUFzp1MxUWDW62DCveR9WF1nAbnuLyaS5tkwUaxsEEWcctTWCxk2rrzgUy",
  "key28": "5xcdQDShz3yryaRfXScM68v1ZJZNhzmmmmxyWLhf5QYCpD7HVfqmwxeM8r3G4XC6MUbvzCy4mRagW2kueHaw4hoJ",
  "key29": "3VgHYJ3jze3vuDajQJCKAZ9M4fLzRBnpQdWzKCACUq2Y3Uc6chdMxaTb2R7v6Wewu4rnRVzARpGnX6QUXMphqtDK",
  "key30": "4dcUBg1HMuMdxK4wBajWYhrJfunYE9Zqwv1fDGnJDbLrbG7h7LPvamvdyEsDMgMn1Yovtiqm2udEhZFsNhSfzW5j",
  "key31": "2JUWhHZj5s8dCxYfgjQQjuiLJTctDsSJnRo6NYc2fdyGnZ7ESQVV9X67VAegpLEm8oNdX51mxHv5hVdSwTvWdMH5",
  "key32": "2y1BvttCWhZrcGYErjxGpvPPPowsM3nDnyhyGYzQzxWkA7DRax2PJtA7ARub4MrbhWS9dGY8zDig4Dne9URco9uL",
  "key33": "CViGPnU3MuuefPrctAvxutodFvvUFT3aMdqAeED6x18h3i2KgtsCcm7h1PgNw2cCY1GDsnbkbFPYi11isa85aoT",
  "key34": "5oXugT4xpE9Mhg5RGXUwBCXSL3EvHKYPduwkS7kJv2NdEnA5a7TYttxi9PFhhjZ37U33qruKgZbeyW3zmDC7oe7T",
  "key35": "5J7XvFMoWcocAWUDEAsAzKbZQNwcdDfxz9YYBEkZfToDYoHPgqXA3vzwqtycS6N7q6Gei3BknFmsj5bsMAvfdy1T",
  "key36": "3w5ZZm4ZLES5BQji5QGPsmSVySTHQV8xJm9ho8cZR5d3r2vqkvAxpnFB8RUCGakndQ6jiJHBwHo3hZr1dCfcNvtd",
  "key37": "XpyeHqgDeAg6yunx6hKpH5NK7c8rR9dfTB1JXQbB9bK9f41xxh3GkY5w8Ej2E8ZgPWK1WWb3Ht91iTeN18qLTLW"
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
