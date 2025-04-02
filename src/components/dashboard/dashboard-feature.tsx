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
    "4SALSZLdL68cxhgGtpSQWxwrSm1aavwTW4jineeGz8Tpf2KxqrWH6omcm4VZokNfKUewwqBBeUu3awMbf7hjGCxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dXtRHtdEwKJ5g12SzFVjfB7WkuVqiAzEY4pRibRE6yQomCAFp8a2rwjzbgpdkqD17WaXar4jPBQRBjUsGdNyRMv",
  "key1": "3RRVwjF9wAAXvMaqEvNuoecYyrqZtsXKudUn5xeXJzQsgSiVpz1hFZeRPv8p65KvpSgSzUZnpzFWMThjPsd4Ki2t",
  "key2": "2V15NoKv4fSG5X6ETZwnYw6FHCXVTc1wGxmHP5g3cxWY4owXsU1FncGZmLDj3N9RzK5PFDqiaLbDYTvZcDcZpgpF",
  "key3": "3ULkyKfV2nAxKZ9A1rewu1gtgYauC5WNWGn5iFQCpsreYD6t62SkhzV4Ujsux2XaN9zP4fTk5ZJLkjCFULaS9fNT",
  "key4": "2T7dvFPuALSG4qdsu9CwFAGFpwaq1MyXrgPCSBkpWHaYwEVfkYNcq5xGScuDSnt6AgW2dEfKSu6UCg83FmDr89fD",
  "key5": "3BefbVhSrm8qyTzpj5TrDf3BKMERVUf9q3rMzfHGVPGoudB72UhrSqknMBNcLFSXvRibUP2psKaQvkPH9cnrxC9E",
  "key6": "65pkvoDNCfpB6MBFoEUDYxuvVHah8HX8mGn6rzUx9riin2ZovGkb7csuKN1chxkyBCX2ngo5s26hu632yqE6ab1N",
  "key7": "26Bhcur8SjkUQkEDswFyYTvHEXxinYf4Ga9wxAbQtyAN3KWRpnjfPR67wLnP4TkzWKTB1bkiMppJTtKpFsQ6MGLb",
  "key8": "3fMCWJR5mR344tAfu88sCjd5gx17m4jgMWSGAJPy9s3j2X3kwSWsnsQuMgKk5JwNo7ivrzos8r3XgywLSdf4o4ba",
  "key9": "mzsrDzjy5GXfgNrt3k89ZG8KiFLo95HHDTLHXA1ru5LdnbTjoWy2FCPTSTHbajCy1JcwSERJFro4jYzZ6T74woK",
  "key10": "2yL1WCLGkxwYnGpwfskYVj5nctiM4wCECKkt7KVWEEUMkwFPbSdZBNsvbrZrA8K9eXD3DycaoZ3Wg5TBmf58gwWe",
  "key11": "JVJhMxHdomNUzuJosLP3MC68jTtfwkv9zDfffPJwqkvtnWSQHUcBNYysuQ8C98Soj54dZDCWLBzuxx2tGPASGSq",
  "key12": "3UFfoi5pb3NXDfSfFb2SLjDW2oYiHdx2wV8FY6wefvvDZBUyznQEEs6mLgvSrfkwQDdWBLTcwxcNwTamxbZrCkVg",
  "key13": "5FzsTkJqxKSL1P6gQ6Wz51B6VH5ndRTwcDfxwEuxtSbfBBYBrCUwS8428EkvXgR4BHpoTzbvZjQLVQb4aeUrq8G",
  "key14": "58a8eaJCBxQdXmPDGi31dUAFCE9FYzJqQefmx56JKAd4csZjvaMMdhNiq6nneXakvpFiATi32c2EvJx3X4ifnk4S",
  "key15": "2TqGeK4CK6bnG8hQjDTPFwcKugt9RGEjMqJi3rrLdagpfDYU9VLSPBnLvW1hgkDsStVb1CyQWuWTF1Covgxu1mdP",
  "key16": "3Mdpds4CJqKupemuaK1BkcuDt4XUHLpHcynBd4XCbdFkPpUStA4FK7HyuWSZJSyzgxjfNtwqJS7WRt4kS6d358MN",
  "key17": "36h1BtZU7L5S5WSgxzBaEyu653RFPp2jDZ8gCLSpQDDWf2N7rCzqQ9bdQaiTs3tSmweTPy7oMH6aaLXsS7uJWDjA",
  "key18": "65ecFhtk67mRDuxUsbDzDmCLWyATSN9VNCAxPB5nVCeyenHR3efngckWCuJCqumLdX1DiXyTMdoekEwswmWkThru",
  "key19": "4G5Wnuzj5cEczY6JXCWcsd1EznvxXpcQF9FeHuZ6xBhebwfnKE5gZ17bGF6SR5efYKPMNGJZAuFXbFJjbmTVLdRQ",
  "key20": "cgoaP5iNhg9JRYxTctMSmYxRiHGQh98aG8oXKVsvweH7LwFiR6ko5a3mm3EJnUkAtkSDaFU5osh98QemocZafKa",
  "key21": "6H7vEDEK8tCfTCcySUAiRYWQEqLxpcvMMKpHnVLuVTdmqLTUDqLp6aFnfQwzrBsBhN5YSF9dKcMKmyxxdzU7YsQ",
  "key22": "3HxPJMSaXB1GHXSURCe5DLWjNB1v5oeLWD3xvKpmGfENTQvL6wrpX9S6EdVjXsUZGarXzVp3JgRngbMbfQ1JHn6J",
  "key23": "2LPMNJxSm4igfpcfdEZZrAmiG6Hvj9BvGh6mNHZJqByiZZnsra4ETp5CcmezEtvKFhbNJB9JRbMWTLrWCnwS2PHt",
  "key24": "4WTdFTSNBgU3RTXqe6TH7k2znFRMMbxeJbbejFcmzt1CxX89df3YSEBmGDoExtGuskRMYt4arDjVkpSdLBU5pE3Y",
  "key25": "2MdpoPUrQEuV6rpLMX8q9Rss4qcsiYtLS75HVAxxHv6NLLmwnWfvtewuanZzaktEn4AfpcEyA3ArSKT4jaTF1md5",
  "key26": "5sey58LKaaD1ZtfPEERAG4KyahfLkA4CaYkF64x9LG1mn5Q9KAZm5L7k9RRS5CgMsLDUWKapia3nvpqTC393EBjN",
  "key27": "5mn6JYcmTBunP5JPvFLj4XM1tcMN186zCbvhDEhQDDXUiq3CoTaTyLpeQ2HBiPLm8QJHayoR3fF62sCae3cvQRmu",
  "key28": "56GEVBhP1CzGsaPx3v82Q7rd5qmiR5AUarqQFijMygrYMFvJdTVDVXqcLVM3QCKm92UXWQihEvCJTkYeyNpepqTm",
  "key29": "3aH6qKFjXNJUCCchERJWJvPpYz61Wuo4iNCXTrEx7bDE8UJdfBHUGx7UsLvbAM5jJSCS6YrXTKqV5JzQooLfuZ4A",
  "key30": "2B995o6jjcQzNeM8KycLztehuQdhHWPrTJpiMzyu4e4CUEL2eXAWS52gFpRNRaEpF8EgNRZVGZQsvhS9fRTNWxYe",
  "key31": "5PrP5KAi8CZEzi6axtWkdD6ioaoP5mzgMJw8k7XGABjZKKP655Am5yMnviP5wMNQQKY9hdDHZfmhAw9UoCH4Nf6V",
  "key32": "5GQkZ8nsm8QcxBQAE7R3ZjiAZMZDHT3jT83MT12MaQ2yLxkpfaPKEuh2JZDXaMBMh2Nr1tUGXvkQM7vgAUh9gcXt",
  "key33": "4LcvHmgxSefs16SmNhBvrw1Dw3dEFM2oAWBbvfmCR56pUtq6dSXhENsaknWcYofqXxujBTtpH4QQzx5HwoXtffS3",
  "key34": "3d5nCxyd1aJc422KSyyzPcuEpKzPdbB6rKLmpYHv36QZSXKUeCChxKUBcQLQmDQVAckfJmMCve8wgrBJinGyYkpg",
  "key35": "3XYKHDW7D6FciWjUFkKATGLH7JtKCK9ffpwK3kkk6GXBdEeZkTAKVzRRSZD7fcwvWmwJvcbGuc6nWos9fT3UrNDX",
  "key36": "4H6nfDNK4mAQKpwB7a2QrFvVt5E8bhYewZXrRDZwwUTXwEGfnqUDEVrxdMm3ErVMwEKAPQdvm1nSnUpx9ivxPWdj",
  "key37": "2in1vAyNg3C4d2kaq5ZyLKgbkGuMMoygKTZEn2HtkUxyGtzHduYSXxri3pKGedGjMvQc4biSaYvS88FNSPVusZaY",
  "key38": "4vULw1k8kSmMDUijeQW21bqRUhkM6iN7Ufx5xBqmpec8sqoXhfBarzt3cceqkAKiZQxUFHVsguYiARtY9m54igp2",
  "key39": "3exfdgn4bMRUgZGF8KiYKYpi6dDF4oGMQKqL91nxGgCCCHmLvyTZSBxG1yBHWc27YR3DGd6DsmGwYFB81eUjzwBe",
  "key40": "5sZpeCX1JbWfsbUYbdR72w1eABW46LFDi3G4nWG3u84pWFHvcyggUc3H9fVvMYqmPQ9nkn7jwdReJL65q1jDmqXU",
  "key41": "3fHuvyrcMKoMchTr1rEf6tFmRzNQdLrCfYyuqaEKRv3inZBMsYdNEjQCn9jyhCCkSDCXczw3HzuGVPHavm6UJnPY",
  "key42": "5H6o9VCJXQcJc18SwWY1mfyzkE5CRfmZv1YvkWkL3uU11ZWb7dH8Qgqa6uNqUzuKxQ3aK1xB3TTRHHSPdfzr6VBU",
  "key43": "5jdiPGcSryscFdRsbt7k57RAwwCS1g4xRYwCjQLM5ufZy61B6e7rYtcPnUDfVBg9o8i14Hgd35aTp824FEZrMPxG",
  "key44": "4HhbqqHzvEkEYCXJikpVkUodptQrmiBb2L1xTsKCzGYxtv6xY4GMaCJMbfPMPDJot74bCgwtnst9bpovdSek4eCA",
  "key45": "5t5YqkZ6Z1xJFTViPRKuci7Q8S6be62gLBb2jJJ5LA9jjr8khVbiB8Xo2FsCjf2hYqysXoQcqSromNfDmhsMVu49",
  "key46": "53EL3jxMuw3q59VkEine3grYnzSVm2LYkmu65FyoMNspH7L5x85EyASqoWoJFFgQP6DQHXwvanwKBV4FeGsM36z1",
  "key47": "5oKJ7K8vZ5DdzcZPwHircBDosKpN5iTwLdjCb2pZzD9qzVkDTS2AjW1sYSdrcvr981Y5cYTof8wEQJbP8NJadMVD"
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
