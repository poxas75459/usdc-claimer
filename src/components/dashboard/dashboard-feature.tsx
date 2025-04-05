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
    "3PQkCwcdxkTjCgtNPM3CL4TddFoKHxYh7CM3wMHAGsS7NW3cqLw1C827jbVsbh3fe1nnoP6P7wXpx96WHVvW5rXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HRbqPYwe9yWd9mFz3sFEK15raReFNFvSjGFtBHqvgYkhHWxVdAVwLxmDS6UE8Xqsx8iLvLzCx9MMpCXNuEGMbZ1",
  "key1": "Mwpo3tXxAYiqYYALPMB2x8W7HQZyuaaPS75tdi9CdSBp35jPfpujxVjeUcrkAH2thR3Eptr62pT6QfUiYoyfZ67",
  "key2": "fc6KUvWYhT95hXyV5qdBedcMVpZiAbHvQdN1SN9oaUTaDYwFwCCXP4KV52VgfeA5rpeN6PfLRjvz2VpmkFZf4po",
  "key3": "2McEao2tar2qrjKWXd1QJTbuJ87JoVC7q2pd3jPpvuFMxsjScRA24rfXiRd58oJgBpd3zE54nyM7YmebSWWrMs13",
  "key4": "5dHMzXQYEkDqHQZrjG8pbouwVJAaDhUA1i9kndrsZqhXfQ3DEwyhPYheotAwiFGzqd7fHb8yDHh4BoEdy7oSq7cT",
  "key5": "4FS18mDdhu6ZuvamFwVSRNmCrQgdDFydFdtmue3TSNfwWPSfzrLmVCrYC6k6xfPv6oyPvRCK2PWHige7t1Z9nRn3",
  "key6": "6m5Dxm4X8trvX69CrqWW5RmF4LbSeKGzJUNJHQwfSzmFC6LBpVLxJBbuCDJTanrKJHzY25UHqGcVe8sEqRWQ9DA",
  "key7": "NpATUyxA69Boj7cn9EPkdtcfB5qUsnAjcbkdTEkGwFooDiWPCySkDZTooqFEBxKx25NmYN7YqXeHQpxPdjG9k6e",
  "key8": "64bLF3DCcYykVeQ1Ec2gQjLVaZhgp3KVLb7kKP2vD6hhymTe4uwVM5oTtp9qYMSNrUVVdiiS9DZmUE7UNar6o6vo",
  "key9": "qGqfBJW2yZNQTYTo6ADF4bkc83nYZTCFSLff4a6mMovgN6fAB2hnEsXi43yD4bENTZKpcgUWrJjrYznP8PAiJkk",
  "key10": "5DiFBiEFTWmyY1mm5mcPCfSoD9qbBAywyEBeb2xfax9NYoumqkQmyvDHAL35fxBQemiCY8Lv2AJebMrDGbmnRzHg",
  "key11": "2uEUDKs3SwfYx7XbDR6MFAcFPYVyneekhL77G2o1QnnfKHLh3h3MUPzE58DUnGkwACCtAbCvZSyZt3Up1ShrHaXD",
  "key12": "2bGkuRJ1QmZU83NgB1pBSwimuPuukM2WXBSsH5cBLGTdHN3SFUeNLiaQEFrZBdgxrpMGXuYFYp1Ps2Zbeg5GJP8s",
  "key13": "mfZb6GFw9u9GGZ1ZgYu3Z9FmNh6V4Zksfdw2u8pTcwESb5NygfzinuioLwZYuzJ3FiLXGDfNbGAoyGwHtXwNVFz",
  "key14": "3jRCsp1nV1XoNUm318noA7jGUTnQxvDzwhDYscxWU7bj2NkYpaHApG6iibEJUD8NtiN8VcixFrDohfbvsxN13vjW",
  "key15": "5FYEdku5xwwwyB8zKS9QMqhbmVSbjBz3QkWcqZLHC4gAfD2uqR8RDyCGCFzmRnWMg9gpycjAdoXRHwjsZdWUcJE5",
  "key16": "52JEYCcD5FQXUePNfegPCnotd5nuPfZJXwLJJXazLti52LUki3bfxPxuh1CBbNRoqienzKNntpNL97QWtwBFakVa",
  "key17": "QEAjs7wYCeiq6TTdbb2tPPHwpAd3HWjrNijYrmXVGDuUj9mgeYTQ7Wahykgv4R8BhnjT7kHsTm8D2Hhhv3VY4wC",
  "key18": "4hgmNjJDHqHe6ZpZhYyCt7aq3qTMPeqLJ2b9pgv5bhS3PW4mMZqhJ2ckTBKt2cCmVeCQfBgdeVDtfpBZdmArwZcn",
  "key19": "P82GaN7yWfpbbophfwR74bu1yoJZ4DohrgJeWhS8tKrGukQJYJ6WTqndF4sqvG7KybinRspJ7fh6uoTMFAHuZyw",
  "key20": "2WWMAZGJu99tUG58HPVgBC7xbAkDQP1uB1TZvKG6wVVzuu1vLjLVKj4AWHjqbZZQmiyD4PsDjgZtNHWq3Tt2qe6M",
  "key21": "3tF64DZk5BSzt87VzyQqP2kAw6iFStqeXKGi58VnHHPdgEua9cDbGyBfAbYqZCCk1FusDCt79NMFABPBqV2c1t2r",
  "key22": "2cAQmxNzMixrb5fhK7gej8rjWZ6YMvXZDoNVkxUNPdwRc3GYgWKxBfcDhBwyZdHPb63LzgDev8DEGvEKbbAGy8P2",
  "key23": "46DfiGeaX9oKFteRBHzvaRiX1kZJut9tXNNbwFotpXqrZECS9Qm66kLFcEJbAkEP25dF1BpxPWU6ys7rVD9n4axM",
  "key24": "2Mv6bRMVEAuvihxdRuDDJX53jFsTAucWy8nrCY6bSCsohHqgiizSaLgQqaZCtHyWz2B8mztjjmTy4bVPaLn5fDC3",
  "key25": "2jggd4JY5hhbdXW2foPowRScLA9Vyb6YtvnzQ8MAkYGUiec2wAaR4P7QsLi8Gs8TsWMUGTtUcX7xTUYbsPx4mngf",
  "key26": "QtSpKWhyNKMi52B53VJa1ZYbLrcJxTdJhcjTpKvu8mLR7NHtHLnnf64yircJF4kUj3zv8AhmGDre4Vfw2o59bZx",
  "key27": "2F6fQxHe3rhFJQFeJ2ULFpK97eZYifWbkD4fYSxaHJJDVZN3Zj2kbTXD6sifMtDCzY5HQ9YEn57faTQu1ZMYxXW2",
  "key28": "3v4jBPJoW4qUiRFz8cMPEtGBWHfQVz7jdTgFS9zjRrk6LeWBoyL9wuHyQbU6teCdRzHSVva7YNY6rGtX5ZCkjwGt",
  "key29": "665r55fHz7YWs8bAFg6CfEcm8znfzft7D5viWRgekMhUQZMNvsJGARXbqxR9Kug29X3m6qXLgFj99LCCRrHQSfhy"
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
