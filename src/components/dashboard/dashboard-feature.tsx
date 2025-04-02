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
    "4PrfsfNeUdeXa85QAKbLzPdsivCKK7quFexJvVBFtZizNq7xv1peRXkwj14C4TLAvkRmsnLNaYFkogs6pLHvZoFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ziAwzLGZmjXys4D2BqctN4SsgszAVP4QrmJa5uVzmJxAvC7ugL4XQNoQBM4zBPu8AwaWahbJCj2NonDeFngqxc",
  "key1": "5Z4V3hQgcuvYnamgioM25EnQCyXLG4BwqHtVQXnS8XtcqGYFGcrj9ADevHfYk47jrHozUfev1VkhN4keNPPuV6mp",
  "key2": "NzGPxCjE7A72bYFLCDQcoJo2B7cRNEFZQe4ZhnkLYieFhg2x7LPtvGUYhYTRbTGaYGcgj8sFFZx7kPropq2TasZ",
  "key3": "5y9k2bcDciq2NdjVdvoLa7LRERNkzEkkrmNm3auPzLaCQH6hC1pg1iXinxNgdPe3CWAqyC5HuuF5Jr2h6rvvwtGQ",
  "key4": "4QGCposP6bWQ9T3UotMi231N8VeyZ4d5ZzU54a1EPYRSL22Gb9wP1hNc4hhmF71W71SrDMb7J9ZKVBjWWwEJ8hTW",
  "key5": "NTEtzJzWYXf2bUe4GmrngcEK6YPuJ5ssJYsQsfW7PArn1S3eoAk4b1vKe7dJ1uMxXYZgvqh371J3YascYVKkcoD",
  "key6": "MsZnvfudHqRZoHAQQWKycR8x7RUUvQdf2s9QXjg4rWgpvXNgBacfGicUiAut5jw5rcKkPiySWuADgUmqbWCAd7Y",
  "key7": "3ejRz4VaxwdVCpCVxjTj7ZBmRN9S1RAmseaciT6HtL3zViubhGTmFhT7UmeeNSpXePLXC1a2E43UoCcnDSwjWy8n",
  "key8": "4ZGRDtknVgoDQrjnEGwP66nf52oPnRGJXj69HditXKN4w34XM8bnxkBourZPLtq7Cn4uLGhv58nVozAuskwBndY4",
  "key9": "3P4HSnMrZwKppxeidDqyxEmKWZLBniAWidn6a5Ub19WxRwxxUZe6c6mwqwgLxZanb7E8jaXi97woHSDmby1KVBfe",
  "key10": "4pBwYHGBb39eEeWVERnrmqroKZibhdxUr5pzmwwxt4PCqaj86Nspewjckj9RSWXPB4gjGPWF5grAuFoX1FdxdfoV",
  "key11": "251tNgzLL3P8CSHQay5JUFJMwfX1zLFtwpYb78TwUPqvMrYtHkrF4GKQU2wUPsA64qvLPGuBcSzyjLChySmEaycW",
  "key12": "4AuiCAEV17gZ9u3PTUzHaLKQdubu6K31AB9Zt39X7MKEzn5MJBbocVV9JAWBhxsX5XDUgC9p8gZRUQ9P9dFmFiK5",
  "key13": "kDfHGtvHb4WJC5C7ymgpys8fUmczK6E5CfAhSpdD9b7rUPxjZkFgyQjQh22ptnE7mwNVdgJKqBfZ7XPwD5wJZGp",
  "key14": "5x93NRxbfursqroWGB9bcRtgLNiZoELY1HwsZayKECCVP7C91pE9vzUJxPqkPELzdhEgWkKxZ37AGVjsTEk47qN5",
  "key15": "2FVUHooxM1d6MDC3pTnssdd4NPQKUU4bykZjc9e6J2Zw4btbqowzgwtH8emowzL5hTJCfqHcLoKRM1NLgTaerZJm",
  "key16": "2eZmuV89k8tqo1euMLEgf6gTd8vEtxWFsDXfmVgerzaH3nxRYVsgTBAmFLif6T8TPaSEPD9aaJ4Cjp6o4UEb4Ao6",
  "key17": "4aQQ7YX8cUGvo2H6hJigfd7S9v7jYQXUfQMxEBuUHK7YbqAzKXzEmQ7UGRfc93wpYCtYGK4Ttsdm3rygfLSpSbxo",
  "key18": "53LGZFWWnD2xDPpqKRVS3112eZSAkKB9wVrDRwAMkNKVZZ5Z4W8axJoZkiJLL3udqNJpztQoVzgSUdhVKWo586PJ",
  "key19": "2zjhCZiKdmfUmuNiNKiWABzGcbAkwnJ58b445CZN5K4Pg6UEQdVC62XdmMRfpzoN9UNh3Sj8hEtdK7P2xN84iL4a",
  "key20": "65Gvn3NdqpeMnGaqMHFrqspZHXkKDsHDp6fyB3HYAMQHPk1CSeeUzkhLYBKJHSVvqdEPQVGvwpYmiHZCRif9zirZ",
  "key21": "XoJzFbYTMVW1HN2DUnRE1SrS8WTUK2XYsL2SGifhkVzZnVCF2C7ASsg1NapiBPqXjUhGzKNih3WCyHjDE11oBXV",
  "key22": "3hwoFscwXQY45MUjpTrCTNKHREqDSnNxuk58VN5D7e3d3M2g4R14p5yJe5grQAYabpWgqEMooYgqBtyybEbboNqS",
  "key23": "4kem5bFtysFXMVkwgcr6pXLsQC8Qz53MeLhyeR9yAaYzLaK94tP6noqbSwtvedMiQmxcYgkXdYjFqYGmpHA3xBE2",
  "key24": "3rTcLKAteKj5qhfV567NFGit5kS8SPX69tB6y8HA7h2wBdfJ2aSUfg3kQ8m3C5W1KwehtqdPaZyY5nubXYFkcmPW",
  "key25": "5RTvYAhQ3TFVZtVZggbKK1efLyv8WDMSbaAxFx685mFchrRRwuxLRqjX2ry1vgonnypgs7CMHkqwohXjCVMSPpmu",
  "key26": "4mHyZ558MFS78wvqSnGQ2YGguqKoeiscHCmNJqS44vvgYigZKM54xKMEsDbSELWHTxXmhU8dzqFQE6dKqev2CypU",
  "key27": "5J1PjXoXdRDddrkmNLo69LVHbekDhDyeMLXZ5WYR2QrMwizDHPQBhrDDbTkcp1Er6APNoJYxyLhKcQyTzamJLBCf",
  "key28": "2F1DjpPnQv8tbqjfPiw8ZQ7pr3p5ZxZvBw5qFyGrBkKjsCU5kfhscc6sm8icCVrHzD3f6a35Lu3TXtWFNyXZyxWB",
  "key29": "5utXcTKVzMBFYnpv9xTEBMhjrMuJvz125t96c3t6Cso93qzDgUWzGXFiJAxXMfb5WRVuvGzB9eTK6QVXETzExZs3",
  "key30": "aD2Jfqo2TXuiBgmGyx6qcyTjXtR9jG2vSVNtqrDyoTPLfEYHRhHXNr4c2tfLxGmCMBfRm4nh1XemPv3qz2sakx5",
  "key31": "YhdVrNdJHasqiJYQh1mxpgUdCoNkuKkTGPLiKUYGkVbgDecZQ7rJ2EsHiv1SAQLHc9cKrMphbU2VVgk48xycH6n",
  "key32": "cB8oi6zhzsxosaCx8d8aRvpNrQfo8f8cV1bsX9cesEx51omW3DqLqFgX8uDnKuk9CADfjmxvAWSEdohZxCgMRaW",
  "key33": "3aQjDeaeznuAh73TzuL7aHgcADvUT2L6ySpkiLgkS7H7ScZjQ9r9ag2BzxT29r2nviHvG3GdHvdWErbrFjKrXaR4",
  "key34": "2PhiUZaCsEzbfUQ9vsSxE4ucv1bDkNDxsPnXcDZoS2AGLGkxU2SCzuZz5SH1JiQJ1kyJ873fvXcezcVBj2kZA6zc",
  "key35": "5E4VEYJ3fqhQUvqHrUtGTPtNt9yi35oqC6LddWqr3LRnmxnTTHwH4PSijSX5yxuqDWB2VqawUHpR8N4ChKf5N4iF",
  "key36": "26ywbTJauKm3Sw2bnD4aLZD9LtFUTuZ9LvXqCAm6ckEdAg964sRzeCqKrMg8G8y4Cc4djGtjkceKU3mM6HjXa15d",
  "key37": "3T9PLVZDLyqYaab8acN7XKZ5cvE2CgyxCjRUNxzoTVpHeAS8sJnSJXehPodUeLtE9HxecVVXhPN7QK5ZJLynsLkm"
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
