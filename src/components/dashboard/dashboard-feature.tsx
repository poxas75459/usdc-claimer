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
    "3k8sQCkzW7mQ454bQrp66aihUC3a1T5XgAGnjXdyaf7ke1AA8RJWwoNmkThqHaJ2kig4g1H1KSmEDdFxKLSngjkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DvUTP5BpXBkbJsxK3DBRwZfdNYYzFMPKkjC4m9RvDr7sC1m7wUy8R54JXr7G1FxVt6vtrbkzob1TTTqBqM5JBnA",
  "key1": "3wCshSZM6qhzSZAGYeDK7DYGCRSKXDRo8GnGdnxnaxcbe38xcgPXLXHowBigJKPSt3fhtWvtNUpUT3kabtpWxoXp",
  "key2": "4r6sBdEhJTpqAhYn9ZEZJuVf8xYBdVtzGDkhz9Ge8C4P9qRpLE7aCxNj5CRdY6gu13nmqXKT14dtFXZb3Ja8XkZU",
  "key3": "59h5ShMKzn96ujtMbkfCFo3rPu7NEJzh6sDFPkz8uWjf23PsXjYHovskmY3DYpxVfYrrHeeve1SFo5YWxFxpmEFq",
  "key4": "2Dij4NRVdg3SzVm4Z2WkRFpR7sBek677Gj9ytLYphZ2pn22QTT4rqzWRSgmzbJAEa4i5H2TcN2vo99LbrjMPzfpE",
  "key5": "2TdVJG1A97QC5GTDEisLUeqdKbxS7mCbQSyfp8mpe5xVYZ9w14r4vHtRaofZGmD1hJCkwQRJ9DA5UZRW6t931dBK",
  "key6": "236jQYFtisxKFfUpfRJXz1RTE2fck7JVmsx2Mch8svDVoHc9PVimek56CwKpx6kTv2J9fpKHrsUZa5eTNiNc2J4Z",
  "key7": "27G5ywki87REvHH5ui6RoMUsxLksT6ByoTFwaWLvg1rWXNr7SpKgDpxqYXn5LcASshCM91okAJmYqcztWptmXtVV",
  "key8": "2QL2QYpHVY1hH4JEbQWXgYT9SP3YAz1GqmcQqscvzDDbbBdUuzh1e7s6oCZFaddLpsTbyvqxzsa7iwn99i6ZjcUo",
  "key9": "6eGJTsjSB6j7F9kwGMrdAAFgG4tJPVMVjCzXED4rmfMZyGHRCyBQgECS3BD2CoKjgqAemmXod4aVxdHGdq91JUU",
  "key10": "93JdUBeXnSfTZuU66yyVJ2h6G7E6BpQw3TuGcuCksBSSffGCsP4ELdrfRhqBtL4GNkyhysGhAMir4rRcKRyvCJT",
  "key11": "4QHciCxu7NBfySPhV7V3irkidPcSANvrQqAfFn6rqGxdgVsDurWnRBEmUyzLdRWgotXyJ7Ew9asGqj3h3rymVjUH",
  "key12": "5GibvsPG1HMuEXCnMGzWrf2g4RcJ5eSo7XSx9udFpKKUCAL5KRo1EhdA3JL61GsEhxPBe4Y2M5Sxxx9zWLJCcB16",
  "key13": "hfFQHDenGRmo3JVwF8j7tiuXnYjknERnnefRsACQv78dsxK2gfTyM39kRG8N81CeFaWomZhRBhEA7Pry8kwS3Xb",
  "key14": "3MMqZfj9LZD1mBz36q6WN6Utbmt1K17en8xRRfph8TJYoqEPMxdxhyaUrC1A8nJfSDkdHJmm2F86B2kZwa6Ft4h4",
  "key15": "Uz7yyVRhY58Y6F6HqrnVnro7kZr9hChQ8qRWYpnvxYfHQ8ypDxAiF93X8vMA4i27zEi6bFb2DMgwTNgLsUQheCh",
  "key16": "AvFQ4M8aeKnPps4tKgEhppcaQNzmA7wbSr3xa4kGECvqvcaZxvDfLEGvMYDAPhKxbVVtny3FEcayYsC6XGesqC1",
  "key17": "3i7UZJ8hWVMRoHraLwqR6heCGsuzd8TPoBxP6CQginGy5VYwS4z1kwJJq9sfqv1sXiYGrj3iVS82WyWBYsP6Z8dg",
  "key18": "qHk2Up4tLCqHBzQ9UEWBsZJwSKpuhpkSCApGaxnMNb7sNJXbru9xogPrWUxMPjvKK2crdMfxB1XeB9CQCtV7H5z",
  "key19": "4PbQnCcLNFD9CKAfDZSniFw4qHbsS2yHPn6vj4bjTY8tHv8P1osn4nbaGeVzwABVGXJRrPpUm4Y7bEM4j6PtPHVu",
  "key20": "5GkoMUGiqj1DcJYrTFJLoJCQCSpX9w3LPk1LEYvnaqQdXBgJMkxzCNcaiYhAbNxrpp9diJX2E2uMLHtncKCYJSg3",
  "key21": "555qzvpWD1W2zVAvqPDFtH58H3TEHNFArSf4NLe1kdz4Yg9tdfZYqnmzhEKEyxEm4WrikLfRVnQLzi3as2x5S1Pa",
  "key22": "NqbdzrRsL7KURbzc3rriKWmN3tEwhvvsRwu4B6bqJ7gPgkFyq739H8wzuWDrhFbWinU3f5HqcznEB6X4ScqpCbq",
  "key23": "57aWgW7zghMdyqkRzkm5J7uhneFLU1kAHReswGBK4oMWqUZY2kaNYmaPnTMp5j8GgAcj1KqAVJu6yqjXEzej1mbA",
  "key24": "6V2LLbyQ5FmV6StfJQ1UDHYrYguUqUaB6GG7o1RU7epqTooPbNw4qLhR3Yez1Hf2QLYMECtnteTzLziNMA5kKfu",
  "key25": "kQaTghRfw5a75sRMgMMcGTJcTia8abr8C6sxg36hS591hNhNE8BF5TxSkS16p422G4f7VfB7pL1rk6gJVSu9ovM",
  "key26": "42vDVS2djT2xDZ7d84YiBnVvM8CnKfT43mNYwkj984FdyEGhskKEg1poCb6kjzf7ouE6aUv8xuQuH8RY3JadF8VZ",
  "key27": "2QujRvpeWdh1E7nAjFz4zoV9d8mpYQPFiuRvGAPgYhyCbcJsKzH8Zmpx2VSbUWnGkxMfvGjsUFPpLAt4FVwyk5Qe",
  "key28": "4Z6mwFV3wUTiiNwidf1Gv4N9piL9wjzbWGgziUpm5BW7y9Hknq3YRwbUdpuMxSsRzG28fX1zsAWZuP8xCYmtgczM",
  "key29": "5jruTJmejQ2crQ7y6pfmz9Ec67SDLDkt5Ef9VDvWzRkU4fYLbXunn6AcFM4g2gnzcAX5YBzSaZjuTbNCVXW26XFh",
  "key30": "4xUBWRAhRsHDqQugE7ChEnKTUo6tDjK5KUdDMV92rpPAjfGb2zVy1CBjSodtnb9h2uetYsqfabiwiM82nWGWRuZt",
  "key31": "66i8TuPSxxJCdvCLQDbp15yJbXDwHzt2YebWQGZZZ8A9KgMPbwP4ej7grNuJM389dCWjPhExjcicSidG29yTPHKB",
  "key32": "5Ckh7Gd9uNAmN31eqyCxSfNkfwNfZsdhHowCosHoBYE5aBDebAvWw4BNPkGHXJwTUnnBP8nYWea8Sj6LAhiHiY6u",
  "key33": "5P4MCwjavpKcsjYqivT95V73V9ncQg8ryEb6ohRKvNbKdhLEyL6DKTSsyGd9nKRSof4eMfJYNUBTFfwSoB7DxFS5",
  "key34": "XrDzWTTdkBGbNHFnDmSZ4VuDvAPD678G6yDGpCUW6jFbTB7W5fCpgkKdUAsyiJ2kCpZFVNJjCWNEt6HkeiS1QAA",
  "key35": "5z9WfuRX1R9Au3dKy4qpAs3zPprZAC5jZ1UYwDhWSWozHwLc4feLuJ3QnL9sf5aty5MPGpm2FVVp9w6udBXf8RFD",
  "key36": "TrumTbRNVEcJm4u3sQR7zHVpsdhtsEh4wNh5RW6VQ58YjmSP9NdazvhyyAvG2K4uKw6xWdsExuKuipVRGeVcZiH",
  "key37": "2FehRyntcdSPRRXJnd6RpvgR2RPehe46KygUEHnmR66d4RwGRZT7HCpNNnhFMp17TUvFda7KEFAhWTyHUVmc5ZXz",
  "key38": "47YRPpGJVETAzwH2y6MfN4XRj14jvr4WwixUysxSsCwUY4DECc5RX8jAWPt9PhexTHq1T67M2QtxTypmaFR7QLH4"
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
