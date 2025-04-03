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
    "4od9mFV5Mi5WFFif6g1RTpYXypMZ2tvPsCfD4UtBthYdydXPFPNjMKt9mbQEVuyQKfcDsuZztWDZpF2VoWYvdwcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PTHJtDRPpi7inq4ejhKZYBvwrKimAGNKE8cfr6dj2sv9gj6dgbGMS2D9WUHZnXnjdWYyfjUTupAY6HEBGfjBvA2",
  "key1": "57jrj15S6ugyMSrADCEVwgysSSa2FUZYxo2SGGthydnzZrsdYhuYKQv1wwLgBJREfScXXfoDXT5ZJwV2uovoAzPp",
  "key2": "3JM7ZHRYE8wy4ykKPcYrcvbdSkgfjrEjyQ9yMFGkRmLq3fin6U4NWpnKouKUHuDeBabLirD3vCsTVtSbEzyQ7748",
  "key3": "4MAsML3w53NF1H9dK5iqNDiX58eTiFdooX78VtuxMizBLpaKTkiUBX8rubs6wN3EMskxkFJbzUByGazEbPQUpNNy",
  "key4": "49KdwVXsBF6oK6veeu5sV1ufvewYp5SqsA1ydwrThHJj9WQ9tebj2BaTpen3PVfG4ej7GkSdLjMH7s35EVWv9GcS",
  "key5": "4Z3QRMdYt7Ufr8FmkroL3vF1pa1fygDEmQ6GyUmfiQu5iSnnZrVkksWozmciETqUJiKQxkQgJbCt4HLxDEVsFsbn",
  "key6": "5fTd7BFyVZMUg9oQgAMA7hWWsKCvJi7RNxHTGweD9daGS3fBasxySdL7yHoWF8rSM2t1stJ7Fc7MkZAPgd3Rnroa",
  "key7": "5R9DmYwKGR6KGbjaGn2JFey67v3ZL16nQueQiNy1wP53Nkzcnxttw3bsteet2DGEcFVAfWqjqq4gEjFdJBBkBSL6",
  "key8": "Ut54uenwbGXkHusnqyssqzw2ftBVV65wHxG1PvXVaZmqMhsJUaBVynJw6MiWGR88x9rqozkdf1St1Z88E5kZwgJ",
  "key9": "4jz5jn1yPhtLpdE3yrLEDeYz81hwgYCuNSVMh89euhQ4pwo2bzLmMp8higqCRstpbQfYBomagAqwP1sCcQjavq9T",
  "key10": "5kFasPRxaLSjkzhKBLzjSrWoq8jJRknFNFQ2ZiACXGTzrpGhwYs7hWy4dKVHnx92WV1cagqGGS9XendybJwQsmVY",
  "key11": "5axzTvBDXsiQSmoNhj6nSnrMy1UvR7Gz3rMn6PsVcJhQi7ovGdVwJjT5e9hMo5vGaVKkgt7zL6EmTUiK5tunpVGx",
  "key12": "m84Yow6KTW3rPa14XoboTHC8GwmcVhkYHdamFosxTk3HojMHRPy1mFmqPxDqYZvZRf2rwcXKXsGT8Zq1vhU7f3c",
  "key13": "mxycioDjm9k2mZEeWegpv22bG66eJTeYtqRLCKTYVjogcQTP6UyoiXMLKNTuARjQtufTZ8HqfRE2x6zDVtnKE62",
  "key14": "24SaRLArhr48yrcDK9VhdBFEYeURSQUnV8ZkTxW6TgbBJa82yDys41oYAhvtGhY19U8HoW91rMbw1pqSehsteVh7",
  "key15": "2NAKmeFBqBWE52Wmi4GwM9QG2MfQcmkXsesXyeUuyZ7T4mq3puvHcYB6bRCshnF9AsrNs8FqmZwukjFrfkW1BznZ",
  "key16": "77deZqPJZpy68cPZxNJF8vEveC1BdAQGgk5rUYjLkQcAAYZpJCY9kcVTDiVjJ3DeMH5Eoa8y1WQWW4bXHWCbMZp",
  "key17": "234d3ijSStuyK2taRbruf76QZ3oecVTMUuxBPcwcYHwK8d6yta3DGYvfqrT24BJnuZAuFNhLcvrF9deUh8DXzScG",
  "key18": "4atdQMcYEANc2hpek2TtschohnywvzyszhZfJsdqYktEyaSFH7wgsFr3JnXcLdHLEXxrMVyqorAvhpKSGMh58WBs",
  "key19": "5E6btFspC4xMaPUWiC4XRS7VDkBs5oBM2PMa1uT8eFXuzGYSdA8AKcBhV6w4uVGSTMeKCcd3rsBD1EVhnEcd8Evc",
  "key20": "2ZXKpt3DJ7QLGmQYoAKUBaZQeDrN3wKN9EmWcaJQUJpygP7S47UkmH1J3LhccLk9hLEvwto1UwyMV83MBB7VUwHA",
  "key21": "jvngeP1pX9NbBz3PEbTufiHBuUHj9i494k2HvhW4Z9jQaBeidb4SenDkTe2YuL9fmX8gjcGcF8xdfXMNA5Y26Av",
  "key22": "4iCqcnmD8WRtwnLJ6FCDKxqwrb1hWZnQtvVk86mWGG9GMaUBny6BnEiirJbhUdUKpdKsR22rJhNNK7Fq1kWe7WYi",
  "key23": "MVsnzDLJnU9987i1W8ZjPxiRLnUtJDv2Zn94V3jLQ4wadUxYXMN3q2dBTi47dutsdztsgvcwzTRboTRxKE2owsh",
  "key24": "66725AaHAX9FiS16rhBGZAdqcomEDm7HJ2Lo2FYKb9JLNrTrEH7siKinaeEkZDzsCEvqv52N1Pxw4g67VXMKdQDy",
  "key25": "4JTeezYSn1LW51s2cHER8z2SzRDT6Ctt7mysVaD8wToNtLiQisd18tSJN8qFrUmsRFwCYdvfJQ5PqGySDjA1hUi7",
  "key26": "28vG2MnEqkPF8DkdufTw5n6Q3civNKvnqdYAmiZZ4i1FzHeyKbjNM8ecBpWc5Q1Fbn2WNvTXAkgBDiZ8bRywC6M3",
  "key27": "3eT2SiKWp5xifBgmVFiZjjDsvHHuerasa8q6HZnwn7ciX3sqEJrvMvjQpniezuYjPLkRWHJBDFZzPkNP5AnCy6tC",
  "key28": "2JczmGfqx73oprWUg4awH8q7PZh2w4hwgnUvh3UkCSgFPzLCZdBJscCjMnHhYrNMPAkCC8ewjqEGnLF88Y3vnNuX",
  "key29": "3GuEk1QTAPFzRhJQYBBpg23Sv6gaLYMKHw3Kj54mDi91p3EvuiSMp86kMMA7KbuiL31ZAaA7R5nKSaCYpNA2MkTi",
  "key30": "65hmMKQyRMYbtV5M1ZiRcozKXzJuuWdnZB3c1xjovRUiNC3wL98v6dbTVJVDRVuQMVjtjLpcHa2uxc2BRC84p4zo",
  "key31": "4FTTVRm2WjWuGumfXf5DmWCZN6J1ABofUGFGgAFA2ztqeafg3gw853dV4RnD17gUQi57DmZWFfanS1L9G2Hz2BcS",
  "key32": "4q6g3F78Yn38jkaca4CwoUPGocTesYwu2JyiXfQnuggnHQYhiQ1zF2n6RYvujwwXnqshGAbnGsrWhtrGGXyfm2mx",
  "key33": "5WzF1vGNJWqMTbeshhiSE14LZYYacySr6EYzVQ5rVG2LAcX2AvuqCqht4MUVUZ1CxiEaELab1MdLj3bKnR9SEpMN",
  "key34": "388TaAAJaPDf86DKCndF1qRC83K8g537Q4V2DXyFLQJZQqRqGbSAJgiR3E7DadGaYJLrpk12tU4itJKeyv7JmM1J",
  "key35": "22fwpHc8qAW3BW1PpPTKe217GN2cTiAwcMvmY8Z1775uyhbBRYWwSx3jVekLSL35LZePzkv8dLLaxKq6Uk5gGERA",
  "key36": "2qoLzvA1WZvD4xkTpzeVYTcEZnnMiAo1f2ugWXmu2H2H4L5CAS3Nsv4aj7DYQWyHMPDbowYV5tzJZ2zgZD2yTBo7",
  "key37": "4Fobnm2SdZeMwFHdMwW2Fs87WvyD1W2e9A4RWwicxh3qsoubeaYMfmnnMju3q6XYhEjBwhn4n8yzejzpFgUAKfgm",
  "key38": "25oPdvk9rmTRz9kpRRVoQm2kJF5Qbq2qiRKM6XaVFtEB7rytSNJKq6Ahj7wX4v7HETjtEQHKYhkkirZqbbAqf72J"
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
