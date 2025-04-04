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
    "3tf4zRvsczKVCG2VpjJeoTNtMPW4Bt5QxdVQ1SmZBHx5f8kNQtnpjPFYtDf2wUHCVmwXGYmA1VgRyziu7FUMfGEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49PE4QnuS1gPELytgycFcTWLFu19bEs8TRwzhosmLU7RHXvqE7vgL4a8Av6hXkxGqcdghMwwLeb5DkwGGVqEAJoC",
  "key1": "YMCJGaWUsA57ryRaQ7r45uA5PPTofJ3XDNTUeVpmTTVgok5DpEL1KYrh8jLQENrBFpXhf9397bFb4L1SRt9eUtt",
  "key2": "3Ke9iKVLdmJ2zoYwCzrnR8LfFyQ7m7s9iowJ51wW4MMTq5qFR3c8XswWh3Viw6CKpjztX5QgHhVXAUHrvKuSj2XS",
  "key3": "2dx3aRAnezCHYNVuoYKQEVz1tdQMoKvebpo4s4t49YV5BexJwTs7fuY4VwJjPpyVVP8iDYyqMRxBvnjift8XfZth",
  "key4": "3JxHJ2okJC6Ne9zznC5g7Ms49XqMnG9vLL3xeRnES9irCUuQxzaekWaU1J6zZHtLtKxYMLQPfTxhd8URcz43hfy7",
  "key5": "nzxeAHtwJ1m611b9uqMuEjxtQBwMupUELYyeYYHe42YM4QNLrFYxC9914Wg7JFV42E7QV1byEWqKwDWn7aJDR4s",
  "key6": "n5LcQ5oRkRGSkqxQbEYNqRWmtawjn2dM5sg9FCjCiy7TGSw8jG1BtRtZ6m2hWzBN1fow9CdzzSQChoH1zoh1je1",
  "key7": "5HgdrfDFEz76CsutJpb6kTyp576NMmTLrgnBLDvYzmiHwq212wLycgueQajSu5kgbJhuMoShmBYj7UvTLugnMwNQ",
  "key8": "55X3SDz8Mx6mPwiFG7A7Go7ZAcxKycrkxKS9dZBDMG8LecA3koZtmgtnuBn37ipSLdzhrBJ37NP15WpNFJhhABqK",
  "key9": "259BKJRLY4eJuhyi7eUdkF88cG4NYo2mAyVqkJmQtjqyYjqT2fBQdTyb9ezjv36CPPyNYrzJibKV6WNcUSwhQ2K1",
  "key10": "32k7S662ys3gBAbxAR4HMAXgtbyizUpNebCkwTAFNV6nBAZMZDqjanMioquDoy4ZnkhfjnoAQVmtLUzqZfexnoWT",
  "key11": "5PvLZjmUVSw8LKwJd9GFqENP1ECXzHHjsJu3uhXM7seFKkGyRBTLHDju4prgdaKgDV7MaMeYyoRkWhg1GXc22eW3",
  "key12": "3q6gVtNFnS6dcoc8xWY52ek5vy4tzNnvrRQpCAEG4PA7xynAXCg6gvBQBc4AkpsUDFeUUtDKx5pbzyUrQybTYCTz",
  "key13": "4MF3xx6pk3SCaxpCQphsErXZroa2DMJTWiueXNsTPecWRS54Vkpj9McZ5EX8LAbxkjSPrC2UNDWEfHNqypoAHaAK",
  "key14": "4ckPG6KJeNzd3oT8t7sbay3wuiMbepe1yEN44iWFWWXnqXHMu2pKjgioGCrD7eYVWB5TsCGVEM8UGW5YGN2ugUPB",
  "key15": "2znMTUK8PVjHXcW1pc5p5U1iuX3bS2eNPZxkrRoggfhHd882sitePFTh1vNU5hGGTgqBtkitB5bL7tRvgW1h3aS1",
  "key16": "4NV7aafAAJeaR5wTGxCkLxaZXsTYpwkaSHMnYMiXqdcrg2SXP2JUK7mYsVSn4kmygGTT5hkF7d9NWjjuPAnWH16T",
  "key17": "4bMTVqtbRcsHHDqfD41LuZVbQJej3etySEAj5NB1EqJJuEzm95KuM8Q9Yyr2GXBVUHAEKzXT86YD7HXhrEVhxf4p",
  "key18": "2zh4pFUjULyEZsD4vaUA69vvSbbT1WzND3UTfkuNttiHP6y33W3t1ShJyAyssuZufVgh8xJzyEJrECMGQtHKCL7a",
  "key19": "4FtCcqiSUhruWRhDmEBZbrjfArERyfHz3oZa8ce4y1zFcvHfTyuutZdMuocKL89y9V32bgXcbwjBEA5towzc3EsR",
  "key20": "55zNvvT18HHT1gSemAtp3vkxghHX1MEvcdBNktyL2hxnd76xPV7LfeDRHw9uxfSqXmZ8YJVYA2No56fkryLusHKX",
  "key21": "3Nj3n84GKq19cUZ3BYSuJjKwSr1XBufFn27HzYTyy2gUJSqAqiCt9vb7B9fp9pxLmEzPLbovxn1H9cEURWjCXsRR",
  "key22": "5FPodvMjMyAUMtfGnEzjhoAKnXLJrcimMJ3iMXZ38M5HY8tAs1kkBK2UC9WV7U7g4SUA26ioHvGd2BozLdivgme3",
  "key23": "4fwDMWKY1EDRxehRVvs5RyC9VM6cEe8K6SCbhJjfd1YUZBMYoC2hFK58ABXs7nK8MEQnQKdmtm7QM5x7Vu2Xw5bL",
  "key24": "56AAc5oFKm1czvhEZepgMj3aN7ZF2EsnYkoDL7i69xMs5uC9vvdyfLdvLmiksuZY9Uhb5hxjjXWrteb5PnnaXFtB",
  "key25": "3GYqbabE1293GjH4qfvivfUMqJxuqwTvfn4puW2RTkvyCBotk8QU3q9rN7KvReyjK73BetFcFFJFjNWXUJUnqMGR",
  "key26": "5riGgDsAXVPQtTB89gRGCRmGNyaYiJpEMQvp3bXW73Sqb8ZYV96xoNmLuusXe2vSdeZ6bmV21BqYtKCf48k3grZX",
  "key27": "44Xi2j7hihwx9DYMxg5awHfNYHtZhU73hwue7M4RTFo17gX5jL3Jk8vsZ5K5xHJvHiGHnoGUaKbHiZmoYF55bW9x",
  "key28": "24WDqb7bRVrCpr4x8QNhqbi5jazQvY2yJ82ArdmUSAGDQ9kyemFYni4i2fWzKKLaNWKfmkUWSVoJ4PM5J6fBgA1z",
  "key29": "D6Tus9YGZXoMT5uCJpzxArdDeJEQwY971e5ogmPFQATQTcSH2SD9Y5cawSeJ3zoKooeBLhG6SpgZNjd2sETkGT9",
  "key30": "G8yD9saSdVEbdBKtPVthzSXEzBXTMjHuWaER56GRjMGDEUHTEEwAhu3N3LzoB5H2oMrvQxLYDH71r1U6aYQXSaH",
  "key31": "br3jbH45GiNCVHcFYrQuzPRsF3vstfKLQhTf46vtQaGtq8TSoNQArAkPosR8AKgjvHFZoQuoM52aGcNoFETBeyB",
  "key32": "2AKPoGi75AB9rgkaocCj8W6LQrPsb1gNzuhSNxL8dtp6dUpASSphjGmqiALQ9sSVTaHwfLjSpEsvbUcrieuhAzLh"
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
