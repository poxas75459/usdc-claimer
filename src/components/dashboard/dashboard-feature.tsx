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
    "5pBZ1kVZt4jYu4BXbAxfZivpsyA24b6eTkQzkwyuNHYzUnjHeTEkDV4DWByhdusdecXvXVMCdgXAGNWceqABm6qc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "333ubNsLR9DfYh9XcbAoCK28kpw4SJDUb87hQeXxmeGAVnJ7q7XtnB8DaMgxs4RJzM5Z9CkS8ZVpp5wTri7Wxj6c",
  "key1": "4kqnPuXH3oLDz7mEKDdzom3iEQ3rxKEuJi2VbdQh22TmJq1ViUqHkkes9vnpk7AfuwitwRDiJ4BjxK4jhRMRUZRE",
  "key2": "2r8Y7EmGzr5i18The85htbjJST8PjfR6ZB6HM7dL3jCTkKsda2PMNxapYDSGv4U831tNwpB6NVHBjpFDDuL49e3m",
  "key3": "35TrUJWDbcKhGwBb9Aw8qsJvLynbcHF6HkdXFQkYvjB7oY2Lm9ECGUvgXitqQrRx2j1x5u6jSh4q43JyT4HqPBeD",
  "key4": "Tbv2msURuyeR4xfpoV4wnBGTLSsSK45pFkWLGYDvAMh4gYy4MGU98qV5nXncNa4pe74BRaZtbkP1XXWSkFnQJ6H",
  "key5": "5nbKm2g56ABJKWSbH9pQqgXyq7g5DXbpWmCxU6WEbgXusxjACNJsc6mPwxotFWd8vwegD5TJmWy5zdMt6e8mQVf7",
  "key6": "5rrk2SSKDtSa1y5XpUncztGd53m9KQxc4mZkdtNjZ4qznDGdR6zuwWfSrw8urgMes8tht94YFgfHeP5KcGXgXS5T",
  "key7": "3rHaoAcGKPxXQNxgTugrzydzxqNSo3SA9Le7QVzJGSc9A2YpcdyJRJY6NJSKZvaZxCoqk4APs4gEyoSdjjqhGu2b",
  "key8": "55VhfUBoKSmAnq2rT2EJxNQMGQJte6Drw18cGtbPQJW8VfmsFfvVpw3Da3EgjoEFW1HJdWrz78HDwok9nYSwJkgD",
  "key9": "32QGHLkh3Q2H8xmyjxsxjqnxLfp865wWjETjF3GSZ3M33pB3ntDMMfCwFRpTh1RRCtUvy8YFdERSHDvPZKALYMvw",
  "key10": "5Auzbd1yb9DJPQr32cHffSjQv1CN5UsLgMab3ivQKQ4jtsTKFvTgX3ZVYXHBBDAa8ti4i8GamJS8ir3anumSSnK",
  "key11": "2E8qvorqaYz7biq37c1ArkEHJQB8CWxXkwHroxNU2oMqUn3SBCGWmGsasn1ajAN8dZdfeAYnFzAoePnv7rjYmRMy",
  "key12": "58HQHxxoh4GVvKsHEjavbMWH7z2K1ZagKjqxqXG934APhNY5KcNzMuweUxrMmV5zGVkyxuXCVkBTwEayKVXigM5y",
  "key13": "4idVXMvJmCtmVe91icrmYWRgiCw3WUfy9DGM1U6Yqw4uL3K1Sk19c5DsBXMCiGWQ33s72DN23jH8Y5LwTWfQPYe3",
  "key14": "o3ZaHQV9118BYQfL8jfPTTKnAbjiUfEr2TnCN7VXEAcMm6ZQd1Ph3cun4jSZVDxT59HibtSZpmMuaUip85CZ3oS",
  "key15": "u3mAXTEKUE7dsu1xziTgJ5pWEFhJRSiuoccbaL93kpVJNCbFhCxnXTQYnVfnJkyM7FRecXi1SeP7vDE35YbUSor",
  "key16": "5uXpRjYCGjXH4pA9nbc3M6LAqrQrWC6C3ew7M2j1XiXmYTsPGi5YNeRLbDwcN9cU36F9XEc9AvXsZyk3dJX44rnc",
  "key17": "3fMGgoegVFgWXButcGjmuApoNcNPvUFv6FxbLF2oayfS1wJcGUwcD76paBLd5eFzspgokurJgeYTrbrfNHmXYqju",
  "key18": "xzc8d3SFefRxY5zSeh3jjV8bNyR6ZyEgQNkUQ92UzbhicC7ay4sdjpYHJLkauauzS8U7AojaZY95yB2xfuPEX7q",
  "key19": "5SEsfpd4tFdESzj4b5GAFvMYkGDZtsPTK4LR3onfgRqeGdkst2rwbKUHQCjHZ35TW4gaykvmheZEMxMN7ycPHEYL",
  "key20": "58uAv7z6JcJrWE6FZhyy1aCnwWRzqXHdN5FE76yMbbsSMZ8RNjZ9vkipQBCvNu2RhoxPspeR6SBzL5DR5VxkgBw8",
  "key21": "5FnptZt7gRUk8HrjsWgtxvqJmHr9ds9LiP4n6MLqXJquw7ofD3nv1FTT5mgvUNuHUgUKU5XdsDTqNML4Jzd61SRG",
  "key22": "HjBrBPemgHoX4Hg6f5RCQzsXY86E5QTPtdMRyvYCz6U4PSw2PYsYcCxD64QqLCGhiqgeqLsyYqsAo6xmpJpXZoT",
  "key23": "5pEUuHDNHKbeoJqLh5oFuvqhn27wA3ine1RnqHf3qQYdusGKuSyMRQAVS8k4PamHzd1QUnz9C9wExbBaaHYUL2Mx",
  "key24": "4kR9BdzEcgoUzj4vvsAcMPnymV6FJ5LRxzaofyvrnb7REmuuuhaGywfwgMkBAYY67JPd9EaVZjMcfnfGdiND6H3y",
  "key25": "36gXuZAebK9J962yguZ2BUB2BmaZ1NuHUuwBL62qGgT45tUYxgmCvbtfbrkAU4jW2sqJmTZTixkY62aHEE8VZz65",
  "key26": "znnhxjCRoMW7abzowDNe2o74g5LWBpsPq7MMNvm8f74Zp3mM8JC9fuSXRbMZ4gAQ9tTSR2td1qEguivXRkQEuij",
  "key27": "eRWPo8hLiTCeNBcPrb59YRtn9YWW3c1tggrr4rf95Kq7c4jZec9tnws5S6kFLt5ntVyN9fRCV8cNQsz8YJFoeep",
  "key28": "66LKnEmFUxxFj7PrPrzBsaRD6aJcEsxKqu9AV5ju9CmMT2k3Myeo6FdRFzMLWnGGwW35apmm12mNZvWFfRHsD7yk",
  "key29": "5vr89wXkgE5tD8FkWqS8Fzju87WN7Pyn2okat8yf7E4mZi8M3SL13aGEGFAP1GK4nfMiTuw3FHwpugMBJDdT4cfZ",
  "key30": "26tRK74MjJWatCoSVXiyZJC8SKCqcSychcvZUAHeMFYehbPUmmpehoPZNXXgjf1vnR6LCzrBLmorTKsAUdud5dU8"
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
