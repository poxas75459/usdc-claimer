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
    "66BHBhtfHVuWC8xyJPHUGx8ZU6rZajoaDyvZuj4a3syH5Eqkw4orYFrvPsoNhjc6oM2vSZZvWtYBigGEkiL9ynwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WGAzXi8qsupt9fieXQFymPP9dVVrUiZgPKAMbKKxaFrjARfCqzSsqQyTCjoVcxRjWcefgYddCBJuuerbiyx5QpH",
  "key1": "37Z9n7fAFcXe7twtMMQWwEwhK6VkmLBfvWGrnqTnEqTEh7J42i3dNz19vowrfH6VfV8KPJxUffVf2HxZsp7ykQ4y",
  "key2": "27T6w3L4JWZrSKrtbk9nAAjSBAMDE5HKPZeHeNGUhkzrezvCNcDgiHVfdVWYiWcxKZ66rjbfe6w94jou948hVExH",
  "key3": "5CeZB7S2RaQSkjjFfdwKY9QTWeBji1Jbvc7Lf69SVPfQ2oW6LkJQGftXp96k13U9PPihSBcTJWDJPXPuZXNnHtLV",
  "key4": "3AU9jbGSWYsFoXWuEwmr1eJumrAsKzwVHRKARAiSacL8q29o8EiiQkEa694XH6VfCPLHF84zkYKBR4rNyCPzXUe8",
  "key5": "29rNpGNaw6yYHkcV1mveJNN5zzWZHirGECeirpRdgfBK1GhebxX1pRwB5DA1CWanrUpQJjUqydmMXSWcFGqXWiL6",
  "key6": "4KCtDA5E626ShysekMDMdNKYRSxLpY4MzcYmkLpQ4f6cSFbLDKnkDXLu7sZmFuq22n2HCrBQ2gFBuP8huV49QNt5",
  "key7": "2M4zRrTovcKijCSQ34Kh1KKWvAT1LiUh5Qe18Y4izuodm4SDbdQzWbkt1nHbKuTGL2NpDBucW7VGyiMvFuKmWncP",
  "key8": "4B6QNKe6TJQdmoEWfGXKRJg9C25Kgc7f2TZ8RrtuTbw7Rfcu6EfH7CKfcEnq3aWKfaMtxbRa4rwBChfppncuSJp9",
  "key9": "XWxxMnUJrvL2LbdjjLUsfJgM3FaCw6cmuKQRSTJzaf8kXTZ4whmrbogPnpz17R9FutXkVgUn6mC9Pni31TCk82R",
  "key10": "3KsVacabgKoV7tkeDbg47MDf2z1Qkyj9HXDE3ryrKnAuKVVYfhqnBD7oYtNfriBScEQMD19WyZeWy95HudU8eV2K",
  "key11": "4kTqhRQyGNcppbqvG7MLPRQZXweF1Jwo7s31RjFyconxurFk3YawLCmXkgQpLgCdDZrUb6wnQ5HRAMY2zrTTqeAR",
  "key12": "5dMQLVc1RMCLwySrJ6XFKm7ix1oZBvtxmGFBoJ1gqUeAsPYqV9pW4Jty2XJdcuKYjqcQMsEafcuqfcFMjcdV89jG",
  "key13": "2kUZsk1TgFczBjb3KBwcw4zVkryGsWnaZfnqrLine6bfH2ZyNzTEVEyWiUSt4DVfbtuFcPfTUJB9bj1SqugXAXr8",
  "key14": "2y46Mi2dMabN25owbn8xPytpT4tgM3v3gJus8JcjjxaBrcw8VhWFv25KidASxfMvXxHG1drm8PBJpzsrTaHncv37",
  "key15": "3ofPnqafmuXAqgN49UBzQVDB8EssyjRc8vSorYChsex5haqGazdvE5LNoSUoTpU5qMgc3ntBcEGwD96M79k5K1yr",
  "key16": "2vwvRtKrZjW8evdsnomVbm4FnJnWi9Nrsps3sPGTbsedZjCu3ZfS4SfkdC8mjRJ7uNibWa3aGXX7y87dMKQrLjsU",
  "key17": "3TGz9Z3gzCJXhbGHdsBYidC22eimtQ8iUgtnHLW32H2AVFtS4SBA2FHMy4H8CNZp2eq7kw95s4oBHL9j22VBhjk3",
  "key18": "65uvVFKW5KQcPArwFoPAmGHkZ7NDwqkLk5fH8dSkbHkapnfpUxFTytWiBSjAtyTJYnsgkohH8MQQcPyTnGeJgGom",
  "key19": "6YWSgBudcxBhVQJjkcW7dM4JY4iiPheKeKLiEDTVnoAZzDhrTuwfFGsxZbjtM5q9YEmjUTP3FmNWhrzPT9FYtbT",
  "key20": "2x5qXvLc1bNkUa3h5bpSxvQQ9xrKgN8BdR7BzFQMAYNfGyeH1kyXuLFQVYnpRStQZRjz2qVTkFcYvLkaWWzRNG1E",
  "key21": "2noqanUZgajzj7yv9HXeZPii4FJ2ny2MPDbefRj7qaEdV9QxDz3wVwuhp2ooXjNdKFW1KdrzWmNHh4iMQfM1cFkQ",
  "key22": "51oVZYCaWacxPWWwgbgk6nSXZgyntvRj5N2nEKWttdFkLaWxRELSugMhFnUEAN9WbrQkv2T3Q8NDFZRFH5kLL6y2",
  "key23": "3d4EkB1TBsCA8g9CTQLieKzEXVPYxo5EJjbbPNHnBUWgRzTXb5AaV4s8T52fPZZZGL6u37p1ZowwMj3kR1PEYDgW",
  "key24": "4mC1i1J4TxfHfdz6LZ49URhqHED9dyaht5S2X6RNxd7mmdJiVAvLkedKbFFur3hvmf8MjzYdSS585rkNFVifx3Dt",
  "key25": "a956mGRWsEVtY9Gd89FirMVZqaR4nHVFnVqh1CSdEGvffQ43t4aRG71EW18CMwZscRZ8DmJnJX3UqjBGK2KPA3d",
  "key26": "3m7scr27cQqKLHPwynDDVDj3ysRTRpjECdyyWxUUhbubyhH1uESg5qejxerzv5djsTiKSWdm6EiDTrv5V4WJvoYu",
  "key27": "5fkrypwLW8YuJ76pMVpGwFszdZv1FTJc2MS9p1so6ZfN4bUD2miPmdzA16exebjL8iBSk1JR8vP5c74bZShYixV4",
  "key28": "4w1MMsSqHWVZPLV6wvyWwokq4U7v1fm2p25SbdkUApNcsTbv6242cmMqYgFCYVpgh9owSsCTd2zFuFkAJ2krx9Ah",
  "key29": "5jfPMd5QWeqFXFow3EBJPKVfSiYZmokyq4VirjxEjmwdGUcf5FKhrxs3YgMfZrCmqFD6PKSikDsNoPTg72pVzi2s",
  "key30": "5WpRCLgbJrtrboR4YU9gPfbHMV9A3CkfgY95Z5cTbZktjgKdY1gqsdeWEEYxGsrx5UXsoSabayuZFFnEAcLTas1Z",
  "key31": "4vHCAqPQt9AzEekLkKqNUrXT2Rtupy6VRHD2u3u8nXFvFXvVDAsH8DvhaoovWbFpVVgy7iwsz7pnYbrehWcaeRst",
  "key32": "3exZR1cSCn1eGKqjzgUsXr7UxLvsWG8oQUt2QB5wACtXRZ1Ui9fhigcbqe19qnW4DCZsRnvzwgAbGqoTMthXVvE7",
  "key33": "4QQV4qenenhWUvjDUnzw35vwaqZCr1iJp1C3cFsjdezZjnDuoPSPqd45ym6qYEou4kNLpwytgd2U3rkx6vWBwtZV",
  "key34": "42mYPs7xLJpAjtE7fWztGeaHiG4cNcFXSoyEfuxjdo2WcuRJTgnaEbukzXSHUX7B3g4X8VHSNDyfnrPL4Dfwa31s",
  "key35": "5VVzkDwQE2u56qgn85k52JU1wExgLAZaJQJZw7PjqmpCQdvw6c5szYMumxNe3bBRB9JhQLeGh3n6MhDF1MSTWnX6",
  "key36": "2Xg6Caj4Mpsgiezb6RTqw94cZs3bDJxcFzSBxLDTk4VeXct46iyXV9vEKD8P5UPZ9UPrEiXqrYoyWMg4VakZWMP6",
  "key37": "zSjMmE1oVL7HKEWxDZv1pfqYrnCAspopXCxExjSo3rQuef9R4rDAtmeDe6nxuv5VDBTmKSzDCPTgHfSwMMQPWzJ",
  "key38": "5XYwn5dJ1oPPzWidAUX6gCDjRA9uhzmSZXduhF6bV2w1RwnuZAxnmtFW1uho4Dzy1fkJEJLasBmfyJdCRVFL4B7N",
  "key39": "46ehuWt4vCfR7GVcx2dZCAdNJHrZQDiEA43V4ZmKro9YE5xNy8v5HyfjGaQG2KmaP6z6zqHtRjKXyjPnTqUTUcJC",
  "key40": "5BP5YF4fQbz3HduaSb7EMC1yXwD2cfWTqcrBkemGu8Y14BkzyKrku52jxv37NXprUXk9mdYiscGtBmQVjdEgN7yc"
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
