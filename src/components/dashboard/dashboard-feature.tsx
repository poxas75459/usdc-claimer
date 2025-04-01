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
    "3ZdvKBX6NtjLB5fUxyzTzNPPR9mK9ePrKG83PThJC5FHQgUTeZ42DueKZwjyZnPjoHrweW63euV973oHLUrvKePh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j6soMk9eMH397u4FpEmsWyRhYNeztj8nmeUhSCMCopJS6EWsuVSujEtLKQBb2sDUfPi6hYMs1cG1LpHSzco2p6h",
  "key1": "2VPrdrCwFmFR21TbEPqtZ9athzHLhC75KaC7B4uw4mAJjfkjw2LTa6bpGjK4XHnSMwPuspVsMTEJFkpjqCM3mhKV",
  "key2": "5VWbzg5vLFAzxuHZw6N4F8md3J8UjUMPCzr5hV4H1kMmyDwWvxxmhPEXgeZ6chd5RfqQLA2ichc8kGChUCCPu2Qa",
  "key3": "3YEA3unaS124S6pTVMeBVPiCuBBW61Tozt7mgi7BLsmh7HGjTF3zQSzP1HwjdSVRKNGagqBnbXy4Fzx6jAwuFy6w",
  "key4": "5w6iKHgDp67HKCpMForL55dYTiEhG43pEq9dny2Bi1z27JPzg3oFTwEFzshhFDmkw8U3Tnie6bN5oFhAwE4K8Lvs",
  "key5": "fisKKxGbsuhTe7bfXTW9aLVwWqbhUKB3ExQR6w47TMKw35hZoSykm3Y2pWBC6pp2YytXPKFnYzqJmg1Bv81gUny",
  "key6": "6zqRotoZNShg882NQBNMurDacbLXdAtY3g1P4PKvrPtLbfxpaR8TbBXt6258hkMk3kWR8iXdtpyb1gPf5qQNWar",
  "key7": "3Pi8zxroJtrB2r1FTWZoisLZGjpM5oRYHF9eoJJmdubDyPAHtySuSSF6faCFjLEeY1dj3UQNUYdcvtQWtKsdVbKt",
  "key8": "2gnNRqJfZud5S9QAKiEVzp5238ErYiTReKmBGcCqn1uvjPMdDAxbv2cEFwhcKMdTLkJ8PzKSmgXQindA9LtUMoqM",
  "key9": "25LM6EruHU2mYnVErUtmfoDodapqqUSQHxZr6LJgEq2BzbHpUA7diQcLkCbxCcXsyY9pNzgieyVSXdWmyNCynp18",
  "key10": "4n1hBsjz3fse9FY7UDK7JHToh4SZwsnWwTwHRZkGfDvsD6WdNRUjRPvv6EpkdYuGAXSaoPunv3vBseF7Ha7Woyuh",
  "key11": "5BD5hHNeg6tDzNQi7mTguZHAqVzR2t71BV3QJXAUcWwbx7g4CaHwtYacVQWeAt5jD4fz1HQEWA1rgBA49PDwu45w",
  "key12": "42bKqdRcavTYbSu7YHnZVVksvRWQwjk7dBRbs5FmtZbEDJsrhLyNDLyKjiVBY7Xg28XiUipPcLAYeQ9VNgMjFTte",
  "key13": "5zsbtxHaRxxSjU7z95pSTZvuNpMCn1sz8i6hNPsExdJKUDY7Xth8EbgNGB1t3NDrQ1hQuLsHvme1jwXbwVsAKJi8",
  "key14": "x5Q2wAbARiBnx6enSLe7SitceFsJcdbrwGQ86qAAVw7hV4JNUHRQFKWc2Br5i1h7nN5iW7aResmy4kfs3bXZ7Az",
  "key15": "2Zs1gVYd3sf5khdkDZfyoQQazN257dsWE8WqTA6HQ1dFawjdtbHKEv3WEwosku4JAWKTDPZUWfsZF8WDZ1JRkJaF",
  "key16": "WZsL5Ezs7EmV3mk5AD5k6a4HdeyX2un1nJDjosazMXekGoBGKKvk7Zn5rScgcYYsUNoPebUitsWFkP7FphAgQFa",
  "key17": "62wQaob4V2HsHZCyFwBFu6AYhbh2KzDzPZHwUwFMBkmTBmBtJHsr7LXdmATGRwqEz1jqsDyLVpc6ppSsrfAQobE8",
  "key18": "3z9jcpmbrkVBFE7qxEfDp8QnLmzuN5fZ8dpLYi2TxnppJy8QwAW5yLTuE4pEoeyhnaRvujnFEqacpqtX2dNiWHEG",
  "key19": "44ETa6pCk1mDFABV7FCetpncNgNKZvUQimh8hYohF9Rxasi7BEV8prshY8k3RFWhPQq5FL23Tu59fPMaGxfJTqyh",
  "key20": "ZPLuSmNorL6Y7DPhjoSPwzPSYQqLQNJ71tv46mdr9nySF62ErQsWowyQeFtfyUnQtEG3S7taqQFWvSCmnBtVGRa",
  "key21": "2F6UiiXt6z5zNhv4nWpvasFY6dhxu8Q6Bs9SW2cJHwexWSoVGxCBqn8tHexzP4dqJ12Bqu3srVSeezoetQHW2uY5",
  "key22": "4Lec9ecNVJuuJLcWwRizT8pGmsLv1j22t8iL9nVDWyDQJxpqDDtRmsZcxBFpJWmHPqR6BS6BJor1KYEuAeMuAeiD",
  "key23": "8GPQ5BqD7A5SdFE23hSSZQeA1KvEGVuAsMsDQMNWvPXmXFgXhddCkaHotcq9JfqSU5C4P5yauPW6Pz4CYx8dX22",
  "key24": "5m9m23CjdABTJwQ3v83o3Xd95zNkaoSqQXa2ZbSnYTKYSzZrUuzWSEXJwGDnnvUdCLqBY9QoMM9538wByk12gCs4",
  "key25": "T8HLnVxai3FLvrZnGEMww3b3rWwg8Bai8GeMHmA9cpgjNA86pV1ZPUo7BvCqu1nydpNwUqdhXAuhoaQZjequWdX",
  "key26": "2x9f76Av7roKjiw2hrors4sKGFTEKzBHRweKyRxoTKCwwxh3LwLko8jt5MAxkYAAYWyS3fYqE2zx5Nh2A3H2Uzr9",
  "key27": "3yU92UpTqfEbRyLbDAnSZCoHW4CmdjfNWvsCbjt9fQJuuVfxD6M584ByJMphZyaBJHedP9sWS1W1zN1UdNSVXiC6",
  "key28": "RTsYpaA6F4iHY2WiPAR7Y4UsXJcJcLzVFbVjuJyo5yikaYjHhefquHhXYVZTnE2KpepeJHfV9jTWUD6XQDmkrhP",
  "key29": "2Q7mauixbeqy4P26ZeQzBx51rTUodSWMhrhr7Zbxs5dqotoVkZ8khfSE2RMYAE18oDQDi27ifQ9GDR3Mcc4gv5q7",
  "key30": "2bitFu9rCTRj4R1zWmvzHTouPhLE6TQ6Qqk1APwLmgGjKM4YBseEv5X9Nkz5eCnMLhmtUz2fRkKk4xBYK5r41f1r",
  "key31": "5w3QddZHnkyoMAigjo7aVXCL1RHzLKezZnsi2WmEu2T6KR6qfByERruTQ29iqyPg53sT6WzfX47oMAFk2utHNg9c",
  "key32": "346ksNiG1EqyEGqjNH4a5WCbtcRuf2LAhCBGvCbD4is4GnJAbmnNu2Mo7ADVxxwLDqDmYa391za8dqo88rjBGNuF",
  "key33": "3ELzEFFHy2EcekwEY9gxcAsYNVZPpdVu6wMwb8GBVT5k7sUdoa6ybVpYTL8hKocYFKSofEcH3eVs8Uk4mAdsoV3z",
  "key34": "nCijeV5Noqdz5irctkAWW8frtyXS4X4UvUu4GeQRbs8WHx5acy1RK9yRjHJ9xToWvgQNg4xAxiFRHDcYUqHpzeb",
  "key35": "Jf1kR4wgwNyLKgG8Q5ff1VkaU87NkxY6ZpBTKvu3BKpNVmUzgFA1HMTvuyDgLow6i8yqF7bjqpAPSaWY6DMb5XJ",
  "key36": "5jDroLSdhjdxS9ftTst1ncvfpJAzTAYqoyo11NptGwXmmGbznuQYnjkEzR7DqtztjTaZNJ1J5tvwDRM7s4AMGmtr",
  "key37": "67bvTJDgRzQXNRznLqvVx4HTxFvmCwAaeZEVNv8XwEsXaXZCSZHiyYK2n8k5PL9b6zGMCyuT8jaQZiUZ3zaKTxzh",
  "key38": "3mERiJAJRkJXP6Rfq4sMwS8xHFo1jqDjLkDczN8NXomv88pRV2agkYQCv1gHAwFzk21qGvmofo2bTBe1EiY4Pz6b",
  "key39": "2npAkWmkzYCVTFWExccAmX9arh1Xy9ptJK6b5Eesr3zT5bo6a3PdkBxbNsxa7F1r1DxhdYsqJEw2VfyHFsCVevn2"
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
