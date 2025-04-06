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
    "2Hb2xJBj2KAXVwic5aHv1KBQfDQXyxSfcrqenxcCWC7ToXHscs56KnPV7mUU57Jb9GFj4Ez8ndx84K3Xkx9j4SaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dEX5adNggevKV94XQ937HuZHqN4GH4zzwS1YNLJFN8VWTuvwLuZvCTR694Qpsnyu2f3YLroGQp2n6FHHZ7rvukF",
  "key1": "27spPCtjiViHZBMEbAcKFoK4wqccMSWuW6ga2Aii9keULCcx5ZsxkRJb6eRwSMzhj4Snnet3fMaF82SKsLP4tLnr",
  "key2": "2c1hA5XEym1uqdENs1gV4a6pqnb1pYsWhvDW871nfnHiUfi5C85cg21NNQaWLHp8T4yjo9jfu1PG8VUe5Qa95NGK",
  "key3": "2j2k6jPSoVGt3vR23Cexva22JPZ9X2pSoYhoVe6eDrtos2HUXBDzY1EXQgx7H8AbZqW7Ue1BFcES5peyci1h6cj9",
  "key4": "54rtK5URemaLTE2TXCa3JmfBVCAGa9ffnk379cM9JrCGKPEtsMpy4izYZSgFQKMPS519edapxsZF5CnRxWuWwFxD",
  "key5": "SqsRep6LWahJ1cMapGTv3QusUQbW6yrgncoVYbQB2GP2394QjGe79ECLjrLHak3oj21xzT777hYwMMCC56Ha5bs",
  "key6": "4gUy6xPJyCK976bn7CURFStetm7ote56bKQygEM7ky9de8aMnvwpdraLuBqaJXP5siwLsQX5WosQfFRTW4MVWZ33",
  "key7": "27DTYJuucrtAVzsHTRfGR6sKRSNZfvPcsNcX1wgPNWvLLTStP5YsTU5VdzCUrmhrHr9wC3NBqnLoprWbK1NNvfNF",
  "key8": "56S7aAmMJC25EJMuqhfii5vHQCckeia1tsu7u3iNGpkiRu2Q7wyYcHjVwZWytVrr6P5aUTNi4wB3VqswQyDvNQ6M",
  "key9": "y2QKGKUeXMMxXep5ALaxjzGD8UWJU8DMMS2EeFMGa7hHxsowzEUAHxKRzVTbPLSmAwM6VnTbn2tShwzpDJNK5Kj",
  "key10": "4m4xTtHJucS94GMh1Wbz1JQHr23FiWXXerURR8QcrARvtCS5sBQSFkvDUAkVBSdBVoYKoMpo77e3gVjzpsK9MhS8",
  "key11": "1uqoVJXitTGhm6LZH3ZrPTNhJ4WGU91oszb7X24Yu4CmNLqz9SC49o6k1yYRdXHHKzu2onmEuxXnhFjNvmVLnH8",
  "key12": "3YPhPFeSBzMZeEP1bx5g6Qu4Vz6f6kLNgHvBKJGCSq1aEkvUvTgaLspq9nZY1q3aVh9UB5LSmDzyBs3wzihsYV8C",
  "key13": "2rkkf3nThnfnsyq7WtwNGBQdnPVKupxHLmJoX5se4VoLqpEoR9GDmJ6ECDtmv6QcXE2673jNTMb5H4yVb1cy57dJ",
  "key14": "PkV6Z2VQ2TMNg7cPL5XWjzyPPrUgGDrWjb1DeXNsdTDYRWRLnTBogXHtdrcBmmWAHgGUmupCukNJ6xVUfSRMA1C",
  "key15": "biZbz7ULwQFCjzsrt8TNQfpDuJScQfgjUVYumV7DGBq7STmHj85KxFwpbo3oQS4TQiry8mYpJWncyXe6zCymjEX",
  "key16": "3dPegKXxY5TJAv9EfatiDVcAEm7pS2E6unYMNCdZeMLw7JbGh3URit7GVmMyUAuZ9m6orvRVXou5UMSxH6q7V7zt",
  "key17": "nRToVRW49ETpsMbWEpxWLLRm9do7SaUqr4dBK6CDAatJ8VnFGiszvMZ6vRzVkedBRTvgLc6VcNvrrCzhLzrwAFi",
  "key18": "62vAyZ9b6qpXLmtUHo8nZry1acB9K3FetxJQeuM71xWU2XeugrNQzJWx1UkRqirZZh9pqsPjHoapNGVCmoJDh95X",
  "key19": "5CdUAhJWbtUXEPrt27LjbrMyUQT8thybxr2VwqR8qNrUsFAUsjf1UtMeQ3fBiLtRQfv2tJBV7T1CKuCVXMM97tSk",
  "key20": "5XZ4mm8v14PxxZ332Refv3CiJBoCGhNqion7tj2nWbzdVhp8tqefxj5RbiwMBZUCXD6f9TYaKGopX59V2RXM2aAW",
  "key21": "65TbSyZqP4T6k63fRjyypT4vEjCAWA8wMY1nZk32M6YdMWm3cBZoNPbLfaRSDYrV3p3ghg5B2iW99JT4ow87DqwW",
  "key22": "5ykwzNgEHWcMnRYd3mbB475MsF76uJpVyeL1sdokuhJXYiL4jQEDhVJ2VvDpjHdkDRmWLpFkzr4zVeb7cmKjozsK",
  "key23": "4Vd8LGkSbkZY33kWjFpB91CdnXh5MdPm6KqaX4CvDo3CV3nftNiaiwjA3aBA7oyMnhBCsrAu3n3BTtVXw1GtzGvG",
  "key24": "U2DEUsCCCXF4v9r3GDYWKLT5KvwqsyRUNKq6R2KJJc9Yng9a8sfWjfpKWwtB9XvPnDmMXUeo7kys7Wo8pYPA63c",
  "key25": "2qiLMrReCUkWz84Muy3vjv5zpotS2DqpmsVidG1MzgwCyQSuCkNSxbFs4efZSZw99xFR4mPAzNrMvBrY525PMT1o",
  "key26": "5QiGqZ58JsNKPFqBxARBkgv6sEdyDe4mZnVoh1biuXQXNyh35KztHK7vYbUKe5Av8t1UUbr8YdmXuKSqCpo5NEse",
  "key27": "tksXvSHUe1wRBByjvD5RZXeHjDguZVV4rwp8rkcN9BKD286tK2p9fuh67xCVaxgiLBZuvbssS2EECDnRtUoDwKR",
  "key28": "3h5mhekd1Ph4dNkNNAGB7XCvGrJmRj3PZSHY33uQ4mvMu8xBYuajzLdJ2iqQhimYkYx6cdCvEsFGLYFFABs6iV6r",
  "key29": "2nYdqHNWGzngu9uGBrEkYTdunRKGZHhwenwGGpNd4kVZWyLS8s5in69dBQLLNgaRs2QTgeBBu4kwhP5WyogTcgpR",
  "key30": "ZUXzCqso9cfyhKYaogbCsaZmtd9uxoQVG1wA5MGfwcZEDHDCtNqRArzCaxFrKH6efMe8kA9yHWNDUtWquXaAmSb",
  "key31": "233b5XN7vMxrmcPhzoKC6VBRX9My9jR1p7qZBa6vu2YcYit1Svm6WuKmQuDqre3oYns2wdM9qM9UhnNsQ7iJp4Ne",
  "key32": "3zPRifNcvRSwZAo8oksMHemzv72PYzLzJ116CUZiV3XEUD5KEszqPQeYBvp7g8Q3SAFtEg1jmx6aJCbuT56y4ubA",
  "key33": "2FA41Nmk1RvQprLTcRnaFE7RSFQpsh4o4rxNfbKwEj6nYzCNW7RvQm9F7Jf4GPPbsDU1G4gu9cPJRCEgtAYot3pW",
  "key34": "5kezsBD9nKrPkVhyQemRHToXvNnXGQxN5fZsJxcusqG6mHu5rha9Grt5mJsv1Zxbuxe12hwCzveWeAqWq84qjP9C",
  "key35": "5aoSgPft2432vmkgV8rGUL94mLab2f9inZy9vqqMjd9VQ7SsSBmD8th8VQcc9sj7hBwR6NyKWKUtKQtNwWTKQXZS",
  "key36": "MSkmTSedSCX7VJXmFdnn4Pbe6JyJX8X6dLrGSLo7BBekcAzUKXMtvQWNzb8QwHYXzP9KbgscdKyANzYdQ6C1izG",
  "key37": "3LHUMcxZ78QtNmf3zvhjtPRDaiSGX8ztXfdUMLHH5RPAp28nGk3372JCZeWYgjDHnBp3fofVZrD8Lz84YEh4y2s6",
  "key38": "4nFMF91UCJbK2UQgNNvWJWeQWNngPk31N6yMRXdHQLcaxdKxLQVbnSr5uaW4gRR6iCWywB2PskJjsDBtRodLkEdX",
  "key39": "4XETX63dTH5BZY93W99RFfY6VSjoDskm8XHaXxk29ABkABA6f2J2sopuH8Bz6cpU1G1d7Zt93gKXJBFNWR3opW5q",
  "key40": "4JmdfL8rQCjSoicFW9Yo6jbeYncrA3Xu51tXVPTmNEF8evCVzNSKvQ1zZHNWb5oB5WjTxGhtfQiHESTZ9BjQFAUz",
  "key41": "428oE7NiZQVhbwssr6aEmoRBB7kPgxWrXcYiqDepavmzGc5jZ3o5US4QEWGS8yh4P5G19Nn9kHkyBaySZJVnXGMW",
  "key42": "2sncDLbkCmFmteVmmdxmignuuQ51FwCr5jZa9GFy2Lsr7FY511JipEdQLbHsekCH4M5poAZqgMvwmvgoLLdtSr4C",
  "key43": "ERdsgLKncDLjZee3CTvgZwAMAq42HdCEGiV7NBXusqwv9eWpwZensrPi4kYULhAoVtU8qQchxNA2ZwwBHBukyrb",
  "key44": "5KFkHUiNWv5RvDSkRcWBhvQkepjkqJ29Y1yEDyBLD5z6nhgNe5PQcmvgURC7tJFikmPLLtEh6NFf5azJ6aofUxij",
  "key45": "4BGwnQ2vXUb5UEwm8oWdUcMp1XvTX7LR5xNBG8uZQiRjTYVb4nTGgYjuXJL1FjU5bpYnKfouSHnZ6Z9yabzokUgd",
  "key46": "3ds84uRTCwQcn1Mv8K8XmRYNZugVF7MXDQQ6m2YBYAnCqPMS6r3wRQMkdjoEBQD1Fp29dUS8BfUmpH5ErFkq2oSG",
  "key47": "FrsGSKKVrMr7DnGY9nnfGHqQGgCVKEgsnLu6NZ6SAUEmo8uL9MsePKLcCyKySimT5mZCGH6haFMyDE7KQQMMSyy",
  "key48": "4baW837U7yES4GAJ4ph1FQ4572FnS9EtJyEZgMU7uRdtfvnPEfTREfkr6JFTTcEAwowAJLcja93LVpjosVVtu2TH"
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
