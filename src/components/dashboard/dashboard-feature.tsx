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
    "5kCmGJAtXQL6pn4f32WUnpT3HhNo94KL9Mt2B4YehKyJDKGXYjMC8sCusqceNEuWo7DqmjRKTrtgpMRxPwqUr1wP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "631eDmzFNMRXRgo1YEvqSN9RPuvyh4D976Wyt83R4XNhUD4esFafLk8P8dCtQA65DdjHPfnJk5xQs52HqVkYZqpt",
  "key1": "46gXMhozeYCxWrggC6sWhi6WfQAt43WmjHtJCiY6UQH7zt5ZD8u1JCPxVCtmkCGiwhXGFi5B8DokNoTjGH6j1JpG",
  "key2": "2ADkLkMPcDN3B42kE8EU2VeXEojeUR9aD2HznRqWcN8WigDXPKQ1YbBGHutdbaDMsH9Q4zTjxpTnisf9UEbdxUyk",
  "key3": "3CH2mDWSci3hZswzafbyLBsS6rcQgcunf7vDarNvqBahDbqdsG8fyj4SkEW8FGRNU6tdVcgS4e5RjwtNSsJr9zX8",
  "key4": "3QUnryWgkeZAzMfzPyLQJZ7wxhYzMZM4NH7xoBDn17sbMEg192b55HBv8Lx9wqTTPkTStQBkYbS6uJqsa11k2yrT",
  "key5": "54vcGsRvD9EUjoEM7zc49KDTc5dFyevNGDTt94nM4wdYK1zrPrSaUu8h81rZ1M9Uc8YVCqWLuidKG7MKUvxg1HpB",
  "key6": "5YtSxFWShVLT4G6Pn834GcbcGUjpHXw2SHCF17NiNRghg59exFTHYoUHqEyDzUsbVqnJM2o6n9avyCqe9n1BAsDL",
  "key7": "3Cg6E1nyv55BPnMf322ZWkBDnMUGBSdzzoKJLUonpG1hK7zpbqnYBEAnFvthwXM3u48L3YRahmA2Lk6eAKPMaECY",
  "key8": "5CSHbQVNpMqcQuUsjqTr2UoXBdaMwSzprmeuk3osp1dtq1xKueVPTSxf7GgywZGweAMmPyvoPu7dwBW3VrjZt4qB",
  "key9": "3PUdPMk6jbFNk7h6ADQWvCMpKSuVBCraSvFw63mC3KwKwQxFLzpC7iGsqsLqJ8k9iwu2h6eYKMjuQM2WXedXhNBw",
  "key10": "27A84DNuL7DfHz5sMrqbVAWqTY6Xa3qcz8qfuGpdgFfwVPnMoLYrkdLqDj3KAFQJ8ZFcAy4zKdigQ2GH9P1d5Amx",
  "key11": "4zaAU3rWr9d7VVTjbZk3nbybtT44kP8iWWyfpLAgAQC3zLVwa1HtrPb9RZSettP8NpgkRVFcNuSujNAN3kVomW7Q",
  "key12": "43h1Vw8yAMuoGKN59b87XqbC1ZH8DL8pJ7GanfCBUVgitfA3xvD9EUMbAsEQRyRzLUs2EBBYm2An8WCaUqwmQEd2",
  "key13": "5HnyUy2NSvt5DATzYB1giSqqxRHwNZHEgqPqsNhVyJLbAQ9yPUano12qSy1KiawTSJXtonSidwrQH5DULyvFhzBc",
  "key14": "2SbX7gBKUMD7y3Y73HwnPheFjPcyfmdShAbZh7FXrKNY3vyMTcopyLXNke4a4TG3ZKmY5uXQTVMzCZS3a5Lkxbty",
  "key15": "2Z7tuuJWeuKEn9qLV24G4jCi3bVbtpgxg8JJaygVZT78cRsGU5Ces7f3FRHAfTAfRwDVrZ4e9mbo7MMFpPNtgQns",
  "key16": "36hRkos6mtgdfwQMkYyZqsrf9WnkQvyrKmFYauhdhpZwFjr1VcbZxZ9nCVPY7PLFtSmQKm4CuhpWjKBXR331eXHu",
  "key17": "2QdnLQoeQUZJoSb2HtHxypuXAwJED5UZCdD5zpDb3KyQJsoGAzUaMHqv4NXSBMh37Ym26Ww6ZMpKpBr1xPaUo3yC",
  "key18": "3Jp9dRf8KveJKf7U8hc5Udw4NgBaYasF9fuerWAAu4r5hCP7cnwSBpzKE3DUtGiZKhJm9fp2XTYGFfYVGPGhUqQ1",
  "key19": "sK9WYWB44ZwjoC3zcwTBAG5TFM8RGymeLbphDVTsQi4yUvhkPp5eqQfWdiUxVuWj87Noj5TB9TsyYebvWdwXXnG",
  "key20": "2davTdmtvyL9YgWWCg9UCbFmYKC1eXiwFaNdDfkRq966CgNBNoSZPrpUWnya9wcnng1FA3FQS7cdEKiE3G9qowck",
  "key21": "5upnMKhYEXs9som64kZHrLv1iu5P7nvB6hZE2jsTvaGpWUnYWRCCqBDhRZ4VNucLKXw6EKvxXo3fPsL5d3DmoF8o",
  "key22": "4duNefW3zAd6quQVuJDGsQUpfJwKXhB9VdSCQ4SFmaMT3R99G4up3x2HPH9pqML7c2nC2AmUmTYuWjNZx1pey2FM",
  "key23": "4JdAYnMktiE8UdCS99wKgs5AY5g22piSRPdWyeFzhiHkd7tcKDCatJDgTmZoZx6JHdT5fV5hKh8tsFFdoHJZzdx5",
  "key24": "yCkWT85miR7Evm7AsqJP9gannE1ZM7MsNpXPZ9b3rJGyeuu1s9wnZNYPA8wdye5orMuMzkuENDfqmRCHCzG4BSi",
  "key25": "5Jn6vsub4ktsgvWHRDxJqpBaYi79wjXtZwtFbdERxaYuSHnUMg2XXcwiVEte6zxCKjwNETcYMAVbnXED2wKP6yUH",
  "key26": "gbGeFnPxE9ceefqFkny6vLBLEqZwXKqqgHMsE72PQawzzxm95Umkpp9vaRbojXJwrJciMwrBtPzaCJvu6RQJ2WA",
  "key27": "2rkkDCq2fyWeKBCBXcEkbNZpKi4vtogk6Lt1msoL42DfdYnxqSCcxeL9u8sQqcPUi1NAJ5Gb7sqXbCm88UDTXAuu",
  "key28": "4uQjT1cwntcEm7k88Pmo4B4mt32JtNPsjVr781FsL3VR6YNbWW5Ddvk7k8SXqBkYd5QsHF4aPt8ESN1VGsTLksPm",
  "key29": "5M7PGAfvjSvgnFyz4Za1Qo9XQe58WjbD7F9PSXJghVuUoSrSgXsTabdu87wgYRY3YoFzkkUoF6GSbngxf8J8DiiL",
  "key30": "HMPKKyo7sdhfdKHbpgCvawFRmnBoB1Ld6kYWFPFrzyQsxaXNwZiqWEqZQEgq4dASPZHHdG3ur6SEmE3Jg6kea9F",
  "key31": "3f1vRJMdj9FUpTN37BjHr6WL9fnQ2JJtZTDsamdjxn7BABrg1z4NrkBywGknjnXoozn7ymjFqXFKiw8hF4PXFNN8",
  "key32": "4L4BnafNckMbBc8ahu9WeHBhkz3dh5jeCTU9pZ5FoQupvsZiNBcZF7c1d22yuQCCihCTR8YPwqkUp6M6wQgmLMPN",
  "key33": "49Hpd6iunznizzE2VQhiDFLEubyf7to8PRxbdNboY43o31w2sKzuXqL8WKkP9B8ZbcoRGXqAPWyuPNnnRQDHujzf",
  "key34": "2Yftt7BuhrKEeFZMjBeDFznPJXGgwPHqDd8bjMeMdRfj1szdZtuX6uZtGjVVdrdcC1E8BayFTe29qUa2CNETr3Ho",
  "key35": "4uoZUWf5MuphHUB68xNV3hNVkywoAv2cufYbLxMvspUBiCuhp9HnYu7gSntVnMdw5pQCgaFW6JeUuHNFMmM4apYC",
  "key36": "39C7jwkAGpjJcodtLEXC5kXv2JbJXyCLJZWCLQF3B6KqUPpLy9mzrN3oTiqpxjThks9nz9HT3HzaXLZ3GQTcTSK",
  "key37": "5S7jzRAWkP7ySG2nysMriNG28qK65siS5ByUbPLCNXWuYESCyrTtUEpFaMfzjsobM5e3ZkNHMdx9RwKgtQyeyJbd",
  "key38": "45G7TP49hq3hDhdXvmKewofPkwPM9bRRvWvzUcBfcmsU3XNS5UywzjW6GNFAX74QfKbdo242SUwv4C2cptnCeh64",
  "key39": "3aYEhbHGgzakMj6HSJrFDHHNahBvuKSr7Djg9sLtaWNvUwftFVQxUQhs8EH78zCJWVkqpRZXeEM2bwbcXFQGbo3K",
  "key40": "5QVHw2QT8cKmzUNk6jX12BKnm3xSk9GEWhDaxM34pbYGUZJKo3vT7WtWguqZ9c755E7appc8pUDEbBdfCT4WUJms",
  "key41": "3761Sj5pgZuAjC2R6XHVFkhdLkMBwMgaPL9wVETfz8jMXbiEFFoRbvHvLgcixunNGa3E5PXzK5Bg4zPXCri6A7YM",
  "key42": "5sVgkgv4ovpxXGEVWkQdwcFWguyAt2Vt8CHJEx7BjQdW1GyoVse63PnRPuzcUC8KbWZUm5LRDToEpYpJNdcE4kNY",
  "key43": "5fzK5P5sPkmXiuU6Etjh6XddrMtkjUd2CgJW8PUwDCVKPohdeKQwncEn1KYEuJ7wR33fYkk9ZvEUdxTzWXVaQ9S5",
  "key44": "5LemDVwwUcvR4gvEoEep3W3uWCubKz8fKx9HWa9Qc6zWvksLeJNWPDU5iYxuJTpZr6udgF5y9mv3Vg9UQ92gz2uc",
  "key45": "3jj7uqiZQFsKQ4kuB7iBWneBuPnhDGZDHdpdrBMus5CpxrHHhMcm4wfmkKMwdReJxuUeJNMjMor6G4AFcGJi9e43",
  "key46": "4d9wXZh1U6ita3rjyDKCEoDVJ2xb7FEqBzVDq4BrvqBrYbRi1kSbyj9uot4ebfMLMWtxQiwwUS2iQjR19bcHDcv8",
  "key47": "5DEdjkphxpWkViTDZFeTzjeyhFCLLi1fCW12udwuod2eWEr3dAfCeKVjKauSMbqkFxW1cPEHN4j2pqNKVQhYfVnN"
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
