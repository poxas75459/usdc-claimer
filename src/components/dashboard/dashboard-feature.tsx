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
    "Q2zDpqRXa8VEc37JP6nfUBDhVWmZMw8e37T5JGyxqRDBXjRcjqqtw8PSuvq3S8uknrAFszrBvxPiQPEE94LidwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59qcZx6FFauz1K8wHkvFmVnFosVBUWro8qWm2QVUJVrJXrt1L83UgBjPvAj95cfN1A9KCcZEXiY5BCHjEKS1tBiC",
  "key1": "5dLkTKX7Y6YeA3FLVJjStr14q41jC1m6EJXZwTmVB3N7EJGdayZbx28ZNoZH1gSfCCZugiS7m9Ap3qAQ6tNziJHB",
  "key2": "3MRPHc9g5sUk2wsVLpr9RzbDN1aF5N6QQKzZXy4dGs1UTxWp443GVffgj1WuUn3h89oazeQeeALWUbos1hTdbHpw",
  "key3": "5eMb45Mj5tjo2qzSxFuKpCHUEw2Wh38TDaCgh2KWqcab7YyBrvhmzt8JfxGuTDHArjBxVmTzqZAZnJWSPU5RLwBx",
  "key4": "4aRrzHxPQeSnCCfjvJ2H5eeSFN6jRZyqW4xdZzMe6wapRG5BmdfTnjUYRAczFGx6hKFLFUZxdB7kgHzEKEN94K4M",
  "key5": "5iNnGgTUgrQ4Q2u655Q4cK8MdUbui7fbKgCqB5snZboBd9rdWVW1ocieEQx1bBnMzojdKZaqCE85hzj88PUQShSo",
  "key6": "2bNFzrrY7t6UwXfNxrNZL9y3qHDpGXsSiRrcUV83WYnUvDV6FYawS8hQpMit8UFPaGdG6Vab9TJJsYqim6GAXywN",
  "key7": "4C2nvbU4PSvsAnSgMNFqQhmNUnxoKfFQEpyiEXYhzPGg4B3tpS9GtPDGobZakyDA3bABPApnpT4cZDtNPutfPU8V",
  "key8": "4gsu1M3LF9aGTkfSaj81APaEaCW8TYbMt7WLCqC2jcgNu4V3JzESj27VfsCeuvY1AjSZCo2VaFHtgHq5hrFnmBx1",
  "key9": "3UqxSPEYL1QExjpsXPZcA3PxfJ5TTJRCJan8sJthfkLNUgfdZmvxez8egu451x9yoKXVn65vxw5nhpFjfMR6Bd1c",
  "key10": "2HBQPJJTzqDRupccKdkUtv8vpPCm567LCXb9pG2dJNR7SA5LrSCfcj4AcVtmohNdJBAGUeuYwva4EDzJf1SurdFY",
  "key11": "2s6dahiyb4wpb5iMSxvvPZHK2TrsZGDVns2GNZ1hSggxfSWmWRDMcWmk579hyx4LvQEGdihUTRFXdFbegzPqdd74",
  "key12": "4vg1DAK4SUYthEkA6QEZwugqjNjmtDq83zmfRiiVtDZ16tuAoHVWZc5m8HKbptSV9DYpFTzMpgz7sR6wJ1uDE8DS",
  "key13": "3bNCespk2XwnHHYx4kjH7PgM6F9PjESkJiom6yqqCnUBsCNfgvqacES1BAqMLdW1x7uWknxQmKWb9C8Lf1iVPjFs",
  "key14": "399B9KLkBD5VudJsGGd89FATLSvTWjyuNWoni53u38yzWyNCc9M3kC15ncejS61q9vTmJfg5TGx8hry3CwtZ5bpk",
  "key15": "2LGu8y8pg7HbN4DiVKZChVv8YA3pMtmGqRKL77wKoaUT2Ko8VfJEKSSk66eRVhDFwy7UMwWztCJoedPXRjcsgTAj",
  "key16": "Zu1rwUm3AfX7tFBwU2uho59mRXNNtFhkC2oHXg6M6hMKcgyTBZm9T6SkyJiMz4KEPEy4kdSLbamvuG8ykhtkvXU",
  "key17": "3TTLK4AwHUddkkygH1pjXuHZtUJH351ZQuKfhJ12UQh4DTnrGKaaWuBWqiaVh8r4LKxNyWajMJ3Dose1LzqyefkP",
  "key18": "4VwdPYyssPg4LfQy7j5gmbX8axpwCsdYXa6upqVu3cp12dodzEg3fcaBMykt29KXde2wtmkGVNHERsuZUywaLW2u",
  "key19": "3cWGUjQquScDcqJA2j8BzYSh3tR2eydxu7xEmxGgFp2RrNQyXKoLdniZsN785PKNZqc2V3GgkeTrCF71FsRyv6tk",
  "key20": "23ioVSsLsEHQqtVEjx4Dh1xusr5kEKh3XNzeoEECueB4Jymku76jwaZP9K8s1DF2xzycTMGzr2NrExkHvnQUb8W5",
  "key21": "5ySkT12vy2aL3SSDEbfUeGTUt5TaRBajCC4HmCkhPXUnzcTuWcu6Jx7a4gvHsnh8oHpWL4Q3gBsBfTnVCMMvT7p8",
  "key22": "Q6XnmZp57Dz3iTtp1danBEzYg56BLN5PAtYFzSDqLpWuzMLZ5G3LFNST2pAfRzVxq4D6CkzjD9VAPNbNAJjaxw4",
  "key23": "2TmtRxr7KVFebxdwS8PCtzz4F919QGeZWd1SH6HcfWiM7aeFtDwKhhn4zPdKFL5b7xSsMqHcHT4EKKc95jm2SroT",
  "key24": "2sxEQPPVEycsXWFjc1roq4KWjgJ6QK4LtvYDsxyE6cphTd4R2AxrZe3H3oeDgNk9EAC288SsEWzaSyiAqAwebnLY",
  "key25": "2TPX8a85rDj9deVHG9R4ZCfVgYkGhPd4tEdoPxFn85FonKZQnX3ZAs5BuoXP3iVWH83pBd8JbGqrojQqvTcLrWDD",
  "key26": "3EL5UYa2N8MykojNhygbepxnQnKapzjkqMeP3L4fZMv2oKGnPPvboTtidQCF7sqG4Ej5xzVSYKZfr36cQdwNvMLT",
  "key27": "hD4tmouZJd22RhcZcbD6pPQVpeBhPtFZyHU29jR9sBfYWiNx9K4PZuLYWJUZRWE3P2nmdL1hnv2EAYFHiM5gnsL",
  "key28": "o2H9tBziKijFE2PZTtYLNpQbw1RzUZfLFF2uQQJKjswKSfKKZCfStxZhLaKvQ79sfjUBnWXjsPvHgKGe6bRdcJj",
  "key29": "3bkfdStEWvwbJjT5ipNPT9Yaty8AND2LM9o5Cz4XSLMFWNxugHdbQvPYrHRnJQkCaukmq6C9BbUQvbL577VbnC2V",
  "key30": "4Ao1Ctd6hVpaSJYrnNDTaX75frrBddGKH89YsTtmPMV2wRoXaqpmxLVZh1py9mQLrT8wWEMMTZFavUCcUdzaSVJy",
  "key31": "64LDzPMrcmQ1cpLesfcmkBy6H6gQ5nsQBpixnzXLmXqHyfgFeFdgqE5Hf54CtdVkRmfK3Pge5gcTsi55EfgFcKWA",
  "key32": "2aHUaoCmCffb3L82L1NbZWvko7sLwF26QaMcRJUzU6iqQPrMu3EBgsiD6RoN4CAeFAFpKJ9aNoir6xf9SWXFSWNz",
  "key33": "4NgmrQTFrJrAKLD4BCGqdExrvBsLCQzMg7wXWJpyW35KnAA28Lgs9cNYwcZeD5mfhZDjSS5nT2c2DmxfyirnigN3",
  "key34": "3psChWLUTHvqEAMcmyRVqDbiZc8a5DcMAMMvhzAEmFtEzmMzipxbyAQsGiM7BzwTqxbcT64bPkmN3Y7FHdKjdpEk",
  "key35": "4eCZRTQTdNrfYdAi3X9uMGy1FgQDTizZV3LBkRW9eL4VxL2psJWaL6r2BSF5yzikVQpTqLPyJaSB4uFQksj9fBn",
  "key36": "65kcT87gSHs3W1cSpg2ChdmbSSqkciEEARaXxaWk5w6xPSv7p3mXBoX8JXArLzRyEpJVFixtbgwRCvurkLoHymhL",
  "key37": "28sAf7uMyVm2apyYzrcWdWcT5F7AbAdxSiTiNHEc25ViR8ejRTsdzTQjbwUV2fTnwTNkDU9ZU8RgReNBw2x86TUh",
  "key38": "DrN2MtrXF82aDXqcpTH5GmsQCJCm7vA96fmsLXWY5HbfdodFQdKTJ4DNMsDuSPS14QTQ6i56SKdmu3STA15sEjr",
  "key39": "3bkxzbYjMbH4J9zfaKu7v2SGWs3P53oqcUhAucbTbxhbjyPnMtEUr8bmqNFoVhGMPMgc2M9Z2QtPNNeRHwPFP1ae"
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
