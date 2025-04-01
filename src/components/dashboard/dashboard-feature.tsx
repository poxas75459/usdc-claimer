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
    "48FHwjBoRTRD6GTkGuxfKMaojtsB2LpYxs9XZY5BYG4JibWYptPbj5GT3E6DH36hwxN4BGHkPEy9iZ645B9bWVqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RAjWxpX95tZMfxGhLSmiX67wsuzs4KWHLcgsgKTbqQYcTunWB5EVpq4J7QefZotw9zh1CMQivrP9wYq5dmgCYt7",
  "key1": "3kyThyXXUcCaK7ty3uTikYUS1cnc6hth2V8vR2bEBv3oE8habhbcBLMBf7mfHSeHwMefZNu3mHaNRHY9ci8voeMs",
  "key2": "5NtHHQr9MZczKLfKSBys8vXyjFdqKZiWSNQEH1MAEuUZJSS19qUpThi9R6imB4Np1zNjEdzf2B8rGWZS2fm1UfKx",
  "key3": "49X26bF4sEAydNvrHKkFU7T4v8BkYRTJk9xvUNkTYrxGqtRnfdwVLyLZkP2rh9aZLSvvKx6z72fCbpuTrrT18JiL",
  "key4": "4xcpEDEiVRm9iGS41hzzdi1FkSo64R9HfDqGqHLvUvnG67DZ1nd53gKeZG48Kh69MVeRBE2q12Dxqyu1Hftd68qK",
  "key5": "2s42x2SVC5yhYjSqb4T48qXwHpS6BcBToEXWcDH1EDEYVEH8GmGxyNRfa2Lmhv77xAz1i4L6LnhcK1h9ZB3aRGsy",
  "key6": "adbUYPoTAtDd4fzG55AQhGFmZQX8B4ELaP5WVno4vMhtCuYx6SmtCZo7qvGkquxfxcmS5JNTSzXm6EEMvR9kTBA",
  "key7": "5UvhHzrMrtxAKpnNhLaGBLmqYNjaqNB8HyQVopzTuJiJYoKa2S91aB8pPaoLqpKLbLEG8oSAHZN7nVSHRV6scEUS",
  "key8": "3r2bLsgssJFoAMpfbiwxNxp4zAZrZwG7G7fhrXNssTFBEbqqwWgP83PVzYkN9oeqZKouDxJh3GWj5cbQxMp5kmwf",
  "key9": "46LMrw71KTzWQ14ABPTVP4WN8Lb6YPn6EaK3LJ8vq91bvhqzUyNJnbpy71siqrca94wZwvBQsr57NaXZiu5EdT6w",
  "key10": "EVRz6V2GwDwE4bdANg2gKctz411Q5GcbjzdjyVsmkRBTYeK9GYDhu1zmNWJbCyL3zLgA7A2QLzfMbAKve56Vmb2",
  "key11": "3DxWE6yFSxWvr4sERiFfu2dU5eeMNDLVeNYTbPtq1AoS9thqyUT3ERVdP93G2e3mraYpGt2ruVHfUJgibCZ2xWVN",
  "key12": "3KDx2WVMyxPMf8PUuC733VUohc95yT3UMBuyGYLZbx2SGEyL1H3r7cnePLdnGsa1CMW3xLvN3Gw1evaFPMs9shce",
  "key13": "55VNvVuKfaN4eWU1UvrFXe66JP3dPYP4KAotKMhhE2kWLRpTNDSTA4PPidAL5HDGx6fMQtz3WsiEBnewxXmfQ9C7",
  "key14": "3vUp5k5frfcC5ePqRR4ZX95nn3idYru2jLbWdFpJZ4WNKdeWf4rx9pmA2q2hVmchwnJwp23eka6yNDxSE6QJFWgj",
  "key15": "3igkLedLAr8rrjHHVmiNe5wuahU1nb6E8r4MKedcLjRkZtZ2FoVEehxaD4VTi7XGVw9WKtGc1a42p6FKMjW73ru9",
  "key16": "i2gerCLbdJ7eibidt61sAxApmfBYNFRTWzCNpcp6guPT5afvvhC37XtnxHmqSZdWFKTYhYskdYSgA9Gybg425bo",
  "key17": "2tGpJUfv7g9PkrRjLqoAmQr6NoZtXTRjCHPFAHfftos4HdsRkayPdb4rNHt4cyYtAGAQQ2FosHAvQFinDaRD8NsD",
  "key18": "58BPbGsC9uLPwDphFFoNH3Kbvwu3xa5SQB8Z6NFZ4qnRc2VnjfQVPpuaNGVdPjuK55kZK6g89JHj3VhLyPE8u786",
  "key19": "51WneniYuG3be7mTQtf1Y9nsm7MrJsD3zZ8J1cF1BdX38pZNmK7jrfmbLg2KGz3XDvxm8BepgN37DvotLu2wp9mw",
  "key20": "5kewiEwAe3qZZQ6EPeDLw5mbg9KDjwCkJ1rtHDEmJrrAZ2u7hTPbEbDFtQsuFxJkRx1We9VtpCYzH9AHuryAN7Rt",
  "key21": "5W2SoE1GpSEw7oDExRDAAHafDubcdTcixeNfCpfas9PUqxHvciFX9L5PhUZ92X42YCiZcTPSajMH6bWUjDaEPRcG",
  "key22": "5dQ6WR9EEhcyuZ5qPkCDNUazp9LdyujauSRNPMvNhUP83jddWZ7bvvhDnHRp5TummK9WJ2gB1zWM7Z8dafDAgpgT",
  "key23": "5y6Zg1pJxE8sDfXCk5gMAuGPLZVYf8sMpDZkYa2cRRpLVSG8SfTZT98SfSWgrdYxq2CRJqoeiwLwmppCu3sCvTmR",
  "key24": "2r72PVGkLcGYVUR4Yaf3VPD33mbrUxj1o9MuMDgszZtDeNnsi4WsLBVuPw4qDJBUyUpCrBspHWRUwPhDPgygPTGp",
  "key25": "56SLEpuM1etKQ3nEydg6azgwkLeqkBH6wRY6NkecMxNYs6aHtKVYCBMgnHachXmTDuukJRMqxuRqcPUgtUsuULrt",
  "key26": "5GSzNX6kikq3AdGxy73XF747p3nrovz3XHRz72FrfoBtSQjgf4iC22PUV6mnK5rfnEXXoAzkrK5n3ieiLHoV14q9",
  "key27": "262kiQ4BENFH5MYtXVh5mPAxmGHsYGybTLpgZqPFUcfZAUFisjBtiNDKFNAsY3DnNXR6spsWpsyD4xr2RS5HY9xJ",
  "key28": "oPCdQde4Wzc7aGyeQvaQMWTpANMHGMsp98Kk1acxgg1HTMJL9rBBPA1j1bFgYV5Hr79hswK8ZEM9VpYsx1fk3en",
  "key29": "3zmq1jV9HZdewoBHQ7Fw6vtfKkTXvBs6yGseaTuouJoZT9mJsfa22F9V4RPuht3iBA46fahAkhhY6wkAXYrH1jYn",
  "key30": "54qvY9ajD47or3F5QsdqCN3KSgLpDp27pZPfpvd1hYehYiV1v71dy3sP9cprymnenyrgE24sRntx2aB6wkoN8VKd",
  "key31": "4tcgYR1NxuQc85bhdZGNtBgEfhM3WcXbTmFwK6tzXr83cqFnZkDG34wBUYQLUKExsM2bKC3UEA4XCPaKnPvNtzoP",
  "key32": "5k6UeS6Jy6QavsN3v86hemCe8mDMMrBPskA79J2cGpXYWhTw1kmSjA4TJxroFTiwHshg2WwBqAnViHsYJZy74rjP",
  "key33": "2NJEvindhwq4L29NUNgeJtLc3YK7sDhy9uojyZsd5QsieXgNH1FBqg7WQBV8EwNhnAatvNJ4gZ3VPU2PuKpcabKi",
  "key34": "5Wi36S7x5oZKbGbK6QUt3GaXaFL1RwMiVqjaZUySuvqEuWq5prt1jH8XrDBGNLrr4yBzYnmTC2Dig2bbPyGFE4sv",
  "key35": "37kzZUnc4qVVGbm1ZihPP6LhVXL6QbY4PPrPSX3WixXiPMKNxX6ebDysoQYNeUaz5WpHDw1u1e2GkqWhihNoynT5",
  "key36": "5ErTDtzQYwcqmu3avppFie4mEDynXvKvDRuiBPAfnPUcwiJC3LBuZQhRruUxWS1gg7aMJTyrcuEZbNpqz4b6HxU5",
  "key37": "3C3EyFb8qNgA5VnwS1Yov4yG6Yxj3mk12isjXxSAuRCiLiSz3gGEPMkbFKD3PWg8Lt29YXn86tmddBbp8V8VmUG",
  "key38": "2CkCVMYFhM74vCC46qs8NPfL4nrfQoXhQEaC3oTPZP4eGkkofcNWBRDVwy23R3nqLwHaTVvXbiHor4RHKasQyPsK",
  "key39": "pJ77FUKT5uWE5qDmV35bSHSGKMNfioX5KSXGg9xGmajsK84dUoXEUHAYzxTuFcR6wLe24o6TJJdpS2CYPy97Xe8",
  "key40": "3AQ4s27coTCmHAQvjLEGgK8yeyjoAgdmBgRHsqQWAjk6AUanj5Dzkrq1y7qowFeKPDaA1TFCVAWnKJsZf8jijX7C",
  "key41": "eMVMiSazTpyhBZAVBBh4MU9YX1LW1GPvBrJfXQ35iqtHDjEkdRuVPq91euFzyXV8pS47wE4GszcbUKPpd5fDaeE",
  "key42": "3bTZv6T4CKQksNHkHKcfqKfHSqczZj6e61XZf8YMjMVYVPyrkC9xab3dUzYekNXcx8uFUg46uvW7oGF7JGH5D7aF",
  "key43": "66u2FumhEyJ8J1k1brxSX5aSS6WhUiTTAy7qNZVGZpGKE8txGSGnZi97DWgV6LuMTSKCgo2V78xYGo4GFMtUMAZ"
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
