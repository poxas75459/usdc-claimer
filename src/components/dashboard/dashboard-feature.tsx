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
    "2rUG2Qew3GdYyUe6S41XVD6Cs91YNMRwYuYxTEB9uacs6949jPYDY3aSyox5zXbhnftA2hPxMoPyU1HstBQhhzzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36TZ4P7snzg5mVS3MhSWD7fncmo4ALsWhGHxWoLHqa4Af9dkSc4A7U5Gc4JW1S8VnbzwvXfJdLrwjBsirgYqDMks",
  "key1": "4ZdQ8nRdHU4kQJeyovk8yCgoE7eXU9uSpttYfWVUUA5XZjMqUSzRbzCTuqw1TznEX5qZeRaTgVjkn6a5H29M48tM",
  "key2": "3z3oR2nYuFpMXnW7KNWeNCZgyo2ym9vqHnQfUR9Z1VRgeuUVoTn7YARbHfarCW1GwsPySrnME91sU3wr16XzThZk",
  "key3": "4Yyv64EQdJTUAriVXsFgEBHzsSiu1CZh3PiD5BsDtMrgPF2oec1i9Crgyg87RAZCzG1qwHqj1otH2qzJp4625asy",
  "key4": "5ZgbgWsJHXKpemjnGTBvVAbxkoWmBzYiWFcsPDhhvpFfEXDgofr8UuLaaoygf4MiujPJESxHs73nSPNxhQXfdPED",
  "key5": "4cikpG1KJCSQNRSg3qyuuLw4pb5F7yg3ngDE1VShVNSxDb3wWd5GbzUJyKnpuvwES8Q953bgNw5p6Doqj5hS8vK8",
  "key6": "3D65A8aRP2H5Xy8Wnp6MfHm1Ew7MkU5CFaN6yHahQf7TyLS26DudHezAq6wv4CoMF9vFikr4cLwLgqsYeAw67Kh6",
  "key7": "2xtDW9BdPWS1Un7ADdmaD78HwjovFk5Dwj4LWT9CfNSYKJuGav3N5mcXNyegD3YnF3ekxQ4p4b3orqdQ2VCrvXak",
  "key8": "2FPQBZyhkvb4V6Cj28FeoMsvQq11Qv2mF9hg8JHSnygH5AEJv4UhHdfo6biUqwFWw17qH5N1CfnarqurAApQ4EjG",
  "key9": "3x6k2caiqfjeQPx4KKjtsa6APruDmuT1YUciaoXfhTVKUB1EvpqaDbt7yYUqnAUiit4VwDJsqV43BJoJ26icQTSA",
  "key10": "232CsRjVPA2ZmY2CGVmvfkBWZdjFqooN6XNsYGrPAyh34fvbKGdjk2hbakZNkaAXdfWiPyqkR8ahWh2Srn53UBXU",
  "key11": "2WZ2xQUWnGjbzU98nqbhgHCs2ho5cA156qefqC6PDNop18MFtJzJiEoAivBSr4aKHhQ8q83ak8FFF3LbRF5HNnLH",
  "key12": "669EQpfCw9fWvfVAwzhsz8UVj1B1NixhWFzm3D2NBWKAtGWi9K6LBXKJubkcWVqg9ZqQiWUY5fBzhmZa4K74kD9L",
  "key13": "3ZBmo4Gjy1xHMvCwZzRVRyZ7xbBxMAcGVy9zkz8JZrmkFCH4imsdgDoZtnaAbggZykHaEUvuf8MsPRbTQBLPJNmz",
  "key14": "rdr5pAnXu69SipeYeLs2XEUe5brpxiYeVpNuAYdcC8tb72iqSnwj96PAQFMGFzkkJXv2gDbRvv7GthHNu9bckk6",
  "key15": "3m4wr3NB2qKcSCJtdDyBAEML31oUvb99XArmVV3NqfLfQQAMkqZ7qh6HnfLSSgNz6HWqStueqjkiFgvTZZrhsmRX",
  "key16": "4ckyKzrtryWGnjbHLcmaNcKCRvKhmJV5W8SkvB1dfdaF9wUDxS4P36fA1zmqs4oZwFGzDLNY1At892k9ycb2LRav",
  "key17": "3E6Yak9MLcfnF2tsPPYsLvrtrXWKtJx7ZVJJD5SvxFaDJ5qWftcwtUKPfavvXpLyUSapUkV9Em9ayJmSqPiG2bXe",
  "key18": "2kEcnMLz8K9NMwGvchbkoYqqagQFrrKZfmCfDXAFS5y5HLbLPahHmESz3UYxvuoRbJ6qYtd9ZPjSKchFAUNBzZPQ",
  "key19": "4qjcbqAn9KYpKjXJQBbdvYg4VakVVYU3nT96ZhBdsRhnGqCHEtfSm936K1oq95ZdQX3mnErSGtmwN8YDiAFf5oaV",
  "key20": "4J4ZbzMvvR3eAcXozAEsbngwAFazGFqbKDhqCmwKhf6eQT3sMpJMBtMygNgW3C1EfVvjGNihYFX2aoFA1sS15gGd",
  "key21": "4VEnMRZfDybGX1FxzUvFGL3uoXh43scCxtFWqVqfX2ysB9C9bPNdJY83cG5prkCgB6WZCLc5BtppsXn5o5fCDPhG",
  "key22": "i3apNbU6Ug6X5VFLU5cidJb9vQsztZP5xeUfuthnQioezY1U7dDoxKBkHEJFxj7jMzT3NN7wRrTgJggR2qsDwjm",
  "key23": "2FXVBfeJJrDZzBrpMT6WRQ6hsC4UfnrehmwraoCgVpj73KRWHiZNDSUMaD2mufw9cFdoG5cWXShRYXwUq9WqzqA5",
  "key24": "4LQnemAZU8kXPqVvztq9HC99fShqaLRBv1kaJWkkguUSiZumB9PrintPGmA97vUQw3ZBAYXvXLtEZqixJVQDt6TT",
  "key25": "5B9mJxEckVvFuWm6Ddu9ZMWyzAk31zT46KnMNvCohVihhEMGNEFTadWuMYfLUetYJQWLCkHAWVA1QA8Uk5yGTKrc",
  "key26": "HzwAkjLiBL6887WhomcvxADfrSEEFx9cdEyWhmVuxFoZHrMUNumGSULZ6P6ZUh3m9WM5Kn7pqnEsHXbbiEvtHwc",
  "key27": "5JCTPdsYp4q6rWC7Yb1t8c6o7fcmigDnB9NvXpEZ8k3VjfkDGbfCwHjFhHUr7FUdaCYqc5ZtVPEYFfb5Rkjkw63f",
  "key28": "5VGU2AcSw4fcBQQRboG5ta5VbxpNuthj8jUedCwTKAd4pUFVDQK7pLkDYPFbN7WanuEJy7Mc1vRTcT6ucsx4nDh5",
  "key29": "4x2j348MCJjhiu8cpH3EyGGKi2FHvRVa5p1nszraxNn737dyw9C2H5EDdR5NGZVTxAKYpXW6uQz1Rgrqu7jkz381",
  "key30": "5Z1DB46c3vmhWtXHsgYd23Cm4AhS9tx3UvzAJiPmrVEXUR85t3TeAtrkBzwWjB6ykVwNNEGbdGX1q6JPcatHPqiT",
  "key31": "3n6csCyKEcLrDEo68R8c6nZDsTGXfv4yWjVqfKGRf36vvngmb14NC134nqwSJTuGGt7xDZHE5t1mEXzgwjzyqY26",
  "key32": "jr2MKRGcvRFaasWG4DEo7CfXB2HfxWsVp2ErUjJFuQgg8pQ86p3QtMPorDmF2XYZyEyrPuXn4QxUfpYiGuZhddm",
  "key33": "LvJbiAbU1zaXFgWMG127zXJvM1Y5gdSjhLMBVeDf9exSPHnb5QCCF1t9DGo7wJfpah5w6T8YcsVJpgYD5LHm3qw",
  "key34": "eFMdpkc5zc85qoPkZrJyvMQ8XVpKxhFTiPQY76WBD35ZrfXex3BYyCuH2j157ZxYSspVzrAbv3k7DGYEVY2RZKm",
  "key35": "2X9Mf3SW8mcN12ZQCmQDw6ka5AST1DYBoBfpy73MMND4BXDLBmkNhUmDYqHo6ALSK1kNLVUWpEyHS8R65WEYsiN3",
  "key36": "3ek8vGzyhzMAA65MCNEdumqi1pEeL2JZKdb4dN8WUVk8yyeVH2KCUPoQD7RjzC4QYqfSb87eK9kSV9Tu9yAFmtgL",
  "key37": "fMCpUgKExtLxXNvmLZvQChVBph6KfDN1ZtYdfesrJnhENeQLK9X52pBHL7yZVSUtafxyWwBiUxFLku4E6mPWyqy",
  "key38": "22ZMQEtsbja7zkG6prMnDnbRqJcRVmgDtSaxwkkJKH6SRsYdYgZhXp7Kzham53uC18oZ8sSNBGMWwbVxLFiYGxqW",
  "key39": "3r7CB5kgZ9L8BsSXWsHP3AqLw4vEhkmhUKNkFUJq4bzLYyNSz76yTsfbjwT1AyFxG6MUuXiHgCRRRt82WYSBADru",
  "key40": "4AvXYYVHnpJdKFDTxgzzpjyDvJVExFQUXtLbnMLSN31xC6QkSicoxte4CfzmU4GTwD2AKjKd4v4ThTs7rwJGqSB1",
  "key41": "4hPttHGUcEF3d3BgVAVZFEjQrGqe8Ax4fBL9sB4gB7XhMRC6UwARWc4DAPhzUxLoL4jdBamFNcoTjJTH1RF5P9Ph",
  "key42": "3GEh7tk7Pacy8VzmsYA7jwtkjrYui9eD4RicNiTk2pJZnRi3rT6dq551VjX3KpUs7SAZqozCddW2uyfg4hPJNEgH",
  "key43": "3o5ijnnSR8pZDee8sHFiqvs5VDWSmP5prhL1JgscJpMetwnwtGzRcEnCkX8wNjajJAeMmvLUDiRnshtWwvSseYpr",
  "key44": "4jhMNp19b2aUAFz8RPPEBRr4q5wnW8Bstr316SVHRKtd3q5ZYqtVHzURATCn8ALd3HQQDhwCTixF8ukzF6fG8T9E",
  "key45": "4yysQE1iX4TTaSqDz4tV6Pv6tYjuA9vLiAjNgqU8ahWBXtnCeWjr5kZuoJRb6S4pE1YDPQbkACyyY4NcbJvVupsr",
  "key46": "5VdtXzT5cdNuScHXAwZv33ZiPCuTM8ZaSmse6S2QoUcfJeuYUCsFTNQEhsBQRnhSvZZstqnNGf9hkHwtAUMpGJQM",
  "key47": "4HTUWxDQnj6rQXZJvgpgyVCqHFFN9sksFotWzjcz5o34hp3KW5Zmn2HuUynUBtjxtKFdwQdJfVLJYZj1F2ERXGS"
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
