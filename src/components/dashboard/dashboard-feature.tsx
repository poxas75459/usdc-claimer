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
    "4Evg87kXWPMbBNkB7d8W1MMiJooE3PYxLzUAGiyB1bL7AWxDCwveiSQhhsdu76ryP8pQLBxTmMCDW7piUHMtkp25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RrzY4ZGPqt76SUVFrkQmaQwF7uDxxhU6HRsjVJog15BnvbGaYrxcVQBVtG29NNspTTLYxZ5JRbUrtUkRePKjnN",
  "key1": "AmxCgh78LEitAGmAC4WoFGoKYyYfSVTRAbv9HMhhX22mEVdVvNkDbu5CKvQUsNpwX6vSKRRCfmEcsm8pNsXP61Q",
  "key2": "c5QHQoqRYFraTZsdmgmcGSZn7Vff6S6tteBCD82XRioPV39dpLQDobt6hHxfihwHfNeKaNnQdxZX1oo9WLo9a7f",
  "key3": "3Z2PyEXowZrxVjSpb9Spha6Waov2cxMLzCcCtN54bSmREfrQMcDP4YcjjvTF2d98TgRJQs7QEypCDBfrZdoxeceJ",
  "key4": "3ZJtJDgng9KyoJvPtQ71AFESZWZFzYqThKA8a6znX44AR6HMsZ9LKYXuhVvdRdj4bTt9iogk39WdzLifMnVd9Ncb",
  "key5": "4vLinaMi6UL4M9DnmsRXsFHt6vcRjJeQroMuk7GtTi51g11MMhw68wVAoBaTmW81XhKi4LzNcKmTXTC9CbDE7MNF",
  "key6": "3CroBq5pLWv1Hc9SC34C8JyygFK6cRDi5By7R8dnYNoudzX2j9FqVJkHvKGVD1PgqdRXnvdbrzpDw6iC3sRM3DZr",
  "key7": "wokvbtYgbLbrb7Fqc8MF8eCBdnWZAvsFkhLjBgVn4kMEB56QG7qLyiTYTbfnztFAVQNUMHSa3zNfKxi3mDpy6Ww",
  "key8": "61si5Fpykfhm9No96uXNWErfbEyezqTC58wURT114pmNTEzqEiyiGejdXt5E7RNq2WC8mWL7wPYpg7QH7PcQ5sqh",
  "key9": "5kPycBf96E8WpXSGdu2tYk7acTsbbkJL2m9eSsizY2MnobELsSbxjd8muMYsEFMotknMkwspPRcYUVu4bVAnAdi",
  "key10": "5zM5qwCgkcNCbWVyE5LNmYFbrXUfsebZx6NAJ6fNc2hojTZtRvNrgML7QVLuZqzjuatax9hgZi8qNdFGCzQHfwkL",
  "key11": "4bqaFgCW519UTFq9PYbnmySHu4kSKv5mSQoNQ3KNuyhAGBN1cyq7uu4uhQDMqR8ZMCiS16dh2s1womoXJag8CJnz",
  "key12": "mr3fNmAK2SHKhVmLMRnyEsS6f5PySYfWYiA5dcfRr9NDRY6UdLJkdQP8XkUum8DoxyJbgeemPm9GwbZHA5tPBjT",
  "key13": "MhuunCw4LrHTpmTGCtXLrVgAMdeAKGibvcSBburmyCn5vDgvW7YcP383jbJ9gPGsQDZjEXZGzdSmTKu2h5w23NS",
  "key14": "4MA6LJSbdpKdt5qwhMtyxGhfhVtTrpAZSyBgvbHzeUot3K2Hnjm2rdHM3op3BmpFv9QR39cGNy9iVWH5MtLXTAfY",
  "key15": "HLJWZ6YepqFDJuJMaZoPFKsegxoJ1m73SRWgfbhksuk9NeMVHUniBUiM5sg8XgFi9DajxaShQ5xHbsoQGAhoFZp",
  "key16": "4YfgjvZoiLPdsgNpm8iKSbfx4XgHeM1AcDdajcTGVgTRRMCm3NzmZEqQhgbsKBAuPM3vKcKJXK9U1ZDV5es8dHqW",
  "key17": "4ZANqM84cDzoSoubte9wqVcjwKDVkAAihYTGS7toAZYFLAohLcLZYZ64Zx93ic5i7VUygLSTvjaS6axqATCa4hoN",
  "key18": "3zpDUfxveKh3ZqqUwdz72fdxuB9XTDvvm5vGFxec8QwKr2sxsPfjKFy6CjEzAJLCmuJCq9vCs4QwRiBWN7LGqZCx",
  "key19": "33caQP4smfR3uty3KZnJPd6ve7bYwYisSvng7h9R1j1KLgAMevwivAWNUFxGT2Z2pcTeR3jREgQHvGAwSpsJmpVL",
  "key20": "MeUWajzpDCyubkBD87wDkg7yV2aRU5HvqYUVu1onsxWLyL5snFiZ96rLvydYDE4vWgNaxT9GGsZ38BmCg9cxJPB",
  "key21": "2Rm6UcFjU4uzoSYqp3NLSwCjAiJcMWrZcU7YJxp4KDsFcxEuEk7i8Y6LdHrBhfHcur84vq2HeZycPUqZjqUuYdvv",
  "key22": "axQU2xrHciT9q5Tn56GaSZ4jb73tuusLLYpukRkpCPQACneVA8gM6BApUvt2SfFhkQWgYqMBkPBaXg3jP5srVXv",
  "key23": "3Rfc7vwaW4yPJLuH1ndkuAJ1qSDQMVLBAmsFPqFq9pSFXyLt5K5RkiQAjX1RFJzU262Xp8FTvJYNQaaVvhxqJ1Wt",
  "key24": "48xMua3JEYkrxicdPz6AAx2WxiqkjUptNzEqUF4UJ4nSRRMeLyq3iZhhGenmXmtF74j2zJ9zzsuhbHnM1unktrJ1",
  "key25": "36Pj5RnzXHawUSarLtCwyeAALLSAigjfia3mqBbiqw496ao4Jnf3myFycktQTe9zYbq6aPwh8oDw98VcMVcpmJaR",
  "key26": "3waXtFiJ3nyrRtSaGNj3fzFx95rW6ngfbA3eSwyh1pwKUU7m8pbzND19HvCLJVEG2EDbCiAwM1idtvi97La7X6pm",
  "key27": "5stfXcHscSVJJNcYrLaJ9LNqm2NJfuXBqydJvkwHQaAL4Y64acKNBoyEne3YT1RjjhEPrimKuqevHQkowaDY2FLR",
  "key28": "3bAQxet5JwB8tn6FfZqzeQkzx7mVkvWXN7zqKBE8ATRNd2UqGvHpCrAVWXXcFixoYMSFL9CjwjGGkoEx2XjC6vP6",
  "key29": "3RjyKQthgucSVDJXVBBeC7kNst7HLkZWJa1ctGVLNJQ2cMoXb3vZVnW9DQaVfSfZ6yG5chAyN4ZWKvtv4yLwMgAg",
  "key30": "xhaeNwEr2L9E8n4hqZVi1EHBUsP9pwwevLyYG7DpmrRV68DGiK6p2dkzdzUwxyg8dJVdtUFsFjTcLbqNQHVbbwt",
  "key31": "4vZhL7kJD4nDtuLgc3qxnEkbHZf7cBCSXAQ3DiNbsNfWVMWVgupMseSuSyobkUfC5wT8MBoKHLxd1oj5mqiC8Wha",
  "key32": "4pFqZa31j6sw9bPvqRmepvdBoq2pg8NQkhi1s5fTmpkUfc3MmVpoGqbXXory46g6HtHfZVjEQjkW6H6MS3VeMfL1",
  "key33": "2ScKNzvh5QaTrGfs3Z5KXei7xSnYX9imQK8b6bESGtyscmHbXMLiUJa3dUzdK7jXuZ5zqowLjR585NenjRFJ4pVD",
  "key34": "5VT1BDeRSyFEBdzpFPcGzr7BdfVmFUeu56DJLjBazwnn3cBCxPxSxunAVR7jFcxjd8AxbwoUXaHNUNmngivyMsHU",
  "key35": "9dXj4jBL8Jqb6NGm81y87CYwBBSpPN8kFPs3rcTHJXLdLFHNDaGARwPyipHGa1cRotZ3bg2YFz6zGduF2Ppp81e",
  "key36": "2jaP1FEdMo6TQw9cWxhv7QPTVJJX98ecJLsDMbVfoFYzCCZSLPcRmCN8QmXCJu7JHTfoqyLEr8otZRbTyZT1gYJ9",
  "key37": "4WENgHDW8dgtKbnvzpBhtR9ggyJigznji2YVZCp4pAvZ39Ph9eCKDWYQgsDGJLh8CVBLV2QjybfzErBkCyc3eNDR",
  "key38": "39bH3mmYJqdpy3yBcsZShw1JQ7eythEpDrVgzuofCaMKrRHPhAEuD64SFTUdXWJMfegRW3vxJKuKcT52ebotY23j",
  "key39": "my9mvGmM1pVCETTRjg9JNBReqAgaDVuhYFr13cBsd4GBxBUMHeJc5iXbBFJ72K96xUUcmNJ11Bqd7JbuGqBME4z",
  "key40": "Vfc3ynKi7KpuqZHciPaytFLnAmA6ivu7EFWSGMSsGckivuueUd2ipFSfQtiUosJmTNzgwiLNvEZer1twCRbYdCM",
  "key41": "4udKPSQTWYFbBreikKrfZQ5e2dZerL3LUJcQEqjshYFvJTj8Jns1ncn5iwsqf8CpiaaoYgYzpWCTDXxrTDHuuhQ1"
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
