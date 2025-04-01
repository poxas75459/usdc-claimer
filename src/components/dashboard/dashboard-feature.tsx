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
    "7qRjEMEBvZncDXexFSQ4fC8wvBM2toXaV6RMb2W3s3Ee72KKV5LfNBPUXX8bykVVRGmiyEts2pmZ4jKtxcFseHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sAGwG18iHZRknCq2nSMUB325utJqk5R7xaVhg3j4bbxsNH2sCYhp2te6yX7tEgiFNQvepyvgmFkDo9q6cnxEjFf",
  "key1": "5ZxYLMpGDa6TajghUhxqDnpKdvsJGxLeC2Swds87ur98e7g4iwAEQuq5XCJre4MdTiyBmydLbNNc66RcYFp9SCTQ",
  "key2": "2AEpghNbZprMuTk5ZLCvikHZ2439xNVfVewvJq8o8g4eXxxMhPAAkjzkijha8jQVm99DX1r31D6eCgwjWRfPfaJK",
  "key3": "4y2PhBGFr7SaFRzD5HWw9RhypQnQW9Wk6Sz4PYepKPYXVKPNZdrouGtk4XbnKdXE42CwHeGUE3orJbQmpahPK4Bh",
  "key4": "3fpbF5hGkLZy9KzAw95D1SUsFeahdyVpHFZF5XoZcJSDFLGnkmzCyepNiRT348HoU67wBifopCSs1Lxh9Cjtqbqu",
  "key5": "5yW6Ucvna7g7aMYb5UUnYW5fLxW24aeg9FScmCJA8BfPSqzpVVsB1jWQyP3DferNhJ5VSjC5YxCEwy8pTvbXCQWu",
  "key6": "3aKJo7eD976bCoGu6E7Z8VGDTZR6eJHSNFec3cNCub6PTbaCuDtqoJb3sGw7a1YsrN8jdiptVBgqYt2VYJkAmje1",
  "key7": "2fASW2JtUST3K1pagnkLi1nCMcJgBzgwHqJzMTmW4bS6gdhwh1hvVLWYG9zPuCXwkacd4qTDUPpwjumpTGhZhv4v",
  "key8": "4LJXRaDRNjY2ekaNfZGPjU9FEuT6tzg1ofWmYu9crQWxTbmStDaUMk1XExqLSK5JuFrPRL8q2K62uLy9WoM3tYmc",
  "key9": "5DoZEANR3UD3QJzoucEhYwE2CbDEsHMsYSqo2UQ9h5igS4H5D3RkxMxsY7Z1kMJnHmoLDdtbX4MpCGsE3A3fXj54",
  "key10": "3TAx1jRP5XL4sMcv8RGrtfydDiFZK2dPfn4Cqd9ip7ZSZncnwN9BfuUdVsCXMT7JtgoS1yFcH3PQxL63J5Tuu26",
  "key11": "3brFPPXBpzzon3QMjN85f44pCGYNW4UphWfz7FzLUtL7g9rxVxF3Ew9Ft59ztgQj2v7gcBVCWUyzRfSCbXcv1Cdk",
  "key12": "63vmZncnKsoZNhCuUd8niRuGSSGcWRSCbZwb7khzXDVVePnEL2idcHroLbEbKY3fd4vceZckhoRVuAVtkKKfHj7M",
  "key13": "4owV4aU6xLpAmwDrCWAfk4VyhL2yr8tx8oe71Grk8XzzFqRmYM9usuabTQVgqWuPTc4giFbKj1AFvwKXu2t35SQM",
  "key14": "5At6AVQEzK2mSaaM2Sst3RouYs9xhUMLwWcpnzV7stnwEwXon3uiiLKZNAskin7SuNRWdtLdVGJ9asNDMzXkJCZu",
  "key15": "3cjZsoqtLpxLytWGXXjG8YHhy3TWbswfSyjYCig8RiCxvMuNJMihWSD75eyFn3Quh4qe6qB5gE2tWX4Kan1R24Vw",
  "key16": "3YnWgueixxuH6ioeq2GtJ8RDVJWPufPt8WoxRnm1BvrsW7qrXnjmEzZoW2WLzDJX5dgzkmiK6Nj3GSBtNhEMwiCv",
  "key17": "56pzDNcup8DWrqYGMdpKHrBqQL1WZWPi7obD2qE6nTbNL9UnhRzD2yTQvXtcdEmV6emfnwCXDeeNU3k7QpVHSaqd",
  "key18": "5XEE5hu1dU7ovfkvbUSxnLECWbxfukEtEL5ZAgsEyRfSB3HxAFC2wBbbHV7u19KkcB7mYTEtTQWBYG8x1emu73U5",
  "key19": "za7e7oVUx9uKf6EhhRvtqunGRTpd62C8pyY2fq6UJWkeSdEHa865wSWQef2RnvUfWdd8W7cQ6RhFUzUyHt2uDHR",
  "key20": "4cAQMLmXZpMHBXPG6tSPwvp5MS1TiSJjawtEHgMepdzzS6XrjJHEHH9RuhLm5fy5mibWY7nMrfLZvgZeq3C2iqkW",
  "key21": "46NAP44iJk3poDGbGmLtHhkLKnLoPudBUpe6xmQeXbQKKkc66YZAsVcHgMeSSZJcyYhWbdy5DU3qPpTb55cs2JLp",
  "key22": "5C1yXhoSixwNHchfYzJRnRQrLSgKjdeCGTgFxaegPzVA8is31M76WcT9zfBaf3BiuaD8e4oDiQu9ShPpQg4DMmst",
  "key23": "5j1hE9Zxcdjh5XGpvBTj94LqQNyBaR96kczbyexLDH9xFLjdb3zLoWt4x3APbXGSTrsYq8gRQu29K6BXExpcgiB4",
  "key24": "rQQ3qhgAWTgsb6rHE2hLZWL7iKB8ESmusaW7W8fim53FNmCsosmvnuKVWtvimmajzBXWdUpD1bXUnS5n5thQnXk",
  "key25": "551ZcSXxW9U7aCfywFi98SmjTZd41kSa48LGxuoFDrxeHGLBHxk2xiYhCiAe6w3m7LNVjVczhREqEJfbtgYm1suQ",
  "key26": "4u9EUdjxQuPN9YEbt3fn5iHok72dpMT79fitdQwkbjWmuLa9Zk9iw8s12LJG63co57pSvZ177GmHBZH2vYd92FAD",
  "key27": "4iEKaUatWLP6QcvPyoEupmGjGntrgbHE6DJ7j2t3jHFW7XoQohGoKs2Dpb79u385zhMsnobR3QNMM6tBRUqgnmDX",
  "key28": "42iktQ5qsFjjy8GiyJv1CmMtRvPbfD4ZpEhrsna4P4iVCR9KAvpS1uqNuCoVUjsCqjMheG3ruK6Sv5Qd9gMYwJEQ",
  "key29": "5nNMrhjY6BJbGRPh5cdKJMRc3cNg3WU6rRXkCD4qbK9xuidRBG9RMZsVto5U2GyTJF7pU4CyjpcnUk3q38hddUR5",
  "key30": "2HiLnYV69qNM4AFjdSQ9hZtHfKukiP2cEd4oKcbdUvGpkCgQhontkrBUEVtyHW9RTAv3UtdoyCpqcNcrvppBQ6Er",
  "key31": "5UovENcy94iKSzNdHb89YfqYVkmyDRM3qx197N4PikYAqjuHGaKL9uzoHrU2ReK7D7d29UDyRyDbAzCN6NyghM6P",
  "key32": "4PmeENZKbKWqp5W3YAdqWTamqQXkjwATxJUMJAW4DPa2Pa82QKfxbkjxQHQSKXwoSh9zk56jJwEobQPyQj7rdZ2R",
  "key33": "3dJi7nS2rr6eBveGERZUQ1mSAuQjRN5WTcKrNANqfB7JBvqFyiUiMjRP48i5JEfG8PTsdinYjwSgR2e6PVyGB2Lg",
  "key34": "2YLARB6r7sfbMNKzV8XEeZcCACox4cmqeS3FvKC2vAcyqxb68HuH5w7HjXnPVhb9L4Gd7C3t96riEaQP2Hy3t2vy",
  "key35": "5PVVskhYCCd6Lb4ACDxcm6XGQtqiebx7f9v23h7jjNmaeK8A2GAF47NhBJqemktv8Yibw9Y4kGFXHDGKx9q2QGsU",
  "key36": "5LB4fPn6W4VBAJi1QRhppiwQuwXcUT4DCriQLDtxKCYpZN8eSVPuUGRyXcSzzxhCoGGxHgcAvnkW4ACR7B7y7X1K",
  "key37": "2trCS9SVb7QGG4TCs7CtSyxyUNTvmHws4GxF3N15rnNGdqRyWoybENJbHsSKpLchYaVbewGph3Za2hW1QKRJSwSn",
  "key38": "5Q71T1bHrfPqXnhVdh6gswffw3EHnpZf56zLaj5rtbYrf1Ac5TteK3g8hYL7jSJzs2N4MGJoER7WfXjdY1hKBsEt",
  "key39": "3MuHGCs1EJrmZ2EuaURMtLE87a8nDtqnCwM5qQatAJMoqoJbQ5pBAjvaPGpMPEw6JXcPiyXJCHarAWTgg9gvtra2"
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
