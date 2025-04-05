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
    "5urwjXtwVKfgDSRomhy9QzqPDhJtqt5kPoS7ss3i51vzHsbAtLMMFyWa8ARJnHfBSk1cjRyFy9J46N84StdzDDPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kks82twjNSmBS8LwPPmmDSugCh2WzfBEK3D1nRooivKVuz2nCWAURFj9apXrHHWXZkCRN9EYjFTF1qeFb66xD6p",
  "key1": "4WYZzAMAC89SodMZpFKGCSV16y1oyQcJAd48PSSFQvd3CkxhRQ2yey7VRNspuAuMRC1j2Pv5dxHg1BTuE1jbH5Ht",
  "key2": "2g62XSYBSGACwFyJNce8emXgqfHwmxo9EtaWDsreyDGMTgju2wiYdFSLMAA4TEVoq4KyfvBLQ17U9mM4QPWznc2B",
  "key3": "5GFxnZDjY1bw58io67c6K7AzpE8XVGBv9ypkMSg5yPRS4jc9kL7SkyyqjyUaMSscgUnigKbjFsZRsdLm7UPSwA5j",
  "key4": "2eYVMSArobfG9JfUSRBGpTm84MnEdQuF9b7P2EJ15iJRc2rXqgUoBVYf1Mp1ZAGbMjjJ64BPPP9N9Jy9peAJE5hS",
  "key5": "3jWPY1XeppFJzCuQ5bpk5mk9cDngsMFoJFquEA88zkBn2J8xQHdRyyrk6ksiPUDAgdX3PdYJCMQERorcQduLpDGM",
  "key6": "sUyDS2f2mcaXtGfFzoMAuuTw5CCqv8xcz2LQh25y7nhn7PxyoP2GK7csfeoVXRBLUtPPz4RLnXC7vQ3mDGjcAdH",
  "key7": "5eZRHoycbcVJduqh76xZcHkB3PeAQzp8GLGMkDWwtHh9y9ZzYyS1DjsPYxvvxKGppwQJ85wHVNjiPSsheUn2zSdp",
  "key8": "TRqdL7MHUEEJUz1oEhvAxfW6x7PAPWwfYeHYky1uGGwjwJ4XbzeeBELK2VNrbo1PbyBMCXaf4HjXfdUpE7bWVe9",
  "key9": "3rESZrKpmzLXtxj3HUofpuVA5Y2Bpsf2nn1iK2u825zzSrNbXNBXYXa5rsHyaucN4cw5uJEgxrtA31cUHdamJ1Qm",
  "key10": "ok6QHGPcroZ8ifYuJCMdE2hUoCtNfQMUCvHAQpVsK8egYxiMHqWNAL25oFpe69ojxbvRTY795rDrUoPrh1KXk6f",
  "key11": "4Ndf7d2tkPTbY6uXWG7KZB3fLmnXrU4euq3vaLiUNGFBWUxjBS4UWhHEEjj7i6zuR4xvKiihucUo7V56u9BN9tM",
  "key12": "SXqp6UQyFnzVtgxftrWa4yKqcB3YEJBpPNtkd3Zs2FHKdz4ZoKTvQUriLYDQ4wEFm2cG5UzpeTk3QzNtQU6RyNu",
  "key13": "4x2DmYMwPokdDpgQ2Yawd3mZkLQSyXZKck8vT8PNwYn8zc8Ds1mpfR5AwkbMvwSAX3Cj7gk51cFJMvfkNcYWjEvp",
  "key14": "5YpiX1bHwkC1pLSZUiRynAR52gFt56c7axamLioDQ289HF43oZ6dirnf9YcGMZkbfUE53GyUsCZMKytHeL6H5pd9",
  "key15": "FTAURB3qb1y2DFrrXY2mUrmnUqNKoiSA58FyQZFyZtfUNz3oNEkvreEuoZYSfBeUi97oW1xiwmkhqEQFoM6dHev",
  "key16": "39PxkgQS7twssoQWkBjNZNvmV9dyHET9SPqPwU3zdEvrisNpY9pEQQFcNUsK6Sw73jfq1RV1rctAV8qGubQebNWo",
  "key17": "4scKnC9vRcJ1kn2gFNoD36euVKya1i7v2o6TYzX84RnjzY2vpe5cGYnbuuZA46aM3MSEnxenjs5T6K1bR7YpUdNE",
  "key18": "5y4wwGPaXcXfV6PYuB1zn7obE96bQjXd9FEHKqHrzLcdMh9c6gkFJD2T2Jrk2UYz1yv1cREDui85uQPiTH3jt4v5",
  "key19": "2rJZNZfD2YYJe6RFVoX5uweCrHBdYsb5xYid5HmGasa5vcAb3rVb93E9oXFNHYefyZgzKKzT8frvFYzDho2qKphJ",
  "key20": "2sTqB6Pb8uDkWYeEjExtASk5vPNiKd3R11EhSY7KY2qKDsePKJ63ERRy5nJ3fhUD4vGhHPLdFHgvCxXPNHMFq6Xo",
  "key21": "33Epz4xFMNfe9xNGZDss98gD1SKMXZ5QendaXBv424iEvuw6QkXUMYfihW1c1nbUAKaMbD9ZWJTYLPdGf9xy1g9m",
  "key22": "2r8iANihepiKpy5k3hh3eJ1YBck8RTvp9ShRQPERjJQa8cojYE16SvauRnrYp4B8ikDtcRb961xGp67hoorFvcag",
  "key23": "441bP8rTr3oaGeebnveVZWMM7Kuo7Muy1TdeAf2L1VrQSJ6TpCvwcidpQiALokPdNe33QC1kvrENCGbNKLYNt8ex",
  "key24": "R9Y5XC9vy9Rib41xiPTUgZQcZRt5g2UNzmwsU4f3Yu8N7MmybeLb2D91MHrCvP993CN2Ce93afxsJpw5nZwH1ux",
  "key25": "4Q6fEFoqTcg6LfvoKZ5nS3HCqK6hJamyAVdmjVEXeifRwyXYy2AAiEWC4SzcvKnzJbA2ZQ8VWiF7RhwNzoAAojME",
  "key26": "2EHV2ykDiPnTwv6twiJ974wruURaHJ3LDhtiNdYZisRTvi8T4JUZDFtsbzqMp7Y6WGsheBzcX55pM6cZzw92KQpL",
  "key27": "55MhyLiWLezf5u3tvjU4Tr7rQUdDmABaa77ZcqnctruW8i4e91wjYmpQWybM3E5P54n5B4mTJ8sdtXbqB4JmPQY1",
  "key28": "5aEjJoGtc3gUAFEXP8t2rpbUvEmjJZ15LzLUWpfgp7g8rpZPQ3vTEnch8YwpEnKV2UJc4gt6ufir9ySHKJkBPHhV",
  "key29": "2vUKd4RdsNksLjAC3Fap3Ef9sm5C7D84KhL7XNyG9R1Es8doesmnHH3jz9z4BTszCYEwSQvSFrDP3SSJFs5MCxdi",
  "key30": "2MSn8D9wLdkFHJ9vSKQ5YTKSWcNBVWSHcKK1AeZyqXD9jjAV58vSYR9qwnQaZ1iZFSVkojMfkA2XAepURsK995cN",
  "key31": "3FaNAqWXDr5PAKGR2nTqqs95uxd8p4znLTQ4ySFUPwwCYE4R3FLJkeqMDzMgeTERuBmPDcx6hcwavn9WtMjFN36a",
  "key32": "2yA97zPxou1AcibjFHxRx5qkLqbeDRHWe721zBuG2NqhCYEsVnG84eKFTxVTuv3f1u3PiFHvTPncbvck22Q7FEuf",
  "key33": "3h6A6nNP9RxXRBnMrWr1nkndMWW1HPa5UHk34SP8xQab9p4p3WR2d4hVxU8oBfbsb9Xj5DYvWC8tqjTzn5zTtE25",
  "key34": "275wdGNyrHCWR1WJ8Xf1W8tDxQBSLrU2h2s5j336Vj9NFagfJuv8CgQTUC3LzteX9R1t4GTmyY5xVbEiTCWR4PC5",
  "key35": "5abQ3Z1hJLe8RHiJQFEaBSXrGhRKTRvXvBUjQG3Ts6BNhRQUDuTi6rzH48fapcW92DtwNcwZcFwxU3bWUaYbwJZs"
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
