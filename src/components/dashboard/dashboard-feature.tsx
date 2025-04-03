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
    "3vL71qYjYZggShxuz3YsdLnvn1s7T9px7QAt5VsvrU5RVPLVsPoa1vSoCuWzchUwd9CLokUd5cM5EMUWDLdcAN92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y1FP8kDcTctgzEtxaEBUhr9fNDb7vcYQuUWYAzhcZqFse95UwtVQ72TJJGKa3gKQwrZrmth15HraRU2pNyPXxdr",
  "key1": "5rYRrFWbPBxbbWtChWcfoHiy11uKBQe971w6Xxiz4gam6amQ3zqSATF2FeWkSAXTrhrBD3xNQZAxRyxQasZLTUEo",
  "key2": "5Z3UpviR5atBoyH2z2gE5wiXCQ2G58QCtWCFeMKDQxUfsb3sttfhyKamK626mPbqNdGpS19sGJSLtEqU1xxgQPhh",
  "key3": "5uWfaodgZ7NDz1Bxuv3K3g4nTG1QU8giXQQZqW2nZMfPWc1mtfizBjbQXQ1bmdVLh93zWpf94nF56p9BehvGVWH9",
  "key4": "4oWskGfGHnSftJTY3uHmUm84kMhQr82qa8CVFwXiU37H49mrEyJvn9Ncb1265YBdsd7AjMbxp6v8JqJ3xJskjj1f",
  "key5": "5N6XgZn2ayioTwvfUTwrdS5jaKVQFweJhm43vueCA8QXZxLX9MXBsVfx3heZzF6Dx4qGuFRUV7NbCH7yFABDtsLL",
  "key6": "4Qr2WYRTsqXmhsPjrXdnQgCXHoCoKLVpYwjkTJjeNBYLD9QKMZ1YebYifaJpuU3mSAkuEbd5bTY8bCJxbnAjM6eP",
  "key7": "rHFM6XpaLuZ7hB6MqWn1WaW3yD7jbVk54t4JBe4qeW8tMDERa3SET7frvFM81JaSN14T9yfaazxq3J2DGLTk8i1",
  "key8": "5hVGpg3YFqQB2ibxPNjFZyAKUecRL3fE4QaWQtDsBd2M5WUxyoFtAmVWCuVWBfS5H7fuNzUP1HCcirohCyxLztde",
  "key9": "5AzgVUe8P7tVDQr8V27grbC5JnoHMTGLuqg1mAwHRUdmCJkfZPZjKjoueQeNQQHD1jW2UGWGBTsYuck23fGyu4jS",
  "key10": "3KeBo8cXLfb8Y3B4zEKWZkHYiq4P56hgyMepSDvUPXME51Kbrt3CdioR4DP8Dhe1ZJqPP5Y4E8qMFpUqeUGACEcw",
  "key11": "ALNeF6heQFawQu4AcqHw3qwMx4oP7ZmeG2173gWGkieLpBqyJi26fTbD2zxHYrTXp6eruWbAZVX7j7gQpPwjo1V",
  "key12": "5t6GQb2cEuT7uv7mXDwcJWYjbJKCRcEAZ8XwSLgpaCR1iQEq6b8Askg74MpE6C77dHdvcRPdxWMqN4bKvfa3BygX",
  "key13": "4aEAryBDCTWkLd36JaVUrW61KhyuDvwf6mmt1Brzoa1xzN1b11UijpFBNzkrzoYGpBTV1nJNKo3qG1222638hP4w",
  "key14": "hT666uNtdXUDY19ZLUnbwYLnqNB93HpygyxfxL4Y5sjCxD2FxRPiGNJUeJL6fEvZYrtZevQnNcFTNhJmuQ67R7M",
  "key15": "3k1gjc5getVoo1Ao3hZizH35aHyjhS7q5ifbnzRyy3SHhqmgWpMdFhiuM7iuXhkGc4HaEtv1uYCGZnJgQJ8b1VXB",
  "key16": "3i2ZxRkSJd3kxD3hGkB9DQG9iibowtdaGEaWkhiFE2qo9Tumhsd5DAjJzXGLQgKF5Fp4CvExTRrg2rcFzX27vB9W",
  "key17": "wKoz1BxxyMqFzbCtp8fUrXSQbEHnDEtPXPZNNwmUHL4fqp5sbcxncd3WNkXK7KegLVRnjkrKT2gRnYAPkTDe8aU",
  "key18": "3N6yK3mrSXrKzJVfrQeZJwJnAwe6oRyyPYG4s14NCfTBRULXed3NfEi4B7s8NnfMVjAPJcrHibpgH8zoKt8iFCGT",
  "key19": "2RhaCGMTDE3FL3ayHNmUzyjxqnPbp3gWigTLwHtSur5XTsqRBdmw9DeeNwXjggU97TLaB4XzYLDwLx42Wiv6zhUy",
  "key20": "3sPq7tCMxYLZzC3DGUtSKrK83dD3QxU7aXVUWYeU4T1gvcph2gc4GXKx7yZDgFEVS5BdDztEUDcH86psmfDo98rY",
  "key21": "5ZPNi3aeSoqbUJAvVks7NmM1rgwLZeu5janpMBJCvLq5aKBNAz1gb6JjwHCYjtJ7PpY4mdabwGY5etA3i6gEaXKF",
  "key22": "3KxebpnhoRSbgRfxe8TfkVpyHieSY2pAGpUmnF8DWCVKWyVWQTstKseXMo6q8BbNzckS2vKLWDiXeqJPre2Yx9EF",
  "key23": "2NZFXxGqrWfs6rvTEA3BRsnRB14YtLq7Q3yZKKyxxVTCQz1bd6kmpUwV9dsi94mqxGt4eBu3a1HRwmDtJaMCCkU6",
  "key24": "2nF62XLZfHt3k6jbwVXt2fcHPpPU2QDBoykHM8z2bNRKKw4mfruHZ4uz64ZEQEofzhnfY1WH7XUtFq9qiYe8MDXK",
  "key25": "2vmCkrUHhuYVqrj4MBdiHJJbuPNcivf6Ndy8wEEg8iHMEBbnkXt2CdWhKHyMcuVUPBqmwACb1ScyGYBFzusbuJqf",
  "key26": "xHooaCaH5STW2T64RTX182MFqQzh5MUbGekw7qBZmo71orHA5dhKtNH3WR4Lvef2Hdqoup4K4PWA6JaAus92Lh9",
  "key27": "5xoyy7JbvsmtL2e5R7GLE997VFLbtg7AUkGhMP9vau1NJWKNibqQ8dgp2ViNqqpEygy81miogtkF953bXcAyWdtt",
  "key28": "51zEWaLTpKrbRMk8aZjVfXycSrmrz7BZmtETWBGuzS46PqquioQ6Su59SpodmBf8sqNJgymur7RKdRpz7GYzMbZA",
  "key29": "5dgop5RPnTzRoA3RovBqVYpgEFmrqbsoH3vGP45nJbXBeQUyAtKf7kEG64K4iwP8RXfSjBFnNzNuB7GT9KKuVDyL",
  "key30": "2S1eSFG6oafTwQsw98hd6aexXi5vu41cK4ovHdVhNPEoCUQWWriqJFeMgy8fRCFdJU2Txt953VZZvXYMQfXTWac1",
  "key31": "4XbCby1WUELMDDPZefiNiQGoUQHQ2m3sJ82dXqFA928JGffTmZp79kUcfSoVSAmSCExfud9Mjnw6npmqvTJGtR6V",
  "key32": "4N3UfSQbDaiPxW3qnpuvoSKDwRtXGygPbCHQarm7k7Lwtv82kMawSjckSA5mAKXC63KQgcvAQDDdT9SBCjLpsNnf",
  "key33": "4q2kYLW76cA9sW1YHXbsk1mQEmUits3PmYS8SqQth8GBQ2Wgywsu4Jcq7Pg2vgw98cXqzdkTTBkMRJwYYmbeiZ3w",
  "key34": "2ieAduDvoWHahCM2ncmCRvgivuZfsnCku1HwUgJoesJhWtREu3Cvdx3VgL6NZmskmUYMwtLPgMsjrnZGfqLmDwQs",
  "key35": "4pdMnqXexzbShDykSDNt5mUTqPxd7qkVz9Lq4jZYa6xvKa6Vouq86gKscKhdZAReFHWWtGBvyqPdSbjUgSiLgVo8",
  "key36": "5cDSRPqfVDa7sGqUxXb98P7LHNAWjwgNCBsk5vcURAESFMLfdX5LFo18wT93kGfp69R8vqKoW3U479TJwnsNxcXv",
  "key37": "RWPEuLTKm688F9nttdfaicvMaJWMtPkYHPsiHrg9DSJVVKsdtjWgQLhfmnMWoR5CRWcbGYP6SyMJNsu7n73KWnN",
  "key38": "3ocuQkLVrJNkK2eXTJPjopjJFDLysjW2gvYMKRC966yqhuq7n6c2fARy84gFVaHn2q8BDyNV9eFm4v5q3ZfUMxea",
  "key39": "5nKwcBiey6ycGcMTve1xC5WYzJAcxUgLyYmKJbXxc7gxAG9ms8Mbao1HKSLAhZpT2ZVzveCU7fXFPGVYHJBLzcvC",
  "key40": "62G5WuubLdz1kEfuUmJ6ygpL5gCiDWYSjUS936vzn6V33FEryCZzXDStYk2EjYMSby3gfGPfGyw95ajmdaGMR4sn"
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
