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
    "2i9xfK79o9xRhanoLmUdRX97Wf1emq5irFVCFSSuWhYMhY578jhvY9crh8L6ucGY3wnAvrUij7fPdEwykXJB6Mh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xmkQDzdwJU9rHeow8DnZau7xjTRHVCiswSYEhEKqxWpptQEyzkmYU5iifdPQJy3Rz7TLpuQQk3pNTcoChc5RJr1",
  "key1": "4n8kjdkBTVbJGk2UETgqTbwECfRUYSGvJ6KGs2A8q5fq8rxiLoPqLURgfMdHoFjjCFah6poBz48n7nBSYHPLg7Fx",
  "key2": "5KtiEB37atanUB43dNZCYviXwZAppwZ7SDa6MPnzuD1PeZRK1AvPA33AeRPwn9jgQUiPDaUJ53Sm19s9FGeRNK8A",
  "key3": "34yFWDVMMGQq5hLmKUYh6tebnP2zi2iwLLRDu8D4tXggbp94hC3Ea6nS1H32zQRRdwLZeYmQ4UtmQpuDQvVxJFgZ",
  "key4": "41rSRxGSBFTohtteuw6xRmTRNc45yC9qTjTLQzZncXLDckmXwBh12z2ojcdG1wCU5Kh3nTZLSp4GVRmFSX653hcA",
  "key5": "2Gz1iHk145ybHbrdWvs9tCzkjxEDuDtrMNnvXJK3YmLpVov8pz4czQvEcaCR3XZRmMgc59RhsVkt6NDtRXUGNq2s",
  "key6": "65hA8emV5UakGNwTpTCcAVuAUHJtday81WhXQKDtEM976bJGF52JevgQ39p2dbMbmUV5MLMPMJUBJARPrt6egdEQ",
  "key7": "EKCiM3vyXad3CEXSarx4jWnwRP6UQmuqnhFZPrtyjq4f3QpDU6EXckVZArFuLmj5nuZCjoSsYFXfSML5CdxK1uZ",
  "key8": "5J6CPUrnTo3LVe9A5PaGeckxxqvY8XmniXFDsoUbPgyMAB7Ev14g6a9WDyaW2ReKE91SWMm1snPvsqqDehXEjWBw",
  "key9": "MMi9hJjUJqT4Bz9SFevZQW6EkAY7Q97Wc3b6f6VPREakuRUd1pvJcAv7jFT9xAzVkUb7wJ4582DP3ck7PWMK6Uv",
  "key10": "2GrMZnc477iCqDkHLN2UXHxY9voDRkjs57s1VNaqwgfHfwe9noVGnZjMT92q9pj7oMcQew2CxQkQ5CQPUSjBNJfk",
  "key11": "2zP3VCD3xDqoodG8gesQvuYsmw8tSGXtPBkUNFwYtqkqUhwpxXci8a4ynbzEFfbGoH3FRW8Fe3RcigaV19HUXY4K",
  "key12": "gDbru3zAcFfDhdVs3tM49Bj2znnv6CzMScTt4SgD5KhPRYqZd7Mw465CmLYWhbB5De4rrVfwd9rX4epoPDPv6im",
  "key13": "8DuZsUDVVQxoU6tFB5bJ9ffk3ra6Ei1eEbSUGSZXrni295tLZEqyoyDwhpEFFhzBRRovAk6tNUPAtpEBZVZdmqP",
  "key14": "BjuTGCfLUMyXbUd8MdJSSsWP86AiofqYGGWTFpf3Vf9HrNQhG22fcDfbwxoNKQWzfwmQ3cNsN7cQ6Z4bUsNYWwt",
  "key15": "zf8FGNESZLRvPFNFKHk1fprZ7znkpgGkXzgCThk6JiHYRpRXMQJ5RVDvvVz6mAAuqdWFFrMfHFnFWqHhKvoBLSv",
  "key16": "5WydrBox6qJxKEMgNs2iXSVJtGgJ21nY4yj46dHyNXxubCF9gVogQY7gGvG9KdGumQ9oeyhjhQTRXA4TvbP2MmG9",
  "key17": "53PaSiLTJAm2a3wofirt2kJK5KWzmh8j9vFVM9gEDn83Puug3n4fLMXSXixccCRDu5YmK4K3aRXbGE58TcJmfZwb",
  "key18": "oGfmGeAspHcyn683pMW8Yzo5rTDw7ooNX7SE6MwNSR6VZMXmYZn6rYEPZNjSrhwM6YYZWRip5x5fGag2veJ6daR",
  "key19": "292npznhHZDkEnFu8VNMmNgejX4TxFRteCWsA33r6wHNA5pWgCARRfP9pRe2h1i6faeKQh6FndYa2gWqByzBTURR",
  "key20": "5bSxXYD8AKJRVrfeVevGDAWxyUKhra6q9iYKkXRr81bBgZudajV1ytZZTMbPsAXk3ZCQGSS4j2cgL2bjJAckkD8g",
  "key21": "5PjXh1nYZh8SvsxM2fjJCJmh117WjDDuJ7zYckjCLFaFNx1kadFVodfjByWfN8Mcen9yjCCiz6NscZogr1B18oos",
  "key22": "xWSJsX62fbgdUfRsfDX4XtCah1KzDEirYosogqTmpgdcUhjp1aoSadRKRguHvJJ8ZDotQyxpoKa59EyEw42vmP5",
  "key23": "RhRDZRm6YGyQGNyGMoTkQAqCczs9zgugTYGwaXpBK5PrsVRaDs9FWXVyBKB5afnjAr3mfwuDTHgHa2XN5eL8cfc",
  "key24": "5K2pHADHoWNqavns7n9pxsTUcZibufQ4fkcnSbHo376VAryiUBkqSrV1jYUaLNk7LxPDbHha1Yeyz1MtXFTZWqYz",
  "key25": "4rfpfobKMGgnh41DXd4LeEb646C1Q5yLcRnsyNKW5CH8MdccNB5X1HwKSHToBbHr7ZDebtEYEkju5dJE6WXwzSiV",
  "key26": "2Lg7KNZVmxp34AHRkAkcNpvdCJQ7jM3T478mQdwBDheoVcHCFXrtBGWqAxJBoTBgVVRjNdNZxdQwfTk6WdfjBU6U",
  "key27": "5VQfmR69i1hgtZr7Y2KtosCTpxrbFemr7Jqm31XmVhjuxwWprHe6xvyAZDW8o82ZQ2qguvN7jXUpMw3cvGPxwocm",
  "key28": "64JQ3se9VuvfERXWPCLrcNPmJkXaEmkPko7Dwb9HMoBDMfLNLX4Pmzby6RYcbmNL262jHyEoNg9CLFh2r3Cyi6C2",
  "key29": "2gARUkE1316SrkB2WZ5J6r6hYUV3yqoZCiAjWXo1ruTrZsxtdoaFC1Bn1UrY4vNxKe3A6GixN9mDi79uhF5MzBCg",
  "key30": "3FztoUUmBY1Pn87Toqe7R9TqNjYzochJZWnRGkM4g2TazDiYxB7RiqdpMTJP9gau8YczLSZkVDBiDEofpkcuuizN",
  "key31": "2hosNssEuf93m65PRj5GB24rX49W3i5FrqCNKeNSbAFGpYQFpyqJei99a9YY6RGbcMymU5aXSC31anpTQrMydMGg",
  "key32": "2K9pwEZZr9xXq3cEtJNTSU7GEfm8Pv3YERYhsoGSPCEWifbAarbQUT5kL2Hvrxi6MkLrKEuQqb2FKjhgVn2DkKMP",
  "key33": "UPQhYJ7Qr2YeT6SNfVXEw5ExJ7PCGrojsmEzQrQceKf8e5sQRiVwXF8KQXMPpdKB7mHL2MbAXSgjHDPqgvc3hnA",
  "key34": "3JMAi41ttLKq7W9WdbuSKifVZSKrgS2RyvbS7MGgX4hSXPYJ5kBCNvZfvwj7XVFgbsFtDs3EfKi3brRuFMVjWSon",
  "key35": "3rjRztpY1XWtEwEvfcErBRmoeiiMZDTrSRRCFW3YfwHDYTo3qNFdoeeHtWdHuB9G7uRFoXnztZhgktVJLRF6G9dy",
  "key36": "4vimuCef25i3W8g8DqvXm6gDbPc2hFrxwE5L3A75PVGYSNt6iWBG1gnmb2P4cqDLDoYqkivadUvMnNu2ym8fcTuq",
  "key37": "5GwSBNoR5nQDMLdhfiT5GhHKVoxJbiJ89yvrcaKVi9o9gQJeqNbPqz85Tbrt3RJMC3TA8sgs4YBqUjxgd8qsb72G",
  "key38": "4rMahpvUum9NBBvn1oZyW4oouaexo2Kqk6QrH2o7eHYWPwYA4E4gSP1vncZJ3yT9YSEYCsyR7Z6w9MFBPvwZLFTe",
  "key39": "4xGKH3CbNY15HoRnmWzFBqQHPWfqSUs3wkTstBJekb4QLMBdBGYrWN9BENiJgadwgQWVKH8Fc1nfPoDsyM9tdtt1",
  "key40": "2rfXc3Kge8kcyKLP39u6JzVo8BzqdCAnVujBEev4xZ1WTQ9dRnSvEY1NcFrqXtAUBfKCErxBj8egu4QNwSLUR1u2",
  "key41": "32E2tajeoQyEHW9ipMjNvZggbNtptvMGU6eRRcc8obUWtRgbE1Bwr3dgSuCH7jSuvb4jz89oXhSP71K2P3BjhybG",
  "key42": "2RYtD2GWBX5unSVa7ZsrohuYZxsFuvjCyk579KEENwJaALKNshto8r8wBeEvRCBoPQ6NzDep7mSVMaTmKMFpevF",
  "key43": "a5yeLtvUx4TicfmcBCJ8z2t21E4Kmf46os8KHFDC5fQPUYMrnxg9zjw9ci5nTAVW3WeooxKhC8cdSe1nc8Nf73D",
  "key44": "4cL3YQibNGqsmBiJDBZgBCb2jVm7Xm6YXWoFUY1ByzN3otZKQjH9NSfkDtqKkfQ4hnNgkT1g8yokmz7TrxAhmQCs",
  "key45": "24ZA1VbbyXkhzvaxWH86oygp9nUmEavsYeeuJ2Cz5YbVJyVw1dBpqkzNGdVLAcKoLUNJeizjTsbDbTJK3CPNGQh5",
  "key46": "3Mbw3tz8y1BqcKfyUPKvYVwecJ6PeuRiEUxrQz5EnEETWUk6p6FWh1BSeQYLo15kdZ5JqtQDJc29cyE5q1ao4WNd",
  "key47": "3CSBnmEVsJ7oUCNsJ2dkCYC6UrkR77gTkd4rn3S8MqEKSE756CV8SMFdMCBsirwWorxfSdFZhBDTRqDXAZ7s3zFk"
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
