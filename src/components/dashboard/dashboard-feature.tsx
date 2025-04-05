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
    "44ymuznsDRrYkuzn3Y2BVTR1MSQ5Aufc2zXTM2eUibjNCenCZbKJU8KdPxu7rjmyQtbjDob6Q9yj7TqWkY8V7TBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eFHGCUGjCESw2X6bFmARTizX4L9JmpkHqagug1QYpvBf2WSZ84GuU45eHwurxPQyUE45ohjcpKp6i9XxnYfPkSi",
  "key1": "4Gajs4k4Pix7yf6czNBJdYJsnfDPhZjsyDnTp9n1XTPLrBTXTbABCRshhgMZPdJsYzSjVAAKXwy12Ae9PBQLjQNW",
  "key2": "2hQz5nDzQK6fwjbNvAunhD8uuQfV4ztRYmUFSJvsV15c3Z9wwfW8PpAHnYpy8JQpKSkLegsXYggiuzjt36MZ3oci",
  "key3": "2doPMAfa3dSG6FXEcjT2V5joiGqfhttTeZiS4e5Xq8ugQ33hi3SMRTUPAiUMvQGFnQruseqNVNUM68UzNJdWukfn",
  "key4": "4QcmjT3CjKCaPTzdBAYD9L1wJJBQwywrjggBuKF1BFXr3wWwgKL1u6D4fFveqzjBeZhQChvmtvAuLGJfKpX5S2h5",
  "key5": "NX8ZTHks2uQTnkosWnoqk65fqfGzusJefXFZsnyqdaE9CULuwsAFvZMgwuVrAFofxz3dMtoxqDCBq9A1AkyaZmJ",
  "key6": "5oNEaDMfaNZk7mBygMWk12Z2bx6hmYfDe5esW7pYQmdyD4rt7ZWeHiBpZDkSwZZw66zTfUM9mcw4oXUfMWshDbMK",
  "key7": "5cgPTFyFuy2BcQYb3fv1xSaf5qkBuMLo3NBoFUxMAPwv4FAjtsuqEGypDSd4mfvacfZHd7Dgucrnz8LDFbgyTFyR",
  "key8": "5KogUSzQ9fEKcTKcDGaRUq9dFhuhQHmsESRdQYyjSECvNPA73ecbuDFyRo2GiJMk2K66LefKjZtoA7hiDWakDEZQ",
  "key9": "3ui96SicrRNfxMDRZ3Pk6AAg9vEAUppJt9jui41fsWnmBaQVCgWycPRCrX3ZY3VsaLJuNqMppitfcsdhrHQJ59R",
  "key10": "4dp3vpeSQGjAzfgFdB5aJgE77me2FTnaNAkHYYEowvxBZAcBsCpwcsn8bvwWixXimyov1hGLt6x999QYqCTcx7G1",
  "key11": "5DL1TgY9C7dezLgjocTwScT3myEqJTYSAYk8XaYFeTndGpYTWzLifdH6NLeXKh5p2g4kM5uLeZ9bbnKmbyS1E4cB",
  "key12": "54wG6ao8kND5Tryq2ro3hCZchtEvNvquhjgxgpUC4j2tXT6Ei6cFL9iW6NwrLzRSDpxLKegZmeiaKbUh9VsNTKqP",
  "key13": "48s8EZvjNqTe7ysz93wu87xRZNup6CjiAPKAWF5zSsHkmEZvknHvZrh8VPppVEq7E7hyosTtjKaW9fpY9qwibGQz",
  "key14": "3BwPYNisDFAsD7pKhwcpeZkzhKP9DEDYJEpHyi7zDgGYxRcYNfNpqicwsYUUt1QVozX981TC299p7j3mabQbDdgY",
  "key15": "46U46STkJ7XidRu5xH2nPBzUSsb47QwaxREfNjPoCfHP4WJKR8XaFNyyfZdRxyaUUc9nodjMiTP4a6QkGWJ49TmT",
  "key16": "4SJ6ekmiN1bLYjer7GFG6xE8T8J4PhJUZ4ucRhEw5BZvU3LAVV1nrWFEZApkyYkdu9b8u3dz1cMtSejj6t8cKFjZ",
  "key17": "zkLSqKgxJgQvnLnB3F4hQadNNkNtACQ2gfprU7yoRjve4VLmVW6NLYabLHBJjsM1SuKzokwAHnnKzBRaTdDJ3YF",
  "key18": "4HRxyxTGgFrmM7p5fpoBS5ypjZUvqWmXo8pmCFJeVEtDm8gcvLkGqymfptbDyX6xe8aaK2GP6mgJ3BVTjiaxRaC6",
  "key19": "4pX1rSC4rrpg6P78ggvoakz7YoqPEeo2dfyLVzDZiWYWsXX656SFBrwtJWkU6JGo8eWt7w4CyvdeKHJACCGpbbnL",
  "key20": "McVSYMVFnakBY4ybEv48cJSbp8YYXbuRYLHyby7ocnvJzaA8hJ56A5dsqGYnBhozKEC6QuwqmjMWf35HDZUTiLL",
  "key21": "5Z8BJ92uY8W5Dth1tRxcYHPstCfcQJmLAin7MhcCkAWXCWGFQmrSGMRkABqTzPeUxsKVEspAvTa57FmtGMze6JBh",
  "key22": "2qVPFvNiVUiRazdEFvz4fBLo5DbK3cjEQNbWgHKhSPxDLB5mBS9FBcctSNfLCXcir1YRD3t1LEeXJAaxZ8Yjw1VP",
  "key23": "3EMQCvgnLqQwkF11pjE5HTXYLP3HWE4hWScdM6fWmcDpy56tBXthiug2ztuVZ4cxk2V2rteyipVqDsTYt41KjWFF",
  "key24": "3gYJjABVEyygiR8qwJaUVr4wkkn2v6zzgns33shVjMnQiw4MAC7bZz4HAcPP6yjG6sPVYdBZA6T6hBnRzHBRVEmq",
  "key25": "4Y6Aw4mEFoEE4NipbyJiTYjGNEuFStjxkJVQ74abPd6T6Fu5vQMSaiFTscGL5KFWuGW2VLBNtnYFALoyaz4UgR5d",
  "key26": "2rwWvW8MExjgJ1EmFjVqdAFtUSJip3AHV6NiwpkLSiJSsv8aGzq6icGLBVocKXT6ANeXxFKPdV478djwenAnd1ys",
  "key27": "4H6mx39m2mhVCbUqrAfsoQ5rV7i5DUWMbvmeSNV6tedveLLsbJszo9JR1s354hYg1VtbmhMaCJaCKzp8GubHZYe",
  "key28": "3m4LTpX4PpZNUrphyMwkw4noN2Nk2ks5UwGUxHtWEaGC29fiFMiVM9w4YgNBHFA7gy2PohMk3naN7ZXWfi9bojP7",
  "key29": "4AJc3n9n9EzmDnWFmNFs6a7LVLyzFobV2U3dGYME9HhSRfF8KvHVur6z8TohUX9sotDpPeak11j1EXGTZ41N69d6"
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
