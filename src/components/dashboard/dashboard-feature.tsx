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
    "2sYP1cGKDZA3383MYMBBERfDfNTQNXKsE7PjWZEwb3QnzCARDTiCArgg1Dv6TbYippfdbPR471A9kr9cKo814yTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zRFhNtXgLPWBvDToQndRXCeo4rVWCRb6acuojSsEwMqka9AUpGhNbHaZ5VCLVUosHPw2Cy5niGvoRKCsxYBamSv",
  "key1": "5m2XyoEq74LWe3kUPrNAq23BPiARJ94mCjSc1VtLvDmk8MJ5bd96oXCPegbWr8xfwzReqzpj6wGaR6VvXSxiK3Fu",
  "key2": "4cynwCQG8z5fzJS1FdsNKJEg41wDvmVCXx6t95dDGfs6aKsEEqo82p8g5sEHhhsm6VRn31mjhggTwF9YhsgUuWtg",
  "key3": "2ojHDt2j7CBcQEsqSK9begTAekphH2hQLNEfcgnQmECmyxGgrXX7ukTjSk3QnJn8CvsAff76wqLKpyr4Jm9S761w",
  "key4": "nq6EYrxxk8snr1xcLvCwuZZJxPtaPxpT6ZL3tAvhuwsphecYtQ1HoMVDFVJns3TeZP81YgzbNDV1jq3SHxEvpxM",
  "key5": "5B6CgXs6SoeAsTPcArBaMJTvqAM1X9xgJTiUCgdW38GMeNT33wSNmLCeQoRtGrmSa7BuqxY7ssjs4qfcTxqNPX4W",
  "key6": "61T7S9krhMVucKYm6RePQh5kMmgFWmAB7nvMWGW6pSUW3CtVrkQzRmAKsRZVVs1ArmmVU931rwXbdtHpvQEthVtM",
  "key7": "NzGqGWgNv2tEFCrMrB2NyupXJGWxmCnfPkq8ZUpSiPEeBxdVfnsZ8VxMM4R9iL5ca7VvUoH8pfXBdwPUvabf9fX",
  "key8": "HQJi4gzcHkkamXq7uzJ1BYeCJUasRN6UCDjESKF8zw7TyPWidmp1RxsTf5WfUNeTbJezX4ZmKs2Pq2nXMF39kim",
  "key9": "4K4dvnRrxn6TTAe6BAJQWRfcUWYDwfKGLV1e4a1y48rNMM2TH5u2TxPY8VJ1qPQYZekhAno7tisFhiaQWqtaUNWG",
  "key10": "34fyRhLb1xFK39wgD38LijYGn9H9YcE4k4Z476MmPEKgw5XD93RWLjKKrtoLEHh832udPwGMW8CpRCoXYtd57ehx",
  "key11": "vdXTBbLeFRDMmYBQVfYhx2LHofAnZJFaii5WFEq2Lwn6E7uN3xXnQ86E5Qzm2jTKRJjMVtevJ6cokfZiwxsMwNQ",
  "key12": "Fp7axL27jnzYUeYvnfjuC1NtaBg6bbDh1EVPktYkRCfxhvZSYnx4SJFZvtCh2FrkPKEjo5a5Sh7cKaxVfh6Yi9Y",
  "key13": "4zH4gUcP8sGR92mv7J4jBkVPiH8VZamvBrb76a1SVeh4sfB8s8QZX3UJrjWencVE3XXg334KfSMSK37AYweykHny",
  "key14": "2dtSd52nnP55gfRRRq3MXUX91L1K6vEiMTpSaA3WKegRKgefuHXrGUiTJ1VzkkGUC3nGCRvn75tuNbWSdB1QrwBX",
  "key15": "52oHN9hd2m2FDFgEjxmjgbUquT8zF1bcy47richYxJjwUGf4gEAk7oGmLstzehHBxF4QbjnpqmD7sy9fKc9pY7Ye",
  "key16": "3pKtPgJyhRyDMUoMMt4By7FWcMwEiQBRWND2to54bjrCGo6mFrbRZAwpziRmy6fi9irVbdMRsy5FRF5g3UAyKZGj",
  "key17": "5ofYA9NZR7DZazcgqwvWsqb4eNGx8rREZ7hdxyUFGsMtbMox3tytLPTvf2kZA75J5GAjF4XgrpwTChxzFwYrdyXh",
  "key18": "bgKAp3bvKZM6XQsBTjWWF445zX3Sxt7o72mcDJLtihEruoTq6sV1FvNBswdoPhBJcnTLe3iYLY3JwSypqGXAXWb",
  "key19": "xzhkNp34ok6mqy7ERjm1gkTnyzWcWEBDq3nfyTkbqeQmnL7PDVFADfYyJMt7VB3Nekwmd3c2WvZQWGCTDaSB4vk",
  "key20": "62L5396XFJ6PvDyzxZ5meManYYLzQL2amsuB1wDLbV3Zy7W1tvBb7hCtR6xBxGg9kffAtHy7y9wweGpWeLzqCXKe",
  "key21": "24wKXrSMTNthGajNPxWFQ7RLrLdhw1Q9d9unPgEP1ZXwUH3fMYSCB8Dat3zZuvy2dMnrciBD9eGegVzsHqHkMqWP",
  "key22": "AzGxVLDRbm8uzXP9KmS327X5L6bbbJqJKpJnA1coKs4SWSD3GY6j8nuTZKqgoW3g8joLBupzgBPDbbKJqGn2JXr",
  "key23": "SGjBK4gueifL9Bc9T2m8HhWFN3nP1wqAVFNWMEUjKTMHAbUToFxcoiGwdGCoYSkWqEk8SPuDsy6ZEL7PPqBcUyJ",
  "key24": "4Y6PBZ2rqni5FvWwGAJS717cjuDp7w7peo8DmG44gSaWqXDEHqmNqvtbPxvnktJXKLE93qtg2mh3orYyYrPht7Zr",
  "key25": "3kZjxbv4ZkSzEuE8uCZczKZfdiHYpDJKjwG3oiDScuEkD2prDQ2Kh5uUEQ6jH11E3YKWiJ7MC9o2Dm55Vw1Dzcso",
  "key26": "3DcKxRafMVYthz6nAcw9sMFkjonLN4XAYnrEymoi4wycEQrbfMcTAGZ7ERkquia3j7Fx95jLVLnpaJothxZkPYLc",
  "key27": "4iQmgXMpeWKE8YF2Sk3uvLqDYqYngfTDY8wEpbTCfxnn9uQhuTf8vQLU3pKN9qr1TrkAsD6fXMDH4C3UBgEobbmS",
  "key28": "4TCeHPrdakKFBKJhy8kyxD7dfkzQjLtQLV7vGFnMnqTHk86fDWsZYsvr1zSctq9kRMjZXxvDUwxDKCWLXiWPstXy",
  "key29": "SbQABZhSUfaeTw5aqQ5hKuW69QqgwcnvuDxvqsSAK87KtKQvPKat1VBYEePyCrfaqRJN5YmejKEiyRxJBWmSjk8",
  "key30": "5LztnGxnjqmqY2HVJ2FWKjeLDR1ZMQhZFCekmkP6f1qVmDN1niMRrXrdv5c797vMeUtizyPVuyj9913ZeKY3CTXz",
  "key31": "qGxwDoGqRJArbwrvXqGpxtca7Ndf1ruUmsaydSCUZceJHmRN8BjYQGWkFTnSZRVHLmbo8Cmwc2nKPpxf2WwvxXE",
  "key32": "31fZRU5c7uuj7wKySGGGvPGMj3nzkhVt6NduSCNXo393vxhSETwL3aoGUjDRo3rSz5MjnyyCE2CRQTLf5TESpTMF",
  "key33": "2WKYwRpgTN4BYrUdg2k4gooAZwVG9UHZVnobWJm6Pp49xtt7T4vBJfrdMmLZJwNTas5ztWpuuFk8zYRtq1S3MwKd",
  "key34": "4oycSQCuPAULMzhYUzo6FM98HZAyuyrWRtXMGhkozJEDH67Xxhk4royfrUHT6hDxhMf8pYFHszB8aR3NcH2aEgxb",
  "key35": "oKVWPbvprnK85traQ9BvaGd6E3nMLRw1k1WXVHAmUA9drwW1ioBVuZH4CCaRMG632TdZZ7mHK8eS9ijopdtr5DH",
  "key36": "2pj5quQsaNSbf2PnwsaGARN4jRtCNfUAYvw66Bu2DVx6MhvS2ui4vDp36VhC1oF1q3eHUgFw8e8Vc1YNL5dScaRX",
  "key37": "2piMMdLJLdTa5TxYD9XEaF5HpRA5c4jYPyphmNerszA4dUFdq8Ncfd1CYZuT5Q7mikkSxmE2vi2WebhWQRLThYDx",
  "key38": "SMDke3djAZfmKLVvBbS3EfrpQCD84sEpV95NR48gFVekiHXG7tVnwGzKkR1cMXYb1Nzy56tCgY9Lddp6Wki1LYu",
  "key39": "2xKVxwFdwVvSnWzFMAUveC4ATaMoxbweNErcoJt8VFu5kwHkqdpyzXhdbWaq26DRoqSxYmBtEc7DMfmDec8heNkE",
  "key40": "4zfjyLXrjzKCsfmdAp17TBi3LhcEMCXUY3NkSXACCvNfsdnFUT6TsYktiJ8b8q7SKNsQSDbX4DJWziRZrcTkv5HC",
  "key41": "5fSS97s7MUYpMFwYwctwA4aanDhCcAcrz6EV7uyNnXn1uDphcUavSe18JGAKKyoKXhkrWFTLK6gk4CpwxfYYxEbA",
  "key42": "WWEWjPyQgyRaaDjt4gw2oVHS7erCzs82kMdaQhZ47xFcgxVe4QR6xzt4BuiSbtHtdXTKcLYhE6jby3FsCtmfWuz",
  "key43": "5vTVaf7EzNYBNa8nFnqxomwYrAMmKitH38LdBmJvbh3WSXp5EtPv2BWLJyTCo1W26PFYyjjKwdd3nwqMn1SMRCFw",
  "key44": "2GeZABDRKYHGxj4CG6WwdGZqjVcy2Db7t7HWQ5cNvEFbUL9RsMzc5NfAj5YReRpjb2JNinD7nTfbT6PL4aqWwgv4",
  "key45": "3KSZ1p5ffiPndh5MJ7ahvUC7TuBFwvgWLWPtf4XV5Kg4VLa3ekytHVhpRiM2wtUVKPGomyPhhTNtDpjnnWWwMmHM",
  "key46": "5SoyFVZE3YzhN1niKkGzQpUqGs4wfosf3HstSpj2wpnWouB6T4eScheB6vdJc46uYJpwUgDNDdzzLwBd8oS1tu8W",
  "key47": "2cjPnUiFKHtYoJhxJizEnrtMAtGKJZhPyebLZKWt5NQ54HPPfvfumGgERrqkviS1W5dLeskwenX9pandbbB4pMiE"
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
