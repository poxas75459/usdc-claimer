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
    "QdPqUVXvAv1NTxhJJojvLkPVQBwDNLWNqYZDs7BGcCkxEMHEsQvahJU8EsiTALxePgLykiM3rXqB9UhKyc1PZp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A96jJGJiEryx6fHuWnSUdpVsbg8w9JhQjphu5it4b4gKRqeuHzSAxoQTb3Z2dtohYGb2waw6KyD7HEdFhJFvvk6",
  "key1": "4io9McWXvcKvBgREE5oQ4HKyijLASRevtVjaZXsS4bg7erE5EFmvXeKEkxbZr2MPxwGxob9XQ4FYfXqi2QN34Ki2",
  "key2": "2P1NZGusS9SnXcUbBW9xtTKJdUfoo2Z2d2idWtNmcaEbhPyrxbKiMxJwzzC53eR1eJUkh961ec3mSVcT1DQ8VGSb",
  "key3": "2DzBSUAwNvRshnpiqTJYkzCKZZEqZEYFW878R2GT3YqfgfomQSA6ukY8jzVBQVu2kCaXwHfciyveFPSW5opXJCvU",
  "key4": "657m7SrKmBvUVw7RryTiVapjwyPTqabNPi9i5nvyWwxWbkw75Jk57ZUYafpLn7e82sSDY9rYTsQSapdjCXStVNhy",
  "key5": "BMi5jThSj9TJunwLtBfcD262MdKhvVx1QeBzfW35zHUHVENQ3k14jZs25yZJaban7u7YwEM8MEiWRoHyJUBTYvp",
  "key6": "3zPGxxUprMyQ5gYZ32TJH9YhPPH3drtickYq1yzUsLX4XfhYt4UmJWCotLMWdRbE9wjFB4r2zRPpjUHXnVfVNWrH",
  "key7": "2PsHBnRkhUdHoqv9HtnTpQWnKtHVRjV4cwTDKcmCsWwuswTR5aik6wZ3mT8a3BCobtmzm5HC4VC2YF38KYpBs3dX",
  "key8": "2K9EMevwoEdGGmS4kRFBzGGZjhjAWcuBhajReqHVugVcCVmyNZrLhFSBbDfzZGnsnV4fPhHYV8xPkYf6g1Pf5jzx",
  "key9": "5GVJpqe3nJvSbTLHA6SaiFsFnpGHYmSJZrUWx16ZLmd3jazw4nVqL3hKF9c4UxJqhxVzfTyAaCiq3oqZ1JJSMGoN",
  "key10": "5uzQbNCyqmPxggnNpHEStMDiL25HeUqJgBxkxQGsGJTLDyiQW9u18BLgWQcUfB8SBfkbpbF9f9rUHjKHmWX8sU22",
  "key11": "4EThY8coC1pfKNuTRLh8jeZdPLBLEAsGwX9VRJdWehaWcZXSfHTpxViR2yCio5qFZ2Mq7VPaeY7VyuSkLA6Wp4LE",
  "key12": "3yWjqFNV8r8KpnDDx4Ts3emrEUYg6dTBUXV2qMG78kRK8vtqdq4ucgcF12aV1xCN8P9FiaNqTvzcHQgFRayLu3V5",
  "key13": "2iTback8SggE2ic2JNgk8XZ7JprpN6XiT8d4qV5RhjAX1UFfUmCcTQh51WWhrYnZC6kCeMcFfuP7hC1EaQZHUZuW",
  "key14": "4Z4UqyhDaVhp8owno3dyKeQiRyQTJGyezFCqrieSEKjYCgL6DXVkjttzAa3nMh8U2tyxRpABDv1DvfNnYKe8MeRx",
  "key15": "22epLW64mUY3nDpkdDzjZPCBgWUpqGguMQ9xprsAFMhUSEwLWVBaNNyXctn1doSimGZu3ZEAYdwX3TZg3M7Ppkbp",
  "key16": "5TMHPsrqo8fg245StFDsXBoHZvVCckknQUgPkkTiKAFq8ZCrnBpER1opb9peqTWvWnsNiJp2YKivCjKJ1bZonkcr",
  "key17": "3xb8YursjLD9ubEJTeexYR6yeKrLqGYUJQyxvW1M3wXrAFiEhRyxRxB1q7hbCq1ZrZKHxPoi7pA2k7YULDaboFjd",
  "key18": "4eKyirqtsQTEeqMzPGfdf1zHXPLAESEjq72WuccwduxneE9hupan97jqiGoixrSbQjr2fsB8VfPP3SgKHmSjFiFm",
  "key19": "3uKFgYpwmwXdvxaSDPkeH3BrkBKctGEocGxk9ZvqjXDxrUwdAWwZacJZ2Vi8ZH8T43A1mf2z9vq1Dv7gYxRSDkcr",
  "key20": "4o43gbz8u5n7GPDP1tx1oAyF1QVG58eFRWZbmKSN1osHstCd6qUKEJrcjheQVuhsC5p3KLBRzV9cya1n3C5fx5gT",
  "key21": "2KawoEAvQjRnP9mAdhKwVkygxiWi5TwinVRR4Q6JcwRCZ7yw2LDogGzjrka9nQQjkAhHxUpRmjm3xSs8Wp3sZfKk",
  "key22": "gE8uABrnpe5Ne2dRihvZkG1MHa3u3TSnQHbTzWycp8gn9s5E5vXfVyq9uNHDyMcGYTsb4MFLYVGDH3FjqkengVM",
  "key23": "2YMbGpULCrg8LwvnivHyjWT2WduvWnpTXn267EqRWdeNhGTmpFN91VV6WSbQ8uAKaEY5mSLvm7KB3ktZKF7p19nF",
  "key24": "2amLMFi8xaekGY87oPQuECF4RZLWRs2ghMkMsNycVLeqsgNJKabfaXozFpS7WWU4RHetaNy3ouJ7CA8YpLnkdzqn",
  "key25": "2ZaRVApSAVzaUXS9r4N6HhCGyiGm9FjKn8eDK5tZgPSx8FwNp5xHwvPd3RJxrXE1ykzeMozGPUTXM9LYzTincXzM",
  "key26": "GkdY7EoQV44QAzQu2NPfUxY5u3vcDBCiVidRejvT37Ugqpq7ptetrQMqe9kYf9fduvkqJ4NmejimgSYWPuDFf4X",
  "key27": "4iwkq8si5MtjNQg8GgJ454qEJnB9zSWkUHBTtWXCNdQSSTUbB6wSbnW45kZ3fAzCJkotQ1a9buDrMHKpPBLNkNrq",
  "key28": "2133VY9E8DoByME9fy7ZjSsM51FUfXPYkp5U3TEqsMUf37srC6UWCy1vEZWiUDXFFsLt5tBAC4vRdUsW7uXxZ1QE",
  "key29": "66PS6LqwfUktEJguM6Dxy3zxSijib39hsx3K3pyoxqgv2BfPfoxSUEajTAmmahbP7VsiHzMUwfYK9Mxwd5apVsdd",
  "key30": "2zZP2JNEndxUnpk8qAEP9j8UeieXT5L8JP38JZabPBEXk1YAG5WoGDZS7fojG3QNikFxuzR5ztgbKVa5nBK5ur5g",
  "key31": "36oxT8U7dGbuMZr8qcQyk8YW5M182sSoAQGPtMwYCbwpPcw1QQgL9cniLTx19iLHwz31pthyBMnLxxeoXnyWyx5h",
  "key32": "3pyhLg9vdVUaAHzDnEqE4yM5HDcr8izHbqeHcD5Q9LFjqnmMwksvZhpudnqhnRGAxUJS6oY58gry72pUfa13Rhfd",
  "key33": "2yxqnTai2h7TR8MbSvAd9DgGXPop9H5kQHPEbrh4xufQyRwhWRkZeuJScjvsqnx2HXf5rnyPj4XoT2NE6LNHvcPK",
  "key34": "Ks2qHvXHBKCoRpcGdjvp4jgAX3zuJvchmdjZh8zWnySNTsEFsofcUyjphgmdKBvCVGg9RJe5YePutbY84oBf9Ky",
  "key35": "43WuXGurry4gDRGagQMD1JoCYHwJZ4HjityBLnTbAbT4zcSdeJQSdZsafXvm991USFTTdirSpZoKWpCShxFj7xzF",
  "key36": "4R43fd6xYG5sJU25vwpY13UfTYT2UxXeHnyPurynG9ynSgnnmrMrfr5jWkKqdSWJnZJUtiGzVtMYnUpvM7Z4TL6N",
  "key37": "TowRUHdgCmv3ePQjVsKwPHGUkUonddZG6tmAVzqjjXQ3Mp377b7Rg9NcC39JdNs7J5njcz7sXdoiKJQ7qjf5Nr3",
  "key38": "58FcApNg4zGhsMRiDUFg7vbDwW2tRwic41EaSHQ7XXP1fvyQaDwtFoc6QTctTWhY9DEYKrHc5d6hd5fWPpdcrUSY",
  "key39": "3xyb8icfuoz4MrvYbemefLkLzxkhSUigVeGMRoEeycww9PYcwcDxo3SMQzCZV7HpyQp9mwy9Pqp9fnL5wEs7MZJW",
  "key40": "2wvcqatHin2Z6DdduhePDNdJT7beJAyfdSKjo8fiTxHhLMouB9Kaiucb8kTDnz3wvMTsakQYCjmbWUQiVTRqWKHa",
  "key41": "4dtEyVT3vik8VhkwN6YVMDq1zKgtuqGP65EPe7v5tDv1WqibF85UGL5RwNUKqEN9E7RcAapkQjtBv9Y8LhF2cTMr",
  "key42": "5fxcDep3LzuZm8nziYwSpjgxXoDa1LGPAC61at5f11fw19Gsc5VSzgoTFwkNQXFZautaQMUskX5Yo4FmeJb4DcAG",
  "key43": "uZYByAYZfXkVyQwnFhAwxzRk1BXbPgpMfzbeubmCoxciWh37Pijsm5jtzXLxU3Y2YVxG5tHryyjfHCticv4KA2M",
  "key44": "q9qzR3wLsRshad5PHUi9bobv374JfNh4sFPeUKVr2Zs1vQ7iPYyDx1Gmb1PjTsmESozH1AL5N2swsGgceBVqrXE",
  "key45": "3uj71PsFFxGfr1gANCrGxXjsDoxuvJQrfrjcvnii1Jk4RQaqYGR1REyW3q7zBiE9xshgjptPEH5r32KYKmF6qQjM",
  "key46": "C9TRXw8wRYou6V45g4uuYXvJRHRhPYAEmvN2scRpV57Kv1kZ9AggQ6Zqe6ZKRBppCWDdsmJp2L65GnNnx4wQWgA",
  "key47": "5jaBudRxKZerq8tpPFc9b9t6CbsZ7Dxj3ZeXM8VShbbzb9dFvuBaMGMwsCKZfYoe3BqmtgDyrw6XvJVwFiwYP5Pt",
  "key48": "3yta27nWkpeEyDvooF7PVB6YuxnYapKU1Rjcv3q2tcmZU5ATiui5JYi8f4j8HiPa1VWQ6uukSqRRpaaVVmvwK1EN",
  "key49": "3JW9xy2218AN95ppTcnCkoaieGNWu1aySRbGuiJSQrd1WRyavPVhoV6EapuVvNEyDximr3rdK8hzaALS7VcLdZeN"
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
