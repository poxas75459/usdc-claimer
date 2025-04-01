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
    "4VpdsBcDPJzjWppNhHyypWA5vFNYVrkuVjU1bPE9YwBGjQoi5iZsgVeuE3Xm38c3k7Vx5SMNLNo32JJErHwN7Gex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WKxRYqWwoWjyH44fzaKppYw7i6CVCCpiszXYzzihzuGpKNSULqAqsmJuqYCQFYarJyPnnyKDKBnLRKdhCQMXoSd",
  "key1": "4yUsomG3D5BTmZfs9Jkam3CCux7HcZegupj1icghLUBqUpYTjaFNCtNtVXqZdDrhiZz5xuLKyihVgm6vNLnR6w5g",
  "key2": "5yc8ecYiyQxTK4TsAE6UvFRcEmKZzHBUh4QfsbMtTHJfLJFTbNEXiB5ek7xbm5iSTce5fCu7wkL2Vrfv8AAihfQn",
  "key3": "49sL3A33dAcGS7cDWEbFc9yHnaak6jusjXDNuutu2wQST67mqpXEzuTyyRMTbLh297VkAkXibq9H6jKiFkP1ZgbV",
  "key4": "5tHHdcPXpRWdaBKcMeivvory2hv5WsMaTUNSmU4a3EwQiZqwp1G4RXYJN2DZsXFbwA3811jgkDDT66UacZJpFepr",
  "key5": "32QQaSpc1F5UGuqrgqHgMjTJYHpHGBaW4e3BJ5BJnvajkd1Fv2iAox7wxXYs3ahYCNmnxYDeCjgCKwAi4g8pD2ax",
  "key6": "jNZstXycvDzgTfD4QLqGFcWNvBPhrWixv6p1dTTecC5KtjAQFxMC57JVT7Wz9Yw9yfPcvLsKBgCdSzH4LzsMoeu",
  "key7": "5E8yFLzaa1GHeX26xhz9Rc2muSqvUGqfqrk6E7a1DvgUG84BvxBNBJkLrkvLkjA7nFYqQ5bTNAgzgCJP7E1YTJcJ",
  "key8": "5b1R9iAv1G2qJkKAQM4WxmJDfuK4KpJgcz12ZRpaJGF5byBcacVgx954NP8G9Y6PYX4M7mRp8XA15cGKgCE5s7i7",
  "key9": "3hxeofFj5meNFrfQbHrNd1kVPa2TNpB7DrrE2RKFdSiH4hDnXQoZokcMkQXGBnnc9mMC6hyTFSMF8kPcPsUtcbki",
  "key10": "61w1TcD7SpGnQNGp9cvsjxRbyp81FFXawDaGX9zeooxsPCuQfwFP4w9hy8h2S2Voic7DXe7sJqE9v22XhwkQEfyh",
  "key11": "3kBf5LhL8yk9TyiHeNa8wUqh9WBtkzGvJzoxiLDCSGJFa4FoHmbkTTrMsPaDGigxXLV8hNiXHufePnbxw7Knw7yV",
  "key12": "4aCoB8VmwzUWNCVmbpeKVtDjrxKQjyKXqUpPc1fA5jfJErQLZVcbSeoZqwE1u6eqr8DmAxoFBXE7beFo86acpJfP",
  "key13": "3t4GG6KiEdULZSuAmrodG1qQk8acRRu2VSUzP2c8Rpr2HthNmyQDefKsLN3DsZBPREuc9QNNHESexCZVAKQjUfa8",
  "key14": "5oT3Z2Q8CRMaskMKidYkMKQxs1P3hj8ECqGABvNGxTAwgMcL8dURDp4yH3hPsjG3Vwybv2T7vSxDbtQ8sYY3UPaJ",
  "key15": "5ZLDhcdgyt5FYK9oUSE1Smnmqct55tnT1YfzhpTrKoXm1BzkVXJUsz6mzJNzgm6ERxJoGpn8qnFV7mBczmUAkd95",
  "key16": "4DGPbSSoVrzeNhwEQpGNrZj3t7o8NwYXGoZ2HXNWw79K6WL7AjXKTYPydZU17a9tatkL7F2pHRUy7iouTJZaX1SF",
  "key17": "2XPeVMcsq4ChDJAFhmkxbNLFf3irgWCPeFLcug2oPozZN6dX7sLa78o5B5HBa8ucuGmyEXSK1D8QQMeNgXt3DEnq",
  "key18": "4WQtWSXLzEkVkSVH6tHyDYFU8jKhNdSR8QfZktt88hB4JdrYk4xLNxZ6KXkCFXFmodmrXSbuxrXjkp8vbRo3aNBW",
  "key19": "22PnohUVu8iDQDGzVF3SeJCkq9W9zpeVongazK4nqtJnK4Ws9gVjs8s5nNo2ztUNco865Yy4zBSfkoFZTPBpof7h",
  "key20": "4Fq5FUNWz2Gfpzshk4486B2RyBgycwEwjwDHSxTsKuHwcCfmQUf1gzbtvo1K8Y472QMDwbQ3NgTB5EwZW2cTTduP",
  "key21": "2cwu3rssAkJxamHHo9ZJTQTAoHkdoV3Fkain9VQyjfnezxGFAoEUzge3a3sDubaGXxYCopuJGLDsU4gtPAeGU5ha",
  "key22": "37T76nvfVht436tPcAwBoXvMEdgmqfPokz4f6jwuX1fjZ4Ck9qLEjQzSs2fhAyZqK1maZWWg8RuorWwRNABw3bdb",
  "key23": "2ycwkjuvzxb55rJW7QtnmG8ypMa2jqpU45KmByoPKr8yAM23wmNaXHXzrCYmyFiRjPkPWwKF6bCFRHhGqMyrMSqM",
  "key24": "3jr2HZYncU8886zakdFUH4HMXmuAKCYGwMHv9kzTan9jRjYU1vXEbvdn5MLwkUcN62vVf47boGQWp8ePJDLK8SMe",
  "key25": "K2P4M7dvEf54j7pmu5AcUp5Hh1fDvxenDLN5KxdDwBdbA4EQobsJ6CEBXkE8L67Q873AK9QNvWg2wBNXaiv9tvo",
  "key26": "32rNys73WwKwXL1RL7i99Sj2Mzi5fEJCCy18vKM54XUzFTc9A1ZJKT5vmbAnsHBSqGtQDMvwpfGL783TtrDTbtm7",
  "key27": "4Nssc3WmTRCTQD5kyqqrmYk1zj2KuaodBfKJmszwFFmp1L2fzyqphN2meKoca6zP33erxSn61ENNJpW2B7p4LLH9",
  "key28": "3wasjvy7HRWZKwsYeG6uwEW7FT6DfddvyPRDbdA16BJAJdD9UTLrMbn1Xz2W4rNUsncZ71DPK2PFuzTmUsq1Ld65",
  "key29": "4FdjtfUeqgrmy8srNTNoR727RfJrwxRMwDb5zdrUiBhenRwYMK6CMBcNpkj84bU56akQxUFJSFvVU4Dj1AMpoW43",
  "key30": "DWMzjobJKtkFXbhchERovrueM2LKZTph67K6GMuG7waZ5VqKdrmHYLyBmV4kUhUSiTzWcGDAZ9d1zABb3m8nyNj",
  "key31": "61w525CwZFQopEbS1WqcBQHawDLPjUjAPYcTRh398JRmqGVhzTByc4AWgSQXVNn8jTxdZdVSJ5CjB6cfFUFqUntx",
  "key32": "YTDEVaELwXuHMyyDC4nekx7LDEyntu9vcehvCygrXQDHzfJ4B38LKzKbPMP3jiFHqEKA11SeT4guMBMx7TZaw6k",
  "key33": "5CFpvbq3Weans95hX5xkmUFwusj7TbVoSR69BQwqyR3tXshmCWjcKAWR46ttqLveY5aUU5sSBcve1mMt9nq4eLdW",
  "key34": "4ue5LdQxTpe56HbgHD9kEAPZ8GzBYoTimw3WRsq4PKP7tcVuoiDPGApCW6L9uz4W16141u1Cds3vCihQPXsbiZMA",
  "key35": "67N1Y688Y3fF4ATrWnuXQKVTPKX26FbHwTS1WDJt6LdRoQGgWDZBM2K4WjMjof9xMH8r4oZHwMHNCceqdQEjL56F",
  "key36": "rWTowgUkczv7BfjtZHryP88C34QSDuRAGQwZSatr4ZowBchygP1zGu5piTgivsQHQ3BseQKHnXcT3WEueq9X6h3",
  "key37": "2TjTcezTEeC92AtnWbZ9ropZQ87CCg4D7G1imMH7KbT8gyrH2oGhU9Vp1SYDHYaHFc47o73aPZ7poptmasSsC2Qg",
  "key38": "38i8MX85KhJxddBWa2a3tMKcw2W8x3JRSVhNb47hALWSGktKzto2UgNyRQN71p6LeBHXpbVizrfxFV2Q7XmLseXc",
  "key39": "5tN3n1dwSNhGkQfHbkQZ7XAAdnB1D8xwiduhMPZpVem3WeUYdeCiXbrogKUhH1R9cMKJjp76dEPep31BfX6M8h3X"
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
