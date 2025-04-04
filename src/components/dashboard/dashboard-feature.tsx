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
    "5ARr2YbtCv6HDgnfH9sq9YxYZJPAsd6Rgcg2EgpPjCJPn22FRBoU36TXMeJbnoEvnaKUcLiMq5RLLtaF3YzzE4nj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vob2ckSRNtnM4ymR4E9M2pAJc1wSmwYqgBfMZcyhx2gp8bFWRNoof1Mnc53CFa69LZPadCeekptt7Xjt6cHekxv",
  "key1": "AZTMQbMLZnY7g7U2MWfrwdRsJPafRWKd7TVM1ZBbfwjLnAi8HYLpjjrZtVBLNKAgR7t8UQ9Pt4bRdLMcXPVSd8L",
  "key2": "3xq6B7rDLiAe5HymPNQZYPcvJzjYr2YTjwrxxuWWDACoCWJMsgqyAWwa9Z7FQu6cc7vRvY1Bud5Q1RQ79zMHfuPP",
  "key3": "3rzmAKsKPQDMKEgETnAJBS9dkDwoC7qSEiGjC4DWadSGUjntnnLtkKfZiW4m3SrNh62K6cWpV9JxmCVabgzXRyM4",
  "key4": "286FDUsLU6PRNmKRJaQajGc19KyvbiuV2WvXw9P2hNefmuDRMBLXU3AKFXAbdQ6JTc6Dsf1qjo6CqqDXtkQvGaQ3",
  "key5": "PdC4yUUmmKviywybEdFCUPuGbMNFZikXYTfgsh2uquRJ2QXXUH4wzz1MsZ3hsWigjVA8cxra3a3rkqt8Un6528c",
  "key6": "2KGXaV9PPBmTT3iUjp57qvUMrPTHDx3TGP1vdBzJSzgr2HJMdXzFMiVZfeUmA3zqnJ3kjkeEFHdR6DRpw6jqr4mW",
  "key7": "3Rgh81SpKNuwdnb6o2gRsSZyQmufAWUSxk24rc7yKYsqoWehrU8BRYRd8xcnp5U4VtHBfzioVu93DRhneCmg524o",
  "key8": "5o8EecZK5XnWU8YY88KQ4tADRaJVruXW7cxjfKBDNpFSHX6rm4656MaQA6Nm83Gwt8YjkhbMgkV4egQA6wKV9cJD",
  "key9": "gGxZ3xBumt71teuYKr3MEEoMsJDtGQgZU4nU8FbgjM29XFn7PAkjWXimeGEKLikS9yYwCBJriFJbCoUTa2NwdS4",
  "key10": "VXMqZQbMi717trqKU4XVPxKbbL98P369npDXH1mjHjCkj5YjaTJuYh69kw5yxQuJphNRA6RVodvCrmWGbbto6en",
  "key11": "3QMPwmh1XYamsBkYAGGqWQMtwLUgNxnD1JauL3JiL8f9mreQ7pcEr6Hv9R3bQketdZ1pEjsTbsWNpjJW8sc8SjX4",
  "key12": "5FnvaW141r3kVEJKGh7Rf2tPBUk9QBkiAjRo7jLsHizV4BjEtBpMbx1tdfGyxdEn63whmKhww9zFsmwoPnLbrVBA",
  "key13": "zQ2YmL2PLP8VGMHW3cfBMSv2rxfGVDU7RL6hHDB5cZinDYYMcdRVME11LPAdzw1zSfQnzcBBD1asq5DmFzVUwJB",
  "key14": "31Rs6Ze6Jhi7AFgv54xia259noCjac3RBnP4RDBwMPvys47r8eH9kkozEfxqanPtBysRBruaRJ2n8aDHdjRZXvxz",
  "key15": "3fgrzYDGFGX4d4WYypAnyfETMv3S3RHiSAnfi2Kp9LcVUEHZG3oxA2sLXDQYUnzAs7FwNLGMTGEphTit4MW4S5Q5",
  "key16": "3kWrxytps4usnhgdmpLM39pFvhKJvxJRCaqEtLm81yCCDGizn2875ciPi95Ns27Es8W3TMWV74phbZxiK5Hacmtw",
  "key17": "2WaS8o6VivUL41v1ELBJMK5qToWLw1VNjL7zMzKmRnYQekC7oDXN72jcRWJjxngnipfhYXxNX2he54RT2MgJ6r4K",
  "key18": "496sEsPyqFTZ9WoHHQ3aoZXQZtVzBybJdokPEH5cuFChx9b8suNtNzWkQJMQ9eRcENQQPC9qx7vtxA1pTgBSb4h3",
  "key19": "4N7o6naUAQv9rgFrn1crxM95QSZ81o9Bf6TGkWY9mX1PMmG7XLeRek1VnKktZwb7LbAZfSgdSxmVirDhEeKif6Qv",
  "key20": "4HYUyiexw6s5p1v9gpMoW9Swok8bbUJu3zc7XETiAsmER3k7XhAXnyzvQrHgfZhB4eLEiWJu3jkWVkmKvpPDq7yX",
  "key21": "54xqyT2yvykci9pSrPgkAcRkLars9xPWRdeCntfmoFjPimFERjAEmoV5hfy5t7D5vVw1LWkMayYzaQmwCC4R7EGx",
  "key22": "3qtS569JSC65RkrkMUU2v4eLza9fmCTV2CatqSYUzuRx5RJmmTZweSy8VdidGa3yTng7FKBGwFbV4TryscpucYRx",
  "key23": "5f2KgSGGojLe49pmqMccUvW9MzAWdS2rp5cCNKiakaTJk4PvstYhpfedNFpM5Z9QCGZbca675A1UCcGXJBnef9aW",
  "key24": "W7GWussuSNTLNqs2kAK5HVbo5MDMff5cGtasycqkCY9qkSuc2XxtqwTcntcTFoMJEQzT4U2cRoPA394Fh8fYQRt",
  "key25": "5DpowpWsqcone8xDuDkxDV9Xnqtcb9VknDQBHvrfHtEZEdTgSDg8xfLxtZXphPT8bon82rgU3XSfzTp8T1r4jYC6",
  "key26": "5qACqVnp9tWTdNyBGGbCGHKtxmkeZNMtSu7A9VF8rKp1DrPHXQsy4D4983oj6Coa9ASJCTnTwEGggJEV9wX6QAHK",
  "key27": "3WwZRDv7SiZDyx1ikK3iVAFpnWmLpyWwnAcNkYJ882wXaVuzkzo3jnpJTwgkVmXMgmSX8hc2rZtgiRpZcTZvWPph",
  "key28": "29LCkKKQRcYhJNzUD18JbgQd1d4Aqr15LRCUYFzJMWaeHNm4dMZ12L2K1ztxFVPqjVAaPth4MAuZaYMrTNKNVept",
  "key29": "F46pqZJYvrkRNgBD7SoTEof7t12ytuhPM5UmCeTmaN5USUi2CoRVupCcWTs3w3qR3fXwTeurdFTeqyUCU1G2ZTN",
  "key30": "2LekSWqDMf8VjKebEZs2gRngJdpSVFr2DiitSDBPrg8daqcTCeAR7rfyXFiEgfsKKhHNnZNQqmi4bapktUbg25sA",
  "key31": "5ZrKLZohskcd97XAWvf3HGF4wvBQxLj5W5DvHjMhYN8vFQ92FZdL4v9YA3WcjnUvwt1sbtTzSJG6roiF2i6tcsJZ",
  "key32": "4NDC984Ymz1gdVMVUnQ6HxzgfQGGttQhPEcgQazApSyLykWBaGgQcB51RB7V6DWs3Lb8nJx42DFNV3Uck5FEWr3L",
  "key33": "56VHJdidzqYvQBzDbdYbnvtDo5YCsm1F2PMsBPr9rPEufnYwCwmL6zTYeT5SeQrP8UCGdyvzjAc253bMRewDf4w5",
  "key34": "5uo1DTGPmjroLUJ3odsTUuvbWXBT3L1SC8EwTqmk3CMvHZbsWKRyW5L7EAABRNSLF1G8pbQsgQEreCvKGr71z4Pf",
  "key35": "5pzzrhyWK1NpzWf6DcQbZjtwF77mTz1sMmVjQQvuhdm1r6Jauqb7XscevwBiVWNXNFu2qicNhzfu3dqyExK869dv",
  "key36": "3qq6v2PGmarChSGt7dXA3QRqcdFZf769Gt9uDDjGmoUhrpCoDYUeQajV1Jrji7iK4sjBQiua9EaNbAX3HYcFLQoY",
  "key37": "3rdQs2DXrquJ5J6RFhUJej7BJkUKGX1vne11YKwNkhtyra73Tfbw3arpYu66wJ7yDf6o9SAPJcdVdk5PLeHvBuYs",
  "key38": "3gUFf5YJ1xnvhKGL4T6ssSivYQ9AyLzqj3Mwsx6tQBGGN369pJDjrCNg28E4ooxk6zgWK7b81RNHuU57XPQeb1fy",
  "key39": "5gP4tz2PavSjqohBRaCoRsotTmZcZMYCzdaabixgBqdeV1Ge2YcwjSqv32xZhqzuiAnWHnBCgrSiHdAYHHmiW8eP",
  "key40": "XsnZPwQD3av3pUSU2h48pabci3Bp3HYDjVpvTyvGKSprGSdeHkb3wvcjpSq8HmfrMKp92Pi6Qhq9RUNCouk2cPW",
  "key41": "5iWPUw8gYbGxCM2ccckdRYPPu6VnJqBjEVg3MbrgmPKhFqSHY9ie4wzsQXK18PYBYNiF3qkzLytA7K4hYS5rPkJ3",
  "key42": "44dMwZLJBHzyJoJHKbs18mjmaETTNbe2p8M8WG9xmopK5tfwU6tXUqxXiBQ94jq5rvYAjJCgqmaaDhYkXzBCcK6u",
  "key43": "3whP6nn9Za9FWH6L6irs9nzVYQPY2ZTDJrUF18jhZUcckp3rnqEAYZZJAKtQgmTRw83U6Ga7V6FvKTCj2g4AesWp",
  "key44": "2MihvXFELo4GudxhZuX2ccWkwXwtv3d37mtUznDnPhU6JWQo9a4rFzFhqArfNcNwcGgR4wCoykgCb3pceZr7yMYD",
  "key45": "2X6rJkww65hT3mfmSnw8vxVoibexXv6MWkXDbnfT9Y5nyqD81afXVtiYbpsmTyCPPZpGMVSAjBSWy4uDR8yj3Ymv",
  "key46": "5fEYb75YkhS2KrTpbH88vPSvEkhUJx6K9cwkUjnka234SNqmJXZc6u941GDzseLTH9Sf5hVQVK2HTBfFTApDGujT",
  "key47": "4nAxY1fQLpqhZHapGGXsgqSV4iV8a3LxqeDzXyCJqBLt7X3Trn5Qny3QD1ZnEvVe9wphSwdxpPhiJ5vh7qpUvcpj",
  "key48": "418P9DNqmiEatdALKi5QfonpwGwgFstEHVnsqCBQ5nzJHsKAkxX9fiHuUT7jW9Ev1P4Xui8SQMvXgNtXEphSPjp5",
  "key49": "YWB9k1L8XXJWxgsYxQY7JXZhfxSgqeBFj3Vf3F7D834NbbcnxERcUGBwPtr3uNvbi6VNyK3PWu476YrZpb9Jfai"
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
