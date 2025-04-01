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
    "5VaGScZKDivY7guJ8ZUsS3buV79M81scLVMhExpENRTQGnZBCPJp3y9evQjQsQpwWvq4F9h2b1rh4xrN8mZDMWFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CJ6ZmYUkT2U2pzRuChi4W36KuoFEr16tzfGYWEuVQYwsJ2bho6EPP9ygDHuzPtQQeVdjTzKpKtaxwzYKwKf7DjB",
  "key1": "3oczFoCTD7jcbS59ANa7aAHZ86R2b6WKcDfVApfJmD73qXUd2ZgQ5DPVSAKjngGmRUDnYcdyKvN9ZhQ5XoXEXHuJ",
  "key2": "3narx3GNZymrWKMY8s9YiTUN7poo3Q1jJyC2K6XaFs7ZBPnSR2cXAfc5ZdvusGAym4KYkauidtPmmn4tM2efzvFJ",
  "key3": "4PMJDiephfanB33QJjCV8b6aENTv8TpymK1KNGTZndnsZzf2GLwVP4WYqnboeajWtthFAthxpBRiZV6qw17uT4a3",
  "key4": "5ebUdoN833dZ8BKGQLiSHppiNrSZtN53ceQSdB7qrBUpPh5N9YQMpJkwpG7jKJDxF48tJEueUCtnGHkAL7TALtCq",
  "key5": "4FSCrCxdwwYuifg9uVzLz3odDPupam1bVrSedhxttk3GEEUfCNcL6LrYCb1tU1TELNy4X1jRnZLg4GSt1eUkz2g5",
  "key6": "5bjftPs1nqR698ZAgcDfNzHYetorMxjSKLqkSi6k8ChgCQtWa4hb17g1UeJ6SydYtF9mtPYFjoXcmP6QA1e1rgSA",
  "key7": "56F4rRxYGPbTVTWTooyjfaFCMviZMLvvRyHGQycWxrbdkXv1zLGVwd8Q2bk3EgdgEFBoi8144ckq1qg9FseziRKu",
  "key8": "365tuR5Vpvu17cWBNBbn5twdPdT3NfsCevzCxkmW5uYmaL12bnP8YNXQRstZAXGjE4SxcohAyc6VtQQneDAJV3qw",
  "key9": "2XHCXuPeeJECLPJ88khnHDQtF9dbXjKSwNtQ7S3JZ5hJvqLkamJhWqkNxwwzW9M9oHuqWsQFQPAfHq4qznoVKzcR",
  "key10": "LA7isq8w8AkWznpMzc4tHt2RTuzkSsfzEBzYENGRiyF8yv6xXKp3RWm9ZEDcEapvqEY78oJqHRE6JGne181yqdU",
  "key11": "3DW7vr2AxhNFdgSY8QnA5x1qzdt3av6XRQaXrAaJJXq6oqrArcd5iAWSXxw8u2kNnt7MNLjHTyKh1SJV8afx3zB9",
  "key12": "uuZFm9Ff9NF7C5XkdjqHJ6Uo2QTqaNDv38gRpg82KpbfwyQYC43bAz3dp81ZWrqj7SaUK53NQDdK93R16ucsjmZ",
  "key13": "5DZqBEfaqwd1Z1rSfN6jpRcwQ2yMGtMeSQHpuATfppDsmSnU7FMvHDGfxDka29Uo7LDbTz7rtevaavDz9TyZHkmu",
  "key14": "PBW5gyUR81qrVaz9SmPSj3fGcMcFr6NtRo1wHR8Qv4Ce3NpJTXBNGcA4VqkSXHbMU5j7kf1WgpJeUVctXhLshTs",
  "key15": "5F32PnkyrJrX6XRbugVwMVKkVrmA7TSMGm5bNyph6GdELNwYUuGyknwJnXaLNboa7kncXuybduo7jgNtDxBPuroi",
  "key16": "3jT2mQhqazbJMhprNSaUBmS87vdcMdA2faHAa5DpoB4gAsWYKSgFkdyvt1xh8ewkdLKRNcKzNg7pFF4UmQvbvn7G",
  "key17": "2Z9pHQj8nRvF7qptUrKprTX5FxqjphgLLBinw1eYGZsS7azMogUNjTb4njNcTB5m63C1k4pYkCUvhGjcjxVJJ3Lb",
  "key18": "4saHTx9hTE3mgV7kZXURdLb8fNByFNBAqdwg9qzzfsz5o5qcgvYbAgrz4gtGNkbYWRSfwyKFrjdar1sJEYmMkJXz",
  "key19": "LdKPwcxABBoeyk1m7ZgAqgiBJGTVFDH9DyQUDNH3FcSJwED7koVHiQEdRXAuPoHEo9is9hyXd2p9kD4NoiC7Zck",
  "key20": "33nyQ6Xyw5VJUMRPspdNBLrEnWMgEx9KWp5UiAByxuPFYQmFsVj8HbfSV3cZFnmAjt9XSRc9npxPLfZ7fx2eWXB2",
  "key21": "4YuDt3fuLGULA8o2UxF1BScLaD6FVngcKnLUkbJX7mFtMvk44Ei7PwLY1kf6NhfXLg6mHJCqWprDvNzboDsUKza1",
  "key22": "5PdgS43CRZZnwiXqpXa4ycyL61s7bjM54K9G7m9WFaqyRsNpEGGHcX8HowKrbCwQ3Hwa8wokLMvZJ76bzN6kpriG",
  "key23": "52kfdSx7oBJqGtZ9HB2nH1F7557pVG8299gBQHme8MNw6GkJAogjV4SA6oJK6pWi1WMGuavtjQCbspY22EroxZwe",
  "key24": "3Ek72VsTCChMPHLdJcctht5ag3bQcyQ6UPitjtzxhdVLbJuRoJS2Txb4yE1kvydFYYeNripHDSem2p9EfKFFmRKH",
  "key25": "pZVFaagxEbAQmMV167ExbQ2x8ZSapX5A9fXDVNAgav5zZ4RT1ddTsoVcJuEkbE7sM4mrqevTF3GNbegYLcxwQgz",
  "key26": "323TVzLj2SRTdAfAQYvmbxCFiSYpPgPKqRVDTuWUfyzsVtcB5kVNaaN9TLW6B86yN28Z1qXhRUh2LuLhDQTSoKh4",
  "key27": "5HW5FnpKTXnmfWNKzdUUUBBZgyPmrMwADvT9aRq2iQRkYJhDt4DQxLiehtuba9Xa4DwHCveHUdaBsmKYnnZqjXcK",
  "key28": "4apSvFvSYcauaQKgieJofrvbwrSCGg5a9SwkNuHFuZuwkN2mj1HvpuoA7ugyfLrPr1sevgy7AepoHiQFmKire7JZ",
  "key29": "4n5KpeBitsJa4UT8Bj68GRBwjvvNfCYPwQ9BQVhkftXVmnVJumAhiR9d4iJ5tw8TFjj8iWp7u66VWy2J3iqtdQzf",
  "key30": "2arZJRQWJQfpMCkCRc99fjWABpAjjzi6qjkzEKK2Ut2HwbMGvVbmeCgSRSphtQ6LPCo8hvXjPHmZn5q3P6Y9JQ6c",
  "key31": "A8tis74DD7NDUTX8iFZdxsHKonEoezqHVNoLjSBsBChsww8StP9GHJusv7iLhe8UtRivDfkn9F3tMXdgCxHsjrz",
  "key32": "4sypBxG52sfVxSKSPotQ1AJ2eqeFF9HdEwJ4WPbuDt7NetVUXN1FjZAHHkSBHpGaJrQk17RWZMzGWbgKGpArfCKi",
  "key33": "54QBRMiBKuKt9Sog8ej72RUPKUQGvbdrb7M4c61NZyFXkHo9nRHGdU9De4AqnEyJXRLwK6kQUFVEhxy4kWun5Ug2",
  "key34": "5z6niuW2fTfGoCxYvtU1j944DF75JKvMKKVkruaoL4y5cPXj59dAnFfDrreVH6EhrExoYy6reiYkWwzzF13BXxqe",
  "key35": "64BxPpLgxuWjL1yXy23exRd4qcrzATxbc3bR3LupyCHBsxALK67YPgLAKzCTfbKyfwmTugpuTqhrurAUzpyvjWUq",
  "key36": "KZxTo3GSubTw6saYNkQSJcriCVocfwjLHhUd3WYr9yNYQCmzRWYSsTinpvXUQ37XDQeNADFFgiZgLyT8aGEEwrB",
  "key37": "4wRzbMcmFm7XnbkB7HEPweQSSTbADaUYHdUFbneP3L2rdmLygXeNbJoDgqGkURxmGBUmaPePYXMK62XGE1VrNU2M",
  "key38": "8MBsabFMRvwzQhvtVtQeur16Fd7NLJpZwFpcJZBEMnjXV7D8SmjaYYet64bNwuwF4SahKH3dzFKBYCg9da9jt5V",
  "key39": "2znRUuHzEfzQV89RPqJ4kkDcUqhnw1dGLkJVwjRtNUyzNAfwiP9NPGbB4HJZREYGzTR6sBxsZ3gfbXDFAVs8JyMP"
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
