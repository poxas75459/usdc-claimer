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
    "enSDiBUcAVQQvPeRwkUtTge3Q92Ag1rNgoMEWo8X3EGvJ4PD35sNfUtPRDQMarHAoMp4TMneBq8f3dj5bj7s7RJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vj9q6edBHqB8Swf1ErVfxCyfAcdikiDJFz99GHYtaQR92YfQB4iXU6fv6ovStrmJz4saQsMfEngUGqGgtSfT8QS",
  "key1": "2Dtcrn81xKkknFSXNeoUTpxZua5KG2mmoHZTKuAgmpczNupkdfJ3p7gz5Swug1PusxcgN3hs3NjM1RVNJ5d12D7g",
  "key2": "5GfFDV3WdcbLmmip5fAN4NwT4bJNjssNgVUi7jiQ665LqoBfYzPXV1NJY8Gt1KtUXQBiaaXt2ay565BBfz7rYruH",
  "key3": "UZ5eVquybrr8bQRz6vzQ5w1d9pGEKW99a9oszSQCrbWJVZ8cLp7zJRA9FQmFRNMyhZKfEozJBZwN3DoivNeP45y",
  "key4": "5zWPv5wpGUv7MkNpH4X4b4LAhavnLnMmVTGh1GzWixyWcycT1FdFqpk7uw59zQu1LzmXPCEzW6hNezn7r4mbtCSE",
  "key5": "34ca7nwWsai5K3M1aqcy4ng95mA3CeoU2SvAq2jE55BFK3B7PPrFD7Vtyz1Pkk5CA5FLBW4i6JaVqSXoRxdU5kGE",
  "key6": "59PKgF3Sn9SXBiY7Hy81KGHdmbCuFw97rYEPRimZ1TPzVUo8k4Qnsr8kuEjJkhyiPyLGZAfJ8wDauNQbURqXQFmA",
  "key7": "2h8sG2Qs4JF7BQAPnYZiGA4bNiCgSSugCQEhDXfWHVDXNBDayrkB8RnrrpocrtVU7UicVGK6BCuhfZYrZXQApwha",
  "key8": "5mxNd6qnx2PnP4NaqYAhD1z8ut3FxhrAVGUYWZ3EDUW4VpnYPq32DkTpaHDLPd8yG1JX4CLnJW9HGxziCwmB1Yh3",
  "key9": "3MsdsGXtR7sou5z3oRzeDH77VU5B13Cn4T5vQgLJrFRnfscZWSMrfrMHdEb9YDqPRDRYgBCNgT1rBshc2KYnLcvh",
  "key10": "4ck6nvY5ZfwBwBYw89sDyJ6g52vwqnsoaLCKhzNiCPM2YfqFbbpsbtAgaTNkP4gLdfAWHT6cZSnqsc255E23eQs8",
  "key11": "37SZj5RYkLmzAc7gKg7FETuYdtDZ4XTKDf5d7uv4GugufeiTd8my8WFjKSFJV7Lnhzw2K7ApQHPxv3N8e2t1aarh",
  "key12": "28HXJsGayUSnZdb2qcJP9tsA45WUaBDzw4fz7KwZ5Zz2PprkNJUhJJ9MnJBLJAD2GHZTdLnztxXzoLbaBTTNnHZY",
  "key13": "kxygLgwyrhT5mk6hjypacYXTd3jaW6Q3VVtYJM7JbA64wzeg6TAydCtk2mCFnfoanv9N6DVmrde11EzZ8MCJjs4",
  "key14": "4L81mPeBnVtiZxnybnn1UBzfFn1pfu7wvGGNWdJxm8mLDJXNMF6WKAJ4vKKaREjJT9QzQr8FhAN1N1AfCzvDugj5",
  "key15": "2ovrMsUBHdsnKdbr5LViTxJbvxFa19ArJHv94ujePvUy2qW6KSjHCawCZ8SBqiJkMegtg1pvi8Hok84fF4Kr1MN9",
  "key16": "gzPRKRwUCHjWrzqUptba7ejJiwqNDB1WVseoav1iaQSNeY3YuwEnhvjaumF77tMZLXCLj82Tj5HjgJGLk8Rb5yC",
  "key17": "3JTc7xRkBtx7AgUtUmi5WgmRxGGGqsBE6mFUHiZEm1BugVo4CcUZN5nL1cZowpxHaiUSGku5zfB5BUX9nkpXEuDb",
  "key18": "3ivaxEsd4PYQuyQaxZjTF7MNEqi2HzEGgoQxeqNyuTvKjn3tvQ6NivsJTJKi4cdfsisETTdHLJMnBPLVGYsTz5wJ",
  "key19": "3ofXQX6iAERSS2pxs24vmUwRNy3WDt8VWrV5Adr6BuEpGBJsew6ZWUx9UEXQ3Z2rsFoKyi66cGcwiKf8WL4aLdSc",
  "key20": "5tpKuB11iCiqof9GH775Zn5D4TVbBBGZEokQ7uL3WnmcHQpSxtWJJVHZWqU6nwmuwHBgB5AMnkf2gdhWnMfasrsT",
  "key21": "4TjVeYNSkUd1UFvMi3x7XhxTCM1FcLPgniceLLx7cffXWRnTE2gGJ8Lwrf3Mz1qRnrheLjxB3qFnkkyZGtngB7Xa",
  "key22": "5ccjXigZkA5bffmC99uqcVMoS3k3egJXkuvSbWLEnB4BodvtZZpDzU4pzzSNxQ5P3qh16yY4RShDoNWNiXFh5uyo",
  "key23": "5HNdNjd4xXCed1MBrCyFgZzcc7VRdeQqNDuBrTiWRFJsbRztUpabXysEC8yNnidqqEimDF4F84VMMaocrDoEYaX3",
  "key24": "3SKZGsknc7QQ3xjQCas3SUWoa9ByZcUuyRqF68jGbj8JReC7D4jPh9n6EH1MzaCVBTtQLFkMq6SutrXXYdCmgjDx",
  "key25": "v2qi4EejbXpUE7jjGugpp4uENXcH21s8RZ8RNb1K1x7St2BY1SU5BMuQa7hG2TE1h3RE3ghNwBhUg7Jq1TwzDuj"
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
