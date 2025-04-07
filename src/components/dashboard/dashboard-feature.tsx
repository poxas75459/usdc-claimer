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
    "gRYdjsXUecRhvnwr2Eh2BVWdP5fYfe7Wr7TiZuof8rdQ2hwNharkJoYN1UwTNfa7gGLuzNebbYJW8bJcU9Q4Z1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Sv7VC6WcLLdic48UKnWT95beq1krQxvXejH5pDGCZYB6qnowpGJfhDvLNhE1QXPbsqRuA6duHjFajN1jwPWbub",
  "key1": "yX4yWKJ26x8598Exkt6nX9wsGwnQgjcLnw28BaWhUjmzs97AgypEakN5gPDbcBaPaaRyjwh6z6iQREMkDefGeMX",
  "key2": "265QSrzPcnX8FT6viTbDLXS8JGR8TNyrVAs9vbKYpikwZQ46znjPCRsDzxByw3SEiJKELpBA571vwoqCdTaszbYA",
  "key3": "CBnEUnLpL8Y7P322vGQUzJKrym4g9UYws8vLfm29dsSCa2PZHEa969zy71jC2Qjryb5GV1mQ35f1BsodTw1V3aC",
  "key4": "VXBvHNL3VicVGDp9oRLMM1QeHxJmU7SJz1CspW6mNsqDbLKppQmgB4V8GE6KuKVVcHeyU97KbMujKiVn3La9YLi",
  "key5": "4sK5iz8Hc3FuEPKiXA6JKV7RBD4kokGB9CtGBbkDNXPcKN18p44BfDorPB8Pej8RgYdrmJXztCWC7UvwEugySate",
  "key6": "pYqYd67BJWGFrci3vQhzNdyVjLbgFHL2Up7mJ2mwoSgAT3vuRBiYtHBVpgo9iSTk4igagpoMAj6Lub88VQ7sw9j",
  "key7": "3iP1GP7cGg2Wj6DxKkfXn9Ek2VUNjD57yr6F9JXxThToTmAiK4fixeTd97ZunV4oQy49Mmx3u5kkBf9PeCyadaVj",
  "key8": "ZHj9avPLhmszV6ADwWFwP1QxTFTguhpnhDK2H1ZSb1e3Xsm5h1gzX5SSUa4EXKUfLmfzRXZcPrPRCAj5Uyj57JY",
  "key9": "bgCrVxDe4RTCkSuPUaaLgKZ9bPvPwS3pn1utJowK5w35kiqbqpr7aWHK2wettkcNksvWrtfBzHTKYvVsU8mMZ77",
  "key10": "37dSZvPLBMhTz9nXgP9UAUUH64kDNmc9d75yju1McNrdgAVDhCXqf8vTotuLiXmzBbAWdbNZ7LJXz7iFvBvH9DK1",
  "key11": "3EdpUFh1tGjovZSH3o2tvEAydjsaCDSXEg3KKE47ETiSSPRy9zzoLnpabhW2AdCHjb5riLiYpJMMi4dExpVfRzs5",
  "key12": "32REbM7H8kDubKpfVrctW1BfdvzjCDFD9soanXzjvmPJGxo5LuXgvXwVh913gJ9qy4P86bJZig2M2p6TrY2iuJkb",
  "key13": "buTiqjhFcgaFerhrcN6QGLfu3TTkcoshWycDNakFKRJ6XA2UeDt2pUZYZX1as893c2juv7p6LhzUnr3twoUJA6g",
  "key14": "4TumhPha4rWVPkpnsC55AyQnxKgVAJFgevYNMkVSpi7YBtW2wmuiuKE3CMynjtUXX8KPc8bwzD3xw13UxYXHYcvb",
  "key15": "3d3fQY6Dg1kyskHTwchwW4XvuFf8KAp9A4zt3xTypiVJ59yf82QGBeyswfpMjR69BCnzP3paHqVUVpEpvnr1CBn1",
  "key16": "iMw7LFmtXXyWC94dsBTzkwhMNep82GJa5NvuuzYnfitQsxFoMtFcRy9ZJ8BrfBKRcmnKVxTo3vPy9t6gHZ8bfhF",
  "key17": "5pHfEMpTb3f3ezyxAkU9UMcfvgKQ1McdaSyuj2Bz2UX3G14c31FK8v9XSywVUSr4v5TMvPGa5Dxmn92epwysbur7",
  "key18": "ktGtpGVZEfJWiiuW56ot3So5Tzj5ctrcg527UvMR5eqTRwQ4PHXbgo2xDCsGDdC1MTvY8ebeFGqKY2pqnDXaQEr",
  "key19": "5QDDXxeCUnvft2Mu1R2VzPcDSbuZm6v2dUAzrhXEZkPkSusMsa3mh81KGGJLQmxJgTUm9uAhnX4tmmzJY82Penxm",
  "key20": "4EHjnUhiBhGtyws5MiFnLkHah1uAuWneTCYmQwvpxjCMo4H24Ry36cSYxiAc9fT5mLYjej8QcWJ7WjiWpKckR95v",
  "key21": "2PSikpXG6k8yGawoQFwfsJXbsfNFmvuem5v6k8LCMmriVr2FRLXP92baXWsefdss8sXBHyYTn2BfMkLtySm1Z7z6",
  "key22": "5oBCBXYFPC4iKxMm6SUNummuwnErCqYpZ9qx6QiZ6hQyLLqVfL6buhFeyCpbh5dwsYCp7F2XHjsz8b7q48vRsbKT",
  "key23": "2C9ttqYM2BKoM4ecSpNSEGywuxuRbKHc1bRaLYoKaZB9zAfS7pkvNNgiJeFHGhhyjDfXcHd4MK9me3eCRc1m6Mgn",
  "key24": "4GgGSK35FgyPP98b8PgCNhiv1Rig3BPgSFUnYm2vne2YXdkXPt2cw4wemE41AFEfohGr7A1BpVzwpU1BZFJdH6dq",
  "key25": "4Hrqkn7hghbDqzL45dXZiMHsR4cpnu8DBq3bf9fRuRLavETdEShbf71AxgqH6GdDEQMePCmFFrnwJu5BmUw1uE98",
  "key26": "4s5yFi674pM8ca3PNDGojSeC2DhJXJ7QApUHvvZz3SbeMiiYuSrier85h5SqZf4zgPSd6CsLpeS7JRKP6LicFJpf",
  "key27": "24S1TyVm4fBHPkWTTZQn5MmkaDsjYGMP8Se8RKUFgsK1aFPBp2n6Gjk4uYMpgnDRvND4T2k7uGxjmn89ah5Qf679",
  "key28": "2cw1szANFH3d6NRJzeMfe7fX4dgSPs4Em1oxb22ne1or1hcYdUCzJPTq6KuCZcPe8PB8P2LDsYtSTwPUtEKnyDkk",
  "key29": "2i8kmG8SMYDjYBMBq2p2inQc3FDSDEgrBY9obak7hevJBPGrrcg2xHyWYBw4NmxYg5n7MY1DH58KzDfkTDneng43"
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
