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
    "2Y8bJWHXrebKJsQvFtiDRmWe8E2CNc7WhL7Wi97V2HrVr4v6sQjuwCRRY16i9T8qYY581v6Wj7uV1wTh5j1EVXSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RoJEgTdnewVpGWZxyEjJcvL2MmjoJZAMgET1uG87CbJ9du2vbtAiCcJX8Rmu16nH7YsKF75ujZQyji3m2ELaDf",
  "key1": "4N4F7G9uvqRx1Gwmga9wPFH8FtXG1nDKT8LLjodiaiwmkLvN3hhfLsN9sfnPWFu4gq9EgXfs3NN6A4hnj4zTnzM",
  "key2": "3F7jb69waVLejDsSy5Ao1sk3xvX3VcdwgKupzXWmisrp3NuC2yvzxuEXJq6hoyTyt8u48tWaphfx4SH5nEqmCNna",
  "key3": "2jjswfavgG9Y3C5Vpu4Y52WCovf6vcusQHjkuqGfM7ZnW5XoiH4hvMeZDP9xcDWtRYmaeoA6daoy6kY3sh7FgU5R",
  "key4": "5hmLKQg4xzVvkrE5RzWM95GS3Eb4UgKVxwMv374Fod6wPTuM2iwKwHzDNLMy3pi4J3PkUtzXrShdjezeiGp5fTfU",
  "key5": "2BTsGiFgzNrEePtk6zF9igwp7AxA2mjdWB6j4oWywokDpctCev13s4xJWJ2pPCHBZ7M6LwXN7Nn9kftnx9SeGVLK",
  "key6": "5RYz1iB361LwjmArqKXrBz1VeyZ5XApdarYhzUDjxYgfWJmQnKex61k8jcFySZSQcYftQHqJxGkjYwAjSdYWDoc4",
  "key7": "5udRAazHtEEL2fYAV1bipdjivrSn6Qjrf8HBsXqaV7j9z6W6teyrBk2aV1ho9Tp2aZihsqjkNxoDssa52dTEvfB5",
  "key8": "2tqjuTwa3n9DEuPbdnU4UkhCn8bSus2gdnEfH2LG665eTbJgXPhwA7wmKZ4rVDBHod55tdM3LPmbPF1ZdQQu6aeG",
  "key9": "5XRxh7H7BwGr8yLcWahuxbHojU7TxBn3oCfjgiETsj4ESQRRXP1VRucRc2iKTr2SvJFQr3Gu4yxkeFesFBLQinci",
  "key10": "4kpu4ssC8tszA8LGZCaFak3qSYY7izmDWojApK94oa1MHf2nG2M2gmxQRA42ho6WqBXukHB9nEjg2yEG7X1gDU4K",
  "key11": "4ejscCsSUZnfpwevSEtZKPDkkZiJAHfA1RZ6f7qoRK1H4HKxCFfTQU7rDEJHDcDDoRmWSx6C2tJ2qsHSiTbvhJHk",
  "key12": "ZPJpDTTpd3WRBgAYmidATpjiLxXaDf2P1MHKhZuEpwq2m3sNwyHxjwzCPfyQ9XRow643CnNVMyVWNC1ttk9Jvqh",
  "key13": "bhEdvYXB3U9UWpscxKbMCeawE49oyFRSAK7NaNRVKwUHWdCKBHLBWgMWLZ5b1MpMFYZhcNtHRwMjUsfF1Tz616G",
  "key14": "3Dhgcd1tT6s9ZuURFweikqyuSaTZ8fQRzLMQoAyZrXExD5pjdCMDF4UE4AnVvyp7Gr3XcaVXg7DWxHuNxbdP3rxB",
  "key15": "2yHScj8ebDNcMDA66umW9LeqDScoxRBHcKiJfryrMa3WdgQSpUjRE6wkZJ98FdNML7yVLz3B6NJSoAWNU9S7Zwds",
  "key16": "7sNx4VAPh1s2SMjBsgkuaW2QAN2AfSo9Yg5vAtg2JVf1jGZEXPncpDB64nkLHAKrULVdrpnm1miqRQJTmLJAgeD",
  "key17": "3cxXQTHwXoQvvH9uGjQoJt4Jfki3y9oVQBpe7Lub9avwHsqnbR7dsJ1CySdGoWXLK8NkhFdc5EXy2TYBEErq2qNi",
  "key18": "2aeWxDfqdGqbCeLC6hNZUgWZWcz3jXCG9AAuiJLJGDSET2kSMZ3cG4uC2aNoKdby682bn16nnJLmJVdJCedU3qmh",
  "key19": "5Musv7X1LTsjVqpppHRyhx9t8yn66yZXrHZoNnr9XWLjxtEqpWgqJbvNV9NN2X1Zx4CUogK1274aHvu6vFkVqeD1",
  "key20": "5coXrpkpA7wWRMrxzPPmrhpa5EDfQqeGi6AgXM984v8H5ab9Yuz3qU2SxfUT5Ce57yCwtDEcfRpd5GrpmHUDRKaL",
  "key21": "4y3Rr9594Mcd6amwt37EFCLy6itcB3GbCbU1zQ673CjdyQB8sBjHFT5cykVs8aofiJMgtAztYcF1k7hj7w6AzSPS",
  "key22": "4459vzJe2SrhAka1JaezdAdTZpgck8ZmkCynPMF2viBF4r4XsJCdmGMbD5Q5cVMbe255whnfJSK429a75MbFPr98",
  "key23": "2azwFQ9Dhh8XVDoAxuAL6hZJUimmDTbs2Nv2Nf3Tbao21GPUESKGGiVmry2fYPbXXLbjqWtXMvtPVgnxVP5L3CCy",
  "key24": "2TKuJKq5M7oERsRLhdgEBgrwzzCsnnKcekTvfi9xDH4CrNHcvinggiijKx2secQjWydPCNeR6Useag7qvRgMQ2SA",
  "key25": "4C59TgSkFoYpVLWgbpifYfQ6efPr1cfBerBj8EHf6kaw9iLZxCXrHWCJ2beQmje6gVWExfNvT6HvTrfUdTUKjVn7",
  "key26": "2AtY8Vtrj94bEoMWDnyewnG6bRWvwFMmgiMJzxZp86d924mGH5k6HyR1H9d1K3YB6bMcWqEmRSxEpJwiRF3FNiB8",
  "key27": "3LahEQqBf2Gbq5USSCiQFsuKhMiR3sfPZp4aqkmrwReVzULiDWd3igLMz25mKuQsBUacMiNnGbmjjpHosr8fFcR5",
  "key28": "42xboudVDjheoQe3Yeo5PaeQ5g41KXTAfDURgaQCWWhHaD4q46fBwmoFr2k2DN2JcugksrNYTwomgUWZ3BkAg1c3",
  "key29": "5JxViJfXvm5t1RqDmtC2xbvRYS4ix8wTZec1j53GZgFp7o27YH75ch88N5jZHxkaGKHvF2o3ao1wPfXRR6Ju5jjd",
  "key30": "58sDqjzGuCK8vAPE9FwPmo4EMv1Jnox5xTQmWx3zRFsuPKhrMdiona1sn5EttanszpcaqbGqMjFPfrJmNvutkUeY",
  "key31": "56JkQA23kdACgoqnPmQpp3LFDXbSZbVentBrbFz3hWApNovQrAzDz8ATsz7YGpznn5Sb6mvESpmobsHmaQUGGQC6",
  "key32": "3AH3T3vqYLE3QAWpnraUz8qjyG7ayrVfF2xoiS8xqP24DZ79SbvYYNQchGJrYDKSzkWvQiDDWvhxbdsCjKhSNhGp",
  "key33": "fkSz9gqMhUuz9SfMSuL4oDNhcL9HJvHbYo58eQuxQfFxXBVERznxNHPbg4Xvsq5DewfMVw9DxyWqh2BvGQKQBkx",
  "key34": "8Fh1tcqMS6UJJJuKZdtom6LMNHGLhpqMNBdJcv65c6fQ3CfR5whUASXaGiuD31R1Myrqp9Jpw9LsgU9HULMeUn6",
  "key35": "4Nd6vBurtdDiAs76FvQ7unGdqXJqd94M75QPR543hTxzdPDoB3c21v1Ue7mmhh5xN97SUoDExgXC9nPb1vcDM44H",
  "key36": "fm1EMXJtVSr3Y7w68Y6boGP3vEcBiqvwhR8sa9PfpM8RfR8XPakkKFdcvDSGLtktrssK3Quc4ZMz6zb2D65W4HK",
  "key37": "35D1Z1PBXp1icDHkCCGuwnRgy3dN6ttprsNRLcRG8V3Va4TGssCxFpTkq5BHP8kVLmMXWYpXZjSeAsQH7JuDMrTP",
  "key38": "3RrSwmgHZJ6c4n6B9hZJRgH7t74SWuXGRMKwoTn3jaexvC9CMZB4ZBQ9wR1jbRy4gVv9BJYgd6Pa29xf8dqcwMk6",
  "key39": "5Rt3DqRNTwPxxC5P8a3KTEk6qctyHQjHTSqhaA3viepegMAWRsZURGuqLK3mmD29qJbapiSZkhxbgC1282ycSw3j"
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
