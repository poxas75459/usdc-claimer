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
    "2QGGS8xs7FEo84b9zD5duDL2TqrerR5oXFSz1dgZ7RAruxW2G8ExSofSxk3RFkvFGYEewTJyVjmhTnSUg4bQfbjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WGaRhJQQCfGfFksWgCSQt5HrBqBKCKeyKDX5TYCQwZSVWtvGMyf8ZfeFquF4tC9dh7dRxEDqp9QwvsQctmEssxS",
  "key1": "Q1xFb3jtDcJJTrJg5wHAifEsNcoQqp51U7NLuPVVXSZjy2PzVtBf8TnpKTZj2p65BbRTAcTNAz7bXyx3uRcoTTX",
  "key2": "4Kb2ubxhL6rhVssEQfpcUUKJqyBfjCdBoCFwuigtfupqthu14eLhHW1sHnnG4ux6ZyoUfJ5feNUaqSx9ETwSgmRi",
  "key3": "3g3ZBmap5mJT5NyVtonEoPFuDJ51XeoDgtGX38DzMrGommwj7cwQgw1n1j7SGZxuXEPFdewPhkY3F319fDHeX1Wa",
  "key4": "5B9dyhAG4fdhfehvCb8MKWP8Xx6ehXN3esJ2SobeMTk9iyQZeqjY3FXPwkjskjEEDP35KZjL6pSBd2YXT7AFMYq",
  "key5": "4d98ZrJFvNVeesrLJfX7fqCpcwWBPGazEDDDBJFo9JkwJgQ9wMiAr7hDGhYhdNpb1c7iykvoobqudTYb5PTyn3UM",
  "key6": "5jMu7U4e6wrJXF2JKCUGykfS1N2iYCNKHmqis1xhRP7t2C4DXQJSNmP9iY6kcZZVQEREWcWvsQwRYSfx2fBsrA7s",
  "key7": "22uecdmbJmPkg4yxSNce2chfCrVVaK3qcyt4rub1zvDdeTgXKZiE3keL1AJKFeoJwcYfKmFZsY13n21TUuZoub3i",
  "key8": "4utPVjiHuE5N2fL1pBzuF63sMhJY5Unva92u3LqpsjiML93TUG6kDJro45ZN3diKjWfmF9Qepw5SJB9Kr4DgeNr5",
  "key9": "5KThbbyDievtbNP6nxkdEifBVNKhEEWMvfB6kZ5NRDb5mq9dSmpfmYjYkLrLjHCErGZbBv2XW8NE6wSGSpdykp6E",
  "key10": "3hwvYAsao1u9MQuh734G4NMnzLtCGNnBVQkfsZvSQHjUsbk2MMPCHcka2hAXxeb6RerQZG5YJgKA9dYHVLnuocLz",
  "key11": "49G28uF1EqF1ztJpC9QXJ4LfESoKXh9H2jb7Lgx4PWxqVgUND1V1Q5BMSMSL9ke6eGJBh3WBRE738qvU8JN8rQHW",
  "key12": "2PYDo2oyusGCbggoJ8enthWipMufcEuVzuPzrgm5EhV1hrT7mem3yRy4wyvywj5g3vV2mhkPW2twHd7Xgqvwxb9C",
  "key13": "2XudnyML4AP8GsWnJqNDrW9LYm5vxEqcMh5vwgxDFLGCMfEFobUGvXrVwpKNLwKrJaiLHJj9zc751Qw6HQEg2bbJ",
  "key14": "2LCzV76HvRcaQwuPxz2w8XbRfJXSH8CNpXyv8iLkabSkX88pcAh9K6Uo27SvBV8KQ1Wvr4K3upX3iNwpMPhtD2VB",
  "key15": "5p9jHiBgFJzWojrZhRjruK1B6RYH9NQUeeuHxUnoz3tfyr6b8ZYZ4x82d8EqVCreLSGbUTemKRT4KzVT4kiyYXY7",
  "key16": "3vEWKux5HhzWt5sNK4Pnp8NLBPRigt8XpJrMJjPhCwz2hXC9cmyAqprHs5PZZ572MqWRynwCBJdEfH7WfhYCo2y2",
  "key17": "2BLD5knv5drNuRfPEW2N5ng3EieEbkWiRXxyP91JV1272Btp4rjgnZ3hzHxPSrhQMnJpt4ZnNKkHZZBYpf1MstQA",
  "key18": "2pWT2k4GZx2cyexiZpVcCCKaMF1ZzoP4eVJSyeyFe6bWrhgHY2v4jKWKSdnPSd2vCqiax8un7hR67rWQjGpaeguk",
  "key19": "4vszK1u6AsAy19bpWMLTXyVxaCUgQC1AqyXV6qUYs2SgQRXX4izXvbwEt8K4YfMdYArusKzP9W4RQBEzfVYUapiD",
  "key20": "3X4mjAxbBCta3wwtHf491oC6AmyphxeanoMUaFHTBfMRPAitbxsKT9ywP27RDg7GC8t4akhZMjtKsuc4WmAYQ4vY",
  "key21": "qmWXzPE1Ss2P68ZN4aALP7bJwSk15NgUr7jagEDL7wf61euhSsELyS7DwJjzyznnKK1vhcBT3fhX3sYDEVxmCGw",
  "key22": "2dVRzs7cSZn9FMVE1qQNg8TDmf6ure8jP7Trs2UEqMZ9PPuXN7iENfyHhNNP6TCDeRmRfgaYq5qrx9jvV6c1VgyA",
  "key23": "2rKxCXu44FcYV7S8MSrdHSBtZViSmxF4gCCFQSy3uNPtCMRcn2TFj8FqoFvazZJZcfhAFFMWrJNzsxmKSXaNH5Fa",
  "key24": "QKvWmpnxY8GqFWn9SbwYsLRdmkJEb8gLhLXG72B5VSVhp2sbpyLwGmCCssrnfut4oQq26vTXyYWUTMXY6gR7yzk",
  "key25": "4XLBgJtrpPHNEcYTdsnnwQm5NWf62d6WGBCtyC5GJCXjzTE6mgA95cbtMBPMA7E79y7X7UBfFKy5URNeHRUaZA2g",
  "key26": "4M3vGamm3MZezQ6wLSUDDLtpUrcyeeobw5zW8NkK2gBdFfYZhWTCtJtYnwCGK3F7V9pNrwJkaZuxqQuQz53jktyF",
  "key27": "YNwVg5fWco3aYkS3qrUJ6cpP3GoKc2TuYQERgprQWTMu6dUk5Nk1EqEfFe3SVdC7ne4MMqEckgU3aUPgECtS1me",
  "key28": "2gSdDuzsUiiBPN3qefwgcGSuyDyWYNZayxg4k9kZkpNQksatMpZbRg1jeCbgSHUYhkrgpch9PCK3dvY4L2crAVty",
  "key29": "3sSYU33XrV7fSXTLWqh3bsa9XDaQwbVrKQYqWQkisrcwzL4h3nWRLofUJe8EUTf3Z8WZLqpjf1jT9VWGQEVELrzt",
  "key30": "VjbJvGugyY3Hg4J2NME6qLPzQDfCbxoC9vSth7mfufAsk2xbqr9tFjZZAHGPsqJ4rNr8K2invXMHhUQJJFLpsVK",
  "key31": "3LQ6W9Q1euh9tXmcK7NJqxi5i9XCJm4vYvQrUHnnBCJu3puVWQdjrz5RshznEdkTKtsuJ7KVKERx2qf7mMQWj9fP",
  "key32": "LrC19rynuShJh8gmeL57SvKibyxbrB3n6twRzCxpX6PB4iao5JbM57wpbZt6mLfqBRAC9jmykohmLkxavyqMUjh",
  "key33": "4x1qauKyGVSuwgSztvYAf9a632FSpEWRstZGo7cETTsRyymHFp1eeABLDxq9evjt2rbxPnYxm7CQjFcQaDnDcQx3",
  "key34": "4PMeTdiD4UBHnJUe27pVV2caUrAiKWmANJsYdNzzRyBNhkyzi9QE6XmmLi4CvZ388vzRUN7qxYxxU3hdRdSeW5h7",
  "key35": "3hzDgMR67xXhVaKYwK1th3wdwNrVP8dXxyvt5qLMiU7XoXDzqH1a7P3Bcp4oT8HfMF5pSApa5sYqJNBoad6wmfU8",
  "key36": "2zxvV3bgWXi211DDsrSH4TNfeiPZEzPzhNkZo7ekzqZ5fCrQupn7PUac3GKBzRmXyK9PgS1hHAhQBnRTxZnw7m61",
  "key37": "3mNawoS6uq7GHe7tpfR7AmAa8Pjd1MFjmUy9bP7XTrzN1EmxdFanVrotYoCUgnrg1exHUjqQJkYnbWRxSFuHVaHN",
  "key38": "5A291iMYmx5hADNmKpeRAJFkUteBTaHybb918mYdPY1EmxSjwJodrwp6oTbuCTUCwfsfx1cvDbV3uMgdkXQN73o8",
  "key39": "4W9om1GEgQ6m2cgyjhDVj9P1oTssTPuoWGUct8duMZ5LCa9ysqRtRsGvgZ7wcWBR5ELxVkBvYXWX4N3tdSERyXWZ",
  "key40": "jMBJcszJE8hN96ix138tbhFoJCb2kdS1dpMiPg7u8UHWRdaUpXk1jaAtf7wx8TM24Rf2n4gxCtqrshgrpa74hUK",
  "key41": "5yJXvZJojQyzBCLyQT3jKVmpC4nsCE5LyeZCNQkDZGABnKLHcz3E77rjoU41T9rqrEx8pcqRkQ8MM1ESKK1N3oH",
  "key42": "5pXhBx4GKLRgmfSCcwPEWbBRhf5YWy8tvs95bS4WCuPo7CtfZdmooDwbybY6vyKmAG8jQjZAfRcMLjp6MSpXSgU2",
  "key43": "2Bvg7GMQ3J6XLjRy471U3LfwZS7ookuxiU1zL33y16XnzkWTvJgoqsc5rcB89y5eDWdg7eCRp3S5xUGTeM1hmKSR",
  "key44": "4ym1Z6jmf3v567ByKUptMjhjd98bqFgvaWbrVYn4aZxNo63GYQh9tirReHu2SFDfykAp3Z7trYmBZwYWmcPZomHQ",
  "key45": "4ZnHaE77vDq28LKHgkSoPyX46CRDVUv7KaC3mQNxj814H4neukvMUNq6VeckNqL8iNtKTsNxt9WdG3kn7cAtA4hV"
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
