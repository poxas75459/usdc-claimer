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
    "4yU1LbQ139mr8fPGQRsWw3geKJQG6FfUcRiSUk83T95boXi59p8NvPb5YGU2snHGvNJuSANpuC1U7vEro697CE43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iKFbSfpVPbzosrJFiPxa1TEZLu3L8ZVEHByjpcpsRcBHtdV83kre6opoK5m8bYrQ4RDDASndFBaLzzi5457NaTk",
  "key1": "4sBoqvGzP8tM2nHcufP7DhrvtjH61MmZQ3HzTPdzi5L7J85m43VXtLrpzB5vsdCcDvDmuwqZ1jbZ4wT9VNLiwE74",
  "key2": "4MS2SfbtXye78aUovEvMFaCawQq4ro3m5kzUhRGBGjwrNaxo7Rv263JPaRTyJ5eHnczATvMjjXpJaBeGQbdRmnKK",
  "key3": "4zBL4z3wBKUDMa4Fgia6gZmaQEkFETEw4by4B4KgS4YNTrRof4eUJy19EH3z5q1MAbEQ5yfZq2huPYNQwjZSXAQt",
  "key4": "2DszKw3okuT7EeZBmLyCpn6EEy9P3KuThFo9zxDrpgTuMRKPZHzCA4FKpyqDFLLhP56snCXDqXb32HfEAKZ9UCph",
  "key5": "5f9U68hw3nmAA4mrgxmGvFML5LSgEoiuanc3zH6Gcb8djxnor1v4d8SBiFLFjMXzYFDQaRuMZZk72Tf1qadWTYZ6",
  "key6": "5xnTz6Rmiv2h1XeGsyQsNVPmhhgEayWw8eAY9rNEMVFJ5Qvu44QxyvpH4oUCS6yD7KGw6Dba8ZwkVkTSN4Uw8Bgo",
  "key7": "67j9ntER3h37zUfkcqoEWntGJuXgxvjT5Yr2L2Xz93KQcNB5EgH1unncQDkwfKXawWN6jfKh4x8jh6rYcaHho9cC",
  "key8": "4DrnLV5KBVxCsPWnq9qPwBmWCoTh5LHPhuCKSbP49XezjRNWQAsjLq3XExp1bmWt5VgwHyv4k2DwQZsKNQ4SwFjL",
  "key9": "fY7H6t84tEvMrGASw5roKqAewS83jLVtHTnfhTkdJeHjnEqGA6oNJneFB1FXNgB9JfRaygn4sP2VKgk43vtxmZb",
  "key10": "2j2QNTF7fsi7wMPY2UTJKD36cqHbfwikYf6s6n6Mg5prLHAu17k3FPdRyUE98PPKjz6Hnaeuz61zC2xncky99Bp",
  "key11": "4Evk56uViw91Y9BKs9yS91UqxCxUfXaHFJEtJ6GiKHHKznQG5pG5CA9fTcG8m33qfa5WAns2mrw61PnUxSu6fRKz",
  "key12": "4TJ3nvBq6Nzpw2B6tvrV9hmXiJzGrwDQVb9aK51MPmkmw7EuCyuZB6MKWpKTPYD7KPkFmsQrcvHPgAxzhca6eHBg",
  "key13": "2PbKaxzb8mr9sxc7CgrcFzToqC1iXaEKsK1ftvi9AStqstKSMdiDrvhJDC5wVJCK3kv9hrERTo5oc4AU9AjGRvCc",
  "key14": "2z3CXS1dtAXai6pwusGHVes3CgocPY9jwnTVwfFRbU5TGQ4k6BRdQY3k5MhYcAFUs8iFyVkj6dNm9HG3caJgbKRG",
  "key15": "3kGwyyNEH16h5EbdbUGGXvHEKzrzeDnXnnws4AjDo7nkjD2YvLoAfWS5qsdvYvjFrCGu2vdnTFDfQvy4fbnvj94t",
  "key16": "5PcaZunwqXvB9YjLhsHTGknWUJDYuFr9YbM8ZCBoJuPi4buhyVnvWGu5kFvePtW7VU7YGMH7FH1tgeERNsiJD1ve",
  "key17": "4cMPt2Tj4nsYFAAqaTbbSaKoPQiZ91H4aBwQULUTNEsEpHW77AMQYtn2FqMT4tVLYj7pTna4NJV39FJyjy58BbLM",
  "key18": "5mw58J6m9QxBquhLg2r8Y7hfsuk1CAsgDuNEVm79qzHxqNEJ5ef16ZbM6Jq3Nsrzm552bJKY5c9bEH7KxvFifbXP",
  "key19": "2rAsVoLbT9bPuJKxzFhmYqL8bjKdZT1eUdJHtQhpVgbggYaubxMAEQUzdr2nvw9UQjTDWrJAfR15hqEYrM7tKx2Y",
  "key20": "5X2RqzYHY3dsDxcvXc8pfa6ZSEhYdsDgyVa25UFVHjrqYtbmg92LzUedKivguUEpwAAqjMgTciBTdLxvykYYjsRN",
  "key21": "5hiPhpT1nvB6aVHrnRC3rg4U3u4qvQdpmRJ9BR5xe3yU6p5DLLv78mcMMyNbkvoSBKaU7vgEoL7X3enkokNxabXZ",
  "key22": "3g9fai33uCzC9EPXvMYEqjnsMAbtcGRoT447kM3ej862GCUgseZDtNmNUwovQ5YSLihQVSJx88FFkzHgMDupVYkK",
  "key23": "3eboS88WyGqod1cyC3gun57rKEQGiDQ2zTGoUmDRXDyH1AtgN4w1MgBapuVvP4Ut3Mgad8EEssnrGxisVAG1m7ah",
  "key24": "4UWfARQNm7LWY2BTz3Gk6QG4BRz1uQNdY3BeB71raRw5CiPfvCfqKG2mkxcJFhPhHQpZktMSuvwegaNte9JZyfvh",
  "key25": "4PESw98MP9SGiTDXGS2NLudHo8tuCud7kWEhW1McgYacEhWFgw85C6DrtsYrkcAPWECRHHaAJoQW72oKpGVt3jEJ",
  "key26": "4JUjkUGxVqtvrECjJ8CPNva8MdZtpvm1ko2axPJwYttC4v8T2z8CMQmuMidr1GPTPTi6cQAkdUm5w8gAvMFV1NLV",
  "key27": "5tgs99FA8LqdUq1KYep9xMMJ2xoEKVwhZQ2m4e6sQLmr7mKJyykHkdSgkE2wr6G6MHQYELNhH5Zm2hR27QF9HeWp",
  "key28": "5to2r2zJvsy7hyKQgKpN5nGZH3ePgumw8CRff8DaA4eNSi6SKL8usgsgRg6LEx9gPoNc2B2cHx1VNtcp7Jq2vh9c",
  "key29": "66hgLih5Lad6gf4FFok9Fr4UvcdkdwCCSynYve6c7DQZet4SoMnweuWhJsAmMBoiGCkPD62fU83kLMFGNfpTLxRs",
  "key30": "5H2R9tmcRvmtMhFQ9C4t3uaFyy9zpVvEpsFpySYWvQuawPAqXyH5QGe9y9oRqS7DdZjTjAruj7riMpJswpK13K1a",
  "key31": "q29woJsGnksHWyRWCvaZA1Zsz1MUcymfuUZXKdEuSfLJDsn3TV8BqqixwQoNbUcpkRswHEm2xQR4RTCZdzcZxHD",
  "key32": "4zVdqAHVpogPRGARY5bubocCbUULNSdZnJX27A88kwpJ6JwuVWfSQvqVi7Uoc96GUYzT3Ep1hKw2zSrGbCXNr5Xv",
  "key33": "2twRpw18GYqjKEeTkRgQoi5dH79Bm7nHU9856mzZ6Z9N3r2mGLyLUbm9jGKsDsLQeonsyFt9td12D1JGLXGgmN8Q",
  "key34": "4AEWMWkACRsmoR9A6UjRk8WtLk1SDgc16UGwpnL8aixByzH2jkLghmxXAtwnbqN3UTGWiAUMHk8KzgtiWGTf5Fkq",
  "key35": "3YYEsFwcAwzBkyZUX2UotB7HhB4qDVyQMubdArf2TLRKZ5vNpmzmxjiuT8NbdVnFmzugbojzsqqbqz49aX9zA72X",
  "key36": "2CUojxuVHnKjQmhe7EndstV6vydyhwWmS7aTmQVZgrnHEcj1hxj5fxtjt1c4H9GmbdKDM8MeXuGGYMMSN6G5o5w4",
  "key37": "42SXLeMmudPEUGxh3BCzzL275ZBNM7Ur76WMPhsWciEF4MHxXtT3TDtTndt6RurzqK2M3qJpdqpZTLRCmkHz4dyn",
  "key38": "2Snu8GDiyyYZWYqgUMHjhfrKuvzZb81xsTfJAng9f8ezqLwk3FW4TxmH2wkkfj6GQ1zHYg2YYtKFeLkjQCFJXGXo",
  "key39": "5VtkiNmiDX5pDpA3qM9NLLwVkqxFy3M25rMBh2sKSV7rY8FnQz8e5k9teP8Ytp2z3aXP2odN28VxVVVYW6HJpkZ7",
  "key40": "48oxZtJg8NR6kZoAZLNqQrMReGdroRT7zHEEJjgmuVzFJPRs95939CNQ2tnaLVtmGJ2LwNWiZDvqSbQLppReZvYP",
  "key41": "2UjmkM6dnq2eF46Lp8z2janSqkTQP11Fb8jf8UzX3P5Si7QYJuna6EjJBRJ3sgXHs5H9SZ21dyZWZPrc6Q29qhym"
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
