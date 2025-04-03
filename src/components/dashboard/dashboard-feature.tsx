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
    "rQJzMaUZkS9u7QhipesGhrQu7Nf2hio4G2AokSz2gJLRtoK336eMPs1Eo7SZahew7xU29FWQev1pFTkeFGEvnnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nqnGk3cLxC86rLHT4WAWrDaMnCRCEN4EJt4h4yGM2EKc76DcorkcpXiRKCAvJLxnHHapwEC175ADVAR11J3RcrX",
  "key1": "5LV1dWip2DuHaMYg2A7xodRuxfnxDWVNP7jLjZ1SXC8xEUaJKzTdVveFEMLvKeEcBrhni8GpsLQHaxUzpwZp8Xkh",
  "key2": "5syLwSvp7CQmeWNvi5KhmEJ8C6FhvJX39z8cSjDa7HHkPaZkwsvf8ntX2iPUwedvWsXsyMFWVbAHaXkzX65mVFYS",
  "key3": "2NSnF5i44ZpAsUJ4zvgdPeBuqo42aiHPmc13e1in6zPbJbodzLAeVQBRhgZXT4SLizByms7UGTEvUjejjRUp1nDQ",
  "key4": "2uEcQi5i3NnhRzxKpQQQs8ApcPJMdvbhvzeXD88oviFpkBtbc7e5Zr8yzpDnnzxRNRGnGAqEqLtHjZXar9ehKcEK",
  "key5": "2W4vmv1zbLo5qxeG4iajY7JXGvmvrk7H7HTKutPMrGrz6fbfGA7DvSdgu1ZiEX5q8H4ec9rqX3JjGrom5n9jVTGw",
  "key6": "2w3YtLBQFe1xM2PZDACJ2dt9fF8cpm8rd7jBC31owWiC3cUSAX2rJg4Jz51oaYH4f9YBYoxAj98UBPyjXGZYzctN",
  "key7": "2JdtD5B4dtnc7mZWdGXzwRLjhGLsVej4EesHhtVZgKEyg9fW9NwmWQB2Pw5ifq8Etk8dJ2fYTBKaaMH11FbRXfck",
  "key8": "2VbBWuEXxD2u3SsyRyM5TSWYt6NYXxKhcke3ZNm6Xa19sJB8yeTLCscVLtpBBo34PF9Gz2eaDJkTH1hd5MFttU7X",
  "key9": "yFrB1YYAneVoQydiCqyQ6BU85RGhJRi3p67r47JsUQpHHMMTv4VLrHLCgqCTc5bowvoA4tJjLGNMZVTmbknXeTF",
  "key10": "RSM6whUMdXY7KLvspnnjo5Z8ceKajDq8AkvXGeSyoeTAXnQGqRN2YU9owDZkWeq13BweCjLynANaQBEZg12efv8",
  "key11": "2ms9s7NLiaEU23aete6qq3ajcCCxJTYLMpQ3uTEZgwDh1e5dJEeE4u5ytYBuSwLz7U3daM2KB9pV8aZpXqiHGgzM",
  "key12": "51XrTui47uQNREanam9fmqFFUBYSj2mc9rZwmGexuFdg7cJsuEiN6BqFkHboaH26XnoondLrpHh9LZPotUNEDSdF",
  "key13": "RSAZ8CwP7VNWYov1JY6CHK3hi6T1G7t2ZsJQre6dMbF1iK2RLXayDUUsAzW1va7xevS1PdCFmpbC2Mfuoxgixze",
  "key14": "5m6S1esyXTsM5yeUksovPAvnW3kZKFBUCmoYge9ZrPP1tvL7Ut31NZ5K5oVm7BohtGSUhYVJcHKwZFfBgMTtEaN3",
  "key15": "5ozTrFEgSYipwbUWVV77UtgnN1DgH7emRirGuqSG5kmJiiETR6Bqi5ThWyHVhfVkFNHRbvXgqNc1KqzFoTTUKJxn",
  "key16": "345NP4Zo4bjvPiVhMzWrzuqMoMvz4TZbkgKNGk6umkj1oUadoQ3seZFkeqzTJxMmyFPATuCKE5N7LykRQbxGJo36",
  "key17": "8KP7HeppfqN9Aqu3xkRWaqDHe8TVdmqv7W3rJWVmhHLPGwD6EGALFRcF2RZqptqpsNj8DcPnAtrmbYRGuTEHG5s",
  "key18": "2Yzwcsy115qrgKqpmfFTHVVcjTsPvtyzi58VfwtYxAVQd5LBNhwuvjUdoN8hWHW3e6aQspDHxDGLRjTMjCvfXiJd",
  "key19": "2iTjmNcZumMPLHNv5B3wqvcqQqwYUj88og5adKctBQ5QMXCJ5HVP8KSAwwtESu6ffXoWM4UEbXNg3ckDdJQCbWFK",
  "key20": "65xk8KLGCoNN4tTyVAYXG74dJYgt9Va2PbVbhVJhe9g6DV9WU6Kdm3oJUQ1kvqd8sfDMiSa4ijUhuq8GTvxD3AKd",
  "key21": "3JjtPN9e1KwrGe9HSJHjjHNC5bsdKYQjgEJ7bUnS2GvLmzgWkk5V1zw3YsE9qitq9ZU3Z6C3ik7pyhUBzVs2eGrd",
  "key22": "4zDBFmwMcGoUetrT8YMg1jBvQrYyT1DMhbuSHkCdBAsRUXxfgxb8kj8YPUrkEmEy5MxAnZZVkuBKN656YjdURp8n",
  "key23": "nqa6LwiN6L6mQYVKHogDkFPcYSfXcfqPGixgRVzddYHvRjHx9HwW6TJCXWoDVu7nYJCj2svn9Ei7XFdQ35dpVD4",
  "key24": "wcy3DitLESySv9LA3cqw3cbZgMzwBTRvdhb9yVrNq9toXF58oFWfnCxsqaHXsSWbFVmsUyCY3nzDhLs9SXwd9uA",
  "key25": "5v6jj3DTnN56aHR7B5jSEzjdXnG77Nq86jiWx2VKsTZV3wHeryGcgauiBKAt4ChfXvSouxQbcbq3Hi84LM21XpsF",
  "key26": "2E1dpz19tNPNBPaeUU7cQ4gvHJewDwAd1msrvXoguDSwT9v48AAApC7JiKjEtU7HDx641RD2K1Bic6wAjCkeKEtZ",
  "key27": "WRDFUFfXFmxQeygfbcYiDzj1fYZMDZvGBRHGy4r1EYjD6894umWG9NFTeEP2pybs41NQbDvskCEMjxKAzif2pCR",
  "key28": "HKZUWPeLUBdb7jXQpehJvdcX2C4zmepVSSBCoRUTyUdnoJxGx6GzsEX4whPGBWcAMfi3ee5K5a8F3udrrUho78j",
  "key29": "34Y5pjKrsqADumHqAwPzH3PhWSoX38WdxdqwvVFtMv1neZUdVsgp75qiCfW2wWmFN5chBfZRWow78vRT2oCXLvBS",
  "key30": "3ETFpKsQtks8P2w4ky6E5CckBJtBFRdWwsoJArFWyPbAvSRyp1GGydEUYBES6U56241sgpQ7M9NARpAcG2stC35v",
  "key31": "2NJ1UcFmZS72NbchrF6Bqg24zpsz6Kquzq4rs5jgmyP9MZDYLStTsEiRwuT1UE5qgLsxWJvQVfeiXpZRm9RZssij",
  "key32": "4yCVZhcVUjVeNn7W1Uh1qvxmKBKFnEC1k1GL2fBh9n9QSay4bDpwszxy5fZy6N1S4TniQQPDBTghd8bvfD2yoTrc",
  "key33": "4AXbJPD2dqTi5Uatz3UJSm8oiU5wqJ9URu6b9sykAWR3Zz6MwJVqTrigxULuo6fdGHLM539Mcro8ysn1iuVEaccs",
  "key34": "4pacEf8qp8F5gbDnrq1TFzWAQgPfgZh6cCrH8xgKp4hYVoEAEm4aj9fCCuiHa1kADNhMtqS6gHah8yzEabc7t8YU",
  "key35": "5hP8j1hhgmA5odDwSwBbeRQHcp3CmjW6rvNh46LYit393mxjXCCe94eSuMebDjEBmgpVS3JKA8xJvWkwyAt7macF",
  "key36": "3Ck3JTxJeuzoZmq1uaRDhgEMZ3VLeNtXMr1QYPvBpEPjDocnhzVywJNHca9eFjpQ3k4UCTDHNPZweX2HkGmyEZW6",
  "key37": "FVTPACFGaaYfwofN7hjP1ZGFwoi7x2AiwATLDqqQ4pRPuTG6zEijKRXk2b8BMh28PVWbfr4VcNCUxUXNZpAeuvc",
  "key38": "5QeJWuwAVvzBhMUt4CgTnBp8C6cZXp5fq2rUjgZAhZVNnN66ztaJafXW8gC11BAMEfZMWHbJE71Gb863HwCrJwoL",
  "key39": "5C6FamETdC37Bjy22KZxGsdmfYa1VEzXbudReRbGSU5wxkbUh2AvSLZxZJcMQhXW6APXGKTkcDVNfxcTJCjBhfbs",
  "key40": "3BWZzjZ7abcY5Ejm3apaVjiQjWb2eV2tz8oLGokW9hmfPo7u9Fupwt1y4h3pdN7L8RUgVpDPY7k7BLAVJScskKf1",
  "key41": "5Mp4pjXg1iUi4hkrjcHyX2wqKtDcZLkim5e3GEaafC551Xs8JvNx9AhocXGB1GVbbiYccXyeTSN6wr6SLeTWDf6B",
  "key42": "5RVhifQqAvXQQ6dchieWjB7DMuDEDYNYajiNAZu7wP5bSYaMyExtaXaqPTXPkd7wv3YLjzmjxrgB9ECTtttki931",
  "key43": "53PFaPn4uEdQbYY8M9iGrTPnEHs6AQuxXNNvgotUDRzc7GLA66aWuze7pzaiGpJsRSKWFffVVNTTeR52TbAokcG6",
  "key44": "3j1ZNnKQSsdWvwrefhqd3uWmnCiJ616HFXt1djfJBpve9fTpuFfU1Gu8Pxr3vvefayc5NU6An4To2G3tPxaaXrEh",
  "key45": "HCijrv8cmqTeRjLjJhZgcpQ9WgypsptvBvpDuUNsAQGKGVAkvFgYXJhKX9BPjYbDc2kNwv3WKpGPBhhyR719pLE",
  "key46": "2uHEs7TXLGjqVhBSUvwQ1zDmhx3VXgWjLymTZfm5VLQ9kKvKWn1NivEDzmLufHZrHTwT8KGdv5BA3H75UnPZ6aNh",
  "key47": "4DG4DVi1t3VHT8MeLW3DnMNccFmPBDVxm4hrxxfyT1d2Geg2aMoz9BaJy7osurwsk1fHz6oQBAAvH488by4v8aFM",
  "key48": "22s1n3oTerpFWCAhVuAQCTN8Ndwas2qd25wwtFMBFHiCvoRbWr4sy3oyLYcCQoNFuTysSCvtBTF1UnT9cWTbWjLj"
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
