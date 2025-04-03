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
    "5M7UArrp6cXaA4gMa1LvgyguePmJjTX2TEr1JzyWYym98ihadRAF5iXuopy3KWHCKhC2itLQXAYxYZHzbJa158xQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zZvrYerLru1aieKPn7HwTaxQZjwXRn4XS3MKU8ma9xnLq9EsMSpyAtHVBnvvyRkDtd2tSMgbNGo4gqX6WFYZ9Lg",
  "key1": "3iHCC8RGW8N85s1N89BpCzBTMgFsKfy7MUhwCg24BsgUUppeXDCXJt5WAqkzUqjZmmQjhNnxuSsLnDKJSHqEW8g4",
  "key2": "4DVhhs1Yi6bvehQ3sCN6fMVjtZTUWVAFmiRWv2JRXaVD21VxwSUXLN2QPSPSBJaMnpmahCeivaFz7vF2gCsUFcjb",
  "key3": "2wfALwJ9H7UYnWGf18awmK1wskF2U78RjJ9SohzoMWEmo3ZxediBdwuuoNsqhhZ3FNw6ugBWY26vuZmP9dp3xA2t",
  "key4": "2W569C5zzAUY5YHYaSSawcCDVhMYXKTq7X7JUwohpHDjb3sQ6XKdpFFKRm7qX8QXb8C7iqThTtwD2RjqCrSC4y5L",
  "key5": "3Co2DBDB9t6TNDt6mkLRAK1v6rxm1z3Kqx2eKfvtLFn4jnvbYJoxEu36oxgG8i7WJgtxyr2mjfRWNE55h7ViVwGy",
  "key6": "62Lwd2UbPGttXpG6BoAYGBcdjWrkBbCY1b7888WL2aTYMQndpwpBsSK7Jmce8CYPwXc33wXF3Sfo6dN2BkEftFhd",
  "key7": "4X1bmYh54PYATMazDLaPDzm21Ft8NTKcnid62sLLb6CTC5Cd6rnXH98HF9TU143eLLArT9T2wyFthybYFk9NpvuB",
  "key8": "EGT5BdSZqmtqwSNbWEoEhdXUjASsxKUHACBrBuuHbRDHDTWjFLA24iUDCYgo9Zx57pMzczB945vmBz6EktJmzGZ",
  "key9": "a8G2af8m7aJ1BNPp7WiS8RDm83T1kAqRqtHiJj4dGM98qJHQPjxQQgz8dfs1KT8awHiwNny34pt6k8P51eJyXLU",
  "key10": "sZbGQK5GmZ8H33x5dnQjywqzGeDAZjVNf5oBDdLCMuADjDZ8YLYdCtZzjzi2rgMyS9WAsMCzPB1UUxQm5r1KoiN",
  "key11": "4Dsmm2XryCd88nuhQosVZJoFtHvD679fq4BBBPMfcTCmXhBi3K9W18y4Pk5wkEwsd8fTaCFMbfbd8jNz87Bx6mWn",
  "key12": "iLnZYd3G1znQgTdVTD5VepWezuMkPZhHnYN4HwvNbQGfWvTyAWRoi7kqHzGC13nj6iThss61jmvu7UckwX5mw1C",
  "key13": "4Xg9zXV66cYpZr22DjhKZPvf61ipPVakPvRoyageMhqB1nkijQYkAE7w1jXA5hChhcxKraRDUfp65qE5f4S52yG9",
  "key14": "CGYb1n2aSzRbjhp6GjYabhZoAprvWePW1qMjJWawCYxWgcNC7c4PT15GxDJhJwmuWfSRwFEp5QL6t3NPdvnBm1S",
  "key15": "5B4172tsy9uMudteqaRhYyETUCRD9ra5YoMiZKmTFtBQR2RfTVzf8gvCV7eHZ87BD9sLv4eUAoziJJaqVg6MKYTj",
  "key16": "5k7LzNzzA4javbuppvEH2rX2qeDkcmV2EZxoZpqHBxzQoBzPnVuuFFxvBp8eHR1NwinB3f6A7fhLWeMGNnjAfbNq",
  "key17": "5E6niPof3jkAwfw8tVwvEx6KodHXKXjsyp3Fd5g1VugeAa3hH4iBUJuj7nGPFj5wxknmiuL2AFJv8ymJi1W9vNQD",
  "key18": "2SWM7VBdwmiWc5saiRNbejuXxYWBiHZZwJi6VM2Da2w6gtUeUsM1KDxEVDAifAzfuzWiaDR67cmyr9Jveos5uUan",
  "key19": "3P2gL9hDvrZybgRxWJr8vZanNxbrbceqqpbs3hmS8Tpg4RK1eU5RygG58swGSDWjmQEEr1kjUDT2Tdeioj15CYN1",
  "key20": "zUECGNpdKQNTc4KawubR9teFA3mkdpcr2E9FbBS68AvCk2pBcXVoxSR9CHqx1fkb6yoVn5dceN4Sv13gJeDVfv8",
  "key21": "UEJ9jhxcGKgbcdoaZFQh7Ey31hBmos9kKXPvNTcqwR5GpH4Eoh9TNvBToeZFGvmpEjxnGsFuumrvjb82fgNBYCq",
  "key22": "4Sc3gzuQXydNCP3oaajAp88WW5kp2CevHJiaqUbg4DRRxH1rYpHMY6DQFVJfDYZoahwyf66wZ8ocL59z9LgZAU78",
  "key23": "2xxAmo2yzCroGPdsG6ydwFerWov685XfVnPvcnQ9m7Yeb2s26PBQwWHyVY6ob2eewUDro9WbXivPasLCHe3gQjUj",
  "key24": "jdmdft2ct24HWfDbRdDvGSJGm3fbBo4Zuxh6dD7jt57nJ29xTkwu9SBjXoKopBNsXocQRHJ9E4XXFLszxoXnpy9",
  "key25": "XNLn6SVPAwuGUHhNzsK7vfH8EfacYDupLPqQVc29wQT41r9X6avofTk1Z6PisLuyJ8dV74PyrrjxjHLThpbcp8w",
  "key26": "3AhhBdEwTQyoCy7KsE5esFxjnrLfTudhAGWmYe5rfwmTPotUWXgHtU9kFfx4HgUTmTkY6abUuwmDEiohMAqKSWiZ",
  "key27": "2AhUxwNpu5WcCoYDFjzZcWkua6nQkmUbKjig3Diw38EkPPPMvrHpN6V7vQm6Kx632Amhp1NQDEZrAQcVdTV42jex",
  "key28": "3Ex9LD72np6fZPR1C2ax9BxsLfRqSkY5HumPqJgs68zcFLA1Uq3kv6xBvowRUS7uQ5U7rganw4xpT4wa4Nsz3sb7",
  "key29": "21QwByzndXeoXm7ZA9yrJxgXh1byhuPAsazNgiELKWdLmj1EwbD5nsHHS5tTJD8Ka6Azt485w93mUg64twMxP3mD",
  "key30": "4s3NG4FG9v9FX4k6fkQZkYVaZ93uvKSLdtXGbTy3QKfK4nGwhkzKcUiniRA8fUh38M3bLFKQPg54PhR8zBFzavQD",
  "key31": "1xhNwJyTdCuRw5PDwww6qCVJ6KSwHHtuWH65XVqQsaCPaKJ3K2ZxkjwRZRpDDumoGZ26k9xendRe73MALWXCyiU",
  "key32": "2JEXSSS3SVVT4LNWUPMPgttsQKf8EHVNvwXHhvL6iunHSnSywoYNsta5o35TihVhutQzjtop7VWSWJ76cii8n8Pu",
  "key33": "4zXtDSHHHikjMmJAqMd3yvyMGc9F25jrjDJ3pyH8TL3ESGd6frFRrLkdPkt5XJebW8kL9NMffVRThnKqUciqTcm8"
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
