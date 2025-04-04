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
    "4wz9xBfL9je3hdLbwwoFbtTcba5enRRDfnZBbRJApQ8uyjPjBf6Ahgfk9bv1Mr6gjqR9BUnUEpGW4TYEf2qqCbgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ocoLgjuRfqkm5Sw4F817jr1WnLCcDhSnvha3YEP2RyDGgDpoJ4mCpoBqHo8p5fTR1nny43GR8cLs96hkAa5KS4q",
  "key1": "38UDGPLreUYAnyTK4R92X8164w6ycMgxHTYKg9wahkSqLcpXBr5uSsoDh55Y7Vw5x6tTeMYYpW2jXhzX9K9r37SR",
  "key2": "44SvsfMzMW4Sj29xyHh9463Jhkfbo2MR6ETHU437VppdJ3FNnMACVEDaBDbhRiSQ4NoeVTWNagwCw6v2JFg9BAVJ",
  "key3": "5ohLDTATqUCCSTmyRjT59qKGY1Npa3YePzhYruxz3PLvA1ib8CTGgyDy3WVAUWqgj6LWXFPsfPQNY8pFQbp9mm7p",
  "key4": "4bAiicT7N2AZi2XYUNsVywGZKnP4CfK7FKf2JpqEVx8meE7hW762R7edRfMSzR1eJ3CEk2UgBUeJ9Xqk8RwEahjp",
  "key5": "5dCKypPMUYCJ76EU7X7uKDvfBqbqwyms1kdYbXVE2jT6vm7tSK7jU9LGiWbZiM8ZFdSVfB7oSBdpmBuYr9JB1NMC",
  "key6": "ijarTRdE3vvycML8dZVGNibhaJ1YPAuhttdZSEYvNAeoffPNPNvAFnsp1vW7t9mboy6cY67YNHo34FpxoZH7JxW",
  "key7": "3j8ep494QKeabupZay7BE8kHf8acEt86hWPDL6nDUXQrMzj5GvBvtSQKmavtH5KSDfUCQUqyRhwnCT45Mx7gFcL4",
  "key8": "3t3fJs7RacScjNoKWvaZeHjHjPWiK2iJUnyP1Ed8kgYB3QaRuGeqmWUvxo7ZSGeMks2JVfac4KHKmrD3tpi5fY8U",
  "key9": "4EuTUJpEYZzgfWDfr5AaYv9iHXMQkWUGfrSGbYpUffKjpeuMYCUD5YqZz2riqLRBLnxa4e3PCokyCionDo84JUjn",
  "key10": "5uWn6i3zE42vAd3HYfEjN8dkQLqdpaGXoBBL3yGFnSfpvaX3cXjiMnvnG7NCSMkbiPyVRj2KTCN9eJfC7vR47SeB",
  "key11": "2CU2dedDLQ4DVcEf1fwMyE7syfHUdPsou5GgybFF9ZXaYuxcEY2YmdJsJQLPsusnyXH7BERu6FRHVGxoiLm9AVXJ",
  "key12": "2eVNzbq94v2wX5HmSTUTi1UZPwrbjMtrzFB2cCBri5iJ9fHdokTnCnWr6KEyYz1eHGeAs52jbC5YKi4ys8vvGsE7",
  "key13": "2Pu5bdXEyZTeeY9i2akbZrez1ex91uNjfweq4m6b41URiT4Y5N7jDLQe8EfMiQm8vh3JaSKzGpDVvya167NzkNdE",
  "key14": "4ZCn8ZXc53arsK8DZf8vFHhGwHueVsc7QzXwWw5xwAohVPGawc3Do5z45PrguQnkgAb1vViBbUHBsV1UaEv8ibJw",
  "key15": "2tvfYM5JyAkoJ2zuSgaRvkdCbuocpbgiGawfbzp7C5FN8qoRHBYohhfaFhhfevW6TmTnvdMwufox7LVBsmH7DZ5P",
  "key16": "Edsqnf8JywE4vCPZuKxVAVzX55wWvnAnqyptPqfjUJPtEAq6tqeoDE7oGsBCMZJDPxQ3yJYqPxa95HWBMRHSdqU",
  "key17": "5akmNbNy5KSJk556qMNSUPqRa4yoyyLMsQbbknZ9aA6V7HCeSxi4VnRMAvVw8TZdQNt4BJYc4UWFR3nHS9CY8DNa",
  "key18": "4juKAisQFtmjzyfCWVg9Q3BajQS6uuooqLT7hmCvcKAf6miXtACP46ZBcBnYRbrjWA2UorUkyDKYKWFmHeQjLgi5",
  "key19": "38AtNUyfjEZSBMBaUpTsuFCXEn732SZPsvtsXrcTcfXGXkYwJd8DbWauJLckiLUESsUeTW3kkPGCaH4gnMnfuGJ",
  "key20": "4NCZ4nXDTX1fBZMNiNtbuc8NomgT8LuSYCjXgebfZZTeQHvBX3zznf5T9DmHXr6UvqZP9XMAnY7P4L5zu7n5TJoc",
  "key21": "2S8H5SSfqGuGMubTsjR2xC5zrGWdXRVXxz64nUVDtQd77YVK6YdqVHmyn2asFU4oZPumx81u2HKJpv8sR598jbWY",
  "key22": "MuBzbB826DSvd5h7Gw9J6oejss1Bg99YDmHmvYhPXABeq91zc1gTEmgjec57uzhEB21p8a7NBfgo5n6etLXEKJa",
  "key23": "2HW4DdnHGQAt5urJ5W4wSTXAMqbm11pvtA4dFumu4wnwE4xtitZLP8D3SR6VphTUjycRxMaG3uzEBcGFREn6T5B1",
  "key24": "2SpAF2ctqd7yZjL6Yh2LNpBzmmw2dbgui18CaJZ6Pr5u8ypZ3DwuQfDPe55YDKusXYfanv7yzHo3GFjkpVs1Z1vH",
  "key25": "3Dr9vt3xTSNrmBzJdSewaACUZzvmkArTkxpqyqfoB2B72oF4aSsbeFaANCjXEQ33sn3uG75PQGLre2XFMpSFF4t6",
  "key26": "5hqfE188p89mrszoNsXBJKcv4UdSYRceZZ618arcTAiJfj926APreT93UvtmaCiNisQ27fUWn7EbZv72cjDRVptP",
  "key27": "5mZnG6598buWjUvZXUvymcz8DYuUn8qDuADj2i1bXC3nLQR8CEb19MQTtcUHFofTKwneTvFX3sgxVVgPhp3QJkq9",
  "key28": "48MD4zrUrcKgWgWQGGrzhmEPNSnzJvXUN2yM4jc6R32V5zFyBM2X82ggVWpZLXDWcGNkQ4qLUMyGSUecWhAaYMk1",
  "key29": "3jX55jKfJurHZArcvVpZzKsPgLrNp6wQod9y2Rm542jJkdisVkBQ48LUfiVRf3KPJ9STGUC8ChqYNSwY2qwQEza9",
  "key30": "4JKCeTYYaSTByLGhkFREJtShcGkXZBToMfjWc2L1D96JNrkYrNEjfb3UkopfL6nbUVv8Hqf41PnCkVFbNh1gwuEh",
  "key31": "2p8HSMhnmAS8h9EGzcVtrn4RxMdjxEskTpHsHciW6ZeDeyxWQ6MGhr69uVYhDry3SHkaGVABb6M69UybXPLDdxaw",
  "key32": "3C8gmxRt8nvbcJ8H4xsiR5p4Hbfj81SCYpbTCbyQyJ9eK4tu3X2CVtDm7yuc48CdkLwXzxdqwurqqRDYPriKryhZ",
  "key33": "3SokUQVyuuvnJfLoYHz9mP3JuXgF4NmQsaRj6aXAW6bksrYaftzYrZp6Vns9kA18wg9ehUzL7FHwLpnqYk3RXsBG",
  "key34": "AhHt9aAfeEWCCoCDakyb6tT7qKT6qFHLBSTWb59XQj2LCmd3R1jizG9YAAL3geWC6n4WTbwgQnZVahCbAJReaBo",
  "key35": "3tcBHDTUdoXsomX4yMPd8aYfvRpbgf6zv3k4y6f2LBBUoHjEk3CCtL1cbYvKqXqrjZ41bwA5hH2FXg1GF1LWfRC8",
  "key36": "yWn7RewJK5MUAXnVKjYfP2Lo5rdLmLup1Sxs5MR4HD4pVXPNYmkf9xHj2UFrUVrLu43rJPYTEGV5RhvmmPanQLW",
  "key37": "4mrPXNE1jfDbwudPgbpmtuQ5NFKHJULaktN7JcmGb8hgDct8T5xgMQwMxVtmJ9nLjRBeAd9Kdo1SxNf5aDdMscbV",
  "key38": "2nDDV1C2UrWSUjfaHXKxVVFnpsFkVebX99DcE3LTXBvPbX1SbzhKAUceowBAhhuwKPaevymMzDanb9qxpmegpin4",
  "key39": "CwLkNuufRXLPSyM8UWFg5yzxibw1XhWHaZSosmr8gAfRGT6XuDcgtg1EgGb1LLoSVan5ZRhnC1JMz2d7N3RCnGr",
  "key40": "oi5YE6WxScB6zBrY6EggkCQCASEPs2SKGbJHiAoHjFoN4HB3pNFrwvsSWnYXxeMeGy9W8uwCGoBB62exgJukL7u",
  "key41": "5jtxLRmYGAgUH68NkJJASyr9MKm4ScH8hSoFqQTBowQovnC8QnkmP9y4qmtoFyy6AYcWqVLrwKzUdT7S97hpJPn2",
  "key42": "cTiYtF2YJS9fbNThqdUXDLugsshLkoammkwGAbmjYH4RG5upKvw2iYhuJ3b6a3vVqcFeaUm3bo6wyPAVSKKUaXM",
  "key43": "syN7JLULLcDcNsm4RYzT87feyfwDoHnvSU74LMjpGoGvcMLw79GbVzez4b4wBuB89JmiUZaQGmNyk37pDPkhNh3",
  "key44": "TgL3bYbuDTzjA7BdLJYCbMcXmY5h23WbjVnrvFpydyS4oRBRN5A9ZTnucsf8CZoAodjTihG2wKK4A1setAWk48N"
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
