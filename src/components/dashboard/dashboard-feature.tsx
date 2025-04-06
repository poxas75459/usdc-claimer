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
    "2sdU8ChVXEwJBmRNiE46vnVRSfNnXFhiZLzd8PSUAtCB2Ue87FVNYvYTfSWG9skonqwiQhjAYuy87LuAxAkERm3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5neQBANf2CosaF3ji7JRaHiHLy54HVUtCE44xswLUmud3C5Z2cPppAgkhzbSnycA26o6GKTgZyjt6tBiuudyP2ma",
  "key1": "3Q5uHyoJbJquvrY22ymW873w8RE6puWVgMzBnLtUzo9YzGEAfCPJEe4FSoiVth4rW4cXLkhWWqNr1fLRV6tDctdo",
  "key2": "oVwxf1dvp43NkFG8b2a6RqR67YE4eYYmAgcFiYSXM8VbyTJb1ybR5f2CZkyAk36GkcA8Hv3mfijzpXMcCd7sUrY",
  "key3": "22t5VJqdzkER7jgtVyofMvjXR6vCUUXM8bTUjbjbNHi3cFSqBkSaAdXvLDuqMqLKpm6N1dNbN2FzdBw9ci16fCFF",
  "key4": "4jwcfNYaz65qjvHFGwzyowbzziqBMfVBDqFxsbxuyhKXbswYekaSFVdbrb8jbj2Rz1zdagyPwz85ZdjKsGBYNYxg",
  "key5": "2pmaTZgdfszvEvTgi5RPa1EvwU8f2cKa1dEhjxY6SSb3QDB3iG72sJQss6CoEredEkvob8g8GbxMEvT5HVuBHZtX",
  "key6": "3tt92smiSHQ2LCsnecBjhPtVv3USpu4zpyD3VdJrD1A2M7uM43qmM4LRJhBjotT8nXc6eUu4NkQhuQHPXmf4VYDY",
  "key7": "4qgoY7YuFJ3u7q3ooREymAZTqMyiagAacS6yq89Wbakud59Waas7yqCYQnyNZu6k1q5X5jSUXEcomcCycttEbRYL",
  "key8": "5okcXkxeQpsJ7F3SYorEww6hpzav9DP56Sgbis9fZGtJP54gxNenJWFLHnssK3onGk6xCARX3CCNR9wNK9bqibTh",
  "key9": "2Y96ixbvrKHX7zjQ7bq44Dt8QRbfMZZKPPXqPp9mZwBtEEjiyqN6Cu3xGU5Lt6GaW3aGi1FqRKzhBXwcmLNVfi9G",
  "key10": "21sXaf2Dt8boYWNPPUm11wWbYzG8qWoZggyKUtpK2m2GU4L9qQaWAMQB378ZJ7zcNqR1ssRzRUQAn9beufNhu8KT",
  "key11": "5AqNWrVSmnAdWq4xVChGVb1LcPsMDeofBURxwesPczeHnvy6v56gmbB6Hdg5gm9kjmiCHknCDihu2a8FxymhtQ8f",
  "key12": "3DVmXnp4KR7YLb3fKnZygcZUAmBE7Lo1se3NypbmPMy7U39WvCw8FjTufeQZCpi5RN1tsWRptiCzFB54o6Q5T3me",
  "key13": "DhXF6HKGdS3po46zEsByTNncEXxTvPqS27r31t4hR6bRKzN4ozRQr879BXwcXG4RdbsQELQRZhrMCvpGga8ijcR",
  "key14": "5U6YN4LNwVXgJPJbJsWHoQ15qDFcU2TAdWCrzBxkHMUR5NQLSoYMRKoChMpiWhhwTK7LgqgdXVd1Xm9kCGG6DgSz",
  "key15": "5ErVJejBdFWcdCjQC6BKNkXmWP1s5Ucb6T6QovHNcMQxi8tfZXT5Rg4hJebFrLJ4FCZxHgaqfsgWzFpXrKRVZkVE",
  "key16": "29PL6u522kADBjdFiaygwvwttQ5Xaqw7D29bmstUAipEZue2emSfzvwisRPQsTj6TcmqPgEFrXswokmvM1ep64UT",
  "key17": "47DDNgC87YoYG72bwxye3Zrz7bPf2nWymSrMZAQChjaX5SF8ETfHsQec47WYVkFpL4KtSbd9Evv7a7Msz9Ph588m",
  "key18": "42DN2xG8sVSeuy6FAFMC3XxUCxSPMLkgbe9XY7yicMATciyy6TPLPrXfQfAKMpViQvqXtCDciZgjxgUmvSjgYmdu",
  "key19": "54uVqZk454XtyUdFRYTTEvxmMu8bDsPD8V59BnhBBDnjgphY1NVLt7fSZ4kppEiD4iVRGZff8FPHd9VpW4DY6aSj",
  "key20": "DmMwMfzTVq6vjJdBwAS8Zk1QF7cQtUxp5uvTD9HA5ePvPSW3adDBYRyD2MTiWCWkrbakpK69musqMMyuqdjvHEN",
  "key21": "3h8VPCwFG1aYrCZ8Gfjx4oHvs3zKQoLyavZEoxF8Vx4zH1PRK9Ma4Ux3teN2W6D9S4SYFfsVaQ6cvchhJSR3ARGr",
  "key22": "L6XGA5FBwzWdXGvS8RnAE3Pp9hCsE6LgXhM5e3JQvqL2VXuWDTvAMGyoavWQ5Hv73xmBzS7DRBPMbihbCYT7V7E",
  "key23": "Y2bwnhAQQh1BKcBUN2A9ZRE7MPpXsKWb9vBxApTNfkmJZ52ms2EXoXaUSy3tbBaqsqbJBMoRQkKptQ5gGFykZn3",
  "key24": "2ZDuEp28R3KX12kp5PsuZ8W3aeoDnNCQo7weCBJKqViSZWApsweRLtbkKgkfA3U469KD5f12Xp8a8RtWcfdQfQrz",
  "key25": "2hmWZbbSEFC29nURR2oqaGa8x9Abtv6Fxhew1pFMmTsKLwAyazTCL4NzCzEmwwbTy9DhQAt6swRekxR8hVtd4AxK",
  "key26": "3qnz38M8E6qywS5TvA5Zkbppnfzt7AxxQ3LjUyJs4EzqfoBvwqGCXEEtu4ypvpi3iFsLzVE2qXP5VUiufn4ZmszA",
  "key27": "4XXHMdfNsHp5irJn3Mx8SgxeRR9bm59BjmjRuLVgWbYyEZ24vyNshxZoPcbrQBqvA99qrJAboJMg84wBZ1qUbJsn",
  "key28": "3WGbdH78i6UaWcKnueaT4fnz8opexL9NVDRa7TkM7NoZC4DeGc5wDhiQeLdgxRUW9bqqFibJGxTgpv4yR6GLi9bd",
  "key29": "4iVThs2mT92rRAAggGmZ3N8riM1QuL7XAiy4sdzpa3gdtb1SZbwtKwmAukwutaBxwQiYR6maijCvN77YUoZBDByL",
  "key30": "39MWqPeEQKPjysRpia4bZndgYR21PhFCqrKCNssqiaHKiL2PZtyJ1h7e3qU2wQpY2hQzfxuvCdZ4HN97RLEXMhqf",
  "key31": "TwLKk9rUKREhuECu535HQXxeuN1xt5ajrSiLg8oi2bFV5usU9kZdKQDPPhnPh5VXgthXZPLaLEYLqBjgyFMB4Vm",
  "key32": "3wM2hJjPS6Eh9RDkgD8ueAoma4TsTxK24phBRc4FcceX937K724oetomu9j9aB6B7p2WChN1jEGtvBeHhDXjUJ4q",
  "key33": "UEk8xxDnnFDnnYW1JjSDQ7jJ5ZQDUpFSQDWR83gPpbqNQgWPLx5GHULH7eML6Lyp3jhQimtPY3vxq75bpEuA9S7"
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
