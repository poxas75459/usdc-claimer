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
    "tTBLSrVsQcLFcvJaaQwYts9z3qpxa4CQFVqSFxHH4HwnAo4zTzNSLGTs7jdR2c9YLC9tQAvbs3ya2GuMQ89i3zE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PkwKGqY8uEttWGiCWxnU9XdCAvJaqF9BDmW9i2kvjoNr6E1b33c5aQvNDbEiiLLGskKLHXSZ574nRd48msLgPVh",
  "key1": "5dUYm9wdzc68qgyz4hVYtg4gMp4LZaa1fsu4HRyjgrh2sr4ibG15yc1oyzEUQdsKuGg2ijdmveypeoXNNLmFyy3y",
  "key2": "5bh6NHiTrZom4BX8nn1TJR1rR2BUQfS6iddrYFAyMSmGdczMi9yzG5idC1z4LpTorMKC4wLyzYZz9fZNVDNQcW2n",
  "key3": "3d9ncWvFdn8fr24UeTXefr8nPNa3UCSosgcNWRaDPPGpDLXTkTexj88yG2uXbAYg6MEtzF8wgs28me2xcHkZKW1s",
  "key4": "47X5t7iE6nv4q8hrnoBWhZ9FtQdE7kATSUQMi14QQsSMBeWPwZjM2QcvKk41ePEhoWjbe4Gh1G1zcznsf1BNMBKi",
  "key5": "5gJexwKkyZ5Sj8bnhAuvijptF9iwkjdfWogx5tB3Mr7WAzCiXPmqHE3g6YZYaCPJoHQudyFDGF9jeYk8kEhWk137",
  "key6": "2pg1E8XJWbq62dtN9U2THNcXB638GACVk6F7bGduefmHJZLaZoMniLD2iMygENSReXsgAtE9Xqh1sdC6GfWRKPPh",
  "key7": "sRdVG8bEWdMgvZZqTZYAHohzPveGNfijQXhhLicxbq1yyQuhaVYRZA7oWQFwjU81vAKP3fP1BJq5QGNk8rNLt33",
  "key8": "24nFUdBnCDNF7a7gM2Qjzw4v3VpMfm3NDB9y8MgHJiFmyDBgYmGc6TxoZ7zYMwo3m1Gy8C8JJDGMB8oY2tSC7Ykb",
  "key9": "3AoakXYbPwkcERywfkSVfCtaCvGW3xT51Fga8dRFkK4GZKJsNTeVirniidUAM6gvEhuVuNQwNNB9veDqufLHiq3o",
  "key10": "2gnjs4fJH2SSY4gaARatSb3t3duHJLh3qdexmdY5HhuewWkHscuuW3Rf1yLCWg58WatQ3mNYF7gccALGpgJuUzcw",
  "key11": "66JykB9TPDEhqN5sWA6tLBF4UqoF74MWi87kM6B213AuAY1wagrpXBNYRYBkQ8PHGMdkcHhQmejAXPX5k8ZKRDCU",
  "key12": "3y21cekJLxvfj4sRH5iGGzax6PPjRwPANjMeamD6RCtkUR8cnCCtKijbEKsKiG1efBRrr9sDNvB98d8TML7eHwRP",
  "key13": "VgsmfyZL6XmSRi1r8Q6Wg8H2CwDrZbfkyZoTdTZppLkA5uHCeKHbA54t5o4qruEiGNDMfJfPPwZe84ENw16GU6A",
  "key14": "5jHZwQHk5SEv5Lp1vNVsEXCoVvW5TdC2NDQb2hY5C9C1fcFhxq7nfyExDPX9gS8r6NT66YUPWUdXUzYNi6aGREB1",
  "key15": "2iooqhyqRhQ3y5FxuEkoqufvwZm8hkGA4ZNYQgytAZFFq67znDPvRStSqNhWNviiwmFmT7bHeZWxH8nkZhDZjAEC",
  "key16": "4JNreQhK7P4f87EsPAnQTtqGTsGw9M2cBH8McdZfDGzgbioEuCx6qSYknZGaSZ8YibtfArsKVoV9qjkFU2vQpma5",
  "key17": "4fcB5s5uVeghHauKRwdWRri85WUjwR9Eaif9aHnCS52oi192D7zDnrLGYfCueRK4WEHj6FFgY9VAtkzmjq2XnSkf",
  "key18": "48P2QpEPDZsR8HZLHxLN5NkqrFhteYhRA9mqstHBZwmWpVbSZKx7vNL4szQVANXA2rL5AjNpXEPXdpHUFyE4uG3X",
  "key19": "4UVTWmvBYZfkWPZ82sDKFV8zG1ri2VdiawaGUYpNJbWcgxovjUGXXBMEhQrpjAuzth1prjPf9i6jyijgYvKAsAQc",
  "key20": "3qoeLcksVnGAWPomvMtP76TqXfGhXTZnXk6yRwCTUwnrEZuF13SzVBcgDNikp3zTgPkHr4m5ev4TR5ZNTbs5Ge3M",
  "key21": "2bN1y8wNXRWy4HBx7q36fLNpXVCEH6nBSuGPazfHrVhWfg61w62G5HjKUXQwezETU6BrtqBduXCHgazBdw2izNkF",
  "key22": "5yP87ZoWNvrEN8skMjidpun2T7DRStDsGWihSHhJKtRXsEmgNie4kcUR3bGX4qdbnwctNdyuqP86oxxEpaRFQsf7",
  "key23": "5Fm9jdUpbD461rXs9Ts27hHGw6GWfNAokYgvEYc1JP7ynVRSK4L1DkZQMJ2JakDd7SVHBpDDvfm4tc5R8raJVaSW",
  "key24": "51cSKDZs8hXXgsGanPk2BFjgEui9Fu4ZHb3mnhXsDUyEuecqezzwN6oGEmpWg7NmpZLtnfgw9d52ZLwFJVdKRovS",
  "key25": "boLp3wqX9ANvjd7rpAgaZm7tNdGU9WwM27VwGvt6P5yprNqEi9xYMbprAB5fDLKD998iNBHUS35VXgK8njEVEUo",
  "key26": "3v8mqriH1HNVZa2Gm9qw9KjfXtmsDcbwpdtpCywfaRufiUgtrBuNrGSdf4RKMhXYccmc3jbGsDmRjouH3dJLjshy",
  "key27": "5zCpjMssgKhaftAsv81QJFFjvW6YBNwNZvF4qYrUWRWfXrP7NUbsjEegzvnfTdd6HJPNzBdU1XNb3awc4MoBV1xJ",
  "key28": "43e9oDMMfVVZTb9F8stDLtDTEoJ1SsRowkt7YpwCAvmzwMS85HmBruRkCEayvdXsqYFeEJCJ8Wrfv5PQYTgZMhhR",
  "key29": "3hdhiLS3GrsFYsQEgGvcP72vyayTfM9GZHGWmdr31EenS9krGYAuZm1yPpxFNMKhHWuSZNoBW8n3ncu3jMVVwTfc",
  "key30": "3K9BqbFFT4WduSbz8G8z89zbmxsJQZ2P4Tu6Dhdaib3GDvw19jE9PwjQAxtUmcqJbks8L52QEpianoow45nohQyg",
  "key31": "61AuTTfhwxb5Ka7VwFpAifJ1pHKUbjB2aqfqzbqU55RhmeXTEW4GjdEpNPf7xbg48MpbpSRd1GPMksB8iHw5TeD",
  "key32": "28S6VjApAbmajENQzZRNabtHnvdf23gFAVTmBPQ2kyTQ4dQBqEgk42bsX6L5fNVznuUt9iQWkHvxsbQohqMDSx7J",
  "key33": "4SppfeYBk4feUrpq371uS7RZofhCcLTdQT6WRv19K36P74YG5opb3eMXNPxzYXQLdwVWfhrPojUGhSVixj6FGJDD",
  "key34": "67ZSvZ1cYRYunAuYc8HfcrtBqpovhKRbzdhy1kDxUiitmE9e7EfaCNW9WeXhpSMcmnDA2knJo3PztmHCo2rXvoZD",
  "key35": "cFqaNqPcUgFS2YEcsZp1yBhgFBomUmdoAymUi6PHycG6xXEdiSXG4pPX9aQ1TcykCRhMPM459TeTkpkGhrR78jV",
  "key36": "5M69qKireLPJoL4r5ZKFu8xBXU4oNQVaTvcqVpgTDHMTukKR32dCX7AThTCxZ5GuXfqJvvsLbHeeYpGeYazQ98tk",
  "key37": "48iBK9V8vnRBScrna6tLgEqSjwF5UBGm9xBQaVM2mPK5qC2DxTtBwvowNDKriMQWfD4EaP3LAmifwzFXPSwiCL2L",
  "key38": "5R8x7pSr383gckWMUuwJUQrUbppyiEAkNxBwsPR6urz9VfRBTAreWXm4Jmsd6Z58Ex2QS1WtPTMDiC9rL1DKr3J8",
  "key39": "ogJQyZW3VcvcjLXDprHDEUbEvFAgrvTXT6o5z75gbbrb5GWAisFgSdMuTxZGeFrH8uN2b18NTpfTTvMjHgJXWEf",
  "key40": "5EoRwRM7TM5dukmTvDFV6fSxCsXLtQoRYk1mKpd1k8Cn3thVSdiHaXwpraWBVNBiUNM7RkkJqPw6H5gpZeisaMST",
  "key41": "3uQcwbPpJZq5x4vztNuN4nC9jKQYycXwywZFhQVH4XB6K48pnmRYBmCn5pW2BcmF9U9AEmBBQdvU6gSBK3GxAd64",
  "key42": "679C9w657uQ7q1Ufr9SxB37MfukZ9W45pUte4MV3RS5a2a2oeNoAgSJGLhZzRaccnCjEAJG9NJtE4pMebLpMWGdg",
  "key43": "3LL7x91rwp7PMHCknkTJ2HzBne9s2fATyDHQHAJhRHoBi3wgwDdFiLDvrbVcxaMYJvjpjZJz5T4s2dPPCYpq2KJm",
  "key44": "55qTaTbAEvmLFaGpTVq8gn5knxtcEjW51qUdjm17fuZGtY4vAYmQ7vheXx3Rt9daY3gU2Q9phy49pR4t8UyDSb7o",
  "key45": "ZFMJJZMQPBgp3DQebVCQTeozLiBAJWuvUztKsaqrYoMGSjr5p1x9SnvFUwZiSD9tg6qnqfvPHPRn2ix4RuoBcq5",
  "key46": "3LCxauoLK4Y9URgm27bc6o1P8DCvwWHzJyrKWRsDXaRhKhXZYPGSKXh8KLDpVRm6VcS7JrWtYCG6ubSrkTbzj9CA",
  "key47": "34A4Fy25UzZqSWzQsoFcuCunfS3ZBgmbpCiWAU4yfr6EhVmtZrfJ1b5dRzZr9G1CBYA1kD3WR1ECM5w8wUwQyRuz",
  "key48": "5T8nozbRXoxBEM6iBm7WcKQPu8QT3ZxMd9fMXfgzZGkFSjaY954zb2owVxdwXNuxGBpWvHMZbBR6YK3WbFJUEjsB"
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
