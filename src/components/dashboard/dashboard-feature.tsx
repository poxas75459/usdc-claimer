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
    "3nu4kXXydy4iJbjGo48aBvRqZYRRKdgMy8UPwkhjJN6GVW6mXP48vsrDja2HtCKwVKFskQL1cVJJXxc7mARs4CLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JipE6Zz1CWzWqAC16MwCTGK2DRTzBViuR4EUXd9FASvWnknQmExhwWyXeczxwh8tkrioJf1FbTAX6e8ayp2oAP6",
  "key1": "45B61emcq2aWV2koDaRQKzx58i5huQdZoGcmewtWrwETCE5SbTSokRZg8TTdjk15VrxgmXGHyFcpX6ge3rubahC",
  "key2": "4FAe3TU8Qs3cGBjW2LzjX5LoJGCfEaRGAw4mSnUSU6YrT9kmoYs76wLUWAxSEbgxjP2z4JDgXWg4fREZK99dW51W",
  "key3": "wUuQUSZiteeCgyF9skyDJNn1h5uVovSvXyFaBJPrav5PM5PH2GqEHs5L55uEYxHMMGm9rSHV6fsrAwP5LXktzkv",
  "key4": "bs8kQ66yUvwdx2XQLsFwpbBaGnsoAf5cRRCgUZx3WKdHVosVnAFBvJuXbBP8yrUuXu6fXfpaJgGTkuZsFRmMV3Y",
  "key5": "62ji88Zcf7S5trtSfyNorqrvJyuffst92FGdF8P4nD22eknePFznePfYUkFrfXiMAYPUD5TcoDEoCsM69KN2eEJ8",
  "key6": "3TqJdBwxGfUCp2GWhxst1fDuDvki68JKq7NrT5bRZkRFnhKJPcrUkakk4W44ecrR1yGAbEKWBDsk7fqxwjdTauu3",
  "key7": "4aVcFWtyarvj1dtgpPw2ymwudxYuxbbk6txcHxnMotdio6gW1JnQWHHuptTnzmEZm3o8o3oo43ENELq4ue6GfhEN",
  "key8": "Y9ePw6mFnmTaBRAC2jGgaNh6SSn1Lb5QJHXzZqh3d1QrPjthzhNhhEnjvgJaFaxJUrstH7rurDtr42Q9rQs5dCP",
  "key9": "2yAx483EprXkQSt8gGkZps2132nxTM4gjLqLnwzQ4AhamChhFv29mGTVdms7jNQwMVtdATaFVLSzT6AEAvMy5J3G",
  "key10": "4TYPFeiUecVEAG9x3dMk2YFEUuNGaRAsqQd6kUUfZz9UxP7rzvcAtxzjZz7FyPE7XEnVj5C3pe1TNZpCdhDK4KDk",
  "key11": "3xAd5HRAbm6Xn8msYXmwHHbGCt1rA1xi81vcX8D7djVK3WKorWiWGG9BSzYY9XBK33sLL1oiYkXpaiTzKWbxuU2r",
  "key12": "zTPhqTZJqbupQktbCqr95VzEPZicANCBxDmPefTZ8ftJUSMsRzqTPi8cnXvc7sQDAV9mkKifuXudC3SjQ7W8J13",
  "key13": "2zb73FJkaEh6TXWiQfcw8FdkRq3bcMcUXf55hdN5t1jFZk5N92Lo1WkHpZkxVB15Gqs4jpJ7T8FBftfxuCK1KkKm",
  "key14": "26LrK6XScgKpVNtKeTfcfNwsFqbrUwpU4YpMHJhniDJffJUm9BVRTnrUkDSBscypDwgjE83YuFTcmCoiqtaC1VcX",
  "key15": "5BXuHLqVPTxfpTW66VRSLCeapUce74TkypYHy39J4D9wqZxkio8YWzEpxswzjUjnEJNzi42sjZXs8aYP134AH5aK",
  "key16": "5bMLdxEVjwNatNZ8Xxw54JMGTab5pL427NGZGcU1u8XDe7oefqz3bwFWeLif8NbcmZ36nBNXkAuwCCdtoRUvnWG6",
  "key17": "56NTLrWJtj4Zdt9vu8T7pAmhbjgcTNEJJuaG7u9mirXvqLbUtXSXtYbX44agjcLD84K21f1B13j9CXeA8HDoYQ86",
  "key18": "58TG41ru4jkY1RWAFiGzxMFukJnfVHhkasxSdfbiTmfhDXjYTDTo4hHxLU8esm7xBuzH2ExQK7eFAxdJRdxuppTe",
  "key19": "3YqLWBdJgoqYXSm4t8CwffCuEXpPnPyaZvaP9sLs9fFVsCiFbpDhyNcyr6DHixc3BMUoXJMKHJBqP3SWZRrDsaJ8",
  "key20": "44bP3zYG5wXk3Mp15ChzkZbJp3thXbyncmq3StbaWPtNfXatTkyxh6FRkVBEhXdNVt8ezzrNiLEtAFusRHzFN3WG",
  "key21": "3jPLuyLP5WN6cbqn4P5B5S2zFzUJ9rC7E9PL748zo4hXPpN6CcYbSxjgWCyjLLdtXbrx4bpxNHM2XFdaGEHReLhD",
  "key22": "5HSkLFqfmyS7RfhVeRN27EAhaDzmJnVgLY45RPcoybYchFnXaPzkX4NqN57oW2S5JREp2cbQavH5U2kMYkzUmVSh",
  "key23": "4fsrzy5YVd4wCpSE3TTTGS59CT2agWnNLXUmzSX5YjKzvsH59CTj4FfD56SVDJDQBknPRACaRRF8xeZ7UxrnHCki",
  "key24": "2A3dLKh2iAvKjLVHcsdTX1W8SHTTGaU3KddihEizVQb7oMx88x9KUdtSqFYLz2AAv9qDEyn7Cyn9NHcYQNDpg51y",
  "key25": "5dbjn9V4qYSq9LHEy26UiUUWqQCErurpWZt4eKMncHyEMMSNt2zAj8gEqcVdTGF6QbpT7NXQbNyYaDwcraYV4XWE",
  "key26": "5iHffZEFMcn2WnRNfxNjVZTTVUmbK7fUduai5hg1fDqaXSM7bSx3pSDEoeLU5TkJQJ8x8M4GoDkFLX78DVX6XV3i",
  "key27": "5LPcDSZHf4MnNuNkRtus3DBL2zh3EardFDmQP9bJyvZvRGpZ5usNzRgSTqHpeTXodYZUSWR2TgAB8pzkWK32r4FH",
  "key28": "3ddwthzNiBVxpwHnDyrqFaW831xZBo38XyGeVSNxprL5Gn3hef5GupDo3sxUBQeruCpJmTiQNrmnumqzWz3yuXps",
  "key29": "5hTUq4a8H7boXBWEMVs6VvJfoC23TPRYoksf3FRaL2KQbpbvgcDY6MyaYt3PVEk9i1aw1wxdMTa82MaPyBRBufsp"
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
