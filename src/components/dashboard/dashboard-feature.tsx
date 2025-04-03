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
    "4A4eALcvzp1Hzo5JyFjoFPRzdXG4sWQ9nCaaFXgHNRv5uMeuAy2bRZiwwmFpHRd4j8EhuwSmttwL9ovPeqiEfDWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ShzqRkB4pRuZNquDDcJ4pLSR2JL5CnGKcF6Gr9zzQMHL8E58uKoon3uxiqkHme9zAdjcdSt7WLHPKDUYiDdRFR",
  "key1": "5R8DHkpH6mrGu1mFEhEs8qgWhX3mwYUabCyX9LDvoeKq9FjC3FDzfmvHiRimfsoCFiY2nW8Z1UgvDwdv7Qehia7r",
  "key2": "2YziYfBAH7nasz91YGCuq3v2eQCz6mnXViWYC8JmRt5PiSHZggqe66jb5W12LKXeJi43pqs62hkHpZDg4dWFWG2E",
  "key3": "2dfRieazc1zMr4H2DpR71ZyvGjWMrexaE5Rb9vd9iWSeFes5kNCa1HM9zk2Ec4xxzZnt7NpA2Qi91Qs6bhtMR8DM",
  "key4": "5nz4BadrUWTeLAhhiXLdbnAdU1g3h74ivPCVxo9pS5ZnACKfBBgfB38fS5hKjfYQzJpB98LYxBH5et9H6AvCnRDh",
  "key5": "4ybEmvSzWHjmfFs9xig92fGSnud5QS8m6woGyPNzDupgh3EcGA2uvMAEaVZX8oQ5uvb7YKD4oDehXjEhHksxD5M8",
  "key6": "zkYKJRxPqRpeoKEht1Z2nE5C69CwZNBcPW1kZmfg2ZNNybC7KWETuoyBhd4XwYuyfw7LHqsvzRrqPeQucuDfff4",
  "key7": "2J897UeZ2ssG6Q4Tf1DE8gEmZANThYgjjJRgN4VYG8asqKPWrbqRoMNRyV74b8tc1d1tymHyyXEUUaGpQXL3gj5g",
  "key8": "5fkdtLJU7h5iZABtXyBzLzCNTp1wejq2yqrDoffwugTEPTQM3uo79Q1eBFEJC2kpAB771q2Q9txt39gVyQimWRqB",
  "key9": "3ocBx6cLXYBvm3QntS4XeLoKzszBHndojXJBoEc15URohRtQFGBbnH6wznjRKUsetw8emtUEhTj8nSzFL192EbYY",
  "key10": "23sqQJNc1SFAzkSNaAqWPsiHyP9eHxp6NDodU8XaeCX1ijK9ALX5DEALzmCMnLU6bgGnVCzYP9AU5GSP1F6tyxEq",
  "key11": "3hyKF3Ws83gzYfU3i6fPrRVMvNfMzXSqFJWqX5TLKCTuhoUjUsRPSG5PkPUVyzzLDtiRFXqFM6NQH29CBXE2Dhqt",
  "key12": "4GSdgvAiZ8UYRkkzTxzshauQeSS5Dvud8mY8L4evTBkwBgdvMcQ4o5enq2akdTnJcjoQXFwZd4VNYy3VjmyuaGot",
  "key13": "47KYwCjZDmRkNYgAyxnw9Xxyu3KSTrYaBq7K5vKrquZk4g2eUfLZLTqe4jbfBMAPoivrwS5tQYaZRK7aYxfRTfNJ",
  "key14": "NC7mdoYs5kb9qGEU3B8fnoW4RUagXsnB9BSSFTm1DAF2WjuFSYHTt4WnmXKwr1qtRp7MeDrNg5N9Tw3FB9cwCFL",
  "key15": "237wRoajmsD3DQJ8RFgRtBBLzuRs4aQzu7rXfpn5safHxBPgpAL6Agjke8oHWo4q9HKm4d7Xbd38w1rLk3Urf6PA",
  "key16": "3ssdBsC8EgRVVaF37GpaP67kuZkmbaEk7P4AQuSh5dR7Wrw6D58RVb5VpRwQBfuK1xyA3gWAHqJVsreni1cxMbzq",
  "key17": "Zz7WXw4w8gC5aV2PsjXG6QfJS59XhkyYPBgGWrwz7Fon9gWZJNPY77K8s8X7X6yJRqJrBDC3zsBhyDdAtxXP8qo",
  "key18": "35WZN6EzSZhQYBMrmnfuNLZf4nMXEwhPd2zE1JpELHkVGopZSpKqPQ5UEzzqA5fM3pVwLAkCuiDnYdAhML2TjB5m",
  "key19": "3MLQssN9MnR1zBBHu7TpZNEibEfJzXSwTektDxTgYZXoiebif6Aj6PtvTY8N6L4oV3uMhvLyn79Pj4hLBSCL3qcF",
  "key20": "5USF3D6ffjJsHypGDthaG7BixmQzHRkb1hagkqJjyhXK3hhixvDVkRfgzygts6Ys1gbMLRTeUB69VypTaTED5mKY",
  "key21": "2bEgovewgtsWx1A2t1avAEMwP9rmHvRFxjX3NHknXytDMfnRGYVQQRnVXTvEnF5vJNL42Fg7SRoS5d2V8ahkVWb6",
  "key22": "5ksWyuVqRzQAafvH84qtZMcgb8i8kLTT3w4JhCZajSMXDCyHk9d2F37vBSnrL4fwznNRa4VhiBybHsPfBGaCKGKE",
  "key23": "3LgKmrMvYxatqQYy4WC2dj32brLJZjYRTyeJBD39ovKeJg3ongC9utsDhBaJogjjW8ect53r62p6bp5xFw8hS7Mh",
  "key24": "B5NWa6WCVzz1yQNJuMtbbChf1bFWoDAVMn5fJndReKZf4UcwvCCRj6h4dFsvSjMz4YninYcBLnwLeS2sSRMWCp1",
  "key25": "2RJyujLUg5E1TKfNWhMBrqK5NV39g7oEQcRrSWq6pU1rjxS5iPT4WotKS1cQNgKuPMW5GraKkN24MciLVQbL2BH5",
  "key26": "4biLrGb51gFcAv1Z4yNLp7Lp9b2dQfGzExm79xt8ZsQDSsRArj3CxA9bQp1BP5bfwfXNK3cppiPCe8ZmHdj7PwXD",
  "key27": "2moK3gh6Sd4d8XKxxFMJP8xwxq8A5dXeJpxchm7F8mhds5Q2WsAScDn6UCjQbzR6f2WHKzrUuPJqSdTMEghLmLc1",
  "key28": "4ydNJaDGwi3MGfFfGAN5Pa7BtpjCgnsTmQeVXZzm1yLfo6MpYLeE2MH4JUBKLqGyma3yuJVT4aHUWKKC6Ye7c2D3",
  "key29": "4CKDR5UdqhQtpQydoKeXxkzSLDzRpwVuspag71jFvV9jb8wS7MvGZFmQMZ9nD1rNvJ2mJZuCDbEmqREJDy27sCYf",
  "key30": "3HA9xKZU7nzTyEP4XCParmN8GD8w7VX6YrLooPbqc49PjouLMQJdbLYhPcNLgiRMHew9hPAMSvmoTemZx1vMPRES",
  "key31": "67MXMiHFCeetWLvP4zm8SVqY4awwUdprBjSThgN4Rn9zjYHRKRdDLf4hizvBUUGe2W841LzAwKrk5xMZqnWJNp89",
  "key32": "4eTQjmu2YE6wHw4yjWjiYPXoPfaCWvbP487vVd89tNJgid7pTWYENzKZFhkLHHntL5BKB59n9adKq55zPux2CJ1j",
  "key33": "3TXKKawVXJreR1HKDtBg9mqZHEjorJT8cGZbx4qGRvFD7GfLPAUMoAGCi9SLVoymRYkdynkYqGHqFeuadhwEJyui",
  "key34": "2mZJqm4bPRxAmCGVPH2yW9poUoXkhERdXL3T9C7a6EwatEAVNQrdVy9tjWsdUrcBsaduoWcr1UEE3qBpB6Wx132t",
  "key35": "2MrqK1dfjDnrGd8qcGtsupE27HsXDy6yHQokP4ZUmeyX5P9GUoBj3ndUq1Se1whtK3ViCrcPdZLfyg3eufa7pBbV",
  "key36": "uoJYYiNH6RiF1vgE56PGsvUMk4WB8zrMUTT2qwg9RtLVn3Ynp1k6n8aNuW8q4pjnimp5mrkoFw2PHptit1EoZz4",
  "key37": "5WSvrmrPGNKw8PVmBvmbnt4Mr6c7tPJ8epdm5mwd7jt3ag7JLuY5YK7B9mh7FzHq58bxxgYkvUY19HjgkxY7NbDn",
  "key38": "3mAWpKhZ1pE8HLDUuW9fCPwGWuZ8wG4isUU14NwNvBXNtAyT5Z8E5WRLLCTU6VpxQC1YGKDz2VSByXMBDmYnWi59",
  "key39": "jXPk1CRgmeN3scMXzfvskhsuFUXrV8dJkwXkFSrgpBZFsDVqGXT333XzAhe7bBjuPm3ePNR7BrDoVndApEsAupd",
  "key40": "5i5KrdNXj2XzsQkPsQxJcGGMVe4H1PFKKLM2gVR2xfNd772abtGDZ14SAPRdx35GQAAWoeURCUmVYsX9c5Ar7My6",
  "key41": "QQK691LEYTzTBcnQQk8bsn2cfu3LjKMY2Z6YSUfmWW3eMMSEePn1RRjhfnMcdQ5qDtFQ3opUsE7jF88ebnAjw94",
  "key42": "twgfSHgANJ3NXh5ytma1tsHQJtq5RCLnaBKaFGd2ZJCdPiy7oXsTjDpeYQCp1mvTKxJv65CbXBFFyjtmeLz4Z9u",
  "key43": "56fkSKYPKXHtSabj9QDkCNxsskxc6f8dWXToMSGKWgH4M9pmpDpuKf2hdSoozvBbp1YsjCAbcriq1y1KqJuzJcYV",
  "key44": "2T2XPCBTc8xHLQnezWPYkPv5inhwgQomvHp1yrpQR9AbvBH7zubiwBNaiLdM92f8j1QdxHfvFVFVtUKvZVnhoJkm",
  "key45": "2XaAzsqa4DprNzVX6smptWCrwFbJggyTNRhLCoByqvPEtmrYmossCd6wLc92KHqER2FFV2eAkqMRLPNHehqvoZkW",
  "key46": "2qP1tM8KrkEfijAP8qqyXXAZsqeWSe7G9dmEU8tqqvCiGtvLD79RhVRQkdMAWDCsuH3K8WfUzrDQGCDtea1vN3gr",
  "key47": "eYt9QJM1brsXv23GtmbTkFsNjuGU2HgpUZod5a6ovMitUp2q92NVYej3CW9fE6S7mAUdZeVBDqTkUfDVZCvxAQo",
  "key48": "5Yiamde2GUvAHpeNWSnoo3oMB9ZgB8hoJC9Myfq6TYouLmzsCNu3itskpPeFexmu6CewjHd3RFxfzvHDTSSSaAnq"
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
