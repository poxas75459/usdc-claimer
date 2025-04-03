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
    "9Wd6DnZ45pmQCNxxzhWh9PEw3NeZevwZYM5yFCF2qj6y2Tyn5qfnRQxKzeoopaNVxnvwVGCpcRZDRZjBhQvAEjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4apGTiQEHzEoWv2ruCZdNHkHsvGhEeYCh6NoE9t8g894ntEnVknB6CAVgTAkgq5n9zYVzqQhNhS7tjabj1DcSaJ7",
  "key1": "2U75RWVwm79wDckNScBsrKjAk1d9L5kqvEzuorcfbJC6uy1E8EKaVF2K8CmfHVUMz15nKpz11YWoaMa514cJfmcw",
  "key2": "3Eo24dYa5ByUQ911WoRNVokZU3EFkinEPcUw2d5ySDGfkFGay9CNW7VQtezjrzpy8ukJ4739L5VwRQ9fKiUureHR",
  "key3": "4pZ9m9mWKC2a4sST3D7gjWHsydiWtBeJuB9o84ykwaSiyC5ToD7UaHJUpg7cvUPSjYRJyyqqztwvq3wvXnRv589V",
  "key4": "mCgwrnhnHfWioS97NGrSVMtYagr28QezR2qSMdZzb9GgZYaiAZiiiGRYFPbp5xzrpRu2EH9bfBw9wGddyZ32ksa",
  "key5": "4XsfL6FgA78bq3S9z2GThcaZcHctSXNxa8qLk9E5hneeVCQvFCvGcWEZmvJKB6armTjutaJ89qULDNkMEVVoQ84x",
  "key6": "3F4tVDinSLWkcCCwv4H7mcrcdA6GYNZLwohQfEiSB6NCqz7jqfRnrp6zqM523jdWuAx3QRwWu5oKpLnBp2C7idrC",
  "key7": "3YftDm4rA1PLpSSXWmUXBVgxhyM3XxbFKwTgifKFYhCJQvSf3UdEoqsDAtZcPjohSgTktvpJzg9wnT9hqVQWHuEV",
  "key8": "PpL6VKEuHnDhjpkw2zUsYCgg7L4HZxofadv3d9x4g9uhmReKUbsrurxUkea8M62Ph4S86CG6LP8HN8PLAjoRvUH",
  "key9": "4LtnwXWAuVyyT2PNXS25n1HUFK3dLCwrtvFj4i1mWpk8bX4d3btyp6M5Q722QxvqwNPH5xWviCh6Ec8q2f5r4wsJ",
  "key10": "adtVvkANDFX21JRCBLgRFsq5K45Tz584TYdczaSCM7ZYBFZV1N5kgxu151ipaHvKLU2zgzs1sqdxFsJmEtojFxg",
  "key11": "5UWhNonj641YCXwUYuyiKbyL5HoG4y17aRdKXZkRmezuEcKGfakRwaL31t312vHMdoqSiePdWmx4pAD1vQtD6Qs2",
  "key12": "3dUwcwVuD2GXcjSBB1GkcykQ3Te9PC7st1fvR7J2ZW6SaU8UwHVn5b9L9c3vpfyNgCa6wqVvj7iMNTqZZaeKt2XL",
  "key13": "2JrPhoFNYjVhhzeFUWqY1pp1ENRVv1RVzXDH2XwN7DJStGWfSLkq6aVqgEsMkyv2ZUcyBxGbTBTz6j5nTpUYeXYo",
  "key14": "2C7WBnTEZYNHaRUTQ5wPQGrwxyfZgCYKM4P3zRLnR35CrSniQyhUnDC6VdF38Q2dswawjDxnc2UNynjYByoaJg49",
  "key15": "3aCwMssMbiWyGddQ764UXcEB6PYudc9qp2VJ2uZjW9871SLoEhNtstbiMEx9y3NBzd4k9kZkkGWV1RQF7Qf4GSXX",
  "key16": "5LKFFLDfY9stQBNcGw5BvNtyVcSaKkGnPFmk6z1hn7HygjbqFvSU4gmE621WyqP8chKZKhN6KnLUC9CdKaMYKtFi",
  "key17": "BP9mpx1oxXQ8AoazxVuRvzFPkgBmBE9DsDpg7mp5P3Kh4hTFfzYapMSJyfeiGfy3uKzhkgTAKeKZSFCvcALMhqw",
  "key18": "2VJYxfC3TuYxssscXxZhWHgekq7PFYnQSHLxE3nAVhAFMsxk7UE4DZ1GGuYrTi66yVKTgKTeeeZ3fsFc4GwQERd6",
  "key19": "Qj4tEGGYTbr4hizLByRfrcf9du6wUm9HnFDC55wQspiGofTkdRyQ6QTFPYySwoB49Xf6dZqJT2BBF9QinfTNJHH",
  "key20": "4iAJiAM5c5Hpyiy3vyeW5g3iZJmdrLHgAo74xtNw3k4fFEjnSitPCu8f3mgHx7NH3qBtM94CF4sVVsSBhgXdwwQy",
  "key21": "s7XLUzkq4qHvNcrEJzY85sqNmSYvnwz3TiY3kzs8EVZUgyDZhA4gD6MaxeZPYtLiPc7Y8C8B55n4xP2vjUizHNn",
  "key22": "5YjevNgyqLiBq52RSKDPpxm9bh7WVw5jWSo1FwjB85GtkSHumaikd9rUX5nwS67dAqutPCrzW2tCf5s3WYHwGAwz",
  "key23": "4JbMvrbgHeaEAyLimHQCfucN6dSt54fBXnQEX14puiurwaCGrsQF7KA8hYhApYVLVpdEaD7RF8ofS62pfc3riKNk",
  "key24": "ZfGFEArg33uceKKwwVbVGFZv6Vpd4yGbp4nbAnbMSeo49jeYCTEuWvTNiVFH5daLa8UH59uHrvwJQVvACDSaLPd",
  "key25": "2FgBiD3wtCzWV6LzH9EoobpunTSzY5q4Ejvf7sHaRULXdfnPbMx4kuaLCYHWC8A4bvtbcvM2o8MJrC2zvBVwfbiJ",
  "key26": "5yD2qR3NVwikVk4K6KYMLfkLQ1J7uJXVUx2w26dZ4AV4EvtXGvi41nj3xgZ6ch9XMa9VGXLDtZhJKf6ncZcYt9Ri",
  "key27": "3XjErMCiaw3SiUyxTYGRJqgXNbzs7nMJtvsFs2wkzMUZFjX6WrjVbdxoLYj6E4UcirQsyKgPDnYJGuJdzkWHp2od",
  "key28": "62F6D9cpWecpcaS3tPKMQAvhhbJ99HVTuVogGqGP8GV4gJDHCsw65QB2XcJHg3jcisePmdzYgmTDCwRaTniZLtK",
  "key29": "5zNdM9XBd3iMQSskZMUDgT9j6EnYo31Lxcs1dLb6f7Y7i4baUeNKj3RtYkEwBk6fmihsXteP5yVvzteHPokA8vXk",
  "key30": "4x6wpidAaEEG6x17oQ4ZTRuep8rJmoZRizc9XKgEFEtg3VHRqkRvbN3k5MfCzQch8eyALwJ519SJeuJruPzfDdmn",
  "key31": "51scctjwgLx9jU1YLkRUWtnYthmWzetgMpWUWhJcV7c5PTGd89sox8SR1Yue5AymfmMJkStAbNFLP17Xk8vmUsJh",
  "key32": "4kBF3BjH3ePmpVypiq1Pnz8L4YJwzBv6sJZ1TQHzrLVhBYiUC4UDxBoQXpHjwZxBcTFR5tEK1LPuf6VBYr8g4dBA",
  "key33": "q6GCp584Tn5c4QSMf4WNwpZToReY5i3wjHfQWkvRQ8KAfcALMgkyeqUo4YcqWBQ8h8p83YRWu6WTTuqJ92Akau4",
  "key34": "1opqmz7x5cer3zVSciBWaj2472E9KQHGydsd4oCQeeWX39J6z4oGBT26GXGEMAyR9KyyuFrNh1ZpaBJsMFVcyud"
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
