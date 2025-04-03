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
    "3xyAHDJuXoY7orgiHgiJBd6gHNbJjBQWodyPunMSwT2LHb7NeCt7cdm6HSjn9WkjdSQSX1BqFz4kt1fFwcWXXAmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2carKdeBeRGjJfRq9y9XjVJ8PerfDWepSrGConjgLdqCyyMc8sRrnSyBRqHYu21vS59JP5abByHBKADNt66WhW1M",
  "key1": "3pHK5eSK2uXWSVpzMHJEjd2vmHH47DFkxDfg74eNKZgnrxFJpCvYR15FxddyDgCTooE2LqCRwGpXMyYVgNSKKSuk",
  "key2": "3NegGanifcvWAPs6oPdCqXeLp75Qu8JwFVmgfw1c3RoKdVCP9knNB5CUrKUxreQqd27jZQckPjDZWe4UxCTzQdKn",
  "key3": "1iQyxeVBs5e8PcGBNgwcLUNsx7P4cYLb36MFUzve3RnnRy5Mg7z8wz9Hi4n2TVijMkwKKTpnG2bg42xoCnRdHNJ",
  "key4": "DbhYXRir4fkoy4A4ujC7iff8n4M2d61o1Bk7TVx3ndksfvM5dEgUzKJ5z27hQGY3d732txjzFfzZ4SJqkuPZmbd",
  "key5": "33Q1SBTMaeEUe3RCLkzZcRhgqhHgUzTRbij6xbd16iQuGto943HGUnDiMAH5gHW9rtGUWznTgzTM922jMt3FtpWK",
  "key6": "4CSn1wfceH1WaWvqcPWxxnBWQq6VMBG63QuHtTC2PWA3XJEJ8VXLDKX4owazhSFcyJXx8oHik5s1VJ1PyG73q571",
  "key7": "44koMdW1gyepVuB7sjWcLBtowvzcAH9BfZZy9xJj9LsnhbfboPAqU2hRELtELLLhqrbBJPrLFbMgWi9QJMg2ccS8",
  "key8": "2XUASLMpGYLvEG7TdQopKqELMBGC6xEfqHgY579JHSTRU6ZcNMUka71B3ffKXKSZuMHz65miY1AerZf6fNQ7tSdm",
  "key9": "36tfuEJtfCBBm4yXMrMChyzqZkUbAEDoMt4SWFFoZwWa985xZtiXQqw2SCoFgvbXqmFMBwshxGtiuFn31bqZQ6Ta",
  "key10": "3KP6b7Ft2ue4L43mxTC2haf61p14BxY3R31iRXaMQ3ix3tMCTfzAm8GUq5DTHDQdNxLCyZ9BcLEJZWqSpb1dNehF",
  "key11": "HvYHegMFR9KV3gdFZjitFt3YhDMs1yo5h1v8sj5tUkQFbKbrNVr14UbrGRK6r46bTykWahDHbyBR4xcA86PhkGy",
  "key12": "5SF6VfX8CuDNxroMHqAWXoAUERYrMWLkMYFooiVG2oBGV8H3H8jFxt9CJxpYsExoUCuHryB3Qbwjqv8FHs3CNwvA",
  "key13": "2LS9hUGcfHBGn5QbYP5VYHLPGS6y3YiMhPTHLwiEuygFVCjnH3Ki56inUDaSP7GNd3sVtWJUtxecDJs8VQewqwTE",
  "key14": "pEZtPNW93HqmRwdbdN7BTXZ3df8qPEtYbofXXb7N2TW99FptZrkRfaKpcxweMR9CJ2vGeLRVuErq4bGrBJV4mBD",
  "key15": "BCx61EPxEto1taYsAS6wGdfxMAczVJKKxtaGGigYM3dQMqygndsMHeChmoztvAj1FV7pyD5CL2y35wmJ6yALKS2",
  "key16": "5mkkgbbhFApbk5QFqmkCD4c4KFsqtYKTaSZMjNe4t8PALjmstYwaTz6CNh46YFvUmTCTyxSYMyXBzX9Zf1hXhvoy",
  "key17": "4imsoqvt7XeCW1e4DkMQoctYWYVtZhfdxfLqsMv1x5xUCt91nRwX99J9fkAuQcQ22rRHn3oZe9utxtoG2KBAqtUS",
  "key18": "HMqGmhmgE2ZPkSubApSae8LVmaikEcqEMzTMe2w5Fgb6WwRNfoNTUNZpvs5rT28HZcSfzmm8AaPtBzBk83zKznL",
  "key19": "5ZPRHiWqucLNT4PSDd9UrHFcq8h41ubvJ3qLtWj5CsabSFLf8qZFUzYCFxgrp4Uce1mPsnBaVWv92KmSkbTK7evW",
  "key20": "4PQ3q51JiACbx5Fuhew57jpymMzMPZwvPvsbyHNw6rHruKMjDxJiZuqz4JvDawdKLtqi6Q6K8SSGDi9DjuspZeH9",
  "key21": "28jEYfm5AvzBv1qLn4UcHAo2tqQM2TFyYcSX6mHp2P8fzdpNRygLL6z4MFrtVzGzwrXeiFUpacXWoW6pQ2Y4JGi9",
  "key22": "4ucrE9JJNqwsYuThq2N9DXYFo7ogBTNprAZKguA4aKkkM3QrkYZneSTJ7HquhFqQQeV31GR6ydLotSUAQumngXkg",
  "key23": "4dhvBsEAnYzWfDNWBPDmZRtxF4ZuCf6PcJfbLkswih8JQmN1AebYK7XcrEXG8CTogvGhTNNc5fhb1Psd3kbYPh1T",
  "key24": "4RNPkQg87n6xE2uUpjpQfwkTogpJuHfRDyQ8mLi6feAAUjcVH5Vyp7Ss4PCWpZKyBafKwBkWhQce1BaCQNzK75Bj",
  "key25": "8fGx8aqFNAqsTP1GeZHbFt2mMmGD8Jbt3JAQzCBXi1dy5CvNxgMCLaMmpPfqfRSPMNZaC4G2NMHBBFWJP6QTW5u",
  "key26": "UTQK9oBZ9HKcxQpZSejbscLbuDh923pm183ioATSijvKvuXXDXGLqprvLEwEMq77ic83AkQahQPPjoKrVXeKSfC",
  "key27": "YkTBVMoTrNp9eWCJ3eQNYhTzUsJM66NLH1o7YyazMnp4wKNNCG8XHxxGvM6fY5cCsabA3W1VACr4DkC7zDnqgqE",
  "key28": "2VTRWDU2qnEBgffxnk2fVoE6yDuWC4VzAcw2ocidxHSswqaGt9TNjhQtiVJeJSUq97tx4p4DYL36bX8QwdKghxHL",
  "key29": "3RwDV2qetp3XueKuFEgNRfGciE2LZPaRSP6zbGL71ZhGS4iRoceK3Ua2WfXgCaqyrcXZ22eWujSc1p3TMQMr8vPQ",
  "key30": "xnQWZSX2HbfEgUP1w6nKXMPK1jQmh3KpEV4LedUSE27jcwX8U8Dk6undXLRM92SUCJJk46bGK1TNydPY3igPd4T",
  "key31": "4su6DTcxSpGYmEQX5jjwHmyNrNu8NJoGDb2RQ5M5erNahYLeQ7L2t5pu3TfJTF7Nq2iTA54KWeuSphvG7tdHRUto",
  "key32": "wcgd3DzQs4yKeQqRbAqf6baZjMjQ8csEZYW27mVDXSJdite23HLwNhsJA9ZbpAnqPMwBFn4FuAfjqHqEyZW1o9A",
  "key33": "k8yEsMnxUacYSwLwhgRXWa165xNHuXwMfRbcjB9ocatcbCEjfBQqcbQGBLgfoHCbJWdTYQFPEBaSriJZvSgsUUc",
  "key34": "ZBVLuHjLgsd9EpGAVKaCVLNud9ZsuaBsZTet3e5Vwvty9utiJgNQmfzETLoP7DjJu8FtJEeXQMovbXNaQ2LWJWn",
  "key35": "4GxzqhweNeSMUejFgsBeUkEky6dgdm69vfuXD3qTU3C1wDpgumkazqnLBJwKd4aYoHteHLLJ24mQrhbyrMaXnJLF",
  "key36": "3aV9Szh5wRhP1JyzzVyR8KTEdUSCzbnz1mwNejc3bPVePYGyLxK7gW5fh3wehxDx29kqD21E2JPSNG51E5p2pWde",
  "key37": "2jV3n5oAD84m33WE3oy2gNW1cxWeLGg74km2Eags4isndKPNHuVDhejs4ndCSHT488fyMtSsK1zVX2tN2NpYdUVo",
  "key38": "55vnUCmuabyPY6EsdzQdyLEXwa2VkCAHWDCUakTbinwbHJDsL32bTRpYpQ3BgC25mtDUktjyx9Y4thgmmzTWb75j",
  "key39": "5fAaPtqHZauPJVpsDKtqrR7ynd2x42xJvLTv8MuBwbK1CcoET7mPGKPsymfTmbBn9UujUxVYU2BgdbfQchQvWsun",
  "key40": "43Ks6y9CHWKrGK1GyMT6zwLbhAANqx5u2XXqTa2hAUJAm9t8hSjE3Kaiq3fiUE5XfUAZ92McrJS9rJmwnxMENWzV",
  "key41": "3evnYivijHTQbWtxBSUYfM99DZh5potrXXabZvHZ7M78dXNt5uAgGj4d3q7A2gkJ7awbft6k6ztjdRPdcpq8m1Mv",
  "key42": "FdbbFo6GgAoqt6kTZ8Dq866rmgGJHt4EKLK9DxhmJH6AWRSWqfA5YvTMe2mdeDstqweJswKqkXNjxvq2z7jiuV7",
  "key43": "2hs76DedaKmTBC7oLBkihRe3vwthGAufWnWc4BRDYL8kR8F3J29idm1WBerJZTtBxt7YS5LGk9iKCkruAHE77V2s",
  "key44": "4DcLrEWCzepYA1nE9K5Jvm5AoFCBaYSPVTZ6ZPm81AjPpgquMiq2K7ja5SuTHotFSEwyH359Juc6SAExnT2yxRxa",
  "key45": "RPATfZTtifaBBMQWkcWhEsDnGRWDNTMKNiBB7rHQiqFQYpu2NQVmTXToUm7c91s1WxLCLuPs6oU4y9gneFonwEk",
  "key46": "AdyYLt7oZvNz2cKASvGQKsydF4NNjX2EYK4vL3ZdCuPtVPkkKdsodkDju2CqKdvWbJeHvnRzFycA4tBhEV2a5tk",
  "key47": "3ku9h2Ffazc3dXaA8JJLCSQvBGuusNtK5EfRFnqAJ84AA5MpJ1BG1gU2nuDTD5m7Wm7ZS64FX67uYgv6hbfgXCQh",
  "key48": "2WkGex3XScVsKVCKgmNmMh3Y2hzqYYpCsAcNKCeAbYZqJ4nrZYx8XjHcTHPvbavBAHS321jXBRFkUMsnKie2H7kA",
  "key49": "4QX1rwUqG33KX5BLr85rK2hmZfkYfZvw1dfxetHFhF4gAwstpnKfX1kaLuhfbFZCoD5CL9wQYgm36UBojsKYVKMF"
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
