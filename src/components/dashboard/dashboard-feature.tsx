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
    "3LNdC4sUGcKFwwXBYmK8KQw7wARcAFwoLfj6mBbVArPfNr8EJRAqMy7C5JB9bGNLkrrAywC9hMmfNCUvogqWEENQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zcke2LSuXNvrL6yFyefEyqdDY3cWgu5nRh86z8rytxbZ6W3KpDA9hMTK1gDeDcf8hVtV5m9VL39aUcC9L8R4pw3",
  "key1": "3iQgHeUa3iFbegNBGrcF6K3gCoYtxC4vV2E9QbGVvpdWJjevx5okvmuVrkA7PQJqRtkXCEWkK1c4BKPjrkwyzcNX",
  "key2": "Y89pBYT4oVVpG531cJJ8KWvYsfDo2x4u6xFTWhVHn1hHYeKWL42A6jFyGzP5gRZdq1khSEbrxptms7vy2NC4ZJu",
  "key3": "2FhpSpCC84TyucKeJe41UzftewcLTdqGwgi2EdByde76qjumSZko1BKomNciEJ89kHyMAYNMBdG5sitXEXg7G54K",
  "key4": "CGabiviHbTwpJrypxSJadEDRMg2oWhZENRLxVMAYfcfXUYmAgAPpwT1T9pE3GB2JkeeAh3t1vfcgvzHPy6gpRD8",
  "key5": "3cv3cyUfA4oto1XFvXQJmrY6Fv9rN13rF5TWyBMsXdJDHeND7zCGKd21XacqJLK6V6n7cSRtT5qcZMHK8DUmaBVy",
  "key6": "4fckG3CbTVYASH7V1PsSPP9EzqH7JpxjfzUf4vJ9q1GMkU2PHcYnhgcP3RGPVLVgLEmwja975VCXd3CqrkA1ccrR",
  "key7": "5LT1WLJPPMenUqfAUrLYKcvmW7722dvLjj3VZ2uCRiw5iBcBYkGRkYaqGp2hbBikKRto1nC4WCE9H1GXgMX27ZVX",
  "key8": "JUgHRNfDQwbjUGm7VPHWAw9uwvTKDxQBhLhaGNFpVvdZZjza3JB9V3JKzf6pU9GWyMZyvA8yPRvBo88tVFiucDi",
  "key9": "3e7gPkbtNNfmf3LQWrhESMxnBBqwANwX9xUubpBcbENatuvC6fWfKaTXwaK3ExEAbVJKe9FRDEHfvsUF2BwYnyta",
  "key10": "3a4mS71ZKAH3nN6riGK8a8bqBxTq2HqajhyvdccyxocMH6in8NLjAbuEVSvcQckjBF3jG9tU9XKLTDyjVdtj44M7",
  "key11": "5fgXLXCS75FyfmQg5RNKgGfnkVLwqsC5j8NeJxFTAU5zCJDFyJkPUaQcLPQAvcub27JWTJiewA6hefXGwUP5tgGf",
  "key12": "4KE4gytDtcGSvYi2AYT2oeDzG3NKQdaorxaQ1iL3SQWwhhJYw55haEC3iFyJ3ZeruGVywUSsLqrSBQ4hZswrVYhQ",
  "key13": "4DGP5YQBnfgUrXVbtXBSeN1b5SsLeByCbZ8yuZT1GHDs82FiSEZD48YmTJknRVB24iv7zr5w9hojRH6A3UtdMXr9",
  "key14": "3g8dmGK4RPDfcmxhGEvB6D2oizmbPPX2YXLajgeiEzSy9cjmdJNSJARKUgKm2WbaZqbGvAdFNgQ6VBZNFug8fAsA",
  "key15": "5XkCAYbj2eEKvRxNcRMugMxZXnoib94oieGdiewfbi1XqekiR9ftY2bTi1C8PecJgn8JPhmGEBQrGj2hVNiDMUm2",
  "key16": "8cmYQgvL2Epx6tbPBRAergQG7eMeYJkz51ZBdgLtCfff8wFWDfdb8cvaHeS8bccGL93mAHpYZYK6zgtc7YT8w23",
  "key17": "4n7os4xuHwcUpiEdNMfhsvXaD6zfU6ibDTGyG1saMws4tdgd82hk7dsSn3BH5uY7gUT5ysVxhATbYaGosUCMbjER",
  "key18": "2CLdKfk3j69d3TqGnZnCFYtY6ieG4mUgViVxRK1WWMUWZhbKBJ58KM1EUg2JNQ2RokT1iyaJYT91hLHY7dXMj7sH",
  "key19": "1E5U15gT3RFt9fsyFRGpMjKzeGdvoX8ddUgXkbbQKQm8cvEdzNVcxkd6UZMLBESXPaFfgeD7r5TAgxxbJbUsHz5",
  "key20": "5KqEt591hRk7Sz7v8zPfmdfoTgk6fgr9VJxhvFUYNvrcexVfiGgfpsRhXTQVhhvwRGfV7PmaMLtgiJJbHQwFBJTX",
  "key21": "5Zyg7y6MBnkkhRDWxZDogGzbTQcrhwXvFL35B9AUUccU1qLneEHRwfd88ES3SSAhf1bDbHxMSo57HGRpxmkUc8os",
  "key22": "2mE8pQDa5K86e9GG4G1mZbQcRKFwoDzaJpq7H68pLyBmJNzxvvT76UQvFnEUXsuAyvGAyDSXEYX3SMMfSPBv5syB",
  "key23": "5LgMfvtwRDhzfmEtJrzR7F2JsdcnDw2CbnLAdLTrKyke3rNt5UXrjKvgHS7C7DYNgSjSskySeqeafjXPg1FAJJhS",
  "key24": "2L7ftpbEwZsDZ7q5xiPa1EnoW5Tna5zjiLvBi5Dt44UfTMNSamUZ2MnHb383XbByfEJdymWrzYozranvnGDnrsyk",
  "key25": "5qrx4sKZPcLkRaXaFoQVjB6f1WNqkKJh2FhneyVTxsipVobwD3sRKZ69uiyHxoeehVxLgcMZ3pAsqnPsDoKMYuvX",
  "key26": "4qzjMeH4wyASzNpFzPDyprGaFCa3mCLtKXfcpJLe3qBBtqCZBBQExKuqP1GbhgmF3PmtYJYDf4eNBrzWQuQABgCw",
  "key27": "2MQc7JQCuNoYroAYCfcZB4CEFPKfwU9D3hZ6DNB8JrDkn4gNZ2QHT8SizcjSHtkbz3UAyebCAiX111Fj68SAXn42",
  "key28": "53dDGJNiyZfhRPv4Fc69PJiFQSCNvzs9XeYiiqxpCbVWwsUVaYX4hfgSekpAyEcpo5ZTCDYQu8jsBCm7SUZ9gq8C",
  "key29": "3ueMs24nLi8cWeVnkfPcERXesNyJRSViXuBRK15ox1F6oaMMX9LW2Cpa3WPndbJP3FZEity5ihxQKpamyKUqDXWF",
  "key30": "2RMcKX4iAPZVdZ2xPgTTyaewjK8nFskXwQmVQP1eDRFCTrDEPhJgC1yjsYwqXP7wcAoYYFRAwmCZRRmYiADgZdZQ",
  "key31": "m731aiqdXWu9e3uRAuWJGgYGbyFVgtwuvu3seteEpfP6gDonntZX85yDrSEBE5taSAhKoSAeux1RVdVkVkP1BBF",
  "key32": "21KDRhDt5b5y6nnA3FnRu29A22HBmfcPKQue4etPDCuApJ47iYWPnZ9UJvwV5dtkgZbBrbHCN7ukEgfWLj4JCPeN",
  "key33": "2CQTzpW8YPqXp68wCQNRhc3XGM6XqkTffVaquW7MYVsJuwwX48cjgEKmn1v2F8Map1vXSsoTsuwP5Fz6VqFyb4YN",
  "key34": "2qXUbyo4ds58u8oxWuo2WEGwbRz2Ut6HKo5B6R8YpatVCDJZuzV6tLU9fJdfYXkJnqbMjEzpHiKYVgf11J3Gse8m",
  "key35": "26nAWjKse1J5shvbiA8EjjY3kbvTAV31RKoKKkTqb43bLvdeptFZU8tSVgMu6sM8bXekvTUhRkdoPVkS7murFjoA",
  "key36": "4W5tkGYvrjZJ3qHvqSEWSuqCSHDxAxnLduNWEdyHMUGCsZ2BX24Rvz2NvQyfWCNfqueT2tGRQH87XM4Eoft5ExnQ",
  "key37": "1qoDgqW2BYsibrMZTskudvjEvsnwpjHfaaHUYX97ydmoaC4ReEyCrsN6BwvQuqoyFShZDTpro3dBgjnsJTLKX9C",
  "key38": "64zZyrpXthqgexWQiXYPVivAXMbTx2K34tR3KaWiDvt6Scrp35GtajDM85vmPRisLMgGvsQDPAGF5BjEszSV9jgq",
  "key39": "3pfsGp9AgTx3YvNoShADeUtixMgt8AGC1CgJVHpHGXoZgeocCxGL1DHrLrsczEkkJ8Jy19tFSLpWTHsikAXot5KE",
  "key40": "3pJ4UtczDhfqYYBdtq8QrpW7DZgXv2fku9gTg8GCfwUTVNaoUD4XsXugVFZbsDACpFTvGkzey41bXvjKfTE1M5JW",
  "key41": "dh1HTpVm34AK7qR92YzJaMp1oSkNTvioi9Vu1njapFKS2gEJ6WLpHM6xRVrJFy1kv5LSJUukxE2u1KSwmNjgGBA",
  "key42": "4Cue2o2FtLyn2NfRdfEcxhjbYajsPdk3UaVVrJzdt461ouXXXUwZ1m6UwjNCtZG5h9gRfzvYYnPz1cV2W4nFd7zT",
  "key43": "22N4AH9QZq9d7uT8Cmd8B97Hg9o3v1oCc1zFU2EFs7qJEKmbP5tnGfDyiSk4ynUJi7PSa8gJQ6p4Uq7icAGMLMbB"
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
