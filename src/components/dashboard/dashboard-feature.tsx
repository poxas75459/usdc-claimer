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
    "8dbjBuMa43xziaMB5bdVMm2Tc2fJyMpxKnSm9TJwjr6wFWhEFErrYTiugquJpT7HwcgUowUj8cfYdBTnPjWHrh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SREqfqcV1xVEqgZTCTJVt5zjFBmvWbQUXndyYJnusJDAYB3mx9P2AdY9PkrZtZvBWQ3EPSZuxNQS7D52c2TL7CY",
  "key1": "4VKiZzGaHfGCL2ogqVhgLmoth63ihNtXHwvdzw998fMG2uJ8m8mwkzP6t6C6TqxRKwSRoWu9gRCHN9ZpPnw1DPRs",
  "key2": "3NmnVhD5t9855Encpb656AqU4TJDkVPkNcAL6YvmW9HuTcRoLnA6pKxJJrRNRFC39ofivEqnozZ2uvnfmSLcEpkC",
  "key3": "6xCgCpuutQnHZKLQ412iEgaWWag3w82RebNGLSPjHL8AzrVQfBe6woNNGtakofhBincxKoDiw9r7VHbrvssQL7A",
  "key4": "3ZjpMVwbAJTpJJeBGaugXud8U7jYttXrWdy9AU4rXuQQSy1ScCrhzoi2N7VFZRq6TEFy74U6LrLvHHMnjgoPB9E4",
  "key5": "4dD9aSwqRPHY9TbZdcDU3SHj8WG1uaUokf4jEccTNEksKVa92KkodTtRnWCYa7B7oUsJwTLvqgmKgtPkoZCXmZna",
  "key6": "2iiYxb3V4jCmLdPMCrGc93YJW4q6tHXgMJnDK4Y64AcUxiempebC21GGb8LF53vxsSFjC6Qpycjcd3XJR977mRox",
  "key7": "4cLijEfMnToLc8U9H5m8MaXbdybQ4g6LJKS57JMMNdu3mykmYyhupZCw79k21x9QoYkxvwrx1GFnJGL8uumqKe8K",
  "key8": "3BqyudNVBW9fpjyedzSTeTxx75q6BczdwLeHTJUaf3qYeJr5c2o4dW4x7LnAicpPBjBUfwXzsVnDGsg5a3NL97qQ",
  "key9": "28i8D3pMiw89B87ygqyvhVHPxnMq1ionCnXvX2yKNtJqHTUrCkthdt3c8ZVT28L6RtoLEiUNRcjpXkxeWGAUdt2i",
  "key10": "kBcT2ZJBP72z66y3PbFjywjDweXeH5UMk4Eaj61aLPaFnr9onHQikafYtbBxxY3QfMvbHBAWmo6KQcTcEkRo3p1",
  "key11": "4KcUnxBF89PoAbTJp1bPnTPDw8cZrXRBUbNusDKsZRsWxFhoy6etHr3JE7NGac49quTBZVkCmHS7yG7UUf6pADmB",
  "key12": "6EgmiRQdgmtYKsiSQ32b5uj4Hzfh8YpgPdgWfV1Bvbosti2mQHCDqreduqY3enLJcJC1LYXCXVJFtL9JdSoo8uY",
  "key13": "2UY5QiGvxCT1EcgsPDNmDUPjyCRAAus7YnmtzEkvSEZKdH8bb8spkAeCV7vxLztnqNcQu6xnhmNxVZcvQGcamgoN",
  "key14": "3YDYTXsVtkvmY7RZ2sUEWThHf6c2VFQZMR8nTs6J3UZLec4WLmDakniqABwaJcqGGyvEiHQbm69uPAMdxvjgZ5Zc",
  "key15": "5HjEvjox4VrxhfbbgbYkYLdEAmCKyfrFAqqdkUH7BT9U3GdkSQRYLymz22P6gcLHRJesruY6U5XpKrCpWsNiL9Gn",
  "key16": "4jKvHvJjxzBP7JkRYfrJczBHcbZTYAB4KRi6YV3SieiPJsLMfU2Xhj29Qg4ZijErvmiGtwFrC9bmWSDZki3q2dQ1",
  "key17": "Pr2heYHf6CQjcF8Rh7x8XUyrwy8UeAVaRvq1Uv8YPXvPY6oqowjFr9h6YF1yVFEojztQLDSkpPnBYo6jKBhUwMU",
  "key18": "52X1FRiJkivCXo9SWmUb5zZhNS8xiWC4AzsC2VcyyZrnpKXWQ1DJVPTTGqdfq8wmbF1xGMH1fircJHEJbFLAJe1f",
  "key19": "5UQR7Yisiky3BNwDznr23BuabXapB1iqTAdn8sMxTKCT9mUJ5CUCkc55kQn65HUzv66mN6BkgbpCkMqcJRJT2pEw",
  "key20": "5mMmKT6kyKHKCMxJ9wxckdnNsP3dxAqKUuNvgp3RyC79Aw4nrozWSWSWhoAG78CP6AT2kW5QR1Z5aTgn8QWzof1y",
  "key21": "5wg2qtYNzKihAghymjfUGpRgtAbziu4KSdPCzth72xwr9aJ1Uzmc773m9N4CcaT2ioHMPhVuLZmfRgY955KeBya8",
  "key22": "uTmFaLK5EGPK7jVgfeo1xJ4uRovSfwg2dznP36uE1VgREenx7ShNMJvvb8Pkh73Z5Hz27RBdMZ3v55Mvj6gzAiZ",
  "key23": "4LZWGY9aCrrVyVx8gGqtFjrheAATReXnRnTJQfgx4RLHBwmF1fwg3H578Xx86CCKaK5MuyekvZEZSL8BhENJK7VJ",
  "key24": "2Nh3eNmqKnQLWi7YmxenuBuZhvEoQFniiqMHLUSXR1cPHHUxazCXpjDrEcZCMQyqpLRyPmxt8CZqyvVodWx22RiC",
  "key25": "RZHCLKUE4ptb4H4yrQPxFidvievTxvmFWZgoCqrhzUM9mLighQPdHUgmg7dijKSYJgFPDaPCGZsTDtgpeVH1Sxp",
  "key26": "5HUSHM8jwRTv92CPULNjxQsn7Bc1vbaHmHWdBrPsUDx89jq11frcZTqRGG4zvGpv5deeuVaJ1pyX4YZ5ZcwL7fYu",
  "key27": "4T1SFUrQLS2RA7u2WNJfWKL62b4B95AZYguuHv8m3tPPefUVy7DVzbq9VpPPiGEg4eFkGbKzZCTc8SKE3PccNzUF",
  "key28": "351TCGDfvcF5kAuPhTEZ22HQxBHxTAe4xqyG1tWZ54UKbtLMhVY5aEDUGyGyi5aofXEn5HQHEXV86GdQV5xXYfdC",
  "key29": "5HTWT1yDkWw3JERbKBHaSrHcCfhqEAZ75uztmm6juEdow8Y6tr8y2mkLrKyVXwMfXre4FNH52YmmiRbEq8DenZ58",
  "key30": "3LrXgFFT7jpEWjmKR22a5VVuKJa5xSqJhx4XPbeiYaAKcspkXvTGLfrLdXzj8qcrjTFPXyPkm8j9KUqUCzy4Nwsn",
  "key31": "QFcsPdVUCn9QPiYRmMWpndTjLrNvHrghzPsz3gohJxhCDL2uaTDJXDjepCSGUdwtCpZ2hPR6444izc1GB5gUGwt",
  "key32": "vAH1sRYSWefsoGxJyUnr9QgtXoFnST9BbNwgkUgtLfmzgv6xAKVQQm4uy59uMKePFGNcVc97ndzwNKnfwpT3EH1",
  "key33": "5ifzmBob3zpLUJhFZKhp2XHY1SbC41hoDVuHpAU9kaos35oKgoCjg3vSMRzq8YjsZPnXYF2ThUwm3Ma3pd4JdB5o",
  "key34": "531jjEsciJuxhPvJ3XMsZ9q642FboageVhaufN2QBsJ1ir79eN246dQxY6dN6MMbcdL5bLqFDXFPr9q1XWL2PZcS",
  "key35": "4zhgTykMqNFTDxKuf9iMSifQFp7iLyHeQsR5rHB3Qf4UMQdeur2y66RK7PsetnDBbgqkWbLB6FGstgNFB2gpxDbX",
  "key36": "5VHCkNvPcHw6aXBNEu7SMNLGR6Mfp8FX9pciQ4PC8Q97hRY32JMNzDbFBn4kMCbPuTyh8mvisEoJSwSgByM4t8LK",
  "key37": "4KcmMV8D3pVEUgbq2hdeAMqbGfBMYHxye38axAq8v79y3BQWkJCUm4YSzayrKVWdC34itH9pq66tTrcsynKTVy5Q",
  "key38": "dHUeGKmVDwnXF7av4P3nbyQyiY5VeLfKBLAeETPzM6xQKiEsFswRvZsmZCmZg3dzpZfonoBcL9x1VzMAAPSZJrA",
  "key39": "32oVBBWJmcWYuEv67kHzQzwtTVwSgHbkEXH17p71vkGuCyEnNATnnp4xkuz7GGY2aiRjN74yVHLafpfmtSUbdQoe",
  "key40": "2xjrEnBQtNzMSNsbNERpWH4ky7Xvw9aqifTQ4452AhB72W717ewRPWRgrFsptfWyNxyRxUwCeG1SoFGj442bdZWw",
  "key41": "uhZru5pZcQ5m7wdMXe7Yu6R3QoW6uBHKtaPuWFyfoReW8VVQKB5pvhhBGEas7gwVMTedfy4T3p1UGP6mCbgJckA",
  "key42": "5wW43hYS31CmDrtEm4b1wJW8Vm9uZtQSyG6gkAJeomT5qMXQtxeXQ4eAef2xhs2fE1cJqmRYcDy84PWyHRgpfksY",
  "key43": "5bogaaE9MnDRE5X23kTYyVbYzKF1ricvRdmgvkp6TL7KyTpR1jUUfBCh4JSGKcezr6WdQz4BMdN9WHsQzGErzLAj",
  "key44": "XYzu8Cdpam5GvFF3gjVquFMexB49Wu84TTtB8c8obiMsxpxZVuS6zYLpbzr8bCuz3cq4f4Gr94Rg6ZuSMeyBqBF",
  "key45": "DYCEwdhUWbmxhJWpADocD39Sh5RqgzUf6dqeyEeSbSzpqKhXCV4W1pQzMkt3jBeQKvefwvy71tSVXY84bc4QEk7",
  "key46": "3iNhfhnU8Vh4ujzPfMQQz8G2QLkRgykyHkBBL6HGmrqcQh7jT6ryuv74KqytXfb3a2M4kWNJmoDifygYxRAu36ZT"
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
