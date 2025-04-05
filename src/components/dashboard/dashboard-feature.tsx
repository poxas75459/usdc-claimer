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
    "3xF3uPwwWkwj3ib1mDG5s6ietkk5aXSPLDyVjDoru845ocFFsfygtwqEjwFLgjWpKBJv6LpdYGkLq1XDYHyEeyMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51w1pmjcGx5i9rvC3mrghdrM5wkccgfZsSxVuupKSoEdn6E2qu7Z1eBFgTJifpEnySa8kxxYXZQDJW7g1FDXBQ5c",
  "key1": "2ADwUqR3oFLzktBJjpqCo874a2HF7HLCmYhX8zMPFjuzt2iQTbT2d31BWsT7CoZBfCzo2m9pZR6sokftt7EVUBwH",
  "key2": "3pHa8nSNGakEaAxTj1UTBgHq2RYeEnfrUm3hraqofzkqNCvmxmsBfP8Mb1VtNz9E7S4hABKz9N7HLRCSk2QxMiCq",
  "key3": "5kJCrLcXzNmpCVFYnmGMUC8bjeVpNvFdrXdk8YZ73nHSTSWgsKB41zSqS38q4fPVQryd7tkkfXZtp7trL62UxgoN",
  "key4": "QqcCLX3QYGPg7Whfp2vsVP8qHFSZ9qqkPEHc5sMhye1U6irLAbRpxrS9vT4MBH65gddDpwxFUe5nqHQnFwzGudJ",
  "key5": "5fSsHVEGjr5xBtDa6yYBrceUZTynaxVregk9k3pSfbFnXVrhDWjxGubXm6H7eBAo7EpC4ekaYTNg6SSmNwzGAia4",
  "key6": "P2pLEri7g8fFJfv3NFwZrnp1FxNn6vKCKbioucfh7XdeNFGQ7E4eg8T21UT3vG9Gkh5xvqp4q8bmQzRwEX23rQv",
  "key7": "4KLoS6yR8LCEjKvkUhubtT2PaqszzwTexy22bEP9b4KWi56qnfExEm8mmW8pzDZ6cuzrLPLxwJ9tdVX8FojRFJAn",
  "key8": "3KjXhYZ1HrciV8txgi5zRCZdrF5E6ecKEwfg3dJrJJ5qVGJ3ET84VWetXP8RAiAU4B4cNRrdJZgn5RHRRXcJZKn3",
  "key9": "3bPtKUHtptfX1q5Ei3vB8PYasoMJ61zJRRJUkc7DrUQQhGMx75THhiLSrAKaG7ckfpKFi331KLUSpKhhfBhhZT6Z",
  "key10": "2e1KXVx1LXRcxvkBx6ToqfKsej3qs6DZsELqFUNEb3MSddZX72r3EEEKZHEAez7Y6R83RQgMYxFbu8P9RCbpvfFV",
  "key11": "5T4s2KtFv7hqj6ZkpAfuDW5T6yNCgK7XYN6fRpiNNVCsCqPcRb9ThWFjzEeo53FQF6UzfKZjTSDLVCDXwqhXBt92",
  "key12": "4ghrWWMhXwsjUYvB5Z2N9G4t2uUwJZdp7wRYhYx8wLmeLHKs6PsBStMGTLWakz4RSWqSE2hd9pWuKxRQCB44XE3J",
  "key13": "2nqvAaYV2TSRo7GqWPmV4jTnEjcNtijYKtujoGJ1YfMb3EhECjgKkr1tJvF8itNQrWCCvRbFgnekMhMXX4CrdfJm",
  "key14": "3WWdpPBPZSbcLypdBY5p1JYxdHG9T3v4gX91VMHBCapcDM4zZ1dr5rE3Vt4fMok8xR972Fq1SKMbEqiAdcs7yX1b",
  "key15": "2eVjADRzAPPqttzkari3xwrap9ySZXTvnh8SMuwPP7o2s5ypy3PNEvwCLKFBWjMBGzZ6XGEqLcBmB5J53Z6nF6hD",
  "key16": "31guNWqQyVtYxjNrpS4YWFHPs4cF2RAJPTqycHQh7nCgX2pSnsjSy2Kz1DabjzZMj993evMmzxWa2oPhzxDmEvxp",
  "key17": "3ZABjZrBEDtG94Tcw11brVsWpLgcP6arSrowwMoZNNLYyuTgZxPBNyzN9vNWZGnfjB5AvENMQ54AVFPpLpdaTYhG",
  "key18": "2dM6h2vPkKnY2aYvPwLJyzGucbbJx7XQcqgtuA5yvgf4biRCH3SCMraYHsPG4uoJFasv6eKFqEEmXXFnuyMvV97P",
  "key19": "ahAcuqWWjLGmzFDBhieLKujF5NEJqkW81tKDdKgXM2He8C8fS2PLbwswi1aPvxR2DzQngGfh1jEyLYZpzMe6d6m",
  "key20": "4Xoj9sqYXijTupHc4guMKFmHiXuFbcCLfkyfiBnUnFR9e8gsPVvQgP9wdA8pS1YXK2oPpeBWjuDa6d5Qv5PuhMyf",
  "key21": "5poHje7iKkqeNdV8L2mcUCMZ6yBQo922kjHBTZufLjwySzWBmPnSFeubrELo7Z2AXYNTJGnExRd3fsw149xFV5DY",
  "key22": "2vurhY3FP1wr3ezQY3HDtGYJm7coCiRyNUvmQC3EaTZNY1TZ6stfvyLSWf1wwWxXsPAnDcnrD3GRLW2d1FfZm8yt",
  "key23": "4KaXqJW6ae7L3ej81cjURgHznRSfBT6LZcnSS1M7qxjKFTn1Qu9iZ8RFk3iqxwE9WYKafajCvBdwzzYYRVH5XuYu",
  "key24": "54BiiDQMfDVEaDyv2RM5yqH2QB9osJ7RcGLPS2WNbRYezXShfoiNZ8QPcnsmc6XDm2CE5QvASWRstvn3iVmrBypn",
  "key25": "52uQ2qitgXwAXUzyC9xwJ3UABxHtVSHKdJE1YZevba6p8TCgXj8Q8Yien7zpDvR34KWVbEmpxykTAapH43xhPMZy",
  "key26": "2rspbd3DDQAyDoMwNDR87EFdB3SrpgSokWjpmFDfWsyPR4Z322SADp5MRpzr99tWERsT4xLooUcQRoaHQ6fwTeW4"
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
