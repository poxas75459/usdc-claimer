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
    "5NyWPS6KCfPtfELYDoDtYD2bwUjAYSL3gaE6A78acjQKUsuiDFQR6cKY9emYcZb7MzjUAPuDwMQpLxrJjNnyNBaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MsCguRs2h8xrbe13pNZJvkvPyUS8zmqzrcPXjZq3nzzcmNsQWGwTXzXktMfADTaJMZ48N3QYtw8xdF2pdCmqRdW",
  "key1": "2bXgoo254Bus4Qij3NjP6gKqTjHtawLfUwxGocHVL6KgkJNhYxFHb197FChStPndkSTpvEhUx33yGQEYYyyKoGc7",
  "key2": "hs18x6hVNXRMdomqQdUF8eyLEmhfKmPo5B99Hed1TEkgdddkqg9k3bo3zvCy9B32A7LYVs628fRqCeT16tC68kU",
  "key3": "urKQiftbTZbKDSPpVYWuSLBRmaZDX4ysGEEqtKGSdVnRnE2Z2Z87ZLMMv1SWV3bkn9iBtLpgL9M3Uq7gFuguXX1",
  "key4": "R9uMLqrNhGz4AJoThGqBopq8fj72kyQim5YSTBP2ubnQuTJS6aVWak9hH1iVpa9wU7QFPjF9k3SASbYpfkKuSH1",
  "key5": "2KuRER6ojRTR4v4pcJrcgkr9rDEwdqfLktCwtZhMn9xDL8xw2nCPTu4pfpyAJgBk1SYf2zGonp6kt1zTHaqmiCpa",
  "key6": "36o26dXKX3ErQeit77vb7sbFNeeTJjD6f6sUx4Lf44ysjE9ncPf6h4ewNMXB9o9xW8jxcmfKuD5H8vHXDBU7YxxF",
  "key7": "4Fe2vJ1Ef6YNvPCDqHgzgy1VSyKq5V13PTvghdhP3CLbh6n1yR1LHWhaLigZzWJo34ekiGRebUKNiN7FXkMBjDci",
  "key8": "2mweQGM5S8Ro7gCuYQFYpSrAgeDwduSVtQ1Zwxb8kS8HZVFiY8DzCre1KyvVDqxVSwDxSJz65GZq9o2s8fs8DDrh",
  "key9": "2oPf25hTcPxjx8Zqwa7Z3T39UUQYmyEh9CfQ7sJYK1Xsbv59J8cjspPfmTFCJJkvhtS67ZKQkWQonm1zEq79sEzV",
  "key10": "XSsgZ7cAdPHFXfLn9QvBsWh5pXxbZRZ6WsZunZX3qMdijCCQxdnV1ZJ4XjnbSJV8abhn1UWsKEXjmeZF5TxKfX6",
  "key11": "2ZsTSDp6JkrGfs3LsKnUb6Mr4dQ1i6U2BEb414kuBiQFVUgvhVm2VRVx2yXLP78rHmYYLXuChKv7aho5KEuxMPws",
  "key12": "45mfMzyTXq2kGnFpbjoHgVgkhvMCYuw7JPGc9P692sqqWdoN3ZfoG91114dSEDdSM3DvJRjmXy49uGUxukyKT2cn",
  "key13": "RpemSQhf9DSZvSXL2sd75BFwQwGsQxMzkKiJWRuqLA3Dzy6gXDqkG9Pv7Wz8trXjq77h1wBfa2MgHqQmD5Y7v9b",
  "key14": "5rfhU8J5mvtNby2oouzEeiikjJHPSCohLxEQ8gzshGTHAv3H3DyYdrXG2xUqLGqbA9NjBXTnTedprPDwCLTbQ2kU",
  "key15": "4vAB4CbLnxKNmiBorKrk11GRkATEL2oWKvgFY1R38iTFDGXAyMtdRtD8vRS4B5zTVcQJEfPJ33VcEPAL99r7hua7",
  "key16": "3asMSWrT1DiEck3cqPTS8fmcPdhQkZu45CTkZmDk6wraudMq3hfkaedCnp7kz28MAHDXJfvTNWAZMa9pu2apDLRr",
  "key17": "2QrG8YkK5NYEB5rV3z6EcGrbVjkiV3dvWw29zwervU3yPszRJF77RokbXHTrr5sPDwBdMFYfcqBC8NccRCpwiCGV",
  "key18": "4fUEDdXEs118wsMtrKjc8MidPLxJSBYMkyFCifqBbDHGMUpz1tHoK6a4fDHsuzWtPxvRFokYD4xH2nzMKbHz3FBP",
  "key19": "4q4KgjVtRGeqoNctZdkGVjR6qgLyAb9TtXPcmpjupiJ4N9YDG2mJGbVg5wcEydA16ZMBWjsJUY45A8RX4GLgBSHQ",
  "key20": "3mWMngoMHWLp1yvHwUoVxqQVuUnZFAidDfMmTK9PCk7mAVputY8t2xSc4LMN4giLAaDupP54Ko4JhCRrbMQJN4dx",
  "key21": "2EBZVVuXLPgXu2XnMEz8n2fhiMYvCAQDCzJUf6CbJbA91BQJjb9R118dr4pCTgZaVDpxyQ8Retkgvg6Et7dfVNYD",
  "key22": "5PJLWQS5XxpnoF2bvP66WN26VNxr4PNY6VzH7LyXKqA1sixhvQ71egrEFnVSRP1e4DSWh5igMp1MeAnWLSraMPYr",
  "key23": "5wkdaibg7t13acnot6zJTfxEK1hxdZmjAznrE5giLZUVdD7qJiC3hGuKmXZwGrL93SiYKKeRFVPJsCsDd3vZ5SXh",
  "key24": "3uKV3me5Po9VZqB9V1gptq6YW56k2XRFPykTmkzNw5QPZEy81U5RirU8sW6LeWRjuZAUULnGpMNu4W3qDqDUXN4L",
  "key25": "4QataAxSaGnGBpeudoqj7GeDYNuUhm9NyGDUNzfctwTPgYSQDyFmt2AvdznHxXH7KWWSKyAduKxoLi2P6dd3aywk",
  "key26": "fJQz8WT5QYUi5L6gJyaW6N9SCDjcWZWgES5TSPSa8XjSNeZFXCpkrQarHtZMbU9S5CPLqGYK48ZPXd3tw1bDv3y",
  "key27": "4sqqgNrX3H6ed9Ry4cSuP31zg64V1uZnWcTGhCBCDNkCNE7aUDEU4wGeTrNAxkpFnoHAZFFV9AmaXymz4EvPBKt5",
  "key28": "2QLipSyBbMGodQ6qWXp5gdiNAcc9kUtd9u4Ntj5LLacpNZ8CjEyC2XiQ8X8LkEke8oSnc7rDcXaExPvJ2yaXC2EK",
  "key29": "utPn4qXXCu9Jr5Tk9rxTv9gki1PPCXJnx4pv9offieghPAjJH4N5hvo6EirD51BcedVNDFoWmb5XdVxNiWP9gry",
  "key30": "65jF4Gog274gwg6TY322zNon8rxebsYGWv8oeQ7KpK7Cz8G6pYhR4HwDxppVZHtDn1pckFaeUVxu9qahi11PgBbN",
  "key31": "2MMbxaytBUeikRbXLBcyJTVAiL3raMg87GMNDDT7wTYR58UyKLfMU277BYf4xgc78pDdu9sDcoBjCa5t8VvtaSS2",
  "key32": "4xpLevyY5NZBvfsTWU2UyzqDG8mwXcSg6oATcwSFioKXd5t5CHLTygUHEAVhmyNegJJcXV82XZo7eYCQWitm12Bb",
  "key33": "5mzpBk7EF4KzJWigadKccYn9p6wTJCn63BZp3XzgmThaHfYEfiLtx7fzHBCKe8uqy8ctTFTE9stV7xKk24FG5BUZ",
  "key34": "i44tcJAjzXG8d8YRUWEC3Cm7nirRYYi3fv6KZHy1MhcdBLiUVZuXUcSp3s75yRewU6bovcxfrH4BheNoq3qphHG",
  "key35": "HynLToNsTU1nDMHeQKErQ45rLL8oao5fcKw9B6zLcbHxqM8XCMyYE36PNUoMVKhXKCgp3NRqMzDzwWHr2BMukuy",
  "key36": "3axi7kDbNGVgWJ3hqRZDngsNN52AHTk1GUggBaEpsMGcdn5W7HdfSDjXfh86fePKyAhkCSTQfmdMzxPacuHLdav",
  "key37": "3GX2cU8GSdWg1hWzvMWnZkmgTxDMFdexfFE8EWT1kYwHuxyUro3YxSC41jsnsaUaH8aoU5xDyFk6dHEc1viuZAXD",
  "key38": "5a5J6mwF2C8L4xvENm764sGZC4wTN7rQSiKjCCVrUyW5S8jYg2xBGyWhm8CuTpMui8euFhxKeh33MRQBraB7Z2Ca",
  "key39": "2Sejw3u72BPf8Ro7TszsZ5crWWwPoiutZzjkmiqE87bDbMzTAioGDVat8XAYaKGbcm9VhgmmFR9iM5CfXHaLfK4M",
  "key40": "fu5up5x439FXMrfzATCEkBBg3E7H8GSAkHdTuZ1Ampk9sRNXqNhXsarXMz58zGTE3J8AUUdnoBKofQ6bPxTARL9",
  "key41": "aptcLyYbdqNsT6sUUyPnBKA9sJj5vyCDjf3UExMGyDQ6eNeCfNibiTHZpE9x9JNmjSUjLShXGWk5EsRPjipjemJ",
  "key42": "4Upz9B15QpYb9SfyYpzkayD78Cvg2CEfEZM2SMc9LwUuNZNRB5BuEY5V8iTLsq7jVQCcT4FWwq37ECBgTNj6hTKE",
  "key43": "26RhWfwG47wNaMv6fDcM8mjXJ7EbdNKqVaiZuca7d1vTdHHBEjyUfAt4icjhrp11Sm5X2btzU25K7a8i41nFrqnU",
  "key44": "3gVqRG1LUW3vAr3rNG8EyUcyc2xfS4HToC8u1QymdmsLfeoYspcYFzgQgAvH3uktNwDREX2L7V1huKkT7L5LpCP6",
  "key45": "5Q6VTNytdmoTXjnmokTtHoT1n8knnA75nxe9Xp4AQsvsg5JDzLBx42PhV2UH8r7mLN9ZY7ePYnVv6MP4kQv9SxJd",
  "key46": "4tKkTLwDkUeHttkyAuNRZ6zDkhPGaLhJr45Du7QTq6BYZUK9dgVmDa6Rq7Mtc3QJaYjJDALY84QVKx1GfvCuqDqu",
  "key47": "3yX76FSScCbsUKnCDH8kY8jxwFHLJG6D7JDk3bcXrjwxR1eRJfLqULVQ7EYKTxmQLES1E7HwFUJ9vk95dcSsmMNu",
  "key48": "5TfxoDsod7wU8oZgKS11f1YpzoMCi1kMRunEx3xh1TuT2cJg6SSeAH1znR3XbzqmSzCMzSHhEXvRphNXev3XXJSr",
  "key49": "3ztPZfuaf6BrZEeWm41C69MygqFMGmBWTotwbMFQsNKXk7tkzQNxHarEmGT3kkWxxDwCudkTRXDQNQmzcn3csHpg"
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
