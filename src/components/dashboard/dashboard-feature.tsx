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
    "3sHbRSRCxzyp9nzde6uTTMphGfjvp9QgymtNuxjPv45HokzRNkQEhyDBjThnk4gG7q27bmtGuMBc2AM4Q9ykagfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cfkwHXaJM6AYYAidKs6wCSzRGoPFiPrEwSperEuCrJQiv4Q6jgTm1dMc43gLW11g8RoZ6ys86x6Fr5A8aot3P8n",
  "key1": "4cL1fpPuwU128TDLm6Roe7g2qPmU91UCvQ5bKHtcB5rX2MyYjkbATeGEDoknvc9vtfXsrB4HvJ7f5oq4VXq3eBzz",
  "key2": "3RtkSR7Eu3dX4wc9Z9gd3HnD5Nhjh5pgzoZ32ECHan28sCkmuYrjqDEPnFEGRXLtf1AsmujMJaytTFJDSyWYeNqi",
  "key3": "64nYD3g4UP35LqcaxLdURtY8Uu7JhrLvn4ZcNqGr7goFTpBB63nbuqyPCUPMDQ9UUrjX1FHYP3Au6VGSPNQLRJo",
  "key4": "3yiFguZuzWptE958YLdHQZ23eG9BvBxJGcauBT4c2Zfi6rH2nbZ4Y2yBbwXauJfjUWbhou6PPuu314fwX6mSw1Uu",
  "key5": "5MHGgxbH63q8ftgfSVyxWBdcwmfwxQHpmmrt5zJYPokpMYHq5jrKBdtxuXEvaBdXPmhrdERorvddKfLKVy2GaZkV",
  "key6": "HSbqLeahNhXHzPNvD4CZyswRtmXsWi1UBq3rn8LpMJ9FkahBDCv2UyErfpXDjTBzMvzSZnVzt7M7Cj5xQUuzj8c",
  "key7": "3sxQm7PtdZx2reaz9xAq9wQMsMFndaJD4in7bXSUDhNNdPV4Re2a3sgxhKdyXayEX6HcBXGoQ1zGyBgywqZzzan5",
  "key8": "ugtUseiAmiyZNuMMFv6u9yuWrSQWvjgvTVASkFjswyLQfymNtDuTmW7qLqNdQSUPq5NN4pUMjEFJuXrQEE4oqK1",
  "key9": "4S9ex5Hs5g7dZCN7oDwSsFfiwNCE9hiK1C1U2rDXRokofhRjEW9LgaUKTMxgMHmncsxs7SezPVhLVkC3UiYdfBXg",
  "key10": "5wRNxBa1jMVeHGuBm1fvDPo2EskaH6wCYkUm1ZbcrQBb1ZhkbpKLCa7K4qQbo6Qd1pRdaS1XYK7RSyKjzkS27v8a",
  "key11": "4jAhqXSRwRa7V1diueQqvkVqbuLrF3qAKUsRyewMRvMfLrR1gBeTmgr6gbCnUo1BFB99QRGtd86GbTMH6wwzFqjU",
  "key12": "36A7PPCskU3HXVaLyvwSTadW8Sykx4T9wTdCjETvNJZCHt4erWvWNYH6LRjcLG4qKucMPNPBTwG2vdVXLmxeTTCF",
  "key13": "4VJdbkU7ZygBMxvtFSyPfevGNXBHvJn39FaQfM1Aqwuky3o6aFRC7ajRujuAZxUZgZXoDWfcsrreHWwXbVK5HBrV",
  "key14": "53sfG6ExE7eSoqfXRhrFBRUSZ1xkvQpzcbgimkzLAA67jRbEETao1muKL12xQXucS3FvExfoUF5AyHq8bMyACeqi",
  "key15": "26eobXeXqSHomFcxpHWG9RcyxTApJEVo22pBbxLdqyJ6tTTeoN6aSdMC5HDK5XxmspsbgNgrbvaCVdmeB5Hy19Ab",
  "key16": "3BpG6odi7z2gEwH2yvRc3bbJA64r3LZxSU4FXUv86CHkfqEq9ik3hUcsdhyXACSE3kJAvPwpmFo56WHxinjHJD3h",
  "key17": "4R6wRq47zZjJVwiJg9VicBTfifBmpg8QmyxSNPCmiYT7Yaa4JQ5WD1x7548XUHFkGLe1vPk1T2uc4F6zn7rCKU3L",
  "key18": "9PetYK92WPiWpLYkq5Mk4GgLLfL2s7XnX5GmgvhCtMG9PA2GGvb1KjC81Yf7eVKVT87DKaSC6NcSNMSCq3KyMgx",
  "key19": "2K7Sw915WtX8kntwxiGAHpL4YK8U5fs6SGhqxEK2KJ9t9v7913Z9c2K5mGCo8yqHKK1nidtcFt2ZwXdzUH1GfY31",
  "key20": "5qJiheSQQ1GS7mVVShNX7z8pQCMFLd4ghTPfkoXcvTbHKNCximxWrtGajSbHpZwqeA3VqC6ZMGHjMnYDHPaYYyqB",
  "key21": "24Faaj15xHusK9AD7cSDpy91QUtoZr4V5wV5YXmnRhKaPdED4nHfHNrJLkXbzJDtB1MjebyqWL7NeZ4mPauc72Hy",
  "key22": "21hXkp4KLd7LgQR2YdnQedG5jSxMC5PtwEFyS7KBTuCJ2b7NVY2LjZpMYbAtSm84Gn9UbXzP4TNPfRJcMaCSjvgT",
  "key23": "29KjeX8HZZHdegKemrjiQgmayK1mNV2rmGJD72L7Xgh3RaLmmUpGJwmdQ8gMHD5AnJMgqQ4fud5guunchMMrUcta",
  "key24": "5WA5NparnT2Tz8b4H2rFE3bicyGiXM8i39B6SLpJjUBkuySmC3yWQjgeRQjJnc1hDgAtsLHDff9vF2AY2JbCck4V",
  "key25": "5XN9XmDpySTxSaUxc1gAT1YsYbqbsPXGtH4nwfJ5pPbfzVzJK1rum9fwfeYJZCMyDwxo5xicGoMwnwaBg36grzbj",
  "key26": "2xcjqLyXJBMKshtmS2kN39ANcJShNxg4WeeTKe88u7NcdNe2Ee7z3Yx4gNdrqMvfjEUHmAwChvezD1L4fxA66chp",
  "key27": "3eWdZbnzAum5MAhvyvGXcD9ACUdo1n4vZqTBFptrVW9dAa9EPmAgFyEhSc1S5dgLBTkUzDxaTLAtudgu3kCwN8Pi",
  "key28": "63kjGP1SAxKsBAbsxuBuYPw1Qk9jiQn7oBFecMf8N1Ek78UbQoy3eMSmSQ8scy4czsnZV2WHJ4WNL7YEZdGuPg6C",
  "key29": "5mf2dojmLpGQqFh4LpQx7xbu5LVRJMWvsgWgBySUVvGcbauVhEWHK15EovsEyrA5BNJBtWn7rnEE7Zo2pecBQTBL",
  "key30": "G9JEjuhc9VLZFmvBjv5epAP76aiN2Zvx62365qgZMAWq49Hv43msx6rV1Ldwgdd2aadsC3biiksQDigVqJa2qad",
  "key31": "3qG38NeVm3JhiNbKb8xksAkAafkfX81YBHU9Bm2fAWk57DCY5VLeeokrmBVsA744PkEgRedmJQJzEuFiynLFZvkn",
  "key32": "jQff9U3S3UqynXb99qQNwtkY5L8umHvuyqULo4SkGH3pja9tuN6T68zR9VbaT3anHhNBSXJ5wydPQxyJQ1vjYac",
  "key33": "5F532oPGD9Bjdj9EjqvzEhHTNVvDpmuxVnGKCLaTYt3V2omFWWX6WawZX4pdtPdhe75zyQj2WjDvC1zEjGRBDiZr",
  "key34": "4e25RW7Mjz8ZhuvEYWBkaBmHgpYcNUs3S83C7hmeqGu7TT5gbU8M3cQ1S8zLE937ZM7QQK187vsYC7zkBD4PTYHt",
  "key35": "2Dw3xWp4VbHJr2U5KStrrxEFjrr91i3Hnrz2SP7XW5SeeiCP1FixBstSWAdDb4HrpGw2SBAmoJsmKoiERotdaPUF",
  "key36": "2vsTqNNzjkFyqxxVJLqMnJMt5k7VbcDmergujC3BBSrwcBbtv8np2v6QZET4LY8sGMFsmtiZHd8QnZ9y4u4J8BMv",
  "key37": "56shKr28ikHJZPZtfLXSJ18Y8YeGNU3sgxZFtSeSz6km5VeGRzHy7kzDLFwgXCk3BJ6ACGqZGF5k31Y8Ksvp9WZG",
  "key38": "aSsKRmXmzT2NCPdmgumMFwHjjPqDfrzbLq3bjgrSoc79iUNjA7s3AEsnbB9jjV2JLBn7HSsUiP1EQQZp24Cw2HE",
  "key39": "3QPMUNpCozua6reSJD7EMQc6MvjawSj1Bs8cdgyaxZN6ymAB22RafZfR5oVnpEdZMx1kjJqQ481cZ21FWR4YfFUA",
  "key40": "41bqBZPVyhKDHABAAJkxM8QYqbmVXVENM2TNn5xjt73HEoDhuZbCDFjguRqne4Y8uKSjn2YpSmHj7E7avHCKrkGB",
  "key41": "3MWrTVSjut3P2Ub5SYBob3bqU3yKFTJ7g4JG8hqE563UYXCYU2uvkGR1GGL9JeT634zrCDCrBqNSpsWXTwwi1zjr",
  "key42": "497aToTPrAggX6xKozqYCWmyfcKyrT9pYzH3tmdV1n8SC7X8N7E5jAM6sAyCLZeauZBnXwu2nuSdm4TrbAT8LV9s",
  "key43": "5AwZC13XG7ntYz36xNC56Tukc3yekxtS6gcYAyJ3YaBwot7NpfNWz4N8dtyDHsHRmJkybwgKhi1bVTiCiH41ZPyk",
  "key44": "shT6p3Fyb9w8u3d7jzPHBp4pucsmb4XzMm82hge9yiAtE1Xyyoxhv5VDaSi9i2pUgsPM98jgu7DCUzt9Lse74Wo",
  "key45": "5RJDpjtBH24t1tD9Gd2QEMNxcZi8UzEp8ZXGe9c9n86TVDofdj1SV3RCfaYX7cdwvSSK5wv2tv5HUoutkF5QnRaA",
  "key46": "5Eqogh1LvP71CndaQ64tPhTWnBZMp3q5AWchQRYyw87jUH9TKt9XdmBhnSxGG75VdQ8takYLVzGG7kDUaw9FpBby",
  "key47": "2y43Ug2QQt8JUrc4RyYEyYrMJPmrVHnrcQUmYQNxfXzkXeXe7DtcLEpVbm3khRSYwtsZygzbVRBobC7EA9qh2KMQ"
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
