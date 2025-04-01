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
    "5mLUhpUYWkwJFCxqTUojyZPbKxSdbcRjsZxjVhPbBecrKDu2LrvbWXLfVoZ56D1NrSbLuyPKKNx3UiQvgZaByXUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fz2gpUh9sshP5XHyCeJg2c5eD4tudSrv7eFyfNH9wDbjo1bGWSx7nmeWEW8m6g1fFNqHKqpAqx4pGgQ3YTYg9wy",
  "key1": "2pA4HYwnZDAhrgL5w7vaR7Rw3Hby5KFvR59kiYAr8TqcHhpyqNVX6orRpCdsZZ2GiRZozBU1sZfBgN7kPhgTjr1c",
  "key2": "4Zk6Noxtjo8sp8HJeL3HBF3rAGL7fDsz8KZLSicxtXDEGLFtwTskuJiaqiifaT8h7JKzXCT8wkrDgxfGX9DrTK4w",
  "key3": "2Q1tGoW2HLKJ5GEQWhi3WgC7eCK4N3Y6MFyVzbPuduSqA3iZsWDqHD9KuanHbsZ17prTRTSWHzThx4vNq6NcR9YY",
  "key4": "4fHygcRwgQjiKKAq7RgsbtEjGEPaYFqqnDZW3ameP9j9DWmAtigoAyVmTssprGXTKrmuueDumagcVnbyp6QPfqTv",
  "key5": "2J6dUdVJbXibqTTbpKyNhHPepiMzuQwDMdD7cBKCMagEE1rmBVjfdDK62VvSLBqHDHjfosmC1GcVJFdtHzq75Pgx",
  "key6": "5v6Szvdtipd2Ka9QhpmepHSAhhfzdv9Pj1tXPhop6wU3gY6Vmi2t9TNUgd8XHxwa6WEB9zCNUezMkcYNs21DNyta",
  "key7": "2Y9F9ga8wTarqrgRUkrTDPuczJXtcXbCxkbSwaGi6mkwttMwoseu9FAnFB9jiTpF39cHY9zBgxr4nLfrE5czBBut",
  "key8": "2G5sCNqonnFHR3XMHGP1pjPSZxXtfAx5GYtYQ4YCTc26miFTy3pdEQ6H1pMmTySnnqZcdsjbRrLXPiaKZCPBnXSY",
  "key9": "59PRo96pxWn8rHN8RLGFhGWhXQWX83ZdvDjiR2TM3AGhikhmrgDJp7haSErhxe3NLZGqqBQrKvC4U8K1H2eHHGw1",
  "key10": "2mobSjhjioHEspg7ErEFyBL3acye9SDqNfC2ov4VHJjyKpo8MBTonMrtoQwv1UjE2AKB3m4fpboZjsBGwkB97JVw",
  "key11": "ksHDJg8NBHF2JAyYkKDGk624XAh9eTzhbDaWnGitNRX3GCXJGDwvxJrhdy87dPGG2SmCNB8urfQVB33NVar2wNT",
  "key12": "2BCmW7L5biViBMsTNCxnK3RDZCmr5RryYZcaqJo68XsxfAk8inkMfQovpGyLfxxEt1JQixE9N7FzckXkFe2ynF1i",
  "key13": "5XSEZrHxBQSdqCV74URWZRDGRW8r86oK78o5Ut2i8sSo96cndkSGTqKc4kuUxu7NgHtjyAEsvLMzAVvE7Yzn9bJD",
  "key14": "5EcUQuSUnw4H8kStJtDuPcwoKfz2Hso5Gg2tYWCyD9jTNJ6yWCu2EtG8hjfaSe6L45sFW3cDmf9DvCH1Um1n7BXo",
  "key15": "34hkR522kx85aDvwogSzLQ81uofmQqkoKwkqwKwE94FMXrFh1aPNPxvPgYeuZYsgqU8GgUDi85hj1cEZx35bRKsE",
  "key16": "5urqG4vY99To5mcdMsPXSLp43jwib2Lzu1ubKaLqMjZVWxvno2YPqbKeq4C1Qa3FdTJbovKMQA82ZRwxbBSDHheH",
  "key17": "3VjZeb3G1m1rKT9nMrDjaWnZriWr8Aq2DvyM6QtukdS591MspZukvxYcC3Z5FazppqhdduY8e85XydmHRGf627Ay",
  "key18": "3VrGAd8ikKZJBmtEuGShBdsV3TA1Aj5g1W1oz9UPpLfepoawtgvM6mr7a3oBvycJMJMQMUdhkM5ZwBwyQtuVLhdY",
  "key19": "4qQT3frQHq7AgkXrK9GzkeysoJgkoVHtGHFqnRgCXksJ37RDPiezhUeN9dpmk3SxRGfg32C8JserdCBxYdAueCwW",
  "key20": "3RXdyWVo7vvkfjPNsF6SUiMRu4N2EuCr7HSs2E9111Kb9WLVepLmh3Tf3ax6F6A8M6hk61Cc4phqy7iD9xvZBs47",
  "key21": "3MaWCRtHLwuKoJbdBtouBe6YPfrQsV94XapxNYX9Vgpy2E1wdYVDKoA7J4wonV7LdLdTLFa8gWQEuWZj4kDGr9t9",
  "key22": "4wjzZ5tPziQNaE4Q6kgUeDd4omyq5A21Cg9JvAnRQQV8ZoiCkMhLaDqCep3p6ytKXX4ggjLTHwiFBotoRjLatPsw",
  "key23": "ziUeyPCB38iG5MXMyi4JiQnmiaY4kEGCir4EmQcftXgZn2YiY8dtXq2xrnz7YRsMqUVpZmPyZPdtzQhp4nRFzVm",
  "key24": "64Lz8TXuAd6Yqx5gnTuWBk5GPoKEpwHBGJEumGKQ8mJ74W2bBYr3XN4RGQ5HJ2Af36PgkvfykVjU8SDEhMtBmFJ3",
  "key25": "5oQbRyfmwW3348oi4qraYyH2rnxfBzLTZ2qrdwuACRSFYS2fdXYfjhJf5HnAthbVUKEU7V5JrJA7aJJbMPFTnEe3",
  "key26": "s8Reh5MUDS9M3nptF6rLbCb11DUfPCV96NsVjJAzThEStSoWvSuS67nYpaoXQB7gqwzYTQHeonzWRfaK4khqCs9",
  "key27": "3FDad5q5rs4HFLrvikjCWDBKV5rDvYaE3ZHqdsyDsrr16qJxszSJ9jYzamXCJy5HGr4KUexvZ844F5UZo5YCCnCN",
  "key28": "JhpcSrhttuCmoFcPz5c9rsUXxUcWJJ9RQvsB8WzyoVMXnzECfsZNGWonPVGLV6jgRAyGokQv4MserX1UwsxKdrj",
  "key29": "41uEpDCL9nTsYqe5za8ea8Up7HFxCendZha2tzbnhPNrF5YvEipkBmQvfuHaf5t28rtft2Gzf6qrTR5MNYn3Yizm",
  "key30": "2jBAfGYEumxn9SUqVfe4whysq1Hxkh13RPe2iDJenve3rCRqnn8dRXczmn7MKAXJHgaGXR8gq5Zqq4ERfPJYSDfV",
  "key31": "msbBZCMtNip93AFLdhjae62htqf5HiW8in9fYcJFSEpEdKqo7iTALometzecx4vgP37cYHcrZ4XwxSgiYG7B27f",
  "key32": "3BtyYmiuAWF1ibCNMAkPjisG92445dv4ewsMwGrwEUcz15hAaEuLZqozphxDaBDsooy5CiKTTsrEKUzz7uR85W6P",
  "key33": "2La7kBHqeAbBtLpzZSyD6mPavfjzT3F5awy84oQvtQ2M5hWaE2jGU13tibR7SvEomfCgzUT2D4tdLmH2T8i4ZDit",
  "key34": "2e3E7RNBQsL3EkNZkCYUECFzK71Ms3wkk4ynnyYSX2qddVTYFn4Mixgp7wNSESqvYoze1adwtyGSrQUPG4mAdXcn",
  "key35": "5UfLXxN853P6UjH6QWQrBD7CHLXdSapagXc7y4JSmYjLwDqNjHKNMf1ePtnFNqrdSR8KEB3dhgw3U6VM83JDsbw9",
  "key36": "216dYACBMc6EH2PxYpHjx6hboL4Bnw4AvCZifm8TNWHXs3sFYmsmzPSfgbFrvYmwXscU8GWPXc97CRiJUs4jm8vp",
  "key37": "4k7wTzC1Q2CwSrtvuRZ32K4JmEJpByxRftQQzBRFD5prqCDsgWmEZHeVLf3wzaz9pV72ZTwV95XhMdAZnr6dq8kY",
  "key38": "5B9yDcPJtXS6WiGgnkyqAC6RBtfTJs6aZQuRBp5eM7fETeL5D4gpk2qFW5Pgpn3Tw9EnSG6cwKg9beGQHwjJEKM8",
  "key39": "23rLK2Duw8m65cbewfvMQHhTdw1oDmUkYp7YpS57Hj6BmcsG4Zd3QN6RoX6EtzfQp1bk6pMGtf3T5KUgvJzp4eQc",
  "key40": "5nM9V3cW9d7F3ssNNMkAp596hiRdDe9iT4PnVb6XvmnBdvktBScfq35V2ixkgMG41uU23X1K4YpZAVHZwRmyHQZg"
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
