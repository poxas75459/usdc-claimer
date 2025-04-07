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
    "QmVVJCUctkPgGoUeXvsBuDxrbdLFbnzZuu5Sj5ccEqaEp7fRYBQXB8cu3wDgGEREvGx6fMNbJGD6HC6rXzqHTfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wo5hpnx8uH9baeD3giHfXFgu24dh13p78BrDL3rk1dusMPPHDZ2ykStahcvjfBWFw12onWg4dfhAcFQgwsqa7Wm",
  "key1": "3PQF8ZzyCUQAgGAqiEmWFCtkLQMoEokMkSCFeytH1g9mqxCP3rcgeeRh8jVcBkTi9Ge5bCLWTdFC5AkJxqyTukE2",
  "key2": "5UJaZoc6o4PqQRt5oC75YiR5pXgPbfDJzTLqeEctYLHYvqvAY6SeQpFvqkF7QAyLLm51gHHAEtHBozPfySf8WMUa",
  "key3": "5Fd2bPksXKdWSBVNgGUpwg8guZsXTobKMAenHFXicoHHSoMMG7M5x96tyXWU9V1xrANCmrns2k4vnPuKKCVxtDAx",
  "key4": "5GUkUL3MN1QNuMTcKzYDA5MQsD5BJpWvGp9bpRiBhPRKFr2j4wexr8s8ub5xDr1So2kN4AJ8asVAHpMEa7C9hraL",
  "key5": "37b2rb6rhVPpaNhtpapbWj7kb7PfT2JVtAAhiW6SwEcqFzjBR7RQcy4HvWn87WApXgmccVkUKGcLmKtmpCfP1GDq",
  "key6": "chbFR6nK4ipQQJArGbzFA3617peUEiTCjZEzhPNoTPnmhhmT7FfVHfPg9RMuA4DBWo5VA1BnHJrYQbpYWwadpaX",
  "key7": "5jrHj6At8yyYfAyErK5nWbdhAB21LSCkX9PTpNH15PbMfWCEKkxkXbcxfdDCqzLRwoGMnLwfASDpF7fj8sQkdqBX",
  "key8": "fXTjQVBh9XpStFGhkboemvYVwGvFQhr8Wp6baaQiTDqBzrgyKGUz4jXu1VMtRrVEPaK7rLmZunDGnr4QVwpdDr4",
  "key9": "3j8FPiitpTzh1RF4xR6z8zG2N2pAxsjntVw3Cf3QERqwoqFRSfNhf6Xq927L8j3efhTbd9S3umZJXNS63Z3kuwJU",
  "key10": "3jbLEPtGm5RTNHE3gmYCDd2hXRNwEMyf9EcXV1H4UTtH7ZrJs7eSgQiKgmxwawfVLXyjtY1w3spzWXc5nEVjbjRx",
  "key11": "3mrrDLkq6MCbdvv1rQX24ziA3g2wsV1nfniY2B6fbC1ZnP35jAhu48YkAC6R8sEaSGxVjpD2q33PNNjWTxpMCaNm",
  "key12": "2ZSE7dmcut7QfYmkxidRnEGkVJbHPeqKxMVTeKR3d1HVtEWqnfxD4d4TbnL5isZTVq2V6vNtjY5tsYncCo1d14px",
  "key13": "Vzi561dC4HqDAU58GRt6qVJRzKt2PkiVYczV6nJgwNtgbWDHQb6nFzkBXASodqP7oxFCgUcheM7ntMeYZnz6gE8",
  "key14": "2bt7ShA3S9yA4bLs1ddzA5PyBNCnpDHitEmGh7WdRCNbhsmmJPkyoVhuPGd9AmazUYzEyUA2VDfzacA8W1mL4xXS",
  "key15": "2D14xjjqBiPPsBXxoNpE5udiS1pePrUPgXWRvGMRkS5KpeRoaNgomvztyGLF6r6e5WpNYdLscszcCwQ5Ma4RCzze",
  "key16": "422bY17SLE1en7KibVi3p8sGR1mmtNc7vedAyRx88DTZkCM7JsGT98XiBpCtzYFPC5qYSkPwpJmisoT9p8AJgyQA",
  "key17": "2SJP3gAhxBHSDwU5nDd1yPzH4dffz67JEzDYrj4fgp5f611kW6zoTy9tixeNg41RjMRGHVtLSyrvidNGHpnXCTwV",
  "key18": "3pbpjRfUsPCoC7D3PkAKW5ZBNTj9xwB7jU64hn9GFWD2dPax7ut1zk5E6jmaUgtuCUT9xhMvrHb72PoSR1zDoZ6C",
  "key19": "3Xiiijb12PDhuLqyLgrDcKMQWTWjs3yFLkYDNE4ABjzA3TTVUv4bDXRZfweUVLMBhzL55QRR16jiSdxdij71ww4T",
  "key20": "3HFpqFESPYv8Xbeh7ojqZ3tJSoqQmmRxsxYfgpWnA6mnvAWyjBZGYSf2HTws1GESKxBLSb5sn3Q4p5SLqgx8U3cd",
  "key21": "5gjjvwZXwrmCrRm2tHzkwQCdtfbMa6ozXv1BKtS7iEznRLtruGSBwGCDTYsCc8VHnMY25uD7arvy9dnSUfaEdaGB",
  "key22": "2eiSjyBn7fiCiCso3Ze4TcrffCuPCKqDf3UYq88f47uedyvAao94wiDdXChXJAKRne3rmfGcjB4weK6j4UaiLCSf",
  "key23": "yodDeW7wwFiimARb4rTj6dAg85MxFpiJqQjPjRmBSopMajbmzdcjPGhVzigbBYLd1hxNhVH3Bti72ZVfAHJgnPq",
  "key24": "N5xicmHWVzVv4bXgcPveBcsUT8wQSnpsSeyAAGSeP5TmUtkXktbmVbnBFRVrKaEFMuzhckJhbTYcmMv284ZBXwH",
  "key25": "5PYA4neoHJVd4AysC5LCcuhhBYa6gYDCc9peogHo2YNPcERUMZmCk7d54YArV1avEUA2zeCqeMeQpL1L7au4pUJ2",
  "key26": "SPkxXkcUYMpK8vQr2QFGw1Zyea661eneQc649bWiCB8yB9z3gKJJfTyZPkQhbEKrLgvJhWHKPFpLK1ex8P4xY3P",
  "key27": "5wKkrwBNL7PwZo8YooPyiFF9CHPcaMwq5AKJcwv5YcYPWYYcSbbAxxnUChdosaNproHZRPyQRQo4KurxCP791GFg",
  "key28": "3z13X1bTDuiQEqXnJVkDPQD3gmuMqWRkCsXSzsjSpYE81JgmAzcL56r47WmDMSZiLhchZnSzkGX9MjaS8t69AdN7",
  "key29": "3EnRGE7sH5Yb25XCpn5871WuHYHw6tw5NvNxtK8KaDQWuqX3r17nMZ4ozWkpSF6UwVsGpzWNvwUS9Szo3ZUroLpt",
  "key30": "2i9n2hyvWF3DvVm3EGqTyKbnUzVX5iaydqgLfmk1hx6WyE9P7VyqBaX2HWaR9z7HcixwURrfqtdVf1XBaudYYJ8P",
  "key31": "5UiaHETo6ysemsppASVK5pvypGWbRpxvDR77ACAnP6ae92gakSZLJYVUUaYsqJMDyAYjBDHz9obrVPX7sSF3p4Ys"
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
