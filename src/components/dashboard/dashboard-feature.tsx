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
    "3dLshzEsCs4QrUbWEFg2PbCUysmBHw7bpt2bJbqffzmvFDN6DPY1W2x5y8hjgiWph6A7vEgtzJ3DEyygvhWPK3bo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61AAPFfifURjPu5oRjjgDF929ZG9hnbn6ogZAHGG9KuGt36zagTGBLRZv2f6o54yKjHnGahWJwxSaMBTXwtota1n",
  "key1": "5WS2je7mLAi4bv5rAiPQrWTTvdLDEZ9SwECmUcUQeLTXBH34rMk4VCUMzUD6x6VaoWPZRveuroMsexcWExXav3NB",
  "key2": "5DJk1wa7tgyUSCvkBZUDJkS2tjmPPo7ay1Ly5nofRjsLWtwuTWHXhstdTj58kcKgfVHVjuZJFY1NwMLP3EfbEDxP",
  "key3": "5URKG8cvnB4zUvhkWXPTGHNQz9eKQc8crt5V7TwhV27A41ytLwzwBC1ZmE1o8pw982uNfrn9z8qfQh2Yy2wuiory",
  "key4": "2MTQnJMUgu2tQNt2rYAGLP5kdtQnJTpZrBzeRRixj8E7L1tPakQnGFJFXixR2yct18EaAFm91gWgcwW3omVzpFqS",
  "key5": "zoGaroDdEgKjNSw2aaa9pFV6gLntSiNFWUjwMMz6bHkPFCeA8Tv5g5cEcRb6UUqxSmgaFnuEwaYr5EkuH1ztdmk",
  "key6": "2jt1ArCYjv4LXjs6EZqNyBy961fnK33zdoVS3UcerzyZbKgxrNMebCouGwUxSCRLNgXFBfJQkL51connTdn6hb18",
  "key7": "2tnuopprqfZ9jwRpAP2r1JoHQPPmxFe3qpgzddxKaVR4Hu3ZpCFVRNBiUWfQk96vZWSYyZrghoxKLDK5kLWXfECG",
  "key8": "42FZuA9iGZDv5EoRDoc37Arcrq6xxkzdeSn5KGnDYBxoq7UxqFKVchy2HcGHZ3wEt2WRNz49krH3vaSPF7XuYeeF",
  "key9": "3zCfR1qyBjezzzJQrgjNYSSyrzkysPuQHT6jibAi1d2LooXjd1rKJrFCLrxS2EfmHVrXNqS6a9MXQaY78u1ss64A",
  "key10": "3iwedpFa1La3jvaZLPQM3pqLU1Yshpz59nZUwTqUidRaRv575n84aspZTyzr2obx2jAUYh7ijeGCRbLYCsGDnzV8",
  "key11": "2fnK17RxwjHfuBPBYppWc5rsEB5kMYyKt7xj1Ch28AURLb4ZefJepm1G8TY1BXADVvXr8psSRnzULfAhrnBUtv3R",
  "key12": "ezvkPmn9BQsGGhDq3F3JxwqimifJSbFhr9jU3Gk2b2fdQNBGMiVgqbzungjh736SbpWaF9Qy7Nps3d3PYwjHD7w",
  "key13": "2cQLKBcgCUJY8PQynNdJoF4Wrpb6UpwDwmYVHZ4rd7MuEPCibs8QnGmL5Fm4fVSJFHMmL1WRNNpciUjGhngLgW97",
  "key14": "XbwBa2HTVsZ3iJBKZBt36FvxXd5nVhC7aGhuZb8j8jVZNsAGMqNNMatfbFz2Nf7WEEbyZbzZ3itDr9ffABGso3E",
  "key15": "xPnVg1g1asYVeyJroGFHX7RjUacZ8z1LMfdvoNSjAroUdinQ6bGdMeqvRedpSMCUjWsCNxhkWTkyvi4BXkRy33n",
  "key16": "4xUSRWUQ8E1vqd3ucb8YVADxeHDMqCgEcLE8PPaDbkryXQ5N7Vf2mLtgPyc1KvbSee6VmQvbVcSLs1KDkFd2Smyi",
  "key17": "5aD6h3egiuuGoBmfY52bJQgxhoKq19B5np6uQKXAsxmDotno36YiJBR8TS7Lbg1Byw9BphK1pQYkeX8DDAELDDws",
  "key18": "429ekXcnDg6bAvQPfoRKwzngbgm4fcw7R9httEf2VHt7x6UvGeu28hZs2MZfRdNCppsfVgdpDUPhmTcsF5WmbRBi",
  "key19": "hYjvfgPFGQruch4NLSxQHNhwuK4By3LjtdSa6amXoPWsDNRMWXQUYt2EwJ3zRzXo5P6Wj3gZSi3v6YutV1BsVuk",
  "key20": "4LDfEh7bL9WouzjRQ9tibJ3TXUxFT1YKBVWaWpNxHwM4BK9mXGqMnJCnmMXrW46dfF2TRMbrMe1boXuaUqLs3KJy",
  "key21": "5ToZTBRgASYnm36yhCrsdRPUXp8TzQVb4RqKrVk4C72Avk94eUm2gC9k1FGv7r2gvV2BAQzvPmc3v2gDQCx8ZnD2",
  "key22": "p7hgeLZCHBD4gVRvA5ELh6izLCtGcmbixYpEDQHD3FsFPRMw4vudyZbZz1cdAUeRezJA1MH2jxup716c4s3cs42",
  "key23": "53LiSD7GWQWXcWB1DTiK3Q9GuAE5rm2cPqEQhwvUwZAPRgQQG2gUvrdPpV9MqNypHFcJu25na91tYS6H2j1rjyET",
  "key24": "26cVReYrkbG7Xcm4RafiKBKakPPq8QL6qEUQGTDhZ6HkqqpFc8eapH7yPfft4DwkpJYSFdFszWbSFmYPntYqR7Hm",
  "key25": "Fdq3gfCvS3zaRqMjRjxfWUMcS1XRfusFKw5YBdcGaWwvwxoD2Ba5WCCaDc5oEM8V8MRyvRRBt2cfHS3AJHTZjJM"
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
