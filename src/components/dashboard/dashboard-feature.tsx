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
    "58fdVptRTtHib9veRJigghA21nPy2BG8JpKsdxmMTtxXU1GU1rvdUANJEdoLJCRG5F3p7j3UHHBnc7jo9b67wDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dLZTVZerKX7kdRgVU3Jym8AYzyTjgVu5FKaQ3noeQxg5176bJWhTn2ZwQTQhTjTGzyVJq6dKojmiyWC6Qe12qus",
  "key1": "2bXdrKoGePFLvZY9C3g9SkvmuB4U2ZKhjdhrnzTTM8fGeetTdveX7pkshShtTWbGXSzRk9NAQBn3vDXvqWTivE36",
  "key2": "3kqyRvfMduejRjWFjX5pquWugPL7QkP9SxgC9JLcx9W31VZTtjmfDFrecFvutitoHJzMtPMqirKkZLLkfFNqPGkB",
  "key3": "5EJVPF7CLGuhfM2a3YJrocTtxxGtSkM6BTJmo9C9HLe3SdzEMJ7nCnc2WKw6xAWPiXGD6Lp1oyXb6eVV6onXxVK2",
  "key4": "5Se9zxSyHfu6iNEmbQGZWewC9epnexx8Q7p3g4Re3dZBXVNhcmF2T8bMjQcTiMtb6havB5VKt4WmSTDmsN5sAcxJ",
  "key5": "3otKDjVsHu9wZRjRYwaBFPgpbrSLXYkf3M2zehKg2dcCPDUEJ3nTEdew4eWxH3BRA74Y2bXsx1wDEk1wSF64oeDt",
  "key6": "48c8gwkT2bt28VQ66Yyus93g8ikuaCvVhUMWGeMdz9RSwEdktf2FBrKk3BqRu1G1gsZ7rtQrR3tFuNNT17MWFbVK",
  "key7": "5uZ76Ea3nDytVP7ts7TaKPiMsa6gwx948GiyyVvH46WbKAJnwuwQjXQbDkZaXfjR1DtMSDMTd21XquehYnCPFacG",
  "key8": "3oXUWxkAt2VASBvqNdjjEQqZhZn4k27a7SffHuR5oES8nk7GZZLXAQP5EEbWxxYb8RdKnyAnAsZaym2wYiqxgfLn",
  "key9": "3z2UauR8HK9QAW4aK7xjwV3qrgtdPsAJcfKFA4LY9TLrM7xkazQi8Uuf5iC69tHUZPSnp845tBb74ZLzBACkZje1",
  "key10": "2yZyGaqvAUz9UCrBN6jY9GCcdw5gDdqakzTG9zzhrEkcmKYC8bBMC1z4zrVJnSHHFVb37TmxCGgWe7Tahw8pcWiC",
  "key11": "5ECFB4T3b3JrZxUxVnpogZHGVoWKhJje9ZK39Eu6dsdnwX8HXfY3ED7FNnxqRpixzz7kSj9gm1WeAUGVdHjQUpkr",
  "key12": "43tvVfhr5QY7z9NLJR1oCYBVxcms4i55gmnCGFH7XbigrqTJMYa5LGPNn2RvT2cAddgx8881UUcQp2Z6Us9cMiBc",
  "key13": "Q2vGoC2rnrF8CjQ5MLtLEmP2u4NuH7xowuxja73EDb7xj4pR9apzDiF6Wi7x9oD5Fn3xPRJv9Dz6VVcN4aoUoA8",
  "key14": "2wnQRAjWivUTf62i8b4gjNESVLic8U3u5Cn4qfLHUjSEk6biYGY7Wmg1pBeTrcFQW7euCbZCNMd8mnLzLRNsdYHg",
  "key15": "4iLomgREmoxZ8Zkji1wPik7Zg5cCBavD2NvmL7r7Duiq5gH1RGQPVhjn9yKVri4MDGxNXk3XF6q7H1QH4cxXbqFZ",
  "key16": "4DoLY1GF3iGNj3TJNXYyEwRTNTKDkvxFGLtG9Q3Zi3xeAKttrCki53KHAyDqXhj8z4EKogcmMYW5Lu5gMSuXeGas",
  "key17": "63mKhDuwfxEar5KcbzFgyF4UBqH11ZMedWKsMsU7tKjd81KBojdgMg5id9peXyGf18TA7CmqbUsbRkBSwkd1FySQ",
  "key18": "3ymMiayEbEXDDxybfeWRuLPRURWvcDPyBHrX83HzwhgFjqGTUu8R6teuSghYboo8iC6KZjSJDvghacVHMr6AjDG3",
  "key19": "3HiyUCCYYDEMGm46PV64bbPnkcHfsgYjKhwFqYQtvFQpCLmou9XBtTCcTJwqknMC95iTPMzQuGht7iz71catSoTb",
  "key20": "5YPNLJif4KKm8nHu5QKpqWATZG2tK4F8eV3b4vWv4eY4Ec36hzfMiW4oYyz6UuMP471caganXkowYstqkhm9Z5D7",
  "key21": "2ZnU5o6FghRfZB1emVaXda9VncFbhtnqLLrfzKVeVXSd5rkfd3XDa15fzZJYDVz9krNHx3j1VXVDjqSahaKBp6Wc",
  "key22": "5ocz5TfKvyH6mLXn1NFESncg4wgr7c73VasGMDNUim8YYzkeVgRKPXK3pW8zyrAnrc6Lxfb1HFqn1647SXNTYpYf",
  "key23": "4hjR2EsshPSPUwNATnEyJqLmTZy56hTYcTVMAdqW4zTuiVJkBXhdRTGuqoSEknd7puvw5pkVD2Z2SQgQs7pj6igq",
  "key24": "4A84UuFnpUeyZZYhLh1JM616andF4HQwfzddUfBPgbzF5khEEGBLaASN1Pv8st7MucYnzfRz11J97P795aupnxP3",
  "key25": "QCBJG5Zw245Hjn162yjNqDjHsqm7BfGEbF2RTgZmf5V9imBbfcd9LNgnk6wnBA1VjVGXt515LCaRCWcFbdN1q7z",
  "key26": "5pegwomrF7ndmPjqKmWBg19gYBbPj8A78yoqebxwG6EM9nkX2hQ6k9p3cWUAxQ6cK9cGdx2fqmUxEzSTzpagyVAM",
  "key27": "w6QKVQczDGUcAdTLMMCGF6VFzNckPrAySkSsgH5tb8Ynm7mVPiF6zb2mWX4XVXDLbvzHPdcYMMMub3Sjp2kAdLu",
  "key28": "4CKMzhwB1vxzx9rZZdxGMgKAuPhRJ28pDu6ixGsAw2Dkq2H2knvkNwZzWEPdTacBFFNiM9fYNQVGSMLZX9UUBqPZ",
  "key29": "YPPWZ2QFogkmyCmX5yH7gV8TkCiesa5nmTLsGc25QxsxzPffJCMJ56JMsAGXUPn6KKEKzS8AL3TsBViVcHRvJyY",
  "key30": "4mr6wkUfCsuZNX1RU3B4hpmuPoJiZRzc36uu5hVJcQpB7vck93YiNqWVU514yTrnwEP5NeThYoAPaigkYSfHBKCa",
  "key31": "2qZ9jD8VEqkUbuBTUGpVV8izV7RxXW7a4J2Hmz7YoSGcHYA4mJzbHUyj8KMxyew6qrpdWa8S45vRwkAzGyPCpBM5",
  "key32": "5PWMzDbYqrDXoD8vzGer8mwdNdqxG1kdpx9P8RBLkvRKKegy9rJCTfACwE2Dca1C4Vhui3eBFtEdJ3GCia6HoYt5",
  "key33": "2XvEaDgei813iaeTvZMMauMPZQe9BaYRSBN9tAWtbYmhAJrXLqySZjExm89YfUDNzo3K5izgrtc9HUQ8udnwmzjy",
  "key34": "2MW5Dj9x7RaB1CpskxkFUyqpvBrsWjc9wUXADaqp85oKVKib4kosYnnGvRJbr23dCpRQA8JU3XnWEgcWFzKaoCE5",
  "key35": "5oRiTAobgJwvbBra14o3SwQgLfgmvrojMFAxbs7j6syssfud6UgULVAH96s8g7cBLZo8rPCBgTYMjoXMXCEMBnaA"
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
