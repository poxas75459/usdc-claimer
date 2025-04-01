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
    "4yMw4sA5WRQtAQ8Zi9ZVnLNEJLqns1iaUb1kq73dmt6yhPmSEFHYrRwmNPUD2wb4KT3VrXAkrkfQmu1LcdWWzqgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7jwfaTcpgurUL5V7fdQECjNpkZerwFPMHu5fzpyKJS3AjKJspcfSqADBGYwtQ1E79oSZGU1ebTP92VetxEC9X1n",
  "key1": "4SX9VEFH5FqX2MoPtu98qVytognamKAgLGrrPjrS8Y8kyZ7dKj66bJJibXVSqLgE1wBPvHBmdkjAE3aZbFZWzVvh",
  "key2": "BYED8azgZeayorDqfMsnJdCsnVRZq3uD1HidYLNbmiWeAc2PvDJNhhyxPvqwyTk7YuzCDLGJnpyBwRRv5sV1udc",
  "key3": "44eDdBq6Q1CASNGDZ4m3nwzzF5VxeZCuum1Vu7MnjV9B7DSp213YKU4SLiztcNgNoeXUm1FmMS6dL3vh8a5oBYGV",
  "key4": "3yfVLSUsV6tjXai1p5V1iPomp7ShCTiGGPBng1n2n1TwxC7VTZdUHmLqb7BUMq3qJdo52XTrEXszkk7B147Xk4WY",
  "key5": "4YrRrCcuioBuiVfZ65XqjHYCSypjBybsC2h7YYAYZF3mVfNRiCtiU17hc4hhFgrDChGqPhLQ3YqMBEb5q6hPB14U",
  "key6": "nRU7LtX1UNUCyphAeebh18QQf75sJiqxoJZf9yVPfpqafdt4J6Ad3Y5ynhWGNLVvFD31zBztoSHv3DpHyqyoyin",
  "key7": "4mCRJofXJ1QikLrZZJQPr3nVsG9SNhjhkMSMmBjiwxJUCEvTPqQPAFWmUcEyj5EcdVmEGzGXd1P9UNnpvFkuG36V",
  "key8": "4zYaiGxxqb2Un6gCy2c47dn6gEQjn5CbeVQaAVhD2iDNNZkrckaSrDiJt2Mb3Voj6tuPFWCUQqrm5rwnwwYghrD8",
  "key9": "5xYigfd6rM19Ku7dcThZUBcesSt3GzM4mygE6ZZxQ5eegEVN6aHXe19FxKJB8oQ2xvLyAUr3e9SC4TN7X5uMeh2F",
  "key10": "2h1wwdXi65gMS8MckvWZjhHxWdwKXAW6QNEt2dCBJJEox6FDkHWuZ41LTqo2oB2oEguYSZU8Ek1n77evRGcXfEYV",
  "key11": "hwHT1EWJsiSCDjANcjEXQ85U7mCuLWzn9KHQHvpU25Rbv5bdaL7CK9G746WQZxTUGy4dX5Hd6cuhZUgAoTuQPWf",
  "key12": "3N8PaJu6nCvxeLEoUWwQaMapKvWua3dACtYxFkyUAvq7KahjWEdNRsD6AM1z89C2WvTGZuS4X53HEqGCAiH7z1pa",
  "key13": "9M7MEazJCSfHLiGVGpR73JDKhUracfpK1NtmcJpy1eVqDcpE8RGRBoNuDfju4t3pGSm4DN7xsTiPPgqJnKq1yMu",
  "key14": "4ebTGzj2fpeLVDWoyMmEQ6rUfBX5RjCK6J4zTWrF2Ye8pv9rfZgtQmKxCvu2WmBP3e8EY2HirShetbAjGSSgMJ7W",
  "key15": "coqyaNQ4yErbgGN1hMaJWYBS6CMRwKvaVDaKmpeD3fz8qDvu8yAHvT6jRWhNdxQM36fTzyT3PvvEn9MsM2s4Vsb",
  "key16": "47ijZhjzgdyf5LHfnEw87dfdLn6euM9yP54YzetMFraRy18ckugXtgfGRiB7YEnpvvPseJtgVqQLWYYuNrb4ij2y",
  "key17": "2evymZxvPx5uzyEBNCcpN7G2buvZPvkbz3Xta9Es3dm76dBMfPQD7hHnvUJscLR848yuhzUi7tfijxkVRedQNETf",
  "key18": "gtfo1CSbNjedoKUkYThDi4qzM8TdT7XjuLpVhF6UmgBWXyHeZbAtNheWpQQiPA7Jgce3abvsWNvpbvYQxheUukq",
  "key19": "638FAfmETcKX5JmBd8jU2orovL8hsAost4iYJHmaW8KS3zWP8XXs1m4FPBEX2YKWWnqFaaKyRh6wvQRDApTuY87g",
  "key20": "VHEJdPtjg8GvSM3aKvB9MZHn5nL9zntmjvJHR6UbYMe1f1nznqrXxbKVk9XksAAMSKWd92BwbMMqsDvruViCTgw",
  "key21": "2Ba3k6t8eU2Z3YqqAbyngMGXQdaJJ7qKBtwqYjtrN6zE1Nr5F46knpGjbFiTtgP615eYWZKgrE6b8E9UpGeUpPu1",
  "key22": "GY77DvEVJ2o7rsqszsxbchk39ZKpcn8poCHDWJFEN9eBKwEJWwK8RJgP4hDdNC7nP9WUhr2koEuqJ8xKccYLWmk",
  "key23": "48KTDWjq5VDP53WMC4ANA98xV6Qka3npSt3wXEQLoq9px4Vpaw89s9xKaV4oqtpjvjiAwhZFietqoZSoV1LXKFJW",
  "key24": "3P8MAdjnyyDtdaGXf91tyJj9cVPjEF46VjtVVR2vzr16ZRX3vGqeyzycbWVghbzfxnqQTx5prJjtVhNujqLCSv7Y",
  "key25": "4jECXbhPNqR5B4X1uc24EJ5Po4cX38mifayA3yWVBvaD81Gm1omYgbMWpsqjrySFz6r64wXJZErHvrvTnu3MYyqr",
  "key26": "3x75KZmLMPMmtmrbFJxH7xkkmZ4FZDRQ9jPmVwmPcecUDgXBU5FjaKfH8sYJKWwaeauuP2e2kqBE3LRW6JpSM6Bg",
  "key27": "24Wm2eHzBXU1HGvhfoP6LE4MFrPrcHzbgM5dQ5NWAfZynPExRr8DMwpR3UbovHYMowSJSsDSDqiSGvxhRqobZz3n",
  "key28": "2voXV7Cjbnmz9KJEguXrD9zJS62nqRniTqAHBCWp27zxEYCEAAA89eofED43ciFUE2cqwmek7aKG4w12WNGSpb77",
  "key29": "nqHT1jAP32v1Jghq5J7DeyyydRpcHjXEUavyin9LtmBkXED6eFQrwdGz8avpcvL72RTrVU6jwR3KSgnWeMyHPee",
  "key30": "2s6Qca2ErPBQ9ZeAJ5Xwyf1Y51eyeYqPdJTG2HtRFU7KcGGG5F3zfB3255uQsdmZdHmBLYv1ipa8fLwepYgsYR4b",
  "key31": "4oEXmXebEYrWSTQJuH8z7WAqhQ9e5sPWeaaSnNCmQ8yZdNcYqiVTABrLSbuZrQY1nTcVuvt1NRqFwpQeKmAdapcC",
  "key32": "294bKtM9Yiqnmb3nUU14PPJLCgdhBMU6XGZqQHk1XeFnF4M8VFr259q6LZ4ooEuGw5eKrjTLf9XGUrEnUjhxBijT",
  "key33": "5KsHrskGUWj4CmwssH7o6i44Boaff2VroKsk3VczzvVECrK8Y5X2m2rg2TtHFFa74kho52ZMRAJPv9FopJ5svzU1",
  "key34": "5fyFku2Lrt2bPaPKn3Zs1vyCymvAVAB2uBBqrnEj4mrVti8XiQ2PyAaRuo7hfef7hqAcAtnN9ehgxG46hfq92z9w",
  "key35": "5NzKFSs2YNADYkYVR9qZgjPTHae95knaxcQAvpxuvfWnuvokHekNWbKTNcTXwJc8Eh5ywTrxksdEkGAj1a4o6z5Z",
  "key36": "3z8xvBZrvrMiSDuc8PMp6aka8avmR1Y9b9RsUEE4fPgmu1TY28JzdA2B892wSgJFRyboYqMWhNCBRZMewADjfxTg"
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
