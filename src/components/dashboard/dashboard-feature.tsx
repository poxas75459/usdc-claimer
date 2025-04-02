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
    "5hPBqQJkqVyYbhdCJRz4P2WFoyo8vtHmNZJt38tUn3xAjtcKtYUChqvwRR5Gg9GAUpo2hgQnLaLZwxjShm78tWSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ehGeq2eLP64ymKLwVEXxVYXAA6q6BpUCKFzQDMyfeRZnEvomnHWc6tUSx9p4GMVvdwVhHksMKgMhtgtNJcGwRo",
  "key1": "3u14B2omd3DUwu2Zy1DiRFQFonu117mC5aA4gH4d9cNnsn46w5DQEsHXbT8vfWbJXQxamBCqgej9VtfeXSskEJc2",
  "key2": "5xBqZrkzq6xgWfAYRkjsc6Hj1v8YkfAAz763RG6o83JCAiPgxDoy34kH32ZnhcfzUzNmNmXkXYUmKfwZw1BdkKkc",
  "key3": "5pbQRCtfdp5VJMwDXKZXrtCGeNoL7HtcnxYuMH6K7wvraCHtMcjryPZamKfMcEtYt8UM44yY5NpWLD6o7Vdr9JT5",
  "key4": "8LbkCHVTZTjrCg5kEpvtNggct5xvsv28gXaUiKpm7YBUC4ATT8MVtxCE6xSH8GjLvFWsV3rRunY1o5NzfcznZUh",
  "key5": "3VGmnLdX5EpW1SNajctibZ6BmCsp996Y7DKb7T6pEH3ShruK792eqRtb2sMfFbcA8GMzu4Sr5KQGydnmRoraRUnY",
  "key6": "65StZo4if1gX29XfimFfeCYoac2kQj4Rw1fHbdVWbxhYfSvwDH8VY4u6NiLHSajwkE2Xe1vKyPWGp1Q5h8kEi6rs",
  "key7": "5h7z23QukQHt4URymp1d3fRcyN9ynTNTq4YsVN7Zy2HKPSYoUaEj3Tbei3YupbM6cFaLj3KMBAq8Yg3F7b8whvDY",
  "key8": "4UiLwKwzP1jcLqLFTxhAZDfFwztKP8J4eE9TVqsfeaqyKuVzUJU7xwJPzp4i6sDLuAGcsWeW1ckLgyobfF9ATU7g",
  "key9": "2q2bZcAVZtuZnptcWzAGMuMzDEqTHBn7A9X35PQKGqx6ndMji42utC3BW2TsTBnxau9dJfMsfhwHsUf3h99zGFfV",
  "key10": "4dkYpJYxVSH7u7qRqjtV9pgR1wbjBsM8vtZpS1cmMLHS4CSGvMkZYbmsYsuitmj22Eoeb4qoaUVUbUDWFHSakHuA",
  "key11": "3nwk6eoXyujnkAyTD4J8RWb7YvmuNQ9VHLjZpyTDzmM1SUXMa4gc3ERoVgycpGK6dA4hiSobv26EFaHH2DffrCwZ",
  "key12": "21ogBMjWmEfuDkS5dFDZKLgfnaURmskEDxEKU6S2cos4W3s7FBpRTmG3hr4wkBgYjtxsewaAwMxf6BGTvz4JxmXx",
  "key13": "R1pcPhtKzscaFsEay4zntKHSWB7PiKr8Lb9MT5CsoMAjbbw3tKCvynu9RvBcptB1ML9CZhWyengNPrTdR4dmoVa",
  "key14": "4ESyqZK6t7yQEwWY13zPhrdpeEeAqndXhFb7pCFAJRWbkt66KZWR6rZuXAE7kSUP97C57JS4ZNwj4ZnKGc5HUaPE",
  "key15": "5eaUtYyyMkpBRogzGto7Ag39rX3p4CXjaB2Wz81XAQVr55esMQzps4Q9YBztZ5sAamFFPDd8uai7pWmsABo3vdjE",
  "key16": "4ZVJgpvRv8jqDZzaDyFg1mCMy2piY5oz61wdd64vba2dr1vh4WfcvmhtVkRNupZ73ZmGWUkh2y999mdazqVSEd7R",
  "key17": "TKwucRU9D5pH6FucX77o42nZvCZMsrUzbEmNqosb3VbaGZ86Q8aB7jwZbtsSjxZLddNLtiittgLsdjHK2TNiecm",
  "key18": "dsdbYrUA51zcygyxceMU52FvZb4bTJ7m57iALKNa5ZeFXTnw3z9t9LsQeuTFYYsRmHHz4sGN6ARjEh8riHSha17",
  "key19": "woZ3Ft5mF3Df7NmqYbQavAu7ybuxiKA2UPmjuWG8AS2igE9tnVCdX2oemgf7B5ybpeKMVjo1bUXqL94VumHREvt",
  "key20": "4dBD8SGfJHFEwo5MqK2CXD3eVzVBGzAARp7ZCEQ5jV2N4amG1w2KubiVDrnTpA4686x2utAkZKF32p51uVfn2TAA",
  "key21": "5HVgsv5gxNs43t4w7L5mY2YpomE1TbBLaiZHdCNSdz4ytCmQnqWsJMnFLDyQygPAeU56K5mpKbVEUnuq2uGuhssy",
  "key22": "X4jhKHmRY1mCsuPJMfJwriEEgTgD99GPPdePbgtT4DBciWUS1esQPh5TxtCKsV5j66CZU4fVkTk1CB6Msmsz4Gi",
  "key23": "T1AMnYPFc2AA2YeeoZF1FHZ3w564MZ9hZDYtQc8Pk1T3DS1nH6fXRT9dABXVAPZ4kXWxUUixhdwATVB76GaTTKq",
  "key24": "2qekjsJeSmjQdCw1fE9AQUYd8jKgTSLDQZygRTtF4bVrLGbdFwtqHmMv9CfDJkimuzRZz9QiksxtC2kE4U2GK7Bi",
  "key25": "2ohQQdbgCUtxPjYXXNFo3BdPkAETEUM9yvWqbAmSePGeLhydKdVLMQqpVnp81PXUHdjwFvNMDC8M9wDQu44joTJj",
  "key26": "2a6a9QMvhm9TEJ3Cuwi81ppUp9rAXZNverKRkKKL6upaRF4YopwmrDFvCriLxrjqrWUgJyt9Qckf8kmgePrrJqEd",
  "key27": "3Xci2uZq1a475MH3eN9SmZqtBGLsuiJ3ijtMEMyhfrgA7LLxgX5crBYUWPYr23rVTGrmgLeAGgY3gLx2PaUJiSqA",
  "key28": "yzYnpvRBHBJ2Xv3bygSbmt7KjBZWr4TVMNT6V4JssVkEKqFQHXTun9M37DU3rRCqogy4Rig88RJfH2KGAQrwBKP",
  "key29": "2rUC7eZ1Qmf1emWMCB9YLotEpxUyL98AroExBsJwQ2dny9yYxh4Pc21xMXhLtFtzxDYZmguxirthfKdWzvypKqFb",
  "key30": "2apDbsxiFJA4uhUw64hPWUTE7J5vX5qnwFmPW2g5WE35pvYn2PnkYip6h2EarUD6B9r69D3EdYgCzYBGSn8deUsF",
  "key31": "4hwNaPGmELsDJiCQUArVnHHTqiRCYLXVek22Y9iaAvmmo73Xn3S9T9XkgC9DZ6oBjYPdsxaaywTpuFk9bb3gqYTv",
  "key32": "5iHEcssBXJk42Qqw5ZHVAHv82Sr7NWCvScfW1GWqrFw4g3n3jAeB49uP2MtrijVNsr6BaiXjDHSYELUbhkCskRa6",
  "key33": "5kPy4SRTTfdC8FW3QXkCY751dbEEgMDfpb6Hrw1PAzJoivvxG7wSw1EY2gRyFzYKrfDMedYS2YVAJ194SquD4XHG",
  "key34": "ZKsrnzYuGrBSDMraoDpwGuS28CsLhaJeBHVLPTbZztfC8NvR79FvXYGwfb8cn2xUddZ5741tPHykrX1HKPqkmTG",
  "key35": "3zbdhJNHXPkCoro8yn7nEkE1NBFMkNiADqDHeHvALH9aexTLqoZWQYuVMKtyUkGj4rGYigJ7AsXnh719FZDm2Qss",
  "key36": "5h4dtRKDbP47bYCis2XhBf8Ev5MvzvcWdQEVPzrkHZNNAZ9fiyDAwqfiTgSkGYiejGpXagUsMqY93v2GkyZuisAU",
  "key37": "577B9uKsLsKSExJLvGb8kvEnnEW7gkkCjR8aoH9AnRgkUgy9BqV5NghKWH2wGSjhQpPJSUP4MKfXJseWNdvRiPWg",
  "key38": "BrtctBH19cB1qZMNpdGLZCJKJY1GrGa4ykRRStEZcGt9nCkufizEGUeKQDC67bebUmXzogC6qUrr14YKrWsuECB",
  "key39": "5ETi2NtxehfteEWjd2PohbCXfr6v71aZj4jCFXP5cNUgi3QeAKcx2detgwLBDWRetXPFjs6SXDTqBNBQxpQvJrx3",
  "key40": "45xUsKPi6dzw7ycZnp1knzv1htX8pzmUYq51w2QFYZozmN96DriA3x8YzjRWidmcRhzAWqRn8GKxpfAyQ55DQrEN",
  "key41": "1PY6JeA4ZANY1W9VoDmBAhsx9Bwdb7RY4vMz7XDrGKmvwhB7EYJXzA1XhrAXgcssd3Ny5pLgfVpXsUZwjSVgjtd",
  "key42": "5jeXioeRwjYnR1zdko6WJJ97ibjLFR3bFycAQ8qDHE2Q8p9hADYTfejKPijRazSXNSeCMXijYEtDNNzVttjZxkzk",
  "key43": "3XJVVwWDAY889XMiEv5EYPT1dVVT2QLeAiGVbmLcJWdEd4fMtptc4wkKCrLKRBTfiGrHYBeew7TZqeoQxCDmfLYm",
  "key44": "3K7wmQuwj5KtaB27EXH871Zi1y4Ju1otXPZcnXwu3rkb9MjA3eDMaCcNMNQqLcqRAStjjjvANZooXXQQmM1dbxys",
  "key45": "4L4HErAmWq4qhiKZjJAM6Zoy9rohJYeNrCC5M4tMocUWk97uX3yuFPLbAGpNEH8g3YmssWmX5uVgFrGtGAWPRzNw",
  "key46": "5bMQcXjFBkwcorVkEcFgkF5NUacALhCs97zQHW2GZUCmqA1rGVcZmauacvJEsEzYDxZ65GYysQ9DnSq7oYJV761t",
  "key47": "2RSvnM2Ju8S5jf6LzrrRuqGpq2vYnzq5v8CaS6Wfa5gkBnygeBPCVqEmub3LfBtWn1JMHRy1TyZEJSgd7JkugPrC",
  "key48": "JKW76TScnwTihv6U6GeGAv87mzYQxv6E1KjZ9uWCKdYmgRPaTYAHMw1CGYZfKwiLUDQy9f2G4VoCeVQK4MjVrZd",
  "key49": "2VcawvUcb8SW8Kky3a3qcpmjniBPLsFXfyfFNq6E4LPdoMGgHXBT4zsNr475n8SKYbfbUZmckpcmSWSfnKaSgUTD"
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
