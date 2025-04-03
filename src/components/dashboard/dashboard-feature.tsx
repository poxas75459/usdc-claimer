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
    "9VhXFrFa5jM15YeA9aRUTvSwAbDN4HAxDEQs14Nj2s5RatB9SgcjnBVZ23LTycnEGgpwkbsLnczTvAtgWLMimju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ufb1MXtLJMtHpQLR7h4fbxvvDHnRkn5dBvMFwUvYPbhXZbjqFrGL8skTVfGrhYC5jP9Kb3XifQtozbRfzZtTSJA",
  "key1": "4er6qfiVDjwxiBbq8sPht1NxfEjJeckL8hXaXSaQtshUYB62eMGej7wzSyNfUPs3VM8LuLiAXrcbfwZUcHC5iz2J",
  "key2": "44evcsVaW2QjG3SXyAW4hoKcC2FfpiuYRCM6JurjkC4goxbctPv7YJW2tow5ELWSru5e5D6heNi1ZpsBd1eFiWAB",
  "key3": "3Pyn976HVrHBtCamecruDCFMUn6Pt6J2y9CPmtAHLuxxGB1LTvrgH8xNh4TSEu6hKTf5oFQpbZvGeo787wiagdgi",
  "key4": "wVRm7bzk7r3qT5a6SQzFUcP6zr9x24gYXKe8YnaeHiopYhFEncgFYMUZLmJ3Joe1tHDjUd6e1vjiCCPyAQndfVH",
  "key5": "2eJuDeJUD2WmNXt9c7MoUy1wqU62dLKotDPo3QJcggEiURkY43CBfLF9KQrjm3rwuxHWjc63nzUWbMsS1wcpccSS",
  "key6": "3zFm9ZZZAP6j7YHviBQmZN9t9KYg9SDMMK7CgV3RTJdhAuyv9idH2VtzApDfha4MKJBMnEVgkBxrJresw6TcddC5",
  "key7": "vP4kmek9fUyQCpfRy6ieJjX6Hj8Z7gCF4ZDY1oUNwMs9KQuXzYVoJxQNUVFdxRCeBu78LrY6ejiVxmNFN9F9wQm",
  "key8": "4rQqYrXRbHrQg9F7JQjyE4bypdcymg36K5MUgXejLje2m75o6XNnGeThTojFkDwtZLyxsdfu4S3tU2jMhiFPboQx",
  "key9": "2ZU6RfUWnop3usW8Jnc8LwA7v5QjJRcXW8WyKzP6zDcMw7fcybj76ZojQmJrWh1asiGnQig1gb9JXB7zCLJNipdt",
  "key10": "37bGZZXqnpkzrLovC4mxTZbMzfrtSFxkpgtzRKdJtrKfemT5e4zLeXZ9tq2JYx5mt9gJEMksnH25fcjrFNat6Yj",
  "key11": "3yxNt75hVrGDQEuGD5G56NRsmZRiKokmxpmcgnFcpe8Kca1KddNAdFN8HWSaF1qVy2GKBWF88N7e8UXnuy5F5pfC",
  "key12": "48EsLTe38kea9Ao9FTac4rtuwVZsnLveWe5ZpAXiYchWwt5MAJzKooQoeaptieNKkEEPXNYxHczGDwrNeK4kE8qx",
  "key13": "4YTpYssb85ydwHAp79Vp4dibmQJJDxkmVPy6zfUiRdVvCqKzdAHadphvqDQcqGmpRRkkEWLZNcEqtbJypCdx7dCj",
  "key14": "3Vz9fFCeS5VAc1CsGVQcziq4fHv4uL9Rxg4BdBzAdhoNwrv9Ps52eMaqJH2Dg8X93QVZ5KZF3yrJBjfAXTFqWfT3",
  "key15": "364ogdwPnMaktARiVAtzug6xFx5S9ih1v8nC3qd9ub4wHLgS28m7w3fx7AWATNjDjncRNmgbUMTybP2z7v5o9Jv5",
  "key16": "5gkCSjMf5DPpuSnENB6DWgwUftta7adWer8CUCQTDaLhQTcxaLdJ1Z8L68onwKaYK1WUQ6qE2c65ae4C3izjm8o3",
  "key17": "3YvtgKKCq8y2gzUVNHTDTn8kCy6Fynk2rFipFcZztE5VxiTuZcUfffAU2Sge3C9fEDMPbdNNFuEmVy77TrkTtxKG",
  "key18": "5fBu8hzkNnsRnMY6YSr4uYZzHcAPLZd9cJ276sNVHxjYeUmFGsQzvb3RUyd8wGuEwCp3g4tumw3rd3U7A9b2SJWm",
  "key19": "4whBSMcKW7BpeHCZ6fDQpcCN7a9cWmBYqJDWRmhCwBDEfK2kckbqFDAbX84U8hErdZbUsacnEEFZjks96TaJSXBd",
  "key20": "3n77dakmYkW6SXi34Wsd1hJnkU61C4PP4FTfuX8htbuk1Rix647haFjDg7pmEBdpDDuZrnRHcPFEGezAt8fDoJ2S",
  "key21": "2G43gDxRC2ZoWfh7Py2XvnAhQxd9TRhNYC3FZzRtdvnuVtxNLZN35ejGgoFM7u7MKGYkoQ9mS4NrfxEpKcAZgP1V",
  "key22": "4xJDk6QV7Hf84KFX5SQWDicvjgVKJiQPhvBDNJ9fYX2h1yReSCXWAfxas8nqwn3vTfiL8WYw3xW2871yYczE2Et8",
  "key23": "3qZut8NUco2c9VcCKtdWiCjXfC6c5nviqZEAwnPj2TAyRv5njtTW5UmjJT6KuNxk3GrWZx2NbnM28QYKwSy6bm7c",
  "key24": "drWBePNop9jiDK93mH9CndsPCyfv6fny7ugGZ6Tc4pp7gjMGA7qgqU6gQB3fS3i7jdamtrAkLkCLdp2xSCSX6kX",
  "key25": "4Jo5ADrBUnbfDs98ZvmTdvrzwDikt8uBAsfyQV24g4SXad2QjQw9Y8jWT73Anp91ZzjY4JWpZEEXifCncG4MU9Bj",
  "key26": "57XLBhyhsBcuJQCKrJSy4CTt7K8D7vuzVHwafwNpd3VUGvYSjhZjL97tCBRWPqHCTVPw3e3nBW46qCNk6JWUreuB",
  "key27": "4ssaQKvgRnEjKXP35R95tGDMS8C1dRh5kkLByP6tPRzCVX3vD1cbKo6fSEj578LCUBHhFR2rRSjzBbCXGBY2SRXi",
  "key28": "5F8tg2qkrhheSr7axZD42VQisZ43P69sEyrxzF7CtBu5NYjPR2R9YVSXr9mmMjphL99hFnS9s8Jb1b3TWC7NmREk",
  "key29": "42XecxxdRrAcDuMYYxFAAeR7XjPVm6cwfS3dy6bHQoNAd1sGHansEowUY9ZpXspqszQVS6VVf1Rwx9AKaDwozqK4",
  "key30": "5j7BFq8sd7ZtunyLAStkN5BnRBDjVcRDKrUuzUttivvVeWbTFnVabQanjqufSXXmujguU2ok79YRf4GzkUNh7wqJ",
  "key31": "4VFp2JKdLkXKBSNdhTaFwEUC6TzNy8N8vJGroATbKLLRbqr9iK7cHYdngRGTrybBA3924aPWNYTAxhU6RGYntLuX",
  "key32": "5kzq1qNZKbByFvTW8gXSRXkyCzqSma6wsWkCdCiXu99BgVah4TENmMmDGYAjYQMfPrFSkmdT3Eb2JzyCUawMdH2J",
  "key33": "5FZ91SeXnJ8atTrwtnYD5yhVeMAR93t9Zg5Df9bqshwRzrFNmHc38FaojRKiaDKE9VzjXUXoK4iypSmtM8ufzHr5",
  "key34": "26WwPdZBX5Rh2hHHh4t8LvUmMuJtkbLgQMrQF68NLVjmHoKrR6XVCrkVGvzedrphKGnVPBMpG8Y7P24bwBwMz25x",
  "key35": "5szTv7ynPHo78fVqsKrEzNLbmDMv7X8xyfPm5WzSMPXcvmwWdFejENiLYyNcimsZ97o6cFC2hheLy9zcYPjwebCD"
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
