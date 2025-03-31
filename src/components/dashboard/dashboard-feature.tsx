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
    "4YYHjW9zBwfauZ5jWTv5oUwYN1JsrjMiM16H6oUsc7dQ8byf9AZrAWBbCjPVpqgsdCrVu8iGR9TDdQzSuynvm5X4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DhRb5bN16FNzi3XiWbt8t169bQKdufAZyUJn9XZTq4uQvPN2U2dpstL93zHdpstZKKLC2dqTKd2uANzixKiHrV8",
  "key1": "2uvnHgVAh3jZprwiAz9Mtjp5FhS5REqc1t6CnWR668bqnFr5f6vE1PtdM1QfzkHKyhXJ2htDL5kEdBsz3JEzEysB",
  "key2": "KjptXUHuq73sfwMr3Z4Tc1M9M93rmWQZLJfK7kjqDxFAjZ2VrHgFjs2XxHCUJVkPLcw9piwpazq5jarkh4dLSq6",
  "key3": "3GGLPgaHDaT9jF3GSUKuREp3jbuZrfrXYLhsEPaH5Sz2GDEn88BfYJTUSnB9SrjzYZJ9EYT1UgiznGKBMuzWsVL3",
  "key4": "5kkcVkeDqrPNKzokH1spqwt2Vq1zqTfFGEdV6dupjW6BP99v14tzPLWbMDjmS2uD53FAQHmMwdfHfipXZNzU4Wj6",
  "key5": "4EVBVUJVJ4cgjrEF8YLYdtmZ2cqTXn8rCnwHhKjEGw1XeyxyqSB2y2awhSph4J1ZsspQpwX4UxfGs3uMQwLmqVLE",
  "key6": "5tTSrfyxSwXjeWoNrnVZNctGngF5vRrnbUrs3PkBTghTaXiEH3TEyajVKBN3Py4neCGbXagWeWGpPFJ239uhb8d5",
  "key7": "64pF26Mn36hEmmN3tEkpLY63HdjVKuHZgHZ7ThexJGtbrJ4xf5apDJnDEQg9YG6Ciuk2m8imcRBUPKPzfdyaYAns",
  "key8": "5T9U77hkkXVXuKP2zmdd2Ua8vWqpNMHrnxGCfsY98QBn26zYyKpdZf6M7J5egxfGE5yVG4DPjmh6KNFEG2w4qBjU",
  "key9": "3bDoJCWE3ZMdLCE2J6p4NJjxM3zsQk8npgYiRPG7w5C9SoxfeN7vMw7Z6vhFVofMEMB8iKAzHjXXGsGcN9pNptFm",
  "key10": "iibMSa23rWMP7kZzZSsH1Vrh4Yd6BoMkeFSqKP4fzyPqHHwUMSjWPspn8Xa1ULS9spZ3w5Wde64KhLL26WAFXC8",
  "key11": "tSccSvU2ZwZCsJh44RTvS1UpGcZoJsucJBNK1MPVYZdZB76hK5H8AK8RgNxFqKbd4aQErV8V1rAtRsaUj1pvnSm",
  "key12": "5fJzC44YymiKXBvQ1Y8EgHxpq4oPVpEARyqVq7XijSPh1Uym1AmrVwtC3wEnQEtURAKwssvC8ecSfDsYBuHBAFi3",
  "key13": "1mXqkzeJJuFBL1QTe59RsgpfGvyGruH8R9TaqRMuJi1P9yqHWk3qkwUTBWjLddrJJY49oXTcuo687kaJ8prTBm2",
  "key14": "uM7sMLpKYiQtzRVZvqebkgCX4QQdUnLd44mHXKHyJbi6o6tSsqBrQ5XxTHmvkjvG8w9VhUy5pAjwHq3ALyUHTUY",
  "key15": "4VMXiCAHFR2C6j7UipRhm47Z5bZ7AMuyNAqEXun5TNC7LCj2YESTmC8nc9mcCj2zKbZqjE3ks2bE4YGQhWAdqrxF",
  "key16": "42YoKGARg9ocLbi2Vixghr3AJufeWv4kkxoWG2f4WafzevBdnVNQTZ8mRZRTqKXGJwuriYeLa4UKsUBZovwsAx2b",
  "key17": "5V6e3ePBryVYYVFvMffTaSTEZu1CqPrHn5RjczcgWdngyDX4NM1zBii45mNmv594KyXFVTGzJZNB67gYR46PnVVD",
  "key18": "5Sk88wv5vQVZhosptJ4qr1c7yhRCMXsCKkPV46Y2Ft8yjyXrnncvSHASfQepiEmVhSjZPjViR31vXFJje18xLJZL",
  "key19": "3W9NZF2eUGVhnL5YNbB1YHUCSuNfrgxe4SY5pxUASvpecfVWB9bgJH558bKGSKqSgw5jSceEp425WQdnmeW8WwrX",
  "key20": "312Vu6WRXXznuW7iPyZnXmopEijofT6RHyYx2Tj3W2mfBbr3uL467hPZaNLFXEaEaowZLfRidFuXgEbktQMGrcEC",
  "key21": "wFSPQLXYBxgrYgC2AyQ9rg1X45oFHduskNobuvQVD6y9m2U1MMdpEaGxXDkto1a44BEudL1PPe5o4iQ9RzrK8Ca",
  "key22": "5sHP4pVXKKuy2Sh3Hp7WbEqseA8sfB2z3xAQNjV1QfQL9hvrZLnGakp1rZYsBzKE8J1BfyeqJczFNHuUNHAbT6z3",
  "key23": "31CD1M9EpbXWPTfp61LhuJzNYsNfS5RRXw6SpTTK4cc1h4j6FcFNV9M3gCuwpMRcEwqfHTSsw1re6wZ1TsMdgaqy",
  "key24": "52Xitiwks6F47BmVWpUj2D2w2W2hi7hwBiLpdxUjTrnNeK7Jo3K44ezCJfccCdNDry4NzwvfU7AGt6f3Dy4mJnLi",
  "key25": "2xNmWqfdFF2T588spRwYudS8LBW7zJyQxYRHFGyChVY2ntNqWsB9vxV8QFp4StKZYTa2JwDSZy3N9cANuK5G1kN1",
  "key26": "283ykCQvhgi3G2eYJqXspho9n2Zo2BC8RLsyYxW1snDNFawWttEqhs3AEVMZCY26SXPqxCHEDZ5cDBfKvAX4dDYQ",
  "key27": "2nFttAfRMkhbVyMSb8erpNx7bJCCnKejvQMjzrbhTne8PfKdZfDRXo3vX69B7a3e8MsvUeGifszwQn5LBNSukjJR",
  "key28": "3UagGDjXwDysRwKmsmnaXoFazZcF4RRgn3rcAKLe5xQBpRSPjq2ZrZE18Kid7mRrnPurv7ypNHf9rgSvNaasBkBR",
  "key29": "3nkEHE4HmDY8rsrRsVQQcQJMLhUXSfAH4mdPMT5TjTUQjKpbCUAM9UYVcscXJm3hPdXMGtqn8JRhKVzTrAeGLpjn",
  "key30": "4fEzGypjR85AAZcnSk3JtkEDhfpDz3enQ1HA1qot1qSMASHUgfyPptYWH9dTKCnzH9Ettmc6bobrdpUPJjsvXQSd",
  "key31": "CVMBDfoWNjGCj5pD8Mm7thd1Hs1dvX9SwHScAS5GxpQKrrJkWbbYCwy15naoHHDnxNMdkZJzD496hQKPzCuitqv",
  "key32": "yZV7u4HNMT6KdLwz95VUsLEzzNgV57PVrcMQQehyUDuJB7jVJLQyCjpVnQUvXqSXWnBFRYkc6g2rjWd51K2i98r",
  "key33": "6KWtMz9t1oUXfpqGccX2Pm2o8KJtPDWn2LSQU7rZnhBGD9edLH8XefemeY7g72PjGraXymbeiaPQUdiHanZNKMh",
  "key34": "5NrAa6xoWR4s2k5yHpSCpoGU3WuK2zJEWYfGY6VR5NUWx6ZjPoNfYYAS35jjA57aGX5f9Q9QExce3FRMEuDtUcj5",
  "key35": "65cftxLUGJzXQvDxdoqdNR9g1obxpUBvfizmy21ucwUMFpYqA7bgkJiAj6UnCYhM7dJPxBExHcRjKTj5DNoxpyE5",
  "key36": "2NKof9QpdnjvhV53jN5jqiNndxgwJie4hFMkPW9HDfZatHSy9YfMvAQRzbbgunCFEweDssFNCSS5DQJ7tAiFwaB4",
  "key37": "43tBS9tv1JxgHzzTj4v776jFgbRsvYrR5JoAK51Pd5UPD4g2vRGa6L4bgVbsAXWvAbu1uawGtVJnk9jtmmAWogLE",
  "key38": "4BAAeFvw8KtUfY2wVNdwX7fboyuPFkJ7nY6or1zuBokT4MQK1pUEZAxrc98SJEeRK1WQ4AKATXEbtBsWsZ19jjBw",
  "key39": "35ZPfo9UvchDyQfe7xckjb2VnsoLQuEGYvBsmTsaDHDuuGL7UiTy9Qp3WHa1isBk4d9yAtQyX7bQYZZLP89VWLdn",
  "key40": "4HLpBQGiUPYhEtk2JRofzABA3DtVGw9Qz5MXoxtg9AEUDYxFChqYZ5hueuwLB94YNFgp1JNMywn95A6GY11o1Bu2",
  "key41": "2YfJnVYECYW1QP8dRyFsDosq9Lcg9A7tqfiPW1wdd1bRgAjZe5byj5ZBRVSaGSUV4VSfQLEiAuLC6ue4syYBGVBF",
  "key42": "gbT2fyVYL6myeNW833sJ8aYQoJqdfKsTNje6HvtBNDhkTzDdoPkFDGxoaZxmcXUjUmnu2nRKAWimGLQgkMimY3B",
  "key43": "toTK29uvv9YqRfqvCvdZryNohyS6FfvgwqQF9k1q69ZLbsm6mQdAgT2hhiMhBvWveTZDEQEDbyAAc61G2wmaZbP",
  "key44": "4a6NBK2awLYiAAC6ssVU9rpA6NDmbpMfoTeQSB9Nw4fex2wCM9AWEbQE69zPrXjsLXQVPJFeGtXhjDxM3wXGs7TW",
  "key45": "4eaVYx2giHtmqdeAh7Xt38WHS7xzqJFPdnaA21xrdjEtSyGD6FwH5vdPgtNz9kYcgJQqAt6ZeBPQTYviUhPg9ARA",
  "key46": "3VhSsh4bP1Fzj4LFfE6pxP4LL6C3yYVRD1NmdJdk2aRyBvevJpEJTqU3ipfWUZpoucRB3abtvsvE13DYHWSggAum",
  "key47": "9pRf1bcYgThBm65Pf74C82KtE1VaZtuA1GW3QarSz7XKELaJuyDK95CBBJvurqx8pFnafNAMiCwVeD5pKrNnRpG",
  "key48": "2d1DCifWQ9hXrXgsnWxK4FoeJNAmoGoj8BZ1FCrLJVBJqzaguX8TRBn5SsECFtXnN68o9K7YSkL5pNgnooTjgbdc"
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
