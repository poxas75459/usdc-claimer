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
    "DbsX9Xb7ogUMJr4V9u5xiUTktdrUaRLzHGX4GvDNAfX1BLf2RbRJjmm8uzUH8ewhtCZNKotoN14DWtUtJzYFpvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41zSUYRHV57wkvJLqxZ9sidBLW7AuPJepyeuC3Fw8xPbDsUMQxif786bGyhKX6roDJGFJ1R4UmNYp4yaUscYkymJ",
  "key1": "2wYrxR2KzoxVVaMf4MRSekBvHCzAzUN4WyRaemgVhXT3XQ6kqzgSSoHtVidPTz4AJFNPCk3xuNpzycqxsWd8HCdQ",
  "key2": "ebtFaQBpgwydyRtaVAF7LF2NCcag5E5qt5TZcfQJbdr6tsEUwDzubqM49EVyFrL92sohoFfBMvS3HJzxiWMsF7x",
  "key3": "4hUj5gWcJeGq9GfVFYVzKEp8qG5Mniy5sy3B4eEYQxVLzFswhU9uEbwrDbqzKS9JEd4YmnZcdFenp4jVvEKBk1xb",
  "key4": "2JTTMGeyyJ3YrapoDppYSR6FQfbZiqHnA9BXu3U6bKrwRuRNYFH3bwLVUcxqsm1Fjvn6uFJGP1YxLjfqVuVvdma5",
  "key5": "3N9KVx65yNQdoz9peMKs3jeTKPxDGkUEXXQszaxi9GnFs8uKqsXsDrtuqoj9qxC3pEz9xisW58aPyoX1Y2oPPR1X",
  "key6": "4Q7Dq8VgdhCQY8ETHgWtQG4h61KKVppNSuEwSu1gdpeFHSXutvqt5NrMxyzJdeuhtnsRRtkdFd9HLcS6doqkNtsx",
  "key7": "YaEQSNiykNgdzRTtoDG8jEEhRws9ghhn138MabWQ9RJAxckAyGBuaz3pM4dkyRNCbeMAkU2hDp5aV9xSPV9zMip",
  "key8": "4ZrVHy2vevkaVw9imkqzy9FbKGW5KE2VuVqQZevF5b5iUo9HV9Tu7WMoSsNMuKdTYgo1VSVMr44c18mpdxPj3VC8",
  "key9": "5zGN7Yc1BcYX4YgA9tDxABL4ft9ZScMVNffe69LEF38YQ6JbMGeJKtVVhHynXRRjziDfwMZmaXJYKrTNJtuzu1jC",
  "key10": "UF9ZEENx5AJNbzjW6N3Qd1av45AuAMm3CExbMrXkKkUzhASGJRFbAJ2Fpqq1mwVzKp1CUE8Cpemg8VkC2wDwUi9",
  "key11": "4kp4oWowvkhiw34VVRBy2VptNZ8e1PJxLnwcoXWbCXXenSpeRwR3gakzHzn6zS5WDJRN8MG73Tfq8qeK5rNowZVi",
  "key12": "5oukViRbHL4fwTyAi6jzmUo6xfhzRj3y1MeKREyaHSgHqRhkmRnvHdcXgBdhnFQtqwWuEukWeomnqFgUBokiAgNs",
  "key13": "46yfaeYQBNdwYT7GAAjTi4hTsfFgwj3JiB81ZmHio2ZzUoRx52XZakGXzu6v7xTSQzWLS26JCQhxdqJgkm4DiamM",
  "key14": "ck8V5dEWVTVTxNTxAj7MKyxTrw3gRmuo6JJn6txzEwTsz5S3nmgsej7snTmSPd866PE4Tnd3yngY4ctousTDEMe",
  "key15": "2wXkUmtiGsJywPZKwzybyXdnTbdQun8jSoh5ZbNV1GkjofW9ovvquzLD6rdpKhQr4auhj4Cw4RjERbvjcRckhUwR",
  "key16": "2Mspn5JFJwtjEcXCuvJwnazHmejnYiNQw3eqLCVLhN4MRfh78tzxHssrhmfqSAsizz6H9s2e551c7DfAS6w3JMMu",
  "key17": "3zyhrvXwP2k1vQvdgVeCctahgvbhtrCyAWwoH2JqChgJvft4fud6F8FpnVLtTWuRyKr9BLVCkPBpvToHRaNfzgFB",
  "key18": "3FwRwasHYK9CSsbJ5wew5UDn3pEHRdGNYCxvQJpkpaGC51NjXaQunyUC8MCAfVVpyea5HBCRfR9xoe8xXZXwHZv2",
  "key19": "5FLtW1ACrhSoPXB4zUuvC7cvdffJhE41ZVcuTHxHFBoz5QDDCMjL4qnsVgpoNR1fFx6GUs9iABx9EVq9z4cYYpoy",
  "key20": "mXuh7fUvJ51ebcqyQiG6PTQkxj1vY3NFTieQd7fqeSz18sXz8sGuBurq5rgWsiQKoLYjnKMCJchWQTxsTaLDAU1",
  "key21": "MHiKoQv66LgRLG63oXjJAaTZ2UuwvF9ZBRkbo8Gctqz5XTwHg7wP3wgQrhGg3wSvXn7EcCwzG4fzzDBmqttpDto",
  "key22": "4mUBJXRx1w3EspavTBMaQMzUQNG64sGSqt2m3YmtWDMvLE7Bpa8p4GBQG3ewWM9ZoXpizm3dCGsbELznpvH7nEG5",
  "key23": "4jQiYukBDDEe3y2V2o5pD1s6gKfPY4hLfxMQhZVjwbsWMF2EHkycstUG3H1V3JgDx6nmWwzTMu4RhASR62QReicd",
  "key24": "4QYpjCQQNciV2VzGi5Hfmzi3gkM5wSWTEarkMyMmwcUFYE4jBtv4wS53QmmAMfes28gfJjWJ4VEvY2a6Lh6HHAyk"
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
