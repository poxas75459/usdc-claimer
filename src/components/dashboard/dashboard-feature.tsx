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
    "4Yvr2pkY9n3k4k2vUycsS75vZrp1yaCMC19XyQfJkM6pxUXQ7i9kaThU74AthqiiK2fSCzojkttSamopuFf1FWvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y8kzKYjoJK8konXBLtgWo1QMNy2XHNZAGVnyCGRhrTY4VTDRzLjxp9bnNtSAV5o91jkyrUeafvnDVfKvHHza6Am",
  "key1": "4EagPL5mcTQTjL12kLCEu8JbpYVsQseNzC4YcHz6Wd2u6vwydd1ayBDTRdW3idda8FyE1z1fiCpweAk8MyMCRgjy",
  "key2": "4HhzdsEL3U4FgXW23SJe1XEugSJgvHw2SjKcQB6kiQiLX9gsqAwdYe3U88Zpqkmb4zPfs59jW7TKqvNNzwr96Eu4",
  "key3": "2V9wrLkNfjdPMu8yKsnM7ZyoEbTPuYJQXzWYGSRyZyTv41br1a6H4w53Sub2Sf1g6nycdn6Av31PZogazGqxw7bi",
  "key4": "5GASjFWmPUyZjNkuf9S4qrLPDQv3Ah4nKXSiCafNWfi5UDrmDeUujSSPuTptNFUMMJW5CQ3P15Y3wfvbVar7N2UG",
  "key5": "zj36gLczy1UtH5E53ui6z6TXNKnDsNVzf4BYXnxs3ihbKZk2RQ6H5RFcRPoc41nU8r817EWdCGg5YbqSdq8ZdkS",
  "key6": "33YKqULM82sQCVDuNUCbTKwB8Qh3XEohsqW9bBSYDbAv5uyWLnRABtgWsaeidqErBRaerYNTR1u5cCsKSygDxiuG",
  "key7": "3CQ5LYtvwrcCbiH2DLDRYG4tVyCo9SuEAmqzrHAZDJFuJicKWZ2G4JrZzmTUFVNh3dpHcGgq4DMyuSev4ZMSTBQL",
  "key8": "4MELou6xM3AzHveG5bKsa85eAPsFmpmMh7QAxGtLXUVWU81F3yar4Rqfrso3RZBhXyr7HQ1fvD3WsbEcZoJgpFJF",
  "key9": "4M6mRN1Z7179vBXCGuiCMgASfg2t5wF5mFa3AeVQU41xSk6gfNRdY6GCCsZBDbHRCsFZkBFPd38V89qWyCoi4CMZ",
  "key10": "KyXtGozeXHGronRmTXCf2a9NkRGHu9Qpb8oR5WgybctECxf6J46SkY7vxr5ryQPeigcY6QQYqEZV2w63hSyB7BU",
  "key11": "3uA1TjLywJjmwCozt6DxeNMRkuYP7Kuxyq1naga5GZPP5vt6rdYsxCSGkymGPNe5Sy2HQDd9kAiDEEXm9oRAicnx",
  "key12": "42DZWNZnQSeqjTepuxpLaCBFUgbZtkuGNpKVtsqMZ4NPFsU2KQkDvR1vWKjCokSKe58pXCjEPth1DoobHGxWDsd1",
  "key13": "uH8JNPD6sDLupWC6QB8ykp8Yia2iMd3seAa3ptoD6T9rt1NcBbxR4jdZ658SvYx2FNtWrAjem5N6Vg3Tmz6xWbf",
  "key14": "53ZjjSCbjWCoxfwC2AGvB7uvwozbAZn4RSoFe9X7u7UvE9ckV28Xm1z151tkw2ovCUhoiXMF1yCDjyQo3NW6cuEY",
  "key15": "4r5n4Xay4G3xfYppAEJZRyaQRQx3jA7QVS363wvvtiZDXsMeLQ1mzqKRFdjQojjwyG2mUpKkrCfiCEMaZousBAg9",
  "key16": "5PqUBzjcj8Je9pjYgS6XcEvwmoy1k6wTUdo8ZjdMTBAEnq2M8CaurKH7zfbmZctqpzqQdwJWkE2R73w2fR5eBgTa",
  "key17": "5WxxAhpokpHDc5NWdJ1SN2shyMoBgHUJ7pyFuPEknbNQD7t1muNu4L9RPDu3y7SwbvWmDeKMQNQZRJCS2e9cPR2L",
  "key18": "2YH5fytzXtwpPYFj4eXMDZKaqiTKedyS6qQd8Myf1serThAqq8xYPCEMBoEhHp8fbC78xrSx31QeCagYVV8Wjtk6",
  "key19": "5mZdoCY7ZDNQAxpiSpEa8bZ4gvhW5mvzZb7SCv47pLtACQKnazy7xRxSB1pNvEBr6kxHjpRjvnAyqHNTHu2S6Mhp",
  "key20": "VrybzdMr7Ksxp6jEDuCbxt5JnxCmbKJPQkSoAzEoNA996meDMFaVwUcJbfDndUzei3nMqDbQHbb9pmgULWpcwe6",
  "key21": "3FWNvdwUP5pcTWyyhN9bLyEDVrMZWLEEGBDxBSg2E73hzXTNjteauW6MvJQEpw1DHaD7FcBWNNNQNKPxcjtmQ1o2",
  "key22": "25h4mSvR2CBkV1dQtcwgsDcfDHGR1jeUNxVFC6Zg5zT4i165VEhABoBubmf2MAEnPRjRCyzKHP2LGfTE8HUL9Myo",
  "key23": "3WuoKdLoHcCQfpsF52tmK8chhSwMRS6QyV7iMMXRAAFjSm4FBNG1qYaRnAdpPsSnsJXcCS424wYT5bJSVDZuxC5i",
  "key24": "41SKRWvMtrHTd5yFh5HSBZUvHBt6JWYAyrVLMXyXrXXx96Z62kgSt4hzZjhpoRjDMHpmcpoVbQvKpTAPhuTF6dNF",
  "key25": "3mJLZDYKeoHJDYp1R2XaBBAP5j1RBFLMTE15ztrrYcBHHpjn9tM3r5ctKTkzfraH7mU2pf27KxYuWi88zW33F9H8",
  "key26": "19csgXRMRed9JhX3CLJSFb2gA4gvLQLyv5eVtELg8FRfVdEkkjP35wnGsybPgvo6HGKMN23HCUteKcey6jT72aj",
  "key27": "3dH9op7Si3uM3GPYWNuzase5DDturMUgcSw64GcZaKs98V54B87vrab7PWxCqGkWVjhaNT1b1Hq6ogjiBpRUQFsy",
  "key28": "5sD8pzgopGN8b9atpCRTHv6e9NiosCyUXvWDnhNAB1CE9gEGKfJU1XDnRseJ8HyjPwXuBQYey4cCpcGnfgozvAgZ",
  "key29": "5KzccgccynyCruN2q3WKPbdcviooh3Uu3YECoHxskXTrkpB4AZtDdjxUgUTw54742AEwXgD5kpd7EUacHthHSGg7",
  "key30": "55aUdmBVGLSa5AV3mm1e24zqMhg3TbjjyXNjJudoB8w2YRx8KLDjL97zfvUm9AFQH6aSeVLCvcVx8QnoYK5xXvXh",
  "key31": "3npNjbZs43bMx9RmR5t4VeY2AdHJBgEYAoRTMyzvNE6yqrk9tTMUC8kMD8dZaJ789NeR3CUAnJeW9V9nxfpTgp6a",
  "key32": "2RwqeG54wyNqkNVxoA7sExCTZ4fiuwNsqkkYv2ueufMwyeVvhNZW7Khq85LSxLVtnWVbJKF29BKFbwXHjYqStmr9",
  "key33": "FaxW3GXsMNVeNJ9HxHyUpjhYA9UqpQtTiyJ1mXEP6fT9frzRDJDRvZZSev8djGMhyLshV29AyR8nCw8LGtQFR54",
  "key34": "2WoT72uerhyqXkBaXL7mnhMkpw5T6HwLtDv5VEcP446zVPtBfaRGpi67e6RbsmwPcnDb1pX4wu6D7W8YkhKdfQ48",
  "key35": "2NUL9y9rTrgpXkQWWnUdpZyTsAcFeXbcG9jbLmVQRLguPvh41QeLgYsZGaVN5v8dAE4t2k47kybjL7dbHPRYCtT1",
  "key36": "SBLjJDRJdkK3Y2qvcW1aAugPcHtrX34hmNE2aLkh2dWkrHeubSA7oNfJDs66qqDpi8DmjkpNnU97696ZKcD43EQ",
  "key37": "53q9pKYGVU9PphX2xXRjcEjaunT7ZjVS78abo14B3qyMDvR2CL2EL8BpPxFnNr3UVeBDP565ngLWXMQEN8SVKVhZ",
  "key38": "osogQmZdX1q3kSr37uA95HgfEswdxztXgx29hhKuRWU1fKbtDJeeaMmwvpMNeTxScAR5u6yf8xgZERQTZpyRiJE",
  "key39": "5Qg1UPmNqS42xtA3F2MzVCtZgKsHTmqZ23h1t6RyM9zsaV1hwgMdiLTTdESE3eJ2s2JevGaKno3cLxv1KkHP6YZ7",
  "key40": "4AXgz7xmHsujDNGMrVs1UK2s1WYiAHSQcGPwgTpwxJx34u34Ubu6wHqvLoKnawQSp5PDRsvFQHGUdq25crHFVVgR",
  "key41": "2AD22rLa2VaA1ruGfHQxPm4EWe3u2X1j63jHeeNZ91Wv8DVVwbxd4WBHLgY3UZ5MuChSM9wvNAU1vczyYhPap77f",
  "key42": "2mjxU1wS8BsiXqcU36r1emAgCbXbcqeAXTtoCGvPEc9q5Du51ocr8vFpdniMyW7awJN6DW9YvJ4xjLMZquDdNKJQ",
  "key43": "5tQg7DiGx9jJbWBDvGCocCStYU7APMkv9GGC5HsKqq9pZdnH2t4w1iBLVhw5akoGBWoTNF41GutbHPU141KZYaNz"
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
