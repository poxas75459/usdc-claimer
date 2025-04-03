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
    "dwBsSGPZitj1Y92RmVYWie2zgeN6YWUXhUhJapexALYNHP4iWQtNLSdsYmDtuPQPpaNxuLcu4aMqoBsZ4ooGGEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HL1e33VnM88fq6yAtLAJ9NtRCmGJekWVyRwMBL4GxK9NwMTt4Md8e73J3mUz3kZonsjYE4DAMy5k86Xc8o6JahW",
  "key1": "3so6AmtiZ2CTnp3mzqTs1rL3m7NtepPMzfJ3bFLZih5hMvtwj2FhHeQDjbCNXNAiFWLRdDtCpWVgWi71QjZXpFbq",
  "key2": "3ypWqXcfA52E9tRJT3uQnFtz6mkCA2EiCHtfso86er8jABWwfUTkFfkHaSfs9pZuS45GFQDuMgykFYLd26Jf5sVE",
  "key3": "tcuXUeGrFANLwHWXeikbv9Gpd6bgf4FHxBLRdJRJwmGy3eiTWuvTtUDNWdXaindwdPy8LGrDfHC9GokUWa3WUf9",
  "key4": "3vDUF7pPUESjMVitKaVgqY9CdQV6m9iXge1YDreSE4qC8FtCt8wzYUP7heYEcaLmVghF4MNmQFwVY7VCqY7AYuet",
  "key5": "3EnjbKBBLM28gi1MeVqXxiet59WxJZYbXYMSrKHSGAWskcuq8rtgdimeHSkP5L6kQbyjqbu54xYQe9rgBH7emzRJ",
  "key6": "3WRtcpZeXgN3Fsw4PMVwsTmR3MbBy22ua8Pvvick2zy84QN1nsbf71F3T9cdg9KABRH7hXrKroDm95piNFbhNJVm",
  "key7": "4yRrcR9fTDWrVJ1sLHTp9faSVPtRNu6iJKq75nKgjE8K2UgzLgP5GeMCD6m3orjy2soCBY3M2iSLsWn3J6hsLNQM",
  "key8": "2UpDCHVcv1jybmdcuDyXZmHjrfeXZwciA89TJiagcdJ56xB1LRsX7hu5UmN8U3GzJjv3PPXbdKobVsp9TQ1Ksojq",
  "key9": "537Nx4CTW3B5o82a1erFhPsCXNpvnAaRPtc859WxCuVeSBdostD5S8QXtSPwaSbcEH9zcjjU2agMrAfoKNCxo58q",
  "key10": "3DsiFdSa9mftYiPHV6SQM1GKRdFp8KaP4YSSSU5ikQUoBfWcuSD7NKcwLpsXMD27HtRoGhL9DfUdQD7GKZXHT59",
  "key11": "2HNa2PdcVqMNvBkL6VbbLtYCdXS8t4ha2mE48wj7A2kcYuymqbDDzRnr5y9TM7XJdBAWAVTvSG2i1Mvq1z7dpbrp",
  "key12": "53sNJ1xdBGGBEwU7nciufwZknD6UaKKN62uHpoHSdoStjdL6oRZL1VVAbv7AM1gdeNG37RYrdKzwJuXRub5Bisqe",
  "key13": "2SiVH7KtRuozt5Bf5AqNFYdwVzYv4sMYfZJQdE35FAJGqMKhCpGDnvyBSW3k12VhRfGZcN2oUtZHMU4XryfSDeSr",
  "key14": "5FPgvnD3UAuDMtG5hTDPbnf55fEb5fxtfDM1dQiSjLDtKtKqHPRPLWqSuWq2thPyWQK7caGP9bbdg3mvYx4VTKi",
  "key15": "3prFeBygBcuN1m4MQMtwwJEUjRCogMQHXzWCVs75pA9phNMhsAjsZ3izNdEYXmEsuxkhLcSYPvvPXW24C9snmroy",
  "key16": "54pcFxBHtXWs9rk5iDfz4ckAeRj2BxN3oSs8Tyfz6bbK5Lrvyo8yjfeQT6Nk4XPZLgX6kt9o9iqjJgsthBRQDVK1",
  "key17": "4hP8LqzNZBUq6sFq1V99gyM4Q3XimDHHqgb7smdStAjznwePLiL85Rk758p5nEjDKRQL7Z3RzDvfBU9v9EFVxuxp",
  "key18": "3xpgRH2gvR7oW9enq8BD2S9DsfJbu7XtRmBFsgCnJzfZuMGykbYPG1N7CGMVQ8cvG2yXATAT99vMnsLaCALTuaHQ",
  "key19": "RejRWWX5CgXLiWp4AWMd3gKsdYThk4z5B7R4e2ZoBKEVzBvWstRz28trqKBA3r9bJREgkeLR1MwQ4K3a2YJT4CB",
  "key20": "4YTQBCXSGyhsANp4Thr2oejMJrALefvMwdfD8kcSgT9JXGCP4fDYE8AwpKjRuvsg4A3fMa4WYRRrnDz1BwKMio6m",
  "key21": "G3aBcqHF9YmfooxL67iPCrLZVvbTtchkEqXrXHwUVE8Jndx6SXw2UqMystdw9Mw3z1JvsbmWvWZd57eYvWDp79B",
  "key22": "3uCqUbg3jREf8X9k4CYtYYqTxdJr2D4g6Lhb2yHiiBXpcJHfiCe4gBxjCb7QgLHpSVg5W8DbvNmTmRQcyWMtD1Z3",
  "key23": "5nkYw2sDh59e65DqnPNKeYtDDRLKuy8NoPjNnSBpPWtcCwXTw5HfzF3tPG3hV8YKYnjzbjbXPcfdZ5W4bE6czTS4",
  "key24": "5fvKjMumxgCgAVB17kxxzTohyzKJHYWYxrvCQPDo5xUATChqpCychyCqg2uvVMRPeMKhsQHm1sFAJGRc6851ov9U",
  "key25": "3Y1MSebjS3EUsMNdgDGRRVJC2QoBBFWYBkpzTpFPoguDXrhVCMiTJqKed9yFs53gRjLZ4r7dzpVL9Sa7jk8JKwE7",
  "key26": "4HJhd9MXPwKGDMq4GyJ4FNRAHeew2GPor4kjr4nyjt1e3sev9gxqNTRAB7XonbVFCU9pee7rLCVpn99L3i5xupuE",
  "key27": "4yDunRhTiCkjP1Ebd3mT3AyRV57ePbKzMrsrNyE1L4gRZS8EEHbHdxmkbjqUwryFfyKxSN5tMEZxkJq7mbYPsssy",
  "key28": "2cNzUbSsMaKRFozdzCuFniuUNypZrBjYQNMQaC4nGwtgeayXfGF4DqvSU6q8ELrgnY3pqw2bMKCAQq9AX9o2mJ9W",
  "key29": "2xGeqnmz5odi7JPW69kcj1eKdATBhGAtqvmNAn4ggi6S9orwSzeksrfhJxRKWsPgFZhPxmiJRsAL3pBWy2igXUJs",
  "key30": "3D4f2VCar6Hctg1u2h3SZpn124jf1NS5sztfavhMrgaVUWFbZfLP5L6XvjKhSkuyxeg9Mz2RsCeij3Jyif6nnMdU",
  "key31": "4dMivDsCz1Hvgsjdf2s83VHGQ66nrbFEUWd4uMR94aQimxV7BpQv4mjXYtrNDLbw7761QT1ro6K3uFjLnAJPdHno",
  "key32": "2kweNaeSh1VyevVDQwYcpekVSvLUpU5Dt4PeFRHnBb9d3YZ8493WiHqGTLgYBekb3m75gBAbKywJekCodLkFnma9",
  "key33": "5nYPknB2yYxB5TsRpAqpoHZ1YL6XJxomTT5e3eFjQg4gbrC35H5ZSWATCkXooFNW9n1cuFbscS1zMrT8GdR5PZiv",
  "key34": "5BZP3zfE4t16oNfU4tKwPsnAST187VLK1R3HDbaxMzXchEvHNVjhMcXSjYNKgQm12hgCeaTngnRMPp5z6svLUc8e",
  "key35": "4sYAkhU8m4Mjebm7iR1RMd1thMZrbB2GZyBvDFs14F45bbRh4X17LmFKQT88bztygSGawMbWffNYcNmkRUKg8mEi",
  "key36": "346UJVQvY7aujWJy2euwPCQQ5vpk5T3dFRFApfdfcLeateKuiGxoNukeb8yZa5FBKAXgdagv7exxbMbrxuQ5YzWX",
  "key37": "M6xsnokGxR8KTEU25xTaNmjAqeonhLBvQLBfemd5rAAhmvjZpuwZnQeitskXWbGrcDJSxK1xBQBsWbzkJzrxHBf",
  "key38": "666dwzSBiNa89sXfQURhHY75JkPNx3ujwVrWyEKcsW6WcLh5e8XA4j4d9hQ1e312xcfFbtR8oWJNEG9QB8vEVbc8"
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
