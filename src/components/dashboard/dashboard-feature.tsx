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
    "2oGLyVLCWzPmCcziiZRrW4Xo5yjE8J3AZD41qMpmspNAtBaAEuTZNAm3Li2dkEC9T7XdQjYyLZBGjuWBYa5FWEPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54ejvEN5regwhnP1dhgjXQSGYNGCrLLoK5KPoYPC5MNHTAYKvyDKVR48PLZ63pkp1jHRRbJtQbwfDzZNZzaGgH6Y",
  "key1": "5zbHQVNz1bjpyeBNZXsR8thC7JjbtYgLJYTwFsvsxTQSbobbDNxqDppYBW96XtArMdM3FkwmSjR3bwg41z6L39wJ",
  "key2": "3R9ZadTH95fYuz3tgSjjVKbj8LgrWtpa5JdyomHXCJ7igHambcSM3jK3qvHuZd2x7oJLdfEb7WPFYFwtnhC6w6ui",
  "key3": "2nGD14Gg2fa7ty1es4NhqDumqzv1BLwLhshf89V9tF4rVxD5vMjheMzLxiwWHhsMxGgXszg3reV6LFxuRP69R3Wo",
  "key4": "JyvTrjbm4uHar5hcXcxHQ9wBq5NiHsfW7kvXKu23h6e7ABNeNseCxv6SzSHfZKMjUmfoqtU81u1DkxfdLMhrdFj",
  "key5": "3ccg7RVeFgFVh1fwoVpR1H9BZyyfCKDcfWCLKWdZPJ2xYi8XwcxRvBjv22ysGChbTT3hVJMZKsP1Ai96njUKH6bX",
  "key6": "2V4uJu3brMS85mds7gkwd4ftmomnSeGGNMcAQhCHVuKPgHdxHwkrQezTBJ1q1P9ujSgYQqrWAMFz7dYXEkRztYTf",
  "key7": "2KVaJqvMM3ZWmM3ovLMdJWSjWmSUon7jXZsgVsxQCRaBQMfWo5XUZoEGfyYtsjCRghBcG8VzRodEty23NtNvxYE2",
  "key8": "3ThoQm6DLxzNHcjSmKdNFN8ZQXuKuTifTFHnWHTPffRSCf7BRAQ7nXa5edPt2XUnfEeoNZp8CskpReotZTuukhGw",
  "key9": "eJoRDhoY9s8yWNBbRLUd15qtNUR9i275DBTrBr7wr6HnRWMDorjPDCEeGkWaohKpzFkdqGHURLSzLpxgovE8VCV",
  "key10": "3YVcxEuNMmZUTmrCwPQKYtiGSmpmT6qnxj6DJBUmcUKLupMj3C3ddWs8oBQkZZNqyhxKp4YXXiBLuL5bV3UEJrMe",
  "key11": "2woQoQjLm9e66TJrMmVTDGUq11yFjaKXpFnkPGAvscV9YaLVEh2xCmWhpcE2aeDwFhANzJ5dWCm6STk7rqyFwfUp",
  "key12": "2oQN1BEB6krYWNxr59hnG77Nr8PYwEXMHj2T326fT11NKmBBxpu8mvnwSCsZszXckEtaCcMf7zmUVvhVsgHzhYkJ",
  "key13": "2NoktYmngzph1u8cAbLzspcA6rHtWTcxqptyBkyJk3PAzA4z5Y7Wf9GyTmnhtQAhN5LJQtduxQWa3oPbWVNpGsh6",
  "key14": "3tQvBgphsrNQuDLTrAoCADDMoH2r6dGiUNkx3PKyHtxcePSnQC2unmzBVBZ9SG4nrBcay8xaQNEU6D3KeFFpDrSc",
  "key15": "4rxwbemCYxsnt9pfxiBTq11HT7yLLHej5JxGoABYoSNi5xgvBaCoYChQ1zDo1jek4xW9JvzbGYL1J3fkMVKV3fu1",
  "key16": "5WsWpoSiLevfydmtXMMYo7m9kHhki87pXgtpFbMPafNSWYawfpA1AhSGjf9pKTFmsFQLWXyaLr9FRqWy5iCvD21j",
  "key17": "EG5g7nF5BxvGNGJcXkEwBdLwgmgiEnVbHDmvhUy9rFvx2r2pqPja8H7r2hfrvMxyVDBniNCDC4ad6dzksneRm69",
  "key18": "4HCGK1yVbxT1wUbMcqMQfgbiqwy3eKVRfFcMJiiKnXcrSw1fD4iyed56y1HqAgrptVfo27Ey7X986WP9ZP4ZtKyE",
  "key19": "5F8dz97gfthFeL7rduS6f783xFAnEvWNQFvKDGP6Jo9Z2Vbi2EMY6qQJqb8C6DjPN8M3j59VHCgSuEooYH5d98S6",
  "key20": "z1i2pamykFGi2TVnBjojvMck9h3TXhm44S2PPNiYUB6zD8rHhTa6BQjtzAixxGfCZGhvripCexZAsDaVwJS97W5",
  "key21": "2gkqVdEs6BqZB2tvugXk4AnRkHCLXyJQtuGqKY6EGAbaEhEHZsYL9q4XqLzpaMYw35hHXMjPoj1yvXWrR6RM5fxP",
  "key22": "4CKRKcUF1XTMha2mTwffR8NbbZ2RSgqHAdcWjnVuiTogF4CVscnRDu7B2VKsc95Q817x9JHgr6CDnEn8U4z9i2rF",
  "key23": "3a9oaiK1h28Ru6yeWXjsUGaNESzu9D9Xuyv8KcHrsT2qbvybFTP8FtvudSVzLUDzWf5SVnNrjjjiuf9gdNCj777W",
  "key24": "nd8mi7G3RTwwCMCJa77VaVVhQR1Gk4t8dR5AfGFpnCDVZboxg8dhkBC6FR8zgPkfqCmiYnfbcw33UJSSKXVBimX",
  "key25": "4U6F1Fmb2DzmoZvs2xSFwgC4HyJgWQVe7KjjnJt29BrKYFFLjt8e3F3tYVq9ZTVAYXLY1XgcqZswboYuffddCsDN",
  "key26": "623nuBRUgkvDGbQBYWYkCkQmhxRd6hzds1Ci4nAnrwPkpBUvyeeGACA4Wn4DNDJ9hLNprBC58jUBKukcS9Ynicmn",
  "key27": "2zjmJ7eFf9piTpSehup7ZCswEPKum4Cz1qynqkxQoDhrR6Z8n569npA4SNqpSsCGJxwiV6AGJduamV737BFqfa2w",
  "key28": "4dZ39ktcrLMwF23o3hL9GJZ9wZyt5bBwhcGxjZ66ZQyUog7XEpfbT15GiGJ7Af5JiwxYGTc2ubm7mxpJdTjdcnur",
  "key29": "3TZTvu6ppkhHrpEHWCWdjP758NAzCo5enkEiqBrVh546r9UWuTJuars2fktnAwtoJSCwhmk1YS5wkW649a3d9MEe",
  "key30": "36QvgdwS9DEAQ5pji1tAFELp2EdChYwdZ8TnBZY3MtfyktPypvYLrwxKeR5nzvBEJsMHm7mNJ1qVHZDRHQyB1hXP",
  "key31": "3cJKbVTB6thWAC2DHm42qFCbkxB6Sn8rEb9fkbcrsyvqUzMXxJf1HQw1TYmucqJtk5bg4yGoJhjbxXxJSyEJMKWB",
  "key32": "57g5HKLXjC37xEukdELotxrUD1HbFYXXA8dAPf9ogxHc3L9YfwwwSrkqwhFB3gfc4P6Mr3A5AuNRauYodJMPcFpW",
  "key33": "4Pug8po1PDLmmHjRcHtL8tx3MGtSkenPQLksKSubc5uCGNwdXHoSqNAchKvgeWMAi7oSej98FRBpFrVP61esS3z7",
  "key34": "65Dj57dNtjh3fpNuNZqu6tRHe9tYyfczP2zBWiZwu6Zg6a5NUMhXZP6NuspM6zRsw1K3VARW18dWok2eGKZkd1DN",
  "key35": "3DbEF9Kqh7Y6bmnVx55x21ZmUFfLURnEZQWVXN9tQZkuq28EEbk2ddFdw8rzUWEirtkKEKxQr8aG6p6cfT1DTgDS",
  "key36": "5yMjeDi32zMvuEK6odJ2Q5i8iUc69Cg6ZRjf2Drvd1KQV7GRtaWC2gE9dz8nUjEmpT9zTi2Y9VtAo7wQuLcEGwpN",
  "key37": "495KnkuhrbsK3dx648FTQibgxNDji2aoUPqeMrVw4VrR4wJWbPtaNr1nUJYSKrobYjUGNPUXbyYvM9izBuGakab6",
  "key38": "4p1SwKVBJJPwt1Z96aoZYD2NsAPfJyJXVsX8U82QyviashgydMu9AFaL8TeWRoMqowi3NHx2CQHrHtSTDHLbRUnS",
  "key39": "52eiZUBUBRjWwFEENnT25JUyazXKM7U2Pn43HkhCWs2wMYmXRPGMvpKmtE6DEN7ErthiTt7RZoVYAVLVfLCUiSeL"
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
