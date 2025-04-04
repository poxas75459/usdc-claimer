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
    "yTcAQT98tPPSUMoD8gWmxFkwiSehbASffCLaWp6Wjk3G24QCe2dHM5iKdCJhSJo4LaxbBZa3ka8YZvHvS3ryQkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PgbQ78BWP26FSR11j57bNi2tVj5cFrfXpPdFPGxweXWCRJ2fJ9yYszqeN62fax74h6FdLZNjph7DyV8vtegeg7y",
  "key1": "2c1uoBHqy7Lhpv9bVyeevzWx2ELch22KeCH4MswJfzDss9Q76veusMLgqri1fTZ4KkWtgVR5CpY8ao1pTJaNd2ow",
  "key2": "4Le8HHdfvnNVJCDxq7pMFdgHqKhP65iY7aPUMoas6JjhkHd91swtrRM4iVhwG9UafL2oRbvLgFz5CNbWefcHdMAb",
  "key3": "2g3wCiiChy1RQEQGkyXf1uF67wWckXx2kwjTc5UMpX5d5KdzA2NQ2HsJAcAH929de2geMNf5w3z39BwRHwEBPNLF",
  "key4": "3LhuuDe9Xpmya6wd7oUToH6eV7L9AdEnTvZmc6eZCZFk6jcgkKfqDkib1zsQwskGRkmE9TWRcF5gcXemwHp6xApi",
  "key5": "36NiRXqW6z6Nv3s8Q7CMZG5SVjzPFVyBP7e2kjJWgswmZnFacQy7qDoTv5oqSEjnbE31EQ6oPoExweSxTggnRDhx",
  "key6": "3QkvSy2CYfha5arST7YZ9uPP8hHBLQJVu3ZFjTkhTaEN822RX5Y7F69Zcfc6GEopK3quTQQiBAChS3kzF6rwGYkP",
  "key7": "2CdxJzYVHcnUah97kgQqF1o8gvvCLSHYaJjx5Gh4KfCMVBmu1WJwmyQDtKt2mhnwwFw9QXYJjSUkz5afXiA4SGss",
  "key8": "5xD65aex7kNXBqJK7TdWGULVkgN7gzno7wUfXErfw6yyCghxiUZHZRBLSdmJEQbm3Qnn3kxeSHWjuCooTmp6nxQR",
  "key9": "NPfP4ytFJeiZenn2RmUfNWUKeH3TxzjiGaZmMRaverPcxCbL3nqo3h3pJHvzKAmLYbiujL29F4zguLTqbw8Jhbt",
  "key10": "NBuJPyWT6KFY1YHXJvgxqpHgoVs7BB11jAXHnj1KYMKyZbCzvVbLE5DhgJVPqJdb2HCkH5tHF3RiEEEB11VZjSp",
  "key11": "2LP8tDmJprkdUcNehEJwpYeSifFZu6v1acjEkYRqLrPah19YWPM2LtDnD4tcuxm3sYpggqij3X6bmW1er6w1e3BY",
  "key12": "21dgK45HYPevsq6bKf5c5xFE9xG94WJTSxz6fYxAm3ziYZPSiSKoRhDAVmuU3FGbTHn5QKRpPuP7dDcded8y4uCT",
  "key13": "5BeZYTQHttrxeDMbEgzyUTpN7pEnbt6ZME5C5vNzGVj4NotvKdDXobAC4QCsVAt3Evh9TTsWphFKNMLZEJ7duXi9",
  "key14": "66VfzkqXn3815MaDnkA9XA4uAGGrHGgxEnF1uyJe2rrPDh5RtzyYRuBWP6nEzQTf6WhN1wmmvMnyCihxSeLZcNn7",
  "key15": "4FcDE3LVePAFWWJxWNi1xr381jwJ2HFCbwXqXZVka8JoGv2PKfjDayYyDB5iQXhN1jyDoRzc4QHGxjH1whDVRezP",
  "key16": "3eVmmbwN4k1bpDeUkKq39ftkCiweJ4jZs1wrfWcZHnP9SDs5uxytX2MuV6BLdZ59vsk6BnrnWQfPNeKFLS7ymtMD",
  "key17": "2dpWv2HHSi4cAJLSGmh3FhmKqdKLc1kaJUZjU4KvMhDMbxssBi7pW5aGyerFtx2dAyR7D1CbT6x7xEoPqEJAf2g3",
  "key18": "44nGAzsbqcLzkFaNxftXAtCNH6Chqn1bbAvjSESfD6E2xTSnVEs8TgkuEizTKfzHU1S2e2nUquQ4rzrWYXL1a9B7",
  "key19": "3NvnPBT9A2rQysvrNc5bgbExjUoUGpjfU29rWpa57a3XMgu1CG98P3sC8rkZRy7DmqwQRVA2ruyBy5GMvyjPWFpi",
  "key20": "552Lzw917eizieyfcGu6Q4Qy11MJ2Y9hBLL4kJyua6aFN2aB7hrmhXBbdBHq2hbSRWYiJ5hP8VC3sCiKE5HxjqfU",
  "key21": "63Kq83xHDgMt2Fm6GopbBHmyxGZSSEsgvHGZngAGSgyZDthrsZXgEzGuCQ9bZkU1cXKvpadeCLaYqrUc61SD74rx",
  "key22": "4ewzcE1f7mGrxRkHZf6AkJ6M9Ct3X5uS3pxwYt7cjvQrw2pctEmxZUHKonyXFRqJ5ZKrpunUHqQhgCdg5xzMJn9u",
  "key23": "3XCn1c3xwmHhQb2NqaoPeYnSdnxTgTnGTZgkzqtYQeUihuCFneTn1YVMbTNc49TqxhTiPkr9bsEeuEGXV6U5Wp3b",
  "key24": "3bWbmfCf1xtMjy2FrJ2RYbBJJPRN3iYZqAgyxehQemx6v9tXMo4G94kiX5MUrUdxrUgixpuYVycBg2uQE8ef6dpw",
  "key25": "3vKSjCEDh7Q8NUERCdRuqQgqMa2XJjdXPVsjq8HApCjv74MBoq3uRDpgvhAgRhuvRHqo92uH4qR2nNwbXVGjCffn",
  "key26": "aiXc4Fc6mrrPK2yedLwGR1E7bBCLDivSSyNozLRA3D26DerB8HcYQaA5ggVp9HyRc9nV3eB3JaH4QsTAiGeCcU7",
  "key27": "2kB7KFpFZuFhMB7r8f8V7wKWfivzDWGLcBGETdN9PRPfWug5AiA4Z3TYzt7FwP6LxRsSupRY3g5PGz8ADAHiUGRf",
  "key28": "486EvPaxmsTQUpszJbHqvH7eBGV5QL6KWgvnuDGHQ7rMoF5RuZwCAAp6YMjoexuDBqG3sim1cL83xV95fKY238eW",
  "key29": "xym1QQtCBLbjaRDL8X3uxdxn8bDeiwtoAxj6uzc1ShLm3TvpL5zVZfSuvtCtBjpSLJEXjVgy75CzbEZjLD3fMYf",
  "key30": "2ch6jbSM466yxt2X2aAaxJER8pbCqUc3gH3MsPHHXBbGmK7hNkr656HffrmL6BxgWnnNGzry5DqYijFGvFC85gU3",
  "key31": "WecQApkCEBhkDffLA1QfU1mX7UwSXocnfae9i7TwARXV5d7AmZ3jBygS9z4ManzmBHGgQAMdzdYimRehJyfQrKk",
  "key32": "BTeYs8XbtyXH8LyfCQjUnEVjgXMm1pNC9QSHkHTJUaZUeGhMjw9NK2UQbd7ALPFyHncgGMks1kVQw2Adn3E74DX",
  "key33": "3zC7425gsyGt1zSb7aq3mhVMMbFLtzy4Cwv1NLprxKbrJEagFJxRL3RhcTofGjEqTEPfyTs9x7sSaVhKLNDQXey5",
  "key34": "5fdfQRCusbdsY2pe3vSxMwZCNZ6JLPbsY3gjxcN8yBihQAhLhPoD2Dwjq6bK9oSNAePuVyWpFwCEq1pqu9BQDhqK",
  "key35": "5w76D5es2uKVk93SwnFThJBpPLo8Fbe8KEJ6kQaf6Gxz1s5E6X7K1JvAEVa6xvdAo3cHJGghZXFx2JJAdk9sGQw",
  "key36": "5u5RhF7yv1vFNKWcDRDtHM8PwUJunbpLo2XW7498ZvuavYtD5fgqeUmW4vxWXWMPo2zB2wjEpwYpNQFf4C7xQETY",
  "key37": "3AEydhjF6oivHaRCYxqysaawkwhqafWwtfjVod5BXhKuBUbsWdrSMmVrjYHvUENB8eDH7wkHBzuikhhFsVs94o7F",
  "key38": "4DaypgMewjhHSfbqummmwnTyBF6Ma4RukmJQPug8e9Nr9mtrLdkuJQAtQf9gouQhF94kZX3dDCzd6kokxemUcZyv",
  "key39": "4brYeWKGceWktscD5PbXpt2hvxQVVR2cuJ7RiVYdxQjb17nYsHeVfhkHHgDpfjNuu3qDZwWdyKGZZriYDLWaJHwF",
  "key40": "2LmXTcMPbGDzsALyFtPzAaAEbtk1URmfh8oXRUCc35WYbBNVhXJet62vofHoyk9EkitsjpTr7x2xpzWr9xHo1kzo",
  "key41": "4McXwQDyMhNy4pZWWNJCobfpFd7AwLyDhppkBpgYoTaS5zKHiQg61YZBK8PFrPuovo6EN1Zs49RG9NR9DTSqKYPr",
  "key42": "32UNC65e3YAVF3ACUoup8DGJ5QAfDTJzDJokiEZvEDbAC9wR1CpkBguNTnHfuBSv7hVVPwDfshC9saWw3tcBB94C",
  "key43": "52yCSCaQYtCEtz7E9Sva9zCZMZgh4NcTEaKHirk1nmFqpMiQ3ftZkRqtCzZrbGVG28s1Hc31cR5NDCDWefF7BGpt",
  "key44": "jfpirkMxPgFR6nEWFZQu2REVUdU5iycCoUJZTZsfAysvVoq4BwF2QVoFH7Rx7qBJAjHFjd26pMHo4wxaPvBDL5V"
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
