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
    "5K6BuyQSQiKfbu7DACMVQiAs6nph9nPofgvTpphkEaLMf9X4mUahxQwazzoeSPagC7BqMCUxa4oq7XF5BeLam2P7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KWZvVDsrmhz9RifyBZyoRW6D45pku2xUGqUUPbHXS32tTtNogNPDMVtDgbdbKyeFxsbpT4jiu1SuaferWgpoN87",
  "key1": "4fgbMocfKSdvQ2t2rR4QgWagGpMKt1H1jJ66v85hepSXAnFidDfWf4rd9WK2hL8TacVNnQ61unZX6DRDWN9NaUrw",
  "key2": "5JxDs57FAYuF3UCZrVs6NQ7Un9dQishogganLddX7fwm2rfBg8AqTh8B8XWYtJQcRzCFDvc1xo1JLaLMnwcS3W4u",
  "key3": "5gh1mTXmRmiouxZoHxhpvRuDsj9tso1koYTKedbMGTGYgtxgzHeqQHaxjDEVsgBGAVPGuXnnyeNnzNoGWBtEwB3o",
  "key4": "3jvTCNFnJyokfRPKcYxDNX3FUKNfsB2VNiEpSLfyYbf7Nwfcja355JgWqYthSNWgDuSLGo2ZtHAU8yP3i9o8jZw9",
  "key5": "3qDGLmtCAGBu2SbZNXh6q8HxUYCybXMSDK2Vu1zt33YQAg4MUTSvnidpg3ca4koqjn7jbHhXY9C88rrGhs4qEV5Z",
  "key6": "4KnKzC4LXtsTiAkqq24jfg3f3hMoMR2wPj6fVy5PsXQzKXh9nPtGC16hvauTdyeiH6UW7r4UMiVvxcJsHDC2BnhM",
  "key7": "5h8ndd4z2J39sDYT9ND98SbgoVczd58wm9eJQbt8enoDvLYHp6w8fPi4q6JrYgrHda974vvc2udRibE7w3UoDATj",
  "key8": "47EPmzMJfi2xW9MMmc2MgN1P59qy1BTNJ46NYzCNa83fioWBScXL6BQUwkigX6t78w3Xha5rC1MFyjCjnqF5ZX3h",
  "key9": "wkpER9PH5uNx94gXc9dEzCw17zNNgrCrFebaTS75uGQsnPcKwNws3AzdqfBApk8pmTL56bmnA1hg6tYRSYcQnFT",
  "key10": "3BkhUoTWaWk4fn2RPwdJSKScgFmpkb2c62o55TrX1heNecwhfq6Cb5tN3hosrWL5YQSqjGGk5uDyGwKEoxLD6Lha",
  "key11": "oAztkfr3huWkbTwFefhwi5BSpMZeDmzp3oNmML963wQVfcNHMxorrgpTiZx5JJ29qjFuuhXygTie7LLYc5wtJqj",
  "key12": "3xAK4omRasPPs5CVM76S8gvgd4Aa1prNuNuN12pjKqzjF4jKe7tjhwJj9Rk8cumjzhXg5Lrk77T4a8RZo1v3zfh5",
  "key13": "4ZpjDWU6NCWQJaxTAHRvMeL448BTVff1kRNo4mFcVPv3rFbVuyQCqd1T1oi14DVkQCCfnARC8eesUwambd6fPrvm",
  "key14": "bUtBvmiF4YyFaiqRBQ8UgacYaq3vFu6nt2oYdKoCu32kyQJu5rz3D7iqXkm2ABHMUtxy2QUERYCRHqMybQEq2vu",
  "key15": "GUxjnYqmuFmAWrpjr1yvQ94Pcs4eGx2mtazpPArYtzz4KGpcsNEFM16PVu7ksFrUt1BXxBBy8K8rYyXJbW5eLJd",
  "key16": "4NKSq75NHtXtTLcBwgnRy6UzYpJBN1mhwXzVZKWdNPNMvRassgSoJzQ2xWiaYYVyGcNER3vGZJw1MyrLmyPfCGFb",
  "key17": "XjaJfhFTQKC3f2JRWc22qN4B7MfaPvdVj9kES5Lokw7hXcGPUKCyYw6jGzkmQmLJvTAx6TbQQVXyRF2HeuNus8E",
  "key18": "39M3o2WeJ8rsyts24EXCqnSJkaRtMTotjyYT1EyQaYFK9jG1jCNZVGUUpuHwmQrFjitaFXQ9sZD9EFQELyxRCbkg",
  "key19": "rugeQqhkH3ccwPWbqkc3ZPjqKxmrnncnWVy15xQDr1e7bAB8MrZaNfGfHti5FYL978TuNNXR6dCwuXoeXdXvQtR",
  "key20": "3c3sTq83zDDFFS6BxuS39xwj5npMHcZXkSpSpeUzcTq7GnpjDfAKEqNHvBWEC8wkqvvq1Ca9d5mih7GSE6bdLMnh",
  "key21": "ptPJAUx64Aqv1hccWJ9q4s2qKkyxBK5EppgFZF3x8mybpFmbe8S3bcNT7GhZd4LjfSxXDhBoqKHnS8oRjM3JUXw",
  "key22": "3HrZpQQxWAmRNo7n96PmzPcNBkkoonnYTNp2PaTot9zQGAMn3hH7QehftLrxDpWkVq4StryAX1JLmm1i4VtC75YQ",
  "key23": "3tbSpgmnr1N12T1ecns2PGtW4fSyPEoQFQ7zWH7uqbsGyGhyQ1fciJCxw62WMgJzAfBXCnjEoUdDpr9MpwBjXfVR",
  "key24": "2hnh7M3soZWxPxPdTBD2exJ1mmAp9RBvDGRnqpyoVupDxohwX5mSBUb7RNMnnhbBPuvpBXK7pftNXr6b3HCbfJaV",
  "key25": "2MfK7nBpnPvYETxqJL4EH5zYaGqT6hgkJxzPXj5MiTDfM4Mct7Tf6RMG2Jhxg7zv42KiWaUWgTicjduBKW9AK79D",
  "key26": "MyLJh7y5jqdEsPKzNv9vfNR9J1r3aZze2GuTebExqVU2KQZGGEC9K72MGxqudsZJF7B4jKBVx8HjK12KqKxS9eU",
  "key27": "4WRCTytffuNb8zgJhrenitMsE7hN1XtC5mnZLrCNgCY7voLaiEDdo3U1Yi155afhk4P3mYEnh1q1Co5NeBwwDEJ",
  "key28": "3QXbHC5rHbKUmDybFmHZ8Sazcj7qh3geX25gbrvmUArBFy1PG365iqneE8GG1jfXRsx4k9LMf845sBsXpkLciqfW",
  "key29": "tWQi36u6fkQNz9EcZHWAJUmALRERLkT1BgNuZZJVfv8i5Z77QURZRU3m8rzq3qKZQG8dEdfogWmxbq5engcgvTz",
  "key30": "59tWXqC3VTdeGP1yZL1BTmBtKXa9ReMVnK6xV9znDtB37VxMyPMvqaTnVX5PNfHahULCrRrhBhtBMfWQJSSnuJE6",
  "key31": "5yhDJT2uiJzdNxsUD5werk1twXmGTvbpndWn3GWoD8n45zyCAntzLqBxankgQRrpNiwwkpxbRosTMvJZTkLpuKu9",
  "key32": "3FYAijMi9E7PPL1wzM5d4xdQKsyK12VAW5BX5Jv1DynwHEvrcqHWAuvQW1yQkZDNSnc2X7wgEidFmWSfjkQ6VtF",
  "key33": "39JWWpLCzUAEoZuykYy7FnRHmM6vQHRDvfY1XjYekhYBXrXp5abXhHbW1D5m2HghUo6o1x6uLgtVt9AXaUFqjE2o",
  "key34": "G4ddAnn2oCXCuJGTK7MSt8Ss9qVe7cVhx1hxUFfNPXXpv8p6dX4S58ohKu6bibat64g5xkqqJaX5WZA6G6wyG8D",
  "key35": "4YjE5XFxBBC1Muzpsh67CnSUbpmvysCS8iBduj8wTRX1WyhawqL42kT91KfeTVyje275knHFZ2qkfhKbHeZ4kN4X",
  "key36": "5pttRkPY8dWzUxdrrCrgDux7Ewa2StHJhSuiD82B9CccntxbLTCgF8ydhVP9PZKbGCKN122JdRNsKfHm7ez7bDeo",
  "key37": "u1KD1dLCJLxHD7ZT9ywiCL7s2fyBvDJKQkBnR8JRdPzwYJS4wKvwnUKJiu7LyctpjKXvQzBcxJzMUE33RrLRs5A",
  "key38": "4FZzacFrhqCJtchM87V3ZaX9Nquse3uwF84biUbyEc26UoayCVEXDMTmbk7FBs9U4ZQFiBNVr5jWuENJKAFBqGBE"
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
