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
    "52zKxEtpQbhbcJVp4QECkXpb9kZivUxfVctPNLxNS3NhX4skWwpbxJn4avb8Dqt9S8WmwqAaK12De7vrqdXLNZgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VvAPo4Z9PFjkkf9h35cW9m88cinThMp2Gj6zkVevKdKTXrCxVoN23UJFe4s91Bgy8ZNeLa2qM2uxFmtSA7hUbd3",
  "key1": "25BaatL5hD3fLPcbTNxMZFvAbRwskjHCYaDxXENz2WzjzjiZD61KdMKze8gBaUASRxCx2J41wpCokWEwUkiSooWg",
  "key2": "4XNU2APPnLn9b8gfAod4iWXmtT9mM76XPoSzZ4ze4mvruf7meheHFYh3fj3D9dTfcTZja9eWoapR4NEtWitSTXyc",
  "key3": "2L21JMa1WrVBxLyE8Fdr25Ai9U1vc9D6U4fsrm1TTbEagXirLwQpifW16QouBczs7jgTbpUULTVUm9wq7xACnqRx",
  "key4": "4prpSyo2Uf8VSxL1bBsmDctRj3Wr4r7xdUTjUCWjAHGzgsoG8kyjKkj1bLYdM5ofVxHECCsHrMGcPZxYNgcHwMfw",
  "key5": "22YTDSw9CfJUVFq4uyoRsoSSk8mz9vad77Gz8nNNMbesfaqdgoq8QE4h3HkR9CcrKRuqErnF5CyQZ3uk8NefGMpA",
  "key6": "3ST49yABb7qyr4wXQUYiv66Tjc7wGZJA4dJqRSxKGETaDY8DbLDaU1n2yoQZ7PkPZ2ytE7AV4Dh3yskDVq2HwwXi",
  "key7": "65YqM2km5CT4XdCJaULgyreGen1woW8748k5tTtwEEb6FXUjc8yKFBgCHgPyKuHWyNrkWS9kMJSrNvt4gy71yPZv",
  "key8": "316w5YPgB26PPoAxHUTaFVDZSg47W5Q49x87hff2MJYSXvvCcvqY2Eh9dsrdeyrF2MzJPcLx61G28iSSdSc4EdN1",
  "key9": "4qTnPM5PqbFa6m8spBxHDK4p1gKMFkr2VUn938snaTRUUErSHcyrLGU2WDfJ19ApggqDcXP9HXTRxj9kGeUnEauU",
  "key10": "4NgqkXdW4DbyUC1LhJce48vzxLTUzgpWkNgReE6ndwCjgNYRdsgCwL3nBwQz42KaWj8A4UCPNBxHtKkhPrGZeKRw",
  "key11": "56uAuKHtrfd9u4mmJWkFVN4dRuiFZtcBSXfRhUpnGwQ5BS3WFpcSJT3BvSV7NNouPssEdiA9x73Py9mZdEmgFFWY",
  "key12": "4vYhPnRnphHkN3njK4ikhxG6m2B6m1QHw67BMHEmqaN541tMpbhZkC1movw17mc3sbhqxb53Fok189LNSBDUunxq",
  "key13": "4sp1ce616Wa6cspVBjKe4oWbdv1LoNnPkUpEhohGMwmbDjTu7pM4p287CW8DNAuhcb34sMPcBPKYLdJfwi6rq2Wv",
  "key14": "BXJ5zDwoLsKEEX9SXYqfL3r8ou113bvYhibVk23W5hVoz4hqDwAUtFhEyyu9dKPrabW8gjm59Ce8TunHNAmGhbM",
  "key15": "2CyW4k6q1tq9KLQ2jqh9DtptdXueat9FxMx8BRVTsYtZxqs4Np9DChJShUu8tffb6WvgKQLCUT1Y2duVx5HGNYRJ",
  "key16": "2EqD7jvxzuZrnSXk9fYQH955Nx294jyebasG1a2PSLtM6zhQ5SebMXnP3DA2LkSkA1SwRTm479kAGSUdbvEofbsz",
  "key17": "65hivgyyFfjZsbxMszBwiwGoDtAVa1VZjqpe1yZgjofmLYZPxekiqQHYhBP1d3kHPNBVjZFsCiRabyNPpdVajM64",
  "key18": "5FxZbeQd4YKg3Tfzgkv8BMmXfuTaZs4bHhDTDYE57u5bkoxQvLrNYBkJSpy8qdT7PHAj3cH2UkiWMuWSjgzvUxxX",
  "key19": "31wCVe1L1eMxRCA48aMhMGzkZvZ8ZdEAaGiXjzvFmk3Prrgq4MuaPRAc1i8CgYumYc77Q65RgEhnTvMsAPMob7ua",
  "key20": "HgdDh2sUm2brDPoA1sJzhtLXNEQYTYnFhrz9PtV4Qx2enBm8SYDb2H1BoJSzoCE2xYdJhrEWhYDpKTnuhP8jkoQ",
  "key21": "3NBvPub9QwH5BP5ZAhaPUd64nPvG7STssDoPubXvqf6GXyc6xwc1yLDPKGJ1ajEyVpAp1YK7jQ4z54DdzW3GUHk7",
  "key22": "3wom4sU6wzidj658EWwpk6PZJUwcsGegyy49QJCs9FBALhMDQSSwMoJUe1ZDdKA9djbrX6UnKynvW42DgKKL343j",
  "key23": "daG6TCYT6NGDN2N9qDbP6pEDNUSWJh51UNi3ZZaJJUuN8EBsvN8gaqa3KJAEpWDT85v61t7xkqKqbvWt3DTj74g",
  "key24": "39X5HzQFCyX5ceL2w2DKuXLkdQyUEBmvqVV993qtoiiSQmGisXq71PmAR4h5jnCUCbtXm6hEip5oBG5zsRzyqnce",
  "key25": "5DS9kiZvFnLhW2hJU8sY64NyAHMDmYbPAG4mGJtUfqyyeEfKc7MuHHJghVUzcXVFgqygWnSGZf85ZtS2npKSs4XW",
  "key26": "5SR6h4rgxCRj8z65yEom7NNCdW3iN8krCj2c2hu9QwwE2SweFVyFSo5CQ4s4kyQwj8CvmoFpT16ythtFvsKwwakF",
  "key27": "5HtxBqHCaX5Da3ViSyVCdX9YQLq77jLcWxeWG5upXXUBeXtKvykCRwzxuJ4GbRn4JHsG16V5YMeM6zvF3JtJzos6"
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
