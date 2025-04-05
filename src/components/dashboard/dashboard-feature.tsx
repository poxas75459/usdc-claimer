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
    "5CocVpoKXDSnrjoBE6tUNKcG2Xf6AHLA7jThBZsdTzFSWSUmweT2u83P9gThTZATuYFUpBnxHJqdRwgsfWczP9W1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BVYosNAwFv51ddYKwqqQBdjhFFkoHfbdTB6aDd9WKvsLabQTBj6nDhbcW3TnhXW5ARARwyu1pTNqVCm798queat",
  "key1": "4An2hfARenN31qUaRBja2HEpvvy2W3ZWbBRCQezCgt4YxsX5aHxpUZEKa1VXSrqT1h5Yi93qDS9SNwKPzQiyiDGM",
  "key2": "66DcewtZRCmhMomEkm4ugatx2PHxjNuNghmGzmyKCxpZeKhL5exfgtDDDPfDDfKiaGJMH4dDienA2U96ZSVbBdzj",
  "key3": "2ibmwpxgSvffEJUdRWGLvrQ1u9ZrXN5iNBHRFrULqJYpsNUExS7Vzd6wWYqLcrSDo2Kb9nQ5giMUfkMeexwvqZTP",
  "key4": "4p6g1XUL63wWGfxxiJEXTP2WYAcrCepa3KKsKFzF7kMAY5jquMgo7dw6vkcBPh4QuunAHdwfnHt9wdN7LuzKj9HB",
  "key5": "44uNct13G4VZ8zR9FSoH2cYQL7zw2TnoBS7nd3qEHxbqsqCeFBdVFdSRarrs4qArYZTHjXDWWnR7JTAdZwKZLQuV",
  "key6": "sDSmfnBuJc7vbsUBCbkrZmQY7pto5tTFXjrLkLvKZ2apruhtxmezdsJ3SVEA4MbR7dEudXvsFwqi6y1QJgXoqq5",
  "key7": "3fqWKKhv4EmdfkjvevicfagHviEtpRP6dztfESsTgm6pfRq79bRNPRBzdUWE5npVCS2LK9zqvbKAqJxu3uGRmiLD",
  "key8": "3s9qGRjeNQDSJKfVrzhY8a66UYvaXjhQsakwTF4DemQzNz6XjXnnUHxHFpt4xcDYdYRMmfMQoUJMVXHLkBXTE2h2",
  "key9": "3PJ9aigRr8rN9pGDwC21hXGCe2C9vRom8k88YccZiWSK1DBinDXSxQm1JMJkvkXM3ueBZwABr5Bc4B6faXjpypsF",
  "key10": "2LGrDcjSRw4uZKuuptZUnaruiE9EkprJgzpFRXwXwtkVduC4am3pfsdyXMaWXvPCrT697W2cYaCt7aFezN4ZzazK",
  "key11": "5AaoABdV2hd1XhQUQhMCMsX7HdH8hyBKmBMYf7A8SpH3YVztDhZkXwsruGneF6ubHE5cAYJswnmkWF7DbHc5ktKf",
  "key12": "2sYNSyHsa5xoX2pG3RhpT1ZP6GKaXbZEyek2tpprWrN7rKEJtPvpy6krE6dmTwthfYm6zxUpRwQy64XrazfQXJCo",
  "key13": "ZC4xNXS5bdzBzDuRpbEUzXTvCp41kdrbzysk92omP5AKXU46kiUGetwz5cabHUC9M3FRnTpBfrmM4C6MHgKRDmQ",
  "key14": "3ssYMRw4mfGPYKQSaNnur9Tv6E7Kogi8DAGwgh8xqEvVkLX5Mr6YU9y9sMyuKFM37994E7mfFD2yeShLWsU1o4Vn",
  "key15": "mQrwHHLj3Q8BmMYHwHwPvusHHc8wEpEhABFGRMT2tL7s17pH84HAXnTHxgm5qb3reVMYB9F187Wo8xReyr57oap",
  "key16": "4DPDC7zriSAaRQt2VoMPKaRRu41ffNKnuQ4YM9BrPsF9zN37rWmGYUGAMyusJ8JUHgNrXbrqXgzHAeGDx8TBC9mc",
  "key17": "3pNJ1VTuSiyH5q2zFUeVqRRbdjjSnePyxVGYqFwr6HT2PqF39fGbkXBKCTt8HhM1Zz8MB5hzwGiE86Wf8iAGeLv8",
  "key18": "2znQCNa1XHBjyhEcAtrQ9UHieE5bNhYyEUg7uRhcyffkRyjXYNKAtnT3qjQSooLGCsNHJwpm3Brsgg3xmC9uEtR9",
  "key19": "4sj335HPK5pk87CakViHBfMJbEdPqnJRiA27TGyZyaW7ZfKVTpe8r6MJfkK4GHPdFQfmpqJ12bzDLqQYGCPASRpp",
  "key20": "5t3GHkDGZBzjTR2BVdyXpQyhtxxda3zfgNfcumd6TmVEgh6dqSjXXpfFVxzAjDSjxFppHXipzaSrke34rvQx9WzM",
  "key21": "52gwYgzV5CbWT4AKt7bCs2eMx7mg4oFQKJkBMYBUx213ZBgHXiMAH49JfhCR9EVxiez8jWbryh4h5G5Tev9cuvWp",
  "key22": "2hEFDC4W1YmG71F62B4hZXptqWRm2pNtJRCCxtnG6fqeVHot8ftHP3LsgVd5p3kCrLTpC2CJ3FkwngYYtmBXaciy",
  "key23": "PAg2rBPeCEUQ2CBcY933JSDXpXhw3d3eGuk6UzhCEM9xY1wnBgQbxiNf9xZMSHjx4sujVhepdDp3DF9gtUnEdTS",
  "key24": "5T2QAFEGQSmnA9gZyPsmoyU7U4bn4FvSQTcKjFCmfui3uAfTvNoVASGewTzWc5P1hL6LnfTzYCC2rVXfXHaToYdi",
  "key25": "3eJxCDUNHLCVu7hvspjFNkDy7bD26uW51gGy5hiFBFNCHUXohwB8m73BmkFi2kGsaLTkqi8FAYaTWWrccjeJBAxH",
  "key26": "5aB5zuYtkk2dWL51FXcXrQmy4DqFajTKt3YL4d9DiU2X9DfQ8HTftPFsvNWmnUT8SMMTvbnzk42CzuN75LXBRy41",
  "key27": "2dUPy6FMmkQa9khrSthTL64CjLApeT415ZhuNe7Hte8rDRNEKR7GmjbN5LLtJpHGvmbsF5NRoSyk4sGyP64a3VUL",
  "key28": "q7LfkUV5AC4xCrxLpVs1iyMEDxWVfF1LmkqP1nRme9yPwpVgV2N1Mpy75Vu466Yv2TwPKbf7ckMNF8VnwUBVB1r",
  "key29": "2A475jr44mj6DLQSt3KneuVkxxX1jX5f5zo4RbD3Yo3M1SA4V4iptLftuYiHFwNzmE2EPnAYhmANnMfFtmywEPtX",
  "key30": "DBBuEkGuCU8Jxiz4vHgVsMWLtWoSP63n3o2XSoy8eCHumiXxD6zPyd6gTzXHirGy9hEjCVhCQMCDL9P18f1Ab5J",
  "key31": "33gic9HWPqWtLMgTEvQamyMZdKQdLY4bnMrstpRjih44Q9BJFEDXHVJQte71YvvUu9Admmkao3ae6WrxK5JMLcg1",
  "key32": "2DnKhrirrdq8yr7VTiAYMcKNobuA3am19EUtNRCZ3Ys5TWdGtTMepbbvHWJx66dzmnSSzJYYUL6rN6kg7jR6xtSY",
  "key33": "Ry8ACq4jVhLJrdTrSQdi4rZap7HhyvibFVNZp3BzKdEX8EqzLCe6RMFAesp6i87kT1HiypqAMFy1mCAEzBHMi2R",
  "key34": "4ffSc21kJw8cLx4FzgDcmi5X39zNkW8JQk7VNmz132gfH72AeN6X4D9MxqbJtsub5eH9PKoGmnvtV5zyEFCUeiBR",
  "key35": "4UZ1MyiperWVpzNJjFpdgbydqYP3EU9Yoji6cthiVJGdsy1tCevQcUbLdz4k7iCdp1nXgHcpx85HKE4qH1bbPcWz",
  "key36": "2CC56BazQA6r5XobdsFDxh5op7uZmJ6HNGxXgtEbLWE9Wn9NaQA2Q11ZTnC4caRmAQzuMsxoXzkPf7WWSGApzQ2",
  "key37": "5rNeRHavjB87q8hQ5nqws9VnnvKFRXM3m7ZDAjgCrgfiL5jWFP4jx9H7cGdX8vpRmyhuHwF52J9gCVJyQFzCi6yd",
  "key38": "3ko2JVBUC2HVkYcvjBK4pCp45NQrD2R3Eag1HThRLv57EjSa6xB48CCwwoDpJzmD6YgyRP4AwuXFfScpkEiRA59t",
  "key39": "5EWaGNJFYVfyua21oNdUEE4QD97VbKumoHiaddTSoDLuWWiyzfLNtJJu4CHRcj5fkim5Vp9v5M7qhjXGuiDYBuET",
  "key40": "4yfoSLNSYcwpWoK5p6w6vJrkB5DwuVAZgY2iBuWQY9ev1TVWpCqxAHV5DtVbk8kTh9cW4VH8ZvG2WYvuTohmPtzU",
  "key41": "3d4rSKAn7B9Eb9PdSKgbxgJg9d2Ht7d6ivcZ8cY2DZkjb5ZAdEx5kyP9E5unRD533BcHyT8t9AV5QKC1k5VKKHuk",
  "key42": "65P8ncfWmrmiDzSGnaK8QDbbyRYFBQPvaGvAQcQqfxG8hinwKSkJUQxSJyK1deEa8HUYz8bZbH7pedMLFrQbbkjm",
  "key43": "2n2MAhZB4Vm1n6C3wksV4EFhCyUNzRT7QdJEeUJziDTmt92i98615sbow2Vp9vBbymagtJPj29hiTvoszAn1stVD",
  "key44": "53PcEdM3nie22E95iYrMspYWR6bk5NUdyQTdaUgtzXcg57NsbQ5CDdxymEG6jnXED9tGFRiXBygNM2ouHa2aGPHR",
  "key45": "5jdeCRnUqy99eEj1zBC5Miv3pNFhrYDMRYaFebNqaQrwzdyqgX8c1yLPxEJVcEdnV78yt7qU9c1VCx4WCMTk8m5N"
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
