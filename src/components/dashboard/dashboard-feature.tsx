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
    "4uwtserhNbaTQqGUBAcGNwjFFZrWQJbnaAHa9EFvysJPKYokzVrvWKzeUAxJRSJWWuHpRuimvU52UJnrGnfuuEqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61944YvXQJKF66MkAJomnStW3reKfgvMnLXKqzfv8MQ3jrXMApoainZuSkysiJqqTWkxiV8NeXsBhN8vU5dJJpQb",
  "key1": "3cszKRwHs5nxqnhnSTSVANQTbsUZJnix1mkE7FgWTYjSSrfqTZkxxFQwcjuUL8pCcYQA3CgHYUgSqExiQvTbuqWv",
  "key2": "5FHhKe4C11gBi3t5ZnpCyYjopYSq2CzhxUcwGWdGJfy2aGGhe4HAQXYVgXsM2XgnZ5EtfeysLB8GLEgPtKsWHHzr",
  "key3": "5DTPBqQUSX3fUqbs3Ti31TcRd6z64hpmtDB2buJz84Cnb5Gb5sADH5XGheCGMzFb7QfgKxKoQoJdGm761LJn4F3L",
  "key4": "5vvPNnBCsCyjEoHSU5CoQs4xq7mFeUZ24BniqyQtw6D1wyTopqe6YAwJzr8qR6ksmWVxPFsZyQ7Ccxx2G6U1TNej",
  "key5": "tYZhGbbJtP4ADkodugRYhqvjePmNZYDH14tC3RyLod5gbM4YuYUH75yDSZpoJQv9SXAjyaBdtyivdLDAssxwzKu",
  "key6": "3aTPj1ZN9mVysXTaFbKHwjqLGgS8uwNp6RFovuBhA8in42SKFtEwQiRGjHTuYMEyJZR6XT5x8Qv2Z9f4WyuTD6JV",
  "key7": "5BaDgv4fLPrd8fGhQiLkSsknbswxLdztX6QrMKYXThZKyqrUHNaaNbHtS9BpQB2cGtpFc5CXfc3FaDpveTqvbknj",
  "key8": "2cK9TBkmjKFvLGBRPAjWeHL8Mkb7LiKxF5HZNGXt1o3mMgvw1yNCkzTojUxW8Ds8NFt2Hqnh3jZTbaEusiisrL8d",
  "key9": "vPYZC3crWVLJ2Zovr9nbFvCsBXu1wntpP1AxM9JH6wwW1hikjLgJHexNBLCHYgZGGtnue8eEXm3nZLRzawugvRm",
  "key10": "4pQMSkG2iLSisM8Ks7Z2mMzX2Lk6qFdCs5uAUVYWJ5RKaz44MRxevZsUgBUmymt69Wb7zdrW4awyyE125fMticdR",
  "key11": "3NrGhFfWnzRt75YBsfnCgTidfqvnzTfBKEkuJ2tSMr2rKuXB2VXwMt1scezVmKU2Neg7sp9vXc8V9hrtbxkuGNDm",
  "key12": "QFvqGkpLvErj6RRd8A1wdfLhJAitnTvCJWwbLMASsabz4yW4QAtb8bE4ziL9R8mg7YeoekXjLjvZD3YJNXAWtLM",
  "key13": "3unWJRD5JPA1iMyYDEcJJQFJ6jUoBWEHaFqUPALsZ3KHdr1U7yFYZZsv7y2BrU1TBHyEjQ4eaHzshu9AJazBiy4S",
  "key14": "3guruszszA81J3KmEehHHwRUFe2V75QqAnzLUgEh8LV59Ay5XtLF7eitVHwCKKj8WHpvthkexQtsFSWBqXfUXEx4",
  "key15": "3cfLPoUimz1MHiRcLjPmJJ5TBEZ7UPMiceXMnMap2qBXPqn3aiqoVLMymP1rYRGu7SA4BCcZTp5wPvF4ej5sqmvs",
  "key16": "3cXeNepiWatM5rdjiMCKGtkgY3LmSGeTBu5fWifHCzmAF1Pip4bEfyWLZTRCre6JrjPnmgzaBFiWqbjsPDnNKHzo",
  "key17": "33t8vumnBPmipafdJywxf4w4Xg9C21ARuveXewYunkMPDDuC1SqmQVpgaCVWvMVAYicVm26RpMEiribLKeoZzbk8",
  "key18": "3ZzzQNrLBxoQddTQt1K8QKhYZsYiw1SFNomobs9TJmHL17sJHeTatXzsDo7gnRJYBeu2fdfkqnnEenMJJLCjoeWx",
  "key19": "57tFBSQSt3aXLs4dGzyBZ9YquF3ZnKfqCkCEZtsUe67NaE3cKsFxAJtzGcrDsz9CuKsy37gnQT3J7qJCN11LxbHq",
  "key20": "5snyXQ1CSG9WovjXMSrQQJVq1EJxHX2oDYUPZYjjdXenor4WHt5KpW4xtCxqNBNq3mYCh59kjD6e2x8Ad8rxAAi8",
  "key21": "3v27ATj6PC2nirwhW4jx9ctTKu8R4a3FJYZhDkjnCRDePpqCUpqEFbGRMasJNpG2312vUEMXq4LiLLE5JFyAKk5o",
  "key22": "4TBokfK2fcAqUCDWexpXBUvYNGxXJbbn1t3UPh8iGoimEG4PziMGnAjBd9kXcJ32qPN58hAxsDF4TtiWHn92F2Bi",
  "key23": "4fALdiHggr2y6CZ2irsxZo7HFhxyZUnNaoWM4BGfV3xjbWy44No1SgajMah5MJiGibwaMGhW44pWCHDdpSNRcoXk",
  "key24": "5H2Wu58dg4oLHohNdGt5giW1nj46FvZcbcXN3bypuPqe2rjGw6QXc9Q7eZ1nUceiSQYhQWbm5CSq7rJb6huepjRa",
  "key25": "2T4nEMAivHpboUiuCZSB3BxoFtEkpmCCoy3683QozqiA3Y9kmSX8z1CkRyRys4xLruJJNKu6qUKX2BSzfgbZcWGb",
  "key26": "5z4acTbj6zPyaxeQR1XWRCjDAztpAHZnratVjtneEgvEtCYTJsTaABPzeq7yAJFWx1JK3NjaGHgAz4v4E9zXNFVi",
  "key27": "Fs9ifbrBc4vGpdPwDGwqFESj7pY8VxMeeWbxn542RiMEfg3c7mEzCCFdbPzzuFcLaPD2E4DaaTgkkaf8WL351NK",
  "key28": "vbZG9Q4NZBjXFuG9hwaPvdXHJYVn3FAQt4z7XZfwr8WEeR6S4LQm7Nm1hpdk8YnvBUP5xvP7Tq62kSQtg3i9HpV",
  "key29": "4KFBHjPpTm3QKyeoAAUQigFJKW9gM3poFSxVdXBK6uTAZbvXbdyAiR9NQyLsFZqGLn38jH993Mk6tWVMS8SWjEks",
  "key30": "61vwD7mn4f2dc3fmGQBM3662bUfkxWf4y72BBpjqNwXbv95YTqCYijdtf45hKxySF3WLyAJ45QekJzYx54J2eLZS",
  "key31": "bBJP4uAFvPiA3UL7d4Grx8YEvsqoEze87HGneo7btxRyePT7JPr4mBcM1cVwq8hPmnnqiNPckADQdxGPJgmttt3",
  "key32": "2oYgAZKnScaVd7B5D1WqCqnFKUWGXbHN8UuHDjTCJ3bAkLu1a86UwzJxiaH92gtKvUnFmEdudwhrdzun5VVgdr42",
  "key33": "4aQCkfWGeVjkCWaCqEcBqkeQjwVVhjngGaSzKwjUzGh1rMM6gt1Jt8a6N4VFn43KXaKr8jjJNMCZyG76HL62PtVu",
  "key34": "3pESxfkzK372LkmLoPR5w1LdTR2C3jTY5JXPwsDaBRFbYLtQPmstDVppvjFoSKFP6zAsmvSLgjXuVJF64pWrfNte",
  "key35": "29db3CxLv8bBbZPU6bxn1MZ34cCVwZC2oQcqpG9z9fw8kpvkP3cQ5xaA366E1yKyRruSb6CnU4uBV1S96NSzMJRE",
  "key36": "3GgJhsYrThwRWWJbTupSLRMU7Uiz7dvrFBX9TfZqXqSuA6PTKumFZiYpLNWEscjpFsJDPktinbaTmkCzMGP8pccg",
  "key37": "5dDzEwsJJPnKvfXhcTGdySGHW9mzHF9FVczeMVHudhVwMxMrjrZkZTpeh7JP3e2GCwuy9KNr9K72wLtdFBVgXCMi",
  "key38": "3W3PFoVQJiR25Nj5gNUjeg1CRm3VYMfczqnjoak7yqJMwgxwAbb9vp58gsyJEUb5RWwCnADCxgwxqpmgpGUQRKb1",
  "key39": "4CVHHuARWxTWDBJ8XJHMf89anbzfj5Rj5pTVnsHN9mrg8E48KMYh3vqG3DZte95n13Y5M7VUFp3nxYtN2HgHRZrE",
  "key40": "45fbEyEttrJNKzdSomGLFbMEAqbTrekAxZpiUZheh6kmSCqm641eDskhMXiKLPLsEcdH2xPLy9DCY2iPmRYWfdfM",
  "key41": "5YG6CYyxkrqahw86c7JJveuVweNmeXPxbW2KCX2TwoRk4Xykn84VAnx3faogiXat5KqrL7844J8m4m5FjBvvTvvw",
  "key42": "VmHxkYkmEiYUfug6DbUzHuie2R7UY3naFki7nBthVjcgjad7abeiAH2Df4oTPoquV4YYW3FL85JZ3A1FjUvBQNk",
  "key43": "2oTkmvBJF7t11rXBKQNPNeTyZNFnLw9LnfNfauy7jrdS4PA895j6HhdZcA7hZkMN8V9dRVhTyCrFjpcJEYhNTJgr",
  "key44": "3ZnnbtE9qBmtEWEygz54grpaEyG3KyT625ty4EQ5PFiAsTfKAkgL9nFtEXTN9s7djEne95fHX5iQbzYoSjb64Nsn",
  "key45": "3mkqJDbekphtXpKPJTUY1Qyh5TEWy7Rbt58zmxghGd3vVeGKYfkS3PJaZSPfiZNaNGFTPQZLd5wNf2H1K3MAczFH",
  "key46": "5AYxt4LQHXSiXpmBr8ZZH4AMLQyxsAM7JYxf5rTtx2YB1KhCxduqgRei6kbcqkcgcZ3119FXKYMkeYsvetbpNsC7",
  "key47": "5LG5wWLb2AB5kpoyzRJoUESjJmWSEyWAKjUf99zzvUfXrCL3hpJCCSexF5EqbCGSPdtnP2bKworgwkj5EbV51s6z",
  "key48": "3Tx8Sgys7DTov2BPHhKkQTTzqAVjRzhNBaxDecnzxYMDnjdjwkDo9JyPvzXaZLp3THFvNeepWErC8CSCFVJjmFAW"
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
