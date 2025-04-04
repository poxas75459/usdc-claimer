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
    "BL8iUQAxSufJHz9aUTDVAJ17HAhTMrBm7gsFK782qqus9nSMQHB2jccKNwzWZeUwS58qgwhJyMdyU8nHwhaJtuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WBXAnPxGc4hLQwsfpvSr6WLfn8ZK67JgNcWA1W2JVY2A7LRid5QiKDnUbcx11drL1iW2vY2X2g1JFm6DDx33Lfc",
  "key1": "4HS1L4h5gFa33HeJvSTRSCjW2oRBSNbR5PH9LScf4QtY7ZuLVpvB5uCyAUFzCtPbrXQrsu9jvDY3pH2HXjnzWPdb",
  "key2": "64DVBipSRd6uHRA54bzAXK7qAPvupEcXTuAAh32mrsSPVb3QpTJ3nCt8HSjZ8fZjhxtaDHWgHZJH4q2ut7thrvkc",
  "key3": "4HhT89tMisc6Yrr25EFRsU8QjVLYrGyy8Ko6UrbGQ1YhvApiuza6wrq2NmWyvy4WuG9s8cAZStne1dKG3bJKX3t9",
  "key4": "3tsTN6yNiHP3FovvqCa43T4v1RgtokAmjNrowyXjAiNaQ8fsYHwjAzMVx5SKzZoUrqTpy1yKScEp2tY94WBc1fdf",
  "key5": "3ByNnLsxadMxdebkgmDJ6AQkNcuCsHV423GJrUa9ywCDm9QQqhkPqS62bRQctVMqNZdQuxQDwgQaLNicnZdgDtM3",
  "key6": "3GvxnZGgEy1Lzmagti2LXzqvJ2xGX8qS7bzo93dzSsUxuA4epqAk1LLPp2ZJqXadpn7cNSe73A8W56vS6568YzQn",
  "key7": "4a3TLGCrCr2ZPbSFMx95KPSabwLD4KR49xv5AaCxPSLK1dGtNmqHeTyjwDG4h4C63KqfYqzJW28DUdV9RNLT7Gkc",
  "key8": "5N2erqCT8ka3dJr7BFcXWSWBTxmRe4NcDJJqQPW7rQEdWxbvx9tfKUx43zkrNDFrJy46dCoFRDiAowHdFpvGrXLD",
  "key9": "Fy8LTKnCFGmrhDNr83MNTUv1DWphCzkgywhHyMmftxbcoMYpdo55DxHEvYwPwvYzoushX9wvSM6Lf9CcttDuJL9",
  "key10": "ueXxpQtdMs2fMNxJvtfYevpoeGpb3xMG3jUik2MW25pqsF7K2C7aCmQ55ezkd1DBxcV9McvMFGBvdQM6CRT31d6",
  "key11": "2UESduDaPpHbg3oHJLbCFibxb1SvAhMyj9uf4S5AYBKij2DFUC7752HB7DxpdvKDyspHqBN15yw1vgKqxhosWWr6",
  "key12": "5LQB5nG2gRQbuf8JXt48dYUN8HAQQy9FKQMGfpq5X5nz7SLueAaKVFtxpvwWZD5wuLB6cndBEDAfXbqQpPFNMUVA",
  "key13": "2y32EFc8hAoFQDU9fwNcfUgD19NMpRd3VsBNLYwCFGeGb3CD4NMrZS9EfVVkDYKsfhhC3622ck42HwsSdnsCH3kB",
  "key14": "4AeA2D3AQvWcYwF2zUdhSnwKpxnpSspR2tRvNt5gqm2QhwbZtwNXY7oi4o6r7YG7o2fDgfCjDgwnmMGY7HiTtRJj",
  "key15": "238TkS4S1A4t5qPeJVzGc2CaDHBdcKFFLT7xg3F689RGJjgKwkjVfpZFAF46L3nqPj9agYhoGH2v8svt6UVsTpGL",
  "key16": "4m77zdDZtPds6c4WPnH25FqrXJG9paiiUTpcemd9bVR83jR5gwy9oWZMJuRSVhjV491ccJjenBHok23zXrw6Xo51",
  "key17": "8LAacpm1Py39DPPugCiuAnsLJo9iYVv1r5FeBpw8H3AkEou3phs1qazvrb4crAwXYnXW7F5sykmwgmKiwCgD5pV",
  "key18": "3D5g1aZfrT9vJ8EEwdgXRUHM6k1orFgKkLCiRFotq4tqBAwwW9eajn7Ynk1cUv8adZXXn4Yvrb7u7tFUBi4fQCUu",
  "key19": "39bv4Jz7WKv3srzsqheWQUvkMwmDFwMWg7mBXj9emSqXRURMyJoNi5J4ShZYhPyR8Vam63NEQjkuoP6ToB6CzMn",
  "key20": "gtHaeYeQ3LvoXUvsWYsKETbvxBSTcwhj57ah5SMNssbypBNbLah938PgucsditDBFSyeqeFYJEfZFNPtG4J2gz7",
  "key21": "f9y7tjpW7EMr2vqpUfczqshbKewji8LArNLzZ5JRdJ5rtqfkuTjN1i5J9QyKPr2LUeanvwm8VraRjnsPoVbB2ny",
  "key22": "5jYVpwcyAN8dELM61APdosa92qLkusLuSaXG7uPXZQfvnGGa8zsJ6dBvpaEpNSvrArUyY2K4itFvtH2DwBGabpyy",
  "key23": "2L1nLtL8Wx6DsKRw1JVgJgrsktp6qxR58yULTg5WjtmhbCqJzU2fMiT7yzSZ25F5FDBb4iwPtV5FvyGwsevVFLcL",
  "key24": "2apuSU7mk9d91LYyFfAaM9xhKNKPomqLsPN4ZVCMo9S9G3aTxYxg8b2GBPbupXsjVCpUFhJxaHaYShxN5nz7xYmY"
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
