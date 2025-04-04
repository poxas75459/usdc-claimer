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
    "5jgqNWCpw5NGf15N96wAQw8ctJsNS6Wx2RaU8JuAyNisjeprKWnAT2RJaib5NCZs9T61u6S1xmTJ8YhUf16hSFVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CSGuTXxe2J9vqmmuUGhj8GzpeW3DLKVkPvUpNh18R5HW9CBBBWfKupaJGgNZMo866eHbzdcSxxogSLCHiqQvrsh",
  "key1": "5tdFahgCNwZSsVpnhT1Vy2isabCKarhSDcoVgRuczkYA1FezLQEuS4aWPawApvwGLTsNeNkNs1KbUBZDQCq3oMEE",
  "key2": "2z1ANruy85sYiQWLRuPY1zZsFooves4XhbSaux2LQtsLcUacX5DYpc1sD5c6nrMYtaH3Xj9eaNE6ppKwczJ1o2kq",
  "key3": "2Rpmbc8czYVudurdVesapE622ZX1TBhCMXfNm7NnEFjR4nzD7j6vwE68vjoc2WT7AeiarqzVQfMic8YtTX5Zc57U",
  "key4": "4VeaE9Tdq7xK44wv4ZE1KVxZ1ujSX85SgEMPUbK2UyRk2e64yjWdi6KC6N4pnE9yJ39SdQDxauLgcrDcxAbpkLLb",
  "key5": "3ZGHi9iedqp4pN1AZWumrXiYm2L4TwhWKubMyedYF3CEP4t559tYxpSoPc7oh3SLD7R27zMxZNSRDg6KsuRy6ZC7",
  "key6": "3sHKUWqqBzrLKY9y6nQKdqDUURgwJutHCz1mhuYzqYW65X5hPwyy88T9FRxNUpKiwe1rArjYRBxr32CJSqBxutqh",
  "key7": "5jqxzsvLnZSV76bWsjn9Q1UYCR6YmYXmAW9km3DEYEqVogU7rjzbkAxMEyVggHituxusGPXziqn5ZczyAQoioQdb",
  "key8": "31eMjg4kFd3xS2H66FniTyNFsrtnXhMHMTVo2axzacLJRvdC7VPnzeg25yxiatLxzVvoDgzVjADU4RzEpdF2X7m9",
  "key9": "PvUkJJemjRvtiY5v5CfQLPdTe1u3Ag4rcs1KNcFHSRGHdLbLj42DsTK3a6FXobSjUvZvcYFvi3q7wir2ojqBLi2",
  "key10": "4mTYKkvEFjCJrLNRKAoiHsju7qiQWNG9AwrAMyUGBE1RCSAxw38hTvwbvKrnroyYLV128dCejuAiAKPFhSyUaW1R",
  "key11": "2RgwkBYy5oQVnc8sJyBc2eqiebxtjjEXa8hHXGtU3P3ZTDNWvfkr6vL5DSoDXDEFMVBxfmTT6HZyXXUH16v4cTE9",
  "key12": "MwS2fqpbTCh7Cj81ALRJ1DqWYcYddxaz46ZknccmCBSkhiGc69uhVc3dU7EWWKCkjKkA7cxQkuuVFD1rKD3rhUo",
  "key13": "5THSHGcvLGVSme1oZXAp5VfMcuEmjSW5M9YnW5z6yWcM2nM8HpiXYZ4pS1LsUYtFLxtdQTmCrdSBSdRtmionnAyv",
  "key14": "3KmHDULninFptP4qhfWQMJruAd4AXdF1mTGvvvd2CtFELRBSFmsTdWwBaT4ZByH8GZGbEo6DZt2htGK5Pbjxj1uV",
  "key15": "3xxFYSK9qtKeU3djgn75QQ4DaRQ5uBnCXFptYeWCsoFWjoCEUgv8YVjRpQNatEPbjdVttYS2qCf4RWWBGXxQzQDT",
  "key16": "5ycsJERCDA2RyuGyBjc9icsnFNXvSkGaXG1jHy8FPgPNLtJSfETAkRfjPXoNp1D1nxfV2347oqULxngk495tcMB7",
  "key17": "3yhA33Hds8MwjdLhCQgmxmeHyaBJCCDwnnyrR5eapcTtcCZzK5ZrjK3hHBcteUecMPDugcfy98CiKKgTvJrEAqwW",
  "key18": "4ioc6QRuZaWuhq2ytxxDDiFcKbcu5TACuzBUSePDXWyMUd8py9Dqm8V7GhT2ysbTTBMeLvXM86jEpLR9LEkivwaj",
  "key19": "fwRzPF1ppp9GsNPKhTJf1dUAssbp2VdgZSxdJBLQtn9ExqbaB1oZyxE4W1wqhHHBDb7nJBSKuXDm8K9qeetpsbP",
  "key20": "5vN4uxKAjR9nPr6AhTGRNEE58thfTnR9miyRXBj1ZU3tpegDZtJhuP1pK4RmcF1yjD5DEMmeXXKzNC2Vo198H44n",
  "key21": "3bXH2SAG6nrbBZH1AxZuhjNesfdkiiYTViqztAa4vBTX9WbFxwCxRQrmjaFFGY4PY4GwfbmXVMKDH3zyMayedsrP",
  "key22": "gkNmXHVPvjmf6iLG7RBjSuDF5kKojKx99NzwrEA4fqo7FuSmFzhpFtxayw6mMSMt6SeqQooNKc66DCQBdLKvkqH",
  "key23": "4shsM9h6y1hRpdZHGNo6mzpfX3aSY2FRhQP5PWxhKyNNdKyWN7xjEDPVUDg7WFmNXbka8MCPf8dYrrtaPta2SKTt",
  "key24": "26AxGbP3Wy5RKLJuGQXNLo1NzCTp8x9fgZ7Sd49Ck16jaoZuR69Y4ohUP9odm1QGxCwsnNgh1PMGjAmXbThYhovk",
  "key25": "3Bv2oo1fysMqoSkLR5ULjWDVW7MpxSvLiwGQBAuXxTdiztH1xWZ2dAxfYj1b4GgGGRH4RskD7KQavS8UATRNLPkv",
  "key26": "5GBGLRyJ1Ctbq7nCbpcWhyBpLZoNeGFQqyc3EK5nGWPmzo2yGWuZDsCTf6jtTfUA5bCpxkMEzaKh7BKhZdV5e19f",
  "key27": "2oDc3s8ZJ5RQW7BBd557Ktnd4WMdhUh3nFQ6hKtiXy9UXtsjMR5yqmasr4kHncz9Cq6ATtMiZuyjVLgsS7ttA33c",
  "key28": "57N4CGeuQn5myCArg3rnqebpeminxuXv5jbCmjACZpejxyiMFdp7Hw9M9EEUSWZQhZYrJR9NXvEiKpVE8DJojMxt",
  "key29": "4jUGfJtAvtBQGGT5pjfYn1VZmYJiTUfsit3XPGFVVAhTTgDbqphDiPaqYvjW8oUuzkvMx7tmBQGgxFPbaz4SomZV",
  "key30": "337wYSLzTy2rjhGFsoJiVTAWanC8doru5TZn8EXnbMUjTcYN8Wifxud63FKMPQoUxGATvh83BnMwvP7hdYeghy9o",
  "key31": "Lxy3mGEcUdThzuz2AsnshFBC3D6o221auboN3PQrNJ7aVraPanpdv6QU4MwZLf94BsXhPrr3DevkPnSaRLAbTNx",
  "key32": "4KFAVKxXuoRFdGybEg2vffPtYWFRZm4TGgMyP2YuSdPBJoTzWFjCA7bQ9ggGnt2DAbGrZABNK9G1eHtuXGSR7toS",
  "key33": "266RufZfUXM5Qtb4hnbhdhx1efAQZnycTbUnqCdrRpbweH5qgeTNHGRdZvwzyHgKr7koeqWEckYPNrbLRpsTXgV2",
  "key34": "t8x5ai8rEuxqSP3RETsSyfKHsep2mLoVw1FYHtVEkTk7U2Xqb84N2moHTrA86MBLKSAe9u9tYr2rzAzPitbw4D6",
  "key35": "VFvDU3iWNvfuE5CGNcdSFRoj6bNesz1wrfkzS67WmfMB5N93QF3nm9DT5FzMg2m2Fv8JF6fRE6EHD4XB6y2Zb7x",
  "key36": "3AZV9F2zUErJ1ptv3vZ4jG7zLi6hDNWWKysiBtGjmwRUDZmWeQFXqdbku8fE3PeTgo7peDJWuHfgbW8h1nDvBHq",
  "key37": "EXjQtiNxDtRh9UheNj31kjAFX6Urd9DgFZEZBWHp9rCM5ekSLBNyhF6BREJxyapJVG2y1UgqAvxS9c6qr3PmwD9",
  "key38": "52GB5atevGxwJDuT6Hu3osFRaa26uZhfe4ELCNKh8zWxS5TH435t3R1GKJZQdkNAVEUFr2q3hTGKcTnKKRu7UUQb",
  "key39": "gmXPMxdo31wLSGjGFCFQHV91UDebiDhiNro6JiW2K1h4p3dkQP7VjgNw3vNWHPDs9yNy9a7fJYrAuEXRKknQccj",
  "key40": "3yGewg3ASRNw3W23rB6f2iPXUMT1ABcqKTBjFi2xGNuVLh5kpCszTP5TxfWSeUYo4dd2D65C8HPSB1zfGNhaoyKi",
  "key41": "5UfshiUzVa5eyAr5FjVXkhhCogEv2AC6Vow99BBQWC9mcue53sjW94ZqrV1Gifs84U14GwraCBcuLQjEg9t6HWcW",
  "key42": "66vyQRgW5tbwc5ocVXqXb6sBRJqKuTRSPSxdTmScRJbYfjVHeh5nZTMKn1d18P7H9K1C3vL6FbqR93i1cj4Hpo8B"
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
