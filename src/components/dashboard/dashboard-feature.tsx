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
    "2BBBjP4RzTR6kR3jtbyeqLCFBydrcKfcUstVTcw6QHaA7SdYdKvqQQptkuiZCmzPoXvimUJcCpFsh9g9gAKR1bRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QLW9mUZee5wdYoBtRbSfd49j667dwVvXWd7qkg69hxfPrQM1eNxDKFsTd5GT9cY2Pp875S3XNDymSrMJQb4eeBt",
  "key1": "5dVCub5paaRJozQRsPr3Z6RSB4SxwXfhcQz8pg2tWfTVTcksjgSH9kPQV9nmL6kcbMmPviZuiZKuiH9Ky3Mc5PFy",
  "key2": "29fNU4BN31VANGQdQugt8bqR4jeXgo5kadvAsaNWFupdFDBpgPHWVAehvXGXQ2zACyscQG5nc5kxejVQMSqEpbYa",
  "key3": "a1aRDKGjHmhRxLqbfv5ir31JzuX3euAUbAsaXBjEuADP2iNj8CdfUp38phbTNdZwy5m8RoxUHtTcMax9XY5xB8c",
  "key4": "3XMRKZQsbMgkLm7RFM8TTG7DLxDQUnKU5jnFRazLeMtJnQoUJhzJA6AukXtJngyi76gmfoZ3Kj1eMKJQGsfkAY9m",
  "key5": "5rdZJKXWCkL3ixeyyaWjirH7iskrJogSfbJHXPwMXLxJg9SjevKaGTH5KYzTcFaKco47zCrWS4Ybse4H47L7nmWM",
  "key6": "5XVHn6jFq1bGh2S3cpt5wx7stUUWg338R4zChbzPiP3K47bGXmVZZoUNLmvP9xF868ZGvAj3Hg26Q15z65rvQAjo",
  "key7": "16D6ocJVizdsoaHSpXyUUSNKHFa3ZBuvyTygG6NnfxG6m9sEFJ7mfRRhE4vK8LAcUvkB5fLoQ4vS6RjFm7s3BiJ",
  "key8": "32gJ6fa5HX34GXnycMufstkXgtEnTjP7owc6SGR9ayYEJvmayMovFG7NDTdtrHqkm3cTckArAgVfkPY2ziwMD9NC",
  "key9": "4xqgK9o9FU88C6fy2vBcsvJVu7XDsjGj5RPyUmDqNaRoLEySVCrHKAVbnrhqquktxn9mnAQDQRFGM6KBbDo3KAoD",
  "key10": "2D9LYCPfGRLUXpQruiEr1rNgBszbefXkcBVWzDonyYePmor7YLB1Ds4xXCadxYRLg8njTEsooQgXC5GAzUQwfUKN",
  "key11": "5ap4WVPrLzhMu3NCrYu2GYmgGQyrJ1pK3CkN5oL5d5ukqKcmv2oBdhzmG9tiGPaptFgTSdWJ6SjJc4QC2stJrVsB",
  "key12": "3yBqfo7Wph3z1edF1iA5fJsabDrMG25NCF18ZfFU1erTP61Q2kpUt14UVjYdhcrgUVMqkX6otFmSDpqqXKf5JQ4G",
  "key13": "3v6qFKLZPHq2pmbh5C78iX49tQyFxbyG2HM3uytvUs88npsNhTpeWAjiKVHUv1vRMgssYyWGYuDnMfPvdbJHTPZn",
  "key14": "3ycYMMKoHJUL7STYsQGk9C5mV6ZD9fsnnbmsFmefJE9vmLT5tXrLH3PNZx3WYBeotzAo8TunBgCXKyb3RQiLPKvJ",
  "key15": "5BPRVMvkntGyAUGRJ5gbkEhwJ9r6ihP9oE5nJkP5i13oUeoPugzeE5WGiHo84hp4bCaFyovrUZ4npHepZU8FuvdS",
  "key16": "Jmr617kP5kURUFEFiQ6bekuhsigVUvHFnUxboccPd8dtzibiVxfg6S9ZBXYsyXy89jYxPJGA6FK27BoYTS4kuWX",
  "key17": "QJcu4YjCV8LnKqagSBgT16bwGWeZRb3wy6YM7WYFjJxx5uAch482TmsuXAXdPvC3oACdX6QGNajoRTFatk2nw88",
  "key18": "5MUcx7x2gWuVCV79z9S5kFVoiibrs67JXNsdnG2VsmJWTi2VobRJYAgqEw8e319UuCkHMtQbq1ZGXqHzpmgEjKQM",
  "key19": "23PPJ9XsLyCyw19eLPZ2dKwBj3DJxbiDtGNTAisMay4hgGKizGt4m5oxqFEgQe1kJPgadEXvowJ4AoZnsJZDXtEc",
  "key20": "armJctu8Kz6CzSneRUv9VAe9yLsYoGQ427C9A1VsBpUD4AAg9d6T8RhoGosZ6JdQWtuMq7jfJovsCagrcuHmkhf",
  "key21": "2vyehkp81ReNnPJUYNdE1DgMbihmMvCh2EbPRYAQdbcS9aJ9JGrwdPzZfYsBjTwtfAQyd3ChLqAeBNLiEcGFKsr",
  "key22": "2QxvNyYipeoUyNEjkig3x5zxVLs3EdM6A19qbYdu2ATRFmmEGMWqdGLBurhFF63i1zNuNwQGXnnaFd6CSYTyVvHm",
  "key23": "5rrFpLnBMn4MJ4HYQGdBM2YpeDNSnM7NsBvrXCM8btBVMVGY7CH8bFqcnZtkC8jn4TEKbKJ88CzncK5KjVzwjRbd",
  "key24": "2Xfo5Fi1ta7UR11cCqEpT97eszcjSjAume2cp16UBwvBhdHKkQbubrDbb4j8QBpqqBJQEvB2mFZfeXD5FRFtBS3g",
  "key25": "2juPxZAi7YerVSACCU5aM4kVAoYkYNj6n92b9WhDaZ5MXxJWXRcfRazBCL6n8gpuaNX3NtwCARFtSBEdkP4Hfugw",
  "key26": "2Sud2MJNYaEXLuxLoJMSeisqRARJgPksV26b9B51qAEtbW7aRiCwqiiCFe4AgXx7Ge4t2A2bmVrs3jKFTsqkKTE5",
  "key27": "5PXNym15WUDyk5zafPVbqpnw5XkpTHizrxgi1SGbByJzJctUxz7L8mkTaD4zyvWna5BA85W1ND9endKHZ3eNZkC9",
  "key28": "64m2F9u5wDC2DiYfHN3woQXzxqArJNqDFryGaMg2ARwdXtbuyGyerhdoHayZAw1m75srbnV8dzfAV49538xmkn5q",
  "key29": "62udm5ePTQLBcasjLurm78HXw2Z7W43LgrfauXHFFpd2m8VJYfLTiyZXm5bTNySH6b8HZRRwF9Ff6Q5wKeVkDNGk",
  "key30": "3swY2DVLKqHkVVSEVTZMKHLVp6X4T2E74k459MVSHt6om4suBS2eKG8poggzNDBDqgv8EMCWXJkw64d1AqSAnHBn",
  "key31": "5ni7GFjGKx3i292HdtdR7v11bTr31aUXEszAiUwQ1NaYLkSQtYPmewwwibtRwJxDN8YzeF348vUmYhy4Y2WJvxL7",
  "key32": "4TD64wessmvUCU8WYVDXzxhBJhRerWU5T6BNK4yRiGRZuFxwotGr7Vev1eTL298JkdreF996iNThBy4YicmoX7dY",
  "key33": "5fDhgAJsMEog6w2ordPATpr4XhyQzqbr7bgMQGQ26La4Khm8QZQrnJF4U1mp569oYbN4KMK2gpxphLbEuu7PRBiU",
  "key34": "5R1XxABvzhh4o4ju1UcQiDpXiYrJErnBPRrw1KVWWQzE5LmTpWHRSyXoAoa8rJRSQ7PFG5RjcktajMDSAu7VAUyX",
  "key35": "4rKcmcYLeX5bQV5MSjiqSKF7fhW5KZKBmhEWydMLJzv3UqbYmbp2j7j4bzeEAfNoDYoQFDmTLp8wqM4YabmnAwDy",
  "key36": "2YWSKvurVuamoYqZCL8JF4yTKVJ8QKHaUWf1AL7tmvrUXNVgkFGXLqM481DimVyBF1oZP9iypUR842BZtfnGAWCB",
  "key37": "5xLWwmnyL6SiUaLTr6qeJBTRzydJSDH3kYQwpQrJqJMyVeS1DbRmPPzUR46kzHFVVsXWgcsXcd1E2ciBS91DD3Wb",
  "key38": "2A1ebw5EZSyNkzmJwCQ37EHa8Dr8qAn9FcvJ34w6qYdFtqADs6mFXMP2FXVMZwPe6jWYKLpsTnTe3CxrZAX8p7Kd",
  "key39": "53AXxu9cWqiaLT2CbLKxgFZ7F9Er2EzBeaCJuJcagjsT2qBeQWmUqCUQaExdxc3ogHryNVsLkX1TaYQncEZpw77a",
  "key40": "5Y6dLGMLbS6HKFQ55pgacf1GAbKjdTcj9ZWeNWYV7LgTj2hXXEbFyULWCoEKont73utg162AMaMtYS2os74Nr9q8",
  "key41": "2KSYZubsC9NcdYV9YfLhVYfXLVY5gC8gPvJTSkxWG5iMMpLrCffCLHpU9mbPv8aY3YmiXdKt5uLs85k4mvXYSWGX",
  "key42": "3XsVZS8A57fbhVqDEVeKc9tZ1w6irxiiKfqzfd1yyPS726pnhARNF1QYJxouGJEpDQTBr6ExTTgzxjp1ZunneMz7",
  "key43": "3jCXFogoLAr5FkCmVDt7kQb8m3GUdtCytDG87CpnADvkoNZ33SVGtgjuWSq34KfQQn1JXVAb2qHQWbFu4uJAvsqL",
  "key44": "253TznEy822zTN7bnNcfSoThmC3CKx35eUpYmvMvaJ5isxENt2csVnna1xyunwMBCHz26MnMCtXLSzPyBirPZsLW",
  "key45": "5J1KU86oiZEa7pN5qFrjqZ5MqV141Hp9uJGYwPfUSFKHutsF41EYYfv7K4X99rhut7A5Y5kQ9zfqoRDjZ3WDmpwC",
  "key46": "55syBEVoYRHdL8ScM2fGu8GB3qLH7CwF27spcQ8tr4dfugd5c76cy7Jf7NkNcZoQCcVce63Grv233eQQ2g2eCZD3",
  "key47": "4DJ1HkRAapf2JsFkHLdFPqkNTfHuPQ7n3BehwYrrmTE7rXrnEHQDTeA6Wm4MBuwtyAR1qM3DGA7EXNgZugeCbmeF"
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
