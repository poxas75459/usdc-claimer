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
    "3sgaJ48Y9HhSCZX79BsToQW1pNHSbxKMgpqskykXmdoiz9NfSARCK28D8swQPYepiLTGSai6PyiSpJhZX8Mm2GPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xzJHQJPDsQRZudPRJzfxqeSW5ZakAiBSHqUUAybXH916cGFMAKAsbAuWbEYa445mmq4ERgiwmtXD2M7fwAgyxjN",
  "key1": "4XumKUD3tnHsAT7EfDnVNVuJvnpS8dQJhezErkUuUxcyn9e6ndc8YX51MBa6MyngpyiNemuUJDF1RswxBpHWM7Ti",
  "key2": "Aoahjb6uwVBdDzwp4LmMwGN6TCjC4qvjqtuiFwjYuK8A8aZs5P5jQxtJibFsyYPxqwrLMgj86Am1NS5t1oKVt8K",
  "key3": "39cHK8ZqU8FT7US4TicLzPPp9sWfNWNhP7dMGTJHdBLiHDdDdhpT5wEC8vxiCN8jUCttjw6HroGpkb7YNLC8ii4f",
  "key4": "5tafUSpbXRJYG3MfWCDCj5S8eUa64EWsaX7hgXa1DuaRQXB8AqVy4i68kziZEdcbHx8TGPEWHjV4gjmP5RUDEUDw",
  "key5": "t6YqPCpaPj8MrB1JX1V7pWXLN3KPG5icN8ByzZEvZk5zcN4gJwusQFtZa9Yb4JLrfwT6aqh4ewdnJXV6PJwuTSo",
  "key6": "55ThhDZ32ckqQLL4QZyPKxWgP9EDvbWMZr5H4xv6hWZZ7B2MdFKMCoBTX23yM4ryiuhLJKESTsRbqoXyb7ANpNjo",
  "key7": "7tKV7YvxqmTD71dgcBBxJUm2HfvvaZ4VsFtKU38xKsepXhTMzHc2XYaoTTcgW3q8qxe356J7q16yaWfbxu6okgW",
  "key8": "1YEFYonSPADC1rEGVLdVDZCX9dCeZYkZn2xF9Js8JFUK9HmbAW6G4CozxSQ668Bxur69n5bxWXeGBJyqhhCFWsY",
  "key9": "2hkJXcGFrXVmKYZWDaxPg3QpXojf4Yar5DzNaWzfpYFXBCysEwd8raxheGuB1ECXKzfrATFWzju3E86NtRBE8Cj9",
  "key10": "4diT6ZzBr3BnfragBgwPhhZ422pw9bwSVgE5jGNQwXHnxwveEHUApitkWsAsanvx9p6aqbGYipMdVNfKJSH9FKJ2",
  "key11": "4UAC2RFhCRBFPTNfFqXR2xidHqPjp2xX12KQB5Ty36GN5WBnnoQesvjix9RJF6Cr1QZjPS8qHet5qDpv6E1T9NYP",
  "key12": "2sz2mC5mtWt2B86DrkqcC7aNUp5vH3AJGKHJ7hdtM6VF7ieN5yLMaSCn9XgkuKRGKPC3q5nU6N8spagBDiKsJk6u",
  "key13": "38xF4ZnWnudg8uT7oZwYFCQXDD78sz2qdfT23btM5RCbcstQzYc7mM9UuX9jz3JF5i7XAQ1YRgWxNJaQuR2fi6i9",
  "key14": "4v7Gx4BPzhrry4zHKapLtn1eiyzye9dDQZzoWy96rVzLs3md5FiUCq2SzgoffMtUB5iKG5iji5Ce2n2a3ubExn5m",
  "key15": "2e6SRk8ZUNn24Gjn7AoNhHEPzXizCesNKAze63vQ9jVXyYs1sLmfGLA786nwEeijgXfeReBWAAak5UDSaWk72DRP",
  "key16": "3CvRduT1AEi3uHTegjfXtcRapzeY3RQmVVPtWwLxquSntMfgWafftq3vTzJ9NivuhDbcwv5Sr59p2F3PyJ8WQcfL",
  "key17": "PuKbRzb47v7yUEWb2x4Wc6Y2ZrYtbdNGU2QXytGRwpkFeKY7skSSMMKMUfmjyihDPGuJZrq7Mi7napU4tRgMxux",
  "key18": "64uVNrL76ycEeQJ3Ls4ZRQFfTLLeSfyYET2gphpeFJPnJWvPGxbA8NsTPkX2ZPYvA4mA78azKd23kX3J8hdnpd9g",
  "key19": "ihnGdona5Di5g4d61H3rQmuDR5JDcVRbruTBvXHY219cvcBSttpBqhNRF47o6S28trwBtRJXcDdQKQXhGUap2GE",
  "key20": "3XVnY5BWQk6TsPiPJqyaTkjSSywdKRebRNXTe8pV8gMkaw23qS7MKW3SJ9qZFbBsg4B8pnc8v7j1Nm8WgVDN3MoY",
  "key21": "3dqoQAvK1NovetwNeip66CUzYAwMbYKsNkeoz1jTAq1BzBdbQi8LEdz44gNtSBbFSF4nFjdxydZ8h6fAJFaDCvpp",
  "key22": "3SXyEVu8c62yi7G6EduVL1HXZfBcpH4iUXLfc4f8XZgL1bfxSncLYL7yWEEeSJgYkAo5mFDx9AakGPKQs9AeUSNW",
  "key23": "HujQMXvGtMKcYB9w7X8cjnRmjiajXfnbokLyfN6FyTgHSQVcaPiAo4g8apYcAgJcNzfZSd7TN6oysR5E6zY3y1v",
  "key24": "4RvbVprJC7oxspYyQahmrMex1P1WJU5k7L4tRALwPQt2p7h5QAZMc7YBVmQuVBtJBHH2sAxQmjeudbi5dMzXzWEE",
  "key25": "3G9WGtowqA3aFEtsK3y2hkop7JSj3X2XsxMnTNiMa3V4doE6aDwWxx94CXaRe7LN9Q98r4NgMH4CPAWMXjGBF8qA",
  "key26": "vW2u5urjFdrvZ2J6VVHADH73h1sw3wmWi75NmQR1ZswBPwC5pTZKqepo9D7MSuxNtV16pZBCiNxJc2c2fSgLgZg",
  "key27": "TddDxJ9uMaAG9c2rfLp6Typ6xWHeFV6FSv9BKSsvKXYmYkZY6k7fpTrT1YDh1yK78SVBrzg1QBfVFDvoEkcdtmW",
  "key28": "4w7F59pwR9FKfFT5wxzu9hy48WDCqWSbAtS2tWyoqnifoWsZaYowo2z9YJqBSizcJgsXRwcZpJpf9mrnWqCeLLUV",
  "key29": "3gX1o1daAhgZYXrAAz5hxXwTZ8SZSKwruaLAiwvFWgFmZ5MKmEUTCQku4kkwdqTC4pdVHQZuN45akvNYjpfTZdhH",
  "key30": "6cZG5EMDyMB6PdPAQYLUJ1oc8PDQESjBAQ8aNrAY3m94wtRisTcjDN6bnsoYFPxzeHBTZTfrBE2iABuYJDTswUY",
  "key31": "62Pya8k9UHNhzFGizjCLFVhXy6zCrYjRvEjE5WKcGnrapnmb8VcqPZtcBuj6kcidGRcR1L3oXamJ6fGmaHbQQBsN",
  "key32": "7SJbAmZJL7ZDNcMkExPYfQWzrSGCnAcGBP5kkYuMGy7VoeZFwnpSp2A9w8mTCLrqFbeoe1R6cqAJSik95zyYCAb",
  "key33": "5VyRBWcMxGTVeB8UBhWGeYKJphCF23k1Y4Z9Es2CAnuBfWtPSNC9EW9aQF9FokeHGVx15QU8EMCSP6sFP5ZKMuHN"
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
