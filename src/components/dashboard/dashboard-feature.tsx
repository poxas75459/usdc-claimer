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
    "3NwQ6kch68bHJK5TMritDkWzjoWknRVLML6WcHTAnRrTicVoqAAcjSepK9nm1bS3hiuFSvdrWfyf9aihBn2WPVz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qVu4kBYSfcjipdntYmZe2cvt97jCyQYzDdzBsT6zip9WMeXTY1grFo3Va87zsivstHarj4jY4fp1R5PgHKq2vDH",
  "key1": "TgyyFMRLSXQVptZE3KXTw91eV2R7vav7D7c23VmwGEAtYJc3aaNufQ1iZkMqLNaWZUh69nCATqfv9BxbfnWs9Ze",
  "key2": "3Pr6VSiHhseMsPANgksMHFFRbirJVRk2uXHgDGQrgS1h4MPqN8tifHvK98R9L1GJ8b6BJmhko3qEhs1HmfNwDn5x",
  "key3": "2Q213vpwqEymk8VU7rMd3n13FXLtLSwpaLDi1abxdRUL4csEJMjh9w2kWH8GmqBSkw6XruTqjft2GH2YtaCcgMwt",
  "key4": "5PLKm2reeZhmbSkReofna9kdWDQTaAvjd6QLA1AeiSnyNk1kojZLWqnjf5HCNffUdh2kmaFhdKYyD6kUxv5uXUMP",
  "key5": "3ag2WTje43aJB5B71yQcr5cwgqHvZPi18JJGRK5Zv9r8SaeKs5PB9FSKNzp65XmqecuLwpt8pSAeTTjKecgwPTvK",
  "key6": "5X5Y93HSXsCbaQQKMjpx3xJB6hmUztRL6Uyvnq7GKNEwMLGU1PXzjapFnM96GEvALfR9LnVrt9HNpGUHPLQ7M4qh",
  "key7": "5wurYBRvrvF5DAGePW5q1UoyE9GpgaRotArAMEPgHXt64uGwAq5kCuRYPKa216ukW9d4HeQuap6ysLRBhceJ1M8c",
  "key8": "5VHjHgfrmopnW4FqCspJhWQjiYaJ1VmPw27PnbDfssXnwKfAgYNBCgL2NRJTbPFLycqsyuEGNctu1L8TejnWRZ9L",
  "key9": "kc5grF6MxvGRDc4UwRx4wuMLkFMSHYDFDahzqKzJEdTxxSoAWouxVxVEhZhXez1b7pQU2V7hCCBCVvHghm9s5Zk",
  "key10": "2bBk9Kp9pwZ6ENohXhr5GPD7SwwS4KssqsKu6s3ecdXjchqnuodegyHNgPW1vBSYjVnkzkMf4Lbb4ro2E7noWABR",
  "key11": "2Kyx3kcSFAAzbF6ZWF4n8kD9u1EcKfJQdNaGphy7MumBSwj1mXJGZJEXLUQp5h7YTyLWsrVcsJY77jUBHgMKPtoi",
  "key12": "2R7HZrRTbANYeS8ZStrqbXvehmWo6KL8mfCXCBNrP3XUqLwp2bRWHyXht61MXyq9D4CyD6hNYA1WpkiQ9HPrZVnM",
  "key13": "2PHSEVCsoqvoVAorMz8JJyUYc9a4KP7T1CQHVBoMjsu9bYJGWgUQbcNWDAaKBpKdJRVNqb9HmEv5wYAGWFXXn6FL",
  "key14": "2syCaka4oyiydfHv4FTNpbFVs9R6pNJMRV13Ak2HsZ4e3kF6zPk5yPUZXqqnvMMo8SQrP6QYgXyBXK1GqEn8FobJ",
  "key15": "2eHWTwUHT2yxEskoYrtZgV5ocnanSJexKttw4x5WsU86aeKskLrgMm8wHG5QKsgUz1Rbq3qJVXYAFjnQaSiN8R7E",
  "key16": "3R845Y4qQsvAQARapDrk8mNroY3EMxfuxEnJSEF3YTwBQajSKDnZ7MBNfLRkS2bcGes96KyPPWuD95MjRgbuGqb5",
  "key17": "5BqWTUBiNbUyEJndDuPR1cmoEU22zJXxmNBM7rkjdvEMqvoDVBUyvFMArz7YajhtsrctpBEDLvxPPdoQVhqePS89",
  "key18": "3FVUasj7UeiDhckHDtL52hxqzPpNyXkqeszZaMdWedZDkrZjtthFkHsVGPFZtQihWZn1oZLPUDuPNPZeQJ4JtnKa",
  "key19": "raj9Dz6FCLfkthtPZi9Tu9jgRmJYmWRvKTz2wtF8Avdpy9uDddsNUNrrtMrAqFQb4DNysSmdtfifCRhtzRmvahe",
  "key20": "62D1UPeBTJNCuNAbLJkXAqLmjw3eFBLmMvXdFQhHqCUkQ88ajNHhfm9wGY2wRomntyFbWYquMVVMVnHEEZbwH2w8",
  "key21": "5GSXDCvGDA2rwCK77CsKf27T5hchP1LiriNF5VuLpdXUu734ehv9fVwwjnUhneayHMWEhfeQgeUGrXJDhp3uHKmM",
  "key22": "mHMew7emS825gmZoPenJSmkAviHtwwT3cUA2bMAbPcZ2BWMBcqp1sEPaaAFsftyBXydP7xhQeWHoZEE8MdgK1Tk",
  "key23": "2rgksLJLCumcAbkzfSphJDsBbBzAnLLm2UA6itCUD1qgmYcz7WevhMUAbmx11kV3uCJYGX3kMRahK321sRHn3DKL",
  "key24": "r9WDpMcdt25euLEZaBAoG4Sree9z8MQR5qAvMuHUjrQwTWTJPAZMEQPidkiDbQJNfvnK8WLMwT1PobD4msHSKwm",
  "key25": "3aHGBmMDBvhW91migHkSYLKqk9P1KWNiY4jFoyPhYqRKnz8SA22ndcN5rjukbSpeb7AG6wkCbAeNwwdK64z39Euu",
  "key26": "41fvvhJsubvp6oJwXsu912FLBsuo94NAnmhmrM3h4YRZQVQ5sUEcxD3fMwJgFs3NbAZfwmEaSKLoAzrR8dQBaKqG",
  "key27": "4xAR1C8SxwRCLmxxjG2WgUx4vy9JSzzmKUNfk6pGTQDdCK3Bxh24siUiQ1NsUdhZY2eMP1rM8YKTrStjHiEJHjnr",
  "key28": "3s1kXoJHM6s9VJ4s6caUVFpu1NRM1q5NjH6Ud1a7byaiPBJXanyMGm8caZACujRd1xBZukDyfBCwd3Rfj8QWERoA",
  "key29": "2jEyRuoLpPkVFQAbEuXwMhXyJgqhYvWu4aU8Avr8HB6irPmTstHe7nDNoPn1N6waqQuVf6Vxr2veWt3thpaXdHwR",
  "key30": "5fcs4bi53VjH7f6MCQGPHV3HuyhZQsf7E3VeEpELMMV8C8Rxbw1zojAP3bsdEjcfNz1tKTJTeKqEEMoEgBcgH1Na",
  "key31": "3mcjrL8NG6TVefgSz3NiPJ1MfuNqPnrxxKy5tasGDBGCmJvRYtoQZipZXxsZdAS6sofAkbBfxFsWggrhwSeuwPLV",
  "key32": "N63JxKRoq62c3P97JWWwS8h5HbkBa5DqsrPH4agaRiz5nFsAS2zZ4jpnXQJ4tEqr6L7LhFcygMSzsw9SGmi1Lio",
  "key33": "4cLbxtHbiZusHqSo4n8kXiXHyPqh9yYxDnYoWAySjeLeBEx45vP4HVqubppuJi3XxDQDCMr3PftBT9K3WCnDwjht",
  "key34": "4SLNu5NBuTnf7iWJ3XH6TMEAT8Jwcx81Zkk1F9hBRW2LzKnQoF5XaQaTWiCJVEvgCTMQWBqfkXLZinvfbaxaVhpG",
  "key35": "z7MtxJkafchgT79tWbWD6Qifii378J9ejt3NoEKZrLdomcpRYnmWHgxXkfWABT9gp6d67r7D7VrqrBh6e7vkw93",
  "key36": "3WNzvT7neoAa3yMb7D9bjbiAStozziZJrh1WyDqe68XfzgFXuPozsdqmBZe6swya123s7uyym2wBaMF8JdVkNx9o",
  "key37": "2ydLjt7hXqTYzE7Y3MDFBv4FmL8TMHvwyd6FWzc9Xvov6rq6hnv9sfq2yoipHaviEx7jAiLdajUkh3vm36CbEXFQ",
  "key38": "hYChtFd315P4R6GM3QARYvjboYDutktCDaDWKiLgnkid1mjouXdxF2kBtbR7kJEwAr2uTuL6dkuunUqKUHNLLtS",
  "key39": "fot458msMGnohtRsGdaspjEph2xcaSN3tHMbTESfMbSpfqPZNNJJd3zAkDb1StUD24cCQxpBMab93frkJNU2ZbM",
  "key40": "GQqjuTSHWJGvQajZWnn9KGG3uTrSvWSo4cLFRxw8wPYw1PiALY9jpeEBEZ8txzmdApdMiz8nnPLpwDYsaZZGs8C",
  "key41": "2p9ZE38aep6pL82XJrxnvWjVK2R6ZNgmtw1FGkhmyhCVTe16KTSsmgW4hZarFbbkMxToLk7Gp79v57cPPVDLsNXL",
  "key42": "1YLcxMLK5vzMdGG6H9XiSpMfxXp6VVh6ffawFyHmyGNaLfNKVvMS5f57sKBmDE8A9Wz8LzSo3VG5q6FeNGuZk4",
  "key43": "2QikRGGDLom7zuwTKmjLGZNJCnudHTVbaH3LwZ2kZQ5bAtygZRAmw2rUubHgA5tmdKMDe1xUm8XpCAZAMPkkLEfR",
  "key44": "2TAbxbsYphbqKJV1DGt358F64PQGYUXt73iM4HZvaLhwPJppcKVgw3dbKVpq4FEZkrUweGHy7ZqR9dbRcaeCMnjK",
  "key45": "1ENfkYZomgCfrhgeH2kh9FVFnEzAHvt7aj4rboYXxbLh815TQc8DocjxrmW3QCUhKPe4Esb2kiYSfoEmw966dTY",
  "key46": "3xidDwMCR5UkJc7Jy9MdvXfhMyciMj7Fv7X48wERG2ZjAwmTarcedJnx2k766xtJacbvD4dpYDUSuKi4g7XbQ2kH",
  "key47": "2e3BWG1sNJ6BDUGTySGooewHPzJBwzYirF8GEkiYewoW5FAng7WQ88fdn6HniAkbTQaXKo6woWWfKfjceDDZWEE1",
  "key48": "3jrdgqx8zHGHyuTeRDPpsGfgYMCJ9gTSPC8MfwdyJZQdQcHu4q5wCz9WvCBGdafgXp1K2CBrcR4sQQDYM5NLxZg5"
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
