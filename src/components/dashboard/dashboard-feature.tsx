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
    "fpWndBDcgRUqi6AC3WXEKNakLktPPhm9GQnisy4Sg3CKrSHUth8a9iFkD2aJo8QY4HmgY5d5H6RfJzFp3GLvwg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vvvZrQ2Rho3CPGXKXTYGHQoj5xD5Txtac36SicJhDy1AqR1J6jgjzXb8DnhGvZx4rem28GcE6JTYmBBteiHTrn4",
  "key1": "GrEcJSSiWqpuoEG2yWo6ZfrAQ7RMw1sKvsg4pJLzGn7uR6F2bCWtPBWBh7NMG67nUiUM85Xfwhruq7Jk4rn4yrn",
  "key2": "2R7TzWDvN7t86nN3GrPn2ibQ9WXRaX92yhT5XfLmRheHQnsRmqMGycqcSGNrTXjjVAsETzdBsVxUuJJ3tmsTri9x",
  "key3": "3PHDPyqucic3HFbAehXyZ3faCUKgHSJs1SM7EnzMb6kzREioKWn5wdmnUJPYoWGoC88hVty9fGGYXYKEydgCfx3o",
  "key4": "5sXFwLcevivk41ua9s1XVD859FnMssdMX75ZRWCDC7ofoPRBsqc5sSWh2cejMgWgkuf1v81boJNUc2U28a2rQLZ9",
  "key5": "3Ude5zFG3o4geq5BFCK5CCiPrZfbX1Wxcebhq6NzoeisPcKSkdK2Ug2qfcWYzcwwPBi1jsEs8ig7ahCFwn9dCgXh",
  "key6": "48G6JoMRZLqZARkxRUnbu7JZLEdpGKdQRAv3Aoyiz8cKTD1Jb6XkSD3FD1jAiMNPKzFjdKHt7apXrxh4iVvNjJ1Y",
  "key7": "3GUctGrA42rpTmcbH3BZ9iLK9LJ2SGCoCFVzEcMPaib4JyC2sfGkJJPCi6KFYtvArkr8hDfNgBEi3jZx13DrxiCt",
  "key8": "2WpXU3U151Avtp42kXEFh5byGsNxyQpeAaA5xU4AdzNGSqd6uyhB3PRmiBWe2Ei2zzs4U7ozBbqRpMDDDLeDQU5T",
  "key9": "5rU5p7aKfinaKrp6o9qwqxuDYjYqoWT59T2JkTyYKqpxTxdfWxCtW1r5dEcZuZbU2Ryp1kCxQfgG7qbCxvztENBF",
  "key10": "319kD4ZRNwLUeA6qkFdzBozR28NUgXP9Ftxns7qMndMUZnnF99BL5Wwzojb3v7oPF19CUbik3sY9BFxMtz12VGcY",
  "key11": "5QqjkFCMDVprkYfR8QcBwtk6hcsaZBLQHwg89wP6DJVAvx8PAT4TzaWnuEA47yptgX3ssGJiJ9N5nrwTpfkBqqcp",
  "key12": "5zL1ZeoLnB6tjjP9YiZPoU77BTWhPtpLyjv9uY4FMo5B5nufhdVHEvity8kdrHGVCJfFDd5qQZKtrVcFpLjsnZ7r",
  "key13": "49qJ5jcQw5ey5BwqZxzg4Guy1GVheviwDPfsQeTRGeprTov7V9FGAvxacCuu6JcN3CruBaNeCUEGjrZVncwcWRqd",
  "key14": "3h6rn8SMHtZmNDdQjCbxGYuhUBfEAYWNtrM4yareLTB7y7E7ndk3AH3Jcki2uV3kma8wx4NEsnjZA1JEx61WZJBu",
  "key15": "5gjv9dhTHBKAWSaUQKxFWCaKBshXt3FVqiwaUP4gcR36qsD4dAsTJrsgkPjAHMnTXzfoC1Sd3rCBtBYzW7XSvzqe",
  "key16": "5U9X54u4DLHrXH8VqCscMUo52LNmQHe9NiJZnULEkeT3aciCPkMFuQLdzTWjuTb8ofjaHgta1jQodAjAiQSgYFv",
  "key17": "5mk9dQhC526n8PkbZDJBZaVJvav63zFPQj74Rt12FZV1549gMA35jrTwpCj5zrSMECt9czyG9NcsfuuUQqWBafqV",
  "key18": "2Gp1mbTZbjm7LFGiiYiizaYZJCN3pPAy4Tr3DQWQbia8HDyzXup9HWki6wm4bn8TKrJibygE6ENEDjA2P8WuBvbi",
  "key19": "4Jh6k2dMbwCWW3UzWCwThTZZUMhfg4cGxheKkdhwnUcc6KgFhuncsXrrWdKMXtTDGoAuLEpiCXD6KVpujngBmvvE",
  "key20": "5dsTZiUjsLCiFYKoVqvGRWDVDsmqwKxQMKoqLEPVrBxTKf6mtpHjrmevDoEKLbWtBUcMwdGWorQxZcPk2ErNaTpM",
  "key21": "3iNw1a6BcQxRy6MrGdafLLLTueD7U77EVbudqufpF5G66GpQLq35RWU1ic11753sX1ToXxrcu4TH3w9HKqSdsLro",
  "key22": "4w2QKDXSuiKoaXjUEPi3w5XPAKR2MSyUGb7LyWdZMihADQVMxV2QaUtFWoehUkwKyxqhC7n9bdAJmAZRTiH5bYLi",
  "key23": "HX7jmrj525Us3tjqepabokkczmeXhm87VWsXw6zwZwvPGH8QBazyWkTRrVEY7DBbcBbC5SzXJTqxv3LeXuK8i9g",
  "key24": "3RCdweoY7phasF51tVE8gDxFp2uj5yYQY9RPFtTnJtZw9xej7uanASJAoPL5gJEkBTP4enPXHkf3dSAEa11jN3kX",
  "key25": "49s1a7VmT1Jn9MCpGgJ41TcXP2bZW76DStRFdjF3vo63MRPcgDeWRnPhAVJud3Pw7yTS8AeTtxVa96cTzboWmEYc",
  "key26": "qhGMp34hhKueXmjPsyx66vhmzhecGnrTqT7aksAKESJA6qaePvQdkJhcMzb8pyuwahsvPuBHmof12eoksceCehM",
  "key27": "9ftPsBf5UtL7uaX7zqzpQWXLvFVe67GwVYnWeCeaH4c55yz4TbJMACuuCcABzgTimnqiKBNoEMvbLYvaAkbMpvr",
  "key28": "i5HfrVghbqVdiprTpqnSqRRcHG8qZTTwwt6XhAz4F7kJgxhTqpu28gUnDpVJ63piMdpiL7KHiM9NRzbTKoFTeoa",
  "key29": "3nQCnnBuYd2hLoucHQh5vozxvLFxwWWmt1CvERDrpQbNLWvH1tid7biwLyppAKjkiEgNeB5qindoHn5uTW2rnE1Y",
  "key30": "3RV25Wz6WRfC7GaYoK2XQzu1PgAGaJ3f2FV12ZFTXVdfm1iHXvWZR9YWVqJzH534TxCPdhomwAKBRGi4gWb4uAVs",
  "key31": "5JPs6TWvydojoXSraJzweyBYvdxQfUMhVVPNoP1wghvBTYGf3wFtUAxgNFFdJHMQfBNX6qavnX3vx9YDbZmgeHFi",
  "key32": "2NG7hQ9CJuG1opSiwmYrehSmqxP2rv3LYtNepa4ZGSkbPYHgi9QTmSidM52VeGDGwKydfLoE7UnfRxVoj22zXi2d",
  "key33": "NrEnSH1kh3rhStJtaCasEKMp2rLxPVR3NA91yHaEV2umbw9ghV6NpQKfCgQLMPk94vYkU9csAGUQnvdrdYHDRfA",
  "key34": "ccbCFTY1nZyZSzaQ3BbC25ZJ56mxvYXAuPLyyE8y28xQRovqpbRLsbYyeXcaP9qkrFPdLRy96MaaDQfCXwEb5Xb",
  "key35": "3RUhVpP9cJLXieg9mDLCWYs97nq5MnKV1RJgDweTdSxwETMECNyVYWcWNBNksG3tv8ZKGSRPwS2JS31SCATmgLsz",
  "key36": "2Nw3eeKuwYGCs1jTF6SSEtimMR4CEqHyxVUpF73BzE1a6ZSPNbuZkYELbMWRvyjPtkhWKGhKe1mmXpzJBZPvnjd4",
  "key37": "4uFbDFq7wg9CoQLNMSZYWcwEohJH88vquLMxLBeYd8NzLtWsQbdPR48CATsQctGcqntH8zWFMzj6wCo4ExoEk52Y",
  "key38": "XmpE73xA41w5JqpYDXdh4W7VDemmFCssa1RZrw1mVQA78aCqJ7SbX6oGAiWdASbA6js6fqZBzQ6yqqdqBBUSsRu",
  "key39": "wFWiVwTdcwyvi8Jfs2ECeL1XZnvvhzyDs1c1oQwxx8trP4GYMLarfW6iQAwtoThcepZHKtT6ZqxqFUaifut8UG8",
  "key40": "4WbGsft8rx8VNZdLexyiXymNo9YR7ir5L4WW4X9x1HCmMnUYhiH3x4aXZiZx5fPD69xnwYsLv5XuGcgUJE8FMkBz",
  "key41": "3zVsduFjcDpYGx4LuVmQne7DWHdxHmxraZMEWQXzXyks8gZWWLCPtRSZwdUkRs6eArSdTER1wZefQ3Gj8h1ZtjUA",
  "key42": "r8g971mSwwMXj7wPnDLETbgfpzocmJYzj7uLKT8cbKWNDDrPmkEnfySi19NaM8RUCNqtTD8ZxZqgRCTX3apgodJ"
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
