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
    "3cpAL62fcPAYeprJoZQkcQZHB3ZWuLjWemZ3nNUpsoVK2GgkSj49mYLXHCuASRxJuZ55aKEZSY7Hytkcn8EtTC8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yRQdu2DsHzp9KkjR7McqkQJSPiuNr3g3USxjPU6f4Hf5o2nQoG9ig7efV3x7tds5LpHw7CqwCDz9WsfyPtxrmRS",
  "key1": "QcN5LPTPeJfUn9agQKuUeZreZZXTMzwoYqfuHtNNBd2PuXYcz1HVKMtZJ2jCuFfDCKL7GJmqU6Kaf5G7cYjMrSX",
  "key2": "2zw6qSzEZAy1oEDr8dbrPGJcneiX3yWtFeVVwpeJwEp1j11ewYoQWxMnMtvM8CGRNEGdoV5CJ3CXeRcTEjvrjfFG",
  "key3": "53cPipx2VyN6ZAB5uvb1Xw9jS21yua2PBxDgyKwkNSZJnBLNzsNrQEQDfMKeyGegsFbj5qS4tNNWmZv5SutXzmwT",
  "key4": "3JQb2YBM54f3QXQf5bL7nLUaVrK4KkgTugGT9rYF2PVB7Rx1U8FHpi4zg8gT6iuGEMY2XRrX9CdQ13QVJotmn6VW",
  "key5": "uYgWENEEyNTPnXNq4bHuCewa26CETpMvJBp9miZPd7i7M1oGGmd4TcW7Zqq695HvxDRGRES1uuN58gTS6NubF1v",
  "key6": "5NX7gUFfxC1WJpjbT5uCzLWshuXWS5oQLoc8AsDfm1AHt3ZQK2uhi9XyRK6gwxjsSLdgDicvKWjJQUnWxVwViFQu",
  "key7": "2DyhY2GwhN97shCZ8KN6Lhfa1QdEFhJNU3UpdNU7TVWBz9gUcW3cwXyDGGNQDomYxVbDtLbXrdmqZvhhbhbQh1og",
  "key8": "61jgcreqDqYdni4QkvnUNiKLZT6bx66e1YcmCm5JiTwheUFZgwPEwr36Fi5BHDx473Drkv1FWrQgjpDpeogXbATR",
  "key9": "4pWnDkUbxAyB5jGBQbJaZFNn1orCzkwaKKpL69C1BX6JJdZuBtBqfcvRSX1FWA7eUVh5n6EJzvhSeW5pWa8rEsc4",
  "key10": "3jHiqDPRGM3EPVsMCLpb3BbskX21VPsSEcnp9SQ2GP89AADYGZxsCSueKYbJUo4gZ7dKpvjg2DhNsPy1teFvJiJx",
  "key11": "mp7K6zeSiMoea4g9V3zAG73upc32xuzj1EhamzxNBcxxxGae64tUNVACVnQDVSMqHLhRxJeM11s6siv9ccirWEd",
  "key12": "5epU5UVFEAATNGCvtpdatJsCd61zAerh3e92QuCCHPFGDuAsuXrB916fCp8E28zjJNaTqdmrzVKsgcrqRY7Zejig",
  "key13": "2xcEVhUQTiffrJKYgRbiAcpbA5zpoWVN6EMpMofoL3iNzNtz5baXxFz54xuwkGoAtdpzh6KiauKQLYtH3SfgAvG6",
  "key14": "3cJ5y7Mgssf9EDw2iEpyQVw7YQrMycLfDzXPBAQRyBL2YNJbDB8P2NYdTRfR87DhVGiuhwHqfiBnkBQMmyUKgDKP",
  "key15": "3DEig55FehsfQMQBUaFcJGwMW9A4AMnEL46tAo2428w8QJUf2WFdWYPqghu5AQayWTmYp9CwqKF6H7hDNr6p5MNN",
  "key16": "2bE4nrDaDUJCTS7An48jL2hrUfCGqSwFyrE3Py489qR88SftF9bM792ZWuPRTgVPtCEo5ZhhA1FS5XZwfe22yr2K",
  "key17": "4DXL5FR47udMcXYJyQnC9BR45YFZ4VRpG2tWkGZtyCN9wGJuVE6rjRXKx3Wup1trFNDbgZygrCMdyznyjFuYKYED",
  "key18": "neMjCbC1Kbvr2XBmiqsDxGiikoyp7ThrDAs5k6ogBBWZfSoymwA8iNZKP1SejtvTCcbphNng2yf4sqdXUtqH3MN",
  "key19": "5iBUzbk3PBLu7mDHPXPkT4NdQ2KweERmvTh9y7eEGmve4g8EQuUCu8UTFp8qD1VGaR4JrtoEqkf1UkL16JBrJL5Q",
  "key20": "2mTgJJw6QuUDCskct2424EPsp47ULFjqEes5vpLCFkkv8v4tjvRFqp23aacko72qxdTqyFcNoNJfFQcLaw5YVQLW",
  "key21": "4MkCFMrHwvXb8osdz9sss7VA3kznGuCY9ufXF9fKn7pVRLMVjNiqd52fc1PH2qxvquHppiPNQWxsc3GZw8XA2uQP",
  "key22": "5eZsZqrmnF5omf8J7o5zrVtoPkCMEDuYpZYZgGUy3ZNSsryTKH3zmryi3d6S4ucVquKXG8BRuiCVHq1BtCTx9gij",
  "key23": "FL1XhHzMVT5YqDkvMrUQxKcwkTbaiJDzCejdaQjovUkvyRUT7Ki34mx6G1hdVJiro3WSqGE27dKifSsbQgjF9AN",
  "key24": "4qaPBbJv8rFq4s3N6iW6BtaF4XYgo5ULDPWPNSeUEdRDKi97GF5abCzHmBLGdFnpPwNVTtZvFViRfkw2W8wPK3ga",
  "key25": "3iUvnfTfyz1oJ5Qz1fpFVR3bn5UhGxueBP7emnksnyTnKWBVTBfQDx79YaWNmisKSdVGfxiWtPyuyE5vy4VBkZdE",
  "key26": "YX3XXR6vSGp71KxuT95iZSbgmV8hThqF1YqtKdowVRi3c4fPp5LfWWUmdxssVHhx8wKqd6pqrjYQWGKwQd3EuW5",
  "key27": "4wZSj3VswkVgRYHevKSb9A74Xgs9tq539f39Z9rrfe1yhiF2u6tkU7PDJz1zRvmpHuoeuvSHULYmJum158n4erN6",
  "key28": "2eTnUpDQBPn8Loivfe3S9wpcJu1n2VUkvVUHfpsdTE9omh8TwYjyRgWU2XYYrjR8ZuZcbhbyGu65AAwtwJJErSUj",
  "key29": "2LVgmmHvDj4H7J9XDyLLqC2z7z7cfFp4BAgor9xWXFTycJLctvDRWW3zz1c6kFCAX3bqFyzWWq9Cg1AA3zRfregz",
  "key30": "64DF7U42a2iFtxPBTfd58Jp6gnHQzUA9pTmHN59gW9sjYsZuuWxatWExBdw3H9vLFE7knUeDMod5Rxyx4Gw1Nds1",
  "key31": "2UNeXHd4doW2bWRCQquUrnokwjGqMzCSuqvANAui8cXSe4hwfCDZbuwAdHcHpKCoQNMqxiGCYZYYHVWsRuKgNoQp",
  "key32": "5Xcuad1BNDJdAotgc7EdDHZyVG9wKw5GKyYWJxeaz7tmuZKDFM4MC4VGVn6XjyBRQkjmvGWFwxDF4PvuihYc7Vqg",
  "key33": "77YiSVS1TeWHa3iA7PC1XWcCVTomUK9vgigaTQVBdjDbzfLEUAEdmg4HbffsVMd2bkTKHpP6TPBWZTsU9mwYr1w",
  "key34": "4nVvJWubGo5DRweFuse43WkdDKUu8Kyhqxgbbaub9ZpksVrqBJRD5E3bk5ruve736PcdrakVJLuzoG5yxS5duPvT",
  "key35": "3ggAHP18YYN6r53T1Y6mu4cub228FF2kbAsBfNU3aKGEkU3niXq1ibzimiKk8XsQSSghg5ewdkNwxUrRkRAwN5Er",
  "key36": "VrPYxFpo7RyggT2LFES4qGYEPHjKZdvBedJSdhuJQubMVn2LCqceWD5Zj2kPPanExkBfz3iqooVX9tw72eUvAmD",
  "key37": "kq1E3PiH445aTTgzsns6Wmxy6PNYP2xJyhFsG1Nyq847AY1SiSYYJsXmFVUgFyuKXFjVHEuqxpt8fKDgZ6NTMbN",
  "key38": "D2M5iVPTNcqKengTtJ2wtiZeDxRLhbd7LaX3AWS8kHLswaMnkLT1skj5iEnTp4HoKTbo6WM9iBrTcoexAZ4gBmb",
  "key39": "hPj2RUz336uFjopNXutYZosCtGeKYeU6vutbeoWz2bQ28LN1Csg9uxDq6AE74m5tzXHpqxe3QUiC6mvBJFaUH67",
  "key40": "4SxuwH3xASADJVuAa6s9RNX6sqEabECnAeveDtdhYqXe8me9SndPcPwexoxu368mVKq5b8yhdBBxKRhA7M8RVWCK",
  "key41": "NyCfvyLyfDHZ2VWYbCKwmLpaTS7Y4CKH5GYnvwGHkBYxGdQ2hii1ssFz8CDHKjWD3YeHaRfxgogYa815nkeXgcZ",
  "key42": "2JwJ2DoKfBxbf5QApTTx5rjnAjpcuRxEU6A7owhr5EV7GHg6WyFvRaGmUzckV4CCSPu5BwsCc6n84TVCy41tvYNR",
  "key43": "4Lz5MQCAwmokXEY6PfHMjXKfH5t2PQUQL3eAD4TLJkFjtWqGF4yM4UZsJKZUM1xCB8z1HRf833h44VSvE4REWSKW",
  "key44": "CwDjt9rLnosdZgCkwPyStgjKMsN7xP1rBFN2LUgTfJLVhd8ALE5oyCpiJzxBDe52n8K2AWrh9VfGuHMxesZQD5X",
  "key45": "m9ZXMrpsNaq885NRC57egVXccmGRvuRoHdNQWwdyA94fNmmmF4QLYxYnMyz3m7e7PTpJ2aKt9rVAJ12zfBe2Yii",
  "key46": "hjQqqZXzZDKFbpZ3h9io1MiJuZaQpKVZwLtYZz15v8cabp1Htgi75deVrawHNEM3AmUmmKyF3Xz4VcCE2rLLWcK",
  "key47": "31UAEGd7LQXMsnMNFYkX4xay6NrtNXkdSKhrYo2tsWSLt61f3hdUpq4zmnTTnpyWzXHc9WEDA2Ptf7Rhg7cicCDZ",
  "key48": "3xsSHkS7c8tJpB5PMGfttmJbaE5MQLMZNLHukXsDZ8M6FC1TbV1aa5oWCMfz7D3k4cpUu9qa3JmSveU6B6WTzbRf",
  "key49": "2G2j42DXe9N1gXE5wt46ehgUZfCTVFNySQE31hmaKqcsHfXBshejHsyJYsT1KufxDuf1QeoFLCFannNHBmz9HFFi"
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
