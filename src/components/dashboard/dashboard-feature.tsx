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
    "etpgRkqa8EZfCRhLL2noUZoKVQAhJXF225PEjUSMGv8PifxemQLPuhrzz6ds1ECqdjSx9LCgys1a6sikCS2xM8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2So9VpKgJwMZYLrByAp8ZP6FheTYF4GcC4DzGzZ7qkQR9pUz4UnLBsCFm41ZDEdhJJaAho3UFuQLUbJEWHg3UFMs",
  "key1": "67McPLpenM6y9SvAJot5rxp4fbyuGk5BhQNfWHcvxrCcjvZqF72KJbbCVNXFWaQMxmQ25VizwtNrdLa985M8JaBk",
  "key2": "3H3sNhUWPyxkv7bAjwp8n3wKdkdM1EgPRwzNzCjT2defaj6PvzzJVxLaKZLRfb1odU3oThFeV7TtQw9fPzLM4Eye",
  "key3": "53ms6hkAuxzgmnM9iBJmT6NAsLdFGH8NEQoPLWPrsikbQXEaoyxGxiWfaPX7SZk9KFg7to4pCNMW1arJuinZJd7j",
  "key4": "2LxQGW3tHfMbzXQCWRS2mJ2JJD8dDrXY5V4UombBCLPUqdMwF3F6N4nEp38RnpiyKWV1XiwaWaJV2Uof7x7wrsHT",
  "key5": "5eiPg7TAc88jobZhGavfcbVGkJhVdmEnvZFnNEkwuoEfd5mrg2Y56zHoaFjiSuYe5C373ECw7Rv45MYgzoWsNarL",
  "key6": "593mXEH8NBS6f8YhqyD8EbXNeYbjWCAWDuNiZ8iyymQwHG1z5CxfXYQJGBk7ZDeDenj2qoE6rxbNiDUJunag6Rft",
  "key7": "488g5JqeV7aQ57RbhZcqYXuQpWXAve4tUtJZ9iKzH7G8b8wsUcBLYTvSQV8J44L1pjzd4K1iYP2u7Mrfwo2snyUH",
  "key8": "2hWS6NgMKFvvXBEfz8ZXoNFh6Q2AK9mF463aPnmdGsVd2ho1G1ot7UfaWQr72zBZrfRAweW1f8anWtgMfx1uFxZo",
  "key9": "5KqdsYMEcd6jHfsAgS8C9Y1Qpq7aoYVvNaVQwouBpTzSBwvax18BFdZgjmzvyeasqDLjaL6CxKGytpS5oMgrue27",
  "key10": "4DB5TJSDw3PLnd7ZrGY7CPP2TNSV8SePsQ1BQ384y46vgjBNuPhdynhiLK7ozDbM2TqyJbchmZ5M6hnXYDAwXMdQ",
  "key11": "5KkSCQ7qvcfWHBm3qUtNCbanwQwfsrej2Z4s6MdGWHfCffycWBLr42wqcQKjJ1Sebp8CrqyweJTmg1zVppBzJFzi",
  "key12": "5m9S881uDtnZHCY25AuQgwFtMhFShPaxakSj9g31pNDobGuC5PvXPZLYWppwpBtQ8GYtTYAALnEoRSrAdSUALzDN",
  "key13": "5sbHkXbkiePx7JZWyB3fYAGiQEDcuBZws2BnLHY8PaEMHBSpF7bLiQZBnHddJmcokNBfbyNrEhphuF2NuPDCtqDv",
  "key14": "3JwZAWdt1yMPNsYVVpHJTicUKTcrytLKeao5ZhGq6B7obXu5mCuR9ggbq4UtfAZghRnsqeGGdoX59U7nWYPX1ZEd",
  "key15": "nuVf2HewHB7hA6sa2GySP9Ub4vTymgREde5J1EsvrgQLnV8KyS8v9XfCsYWGaF33E1oeEzLb8J5cXZTeyZ3bzDm",
  "key16": "5RnvE4FcZqADJMbKsVASULYBTr8uhSbpkbN4YNxy3QX8MEkXLQeHaZK9ZFYYoGWxpuBm43dLP8UirsfKej6gDrHN",
  "key17": "5mdNtqbuQHRjnEEAUjRhCwQvQMijBMywK29KU4zaZz643DN7bwsRE6y829ndRgaM1ai8HN3ptRma69RUBGdTwJus",
  "key18": "5y6yvTXE6FN3HCeS7Jj7U23u9fzDsePy6qaJKzKLJXwfDqTo8MJ3RSm3sE1qpCm6mp5TznhxzoNacbdMBb1goW4N",
  "key19": "3SXewYP8vN8PqiG3pcWqr8mCYMRbkfcAHEtThhFz5EYvjQyBnkfP69bjQEZG8WP3faebBkF5vBj9mBaJS54iDb2D",
  "key20": "5JxfoBYoSjykTMGRMdxRqQmXZ5a4n8DHcWJGjxZv47HV74hoAaoz5kLGEMaJ827rfcny5UT6Mq26SuTUzcegajab",
  "key21": "3b1xpydfEaTb3VJ25951qfZJKBwV4Zq978aSRuM54RoAc7TckGL4GRLD7RK5ZvyvzNUet4mNC73So97VT6k63MHu",
  "key22": "5EuWBfh9gJse9Dt5AsiAeUFikPT7yHF6Hn1JzZwszAqyjmwXu7c1SZABKy7BeLXTXWwgfQgNQxmjBbvpXcnVoEpD",
  "key23": "irGfFxXLUT2vzNagHrLXFb1HCc3mR8mSGFq727dVaYTvuBANrtpDodugTWTysuL2Mqhstu5hva7QegrDiyorBkY",
  "key24": "thoiCMEFXurXCS6Z5n8bJS25HfXDzgZLPiacT7t8qbs5ht8PbnnjQANVZdNv9M6e67Uh3EvbkoXTMUTQwPzRn4W",
  "key25": "4yNmz5VmgvgM6TXrV9FViBSMeRHbt2C4ujprYc7Hy9V3KdmC95T7QBBTCvbfWtXFPxo2nkBNGDcb3HBkR8KdwsTR",
  "key26": "2Xo3wnBS4PiX2rytW4nVBmzqWE87hDaP35EQAQ3cUJcSctnsWzH3ndxDqTkUju1vQjeHzxCNB1XMycuEPUnfjsrU",
  "key27": "649sa5snPgsf65yXfSAwngpxoaEzCn1kq4QHpkEkFeUoEtKBzYqNLq6j5jowLgXpo7a2b5wWoMEHycGTvSJyHW5f",
  "key28": "2rGvfnHMiEmaYAP14BvLQBiawivrXLLVS1NYf7F6QFQfLJSniZ2gEi6jzK7F8DtAiRZoWaXkbLWZ3t3cnfawLC3e",
  "key29": "5LRPvmUbUDvajDZn4sTf3gZ14HcaGUB6zLYAmDRSWphuMSh93XJEQGCU94brQ2xyf9wFsU9zomUkRNFKSemDJxnZ",
  "key30": "4r8T92fN8mpBS7qVv8Lr299s1ZFFHsQmKisGUxFZzQogLWHACmFs9yNT3bhwwuXnmL6ef4WLTpZhJkEkZNLdtPyD",
  "key31": "2Qu98PGXtKeqDUzeXTYPoqJMuu8p2V4pGtGs13GXucknrMMWHET9c13BnhawhN8PL4JsgGf3CJCdP656tR9Am1qZ",
  "key32": "4Bxxd3WuUfXkuWKpK2ATcFGabsizNTvPiNXieg8i1wGaNPm1hCxyMB2NprwHso5ax6CXKYT69hiFMkfNVK1nfPmW",
  "key33": "5DSxgNa1f1d7Qdhw38o6TVs7qvZUSQxsM8B8TYZjzqH5tSV35nFthinYRE8rUSUBGxtcgGySDdmS5Mw5kH1hxKp4",
  "key34": "4BGCDFgWM1SMjYqkbJuBBc1zcwJtvA566DudskeBaeJXnvNFTkhNHghixLCVJdHjsxzFhigPg8Dgv3JWUfKNWS4h",
  "key35": "5qDH2YpcJeNSjyJt1fVDtxTDr8nEwF2K4fWqFpS2hatZLaQcebN4k1MVBi2qr81JryZDY1zRg35Rner3iK5VJVMk",
  "key36": "542JrEuAwUmrn5PS2qwg8xYrZnyLsCyKGgDt9MJaiuwaNoPaGVnyo8Kn1sAP2QHRJANgCeNSHZgQdaApBky7y2Mi",
  "key37": "3zVGYzmt4cwNY58BvaSSPYWvgz3fhYYaLCcVa9QPBo9vTcsdpsrde5EL3kWmM86T3s2Cxf8NUnQw9s33YEPjA1f7",
  "key38": "Cyxr63v5CmGB4oMgqrNymGihSEXmyJstVCpHz1sRdtBoRQmXsC74jZT53R7WDn54PoyNWWS8NS9jzLaZoW88nas",
  "key39": "QNrPyuk7GSzHNxv8WLpd3PhVT7K3K6p6rczMdMMcPUNgbZX1jTqRsmfHt917obf9TBc2ucSA7ZEK5Z8QfetBgXK",
  "key40": "2dSpHpAvWvBo7Gq9SzTNhUu3rDjkhQfAk8p1vrfbd1FxNbe9JQYTchG12vewEhWCSPzprPi2ddeHDg1b9BYKZX9W",
  "key41": "pUoBggDSmvyvk6rA5tshoE6jdkZAHVtjyWLBuMWtoLTaZVNftkqEtSQjvzCXSfqrtzmHoE84qbCB5i9Y312fjbf"
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
