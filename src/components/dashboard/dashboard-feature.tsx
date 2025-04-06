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
    "ADtJZdRDEhKhREkjuySWtaoXrwv1T7qsAnC2nVy7A2ywmwiKHHJzKYAicdJkUnXbSEdcgaffoimGnGgsXrfXBfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AFE4ZB9RpECEQ51dg1aYk6dfV8o4a1WPbeGqbhDpnhH2EpurnkZ49GM1XoHXX1WT5Veh9XxuQ7bu2NX3GJr3JbG",
  "key1": "2eBzg8gwiUyRxM9wsfxHADSqTnZZZMiBtfTA3z8rjMwyZBKCVd6BL5YddsZabXphYziibiyCW4txquNtuTuB5i19",
  "key2": "3fuW7XvfoTXKBAag7u58ozeedKXDEgq79tS7VY2eHmhGFdqDjnydcA3kPScYaL9ZmTsswcQjddbScLTHfb6tN4sk",
  "key3": "3RVwPz9UGt7P5L5uC6495ntJPhwcZCP1PhGPYw4ukyL4G3QqgFPUbvDXxUXKVbRyKWy2ENJnaJiP7VPGuDdC1BCp",
  "key4": "3RrJKG1Dac74o5GD95pSzrC3tzfNa6tKJsQhHSwkVsMSEvRTU7ekEE1Qx1c9a2s3MoN1YmhNpMb7grWdXQwVQPbn",
  "key5": "4pdwsRpW8Xf1FmLeHhVxu6AYFu9PCLdLZMrV2JaEhDV1ZAUGzmv253GjVYG6Vb6qDYuzEYvnTDgGnMRP8zYvREwe",
  "key6": "2YJJk9k7Cs72oYe4ToMxiNd97i4tZyrKBMHsubam5wr2aFLtZweBAyibXZVoX87wNteQoE2LkGYxwMGZFP9jkfkk",
  "key7": "2FQ3gj1JT8L5Vo5vV8y6QmLy76zGuGBKox3jNRuWdNmUNz9xeDe6ZyvFyMzcYCPgmZSD9XfFF6iCBsed2HvAXQuj",
  "key8": "23whN6PqCuZTP86TCdhNSFGqtBBgBWRbCuwSeK7b7b6icWDofWw3fEh24zczBvcHbSPAu84Z7feJKpnHVQm6ELbg",
  "key9": "4rBT8NYYCEzV14iBuXeLyWP5CwYWMxwC4kpf4s1E34z5Nq5tfNRnie3SeihgC4eHJQScDa77dnJn3nNWMYFxj7Ho",
  "key10": "3KNEhxQa6jLiG7fRnokdRyHDTdYJGDcVG6NWoCPFWwVU5z9JtRgqyjf1PHnbYFMJ5MSVG3fNfxDQaixNrJaAspxQ",
  "key11": "5GP2C5196QNRCFpsZtsL9Lc8bxxpqAcjwn4PeTTY9NvyLL3JyuytrM5bQPxvFTYLM2S95X6VXx5Q6j4uHDmTK9UV",
  "key12": "2apWRU5ohbr5fEF3R7GsjMz61tQjniGvHhFcpmiNbhaPAR6qxbCk33izzVU9dTS1RMzyzgjAj1dg2TNKUKAGuqnj",
  "key13": "2FMiuxpHLiBE6cpdeMCvs3DQWwprju4BYtTYbeEp9iG68LrDfwr6AiJmQDR4fF2nT8hXVM5oz4oU9ifrdzKhWSwD",
  "key14": "4A8D9jJFgDfRjJXTqYccoyszGH2AFbG8dWHUsQJaySSBTis2LiCob4PyDxv4LRtTqAfVLui5M8Tuqi2kUKh3uoxJ",
  "key15": "CiL31aMya6SnWaukmb33sDMtjKyX3CoGHDR1ZNCDLbC4wWxsUHPJDkNCet4mFCTNgRdbtew3wiqYc1pCkfRiz3R",
  "key16": "P6TmexiBPeDeyzCasmVFHcrMJLWGybKX3AVHJEmjN8Zgsw2yNeXDMoxebV37ttvdEFrTvSFCG2jq4ZY319wQcPR",
  "key17": "4Fn1VFjPQPRAGweyqJaxh8QTtRj67eBU2N9z1c81nm8ZWKYGjhZNBje7jwBWUxUWzPyk4uHz2xDAUaQFRA4td9E6",
  "key18": "4h3YHwKdnwGqDFXLFjumsUnUxGhJdWvWgjZ2wmDayijr6wcHrmSX4PVT62ijUaWLCZr4kHpPq8ameMJQBNaac9oT",
  "key19": "3oQyQbF8D2FhP7KTwQ8cNJVCkLTtofpNBjDmwdjeZFwRkrWHrmHqjjYZZaEzbKh9mY7iC24Jo3Pm9zMAG4EdeSkP",
  "key20": "2RzPKhoWBYakiWd7DLgbJX1Mohgy8Lnte26oQ2hsA9drRAjEwshjd3xRzbHkhtJZi7C2z4cvkKqoPnBeJR4h9w7v",
  "key21": "CN2Q12HNG3QsPMxNvKXYY9NFBvm28XSRE7upCAP3CXjQFWvX7NoSG3pJUERoKm71cKaT69uhv1yCMEwrMZcbnmz",
  "key22": "243tZzp6U2Faiwu3iZYRuoBUKvCt7x1wvHr4DUFKnuvqga5wChmxVDCbxXhu97BWSRDquALiqkdXhHUcwyzuGhLn",
  "key23": "XFuETXDYP6Vbo3TEe6bgxtP2J84MbMxYfKMJ5ExNTgbMGxS4Y494veTA9ATxYBUKAnfPUXWtvWXkBBvDDijrMiA",
  "key24": "3qUUfQBgs1UyznzkepKANbgSqBDEeMnAEqrrsRAJjxpWyck4iZ49PcLJpYM7XMU8Kr27Qm2nfEmquKgKE1enzDAp",
  "key25": "5f3W3N6xtHeWAafX8mBeBKXerwujP5bKCabNGaHeRMS5xHKM8EXXhHARJrVT1mkEaSDQbW3eXxoYgv6PMoqnTiqC",
  "key26": "UmpaT35TaZEpm6fY7BGUZZ8kPWkZAKTTezi4C1evTCh4o8HAbgNabTQtM2BZxUGHVaWcuMmdDAKpQ9EosDS4wXy"
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
