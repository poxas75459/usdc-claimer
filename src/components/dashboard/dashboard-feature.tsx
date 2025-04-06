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
    "3Zuw4PAJf4UP4h4ApkAmziCfiv19Ns2wFSWMR4RNsgb7LjtM2sx4d7yi48VXDwq1pyJfsnZWNjGAy4eFD5d3z8sb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fZXXLcNAuztRR9YN7f8gex1U9tXsZ7VimTjMAKfhN8VcmZ8SMwb3w77v2i629m6wv16TSyzsPzZCBppyFSF9X74",
  "key1": "br8pCBtwf7XYHe26JZwJYwJrzJqGQBW75hJrc3oh97isLYPdN9G76V1BwrbqVA6a2RUkhYQbLMKyzuz1vHDUWYT",
  "key2": "5BF8Sd9rwnc22wGwQkV6GoBasQndUR4bBwoeDN1j1p7gZgHmDjYHtrbmtLHyh46L1Zma2YrB6busDRSNKAwB7FVJ",
  "key3": "4jtJkzEPYfkvMhrYUWsgYNt8EX5XdSz9yS8uF2YgyuRW1n8Gb9q43wk8Ht1uWEJrNJYc11FoDvitELEsJTgD3TUy",
  "key4": "2J8KWZDWVb2oKdK8zXuJGDpWqGiPnLA17p9ZYj2ucpZjdkAxckzthUVNsvPiKFzV5B8MbA3kQgYZSQJodCJQhnfc",
  "key5": "3qsN3tJ3Etu3EZXPNPxSEKMVBAL8KqrFhdeCreS9fgqbxenBARgfzqvaD76A7MLZJgYmw8FQtbSzXNxCvP5vb64Y",
  "key6": "5szURW6yrQCywQhs6oHF2y9W8ABu3gC74oPBp6xsRaMwB6Bk1w9uKboLKqjVCBpA4X6bZ2KrNhzKgYewqnNEGZWb",
  "key7": "5qAEc26KWcFACX7JBJyiJRWHFdAoetWBHeEkDcdmsDiFHPgCSzk3XzxpE2u7V9A7u2ybw3HxxZahbiqRjM9PWJw",
  "key8": "5bxJiGjQx3uWagPiWXeP8Us53JXnZhx61VUx4dWhwxZ2xTGkL8gQ4n1FePTu7hCNxpMMmNJo8mPBQaBLSNFr17XJ",
  "key9": "5ApdsE644BtvdU8HHG69fCfDxEhUjZvQWUHEWvRXPct7hTFbMa7Xziq99f9Tn2RyqJSQjEUwgF2gQ5e5HEi9pZd5",
  "key10": "5dxu2kV6YvWkPd2rrn6nt9g33cgqhKKmnejXtpWQxvjz7aEwKp991fGqgXj2T7yQ66n6wzxcLkDzL4m2zVMS3u1e",
  "key11": "5kJrtfTYB2BtZQTw6LwveyZN7Xrki9rRTGPhTc9nr1NChdFdgmGR73TpJwEKSQtWm4iesvSeL13nguWsgBiM3buN",
  "key12": "75Zyzycj1J89Md5yS4xx11gy51UKtFBwtwooTn4q48v5WK4jzvwANoDaNgNVotmwdsqN1k8Jdc1DjELGTffZDHq",
  "key13": "5JVNHQsk2sSDZxMBkEahkJT24Ai5cDjXaRJ2DV3vR25p69dbkTmCS5zavUK6fEwwysPRiaLsmJoSaU8YjRQw2iEu",
  "key14": "32R1knYrtr5udohJQtMUw3k17ZGqSxJdLTbbYujTiDvg9emxL7VPuSVy7qLUyugzoL8uHaVUr9kQCVTGZYgdhwRu",
  "key15": "4fv2RyvMN6rbG7aPmiTPsPjxbEFc8vGcaLDP2z3qRT4idZLLjm3J4Tn3PhqKdVbNLxQo2jd4DdrNxA4WWoZZmgc1",
  "key16": "qMd55dkRffp9ZR5bYm2zNF1EVDy68SjhoSJEPz6kQQf3EYVpLyPNhBH1PvNjY6Z7G6xiUDdH1bSoaWgA3KLciw5",
  "key17": "3f1bde7L8KZwLraJhJtT6Nd5uD8eW2cWQwzafMJ3E2szdyCzu4qD3Y4ZFvCZ9cCvRkjfCsX4TChMa2DYbqM5hFK5",
  "key18": "4cH82L7T2FrXm2ZDdFUyZmmm9dHTZUYCv5nqjihFWeuBt337r9P9pSiDe3rmXjA3ZfNoKsd3yf7RqFcttTMZB6Kr",
  "key19": "QiTySGL2AmLoXxNXXABjmLWQvhx2j8wXehMhQKedLcoqvgTD8QQSJzu1dZKuT81p5n3TcdtUfkY3pK8yCBxiEDq",
  "key20": "5aZAPJpcnmQiX1nJA78Bev35wzS64JKbVta55pCwu6J1ykppnRqrBxAc9nGyydz5wnadMDtqqz3sJxBQGmagexGh",
  "key21": "4cuZMGeqUu6USf8TaQzR2DgiNhXrNHQ543V7skbS9L5WVjTi2t2aC7LC999wyR7sYsBBesE2cVUVN26oxeniTBa",
  "key22": "33dZw18jD6SQqEERikK4ndTCLYZ8e4WHwfcwm1EG613GD6Ztjr971f5bwGBkFZ4YjHbcPVma2RgP7CxB945Lg9E8",
  "key23": "5JxNbiTVqtgPg6mNEC4CuDuuEssrt8sF24Voi4rZQZkwSarUdnJBMvXxC7FCXrCvt3tDqXnSSVtS3su6Mgg8gGcP",
  "key24": "5vksYsnPhy3yNHUr8fJXxNDJBikdMqzC9A4ics4UijT5BndXe3aVwXRgmDnVtr2BqH4TsjCLDr9HVo6EotWPqbCr",
  "key25": "RE2fjZ43PZ6nMWdWKmT1eff1aTsY7ea88Yx2TARDSF6U6GcGavFXwVv7Me87M75EuBySamPxQe9cUGoYL4xsbwz",
  "key26": "3tfX11j79gLCTcXzW8mGP9Hj2Htm8VtAR4YocmkQAaNMLaRGc3qzSHZ2U26PNHinHk2xrk9oo48HegByUMJsKi3H"
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
