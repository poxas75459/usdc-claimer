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
    "3PzbMFgi8Q3TjqgoisiiBrPBvLrKPtNMWouBiS6DQfETi5Gb1c6K3sCX3pa5btSn7EYK2WVAxJepkYfCyqcpeb2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zrZAoQNyagTPABHGMjk4UPFK4S5T2LsEW5YCiGodR8wLa6GDvEuQQf2dEMinvQ2VqfjvTEPG7JfcKR6RPbv3r8V",
  "key1": "az7PvTVG4pqgryWX9KYC37ACV25ivCaXwoPSsuFwtm4mZJ7PPaCoptdMBGkcB7rk2pmkWxt7fxnmQoX9QamqccR",
  "key2": "3SJAkZZebBwL9Fpo8G7gQmnQZ575BEUYfDqrs2ZFWmSA9oasPxUAg5v6vftGUnfxdDWy6T26Wk9vMAkGtqSsCnGC",
  "key3": "2SU9t3sy2322uoeDNxPMBeaxHe1hkKz7S1jfD9iHdgZSHDwhunTrTRnkoYfe387x3Bp8SMJaLN7tjft7PzfGQrms",
  "key4": "4pg17wNBaJPgkCE1eE4bBmJCbs7djHxx8sDwuYGCtqSg4eLfD4YWZt8AKoqgfk3od6Muz8Wg7nvrotJt3bdcXSz",
  "key5": "314M5ED1pWue8j3H8Zx2gzCY5pCNqSmneXacyFKnwwCBruDwykrUdnwq31jLCXKyFFmrGbt917suv9ETU7JmNuqv",
  "key6": "2eU7w95xxptXmmXfHi49FSZwJLYDmhLxs7BbcxCkyaAaLmCpDcMnGtukfgBiDQwMebkmLuP8m745TSzVdbCKYfX7",
  "key7": "52vAsiVGeKkTtBkDmCRotyNrubjGCXfvug4Gtvyk7YkKf8b8XeKdxYPRzNdxEwCxDxBU3UeRHAYNfD4ZCbYRturb",
  "key8": "4WstV9WJvpYAwLWuLnfEu5y2LVmRSSjBZ8WKW1Liv3S4Gda4LnXrxQJ9pyaGtThA1scWF8Jx812MXntUEhn3aR87",
  "key9": "2Zs7kGuXEtDoxKFcnoayY6196cHR6NEnKTjoqAbaxVAXJXj3FKyrHnJHoCmTYPDM98G3mGB8gakK4r8vovXCTVfw",
  "key10": "4fWSyyFhVEbE7AbJY4ovAcAfVuPZA76xzMCbt5DRGMuNcnJiFeCSM9kWJhk5cfsJrHh2ug2WdyKgw1Ls7DX5ZhFK",
  "key11": "NfpiqHc3bdgvsjdamAtv76DGX3mdvNDxa3W4KrSpsBgSLESqo6sGWfA72RYh7PcvVv2LzFZTrS6fag5KwQ2FuWC",
  "key12": "4b2xRumqdkTa51irLKB5R15CzwgSDnXwhDh3fGcrg4JFHyrvbfks1ETDSJZQa5RJZLYVtFEMVAfuWKYuSm1zhWeB",
  "key13": "66tH7t1QoeuqMebakbZvbG6UhyDMn3jwpsrfMiULTmQ6vxPspWhcmetAvn3ppf9PgxCkQqEWcqBkiZiXTRYcn2xd",
  "key14": "J9kmogbLE17V3XrprwvAKU9YNPnHgF29dxKGpsqxuriAuQEm2ALsPM8Sowiu1ERURzg4HqXcdBVuqhYUzBZPMq8",
  "key15": "2zfXN6k865cmQ5SBkixjEVhWrvLuBm6abNHaJNafZBX6Duyt8wk2rYFoWfTbc1FZDT5PKFzpZEynF2TySgtY9tkr",
  "key16": "5VDXzVnhFf8kJxj652bNiaVuvnQYKv4rutSGkCQn7xFqMaaKpqdRuv2TKHdXNuEvbb6tTBK74cZDd17tb1iVbTN2",
  "key17": "3vebz31RigETs2g4tQTppaRXbs2LqAp8L2obGuo2NVs68kAdJ1iq9AignbyeBDeKGeXRM8AsoLnB6sEV9rw3ff3g",
  "key18": "3Ap2Rb4AzU1K3f989NAuGtjzJX8xzML226ZC1VydX59hKFUmVGrFQ86vStnyQEEk4QECY8JwKgqLte9poDXDySWr",
  "key19": "5WZsY1Zkj2fssCNU4FUx5rW24Scs7yWAxxtNDFZzsjFG1jybgt6Nfcn2jRoCHh4Bap2b2qHjehHKLYBm4FaZPqu2",
  "key20": "v1vKjobuTCt1HsFb9i3oRPhpsbVkA6qHgXrYb4vyzTiKZwZhm3S8SUkg4nZJ4T9EgMFaKP3VzheDzVWaXBenjcQ",
  "key21": "rVt2xT3MomYgK2urgNmHKrEBpPwYeKiWhZLCkZ2Br3NathC5aDrwCmG1Y6g2KQ4yJM7E3LCedEbMXhg46JeShRs",
  "key22": "vzex19H7mJg9bycX14NuaAu1aKkSYcMv21S3tgwHpG7LkzDDGZzEBZCzEmRCqvroCyBtYwYEgtzfiY9aX64A7AX",
  "key23": "3PVVhBLSnWiabi4MR921BHzjWrvzJh3MStwKkGyASaDeoWNWBPKrohb3bbgC1dXAhyEmEk6FSd5GD5JpX2AjPe4A",
  "key24": "4i3gms8s99SBeB7J49gpjxwmGbX7mcDLWzz1gU3wbgCb371D56Ug7qC6pXD9K7bmqGXBic7qiyjRQJV9CsYvNJf9",
  "key25": "3QjJDjaqWdYx2y5LC1TjvhHwjC7hU4Vvx48fu85npLkXf9YEUbEcAEqm1cJdNs1ZhPLTbfDH5mbK6yvJFqKW3VDu",
  "key26": "yEroofa2e4T3GaRnsfvPBxrkj6PSjYDDyT8VCuzLbR8K4wCtHN9pwdxjzDaXXoYQYR9QSRK8kGCxx2XzyUMbGoJ",
  "key27": "47kAiitHXdSyWQnGWP2KvEEBSxDUTUTRKFshyRqJHStmPch6nkJG6N6CwcWZvg2hocmV5ksCUBw9nGTPd5MgQvSy",
  "key28": "2ZgBUKqMFWhjXMShQBTsLEhPuAcRB74cCT57pyaEhKaFWfDJyjSktUx4xLhXcacNmCr3kpsWFv1eRUY6ZLCmLSFx",
  "key29": "ew55z5tDoy2Hndfi776sEEbiDKBBBHq8kfRkgW8uYtzpFfdY5egR2VDgya1H87E9qvFVHDaBPBRvFyGJvSjNJNg",
  "key30": "27wqdkxru7cxdixWfYxrqRNsNCU7MvFv2nCZwyR2kYJygnTkXLehpRy1RRr51zq1vZwLMpZK471Nvaoz5MbtNV2q",
  "key31": "5b6DoHKu93kHnoRQ3wauWtJBeJ1rg2PaUk8jiFroQnhozbfqRLrifLoTzGpT1UFhppHoxWqPcqfACH5T2XpugCXs",
  "key32": "4Q6bwbkhrmrXd25HV6oKttbvYgF1VY6cwpvAgDikkxiw4keKYdNYRFGXzsC3qM5XnWoDaHjjuyZgPR14AoLf7e41",
  "key33": "5MAic3z9gb2bmJPHPgymWh49aQ7URZTtc24fQMNXrKam9oDxrhS4uqktU6oCB9Jn6mJDSkMbKpuARogempCuFvzo",
  "key34": "5AF23Jjwd99Cwh6jzKuDtn8RjyvPtVDr2Bp9e3G6S4hTjGY959S6CoNRLMeioyvuxJXoToLUPfJSPcgyceFym741",
  "key35": "5LND35himcn3MN5Y5dhLpyWbGw18HxVfNMWszKWeXtxWTYCZEUVue6nxiGeY9Fo6Z1vu9bTSRi8JYJEZcDZtRxpU",
  "key36": "HgtYggEWKUtWAZwFDTyZGfnEx653Ws5A1PQLV6LxF5W3s95eaVxKKHX9y24kGyS6Zh1YTwHjY9yCbcvTn3Uk1oY",
  "key37": "2cEsn4kLLRzbxDXXejekVUNMapEdRnwzi5ZUcQZbyvtWMCb2s2njnw2DBDkpz4MC5YHAQTjBwoUQmjubUs4BXF27",
  "key38": "4AtSAS58dTvXPEJtv3sV9NvuWgF1UXYGXvaEHo7qqRTw1wheiZPxKv5NFn2BEUeYhPRfFHaRxxKB6shwmKSUVGDN",
  "key39": "5a68hP13kGiFXspSpu6VLsR21n1pVd3o894hp1GYPaY8gSVJB8TYCUKNgjiZ2amUBEuiLHSUqG9umM8JQw3iJJmo",
  "key40": "4d7gR2ThktQa3bNq8MPjEUSGDTiDP87V2To8D8dpMrCs7wxP1KvbgCdQXxDa2ZANeZRXdawkLXBFY7DDMrhYEwUH"
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
