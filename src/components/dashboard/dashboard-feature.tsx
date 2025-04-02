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
    "3t8ugUWPmrEKSkh7veW1oZGc48E62jgAVsjqppseR4WicC2MN6cYgwDYbH9X8N6xmmvwk61eAC89SnsMGtRdPrMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Jou1EV8H1wpez8xduktfrCfqcPxyG3WbgRAMXgY6isZicon1XbinRGaAfMy4mHEsDsfFNE8Byw1tPttDbzi8bu",
  "key1": "3u5ZUEENgmBi9zjFPqJ5EN1N1YsYnVYhwarQZN2biQZeYSdpfT1Xbvu3Q9fFrjgjB8V3LHNGdXoGMxdiTun7RokG",
  "key2": "JpyuSkwi2J2JZroBRuTFnCJbBUeaaSgUy2ErX9UvqAt8DqmYC2FRCmXJhKT5WNtiZ2wBMVocpb4LeyUdBKxy6qK",
  "key3": "3igVG6oL3rj78uC52bDiz79tX8DgW5TQjotE9kGRDfVDYtXhPgRbm3ZCuCpxjGDZuTwSUUmAaXcf5o45Z688JzHs",
  "key4": "2CeTebNMvV1BossfpEKHMGe7XxGsfxJvJn2KuNcdefEDTeVHFAbovvTg6i7bwkdRwqn3ypnbRSHC3RCySKYZ7pQk",
  "key5": "XA8DEpZpynC4fe7LsE38FQusVV45M4HQ3MdePkAJ396WuFUzahDesGaYbyAhRbexvrq3manWhaDxv3zq4u6ewhE",
  "key6": "3nJGpaCKLn2mZp7yHyeB5PbZLnp8RQWqtTWxzuy5Z6py6sJmvTthfWegWhhQQDL17hgdHzzJXLMx7UaVk97KSRg1",
  "key7": "3srZKkfeZRxYuHgXJtGqPhyQdqqvtzS1hCHGuTrng1oDvwzf9TYEQT2gojUa9ExWKYK6Chwgmp2pLvDf6QaD6Jxy",
  "key8": "57ThGMoJrhvFkDu3ESbvBJnNckgkg2sfDKfTy6q2ut1vw2MfzZfuKaiNs8mQRJnUCxQXP65cbmdKFRDFpWKwKkgG",
  "key9": "5gv4ZHs3xSmaFEZPacyqNfs7LAKqpWNVRPYt6kZ2e9WP8ux6UuhMMBJS61MxwsH6vPCsgvWKMVd77qCTNL6X9UpZ",
  "key10": "43GwNxkHHwnEDupYhvV5XwyT6rCQg2RukyHMEXjNhzA9FvrDpXUDAnUSbYmfZXmErQJUNhhkPRTEVrnGPgJ3NQgs",
  "key11": "2NoCuxGv7Xa8FvRb9inRRvNMSFQmh3qMvyvcXjnf8fGWGZJ3A7Uxc1NkGcVByjTrDRAYfL9SvkXJkhLguTQ4rkEX",
  "key12": "56wurzVGSNCxbMXXr22Sttnz1foP7iYipCZjhjBUY8FKmeBeLSS91xGBDqPaF3nwuyibbGFe6K9carrDb6DznQUP",
  "key13": "398NxdXbDu2iwrfA3J2fZ7oMqATRmxM3pYaqYQgTkefiD41vfE6MpoLMn7XTd3w3aCpUXmuAyLaTx7Z8F45YVN7S",
  "key14": "3B39y1K5YdtkRq6c2VFgzrbzUGiw4ffrrQsFcRXwgttWKJxJLLZnZi2Gjk7abUDUeVJiN3BsfEJ3bBMi7ohPUDXa",
  "key15": "2hHh6nPQ2WCgSwy9vXQUtjoPdYnjjpqdfNtfnK52dxeQAK72PeYWmMUWqnMfqGhboDQWKJig2cNXMBUgaySJr4cw",
  "key16": "2eVjNFaSVYfT777wRV2xkWPLfZRTVXwnLEkQdqNnecm7NRxEcb6kLXVqe1QRocevz27Rrwy991z8c2avMa3UZ1Hw",
  "key17": "3C3E9TMmfzxLmZ3Z5Z363R3Avj5H1LN4xHJosQY78FA1zC3FnmxYFjoK6jLgHq9MFEweKA9xLyQHEhCUCCG5j2Qy",
  "key18": "4Uv71ySZgrax4CmpPWASyyb2UvmpPFHKsL9HEp4awDvd11SrvfFKZ5LLJY3LP1GfLGz4zdu7y45RaVkT5y4rLaUQ",
  "key19": "2dLdHVqpmx7xkVM39g8Lcd7pXWiUaakrHRGRdLNXRDqZVrPTTP4fxT6D8gK2mjRvrGFkLSmqcF4Bwh1ms9895Akv",
  "key20": "5wBEC5dYmpjJtfH6F8vdnN4BSKD3dZLsLD1Vrtfv3okvnbJGBTiWasfbfWrjxgHuKP4pe7V7Uf7JeRVakgxVJCDL",
  "key21": "57JkYX8LNPBejzrb1ToQTEEpq5TZtDekooPe4RnhKVYpsUHe2dRZtj2KsFgqxP5yK4T6VKJQE5x4s2h1CF2MU9UE",
  "key22": "2nxzci7aTiNJfdozeiYsstUQbf8AFQALysAKXd4eHBLuEPZXbS4tdYGNUPoVHAPDWytbmA9utyMqE2X8y7ZMDCzg",
  "key23": "hYTPk1U4fuYHv42zxXibgu6njYcU4K5NmM5BSjhVZL9e8N6YjATuNiy6EpkKWjzP5vKsjD2QvqWSpF1YhNUhFfD",
  "key24": "39euvpnxahcNmo9E5WeTG9cR3VcJQRz3dSnohMSB2vjx4FhDB28jbGX2Ji2UcdHyLRMkzFDbwQVPdkmGNF1xDqry",
  "key25": "42HxQBYXbNzrN3Fr7qWb5gvtvk7ZHxLUZuc1WA6j96bqWswzpKd525S4CvPR96nEXusMKiSFnxnpJeC122DCEJxo",
  "key26": "2fp1SyzTRLaqjbnkEpKxadqAsQswZ9RrHoTPoH5oGszNE8hhCAcg6EYehtsX9FBr4qBdvEJeJtGqLmZHc6x1829U",
  "key27": "55NdNwifJyDoJetry4MeDQfDWkVzqgXW1VKBTqcr9mpbcRYZ8A2eMFLv2apGpEBhA61mSBx9BvofniuTLja7B3pH",
  "key28": "5ghK3kCh5vmZUN2AjASLwqH5cDFoCWczaGrCFBsuwNwnSNoTacUwjpykQiHdqCxEES5Gea4pvFVwvq1JyUoPaPxS",
  "key29": "4YRUdsp2McLhZxKjP4wTk6FjteEzWJbgeMgnxJHyyhKqsiVt2pqniapswH9K2eCDzneiGwj4tnqhpyoMSW8oVSfd",
  "key30": "2M3VXmGourx7c3M9QzRDu2kDPFB4CDTS8ZnfUWYUuzCNbPbeT5n68TwFHjC8FPzg1zsAxbFrHMEiCS2D7roBY7Y6",
  "key31": "4RJijyxhM5bofvzmZwBdUo4N7WPMbKAy7vzvnnceZfLkWS9tKn9WB4EfyMoJFZ1kRjzJKJoefWPxg9g1RrsdcVkn",
  "key32": "4QHuajND8LmXo7e8LAGJvJUPnmrUncmemycbiStvUX73AeyYVLNBcA3hXHv9DceYL2r8Hoxqx4FJxrT7yGg3d2pb",
  "key33": "27NcfLD5jHbKKB2kRrNRQKxyV9HJzUQDDwfKU6qehcW5imiZPEWP2JwESKUVTRg1HQEP2RPDPdzHsm334hkPBEPL",
  "key34": "5zST9BZpEtHaTc85Cm47Zru4uyEL7GBAbkaJB4Jzn6KYuYRNc7HtMehjx1G6bNQp8ZTLBrjajYpZrmTdfGWd5gdz",
  "key35": "5zS2xwu1h8JRWst4K9BMPbAzGaykbqbGidb6qd1cSFPG2n12XFbb4FXgET8w9YiK1KsapwEUhXnncsdxDXF2D7vw",
  "key36": "Udd5RyY9ouWvLptSPWFBaZAeQ1bNDtLdssxsACPy7LzixCxpdBWhQRe5wcNNgRUQgxfBQquSuiBoMZcF7qjS92g",
  "key37": "wjFFJYCae4Dib6cqVpqb8CtLCYFfMcLEtnqLmZpCXDh1oD5H95KmpUZnijumN5rseeZmMcHJbRM4u4EPKrgGHnb",
  "key38": "RsnxkHy5A7XPBgW5WpHiEsst9asG4mHVQPP8dN4e1A18cAZkGPejoCXyTvrinqxd6wjxoRuBszReTWMsRGZy67n",
  "key39": "4VyT9X1zRSy2MjcuF7smdMzXm6GF8BJaVgFfk1nVUfJLD67GRG2AHP4b5WZNdFBGRsJkpTVCuTExAAB38Qwkjz5j",
  "key40": "kVxzZHcvXEorsuXUybjBoveVSuuGUU3fAg4rP6DHABWG5uo12NnSt8DcyF3g5ZKvb1uT2MkY7QTrsniegEi3xBX",
  "key41": "5LQjtX1vMSQjUWpoJ3k2cSKoRzziQSkC4Q1ft4tbZX5kQ9RDEZ78soHicXRPMwUoSV7cPKwMQzy5GDkPtBMBmAsr",
  "key42": "t7ovePypXPsbELwdhsnpfJjw7k2zzEX9c11TkRq9WmE5X7SbRUTkNztPmJ2iNYYFiviHHkqXzf4MfMNRvxcfZre",
  "key43": "5uDtwTsUHFwiaogtHosagmMt8r88pBvGjN1iSiwdS5jHLY8NSDRJTgcr8khGkE2uXXSzcPb2rD2naaPoMXj21etX",
  "key44": "5eocWYV2useTSya33iyx7ZRBc8MZdCEMmqy9oYZcQgpQVANfJbpSEHL6cC8ekbZmzYmkcrNzkuuuYCA7eACx2gPs",
  "key45": "3J5FMcn1VpXdBvnW4j7MEkgGWULsnqbMf3q5ExXYN7AfYR25dvjQCVdqKHGf3pt1kKWUTsY5hSYoWdL5VAEsKsyH"
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
