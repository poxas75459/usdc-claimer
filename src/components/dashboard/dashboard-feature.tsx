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
    "5rQ4cmKfHQYY897ppQUpSbzEj3vFaUZBhY3rFmnzKbBiy9VTNBdYYsQTwF5NqSUebCo8nRgsYbbAs8BpWvKTyLap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zCWwv7SJjqgrqaX5dLGYbc76JykPDe4LGU2s3mxah4TChn3K73xkaDfKGcy5Jf2u1K3WNa2rdyWrguswc71KN27",
  "key1": "2grwxNwnZEqm4zCbf8uB5P5c6mmZH4F4TtX8npMfYvBG2ZNYrBJhrFeNjaDNtenddUGP5WQGohtZyT9YWMR6b6rJ",
  "key2": "2eDXB4owZrqdmMDCGLbAvMRPMoFvSGQ59Avm2JDyinPxuFfZiaqYDUkARvH93PmNNacW6ih4M1kY9z7Wg2FK8UzG",
  "key3": "3trS79qqVBfvBvDTcbCZpQTMHjmCYM2XaaKsp49quzKenG53CvYG8vbRwgVW1XgAMcKyDQTpjzCxwGEGosS67EQh",
  "key4": "3CPs3zJ4Cxic5oRrQT6qqNifCQUYtJYAcpVDdvtpx1MjGPkZxEApGV6dvFCkxtHU7S1X73b2aQQcXkQZn8mx1wQC",
  "key5": "5F3rme9bS2tA2XEdSY1gdhMFpCMQ1CtixUHmNaew5o1yZrzGvzqADoFekaXdpz2SJPVBaeV32gxZ6pfXrKEGk1LM",
  "key6": "2AjNzCS7FWBoiy6hRriyQ1AyiogvNuUzyJvZTydD3NRxmKQ77LUVaduvxqPcQ2o4pVF9wrsGQWMP8mR1JdJ8ufhF",
  "key7": "3iLkGoBLfMRvNooEgTLZ7wTf7ACCgaTpryUn4M7MhWmQZg1RSU8EFnDgQLWUvKyBhCEGVLDos9QmbFmJYmRkmw45",
  "key8": "4RviPoQYdCmDKnKT2tpNvTNhKgXai3BWpS18iKBbAYhz5VQN4NXgfKKe85wTvvCLHrE2vJgtzw5CSm4YGF3Jje2W",
  "key9": "5L3XVRfW5LyLAmYo33w77VcqKuA8X6TUCjpYAUQWxQCHpcKR5PPrbU45DcCGC53xKn2em1pM7vg3SsnXfa3YurSX",
  "key10": "28JojEhaAdf9EZ4Z7bFj5XmwRwD92vRZwCoaDajDj5H35wsXDdasXXZgKLqQ57GmkoTNdLN9tYtZDn2iEtqwZKeF",
  "key11": "29kMJN3BM3JrhkoHr1NL93aWhhBGaCn7m6NeCAPjx3rz5vdzvrxrEtTNdF6We3cvoSdSFWb4J8HqYXvts5vJCVxj",
  "key12": "4h2G9Sy3LwkD9SSq8zdBR7FouJ9X1NbvTkvNDkd9H88YyWxAouq5UmypBjr6qJgY4WLq4QKQN9TPuQzAd2R66FKV",
  "key13": "3KVQLnMhbKHL6kjxsUHwdjXWFpwZWPyaKJLPdHJw2wqNPGBsAVw4teghMuSJkPY3CuB78HnKCV8bVTnaNtNSmAkC",
  "key14": "3ckX2SpaTxwGmSHpnEjTExfQBJjCKFG8HFY75WzEiUMr6zr6jm7bQFg5zetiRA8qypciQRtagyFNNP7SRiPcMWU4",
  "key15": "52XNAqkzjkGrK6AimzfnNmVQnqhJZbYDueHfo4gamfnWjo6VCjAkXUx4C4hsFkjuDaZDeZfjne6aTivCr7AYaWrK",
  "key16": "3dEYb2wXDUXrv6Eta2bh6Sz1WLKCWYwadfW79okQS73eAafrs2Z7MN36yLkWXhVraN9xxSZjtw4MxHZEvCQSkjsm",
  "key17": "4zky78Zp3ZrY6U24deW7LS2RrzHH6mzDDRQzvJhADj1EoMSqWAx56QirNYT8qQrxZsAYb8TEuyA6NyyXkxuhCYab",
  "key18": "76jEPHaxhMJRcsueYcaBASWRkxL41EuczTTw26Q3zLPTSuPwGzRTuPWQDKbiGodMREpKQMWe485fzij8om2ctD7",
  "key19": "Vgt9LtgDB9AehAWBNKnsU9hp7hUnNdhh1JcG1Vfqvhduysn7LFKAtP8ZqCb32upjRTXDEXy5AvRgvrgzyjuYSwA",
  "key20": "4FHGEsBjUPiYLw1rLcbxHRHvYAzt6n5G3FXKztCzrrF9CZAnR4NxYnrzTiYhEyYJ6URoUY7jC89MvDe5w9LUfV1q",
  "key21": "4pYLASpG3CUFVT6JfbLAvY8hovPttwaXJCdyJFSkq5cjALtAZucvyiTLwnQwX9nXCzRW2cwuNnwNGwe1Pb4yeQKk",
  "key22": "2xpiGxut5uA2SPDGBEv2irBHNcn46m1SZ99ECxJG8hXHVVNtNr1Xg5UDLG53FdkQXn32VJiF4XxE8sqrZR5uKzFY",
  "key23": "5mbhBefiset6SuNw5vxkUVPzhXZ92aPy23gjErTBkFGSHeZUhoJzmhK2WEQYP7R2oVUumZYyD7Yq3RJQPqa5yw4U",
  "key24": "9ZVpgXXCvCKAjtvWiXFGPPq4xQxUuwfeDYVGVEzv3P1fA3noLqapRnRRB32x3r79KRfYGZtUb9QA1TchvyiecHv",
  "key25": "2JnhWptYFPRA8wBNNXHanUhYruUP5EqLqkHvPEFa4hnBLLvU4EDE9DwUkpQe8TcHiaAWyg4YJmLmCxYgvJyzdLdt",
  "key26": "2gYVcvaCiEsBaeU5vdmXPSGdRtdAeUjxCWsQLrAJtHFnVsivEY1f925XDk8qxag1Yd3Cg43PrNbeNqp3xwyT984n",
  "key27": "2RvEXWjVV5n7Y9X6KvGjiss2NSw7msyEbnRN6vgYn6wqAByXS41vTVMtKdnqCLmxdz6JUgzXMCxTcivtca6UiqCP",
  "key28": "u53qejAKtk6gGFXrQM1ek4THEB9u7Aheg9LQ9exFfSRMAuLMq3g5LS3iCotHbtRR96e9ShvXHME7fiasPFNqLvm",
  "key29": "5nyBZN8braDx8HqgFGpRbtLDr75Rp6SJZpcGnBYXeNpwYdPw7usb4Gmt6ZGwHC6AcFtgywG6s35isnj9j5MDUBNX",
  "key30": "4fJpXqWNd48yLYwudoW2wbih9Z3VieU2zEy3JUpao6cAL7pGoGtc5omVfgeTYKQkDP1xnKaogNgE6ebM9NHNmwHz",
  "key31": "3gitbL86b4BToJ9iJ6cLJ1wGMhUC92vu6dJAcgRthw1rX3ibWsnoqzeozjLvQAQTE9LZUUA6WTkTk3M3s6UPYjGH",
  "key32": "21jijvvXNhf3Cu4Txky4Vbo4bn5yg7mEuNRqzBA8gGYiFE2BZKa1jAT8zZHFjA6xdHygJFupDfpv5XrT5fS3iDbC",
  "key33": "2JSCEvARPKPCRNV23RH8SAyM2eH8DQBUWCCB5tt8XGCgFG3NvnXdM6DsNnJze8rfLnsd7R5a1xL9TJAGgW6FrsbB",
  "key34": "5DMpmGze1yhS34NFMxWYwgERLzBqwvpUiYZEUAyoLXmNgSnqdtLH4fiFGBCjECdMu5ajifVD7JeKUNcs79t2qZLF",
  "key35": "55FwuED5e48wHutWbERkYbpmzCYyMdUatqpUpmfP3FMx61h5fkhAgLFPfHFA42GrYMBMERgWsmUne7dkgRrpGfAh",
  "key36": "4VqKhjKZMs5qDMYuz9PdUvYpwqgrHfNWAFdwzzon5RE9mY8dL94EeTmHnCCtZC54veNK9Eh4MEDVvqEwKKCZME7b",
  "key37": "2hQoT1jzohQ8aEFDdKqE64zxovgMFb5KmqZv1vMAs1haAt2z4HzjntMoPtCDA1p5pLMc5mxJgEYKY1C3HSxVoa8G",
  "key38": "3Xwt4aZoeWC1EaDMDiyrM4TjNc4tA89SnQiLSe4iepjxe8MskPa3GkvUCaRAKcBmxpywk7hKJo3KCtGzbMie3RXU",
  "key39": "4pMFFV5cHp2rTdNMroSU628mv7fAP8S5Hk6hjDGeHicYFJZN7HXi9rAqRHgAoTgR1owWCS96U2RETn7Mf7eNviR4",
  "key40": "475Qqq5Z7aZ8buP4k3J5PqX7ichwv8yJyRhFDSS6n7ASUJ4nkXTTSRALvUHwmxkjg91kfDcAwQJvZ4z3UB6PQbs6"
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
