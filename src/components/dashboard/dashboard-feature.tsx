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
    "5kJ92zVAUWqEoUbaMrsda8i9dFKR71GV9f5htDFyGcqhrDJ1yBVobGYuyR8n7cAsQaPhVKm9Xy1K2DMdbo8KaaFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W3VJn3CZ1JRBgWSC6qZmR4EzrQeTiKpRDi71xVwJv5zY96XfuqNMDSbWHqGjFMbHnPKsenFNHKWJQjpzSscpgxF",
  "key1": "3A9GdSUexVHq9adSVKm4A4hyFnjnGy6M5zb1ES7kG5ALijDYUXheiL1dZiskDDxoSoqcCVrFWVuA2PXEdSoGALbZ",
  "key2": "3jj9p379AhPDQFwfMiuTy26KMJZ4finzbdHZvL2J8jvqUJVdGCNvaG739Lucb4VJVx9YLs9cBkWQxQneYbboSNKw",
  "key3": "3S1Jsi7sueifysj426TGQvqTyaVGgyYU9K9zKpVuWQ1y9M9ehrd3L3M4CTPcpwZMNprGPqSZ2gfSS3WZF4tW3BdY",
  "key4": "3hFbVzzBdhKjnFE8MjNjxmnGN34HPiZoFn4MhZfvht5xcudiToxvkvNr6K6eGUW3KBnDW7EfszedfjSq8ghakTcT",
  "key5": "21a8r9wNeewAszfAbprpX5ohhdSV42SSTN9eiL854dQ6hpQC7keC8tRfMmjkFH2C3kpYm8pezd1oNksXHKmrhpDc",
  "key6": "4ESiDavgD2CUGr27n9QKpS9vqk25jgcpfmt84PvztVPRWgxxyebrKaRBNyc83XAdUN4TwbKJiSKddXzr97rCcRMY",
  "key7": "4JgY3GJSaG3sp6ECmXxtkD7EVshfnMc4hsNepT2zbh8kybsqWi5bmibovu4meWVy5rQrNKg7RhCcH71nXxJxA5iD",
  "key8": "4AS2SJA5VqmAt1c8ymyLMP7FykBitMF3dNpLP8KMCARi2YhoBFDPmn5D8GaeBoaJ1kZPE4f4uxh5iabZssBpAC4c",
  "key9": "5gAzjBrWEeLcNGLsL6Lz5ywYVEXa5ZVvupg3DTLaJAx8ksVwibBuS5EyDJNHucVEceHcSTEp5nkMjYWpGGJbTSbs",
  "key10": "45Cg4c4zZjtVGZs4K1iQG7PkcTijoW6rFkwbEKc79kyJ1ukAnbs8h5jbdjKzVSXB4bX43cPZmQMkRR4yr21LYZGf",
  "key11": "3GTBxjiuP6Mi8Ayx7gH45FGDSRWphuaWgu4Zmye1LumRdFDgRcQ178Axhq59YQsbokAK45xa8gjrHeSjsokbRuFB",
  "key12": "2LViZKBaidBGJHC9DiQybXxWyKsTBVVwwHX2iJvwCkTqBCQ9B3pKqcC66YmidnzUuPv6ep8NCWgyPpx1PexBwc2Y",
  "key13": "KyMKUNN8mFEFherRhtAaeSvF6P9t9BggnT2fho82jDhBk32KaKXbQgkpK6Hi1iMmd19xfBiVfEwEEeB7GPamWLS",
  "key14": "RcPFbto9runnXCQ3Monn2JcjrddgzavqEsFjfoYeiwij1JDDvopyK8dWHeEo41yxmJK1Ln6yget8Tj6AheT6Ghh",
  "key15": "ad5XQAsRnh316YBnokENRf62Tv43bACtVFbTA3y8QKd55wEp16obCgzQCgw8mFAY9FxTHkwpisQoSMyi5umc752",
  "key16": "48gA3gFAfFP67GZHKL9z7WccyoavNK5W1wsAmiaTb9F9uGDkErymKTtZfamcFBk5QR7n8cR9LjAn46HAYgHwsbUF",
  "key17": "2PjH8VQsRxSwoSR7jqi5dxs8ZvkvN5DM72xmbVxfH6qHQncfMkPNSwhE7FHovbYjeTZiDgXUZS1ZEDSCMGfEDiFt",
  "key18": "29wdrepUE1r1fmM5SMLGXaucRpMdFUcjePHGETiDWCtQTimqTPjFYvGEhGGq9ZXh1SXdUnxpX5SE5cCSbAQkiSdj",
  "key19": "2Ub2LM4yjX5DrRhHSAYd3ENKVNSjW2nvic4w1kYXduScPDpdSockN9QYyoEUdSZQhXMJikkozT7R8Hw6iXzz8Jdh",
  "key20": "48RPFsY6jYg57uoj6JTTqtpLcSosAiSK3qvNndFnkFoeVtREHozXY92yCF2JMNbatTTTTmUTiEPzLVne7ssfd3To",
  "key21": "3bLr4L97Q9PgA1Vn2F8po1y41V3G5zCKoqx1jPwfGxyfvCewEUxUjvfSrGeK6Xd6s5z4ysqo3AEZDNt92L4rHXzQ",
  "key22": "4HudkDWiLkMd9j5avjY4a54mFUsrLmZe7CMv9VyAuw9dTzHmPGPeaXqWgqUxKtvkVGatRNY2tskk2i5r3oRY1wR3",
  "key23": "e5GGEiTkgZra6X9enGoYbNamrbbY3kceWGs9Nkv7aiNPoZa3Nv3GphBDU79bc4kFN1EdU4NMyAMUfJtA1DM1zUd",
  "key24": "2N75mZhN2hK9WnFztpVQGQNdmyods9fF6koMAGmCwxkdCU56n5AidmgqzNoFa3DcebfCqZ3M7sAi26z5GHwGxA6B",
  "key25": "3YtYLrmcg29W5tr6h3cLyVSA4xgULjv1dunS6gY2wYkokGc8ffZmxVWxrij6APszeK7KXVAge5a9s7hwwcppZwRh",
  "key26": "3hms9SVZM8DBLGjVs3vSFchFdLL36E2hHgEEADxJmQ5BmFnBGZ26E6jZP9GFAyPxP4zuH2deGjTDn2JHETdk2oKf",
  "key27": "3aySpLUC2xhwWUnK3JxxVaRgCoZCmBkuxNH2Ni7FyXkAH9HqjvjRzyPrpeQesKoMwvGL6dU6DbxSztjB4UeifMAm",
  "key28": "4z9QGnHdo1hpsWbsFz7ZDtVTYENbe2wmDWficgV628qaF53bDZu4w7iL6yNcPqfYxpNxfyWKMwtkKsj2qH3PsLj2",
  "key29": "4BEncupDbmgfXDYURYytUKR3CEBn1kMhdwVAEnwLbHgRHvz65vBGE6PRsQZCLZFDiaZ6qzfXvZRziT6jLS8FRJ1r",
  "key30": "5DbkP1Fzu8g7Y7wHbBhKpWPsuShVVyUskCo6FetaTpGziwa6y83So6xcQ3J2vcoanedze1CAGPLYrF22otpN5WYm",
  "key31": "3pmUeqDcGSHAWiVPKZW8cRbLmXHWgg14rUT8B24qEsnLs3MNepWPtSWHURhWXYssxdYh6qhwv6TtoRQZyWBkugDr",
  "key32": "2W1UQEMasDnKscUyoK9s8se6y7MDoh9ALuhAfP8c6dFFtinsNVizP4cPWfpSyKBBaJ7vasH6G1nwswb4Cj4JQMvi",
  "key33": "5BWoQPqT5YtHUpZmMyuTZCpcXCYSoSYNQfimk2hkv8jFEKPbf8WyXAYicWbnsViC5X3aJY99iSPopWfzbiYTXtAT",
  "key34": "5khcsyhsQNBbzocapBpKpsZG1FTGPYPn7uRsVVvC8aWZ5FtrdnUX8zeixrbebFLPFM4uVmyKCoz82PMVZA6cwarr",
  "key35": "5z11b9sMgQwQbean2eJ49t7CF3MfNYyJjSAcNLB1WbftQQnYb7WhutbSN218r1HwZePfxJBE4kZhPmzpWwd2RP32",
  "key36": "3qjEtqVivvyAB3gYpcEAkJWY8vGcshSEFhz48pjtHdKCuSHEPsc4csCRzyW929T8c5cJD4nJE9AcdppLXWzVmoFu"
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
