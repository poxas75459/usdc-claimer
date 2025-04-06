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
    "33sgkb1gifaXfNicVWQ4sXRnip1mPcd4yZMNnt4qyiNSLg7e98UXvBfJfZkfACFZyaqRuNEVXvg2gcFszBpVoZfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mnW42vcwAEeVy2mmDX2QWS7N4c9eN8eMk8pH5GeXshAXcZQ9U2ruwxR3v46f41s3sPgmfoSMu1Gq1hT6XsenZrf",
  "key1": "2BXfy1WPqW1GSEMsHTvfyFRiqy31DoxaA8oektSeAgCt8d5pLxMqq3Un5zbWcNoTkLyw28zUtm3ccg9i5WhcpRG6",
  "key2": "67HbZpvVrUs9piFPPoUWCHZ3JqB1ZJA5hMUikg1SeD8HJHD4od13CUq7cYYEH2yGyEdW6iEvmbv4sSsiyUUrKatt",
  "key3": "5PBPS362WkTzbPiUGXoZkwJkDwZNrzb2ey1HZKxAKpBqskd28ynAwSuMK7btabwX2o62qzwtqL8xRwEjG6YaPbuQ",
  "key4": "4R3gikwZiKEDc82VTVRejpbozXuFTPhfPoVqGwa6sRubD8r2j27xttpnFX9fwrg48nhnV9ZP3X18xELJ5KLcjJ4q",
  "key5": "5eda3TdzQ8Rua38PopgQSd7DW28Cjktg5ZsoLnXtz4aKjjGurzQJZT2JrYxgKP6c4P6hpvVhMtRkx3zBkacDBZ4T",
  "key6": "k6nM43nW2UjKGa29pyZVy6eo65pCjNf8bwZi7t2hPQVD48g6JfZri1wtCWkB9KaizMcNgJw3FiE9GQcjgN3L6XT",
  "key7": "3CHq7Ks4V9jFDf7vUni9JfpsU2rwnb8jGjxvxfKU9sLdW7yWE4czk2DsbrxiT8QWqZxX9ayARESoE4pppo2M7qzQ",
  "key8": "DdCb7vuQSWs6eNFkELkDC47M9QQnA2SHYiY9aPkBoaLX51fx1ZRqCwwgoWoajJf1poV21Ehs4KjGDqNzKqoDaFc",
  "key9": "23MBKjFpwYNir9B7gGmuimNJbkiSxxE6wuuuNjfVtuak4S2wgxPPW6eUW81TB3vSCWddssRyuMDCHXWqbb2HPsAG",
  "key10": "4AHRRk7AWeEXBgjmZz5n3fFh1Hto8r27bypYgzWt1dgGuLywUCbfyH2WqahSwzR6vEWW1mbxDv6PJr7EFa4xFSAP",
  "key11": "55kbgjCRDk5Cq9S2GY6xCxp6yLyRDjpCcNyghcfGkUvGRrUdpPN6pcYSfk7Bf5wANfpLdLWtToG73RGNdy5bcaTf",
  "key12": "46qfvhFSfyxFEErpjoHA8eLdbzmgjGmwdwUm3QxtZpUVxsxvhNtzudcvuT6Utp7VABY6Y1aXnPafyP7B3iJkhEBa",
  "key13": "5zMgZisngep1KLP5k22eJzR1cwAfgCbq8TBopzquyNbaSjyPWGjxryjrF3Ss7P8AFsf2F7UVzfRB7fa4Ysmu8ZSs",
  "key14": "QvHtFvaRqrNGDbpnWVq4PtqdNPsaEWhS5vhVzjRfMn2p4nbKuEKYmFRmXuQWEZrhjpkWbYjwL8C39N3F6xESsed",
  "key15": "4ZqRLHDN9YuA1MPz9VZ8CGuiriAP4eGM249NJ7JPFF4iY5Crso5KMFVovPC14dcQSfqPQMnXri9aC57Et8GaBdDV",
  "key16": "5do7JTuCkSdvTyWwfVnM7LXHdTv74Mu9kPjgj448nw1fyMAzuVqTrx15msP5aMpD2XLhAWZNXgBGv4YhaMRHFPro",
  "key17": "2QGcaNBiHy3RvvtuCuuVEqLExAw6DFn7UE2fynuvZXviLg2WvMDREqk5iRi13iiKNj912GMRDzKKzb2M6TayJvNq",
  "key18": "zXGfdgmLZvJGFZC5EEe7RAUSsgNoZ15mPQtGk1JbMi8V6pMChWxxRFH2TPEtFMLZJiGRsxsJDH2xhHtRczZE8da",
  "key19": "26z6VPWjGUtGE43hrjmRNJCEnFj3H8Krtc7wWeZx4AytexFsXmMgnVXczGiMyaS6y9BtppogdEXMLrzEeixcGXxY",
  "key20": "JbhMk1fj5N7uR5WEJgAKSaZCuEAidhuT6mBivufEBKTUHDcna1xEhk1TThPFCHogZ5QVtpB7QHjRPqtxDPxyG7r",
  "key21": "48uCtG547kfRYDCYe89cJKLTWbchzRMbHfpdvHfhDnR7YWvUoRFNLddXPDPuwxAWcfuc2Gxy5oSwRC4vEfsAbEoq",
  "key22": "Du7rDobLc8tfwYsjgd3f5CeBLVfcmSVXiGTkoz5Xz38hHdcRSd6HCjePCdbWXssbhnX8P6G8934vxRAhUEgAVjp",
  "key23": "61LCLpcSpvTTfSuVMykMSzDb5toMLbr5z8kUqeKendtFN7ZQEHBebhGA1gsk6t6rmhFgDzZymYEi5kDfAu4r9nV1",
  "key24": "4imPyJ7GrUsBitQHh5F7GGUK3veGLheFcPj3LRGgxWRHLvoEkKPAi4rZq9it9fHa9FYARQ8J9oBNvhWKB3GNoJyX",
  "key25": "26zrxPiNoPTWXB8aSt1Gprrryvfc6ywtqEdqQE7CngBSv7UM4pwbjJT7waWJfFKGDMBbyABZfkAEmHmsDj7rZxFH",
  "key26": "3T8UZnoP6gPXJH4QfwTdUd8PzsXdKgRRFA3VBs97tcfzzYXwEtDhjRnr2h7tqY333xezpDDMnsjoEwu1oZ3iCKwM",
  "key27": "3ZH3hDczfuZiUvRoZbGtDH69WPJNDJrAUG4qi3NZSjqRvYf8CVACLCyNiQicbGb2tU8CaZLpJQuEPhfBurYYdXCe",
  "key28": "3rfciuvC9Qmfze2U6i9Qt82r7tkznTD5723rmvGNtboJzZubWDEcdDiqy9rgwoNED9bDJNa8ivZQLNccEp1iw44L",
  "key29": "3HBVvPaCGzgpuN5YbcPB8CMHoxjeu65RcXzSMes7M2xEVqkegSuuXJKSUPBzSzV74XRbWPCtWPP6t4sXfnxQRigS",
  "key30": "X4EtniMxDTTP9SFgx2pVHwChCzmt7shmhmY9D7X2fhTDtJPHhf5fWhinwjKYZLv2fAGYVEnLTwiytuwwaDF5s5u",
  "key31": "5RyxwDKSy3j6MPugGT9zFTALBe6AwmHJkjYYyiNZK1gVSVWkkCTrh6WUXxMKVR9QgTKvdNEikJiMNrRsa4HUohqp",
  "key32": "67FJ3Y9R2FkGay5Ua6dZEThr5sMZxeANSYcNWRVrVWkmpbSdos5y79BT5iVN9SXWFkA56WcgoRhFaLkyJGeWH1Pp",
  "key33": "53cHpHLX2wQosK3Y6wfXDJfzLRwDafsNEevgeaXvwdG5UgEdfP1EbkDoYGHaApc26QS3MwguwVkBPMzhuCPQLU3s",
  "key34": "2ZqSEcbfDCt4eBjtNkzUSEhzoJf6iLiqpQGNqDN6xf2pKT1xunY4ajRxYazcmh2FDP8YbGh8Uqp14KTM9ZnDoLXg",
  "key35": "4McgT6VD4YgM9T21GMTdH7NWn6hZAoRMsqNwz2oZpCdJJJDKChZ6UUeDedPhYNhraBbZSzrt5iuZ35dT1c8kZrjY"
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
