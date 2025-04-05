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
    "3TufZn7hQ32zK7N6rCVJxhnB5Zmxkr9ZqsJXoSYeXmZPA24QxNCwjBkgQQGiUh9nAE3utwocfDBw6cnx2zWit6iN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YS4rp7quxv9KZrwrBnNYCpKfB3AgatCBRepCCeQ6V4atraGVYevP7UawnHnwYcB4dwb3gv5izTLmz2zUKw3GXj1",
  "key1": "m9vRb7sodxU2aFpup9pN7M3LydrWJ63v8SUTBbthUYq497NRvQdTr5Jb5jzesEhYBte33TeTY44UZkua3CBDHjV",
  "key2": "LamTzoRCTfTC4DkcZb1jKReueQEMaTwNbirxEbBTUgUGLmnF3eenEkBAXgWXUZpoDLN2GBmArfjN6vq8wrTv6mg",
  "key3": "2rs98ExnQbNZKnddG5pQQZQDsLaUfqduYXLrqZF8bgguU18rPJVPjXcFA56ZRP7un58aMHwHeTSt4gQDsUZSAcaU",
  "key4": "54SrCp9Sjtihnd4DhTKFrP8Ph6zBNJhuce19AnNqureQAbou1EejE9uLMm29yA5eFm18gsRZZNXc87kzfaZZyVpy",
  "key5": "4atWBMSuWYKv4XGGDii6V27kg1WM3KUd5KTEjmsmL9K1UvUMSijowZp61CWBLHLs8wgtNcYWQ86oWNCeP31fQAfq",
  "key6": "3rm4NyTgmkuA7Y7nqZLLrEBG8C3ocGEXvbaCj4e8QWGB4EXYXYKuHyeXug1WQLw6TsFHP3ZYx99mxYiNgkQtwgPM",
  "key7": "3BH3WjBzzzQQa4D8pYid7qnyT93a7jBwKYxnjK7MMoyDTd8pKAZd5SfEUpVriNgyeG8umCQ4yApAoSXqn52rscZ2",
  "key8": "3CJigijkirJj4HE4ebG9Ym8UfRVNYt6epjtgAJbkpLxcmM2fsTfT3jDwzZRMn3fm1nbzaFTQCQaxQPeeCWxwdFMF",
  "key9": "33KvXRHfydTXYKt8mYZmKHUTwtH2VMN9YUvJCdPzMdhqGPNVMkd5tazJZ1tuRJzs9sXFuewhb6yKFSsvZwixPq7A",
  "key10": "3FZrBAVdpKmviPrAAgdPRx3zgsktTjTeTzDk5ENZ9XiiMozEEMAmHij8zgmeB1wzYLRpTXzJkgnK3X3KScLWsuhx",
  "key11": "5m3PryNeKsQLzWV2pxfrTsqbUnaqzBGfWEVed1TwnggyvY24BYUgHptKnnprvD663N4Q5Tu7UMiAT4NcJJpa4kvE",
  "key12": "24f5mePmcPyYB44JLjcD6HB6hhUgZiipbEwuYvC95SVUUC5r5EKwVBGQmbbN86Xwadfi79uzH4Asv1cJMg4TzNX5",
  "key13": "5JKVfhHTGXGDbgA2tLPEVjkRywnycSkyHDBigxmqQPieXLZ2YxYx7RCAKvp46eZ71bZfkNapcyCRqmqAYqQ3Cz33",
  "key14": "5YBkQ3P3pszTGzvdsSt5KFG6HF5pWNF5tNZcTzUDKtA4UuCnPDmQsbyRs3VgqwKj2sqgVUiyuCCLQsPthEPfZgQX",
  "key15": "2NkfgTxii9zcLaNzFm9WMVsTtz8A9EFu8c6cErzSv341ksduNbcaDs9Bcr6PEmGT6XWMC1eSQzeHGytrrWxDQQjF",
  "key16": "VPNgQzcrM4Z6Fs1rmPAgN3qXxf1pRLirPK6JibWJwkUMdutUjp1ppkS3p4SiTrK8KLWjovPMCTVn6Je4VGWsrTA",
  "key17": "5a4NL4a353zW7sj7af1j8Cgp9Jz4Lb7iuXnsUxm8bi9QkABrtQuxAHFuKzD1BfWgVY9KawCsSwVS9rpGXhM9THY7",
  "key18": "62cewPqFSK3kt7kfRautK4sYSghty21FACnuKkdGHX1y17zWUzQN7iBW45yAMLHsRFs317xXK9QMjKEdk1bDQhwG",
  "key19": "3ueKNBhQRMAzSxkMQEKvd5rwvYFENqRSbQ8xXhEdwSa1NrykERDMpofmZGq6wCmnZChqmVRPbPiCewoFpY7Y8TV8",
  "key20": "4g5m1C7RZMWmcMaKNEgLUz1hQKPnheBtWRdXDhYLvnFvRS9A8vrPNHZgy48WpeNggmb48TAu3ZmpjvWcTqao1euB",
  "key21": "3fAPZfm1io9m7bNBRKXyUYnMLizAEb9UgijCi3jdYKgJR6PKTkXvSvqh6J3mXPpnAgEPz3VJc4o2cQQk6qttskvZ",
  "key22": "xRi9p87rumSPLKGcAwhtGauJFhrf4TyH5XLDBe1o9CrPCUuWkmc3hyPrcCva8Vmy35GpsKs2YjCDUtmdPTYpFs9",
  "key23": "3FXaSkiLbHwptZVhyCUD9kXdTncvRstbEQyxiujPwFE7HRtFFQhpjtdGn96v1hC1XvevbPs1w3kohZ2xuukRySkF",
  "key24": "4BPG4avBEzfcikShSbKGKEGzadTQJjK4o96mTxUebGCaNwrjhgjqB9YFU9vopv2hQX5uj2T5JLGcqeFhF6wX4iYR",
  "key25": "4SX5DM4NUNoKbbwnSmT6xm8TNyWQpmvhhsFfrzLR42PxYx2HGQTo8QxQQNayvY6wHVRZVfPuVmdGvHneLPRzC8KY",
  "key26": "5Kve28eCCZ35L1VpWyBhgUmB89KuAeW8qnGNaR6xDnhHhD5v638md9yWwNe91NaLwnogWypCZppvYM1waDTKfNEt",
  "key27": "3QPzyfq4MiLHe5HCwcCctobbFY6HWSuTeSFfzFLbKHn9TVgeKeqFP53Guqq6ihPYEuaHVVCgExmGvCHVsJtctpVn",
  "key28": "5qs2VdJX12cuWwqatT57DtVsTYtzJvjojXNrJq7Q9vmTeV9xdTtMNGJ81Ke1tFQUzSwZ2D2PMYgk4YAUWTfLSbmX",
  "key29": "5yj9ci8d72wJ2My8Mgt5WP5D8J9am3drqKAnn5Go6Estgk8VVSA86Y2aVBemhUVEXkfH83rmf8G8715w8kwCxe2i",
  "key30": "2P9y5uqPjT7tpZGnb7d4V53icVetY1ixjdk3kiLodSkvDgtsygSwteim9DTmb9whxoevn8sQq1MX8QwVJWGwBqhG",
  "key31": "5ZCbrCbCBqM8AFSkCiiWmE2DjNhdeSKoR1WYNoibhXWGZvt4Nr6De8J6msJvtQXicuDGSoFnZriNjsFFft5EfwF8",
  "key32": "4pNspUAt5Cgk23MLWQnogfhgLTg4h4MXQQQBYtLPgvc4DXxivncGqZLEUZqBCL9NiP9SKm6K5tw7SYHQoKyAd4gr",
  "key33": "5Emc7Q3EQZ86nWewiXwTuR6XMV36pEVZRA7QHkTYQHm14piCx5tUoXH3mbxMGr3htDGYGJX4e5BVdi3xHokUMx34",
  "key34": "bJN5QBrY6WectgbEnHpwkz7HgiaN6NF7nR9JazodaAnEeP3xLCxAsjT2aa6dCaxKfM9Z66MvZXz9CWNGAhUQp54",
  "key35": "51ymoTAYw3bxhVbHxReyi5MjDMcU1jgpekDRwNnWdJc11t7Rei3YYwd1GCi1nqHDjqZgZfyFpZCiaC83DDg5Pw2c",
  "key36": "5ELctdmUpQtjExN4Z5h3sMpkRxMyehQPvGT5JeYZedjmEvrss4RAyqBhuKC3s5dWnEwaaUX61FyerJ73iSy3QTcd",
  "key37": "36gAeVzkmJsWh3agkDfwJvPovQQZW8DQZCx8EEz9Xstz9n2e3zbCTB6CT1ptjr3niA4LApHHbMunQaj1eGWdm1v3",
  "key38": "57h3H3GhEzLrrmJEsH2kTf9G2wnWr7rThUHUbThDeCmf2LFrQ6jjHXQC98KiS6pnSuGK9iznjHoidv6dRFEaf9J8",
  "key39": "u3zwRW7CJ8Akt5cRr9z7PD6euaaEbArzq6y3PFrDWhqaPwcb1vMpLgQkG68D17pCj3i7cx5aV4AH5DHRaUmduwf",
  "key40": "2edQM9vXj1QiGwXoCqb9FuXr7oVC7tkKX6tCkzZycKDZ3p6ZU1oQq9FLMgzAtjHfeuNYoxAhSiVEPXz3rR9FABKh",
  "key41": "GjKfvoiLE83Bt7XcWYDSkJos3qwCgFV3d2RJjC5FhBTkqup9JwR1S3ADgoyzmUwjcC659pEDX7s3oiWQxwhWkMd",
  "key42": "2LtVDViMPYkfRYFPj28oZfz4hJvKUVREvFj7uhTeD4t3FeTsiutjcgLwdA7NkdbxpKfDuxXRHYVbeo8yDQwng9s7",
  "key43": "4uQLdqoKNNso8CHAWoVoTGYA19rFJefepKdUm13EzEwF4WJXSgPpeBQSgxXWXaGyT6NqFy1fGK4XVzhh1npq4V1i",
  "key44": "4SqYdPCeN8HHrJLpmkg8yNGDK5aRuobUCtCG52RHRACMzdaHmax34vETbKa7iYmZQYeakXDmkyz3TNmfrEQUCDBP",
  "key45": "3rVycgYU6xru75bLnu314sgdU99TH3bZ3DdTPTYiWngJkiVB2C9ibPPMRJsvQtPrUyStdx3cMqk6xyRSK9KMfbKn"
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
