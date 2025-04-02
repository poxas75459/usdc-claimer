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
    "5rEsbKnxRHLYK1XG4jU9tSHyAqkuHAiCfeRUgpjCRruyLLLUZrfzci34TJNkSP8rB1HgEwRYfY2Q1ytpXB9crmPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tsjVaxzV3P452mq1t9FBzhP9DYPRhgcX6i9dYw8nHEuGqqGb2WEsaUF72jwHCduHzmn4FXsWhDat9scmEpCrtRz",
  "key1": "53GZqVwv2atXVzbvJ3j8HhKWK81EVujrcSFPsdWncgW23caQctzPCTbRdzhnLwterBgLyqv5DnnrdCwFqJ4owk2H",
  "key2": "38qMHKRUuUSBnpmcuJGBJbwL3EgvW5pDAgbjVk7mTUEUDxAbFzAoK1Ychojs3u7cYk7KqszckbEehhh9Wx13uHHq",
  "key3": "2iwYW4TwTzGeKsqsVK6T69trwgWVNk6Fc7Bov7t2tj2zrHMqzXvG8iZpyd8SZaaCWaxpeKuJKchUXtbMsnsjipVX",
  "key4": "5xyKgyGcMHrWyZmBp6QqJmuFtdYEv1tf5sBTuKqAPRxeJ9HjmMkUoVyxvTemGgEkP8nRNNXzSY7Qh6Kzq4SxvSSq",
  "key5": "3RupiXSsVpUTKuBXeuhFUnDoXhk5d5jTGB6xwYaPDqJRYSE8m8v8FQYXeVn7VkVHVP5ecnAQuGLeQAhpz1LHd86P",
  "key6": "65sJ89FWRz9JTRrDeN2J9Jh5TLhmKd2d42JXTc2XkcSt7nmZUxY95YkRFYQBo3xUbGJeKSEhm45juhLfN3bhzkuV",
  "key7": "n8EXuJTDRHVW6Zdyr3tbwew8u8kHVtRZWFsVhas4wdrtwH4V4xtBTTDdrmrF7jB8FCWUXEeaxd7gVnTsFpVte5b",
  "key8": "3DvcwtZqLioEvejkunfpCufbmrF6GtjdRhqK1jfQ197Z4L1iQDrJ6hAYbrCnZNKBp5W8Wi4zjiNqmgL5sAQgHkJx",
  "key9": "taaK11cFJ9J3z4ayjdvKPxSsiUbVKexG1sCSwFaCZE8PWh5GfZVjwx6J6hjjUZ6cwJ3WSmxk67HSBprmcKSeiqF",
  "key10": "57pgew8cbBJ9xLatDnusw5oLi15jWJmbLrFN6L3F8aDof3WBcGw2ZbA76wduB5KDJP2K6F4nyjkvDTjb7jNgWSCF",
  "key11": "35ZjKuPDfVafkj1APNvALyhjtxBwDcNf9KXWfC1aDw3uFvs6kucH4dfUd5VF9DY7Rv7KdTRTNKQPDMhnRAzxugK6",
  "key12": "3yHd9HenLcnDYXmMkZ4KFWmxLWj2pUwBGpFC6oLu8wujfCcFoju5WwTGwvdDeoKiPGDpZAduYEMqRgMyyNsDWwDe",
  "key13": "5Qczxg7rKgeK1Bqo1p88eQF2AckG3zBN31KJTwHtozzAuosy3fw7frVmH3hwvMa6Ne5Lnssf4Vqw93A3PPhwh6nL",
  "key14": "59CQy8QEV94z5sMjNgBnzPQS5WHSNzgiRYBNAe8AM1U3Jfo99xNCxdrjcYiRPW9KkQUyL1YjMkLsThJeroMCmEDi",
  "key15": "3jiXwCKrW39G4iGEVKTVeCRebKiDpFWMVns8tVQb9wM63uo12S4shYNMeTpUxUD6N3jpMg2JUqpU6QqpdKxpwaJ3",
  "key16": "4DzFqCEt6q7CC4B6ngTKwQ2y1gvGbFqzxYEuiPhAZxYKK2FY2mJnYs7YogJfkPmJSMP2WYXA3EJHJ1YTBCL4AFU5",
  "key17": "55eKtaVX8AHmrQudSExpxLst1aDbomtz8A5Ge8KLAT7nrp3SKMeSxSWFRyGLF9CZfYBrXTSDtgTzh99iQkBUk5So",
  "key18": "3Kx7ja1Jin8neYDXU4zQMKTKDzyStsbiS65dacpsCurgDf5Qmm4dz3XCcUB4iCgu7FKB6xLdQeGNDREt5WYYqvKk",
  "key19": "jUpge2LHYHGk1o1DJeZmNoeri24UcnAQZSGfAYQH9uin68chzYXaw58ooq1pQYpa1KcN2FSqv4R7EQNsfEzsQRJ",
  "key20": "2MckQxS2jguZc5Y83Xc53zMG48Mf8UHyXWGTgiFwSwr7xPvY9tbxDqgKZQxMuoev3KBjDq5WAztDGyGVRJ1fGV49",
  "key21": "4W3WJzQ47za6G8mbmPv9FYB6mexkTZXPBSVebF5cgnttUMsnGLeHVqv3Qn4ovcw4os9KhcQjk8BbK5JhZdg11QYL",
  "key22": "5iDFKacdDTWNVoVMCwEkMbPYND27e1HSPDpo5Vu4cS72UbNL26Sefa6jM8SmxLD5sBCp2W33HBDnS92dbX1mWUu7",
  "key23": "5M5sMdP3KchJDiH9e2FgYZ8UHLt8cWY2ffmitz3B7s8rmJp7vJp3q8t41d8TdAiHb23nqCdWtEFWbB9NtBUYBNfv",
  "key24": "65KukLRSmdXR8tHf6CkVS6AYyusMpsQghcVd8Mwm7GrKENpKbBKw3QLPmmNm4Mr6rVW3SCEKiiAzMPXivivn1q8T",
  "key25": "2rd4yg33fTked2UUFkLQJGXS86kwitQovz3rDPP54vmJSgz8G3hR6DSi6qAB6aieX8eeBd7Q7iSqTYKhHa7KnFod",
  "key26": "4YLgzjucK3GkgXrE8P2rZdVHmFNoNg29ukZqfmuyaFRuy59kiwWKwb65AiyWabZMVRvc4zFGNEvrN6fHP4tczcG",
  "key27": "5ZKeuixGHvVnofS5LoLWN75SxzhEHFPo3sSL9P2a1ixapEgKCBkUDsgP5od9uGoTayR8EhC8dLQ9raoQB9EqcpA7",
  "key28": "4iUeji6Z7wUQzKTSFBBN8ePKQBg2Poqx6bBdy3coc1nUrMqYAXUyseay8nSSXKhz4V7JKsazdZ27N1GsgBbeV2sV",
  "key29": "2M72tLL1ogLhREH11PcgdpRbLqRpUV36t1MuJDm8G61UnLBpm6VPTPwn6XaXSMXFJ7pB9A315xwS3EVE3BdSBUsq",
  "key30": "hsBhbN8UFbeNiAPB2osm4sCeP2cTH7ED66qRmon8owkdUgZ7zzrJoGzcZr6MQjqNCxhoW6usP13M6GaU6BfacmX",
  "key31": "4ec15SRMKjK8GcbZHfRAt99PdYMWipuzy5tufKsgJnHnD5K6fKeLk9XZn6crschLA6QLqKnq3eL9z4YFV82Gt3ym",
  "key32": "3NPgwEXFczujc2mYqQPogmRvjMzajEwhCXzjiXekihF7oUVQrxAvFdDyFrXe2m45qj2A7Ri8Jmuw6qCnY3MW1jNx",
  "key33": "25bA97ZNCtQbCGHxsaE82pmLVcgYHPHwhUzyx2HSVu8hZuSrZKXyNoGRimZR5AcgzjRYCqrqtyoL5qj2meRRUzjF",
  "key34": "9wQsaiJACsjuc2SgEpMaU68FbWtpVdNPYHpGm7dbQdtJZcx2SGWGmmoBMo9MCLHReovaVWDy7Crr8UaB6T3MwUx",
  "key35": "5ZRR9XxHRvgiD2WQ1ti39hfEU84Raw2s2wFDuP9VcRp4bQoPECgthrMN3xYNtCR5TG71XR5Ws6RpL5ts46336ydc",
  "key36": "3Bf9PHU73DHPJWhMDsVmNuzLeeJVjsbgmy9ooEYJcJGQ6HE7iPitp75kpBkWepzyE3PdW6DKhS68tuNxMJezDDfS",
  "key37": "3tJqUUmscZ8pagednxY7NDK57tY8kbN7UzXN5UtH9Yo1oUU1k5BPuRu3V23aPaJgm88zh4BZVon8uQTb8jMdEwpZ",
  "key38": "ZoRwBhPHMz8WmWy8eSLCaEEQ5fqK3cwhvyYfVb2j1C4qr1xSuYbyR38LVGN5sLUTfLpYvgRXDyxdZJtADBUKpzY",
  "key39": "1TQXqjgJZNYCz6kkn68r2DuuhLhaheMYEsMhgiey5HsJxEGkZF8MSafwszegeTa6iCJW5U2ePi4Rzo2k19JiEGh",
  "key40": "4zBchAE4zdNejN57Z3cxEvABufVzMAx9nNVpqkzV4fPCmHeM5EyuwJ2o1djiUwHDg8M7GEW39ftjMuFVroVYvFTA",
  "key41": "2ycMgyUo9en6DLBYGekrDD8UhYM3fBNiRtXQ44XuQLKpoRv1RsMwhevLKZw8ZC3y75N6veW2SmnZPoKHbAVELJMW",
  "key42": "62PwECUeH7if3bELFZQxChKdjMXj2ueMuM34KxJct5ojasA4W3kfVSsAhdpPbu6ju4kw3g627u6cvcyD9w6RUac3",
  "key43": "5hiNKcaUwy3QcMEWXuDQsnWwo8dnwP3M6zCttiNWuxRvfFKpmFxJThVmXYm4s3G3ZqiuCR77mo2VM9kq9Rcfm63Q",
  "key44": "zPhzx35z4gqA1etDNiAAu2uJBUdUCeSztL44VgQnXEeE73sbTSdQJq8oUEX8dsDRt3dmoYZgpDpf5m6TMPJzzaP",
  "key45": "2xApD5iaZzeMeHWj2kJ75BaY4WW2y3C16evEG8qa7W8ktuBejmNBTJvstY7SMqteHA1T4qkRN7oUePeNVq4eYPX5",
  "key46": "5a5XtkAUXmWQJBNTbqt9GN3P2qAWPXMP5fhFXDbq2F9YcLJe4kSY6veKJ8EE4Pf3SgCu6kPEwDiGZNxPA74YNM1s",
  "key47": "4ZUyEubmTN1TySE4ieriDt6zXXeomdCikMCAyjiyFkm4Ajr3MXDR7Q3u3yv5SD8GvKAPUEikVo7YxAxg7nBVjQki"
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
