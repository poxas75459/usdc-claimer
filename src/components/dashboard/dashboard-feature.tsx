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
    "4D7CJMQKFfZL9ovHwgTE1gvypPv1UEyDZEPVfWdo4n2mEDT3h92S16a5YgLo5wq9aihNVmXPPjWqoAHmzhnzvomQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RG8Apn7vkSi3zvHGoery5ZtnujPupPoAQSKHbsvUJEmELM5uKXkpeRYitpCzVs6coFjHBQGuwiDJNTmrLFvoprV",
  "key1": "256mJhkigL5YEzVYd2sPTwugJKbHSKoqDRUzitGsYFHNhCUX9YCetVyEW5hJ8VBT7DwHBUkRUkeUwqgZEEq1pQN7",
  "key2": "TQ4ScE5odjCRk1kR8Hp8PGkBKPgHtAJjTcjyKDWkgrRByRbixvcq6GpTNUwoaM3runN3V5SJcqxoX7dYVigNSVM",
  "key3": "65KuLwLXTggRMbJoDtFHDGZccsyDSnNhdAjDvr6zVcTU2YqJvT8gFtfDK6Bu8z6aYg4Ya9K3fa5pzJvPMFrcU4T7",
  "key4": "61bY6BGHquq576iiZZM2WwfSMe5EyfaCVi5ooKE63o7QVTLha4aVkzduYsqXYWAuwowZ8fzxULjuUzYhcu3rFUok",
  "key5": "eyVSmpGWGGXVUJztMCFu76y6hvM8kn44M2skj3z2VL3Wzev1jXr4x91EwH3FNSZKKnMDEbGVyYnNvuyBWxBZdnH",
  "key6": "52topHhporYwoiNYyR1d9p8KjHcQVd4BwHhi9Dc1QPvcG5WKhJUniE4mVsxEbNBzDnupA8Zc1kKNifSniHd3oez3",
  "key7": "4hZjWQ64VQ6zqc3emZLZJAyN8HNMbwcbbowqZRv6XpVwUCfSTH7DYFWZjzcugJrSjLJNLzXd4rfyCtaTb1AYnEPs",
  "key8": "2F3M3jgSrEhUFz2WMQz9qBkmKWhFbj4NFz7Tb2gLu8c1NaQQmmbddQbK4gqM3ASpX7cLDzecKT2mx2wiJqTZuMd6",
  "key9": "45ZNUCMAfdj73pB9RtVHT8nUyUUvdSccbWaA4FoCGJpavJ9dSiA2u2U231kvJnWbhSXnYfAbbr2Kv8ZP52qd2BMZ",
  "key10": "2nGiUycveq5vuXe5YyJtKWvuk7BXeymt1see4N9DXM3trwFMYjajaCVss1GYjKzsPeG9GSVvZyY2V2E9uQbDqHTS",
  "key11": "r6xKHxcmihgGnNky58zbBYLy4pyfXWSRKMCwjhnRNmXGYSuW2Tin6kHnmD6PVAvXsz3PZaDDr3TdVsuu5kVY3X9",
  "key12": "7VqCKe5SgeapKm38pg6XQr9JHUWj9YHkFj8kianDZ52eYExmzhciYhsVHeET3Xvj4ey1tUuK6uv4322zyzhHV3T",
  "key13": "4cbbGnZ4wYnC2bz5nAcGRmd82T17GBaPidkAcMKYCcs39Ufq4Pi9V883AqaMBaDge4acJ4t6A4eZmQdHngZUwomc",
  "key14": "3J9xTaJLELUeGzzrRLjKAJk1wXqy26BnhjQzGBLcLkP4Ynv5GNf8Vcp2BgdGgBidT2HjfcyPqNC3AebsBhHfzLvy",
  "key15": "5pQQY2VwsJnhWLR3kDvVwwHCZ6sF9GZ4EXD7K8BZ3w19UNhW4HKdZzyGoGdZBbJt8Q5CS4nNRTKwBqp5DsDgDbGF",
  "key16": "4CVPdZc398f41S1NAeuRkXeQEnxtp6pJg4N9m5eoEefZnvTC3CRny94gHLHJvTjxL6M9KdYxmVYCamPGMTmofMCB",
  "key17": "5yJqh3JdVcgW6rzvftQurp6USF7KffUvqfYjKPqbY1ZEJQeTe12G5kcqSnTRp9vQ1p659EUCRVtxwrghYmx1BjK2",
  "key18": "24pUcnUEKbYEzfgiUNC466whhHMPvxoSUUHADJPHWC8eLzPwrJACJSvoUMA1HGzqTQSQkeZc5WpfDPxvUiSFrxia",
  "key19": "4izBGhLXoJEdPZMLnSJhaGFDW9kAbhVRfKafcBC5SqbjNYcXV84Lbp6tTysY6GirDdod6mKDi3oipWVjZtzipQfS",
  "key20": "2yhZy5MMGaj4ni4QZ1zBFRZSzWTpkQk8PHrMNULj6nhTEUTR4J4YuyjxcgBLhMFfny8kLfNQ2gF3oGhzUtAzSNcV",
  "key21": "MiyuMnu7m8p5obTBRU9K3Y2c8TSNgyhLjXATnaiXyjBiLQn1MA6vSCQNbZjNs5rdZAyB57ByMRANgKDWGRavSy6",
  "key22": "4UKWDYt3G86mkmQrpgZMT8WTnxKpGpUnsYBDqanfM32zih9HUTdmpaWnv14yqur6md55AGmk5eVtNAdy7VCU5LTZ",
  "key23": "41TGV8mAnDGK722RhZu8uoJNjVBEhgHb9W5NWKp19L7tuXEw7gAKswDvzymtU9ZfG3XuTh1qkuTDLAzFRKTjB6xz",
  "key24": "5FcaJFEpof2xUTxMZeSSmWhxCmNFzBbsEKmFup5x1Swbxn7hEcgyyDaugYJPTK8eScQ5rM5YpmxGSTkUEWePTr72",
  "key25": "5W6W2eVs3o9X1bDbDG2UJj3Ew3YzMZbeJdaH838LGwxALeRdkV4b7Fix475vuDfPvZPbBEziHhwoxg2V5ufsPgwW",
  "key26": "45AEGePZ5prykifNEZwMdZULMtCpuaugLLYQZztBPCoaQ7WsR8mTHStfuRE37KA34d31ZxpZ95oXkMoboRNjbxqM",
  "key27": "2giryWqXQC9yiropyHK9K8igRGFCUMvT793UjWreb3BxuuJoo7jSBMPobBzyBqocxD2MYVhZGxXRe9gMMWhgPZrK",
  "key28": "XRxYKHxPdQV81mZRT6fgc3ngcAhPniGuSoHpFk2TNXLp1eYY81VYCpocUBb9bswfgYgqAs54YqqBu4zuE7yoG1z",
  "key29": "h9NsaYeWtvRTHzDVFLux9KWpPJfg8f1rvqkuGGzEaQLFucJqsM84ZyiMiwEVCPFWiZ9zntvQAdZZUt4ectchUoN",
  "key30": "4xrqje41wy34CU6oHW9CxyxvepPmLV19TeMnPdkmwoL4BvG1zPDp9oDTBwtDsRuEcbVYea9X2mKCxu4vnB9njfW8",
  "key31": "pf8GzhKE96WPD1pGVsXGmHSGy75TfSnBXMC9sqgkcSkNafWTiQLtSpW1kgnwAeBLW69XyK21rYuqV6xfbEwZBco",
  "key32": "3mEDpT8KsX7F1EMp2LwAcX4YmSFkGD7kDehCVbvL8Ptz2rrUkNpXLTmbizWAeMDo7nejtr2cXMgTbLzbTfRbXZkq",
  "key33": "5wQdxQKBydvZLoRtL2u2SUhUS2tSZmrPTYCJoYpUXsZAKdPHDQWD8ytuLVnQTtikHK9seR4iv1SZLhooT2EnHvVU",
  "key34": "4WCng8SJdiSYtcthzPzurHBWudjd9aJpZuzqA6ZwrwwPoyWXQpPjfbwx5aSYZSupbgUs9oZs9VH1xKYSox2PDW4S",
  "key35": "x3RGBDqS6Boou66dzfgMQNRwhMjtpyztMZ4aWPXzRMH6xYkJwTEcLjSKd4SkFGhm8YpBPAenMx59PtHM1BPyDQ7",
  "key36": "64yZotmeC3MVWXmDiBHBkrmJoUgua8taViRaEr5tWuPWgjEJd8bQ67UktWtTEDFuaQsXCoyhR58WmyAFbEApQDVh",
  "key37": "jP5795MWF4Pfs9oeqyKcjozi69HtRvV4m348cYNqmN5GWd89JAdFvLjwMRFgw6uGD4b94ffN8u81y4cVjLNTmJD",
  "key38": "65tyW6R6k8SiCgQhMwSUK223koRQ3g9NJCUQRgg6ReBCgX7gDHupmZN9xDRhXLPkHJ33yN3oLoYRVdG7d33K4Mmq",
  "key39": "5qWMekjuQKVe84A3ZJXXoV22CzaKzV96eFsaojmFRSViJGfWat81LUnHr67nV48k1ySqdet5sv7aaGKpkJVr5Wb6",
  "key40": "YqpkJQwkdtdsH3Yus5W65o37d4nnHQaDBp6UXcoboEMSAaZXoembJviTozwziVihR3x85fzbAaHt6JHds3RgWFU",
  "key41": "57jcshDvvpwEYvSgyEPSGETLdFT11BoHRE1mi9y1AnJkDA2yMiVa8tu5yMkDGArNBsniitL2sYEcNoS9fWX7WqRG",
  "key42": "4HTn9sqsiYtPR4neBaFU3NSbbbQjyQsU2WH4gNPs4PjiMR6zTQ6Sb4zEMX5FhQSm1BCZXkCimVT9zjxh54h1memz",
  "key43": "3H1yGjpGZd3QsrAaQNburk12ZS4X9LMDW2xdXEjHxHSCej3NMdJ8vD9pnSAQpTakT2q2QAawTNVGcuW4M5Dmz6j4",
  "key44": "3JoHGywdmnmkjZ7D67Yg8nw5mxhRgiJo9cohd3ezQQoF2FN24d8nMJdmnaduZzVF96SHEe8EpfjmxURVtrS21CJt",
  "key45": "651bPZhMYTa1wrB9P2DS2ZQ8KY6erKBMwNrvmVTnM1rU2BNdXjPu49RcKeNY5yRKHPa9Ju2t4iSWZfm18KGAqy66",
  "key46": "57MoLrDBqT5YaEmobbv86KcsuW3pTxPSVUJbG4VbBxUnqKHe4w2RJPsCSvd3paJ1DnUU11gf5ZXPP1xxMwYAWMCy"
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
