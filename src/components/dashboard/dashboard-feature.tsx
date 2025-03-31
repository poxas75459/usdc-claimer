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
    "3Afhq5Pc2D8VAB6RuKwsqbH5F5hUTdnW9TtFZU3VFUHNNdJSoz3j3zgTGzFqQEgHKRUwY8FxJtRU9WeYrTHhSyEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oNSuyAMoLERPDRzQUukfDdWws1d6tki1HgHGhfjy2RPNnjJzd41YvZPyxXencuBa3iGLYoStGEiQbVJRxJxsjDe",
  "key1": "yu3h3g6edqVB2dLyWWn4D47pvTTXscD4fvU6sUVGSDT3btBnkLc35UjmbC1SL4dYE1C8K4btcNQ3Us8CLh24Pc1",
  "key2": "53DHNh819nsNcskutwF9LJhtTwGhtzUutLS5HEXeA159m3s2okYsVpg4B3jbKDe4JBydDjCXq9T3jUrFVfbZC32K",
  "key3": "5zKq8KPKLU35JV3f9ppyjuhYRUT7dwD1UD5dhhdXSmpRv72iJUegPJDgtgCV55eokDx2B71mt6zhWYRnmeSiUrKZ",
  "key4": "5REmWPK2Xgr97k8z8i7sUKVMPcwkpG4u9RA8YFj32VafTwpEwDWVsoTZ2gGzRf1dXhYjtiDFRxth2PQ872AcGDgN",
  "key5": "5JtzVM6nJBLBqGo1i7RGW7Aa5nvAKLPF2Jc5rZVyTEYt5tHNKBjRBQt6wt47w23GvUr4wDJFqU9uZYftiaCiwm6n",
  "key6": "5gBy2vyuAYazKjzzMZCnRiounyyFr9wDgN62eeb5wJHP6mSCeeukgNZX4saXenyHiBMw19DgRE1SXqXqkAMn1KUc",
  "key7": "22L4mEh5qadeS7qox9PZaNcm1qycX5eG75JzsqoKE3zZoRnnKJX4mLCHj2ZJbZYGim8MUbv17FVtoFqsmQpEdu3J",
  "key8": "4giRJzJpywn81VbTLKM3enn2iEXdwsgkrqn19LZx6MT5cgwNZE1rbkMfxVxoTYwPg4ooCwHX7ZD3NEYMqFBxMnN7",
  "key9": "KNVp2zW2bL2i9sTc2oN4pTAp2xo5iDvVceYsRF6tq8TLFWr8nCtgygqz8pPqarj3MfGcp7LgcbzdRSUbxnptSgw",
  "key10": "2o8iMLCCNh4zU5D4z78VxyizxTJG65HnvN13wgYK3TaAArWhifM9mbgVcx9d88s3YxosfbabS1RpJR4eMoVAAvT1",
  "key11": "3xRMakpy5vmR7HQscx396LSiAERu2EEnfPK7nf42mUpvY1kvmvptpMqfUBXYFeu3y86zPRevJSM7PEQ8yuqsYrEp",
  "key12": "2KFyjn9spQQqMgp2zgikdqE7Y9ctPyXZWhaFL4uXLtUsuV7QLhQgSe2egkXhGQKycETxzDPXQhMDB9Cd43sZqKR6",
  "key13": "2UtPasvXMoZW7cEuLV5mYRp1LGdQmLQpFfi3iLenmhxyAz99pZs6TB4QMN22qtxQXCEQhXsiSNnvpjAJLy21niC6",
  "key14": "3upApzAK58r1pJJ3xy9yf4twouPmbAsEpHekTvk6XJpD1rsjnrv83NCM6by15sTWvY4nddZhNgJg8sHhkD5TpdQ2",
  "key15": "5jTXpDJ2k6sVkKbLMVJMRDGcfnSCioJnoJoQdky6AFk3YoZQZpAFMr7kjxot282EKJZE1y2Skxqa8AoGBeRVyKcm",
  "key16": "5ffnvPGUFhuFGN1qr3sXGB2giRzCQCeiT7EtnNTD1QBnX2Xf6ZX6FnZsqDnV2gHHFUpDvXqH39N4kxCg2SvfZuPD",
  "key17": "3JaoTtHuPV3UG5ZZigw9S5MRzzC1qVWDWe5c56kZDL6C9PuaGEsu5F5S7BPkVZsAT1e6hJnCZWbH9LdafHd1zd5E",
  "key18": "5Cuf73WPzSQfJXyAFEFRGwjeJZiGXt8DSAvrrdPUSzUBEU2mc698k6hGk342AhGKU3DvgRBJpmYd4QoCwKyGe4x9",
  "key19": "ejCFri3533nbvbKUHqaHReQPx38UWeLeFqTFmGFqzn1EPPKL5ARptDqTvxS6yU6d9LuhVEaTR63phdKD98XNWFB",
  "key20": "43LRMh5q819kQo8cYrfFEm6fXxBcPEJDpzPTBzH3LvEgRQBUh397J2Trat7BdUww63fjLyYEHinAEL3icYBdtjra",
  "key21": "2fqd8cUKiPdsicR7YTsUnfocERCKEwWy3GTJKL2UeYZdG3NvSXmC3fca8T8uGinHDYeajdhA273rJqEp1BN1g9bq",
  "key22": "4dvAbztb5yNqSW2ajYYtPhqX7p8gCsoaqojDAVqdwYgS993tH7jVD2wUC5VjND6S7VnEAwNnvk8HthjfbaESmHnj",
  "key23": "2XQPNaBG4DbfxRpU1nHTzyf3oVSiRiUZC8myoVYzkvgubrozeqKbBoRYiMpg3wcUvAn7M9mAkuhoCnU81yhsvNT9",
  "key24": "5CUufe3d6sJMnyCzu8uAnMJMiX55UjQqS274GMih6Dd2NHkGtn26v3h1DWuTW7zfmuFkhhfZeurexqDzXhaGseU8",
  "key25": "2NdyBykS7VeFazfKyHZmEExJPQ3nQ8fomLiiDsYhLjNAom2eQAm1uA6g71NzmfQJKCqAcGCJA76bb3Rm1KLjrYf3",
  "key26": "5Ak87eygti3YBynU2woPNdWReCD8MUfH618cMKb234vKXjcFn4F1eq5Xc4YXqn588chaNXkJkmbmQ2vWYtK9s4UJ",
  "key27": "3PtxpsS7dAWqLmipCuRWkQ4KYD2ChtypDNWZwSuNrZFgJRy6fkMNZVLLK9otWDSHMc4evXJLQhnFUaPZjRQ96436",
  "key28": "3cGSCrk9VzHBjpgBpe3FnKFFr4qw43qBhY4xk5Zyts3jD7kQ6dg3g4AAKDvZiknf9oU7RK4g9NgSytYZgk57FNFy",
  "key29": "5S3tUtQxMu9y4rGBsDvPSXG48L8UoZHuhb48JNHSG8WQ5UrYsGDceaddt8QXVaeJVqunc4dnePUE34FNnBBX6iH3",
  "key30": "37YtUaAMBzPPuvc8heVG1FJkBfSjY5t9YYbuji7bBTMWFTXzXatncsqnAnYAdZ87w2Bz9dn51VtG6w7sAGH1isj4",
  "key31": "91226sEeQuf9vZg9MxwP9N4Gv21S8CoTpA6z3Q1QGyZKcD3DQfTt2HMCQudKMkmSyiCxtHYRZhkwspeHvz1ghSp",
  "key32": "2zc36HSst56qTmipy5RqoX5z6PQR6yHpEnrzovF9fCvY5eM1vDAAbKQycar1AevJqGVTcW47DrkHHvNR3P1mSBQj",
  "key33": "2T3StcwvqXKxL9SACMmxBdV2so97TLZHA7GwUtzz4RqA6UyZ4yxhN8zxfXm35vq7jpUSpjtGbKHY1srEJ1ESFXRL",
  "key34": "4E2Tbdi6kGWCnTgsDZ3fcuYV29dQ4i2KhZGdtCmTWqRiZpLPTLKxXyAec3d8VMLZ5bGvGHaXWjGUFrmDUV6qekgs"
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
