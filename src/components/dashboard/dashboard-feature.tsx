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
    "2K7EyWJwc8DXEQ2E3FTuzJ451t92qpWv9JtF7YdKSukCNVk3upq9QJNGzX6uqcpj7MAenmfZ9jyzaGiuMqvxWwr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yPNRhUv5z5ts6SxexYanAeAbGYLoBSN3mJ6ubFW8k5LSuKuRB4d6DD8fxDpjf93PM26oRDXdDSZKu4pr3Y11zJS",
  "key1": "aPcd89he6kCkMg5xhLkbLG4VqAtFJDv7dXTBVxkJgrc52qT9VsyAvWwEwXDdnQQtmxGp6jq2me9W2gRnrRY2hCQ",
  "key2": "37mLSHVKuR59CmXHHZ9YpaqUfUJUg47kS96FPugVsY4YWhDTmzSfWUm8ExTHjd1Tzwk1k1zYvgbt9AfpmZQxeoGt",
  "key3": "2PCR7ypuZu1aVWoKS2753jqJv4uywzwjCYfjVDjWvT83Txa4t64P4YaGAdM67YQFzXwJFGqb7zdu652SCZnY1UhC",
  "key4": "4h7rcEvGb9ZFgiytH2ioSQ22Z8kL8fvMEfXF97UyR9cjSY3uwSyy7Ae3s7GGFpn2tGjDTrg1xrWF6tz6bLJL297j",
  "key5": "4pDJARwE5V61H3Ufa8uKm1r3mDbDumvTtWCWmkJbFJp6p5AmVPt193ebecBnKgct7ppHFvwbq31xxWxerwSwNnRP",
  "key6": "igTKbw4aiw9vLzUEFjy5SqTGLjeBgabLfQs9nS7GDriFqsG4dw4rLoTuFw7UNwoGdtabQGx37b58wQGVfSVND5c",
  "key7": "4oZexFGqUKYFzGpcYXbPdBEKsLTFXdCxgDWq7JSDpAud38navt7Uu6du9E9ew14zj5B2NrsEG1c5ehTkFr2MF2tG",
  "key8": "5s3KWC7U4RXLquubsKUof94qxQ4rqP8dM2tMygG2tMr5BRBGKNPZQBeDU9RUT92ML3gWdPQzwmX3QLKL7zGrvjqE",
  "key9": "2aQYGkf3D4wbBuQWJ41v6V89bnJyCr6geRCmB259AZjdz8NNWDeEQq7DofyHD33P8CiEifncoKjJhKFKVi7m7sNG",
  "key10": "4TWwATH4Yjs4dHYj4MWpByJ7CSFQYVxMRy3xRVHRV645HTirnoNYabYw63TxEwdk8Z6cE2QByEcfdc8t5J1HNBz5",
  "key11": "17fnyeGNmSZWCj1FZjpd4C1qmVuuEqt5pG2bq5mdVxYdMvCJksevquxL5z96KH2huFviYgyveGT31zQoFizA1mp",
  "key12": "27pTiXddDgERaGroCXtzugdUnXNbGLJdwM6wvrdrgmRwu4ox9xQYhP4xrUacqn8aN3WP95aCER2xPxrqGaStKiHY",
  "key13": "3uM1DWEEuS42nVbu6VaGpWtzCog99AJesaupwE25hbZFUkfzFCg1BbA7uBfg1e9aHCjTKBpa13bZfuaxAMMEkXao",
  "key14": "5CU3g5uw2kNoQTCZwAyBjujqpFac3oiFYVGS3abMQWm53hiwkzegWvYDJL6Z1j1D8BCjkvv5DpTTis1MJdjukoyr",
  "key15": "3drqzNg4wcCXBu6t1hMwbEmc7ZuVJZxJEFnN2JU4LqBkPapd9gratUaMrpiqYWykjLN5qXjq5Dyk4St6C3ZDkuYi",
  "key16": "ppT1dhDiUBSKRXyeKFaf57xESoFqHK76oXZQttne6KfEqgDUy6is3mGtKVUqAxvfakobMHiwPNFMvAYTGnFfeaQ",
  "key17": "4GTpQLpEGQxLh7aq8CzdLN3FPKRTwT9DKCbHa5X2aPU4HMggPSvgi7xcizuCqyNkshEdPGvwR7YYjEMNVFXsK2QT",
  "key18": "4FsPaBXQXuLdXK6wu5waH6YzGD9mGyRUyebtWHCRb61updgEgF8PNwNBEE7A3ptVpuJt8kdgtfgUy8udWG8C5CXn",
  "key19": "iNaahXp8LJaoM3FsNm4VSK3SbmAWTYC6gED9rR2g3iY8SZPruD4hbr93CL3ggnUphF5DayFJrWGDaSkAvPVWtRV",
  "key20": "52rfadUHu5UMurfPsPMrUfT6S6iBbZxyLcsMpBYNFQFeMFERkEL7dJPwH9mPwBQkCG6LYcjZFXpQhXMiCe1v6bzy",
  "key21": "7n9FHZqvezpFp5YuSA6qiCEZpPePNBpWaXm1Ca6zng6L9JWEunALkXJvtQa4NDgcPauKprgpXiw3H5ETv5yYfU1",
  "key22": "wUoSZ9AV3aLHi9gPr5Zurw4eJPmNJkhh6U4qsdThT4XMYEwJTnr9Yw7v8F9b4pvf9a6U2uZC5oJoD1qg55qv7bn",
  "key23": "3P8cJC9MsfFSWEt8fxumQrfpZ3bLYYg5xbCJByqemBzTeneLFuGdSqWXXBBuJDd2vAAHSnGKmVuX9nN9HVuRH9zb",
  "key24": "4sCL6TmgbAY9h5UPZb6agCyatUXbxRhUi6dw6ZxTrgavaqFQjWXaW1pBByJb4ETdVP9UJBZebDqNSun2Kx5Nc8p",
  "key25": "5jfUSfmgUC19HfoFs2Meka8wJVqB1mAAxLLko7PCbuhyf4WzAFgVXedMpp2MKMdvfP1qMVQ9t8CmvJvxeRXBVm7E",
  "key26": "2NahbfkVqzgvadbgoTawXH8jE7BDDEd29pxtC4YwYVBhtj2GEXWaLppVwen1nAUDLtZWLXcunhZExUSEgpifQG77",
  "key27": "5cihmDMkQfbV5wUSncrWXcAKXwLU14eyYgh2rX97jKcYA2TZ9toE6pdHBQ2S2fxwBLbJivZaGwnHna6isRGqiMgc",
  "key28": "4DDUzhqVvK8r6Mc3f6KcN8b9zMnG71686NzDGtpu3tPpKzakuDrjXMCaASZUmzpB7VxSQoxxYK2SpSBZYGjgUTym",
  "key29": "5GDJpdyoWntfeN51qFEBuBkZJzRyojsvbFVk4yz2tMybkPxX5jYqhMkzHWBnTFsVdcDudenYkmaPrcVpanwniCaX",
  "key30": "NsAoBsktcSeraSsTJdXWSCJur2GGfUePrC23ZxFiC1Ata9MY4zQoMTivrpobusnth2uYFwTw9yyxHK6meg7o5Jh",
  "key31": "3FkdfwxZpNC1Sqz8BpUKtHgsRcjfw99VzfpxkkQcHSF5AVbFG3wrhu4XMbFR42TGL9vZmnkQhoGj7LMrhBdUMtGV",
  "key32": "Kti4kAFZTtizaeVf8VmJ9cTMV3BUAUn3UdVLwSRSqggCm7iqYL9Z2wSUcKuSfTD3epb6CXmgYZ3DXweDLU8tvte",
  "key33": "2SgGvkeoaGTzLJCaWMF1oR9LuGpDcYCt8KPNa65VRsD7AASKiNhhBZJ2pweg4hrdALyerG4m6iisEW7NB1MZbm1u",
  "key34": "4A8Z2Qqpo9gi2fSUdJb9J17yrCJXfgizBzmeWdB23eQwZydMMCsQX895EtUQVGj1C39dFgUvoQpkg1baaCAug8Gv",
  "key35": "oebcZLVLTBgHmHtM15hQETiqLgTtMqE7shFMbuzq6nEkQQ5GDiC1Sxmsy9NAmeWZWV8vh15dfBw2psCK65r4WbX",
  "key36": "3wJzYMhjsz1Mx7j7XhJSu21tLxkSGGwNZ3yXqQxX53S23uYku2c6YBqYdXUa1sDp7mBbzs9TmeSBpzgrfxhLwG6",
  "key37": "F252LjczUpTAxysgwQ23fxqby1Jx5BVprzVuYMvFmGrrAhKF8WEtyrLBss8Ximkhnt2Mn6AAettWZeEcFY1Lvhd",
  "key38": "2jGwvCqRJm1zxkDG49WvbhuL7x9JwWCKRukpPQkVzvQNsGbnDJBHeturTyKZ7N1CGrK5mD46U2MjvgeZmceusYHg",
  "key39": "5zBS6vjZADD9nAkpm98iVDjtzZWsb7AZM9n9snyKPvndQNBQspsHyortW3JHpqQxNcrNPbaRoyX2fVPLgLm3gZqw",
  "key40": "3Y6L1KTZ9GPLjm1KKztZ9Xq4GviwBDPK29wHC8z2y1zsrEJyQJZnEPRGvfEJAoHdaefkcjYYqa1KzuJ5vQkkR2mp",
  "key41": "44mWZoBVNGC3Di7WGQZQ2BFP41NejX2rKhrArqF4TZeW9131vNvJrE38TfYRyc8gXL7a4RXMKxkKKVnP2dRXLLAH"
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
