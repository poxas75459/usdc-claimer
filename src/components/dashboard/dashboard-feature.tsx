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
    "uE34jqFVvqoVyMbw8A9PrJi21Sp92PzFduqojMVMd7EEX4nS6NMh1ETjRfS7zpnbSYusvrb4uxXVFkgZ2wcAKUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q8xestLdgZKaarSyDushxahAyef8zM55rqkFMB2FiahXUK7fewntLMnEtbfzePA6VUzb5zWUZ51WmsTgoCkoTHS",
  "key1": "EBnb8VxdVHHwE4ZuC4jP5e1FUfhtuRVBj6NCcXQSFiPLW47QzddbzVVvUYYUuo8YHexJXTtRSeAijawwPjwePHX",
  "key2": "2DbxMpoCMC4v2LioRLG2rfMKRLVryJE7xyrb62EHkS3r2PEg7FWPcDab87YfFDMGRChPhTZXDKQVjiWZMLT3W4kW",
  "key3": "2fs6kL9P55jJe5HS4LSh6YA4ajFechNgmR8HU2bZsZ4whiyjcBD2KEEyZpb4RaCndnjVx7wDzWetrriex5sE2tUD",
  "key4": "5PP8dEo1ctDeE1P5J8U8xc65xVn6URU5QAbXea2K5RfAD9oAFasqAJjX555injMyj8kuAoS7gGEUTxY6Z1XxZ3zr",
  "key5": "5wN1Vz9ZF3DiqkbSx3ZC8g4MUsSRESGqteq2QjrHPMRVPkpXmFiSNHZwwpuWERo7xoUrSxA652m8cGEBTmj6X8fs",
  "key6": "4yLH7NJAKgQtxGQmKAQmGfzqeAW34rZp3JiPX2FBcD14fFPYUwhy34poeu2PRyZh28idD8pLYAZ3UcNBD2FLNpFN",
  "key7": "67K6b6W9zZ5A1eFu8b47faGaTCVvxsNSFNJzgMsT9mHcWptZFJAj8mrCLv1Fyu9ZcXuYRmt2V8eeMADadZWBrBDm",
  "key8": "4iws4iPVuwk1U8wRcHoPMmc2fQg5Aen2PRcXQhNSsZPVFAmNDMHnFzoBhGsYnEPcuWHcfX6VtvDg3YN2A3DBzeo2",
  "key9": "2Zti5BdHBcHbw5i7BZQ3gJk1RoRovfN6hHoL3Zcxsh4jYcE43az7c1YFR9BeF5GEWydNRCwB5AUrxrbeoTDou5V1",
  "key10": "4rFpzC1R1wpUKqM3hkZS1WUrBR7CiCMwSfQUwukNn8Adjmd4J4cZWTzr2K42cwGBfgg8jC3HWVevcAvtUoLfA7k6",
  "key11": "5NzNrJZxtqV5LkTitjsv8oFskReXoRjRy24sG9EeUH2PiyAdPxyZjLJKPMB3AWKFhJ3ejqpD9Hc1gMUuMkgXreDE",
  "key12": "45iYeGTkJ5LoYEhAXfZm2s8kkVTX4zD4xT3WMrLk2iAyYhWTvLLsCnTietiCxDx6cUc7F8xU9Bkp8G4qjkHyji7m",
  "key13": "637fCGERdAFQFVqZEJMawng14mj1NKGrffhFhHJnTLiYtp5MhjaSWkqsz7d3U8WFyGGWTSZ9ViQx7yCQytXWJkMt",
  "key14": "joKpeGXZDRY3rScn1bVSmcFK5zvViPg15CLkPn9e8535ctEmHunQmr4apimpdSHLuc8FVQTF2mJKHDbxSNoeNPr",
  "key15": "219ydWrHaptRXR29kEnZdp4xM5Wqe71xbF2Whj5ENVcyC3S9ZHFdx5fsnwhQfNqiefgQpczLVFCxnuMqVqQPy5Hg",
  "key16": "5wBA1dJKhLbgfJ2xNJ2qAB69ozasj1YDh6dNiSetwLvu31vB6mWLfDds3RnFuzkWSv8o4FvFu4NvbbVRV8unZaqC",
  "key17": "BAJCmNNqSUL6gFtnvuCyVCTnHj7qWKbCKYPJa3gXhRFFEbpFcb24xf7HbHZJgEVqtGQSK56cadirvkx74MYMsw8",
  "key18": "uDVkaexLRBLeb8za2p2cvoew91N43pLBbv7qu1cKFcW3BYXQqUEUPDPVTAPNkP1SXqqS22zABRYLyZAmJ5pr99o",
  "key19": "4mmpxAVApv3sPM2xmG99HnZp7bLbLeaHpSVcqRyFxSeSBLVmAQB2onZx6Sa4KS8PfY4vmKFfweaXSkRTeeRf9Deg",
  "key20": "5nwso7ZHcRbfbB7UxYFxvYupo1vZEjgBCZYvmihRQfDnWgXhj2wxKPyjkDEmgpK7JD2utM6xdMiQChaEzFueMRqL",
  "key21": "1Axk6jAEB3r9dcdgWh2wrGY6FgE8cHX1f5GhtdkcmPdWGu8cH1R9s76oGHmVcLkGxYBuHg2QigmrFSGwweFQT7w",
  "key22": "zTMMuxmG19MU2njCsF9zMHxvF1TPbKsk3o8xer5pJdpnhYCVJBJWiC7eqhUEraa87yNeBpvrZPEgV4BhTcnD32f",
  "key23": "4b1UuP18ySMq7dnA4PgRqcsmKfHpFZH82Lt5W2ynQcBjajitiH1ar7eETNNzgUUF7LpPxXv2uSjzhg8q4Cihrpiy",
  "key24": "23NqA6jy2C6MMKECqrsWBGfNjgSwWXeRZn7nPZB4b2oSL79JGYRY6UhxBfcoJwL9Kj9cDfZMeFoLCuoYrYHV6vdA",
  "key25": "3WZnDvb2156eradLUJR7SfBqUPMTZpL6tLDmQ8qXiA4yysyTZoZaqcCnKJoXwKHwkKXCdkvncKiadfPpN1sGBgny",
  "key26": "4EcQS8bK5W7xMRBtsemhEZ5k6JpmaS12csqEPuM4N7QCx7aGWv2bWFnyCS21LXYhSHDJKP1vAr897jCRswx8wx2x",
  "key27": "39WVQmjK67Zg2WuHQB1pHqXkdWLouFV7deYRLPgQtYFc2HJw2uLpobVUF9kVg3BmgWrm4gPTidJhXbVhR3pshWyj",
  "key28": "7u2Ap5KVPsRzF1kbdHZB8Xx2cqTrEPANj758a4qgusNwkkhwBkudRPzUJw8Qf3VTjWdBFpTc1jt7t4KKrGkEhcf",
  "key29": "yvE3FuX1kLEhKKmHzT3C1v6EADUCxc6yFJiqtj8SnZ9YLfpk6DyiaveBxQa3QtBVyX8WkuZkDwkYs34mu84VAch"
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
