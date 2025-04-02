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
    "65pjHnXFCyZcL9ZS7J1BqzKXRA1B8ZmBUQ6Unu26iQ1N9mwvTHsw1oBwEFfT2xfFWn1T22kddrBs4uCHbtAPPLex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65oPvMB2yn67pMr1z6o7CKMKM1A4fQAQknmHH8Mv5cbSHgMnWiSo49pja29bbxc3dtAtiJTypT9FVjXC1tVQRjrC",
  "key1": "5hTunm2AgpP2NShXm1P9ZKxaXyrhxaNhLnH3PkyDgz8arpPUNBWBLpEosR7cCM9GiepC86E6imXcuxcPXqDrDNY6",
  "key2": "2QbMhgJH3MAyF2dvB1s3hz2Xzc7SjDuhqVtJR3EARzA2ksxn65ksMhrPk2QzFvj7vBprjXebim5ocZ6YpZ39SuaV",
  "key3": "4L8xdutYjUeMw6X1DQuL4sd45ThdsHbFxTjueBJaNc2ugnjaJyYHpfqqcXsfk3cwo5XtmNruDEWgJ4N2duw4oX3r",
  "key4": "N6HCeo9RwhfGF9r3VPFgQFPFEC7WuuEgwCrJUJis4NdMHbHCCnBhLivq2M2ry4mmoeuGc8VxBJmtuqMY7jCvPiv",
  "key5": "2ceWBioLuCKucnbPh1YdU5Bu5443QfCxB415CDe9cqtAXtpsap9TSkhHKtwoKaykSG5F6KoMPTmjNAg5JxXpVdQA",
  "key6": "4mYuYxNPdBbPVaXpKRjag37vMwCP4Ti98vwXKx4wCPix2ufzZfaLbn3y38sXgPrv7azQQnZDqWV8ffvu9GaBNRfA",
  "key7": "QwszxhZ2eeLhH2ut2nQmjoLQgsY6eJQj29TthSi2qi7MeqviartgpQGu7SGJRiHCYzvFPxxRv5pxUqENC5R1JUt",
  "key8": "3L7HiTCQQe5T7Fu5E8nsXZfECDDT8qQBnVavaqWMFCm7scoYSLV2CkuwexbxLwpg86oqQ2mvTE8ckqXdozxHZEs6",
  "key9": "2DwZz7a15qBYEDdfEeRutoXR7kXJL4QfG8zJAHiFznKb2F8VndVmuqyVhFAKNi5kLwDnVfWLgd8Nbqu9tTiLHNP9",
  "key10": "4eqZR1p3jKQg1GMF18V3sHCv5L77nQ1JXqjjcud6b94bbzxhS9MHLcWgMXsXns33VG6e2Bcv2PjjqrPKRoWbsTS7",
  "key11": "d9RY6aFm6sXnGeJe8CHe4iQzJtfeof39ngwHYy1eKgHBaS6PEjdGSYoBohfS9aQPneUUqUVnz625cbc9CJu7Cnn",
  "key12": "4wH58qfZe8xEuQjiTAvvtU4SiacArnrqN2dd6P5Cnah8WpYCwwqvczpeDbz1RWeMojSEn63hfu9NZ95W2dyaBqMU",
  "key13": "RjMB98rkBpLWEH5F7G46SZrwny4SHcjFAJRjJbWQQhqM3JowBNCG7wNeeMrNRZzw4iHEShQnUqPx4ogq39UmbuA",
  "key14": "3o8K9oGrbVPZkhMtyeW7wjqQVWfiHEeroNDTf7m3sZL81LYsCdWUaFiHZVG63y6KGzHi3wapoKr5ib2o2UA7zcxV",
  "key15": "5ghb7EF1UqH8Nr7APgGzhhJJd2RDUrxxNLZgb1PnkcZvKieTqc213rUszmU27bKF568jH5RK23CH84ofW8F1AA5t",
  "key16": "4ixu7j61Ex5Z9c8k8z54meFkcmvEVteQkKAWcT2nJ8Uss1WmDNufY4g4mX5QGpd3wjwtY2NUj4pGgvX9sFXiQhuL",
  "key17": "3r2Ct2Qv9dPDtP1B24H4y5sm5Sq5ZsejJpYaa6jDcQJ4j51pizoN26uimP9LNwARiEXbzjGZw53zvGRyxEPukNj7",
  "key18": "2dXEd2doLGfFTVnLM6DGixLrivcrLfnuwdaEBx54XYvCFe1B8rjmgj4Kic5k4dqAbkeU35g9XHcY2gaPo6tYjsay",
  "key19": "5TKMteUDfd9TstHXf72BEvK6sRQy25BvioQ15k7z1inQxJ18H6LjXwyDQXZLqkYjhyXJEEZQR1EChptTQdzSD2th",
  "key20": "34TUTcRNUXEKbvauePWAUSxe8yDEb64YTLMLE4PncbhdKd5kuWH4dn2CHdfsjNV67sKreG33jv8f6QTmRZKee9ij",
  "key21": "4Rme7Jk3UijgG75VpZ8RnwiSkFTQVtusD4qoKNQkawsbLgjA4Z1LUZDYSJ9HWG3jQu3tGyVYpS1zUHusxTgVGyfB",
  "key22": "5umoEpGSKkqxwAwRZvQsM7kY8TsLkZWQyzxJ5upK6f1zbJTEfMtvXxrfrFxaujNKRXZJHyVos5H8fG9wBihjbiGj",
  "key23": "3wiCyL88Wpi5VyFFwS9E7fRY2AtRAoFSKoqsPQ7jhh8o62FTwhbXv2BdZYNyEE5g7XAMoTG1BnbNbFWTpBhPXpm1",
  "key24": "4ntcpJP5AsCdWoPJBr8LCW1NZjfViLNLhRH8Ccb5p9p3Q6HQT8NR5R269V3jtvHht3AxSjoCWQEFV4tojwqD2Fz4",
  "key25": "2JLCkfU9rEzadg8fRKbeSNiwvEBTCCUAc7CTW2EHtThcqnpYs5FhrC6UTEuYDGaMcuQWef7K6gRrZkTzNDNDoZ95",
  "key26": "2vTEXuT9KLpTBJAZHXK7UyEH6ddKh6gqKDmwCMgncDyummvexuSiujbXWE7Ki5VxDKKAhgHnnhg7JdncLP2i3vhY",
  "key27": "4M8b2ERcPghZkXJGwLdVjkrsMApmfzWtPVq7zXfzw6vhmj38EZ84pRBUWSVBX3WNMoWM2qYBDLipPXqLZtH8CUgg",
  "key28": "2aCiPm7YPRwadv86PaFw5rQAoHNVupYpDMm8R9kBnCTwwqR1AAz1rf77REzuaVmjhyh2m8jCyL113JZoubPS8xTd",
  "key29": "5zEmQKsoE9Tqo5Ms3VdkdTdFwKAzvi9VcWZaAGGznC6W8fQ8H3qkyC3EvKXEeXQqZkWenaXneYncFm96XTEFK3dW",
  "key30": "2NovDuWkNEu6YB6AnYgjs1SEjCxwbkgwhJ4HZytUsfteEFoezqS9tE4rQJ6J2SM4TLM56neLzVkReFa61gbVXMyz",
  "key31": "3763FRWPALooSzvi49PZWNdaGmVRyY4UUBGZsHkn2YNaAVqHPFQoMEJPYvqAJJRB8jjGTX6h71A7irzVaxsnsWS7",
  "key32": "5oNU3Ly5LEwAYozzroFdpwecAaMZYceYYPTuKaLPbwpKaEjveLNc4oQxDjLprPbkjdf2MVWcU7LUvPJhoGxkcX8q",
  "key33": "5KsfcKNy2xUxVwfDZxiauA3pyeod5BksgwY1SBgLGqZ9ybd2WS9MCXjFU64DwBKFUVXFceMxoR5x8HT86ZUp7zrc",
  "key34": "8wEDJUUYd1n4ZpDDLVnEjQRXuAmNDsGVabLwNqdQd89NYLZFfueh1gb2zZHyYG7kDNCcW5BfDXLc6Qti4ciofhM",
  "key35": "5gm9aX2E41D3eGi2Xvf4He4Nj61ATJ2Txq2o3rjHRX9Y2efHcjfdgSY55gzVkgHh9hNMZgPLBY82huuTTLNds7kq",
  "key36": "5wLFCBrMj9HqSL2Rs6Z5QQNwmuNweHdTnKxThwyhVUromJR8kqfm6Dd6eWJoitTdS2G1ZGPtzkAAkT4edNeKn3AP",
  "key37": "31j8dY64Gs5geWH2rp55YJp59pnroKYkCE2TzPV1idqf7QwgeGLD526DmHYohKH7mP7FgQCNZVCyVHKFJL1X2nio",
  "key38": "5biaBf5MwSNdCp91v5L1YfAV6iyp95Rk4mheG518imMgacAmpZs8VzfjeZbbDDRAM33PkayB7igB6Cvktrk8e8S5"
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
