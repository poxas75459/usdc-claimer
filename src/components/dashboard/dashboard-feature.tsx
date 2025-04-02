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
    "5Rvqr5SSu2J8JQTf1PpSiQSXtSM5wR1G2kH6KfJYnf4wsJPCdoUK7hFcYsF5FPNcSp6nsJwn591CRjaAbheZScui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ax4C7JLTQAZXyvAacSDRxDqoP9bRNCgfd3QGa35f8TDGLnoM4SLJvk5SiHu8KP2ygyTS96dUcWy3GxZwniLGzNi",
  "key1": "2v4azpiiJvRV5BhpvE4d8tef15bTJgcWSaUfUtpdzj64JdfS2Bpn5zisc7yUqCnmLQM34NgJrHNS5r2Sa78hYwbF",
  "key2": "Ztg8rPx2SvBACUTZi41kJEHoPdWT8Ufwk7MUh84cdo5Mps9Zn6oKi6utaP9UEerxji47rBRypZQz4WR1egANzsf",
  "key3": "5X8VwqeZC5uigTRCAWKgikPSKyzJb2iugfLZRTN1R3yp3CiC9BefBMXdU8q8f7qiEA9mifuH5UCkpXaYKBnBXuxK",
  "key4": "2HUgFsNWw7XWXrRGp6hJMeLmX5BZHhYucvWE87xyp8TYo54fSJ81QEYv6JDcdwmWfPsDqK5da9S2VUDJUpaDHHx9",
  "key5": "qcCGD9A8VtnhS4crHKab4FvhSanerrcXQ9TpDbJDD8NB1zcjMJ1AZdHadCfDkXJ4GdRX2PKRzGgVPf3LZpP9a8z",
  "key6": "2BFwBL8YMwPxxHDpYAfDhWydJspTU8pjMRqr3mrajRSAGMYUYS672AwsHt8ob2jaorQrmhah62xGEnNrtijYxxGb",
  "key7": "5Pq2k3UpQx82fAkN2pSuk1n7cbDYvrByZvTfk7rZ75KqFA8zS8h6mJDysbCH5mjX7hCZw1PvcYm9ia1tp7UoJhqM",
  "key8": "34Cg2SgpY48fhLdLuyaRK9nPec52HoxbQnPq1pNHSwTGAJQbiNMUT9LTPauFHriVVGksmjibzLCRxE5YYNFMEjPr",
  "key9": "2DRg8k17jDhLkwePyhnTVNynriyhx3mtPLKUYZkNZor59AFhvsgnf6FPm4bRASALDvktNFbmjKiKb3swxNnDGFEY",
  "key10": "5foco57LXjxphp1kK63J8JHFpA9zyjnBkpbsEnvKtxw7h4VCqJyMWMbWJo1bJ1G4m3wPB9DAj3aeMRMrzXUnAdsx",
  "key11": "5nDusRicN33uzqibFyt1Lfi1e6YtvbamxUDT41FEaNqfno7i2HY8goyjyyRhbPxjfauZSLuijbLKtswMcDFpWjs4",
  "key12": "3ftTPbcUagQVVGSVGAhcdWnZmrwss7iz3JepspRAja6t9mqjZfndre1MMmqy248FRE9tTeu2MhaV18dCFZWMF4SH",
  "key13": "36WJhn4CTphYwDx741YJDHNVgCk1gJsVZxB4Z1nugSND1UnT2u77MzYPnC1wbCiHctNXon7aPiykhAbJDFPmpSPC",
  "key14": "326rv9xccBYpGKrU2p8JhM13CQ6Bs6uBV5V44hNbddJcPMY3MJ94tz7h5PXaxAymSwFY8PwginZwxxt3uDuiVy7C",
  "key15": "57RscNbMEkoVsajsgfk6kWjFkLCcB63QY6GjyRdGjS2LmAMZ5uh8MTQeNNgaKLtNukuFuSjCdzw9ncxo1Cyo9M62",
  "key16": "4V8VzxJfuNuvuz7dJJEogHrMhfMmXPLMpQLFQEsAXXrDaVfWxSgJyJBnF9tD4Yi2MPg7iHpxPchsMdXdsjgCNMLZ",
  "key17": "pT1mJnNvnPpCp18sppJZgRbbnnDyLiCPxZ7cG8q35HWsuvemUMxMab9wBM3v8FJeQzF26B3GxcQAZ1s6HFswR2s",
  "key18": "3pZUZSTjyjCsLSrWscRfPSVsjh3Wg95a2DLUiuQTa3vUhEx3y4Eps9qP4KNeGmQvaYMuZ3F1kXsSZNVtrzqVPhah",
  "key19": "3Mrf1TBKVPfnQVRpMmiuqZxtBrd8zGhX23NqgW6u1V4ZiRYYcMdibPXmWBcfTR2x26heiBmPiFbjfXgtKsm83Lok",
  "key20": "2m4qcDK49Y1f241BnprwDoqeYiA1Uk4ucS6R8tDNEEUrrAYHwXMcegqGLc8n6E7Zzn7qmwKhMSxFQFZxuNktEEMD",
  "key21": "4qspkyjpSd4EPw5E6DsN24DybmpDBMyUBm9xpywEG3N7ZiYvdHTszDnd4pqZyECHTFQ1o9s4yqA3hTwaEC1Wr7dd",
  "key22": "2UFJk8CcRSj3ycuqavVjhGCRfKuATuJachYBBhnYh54bDbnh45w5cBKZY9z7X32C52igeLjHyYwCNbrt8GqWGC4o",
  "key23": "5b55SWUWhBWYTnaZR1kfyZvWXpuvJSdCF4X3zuWzpR2NWYrUcGzgULmLgbg5vuAbdKmv8rAnL6tWdpotwpdVeu2H",
  "key24": "2NgZ5gzBoW6ME8TKbBMbc2C8rpbtby3dryFoVzcbUMUFfi4cLqAGx9iKKT1sERMs7tsM32HYbCHx23faPRwKes5N",
  "key25": "5a62uYxqU1RDwoi6EmE6iYDsCDdj1y5UHWuiGhnxcE1HVfLEkwaYYr8KQq4tt7VwBdXYpWVLPqmV89T3NcSCNQwk",
  "key26": "4F6eSYUP2ZEKS3K9Ae3K3kxYrLEk1sHtkkUYakHyPxjcPziE4qApBHANrUxuTFUA1QNWeExHKk7TDPKXkcBaRhGY",
  "key27": "hXPokVTQbvtxEmH18XhgncRoPtCxRkMhkyhmqpn2r1uBvHcDNRxE6E1sD85DyUPNcUUb3dFxsL6d6LQ7CwCGxwQ",
  "key28": "2Zv3UbeWesp4s4vvjhG2zSoK73jjFpvJUVqeNmbZ2dHYEoBXmXuH6c5YEA2hMyDvRttGjavvrxfrAM2bZC3GVxNZ",
  "key29": "9L31g4HRKeKEBZmt3vQ7wmVWB954ZycXw3gpD1ZqNrG34jdmF7erbjxD8DDRRmqkCnXHYRDF5WytrFMUGRMMgfz",
  "key30": "2iA3nqYrmqNSpxr9KkWRhuQR8m4dMJcPLxcYskTzvCFi7U8bnbpcrgDjtzRg2XnPU8tuDHo1vhUb6Ct7LZnLX74X",
  "key31": "3McJtYmLKpj5KHPKDNcnTq9fdjgR4koUmamAGh5izD1jcR9TaStJvMG7uiJ6tG7qzsCZDZTfDTWRZrMFWyKZgvoT",
  "key32": "KYsULKbQGSmADKFfpuKVuDS4FesRLcgTb4bZmorwXqBDkd2qDrAkXpxXgw4w2wd2Y923sBvhnzFrX1ksYm9fkPt",
  "key33": "2z1mz6q3NgFbi15V6VkGBQk6UXHdxCMBzXMXdDeBvnBoHzexPpSLfKCvp3wD1D8kxsuNxxedTgsV1GddWEWyDHp6",
  "key34": "4kwqR9CVmztztaKPowiSG3mvpZnxzXv2y5NSG2WugXHFhdsQ5hGxSP8iLWp9gXX6mQt5oLCU9DSDCYtKKVbk9tUx",
  "key35": "HmQ22BNHjPn5su1D4fmnCnGH9rWUGnse3Y9fL48BvtWAoAEdWeuhTnjTVygKN3uvqghqsGzoT9JNYCihpKJnEMW",
  "key36": "5wBPFnnjXiaNE7yDMbuTN3Xd3Htcb3h3f1ZNsbjVYW1D5bAwyNoP6VFjre7quhBEfrqi6rY5Lbj8MuFehjA822Hs",
  "key37": "4fqkV3or9VpPNGThZbWA6RWn6t1udhBW6631DkbRiJMaFX7mnaZVBkR4CkjM3kWbdkTupefPMVGWJNprKr4KkFSa"
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
