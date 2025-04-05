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
    "35bm6W37rND9bym16Len9GEJLvz3pTmwSGqzVEU45psic98FqueTCLpPrSJncyR9SQc5oNNBkfvNiLT6g4rDn4ap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oHdxdaD1pKjHTzgou6HMPHX8HrYsamzTXzWW4teoAWGzHoFmayMTYFZLXSxKA14EyLFAx3q7KoYTVzfrWDktyKZ",
  "key1": "ugdoM414H3C7TWfpZp7cvKPVbWcwLowtwrRUVoWMBwdukCX2hKed3HYzd5fmj97BsqM8QxZM1U49kWT2Rgg2afx",
  "key2": "4dvY1MN9JbfaBfCt4UZHQyoW5aN3xbknjwdnsiPT6vzqddr8BFXzvM5VqCDAMybNXdnxKgKr1uevXk6GAjbxNPuy",
  "key3": "BzTz1PkDqHDt9HCjXHXF3XSJuNy3Kyi9ubJTDY2WGGZa99UzoPT6vqHKsXLknjyRV5TkRFTiKMpoAnpZp3KhNLR",
  "key4": "566g3XPZhR1VcmmCaPNrGBhyY8j5mrEeHp84juknYX3UoJnTht9aaeHi8GfUBF7WeD7mg71WmChGDCthZPXoKHag",
  "key5": "3VP5GCwX1tKx9AnVQSd6TzuEYFEm3f9QmViu2V7qsvvaNguv1bMSYV6Som2avtU2rXGyrHsvVw7HvTUy5bwi91wu",
  "key6": "3ufaErPtr3ExyBGetCp4zBGpDXDJuC8ifYaH5DQo5acx4iur8BbnCTt5MxCJwheamEJCeWDua62UaqA9QbVMEA7Z",
  "key7": "2DwFbhxeAKkf8C66cGcyBQXpSqHQKZx4CVkbB9vbhHLfNBC6DCZAqjSncxhR7MfGmbTJspmijRJPWk7k3LPPq2JW",
  "key8": "3BsNAWnuCBpwHP8S2CHX862zPuDLUQZPj1sKMx6jXmmqCXVjcAX1r99tjqCzPH3W77XfBx8pa2TnyH2mMEUFfizo",
  "key9": "5hn2dyFWyPqF2s2C9GAxChvmamDkonCZDo8N1dAX9JZzSLFt9aDLcdubAqyeiv42rGA587ZkTnuikKWbiozBy2uk",
  "key10": "5pmEsZTTVfh5pZ9hTpnWjGr5wtoabyVBxDvLypaZjx3VWrrsdbRkk83hhN3MguuFRbp2yYivf8iP98e4pzc7pzGy",
  "key11": "3GUQ4ga1A4XwpRXTKC6BnoicjQF5NcwPqthu7cB1jSGyVHt1z2dfkheAyUPxm45UcQbamWGCpAJFMSMXXhsnVDu9",
  "key12": "2Je4aWxTPEywmgKe7JS16Thi89aDDD1wyXYrt1izG5HqiRcNpyGBqRi3QvBA8BuVoA4jENbuqzTakYwhFwTKqadQ",
  "key13": "4Awa1itH7ikfkhysfguQP8AWWeMnNqArvYL2diZHcQbm7BaeUx5UaEMJjPZQD3VuzibRKS9iaVfojmZDkFtxExrN",
  "key14": "3ADFddgh1aeY9BcYX1Uo5NCe4U4EPB3FfhDbP84xBvrGpbnb9UFRrrMoSJb8WHp3p2PfdmoP4MMhcJzJHdiBzgGp",
  "key15": "4jdeKyEjS9w2THb1WUwVPB1hm8Doqd8Kx4z4qvHG55HbEJP9s43wKoXy4KhPF47yeqPtyT7rmt1AMM9g5WQ9953X",
  "key16": "TrH8aJRb8PfZZ1CSk4odzd9wYzwMJ8Cu1PJAzFcfawFSMY3wmRjVhjz8zkzXsmMm5rBzNbfsRvVYQn4YA97Vyhd",
  "key17": "3L345TvhtEz33AKxPS2xufTv6L3R4mgPStEqvRKtW9wQHase8FHSM49H1Hqtm3owfbkNLzGyEm3oeymLuurGGoSE",
  "key18": "4DinY6UtijMyuyaKEg6uGFfML4y8WuuTu8eeG1ofNMiGMu8wqb1zWEoXHdYQgrQki1s3hcpFsqdZWUyj8RSZ1dz",
  "key19": "3ngYps2F2cnoZEm7z1qZsn8gQEExKwvZXdjP2KojzAa7997pxJymhqwVEc9Grvrzq5FijvhRpMStK3FG9myBPjPh",
  "key20": "32YaRo215N5QKS4mq9RT4tS1KCRpTsezFiYxTaTQ5VaN2uq19FkZspKwFS7tyFH6eSggW8WGGsrz6rvj53wmhV8D",
  "key21": "2T92tpF8Fo4FQnsPMadSrVWxX42PDePtwLciZ2hyd1oQewboBYEKnrJwqTh8diF2w7s2iyqno4LMzRzypvXknC7n",
  "key22": "5oodzwDTx96qws9LHJQMa11NAZVo2aVhK7WRnb3VH3LPKfT92QFL4qzThdhkjBEoU4N5b2iXdnstkzoXtEzKueZp",
  "key23": "evdAccZ96VFAdsJG4TGCp4rARdwSijUtS8cZY6CBzgvbW39rJ8fjSURMtEhuQfHN86V359UyootmpipbCJAHeT1",
  "key24": "29Xcv6vYVjs9qyvDo4REGhmgMmK41EAfNPhpQiosnHtzKwjaLAN3b8xAbyTn474adEUQDdzRkpYY8dp8wTdG7zoP",
  "key25": "4V17Xuppd3JS42wtoBngGpzQcpaGLb9VYrtu7UzHkxv6uVnnMB44vKn7Grh65J4ML5HM5jPyw9wiT6WWYpnqXVJG",
  "key26": "5bkwLXhYT54mWtXav3oWszrwfQDFQcmMu8h5FvFresV4yDTxdscX9FGthqJ8aP94VqXmLBVFo51hWs59RDVbeTbh",
  "key27": "5ZvcesAmGmMFeKHVBZm5S7hzhiGawLTuegYqYMpYxrB6ffjg5PxnvWhiwDujxYaAqWV2hcKoeo6G36DhWKfVNskE",
  "key28": "63BVXDjhnp8MaHLWsvqdWDT1qtfUMZeGigggX1g5xJpdp6K4BN7emQhvF9BdR7nqMyB4v6WV76VDEfA2ZxjQpYqF",
  "key29": "sQzBYHjamm8dkd4MmLxMmU7dp3kcQNMcUtRDmCEKkE44S92exuX2owJvvDR5eXA3GmdX4EagLXWziv55uEqP1TX",
  "key30": "nTaw4s1b6iMoWwRJfHzzrj2x8JKr9r7u1TWM3fnw2LzX21eFMDFQFGvR368TsWiRZhX8TdEnYEUpnJmLeLdZSru",
  "key31": "DzdqFfCPV2sFdTXVmf9s848XEVC9BTgQ1RBRjhqhRtxY24NrC94JS6MpAbuTyuJR4S59eNFMJmVUWGFybTjb13w",
  "key32": "3A9VZ1SUyQt8kNaKbRghPFJiPRes5pS9LK9B8nA1xA69HuSjBP3nQfmKG36VdxAyhBKo8AgqCDk2Qno6TrqPHvM3",
  "key33": "hjSpKH32xDHT2LSSejBNJTURYMRktocx43GPWNs42JL2Gx3rBc7GNUsSVhwmPcxJuws4bsVp7kJCCQBSerCz83Z",
  "key34": "61VCQ4x8LEeNpcVUK1rtcyVERcrXgqotz38faV8mRoSUfUesmb6nvqtCpVAWDW93r7QrzNSkCGMnj4LHq6bC8JrK",
  "key35": "5ziigV5JY4E3dVzWza8Xqc1pKG7S9T3VfmctNXRDkGtEYGD4w3n9mg6poHH1V83An1XKXJzqGtaUWmUJ4fxfYBDA",
  "key36": "3CDvzCqVo31qMGbXXhXRDGNUqQ5cvLNgMebrxmVrCF1MQenMrvimsFeGvjKZdPPszR8qBSojbgGe5xEb788mkHns",
  "key37": "2E6GSb8eBCxmtUSkGBx8LV99MwQkZgJ6MRi9LGVGrvmQqi1wwfdJyLPS4FgbGfWmQr6QGpQZa1uWEtw3JxXreuAU",
  "key38": "45tNHKJnhfhT3zEWcpjqGm9G4FsvWu9M1fkG9JKbNxkvkTWhDJqAa26Anr999XdquFBzRKca59ZY85yYfLxLXtLX",
  "key39": "m8ELuGFw8hBG43xaVJCbhrcE7BYJwN5rQMJCNjnnmmGkd4Zpob9tbFuP6YoqgysvpS8qAdJuVD6MLw5foV1VNcF",
  "key40": "4xi1WaBYSKfyvTnvk8waqJfQTyofmifNAPzn2nHXmxGadbiDdaZRgDCMo6rYogDFZogrSJt4fMwYoJxXMwcw2HGE",
  "key41": "zgPREsguNdPmaA9cVfm65bJwYyAh8PptzKmYMvB7v9A5mXh3YhDuVngJPF5mGeGG85QWmYBS3mksf5a5opKgBuV",
  "key42": "4hjXazcXRuQ3FbGbDMJ6uz9T9ZZA3iUo4BLJ6hnZgHSThdvs28M1mdkZCdEKjcjKmmsSrR1QCFDLjEYvJj8Q55EY",
  "key43": "nyk1LD86rowhUjQSYCjLpCwiaKo323aw1V2r2b6mtko9PLVCGkgCqDuHdiSfteFJhsFwTRo8usd5xy776REJYZQ",
  "key44": "A34rfb1m7STW7FY95XYwSQ7sB2Af8q27rD64DeRvokpP626LbF7hcnKrFYhQ4Jct7LELyQ8bQmtkh8VCqRLUaKn",
  "key45": "4zAD9YYQ95EgTggj2smByXaEpBmy4r7NrAkYKw4nPMtow7tFD9nec78h1D5cbivZpoW5i6mTUxXJ8S9tysEsaXDr"
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
