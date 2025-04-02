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
    "WrPAtnuDxPmzEEUwAzjtJpGVmZGAM2bhFbFa3uuSGDhTQUJY75JMxdFJHDA69e5QZN2rVsqPrPdGqHG7nxj1R86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Ust98iKsAFFCWQqtRi5S12yYUjrKWfTuNC2eUucgJLrAqhrxNAKezTuUPcBdNyQrXuN6N1YmtrZmLeBsTfbSpt",
  "key1": "4bZH7Bn4BsRLD7pzX3MvyHAjVk4Xp911TFjnXDymLhSy5JgY4bVqKSje41wshc2u5stMeaaPTEXQhXHCDwB2hYDa",
  "key2": "5qiAuHmtptQ3EgXvxVtFEZy4wzrMTp9UC8c9xVVeLqy1bXFQgP1shBa6gg4VicLX1tCaXiH4LGwU4JowzN4Cnmre",
  "key3": "3y3qGj1KYCHboWSYCjinGcYZdYexgE6dUAdaNYb2aLg1R5fWkQXriutKMvMVWA5cDpd1VYWWaETFfevD6uHEE1wW",
  "key4": "bpgdScZSje1UcZonmyZaYYrPoGTLsy2zTQjuzEgr161wvK63TGfHSK49EFkdeAYc6ohJ2VcMdDaB9Dnd9GNgpF1",
  "key5": "4KjGNmv9QBy47XofizMafwxF8SbyHcXh5LDGF7fkkd8mGnQCqT2m3F4Xt6epeCs26pk5ffZ8f788ZgH4rR8ucrFz",
  "key6": "3UemXpgJus93RL57j4dgq6u4MsVWfxBt7Upefe7mDSsy8neGXoMR19DLZTPMQ3EozRSGjGcujg5ST7Uo9Us4pf5n",
  "key7": "3r3zVgWzEFoPmt5KKL2wV36ppvqGBCbv3FRzy4mqygGxuzxSAgw1kEhR3GhmuBTDwHUra57ZM5uLKD85riktsP8r",
  "key8": "e3zEwvx8wiGidHQGR9UAzof8NKsgJgnYgtceoXrvJsrTnfT4JQyk9ic3zDYtghQWhXjN47utvR1EL2x5Kz1oF3e",
  "key9": "3XcAJNWNr8DqB8Z63jS3tKzBG7juKCez25qgumroHyRWXpJZTW3r3efsTi7v3A6rRU4bgCNZf1GzDphMUsu28tNT",
  "key10": "3mfE35VcZF8ekAtZVkM9ddXfqVhMGjQSgshZqyWp1cP1fFwwTHESVxNb41Gu7rb14E9J6JKZRwULBSm5zwCfi3KX",
  "key11": "5j6fJpEqV5ddKK87p69eHQMprFRdymzxVeV9zsYZt3Gywcs4fCvpBDcWMGyy23yWnAgRNwyYrpw2y3c99Ed1fRPx",
  "key12": "5wn11HU8su9fgcV6r2qGxgMM4fyQ8TXeZwG4dGnEv3ohWfYN87Uah6UNFBiKrzPb4sFCj3xjsWX5bB3jbWXJBFUJ",
  "key13": "2RUSyy3Nu8ci1cjPzR2HTRHV58ePtva8RApZHFijTJ2BBZaokbHhbq6KMtLKqsWqA6Ss9dYEmjW7uGExvzNJrgKc",
  "key14": "2M9u1YgQ8UGwWBcRrRRuafzHXXZBSQHCN4Mv6RcSQfY8n4fajaGmrDEYRo3Y6LgGhfRksBmC7VCRoHVgeU9T3146",
  "key15": "4kSTJqRaUy5czYdiQXvKrVvd65jDopFgSxfWWuQutCqRCCQrf25yemwMPPQbYWXabYfDc5KesSnErQXPzv2GTWZM",
  "key16": "Fvgc4jonhmU7tj2yH7onoJGzNsU3WwVPUJ9JwmCW7hnnceAmrDW8uofk7vAa4Ts9vKFTbK49gpGkJWGmkJERu62",
  "key17": "3AVK755KdkaeYQ76powcZGS1gkadoSNUgigC9rb51Kx1eiVQNGAuf61qSVh3icMkwouySdqa8mMzaZGHmmdFYopH",
  "key18": "3Ds1zdZzVeFLtEZsW7nFoBhPZWs7rss8RiiPtUovnfiYRD6EtjkY1xPYgTs63DBdKh72XFdkdxGYHQaXyvzJtaf6",
  "key19": "2XMFs8Qww6z1ULdZxmovd5jfZZkk1tX7FbpUYNEPNWyhndR4Bt8osifsEyRLk6LvNjRktvW4dxo2ZuV6s5Xs1ZCn",
  "key20": "3MYiv4Yz2FTKSFBQU77A17r2MNJZya1nBzNK57MJ14znE1Hdj8s6jM4ufcdM4fsZaaRsMgTz8Z9CAsHk9zdLB22R",
  "key21": "57R5iGNXySrbHZQU3WedXVGpbsNnimF4fiYQsUQUkehj7htZeXtbjVyucJPYmpYr9Pkg3mpiehwjVVT6MJUuNddY",
  "key22": "aFGjefwZq6juVKE1vZ1XVjSYobPGq3J9h5Gg9s94gVCysTfozpUsnXYcdiAphApaAqHjZnaX8ee8sBJJsTJRt7q",
  "key23": "2g6gfXdkPXPpyGq45JTBx5JsXRNdwM9byQ85Ud4aJUqAS45DtFPkFs5eUzc5afY2i2Uy9jcUuNemL7doprzc3CBp",
  "key24": "47vxTELNUFjJidbyc43HpXsnxdFh9SXX8LfczNgkWRfeVEbg5WSM46eBfwjZmdKxM96Bqhn5Z68yJDCMmddmSyoB",
  "key25": "2uaWA1dSsWRUDatPXTduSpr5wsv5CQqh2UEsUWXpMkmq52C9woaumbB3LdrPuc8fbAW9WDeSjrQBxr9FDAdgUvWt",
  "key26": "PdRAwnjKQH6SnHsGZyiWdJfgY4pGThNmQ3kpXEXEjsmbn4HemK4moXtfNaGyN75Chiz8YM1QMTHi8T2NXrMJU87",
  "key27": "4FHSPtVxWpcZyCi6pQT2hq9HFu8cZWhDDdBKNdbKVrtEnV9W749e6HzcP3EPEdjtHhK44JyoERAQC6UfBCSnYv18",
  "key28": "2yvPuYwkV52xS2LxkR7oop7X9twxtLp6uBnopwJ3WN3ETFqsuURTaSHp6TBB5moKgGEeunQaLDCV4ozvejY7n8zp",
  "key29": "gbYUV4k1okirenyNyApGatA2Y5HKFeoXLX5MVcnwn59Uh1GxhGGzt35cWNuZ9aCTatF5P1NqoYdad6w2yCQiy8R",
  "key30": "2oy2NWTpX2ykmsg8QvJpDkq9bspKakaP2erQzWEC2FxLjPe9CZcJ1dS5i9V66Ee1oSsxuLGcyZxyrgvTWptxK4UE",
  "key31": "2aZbdvjr6chg3687ze4QhuRxiTjYrJPg8sm9g4tnSgiF1F456eBvT54jZLPht6GKaPRQVoqMx4eScebJTqoaC3RP",
  "key32": "49qLCZmo3WXswpWNkc45BwLnypb4pvQkaX2vjvnAUhBvyzLSjG4DnzfT9UUGxhweUYCQog1EA88Hhsiqqb7pNAEy",
  "key33": "2d2v5ZiLLFAMycvipSXhKvAqo1QzypDVGUHcxpcA2fUAF5dpvtpLjgQkmCb9uzHkaibS5gX8eFoeN7JPgss7WZvc"
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
