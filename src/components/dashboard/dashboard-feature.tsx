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
    "3EWiCCSFX9ADcyaTya61GnzbkJ1GZgXDfxy3HKcd9U4MiBN5bshzxtZM4uiYruUnJjVShrhHDCv1eHivUjGxSgGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oL4urs2ZYSetfnnHMyghVnhhtkXAjCVhN7zJTvE9eUE7gdJ1vZBEoRMfS8AXY2kA7et9y2aCpYGE6fXzmZVFeLU",
  "key1": "AjViMaPs7qRxWetM28X9JHEd7j5XpLh9M3J3yad5D1eXzsJaDjzgHoEBSVTvZCpoYZ9pBqC8rnHq3LEmu7WedTA",
  "key2": "2NRG4YFdJYpF7zBNN2evuPZoaZ99GRXKk35eLivaGisMpmKcyeVbv7ebyK9aBMj2WXnUqP7Zwkuhprpg6gmVXSVN",
  "key3": "2E5ynzZJTSC4ZPHDtZwhckBUhi3q8R9WsDScQxQHWui8MS96hTy8X2L8hcRBXViJcaY6pQmyXe1TGhqVMtp3rsdg",
  "key4": "2epkd4cMtZtgeb6jhBKYvyUSYMGKpMfd1NknjbjuVs24P49YfYA4ymzAvm6secxGiaFKcmwHhve78DpqLmYmLmzb",
  "key5": "4C2pCK25HuLtL8scFPat4Airy8kAGzC9EpfTEjah4tfoWhZpWfH1p7uevPwCP4awAmSnPd1FtweUSX8omgh8gj9B",
  "key6": "pNmhViDqjdA9WTW9XT4DNxquMu8AYeCHvBn5TTSpX5KM5zny6EJ6cqVJPNUfTVCKuGuw8PrpxyWw5YXoqbi83GQ",
  "key7": "3LkUXFCXKJaHHzqusjDnWiDU5Ngo3vwL7gyT8Hpch1ryh24f3bJ57iFUCprc5JRd6Vbt7xuJNAnJ28NfVafdfq5N",
  "key8": "2penVCK2fdB5TBPRw9fsqnmq9BdJrGfwWj8BX6qFdoxSJp9bBM9vEpxqodysMJ5tdP3npMBaQvib8yf9sNCzhRoL",
  "key9": "41ENkVmvW1Th8kJsbX4UKmiFtWhFz5ukyy3rxNaZ3qGMojPxYWNjazYUdJqYqu2K6hx6emSxGuDKDp6ngqp4zyGj",
  "key10": "4xQoaesWoCB6RY2XE5JqzkLArt6H8auu3Gb3Man3WZNkguKpsgG79dWZ3uGfszyWxCg3e4tjzB8ozdszYApLMrEL",
  "key11": "PVVkwxjFCNYGQK3fvU3b5tQzn4ozTveThPsaZfrnTuGRWJKjg6o8eHHPbVXw3JRxdDNaaAsZBcPVSyY8VA2ze7E",
  "key12": "5NSED8hdBWPnR3nwj33ZB2jPvX4mKgC8krG97nS5NEgG7r1J7gX4HvKsLyXVKoAgZvVeGHdmWB2bUY2LdJVHjCZe",
  "key13": "ZKJZo9vCAVsA5TpANpuhTmw4SjojH4jZd4zGPmvZnDyEZraXTEp3sW7ctfq9uwJQC3mPbniE15BYSBYzGsVgeSi",
  "key14": "4zbCNTZ3KLWmVLKGb9avtF2Eur2tszQ8S3UDefb82cvgqYMrti3PT249ucqrFeKdpTPQvUxnTpvnVDYPXF6rkSJD",
  "key15": "5gtuMn4Z7akmy6LTrFw1vUmrhNghwDC5sydAvdC5B8NVcsYNffhXYcTRpXjmc7vzdBad4MxGyahSdcvohGbco2z6",
  "key16": "5YUQf3ioH6WTsqWRbK4QNK4GrcG6f7cP3TFvifGjpvEyQfxRTX9sJvDnGJdo6KoCy6ntda7kdouTLjw7q1JQBX1C",
  "key17": "2NqXdxdyhdn3xR7HdRFVywY5RcySy7cFLLz9yLbTra5DPxbtaHWjt3MBtRfcWvJ3CfAzP7oaPiXBmTcccSzxSNuj",
  "key18": "Uh8e8rqJUAxeyzNuabtJUjcw9GrCegRXQgTd7oVf4pW8gFQCWxhVrD1Pub3LAdQGT2gYq1xtjMWKeqzJLA6nPU4",
  "key19": "2JowBcki18FC9SsESVaRLT5n6W1cSvPV6YTXmggPrEHXDCqhZrCijoebLjzRXr2RM6Rr22coDFECjnYNmzPxXEMg",
  "key20": "3YWoegpxHo9Vi8FTh1kRPPSW5p5j6TZXosFUWrmogM3Js2YfFaHSk8VZSX3UfRmmeofQnVr5sZ9s4odHmZtiPbvD",
  "key21": "5SJXC5XhC69kaBPDrjgExAkJzy31SY1Ar6WrNKyZ47qM19kim6o2jp5FdkRHtM2bu8UieQx1kktVVeXgREq26eag",
  "key22": "5CZkJZtuDTs9ACkCsfkgyRnvbEuhWbwyyNZXFoXSC3ScXumtNFHaVnjuDtqvxNsNhpaZ7K3zWAbrkSd6pEvPnLEo",
  "key23": "54heWxvqakVzzxSFdeAuMgcy5fMHXJjQnZZBM47YhihvmPhE8HJZRFq8rmVpu7JPNpKkNBfqz8umyzSNmYzUhp4y",
  "key24": "2cGZcvuJXwztn7pJQPh4Xu2D4druXYUfF6gWaJpGRVhVUQAGWWFbjcyNZ53DMnGQ8oJ4ZWkpx9X6oyRBqGNogCQy",
  "key25": "2i9FqpDuxigx1eaz8dASSXjjhjJqDaWisZ5D38pCpS4Ls7rQ6hK8VfL56jiiqEDUtHpHinSWYNW5p8xkfzc5tFkn",
  "key26": "yKXKXg9cUAfM12FFqL2eZMq78ZfpJW5Jr47EV3fYebR7ukvypFzUbSVNaSnhcx359zbHrw19uQXk5gCc7xd2yic",
  "key27": "47w2MpEt18gYiESDrB7MuNjcr8HpU8K4FG9SD39Lyn5PsfFd6NxJr37FjfQG9pPwgA8K4TE96f9ng1pW69RyJA9D",
  "key28": "5tTPQypYpZdvXWU5jhat5HADFmdCixbjmz4qGgQyHhaS1opy8Yx9ytk5bkZUWmL1eKWRgvF9tRhP3AdtLD2tPKTG",
  "key29": "2wk9dNvyNxS13q7mVnR3Nm8FuAbhyWJSMy6owwanSmDNeEwaTEqJmjgif2qa7p9VWQNfWBPpjiKmLhvg5Ht7WDPd"
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
