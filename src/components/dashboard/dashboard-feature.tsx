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
    "4ANXAuej62L8BbRD7sxuoenXSUPhU6zFm3q2NJJ12Q6EbtCeqyoW89PBYi568LeDPPR3u5bZAuH1dBdaB7772UW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dyqqiWD4Viki9Lb9CQJR45n7fycxEMwGCWYPNYHUFAktnrMzTiD4ceB97Vc5cQoRV9pxhJh77NH6HcbkTg89xR5",
  "key1": "4tTmrnEy67jDD5x8Uwi2RaCr1UnANoE8gA5fbiqJ32Z5VdJf4LbVGPD3ZGk59qhSfWbtV5AxRrYQggW3kLtmkkEP",
  "key2": "21dFdNSLhBQwUxJRrxDogqsasU986nBqnNuMojLsaEhYfMNWj3gv1kQrWUKrpaz1Ms4Qn7gvvu5VBssvDPvaHATy",
  "key3": "5Bjujc5JWJMCSsmp2DbkHysZYtLb8iLPW6NNVV8xGSpjjZPFzGV2LWVWAYhMQZHsiK9jTB26bCEwfXxUSLpxetKL",
  "key4": "39nag75yfSGcR84DTgArrcpUbxZe6LLziATLpZymjEkRD1h5vym9EcF4ztWHuwFX8LTr2NEhraCw2j96Mv9caVcP",
  "key5": "3UDFMFvFTeCYNAJtjkKJN5dL4E47AdyG6kZyaTuxcg62bd2unZjND9TWv2j1G96W9z5uUh4JRXUJnSJTQatqPFbR",
  "key6": "5DWjdeWG8FCp7rBpq8rkJrgwYkKpiAe6Hf7trdVci3s46qLawWAeH5DmrdshnvRdsv6t7vJwtVPEK3kiKHUB3rdS",
  "key7": "2hFVBB2XDbwPCp6NWy44eRxQvpbXr7SHZWES8k7EPQDjyzGnsSB17LgnbnxfBFgEPBMnPzMdEbfrN7Y9DPWeZw2g",
  "key8": "38ZdbQBrkSghSDLZqC1i8vq3JZncq8BEyKAm4no9KuybmoMEZEQm6nCB17VrX7m4G9CX6vCahTUDgfmQz2g8Cjf5",
  "key9": "xa2BytD3z5kJaNFrfCD3wojDtaXSwuNyYFDtucZwUPWYoUB79JvqMavuKnm3x8kcXkqALWbTBerNqVv4vPR5Zu6",
  "key10": "gYsyP8DqgXnvrsJ5sBbQFWLboPpyFigGeTYZHqYaZk7SbPc2ZGdyxbfCjFMjfmT31ExHss3wgvHew2MZwasMAuX",
  "key11": "2VyYiyE3gpK2UJKp1p9YLWt1hNvEJZ9LewpGJcuWW6zgmLYYdb76HRYSqc6bBGJK3eSQGQmKdjypVVmCRo56hBnD",
  "key12": "3Spqeg3mcDcGDMpWCWb9SYxd9agEVL6nRsf2TDirxUJC2PkUxybN9X1ALWYGzNNqLs7FQT39zwTn9Yd4RBz2ZSdz",
  "key13": "5iTb8po81z9XzUTMdDY1bfvRj6UP5kBcidFbNhHTjB96oVK1GN6MZuArzR7xUCAzCZR9FK8uVmeiSVFPj9UYgBig",
  "key14": "RQ1B2zJKjhgxUF8DQrQTXNJEkLBWrcs1Pm3Rt3aXmKHxoguDYWCFgcR3cpHfHnEK6uAftJmrKxryR5bRd1JSGNF",
  "key15": "9CnE8bPadt3wJgq1uH7zyfzVKJ3XMd9wqYFBoRDqdXjdZJ94VKUapuBfjLHPhtLLv6PeA3RCzRwiEkoN7MiKZp3",
  "key16": "m49aTXtrJxKggZjERyQwA6zpYVHejwqTuKLXX2n7ktxKHmmg8hSmanAbqTbLrVa8FZqoRLZ2TBGgEo1WFre9eSw",
  "key17": "2kgkMN7septHdSWQrmS2iKmNFj14uTnwhuWrnEg5GuoiYJE6Qs629RGCLdpwmFWqd2G4NRy6SwGXHn3gnLiTUCLY",
  "key18": "46mYTKZ8CpFDUuxQLJX4kLust2MwLRqmL8ERyeU2m7HuM67nZE2JTSuA6WEaKszBhXqFVQqzVhzf4SRpRU9HpU63",
  "key19": "4paKhjh9ziksPYx7yy3WQcQN4zQoGp9peEqEp2fM2FMZFc45ZCV7oeXNyiSPb2VRHdfWG7vcazADYoF9uNzj11JC",
  "key20": "3SQWcAxRUBDycJdiBwcZKmqg8Tm8w8oAaQDkqAqsiVcUfLGajvkBNgdBeb3JDnKckkp25icVvnbKJhQFZHmPQSpM",
  "key21": "3R5FvJz64GUirrqWTrYNKg88biDdiD73S1fYbBxrcdRPBUKcqK9nZfzYpytdsxah2CaffnKYgRddT8M2S9LDn1Sb",
  "key22": "3275BvsK4vRprMWEPPhUMp7X3hqv9pzrDDJuB6AFibCvcmxEHVERa8NbwhiHzsS3o1kHrx4S5tPfqFc2CAPee53M",
  "key23": "37p4QK9HihnzzGCkGjQFYxsuFrZCqQfTnapXXA36JUyryWQ518798qyTuhcT7ZNbydCjjxzrbMvLbfSJGYuE9VN1",
  "key24": "3sB5KMkmpjgcqgC743RvDerEMPJJymwg7QWpfXonUWANcLD4kGg37v1LR7bn1QQ1r2EpD3Q3CZRwH19PxECEBEhy",
  "key25": "65gh1d7mWAv5ac6n6AKJRcVtpEt8FtArYnvggyYc6vA8oYcCaj5cTcvsY1VUJxLJCVUrqzaMiGq8qeruXbGT65tM",
  "key26": "Eo7NHaFgP1stcPJBemFaWFrHAUECfDrrx9UYm8VtyL7f4wntRGHoygaFB6FnCY5PC639zmKmcQ8N18iEMZxYBtr",
  "key27": "3tD9fngengus99JNLDU9FWrTRQoMq5gDwSbNdrbCcukVkk9ami8aLU5Me1MkeWvw5WQ2tCNejbr8XfabXH2JYpnF",
  "key28": "3tRBKk2Ss6ZQP8XnzqkGM8THgmxHpncseQrGCHNX9UPH6AHFWr9DfmjbTZEmmnZd1awMJoQQYN4sX5jjRVzuf646",
  "key29": "41JM1VXiaTm8r2tG1H9VUcarSQE9GwknyYhTsimtxeRhR93DYhadmY2afsibhaT6M6qP2C4vuaKYksFSK4oMjAS3",
  "key30": "4ZyXJG8nkhTVTAu2Wu4tWhZQPVXc3j1gsAe34Hq8JJcLqRrkLkQyv5remy8tCsLMfBeL7A5EGMQnQPmnEXmVgnBQ",
  "key31": "28uXtrGd5QDbDGnAe42KwCTV9ievBiqNFEo2eh7GVxj1kpWrE4naJtUDrTSi2saJSQHERvp2MiyScwkHHMoFWqKV",
  "key32": "42suCnyAywJRLWi5kFVbgLuqEPxWXiwwHHHMS37WHBNN2apxemMhqshmga7T2zkYiabeD2qXUj9eFKdk7nWCHm1u",
  "key33": "9LpGGoDjUYDXVPHLFuE3ikur12gFiT1iCt85iNYT8ZEjY6YwC8gc3dYQzUFUeena1W16KNrsqiXY1XirVC2YvJN",
  "key34": "4vnGvPSqm3H6gTRwbcagyDrspZDCj32MBbe8JpnGpxKNFJkSQPz3mubdZmuh8hBQ4Btscv6jYSDBgudoR4zw763z",
  "key35": "5jczKAZ9Z7Nk1JR5Diq1LwsDy1KYXTAPe2reBa1f4GsXof4cSZ3QKASQUt3NgUAgVSdEHWGRQe1SqUPWf6w4dTWm",
  "key36": "k87EmWEA4qfJXLUqaUXM7vCPKtqc63jDs6NcTseqPNtjKTABo7BtkJdttGXNNcyJwfbDzctp2KriNobVZKMsLKc",
  "key37": "3DuDhyCo9FxfarmqnszSdzhYo2QzGSwMuF1UgwBgCoBFCC44rbLbcTXjrfEjj3g8it2hYSjRYpXXPDmE58Xy7pho",
  "key38": "R627g1EDV46d83GZygEW1pMXAjBdiiBZQFmgZPXfB33Dao4zz8rjQnwNVu2UtyK42DCTNRvgXjeCZxXJvKPLNKc",
  "key39": "5xqGNYYu1jAVLyiPsSvurFBhpmkTodTH51YukfxqJH25vTEoPF6W17LpCnqPL2utsDwNicixZ3i6fWWF3MmpfR8n",
  "key40": "aAuxHuju7FKZdcxqG7aF88Xfe6tEAUXvyGyP5G5EYuEuScu3GUF825DY9epNvdY3gbwMuy9yK4iP9pzqoRPqtpL",
  "key41": "55yXSqNMHtHYnkMpq5YK51Lc4fxKEBQxapuW42zYTDEWL8t511veLjJB4FieTejEUaGGYG7hBoTojWMFayRcJwLL",
  "key42": "64YkDbqJPQ6azPpf47kVCgupHvgAsMfHMMEKydQEMqHf98ajxzmv6ri9ymqkVjaiqvKYvtnSyFqYn5CA7aWqQ8v5",
  "key43": "492dcEerMebTt5hVjTvuxwzSqBtbFCvYBDvLrRgmWw6xqfrcsuxrZjYh6cH41VboV8HCNU2o42BGPcSujLh8Vju7"
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
