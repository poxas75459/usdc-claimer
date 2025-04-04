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
    "4VM6SSSZpQnHZjASnZ25upteb2hheaKDi62XSjdmeYktmKu6KWkpJP5mhkLHF34B68CJi3CFUuop41ZKQytXb6aP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wGXjc4H5wJK9Hjmkacc8evVYazCWQt6yKLKdoR8ocRycssiS3XBUtsiDt5jNdqJhfXxjLfZnbm4Qgf7iAGF69Fn",
  "key1": "5FhnXEgcZ1afk5ap4vYsPoMRQ6zwRxE2JH1JYxAjavV7KM8KSwZZM8WHonRPPoSTVnhXJ3h8uZ2YtUxxtjw2b7BE",
  "key2": "3Leb7TAC44wXMKNjdewvw82q1XHSktXVddcstNeYa1jvc3fQTSeMCK4wwWw8MehmDnF9ReoJoU2a4LCXTnaGJCxs",
  "key3": "2NReSK2cjXaGycKWaK8PwEWzJaSUcMKwV2nMrLU1YQPJLTn3mqW2Da1jHTkaJM8gM3wDZ1ssRu1M9RH2KRLU1zok",
  "key4": "5PwxG3UbtASE9aRqwewp6owhZfiuBdCQbrZrzSrbfuka17Mkw9q4sz1kkG5JDTK8LLr29uY5oLJ67WTimP683YEi",
  "key5": "4wNM433yXDjXRBWZL6A9cfbY8qZZKQLMXGQogs4HrRKGRjwz94wudTRrEx3Su2pGBH9Y8to7NkfVcrtJCVouf8FR",
  "key6": "4s76JPRDp3ivPAksgidbxqsBaybEeTjGzEA1K6KomaUTHaLUiGZL6VfvYSmFzGtiE7tS4uQTUo9oEHCr3RZ5TgBF",
  "key7": "4pKXMyxnepQYMme1tmTRC8eWdqD4eETPEkWvSZRjvcmE38ZxVfYZAHUmSmgTFd5yEFRJVPtqRwmwkLyQrSvgGJvz",
  "key8": "4AqTyEUXXDyztGzhPUpKJSS6WQZnyPCeUw5X8YNrxUnk99FiPPBWaSjK9obcrJo7DNPDQp8deeKUNyL3Qb1CdQmw",
  "key9": "4PpmPJaQaBtvCh2f7pLy34SeywEwKVjWZ2hWEDUxQGkqzza8fG5ZpggmWZUEfAaTeAM9vyx8az5wXchqE993sE8H",
  "key10": "4QcMQb5peAq1d5m8P7tkuHUFEdCCfTKrk5Ksy4bsFDAia7Y7751eMq4K5crALyzBAUowtrmLk2ieAHtvprk5KEWn",
  "key11": "29eqqHzGdpcZ1ZqgofJVRBvkwDTaTw5ndFchhjysLJuL7X1QXvJ7henNKKv6zvsj9ddQphpjS43wmu62oM3fsyyn",
  "key12": "3btQ4jAsx3jSAzhHGinkWecjiarvGsMunszd6pRA9GwngvRGJyTsgpRZieUXHDbVdaWKTbS5L5gMqFGJi28QJvgA",
  "key13": "4c2R6g9r5sfcQA4ADZYi6YFeiNZCXujRDiFY3C37gSvwRUU8N4TV5kuTSb5YWfEFQ5zhmbW8uDHawjtajqsrDeBc",
  "key14": "3xvaMk6f7eC9VMMcWvBW5PcfwqStSCiYk2jUuqSrxWpYjCzSWERuUbnA1C1i9qwRRq4xv7cYRko7UKRxB4bH858z",
  "key15": "FquqUK3CqHYeZPXxcqkykAf5JBud89ykC7g8Rcdc7VGf9FnqaY9f4S4QHpTJAcFuXHEs3gmuJ4xmyK1PFZbXiYM",
  "key16": "4VqXSPcyucN8YEJhVQP9HVGaFkjwK6eeyESgGoBydJdRMpEp7qG8iM64gXrJkYxpQv6nX7HnxCEVmrCGYEBuQB29",
  "key17": "2Nfu1vMDsKurUE8DuCidm6QjR4U4y3e8tcio9m9T4reCcgcEUZFGveVLJFZzXVbA2xsCWkyecP4zvLJX2BXkYGiV",
  "key18": "5HjeZGypKXrUUhtGtvBK3TwGW6eyRYks6YJB92FXBAnKeq1AjPErHMqjHgyEJkKbvYm1BgeH82t9ac8BrAczVxdo",
  "key19": "2V9LuAPL2fzDBWZdWN61p3nFJTks8qcMw8SxJbEhTrUtiRx5pHSpmiBhCnWXbJWyenppJwxSoQ543yyUJcZt8VMV",
  "key20": "3ywJxbaQBGPikFVeZkwfhs99eXdADA9JPW4oUHzH21hhmg61JNrmwByRHW2rQ1kQ4C8DuT9Ts6kWwfp4YJwNkqsd",
  "key21": "4nXfsVScxuU9YDDpE2tSoARGRmKxBCNnyvoBueruVetL5dqAvT63vpEnBG6JtyRZBpZUMTTky2s7dNzhW7d1sf7f",
  "key22": "4mrwT7AxrPYa38M4ZuSJYWPjZjC5CtfkvwTb7eDWA9U6nxMUQuiC9qv7xJrW4ywtswKPmcmEqFAkU3HoSFArEBbC",
  "key23": "P9eRRmENbvV1Y3BCzmshY3Hz6vzLERPC6ShipdNZyPhUjbny6JhhhPur4Fjy5PguN3biufUHLb2V8bZYp4QSz7T",
  "key24": "4Tt7FMZepLCGfTsoYiK3UjzbrsvnFgmEuBHZKtUqVnwU5fiXWFnf4tYi4hf7ETc4ssf3qEBLgNWHD8VqZb4EQYyL",
  "key25": "Sf7jGCfTvEHkwzX1UKDGTZCrk7QchMHjrLKwsJG86xzhNLzEKrakrsWyMxzbsqitm2E519ZUJZm8QP3d7HUM5rG",
  "key26": "5maoDFeGrcQ6JCVsrHH4ggcLfYqzvheeAJiU5C4zbZskCsuM6R3CEzGMh5KNXcuXPvSPJeMATZvo45G2AqwfQqS9",
  "key27": "5Jvc5bZB4Boh5txyo9EV8QK2o1bhmTpsXWMAUGKFxzY9FT7zGZ7N8wurjnLsgLsDtZ4aPS3GKr15tnPQFzGvxSdW",
  "key28": "477e9je16PUX43yskxNsbr3Jk6EdWQqktw9nhPjssvDeofN1evyuQ6RgX8paTRjRCwKp4E6NqUjmHCrThJpnh3D7",
  "key29": "3RiBZJArpga4VTXUivTTnF3WDkpuadgsdVeWbKYko9hg6b9e2n48SCEwjx2F6mHggQsf37Cp2WRtxMq5z27RKT8c",
  "key30": "21AUZhHqBPcburJUVFzuLASHWvGPkePChnuii1VdFiX8m9GriMSaFt5Y4WFFyJ9coiadGpCZoifFoAqssPHqkQ9L",
  "key31": "4wm4eHWs5rxq3gzM8DgVGqLQLZyrJTJHTYU14zFyD3nS5rDQwpd2mjK8iBL4h4jEWMNkmgH7ALv8uDjdX1YXExLp",
  "key32": "3UCAbcH2Bqa4XxuHC21NwNsjbXZkgnsLP1mKFtuLRzCTMVJj6EQZwRQiu59tA4MJULXUodgV7Aerb3VdHU377Wd5",
  "key33": "4sxQsKHiY34pBCYg2hoNXcUT95CQ6w761rcxcxey3EuPQsQNGDwVYuS45mhhBoE4cQ5p3iGbUD7f7bAZpsfZaRWT",
  "key34": "4W6RfmWWrXVTiLmLS9C7oJkzi95t2vrSWFa2RwkBfd1dhDfCeYkVtkSC2WFoFgTTpwHzMwfGZbECxevWFP2FNPwV",
  "key35": "48ESV7f7x7wLwFJdsJe5y3MmZSjQtYj6JzUKSeVJTegvaaxwANUdRuUX5mE8ZbNNJD8kP4NyYRd2xpwnWT5UWw21",
  "key36": "5TS3uT5va2xZrxV44wiuBiRwsD9RpwBy6djWa7Wv2n77Vh5JhXbqcmAZPQQKfDa1L3NWeGFowwYzbWq12RpDg797",
  "key37": "2pMfEwNJTkyvW6qbeqcbz1qr7oMPPxaeLuFrXWeTMzAGzG3ngkXcCWCF7ejyzAuMb62J7dvUnwL9yMX4G3ke8VBY",
  "key38": "5YyhCdAwy26pjXZ6EyKoD3VXd8aCE9TAFMqtLZchQ27z5PLNdqsuZzge9FStMtb5okUs4U37Debxk4TSnUyST2Rs",
  "key39": "29tZgTBmStce43yqfbTP749NpE7jfhnfaBQGbNUp4BT5wxavg9jPAaaqajgB2fzE3RwiouRXtPk6vDCXHHg5e3uw",
  "key40": "iZCRSbaDLaz4QuCJXEDxMYTxxL3mUJi4QRh2hCnbDRtLCZKe8f95G7jgycZGY6YKE63iZcQzyyjTE3vVV9WUKsn",
  "key41": "5PjgYjr4ymsUbwp39iqKVaCzmDzLuwfrtF85Zq8gjAyBewNpLG6E3E44fKYdXCvd7C8hFj3zXYYJn7szRL7cDCGG"
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
