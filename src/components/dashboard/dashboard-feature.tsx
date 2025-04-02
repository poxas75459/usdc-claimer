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
    "3zgzTUV3EfJZsFmDzXTcEbf2bw8EVp787frYxV7jfQ66nbgpiowr3Hh63UjRJwSNxsMk2DBiKbTB3hKVHnoAcA2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39N7nXHFVgXPTbjzwhnC6kwRBZAkSANfiaGV7KJaxJMWHq6k6PFHm4g1zw5jPKeBQ3rrm3pFW4SkSSQmKoGSTgG2",
  "key1": "4Fr5ZqMDWQwnp8Uy3Xn82c8CrsZneUydYEt89eKWQ4jvKbYuM1AnBdCJQAxUCWH3jG992WdjbDBG3RaRzzQuH2kw",
  "key2": "3DND45NiCMFWPn6WvtDxTPCUrd1eRWNxTvJUtuyZuqCCTyjcNDu5dXwMibTgzoPqdabizAF1G8h9xWKEC5t5GSfK",
  "key3": "2pRWjizvvg9fjWFeaJG3c1qPbvWX8EZ5W4KJfX1WQroyZN1grvqhNHvCyhjCHMbcktmgC13XV7YJpeUVEEWjsv1o",
  "key4": "2SKdf3W7ddnjYuumsjqauhJ4W6w4vC8yGgBYDfZcaCysEfVspFxmoDxf6LnAA51vbb3BsWHVLc7rVdcw2vL6P5Wr",
  "key5": "Zq1iSbLAzoPZy2ghf2mjqi8jjyHffKgJu8AZV8kBQpUc7V4fwW2rfbRh9DkFfNQRFSzGCwEthqpwoXzReWyuMeR",
  "key6": "5KncxGx43z9rS9ZHoohZTB4N83tsTVbLkhKwsDrbgLLxJ4LgP5wGx18V9xL3nCtoaLPZDFxqjuVXPxARUvFdPS9K",
  "key7": "2Q5p8sXqiFLTmrXoEgxcMArKW3wyQB6cJQd3R69CcrKiNRXGXc6LzWTopkrEwBa4Wg1XPGkbviTVKKTv2AtJtjgS",
  "key8": "4jMY6J5vCc1FZrQMnfL39ZQ6xDGhYdGBQCSgz5xrHyjh9dNaArVu5GfMN6sbmoccN2eaLjDaQuJieBiQyBxgc4Fn",
  "key9": "51JWfddgeHM3TZG6f3tFPbiDBd6nuGrpL7CN32gyfEhaFg4XqFkMzjG8kniXntEtiYb9wSu6F8LGbz8g8yBjZXVX",
  "key10": "4QFr9sotR1aVThLn1yPa7BjBnfM1L4ZtaTms4PFnKdRjbfEw9GzVE4fmBhnU75cLx6DFvKGmHL53HT68cttqHDzA",
  "key11": "5BakhgBYDvAkhJH7Tw3nUgTAtuCfAifK4wPvw9TK7Et59qzDpvN8y4snYgzoUou3zZ2i82gKtWwpBiJczMuXuDPY",
  "key12": "3aJr9XyrpGY2Q78GCWgk2ACNugcyU5qnQ2yvJCUWnWPZ5U9QKEwSKS9KmyFoyZbx2bm6XU4n53puSTZFq1KvGLRH",
  "key13": "4T2zAw6AnU44Mdd7cyJH44b3Na9X9iZuC7vuW2YBqwKJ2qiN6qrcRcr3dy7VcE3ikjwUuddf2GfbW1iGUKVz6p55",
  "key14": "62RtHxbKgfY1h7kL2F3Vh2p71TfvJpAsnamchExVUQBJVDWGFf8o1nqX1pQaLshguznzVMk18CCq3z2SDb5BqKcm",
  "key15": "554qBV2mqsRoPCmquKjRvZkvpVx8WNgybVmR9fPeFP4ht2Bx6opMc6DDTgJv9eQxgaPYfChZXk3Kzu1SRWQT7xQe",
  "key16": "R8MJKmRosfEkGUmfwu7ihQ6zcFKG44eWt2gnEqxZpJ2g9MBAmZodWCfjdJT8a8jCNRrSe9ZM8pKiShJ3qqt9Lin",
  "key17": "4duP886su4xGf9wjyATwAvGkQKq8YzbyURA4sg23Gzyw37u7wdv2T4AqHZim82DT1crEJh8LYyCmjvGU6VWdAn3S",
  "key18": "2tv6TVoSkGPWAhmQQutRjY5LCwdeREeqHYNeZkHwVf6FNgfpfKe4XFfpCo3gkExcfDcR1x7s7xBcBRHScLUBgSdf",
  "key19": "5iEFL64aVsAJESaSPFHxDMxbS84SBLEWwhK3SscTKjbM871BfERr1hKaVrDWBcKzz8jBPExBw8g3nqBjExKM9VSQ",
  "key20": "2gF6khK7XnyCNPzYX5obLZTS5QXZcM13ot15V3ZF8GD3G8S1jixrwqxcV66vh9GBeFXsQwfeMvmPZPRUL59CwA9B",
  "key21": "3CFRNozJmK2RRQiystPWsEyZzvJ5CR44sAVuL976zh5zwpr2AJDCEwkAg31PnhLWFkA3ZG9WNfnE9faufg3YxV9Y",
  "key22": "2ZZmrvFdgba9HkEPQhWUvm8wfSM6ktihaFfCTwCgpPz7CovcR7j2uQ4FT9X8HwGKTmiUXeVHicWFddpE5AeWCKL7",
  "key23": "66NhX9vfPtpwnJMcEmKZ9xv5cxRc55oYwnZNKEfMBDyB8e9aBQEoCzgRZaZyP4F7UF2pTfWVAztuYMDWfYmh9Yiu",
  "key24": "2F9Sx91Gbq6aXarhYV4FH5LE6GEMd7Ne1mEbVGW4xPqGFZpZwNgXwn5t4prjXVE5RcbZ62wnLfQExtMzVczBW4Rh",
  "key25": "4wKjS9hrfNjdNLUhCSRSwH39onQdxns5HsGic7afTSLyafqkssDU42ek3c64esbxnRm9KDF5eYBvTUdicHgkU5cK",
  "key26": "4Zrut7HBgbwjJnHcEyXCnVWBP6uvmunK2WgBuGK4CrKxDWrDdY3yPnj4TzpKqvfkVmLSEWKi997NyaWGa1ZqfXyN",
  "key27": "5zNmMibuZMzZMQ8Mf1KoB6bsKpyAtCrajn2ZSgZW6YW61sEdoRL9ZGe8WuWP2tX6JBDwDXUbnAaXR6WFAADMHpM2",
  "key28": "3kw8DCUYQPDwPnvWWXzFH4FtAYoCoSLa9Jr93FTcxe4R5FY3qM36V8apwr1YXxGLBUdy7eXxirEraLqCJU2m1nb6",
  "key29": "C8m3L4po8yehcDQXiES1o6BDrmXHLa63MNSok13Bwe4kBqxJSfMyK11gtsZvXCbE54jfCdgUdidoVcrnXEo2JJr"
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
