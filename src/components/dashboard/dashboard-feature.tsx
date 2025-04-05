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
    "3bFi9MUSM69kYY41haVp7oA6a5BAUEwteTJ14fPzNWSxwfrpUo1AFfyAu6e7XXJCsS8YP5JfrCjMvLwEdvfY5NXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3keeduAff5hGW51noPC9k4giuxw97EB22V71jvLYbrF2c6BhmWBqgsQQMFfEVoqQcpZ5ahS5MMifyzY9Yk5FCiwR",
  "key1": "w2pzCTviGW2YkbtazpdLJ3QLYPrf7DtWkXkN3jvbM4e3F7cnCztc5qsTqTLMs7vFwkP4iURY1ejj2BphaLKwKpc",
  "key2": "4MCBo7kPctVR7P4NmEfLcd2eLxWbmr1zSnUMkZMKE6HAw94EwrevuagHhRvM6EpaoiwHxwxc5a3wVDK39ygfsWW",
  "key3": "4m62g65bGJwppxcRjmaC5KjXGF4g6fZVhvTbe3FchNx8mUsR8jXBSeHjgxM1ai4xmFLuBqNRseUivoEBHkJ5bZv2",
  "key4": "2SfEUnS3M7VFueAHyr5kViJwbsSYi4bqr7Ljtxmz4gCU7NiMUZw9p8QRUhz58m6uU74fJYiSpaWScCLnuoUNgBvz",
  "key5": "4QGKhLesNAD1MgoZaxonQzj3x7FvrfVFuKp3KQSwXkFC7qDcr96vjWdtsnDHe7NQiDWkeHzecD1hvbTHRLK568wJ",
  "key6": "ZtCxoseUryRshATx1nJkzgV8BvknsoxWZyfWVVmrXRr3PArPwWYb8eKTmZvzfm9qJtKjmZWWNfnPW77VfAbpzJG",
  "key7": "3ByaK9zwbrebsswVfUxhCwDTrNjb8rekLM81hnbMPAwRs44CkmkRn6yeesTEn6fcVqoPQb9bqRSNn9RgcshhqUt2",
  "key8": "1U2EnW4kgyxSymc2ccryeSQiXuA9ga2g36EaWZjYTivqyfsRFQ1aawUuhzoBKDahmBTo9M3n87U8xdpFhqSMx9x",
  "key9": "29o8AXz97S93j8XqiwtAC869VmAxjpHRi1emgjGNgr6uW5kY5VTHuFNGEs4d1RoQBQrGP52nQiS8w4t7WB4tkjbA",
  "key10": "4uCG9FmqyzHAo1kKujAE7dwAY7GnKrvnvfytRxQaLPnvBumBRZjjFDm2J2aVwmZBQUgHFmyEB5vZR5KC3xpTegJW",
  "key11": "2GW1GEFkXZ5xLkkgNChfSU6J7JGwAsSMgRxUr7LWNu1kpNQgWJS855kRbWvkorwWNWoAZcCWKrMr8qNEd1V3nEZe",
  "key12": "4bjLP9qaSBP5c6Fz3bppDP32vMMSU7dgxHCmBwuJ4zk2hGQoheVyJysro8ozfm8GMLeugwccncEAvLTUfjjZstyS",
  "key13": "398sUpiQNZ4MTebqKLYCeR2WxfP2vVetrQrDBC9a8aZM7m4BPm9YosB7tstFgXkpEgJUxzbypozZYGn8PgBfPrkm",
  "key14": "5UX9Q8XJchnZv3KXwFiun4GBjxq544wss5AZf9izpRdmDMKF8VaHQ6BJCxqHJtjrA2QFJf64Y73S3a9vhAyUx8Db",
  "key15": "2DCcWdVyvq6QQJ91ijb11NBdDZBKWnuiE4DwE7QoPWqbNjgqucr4LVxu391ae7Pxdif9xjRAcoY3Zmmg8y3cTEM4",
  "key16": "4iXA64haUBqq8Z2f5B3SvB2oFBQbK36HJBbnLtypJJ1DGWypYDhtAHYb9LpCWZgiT3Vz2KaY99rrkVJDfk5X56Y3",
  "key17": "4sPwup93h7AaGdAZeoJGU1qLYWzpQfN4rWiWjfKqiKPM48pjTpzxwuoD7AUbahwH6rXFgSNmJBZGvBB6DCVTb76M",
  "key18": "2pwSiYMCWLtjPXznoZ2gN1xrV4CPZjmsDKYe9HfZVt5TMLUkJwwo1MdYoQAbSjzLh8FVWPmwuKTrhdHR9gCgPbeT",
  "key19": "4HcPupbD4qHm7f9wUYr7oRjN1UNrzedURNkWULZTjp4rbFZzrJikrBkYNFGd6Qgde25cx6H2DfyD3HZuuexni1KS",
  "key20": "2idHZAEgQx3iC8hmWLUkf2Gv3pMRMPXWQeup9rKMuwZManCpj4jkyNGqE8dzBWmA3N6puQcVpX6p9xa8jksL1Zso",
  "key21": "5HrrFdokJ6rVdLxsnARMqjqm3srbc2P97FzA3BW2n6bzBjYJrXJAqpLsnE1SbU7BnVzNWgJwkWV6zKyP3vACPvUq",
  "key22": "5gxMesoX2RAP8ugiWkpbUmPFD9rtxY5ZdQzasD5oqQjodV4bqoxiQnnMwJsoKmJAjCn31SP5Xdm2JmtxVw6DCntc",
  "key23": "5XU337KM465VjFLXpc8sBcwAEpYdE9kcfrFFihNpnmsbPu3Gu7t9Ls4owbTvak7oWwyg2nVRTRz81LCA9c7tkdX4",
  "key24": "4MzsMZ1cnwVy9MT5gyS6EJwPEsP4Cciq7aiurJbyZF4aa637E8sYnaTUrL5ETGAPEM1eN4hsEvYnq23APzFuksVx",
  "key25": "m2rTkRtoCN442QsGHuhfNz7oxGtmfLpdNk3PXiMPWyeNDqC8agMbAQMdoDam6J9MMHmwx8zvRCpCPNcuQiQ6mcM",
  "key26": "2eu5bgv4PpRothkkQeK2kBRp2sbzZLyG9jpCkUptLNVTDW2VKhHBuE1SfqLkB2SZAC2Z8WJSRM1C3WihqbmtnZuh",
  "key27": "4oMhvNkDbD89PH5vbHgix3iLM7Qt8FszXKJH4grEkfkSUtZNr2pmm3Csz8qBGVa2i5MK1HW2wRUkjzmmcsHrZuqC",
  "key28": "2ogF78ReZaKFFEzgBry6Dn95hKDjnbutPTu6zrDyr9PWhfwRaBqkbTXvVn4Q1gJk8cpNdkPa3MzDUwH9GV97HARH",
  "key29": "KgiWtL1A7DuPDVFuYCH3D53GABEf1NL3qMdBQqb729PL5K7ZnSEWvuokBUmUtpQRYGpEqjwNwGsx5Te7PoKYFw8",
  "key30": "RngqjKYAdXxVRx4cpV6kBVvSoqVgcuHS5Ce9STyJ2CbcS34UEdm2ab3q2B7QMzskwQuAvFjCurjEaikrLSi52FL",
  "key31": "3doyY64ofCMnbLRn1oXd2qqz6w97eCuShUzELmY8DzsNMn274jQcEexMrkTezS1hQ6XB2iXduGpKKMFmodNaAemh",
  "key32": "3TMg6pHtEyUpEamrM7cwHgH9mjKYWbC37TY8oi7fAG9EUqfKs5XLtkpHyMEtLZ4z8YmNGzSLKzJzTEVTFAA1Q9ZH",
  "key33": "3SN8eC1nBMuV5YoYknpX7cGroFudW4tQ2zuJJreAXvMv3GGqucfaWPKHr2XHo9bWPsEK8sLVQbKCaSUE4qCKUj87",
  "key34": "2BxiREMR3sjekwqmyjJHKDWMVU7QuX4SqiS3WMQHGUx1xZuhJgjYmWijjeLmcXzqkxWDVe6XTDQqiDoPys5rxpZ7",
  "key35": "3fUuQpPuRos9WGUXRFK4p9Lnt1hQiPLpXbwxN2g1Ud9sETBMyXLZver89pdVFKq32vLtmJ2FvEJnYmHcr9N4zNGq",
  "key36": "5J1hPohDVjxdCXz9CtmWEePFXeqhRLKzeg9va1P13dqyWNjdyWHkMjTTQNkekBFW55qhuadz4Y6oFuyJdNYKs618",
  "key37": "2uw8skCFHVDdCVqbkNSn2B5eYBsRV9Nj45ZEYYKyLij7sZAHiUbYpJVGd9XD9DwptBfA2XpNWXgwgGPHXEj9jVhV",
  "key38": "5yiQ5hoPTDRBMLAPXG2w6ehgDKw3NSiaM8eCrZqrPmFCdGpMFNd9HhiRnkj9sF4PY1EfUkH4r62GaQioo9fM4sed",
  "key39": "mn9XBNz11Pm8vA953zQme41ezys9U1FvREEc1oAfPvKuvUvEemH88dzMbeZordY88uXB4TmAP9AJtZkavviZyaC",
  "key40": "2hsnhXeRH89yS1wgqSky6oiAxrc6cDi9Cdn7ZosrseYruk9sg8sHnxpmwGajajnUd4phmkQrzhQ4XmXD9ddkCE8t",
  "key41": "63ABksRrieWx2VkY6kuGDF59y4rvsYnmqMRDcXuqhCV9oRtgDuDJqEptDABvNfF6xaP8JXeFm8wnoVE4yksiXsG8",
  "key42": "4hwpM4mpZJg9MSqZoJtpZq5Rr4tAhRneADKJRStwLNYfoWGdWuh4BmztjXKkSRuQva8V2JRqQviywFSvC1VLfuNY",
  "key43": "iAvTpJ78ATafBwBdHrkKSVVwv51HKfXgK6CFQMGikHsUchyEU8aDS1WhF4Vt6tmMYGogb3Gpt2qZ5cq1UuX6Y3V",
  "key44": "3Z5HR1as6g1uVETonnXnbJzLnRRBAtgBEQhVR3uLNaSY27zcbpGPVrho2nU9moXhV71rSg9wghyG5cmG9Q14QrmY",
  "key45": "utD4ktLbk8S4jwLwP6M4qxNwX7J6rGT9PJ8pfkg4SDVvLPk9jnyJQcDEzaDJtJPEkcQPHNBqJV139S3erkRKvUs",
  "key46": "2BzEBzWjzCk5ZbsGfwLFDSxciA1V1pjZmPBAE2UP2X9nfLG3PVX1W6UM3gkWM6SFPdFf2bPPHjUWqg2L4rGymct6",
  "key47": "3XXBCqvESTGCKqUszNiuZ6icN8Q3UmhM3o7UU6iZSBx4xMtThVgfpXdik6TaP36JDoX8tVsVMq7JSwCHHCX6F8i3"
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
