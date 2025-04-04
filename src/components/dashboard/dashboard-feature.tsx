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
    "2rA5JTaKKFAGhuRvq9ivs5DVfoeNFyBgtdJaz6fjcV8NHupegfQNQ4QQjvNEVzcyzuNrVCNF4Y42aqguzZVvU6K5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fTLm2gFE4rznACZK5R3ctooNaKWKsc8QvzVBG6faBmfJYzpV477kJDoHqnuM52Up39ShFb5kzvTeoyr3VPFheST",
  "key1": "36UvHB14gTzFhw3v2J7usyz1St2URDPHkLNw4NwvLaFxAiQMnbMAWvTzxiEYXoZzmiYY1cKpTHSCYf8KHQYnjAak",
  "key2": "3BJq8oHRyvYi786GXLoyncxWz2z4izXWHX8xH8SbZFTnNJYjvrGLoiz5oY6b45DY8fXj9Gs23CbXh4DABGbLzsjy",
  "key3": "3bVQoU7Th7vEnJvuwseUrUtiwdtAt16d9CJe22dJQtvF179vPtKLSHw3wPTieWteEhs8FEvANcqZa7aNVG88ruLG",
  "key4": "4NpoBpcR94wzF29zLUeszR3sTgzufbZBAgdDzafMoKe7yYU2kMfaaWrVAFg6zgaSsdGMho7mm2PJYXuD8KYnJ5Wq",
  "key5": "3bk8so9wxbnsxitmiTEhGq6CwPPbAToRUzptGfqgNgni4WFc1PigpPNzQyLqJvhUiNT5rJy3NMEcfcwtQY47Kw1Y",
  "key6": "38fj49WtT2RTdiCSnUp2unYG81WrRo9CuTzw63qqJvJQi8gLRr6t1JWRLDS4XhKv3bLB3quEriGcSam7YrM6p6t9",
  "key7": "2XgGoLsSDAtM7RZqmPXHHxEgEbrwi3iib8EX2dH5UWWxPxPAAeAD8TvMe14ngYywEHgcqBHZC4x4hytCd2FQtQjZ",
  "key8": "2oRSjjFVHv38B7T8iPUkfBvqfe445iCapuAvdfSXCt136rvN5qRtKhsJpNL6SHB7rteBPBjKt4ACn5AZ8WPL63Hd",
  "key9": "o9ZMYAnf51X4mqW1cBF77dsiyFu79wgExHMrgFvrp7o1cD9MWQWWVLdCk1g79ftGQiu8JvASbnVyEPagjSgy7RD",
  "key10": "2K1MBELLGFSf8wYeXw4MJkH8z2HJaTj7pas9YnRc4wmmhgzA2kHa6WgX5qNJR7THCrjHBj1RjCWLzU9snqRA3aAn",
  "key11": "2FujFSag18iPqobS9pd7PpfPFWmhXNcejyZNxp1UTZeiRrZ9HHsHJtHuSzkf4KoeKkXD498ytvVaFB2yZi88KDBw",
  "key12": "gWDq5YivXCdf2p75bRznJQAUukPSbtCEHMPvoJXTGZHSWiDZNsmomcwFfPoMDdKRac4XCPShapKoXsMCtdUeFDV",
  "key13": "xJZEtTKhrhc1tmJc8DHp5fatv9yWbNM7WAaYJ3xbuSNB1khKkqCnoFvSaDUEmK2CmACjkYAkKNiUfjdzccvn8Cs",
  "key14": "2WMdWySoDPnMEArCEZw1bKa8pU8nCTdvZujkkPtRj66d1gieGChevpbNZDAEddswuvNmcCYErrvzrfKCUysEydcr",
  "key15": "4LfJUhAXNHj5EiPaug1Ya53ua9MH61vaf3itNqQjpgb22KS46JGggcnx8fK8ALEfndr94A8ycAc85pGFPzZdazho",
  "key16": "3fJwWEWA3YMJGVJpxvRZTeSwDucRyfuH7hpEnpofyZEdY2oxBhqm5ht7nifZSJ33Mf52qkpsSjuCYGTaLw5gzwvv",
  "key17": "2Z6v4JRqyX6oxEswZkhc1iF1EY5GXhUTLLVCffHo4r6YB3kxHxke93rfjPDQqFXLpHxt8PFXfFCe9BnzM3CQTH3w",
  "key18": "7okQNiMEufAMirwHRNGkPcRvfKaUgLSBrDc4uEd4jYMjjT95ssAs9r3J6knXJXHH1Fkvp5w2VnjaLtJyXuZyVcC",
  "key19": "2oPwW5SJPtjJ1jUyw7e4Z1zzGXPDa9wdYGKxoLcv4HVxx4sV1zhpufMqavK1dCmEgxdsyRGUR53o3A5f9BGcDnTk",
  "key20": "hwzUFmogiLmTjRRdghtM7NMK8w24na233pDvSpSuiQq3Q8pezaqb9118mNx4dcWjASGthfTwsj9uMjMVV6KXEte",
  "key21": "4FbeDcv1D6ewyA7cQ388EPQLhQn1MidsDE539VWyDbyXdyTnjthUjdZJzErJF8ezVgXJWCGBJcLEq5RaZTqSN3a9",
  "key22": "3b6vomdJqsVjee5SLHqMt1xFFLn9K2jzHZPXbEeSRvFMRFkfj9s7inv6xtPRfXgF6YsyZqz5CWxwWeW2PU5NA4YA",
  "key23": "5Wr2jwHrXLmmPN7UEpqbinAGRqWN5uR5LMUbKegHJM4ExTyuPTv1D5PVe9hx48kMAb6tPsi5DmzeoJZrFHm8BRB1",
  "key24": "5NNUVxC3XngKr78LFLbDC4PF5n32qCrtmtdp8CNJFRcCEL7Lrkzw8CMsK2ZnHwEUdLDqhyoa57DKV6GsTKYXw3cq",
  "key25": "4sL8TDgQYMvaESMaoK3sGKbczrwrbok8Yt3RZeHov72qZzfBZmWXKiAvJiB6i4uShG6Lpyjxd6eydMBHQnvmT5iE",
  "key26": "kbQ7QUkoqVD9x6vn1XDU1han9BwxJU3gYsrxMMusf2EonFVM5tyjREfdxKKRuq6ySRvymA5XxgfAka1no7Wnk56",
  "key27": "tiGMfYg8LpMrzTv9LQYMMNZQzS5hL4WCGzRxGitWHogxLtdwSMYsyhRNeceCPejAGawiTVSnMXoznwbKuzUsc55",
  "key28": "23pD7Qk33MLGkXkXNgmut7dso9FRAosx33sidpF5VEsaaXuDeSGuzWwD66pm5pFYBd8L9gSb4TtFdUpirtgrZ4au",
  "key29": "4VdL2Ay4BKFPfFPvii7JhWv83TB1GxYQAxRRK47a2Rjkj2TCeQFmFw66cTwntFqY5ufgcD9Xo7RNoynQmAG9S64i",
  "key30": "64MZTCfXedoerVTWt9jDafhFbqSCro1xUoYrsnJHeMJ5pdQowpxKz3p4wU3X34s1y4xPve4F2FjmGkcKqjDWt5Le",
  "key31": "T2ad6WYiaYfJzi5E4ay2K5j6sxS5qX7NrySLAJz3EK8fdYb6NE6n4pEcPUMF9XnaTjfkSBzS7s9xf1zqMgZhGPL",
  "key32": "66j4ssq46f4jK7PzTzqjPHenzcdVEMgEfqbXGA6BU4JJEZ7YqHMHkyvJYcm8jHZPjcwauAWjLvjxg47srfkwYR25",
  "key33": "31bfa9jGu41GfL7kre93C8mWEBHjm1aZ3puizfoLfqALQoNecfo6AaV7Hhnv7iJnuTjzZeB1EjLVnGtyKbx3furh",
  "key34": "32YQjvezDzFmYmvxds87Fc7aXcDrLjVKmmfLcPdPrVPnbGY9WYa9NihtQcn7h5KNhdYkvPwKyLxfnVkN9Gr6QL9m",
  "key35": "3Si6EgQtyY9BH4npmRnhumze3wA1BEUAZbRdEngczY6GN828oAfHmA6DYRQ56P8EmwDRiJJYdrfmZdx6m7nYPKTe",
  "key36": "4B8QvnPHuPit3y84BNv54RXmNKfeoHqY5orsPFMTvh5wJoGPsA9aJbccqpzFRUMQsBUVAzUwL1bawPyqKb6nMsHR",
  "key37": "2Q2b7uwmtbSjDQvRN3v8eTfXHnVG9mhcgXnr3ZxUZRLYFkF1k3QnfnTgv2Y111mEtqPPMpL42UvhCEphNe2uW2kw"
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
