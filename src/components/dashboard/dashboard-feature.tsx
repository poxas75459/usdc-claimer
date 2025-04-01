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
    "3Tz4nvsMHS9W1ufYfawneZyx6AbhNQCzXvix5KjDUh5wMDGUWmeABP2U2sNGrarH8ubvPsmWeGc7UdBuBJAW8qf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pRnPbFivhUpzEG6koLyhyBPsFGAa881X3v3Ptr4wFyoBohBdEkajppx42ThgCCVh9yxyhiKqM3A6EYUZ3M3eXPC",
  "key1": "27a8wFW9zPaiEkorqSPtzes2iuRrJi22hsxyX4begEfWu8dXWCk1YxNtoAp792RiyM5EUN3efqVoJLAK6NeNN9wS",
  "key2": "5ZPkXesCfCHpiKMNrkPzAdF2LEx6DUfyvLKRnZVzVKG5yDR8S76pXnNC9wC3ZWkprAoNCtviS5KoEuiAUNpT7z5Q",
  "key3": "2eGAmX6aWjrHxQaKTnuAS656hkkfmwDuVz2uGe66q2tj5V3g9rrCC3Qa67C7WUXUPK5tevQR3mQzCMQMw68fRFCU",
  "key4": "pKSq17qwBq5h56RQtdqs1UVCWuVW7YaCKk7n9bPJmyEvkFVKkpcNxC3mGWiDfAp6nfhz1noh4wi2zKHoyQMNcy2",
  "key5": "EUP5J7D3F4W6KHJFBfj6K8X3gXVLdzdFqZ8iyqG3NYwwHPrd4MoDA2UpqfUTbtfQA7pgqvf84Yjqs7jErLGcios",
  "key6": "2FBk4tpB7UZSxwxTyRde4LqFRs2qnaW2RJd92mSxS7YbEA9UcdNx22vU2MPi76qkHqC17UJnMqjabPHCmebMvwV3",
  "key7": "3WtrvQgyPFCNGkkz8qsFm7S9G9SS5FNhdurgJ6Vbu858rZqn1WoFGwUiJ6yjskRUm5kGJmNZj9mwXpFjA7i8TZ4b",
  "key8": "VLswhU1KQHSicgER5922y2SjxDV16bqZzrfUjejHYciczD72aaeueNvLzuo4tAsLK2tHfmuBewoweEXLad4KpLG",
  "key9": "29dvVmxFyYMTcNnWwfWLoAC6GiUDEvZn65pataMu93VSd3vxs1e8UvNskikF57bpNztejrfnAsNunhC9Qdpmtgiq",
  "key10": "G7kZKQ9g8HoTnaQcsceU5kN5wa1ARmoxcGbhjFBZFxwNjCrqYbqTSn4PSaLbx1qwybaf5M9qrQ2x9MxGtBsYxC9",
  "key11": "4uzH4j48CSmrqQRm3TPmArxboV9F7mc8NdCWH4oM7891WVACgt3JeKD9G39Q6Gvcww2K7pKfjY8znAURgfiiEjcH",
  "key12": "3b4xx7nL5tbT7JF4K7EhoU1AK8AonD6PQhqhbVzbCZgxDyG8m6T9qfLiDvEnvjFc2pZ68hpFFhA1SeUVuYeCvW9q",
  "key13": "SiXsj7JYiZrrpSmJoJW8iDjckUU4b9NeGf1pXYjSdvKRhGpSRezwzC3jFnyv4kpJ4B9rW3xP6CAez1ktmoHb49K",
  "key14": "3HwmaPzQ2UCKJiiSckDmjtdNg2mE8tuwNcwkDXDXAkRpsPZWFJetQALGf6FGWJncHB2NKjkgSSuTo345sBj3oxDo",
  "key15": "35QVDTGjWtiJmSui8msBc3SpLx6F4q4tsVV53zR487jRM7rvV2zmyKfbVDw5n2NkvyuNm22W6fpKDrb3L8Y1JBbV",
  "key16": "3tpTAZuCy1Vs4hBXEdMnVewyKFk7Ha9m7UHksvEVZkahNf59tPj7HKkcqeA5xJSvArf3ByLXfphueG2c9AqT1d52",
  "key17": "25vDqV4rbzHJV7KjXLV8m8Zm4BFbjHD4FZTB3vYGjhRWFq4h2Mu4aT9Jcow3ebS4FE4cuFxihNDEiZvWtrUEG3iV",
  "key18": "tDY3s1ykdAPRgpnHY3jUJPFL8yEihHrinBWVyWtc6U7NyMdG4atSeGW7b22wenbV3DFZRHRTGVQzvViCHtTGUN9",
  "key19": "NzHgrrmoW5Lqsmmxvro6E1vSzLe4HtFMhfr4jmmjxhxkYbuBMPTtjmBqs5ET5gQtMQYFWjoaDACz2rjad5Azhr2",
  "key20": "3v9SgEn7UNECr3Xxu6sg6YPNr4F6LnAwsRG9tfn3href8na1HruJ8jnbUMyw2Kbwx1YeahHwuCEyWY7KgnU63jw6",
  "key21": "46ACty7v4xRFsefBGU51fpz8eQdeh7rqLRj1eJFuVNEQXnJABJzwGSHk5EPpdbsXGVkfz3QFJg6cFJ9tB83Zkc8B",
  "key22": "2DavrsCaxMkt68bsyNJ4S1kb5msMZtDnkBKUFF7YBYiVdSkUeNvnZsgy94EoBm2Y7Z6Y8zgqVKk4RhEq99WWSKGL",
  "key23": "4V7YZg8SZPLWVNq3npd82nHZsNFKcwoiwrwsxQA9WVRXTqonRGpyTJS3ExkwrE7VqdGg9uXmYkUVNLcSpbj2dYgk",
  "key24": "5xfrzhpjXW3Cdchnq2ZAV2RfBeXsPyryo6sZpWfY82cLd6EvVrkyq5ND9KxsX7wokgQQydB4rGRxiN728fQXX5ZA",
  "key25": "2DxMbuQ7hjQv981KWtkFVcAH8QvwabYcf2FTWEwnSYHqa69nzwp7iFZaVnweKdyL6VEx6idTkgGPDZ9zSrHwJHUq",
  "key26": "3SFSMEfwtmP13xBaBXaPnMHTLvorKCDKXpKEySjUtbxCECdz1EMYL6qp6zBeqSp2ypNPktUSqusWWJJNEjwaCBTb",
  "key27": "3iUvGGncyu1eQ8R1kfKkNqPmh7cPN8D2Xh6uJ52Cd1CmRYnVykiSdP3W7tWsFaUqdYDfhMdY2Bxf9w9WEzEVbdG5",
  "key28": "5yckTncP5ihS9pEZpo39qZMjaxjwMx2ZNq1uD2Qf4VWq1NFifioQHi9hwwWPDfVQ1Wf8pMf3PDq5V9DmjSo82qWi",
  "key29": "mfNw82X3V3z8Lsn7YpA6WcKrvuJxSPqaG7SPLMaaJL1NriMEEbWcaxteJkRRqJVWmTJkxWchXiDF1DRZQK9Nx8c",
  "key30": "3QadV3YTEGvPYnqm3P57Edtojr95yL8iTEULQSXgLPreMYTctk25VKGKvjtCQqpDR46CSgvhqbTay1FFLQGTRq86",
  "key31": "3nzCfJJSXJqZkxvGYLzMCTXrXFkExDMikRs6ZBkFKpdzdTnA8PfFEom6gbFLBkupwNpqf14zEV97NkQPAbJU45cT",
  "key32": "4Gnbf14NDNTyUR1pJAewWxA4gPk8aAezhrS8aUBY7G8cLpFg3aJWWWsK33R7bxGPHrTsK7z2qAYyUjmPehV7yWf8",
  "key33": "29AwNZgLRjAriZ9pkYJvuePWx12GVB1ZpoapUhUJwXnmR9iXpaLM47f1xPLNWwzFbHguvfU4Qk4VDvyavam1yu1P"
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
