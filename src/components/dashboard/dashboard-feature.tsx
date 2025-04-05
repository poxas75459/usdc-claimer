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
    "5qChWeJoHJaJowxNen4DYom3j2GpZpjJYVb9LZqjAVsGXGVV2rsiL39PqBBTxBKApu6BgpyYZwEih6pTU8tKTFLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TcRTwAk8sakpdaekpaBJiPDEMkxMFsMbVKtn7wSB6Lt2GRNBP6gM1pDXY64aQT9D6MK59MBMi9rA4foo8TtX8n",
  "key1": "3Jch2DaEgqwZSP8s4utALw1xciLbV4wHaVBt85rvDJAn8vikgiCergKrNAC5bY1DLwpqg7or3CVp4WW3S8Fa8vu7",
  "key2": "5zVHc6rJmzd59TqqB7gxzpgaJqQBH651FZguToVyAxbrBKn2BZXWBvvxcLXUYUUrVVmYxC67FxC6wzJXt54tMuSV",
  "key3": "52B9SUfM6hEAtHC5Y7UVVngaof1F22v88QEnoL8En7m3FT74F1Qk7Gxh9XUrRV2g2R4ZKETxzskR4D3UcJifD2LD",
  "key4": "4pV39zAvMECSqc1fwheeDLrCx4a6e7z4Tc7CrYrANYvuknN7EcZZcScK3jBwTcpqsApKrZQ3GCJsP8AjaqHBSoNq",
  "key5": "cEkDkGt1zZR3RK62WbpEBLvrze55YdimpbsiASZCs3QaLuDP1Y7T2j6RuXPF7sNcYGvtqtGvzitKQR4v8tJkA77",
  "key6": "5DamhbHxKw9119tAbVNGg4M7eFGqSQTu3L51taxt7JJyib8u41HqWfVLF8HdWqBPLGMorvWTkJcdmccQmLaDborF",
  "key7": "5dFYdHKGsorY1n8by9GBQ8Gp8SCjmaTvndUZQYzZrJVYKxXjXC5qPthCqhpgC7BVdNDpwZ377GaPya1rU23uuQiA",
  "key8": "3V1Cwv4Dgi7irxZQZ7XzWyRTZmMQeMh8N8Q7t4cnrXceHXoUoG65DwW4nmWd5RmncNvL6RCTX9mXxqaJ2XxWaUMn",
  "key9": "2D9WV9RKMr1WZ2Zn6Ps6bkho8JoLE4bvJ32WvLdwi5RqR1ff9WU8CXtZ3FV5Y47ea8JzexteZe956Y7aeeUD3j4g",
  "key10": "2npQKYFMoTg8KTgHwdskEwneC8zdjPMiK6GLDq4sdP82fUAWrg8RdJWJf1kxWFEm6eCCTzq25Be2u5yGuZ57kvKv",
  "key11": "5BRMFVfR2kWgCF55ncwssLW4YJNHTXMKc69FNR4Fs3W1iTidFvm4a9gDTfr86mw8UfAZGffjt1fUsY8JnZ1j2UXx",
  "key12": "5Cs8Qnd1rww2FYTGME8jbax8SN71qXWBSnKMkaARMqqYYKvHzf6TWyik9knz7YSa7k9QCEWGcA7eLnfKsFW7ajPs",
  "key13": "55xxTVdSyDgkergfb2AQw8XKt1WiY7sm2mAzYiZGVCFe8MWMzRWTg93UBJDkhXzFN9T7gS5q7RmBoqxoS2Y5zM6",
  "key14": "XgpPMVspoCmAPGvMUp8vHTpb65TBbEzfrAAjFoMWh8SKHaFsA9NBttAEmxBTGEBtRmukR1h65inAAcS6T43wDEF",
  "key15": "51RLUitqRgBLb9LBCiF78t21XjBtstkpLuHAR7ZU1dc1UF7VDiTTk9acqii7W6Ugs9fndc6A3iGRLEz7ZS5EuwUA",
  "key16": "Vp5gm1b5fc4XpMALM4ZWzB812MpUZMm9ebjb6eDzjHTYNY6sVYocAVLKxix5Zy8SMp9CPxMkNaqR1MZMNnEExpf",
  "key17": "2kjKQbnC6T2gkGgMrmsarjg1m7j84njUbQCzdAKtueZ7aZJ1UTvn5KpAhsRwBSyVH6kd3KCehKVwBzzszYiKAaRJ",
  "key18": "hERaCssF6DrykBx5wzym9nACZGvALjjF9PUMLJchF9E28nidqPTdQCvdEhf59M2Ks7g3a74S53xmRdUjhbmEPdY",
  "key19": "3W65iQhn1MZ1EsVTnNwngVNeD2sU8rofQpgRDzgpu6xfAsC75Mc62vmxNkLLmTaXGJY2E2PesDhAjsBVKDGKKmbK",
  "key20": "4JKASJsV3AmURzZJBC1X3W2rXddzBNchd4WFiB4gkxvWg29LCnoAF7rpPNr8edsS2fGNNvgxoGDYPg8vNWY6KPTZ",
  "key21": "3F88BGruxwaX94nkZXG8AEBHbf4wuGzTFAmcnE8dWs82nh116sqwiHTbzBAWHYzecv3xATYhwokno6sswkWJcaTt",
  "key22": "3fw92QQhai2QkNEc2b7hbsYsmFvRoVfEXVpB4hMmy9NcQazAD4Ya8HxVegVjA87DpqVwDLCM2YioMC6T2CKhRJnM",
  "key23": "2C1JYCVxsDzd5eKXuNgphAynsQ9jdPqWEJCQrpzY6E7SpPDmRuH8JfNKwzD2C8Ff34Yhg28ESoqrucKfuAWZYQet",
  "key24": "SQwU7jfKoAhmmdw16TzfUJzmE77uzgjRENnswTn2QHAJHYCDik8hV7pBbzvuuK9mMYh8QVuW8J72cCtuwMdpFuW",
  "key25": "3dedsgANaqtXBMui69mjHWtqbpDpPWoAeQYVPXGuRmnfGaXtWyCHa3sWG9wVzZY8NMUjm8czLqy3wgci1kgkyAHk",
  "key26": "3j249WMfMswgoeFSabLpKqsKyZDwqrkvsfKzqnSmYVqpDPGr5ZJfN2rqA54KoohMge19DePGiJzQeQs6Wows3rHS",
  "key27": "28J73jUBPXXiheH3kAadjEEYkfWA6qu2UFcKmdDKc2mXvyrD89GgT2AEhjEo1YN6De4Ko9eQX2ahFeJUZ1psGZsZ",
  "key28": "2gT7Yc9zepq29qRS6fd8N8ZTNJNmGYYZqG3VnPLpy93a7bUebG6EqyxyeJD5M1nCSY78pw2mo3nK8ULqPDjNi8Va",
  "key29": "2fDJxPhjr1fdxXY5DRPFnAtcU5uQShR331CPtvSGDNuBpcyr8eg3SPRhGRoFKwPSSwKWBHfWRNJyyxiHyXd9DU9U",
  "key30": "2khUtJ3oYAjrqbcs9Wr3SyhLcA2hiaSqegfE2dhHGtD63ccBU8SKTyHsDGHuyWaUFmoHFystfUQoiZub3JKqv1v4",
  "key31": "2JvWCdV9EXXbgVWxC9wyqV4s2uYeppEyDC2gnGme3NVY4Fo6xYqULKf8Er5YtQzPWcP3wLmQmxCWaABTBQjYRjRk",
  "key32": "5aEtDDgURMskEAArqKgVimZDpwGKWeMZ3Vgs2hCUoWorD4v4N3JXopfAppW83F1q1Qg3pvBpEQwAT4nfN1Cf9HaQ",
  "key33": "48pqCF4QRfC62wRgCzXS2FH1dSGnXmZQiqHk1pUU99xfTRTLP3rGyi5X3zGx4LT27axYB9D3kAZRC5n5tPyTxrGs",
  "key34": "5vNfiWDFEJYyL2Yqe1n3g9iaRMefqgo2sDxozbgdLjZZeptWVKXdHUkLvgwaZMjX6j3w9BX9b9MwfrSyphVxwzJB"
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
