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
    "3xEGnYgv5nNNeJibzQToLCr8km4EYpL7w3VPiZe7FGs18FbNj4zjqhCambpPDebqxRXV6h2p5jhHD9tg7Ufjuepq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qh8KWJkFfRN6iNayV7ZjSFfP844hq1Ch6CrLwsvmtrKwVFRbV2iScsvx1pG5BzdeUFrwGXLFdhEpbu3ByxPmgqT",
  "key1": "4HXgJznrQsp6vcYeK8ovbJfcJe1UFxtMJQtWyNZBywSv6ZrN8LAq6dm6qTrd6iWem9ssRgC1z6ggt3jwVjWqmUA2",
  "key2": "GGyo2TcBrtegnTxmYcJV16KJ2EfPevyEnHLTzKFAx34KjqTCCUVcaL3h6a8z4GqGTKDm7jRHJsSMAHzoLNEzxWX",
  "key3": "2gCCjrsPDAurNvHuNQzKhUXVaJFZwMhuZmbptcu7yrZhZqtaEiyhECYgfNMAS6htBdTFto9y82UdE6QbqNXjaoqB",
  "key4": "5YFE8xa4S9ovoQYcbZudiZ2dfMweSbRJc1YZR79PHvW6ixcexHBNgQECRzPouKQeiSvBn7e3ctBTtqAZuQzT9fwt",
  "key5": "2siwYxqsFa19gdW6w1DwqN5uJtxYoxovSYW2Pm3jbigLWmf9baQynVb5ADy28P4Q58HJ7kSmHQMpF24mR8s55ia3",
  "key6": "27WqbcPb1bApPR5KhHRmY1B5xfha22PezjdsXHeZhzJEaX7qjivmaq5eGyh2g9gLz9sAiNHm8HQEHRzEFVprKi8R",
  "key7": "3si9jvmdPXL66HdYhpHMKEVVn136na9TRqMnD5NiK1BZ3S5WWFfm9wocBDhCFVexcwtTtZUadxztwo3tsaKJ4Q4S",
  "key8": "5L1QGJwwyofqhLYUekuL2itwEwXi4y58F1XLfGuMPGHBDdehXKGX4RUzhUD85GhFPXJRjRsZqcHAycukT8wjd6nF",
  "key9": "Rnep7SuaDzy1j7SBRYqMrMRq3FbznmX4Pw4Sg4pdNRBbbNqhh7EHcM1dBWm62z3DsQGby92tDTnfHjtcw2Pr3vH",
  "key10": "DqAdN83Kbh37qwyCHMyRCvmCmz4WAMcs6woux4miEgKvDXGv3eL64sMPS6cwCcQGDhxj9Dsh68irMzr1NFpwLnm",
  "key11": "5x2iAD8W9CvcrAjg8N2kvXr5WRJD4iqz2uDQXGzqcQ7QDa4oZLAVSu2fkdMkc1Taw7GpKa1vPGqjRLC85sD8URbC",
  "key12": "3MYBCT8C4rVD9zWLp1QCo62yT6cTq93s1EGu5Lx3rKDr4eBnak2XLAdGYsfK9wuB3XZtkUHAKNoopSMcX1NBayxa",
  "key13": "3tBGDStY2ZNA4f1GBd42YTw4m66SxaGr8iEzRbWa27cvqFM5AUmuvyUZRHfYFvaJ7MLkQiSa1cVFAw8qESwLcorW",
  "key14": "5GeTEoNJi4am81iXn6eY3nVsdrwFLsrCNJTg5n9hrbf6zprQBBGkjM8VT49c5gvLvvERiU2KoKu2zybhUKS1ySuz",
  "key15": "2526Po2Qp7rYK4HLXcPmXb3xhN7wCbCo3GGVVbR1dtmpG7yn9tDEko3CuVWwcbnShdNCneB2MATnDLSCsFrutseK",
  "key16": "61he5y4DkAxMfb3Teb5wr445iAeH5o65zVRasrEez7EysHkZM9H6inW5masQjNo9vKGbygas6bhXBY5f9sFRMd5x",
  "key17": "2HkgGNRi5VxC6BQjoeniz6wbdgtXT8jn7YsugseorEbVEq8CAe9FCYgdL4bFiM3it7hcpCtnJRARjhtCMNnbN6Vh",
  "key18": "4G2Sp7WkaUdLs1HNCCv86zRywVWmAMgTbUSqorWHyz92SBc6FgRgohYUXu9HUGcqgopcvg6yxWtWUQdLhXNp7JLp",
  "key19": "45reCjfhw3JZqwapUtTiwqkuK1bsNDFCRuwRDJRnS2paafMderyPXvSuhikwm2zrwCCLYqu2dhXTtSJjn9vyENZw",
  "key20": "5bZbhQNBx5691rTJXK2YQBJVyzn4iwAPQz3PJQuNrd9wqpYR1WcCdeVmyaYc3VLzKD5P2QW5MmAtSvu9F9AkJ4f5",
  "key21": "4Z2VJG8Cgd2A46LrktPD3LJZeVMZ1ip536K2DZ271jSXUk6WKTwqjSZ4sUQ7Jg3M1ZPnmN2krDjCqmQKkwsvThf3",
  "key22": "5nrs2UQXDD6N1mQW13VzhXkbky3kAsWE1NReS8eoXJCYWcWhtuMsSW65zVqpxaCJhtrRjt9t7Svh25iUtWrX7D1E",
  "key23": "5XSFZoxzANLC9biATCB1meoL7kiPQYMjthiweWRLdbiDrBM3fjMa1y9L2YH2A7QsFBDGgboLWZ4q8ybWzb2W17qi",
  "key24": "eZre2P3pvaKLZsVZxs5RmrofXRCZnqzCXt7MiZ9ZCHRM8X3KEyJn8RkT46BhYbHzLEYqMemHBJA7rqBEsY4eUBy",
  "key25": "2eBG2DrLCx51kNbcecH2bcVFQwHEqQ8M2hzgbk88CxLnJhN8NuXYQiLD6EPNSN2BTvUeDFWj3ntB7L8MdwR72DgG",
  "key26": "3SgVgEBq7bZJGN8qL1aeqxisJuGqGfVL3ftnDfj7EZmD6mLimEnExqNdvadjWsFfNZK7q7DhqjtAdMWK5TL2nzoV",
  "key27": "4sRcX8USYrwjT12HdCMsiZYsN2iHCnALZfzz3RcjziJAeWpmjqfgM3rB1aLuDtNpxnYCwVMgiZDGbEYNpjnjy6cK",
  "key28": "3ysnQhrGT3qU5P2YqbrK43cwoKBPsjR8sDj27eew6UC7UpJvWm8X9VTQVSRPhqaRi8VFBMcFwuczhhQmEQ7srZTe",
  "key29": "48maVTu8TK7pewfGev4Kg6FhtYTzyPTvKKb1hG4BsbvCE7DtZpHdxEmC2KMw2a8z5BGzrJJ86DU41uieYWJSXraV",
  "key30": "2BygJfhF1YKY8VdumYW8n2YQHVpG2z84FrW193jFu7Kffht7SZi7yD4jvZCkMQDCLPiv9LDWt1cZwGziVhz1pSeo",
  "key31": "3TCTWChFWWJ3JdhZyiWpY27ugBqSP2zvVEwHfAs9cr31jNzSy6XX9YU2YBWKnSV1Mx9ZwMeGFU1Cmf7shjuU3RhB",
  "key32": "4GV8ZXLH6nvTr4zcCDmvb3SVVc7hswUry8HjtHduan7riHS59imgom1CqrdAGPXiGZLDowFkwWtLfi7bNZR27nN7",
  "key33": "5trcKrG36Sg1DC71gqHWjmDDXNqyPQP2ioa4kcc3Utd9ZXn4tuojAfPjHMB2s1BqEQmqmFFYsacWbcJosbtEtHMd",
  "key34": "2BqjEYbqtwVJfwp8mqwzApEHRCGEbVbC7u7E9aUqGr5fnoPDFBF5ixJWQB4Yr3a7uSjbvJajuqAyA41Qy2gydiws",
  "key35": "5B6BBVgKF6btWgx5cgNajrPC3VQMrJscxfe9Jy1mF9qmPFUy9KUS63pmgJA61yrgAPd1tieMW8aDSUNyjABexZT5",
  "key36": "ZrX591P2bzRHR7a7M2gNCmFKhWdLBxkVgEwkEtjHLqA5zpaJ5jEsNTyBLqrEicPNAAVe9m3Z9n5jP6czLwjjTgR",
  "key37": "55qbgVd688zhDt96CVrqdATGPnggeKDigaEZjLMpJMzLvjDgkSfuDopKFChNrLCZNm8W8rP9CWb7zDEKNE16qYhK",
  "key38": "5zDrE2ie1oeQX6WYbZHGFNhqsWNjQ8RP4p71KJ65H5WHsD2Ff43xX3NZYym5CGoZoBFd4bGBzgde6QN9ePSoCYKs",
  "key39": "8NFZ24WjpdkzeEn3NZh9UVyCX2sMZSzW5YYDg5Emgtioc2pVHQFVAVaG2sxzK9uZD6Pnj54bFMMa9a72bA2Tit7",
  "key40": "3Nc91yg7MhpjyH1awMxZngPeiAz4iUVcnpv1CoGknoUZtrP4vUxPRN8DGYCBvAC9jQ1qBVTiskm2AN6uWpCnhGzj",
  "key41": "4FFsfvgw9XPudzgguVb8b41U1RHjH3TCfrof5grPWcUN58zCtu4LBz3JvtPyS5uj89JPyPnBPwDCAfh9A28fhxKn",
  "key42": "2RuJYKHSCjPQXctgK7aCvcnkfvthpURjYBonbRf1gT9Dq9iHAEnkFn97KjRqgTQEMXA9jUqX9jt8PL7iB8kJx9LN",
  "key43": "2yifBh3eDunezaPcjoGUBQDgKkPAWJ5GRZrbNUaQvCcZgZDYT7hRqsvxdBv5LZLUa8nUie77z1ADdyXdms7hnZ4C",
  "key44": "2zoweZksNHukc45nPDm8knwvb3i3UtjzTkrAeB2AjrzbkoxA7DNEUYERMGsjshYb9wQ9Fyh85P9QxyQfsz9Hcf2C",
  "key45": "21izWdSZMcj9PhrMWMycWYhq7CwbGHk1eVY7XCEGN2nhLdjGUrLrmiekiZmCwAeJAC15RbDAbzcZZ8A3nafjkT67",
  "key46": "7wKgwv5Pd5otqoTv67CedHHUjuFANZfAMzHhYgzKx9nLppsVyoB6bM5x7fvW9VtRWt9FVn36GMa25mGwzQPpmpt",
  "key47": "4QxcwBHpcJPakFduTW9SetWqQTfptFYrcQwJNgTDhMM7Pbz1LcaJ8BsbnYTCxBHYd7rp3zo5Bqvzgw3bTsaAeGTc",
  "key48": "4MTAjuXkh12S6SbXVyMDY2nLcT3bDLX1ChsJdjWNraYqwDTDN5w4hafqCkL48Bt54Us1yRo7Jya5YugMWeSzJ37t"
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
