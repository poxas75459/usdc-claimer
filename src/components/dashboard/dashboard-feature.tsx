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
    "54qpdKo8kYd6UHKM1ZQh1VzgxMSRJNhSGrwnrHonGCR4xwXQA35Ci2L1TWiCEtZCJcy8bqzuYDgr1TCYTZjwrQiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FRTRN8dKMfPeXv71BsrDEwpQErKPib65pAMyTRQBtaPpjF87PgHKTHMMiCVswJWZXnr1usjBBt8jwqpTbJVEtAo",
  "key1": "4HupPcnWcJzWRLVp74XLWpmLWEFzVV7bPhEXaZ8KJ2bDjQ5qcGgo1gBChZLgaKArkXoZtpKQmfNHpvChT5dndfL4",
  "key2": "5c2rrvBUzr5Ww1mHbcTqJSCPfkyiRqyaS5kZmo4KnTGuuyowHzvDkiKi6AJw4BfhRhTFTvnfY6iiSwsLoGubiGzf",
  "key3": "21H4c8Fgef57gArgCVerh85iopb5qf4SoE1i5sZ2TL12MSmp1sWFFMY6qwRXbXki6JEoD7SLXwC3jAUC489FDLZs",
  "key4": "574dQU2xdPeJR8ESb7mVQJF5r2epvvjAuDYR2EfpYtxGfSMn7vn44U9maziAPtq8ezhaVXK77uwb1Mvub369VWh9",
  "key5": "49s1PPj3yYKvmS1AqKPts734JqdYrjUDJdmedXmox2mqHGQp9xnjqAhhjWWjbFb25Wp8gi1My3zAnvqzLupXmn6M",
  "key6": "4vAqq7tfD8AHSJn5auKJXb5zFokZyVaa57CgJozbg3iZg4i7nQGHQcmzBT4qBqfZBEqRWjbLveZWQYwsYMVRi8Go",
  "key7": "2gDketXkASAfTAtUgvjhYmzsQPsxaHywY1ddLj8ioDBnofzwr535ayEteMhGWEc8WEuXJniHhatPbF58cfAFhm1m",
  "key8": "4NsE81DbXhLhD97UbUMen55cCwV6DymPA1yiE9Q57MZ6iWobzcwvwT2TodVGcdXXJVM1zxopV3oEwtP6sLpjbivs",
  "key9": "4DWvSsApxXgAyymtJykub1paRveoPhJApccNE7DYxjGbPmq149hSBVhnoniSP7R8Fr49jcrez436kL92Raxwpg9W",
  "key10": "3wAwuFc4TAsshFTTxzdYYhmRNYosGn9ZaHRk4vQbgQ3qhFQymeqe4ctJRfxe9B6An3MTmhpSMvpNyqAnFrkjA1iJ",
  "key11": "2jdaKERxjdRyLJav1AY6tfxKLKgp6nbXF2eNJRBGP4WoE6BF74pk7S5M9W5irBFVM1FWMcBj7DP1S12HTvyeGdnt",
  "key12": "dRRXgHkHsTdxXRkY4Cm5YXU29qN4izrAesDSTxDwEiPyFYeyfkcJpFLMiqQPJ5iH9y4HJPbjLyk65b41ZiHkMft",
  "key13": "tYSej3EoMbtjoumg1uNTndwW3cRK4gJBpvWteem2aDD43iCQAZdx9igRooNwmn92DLnsTDxavb59qTX32jnAgZX",
  "key14": "4PMqKB6TovzenBnMdUAdxcP2viK5nzbEREzZwoq4pfThyq23m9tvfeBK6KPDHsv6iLaqBbWMQYVttSpQ6LmJomhG",
  "key15": "38ngRbHS1fdUpbYqiWXyHUKiVPo5eBFCCR552HLgsJwjsEiiTqYF8QpBM9GMAEXeG5rZxGM59R3x7DAekTDMXe2U",
  "key16": "5PesrRvsPf7149XSykr5sohAJ3K2vSvmW4DuNEqijFjmcHGNcbtagXYhcfb9rEudAVbAGumwUgH4FnQBbfvy9xLZ",
  "key17": "5JEZVT4Z2jSXZ6HQZdgjrVFnboFBotxKoEGmGLxEnSgMRhFNwjqzsG3GeNDoucduiAVaQUwFFa9oNKtZAanavnfj",
  "key18": "2nsNNb1xq9CLk23odQ1TvaBCd2kDbqApcwHCS6pujz3Nu8LRXQTbBTtcXbG1kMxYap8vPfjdcKDEPCbDmw8gkmaJ",
  "key19": "2M1KwzXdTKYMfHMdJZ62K6jntPdHoV6zx6zGzBD47ZbTPfQuGP7owx7CTXzKG7MpTcS2285ZynhT7mNczPfe2jB",
  "key20": "5wecv9HX5pCWLpcea1J1zKCyZ6CesA6S9X6iv4QjZxmPeRXHUvHgNhKgBRkC9dELVmsSiafb6naNXJyqoyczpShS",
  "key21": "4p27K6Q9FfRQWTf4KL5PhPyw5WtvEiW1bgn29nhTYTceGrkfBrZLatCYxW4hsna9kcrHdpgcGUUrbFPHx6E8Cwnx",
  "key22": "5gNFmD9Tmzv2jzMLavX4LAs7ppUPeb6kfMReSUAvgmEUCpqQLJoMWAGSc6H6wWc3VSUYzJedg6yMUk83sdFbk8Hj",
  "key23": "4avMYd9gf2ZLLHeT3q42fp1bpbYtPkZHmyRezuQKR3FC1vWUhQAFvXogr7A9YXG1zpWKFrrckHF8JvxGgWxdsoFE",
  "key24": "6ADYNwnBfg3k8wGN2WpbzLhc3LRqjSkR2AqwgMkHeQ21rWTa7use7aVgXZdcnAirbaMxFuUE6ZHkxuS6z4mEXgY",
  "key25": "5vETqdsTu1XN8LBQGSF2CfJMabuyYF8Nfa1KWquXUJFs8Th2n7Lsxg3wpHATSzTwjyzXHRHQQXZpApE7tRrUimhS",
  "key26": "2UU5ZhuoHhnKsVHgPAY4eVoSZvHJNrCrsQiGvmqnXSmAJPg64gwR9uyt63no5k8oKPaTaRi8Ls2CQx2xDn63ZtWT"
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
