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
    "63PuZ3JrTX3iLnWhv8X6EghVHWhz62cp4SHSBZVS8tE7hyB4fcuKU1iQmtvdRvgbCCjKYFhm89PzsF8ELCsuwHtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4THoXWs8EaVVnHNroxCWjaEetvwyo8GChDqhJaDRop5ss7a2VGUvLTMLNriVn8xGbALwYAmnCJqJc3p3UysbyC1o",
  "key1": "ng9vRX5njfgLSThBMD2wMAa1aiExrmZS6asm3Bp3psEGPrSMY4snKbJrJYewJVahnuWnphJ3SucuSbGmS49Eu9e",
  "key2": "CLixLiHtu1FZu4tgmHQiXwg5ZSwVDzrKeLQfhmPmwrWgnxwqQsr4fu5qwgzDZCwXY5ce2cp81vrWLQUE9NBnPcv",
  "key3": "3vjcu2rZb22hasRanxDVhxt6MohU1GXDytCNGeKwnSCyDz9LkJLZ6NmcUxcf5VR6MGwkpwZ45yrj8emYsWVPozys",
  "key4": "4rat8xui1wWjQLqTwaKK5sr1StQQ9VUQz9yDNU5xuYkbcB6e4pwD9CRK4wt7PYyyEGWxtdVnwt9F6u7Lj4DFMu7f",
  "key5": "3VmBbKYFtZiwjFWfVfPrnyL8DD5PAtnidsSuY7rVCPm1j9dEfxVJijgZnwY2hzig5TT4ZuJ2NoHKKPhc1FCvbsuT",
  "key6": "3whQfLMkVejWjdqLXQSUPLrkTKFFsCfkY4HLjbMs2i9o2upPihWHBytGtWZ7DMoh9cYYmwq1hZLCgVZZaFwtos7J",
  "key7": "2jwJcNGNiT9S6kaugSUTySkqju6JUnsLyDAgEYK2Ym7ab2Q9JjirEqt2gu7zgR6N1H7qvirLv4SY6svrdmd5Pz7i",
  "key8": "2mpiVUwUBc5NwCbBFbj8aqf7yUSn9PWbrrYNZVczDWfjYfMEAp1djzKsShGz8RiKjqmTTbxugusyNT7XYujnRP5a",
  "key9": "2RZ7bkbxZpCv1sqkv7e9FmKAgfvYQLtwZVKb2GzB6t944ZSH837L9VjqX9XDDLPwoLjqC6HuDJRz11V1NYXpS77Y",
  "key10": "2xNHEaBBTChZdUsUK8tgrBZ6QivbTzNL2ZwzusaXPbenZkF4QMYp1u7e61gCKMX97GxcBbzwdVZ8Qn4gtEBasN5d",
  "key11": "4eqYHByAnjqrJdWUEvzx5iyU4udTuTvGvdhiP4duFZBub7xgiC6smYSsw2DgfpVHeLCihPzNTsMgWo8GcHBpoHR6",
  "key12": "5cWB6Hb1KE2n5CRm4vn6oWuZ89gxMXfmAhXFV1hKU5R7dEeGs3ShhPfSpsGLyUGmEp5mWTL1LbDQ1cs13PdVsCTD",
  "key13": "33BaksttDXmGxa5VLktCuvAqCQgubRYpkBS3uyTRV7B8QjQkXpVRGicMV5bRs6xrhrkvmZKpJ4rPeAqBh8Hd1WG5",
  "key14": "5br5eG6SNhCjAKppwJ4hwk3eeDfU7Dj7BLFE5TMenY8fYb8fmhRy2xNjPoQ4DrWcUYxH2XbRvF23VemV515hXLTQ",
  "key15": "3ZCS4CHwxRD94FMqq7fPo2XpcJcYLJT3x4u6scLBD4XEcEg5WYjBHZqH4FQrrJHxjNBytk7NrxnW5DUEtR9VmCQZ",
  "key16": "57tEYPNK8ows1C7CKDth4nDNB3JsKodnvyQ2MsQ17FatMHoZadF5JpRkzPJdVYkn5LiC8E4HXXZzHu9Nh32JHM1Q",
  "key17": "4zNmzaH7FkLWCkMtGm61PNGXWfLBMjCjYed86ACCSpP2YqhXjSTLoVx5JA6oYcWqGqnnNMZDzqKJyanwcJvZ4R8p",
  "key18": "5knX8L3huv1J8yBAavRtViaXnR3W5bKspVpUzjbTiwnPb64PpUmDN1Rzgz6iaRNVK3PPwJXmv5jXiYtShPMWFvb",
  "key19": "5M6CGtF6bLnRfn4xQHmJzX6WLxdgNETd5oRMF2b4FaXoB1TfPD35KFKDjktB7eY9hN9BKQkDKh3fp2KhBdkES2hQ",
  "key20": "34ecsJKuv1UR4honzvV6smYPed3QrbApBp3kVpTRfGic7XeTarrpytYBVWchHqRZLtYy2Nh8mHAzBJjHaRxRsv9q",
  "key21": "5MrCb4toSWH4gxsmHkkvVkTEaXNEG6gsxfbCLpHXgXKXRt1RfZ7ippBxHnNaMEcdS4vBTD2YQefVASDtB2vxvG3s",
  "key22": "3xHyQ2fsVd3JUPKD9eWqmJQayNi4XdpN6bfKumVpqrN7n8Gt93VneFyBV6hvDV69hPB7qwVheNcyZmzBsNWnXo8Z",
  "key23": "2w2Wj44rSnKgaVBLDLhbk5r5UurKmhLHWW2dpEoepSWL8vpJyZjaGveLCV8QJVEERZTsvGEi7WatLm6JtHm4myqq",
  "key24": "5ToG3CRNguXugoSNCNLHfQCFDApAg3S3qWRS3YeMQ7ArHac5ujet6xA1A8dugwSgrWCbrAPHZrzq1sLPsViELS41",
  "key25": "HRaGPfWGqj8qFdbFvQUq23jtzn6brg75Qsqth2SrqZ43BHNzJBzt8Gg2QQLGHVJrfTRPv3cL4FeHHSbBVaJfrq4",
  "key26": "5Chj6PRygrnCBBwYZhaXb9KfTPokojK1TTbFEvr3nc7DqRuQHqg2JfVk1JM88t7QDZsyDEbqdT8qD8Xph51pAAXz",
  "key27": "HXQZDGzQSZdepXGdwFPuGULYYaLaT5JGVdTeneotpPrBnN37gGBn4tS9Sm1DANabLXmt42XJuABRXb9ThiSKcYB",
  "key28": "3G9Z4BXR6b1Fxkp2ZsV8rCFgJzjyTnSpGL5tUcrJA8GiuzmGhF6sJNhdpmcrmnrJBVA162AwfWSSmE2kvjxLbV3z",
  "key29": "cLJ1Dp54nVnDiKmc3bm5jKiKPNJZKsrLyBFP2dcha7A8PVzNiDw8YvxB5YFS5woaTjXgPnvL8dbwFRRDb55FijL",
  "key30": "2BjwtjPTH8mr2mEFG8YkHGxra85ScdHbrFkCr84Yj3f9gp6dQjBQ6X2h9MNBHPDqABbGaQtoAPVXwRGGTnL4EjMd",
  "key31": "4HVjutABMT1AVPV8MdUpC7CeLbw7kY2CUnfjzQ8r4AnnhYVihjiswh634cWuRuDXLJ4BwEaDFoSLohKaK1Rz4Zde"
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
