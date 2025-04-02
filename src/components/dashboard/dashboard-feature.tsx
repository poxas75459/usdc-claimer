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
    "3CkSNspW4KUoJKLVieSf97k1oHpqquWCBmWRqXCSTBL4JsSZXh6GmkdiRrftg3fsDvoSFCTViH89WVk1JvzmxJ61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PTaqFiwVgQhT29dqMGms5JXoY2tvNvRPB5EKjEPyYa3w4xJasr4t7Bjw8CxPuA6FTxor6GSSy7fiQPfMBwpuySy",
  "key1": "4udGFsZceb4U93rshSwjHQZpmmhgHfTMuLHZFqQLzU5Ej5GFcAu36gdGMhxnUbp6U65Au3EFPJKT5kFuQEfrDgCE",
  "key2": "4ZtGv7TyARRmPqVNSVtFhWFqq5yHKYxGYJ8dM2BY2QJtT6zZDnSx24VwpVtUDJhk5jAcHKW2EhrnLGu7mbNkvnuM",
  "key3": "2LwEf2NWfj9Zxj1rkgdch25r3Zjctt3iAqc9oyoTeQ1SPzoZBwu27YyX8GnPvRuUfiwwetHid4HT6S9EMtT15ULa",
  "key4": "4DsDe3Gs1mN35V9FW2wDKS89HEkSYBGhamsbeeKctD5WwvPaY5DRDpqffkt3Ty1MedutR2z4vGMweucViiMgEn1q",
  "key5": "2DVkWKnfnA3ZAdwcDcx4oBaAq65srTH99Ai4BTeVKwNU7eUiNZCHb1TNhyPW8oxgA7Auw7njFGnLKPdvatoTcvBt",
  "key6": "bQCKjX88jktgctXwJVPjWGjGpB1i7fMjuWUEPRFpgyfwtEJ1U9N5oXdkmfSTo9QTTK5hgiEKYwTxVvdcHfWhmHk",
  "key7": "4JpRycDSxVuBuRPaJ7mamKynqH7kypPE39pR8rM3weKf9LgfTJRisfFqdoUAdW1wtcS3rJdZwMhytkBCetUm8eXt",
  "key8": "3kbvT11j4w9vdPVfG3BqUuMBYm4DDAfkPuMJbtK7Rfq6RC7B3WpxWCe8dgkiatjSU8QNGGpxQTJbPCDMSdnubFj4",
  "key9": "RmVAxB7FypyJ9GtvCwfZA1Da26whYWd8mGZDjkyFr7ixztEa1XmpuYCeqKooMTmHLsMe5b5iqXJFUFqNtQfRfn4",
  "key10": "BE4ZzvQ64SouzthE7Qv7YwKx3vqWtjU6N1Gf8fBK22P2yVWnQ5ZFQvskqmodBCCTPe7BVw6KNCRtoPn2pdmpeqB",
  "key11": "3r2Wurxvo6tfXW2MZJ7mpXd6xNvKNWKCm9nkokUcJJbY8hDUcvGbJoxeP4DKtXEHqeiCYsJYMExpgRMDPBWxVe2k",
  "key12": "r45wqDyqAp7F7uo6kdKNQooh6zeKwZMR99EkJds8HpoFcYnTGbKu5quiqyYytffzmZkravo6wbJhADwDsB61hnz",
  "key13": "214A5PZJzpLq947rPgjVqrV1LNv9jQqTzcbtS8SLt2vTcMzfnKpiNDENHoVM1hrKtqeRKYDEfGKv2FkqAgkzmzxX",
  "key14": "3NQL4xMGVdLzPB2qN4DBG8zGr4zxv98UgU38XixS7awYZgBJnZq22T88FX6qZ9mkRNmcoGTFUqnkByp5jdrQoq1H",
  "key15": "5zhvbv3SDe84rG1VixqPWYLVKKo7boiEzbafyfWAEG8kirAyaiTd5QPE2Qr2HowRbYsEQXnRoxnxzdFwcH2rqXL6",
  "key16": "2LqwrBMhRqxCzd4qjEC5Amjwj17GS9GVZzUxTr17A6U4qsRgYkthhWWJ3bLvrcRjnkWyzSURk2yq1Zm26ffM6zBz",
  "key17": "26ofWTiXD6gZT2kDYUBiLntYMj7gGhAFwRsDNxcTur41iTa1oJvapBfFv7AYkgasSgV9CqnK4HDrUgPYfo7Szm5k",
  "key18": "3edk1BujKpJnuBud73JHVpEkQdPy191mMZZZYcrDDC9VJfPzVctY2EBJj4yCPEX6HfyLqHLxjUanxE5bPwhouFed",
  "key19": "34QUi9j7z67NizqzQR8Sx22Uv3cNYafivimLPQAQQVYUE8PoYuTewYms2ACVUYAUep73msVHTNvsigYMz2NQg1EJ",
  "key20": "3ZBzoJrQf5wtfSFxkWvMvScrFazBxPkjamooHVq15G3u6gdRhHQ28ReQR2vR2aWhZ5d5139eyUvPfAsgX2fRFfb2",
  "key21": "4T8B3HdWt3o7Xk2svsReenQ69b3wbHE7UzMEo28KHuSo7C4ckJBM9Sj6em26tgV9qBPHkmzNuFeWcPS8R5NRBzf3",
  "key22": "5E57oi5WrF9JpHbQcbccke8vYyYQWENERHT47stLMSQQW9PWngETBqB4uJNZT8kmLjZkgqVwvovWjCWuH5dyBDJm",
  "key23": "2isXGSy7ZGGBjpHTaJritux3SY57WtEXEgiqpsULrNgJsvMQwJc83cZmXxhMQPhgqD6SbENJFKNh4vk1241nDP3a",
  "key24": "2FucG61pqfPBYrPKdQzL8QKJek3sZKRSCtW8MidzTKdFwnfEQkdd4sYNbQLjNeeccHyPrwX9QL7Zv9eShhADYS3U",
  "key25": "8FJHrWifSQ957k17tpZ1opVn9Fm32Mw9bxXseY4N3gMUZX6EqUXT2wa63dhq96wJMTkhcUFRUtVcxoX9UVwsJAK",
  "key26": "3W3RVtJtBbm7MtXs72TKbtaF4TJdBkUuFr7F44tkfk2sWtMKGZG33sw4z5t9dNetXRjjizn6p53M2SFjGtPA8V4B",
  "key27": "44yPuhiCmYiorcDXeDdg1muWSQ7dudHqc7HP632uSc89EswzhFUg1PGMSduRyVPkbzSS23PnWYu8ZWzKqFt22yyq",
  "key28": "4TGz1KDHBDgXgekh5f5X2ByF85R3AjSgRuHp5uPx9oZ1wV3rPo7GTJK818SNct7choC3SGsLSCv3aLp2fgyxxvh5",
  "key29": "21h9fxA8DJuJ9eaLXBv96hfXYabqLfCmF96hyZmshbSFZqF1Eu4qknHeFuEyRtHDetP2jVUZGMSi4GASjWJGyRhz",
  "key30": "4J2oUbYHfJ1jYRVy6JcpVN5Z9qatA5wcRCQpz64LcwRnPXpg2y9xSpCh1Qg4g8uAQUFdcb7LgRCWzmupUHJv6azE",
  "key31": "67P4xJZLzJq9Ei1N9Bw2gVbjYNXFCBLTMY263CHVddYWTNzf4oNJXvd7S4oEaHbQxZoysP2MYcYvaFzzGrespWv8",
  "key32": "4SrLq5Kcc8KJZTHW19QDn6HsEJ2vQ1ETu1S59W6SnxneDZvHHiQ4jApRqPCcSz3c7c65sZWLrm5ZxZutWmSLUxN5",
  "key33": "4c9PqoAb6pJno5xs63zyEbKJjNsNVvXAY8Zo3WpZesxHnfcga4Ubqn9EarRtfszcZnwb6yMhUrn5Fnwce23MvLAd",
  "key34": "2mttJVopgYrfR8KTydBhFxhjpsRVuD88LJMhZ8x1RMN7Wh37twCqwBJPpHuqBFfW6gZJc4qwySdEVt9mc2v81SNU",
  "key35": "4tAg8CQhK6YrjJsf7v6FvnH1HKE7aC7KrtArspAmYyQ7QFxS7aV3dPcUfsCds5FoDm57pt6PkLH9MviRXNkotshz"
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
