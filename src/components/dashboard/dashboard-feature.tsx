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
    "5BmY3TAZoAkK4SWahDwz6HvAHt735AY4fNsaFjedieDTEA4NC3eMMtNQzHc1xen8peDHqggmouZtiC1F33ZZ951h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ABdoTZ2v22b3oiryP8Q85ue2FKkjAo6YQ2JnyujKuLH8jKZxo8S617U9hrx3GNe1NCXyWpPkSsdUNcJh2VFrhBe",
  "key1": "23EAu4f6m4iSr4DyDUZRioiG4eve7m6U5Tpk4sC5uT4qWcusjKHSJSKkZk61GJs28TwwXxeRH1RSkhw1wB8x3tyC",
  "key2": "2PAryD5Hsk4zbwryodBE7jguc5BHyoSHC2xQXzXVCXd6SnsqCDRimrxKAfvWwJghkaPXAXZWkNXmUZHWSfjLFyAR",
  "key3": "4oag63NgdDhenBZQhYyYdSwcEEp3bCCkMNyWKMPb4B4hX9ux1cWp43i9VewMGBwbFCT2HwJwxHdYa6WyvyNXxEM8",
  "key4": "299YCVZeRCN5i7UBKStPLKL1q7BBsLwZCv6XtDVm74jGKfojW74AeWZQENS791n2oL3srsWURGVjPCD1Sm8mZJ1m",
  "key5": "2yZzhSTPB37jDEgnKTHNzfzsW9Bwc4udDVC1RXk2jWL2rByQivLy7jVVYhDCL6qCHY4nceeZdFuP6r5pcRnz8HDL",
  "key6": "2ie7Git2KBN2RNV2o7UseeN8ba6YEeM3CVEvBkUakbq1j9J1uP88SX7aZGCPCPTb79JXykva38R1vfcRuGn9WLXT",
  "key7": "5gcsb3BEkNg6r3vnaBEpuxCD9iPaqVhGPGJVcac8K2SkKoPV2EzQmGKWA539tErG8d6pTqhuEsnGDf66inT6G8Gd",
  "key8": "2SGyjqcNHC43MgPgzHMiYaNeSrDXDCumXfMTdcN3s2ZdgPKALaFSKx983sRPnNEJUKa2J6mZQGN1ydFQVpVmCUt4",
  "key9": "6X4n4GrGNT3ZqgBLefQvNZJfK3EsCfygynviMtQn7KXeWZXR2EPikjsjodfLzztfKXn5n1UpLdiQRUFUJ2H9zVt",
  "key10": "4Li8MAeAeWq2ixUiyi2JvUQwjx6MYp7zKLcow5S453Xu7qxmZ5fUDgAzZ2vTCT6cYZYeAojwqvZY1U1EoAZ7g1cd",
  "key11": "4HjTzTHfvSSxr3v8932Tg2VZTVP1cJmGUKS5AEf8bojaGZRm56GFgHGMRzro8rqLtaenrSeKeXgGsbbSe26amcEv",
  "key12": "4hMn8j2XHv5bFXhPZwymXGKjU5VuYr6vN1ZhpKTYSJiMBBLCDebd4w3WGDBpHufFaotcuWo4yhckkTD5puhTJevu",
  "key13": "5rSoXk9NUV8hSnjZwmMUTMmMuYEppTpFtqgqxcKXK1rcYRDv3RaNfD5ea2JzmciFF8dXePXDQvLG6eFUhwqxDgNw",
  "key14": "xLgPaNDqRJYb5A9n9VTgSexwjZLKwsyfaqgGs6q3TNELyy2KJuBqTKy13hsYNg7i8fiCh71xEXczkktqboe2DuG",
  "key15": "3Qrf3FLyEn7dzWVrPrHsBe1x89LiC3V6fgUvLNaw3V46hZvQeayDWe3NvpQ5tF7TQTRZVoo9NQ5VYtZrFQ1tiETk",
  "key16": "5yrEtbEB7UMap7vjw9FY4H9Nho5K6TR4x1yuDRzQ5PAkvKQmZVSybTVb7Q1biUmRjzKkXbZVqJ3Pj6BMRitzqHAL",
  "key17": "4Q7ECoo53qKQZ3nBP9y5q7Yr3WgwTQH5LyJXjgTWX1u7froveEhB6jHfZiaGdRBQr6wR2igLiwPx6CnbujP5iefh",
  "key18": "M7gcyJ6yz4xhNXQP9AzAt5BrFKTvXRyq9Jk9sbt3QRWB9odxNWMReFhqy6L9oe6T8WExP8vzsUSPPVQ6srekahD",
  "key19": "4oL5KMUv8r7PneLC7czoi66ysfSJrxH14diRnAZD9JBnTQMDYg84DY8gYjkGL4HGRYHTAazbGe2fQZefQV1xix4r",
  "key20": "qaFSti2B7EsMWqzbt1YiR9t4TTPqz2AtfXPy23kAUVNwtGEeaLvknYrKwv7gGqAcHZkPhLptjhnS4CrQLY1a8td",
  "key21": "4AmDdQewhMwoRwkLG8iB12c2yr2btkEQp211bzgSxzMvppewZ3SJdCfWQFwn6vYwobDj4Q8FezpbiS7B2EdzxrTG",
  "key22": "3vsYxFVAWBEUy68EzFW1pAgiGeKRvhezZF3DX4D9r7oYEMAvzwD1XLApvYvsTsRzDywVtbcvggWV2ySkcGWV66au",
  "key23": "4SUuu7UPqbNsbtrxb1NxN3fDgQkYUZcMF22s59vKNVAYDx8XgnY7FtggGcG2czXK2FhbDQLWEN3CwNaCYm5FzDfs",
  "key24": "3DkMB6xFZZ3uiXLdSp64KjcGeTYQmRvbnP5Yw3oYzDPimSr2rjMYP6R1NYy8DFmT9TQmzGZ6dypJDA1CEbskSezd",
  "key25": "25zZEX94HKpQq1mKKHHWj9TY3mXn67vaiPSr3m2rHGW9xmiEfcLs1TDeR91NF9UrNtEM4JH9jSqPE6STULJvsLUQ",
  "key26": "2A1D7YLn3DtvnjRfFNdsVLntrL3twFMhQdKftEFA5xNp3xu6FpqD38WMFtT9VRjM5U6xMSP3cgRAR3KWRPLNgz7P",
  "key27": "5wFRiMdBdWkWdM4VevMVEy6CYoKmP54dQ8YXTFZMXoH5Kw9zGtWzcWQWFy8QLQsnU2krMbSX87AgxanP3KnnTGi",
  "key28": "4J6RSvr2rt3tG1UKxuXY9nHzq55cEAcVH4U8GpxPGJorJp2KobWanjidScLwEXniXAQGnEt38NDWkujAoRvY2WRW",
  "key29": "Qx6JnuuDjVsNy2Lc6c9pX3V4ofp5nvVAzcr5oPJmfiYfH8CBNiGFJLJHhuyXsoJkSP6ssiTZ9BhZ6jd4iLUjyGi",
  "key30": "45kbCi9174jdbcmGtyWDtHCE3Azcwy9bfxGnPEM3jSARe9kV7S9h6DNemqdSrmqqGVrzJntJJKKaY4ndd4RD1uQj",
  "key31": "2n3X3z5ufSt8XbZKp89YQbfnzFtFwuYi4KgvqJVTfgoqxAn2eyFa6eumZzwgQdstvo24EbEsUdcrW9bsQ6pPwHoj",
  "key32": "22dk8WX8CDRvEtTyY9UxB9D216pLEPsvdT1nnL2gGdo3xhaHBKfAbjUAKB9SKjMhXV1RenzDhfDnXc65ZCphMosG",
  "key33": "2wZSz8r66D1HwqPUsRtHLmnMw6WFGQyv6QzVaKf1rTAD88fuB4pPBHLGgPTVca7cPY9Rqp6saaUoAE1QPFWwyKcS",
  "key34": "65Kv414NBmQeTqFK8t5AcDpwWWft4nTAdD5Vdo94vqA3frheb8iccSpJAjxS83iPdv6EhAsT1svQH32sqPDLYCJ",
  "key35": "5yfS8WhdeNHEm4iRgmEjpGdMFvrWxhG74FQi36S6oW39P15QbsHAmfTs5uX9ifP6o6RwaMgh6yeyRDU6vA4D7pxV",
  "key36": "3peAauByoZWik2UGxNi1ivXi9K2opo8rsXwLRKJZHts61guoudqQjWMV4msjYdkhsGppkpDzULMezF7yHMoT1Rwy"
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
