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
    "JgrJyhUYEqjUeCvFg1BpDHZL5RdYZBCatJKryCA29Ry58dWjwX49xytk9hEK7Qo47444KWiuDcZk88L3hWzn43Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iKmCu17wBV4WwotW9WQyZKGPJUx6gzFVjjZCJt6fvX2WXo5K3vLChXop3u2eSmpHeYAYqCycoC5b3XGfWS3FivN",
  "key1": "3UmbHSHQAxZDsiWB7MxETh8dVmNCrT1rR3g5sNjoZXNQpsbKU7fd9vuZru8So4uaZceyh9eperytZoJDqVnuKtdB",
  "key2": "8g2DqmKb2xgM9T2TuUv9LQNBsAJqk8a8vfYpsuF2YVdWkv6KorzFZEpenT3vg35ce9jEZy17H6yzPiZ8YeMygMk",
  "key3": "4FRyYoLSzwxAzyPW2cWk1JeLBaw3vLAZxJLLLiesdXQaVxqNRKEYY1b2EBB4AHQVPeVqWKqz2hS4MsX7GdDQd3EU",
  "key4": "BrepJZBaQywtxyxjS21Qs5LDRKoWYTsFQ2mqRGoBkfsN38SUacJmZBTZU7KTrpjmukpH2p1NRggK5G8KNk5x4K4",
  "key5": "3c3uTty1YAp3MdhiRGB8MKV8eidra7VaFRCxZTUprTvKbzDeE9bX1fk5FzqCZtYediWQcXKHEmYQu95pc6ac1sM7",
  "key6": "4PwmwKs67XreGobLey8raqZb9bEbJ9v8otQ6WKKieUzXWjVdS98fLa9depZtFatGRusWw2GZNGnPqvMbDfVj1JXH",
  "key7": "dwDSHZm9uvBoMCKaUqZhPFrEL89YDxZXfuVjDtSWx3rXUYMsHiHoXjknSFquXwVsTVNeY75RBSkZ7UL1t6dPqtm",
  "key8": "25oLGYkxb9yht6SQM1YwZjEznPc12wRjtSPGBNgE3knEUdiMbFeeWLHvna936z9oFiAgRoK8NXoEvN8tGHXF8vzJ",
  "key9": "WZr42ykDAXgVnHjij14FXeNd449qr17js9G5tF7n1icyXd169rbaxsQkoYZAZxYkoeG9G18AQQfc2XqCu6oQgLH",
  "key10": "2zq7KkpK5oRt4HMow3qJUgAtKnoHaJJ1RdQoEBz4N4SjZ2KBuX8gHe1tKSjz5BzkRtRzwK6M78ffWRsxftAyfdJE",
  "key11": "2e9FSYbpSEmv44yFdBrCZqjJYgUYEVGxnShjLGrkdueEFohwuUpbwac7hLL4jd6kgcZJPXDJ3sq72niCGcMVWDv",
  "key12": "NvzJdSXfDkU75EV6qKAU7fCQj4i9C4Ra5rj9Bna4UwwwU3LkCi8WUyGGUuBPAEmJpmSP8VYy6sFSNrHZP1AW9Uy",
  "key13": "2ETZex92T5Z3hwcHWEtkRu7AMsadc7kaunUzyfVj7EWvqtMrPHCkpzTKd56frg4biWqhNThj5AHuSbEckTgbKhwJ",
  "key14": "4ah5k8epasRUbejVjAzBCqHdmERBhZyMQbPaNWQvQogEfiBKWA9rVVjvQ6V4D9Q7NfWYjWKSNTBFRZkGkEWsueo5",
  "key15": "5U2FnLTAhtg7wMbhhE34bo4gzZYiH5dtfirJocb7ZpnRTJjrnwTnRN3uUeoHy7kdwY1uPdKdnsHS4cL3N8duAuJN",
  "key16": "42z6JHNrcvbPmtTyqhWtwaTuULeE8JdQre1V5CTDiwcQYWTpuAV7HjyXtgqN5DajANWV7ESJZH2sGaTN4m3BoSsW",
  "key17": "4G75xcMA8wcwfzhwuXjyk58Z1vbF3vPnRFz2ub7C4QXFHq38nn7FdFLWxyzk7T27nWGP8QWTJQZoycyE9kQeLF5M",
  "key18": "2PsscUYrbU9HycYeFCVXHSVH4v5nzeF49ZSWYq2yk46TPXQxXKgXjJKcYHSq89ghdLBQrU12vPvWUD3z2D8EgMEa",
  "key19": "4ATUXsLiKiJ13akDuagWfWgL9D3fpH7eeyirTJ73BF1HyqMKBkGqVz98qkXMQNK5JRoATEJTuhG8yJHNm5HUc5Kr",
  "key20": "3RxnLaSJHcLr2rGmAyAyocsqRHHEr4XCmGKqFDBoCyYusoJGnjkMmurpTMoHs3xkWYinToLDZZgMBWwF8sLJDFx6",
  "key21": "55gQu4PtCXkpQssto2LpgTLuuURCEQ5HA4gAq6R7xTx2B1nX5r6VpK4YanM7tWDVcqxDKhWrCH2hoYhQpSANW5rx",
  "key22": "4k3kR1SbZGQXLwvtVE3cQ5RdC1arDcwMfMEPEfhfHxGsHmfL46hu4Z79it3qUCuPwGfA5B83ryZMix6zcmadtCeP",
  "key23": "4vf8oRoj5monf7ZzxRfRSJfsDBLo9yZgp4SuQ3PkP8mMPKfztAvMTfQhXhUGETVUPvbNg9eMfS95LMGn748oXFjC",
  "key24": "4bfuwEZ3gisLdrt99amfNM7F63SaW3X5izPmsbc7zaecq65FFfd1dfZgWLhzJhh2XdzSpYyKSL6a7yBeiGBjaeq6",
  "key25": "47WnyJtod1HRWu9XWdKmSZyJsXuw2zRKV7gN6Z7uVUJpnEcXTkAej1JbSMqaRs22HGVawAyWAtdFbFDKt6a7tJQm",
  "key26": "5DCXan6HdjVuW5gMuwPbvP6Fk8TEsXZN4VQzgC2v6UYyXRJcaN5ZSmeS8wsKGrFghb89adWuL2jgeftQZ4YwUoDH",
  "key27": "5cRMVPNAfp1jbMbtDi1mcvf9zYMv4HYacoJxrgRJhL8s6qdzLPgPqbbKA38YicFj77GtY4QADJxsSWp1aDXzTBHq",
  "key28": "4W1c4ojPqrQPDVZ8VDTQyTuKr5rrwJYEACzt9Uh2EmWrr3hbsPRxCaENKwJ2bCJEbRZS6mYtFFJicue59SGcDdxc",
  "key29": "2M7om2H8d7zdDzCk9bhdjA6Kfx7PVrsWSXg9FDfuU8Lof6Nc8rFZ94zxrnLtKonDw4mw8DeL2Q7ScqbkwxRtBewp",
  "key30": "43psgAq91aBR7KdnR3xn8tPJGSpE864tJ5TGNhsVJtUXi92DYw1dVe13xwXPPwtZXjah9GFmgzD1QQMPUwUgaTLv",
  "key31": "3sSPEPpjqPLx3PZEkj6JnCixvDfT8Nvgjeyzha588wkGZKCmn7Bw5ETiVD1PGwCy9tFkFS4mEkhRriLU7j4EDwQL",
  "key32": "1wu4ViT9iMGp3WtJkBLrHLahjnSZYAfmK6eE2nwVqhPurVpAGxDtGo9wFRZicLZKmZdcmWqRg1fY3Bnbrg4NnPa",
  "key33": "3YmTvKWZ1neDSkeNQqMTtiQsZvkm7tJndVb1zHuQHuvWzcByQoNEtkmZXgB1aaxyeVKehgjw9tm7YAG88Bez2YdM",
  "key34": "2kkcybnA1rQzxFH1GppKucXaSKAThhsUvhsCefTtDKJaVH5iSEGe6swtXtX82BFGtXoJBiyAaT5K4aTYFPwEw1bp",
  "key35": "3oEv9XHXxwMiYhREvFGLrsjoLQ8pjW74u2YXuh1GuimpqwAHYYgSFiSoKE4gLGcABSQ9tD5LaUkdFgtRykJCKG82",
  "key36": "4mc2ehRcvKsAft263T73Ew8aDZSiXfjVSX5Dobe2SZsHKd6vHbaM8N6b4tpciCMu7SCTCvtGtFspEnwHC9Q7BPWT",
  "key37": "39qE6AEF6zDu3ud1T92ZKJpodJeZXU9WoQNkhv2ToPS6dnfgKRDnmXqbkZ6BsauWx5QDdA1iPzqXnuzWvXhThQKg",
  "key38": "2pxKN39aHJgd7avrravQdrFby6QXwGi1puZJv37RRAekWji3ptJvTCatw2Gm96V8uwRgcC7tFVSihBQ22UsmDpUh",
  "key39": "2p4AUCCVrBXG4YkigcChXUfpLbuDpJnXUr9mnDA8woqmCS16LyqELuZtEiEpLmnHA2k38cL4TCnvimQeDVQWmhRX",
  "key40": "5dgtizrwWgKzXBpeGoyQFGmx8n9boWxBAccdrkLVQgGCF9ABM9cjCkjgKTjAWzuqhHKchuYgMENiJL1JW7RnEHjD",
  "key41": "3qSvGmhxGtcmumuGgctw5kUqSvHuQMUYfUvfH2kzg11UR4kvwriKfaG3NyTU6JWg7yVcLYm2SWJhH1kH9DYGAGK8",
  "key42": "46fK9N8BqXxZDKeU3tMqnjgN3tVeSZbaeEgkEoBcPCntCP1CCyg6dRCUcBtygeYPmHiWexvtZdXYntJF8dU9LnVD",
  "key43": "h3sMv4YpVyNB5ZZkea7jw4kA9qr881ZLxtMVvCvhnvSRF1PACpUFKXQjmAA3ufhJA1QjJUopXZ7iWoMFXEkyLc6",
  "key44": "56UrZpRbuM7giuD62DpB2dL89LVd74NNyFzwpVAtghWgznZjSmrXsJ21oufQU6kRzU2PiKztRrng1U5yfbnNuGQd"
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
