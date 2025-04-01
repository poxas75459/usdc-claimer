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
    "2XLhBk4VeqsQj2S2wrsbHrdogfMvReUeBgiR79PMbeuSt3eprpjA6vTijBWAKYLjtZZXc3yy18UTZmts9jU5G3Yr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1GY2nKozdimCeiTJ6d5QfFd9ikX3jEmed5QVNsj8NXrWKhWWy8mvXeEG551QaHodtchbvxx8RS9S9chHN3Zbpzi",
  "key1": "dS44uR6be9o1RtzLeUqjrm685F73ttBVcxfXci6exZ3gCMErdVnTJz4WyYpmnTkC9UsrTwde45wbGJfDSfw4q9P",
  "key2": "DS91tRFr6cH6AaWCc8uxxooxmWoc5yFDTJNgAyWv4JEYqE7Z7EK33c8xGo61RYhexBPYf4WoYm1bEiizu8woEsk",
  "key3": "2WKuMWTfecj96s9g3xzf1bvva4Ppd7TpxtXModvdVTkdUjuLWjBHPCug9Xzz2y3S7EmHHXdNdHtk8QxA5gmgG1dm",
  "key4": "5DrdirMGAB3ATVE8DRQe9DyGmr3eqikWD7je5hWbogd8TNpFtLKHuckBiV9pmwBhg5GvfJP2LyavEkrZAzmnX4B1",
  "key5": "37xUFEpXSsCs77PEeRfe8ADkbNGkg76oEjKrrzNeqBJfBbDA5VE2ato5RGETUzZXEpmm3vBapg7RPkWjmo7N16Cn",
  "key6": "5WXBQtKVrBAwuJo7wMjjmjFhbcrVEBFUNpGx1Q2PzMtuPGGexT87gCKagFezVdFXEhoN8E5dT9sbXS7HgijH5q6R",
  "key7": "5EjYidt4GZSPVAZ3qDPHz4cwRN2etABnS9svB7PVMwUCiNEkKFFk7AD5YjNmsythbGZNmjemzD2i7EqaHxDZs2s",
  "key8": "55Q4QZ1rVwkQL9D66X1S9B5oac9L8jPxpzVRLtpv8Wg1xpgwbRbtGSYdqyhC217ctXTMrTgJvuRSTt4QFwXvhzpG",
  "key9": "531JesygxQMQipSDaDEFkaqwcsg6Tigdp9MMjz7M2g9UFFiVqgju4W35eNLm4WUeE412jKY3PEj8TYsVtSW4MML8",
  "key10": "536wNmUCF1wVip8qHcqqC9vLSxgpi96yHzg7j9VUgfWrvJqYLXxN4AtdVVJBv1h3MeorspvYQryHvuX75PvEmcoZ",
  "key11": "59sk928sayR11D8rB83tXeUqAGBNLNWmMshtGJwdN4zNGpfbvKgqRh86R8exesTTj9amP6PUUjeFP4pPyDqhUTYd",
  "key12": "42RCCqWEaiSiSVrT6yhAPX532e7FYGB4PeMpnY6hoUBq3xpy2u7sxuSHe8syKmk35hRgdw2ZdZ7BphmChtYH86sG",
  "key13": "2HKM62CTvAYj79CeENV4K6xnis2sk4gUf3FH4HLnP9DDTLJdoU1Gx9a33rS1zTXXcSQVn3yNTaDPM6kZ1qC8Ntrz",
  "key14": "2JaxxdkXsDVJ81qcgrdRUYEGPff5Wr9x4Agm8nwrWch6SxisQCLXdnwuWjW9hzFrAS3vWN4BEFWqMWpozSzGUnMW",
  "key15": "21UwwrSkE1oHSwUti3KH2AQBFQ6WscjHVKvGorxgRWN6jF9TgyVhPsW6mPddoQLZq2uocjdtr6V7ANM2d2eQKFVV",
  "key16": "3WkYbCa9FCSEGw4J12FcnDrKtSYDfZgafDXnoS3wA49Yv3URqAF2on1LV5SLKqJWUYBS1yDHM92iJ6btNYQRpAGs",
  "key17": "5wzcpBqoq2GMLJwfRWHVs7Ydx5kZ4uXFDHEqUiRi4rUSsMKPHco5rjrNBA4ZNSyuZX7JQQpJr3fktKgZUUigvokR",
  "key18": "4LJ8jGuaBbaCrGy5oGAoC2AuLxHfUKGrJN5ecQKWYTJywKcb8ZAhRefMLDFqmxFrXbiBzoghWejKRJSKTFngYtCg",
  "key19": "3UziFvcy7fYu1PjQz8yN1fUCvyyLteskw53QsAuhVWTvoLkpSeKCwnnNPPnyV1fPS7FYChotCHKDDKC5ud6zdNsp",
  "key20": "77oLehmPcjNJApHYnowdBCzynC5giU29dVH9wU76vA1yGECzhMzi9uwnYmUng3B8W3EWDBqpowRMiyhongKFesF",
  "key21": "2grNSqgytz7LPGKorFWAE3wiviBn7yCMVPeBHkAQBrnMoX55GYDcpRYZWiWPha78Av732hNWRoxQDyLwuGo7oKaY",
  "key22": "27dcU7L4FxYWH6xa2YGxsLuSKzAwPpV9ZPLGkwpfYuyGjS9kwYw5he55crkvu8SBxM183Fbi5DbPcHXr15gnehUo",
  "key23": "5CoQ9LgP2P39q3DVcna5rTXjXDwTzhy1gFaMS1qj2WB3KzaeAXhmrAkAFJiJjRW2k33ie6Vup6stGgzd5ZysKomf",
  "key24": "257KYvHeaJ3x194BavwYsq8zcZ6PBvbGduHuUQFWXAUdqcn5viqaNXkg8spcibJAbYASsweThzJQBhU3MK4DbGHT",
  "key25": "26AWYQCcqpzrh2MiqQW37K7bPRiF4PJL4tsVyiaHCM3GrhMT94N6n319oLLVbT2hET3R3mfxbcHKCAdEQ4Pa8iHe",
  "key26": "4daEbJPwXQjkzeXuFb3QWL8UE5HeKt5eNb5Tyox15SnT9A5PQkxpzdZ7FbQDEj5SFhaJVHqCkVtVjVgJRnJLj3UY",
  "key27": "4VBbiTNCPGR5bzNLUMXDEuDjbrQMeaY9mwoqNTDBQhzYfz7q9VA86Bh7L6H9Gj6GakGHLZwMNuoRFkTG3cKcZovu",
  "key28": "4iPL72tuURbXHyB4aU9bq8ivzGbh44qVZkhAftpPTfYThegtdkkXvixat9uwBEu1SqnQLMD1BquiQEmd7yhi8fxK",
  "key29": "uiQfr32fwdy5vzEt8QZ4HGMXmN6rgFL6miQ3djwtrNBuJRd1uAxoYMcukTHYgGKtufFxeRhdc8mnbtztKc7GWVy",
  "key30": "AeMUTLYpBPDapjXQGGsxvkgjrssoVT8Y4E1QnRt7D6Bpf5wsy3cD7FenqcYgebb6tKufk9SC5rSnqj4YcbLAiPC",
  "key31": "5PCPPSdAbcWyPCR3rC1zd81sHNDLgPmmVAquimmGDigW8HLNx8agChyjwarQHZjezNiFBmzuiFbiwGvzKnfau8qs",
  "key32": "66XfiPJk4DFHwtpyZKJcbKKy9Ks4nReDDA1o1uMzsnMuPmD2ncxFPRaFfAeEjoMHxya9xjCusW3oW4psbpQih6y",
  "key33": "4HJ6BEG9mKVAeEhm7jpQR96niupuEhmVSLpCpAzyjppP6zc817wawigAbFkpsiXQBW2eWBGbyzCWY8Bm6g4B2DFF",
  "key34": "4mheiseDkPCRovSfvBSE4mBga3MqKHRYkf9YfrLDmFZKcwhv9kyEGFLFUF59GVfZAvRC13n4wRnsbBm8qiKfcs6k",
  "key35": "5dLugeMNQWCpsvZDdRxxUsA4EpxswUEbM72a9zG3jFTzkLShMMHYmrWREpjpHwQyvWNGESyq7pEgWCansjHAtEHq",
  "key36": "2UgDpCoXCZNSThEuJGDtRd5RhfxgKka6BbWAM3rEcRHDtWAzrSYJ3CTtV3X5mhVUEU9kTQeAh1HV4rRChHDrRfLJ",
  "key37": "5T9TjYfBuBr9jxD756SfPzkPwmAwhgSoTvqknhUGoozhwLnnaBLdofBbmtTRMqk47DmyWp6XXNXqRnMwPwHuQwRJ",
  "key38": "5YHRd1K2er87C61XF7B31RYBwXCMm6NXaz3SW6trRuqmxZxkovqpvDdbGfQD8dTW4VroEuhBUgHBxQDbBbAv7LKg",
  "key39": "2qeHTvCUwDw453JXd7AC4NgSfizTi1R8c1Jmtu7MWQrH49hGGqwLWPtBdwXUp8RKGyAGF8vBteRDLhJysVWXiasR",
  "key40": "215suvGxXYQ7uzryVFCbnj2cB7pHrMkPm2x3zPdwo7fANXAaonpj5wHyikfp767CN1UDyrFopQFBeb9X3w4KtZGi",
  "key41": "22pimUTL6X5xjv7PR2cvXXDtSBk3G6tVbWd9yc5BgEpMsCdN3mW6B72MxRWXfNdr1jX9PhDmHsDumkZh8946tsYY",
  "key42": "4JaMi769Ruwau4hEAkCaDktkW35etDqVTSNRcBEWVGuHHx4LUzqb2j8NhbmLgEhEm2G4wioWTu6DX34eMU8w77Zg",
  "key43": "2rov8DKjeH8jhwPs1ijTWcPGXg2XWhBnYXZpVaKSbFQgEqmmQ2LF6eUyBzucpLoNCJGaKaYmXVsYn6r5m1ue3oDD"
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
