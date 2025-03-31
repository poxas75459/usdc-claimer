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
    "2uknk5wyXVPx3kFLvBAPZraUrP1Sdnn7C2EUns3FLdes7V6CqjrwnRApn7WPpS8CTnEKst3gRxhA1mLRLyJaf332"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JwLuHThPdaq5e2yTUBp1WZ1unfA8jFuQVvGmpaEzwUtW7nLosmUEPQttRuuALfcDxgB8QEKwuyb4boFMekh34He",
  "key1": "JsMygLHG69f1bvzcThZBrM3zVym1Apufz6rBVWLxRRky9hGpyZAdNdQiNw3HgBKBK5yCMcmDo14QjVWNgaC3cnq",
  "key2": "MydhQdgxxS5dSX1e3s1toUtxPUpdHMZnM7u93vQBfA1SAfj82hfdgZdiSJ5ehM8SbVzeypqUoRaDruQNKfUjeaD",
  "key3": "3vmUQanhCMnghJ694Yy14GgpN6WCmsJccwSqmzpFoLEbpoxSmPPiikdFgsjM2nHzkWoNohsWXbhHLeumpUk1sHTe",
  "key4": "2Z9fX2ssU4QivSUp73vZkPW9ZwhVHsYtmhdE6e3cCR7e3TrsuQw6a7DZ2V6eNURsagMzgjR6zMDV6jNP82o65CUr",
  "key5": "hbgHk1N1GRTzJBQDEnMo9XCtkRzzVqFiTcWJbPB4y282tUyAKXfeSWXGoHCxSTzpHzLBa3W2tRpERr2cFbhrUZo",
  "key6": "4HMfuGoLkqbvVcVnS6xuSDAVMytN88S9SfCSSix7bGC6BwX1SYLzA7fMHttDHVyDtc27Cw4BD6o6SrfhxufVqMZm",
  "key7": "48Y9Q73QF6RuFL3Ar2nsbKCbjLwbsyU5Ru3VGMSQsL7KFCEeiUDXj8iasksJn6jJkpCKTsdZE1a3ek4mQHJLvvLm",
  "key8": "TppAbZy8VtvFLSavF5dDmUqNo3NhRQat6eG5GusWJ2yBPsef9CLY3M1onKTq1j6Zzj8MiNHyAJVogGvte9Cqwxk",
  "key9": "WgzpWS4daMtfVmq3BfYpctggZieogvcWukLGJDjoVgnKZDEkaAdkcsJ8LZMMjLczLVETyx64LSuoJcN3q15sHcU",
  "key10": "4SbtDyN5wY4Ymb1Bn9JXh2PC1vdNLxihEpfuN4tZzzU36D9pr7K3Rm3tCptuCpBBMgTR9MnQdW1j7yhyVYZMBzef",
  "key11": "32CMvDK4zGV2jYeS3Qc8rz3xsDqN4eNbQekr7uFp8PjzqeByg4t2w2EtNt9MKu1qgXRSR9wsgfHCjcqPa2EvQw7V",
  "key12": "2op5S1XqgwE7pjN8GLrxy7nUbfoPgFvmhMsbVSCoYASTmZ7Cp3u1EnqSCAZDzmxNjaNxa2SN7SvYSneFrG15MAEC",
  "key13": "2ZGay8P3pV77sWoJquADS4vJR9eFUi49KLvySWgYWhAhRnmPLRp61YxEVNaRFxXgx8czpmBnjQbz288zWv9XNmdF",
  "key14": "6aSMjTGVTn3CBnKxVEkuG9uFDv4P1zMpdN9NHJcKqwA2Y5T5xsgswSYRXS6PFner1ZKvDrZGkSKnhDXL3odhmMb",
  "key15": "syMqPRt16JYHy5dPmvY8ta1yjU1fgMCrUZBsYsyr8SWtZDLHXVUFQkistqpaPsvYkUGotbD7DBFxcxzK3g3gpdp",
  "key16": "3LviCCFfbSUiG4dEadWr36NkxAU4xG5cKpAinjDjU46byBXih2YXFKTfg1C92ZfdXCg69x8t9x3FPWYqfYMFvGBy",
  "key17": "5H58RDerrHhjYaZ5FwRKvuxK2dFhZL6ueqPWa4wg6VGph67Q4nj8P17ts7dDPtLSYKBSVjhx5AfR5PcjSN8V7PQg",
  "key18": "3Lm4Yb2sYwe3mFmX6UQb3r7kiLEVQ7BH1WUmmApZTMRnD3Wj2XdxbXHnCVpcv79dK7umtcy1deWFdM7ghgNNmkwX",
  "key19": "45WjhYuCE6gFFRt8YeFahjdhURWdysqiXono7jEMEGgQhDEqUpgne9MWBZg9d68ypdJVj66Z9KC8VTo1dZWFd3x9",
  "key20": "2YJuKXRynJgHEcojdvzR9zZAdqbFyZqvqmKhgBqG7P7q2pjTUa7GAREZ9R46sByPgAgTwDmhHeF61SD1iY3SVi4f",
  "key21": "5anQnpwVwGpRgoHwKy635Nx3msQFWHptUkYiQquH3XJ9hgNa9WPizvTpuWnw9SesJsX59WZa6tYdg4VumTUs2HJb",
  "key22": "4Hqbt91atLjjm1jov1vTdP9xw5kRo19uzpGKkQxsfvS1MfBTo4YvuekhZnANusEN3asHD5esjepV8VrctRtJKq5L",
  "key23": "5Bc15cEjiCMuhL5f1U7DJDCefYwhMGDV2JNafUcTuFKoe13DU3C2TgNXT87VL3mqk85VZGCQN1S4ThQ7R46Vko9y",
  "key24": "QwU4n39FuqTK3gpgt4zCqtibDHPUsLTJxVLLJ1vPSDzHp9TfGGKuETL2evFanDzWi2k7HJG1kceq2zMW1vH6ZA3",
  "key25": "2cNGa2GoRgpCXirPhagouKmuyeuUUCvfNfoYBN9fCxtCWvvFdnY78DukVHFRaFjegBFP1wW8eKPjGDye1jqKgsWB",
  "key26": "62pY2xonxzeemRFaTyWRfWJU83zjPdZKh851BQcMASqBoNkJ2GPScypWibRxnEeTNaw8ZYNY5kYsz6fwMVh6SQUk",
  "key27": "2wd7rmAVyf6HHUoeSM9Hx3ZPk3deHT3qrRrDeGsd7CxSf8sVv1maAdopKJLsTjtsr9Kkn8yPXhP5MbL2H2uvJFTF",
  "key28": "2JKCKNqHRADtGh7Kt1fXEtj8GAeoLyF81sWX16sQ5qP7gHT57r1YVBfXNcnG2kfmRKRgtkhFL7tG9dtcssBSSAKk",
  "key29": "5wPhtuX4SNMJsBzMYGkvgHNwyeEe8b8Hjmo2Rtrm2gRrybpFWzZCnsKM3QBwkyRzcKio6fwHUcKhTzVBvQkNJo9y",
  "key30": "3LkJezws2NLeYT5Tmi3CZ4j6jCDSiBrgKh8KzLpKYgARQ3nFs1fSX8qJ4uECXT9mGx3gAjnA7RTAciYbq9GP2ouo",
  "key31": "4aphqGnyM3YJR8bwHXun7BoFj1QTDRGy7bujpSY83ich8HkV2HgRXmjCd3vaB95mrWRb2m1AQLtHukskjzPLEdZh",
  "key32": "121g9MvzBFRKfNcHkhsLpmGgUdunUHRZfMDHfVix8C8X1QMrCCzzJd9E4inyJPMdRoK5kBRDCWpQQHdFHnU74pNZ",
  "key33": "4ALky1GjT6NBgZ8p8RKAd2SQq5jQjRYw1M5kA9MK1n43qfeArerchho3N6s4Qrvg1NtuVFDij9uyt3knimaNXCcn",
  "key34": "2Cpx6L7JujvgWj4ox4T1mSgPJsbTt9nnMx2PjtfwUDtXdXFmuTW6ZSuUJKLbYPjPqBy3J4jkV3pvUdQk14LVqwSP",
  "key35": "4E5c7nHWtRbCPxQynumFcaG3pXwLzvejgGkduqbkweiBHDm6vQkH9Kpoaws3dRSEeQuYVN1V7iJENgDRUHgrKjx4",
  "key36": "4ZFsbpj7262koGkmEo2EoFgv1edUi2PRANukdZiTpsm4AeYUnRrn7zyQeYDWYX6cw7tegFdqKY3MoSPKBz62qkQ7",
  "key37": "5KZ82sJegUtaPYaRNBxZVSQostrXrbwJcnewQmhDTV1rjwQ8zoUM8LhFFWUV6PwsTcKEfKonW37CZRmYRSFs39eT",
  "key38": "3Kv8LyyQaqWgnTsQYiaTx3VWZSAfrnuGqTCHqfR7XmcjQRiV7n7XhfHd2BZwCg5ASA6Qs5NJeLXd9veAjZTsVguL",
  "key39": "63mu5q4uzb33Q1cvX89snALT749iMemYS3jFb38qfc1rPWT77dMzUQmxTLhzzgVmksVnM3yNjNex7nYH52XZ4RcQ",
  "key40": "RKnKZvEeSXoFLBiPGHkaHWVka1ZSBkKeZPHsqYShR3TfBHbfgCibydhBnZs8eUPLiphQYJv74pTSBXxhrU8ekPW",
  "key41": "24vQdkyp2iRHR5AUBfJ9oVgffAWPrqRkx2UpDq9LWBZ3tSqua9FzTPy1nYkSYxYoBoYeXuFtU4hu2H6N7nystDpv",
  "key42": "3nafC5JsbjPbDaKCz2vBWxHFb8ncpxCfacazc8o5Gm9siMsSxRrEdoGVyV56iwYRAy2zarSDbPdTSr9sm9LwM9bJ",
  "key43": "3PXgQZk4adr55nEAvoyTG238ABC47aWKPJjvEH8MoD1XevBkasfkFjHkJTi2sjnTCJ745i3Bx9QgSDPdkJKjwrxe",
  "key44": "28k29y3ZzyT3tqWyTJmXH2GZoG8u4CEMcYqSHkdAvE9MxNwsSdxf8Em2pDPhjsfesrZo61Kw767SZJdLxqCNhuTm",
  "key45": "2pt88KCTgGF9psZ3p1YpDFsZnqWWQZK3UznT3G3pQix6LfgCSSoKGeYhVe3M9mpGfe3RjyrbTZRfwvLRmQoUuZ2C",
  "key46": "2LV1W79nFUcfJjoNaRyLxKPH6ApSnMEUrUjkcnzxHroHiLt3cVWndpwwJmftR436HUTffJKcPTbErnWr63Hwz2We"
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
