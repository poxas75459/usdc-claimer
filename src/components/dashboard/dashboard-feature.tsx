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
    "5t6TahAVEFfApNATiq3ZZqaGfkuboCpY4hzGNSqwuExajR3x67kaxDwBBw2T1kKnxWYqZA2Frtn1akvjXeAwcQCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "532W7oWejN2jua4T2s9ToC7dGBeVeLohBTQ3yAJW28go14JQ21Du97d7hNoZK4UJBVE22Am3C1HRJX7sck8Dti2Y",
  "key1": "pBQ99WdJ7rL98tb4rnbGQT6cgXTcAqk68RFhZNPWaaWVXzb6bFw2wSYf1tS3NjuYmW5AFdEhfn3PEu5iX5eHNuf",
  "key2": "WgpXAgXuAsfxwcSjmLcHgS4TxXg12P48H5TCVj332GnMvTniPjXShQgTVNG7Lbbka39QCtGxC2y24P211H3EScQ",
  "key3": "yaCDrMqByAyw9qX4K3CHmWxWwJjWo6J4pHrGEzF2zHqkLmEviWmeTAnw5ouDExpUZoJM3aX1LDRtg5Zy22KcdtX",
  "key4": "5qqEUAoQvNfrsgBNY5edjkqTmnKKEtHVubQvXQemFWffRAJmb9mEETUfD4VFfLjpdaPVWuZQeBSy3cFaRFLwndCR",
  "key5": "MyWLBkgewPJGpwHz5V3UMnoXmCRkKY85B7rRsMvZf3YPnZHFyfsUv2hhf8WTkVFxVutmAEnyMjKBnewbnD6KPg4",
  "key6": "ckdWdbBMuvjbUVRcHKvLyETXUcqrRiE916aNohrhFiCLFEG6mdsxHCV4WRPJDAyNrg14VPSMpD8546LNFggrHwP",
  "key7": "5HUEvWzz9cEe5i8vGscrgmfYx3a6UnvocQ8C1zR2ygXoxU8CFL2T8QdgWDw7V1yB9AEEbqBFkxec67jtu737sJeD",
  "key8": "2VLm4w988mRLLmsM7eUwm7d2KaPyyQyYmU4NMVDqpkrfEjjU2DiAu2xsmnRHZVaytWrDhtwL4AQGYXZSd4sikE9w",
  "key9": "4VLw1ZaNRRMnmhe3ahBTcnDgEK5oegMpB7Cvc563b2M8itNXY3WtRj7AB6j19tPQ9XYMbLcKAv5FU8rpagTjo1LH",
  "key10": "3SAGmKfJc9XVFJSESMU77JL6QEwb2A4SPE4Yz93g9t3tUWRB62wKeaqJfT2QweLJQpCWnG3SRZjWC2s9Wcf8CjEy",
  "key11": "Mf2qZyZHxQSJUHt5cgB19NoUNDqbM4ZuVCTtdDAnRmyW6h7cbXzNSJERMhG2qMibAJCo161rLbJYUybJ5oz5wuA",
  "key12": "4rLhjfp156n6zMYs7WmxZ2hBaBxUxuhpJRBPam5WGb6ZBUbNrcCB9YZR5UvWQaWdgjBRSav95DjRiMxFxxeGg1jJ",
  "key13": "3fZibGmTkMGXwFaWAjv4UHoFMR2mp8AuGxZZFhnA6xHsgzn7N3PxgVjPvEgmP6AEzamJ9ZWVzVcPKFJaQLteuFaw",
  "key14": "6KMvnciRmn56g9QL8et1SLySyKNH1xWnrRCi1AKGLqfyXhR769FukbAcw25LJ3T4W9uVNPHDnP4A3wPh34tsyYk",
  "key15": "2mynpZzjzFFhcSdeTT5RXGwcxB1yCKrVhLGeTaVS15vsnUuZBEyY1QxbX39Yh7UzTvMA71if8nDJ78thUQTt3dL4",
  "key16": "24YnwzsTJ8G4kJVZJfCAdoit8Jg8vSEKNuhtp6AK6JVWUo7ctyWf1mTofA5kCFwjffctRsgaJrHxxMs5kVeHj91Y",
  "key17": "3KmYoLpNWMzLK2w7JXzXMhQSHEAE2bkWLb9ktbVxWKhBXkT1o4XWEfSDAeRQLnrFa68UX7x1bph5MxURiMmYjAZw",
  "key18": "YgZ9TFWCSAZFD3UaMgcHtvyawYjg3DGJsgyTRPrYpd2gVWRWrn8D9EJ8cZPgfTwgng2rvgA7C7wV8NTsf29ZYGJ",
  "key19": "3AJYPrZW1upUo3cDWrwrUtWCFm716W3ygXyKFafthHh18oLtdbRbEMR3hBR8p5fKN61BSi1kREV2Q1yhPN6zWGPH",
  "key20": "5gzPUChVPY1UazxHPPscvKMFfCxfio6d1MvuG2wX4jv2ohLxh2U6KS5Ygr9pe2JURdFa9wFiFheigWM2GdgLXGJm",
  "key21": "5fVDoxYT1LLmQKJptmNGFPTEz5Yab6ZVqpHH2ZHiu8NTwLb8KbjbFjBGMvnwgxxrDrcZjMWynAhXEXa8GCEgu3Wo",
  "key22": "2HW6c8Tv62igGF7gVk8ZSvs2Yif6fXYrTYnYXyKsR1ty8Eq52SsSyp1sr1bgpKaQjxZ2qq25iRxjT5vvHAd3oMSn",
  "key23": "3KsQS7x1hSLFAVDXy7A9aoygAndXaL15towUzDc3df8CvUtyrS5Rwc7umHM7ybDkyUswBZt5RgVvpmEsg7AwDZVq",
  "key24": "gK5aYc4jrNXS1mgLbmnuSrHmnZhDa1o7unmXqkV2JoZ7TNzPub5yRxTWkBzLKYhtemm2ypnuME4961UKevdCkNY",
  "key25": "LhL7tXWYRGxwm3EXgd4YkYd8on4JtngMV12q8iV7S6CsbCnwLBsNBdcFKMsDRLpJNPxtcZKK1HMJWjFz4efy8Uz",
  "key26": "5iNNCyapwBN1C5XfbPbvAv6NM2hN2gBztfmiKUZLhE73PMLW9cUur1Jjx6w28yvsYiY8A3EovoLea3wtGjxjgMLZ",
  "key27": "5UrXwNvpn72kCpm2JxEyuMMwzNPBmkAbKfKTV8jHED3uuZgi9QDTZgzD1MAfV65wUtT6ZsV26dZBzES1CTucLdy5",
  "key28": "4TqUTSZQEsbj9J2u4usmk82SUM7W1qQR48RR5JFnqRiFRdJBKqqEnVkTXEQEtCpQ8kYsWRVjGfakfqnbuG39twJA",
  "key29": "4oQsyVFogRK3rcyqcoFKYkhyL1eZLvWgRZVppkURB2riUyVVqfz59359RtQgnA4MWDSwyxQxF3AP28u5RViDKRBi",
  "key30": "5T6hTDWodFqVPUKFXPeMXn2TASgpLArB5PerCNJahY5Sit5oomKe1yK8EZ9nR9K6s4eHCjYrDduxNTrsBdDEY4pN",
  "key31": "AGDPfgeoX1PurUKxWkcx6xDLTHgdLPcJYhgSQgHLSVf89grx3xGyrEEUvKhgnnNbxSg9v5s8TApW4TrqCRKihsv",
  "key32": "QixzrNWocR9oWNLHfxjdFRTYFBb81C25kpdwxKEQT54X8dJVZXFFp11Nst7BmhuLwiFiUkM3wwfm2Un9PdTW6zN",
  "key33": "2tPKzEqyAbJBW6CxRiRkFivd4hcmNPEQGXwpt4pvpSjeFa2mH8oRFkuKocA6xchht97dqvRzAcui4FA67pfbVPMW",
  "key34": "3uyYiiBooFjAi2YUutE58VtHqXtNUoMge2SwJYee9DGCnBBXoe3hHvXevEov7fSZQ5bhzvrp2McwqjbWDdFXfsvK",
  "key35": "2EjFm64gnL6tXufGFeLcV5boSqujc1JG7dpE36ZL3k7F7S2rKPhP7CAN8MycqZCHUBcAFXF3RcYB7LkKfpR8fnhn",
  "key36": "5z2nFmahop61ExcrykFhNyrtfeEKD4ZDybAkTSfYTxLugbUdWBKaUDMrCSWfH3cRx3qZaHdc3TYAkUXnLeE6u87a"
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
