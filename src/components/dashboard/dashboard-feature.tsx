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
    "5Q9ZFaNtdFeTHURpmfAqrQL8dbJizkpmg5K5QwiJhN1iLAsyA9iEjeJESShSTD6WpZRkd3ixKYMoviDVpR2sHgQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vRaf2vwQHQbguJQMzCkQpDoBP4LydzajFUYmhVdRizwL7F3iyawegjt4Yk1vwuDHzrZfvFzJkPwQjxtfwaftPjU",
  "key1": "3ZsZQYkpKTX5MywNoMBbBR4fn3DTErsE5rimyuojuVbu1p6DQFLbpCqygYrFi6SxZ8iRmpfqCSrpkzPTZmZ82jFh",
  "key2": "4nE3SsAJRT7E5vNNStJcY8agPb9rPfqmHDrmXJh3obH5PES1zmXaF5pgeDFpTPpb2jmbD8Cuu9xzhAAw2Sxdeb8k",
  "key3": "2FNC8U1coA8EfEwacZ6gkfZN76HkFpEmVWzPTUntgPzhYiCdXKL3xh37z31412riGh3XbrEtdNepz5mm5o3xgTaC",
  "key4": "8sW156G9UbQP4BWsf8Vf8BFv8CorDBtZjjG5BxbF5R9iYByYDDHu5zeSywG1bGtxgYLr3KuHX5icybC4sr6TZoN",
  "key5": "dsR8RmS65JUw7RtarG7hFLq6tXcehNdCk22gjYVKMBQwt28ya52TUtAi74KaXZy5oerLUBrKTEmLkYjALGcfFae",
  "key6": "2MWp3o4JLewTXdfCPhBVFR22BT7H3Bd4CtwhUcfKWBRUL9rhzjb1B7VURHgq5kz9LXVhQWMSS7QWbyw2age1R5LG",
  "key7": "5QjrjQMjhxZNqdU71Rsgy6JzhCTET36r1xut8oTjLg55vbv6AgX3b3C3mBPfHzv2W5YN4UoRZFrdJmaSJxp9dQUt",
  "key8": "y5iGWXat1oSiSQmTPkhZMhkx7r5HkSSw4SygZjEMuJfcZgWSwXZswJRLExy7g1M9JECWcnTXbkmhP5Ao19Cd37X",
  "key9": "5dAoQezShfnFZoZQq8rPKnLnobR3o9ZXXx9eDHtSvsKhQodd9oXjpJ7L8NZVhP6GRao92Uvpp9XD7gs5C74YETxT",
  "key10": "5a7zCGjDp6MS4x3gr2yerLj28UNFzUATSffWmGSwtmjHaxGVkUcKJ37KYdvpnpms3gS5cbg4ubQmrbroUjGU7w9A",
  "key11": "4ft1DzKC3thm3FhAPvfku5nf7rgNCtfEvLwoEemjeneMfgayVJ7zz9gLvCuu9HfaNUHuvq7LQLruSn4LNTjtuT9z",
  "key12": "48S9CF8U236caC8zomHaMfSDKGpZwTbsFSdGP4YNdJvt9c8AH67JZiK5RzmpPCCpar1vopP4SYvKkmmExiZpaJgp",
  "key13": "43TtTehb7Notw1nxkGSavVUiyHYLPeYpCZ81dPt8dK3gBSRW4cPTd3YFZBtifR8qWq5eRZofPZrX9Ci4LdaVDCdU",
  "key14": "29rGfdaqNDyFhnqjB63ZwUPygJWdbav9Ei3tAUsSAC3mSNwwsoCvceFZCAqjrn2YmQxfcS5nkQWrWLg6MQeDUcXQ",
  "key15": "qjoFUMGFbfk2nB2DD6QJb7jvbWnHNqZH14XenWZEwabmpLJCD53QqEjT4V2Fie2kadiShsdUxtFK7XctE2fyfZV",
  "key16": "fqTgCEsakkA7BmTeDUargEuK9xZM128PDLx1actZ1X9CPu2YLW1U11dtDfYb4vo9TivzmLFNJBfTGynjs2CZgKr",
  "key17": "37SoD43r6BzjCf5nSMtnYyqHS9cyKfuYjPQtJfoo1Poz1Rbe2f9ikwmfbVymZE1wpH6no7nyMGi1ZtxQG6E755TY",
  "key18": "3oGkjJPUFYewLeErxJpF8igfikeHednSsfG5f8MFJsztrL5z4brjzjiv1Sya1gxuWNYX5thkbqJnezsWkUYFXNnC",
  "key19": "4pNRvCc1uKf42pNsR7ygBGTNZJJQmE1AxTNfdS5LcabpdkRXw1rzm63BFPejkEkJ8bMPf1uhpvENyRLuWhNBVeSM",
  "key20": "2YxLqpi4cpLZjMyhaVSXuGx7WYLBcU1ddMeUxEiVG7bUAZaiw42m3pAC2Tm2H2Wiq9TYgvSWA6c3J15nxSCHh7X7",
  "key21": "5A1WyF3CemuNdqsUhm8w3DBtTr8EEw16qJauHidJAZQ34889ebQwRmpG6npMscY2ccdRV8iir1Ew5zmaG5LdaoPw",
  "key22": "5vEa6xnMzfYquPrzV8fKYKFXhpBchZpJarLj4RaHSrRBC3PbvSYt9MnFKsCSEX2qzAcmUvVYz4EzY8tmwvCzzaPn",
  "key23": "31Bb4FP9VYETnVAsbAQ6bLCg1SGHS2LrSvKEk9YSqb5D76kuoMrbZCLGj55rZg9ch2mmxfndvGmJqiJHvkWGuTTX",
  "key24": "N797EkXKBTVSVVgQjRahihLuUKSLhgRYen6qLwx4tJT9cUbeUD3AJ9JwntYFpsutqs3PdmdfRD7dbkJEicvfXKC",
  "key25": "4XdE4vUFBAvUuysMJLREgQPfk8PeMGPfEKubbQ5vQ6to4ZYTDGPw7MY7237XtunwsExqnwjMTsBCo5VPfSk8ARUa",
  "key26": "2ZsgPCwGPaDFPFmHQB97MoHrXsQgYJ7ndsaxSpLNTwWXSAGsVYPj7XFMd97MkwdYVvrgV1v8KkTc82FeqdzH7RDE",
  "key27": "4ozRHqC7Vy8N6X4vjfQcjvMFsSqEmZgZ3hpjduQzqJivM3czARB1ySUPZiPZHfsyJirQFAUFCgf1EosfRKasHAWt",
  "key28": "5itTeZLQEgzwhQG4t9rcRD9PYHBFv9qjhjibpFTCfpoRSp56GUzzpY95iYZuf3gueEbXyth6u7RVzbAg66tkFRhT",
  "key29": "4XHZm9nk5o3VmBAUpdZhk7s8cytyMhHZhmkdiJUFCy6kCe7GudF5NShXAeKdu1XfxRjxSC7AHYBjew2Pi3itty4L",
  "key30": "3rhyjLC3NErBzngj1fHr6hQpwPDU5uj5c4MrLwjKAJdVbCtutPaAS7ipiCzSy9SxokL8aBBVyjoorohJ8yTbM4DE",
  "key31": "4dw9iMGSnUhgQJT2wtFrUkBjswun5EigqcTrV1Y2232XT9egAGQgUkvrVWCUJsFei53zUYqTZ59Vobm7F1zbTsfn",
  "key32": "5SUNh1v1YdPpHNTa2L9S7T3AQmb44z1fg8kgJwScWgXjD2tksaMRwnnwEKhMVH2C8eELfhqh7SUC1gJh55GCFmJN",
  "key33": "2oWpcDr2LPZFWSFu6MFNVfME886yw7KL7mAZG9ZjkjeyM77k8hEJndqveUVJcEGdQQDcTFcryrj5wLThq7mSXeNu",
  "key34": "4VSkYjttTQYKR4WbQ5izdLsWkViVbEMTAKc5PhoHERPyrt8x2tzmwtV5C3D47hu62BQw52QRwnB2EtGHyjboLNXf",
  "key35": "5E48yHm9HHoe12aHDSshVr5qHmpQpNk75sYPx8vH9h5LM2piVcW2WKJCZ2p7uRb44PGR4USorGJcrDa9VgRw2ZFH"
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
