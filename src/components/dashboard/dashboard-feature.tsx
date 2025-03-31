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
    "27vemdkBCy92GJiW18mQMQd6kBkSXnExAWRUamE5HFHo5kMJKxgprJPQKDnDKugwvc3WFn7pcta9nhozs2J2HEu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23kBt4neFuUXR7vEfjVkz59JxKvykvE5E8rGycgwV8RW3R36oYHa8x55zEmBUiYPdWwBWiQ2jGUcrW48YenTDXny",
  "key1": "4aGsNjaSYy8VozAc8W6L4RRQ6uvJCYgfxnAuHV68Ryw3r8g5s2AhxKwvr2R3MDqLuFFFJFsUaLXq1Yhh1tAx1oqV",
  "key2": "2S6VTfzUBemGywNLHrMeou9tGhfMAzKrWC8mRuXuGUHTEvw3cwtTQRfW3gZgRGoQYT1Poom9VAtJG1yU7Yzux8NL",
  "key3": "VEidaSr877BfxumtmcUfeKDQZ94zpufvoXTRtUfg3z6r4JPAq7GtPo6f3vA1PgXruwL3mSVUgeFpEky9TyLezU5",
  "key4": "3JT3yv8wSFZrGgg4vvvFbKFLvfc2WEXVJxafH7cpbBiwsimGTWbPm3kurGXtBzYxLJFMRvFkoFWsSBcQCV1iQkfg",
  "key5": "2Ps1hmBN9W1vWz5xSBurSnFYLi6pYUzQRHwBNeUxEYsroVnob6JUsEwZBBhvUV7NqqeBBo65NbN1aP1h1wPHaQnP",
  "key6": "5oYtC6UweeBvKqJAqvdRw3EZM78KGz6qUroCCS1KdCarigVxi2iSMfvYifJEHtsNGAuHJfrxPT2XnnkaC3HeN2LW",
  "key7": "3dkV9CVq5zSVNRq1eGQBuGVnrXLCuuAjhgQsJuturTYvjW7SubauisT36j23LaXig7cNQhRbnrcekpGEFEMspatN",
  "key8": "3vWTKdc4LNfdQEE8RF7D3iZ2aq1ideYPCt22V6wyDJfvpUyQS9pfnMXeJRAhxUKgWyvB9iTgpYyJRBxvG6R42CNg",
  "key9": "2WK7jNk9coEKR91VY9Tuy2QK1TAJ9DkgAc9mjJz1UiLbtPTtChZo8J6gWwxCEYavWAh3JgVS4DDCrM5R6XjwUuTk",
  "key10": "3E7GhESAYCkyZYoUkFLJNRCwhfFdkSVWSwSaa8sRpPCauQtJJRkes9cgKiLNXMaARFGBYurPtq2VibgGmTAAyjYU",
  "key11": "5E97gchGEhQTXi5zhxHSq4TpjdctUAjyBWGwWNySAJCL5pCLzMyP19q3y2GNRugtReYfL14PFgJrCcDgYsVJsbL4",
  "key12": "2dNjYUSHVYT9o3QMVKHbQZDsuh5LNk4t4cz9gpwsoKyqYNHUVmyvLCC7nSxkWHUqTfK2kcKYocgf3WLBFBehtKp",
  "key13": "4XFXZS9qmm2tJAbSaKcu8AJ4sQNSykaxmnf1hQAYwvLocybEdvKkbekHxo9X5BAVdDEnUkxhKXsRwjQ9srLk7B1W",
  "key14": "3cqzEWMPxFqi6Jfi9jEpemq9pcd1uCUPLncbVvcg1H3ctSTPcRkUZcPwCaDFX6EBMdmBfYo2tjUjanG2VoncWJ5N",
  "key15": "1sJAaEDPTwncYYEheMN39vCykJfsTF6W2mG8AWWBRj9BtC9TpZBckz7kDxtKTAzzWGrYmtxeffdBaopJWESRLb4",
  "key16": "2Uhu9WcqeH8ZRtBKsnWp7UMUhp5MC6E5XKuBYyCK7Fwd2gf8VCDqz5YGFnMPkL4YyJKaFyMkZUVfGRah4ERLcmfE",
  "key17": "3XsWft65ii9oynWKVKW93XUuXb74VjRAzU8ouwVWkGt7zEPyTVYCaWp5DY3qkk8SGYgKYwVkzVPki2NvnRJEFK7w",
  "key18": "5t1YQNkpSNGdQgbnKAygpYQM4jePEhqbuuKLXTxBTxNUaezS2uqXPrn6FepoCyDddmgDkheMV55h9neCMA8bStha",
  "key19": "1gtTHEsN4JzyBMKZ8dAoHz5yWPfE8gGLqBG8z5LewhgzNayfb5GTb92JWXATwoKSA7nwkvtfhPx2dAzUqBtpkiR",
  "key20": "4aLNoeYh9jdkfg58GgtmGrXnqmd9ytu4PEyhfvwQ7G4xLCfBYnzykYhYUanEjmXt4aamoFZWTTbnL721BZ93cSzi",
  "key21": "4AD8c21nrtC7oxuiNUsLe8CSg2GQktn8XZuYzrLw12PZXHqsCg5kZskjJiDyELTRVwmXmtdgKKff5sBRUEgmCEt8",
  "key22": "4GJ1hdZKXfp8PDWWJSMvGom46z6rE87k2o677miSGWupM1NKP4cFhLVHuYdRp1tbuwEvjrdQMndGMgZerS8AcQ4P",
  "key23": "2oVdHh8bWCShNP3dR1M6ed9rHVvt5effCkarYEvM3d6gVPvwAD2KvSUfztYy9NrmXNhqBwFBg8nGgAN4mdRWqFrH",
  "key24": "2QabSbDEt9FoMhYKYfJasHhEigfRfBe7YVcSLNfD29rc8rrTpodezmiM4AuoZ7ufQn2A3py4n5Ef7gdoK9vPe9BH",
  "key25": "NkEbCEAqzLGSZw2zus5WkmmvvEKHU3xREGRP8N6c5EQvVpBFn8yAtr15wTrpZn8zsZ8ezePwmzVDJxUHK1KE6aj",
  "key26": "rRAzpgY98ULBnePXmQstSX9rQRcNBQ7rw7ojULdtetNWqEC1PkhWeehAkKcXAjVKRHdo7LSH9tVPPvUVZVjG6gm",
  "key27": "22T2F6x94H4GAwQop1QtDX4kBZQcJRP3U6P8xK9DkaNYz1bCbtf9j85ZR4JhsWWoKH7TUFa3zpRKnLoAiCwF8xBR",
  "key28": "28E4YLYNcgRpQ3jduS2xEm4QrdpNp8FYR2KhoJChVuFTMk8aKYJnJp7rw7QAB17KmwYgFVc3nHxBNw4J6V4d5yx1",
  "key29": "FXSkrupn5w3tTUWeJT9xVWha4FR7FK9TM3pVBmYDpj7fFMZxoKmVhE9MXtZY9Ak8bjBaegUPf1tsXJyurufTNMF",
  "key30": "HnyoErmhUidnLRD6XCyfTANveoQCzVGxdGdjnG1ffHTxQLqbxqjv1SqFJYF665gcLk3LSwvsmtnuhaYYfJwhg8s",
  "key31": "R839WnYhZWb1XEPH3s6CxmC1fBEEhFYZPhWWTZVCdNhrY2o9E77UuSGXxnSnhR6QagGqVAkUEDQUZKx7u8kB72R",
  "key32": "2m4A68Sq3obXi3Gc3wfWC5cdXfZbBxXLNsbnfU95iVRxERiUgpGV5ZJuVbcRyEN6SBVHsVx9AUZ743RbjhqenNcj",
  "key33": "3VmGY1SGMansdUdak2VtL3jL4EYQWNDqWNPrS7Em2juAoqr2hVCrTd8g6H9VJgTEBLnKL6CJ9yb6FrTC5x9GvFek",
  "key34": "2mgssf1ojuaFoAEKQBCaXH4EBusiMg5dXmtMJKzbzocdxa3BnQEARKC37EJuvYWo466PEjeqTZZdEZuai4ar3daQ",
  "key35": "4TBnCgfqimpwX4EiHsqLVgGEBHVg4BQ7dHyXT2L2g27urVjgzUpN1qkE2vf2ArQqcqdwwKtjfbtHBNMZycKjEf4D",
  "key36": "3DaviAVqdaTUw4N6xAnPPFfSBJi56rYxdCEHeGZDzM6dYDGacQpkv31caKxrzgaxrUQiRGxqTbxe7vhxHBbi6PM",
  "key37": "3EtobCdEZgDMxVGej79JesV9USvZNY4qTQdw6vL1jwrJY3XvtRE5mL15miVvgZUNhKX8CoUAnhMwhrTtG2ft1Bsm",
  "key38": "4UrYUzG5tozoxGeZ69F6fCnxv7MnsFyQm5qpTwu3epBNUendcdC9c4q1nrFUCJPzPUzWx2E9RDvseHkMghewJUqr",
  "key39": "3SpRjUhWpQhwboNX7FQL1zr8mEFX4KGkgSazoKG9a6S81Cn2v3u4yh5QwmMuVpe3hvnhkicNCScfoRsJaDZBCsz6",
  "key40": "5ywx2DHZYogvXWH4cVgQjTDy9vWKcPnzT1YVPe6tKimSwYrw1N7uj2JNMiCBrmwJLSS8sgNb1Z344jCEQSipxBS8",
  "key41": "2479w7PZ2wmD7g85GH2LpfaQH1gBvdVA3fVhQfMRU2kmcPysTwgonG6yTV1BjGGe1EoH3ejzBdnt1w3itf5Qa9dJ",
  "key42": "3AwhxFA1Ua7osHCfAYkJoF7xRwwPnpvfFHpF2Ux8Zb6WCkvfFU5bCB7XgZKUFBu2TLLJ3m1zgrQb84Q7LNXaeLMh",
  "key43": "4jfWpXdkrSyB6r79JS5Xa8xh6RvqzZwjtcZW4BFQ6pAi75ZBF2MqjecGsCFkKJGdQnfFQmY4bvgTEeEg88aCVNRH",
  "key44": "5XZtLWCWfhoxjzBu2uzpk1g1YmqoHwVz6XGEjvrpR1bbwPeCumsjrcYLfk2iMLLQbrdAwgzbhCoGqPFPTFgP9oMm"
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
