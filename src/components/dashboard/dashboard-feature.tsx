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
    "n5rWm9g7XQEYoyeQsmog2xaumoMxAgavFz61s3SBDciFKCu6YHQG6cgjVYAPXrCF8oJZQv91BncNc21QYSLxpKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RX1PrcWbCavH4Ym9JTwYR7JtX8htkW8Tp8pPn3RxHav6sXvvD1MKis1kAPuhiBZdxibcFduuBko4t25a3P466Ei",
  "key1": "5uq4VJTDq7omtJvDyw6hcvamEUsnkopuAeKEJvjgxznGnezMyrDF4ENvSDXJAxDHejfiWzorjtBjtodowhiUnhsA",
  "key2": "5sASQjBhCNbqrncrrVMUZ5TtNHRqHFjTzmadCHMztzw1ex7YpvEQZdJiASvsRtFVZ9GRzLf7yVU2e1AyVfzp6tRM",
  "key3": "USjz28Qmr9hni4YP1aLWCN5AuqkpcUBpGygADeayjfQwWaDmcSrpZUk2ABqpTL9VqxrEZfVA9TamQinhSRMiB6p",
  "key4": "5FQMVMjPZDyHni4KQ3yHaoNqhwSTGkyq9xvbT1rzAErhh8ZHsPYed3skEKAzn4d3eQ6v4s5r8CzZ85biCQGgkWLW",
  "key5": "3E1d4egMNSsWxuo8UdG7jVqwsraNe11pjnP49USrUKk5BzWgvJELeBtf7MQJXsSRezB2C14DaFG9KyiSKYousAK3",
  "key6": "4SV8nQkoqGqB5T1vQPqRDNsMg7kuYRmNpoegCmDTBPiFZU6i3XGLH6VW32hpcnTVUgU9d8ZNQ6u7pFFWxzH7Gsez",
  "key7": "5Fv6CDnXw34fAMhea6g4Y24w2DipF55e9y9S8cThCiCbhi6AkRh2B4kne9tSU5bRbaw4LZR1p1FRQtw2dmoe8kBQ",
  "key8": "5FXHSau7GQPaCncUQL4vERgFHWM7S658HsGce2oNyP57vrmWqiYEa2mbeATSUt961kA1sU5ZUzkJgf4aps18CZ3C",
  "key9": "baP5ZPCKLcthLvfexGCZd8j5MbagmL1xvwDqw9aJFpB1hrcViNqvxMaS43LH6VrMENXnpGoTdW3vZUFHV1VvvHP",
  "key10": "3txpSkEshXsvyGsccQedTiecFpeG15kHKJDdH96dgZ88j9LCMfDpKEm95gqKahfijCXWTi4PNoStnU1RBJkSoFwS",
  "key11": "49PppYfX24XEH3XzD5jP7EHR5MHriA8sCsrUNu4NH2chn1f8A2HDkFGUwioNHeTYXCyiRcztfSuKNWM6zQbzJNBM",
  "key12": "4c9m8yrtge3ssCoiE6zntksoV2y2gr9tGhjXWiDgyWGJeXegrXXuXaKBXnfZxubXUqdCsoRDMBbbRsW1NUWk4Mxi",
  "key13": "2jgvpjoL8jJqS8o2Pa476m8yt6qzE85py2irMVT7XVqpUgoh6qENUWzvzNyU2Tjkof8T4zVgjWvqUZmRBdmdyvDg",
  "key14": "2dML1nd57isosctpGyCZwNe5KA5Tc9wjhnfJj78mXruf8n6uQPmNcJBFtoNRGhuNone39HjFQQ9jaFJep3vJyZA2",
  "key15": "5hANm4dMdyqAM3jfBWSrxebnTfc4MCBvCDHQj3odWkwDTQyPcVrSbNMmuLdAUKTKppvC3rsz8qN667T68dLUFX5V",
  "key16": "23UKywapGWCdcfWzMFU6JJuGBBmLw9HKzgvPMfceWoPX2b1cpofgbdxDsB23iPLSyxmHrTnucJ6goLRNo6RjDaFR",
  "key17": "5vrTgWdHoozRfjmJoAdezviZjvGyT1Y4y6kif8eFjL9yyLghymb8kKKXW2XHbjDVmttvsE4ACoEJRTYcnEUt5qyE",
  "key18": "PxGYFQJPRLq8Q2VLyn9b1eNW8s3PJXtjqiGkvGWsJ4rr3TYepj5jxJAKUYiqxsc9WJZXV2GBoR7eyrD7ouLtP5v",
  "key19": "3UyaGZqqpsfKHT45kNEJcoYdiY8rCSNViLYwVV1rqm9arMLEeg1z9f5kCnqhLPujh9gNwJXDR7cRtziB45bWMPcs",
  "key20": "64fKdt15RcEN3vVJp8tccBoDTiemd6uko7FmsspBYja8TQsWC91ecMxe5J2m6Ngu8kAiztZWNKPFtnSi5ebM3nbJ",
  "key21": "5T156gEPxauNbtPfe2QW4VMcGT1Y3n8nQXqiHX124CN8WogRduER3Vasj41g3ZixuKgu42WmBY1R4JkY5nBZguMD",
  "key22": "5prKDVou8EsMFSf3Rpbq19qLeh81yjfzyLGmggh4HVvC67L4WtjMRxQsF823DdBLRAQJa3zMhyJuquWziUeziEk4",
  "key23": "2uo6a5LUe2KLm8nvccLsdfQNS5R5ricNpAzY2LgNsU89Pk2dwCF28Zc2qyWVFPxB9cec8XLwd148nBowvvFdrL38",
  "key24": "seF3CQWBLPfqJctXuhTdubH51cXA1KjPHTXvr8Y74Kje5NNQu3HsNs113CAPYDK3r1V5dBbXd79Lu7fWm9ozY9W",
  "key25": "2qGjEhtiqNCJhY56byBfpoDruFXwwSE3TxTwS6ZLfYuGkp4gTvxV3ww5d3WHekwrmUdhyc9MkqVNPUEczDz5kq65",
  "key26": "4fJYgsm5ktXQpEgA59ze3t3ofobzFQtWssq11A94zYtLSuxJxc2WKNqgXf4XTBwCTWdrrpm2qND3eFWg6cLuGN1P",
  "key27": "2kBBzU7VmPf6A31YqRyxgiQH2fUR7iBztWHcdk6JLipyhyiMWSCwPkhBDPTFE4Jwt2Q4fX1VxgXudv7CVwi2xeNT",
  "key28": "3JVKWPui3SzPsgmXKviEVXYKQa6Dn32r9LVifbiZTu4Jbde6QWdRJiLnJPZxqH79zjiQJj3pAABkDi6Ceo9qoq6Y",
  "key29": "5NromXP3DuzgajRkkGNvZxpEcEFXbfKr53jpQ55vKGcPqDiaFJVxW3xdka2YpatEHBezrBBWjJ2DiJNsHdZyZxrT",
  "key30": "2H4ZVtJoMyZYBEJtkZGLDXrhhZT3xdbZXAFHB1TM3MSZV2McYzjmYARkuByUCnpabnr8Pme99gpPSh5dX1gkYk1L",
  "key31": "572MAieZuTHs86zpCsYySUbGqsptSaFFjEHJKqNCKnc8TB3L7d8ETgCMe7mFykKj1B6DLgQxCP783UN2bgRmgpWC",
  "key32": "2pJq83iB7aNRMJviGFPWRQhkojafBPcUDH58FpSsewA8d3DdaYrUsNXxid14ByqjNifG6PpZ6Gasmjn4FbrALkbW",
  "key33": "22bDaKAsCoPhwhFGYXbY2uF6knmNwHbCmL6tNiEQA4xQPc3rPDa76nCA8tvPtumDMbqv6fDKEWfwdot52bvprWQy",
  "key34": "4JEQK1CsEmzMmq6LnbstEzTZj8QjZkrNuS7bJvfqCUrWtGgk9Je3uTRKUTJhgoq5RNtZePXa2it5bhhQ4qKco5Sy",
  "key35": "4TLZinfVy2Pts6xWP2JwGFj2oPSVmR8hCDcfYfVD3aiPzJv4xQ1Kn4YE1WKAs6D5sr7uvAFmwdSaxRj3McbBsUNv",
  "key36": "5KSsvfMsGvVBqFPfoLxMaRXAWPhmfujh59C8QdpKfW2cL5mFqU7xP8XrJD5bCHSNEJbC9dAbrqjxAFC8aUzbGn8S",
  "key37": "4DF4pdpqZjB6q3F6KDm8Y9R1Kmzdc4gaZ9bgZ6ea64ZmjYCBF9dcbctAGKbNToLVHH7r9V8GspTCcD9p64JeXVVF",
  "key38": "5BMUvzjRjaUXvJNPGU8ZxdJxKXD72jGesFiBxuoZAy4LUS8doF7bk4Uazx2urFpYcAQz5hb2xirxaapdyJH76iiy",
  "key39": "Mk5oUMbwxLt3qn1dmBB7bfKraPJX4c4h8kD69LHaS1r8MNvH4Tc7wh5QsN5GHLxtRfrT76yTQ8FCHUdf6DdRESb",
  "key40": "338Kebyxi3Q2iaK7jZj5KejuUJiJFYzWpv4L7BacJPwH5ABdstgTPY3dj8wct4EueChiBKzccGkka2XfYEtLrp4h",
  "key41": "37RJLzB3JVseNfKS8oU9Ahtr4uxeoJXzCsMQHxAWFjJSy28LTPhX7e7QxQoi5SNgZYdUR9pg7zpjctjNPP8koE2m",
  "key42": "3EuhBDREakCbL2GyvPJ1vPb5D2TyKWYXSE25W7G9fyw2Q23iSwV9WtjkSTxnfgft9vZsq68WhdMrJxbqidcWhJBE",
  "key43": "2HGp9rVzP7cpxZQJME7NJ9qnnGGUfSybNdnsr6dtJFkqT4jRMYiH2CvnmTWKdpzC2b3cRiPWT4CFno33dx8kofdj",
  "key44": "4iF2akj829yEjFWRDNXLpHfAKWdYkEE4wCWC9h4TyWpVwps78zajuKuKLvqauVn7jgWRgDbhuPucN37qffts5wQy",
  "key45": "XW4gBWagaHWByESJGWWv1b9ZYvPsZQ8USMzDKBuW77zczNp95HW3DWqjnpZhgErFjn1PFgcPrvEHaN5MpbUSPKr"
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
