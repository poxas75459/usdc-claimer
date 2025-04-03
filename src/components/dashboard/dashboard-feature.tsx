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
    "ypanzE5BfjQs7LuqPxbLFgshVCQ47b5PV9Ha9pgF1QDQ1z8vAGR85GgygUn8kMgTVPV6kVJCszZ5St2nMbbi1pd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zHKvEWq4jCQappMCBFBBBXNJ9q9ixDt1gkB517TvRmaTFTsa6X8cW38u1Fq4MytQMDnRp8Tf5ukxo6tvLEdNgzg",
  "key1": "5v93XtD3D3vypGXX7Y5aZXAFf3y7eL9bPC77cPQ3BTgVXPHVwq9iyvaNS4PwVzPf4Mvvu7pCgsMdeLxeXTZ5nSZx",
  "key2": "5MJat9uE3VpoXomK4aQbNG9c8tRwZLr921FXimDzAxWGJvg1qNzcMgAmjoHUv6rPvqkNw1bfvx5WppxpncLFCWhn",
  "key3": "45qPSH2Px7EPYB6ktbJmEBDofSoLZQgvKaGb6XjQCjSX8398STnDHJxhm7tkSKYQaRW78KhZyZtgtEw7URk3PjaH",
  "key4": "5f1ZrcF3vNDBXZ317HdwHCasRt3pDjv3bP9k8ANbf8JfwXxPoLpaAkABmjUYn6PfCCuS79oGRzuJGXMcUMvar8uv",
  "key5": "5nGESgBNwUUWwy8jDQnaB8Fy1ZAUfyPkF4RksoGC3bBwJgK8HM7XK5d6JZsEcrFFVY3wQFiEavByzat2QyT5n47s",
  "key6": "BcEnFi4GtznqbZn5RwUfg6hkWafDEBgS6fX39BgAoBwWEwhojqFwhdzBE4YepJZLGo8d1GbFLRQpLTCuafaaiVL",
  "key7": "SGrdVdCSGhYhs3ugMVt4PXYM7nEy4ESxCLFD2Q9HwzUZoHmaaGUKtvb91fVv6FgUvPYm4F6HtZ9kpFZEGEVP31H",
  "key8": "59uqv9WF96NaCfyiLy6JfbrBEitbtWe4NbNj2L8GDLdtqf4bE6gXSm3k66QjFN5gtrkaXEotzrDxSEM3R8zG8HCJ",
  "key9": "3L4q4TcQ2i8yXrvNoLLkkCjBPVHijHKKLrbitqEgm4nJRmGagasmCKLvnwWSAQBTWTsUMXtuYkXAtLWa6rYHJw7n",
  "key10": "5rFJNXaP7QQTCDENu4FEr46caKpLJ8b6ziQqadbSFVKy1Eu1EfGYt7AN7hJRgeWgF8KF7Kx9pYNfCoTkrXskCWD9",
  "key11": "5nkU2wDviyLv3jGA5bsowaRHmqeczfeAFTTc2mDR8x4JsEBExBDELK39jWzr6GCcWadFjAH4X2FJRn69dGqiRRet",
  "key12": "5g7EkLEvw8s75BuS9evCwZkGNxiyWYXKcQaEMiS5cZaxdQaFss5rYcwWi27vk2BWSXgfaoSvpBMKC3mczppvtjXL",
  "key13": "NCHB1TL3VQ5mT6TTHuVWtKHV8Y1drTUPcsto2qucvtThLJAdNMi8rDPj3v4SbdkfKusLm5b4NUvZra7WVAQqbGt",
  "key14": "3goWxLjiDwAsUs5GXWR7YMvDpn8WqAZopwkYwaPEMEASpdUjaeHrogiFXkG7Hx1vdevgrJm7m2c2K34MNihqDyGJ",
  "key15": "62yYNv18GZGzRCjek53sGyZuof8oHmAB6Qacq3Euxxe5mFxaeFZ8scnhZzbmtM9CHNYJCqFavDpsLUSWX6BJ8wEp",
  "key16": "3AT4sJUNQnQNKFgdM94i2PzqqzYjYCrDBAEKTYmWyCRZdaQDSHsWc5sXwH29pwMbugXK7X2odNQF9xJEc1hrZisj",
  "key17": "3uVzg1R9ZyMpaSUbENB12TTSStyvE4c5iWrfcLqMw2nLtqxyzUcbEGrZVMNpbb4QbiVzNc7pH9rXaiXUJXwQjjnp",
  "key18": "5rMgjE6n7Mj7S1mFzG7nfKBRkZoFQoQ2GFkaZEAXhcPHdKBBQR5xnP6vevEqx3jDZQvnAHF9qCiSaB9ecxJ9uAoR",
  "key19": "3BNTTDg4kTZbkTVyJbKdnFERnLPDYHWETbPLAmGFALibzbZWKRhEkhggoPQxvsQCfJVdiobadnFuaDq1KvdtrL2a",
  "key20": "4ZrpxmsKnUL1KbZhVVUQ4xjRNGD9fh8uZM36Wt4SsZRQTrF9zeq95TgKXuKchnNWVNWfrzBQd9AyMACjEtr7FXMY",
  "key21": "9zGj98MXzg8x7xJAt6je8j75jqHWtcSSreyKeAat5LGfH2D5N44QKzqD1cgJm9Myyj58KCVR41WJZJCWZjeLxwf",
  "key22": "2bfaaYxWn1UoxCYAujeEGBrsc2uMiJh1L1MNA5BquxtiCFKzMUreFaZrv3sK3QusJN4xLoncVj4Epxrrr4xYuzim",
  "key23": "4CpcNeH9KYP7zo25Q7PKsRwFkzasji4kBPfBLpLDvAapyCnU3kogSvHFoKm2fb8xtn9deXiSrtH3Qt7eie1qDDxZ",
  "key24": "4DefzdDLEk6LDRqYXthC5iKou29VrLavkDzaKxBHC8GcggFEdXLFN39ssY9Q2cAbmxGBAbauZpbQ9MG72XgFuEGf",
  "key25": "3dKFxffLN1DbD5rXxjd4ftDJwXHC7UwEJPq9cFo2aCAdNyH4WZ4ifxWSBcBVjppwNtLTpMAi4daZ32B3zQTNJLsk",
  "key26": "5xDGXhbx3Y9cwftnFKm7YEipvJ2sUbXk7enbesUs5u6r5uUsyGpnKuNSRQ9fj8x42sqCPdBDTJovh8DvUc5LaDC1",
  "key27": "3GrPDj4m1JpMGkVC18C7aBWHFYGXuJPpBq3xXPTaRBbojHx5eyiibqmV6p89ZJFinyaPX4HZGdA3ekcdCfGcDeC4",
  "key28": "5iAi5h4Ch5rdnCZHMvfLid1yhDVfqQxM4AFyyfAK4zhN77LjsxwQD47uzJYsNFHwcWaMz4n3m3u9Uv1jpTJpLN98",
  "key29": "Y3ADqpWuNDniveXenkKhh2biwkspMW2VsvyU8Eb4KQmKpLZgohQFmaerHpPTuYUjE2W765Lb5A3Y8a5VG9wMnDK",
  "key30": "27645Kv3Cym5QC8Exgu8R1cQDdq5Lt9CTTZMqgWDhW4qXkCWSm7vQ6h2HeFoYrHTUa2DumfDWDYatKRBCEmYjbJe",
  "key31": "4V47LyPb8PyDDRh5rapg2V24AWiR9Q3Mc9YgQ9eH2fhioDLYY83vygm1L4y68jmop6V3o3dwwX1na8ppjdRpP7a1"
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
