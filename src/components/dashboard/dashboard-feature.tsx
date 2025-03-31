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
    "4CKcLxQnwKpKhgASHuhwSjyd9ELMeQwN6CavyihSbEHSksh8KBEuzoJoosKnuvcAnLX7tHsWjZqs8SqUsEidAPvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37cwC6wm2S66aQZwNYZrKQCTNnaMLGsqAuNWFseX2FZCUXLYr16VhHvBbdXuqdFBHvbt5n6DnbSF9PX1yhoBaiy8",
  "key1": "4LTV2g7YKHd6Ntoyaadehmc3Gv8qsEkRGvHZ2CbyfKjknEz1RBbYkPiLGjDfiJD2kvGd16MmDv7eEWnx1i6nKXub",
  "key2": "MwfvjAjsPPzBSsrJbA8L9U6FP3FkWvwdZgcMRUHGrTaoMU7auMCh1nemLid3uCct8THrVWA9qV8V4JEeaH6zq3q",
  "key3": "sxsteZy3iR6zDWyR6BHKycsoNPULPXwA6REoVZMvxXVjnttReMut74HJpfpqYiSjhu1ug7n8ZkNZqxsQJANJWCg",
  "key4": "5rzsKkk8AfGy2G8DSH5eX7fwGowHXSja1Eessdv3KunDh3bAgBVZhQid1JmUU1YJi7UT1TYyAKyT5VrSqWaqEZqF",
  "key5": "3UEr8b6vdVYMWssmfBnh29KdDMV9dLPgpoDf6ScY9ciZJDNR3jujQJUPLDxcith61ZCu3PtKA7SgG8MZfD9z1UZU",
  "key6": "QqDPsw77QTRZ7Sg1WSeksLyZuLtfY94y3As9dWSW6kw9Ga8ycMh4jGJbxpyFxCtWuxsAp2EPubriDqtnM1JRmRG",
  "key7": "2vKYfc24bP2SwcdGfJ2FAoGhhZHA53tZvgN1yJ3gQWo9eYUqyszfUzb3G3qDwHjNA38GtTbpxzHwLfdprXnnb9jQ",
  "key8": "3d5zp3dSa4Gz84beFvYdDsdqHRGfgaXEa6pnb4JiWfaoRnuVfAb1VtDuKjQGCQuv9MGHszTFpjSwQ9dLKRcRe9wL",
  "key9": "5k7hHPqnp3ZUR97Kb194cN9YDL7zmDH92bN4deg8d6LcRSksQ5BctGpQm81wkuUZ8Lxi3tAxfGHvt32MjKXZMtxL",
  "key10": "zi52HucDDRYyJQY3x1xAyUEU4c66CGnvUfG4bTjUgr3mF5NS5NbzCdS7b2DYG2iA8LrY1UoiLHqupqwYMoHrZd5",
  "key11": "cds3BjtjYjBzKLifz8qHzek5BijEpxMsBX9rnDALYyPy7Jrp1fZcqLdpCyf8LMeZMpSFMqGjhBMKhKex1CPF58r",
  "key12": "28iWbk3jcZbupQuxZZN7kjS8kRJ8m36yxSTQabho57wU3c1SeeXPtQ7w28Jd899MXtTtCQVcLYWzWBM9bCUN3d8g",
  "key13": "2YAWgFhF7aorK86PGauG5tRjK2JR6REnZbAfKB622pzuWHGQ4Xj8nQHGbBWXn8yzwpzkY1LKHyTwB1Hjc9SAHf8Q",
  "key14": "8avV4iTuRMBLMZCog2jRVD58WvJxmBjVZL3BW7Z7gP7JBdwo3rFg66XYYfhieoGf4kViXxyjPkQAG4uqwU4FbFx",
  "key15": "3nXm1RCYhohwTkwDczqs461GfsVcTae735W7ckYjYhHJXLau59PmSVpAoSp7KCWykf3GeLXQiZfJPo7esPhneXNL",
  "key16": "3Yssxoc14TX6nSRGjQaRgBMAGWLCa1Xw46vgRv6vsqd2eJ3ThmVidExyhPmeuiXoH22VxkjgyjRzLv6xgJesPVip",
  "key17": "3Q3NToe1pFXikQvWFzneiNbrcCMggKFZV4pfMVNZkxLKWZ9X2UkJXLKMsHNJgQYMU8XQasEGkskjVzFb1i16jmwo",
  "key18": "A9kQz6RMzXMXQcVVBNg6DDF1vWKNpnQ24uiEeY8WhomyWZLuHqXP5VKLJUWPBw2y9UXpWPucDSabqBfqjaSVg2h",
  "key19": "4DjgpEWLU7oN7rSXybF32JLQLsWCJNW7iD6GJ5HKaYsiUHuaD2mXJcCwVyHNDid7pmxG9QtZFG7jjuBrYW4k1XYr",
  "key20": "44X2qma5s6n61oP2E4bC4phjoGeKGrEPT7rvUKhEm6ywJmynyQ5TSqXPar4E6EWPZZSdwWPZXrSzsqAgSH2r5E5",
  "key21": "5FEJDuxY5NHCmoqLPwy2Vmj1AcPnkBs1kNFNaRWmAUg2YHPfgMVQUeBfa9YJrorjzHZ2GMs1b2zvQ6KgXJgxAC4Q",
  "key22": "5NMwtXW3Gui6sVQM2dGpf1QKKFCRPAhruFmphrN5hfBKMK6YJ1AnfEppCM6Lo34CACwHAqQSp847v43ns52sJxsS",
  "key23": "5SziUJDC276pVZSrw711JZpoVK5psg1UByTBHrFkZwLhSDHgV6CM7ygZqqAMde36pTCC5uPnqWDTuh8NWCjuEaJB",
  "key24": "5S2erSqPq8eb6fSJp9VLNzgNVx3s3DJ9iJwgDDqpDwtK4boNLGA4a4YnAcLkMxRhjbWh3zNpFdazLomhe77dsZ1S",
  "key25": "3F9nfvXHc4ZBYAEdpkMq7Lhkoz9FnvnR4FSTKtZJsvPs6Z2CMY2iT7agZgVnL2dMHzsR57rYErMawBCtNG3PkHhZ",
  "key26": "4zjQ35QKm1Zy8s4MpSahxznJYW3DWw58cmsjf7bjXMz4CAuAq46Qktzhfhy2qqXMk3xBW8aj51bAUfMLUJhpTCCy",
  "key27": "41FCbRZU97d3zHB4R3aqa8wTbp3YYwpLnnPv1SQ3kB9U1hHy9TJHNPKNRSi8UrB91YMfBcqEtiSqxvprKdV64YY1",
  "key28": "TZPjTdx1bg6ZDQbiUL5rmcD3y2Q8D9qhDzsUxjukMDVuMnqhR8E8ZyLjLkoqp3axVVTnUb8ykdiej5Dk1tAK9e4",
  "key29": "2STQMcaqn5opkpGYw8TfXArPnDTD8VZsWSDwsYyfRpTV7bzdXEPjzeDh9j616dK4LyzhWqpbQT5vjhgR3vWJAFEN",
  "key30": "4eXmBbhWe3JVL9SaCyajgAjreCfB4i1pjsb4RGsnRfSkutbkJiXid7WEkbyjXh72BQFyYH1rm5ZN2KomnqAjjZLy",
  "key31": "4w2mPEhGnDn7ZMwA8t8RfoNLK4TsQr4T1NKnWVXEYCBjBKHdzq1J4feC4awTGGDKXd52C72APcndu6uuXNVQmr1Q",
  "key32": "3qNDUtpmX8t86818kZ5Lb6Lp6KZcgQ7zE3DGfW2Vs6okMfEG8WiQuFwQp1oMCb638xEWzccsBjpjxnaTUxE1fGct",
  "key33": "2dseAnnhDKrgGHq2BFCHE78xgwWMwesaHSt5CUna7jYgKBrqmQLkbWCiqNh6FEms1nDpGeKBZwUHd5yqdvJRGc5T",
  "key34": "3fz7MdCsLN68CivPjkKgQJ4yX73qs7XCVEUUHCk7ZRkEP9aPJYhU7XXhdXqrFJ8PPAvrXsTzq4rFTQs9F5jSeA1P",
  "key35": "2fWVn7eR4A8kU4f4y2FAWyQBWK9mGcNUpQfyfHeS5VjfehVUDNCdyMvBBzrgLrXdPr7TubKHuz4sHR5dVYB2LUH1",
  "key36": "2vfbaoX9GNqXZkLvuBE9VC3cySt4npYpG2r63aakEkDGpiSRg1Zh224D7pdwSjpcnJ1DMNXBDnj5c6VCkTphEs2g",
  "key37": "5UosR1d8UJuazJNJC86JYMbb1gdDc237yGA94JXjPqxm9sgCwBbYzChb4wrb8Uv5KoCWosYuXH7RsgsuSTBiwnwg",
  "key38": "5hKPyJFcgvamRZEAiDZj9a1CtzT3AoEAdw5TtdGqresRmUMXqhmV8Adzke5occf27NuftwVmCb6xPK23cppkFXmj",
  "key39": "2YJar1w8Mbvw5bcqBwFvLTFG4ZBL2LDB1JuJ6PGb6XmwYGWs5CFWV3wP6PEyoLTA7XeJDxFdou87UnX31mhBQwCa",
  "key40": "qZnQVx4DcxxSxPPyDZT1htjCZAzCoyDpbvaiqqoSNHLQaegic8wAfZyp48DhPBVEvXV4it68kMGaqbwenULAtxj"
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
