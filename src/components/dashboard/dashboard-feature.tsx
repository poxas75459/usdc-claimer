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
    "5eTfTJACDA8WcwjFpZxGHAWShU18DR8Pe149eBJATV4xepNtUSyad4PGc8MDy9GM358ZJppEdpwqFjC76CvMw8w2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "613thWdaiSQ2FNMDztGZmWrDgUeDcodZaNoxY14pkF1MJXDCEuzDmvSbDU2eBTNvayC4bcCLinYXAKsWzZjrHfwV",
  "key1": "31xEtKVPJ4DqD9Yz4crVjYGghvtxm43ZyGNyBrA3pJHwEcsGDggLrkR4EPNHTeMVPgWuRRJteBufXtzpbQuUkr2m",
  "key2": "46aKJRrfMZrKkQRgG6sMUAf9CKmXfH6E1RQgUb81Ue2ySss7FJ6Mt3nHxx8nCndmkczJUYF2Cb7h6xnjbbgKzHne",
  "key3": "2e1f5u8fgzJTScde1wfXTaJvBptbv5mXiURJXkC4fVnNMJYD7ZqXGJpHqXg53nJLpYyzB1XP7D5u1BCBPK4kpTHt",
  "key4": "4i4jg4meaheoUsegwaYDMwkPcRoGE7rSRE5otpzWxoPSvXZrvJwQCssXBz5KZswiRTt43LKSLSBysiEdVgZurEVF",
  "key5": "2n3er2Ud4jCc5tTxStj8aPrf1eHdo61YrD4Siut8CXtdnF3s3yhxhmpgD2S3JKUL7M9TUoGHXnYx6yahMe4aemEM",
  "key6": "4RWWcoNqv7ctBPM3feXqkXaWvDA9Uwfb61YQgoiGbzSCCZpt5Cpr7xh45op5BYYhA3myrSAKUr3c1BuqqXBhVLgG",
  "key7": "6yTxiNis5aUqfBsEiWNrXfqCbW68Wo7Q5Q4HPtkCUm6BUd8eZebTnPrM1i8E28B2zabz5CXP8hZ4ckdAFA8gExG",
  "key8": "21aYnpF1hj1KgaMa431hXVZyfTMNq1nLEbdQQKPRfHzNdef62D2FVDYQ6BrbexUTtY6S3hWnQNNcw77yzGVGDyUU",
  "key9": "3P3ruTV8gY3V3DiCPPUWpTm5b2NCC9MkW1bHhRDhz7sxasjc2vbMSWnjo9vrVcDodpwdGdDybVLB4iQqTxnUTs2Z",
  "key10": "5XhbCJRfMcGkT9g3fia1ta7Cy3QZ2FieRjwX8hWN3CL9WmM9oyQxD9e71PZWzCj35JCyb9DQJYphYzuy1yAGSSCy",
  "key11": "5D9soHnzWCAuiEkhrM9hb5hmRJyDmeczjeWPAHw6d4gNeQGMw1JNBHRACxojgMP5SQVAJPKZb15fvGMkwmirrB7i",
  "key12": "6346mnoDh8LYXC8hWWRnRNY9Lh9ygP7yEztQhSnZCNt8AKNirvTqp8bWmvaWgkDULWrSFEovCJKn9eHMtFWnFGB6",
  "key13": "3a9hfPpTLmHbJfAdeGi6G9N9YWj9RZ8vxWQAx21R7zSFjR9Q293FFicpnR2aUYqqYKEzeCP6gqEG6bPoFHpJKLgD",
  "key14": "2JkEU5njuPgdiBfGZbBbwZC1vDuzbz19aBGQ8m8LPPbDxZS9B4eSWVg8QnVm3WFCemydk4pH52iSqn98qhTkGM3U",
  "key15": "5Yav43cUaCz7aJrB8jVUDW9mQiGBxoc8yWyM4L4CfxyxZg4iDJMsgsgtP9LgUQuVKcYrJ8BZMqTnPakBJvyfEPbc",
  "key16": "3EJYCKtoQTHjkiYCh6xE1Y5LfmDvb1oG1dTFWkUxaUshHfXwk3jBJw3mowSA9LqpB7TSyVeJnB88acqtjvqJ15BX",
  "key17": "216WWwW1TyN9vr1RUPbnUGWo2byGXda7HSmTdQwMnEgGV8wmm3FxkPxbP5683KBmzq6VpGmGLWL42FVQbbZPVgFA",
  "key18": "Gobk4mAbGT1gtrJeXvRtKVHxPk9ZTgEHg1AQTFd1h82Yz5G5MEkGPn9ko8bbTN3Vr9JTiMKKEEGneUR1tdd5wv9",
  "key19": "5D7xFGQaUsFDK1mbcfSerPyuL7EqhuByAw5D2ZV3xsG5ZhsNgQssR4v6CsbXzkCkeErdaHhh1DXfdggKwUGNCWL6",
  "key20": "4abQw6f3PABuSiKKKGFnhyreWnHM623RTEWuTCgwKHPUF3mcmAnxFg4PKQDiM3xGEzWuYLFjA9QZPp4Kt2fz3PYD",
  "key21": "2Khm8WiTpdnuHpmd7AJZJNBoyjjVLiv4omWfyKe2N5tGzZnSfbH9isZyfHq7rh4JFv1WL6T6zyjKNdfR5m8KPba8",
  "key22": "4DL2rtQ5MZv3h2g5VpikcteM8NWwEXWg72hQhtSp222fHZux3cVnNXKSJ1CCM9HxFzdGamewzjrKU3yEiEwMfRHk",
  "key23": "og1SHpaSwfyZH5uQ6bPgsjZSr1eFi2sgzJDMb7GRPPMmZtVBhKYVkbo5gP1BNw5R1mcUsrg7r7qERMP4YV5G2rG",
  "key24": "65Vt1yZQQVPvr44kuwWQhAzR3ekBPFtXQAmQaTsppeAs24RsyBs28dAuhZd4koh7ruDWBvLEjHJu2qzKV8dPiFdY",
  "key25": "3swTdkBbbBE4nzWbbe528eouzd2rGL1MNaPBSPGscuERqCbcRbK3UoiNhRGLGCmm11qHvB8QvmkdTNnZJaRayqq4",
  "key26": "4hthw2B5shaFxxQ5sjUWWSoq4XGW8AzEjFHpANuBXeLug5AgHWTYgFEBfm13AUiySbYW1b1UgV1y37UJadh5GeUF",
  "key27": "3wnsV7f1pYTfE4tgstqbriHDEU2gQ7UqcneY3ac9FxUAkcB26DBngf4omHYgWKZaaycdMxtCR5W1WV8boSZVUjtH",
  "key28": "65n1ZpWDYpkLcFNeFAjn9zJAzbwMPgyQeyw7DUEEr7JAFMikEdFetbuQZnqcUgKxoPgFgHwgcyZp6sTTZTgERiQk",
  "key29": "2faarGFH2ZbfjpedqqQ6x3e1LjXgNNzWnmRh8YtkpqZo98NNYwUdKbAKh5YpEruCeFbZJotUBhbnRfyBk22muAWR",
  "key30": "ppqsL5Mx32JwBvd8KFwcyPmSrA3uai3htSNBaARCuDCG7fow2x7SBcbgXHjvF2WAKSpGjXvLSv8s5wNaSRLWXD3",
  "key31": "24DJffSV6ucm55UZSpgg4jgL28LXUBDH6kUZiBHPc8Da6ibahCpMjTwcaQQVHtvKA2bCGvBNE1whyWRapmE3vvmS",
  "key32": "23qnMmyB1RepDdfgqDA6JjMqgNYMwzbrZi9jEg6hmJvDpoSYj8F58odkhidBmautU1hfScm4Uo4nurBQFhKsUxKU",
  "key33": "4jmyYdeWXJtX2qsqpoNuK1wkhdT2Lj2KsGgShs3ZNbccrrFTEEx6Syq8BXGzrLJhgo6tRk1eQbFPj7Jy1kmygmpj",
  "key34": "2p9eyqdEzaK8SsfBjkUuNR6fEv72e3cSjoToDi4YMYujjNXtc2iNXTUnaE1qTtjFvCuEanZRUqWhyH3w7qtMW9Lq"
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
