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
    "2QRZtzX97mEFkcD1nUB1MkAahkMSFo25HqsEiTGYvmA4DAKRnmFLbmQdeJWsyqmJhEEHTbRXE3HA9tZvmLNY6aNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NxEwxPvKEfYtUTHUNw4Cv1aS7QQ4DuQWiSifZp6ppP6Y4LNpmEWYkicSsfxDTW3T7ARJNWRmpiyGpD9phNtcBNu",
  "key1": "38xpjJSm6ddYavW2E9647NMoBg9ojH2YAVRJCP9UN2ypRoryDMMbis9TEU8x17yCUyh72UwPNWxVNWmM9THRRk6p",
  "key2": "5t5yX9HgHi5YUXM7jSbzbWJDK2vBPK4Y15aT3PaGULeNEwCVthTY9UzUBBwStDc7HnXFWsaapgoJPsFo4AKHa8fq",
  "key3": "5SEu6NhNigQCAbCof12A7ePprmKZWj9UWhyn6AvdaNRZukzSKsJARyVLmsBtu1f1LiZvTtiVRJMQbYnW86uSWDUP",
  "key4": "4CdBm758wgMzdcCrhHsf5JC8NiCNAu1k11MitLQstcQkNdpv3cB9XBF6TdbVPoYJstQYjF6Y91NV6m5ANJkvrmX1",
  "key5": "ayXY3ikszNm5asEDHBanoHJkM7SBqAUTPGp2MwzCE3m39tgX6T8R8JCS5pZVHwXkEgzRohwfDBwbDrtJ6e5ten6",
  "key6": "2LSn55w3t8PAVAHpDzcW9aSTqgpgLn76xC9wvFcKHFGwECEZNgAm3dt6Q3t1Lp8eY4XnvWvGRXFYgx8c94VAc9SP",
  "key7": "5CRfojvrpHhwkWpHXJ8MevmDLt4pciwQnEi1U9yTvT9eJSiQoSsd4U8kZafAPEdPtauEejJx1zY4ayaisiRoLg68",
  "key8": "5AGUdUFLaVophxhfLdoVShBD15cnJg2zaqNFrjwmNkVz6uA8ujSmBh2CNrtcitHCaJ41zVkhy5sokBQKjZ9N8yVC",
  "key9": "3PPrFMgSihJXnF2YrmbvXgw9GpTq8BhRN2EaQdqVqgDtGU6sH2UY6BnP4i3YbjUfmfmQBRPf2H2HZFPutrNJayVi",
  "key10": "c6Ber43vdfiECDeouF76toByQa22FUZ5eaPXwS8WAfSB5CuAg17XQ2As9iWq7dhv3V3wPX4Lu4GreGmLh6GPgg6",
  "key11": "3MuHyzui6pnvcMXqvDDJTNgQKXtcqaxSLeMrdCKBL2PLtKP89TT1rkwTTbv1GQioUXVE2TRfMKFPjeQw5TEZFByv",
  "key12": "4WMDxVxgGi3ashyRGNnRXK2dteZ324VuM56kvEs1PUqF8HiCdBTnr497P3daZsp5CLpt86bDssbY9BdeMG13qsMV",
  "key13": "564fcVzNYDewJAm6fiZbGyyXJV8oxBhjuiurwbJK6omWsZi8V4yjd8GvV4FKvLts2ELqU5XbpZbhgUz5YYH98Dmi",
  "key14": "2L6PJ956v8cEYJtG1MY74ync2DXZVzZznYYnNGr5q5jKpqQpSNvCQDnsNSCVh7wasDYMtzcYAX27JNHLqDJzhxX1",
  "key15": "4R1yRKvDpj9yq4Gow5Z1jcqgC4m2H7C5TZDAsNMRUpad9cb1pDiBERbVKBh8ab739vFHwWqAghGX9qYncWHbYfhg",
  "key16": "4fDbFyrYEbDvBvTbvUEAshLb49Qcopsq6QUJqa9rRA3HKnYdT3ZtPHRSpECTHPWtKWDYs4sLdbh4AJFySQ4JDqCH",
  "key17": "2xQUSLtAA92aQXdQFLRY2fS49BTDSutG1q3xcTiwyropjkBp4g745t6zye7dtG3mbqPfHJfvKWqqL78aSyLfHq7n",
  "key18": "5wuxbZQqJSedToEtVrfYVmb8ZHLssNVNUa5soNLz2yvPQeSNQNRrVYRGW2Qgr423wYeSXzvcxgSZtpZjoeiC1vg",
  "key19": "5Pm7B3afwxxCuv7oEV88XRk6soNSVTd7LxQFe7WhnP7BzjwE8cSbjfmn23JTcoVt1q7sUCStPjk1QjGaqRvJFtW8",
  "key20": "3kG8Sk7uCTS9qcRVae8c98LSkE1TpL3inmrKCmRMD6739wP6tZn5cmPeA3hnf7vHB5xx9tXK8nywdETWVqi3qj58",
  "key21": "3fBiEgkLC9a8939iBAjpUZw8EewUymva3817sQvdBw6qn1QveEzMVugjVTbyD8yxS4SJWKsRw8VWdVpQf9ByjQA",
  "key22": "21Xupw3jWusXEyG66UBBaqkLiLvFCQWi1NrPLHYGBQc5KwecLgXJdksLd4UjMs8GyAXh5AK5rctJZ1CwpJAHcMWf",
  "key23": "XTcYwVfCvPjYznfhtZi8CTRfAkmm65UXwns1KBBKD76LvypQwvxGenBxwSnvNdcDt4KQ5yiL2BnJspNbxFw8acX",
  "key24": "4brt4RYNb5BZKASwSYmcJUqR44GCP8tq5JDFus45wdn6N6tjiT91FkZkd4oJ51J2bixhJVRCRTzECYGT6Z57DL3V",
  "key25": "5aBPP5FA4KCnF5x1i2LAeVJXguorf8RtwhdApn6ZEDUzszXek5VqEAZy9qbYzoHLeujpKviZjErsWJzw1ZzWq3cr",
  "key26": "2AESx68vEb1yx1AcqFLoPjV9nkRNG7dPxcexdR4PCFSMXJgam4NEXYUW6tpqrty7dH1bMpks8QjrhpjRfyPkgzsi",
  "key27": "3xoaHo6rodG2ZWGJS5xmFnpMRsbpPvMGKTxbMyruhBVLamYovWnr3A1zNx8hLfr1iyRW3U69owTvfiw3oQqSGtcG",
  "key28": "5Tv2bGniSSCACfXVamg83G3T3hUbV67LAns4okoWy8Yyyvh2NCDiVVx9B1NhYgdkAspUNbdncug51MB89De6EFpb",
  "key29": "4LvgJfEcJSZQPppoZsM6PD7TDsDq5spV1GZsdEv8RB65ysJsJ4dynHVLfsKgu3cCKfx1FWmu4QBtv6mjexoyBNBs",
  "key30": "2v55FhSAjMVJhv5otUN3F8ms39ZbThEzzRn1Lt2rpDWS4eqS4Vh6nX9TgJM3NiCVc4z1cDtP8SKKwCGqvr1pGX1o",
  "key31": "4dUNUvsPLvPrdyGznqFwefGgFN4f1K4rFSKDyDRqKgkiC3MDuDEdab4ZVprPwSPSUoFMGpofavf76kWkhjpejGgR",
  "key32": "Gadetmajh8vHJ9KFRBa4mVvRiFQK6rro4GL9WnrFqCo2wA7JCKAMzw6UqKr4dhwyvJeZd2zsbUDGvyhow46LFg8",
  "key33": "23AKAGunDvMNvu4gYwysGeA724eBxesE97QD5uHuh5uC9ATwxwPhw4W6ZRYpAEPpPw9qZwdgNMxDbmXeYQCuzG6a",
  "key34": "47rXPEAzM54DNV4E9eZSuQCASkwnnRFFNkJqJEpuoQHrmK9ZpqVYCgdSaUmqpiuh63AF7vFbs8nsAiaSo3iMLXbf",
  "key35": "FULXiGMU2HfxfVrEtw6CR2irdgU1LV9W6pauRdYZNbBrgLkzzPR1siADyqn3C922qMUFW5EXvJcSjtuKvuc6ANJ",
  "key36": "2Ptbgh9fg8beo6y5JqKaRBZrzyP8bkoeEjzFsiyNmeKy6YAFWcsjcQCm9DxGo3eT7QXMWsweY6ALsYnefjJygCtr",
  "key37": "2HR8c835PgPMT74mS4yDgSGoLoMEhyBcx5byZpJDXFo1rN8EzgvhZhgtRnnmC12AHxK2yhrnRiBD8NTgin3G9sut",
  "key38": "4j6FmizKJvcGPcrEP7EPn1JQVcUXLrrJvZnuzYipoDhbCjFGzPubJCsSePkAeQw9HMgzgR3L8QH41jQGg9H1epFi",
  "key39": "4NzcddPJHRpLv86buwkRbMj5rhC2tSRYWKFceDchVsKGBPihzztamKSUTrbzs2jyq1pRfu6krMd1iornWzvPXiDP",
  "key40": "sAG1z7d91thz1PdfA9zrp4hDGDheEbZv2wRuqAorvXQpMnn1sdpToLDbbBSVrc6Hwmg4hk5wLLb1oH2Yhv6dEzw",
  "key41": "6eK9tt1ZZUzGDx61NmKtNUVCNcUTHpq6jY2phMUX79U49ViwNKv9DzS7XoErjfPeCfwYiTM8tTqPuP9UwBWfXCT",
  "key42": "48Hsa4nJjuw5QzdTBYYaFf3Upj5CnrXcxkkYgwrLzCsxBF8x3wBayTFqBUZArxTjkD6ZsqZ6bMTXD8W6r4kMFMyt",
  "key43": "3Nw9VdTFD3pSZpJ1YVrfkgtEQZ68VHjfFggPgmyzoDGLy7pHLChJfaYtxaVkySayP7njDFtPKr5tZDKzwkSGgUfq"
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
