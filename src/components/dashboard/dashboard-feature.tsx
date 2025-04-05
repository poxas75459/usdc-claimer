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
    "5qYDjQyaxUyq1veBjaT4gRdDeugf3y8Sm8verLjAP6kCxUSzDX6KfLvXCbWc5oU5KDHhsnTHVYpYPsYfE4NGssyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h8Xj2UfMGCbphgmPgwTZdsTXk7N73zSA2xGiQ4GugUqdTL5jhwAe1W7WtFuXrpKUSRafFHUwZHDpjmriRfq8JSU",
  "key1": "4h4RZNxggrCFXm3kdMkSGmLd3JFrnDgr71KTtT78YokxaECiU5Qqe5S1YJJFhfq1F9sZ2y8FW9esUJqcq9Jvo6Wi",
  "key2": "2d56SbJAf7Vit2B9SgipEcGMuHm46dr4ArrZPASnq2fEbgc3iMxHgGKSeCfEiN4foZPbVnvUjoRgNkYC5YyKWRTD",
  "key3": "4nSVCoMKfYxpnhzx21rRV5CsPV5JzXqiNMMXbYjArEPTMF7CzEiTUDAHobjcrNhTAvV57AyxxTpriMr3DZBsqQXp",
  "key4": "2f3hXTLBG9RTqx1T5ScyJ4zuURdRU4Co5LwvcqaYaHhMAUxrmoPecHrfSHAZCPd5YApe7TWRdeNsQqkjeLbchrXi",
  "key5": "35YniMAkWZaUtvLgHF7W1Vmfi3qBMXMs4Kegf9us68VzUo1f23yJy3iSw3ryFBhEfFGwdefYuJrjkNsyGPyrSaWB",
  "key6": "2MoL96mtmUiUqpKiKayXAZjBkZQwd9uVHrGR2WzzzNqghptfUi8Z3RSapZPJW7yZ1VTC6sq16XexyeR1XgLnYFG2",
  "key7": "2xFxA2VJTQ6YMrULUmNhMWPzkCEGj5oxQ53FjVqKkd46njXUPbweryDCrnS5tAgLgdAH2qQwD6x7dP3umFJtCWik",
  "key8": "2DGSc2C7pLKMgw9ohnp47GbQbSioE7tKQwNecsnP3rkypW2nWQZiMhoMYMGr9xyHyeFMRrgMLsnQCYkPvT6i8fHU",
  "key9": "38FbEsXtQmrWMCQF1TyWAjKkCdu3rvm5goyqFf6Un4uRDnMhWY6imNyuErU3Vm69umw66NPSjxdbho81fnotg6EU",
  "key10": "4Wz8w165sQigVngd7E68EWs4Zi9JpaMW4tx1NSWLUze5znfsd6SdT7RvZDrRAHaF8eM8NnmMnbZURDW71peKxihi",
  "key11": "3PZ3mV6Tz58J4xmmzEKgsmiNZqyE1MR8DTFU1ackVMUUvd3yD6XgwS9v1vYWfcZhGRDPegGWD4as4aRZZrE5xoVU",
  "key12": "5C4vt5Uc4Nr2LTmuvAHHXrSr6UHFsKUgScVTz2u9cNrcDVuwTCrDTJTQSkzCvHPGCZdNwD2dnWmDxnL2M5prEGvv",
  "key13": "47TogseAnQfEVVy2Qb6PKuxFEck6Jos3dLHTraVLwbXEPDjCdKVznNQRveG94tmYDHpn1Zp92YkvVQJZs1xWib3d",
  "key14": "3S9aDFYHcGRNChT9tJQoNpp4D8UMRjfmrEZf7FtXE47k89wUcGVc6oxJqPFZUmWV7EFbjvqbGss36U5CkvyHvWUo",
  "key15": "2BWBzWFYZWfCbg7dqRhzQa4q1Hyojyqw71kBen1xHh3HNoPJqVuZQ58AzBgd3Jt6f75ccTSxAq9UQSjhu8oxDDqT",
  "key16": "9HkE4rGe6VHpDmBgSfH4ZaoAdFJgF8yE4chtP2xh6B9ZKjvoRr7vvPD9FcX5vbcEHVnNubRZErwVzwQB5jHPSJi",
  "key17": "3CQ9DpmrAt6bSudponktd7EC8VFyyNrM4MYGgfpdpA8WnzVSLRjFsw1CJtnimkumGpF18XnPDDYmEfixrA6udH2W",
  "key18": "38mLEn4PBHo2oSxEvhyKCAfFg14C9Mh7NQvbuoiyVFQHCYLa7CwiRNgF6TS4zEp6TUbUgmaE8fyikkLwz1QqewbP",
  "key19": "4UE1Ff1gpf4dL4GRCUYNyZKwXQvpDm37R1fv4N4m9pvgdeTXwHoUpBMf3AjUjUArm8Lzij8576ZwxKnvNuBpZ9Zk",
  "key20": "4n5UWwNwH41z2u5Y8Gj2RJ73TtBSDaX6hg68vFSF2bkJBu8TgRREBDzMwixBQH5atnNRrDH4vzGAgkk4qAVwomwv",
  "key21": "4AheUpZhdidf9DeFsmUgjoimLaEVazMQaMTdBK6HJPVsXgHucQdUWqFEKtW4bAoXZVL3fkGXZBmYUooK73Zuzreq",
  "key22": "3SY6MyGULvQvEbxpQEEe5v3SXVVGV6CicvJQ27X8wN9Pq3oDJbLNtCxRAG8b1jeLkmNgouWczjqsqZxwqvCNwGZw",
  "key23": "54MjCyv4DU6kCaTVb43B31jsC8uyWxEcoN5EBDToaFHQvo1kHX5h35xFRd4PDtuwTJuTSAosou8mT7Hqskhdr8Uw",
  "key24": "2xyM1ekwCaCVh8uesHWKRg96bej4LSffvRokHgTFALiSXmXMrFP4VhMku3aT8cNomnNzsa7uhKvvSX8oXY9SHdY8",
  "key25": "5crBWYtsdvGhyYcQYDn9gEiDokRKLePpgh2RGmXQf8MVrPU8PskughdrjVFBk8PGC5DNhhvSaNF7xiup75hZNWqQ",
  "key26": "26MmmhCw4PqzUzaq6718L4GG2bCPJvHWiMfjPKf9SnGUvpUpfseznwGwZQsASR8FkG6hQXyJydgTWc7hPdZ75H7M",
  "key27": "2ZDbzPM8fqFrHKBm5ZzMMDn4Pp4SKffite7XvBAWZDATDVzJjcHxeEnW8pyJAScZmMnmVYGbsq2iL4nZJMhKnmj9",
  "key28": "GvkS3yjGGmPUjYsaQWiVa4XnTHGcYNnC6jLoa1cCPFpgaH2FvXKhxSDNG4XxK9hJfw2hNzB8KzWeYYy5AZXxQqb",
  "key29": "37PXhrYD8fss7T3SxqxXZRcWb7sm9NCU2Fdj5DYecje3cyE1bfxPDPahpqj8zpAnyH4CRzqA38vT5KMLpizAncSz",
  "key30": "5hTrRRjdRDD3n1hUe5FSzRYA5EBNA2vUC6yMDGgTeq53zJYg5yhH6Du5TmRNAFmB21dSUSX2ks3E1tQXSCdeaxmJ",
  "key31": "3arbpUj45wPs7kn244qTGqHASfPXUk94yEw9zphDgsPV5Z9hcgvJGkwAeCUuZ3H5P1TmVzhzRYP1uCpEBh9anoUh",
  "key32": "4kGP1qDEgiQDJw6uRa8cLLJ8F1UWBzy9F9SoARewpdzNbSF4wMe3y3ru9Gx4tX9tZcyWpVP6Mii6gdZX6cLpUTSx",
  "key33": "edybW1FyyeBQVW6Rnmpci8oEDYoMwqxeUAwE67izLgVvFJcBaH5YXNLRu8Jko56ie6sknzWWSiEMP3aCayTsvu1",
  "key34": "22i6f24akjMMhcA7x1XyjhqGixqHSTSaPn2Pa3WbSGN3YFA3Q7q44s6ywCDiYvpgx4693C4vtdYKKDA37j55nZkk",
  "key35": "2HsrDs22xKc5WB9ZK77YfCXw8taMvKd6iafvT6HFbDMHZYpcwRzNag4mwW7LvHpdzuts6Q7TvBQ17K3cLvXZqBrf",
  "key36": "5fU4V7vBmi9fBy24uBg1N6USQVXif5e2aDAFjRbNQyv8ZvyPtzZqsnhM1c77zxCcMefb7BxCN4Cak5DPsUcox8ru",
  "key37": "3EWf7RWWn52729Jy4Li6urrcR81cEgQYxE37PjQtMZ7Q4sAuExJ2yvKzhha6WxcmUcMvuN62thjrhUyj1eckV11E",
  "key38": "5joFh5omeRYbUjtvrUKuCssAEDiixNWpLs7e3fYs93CMVf7AshfkTE3Ue4m6Nrd4sWCR3wxKTwSuGvwH2L69MkCM",
  "key39": "63gXB45LiArcL4RPhNGV39Dsbqx2aZS3aWWEdwfB3RyVGJwEhLWDdq318JZjv71RTBaMW1Y8QrBrPsAmcNh8G3tY",
  "key40": "4nmzEegcU9k1gxD9FNP9AE7bqjazK243fvqs5KCyha2FS68Ne3R4xYpkFE2Ny88JiaGohgsTfE88oEJcfaYDHBm1",
  "key41": "2aVDUrPD2VydGDLpfggQUXqHPYZSsXKkzbLaeMpSEmSDjFQyMgxrvwSNEnQpRcj4aThB5hY7kkxdzKmKFBUkWZPV",
  "key42": "29VbP7A4DQNYMmkNRXf8W6NrPZzs1M4qsb8UgzTpHC3Y9L2a4Wz4BDg2vtwfUyEXz2UaCtxqHnHNqqKdKwxjbVt1",
  "key43": "635uuDcKtAH7wbikna8E3do6U3uTprfvPjr7Tsyhh7hnUp9MWfGASwGNwodHBc8HXgWXEUh6ZgH745hpsNM9MWow",
  "key44": "5vUsr9P8pcjxYSTUKxPxyp9dh2LeLHLPEDoXJZaP5TrkJqyXsXLgTxbBSiLb3Xr7RC3FcTfYZj7HHGNFhDASgUo4",
  "key45": "4FfkFKgao9nGNUbH1CUrZyfWouRZp5GC9wfeZhBPksqJq9oiKKxbwk3CxKM2gQWHfEA11WTs921Vt2bYpioLaXxk",
  "key46": "62z7SqsgRPpLGmT5qwtygJZnXAZH9KR9key7Lat7EXABTtpxEWNsn2gFhmcwR5WNT7395hKd94tgpatGiQt2wUpn"
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
