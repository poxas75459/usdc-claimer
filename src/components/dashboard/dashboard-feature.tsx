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
    "3tZw5dX8GLq4y2qjZxJzTh3BWtsGJ3fBPgwvfBZcskq8hXgAYRD6dmKKeAxMV4s5KQBqJ3cxhQqZouyFxXms5hLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aDixcJLg8Ca9Vmns8SFkscvXgHjH6VEW4c6sVc33n55DhykTJkwt3zBXnwz85azYYbVwktwGTWssznwTvifB52q",
  "key1": "4CNLuAymFqvcSkf1mBq2VqMtFyDBpAa6ZeG5TtNtFdhN6zvyiTANgw1rxzJg1HB5gvM41KimLbKeftE5jAtL67dH",
  "key2": "H97rNx6BtK1c5KUPtAPL42V8ZT7QpiSVgPJv9YJSU7RFK3LozdviZvwgYmrFXo9bnW8HfSak8yAbVwRA6Da6KtL",
  "key3": "2G8YikY4MKKYMaCjqo38NyQdjqRSqb4T4d1ydSY3AqCxeMBxwWt9LV537FS2qXPbbz9BxAsu79hJm3Nkco7cc2we",
  "key4": "2bApcnn8ZhhvJ1HLAf96bL33webx7u66XuHeFJgEVZshT1V8Z7qj7ggKb7TnqJ6g5tMZ1zCQ2eR4hk4fUdvJdpHc",
  "key5": "57r8PcMqi6iiqLCzhr82tXPsxEY6xEV717nu4J9hrWSZ5xjwyNAxDueg439CNeehbLNkeqceSL3Ph7ay38tN3fNA",
  "key6": "2zehx7NAtn6gi18oeDxeP7dgPLKtLWq6J1dGi1C7miAzADrTzK6jkTfXhZZyNDJSWcvcaSbxSwHNyenuodRTu7FV",
  "key7": "2ThRWHh5Pdnfwe51SpgLj2jgs7mpKSYBDDrTNJqnXpdtXeRf8v1A4dbeZdsg9USk9M1Yc73uyAjQiwHKUpnngCXz",
  "key8": "53YoHV4YShK6n6T77B6hmWDRPhg2gha6kg71SecRy56ZnvEe3feMzDHcf5dB1p1tZE5P9NPHw8rAJgYfFjvi4MzG",
  "key9": "d8V21TLQo67fwqqhr9yf1BPBdzxAW3uvBYTi885pmogpXnaTQpbrpRWdx6ntXjYsQzhciTvopo9gcHgBkUFfLy1",
  "key10": "3KCKFsVyNZNoWVYa5YVQDro1JVnPU154JFHhCqR63uSsd2RRXkgN31DL1uonyZC7sJGqGp8bBFU5fYuUkWNbz1bY",
  "key11": "22C5Tcy1Ux8PW9ay55BzLfvewG1hfq1uUpPwoBEe9NGPjedfoppyNaSXt7LZjAwDYzYoF2KJRBw4secg6LJMonhs",
  "key12": "2HwH86uS5b8HVZUvqECtnDVRmWVGMqJr6oL4byz4NTyChUrSpiV2tmHRnR7iptwNsyVzfyCg6GN1AQV9yAtALkZS",
  "key13": "2VUzKYshxDGz6u4zYAYwdnaHrShYxo3jU9D9BzzWsJRivSJ2G7ZSq81rxMoJtfYVfUg7rU9bgdp1jUFHEjUKpjjC",
  "key14": "5WgqnjidZ4fie3q7wXCgVuAnXaBpTiKTNkXHkTVp1qGFTBKX9tiyYiHQspP7FoBqdrhZxt8FDb2k6Wpp3LfLQF4o",
  "key15": "2JkBMBQXaj947uyBrmDYnMBshuBNYY3sLdtipQMryp9sWcP8p1nQatCqmLjLy8eRxM7LuTaX66SNF8w3PXFRBRXJ",
  "key16": "4h88fqG8AnRWxsySXWpb96UKhciLq5BKHxneuX9DSSgJ8LXsfVxc4gfasERoFELmnHsbyvSFQAo9mQtJbJG3Tnxh",
  "key17": "cqbW8oY5vuCnAfPjryGzvsz7ZitjCpQ6cbbSGHeb2BzT1eETfD2z8dB3MykT8sJ38JWvJ1fgb8zBCHpmS5D8XNj",
  "key18": "4Hy5t6nDGgyk8CySnSVfnaaoAbkoNodDxLx9UwcSVFpdSKzmeUWfi57SXeVijoyfc5H2Uu6WV6bVYfDK59mrGqkr",
  "key19": "4KcvAaCGzckRexpi6iwjeXUCKDmTtW69w7QUFnTQxAkqh97pNnn9SH5eoa58c4K1mWK6zaVH3mEwKNMyF5MZ8PKQ",
  "key20": "59qdGKkCAR6tKktmUe7iUdxg9B6ZrNx76vV3Qfmd1gxu48nx4xGKUKrWPsxtJbmEJ4BK9oVSw8ixweUWxxFTuHGi",
  "key21": "44AL3mnjQodCSxreg5p54QoX5nCtwcqtf3tHjUtxf6TAG7bkz8z2unZUZk6oYZsCodZKM3SzxAzr6kup1ofPbqTm",
  "key22": "5ZZpQbMfsxCTfXAgSyAykcK68576yFmmms1MjtsRF5gNKRiBJBvfwp4vDR6Jk6BfWoapNdqegTZhSWukuQNK31HJ",
  "key23": "2yNdPZ5HpdX9RonXquAdA9hNHvqhRVaKzwcyNZ9pVfe8VCPdebY8YbPjQohEkAMms5DeXgBnzBgVYNkV2Ld1byix",
  "key24": "2RswdVuv5EWCmMuomVx3BAQP6eEeiQe49DJ2d9Kz9kAm6em4oJepsWxhiU3y1xwnaSEwdsAJwRgKTpeu8Ug4KFkx",
  "key25": "3yJMYbs96D7PJ4jEocUQr5sKzhDQV9VKmSwU7Gx6dgv4hw8cKhBeBufakazKkFpc1CzGizfZf7ZcsxFssrLo8Zt5",
  "key26": "XEdmueCdSeuPiqXWYSFx6zWCckx4m1o7CpWGvyLJcPCVttop9gpS5vka85ZjNqP7xG7FwnbztTcjPiCe2J1NEqU",
  "key27": "52fNpicP4L8hsWY4tFMpVgokcJosdaY2exYsGWvKFPHoCRMGfitoSTKq2JjvGR9YXDbJxLgPtgXnY2RrdHkSpoeH",
  "key28": "4u6SYXEmo1Gsut7GjyKA8MkPva4TbyLS6Aztt3qvn4v9bo5vj7bVqoZTM8GiPyhuWr7qesZkEMmvEaApDy3Ygpus",
  "key29": "5PUz5NPSc95TXjY2LXHWNr4dH9QrwAWrrBAoiwtfcDLbKsZZBrdpqgJvy2dFDY9k3Lisr9X1NimMCdtWyBo4qemw",
  "key30": "52mnkbdccXFVkRwRyEQjJAS6hUkrWXY1NYrcaWJjjHkgfY5WPn2PQpdyGxV9F23dQJ1sFRCZKoJfYXRAgyw2X855",
  "key31": "5XVNu9fmPz6UwbWjCxuC8TMaWgwFEtkBthf4UvuwdpSKKmeRvDPoNCBnoiT7AyCyMT1VHVPXzEn9FEHqEL92QFCP",
  "key32": "31nNzcxyoQknzgDUbkDT5HyAUprHurjqyT7T9otVDYMWqWV33mVpWbUwh95Y9R4CebUbNvcopBP2VLd5rogbFo1E",
  "key33": "596FWkiBq8nnnq484cfYhfKARBC2P7LnjZiW1ryWPEUSGM6yZoWyJ3aS6JPBrw7hxriuXhMoywG5bEtaifKT7uET",
  "key34": "5ZqoTKRAzysjaawR5FQqKBTzBSZJQ7EAPzuQ4qNLpUkMWmdkxpewMbhUMuMvik5gySVw7zXyznsfgps3wL4ER16t",
  "key35": "2hUKSUCSWFzzxF4mscfauSTkERcoekpibofuWv7CG6U3E5DqHC8RTLTXgoCyzdrFeMfYpNfuUwCLGd2d6Ce877gQ",
  "key36": "42BGnAu4kryLVFLxkBRTJT66vPQvsxaANEaihdKxDESBy98VSvyoszzxfRiG7ZbWdYYQwDhk5kFXgFJkvovxxku",
  "key37": "x3cCEf4wheBnszLRbycRPgUtSFDJbWhE38S49mKe28K3zyRWVSi1hN957rTraKXbrHScmNZpgBMDmiyGYhpvRz9",
  "key38": "654oYBh2uWebvcGF26jj5ZP99y2Yyn9SNsReN3P1uGoUVqia4mzLAzSV68XGUN2QSocEGKJZSEfB2BGMjfLx5vn8",
  "key39": "FShHb5pTxwmcow8KgpbmF4bYTo8HQEoxkgJXnHpvBNc5pQw7zkpkQrbMVR1vrnXbAMJNBsCVoj2NaJQmSM3pSi9",
  "key40": "3NRWU4azpWrWnoddupyyDiV8G9Wq4ggB3akG8pJtumn8ANJkTdE2cVoqDeM3ue3AW7csspCU899zTJHcjBmLUzS",
  "key41": "3t6TnUNn1B5hzGRaoMHZKF691BckyWaKEsyrQAurPQiHCw57cxxjJj6udmeErbcaxtNGWF59cm4Ar4W6BnFrQfgd"
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
