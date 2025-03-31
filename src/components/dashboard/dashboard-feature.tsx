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
    "2Mr8qHDi4oDZJZ9S2wqXEsgcUzHweTajbLXr5JMPoykhSSDhGq1ut3DkZu9RfS5VfsNXGUu5ekYtwpm2vTrQsy9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CirjTTdaQy6yMNkV5yLfDLAENt3MMnpXqRe3UYzgHrPfRyt9JkomDGfwnFDfCaWGJtSsmcMsVWDegGse2XAPAyn",
  "key1": "5RFdn8dPMaDR1hFA7NkgnGTdnVx3kH5oDGpbvT4QxjKMTt8pwnfLKTgVwXkvDo4suQic1ccnpUpXfmEpMYnCfaLn",
  "key2": "5CQmeF97cks3d3u7Ghz18TNLGQnzpxrLQhMMZ9eAdqrE7G3vnvbxCS5HyYLZ2R2GqZasCuEnV6UxUoffPiWNHH5A",
  "key3": "3bzbBpctWBTytaBou3Y1byJvjyLip6oPNw8oAAtRBsnTf2EiCtZokdcJQNTaxac1ewrQZPiS7P24fRdUJm5CQ33p",
  "key4": "4kLc3EHzDgLXxLtkWi4C5qy7Y6VGyNrVac3Vu4Ybwp7h4VxrzQE5dBvgXaNg3XbZJcXXH6bHasb5TGA9ZYxBUHKW",
  "key5": "3SYS5iYrLopqLjwZV4EJcuakp2TEqMjLvjKH9onZpEQktYEt6h4P2GzHWqaTn2LkgeAdeCFtULyijDtgMgxQruzE",
  "key6": "3zbsUxGJaNMnvSMpiscUZ2bKtphHAsj5v3rMB4AhB2H1r2gwLfxrxXoh21LRF2oxNh8HReDbfVQPzaoREBwY3xKP",
  "key7": "5w4jT7ZRBcBRfc98SEnCjSP9MsuVwNt2xZh4Td4wniGC5XQrvdZRieDCDgmS3SBB5cdZX8SYMEnBUHukR4XTmJuF",
  "key8": "3WpW9hYdSTgVfLjooB99jyLrREQkExA4B8tU5utaP75eeEtteh4rGs99Zpz6Fw1YtKD1fFGDk7iSrdMZqydVjeyr",
  "key9": "5vqBcQaQgtWYWfSPw4BPV7Mac5995JhzC8djuWimJTx15Fu4oi8gebLzeXvtmePQqnVwgwgt8NvbKqRvjGQ2HYzn",
  "key10": "zfyQrNeJTKfxkZGBNcyaJ3U2XrE8hgsthXrXEWcvwea796GHJQc6TZLZvS9ATmjvFDCEBxQ2ZQYMxC9xWm6b3MA",
  "key11": "3ECfjYoSKYMNBbEe7yewNgjXSFDK72p5wmYhavUZZqrtz2VBynwkiGvTnE9YgmnEVYYvB5qnwHo6jWV6VeCNuqs8",
  "key12": "2e3u9h3udj42sHEYhVwdP1bzSwBNvoBwUrJ7jsGmWPcg3GJKqLyPuAC6ztNZMTPpftJrHzdNi3fesxwxXyjDicAm",
  "key13": "5iQA4grc4Yam7UtSAuf8kfFZdGLezgh7UBD5ysEBMxMr8AXp9fdT2hsMu3Q6BG3EcjjataGdizBKTspa9w6DtXfU",
  "key14": "656xMZXAYiLtdUd2KERBJfm8FbYMY8ETacyTjoEQqZHoDBxsnYCgiXByXX6NbXkif8jtnrhtN5cBK72hWNN3rzNU",
  "key15": "fxJ9jK1fHsbVS4nnZgzBJHn3N9du1yjdamx2YZeuK6HWNg2opqJzh31DigWB2MZrNRMc6Xw6JZ7d5MkoESrE39r",
  "key16": "G23Q5MTSU5DkAfg3wEoH3ii1L3pmwYd83zc1xqEjuQ8oLJKaBdcH4h4todz9dDaXufUrd3prASHLviE7CAyEq8H",
  "key17": "2qGCMwX6ToicvKMwq87FChd5UaoDneGJwnJ6tPthmZEEvSpTBTJfeHkGV8awD7G4r2y768VdgnM11MgxBmaZDgzF",
  "key18": "ddjXzTJ61ipi6VJs5arCtgb5K4AJyzz417hS3BgobPAvKWLMGUVuHGBJgAPMz6R9sCdCSQ8zLr8VcPbKsHb58Yk",
  "key19": "4PYxXi5dmkFzniiXx9xZ4qszXvTUtwzESuFnvzirNm8hCjU2psPZbQrxKG8827WG6AReMoXKHjKf6THvbjDajZrQ",
  "key20": "2G8jEweYm1ZePFyoj46BFgSMGyHh3FECJJziwNz2xDYvUkbDTtVqZKGQHrFgLvwMHnXm1Tbi71qnNutWXvL88S23",
  "key21": "42RCiCEzS8J2DurJg5Bd7q8PfTdGZPFfpg6QsxzdQ37Y4WVNK8MeUVuxhdou7b31EaevEncfWzb12ALC2QkSYcoi",
  "key22": "4e47tMREoMpdbt1jJCuvRhPDikcJib7hYqbBfDwbhaD9hmhyqZbGHshs8bJeG3ZTLqiY5yUaY8LpzFCQCPnWk2VJ",
  "key23": "26wLsooQ6SZXyrR64awGtDspmuhPwDKsPxwYuWGw7YVht68j6dG9bv3dKiT2VXTq1LQsLbUyMmNsqLoSBS2jkzG1",
  "key24": "1SbySzT6MCzNZ1Gqgkb7vRJC98qE1WN2ZMugwPtapkuhfGEnJYGXUD6yYmTHYLkooAyRLwEDZDehEZuuCYMuvdM",
  "key25": "36qojXgrdJKKHEdYKfjgZrwRVg6uFU8woDe2KLkDQfgAKBjVMFEV1iXeRsJxCaW6P11QMvA1gcKNpmsN9674NKuZ",
  "key26": "482qoy3gMeFN4FL7rS1yXXr1PFdtmUNd6r63R9FCAgALQ432EeRj2LMn72ZdXVicz1BAM2mHB63vkrXkoVdwNR1E",
  "key27": "1XEAGx3iqs8echKFYc6AcTGLV7AM57QnfiXRE8TVyzzAX5ssMJ32nzKYPCjHVKU7i6axq68UjJtuYSE3tvLtDkY",
  "key28": "3NC1qhbwAMiwXnfvoxAik7z2VpQUbnjhYDpLZSbhhcWvd964WDeJEhRWaWNASbibWb6UP8YxyEM2ouFSQp3nm9A1",
  "key29": "5AJN7e8vjfvpau25vMNeyCWeXbZ4rjzWvPjCa6SWENZgtte7hPaXrhtB8npnTrktVJgtuEFDap7EAFbSR6G6GYJf",
  "key30": "4MH9JPJacxfHyrXhvfLfzTG143DPsvkDp6HF2119r6HkQ6SyDJx8daZ4XqFrYqC6EVkMAf3oYANvoPB5aa781rQu",
  "key31": "5ZXQzeookV8nzULxLFaU9kxUp6k2SQpZp8dfWzK3nuuTPn6xfq17352tHcj9QvD43XRAPCtLonjKdtRpKU7X6WWS",
  "key32": "4wKr1vPKxAfG3PEitX5N7AQmS81zMCP5XuTwuYsptM3g6saHZHwpmk8vizXLkn7bkaPq9p96DyjFwYYX2fr8N8uc",
  "key33": "3B3YXtNY4crMKzv4fgEeU5bKDf1hr2MjUbuH8eH35ZkTkHvE5ACwUhnTmgSF2tkyERChEh7cjpQUtXhQjFumoMrz",
  "key34": "2efUbEcQug9iqRpcLx1KxAwSVqrQ6jdJCHBAgEPiw4ZyuQphxACMECMywrhxzvLnwHW5vrGXaA1491TyFDHAGcuH",
  "key35": "2dUMN8MLi5S14bEGHyeThEYa68Dpbdy6sUoBSmqCFtuqp4z9t8CfsdMKsEiJBkAVCt4P7Yohy3sodxu1YQBzxPC1"
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
