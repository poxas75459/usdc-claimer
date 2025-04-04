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
    "PjShcVmPA8KCyLKSyDvauDRzJnxnfiMmT1QuQCMA46qAnbcVj7S65gut8hhsSNWnijUMA1qAb33j27BCEZb6rqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E3HwfNriWJ2Q9Eyo2tQ7zUGeyA5HM92rKLzTWva4QaTCTkWipBNo8xgNKx6TyJ1mZif1wGvy95U2pdTcr2VRvt2",
  "key1": "F3JF9g9KCr2ir7pwzxzLK4PjUkwbqYBP2QDobKEauqXq4rXtkD4x6acrjaMQoyFinwJadUWLc4Ng6amHQHBfgZ2",
  "key2": "5mFJUNUV1kbJ2yY1pTF3judPEivdRNyT8aH6me7mQuHPvHGuJrHrMJH65doh46zepxWC5MhgeNhNxTfS7va3tJJt",
  "key3": "5hfMuYBBmTeYhWdgzpgvpwX4r4xAfPqbfBXufu2dd3ZqxT2chczrqtKNGPF98LjM1FnptPij7XLBqojqzf1CSXvP",
  "key4": "4dbTHpQuzK9YdsST7RQ8VzjFwopoU7V1JSqZNUWpmJ5iagPSwXSxxeuUFUSXwJzAYbTKwbuFeaGPbiL8DzRjVvmS",
  "key5": "4VZZkLT9S4PrDQxnSBG34ZZFbfk59gicY4vvQxXX4TGqfhywE4jc8QBcE3wniPE4BhJM9emjB4heVaXiWftMNJKv",
  "key6": "3nAxYEQGfbQTA9bkwQtfPwrwWHofrL57hKfCGBcwVgyVqK6AVQnJGvSXQSF9rqZwNs8m9ZzRdYC2wh1foSkrYEpt",
  "key7": "5DuUQvkP4SAagLARoG66G7qcqpBYjnGHSvDMxXZD5o2MiSx1qib4FZcpvAuUN3d6YAVsYsvnvaB4N3jq8BxFbpno",
  "key8": "4vTQPi1WaePhWsxr88V4iTcPBJ8o9XWBzFgHbFVDB7CbCNWSFqZ3SGmuMTcdTf5AC7S7f7j19tp4EQg2CAnpdzAj",
  "key9": "2U4bXX3iLGzLJPRZEFbWboEv7ArjuSFke2xRgsA3g947Hdo54qJf9ZN7GGJBuZ5tn1a5vHBWuzTY4AJa7tbRgvdB",
  "key10": "4cRCpEVhet6HwC4Kt8qzf1mMSHaiMdzUYVtqDB2FxzPzcRfotJsyaaHeD3bYrF8sBvEpYfdph2GS3YetcXVCtm1F",
  "key11": "5k5Fg9qJjvhj2vpkkyqTPNSXgUYpx6ArDEhu8pRpqzhnsfRxyihD5egEhWwc9twaHj132oVojvFFNK4Yyk9vtdnC",
  "key12": "5neDTGRNwnyX8RHbnYawkxbZpE5QXXCB8D9aTs1ukxDpU4v5AwbBECBUVoSxctNMQ1RVvsYQJ2NTMYMNFv8YB9FR",
  "key13": "KmEbj48R51iwG9cqMN2faSWjwYCyUpjXBwwt3LTMevzgkzu2tGeC5dRyvRTz7jDE3rswKzswd72Dehc7AYpWfMz",
  "key14": "5qQzzomtGXWKwph4t5T2JjcAiVquBwRA1rWywqgPYUHn6NdjvroJwUEcYndxuXjYoPyECvxnxwd52R45f44Mxus",
  "key15": "1JKnc5YjcuukNP7nVFmtcHGpz9E5Jms5aZ7tsAoTFAHzcw96Kb1dnscb4tk33mrDkGPi8QJqvfVSYVvGERFmZfA",
  "key16": "W5EJFeEhf42UsuP69Nt35AMoD35PY8G9Bze4q5ZgkhULk4XprQdUEPRXHFABiHrnLys9ApDTGuNt4rq7L7Ah8io",
  "key17": "qxYY6Ysn7FmrL9NyyjX9P7RuADTxp4ViKMSb9p5W2fNqSM4Qc9ki1ZFbbFBWPyTuW4wtFCkGTEFHMJs6tsvuBJ1",
  "key18": "4u9ogeiW2X5HYVfNujZWASL8zdJSYsp93HLgiXdcCixD7iqKzjt287Dk3q3dgHgmfAYLYePs9faCFxj5rtoadjgg",
  "key19": "2StuwBFVaZWVhcHhoFn9yv2R1FidQWkf1J7cQgXeRD7mEoSSwc9Z8VcSWrjTghAoC4hF3B5tQyGBKBpDLzoZEokB",
  "key20": "49VpW9TS8TDkSidQ3SNTszSCpMCVQ9qHZUznseCyBNi9eUY1GfhDPsUsPKSV7HxTKjxYuFfpFx9oGak2aJfCVEBA",
  "key21": "3upkrJZDFWXNtopKfmNdoJ5eNBWahD26h7A1Wr8McxLUJHMBKtjBV37wEhg1Bw7ApPvk28TKqLgYxCUYj49gFcdF",
  "key22": "5d9WoDmCohB1GxGn54CmthcYWNZpV6mEQDZXy5WE2cQPRvjoiez4E1wzx9J5upNBN5PvkMC27Kg4zTZM1o7gYSQV",
  "key23": "2oo8WAnwjdWQnhbZGTfwhQTsK4f2Z5JKBquogAJ4D8e5MwxjjD28zvxF128ipzVNBYocSDtRLdaDcLjZ7DpEep4e",
  "key24": "4CtCrmgfXuZfLZgWxxZQQRPJunS64BjHug7X8uqntAh8CC6V8xrLqxtaSsirKYjXnyxtjYrTjoHtBNMZzF1auhSf",
  "key25": "3y4XJFzr52h6EJbgWHMo96XfnFuddbG5RTooeT8WYZBPRztfohwHNT9UHoVG52v5yUiih3ey8WULZck53LrzUbig",
  "key26": "4FXRzkNeQdoDeaUqKuHDYH9hgovFnNvVxYd5NnbxRzWw7gVJT1bMSDmtXmrfYLcBWat1nPKoBQsJvyzaPChMvNgc",
  "key27": "2oUFnoC5MjFDSpw4Aqy8kavWR3yN4KfBi5SuttoULVpS2Lt4uzdB5YBm84x2KfC3HQvMtyZQaSg8fuPKbyRMdKai",
  "key28": "tVhYus4tDdBkVSUwaGzyHV4wkYDKYBn8Teq1Dm1mjjEDgrEsytWWf4BNKPDeFTHLEgbFnAkeDfQVR1f1ePDRykk",
  "key29": "CyadRqfufmkVSJkMjmSd2b1M5wCG8cebVQCCxsyGT4zN6sHf1R1PhmPLBDJAsxj53aMYF8c1aviCfjMvr9jZbpE",
  "key30": "2FudEwdKGpqAw7Di1EZNh64PtKkC7EbVFE49e9NjkSAMtFfJqyYoimFcdt2TK1DVWdYf8Svrt3X7rGnGT6SJpJU5",
  "key31": "fLHwY1D1RQCVFubY9obXTNMufxbqy8ns5YzgQRATakQ2mMYbQhKU5XryVGQ78WiEesBGpZGTxBz31qPsnQL3jAQ",
  "key32": "2HQx4kEMrWCwcXn4WsAWq3hCyhQiwoHTyCdV9zqESLKtVwMMWwLQkmCpBUaSRfXzyJXAQF6xgDPAzX5EbDVcMCUS",
  "key33": "294eodz4rnacG5jrKqLqXJjLeQRLMNpngHFUHH99VUAdLMEtBi2fNFD4k4HXkX1gUbXHEap2dGzg9jhgTy4mDduy",
  "key34": "4mNzkAedEcuseTAJGuNfMHrTgJ7b2oKsDLiG9wbRwddT74dpbhF1FhvGkyTzSp1hhqnjF452789zzrpgs4RBNRHy",
  "key35": "kUCcEpm2wNUbf6mruKJRyTKoZ3tn4qDQiEdLpVbL1vA4uKUaPzToekE3oKzSnpPgYyVxD71ir2SvuKF4geBZHGS",
  "key36": "Jv2expB3QkUA67NAg4JxjiUd1iAJ8H1PWLk6M4hkx2ykqKcjNn1t5TuhGnWFEoRtsdNJRzMkeo7137QF2K2vCYx",
  "key37": "4D3E1V6vMToLQuU1t5VLvrLyUr9MwfB73erHVYRN4vqdhtaJCAXYHHueAivRzT613tjBabDny4f2zg8Eq4zWRW6f",
  "key38": "2o2xkqrbqnBzGEUqKqZNw3MCoG1ogRmmz8PCa9x88TZvR43JALBQ1dSQiBzRJ9XqCyoXRA2vi3RZqrXqdLxNtz3z",
  "key39": "5jhjzufP7WqFHJLSEwmtM7kF46E76G7UtWZCR6ESPBb1SRDXWaABizXoaZfNQ3B3XcwNrzFzbakPqG9wR3tr5FJz",
  "key40": "3FfNzMy4NrqpVHgpSct1ticPCJKkhYoprEdmjQQfr4ee3TDgA65RwoxXcSEyiyztR6SqZWwm9mt9sLV697hABkFo",
  "key41": "64JGWFAw2z89Ub2x1anqZPwFRKxfEKvJtf4x5AVVMmCtRjCW9LJAuryMAtDnnmFCsh5XVf7BdE2sr8seJVQq6KzP",
  "key42": "Z4uXxznwqZ7MXUM4XvhRjH92gvkEaiVezAMw1bujK9QvPVwWJEL4FNBGq6LGKtuSFutXJErXQatYCpoPQQQfiie",
  "key43": "5Uy1XYQeULZoRqjMZnGBYcUHRr9ZwGtJ6AWZxJEkDcgQgzZVE54xW4ps67es1HsotRvh1ntXdQozANn6nUNYTznb"
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
