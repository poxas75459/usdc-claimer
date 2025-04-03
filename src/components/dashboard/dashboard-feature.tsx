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
    "UBLK8w4KXummNrw6yYdPzpeCmHMJLxJi792w8DHh76UoJUqbGxedcCsmf52PvgFjsp8dgzyzosAGEBY53jzYxPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c1Vc7FA9ppuuGSh5LM519izfpX9kqdU4D3fTjuFdM7HuhLQLNrNvMQkXLVVnynoQ2NiTdDAfg5iPY4WLFLp5PJt",
  "key1": "A3q7wNGr8VhyCujGDagq89fbiFS9UKAfujqM3TGtXN9hERZXhp3Vy5PSEfnMiSVGkDnSLvASq87awxcfWBuLtWM",
  "key2": "4HgFsdYgrD35cNsCF1BgKoKfosioq6p2a9NSBq3Pq52HKDwQazj4eQb9ZqcNjgREZvT1yi1JEoHcqaxxmg9AtYCX",
  "key3": "52mbDtCCcXrf8fcbrQmHvXM7hw4QXGbZM6U3y8Mcy11Z46ntLjJmKaeodB7CP8L5Ja7NnwwjuFgbSF42KhYarLMp",
  "key4": "wzQQqMHVCYK5FpjHmVWTFB3XBnGLFX1eoCH6xS7w3phXSLvJFvKPrs8f2oM4gLVgk2s4jkdEebcrZ4J3VAQCX9n",
  "key5": "4qERowpqmdaTvLjGxrLgfje3AQWmoJbVuERnpcbfqvsMvbKeyyVZwA1WpVYQw3akwQoVSuyYopB4UPqKzdp2K5Cz",
  "key6": "Jp2bAp6xMwW6SMjnkjJVzMcFYScU5nSqxddeTHqkPdNMt97852qZ7MRxzB5NKQTbS639JM9hwBF9sJNfzjraT8E",
  "key7": "4t7vfQMvLvrVNYpKfZ1EKRTsuk6peTcbULRnCKQoSDPSiARLvizp2jX78tLE5PsERnExa3iDaDAyXNK3BGbTWKxT",
  "key8": "3stdv7EuLXkPjkz2XBWvdUA2MRB5wdThP2oUicsH35qDCDgGxmxpQ4EJYJ6Hsx7upKHcNfhuLzb19vjkHRwLdZeN",
  "key9": "5ZTK7fxkJSmRreiKzfWXHpwRKq7GCKDmEfsc6XrWTXLQLno44bDKowZnPPBGKcJV32sKXsTXmoEG4fJnAguF8vht",
  "key10": "2weEvSQQqJ6fKbPRLfFxCMUjmL41pmH9V1RZ9p4Cbikex7uisgoyk4qWC72ZBqauUHDfWLV5ZqeSAxmdr4xGBKzw",
  "key11": "3Cca6kiDKFwWTGu8GWHGLR2rjEr5Er1Va9UdP4ggNB8JGEGbYAGe6JWGC3pzZoaFunU9wV9tjMEP3qoQ8gGQhWiS",
  "key12": "34uFYDWZRaSVxDX1adTLWjq9FqiNT7eD49ksG78sz18HsRXUXtjSmAiNXzUFudrC4ppsEyL4x35EWhPNccCma3ga",
  "key13": "2XyVcgvbbX9Yw3ybLxECvyff9PGiAgAJFyBTUTdeYqf8obfxicjF3XjgDbXvGNuExZfaWXY2C9dEYxMthpiCbjW1",
  "key14": "5jqmpqGfKvnFB3BQKE6Xs8CrJ4oaLxyudvMFq1P3uWfrG68zP2HpAwuptS2sixRypL1j3Qi24WWb5e1Z8DyUe9ys",
  "key15": "2ojdEA4TNUS7nDGFaKXvibU1HEPCoD59BooiLahUJzaGPZMRMEZ3qoJ478mqRPHcJXJoVUK9ugz64pYCCHz6TG2F",
  "key16": "3mJjqM3sgeMcVDShEZBEKFm3PcNPyDCsFWEVwwXQSS4XdXoNAtGpNW9yh1szFzrkmp5uSBbjvECgHGBmzDU4HLjv",
  "key17": "5UgXnCHqXBwHDtDuQSKFxTBKX7ym8DoumfJGRS1VhxjRZ51DjSjydzPRmrf4XYAFuEwHRjBdnVJGhgwUTUSnP4mx",
  "key18": "3A8LJGVFc37tFWU7YG5oAyrvYpgW9aoYgftXKy9WiBH6DVHMo53QNi9kXfjj5dncF5ibvJkjfJFpUhCNvNbsBgXD",
  "key19": "2bF7DcFEupNFLXYcYuKKXx9FNh1pjbHVpBeFDeq5k5PqmbUWy4Q7XGgqQdJxoCFZj5vvdC2cyn5wJoL8RZizuZBv",
  "key20": "4yEhwQkcrFxWxkkDSfKjDBZNKNZk3DacrdxdRbqTngJyABtoyErYAcvhbQHoqtKkiGUdo89sBL8qoVLFASzFAgP8",
  "key21": "5t8ehhrdP1r1xFQ6jBQ2BCdTqvW6hpGPw4WGrQaEais8ifCNdsRnnw921gkcfJBD7T5GnARF51fhrcqJ5QkJTXD5",
  "key22": "53iMKuaFr9UeC4x5KqBCffAYWMffhyyiMLWd6JRjeqdsV27qq3ReZJqfatxMJb1kMsQzqhy8x8M5HYgdBvipdTNb",
  "key23": "7qDXm6Lmz9pmL9kGJaTksUnJYhLMaferWRukp62w66hCKXzT2ZMwNYSpncAdUPK2hmmDdsR9mP4sDiETL5JXejT",
  "key24": "5YAfNEGpNvvfodAEpfPCELPavy6QB9fD9NphssdSiyNkFb6uxxRiQywzfjyN1KGPnCE8ahG3t7AexKDXD3MQout9",
  "key25": "2McoFnD15LbXnhCxH8RYckbUm5rG8pkSpX9AEuru1b3bt3pq17UUNmqgeq1h8BWNYZW1etip5VHaosoAcumPW7ML",
  "key26": "5ZjhAXhvbZtirResQhfUnFKWqHKShiG2ShRJAPKGTnQKtMammWDhQon7syLSTXwQLEDsfzHa1C2mLciM2cgNrtTW",
  "key27": "VAp5TQ6QCrUghvkWhaMnfeVvN9oKV6KMqizpH8uiUTpZbSb9q2hnUj1HidajTxb8dZ5tjcdzaNrvuyEwM4p7v1s",
  "key28": "57oPDbRq8FSFJFYaPAzfQWVCKgCrqD26YCzdjBwFRMtRfTxFeyDWD53MBBgbBeKvMw6thoQX5TtdCb4KvezQsGLN",
  "key29": "458xZAXGCxYhpzyoeV1TJT223Qa1G6n9W2SCjPQDTygtYomRY9bLD9ktaMB9u2iHXjpuCUNtgR2nhKQXEuNkfE8D",
  "key30": "4c6h9cksZzdA33BTkBwqdRqwScWMLZGWhhqcnWNL3suhfWmw7TXNgrw3nhJaJM7oVGLTxZu9zyPHpmKD1WFb18Vv",
  "key31": "4Yr6cnEZJ9tyKpKfsAZeZDDiRbxL4MnzVMqZNGALR3mU56bVJ43cojArsZuBRhfBr8dFL11iw2wSLSpBeaVi24Gb",
  "key32": "cpbzKsEUQKDTokoeqaAftBie22WnM2jrLEAH25XVGhJ8ogXv6NBpqKdNodoZQ184zQirosrexGJ5yoyjjXfpBGa",
  "key33": "2DQv5LoC8u8zw1PKH64bfqS5w63sy77aE5JsYTg5jpeKoZ4LdS5bgVeFvbPUsXDHR1zP7m96rqh4o2MuN55ozouV",
  "key34": "Pv1J1HLLKBBzu7P6ZVTNyn2nTaxzw3uaE7GvRVgio46cHht29synhr2Q6GnkykN4TaZYGjWczUE1QHqxbTox6R6",
  "key35": "4WHDW5pGMPwY5jb6JTZyAqKzXuN6TF1vZtdwnvLfRdVyTk6wsfxL92PZn6LRagXEGdHbnMd1QCY1bDZVY672jvN6",
  "key36": "dFQwhD95MEQCrQ5vBahk4FLN1FD4CbJ6pZQMpQrHbMLvwvpEqY5NLvTh4PxJ6fdjsRPdnU6TcPwXWtaBcPeAZYH",
  "key37": "NGtEqTwgjsVaGXr6kbuprPdSAzUbFaoBxcqPzQgjJSm9imkMwByMDqUmittLmCggnh9xGPoTvYczJywXjVP5wGF",
  "key38": "5RU5we5eMYoaZCriwaHDeHr1byNT2uqyAnJj2G635GDd6Ab4pRxMWdJM85QPajxz8CGFgaAonfMN854srzbaDboi",
  "key39": "4figWCDp55XCWziT254Rf7bvo6brcuHyEQ2GNDEWF4TZRki8Ti26EXP35zdzzNGnnMDH69U881hqj4CH5rZT7DbJ",
  "key40": "2KF1FA4FxomAwEx5nsFU7g4goQZH3T4LRDt7xkcamKyLP8eWWPu6TYP4gJrjrxPywLoKrLvATTpZRH5wnTEeVp1K",
  "key41": "5Mpcr6oMnVx2oRzXkvMMKmYA9uEPpMeNbphqhD16b4QQva6sXa4cTZySjXGMZPkkvvjiobfqBprPWvq4NfuoxkM2"
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
