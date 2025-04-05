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
    "5DGsHH4odnWVNMiDkhofKDaPQHLprxRFnwaMBgFrmVuGCBof21QauMSywaNg1ixXXNDyQZBnpK5ENt1ECYzxSPcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PS3Gz38v8MmhXLkBoswuWJtv3hkGn79ymsEHHt3aGrdoi7Cowhr5WAXPjNJg48UMHHugGrDwHaKjctTAmRBFjMV",
  "key1": "T9hXYvuxsWnafyFk1frPafJ7RYKjfqRPJWeqphndZoVru7GMDsaaeqThfmjySsvqHWSrfa5P2CuQ4qBwPFuPye5",
  "key2": "3yvSkhndNMpQupGaDmw93Sp58grnR7Qx3LUf6mptWhEZ9fxnESnkje2WMUQ6P6ovUenEBX6qkw9GzbuPTThonSWe",
  "key3": "4WhjDeo3TyAakhF25hJJewj8oP2A7j78tohMWKY71ePwDNyWrvjWc3LLhY28XwpPNdsUVt1GuTEriVxguxVD97By",
  "key4": "2tkRu4tXrWHhZvWkXK92H3HL4fJr98ApRhUtkPVQtk32hUcVoSFUcHrEjTmocjerJoJMVBGMVwAUQVh8kEecdW2S",
  "key5": "4pXyfHC255XddggyWJuJQVPmx9Ts5oAJKHRQxsHJLddpDGbMQvHRbtA9hURz1b8rCPWk1bFa4rBE3wN2KZNJhFUS",
  "key6": "CnkthyJuQMhuXA4V8khXRvXc5pH6WuBPX4KTnukjAuGPCJ5RN97sQsWFhYu5QrpaDEVVzRF1dEJxzm2urDYBxoR",
  "key7": "3DKcreevRvaaARbe8yZq3qGtaACfgdyvAfgRNBFZWZSc68U3EqRt4JCPxJQH7Z9roCpCmux6rms23eTvrQUiGP6N",
  "key8": "36AyUteuch6FPJqcBkYfmge7o5c9FquPks4BTiCDDnqaDbL3SkjUPoZ2EAtwSMDjRnqngvosMyuMEUk96vr9puRu",
  "key9": "31FYReozsLcURnimBnjkxS1A5KCK2TawNFnbmA5Turs1TT9ZNKSqpBv3xYz5xK9E44EWNSDfKgFhoYX4k38Mz21o",
  "key10": "88f7LZFNMDCiRniZoWeqP9r4KCQpV3uQr2oNYg6zZAQSx2GmnuJ5AdFRG1sQP5qd4a2WTZM12RbBshX9koF8DuC",
  "key11": "2c1uTrBpeSgXLBpKZyAWYf3shEwqNgo4Qc3Ys1fwV3JKtorFZ62QSQ4rAhNztU8ZqsPJfmDiqYbtFee8r3Vs37yd",
  "key12": "3y8SPDevRt5Ey3PxmqZwgyvd8VnpwVLFBcqaRWKHHKYAywb7fABPjEGmhhRdU9FdSxQumvWSBk4PUHtLqPaJHX1H",
  "key13": "5yoZnyHxNMXR8bVdHg8xodaK3KaJDThvSEpV86FKJTnDaKBmNmaAuxTtmHkj1gCEbEm5jDBCqJypDkCJ6PWjtHRb",
  "key14": "4S7fLMNHhK8w2DLsiQNFPptcTkvEJS7fap3TKSRRb3mXSEE1fw8NNAEBGiNkPw1KRaMimhJoLL1dy5MQWVgLh6F5",
  "key15": "2GYTsjFveqM1fQecieqgbky9T4kuDRhdzpBhUFrot9kUpSmL2147Fa4NGSW53tgxQV3YitZL152vNJ1HAFWcwhTT",
  "key16": "4KfhwFYiMWT7YvHtDTwMDkocMxkouD3rCpaaaJejaFysi558m7YQdT7QPgRi7Xswq68YT4YEYMVaXX1V4SexAnma",
  "key17": "SL1j2BTK5ZyThLLugmh1fw64dDtRhp4PNCVqosN3VvGJsiRystapAipMnb7VLL87mmbhm7o6GB15FTCAsLaR2uy",
  "key18": "DdT6MS1rc48MoHzSsjJkYZZE9TzUDoYUNC7ZUPeqFztpwy1pfWiTBzgemX1sKCNqxtd5XTkJgRwQroCJoKyotQ9",
  "key19": "2Uq4JbYP3Xtma8CrwKiUpMdpbpRxucr8endHs46eNuP8MwQwruH1kwoq5ZHQx1X5Jszu2YcRw4XH5hZ9cGooQa1V",
  "key20": "twKCw3jNEj43Xjih9KHLy1KRT6Mqmt2cJ79Nk9Aw5aFUBwzuwQnnBxM8bi47G9hf8HL83KHwwEwWyfkzeAeoU2q",
  "key21": "5vLURtwzLMsnsJoSJq1VxgWX2AUwLRLZAPVUfnZSWHhN6PMKe7hJCv7cuFthhk7PLUNcHvPfkqMsBLGJAs6Di1W7",
  "key22": "4G1yad2BJ1D64g7xxR9fVXYs6UhiKEXyviEGzL3KaTrtu4YxnjqWmT47HUifuKPTCAgqAW5zHFFicHqg1Qtn733q",
  "key23": "4PCcFsb9yjiAnUf1QqSNzeSpSALxaG2Aq9BWoeQUPvwHfLG8i4ecEEAT5rKzqxiqBNE25yz5wD1LFZtaCBQhqvhT",
  "key24": "4iUy3eL77GornetBifYdjVWs9NyrQNG8NSAt9pRmuMwbaw12JgjbdL5BNFquAdXXxZwBaPy9hiTXei1w92v7MiPW",
  "key25": "5yqZkuGdG2fyLFituYvuKcFDbjHDTLXMVZpfX8uQxu3vnfWfrcAobfMpmCvbE96whAYr371zonRU7YUgfz1ZUPmk",
  "key26": "4LfGFL5yUC1bEBa8D2vTa8V62P3xzhdxMy3zHAh11pFmJPs8r5EFdiKRTykXxZM9G2TK2Th27uuWXm1cXx5EzCp4",
  "key27": "4QMZHZjaH2pBmGdaKKrSLVJ7ATLeTLCqFPSQ6fdrn4uCaqJERkipZbgK2aDdhv2UY9TnnvEfh5YMRJK2kvpdba6W",
  "key28": "bWHyMhqzfg1XRUUcXae1gFHV1KW7oDrYonHU5icKAu5dFE1Y6SjfjJaCgP29APRWRY4XmWFqJMzJvBtp4tb3zAj",
  "key29": "GbaUqUbhRj1Z3c6U4fw8NHHKJrGrDF52x8xpRjR3MNnWQPhiW7SLPsrTcgx3278wpZtTqUXrEqthoY6B56TY8Yq"
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
