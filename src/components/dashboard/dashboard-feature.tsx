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
    "Km6bZmydQRN4nn56ZsMUoZSGMv2PJNf6QuK2YDWjANSLPyKEr2zC7KgArMrMrgifx37wSegRBXwEzfDC5QYFR31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MwDjyDfXWHVeneAC9MBjqgB5n1zVQbhxpvKB2QG4EZqd9WVSNCLtzNaBdfsVmHr4DCFuYkvM3r3x3p2cEGAcmm6",
  "key1": "2RPeoDiK4PfSYtWseZzSuDhxcVtbkNtzkJyv2ahAq6VHRxbHg7ARACsoWSRjnJ3MKPEchYJpdAVkcAy98cyKB6F4",
  "key2": "MFmoYDHpUBPtQnQuNxYuUiULEX9Sz1QVUQcgjZfqyNvLVbe1CHzCdKS5zrKVaTW7oRNZL5zDeTg9oZBRhTDL4qj",
  "key3": "65xdSSnUBBryPzi3P9Euc6vmvEo3YmgpH3XjRKZeZeebR5jZ6VLFjPGCmvRiD1fLFhpuKeQAcvuggrerh2uFXc2g",
  "key4": "4bV8qQRsRaXwJ94vmG7j76Dsxb4V51dpsdM1bppYEhHJy3rVd7jrAce5f9tAPmRAiqpHy64aZpRorycLsudKCR8p",
  "key5": "PsFxSr3yrWeD8fpVPphCE71gBrLgSy6P44tLn1LHYhk5nkQjneVKeRWtCydfqgCAeQjNA3JsSj7FboH7jbNriYB",
  "key6": "3ZKGuU1sqYR3YJMaKybhNhNa5j4Jq6PPvRieZG9jpLXgdv19YD8ZY8AF18oiAagsGnArKbKNLuDquqqVP592vh6F",
  "key7": "4T6w7gqDgnH4YZHmE7KjAmHB9YucXJSCK1YhfzqSW5Beh5WhdaJJN4ZARDMKPej2a3irKtamKorvnfKkFMQ3J1gH",
  "key8": "2ba9rsyxHj1tJWj7d4QJagr14yMgLra2VBmBQnKSLRa5vDGkRxEoQmwyU3cbMkRN8giSL3jvrw9fhwwDboHNmyRV",
  "key9": "4rNoMXZJMz37YBYcCSHaXEyexNRFyM9GW5NDPEQecfYbNdjq8Jedj8E2GTMGpNBhTYMxuuyKh3BXcTTde5fzKCz5",
  "key10": "4ENoXCLrT2weBsVRQpECg734fJm2UTsg1PGQv1w35BMarPMx9pFQUBQ4T8SdUUzy1NUPPK7MKdxvYzoq2RxbnyxE",
  "key11": "5ZhZSUNXV9eYPRoxyYZkRMpaxA6VBN1rtmfZyunyx1khnah9ZKiNtyPnunScyVQL3V6g7LRT5RS6pQuSEBWmJhiK",
  "key12": "29xDJvKhiCnPbAMnGNCuNm3X6DFR7BCgZPzDiSZ4YZ3PYxoZD8AzyuWVsKmtRMCnpZ8fAs6xQSBZnqEePYvXqnmV",
  "key13": "3sWoWpyTpU2K2V9NGEBDqS4TZLPbDFTqroamwZTREFLJQsLaSEiz98WeoTAJsV181qw86KJ8FLixUh37DoNYzSoX",
  "key14": "5YRnCs1SHGH4R6xz9V5mfu6fAn5Hycx4e45nV5YLVhN8ncnj1huqZHD7nXjfvMB5utkdRjoDtJ1neCcdV3i9fiDh",
  "key15": "4de1fpctN6ZiaMDkcadzrMKbejxAje8z197rrKihkee1kb68dmAw5jpKztWUUViYezmzfcB3VUGT3fCBu46cmvbu",
  "key16": "bxAs6zPLVagrczugp8iEAjbhreSbWW55ZdR1YUxNpuAkdyu5MD85nV3KXRsKdbJw1rBGnP2NbX6aedjbpsQQ961",
  "key17": "2BqKu4mbPuVUhWZtkxtZrdgTFjk1MbBd6aCM5EWZSwU2HNC4m53mCVpSayLoXic1oyTYitJNXZZRsyPui7vG4zEi",
  "key18": "3gaWigT4TDhEQchKpscNyZyng3Lnfz27C4uMgwkC6ZSNKpidyUtnKYRkP2Uu7ftMesdeUqZDtkUG723kavXpKAud",
  "key19": "3s7tuynQq7jcypLd9SAcJa1R9NcXhiwPggBDawdueCk27APHTYma2r2qhbeu9iW3uaVpDKUbC7wUdivi2orHGC3Z",
  "key20": "3u4JrvhQ9wqp53ZfuoFPoW3Qq5HLFKxEk6E86aNkAowzVYnRFA2s8nA8deiCM7Mzjo8L2dRxpu8QdtTGLr4Sqnir",
  "key21": "HJRU2L5kXhNAvBK2E99XFAtc7JVhkgPWhYBZj1JNbiCVknQ28Hwt9GHS5saU2zBdwgr7kEc5Tk1x62uAGfzA3i3",
  "key22": "d7Y19bBweojf7vccjHyw7egRhfRvVsgQZLA1LUEYxwhH6dWwyUfTMr14WXuGgUq6SwrQSejxeCAf5kBQMiLh2uF",
  "key23": "2SCAZCE4tiPz5C49TNkvbSBNM8C7MA6u5Ekn9tuorYELwEbYNfRtd9m7binuVxMbdEzJZDN1fmX1ahvs2WLq3yek",
  "key24": "3YVZtvPLM9Z7M1Azdw9gKskw6DSjZgRUD6qdz95zXEVo7rQFWNBG5KxvebfyNEhSS2tgPi49GkEGYacYAmk42hHg",
  "key25": "2gfS1w9N1vNjVZus5CLP8tqHqz18RGdst4W1G52E7w74Jpn1Nu1NYsNkQY9JF7emWcwqRJaFNSifbVJi37KNHjmd",
  "key26": "51BSGvYAwJc9XiftZeD2cVkuoBz5zAqv8v8Mxv67cGqaY76SBuiCHTWgC2F6fG7fwUiDSWh2M4joBLZTfdsiBhcx",
  "key27": "GCe9vghe9x3HcQ1s7wDVR844DVbBVGL1cjhgLghVvc73pABMcTuSKNdMVBp3XvHwfc9sP3atAsnp2L4hAoEXnvv",
  "key28": "4k5DnBG2SrcjVzdAdDRR6PAaqTkv3rn6kCgvyQJrG9nwq8Qen79TEmdaaC1wfwswB9KEbo6ziyDX7upMSsmqS9f6",
  "key29": "n46P4bo1qZKydDrSVkkMSyggCHpuhr7bXcWBwV1k5FN1yViqDQ9YGPcra5GvVuAoevntVxpRscYrTdyX85VTWjK",
  "key30": "3MGeMY89zxJaRNgZByfSrUt2WoBLRpdjnL4jB7umacanCx3m8dJA2Ljcf8stpgPRAiXubXZ6rnjgwam5L5ukYHhk",
  "key31": "3DHdVKEWfPaEEW1vmGbk3tRVbGXn1Jovk7T6axRk2gBg2UtUuCvu7bosPQezeXi77ff37VPJTCHjkJKPZszKdnWf",
  "key32": "5T5vsCvEo8ZsKQvjjtPhGMKdvPWenTkSQomsuw7abxANcmQs2ogi6cqfehnNxz7SRiWu2mHMikLeywaGpQ2btDdP",
  "key33": "2RWCZ1hhSE5GZ39QTxUqX2DK7qiALL9QEVMJ7Pk33vAJCmHnYayJ5zcxuDKbfa1Qo8NayS8ZxkE5Z8iBEogwPmyy",
  "key34": "46gfdZmscQPHX1bB5ArbEQgjVij6G9YpjGaSwZkiwjUSb96YM8JFG2xaRH4AVzhU3tkmgCphLtVUMHBYA6txBtnS",
  "key35": "2Ry434tigJbKayURDvdg2BzsWDzP8Nj6LxbRBrnVQwMS8Aa4GLGZhmFRM1WhKULzqkuoRf8HKhjUQjyCceLxGbg3",
  "key36": "44YH8u2mvjQDu2XxsuqHxd1F6Uqy8cUdTyCP1LNG7xdU4A9P9C132gQWURDkYEeNkUAXsi3AMSuS5hyJQ9dP3juV",
  "key37": "5nSFd2erNPFqWnaTHG3c3YRzv9iBEP57Cdpxfv4oYTGuSraGSnzwe5HSmT887fB8sFqP9JCSJRxLALX1Eq4a7Pc2",
  "key38": "62TaazuDofCvLpNhF1xARJNaKKUiZ2sjZsUK28LrbiHxbym27N5KfAJWUdYRGU7TeZsUAMYpbxhVgoTVuVaCdEq2",
  "key39": "sKtiK7dFxFSJyJtTtmK6eMAuQAJdjN8d6skeWiMcurgCfMC9Wpn6Th1kvrDcqaqvr7ttTtzLnD7ogwDm6YQvyf5",
  "key40": "3PpmUqRvx1fWzcMREmGxegVg2hKNq3FaWPVNuTF2Fpzeyzu8gy4y98pRQCJTrWziwUZV9944jXm9BYHKAqRFGuQL",
  "key41": "3gGDiEevhrxviTMR1RPueeEJcXaHgVqgmgiH4r8t25LEMpDkKQko7qm3UmE2CZNAqxuMyobvVJ99oLKGcZpnzTKP",
  "key42": "667Ug7M5a1idUmCAZAdihLRTEH4G2xy9C8tdz7hi8eMw1utgBvW6SNqyZ7GfY8uufZqTXwfDExvWCHRPhhwanC6E",
  "key43": "3DfQty6tUDbY3NV3FZvxvf86snrBUYCupbVg7W5CGasS7rYnEYkVigW8p29UCB5FDLqWicpMSJ3z2vx9iPyqfgrX",
  "key44": "5wwGSvX33MbRbuJPMSoro2uMF7WLnuRog87r5ywEytV6Ghz7Dk5b2FZStS5VsPoBq1zEcPy8SPYK4cSmvrGiUDpC",
  "key45": "4EgoWDMmshk3TcLUQ9EVeLYoW6Dkh99VKXapKTEWFvWtmotcpymgpBpBWie3ZmN2zYXkpmXEoejTfiexfq1PtxMQ",
  "key46": "4RAt33BKCgQHXHWGPaGxJNZsg6rh45UxtZbuvcuDSbHodijJr7WqCyTW7gpRtmUkLsELVATPKSyirzEa6vBAobP6",
  "key47": "4m3ydEHxfpmAswqSdYHbR9nQXLXWQ7qCgHujjTBXrcWczkiXVSqcP38oGwkdtNbEDawEqounjczASsDYuKa3sLE6",
  "key48": "4QPktewZxfKs283KHMujhmcLst8kPYqZfR7i7h5sb51CjHCwkjgSiW4QzeSTwrJVcsjgPRxcXxiQfG2Mx19gjo6x",
  "key49": "EWvVBB9RDDxMLz6uLH8VUnv35BjCYTBwYjUh5GLdNKX9wE2iNKW1nYw7Lw2b1ZswJUY6pBTMfmC6ns3om6yGF9B"
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
