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
    "4nGp9pKm4dVPiepwGyS47uUGMc4zbCb1XLdtq6AbQ2jAFb8AKt4UBFeP5v4aEhJYwcw1gyDp6moudrN71GRaBDAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dv86XVSbtCvbPMeEnbMz2HwF6yFo2zjHEUCehfYCxhzAYa2CfncvEPsKck3kHRDtJtURpWjVaNjo4WG7D2xfTRj",
  "key1": "3eyHdqwJDYK8psQM9ELbuqjrY8AUjSA27cqxSQ26MdwxNqX5kGmk9kD3PoC2ENmyiEx1j5ENhPpQ8sJPRJAGrwkh",
  "key2": "YvABKEsxK8MKSgJ4syLsj4WFThtfAbT8NG4ZV6ktqt9EFsti8YDM3g7Q7GF8vFhVWV3gvVRzQb6qjii96p58MBt",
  "key3": "4rkJWu2zPvRd1fKa3c4Pk5TsNjogKeWjX9GTd3hGuLsu5Tf9ocMniyCT6ngMAWdFn9jPNui2FGG2fN2TT1vrCEqK",
  "key4": "49DpPv7LygbkSbvJett9jKgRrwAwdsfJEGexUBJEQwdGQypfRV6iC1eTdarsehN6H9ZfrP8d1NDCQ81RtyAPVvYj",
  "key5": "4qBHZAVY43XzgXHNxtqyt4wPzYADujFCHixYXEpJbM6aTAk2U8A2uY41ASwzjEQSUo8RTikgG9CRzQcwvJWmAGnr",
  "key6": "WekqsFbgWaGxks5Ut4PZRijJgLFFrTSBRjBie6DSSTzx9W8YFhhBKZdttbkKxAK9r8phzX84Th2if54SGvpWWwr",
  "key7": "45P7khRESQ2Xt2D9EE1mNNgt3uj5fxJhjsgr7GMF8KFGAtcr43qEAPMYK8vXqso14gp7pMYgXmtWZHoisTfnWc5P",
  "key8": "WUD64gyVubFY7UiQFZa3rFD5rj3Nzuj3YGrmbTnsaskRA7yfbYDe6wSGDhB5H5SUiQc61CntGgu4nW8WX4QYBb8",
  "key9": "4jS64wQ1FdwRq4LYzHQWrDLx3KHBLPDbTuoyQqXHGVKj4tg8Bv9pLhvQAPaC7EWfESLWziFZ7EKpHXk6rKXdSVfY",
  "key10": "3dCLXRaqLUV5P63yZvmXbhnR1T36YeLDX5wkVtH2kj1pexFe945gGJZ6isbfhPU6bPb6PkzcrPm9sRhmvKWCTqb3",
  "key11": "2bWNDk91QaV3UWoazivf8icLuEwqggoiZuqGLXZ3FsJi2vSXQgFSDgCypFxwzJk2JJxdzmrgEDUveZHqycn5Mbn9",
  "key12": "7chDZUinUMzfKRiJLmRzm6n6WbFBio6rtinN95RGuKiVkatRJp7nuADrcz2Y5nJhE66SgyBsjnuvz12MnekMQwj",
  "key13": "5L6uiyLCFh532RWVXd8r1XTJfRYuNZ3mBYdZpbAdB5sq4qqRhkrQMqEV8U3KDw3UPZunuGitJ9pBY4UB5DvWj5x5",
  "key14": "2CBBAYRDdY44mDYCgoMupCkUdjYazMpywbZX3z18CB6pAM8DfPRoc49B7AZdF4uQMU6taC1bDVtYBbbgitKAeyUK",
  "key15": "5wuHg8FbESsZnYf7QkTgL35peNP9sv52jVrciv1x1TkVFJgEkMC9rpytd8bdPHDMRV2Lp8qHCfMUNzRkyvq4iaqu",
  "key16": "4H5P8LXBE1bN75NsGXxukRL48hrTeJsJfYbNV9F1mEiaYUpJgLTERALPpAkKooWfNTV88FyoP4wwDjrrKHQpq5N3",
  "key17": "4J5wuGQbmDroAzTgGvdR2N8ERSBHvDbsvQcrEq8GvEFrWLoL5xS7v2f7FzRvUSJbm3UccGsutqzerDCMY1JzdMot",
  "key18": "3cQMzEjotpnHDS6xR6ZCDiAhyZKST9hqsmqJrk7omVQk8Rzzwq7H78RihUEQuquPEm2L1tnVx2Xscr3y4hCXFD9H",
  "key19": "5PvZZqkkHNwsc57hkoveyG7qkvb9u12BZNbQ3ckNknwQc18R2zfhWeTKhbf98FJCZGq96H2DpoYoSW7Xkph7s1eA",
  "key20": "4A1uqBkohjLqEnw9n8fHbXnwdJ6cQA4vg41hv4ETq9cZUJ8MSLUHZHubU2v9Kjq2qa19EUHafxbNSAMjYSPYAP1s",
  "key21": "4fYA2EUxD1oRbUaBciGcJbvBt19NiUzrFpw83fBPbAmafLaNakZ9wEdST7icfpEuxBChJjxneUtB8W16TB3X3Naj",
  "key22": "5VCYV8Y1yhYPiBaFR6uJ3W1eJ5tgWbyVMTHq3cC9JocMmDMTCgM9B5oqCaVL6UsNvdMqMfNtWwTxFoMoLTHHxJbo",
  "key23": "4i4o2jzcsw4kai2W6UkLCrAq9Z3FimjqBerNpGtBSz3hKGkUPZ3hyEeddFPvCFQTs6kmTXiK5BkkNdcmwzs91EF9",
  "key24": "63qX7mrtun2FrN4bUb9bwMzmi2qrdybvmRjSa2oqhB7shZdTykW7BRJwWcwaG4rTkdz97CfyGjYjZ7SMR4JswQ8z",
  "key25": "3xsusFEvFgJaRvpRC71zG33Nte6BoAKTAjRhQb8x3MTJ2HhQ21TXGFCWDu9o4itv76oNkuuYxL71djVJvidzWoiv",
  "key26": "3hjjRZ2i3cgUHa3mai7x2zk8zhf7CuQVSdGf44tVb1Whdh8twTLVtCAhk45G7HBbtrcBHDFVMnPSWpmfAkwvWFN3",
  "key27": "3eBeSC6qacEyEAGXDqvYVsZ9pFr3ynAkgDpsbuTTxvdYF8Z9qWH6MWDLowMv4Hkr3qD21HrhazA5Tg3bzDMShDU5",
  "key28": "2XU6XgERyZZqisvkMfcekPmihXj9vHCx81SiWgx8KuMzznJWt7b5udaT16VJa5uGHLnDXCTyX7cZvePsdr254bR5",
  "key29": "88NZoWun2FTQaEN4cy6N63ShDBrAQrnwFgKEXvKri2XxibynkRDZovKbC7ENy8hB4RyYaDkoXvSJ95fmuMbRMa5"
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
