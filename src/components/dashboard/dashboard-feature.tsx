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
    "5z7f3J5nxf6jAtojSCcm9NhECYZPdVJewrr6MazHEBhg1Ne9WbK8ZgXyB5icHi2qh1QC9ZXTGf8djk1GwVD58z8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MwZFcuKLj95xiJg2DsrEGmZsb9S9N836ojZ7VrvQxJNdq75ELmtTVx3GrVwFxV2KUwQNQuKF3fiQkfRk6Dj1ttE",
  "key1": "2DXA2y8MN5YnptNymZQiyFBUUuJRGrH7zER58mhUUHAsGjUsv4aRVVdthMPHCboVLDdxBcHofXSFARTghK941ViY",
  "key2": "5h4AoKLnZ52xFZhHTzyVasRvhdhdH6bWw39u7DjNw4XwvwmuutEsaP5raaqNttPPWQVe6TnpLboaVEBz3wj9oEFk",
  "key3": "3My47JbRwapAgCKBaZEZRyreN3vVt5g21N3UYVSdDmGFm4DNYzdx8piMGjHV2M1gx8KoYvaFedkvRUNgJoBoetJ2",
  "key4": "41S8N5CfqqYwUyTwUDq8nnAG1yecK52ynY1yASJY44DC1s75DrvuLVQ43QYAYowTeBnKGKTNRYcCeeaX8TDtfN1L",
  "key5": "5zxRop5pYo6Ev5BuDc9V1EhwDqRcBR5h6G15eu9GJuZ959NCoG4ZP7veayeCpcedxGFwcypsKPYqHdS7w3mefBkY",
  "key6": "2yKXhKZhFDY2sZ5fXa2gmmfDpKiTG46VvovsDCrk3DV4gtkXDnPsYA9szo5a4akFCc6ZSeJrgMeBTwCScQR8Uhqw",
  "key7": "3FHSDUE1ZDMN5A5X1TtQNZxTfQ3NX8927Vo7m8k9nq6eE5UCYwT9Fj8d9qP2V1Y4jnVpzCH1KhVdM2dcGkExR8LK",
  "key8": "2dt7A28Zx1VKCT53tov7yriRCioA4tf5VW7bNTKDL2FUbCftCAbEYrajFRRXgYvomzE1xir5q9TyWuobehV7H6aP",
  "key9": "5Hu6xs8Yew3pdTV6BHE3U6zYtToLa8BzXrVxeAH7mFXqHxfRs3GEWVUNy6FGfjkVnnjT2XXP9wyCWUqqykqjRAaf",
  "key10": "51ui49QYmv9ANhZTPPNy6Mu3giNWRddieuBJPRajLKQeYpkHb4pyg56fRReMJuhHkV8wVF4xkVRAq17pxfa5h7YT",
  "key11": "5tkNdag4CbuARhuQjNjDewseVMNCDEkLSa4ceNA6u4bTfKGjh7XnVRTdFAqctkNfGN5EjVAmzkS5kFyCx6cJMvAQ",
  "key12": "2PiJMue87rftVPwkdYXzEXDG97D6QykgFMXCps8WnTHjf7UwYzV9oSEAyVC9zy1ppgwUdDroZ79Np2JkL34QpDLa",
  "key13": "3ZLzS8CMD2jpzf4CBxzTfQ2wk3yfgKvErDzLCrXMfpa22W5si4L5Ffi5HuFDsTpopAXNJtsQA1ZfArb2Pmn6CUgt",
  "key14": "4rLmfpdPHbJiB7w1DLaAK99TNfPx5xyqxq7ddXPFYWZAxVaWnnzQhAZq8gm8Nyvw75PSHZ34YSZjmC789sGKoFkM",
  "key15": "59yTWGLzaztQy61sWdvzsNPL6qBpCwWgBeZBrzULJe9ZWRJ4NqcBsbBCBViJHfTGyrRJZdAp4EsFnTMcVTceWXbA",
  "key16": "3pNd8jbYTzxHQMjuVrJTPJdYEYCPE497uPinDzLV2z3RKAmf9mp2Sw4xSZB6esGKHUNsXKfL8XYmLL5HVVyxkGgC",
  "key17": "21C5Jet3jymQ7zxujscAQf9HYXLoqBVbxPysJECdUedWMHLeSmaFaE5qn2YhKMBHsTx3kadUYHu11zUT5SXHAG76",
  "key18": "67db8Vd92yAKXgRAXfgiJSTwcmnupm3FoLwowhwhhZSkZJvx1nizzwkVfV47whreAGYm5Hqriv978w5P2nuT4xSD",
  "key19": "4AQDzZScg7M9M2YcCDkqkcFZxoC2ej2iFxCLg25GVGbdcxcqR579bQYuuevDirC4MdTyYesThpkSvtFVJdkWctQu",
  "key20": "4ed7MMeEPkhUY5giYdhEn9LPU3ngsBzxiA1HB6a3xDyzxvjesrbX5Q3d5Qzw8sMsoUi71fimRoEjRbJ5UyABuqsa",
  "key21": "4ofPAKTWE2mDVeuiYsvCmpwjcAMLbJynGX2xjDufsccT9NzCQRRMfuQUquZNpmXCz3NLevr4QTtPAxhnMtetjvkX",
  "key22": "soqi6nhZVLm33EpPUhgtzfFt8FaV59rfXfrgXPbkgSWd1VUPykBk1SjqvF7iZBBxBQ2y1kfcA8ZQYAtHEyP7Nr3",
  "key23": "n4nBEUDyReT8sbCYCkEorStuSPKG2ytD4nDH9GWbLR5d9J7UzgoPHQCZWobAR4KtHRmfU3Z1E2CeFFMS7icm64g",
  "key24": "2fwuvCYW1233B5nQDLmP3ixYjWH6uHRoYxp2tEyPU5LwEn88ZAUDp9QMPGr1w8kfLE2WP69k2B3zV4dMgJZrThSb",
  "key25": "6622z8qsB5LAHxHt6m5ZWj7fwUsGtpHYZH8e1xp71Jiw86ez2Tsuo9vc2HKNVupfapZB9xW11oPKFyQWAEjBgzgK",
  "key26": "3TLG9JuGVbyWSn6ytntrsRBz54EYfh5u16wdbvtwvsBJyXoKTTssRSkbNajmuYJtjmjuDPbmdGSqNEE89JrSZBVR",
  "key27": "2a36dELUafHfYXfBHa5By4SYhahMxcYBN5z7Cm5EDz1svzGUjUoD4tUVwwBCFwh4ZfaYVvu2CdjSRaqRnBz4n1GL",
  "key28": "4DoZuG8t28bxGQfaKyeDKtqHHi5v9y2gaxHbzdiWf5RPLgHm3QibAkHYP7dNcr9X9ENXcr2kaC3YnHYxXRST1axX",
  "key29": "4Bw79YYTXM8zWMKbh6RDwR2qv2Jx2YDzgfgtpiH1PXu8jKczUSmFnqWYaK9t2nTUjKNi1t2nMZfit17WnJ9jqJKD",
  "key30": "2mUTdm8DmRLmAyvLbKk91QjzDNYWPau6apYgHvCjXKEdJbPv3KYPkKJG773sCRLosSHWeVnjzs2c6je7NiBnoq9Y",
  "key31": "2nvgLuNGfLU48y6h8Nvhep97A2hCPGrnTRseetTFTdJFY6zg6bhCFEGieoQV9ZVbRNNcQ3PPjwT47akG39uN25YY",
  "key32": "58mZaLZaJDqpzpsV2U8kEqFBJaGc1GLn57iozgT1dQUdiCKGaHbbkXetDYfHiJuHk3YUcCsqyGTXQNQGKx5TrfK2",
  "key33": "HDQBw1vrga8RNyGZVBktwtJSYbeqVZ87stzTuLnDFdngk6UJf8YoDwrb4GF3ynjUJctdi6u7Sq543vcjasLdGNZ",
  "key34": "2ZemRy71vgN6PKAKhJPn8QodpjVKc5Eg8mRzJA65LzCuYEki7EdNA9NDD7t5TdEZbTUbuJjRn1pjPjUjKrffShhQ",
  "key35": "3XiEiLoPKWPef7TXmg6ncgaGh8XyF62FSVLctHTdnR8Q8DarGDb2wYJPz481ft2qg3UX6SnkrCzrHDh9fp5ug1mX",
  "key36": "3mxGx74kFef8aVSCFkQH9HUYMBeQJ6QHsr52Rnp1VKW49fRkRt62K7hQvdksCE4kZuMUmfbGR1LRqS8L7H3ZLz2a",
  "key37": "2k3v9RPhhKdKqastWhLnSC4TLbpczccJgKHUQUDHmXecxGCKB7AAZY5goHhj6BdHeh4SKxqkCM3Nk73stNKFeNsN",
  "key38": "TzuCFZ4zKt1MLf7pfY9zSanadRM8sTwSvpgsC6biHAxwvnbYXPFoPeRjE51BiduR9SSbakPMvYjmpCTYoQPvh7c",
  "key39": "5zZmnQgWVENnVBJqx5KCb75TRKpiJSVt1iUEs74tYwjBCMwmJDHmPZnrmS4BJPzh4hL5pY4Td4BLLr4CpwPvChe2",
  "key40": "4M19zodybhPuuxn22bk2sKcRQZJ5cW5CkbhER8ZFv2oBF6ohgmnhoKhjs9rHzQZqNgxpst4sfGsxG8WDjxn2BXxF",
  "key41": "2L4kesKxwn3NfsuwgtXt3qwpSUNVN6ddFQkYaupVgJz56XhFnzrfajbnbnGhyd52FuM1C4HcZMavtvh9Gx2ez3FU",
  "key42": "5zFLwsvgVu3zfj5EKJRx9v1GW3Tcut8iNjmxxdWrW3pe1298qbXTpTdf3P5XKwdNe56EiwBz8kPRn64cy1iLDgq4"
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
