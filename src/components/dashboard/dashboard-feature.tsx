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
    "21mHbsnzeWYvDRmGzDMMcw5ufFv7Yo7X19GzxcNKKWBKgZCYWCMYUF9mv462tUrWivYneViLxxSRqoQqoXC2o186"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33i1VZiQrdvrHckDma21UUGdMXxQQT9WD8w7h9PtpRW6DeKwPA5XyVHKt8ytfDoMzHoRrr25vuwaBcbSbZ9eMWt8",
  "key1": "2YtvEwZoaBhGer1JXJmnJyh6hAYfZTQfYMX9TzqivwkiFkhPPf1wa333v8TvBDxFJnnnRgFbPzGnJLsswx6ABKvz",
  "key2": "2drf5HAo6e7RzQ3hGG6gjAugBWayxZxEDaqUrbiswV4xhegynDKHVFVX4yTodKivcS3psz9PKwAG7FDkpaLHehcE",
  "key3": "yciGzmDqeP4DmaWTCLQF8Tcdg846NZjecbmFh2gboEMRsULFrHW8FABXVJgrki4kB3DevJuDkT9XocN9ZAoTBdE",
  "key4": "5WfrQTq5Zf6MoBR1eVeHxoZ2ArFjwoSSD4LYutpK8bTwePNfr9cpSRGYD3hW6RwfJCyH28r3Yu817ygeuzucuyzE",
  "key5": "5QHoq2aSReP7KGwhwr8d544683ww3pYsAucww29eLiQcXJjBCvgaWU7ugo5hN2UrsmqH5nrAcmkDdZTVYVq27jTd",
  "key6": "5E3m1kHavU4G4h8KKgSa4z4BLLLSaCdguRDT47FnsJNF6ZctCaqRT86epnwLTDv3ixMzh9jY3eVdTsbAsbUy1SKX",
  "key7": "NfetLZzUdB4iqV6wTxXAxLuja8FzrUgt6AG485GrLcdKnQQZ5tL7AiSJCrGzxcphvi3mcXUuFnhCv5oKRaQMjpe",
  "key8": "4gkWQvmcEpH5Zr3SeoqVM1KWpy69uyE5DCgSAiPUcZGkNUhPaCXwEWK7nUnxV3rJjSGUkUWN8FnzdDEGaj36ACj",
  "key9": "3rPirsRW7evUJ2opegSHjTetadSiphccVP4Hi3Hy9tEuMtAMuGWFf9FoEyo5GjpgDz6b2dxDN2UssyRhiNUpaKcF",
  "key10": "qzBEDUf5tuixuajDKHc5b24HKt2zxpS4Mbn8AMgqu9st1H8TNiGekiyGvGLpRVFpRC4QpYDFV4fuGx4qTWTcpiV",
  "key11": "2u1YRWHxqYPtRzKyKV8BrzLn547GA55BogaKQJ5r35KApN573gNC4Avmh7fkXDwRyNPUKgerKwGw55kUTDG6NwjE",
  "key12": "3UPKeYN9CJ3ZPynMH4c6rsPRjKEvi4NEEB7R9FFC46aRsXhfwh3NFUmZaxnQ7PT5cVwavmaAnAoaE6GDS2CrBdnW",
  "key13": "2tNJ6pX6digVTPcNsuzvEgvYYP5nPdcMHAuBfSw3KNPPRezj4R7XsuNU5qmNcbmAUQeSt9pGCp89JMTPTJ4ag4G4",
  "key14": "5ZzFRGEMvHcB6qqpFmooWhZ34SWxFNtG4QC4wAKR4QgDbBQHbrJjD3xZYm7SnJukca1KNiyqNQJUjnwQekRy6QrU",
  "key15": "CN43dEfbFp2UhHjpimAxtY6YZTzFtW5RTZJMbnAgqRmHqab9JHTvuh79E1tkzJrb1oE7oZNen5UQdBBuddEmvow",
  "key16": "54CGwFfDBzp7VoDhCvfymVNZYa32RmVN4WcaAKcTNsA3CiW9hjeCGuqHpFVKYevdXHnAZDnAaKG2swN9MoU7CEnn",
  "key17": "T2er7hdd1zUJtizu9YK7Tw39oJgWciLK5LFWgxKc69RUNiSxaVkKVFchemMpM6p1xqTucuSmp4bSaji1TwPzgT4",
  "key18": "5MTwVGTh3HPu1AGVipdjxb4Ny1cqxQsUg4BwmTkRJjZPPkA98Q3PNeUZnF8jkPcCHMi84tT1sGq9Guz9eJguMDbf",
  "key19": "WYoAe1oGzG6fkes3qggnhS2u9KvzYhP46E4qSMhPSm9XEpyHbgDBhWBvk7PLjZ4eqcjS3ahQai4WvHu8SRJvKK3",
  "key20": "5ArLaEuct4dxQjMedToLw3Ri3EYfzHuqxCG2guPn3VsNJmGHSsJDMDQ3wAqMnvnd32iSVT9WAf9AKGMa5U5VLCQZ",
  "key21": "5UNqJ3e6PhfF4M7QtbjVsZ6RiK6Bg8bNhMpkXSw7fsP8v5Yz4cVHxkcNUpSJRW9peVget9G1hU4by6xbcVmJxgP5",
  "key22": "5ae9BFVYBVge1z7BpsnTLqup9QwMs8DpqnDHpj17WSaCQEj3Uwo9nN3M7Pf9R1RgUP6PNT41qnBGn4QnNv7LdC2C",
  "key23": "3Y228gFDiGj9mkPPLgiy85PW7LJwCDJZzo13KJ8LnQSzZhy6E4i1ijmxQQPuyCx1L9vVY2fUzgjnKBCkQR7whYNv",
  "key24": "2KYx7E1PHCYG5mS3GQbG7n2jHPLRHC8HpGrDQjWpFjBr4fyQh5QPW7dZss9zQd3WboWifqThMqQSDWfMUtuGo4uN",
  "key25": "57iQBSBXDe6j8j2Dr4GXRs48NEukdVvNcz1fxE5Xdxeuzcp27xvrhWcTAkMXvEqQiCqebU55DspBT4yV9PbfyDpm",
  "key26": "pQBathYNReoMQEu6LmZR4fsb82LqeddCREeqedEtAkRUS1eVkY1e96iCiuJ4Xct2axYQ8DgpZEcXYVmtjw9DyXB",
  "key27": "3oJb7b95DkMtNpoTuCmWv5QaBsas5B8nKs6oAfpQvsMZtJjCnToLGUR8pezoJLWVz44BitY7yHGsacen9Hyaf95b"
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
