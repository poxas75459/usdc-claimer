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
    "5E97gbcPKugmhPacH5PozMWzXNeirecVHVJ1sAD7hoZk4ZA7QLeYqJbC8mkt6UFJwfUS5pDeEpQCALozLKkhj4WX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3euBTn1YBoRpb2BQsZMUcLQS7WZeNESBAgeyECAYQfEZzAPmENi9panTmVTnwVDcUMiSAkhpq5i58c4rb1pr3Mdb",
  "key1": "5mpjsUXMHu3VCEHUhyjV6xL4LYnKkCVA5gMHKVv4rS5EHAbLHRwWakvJKWQQ5oD7PjbgR93b13ixgyN9ACZUQsnz",
  "key2": "Hfba8cbqDUZXaFMzx6wkL9oxoXZMkputkvHJRV5H9h2LD4TpVjSYAGYJkSj18sUAaR2ifEhwQso7JXE7ex17oRd",
  "key3": "32nN62vKvPqmTu3Hud9HRw3CN884ySg8Nyfh3QNytPebZM5VysoVVM2NrzL5YLv1to8bgREkyz2kmbpAkoMjcvjq",
  "key4": "3axvYqiRLeEDyw99WZzjtQNw5GgFB5tuVhD8aE9atbV2byR2ZZxsXLYekLSPjFVKKsQD3XnsLZUjYEZdhHVub5qZ",
  "key5": "2RTc3qyTY3pUvjfq9xqbVk9GsRwZm99yeJdWZ9WoL89AFxgDNRiVidPfdAfkszK4ooMMfK3R84XAmtTL8szxvQVo",
  "key6": "wyhjGHCmPgFcBMkTY8U4iw6DS9jArA91QnsS1Hcwp8nbib8wmVFYjJbGSEwmgiQhv8NY4SraHuXNsP2rHDYBjf2",
  "key7": "5GHebDt7P9sJjy6kornYn7dHqBddT8uG34WN2cxHUwNrGwdxCX32VYVmYCmdFS8pw26MDdWesAgTxZ2CRkaQ8fjy",
  "key8": "2qt829YzSHqTpoEtcSibVtRGDnkujGjJ1e1T4AHPw253NgrxRtk5vRtXJCYxzdTjD1UWDyzdxeSEreU3Ey7bDuJR",
  "key9": "23ipUaVF9J1QiAuswoVATT6yow9Q6bSuXgBAEthj8TeV1tSJ4Knw2FayXG8u6MZAu8ZLRuTm7V2W6eLUtEGA9w1s",
  "key10": "3hqa98gxCkzDir5LMemAh5fo5EVzVbHRKndUYctJgRee8nQsnaMky4jbTr2vwpAnE4u5VjAeuKqeZq23WFhUVWQT",
  "key11": "pLYJEvNLtQLg2yJJxCzWL8V7bxDNaox3X8PAPjExzaNqJH84jKjaLoEueVykxQMJcr3NKVWdCej6yjtG2r6h6PZ",
  "key12": "4NzRTAErfaX3m7Eazq4tcGDuubp5o8BCG7ngNjzrpVgru6oCbRFpiTaYTnQCK8xbq67V53WRpbXXCoNtcVevmzKQ",
  "key13": "3zedQaGCV5an67Ate8LYmcoa4eV5QEcMjWvvVL8d6JmP35Rv4qwX226aVhjav2TGmzxuYgNhhgRC7P5TDAZjWcfE",
  "key14": "5ymiGvegyrAWbrKQ1UYMCK1PQJzVqFy162EszE6Jw5oRYoudk49v1nDBo45MysjDLsx3g3P5YwJCx5Cu2MdNM9CT",
  "key15": "42SZYL8ZAeKDL4BhCL7uA2YoSQnMQcexYRGPPXrDEboKoHXueSCfUUjJpdDjyeLinEpgBca7BJ2tKVZ4aBwRnMYi",
  "key16": "5piXYugQKq64n9WKDNanENQyraifWZHWg56HRYfyQFEsviqxSSJv3nnujxqf8z2W5HXMafteRQpcGXoJT5XSj5VP",
  "key17": "59sLUFtPFG2PngsDUpjkXVE8jJNJmG8vmtXWCAaQbAsatVnE6AnS138h2iZFynz7jUoDtHXjD6EQZUN9GyTHWr9c",
  "key18": "BsB18DiF5AkrdDJWp8EvBw8SS2UnmgHZYprbNowhsBLT1Ng66pMhfpyioXK4BvM4QoyEG2Q78jdN7HZuG6yiNd4",
  "key19": "41zkRXASdPNUVJs6miyr2zWiHLZ5eXwGmsZk4hk2dYGXconidisc7NKDcZGXWzybXtjFMGkBcLDbBxVDBsfvZBgs",
  "key20": "5eMbPpDFrbexkXjwiRxYnJ95pybv2CwTGwppkXK9LcHzJCGejNsGY5cHwuaNQ9zSyoVTegpbxBRDENK6S1hQvQKZ",
  "key21": "zXQQdRZ5DyP4QLWcW39Ns1RkuHtQWhMaveSWAu7XCqX5xJe1UNUF1o1gFvjViUyWF3KWy6j25yPCEnNW6wJUUL5",
  "key22": "3BbL4Qz9C5StBRpJg3aZ9LWjub1thqEWGhgpue5GXRDdtJZYwSW8KUc9AWmkdyRbkk9eeVjci4sjCYYaMSRw2h4M",
  "key23": "26sT6ZYvYntvDAksKG68yDX7xeyZR6gySuFeoDgP3Y5d3FkiuvipeAJQbHSmSKpC59mdy9vEgodDWCuaAJVjN4Tt",
  "key24": "4ym2hszF8nDK6Ud71ftz1BfWhUbazumWyzwoXe9XqMdUUH2GH9nu7EHHiHWbgB1MoXJTV21zCwBKqtitUU9VorMo",
  "key25": "4FYUJzUn6NYjiXSGVDx2hBg7gSvArqmfBUAcc4y7X6Z38voXmBL3Hb2AqwhQFybChz5iiU3Bq43xDMdQRZTBkwjo",
  "key26": "5AKNp9wZnf9itkUBaRVCrrCEnch7MATevtppYazWg4ABQmN8ZCa5rfBWNzvC5bFzaUu9Ekrzrx8Bk2icQ4CqWiiJ",
  "key27": "37A94HXF1WK12jdRc4G1sZ2Xt17fnnoYQFeBgVfb4JoLbwAkpENUTsDHxLsiK9BWUzzaW4Hq5gVGQKvTGcM6sT6N",
  "key28": "5Q8GoarZY3iqFpj1eDcnFUgXJcVs8DbWyWGzUJ9VfzCKTsfja6woZTQJvZuNRrfGwRB4PipnWV4EmrQmE5MzZALi",
  "key29": "3bJmSfXjZPdT72mXA7qzHdvQiHwFZkHiMGGYeBBuZiTAKg5Dtdgwo37BC65AJgKsJdEkvjWuPKXr1zZHd7jWGxJT",
  "key30": "4kcYJcfznr4NLb6rnkF3nMXc5RZHdiYCqdJocF7bdCmrQkNwVSCPF2R1WSdff8BtxXGRpvNgPCy8aPUtXBhdFvsM",
  "key31": "3H1FVLNghdcWZcDrphyAdGQQegZnfDhZhNyZfT6ABTqYhhLTPVbcP6DYrYY3Hfq3Krp2GUWRGkaYBTjEhuoYLMZR",
  "key32": "66GoRoEvxnppgwknEFWvFHbiPaZeGfLqH7gJGPqmK76coREkEoi9z8vW1QbrPMHDZXBMuL1QwRo8sZcSAKzhrqwe",
  "key33": "4Lttdp8obApeHjykk63fAPrWEPk5gUyjgYJF7Ebm9ksCy4iczcmGwPQUhQUNiZ8WqXTmUnH5sHSBPr9ixU5skUXc",
  "key34": "2oQ67tBTDaHn4xDszJXEBfVd2KGKKfi2Cswq61r6jcZ76XTn6sbQF56uxecFQKZkU66xY9s1jn9VkcowWVUJMD8b",
  "key35": "67AxWwfQJw3T1SRtXXbdfv52bKhjzqYYHWqBTQdMhBNtuqBRWMnWzMyNTNDk8Gx3Nyqm81jfRmv6LH4Td55xheGR",
  "key36": "5UGCi1T7iJupGCotSA8NxMXrNK7wwbF14rU472NXfZNooQZ6b5vC7szr3aq2XWntL27FLEJqSMYRSWuWV5DumPfB",
  "key37": "LC9GTGwmPfn8ycrHTZTYvRYcQUWoArzsKDwUL9RfHtFLqdV88G6v8Jg92itKJkCKT38sCpKD3fYaswch8fGTmtu",
  "key38": "41M4drNHBrirQnnQB4Pk8KZFqxFx1fPGLfKcdNKQ3hdib9oxqpAyufw2CMPvnkQWbyKf5umBikVDJF2z7P7emqcv",
  "key39": "4saL1se1RiUNr5cjWTheTVuxrSp69XqzRc27ZqsGBrEVWAJUvHvVskGdGHMPvTdghd8fbS3yzdRyScnZ6HjzTVtQ",
  "key40": "5w27No9477qKjgiZAFdXoVMqdCasZGJo14rbvCU1ZAmDVCYFxgEDfDVD9LFavNMUYahf9rXC9WBFPNA6eo6DY6w9",
  "key41": "8rFrfgTr3qvKjWWQbcqapKQzuKsvSxsqTBSb4kegqtqdNdfZpv8BKBRqML1raWjbe6c3vg1n66fsi3CUW9gwzK7",
  "key42": "2az1QoTKDYL7HFUqRncQah3QKsnqkQJvUWJHibzUd81eDSrqc4dx8T1r7NaCzEucBh5vzAEUpqDoE5ztTmYqLwMA",
  "key43": "3FwPpG83JLJF3w7ctxXeEYCab44ozj2MnpmE2Sb1cTTiFEoMUckf8RaAopMSBRkB1KSsM5Fm2Uq3WdupZZfFsBYP",
  "key44": "5FKJ1LjpcMnVkigHCMz7VqWLhCsbB91cUbcTwzrzVe7a7FnFbnxpeEvYShM2Bca4co3xBDmomrUbdaT2zRiCD1Vi",
  "key45": "4516Vuyp8zGoopF8i2GUAAvn58Bs3V9uXPejU3TSJGbrjTgEmv6WeZpK765maccxrumQmCnw7FxqGqhsDo1oib4L",
  "key46": "5h4iL8PAx1TRyb5qq5Fmt27xQFcmbxCeU4DWZoyFyoKPSdrFs4mBjFwp3K8HqkLypeSPyC87gQMTSoztEcDaNoFc",
  "key47": "5mKHdEWyHJUeYTS6jL9w24axPE6VCfCDZynYXcmWeXwSEAuqQit4K5qK4cferGguPyKFGBinWEZtmTbKbRCi6QYQ",
  "key48": "4DYiThvXzn1S85UXNkMw4c99oitkwWeeQ2TGn9G48g9XAiFSoo3SaMTnkoBGRuppCkCmYA3niqupfMUtNygbKzZp",
  "key49": "amoedZWTKYm9MxJyqUnrGWfbvTNJm8KMduoE3KFTsXqhfucve2Aastfg5RGMwkZxkCmZUZa2TgeEWvE2wYjDRKP"
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
