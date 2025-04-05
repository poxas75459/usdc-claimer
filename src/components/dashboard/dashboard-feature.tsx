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
    "3AkaMGznmKGfcTHc5Dxpivt6SvkU2HhAFwb1uEFxXccKSKDmyHak3ocB3pxuoxB9VNJp9BZ6NQnA2imc5Jkv62cm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kUXUrvxqt4xvrtX7zBwuod448pBCLbazQ6Q8Eai2UEPeuFXsgkj56rZ1MFgqP2p2MfCk7JQNdY55EBvBWj9EbdF",
  "key1": "2U8szDFg7PQEoX1mEmSZTym37YyRvEYUjhB8kWV5L2GRaYXUGzcvKf8g8Rfu4MLTGe7UZUDwmGJM889fYW7PCQuQ",
  "key2": "3egh4NDpe6HMMgeNPQPsWrndRppwtm3T9V2m5CP4GbZYNXrAknDzhY3BShQCA4joGwH6jMpYHiiZJcAWfXPHkHg9",
  "key3": "EjHaZxpeCgEbXPY2G5NnxnYBUuwrgySFtK72ySfD81FK6uCyBbh6dkA9jTKTj17o9Z5YUBLrw47wznLmoHnCStK",
  "key4": "2gkcx2tXBhXpEu8fAEpJmCCh4kmmwVukuowzRPJ6qGgbx46Uj4w6jhDGA2vGwoBtKxkn8mtjAWE9GWQV1ioZH97s",
  "key5": "wR9W32fUL9hop1Y8mL5AddrU4MLMg7k6cHC2Hq2YsccFrF99Eh3hk9NGctxRTTA6VB6kVn2ZmKAt7rDVSqNNvat",
  "key6": "ipL1EyZYTxdhc9MEskiRBMnUwxdHm2zR7y4HTeHj63G72wCbtwoZeWhjY2ZthBaiqfkiR3ExA7hE3zREDgXCoy6",
  "key7": "WzcVu744G7ko27MQe5WgRVpeRqZupYLHKY3HSFC2xZ6NgcHnDLRtbEi8qiT2vvvXMfmUjpVUjZ8Kw8zXsNTfqWb",
  "key8": "2ogZvdfH76nGuqDF7TjYNZScx9auZHwtZ7eAsCswR8JJYWagRNecQLwLGo6zt23R77spSKbAo4BkWKz5WEAPBxCf",
  "key9": "46M9D4ET7xAyKpomadxt1vDht5JiCxtQ17LmcxSzvhECSqEtYnYRSaVNqfexYXzYXReJRCGyeAJburHQTJL4vRxW",
  "key10": "3oDQoG8YaoJ2W59h8EWEKhePMJGbG2nqq9HbX3p47xkA7B4xEvDD6D6SdNNCcms5agjyksEbLNvV85Qv24bRjK2X",
  "key11": "Dq6HYHSKfgu6UA5MFesG113RboJ7aERNsvFz2C1bXuhvqo4dDuBvTr1ESCpeDiHTfxBsp4qovdhbtPUhkje5Jov",
  "key12": "2tN8QoDaXMd74FBSquKQRZ6iVdP8tyHtkAuGBBnxE6jGLQ5E9utC4tMNU22CKUFnmxKZS5A3JXnKh89aLWQrTwZW",
  "key13": "487JdqtnnajA2gffoyEZByiN5RHxMpRBQG2ZHFkmXj88cZMV56WzXnmKUQmSTVrRdLoNJaZnydxQiSBDtj7ZB1Z1",
  "key14": "4SgT6frc8z8Va6Qs2ADJRADffyqqkDTTBxTgoT4MuYN5MvMCGpyFcWLfMRpznwLvHYHq9FtXJPaEiLSkZ6azumbV",
  "key15": "5toJKUzkFLKVjsCKQ2d5VHiVHXHrX8JauYp8Ma3nTv7asExAKrV6MtCZdLHwJ8uU9mSHZcNt8oWdFb8brJjCo7DU",
  "key16": "3W72aELdALGeAL47wMyC23TKxKWSBFTMUfhS9t4GtzvhatqyUCGkrGw9YfSjVEocCp5YvcntLa4vvjHyaKEF5FhR",
  "key17": "qHUqkCQL8T4GRNijN4cshS8JyE5cWfiFYC7W3T7SJvpd8qQLt7t3Q2cWjY35PGLNaqbc1q74mDCAzzTpMqDxmMF",
  "key18": "5944p1fJmKzz8gYQCFD1ansEqGCC2xirv2BrkGeWJ7MDgTFDmSRKjhDPLpxbXeh7fhNkHkP3jioGtVbF81iHdvzH",
  "key19": "4Mw1dSUMoakVybcaXDt79uMfW2QyKHPFbjME3xSsy4fG65KyhXtNPuTXhGEMgarBrbs4owJUVowGNAfFqM7zWyxM",
  "key20": "35gSnBJopfB7hzY4bTVDbPJk4HFCpGvfDNuCXpFodPAy7BXGefTQ7mKxspYcheksFTFtAmKg1vzCpCBcYF2Q13qB",
  "key21": "4WAEaMxSjvuy4e8moyf6KvwKmkywR9fiiU8bDbkxomv9xPcLxLayNGfBWBXqMiRszQsrEfsZsC83nWZjwF6damAV",
  "key22": "pqTZ6o8VjXtFTsuReT8vTGqZTSG6t7xe5ojfNpQYjtzufTFe32pxUkwqdADKjpmjZhXDSpBeYjf6G3cWv7X6C3P",
  "key23": "4NjqBQtEqQyuu4Gezs9rokCEDaq9bNnFL2qPmFKN87hoAZYDZWGdixiNE8zYMshMSjrd4sGXgmtfowjTDnTHk7nh",
  "key24": "4kmHiLwna16Rj5FiofNVFbkmCoD6CbEGagyvMqm7caq7RVU8hs1fqNuTYZoRpgBKwpWT9HtGaJL1CCpMLhrPbqpM",
  "key25": "62hMHvLrzqJ6Yfso6EbUU6EqJXkte32W946nE8buUYRuFmAEYnts962f71AA6JGoy5SJaDpWFU3eHfBt1qg2vSuf",
  "key26": "593iHKdTfSM8ZdnMwC2Srcucbz8UJDbahg569RaGiB1BTrsFfmkpXr2yGmY3xCgQv1TyGX4556WLFzyuYz6LsNoU",
  "key27": "4aMrPviwQiPesEn68Nchre5uLvpDeFt7YH3ku2W1QbZKbSMBSmPCUauqBraTNKD9xSk7CYffgDwqHoGuN42xJkN9",
  "key28": "dF87BdHrAu3h5NPc6ujrWp4KTG9vkDzSAzkSMdCRBqNDgDNEW6jHgVtFz51xEHQiEeLkoEy1hXfCmvimvyHb6PC",
  "key29": "5RaWWWzMXK1LuNeWweFxvkgLUF78DAc3bUpnsmXSP2PKLctii1bNGzBZJkivGxuyFzuiDjyzBSizCLcXVez7crqQ",
  "key30": "DNDic8tydK3y37F668m4diX37HdtNvYYPKTdgRbCKwV6k2PRaGmoKvQv5p5JHpow4BkW5WkBor4dFJ8q7yUYU4o",
  "key31": "5AgHv8g5c9G9b95Q2p6zYXuRHpUZG1gubinuRsuSVkghDE17yAtt1dKN3C8VRDXt67E3H58B7VdWPt121UxbwbsD",
  "key32": "2x4CHwZgx6391zjYTRiGMvtZuFjRw5SKpV8kgvWDiJxv1h1TwxoJsE7zqEbjvpYLRfdYUtaPEVb2WTA5NmnTh5zh",
  "key33": "3KfdCRmnRmDU6PCoBdF8eMt1DJkTekAMDHfKwpvQq19fiqLVpsdrnrpsFDiHy5mMwqNNQLpLvu1ZGtb5G2D1mcCL",
  "key34": "61WVvRvYgDMiwqEEnYxCypqJAEfuWfVoqgVCY1xD72bXQKZCcrHDudakSWTKBaF4UxavEH36WUwwHafpE2oVSKFA",
  "key35": "43HMLuG2dkfnoQv8WvqrjCSPYd6s62ycm45m2NSg4kxExwAgnKxRVpLycdUp3WooZdwkrAAncNZidkMrcR4q9G8E",
  "key36": "5on3a4Rer5u6zZJJbLQEbmeEmc3868uV42fUGW7nMzY26exwuq2deLEtPNYSzC4mp3airovqQ9ud4ogp3K8NTFbS",
  "key37": "2BYuCLCdS5N27JgfopYdSbCZSGBejtCFy9vztq3XigRJGm818FGswzyZACdyG1z3YH29aES71PXdMmY2XJ7oPecE",
  "key38": "24sonMmhdrjbbkhbsxRAmfnqsjSf51QC14kDcQ2V6uDwFzPsNwzGTcwDuXiMNSBm5BAn4E2XTmNYjkAyxQgXEYKS",
  "key39": "3f6xHqrpPoKThVKv5hPL9SLMVKKNnWFYrDSRxP2N6msshMoH5FeRRiGrpG37NWTHTfq3hVthzyWbuXPvGszhnPAJ",
  "key40": "332wh5RxJ19LbMv7YAxm6mHxa1XXJ9P9DULVxk8VjAmWpNuJ1QuwxpfB1ZxVHWMpUsEhk3xhyLumFPJNH39fkfUX",
  "key41": "2dsJtnsSiRW21VkFQNSa12SB3gEeVz2xQFkjUu9pMZAwt8m9Yxpm3ZmnJXUHJPho1hcy2a4bAGFWXj5xXiKPZcu5",
  "key42": "4oTeKhj3Uweg9HSbFePxkBqk9eutFAp7BPqrDkFLTsTAWrPGKLZaAyHkWRdM53nEXoZJt8Zg7AuTthHj1nm9hWKu",
  "key43": "24TihE8hYMs7rGroxMXggvbDLTumM336GPDSM5WVVSDiwg6DGDB9K77QzULUVm35tTKYnktmSEYMqdSqZGSNV1YR"
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
