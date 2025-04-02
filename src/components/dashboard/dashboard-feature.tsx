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
    "51gpcGAXY5PCcwCw2ZEt8NZkURQhgXudGcpUuuaWPievrNRx1SGazud52qywqmebYjpovAmmYRMMMuEYDspQ9731"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ERBHTc5wkRpy8HdRYTab53BogtwuKfe6NQJ7uBKqr8VJ3N7MFAz314JcEbypy9a6FokBAJmQwiyKXDaKvphyzkc",
  "key1": "21b8Jb2zxLXv6SXLiSoCfHPZSAvCo5MRCHfnBRXCahfhnm4dL3eXYJD8hRn4HoMp72XYstR235oCvEYCDRqoPGHm",
  "key2": "38G5dsiXAGA8h9WucEUiJ7PvvYdBjCXANZnhJFtTze7PM2ZVuL2oTTFt3E8gCKrTviJYJ7rRgotKUymniZJi4Waj",
  "key3": "4ixMErgvxduXfzoUPgEJGYdRgceCUVDrCLNCzGFzBjAGG3axnwYVCfVC1oKj4YYSyYLQGq3CKVoFk3wRK2NyDb3",
  "key4": "5GobMnD8Y6F3JWncBv5nxvDGczryRoJujh3n5Qq5WUQQxoGf7NLCHCLHitr9Mxg1vs5bWDBfskUWkGtXZ8roediJ",
  "key5": "2GNXTi36R1bgHnXXhVfaaCnXynKhCTEFMroHuLKhp7yhS4p5gYRjsscytSb1m7zJdhJwMvNRm3PAMPznxTo4bTpx",
  "key6": "2GfSZLpVJQyyboYhnBaCWyZiwhGkFpUHaFGGsFqddGCeVEjChJK4q6d9TwsahJ4uqHKX4VPFd1tG6Qg3BzJ6G8TN",
  "key7": "cP1rphcqaUNWx2WXnbxSETgRvmwkymgtXN4aakdbAkzcqFGZxVLjcz13YDpKkhBo55A1nghiCb3xt57zxrufr3Z",
  "key8": "5WHpgne7Rfc5UWKwjusBFM826JCh24FEEWktfogvoDtCe6G98cxSz8aYufASUaRCjbJM5TAUSEqsxf2WoSxfin8U",
  "key9": "4yyju1irkawoRb6LXBTLhjFedG4bH7bJmsEwnxF47hVCGsEub7GoFXZGbULRJad9QUxRJrrDeHXCZ6egHg7bvRJR",
  "key10": "4Tut1A8SDJSxKDnmuC3xpRcFBsaPt1SqtKWgg6MnK2GDwcwSSREYbn3bsiLX2YNnzQQnHF7S4VF2XcnvnD2FW6im",
  "key11": "5NshzUS9Qr1yjFvFpa4bhAJoY3FavyZi4rDZF9Ziw5NJY9fsyehpzcBwNTb2X4zuXxbQLkCBSZKTuDbdDyYqBsiU",
  "key12": "mDV7vnR5yL4Mfya6qKyf43DDhNV2N8WfrepDFPa6uibHQ6VSvgxTboFQWvkuo8eZrN1rKGFLusPiyVXBTGvLd6X",
  "key13": "4d6he5swNQc42YeBHzXhZrWkkwUEmUNokGNQimFeV8x574zQDgNsVxE5gRkUyPywnofyfkCEKcY2wVXeWtHhKFzs",
  "key14": "4P4vU2nZvGaAujynFqZmbYb5gDC2RxEJ41t9eAXMjNXf589mQH6HeSUbwMexTjCqYQrD6SZMFqK772ga9WJZdjPh",
  "key15": "4xNi2mZdaxtGKFcwikJu4AF7vwxXRYzpMdCYHcfsz8FbJDDP4z6e8debBqfqBgLejisnjSUzXRmuUhSaBuh9spdt",
  "key16": "3FADcjtK4xs9Qf1kTB2qjjw6F3F38FEs3qVLDgh8vW5GvYYyKAwGLoysMu2uxe4EJjs8kGBcTSrvewFtpuzvFg2o",
  "key17": "C1Ueh8mncQf939Rw46J5uCVH9c5Gy1QXxj7LeXUqhi52SDGV9NwX9nHM14JwrjsFZSd2aw6mtH6fJqi2159dfPU",
  "key18": "2HYA5GQTDMhmZVq69n7ZqcWNMgM89obLUhF8Jgmx81AKeYS4mEHhYVRPPRMeTVyQ1QwT29qXXCGNsnZ9GpKkDSEg",
  "key19": "4sq5ha3hFnpYnqYb7RHh9X2xsL1yeRb8WychgwXKbHX9iavsD5x8mzjUWVeNjkcGWhMSTHGUNieRfEkKUPrT9JHa",
  "key20": "2u697xrnza2rJeLNKbg8BPJhEcCUccpF7sXsawPCcbjeuUnw87YnERgp658mfabH3eqU3pcYABn7b59gaE6hmQ6U",
  "key21": "26Hprh8TYeNHcyHZKTdcvbS91oRbjPWhR5X9prKkpE9PmZ8LQVbep9m1DzNKCi3jjCJHZM1FGLGcdusv83s2cYbY",
  "key22": "52ZaeyJ6Bjwsff6WYFFgtM3s4MqceeCETqpGY2BPAyTHewgFZ3j8hD8UT8X9UBPsxSRQu9rcoEgob2i4ZTgWiQSP",
  "key23": "5NRqcykkVTsHXiP5NxrypUa18KhLka3bBc1eJSSot3gkDsQ45gAZNfVFHeDZqaY4MUUgJEmxBDbjekhsteBA1DK9",
  "key24": "2UugC7i1X3rrc5JSyFJMEMMeat2qQFFaKs9D8shEtArwGvG7LJFj1idvWXcqfCHaA2P9vZpBA9ccYoF2n9RoANSw",
  "key25": "673SFxTbYcym91UVt86383rrS8Gew7fV1qzH6rGMwpBJD2v3N7V6wvVN1PjxgLimpJzv2RBTUgzbobmFtgv3rpC1",
  "key26": "3wMVTezPfVp4zYdQxdRnbnx6cmbHQ9pCnYMwmux6pXrSTceZnnVjMoTAm7tP8r8EybvPgLHSYR7cUd6vkJuEetYG",
  "key27": "4SkcsyZFZ8uPQyFpxKBHadx9pWF7naPkuZdmffyhnftUgAueRAkQKEUi5hKGUHMBqQUU8zxe25ShW8mdXxfgQtKs",
  "key28": "qgKhy1bgrrrUypPV7z7Y8ZP1jHscxNqABk5MFHNxk5YisTJKHHLDHjw9gb4daWFGn4T5GLLA23tZxGVGukzCMWn",
  "key29": "3TygefK1TrhyybtNokQtxZKYzDLqQ4XiQ8eR4CrZQAzwtH3YMFbw9ZuY2CoWcMUAMmCN9wcGbQAbEfvWuCkZczkE",
  "key30": "5YgJLtGhLQSxN5ftX344EyU4bDT659gDhCPrgtg738NxAZVh2s2oR7RLpzqDAEF5X1j8X7yNtbJPB34bjM4d377U",
  "key31": "5KMB8h9QhB7vyKCnvdsWbSvR8LdaY6R5VUWCPUz9Z5a6uVMuTAmAUksQHtbE1cLPRnSm4AhJ5UsmwHnzo3WB2wXn",
  "key32": "LwHNy4Zm5SQ5fEiKgHQaVJqfvziW5iTgstPXHJQ4onhiK75nodkucYfwj7K1poGn6roaoqBm8MkR7jwXQ3aPwya",
  "key33": "3U2h4hb3oasBNGKRvSnkLYQqNgCKR2HnPMWC4QxopQZMsaWX7tSiZZp63fSZRE3zmKXs6BfCd4hKR79UXgkRXMb3",
  "key34": "2enzLK2XkmjCdzzcwmdCWxTKpAmf8xJ91cEhqptCcJRK65vJBYmYU85EheL4gnZMp7bxNAxAJTYMmHh5ukHMK3GJ",
  "key35": "3Sq3WXZZ6MKoxJEZ46qJh9dBtziPAMzMTxRf2hShoXMqaRTZGM4hhYqpbe512KJGA8MbYJuyMJX9aAEp69LN3hHP",
  "key36": "2GLLQbjboxeda9FM9FvdfXBXBTHBqowUDX6xbdkXimd3nkTUs8373LNapC5ohGiL2UNEU3GpLe9WGPJpZA9DbZYN",
  "key37": "g5DBQy9HCBLk8TzH8iMAdypJPimiCzK9ExWisGGAhF2bRpcKNpDXcSj1JZ9aV3e9H1GnUUPDfJjz3hqfWXtdBEp",
  "key38": "3SJNUsLoaqyQG3fwZKq5Ta2TrANyFfmwcT4pUyFqsaG7J7qUhQoo7LcTE9tCnwDtM8bEuoVZesh3dkraUVFZk4x5",
  "key39": "4Q9wbedECetKdSiEDYAyE7DGCXEH8Mr1GCsXA1VbftPag4DjaJBKGYYMcELz4s9FjcTVSfG8WqYt4VcJsQ9Gaun3",
  "key40": "2KQDSX5Z2TGzQJqmK9p76KnXr5uer78ZubaNYdyQiVs8ZWvFBKg4Ay4xdbrnZj4nu9SLXVAMg3nJReSj16g114Ki",
  "key41": "31ZiHsAsnJKuTXLKq8ceRPeEFqmp2DrBcG1Zig5vufs8UHzcHzCuYA7aTCejFZNoEoGtrzfrkfsFfBn1395r3Viv",
  "key42": "2EYx485yqGSWeqqYrRBMCorgzoA14kPfjcDgz6cPDJg8wsCkFF9SPwTMkfj5La1FsdUcW7uQf5LinBXGFWVuoe29",
  "key43": "4xopDhL7E4CUWiaoETzE7peECvZUMwnqSchgLhFoUUxuZdbCWnM3ePLS58xRL9PBU2G6qGtJApidcE2X67mXAa7j",
  "key44": "5cXQiWEiicax1k4bwnxWzNhTc5dJzzT67swC2fWEDE7iaQ8cT6DDcyCYWDBcEa1x6FEk55quMKxhzvhuZPSZWaSH"
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
