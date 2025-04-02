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
    "3zCEhsRoNNoJQ3H66sJQypaVpEHQHThTHqWRcrj21RAuZ2cTRREERH5e9MqHJM3v5go8KPh7pgeZHBvoNusDT3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sd1pVeRFiriAx4aMn57ySVM7hn6M9YNpn3e3xKo4PtW4yv92fBBymaBPikar7wJeGoACWUqRHADKiY6TRrTiEJr",
  "key1": "5TBdx9j9HZcBhXarUbZFRKQxt2hWyf2kWUnVga13juBuLhjinUT8TvkWmSeq6tsQbXLLWaZv1HCHW27VP9x2u8FN",
  "key2": "52oRRute7UchohK7Yi9EWTgHyfMfxhYjc8KAcQ13j2KFzbzfWizzXBTE2qGRECFSCU47K7juWTndaHfoqdiDra5M",
  "key3": "4jQouZtZYDFQUvkvDwiEmKAKrsQC2TzHJ29MfDitpjcUPQp4VELiAkgqF1ySvCJhUxxPEw3hHKVm9FjZSkqhP5eY",
  "key4": "2DGJaSwzMwqHUHft9gsWxEjWA1zHAKATcNen2wUryTA4RzcohHt4MHEMPaFz3SXrpVdJ1PSRxgwi28uZytfaDBNo",
  "key5": "5DddpPJSZZDS4h4ehvXqyWY5iFb9kkvQ97WPh8MhRUD65pPMMpX68qQ85GWwPv2sw44wVdDPtBtXgGzaJHtx3jmC",
  "key6": "3mtNXc3KdEpUpr2JiRZ8uHgCVDR6ZpCuV8zEimKaDxMzkaTibd6zURJ8HxVoKLPPruLpquoD9infhZRgy4WdcRxV",
  "key7": "31TNcYekT5chjEFhnuSnmrrqNL5xRwm6k44ayUFLMMmsswnT2ajhbSf6dP4YnMiD6anwpM5iK4UM4s2NKLqY4pzr",
  "key8": "2weWLgQbpuC4hyg3KRubjcjj8WhwNhbYjbnfRy72PoiiffbzJpy6qmEqpwjMYnpMcJ4HKaUAxqFauChCLDxdAnDW",
  "key9": "5D5uAVVnEXRrkbekk2eeWvobyB5M2W1Lv8KUhvDmk2hpfdWBLTqavGDzsEhbrz2HNcvFZB8P1q7skEhVxNtEVvDp",
  "key10": "4mEbRAFu4EdVbRizLZyWdoEhiuM1zXunNLAoYYVrs7mMu1NhMgSSe9ZYKdSbpiveV1qGNHkjqXRGMLkJCUSnm4vR",
  "key11": "5F84b8ke3U6ansgtHeNQCinZ7aabHutGu7hZfJZywWZKkGxDV7KeRt5vb6hHwZvspemswkQtpx14rqtZYo3pjsbH",
  "key12": "2KtikEpDgB9UEHSu1xS2z3mkFRoLJRg55ggAYdC5tSH7VwP3wB9Da5KcoNKYSxj6ptmu1knF4pR27XdUyJhKr65h",
  "key13": "2Hg5BbB14Ammsx2KrLm5TBb8cXR8N5DHnEUn4Jj5XqUSbwi92Yvfu8DU7Kg1EPeFbW1S7hPqVHvQ3GZoRW8xfwzx",
  "key14": "4yMem5iaxt1T7EDCQiJNiNpnYkedosYmYUKM5y1ik85nZwreQJ6svPTrj36fBQBBaYEEr8FXnS4vuLqj71LhBUCX",
  "key15": "31bh7nSmQ2ckKXZUQpyBfGMi5aMw13JLwUACAzTT55PEWu5fv3ej5AWWC914vDd5C1HSgqVL66ccrnRMLA1p8zhW",
  "key16": "21yrbyaLA6thxJffve4umTgHp7hbXwYkmB9SvtYr3m1aeZzB2uvJieTZ3SoapZJQq9eLaXBh6CxXbS1C4vx4RtBc",
  "key17": "3ukDRJgvNGwbTtyUm496oNb1ke6xoV2nfcZmsbQ8T1hndDP6kfFRu5sHSZCs8hGCHa9W69BNXMs3urukPDjY9pKP",
  "key18": "61Kmub4QonTTiQggC2LmawMVhSdmg1kyCh8BqpCq8h6k4nXxTduUqKnFAw62rez3fQ9gPVE87nTNpAhU5JaqZfdm",
  "key19": "4xsAoGSo1VveL9DXeQPjM9woo23Mv9ZMCHqiYiDwAqkmy5q5XTrobNXst2iWhLKAkmTpXwYjZtiqS7SuGusXhBZs",
  "key20": "4xTRw8LDifCDYxrqS8EQJdNj8FYHotp3ERQLtxdC9eCXQR5PYDVVZfR2EXsDVtE4wTP8YNnpibPcW9rr2nVToFCQ",
  "key21": "3nvu67EDuop5KTUFMfCtrLBsaxTqipYaKcRZCxuktXECWEetApy9edUk2sdgJATZ5hoE5etENUonXG6wdEAvwbur",
  "key22": "etEpZSuTq3fm1i23KgUQc1x22GrcHHz5Suihfx2RkHzir2gPraAR7JkAusBmW3c7JajBfKGDEV1FZzggcypVQwr",
  "key23": "3PRHovYzk5cXqmfGHLtEKCmNfsuwvZwLWSguiv15aGmmS5b3Q6LmzFjgMT6HvzpcaWsJZB36UkPpZQ7bRBatw5nL",
  "key24": "28CojppCLbc5FQzbhzgJJgWciSDW1hs7VsiopQ3MQHEgYK5apFr55AGda9X3VwVUPMbz36sH3nLBVkEk9seeyvh7",
  "key25": "KWmFhZeHzcCafHbAftqYkygcSonBtAa9nr525EicEoiQhsG6tnGhfvE6bXC3VvsFDe6Af5DBRy8VvhmgBGtjsNr",
  "key26": "Am5YU5VMLgkK35YbTPdzxxVJBxKg6hdh78dcu4FwawgAm17J9UvgkyPBArZa5wBuWnHMGyBibpaBAhbZk58n1bk",
  "key27": "b9EZCZn9LaJLe2ZRMZCN323EdaqoBSvEs2ciZXFj1m6sdW1Xdfha5xfxbdHvUiRmHBGMBsHPZCsv81pf8NEXXGA",
  "key28": "3iSUBZF3P7uGiLcPF5n29UguFWyWWxmFb2N179q3LQTf2ctfXAMn7utemVzop4bT5e21Rtnv3xdswyk9PPczsoor",
  "key29": "4E5rwitHcv8EXQt2r3SSS4r8U7p5SCUQJ5UZwzBMjEBUem7fxqDDrUYMM3zaK4oPFEXBBpHqggzxhL24QhcKvUFW",
  "key30": "3zTSDrzTCMh74D9jG9hEAmpUyYBVvST6udvLhCGJyYSXWiX2cVxRHPjNdJQWAR19axDRQTFr7cWkbgWMnUfoHymz",
  "key31": "4ErhZbn1qTHeVXYxqNPmFgBu7cdqy3VudghZjjQ3cdW7gTK5w1f3xrEtVXgLBZtyKnAf6EGYvJyudweZiqeUEhQ1",
  "key32": "2vGmG1xbtzkCcHQZhXdPmkuRhLCPSYMY5uTzX5cCNohJSB1Vh1smV2NcmQ7M4LapE7AG7GPoireUwruFWzqbJfu9",
  "key33": "5zwPTkW58tA8HC8SUX6hhjGq5jyftRwLWp7PhVw5mUbvXvmHSnYLSz3vdw9Ek7D6kYzGdK7av2XFvHQVPgiASxQZ",
  "key34": "3iBJYvCQe3vmbGpmHHkH3opWUYTHTfLRDST7LJc1VXz8BanuGq9JrnxnJpcXixe1HoaoDfv2aazYvZ4LtjTjHVsa",
  "key35": "4RfRnQ3UVufG5X3ZsFaFpmjajD8E4QCLbK6ZG76vHURqfDZFQTdsBhqEiiRG2AKqDYSXvKvqLrUQy1tUScKSxEFN",
  "key36": "M5UsznTchV7WLdsdatdN4Sm39S7geVsCJZvxSGZDXZBgwiUohHGRZFHpXCvXTAAtQze677UwqJGvdo3yNCHYp6j",
  "key37": "31Kr7fMnq1ZE4kjHmPSXfCANijHZYxWDSRgwNQCYao9r7k24oYE2Zuj8NDT5M3Ptw2PHehJNKwWTxLAZdHKqVPFB",
  "key38": "i7SKiwxaw1SY72swHvcAtvu2ZUNS6fWgCkW1SKDRjsdVSZZ4khQcoDPmCYyaizWgdSAr4fkzxq3Q2RbQgZYAH8b",
  "key39": "4koeByHCtP85xQEH6HU1tT7SR2JC5g9sFGz7si95oeS92uRavmytBHRKu5kXZ8QicUi65B79XZFf6U6cYNW8451k",
  "key40": "5wrfrWJqfes1VB18ZMGHMKCRytMYTaytgpRKL59AFYdS8izmdfwC7VPCaTfvcCf5LnHAMxv8WsMjMvcAJFFqSpuj",
  "key41": "5CN7jFhugNCj9hQkQZmwzG9A3Ba4hhBk4gd3GQW8Bb1B4EBWjRCderDBpRpNpLQzzCyvSV8ZpJjEHSbd1uoDptGC",
  "key42": "Lnz4sdSm4BhdYbaXjBNkoZXsgGhdjEAYpaZCFq57hoL4JKSuaNC7A7F8feeUp2otV9EMaP3XeoM3iUtAZaq2WLa",
  "key43": "5yhndMzd1S7sYfp7THxwKLHhcEpMfdCGARYGSeQzhkzPsPgGUoWvEdK3g4fYnYn7Jzqhzfkpu9tBwBtvL8QW2LSa",
  "key44": "vEUD6mJr3dq2crNs6LNgSetacw6bUkdpUTk8qfXZdmnmKM21Fuasxw2oZi8ytaFt4EC8c1WThhWp3g5V5KaxKDL",
  "key45": "mgQ8p4aHpNKoF9a8VpgNw4eDEeGpAhF8i7JpjDrmqMhyDd86HixNzo3LV163Lmx12BfTwYzepJn6JPjMjQkqAbP",
  "key46": "45EQ4bFoQjHiQL6QzQacsX8QEFb2obvhhqSY2VPYE8gs19vAd4octp3D4BCQxdASgrF2FzaH6VgPg6VUiF1uvG65",
  "key47": "5iwgDen6zqGeyi6oFp1S73t8wYfB2JqR7FXeYG1GssykgVQ6kMkgWXfsUFiLfZp9RBpqsyY8eM4agA9axpEDj2dN",
  "key48": "3J3YE4SH3pDoPtDNfuvmaAAGPv5MX6hDCs2DUTLCY16iQQ4TttBkkCMF9Dudr7DkDx2ZfSsXJHuBoKRbuHyCNHiV",
  "key49": "6CgwZoEC4ysjBs8NQKPQfoDh1P23H5K3zqwtKXSEACu3M2GUigboWXtuFfjn2fLdgdnr5LffEzMyTACAYQEUCc1"
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
