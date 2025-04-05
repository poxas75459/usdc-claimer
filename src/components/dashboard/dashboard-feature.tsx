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
    "5bnz4UhbFvK5DvFe4aF2HCRUC3PBhyG41n1KD9mchPaLU5y4FXa54nUihbWtqtVQgVwSRHy2EyngiSVFfWqCC5H3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q6uknMqAUqJVpiT2YHotVxkdiYgFF3fwVxMCne6S8XtuPhurSmD2iFqNYrzEiWxjx6fJYb73Sr7BeFaSMqK4QZ5",
  "key1": "4wgopKQMx4PcoGBkqpJZV9MixuvcH1AqBEBXU2bgs7iadsocL5mboa6JHMvUCzpFPQp9brz7YJyW9JWeY1uwaKrF",
  "key2": "2dXM9vSh2paaiwbyzqsSGAiMkpmPaen71gaCTN9tPTn3xq2c4ncqTLrR835hYWEUYPKLFGP1Q7eV46zrNLdg3LjY",
  "key3": "2dNHnYjb4dax5Pc41JQKwdMF6GvTfaRqzxQ4SYkSPuu6mAZphMqCVng8rv4sF2ExJNq2cp8qkAkfKqVUvL8ghfwF",
  "key4": "523mfUg92c2un2SoS1gLcimbuFgzuZ8jBT5kywgsEwh8bL4MWyHjcN5nSMQ2H35oxZvGou4AM8WgATghW3ADbwtP",
  "key5": "YySfbNeFU8kVEAfGiBR6y9M6MvyZzFcRq8JDGps1SZw5HVuXs1aUKNi1zuL9iuKthMG6kBmuneeQMVLkvCDV1t9",
  "key6": "58bFCxFYDa8HZWwfj9YjYuQPZC2KWNRfEh2SVkeFj9mW7t31Ntxqeg9gWQNkCsJhRC63KDtXDBsTLWqhNjEDUEns",
  "key7": "3X8ywcGBGpnLHVZKx9JyEsdiAXzf7GpZmA1WV5Xo6hPR53hab2MvTZJ2n25otqGiHRRKzMt94ZE6LuF4VNEddKQv",
  "key8": "2RV9t1wspTAq6r63xUCMX9FRoUykjEihAt8MbZjsRjtJ8zQNXYYRbLBQ89DXBb4mdQMBjXnzCj29ZWFPrWhxfNJa",
  "key9": "hU3bF8r4CmoFFcVZBVFiDSkDK8xuB58xxyFu7xdLKZzTWhE6dLjr1UCUMwWQbunq2F9QtAucxweTUZeYmj4jzTB",
  "key10": "2bn56gZPCrtJqmuHsbdkEeq8YYUqJq11oy2rtT6zhrcvZAKw8hhUaUarhawhtYwUs9gwHAkJdXReRbvBNM7W8tnb",
  "key11": "3zcgLpvzzpBSjApBvHFVgFnimUrZNYj1sTC4ohN5pKZpuCPCKDKkucivhUg2VS3mQsVcbgJ8GARQ7e2eJkGrF2wL",
  "key12": "5cAT8hS9SgjfEyEnsxujX5m3QdrtpG6tp2WKy7STFeNkois61A1ZNtwaCWarwqtwYAZfx3trwhsqwmfnBbFADm7W",
  "key13": "2ozpkdACXkFBxTZ1Q4prRqMnH2GN8rLZ3Bn5ZZJtnJhiLkCpRakYcTJkyREhnh4B7itH5yUj4CJfM86q9F6REHKq",
  "key14": "4vsgsVgbUehnKuBJ5BksDURTrc5rx913oCzb9oxxmGPGFEeT2wFWmvYLGRYhhNkeGJAt7mUZN4vfqo3pZx43HchF",
  "key15": "4zXp3KFTDxYdYsZM6tAtuttZENnA1vQtx2pUNBe3DEs48v81wZpnVy3vXNqwkGUu3hAEaKDeByi6ZMDv4wPi8Vfu",
  "key16": "2P4JVUyxApJeH2qNDEENP6S6H4rCzY1WQrzzdxQJheLPkdeZjm6UiXDXBo3Ln4rsPZBkreprPgeTHfeiEK9cQrrG",
  "key17": "5zykaJXogyyeqnAjUsZ9UEkaAWgx2tQrrrh5jj8VGiZz3yrsLF7Dsu3vM2nDSZ7ma229b7qL4uRyQ6QQtHJp83c4",
  "key18": "P5bN9D9QWoVvT4BynHm7Dicjrr7mKvq5Jy4ybDXhGdTqrN3UgxCRYBBqgmh6VYLsMcyf2KeYwUbxFUud2qJK1Ba",
  "key19": "2v91KfRdR2s5FBMNPiVRnGpFkETVFg2daHR9uAzELAKiLeKJExbkogiVUniBqSdA6ovzpzMHYHh7XuKsZGFK4i1u",
  "key20": "3BpQsUToV2jfkPPMJFvhC2uRSANEt8JeRZ9uKdXXLnXXEmpzBHvvBj5XFJSntxMZaB2cbyxk2p5P7Beyy3uX4k5Q",
  "key21": "5cmZQYWrB2pQeR5NEENtoH29uVEYDGPRFVyC2B7u2rUjFFJjgVfCQPycLXUP9FkuWZ2zppMBZuCdqAmkcmiGGhCc",
  "key22": "3NYG5RppkJRnji8myo2okE5Qwn4AxUbxnfsW1JnH8MEiUaGGBnGNWdBZwhZHdoiYu5bgACdMMktLjuCfo3p52xGR",
  "key23": "AMnkwMVdWb4SEraCQWNmKDxvH7cNbw1iq24N13gHLJQg1bBZj3qLbSC7rfaf4QLLtX15j4DFaAk7sw8kBR6YMYG",
  "key24": "2nMQFhGhGXbM9trjgXNAYeiAB6MoRiZCBYc41GYHEqBp8CvJo9SbBgaxMRPt9XNwE99PHbSQRq6ViwarcegYtaQ",
  "key25": "nDzFZmE4fjBFeNXrNh4pvqQV3Rruuvpq1ckefwLcZjcjUBT7Bqk87aPZ2ZyvCFMZ7TxS4mU9oDUtqDZTK3rAJWB",
  "key26": "4q5eKfMKMtCYmDP2gWpEoP1BdL5frmYTTUk2p23jS37JDk692EmY5QsxRwHWXYFfLWXefJ8FiHKzCx7EQMj6PR7C",
  "key27": "XaaSUdDPPtUmLTqUFKmy3f6kGwjKydfa3pSgYvrSb2bkMR9JbttuUi33yJDg2ZrZq4FL6fbfXftuWpXDfyvtFQv",
  "key28": "4ZTWP8Kw3PUjK4gh19HQNeQeE6aAWVQxJnEaPuLn7vVncKvKSB2Q61WrgQWMHxoG3qFeFXjyv8c9THeqZFbG7Qhu",
  "key29": "5Cckax2CZnibhUt4Ti9nUwE9eqzNSC4kypmjgm1Mnbgob4aVM14vzBsJATjtmPGzsiJBfoQS3Mj574UiNphmWNbT",
  "key30": "4Cd4PBPStCkMd9HAm3vNhQDXKzAjmAnCMgDU9QmrjS2qjosh6v23GzNBW7wxg4GciJhH3Y4i59aNewWD1SFZVRbo",
  "key31": "4ChNukoinR8JXF1kfBoNoRoPmS6FL3VEQ7eXLZhdz5V4HBUGpdvYY3geLPvBq1qJgxArY1Z7iekP8KPUNdbJVZim",
  "key32": "NJdW4mpySDs8cR8SqRyFJewcLKceVwYD71J9wtJFhFnas8mymgimCzr8CWMW82TfzkLkt9ztgXtoFDmDhV7MbFy",
  "key33": "F3aBZi6BC7GQmTa6j8rTryN6PWuKkF67yZoNYggqXCUWPTxw9pgzw66LFa1CU93Gyw8ZzxnKuqzW55Xi3TVtxpp",
  "key34": "43toxEo5hpVNQZtDByv2bmtBmmnExvzEJAqCrM5TkSCfWRqYGaWkYsWxRpRX8UDnJdLQXQAVrCeHonZvqkEnprJx",
  "key35": "2PcM8oC4y6gaMcwTKG8QtwzfJ6Tg4hCDvrF2u1i35gWEXyoYdq8oJ8x1yFh8HahD6LgywpevRit1QZddKNUtHr1h",
  "key36": "2Q1KjEVzA3MJxeme1WbYH8H6Hbis8PhggmzTty8eCfTBgTe4KeXGtABsF2APk5W4cmQaCMmxCVfSsiRmRdY8yXtZ",
  "key37": "4qLypd8KmiUmi6TYRnzQ1KdAuwU58rD3ypPcfoRiG5T6HpPTc2vqcYLPZegQ9mMjJd3HjDi1jSXrZBpGw6qchZZo",
  "key38": "5CEVwpbv6KSj1pCZKFdcK95cra2quyt4CZtY7Wc7MgNWryfUGka8sQDqPuU4sNS1D4ucK1YGERRAjGU2ypDPETAG",
  "key39": "5ZtDFsHZx84fRUstxMqaaRYx5XiWby3bVMdcLtYcypVFC2M9nW2nse53cAJhcYhPx2zkhQnhUNQ22sBiSP1mUvME",
  "key40": "2csqStxuUsU41EBLJ8gmZ3h8yuSCFeRz9SSkKc1j2MsXgnk4XwMVeKviWJ14wjM2yq3ytHVgXy21rUUdexDjsnFv",
  "key41": "4oDWCe67YsNV6DXEcDZXf2KxvJayg3vEGBJNQNc3PRoxufkQYKBM3kcw1BTg95N3htDHCRmEZX63LHKbgknssuTL",
  "key42": "2bUP1p9NB5EbPbT4UrAtH1ZjwYsQC8PsZJasuetTd5xsQfPUPpDLjLpfvyJS8XNT2zy6GEcbHQE8mxsdf9Nb33rf",
  "key43": "3yuMbTKLdiVW8NfoFCHuDsNwPdf7cot9qc4Hk7YoAGMM9KhFNeZorWdYJYXDJ1bQfvFN6W1QDd7DKuRFUfquru2P",
  "key44": "K2Q8PRxTC8FpPyvjz1BdEdSgcZc7QhZ1KVhLpUmcEPpctGaPAxdHuQu1FfawD4jFzSYmP57CR5UEp2wrBZAPzJz",
  "key45": "4QNBrAgGFQYZZquBQd9KAnd3NcHeZEGjYMSMMsMcdiHztQ9Hkatu7WSiXcYGzpVJnRHasm6ShSt6CrMvne7ZavZ3"
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
