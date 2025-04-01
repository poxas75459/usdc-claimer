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
    "64kNeXVeiodcYzFitaWwd3cHUGzykjYU1TVGShdczFLV6AzfeAjNftR3RLaSGHzdwMWP9a8Ty2W8APyeW7AsQSvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28JCyd2qU4FAZTZSaXVScSWXftPGYLPqbVePAnsKe6QPaonpgbyqQ6SSkNBMXdW6AWWyyAtMXgK6wcHZyNRWVUhC",
  "key1": "56aTGfCqHbVm4xQmPvPACX6TsdDhbCqHkLPsAofiegvYkChMcxysPKoFdoXjDhPFBrytmUJKsz19L41ncct5UX6d",
  "key2": "524V4hGJzQxXFDj5b46ZXsArTeZNcLrgiHJDNyEmG7TnrtXeZPTBrDPzj6eawbXy3GQf73gGbQvh4r61gh45FBGC",
  "key3": "2ZjraY37PYNiwaTrXc37cHEyVGaGtUpQ1HEg1iQkAWKTn4RQBF7CSzrFxGSuGcFfMdeUwenDaE45x1SMV1526To5",
  "key4": "pjVeCDejXyGuvqQmCqRcXt2ggeR33AZ63K4cMCykLHFUGgi2K4PGZDiLD2cA2Ayg4Py1K8kTggdbDssvmEdZVtQ",
  "key5": "3vhMrnbzLfumNLbzHJSMM2oxS2x7qzGTarBCbr721X2YKFd4ctQXAB5GfM4Ex5vhAxRWY1L27aRRJ6WD6j1SADMy",
  "key6": "5yHpXsry2ucUL56DSEsS5o4ba1KWoRLsYWurrJFSj1cxp3b1BP1ZZWSktmFftmqECUHXwZxUTYSLkcEUfrMys7R2",
  "key7": "2yKkX9sEuzcfjBrkbovcfTAHq3dYzSkVc2idtcjxebEy2MFppNhQvf3GuPoVsePboiqTcVb3kzuRQ2C6ADsksbMp",
  "key8": "5L2eBBeiNWYqvvs5BPfMsA2QSsViUaje3zxGdYTG3jSadWZDekywXPPjHF79zTtefp4Wh3FW94Gy5rN9TZciBcy",
  "key9": "3zJJbgHVBnHPdAXYSmB4pVyV9GdBnxp6n3UWqBjoNn7A8r4rNPd9x64YX5v2Kqw9tjShtRJcubtxxyocoUrJXp5K",
  "key10": "4BcatrTkCYVBwEwkGcE7cVwfNoi7pmb66drf1P5qKKjrFzvH1yELawKc9D9xbcdsWHV1DgfPgp5p9ut1f1qvXeW9",
  "key11": "3M4zBwTGFFcpwyUVGezhHSTMqS5VMYrFQReJgk1y3aHq1yNqyhjyCPB8hzsjXJJsgkphFdaswTs2RWkV1wGASsrm",
  "key12": "3LMdpGnYd2XYSGsP68xDG7P5gjLamcZFcAVNbs2hpGMJojtQe1xHqgyrgoxamCDHx7gb9kqgKAkM3ju7QFhLzJzw",
  "key13": "2YkqQhVkaEFEta8mEkrNdLKit52UUKxZfJumvHum1ffpQnJCJWuWWbkxxfNQkpLDodefpkXexuRmuSL2S462LorC",
  "key14": "2kF4RwTdSSXZP9y1bkwjH2x5DPL3dVBfs4NUmrzzuqUXAMgrXEQeqiWDUyMZ3hMNAT6yegV31gMnwr7JQYAdvpbU",
  "key15": "8MiTuS6NDvZvvyzgyf9mfCvrMQFXjgBe6tJbJz3L8Gm936SQTPucjJbH5U6ARcWmHy6Pitr8TJwjWf5GVQBFLjQ",
  "key16": "5TqhidtD4MSZUaKYC9ogehfMW8SxLU53TR8i9Go781mcqhvJwyNHUnwR8VPAf95bYkbjtAeEZyhQqrPsKjhXAwjV",
  "key17": "5ddhLYiy7dMYKsYBRnAZPj64HSGo4hsLjz7pQruP68CXyFKMreAdNwG6nnX9UeyzYv3mQR8f3udRg8kQ71NJgxJk",
  "key18": "4Abxyxw5s6sAjZr2uai3GavuudmK6JAm7KT3jh8isndCrL9vCAzQAA8nZTQD7A6o5Eme6TmeqyxN7bsd6Z3QPhYB",
  "key19": "Kdb43ejARMC9XDzaZxcfvkHCH5LDeMmiw6yvWFBRMN9dnL1zEhq1hJRioapQwBYHnjAv5io4AMkmWqZo4hL7png",
  "key20": "13cpWYnmhiWYCKB8Ri76qr6iY6xXKv6nvSDVCwVGkHyWbSucrYPHi2fuUAFwGnTJgC1csBokPFT9TpGH3kZ91d4",
  "key21": "5pgwvE1egprZpcoUZaih4HMbgajeqtkW7cpwYoZtxP2uCZekXqzAkZLG1a43gQ2x7ep2tbf3xK841hqZfuqtqocP",
  "key22": "47sJjMHzZZ8G3X4Vb1Hjy6XN6MUg4kNZNwdgHc2A33GNvFEfJEizKMJgA8P3HEx8MDMK63W1fSaqofnqzhkYG9fY",
  "key23": "4EGCQv5HFPhodRHKgbGdFvmGGVHWbX7Si4DqANtSefomNv5U7bCtz56hDNwQ7Fm5uhTpcFYatwWjtHCMjDnq8Bg3",
  "key24": "2CXtZstKyi8y6UPqXxDpXmry8TJr9VzHxCkupYtSGuN6AQk5owbudaK7uLi8coiMzmeXSZzxPp56ZWtTNhAerDui",
  "key25": "q3yJcttLq3xAKjYYsY41k3Y3BxdR7277j7qFCNibZ3Gfy18yHUVLcFcaB6mJL9BaXmEXYdp4acTbVxFzh1RkxcQ",
  "key26": "4bbFCw6T3jAgu6CSfuRL4uGZHXSjVZd6mmZx1hcQFD51ELyoZqAhvmZMKmgPCuZ5XotTNQGCxTuNLHnca7z92u26",
  "key27": "4ftAdYAXzAjWZVkTJeG7bdc1kystJZD1gXdMkm51M2S1ZzuPmG1bxhngh6k6fvsJsfBNsmL2J54QuNqNSo61gb6w",
  "key28": "RgAcogfN6bXkmcX72NrLz9A4WksHhxhG3vZcGFWENHaQR5E8JUZJUHZU4yKnGT1w9FRTsDVg1u535iqV5DTYByn",
  "key29": "97WgUXmhK9zcBG7F3K63GPQe91P55gC8zgRJVDfTBqPZR5Rrd8VtjQjsTpXeMY5jQxvAPKqZryE83zFMokGuorE"
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
