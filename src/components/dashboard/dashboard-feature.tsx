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
    "3gYjoFtb5Ys9pScmwLSu2Qefpxgk3vhaH4mnTMX7Xjokm486WMoazCyNsnPeYkV9pELT8KtWcLjd7oTGb4GFoHR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GdcL2AKuWxmjnVG8C6A1zkqUH6ANnMMJ9VeEW8GzC6f9LYjTioThVq3sJ8QHca2cZxYUHG7S6tC6TGnvMD5ox7L",
  "key1": "4yEg9Pt1DtVBEpPHESR6DbqeontJ1ZeEHUGCLwQZ6KbZ1Z9PajycKaKacHVNTom4CsQFUJtDhf2TT8ahTRSnriV4",
  "key2": "27PjEU7PPDoJC8whTMamrF1GZbMXec5FzJYiDnTQtVgscErSaBZ6yC1BSFnkUyutWCpshghmpSSHJ8qt4xsUVEHr",
  "key3": "tpzSZLt1u7hYiU8FRZ5kHQvoiZps9vYMGM2kaN7DGFuPsCirARihB3Ltn7k1HbiDkKRifiSt9NdahaEvGm7W1ZE",
  "key4": "4VmxcvnTM2RP3EQgKHcxsEUc6k7ZVRdLqs2hYT23f7iFsDVf2KxVSH8i5rBdjx4t5p3cAvtBDrKqXEdaCggiH8jy",
  "key5": "62aHNcDPJ8H4A7LvTJjRpQxVyMEADBQ4xAb7DadvHfPSR7QtHRMTVvMqd4RPko1swBbMXqiHSVd8V1xab7DBYPZm",
  "key6": "o9ea26gQvniWfiPEXAsmErN9ZzMUXwvadT2bza5ZaAPg5asrS7pEs3s6CDj11WCKT1dLXxnjQaV3UjPDXuEJV7f",
  "key7": "4CBLjmpQXhSThPERTaL3VH64yh21V9R196Y3Rfat1aZ3yXfi3g1oGTD6zZpsXjaVJ6uWLQ6DP4cSyp89NzYnxJrF",
  "key8": "3qTQQHy1EM6NkP9uT7a6pRCaqXr5q25Me93ToNxsYXnustdFoPsrYYcVAg8Tc5HPRXA5TtBPw1w7eFfn9rVBPMpE",
  "key9": "XgP1JoFUxEhSNbMWLgR6PhW3UfCicPGMURJTadZtrwjMgJAmAETkAt9J5bXmocrK58DiiJ53tBjEnTUMPHjBp2f",
  "key10": "2RQGX2jcKq1oJyLNCewL9kqK69fSyUnFtREbN9wqp845GeQ398fsSuPGGWjMQL89Zt92czBd7HYxyo2WH6reurqd",
  "key11": "21AFkPQ8NU78GMBtGFbnfKCfei2XKkwp6xKHKWufHiTTjUsGKa2kif6vEBGZEApx8CU8MVemwP6maCYhJ6fCZ8vj",
  "key12": "5kaKqScgJfEfQ6hU4vMhzqpp5nuBA96uP3UVtCs8y5b7RscodWpJzjSyvQp56wSr126Vv62HATUxEtFZZjLzi5vo",
  "key13": "35WJw6ZtUKcxxJhkSnQhUzwPamaPAQmiGjUDcu8aSFUcjU6C9znSXd1ZMDPd2YVeUdrZjrXyBbHuFnW59vAwgegG",
  "key14": "3mLtKiokWKht3ZFyWA8Wu4m1nQZkK6GiBEmkStmrXeuaRAmFzxgrUwyCJF6ET1QXg5EJPYm2ruY588riBwGRqtrM",
  "key15": "2j5rWEqYGu4aeRAyBAY5LzJGyA9xuanAFiiSFrLe9dRumi9g6pqLxABpPqt3nwTfauj2aiBfs9BjFyYVBZFiq3bY",
  "key16": "2mXiyNdMieBWABLFCZTLo2MMDmiF6XXbbequAHEqtEcjFdsNc47QBcJp9TE3eycLRWFY1B62kdfVhwE9t94KT9re",
  "key17": "5WVQD87sbf3RVGBgyBG9SW7ZfEWkF1qqRTZEM7jQa9Ct8EAdirp5DWcfem4u7WcLVVMBHKnLH4BBYqfCuWqK83bP",
  "key18": "4n1EXxKZ3FGfaMxTRRdtzfFCTvu9eUomShP8XX2fFeg2NWheTwDdFLPr9JPtfZo1RU8bv8jWLfvnDzVYTdd4zThM",
  "key19": "4GLs7ZX35ZXqqD3LT5Usauc9bvdtLyhttCBhdPYTZJpcmb6rsJ12CJpyWFu3HwsjqhxtQ7DGAfDRoHx6kiZ5HNHb",
  "key20": "HytipXMEGsK4fpVnRbgvg39FJwyQmdeURQWWCSqR6PjwNTUPkjZe9VE4RkgxnD9Qsmtnx5HyWm8QPnShdKXxCWH",
  "key21": "R2pDhB43AcACbjfMSYZbDSMNd78buBqFE1o7R5AJ2cxDLSh5WPmwQvPcB46v66xtbYtpAfn1SscyYGK3VrYgXBF",
  "key22": "4L7J3RQWfQtXH5tetF2G5vWWhY4mvRrgnDVxD3HzZH6vkX7XNB7f2VTGm2sg3BgVj98kmsSQ7wyDVk4ds1Knx5Ye",
  "key23": "2TdUtnJawF4qjuVizuujeeJ2ahDWw5mjNujH9FJt4grWiBZE1CGCbhxi19o2BzhzCRNtn4cNri1QQmoY6Eoh7raW",
  "key24": "28nnsHhfaMwgKDr1HRAoC7DsqEfjxDyBy6D8wtJ15ytcD5Qs7Q2fjV3AW3t1NQn7oV9dBt7cdmzFQaABFNJYsNtZ",
  "key25": "5GsDTYSEGxgCQeDDv4SnPpLYddgq3TxbmSLSAuwLKFiayjwjxUTg3JKiSuvEE4ix5qJ3nnXDUBQLKkycqb3G6oTX",
  "key26": "3Aq5S2XyqzX4VyrAZp5ZBxr6FDTp7isUvXJfmDrHLgbaFwXkTedUG13e6bY8dv9EaeWo1e8uGCxG1xZ8eJ8fN3fZ",
  "key27": "2pgdMKGkEGnRD7SWpccaAFVHBYnsAcWSmFfQYiV2JmQvAtLsCeiD4RaxQ1QoiY7oJsYooXAXQhi9HYpxrGnEhtVN",
  "key28": "pHE8WKmhnTq7gDNkPKmMCLYCwhJyKwagpNjynYsYUsGukn7yR9e9Sbb884vupSKir2s8ASgx9uDbxcooFUCdxmS",
  "key29": "2gP66yECG9sty9uxgvTg42KYyh6Z6k69iFkwnFQSG3iWYGsWSgydTDH2h9yKDoSA21ZJ73HvEi4yo1LQnefKGiAb",
  "key30": "3R9czFYbUEBvsCiS1C1t2JSGpKW1pWA856hGysD1HqzFHRmrmiqX4Av85mcuqL8tkra7sprnt4vQkZD2gwsHSMN2",
  "key31": "5xJ3PRCxbtUQxt7sA8gxrV74KLDut7ZkFpUPKQpXGXbUU6o2sc9EknsNibqmM55oK1EUqPNg65hskReGEao6UcsB",
  "key32": "z8Loz1tnbe3ncWTZrMbfYTToHbtNsVJU7iTCP2CQsKLqYjvYjHsAvGRaYStZdJriPth4kvky9raC7U8LsgCdhL5",
  "key33": "ttsmQpfY8qCbUKcVr6Tigaqgz9NrmukFJBBByQSM8XVLem1vnCuSQH87VpneSncQGFKtjetR8JmNXJ2BFBzabJv",
  "key34": "2PHToujK4yJWYLDFqhaJKNSx9p4KdpzH86J9VZp9JCdGznFrAZvyeJKDbEf8a6wCtQVtLx47g3jV6uYypxHGUMsA",
  "key35": "4vAskw6kGr6eUZtW1qR6KKbqxdXLsQ6qZn98TcqCViaU2A48abA57zH2inEXL7rnsCkkpC1rYozhnFsx85cEizng",
  "key36": "34ptqnac3UucuzxGXkUHR7L7d52M6ZJqnwTtG1HY9iLs2zm38oL1qiJwvuCJUEZJya9yr1byjFjf2VULq8wNUnZT",
  "key37": "3KQMz73WFNPm7CtRJBZ1Wm7RWFD2rR8i6kNEGLhNMLqjkM1LwzS737vsVT8X4efcNhzuDwmaV43Md74am23zZRAt",
  "key38": "3bBCoPnUgeUTa9rTucDJakKukgiYLBv2KcebH2MvThoLRSpVCYvLaJ4NEKjRyDg8CMDYuWJayrc6uM6bkS7PZuy4",
  "key39": "2yL7iUKniuPNK5RvZDkjtbBo31FmYcoZutix747kmUHB4E68RAL79PTr62Cpi7GVAK6cegB9XZoFyJc34yzSaUQT",
  "key40": "3Znu9VrNC84rLt959aaEwNqmRjUP79j7wYrG68aiN4ZTQCDzhCNmksjiZsf8q4UQDntutH9wuTF3EUPYT5uvwAc6",
  "key41": "64aLHE4azaLRRSCv8h63PnEwUoKevqUPSUQPTDRJxbTCLCoi2Ru6SH5NJsZ5STLpoHhHJY3rZM7uwkKCxZwUSnXo",
  "key42": "2mLumQg4wkyzMRe1VMFqqucwaTBKp57ZNjeE2jku2DLoyB2NsBPy7mDHpkR8MYZERKmYMXUW17JRzDJDTgH7hbdt",
  "key43": "3VpRysPf3PKTLzU7Qito9FSvH8xkpQ2Tc7x9LunXbT3Z8GYDp9ZteHeMaXFvmF1xuJaoJ5aAxi4cdojcXZFgJHmo",
  "key44": "4vMvqnEPcb6CWvQa17LmvZQobJQw7fcbQti9bz9PBqaq8Ven6nSjC2B9sG2zYYWLE1LL6xKACJETYdN96ELbncxz"
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
