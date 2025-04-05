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
    "59Vh2Q8spRat2oVKfk2xWEqiMBQW3oBNwXPx4b31km6gC3eXiLVU47ZufkYLwF9RRtxFAEQnmPjQnwfT5WBEXso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nTEaaWx1E6CdnS84gcRUZPtYTp5yeow2Wk8LNoFzcbZ1xF4EfydSEyzauzNiJzPCxoSFdxsFf67y9e1BnBnbG85",
  "key1": "SRygojYjn18AoVknDcAXXVFxvtQsTMrEx6yePMLNnFAtbwAqgYiMoz7heSpysdTbPajVPz6w8X6qM1Z5T8MGnAV",
  "key2": "23FBV9VS3f3NtwyjvHrRTcngMUUkWRsiVNhhrv5h2thfnVSRns2nxnXKuHie5oA1ZgZypMkweWyH3iWuJVC46MSC",
  "key3": "3oTnDVEnszcxAciBFHnKgkbqkLvx5vWQ4947uzm5ZXFbeZNSgJ5xS7XZJWFXahJMUtFYkxkvzCqYnV7XsZ5j2ipV",
  "key4": "kV9zwNP5HYo5HLW2FfBHQAsDCVGtQjwHKiC9wQc519WpCsHujGhzu12LkqAe8hEfhLd5287YbgNw1cRb9ELw5Lg",
  "key5": "2L9WgvvnqRFZhdNhxz9wg5GKUzCDwbKDsj1m3SwnwmugSnFQj7XATxTg2wpuhwVB5M32E4RbDMbfeHuE23zyq37n",
  "key6": "3trar4CqFqWiCz3mJ53fBYXfbWaSKWnPGgGJrzDgHo9opzfEcuWTM1YpZsuvQqqwujPxKEcnmFfaqoXG7hS81rKN",
  "key7": "4TQg8waicUjhBuA64eE7FTKpPTimZ5g37U3zUJdindv7c2wctqZGEx3yvXViiocrrqQ2spmL9cqDpt1MVB5bXAB3",
  "key8": "41SA9y7kTCgde62SxXaCUUXatb9FBBVEoWjD46CwpzugQ8j6bMTy4GAiNQNTz3AkDwvAdYV7bP736J521DEXfU9c",
  "key9": "5vnbBrWjiGjpicFwxugrD9eu17TGYc4UAndX2KHotXuVt5gBb6ZD96TR2gLdNjHks2bYKaktFCnDi1pCeQgShYSg",
  "key10": "KQD1abMMMxGVdcGCrMSNupiaSwuRbKwbrboBFZ3gSynLi7JFyhzGaGq3HQFaByiYtncrzGTUvDqvrZx7rYJtjZq",
  "key11": "4MbdgsKF6qx2NBDRTaqvJG18XN1Lgax1UXyJHSu1LUa96EB1Gb1HRUbJfhup8GN1tVPzKav2FzUcizRp7zEzxB2R",
  "key12": "24v8VWGstfkQLXTVzS7Pyin1WnLaWJnjMEvfmpMr4TR5gSVUepo9pHmmqmETYQt3FVpVCupACHfLfr4Nxp36eNfD",
  "key13": "43Ee65wyF6cKXPFMEtHrUm8DKYJy23aibgWJ3iwkZLzaeXLeykHyUaSx7Q76abB8Jq8Yi2az4edidiYxWT29cLM5",
  "key14": "43ukfnYgNNSkFaV5nGaZiHSWcnux4i7Dfz5P5awQSEAyHoidCjqbNQspgtRbhHexhkSwnMmaPiqhTxebzFfx6yzd",
  "key15": "3YpFwc4vAwaiYxKeX8NzasYvC7mEez2RQ7Cdzx5MmGquDrfZ5wRu9gvmb1bmiK6Bme41ZHoBEXCbTGwRUHYy3247",
  "key16": "3wuBdrtujS6dhWkXAAArpczKHEJ4GG1YJjsWmiiK6UErQnJzut2WnpZ3VVQyg8gqmvabBNuAN6WnJHV5LREjSRp2",
  "key17": "5mEbr7PMkApZGCXjJbR4mGV9dHLLbKxFEN8QenVoTEH7gNAb6TmodZ6zDjWrJWfYoR83Qz1RpQtCczo6CSXZ5eHr",
  "key18": "2hAR7DoK79V8uX6rFTuCdHF7Pp1F9qBRfn3PSovnyNjGJPHU3sz1z492c5aimn4WtxF3sq9LwScRvWVDCHmMgMhV",
  "key19": "4CGNKsz5ju3Rbr6gRsNjETKhxQpVsD2444GSexUjeuJKezfd5jApwUgd268nDkWT9Agx7DQsBZBYfRiNWYVzCL7y",
  "key20": "3hKCHWMuVJ9Yp6UnDkhfvxFNJbzSVEf22yLcudVMNTzs8TwZTwqSmnwPDRCbVhzrLAnv6hNnE22zU96eFBo8VshT",
  "key21": "2Bi5aoN1fs4wHqj9oGjMGgc1gLudAJCqaw73cea5DtAecAbt4qUcxNaJaraAQvSRTuJRrzhYYixfgJyJyTAPiPkv",
  "key22": "3kXoTuMBusgfVLVd9C8m3VXuSzEJyzAs8vKPVfPyHhd1gGqETdk1paY7VN3BRZWnRgUp264L7uTxhaHE8irhC8Ya",
  "key23": "4wS3hzJ8sXnJg9vxrvAqt4FH43VqLXstTuW2BxMaw779W4zk3SuiJ1KZCiofAAM2LzLGvKTVM49xezshFWTTFWTJ",
  "key24": "5gzyWHuRjURjL1XCDLehmnWs3jZLGcB5pnEPuBP4PH5fGLwz4AT83ZLYAbwB54pzJuc4aJ8ZKw8sNouvovcszHVG",
  "key25": "SopsLMRs9dKzCLKQVsCsky3nfSL578S998dLcnVAVUDm2SNLpkPCSWHABKRtoHGbAaGGdsUce1NKKny3sr9NXmp",
  "key26": "4qjgTzwhMnA6ur1L7SqcLJ4X1meJPEeh8uVmGtdJ8joybN1Xc6mw8kghUwhkfpR5AyBK8F6rt1BBrKaJAvrQoCD6",
  "key27": "ie4fT6SFDz6dPnPu64kGkasUwRQ1fxNQjZF2ETL8QiubaykghtaXqMy8sEbAKsy1vY9oJHewGExrbWgKF68peSL",
  "key28": "X2DyaLLJWDKeEAjQdCvCx4BF8KQ2HyYeC58SS1y9Rxq4GCZHgVAyuLBMRFSSiKNYFKZ89QKEAygJQb7G9DT5QtC",
  "key29": "2BoxTZYRYwbmR48b5UMeUYaf1pQfn9iNtuk9vtoUzMc6udg1X6moLG8YkpbcitSWErJGN3MAm6kSkC9bmTB3TqWz",
  "key30": "2vLJkB179HgnGWm1Fq6XU6VRD7iz8m5KDUHA6xMmnU5zhzng734HSX9JgY8ZbxBS5xundNUgbFAs5uf7oTmwPoMd",
  "key31": "5k81XsTfwBeDVHAvheQTQgXzpMsjxQ1DoySxbYWimuyPnD8CcACyrLwasidj9netrPnDDxCRkT6BwqAitgWbYtxY",
  "key32": "2YTAdMhkse5XLM2EEpGFKbjPBMCMZF3XNwUiBo8hfAuscCojJnxnNJfwYapbFZuwW19aPzc1txf47ovxYGVPWyZL",
  "key33": "4neVkzZvBbwgFe6kUbRBSwzNC9rppQBtt5c4yEqEGUCHihoGiFWDaWytVpehT86uLtDv92xqdBrrPVM3ohcG67er",
  "key34": "EUUADecPuYRPo6wW8XVdM1YACWbPfFGL79FUhKrbvxa2SVLbuh6NYFU4PJEtBJwXShKzzL4jygusUsu61cb5Q1K",
  "key35": "c1cKkkQr1q8ETuhDuxT9njqQcnEF25RbQEL83HB214CPwffKf8vKbJpUgzz3cz4qJYhnUHZk9Pm35HGYBKK2Yis",
  "key36": "AX9V7BfFEEXFvodnZcMrbGX5ey8qpT9sJQXwLHKAAHpK8iVToRQLaNfhADayqJhuZgYFbrwCJNojFGPwP3UPofR",
  "key37": "3a2WyH3vPwu8jb8fHttQgD6FbEjL6BKzR4GbvoRmNXL55CZauSmnzZ38fqPWBVpJgthUGae9Kf3Qwzps1zFg6XjX",
  "key38": "3NHqEeAfszK8Uv14hnBtSiNvLyvgb1wncLFmheMCQqTxXWWpKHh1WT2wkbhgs1dtJ5Lt1YUmzhVToHW5aTDMnaMk",
  "key39": "3RU7RbsGNwGSyGR6jBPNs7fKq2xB6dhQe3LRgGe8HEQoVNCKEv8MnGSU4E1DyAsYghGSgBpd8Xmq6MLvQ54aJWjU",
  "key40": "gmrKA92KpDpoL3EXSq6dgh97EFR3m9Tx1dLc794fqNydn6SZLf4jJP5onv8LX6GyE1pEJBdsGGLJmgsKMDdWB9t",
  "key41": "4x5uj2iMQ7KRTgVNm2FvrQLyUp4CSzfXboaCcqN7arxDFLKw3CxVTGtALHbDUNDYRRNDUNccEu3d8zYfiCKc2P7Q",
  "key42": "occjdHeJrmhvUsPYnBoQf7Zj7uwM5jpqhTyH1FsXuiCusavQiBs7V7RbC6xZR1dY4at2omQZge5Di7k5QqCxqGB",
  "key43": "3raotcAZD4gEjcJURBQaWF157vbzruCMYzbLKE9DH3CgER54m3FepCZgueUXqBd7bnLLs2uEr7afy92fmLVrjLh8",
  "key44": "4bUirgwxfE1uCuZeq5WHrfyU66qtNbzQqCyX2vMLTXf91c8exVt4XQWt1Sy69sZWbREbbmbbpLFgafRqbSYFMHTc",
  "key45": "cne9oqkgUU2a5Zves5L9jW42tEY96SgENjR6WL8k8f1sGYBFHTHnbbGAw2L9BLadHsWh9VBCbv4PZ7xbbCkULdv",
  "key46": "4HXRipxBoKaf4fS6QL7uCcaxpimjvUmu2bDi7wLcwwkg7YD6sgNgDEqeRVSbeKWM3dqvDXNLCMEWL9XsfhZhEAzM",
  "key47": "5vhvP7RQzjte29b4FxvprKTRRpecadCHWjzRRzkHaUjH3vqL65bg13geTYLJRXc88XkQehooF4nsck9nQHeGkDny",
  "key48": "63RfecKsdkChE96dsSC43k7NY43NdPZsFsnyiPYBY2BXVLEwbSMcCuox6Xc2ysCRERSvoMt2pdN2vieRnPMAsBTr"
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
