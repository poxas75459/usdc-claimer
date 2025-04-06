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
    "wdaWu8ms27tbT85pcUbB9kmoG8Yy738eV86pc9EHwEamTnhjU8uAa2xQEBf2Sbft6WjPyLHuXiaPrx2n2Te1Fz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MtR9usWc6fc9kwUnXYxqaesyUBwiB4cqk23MtACft8XshUYPRKcPqYK7QFkooAtQMwjhKMvDoQDadMgkUghgEqJ",
  "key1": "4a4TiUC3UvZB1WZLrcLk7VEDacXYacZSF1fprJ3KzL481TCmzUhLqZQzZFbBLkpveLZqBigQMJN1FGdG88piU4vi",
  "key2": "3QVZ52YrETLHGF6tDAsTB4oiwPDo4CToN2ALZspRckaiB6rAbqqx3ion8qmt3MtDy8vSVcbHxR7EqAQGYzEp8hwT",
  "key3": "2a4gFUn2rX9A8kMaDH3Tc5fLUMhGwaKcJZwV9hegVDyv2Pb4j5kV2daCiQ1pMHwBMvXP49brpw8Hx3crePQ4sDom",
  "key4": "3gLjSjd6F8PyM6AM6sy7v7RRNjgokStxQu4niG3RYg6G4uPMsY8Tb9FoJVCJsMYu8trS9mFS9kgaF7oVcisiRrXn",
  "key5": "4MDRJ4rwuwQdnBCTmUhbU5nCqVwdm1uwv9QNakrF72rj4xeYqC9XzTaBzoDPHD35nFiLCJkgevC9t6R4736YHheA",
  "key6": "2TGuiaL8VthbjU1GbXGo4WgMuukyxh71drSeDLayY3LLkETc6PEvYcAuSqUiXyKUJHjhHxvFUD4V5hhAGiytri6s",
  "key7": "5fmEeDa1vQ37LXiqE3L12RABTNxP6u1rfu3qydCyVxvCUzoXoCeB7Jw5LaScDPnhdizWsuv8cuAg7vPvXX7zsWXE",
  "key8": "3Uf2e81XCQ4yiHtEszLe4HaULqF9dpFJEvuc678Pm6PiaL94BwYe1vYLyJcn6p2B7SZnSphwfwrrHMZqqs6Mzsju",
  "key9": "56cYobkrEi4AkCnGTfZpPRREX14MPKwys6fp2Uc7BdqkYo231J3Q7o1kkZ8knNKGBNDDiRDooy2n5resypcxsR6V",
  "key10": "TK8NDfpuFiR9E8vq5HpbUB3EM5G6eXn2wxcqbCKBvkVWm3dhFiEyoptN7Zpy833zjUrKGpNweKY74rHa3yNSddw",
  "key11": "47hChF5GJYbEp9JkKE2Xptq9BVCJjVo4Ln6HPFLVJ3D4xhmXH4WyZpce3juxBd6xmY4JA2sDmgrYFRYtUDQtqCMB",
  "key12": "4UQj1EemGsMD4aE1nBwwmrbviWuDuhg8rxUN1F13stBLkBtTMVBa9BdKb5h3cZQiYYtEb3tgGX8WiRhyd7gbmUPB",
  "key13": "B7UEnsVZ4TqiLTaLR1DbbECw3UnW9BRV4z8GmeWjmYCrtos15PKLwLdJWVy1ezwjvSLS4Gi59RfqnKmWLSfiw6A",
  "key14": "2MwEcuxq6fWZJjFRMC7YZgJtjE6w3mpMC3UPSk4rSKxnTThF7fK7meuvCd5hSZLV2fB8h81C2cjRzaKoV4z3w22o",
  "key15": "cznV9vkSHocWAPnS6evvQLS5fccvBCcRvLZvRsNr4zGjBXwHRedyHzidXBpqPmDTGTTV8MMcYFJYD7m4XyGwkGC",
  "key16": "27n7eYD7xzchRV6eY8kgvDkbfJA2wZgA5WBtG6grcGQWzr4UDWqZMn7mXmbRmED3uNsF5RNv4TTZNzAzjHakuX1A",
  "key17": "PuLyfZJ218k14u92KqeSHDWrF1DfPLHFUVAfo8jMwyL3krFu9eCrr9thLqRiTT1Bj6yb1WYvtZKrC79hUJLrzxe",
  "key18": "4SjJAWHh2uQx5RcTd7QAMf5kZU6RqLDUssXFtw1X588TAdAoLhCzWUDMYVBRbzM6Cq6MFunzz1v8axkeeGStEBST",
  "key19": "3yiBgf7nPPn66cGHawHm8jMHBWYvFE4j55rJUejfHNHZ2bZkRFnd7QqrpHdygGytXoY8xxmx5nYWviNzjtUuFtLp",
  "key20": "4zJUMtZBXQAqAhbFDPN2iDDS8dF2zQRmVJCbNtGLGLMUJ5xbgn4uSNdzD6dNSc4HnxzTiopg9s9QmfuYHC9g4TB",
  "key21": "22F4vneVnHTS6HC9SSEsF8tghSDRUNcoBLwUASWsfRUjkc9n2BjwDnPHQyT8qaZvD4u4SkZ6VNUMZUPKQq8uu6BJ",
  "key22": "5DkeJWicWXgouHSdUQBGaaweJBCWYcwFQZz6Mw44Nz3d5uhPKLDYXqxiPAz4cTLi5ZuqUFrEWuxravRtStZ3uXJu",
  "key23": "U7wd2YLHhdB1pexVAyeyzwvd7bfCeJMA5s8pEtvjhZWGZJRnjpUMNefBNYeXPjQHABpj5p9nmthiuthKjbFbcV6",
  "key24": "57XFvaxC9GncWqAB2D323UX18NC5mitAUnrPomSFdBJDSL22TcsgiRbVXLMwfzpogwdruMAQJKegTxKJ3tWZJX8Z",
  "key25": "5qhh5tPhJYjCx7KhXpMRZ6JMEnryjz1LN96XXSXFJmXEC4jTwegxyo5gPJaCcMhPdWeJ3rCu3UWVHQCq5M9ymCox",
  "key26": "4At2r5Gi2BmUmLbDZ6dUYJxXABduYUTpZQTGTh17D5BgA1mkHNfdeJnmUJwWs3N2xr2gM3kqgiDtWaRcHVmcLunk",
  "key27": "pcLbAywsmQdzNRJdxUN6xUSMod2AYvmpXtFoHMUVDYiwKESapYcdUg9stbYSk9y5NP2z6JFFyVQkW95PgbMczRq",
  "key28": "56wMTAvdyWfEduzFE8p1B8DNLUS27DXzfFyyVM3XvL6H8TsK6VETy64se1NuaK1G7Xrgg7RgVnpYwdjuKQ5NaqJQ",
  "key29": "3z3uBRbE6iHAePHwAr3rRxC2ztUsrhn2CuzPnm5ZXbaoy3AGuiQydKQDNEsE6VuqYuDKymErFZokdhxqiQ3V45wq",
  "key30": "5pgCQUH9uNFMG8A8fmnvK5gUcBJdTiBFbsCtugqnHqTFAWKvQ1VvXQJnqKeESn3p5GTgAQUi3ZNWaZGZCyVd9ZNM",
  "key31": "4QsSDzXgD3UJj5FDYLLdRSjBDWw8VxrGeovZESuJLiBVtcmA4Mi8EV9Rp6Q8jW9uiq3hM24Cagsqsf9G1baLW91t",
  "key32": "aX8Knhdp6zjKPjBJejF7vjsMZYkocCjgMV22fEvPBc78ogketJMvPugBBEpAXjcWxqFR6kdRrqZaTtBddmBUEU4",
  "key33": "2BsLH1Jpj7BxQCr6PPH3CNkNuYZ2Bke2FLq6EL4csdzvf8ZWDhs5ouD6AH34mHuubuGQpub48qFyxaMiqbDZ8WNN",
  "key34": "Avg4dFs57NCt7oG5S36NjcxYbsTNsnGdnyEy2SFQa17hcnu8EK8pWb9W5WSfsapRLfe2YCjZXPw7GYr36AVyQSX",
  "key35": "4ucrjvuAnGeJyScCeUanByrrfMFdmQ7N2c9fceafang1JABm3oVY5G1KLD236J98EYf6ZJBeEdCXX2LwTwWPsCbv",
  "key36": "2KsewSvwZ6EGqew1ymGHUvt7wwtz83UPZvb1YeU1ECsk71Nk8tv2kGa1Vsa3NuBi6wDZU7xGVrHZev7y6FWDuG14",
  "key37": "56ToWNQ9u4DT2B2vYjTXbUdBiexYt7pSMXQ69vwU1r5oLWEimDhoZqosxrGkckzkQvUDEzPkHWd7DtuNbHQcfTJN",
  "key38": "5KUCVedwk4BD2rie4dMLiBxt5ZqfkYfoCMTE218MWYzabU6gSSEPDGA7XwANjr4MZR6appkJksUyrvEUNf1EwExc",
  "key39": "36bAbGvCRJXttod2MyqZDz3YLqiJAv9BkDnvx561G5VfBKaopsB6zn37ca3HX7Lrdi6LpmT9VQUh4Sq1ggHoqnSS",
  "key40": "42LuHv6ETMi6na948HKj1nvk3ttEoM39eNbokwJouKtiwNi5HmwR1sY8YEsw4NjQ3QqYz7NYDbfQaFVDkHd4kvQy",
  "key41": "3TNn7J2FyqWZ9KB5aFuCDKXXYCnHcLp25SszRXyGWDMsKaLAEVqUpYDG5rRyCmEn2hKfnCKPDMxNJp5thMTXNqvx",
  "key42": "3LyW6BmY8mVpGQM4uiEotWaz932uTVbEzWAtqFtDCyxzLiTMcTePsChCzGhkuEu2fQ9asSU3a7pu8yPnuCym9Vkf",
  "key43": "39SQQFBKRoqaPEJhYUw1aS9hYhZWqcyyBQuXJ12GGx4dFNjht4C8wY4TZFuXsAwSZK1gDDKPWnFt5mghPewAwP2Y",
  "key44": "VV1HN6ggi78FEa6dgFDmZvkcVjV3cr7ugp5Ja67Md1JnBvHzxihJTf3X9wGoDaTHJQMk2jP3HEXGUYvboxNoUug",
  "key45": "3kKNWjGPj4fMtdyU6Tqs5JD3Mbyyow1dXSrEeg8TwXELVAYwTDyBQnxyRu3Py8sbSCiYYsyK1SxF2LVvaZEL2qK1",
  "key46": "3eiUvNbesfccR5SaDkfrRhY6n6zzVaYp6DDpN9T4qT7bzYYKG4mV5S8WK2gJTbZy2wNwtMMVQGiy4eVMPeG7Xff3",
  "key47": "Q3LUTUWtFoPaNzyHy2rPHpFhdEqx7dte1wxR19JPJwD8evwJZ9ob8aXTT7sCqwzAcukfP3sNZQ5y6Hw271XKGds"
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
