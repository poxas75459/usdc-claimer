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
    "YwLwZKZEtLRmYHFaTfTk4dFD3hSXqjnbavoa3pMWcjRmsnBWn9cZ2eHe9d9XvfxHJtxHpc9zDVBfaVFv8wQjwYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z4aCzkHmNaBrjN3BAjHMUZm1aMWgiugssReDSP8SUEz9GFoZ3FvzrF9JpDDsSBxy36NHEDRMdHiDBaryvxpiPrz",
  "key1": "21xVM7TdYKzVZPvCFBj3Qx9qNE32Yu3KqSXPrQXSFqERZCaqK8YT8JdTU5eE3X2w7gz9rWiLiYyKKHxJrSt4Rf2n",
  "key2": "3f455GJQQL5hKE7vB4nLZCUUVVeabd1v1czhTdbW3nc6UpVXBL3xyXcaTJqFtVo6bW4psvkwQE7FRvzrSW4rb58r",
  "key3": "4G8kZZv4hwvBBSDtvRxC4VFQEGhWWJeP4jWKewG5Wga1pYXMavsdhV9ZxKB3K7DzJ3nvrjWiQamRzzwquEtbEmw3",
  "key4": "3CMsFEXXfAufztDYbH3GqmvRJtyqRh9eTnAn3X8462qFwvySJsRDUF7RwqRg9jPcovaTseaw5YTf4NKi2X8bPe2",
  "key5": "4fZdMxBbgmSkzHA6N73dE1DdwHvEP7KiRJzJWdY6LRBpK2JNeqvsyjqXhqYf7MtvaEHXEHfAmXumiCF1UQMx9tR1",
  "key6": "XPJzuEgsX5ETZHXD94V26CCJgL5e8wmjM4kEm8ei4XHv7KVzGiYfBiNsbrzgBwJHE7DRMgf7NCY4HoCHHN2Jdev",
  "key7": "5mGRQkkj6tBv1Bsj6povWGPVYs1AGqEYtt4EH8BQBMZbLmZc6n3Mqzh5fvz851mho14dKskSSqurJPxJpQMnPwaP",
  "key8": "3Ft96HxY5kFdB4AYRCdLebGDvcHToXkvVkcMc4BX21vdw4GzDsc4aSg5SaxpoC8X2QuzL9qx1SLupRgZHSpbGL7q",
  "key9": "a3N1kAzKWpcta77DEsFi9rQcmmxF3GAgWqYnVF3zM15edNKNeqKbWzuWJNfS4aY5s5A4Txc2nCKkbGAP3vPLQjA",
  "key10": "5qJoWstwNTUi443rCq7uCk4faSFmzgDEBY55KgocHL3oA6o1LB6JEkZGvADBN7zjup8NXxTY7fF4JtVQEDTGoVkr",
  "key11": "2pmNjYsfJLHmyx4wprhNA6duuscp6WPbTgxH6Nm9a7jiPKcq12hUDmcCwGxGq4jLfrs84M7NDyhUy2vKmn9yDLUD",
  "key12": "38BxQTbQ6nWWkxTWVqdGQrvn4uizEtSG5vgAC7kWwgRMntHoGT8jsd6qSQPKcQ3ykgL5fdDe9vDrUZGo8uorvYHP",
  "key13": "4pseSuB2w8iKfQFziUK4xr3iQQXHxtUadi1KnQUYEaJSXSN9XDn8U257SGuDh3JPydCpXnPy5do4nTzxqpuXbCae",
  "key14": "R3LLhTK26uBkW2K5d1bLRVJmm1xdpTzXD2r8TdNR81wjB6fzHrcFRKfxf4HeLNKWSHyy1HWuphbhDXb1nj3Hx7D",
  "key15": "3CgJrXygQNmJ8omhgY3Yr9njWd68sLFJXmnEMRHhVUP78BzzJhppgLxTHnzR6tmucJEJ1p97cwVBJ1o2zgToRWtC",
  "key16": "HmpbCivgmFLG3pJmm2gktE7Cfdkt7b5PuHBVsTkb1petWWqGtz7WWJZc3k2h1M9cYHj3NjiFPuqbXfrsaMmiZJY",
  "key17": "3ntY5funk7QvsbvuvFVsGrJMgz6D9ngKB1PYEhRfiTzm4oFC5Btx3gLmFZdFaFQRtbCtBqncaNCh1BydYqzGH5A5",
  "key18": "3Rh3FXb5x7FixhfzsPdD9zUoWCoNMA5FnbR8Q2Tg8x2j5ZcGHuXaHt89r8FTq1DpUqbuXNpcRkWFtwgc6pfzAWza",
  "key19": "2uYGVon8saZtbyQnFUhXGPpNZ63NEGxfvRpEtr2iFhEAR8oGtZQMziuSs9V6ZNrZwgRaXqXhL4vkK4iPse3bQStU",
  "key20": "hbHvLbcTp7Dfv6qZR5qkzqJXCgfsCJdAdSXAdSBbBsZYYxyoAiuy4fYnEDaNdVjr6mhEg4Li94k7QA2mb6unT5K",
  "key21": "4qKy2PiqtWPk31ixUpPJTKUioWUEBfcC4VtAp87BP59sBxMFRBBkXhgMwsU9oWEKH4ivS12e13PL2csaXefFihA6",
  "key22": "VEv7CJ3HSVYEmYwv3ERsfjsdDcC5wDYMjLeM3CrDBzV9BAwM8XR7uYeh3U9M1RMS4vXdG9iX4K2mzWo1o4eooVY",
  "key23": "5eEGhw8DqDtQ9uGe87n7DApMtGrPz3U2FAo26Lpa8BFg2bU7EULJHsvHndmZ8ap54z25SZqsHVgpBhFs1sUkVvNv",
  "key24": "45y9iF2AyiwrsyoNLjH2Fht4VfSq2rMejDK44E3ZmDv4fwE4jsuZZ3xFKxRhVJXj5hdkYMwkbnbNAcEkqq63aBWd",
  "key25": "3to5X7qaQaBxZ7WdkyUE9JGQYcBQa7EhieX9d7xkTMjAzpTixJfhhqiPxnjve59KyxEEmZFcvp1qhGEBvKButZAJ",
  "key26": "2XAgxkkLVBRMjnHcVUk81VTBqGc6wo2CD5B3Sk4cV416aza9CYkTecp23H9m2QPiHJUkgRTPH5pyRHuYJ7Fwktei",
  "key27": "5vPToMdowyA5Ey8Nsv2Lzb2cEUJUbLSc8zxKvV2chm49cCCxFZ4H1cjTFcd75vM7RbPJLmwfgzoCHMB4xZNSrf3g",
  "key28": "5kJJWmVbX5xHwwNnpdD9z5Y9kARdjkon6i5HgXpL8JRakAN5gqahRwULQ5i6oahv9w8Cc6KrHxvtmMEKn5JfdLaw",
  "key29": "uy4nUzGmtiaxEdbxkqWWY1jURwTqe1CHv7nwhsstE2puGZnpNZcwsNqzCZhupS1vyQ1oAhvwcuD93onR7MSwKER",
  "key30": "51tCUktyyXEMkpuKGVSboSWbnAfgxvjPte6DsgkcvyEfnQbHo8SDYySnCWj9TUUmyGKs6N8VL1LaMsybSAHwFPRn",
  "key31": "2f3eMEJ8efNEznYd83Wsu9od1kckVssgmu9yrFSxv7uuWsRkXr2S4ZWWSGEKdaUSaaxqggCxxi3wJAb8JrHRtVbM",
  "key32": "2BcnCTaqQR8FRDuVuFYwg7acWnmsCMe5xFp7AZ5rcQ7iQjYJjLoub1QpCqcmFwEjL3QEXYpYLjmVUGkTDguzWCsG",
  "key33": "49y7uci7zf5hWencPUyF61YMnytFPKxJoaGjn6N3cysCz6RUZhhVsabz5ChW9EVqNvfKNRsaZFajsbtfGxwRS3ih",
  "key34": "5G8ZSZzfmTRzjF1kE31HE7HWK7xymcr49iebCksMMQRpjt4FEMaD6xcqSjUGaJ2FQ7X4hGSzAnWqhY3dj9oDfKDR",
  "key35": "24P1r2E8ZgurVvjuYAimLxV94DPaWhyWyVwmvib6KHZ2i5CpbHoctq16hLE924F7aDAaaSq2WUt1Ju2xMarkPSWp",
  "key36": "3HT62aAQ2n3JNF8fnpDFPZF7V3QPC4vrZNQY4HeCqV4hE4MuQtT8aocDv3E9AbADB9WjwDjSDWZ161ZySeD8b6pm",
  "key37": "4B3DgV4wisFEfyw8f7fkoYfjLZKvZ3hzK3qGPtfjugpYvCqPUzmCYJvbTNad7B9yLq6pGqguXSkX5NVu7DCUBqMM",
  "key38": "BuGEfJHstLneckbhLaTF7SY5T9NSthctWYJTmnx6PoRNbfYams7KPaxcJx9NhBQncpL3iAkM6UxUzXURyUF8fab",
  "key39": "25J9bPdZP9NAX9jPCCk3j8bz91aR4M98hgXShgx5n4iPVScACXcDPQ2s3hFDkFKnvWg51U8phGbLDcFEyS4Mtmu9",
  "key40": "gKDzb4TJL68aMnqEh5jh8btpjADLG8kyAWff3hhYj6RgVAWkwBrY1K7NSpXNLXfw8pdrwArDdEHFdLWSigRd1mR",
  "key41": "ay3Ri4t2uD9sYoD4GnTLCX7n2iatEaXbHYBRsncgntsqM72TYtzYTJz7tsrdFNsGZohkk9w6AKtodfLed9ukxGt"
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
