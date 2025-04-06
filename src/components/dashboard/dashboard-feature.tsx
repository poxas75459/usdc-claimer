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
    "4PhbtCynRTnjG57kYnAvzSYySoiH2B9vC3TJWMHubHWfuz1XRBCLVycpeaGt4mDZzuy8at4JHezkUD2uUJ3nZ8Ad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "328Z1PnzsKJdQLqu3pEkGUGr8BdaWiAjenPQFwwEqPuzXZy9SWBH69N1zY8vv9Dz2LHC35gjo5syoLqdHtj5C6aV",
  "key1": "5CrTAEWwJvb4tEYs72LzFd1nwGbLiphDtFceGdtuZ6fP8HDGBoZu97VYFg6AteZekddMVnVhmfETnWnAebnuLQHZ",
  "key2": "2CMUr3xsYSwPuEtQc6fcL6yBWd4mi5CrZnwuUE2MJBrQbm3W7pXsMRUjrPmfDNAXfAiwotvf1tPWBta2MrgNTHfz",
  "key3": "4Z6TWWs6FUcrbUiNWePS1QrrqGCvfkGxFkbPqc48eHxoDLcmzPxFA7AYVD3VQhJu3HG57QxjRtkBBuEABunuWCFG",
  "key4": "M9jZnK8soHYtU4SLUdtBXCuceJNBwUhgUcChtcHsFupxDAcNwd7Jheyo98CpbFbCebXeM69k1q7EPFqYAb6JSer",
  "key5": "4yhrUHSCKHi5mySDzAurePPnuRygWac2GtBRMDnrotyueMhhMynYXuyhnpgQv1sDPWRxm2VHvvXaWSRF3LsrTfC8",
  "key6": "5jgK4HCVtCumnZm3FdjsBqBZBqaaAVSP2J1Vrx6LfvnzTg5uMSrFV1BENEmrSMduNYvE7xBW5n6W4gGK6gntUaJw",
  "key7": "3DRMkq2sobHP83fbS2CrAgiRqUF7LQWZLzu7ddQ3jCxkn6vjYA3Cfjxp2SjRHQxJVgTurDURKEb7kYFGAo3igUzM",
  "key8": "3bS1MULjdiafTrkR7qp72kZue2gJCpEsRRBU26rwHPHpE2Vow9TwSzUeU5VErEAhY9qcMHLmnUD3A6ff1hm8utSm",
  "key9": "4uyK4cmGg4K5NEfGm2KCLfP7qgYv2SKAezy7MGk96ff4YFUD1dJz3k9CWnqjRtXoMaHQZbEgrWU4pUdmJAN3Uw1A",
  "key10": "DXPBZJYPgz1r3hQtnCSQvgdvcr63BtdHFtFvcRDmLDb1sJP4ij4SCyWuxbtwCKmrWbcAzcPU2d5F4nropyyQAMU",
  "key11": "5VptxPFapjgeWoQR9utdiMNPWdSgRSFPgF8Kn3csy3FMSSGGmnBL6ppUtsByVqMyDFJdhQZVDMrUJdFsF5tZsStm",
  "key12": "2D1kM5hAmkxY18o42VqZ7f5uYVD4QACWsR1RCZfLsgFgz1pN6bUqAgdqy7MxK3vPzWyQun6rzbum9SfjFJgBAbxf",
  "key13": "tXhA5Fzh8Uzni3w6ZoTtxRLQEHwng1uF5F5jjYvsotUfX3nZH8jxVTxnhLBdUPRNGFhdh8LYfGcPA8NTbZ2w4of",
  "key14": "65LJiy48QPjLe1PnUyqzaVhnKjpao3vUCdZZZFeN71P8PSMGq8FS4rLsw4Up36ppahdJAfwVW3uEVtWpwEraGphy",
  "key15": "2pKN6b3suUuEXwvhocZSex3t65x3q1AkeKoNiRpk5UPuiWrLoHU1kp5ehrn4rXbVd2WuA9a5Du32EgoczoNBXyw7",
  "key16": "3oK9tBXCLVtRjve1XN5PcASLZV76wnrggmoaKEWmCKBYYhKSKqhCLi9WvrHg6phmw1S4bouZyMdEwoZmg31hjXrA",
  "key17": "3aiiSLQWxucR7eMaPYSTEmPc1qRdTYm7Ci1K2Wf6tBwtEaGSbUjj4AFcdARoFbAcZA2GRmzsccoV1AsToRjbyWh7",
  "key18": "4cGDwuccfqbcyt2A6ZR32pc1EmaLQQSQsuZT36xcVoycLy7m11WKH7jGgAykEUqd5a3DqefMC4uEMMj427CFtpY9",
  "key19": "da23W4Lk3LTUQ5eLTEQ9DaZrPrAaKF5qZAUURFUry5xqbLauB9KLgxkkSHCU5Ms7WedUJYATZfyDiT6mcPocgdc",
  "key20": "5Zog7sT6zLB2cijAWBWNiHZwKkpVoTuGK9jnKt37rVQBwAxur8QnzkZDRGGVyMw6CTwYL7j5T1Yo9jHPSMVMVmtK",
  "key21": "27tSGH1oezsgRK9ZCDjDWZcY7s2Vf4CY7ZGpTueYD7A2Xwj1QB4DB2hvVv2jEuBDd7ZFE23TQPZvUYiwAq1mquPJ",
  "key22": "5vEP5BmibTtC4TMd63kQXZz6KbNzku5mJ3T7zszczSpES8npZkQbLpSvApiwNVGsowQN4JwrGRCRgRNLRyPCCWSy",
  "key23": "4Hk9LyyKLC5uUiseVPN1R3hKHEdik7egXt22imzZFXKrfTJsufeCdZEfhsHrn36K9EUcYdbLg5hcjpwH2fsVkg5w",
  "key24": "4o1RCgXPRWKQvE92yVPTX1TGWbQwcyNK4Q4mSvZWFf2tmjs59oAwRbXfbwSeiUDpt9rGXtmY5reG7Jg8fU8RVQ5H",
  "key25": "261QdJr179DKC9ow4rmjDU9NGnmseXAziUUm1CmkNdQ68AiE9uu6MCaDRRtNC3wA2u1e6jLpV2gMieE7C56SAnjL",
  "key26": "2mYynr9NXybMuomP9kGHPfnkmar8BmJJhPZLntSgQCJtWCH2YE215ETniXdzEHJGndCQZAUzRmP3imYCbD6hUAoq",
  "key27": "5yRVh8zFmScTXYnXnj6e4cPtPw1vs4R3p9hvnrvR1V52uks5xpwvCmyFFZdRBazKCjoz94dtMNdJqaACGPr3kGSP",
  "key28": "2gkGwJReXteaxdenCaQZSXJLeh6bvCebbSd2F91xAxdW9jCYVP55HTT1JrDLLLh2XY2x9Uufq321N97Gfw9fZK54",
  "key29": "r6BbzDN31HZ65fMZL8EybfzyGR8JQEaDN7SSKMRM7S4g4EdDqkWZFn5vedgjMx54o6t7q3xUtaqZFLVuXyaddBM",
  "key30": "2Aeyk5BnqjtBmWbjDrRWjWXwJ8j4EmhU8yCW5mvqSs7r81MXqxYZRZi7mNZkdjRMbN1eAEG4Yk6gFzpf5SS3soPm"
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
