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
    "4Y2xxZcpDaKW1DZn3V2QVGDNp3v8BzNVLBMyRa4aPi66UPnKnfSpDiZ4m5GSgqz6XppeW68BDNuow1MqhN87jJ6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24p5AxDMtibYometJ84fw9UkBWJN8c93zKLDJYMMmqYWPrk9zWVwdhfx5v6AN4DfugCamkwUCtjEFKW9F1uXyfps",
  "key1": "3Qb3YjgSTHRGEx5hhqkCD3PCH3L2NUA1M8a5Bgy7uPUVBkBETQY2SYEvFMSCnADyhC5FxmaygifxmRbDE5knD9nu",
  "key2": "3Hgq9dWSS4yHyAU3Jk1cdgJdDbJGe2pnGBwWyq4aVWSvcyGsW2dJxV6ZtXQy4Xxv63h6kxXHAxXKWxEwr1tvFkAJ",
  "key3": "5SNoq6PZKHdbq2wzaey2mAicrrBAWFLMVr1DTfZwSpp1JQxtgvUUAGd7kdHSVXeUJZyPDaMbd8Sss1QuRPPD1jzJ",
  "key4": "2KsJz24BEsNzMKtMTFw93Xjxmqyq3DQpv9XrsxD4f1N2VRzd3etydU6ykLGsBNURSK9Ubn994FrN5SA4rc3BgDQm",
  "key5": "2GHTqHWw5yfQe6sqk9mXnegTEHqEsMJMscNciVqqyL8awRVLZoj6UGB7AL6fSVbx9KXS9vRz1LKW5L6Eca6gFHh8",
  "key6": "4RbyHraQFbajV82AJUkiggmBP8DkALn5YjjrYYdva7kkQmRJHXtYC7D5aWxN7gkM7eRsg4At5wBiZ2eNRtGYznyK",
  "key7": "tdPgnN1TpnRQQuoHRnhUEMbp572iBC5eygEXuLibqpBFi22Y4YVUu2e3gkE3VQPKbUaGZWXX6syP7tf7cQhChPD",
  "key8": "24GfmtqpAQokk1NjcpWwhH2Efte7j1gvyGdVXJLq4sJs7323ikoTZp3wR1TfQ3fknHcmHHRNBvGFiFWHrVd4Jh9j",
  "key9": "Krcr52Vda2HmF88gVvbbBqX2SXNq7j31nbyqC5FpsBzvQf36gSeqrEKbe2khLg62ajuPYJVR1CtYfzfGiYZwrz6",
  "key10": "3kZCaD27s9D4LP5s3AfupRvAFWaJAXNr4AAwjx8xe2KjqZ5z6SaHeWsatQEs6ZX3KYpdLApSWeeiHWdYNGjYL813",
  "key11": "3nwr5mWwNPqarPLoFGxjUzTTMVGQZdLAihKb8wZ9quVoHm5tE7ba8cThpStWNmUdixuoAG8LtYZ61S54f2Bz5qMW",
  "key12": "3iyXnqd9k8jnNDJicW25xMnLkY8jiw44KFRvnErk8LHRQctrfQNSGiNW9WDDMvtU2QgunaBWMkx8fqxQoqgRxmxe",
  "key13": "5Y1sEGp4pW1QgBEWMBx5M393is4vnz2Syta5wqTGVYQ8CxLkHPsgiBXpqQpLJGbPCsP8g5Hj3tAREKFHKufgKkt",
  "key14": "t8iq14brB53RvvPfQzqhRCYFKwESGNN2aa7wF9r5EnKigGLdtUZRLB6rknrzfWvdjGKqmz8HrCCk1tmfikpgcwm",
  "key15": "2ar8e6iTJaoWeDhe8NPQH54qYsbD24PSmrM4exAdF42MUmusqGDdKRWzKZtKvKquaJFpkNLp5LQ8QqrexhHWV2nn",
  "key16": "5CdijAQQS1ERnjSDye5wNg4p7sewzxzoFQwKrXdx1ozb2qU7jAzWYTdgyU56bdeg1yVicaEprrXXgtiihKcZU9uT",
  "key17": "5MDz6JSG3i5K6TseN8UF5WgmqnoVSNb4c4AsFnewSQav3LmSRKvSXKZD5rN5h5L6yTAAMepT4L48EJpu7nZhVD4u",
  "key18": "tFdgqssGgXpT4DNCPSdQoL4UmKhoEe5RLSLqCtFQuMe6Xk5CdNdnav3PLtfo2nUE9wmeAHC3b872wyTB2YyxyvY",
  "key19": "2xxDJQ5TxEJADQw61qjjbXe74u6iB3XDyAfTDa1MUU7dRN6VRqyateGwUXetPG737axG68XfJ2yorvSAywQzVmBC",
  "key20": "5auK7eJjPCkCbWCwED2mptWNNs5hhGTSUsK2RL6xwTLfe2s9Hq1cGnRrQPDABpg8GDjqb9U6UfRbNv3YTipNGiys",
  "key21": "2Z3dZCnSvPy4QYDvckX4cwqxX7AHPcWmFsAefHdHDNhreAahmVSYEuFtfMJ53HTrEndmpFpYjHkb7hBqVMGd5SMr",
  "key22": "Gqf7R3e4GcW3MxTZbupigEqP597WYNWuJfMcWoJuz934ALmR1aL1LbrR5AZtx3qnTZZXJiaVHhimpkWxyfYsKYS",
  "key23": "5RnHKULhdGQD5iymdFU4kC4d2whgMzgXEnbYMAnBP2uv8bfmHT3tFP8ZX6T3ySu1ZVt1JYcF8debHnQZtQo2kUS8",
  "key24": "613oNyY453u5DWofPbzpGZuqenNGMRaLZbDMwDY6wwk9NaezHUrEg6hHjRhYWnxUGNaFTwT8mCGuFq7YkRHDsbLx",
  "key25": "3Nzh2LeiFBwhknN75iB41HBT2Hjr9wUN3ZQDDi7cxduUP35PuGHurXrCehcYY2dh6fd94pzQFamNGfSHaBQo5vNq",
  "key26": "53xApLREdCaNdj3Th41xPwsV3ss7dcsKmUrSubvJV2DkfVWtGtvwB4TFFfxnXUuVrbQBDX4XSSh5PJ7oc86g8ZqS",
  "key27": "3x5zbkd4ADfgD4GxYboK6zHjPWF9ckNyLtcX4ZgV8jyz5umjk51Cp8KjVHM9MiqzzACHNMWHZQbUGk1HXEWwiDru",
  "key28": "64uTZB6Pxn8KmeC1z3qWMeCXtVnszPxCRSCwohVCwg9riEXiczhXRNt5MevG4KQAkoVGvwyrYDD7ubXcPNYfWPdP",
  "key29": "4hCatRhu2enrQ3SEXwXEbHuMoedDUZ2EwHBsyjKYHou9mNQKJvkkcQ57VVWTkwVNudjF2MrrC8FyWupSDEbBkdZk",
  "key30": "5YnFgGvxX9Jm3mTC1amZhE39i6qLgPNDSQ7nXtkRTnBABwbEWJjcrQLmfHguXwdzzg6xq45vLaNzi3ar1D9Redxx",
  "key31": "4txtNKuCq2MyF7FQADHPGt6SxW1s6yyGbBn2gN1roBPhMgN6syZJLNJsT4nEDamTMR2zaCzqUkEdZNUr4JY2zrD",
  "key32": "3GD5Aitaz9wnKUdYPRrXMYmh1u2W3ye7beY4UfkYwYC2rWtxc5GSdx7XTCEpiSmokSaLkNrZxVnTqcmccV5ftSMi",
  "key33": "55M2G1sC88UhBvYUBuD1HoZ5pgaBvmUg5JGHrZbA3e9JCKAKgU34j3BuQf6D44TcZFPvYCiFGP4Jxj47EvL2r3N",
  "key34": "gKQdsTG3mcztBgjM5LVQ9mV79iTVtVrhvSE35NssujMGt8uzBqL8mGH7Soosm9P5J31roCugTcGHwbzcKfZ34j2",
  "key35": "2pM3hZzucndzMXKvwoVGqQo3ZXcHZS4Bp5rHY5SqF5WrKc44LPyGoaWxQMqD7m35X3FSkEVtQ3fUjYGR9Xudv5Ws",
  "key36": "2aBmEjrpCSoYpwePAbY9YjwTreh28LyCixAsVREKQU3c1VHtTUhv7qTp3mCRYcMy1MngDZQP5bCPUnKdLV42WC6a"
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
