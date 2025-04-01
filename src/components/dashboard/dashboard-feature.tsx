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
    "ZmptRzHUQ1GP5XHXKCD3dA8Myu4Lqp2iCCpFTuQDGL6nnqkvQ8nf8SvuAgpFHTtkM5TbC2H2ny4HYnZr1aAmFKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FQZqKGF1pCnZbeTEQx24c64ww2V5KxPumpu62FdtNLvJC5R2MqP4iqTPHNhFhbyzgM46sWxXBKPaqWgYPfQqg9E",
  "key1": "6185zZE4pDLftX5Su2vXMrA5EC3Sw8zYM72CdzjE7hXL3BTGttpJiHiUMofkPQ7fy6DzFqPmSLGvB757wx9Q2F8D",
  "key2": "57tL58LDbDzHNs2K6cyWVJCEQzwmpmbuGhuiPdLHnwU2wEJC3QUmhJDQ3eQF1oq3K1rHwtQNaHXR5UD78HrMkSzp",
  "key3": "43GWSp9DKf6JXjRxLqFcGUvzkkFqV95HRtxWdsP2AZaYhynhWKuSwtZLyfGay6KyeASAV2zCMEWqmX128YLhh7gA",
  "key4": "4djbLYMsdS2pEr2c9nH8ZBR7iMuWqenxzN2NCBHpdRrJUMAvXHH8FqJG7NEA9knjJN1QhKEiyCPXkV2LtBWkKhAJ",
  "key5": "2EbmXbyotDt2TyA7PUoRg838AixmVnK7igNmRz4R6VpJwEHVEyNPfz3JEHaMkFhdKvDsgwZYFYG37Rhw3bccLrNQ",
  "key6": "2eoVzSeYyrPcbVMiczhfXaV75SrDCxvMTDrHBcJDDv9Gah6rGDXZLd1vCku9M4cWmqgCsGe2H22hNrwofYR1Gp9d",
  "key7": "54peH3sVqoqN43to2QniA5tshxRKpWpz8UViDGiSKBVg1yN1ubCjXYBuhar52xPG8qCsyuonBo3vNd7wVzNqsMBV",
  "key8": "4WAWLYSUSYG2Hry9dpePg8iWCKHjEX14AA97cyYh77vW8HyRUATfueDzQSBGfxQts6ab3miSzbn8J8VvCyEbyk8Y",
  "key9": "2LgNCgxLYab4Knpx7QqAJpgeWpctu2QubznjCmvjAjMSYJJFiFBPhjMHcV52FotewVBtW8hF8zLQi9PZnH8cQSd",
  "key10": "SH29xzvRNgmqHaJcfAxAsyPcXSaVBv36WS9tkiTsES3sEfsHv8A3zQCJ1JnuFsUBCrgMCnpFT5WTKVRU39hDXzx",
  "key11": "2Y4FittrCHiKd7tyQiVyBiDyJsDV39ydY4BkP33HHV6JuxCCWCFXpYuggNmU3YXNVwGkdhoqLMgygsewpcbCYFsR",
  "key12": "33AGp8krJMizhWD1CvaLty5bEZZoBYAYSFogqxfnHPVTWJFpHBftXid3JyYb9nbmGcgSzDTQuwiSwdG84Dq1Gk8V",
  "key13": "5XHJ3bPuUAGpeevWbk3k3nSd8foKcqCzihZDf5HkbHhAREsqo1DZLE6ijtJQW6PKpR4bs5tL5LSYvKvjjhmgry5X",
  "key14": "2vrRpkByM6RWzvdhgfe3VR1cRszDRA6KXXg8bagHeyainWuZSbMGHMYuAjKmRTpVd1qEdZjWqUsTgJicnKTnTgFV",
  "key15": "65Ysxrba7ojxBcgNTrpN1YRAA2STK35pJr67hv1quebhyCDDV6pE53mEN6VtEjHbDYihvhUgdjH5ywLaXUpr2Gu7",
  "key16": "3ysx4GTZFeBaqLGgCx4xk692uopS4oLeHs23TFP37RcCFPsnsUvK6jq6LoghXVTghrV68xzy4gKs14bf27DR5sk7",
  "key17": "2tH9iiAmVSma6mNDZdRFhssrrMEfVP8ktvdhHFA96ifdPfJxKBJJuN5Lkvr4rEcXvsfKgqTDFhJLqcwD5vxdinpb",
  "key18": "7eydD6SA5ZCTT9vgBcQqh9rXQVP7ASY4GZJPnpRnAWpibfERQ8cF6zXokLhqcQyBPVFo9BE2xgk1oRHHgV2HoEc",
  "key19": "5DjhXyEEpk4jnyWinEFtLTupM1aANgaDQ68WZZDsevjcZLsTfPe97kvqwxca79GC6ifFcaN9EQfyi7GiSCxXu9v8",
  "key20": "2scEFZ1q7uPCe3pkzo5e56Z3JsiKU4tmnyUpyrwUTwSNa8EwWbbvjQDYJaSRqEr9foTug4kd48ACvXfXZ7gdWYL4",
  "key21": "4TgGJhX1TqMW3iXycR55751HZQUpUbLZnAxXGDnfVZ8C3tjRwtZsXjM5rhyrMPSQiXWTQx7RVJL4vT1fovgoaJqP",
  "key22": "4yTS5se2qqS8fVq3b1DLWvw5KU9FZRumye5px2N3ak2jvBrfbVtASbTqWYUgT2LYoevj1NzK7eRw1QScbGbHbgP9",
  "key23": "3AA4FW17MPH2opN2eK44ebxwRZAE5zTD3C8eMH96r5NmadGVSgBFjwb83kGhfdS35w8zL7gELrvj3kVFkHrmwT6Z",
  "key24": "3fnz227oMha1PJrfhPWjn5vH8K51PgaUxYqpU7WM4fV1XDKum8jZvXeEK5EWfPA3pqTjppxm5f1dBofg5rS4Tu5L",
  "key25": "3jpLMRPuvCywkeN6FyaYV2XU6RVkzcwiKkkhB6XZRLXy2TAMaSVY2nrzwcqsN5Lt1uNNUNgipCiwBRrRFkDqJETX",
  "key26": "4d5yvZeBzBuTgXF8Vmb7jWbN3c2Cji4ybBfcF3D8emHqPHNWdkywcr8uA24tUY5ETYthDMV5FZdSDxE9fsGGSmQP",
  "key27": "441NF5Wyar1B4QtSUU4Zh5nmCX9M1thXrjc96qHzsysSEsD6uH5pQ8PfwV9HjWWD7QQWZuVcPsDsG6n9wRU3ibnT",
  "key28": "5HNqrpSMrdZcZY6SRY6EpYYM3u7RqdW7j4VtBuP1FkC4dRGiQSNbJqpQoofszXhMx88Fhhx5nNBm5Hhk2D18eL8j",
  "key29": "5HHQwiXJUdHUP9NgJRkujvvF6bDYjBAUajkvaY1kWUitwcR89sY4YZmQfUMFevurnd7MZkXSq3pxibxUGXgrAjgR",
  "key30": "3NWZEiz5SzehhmMHPG9uUj68GqEVZft4J2psxvZwqgJ1R2ZknHAFTLXvessZcVZTfAagPzimS7Eruroo1DaV1XXu",
  "key31": "5qEejCUfTBv8eNpz2n8tN4LG7zGGLAF82Uxmkmbk2NZJjddRkSMLyUd1xewgBwY447F66wCsvYWYThWsPxShxHMn",
  "key32": "4fan7MEuNhMwwvbzR4C8yYxAvUxZRu2xiYaF9iwoXt2AQwB1nua1mnfJjjrwiBFUZdtg5frEtgAnUUj8TSLxF93c",
  "key33": "5GjcwT1KpEPy49n2AsqrYf6a3qUfDqEQcyBmEqq4yQoLjh6wioq55pT2drGEByhGXSNGLcJxT2SyfXCK1f5Dq2xS",
  "key34": "5Le9U3rU4p7sY3NqHgeQRMhSyK15dk6EfBYCGxxgEyfXbQepjooaJwCMDXZodPhH95UFGjikSnptwYmaD3dbLH5Y",
  "key35": "45EZjqELZReLsdrCyqJREPi8NzMFWzaw9nqsFKp8WMc7JNhy546oyhNVVqSeTWNWMwYPwBkgFeYAwFdbe2yebv6Y",
  "key36": "4pwKTiar7EJuLXUEQ5rQ3KppHUTS5kLYxwAnVnzALPvXrSvZje1uCTpwkcmrhJPEnxQgbXnHNcndrRMYxqHKQmnY",
  "key37": "36uNYA6itWHgvrMyZdLmD1hFi4dN3FZgR6jrsikz9xwpoY8MsDmYp6iJbTERCLosMHExSqiYYKJNyBZCVcUzNmhM",
  "key38": "25ex7bknBqNNvwA44euquQZMF7SaaeV2Fmg4Xny8EFs6St6WkhdSTcCHpAYEApTnH1QaYWuCEGjR8EVYcSZ9aNKb",
  "key39": "5iFQyJJB863gHgKqQ94qY4KhQw2eHNPBmCt8rZskYm9n6aopBQvJbDSU8V2BfZR7WYQhMv4y7K27osGia6QrDC3K",
  "key40": "2364GjHftvUYevx6ExqdUWwXVtHi4oT7uXdQ1WqujYwkJucARak3GkACCTShrzMAZPqjn17x2R55vsQhodnQREQ7",
  "key41": "2dCJYZA3nV5vx54L1W3N4WzZGrDDCRYMjfBofCVFbmsjiZ2dv5HRjZ39bPUAQBnVmaTxTJjTs9T9AQnnaGkXZ7rS",
  "key42": "5X1WWcY2yspPrpNE9m2MtUNUyVd4oVwogJCY7YvqqHpUBWqsgqnvtGa79eyMt8HqzKvJuzkXM2k1nmSgwo9gY9ZK",
  "key43": "4yMqxBd5v2Mh6NuE8BrHixXGDisp9GkgggEYoBVpSFzvPYgqwLwShEdDGA52jRaY12JcFMBDbT3U6vrTCyiFwYFG",
  "key44": "5jmxdBEi3vqGXjaLa6HnqQUYMg5Cjktssvd37Nr1PfNQpgmbyUXkNYHBD6XSgir94dD31PiBXMKR9gpJ7J3mn99",
  "key45": "ySKLiBFccydXgZ6gaUjhJ2W4PmM4LDCc9269Gxzxdo2d82sN2bNEybFF9X4VFVyxLBPWHhWS4ehDJ8Lb5aciMQt",
  "key46": "4VYM3q31sh51gWhLPHXvmvjNSXSTYGEnAWGU7jE6HB1sQXsy1gEnyNCZAVw9BGKRfuZiaNKMCiRsjR8EE1HpnUn8",
  "key47": "5WFXMtqqjAgGNEdzSVWc1sKbhMRfBNv6BUgwspKBadHd2sH8RryC4jFRd2BTSpLthPeVisWp6VcNWrfqFpBUx6FP",
  "key48": "2Ffzw4A6jHBjnccyU62zHXK6aei2P7DynoW4tCkiom7KXkgXwxPbz2oCbp9idbXCF52FBS7CVZDi1BTEYG8TG6c5"
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
