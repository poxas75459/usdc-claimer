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
    "2T72LYkqDaQKm7SzFMab9FxWD2sJ2opPvJrcfs3hzbMhWVZVMdZjZE564r2X5eZyxZW3dQK7JqAJgUA1URdtxnt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H83SYYXuekZP8pkNsT7VvnA23k27KYmDhhPi92tHjdurEGMxA8AQD2BwduiwiAer5Hg2wtZnHG53yyJFPhHUnfB",
  "key1": "4sj8y12p5C14RKMfRqbzqy7uG5J1TGifx4qAkX77wc4bGTaiJNL5vpjg3sg2paHckr5JjJdC75LLc6tgcNpNWCcb",
  "key2": "2zCnz3Wrygq5weg2eN4eeKvMRWvoZaJ2KWHEa6JezdZQQ6NqNCjnmy9MyQ8iRvST5q2LnjrMb9SfGgZ5C8C3pDbf",
  "key3": "CTCjJKTXndcnwm6ja8anxcAapX3pU5dea1VqqX831jmRACoRGieiZ3uqWYu5j8TvNrAc9Q41xCLLKoCTCaEKKmg",
  "key4": "4UG9JviZz7Aq9tZM12DiRSKvPqVo6HLrvLmXDJKexEfxsuiRMAcmG7HHchZvqXreLctWw6WmCy5NBwDV6V3k1kLN",
  "key5": "39fGa3fDNYqjHnLay3iCghZVmeV3uukMM6J11tEqp4p2XpyERqCy88oC5B8GBYQxrBAU2sRDbHXztwZdyH82adaB",
  "key6": "4Htrc8mfg3sw87P5GUikJTXPeW3h7qbkR62BxfAYSJhRTJzEmsm91BJqZTxFkkgrW2rMr4koeTMtVpPmmuR8QaRS",
  "key7": "2f9mKtPKURgkExACg8JscaKyhQHQJbdzuvhjrc9h35qon892ridKUS5bu4Ut84BeHn9J3ZoZzSkD9Fhmga4jvmoc",
  "key8": "3DdXZkanmkbVxP6Ti7BYjnn8tWqASuJsEVypGgtNYNaetejUcU5wNRQXKh4MWfUd6XiUtRMMd1hEw87wT8GH5SRV",
  "key9": "4sogMzGVpAyw4BrkiqjJK7Z6Pfp1tGjyG9meBD6nxVAVxYLpyzCNrC1u5m2cXzq3tVB9uxd3N48kPU71KMGyfL3q",
  "key10": "NhqkMPLfL9QfZK8DwNgMHyskH81AAghGc1vEFR3d6dq69GhtS11gT4Dx2FQmbF5oMr5M3asG4CTxPnanTb9hvxu",
  "key11": "5pgUonbSCupfTHjZfSyTuijkcksb9jzX3pJXkfU6LJ6oSxWweGjd6wmcLrXBdCdebUNeR5ZPzxUPMSerjz9s3fev",
  "key12": "2z5sRpeYATv4Urnh4n2ogmjDLiGCuCxW43n5y2VxuZoP59qJ8Cpv5u2paSCm8URqfKZxfZU8HCbhK7x6vBf4pfo9",
  "key13": "3A6DBfLuJjG5iv5z13J7QGnFJ8r6DXfzGgo53v4VbsFFEkFmSPgn6Ghn667TBeoYWq4kg4unVF2hTtpDKqAu8bdy",
  "key14": "3QZCVSEDCR36PrDXs97LGeeiV6MJbJRmXQQvwQWdwSk7o5LDiUFWHb7Z45GUMa5JiTMCSD2WF1paU9BbRZLXBVJu",
  "key15": "WD6Qpb4JLknmk1NQqsUKdqr3PzdRpYn1ojumqk3YBgq4QC2eSjpCBSMok9v4xHxL7wmyJnXdCX8X1meSPHSvmrK",
  "key16": "5YbYZ9qAqdUSSAhR3b8kzwas8aeQqTPjhyZVm82hVVuzDPAA4eJRVPHUWoV5qNzVKTDoCVDdo3r1Zrvpae8Zy6ao",
  "key17": "3SLjTpCLbx4Zh4uDpXQqVT2gmzaQknwh79pgXZmAxW48MZYCh3KQSGuqXrSLL3mdJ1JF9aJiR5oUgyEcHTEJJ91X",
  "key18": "5WsxkihfehzU2BkAmwwfCcP69cv34RmkWEGwnsDxGMpcjw7y3uHMptcNR2PRrAj1MjaUdP4PVmdCcvZEd7CZWiWP",
  "key19": "4namna2S87Fpvy1ofNeNK7XD5NSEthsRsnwSLDbet5jAFHXFazumjDSt3M6UPjTbcmzR8mjxyxCiH55A7wumwBfm",
  "key20": "jvgJPF9rb8x6m47LGwksUg7LZiR4Zg5RUGyzExnokZLmfYpvTefpevSPjNMffUu5C5i3akvJZPP1HGtPHnXDK6q",
  "key21": "5NKmMSj66drtw8F8LanoCZy7eJjWxW16PyVcMaF7vxWdxgoxYWACAwhx3SY3qMsx5qRMW7YDcWuYPiwrE4G65MTh",
  "key22": "2kQybeHJKJoYBhHDVrd1MvCjZ3sPLUocYVopdRsuXmgjKDm5ucQkZ2gZcK58ud1vxevETt29yJJGFD3MghDVGbrg",
  "key23": "2N72RNE3LByiLoJJUpN4qER5VrKHs7v1uHxsG95eFGRwsBiuVn2Mca7bLKYYNPjTNQHz9fnVMgN24enqfw1owKSa",
  "key24": "3cRytxUFQZ6ynvNhoo528XdZrWZhxas9m8jLddRat3ovjk2bML5ezhaYwErQHVBYnLLcgNUFpXZDLtfACURvi1yH",
  "key25": "qzRpZ8bjj9zWy1ot6nFh1jEaK5Ak1oMTx9FjCkGbrrpfF3Mwokq12RxnajfQrifUd9RR94Vu3nAL5aSKYsJmSjN",
  "key26": "3kSuC3ubQquaJMVBKzTzgUUrwnmVGi5VrJbwzM3yxFUyfUncoDMk7L2GnB8eukBLvNZ5sZMkagZKrbjgpdkaxZNA",
  "key27": "fw4xG9qycsYoET5dYw13BxY4RiUydPMEnRyu9dgzKkrMCZXNiFALci3DB1QMykwSbYi5N5mgmHbt8VSQ2ZYvTD1",
  "key28": "66oAhttroNET91bNjdDHZ1Y51QyoqEhC8J6rk2fY1yx7uPEshbqY3UZL2CLWhqVUDBNdp4EnZ3paeCh1RDqg4GCx",
  "key29": "3mUMFxsDajjZPt3wS13B6x3p89HJegXQBydF99aNLyJEPkcDZYy17AJuGCGJtckPSCzZWSCpt2tqwqEkm4QA5RcW",
  "key30": "qGSwjXtFtE6JvcKZKyWumUfZccB94NCLdTbRJjte7m6LpRSAYXNeK8twUuKvYfdpub8tDsq4VSY2ojUXUJPTMcf",
  "key31": "4RWSyNYTLjmkD9FUr2vNRn6LZujbbP1BfzaLrGvC4pJdp12HcsgsAS771WjLN7AHfNm5KxssSXSJsjPt5n2qaGrP",
  "key32": "5PFhvhyYBCT34GHamiZGqVjgWfu48PHxTFmGf2H4A1LBnDyds7ZzuBxnTG9bqYLneFjuHYBC4ZzRmob1SKRerjp",
  "key33": "2GuA49cwBiaVBLHzwSjnaLj2gf9eXmBDZ1fHgNkLDrsHiBnZFy1o5ZBXMnVxkLzB9QwMTTmfLefEfCg7B3md7oft",
  "key34": "5yD47KLpMTXydzisbFaPbZV6UU32y4DgvJzFTdW1F5gpEzuDygY2QLhaqPwgygwLinmKmx79PmUWgRAjUBy7WavT",
  "key35": "2faEdWNAKFraESZMMVqrpqc8JLXmrisNYFTzJAXqYKeiUFWARgYLuNGybFMRziyrkif6njCVpzmTVcugP3PPexSD"
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
