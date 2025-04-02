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
    "3PrjzBBtpiUQqTrf6EYfATxkw2ChQ8k69EiiPKYzzREhW72quvH1Xwf68HUJEuARiutYjEE1z14G4YVFFBfDmo4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49sH4Z8XDW2E5zqADexyxft255ChxEXd3j1bBXmHJppQxcK7yR1sNHRWwSd67WV199qC5m42aGqYoTgWCMFpcHB6",
  "key1": "4uV7TBn9AyVqutsuFGLcRLFkZPU4uhDvT6NXvokUSnVp4MFW4iFZ2yA1zbMPZweTwKG2igMMhAesjdr9u4UcsaSi",
  "key2": "64AWo5LwwAyYGs3LgXnFS9Gz7qTGX3dwK8NJqQPcPkRWBfUdph7Rg7iPkrtv5XSiizJF668y7JudydNq7XAfNuSo",
  "key3": "5sQB2yDkr1GpNjzCXXQ51AeBKpvWcU35cNejEeNj6fR1iZnZyKsaLhoeuft5CshCUjYkg1xnBh4PdtCXgdwqLwfY",
  "key4": "4Ah6LDTAbzgq5EtMJNQrMoiDxZCj8Mf3KoX51WTVPjt5aCWjvbBRpxj4mHcPLhXuPSLNg4HM2aVPJ9JPjVvKy6JR",
  "key5": "2XG8n5WVCK8a2NBXTvRRuYd6WQ4AMw3W3kDLoww5WaJbQ8qiWHgF8KhvhT9PXkeCSaRDpCY4dbEFQxsWa8mr49h",
  "key6": "43BXUAAxMwGoybDBFZ3M7991SFTJ1jBNmc1wRQE1rzKUeNeMSG1Lob69y6kmLBmk3D2k2NRRfeQ3RnPAmFf86zeu",
  "key7": "36HtL1LHi3XF5JX8JZVYWFMapo7txHHRWRRaxfy9H8GzBDTPmMhCYeQxUMZaH9J1paYCrMhduj1i7DNtz9t59E7C",
  "key8": "4XKBRKpSMDdZExnmmYMirpMkDCDXSgiKwE3LyjM2Ktn8ghnp7ExY39a9mhvDsPfDdHnCBwVTv9U9GB386wf7dkZ5",
  "key9": "4jto8VZhP9pMaRsUCfXsUgLa32ueLiNH8FDbmpedZQSNrNEaXA3M8XVZtWvihgmknQPtEqsJHs6dvmDfmHFQxzr5",
  "key10": "4e45kGJtHc3wWD21LFi7T7rRCmTCxE5pQTnNeDDuSFEUhAMgs5JgC1gqHSrks6hn1yu6mJnBJbND5jjADkQr8bqu",
  "key11": "5kC9SVs49BALV7tPFmKm6Tona832mCFWG3wwZuaeL8jrCWTMhV2b7QfuckamL4XU3LHnRKrCveRFjuEypgEDpfdg",
  "key12": "3xr4eY3gTVeWhqvyyqF19jhXPPsrAznWfWBbcdfQS6qfCsHUW8cLtNvsVDxPuEV9aZVRP2Cqx4t1EQiQzezRirkm",
  "key13": "5bXaYvfb5smEcYHfTFRUwKjzXDHURMJFmkFFu9URuyEv3PqEsAPM2fQjzbjidGYFTtCbcuHQ1sfYSf7rPJF3im3z",
  "key14": "kvBhqKcEdDezjxExtvGHys5GtxaLgAvj2cFsoFq8N2ejVtPHu7EHeKwU8mgeGNN2CiaU6EEiQhnyd99YKyqVgC2",
  "key15": "4jqsC5gyTLEhbJHu1ANVpV7c7vNC3m31jSyTKTFiHeiDHBezgtrKKo56E7Wd4MEWKXH9u4HikDRuem2Kz35T3NWW",
  "key16": "4DNt5Y4rvE1eEisVKumpE7YLgEgcbRExm4eKEbh9rzDP21ARapJZLjcujwMjzge7E1R7jGaHj11E15NhxtJbQVbF",
  "key17": "51dgQDZCYoUWj1ZKPD4J5m1fiShVcW9fBwnVTTiiYhHw8CYe1FEJAGWRyKWDaaY9JFktJxCPYRwev1TFCvHjrgKn",
  "key18": "2w8TYZbZmHzzD76aKPuJE4SkBvbKCtn7f16qWeFLv4wQ4tM18VW9uwqehL5Wkr7utC6fXJb93bteZLymioBsEFP7",
  "key19": "2SX2egYFFBbbo53FnwiLWky77MtxPNRAaYpAQ3X9grRsJW7Wq3RX8fUPHqJLW7tgzXfKmvfuuacaAPboL5sSMmnF",
  "key20": "4hStYtRSKsvJdrw4EkNZW43MGkAFhzdLiYKk8yLxDq4rNKeJiJCLjobRx3N1ZdB8FN7FNidf4gKA1G71P2R4ngJC",
  "key21": "4sA4fZ8j2oQjKCoNriNDGefnnR3oYSShxEg1EseurKH3vSAUamhb1mZPLUhsPWfbELUuB7c6qmHeqRsppwmrcr2y",
  "key22": "Uzpef1R1QksR58UKUFBCbsyxqRiy6L2wG64VZfK7wqA35TQWFBV16gquEGFvZFuUcfzcM9Bd5tGRfKphYcyLGgT",
  "key23": "3wBJnUhoMCQrv5hiRB91z5vaWZYnKZ36yHKuYnzG4FVszoj9S6YKZdht9QYa5VJLAnERkNGxjL4Pjq194ZrxarjG",
  "key24": "3snLDipaTx45foMZCeQVSXNsCwazGjcYPY6WLpCgrvWzsjNbVZGtZgkMwbD6KXykyzguSB1KqQUvF7fD5jt9PPda",
  "key25": "5qwyWcuU7v6LqKWbfdH71DWGFhjQDpMVzpGswemSDev5VhjYnChXyNY9bz8K4CE4oUAyukgbA6rqJ2xGeetrmUy",
  "key26": "StaonQQGvMfca9irZ51ReBjMG7LcRZF9s49jqfAJxnCbbzBh7v1F7kyDVSFcdt1LfBBKRNFv5o3JNAJvbiFrfB3",
  "key27": "5PKj3nL25osoKHM3u5GLrsBLA3oacsrztzGyykAnNri7vSM7XtiMmFm2GNt5ui74LnT7KB6Z7xTEBATYdvYwBE3w",
  "key28": "55AnRuo1iPaCN2C7Goj1Q2w7hx3NM19AQwi9qrPu67Ue8Cskt4EXGxL79Gdbk766BNJ7vXiG2R4NCd8NpYRRTC2S",
  "key29": "3ksAwybnaXirCzMtjgmZJmDFdjcyhYvHpHKgvDB7iHpZeLPLnJFeo7bkYa3mezJhabPgmiibJmPbiF2tWXCNRMBQ",
  "key30": "5heWwhsGQwFp68ARUWFjmPM2QC66WrvzCXRk23yFDF3VvS2s4rNJQsKP3588cdaRhDV6XHzizn3g9t7f3o7qGhTJ",
  "key31": "nS87DnB9yNE7Nyx2Yk74QQ5AqNiMrNRNCpMxxucyw95amni9pPXEEGe4wzG6rXyfei5HWXdLgQBzKfh9doi89RQ",
  "key32": "2awrcRS7KkVoTTwKhLC9mHW2FEzn7MtwGNnDEyAujQzuWpmvgV96C868geMygQjxwjJBmott8iQFmMXcqRSBqquh",
  "key33": "eWKdK9gCY8RMFDPWHmoqFdTP1s1fCUqa2EL2YTuGdDLV5GyyxBeTF9qhhmcozWMgFE2WHZ3Nx52V4JToYS1LTg1",
  "key34": "DzWMcSeqdeUKQYprtGTdzpy8TFCrGMA69UEjtpFJquux9xA7JvhgW2YKrHEekpb58wzTmYhzXcH9imjfhDkFnqN",
  "key35": "56JhRJXQdiPYvSSr32FBFCHtnz9HihpzN98AwfrRdU3a7rRmcWeZFhttuAs4iDjcPR846H1YrUdXJ7q9ARwx5EHX",
  "key36": "xZxzSudH9RnVP3Y8MgDhBxVZs343hXKDgNETV6299KPUYErBQ9XJeiZmfivSigrkcBbFARd6TCnRZhjRMH8dzL5",
  "key37": "35QCDe2kGjHtQ7JJ4si58yZBZ8tDu44wcppQQ3QJfAoJF4GMTqZYiyg3KjzCoEmrWouc65jo5rLNbPs5A2XByio9",
  "key38": "hK2k2oGLT1Zqj4UNDSS9d6fy6WLqfZfi5LHUsSbCJoVhUCpyxA58KGQZSnHsWX9Yf4jB2vBroG5bCayBDuGUyjk",
  "key39": "5Pvr49Rv1wfeokkBM6xkSBsAwx6UAT6cUydXaXuSnZkuFoDiv5odW9zc2t27Mv4pLJn3zHJKpvVosXLVgAeWrmq",
  "key40": "56o4i4sACMc3jqcg2bkQm1v9HLZZdn4AuVtenMtxymbcPypU35bMqSQ7F6JSy57sr3DjZxZfVKSf3aLKuvgxviW4",
  "key41": "56TC3fQRHFExFkh9Zgg2wqSaqY6vQwRgCAiY7HYew6xgVNe4RX3cM6SJnqznWHcvks5PALTkc6HyUb2rjVPX2vq9",
  "key42": "3qAAYbXDUr3W1Zev3nNmEZgBegq4qbPKo8ioWxGWM2nY5XPL9bNb5VPXUtGdGLMRVKevz41zbSvTiK5hR4A8HFmY",
  "key43": "4wgC4NQUqHvzVbw8L1w52rs6XmkXWqNZwRpG1v1fWRdLRTYMiJuvZmDLXKbdFqR7kha1p1KJRfyBYTLEw265MrEy",
  "key44": "3LAB4wp5PjHXXfXMujreY8uENY73xbuCcERe3eLBupQSyyMZdYtkBiXKRXZi6fzXoqBZYxGKsFfQXDF9aHFrR64J",
  "key45": "4eiuEor5w3mdxDXpg2sG1hx5Dbuop2FgrPG2bTyM9iCkzwA6JPa3xh5WtmXWM1VRPh9UL9ufGNYq98b4gtXFzWnH",
  "key46": "wZLHmqNgbnQYLmj6MsZwEHD6C9vBj7yrp3RCm7LbPqPMbV49Csq4w5EKroXFHPxCYg9L3wi8Cg7rstcb5GZPZup",
  "key47": "4UjTh8Ea6bZYri4iopC6okFWY4gJ3mtBLmYA4beEmFpRsFZF3Z9umb3sv2KqZeXTrgFuVfSXGh4jRjAjSpBRrs66"
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
