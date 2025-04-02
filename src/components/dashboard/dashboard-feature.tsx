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
    "5TpTZh1bbmj5cZUngDWhDLrUr3gcT9LscisKCCfccohLaiEQnDQB4PQvJYm8NuaUPwRep8eHbZmKx5HBbXwiz6qQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22LEmY25qJVAN3i667ZopKfLTQctEGjiNfZEYkK4e6NMjw5pbu6EcktdYWGMJT1jwNjbPNuW9bRzTmKiUgmQYTRK",
  "key1": "gNR285dJt8dyHwT8VQn1kdsYbbkbQ6aGCqrfxkjn3beyFh3rKDHdxDXfBnqXjdcG2T3LS2r4iD67xF7PTN66tBy",
  "key2": "38tA3ZmqWtRMnhVFPEr9wwVYcA5zyAL2wNVL1iA9E8VJ8TpudE4kMFarNTHLgcKCCU9vohinPkEagcFG8NpezorF",
  "key3": "4LeJvBbZSJoN79Zm1T5dw59SpecdugBYkoW6fhx3ZZ5igsqV5M9CA5UMzmbKJXR55JAweoETZXmgBhpcRUSd9pe1",
  "key4": "4Rj9TnNzUaCBAZtPBa7y13JVbgnojCPEDPYtQDB8J4MWQLyPAFeC7W4M6vztSGNkZUY2eGErUgFh75MzepQDNHji",
  "key5": "4wyjcWATdejNrvueD1nfuhdqLbzGvXYHZjjcxDVj1HZ4eKjuPU2GBXxdvLFAZVGGUNqjuYgouj5TWP4aDi1ia6U4",
  "key6": "47q5coyUsETk1bhLfMa1qeFXGbYWHhX5iLDscFTvnpRhcJH15mzTHE7W7i7zhDM77Etqh4py7W9M6hpyQiwWRxMs",
  "key7": "5nf7yZq1n767o35q5Yoa5zLBm1K4ZYuzewuSRDhhGKvZppYYX1moUAiZDFCVM1QgmqCXbnSDs2UmRpk5A4KYE6Ae",
  "key8": "2r95sodgD5KRkkS6CupMe12CSNu42BugknHs5suESHn36uH4XfUfJeMHmqfjpcjvqahwLxsVXDCFa5BY1vqYfBbC",
  "key9": "2BwVR8EG9HS3LBYFqn8u2JbqwpQSQxhVatzb5L1FQ5cFJQxuRFg9VByYggqPXop8vCmspHQ1FDGfsBjUMceGtTDi",
  "key10": "2TmR3wbtGp2a9mKwXPSqwVNUniNaDTAVxAbKnKDEUdy1Yr1nmbw81CuakYnucCyhHAma46NQeW3isfgS1KKSeX7Z",
  "key11": "38dj8xmTSpfHeZy4riVcEPtgDq2t77DJdP2W7wPQR7ge3JZgLcdb9wveJBuCCwX4cifV5qpszyEtyBX91CZ9XYcT",
  "key12": "37tr8qkBYXFzULWsEa9W6LaRt7xbAfjHKFNiWA6c8hhW3vPWTkgDQF7jyvhPsXquTru7vQUzBs1nvjEXXqHPKNvR",
  "key13": "5WNmvHwrVEfSvN9qWz1e7mk9Fb7bEqGmw69Ujw4auZPfw5N8c3MCGzvKTMte8h8daePG4LAp7Q2qJwMEAvDWdyqr",
  "key14": "2mHStQoUgkfxdg4emZ9PJEgpC8hxjc14Hwu8cnqAHSRegVpknPjwQfbLMS6B1RhZ9NYLzYGnQRHj2HeEngnKzksF",
  "key15": "5XqDrtweZTksUK3Z2eDHDXdb875CuKtHGzt6GiBBAgkg8Y7fHvfFNnz7Yf9i5DNcFuTUC34RvGko1fGVgoxRYt36",
  "key16": "5bVgr4azzDFENsddDtYoGJ3PAH5GK6qjUxc4UZ7y4BKLBwTXXCwc2DtNgUF9U58hQVz7hxbUCrxdteKHYrFz5Yox",
  "key17": "51er1gCh9hUhaShFaukDqv5dpPXYXmvu6Z3qX6wwQToABRdrWoowjL5vRcsje5F7oSp4UxWVgN6h9DYRKmZVK2jU",
  "key18": "3Sn8piHQQf6ZQhExcZDuVmHZfu13TQyHL4HxgyL2BnHjjBjM26UY2N6AZJK7bPAgA5bD8mdpVWB4tnxdkqpjd94n",
  "key19": "HWuvXkp1oFFsHLrPCvptUZXGYrKG1ftR3j4SgV4f6aqNccD4zSa6YW3z4vVHzHWg1A5W9GLooRL6rDD9XCGx1eR",
  "key20": "EVkgXbzknvJvAbq8waJHU9AkM2ySjHkS1oRgtkaxcoLC3RRYngLMU6Bq9v5Y9a4spuFBGdBHwY5HB3XQujt7vjz",
  "key21": "33t36hNYDM8JCfSmPBvYr3vRznH6PcEp4suGERkBAizuFSmCyVeDkCiDcbMFUoNrzCRtpvG9bypoHwAkAeSEh88D",
  "key22": "2MpMTjbezvvJKwUQ4H9ddS87KjJjvEz3zoaY8PDSjgkUaZccSVxXJWdfUZtZXBgtH19TaaQzU7cCgQwaD5ZjSoo6",
  "key23": "23jmsRkqGtL2eHFVfKb5qjrjfEGTEU3Q4ogghsmwMX1rfpx9m8sLGhJG5u2kUvw3yWYfUCXbmwyJ6aLNwW7k4Jm4",
  "key24": "fHQz14v533fdZcmKn3AbGiiuescqtUY69CX9BhSeNzpSfUJx5h7wYaCP24o3eawYmY58p4nzPUs3K68r1uYDr8j",
  "key25": "2oKMNfUiBzK2cuonqyvNKTY9R1a21dHh3Tz3mVDsvrPWHGUvtgeNaZHzqyDaJztqEPYg2DJ6Vuyg7jz2FYkuBZK2",
  "key26": "4AfN3FpNRo6pCo4QW5NycCPQJDcnWkDiGdA3XWTk4R1VhYKiugnBCiMuCQcyrBX3sJrSpsg1ADfWphPG82f6GtGj",
  "key27": "26DaFez54SdQ1eBE3L4hL4TfV7kMz3i8faYQ6DF4uTfAG58YxUBrwjDmDoUT6vYmuBXxX3LVakTCjc4SzxaRdWPU",
  "key28": "5ZEBXuVt9dGoz3ugRU3f3xHRkF7sLfE2wNe6iNYtznwrywtsa5CN8sYjhXcCST2jyWeJJTeYp5D3mGCS72Y9Ydck",
  "key29": "61LeJDV5hKpYhJYuabQsRBJUnZkCeqS7ZfckxR6UWr9jqUxYgaHetZdm5BnsmhLUJLQrukZ8zEhSt1RDCr7nFBR1",
  "key30": "24t8YRyEYZxbTbPjsi1dxfZoRmK5BjNDbT3BhCju3WvRgBp3C8z86ixrLGsb7hNWXpWwdRerq3fVkuUWY777Xbwv",
  "key31": "2NyhaxEUp5M72e4DGfCnQjDQoRHgkEeqV93Q9sBdwS83ujrhnPCGTEadx9YD4u5SkeSscHmwBU5HGpT7kHfsgzbW",
  "key32": "4hy3Lhxab8rtjVFMkZyzhTkk9U1jDhctLMmjLCJs99N7AYLHGYBX91oeRxgCnd3qSCzepQgzTwe67PPg5kuCK65Q",
  "key33": "34RmeChgZ5J12UJxEVCjNDvtCg5p8cyQHXvtb5JFX2b5tYWHbyC47npmkgp51zMGGFybA2xcGRQZUAN2rAaSRVS7",
  "key34": "4PtqN2e3ar5TYAFmviLyCrJ58MVcUE5J4nQ9DRVvdRgJoYBQYXgfJUA8uQKbtbvTs55jAwUGiVPw4w7r4bDftjbC",
  "key35": "5ibChjqEsBB9zEKPtBi84YkGtS7bcWHdp1RHDS54zKnYfbciPxEURXNyPSWpsUz4VujvTaTzfr7QqDBsXFWXZ8wD",
  "key36": "4XV7veeHDqHPmBqJAbApDbppr2yJGJ2bMirRstniPyYwWfBkzqkSWSpfUGUfkPxhhU63hqbvocnyJnAByoFWtMpf",
  "key37": "4tjTMLnp1Dg7SsU2SSKqXibursQCetDaRUKAd2H85czVLBHqFW9SsvHJ7n476356EBFJa3KEHP2BmANRSXHittWs",
  "key38": "3cXmuuFQRF861PXYXBw1rE2Ak71tkqExViJVEnGgRdMV87CTXQdZMYDFSaG7mA6unmcM8YNGqjvgZYPX6nAaMBNh"
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
