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
    "5sPK3aDUf235vfs5nK8BaL42P41PefJ6AZSTgg32iip5A9WRKws4ENYHXBxn3MKHYg8AkTvuLF4ByxewKMTg41Rc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xv9R212QKCLbkrUHGZ8JrqkmSABbrsYrzkt6Zjqzj4vBsWh8wTcuEgbQ8zCANVf3meyQXHM2eMjavoCA4Cgcf6b",
  "key1": "5AHYqLmhcn4Xf45625TuVNHHSo92mHNemA2Sfer8q8jUy1u1YYxcaz1iBtSMf5Zm9hSxVMa3s2epNFPpM8hpZ5cG",
  "key2": "Zgg4Bv2Px2xTu2Ha9St6hWUuaTWdhx6EnXaKEGN6T1nSsSL6WzSsYnvQLaBJnZEMMzNtihCHJqaWme4gn2V71Jj",
  "key3": "4TPxsCpodyxP99jG5XHHiN6GKPRNMrMQpdrAcY98QJ9wMsaGtTdgRL2UH27mcYd1HFEV4RtwK7RqAMuy5QPxDmQp",
  "key4": "2gGAeGS1DniHRz99uYdFoceBgQDtsbC9pFNNEQnRBH7RA1YK9btp2zjcXH1ycfBjEczM4PbE2NUCoXbZgj6XxdWW",
  "key5": "4A42yjzR2eL8bFDxj8d1in44G9DubRMnFqcDfsafzdyQ7D4GwYKSBPYtVT57Fur9GrSaWwsAtqFeJZAFbXcJZxb7",
  "key6": "2pZGNXrbq1TC17o8iSBTW27V8RWZEudh3FCsnNvNmvKbqyfyAvM4mquEKDvc5izy7aSecgbgrsdKYoGKajgernDk",
  "key7": "AP6VhKF6ezRFUU9PH73D3Tf6VwfvudscvuUFQLGuTFuLok8uHpx515Eo79pUjefv6TJ629gQwqUw2ssGveajRXc",
  "key8": "k95qR5HGyCUiBdsDhEqz58fp7dRa3Tc8RCV4GWwyQiGEzf6uiZR1ghWD8AN22yZtxGftUMjUGL77cEsbS28mXjS",
  "key9": "4mGc5ta3aie6cJZyWKnHq7Snmnzg9bchiG3w72Jc5MVEQABb4GvTiGE8XdwNFTLuNH7zRn8U4oFAWmo2oEb1aDi8",
  "key10": "KvmmPcXqSjFKnhCVbFg5wVBYBKzfgnqJ7EXAua34GALbohTPbUD7XJnSFH9R8obqU4vqVE3mtaKZtKhjHqQGL1N",
  "key11": "5Y3kbVzRmacrUnz9JiMRS5xxd9u9UVGbLFMHMKgVYQxcWp3XajvdXn8CJWPgcB5MZBbVxVFVoWsR2GTndjceajjv",
  "key12": "3XZjs4d8mmeJDBA2wV7NQ9eybJAJ3L3y5o69a3ktwWkGFBtNB7Fi9FVThymennBDUr66uZK5dtCav1kgsyQDaWdr",
  "key13": "3w9WQqg1b5TUhHitzpmRHypj5V7xTnE2uKBDYBCM9xpn5YcCxJKb5qVnVN2uKP4MTjzxVgfcF4znkfA7fCcoDjZQ",
  "key14": "43QQMLCgt16SncjoPGTJxr4n9JhX9uZcjGx5QYv7EaFBFsS23yAfJ2TZjwATvKzaX47vvuNDAeauRnEjaFuRKLcy",
  "key15": "4r1BFgNE46oT3qJRRUfgC2AKf96Dm9MrcatFthwbkMdkTPH4b2C48Fq3gYKyYT3VdfZ3J2e5cQreMU4VLnZVgwkG",
  "key16": "21XjJmGpJ6GmzXWwGh1zwiEAp9TLFQysk1n7b7tCyn5g2ZcJkKifBfYABvnNiWRxbiDUu6d8uyxbHRrPj2WJtoiZ",
  "key17": "2uTh3mrNfoJbYkTdh8mbZF9m5ak8DGLJqruF21pXNMHYPPeg1tWxB3hD1LV6MYGfLzcHaLTXuowDdrwyFYjq4Frt",
  "key18": "4W3siRfMrACPHNkxRDNbu28o9eYX4BxYh2yRjXkdqYByS7d4EVCSWNWf9B7Spe3nC7VbZght3yV6yUBAsijhTbs9",
  "key19": "5Fgy6Kfk13qxnxdchS9gsjvxR7JpA7974bBt6QvmvGHBEPJnudyp5RSf13RdGxpFiscubbVvYyRPVFGsbm4zjzTh",
  "key20": "3oTwdR1abtfZqs32BgMJy71XqTUHcCtismw1rKy4bmUdmhtSvezpyFyA2g6pTkzgHU3Lmr94c7WaFw5U4mEJtoMh",
  "key21": "375mnDpxLWbSek8gmA6txsVo5M9bK9j1KXqD7w5Z2yVuKsY6umczyefXyzfVETSTu1ZC6EXMi6zYcWdBXXjySSd1",
  "key22": "tryDCsbdfzpaBZyAm9u3nEGXbNvQgf6tJpNPW36JNpT5vFy2ugLN7CSqEvaUYCAPBWfSRNNi4BTdENxeQhQTEng",
  "key23": "2hUi9z5Mnh5QemtSPtC7jHHm72kBzPaS3LeSBrUBwj8NP3PdLX6xy6KekcPN8WMagBRv7oa5jkthi4yS678z2YsA",
  "key24": "2TpQSYoNUanoTAeVVwn7cKP7AR7aUepHrsb28GrrJB2ChcJqP2SB2dce7Rdj2WiPc6vZRQPB4RkCM4cFtHAyBreS",
  "key25": "5z4HLNgsauWmdPsmm3vmtJJQXLydem4rTMHWVRxjNmtwNwxaeaco1oCBZZeR48Lq2vkf4Fx3SME8AHhU525gYk18",
  "key26": "4tPGPicY4Q6iEFFyFJSqJYxBqxKjpctzhncM9g172HmM7FaLF8AwK4VSnp518doBWymJTiVXyHoQS5Xq8guNGvvf"
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
