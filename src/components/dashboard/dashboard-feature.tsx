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
    "EWQLJrW3QWVup1jNjmxEeAX8EZayTM68T2x8tpzdjRBSAo6ryefjkGoQw26pobZbabY1zCqVgt5p2XGujA9HrJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RwVN6DC9qge7wWpargLT7qBnf4H6D8bkMDAhmNEpgwtg5FxbPoUmk6A5EiabujTokCZrf4cXCUr84kaxfpFmJvN",
  "key1": "2ufdhDa7eoKXir8cJuvgyrz1bZ1iLn4rEEanW2kHmXdfq9AjTHGNDA1ybMYg2sX7xYFMMoLCFydYR8vEvvjNyPaR",
  "key2": "3Ydz4D2PncRSHetdW2PZAZViXG5q1gpaQpttxndn4ugfeGj1daCAahVhex76spyuEbb5BvpQ1We151nCcupjWAbW",
  "key3": "5YBi9EAvvmTm2v2MoBFRtZtbsoX2JpxFcqkR5rbgwAbHxfu8QW2rPT8vhvKDJzdFy6LRKn1jXSbkQbUhr6QMAXgo",
  "key4": "3hDgXM4sebd5h7CBQsYfkQoFDLRr13tnHxxyhmAXaTs3Bgfq79eETYpzZmQ8cSrweQ5dV93KbUNH7eREJsAYaHDF",
  "key5": "3qF6QGerXRNbeQ2HvyRUEHydC4TgXd9Ks7iKH7DbmUb4RrUxGHnXKC4XTuK7cymfXHTvqVQqnFdK6JGb9SU4dpNc",
  "key6": "2HRQrqco87sDGqG7cKvA3wB81Y2awSHcgk8qYNhCMfja8LAge9MhC3BRfQw3iEFku3FffhGgWeTYE31Hz1XixPY5",
  "key7": "5jeh4p2hkbyH2VG4yRg13WomnaiCWKioRWuLnnAj6fmKyWd2VC4SpybmsiuLL7oY1SqS5REF7Eh71j29RozDsNDM",
  "key8": "3uZB5uZ8DGC5H72682gQtaKAQUzNzvrDDAjw5MLgy5jtAe7k3HtEeg23BcjjPvEkFpMfG8hzKDkHCiqKSC6nhcS8",
  "key9": "4944UiLeByML71Kufm1mLnPoLT1vG7ho5LQMZjSSTEoEMGKTvhu3nkznfMhxvXhTxcN4cUPvKptLCiPr4KpgMDaB",
  "key10": "3QZstZcVfUNrpAnuAibHqZe37ZaxBhg8FUozRUgRrGMFczrLSACiKncGJyx7Jm7gAKvfZMARBxHVZzBWrtbaRkib",
  "key11": "3VbGqxsE5rLq3Vq5D8k34Vn26w1LLDTmvQ5Ug6XE2eQ3ZRGWZL3toN3CSJDfhdXTPQZ4J2cFT6rtrRUWV78KAhJt",
  "key12": "57BbbBwsJXnck643kQDCzoKdf56GgA3eS5o8FxPnA4AuCBGB5TjuNXr4fdFh3HGD4yXAx8xH6wzYhpbM6m1yQHXZ",
  "key13": "5HLNCYsf6vcm9BNFVe8GV7Ecm7sonTsgPsipP4H8DGWZjiMLtpkgSjAT793S9FdRjMK7XU4GxtcxpQVRRd9qZfpU",
  "key14": "5khkk2pG4XiEr21T1izhXPWzbBEKH2d6HXSaadUtKDc2WtF4Rjauwbkr8R92iTeHFSfMipPfC87QNZfzV8Do2oFh",
  "key15": "4FWgvCKvq2tbory7FcAfDM66MJUUMp7Qc3N1qCmfXkRV5hxwQ62PCUT4MxhLjAUvE2UzazYJ5qhuAj9got4SDgSM",
  "key16": "3Cxaxq4x7ixdnech4pUhQFcuwMpqHmwcabCf3DYcU3W3viqHtf9uHDvqbq2bm1R9hG3JQ9ux1VXjP3XtUMuNyash",
  "key17": "4zAR9CPEJUBGUkyiZ5JNNUUwkuAxTqBMnYnivsfgPJmt6Vr8ifmHEoK4r6yCqCimx7HT328sgjfFJwFkfkFs3BGQ",
  "key18": "32RY9S8xjMZnsgaGLksARaLEXrgYus7FZazjzJWRS5kD2G4dizE1drFwPYRov7MbrPbheho4ohyZx6UZAz3cttEk",
  "key19": "2AUZMR5xQLG6YegLjvtRbKWnvkQ9tVTSekep3ngJ1m5WMdHS4Vxuy5Gae4RSQHe9HhenKdjCYWKsE1PcdiuKeiv7",
  "key20": "5TdJWLmjvnst9ZGpThB8X3QkjwASZnoFSdzGaKo63xmD9hGv1vKyRqD7uQEjVZJUsKp1QUgzks3ek2qNRYZqgngn",
  "key21": "459h1of4m1rJ1U68zFpSnyQZjKbaNiBizonqy11VPuCkitX6ySiAJWbqEoWwhqNA2bHmEZN5HN3NBr9NNzNr9Wmg",
  "key22": "J2bNuVkb33u8h9HuAcjHkfn7weoF7EeDQrSwhYMHNBXq5AvMDApbrGKfz62Wap3aMseKvh5B64mLCoB9J9n2b7m",
  "key23": "4HH3jqoCbkD2gKwtEboijovabdcjV7qmcgjiQALsrjZFAFQbZA4n7ahDVk6Sm1TDf5jmFL35MDXRvpCgGH2vJ6Mx",
  "key24": "3HVhx5F9DEwawkTKyUFXtrvngYzZgzRqX8euQ4K9MuTe79x6Q2D6ZTEqziq9MfiRRup8aMyqZfY6CzxpkoFmKWkG",
  "key25": "CtXEbpYwTM68eeTH5NQAZyETKeJWfZeGyH614dCgwTpsXqsKBJUa52fFHX6TcKYV6iQkhY2VyjYT88ByP2ANQv8",
  "key26": "2g6EkGjHS56uLVmWdN6ZV2rNdWKSts5wwpR2b9eNN9iYdKk4VZrwwRVVgbuJykaTmdQkXceFnCZ3izsoUDSbfRx",
  "key27": "s6HWCeebMKPz6sKGiGuxgsp5vN2ZYsYquSrFEWFwMxUE2L2AkVRMgBvQpV54nppD39A1HPdprdcjka2DUtHrMVx",
  "key28": "eUzR1xc5p1XUuk5xB8zXJPM9Lf725P4cLrQAb8P8xvUB6PW3qbAm9idf9bepE98RyyC5Qjzg4udia2nfFhYSMRe",
  "key29": "2rS63TfUqtGDrUrrtFBz7P8zX5X2z5TWpCgzxyAH8Hpmxevn9tvR4ZsUoSVaNmgwR5CfEuA53VszAjG26KeEfi6k",
  "key30": "3n9jPwbnfGwcXPKCB6JqkwW4KLCEDaXJMFBMvLMdY3wyLyPPPM2P3h3m71Bwy2kk6JWuo4VgPQJ8FatwoD5Yvdh1",
  "key31": "gBYWCATaJvo5EppkCCw3AGSzosDifPjjZnFyGddkr6gcGA4t7FdJBSbvrT2Lj2TNVq6k8owhyCsMNVcmiFb3BKJ",
  "key32": "4qckhe4Ba8HfSQNSF8kmEhb8WoB5FHZU5U4ayrrPjxNXTwEosMA9LnPjAyaSe53jX9ryfzXh2czQVRpyZexRVVuJ",
  "key33": "3QJKdx4oF5ah8XkoVgRpFqhar9rE3Z74qPQkyGqVFfFrw34QsoNPGvrd468qRWzgZcu5NcR5wSUkHKFxZY9subHn",
  "key34": "2BCM52w8KD1DogJDPRi4p2XUaUbLhwLNwZv2T7T2VdozXgWzML7Yb27MjabUxBPLhta3r7BXbjMbZeTr9LJ4sCmB",
  "key35": "5ceKS49wL59HfNv2U3nL7uPFXWGDWN9S7fHFERzRSQLECi5DU9HnsYFedGHzuysYfDryFgqU4nLT2EYqVtxTk7Lo",
  "key36": "P7u2RLREKY6Kgdd35q7pTUJN2THodiRDb5MU97VtngJMn1XbvYLNN3QW8NQigDGxHkDUXc3fGBpCH4fXtiuEuKD",
  "key37": "3SiapJGG9czMvdiGRLQkZxHQ392zqmo5QdH7ngn93zBnuHCNxqkRUnzV3gUxhNwqeqimzgoe6TATpxkvKZbxZ7QS",
  "key38": "3qPD2UUDQwEWdQnGFHwiVbSz6zxhtZDhTTLeCW41yp5pyA23X1LTLhLRooBAoUuRFQjhE4W2GA6PGtta5ZHjCGms",
  "key39": "2G8DC7JfYgcFJzG7L9BdLJfzmvHBS1rogd8FP2ET4TLqU6gbxv8w3KqG1Y6BMbPMDXhVWssUcRXskrmPFKV1SmVt",
  "key40": "4ZWhz4E4JCTTnqidXf4NThCHn6ZXNw72QQojwhLGdME34GhzndLPLnfsbCQGYqzkEmH7UHLdACEhyvrmFyvfVQyV",
  "key41": "3uo84Nvzvbgg7sGgeZmYKigkRwibS5pymB1rW74nQRojsSFYFQfxJ49K8YtKJgztUKQEu1v8JsLwDyyVAqTYshdD",
  "key42": "SGDBmri6JzmJECTyd828CGef8bUwpuJ2xRx6PDRBcnxGZyznPbGdcGRpczJM5eDrsp8qDoX4m6BnzT8ZqXcHM79",
  "key43": "zBRou3DLMbZ8T2FgKVsbfZ53thQ82RVDoD8m5AqVMBWqWHDYtpPbbWgatym4LpKLD67baiaAACmbXpTXAjmLyWT",
  "key44": "48BmgW13gR4PBVykSJJvSTgAtSaWdgo9P49HQ5SrZ8cpGkww1yLmiyyhT4q1VCushJX6benYQkKRT9ztDaMrBJAJ"
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
