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
    "4WvdntAMEwH3LX2trBwzMQtiY6WY6RQEaVkk9kY7FuTAJscKCBWnvHoaycBRbz4sh8qHCurV3FkwWqozxUmcvQy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JLkywbw9a3kp7f5BEFcpqaci7Un6gFmGUDpuSvP3EuVJA2ruCcRJKeZxDYSbh1XTubwcuqZ4NizcEuAvcjKnzQt",
  "key1": "83DkTxu6P1AcHu2vLyA76pYEigx7MnkUfMyZqZ9zHA3oVxwq6hjhUK5LZ7wv91xWCW2ps3q4yvA4dJw4sKNkQMp",
  "key2": "5DPKqnK8gbzLLHBv7sMiadJL7hSXTotVPHzeTZUEY1PRAzTpSobtgNzkMKqcunLZK7xqxyNMvEiAFiRhVSdFeWug",
  "key3": "5KRgNGrVTiVB22A3Hmkxw1LuYjAYw86hrZKvHNMw2RGu7h9zG9icvGheQiedwxCjGY7adyVg8nmQd4XW7FXF3dzr",
  "key4": "3HV2897ctT387pkCmFD7zL9nUiGSr6HNEX5M78jMRGLXPUNVZ2gxyVsV5PkoMogwddeEdgXP4tty8dsRSwGit1LN",
  "key5": "QnL5UNBL1vEtZQF5chwqc4zuiZUcnK98PiQtvyeghs7WjT2tzkUAPeMQyp9aVTYT8KVSqZqaqdhdja8Pty1nMuq",
  "key6": "4jPEafiCTd5fYdHFi1Zsg8sBEhDaAKhArfGM5KyyUka9aYJSMaowKjZ7UEKtCTfe4Fe2EmWAnQqjYTEvGpS7c5M6",
  "key7": "3ytYmcueFgYvS1X4PfBMwFndXDgNzeCYkDKSdZBDrz9mpsi5qY6RkdK5wHf1PR2zsKpyTGDSbgY1atmUqsJ8v7J1",
  "key8": "2VDY4MEkg5LHukXPyPRR3NH3GHF3TyNyKhUgBQGb3xe5g6qnxb1AmrRpDSjT4tZDdZJxHLbhmgj2ZbTA8YJ4CDUu",
  "key9": "44BWAQ5G6yvvkR1dDZ44WGHT6TZEigSiRr67vhm6pyPJy5yDsDtU4tXJNtCNNZ9hEQAq4kHnZxZRczpwrZgKwYQj",
  "key10": "FBoBij9vZWTRxmUw7ykVANJfMF7G5HUKsQ63vAFXHxFZRAe2CWK3spCpQRb3agmxtz6pWbQJeYbHhwLnD8M1Qir",
  "key11": "jjHHad1rkhkjdxPiCF85GDtytFmi5QYcEXAiZNdEwtdqHTFWjYZL5VjLPeyxpJBV6gUWzspsMGwMqJQxxV9QdQs",
  "key12": "5jTitmAgWQ9TayLEuRrGbvqFHHto2Fz8XQzorQ77uvBuAPkzpzBVZzWYd9vAhPYK66ZEdFaSVy6S4WdF3uWRPAVV",
  "key13": "4EVSK5jphpn5yASDDqMLR5JWXAXtHKpQ1WajfJ8TMKjJ2mkWwJ3CSuhj7hCDgMVTPqBkdHiNkbJix7NJoo9wBtLf",
  "key14": "5Xb42BACV5TtU6RQnq4GXRn4zK88PRJrocy4KuTsBMt5jgWz5nin5jzN2oKjKBcYZc5Vctq6ANRu1paPajUdGDyz",
  "key15": "5KbsBg7GmaYr9iDwJqRgkd89k4wgJTtX4KTbL1wys5uvitWDTtbwRrBFwYADKupauTjAfnVGiNafxioUg5rFEVA7",
  "key16": "2Ay73h8U6UF9sSkFEme1NwsSfxCvy8gRW7QRviap25vD7fa62GNKQdcgyFGGamYvJces8HF58dP9CFhqNSp8YnWo",
  "key17": "53S6yze8TkY5nEjvRPRF43A5RfHkRQgqjpX3JRCp8K8EDvPjCFnpb8QTLhpT3X8MGeSxZ86ZBxbzb4eWaiNbWvjQ",
  "key18": "4Zckzjqb6EhcQK1t18UopEBkjHxLXjVHw8vQ6QDYQXMJ1suGXqBpmA9qSH6mv3UuNxcx5f4Dp3AcnqscnkKBFi9A",
  "key19": "5CWFoJa6F8tZa2hPbhE8KHeWaoHUFSBsooehoyDpWfyX8gxjRthnS3L2NZC2Ag9Sxifcwq4fjekzcxnTQS63scCA",
  "key20": "3N2v9q5kpSLbdUydz8MuMopZAUmV3Uu1Rqf8qwiB4k5Jut6byLLLP1tHR3QGZ3XDaE9X7ZAeuTpDfgfdy5pvTNYP",
  "key21": "2j5nFZbndkzUoCPysfmqHNgh5D3JLiJDd9w6dsAiWcfzV8NZZPipxvM5rGisXbUVNpXdGsgY851ASqgcViZKLTPp",
  "key22": "577UMQAzSNUmfptaPuZSBQPLeJszW7KrgdqizBcbMrqt3dEMpXidiPQvk7qXjvAdYe8L7h1ehGriqaYMhFaGvoeM",
  "key23": "466QnX8nfPp75oeuTtRAouxHMrG62u9vJRwg7qZec2ANZvK1XgHQLJK6TFLMRN64c6bhkauhRqvQnR8mrjfSSsmt",
  "key24": "3wXUWVPojhgRH9bq4vtxu3viKCSYZSZu46nmjDj9iGbEYttSErxHuavAYe1RWgEB8dSyCh4V2YYSPhoQbc2z5TAd",
  "key25": "53bKfQAEc81PdLPrZRpApugkPjfEBYBjFSmu5yyjDqkMLsDw9QuwNmVVu4x4yNkgc6ghL54XdzRtj9sTiViB6G17",
  "key26": "4ywsBff7bJ97azftRg8D8HRfrV8fq31z4b2ACeBy53CRFeSfmGwqYyJx5Ag2KHowtL8saiNFje3sn78FxZidrjSL",
  "key27": "67d9JB99qTu8KcP8hc3ckYLaRGkNTS6p9dqSj1PqX1awWNiAJ81gsTtELAZgtPBEh9uH9eHaJ224GdyYhpbxGnzs"
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
