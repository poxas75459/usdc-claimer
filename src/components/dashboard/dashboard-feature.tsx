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
    "Vz1sCqjmH9RAtBzYRMN1VSECwy9sCqXX7gXHkXKNptyGDkkfo3i8BG6Q1EvZSkCPKDUHumGFJeutkzdR337wuiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41DdBcYpTYWdszbY4FUnM7HDR2DtjKy73Mz4R6izshgCy3v4jnGv7KUvKzD6A7UtsgKdhHL64j7mfhSYE78PGJTr",
  "key1": "2bYUPJMUa4x9HhetknGnhvySc47bbAQensJWvgZ5ARuhaQegxzn3fRzE61U8rVWkLLLKDwBsTgfV745KHy14mDTK",
  "key2": "4aX2aKhbfteNfEBD7BdLsbuPGQFwXnUccNUydsp1LyWy37Wqu5zgUEmjsNCPhguSshNWzmQMBSMS5z89EzRrBrkh",
  "key3": "2LPTEdZ9QzaKnsfSaLUT5GF8n6f2hzDw4DWPzWZ5ehe3hHGA1NMz47MteRtSsewtgVaHgbVfY1NppGN3dNgQQhmX",
  "key4": "2zgtDYQmuqHkTsKSRmvgA4TLZjcN6cPMwgQvUvfXgWf4T2urLRaHEXUu3LoCYrdqK2sby64nYRJgqj46AFNxhQfX",
  "key5": "3txc6SbgsoEY1aXcm5V5gRiPEn5ce88WXsCb3mk3xU5guEGpZWmmrBZDy1qRCqHDxFV3WDRdXiy6fhwzkcfWYCEf",
  "key6": "PWnyQDdYY1ycaBtP8vdEZJPDE3skGHFU1PXSXVUWtrQKUuBBfjDBoJobMXtg5bAoR4Tp7FzXagymdA5FktJ5AdM",
  "key7": "4PKWXYNF3jAeQeMsPEqAokK6HSo32WYMVDW2UwW4fBqKKgBzWNtBNQ4hdGz8SN97mj27LaGRjfZSAC2G3voY7DH7",
  "key8": "cX3qQp9xPHfYqUyh77adnpQU1AZTDSj4ADoMWbFpJxjUV794Xwi8fs8x1XjW4yVNfkYo5FRf6ZbG7qZk1wXeDxd",
  "key9": "JTaSocmJKmEwzHvPVZrrNBBjn7hG9z3hynEmV3HwT5ktLB6rcFVMZsCarByfny7R61B65NkgpWXFqgrGtmpABSs",
  "key10": "32fPUAxAJKeBmTwCxv6pffdW7xDs9j25dn3kibh86NT26DCB3MpqsKjYoMVR8KbYJ6rumUptmgU4hFUkqRUwiwHH",
  "key11": "4itRcg2Dj4vkGkfYo4cLxFyu21yRKPtQ9Peb77ysf6Ahwp7HYQK3hBMy8PWjMjg3xhoEm81wN6nTPHSjYJHFRRGf",
  "key12": "4fLq5w5jZEQkn9VxM7d3EzDXzkhRDCzWnNFrEVMYSPiBbnq3BkRmNz1wUqi84SRgvRSU7tNjiXEUCnkpTU4RRv5R",
  "key13": "4HhUSJ1gpSHRs5ZUAzUx9uGJKEUwEoCLx8rXpmnmjLpxF3b1vLvpMuvMyGqA54rWhY35HzQyabhC8xC4dJcMH7Ed",
  "key14": "4KdiBCHiFSgPTLoPLTQpZRx5sELsVpSUbSFZEiWSKZkSjvm5SjUzfZvBbjNwCRSM6j6ta5Pwh25RrDNewdKsH629",
  "key15": "5njbdXdRR6NzYcyw8AGZwvADBZWM5iNxEdnVtUviHe4NnRVfeknMZDhmQ8gwVXVhCu4o1QJvM4t5iTixhEqgtfmW",
  "key16": "3kDJ5CxmZUvrDZie9as69x3wpEtMAB6XSVST9y1wb6aqPWJKvUVR7PocAsghjo8AeE9mvEwys2N3PHPqW5fpdBaA",
  "key17": "Tdb61DmE8PHBmeC4t3vMayMQzkeaJoGthiCnxnisDsRpTooXrpNSUan9AcR6Disv8Ab51BjNsioyfnrxdfhBg4v",
  "key18": "ccD4t8kfQxhQoV2ouTeTHbrkmFoYKH6XuKaT93jLWwLCW7VfomzWvMmadB3EHTHXWddEkk8UX1tvKpi8sVz9Ymi",
  "key19": "2Hbuu2TA993Hxv96Uk1aBjXuBEaELPcCsdoFWSiTPMgQtVYxX8YdhWL5jXmbF47Em5PiCJrV3ofLj2fg1ywe6iAc",
  "key20": "2D9wunkWM4zzwBKfCS19SvRVFs1MWXA5ACwmyjCJjB99irh68sfGFPjqFQMpk3gSPwCpuzVr8DaMB1TM7j3L7f8T",
  "key21": "5Uv9gQjidVY6HTz8cJgFoq1fUcoXQkNWwYkcdSeC979cyKxR8BJLYc66EGeiDg8AKiotUQxPLNa4u3w4j8oLBmRv",
  "key22": "5rk8BcvQmWu6a3KbcGECAQYoKNVmioTbDTbz8PGuJ5ZXFDxSsdQCq5SyAC4xD3J6tMPhykWRqGUqqZztuoFFQaGp",
  "key23": "FPX2DaBnDbSVmwuzu2u7yzhGBa5Jge3s8KzU4Zi6Kize7ytAfWM564A2o13VWSNiVdugJV91mFMZynLXxFqWUWP",
  "key24": "4PA1LacsUF3xQ9LMz5rkFkG3cBPxsuTyBLGPq7apVQsLz7vwZZx2cy9L2FkXeDcfkJQ8smFYSWim55kaMaxRzXn8",
  "key25": "4GNeCC8wNAzDVD6Y3qawyt2GDAv3V2gmrEGh2WGd3N4TWHf6WQaGSnQnRsyyJLqaJRNF7JcJJgZCBoVMCzP4Yd6H",
  "key26": "4UmFjCsDiLwCeNgcuGd4sV8x72pmTfAH98RmmcXLHhHQ6wdnAA67NCHxkSTziFydvCPKY34c1PbiKwFoS8Y4TFdA",
  "key27": "XJ8mGAUVbaCK7Yr6EGHaMcraXwQBhgcXxwChdExUyS5YpGCbuBZa2r52mUKZvXy6QPQErF2NoT53KnPQiZRC7U3",
  "key28": "4R15ezBYHHGrU74uEcPMQPEcFa4tsj53M6Me4EuowMb5MeuyaQ5c869kjuV2zFAZX8mDCN1buzKa8J9mbZATCpe5",
  "key29": "Qs2vLuP8m2LRYt1uQW8ZMsnxZT7icEomft1uXy2ZsoRkhmKnwroVAfMow5DXwQei2SbtgXoJSUEEM7MxpafM31L",
  "key30": "32Q9zAW5mhzaQg8wjPRPD35Ynza8UcFRc1955yUSMwNgFi21ksY3YgQeE2RHtqSF32j3eLjXLhaaDXnwr4rKMVLL",
  "key31": "2XSqKdy21VfjjCiVXQaV4FTAEC4BzsaYwm18R2w1Cq3NAEfCCHZ1VM3pTrnTNRCMw3LDZ47tLSKpfxiZZWdFYgKg",
  "key32": "5fLeH9YzEwSpqward615NkYAGPtQb8k7PZ9Gfixgi2d741sm8KW4EFT6DLUBMfb4TJmFRCKC1tUyFKPsQBgJo6nC",
  "key33": "3qJ1K6vggpL6WQPCJTTJvA5qzjLpr9Ef4nHsrMgRaTuWGif4Y6gbBx23JWuFXN5aamc3pbexZHeyavN2ujqWVHQk",
  "key34": "2wX3yuMCqC2jcnr92qXcBUZoxnf1Ykscm2FuKiQWRn82k3rYdqAz6uNmGGyu94pYFdRsfWp4sLLRCwpUSYUVWZap",
  "key35": "5T3hgPZ43qqPcehdFiJf1NdxFNVuzyzUnPJiUtZR8uYS8MELvZdRrz8byFdmQh98sEL5qzmpYoqWLSVe4TGm9anS",
  "key36": "3ii8YT4KLnoowXTru7duLTam7DuFwJUD7BsgRg4A9BgzNffdcukVNuWyViTT2tEzSXFUt4UwuTYupckNNeGCfnjo",
  "key37": "3EZ2bTGFNKDY3qXjWHijbEy6vE54STnLPHRJbqbGnT1EwaFuJCoZjGczEHjFEQVH6EUQh2cJuENFCMF75mMgoKho",
  "key38": "2QP4Hhxwcp9eDMiUcVKVP7fbvFMXopTqJtBqYMMCFWQVw2tA777hhjH49YYpELsnYEHbWX7C9xDemxe3Kr2CTzmL"
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
