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
    "SJUTQDLaMoC8BjMfiuuak2wywV6oYzaDYZ5zRXANhDUdMP8tPoJGoRh9Q4enQEk4VTE4yvwy63ztr7gjzdH6LP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BcHtCdYEjTngUyJJTNzoRhTZcWanCfDRbEDopDqz3Z54xocdKbyQgdhGXjchK2dWSoxUw2kBqS2U6yxC9bQF98w",
  "key1": "5JvaL6L9rCUJt2HjtUddnJdvaNxsm21uGu337N2VA5EHH4kczFLepuB54BGYjewjJfuaXTpwmMNQMTU4VsbLY5Br",
  "key2": "3X3CJ91Ksao8RVh3kr3vS8eF1TK7foz6hr7osFECToqkWpRmmR6EcahFRGKsYh1z4yVCmNDNTnsNwCSzbr2BgRtE",
  "key3": "4tBzDawUtT15wt52GMGFoVNSswCw7vKnnhNx8Vnf8aQYTf6chRoRZnxw4uYZSN6E3MbUZV4wwJFkMsLAEKpEiihw",
  "key4": "5WJ7F5Rb32ujnECXiPXk66Cb9HayqHpat5M6Q9ZYoisiyr6b8nsCb6StegdCPbfB3XB8QiQV8mTFzHT2VgRBncbP",
  "key5": "4VhEWLZwLiC9d1YEkFbSc4479sHV7knKAfXNA9hvecLsxQ9pCY2Szs4368mVw5KgXrhk4cgki2nPYnkp3CPVaqeL",
  "key6": "4tYQZky3XqT5hpdEQ8kTxQ189VwFWNh1sqv7j9cQALdyzzTt45Lj53oUXL2vBP54oDmwDrwZrXUcZqb4qMmfPFTi",
  "key7": "4fUk1K5jeZ3JtkToQkYCeMucpD6kMa39Yxi9mNNLniStYwdTMLz5qZmJ3k4Yr1gLozthd2Q7kK4yrK5EM2wne3yn",
  "key8": "28z4hgJCKLC4cBbYo69eSFBLrqAPufcSpb2TSz35huLqVbzUnyJTJK6mi4kcQtbxNUuisBTSjtMd1CW5D4u75wCM",
  "key9": "2MtrgiJVBtyZeS1x7EW4199sT5T5Db9U8YTJTmJTZi6U9h14pqWriVgZM3FTrQGne5SoxaLUJfo6CTjSe1oezUHi",
  "key10": "YSJ3MXMkqvWNsMZ96hqsJsfQADpUtHGuTd8QtR5qRhJ7B3JH3FAMkvcoaqDjsLBwRqCyevvLZNBaga4zao938Ww",
  "key11": "2VCMZEpUNz3AteydP21hvmcYrHLLeXJQVuru5bF9FL9EvzSvfDdR6kmEJks421zRke63xk4AV7ciAoUWNwvVZVuK",
  "key12": "vQbNcKdC3ur3t9XoEA87S2MkrVf4qejijGQVW1NMoSckQ4mTcM6o9uqFvq2UofxMaWsAkfQ6uN3nPcRd7jQz3EE",
  "key13": "4eWFper9cB7VDShcvZ9bHaKwiveecoJJ2HZKYammZPddGdj5vWTk4cu8wn7a9bqZkV7WejVJQbLc8jVRxyZ4Cht",
  "key14": "4SAWTAaYoTZF3nGBbS3KkUj8Y6E1VwBVSabE2LDzkC6KQi8TpJ89zDXDvGsVHvmFECz2v5NWCRrdDDuVpmgjvM1z",
  "key15": "2GWVdoQZuNQRJLdiW8MrAx6aWkuhQ4aku53qY1vusDCJTWbvrHcij2P7uVDRxmoa7tdRTDH5mLUZsHD41r4F7c6J",
  "key16": "3wsJDCdC32cRhNhYq99AHtWPhHJmc1tvqziuuKdKeGg34cxn7jBmAFwRm12EGd5XLa9PmThPyEFyMidJdYGnag9a",
  "key17": "b5QqumNDoWk8q9MrZs1ZbEhFg3R2mqG4PvSoJRLbWsvy6KF9BnYfuf8WLvV2zdBN5AR4y5Y9JmE2jXNJwGVBUTH",
  "key18": "5D4u7YsdrCz6LDtEA4p5r1WftDibnHowYn9fNSFL7D6AA5zTNdmDyDwaMzYwcu135H5VU1v2RpGTYG2TaUXB6FZH",
  "key19": "2BR4VQgynYGEBJa9Tk1qjucDtyMZApnb2vY83iYSZKA5kBVeEWFG19NLWeNuXcoRgKvhNYLFsKfFq7jTd8bufTq9",
  "key20": "2P1iFNdSLVM11cnzKSCpyTRYqETeGEMvepAa9DMBGNSoF7EmKyF8Y5qbvL5bMAbxwHsXmygXTQJQYbYSmdHdkyQQ",
  "key21": "38UsqC9ENgQBibe4pduWw5hRZdQqLMWvPCUjdLYQPwC7dBrN7eL5JdmdR4MC16E1pYWtCBRmSMw4L2UzaRbGttuJ",
  "key22": "Fzfunh27sj6M9S4sqsggPtUgu1BsZaYXn42dk7E7CSdZE9RfPLejHX85Mu4MkHtXRBXb4SBtSUtFLrasTEr1KoC",
  "key23": "4xviSWw6fyE915RF4VAuR7EJxXqvg8K32fMJMjMZxHjKigSvAidvuUttfP18HRn3hgKqyZ3gNA6TK3nTE3PAXWCU",
  "key24": "ifogsL5GtAzsBtMNKSSCHt4eZcUhX4ARTsxVRKjMBiYhSWYhbuzBauz2kcYf16NbUXjpfiLFzTnwsaxL9MuNiri",
  "key25": "5w4oFyPTTfhV1dSjCtfuZUEa6WmVHN9CHJGT8rv8q4s2qrcqFfJb7ZnCWwSiC2nZPhN6BqSHyr78fCqQQT4MX78H",
  "key26": "4YjWWYYfTBAYc4Arzcfxx1YuX1TDzRRtwmAQKwCCnjPyCwBmVfN2qScNMg3x4LMuEynC2jYSSZAyaXXAU2jTwA4a",
  "key27": "5yu4AjL5s7pfk3cPpbpqpLfyQ8tUrA2iniEhgDzaMReLCFEXhdK7QSCJ23vK9u2S3zQAYSikoXgVBA1ZkjdbhRXt",
  "key28": "4rVuZT1N9ZCAND1kK3EZVRgXEAt4rwmeEiRMqyaSKQyZUe9VGrnEtknq5Lswcea4yPXVBncLUoDyRUsyjLdaHMDi",
  "key29": "54NtfjLWzp4bfdHb2jA8GsEf75wVRuk2csJduUhNM2ddayvpVUCD4kD4A3wYWd39wfKTv9VAYv1xnWMMhReAiEc7",
  "key30": "3SWD7ctk8wzXa8w9TfZzctVMCivq5VBHqo24oWzSswswwwYJ1BS31ufLheDQCptdYUhkRPEJQFKHhcSWZCtTLdYw",
  "key31": "GKGuUpnipKSrvz7rTNyN3FjknLw1GbioiEBPnvEeGXujS3XFHQ4QW8GLpVykaC1FZ1CTaBs4zEdCLkRi7YPVY6c",
  "key32": "4swEhA5us6R6UotXbcbAXCuZhYSZ7jwSoG3b7sYKUTe3UN5evbUy6WhmkFAWNbfRNsYAUTZeqjj9VDqQ4zXTCWzo",
  "key33": "4t6fxCeqKMZHgdFAbAarfwZhnV8a79CvSh45D8c7CykpkQoueMyC4w6FedcjJLmnpK98S2VQhipr3pvRXT47vfwh",
  "key34": "2o3keMdgUoDoT5eeiuxs8bcDTJUZP6hDCoZAKbhdKiuGY3TuHuSxQkyayTNo7aDXB8RZMJSjuE5Y5Yp1SbKTZEEt",
  "key35": "4uK1UriY5kK8AVsr3uNXqMkWBHxDXDLsPaBkgEkp6LSWEH8EoScUXhvqXE5j6xuT78o8ME6K479wFv7ym95t6EFS",
  "key36": "2F7tJQm1VakhGNdSYPK1uKpdYqKpAm9cTa68rmmseBxaQsjog6NNTNqwR33AuXVQNeTq81UopjbTfDqNnHrY5uQm",
  "key37": "234ZS72246qfmKpNTTF3haBbNfX477DmTAhYUfV3JVx4BMW21LZZZPMTy8WqipFgV12gBxo7XA5pPb9wxK9VCVTV",
  "key38": "2Lub72rFQoA7DytSL3L3i1zzh6pnJQ6sT2h2MCwaATdS9UuRdF1soXKsw19tcwxz6bhXCbGvvStmxP8KZUJEuxv6",
  "key39": "2G6kZ32scWMyrhoqwj42ixXbpPU6T1maCfHYWPr9crDRwLcmtGL44BvH8vWiG3MWcVhtKTj96sU6ZjopwvGWraDk",
  "key40": "3iWYnvTY4m4V9ogt7idtjfz4CGqnZqCKEL1z82XFawzeLQxKBVroqLEaRYeawaGoz8uBQa3jN7cCTn2rLNp2BxyU",
  "key41": "3dMkFErPFN3FxHnHhvoMUYPmzuCvLkdfQBcxdpXtf6oYsgLquk49Afm1shQ9aFJe38Y5GHiyrcDWR4MMJXqJ2ivi",
  "key42": "2H72LR5iV1ZUPVeLirXAryV7jwEJL6qvXr8KJsDVpYYL31c7rG3DjmyP4BtqUzkp34hocrA66EMUPxXU74NXxVV8",
  "key43": "2T8jLYoWVDykhEPCz99Lf8DkKkJoR6ngkVDpwVyC8YNax31BMjVewVeCvuB1xezox6uMDhoXD7WPycJZsGK4mKcA",
  "key44": "3cNJ8aeVuJapNckRC2jovt5DxMkx2XAdPyTjwnZZWjKrxe8YkHSdut3PZaBCT7pWQUNq4HFXG69jeAoJ3KaecuMt"
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
