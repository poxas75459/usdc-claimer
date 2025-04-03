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
    "2KLeHt5iPJZKFkqT3H6mFbP4euxezAU2FtYU347P5MANmdFcNKuUZQx74tzMgLNKRpg1SHEzkF4ijqiobiAQDXpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b8bZNzCx1EaGRwucV7xv1qJpW2GJ4UdUn7vsibsPe6USQwBWvzqQMFsQvRyV7BD5X4XNaTSAiygFPUDJLAaUSf9",
  "key1": "4zW9PchYy8cwJCBmb3LQWCt6jF8QRD9LQDXPoEvpsUs8QnRoHpCKHAmpdxoPBD27Y5xoX38ztB5ii9wBDgeDp1Hu",
  "key2": "4jXxLZkjyC4SicejKAyuuEZ2BGCM3s3s9UPQUyUQERk3ntK3ViveWDwVo22tkSEKbzMKfXFSA1Um8jSbG88TaJWp",
  "key3": "63igxp7uc26WoQ3rKsZmzs72AagPxrrKcL3xDSo7KJKadMyACKigRAUABvBSr7YpXpBumYQtp7iJEUhLETS4YXrN",
  "key4": "2W9Bx7dK2ZcV7M1HMnfnwCYZUrWJTGFiLaf2swqmAPpUqPVP8zJSBFjeLU4G9R9AgMt7wvLeKV9DnL2Cxkkxk8wq",
  "key5": "46ZxnkZkZPXtMtpm22Jth3mBC41tBPnESkKLPzfns49yBB93DcxZh8xpgsUfdJxNk5NpTZEgpLgVJCfAq3bSM2v7",
  "key6": "4wW5zwX8LeqqTVzcfk61yTiW1DC8dAutFTChfSRGUUmuxrL5ZsvAjFzqakJqpQZ3dvTubkzkm2ooaKF38XwT6FwN",
  "key7": "2mLiEmb7gBZgcS3mjGGfWUxaCU8KR3eBiRjHGj7VvBv1K75SKLzfBYVbBPJifDgnieF2XQkMJ3G2Yyqdrvsourgf",
  "key8": "3huNmb77PgowdJQrbQe6AsCFzVosDaT1cF3UBDTgEQQzh5PQzFmRE8XhQ4PNNBjWBrR2qcGhk2S5Giyea9XQypjK",
  "key9": "23hJVHHQjigqXbo5rXZAcwRxqwT8FxCgHEfsjP6NEQ8pgsxmk3yACCNnHTdjEK2MQvcU5VDkNQ1S4U9xwRXt8ZUH",
  "key10": "5px2NX67oezZK4adJsKSowZNTnifU7A1TijfSp2iDss5W326eiXw8vKLcSDH3fv4VXEdgzDADEWgKDpNYAErxdTt",
  "key11": "3afJ2WaD7ffsfP4oJC2op99umhupubkAjommeSCKGitEbHooJdXjQdKp5FsneLubZwAenr34G9d7p1dNCg2U3qVP",
  "key12": "4tkj4UYmUYVD5868SqY5yHyFFdGSmxdKv19aEMAfL1ZWpdar5DA4g1nfXCSty2KPXQANyTYhGp1fRpU3yZtWsGdX",
  "key13": "Cw1RH7mvwBu1c4kHxvMsC7mcguG1rDwMoFux3zR7gJNbvnMeWEJQEC4xxhVNWYefePhr3775Cne91u6w3v5JJjx",
  "key14": "9ieo92Fgp6itiWVr6HCN2t1psEqjgHhLLwyFdNzmuubMmcHW6RpMnpR2aaTL2psFzZ75hTY9pDgNipT5X8fY7bi",
  "key15": "1rcRZ6F64VTEgcogxdmAJteQVc5uQB5bN9yqHGPsFqTStvGVMVcHoC5VQqfwFhcjrmyxSr1Dx3GEfe9VG5kb1Wx",
  "key16": "3xt2Vfp7W8PLYGshEz6QAYYnuTGxEpajC7iAE4erZBxe2gxa4px1iAKsBFDos2zi1d1n9ec7xLQ1bPwbX6D1rccq",
  "key17": "gLdETqgCh52xkKw6xqZiJNGJCKNFPtSW8dxjkqU3Etpk7FyFZvYa9U2Hbq1QHV5F5zgwkDMGCC6y7iqYSbsA33h",
  "key18": "WWroQDzmBbNz4AdajvZYQR5qYXuLK4xsMARKbhN694sGkCEttFafC6WmqwdbkHzSe9bdZVWHYf2dpu4DaRHbKJc",
  "key19": "3UrckShP3MQtwbMx9USFYKxnRqopgS7yFdv34suMJcNNwZHfhF4qksJd9JDmLt6po6XXqcM7LFWFReDwZjLNUuwB",
  "key20": "Rzo5rPSvKzj2YxFqM8MLfPshKNu6RJYwxLC78dF7XnhgN2vAjuqzRcMb6jqSf8SoZH3mZx7Au6WTa7NuGNv44G8",
  "key21": "QLScfaK8skV19WsGP3LGhxCypqZCA8k4dxpVxUbiE486LhEF24yzJTCHDgZmjScsXk9cww6P9yqEG2XoAotNpDv",
  "key22": "5fFW43tFL8TyLr98EobKE6D4Hj2oc3d1GXUrC1waeydCRjqreghjkd95EdgU5yS2hysKdtM25pvFyS9tNCycxuRz",
  "key23": "2UwiQottthfmsZZwxmUB1pEhgwMhAB9NupoeddMevapdJ9aipepzBUGJ6ZZ1PP9XdTXW5HMeNKXTx1ucjwVu2mrf",
  "key24": "4hb4RDvobXsuJm4UfyXubm54fD5oYww2b6zAXSJVHGAoYXMxHRPWGWbMhegv4fJL8xnDSsfb6GftpvByvRsMTW8a",
  "key25": "9SiZPHFpGPC2etM3nc6nkgLoYjCaaCS5ktUZR5o25AsNaV2c8uy3hMscGeKh2FkuDMzCBhdjuYpkRWN5DxafCHq",
  "key26": "572uDA3qaQ2usL2EFFWEvfAe7i7ay5pEqhobLPULnVXkVuWJQdub3j3jYGBaii56V5kxwrSQfQFHB3QFnbcG7Bi",
  "key27": "Ga64dEm3TPXR6Vh5b2ghK8GfS5KhmWnXYR5xqzK3hCJ9NWBrkwxK2NUWKqMMeRzSZCn45bfcee6ZDstt2FyPGsV",
  "key28": "3RVeiUgRFXCW94ZPHAXydQStFVgaqi7GtyuppYWGX1dcnb27htD3HPrYteFBaD8pq8paqfDMFajMkKxfo8j9hpXS",
  "key29": "3U83p1Wkh3J4GjXKVMGsoKWstgVDYPCD5rtgHUtz2PfVVofdYAhKTyQMqJBhKvYWRkcmkuyf9PBr8z35JSdEqWXd",
  "key30": "2SFLkc62wk1QqCcKifkrWj5e2bxKfqQkyh6rMBNyYdLexWzr2AnuSMrWTScwAxvhuQbSqnLJmBSQWXiaLg4z9jAS"
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
