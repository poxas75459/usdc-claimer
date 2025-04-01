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
    "3pEFYtAUniNh7vgyn6tNnaZKTHFGHzvqnQ1nDszerK4krYPAwmt44JpRtFCNPw5ngg5T5WrHEphcetNXKL9b4m8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hzaC5P7ZYbAJfu5WWvEgyA5KisHnkhRAdakkoSFiGay5K5TqhrQALsvK6LR9dBahJwE1ubMjyTRZzKbcEZFSgNB",
  "key1": "21L1nBYuPEnhHivP6LQqcBkvi5UeWdZFNrcexZZboFNCCyLyy4W3QSV1BthEasRsX3ZikxvnFYNwpXbkVry7ssVq",
  "key2": "dN87DqQjqjhpWzo4mdeGmb47Kb5otFgVzDW7i4nQSXAezzfmm9mdjUZPUQeikCbq57Jfsb8ysRyfHwneA3wG2N9",
  "key3": "2vRo2VNSArfn2Me7TrziAdy4tRY9zhLu8by3XLdfKFF8j1Y6K3inVm54yyofGsnJH6LV5y71YhCosgfVgUQLTMyp",
  "key4": "3kodhB95xaE1xDNhBL5ihsh9bhPaZQ5YSDHXHqbt6jNkypg5HWm2Hu46Ni9JP7B5CzS6mg3CZ74GKLE6UZhDqYQM",
  "key5": "3N7oYZhZh8LfayLzaX9cqHfSUMjJZRpf7xwwKyUSxTf5cJrgCYKc84z2Av98diF8wGBrnmhiukkKb1a5mhEnBamc",
  "key6": "457b4Xk7DPwRF1wcqR47RKLyDLPtHTbnAAzbi8mznduSoL2gZR7eGtNEQ1Pp1zaMXkFamWwjNkU3iuUMtLGCqm4Y",
  "key7": "9vBjao66bnTEgXfKVjKsX9zCKxCMPApdM8AneJPhTn1gYcCpxinSxwBV8juxagFJBtAVBjFe7U1f58Ct5riZdBa",
  "key8": "UZuNsuGejNNH1nyBkUCGT8R2DdE4WE7hbcUZEB2n9n8NKKgLULK8FTcyWDMGJHTn1Y4uCago9ZSj51PAzkwGiMK",
  "key9": "5KT3fW1p1YMH3tqEwmJcWiwwDQHgnr59EiJGEi93odGjDcGs79gFf6YF1EYWoJwRw4yRGxQVo89wrmG4ce4hFbFV",
  "key10": "qyeHF7emHaU6b52wvHc6y7XvGFJZH29oqvYcDYLs2yfQJuQGzzFcW9QfqxVYnXbqejXvHK57senRHqWUHZRgxNZ",
  "key11": "458FsrURtpDtiD2wqEWXca5XTRnWkcyeVGn4kP2yhuku46AQwbTxca8QDymcfqRoevSwg6JGgUV3sNrxznnWSSjN",
  "key12": "4sdFeEvJkLSFqCRTBXBE95SxEuc4DS6dPSpZ8pgbyKa5M88cuch8eunQXa55LeCpSnFiGgiqjEwG8NFfRCPWJcPk",
  "key13": "3yQCFzdz14FVTduNktjFybHZH6zQdAMbM92rY4SZ8zBvW1HUJK8CUQgNj4jjMUC3vR7GvPHdAAkwRyiNMnusRGba",
  "key14": "4rpz9CRdpEwbrFyu45VZ9DzoF2MQdxLf1VxjeFVer45jJn6qLrLDhovX9GPkCmtbbu8g5NRjVXBUQTWdvENkPf2C",
  "key15": "5YAdqQSbigf6RGiXJmfFqE38szZtfwMo4e8NtPwSat8hkXLaW1zNEdRosandf5WPX1ed7JQtj2jPsdc6WBdf1Nq9",
  "key16": "XWFfzardgJwtvg6ocm3ZmDtezjhe9nBx2ddHYa1hP15WWsaeduzTCG9pR9PUJMoWdgmpy5L356rDFD9DYgPDRiX",
  "key17": "2ASf3TtKagvCTHsBYjHrxXAHRBVWkPpZK5wbgDBSjs4TE8myUkMcjvnqNDvj9K6uSDc5w4mCgaR1YvPAHvmCLqsR",
  "key18": "5hB9vF6xARv7hAJSeoj6eByRv4yDR5mX71FRw1BYYfFJdBtd9Sm3memr48KfGu95jmuXcXQAjTUzWgZYSsZ2foPR",
  "key19": "3bPYewSUeaG42cB1vvAFk29aVfej3HJi4syMnYMBPuq9Kdnm7UZBArbW5EGAJLUQZhHHstzcQTwLN5WTgVx4N3ic",
  "key20": "2zwxdHUrfCv7tQpMtS9KbfWj98wC3crmd2j53p2joLbtf2DXYE2ZBjdKGJdErHBievBNwoLDK3Cm7aq1qr5t82jh",
  "key21": "4eJAhSdPYKT3GUL8yfoFyTEQ9pr4UZRHPjbSPjAsJ7gT3fhSh6E36WYnHwQLsV4kUjP4uaJLFCdruH51Q9KqzKHP",
  "key22": "5TgrCJyMC4VyapL6Q7CRwctqtF7Uff5JU5t4eghT1QdB12y6jz33fyxYyr3TMtuWAs2mwN9AcniNLXthAGfJDwyw",
  "key23": "3UYCGcPm1bMWCvatjKQH3jybjRgqTtoFWZerWHfjJ74Bc29sHS6WTWWP9Fm8PT3tqM1adiRRKWYHiZWL1yNwaxmr",
  "key24": "nTMk6E1w8CSV7Ppy1271qERYJUEtqxY2yTkXeg2uvmDikXoy8mu6mJpk13g1RVTfaakvKiLddA9f3BkCqLJq5Ay",
  "key25": "GSBNi1afN4DJmgNVAExHFH5QpCwsLA5XRUTetq7KAtUt2UX6RLk7N1YFBDg5Ng2HJb49ZXygqabKgeMi81wUitZ",
  "key26": "4eVBK716N5xRVsjaN9974q68iqLwYLq6JXXDmmCEU52NC7umtSiX7x71CXtDnzDijQje5JuthdKWpvigDoDUsRdc",
  "key27": "53Xikx9qMgc81H2EeAvXN9fWgfSZMJve2oRMfsnuXLXoKCRqSDwUmyX9j6acrtCtjGkuwzg7cG6iBSLoqN1F1x91",
  "key28": "2vRsMcE8F36UvFPouQV6sdY3ofUZhD5E69MvG7W1cJXuZhC6z7FhaYjgHjPS2GUj5PwgttR2iBEfAifjdspeQqyb",
  "key29": "4TGK2hMkLUvDR3TbyTjpHd2RPQ8fzEpcXt9RgakCccgoHP8MuZ4oXDMXMvEcSN9cpspsknoRhx5sztN29LBgFv2U",
  "key30": "3FTQPTVNSnKGUvnQ5gEAFTYYX6W81pZmRLSXqRWUcLCkv1kTh3yp1x3yvEdVi2m5dknAkvdsQxgT2EwhvTLcBGod",
  "key31": "53xSBKiPPLzJJT7Dj3yUy5HScubf2vUk96FYQJbVTcHhonPTnj6RSffPS8xsyUjUPbTceoqdvCEbTrgWbtji39Qv",
  "key32": "2LSiwvfcXNMVJPRc8jV7YtTTNZxNeGcquPWCx2dSLdX8ZFEfJLW5ozMvan9rxFM5T4iywDVHpqGcNaTBtQA2eZQ4",
  "key33": "8LKwtHCkwnuyotFqbK794yurX4q3hGhjKbYHSDwjATs5VBxSqTkr6KPmcjcjeEv2CTRqhfXCmf1CesRVsqXjkvv"
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
