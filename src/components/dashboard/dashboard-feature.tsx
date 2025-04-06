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
    "VmNCDjLmTj9VjUFotxE1apD1An5aetTPgYD6moN64sewb4W7SjjVUYJVMFUf8b6m6Y4HZqBtJAPqtWRGgqVR5H2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sjBGT13SGSgBsN57h2ZCuXRR6DX1rSc872rtsK2mzuoVnUeznMkidMkzn6bnVX6GeEq7UTuh91UTQHgUztPwMUz",
  "key1": "2VQmUuRNuG1hiHR1mvuQi8EYwEfhKdVYWnGmvDzdFvakYPMoDaQagAE7zK9wbqskySdFhVsrVu9HbdNk5uP393Yn",
  "key2": "NnvoXq8YuoMX7aTL3K9Qd6DwxYnuAfbLct3fL8QhpEjSqNiz3FqF3UZhrgYFJfRH7jouNeiQgL6nZUbwbXGTa2y",
  "key3": "5reoZGu3wDWThjtWreDThpY73RqogSsxfZUzkZ9YGdR8Q5iwERaHVcJYP3ovfMcHxfXesbpKtihxa5ohrDePV27R",
  "key4": "5tAdg5pyf2hqAUyyHGe7Xv2B2Qr6XCvYucsdF31TXi3H8hqH9HFshAbgzZq5hT4Foynh4K4Y5FxC3U68hq2EjNzV",
  "key5": "2oKQ8vGonYBptg41NtXY6fhGPrrgCPzWJtCJGfJHEV9JWG4BdkGBWagmUGn4GTrMHy3hwXDsENk41gqixE5jyPiq",
  "key6": "4kiXVqkWnPc8j4PqSwhoQmJc8VwyjZ1sG7D2kFnQxUuwx7K2hvN43Ch785NKgkS1bpPGHKnUe9MQJmznjJVGfVDD",
  "key7": "3EBuY7ZoX8pKYbmYTCsvfBbGqJR6ate2Y34g8X8mHcoBGfvBNQnA2mEodEEYz3oawhUzxtPQa2vcZLeWhd97ychm",
  "key8": "4o6jRc8zTWgCZXifadULCkujokVoLpVQTamdcE8Tpd6RPJJuqxDmPUzDcMDRqzGHKYg5RQ1Eu77LvvdFB3hp9PHk",
  "key9": "64VaZqmovLCtcG155tdnD6hJp1Pk7Yr9A4a6SPpkLm19hPNT6gckGfD3CiFt3NEJ7mr3JbrgQS7XAgB7dcdFfPNj",
  "key10": "h61jL7fTUG5sje8fXM9EaECYbnyzyQWpfB3gmr4x9xjs9z2uGrbHPAUa7d6cw6Hfp6bozhpd7TxyJoa8Gw679DA",
  "key11": "29f9N54N9mKXaiPBKQSVhXsUdpM2rdPwTGntmqbAA1rAPu52Wd7APjQfkBNKmKoHYMiLRdC1sDrBWjgLrFPxXae1",
  "key12": "64EFNDp7h4yd4yYyr1j2eKS9JnVuuPjqzNFxphnz92t1DCiCurymMmtLaZENGZ33FUMaCvpWdvytd8VLJsfqXyaG",
  "key13": "2Smeoy6dLqHzmvHDBNgSb2w6pxgQzrMcjoBVc4bk1eKf14RRuDAiMxydWpnWEbE8wotH6T6sPoB2S66yYeb2U9Qv",
  "key14": "2qA5anxCwVz9X69Zv3oKYYApV7ch2idQCdys3pZurPPNgvxez7zTQq3c3mefSvj8khPb8HsmaYajFeeysfE1wuhe",
  "key15": "67J5RdHiRb5igwm6SCmmHoBi49xH9f3i6yeMM7vnDtXTP1prUx6EVWCa77npUv6cNNBvuvT7hK5ciVGtRPcSUuDp",
  "key16": "2t5fK6YANjvKRgqWkCFMQhEasRzoTTnrNwcLv9AYJdQeA87gC22pRVG2XnrxAyiaZXsQSzsJ84aqebgcsy6rYYd2",
  "key17": "2rW3qz9ahAWjvLw4tyBRJpDNzbCSuk7Frn5SiGon5r5YZQsX1GooqG9EmPQkBPW2foZ2qyYmVKnfEDhGjCcq9SWM",
  "key18": "3Z7N2bmFZypSm1288W9QiVfhzH3xCTpTGZtZ9UcZnJtqFMJ42QmdrjGC5sJ3oL4xrtKffr5oQExiYvkvQSyTbgvy",
  "key19": "2wTHY3B6iXefWXuGiF9dQuDSGcGkWeYGxP6Q4pnD8qgoENHzFFc1PYm4uLgZSUeR3xXJwBeLCvvhv3f8jyHodTG4",
  "key20": "25SqSW4TRbeWUNnKNVcemZDr35kAGqe6m4qCbPc8Pe5w2TkDHGSUt7kL5qeDHbxyvRdumim4wb3qmRy6hCd8aFCz",
  "key21": "2oGQsRXzyg3YwcD7nDt9amsn26RD1bUkwcK8VGDTGqykRxg3SEgznpG27AVivXsuoQ93acSMrotHFnDtVZ89P533",
  "key22": "4MPtxY3YtKwW3zoKYM9GLcY8S5n9sxjii6u5k2JcQYkJ8YyHv5gagyLakTsSqFXRTTmWLf2MsoLs6FtsUfvHZJqs",
  "key23": "2QkAzXtnpveqBL4RuUjaac2aSpr24ckj4HtzdHKPeR7ncB1fHAxSaFB9aGgYANf45qk413fJYPg17zmguM3VfWc6",
  "key24": "4pUcwYJAarCrgasWtmttXrBvwyLWTZtTqSpmhK7chfDsYWoDcUtHVn22HjUBUU4GEzSjSfRSKPD6EkSeLXC2dLhi",
  "key25": "3w18YBpG222VBmX2RTqaoLbCLoMNwXb6SKVMXfBuLujmNVUXSkU8JFWxg2AbCvxGrwx6581McHCngHGbUKZUfWPC",
  "key26": "5PgmTvZTT8zo3qf6ujnKEA6JYyo2BjNDTNBDaN65vt87H6TyenCqtNq3qwHn855u5odKpJydmHQjV98LmGSrwsA7",
  "key27": "345f2xameR1BR1LdNnwGeWmqeFxSbHYFuTCPg24hJMKkqRHsj8HS358xjaEYGvHZX9WFMoWvSPCeo2FYv9C1Rtzq",
  "key28": "4QLA35vGaLj4ES6DDRHBW8D1eFZX8h8RWTGt2uAx8vVTbLPZDYto8kSEkGvrzt2SwheKsmLPJiUvaQg4hyhEcUj1",
  "key29": "MvfRHrE7fBi6MFNXAH6hfYujKgtydYXbfsTGCJ3zgtNoY2CZThmTKjUaiSCWNLmxCwdfcSkQQ9e6jrz3jg48gsr",
  "key30": "61aH7h3iYrSVNP9eDoEPVhzYXYhoHdxzgc4D9t5a5U7FW1ivt33UAwsj7uozQc3f9uEnzGnivLPgf4cpAXLtTcS1",
  "key31": "2yCrrETWYorkVnU6MKSiVopaVUihM9EfPVNExPBdtMCYMdZef4gAapPvKTRQzUC6hJb8Kgt8PdeQQreSLYoFMrFu",
  "key32": "2STbXUTDZREN7dJoscAVknWZAkjgME2cPFW7GwEXc1QRXJ1QmH2FPRLVgHJ7vCnrtL3K5b3zovkgSJLoG3zcD16U",
  "key33": "3EadPaedsmTK3zde2Twps1H6qZunkpYTSZsv9R4zAhDQuXAkmiPcCXRWqperT9Uv4NvPBQNKQeRnCSakMby8N4rY",
  "key34": "4gpYNXS4pkurbCxLCfL9pigq8zqScD7bgEUc14dVBGJVmvkgnPHjb85hcPmX5EJVqSBpt2qcw4ddV3572Tg76oxp",
  "key35": "6D2rXH6PoL87ZWHZTrVyUA3vSnTdVotCaKuv71Sq2i44Kiw916zx3UjpGpSoxDAwrDfo7NgbD3a4sYxqqpi2Vp7",
  "key36": "3K7afktsvyKtVbhiAY4WnUiwaLsJZgKKrDTTbqd3xjHUiVLUbr6fYg9uxJVFBW7eHXwCu58iuZVBEX7vUSXX99qk",
  "key37": "4ApZaSGzAcdZadDgxcQCE1DpQz9mQ3rR7MnFhdgW9Ty2BtfU1TcBrJLgEwiy6vefD4rxc7AkfRbmiJ5aF5SgfV29",
  "key38": "4GgvuuVejsS1z8YpEgVS4DJEFaE3kkvN17zWtM2dqz5Pc2tH6gcdP4kHxVrNgnAz7iY1NEfKsVpWRg3nyWVzHv2k",
  "key39": "23ZJ9qu6pPUD7HrLRSi5f7RQbNNKJx8dTDkSrqaQEedwN92AQWJ6NDzg9fcLG8ofwidA7Twx91gGnv3YZEy9S8Sx",
  "key40": "3UMEzgGv5QtJTaPA58m3CpDggMNrHp3sPzGJ3hnPsxdYLMgKdzAi8ZUy13Qa6DNDfZBiyTi762NeS6jzwSZLw1yU",
  "key41": "2PjHXdro2Ndev6fuED1JFmGCWaK1EoG8PhZLBLauyj8X1884cQytxjV3c6sKcos6r7ff5vFCsrchsgBe6zsvDedL",
  "key42": "28Umk9JCwMnqCmobzvCRtaTAij3PjpCfc4eV2qGFXw6CwbFLpFLWebNLZ9nFUbLMhCQPvPt1PGMomGSE6uUB2hBi"
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
