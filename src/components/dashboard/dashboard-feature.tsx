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
    "2XXzyhEa7P2ihujtJni5k31CuRTqvzejdJMHJspRZmur6juwHoYewDtEHb8am2xuXfPQh6UBJ1CYV3K9hduC5xz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mx7sCL1HmCoVgRdupcKknUhWyN7C9EEnQ8boGvogZWNPeT9jcWCQVEbQQ1N5Ab7SrK1MGDDvVPB9D9vQCzgMq5h",
  "key1": "51qCkBgZxv5kNe6G42bRdJE5XRDNKFBXoUf3wJk3kMyXaEXpN2XXHkmZKG8sZ6G5SMQ6XNwxRGsW7z6LmEjGBx8Q",
  "key2": "2CTN2XCKhnyu69cryFCz5RfihjYZpQYFE8L1x2KJ4HVTbP1Ke5rT1av6GK5bGPKTb2djWun7sKzL3PZ92Q9BjfpP",
  "key3": "tzPHVhrXouTY8Su933tp8PKs2QgGtZVaQd83RT6aymhF9QhkJeER1V68L4boBgmpm6z7PyYcjdbq8xt8jyPNean",
  "key4": "55yB4vLg1AkBhXwAYkbMSxX8Ha2QYEZYZsJhXDfDGjJu2ktcyxGcUz8i8fPcApXg2TdfFrsXLn7vdu8ntjX9SdtW",
  "key5": "2JWijZ15CCSbTeL2nKzMSkyYsx8j6tTn5bPhGbVHTNYGeSL58kaurE43j7GVjmYWTRpxGg7FcCRp3wcJYgYHsQ1z",
  "key6": "3MhNNbctCDHCfdVeR5E4h1Zd95nG8ZL8oPYCajSznEyGzgNC9NJGmwctXvySvVDQmi6qG2QNWp7rQVVfAvhoWfen",
  "key7": "3XpQGdzBzHGYkByXfpCpt8Tj3weKVWW6eKL67nT4XcP8Dm9XvrCKEsqtdPJQVKgEz6BXwoBSLheZXnqp7yYaqKnK",
  "key8": "2B35aoYKckLKEHvHzZq5keH3WNDXA7o9jiYGmicjErS83fBoRjvvk9nopwyuYqKUEqfeTXNYVJnndFSLZDG72qy1",
  "key9": "d8xwAjUZyzVY4CNXBkxCdtY3MuADQ2Sio2kpZHkthS8FEkC5TkXAy7ELTu2A8hF6G5bY1EpmuBSFrPF1jQH5Tjk",
  "key10": "2bPT6VkNhbUSysiA6Corb5T4ak8imjmccZGhueQm7SZvrJfKWmuQaRvGndKg7MvBDz3L9tDreQzCzav39J5PEpmY",
  "key11": "2dNn6GpgPyCzLGGf3W42v6Mffcgj961hdHP185QS4dfzP1VcdDDVQMbGx6pkMDeZvKFEQkvShGqRLSUdUZ4ngiZv",
  "key12": "3haB84iHVvk6YqphLPfWKH7rRrLqR6LsVUwdp5nvsNcrV6D7ayJZGTE5Hek6odYqra3mwGaVFKRmKYSXqaqbmar",
  "key13": "5SzXunqfybYdq59Q5dbdBx5cNkQHRRULcKVM1cGERr7nFzA8JaTp88BFwbU3fraj4Ud8EPgxr8tTwxs4N5VqViqy",
  "key14": "3F1L3uQk7E7YFR2h8J719xV1mVkwnfBZTuauUCd4RhcQWDtffyST2d4D8M17qv8wpU5b8C8Y5EX3mJAtC9CmVP3S",
  "key15": "2aY1UjwM1nTvki8zUTcfrA32idRihTmRB8UkvNeFuXCtD1BQgDFA7yGNfQsLdbpqMSW7SwB7GjBwTuw5vSjx38oU",
  "key16": "S8PK559Aa7B834GY119eqZt76HeeQq6kFkT3WL8nbCbSBVMvVfeCfX6fM64hdMLdYwHj6LQbK7fxZKxuo9rYhtY",
  "key17": "3teCChHzwfSrQBEyLDXH3ovnfF2Rv5Jmh7oxcnLmnHr6ashaJFbQR35wxvV7X8b8Ek8wFqfaEvdfJG8RMpgUzSUJ",
  "key18": "i9uBKVZzvFompJsgHKHHcTVVrqbffn6FY2gPtKThqhP1Dr8Mb4VrdRWnJaG8oyeAo6DmbAEwh7zNHf7cW5bD9Kq",
  "key19": "49UaGmYMz54irsgpYK7WdKnSXq15JYpJmwN2xAXsJJ2vwrsG4UJ1Wyej1SKq5BQ8Vtq8MmLcGWfqd93XPWtBEFw1",
  "key20": "5KaYzqV15TDfVqGqBXRvbQch7JgH8r7T5m169MR1MEzvgrykN7bXiakMigeVWFHGA3iJpGd5jofo6Z38gQTPAZTz",
  "key21": "2eLYuREZB11VR7AJNmR9jAA149SjTV3kZxhsKHkBjJ2bm7S9Jn2CQg443T94WTSsoaZHgWV6xLNpZkbhUEa9htsr",
  "key22": "4EfHEP4F7VdVniHVZzxDq5s6BBtFeMb4g5UQoHmsGimDEQjfhmoTd5y7t1kLLLS2yrHUSmRPUu2qHU3mMoVZ14pL",
  "key23": "3sG5wfhjGtGQWfrhaBjtLPvKfXS3UgCggFtECdL6cCvoWBy9pq4Hs64yfk8LWmtyizLyabXYzejbHjjuNgP7qbLX",
  "key24": "5Gp2gd3J4VwByXrESpc8Qs1vVwij11sjJEFDhtzuVeZaiUFc6drodstK2BW1qexKTCC86kzPTfvaTdJ6J1fbSNiq",
  "key25": "2utepNkTTAn7S3XhzL9vmpSq6DHjDDtbm93cQWGuoZuGhtkf5uPzGjZVVHdnTJ4STyyivykJhXSxZoo2fNEJwx3z",
  "key26": "4wnCgaZKCDQJsWJorSwimin7SoXihAeTPAZdfeAXA1no4jF894ZBzuiXfidctBQugdjoCRPzndbJRUmbz1Xx78RL",
  "key27": "CjhQnqMCwE7QURHheNT7xUCtTgCmJ2KBvo6CJomxbdGLTfm5chGE9CHp3RGJCBSU2TedRhuwQTNfiVmP9o97P5V",
  "key28": "5Ujy98A1DTVDBJcZLBJAzLMGnWfSsffV1CAvg887FXJcHGYERHTtdNwtxQUZchcGDdBBbZokRd4K2XFfkvjAreKy",
  "key29": "3P2Hkbq1Wd5f6Qvg4PkKZLNFA7FbTywEyo1tmcvvBxHBjWNq774FU1thKwXW9z4ruWRUiDMBceWXvqaSJxVFG7HX",
  "key30": "2cKc6fbWKodwb69xUVmAkPCMNMnPBmqwVsA7keWJsnUGa9tLXrdGM9Jj2FZArJuLVf7yKgG5DKvaEBZW7UTGgJqq"
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
