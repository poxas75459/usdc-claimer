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
    "3gs7wawjYByEw28Pn4xX7jr3hfR6uCtKDmrspCKKJ4RMCZP5NMoRgixoxuiBPT26WQCAsfbQJQH9WuKxXEAyCEng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y8duc2ZpnrDjpvzRNWqAf32MnfeFVBLdbcLYC5KQ6hxxStpMCX7gBFi8NcAF8UU6pL1iV4Bu3iLGHnnnhjfdCqJ",
  "key1": "3aC9c3oLKEy2GKjd67PaYmf9s6uCo1V5dzkYdNhAtGfVp63peEPXuGPB3iupHmLeY6Ja728QW8aHFQKDjpjbowhN",
  "key2": "AnKemDjqqioRhBvjGvHeCTiTtyudN1u6gs2L4qSojhWSGciW2MkBPVrvMSCCw4i3XKgbuTAiPPZ4VkBuZuBDZxy",
  "key3": "Quj9DmhABACdxj2Nc8vsDx1VHJjxKTMJuixDev7AVbZcCaDCksZzQTizcFKUZY8QXx52U4kvwUhKj8tWnC9dmJx",
  "key4": "5K8mPZczQMGK2W3KsS4XknCWUMJYJZKu4oi94dP6UseKny8w5DqgM4tuywCMntNJTeutCCeoE3scMijdqazJEnkH",
  "key5": "QdsQ5AtSiwDWMpgF4hHsfgETuHTfCPNTThnJMpKrRMvtVQXRd5XwbErTMmtATDKuD7XR71ZnuPCkwgE31LCtU6s",
  "key6": "rv3n28Xx6Z1jXkkEJYPAFzCHMy8cEbCUiStaG6fFKXHNYksUuqrdJBnikWhNc4CSPgfLMpFgsU1wgq3DDtzwX8e",
  "key7": "2g9h2ARPopHhZq3UrdSnFbvSdFuJmxzT6Lzz2Jmce5thQ58Cew8Zxk55uhrDSfCyJqn9j2RGswN9Aukmhfcu45ik",
  "key8": "29Ab1b8oMC2qPdWsJaBom8ogdhvYKZvYtB1EvLYV1rmzCBUCTPdwMJczQuwA1hEUCSgv6jfM6pmiZmdaon8A9FXa",
  "key9": "6MwDYq25hS1n3FdTbbnbFJN6DS5MqsrC9sHABzcYxKTpXgmHxeiPjJQUgsxqhW2uLknm5U36iCF3QWRXHnK3KGn",
  "key10": "vBMh57cmcj7dxP6hiQ17xKRkVjt5J1YZHYxze3S2FdquctUVGSp2wEEEQ9VbpYqmpB6xwKBsUAvznPbJioDVsJo",
  "key11": "5MBdiJZD41vFWDyy3w6WFkD9objdsx383Vp1AsASxM24HqsXtE4MgHnKegb3AL8gQGqSBNFrrdPS92wEPmFzx1pw",
  "key12": "u949DPEnXHCRR8pMQRppkyU48FtYq4cv2tWbWzwiCpTNStgriHLs6kkNNb1RwC6HbcQYsVzvcXNz9aywrE49R5e",
  "key13": "2m6u5Heiz2hSuBhTowEDMwk8KyWgvFHuHuHarDK3rPtcELN4k5BDVnWQCbaeyhvgA3KnhM3uQyFMwRSt7NPGt9cC",
  "key14": "4EA7fTRMSw3CCTtXzAhE1R9PJ9pGnwtAATPPAG43H2MZ9SMXbTeQczrRJyuHGMbY3AQQNtqBpLxkWkt5avuVoDcb",
  "key15": "326AH9ULVV6TAtRFwo8T9Tftct7ivQpX3EezUbXQQWkmBd8h4t4tMgN22uL1zASitEbdbmRPUhrHkf4a4CQxh4dh",
  "key16": "2pZZi89C5HbmATSNb6PMbLLnWXW7vqgJzKVjA7Uup8CdbSM94DXkdn5wrMTeKTR3EYm6z4SFkULDcqLvt6KSkb3X",
  "key17": "pF1V8jZnLxUTMadUUzKUMJ6mRaw4AqgvM6KRXHcx1qVGiDaEXDJW2pSFnR3c5eVTqM8LpUQH3s4Uf3BENc68sQW",
  "key18": "4x8Rkmuq7Vs8QBnDghUyfvG7nrG7D6zxcns1n7GYxFYY73Wx7BpSB2V5K5dULrybzvbdZoVrutMZ9dXuRFh4sWkz",
  "key19": "589d4qULquSofbBRZ51DWRNNxaTvA7MRqDskbffqapmL9EP4gSD4ionv9hY4gsgGVctYEw3a5cwMKTW5rHiq2yZW",
  "key20": "44LgbuBMQLWS3yQUPag2Z4jKiRMeBxK1S6MiWrBF5cthnTm9JpEgF44429hU4veASiH3PMjWUm2UTGvrDkdtTREV",
  "key21": "2AuRcMxCLPfaxAZx1fNwBviBGrsd6u8h4wg6ZUYbuyxZkixdKuaEE11A6xsSXNCvVqjrm9zbZUWF9YwtxjmEGTMd",
  "key22": "63fW8Wm8vWTmAH1mJSz1K7PCN6pFm6FHoZV1LafCyPZFbXimGFLeJQiX17bUiekRhQwhxc64hQenhBkn4Hv1oyaV",
  "key23": "2itU97w4yRuXxRPkvyXueWWLpQPs7yEHBVm5nsycmGy2gJaeA3RFZ5YP1Tp1CwP6s2S5ceVb9PvTXc9vHXUR3VwU",
  "key24": "4kkqj2h9D8PzakoxDapPUPHDLYn7ztqaUZQhAARmrpwxDvHKkmTdtQUHwvCEgQ6cABSainJjMdx1uXJ6J2GTjwTv",
  "key25": "5fQCxksQYF4sFCPMjcUqCnBpKD4uEjTczfYKNmKN6yi661F76PLrBQHjoDjduwLFF7yCPAGuGN1e7Lo65RKg7VJF",
  "key26": "4ZXtXMVqXC1AbCZS8ESNctALNVJAphF8we4d9Kp5dZ1CQnHvQ68J47yjmoDpHkzHYFB7Em6V8Cw7fMN1XQ4w4nZi",
  "key27": "2gzNtW84L4Uamt2fyrBT66B6tkKPBmWdkhHP5zBWLfvGp9BWx4jWWNLAeoTAt6GuY7udPAj5jppF7mTRGS68bHAu",
  "key28": "4PWW7ubx8kT5sVY45dRh38k2hWx9196nFrEd29ARMyXgUa6AqmcJEztMo6yCK3DWdznu1gahzT9joofBQQtgWdqj",
  "key29": "29hKMhvSM1KeMSfXshj67XLQntudUnRe8RvoYh8QxpKEBjkf7nErs3VANhebeBfJSk3138RezZ7BTrMZ9oEbv7R5",
  "key30": "53uvnNpHsWBysD37KK82wiaWUqkbbDnPQSz2jbwnQhX2oHaaE46jqN8j1PpkeQNjewRxebwBQdVozh1bbjxu8Rpk"
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
