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
    "3dXXPKEQtbWPbbG5VYWgdCdrWr7AukC22H6Wn8Vg3WBLDf8ebgtjBurneaua82YeH47AkwHAG75TpnMfibLzN6Lp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nqc5Nck38wFFFVNDBsK6EA7TfV5yBByWwy16om4EeyiYcK6kCTmF9PqkcvCcBHu3gQ7faTVxa2KQAzRW1CToWXg",
  "key1": "2Qfh1o1bCTw7Vo7T4CDo3KJuBmcVZ2txmqjDJYhA7csKJ8E1bmKcjs5zQXQ2MJfGsu8FZdschDrG3tC2zo7dSA7x",
  "key2": "5JPgaeQMCURJ6XzzhQJu23C6qaKuEnRhPRxNfzfs3orSZuuXGsNLQqKwKr27p8yLUcmtet7sgue1qejEk3fb5wwi",
  "key3": "3AcyXzTbCDvzi3GQYHWKo2PNY1Ab1QJbwqcao6zCqyUZ16mApCJGAhA3ipy4gFVvYWfwwgYoUzL2jGriXn1MLMaL",
  "key4": "4GBYFFR7pHqUg384PfXDwMEZ4sQV1Ra96fijvhhX55Q7UgvYbaznbictCdmv5La47tWrKKWvQ6r1T24t4LQM3U6J",
  "key5": "q4c2DQ5TPVhFwJZGKUz7iBXpQb6ur7FeiuZFCgxRvzoQC2bWrZJ5GBxjodnrZwKjaNdLmmTDYsZJMnAncit3PzA",
  "key6": "3vsgeVKBfdxs7pk2FEwRRWxa3fLjhwqmAWaqj1pwoHou92zmxaxDR28kxFaAxswziiexGRUFsueT1o5JjtL25hzt",
  "key7": "5WMWBMSR8XvhJ6AfZmdYqdVR7RVirbZ6FHDWmprCvR3nhUUJsbc9tV3fXqPZwfGZzmzoQ1tTwEpTCZwdhmkxm3eM",
  "key8": "2MFu48acAWT2ZrCbnR82p3QMtPuZkK1nN8cn4DTiGw18xVx76QfdXp3objz8RWV2b9kp5f9nefSUPLaQNvTJLuKr",
  "key9": "3kchWhbApqYrVfDeozkMWBHgVbrruH7Pb1Pcve4K6BXVqGk31UDUAkSXMxycxcAn7rP1xRBLYP1AUQsw9wLGpDtb",
  "key10": "3NkwErecvCFLL1Ac91k1TBbL6q7iGL1txZcbo4Cr6ZUzqFwgvRBEtyEB2ooN42ajXD2e1qpjdJGD4Fwf2ryb17kW",
  "key11": "4a13KKXpBWZXLYXqaEarUUjHyx8UDHjpA9cgWsnHdG9UqhTYyAiDfFiJxDsUoatXeKGo6NewsGUQJbE2sLwDprdM",
  "key12": "4CR8CKrimjJj215ba5k4TQ5ymGMKUqbFB3zDSDHWdS3ppnnHt8vy6V1ynCKPvdUD6Uyg1z2gt3SHr6uaEFEiVmiy",
  "key13": "4vzc6QnHixMNNNsoQEbRkXsRmmTSW8twqELbWKeUkQFVq64yLhBRFecpD6q1mcyENS4kxZZdx7LBbTKgiGKto7Zi",
  "key14": "393GPPcRXvqiecDuBbo7r18QBXq1V7FwBV9bn4DVtED593dNKHjPSNhJ2DAB4vBs5Kb4CDcXjhxe6twsvrZvyii9",
  "key15": "5NWGGFm24gHhWtjo1r6gnxqgo6MJjyjnxnoiRpC4h38WgGRnaspykrs2K3owgeHmuWH4mM6Gktr9Ph4utW4qDcio",
  "key16": "5YG1vyLBNR3taUMC2W9T81aMYi5LUEnzrYQgpHv3YCHD5c9o9zXFNkcPXVnSVLoKVGYDpgCGp1VzhHQndVDRshgy",
  "key17": "261DavkPTktPJXTPCDsCG2aHYb5GqRwrSLfhQg35rVZiRXr7MbbcJVMkeNYgyFPreFw13jC9R71fB3232remPXSz",
  "key18": "2kczsig4gHxWjSVrKZW7gmRRuN6PmQbaUcDdYcF85e5bMLfBfVVimitVUiqS1w3NprrMeNFigVPps8FEJKqAdDYw",
  "key19": "5w5WxRF5t5WAWA3nGtKg4bQqyoHEK2d7jtknQeU7esKFbb8xhzFe4w8XS2sv4CUzc61asF71fMaj9Wq26qmpZuM9",
  "key20": "wbDcwfhrSPADXuLd2Nas6gKSzBxgV2nYhb3oPuq1CCR5S8vT7ekaVUZGv8cBMjhFyV7px4Q8ih7XHnu8svn9QMw",
  "key21": "3KSFh1WF9k99EUADqvJXaQZnsTZZvb6VbKWQrDwLaJ9zRvx9NpGMB4Lu6x2sBy2q7bghjT9GkLQretxgZiijfMzH",
  "key22": "4574HAJkFPY8x2TsZkUaviBP7BMTyefBSrcQT2FUAJukwGZwXPoNpamC8S9Ej1hxKGgH5qGJS6a29k4J8WHqMovj",
  "key23": "67BXv7XnQ6ALfiHCx8rb27HRkUnpfTPxwbEp3swQEEoyPXViAhgnHTsyGYogYVkKmbQqhRYYnji7Ureet3AJ1xCk",
  "key24": "58BNME4TmBfd33bv266LXGEJ2G7PySu9SaHUg5gkSaJojkPEQYFbGG16hmP5WVJgdCcvW9y9Zw9vrZKEyrzmCQWN",
  "key25": "66PxBuv7J4PLWUV7nkw5JBahHpr2fQPDsagLWpBTMPpu5CtkpbuG8fY5ruZxpDm1eRkzRcfHfKh78SgjVoidNRuj",
  "key26": "37Md3ix7PYLGfMe7jrT3YogfWmMkfx3hFb6Qx1j28Kd77gSzZNJsAuNNTZKsVzcS9EpFjuFE3AnAhgzRAoHVsZpW",
  "key27": "2wwUNNpYo9cUdrhTk7ARFEP758RCwmxfZiJdKtUnYk6YTEXy4bwc636QSMdBxHfKwxBFNe6ehaoYWtiByoBd9iX",
  "key28": "395JBGvTukog2usUcQmbwtCYKauMYzY2XNCqvVEuYqioefeenkNVvecG8ZpxWWKyYk2BC6Dwc73UTfur4HFeQMR2",
  "key29": "5kSkBqHg8pbJmYMMjWFAS3EdC4gC7Lsx1HKSWqDmaS2sVHv7J1LtdFRzUo7saaSrK79oUreFowXv855ck5WFsRWx",
  "key30": "4CY3PdGcJuhBs4QPmjK6Dref4cjBBcqjP7rquykABCmrDoMHJPxGcRiuQaTRTbHdn3Mym6GE9BbMDKKW7fSD7Uq",
  "key31": "4DNRLHmm4kVCQNd5REuRJrDhV5FmdRvbhFS8jYCzyfhEM7uvcviZ4ZqpRJVWnHzcg4gySKpZbNAkK9BDWMzXxZ5o",
  "key32": "3gcrAyPTNhdHG1SYwt5ALEuu6UZnp5Mbt9LTdb3EaXKndRrg5ipDN5uauKQYt9jw8jsLq9W7vLSf2bb5rzhTNjMb",
  "key33": "5vUWB7wxY9NmgF5aC14PS3Lz3u4nfjVmiKJ8F52TmAXyPFjfKwiv5iQUoMA6uSD3MsGs6B3Q16pUyrCd1TmccS81",
  "key34": "3D9dAMfakobkV2Eru8yLSXtiFs5b3wc322p4RoczhfUEtK15craF1nG31s6VPqNKWSwDPCqZNy5eX2dpg2z3oHfD",
  "key35": "3zr2WdJzJWgcqRLoy59FhSV7gdL1HbfyFF3Qgx4YLx5CcJNzt6PtkSgTtkBAcJsVS1YNHDkoSnC3mDY2diU5A2Xp",
  "key36": "2UZcDwezkfoYFhAHwrCxKEBX7F8zDZuZTiqk5pCsNcVJCNZibs7YiFmpnWB9EjJyTCghwjeoQSEfMSJncoymRBBG",
  "key37": "3zMwaF1BM3dkVhR4ApoGnWg1KZ9rk2d3Fzp6tgB6KvCsxCkKXc4PR1MRWfLcmVHZ3X9NrK3qKY5dvz9yS3umh7s6",
  "key38": "5f2deL4g221f1ZpqjtndTojSTF5STgLRsJZtzjaUpdyC4D82D6qohdZ1G2aCQ7ZKoRKDomjC9tBDMy1CPXNMSsV2",
  "key39": "5wZapEFubLyJjC8GZyiC61Qz1a56KRmdvrCnA8AFqP1bv8febUUQHNXPBxC67YqUei5PrHVWUKM7WFMmK2jNG7dt",
  "key40": "4oqMwe2hbxk6FPrbqDTdfnesNq2G9tNLQNy6hbYFFzvVRan7z55Dzkv83o2W4fb1UckYAFTUmtoerb1o9BeUvMsj",
  "key41": "2mSCwXcFhhqmrvCXMZ38EXxkUYqYmeJn1KShBUQoDHmVTLssUn2m6XQ4J3j7UFeun1wKgqGijqMbpKdHuX42KDng",
  "key42": "3LXBmdF1kf9ZZsF6PwWgDJhKYT34TtuW4cJrtg3Zq26HWEmu6DMbG1Kq2YfXCEAXLV1vSJML5aFKRaDq2L3XgSdr",
  "key43": "5aDK34MsrwxN6P3fzQ7nLZv4w7Gq143DTQNnsZ9d8mW1jkQTVqtYcFnNpc4VAYucjHFgLzkJGgH2STAKHtcLvcUD",
  "key44": "2pGrSJE6AKnUackUMsCwWFDE8mqxo2LmGL1M6EuWBQQhv7YZ7SrN6oP7a6rYPRhh4hf64tyckRZkWA3TqjanmH6",
  "key45": "42Nwc8Ubtcg1VPL8aDkNwSvrowWFVc58eDgd866yZVmzzow1cVBGEjVp3pbA7wpbMmQzL74H3hhtcsL3s6LE4dtb",
  "key46": "5s6Uoa3zpX5kvfXgVAAc6PyjDdr38UGqMWR2LwzPWT7bj5q9f8ZUdN25vn8NMrWvkWC2XDze7BUuNiiuPUxM9sor",
  "key47": "GGx4UshzYcng6TUpmHeYfv9RtfsSRcT9Xrpn5GSFmdgVx3k7kTFMNr7eMw4RBHcC8jRKRU14961Hedkm2zdBmyG"
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
