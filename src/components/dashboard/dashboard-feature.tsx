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
    "5hQzjjZVUjWZxNQQxtwNeST8hEwMXzkDNkRxwHgGCN2wQmM7iwhKcwgsRQ5MkNeHY5s6t1XG58v6EVoXm8TCJDbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fpWpjvh3pXrjXab9v18SDdjDutPepWFYxTGspdHebSuHGGpyRkazVq5rmJLmsVD6LPMBv49XFSACL6SFzWV3chU",
  "key1": "46rid8M79BAABRtyEYAKXNCL8DebpZwgxEN2kXvZGwiD2UDYY2VAMgKJP5x7bCkzJsoQwtB7fi1WHhbHX3LT7AaT",
  "key2": "4i6pg3KNq5JDY1WQLh5rbpgfoQBvody4UA7UrxRzXAz79nuTyqo243mo6G8Gm69TTh87JrD8pNenyCoHjWMd2Kfe",
  "key3": "35dG1Y8Rnbn1enFddHYdHNKQRfRVodzT7Y8BVbbAZ6SLyF7A4weDzpw1YXKKpnE7LZAELbmaSvDG3uyqtJGUueNL",
  "key4": "4ExpGXYNRt9BnGGkKvTS5TcvvA2YBuFeqRxLKcpk9R852BzgBGRDcoecLyihXCfTN7uHYiKwpUsFUT2ANp1YR9jg",
  "key5": "2vz1miT6tKoRNJouHcXvyUCqcZ1m6e321DW7nqZsTBYHhvvbkhcDtZmnH1zuGFdyBjTN1xruRyxq8jG9irwPtsNz",
  "key6": "49v8QWzfSC2U82wbpvTk2jWFoa4wAFcePmXpebKMZLcoAmMgqkwK6AmSQw12hRQq4kRVvwzpF3sW7zFdWf3hoRBD",
  "key7": "5fpb4r9ELBJ3bgPrUARQgU75QNyGuos2PbzEMYAsuBhzJNzEuUsT8DWqBJzVsz9wvHSTVfYVAWS4YNB8rHWWCWY1",
  "key8": "2Z72Yc6Pt8KyTiYSEwQPqzXjDiHexVeTCK6ZsBwQcdWYAK5PjAgC9avXg8mDQDXkzu1fDNBNduXvayefn1jbDVsQ",
  "key9": "3nshV25MiiywygDQLHrcWQ7x2qNjqfQxuBigoTdjxSkeC54s3jsq8GNYAufDMUN2GbhsLJmScsY6fNTLmFCSZBf5",
  "key10": "2f564Lt8QezMoeD7qSAehDEc7E5rr5LknF2Jhf8ruJ6gw6gWqhHopk5iUAuq2RG55c6419L3qK2emaVctyNPXffD",
  "key11": "3qRLtKKYf6EJ4W1Urbzw43YtPQcwMdi4faEVCHVDvfoCyV2HdvP3MaW4EpxRoexXRCf3s52hgtjTEaU6HTB7bjij",
  "key12": "226FaxsxLRVzu9dPhUsMYHdLDLDAd2ikaNVpt1aykaUpnUVNcbXyUdgJQ4BTBD53SvdyE8nuwjprF3U93BKiywmE",
  "key13": "5inCijMfSNEFvPEfxjbjfS2HCQ8iXufNTAdwkk2okQEeKMXJkJJEbeo6u5na8d3LRue3CFzZ69q7CnSvNrhqnog2",
  "key14": "3Pmh2yQkDqaod5JtFXwJnm2XjMF9L66eKt9sFAM4LYLK9B2sexJb7spRGdVfTN7CDCV8rAVzH4b71PpLezNkrrGE",
  "key15": "5mBdNoKv1XSCmPbi5HpSHMjT3mxp2B6UgqeabGhSiMiFmpVNGPbcPzABZRx5XYH3MpA7wWsP9fEMVJ2aEVeFPpFj",
  "key16": "2nJUMcecuKXEix64mqEjPfN6fKyiQeCA2TvJeRAc4zJbtXk1n618oYxAVyJobGiT9gnSBsWHsykxFbG8JtDYMxyP",
  "key17": "5rBYSyXwY8KESx2jpVG5hFq799aCW2QVa8W7uiP1pKiVQPPXUtJzUsV2zoD5GY34d5ytfXwsrETq142EsXCqBVLy",
  "key18": "5otZR8rohknRNsL82W9QyirPNSGrwS5AsJJYNQ5ZjZYGeJwD5GAJ9gBu92faC2LwGDyRCspQN36x5J6sXWjzBYPs",
  "key19": "33RMz4aQYdMnz7giN7dUrUSa8ZKGKpTXubzXphaoTha3NEBLVXrscW8oZFZLyzfshT6QtHHv1jzq8G9toBfpUgNY",
  "key20": "4Auq84sTMJE7qqmxhNSEKBbPjERB3mJxZDF2a8KsmCMyBSCEY99HEv4Qww75L4m5REewZVc7qULxVj4kH2B2Nnsd",
  "key21": "5t9FxSEiJALBYjx5qJpjZroncCgLpXbCqYhMnox5g3Xg7S8fnTiGesgmktZcMjk6Mke2m4jCyr7pTHCTLRxEvHsC",
  "key22": "49EJLMLXT2ttNR1Buu1Fa7Y4rukSt6XVXZvciJ1chVfdeeU7oys7TLNgRgRuju5Dxf1T5Rfn4SPtG6rouEgNqzc8",
  "key23": "4svTvnazjRT2qBqbfh6j3dBaHDgmVBf4dq9kepFE1ECrmKyZ9mFJzUJRjFQn9X8asCL1A8joY6mHenAYpMeunsiW",
  "key24": "3keKcQ8v5sJeFYmBY8gcEYZ66V3YG4EYa16KRbjHzCXfcrqpr1NLJXFRKpJAGmfL8z2heRtBYB7HVMxtqaBKcEHQ",
  "key25": "6189pU5Tfxw94bPAUGY2wDotBovqHwiGVFhdHFTLdnka2wed7rf14CFCrZydyF9EwCBSQDeptBtJvzdZhCFKrX3S",
  "key26": "9f8vgkex4Zvb8vJdqRYppQB86t9GgrC1u2CDT9mCXr4Ync2dLL2Jkq7j1um7a4uS19tKUJYpeyqVwheWbB3hU5e",
  "key27": "5i4f8qj5hmcHefDmFJCPvNMUFFKGJ9S5EMH6vcq1tcaAGDsvUULLaWM3Q3KjCVPwHUo35GWeiCjLkjQSSAL5fS32",
  "key28": "43ny4j3nDiTEc6DZiz93znXDGKVQmvc8RstnxKiWyp2BwCeKURru2PxfLzVPDNXZSzeAfqHYo11Wp224rhqxhx7d",
  "key29": "3PAGVsYkicDqtRK1DSgsArJijZsbxSNQYdugdwLfLkh6WQSaA9vuHwCBd6Q13htwK7torad2Gbh9hicfWxFy8mP",
  "key30": "47BXMc9XSZUQ9kBDzvDWvgiSGVudRCa2NQND68bhWYHfTuVyBtkfPQQ8W3uYLdeNrJMttabZUbrEbguepDQH5mQh",
  "key31": "BmBFEU7rU8vDFECv5mpNVGNNNEMCE4YjmzoHCgUCwxtCpc6Y8PYKBZwnwNijPeTAKczZvNe9vcwBrRDcobvWcLM",
  "key32": "42T8LWQSwRHiD2aaYaXNoLgwLCzSxLVNnTzFMdcEg4xEV9AoyrxNhBVck2ebwFugXrFt5uRSvVuvNf1r6VtTxfJF",
  "key33": "4JiJrGg9dnT3vxJHJM7rNrtdyjPkXrGAutYKzAf5HeqPb1v44tdr6s6i9maPawrbFP9cLRKzXR66UsySeVawUyKa",
  "key34": "PPGd43FePshavdddvwaqRwj9fNwV7FjVDLGHwJ5Da9B55cQjigG6YVj13EQv5xBCxpQCkthmo9XAs1f5S6PkoaH"
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
