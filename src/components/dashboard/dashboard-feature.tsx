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
    "4Cywk7d7weJh3T7Fnzwuv2QdzDTNwv8R4czPwnvFqHVJu4XEEokx9dczoudd3pfK7Z693Xryn5eX6RGdkhj7ay9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VMu5y8jH6b2QYcU59KHUaZPFbeXTMdbKTrsD1xE2p3voR82qm2BU61zSSfV2xKSQnG8MVPk83du4eLxzHinR5MS",
  "key1": "48NekEixqBKTehBNnYvtY384hdyCR5afZBMWHyqtbXqTQmdKt7GAke5y62Uec147by7hDnCbHm6gKBGHKicCWJZd",
  "key2": "fSx5JGUdkdNJxFCwmF1HW5hyWZn27e9dChHCXqNjcop3aZCgRczc4NY7JaWY7mDrPaEPs2vdzwtD5sCGW2E8NFU",
  "key3": "56L7aKzNT1whRZBTk5uU7w7yxueL1dET23V1SLSHfX3iwbKB5QSx8DNS57EAA3kCV73auTpnsyZYMiTpWTk14Dyh",
  "key4": "4gmnXctMN9pCibRrdC7f9zZvtCSimBbbp3xDFMLDruScBrDwUT8LzB4jXiVmJ4uNrDbPymX4bGLpThwByCCjiV3c",
  "key5": "3ZGs82EVBpbtuDGzQfgcw89ZM1fANBjnSiWWRgPNJRDneVFsqUKDtLgf7q19AC8cK6PGZQhn2moz5DK2ELSfrCWN",
  "key6": "3P3v1toMThvmaGAW4qLaQcvydirtzdba9sqwzWou8KJ9qWA3uG29tJAWtaSvTYEsWfGhm9XQS83MmKWrq96MdFGr",
  "key7": "4PhxNpYJC1XE1heh3eSraV38269mcuHm4pJw4XBf4UDURUKassCnyKTnLJUGHU7YLPrSx4iY1y7amQre89VcEVuu",
  "key8": "4VVSAXvo3Vsj4jREswJoTpC6iHNZEQbiYoYwtUFzJg1tyNgNdGDEJbbF3itJSM3bDHftbhWZUdP4Yysbuvmqpv7",
  "key9": "5C9deiW85rLSqeghAheyrKL45ivomPnSqsWRTBdHGganLny7Q2XcSC5SjL5694oD8WNAd1hb4oVv336xHwfiT1id",
  "key10": "3iAZqvVegPnRi44kVfaUtmw53YotoqbxonCh6AxSUvGMbXHz7JjxWPxwL1BWXkZNQ1MvzmbhEkSqHLtNyCKdknvL",
  "key11": "3eqxXFPiEYR79ue4PQXk6ise6JYNgDs6zX2nRus3W2ceZqPwyTvX4HvHwHs6PQyZ51jSwvywK5ykrU846C3DBscM",
  "key12": "5KN6PupS9ajA5KAq5DEPof3ej1Wfh5xTfkMDUCogtzpi2Cvd6YEb1HXZE1XTq3Bq7TRLdA148npSB1NXDgQkXyFM",
  "key13": "51aqdtVix8o75bspccBisMgEcr528TfW53DzqcE76qHqgrGRaNxLWQ6hUTeZnLY3eSfpo6DP5saEN9hadu4ego89",
  "key14": "2Y3ATikYhesVry81XpANR5LRm7oLHJ79XmCuhBzL6cKfSuvxRmbsYcmiu4NuJrgepNdBfJ6n9i6mV6pKuNi6N9Uu",
  "key15": "5p185AKWgB4QorKcWWpeMDGW5hHbdnreVbKituxRwjatf5eqKudcVejqU9P3dbC6J51AjqS7Vh2MnrdZhbnhMfc8",
  "key16": "YLEka5zvYhpNVnC9gFZE2jFdyTRwdaxb9dFdWzoL59GL66CnZokyJakFbzg189H2oEoq59hdmCHtJzCvVFrChiY",
  "key17": "3gmLFq7fjPcYYqAD2ghzRGeNRRWocfdGUhm4kNeXgdR6Zg8GDEfFZ96QBAoXjmtt8uVf4Q8UMV5kXM1Peq5kSv14",
  "key18": "z18LNYWidURehFmXz6Cj56cp4SJuEah7xqULQwvyyfPUUSTjQccRBhrMNL75aAt2iBkMFKLao1CMaj2eCmdrLdy",
  "key19": "3rFRMZjUFNsMTZekB8Qt7hFzcnfuUEUsE2nNvuerDuuJPdqACkgp8HQ4v8xK1rh1TUouVsMfDP6evwaVvTvgbRRq",
  "key20": "5CaaAwoqvLAsz9SFfAWjsLyhXWQhofVh86cdLDA4SSpLM5H9BKT3kMtDGygeySVG4s2A9kACmHgd3Tt7z4pGhVAo",
  "key21": "3BJyswZhRhUXDu87hYwUARBY8vN1J2krKuY8XSTafZBmW9Q8ZWQZ8b7hi1HmkpmhtqVNUQH83dERqQJf3rSb3pKW",
  "key22": "2FN4xjPv2ARBehLhh6eE2NtHfXmL6brr5oaby6KqmwNb2AsPQH7Hc9pRJXb46Y9FcAUsUbE5mw5L2NuRVKjxNW4t",
  "key23": "2c33c4c1mM6QEchq66jTs34Rrj9hgn2GSWBtJWeRwpoJFVMbHBy9WinzhYVbrRt4VnaXznS5euk8CQhUsigiX3ie",
  "key24": "2PvuCn1VQeRQ1pXtPQVbKYcamhbKQ5zYu5XWnyQ2HW8o5gexDEiEs4K2eUiUusTvWnxHk1uHbhptVDjzDNVxKMeX",
  "key25": "2XU65wKwNorfDvoteeYC3ZjpaEPvoeGrLnGn2CMRYoHsgRCpWjBRbtNegeV2wmdYxWBW9jffzFHo4AHoA2b9wmXs",
  "key26": "e9NcUpqUmtQaBfqUSt6fu65gij8XiHmwAmgkvSYWotzEEBzNrexUxKodQjrWad2gPXYkcppJo2p7Y5qN8vL8eo5",
  "key27": "5etvT8Q5MfTHBQNenfJv8Z2dbS3f2vbvXehskXLuAcmLrcZ3yfUdJZX1pogJNS2kj8kF1P5i3DyP1ifHi9Sk5LwT",
  "key28": "5zER5XxRYTbUM65k5HMpe2f3ZX5rqEWm8Rstv29tD9zKNRDDasAE6L8ZFJkAdRr4vASJS2vHb4ueRh3za8j1W4jq",
  "key29": "r9hY8RvUcpP4yboxydnz69v8fLFdvZpZa3yJjPC2HSekLoppVsqZqFQxLY7A1yzmF2F7ywrrqgiJkeT5mMtT7jM",
  "key30": "57473e2TR1qfCQ7TM5db4qEsNCR95hshm4WUBXEMwZU7VLVEhbLVatb2WccrfFfVEWxpbwNCtkVtsPmKpwrjGhBH",
  "key31": "bRhiTwamdN5u7nmiT5ZfyfGxpfcFZ4FdjpNN6JVbQ53diJSobmVJnBYDBzb9HC4mvJ5oFGkxNdHFEzidNPmgW5N",
  "key32": "2eYw81YJ5mP7ETpePk37fg2tbohNEcnyVdhtuby2v7hp3HtVh6q5chfmiPtawTnwvfgKymHeB2WRkN679NydwLHb",
  "key33": "21sRWXTsw2Fj1snHahPXih34Afezv4t4pK7fiQmJaSTCUn3ttrzoXhGMs5gVYKFHLspgJZsL6sz8rwFk2horu9Xp",
  "key34": "3UA7nTqM1K2NUpLfSDdKnjJU7cTvH1W3no32c8gaP1rVqM6VTY2VkfAL7DiuxKKEBoegqn7JnECPi9EmhGHhw2pZ",
  "key35": "5FkAtH2fnwMFEWzda9NJYCeKuzxzJ84Mp5c5y7Z8zjiJCdQuor5gwq8MJTXGYXpxnBYCispLQggohNfEUAeXwBbE",
  "key36": "2taXi8uAbCRZMYzzLVNfRNyNKGKDRAxgAC8XajY44Z2ZVghUBW83sH4EawZmxfV8vrvQ5sf9Sw7ztsefYp2FnJpE",
  "key37": "5JBXC5XtCLHd3zFtpPQhUuCch7Y2cVvk3SseGJUyqvFeMMNXV12fcaWPZZj6R1SPuH7Tk6RekS9z63kTHxDhJCv1",
  "key38": "2dhset2vJuvAmnobXZAuY19gxDMmFvCPsHEaz5DJNQc5RDVERkPsSwyeqC3UkkPEkwdS8Ww8FiKtmwNqX2AeGDd4",
  "key39": "2hfh8SvRHYu4WKDfFTtLkyc1J8YqimHUY4FnrKAEvyYbBnauXjvKDRuha665vHKhHukGKDLEprdtWirdjV6tctLw",
  "key40": "21E2F8jmNMy3kMo4PdtAPmJrxxe8GsPy9r3fc9KzN7xZQZanqAE5sWKa2LToJfCfpZiQC1tMJGXMLseoXzYS61t5",
  "key41": "5vFBSQWUxoygK7MrQk6zwMYsMXiJBnbawf7PTH54iiUgcxMaDPgKCQgKGEArQcdFgsL2itdRFRiTcA2CaQWrZe5c",
  "key42": "3iT4fUo7vv7xWg5nTKCBe8TMz6eetKyWCLWu9rfwVnNqbpUBYJ4txR1sZMs5aMPNGjceYwjefXpYafU8chZ3qk12",
  "key43": "122fEa741buoQTcUA6b61US7o6bhQHh8MhU1zMihPYYez6ZDZpn4KTW88zxdc9dZgAeWBdtq9heADwnJNQd22KZZ",
  "key44": "2M2aLCTNR7zmqZBjTismN41gkta2SejaeThpr7truM774u9TEfQ9FMckF5aXR4WtqBJQd33n18w33dvfHsmrj9hQ"
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
