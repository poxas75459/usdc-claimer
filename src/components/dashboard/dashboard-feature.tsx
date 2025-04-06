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
    "2FV6hJ24cdDJx37LAgPupoYBXbL98d9c3U97gLXSpFY2ztChpP3DspKN94SgW6VYuj3ZqqqjwLDnWWsBsU5nDTU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "588AJ6e24gu5dDLoJrJAWqhbgYL2qohcBmfi9DVoDCUpeNYk2SwPj2mUM1Wk3o4eAtQRpZ1fdcfb4ZS8ipEy7tp4",
  "key1": "2aFpep3h9o9oUF4TvgFnHCnAfMYfRhAQYPeb3XZxR5qkD9vu5ufi857mf44Sm4zYQnRQz1WFhmmYvpbxf8rLMYzy",
  "key2": "3P2cFNd5Xd8ofzHJsXR96E6QgTNxVL4TMqu3qpfLkogmtVeGedd63ga7jmXbnR7SUthFkUB4w6nQVLcw4qiYThDY",
  "key3": "5vtHN2rWRNW5Kmx5ZezrhUBEQTDQMkpmDnmRrxFfKq2TmTt46jPfLDGn7Bmvf6QF9Zogri81DS79wvwY1Z6HtKEt",
  "key4": "2tkvhe1ucjPcR6B7ATquKyXr7ktABDeKoYqALAzo41KA86VbC33Td1emVnqVnmjopdFhqc4eVzwzNaokK98NL1GH",
  "key5": "42VvAWn75X3kW6BotMV2QefHmmt4aAR25782Mg3NeVp8qUcEWBiCgVt88pMq1KsJoiMabEgVYc6F193W9ncWpkMf",
  "key6": "5Uw2qCMC2BhYhf5fwsb2oyDjDUwYzCWAHp9KTGB8bUkdyzLwAhg1uNFTrP54DrXttwG68FMcwGBqVJmhExRdHkAC",
  "key7": "5bn1VB9caA8raXF6HZ56AcDqH8w6A3WeDAj1YcfiPX9AvfBz2EBXf3JvG8S7tneDd6rS6hp5GSD7GRHreLyJP3ST",
  "key8": "3Qe7hv4AGqiCg3coQjp73ud8j3khkXjJEFjG8ptpNmbKdXfLrhjooEkPJHecR1DLFaf9841xRYy3NmHsj86hGyjX",
  "key9": "FmMVY1eV2qzCtLs1qnuFiVe2KPFrG1Tokn2TWSFfRkyQP5BzksB27PCkLrQTaGdWLyLv8FwwUDk4RJ7QxfLGe6x",
  "key10": "4Nqthp5QtbeuTDm4rvNHmaNDxrJ83PVYc9iiGyjSYaAHg5Acm2ZpqrnJ3SCGQH7pfXT34w3fi2fErT7GjT8eBLwn",
  "key11": "5t9oemd1ichNj7HSEzJ1kknnKvWK8umpAcdzusiuhj8ubWkUune2qHDSNfhGsKDKyjsdGiGj4fX6UipK43Woin5q",
  "key12": "2JRpvdKeTwXpagR9S1HHPJaDwF87CDAJ126pP8SQKuepLBGJrUBabkyp4YRYVdsWqyG2gZQCbcpVDBs55XoD7kBH",
  "key13": "5toieJYQJfg2z9zAVvNjuGwbo7uXABCpv4g2etTv6syTsfJnNRSK16vFL2mWqm33L7SthroeVb3iJDvdR784sN5V",
  "key14": "2ms2teUYy8WvU1fDw9uCCgnnGXyAPpF8HyvuaT8wYR7pBDpuybANEaw7dAATgev5Bmj9NxnXD3LVPx1NssBRRezB",
  "key15": "32zoDEsCiKUg5eNnQXL9U6wdS1bzVC5YnW9Lctmb5ZyQXm3hAcUYXMe4pmRwchMmsPaocPU86jt4Nv1zEHJHjb4p",
  "key16": "29KmrQk5L1rDCEVpv9GKrKodRCNKpBGf4ZTmQFfQsWUjAZztvMMFh4cNLUDBXzGJk4U6yGDu94NWrKF4ZTBoXNuK",
  "key17": "4vUJqB5CwdtEJ5e23qAD7ddv6GVQWzFWBrE4fkHPTpfQpeRsdUFrQMW8S2EED8MKbi5DcaqXQK1r4mBkdihFhm5N",
  "key18": "5xdFGEAkh5otQPi9Hqz1cRzhskAxuRezNGcNrAukLYUhK6B7rra1aRurvKfu6qmquLZyPKJGFt2cL6aYcZkkZo2T",
  "key19": "2Rev9bFknnBGgipNYx2BdeJSJrh2yLwJBffQsg5UaqQZ44qXnWvaG9pTU2gDkb3UYGmtwig7TxngdSA1Mx8sVWGa",
  "key20": "22dgoQYFSqwRveg8tHjhu8CzkNAewHdZQw4mcY6je8jxuTFtX459t3StTxSfXG6GenM1K81ZXfypYrfMAWKTS2qB",
  "key21": "2SpmRAWGjBcrtgHdy6LRj57QofqwN6ptwWi9ZzHbFyEn1HbXUggq78KVT41g61uRQLmgEMyAuR1aWbNrVz2Bm9fk",
  "key22": "4i8z4rep5DqC7bBfAC2wf98kNnwk78KJM7DmcJJHz9m62EzUtWS9ZnaTo12kgkDZVSa1CQ5LHHFRgeTzPGuXWDXj",
  "key23": "4pbvM2q2aw1697aUpgsRD6UezgrrDGxs31nSy7jYzeMqVnHsTp5gYQQhvvHVSNEYa4T273NHKimiy4yZjpeE7hVj",
  "key24": "4ANcUHusUA29FdtXFtMxsiKwFcV2CJnFL4iTNqVvh8kdhimBYYuFJXVw3EZWBm1zQfBNgD1YfT8a4fzzvECnZSv6",
  "key25": "4twxsAX3WmkQXo7p8SXUcoLN2DnFL1jnZ1Hd82F1ExDDzxT9qFGHZtuRsh3Zz3vLr8dPhdPhrBuq1Z9TAiTCn68L",
  "key26": "5hy4ngwVQuoKkC8YdnYAXK85GjgtMLLsN8i8cyQTbd9Fxom7S6kLSQNLfcjpBXbn5vWmhyizsXXXxxD7xxZTptPB",
  "key27": "4yBCr4RvoF1cTqZL9nL8cux4ibLTkGtvXevR6gaunXdNCskCF8QVbMVcJkaZsJpUkYGkia8BKKAfbTSdc1RmGBHQ",
  "key28": "5a2LYxsWvvEmyAXpDPwdzig6hFcxeFtbb4A39KuHCyUQyjLjQAsW9HQUTjF3M3eDNBHKUL8P5mTzwivwffoNN6UF",
  "key29": "2khy7WQjrna5bhBnU6o3TX1oPYrto7ApuBE7ydHgh4HbXWsfKzW8sS5D6XJckSeRfz3cFwv7kMLg5LQsATpJJ1Be",
  "key30": "2M1yW4HzFhMY4TiJy5dAdp6esteTLYDKj9hNQRxxUgssXRskDq51pjRdSwz44irVtdhjTh9hT4h12KH1LGLRd7p8",
  "key31": "4j5DapPEsmJaVwRPwUohsUuXD8JHMK7vZr16gtaMqPVGHpX54DG1h5vZy2cqnMFpEigfPHaULA1bjD25g1k7T9tR",
  "key32": "59Vo5mhUMXrRC5SShcKJZtSExYq1xXzB6sBF1FjMNCZCnjqGtMZT2XBWZMLDh16S7q2zNdUghHdhELXhxhysyD7d",
  "key33": "4kvMMaemXo8BUSM9B2ogd3DP5zSR5MXR6ir9r77SG6Zb9oP3n7jisZYM33YXpvKhKsfR5k4exLWaKby6VyJN8dJ",
  "key34": "3Uke89vBXUVgwdcWP3r4p7eCKSqLzyVESi1M9kFM9M51PRFWx9mK9wRip47CpsUB7XWQGGgWX9AU2RaQd6BMfP83",
  "key35": "4mNTuPX9cZ86jL2eDhcquJSwYL5jJaVb8qqkNyNYKqgjBv85iw4Tur5BjtZtE4nbnCTtyfQAGowAzu9znhTRu9GU",
  "key36": "2oph3LvdTR6EaEG3teb75PURCJf5pBsLCdz6z65okU6zPkHQsBLx7HXFWJgQwCyvmeg85eNj2ddtCwxbxrajToA3",
  "key37": "3XJpmnVGtVTLSQKjsS241K38rfd6xC8BepAYmGQ3nSuo9Vfy2ckdzQW3XvJKpudJzoDXHZDQPsmUbsypEgSDFnBw",
  "key38": "QRiUSJosBkWwJG5ZPpBVfHcHi9EGHV6gcmptnUkAa7MWQnQ5bd5sVPfz2ATtFHPahiYQSF6uYnJgCvxE4qHgLaA",
  "key39": "3K34FcXz3QgUgZi9jt1T79Ecmg62kDWjNceCGSjnHYfRMu1PD8kmqJxAxcoQhD6qBiY7xQAnXpfkKQ4k2kiwrYTq",
  "key40": "5ezy34MdaWwMS7br9t587QsBqAwjhsM7qy23qNhJ1PsjCn8FXZqLJv2TF4U3HaL5jKmMJQvy2FLanC2aeRFmTinm",
  "key41": "4kWJyr3j41tDNs2h1wg9q1aYo7TyzxadTQon8mnkN1isNLpFBkYY2yJ7xegijfXfKiQ6Z434jJ3z5UEHdW72SX1B",
  "key42": "4zfFFAdMMGXA4frvbGKy8idFE48qPCgp5eD1dZ6X4XkWu6vHJKwHSYb9n9uTPBjii4QBgstHxbxPLcYvMR2P222A"
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
