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
    "5wcXQiH1vrBfkPS2yLLkB3hZSLnMPMnP5PG8ayMWX5k7AZwVhxA4Y9u5qqgyDCdB3j9GEbRuCSx5SZy6h6ZWbvYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VCc9mna5Dx6RcQy9DwqqrPPjd6oDCsJp7Cf2dqR61HnKZNZ8m3KH4TPVsENkZXFdPtQg8YJynibFoNuVBQJw6eD",
  "key1": "2hZzTaHcGPs7F3J9LvDFucPzWsc35veEZATTwkKbweYZnMgqEBKJRzNsnUSFW2Zmo9dSRxBmB4Dab4W2PP99o3Vb",
  "key2": "2bLNWMwzqLHyyiAv94PWP54Ey5x8CJ27avYMVFgAgEnvjUhAUsfecBNcWw9DrMnZ1ij4Z8E5MJSnkkS51TTGLv5P",
  "key3": "4smyt2L2qCvLK8opr8WxpM2Shbp7CvKN31vomBi3UU5FGRM4Q5HcY6jyZAEZ4oSBxTWDWQrQR6ZH9eaRMJ8ZrsAg",
  "key4": "638VuZUkotdDjadpd1DEHtACAjR515ucPFjztKAdvq1Fdz1qSyepUpYgRYY8Nr1LzxJBc5hhRN9zQ9uz3nuM6Uy6",
  "key5": "3P2tjqZn6cDp3GkMNXsbL95Au529tXS7AKN3S8AoY7jJf2XNUSZphQMF9GbsSoJETeuNropkhkGFYmJbYW9xqpMT",
  "key6": "22Ac9Eds1vLtBNuhKRUCg9NDChD5YLYRbymVpJzzZo6yKAhurEvZhormhgkYCK2bxMT9bdXHy2Ckrriekp82TPeP",
  "key7": "5WzdtNgr5ZCUSsrXHFMT8BbQs2b6Va9wf1ypEhPstQYy91uJq6KVZkz31BuuS9khFT1BM7T1yZGGuATGr597sniS",
  "key8": "44NVF2rfgLvZc2kLJvPvkgwgJ4Lia9pjLzSfB5WpBVpJd2CBafZu2d5FjU3NniPjpQrhvEnevaqwrhJexd1hVtvg",
  "key9": "4YyPpduPPqNa59UiuZcFu3A2m3EdzS5pbrjFbgLjdzWejv3wR15qNYfeZdVXuyFouSRPhBCTyDga72YVRKMquB8u",
  "key10": "4QVHHobZdhwk6sLXy8u2zufDdJ4vY91xwyXhq6xWkWNe6MKS68FF6pyWQX2rGGkrZA1JLjWPRDENbfvpUVgqhkTh",
  "key11": "3X438o1YJWNg2ujr7iLsUoJUHCgkZaTYrTHvtmqJ4aNEieNSiE8BPLr3qFiBgcvuZHG89HLPg1TFKyV1D4mMUyDn",
  "key12": "uvmqwf3ZDTG9wgwEABxCH3yLp333G8pkkswb5dBxi1uTctKCtTCo3aNtDJpAWXbAAxRKLcjs785cMwmtLEowt6j",
  "key13": "HmMLE38FbqJeJPVuTBdwLWWfy4q4GAKKc9i5BK4Mv3kmgreM1skTFadq2K7abwHbnWgCZunHHhdkkq61URAnv6z",
  "key14": "JTRu4G2Ck2cij9Wf4AAzGMYVLgCQDqM3srfHuiusr5xF2eXogSnp9y9pBc9fpGU3cpV4ocYedTq5kvBuiAh5aYs",
  "key15": "3CgA4FQtNaWFDm58ECG8cLyCPfKDTB1uk1QvT4c59BEjdVz2p7nMyS6556EfQUyC6a3NbBNeGTpT7AVA4Sz5Y3QJ",
  "key16": "VALAFwwet2Rv9y5ktd8xkyAJbwKfSxx67pWYBFEosN7vYtGyoSZPdnHYsF8h1fKLwUtfNCrgXzBLU5T77B8xEMj",
  "key17": "5MfCBw42GoYYtURXHR7j1gyd1AhQHfvcFxxCWkgBREYmMJdBSD4pM3Y3zpy44V9CTvTjE5Nx5aD33HTRzEosgJon",
  "key18": "5ucNBiA2uzYvmhPu8fbo8CZnwsyuJsTQNDRKavhSak65SCdgzruFSd5hcUufTtnMWACGhs6YDC3GzA8kHn5MgZr",
  "key19": "5CY1ZsJ2hAUgigcyzDAJUd2PUQMEzpzLwfEWnmV2RPQLqaHj3ripJiR4RrifFsHsms71UGXVjhP4gCgDb9vNBKWt",
  "key20": "32DT585VtnV95tttmxgWsDtX3nSRTrQtcwecWzEb76mDWBFFH8FFLyqeAebr9KzztV1D6rPVYZZat77Wt336R3dd",
  "key21": "5ga7Y6cCeVwCUgSZ3CbiJ4uM2FdLNXwmm2pN6F3M6D4g4go7F7vDmQzidBfrbrhTjf4UpvyeansyQW1Jd2r96rUe",
  "key22": "2F16sBBDFHDesEqGAwLYuXHREdiCaAmHM6H29AizQ5rx1DELcSk2tPqczRPTyEx7t8QZZoP1FHzrazQ2gn8L8Y4j",
  "key23": "jxW4q83SyaciUNa3mN6bTrYAdHLZpfvB22tUF4rgaTKwwzGW8AEA8GVcia7jQunkNP69KDk1dHpe9C77p5EdNKU",
  "key24": "24gPY6gNHdNYRnxRvMstqW5jLBfYyKAt63RWgGYGDJ6pDGAM7DLUdQckW7EpXKYedH9zmsyqjggvFLsi5ZcdJAUG",
  "key25": "3PZ2fnCH7ESoWP3WtQf3DPd2MwfBjskfdqs6HBDREgpx1BeFCSQ3ayFBfPbxKar67zpF4sL2Dq4stowG2MQgUS4T",
  "key26": "3SnQa9xHDHqgyytMMkTppes3hJHBZgzwD2wX6V4WJXsuuwYpkY68RuyKNQvsKGKtuG23ovn6gBpWUrtBXgrY3VM4",
  "key27": "4jrntbDB2ihWpoGrYzNXe2YnCaQM31bMZ6TMM9tYHfKuHXypNmGJJjv8JMNG8k12ooSKT1tMnqQZ9vEaig5ouLFq"
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
