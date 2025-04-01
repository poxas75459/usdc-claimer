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
    "RJfmB7dnTqMPyzmo1DUWsGSbu2N2Loe9QiyUDi8y9qSZ7saKAuaGerwKLTYmnNPk2R6v7WHNdiokeDfYiew5BhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iK2j79XvkEkEuw6oNQ8JfiEjPBno4vVtHBqd2aWK2CPYf1ipj6cW5QAgGKoJmhUZwymPSAAR9q1w2tLWJGv44hb",
  "key1": "55vZLbBLgXgoQApsP7ndAuPY4uyazUebTk4kLc9iUPe4L68ctJ4P8811fJhEsBcru1ZRVJqbFy4ByPcdcJy4b8dL",
  "key2": "33gsYEXn5Hcb756NR5cBKmda6ju3HzQg6z3LyopdYuj4NL6F8WzEpRjMhY5ydbK4iKq9f9RQmqgzrACv6KeQJRVo",
  "key3": "5kA4oWavKmpsinnwgGVymqxRw7wrWnHJcqE2oNd5AJShdt9Z92AmW6B7DWKNiPNx3v3M7xQd16BYtTEJBAoeS51v",
  "key4": "d5uVNs4cV7PB1oaoouEng25LjUnFmCSWWp2u5FoLt4rH6PP5obJtCCBgYgQvuGZySpTJXN4RpZYWy7LL84E112m",
  "key5": "2f4Nvbf14yQeo4UWr5ia9aKx2QUgEBmZeKK7vbstWEWMpadShBVZC5DynTCEf4XCNaFRrHk6QtHnsemRB79khUv6",
  "key6": "4fmVguEJa1Xvnr6h7JrFPBLb2T78RscjvxmFRw4jUqXnsWcLyBSRtDpLpZE5ks2BgaBgaEPoDupbKJCzFxPwSBLh",
  "key7": "4zeaC6bZeozobx7CgTVVma7u9JQpjetHvboLyMCTycjxdHAiooTBLknaFpoQ7AyPc1Bk5ZTnFgNQhRmzBx92UGzk",
  "key8": "4dnYd67h7XcTkdh5cRtXoLVDK4frLCVvJx1RD2euv2dJEdQKVaR6PmTPhxE6sVwuhzfgPrGhdVd3g5t1ifssDDVt",
  "key9": "51GVx6rsGUN32V8b27j6oUp72rzkgRw8MFkLSuzqZkFxFDhW57XPyZePEweN9MbfqUomZPnow84EndmNHf3PXjX6",
  "key10": "4r65Q9gFu7eyrLNgDvH17bSyBVfK4KwtVqUPieL6Av5mGQBr7icmBkTZ1ERRsM3gr4JJofoEXMStn6RmStkGY47Z",
  "key11": "H9PBkFfLZK9hLrqdcEHsYxtA3eYEtXm5hLadEEPZ8oXsCemD8ZHacAiUH7K8wcMGbsusQoZ6zRty89CEPU3bAyX",
  "key12": "5LJm5NLmWwwQ8ymXzqSSrbuFQC5tpUMKSmEsET9FW3ESeHc381EcnrqVMzAViBqXNGxhswp4tvmJVWshZuT3y9gb",
  "key13": "3KF9Gei97TwUmCbaWHVUWscBxFo6mSHfNDHAPAvqXdTpY6D2coLDXHmeoLCXNJN9JyTGQmZHV1n3nUCB6gZPL3zp",
  "key14": "5d4Wf6uzgGdqhknoTiD3WNpn2xiDfqTk6hpKSpxbNcnPDrXH45MjS5KD7mUuhf3bSKXcz9skrHwzbn2GCLL8Fyvz",
  "key15": "3wZX8GauTbNywLhaxHeYbzqS7myi3XP3sMUfLvQ9wRBcjK1QGCczEckhSeb8yS5X4jRQx9D7tYEhv8xQqjKThYoJ",
  "key16": "2onDHTPxWio55wufJwoAV6P8hUHpew9wxewqBSFzmaCn8gM4QEi2avLpcYfgUcXmBeWNjgGh3mEgCPmn7yF8x8z2",
  "key17": "fdn1CpwPQqyviD7ufYjsgSnNw4fHq9VXeieCbaiDNGy5ffMvV5bwSKtqfxX7ULmmcYLcz3Co42Hf6oAcpqg2rVN",
  "key18": "2kBJT1Usj7Jf24kzdVjgbNoMvS2WGtUTg29qttbXmXhUbdvBFPWUGkYZvgpaRw3TANHo6QSfGxqwDAjE6x1wyrnm",
  "key19": "rpeHCuUxsZ5QQf36TRr9n1jkyxv283Lp4Vbj3e8mLMsQgJGCq5onm4oGHFaDFSGoHickNSzYcbJdoDce9BVUYW8",
  "key20": "66NnnKv1EHBo624GuE6PbUdPun8PEKRoiHbCVGA8LxRxtp7w6MePBs3bAkmrFqwVNMwnvmjUf2eKLfVBpM13fqAU",
  "key21": "2Km6Hf5KNw42NZmDisy9BxDn2Gvy9g4ZMrpwufsnyee6TwL9MjrigWmCpUam9Ww7j49rW3eCBqYPybXrrRbKRU2F",
  "key22": "4rZ5eJJiZnSv5dAaXGnRZurU1ynHwFiJUrNDoJBPdAw5PuqgtjNUrWDsbHLSq67fYG4vctUquprYCGsEvSvDNdEL",
  "key23": "fmsQ5maJH35FM1UaUDUacth4aNBCtZzWYALj4mrmvFHvTfsknM7snXv5zDxaYvVx83UMpN9AaiXbTkTkjDK5i5H",
  "key24": "58tqDqauvq7oi4D4TvwV2H5HR71wiwqGF2n8J2oY6Lv44b5Q8ksV139q1KBqfL1wayg6mFojwugzAJqqDjR9aJjG",
  "key25": "3bBA4qFABeRkigRBYSsRJWwUiDtfBgfLm5vz7QJrrBtALQRrDxnhRKBwajQUzGnr1gcb6kSxMGmTWZs3rDkAEpq6",
  "key26": "4Do2xZgPxuA7f4bDN2a8sxuN5ejWKAayMwACuUqnvVXZ4BdQfutLLC9btBfT4c1op5ZQ5TdrJ4b1BskJ7YUJYCrE",
  "key27": "2BMfqwRg4SN7ZDogs9gJyfAajDipN9kECggMrzMsaoychhFXiFKy5WjU2zqE2WYSKGfXfhe4TvhguUBxX3y6CfFc",
  "key28": "4Grto5UK1jmH5nnEsmeNzoAXqrgGDYcFQMkFCZs5bXdP3ySvimbzCgpnpW2fmFtzjScdA7LcbKfFW5t9gJUeEadm",
  "key29": "3gBUF53NR6BLNohmuQrGwFc51igGKV7sHjzzULWaxPeTodNT9aBK4c6i3D81qiGpStvHTyNEJBDfjdn9MztujykH",
  "key30": "654ptx52jE8nutH8DQM1GG6vvN35Uo3GakA8sRhfyMjDeNFDiqLLkYwfLTEzBwp8rk3x9hkXZQB8JpoPSbh6kPNw",
  "key31": "XgrDKLmP8BGcioL7BxaEdyMv3CerHRHi2LDyeWPf3YaPcF5YWet4FPtyvGetvPHbeyWAh41Kmb9Er9Lk1ZFjATF",
  "key32": "3hrqTfRCNHf5vWEjz9mFrHjuYgpDeXLPMi1CyyfcAcLbh8DFac2MysAsJ8ZbBZrPmbPa9gAaKxsMCH9N4psYnZAT",
  "key33": "43SyJynxKxjcz7x38NAeb4wbHWyDZu76VXbsntehUBzsiM3bYhm4vJ3REXWkGVTxTq9ZJvUBmhmYz8ZpSxZ3Y8ze",
  "key34": "4dw58BNqs1mGuedFRDkBUQ5nNMoppAWs1coUYXSm2Ks3pABj737p9HjKRytGNW6dWjVi5VaE5CCEFzcEemEG2RcR",
  "key35": "5u8q128hSBc1QesKip43xqGkKqhXLo4SHxCby7W6GTXvrrbEooYphqKUpF8AR4YiB7zvLAfiQaLzZDMvHeTqi2oB",
  "key36": "3urut4pqVj3QcTXXKDJTh5ytET7nyYHnaPSmstBfRhq9NqXLXvPQRvri1YyBx8YqvkcaQLgpb1jpE9tNUnmPxcBs",
  "key37": "i9hdLpkxnjHBFjwBSxRymwLwsxX6FRXDu5BDyckQQtBR5ZJZA2TVYkP3j1KpBc8MG6gY97GezzNR5kp3TvrDK2M",
  "key38": "2Lx3RUws4Dmk7383S2WMRtta4fpv13GZC9YKW7wiVEwQ37i3GD9GG1HLyvv8bYpj9ZLZWRm789uoeCr7c77K3goe",
  "key39": "36rVUSQDsYYBriVo9UmPFPcoDUPj4nTeuS4TG51uPyrbgnmBKTTu6VyFQg9wRDdtnR4coXASXnzeHRPpj8rcUnU9",
  "key40": "5zAhWG6WbmuXT9sjmYWvb8hvEaPeq3zqRNfHctvfmgW4RBFsA3ExnLo12YoD5Qk4Sge97QEZjszgX5V8cDpNTPU1",
  "key41": "5iR6fYknXj8ywMiVDLFtDwK37cwDTVkzJP1n23hKKmpX6qZqiQ4QHTBmXNDyBvMsvKVLiZDs9bLbY7r87iMetMcv",
  "key42": "257zu8bvpt8UMLzyFzpo7aDfNwBTR5DgtemptSUxAoe9wXzLvmo1ZfqkSaJiPg9awAtTvWK1Hd4L22WPjtWsXdLD",
  "key43": "5NxmLSFVho8Sk85N5AqdYZLgSbeWSGu5L21kA7zmozUYmk3mxAUng48Z1L3Jyi5H5WbrZgXMs7VnYHURvG5YRfXz",
  "key44": "2NP8pK4mvKC9n6SPit1U4yw4tpvt4FrCUfEmHqmMpe2WUvfm41zpJ5fZUCXSucQg5ypsqbXDpe3dsjUiktnfUxLG"
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
