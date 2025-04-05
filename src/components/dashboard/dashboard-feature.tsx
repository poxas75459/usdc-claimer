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
    "5RvHJXYNDvQDeoR7PossYah4fdwUJJcmHW2ASt4S3u4Gda82Aw7DMBGdpsgMyco5aEfyHwwTUNz8ZUTdNLPMtMYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66oPLKk1uQks8goDUqhLSJRLdGpdNaiVaezdriXGXRxGahtAGMy1ueUsNXKw16k5Zrcqj1CsGWu5G4nF1KJtutD1",
  "key1": "45gRL3xPWBHPBj9Xm59GPBfpvRtAbeiJrtX4KbxTxJvXCtR3fhvLG9JVuoUd8VHGRuSrev6pfq36akzav61iHAny",
  "key2": "5meREdPcHrAzDtA5d4sPnqH9AiUKt8Mr6roEdWzTYkv6FqVNG4RmabHuaAV48tFDSs6pgqZt3fYcDfWe3carrHvZ",
  "key3": "4tm5zwGANVD7ShP5v3JDwy59ZM7gpcsQcX5yUvaxWZAYmtySp6kuXcCiVa1gQDRQUH65v2S4TKrdkv7goZdM9p5L",
  "key4": "4NNCxGeiB9BNtUPumBjeT6UPErYene1s6QieWMobY9HbNAnbQfCYqLimCNPsoTscF68vxPJkyt8AV3U7jYrdwAL4",
  "key5": "eW3gb9ovhQ6gvmPVdYNM5ZL665uQze9GgvazUofQVWUDmDSaLtzHLGHLt4PjsCoTFMUYstUbP5g6BKPj4DRnfdU",
  "key6": "7FqU8NNowC9yPRuFsbVuM2uXHQpWCmEzw9iFUvrUR1KdKhBg3rDUm5WKzf4We5sq2hrk6rVsTPEKJ4QAGSJLEca",
  "key7": "22XKXpLb84945tGcyB1kv6QVCeLTZNaJWa1EDdMdy2HvQR8PqFtfCkwEV55ESfD1Q9trbPzyYoAW2skEDkKUjK61",
  "key8": "44DnwR1QxTaxMYYr8aCnL3nz3by3PT4REcNiXRQs9v5EdaBPhDH84ZunWvLi61AGon77HgKuYHopsxtY6khZWjCS",
  "key9": "38mS76YunDGz5Yjtf4C45k6QJDwMTPZ4CQ7fGYXHMTgP5GaVLiJkCZtd9ABiDUmeuH51kP3jCCrdbi5Z45p6nCDK",
  "key10": "4aBJBCERriQRPMRvAnV5Lb2AqizwapswC7QmZK8eHwhKR7gZMBRV9wQ8ZRx3cRcjLJswjzqvao77VfygVLCVpBZe",
  "key11": "5BJdcCPWT94Xjf92XjrEPMXoZkabiRnDCyVNPwT96oVFxnZGbMe7NDArvoHg5TLKLbEptxcsJsA36HBrXCDY8q5D",
  "key12": "2g3RMWkVJuPVSvh1ZEm5YKBn2fGiCkcyyffNpphyWaXqazJrNvppuBSf7FZttAxEtSzZGUQYC8dpbhx9LLDDBLSH",
  "key13": "3pWdEk8gd5fQur3WZdHtAB3Bh5VV1GZ3WEeyYxPHup96Bt2wcaW6aGog4XkrKN9hFr3DL1odjHrJA1W6TqTXT8sz",
  "key14": "jCE84jpjh3Y2Z9Nz6Kk8HGngD2gbyB3H8Gbpnu6m7M7i9tvFZFS9Z8ojzgQn2pjPGP18vFprEErGs3kcLucQCah",
  "key15": "3wwnkasBN6tVgJTMKgLN9odwE8pkPL721MnAbBkG5M3fVbwC1yR5gnFWJ2ExboPzBRPJkgNxL2UD1ZoottfpDWwV",
  "key16": "271acKszdGFVZYAzLFtKtJGemF3FfxKS1K6LtmaPQnWFtwRBUgsQbNRz4zBbTe3aQDGGej5CSwkEJCyAjftHmWD3",
  "key17": "oVVTdqAWy2uc66WGVGtrjMLosaossZSVSb4YP3EBn1zNqz7EB6U6QW55i7zeYQGt31UTE2E9iHcJbY45aD69yVj",
  "key18": "3Nhs4tNDkmUxWi4JwW66J42HMHceWHZHLU7RdrwcrMYCqeFi6PcAcuZYmqxs7GabbHLrYCU2BwFzBFTozxKWeCQA",
  "key19": "m1JEVzQ8BCcxv2ogiUkfVJkgSHyKV37y8aMAv3XjJgetkFs5qgrV3NmqfdepmwcWTmn6Rv5o4v3oj2yBk2jfBip",
  "key20": "hXqdFSASCj1Xr24ZWfoXRDXe6yFETT7pNbWWvYb7SorfE5aj9URF5fpoavFAppxJvgZGgFrdvYNnRk7To95kRMW",
  "key21": "4RWaRwTPSmDzixYbgPuuqa3v7Bh4pph5igTBS8hmLR4vxZrV3tWsgw1AcLuLpYJAvdvcbupwkHNPMBUXptaZpy83",
  "key22": "HhMT8PXDuRbZVWYTmgf2p5WBjMPLgVKDtrwpTzZMMPJTo2nYTX7p1kLddCuhBX5yxVbkHKijT2Lb3Byb8kdKFAz",
  "key23": "26kgC9vmNRQQyEjyBbCdTSZPHQpEnfCy7SZ5rhD55ZjeS9v27hCnRAdPKPDFmLYeRF7Sjsb3mLwfDKtM54xoQHJx",
  "key24": "46BsBQkXe5PpgBBxmPkJKKzWEdA8WV7ZgXXxnmHMVwkce4nwYkkydPaS8ZQxNYRDCYSc68e3hxr8oYwRKLD8idmB",
  "key25": "5k5msmdPyMKpfYPtCrASMgGuXDY3riDKeTNcwstRjxA8iSChLhrhWP2saPkGDtphM1Nd2YeGwDsUZiQAeJEZFNn5",
  "key26": "2BsqMTCj2YWax51Xh3m2CLzcJm9Fyum64kXCKBzb4rJc8FZG6xCH6zV2QEnn2TqxAHMdtZra4FadHmhjPRsNvEwk",
  "key27": "XHvC3Z2u9446T4KNAuU3sN5qHEyemrdh5t85zy6fC3G8iWE3yrFjTXWtvbTGn8E4WsLho6zDhQBs2GJhiiskLNH",
  "key28": "8rH2B5ZBiVZiVYAJdbMJytuBfuRsp3HWU1Q9dPrPiLngyBgrAXBoJxpcT4FnsAV8Gh9aJaPGQEZzzvPzsri7Tcz",
  "key29": "4ZbkrkrfnmWR2S9v5k8YcFb4VWjDMz3oaq2ACgm7ro3Zbe4r9R5uri3ujLYoR8hDoCVpnugVWxWtMQmWV3wcEKQR",
  "key30": "458LFByGUnfYA1GTtkCZcCG87bGKm6LFDPTtSzPuJv6dYyjksfBSK62b4SA3cfxTQHkBvQjdNTzsE1fdYgBP5EKY",
  "key31": "2J7HA4stUyhL89MxKehqn7qUw1B1kmCtJ52YJ8rckJxXxrTjcftWAAavRHXxUGnoYeNPm1MkXB5NeqhAj4bpBxAk",
  "key32": "3sLNiAas3kUEMtu1NAoDdakPWrWt37vchEeUC9YF3y3zhcfLQUw8xHo72syrrTmrhwMg9L9eSgSvLWJorxtNaAuy",
  "key33": "2t8hbeXsLthWE4MxHz2tKrcDrmWHvvQmRfrdbfh3QKJuaGkFjqbnfQp4vsSXdKAZ5ga9dwFgqLpUNUZFGKSwndNp",
  "key34": "2S7a18jD5tW6BdDkXmK4SnJVcsTjnRqG4gEgEfZi7W66kjM89ePajkCfha3hdfJBWRYsPfNyX5rXRiezbvyAjVdX"
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
