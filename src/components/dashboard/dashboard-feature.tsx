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
    "t4c61St6yKK9pDShWdZM6YEJBUuAreGcuKqY5QhgcAGdU5gQM577rL9QKNdJBPPPFbxFAm5fxRVUNR9tVrKNTGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jnBLi6Z521LtQBMtG4G26GREkCBNo7es95vQJDPmobytJ8L34zeMeb1mDMPpi3TWCBWeCCNn8G5ESN9HdLVS4pY",
  "key1": "m6eQxgsxyotndVwkS3f9KKyx2A21q5X13AfvVeeyCQYzg7wwY9DUjMbd5HRUEj59hipGfqhFRN15ekx5JSnPTft",
  "key2": "4oUbxSNtdz2B8uUWFJ8b6yUwMetQjwkzNPWqEe69y8Nj3G9v6SoFWPNe1pYPRsTcB5nuSGHz8KVTiH77EkkPULWU",
  "key3": "rTDmN7Lccv61xJHUxh8bAsCGw9hfzdNoNne8VWVNUB3sP5CiDxgj8hk79szocyXfdQu1kzM5YWKa48r6uJYmj8t",
  "key4": "qrCEEaZNKJrZzWCvKjh1RATgK2nMu6dYJwT29hcURaeGcTecpfX8QP8kjKtfCivjDyPGu7VZmripDsDvjn5R8Q7",
  "key5": "3cnt6U1ePp4SKGByx1gBPdJtHRV9R3AoKnBbk7TTH1azMRjyMrMjRurRGd977YLctFzhoNoK54yUDCQbhF6YPejF",
  "key6": "2UEbWpV84pjM2M5iBAztp29QdQeogdNeuVdz27hm7cQ8JjrehS16Z1euRRUtUXVo71VmC9KKZAwwkMMv1dtj9bBR",
  "key7": "3gCP7q8LNM4DgWSyLU2n5TN665uoB4DrT5nw5dzQwnj6is4GshyX9Jxh91XvZnz4KUvr2FgbDi7VorG38ZrrPdoY",
  "key8": "4J5aMBX2QJ7CmjmQhbp1axcuMhmABrDVHhct4CdxSpfa6Hgua6WMdsAwphKf7HZBQVw4wFjMKAgpaoKfKAgG9XTj",
  "key9": "21zufwNtVQacunBwLJthhDsqqh32v97MNP2aMAwMXFexwC9o7fC4jBH9vLtTMquvrFA2fuk2MLty32DMwMHbpPQU",
  "key10": "5RZNcUB17CWXNcpMhMc5TFMq5tB7p3iZjAL8GK3KGqZTwgrEQuTyuHfjhozF4L9WQ9PPmLtsQ5q1CkbZco2dy21s",
  "key11": "2njk2fVpKHF2rMhrpPjBLXUAgxx5MeRefswmRAfQEXCTJjnUD7Z4wekZW7KFMFP9qDa5zXeLMtaySC9swZsZTt6F",
  "key12": "4aB4TVeNinZvkAWve5YgCBSjdJU4tcnkgzdijyPxqPBoLBMn4QhBW3RH3V9pqYquPTH4insgb3YVgw4dwRsyFYDt",
  "key13": "4FHg46KXDDg9MKLfCYzQS71ZaACo3Rqs87W4cVUNqFNAddcTH8BaCf6zHRfBjh783X6e1dyVsmGpn5axCDfwM6B1",
  "key14": "XvCftDdkHwxUVfwSco4jQNZZ4ABhAK2A1nukh83q6voyN6fzjgj3zzKtfiMuKHjyNpVrSz4xwsg2yNwVhSAARCg",
  "key15": "3hv3rNNGaKSbEu5NeMc4vT8TgTGXefJziRR3DPfHiRSP9A2NkQGLYom4UQRJboFbvfuhpCdEzapBi45XTKe12T5q",
  "key16": "4cW8J1LqpvhvyA2uQ6dEa5giStpwmwoQvrUtEiqtyjqfKBavWg5sTGpCmRtXk3UYFBd9x1hR1jp1YeM5ou3CV9Wo",
  "key17": "oFUgeGyfXja1a1zUF7yMrnLdvhhCEpZ86bQFkwxsXeQokN6R66hKTMGNNtkxR5hn8UAKrSkN8pq3wNnwwtPRdto",
  "key18": "2kpNZmipY58oErSui3a1dcvT397Wwax9UxD3VbqxEgT5YTsVAu8g8xpGE7iaeNBs5W6jbGcnGJCxRihLUpGPk9EG",
  "key19": "3WDvSirCFAhyjq5qtzAffTHKrWSQdumDFdLQsBcg9pr34Ktezg9w6iE7s7z6TfWngLSqNG13tBMfE4jg6MmMbgm6",
  "key20": "4pDCaZ3msmpmKJbmUPG9Kqd7TkBYAA4Jjsw66R3crsZgq8nchuFPiFwdjAQDcBvgZFCsZw4hMkEkaKx5nuCjFBT1",
  "key21": "3wT87dgDu6v5wq89ffsjwFrAUQNde9d7yfixVmtbH6LrizqvEkyDPkhNn3gubRQBbq7NbpSNg3W9mU3L4op1EMNh",
  "key22": "2UtHHYmJ7QWzCKNnhWnSsaDFtbJMRU6hJMFRnG9yUDM1kdtRmdPxGZdkay4LKmikpCxZPnthWjXBcSi1iQqgLbL1",
  "key23": "5HanpymkyGKQKcY282WahiEN9rMhu6rNegkRMrYhR8xAa1ZwcmdTdLKnRCrKAyzv3vfWDLVmdAboLhkiL9oxgrmZ",
  "key24": "5LeJH4EhmgmDd4doVcpUwCH7Ec7zcvUDsfZBAKAASX9WKWHqNpwNkp6o5LYdD4gzhLxUS5pZPJMr9xMrxYLAWCC7",
  "key25": "ZJVTWRgS3RfnStopviYiuD4CXKypcMdkXtv6xkvBSSDS2SKwcW8DkCb7fHgB7emUy7cpMN2pH1ff1c2yaKSd4xA",
  "key26": "53fB67avBjPMHuBGHcUDYTZuAsN3k6WyKRupsuugbRz59i8twFecTxdNiENNd1AguXaAUjmFFYa74HVNrKqM1ygk",
  "key27": "3ok4gVzfZJnN9TgCLjtudcs9P4xEcZE37JgcaEK37KLvX4AD2vS339QnoMiiTn6wX9ybNdLL3Pj9W3sRbcYvKdHH",
  "key28": "3LDCgaEUGA1JEyj9AduRhSg9UH245QxWHRg7kL8D4KA9aAa6FZSfhh5ZmZi4nLBYhez5qT3wGgnWfMPduKYUtWBa",
  "key29": "62yyBJ2BDVQSHaw3H3XwtphEbvaagGnVdmrGBHXtoa3VijK2x3j6b3yD65DGGgXR84adeBTuT7aBBefqwcz6DeQK",
  "key30": "5vXYFu4i6bCizpukZupHi4TNPaP9T31i2fcr6Bcetus1pwJ18pA4Sf1qitbTRGwD1dRTRxTAZDzh8YFbhhJ9zXzf",
  "key31": "2NJsuTAXDzXjDSBSGywQwu5gSxVjMEu5ajnM3fKuwXZkwHRAj3HvzBZe3x37uNfiyAPRaRFNJHWZcAgeiwvBAUsU",
  "key32": "4TqkjNKvrr47GMuvhn9vwMgBkCtRWnQpqYy9c8F2B8DC8TJMEv61LGqaHhzTddxiXNa2TmiGuEaUYGnjsnryS4Hb",
  "key33": "VmcMno48aU9ti8KTkteTpnkPjZ2UenMVT4AkX8oN8N8ALC2EsPnSoN4kUBuMJLK1xYdpwyEdKpNvi9xCnJw5tRW",
  "key34": "4Xw5wHCkJbUy2i6Lb87sPQEkvHywLvj5zDrNVBEt1MbpvJiGE9dAF27849n7K7qfhsoveVkDuWYB1Aa86ZouFdWd",
  "key35": "QZiPS28z7jfokGK27G2KD92Rb3J5hvQcduRo7MgXZPKkMcWU8qLJxn4jyS9Jc6xguiJ2P4wNj3TuGKfyA8tdiFr",
  "key36": "jizxke2fh44Cmu2xbX3pWGqjj3Z3p2qHbBAmrquDKXHteKgZEN7f4u4Q9eFKXxzE3QHHewqStCSKBXMGqTassxp",
  "key37": "3A1M4QMRtKWpS1zpRAcT1iGK9xu67y7d3ukzKnwkXJA6uUgqNTcmLzBybNKqXayzV5aorCg18TkT4f9EYNjnHqG2",
  "key38": "3fU3xe5M5jpJYLL6MbEMoiRsncfy6rAdnWyMueBvUkKwF9x7LSyq9D7E7RLeie5s2Uy2KUF2T41N6pLmRc4dErQv",
  "key39": "2C1rvjuQpNMUun5upb3yATUkruAyVHUFdx8vB1Lt7au3ZJD9dSZajdGbrw99Sf92zenc3sFujrNmUGzEUEBkArbJ",
  "key40": "5wGGvRJWvNLc7qQM4h1zc6v9fySTRdBg3f7H6TdZAuF2LYGgAucoseytFTFJaXZqeQ8WFAMuRB9FU32vZXmRt9MD",
  "key41": "5xi3nJMqYk1Vikbr16cuEDG168xEWMpK5NWe6A5wdBrYMJboNyC8KiRky9AKk6zaspCre1N5RG7ytpbRcug7k5D5",
  "key42": "2iMLNByEMTapgNUmcZ3B1qNE43swLS9fiPLQsiRuu87G4bAbCW64h2p1XPwAs8nUvWsPddWzA8JNpJSP2gs8p1zv",
  "key43": "63UHg4soiiFYvuoFSaMTVUbso9mvtCQLGqvENqTccEZoErbnofqp4ejSbUA81V3BfsSC9SbL4rt3TTG5LAtw8rTS",
  "key44": "3SsbETNedbsiVfK9VinXLwHPxsNjZyM3rg2baNHkLsE5jzuagkTi6Kcb4LQbmntHQda93dbe7As2FCqpFZK4rZWe",
  "key45": "313RhgSZsimiKniqrgfZLoNwcPsu41msYsDYA5jLzFwy8QJsus9AbcoGKAF5ZfkdTgdm82NrFovNgLGTsdd3eVqm",
  "key46": "5x8gDFZ3k2q6AwJu19XjZV6hKbTqN41WnEL8VsMDpAk4svPiKupK2CrMK7bXKpm8t4K1ByMd1SzWBbZAETdM4mCc",
  "key47": "45jBvtNJBExTuijpxmmzNJkiKbyiDQaXREKtNSjAZM9D8TdCesPhzBPoNoMN7GWspQJ8T5H2gnFYxh2x1YA59AQ3",
  "key48": "2DLNvu6xtuAxbwdH6NMoQr8Q71RTLUb2fB6U6QSXVpne7gKA3r3jC1BqvvK6YSwPYoLdhS67gt3jtwgPS8fyftdg"
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
