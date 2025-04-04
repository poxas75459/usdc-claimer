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
    "385TzfZAAqLmF4m1ZTzBb6tnwL8fumyDYEQbPe7WCezzkQyKCBni9TQFtZnHs26V5bHtVVEAwHc5PHzR7RWkCw88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42fFEqoTmMBm2YXi9z8ajwWxN3EzZg17H5qMci1BiYkTNZaLoYEyycm5VXbJRKmKBhfgAugc6mQTHMEUt94CvWGt",
  "key1": "5JJ1Y6yH6Hue6wPvov1faKvSVvJtB3nE6o8GSxsbHpksbgjHLiVnzMk6dnPFqGLj34rq21zhX4C7T15SvB9SSU4N",
  "key2": "5Yj1osUwXmeCQzRbQVbmzuBGRxgc9FNrdQRqnSApzgBpwGZk4645JuwXKijRnUnieouc6vRuH79QGkqbX278s4Ge",
  "key3": "3ETa58A9BMQZ2qP4hoJsb5CwPQByUguRA5GpAvEdsqLhMrZi4Knq7uVynoXywYfFLFMLNX7fHeg2qZBYji2YnKkY",
  "key4": "4HrQuDLgjhjEFk4a9onNyRWwFSu3tVGdaQu8TKNSvSupLDfESPBnw2SWCj4Q7ctNJvEFBzEPSVFQrTUiCLd3TF55",
  "key5": "36onSRgDbQDmt62RzJMQX1pwB2wzL34nUbjxfN1GJgHc7L33FRpJFvkXrW8WAebu9joLsvLdqS7eBCu9mrQhbKFg",
  "key6": "4FCahYeStN4djV7kaBnvMszeW9kdMAuC6Mjpu1gNXd2c6JAg61wDjschaVQeV1PdZu64tEWzFgWggWwsZ7QHoPBT",
  "key7": "3G6yiLBCsnXP9VvLU3bB9Kiv85qp5bEdo7UKcCVKjKyfrPQdv1nhd6G1aTEq2EKQri3FcVApWs9SjjCuh7grwNFA",
  "key8": "4nhxbaEuR46AN9n21ewa3pKm49duGsdJhde91e8NHyRGccmaMTMZTJn5ZS7uut4CLivfT9Ak8XB5jPaKqVWfxgUu",
  "key9": "2jEXJMWUFqcrG86nUwWjH7hbBpsmR71CtVD2egpvinumgB6DN2yNifQBcR5WKCcEfqEWQCZa2sGgLCc9cKLdrC2u",
  "key10": "3Ui4N7rAkWEoTg4yvqic5ZMGWhw11EjXqAEvbDesZRPe4zW9jFKMwt4Auqfj4Vv3Zj3QxPfWJkR9vVTopvU8dBAu",
  "key11": "45jquAvvLLFv7rqhM9XEy4SGcA2mAgiGaLoJn8xdUUja8vbucSbqCqgJmk56v678oJ1Zonxrui53uDcwmzMUxpgE",
  "key12": "5djjzKH6rBLrrPfs5mUqpiRJwKyEkMrgfRxqCD13jmLm1xMsRXYbt5iZVNHWHqhvWQNCkzmfmGghUJeSbQbrMj1g",
  "key13": "5pJ6Pp4RB1VQ9c6xHTbBN37Tu7p6WxW8xpQJ9UuSChndufJEaip2qKE8C5jJZnBbG6H2EJfZ4b2rsqxUZb4R98yA",
  "key14": "3k2ymMtFNNBkPqqGkukQeoW3YRm3RRZdy3jiRoVjWp2MucSKg1CXQFGta4aR6Zgwj1XC1SbtSUnsfJ6vQ2DqLFPG",
  "key15": "4c3ckmfoq5qmsbb5ot3JjkPxU8pfQEyHCTrwTxMu1cxtM9YM5A7u3JLPt9VfzxXSNySbq7sdsPpvJt9czdsvbGGN",
  "key16": "3Y1QbYUA1MFA9fAQ9TfhKr7wbJ5JYeY9ptfLBGzJQDkuQuHwTqAfhGcyPyDYdcpYxQCmh9nVxMb7fz3DuPoBJBSo",
  "key17": "2E5mLBg8MrSZFueEDUzhkgY85WgvvpMPoMem2udaH2GiRSXaNjxmPXmZRG9tUA2i4tvxoTf1TBwEdQ4ZqPT5CH7e",
  "key18": "2oq7WdqxX5qKMEQVrohGJaheuryvWsVAiBkSYz56Z2dpd7sKSAMyx4zrfU27tjQ3BWvAaH6ufCJHPgrSZ6qYZhWu",
  "key19": "HSs6FGdXafDqbB4EfKcuC4QiKZpRdbrsmtdXjXQ8X2ATWi8FxiuToKJTJF81RFCEDuh9qAiKhXy1sWuWzwhrWjk",
  "key20": "24mYcXsk8ugA5qgrggmX3eoxweN7Z2RucusZTyKDgs42DsW8MASyKQTpunk8FSKefGAFmiKm9JDePvp9JvSgdxdB",
  "key21": "3BLWZbY9H8VUykey5dh1ezH1dLFf4daaviCBYd4zhR7FzGTjEDEJ7VmBQWvVhyacT8i3REgja7ZuH5xbLwYHh2wE",
  "key22": "4ycUV3ymfnxmkoEZ6oW4J4W4Hw6K8Z1UocLJ3n7oTumx3F16cw2f845vUU1yD2Nq4yL3cGkzc21Hw24XbRF6wM6C",
  "key23": "3ypxz6MksojTAxdCbvZTeQn3QEbUNbFoB279NaKJ4pdLFb5E9gFF4tGjYKMk6M29Q4hhiAkPBMeYL8ds4SHQJa1R",
  "key24": "xb5UwprjnP5Mwpx5mWMbvM7kvcg6khFX36osRfnNeLk3XJmB8QkVNqk9hyQsbfUGFAZwTqtCCyQDUScDyhSACJT",
  "key25": "4sZrafX8XtEcrUnSTEByLkuNphn4EQvzCpEzn1cPVkzCzw95LP6Ti9FDBngFdjwALhAB2zn7HMLs1G5KBFAn2hdd",
  "key26": "4q8iaxSMM7X48t6LWKD9oMFC1WihnWQhLyAoRSzRz2fZEfX4TveupRAxeiT5pv3QFHH61kbKHYjUr3aiL4vywkfm",
  "key27": "4kUj2hXthaFxDwoqCf18t1Jjhq2dEbPft3i8kiviNBDreYNE4TV2maz7a83pZDavu17FawNnSLfgmuvdZq1f66P",
  "key28": "59JcUMd4nuT5bpTahg4knP3LipUTidMkH3sw4WUdM7BEUCgpvgSwUNkNG8pstqni3pm6ptUyxAgnp82rKM9XxEfJ",
  "key29": "3RenqWccJvs6d1DA93kVYiEqZ8ZZuPktrUtLP6S8VFounqaiJsHgRs4TqfzyDdQ1aAyYZFTYUVvMtWtQzpoQDJMY",
  "key30": "2XyHCyj9eNz9yWLjq35yqkNPda581Uu2dpHsvszpBQQnpDhdDpafXDZKbJ2dx6QohFRb6HmpH6LCzfpXQp3UPzti",
  "key31": "2Rjvne2Any5DUjAD8wcwWNjP8uDfJTqTX2srcwzvE7VfXKzW4V3iL7BBuUCbXLFdFwqpCt7eRDZXtiVr3QzWKzSH",
  "key32": "2f3k6QCvMyp9Cesc36YoXWk4LJg17si2PrbnZDaYLz9fn2CjaNe7uSxB4tu2ZXCwRmJ52NAzgkqTn8vn9JCYFUWq",
  "key33": "3wcSPYXH5gPQ6d6LNJL175fcHmYbsSknZurr5z6zAgD9gTuFS6oZ8BEQCnv26KyVnUWy4GmS1JXnAU9T97Gpze54",
  "key34": "43QRzmKv6zM9rvUNZSVcHvpKd3s7FEESYamwRVPrZRC1amJ3QmTBxy5ZxYCTDWdMNHCxYD16YK9VQ6RJw5guFaKP",
  "key35": "gQhvnxiEcRysgKMe5Kk7YtzNc82DSjwY6haHtTearbWSbPckqc8XCceVXTHNpYJdxrof9zThqRovRLFEMbemGzr",
  "key36": "3Jeu3w1puNXgj7xhsuWfSfj8soE5pq1gPbgFEFgCZQbynUH8BxZxAxwQWzbfJyeddVBrLxuHwLq7N2q7yw58mUwf",
  "key37": "9a7hPeXiHFAujrdUcboK1jc6QBWaPqrzbpk2Tx4UBcz8C5jmEdqMAvj3HhdSXSccXLYcXWvHwbqTNyNoK3tbbr8",
  "key38": "23mSD8aQko1gL6F3ULpZVchcwD3HFaXjpfGbzgpJ3976DfFBFX8PT3wbVHJ78Ekr8w4g4CFgXXtYaYcd9FV9M2qv",
  "key39": "4iacgrbWDq5FgZDJFaa74h6vWpvEEgCJNrENxT2JNNVnoNZvb3ixBH14uCUJPdwc37H2FyWFfx8uvdx6e5w2pyMh",
  "key40": "3zRT2Jg6oYeXGZehcV7GJZTyY9BuFacEUWrEpXH22FXqRBN5HEivuMQoRbS9bjucP1HLYz8wWPPUrBbWih52K1Fv",
  "key41": "3fUgYiDWcdXi8yfFZxD6QbtB1HomaGWhWM1sca9z3xhDpfCnEfgZdPcVCiaBF2XQcL3rnno5NZgncMMB4DPWDBbp",
  "key42": "2t4HHx76V8H1PJsrtRAeFYzr2BUEL8JiwK56C1tvSuMGLHvmgyQrcyPc5NNgqSdgbbMHCcudiqGncZbVrGtvazsn",
  "key43": "5tGjFtcPA2Kv9YAwQtgKmRj3E24qQoNnTGFgNPKsp7uNLwg4igd4ho6S4bukhfkMLfTvUANCdm4qZpyjAF1tX9BK",
  "key44": "3Ca6pXfKGDtz3fqA1TL29iuEySKF3Y6nmwWQpf5Xjik3qUCF1Ck9gmLiVKcgg6wfZESSiKp3vobYPPHgfxXbHXmQ",
  "key45": "5Yc4e4mZ9ns9RdNUkaQZoupa9W1hTG4JPvT1WHhPKsMZKxFyLzHmFoXpCj7B7HTobAkxXqLNAfz1ZSirE8rTMSMK",
  "key46": "3qzayw8F3uBmvekHREKL7NhtbQbcCamkphzwUXes3bbWmfHLiGjpSttnpzFVJDcBsvQcPz1ZHyCyLPo9ewLR4mmb"
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
