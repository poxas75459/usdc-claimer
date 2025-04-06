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
    "5n1pxFkcyEa83MrXbQ1CwPYugCioTHMKsxeFTRoPpSwA2nt9WdKTebw94jtKonC1meUBZexmgjDBkMErHzBuUVPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SaXLF5pK7nziqhimkjwAhvLngPD93YPUk6RcL8ZhmLuweP64xfwS4H2Y11jQTRPECnzqqk4LkBL8YiBRoMd9sjE",
  "key1": "jySFHvNv5anJzhSBEkzAGXB628paEkdx1FnRZpNMF8n7JrqQzvwk4b9sQ8ydQXQKbuR57h15YVzU8vEWzxZXsa2",
  "key2": "3eAPk63XziwDicBDYZmcospu8z2GZvKi88THB3cRsJVqvFdgCk9zLik3icA2QeTPic624nVomw6geAgnBjpUh2YH",
  "key3": "2GftCVVGoQkVRfUwmo5HBHjMgGVs2rcTTqhfbcj1av9EjKKJyT8oygdSRmYDjFpitAB1iG74H15SpSSAeCk9fWij",
  "key4": "4VzGN7KLJjPe4LU4aG8wrx7AZ1TRdo9rUDeNAxJXvQmNa9zsCo58Mx4ieN9EieYtHngiTDazGfXxy36yb5pghy3U",
  "key5": "4UKkyhseXfKjCBxtLNFTA6at1jZDjXYVwXpCHoqQN1XGNLzPd2j1W8KL61Ge6DAbL97UKNohEMGjs7oX8jm75x3C",
  "key6": "4UqVUhn37Qkh2FcqowGBpipdH1qgqecjen4J2jDthmpuRVVTuXRK3hSYsfxPCcdqp7JdZAhyQ3fcHyhG8CStA9Uc",
  "key7": "3oaSZvQwZ96WriHv7hpdb7hz8Hb9Gg4hHitbtm6bAqXZexp8HCudyJiNgsKFdjfRFeTyG9DtctV6aBobXakWCYPk",
  "key8": "4Swv519pFLoLMgxzkZxgERYg7CFLdHUCKY3MTVoJqqjc43e5eaCxEWgCdRNdQ14PYKJjWoUSjRexxwNkkpw4iqub",
  "key9": "3JWW14chCozatgnPXP2pnCvs3YTq4kKr8tfpYvtB2MffYKzcCy28G2iGPWLLvZAwHZ1YJkLV6mu1gZP125URuRnZ",
  "key10": "4dzU74Z4kBVcJJcBSrziYJbQ5kuLnSfqrU7wgTpPCfy4ecqGSJU3hyPynHzLQi7f4aqAC6XEuT2XTCWS9Wb7yiRY",
  "key11": "4ebZPUtoL8JTMUuXvoCGPSzvUvZeWH8ecDKZWgMDtP4sBHDBdKNy6aPmGJTLG1Z2nKcDHaUWRD5cdjieUFUhvS87",
  "key12": "G6RCLtgppZC2rn5PWsYprvTuut3knGnWnPh3AUm3zqzC2pFwTZ5GHGojeus8dwQmn8tbWQVhpNga9Vgh44H1ps6",
  "key13": "FpmHFooafqFMCDYmGs39CCBCJrfiN5rQohzcAvovuVYMbV282DNJ6dczWgGnJ3Zh3Ut5nbrmSx9Vjh2HTdCeAVb",
  "key14": "3AMRfHYkDacNaKAb6abrxoVNkuLDbjDVGmiPB4qhVaNFnm9FcdmYvAh9zMK3cg28eg9Dn5pf32PS7uvdWvthazUj",
  "key15": "4KQs2D6KwbuC4PDswcRndabWJ9KUhahCef2qmSGgcwaaHM7QpZbTdUZhoijP7HQcYq22GeCt9HBpyrtDngCrZewd",
  "key16": "Y3cQ61hdCYbuDFtJ69YzThWWcZCaLYXQwDCzJfWcxYKudXyTaKHZAMY7QZoUzWd5am6WBkSf11X2QT4kii7rZYw",
  "key17": "4mh57HBzLLYsbhdDcGWWfw2AV93EBWM42uR1QPv7oxQGfGQvKrjVYa2ydisEBmJ9BHLYNEVWQjgsgxWTji1zJ3Ss",
  "key18": "3HEa1Tc6EKUKaPbtwFk1ThtkPfByvoZrcFWQExtxkP2ehmPK5TgB2unw9JYEkiY8VVPY1sWbeNPPmca9A49JdKwJ",
  "key19": "4QCwoYXGw1WSeVYwLbcCm9TW46jHFGrozLWGV9bjz1udYbwPsjStptE8mwMUymy2S7L8LhDykXwPrSiFj9uHLQsX",
  "key20": "3SQcAMhUmdpsWew21Y8KgvWvxyT99mnb6HgXL2W4BzBA3emKTPiBmRgdr8YiGNaEBbE82opXcNM5w8exRiemUyyw",
  "key21": "2dwVyCaPGBAiqqyjRtMy2gC2Xg452c3fjzm2n6dhTBoFM1miHLcKqUPX4JDr4fUsnAcU7SSoF3UhjPyzPN1At6eP",
  "key22": "TyYQXXjtrUZZQKaxyU3zf6RrAEy2EayorneGNBDEKcmyEcjNWXELDWeBVndZRXicLgmCu3g4gXkCHQCknHFe1Fj",
  "key23": "3JkwNAd1QKWFSTxpGi8Vmwu36AnT1DiJx1f7DbN9L77FXJ8HW2FVun9BN2DvaSHQNT8yaRQTVAJ2btizjEeeQkMD",
  "key24": "4hdHupk9NBtkxGX9tzEGVPwgf512ZVF1RbaLSiSeWqg193CTnarQTo4eEPyDdNBBLH3PjQs24RzrWGCNfccPbXgx",
  "key25": "2MH1aW3BgB4Ui31GgtycuQRYT4JH26zY5C6GL6P3S4TSW2UaGKBdYQCPcjET2JP6Cze2UBdBi2kPVZZMGLHAwXtH",
  "key26": "2fasy2zRNGAsZi2DEDjFmvsidGKEyncGmQ9UuQeZJA1JGswLjBUZ27b9EwtTWQoP6jAkUBCUZfFKGqVTHoWyuv8S",
  "key27": "55cKELo3EM8TifhZWZL54rCqAefzohbZYucgfqu8Uxa6r2r9HNaPQj7FREdMS5gZok35oMbZMCtbd9GSdMnhqREg",
  "key28": "3WvJKboAbvEEjftG1nEepLx55btQapT28mGre5ib2LngrRJCAcpbAJQmiQyvp5YBmHevE1AikSL88753kdtBqjSa",
  "key29": "aGpZmrLBA5CyUKivszqU8oF7e9uLvJRparGcK6aEZG8g8bPvaDSgFmoVDZSc1FpU3Hivky8ximDiwLT9gHgEsqW",
  "key30": "HLK5hF2weQMuj8u8NoQzsujN2zyhwN1xSyXcQnWPMnmXtSGC2ZsvB3VE2nb6KdrzoABU9nogo5BFyhozoRUDbP9",
  "key31": "45r8JQogJkwtU5DjXXpNKzAp1o3peiJKfri1jfWXpD3U8evE7er1gymos8ZRrhucTUH5wUeCE3w8GUh2ZBJxebrz",
  "key32": "NWW8V91cENCpC2DcubXGikSqcd1iaPNjQzshPJS7ydYHfh1eCmidqU6iVXEPo7K1S2Zs2hNMPFwxuAu3BsGux7b",
  "key33": "WzdVnTnvaJaLyJpeULANUjKD1ZEVAR2gHwP41yPGnGTJx96vqhhvo5zjLESbUKb4u8s79QuHDUpLgCZq2BV53fJ",
  "key34": "354GLo7Ak33Vn2tyz1adxGmj1n2gaDrJuuyYZ2AUT7mNWQME1s1gGQXoTaPM6bfhexq3PkfaZsXXUoyncWG4gnNW",
  "key35": "3rCCLNojSxUi9uJCQxhpWoHdePACUqyW9zwYFiU4SwXL7t61vuNYm4GBD8oxUbfaZr1Yk3CDyNUHNnUa2BBcE9eq",
  "key36": "iE6tCAsUADasxN5KiZ69DnW3wJvnSN2FLW6D7XUJURcvfBXCamTnzAf6wNAG8W9TnXvAv4YpteEtwPq1GBjWAX2",
  "key37": "5MRhkyvXM8CuK4oTAmwVSAHnFwweuBXTWku1o3pwj4m5Wnf9aJW7wJDto6yDdek6JDtTFqDNmhVL7X9NWirZCWMj",
  "key38": "ExJUBdJ4RgxSY8qbkcfVQJKZ2jMVr5x35FyTcPjn2c5kRFxP3KUrbAbwGYfJyw9eUyKkng9JYnrW1DuPUaF17cw"
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
