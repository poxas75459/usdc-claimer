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
    "4x9D1dQjRwoSNwoydHo6G8uSCHs8grEPhec4abGxC8AgjMSbPDGB7fyxWk3qxdsyUY4i3sgaMXypjndHYUJYRMbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M2zGRns3exLRpS2XK6QfzA29W6qbznTdmtAWR413Wy29Sc9FK9uPEBuh4xLPCCi1QzfrZ8Cs6jfJiJ9Hd9HJBog",
  "key1": "5J2XJiuo9s4QvX8Xgqu9R4dnAAX7XBjkjQXd5HssPN4dpoJKb77NKVe4dCEnsnsYGYvVmL78yg1M2CXKPRauwkHP",
  "key2": "5pRrD88E3b2oeY1qAaA2DSCMzFt31cskAfmFdGZUCF7oxxwjx1VPBgQRyz3kVsfmne92dCm9LS6mzGaUnArCHBbk",
  "key3": "4MAAxa8CvusiZBNvCtE8GuSp7Sr4FCrxiHY2MAcseXECAcnHJyx4wdGqw8XkTTt2NVTpkusZygQkDBaqoA42ormi",
  "key4": "3gTxsbTAUYkFZZfRLzs577fpFa7QxAkAthCc8b79dJVU9XdDUjHQGKc1AJ7b5tddwKnzVAvvup2NoFDvmWZvSiq7",
  "key5": "3NJ8VfdVajjJur2MTmVVQ3XCJSkd9ievtMAJNzCsXP89HQWTLyGoaYHe2tgRDQwLYhrX6N7goWx7oPergEk3MjCn",
  "key6": "XBYWBcEs4frqvX9643J9jSrkveygfgrdPCn7HFpLM7soWTTB7vwL9uAd5MpRkVNR3fK9nsXadE8fZZhHw6hLgBx",
  "key7": "5yPZo7391vHxD4xVhpCuSxG7RQ1ngYT5VRHnUXMFgeNGF7ZCL7j4haQaV57yooFQgvxhGvQGPPdoZii7NgBdsjX7",
  "key8": "2GvpbURtiULUKwPBgJbyKAjTXYD4pvxY7uZyUAidGNHuCyvT7DWHEvZz7qbgTysGEhQTkPyMg4kHDKB9jJBEYsYg",
  "key9": "tMsoVep2FEEYhgU5oHNTENM5m46W3cdSBfSD9N4VbDkh2KbUgt7jnikqDh1AkKmfDq6NKA1d4WV8faALMPoqMHb",
  "key10": "5tPiz5rJyj4vMQtoWjzybkYjYxVNM1Be5SdmCnv4VNJHNgUeoChSN8nenk5RmcSo7MVxcXqTdqv9SKoo2ZkMa1F",
  "key11": "n8jgqFQkrVtA2NHWMkNX2ws6YAgy3nhJFPGmoH22kpYew7EdGr1hjVcMaEu1v1qs4RrudC4zz4vPjcb2MSnnAjM",
  "key12": "4Ch8gCb82pfQwX7QZKRbie6X6Gj8kRGMErLACheAr3SMFFQ3RbPSL2mdXbzqoUjMKyKxcBfJ2di6FKZsCqr2AosG",
  "key13": "5bzBVbNWXH2gXtM3cMP2R5SJQiSTK61EX4FuYUtBmHEMkkfUXcsqXVJfhs7ZEgjc52fvVBgFuAj3xkMf6Uid27Ls",
  "key14": "BLyXkJ3q3r2GSrDD8H5wRTqgyuqZinBJJUYHYGD1FmdqZVbZCFAYbPET31xrwbmKc2zYrG2J47V56w8w9Kx6nn8",
  "key15": "5VhviRgcM9EpW8DUYRk59e9Wy1UM4H923sJkJzpiwfh1NGphzmFd2HaBFadhLkNZD5DZJsq81h4Vc6m9zJ5g7yzb",
  "key16": "KfhywCtoEc7ofmrGAidmbgE4Kxtv9v4KVd9j6fYnndyB7VPtnLvZnV6Q1aS2xZ9YmgtEc8nVeCLgaAKCKq3P3cm",
  "key17": "2vp9sFQNN6h5UmF52YqT9HkVdfwHrwiq5wgy4UMqT3xowCQVqAe1Dy2Hny97TBpqtSg22175m5yQJ5THvphhpjDn",
  "key18": "Ze9XxcD6PUFP4TWUsUj6qEH2TajNCmsYgdQvPR2SHL3h2SXm1j7FQhXvzTk8CjDc8jF6YMrFuq45GqY1v4qGG1k",
  "key19": "5nyHGCZsxjPGYRN8iYFRuHz3bkK31EV3kD4fVYTa4rnexas7NxN5bY6LMHHhER2KZpDZoCrSm8irdzkHEc95Pcrw",
  "key20": "3QKX5DZRM3huvnAuTE6wAZA9EB4jCw1gWZt3g3iosKaDa6Wsvvfr81g3cDf9mxwWZbQ76v52qCiEJUPxV8jX4gGD",
  "key21": "4dY3UWPXSUhy7YoveQ7oud6RDViDhMDiduyRCcWkKzMPchjPZTSDa4zdYt46Tw3U2RPo7PFkfFyTh31EQYua59wW",
  "key22": "4JSsSEawkshdYugMrtJcT28YPSWVHLtzwwVSCbMnB3f91cBHkGtLeJor2unR8PfWGD6F8mbp3D3n61Nw9jZQgoN2",
  "key23": "iDp92PALXgt7aK36aSZvXwdmAGZa2aFvEK7qiYPb62VQTzSxPuaYVscryKSWnZhCJskpUfH5FTYErMjpNprc2WT",
  "key24": "3PPAx713QcyM1Lwvd2ox8nLhapawgUxsJQsvxRWqknApjBroH6uetkVhgNn4uah21syaQHhYkB7YGaxGL5jExH2a",
  "key25": "2mdyQS8SeJJCQd8VaHksAuKvsc9uCChV5TSQervAEmzC6q2bwMXtkJKpZCwVyDGZkbQxSfJJ4ug8LMcXcFye6xDs",
  "key26": "2r3hRnCo7qYvJKSNXoNsnJgFuADWwi46AxDc8fUwQNP3nydu4ExkP5qkgYgHFM94zLBAwrx3NxPAZNyZCKazTN7H",
  "key27": "3oGc2eWavZGjHtW3j3dBSiNsbbnQvUjeYpMR4wMBaA8Hq7RKob3i2aXLhc8NDDUF2fMnhznSrRooMNPQRKKnA3UH",
  "key28": "5VmmyTTEQyJTDdEooU4djvZo3qZxZXNAXBnk9KrPZzFgt9mm5iDVCfeBxdSZ2VRS2ak9wnVHjBR2KVog8RGLsENa",
  "key29": "61v3EsHL78XkDPoAZiHMtAMuqJcEPCd69M1LMP3exWXani4QbW4VLgwYiNiapKmUQasdFCxBm86boZuUyPEu47GA",
  "key30": "2CqEZ5EESEg2xVx3JyUzpK4aJuDmAy7F5JKkkVrWsfT8FhNNUFY9XuefBaLXQLnisczngZFR5s83xj5pqvXQ9kjw",
  "key31": "agu7McEhijcVBymvkzyr8nb4yPnhvz1YWvxJEs6AUrnP5gBnxXgSNRQCkukxSsyQd6zZckVocXux32H1FhCTjgV",
  "key32": "gKFvbZ3q2gbyyNkcGWGWkFVYn7nzUE3F9assXzV2DsUbRL3Jb86FCjcZajfRv7dTnAVDr69VCVdW8aoHbyALJYY",
  "key33": "4mUycfKR2UN7SNDhMeQvkGCjSfx29rsD83UAcXFk63dX6eVeHq56be5jfydm5PQQU2UfXMGX5M1rJ3ZYbpWtXW4j",
  "key34": "5TpCBZqBo8iGyPQQu1bdbH8RjT13MwJuaepfDA6zqYUL4EkwfCckpUrXABG68QPVYW1yBRSLjdoB9C6Q6BYd4tvE",
  "key35": "3iwFgfQ4vocfiYtz5LDmPvReYe2vTACP2NgyAbKo8W3DMepCUqZehvhSsdgQgV2FYzeXuzcC9HuexpzwUdfWY9s6",
  "key36": "cykqjngg6fycHcAKNVWtjr989H7XVAefYwwf3qATFQJmVPE7vczWfBNUbC3QoJeFNoXjAMtR2imgUrsVSbbTskr",
  "key37": "2cR9thrZqRwog9Wf8knNdmVUyVZLBxv8y9THmB8vBYU1nDURM56bMZvHQnUiiGS5DdkMkL8xJqPs4kwA3p29gRrk",
  "key38": "zELnfQd89iCjTDToupMbGvHoLTPn4yLsped9pkEgEVx3NAcHMjGcoJjtoRFMwU12ocEVFFyhRcwfMdfECiyqwg7",
  "key39": "3G1zJZBM8ZWc1VxsvmU9xPwrFC4WGQ8ptDQy5rEwVLTiSvUUNPFP9u6fHShRaJvUcQYSBSZad34wLMQUrbjmToZ7",
  "key40": "CKR9dAmrUMDVNxudpF6r9iH88wdYG1zVnNsbPiiE5ae8bPqavwr9TQT1sTnKCj7R5CNZSR4bmRKT8Xqd8sbyh5S",
  "key41": "5PM7wqy7dWscXza3cw4hjRvhoM7RYorT9pVESdT5HYWSu132go6ha13d1WtufPmhNDrPkZqawvZSe52VSEjaAPTg",
  "key42": "3kV74tZzGMh3wQXgBBE7J6QjnpaQknsL57sCkVRv1ekNZH6ZxT6kLcY9oExXrmDKvH5jwu3dDE5ULMqSjE1MKUCZ",
  "key43": "4una4WYfhRpa9D9sHaD5Qr2jfkN3vabTf3AcSU8W7pDPmFSWChv5RuqrouoUzoYSoFK9WZhifmdz2LuwoseiKCid",
  "key44": "3BVuyAP7Hu8khrqUsXyXCRxHG9gdKZFjeuJnQaFanrJdtgxF3doPCBK5DTVND8xgCFYxwmfdiShF5KufB4wSQmpt",
  "key45": "3N8Q3sx5BmAxsg26KoWpGFJhycVQHKGuCSU8FxFS6AN6ZMwrqMyvbk6buso5aZ1YFnqpf7KZBUBoAFeeuWgEaVdL",
  "key46": "3MifpxsDmxFfoCEjsZ3LJgo7zkNU6E9y1vxDFVfnKrzdbgWw4cSbGVFU1roTef4yhxvRemeMiRF9H9EXHoTvnTFP",
  "key47": "4GC4BYSXcyM4HqMeWsdLAuK762GeupSzWsadWJEgn6wbw8h7sjfiSxCxRUHu4w75G6Pr4UUNhyVbgs1LwqEDS9DP",
  "key48": "489DvKZKL7HMKVdaYPHkKos5XeoGk43KnRhTWnsPAZXZz64zdTbnKvBNDYKaCyPMAykAwvAbvVQqpJjWhcqFzig7"
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
