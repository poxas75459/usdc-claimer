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
    "3XjxnuYJMsHwmvc4GPujyKwymzqVP34sftkVkUVwoKAr4WGTXfbmcL5QPYnMF62N5CMjbsk2hu7xZRL6LoMUhoZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3noTAdZjVqrjXaTJqATLho6aVGsuTdm2b9ocKcpPoWrJhEMVm7EKwPh4xfC7zBWvebcgtmNkj3tQfEiUJocTUvx4",
  "key1": "bb71R61gd9VMsCypecVyiy8ytijHEibWompQEN2TdGN8kXGBQ17YWvNUfqAUr7eduVgq8cAe4m9MbqucyzzJNau",
  "key2": "eyo3psWRLQ4Hk68sTvGnRejUd2vtX2bRPpUTXmYoJiuAiWLy286zHDFiZCwwYEmZQB3usJrBD6adFupBeUP7Bra",
  "key3": "rLbRptXQk4QzAiShy4hHqcPpvUm8Hk5L8XEvs2hNugpEHLxjdwc3dThmM2BAYWPMGnUznSBX5w98HPS9cf1jHkD",
  "key4": "4KoeTRPP4DxoKTLp4jKdmALRT56xRstZLnRagJtNUSRqXeMfjZ2aVXxvpvy4ESVrV9nWaSy3gZvRWyTCRSSZWHad",
  "key5": "4rq7LR2jvbSHFJr1CDfj5ca5hwsvKsSNe1y9bQvoWN4F4kwd4CyeZNtqVi3h9TVCJiAs9SHmXGhwX7KieH3o8Z2u",
  "key6": "3tdM1GnuywtGCt1BekZvboMxfwvFkuC6bgeExJJniQRRutCXGViwkEwaFM6LmdMUFPe5czK6UTXV2ArWkYEyBwq6",
  "key7": "QDmLxLxVg8TMvAyffmt2J2F9xEByuXnJq7gvsSkM3wt3cdLLZcg9hapE1rguhqq8SsqH3w68N6aNuERxDqom3u5",
  "key8": "2wjTNUJGbrAgboHi8M7rz2ZyiSGpUV5fbaxEtxH9S5NYqxcB72bAAyesxTC4XYqVc6w1iYnVD3RhvWSDnRu3FoKs",
  "key9": "FXJ3M5YYT5vRE5KuHNny18SwPzoLb15fgGPshJamoD6P8equ9qcKATKqoF7fLKEUp8uKnrXCmS22AoSZb3sHDmf",
  "key10": "2G5rnwcUKsUk9F8wCMgHtn43bSSJkQ39tnbgXeGMXgxvLgKUzXuFM1h65yF7JbtsWXf5ShZMpb1H9emA8HRhFMnZ",
  "key11": "e4dFPMKUrBZHeLfuHRj5XLZNin4jR85DK3BhhLZivkf3fNWiFEpuquzMFcHzjzMK6LP4uAScr5hinea1nurQQx5",
  "key12": "48vqb67bxCt8MEigABy3Lxs1zrQjygmVnYTcnvQHvkzYESWrEatGm3PVb7weUFTV3wDuSfffoxJ2G2DzQTZ2LXtT",
  "key13": "3NvHHMXoqJNUuzPUWGQDJ3q8dcRowPuFBhLPyU1cztixegFNDqCC9Z2CwJ61hFoQcGeToGhHHerzEBKnBPQ6w1Fz",
  "key14": "2JfugbWiGStUb5asmtvYaUqJA8UvvYnV5bwkYc8XHcuQdETucsxwkXaGqbHjctw7f4r4XqmCsep1qzTmMHtwegAf",
  "key15": "4kaJryafjS4H3BFQYqZRYZF2ntDzyusuVCmHcitZwn6MFdYoYn6Jod278yWUkdKkvACWF47FrEhUBPAoZWhpW2Rq",
  "key16": "2TWcmmAHKochfozBv43qPs91E95JPCVLUDsyNfFLcx6hGXnstRkXgpbsrvk5s51xLr7rk2Jwr9kZyMDZP3zZe7Jb",
  "key17": "56Rp9nax5Uw4qUuVmPqcKxH4W8MBMdK97ss2H4WF4mNUox8BhRcqtuWQj38Ytca192ggPbJGwev7nfYF259QtBfB",
  "key18": "39rqna8fXqxbSjpm8xb39T4tfqtAzAic95d5ZMnmjosaVWiDQkU1s3Cntvi2Z9rnLaBPVcGYoptvXXk9zLhndXNb",
  "key19": "5s3wf6hvaUoqGSYq2hNMPbvRDyQ4abC3wFaFDg26Lg2WyRimvGWA8jrv4UkUeYkBDgtdMdnhRNcKaU5hWW5frhMg",
  "key20": "34e4x9EcSaFReUgCY2kRTsko9TAPeW5vckzsgrL6KakAGh6Uts4krtBmqTgNMTgNF7pDg8Zdt8t9Dfog25HkbZjC",
  "key21": "96ueAD9CjxoCXSqq3M3CEi63dydskfzDb6bt5XxgYD7GUS8fHuEsK1bPwtSmYtLuuAH7zem3rhydNEKutpVnws5",
  "key22": "5PU65JNDP2STR8fah8sbaVbQCSbJ8sStLnTKsfgA2mA5KFoSDxssdKoCvZbGcTnmfZVsusEdgvZGa9LhbBtXVGCs",
  "key23": "3JoRPhcPW5NnyPLgzbU6FhyVYrbhfN1e1cEbKScAYEqgS9bu1LXq9RDe2k2mobbhm8TX5UTNAuhWjJhm45kPWjnp",
  "key24": "4kHWdB3VSSzqhdvGd3dPfY4TdvdE4hCXygf2gLzgJWLrvx8138pG5tcFX8m3dsMTNRUPjdbNS8Pwx259fnjh2547",
  "key25": "4Zn2bEfmP2L1Cyjp839ryya7VJ56ED6MteaoJ5isDc6CupNr9Gf5Je5W7iAhuU3cc51oNsbunT21FPJKtxPxjbTZ",
  "key26": "sRrnrCtj4Z76GextgY2YstxWJgppwF5bJX3vxCTy7TAfpEEmWtiFGVmFzKDBocoVhKyakGkrL2ZE55Jpj3WJ9dC"
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
