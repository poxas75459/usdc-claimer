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
    "3MdkoBME1sgRyD54UmUJwFjEPdLhvEcy7LxAKDqChrYyftb2ytCJWnfzigBu8MHLZaCv5HnAU5Ur6tJqpWt3eDwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62B7Ko5Yo84DDK93zTeaLgAons3xsuUkDaNcqc91qxtY5nS64ignq81Jy9aDpxZcYnaKtYLDesfe9bvKTuy38PD",
  "key1": "31SrXmxGQjbr8hN9LTJ6Mm2PJsE3sEX8fkqxBKpAuwXYgr3JgVnBcN4tQNnyhA6obkLpQQrrAbZkzhwFanHpBwf",
  "key2": "5vhtD2ZHyLCGFfihLtwLbTW8nQjFCbbyCqWys7wofouxjCpNrxGTvKbYHHzMjkF5DpT7dvk7c4E9XfFKCna7kzCw",
  "key3": "5HhoYREAc7SFfJtLVJ8KyBqGVJyVdJ4VRZKyTr1qVGPnzUNZJkeX5xD8bTcaZpx9fApqLU56w83EaXHBGKCtag6Y",
  "key4": "5qhDWQfNTmCoPCnmHrFVA94gKAMZqGPcMKNFwryBE1cGN7davL1pCqZFec7HbbR8cyCqVEPTeLkJaRyc6bYLAdeG",
  "key5": "63UydJXVSsC9R5ojZR7uj8AWL61ukuLa46ggocRrPDmP8fEsmPoc6LpAby4XQnPjToq8sE1jLErRkBwXggdSVwGc",
  "key6": "3dQrNE41EPDvW5fThjuiXfT4dzpdwZQZU8UyGodUf3XYzajPA1hxrwTbmRTvW3rT8PNvUaron4JAuf82FpM2yZ1B",
  "key7": "4QouNvqYFkAjGeRiD7knksy9mmRDPjcDh1pnRsuUQwirVp6nrPauBvJi3pqYMQndvgAwHTYf3SYTN72QL1Mzf28B",
  "key8": "4thJc6dBwPis1pLHsTXCAFk6iqF6GwPmqZkkaBCuiNTT6Co7JFP4GnQRj9i4HbattexNLnHUDmce9sk7DdQk9JoN",
  "key9": "2zgmxRJ7KGm7dxKjiU8cA475gg2Mgi44nPsXkCCzf7kTrtpF9BRJ5MBXgfuueTyDJNEEzhSm7pUY2RiiDBVFHWHd",
  "key10": "5YHUEggytiV3x75vgFgraCXQ6i1opd83NEYHz6xVsArWQSZ8WqABFt7Bkyf9V17Z28L7z1Pmci9f5oUxMkQxK5MD",
  "key11": "BA6SvZVHYeoAZsjAqyV32XjjJmVxk2ECBNA7YL9NGvAi99KuiSuCLNerGu8pwJpxkjcEyNw7N5KvyUdVm8eZoF4",
  "key12": "2XBXHsTChjSXFTcDUYiMrZ1qvXkFEVPFFZQ2MSyZ8GM3wxWLoc1Wi9pcnjSHHGkZNYsS4RJaA65AFfUR2gVXxPba",
  "key13": "c4kyQGdw9SFwaaUmA9LG8bW6hNCS2N2bnaPWSCE7CkBHVfGERbwzvf8buZQsxu62aCb6EGmqHYBNKnzwFmr7dyA",
  "key14": "4VrbRHTHCc9HGzdLXpjhzkLfn67oTSFrsumrNSfMP8ziM9FfsMEiFeorqupCf3gUtsxvyp78Ef4s2EdLBcQRWEzY",
  "key15": "29a4DrQY1Gh9Hu2RydskPchi3ayRqS5rgNY1hfVp3qBkJtzeEzq2TV3whk4kkCXVnzJGTjJ59TmFxn4Y92mQj32w",
  "key16": "2bpePyghbg4MxDhGqjjKR6Gv4t5grbY1jJXAwmLbATigjXRgnSKgs2kLX2pWvLvXNwvDXzs4HumqAoXnsY2bapM7",
  "key17": "25BGf55Kip1p4exFWgHLDKTEn5387Y92GCEKF1s6GRHFcXp8wmxsXgxePjYkeEQXo6P1MoFN8LdemmUWu8eZpYXj",
  "key18": "4aZ7v9azpEVXMFiFG45i2DPA19TBQNMngDKboatJFnXNXY7FPcDJjFaEHevvaErhmm9YXeyXr17jLgfNJsr7sHHx",
  "key19": "ZtY5tBNfgjgvCiai374MoNynrFohCcFbZnwNL2aeyLyLrPnXP17rFPgHiRLaB7NMyUbVmtkcTngoe3ny3hs45kz",
  "key20": "3ZVwhSUWTUrt9nL3NzpYnY1mvzqPviD7ZsfYu2Eqia89VP3mWRmjHvf2ye4z5YnkVFkeouVRJfCKAhqQDGsc84rh",
  "key21": "3NZ6RR1yrmZDNaVoAmJz5zDQdf1da4pD6G41Xsu4Fi76Tw7bzfy9xUAvhLvvsoZVUcQNs54hMKZ12PVNVLM517BT",
  "key22": "4EVWh98wb5D6Rj1faik7Qqg2cpjVLXnGRrrF73MGgAC3Y5iPxaVuBVhEoAAR1huybH7xVJBpt2iNx7kQgoqfm6aG",
  "key23": "3BUqfc4GF7NGF8NtR6KdTpqn3JgcWxVkfTBWgMQcEEq4wJeQHFVv8U4MqFfVEEGqUyCpayLFg7ZY4EiNqNy1fy6e",
  "key24": "2rR25NWbUqVKxh3izN6putYv6TiquFcgKakHsRMV8znFHAmaRsGb5aZupRMVVzem28BizCkZziCj1wwbfd7HDsnB",
  "key25": "2teD9XT7kq5o3isYfBCEqD64ZaZY1uTWT1bR8ZtGpEFYPpUnj8D1HVd1q76xc59EqBJngAcuLjewNJfetLWs1dBk",
  "key26": "55swmGShyFiWVkXswnfaG6CvjHzf4MxGWK96rEsu4a8eGvzn1aEzjM8UCbw9rxKjVYKdgv59czWCr5fa89LEJ4kt",
  "key27": "5oe9AKBbdNueQjYAiTbmfrrf93Vtp7KXxDr8xo7UWZLd3nbm9PDpcv6fNHttHadauTuLHb8uQkrBJKQjjNBtakL2",
  "key28": "4xbonptYiaRgXgE5bZzTf45THDk9fuCtTzNucwWPx3Us9adGr7otEaJU9JNU2zd8rfJmYKUkH5bRFZyyjUTrKXD6",
  "key29": "3yaWmv1TKFnLhLASb3BbC3AEEbYUSoMGP2F1WjZmkZwdks3e9hczZvtPLVpMF2hNW2atsnyRmy3QVrhzmd7AG5Eh",
  "key30": "t2svHfBJZQ5vY7TxzBLmcW7ehRDvdkNRWVyQ4Dx5jhEsLckyzT8EeUC6Xuz1fCbLrk5oDiGG8c7bAUQ52tXrUMY",
  "key31": "4jFuRHxowKh5t48pp1KZEG1QTFyEbb3G6wmch96awPsz8a4YNsmCBcnjYYmsWMYoGQ53JizLVmcwsABwrV6ZskW8",
  "key32": "64NEugwTW6JqcUwUAH3fAj3PXLu9kEiLrrvSfyy11nwnX33kQuVpLa7bxeKGXZuxLQugjbGvrmWe6D4z5yVAUmb8",
  "key33": "5LrT6H2R99kNRY3LKyhc8E2RrwrmhUffS49FEus8cgJf1F39FN1WEWxXxB4GyZULxxZmZcrWGGBqmSbGbLViw5Eu",
  "key34": "EVHKj11hfnWNJK5X9iHG459Lh4z3sd3qJy9Fnpue6DKdGxVnoYT1m25SkYrcdNSw9WPwvjrUQJrLCzLWJ4XYY8g",
  "key35": "2ES2fNZf9zbLjbzLdKgHEoCyswuEXd3uLGfjJDpij63P4RGb6q5zdgEZWVToLe13f6JdFWKe1r9WDDhhy1SSkvtp",
  "key36": "4Ey2jEjkFgCtdRfvagwYAwu92qpNasJNWwm31CJnMLWzf78qyLk5TsbkswfZPFgqyyKg5vFGPwvWkzRi1douUsW6",
  "key37": "X1oi33mbjYGPG5uNXi6foNz7i2v68hLfqiMkLmC7tCDEYmadKvCqCC3t9R2HGFSAUrGYN4qGdhApVVk9P84cdkK",
  "key38": "5pwx1jTTjnoZMXsVnLBt2G8V3e2bYpXRHgp866phioWgNB1ZvvmzoVidzxjc48zaUzEPtdnUbAqr6qDyNygKym8C",
  "key39": "5yw2VFUwAAZfcTySiaPXSYey2tB9knGDZD1BgxZ7x65yYSGH4Cy1hR2NsSR7v1eKGpjayVEhnijFMkGtHNzQuzhz",
  "key40": "2sif8EcYwAieJhm5ou1CJLstQU1oSrdsfgXAuPSxqteocpvB9nuGLRB5SCkQ8ghJZJeCssuNG6vo7vXd2cqpb94m",
  "key41": "eoUSWYc4fdfU6XPfWnkDAqEQPFuEE46wJzKosU79noXmft7kefakrQjToDkAb1s4q62C1pW3wDeTQPzYK3W8a8k",
  "key42": "4xbJ1SxD5QqJvwPHwBDpTn6pbtCwM3q8rkgNtmYQsic9Bs62xe3Mdyq9CNawaT3zm2MXP8LPWFj11CWx328nDnST",
  "key43": "5GyP6cjUxCbxDCDt75BF9vhZz8c27Xij6yJ7qin1ce1R8JuPkHFHHgPmE42LCn6HKzCGcyiXsnFcVjeBVAkJRjxd",
  "key44": "64cooAn2AZP15oxLbR1CMWoiJ6sr4huCFUf1JJAnDbBNNwrDrC4NKQe8EZCosKU16z8htZEYBzbYFLwWpgXwMkA8",
  "key45": "3VrD1YWgDSjsEkTmdVHDSp45kcwXRe9hBW9tnem56FGPu2vKHSBKBhFiHzEzUJEiPiLd2Dg9xtJg4gryq6b12XCf",
  "key46": "4wUbJ8uCnUsM3aN7B3PPgA7qo3rxv5gMZ9WF2SahvdicbSAMnuqUy616zbiUcRnCw3oZUrAuES8TAJcXiLfQW2oj"
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
