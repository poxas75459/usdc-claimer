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
    "gB71T6SdjZkSbxkb4oDBagr116iLuCT79ZtmSrwBWKpn7RBKBtSksEd2vyuRbrFUj4y4BeaVgEccXCYDYrQV53e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oxpVSW1fpUku1vMmsE3Hh8RSvsqfoyFEPfRNPg9q5v6Kb3jDL9WhXgws9aWYtzTYHT3ETpSh9P8BRHsKWHnRzJT",
  "key1": "2izFWZ7WtGv6U7mS9NRh4BV7eurnLPWgPVV5BkQSqCs5Y3n1fzuxahJgwXcRj8FASSB2XMcAC5xkow7e9gPmX77j",
  "key2": "3HrnYqRjJSaYnZ4vQFiaf1fTzPgatCnWd96wKgrYM1XeBnaqxHxg3gABYGy48jmRTvtMqRVwaUzwEMJSqnfExcrC",
  "key3": "47FHLWZqF9SACygowX3Cm9entjiVx451cFz1fPsD9WoTCqYW7DYUv7G8QPqudeHf1rgLYxA5dBz414AiSfNXd7zH",
  "key4": "4waNUMQsZMmWJUbEZBnzgfbP7aJwFNGFqSWxm8aTQagEb2T7aHerQoZwsav6WE69FvaN5a4mLiAjwQhYBFYTxSas",
  "key5": "3kk3TecVPrxJHx7wnL3NbbBQQ1DpFvzBNLCp8dsVSB7TKvzEMswLoFfK8mFpVWM8yeyuRNgw12Q7QgSRwtBaybSA",
  "key6": "3viQj62xNLbSfEUWiGaBT4YhKFRazTdSZms1QGx5FttfJ2ijxjMuyW8SAKZLZDw41xefhkRxJEsoTakhikjuZzcj",
  "key7": "H33acXHdTkdy4hWPAxbHzHDKZ7bABpBpJJR69BQaHzNFvPS1jp6wTD5rz74LqAdu5mx1SE7TQqNJDD5UQjHNx5s",
  "key8": "2XxF7iuZNC54c6ukhRB9vbqyQ5uvDh6eB7JpBGHtFugcZuTn5a8sk4pK8Cn5VjbC6aAgxymGMMDQbmCShRpz6mai",
  "key9": "5NnxRTWSWbAoFts8CB618JWqaF6FzK6rHnS6fFG6ZqCdeu3uVoH6HWGVSc84Lcdvnqtz1mE3nctMm2N3xBZYgzjG",
  "key10": "eSsV2WQjhNWaTR1umyA3hZQbcHCFpFxebN5MnW53Ws5ucJLrbMqLKcWByg4symRBuvYJK4s4fZhRpnfHxPFGWMU",
  "key11": "ePhdbqq2LAMSBRdF52FAKQw2F8gne236WrU4D5nqfCt76xajKcdLPQFBcad7hrMUSmHNXdq7pkxoFGpmdRMf7xV",
  "key12": "5QsPH1vQZHR9tH1SwfUoR2Rxqp5jzrKdAfFXhePNausGbYgwM2DFjnYRz3fXQPNVvTWVutM1s3d3weJzs8k4at4d",
  "key13": "3ve4VrHPiVQ3Dkzd4JVmjXSAcvTxeabKWrxTY39uUiqmrzNdf3ARuKNwN2XEZedvSnzodiGtUfFeEpT92jK1D1o7",
  "key14": "2NJxkTpEEXQpartSz5UxBKEyxS5pTU5NNFbnZegxLXdm65V4bM7sUQW2d4Pn9kmTVKwxQG3GnxMqNX61XtWB5rCc",
  "key15": "2JoZxssyN2Ra2NWm7aSFj2fjsXA3Utf9yRSxjyypLEByXdjRWE9FYc5hDudPLYhPetezcEWsQvEVNhYfr6JMiLvD",
  "key16": "JfBJHRpf7qGaTMLgfBRR92jkkZaVf1RqKJR8bqrbuNZtveHJmdeVXiLVWAcVsoY7LiSQahdZ1Xw53QFCTtQdDuo",
  "key17": "2XqcfEoADyMSiDJ7DDfSPemd7UAT4pL6FiccdVAvy6iujmkxKuzyFnozzG2XHKMEwyqKMudLfmSvdTBK5SNpbrvv",
  "key18": "TmLu6Gio885YeSBfJDvjpP49p4ebF3HUFuyAzFgdz44u8DymrFV4KaazxPUhXzVUgVqJ5zYvArAXGcsvAS9asoJ",
  "key19": "4zJiRLw7ooofJWjjqQpyjnr5JQmfTpqUT91KBcFc896T59YZcyMLdbzQAKYartfW1u4tjgf33swYe3PvriJyQEmT",
  "key20": "y9jqPn1aHefwTdAvTzbarqRA6s9rZ2q4hizR3FBqe2pbkRzyMv7dvjCP6Je1J1wejJSePLnDKsEKmRTPy2JFkyA",
  "key21": "2j5Yw7R8jsEVmpVN3pNsUokQdXoB8Xo2XdjxjJN7KCqgGxvZfRzHW3srmDtqJaBZyqniyAiHSV7aGXG4JrD65yPk",
  "key22": "3rvJa3DDkw8KJQBGy7kUjKYiteyfSe1cya6q3MPcJMzZ1dnoo5XgBKtsyvAAaLbLxHuwpb29f5mvYqQbUgv2GE9r",
  "key23": "2bsUEiVTy2BZw4ziybDCetLoe9QQUTVoEWECnXYjHTDuuyGRRDpdKaNSwX3fGZe595DX6wk1CXvuja1W27DdEWpj",
  "key24": "5aHw84Mztst7kZJLEQGrFb59WPcuvzz34kJyRK8gfHAwD86QESbCfB6cVVeYTLNm6APAoKq1N7uVuPCwi6eUCUiU",
  "key25": "tVUvBRTc2yPsBiTCrWRjSjo3R9tFzZV3hSicsf98Bd2TDbDCN24cbQ3vSzuKGow9iSurbscCV51vaSvu4Q6gr5r",
  "key26": "3F5ZFRAdiciF1728rq2PRsYbNpiVWrSLxpnFEZvDDVtyN69JsMkHLDwJFx5qiRtym9y5KBnCDnC9o4XddLyaJuwA",
  "key27": "2bScsjnAELXQydcP72p6QkxDMTKi5Dr4eLE29GDUAVBmZEmU5WUUBDxktXT7qHJbHrB9JDL8AFAQrAKY5hriPN9J",
  "key28": "36eCz8GaLeMr32qPBVEwmf2WaRYQfznbtKg2xjaRp5a26mkYCkL5gbhKVzyVv2h4HCnTfuwJgG8mZ6HpAN6rPRj4",
  "key29": "5E2WtLNQYFC75ZtJfMvY1onp5vN7w3MDJacJDgqNAeyCLR4kUs158vXS8vRDt4cB33b4G1dzCZFFh5eVZLZS8zHK",
  "key30": "2hSPSmhxSna8wF3CYifZzaNqtkbfCBS5Rj6xHMvabmJeb2vjxkP5HWSrzxtWGiZsk99Vxn9ka8gf6Wh2sQjp9Ai7",
  "key31": "5dni8UkcfHQKQqWgTcdGdFUySwWBFvJbEHuj9tTgbY7tBqXEUD1GwdNDkvS4Dc2FVKiUnH5UTwhd2Ud1pKdsPfwF",
  "key32": "WuqUH7fvGrzv31MZcwdYcBJW3cEVNmqju32aTNrFoavXWGFPyzvWeu3u6oXfRRxJRjyUVnpoJb353VF3R3kAzrC",
  "key33": "5ZsgNktWFVaLLMBzGp3a9FwfUZKN2jv5v3fzbphX4qCiL5yviMg4mogEMbSvAk6q7dbqHbPvPtXyt9tQrrwWh7Aa",
  "key34": "46inNHqaiogFiiAqsYUKj48TjTuVkfMojLtekfJUnKjYEHqBdo42cpHvQs9PrUBTiKvEhZuqeEMV7pK27DoJSmK6",
  "key35": "4JUrsN3MfwsMPmvBbzMzuVbztt4wR372BKVKNv55NiE17qWaAnb78s8ahkMSbdvzP32g7tqpLU4PZ7eB4j5AkWW7"
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
