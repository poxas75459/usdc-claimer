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
    "2N5uzQw9JeM94i3VX4GdoPzJmBKT1Byp9v4H1sa2VYtNcJ4qJqfrAqVFd6K9mKBw2no6sdxw1PevkVq3irVbcu5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nxWm2XRiZprdVBTnxxNuV8AKZtugzEUKbtbouGyjtXNLvxV4Y4qCS5L1CQaanFcXtGQagbaJ7ZnGeqwqEq7ubqC",
  "key1": "64waRJzdT2hiAKNHHfP6AsejdCpmxFAG9JADZcM5mjaeH5c4gKLwRtsc8gTSW5R1FSBUMyZygz3JwH3QHxvDxNaJ",
  "key2": "5cGct2gywqZ7NQGccVSxptaEhmWZePe8g5Y8HY6AAY1FteeSm5cKiNHXxnsKngWfqs57Twy5n59sDd7YjPXZKByX",
  "key3": "EB7vET6CYGr2q57nXaSJrjjFnPpR4atCBuQyfduLNJMUKgRif8MSjL17tbdsVHhuG9RozUfiHZ1DeukY92qqzDL",
  "key4": "2Ldstm5NZm69Qv2D8rmzf7AeoanRXnjb2wUVxitqEH9CJ1gxbMbQ1GnxGn9Z5fhygy1vtot9VuugwqY4819cEBgx",
  "key5": "4rgr7bzYczexJaZUjctupS7b7f6QuKG2hJ7ftExC7hyLakMzfJqTDZbniNZRbBVRfqpjZMKfnjHVZ6kGgi2xkap5",
  "key6": "3XTSvRNhNV5cChgAXMCYiJ7QFsk555im5Ugy7pzNied9MvUK4YHv524yQJEQMk5oTzKTjGNw69uV1yqrk6VS6J4",
  "key7": "5T32BAhqgTy2wcMjgxbndgHmWiFeVZWtefSq61U8curgdwgikWWJycbRSoexdYDvQFHyxBpCo59MuHa2TKMkPhqj",
  "key8": "2icF9ePJk6j3LDgofyd7NEMQmgfyhrMQbLbgtuaEBzV9RDqTjtVRgAnQp49uRWuUk1QDhnF57fKDsYkJDmTDx9A6",
  "key9": "4dRgDxWk2XbvJjRrEEmPecfUZaHLorVyoUvfUMse5J6mT1aNkGiFkh3EVAJ3YqQZz1937s9haCkEiea6xXxruBGc",
  "key10": "3cj15XTmpymbVC4bbXTwqvs1ckDRT7DDsFReTsxmqdFcpSWYFYAjPBrjc9aWSTNxmjf2BfhLkRGzn4hUZP1uowuZ",
  "key11": "4UoELkDxbLS4Kz7AC8gigw28JfHbHN7dnhbZ3TwMmm6yMNoaSSbmLmjaQUQG71N3b8cHY9cUDRGJcpcKnoRmMcvn",
  "key12": "4HoBBSdjPFb57uEsmN7UUdz2PW2HBaSeG6hPCMamYTkjBhCyfDKRRB3L92EPVZyRrr6kXgaQWX5UJekJudPeHkMk",
  "key13": "4i6RkJ8sGKnWL3BwVGyqCb9P6er3zgqCXsK5MJ3Y9EK5WeMXktX2QBjAnTNqr7zNjxTfxTC3s6dZq4P4hrFBkPVL",
  "key14": "234q9RCr9yMxWBHt8TZJn45WKxeUJAiHED4b3EjPsDzRk96tKfsQwaLoT58kUXf2tWCy3swgaGw1BngPiMC4ngTn",
  "key15": "2vQiCg7XKqneWf2zAQJdo6H45yHhnuZhhsgnUhVDmz9nsiWeCpYH8XRgfUFgafbcfgopo5Lmp6rMdC6VfkJZ7LG4",
  "key16": "2q5aNSABwN4d4t6PgHtf5XiDEPSVKKzEMsEEFFyji4q1rQFwSNEyVwjnNThEjnzxJgS7Td9CsQAFUnYyCsr8vvp2",
  "key17": "4a3fo464onZNCAaZN19PTmVXCBFHevwEGANCqmJehr7B5HpB1qZtiRbxVxWmFzznF9FMJfwKjB6UpwuPNpzkErcS",
  "key18": "5ZxV1hzBwoss2sJaVX1vhueggGAQt9RvkiHngokcDaeyZQ2GHLjioXnyaR5Ev9NeWzJVNngaRyS9boXwpiP8MagL",
  "key19": "32Lx45cANsGvRUZKStTVJinex2m2grp9a1iA2Pjgo3cadJziaPX4uvqaMoo7yR94GPntju96ZGKtLV7k4hrXzTpM",
  "key20": "vYbBWzR8BM8JJZQaczY1N6LzYzb6LpfJ3FpDNT3b6fdT94HdsNe2Y49HrAgeGNbqZg7ysKPqdShMw4fu8FABB5J",
  "key21": "31zCJWz5c85uhYwDE2bVqQuns4WTi8h32bzTMnWu1gMLVdofsfvTA4z6ww6YGhgEj4Kq1YezzTGhz8m8gFaRUsiR",
  "key22": "47tEcEpJCpXGxKmYhb4o9y2NjaKjz4sUjd8ZYmUxhyUcKXdZPNVeU9fzMZWSSRW31pE49ZnPtyTnSN8aKPWaEEK",
  "key23": "8Scr5LZoyYFY7iYrtc5Vr7J2a1dR4xQtCrQjYV45S5Jfvm2YoUjkf4wThmcEBfmqiQcA6bfnGD54d7n718rjpNy",
  "key24": "sv1BNeRqgBpwXeSZDHeFqbrhUJJhPtbxEn5jcxCHLE93Ls6cq6Q2wDf2c4U4geJtSuQGRqp7He3P1bLFfgdmYXV",
  "key25": "2JYU9FqCq8Li2QAXXDaYKHJoPqkon3jUsDDi4x1ci9YGirmBxXTVYGJ26dn4jgvTzQY9mHePr4jJ3CnocccavjMD",
  "key26": "6aNb8TuQQ5xrMCjVbVryD8urXNggQQxEZYDEhjGP3PdKa39BfJQCY1DDGh4vKKxLjZ97dCwWX45Dyf7NmEVhXer",
  "key27": "4H9hYid5y4Xn1PV1KvnsLRDHACwfAau9FdsVW3S6dB7JqDtxcBMcZgm3o966PMC4DxPttbZhNWxYx1JX1cyuwrtE"
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
