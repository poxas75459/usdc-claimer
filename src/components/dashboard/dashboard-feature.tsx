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
    "2bcQrVGyRfLqmXkkAm7tpbbtVsTa6cpMetpZF5ShVxFFAkg2oL2YN2PgKoLLWab7fwSFJXtMbzZkjenAo1Ymo3LY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JCH2E1V5Sre2Cdk9G6ukV4Uw6MjpBramettxApMMrPbzJuLXrZ2saowRdsjKmRZVD1xScGmTUnPRWkGVFMgHrL8",
  "key1": "5GmvtU5cCyTcnaWSFq3rY4ixH5ssue9v11rCWpYpxBWui1z2au9aTcsM1pgS4eg7f3hc83ZsNc2tJJ9feVHrKShv",
  "key2": "3CpjGEAEKY7tBoZKdoSPHwpdgg8rFm8TPNVPKY45JL4CVYxASzXwvdUt31GUA7GSohjQWLtGAdjdPcNGuiNs1VUD",
  "key3": "yzFd2zRuamaAw895EGBjyR5SPoZA6UgGZ9hSg1EHsKzHR2McsTWZinKbFy5eoiPtSNUWNaVC33wM9dvJUckRMzy",
  "key4": "4sP6XmtQw6sxZKjXR595FdTD398SXvcz7wVKr9pUdLpaTLEntWrFcqmxVaCBjxyoJBvb9rxA42XsQfw8kWeXXmMZ",
  "key5": "5VDTenv55aagnYir7RRh4Z3qzNNJnaBCg9HtbmPBQgyebUTy3XUzoA1sUsVripQiZJ6Cx3J8CcFEjRjZv3aqr9QD",
  "key6": "3LWyBJwHZWVNpyAHUh1YCBoDaNVpBqAmgg57sQXMR9ox6nydS5CpZ9r7XmzNxEyRXiTzaBygF9WGUd8nmrrwMQaw",
  "key7": "3risf5LS7RY2nyXoJjSVRgTs7nhVVm1U4MNKSABwdD7oNUhMYZZsXG3962u5qBrexgvdKFao1bh3ZP32WFEJb1Sr",
  "key8": "4RzFNihfFTgKPTTNhrgw9gm5rx71Lvz52rrSUfwdsB6qUaoLqAGtr8m8vTGojYkzuY4dz2pi8Y7jPnNrPH2hyAKM",
  "key9": "3rVVhsMbUV8czn5mypA1p4bxgrFh8yRuCMTjcjBgYShA5caRwu6Hs78CLqDUEGqQQUGCsABZZp9ZLsqj9FPZJjxG",
  "key10": "2Jg3yifwzm3md2cRovKr5rYnZSdM1QaGHwK4qwwZgYtozAXk378CQDHhmFtpaVecn1DpDvVw5grBuUY8r3zgyDwx",
  "key11": "5zzcoxXKtVH4UzvZQ2HswsjGFLhh5EphbdpbdGWnhPZDRsEuJFEKM9FhoXJgBd6394JuNMTeysjDsQmZPaBDMQQR",
  "key12": "5JwnEJAWBsP4DW8tcjJYj4WegsZNZ6mzLuKr6urPUkjRiqQeQRWJradcC4QGxCinFWwrt6pBTM2vy7gjJUTSBgT6",
  "key13": "3wQoLGGgXHuNfSjocBxGfsoD8KvkZqGsF6fkMrqwBFuHdbeUK4M8Po8ojRWRi1AcAaGncgsLVcmsrBz1gjYszEPk",
  "key14": "WfTEUJiKJZTnHbexaQwCtwnJdmrAghNYEcGjdpSVZpr2DsWf4uqchRVnVQixdihF4gQNS1aT3nq2tHEar3WvHWj",
  "key15": "3WkiafRwyDePN2HuPwubeAiy3H3rVSfMHRUUm8c8gus3Ga2dxkzVzoyZqSDiJekFvnQvSE14rrCma1cDgESfsYY1",
  "key16": "5WCpXvkqarquv7er84K8u4ucREsYRDkj9thRGXtDUPX7hvtYqD8RgfBn8nd4cU36FyiLuiXczgzJFMiLWB6GZEmA",
  "key17": "3WpADQfPjEHtL8TQBBW3Xg6h69Fwq4yEM5eLr699m2ojzuTuEVNLxUWv9pg7qvd43XvnzPMcxMoTQnoDaAyEPtmo",
  "key18": "yFvejN3WcD8f3u6s1kyqjXgZTArLMcbPrVKn4B82gLrBfbfrL1mG8s2c4WS43QGuUHMcDDBZJ9aN6dRfZPrR4zZ",
  "key19": "2tHkmoY4hFdL3Xv1YsQwXDCRUc1PVSeUw5dtizywWxm5zvgYdZTHrcPgQSGmrPFffbhEVK2zRmsK4tXjtxqJFqC",
  "key20": "4MWxvrY89c81VCAGhPnr13VWvKd1d3ZTJv36hkejcGhvunKvJWJSXyDiKph6MUti3tW2aPYixs8qqHD17BkQqv4r",
  "key21": "47qKLtWGGXhmjqtyL1S1eN35fuDb7MDj6WVt8FkGHcahXWx5zrrUwijMaMjE9jxNaQ5qYDXzWd8TtfQY5KUiAnmp",
  "key22": "F5CHHHt971s27MreMRuuA2S4BYPonzVoLDTCCrk3euEUhXCW9KxzPVWtpvkW8WEYMCL319LBwfidekPwXCxTSKB",
  "key23": "28KpmX1VYNaehe7cHF6K4SbjYABYuZ8Brr2KLNdQ56svAbZwbZLfLyBpFGunjDW42aePR7oFFuQWLtn6dC9EUx3S",
  "key24": "2Hh5J1paqo8EfnqDwps2dLVxbmeKYdkHgpNV1Fgnw9ycK38ShKeFDQB4knxaMB6N6wKUrVoRTtVrFYwaxJKYUbjg"
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
