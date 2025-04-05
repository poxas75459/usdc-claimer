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
    "uzGH7p8XYYYzqNct382jZ9k9AMDEdCwYSeF8zk9vh6RWoyXKETFQijUXrmdQqDv3f8zNR8ECsHmT1rQSWzGKEhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WYzoLAF4AVB82MQtg1PttjXnng3vQWxK7cCgyEa3m4RFT5mPihJBNjwgDpyKLSKwPxzXn1nNVLPRyiEJb2ngEo4",
  "key1": "cPCrL9gxYrrzDjBJXTCjoa1QKc4hWemm3GQKnRv55EQEnbnPWNCWU8FXEpnQMmLBZS32npVw8Udttj6ghMqMZ89",
  "key2": "5iCYHXXimwS6J9FS8ZpRgiE4Yt45s2R9LkHwL2uf8jiBvhM7GrtYnvmNyZmzELA8XvehLnfAFtAAAQ5CnV6wYbgj",
  "key3": "4yzt51dG3KSvz88kYnbFDocxajtKPDGY7YzXmJ5mfS5JPTentLJ9RmqTXXWMExpeR7Qik3Cjqdyg3b8NKofUT3T5",
  "key4": "ZexC72jyxnB8AN6FiSnHrpfd3K5XkZZH7TBC4ZcgWBw1ANS6fTLhzHXi2vLiauCPB7owZT77K1Qjk359ub6ZgoW",
  "key5": "pzxchmcxNZwxMJT2xePWj8F4yruxd7wsdNUmKfD8iMheVRU3inTnfSpPYCGdgwoBVhvSeuaX3sBaMY3ncSLS9Bw",
  "key6": "wPk25How4NNCUgfBvdT4fvujgTL7bLfmadpLGXrPcZk7HbNFAG61D4fFC2cHGdav83KxsVE3WYMmSmYp8hTEDFF",
  "key7": "hopEWpUNWGsiUXca9TJLWzupWmgquxykL7Ht5Qot3BsZDTaJSjDaswL7NtWzkVGpMTwjuuWCGCRbBSPpsXMcA9h",
  "key8": "3F1kCiWLW8ttAvvGz6RMzMA5LaaB1y1cywS7HZYEHCnQHM6dF1DZRXMBFeiLuPjKjNsQ5J1cvTTtZyCrBadbTN8o",
  "key9": "4PtRjCBgrqGnQmzXqRWgak9mmGxB7azFZed6wSuZMs7fJhaLEpaSR7DmaFpXWHitVwoe3WHnb19cCff1PooUkjNA",
  "key10": "3ngwd3khm4qXPHiWP6gwED2BEpHaPgADaAnAxyZZWDSeZLDYi4GH7vyiThiq41cugJDuGS8eajHD3GUz9iNdVctE",
  "key11": "c9gcDAAwTu5ibjxBg6kQ5JF4aikYauneNP21fu6kULY6mZtsecziyFuAtiozHpPWrkd2FwizNuuYKt229G9HQtb",
  "key12": "3ocfAqdnHwpNHFdKnTb7jqCggEQ4LMXq3SDPBrBwVa3KYfek7dJTiNjeaoT3qPxMCq8CVLJSMzbYPDLkDzk9De5N",
  "key13": "5jgXStxXX9AF274TPJewwyLibXx9r98W89dxo6aDR363t4Zn7Jg142AmjwEnMUmCi4DRTxTASsP9oWz1Mx845eNc",
  "key14": "2nkVyG1L8vRbKZATFv3Qx3PAuguUNPAn4SZXTn1fnYZW8HmyhH7sM79e3reFzy7uC4Ws2bCRAPMUTgbYpnTDeqE2",
  "key15": "ZXZRpn2HN7LCGKXyjXT2Du65pzxqNyTcmrFUTxTh8fKtQdmbfE2a9hBTxb62b675eKFAjJD4vmitPVoTLtknHGN",
  "key16": "CdvskXLiX7rKFG1ZqWBLdLpeeP4Lnu3d1U8z3X4ogM52ZHGgVhARNyPmnJiG8qPESFu28nrhZ5YzWL8jGjHaEBD",
  "key17": "3nDRwW7iq5udNNVYYgyX1u9EQSy2scxdKKB9BZayxiWyveuiVKbg7tLkpyvzhxCgETHzBkSjatXjCaScZnrGGpHt",
  "key18": "qDhLt1CWNoJ61BVUB8m3edhH1Ss8owk8o2BdhTyRuCQDTtsF5rncMhZ2WoCMDT5f1UEJFYQofZCeJMmNXnS64a7",
  "key19": "4pJ5mNLZN1LEijhvZ6BpGL3VUkWW2H9ooBfCobEBfBh2ceWzqioxsNcDY2PKq5LNwH5CXQuTxqDG2xyHjSLVZvKP",
  "key20": "2ZpV4uEUU2B2UXwNSiBdJx18xfbzSJ74TvuKyhQ2txeodaQTASbe3h7JvmqPqA4yRdVEzuSNdkjNj1j3Vmv4uiVg",
  "key21": "57scYY1F24xR76rowYkvJobMZFoczpmmq2TxL4KUuQmu3yg3UmmVUSM12Vq89tTaXNYTRLg9yFHBWS1DE3NEJbpg",
  "key22": "d5hxv9qHjHrRW7QiupBN1711jbuRbGVtNxgGPkcrXAXyueYXmWmqqCD3Jb7PnPqvWrP3DQkHZuZADmyNwBMpdbZ",
  "key23": "AiPD8CdUb6cyC6sw3xXRaz3ppECP9Z7oCWtsyejWmLMG1M1KDAqmXG3wmAP2mjQom4eaS54v1ArvyuJMGU4EbQJ",
  "key24": "4AZMQF9dftm9jJEHFC48ikg28UjDmFFYyoYNgRkB5K8hGHBmdTbtYMbUA7GVvjyqfRV7hEacoiT7bTnZAFAchsTz",
  "key25": "WMd3a6Ad2k6g1TDWT6DHaRWzzDGPaNz2K6UpGyUcD7vnDb3B75ncdqVRqd6ZSb7knn3vpinyb3ejHmmpGhuuLFN",
  "key26": "481FjjmrbmATsjYqpY3ATw9j5W5GRv1ucyzqK1bN7n6tPaFj64e468hBKuDr8opbkVtHMj583YPNS8hmTrkeQeGN",
  "key27": "5SjScqiXsT1d6NWzjm2gyo9di4kEUP9GUhsHXveqFghQx1PXR9TGzaBP4Sa92ED59XWzvjVT4rrKvxbVXCHJTBMq",
  "key28": "5tL7mBrcm4bR2YQhf6js7ngymH9AXwUdzEhLvtMaSKonMdnSFVtS7bi7vds5JoBkofcpRgYiyVQjJFTJaEpYxAZM",
  "key29": "qAkWQFwES31zqFsrmcW28TJf1tdBq4kDJJNyCnjRhCUXv9wSpbHbfJZ1Pe3zCU9fLpgDXFTZBefxfecdhMLD9S8",
  "key30": "38mZFSY1fY9MBJo3VFMENbdkG46Fvdb7xBnuxUcmwtPh4S6s8ufQoQkhmuNsEefq8m9i2PWejhyaCBcSBTM1tUM7",
  "key31": "rC9yBv7MAjE324xfgvPuHgpbHTmpSHXCNCt6Eb7xbR9XKC6er4ABCfLd1CXbsWKaLL1vik1VK2vJDfL6T7USpd2",
  "key32": "5RaaD3azCrCazcbEkS41dyJGn8qckHehrdrTvn4i3zbwpnt3tuhf2DXkwYbpVAH9By6gdUBs1EEyTM7gKsgUv7F3",
  "key33": "MehXr2rYNEp9uunxxWmyvoG4shn56VZ8rSqAPmC6VUDJYc2UA9yq8aPt2bnsLBUvng1kk5jBMBotJsvwbzHYTPz",
  "key34": "4Pu1QHfBtqqxoov1uxW7sWB82YdFQ1oocWzVRGCFsgDgPpMzG2AHH6uyfy4SkmsuLrXDwRrBLVrsACVtxh6Pqkwe",
  "key35": "2m5QdcgjLdLWURpUrp5QNKhJRATZB1jmwo99VaHQm2xtXmAUQj25fCCztfZ8gDVXunGTEnqPk3FFkNNqurh3pXLY"
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
