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
    "5UESLdWN19ozCBD6UyyRxUUbkTcQjuFM7RnXPRgooq2PE2ZefCarW4NzgwtDDNQLRtp1F9fvb3BNEBVgXsUDwAzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qx2Xo98hFVZSgzvnsQqdmekF13v2zb2nG7nnP8QSeZJhV2ZzUpUypAsEPq7WjTvxjnNCiyj5Lj9S3oPFAsFka2j",
  "key1": "3qReXPuahctCMFCeMp6dk9C6w2dWCTi8TKVM6bdhxfJqb2MduNSjU3E2zSfJRGt5KJ6zZ7aBivnWyuLWoy7r1ApG",
  "key2": "38qnYpejBg7ECmMcBLw14sqi8A3aSkQK9PYhtjsGoVgQSSaosXz2FCfZiqKchNFHrFBrR46zJ6oDyqmHEEefrgzM",
  "key3": "47eQNkYdXwmqgQDmreUjQknVnWrvM8iESbfrWBZ7NABXvWkWyHJCWek6HL6hzwH97kRhKaLWerS1gc8oBVfshrsM",
  "key4": "5YFwU5UynKnkS9U2YfXiPH5nnapGTBy8pLrpvy8g8piv8SEiJXMRgy233jzJfxcwJry5VZwtSsWwVVYS17p48oUK",
  "key5": "48o7oWWTb2HZuUQJN2k26e86P81qaGnH9sgzAi4vTb28tLQU9WxzpLs8CFh1uH3ndHKfeeKPLg7GkN7rqBps9eCg",
  "key6": "s4eZTzt6FF8MqBAxobQrCzP2VFzqFDHRd95byrw5HWfKqrp9yfc4crhYzYWLJnebkR6AcPiwzbnyzLtLmhr1nFC",
  "key7": "5y6T3GsFjwaUs7CQjdAEfjes7CbJe3D2JduTnYa6DV8pUvrjMMQ5eeFZCM3y8hjxmjCDxrRzg5vFSTevS3yHtm4g",
  "key8": "54m9y13t9XZYTJCgxHAhwT1e3AYzy1Gj4EdnWbY5ZGjsXKkcCYjpW3cykJ9wWQmYZuR51ccPVkhp3AqnmM3napmL",
  "key9": "4bFm6B1pxxPTxpmCVRDiS9cqzTVfH7uxJ58wVezb2MmCFQVKJvj3CAEJMjsSAsa9HCFGHZRh4jfyzjnT66EAdDoH",
  "key10": "2gU8puXVjmN9zuSUCJbFCcoHvWX8DzubcK4xiNiegCo43kdVpn9rjH8xyfTPGzD3Z43R2hwC5XZ9dbpkWuYKLHej",
  "key11": "2C18ZLmt6R5MymP9BJATxgpTfWb1XGTtwc2yfVuCw7r7Hwppe2Ynrr18FBJoy7QveoaVJufvSSXgUqym5GdiPCKv",
  "key12": "2jLMyCyWe9RTuT2hcVfgJ5N2o5smE4UfW1jpDZQPhQUBK2oWkHAEcUBnX9rzCq3iumQ9q2nDhtxYR8WsHJogoZVH",
  "key13": "2YzFr4wiG7uGcSgjQ69QDVQPwsYfQCATpFoUDm94q3dvYSy1PfMHwLYANk4JoF3xBoMxx4XtLM7H2u9iXFiHqpKj",
  "key14": "2io2kUNC6ttvAdUNDyVxxww7ririVDtEJtmtmdYEurZ85a1aS7Pz4Zt4R5diHfYpX8yUcHp8Ydsd6deGV3QvLa9",
  "key15": "USfKsbj25tGACzKr8RNbFo4wYeCPwRRFLmgbSk9gjBiHqWMdhxv3d1d3xpovtcMzvMLnTqMA78P7UZqTGMxY3tQ",
  "key16": "KKU5HjrnHonQvsc5XWRVNNrMLeMXG5NQL1tMNDUYBH6RALapLgcRV3asW3ffh7GjkPka3ughvWmearwNbi236Li",
  "key17": "9NXoVQPDAYMTXfrVM5Egh6kFRdwTtPiN93pssMNJgaCX2bLsE6VFYvRuFgp3BbYmMDK3jdLrAykD7wUAwBLX2pB",
  "key18": "3bFqh9sveNytkfYmm6iKHY2EzQWVEF9UFqgLocuLbgsi6UFXRXDQEJdFjrPKMeSfPESgPFx1d5kK8kGVtFqtA8Lh",
  "key19": "FYm3BWzzfDXCtenQkxn8WNkh5VfNuj9JDHPoVjEAaYs2ijkvGM3PfpvqiSBfvq9AfkomNyjUkNsjXMXuCWiFh4X",
  "key20": "3gpz7hHVCvZoTcNnvHAGxBFGpG5eJwsRRZ99BQibjUUAXjCdzHYBRWDWtNZaLdWY8NAB6ZwURSSmYBpjLYvKMgEB",
  "key21": "4hKYC4wCS27V4526FVamy8KMMwRefXhdU7KWhZg2GLGKUTGSyNPjxFQHHRrNPS6aoTc4mMryhW9XWgsVc1PUKWWc",
  "key22": "5YjUoq2qvTyB6EAEs8NHvoXHecnymodZrgpEtnPmZzZGxPPugAFSR6NhTbY969UmTPuHaHwiZBpUfLqsq43d2wQf",
  "key23": "21PbBBq9fUgzL626SiktMAuX3dheCYVRoCJnDYoW42ZSXgAZYDKGeApQ8JWMccXZNPdsm6AtzfJ8KnKM6tmSSg1y",
  "key24": "3JU52nkrT14dxw16yuvVhbR2rkB6iHxDFwqHNrBqfAuhjMCXjJpLspgh8XYhoi29q1DAzkGbEywBvAVYk4YhFEM3",
  "key25": "3uSkWXssyS2D2sefUc7145zSM99tTTbk4ctm8NoXudZDbCHMeoyn5wG5dvpb51HdqX9LrQc63W2HZmnAtJUFWFCq",
  "key26": "CVt4EbkoUnhr7Uikh3PyEdfoW1yD4SYiCriuu8C8xwcsEZAEeNmccLkmxG5NK1VwTtTXUdZu7PgSLXiQHEemU5n",
  "key27": "2JoSFULDsppm2ejMPzNqFKtWUaFXcgk4hQ35RbW2YMLNwWoko7WmRqXuygqZeD6gqoQUg7fzQwTwyKQdQMn1YaTD",
  "key28": "4Mwt2TdhjPTmEouACubUCdt9X9Lkf6G4NyroTH9wMyq2WnHvRWmvydrYPUJnwm44Y5tK6taHD29nvruHNFUPZRDC",
  "key29": "5i1sNSR8b2qM5uYYcic8ZtvTG1VqXYkuMqsqqdz2z4ug8CZisgHmeSSSQpJu7YQsbsEuTNxCRCvjHKBsHoWworLd",
  "key30": "4NUnLBmryZxiZzdwTJGpX3nbW7KZGcue6wuLPGNKSHoiD6Pk1ST5d6gkVvmkQqQKrHKzH48hwbJwzkwhFGRPDhiC",
  "key31": "49qABAbvDHuLka2RkA4Zpb5xqxhKt3zEXPeZKZvUq1pFPr2YHUQUqjfPme2NnwkApM1U6H8TDXB1nM8i5JpJEWLy",
  "key32": "ZshZJGpdFCHJwUnM2G6dxdWvs4oQ4k6SphiMbDJCvckqeKTmnARnLtL2AbxCGAvwqkFtDGzyXV7BUJtkWvd2yiR",
  "key33": "3ZzobV8kEzmRb2e82QCcN2VgsGAFDM86ZdtcWUSHG8BeEu1LZfEH72APznh1QzuXmtXhFaTbbwaBMGHtWUA2LUdt",
  "key34": "3FDU7C8zoW7FmX8T9R6YJaxX4HBEZdBZeXJTySvNGj2XGkK3PwYCdT6oScPiiofcTiXjqSP6huDH23Gc5oo3Gpjr",
  "key35": "dPq2ytrY4g8exRwRZY6Ponfjh23n6UBLCAeUFAccZygJumqyJSrojGJamShz9dzt49tQLatdzVqgjSe4FZpLhq3",
  "key36": "2uWvLtS3QXEYaiSVzTaT5przbSuoCBk3ZWDBYXgghQSpmdsAQt8Ygwov5gB6qig227qznbj2NWLb1xfdsa5xCU45",
  "key37": "2t5s5R7drdvzJmYAhEkc6EH2gQPtQzr5xRnxHREGEQYNAhd214Ne9iQnLMgx79REwVS8KppGRPdoeyk9DKTMWSH9",
  "key38": "4o9aX3fagQ1azB3RKNGZ1JJX1FxY6ZB89b89icmFrRS113uhWWz3tJuX2hFuTyVrhgHnFambLgD6EFbv9UP24dY3",
  "key39": "2aTm7bxWB3tC7iscwx7jAeaZsmsUWMfedhdkD9CEAdhbBGZfY6HoHH8PvJuUo8BpmCBr7rnfQadG2eefry67egEt",
  "key40": "35Yd1Yvqqp5dfpwkME9VTuZAgNvJkMa7NYvvKWCHPAAXaiLaRxJfRKebpCjmqS6Udjmi6m6F2uZdNR58Wmfdxyh3",
  "key41": "4eztqfXcK2xj1xhfjWf1iQN4tMciZ8HNXrLvjcV7foY6uL7nBtAnjjaV26r5YKfXX5RJsQ8XMNvzi5yfARYVeDFZ",
  "key42": "4uFVydNM47v7mmMDeyGykMBhNGvQHCnLLgSnWQ4HoKNTMPRKp7q3n8Yw7CcbAGfEc64febwcrVW14XzAeHTFQZUk",
  "key43": "GZehvz1iUok1Z2EkusNzD4G2cKJooJscUASyY5HLH4as3xzJMU6Wq99bQ7KH995bBafAFL3VzJM7LcpGevYPCEy",
  "key44": "5ZaD7QDN4CDt2gHfTFZttHH9d9pmZBpWfbtStyTGCxievsG3YzKDEVC7ZgEmo7H7X24m3g2ftiWc5P7tzNW4Xp22",
  "key45": "5ct21SDiT7j82dHBe7BLVquVNRU4cZkscDodmHtU2LcN6WuDdxx64kLZuPao1dV4HJBHJPSVcAExnoBwy1Ar7hd4",
  "key46": "4ApFMVPAqSLSBFy2x6ij2phjUUKRd4S1zrSmJ8dgyp2mDRiyPh8Hyw33A86fDMP1DmComsPiaWiCHQMpeMEEu79q",
  "key47": "339Q4w39BhxNGuo2UCZ6MPSJV81TbihtgfuuZJUqVVr65SzK7GKTNND18UYUUu2nKUDwkDicSpiZTFaM4tnHsMhq"
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
