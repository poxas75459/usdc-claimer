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
    "cVML4dTGHhHFHAR9T3NxU6E3bGbfcSWbW63jMTG7seoeVe6KsMDACdDuAhjTMCNaya89ykHBY1Bp1FYrWBAWT2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W6HWq2hkf4ErsRNKhHFAnCKa3swdWQBmtGqaJY3DvHoYCBu6sdisZjJ8pJBkNPq1tuHqZZdMAs17ks3NDxcPWeo",
  "key1": "246yTgCZtSCcnDsK1xMuvhS5r6ZpGRS54ZXqyy1zdqMrFgNJwzPrdAgtmSUT6627f1ARkjUrHBr7XFVdJBzJZQQR",
  "key2": "63pgEVspVsHtrNqvmYVjoCza2dFzCGhQAgVkXM7HcvqVECuBiLb3q981p2YtJaeeUg69WX58u92FapWn2Nm8ynd5",
  "key3": "4ZCkJSenKPZeY9hQrhrvxB9KYH6JAvXtuKskGWXNmaX3MBfV4vByU94wmvGZQ8w2nNYUPdkja5f1YA15NaouwoqW",
  "key4": "3HbiGzvpAsbD12fydA8xT15cSktEV29YyBvFf3gimiQxcQ4qHdutGH9VET9kzi2cSEW67UQPyYYtSDb4hkpwPGwq",
  "key5": "3eWutS4oBaEDAdr4eoepFGX3Dsa3wTgSfZ41Jk23jdc7vxLLm4cRbCbegoHmrLDtrBCiXGArchMui1VsFXTG4crW",
  "key6": "56HjwxWmD8dfqpxWaHQDNs2mypFPjCBRHty5PiZVxdVz5DDbXz2UF8zexgpMdJAxeaGtVZR9N9EoaByTrmFgYi6o",
  "key7": "64bFXzk1J2sLXx1UGbU7zqipyE16mX8z3qafwx3wFQi9XsCjSuqjBBWANisZ22V1JNVHXEHZcnnKVXhXa7pNRQqi",
  "key8": "21KmBPWy4BkBXSi4pKfWAbUP7cenza5zs4ivhqFSjEStXPkgANwZDAkTL61s1aH8QwSee3DRYrhnJJ21DpNQ7BHr",
  "key9": "KdKeYfTAwTAZMCDQVT4cQkbFYpdZVSF7EaWYMfken2LECZ41iD1aZD3k9ty5EBVSeunc7e3RX2YHofbYdqcoLbj",
  "key10": "3mfN6noeAvbtXLu5WLk7DRTcKgAajoKGiK87mijxRBGib3bDLKafyW5UaprDwPCK4Amwqz26KHFeAr1UtCC85m7W",
  "key11": "4FB1ACPtnGqjfYN665uo8BeW5RyYDktjK3rnPNgmBD9C6UHNrgDgRNYQNHqycAUHdrj6kXxzTXWoT3aK2D5Qxz6D",
  "key12": "54p35ivMEFJqEt21sXm7LZakGY2HqwxWUaotKsq9ba28fdEPw2naG289uzm7xB5jgacZnGciqDvT9EmAqE6BCCoP",
  "key13": "4LybAH1YmU978QQMQSe8Gq5uaEmLfbbQXnBTXZ9YP1KNTC9KNWoP2mTGTS8TfjC6bj4Tr4HFnQHQP9j5nDEPSDzW",
  "key14": "67XLmN84SiHYAu37s99x1YETgQaX27BN3sHd7K6gS3iy7g5GKAsKFgGRR5Nbd8LEUA8U1YB9sEzjAk49tgodsoZK",
  "key15": "5bKAXih7ipVgFDmrSSXFNKUJshopTk7ZtUuyq2Bo7PyWJAbDpWbwn1qdU93rFrxdemmiPh29w7L9mt3LN7p8DQz2",
  "key16": "5qgxDesFLrvie1fRAgp8QJ3vNxxUK5DS3U4e1tdw5KLCrkL7AAsXhGzMHgV7mn8kBCc167DvuwSUroLTHcYXuTyd",
  "key17": "2YsSQ9EG99AYRLQyNrSADsRqGFUb17E3dUFVxB1wVocCBP5yTMQXMDZWB4GqhCncJ6ZXBE5Djj52RHiEJnqaWDVH",
  "key18": "43G5zK8xzivRwrnxKAfD7r1cMi4XsX5Q2W9jrbst2AGsKTe7A8FNQgYkQvCRg44HnFqnW2ax7utbCeSARt8yCETz",
  "key19": "2KRQtYdwRjwSWwyEwywLZMeo3UwV532UwVnXPzs4kX2tePfXQwMBSYTSJM8sJ6z7YXTs8EFeHUp3V62p7ptft9C",
  "key20": "4hPYg2Bghh9z8SAouw744qWpvURVd3ErBKdysv9hxeNXo2jBuDSMfzgMXh8FD8dDQ9HK3w7aTPsCLsrbxFgrCvhA",
  "key21": "2W1oiWwTs49hDQZj3r52t7jhq4M5KNhpSjsVoxV5SA83KmwgbK71bRg9HyCUHEsaGWhCfGPo6RSPXpcYrYs5eRxz",
  "key22": "4dEvo29fT7jWQuYvNGwi3tuJHeXvefwRS2ATD4n1Ui72Df9f8rCVqcVfU25GxEiLk3xNgLqLzdahVyL9XrpkAyZ1",
  "key23": "43wqqf7EFVdzFy3qBnN7xh952uuLpy7PLWyoY62BowHXgn3FRutDSQf9U9CEGypEAyGMWKZVtKAt2zY9jc2s7s62",
  "key24": "3MDUT9ikrBJN2w59Ry9evKM8dGCPJ2zRkP1ZTYsRxjps4fQ8Pz9M512kzjQ7iepFtq3v3GWzenZXVL9Fhi5YA4U9",
  "key25": "2MSCoq7ajfNDJ11aVzSKbVZBpVSuKjpsResX9z2EJ7xgu2dBvqsLrdmu95MSXqtfP7XDxwgWyMtZLpK49nz2ztfU",
  "key26": "5o98M3hs2CcoHMvnvameHXeiumUX8i3bFHN8YagzY73UTbw5VZqVtX3Jneqqg9WCRaSh6YZvx2LJ2ekVhvgBp1uU",
  "key27": "3uyfMU11WHwVfZT9xwqREfXvjj8iL2RQc8gBmMeeZMJKUTJMpcnLwXJqY3rL9DSqx7w2mnaDWd1t9yNQGkrZkhz6",
  "key28": "3vEAUBvYWxxPrzgPeMGLQWaiBtBrU2CjmMs8SZ7HzUxbA9esZUWAhGryFdMNiMunXbJa6u1hV8Kzm4rxEiWdpipv",
  "key29": "4Q5DZEA4rgFuuK2B5KyfMGLSWKCTZboMHCUYi8WXpKSZWFVHJVLiQRpvFPqukMMKfguNgBchdiWpFp44pTE4VYPE",
  "key30": "5zASAcA7k6kyhaWn6t2o5ZhvWcJ7bq2xPEGNb7xbLzahYM1VQguckjsxj4SBt62UYpih8Wgdt1PTXWsP8yhLxsUV",
  "key31": "44ahyRzKEsZx2MTZ94MUmUDo6TpVvBRAWTf4A6GwhJRbVnAFoetiZ7HvkWPcYToDqyZzzZMih1FHsR6frtZEohxu",
  "key32": "3SA85NmfZyNSKswwxp5D6C4vrhA3HcmsxcSzwjWkWZrw7JYfMdxSvyUqsS3uwpP9rFosCGRA8QTFc1rN4v8kDhD7",
  "key33": "2PxpEunMU3BAeyJXP9rbYx6ibQAN6bsvL8ZHFJphj4u5CwGdJJm4FqoWFDTF28vNfyxga91PbDFUE96nynm23sV6",
  "key34": "3Z6Q5wg1orqLKcmtk8yPYPP8Zpww2ASzSyGiNLcLr1nPbq8LuRKx6X3DwtKZnVqwmQ8wQf3CxF8vynVDRKSZySKT",
  "key35": "3PwPk4eT1xp6k1KduSKT541wg39G721PS1QbNxdRjH45VuuHCWnWBA5dNADxxsBdogGs8Lx1McFsjMdwWQ2aD9GR",
  "key36": "3DwFg9dhFsaYEHWfbhfdbZnUeK8t88ZwqV6nYGiu8cpwwC69yzpx99FF9f6791FfDAxwUiYHjHofqyYxeu911rJ8",
  "key37": "6z7YcoRfA9qnLRixdnxcwxTkSvAMsCVPyuX11sFEFdnApyDoqdxzLJAqNoxsA1LnQoaueC25suNBAv5EwrgCgnW",
  "key38": "2XP1ichxTFEVJeWCWLYahjnF39XuhRy7BjhpZZi5Qs6gvgo7pZTw6HK1iRPt5odmJzX5DGWNV2kdhhCdRztuHsPA",
  "key39": "4F7nb4Rz4f5txn6uAQiU2pGYcM78U1BjqpeGZNpM5fZSYT2c5D8o2Hbz6C84zD4BvYYGZ4AMnZEJ7o9fuufGF5os",
  "key40": "2b519vVPUZW2wKxqoTV9BUxrSFcE3tGHyN6Wrrk3SjW2Son9QNTEucqr7Ve2jYSzn67JZ2PrWLri2tfhDdoMJGvN",
  "key41": "5G8WJcZASDkLWac1FKVZKVfQxSTuoiFM3tYEgc5SmE6cxYJKD5eB5Ryo21sAZm9aGfbVtgC7CE68i65kUthwjKka",
  "key42": "2k9GhHs5WvtH5Mu93Fi77tk1Spp2jYLQQQ1NR6gRXqgiXGaFgTdnby1wsiVggjWtnKo4oiAJTifc3khDRtmnDark"
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
