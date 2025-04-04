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
    "2CYuN9BFaRaESZvqWT34XUwJXYiguvM2WHQf2PHEoEo7Hv12J4AP6eDKmastC5RujeCsKUgiRKwrZbHjd9XB38YV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iAKzFGnqxAhz2mGQvwEgWYz9P2m71TPSkBaTPQ1TNAaTpdW1jvNg3JaoG3bCdhJ5AWXiLDXenUod3Nn4uQge4mq",
  "key1": "PobbM5trCiwQ1ivFvQZ6sN5rWmcn4wFqLm6szaFB4T7zQVXuUBSigLvBxuBzZbP5zQS7edMf8UikKpV2YUzKNkj",
  "key2": "5kKnBCY4JawMA1XPChHav5uniqqDhk3eqHb1i6LviYpcsLc9Wwu1YYhfsxcn97tTEhKiPTDUByWaRkL1yMbFG7wQ",
  "key3": "rpKdFqvCVQGY5ebmzj1dBNW9ZQt39aTCcNEpDTvNv7QfxdfGnoG1z2K2Nrpm3Ydz1voDzc9fcoSkGPSmAXFt4jb",
  "key4": "AAcnM6dzjRa8JgbHnFG8V6rFB2by97fTzJyGXnmNJM6adVDeecfdSm7Meo1WZ1ZStCYLMNXStqTapk855GesjBG",
  "key5": "5VdpjuBRNfzM4UkWEXaSeBEwVD1Ei9cxmpbd4K3kzRpHoZ2ZHUj2ZgR4PdxwS5U5CovsdvNiGc444LdMePmdiGxb",
  "key6": "5YnWCmtyZ2JrzhAKTtdALuSbZcdicwbUEa7E2ZjrExw6QZ1tpBNux8gT3B7rQ1FizWNz6AD455K6wbRFWGfp5Zdj",
  "key7": "A3x9jQBS9FGXH9PLAcfGfzgL75brHrwM7UNuY4avUAwjivrhgL33DVM632gcDvJE15pAAg1bao9LbpWM2TM2zo5",
  "key8": "N3mLZa3HVBuE5YADhmDGKg9GP53173M6E4iMDtkZMj4rr4xd474TyeKgd8ks2MCnqE1DDb33Gc6dTGxf7w9kQyi",
  "key9": "2FTKG6ChWEPtLmXjKyE4g9rn5xaoPpBJBnBqEPsah59rLGC2xNbWR8MZSWyZYf8WzST9LWTf79Ppk9ADs1TkBy6h",
  "key10": "35jhHPWWtkzW13Brjr27p8JNqWi4egF5Fw94k74phLz84QMJX9AbG9hrGsFwLXYyYMUwD4NYp5AgxduUxs782GWV",
  "key11": "5gC2MM8xkA3bDHMaUtDfUF1Bh1pApgdGAH7xN2q8zHCga1nwpEA43xKC95U62Z1Ah5xL46XhSwXj224UkXJWijNF",
  "key12": "2H6pnWH3n9bbmxFueJaojTnxN8JnMwcG8TXJEG5pZ2VsrdfNm6CAwTR88e8JPosdjbaddvWkQea3nTSHTiWiUQyX",
  "key13": "3CiUbZLM6kLP9mtoVimT8XeFUr9MUaPuQQVKMHzDbA2SkhtSe31uANNcxU9z5qxSjy1NuHBZt4eMT4uC3vSemSjV",
  "key14": "tEVir6SKJ7ziDLxuFreB8g6d1rYUWq64Haw3eK8bS42fyZ1ZX9WDyYuwAKHPFVpWubjy1xEC9D7c5E6QK9iesRS",
  "key15": "4BqGgr92uHpVHwMidmPC6JcraCRUJVbz7ZyGZaj3EX8NJx7p9ab88qHLnXvx4LJLoABDH9HBKhVqn6VTjLNNre8E",
  "key16": "4GsxVrfp1EfasDFZ5yZx8dfX2D6Uihjrwzh7kwtfbjoYYNvacemknKDygdUNNfh8cpQ3U8Yb6CQ4dNYWy5nPbhJ2",
  "key17": "3ArPanhA2kovi6V6fxvEh9VpUG717H3X4mUySyWy3gQ8LQNZiJwZJA79cA9jEZi7BoFgTGZsNQgyBWppF9oMMxMN",
  "key18": "2ZmgSbYbsRZuakp2BuZ8sX9vzMZCKzwWyii6UbrRAviTQh9mx8yu45VpVsadC4WLmXXaYYRAm7F6KY8RmFkEqksF",
  "key19": "3cTQ5wb8gRYwPoCVojchMAET7Gaw816RpK18gZFphXdB2pB2FmR6BW6gMAb8gsYf7m6jcN4ARYpXfEKNCbpBqf36",
  "key20": "5PuA45ANgoDycnfNkE5VrE8CVwxwCDyWaJ9JiBUaxsfed9D7v6DYywH5rYpMo1wxRQMjojXh19f1m61uGCmN1yaW",
  "key21": "4AfzyrfnvJReZeJCTswBF4jvEVvsRZWKSqGyCZ7kisu4rDUcfj4TenjLdEd1GY24CjxwzeyaES1kAZCYyc46v2Y2",
  "key22": "kfXCG89a4qv2bwLKxUh9nuFFfp53ofXFY3qts9tMrbuNMTpB6JB41WzdD7G4Bq973aTHu2JJr7qbbWNo1GeQwD8",
  "key23": "23rj1Kz5Xmpoo2Wf19mpnXZD2wiXhh3HQ7zLCUUjGRVkQv3XeGXB1YrLaEESnVa2FfjykzXDDAJWoQeyF9Qi6DTT",
  "key24": "4cBm4qBEmkSXCzWaiLxMMXvRm6EeGq1W67X2u4Ac4RR4ZLE8mWKDdJd1zfsjdHDyX3u9rbVbrcBFwJ39vr8tqHzj",
  "key25": "2PfhawQwD9q1d3PNULAsGCLSNx1JhXx2iFQE2aeMH5KZFTZfijrDFkL7HyLRJZqhQK5S6sEMvucgghbv1YxgAFx6",
  "key26": "kLhfxXJokBWh3UT784yx4BT1tE4P1w5dZuibbrkZTnQ5JfKURppb4Rct9iRQtQ9z1qvTfiHJZ3iZuLYnKxtxfVX",
  "key27": "3wDiykPXuHbScc7qaQWoviWAXYzDAdR2KV4frZcdehCfkZ5nvLE2Lvi6JduhzZVwX9gqabMAKUy72euB8wTvWVdN",
  "key28": "3MEeDD2z1GTvqGzwy42awGbtPCoGXRxiDzcmX1KGEnPfLCYL24CcDJAfYtcAVmt6cgUrAgdz6befwUUBBejzrHX7",
  "key29": "411H9et1xSH77dUMLsnyRnpGGPwNSD1imucUxbmSmNDjGUEafc5n3AcxavM8Lrppe5diGrbUHxSVzrv6WQxECpx7",
  "key30": "39PmDeH2ruKuNKuAo33VxwrEc7NFuj4KgybUeQgHyoLjWcLHgT8ELHjHBfPgZV71e4rKCu7EoFK5PqZ3xhbTZ12J",
  "key31": "4PyKbKCaEvcxdZjRnjYjcLw7wap6feYj241cXyjpX9P8PYYEG8c3PHyQP8th9XdL33TVY2t7Dt4g8FGMEWd7az5L",
  "key32": "4feMGoh4BkaCVcNLe1r9K6TsV9MEffZhEgRmeTxocBNQAcxfy92SwY6Rzg8gE2qZr3qQfVPnjZzWkGcuPP3cWKXj",
  "key33": "2QQeyBNPjuySqDdvcC2D3TTptRj7GSmMoRow8T8A4nqNjqpG4f8DXt4SShmp4k9nq68uMhwLpfW6WJpJVNADEwUn",
  "key34": "4A7ttqUT8ANdeNcQTdB3o9Uw6XDgUbQD6T7Yes3fAmnZdtD29Va3RZR99ReHyAfZzXPQYnwmyqP7R3ac8Xx5ELoe",
  "key35": "4Wq2LrgFLVsoBKdAxanHhNnui6VyD1YSD3dYWWxQfPDbZXGxebonrUSMZtDePiXZjxnuDAxQyroxrZ2EERc4b5EZ",
  "key36": "2NHGMjvTF9eqvKv8yMLwGZWtvZNjs6teEAL2j6dYmHNimTUR91sesZRQp7Kz1HRqVYnhGMZu5RrkUDSjkLBSHin8",
  "key37": "5H8yxs8hNmSg2eEkaqsbH5YuBJSkYUPTQVRXYt6UDX3eLDGR99AANE7EMTtgV5bRhezwzh4ZD8J1dp2heEQfrnfb",
  "key38": "583FNztXZCUtm4GbAcT2NL5idZ4pvpoTuPDpY8smuEaUGEyuUu3Pt5mpcmVjVoKLzr6uanSgiKKomFmzSdxZvM5r",
  "key39": "3zNza1oN4cHzULqnkJPnpAn3SjrbWMbwUi2KtBRHLvVdLotFNHXCrhL3CMzCH5Yfkii8whM18Zsjg52v9dsY4jjm",
  "key40": "5rqbxuKoDvXbndYsMWaVXekfp1JwyLW96WMsi5EZTok8JgXcX58thxY2C7XKuwUCGjEnLH7RSC4PyD1jcN9MMc9D",
  "key41": "2tYyreVB3UMZAwLY5tc7oPicNuoFCL8hcQqd7h6CM5bnQgfhiLNvBZUsa8T3vTiSDGbnfBjyLkMEy9QpEXHmsU1h",
  "key42": "3QQ47w3W3NwCNezSiHnYRYvqcUkvFJPjzYAr766p5FAmmP9FGKR499dKhotpA1b2KjhCZFhUdBsxWPu8uwVmHQjG",
  "key43": "4tHHZ1U9onR2xhfmd45aAQr1Lpk4R1D5g24RoCkcy3CSBNn6HF9DTzhn5V4pVUfXotv7apY93cxK9GkgrcJW41bN",
  "key44": "5n6h3DQkUxwXbiPgoBcKgmSXu52pDaBLSLPWHuNstRY363xJv5m86gep3Te8c957mmwfkojB8AX7gFiupkEmdoC9"
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
