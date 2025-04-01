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
    "66FdeeTfw3Z5H42Figax5pbTM7jpnwL1D81cpM4wPA5aNGM1sp5P5pLKbvcy9kQWN3RFE4Wfusco8o8wwPvNrPP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7p4cAyC25yHrN3FiprwjLRnJsPc2a8p8zc7yY3T1jLYXBvBZzJbtfeh5hzfP4UiW29efAwG6fQw43zkyCTwykxu",
  "key1": "4zDBNghPbvtJzSZ59osoXh37vud5QxE4kQ3To2zS3mzYoWoaqCrjA72YXScG8PyeX178wEULd4gdPiVzkjp5C1QX",
  "key2": "gFPf78gMnBSTFZfxvn6tV7pgYkayi6WBhAqAXb3VhNgVedvk9AqBnabFVknVMP6VbBNDcMFpPErxAR8zYFHeiG2",
  "key3": "2pyKAtqdFJ2tk1sSAvDYN3Avp69EtGqVM3btDxaPuzbeYZz9AGYUfLsEPCpaw1CAyJooVsYM4DGkmbwg7nL4sMva",
  "key4": "3YcMT1iBQWHa6xibyjJVqMeRb72ezyNxTkoEoiK3T8UJ2n9a5hEDS9stKAED6Ds59QJcKq6PonPwqQ3cG2sYWRJ4",
  "key5": "3gUeH4rJ5P7GGykL8ZC5ns2HXQ1GXX2ttVrYhfncHGqxZGYPE4DXmAmmuzCoJZ968e7rbuPBywZwmNzxuMkfGEG8",
  "key6": "4NJTF19Mzc1Qp6uJ8euWKcE7Pr136of7dpdMxHYXivKRupdthkBiYF2LhxdSrW7FofGoj123iQNkiAWNhxfGN9wL",
  "key7": "4hqKAGZA5LVodGQJ9n4DZqHSiv87YGkS6uPgD553kQfDxMG61gPE7KDnYRP8zUYL5FZySdKFAxJJSrqb1QStwNdv",
  "key8": "n6gpuXEikz2DznfRU5EWhxkaTwnrKj2uwowXTankMYNB4PZjsbt3ghP8HqqBCcqUbkmWXEHTv3GKjd96NdAZVmj",
  "key9": "4qVNTHMpaTkNFdowfpiq7BaueYYUD5H2EokYkBKdMsSkNXR2Q7upCXdkyjDGh8pXsh8mUApPGKjTA5cWTMhjn4o5",
  "key10": "5w5uYgqwZ6RN3MMaRc7yvqT5evfjRm64YdmUEJtNVqfmY1ebMiKwVCQB4A2YfVcQNonAo39wmAsyzSFnhGmfayuk",
  "key11": "2QS6gGprvwRZ2zWWqS2bniiXiZi9EXQ6zPvzZuX7zzk542ntziTPq8poAGrrTYMD4sMDAGzHnvbCPg8BwCiwXvvb",
  "key12": "671XKW2ZqgqhHJpEf1Y915h2CmxmxpemC3PrJxnbt1xGnhtsQd8xCE96WGM7KigR3NmM7M4ePuZpvBYQLSPTAyXS",
  "key13": "38vXUAoRcU93ovon2TASUygCS2EffemZX2JhGVvX6rK5YPPoAsqRoUwUFkQ4Skm6uZGj8YyAsqhKchq1Y14Xbg7W",
  "key14": "4MU1o4eKGZpo624DUgBwWhD2LpWhFrdiTisKZyGNw7H8adLz7VmxaN6smYDbUPuNyTYviuEEbU14eUyZGpfhEQxp",
  "key15": "46BV24ii62bjv3VQZyiu3YetrgN6fJKhteYgngjynH8GM1ZDGAb9HBJxc1B3QbFeKaYn5FLww1LFNy1uGTvBXmwY",
  "key16": "vU2EEjDkTbD6gqNjGDxNfftQhN9a8usCbzi5XTvugrqsqBhKVCoh1naDmFH7R63kxVT5pTMnACpggejeCjxTPo9",
  "key17": "47VTdeQmbiJZK6H8zLmzjbFttkD1zrRBFWmFGwEqEpkPBF4zxCUmfgKsMJz5mBuwh7hsivM6SuXSfVjyd1d45yHJ",
  "key18": "27RAHteNa1FBCGAsdrcGBDQNwmg8WYHMVNUd2PzhjZBpu5ym3syCDkGdPbRnu49P7S2x5f6nBrAi4ZWSdGAscGhw",
  "key19": "2CAq6J6CqbMEvJDq6FeJda66Qddo5r3ysawTzQDVdVCCZj2Df44sbqtXqfH6e4H6Am3tiirHAqUE9C7ihhSJHuki",
  "key20": "QJpisYadHK7adKLouYHo9j49EDG3DQJ7zk8kYuyLJNT7NyUciadLkBzntQy7bvHtCFLjv12rsHxEcrpEoyQJsr1",
  "key21": "1TjAe6wAqgWmebifCU52rBhNqRjoptuYpJJtq9oQ4k9jncvh6rE9P43Dp9x7ABNFAc3C2dM4szDbpiyWJZp47Cd",
  "key22": "3nftGFNGWR6eSRCCBmCWzVMUsUni7Q1Botuit4BdHi7uiafoyQyySaikkGD2DxfPkyWEx6gf6TjXuikYsfyxcfxY",
  "key23": "3ACV5bDdBhjfovFo7gP52dsi8eGgEWQTDxxC7QbVdpRdVkJtMeKhLz4xbk693T3MXymbJFvF1yMXpRydqWc6uPNe",
  "key24": "4cU1hcv8MfpVvbm6qSeGx4Vvpbum1WsLG7QB43DhjssPXXwGKQKvWhpwHwBRpXvduA3ynsLnEoMJosmHKmWBG8V6",
  "key25": "SXgjkKwW8RkcFgvZCT8NUsqwZGkhMMkwETczr79SyAf5VUvL3GqqunDpWoByaGryN6VQmULcVuzLaR8spMw636e",
  "key26": "4j8pxS5GpAUEYaACCWGZe3WDrGFsUTp2AfTaJj7UQ89tBkRHta5Cp599waTibA8eyMgb4Xf3uTPi6YafNd5xTeT7",
  "key27": "2pGzM3j5nKAyVbJt77C2NUepiREZDUsriapp4Eh2jMhJMkuG52ZoYTYqoiUuJr6ELEqBdE3x1XDekJ98cMubF3tG",
  "key28": "2y3DzYS6uSUaU4xQC34qmzhCd2TPtAtzDav6J5nBcqg2PzvEo5d1uvtz68h4nHf4kow5Rdujy4LdQuD59Citvws4",
  "key29": "335bwBA8aq7EDrXSTj9A4bcqsx4U4rP7YCh3ipcc9xsUf4ERtcZE1i22hVRp27G26abMrtNisN9Vwu6MLB5YP9GZ",
  "key30": "2Kg4os9GGyAn7A84gvHG8eWVChXqqTUQ2nXuizG9JWAwm97HKos48fmrpsnyTRTp6qmsHUECoyeABQyaVdPCuowE",
  "key31": "usVsKVnocsBDGtPvZVHuPdfPhQHKYzZNVC5m6Zk7ZopaALfDdtK1PiyE722AovMwg2nmHpKooPomDVyRTesroYw",
  "key32": "3JBCejNNrusnRcwwmb8yLyrerjXT4VLqQcmPm9XpXLryaKMHi9ebhqfffGqU4ZwCfGF8TUoVdtdaDeUqjC6PrcKD",
  "key33": "42hYAXXsiNnjBQLsay9B1JauHEXotjLy8tdWycyrCdJQB8QkkQoXV71LhJMRrpBkeXqbnifQvukipRYWFGFvstse",
  "key34": "4LnvMxrKJf8FvnfMBtAJsF32G3oEp4Q79Xi7yneZxLNPC3kmYYftADyrs4D4ZTD1B7ATFmtgmeGtoXTyZ9DZCZJ",
  "key35": "5CTTRE7sKmXYdMmGu6nxMPp5o3u23KFMDf2onDG6UGnH9aRSbBrLSBzfQ76FuoXZyoZisb3AzFsVaBxMpG67TK2J",
  "key36": "5p7mG2B9SQSvAcpzGcqGvTQi6yNUyiVyCcr1ZZuogxJ1iiy69K6AvyeVkXVepLp1xcr8sCJoiRfoXDC5YWa1xHrX",
  "key37": "2Z1MUC3X6JduEFv2o9z2W21yDHy3dfxREVDE94YKj5jwyekUPPmQefwd76ro8ehq9yPt6NnFg8Zc8tgJE8bKAeT4",
  "key38": "5DUbZkLnMvyrDQWtqTHeX2HYPR3cXJpfUthKQzoUymXjKSmpbywA8kcvLeF2VyUhFnThaDENhn7UYypVBn5JGyt7",
  "key39": "5Pb7Vv9tuzZEXicfuYqbPSVZ8BrtAgQct2JhFss2R1bVERwtozqwuDVzbkuWtR5YyA7RUMcPVhuSzV29N9oxX7FU",
  "key40": "4QGPvcC59mLE8U73jmGVEtLQkz7x529Wf76HQ14nkcWguY2KtMqXPD2AXfKsAxxhcX12gEGEFQZ7hVFdr6kAQBQD",
  "key41": "36Fq5Sjuqi7mf72ANvj5BdSErUWWj4bGBj7NGo3xzbH2PY5eGLK3EGWtdYhum8ntk8iqjK384ZTibxVc7sXt2qDw",
  "key42": "5bFp6uYMmKiCJiVBHejvPEVux5n1NBNRPjSemHeLRUwsZCpuNBBfsrdepr5Fx6td7H7BHeMe4RrddfGgvMpBPx8D",
  "key43": "ovqDmL7UXA43BELa1sd5pvYCkpXsFDAaoMi4EXyAiRi2BrwH6b2ZPFR59YZgVrgKypshPkF8NfvYeYYyfeawmNR"
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
