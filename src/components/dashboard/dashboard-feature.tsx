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
    "2vaqdJKw4WTidpiqE17gdvBe8ErGTqAyJQ4B9616HWAwpFqd9M4DWmeYKcXj3ti5yLv6TSqfitBHDbyBQ4griocC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CufmpUpEMBgnUXihGwDafRFarkTCvLoDDRiTRxXVUxWKf1w6vbxbCXED9osP9pFFxW7NZu1n6hsUaY5bzXRifiC",
  "key1": "5kxdEYCuAFxzcgm7VGddEuADrCq2LcEsw6UiKtZa3aDAFd8hDifFRF3SNXvruJQ646nZS4q1E38cbpiJb2bCjj54",
  "key2": "fgd2Tc51Ft77QA7TJ1XNSDQS14AF279be7LwtR5YkLG2xrFuaBmRNCgQ4c8t7NDCUGMcaiDSyY5F2scyHPUi8Xm",
  "key3": "573RMXKcwxUCgKRMJ5Ysw7TmXoqxwqo645oQnnsJKm1bqs4R2NNSsTZTj63WZRydt3iPEh5btgHzdm3cArSRKNtj",
  "key4": "UtREoPSChhBZUiDWgt6DRP9YJxTz7hWFdda8qHLk4jNH5RJT2mkKbNxFxUvEnZpgQ7BLDBqNEdtQSeo8pscjuiY",
  "key5": "5veFuFHmhwoDEwRYgHxk7HaaycoGYjYZXTVgpqDUFdgkYSjGdCGLtmSoGiVQk2YEFiNhhrmYC9pynJM7YU5nE9db",
  "key6": "LjtxFHyuitHynMFufSZqDhHY1wfp7eS6NYnVRtaxKV45PS7TT65sH3Wz86ZezW6UF7YXSq61eRayejxsUMEtpGw",
  "key7": "3PRHtXSJrmMFvnAb47icXf9En1wq8j8PYpzZi3XRGVz2biAUXcX4JfEMyXiehKictAVnvPqStpFwejLLivag6cax",
  "key8": "8mG3FKYaFXxZJUyzmpLW6Vhvtg4FdHqUsnCZkobTHQM7ehHLYx8ka2W4gNaDQxXYqZxwSBEzm9V3MHqSAHsmrs8",
  "key9": "3AabMXk3yAamfMj9rFQLSsoichEMHFCb2s7v3LBgovkqPuUgBjZd7sL1VpajjhNFeHFq96i7kwcKVrtfuJ29TXsw",
  "key10": "2NypMUSWPJXCmTWvfTx5iLQTdh6nkaS7spsbmDBEzyxsMFXu5njNzE1YrLE55uRyBFk3YBiHpsG4UtuEpzNbgGXk",
  "key11": "5RVKZxBDTbsi9Qhx2ifnYNTEt261BXmVMz9TjhY9b47ZhTJ31VfEddcSXWBkG2SjPBywjcY1nvTg3y8uK7GmvTwW",
  "key12": "63f3WRZ9irEwVxjNsbQAr6EEp3C6mGpmPP23exufQpCnZtCkVxWwScf25ruRDYeJMW2nvT49KWkw3ayRPLBkKPvL",
  "key13": "3c6gMZemmssVq3CjyPB2kWgJeidNqj1N3wwD7SbhG2Uv6f7m3sCRzq4jSdzCVmxS1fdXBo4gb69E3QUUs8X9L72J",
  "key14": "5f61y2KFpciQ8VAXN1p6LHKkBcj3R3a2DiefQynTojoSD8FELjPRpSwat86PzgQVoPK3Q16MK81eo6ko6CQhSMjb",
  "key15": "4XHdFjvsEBNSpkHPWpWvyw6tC6yCpReugTZGF1NaWAhFWH6t3pXJYgeev7gzc8ib9ayLnMvry514ks72HMXvkSKk",
  "key16": "fDn4DYtA1ooHsV9FCvBCrwMu1MoZ8G6cfmFKi2hxDXPknKAB871B1QjygErfVowTg9LXQWPytJ5bXRns3qJmTcC",
  "key17": "3cdk8FPQFUKbBaZjUHgftSSkYc2syAu1wSo71UniTZVasSsgmseJdi2ZagX4TdGC2YqdqpUYT25h1NfbybVaoTBh",
  "key18": "osDgC1SZqazZN7fgLqvwEUZEgQCYMevbZJW3ZqtaU1Nk6D1ZtynqBRFBsMjG3mkS9E9MqN2mthUcZz7ywFxD9WU",
  "key19": "5hUj1eFiv37dh4PGTaJMkcDKbHMnbAUdwHYgPnKMrXfpmN1ACJruoMxCwwpR2USf9m5UeQ38j12EBM2PbWc6TVVE",
  "key20": "4YXEGxtnsSjUJjb5Qa4RL2LfLirM8ki92m2y7tR4Sd8ihNr7q79MhfcR2A5mdRP55jjGoJ8nxRmZHX6mKRTf9LwE",
  "key21": "MByyS2snNiAU4e9b7aZDMKQT4ShsYJrm8jeMcSH6Ua9ruDXkmAJ5LEn7yhngegEt1931ukjW2adcScq1TaAKEzi",
  "key22": "2gZcZ9BiwSPa5tJGJjgdmt4Yejcq1AkFdPQRt9eBj1gAu6e7zrL8tEkE5UX88quLfvEX1WeszwMVD8EyzRiHGVk3",
  "key23": "F4tagrYPgM2UEV2vpYxKRpLYQXhuDAUB45eYSjMeyfQHsRCMdTMHKTcjsqhebVZPYAL3mdSYCHbLPaZsLbZBhRu",
  "key24": "2MMHYww9BbESwLg76Rag3pahQgV9SvwFs5zaVLBkYFoB5Z8fDQMDmkNtvZp22BQBsNyUNV1pjwEPA3dkDiCbjKoV",
  "key25": "2kqsCS3gX6kcBxj9DAk8oN3BRw1LRzEwGmC4j9rvcd2HX6WDMorqaknKsYq2xcC36qR67t9k2oB3kD2Rz6TFoRKr",
  "key26": "5hrGTKUtk2PW2MgWiQbmwe5bhCnzK6Hc4KLGQzpFue4L6o8xetr18swtCs2Ss1h9wNq2Cj9CLAee2AaZGzbTNq3c",
  "key27": "tkWmEn7wnEipbqy1hSy9ywob8a12WjfSttmpRgQYB9pdpG77bANgtVhEifTmBL76mPVB37XCH3wwMRL6kgBS7fF",
  "key28": "EtC9YhPwVuVUHm3ZwwbRoeB9tKYqWvNHEgYD885kvpGpETNoXcT4EzWsnd7Bu7mGvq9o6RGvAhUriyQuakSosxv",
  "key29": "5PAj7jFyQnQ8bvaQZuDP2xJDg9coiqB4iXXzw6rjqoxnLisYM4rTa4i4u4v3UhyzzXkYziNFjB2cu2xJ2KYDjMtv",
  "key30": "25kc8oPJpXmQwj44aAAyMV5vWpeLBMqWjjpDHC4RTZsZ1FSRBbAXQNorfVauXAoQtnJaQbuhE29FUmVyVBS6LdXe",
  "key31": "4RfNVW8JdngJ8DUmyTA94H3e9nGJy6L7vDrTUApnXFWWDgqqve3edqVCnnYQvJNnzPFMUZB2xaCZpuiPbAk1TFM8",
  "key32": "4Vb7YT9GgqTxmmFvXntJPZZFgaq86wWzVt2BAJYpGXas9zBzYeki8eF42vAuD5tCdqiNSjMVSMN9ccTk94MU1c4E",
  "key33": "hyQQrgPaRBiL4j6qugsnZd7Azj79jQ4cwbKkhqrH37En3EcVyEN7XSvS4RFxNZDpzzBNkitfJenStx7CsuZ1qNM",
  "key34": "5Fyd4vxz6Exw4nyPT59m5yiYUxeukSg8G17XVxRbjTBksfp6tu1g9e9SpgsmZnFyTvYWb4XtgKq2PTQH3ws4nEq3",
  "key35": "3NPckgcH6TZQS3bBDVfXfH3EbE7kVSLZH4LASNomKUH9oH32tsrGmzm8XtfNS4SM4XpHFMFLwU32w2Amii5yyngh",
  "key36": "34H22czdqwW7pNgFioYsJv3vUZdhmMhqmMKAEH3sqyTBney1zGpXt5TP3uUM13X1i8QgzrACkEvy5Yg3RxySiH8C",
  "key37": "4xUQvyF38LRs6b9mvVaPmH9qa3rAaQy5Ygj1nVPk5vmxNUSDytCEVyNsPhJ3UHG3EPxzrjxLJkfQD9pHwPAwFmaK",
  "key38": "3nzj9vry2KQhNGvVyfToDgfab6NvLwRzNsYdZzZndrzPbpLrGNE3uH6WUrF9JiR7gZjpf1LPZjxacnB72bdecegg",
  "key39": "2DfKZekqXiZZyyFmDQCUya1yS5aNtRYVp8zq6WYfs3NAMiqMd3PTVwfX6PFJQkFbe5xzakd2We2RTJaNiURYpVyd",
  "key40": "43EdSq6zMfTauXHxMq9s9uBR7YoMV8DHWLY8mfHmz2TpznusTAwiB13Lvztn1L5Rw3dL6ssQo8PA6LxAVzCeFJWP",
  "key41": "5nHtnF3YPbkUaZhtpNgvoZWx16PGH1mhfYA7tw8shRdusGEeHhBVKMPeq2V5g11hWvrJ4CbPzVL1CSqSZQcuoHTP",
  "key42": "48YsSuNWzqLEQ5WZ5YauWavD76em5fw1YRYXT67ayPrLqXKoDFqySqTd56N92fqPoyUhVEYvYPHTHnyq35xHCNET",
  "key43": "CqPBVkyGpo7jmpj6zvDZqcpjL3p3tYGyavGzqDS6WbAVeuNhz5JuTnFs1NBNawgcKFRC1hEEVFkq3QbQY3e5icG",
  "key44": "5k8dGkiELKp9MHLHokKNCqXa9KWJZZoVdyHW4Lz5BZGhhEKkuTpoKhwdjdSvwnAtUrEnGrFsam3rEpTpvP1tGp5G"
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
