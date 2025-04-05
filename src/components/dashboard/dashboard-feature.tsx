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
    "3PheRARgcFRESusUBYuozPPP9gSufBz9MnX3w9AsC7LzGMSs1QBr6musBvUC3LxEr9ubzkqvgjFttYo3qN5pr5VK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "434AvbAq7wDHHtM9DSo533FS1KByA5yLVoJDj81T1dPjWYzxoKCXZA2c8yD43EvJd5hgEnysnVSn27Hko7CjmGSy",
  "key1": "4Xk3HyuH7wRZsoUf39cLsmyWr5zexvHTVx8iivr42URuXc8pWDKqURPhHsh6SSVe5vFVHzFBWLsEAurnV9jQmG8K",
  "key2": "5ja7F31AzdE9wtCErJv4znnrKGWbvN2NUftSzb97tAbV4hyH3rqcdugbmHpR9tniCWsPzNyLmzBcfTXfT5hU5Xwa",
  "key3": "3u8fTNkGtJfDHdLFyJKzeis62q1R4abnTfsQamgTvdQCcATDw9pMFYgYJZhiinytWy7uW1pCppSa6NAZB2uVZRVc",
  "key4": "23Ca7VUgCBpEqdiFqYSgxcDWprCK1b8x7jdC38cgVpH7QSXW1VvmRw58YGfDyWNsdtFRPziN2huyHvSfKsLTsY3g",
  "key5": "3YZoCP8R8msw47P6Y8SDkfcToCyXg77im7zM4QrUoVQiMKzpvEQfNupqeCQAC4tMjXG4vxBLKftDVbpiwYXYis1a",
  "key6": "G5wkdmgQ28sptt1pVFDy5hymRvq4hwRe5Ugo4rUoX5MTh58wZ1fkhPbKTW9h84VBgPXXstwQ2NawNKYCYK5E6mm",
  "key7": "oudkCUb29tCSDeaCxU6WoGU5p6b6uptGpbrZWYw1uyUHEX3h4hasMcojG9cfNcM1mRVjCSMStXJZ23hRtHnj9Tj",
  "key8": "kTxKFxbSojmMn5pSW3Xwt2L8x46DK2kjBQGL6KusJ3eWj4Ws67WHXdL5UEBUGZ842NjjQrJPPycogYjuP8HuA9P",
  "key9": "48wkN952o2vjPATubjwi3PqKShpR5dcjPXrUkJEyYfVf4xf1U3DzLXv6XFEXUcC7TekYbjPHLnhckn6n4YMsRWAB",
  "key10": "37zKxNFAv4sXEgN91bR5NypsBnnziEuyxWfgUr6TUvpMeWwCD9CC6cUFn8ykDxG9hBXPmR4M6LuPeUZWkpaNmvNZ",
  "key11": "2Q5ysuiQuGbPCFoGnmecksEDTCj24V2Mv2rYcsbKn3NLS7pE3wdB88BL5prPfAf5jW34jbUXqs9iQ76BwzrAf9Jf",
  "key12": "656GCsWpXu2UkhjThRKe6ynK7gszLLfJBsVnffJBQmVLRMoQ96wJQbzyTHRzgBKnMRJYgPuafwQ2ZESQW3tx8VTp",
  "key13": "5qLpEsP2MNhb6yws6Wzn5vj2mKNhNU5vTFHuNq9dyRD8Miz263o3MfzEiW5ChATZQx2N1T5SPi9QurdboocAawKD",
  "key14": "5fG4qTXDHBzFLotU7fagYNrfjoUN1dktEFABXWggV5EHqPFdKuVbXApCvEwtL5sXuHbs2YSku2k83tA4TAvtWfsr",
  "key15": "3WjiGfME3rWJFs1YNts8qEQBH9q5KzjjNzkk2rH24a7oJjsS95MpTUNfhuAqFdvEc1PXzeGfbxomVafek7PANScf",
  "key16": "5RghhH4669Mq7xkGqvJVKfnCMBMAan2cqKfMfms4C47QmwGqPtUTYcTR299HMUjZGi9CTFQ53xpGNcJKNtzj2Uyd",
  "key17": "2djjaXtziSQMapb3SkVMq6pe1QZUQLvkh5br1o42MKmpADi26ySUFCjjQGZjc7snE9Jdie9uioGqENaMpvnpo72B",
  "key18": "2e2e1vrtGVHWEHBFtjCgT4Z8s6JnB1LxxP8GWePkvpJAaQkixfF63JpRj49RhUwnEMYU677Liwu2DBT686hc6ZCJ",
  "key19": "39PiazV38LoPG61MoaDnYjEDKcFUctCx11MV7z5nhRyjjH3ijAvmk1q5JFLyP3unQMkyHuqRns46sCQUXUFzZafB",
  "key20": "5yjjiBE6N4JEKT1wJ3DoP1xuPPwCuHuTigoJ7jWzTbpELruK73B7vvRBP4sW6vqgAdoXx5WEdQGGwFHUwE3Rwndu",
  "key21": "5Qdmpm82LC9tRPBaGerQjPvZdZ7nCzDxTFCrmDTp5R3GG1Yja7pPEhGuM6xiZyYFkbWsVsmBtdCpVsZvmxfzbf3x",
  "key22": "gXaGy75YLeF1kd66LHT1QUyDqJ3MkCsiKfJipBdq3v8RG4iKiAp5UYVeDVioNoCMFE7v6wpraky4WtycyPsZs6C",
  "key23": "qz4GLzXXvb5uakLY2Gu4bSidDNDwkmx7ki73F1ZhUCgNPGckar72Vi6KE4Ts9hVdpJgw9irhNE2vFFSk5XYjf6R",
  "key24": "NziBEVzwWG6wsuSZuifoLVDUwKm1d7PaSsFGbRLtpKRUEVfB8sKDpr6tDKcgDQDiE2nnYtMxYzv7zRoiTjYDjbP",
  "key25": "p8fVGQXUqcURKY75oMSZ4VyF2PhFKfkyRav1w9APNLmMqDM85ztV3JfSuUjTaNcwWhECjAU4eASpM4AyGNMopzZ",
  "key26": "5h4NpiUgt7reGjR8gbP3wdf6dq43e9qNdTcDJYrLGXv7skBMPSzhb9PM9bWiAtbjKk1EDgehTB6FaDmMKkRecoFo",
  "key27": "52Hfxq6UmT74wqKg1XopbhDMT5vR1RYRPsD2hdUNeRSf3Lz2BvNSxsABpCU32Fg24WQ2mke1GhU1qJtU7bw66umU",
  "key28": "3XsfjieCAzSHMRQf5WwHVP65NfFh3YByoBc736TDPSP9wokAsCHE2CR5yacms3PJhNdUshcGzzNq8WSVr3gmoJke",
  "key29": "2j1yJp2CSiGu61RRM6Ro3DSy1pZSuDGBoV9YYu6mMX9RL25fkxAmfkyY5FC8XGJvAKSpExWg2VunT2YDc1oXQetW",
  "key30": "eZLRQS4ek2GRc5r5UCF1tDzT6WWpSNQ57LDmmXTRVesh3GdcQd2gg6RBWJHYSiGt5Q6qHiX4odcYk9qPMzLwE94",
  "key31": "5nVqYYxNgUd3ydaVmM1nFVkcZJ7UQxJpttnF39Nz2Jax4WKCRdmyJJMDKiRWoSJS2nryYznZNsAiN5VXpgtm2ft1",
  "key32": "3wEg5Ukrp1E3ZjTxTjZaPY571T4v8CCR3nnSktbZBH12cJxJL9JJusVv4Af8eNQ7nK4CUhE5JuJwDFveQqyBPW84",
  "key33": "4fjTZr42V3ZDnRmAuiw5AT3RtD8HMywWv9cVcMghiRHkGedAfXmbrCGKA9p4nMuX6257aX6q5yszu8E1yj3DDTBe",
  "key34": "231DaQZLii9KwfJ4X9HoLu7Rr4e38YJve9JcLygpE3vKkBfSuvnVg1MQxTswLnCojt4to5255VN8dSfeZCBqMYXL",
  "key35": "35CH8bC1BKUEDGJkwuNNVVeUGmhTpws2RpDuUeLhVH5L8QqbEHSeopbL5MJSRCxohSSsK56ofDR2MfPUKKusmDXL",
  "key36": "2uyzmQ4ohu238Y8DG9bb5BNBnZi35e5kV8Fpdjg1ou8Z7DCVi5TwxxHiQMRPmGFHPhgD4FnmgcabQa7AgoB5k76t",
  "key37": "4VJzN631bAyAMjARGEGp4dGdWheedwimVtR6ki3yG4yTX8Vcut79dELZLAKj9YxxxTd1LUV3is3K6ZKX8neM7skq",
  "key38": "5n2PYysxseBaFgtrENY5C67K9AW88yrV9fHt2v8waP67RYkNfgFDtkk3za4c1Son7WtrK9F26oo7gnyRudHsJuJT",
  "key39": "4MRZrBrdCBXS7kCLypuU6ijLyZgQrW7V1TprwE3yK9z7qoWRND51oPmispfvqmbLpttbaF8euMMgMdJvTMb6HAdB",
  "key40": "hjMYDaEDiZhTyG813ANDLYkzuea6dx6QWM5kH6FprZ6Sy2LKGhTYZB929GpJuYM8AFUPSGz1AeNNrcwmFMhfzLx",
  "key41": "21kungKXBEWYq9vXrrV2cdBDoVwrcZWCJhisqvMRScuQwPY44C8vTtU2RneRtNXhMCxY6aqFkc9jZZCPKASiBFSj",
  "key42": "2zr1C2ooofDRfWFG9xFGEEcWGUmryPa8RXXpH1UcbptDnLrtEbxixRwCgw7wTpVTA9bjPJUNob3ift7NF53cK4tP",
  "key43": "269pnDzdVbrnRNSxeUNUorVgYMBX3XDb43SM1FNtJ2U8CJsiG4f2CHekQ9fkycMinfEQuqdWLqt7s1det3u1Up9H",
  "key44": "3E2zqrCWvcRXm8AJZGJ5ig9eqndqQWa7Q1pXiC4LxXv1j4obi7zKFvHizeQ7o5cocB4Ytqy5TEDx3aE5VUcsLdq6",
  "key45": "2WJhSKYNYr4z5SitEuJxCCxs9tx4tLKzxofd15Tosh6xcnmFaVBjAdHkMR1YuEKgHqxbgLjKMJ6TFWq4JJuvDEZZ"
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
