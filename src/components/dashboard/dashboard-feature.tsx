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
    "3MxuCtES6yL3a7U3AY3rSCfhdicWEdYcVzZGGDURPhyi4kwjGdXkA9bYsFyZiFcYoSuZBxezh2LNnqLrueaBmW53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aq63Wvy47ZdaAkEBD6g558ZU4MTPUyxebRpth6aJgrKRM1aR5PoypCvFhy1dAhnptpARPK4n6AK3e2cZmjoX4D8",
  "key1": "JPTh8VZNWk1X1jcL4SSvqGQ7xuUnouZMhgXRZqZLz9DNNr3Y8whkwhjQskiDdmSAz87FxccsYtDWhnKfXpNk5Hv",
  "key2": "4gnuHXZWwr3m72ZWCdTXruurvWKvaY5i3uEor3MzgiNki1VQyJF32XR8WCfmxsjnz7sdtCvVUZJAhHtLrynXLHgC",
  "key3": "wR7tdmHwCUvVWYRZoNbxsBeMcs3x7qeX7x6WjVnnCk8FKv29i2cLEyB5R4ozFpY2T9gBRdgiZs4STGfVWUFG9Wp",
  "key4": "5hC3TBty8T7oFvgwDEj5jgG7uRany6bx6SdeSu4AQ2XgbBRKpQwto9fRsdiwr3dqgTyLiDdQ8QidzydK55J1Kdde",
  "key5": "27rAbRUcPFcMXbDqq9tPdYMmBQcAo51XXTj6GA3WXgdXXtkodASSXjKo3qymoY5WLuHxMwxge1oz8D3oBvjSUxfg",
  "key6": "5WMqEv8woWvWiojkeuhiyYCCRvBHKQhUiNZZYxSaMrZqMRyT8q9DMYcdEp8NYxwN8Q7835DY4xL7B6GXCYEaqtQ5",
  "key7": "5sNKCKtcVLQCDU5baeuJmDah1azpZqihyxrLtTeSaNPqLHRutzygJReyzZakLjEJQqUCXx2zikakK5PY2ToE5K3W",
  "key8": "2PP7ib2BjZfAy5iHfKkapbQw64tJVc7Zus3h2B2XGqch1kug4tQt1H9G91nes8UrsCHkBQFtqCmPT3ZLohvUr1YZ",
  "key9": "3WBe2zUgH5mkgft2mQVTmuBJpmPCBmjHEcRR6eew8xvmj5DWFgtP5EKfV1jhyBgzCMWtbw8xcXjwoDifw2FSi3Pg",
  "key10": "2ufF6LnwkTyEcRmjdHDLGDYH7hjSyas99GtPYpJqoKUvmj2t7XDFbC1Rq3uSVfuDXgU4Mw16dZgb2c8FrMoN4anL",
  "key11": "4crMyJqx6y9BzkGyfWM4SsGT1CSdMzATFrQ5iVkLwg1FLVN9uJNzSsAhryN7C7Vv6SePHBJG8Pfpff8rQRpKhgj2",
  "key12": "sAaMDUBTjXftcp8nnzZ1LhUtYok3Qvcvdk739ZnDQDk3PWASRGgqdAKzV7cgdpXRRk9wXHaUg3gtLXShvf9UHgJ",
  "key13": "Jku5cm12k1wG4m3pzEjFp7aMihR6jVj7Aay2KuC9nJwwf3cDUihCkafdYKsEoHTUxeUhcmtBiBEf3ZZDAaGgKDF",
  "key14": "4LRV7eRBWLQBHJdPcu3cqZuSJ1eTsZ5dg3Uk89M5FAxzLrFECtsePQt8JjKUdTBDU1bTW35Mn9x14wtJqjAg13W7",
  "key15": "4eJPi5NA65mFGVYWDiFnGvhLNEec3GgnoVFHVKJxLBmR6Emk8FCwuxRxcG9wLpW8SitNK3Ysin6FG3BVQ7EUcGkg",
  "key16": "4rFLYvkxrdf4iQ8spmqV3NtUiDC65boF8QDbiwEyd6t8MDRqTLRbm8rMTD14XY7KCRETSbj9Aq6eidfzsf3Q448o",
  "key17": "5C7MfKjeGZM7cYBkvvfE4vhSUSpqnwRx6cCVGz6KKtKgMq9N1wpBiF4DoK7K2wEveLMTLiYEZmEkV9gMJf6QK7EV",
  "key18": "rhBm48cB6JpGfXoDZ2xxsbtrPuTDo16pi65o5VWcE2yAijjNMgJv8es5FciP9CvtqNA4j8nL7qT9KurZXN7CwKY",
  "key19": "5TVFVp6aMEUVHbY6GxWrwmGs7JoPhY3XgoXQ6VcuGnMHm3CL9cg9PktJf2yE6VXmRHgWuGfLaroFjnWXZ872AH24",
  "key20": "eMfbJn7qUPPaWTUnMMxu1wsv6Lvpg46xLWDUVdMvHvA1jG23LNfEgWik58idoZVb1RRWUNQoUjJ9qtYxsK1xusR",
  "key21": "4Y82dr2fyuWpUPbAfFZQGDx7WnaiVcNSBNfw6p1QCGPDZx7mCPwH9EdK12orAuWJkcZWpa7GXbibnyUEKD23LUpG",
  "key22": "3kfZEB6pudGwKoXrNmD2WEs1ZiTFf2U88Gw94EiKLXeu9Lj1nyTY1vCfeKoguNggA5zHGYrv6rTWtpiJgfBpvMrX",
  "key23": "4sfMcuCs6mhKGiWQdani4QqXBvPLKBXSab8qY6BHgqaX6ux5suNS3Qd76xgGh7wPP9E6GHeiZEJ6ZEheWFjYRqBK",
  "key24": "5NWAmcFmdTzUAHu4a7RtnyKBax724SsSdjKxZMwiNg8d2T7X5sZvnEw2HeNxdRPUujTqQAfSexyKQxqjedEa2DxY",
  "key25": "3bdYt1wZLJEfc4e3E6MibFhvZncCyjyni9bwaS3FmZaWpbmuQCgDgsv5mTimNHAt2jfPC5xkt68EjSHVrD86cvrT",
  "key26": "nED1aALE9sNpXZ7X1oz4bWCdntN54j7SqjPYpyZwKnxi5B3auA2itXrEjdSnXFw4r91Nk6cRzSWsZD3yXu8Zhd7",
  "key27": "24LzdkVubVnzsgMGSBLrUW6BKhdcpuTSbaW65Dex3iWqAjb71w7HGKYW5gHun55zmudR11AVi3qSc1gRyRQS23KE",
  "key28": "3FkzRWQgyFt1jyTP5PRbcPJUW6Gew2qxuKn3id3R2YpfsHmdwV7a5Umf8jf7pUZHQHNvNBqVc9ckYNPsjtnK2hHK",
  "key29": "4jMMmYZBo5mv9StiW5xW4WgxCb4rLojUszJNXfHk5kxCLzBQDGrRzaJPGpJjZEhXe8GrNnd6Tz81yCQXc6bXvFmt",
  "key30": "3DtiAHNB5gwtLCCBmZ5DczWnLdrBWwJeJd9Uiz2ypBnAY8e6ViRzdG7UbaEtCzjuQePaFY4iZxcft8VC5TJsG4iX",
  "key31": "2zFtJ5EA2txuAfNedt8Q1Q68yf3Z8WprZDKyR5zVuis4SsrNsKdK4JnGYW43hjfxyjo6du5HcuLCDtwvYJYxaL9W",
  "key32": "VcZQYHqd1LPQLK4CyCLbv5pEQ6cRHguxYhpdWyLhjS3S2Sn9VWKwe7UpCEFY2BzVRH9MJstu8tK8jC9NeEKiDMy",
  "key33": "5hGDApRbZdwgUo97rkQeYunuYDWmus7Ck3BtyQHX3krkYqLabVSQbAfyKwdbsJXBPLdxbP5EHcjfxmGqZLsADN9n",
  "key34": "2wn1mR9FNxa7qQSS2R51iTmZc3Fnauv1BfJsZqfJdzqXqCm7NNqbbuL8XMUVYzUZn5TwySpFyFLxT4CDhnR3UzEo",
  "key35": "2tmSDi6AMTcncpEaqSeNv2zEkgQseNAFW3r7z8gJadpQ7pW4NLNQBPxQM2TSTbVcNxrgXaXUdJBertX7gj4oN78q",
  "key36": "4FJ52h5iZuYPmsY1cuVPiMDU5Qt5D7wmyB3W6iayrEA4NGjDmu5mf63Bx8VFywa57gRnLNPxRif3Xbi5iDWez1wk",
  "key37": "62tgkBEG3Jau6uya4Bw9aEBHcxEtc4iDUsktNeJsTq2fFZs8xRbsbm9QU1gNLb954RYDJ6FFhkTwTyBqAoUvMNXw",
  "key38": "4quaiag2LngYQWFTtDLewCwDGzYmmnYuJYcWz44TziUbGZYNLdTfwjxUGhM8eBLC1hJFkg6sVrbnLFHXeFSC8vHQ",
  "key39": "8aMhwp4WEwhrJ3w1UxHCSSYQXFCC6NYypr5mqwPGkmb4edCe3cesVDUVNWiWkug7WU5syg1PY4bCg3Bnr5Bz2ez",
  "key40": "4qWwGHqk2uyDiMnMsi6ua9VaQTzG7yjH1cmVETTDWyc2sMyLKsgBMhHwUsPSp3ZEJFsxuPNX1mXrsJKNCSkJjik6",
  "key41": "tmhN4B3dKMqgdTWXMns4GM3vRb84dFedGDji6HRS8swhbQrpVxwqXtuJ255Z6Ks7YiUtxJN4rFEafxsXyEuxYm2",
  "key42": "AorSAuxvTVuMvmmmZSfc6VJ8AhxPeBF73mC7JoyKcd7j7TucGRPMYdtUwpoDFmXrWiMMT6Gyx7EJ3ambMc7fhvC",
  "key43": "3hv65dKzU7fEe7dzbRFYZRXQsiQhTULBv6bwQah3Yush5ZVDCcd4SwNfQB5GKz7DHyzxVFM2SYe1K42uLmypYqpK",
  "key44": "4oU21SmD9BogFj9JFS1emT6m1rFEcR8JRjfPYwWyhiUr74BnySN2XcydtPBBJqzhCpquSgaZip6Nwf7gF29fHtjj",
  "key45": "85gApTRMEjgmaqwXRBkGA3aF8Q8FshYbipsKadpanqy1BeVcuLSicB2V76S2pcSwYzUpjwcLSv4ns5ELivj57UJ",
  "key46": "4HyCYpaGtcnLqtY3W9T3uNkHkXn3VmGUa21eKWmKvVsYrmUjD4TQxV9Eu7n6qm6jAJQ7s4TiB8pncGHst5ex4Gkm"
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
